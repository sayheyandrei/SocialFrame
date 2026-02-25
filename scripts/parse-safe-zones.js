#!/usr/bin/env node
/**
 * Parses safe_zones_required.csv and outputs safeZones JSON for data.json
 * Usage: node parse-safe-zones.js < path/to/safe_zones_required.csv
 */
const fs = require('fs');
const path = require('path');

const csvPath = process.argv[2] || path.join(__dirname, '../../../../Downloads/Images/safe_zones_required.csv');
const csv = fs.readFileSync(csvPath, 'utf8');
const lines = csv.trim().split('\n');
const header = lines[0].split(',');
const rows = lines.slice(1).map(line => line.split(',').map(s => s.trim()));

const safeZones = {};
const idx = (name) => header.indexOf(name);

rows.forEach(parts => {
  const network = parts[idx('network')];
  const sizeKey = parts[idx('size_key')];
  const zoneName = parts[idx('zone_name')];
  const zoneType = parts[idx('zone_type')];
  const shape = parts[idx('shape')];
  const cw = parseFloat(parts[idx('canvas_width_px')]) || 0;
  const ch = parseFloat(parts[idx('canvas_height_px')]) || 0;
  const leftPx = parseFloat(parts[idx('left_px')]) || 0;
  const topPx = parseFloat(parts[idx('top_px')]) || 0;
  const widthPx = parseFloat(parts[idx('width_px')]) || 0;
  const heightPx = parseFloat(parts[idx('height_px')]) || 0;
  const leftPct = parseFloat(parts[idx('left_pct')]) || 0;
  const topPct = parseFloat(parts[idx('top_pct')]) || 0;
  const widthPct = parseFloat(parts[idx('width_pct')]) || 0;
  const heightPct = parseFloat(parts[idx('height_pct')]) || 0;

  if (!safeZones[network]) safeZones[network] = {};
  if (!safeZones[network][sizeKey]) safeZones[network][sizeKey] = [];

  let zone;
  if (zoneType === 'safeArea') {
    zone = {
      type: 'safeArea',
      insetsPx: {
        left: leftPx,
        top: topPx,
        right: cw - leftPx - widthPx,
        bottom: ch - topPx - heightPx
      },
      label: zoneName,
      shape: 'rect'
    };
  } else if (zoneType === 'guide') {
    zone = {
      type: 'guide',
      rectPx: { x: leftPx, y: topPx, w: widthPx, h: heightPx },
      label: zoneName,
      shape: 'rect'
    };
  } else if (zoneType === 'avatar' && shape === 'circle') {
    zone = {
      type: 'avatar',
      rectPx: { x: leftPx, y: topPx, w: widthPx, h: heightPx },
      shape: 'circle',
      label: zoneName
    };
  } else {
    zone = {
      type: zoneType,
      left: leftPct / 100,
      top: topPct / 100,
      width: widthPct / 100,
      height: heightPct / 100,
      shape: 'rect',
      label: zoneName
    };
  }
  safeZones[network][sizeKey].push(zone);
});

console.log(JSON.stringify(safeZones, null, 2));
