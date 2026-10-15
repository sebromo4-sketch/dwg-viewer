// Geometry engine: converts the normalized CAD model into WebGL-ready buffers.
// Does not touch the DOM; runs the same in the browser and in Node (for tests and the CLI).
import { Matrix4, Vector2, ShapeUtils } from 'three';

const TAU = Math.PI * 2;

// ---------------------------------------------------------------- ACI palette
function hsv(h, s, v) {
  const c = v * s;
  const hp = (h % 360) / 60;
  const x = c * (1 - Math.abs((hp % 2) - 1));
  let r = 0, g = 0, b = 0;
  if (hp < 1) [r, g, b] = [c, x, 0];
  else if (hp < 2) [r, g, b] = [x, c, 0];
  else if (hp < 3) [r, g, b] = [0, c, x];
  else if (hp < 4) [r, g, b] = [0, x, c];
  else if (hp < 5) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const m = v - c;
  return [Math.round(r + m), Math.round(g + m), Math.round(b + m)];
}
export const ACI = (() => {
  const t = new Array(256).fill(null).map(() => [255, 255, 255]);
  const base = [[255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255], [0, 0, 255], [255, 0, 255], [255, 255, 255], [128, 128, 128], [192, 192, 192]];
  base.forEach((c, i) => (t[i + 1] = c));
  const vals = [255, 204, 153, 127, 76];
  for (let i = 0; i < 240; i++) {
    const hue = Math.floor(i / 10) * 15;
    const k = i % 10;
    const v = vals[k >> 1];
    const s = k % 2 === 0 ? 1 : 0.5;
    t[10 + i] = hsv(hue, s, v);
  }
  [[51, 51, 51], [91, 91, 91], [132, 132, 132], [173, 173, 173], [214, 214, 214], [255, 255, 255]].forEach((c, i) => (t[250 + i] = c));
  return t;
})();
const rgbInt = (c) => (c[0] << 16) | (c[1] << 8) | c[2];

// ---------------------------------------------------------------- buffers
class Buf {
  constructor(T) { this.T = T; this.a = new T(4096); this.n = 0; }
  ensure(k) {
    if (this.n + k > this.a.length) {
      let l = this.a.length * 2;
      while (l < this.n + k) l *= 2;
      const b = new this.T(l);
      b.set(this.a.subarray(0, this.n));
      this.a = b;
    }
  }
  done() { return this.a.slice(0, this.n); }
}
const mkSet = () => ({ p: new Buf(Float32Array), c: new Buf(Uint8Array), e: new Buf(Uint32Array) });

// ---------------------------------------------------------------- utilities
const num = (v, d = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : d);
const P3 = (p) => (p ? [num(p.x), num(p.y), num(p.z)] : [0, 0, 0]);

function ocsMatrix(n) {
  let nx = num(n?.x), ny = num(n?.y), nz = n && n.z !== undefined ? num(n.z, 1) : 1;
  const len = Math.hypot(nx, ny, nz) || 1;
  nx /= len; ny /= len; nz /= len;
  let ax, ay, az;
  if (Math.abs(nx) < 1 / 64 && Math.abs(ny) < 1 / 64) { // Ax = Wy x N
    ax = nz; ay = 0; az = -nx;
  } else { // Ax = Wz x N
    ax = -ny; ay = nx; az = 0;
  }
  const al = Math.hypot(ax, ay, az) || 1;
  ax /= al; ay /= al; az /= al;
  const bx = ny * az - nz * ay, by = nz * ax - nx * az, bz = nx * ay - ny * ax; // Ay = N x Ax
  const m = new Matrix4();
  m.set(ax, bx, nx, 0, ay, by, ny, 0, az, bz, nz, 0, 0, 0, 0, 1);
  return m;
}
const isDefaultExtrusion = (n) => !n || Math.hypot(num(n.x), num(n.y), num(n.z)) < 1e-9 || (Math.abs(num(n.x)) < 1e-12 && Math.abs(num(n.y)) < 1e-12 && (n.z === undefined || num(n.z, 1) > 0));

const _a = new Matrix4(), _b = new Matrix4();
function mul(A, B) {
  _a.fromArray(A); _b.fromArray(B);
  return _a.multiply(_b).elements.slice();
}
const IDENT = new Matrix4().elements.slice();
const T4 = (x, y, z) => new Matrix4().makeTranslation(x, y, z).elements.slice();
const RZ4 = (a) => new Matrix4().makeRotationZ(a).elements.slice();
const S4 = (x, y, z) => new Matrix4().makeScale(x, y, z).elements.slice();

function bulgeArc(x1, y1, x2, y2, b, out, step) {
  const dx = x2 - x1, dy = y2 - y1, d = Math.hypot(dx, dy);
  if (d < 1e-12) return;
  const theta = 4 * Math.atan(b);
  const h = (d / 2) / Math.tan(theta / 2);
  const cx = (x1 + x2) / 2 + (-dy / d) * h;
  const cy = (y1 + y2) / 2 + (dx / d) * h;
  const R = Math.hypot(x1 - cx, y1 - cy);
  const a0 = Math.atan2(y1 - cy, x1 - cx);
  const n = Math.max(2, Math.ceil(Math.abs(theta) / step));
  for (let k = 1; k < n; k++) {
    const a = a0 + (theta * k) / n;
    out.push(cx + R * Math.cos(a), cy + R * Math.sin(a));
  }
}

