// Plan-view SVG export from the geometry built by geom.js. DOM-free (browser, Node and CLI).
//
// opts:
//   style     'cad' (dark, as in AutoCAD) | 'bw' (white sheet, everything black) | 'color' (white sheet, colors kept
//             but darkened so they print cleanly)               default 'cad'
//   region    { cx, cy, w, h, a, clip? }  area to export in LOCAL coords (cx, cy = center, w × h in the *rotated*
//             frame, a = view angle in degrees: the CCW angle of the screen-up direction from north).
//             Default: the whole drawing's extents.
//   width     output width in px (the SVG's width attribute; viewBox keeps real units)   default 1600
//   lineScale line weight multiplier                                                      default 1
//   texts     draw texts                                                                  default true
//   visible   per-layer visibility array (same order as g.layers)
//   preview   true = faster, skips sub-pixel segments and caps fills/texts
const hex = (r, g, b) => '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const lum = (c) => (c[0] * 299 + c[1] * 587 + c[2] * 114) / 1000;

export const STYLES = {
  cad: { bg: '#212830', stroke: [255, 255, 255] },
  bw: { bg: '#ffffff', stroke: [0, 0, 0] },
  color: { bg: '#ffffff', stroke: [0, 0, 0] },
};

function strokeColor(style, c) {
  const l = lum(c);
  if (style === 'bw') return [0, 0, 0];
  if (style === 'color') {
    if (l > 215 || l < 25) return [0, 0, 0]; // white/black (ACI 7) -> black
    if (l > 125) { const f = 125 / l; return [Math.round(c[0] * f), Math.round(c[1] * f), Math.round(c[2] * f)]; }
    return c;
  }
  return l < 40 ? [255, 255, 255] : c; // cad: black lines would vanish on the dark sheet
}
function fillColor(style, c) {
  const l = lum(c);
  if (style === 'bw') return l < 110 ? [70, 70, 70] : [200, 200, 200];
  if (style === 'color') {
    if (l > 235) return [225, 225, 225];
    if (l < 25) return [60, 60, 60];
    if (l > 150) { const f = 150 / l; return [Math.round(c[0] * f), Math.round(c[1] * f), Math.round(c[2] * f)]; }
    return c;
  }
  return l < 40 ? [255, 255, 255] : c;
}

export function fullRegion(g) {
  const { min, max, rmin, rmax } = g.bounds;
  const dr = Math.hypot(rmax[0] - rmin[0], rmax[1] - rmin[1]) || 1;
  const df = Math.hypot(max[0] - min[0], max[1] - min[1]);
  const [a, b] = df < 6 * dr ? [min, max] : [rmin, rmax]; // ignore far-away strays, never crop real content
  const px = (b[0] - a[0]) * 0.02 || 1, py = (b[1] - a[1]) * 0.02 || 1;
  return { cx: (a[0] + b[0]) / 2, cy: (a[1] + b[1]) / 2, w: b[0] - a[0] + 2 * px, h: b[1] - a[1] + 2 * py, a: 0 };
}

// Region that exactly covers an axis-aligned rect [x0,y0,x1,y1] when viewed at angle `a`.
export function regionFromRect(rect, a = 0, margin = 0.02) {
  const cx = (rect[0] + rect[2]) / 2, cy = (rect[1] + rect[3]) / 2;
  const t = (a * Math.PI) / 180, c = Math.cos(t), s = Math.sin(t);
  // screen-up u = (-sin a, cos a); screen-right r = (cos a, sin a)
  let w = 0, h = 0;
  for (const [x, y] of [[rect[0], rect[1]], [rect[2], rect[1]], [rect[2], rect[3]], [rect[0], rect[3]]]) {
    const dx = x - cx, dy = y - cy;
    w = Math.max(w, Math.abs(dx * c + dy * s));
    h = Math.max(h, Math.abs(-dx * s + dy * c));
  }
  w *= 2; h *= 2;
  const m = Math.max(w, h) * margin;
  return { cx, cy, w: w + 2 * m, h: h + 2 * m, a, clip: rect };
}

