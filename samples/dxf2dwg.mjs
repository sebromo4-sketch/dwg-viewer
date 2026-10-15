// Regenerates the DWG samples from demo-terrain.dxf (needs: npm i @node-projects/acad-ts).
import fs from 'fs';
import { DxfReader, DwgWriter, ACadVersion } from '@node-projects/acad-ts';
const buf = fs.readFileSync(new URL('./demo-terrain.dxf', import.meta.url));
const doc = DxfReader.readFromStream(new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength), () => {});
for (const [name, ver] of [['AC1015', ACadVersion.AC1015], ['AC1018', ACadVersion.AC1018], ['AC1027', ACadVersion.AC1027], ['AC1032', ACadVersion.AC1032]]) {
  doc.header.version = ver;
  fs.writeFileSync(new URL(`./test3d_${name}.dwg`, import.meta.url), DwgWriter.writeToBuffer(doc));
  console.log(name, 'ok');
}
