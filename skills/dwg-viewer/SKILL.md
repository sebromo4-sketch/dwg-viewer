---
name: dwg-viewer
description: Open, read and visualize AutoCAD DWG and DXF files without AutoCAD. Use whenever the user uploads or mentions a .dwg or .dxf file, or asks to view, open, inspect, summarize or extract data (layers, coordinates, elevations/altitudes, points, texts, block attributes) from a CAD drawing, or wants a plan view or an offline 3D viewer of it.
---

# DWG / DXF viewer

Reads AutoCAD drawings offline (DWG R13 → 2018+, and ASCII DXF) with LibreDWG compiled to WebAssembly, and produces:

- a **summary** of what is inside (layers, real-world extents, elevations, object types, what could not be drawn),
- a **plan-view SVG** (flat top view),
- **CSV** exports of points and texts,
- a **standalone 3D viewer** (`.html`, works offline) with the drawing already embedded.

Everything runs locally with Node.js ≥ 20. No `npm install`, no network, nothing is uploaded.

`SKILL_DIR` below is the folder that contains this `SKILL.md`.

## Workflow

1. **Locate the file.** Uploaded files are usually under `/mnt/user-data/uploads/` (or the working directory). Check the extension: `.dwg` or `.dxf`.
2. **Summarize first** — always run this before answering anything about the drawing:
   ```bash
   node SKILL_DIR/scripts/dwg-tool.mjs info "<file>"          # markdown summary
   node SKILL_DIR/scripts/dwg-tool.mjs info "<file>" --json   # same, machine-readable
   ```
   Read it carefully: layers, **real coordinates**, **elevation section**, block attributes, texts, and the "Not drawn" list.
3. **Answer what the user asked** from that summary. Typical follow-ups:
   ```bash
   node SKILL_DIR/scripts/dwg-tool.mjs points "<file>" [--layer "NAME"] --out points.csv   # layer,name,east,north,elevation
   node SKILL_DIR/scripts/dwg-tool.mjs texts  "<file>" [--layer "NAME"] --out texts.csv    # layer,text,east,north,elevation
   node SKILL_DIR/scripts/dwg-tool.mjs plan   "<file>" --out plan.svg [--style bw|color|cad] [--view N|sheet] [--no-straighten]   # flat top view
   node SKILL_DIR/scripts/dwg-tool.mjs views  "<file>"                                       # blocks of a multi-drawing sheet
   ```
4. **Deliver the viewer** when the user wants to *see* the drawing (this is the default deliverable for "open this DWG"):
   ```bash
   node SKILL_DIR/scripts/dwg-tool.mjs viewer "<file>" --out "<name>-viewer.html"            # English UI
   node SKILL_DIR/scripts/dwg-tool.mjs viewer "<file>" --out "<name>-viewer.html" --lang es  # Spanish UI
   ```
   Send the `.html` to the user (file delivery) or publish it as an artifact. It opens the drawing automatically and also lets the user drag in other DWG/DXF files. The page contains the drawing's data, so mention that if the user plans to share the link.
5. **Show a quick picture** in the chat when useful: the plan SVG can be sent as a file; if a rasterizer is available (e.g. `rsvg-convert`, `inkscape`, or a headless browser) convert it to PNG to preview.
6. A viewer with no file (`viewer --out empty.html`, no input path) is a drag-and-drop viewer and can be handed out as a reusable tool.

## Sheets with several drawings
Many DWGs are a whole sheet: site plan (often rotated against north), coordinate tables, details, location sketches and the title block in one model space. Run `views` to list the detected blocks with their tilt, then `plan --view N` exports one block straightened (`--no-straighten` keeps north up). `--style bw` gives a white sheet with black lines (architectural look), `color` keeps the original colors darkened for print, `cad` keeps the dark AutoCAD look. In the HTML viewer the same things live in the **Views** tab, the **Straighten** button and **Export** (live preview, SVG or PNG). Detection is heuristic (framed boxes + clustering); if a block is missed, export the current view instead.

## Be honest about elevations

Many DWG files are **flat** (all Z = 0): exports from KML/GIS, survey sheets, plan drawings. The summary says `FLAT DRAWING` or lists exactly which objects have Z ≠ 0. Never invent altitudes. If the user needs elevations and the file has none, say so plainly and suggest where they may live (a terrain model, a points file, spot-height texts). Points with Z = -999999 are a "no elevation" marker and are treated as 0. Spot heights written only as text show up in the `texts` export.

## Units and coordinates

`info` reports declared vs effective units. If coordinates look like UTM (E ≈ 1e5–1e6, N ≈ 1e6–1e7) but the header says mm, meters are assumed. Reported extents are real (file) coordinates; the viewer recenters internally to keep float precision.

## Limitations (state them when relevant)

- DWG is a proprietary format; decoding is by reverse-engineered open-source LibreDWG, so fidelity is high but not 100%.
- Not drawn: 3DSOLID/ACIS solids, proxy objects (e.g. Civil 3D), tables, multileaders, images/OLE; lineweights are ignored; complex linetypes are simplified.
- In DWG, 2D TEXT/HATCH/SOLID lose their elevation and are placed at the drawing's median Z (plan view is unaffected).
- Very large DWGs (hundreds of MB) can exhaust WebAssembly memory.
- If a DWG fails to open, ask the user to export DXF from AutoCAD (`SAVE AS → DXF 2013/2018`) or convert it with the free ODA File Converter, then run the same commands on the `.dxf`.
- Binary DXF is not supported (save as ASCII DXF).

## Troubleshooting

- `Not a valid DWG (missing AC10xx signature)`: the file is not a DWG (maybe renamed DXF/PDF).
- `Open dwg file with error code: 64` in warnings is normal for AC1018+ files; the data is still read. Only worry if no objects are drawn.
- Node < 20: ask the user to upgrade, or run the commands inside a Node 20+ environment.