export function buildSvg(g, opts = {}) {
  const style = STYLES[opts.style] ? opts.style : opts.light ? 'color' : 'cad';
  const width = opts.width || 1600;
  const preview = !!opts.preview;
  const maxTexts = opts.maxTexts ?? (preview ? 1500 : 20000);
  const maxFillTris = opts.maxFillTris ?? (preview ? 40000 : 400000);
  const R = opts.region || fullRegion(g);
  const a = R.a || 0;
  const t = (a * Math.PI) / 180, ca = Math.cos(t), sa = Math.sin(t);
  const W = R.w, H = R.h;
  const px = W / width; // world units per output pixel
  const bg = STYLES[style].bg;
  const lw = (opts.lineScale ?? 1) * px * (style === 'cad' ? 1.1 : 1.25);
  const f = (v) => (Math.round(v * 1000) / 1000).toString();
  // axis-aligned bounds of the visible (rotated) window, used to cull what cannot be seen
  const hw = (Math.abs(W * ca) + Math.abs(H * sa)) / 2, hh = (Math.abs(W * sa) + Math.abs(H * ca)) / 2;
  const bx0 = R.cx - hw, bx1 = R.cx + hw, by0 = R.cy - hh, by1 = R.cy + hh;
  const cull = (x0, y0, x1, y1) => Math.max(x0, x1) < bx0 || Math.min(x0, x1) > bx1 || Math.max(y0, y1) < by0 || Math.min(y0, y1) > by1;
  const minSeg = preview ? px * 0.35 : 0;

  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f(-W / 2)} ${f(-H / 2)} ${f(W)} ${f(H)}" width="${width}" height="${Math.round((width * H) / W)}">`);
  out.push(`<title>Plan view (local coords, origin E=${g.origin[0]} N=${g.origin[1]})</title>`);
  if (!opts.transparent) out.push(`<rect x="${f(-W / 2)}" y="${f(-H / 2)}" width="${f(W)}" height="${f(H)}" fill="${bg}"/>`);
  // content group: move region center to origin, flip Y (SVG is y-down), rotate so screen-up = u
  out.push(`<g transform="rotate(${f(a)}) translate(${f(-R.cx)} ${f(R.cy)})"${R.clip ? ` clip-path="url(#rc)"` : ''}>`);
  if (R.clip) out.push(`<defs><clipPath id="rc"><rect x="${f(R.clip[0])}" y="${f(-R.clip[3])}" width="${f(R.clip[2] - R.clip[0])}" height="${f(R.clip[3] - R.clip[1])}"/></clipPath></defs>`);
  let fillTris = 0;
  for (let li = 0; li < g.layers.length; li++) {
    const L = g.layers[li];
    if (L.hidden || (opts.visible && opts.visible[li] === false)) continue;
    const body = [];
    for (const [S, op] of [[L.fills, 1], [L.tris, 0.55], [L.pfills, 0.9]]) {
      if (!S || !S.p || !S.p.length) continue;
      const byCol = new Map();
      for (let i = 0; i < S.p.length / 9 && fillTris < maxFillTris; i++) {
        const p = S.p, o = 9 * i;
        if (cull(Math.min(p[o], p[o + 3], p[o + 6]), Math.min(p[o + 1], p[o + 4], p[o + 7]), Math.max(p[o], p[o + 3], p[o + 6]), Math.max(p[o + 1], p[o + 4], p[o + 7]))) continue;
        fillTris++;
        const k = hex(...fillColor(style, [S.c[o], S.c[o + 1], S.c[o + 2]]));
        let arr = byCol.get(k); if (!arr) byCol.set(k, (arr = []));
        arr.push(`M${f(p[o])} ${f(-p[o + 1])}L${f(p[o + 3])} ${f(-p[o + 4])}L${f(p[o + 6])} ${f(-p[o + 7])}Z`);
      }
      for (const [k, arr] of byCol) body.push(`<path d="${arr.join('')}" fill="${k}" fill-opacity="${op}" stroke="none"/>`);
    }
    if (L.lines.p && L.lines.p.length) {
      const byCol = new Map();
      const n = L.lines.p.length / 6;
      for (let i = 0; i < n; i++) {
        const p = L.lines.p, o = 6 * i;
        const x0 = p[o], y0 = p[o + 1], x1 = p[o + 3], y1 = p[o + 4];
        if (cull(x0, y0, x1, y1)) continue;
        if (minSeg && Math.abs(x1 - x0) < minSeg && Math.abs(y1 - y0) < minSeg) continue;
        const k = hex(...strokeColor(style, [L.lines.c[o], L.lines.c[o + 1], L.lines.c[o + 2]]));
        let arr = byCol.get(k); if (!arr) byCol.set(k, (arr = []));
        arr.push(`M${f(x0)} ${f(-y0)}L${f(x1)} ${f(-y1)}`);
      }
      for (const [k, arr] of byCol) body.push(`<path d="${arr.join('')}" fill="none" stroke="${k}" stroke-width="${f(lw)}" stroke-linecap="round"/>`);
    }
    if (L.pts.p && L.pts.p.length) {
      const col = hex(...strokeColor(style, [L.pts.c[0], L.pts.c[1], L.pts.c[2]]));
      const r = px * 3;
      const dots = [];
      for (let i = 0; i < L.pts.p.length / 3; i++) {
        const x = L.pts.p[3 * i], y = L.pts.p[3 * i + 1];
        if (!cull(x, y, x, y)) dots.push(`<circle cx="${f(x)}" cy="${f(-y)}" r="${f(r)}"/>`);
      }
      if (dots.length) body.push(`<g fill="${col}">${dots.join('')}</g>`);
    }
    if (body.length) out.push(`<g id="${esc(L.name)}">`, ...body, '</g>');
  }
  if (opts.texts !== false) {
    let nt = 0;
    out.push('<g font-family="Arial, Helvetica, sans-serif">');
    for (let li = 0; li < g.layers.length; li++) {
      const L = g.layers[li];
      if (L.hidden || (opts.visible && opts.visible[li] === false)) continue;
      for (const tx of L.texts) {
        if (nt >= maxTexts) break;
        const h = tx.h || 1;
        if (h / px < 2.2) continue; // too small to read at this scale
        const T = tx.T;
        const X = T[12] - g.origin[0], Y = T[13] - g.origin[1];
        if (cull(X - h * 20, Y - h * 20, X + h * 20, Y + h * 20) && cull(X, Y, X, Y)) continue;
        const ang = (Math.atan2(T[1], T[0]) * 180) / Math.PI;
        const col = hex(...strokeColor(style, [(tx.rgb >> 16) & 255, (tx.rgb >> 8) & 255, tx.rgb & 255]));
        const anchor = tx.hal === 1 || tx.hal === 4 ? 'middle' : tx.hal === 2 ? 'end' : 'start';
        const lines = String(tx.str).split('\n').slice(0, 8);
        lines.forEach((ln, i) => {
          out.push(`<text transform="translate(${f(X)} ${f(-Y + i * h * 1.5)}) rotate(${f(-ang)})" font-size="${f(h)}" fill="${col}" text-anchor="${anchor}">${esc(ln)}</text>`);
        });
        nt++;
      }
    }
    out.push('</g>');
  }
  out.push('</g>');
  if (opts.scaleBar !== false) {
    const nice = [0.5, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000];
    const target = W * 0.2; const len = nice.filter((n) => n <= target).pop() || nice[0];
    const sx = -W / 2 + W * 0.03, sy = H / 2 - H * 0.03;
    const col = hex(...STYLES[style].stroke);
    out.push(`<g stroke="${col}" stroke-width="${f(px * 1.6)}" fill="${col}"><path d="M${f(sx)} ${f(sy)}h${f(len)}M${f(sx)} ${f(sy - px * 4)}v${f(px * 8)}M${f(sx + len)} ${f(sy - px * 4)}v${f(px * 8)}"/><text x="${f(sx)}" y="${f(sy - px * 9)}" font-size="${f(px * 13)}" stroke="none" font-family="Arial, Helvetica, sans-serif">${len} ${esc(opts.unit || 'u')}</text></g>`);
  }
  out.push('</svg>');
  return out.join('\n');
}
