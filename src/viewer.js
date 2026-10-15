import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { makeAtlas, buildTextGeometry } from './text.js';
import { describeEntity } from './geom.js';

const V3 = THREE.Vector3;
const _m = new THREE.Matrix4();
const rad = THREE.MathUtils.degToRad;

export class Viewer {
  constructor(els, hooks) {
    this.els = els;
    this.hooks = hooks || {};
    this.size = { w: 1, h: 1 };
    this.light = false;
    this.zEx = 1;
    this.show = { lines: true, tris: true, fills: true, pts: true, text: true, axes: false };
    this.tool = 'select';
    this.measure = { pts: [], cursor: null, closed: false };
    this.sel = null;
    this.layerVis = [];
    this.g = null;
    this.model = null;
    this.labels = [];
    this._raf = 0;
    this._hover = null;

    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: false }));
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    els.view.appendChild(r.domElement);
    r.domElement.style.touchAction = 'none';

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x101418);
    this.root = new THREE.Group();
    this.scene.add(this.root);
    this.axes = new THREE.AxesHelper(1);
    this.axes.visible = false;
    this.scene.add(this.axes);

    this.persp = new THREE.PerspectiveCamera(45, 1, 0.1, 1e6);
    this.ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, -1e6, 1e6);
    for (const c of [this.persp, this.ortho]) { c.up.set(0, 0, 1); this.scene.add(c); }
    this.orthoH = 100;
    this.cam = this.persp;
    this.persp.position.set(100, -100, 80);

    this.lightAmb = new THREE.AmbientLight(0xffffff, 1.6);
    this.lightDir = new THREE.DirectionalLight(0xffffff, 2.2);
    this.lightDir.position.set(0.4, 0.6, 1);
    this.lightDir.target.position.set(0, 0, -1);
    this.scene.add(this.lightAmb);
    this.cam.add(this.lightDir, this.lightDir.target);

    const c = (this.controls = new OrbitControls(this.cam, r.domElement));
    c.enableDamping = false;
    c.zoomToCursor = true;
    c.screenSpacePanning = true;
    c.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
    c.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };
    c.addEventListener('change', () => { this.updateClip(); this.requestRender(); });

    this.ray = new THREE.Raycaster();

    this.mats = {
      lines: new THREE.LineBasicMaterial({ vertexColors: true }),
      tris: new THREE.MeshLambertMaterial({ vertexColors: true, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }),
      fills: new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 }),
      pfills: new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, transparent: true, opacity: 0.3, depthWrite: false }),
      pts: new THREE.PointsMaterial({ size: 5, sizeAttenuation: false, vertexColors: true }),
    };
    this.hiLines = new THREE.LineSegments(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0xffb000, depthTest: false, transparent: true }));
    this.hiLines.renderOrder = 20; this.hiLines.frustumCulled = false;
    this.hiPts = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: 0xffb000, size: 11, sizeAttenuation: false, depthTest: false, transparent: true }));
    this.hiPts.renderOrder = 21; this.hiPts.frustumCulled = false;
    this.root.add(this.hiLines, this.hiPts);

    this.measLine = new THREE.Line(new THREE.BufferGeometry(), new THREE.LineBasicMaterial({ color: 0x35e0ff, depthTest: false, transparent: true }));
    this.measLine.renderOrder = 22; this.measLine.frustumCulled = false;
    this.measPts = new THREE.Points(new THREE.BufferGeometry(), new THREE.PointsMaterial({ color: 0x35e0ff, size: 9, sizeAttenuation: false, depthTest: false, transparent: true }));
    this.measPts.renderOrder = 23; this.measPts.frustumCulled = false;
    this.root.add(this.measLine, this.measPts);

    this.layerObjs = [];
    this._bindEvents();
    new ResizeObserver(() => this.resize()).observe(els.view);
    this.resize();
  }

  // ------------------------------------------------------------------ carga
  clear() {
    for (const lo of this.layerObjs) {
      lo.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
      this.root.remove(lo.group);
    }
    this.layerObjs = [];
    if (this.atlas) { this.atlas.tex.dispose(); this.atlas = null; }
    this.setHighlight(null);
    this.measure = { pts: [], cursor: null, closed: false };
    this.refreshMeasure();
    this.sel = null;
  }

  setGeometry(g, model) {
    this.clear();
    this.g = g;
    this.model = model;
    this.layerVis = g.layers.map((L) => !L.hidden);
    // text atlas
    const chars = new Set();
    for (const L of g.layers) for (const t of L.texts) for (const ch of t.str) chars.add(ch);
    let omitted = 0;
    if (chars.size) this.atlas = makeAtlas(chars);
    this.mats.text = this.atlas ? new THREE.MeshBasicMaterial({ map: this.atlas.tex, vertexColors: true, transparent: true, alphaTest: 0.35, side: THREE.DoubleSide }) : null;

    g.layers.forEach((L, li) => {
      const group = new THREE.Group();
      group.visible = this.layerVis[li];
      group.name = L.name;
      const parts = {};
      const mk = (S, kind, ctor, mat, withNormals) => {
        if (!S.e.length) return;
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(S.p, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(S.c, 3, true));
        if (withNormals) geo.computeVertexNormals();
        geo.computeBoundingSphere();
        const o = new ctor(geo, mat);
        o.userData.kind = kind;
        o.matrixAutoUpdate = false;
        group.add(o);
        parts[kind] = o;
      };
      mk(L.lines, 'lines', THREE.LineSegments, this.mats.lines);
      mk(L.tris, 'tris', THREE.Mesh, this.mats.tris, true);
      mk(L.fills, 'fills', THREE.Mesh, this.mats.fills);
      mk(L.pfills, 'pfills', THREE.Mesh, this.mats.pfills);
      mk(L.pts, 'pts', THREE.Points, this.mats.pts);
      let anchors = null;
      if (L.texts.length && this.atlas) {
        const tg = buildTextGeometry(L.texts, this.atlas, g.origin);
        omitted += tg.omitted;
        if (tg.idx.length) {
          const geo = new THREE.BufferGeometry();
          geo.setAttribute('position', new THREE.BufferAttribute(tg.pos, 3));
          geo.setAttribute('uv', new THREE.BufferAttribute(tg.uv, 2));
          geo.setAttribute('color', new THREE.BufferAttribute(tg.col, 3, true));
          geo.setIndex(new THREE.BufferAttribute(tg.idx, 1));
          geo.computeBoundingSphere();
          const o = new THREE.Mesh(geo, this.mats.text);
          o.userData.kind = 'text';
          group.add(o);
          parts.text = o;
        }
        anchors = tg.anchors;
      }
      this.root.add(group);
      this.layerObjs.push({ group, parts, anchors });
    });
    this.textOmitted = omitted;
    this.applyShow();
    this.fit(false);
    this.requestRender();
    return { textOmitted: omitted };
  }

  // ------------------------------------------------------------------ opciones
  setBackground(light) {
    this.light = light;
    this.scene.background = new THREE.Color(light ? 0xf3f4f6 : 0x101418);
    this.measLine.material.color.set(light ? 0x0077aa : 0x35e0ff);
    this.measPts.material.color.set(light ? 0x0077aa : 0x35e0ff);
    this.requestRender();
  }
  setShow(key, v) { this.show[key] = v; this.applyShow(); }
  applyShow() {
    const s = this.show;
    for (const lo of this.layerObjs) {
      const p = lo.parts;
      if (p.lines) p.lines.visible = s.lines;
      if (p.tris) p.tris.visible = s.tris;
      if (p.fills) p.fills.visible = s.fills;
      if (p.pfills) p.pfills.visible = s.fills;
      if (p.pts) p.pts.visible = s.pts;
      if (p.text) p.text.visible = s.text;
    }
    this.axes.visible = s.axes;
    this.requestRender();
  }
  setZEx(k) {
    this.zEx = k;
    this.root.scale.set(1, 1, k);
    this.root.updateMatrixWorld(true);
    this.updateClip();
    this.requestRender();
  }
  setLayerVisible(i, v) {
    this.layerVis[i] = v;
    if (this.layerObjs[i]) this.layerObjs[i].group.visible = v;
    this.requestRender();
  }

  // ------------------------------------------------------------------ camera
  resize() {
    const w = Math.max(1, this.els.view.clientWidth), h = Math.max(1, this.els.view.clientHeight);
    this.size = { w, h };
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = w + 'px';
    this.renderer.domElement.style.height = h + 'px';
    this.persp.aspect = w / h;
    this.persp.updateProjectionMatrix();
    this.applyOrtho();
    this.requestRender();
  }
  applyOrtho() {
    const a = this.size.w / this.size.h, t = this.orthoH / 2;
    Object.assign(this.ortho, { top: t, bottom: -t, left: -t * a, right: t * a });
    this.ortho.updateProjectionMatrix();
  }
  radius() {
    const b = this.g?.bounds;
    if (!b) return 100;
    const dx = b.rmax[0] - b.rmin[0], dy = b.rmax[1] - b.rmin[1], dz = (b.rmax[2] - b.rmin[2]) * this.zEx;
    return Math.max(0.5 * Math.hypot(dx, dy, dz), 0.01);
  }
  updateClip() {
    const R = this.radius();
    const d = this.cam.position.distanceTo(this.controls.target);
    if (this.cam.isPerspectiveCamera) {
      this.cam.near = Math.max(d * 0.005, R * 1e-6);
      this.cam.far = d + R * 20 + 1;
    } else {
      this.cam.near = -(R * 40 + d * 4);
      this.cam.far = R * 40 + d * 4;
    }
    this.cam.updateProjectionMatrix();
  }
  fit(full, dirName = 'iso') {
    if (!this.g) return;
    const b = this.g.bounds;
    let mn = full ? b.min : b.rmin, mx = full ? b.max : b.rmax;
    if (!full) {
      // The robust box ignores stray objects far from the drawing, but it can also clip real content
      // (e.g. a title block). Use the full extents unless they are dominated by outliers.
      const dr = Math.hypot(b.rmax[0] - b.rmin[0], b.rmax[1] - b.rmin[1]) || 1;
      const df = Math.hypot(b.max[0] - b.min[0], b.max[1] - b.min[1]);
      if (df < 6 * dr) {
        mn = [b.min[0], b.min[1], b.rmin[2]]; mx = [b.max[0], b.max[1], b.rmax[2]];
        if (b.max[2] - b.min[2] < 0.5 * df) { mn[2] = b.min[2]; mx[2] = b.max[2]; }
      }
    }
    const c = new V3((mn[0] + mx[0]) / 2, (mn[1] + mx[1]) / 2, ((mn[2] + mx[2]) / 2) * this.zEx);
    this.fitCenter = c;
    const R = Math.max(0.5 * Math.hypot(mx[0] - mn[0], mx[1] - mn[1], (mx[2] - mn[2]) * this.zEx), 0.01);
    this.view(dirName, c, R);
  }
  view(name, center, R) {
    const c = center || this.fitCenter || new V3();
    R = R || this.radius();
    const dirs = { iso: [1, -1.1, 0.85], top: [0, -1e-4, 1], front: [0, -1, 0.0001], right: [1, 0, 0.0001], back: [0, 1, 0.0001], left: [-1, 0, 0.0001] };
    const dv = new V3(...(dirs[name] || dirs.iso)).normalize();
    const cam = this.cam;
    let dist;
    if (cam.isPerspectiveCamera) dist = (R * 1.1) / Math.sin(rad(Math.min(cam.fov, cam.fov * cam.aspect) / 2));
    else {
      dist = R * 6;
      this.orthoH = 2 * R * 1.15 * Math.max(1, 1 / (this.size.w / this.size.h));
      cam.zoom = 1;
      this.applyOrtho();
    }
    cam.position.copy(c).addScaledVector(dv, dist);
    this.controls.target.copy(c);
    cam.lookAt(c);
    this.controls.update();
    this.updateClip();
    this.requestRender();
  }
  setProjection(ortho) {
    const old = this.cam, nw = ortho ? this.ortho : this.persp;
    if (old === nw) return;
    const t = this.controls.target.clone();
    const d = old.position.distanceTo(t);
    const dirv = old.position.clone().sub(t).normalize();
    old.remove(this.lightDir, this.lightDir.target);
    this.cam = nw;
    nw.add(this.lightDir, this.lightDir.target);
    if (ortho) {
      const h = old.isPerspectiveCamera ? 2 * d * Math.tan(rad(old.fov / 2)) : this.orthoH;
      this.orthoH = h; nw.zoom = 1; this.applyOrtho();
      nw.position.copy(t).addScaledVector(dirv, Math.max(d, this.radius() * 3));
    } else {
      const h = this.orthoH / old.zoom;
      const dd = h / (2 * Math.tan(rad(nw.fov / 2)));
      nw.position.copy(t).addScaledVector(dirv, dd);
    }
    this.controls.object = nw;
    nw.lookAt(t);
    this.controls.target.copy(t);
    this.controls.update();
    this.updateClip();
    this.requestRender();
  }
  setPanMode(pan) {
    this.controls.mouseButtons.LEFT = pan ? THREE.MOUSE.PAN : THREE.MOUSE.ROTATE;
    this.controls.mouseButtons.RIGHT = pan ? THREE.MOUSE.ROTATE : THREE.MOUSE.PAN;
    this.controls.touches.ONE = pan ? THREE.TOUCH.PAN : THREE.TOUCH.ROTATE;
  }

  // ------------------------------------------------------------------ render
  requestRender() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => { this._raf = 0; this.render(); });
  }
  render() {
    this.cam.updateMatrixWorld();
    this.renderer.render(this.scene, this.cam);
    this.updateLabels();
  }
  screenshot() {
    this.render();
    return new Promise((res) => this.renderer.domElement.toBlob(res, 'image/png'));
  }

  // ------------------------------------------------------------------ interaction geometry
  pixelWorld() {
    const h = this.size.h;
    if (this.cam.isPerspectiveCamera) return (2 * this.cam.position.distanceTo(this.controls.target) * Math.tan(rad(this.cam.fov / 2))) / h;
    return (this.cam.top - this.cam.bottom) / this.cam.zoom / h;
  }
  _ndc(cx, cy) {
    const rc = this.renderer.domElement.getBoundingClientRect();
    return { x: ((cx - rc.left) / rc.width) * 2 - 1, y: -((cy - rc.top) / rc.height) * 2 + 1, px: cx - rc.left, py: cy - rc.top };
  }
  _project(x, y, z) {
    const e = _m.elements;
    const cw = e[3] * x + e[7] * y + e[11] * z + e[15];
    if (cw <= 1e-12 && this.cam.isPerspectiveCamera) return null;
    const w = cw || 1;
    return [((e[0] * x + e[4] * y + e[8] * z + e[12]) / w * 0.5 + 0.5) * this.size.w, (-(e[1] * x + e[5] * y + e[9] * z + e[13]) / w * 0.5 + 0.5) * this.size.h];
  }
  _prepProj() {
    this.cam.updateMatrixWorld();
    this.root.updateMatrixWorld(true);
    _m.multiplyMatrices(this.cam.projectionMatrix, this.cam.matrixWorldInverse).multiply(this.root.matrixWorld);
  }

  nearestSnap(px, py, maxPx = 16) {
    const g = this.g;
    if (!g || !g.snap.length) return null;
    this._prepProj();
    const e = _m.elements, pts = g.snap, sl = g.snapLayer, vis = this.layerVis;
    const w = this.size.w, h = this.size.h, persp = this.cam.isPerspectiveCamera;
    let best = -1, bd = maxPx * maxPx;
    const n = pts.length / 3;
    for (let i = 0; i < n; i++) {
      if (!vis[sl[i]]) continue;
      const x = pts[3 * i], y = pts[3 * i + 1], z = pts[3 * i + 2];
      const cw = e[3] * x + e[7] * y + e[11] * z + e[15];
      if (persp && cw <= 1e-12) continue;
      const iw = 1 / (cw || 1);
      const sx = ((e[0] * x + e[4] * y + e[8] * z + e[12]) * iw * 0.5 + 0.5) * w - px;
      if (sx > maxPx || sx < -maxPx) continue;
      const sy = (-(e[1] * x + e[5] * y + e[9] * z + e[13]) * iw * 0.5 + 0.5) * h - py;
      const d = sx * sx + sy * sy;
      if (d < bd) { bd = d; best = i; }
    }
    return best < 0 ? null : [pts[3 * best], pts[3 * best + 1], pts[3 * best + 2]];
  }

  _pickables(kinds) {
    const out = [];
    this.layerObjs.forEach((lo, i) => {
      if (!this.layerVis[i]) return;
      for (const k of kinds) { const o = lo.parts[k]; if (o && o.visible) out.push(o); }
    });
    return out;
  }
  // devuelve {id, point:[x,y,z] (relativo), kind} o null
  rayHit(cx, cy, forSelect) {
    if (!this.g) return null;
    const nd = this._ndc(cx, cy);
    this.root.updateMatrixWorld(true);
    this.cam.updateMatrixWorld();
    this.ray.setFromCamera(new THREE.Vector2(nd.x, nd.y), this.cam);
    const pw = this.pixelWorld();
    this.ray.params.Line.threshold = pw * 6;
    this.ray.params.Points.threshold = pw * 8;
    const idOf = (h, kind) => {
      const lo = this.layerObjs.find((o) => o.parts[kind] === h.object);
      if (!lo) return -1;
      const L = this.g.layers[this.layerObjs.indexOf(lo)];
      if (kind === 'lines') return L.lines.e[h.index >> 1];
      if (kind === 'pts') return L.pts.e[h.index];
      if (kind === 'tris') return L.tris.e[Math.floor(h.faceIndex)];
      if (kind === 'fills') return L.fills.e[Math.floor(h.faceIndex)];
      return -1;
    };
    const toRel = (v) => { const l = this.root.worldToLocal(v.clone()); return [l.x, l.y, l.z]; };
    let best = null;
    const lh = this.ray.intersectObjects(this._pickables(['lines', 'pts']), false);
    if (lh.length) {
      const h = lh[0];
      const id = idOf(h, h.object.userData.kind);
      if (id >= 0) best = { id, point: toRel(h.point), kind: h.object.userData.kind, sx: null };
    }
    // textos por ancla
    if (forSelect) {
      this._prepProj();
      let tb = null, td = 14 * 14;
      this.layerObjs.forEach((lo, i) => {
        if (!lo.anchors || !this.layerVis[i] || !this.show.text) return;
        const a = lo.anchors;
        for (let k = 0; k < a.length; k += 4) {
          const p = this._project(a[k], a[k + 1], a[k + 2]);
          if (!p) continue;
          const d = (p[0] - nd.px) ** 2 + (p[1] - nd.py) ** 2;
          if (d < td) { td = d; tb = { id: a[k + 3], point: [a[k], a[k + 1], a[k + 2]], kind: 'text' }; }
        }
      });
      if (tb) {
        let useText = true;
        if (best) {
          const p = this._project(...best.point);
          if (p && (p[0] - nd.px) ** 2 + (p[1] - nd.py) ** 2 < td) useText = false;
        }
        if (useText) best = tb;
      }
    }
    if (best) return best;
    const mh = this.ray.intersectObjects(this._pickables(['tris', 'fills']), false);
    if (mh.length) {
      const h = mh[0];
      const id = idOf(h, h.object.userData.kind);
      return { id, point: toRel(h.point), kind: h.object.userData.kind };
    }
    return null;
  }
  // free point on the reference z plane
  planePoint(cx, cy) {
    const nd = this._ndc(cx, cy);
    this.cam.updateMatrixWorld();
    this.ray.setFromCamera(new THREE.Vector2(nd.x, nd.y), this.cam);
    const zRef = this.controls.target.z;
    const plane = new THREE.Plane(new V3(0, 0, 1), -zRef);
    const p = new V3();
    if (!this.ray.ray.intersectPlane(plane, p)) return null;
    const l = this.root.worldToLocal(p);
    return [l.x, l.y, l.z];
  }

  // ------------------------------------------------------------------ selection
  select(hit) {
    if (!hit || hit.id < 0) { this.sel = null; this.setHighlight(null); this.hooks.onSelect?.(null); return; }
    const entry = this.g.reg[hit.id];
    const ids = new Set();
    let top = entry;
    if (entry.v >= 0) {
      top = this.g.reg[entry.v];
      this.g.reg.forEach((r, i) => { if (r.v === entry.v) ids.add(i); });
      ids.add(entry.v);
    } else ids.add(hit.id);
    const layerName = entry.s.layer ?? '0';
    const rows = describeEntity(this.model, entry);
    const parent = entry.v >= 0 ? describeEntity(this.model, top) : null;
    this.sel = { id: hit.id, ids, layerName, point: hit.point };
    this.setHighlight(ids);
    this.hooks.onSelect?.({ rows, parent, layerName, kind: hit.kind, entry, top });
  }
  setHighlight(ids) {
    const lp = [], pp = [];
    if (ids && this.g) {
      const pw = this.pixelWorld() * 9;
      this.g.layers.forEach((L, li) => {
        const { lines, tris, fills, pts } = L;
        for (let i = 0; i < lines.e.length; i++) if (ids.has(lines.e[i])) for (let k = 0; k < 6; k++) lp.push(lines.p[6 * i + k]);
        for (const T of [tris, fills]) {
          for (let i = 0; i < T.e.length; i++) if (ids.has(T.e[i])) {
            const o = 9 * i, a = T.p;
            for (const [u, v] of [[0, 3], [3, 6], [6, 0]]) lp.push(a[o + u], a[o + u + 1], a[o + u + 2], a[o + v], a[o + v + 1], a[o + v + 2]);
          }
        }
        for (let i = 0; i < pts.e.length; i++) if (ids.has(pts.e[i])) pp.push(pts.p[3 * i], pts.p[3 * i + 1], pts.p[3 * i + 2]);
        const a = this.layerObjs[li]?.anchors;
        if (a) for (let k = 0; k < a.length; k += 4) if (ids.has(a[k + 3])) {
          const x = a[k], y = a[k + 1], z = a[k + 2];
          lp.push(x - pw, y, z, x + pw, y, z, x, y - pw, z, x, y + pw, z);
        }
      });
    }
    const set = (obj, arr) => {
      obj.geometry.dispose();
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(arr), 3));
      obj.geometry = geo;
    };
    set(this.hiLines, lp); set(this.hiPts, pp);
    this.requestRender();
  }
  zoomToSelection() {
    if (!this.sel || !this.g) return;
    const ids = this.sel.ids;
    const mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
    const add = (a, o) => { for (let k = 0; k < 3; k++) { const v = a[o + k]; if (v < mn[k]) mn[k] = v; if (v > mx[k]) mx[k] = v; } };
    this.g.layers.forEach((L) => {
      for (const S of [L.lines, L.tris, L.fills]) {
        const per = S === L.lines ? 6 : 9;
        for (let i = 0; i < S.e.length; i++) if (ids.has(S.e[i])) for (let k = 0; k < per; k += 3) add(S.p, per * i + k);
      }
      for (let i = 0; i < L.pts.e.length; i++) if (ids.has(L.pts.e[i])) add(L.pts.p, 3 * i);
    });
    this.layerObjs.forEach((lo) => { const a = lo.anchors; if (a) for (let k = 0; k < a.length; k += 4) if (ids.has(a[k + 3])) add(a, k); });
    if (mn[0] === Infinity) return;
    const c = new V3((mn[0] + mx[0]) / 2, (mn[1] + mx[1]) / 2, ((mn[2] + mx[2]) / 2) * this.zEx);
    const R = Math.max(0.5 * Math.hypot(mx[0] - mn[0], mx[1] - mn[1], (mx[2] - mn[2]) * this.zEx), this.radius() * 1e-4);
    const dir = this.cam.position.clone().sub(this.controls.target).normalize();
    const cam = this.cam;
    if (cam.isPerspectiveCamera) cam.position.copy(c).addScaledVector(dir, (R * 1.8) / Math.sin(rad(cam.fov / 2)));
    else { this.orthoH = 2 * R * 1.8; cam.zoom = 1; this.applyOrtho(); cam.position.copy(c).addScaledVector(dir, this.radius() * 3); }
    this.controls.target.copy(c);
    cam.lookAt(c);
    this.controls.update();
    this.updateClip();
    this.requestRender();
  }

  // ------------------------------------------------------------------ measurement
  real(p) { const o = this.g.origin; return [p[0] + o[0], p[1] + o[1], p[2] + o[2]]; }
  measureData() {
    const m = this.measure, pts = m.pts.map((p) => this.real(p));
    const segs = [];
    let L3 = 0, Lh = 0;
    for (let i = 1; i < pts.length; i++) {
      const a = pts[i - 1], b = pts[i];
      const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
      const h = Math.hypot(dx, dy), d3 = Math.hypot(dx, dy, dz);
      let az = (Math.atan2(dx, dy) * 180) / Math.PI; if (az < 0) az += 360;
      segs.push({ d3, h, dz, slope: h > 1e-12 ? (Math.abs(dz) / h) * 100 : null, az });
      L3 += d3; Lh += h;
    }
    let area = null, perim = null;
    if (pts.length >= 3) {
      let a = 0, p = 0;
      for (let i = 0; i < pts.length; i++) { const u = pts[i], v = pts[(i + 1) % pts.length]; a += u[0] * v[1] - v[0] * u[1]; p += Math.hypot(v[0] - u[0], v[1] - u[1]); }
      area = Math.abs(a) / 2; perim = p;
    }
    return { pts, segs, L3, Lh, area, perim };
  }
  addMeasurePoint(p) { this.measure.pts.push(p); this.refreshMeasure(); }
  undoMeasurePoint() { this.measure.pts.pop(); this.refreshMeasure(); }
  clearMeasure() { this.measure = { pts: [], cursor: null, closed: false }; this.refreshMeasure(); }
  refreshMeasure() {
    const pts = this.measure.pts.slice();
    const arr = [];
    for (const p of pts) arr.push(...p);
    const loopArr = this.tool === 'area' && pts.length >= 3 ? [...arr, ...pts[0]] : arr;
    const mk = (a) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(a), 3)); return g; };
    this.measLine.geometry.dispose(); this.measLine.geometry = mk(loopArr);
    this.measPts.geometry.dispose(); this.measPts.geometry = mk(arr);
    // etiquetas
    this.clearLabels();
    if (this.g && pts.length >= 2) {
      const md = this.measureData();
      const u = this.hooks.unit?.() || 'u';
      for (let i = 0; i < md.segs.length; i++) {
        const a = pts[i], b = pts[i + 1];
        this.addLabel(`${fmtN(md.segs[i].d3)} ${u}`, [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]);
      }
    }
    this.hooks.onMeasure?.(this.g && pts.length ? this.measureData() : null);
    this.requestRender();
  }
  addLabel(text, p) {
    const el = document.createElement('div');
    el.className = 'mlabel';
    el.textContent = text;
    this.els.labels.appendChild(el);
    this.labels.push({ el, p });
  }
  clearLabels() { for (const l of this.labels) l.el.remove(); this.labels = []; }
  updateLabels() {
    if (!this.labels.length) return;
    this._prepProj();
    for (const l of this.labels) {
      const s = this._project(...l.p);
      if (!s || s[0] < -50 || s[0] > this.size.w + 50 || s[1] < -50 || s[1] > this.size.h + 50) { l.el.style.display = 'none'; continue; }
      l.el.style.display = 'block';
      l.el.style.transform = `translate(${s[0]}px, ${s[1]}px) translate(-50%, -140%)`;
    }
  }

  // ------------------------------------------------------------------ eventos
  setTool(t) {
    this.tool = t;
    this.els.snapmark.style.display = 'none';
    this.renderer.domElement.style.cursor = t === 'select' ? 'default' : 'crosshair';
    if (t === 'select' || t === 'coord') this.clearMeasure(); else this.refreshMeasure();
  }
  _bindEvents() {
    const cv = this.renderer.domElement;
    let down = null;
    cv.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, t: performance.now(), b: e.button }; });
    cv.addEventListener('pointerup', (e) => {
      if (!down || e.button !== 0) { down = null; return; }
      const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
      const dt = performance.now() - down.t;
      down = null;
      if (moved > 5 || dt > 600) return;
      this._click(e.clientX, e.clientY);
    });
    cv.addEventListener('pointermove', (e) => {
      if (e.buttons) { this.els.snapmark.style.display = 'none'; return; }
      this._hover = { x: e.clientX, y: e.clientY };
      if (!this._hoverRaf) this._hoverRaf = requestAnimationFrame(() => { this._hoverRaf = 0; this._onHover(); });
    });
    cv.addEventListener('pointerleave', () => { this.els.snapmark.style.display = 'none'; });
    cv.addEventListener('dblclick', (e) => { if (this.tool === 'dist' || this.tool === 'area') { this.undoMeasurePoint(); this.hooks.onFinishMeasure?.(); } });
  }
  _resolvePoint(cx, cy) {
    const nd = this._ndc(cx, cy);
    const s = this.nearestSnap(nd.px, nd.py);
    if (s) return { p: s, snapped: true };
    const h = this.rayHit(cx, cy, false);
    if (h) return { p: h.point, snapped: false };
    const pp = this.planePoint(cx, cy);
    return pp ? { p: pp, snapped: false } : null;
  }
  _onHover() {
    if (!this._hover || !this.g) return;
    const { x, y } = this._hover;
    if (this.tool === 'select') {
      const h = this.rayHit(x, y, false);
      if (h) { const r = this.real(h.point); this.hooks.onCursor?.({ x: r[0], y: r[1], z: r[2], snapped: false }); }
      return;
    }
    const r = this._resolvePoint(x, y);
    const mark = this.els.snapmark;
    if (!r) { mark.style.display = 'none'; return; }
    this._prepProj();
    const sp = this._project(...r.p);
    if (sp) {
      mark.style.display = 'block';
      mark.style.transform = `translate(${sp[0]}px, ${sp[1]}px) translate(-50%, -50%)`;
      mark.classList.toggle('free', !r.snapped);
    }
    const rr = this.real(r.p);
    this.hooks.onCursor?.({ x: rr[0], y: rr[1], z: rr[2], snapped: r.snapped });
  }
  _click(cx, cy) {
    if (!this.g) return;
    if (this.tool === 'select') { this.select(this.rayHit(cx, cy, true)); return; }
    const r = this._resolvePoint(cx, cy);
    if (!r) return;
    if (this.tool === 'coord') {
      this.measure.pts = [r.p];
      this.refreshMeasure();
      return;
    }
    this.addMeasurePoint(r.p);
  }
}

export const fmtN = (v, d = 3) => (Number.isFinite(v) ? v.toLocaleString('en-US', { maximumFractionDigits: d, minimumFractionDigits: 0 }) : '—');
