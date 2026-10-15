// Plan-view SVG export from the geometry built by geom.js (used by the CLI).
const hex = (r, g, b) => '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
const esc = (s) => String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

export function buildSvg(g, opts = {}) {
  const light = !!opts.light, width = opts.width || 1600;
  const maxTexts = opts.maxTexts ?? 4000, maxFillTris = opts.maxFillTris ?? 60000;
  const { rmin, rmax } = g.bounds;
  let x0 = rmin[0], x1 = rmax[0], y0 = rmin[1], y1 = rmax[1];
  const padx = (x1 - x0) * 0.04 || 1, pady = (y1 - y0) * 0.04 || 1;
  x0 -= padx; x1 += padx; y0 -= pady; y1 += pady;
  const W = x1 - x0, H = y1 - y0;
  const px = W / width; // world units per px
  const bg = light ? '#ffffff' : '#101418', defStroke = light ? '#000000' : '#ffffff';
  const fix = (c) => { // keep white/black lines visible on either background
    const l = (c[0] * 299 + c[1] * 587 + c[2] * 114) / 1000;
    if (light && l > 215) return [0, 0, 0];
    if (!light && l < 40) return [255, 255, 255];
    return c;
  };
  const f = (v) => (Math.round(v * 1000) / 1000).toString();
  const out = [];
  out.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${f(x0)} ${f(-y1)} ${f(W)} ${f(H)}" width="${width}" height="${Math.round(width * H / W)}">`);
  out.push(`<title>Plan view (local coords, origin E=${g.origin[0]} N=${g.origin[1]})</title>`);
  out.push(`<rect x="${f(x0)}" y="${f(-y1)}" width="${f(W)}" height="${f(H)}" fill="${bg}"/>`);
  const sw = px * 1.1;
  let fillTris = 0;
  for (const L of g.layers) {
    if (L.hidden) continue;
    out.push(`<g id="${esc(L.name)}">`);
    // fills (triangles) grouped by color
    for (const [S, op] of [[L.fills, 1], [L.tris, 0.55], [L.pfills, 0.9]]) {
      if (!S || !S.p || !S.p.length) continue;
      const byCol = new Map();
      for (let i = 0; i < S.p.length / 9 && fillTris < maxFillTris; i++, fillTris++) {
        const c = fix([S.c[9 * i], S.c[9 * i + 1], S.c[9 * i + 2]]);
        const k = hex(...c);
        let a = byCol.get(k); if (!a) byCol.set(k, (a = []));
        const p = S.p, o = 9 * i;
        a.push(`M${f(p[o])} ${f(-p[o + 1])}L${f(p[o + 3])} ${f(-p[o + 4])}L${f(p[o + 6])} ${f(-p[o + 7])}Z`);
      }
      for (const [k, a] of byCol) out.push(`<path d="${a.join('')}" fill="${k}" fill-opacity="${op}" stroke="none"/>`);
    }
    // lines grouped by color
    if (L.lines.p && L.lines.p.length) {
      const byCol = new Map();
      const n = L.lines.p.length / 6;
      for (let i = 0; i < n; i++) {
        const c = fix([L.lines.c[6 * i], L.lines.c[6 * i + 1], L.lines.c[6 * i + 2]]);
        const k = hex(...c);
        let a = byCol.get(k); if (!a) byCol.set(k, (a = []));
        const p = L.lines.p, o = 6 * i;
        a.push(`M${f(p[o])} ${f(-p[o + 1])}L${f(p[o + 3])} ${f(-p[o + 4])}`);
      }
      for (const [k, a] of byCol) out.push(`<path d="${a.join('')}" fill="none" stroke="${k}" stroke-width="${f(sw)}" stroke-linecap="round"/>`);
    }
    // points
    if (L.pts.p && L.pts.p.length) {
      const col = hex(...fix([L.pts.c[0], L.pts.c[1], L.pts.c[2]]));
      const r = px * 3;
      out.push(`<g fill="${col}">${Array.from({ length: L.pts.p.length / 3 }, (_, i) => `<circle cx="${f(L.pts.p[3 * i])}" cy="${f(-L.pts.p[3 * i + 1])}" r="${f(r)}"/>`).join('')}</g>`);
    }
    out.push('</g>');
  }
  // texts
  let nt = 0;
  out.push('<g font-family="Arial, Helvetica, sans-serif">');
  for (const L of g.layers) {
    if (L.hidden) continue;
    for (const t of L.texts) {
      if (nt >= maxTexts) break;
      const h = t.h || 1;
      if (h / px < 2.2) continue; // too small to read at this scale
      const T = t.T, ang = (Math.atan2(T[1], T[0]) * 180) / Math.PI;
      const col = hex(...fix([(t.rgb >> 16) & 255, (t.rgb >> 8) & 255, t.rgb & 255]));
      const anchor = t.hal === 1 || t.hal === 4 ? 'middle' : t.hal === 2 ? 'end' : 'start';
      const lines = String(t.str).split('\n').slice(0, 6);
      lines.forEach((ln, li) => {
        out.push(`<text transform="translate(${f(T[12] - g.origin[0])} ${f(-(T[13] - g.origin[1]) + li * h * 1.5)}) rotate(${f(-ang)})" font-size="${f(h)}" fill="${col}" text-anchor="${anchor}">${esc(ln)}</text>`);
      });
      nt++;
    }
  }
  out.push('</g>');
  if (opts.scaleBar !== false) {
    const nice = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000];
    const target = W * 0.2; const len = nice.filter((n) => n <= target).pop() || nice[0];
    const sx = x0 + W * 0.03, sy = -(y0 + H * 0.03);
    out.push(`<g stroke="${defStroke}" stroke-width="${f(px * 2)}" fill="${defStroke}"><path d="M${f(sx)} ${f(sy)}h${f(len)}"/><text x="${f(sx)}" y="${f(sy - px * 6)}" font-size="${f(px * 14)}" stroke="none">${len} u</text></g>`);
  }
  out.push('</svg>');
  return out.join('\n');
}
