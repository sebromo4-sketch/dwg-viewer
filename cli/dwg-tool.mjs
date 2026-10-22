#!/usr/bin/env node
// dwg-tool: inspect a DWG/DXF, export points/texts/plan (SVG) and build a standalone 3D viewer HTML.
// Works offline. DWG decoding uses LibreDWG compiled to WebAssembly.
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { createModule, LibreDwg, Dwg_File_Type } from '@mlightcad/libredwg-web';
import { DxfParser } from '@mlightcad/dxf-json';
import { fromDwgDatabase, fromDxfJson } from '../src/model.js';
import { buildGeometry } from '../src/geom.js';
import { buildDatos, pointsCsv } from '../src/datos.js';
import { buildSvg, regionFromRect } from '../src/svg.js';
import { detectViews } from '../src/views.js';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const VERSIONS = {
  AC1006: 'R10', AC1009: 'R11/R12', AC1012: 'R13', AC1014: 'R14', AC1015: 'AutoCAD 2000', AC1018: 'AutoCAD 2004',
  AC1021: 'AutoCAD 2007', AC1024: 'AutoCAD 2010', AC1027: 'AutoCAD 2013', AC1032: 'AutoCAD 2018+',
};

function findAsset(names) {
  const dirs = [HERE, path.join(HERE, '..'), path.join(HERE, '..', 'assets'), path.join(HERE, '..', 'dist'), path.join(HERE, '..', 'skills', 'dwg-viewer', 'assets'), path.join(HERE, '..', 'skills', 'dwg-viewer', 'scripts')];
  for (const d of dirs) for (const n of names) { const p = path.join(d, n); if (fs.existsSync(p)) return p; }
  return null;
}

async function loadWasm() {
  const gz = findAsset(['libredwg-web.wasm.gz']);
  if (gz) return new Uint8Array(zlib.gunzipSync(fs.readFileSync(gz)));
  try {
    const p = path.join(HERE, '..', 'node_modules', '@mlightcad', 'libredwg-web', 'wasm', 'libredwg-web.wasm');
    return new Uint8Array(fs.readFileSync(p));
  } catch { throw new Error('libredwg-web.wasm(.gz) not found'); }
}

export async function readFile(file) {
  const buf = fs.readFileSync(file);
  const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  const head = buf.subarray(0, 6).toString('latin1');
  const ext = path.extname(file).toLowerCase();
  const warnings = [];
  if (/^AC\d{4}$/.test(head)) {
    const wasmBinary = await loadWasm();
    const lib = LibreDwg.createByWasmInstance(await createModule({ wasmBinary }));
    const ow = console.warn; console.warn = (...a) => warnings.push(a.join(' '));
    let db;
    try {
      const ptr = lib.dwg_read_data(ab, Dwg_File_Type.DWG);
      if (!ptr) throw new Error('LibreDWG could not open the file (damaged or unsupported version).');
      db = lib.convert(ptr);
      try { lib.dwg_free(ptr); } catch { /* ignore */ }
    } finally { console.warn = ow; }
    return { model: fromDwgDatabase(db), meta: { format: 'DWG', version: `${VERSIONS[head] || '?'} (${head})`, warnings, bytes: buf.length, buf } };
  }
  if (ext === '.dwg') throw new Error('Not a valid DWG (missing AC10xx signature). If it is a DXF, rename it to .dxf.');
  let text = buf.toString('utf8');
  if (text.includes('�')) text = buf.toString('latin1');
  if (/^AutoCAD Binary DXF/.test(text)) throw new Error('Binary DXF is not supported; save it as ASCII DXF or use the DWG.');
  const d = new DxfParser().parseSync(text);
  const ver = d.header?.$ACADVER || '';
  return { model: fromDxfJson(d), meta: { format: 'DXF', version: VERSIONS[ver] ? `${VERSIONS[ver]} (${ver})` : ver, warnings, bytes: buf.length, buf } };
}

const UNITS = { 0: 'unitless', 1: 'in', 2: 'ft', 3: 'mi', 4: 'mm', 5: 'cm', 6: 'm', 7: 'km', 10: 'yd', 14: 'dm' };
function unitsOf(model, g) {
  const o = g.origin, u = model.insUnits;
  const utm = Math.abs(o[0]) > 1e5 && Math.abs(o[1]) > 1e6;
  const declared = UNITS[u] || 'unitless';
  if (utm && [0, 1, 4, 5, undefined].includes(u)) return { declared, effective: 'm', note: 'Coordinates look like UTM; assuming meters' };
  return { declared, effective: declared === 'unitless' ? 'u' : declared, note: '' };
}

function typeHistogram(model) {
  const h = {};
  for (const e of model.entities) h[e.type] = (h[e.type] || 0) + 1;
  return Object.fromEntries(Object.entries(h).sort((a, b) => b[1] - a[1]));
}

