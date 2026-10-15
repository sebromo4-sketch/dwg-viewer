// usage: node i18n/apply.mjs <fromDir> <toDir> [en2es]
import fs from 'fs'; import path from 'path';
import { PAIRS } from './pairs.mjs';
const [from, to, mode] = process.argv.slice(2);
const toEs = mode === 'en2es';
const list = PAIRS.map(([es, en]) => (toEs ? [en, es] : [es, en])).sort((a, b) => b[0].length - a[0].length);
fs.mkdirSync(to, { recursive: true });
let miss = new Set(list.map((p) => p[0]));
for (const f of fs.readdirSync(from)) {
  let s = fs.readFileSync(path.join(from, f), 'utf8');
  for (const [a, b] of list) if (a !== b && s.includes(a)) { s = s.split(a).join(b); miss.delete(a); }
  fs.writeFileSync(path.join(to, f), s);
}
const unused = [...miss].filter((m) => list.find((p) => p[0] === m && p[0] !== p[1]));
if (unused.length) console.log('UNUSED pairs:', unused.length, unused.map((u) => u.slice(0, 70)));
