import { build } from 'esbuild';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const shimPlugin = { name: 'three-shim', setup(b) { b.onResolve({ filter: /^three$/ }, () => ({ path: '' + path.resolve('test/three-shim.js') + '' })); } };
const out = await build({
  entryPoints: ['src/main.js'], bundle: true, write: false, format: 'iife', platform: 'browser', target: 'es2020', logLevel: 'error',
  define: { 'import.meta.url': '"https://localhost/"' }, external: ['node:*', 'fs', 'path', 'url', 'module'], plugins: [shimPlugin],
});
const code = out.outputFiles[0].text;

let tpl = fs.readFileSync('src/template.html', 'utf8');
const gz = (b) => zlib.gzipSync(b).toString('base64');
tpl = tpl.replace('__WASM_B64__', () => gz(fs.readFileSync('node_modules/@mlightcad/libredwg-web/wasm/libredwg-web.wasm')))
  .replace('__DEMO_B64__', () => gz(fs.readFileSync('samples/demo-terrain.dxf'))).replace('__EMBED_B64__', '').replace('<script>__BUNDLE__</script>', '');
const dom = new JSDOM(tpl, { pretendToBeVisual: true, runScripts: 'outside-only', url: 'https://localhost/' });
const w = dom.window;
const errors = [];
w.addEventListener('error', (e) => errors.push('window error: ' + (e.error?.stack || e.message)));
w.console.error = (...a) => errors.push('console.error: ' + a.map((x) => (x?.stack || x)).join(' '));
Object.assign(w, { DecompressionStream, Blob, Response, TextDecoder, TextEncoder, ResizeObserver: class { observe() {} disconnect() {} } });
w.HTMLCanvasElement.prototype.getContext = function () {
  return { font: '', fillStyle: '', textBaseline: '', measureText: (t) => ({ width: t.length * 22 }), fillText() {}, clearRect() {} };
};
for (const sel of ['#view', 'canvas']) { /* tamaño simulado se aplica abajo */ }
const view = w.document.getElementById('view');
Object.defineProperty(view, 'clientWidth', { value: 1000 }); Object.defineProperty(view, 'clientHeight', { value: 700 });
w.HTMLElement.prototype.getBoundingClientRect = function () { return { left: 0, top: 0, width: 1000, height: 700, right: 1000, bottom: 700 }; };
w.eval(code);
const V = w.__viewer;
const $ = (id) => w.document.getElementById(id);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const waitLoad = async () => { for (let i = 0; i < 400; i++) { await sleep(50); if ($('loader').style.display === 'none' && V.g) return true; } return false; };
const results = [];
const ok = (name, cond, extra = '') => { results.push([cond ? 'OK  ' : 'FAIL', name, extra]); };

