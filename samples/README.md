# Samples

Small **synthetic** drawings used by the tests and as the viewer's built-in example (no real project data).

- `make_test.py` — generates `demo-terrain.dxf` with `ezdxf` (terrain mesh, 3D polyline, arcs, splines, hatch with island, nested blocks, dimension…), in UTM-like coordinates.
- `dxf2dwg.mjs` — converts that DXF into DWG R2000/2004/2013/2018 (`test3d_AC10xx.dwg`) with `@node-projects/acad-ts`.

Never put real project drawings here: `*.dwg`/`*.dxf` are git-ignored outside this folder.
