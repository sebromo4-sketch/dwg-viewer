import { LibreDwg, Dwg_File_Type, createModule } from '@mlightcad/libredwg-web';
import { DxfParser } from '@mlightcad/dxf-json';
import { fromDwgDatabase, fromDxfJson } from './model.js';
import { buildGeometry } from './geom.js';
import { Viewer, fmtN } from './viewer.js';
import { buildSvg } from './svg.js';
import { buildDatos, pointsCsv } from './datos.js';

const $ = (id) => document.getElementById(id);
const VERSIONS = {
  AC1006: 'R10', AC1009: 'R11/R12', AC1012: 'R13', AC1014: 'R14', AC1015: 'AutoCAD 2000', AC1018: 'AutoCAD 2004',
  AC1021: 'AutoCAD 2007', AC1024: 'AutoCAD 2010', AC1027: 'AutoCAD 2013', AC1032: 'AutoCAD 2018 or later',
};
const UNITS = { 0: 'u', 1: 'in', 2: 'ft', 3: 'mi', 4: 'mm', 5: 'cm', 6: 'm', 7: 'km', 8: 'µin', 9: 'mil', 10: 'yd', 14: 'dm', 15: 'dam', 16: 'hm' };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const state = { file: null, model: null, g: null, meta: null, rebuilding: false };
let libre = null;

// ------------------------------------------------------------------ viewer
const viewer = new Viewer(
  { view: $('view'), labels: $('labels'), snapmark: $('snapmark') },
  {
    unit: () => unitLabel(),
    onSelect: (s) => renderSelection(s),
    onCursor: (c) => { $('st-coord').innerHTML = `X <b>${fmtN(c.x, 3)}</b> &nbsp; Y <b>${fmtN(c.y, 3)}</b> &nbsp; Z <b>${fmtN(c.z, 3)}</b> ${c.snapped ? '<span style="color:#ffe14d">● snap</span>' : ''}`; },
    onMeasure: (d) => renderMeasure(d),
    onFinishMeasure: () => { setHint('Measurement finished. Click to start another or switch tool.'); },
  }
);
window.__viewer = viewer; // handy for debugging from the console

const unitLabel = () => {
  const o = state.g?.origin;
  const utm = o && Math.abs(o[0]) > 1e5 && Math.abs(o[1]) > 1e6; // UTM-like coordinates: almost certainly meters
  const u = state.model?.insUnits;
  if (utm && (u === 0 || u === 4 || u === 5 || u === 1 || u === undefined)) return 'm';
  return UNITS[u] || 'u';
};

// ------------------------------------------------------------------ UI helpers
function showLoader(msg, sub = '') { $('loader').style.display = 'flex'; $('loadmsg').textContent = msg; $('loadsub').textContent = sub; }
function hideLoader() { $('loader').style.display = 'none'; }
const paint = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 20)));
function toast(html, kind = 'bad', ms = 0) {
  const t = $('toast');
  t.innerHTML = `<div class="t ${kind}"><button aria-label="Close">×</button>${html}</div>`;
  t.style.display = 'block';
  t.querySelector('button').onclick = () => (t.style.display = 'none');
  if (ms) setTimeout(() => (t.style.display = 'none'), ms);
}
function setHint(t) { $('hint').textContent = t || ''; $('hint').style.display = t ? 'block' : 'none'; }
function openPane(id) {
  document.querySelectorAll('#tabs button').forEach((b) => b.classList.toggle('on', b.dataset.pane === id));
  document.querySelectorAll('.pane').forEach((p) => p.classList.toggle('on', p.id === id));
  if (window.innerWidth <= 900) $('panel').classList.add('open');
}

// ------------------------------------------------------------------ DWG library loading
async function getLibre() {
  if (libre) return libre;
  if (typeof DecompressionStream === 'undefined') throw new Error('Your browser is too old to open DWG (DecompressionStream is missing). Update Chrome, Edge, Firefox or Safari.');
  const b64 = $('wasm-b64').textContent.trim();
  const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
  const stream = new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
  const wasmBinary = new Uint8Array(await new Response(stream).arrayBuffer());
  const mod = await createModule({ wasmBinary });
  libre = LibreDwg.createByWasmInstance(mod);
  return libre;
}

function detectVersion(buf) {
  const head = new TextDecoder('latin1').decode(new Uint8Array(buf, 0, Math.min(6, buf.byteLength)));
  return { code: head, name: VERSIONS[head] || null };
}

