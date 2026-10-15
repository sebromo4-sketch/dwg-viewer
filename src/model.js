// Normalizes what libredwg-web (DWG) and dxf-json (DXF) return into one internal model.
// Angles are tagged with model.angleUnit: 'rad' (DWG) or 'deg' (DXF).

const isModelName = (n) => typeof n === 'string' && n.toLowerCase() === '*model_space';

function normLayer(l, source) {
  let ci = l.colorIndex;
  let off = false;
  let frozen = false;
  let aci = null;
  let rgb = null;
  if (source === 'dxf') {
    if (typeof ci === 'number') {
      if (ci < 0) off = true;
      ci = Math.abs(ci);
    }
    frozen = ((l.standardFlag ?? 0) & 1) === 1;
    if (typeof l.color === 'number' && l.color > 0) rgb = l.color & 0xffffff;
    if (typeof ci === 'number' && ci >= 1 && ci <= 255) aci = ci;
  } else {
    off = !!l.off;
    frozen = !!l.frozen;
    if (typeof ci === 'number' && ci >= 1 && ci <= 255) aci = ci;
    else if (typeof l.color === 'number') rgb = l.color & 0xffffff;
  }
  return { name: l.name, aci, rgb, off, frozen, ltype: l.lineType || 'Continuous' };
}

function normLtypes(entries) {
  const m = new Map();
  for (const lt of entries || []) {
    const pat = (lt.pattern || []).map((p) => p.elementLength ?? 0);
    m.set(String(lt.name).toUpperCase(), pat);
  }
  return m;
}

export function fromDwgDatabase(db) {
  const layers = new Map();
  for (const l of db.tables?.LAYER?.entries || []) layers.set(l.name, normLayer(l, 'dwg'));
  const blocks = new Map();
  let modelEntities = null;
  for (const b of db.tables?.BLOCK_RECORD?.entries || []) {
    if (isModelName(b.name)) {
      modelEntities = b.entities || [];
      continue;
    }
    if (typeof b.name === 'string' && b.name.toLowerCase().startsWith('*paper_space')) continue;
    blocks.set(b.name, { name: b.name, base: b.basePoint || { x: 0, y: 0, z: 0 }, entities: b.entities || [] });
  }
  if (modelEntities === null) modelEntities = db.entities || [];
  return {
    source: 'dwg',
    angleUnit: 'rad',
    layers,
    ltypes: normLtypes(db.tables?.LTYPE?.entries),
    blocks,
    entities: modelEntities,
    ltscale: db.header?.LTSCALE ?? 1,
    insUnits: db.header?.INSUNITS,
  };
}

export function fromDxfJson(d) {
  const layers = new Map();
  for (const l of d.tables?.LAYER?.entries || []) layers.set(l.name, normLayer(l, 'dxf'));
  const blocks = new Map();
  for (const [name, b] of Object.entries(d.blocks || {})) {
    if (isModelName(name) || name.toLowerCase().startsWith('*paper_space')) continue;
    blocks.set(name, { name, base: b.position || { x: 0, y: 0, z: 0 }, entities: b.entities || [] });
  }
  return {
    source: 'dxf',
    angleUnit: 'deg',
    layers,
    ltypes: normLtypes(d.tables?.LTYPE?.entries),
    blocks,
    entities: d.entities || [],
    ltscale: d.header?.$LTSCALE ?? 1,
    insUnits: d.header?.$INSUNITS,
  };
}
