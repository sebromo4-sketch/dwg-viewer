// Detects the "views" of a sheet-style drawing: many CAD plans put the site plan, coordinate tables,
// details, location sketches and the title block side by side in model space. This finds those blocks
// so the viewer can jump to each one and export it on its own. DOM-free (browser, Node and CLI).
//
// All rectangles are in LOCAL coordinates (world minus g.origin): [x0, y0, x1, y1].

const num = (v) => (typeof v === 'number' && Number.isFinite(v) ? v : 0);
const area = (r) => (r[2] - r[0]) * (r[3] - r[1]);
const inside = (r, x, y) => x >= r[0] && x <= r[2] && y >= r[1] && y <= r[3];
const contains = (a, b, tol = 0) => b[0] >= a[0] - tol && b[1] >= a[1] - tol && b[2] <= a[2] + tol && b[3] <= a[3] + tol;
const overlaps = (a, b) => a[0] <= b[2] && b[0] <= a[2] && a[1] <= b[3] && b[1] <= a[3];
const union = (a, b) => [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])];

// Closed, axis-aligned rectangles drawn as polylines (sheet borders, table frames, detail frames).
function findFrames(model, g, D) {
  const [ox, oy] = g.origin;
  const out = [];
  for (const e of model.entities) {
    if (e.type !== 'LWPOLYLINE' && e.type !== 'POLYLINE' && e.type !== 'POLYLINE2D') continue;
    const v = e.vertices;
    if (!v || v.length < 4 || v.length > 6) continue;
    const xs = v.map((p) => num(p.x)), ys = v.map((p) => num(p.y));
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const w = x1 - x0, h = y1 - y0;
    if (Math.min(w, h) < 0.012 * D) continue;
    const eps = 1e-6 * Math.max(w, h) + 1e-9;
    let ok = true;
    for (let i = 0; i < v.length; i++) {
      const a = v[i], b = v[(i + 1) % v.length];
      const dx = Math.abs(num(a.x) - num(b.x)), dy = Math.abs(num(a.y) - num(b.y));
      if (dx > eps && dy > eps) { ok = false; break; }
    }
    if (!ok) continue;
    out.push([x0 - ox, y0 - oy, x1 - ox, y1 - oy]);
  }
  return out;
}

const KEY = /(CUADRO|CORTE|DETALLE|LOCALIZ|PLANTA|SECCI|PERFIL|CROQUIS|TABLA|SCHEDULE|SECTION|DETAIL|PLAN\b|PROFILE|TABLE|NOTAS|NOTES)/i;
const stripCodes = (s) => s.replace(/\\[pP][^;]*;/g, '').replace(/\\[fFCcHhWwTtQqAaXx][^;]*;/g, '').replace(/\s+/g, ' ').trim();
function bestTitle(texts) {
  let best = null;
  for (const t of texts) {
    const s = stripCodes(String(t.str || ''));
    if (s.length < 3 || !/[A-Za-zÁÉÍÓÚÑáéíóúñ]{3}/.test(s)) continue;
    const score = (t.h || 1) * Math.min(1, s.length / 12) * (KEY.test(s) ? 4 : 1);
    if (!best || score > best.score) best = { s, score };
  }
  if (!best) return null;
  return best.s.length > 46 ? best.s.slice(0, 44) + '…' : best.s;
}

// Dominant direction (degrees, in (-45, 45]) of the long segments inside rect, folded modulo 90 so that a
// rectangular site gives its tilt. Returns the view angle `a` such that rotating the plan by it makes the
// dominant axes horizontal/vertical (see Viewer.view: `a` is the CCW angle of the screen-up direction from north).
export function dominantAngle(g, rect) {
  const diag = Math.hypot(rect[2] - rect[0], rect[3] - rect[1]) || 1;
  const bins = new Float64Array(90);
  let total = 0;
  for (const L of g.layers) {
    if (L.hidden) continue;
    const p = L.lines.p;
    for (let i = 0; i + 5 < p.length; i += 6) {
      const x0 = p[i], y0 = p[i + 1], x1 = p[i + 3], y1 = p[i + 4];
      const dx = x1 - x0, dy = y1 - y0;
      const len = Math.hypot(dx, dy);
      if (len < 0.02 * diag || len > 2 * diag) continue;
      if (!inside(rect, (x0 + x1) / 2, (y0 + y1) / 2)) continue;
      let ang = (Math.atan2(dy, dx) * 180) / Math.PI; // from east, CCW
      ang = ((ang % 90) + 90) % 90;
      bins[Math.floor(ang) % 90] += len * len;
      total += len * len;
    }
  }
  if (total === 0) return 0;
  let best = 0, bv = -1;
  for (let i = 0; i < 90; i++) {
    const v = bins[(i + 89) % 90] + 2 * bins[i] + bins[(i + 1) % 90]; // light smoothing
    if (v > bv) { bv = v; best = i; }
  }
  // refine inside the winning bin using the weighted mean angle of its neighbours
  let sw = 0, sa = 0;
  for (let k = -1; k <= 1; k++) { const j = (best + k + 90) % 90; sw += bins[j]; sa += bins[j] * (best + k + 0.5); }
  const phi = sw ? sa / sw : best + 0.5; // 0..90, direction from east of the dominant axis family
  const a = ((phi + 45) % 90 + 90) % 90 - 45; // (-45, 45]
  return Math.round(a * 10) / 10;
}

