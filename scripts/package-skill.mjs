// Zip skills/dwg-viewer into dist/dwg-viewer-skill.zip (the file you upload in Claude > Settings > Skills).
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
fs.mkdirSync('dist', { recursive: true });
fs.rmSync('dist/dwg-viewer-skill.zip', { force: true });
execFileSync('zip', ['-r', '-q', '../dist/dwg-viewer-skill.zip', 'dwg-viewer'], { cwd: 'skills', stdio: 'inherit' });
console.log('dist/dwg-viewer-skill.zip', (fs.statSync('dist/dwg-viewer-skill.zip').size / 1048576).toFixed(1) + ' MB');