function summarize(file, r, g, d) {
  const o = g.origin, b = g.bounds;
  const u = unitsOf(r.model, g);
  const real = (v) => [v[0] + o[0], v[1] + o[1], v[2] + o[2]];
  const texts = [];
  for (const L of g.layers) {
    const seen = new Set();
    for (const t of L.texts) {
      const s = String(t.str).replace(/\s+/g, ' ').trim();
      if (!s || seen.has(s)) continue;
      seen.add(s);
      texts.push({ layer: L.name, text: s.slice(0, 120), x: +t.T[12].toFixed(3), y: +t.T[13].toFixed(3) });
    }
  }
  return {
    file: path.basename(file), format: r.meta.format, version: r.meta.version, bytes: r.meta.bytes,
    units: u,
    stats: g.stats,
    entityTypes: typeHistogram(r.model),
    blocks: [...r.model.blocks.keys()].filter((n) => !/^\*[DUdu]/.test(n)).slice(0, 60),
    extents: { robustMin: real(b.rmin).map((v) => +v.toFixed(3)), robustMax: real(b.rmax).map((v) => +v.toFixed(3)), fullMin: real(b.min).map((v) => +v.toFixed(3)), fullMax: real(b.max).map((v) => +v.toFixed(3)) },
    elevation: { flat: d.flat, objectsWithNonZeroZ: d.withZ.slice(0, 50), noElevationMarkers: d.noZ },
    layers: g.layers.map((L) => { const z = d.layers.find((x) => x.name === L.name); return { name: L.name, objects: L.count, hidden: L.hidden, color: '#' + L.color.toString(16).padStart(6, '0'), zMin: z ? +z.zmin.toFixed(3) : null, zMax: z ? +z.zmax.toFixed(3) : null }; }),
    points: d.points.length,
    blockAttributes: d.inserts.map((i) => ({ name: i.name, x: +i.x.toFixed(3), y: +i.y.toFixed(3), z: +i.z.toFixed(3), attributes: i.attrs })),
    texts: texts.slice(0, 400),
    warnings: r.meta.warnings.slice(0, 5),
  };
}

function markdown(s) {
  const L = [];
  L.push(`# ${s.file}`);
  L.push(`${s.format} ${s.version} · ${(s.bytes / 1048576).toFixed(2)} MB · units: ${s.units.declared}${s.units.note ? ' → ' + s.units.effective + ' (' + s.units.note + ')' : ''}`);
  L.push(`Objects drawn: ${s.stats.entities} · segments ${s.stats.segments} · triangles ${s.stats.triangles} · texts ${s.stats.texts} · points ${s.points}`);
  L.push(`Entity types: ${Object.entries(s.entityTypes).map(([k, v]) => `${k} ${v}`).join(', ')}`);
  const e = s.extents;
  L.push(`\n## Extents (real coordinates)\nMain area: X ${e.robustMin[0]} … ${e.robustMax[0]} · Y ${e.robustMin[1]} … ${e.robustMax[1]} · Z ${e.robustMin[2]} … ${e.robustMax[2]}`);
  L.push(`\n## Elevation\n${s.elevation.flat ? 'FLAT DRAWING: every object has Z = 0 (or no elevation).' : 'Objects with Z ≠ 0:'}`);
  for (const o of s.elevation.objectsWithNonZeroZ) L.push(`- layer "${o.layer}" ${o.pt ? 'point' : 'line'} Z=${o.z.toFixed(3)}${Math.abs(o.z1 - o.z) > 0.005 ? '→' + o.z1.toFixed(3) : ''} (×${o.n})`);
  if (s.elevation.noElevationMarkers) L.push(`(${s.elevation.noElevationMarkers} points carried Z=-999999, a "no elevation" marker; treated as 0)`);
  L.push(`\n## Layers\n| layer | objects | Z min | Z max | hidden |\n|---|---|---|---|---|`);
  for (const l of s.layers) L.push(`| ${l.name} | ${l.objects} | ${l.zMin} | ${l.zMax} | ${l.hidden ? 'yes' : ''} |`);
  if (s.blockAttributes.length) { L.push('\n## Blocks with attributes'); for (const b of s.blockAttributes.slice(0, 40)) L.push(`- ${b.name} @ (${b.x}, ${b.y}, ${b.z}) ${JSON.stringify(b.attributes)}`); }
  const un = Object.entries(s.stats.unsupported || {});
  L.push(`\n## Not drawn\n${un.length ? un.map(([k, v]) => `${k} ×${v}`).join(', ') : 'Nothing: every object type was drawn.'}`);
  if (s.warnings.length) L.push(`\nReader warnings: ${s.warnings.join(' | ')}`);
  return L.join('\n');
}

// ---------------------------------------------------------------- commands
const HELP = `dwg-tool — read DWG/DXF offline

  node dwg-tool.mjs info    <file> [--json]                 summary: layers, extents, elevations, objects not drawn
  node dwg-tool.mjs points  <file> [--layer NAME] [--out points.csv]
  node dwg-tool.mjs texts   <file> [--layer NAME] [--out texts.csv]
  node dwg-tool.mjs plan    <file> --out plan.svg [--style bw|color|cad] [--view N|sheet] [--no-straighten] [--width 2400]
  node dwg-tool.mjs views   <file>                          list the blocks of a sheet (plan, tables, details) with their tilt
  node dwg-tool.mjs viewer  <file> --out viewer.html [--lang en|es]   standalone 3D viewer with the file embedded
  node dwg-tool.mjs viewer  --out viewer.html                          empty viewer (drag & drop a file)
`;