function pointInPoly(x, y, poly) { // poly: flat [x,y,...]
  let inside = false;
  const n = poly.length / 2;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const xi = poly[2 * i], yi = poly[2 * i + 1], xj = poly[2 * j], yj = poly[2 * j + 1];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
function polyArea2(poly) {
  let a = 0;
  const n = poly.length / 2;
  for (let i = 0, j = n - 1; i < n; j = i++) a += poly[2 * j] * poly[2 * i + 1] - poly[2 * i] * poly[2 * j + 1];
  return a / 2;
}

// B-spline / NURBS
function nurbsPoints(deg, knots, cps, weights, count) {
  const n = cps.length;
  const t0 = knots[deg], t1 = knots[n];
  const out = [];
  const N = new Array(deg + 1);
  const left = new Array(deg + 1), right = new Array(deg + 1);
  for (let s = 0; s <= count; s++) {
    let t = t0 + ((t1 - t0) * s) / count;
    if (s === count) t = t1 - 1e-9 * (t1 - t0);
    let k = deg;
    while (k < n - 1 && t >= knots[k + 1]) k++;
    N[0] = 1;
    for (let j = 1; j <= deg; j++) {
      left[j] = t - knots[k + 1 - j];
      right[j] = knots[k + j] - t;
      let saved = 0;
      for (let r = 0; r < j; r++) {
        const den = right[r + 1] + left[j - r];
        const tmp = den === 0 ? 0 : N[r] / den;
        N[r] = saved + right[r + 1] * tmp;
        saved = left[j - r] * tmp;
      }
      N[j] = saved;
    }
    let x = 0, y = 0, z = 0, w = 0;
    for (let j = 0; j <= deg; j++) {
      const i = k - deg + j;
      const wi = weights ? num(weights[i], 1) : 1;
      const f = N[j] * wi;
      x += f * cps[i][0]; y += f * cps[i][1]; z += f * cps[i][2]; w += f;
    }
    if (w !== 0) out.push(x / w, y / w, z / w);
  }
  return out;
}
function catmull(pts, per) { // pts: array [x,y,z]; centripetal
  const out = [];
  const n = pts.length;
  const get = (i) => pts[Math.max(0, Math.min(n - 1, i))];
  for (let i = 0; i < n - 1; i++) {
    const p0 = get(i - 1), p1 = get(i), p2 = get(i + 1), p3 = get(i + 2);
    for (let s = 0; s < per; s++) {
      const t = s / per, t2 = t * t, t3 = t2 * t;
      const c = [];
      for (let k = 0; k < 3; k++) {
        c.push(0.5 * (2 * p1[k] + (-p0[k] + p2[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t3));
      }
      out.push(c[0], c[1], c[2]);
    }
  }
  const l = pts[n - 1];
  out.push(l[0], l[1], l[2]);
  return out;
}

// ---------------------------------------------------------------- MTEXT/TEXT content
export function cleanText(s, multiline) {
  if (s == null) return '';
  let t = String(s);
  t = t.replace(/%%[cC]/g, 'Ø').replace(/%%[dD]/g, '°').replace(/%%[pP]/g, '±').replace(/%%%/g, '%').replace(/%%[uUoO]/g, '');
  if (multiline) {
    t = t.replace(/\\U\+([0-9A-Fa-f]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
    t = t.replace(/\\S([^;^#\\]*)[\^#/]([^;]*);/g, '$1/$2');
    t = t.replace(/\\[fFCcHhWwTtQqAaXx][^;]*;/g, '');
    t = t.replace(/\\[LlOoKk]/g, '');
    t = t.replace(/\\P/g, '\n').replace(/\\~/g, ' ');
    t = t.replace(/\\\\/g, '\u0001').replace(/\\\{/g, '\u0002').replace(/\\\}/g, '\u0003');
    t = t.replace(/[{}]/g, '');
    t = t.replace(/\u0001/g, '\\').replace(/\u0002/g, '{').replace(/\u0003/g, '}');
  } else {
    t = t.replace(/\\U\+([0-9A-Fa-f]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
  }
  return t;
}

// ---------------------------------------------------------------- engine
export function buildGeometry(model, opts = {}) {
  const light = !!opts.light;
  const arcStep = ((opts.arcStepDeg ?? 5) * Math.PI) / 180;
  const MAX_DEPTH = 12;
  const SEG_CAP = opts.segCap ?? 6_000_000;
  const TRI_CAP = opts.triCap ?? 4_000_000;
  const ang = model.angleUnit === 'deg' ? (v) => (num(v) * Math.PI) / 180 : (v) => num(v);

  let noZ = 0;
  const unsupported = new Map();
  const bump = (k, by = 1) => unsupported.set(k, (unsupported.get(k) || 0) + by);

  // ---- quick pass for the origin (median) and text Z
  const qx = [], qy = [], qz = [];
  let qstride = 1, qc = 0;
  const qpush = (x, y, z, hasZ) => {
    if (qc++ % qstride) return;
    qx.push(x); qy.push(y); if (hasZ) qz.push(z);
    if (qx.length > 300000) {
      qstride *= 2;
      for (const a of [qx, qy, qz]) { let j = 0; for (let i = 0; i < a.length; i += 2) a[j++] = a[i]; a.length = j; }
    }
  };
  for (const e of model.entities) {
    switch (e.type) {
      case 'LINE': qpush(num(e.startPoint?.x), num(e.startPoint?.y), num(e.startPoint?.z), true); break;
      case 'CIRCLE': case 'ARC': case 'ELLIPSE': qpush(num(e.center?.x), num(e.center?.y), num(e.center?.z), true); break;
      case 'LWPOLYLINE': if (e.vertices?.length) qpush(num(e.vertices[0].x), num(e.vertices[0].y), num(e.elevation), true); break;
      case 'POLYLINE': case 'POLYLINE2D': case 'POLYLINE3D': if (e.vertices?.length) qpush(num(e.vertices[0].x), num(e.vertices[0].y), num(e.vertices[0].z), true); break;
      case '3DFACE': { const c = e.corner1 || e.vertices?.[0]; if (c) qpush(num(c.x), num(c.y), num(c.z), true); break; }
      case 'INSERT': qpush(num(e.insertionPoint?.x), num(e.insertionPoint?.y), num(e.insertionPoint?.z), true); break;
      case 'POINT': qpush(num(e.position?.x), num(e.position?.y), num(e.position?.z) <= -99999 ? 0 : num(e.position?.z), true); break;
      case 'TEXT': qpush(num(e.startPoint?.x), num(e.startPoint?.y), 0, false); break;
      case 'MTEXT': qpush(num(e.insertionPoint?.x), num(e.insertionPoint?.y), 0, false); break;
      case 'SPLINE': { const c = e.controlPoints?.[0] || e.fitPoints?.[0]; if (c) qpush(num(c.x), num(c.y), num(c.z), true); break; }
      default: break;
    }
  }
  const NOZ = (z) => (z <= -99999 || z >= 1e8 ? 0 : z); // -999999 = 'no elevation' (KML/Civil)
  const median = (a) => { if (!a.length) return 0; const b = Float64Array.from(a).sort(); return b[b.length >> 1]; };
  const OX = Math.round(median(qx)), OY = Math.round(median(qy)), OZ = Math.round(median(qz));
  const medZ = median(qz);
  const textZ = model.source === 'dwg' ? medZ : null; // DWG: libredwg does not deliver the elevation of 2D TEXT/MTEXT

  // ---- layers
  const LD = new Map();
  const getLD = (name) => {
    let ld = LD.get(name);
    if (!ld) {
      ld = { name, idx: LD.size, lines: mkSet(), tris: mkSet(), fills: mkSet(), pfills: mkSet(), pts: mkSet(), texts: [], count: 0 };
      LD.set(name, ld);
    }
    return ld;
  };
  for (const name of model.layers.keys()) getLD(name);
  const DEFAULT_LAYER = { aci: 7, rgb: null, off: false, frozen: false, ltype: 'Continuous' };
  const linfo = (n) => model.layers.get(n) || DEFAULT_LAYER;
  const WHITE = light ? 0x000000 : 0xffffff;
  const aciRgb = (i) => (i === 7 ? WHITE : rgbInt(ACI[i] || ACI[7]));
  const layerRgb = (n) => { const L = linfo(n); return L.rgb != null ? L.rgb : aciRgb(L.aci ?? 7); };

  // ---- entity registry, bounds, snaps
  const reg = [];
  let segCount = 0, triCount = 0, textCount = 0, truncated = false;
  const snap = new Buf(Float32Array);
  const snapL = new Buf(Uint32Array);
  let curL = 0;
  const SNAP_CAP = 1_500_000 * 3;
  const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
  const sx = [], sy = [], sz = [];
  let sstride = 1, sc = 0;
  const bnd = (x, y, z) => {
    if (x < mn[0]) mn[0] = x; if (y < mn[1]) mn[1] = y; if (z < mn[2]) mn[2] = z;
    if (x > mx[0]) mx[0] = x; if (y > mx[1]) mx[1] = y; if (z > mx[2]) mx[2] = z;
    if (sc++ % sstride === 0) {
      sx.push(x); sy.push(y); sz.push(z);
      if (sx.length > 400000) {
        sstride *= 2;
        for (const a of [sx, sy, sz]) { let j = 0; for (let i = 0; i < a.length; i += 2) a[j++] = a[i]; a.length = j; }
      }
    }
  };
  const addSnap = (x, y, z) => {
    if (snap.n >= SNAP_CAP) return;
    snap.ensure(3); snapL.ensure(1);
    snap.a[snap.n++] = x - OX; snap.a[snap.n++] = y - OY; snap.a[snap.n++] = z - OZ;
    snapL.a[snapL.n++] = curL;
  };

  const emitSeg = (ld, ax, ay, az, bx, by, bz, rgb, id) => {
    if (segCount >= SEG_CAP) { truncated = true; return; }
    const S = ld.lines;
    S.p.ensure(6); S.c.ensure(6); S.e.ensure(1);
    const p = S.p.a; let n = S.p.n;
    p[n] = ax - OX; p[n + 1] = ay - OY; p[n + 2] = az - OZ; p[n + 3] = bx - OX; p[n + 4] = by - OY; p[n + 5] = bz - OZ;
    S.p.n = n + 6;
    const c = S.c.a; n = S.c.n;
    const r = (rgb >> 16) & 255, g = (rgb >> 8) & 255, b = rgb & 255;
    c[n] = r; c[n + 1] = g; c[n + 2] = b; c[n + 3] = r; c[n + 4] = g; c[n + 5] = b;
    S.c.n = n + 6;
    S.e.a[S.e.n++] = id;
    segCount++;
  };
  const emitTri = (ld, kind, a, b, c, rgb, id) => {
    if (triCount >= TRI_CAP) { truncated = true; return; }
    const S = ld[kind];
    S.p.ensure(9); S.c.ensure(9); S.e.ensure(1);
    const p = S.p.a; let n = S.p.n;
    p[n] = a[0] - OX; p[n + 1] = a[1] - OY; p[n + 2] = a[2] - OZ;
    p[n + 3] = b[0] - OX; p[n + 4] = b[1] - OY; p[n + 5] = b[2] - OZ;
    p[n + 6] = c[0] - OX; p[n + 7] = c[1] - OY; p[n + 8] = c[2] - OZ;
    S.p.n = n + 9;
    const cc = S.c.a; n = S.c.n;
    const r = (rgb >> 16) & 255, g = (rgb >> 8) & 255, bl = rgb & 255;
    for (let i = 0; i < 3; i++) { cc[n + 3 * i] = r; cc[n + 3 * i + 1] = g; cc[n + 3 * i + 2] = bl; }
    S.c.n = n + 9;
    S.e.a[S.e.n++] = id;
    triCount++;
  };
  const emitPoint = (ld, x, y, z, rgb, id) => {
    const S = ld.pts;
    S.p.ensure(3); S.c.ensure(3); S.e.ensure(1);
    S.p.a[S.p.n++] = x - OX; S.p.a[S.p.n++] = y - OY; S.p.a[S.p.n++] = z - OZ;
    S.c.a[S.c.n++] = (rgb >> 16) & 255; S.c.a[S.c.n++] = (rgb >> 8) & 255; S.c.a[S.c.n++] = rgb & 255;
    S.e.a[S.e.n++] = id;
  };

  // ---- line patterns
  const patCache = new Map();
  const getPattern = (ltName, scale) => {
    if (!ltName) return null;
    const key = ltName.toUpperCase() + '|' + scale;
    if (patCache.has(key)) return patCache.get(key);
    let pat = model.ltypes.get(ltName.toUpperCase());
    let res = null;
    if (pat && pat.length >= 2) {
      const s = num(model.ltscale, 1) * scale;
      const scaled = pat.map((v) => v * s);
      const total = scaled.reduce((a, b) => a + Math.abs(b), 0);
      if (total > 1e-9) res = { el: scaled, total };
    }
    patCache.set(key, res);
    return res;
  };

  // Emits a path in world coordinates (flat Float64 x,y,z)
  const emitWorldPath = (ld, W, closed, rgb, id, pat) => {
    const n = W.length / 3;
    for (let i = 0; i < n; i++) bnd(W[3 * i], W[3 * i + 1], W[3 * i + 2]);
    const segs = closed ? n : n - 1;
    let len = 0;
    if (pat) {
      for (let i = 0; i < segs; i++) {
        const j = (i + 1) % n;
        len += Math.hypot(W[3 * j] - W[3 * i], W[3 * j + 1] - W[3 * i + 1], W[3 * j + 2] - W[3 * i + 2]);
      }
      if (len / pat.total > 30000) pat = null;
    }
    if (!pat) {
      for (let i = 0; i < segs; i++) {
        const j = (i + 1) % n;
        emitSeg(ld, W[3 * i], W[3 * i + 1], W[3 * i + 2], W[3 * j], W[3 * j + 1], W[3 * j + 2], rgb, id);
      }
      return;
    }
    const el = pat.el;
    const dot = pat.total * 0.03;
    let pi = 0;
    let on = el[0] >= 0;
    let rem = el[0] === 0 ? dot : Math.abs(el[0]);
    for (let i = 0; i < segs; i++) {
      const j = (i + 1) % n;
      const ax = W[3 * i], ay = W[3 * i + 1], az = W[3 * i + 2];
      const dx = W[3 * j] - ax, dy = W[3 * j + 1] - ay, dz = W[3 * j + 2] - az;
      const L = Math.hypot(dx, dy, dz);
      if (L < 1e-12) continue;
      let t = 0;
      while (L - t > 1e-9) {
        const step = Math.min(rem, L - t);
        if (on) {
          const f0 = t / L, f1 = (t + step) / L;
          emitSeg(ld, ax + dx * f0, ay + dy * f0, az + dz * f0, ax + dx * f1, ay + dy * f1, az + dz * f1, rgb, id);
        }
        t += step; rem -= step;
        if (rem <= 1e-12) {
          pi = (pi + 1) % el.length;
          const v = el[pi];
          on = v >= 0;
          rem = v === 0 ? dot : Math.abs(v);
          if (v === 0) on = true;
        }
      }
    }
  };

  // transforma camino local (plano x,y,z) por matriz m → Float64Array mundo
  const toWorld = (m, P) => {
    const n = P.length / 3;
    const W = new Float64Array(P.length);
    for (let i = 0; i < n; i++) {
      const x = P[3 * i], y = P[3 * i + 1], z = P[3 * i + 2];
      W[3 * i] = m[0] * x + m[4] * y + m[8] * z + m[12];
      W[3 * i + 1] = m[1] * x + m[5] * y + m[9] * z + m[13];
      W[3 * i + 2] = m[2] * x + m[6] * y + m[10] * z + m[14];
    }
    return W;
  };
  const tp = (m, x, y, z) => [
    m[0] * x + m[4] * y + m[8] * z + m[12],
    m[1] * x + m[5] * y + m[9] * z + m[13],
    m[2] * x + m[6] * y + m[10] * z + m[14],
  ];
  const entMat = (ctx, ext) => (isDefaultExtrusion(ext) ? ctx.m : mul(ctx.m, ocsMatrix(ext).elements));

  // ---- layer/color/linetype resolution
  const resolve = (e, ctx) => {
    let ln = e.layer ?? '0';
    if (ln === '0' && ctx.layer) ln = ctx.layer;
    const ld = getLD(ctx.force || ln);
    curL = ld.idx;
    let rgb;
    if (typeof e.color === 'number') rgb = e.color & 0xffffff;
    else {
      let ci = e.colorIndex;
      if (ci === undefined || ci === null || ci === 256 || ci < 0) rgb = layerRgb(ln);
      else if (ci === 0) rgb = ctx.blockRgb ?? WHITE;
      else rgb = aciRgb(ci);
    }
    let lt = e.lineType;
    if (!lt || String(lt).toUpperCase() === 'BYLAYER') lt = linfo(ln).ltype;
    else if (String(lt).toUpperCase() === 'BYBLOCK') lt = ctx.ltype || 'Continuous';
    return { ld, rgb, lt, ln };
  };

  const regId = (src, via) => { reg.push({ s: src, v: via }); return reg.length - 1; };

  // ---- local path construction ----
  const arcPoints = (cx, cy, cz, r, a0, a1, out) => {
    let sweep = a1 - a0;
    while (sweep <= 0) sweep += TAU;
    const n = Math.max(4, Math.ceil(sweep / arcStep));
    for (let k = 0; k <= n; k++) {
      const a = a0 + (sweep * k) / n;
      out.push(cx + r * Math.cos(a), cy + r * Math.sin(a), cz);
    }
  };
  const lwPath = (verts, closed, z) => {
    const out = [];
    const n = verts.length;
    for (let i = 0; i < n; i++) {
      const v = verts[i];
      out.push(num(v.x), num(v.y), z);
      const b = num(v.bulge);
      if (Math.abs(b) > 1e-9 && (i < n - 1 || closed)) {
        const w = verts[(i + 1) % n];
        const tmp = [];
        bulgeArc(num(v.x), num(v.y), num(w.x), num(w.y), b, tmp, arcStep);
        for (let k = 0; k < tmp.length; k += 2) out.push(tmp[k], tmp[k + 1], z);
      }
    }
    return out;
  };

  // ---- hatch ----
  const edgePoints = (ed) => {
    const out = [];
    const type = ed.type;
    if (type === 1 || (ed.start && ed.end && ed.radius === undefined && ed.lengthOfMinorAxis === undefined && !ed.center)) {
      out.push(num(ed.start.x), num(ed.start.y), num(ed.end.x), num(ed.end.y));
    } else if (type === 2 || (ed.center && ed.radius !== undefined)) {
      const a0 = ang(ed.startAngle), a1 = ang(ed.endAngle);
      const ccw = ed.isCCW !== false;
      let sweep = ccw ? a1 - a0 : a0 - a1;
      while (sweep <= 0) sweep += TAU;
      if (!ccw) sweep = -sweep;
      const n = Math.max(4, Math.ceil(Math.abs(sweep) / arcStep));
      for (let k = 0; k <= n; k++) {
        const a = a0 + (sweep * k) / n;
        out.push(num(ed.center.x) + ed.radius * Math.cos(a), num(ed.center.y) + ed.radius * Math.sin(a));
      }
    } else if (type === 3 || ed.lengthOfMinorAxis !== undefined) {
      const mxv = num(ed.end.x), myv = num(ed.end.y);
      const ratio = num(ed.lengthOfMinorAxis, 1);
      const a0 = ang(ed.startAngle), a1 = ang(ed.endAngle);
      const ccw = ed.isCCW !== false;
      let sweep = ccw ? a1 - a0 : a0 - a1;
      while (sweep <= 0) sweep += TAU;
      if (!ccw) sweep = -sweep;
      const n = Math.max(8, Math.ceil(Math.abs(sweep) / arcStep));
      for (let k = 0; k <= n; k++) {
        const t = a0 + (sweep * k) / n;
        out.push(num(ed.center.x) + Math.cos(t) * mxv - Math.sin(t) * myv * ratio, num(ed.center.y) + Math.cos(t) * myv + Math.sin(t) * mxv * ratio);
      }
    } else if (ed.controlPoints || ed.fitDatum) {
      const cps = (ed.controlPoints || []).map((c) => [num(c.x), num(c.y), 0]);
      if (cps.length > num(ed.degree, 3) && ed.knots?.length === cps.length + num(ed.degree, 3) + 1) {
        const w = ed.controlPoints.map((c) => num(c.weight, 1));
        const pts = nurbsPoints(num(ed.degree, 3), ed.knots, cps, w, Math.max(16, cps.length * 8));
        for (let i = 0; i < pts.length; i += 3) out.push(pts[i], pts[i + 1]);
      } else if (ed.fitDatum?.length) {
        const pts = catmull(ed.fitDatum.map((c) => [num(c.x), num(c.y), 0]), 8);
        for (let i = 0; i < pts.length; i += 3) out.push(pts[i], pts[i + 1]);
      } else for (const c of cps) out.push(c[0], c[1]);
    }
    return out;
  };
  const hatchLoops = (e) => {
    const loops = [];
    for (const bp of e.boundaryPaths || []) {
      let pts = [];
      if (bp.vertices) {
        const vs = bp.vertices;
        const n = vs.length;
        const closed = bp.isClosed !== false;
        for (let i = 0; i < n; i++) {
          const v = vs[i];
          pts.push(num(v.x), num(v.y));
          const b = num(v.bulge);
          if (Math.abs(b) > 1e-9 && (i < n - 1 || closed)) {
            const w = vs[(i + 1) % n];
            bulgeArc(num(v.x), num(v.y), num(w.x), num(w.y), b, pts, arcStep);
          }
        }
      } else if (bp.edges) {
        let chain = [];
        for (const ed of bp.edges) {
          let ep = edgePoints(ed);
          if (ep.length < 4) continue;
          if (chain.length) {
            const lx = chain[chain.length - 2], ly = chain[chain.length - 1];
            const d0 = Math.hypot(ep[0] - lx, ep[1] - ly);
            const d1 = Math.hypot(ep[ep.length - 2] - lx, ep[ep.length - 1] - ly);
            if (d1 < d0) { const r = []; for (let i = ep.length - 2; i >= 0; i -= 2) r.push(ep[i], ep[i + 1]); ep = r; }
            chain.push(...ep.slice(2));
          } else chain = ep.slice();
        }
        pts = chain;
      }
      if (pts.length >= 6) loops.push(pts);
    }
    return loops;
  };
  // group into polygons (outer + islands) by style
  const hatchPolys = (loops, style) => {
    const info = loops.map((l, i) => ({ i, pts: l, area: Math.abs(polyArea2(l)), depth: 0, parent: -1 }));
    for (const a of info) {
      for (const b of info) {
        if (a === b) continue;
        if (b.area > a.area && pointInPoly(a.pts[0], a.pts[1], b.pts)) a.depth++;
      }
    }
    // style 0 = Normal (odd/even), 1 = Outer (first island level only), 2 = Ignore islands
    const polys = [];
    const outers = style === 0 || style === undefined ? info.filter((a) => a.depth % 2 === 0) : info.filter((a) => a.depth === 0);
    for (const o of outers) {
      const holes = [];
      if (style !== 2) {
        for (const h of info) {
          if (h.depth === o.depth + 1 && pointInPoly(h.pts[0], h.pts[1], o.pts)) holes.push(h.pts);
        }
      }
      polys.push({ outer: o.pts, holes });
    }
    return polys;
  };
  const fillPolygon = (poly, z, m, ld, kind, rgb, id) => {
    const toV2 = (a) => { const r = []; for (let i = 0; i < a.length; i += 2) r.push(new Vector2(a[i], a[i + 1])); return r; };
    const contour = toV2(poly.outer);
    const holes = poly.holes.map(toV2);
    let tris;
    try { tris = ShapeUtils.triangulateShape(contour, holes); } catch { return; }
    const all = [...contour];
    for (const h of holes) all.push(...h);
    for (const t of tris) {
      const w = t.map((i) => tp(m, all[i].x, all[i].y, z));
      for (const q of w) bnd(q[0], q[1], q[2]);
      emitTri(ld, kind, w[0], w[1], w[2], rgb, id);
    }
  };
  const hatchPattern = (poly, z, m, e, ld, rgb, id) => {
    const lines = e.definitionLines || [];
    if (!lines.length) return;
    const edgesPoly = [poly.outer, ...poly.holes];
    let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
    for (let i = 0; i < poly.outer.length; i += 2) {
      minx = Math.min(minx, poly.outer[i]); maxx = Math.max(maxx, poly.outer[i]);
      miny = Math.min(miny, poly.outer[i + 1]); maxy = Math.max(maxy, poly.outer[i + 1]);
    }
    const corners = [[minx, miny], [maxx, miny], [maxx, maxy], [minx, maxy]];
    let budget = 6000;
    for (const d of lines) {
      const a = ang(d.angle);
      const ux = Math.cos(a), uy = Math.sin(a), nx = -uy, ny = ux;
      const ox = num(d.offset?.x), oy = num(d.offset?.y);
      const bx = num(d.base?.x), by = num(d.base?.y);
      const spacing = Math.abs(ox * nx + oy * ny);
      if (spacing < 1e-9) continue;
      let k0 = Infinity, k1 = -Infinity;
      for (const c of corners) {
        const k = ((c[0] - bx) * nx + (c[1] - by) * ny) / (ox * nx + oy * ny);
        k0 = Math.min(k0, k); k1 = Math.max(k1, k);
      }
      let kStart = Math.floor(k0), kEnd = Math.ceil(k1);
      let kStep = 1;
      if ((kEnd - kStart) > budget) kStep = Math.ceil((kEnd - kStart) / budget);
      for (let k = kStart; k <= kEnd; k += kStep) {
        const px = bx + k * ox, py = by + k * oy;
        const ts = [];
        for (const loop of edgesPoly) {
          const nn = loop.length / 2;
          for (let i = 0; i < nn; i++) {
            const j = (i + 1) % nn;
            const x1 = loop[2 * i], y1 = loop[2 * i + 1], x2 = loop[2 * j], y2 = loop[2 * j + 1];
            const s1 = (x1 - px) * nx + (y1 - py) * ny;
            const s2 = (x2 - px) * nx + (y2 - py) * ny;
            if ((s1 < 0 && s2 >= 0) || (s2 < 0 && s1 >= 0)) {
              const f = s1 / (s1 - s2);
              const ix = x1 + (x2 - x1) * f, iy = y1 + (y2 - y1) * f;
              ts.push((ix - px) * ux + (iy - py) * uy);
            }
          }
        }
        ts.sort((p, q) => p - q);
        for (let i = 0; i + 1 < ts.length; i += 2) {
          const A = tp(m, px + ux * ts[i], py + uy * ts[i], z);
          const B = tp(m, px + ux * ts[i + 1], py + uy * ts[i + 1], z);
          bnd(A[0], A[1], A[2]); bnd(B[0], B[1], B[2]);
          emitSeg(ld, A[0], A[1], A[2], B[0], B[1], B[2], rgb, id);
        }
      }
    }
  };

  // ---- text
  const pushText = (ld, rec) => { ld.texts.push(rec); textCount++; };

  // ---- entity processing ----
  const processList = (list, ctx) => { for (const e of list) processEntity(e, ctx); };

  function processEntity(e, ctx) {
    if (!e || e.isVisible === false) return;
    const t = e.type;
    switch (t) {
      case 'LINE': {
        const { ld, rgb, lt } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const a = tp(ctx.m, ...P3(e.startPoint)), b = tp(ctx.m, ...P3(e.endPoint));
        emitWorldPath(ld, Float64Array.from([...a, ...b]), false, rgb, id, getPattern(lt, num(e.lineTypeScale, 1)));
        addSnap(...a); addSnap(...b);
        break;
      }
      case 'CIRCLE': {
        const { ld, rgb, lt } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const m = entMat(ctx, e.extrusionDirection);
        const [cx, cy, cz] = P3(e.center), r = num(e.radius);
        const out = [];
        const n = Math.max(24, Math.ceil(TAU / arcStep));
        for (let k = 0; k < n; k++) { const a = (TAU * k) / n; out.push(cx + r * Math.cos(a), cy + r * Math.sin(a), cz); }
        emitWorldPath(ld, toWorld(m, out), true, rgb, id, getPattern(lt, num(e.lineTypeScale, 1)));
        addSnap(...tp(m, cx, cy, cz));
        for (let k = 0; k < 4; k++) addSnap(...tp(m, cx + r * Math.cos((k * Math.PI) / 2), cy + r * Math.sin((k * Math.PI) / 2), cz));
        break;
      }
      case 'ARC': {
        const { ld, rgb, lt } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const m = entMat(ctx, e.extrusionDirection);
        const [cx, cy, cz] = P3(e.center), r = num(e.radius);
        const a0 = ang(e.startAngle), a1 = ang(e.endAngle);
        const out = [];
        arcPoints(cx, cy, cz, r, a0, a1, out);
        emitWorldPath(ld, toWorld(m, out), false, rgb, id, getPattern(lt, num(e.lineTypeScale, 1)));
        addSnap(...tp(m, cx, cy, cz)); addSnap(...tp(m, out[0], out[1], out[2])); addSnap(...tp(m, out[out.length - 3], out[out.length - 2], out[out.length - 1]));
        break;
      }
      case 'ELLIPSE': {
        const { ld, rgb, lt } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const [cx, cy, cz] = P3(e.center), [mx2, my2, mz2] = P3(e.majorAxisEndPoint);
        let nx = 0, ny = 0, nz = 1;
        if (e.extrusionDirection) { nx = num(e.extrusionDirection.x); ny = num(e.extrusionDirection.y); nz = num(e.extrusionDirection.z, 1); }
        const ratio = num(e.axisRatio, 1);
        const ix = ny * mz2 - nz * my2, iy = nz * mx2 - nx * mz2, iz = nx * my2 - ny * mx2;
        let t0 = num(e.startAngle), t1 = num(e.endAngle);
        let sweep = t1 - t0;
        if (Math.abs(sweep) < 1e-9 || Math.abs(sweep - TAU) < 1e-6) { t0 = 0; sweep = TAU; }
        while (sweep <= 0) sweep += TAU;
        const full = Math.abs(sweep - TAU) < 1e-6;
        const n = Math.max(16, Math.ceil(sweep / arcStep));
        const out = [];
        const last = full ? n - 1 : n;
        for (let k = 0; k <= last; k++) {
          const a = t0 + (sweep * k) / n;
          out.push(cx + Math.cos(a) * mx2 + Math.sin(a) * ix * ratio, cy + Math.cos(a) * my2 + Math.sin(a) * iy * ratio, cz + Math.cos(a) * mz2 + Math.sin(a) * iz * ratio);
        }
        emitWorldPath(ld, toWorld(ctx.m, out), full, rgb, id, getPattern(lt, num(e.lineTypeScale, 1)));
        addSnap(...tp(ctx.m, cx, cy, cz));
        break;
      }
      case 'LWPOLYLINE': {
        if (!e.vertices?.length) break;
        const { ld, rgb, lt } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const m = entMat(ctx, e.extrusionDirection);
        const closed = model.source === 'dwg' ? (num(e.flag) & 512) !== 0 : (num(e.flag) & 1) === 1;
        const path = lwPath(e.vertices, closed, num(e.elevation));
        emitWorldPath(ld, toWorld(m, path), closed, rgb, id, getPattern(lt, num(e.lineTypeScale, 1)));
        for (const v of e.vertices) addSnap(...tp(m, num(v.x), num(v.y), num(e.elevation)));
        break;
      }
      case 'POLYLINE': case 'POLYLINE2D': case 'POLYLINE3D': processPolyline(e, ctx); break;
      case 'SPLINE': {
        const cps = (e.controlPoints || []).map((c) => [num(c.x), num(c.y), num(c.z)]);
        const fit = (e.fitPoints || []).map((c) => [num(c.x), num(c.y), num(c.z)]);
        const deg = num(e.degree, 3);
        let pts = null;
        if (cps.length > deg && e.knots?.length === cps.length + deg + 1) {
          const w = e.weights && e.weights.length === cps.length ? e.weights : null;
          pts = nurbsPoints(deg, e.knots, cps, w, Math.min(4000, Math.max(24, cps.length * 10)));
        } else if (fit.length >= 2) pts = catmull(fit, 10);
        else if (cps.length >= 2) pts = cps.flat();
        if (!pts || pts.length < 6) { bump('SPLINE (no data)'); break; }
        const { ld, rgb, lt } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        emitWorldPath(ld, toWorld(ctx.m, pts), false, rgb, id, getPattern(lt, num(e.lineTypeScale, 1)));
        const keyPts = fit.length ? fit : cps;
        for (const p of keyPts) addSnap(...tp(ctx.m, ...p));
        break;
      }
      case '3DFACE': {
        const vs = e.vertices || [e.corner1, e.corner2, e.corner3, e.corner4];
        const pts = vs.filter(Boolean).map((p) => tp(ctx.m, ...P3(p)));
        if (pts.length < 3) break;
        const { ld, rgb } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const quad = pts.length >= 4 && !(pts[3][0] === pts[2][0] && pts[3][1] === pts[2][1] && pts[3][2] === pts[2][2]);
        emitTri(ld, 'tris', pts[0], pts[1], pts[2], rgb, id);
        if (quad) emitTri(ld, 'tris', pts[0], pts[2], pts[3], rgb, id);
        const flag = num(e.flag);
        const cnt = quad ? 4 : 3;
        for (let i = 0; i < cnt; i++) {
          if (flag & (1 << i)) continue; // arista invisible
          const a = pts[i], b = pts[(i + 1) % cnt];
          bnd(a[0], a[1], a[2]);
          emitSeg(ld, a[0], a[1], a[2], b[0], b[1], b[2], rgb, id);
        }
        addSnap(...pts[0]);
        for (let i = 1; i < cnt; i++) addSnap(...pts[i]);
        break;
      }
      case 'SOLID': case 'TRACE': {
        const raw = e.points || [e.corner1, e.corner2, e.corner3, e.corner4];
        const cs = raw.filter(Boolean);
        if (cs.length < 3) break;
        const { ld, rgb } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const m = entMat(ctx, e.extrusionDirection);
        const el = e.elevation !== undefined ? num(e.elevation) : (textZ !== null && ctx.depth === 0 && isDefaultExtrusion(e.extrusionDirection) ? textZ : 0);
        const w = cs.map((p) => tp(m, num(p.x), num(p.y), p.z !== undefined ? num(p.z) : el));
        // DXF SOLID vertex order: 1,2,4,3
        emitTri(ld, 'fills', w[0], w[1], w[2], rgb, id);
        if (w.length >= 4) emitTri(ld, 'fills', w[1], w[3], w[2], rgb, id);
        for (const q of w) bnd(q[0], q[1], q[2]);
        break;
      }
      case 'POINT': {
        const { ld, rgb } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const p0 = P3(e.position); if (p0[2] <= -99999 || p0[2] >= 1e8) { p0[2] = 0; noZ++; }
        const p = tp(ctx.m, ...p0);
        bnd(...p);
        emitPoint(ld, p[0], p[1], p[2], rgb, id);
        addSnap(...p);
        break;
      }
      case 'LEADER': {
        const vs = (e.vertices || []).map((p) => tp(ctx.m, ...P3(p)));
        if (vs.length < 2) break;
        const { ld, rgb, lt } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        emitWorldPath(ld, Float64Array.from(vs.flat()), false, rgb, id, getPattern(lt, 1));
        break;
      }
      case 'HATCH': {
        const loops = hatchLoops(e);
        if (!loops.length) { bump('HATCH (no boundary)'); break; }
        const { ld, rgb } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const m = entMat(ctx, e.extrusionDirection);
        const hz = e.elevation ?? e.elevationPoint?.z;
        const z = hz !== undefined ? num(hz) : (textZ !== null && ctx.depth === 0 && isDefaultExtrusion(e.extrusionDirection) ? textZ : 0);
        const polys = hatchPolys(loops, num(e.hatchStyle));
        let fillRgb = rgb;
        if (e.gradientColors?.length && typeof e.gradientColors[0].rgb === 'number') fillRgb = e.gradientColors[0].rgb & 0xffffff;
        const solid = num(e.solidFill) === 1 || e.gradientFlag === 1 || e.gradientName;
        for (const poly of polys) {
          if (solid) fillPolygon(poly, z, m, ld, 'fills', fillRgb, id);
          else if (e.definitionLines?.length) hatchPattern(poly, z, m, e, ld, rgb, id);
          else fillPolygon(poly, z, m, ld, 'pfills', rgb, id);
        }
        break;
      }
      case 'TEXT': case 'ATTRIB': {
        if (t === 'ATTRIB' && (num(e.flag) & 1 || e.isInvisible)) break;
        if (e.text && typeof e.text === 'object') e = { ...e, ...e.text, text: e.text.text, flag: e.flag };
        const str = cleanText(e.text, false);
        if (!str.trim()) break;
        const { ld, rgb } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const m0 = entMat(ctx, e.extrusionDirection);
        const hal = num(e.halign ?? e.horizontalJustification), val = num(e.valign ?? e.verticalJustification);
        const aligned = hal !== 0 || val !== 0;
        const P = aligned && e.endPoint && (num(e.endPoint.x) !== 0 || num(e.endPoint.y) !== 0) ? e.endPoint : e.startPoint;
        const px = num(P?.x), py = num(P?.y);
        const pz = e.startPoint && e.startPoint.z !== undefined ? num(e.startPoint.z) : e.elevation !== undefined ? num(e.elevation) : (textZ !== null && ctx.depth === 0 && isDefaultExtrusion(e.extrusionDirection) ? textZ : 0);
        const m = mul(m0, mul(T4(px, py, pz), RZ4(ang(e.rotation))));
        pushText(ld, { kind: 'TEXT', str, T: m, h: num(e.textHeight ?? e.height, 1) || 1, wf: num(e.xScale ?? e.widthFactor, 1) || 1, obl: ang(e.obliqueAngle), hal, val, rgb, id, w: 0, endX: aligned ? (num(e.startPoint?.x) - num(e.endPoint?.x)) : 0 });
        const q = tp(m, 0, 0, 0); bnd(...q); addSnap(...q);
        break;
      }
      case 'MTEXT': {
        const str = cleanText(e.text, true);
        if (!str.trim()) break;
        const { ld, rgb } = resolve(e, ctx);
        const id = regId(e, ctx.via); ld.count++;
        const ip = P3(e.insertionPoint);
        const dir = e.direction || e.directionVector;
        const ext = e.extrusionDirection;
        const m0 = entMat(ctx, null);
        let xax;
        if (dir && Math.hypot(num(dir.x), num(dir.y), num(dir.z)) > 1e-9) xax = [num(dir.x), num(dir.y), num(dir.z)];
        else { const r = ang(e.rotation); xax = [Math.cos(r), Math.sin(r), 0]; }
        const xl = Math.hypot(...xax) || 1; xax = xax.map((v) => v / xl);
        const N = ext ? [num(ext.x), num(ext.y), ext.z !== undefined ? num(ext.z, 1) : 1] : [0, 0, 1];
        const nl = Math.hypot(...N) || 1; const nn = N.map((v) => v / nl);
        const yax = [nn[1] * xax[2] - nn[2] * xax[1], nn[2] * xax[0] - nn[0] * xax[2], nn[0] * xax[1] - nn[1] * xax[0]];
        const L = new Matrix4().set(xax[0], yax[0], nn[0], ip[0], xax[1], yax[1], nn[1], ip[1], xax[2], yax[2], nn[2], ip[2], 0, 0, 0, 1).elements.slice();
        const m = mul(m0, L);
        pushText(ld, { kind: 'MTEXT', str, T: m, h: num(e.textHeight ?? e.height, 1) || 1, wf: 1, obl: 0, hal: 0, val: 0, att: num(e.attachmentPoint, 1) || 1, rgb, id, w: num(e.rectWidth ?? e.width), endX: 0 });
        const q = tp(m, 0, 0, 0); bnd(...q); addSnap(...q);
        break;
      }
      case 'INSERT': processInsert(e, ctx); break;
      case 'DIMENSION': {
        const blk = e.name ? model.blocks.get(e.name) : null;
        if (!blk || !blk.entities.length) { bump('DIMENSION (no block)'); break; }
        if (ctx.depth >= MAX_DEPTH) break;
        const { ln, rgb, lt } = resolve(e, ctx);
        const dctx = { m: ctx.m, layer: ln, blockRgb: rgb, ltype: lt, force: ctx.force || null, via: ctx.via >= 0 ? ctx.via : regId(e, -1), depth: ctx.depth + 1 };
        processList(blk.entities, dctx);
        break;
      }
      case 'ATTDEF': case 'VERTEX': case 'SEQEND': case 'ENDBLK': case 'BLOCK': break;
      default:
        bump(t || '(sin tipo)');
    }
  }

  function processPolyline(e, ctx) {
    const flag = num(e.flag);
    const vsAll = e.vertices || [];
    if (!vsAll.length) return;
    let kind;
    if (e.type === 'POLYLINE3D' || (e.type === 'POLYLINE' && (flag & 8))) kind = '3d';
    else if (e.type === 'POLYLINE' && (flag & 64)) kind = 'pface';
    else if (e.type === 'POLYLINE' && (flag & 16)) kind = 'mesh';
    else kind = '2d';
    const { ld, rgb, lt } = resolve(e, ctx);
    const pat = getPattern(lt, num(e.lineTypeScale, 1));
    if (kind === 'pface') {
      const pos = vsAll.filter((v) => num(v.flag) & 64).map((v) => tp(ctx.m, num(v.x), num(v.y), num(v.z)));
      const faces = vsAll.filter((v) => !(num(v.flag) & 64) && (num(v.flag) & 128));
      let ok = false;
      const id = regId(e, ctx.via); ld.count++;
      for (const f of faces) {
        const idx = [f.polyfaceIndex0 ?? f.faceA, f.polyfaceIndex1 ?? f.faceB, f.polyfaceIndex2 ?? f.faceC, f.polyfaceIndex3 ?? f.faceD].filter((i) => typeof i === 'number' && i !== 0);
        if (idx.length < 3) continue;
        const pts = idx.map((i) => pos[Math.abs(i) - 1]).filter(Boolean);
        if (pts.length < 3) continue;
        ok = true;
        emitTri(ld, 'tris', pts[0], pts[1], pts[2], rgb, id);
        if (pts.length >= 4) emitTri(ld, 'tris', pts[0], pts[2], pts[3], rgb, id);
        for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; bnd(...a); emitSeg(ld, ...a, ...b, rgb, id); }
      }
      if (!ok) { bump('POLYLINE polyface mesh (no indices)'); ld.count--; }
      return;
    }
    if (kind === 'mesh') {
      const M = num(e.meshMVertexCount), N = num(e.meshNVertexCount);
      if (M < 2 || N < 2 || M * N > vsAll.length) { bump('POLYLINE 3D mesh (no dimensions)'); return; }
      const id = regId(e, ctx.via); ld.count++;
      const g = (i, j) => { const v = vsAll[(i % M) * N + (j % N)]; return tp(ctx.m, num(v.x), num(v.y), num(v.z)); };
      const cm = (flag & 1) ? M : M - 1, cn = (flag & 32) ? N : N - 1;
      for (let i = 0; i < cm; i++) for (let j = 0; j < cn; j++) {
        const a = g(i, j), b = g(i + 1, j), c = g(i + 1, j + 1), d = g(i, j + 1);
        emitTri(ld, 'tris', a, b, c, rgb, id); emitTri(ld, 'tris', a, c, d, rgb, id);
        bnd(...a); emitSeg(ld, ...a, ...b, rgb, id); emitSeg(ld, ...a, ...d, rgb, id);
      }
      return;
    }
    const id = regId(e, ctx.via); ld.count++;
    const closed = (flag & 1) === 1;
    if (kind === '3d') {
      const vs = vsAll.filter((v) => !(num(v.flag) & 16));
      const pts = [];
      for (const v of vs) pts.push(num(v.x), num(v.y), num(v.z));
      emitWorldPath(ld, toWorld(ctx.m, pts), closed, rgb, id, pat);
      for (const v of vs) addSnap(...tp(ctx.m, num(v.x), num(v.y), num(v.z)));
    } else {
      const m = entMat(ctx, e.extrusionDirection);
      let vs = vsAll;
      if (vs.some((v) => num(v.flag) & 8)) vs = vs.filter((v) => !(num(v.flag) & 16));
      const el = num(e.elevation);
      const z = (v) => (el !== 0 ? el : num(v.z));
      const path = lwPath(vs.map((v) => ({ x: v.x, y: v.y, bulge: v.bulge })), closed, vs.length ? z(vs[0]) : 0);
      emitWorldPath(ld, toWorld(m, path), closed, rgb, id, pat);
      for (const v of vs) addSnap(...tp(m, num(v.x), num(v.y), z(v)));
    }
  }

  function processInsert(e, ctx) {
    const blk = model.blocks.get(e.name);
    if (!blk) { bump('INSERT (block not found)'); return; }
    if (ctx.depth >= MAX_DEPTH) { bump('INSERT (nesting > ' + MAX_DEPTH + ')'); return; }
    const { ln, rgb, lt } = resolve(e, ctx);
    const L = linfo(ln);
    const via = ctx.via >= 0 ? ctx.via : regId(e, -1);
    const sx2 = e.xScale ?? 1, sy2 = e.yScale ?? 1, sz2 = e.zScale ?? 1;
    const base = P3(blk.base);
    const ip = P3(e.insertionPoint);
    const m0 = entMat(ctx, e.extrusionDirection);
    const rot = ang(e.rotation);
    const cols = Math.max(1, num(e.columnCount, 1)), rows = Math.max(1, num(e.rowCount, 1));
    const cs = num(e.columnSpacing), rs = num(e.rowSpacing);
    const force = ctx.force || (L.off || L.frozen ? ln : null);
    const baseM = mul(m0, mul(T4(ip[0], ip[1], ip[2]), RZ4(rot)));
    const tail = mul(S4(num(sx2, 1), num(sy2, 1), num(sz2, 1)), T4(-base[0], -base[1], -base[2]));
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const m = mul(baseM, mul(T4(c * cs, r * rs, 0), tail));
        const ictx = { m, layer: ln, blockRgb: rgb, ltype: lt, force, via, depth: ctx.depth + 1 };
        processList(blk.entities, ictx);
      }
    }
    // attributes (INSERT text)
    if (e.attribs?.length) for (const a of e.attribs) processEntity({ ...a, type: 'ATTRIB' }, { ...ctx, via });
    const q = tp(m0, ...ip); addSnap(...q);
  }

  // ---- run
  const top = { m: IDENT, layer: null, blockRgb: null, ltype: null, force: null, via: -1, depth: 0 };
  processList(model.entities, top);

  // ---- robust bounds
  const pct = (a, p) => { if (!a.length) return 0; const b = Float64Array.from(a).sort(); return b[Math.min(b.length - 1, Math.max(0, Math.floor(p * (b.length - 1))))]; };
  const hasB = mn[0] !== Infinity;
  const bounds = hasB ? {
    min: [mn[0] - OX, mn[1] - OY, mn[2] - OZ], max: [mx[0] - OX, mx[1] - OY, mx[2] - OZ],
    rmin: [pct(sx, 0.005) - OX, pct(sy, 0.005) - OY, pct(sz, 0.005) - OZ], rmax: [pct(sx, 0.995) - OX, pct(sy, 0.995) - OY, pct(sz, 0.995) - OZ],
  } : { min: [-1, -1, -1], max: [1, 1, 1], rmin: [-1, -1, -1], rmax: [1, 1, 1] };

  const fin = (S) => ({ p: S.p.done(), c: S.c.done(), e: S.e.done() });
  const layersOut = [];
  for (const ld of LD.values()) {
    const info = linfo(ld.name);
    layersOut.push({
      name: ld.name,
      color: info.rgb != null ? info.rgb : aciRgb(info.aci ?? 7),
      hidden: !!(info.off || info.frozen),
      count: ld.count,
      lines: fin(ld.lines), tris: fin(ld.tris), fills: fin(ld.fills), pfills: fin(ld.pfills), pts: fin(ld.pts),
      texts: ld.texts,
    });
  }
  layersOut.sort((a, b) => (a.name === '0' ? -1 : b.name === '0' ? 1 : a.name.localeCompare(b.name, 'es', { numeric: true })));
  const remap = new Uint32Array(LD.size);
  layersOut.forEach((L, i) => { remap[LD.get(L.name).idx] = i; });
  const snapLayer = snapL.done();
  for (let i = 0; i < snapLayer.length; i++) snapLayer[i] = remap[snapLayer[i]];

  return {
    origin: [OX, OY, OZ],
    layers: layersOut,
    reg,
    snap: snap.done(),
    snapLayer,
    bounds,
    stats: {
      source: model.source,
      entities: reg.length,
      topLevel: model.entities.length,
      segments: segCount,
      triangles: triCount,
      texts: textCount,
      truncated,
      unsupported: Object.fromEntries([...unsupported.entries()].sort((a, b) => b[1] - a[1])),
      textZ,
      noZ,
    },
  };
}

// ---------------------------------------------------------------- entity properties
const fmt = (v, d = 3) => (Number.isFinite(v) ? v.toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: 0 }) : '—');
export function describeEntity(model, entry) {
  const e = entry.s;
  const rows = [];
  const push = (k, v) => rows.push([k, v]);
  push('Type', e.type + (e.type === 'POLYLINE' ? (num(e.flag) & 8 ? ' 3D' : ' 2D') : ''));
  if (e.handle) push('Handle', String(e.handle));
  push('Layer', e.layer ?? '0');
  if (e.lineType) push('Linetype', e.lineType);
  if (typeof e.color === 'number') push('Color', '#' + (e.color & 0xffffff).toString(16).padStart(6, '0') + ' (RGB)');
  else push('Color', e.colorIndex === undefined || e.colorIndex === 256 ? 'ByLayer' : e.colorIndex === 0 ? 'ByBlock' : 'ACI ' + e.colorIndex);
  const d3 = (a, b) => Math.hypot(num(b.x) - num(a.x), num(b.y) - num(a.y), num(b.z) - num(a.z));
  const pathMetrics = (pts, closed) => {
    let L = 0, Lh = 0;
    const n = pts.length;
    for (let i = 0; i < (closed ? n : n - 1); i++) { const a = pts[i], b = pts[(i + 1) % n]; L += d3(a, b); Lh += Math.hypot(num(b.x) - num(a.x), num(b.y) - num(a.y)); }
    push('3D length', fmt(L) + ' u'); push('Horizontal length', fmt(Lh) + ' u');
    if (closed && n >= 3) { const flat = []; for (const p of pts) flat.push(num(p.x), num(p.y)); push('Plan area', fmt(Math.abs(polyArea2(flat))) + ' u²'); }
    push('Vertices', String(n));
  };
  switch (e.type) {
    case 'LINE': {
      const a = e.startPoint, b = e.endPoint;
      push('Start', `${fmt(num(a.x))}, ${fmt(num(a.y))}, ${fmt(num(a.z))}`);
      push('End', `${fmt(num(b.x))}, ${fmt(num(b.y))}, ${fmt(num(b.z))}`);
      const L = d3(a, b), Lh = Math.hypot(num(b.x) - num(a.x), num(b.y) - num(a.y));
      push('3D length', fmt(L) + ' u'); push('Horizontal length', fmt(Lh) + ' u'); push('Δ elevation', fmt(num(b.z) - num(a.z)) + ' u');
      if (Lh > 1e-9) push('Slope', fmt((Math.abs(num(b.z) - num(a.z)) / Lh) * 100, 2) + ' %');
      break;
    }
    case 'LWPOLYLINE': pathMetrics(e.vertices || [], model.source === 'dwg' ? (num(e.flag) & 512) !== 0 : (num(e.flag) & 1) === 1); push('Elevation', fmt(num(e.elevation))); break;
    case 'POLYLINE': case 'POLYLINE2D': case 'POLYLINE3D': pathMetrics((e.vertices || []).filter((v) => !(num(v.flag) & 16)), (num(e.flag) & 1) === 1); break;
    case 'CIRCLE': push('Center', `${fmt(num(e.center.x))}, ${fmt(num(e.center.y))}, ${fmt(num(e.center.z))}`); push('Radius', fmt(e.radius)); push('Circumference', fmt(TAU * e.radius)); push('Area', fmt(Math.PI * e.radius * e.radius) + ' u²'); break;
    case 'ARC': {
      const a0 = model.angleUnit === 'deg' ? (e.startAngle * Math.PI) / 180 : e.startAngle, a1 = model.angleUnit === 'deg' ? (e.endAngle * Math.PI) / 180 : e.endAngle;
      let sw = a1 - a0; while (sw <= 0) sw += TAU;
      push('Center', `${fmt(num(e.center.x))}, ${fmt(num(e.center.y))}, ${fmt(num(e.center.z))}`); push('Radius', fmt(e.radius)); push('Angle', fmt((sw * 180) / Math.PI, 2) + '°'); push('Length', fmt(sw * e.radius) + ' u'); break;
    }
    case 'TEXT': case 'MTEXT': case 'ATTRIB': push('Text', cleanText(e.text, e.type === 'MTEXT').replace(/\n/g, ' ⏎ ')); push('Height', fmt(num(e.textHeight ?? e.height))); break;
    case 'INSERT': for (const a of e.attribs || []) { const t = typeof a.text === 'object' ? a.text?.text : a.text; if (a.tag && t) push(a.tag, t); } push('Block', e.name); push('Scale', `${fmt(e.xScale ?? 1)}, ${fmt(e.yScale ?? 1)}, ${fmt(e.zScale ?? 1)}`); push('Rotation', fmt(model.angleUnit === 'deg' ? num(e.rotation) : (num(e.rotation) * 180) / Math.PI, 2) + '°'); push('Insertion', `${fmt(num(e.insertionPoint?.x))}, ${fmt(num(e.insertionPoint?.y))}, ${fmt(num(e.insertionPoint?.z))}`); break;
    case '3DFACE': {
      const vs = (e.vertices || [e.corner1, e.corner2, e.corner3, e.corner4]).filter(Boolean);
      const tri = (a, b, c) => { const ux = num(b.x) - num(a.x), uy = num(b.y) - num(a.y), uz = num(b.z) - num(a.z), vx = num(c.x) - num(a.x), vy = num(c.y) - num(a.y), vz = num(c.z) - num(a.z); return 0.5 * Math.hypot(uy * vz - uz * vy, uz * vx - ux * vz, ux * vy - uy * vx); };
      let A = vs.length >= 3 ? tri(vs[0], vs[1], vs[2]) : 0; if (vs.length >= 4) A += tri(vs[0], vs[2], vs[3]);
      push('3D area', fmt(A) + ' u²'); vs.forEach((v, i) => push('Vertex ' + (i + 1), `${fmt(num(v.x))}, ${fmt(num(v.y))}, ${fmt(num(v.z))}`)); break;
    }
    case 'POINT': { const pz = num(e.position.z); push('Position', `${fmt(num(e.position.x))}, ${fmt(num(e.position.y))}, ${pz <= -99999 ? '0 (no elevation)' : fmt(pz)}`); break; }
    case 'HATCH': push('Pattern', e.patternName || '—'); break;
    case 'DIMENSION': push('Text', e.text || '<>'); if (Number.isFinite(e.measurement)) push('Measurement', fmt(e.measurement)); break;
    default: break;
  }
  return rows;
}