export function detectViews(model, g) {
  const b = g.bounds;
  const full = [b.min[0], b.min[1], b.max[0], b.max[1]];
  const rob = [b.rmin[0], b.rmin[1], b.rmax[0], b.rmax[1]];
  const dF = Math.hypot(full[2] - full[0], full[3] - full[1]);
  const dR = Math.hypot(rob[2] - rob[0], rob[3] - rob[1]);
  const base = dF < 6 * dR ? full : rob; // ignore stray far-away objects, like the viewer's Fit
  const D = Math.hypot(base[2] - base[0], base[3] - base[1]) || 1;

  let frames = findFrames(model, g, D).filter((r) => contains([base[0] - D * 0.05, base[1] - D * 0.05, base[2] + D * 0.05, base[3] + D * 0.05], r));
  // sheet border = the largest frame when it covers most of the drawing
  frames.sort((x, y) => area(y) - area(x));
  let sheet = null;
  if (frames.length && area(frames[0]) > 0.55 * area(base)) { sheet = frames.shift(); frames = frames.filter((r) => area(r) < 0.5 * area(sheet)); }
  // keep top-level frames only (drop insets and nested boxes)
  const top = [];
  for (const r of frames) if (!top.some((q) => contains(q, r, 0.002 * D))) top.push(r);

  const views = [];
  const texts = [];
  for (const L of g.layers) if (!L.hidden) for (const t of L.texts) texts.push(t);
  const tIn = (r) => texts.filter((t) => inside(r, t.T[12] - g.origin[0], t.T[13] - g.origin[1]));

  for (let r of top) {
    const ts = tIn(r);
    // titles often overflow their frame: grow the rect to include the text boxes anchored inside it
    for (const t of ts) {
      const X = t.T[12] - g.origin[0], Y = t.T[13] - g.origin[1], h = t.h || 1, w = String(t.str || '').length * h * 0.62;
      const x0 = t.hal === 1 || t.hal === 4 ? X - w / 2 : t.hal === 2 ? X - w : X, x1 = x0 + w;
      r = union(r, [x0, Y - h * 0.3, x1, Y + h * 1.2]);
    }
    r = [r[0] - 0.004 * D, r[1] - 0.004 * D, r[2] + 0.004 * D, r[3] + 0.004 * D];
    views.push({ rect: r, name: bestTitle(ts) || `Frame ${views.length + 1}`, kind: 'frame', texts: ts.length });
  }

  // everything that is not inside a frame and not a sheet-length line: cluster it on a coarse grid
  const N = 220;
  const gx0 = base[0], gy0 = base[1], cw = (base[2] - base[0]) / N || 1, ch = (base[3] - base[1]) / N || 1;
  const cell = (x, y) => [Math.floor((x - gx0) / cw), Math.floor((y - gy0) / ch)];
  const grid = new Map(); // key -> {rect, n}
  const mark = (x, y, w) => {
    if (x < base[0] || x > base[2] || y < base[1] || y > base[3]) return;
    if (top.some((r) => inside(r, x, y))) return;
    const [i, j] = cell(x, y);
    const k = j * (N + 2) + i;
    const c = grid.get(k);
    if (c) { c.n += w; c.r = union(c.r, [x, y, x, y]); } else grid.set(k, { i, j, n: w, r: [x, y, x, y] });
  };
  const maxSeg = 0.2 * D;
  for (const L of g.layers) {
    if (L.hidden) continue;
    const p = L.lines.p;
    for (let i = 0; i + 5 < p.length; i += 6) {
      const x0 = p[i], y0 = p[i + 1], x1 = p[i + 3], y1 = p[i + 4];
      const len = Math.hypot(x1 - x0, y1 - y0);
      if (len > maxSeg) continue;
      const steps = Math.min(8, Math.ceil(len / Math.min(cw, ch)));
      for (let s = 0; s <= steps; s++) mark(x0 + ((x1 - x0) * s) / (steps || 1), y0 + ((y1 - y0) * s) / (steps || 1), 1);
    }
    const f = L.fills.p;
    for (let i = 0; i + 8 < f.length; i += 9) mark((f[i] + f[i + 3] + f[i + 6]) / 3, (f[i + 1] + f[i + 4] + f[i + 7]) / 3, 1);
    const q = L.pts.p;
    for (let i = 0; i + 2 < q.length; i += 3) mark(q[i], q[i + 1], 1);
  }
  for (const t of texts) mark(t.T[12] - g.origin[0], t.T[13] - g.origin[1], 2);

  // connected components with a dilation radius R cells
  const R = Math.max(2, Math.round(0.03 * D / Math.max(cw, ch)));
  const cells = [...grid.values()];
  const index = new Map();
  for (const c of cells) index.set(c.j * (N + 2) + c.i, c);
  const seen = new Set();
  const comps = [];
  for (const c0 of cells) {
    const k0 = c0.j * (N + 2) + c0.i;
    if (seen.has(k0)) continue;
    const stack = [c0]; seen.add(k0);
    let r = c0.r.slice(), n = 0;
    while (stack.length) {
      const c = stack.pop();
      r = union(r, c.r); n += c.n;
      for (let dj = -R; dj <= R; dj++) for (let di = -R; di <= R; di++) {
        const k = (c.j + dj) * (N + 2) + (c.i + di);
        const o = index.get(k);
        if (o && !seen.has(k)) { seen.add(k); stack.push(o); }
      }
    }
    comps.push({ rect: r, n });
  }
  // merge overlapping components, then drop the tiny ones
  let merged = comps;
  for (let guard = 0; guard < 10; guard++) {
    let changed = false;
    const out = [];
    for (const c of merged) {
      const m = out.find((o) => overlaps(o.rect, c.rect));
      if (m) { m.rect = union(m.rect, c.rect); m.n += c.n; changed = true; } else out.push({ rect: c.rect.slice(), n: c.n });
    }
    merged = out;
    if (!changed) break;
  }
  const sw = base[2] - base[0], sh = base[3] - base[1];
  const rest = merged
    .filter((c) => {
      const w = c.rect[2] - c.rect[0], h = c.rect[3] - c.rect[1];
      if (Math.max(w, h) < 0.045 * D || c.n < 40) return false;
      if (w > 0.9 * sw || h > 0.9 * sh) return false; // sheet-wide leftovers (border remnants)
      if (Math.max(w, h) > 5 * Math.min(w, h) && Math.max(w, h) > 0.5 * Math.max(sw, sh)) return false;
      return true;
    })
    .sort((a, b) => area(b.rect) - area(a.rect))
    .slice(0, 10);
  const cand = rest.map((c) => {
    const pad = 0.006 * D;
    const r = [c.rect[0] - pad, c.rect[1] - pad, c.rect[2] + pad, c.rect[3] + pad];
    return { r, c, angle: dominantAngle(g, r) };
  });
  // the site plan is usually the largest block drawn at an angle to the sheet (a rotated rectangle site)
  let planIdx = -1, pa = 0;
  cand.forEach((k, i) => { if (Math.abs(k.angle) > 3 && area(k.r) > pa) { pa = area(k.r); planIdx = i; } });
  if (planIdx < 0 && cand.length) planIdx = 0;
  let nd = 0;
  cand.forEach((k, i) => {
    const ts = tIn(k.r);
    const isPlan = i === planIdx;
    views.push({ rect: k.r, name: isPlan ? 'Plan' : bestTitle(ts) || `Detail ${++nd}`, kind: isPlan ? 'plan' : 'detail', texts: ts.length, weight: k.c.n, angle: k.angle });
  });

  // order: plan first, then the rest top-to-bottom, left-to-right
  views.sort((a, b) => (a.kind === 'plan' ? -1 : b.kind === 'plan' ? 1 : 0) || (b.rect[3] + b.rect[1]) / 2 - (a.rect[3] + a.rect[1]) / 2 || a.rect[0] - b.rect[0]);
  views.forEach((v, i) => { v.id = i; if (v.angle == null) v.angle = 0; });
  const sheetRect = sheet || base;
  return { sheet: { rect: sheetRect, found: !!sheet }, views };
}
