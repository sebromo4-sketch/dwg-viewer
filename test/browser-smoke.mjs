// Optional real-browser smoke test (WebGL via SwiftShader). Needs a Chromium/Chrome binary:
//   CHROME_PATH=/path/to/chrome npm run test:browser
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const candidates = [process.env.CHROME_PATH, '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/opt/pw-browsers/chromium'].filter(Boolean);
const exe = candidates.find((p) => fs.existsSync(p));
if (!exe) { console.log('SKIP | no Chrome/Chromium found (set CHROME_PATH)'); process.exit(0); }

fs.mkdirSync('test/out', { recursive: true });
execFileSync('node', ['cli/dwg-tool.mjs', 'viewer', 'samples/test3d_AC1032.dwg', '--out', 'test/out/viewer.html'], { stdio: 'ignore' });

const b = await chromium.launch({ executablePath: exe, args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1400, height: 850 } });
const errors = [];
p.on('pageerror', (e) => errors.push(e.message));
p.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
await p.goto('file://' + process.cwd() + '/test/out/viewer.html');
await p.waitForFunction(() => document.getElementById('drop').style.display === 'none', null, { timeout: 90000 });
await p.waitForTimeout(1000);
const layers = await p.$$eval('#layerlist li', (l) => l.length);
const png = await p.screenshot({ path: 'test/out/viewer.png' });
await b.close();
const ok = layers >= 8 && errors.length === 0 && png.length > 20000;
console.log(`${ok ? 'OK  ' : 'FAIL'} | browser smoke | layers=${layers} screenshotBytes=${png.length} errors=${errors.length}`);
if (errors.length) console.log(errors.join('\n'));
process.exit(ok ? 0 : 1);
