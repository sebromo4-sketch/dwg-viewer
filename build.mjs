// Build script.
//   node build.mjs                 -> dist/dwg-viewer.html        (English UI, demo drawing embedded)
//   node build.mjs --lang es       -> dist/dwg-viewer-es.html     (Spanish UI)
//   node build.mjs --skill         -> skills/dwg-viewer/{assets,scripts}  (what the Claude skill ships)
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { PAIRS } from './i18n/pairs.mjs';

const argv = process.argv.slice(2);
const lang = argv.includes('--lang') ? argv[argv.indexOf('--lang') + 1] : 'en';
const skill = argv.includes('--skill');
const gz = (buf) => zlib.gzipSync(buf, { level: 9 }).toString('base64');

// English is the source language; Spanish is produced by swapping the literals in i18n/pairs.mjs
const toEs = [...PAIRS].map(([es, en]) => [en, es]).sort((a, b) => b[0].length - a[0].length);
const translate = (s, l) => (l === 'es' ? toEs.reduce((t, [a, b]) => (a === b ? t : t.split(a).join(b)), s) : s);

async function viewerHtml(l, { demo }) {
  const i18n = { name: 'i18n', setup(b) { b.onLoad({ filter: /src[\\/][^\\/]+\.js$/ }, (a) => ({ contents: translate(fs.readFileSync(a.path, 'utf8'), l), loader: 'js' })); } };
  const out = await build({
    entryPoints: ['src/main.js'], bundle: true, write: false, format: 'iife', platform: 'browser', target: ['es2020'],
    minify: true, legalComments: 'none', logLevel: 'warning', plugins: [i18n],
    define: { 'import.meta.url': '"https://localhost/"', 'process.env.NODE_ENV': '"production"' },
    external: ['node:*', 'fs', 'path', 'url', 'module'],
  });
  const js = out.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
  const wasm = fs.readFileSync('node_modules/@mlightcad/libredwg-web/wasm/libredwg-web.wasm');
  const demoBuf = demo ? fs.readFileSync('samples/demo-terrain.dxf') : Buffer.from('');
  const tpl = translate(fs.readFileSync('src/template.html', 'utf8'), l);
  return tpl.replace('__WASM_B64__', () => gz(wasm)).replace('__DEMO_B64__', () => gz(demoBuf)).replace('__EMBED_B64__', '').replace('__BUNDLE__', () => js);
}

if (skill) {
  const dir = 'skills/dwg-viewer';
  fs.mkdirSync(`${dir}/assets`, { recursive: true });
  fs.mkdirSync(`${dir}/scripts`, { recursive: true });
  for (const l of ['en', 'es']) {
    const html = await viewerHtml(l, { demo: false });
    fs.writeFileSync(`${dir}/assets/viewer-template${l === 'es' ? '.es' : ''}.html`, html);
    console.log(`skill viewer template (${l}): ${(html.length / 1048576).toFixed(2)} MB`);
  }
  fs.writeFileSync(`${dir}/scripts/libredwg-web.wasm.gz`, zlib.gzipSync(fs.readFileSync('node_modules/@mlightcad/libredwg-web/wasm/libredwg-web.wasm'), { level: 9 }));
  const cli = await build({
    entryPoints: ['cli/dwg-tool.mjs'], bundle: true, write: false, format: 'esm', platform: 'node', target: 'node20', minify: true, legalComments: 'none', logLevel: 'warning',
    banner: { js: "import { createRequire as __cr } from 'node:module'; const require = __cr(import.meta.url);" },
  });
  fs.writeFileSync(`${dir}/scripts/dwg-tool.mjs`, cli.outputFiles[0].text);
  fs.chmodSync(`${dir}/scripts/dwg-tool.mjs`, 0o755);
  console.log(`skill CLI: ${(cli.outputFiles[0].text.length / 1024).toFixed(0)} KB`);
} else {
  const html = await viewerHtml(lang, { demo: true });
  fs.mkdirSync('dist', { recursive: true });
  const name = lang === 'es' ? 'dist/dwg-viewer-es.html' : 'dist/dwg-viewer.html';
  fs.writeFileSync(name, html);
  console.log(`${name}: ${(html.length / 1048576).toFixed(2)} MB`);
}