async function scenario(label, loader) {
  V.g = null;
  await loader();
  const loaded = await waitLoad();
  ok(`${label}: carga`, loaded, $('toast').textContent.slice(0, 200));
  if (!loaded) return;
  const nLayers = $('layerlist').querySelectorAll('li').length;
  ok(`${label}: lista de capas`, nLayers >= 8, `${nLayers} capas`);
  ok(`${label}: info panel`, /Line segments/.test($('file-card').textContent), $('file-card').textContent.replace(/\s+/g, ' ').slice(0, 160));
  ok(`${label}: data tab`, /Elevations/.test($('data-card').textContent), $('data-card').textContent.replace(/\s+/g, ' ').slice(0, 330));
  // selección por rayo: barrer una malla de pantalla
  V.resize(); V.fit(false, 'top'); V.cam.updateMatrixWorld();
  let hit = null, nHits = 0;
  for (let y = 80; y < 680 && !hit; y += 20) for (let x = 80; x < 960 && !hit; x += 20) { const h = V.rayHit(x, y, true); if (h && h.id >= 0) { nHits++; hit = h; } }
  ok(`${label}: raycast encuentra objetos`, !!hit, hit ? `${hit.kind} id=${hit.id}` : '');
  if (hit) {
    V.select(hit);
    ok(`${label}: properties`, /Type/.test($('sel-card').textContent), $('sel-card').textContent.replace(/\s+/g, ' ').slice(0, 140));
    V.zoomToSelection();
  }
  // snap + medición
  document_tool: {
    w.document.querySelector('[data-tool="dist"]').click();
    const c1 = V.nearestSnap(500, 350, 400);
    ok(`${label}: nearestSnap`, !!c1, JSON.stringify(c1));
    V.addMeasurePoint([0, 0, 0]); V.addMeasurePoint([30, 40, 5]);
    ok(`${label}: measure distance`, /50\.[0-9]+/.test($('meas-card').textContent) || /50,/.test($('meas-card').textContent) || /Total length/.test($('meas-card').textContent), $('meas-card').textContent.replace(/\s+/g, ' ').slice(0, 150));
    w.document.querySelector('[data-tool="area"]').click();
    V.addMeasurePoint([0, 0, 0]); V.addMeasurePoint([10, 0, 0]); V.addMeasurePoint([10, 10, 0]);
    ok(`${label}: measure area`, /Plan area/.test($('meas-card').textContent) && /50/.test($('meas-card').textContent), $('meas-card').textContent.replace(/\s+/g, ' ').slice(0, 120));
    w.document.querySelector('[data-tool="select"]').click();
  }
  // vistas y opciones
  for (const id of ['v-top', 'v-iso', 'v-front', 'v-right', 'v-all', 'v-fit', 'b-proj', 'b-proj', 'b-pan', 'b-pan']) $(id).click();
  $('o-z').value = '3'; $('o-z').dispatchEvent(new w.Event('input'));
  for (const id of ['s-lines', 's-tris', 's-fills', 's-text', 's-pts', 's-axes']) { $(id).checked = !$(id).checked; $(id).dispatchEvent(new w.Event('change')); $(id).checked = !$(id).checked; $(id).dispatchEvent(new w.Event('change')); }
  $('l-none').click(); $('l-all').click(); $('l-inv').click(); $('l-inv').click();
  V.render();
  ok(`${label}: render sin errores`, (w.__renders || 0) > 0 && errors.length === 0, errors.slice(0, 3).join(' | '));
}

// 1) ejemplo DXF
await scenario('DXF', async () => { $('btn-demo').click(); });
// 2) DWG real (AC1032 generado con otra librería) vía input file
const DWGF = process.env.DWG || 'samples/test3d_AC1032.dwg'; const dwg = fs.readFileSync(DWGF);
await scenario('DWG', async () => {
  const input = $('file');
  Object.defineProperty(input, 'files', { configurable: true, value: [{ name: '' + DWGF.split('/').pop() + '', arrayBuffer: async () => dwg.buffer.slice(dwg.byteOffset, dwg.byteOffset + dwg.byteLength) }] });
  input.dispatchEvent(new w.Event('change'));
});
// 3) cambio de fondo (reconstrucción) y archivo inválido
$('o-bg').value = 'light'; $('o-bg').dispatchEvent(new w.Event('change'));
await sleep(800); await waitLoad();
ok('reconstruir con fondo claro', !!V.g && V.light === true && $('layerlist').querySelectorAll('li').length >= 8);
const bad = Buffer.from('esto no es un dwg');
const input = $('file');
Object.defineProperty(input, 'files', { configurable: true, value: [{ name: 'malo.dwg', arrayBuffer: async () => bad.buffer.slice(bad.byteOffset, bad.byteOffset + bad.byteLength) }] });
input.dispatchEvent(new w.Event('change'));
await sleep(600);
ok('invalid file shows a warning', /could not be opened/.test($('toast').textContent), $('toast').textContent.slice(0, 160));
for (const r of results) console.log(r.join(' | '));
console.log('JS errors:', errors.length ? errors.slice(0, 5) : 'ninguno');
process.exit(results.some((r) => r[0] === 'FAIL') ? 1 : 0);
