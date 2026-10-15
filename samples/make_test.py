import math
import ezdxf
from ezdxf.enums import TextEntityAlignment

# UTM-like coordinates to exercise numeric precision
X0, Y0, Z0 = 575000.0, 2095000.0, 2150.0

doc = ezdxf.new("R2018", setup=True)
doc.header["$LTSCALE"] = 1.0
msp = doc.modelspace()

for name, color in [("TERRAIN", 8), ("CELL", 3), ("GEOMEMBRANE", 5), ("WELLS", 1), ("TEXT", 7),
                    ("DIMS", 2), ("LEACHATE", 6), ("HATCH", 30)]:
    doc.layers.add(name, color=color)

# Dashed linetypes come with setup=True (DASHED, CENTER, ...)

# --- Terrain: 3DFACE mesh with relief ---
n = 12
step = 10.0
def z(i, j):
    return Z0 + 6 * math.sin(i / 2.0) * math.cos(j / 3.0)
for i in range(n):
    for j in range(n):
        p1 = (X0 + i * step, Y0 + j * step, z(i, j))
        p2 = (X0 + (i + 1) * step, Y0 + j * step, z(i + 1, j))
        p3 = (X0 + (i + 1) * step, Y0 + (j + 1) * step, z(i + 1, j + 1))
        p4 = (X0 + i * step, Y0 + (j + 1) * step, z(i, j + 1))
        msp.add_3dface([p1, p2, p3, p4], dxfattribs={"layer": "TERRAIN"})

# --- 3D polyline (axis) ---
pts3d = [(X0 + 5 + k * 10, Y0 + 5 + 20 * math.sin(k / 2.0), Z0 + 3 + 0.4 * k) for k in range(12)]
msp.add_polyline3d(pts3d, dxfattribs={"layer": "LEACHATE", "color": 6})

# --- LWPOLYLINE with bulge (rounded cell corners), dashed linetype ---
cell = [(X0 + 20, Y0 + 20, 0, 0, 0.4), (X0 + 80, Y0 + 20, 0, 0, 0.0), (X0 + 80, Y0 + 70, 0, 0, -0.5),
        (X0 + 20, Y0 + 70, 0, 0, 0.0)]
lw = msp.add_lwpolyline(cell, format="xyseb", close=True,
                        dxfattribs={"layer": "CELL", "elevation": Z0 + 8, "linetype": "DASHED"})

# --- Circles, arcs, ellipse, spline ---
for k in range(35):
    a = 2 * math.pi * k / 35
    cx, cy = X0 + 50 + 28 * math.cos(a), Y0 + 45 + 20 * math.sin(a)
    msp.add_circle((cx, cy, Z0 + 8), radius=1.2, dxfattribs={"layer": "WELLS"})
msp.add_arc((X0 + 50, Y0 + 45, Z0 + 8), 40, 20, 140, dxfattribs={"layer": "GEOMEMBRANE", "linetype": "CENTER"})
msp.add_ellipse((X0 + 50, Y0 + 45, Z0 + 8), major_axis=(35, 0, 0), ratio=0.5, start_param=0, end_param=math.pi * 1.5,
                dxfattribs={"layer": "GEOMEMBRANE"})
msp.add_spline([(X0 + 10, Y0 + 100, Z0 + 4), (X0 + 40, Y0 + 115, Z0 + 5), (X0 + 70, Y0 + 95, Z0 + 6),
                (X0 + 100, Y0 + 110, Z0 + 4)], dxfattribs={"layer": "LEACHATE"})
msp.add_point((X0 + 50, Y0 + 45, Z0 + 12), dxfattribs={"layer": "WELLS", "color": 1})

