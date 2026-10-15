// Test runner: CLI checks on synthetic samples + jsdom UI smoke test.
import { execFileSync, spawnSync } from 'node:child_process';
import fs from 'node:fs';

let fails = 0;
const ok = (name, cond, detail = '') => { console.log(`${cond ? 'OK  ' : 'FAIL'} | ${name}${detail ? ' | ' + detail : ''}`); if (!cond) fails++; };
const cli = (...a) => execFileSync('node', ['cli/dwg-tool.mjs', ...a], { encoding: 'utf8', maxBuffer: 1 << 28 });

// 1. every DWG version decodes and agrees with the DXF it was made from
const counts = {};
for (const f of ['samples/demo-terrain.dxf', 'samples/test3d_AC1015.dwg', 'samples/test3d_AC1018.dwg', 'samples/test3d_AC1027.dwg', 'samples/test3d_AC1032.dwg']) {
  const j = JSON.parse(cli('info', f, '--json'));
  counts[f] = j.stats.entities;
  ok(`info ${f}`, j.stats.entities > 150 && j.layers.length >= 8 && !j.elevation.flat, `${j.format} ${j.version}, ${j.stats.entities} objects`);
  ok(`extents ${f}`, Math.abs(j.extents.robustMin[0] - 575000) < 5 && j.extents.robustMax[2] > 2150, JSON.stringify(j.extents.robustMin));
}
const modern = ['AC1018', 'AC1027', 'AC1032'].map((v) => counts[`samples/test3d_${v}.dwg`]);
ok('AC1018/AC1027/AC1032 give the same object count', new Set(modern).size === 1, modern.join(','));
ok('AC1015 is within 2% of the others', Math.abs(counts['samples/test3d_AC1015.dwg'] - modern[0]) <= modern[0] * 0.02);

// 2. exports
const csv = cli('points', 'samples/test3d_AC1032.dwg');
ok('points csv', csv.startsWith('layer,name,east,north,elevation') && csv.split('\n').length > 2);
fs.mkdirSync('test/out', { recursive: true });
cli('plan', 'samples/test3d_AC1032.dwg', '--out', 'test/out/plan.svg');
ok('plan svg file', fs.readFileSync('test/out/plan.svg', 'utf8').includes('<path'));
cli('viewer', 'samples/test3d_AC1032.dwg', '--out', 'test/out/viewer.html');
const v = fs.readFileSync('test/out/viewer.html', 'utf8');
ok('viewer html embeds the drawing', /data-name="test3d_AC1032.dwg">[A-Za-z0-9+/=]{100,}/.test(v));

// 3. invalid input fails cleanly
const bad = spawnSync('node', ['cli/dwg-tool.mjs', 'info', 'package.json'], { encoding: 'utf8' });
ok('non-CAD file is rejected', bad.status !== 0 || /Error/.test(bad.stderr));

// 4. UI smoke test (jsdom, WebGL stubbed)
const ui = spawnSync('node', ['test/ui-test.mjs'], { encoding: 'utf8', timeout: 240000 });
const lines = ui.stdout.split('\n').filter((l) => /^(OK|FAIL)/.test(l));
ok('ui smoke test', ui.status === 0 && lines.length > 10 && !lines.some((l) => l.startsWith('FAIL')), `${lines.filter((l) => l.startsWith('OK')).length} checks`);
if (lines.some((l) => l.startsWith('FAIL'))) console.log(lines.filter((l) => l.startsWith('FAIL')).join('\n'));

console.log(fails ? `\n${fails} FAILED` : '\nall passed');
process.exit(fails ? 1 : 0);
