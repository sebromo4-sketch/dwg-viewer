// Drawing data summary: elevations by layer, points table and block attributes.
const fnum = (v) => (Number.isFinite(v) ? v : 0);

export function buildDatos(g, model) {
  const [OX, OY, OZ] = g.origin;
  const layers = [];
  let zmin = Infinity, zmax = -Infinity, nz = 0;
  // positions by layer
  for (const L of g.layers) {
    let lo = Infinity, hi = -Infinity, nonZero = 0, tot = 0;
    const scan = (S, per) => {
      const p = S.p; if (!p) return;
      for (let i = 2; i < p.length; i += 3) {
        const z = p[i] + OZ; tot++;
        if (z < lo) lo = z; if (z > hi) hi = z;
        if (Math.abs(z) > 1e-6) nonZero++;
      }
    };
    scan(L.lines); scan(L.tris); scan(L.fills); scan(L.pfills); scan(L.pts);
    for (const t of L.texts) { const z = t.T[14]; tot++; if (z < lo) lo = z; if (z > hi) hi = z; if (Math.abs(z) > 1e-6) nonZero++; }
    if (tot) { layers.push({ name: L.name, zmin: lo, zmax: hi, nonZero, total: tot, count: L.count }); }
    if (nonZero) { nz += nonZero; if (lo < zmin) zmin = lo; if (hi > zmax) zmax = hi; }
  }
  // objects that do carry an elevation (≠0): summary by value
  const zvals = new Map();
  for (const L of g.layers) {
    const S = L.lines;
    if (S.p) for (let i = 0; i < S.e.length; i++) {
      const z0 = S.p[6 * i + 2] + OZ, z1 = S.p[6 * i + 5] + OZ;
      if (Math.abs(z0) > 1e-6 || Math.abs(z1) > 1e-6) {
        const k = L.name + '|' + z0.toFixed(2) + (Math.abs(z1 - z0) > 0.005 ? '~' + z1.toFixed(2) : '');
        const o = zvals.get(k) || { layer: L.name, z: z0, z1, n: 0, ids: new Set() };
        o.n++; o.ids.add(S.e[i]); zvals.set(k, o);
      }
    }
    const P = L.pts;
    if (P.p) for (let i = 0; i < P.e.length; i++) {
      const z = P.p[3 * i + 2] + OZ;
      if (Math.abs(z) > 1e-6) {
        const k = L.name + '|' + z.toFixed(2) + '|pt';
        const o = zvals.get(k) || { layer: L.name, z, z1: z, n: 0, ids: new Set(), pt: true };
        o.n++; o.ids.add(P.e[i]); zvals.set(k, o);
      }
    }
  }
  const rows = [...zvals.values()].map((o) => ({ layer: o.layer, z: o.z, z1: o.z1, n: o.n, pt: !!o.pt, id: [...o.ids][0] }));
  // many distinct values in one layer (e.g. a terrain mesh): collapse into one range row
  const grp = new Map();
  for (const r of rows) { const k = r.layer + '|' + r.pt; (grp.get(k) || grp.set(k, []).get(k)).push(r); }
  const withZ = [];
  for (const list of grp.values()) {
    if (list.length <= 8) withZ.push(...list);
    else {
      let lo = Infinity, hi = -Infinity, n = 0;
      for (const r of list) { lo = Math.min(lo, r.z, r.z1); hi = Math.max(hi, r.z, r.z1); n += r.n; }
      withZ.push({ layer: list[0].layer, z: lo, z1: hi, n, pt: list[0].pt, id: list[0].id, range: true });
    }
  }
  withZ.sort((a, b) => a.z - b.z);

  // blocks with attributes (well name, KML folder…)
  const inserts = [];
  g.reg.forEach((r, id) => {
    const e = r.s;
    if (e.type === 'INSERT' && e.attribs?.length && r.v < 0) {
      const at = {};
      for (const a of e.attribs) { const t = typeof a.text === 'object' ? a.text?.text : a.text; if (a.tag) at[a.tag] = t; }
      if (inserts.some((o) => o.name === (at.NAME || at.Name || e.name) && Math.hypot(o.x - fnum(e.insertionPoint?.x), o.y - fnum(e.insertionPoint?.y)) < 0.01)) return;
      inserts.push({ id, x: fnum(e.insertionPoint?.x), y: fnum(e.insertionPoint?.y), z: fnum(e.insertionPoint?.z), attrs: at, name: at.NAME || at.Name || e.name });
    }
  });
  // points
  const points = [];
  g.layers.forEach((L, li) => {
    const P = L.pts;
    for (let i = 0; i < P.e.length; i++) points.push({ layer: L.name, li, id: P.e[i], x: P.p[3 * i] + OX, y: P.p[3 * i + 1] + OY, z: P.p[3 * i + 2] + OZ, name: '' });
  });
  // point name = NAME attribute of the nearest block (<1.5 m)
  if (inserts.length) {
    for (const p of points) {
      let best = null, bd = 1.5;
      for (const it of inserts) { const d = Math.hypot(it.x - p.x, it.y - p.y); if (d < bd) { bd = d; best = it; } }
      if (best) p.name = best.name;
    }
  }
  const flat = !withZ.length;
  return { layers, withZ, inserts, points, flat, zmin: nz ? zmin : 0, zmax: nz ? zmax : 0, noZ: g.stats.noZ || 0 };
}

export function pointsCsv(rows) {
  const q = (s) => '"' + String(s).replace(/"/g, '""') + '"';
  return ['layer,name,east,north,elevation', ...rows.map((r) => [q(r.layer), q(r.name), r.x.toFixed(4), r.y.toFixed(4), r.z.toFixed(4)].join(','))].join('\r\n');
}
