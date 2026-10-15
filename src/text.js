// CAD text as quads with a glyph atlas (one mesh per layer).
import * as THREE from 'three';

const CELL_H = 64;      // cell height in the atlas (px)
const FONT_PX = 44;     // font size in the atlas
const BASE_Y = 48;      // baseline inside the cell (from the top)
const PAD = 4;
const CAP = 0.716;      // cap height / em (Arial)
const FONT = `${FONT_PX}px "Segoe UI", "Helvetica Neue", Arial, Helvetica, sans-serif`;

export function makeAtlas(chars) {
  const cv = document.createElement('canvas');
  const cx = cv.getContext('2d', { willReadFrequently: false });
  cx.font = FONT;
  const list = [...new Set(chars)].filter((c) => c !== '\n' && c !== '\r' && c !== '\t');
  if (!list.includes(' ')) list.push(' ');
  if (!list.includes('?')) list.push('?');
  const W = 2048;
  const glyphs = new Map();
  let x = 0, y = 0;
  const widths = list.map((c) => cx.measureText(c).width);
  list.forEach((c, i) => {
    const cw = Math.ceil(widths[i]) + PAD * 2;
    if (x + cw > W) { x = 0; y += CELL_H; }
    glyphs.set(c, { x, y, cw, adv: widths[i] });
    x += cw;
  });
  const H = Math.min(8192, Math.max(64, 1 << Math.ceil(Math.log2(y + CELL_H))));
  cv.width = W; cv.height = H;
  const c2 = cv.getContext('2d');
  c2.font = FONT;
  c2.fillStyle = '#fff';
  c2.textBaseline = 'alphabetic';
  for (const [c, g] of glyphs) c2.fillText(c, g.x + PAD, g.y + BASE_Y);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.NoColorSpace;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return { tex, glyphs, W, H };
}

function wrapLines(str, widthOf, maxW) {
  const out = [];
  for (const para of str.split('\n')) {
    if (!(maxW > 0)) { out.push(para); continue; }
    const words = para.split(' ');
    let cur = '';
    for (const w of words) {
      const trial = cur ? cur + ' ' + w : w;
      if (cur && widthOf(trial) > maxW) { out.push(cur); cur = w; } else cur = trial;
    }
    out.push(cur);
  }
  return out;
}

// Returns geometry (pos, uv, col, index) for a list of text records.
export function buildTextGeometry(records, atlas, origin, maxQuads = 700000) {
  const { glyphs, W, H } = atlas;
  const q = glyphs.get('?');
  const g = (c) => glyphs.get(c) || q;
  let nQuads = 0;
  for (const r of records) for (let i = 0; i < r.str.length; i++) if (r.str[i] !== '\n') nQuads++;
  const keep = Math.min(nQuads, maxQuads);
  const pos = new Float32Array(keep * 12);
  const uv = new Float32Array(keep * 8);
  const col = new Uint8Array(keep * 12);
  const idx = new Uint32Array(keep * 6);
  const anchors = [];
  let qi = 0;
  let omitted = 0;

  for (const r of records) {
    const H0 = r.h;
    const s = (H0 / CAP) / FONT_PX; // world units per atlas px
    const wf = r.wf || 1;
    const adv = (c) => g(c).adv * s * wf;
    const widthOf = (str) => { let w = 0; for (const c of str) w += adv(c); return w; };
    const T = r.T;
    const shear = r.obl ? Math.tan(r.obl) : 0;
    let lines, firstBase, pitch, boxW, xOff;
    if (r.kind === 'TEXT') {
      lines = [r.str.replace(/\n/g, ' ')];
      const w = widthOf(lines[0]);
      const hal = r.hal || 0;
      const x0 = hal === 1 || hal === 4 ? -w / 2 : hal === 2 ? -w : 0;
      const val = r.val || 0;
      let by = 0;
      if (r.hal === 4) by = -0.5 * H0;
      else if (val === 1) by = 0.2 * H0;
      else if (val === 2) by = -0.5 * H0;
      else if (val === 3) by = -H0;
      xOff = [x0]; firstBase = by; pitch = 0; boxW = w;
    } else {
      lines = wrapLines(r.str, widthOf, r.w);
      pitch = H0 * 1.667;
      const widths = lines.map(widthOf);
      boxW = r.w > 0 ? r.w : Math.max(...widths, 0);
      const att = r.att || 1;
      const col3 = (att - 1) % 3; // 0 izq, 1 centro, 2 der
      const row3 = Math.floor((att - 1) / 3); // 0 arriba, 1 medio, 2 abajo
      const total = (lines.length - 1) * pitch + H0;
      firstBase = row3 === 0 ? -H0 : row3 === 1 ? total / 2 - H0 : (lines.length - 1) * pitch;
      xOff = widths.map((w) => {
        const boxLeft = -boxW * (col3 / 2);
        return boxLeft + (boxW - w) * (col3 / 2);
      });
    }
    const cr = (r.rgb >> 16) & 255, cg = (r.rgb >> 8) & 255, cb = r.rgb & 255;
    anchors.push(T[12] - origin[0], T[13] - origin[1], T[14] - origin[2], r.id);
    for (let li = 0; li < lines.length; li++) {
      let px = xOff[Math.min(li, xOff.length - 1)];
      const by = firstBase - li * pitch;
      for (const ch of lines[li]) {
        const gl = g(ch);
        if (ch !== ' ' && qi >= keep) { omitted++; continue; }
        if (ch === ' ') { px += gl.adv * s * wf; continue; }
        const x0 = px - PAD * s * wf, x1 = px + (gl.cw - PAD) * s * wf;
        const y1 = by + BASE_Y * s, y0 = by - (CELL_H - BASE_Y) * s;
        const corners = [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
        const u0 = gl.x / W, u1 = (gl.x + gl.cw) / W;
        const v1 = 1 - gl.y / H, v0 = 1 - (gl.y + CELL_H) / H;
        const uvs = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]];
        for (let k = 0; k < 4; k++) {
          const lx = corners[k][0] + shear * (corners[k][1] - by), ly = corners[k][1];
          const o = (qi * 4 + k) * 3;
          pos[o] = T[0] * lx + T[4] * ly + T[12] - origin[0];
          pos[o + 1] = T[1] * lx + T[5] * ly + T[13] - origin[1];
          pos[o + 2] = T[2] * lx + T[6] * ly + T[14] - origin[2];
          col[o] = cr; col[o + 1] = cg; col[o + 2] = cb;
          uv[(qi * 4 + k) * 2] = uvs[k][0]; uv[(qi * 4 + k) * 2 + 1] = uvs[k][1];
        }
        const b = qi * 4, ii = qi * 6;
        idx[ii] = b; idx[ii + 1] = b + 1; idx[ii + 2] = b + 2; idx[ii + 3] = b; idx[ii + 4] = b + 2; idx[ii + 5] = b + 3;
        qi++;
        px += gl.adv * s * wf;
      }
    }
  }
  return {
    pos: pos.subarray(0, qi * 12), uv: uv.subarray(0, qi * 8), col: col.subarray(0, qi * 12), idx: idx.subarray(0, qi * 6),
    anchors: new Float32Array(anchors), omitted,
  };
}
