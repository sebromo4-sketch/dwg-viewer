# DWG Viewer (resumen en español)

Abre planos de AutoCAD (`.dwg` / `.dxf`) **sin AutoCAD**: en el navegador, sin internet, o desde Claude. La documentación completa está en [README.md](README.md) (inglés).

## Usarlo ya
1. Descarga `dwg-viewer-es.html` de la [última versión](https://github.com/OWNER/dwg-viewer/releases/latest) (interfaz en español).
2. Ábrelo con Chrome, Edge, Firefox o Safari y arrastra tu `.dwg`. El archivo no se sube a ningún lado.
3. Pestaña **Datos**: elevaciones por capa, tabla de puntos (Este, Norte, Z) con descarga a CSV y atributos de bloques.

## Instalarlo en Claude
- **Claude Code:** `/plugin marketplace add OWNER/dwg-viewer` y luego `/plugin install dwg-viewer@dwg-viewer`.
- **Claude.ai / escritorio:** descarga `dwg-viewer-skill.zip` y súbelo en *Configuración → Capacidades → Skills*.
- Después adjunta un DWG y pide: *«ábreme este plano y dime qué trae»*. Claude lo lee localmente y te devuelve un resumen, un plano en SVG y un visor 3D con tu dibujo incrustado.

## Ojo con
- No es 100 % fiel al original (DWG es formato propietario). No dibuja sólidos ACIS, objetos proxy de Civil 3D, tablas ni grosores de línea.
- Muchos DWG vienen **planos** (Z = 0, por ejemplo los exportados de KML). El visor nunca inventa altitudes y te dice cuándo el archivo no las trae.
- Si un DWG no abre: expórtalo a DXF desde AutoCAD (`GUARDAR COMO → DXF`) o usa el ODA File Converter (gratis).