function args(argv) {
  const a = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const t = argv[i];
    if (t.startsWith('--')) { const k = t.slice(2); const nx = argv[i + 1]; if (nx === undefined || nx.startsWith('--')) a[k] = true; else { a[k] = nx; i++; } } else a._.push(t);
  }
  return a;
}
const csvq = (s) => '"' + String(s).replace(/"/g, '""') + '"';
const write = (out, text) => { if (out && out !== true) { fs.writeFileSync(out, text); console.error('wrote ' + out); } else process.stdout.write(text + '\n'); };

async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  const a = args(rest);
  if (!cmd || cmd === 'help' || cmd === '--help') { console.log(HELP); return; }
  if (cmd === 'viewer' && !a._[0]) return viewerCmd(null, a);
  const file = a._[0];
  if (!file || !fs.existsSync(file)) throw new Error(`File not found: ${file || '(none)'}\n${HELP}`);
  const r = await readFile(file);
  if (cmd === 'viewer') return viewerCmd(r, a, file);
  const g = buildGeometry(r.model, { light: !!a.light });
  const d = buildDatos(g, r.model);
  if (cmd === 'info') { const s = summarize(file, r, g, d); write(a.out, a.json ? JSON.stringify(s, null, 2) : markdown(s)); }
  else if (cmd === 'points') {
    const rows = d.points.filter((p) => !a.layer || p.layer === a.layer);
    write(a.out, pointsCsv(rows));
  } else if (cmd === 'texts') {
    const rows = [];
    for (const L of g.layers) if (!a.layer || L.name === a.layer) for (const t of L.texts) rows.push([csvq(L.name), csvq(String(t.str).replace(/\s+/g, ' ')), (t.T[12]).toFixed(4), (t.T[13]).toFixed(4), (t.T[14]).toFixed(4)].join(','));
    write(a.out, ['layer,text,east,north,elevation', ...rows].join('\r\n'));
  } else if (cmd === 'views') {
    const dv = detectViews(r.model, g);
    const f = (v) => Math.round((v + 0) * 10) / 10;
    const lines = [`# ${path.basename(file)}: ${dv.views.length} views detected`, `Sheet: ${dv.sheet.found ? 'border found' : 'no border; using extents'} E ${f(dv.sheet.rect[0] + g.origin[0])}…${f(dv.sheet.rect[2] + g.origin[0])} N ${f(dv.sheet.rect[1] + g.origin[1])}…${f(dv.sheet.rect[3] + g.origin[1])}`, ''];
    for (const v of dv.views) lines.push(`${v.id}. [${v.kind}] ${v.name} — ${f(v.rect[2] - v.rect[0])} × ${f(v.rect[3] - v.rect[1])} m, tilt ${v.angle}°`);
    write(a.out, lines.join('\n'));
  } else if (cmd === 'plan') {
    if (!a.out) throw new Error('plan needs --out plan.svg');
    let region;
    if (a.view !== undefined) {
      const dv = detectViews(r.model, g);
      const v = a.view === 'sheet' ? { rect: dv.sheet.rect, angle: 0 } : dv.views[Number(a.view)];
      if (!v) throw new Error(`No view "${a.view}". Run the views command to list them.`);
      region = regionFromRect(v.rect, a.straighten === false || a['no-straighten'] ? 0 : v.angle);
    }
    write(a.out, buildSvg(g, { style: a.style || (a.light ? 'color' : 'bw'), region, width: Number(a.width) || 2400, unit: unitsOf(r.model, g).effective }));
  } else throw new Error('Unknown command: ' + cmd + '\n' + HELP);
}

function viewerCmd(r, a, file) {
  if (!a.out) throw new Error('viewer needs --out viewer.html');
  const lang = a.lang === 'es' ? 'es' : 'en';
  const tpl = findAsset([lang === 'es' ? 'viewer-template.es.html' : 'viewer-template.html', lang === 'es' ? 'dwg-viewer-es.html' : 'dwg-viewer.html']);
  if (!tpl) throw new Error('Viewer template not found (run `npm run build` or use the packaged skill).');
  let html = fs.readFileSync(tpl, 'utf8');
  const re = /<script id="embed-b64" type="application\/octet-stream" data-name="[^"]*">[^<]*<\/script>/;
  if (!re.test(html)) throw new Error('Viewer template has no embed slot.');
  const name = file ? path.basename(file) : '';
  const b64 = r ? zlib.gzipSync(r.meta.buf, { level: 9 }).toString('base64') : '';
  html = html.replace(re, () => `<script id="embed-b64" type="application/octet-stream" data-name="${name.replace(/"/g, '')}">${b64}</script>`);
  fs.writeFileSync(a.out, html);
  console.error(`wrote ${a.out} (${(html.length / 1048576).toFixed(1)} MB)${name ? ' with ' + name + ' embedded' : ''}`);
}

main().catch((e) => { console.error('Error: ' + (e.message || e)); process.exit(1); });