async function readDwg(buf, name) {
  const v = detectVersion(buf);
  if (!/^AC\d{4}$/.test(v.code)) throw new Error('The file does not look like a valid DWG (no AC10xx signature). If it is a DXF, open it with a .dxf extension.');
  showLoader('Preparing DWG reader…', 'First time: unpacking the engine (a few seconds)');
  await paint();
  const lib = await getLibre();
  showLoader('Reading DWG…', `${name} · ${(buf.byteLength / 1048576).toFixed(1)} MB`);
  await paint();
  const warns = [];
  const ow = console.warn;
  console.warn = (...a) => { warns.push(a.join(' ')); };
  let db;
  try {
    const ptr = lib.dwg_read_data(buf, Dwg_File_Type.DWG);
    if (!ptr) throw new Error('LibreDWG could not open the file (it may be damaged or from a version that is not supported yet).');
    showLoader('Converting objects…', 'Entities, blocks and layers');
    await paint();
    db = lib.convert(ptr);
    try { lib.dwg_free(ptr); } catch { /* nada */ }
  } finally { console.warn = ow; }
  const model = fromDwgDatabase(db);
  return { model, meta: { format: 'DWG', version: v.name ? `${v.name} (${v.code})` : v.code, warnings: warns } };
}

async function readDxf(buf) {
  showLoader('Reading DXF…');
  await paint();
  let text = new TextDecoder('utf-8').decode(buf);
  if (text.includes('�')) text = new TextDecoder('windows-1252').decode(buf);
  if (/^AutoCAD Binary DXF/.test(text)) throw new Error('This is a binary DXF; save it as ASCII DXF or use the DWG.');
  const d = new DxfParser().parseSync(text);
  const model = fromDxfJson(d);
  const ver = d.header?.$ACADVER || '';
  return { model, meta: { format: 'DXF', version: VERSIONS[ver] ? `${VERSIONS[ver]} (${ver})` : ver, warnings: [] } };
}

// ------------------------------------------------------------------ pipeline
async function openBuffer(buf, name, forceExt) {
  const ext = (forceExt || name.split('.').pop() || '').toLowerCase();
  try {
    showLoader('Opening…', name);
    await paint();
    let r;
    if (ext === 'dwg') r = await readDwg(buf, name);
    else if (ext === 'dxf') r = await readDxf(buf);
    else throw new Error('Unsupported format: .' + ext + '. Use .dwg or .dxf files.');
    state.file = { name, buf, ext };
    state.model = r.model;
    state.meta = r.meta;
    await buildAndShow();
  } catch (err) {
    console.error(err);
    hideLoader();
    const msg = esc(err?.message || err);
    const extra = ext === 'dwg' ? '<br><br><b>What to do:</b> in AutoCAD use <i>SAVE AS → DXF (2013 or 2018)</i> and open the DXF here; or convert it with the ODA File Converter (free). DXF keeps layers, blocks, 3D and colors.' : '';
    toast(`<b>The file could not be opened.</b><br>${msg}${extra}`, 'bad');
  }
}

async function buildAndShow() {
  const opts = { light: $('o-bg').value === 'light', arcStepDeg: Number($('o-q').value) };
  showLoader('Building 3D geometry…', 'Layers, blocks, polylines, meshes and text');
  await paint();
  const t0 = performance.now();
  const g = buildGeometry(state.model, opts);
  state.g = g;
  showLoader('Drawing…', `${g.stats.segments.toLocaleString('en-US')} segments · ${g.stats.triangles.toLocaleString('en-US')} triangles`);
  await paint();
  const res = viewer.setGeometry(g, state.model);
  state.buildMs = Math.round(performance.now() - t0);
  state.textOmitted = res.textOmitted;
  $('drop').style.display = 'none';
  hideLoader();
  renderLayers();
  renderFileCard();
  renderDatos();
  renderSelection(null);
  $('st-file').innerHTML = `<b>${esc(state.file.name)}</b>`;
  $('st-count').textContent = `${g.layers.length} layers · ${g.stats.entities.toLocaleString('en-US')} objects`;
  $('st-coord').textContent = 'Move the cursor over the model';
  setHint('Left click: orbit · right click: pan · wheel: zoom. Use Select to see properties.');
  setTimeout(() => setHint(''), 9000);
  const warn = [];
  if (state.meta.warnings?.length && g.stats.entities === 0) warn.push('LibreDWG read the file with errors and no drawable object was obtained.');
  if (g.stats.truncated) warn.push('The drawing is very heavy: geometry was truncated to avoid crashing the device. Hide layers or use a lighter DXF.');
  if (warn.length) toast(warn.join('<br>'), 'info', 12000);
}