# --- Nested block with ByBlock / layer 0 colors ---
inner = doc.blocks.new("MECHERO_BASE")
inner.add_circle((0, 0, 0), 0.8, dxfattribs={"layer": "0", "color": 0})
inner.add_line((0, 0, 0), (0, 0, 4), dxfattribs={"layer": "0", "color": 0})
outer = doc.blocks.new("MECHERO")
outer.add_blockref("MECHERO_BASE", (0, 0, 0))
outer.add_line((-1, 0, 4), (1, 0, 4), dxfattribs={"layer": "WELLS", "color": 1})
outer.add_text("M", height=0.8, dxfattribs={"layer": "TEXT", "insert": (1.2, 0.2, 4)})
msp.add_blockref("MECHERO", (X0 + 30, Y0 + 30, Z0 + 8), dxfattribs={"layer": "WELLS", "color": 1, "rotation": 30, "xscale": 1.5, "yscale": 1.5, "zscale": 1.5})
# 3x2 array
ref = msp.add_blockref("MECHERO", (X0 + 60, Y0 + 55, Z0 + 8), dxfattribs={"layer": "WELLS", "color": 3})
ref.grid(size=(2, 3), spacing=(6, 5)) if hasattr(ref, "grid") else None

# --- Text ---
t = msp.add_text("Sample landfill cell", height=3, dxfattribs={"layer": "TEXT", "style": "Standard"})
t.set_placement((X0 + 20, Y0 + 75, Z0 + 8), align=TextEntityAlignment.LEFT)
t2 = msp.add_text("Pump well PW-01 Ø 1.5 m 45°", height=2, dxfattribs={"layer": "TEXT", "rotation": 45})
t2.set_placement((X0 + 90, Y0 + 20, Z0 + 8), align=TextEntityAlignment.MIDDLE_CENTER)
mt = msp.add_mtext("Geomembrana HDPE 1.5 mm\\PCapa de arcilla compactada\\P{\\C1;Nota en rojo} y texto normal con acentos: áéíóú ñ",
                   dxfattribs={"layer": "TEXT", "char_height": 2.0, "insert": (X0 + 100, Y0 + 60, Z0 + 8), "width": 40,
                               "attachment_point": 1})

# --- Hatch with island ---
h = msp.add_hatch(color=30, dxfattribs={"layer": "HATCH"})
h.paths.add_polyline_path([(X0 + 20, Y0 - 40), (X0 + 80, Y0 - 40), (X0 + 80, Y0 - 5), (X0 + 20, Y0 - 5)], is_closed=True)
h.paths.add_polyline_path([(X0 + 40, Y0 - 30), (X0 + 60, Y0 - 30), (X0 + 60, Y0 - 15), (X0 + 40, Y0 - 15)], is_closed=True)
h.set_solid_fill(color=30)
h.dxf.elevation = (0, 0, Z0)
h2 = msp.add_hatch(color=5, dxfattribs={"layer": "HATCH"})
h2.set_pattern_fill("ANSI31", scale=2.0)
h2.paths.add_polyline_path([(X0 + 90, Y0 - 40), (X0 + 120, Y0 - 40), (X0 + 120, Y0 - 10), (X0 + 90, Y0 - 10)], is_closed=True)
h2.dxf.elevation = (0, 0, Z0)

# --- Aligned dimension (creates a *D block) ---
dim = msp.add_aligned_dim(p1=(X0 + 20, Y0 + 10, Z0 + 8), p2=(X0 + 80, Y0 + 10, Z0 + 8), distance=-6,
                          dxfattribs={"layer": "DIMS"}, dimstyle="EZDXF")
dim.render()

# --- Classic 2D polyline with bulge, and SOLID ---
pl = msp.add_polyline2d([(X0 + 120, Y0 + 20), (X0 + 140, Y0 + 20), (X0 + 140, Y0 + 40)], dxfattribs={"layer": "CELL"})
msp.add_solid([(X0 + 120, Y0 + 80, Z0), (X0 + 130, Y0 + 80, Z0), (X0 + 120, Y0 + 90, Z0), (X0 + 130, Y0 + 90, Z0)],
              dxfattribs={"layer": "GEOMEMBRANE", "color": 5})
msp.add_line((X0, Y0, Z0), (X0 + 120, Y0 + 120, Z0 + 20), dxfattribs={"layer": "TERRAIN", "color": 2})

doc.saveas("demo-terrain.dxf")
print("ok:", len(list(msp)), "entities in model space")