// ------------------------------------------------------------------ data (elevations, points, attributes)
function renderDatos() {
  const g = state.g, el = $('data-card');
  if (!g) return;
  const d = buildDatos(g, state.model);
  state.datos = d;
  const u = unitLabel();
  const f = (v, n = 3) => fmtN(v, n);
  let h = '';
  if (d.flat) h += `<div class="card warnc"><b>This drawing is flat:</b> every object has elevation Z = 0 in the file, or carries no elevation. The viewer does not invent altitudes; if spot heights exist, they are written only as text or live in another file (for example a terrain model).</div>`;
  else h += `<div class="card"><b>Elevations in the file:</b> only a few objects have a non-zero Z (from ${f(d.withZ[0].z, 2)} to ${f(d.withZ[d.withZ.length - 1].z, 2)} ${u}); everything else is at Z = 0.</div>`;
  if (d.noZ) h += `<p class="muted" style="font-size:12px">${d.noZ} points had Z = −999999 (a "no elevation" marker); they are shown at Z = 0.</p>`;
  if (d.withZ.length) {
    h += `<h3>Objects with non-zero elevation</h3><div class="scrollbox"><table class="dt"><tr><th>Layer</th><th>Type</th><th>Z</th><th>Obj.</th></tr>${d.withZ.slice(0, 200).map((o, i) => `<tr class="go" data-z="${i}"><td>${esc(o.layer)}</td><td>${o.pt ? 'point' : 'line'}</td><td>${f(o.z, 3)}${Math.abs(o.z1 - o.z) > 0.005 ? ' → ' + f(o.z1, 3) : ''}</td><td>${o.n}</td></tr>`).join('')}</table></div>`;
  }
  h += `<h3>Elevation by layer</h3><div class="scrollbox"><table class="dt"><tr><th>Layer</th><th>Z min</th><th>Z max</th><th>With Z≠0</th></tr>${d.layers.map((L) => `<tr><td>${esc(L.name)}</td><td>${f(L.zmin, 2)}</td><td>${f(L.zmax, 2)}</td><td>${L.nonZero ? L.nonZero.toLocaleString('en-US') : '—'}</td></tr>`).join('')}</table></div>`;
  if (d.points.length) {
    const lns = [...new Set(d.points.map((p) => p.layer))];
    h += `<h3>Points (${d.points.length})</h3><div class="tools"><select id="dp-layer" class="btn small"><option value="">All layers</option>${lns.map((n) => `<option>${esc(n)}</option>`).join('')}</select><button class="btn small" id="dp-csv">Download CSV</button></div><div class="scrollbox" id="dp-box"></div>`;
  }
  if (d.inserts.length) {
    h += `<h3>Blocks with attributes (${d.inserts.length})</h3><div class="scrollbox"><table class="dt"><tr><th>Name</th><th>Folder</th><th>East</th><th>North</th></tr>${d.inserts.map((o, i) => `<tr class="go" data-i="${i}"><td>${esc(o.name)}</td><td>${esc(o.attrs.KML_FOLDER || '')}</td><td>${f(o.x, 2)}</td><td>${f(o.y, 2)}</td></tr>`).join('')}</table></div>`;
  }
  el.innerHTML = h;
  const goto = (id) => { if (id == null) return; viewer.select({ id, kind: 'pts', point: null }); viewer.zoomToSelection(); };
  el.querySelectorAll('tr[data-z]').forEach((tr) => (tr.onclick = () => goto(d.withZ[+tr.dataset.z].id)));
  el.querySelectorAll('tr[data-i]').forEach((tr) => (tr.onclick = () => goto(d.inserts[+tr.dataset.i].id)));
  if (d.points.length) {
    const draw = () => {
      const q = $('dp-layer').value;
      const rows = d.points.filter((p) => !q || p.layer === q);
      state.dpRows = rows;
      $('dp-box').innerHTML = `<table class="dt"><tr><th>#</th><th>Name</th><th>East</th><th>North</th><th>Z</th></tr>${rows.slice(0, 600).map((p, i) => `<tr class="go" data-p="${i}"><td>${i + 1}</td><td>${esc(p.name || '')}</td><td>${f(p.x, 3)}</td><td>${f(p.y, 3)}</td><td>${f(p.z, 3)}</td></tr>`).join('')}</table>${rows.length > 600 ? `<p class="muted" style="font-size:12px;padding:4px">Showing 600 of ${rows.length}; use the CSV to see all of them.</p>` : ''}`;
      $('dp-box').querySelectorAll('tr[data-p]').forEach((tr) => (tr.onclick = () => goto(rows[+tr.dataset.p].id)));
    };
    $('dp-layer').onchange = draw; draw();
    $('dp-csv').onclick = () => {
      const blob = new Blob(['\ufeff' + pointsCsv(state.dpRows || d.points)], { type: 'text/csv;charset=utf-8' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'points.csv'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    };
  }
}

// ------------------------------------------------------------------ layers
function renderLayers() {
  const g = state.g;
  const ul = $('layerlist');
  ul.innerHTML = '';
  $('layer-empty').style.display = g ? 'none' : 'block';
  if (!g) return;
  g.layers.forEach((L, i) => {
    const li = document.createElement('li');
    li.dataset.name = L.name.toLowerCase();
    if (L.hidden) li.classList.add('off');
    li.innerHTML = `<input type="checkbox" ${viewer.layerVis[i] ? 'checked' : ''} aria-label="Show layer ${esc(L.name)}"><span class="sw" style="background:#${L.color.toString(16).padStart(6, '0')}"></span><span class="nm" title="${esc(L.name)}${L.hidden ? ' (off or frozen in the file)' : ''}">${esc(L.name)}</span><span class="ct">${L.count.toLocaleString('en-US')}</span><button class="solo" title="Show only this layer">solo</button>`;
    const cb = li.querySelector('input');
    cb.onchange = () => viewer.setLayerVisible(i, cb.checked);
    li.querySelector('.nm').onclick = () => { cb.checked = !cb.checked; cb.onchange(); };
    li.querySelector('.solo').onclick = () => setLayers((j) => j === i);
    ul.appendChild(li);
  });
}
function setLayers(fn) {
  const boxes = $('layerlist').querySelectorAll('input');
  boxes.forEach((cb, i) => { const v = !!fn(i, cb.checked); cb.checked = v; viewer.setLayerVisible(i, v); });
}
$('l-all').onclick = () => setLayers(() => true);
$('l-none').onclick = () => setLayers(() => false);
$('l-inv').onclick = () => setLayers((i, cur) => !cur);
$('layer-q').oninput = (e) => {
  const q = e.target.value.trim().toLowerCase();
  $('layerlist').querySelectorAll('li').forEach((li) => (li.style.display = !q || li.dataset.name.includes(q) ? '' : 'none'));
};

// ------------------------------------------------------------------ info
function renderFileCard() {
  const { g, model, meta, file } = state;
  const el = $('file-card');
  if (!g) { el.innerHTML = ''; return; }
  const s = g.stats;
  const o = g.origin;
  const rows = [
    ['File', esc(file.name)],
    ['Format', `${meta.format} ${esc(meta.version || '')}`],
    ['Size', (file.buf.byteLength / 1048576).toFixed(2) + ' MB'],
    ['Layers', String(g.layers.length)],
    ['Blocks', String(model.blocks.size)],
    ['Objects drawn', s.entities.toLocaleString('en-US')],
    ['Line segments', s.segments.toLocaleString('en-US')],
    ['Triangles', s.triangles.toLocaleString('en-US')],
    ['Texts', s.texts.toLocaleString('en-US')],
    ['Drawing units', unitLabel() === 'u' ? 'undefined' : unitLabel()],
    ['View origin', `${fmtN(o[0], 0)}, ${fmtN(o[1], 0)}, ${fmtN(o[2], 0)}`],
    ['Build time', (state.buildMs / 1000).toFixed(1) + ' s'],
  ];
  let html = `<h3>File</h3><table class="kv">${rows.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</table>`;
  const un = Object.entries(s.unsupported);
  if (un.length) {
    html += `<h3>Objects that are NOT drawn</h3><div class="card warn"><p>This viewer cannot represent these objects. To see them, open the file in AutoCAD:</p><p>${un.map(([k, v]) => `<b>${esc(k)}</b> ×${v.toLocaleString('en-US')}`).join(' · ')}</p></div>`;
  } else {
    html += `<div class="card"><p>All object types in the file could be drawn.</p></div>`;
  }
  if (s.textZ !== null && s.texts && Math.abs(s.textZ) > 0.001) {
    html += `<div class="card warn"><p><b>Elevation of TEXT, HATCH and SOLID:</b> the DWG reader does not provide the elevation of these 2D objects. They are placed at the drawing's median height (Z ≈ ${fmtN(s.textZ, 1)}). In plan view they sit in the right place; in 3D they may not match the real height.</p></div>`;
  }
  if (state.textOmitted) html += `<div class="card warn"><p>${state.textOmitted.toLocaleString('en-US')} text characters were skipped because of volume.</p></div>`;
  if (meta.warnings?.length) html += `<div class="card warn"><p><b>Reader warnings (LibreDWG):</b></p><p style="word-break:break-word">${meta.warnings.slice(0, 5).map(esc).join('<br>')}</p></div>`;
  if (model.source === 'dwg') html += `<div class="card"><p class="muted">DWG read with LibreDWG (open source). Lineweights, 3DSOLID/ACIS, proxy objects and tables are not drawn; linetypes with text or shapes are drawn as simple dashes.</p></div>`;
  el.innerHTML = html;
}

function renderSelection(s) {
  const el = $('sel-card');
  if (!s) { el.innerHTML = state.g ? '<div class="card"><p class="muted">With the <b>Select</b> tool, click an object to see its properties.</p></div>' : ''; return; }
  const tbl = (rows) => `<table class="kv">${rows.map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}</table>`;
  let html = `<h3>Selected object</h3>${tbl(s.rows)}`;
  if (s.parent) html += `<h3>Inside block</h3>${tbl(s.parent)}`;
  html += `<div class="tools" style="margin-top:10px"><button class="btn small" id="sel-zoom">Zoom to</button><button class="btn small" id="sel-iso">Isolate layer</button><button class="btn small" id="sel-hide">Hide layer</button><button class="btn small" id="sel-copy">Copy</button></div>`;
  el.innerHTML = html;
  const li = state.g.layers.findIndex((L) => L.name === s.layerName);
  $('sel-zoom').onclick = () => viewer.zoomToSelection();
  $('sel-iso').onclick = () => { if (li >= 0) setLayers((j) => j === li); };
  $('sel-hide').onclick = () => { if (li >= 0) setLayers((j, cur) => (j === li ? false : cur)); };
  $('sel-copy').onclick = () => copyText([...s.rows, ...(s.parent ? [['—', 'Containing block'], ...s.parent] : [])].map(([k, v]) => `${k}: ${v}`).join('\n'));
  openPane('p-info');
}

function renderMeasure(d) {
  const el = $('meas-card');
  const u = unitLabel();
  const tool = viewer.tool;
  if (!d || !d.pts.length) {
    el.innerHTML = `<p class="muted" style="font-size:13px">${tool === 'select' ? 'Pick <b>Distance</b>, <b>Area</b> or <b>Coordinate</b> in the top bar.' : 'Click on the model to place points. The yellow box means the cursor snapped to a vertex, endpoint or center.'}</p>`;
    return;
  }
  const f = (v, dd = 3) => fmtN(v, dd);
  let html = '';
  if (tool === 'coord') {
    const p = d.pts[0];
    html += `<div class="card"><p class="muted">Real coordinates</p><p class="big">X ${f(p[0])}<br>Y ${f(p[1])}<br>Z ${f(p[2])}</p></div><div class="tools"><button class="btn small" id="m-copy">Copy X, Y, Z</button></div>`;
    el.innerHTML = html;
    $('m-copy').onclick = () => copyText(`${p[0].toFixed(3)}, ${p[1].toFixed(3)}, ${p[2].toFixed(3)}`);
    return;
  }
  if (tool === 'area' && d.area !== null) {
    html += `<div class="card"><p class="muted">Plan area (X-Y)</p><p class="big">${f(d.area, 2)} ${u}²</p><p>Perimeter: <b>${f(d.perim, 2)} ${u}</b> · ${d.pts.length} points</p>${u === 'm' ? `<p>= ${f(d.area / 10000, 4)} ha</p>` : ''}</div>`;
  }
  if (d.segs.length) {
    html += `<div class="card"><p class="muted">Total length</p><p class="big">${f(d.L3)} ${u}</p><p>Cumulative horizontal: <b>${f(d.Lh)} ${u}</b></p></div>`;
    const last = d.segs[d.segs.length - 1];
    html += `<h3>Last segment</h3><table class="kv"><tr><td>3D distance</td><td>${f(last.d3)} ${u}</td></tr><tr><td>Horizontal</td><td>${f(last.h)} ${u}</td></tr><tr><td>Δ elevation</td><td>${f(last.dz)} ${u}</td></tr><tr><td>Slope</td><td>${last.slope === null ? '—' : f(last.slope, 2) + ' %'}</td></tr><tr><td>Azimuth</td><td>${f(last.az, 2)}°</td></tr></table>`;
  }
  html += `<div class="tools" style="margin-top:10px"><button class="btn small" id="m-undo">Undo point</button><button class="btn small" id="m-clear">Clear</button><button class="btn small" id="m-copy">Copy result</button></div>`;
  el.innerHTML = html;
  $('m-undo').onclick = () => viewer.undoMeasurePoint();
  $('m-clear').onclick = () => viewer.clearMeasure();
  $('m-copy').onclick = () => copyText([
    tool === 'area' && d.area !== null ? `Area: ${d.area.toFixed(3)} ${u}²  Perimeter: ${d.perim.toFixed(3)} ${u}` : '',
    d.segs.length ? `3D length: ${d.L3.toFixed(3)} ${u}  Horizontal: ${d.Lh.toFixed(3)} ${u}` : '',
    ...d.pts.map((p, i) => `P${i + 1}: ${p[0].toFixed(3)}, ${p[1].toFixed(3)}, ${p[2].toFixed(3)}`),
  ].filter(Boolean).join('\n'));
  openPane('p-measure');
}

async function copyText(t) {
  try { await navigator.clipboard.writeText(t); toast('Copied to clipboard.', 'info', 1800); }
  catch { toast('Could not copy automatically. Select the text manually.', 'bad', 3000); }
}

// ------------------------------------------------------------------ UI events
const fileInput = $('file');
const pick = () => fileInput.click();
$('btn-open').onclick = pick; $('btn-open2').onclick = pick;
fileInput.onchange = async () => {
  const f = fileInput.files?.[0];
  if (!f) return;
  const buf = await f.arrayBuffer();
  fileInput.value = '';
  openBuffer(buf, f.name);
};
const stage = $('stage');
['dragenter', 'dragover'].forEach((ev) => stage.addEventListener(ev, (e) => { e.preventDefault(); stage.classList.add('dragover'); }));
['dragleave', 'drop'].forEach((ev) => stage.addEventListener(ev, (e) => { e.preventDefault(); stage.classList.remove('dragover'); }));
stage.addEventListener('drop', async (e) => {
  const f = e.dataTransfer?.files?.[0];
  if (!f) return;
  openBuffer(await f.arrayBuffer(), f.name);
});

$('btn-demo').onclick = async () => {
  try {
    const b64 = $('demo-b64').textContent.trim();
    const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    const stream = new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
    const buf = await new Response(stream).arrayBuffer();
    openBuffer(buf, 'example-terrain.dxf');
  } catch (e) { toast('Could not load the example: ' + esc(e.message)); }
};

document.querySelectorAll('#tools .btn').forEach((b) => (b.onclick = () => setTool(b.dataset.tool)));
function setTool(t) {
  document.querySelectorAll('#tools .btn').forEach((b) => b.classList.toggle('on', b.dataset.tool === t));
  viewer.setTool(t);
  if (t === 'select') { setHint('Click an object to see its properties.'); renderSelection(viewer.sel ? null : null); }
  else if (t === 'dist') setHint('Distance: click each point; double click finishes. The yellow box is vertex snapping.');
  else if (t === 'area') setHint('Area: click each corner (3 points minimum); double click finishes.');
  else setHint('Coordinate: click to read the real X, Y, Z.');
  if (t !== 'select') openPane('p-measure');
  renderMeasure(null);
  setTimeout(() => setHint(''), 7000);
}

$('v-fit').onclick = () => viewer.fit(false, 'iso');
$('v-all').onclick = () => viewer.fit(true, 'iso');
$('v-top').onclick = () => viewer.fit(false, 'top');
$('v-iso').onclick = () => viewer.fit(false, 'iso');
$('v-front').onclick = () => viewer.fit(false, 'front');
$('v-right').onclick = () => viewer.fit(false, 'right');
let ortho = false, panMode = false;
$('b-proj').onclick = () => { ortho = !ortho; viewer.setProjection(ortho); $('b-proj').textContent = ortho ? 'Orthographic' : 'Perspective'; $('b-proj').classList.toggle('on', ortho); };
$('b-pan').onclick = () => { panMode = !panMode; viewer.setPanMode(panMode); $('b-pan').textContent = panMode ? 'Pan' : 'Orbit'; $('b-pan').classList.toggle('on', panMode); };
const expMenu = $('expmenu');
const saveBlob = (blob, name) => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
};
$('b-shot').onclick = (e) => { e.stopPropagation(); if (state.g) expMenu.hidden = !expMenu.hidden; };
document.addEventListener('click', () => { expMenu.hidden = true; });
expMenu.querySelectorAll('button').forEach((btn) => (btn.onclick = async () => {
  expMenu.hidden = true;
  if (!state.g) return;
  const base = (state.file?.name || 'view').replace(/\.[^.]+$/, '');
  try {
    const k = btn.dataset.exp;
    if (k === 'svg') {
      const svg = buildSvg(state.g, { light: $('o-bg').value === 'light', width: 2400, visible: viewer.layerVis });
      saveBlob(new Blob([svg], { type: 'image/svg+xml' }), base + '-plan.svg');
    } else {
      const blob = await viewer.exportImage({ scale: k === 'png6' ? 6 : 3, transparent: k === 'pngt' });
      saveBlob(blob, base + '-view.png');
    }
  } catch (err) { console.error(err); alert('Could not export: ' + err.message); }
}));
$('panelbtn').onclick = () => $('panel').classList.toggle('open');
document.querySelectorAll('#tabs button').forEach((b) => (b.onclick = () => {
  document.querySelectorAll('#tabs button').forEach((x) => x.classList.toggle('on', x === b));
  document.querySelectorAll('.pane').forEach((p) => p.classList.toggle('on', p.id === b.dataset.pane));
}));

// options
const rebuild = async () => {
  if (!state.model || state.rebuilding) return;
  state.rebuilding = true;
  const vis = viewer.layerVis.slice();
  const names = state.g.layers.map((L) => L.name);
  await buildAndShow();
  state.g.layers.forEach((L, i) => { const j = names.indexOf(L.name); if (j >= 0) { viewer.setLayerVisible(i, vis[j]); } });
  renderLayers();
  state.rebuilding = false;
};
$('o-bg').onchange = (e) => { viewer.setBackground(e.target.value === 'light'); document.getElementById('stage').style.background = e.target.value === 'light' ? '#f3f4f6' : '#101418'; rebuild(); };
$('o-q').onchange = rebuild;
$('o-z').oninput = (e) => { const k = Number(e.target.value); $('o-z-val').textContent = k + '×'; viewer.setZEx(k); };
[['s-lines', 'lines'], ['s-tris', 'tris'], ['s-fills', 'fills'], ['s-text', 'text'], ['s-pts', 'pts'], ['s-axes', 'axes']].forEach(([id, k]) => ($(id).onchange = (e) => viewer.setShow(k, e.target.checked)));

window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' && e.target.type !== 'checkbox' && e.target.type !== 'range') return;
  const k = e.key.toLowerCase();
  if (k === 'f') viewer.fit(false, 'iso');
  else if (k === 't') viewer.fit(false, 'top');
  else if (k === 'i') viewer.fit(false, 'iso');
  else if (k === 'escape') { viewer.clearMeasure(); viewer.select(null); $('toast').style.display = 'none'; }
  else if (k === 'backspace' || k === 'delete') { if (viewer.tool === 'dist' || viewer.tool === 'area') viewer.undoMeasurePoint(); }
});

renderSelection(null);

// A viewer built with `dwg-tool viewer` carries its drawing inside the page: open it right away.
(async () => {
  const el = $('embed-b64');
  const b64 = el?.textContent.trim();
  if (!b64) return;
  try {
    const bin = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    const stream = new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
    const buf = await new Response(stream).arrayBuffer();
    openBuffer(buf, el.dataset.name || 'embedded.dwg');
  } catch (e) { toast('Could not load the embedded file: ' + esc(e.message)); }
})();
