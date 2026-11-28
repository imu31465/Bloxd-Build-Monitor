# Changed — Bundle Modifications Report (Part 056 / 154)

- **Updated at**: `2026-11-28T21:24 JST`
- **Part**: `56 / 154` (**441** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 055](part-055.md) · [Part 057 →](part-057.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (yteou.5361c997 → welxxc.ffac0572 · continued)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (1438 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1309. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14052` → after: `L14052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14052) · [Before (L14052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14052)

```diff
-           return `def Camera "${md}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Fd}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${dd.minZ.toPrecision(Od.precision)}, ${dd.maxZ.toPrecision(Od.precision)})\n\t\t\tfloat focalLength  … [truncated]
+           return `def Camera "${Mb}"\n\t\t{\n\t\t\tmatrix4d xformOp:transform = ${Hb}\n\t\t\tuniform token[] xformOpOrder = ["xformOp:transform"]\n\n\t\t\tfloat2 clippingRange = (${bb.minZ.toPrecision(wb.precision)}, ${bb.maxZ.toPrecision(wb.precision)})\n\t\t\tfloat focalLength  … [truncated]
```

#### 1310. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14062` → after: `L14062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14062) · [Before (L14062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14062)

```diff
-         return `\n    def "Materials"\n{\n${Wd.join("")}\n}\n\n`
+         return `\n    def "Materials"\n{\n${eb.join("")}\n}\n\n`
```

#### 1311. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14070` → after: `L14070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14070) · [Before (L14070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14070)

```diff
-         if (Fd && wX(Fd.mimeType) && Fd.mimeType === md) Xd[`textures/Texture_${Wd}.${Od}`] = new Uint8Array(Fd.data);
+         if (Hb && zV(Hb.mimeType) && Hb.mimeType === Mb) Vb[`textures/Texture_${eb}.${wb}`] = new Uint8Array(Hb.data);
```

#### 1312. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14073` → after: `L14073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14073) · [Before (L14073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14073)

```diff
-             Rd = await (0, Yd.h)(dd),
+             pb = await (0, hb.d)(bb),
```

#### 1313. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14075` → after: `L14075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14075) · [Before (L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14075)

```diff
-           Xd[`textures/Texture_${Wd}.${Od}`] = new Uint8Array(Kd).slice()
+           Vb[`textures/Texture_${eb}.${wb}`] = new Uint8Array(gb).slice()
```

#### 1314. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14098` → after: `L14098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14098) · [Before (L14098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14098)

```diff
-     var xX = md(43059);
+     var rV = Mb(42781);
```

#### 1315. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14109` → after: `L14109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14109) · [Before (L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14109)

```diff
-           Od && (Fd = Fd ? new xX.e("animation-range", Math.min(Fd.from, Od.from), Math.max(Fd.to, Od.to)) : Od)
+           wb && (Hb = Hb ? new rV.c("animation-range", Math.min(Hb.from, wb.from), Math.max(Hb.to, wb.to)) : wb)
```

#### 1316. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14118` → after: `L14118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14118) · [Before (L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14118)

```diff
-         return hd += "HIERARCHY\n", hd += this._ExportHierarchy(Xd, 0), hd += "MOTION\n", hd += `Frames: ${Kd}\n`, hd += `Frame Time: ${Rd.toFixed(6)}\n`, hd += this._ExportMotionData(Xd, Kd, 0, Wd), hd
+         return lb += "HIERARCHY\n", lb += this._ExportHierarchy(Vb, 0), lb += "MOTION\n", lb += `Frames: ${gb}\n`, lb += `Frame Time: ${pb.toFixed(6)}\n`, lb += this._ExportMotionData(Vb, gb, 0, eb), lb
```

#### 1317. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14151` → after: `L14151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14151) · [Before (L14151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14151)

```diff
-             md += `${Wd}End Site\n`, md += `${Wd}{\n`;
+             Mb += `${eb}End Site\n`, Mb += `${eb}{\n`;
```

#### 1318. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14153` → after: `L14153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14153) · [Before (L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14153)

```diff
-             md += `${Wd}    OFFSET ${Od.x.toFixed(6)} ${Od.y.toFixed(6)} ${Od.z.toFixed(6)}\n`, md += `${Wd}}\n`
+             Mb += `${eb}    OFFSET ${wb.x.toFixed(6)} ${wb.y.toFixed(6)} ${wb.z.toFixed(6)}\n`, Mb += `${eb}}\n`
```

#### 1319. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14155` → after: `L14155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14155) · [Before (L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14155)

```diff
-             md += `${0===Od?"ROOT":`${Wd}JOINT`} ${dd.name}\n`, md += `${Wd}{\n`;
+             Mb += `${0===wb?"ROOT":`${eb}JOINT`} ${bb.name}\n`, Mb += `${eb}{\n`;
```

#### 1320. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14157` → after: `L14157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14157) · [Before (L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14157)

```diff
-             md += `${Wd}    OFFSET ${Rd.x.toFixed(6)} ${Rd.y.toFixed(6)} ${Rd.z.toFixed(6)}\n`;
+             Mb += `${eb}    OFFSET ${pb.x.toFixed(6)} ${pb.y.toFixed(6)} ${pb.z.toFixed(6)}\n`;
```

#### 1321. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14159` → after: `L14159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14159) · [Before (L14159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14159)

```diff
-             Fd.hasPositionChannels && Xd.push("Xposition", "Yposition", "Zposition"), Fd.hasRotationChannels && Xd.push("Zrotation", "Xrotation", "Yrotation"), Xd.length > 0 && (md += `${Wd}    CHANNELS ${Xd.length} ${Xd.join(" ")}\n`), Fd.children.length > 0 && (md += this._Expo … [truncated]
+             Hb.hasPositionChannels && Vb.push("Xposition", "Yposition", "Zposition"), Hb.hasRotationChannels && Vb.push("Zrotation", "Xrotation", "Yrotation"), Vb.length > 0 && (Mb += `${eb}    CHANNELS ${Vb.length} ${Vb.join(" ")}\n`), Hb.children.length > 0 && (Mb += this._Expo … [truncated]
```

#### 1322. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14172` → after: `L14172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14172) · [Before (L14172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14172)

```diff
-           return Wd.Cq.Zero()
+           return eb.YC.Zero()
```

#### 1323. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14199` → after: `L14199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14199) · [Before (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14199)

```diff
-         if (0 === dd.length) return Wd.Cq.Zero();
+         if (0 === bb.length) return eb.YC.Zero();
```

#### 1324. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14212` → after: `L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14212) · [Before (L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14212)

```diff
-         return hd > rm.b ? (Rd = Math.atan2(md[6], md[10]), Xd = Math.atan2(-md[2], hd), Kd = Math.atan2(md[1], md[0])) : (Rd = Math.atan2(-md[9], md[5]), Xd = Math.atan2(-md[2], hd), Kd = 0), new Wd.Cq(Fd.Tools.ToDegrees(Rd), Fd.Tools.ToDegrees(Xd), Fd.Tools.ToDegrees(Kd))
+         return lb > AM.e ? (pb = Math.atan2(Mb[6], Mb[10]), Vb = Math.atan2(-Mb[2], lb), gb = Math.atan2(Mb[1], Mb[0])) : (pb = Math.atan2(-Mb[9], Mb[5]), Vb = Math.atan2(-Mb[2], lb), gb = 0), new eb.YC(Hb.Tools.ToDegrees(pb), Hb.Tools.ToDegrees(Vb), Hb.Tools.ToDegrees(gb))
```

#### 1325. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14257` → after: `L14257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14257) · [Before (L14257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14257)

```diff
-       const Od = "function" === typeof dd ? dd : dd?.constructor,
+       const wb = "function" === typeof bb ? bb : bb?.constructor,
```

#### 1326. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14299` → after: `L14299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14299) · [Before (L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14299)

```diff
-       return Od ? `${Od}:${dd}` : dd
+       return wb ? `${wb}:${bb}` : bb
```

#### 1327. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14336` → after: `L14336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14336) · [Before (L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14336)

```diff
-         if (!Number.isFinite(dd)) throw new Error(`Cannot format non-finite number: ${dd}`);
+         if (!Number.isFinite(bb)) throw new Error(`Cannot format non-finite number: ${bb}`);
```

#### 1328. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14346` → after: `L14346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14346) · [Before (L14346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14346)

```diff
-         if (Wd && void 0 === Od.fixedDecimals && (vd = vd.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(vd)) throw new Error(`Scientific notation not allowed in XML output: ${vd}`);
+         if (eb && void 0 === wb.fixedDecimals && (Lb = Lb.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "").replace(/\.$/, "")), /[eE]/.test(Lb)) throw new Error(`Scientific notation not allowed in XML output: ${Lb}`);
```

#### 1329. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14509` → after: `L14509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14509) · [Before (L14509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14509)

```diff
-         if (Wd.closed) throw new Error(`att() after start tag closed for <${Wd.name}>`);
+         if (eb.closed) throw new Error(`att() after start tag closed for <${eb.name}>`);
```

#### 1330. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14512` → after: `L14512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14512) · [Before (L14512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14512)

```diff
-           else if (dd) this._registerNamespace(Wd, Od, md), this._writeAttStr(`${dd}:${Od}`, md);
+           else if (bb) this._registerNamespace(eb, wb, Mb), this._writeAttStr(`${bb}:${wb}`, Mb);
```

#### 1331. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14521` → after: `L14521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14521) · [Before (L14521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14521)

```diff
-           Fd = `${this._ensurePrefixDeclared(Wd,dd)}:${Od}`
+           Hb = `${this._ensurePrefixDeclared(eb,bb)}:${wb}`
```

#### 1332. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14530` → after: `L14530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14530) · [Before (L14530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14530)

```diff
-           Wd = `${this._lookupPrefix(dd)??dd}:${Od}`
+           eb = `${this._lookupPrefix(bb)??bb}:${wb}`
```

#### 1333. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14581` → after: `L14581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14581) · [Before (L14581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14581)

```diff
-         if (Od === dK.Xml || Od === dK.Xmlns) throw new Error(`reserved prefix '${Od}'`);
+         if (wb === kV.Xml || wb === kV.Xmlns) throw new Error(`reserved prefix '${wb}'`);
```

#### 1334. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14583` → after: `L14583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14583) · [Before (L14583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14583)

```diff
-         if (Wd && Wd !== md) throw new Error(`prefix '${Od}' already bound to a different namespace`);
+         if (eb && eb !== Mb) throw new Error(`prefix '${wb}' already bound to a different namespace`);
```

#### 1335. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14596` → after: `L14596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14596) · [Before (L14596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14596)

```diff
-         if (dd.closed) throw new Error(`can not declare namespace after start tag closed for <${dd.name}>`);
+         if (bb.closed) throw new Error(`can not declare namespace after start tag closed for <${bb.name}>`);
```

#### 1336. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14598` → after: `L14598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14598) · [Before (L14598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14598)

```diff
-         return this._writeAttStr(`${dK.Xmlns}:${Wd}`, Od), this._registerNamespace(dd, Wd, Od), Wd
+         return this._writeAttStr(`${kV.Xmlns}:${eb}`, wb), this._registerNamespace(bb, eb, wb), eb
```

#### 1337. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14694` → after: `L14694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14694) · [Before (L14694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14694)

```diff
-           (0, Ud.h)(null, dd = {
+           (0, Kb.i)(null, bb = {
```

#### 1338. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14705` → after: `L14705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14705) · [Before (L14705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14705)

```diff
-           }), (0, Ud.k)(Od, Wd)
+           }), (0, Kb.m)(wb, eb)
```

#### 1339. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14720` → after: `L14720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14720) · [Before (L14720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14720)

```diff
-             this.ext = (0, Ud.k)(this, Xd, void 0), this.ct = ((0, Ud.k)(this, Kd), (0, Ud.k)(this, hd, void 0)), (0, Ud.k)(this, vd), this.ext = dd, this.ct = Od
+             this.ext = (0, Kb.m)(this, Vb, void 0), this.ct = ((0, Kb.m)(this, gb), (0, Kb.m)(this, lb, void 0)), (0, Kb.m)(this, Lb), this.ext = bb, this.ct = wb
```

#### 1340. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14735` → after: `L14735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14735) · [Before (L14735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14735)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1341. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14748` → after: `L14748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14748) · [Before (L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14748)

```diff
-           }, Xd, Kd), (0, Ud.h)(null, null, Wd, {
+           }, Vb, gb), (0, Kb.i)(null, null, eb, {
```

#### 1342. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14761` → after: `L14761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14761) · [Before (L14761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14761)

```diff
-           }, hd, vd), (0, Ud.h)(null, dd = {
+           }, lb, Lb), (0, Kb.i)(null, bb = {
```

#### 1343. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14772` → after: `L14772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14772) · [Before (L14772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14772)

```diff
-           }), (0, Ud.k)(Od, Rd)
+           }), (0, Kb.m)(wb, pb)
```

#### 1344. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14788` → after: `L14788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14788) · [Before (L14788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14788)

```diff
-           (0, Ud.h)(null, dd = {
+           (0, Kb.i)(null, bb = {
```

#### 1345. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14799` → after: `L14799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14799) · [Before (L14799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14799)

```diff
-           }), (0, Ud.k)(Od, Wd)
+           }), (0, Kb.m)(wb, eb)
```

#### 1346. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14816` → after: `L14816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14816) · [Before (L14816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14816)

```diff
-             this.id = (0, Ud.k)(this, Kd, void 0), this.type = ((0, Ud.k)(this, hd), (0, Ud.k)(this, vd, void 0)), this.target = ((0, Ud.k)(this, Qd), (0, Ud.k)(this, td, void 0)), (0, Ud.k)(this, od), this.id = dd, this.type = Od, this.target = md
+             this.id = (0, Kb.m)(this, gb, void 0), this.type = ((0, Kb.m)(this, lb), (0, Kb.m)(this, Lb, void 0)), this.target = ((0, Kb.m)(this, Ib), (0, Kb.m)(this, Ob, void 0)), (0, Kb.m)(this, Ub), this.id = bb, this.type = wb, this.target = Mb
```

#### 1347. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14827` → after: `L14827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14827) · [Before (L14827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14827)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1348. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14840` → after: `L14840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14840) · [Before (L14840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14840)

```diff
-           }, Kd, hd), (0, Ud.h)(null, null, Wd, {
+           }, gb, lb), (0, Kb.i)(null, null, eb, {
```

#### 1349. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14853` → after: `L14853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14853) · [Before (L14853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14853)

```diff
-           }, vd, Qd), (0, Ud.h)(null, null, Fd, {
+           }, Lb, Ib), (0, Kb.i)(null, null, Hb, {
```

#### 1350. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14866` → after: `L14866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14866) · [Before (L14866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14866)

```diff
-           }, td, od), (0, Ud.h)(null, dd = {
+           }, Ob, Ub), (0, Kb.i)(null, bb = {
```

#### 1351. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14877` → after: `L14877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14877) · [Before (L14877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14877)

```diff
-           }), (0, Ud.k)(Od, Xd)
+           }), (0, Kb.m)(wb, Vb)
```

#### 1352. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14918` → after: `L14918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14918) · [Before (L14918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14918)

```diff
-             this.unit = (0, Ud.k)(this, Kd, KK.millimeter), this.requiredextensions = ((0, Ud.k)(this, hd), (0, Ud.k)(this, vd, void 0)), this.recommendedextensions = ((0, Ud.k)(this, Qd), (0, Ud.k)(this, td, void 0)), this.metadata = (0, Ud.k)(this, od)
+             this.unit = (0, Kb.m)(this, gb, Vg.millimeter), this.requiredextensions = ((0, Kb.m)(this, lb), (0, Kb.m)(this, Lb, void 0)), this.recommendedextensions = ((0, Kb.m)(this, Ib), (0, Kb.m)(this, Ob, void 0)), this.metadata = (0, Kb.m)(this, Ub)
```

#### 1353. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14929` → after: `L14929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14929) · [Before (L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14929)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1354. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14942` → after: `L14942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14942) · [Before (L14942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14942)

```diff
-           }, Kd, hd), (0, Ud.h)(null, null, Wd, {
+           }, gb, lb), (0, Kb.i)(null, null, eb, {
```

#### 1355. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14955` → after: `L14955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14955) · [Before (L14955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14955)

```diff
-           }, vd, Qd), (0, Ud.h)(null, null, Fd, {
+           }, Lb, Ib), (0, Kb.i)(null, null, Hb, {
```

#### 1356. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14968` → after: `L14968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14968) · [Before (L14968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14968)

```diff
-           }, td, od), (0, Ud.h)(null, dd = {
+           }, Ob, Ub), (0, Kb.i)(null, bb = {
```

#### 1357. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14980` → after: `L14980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14980) · [Before (L14980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14980)

```diff
-         })(), Od.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Ud.k)(Od, Xd), Od
+         })(), wb.KnownMeta = ["Title", "Designer", "Description", "Copyright", "LicenseTerms", "Rating", "CreationDate", "ModificationDate", "Application"], (0, Kb.m)(wb, Vb), wb
```

#### 1358. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L14996` → after: `L14996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R14996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L14996) · [Before (L14996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L14996)

```diff
-             this.name = (0, Ud.k)(this, Kd, void 0), this.preserve = ((0, Ud.k)(this, hd), (0, Ud.k)(this, vd, void 0)), this.type = ((0, Ud.k)(this, Qd), (0, Ud.k)(this, td, void 0)), this.value = (0, Ud.k)(this, od), this.name = dd, this.value = Od, this.preserve = md, this.typ … [truncated]
+             this.name = (0, Kb.m)(this, gb, void 0), this.preserve = ((0, Kb.m)(this, lb), (0, Kb.m)(this, Lb, void 0)), this.type = ((0, Kb.m)(this, Ib), (0, Kb.m)(this, Ob, void 0)), this.value = (0, Kb.m)(this, Ub), this.name = bb, this.value = wb, this.preserve = Mb, this.typ … [truncated]
```

#### 1359. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15007` → after: `L15007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15007) · [Before (L15007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15007)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1360. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15020` → after: `L15020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15020) · [Before (L15020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15020)

```diff
-           }, Kd, hd), (0, Ud.h)(null, null, Wd, {
+           }, gb, lb), (0, Kb.i)(null, null, eb, {
```

#### 1361. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15033` → after: `L15033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15033) · [Before (L15033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15033)

```diff
-           }, vd, Qd), (0, Ud.h)(null, null, Fd, {
+           }, Lb, Ib), (0, Kb.i)(null, null, Hb, {
```

#### 1362. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15046` → after: `L15046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15046) · [Before (L15046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15046)

```diff
-           }, td, od), (0, Ud.h)(null, dd = {
+           }, Ob, Ub), (0, Kb.i)(null, bb = {
```

#### 1363. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15057` → after: `L15057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15057) · [Before (L15057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15057)

```diff
-           }), (0, Ud.k)(Od, Xd)
+           }), (0, Kb.m)(wb, Vb)
```

#### 1364. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15073` → after: `L15073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15073) · [Before (L15073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15073)

```diff
-           (0, Ud.h)(null, dd = {
+           (0, Kb.i)(null, bb = {
```

#### 1365. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15084` → after: `L15084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15084) · [Before (L15084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15084)

```diff
-           }), (0, Ud.k)(Od, Wd)
+           }), (0, Kb.m)(wb, eb)
```

#### 1366. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15100` → after: `L15100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15100) · [Before (L15100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15100)

```diff
-           (0, Ud.h)(null, dd = {
+           (0, Kb.i)(null, bb = {
```

#### 1367. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15111` → after: `L15111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15111) · [Before (L15111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15111)

```diff
-           }), (0, Ud.k)(Od, Wd)
+           }), (0, Kb.m)(wb, eb)
```

#### 1368. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15137` → after: `L15137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15137) · [Before (L15137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15137)

```diff
-             this.id = (0, Ud.k)(this, td, void 0), this.type = ((0, Ud.k)(this, od), (0, Ud.k)(this, Nd, void 0)), this.thumbnail = ((0, Ud.k)(this, qd), (0, Ud.k)(this, Hd, void 0)), this.partnumber = ((0, Ud.k)(this, yd), (0, Ud.k)(this, bd, void 0)), this.name = ((0, Ud.k)(thi … [truncated]
+             this.id = (0, Kb.m)(this, Ob, void 0), this.type = ((0, Kb.m)(this, Ub), (0, Kb.m)(this, tb, void 0)), this.thumbnail = ((0, Kb.m)(this, Cb), (0, Kb.m)(this, Eb, void 0)), this.partnumber = ((0, Kb.m)(this, Fb), (0, Kb.m)(this, Bb, void 0)), this.name = ((0, Kb.m)(thi … [truncated]
```

#### 1369. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15156` → after: `L15156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15156) · [Before (L15156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15156)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1370. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15169` → after: `L15169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15169) · [Before (L15169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15169)

```diff
-           }, td, od), (0, Ud.h)(null, null, Wd, {
+           }, Ob, Ub), (0, Kb.i)(null, null, eb, {
```

#### 1371. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15182` → after: `L15182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15182) · [Before (L15182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15182)

```diff
-           }, Nd, qd), (0, Ud.h)(null, null, Fd, {
+           }, tb, Cb), (0, Kb.i)(null, null, Hb, {
```

#### 1372. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15195` → after: `L15195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15195) · [Before (L15195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15195)

```diff
-           }, Hd, yd), (0, Ud.h)(null, null, Rd, {
+           }, Eb, Fb), (0, Kb.i)(null, null, pb, {
```

#### 1373. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15208` → after: `L15208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15208) · [Before (L15208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15208)

```diff
-           }, bd, Td), (0, Ud.h)(null, null, Xd, {
+           }, Bb, sb), (0, Kb.i)(null, null, Vb, {
```

#### 1374. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15221` → after: `L15221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15221) · [Before (L15221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15221)

```diff
-           }, pd, Yd), (0, Ud.h)(null, null, Kd, {
+           }, mb, hb), (0, Kb.i)(null, null, gb, {
```

#### 1375. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15234` → after: `L15234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15234) · [Before (L15234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15234)

```diff
-           }, gd, wd), (0, Ud.h)(null, null, hd, {
+           }, zb, Xb), (0, Kb.i)(null, null, lb, {
```

#### 1376. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15247` → after: `L15247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15247) · [Before (L15247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15247)

```diff
-           }, Ed, Jd), (0, Ud.h)(null, dd = {
+           }, xb, jb), (0, Kb.i)(null, bb = {
```

#### 1377. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15258` → after: `L15258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15258) · [Before (L15258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15258)

```diff
-           }), (0, Ud.k)(Od, Qd)
+           }), (0, Kb.m)(wb, Ib)
```

#### 1378. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15274` → after: `L15274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15274) · [Before (L15274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15274)

```diff
-           (0, Ud.h)(null, dd = {
+           (0, Kb.i)(null, bb = {
```

#### 1379. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15285` → after: `L15285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15285) · [Before (L15285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15285)

```diff
-           }), (0, Ud.k)(Od, Wd)
+           }), (0, Kb.m)(wb, eb)
```

#### 1380. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15301` → after: `L15301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15301) · [Before (L15301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15301)

```diff
-           (0, Ud.h)(null, dd = {
+           (0, Kb.i)(null, bb = {
```

#### 1381. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15312` → after: `L15312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15312) · [Before (L15312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15312)

```diff
-           }), (0, Ud.k)(Od, Wd)
+           }), (0, Kb.m)(wb, eb)
```

#### 1382. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15332` → after: `L15332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15332) · [Before (L15332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15332)

```diff
-             this.x = (0, Ud.k)(this, Kd, void 0), this.y = ((0, Ud.k)(this, hd), (0, Ud.k)(this, vd, void 0)), this.z = ((0, Ud.k)(this, Qd), (0, Ud.k)(this, td, void 0)), (0, Ud.k)(this, od), this.x = dd, this.y = Od, this.z = md
+             this.x = (0, Kb.m)(this, gb, void 0), this.y = ((0, Kb.m)(this, lb), (0, Kb.m)(this, Lb, void 0)), this.z = ((0, Kb.m)(this, Ib), (0, Kb.m)(this, Ob, void 0)), (0, Kb.m)(this, Ub), this.x = bb, this.y = wb, this.z = Mb
```

#### 1383. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15343` → after: `L15343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15343) · [Before (L15343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15343)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1384. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15356` → after: `L15356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15356) · [Before (L15356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15356)

```diff
-           }, Kd, hd), (0, Ud.h)(null, null, Wd, {
+           }, gb, lb), (0, Kb.i)(null, null, eb, {
```

#### 1385. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15369` → after: `L15369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15369) · [Before (L15369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15369)

```diff
-           }, vd, Qd), (0, Ud.h)(null, null, Fd, {
+           }, Lb, Ib), (0, Kb.i)(null, null, Hb, {
```

#### 1386. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15382` → after: `L15382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15382) · [Before (L15382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15382)

```diff
-           }, td, od), (0, Ud.h)(null, dd = {
+           }, Ob, Ub), (0, Kb.i)(null, bb = {
```

#### 1387. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15393` → after: `L15393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15393) · [Before (L15393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15393)

```diff
-           }), (0, Ud.k)(Od, Xd)
+           }), (0, Kb.m)(wb, Vb)
```

#### 1388. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15409` → after: `L15409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15409) · [Before (L15409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15409)

```diff
-           (0, Ud.h)(null, dd = {
+           (0, Kb.i)(null, bb = {
```

#### 1389. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15420` → after: `L15420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15420) · [Before (L15420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15420)

```diff
-           }), (0, Ud.k)(Od, Wd)
+           }), (0, Kb.m)(wb, eb)
```

#### 1390. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15445` → after: `L15445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15445) · [Before (L15445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15445)

```diff
-             this.v1 = (0, Ud.k)(this, td, void 0), this.v2 = ((0, Ud.k)(this, od), (0, Ud.k)(this, Nd, void 0)), this.v3 = ((0, Ud.k)(this, qd), (0, Ud.k)(this, Hd, void 0)), this.p1 = ((0, Ud.k)(this, yd), (0, Ud.k)(this, bd, void 0)), this.p2 = ((0, Ud.k)(this, Td), (0, Ud.k)(t … [truncated]
+             this.v1 = (0, Kb.m)(this, Ob, void 0), this.v2 = ((0, Kb.m)(this, Ub), (0, Kb.m)(this, tb, void 0)), this.v3 = ((0, Kb.m)(this, Cb), (0, Kb.m)(this, Eb, void 0)), this.p1 = ((0, Kb.m)(this, Fb), (0, Kb.m)(this, Bb, void 0)), this.p2 = ((0, Kb.m)(this, sb), (0, Kb.m)(t … [truncated]
```

#### 1391. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15464` → after: `L15464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15464) · [Before (L15464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15464)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1392. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15477` → after: `L15477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15477) · [Before (L15477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15477)

```diff
-           }, td, od), (0, Ud.h)(null, null, Wd, {
+           }, Ob, Ub), (0, Kb.i)(null, null, eb, {
```

#### 1393. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15490` → after: `L15490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15490) · [Before (L15490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15490)

```diff
-           }, Nd, qd), (0, Ud.h)(null, null, Fd, {
+           }, tb, Cb), (0, Kb.i)(null, null, Hb, {
```

#### 1394. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15503` → after: `L15503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15503) · [Before (L15503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15503)

```diff
-           }, Hd, yd), (0, Ud.h)(null, null, Rd, {
+           }, Eb, Fb), (0, Kb.i)(null, null, pb, {
```

#### 1395. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15516` → after: `L15516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15516) · [Before (L15516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15516)

```diff
-           }, bd, Td), (0, Ud.h)(null, null, Xd, {
+           }, Bb, sb), (0, Kb.i)(null, null, Vb, {
```

#### 1396. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15529` → after: `L15529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15529) · [Before (L15529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15529)

```diff
-           }, pd, Yd), (0, Ud.h)(null, null, Kd, {
+           }, mb, hb), (0, Kb.i)(null, null, gb, {
```

#### 1397. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15542` → after: `L15542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15542) · [Before (L15542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15542)

```diff
-           }, gd, wd), (0, Ud.h)(null, null, hd, {
+           }, zb, Xb), (0, Kb.i)(null, null, lb, {
```

#### 1398. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15555` → after: `L15555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15555) · [Before (L15555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15555)

```diff
-           }, Ed, Jd), (0, Ud.h)(null, dd = {
+           }, xb, jb), (0, Kb.i)(null, bb = {
```

#### 1399. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15566` → after: `L15566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15566) · [Before (L15566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15566)

```diff
-           }), (0, Ud.k)(Od, Qd)
+           }), (0, Kb.m)(wb, Ib)
```

#### 1400. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15582` → after: `L15582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15582) · [Before (L15582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15582)

```diff
-           (0, Ud.h)(null, dd = {
+           (0, Kb.i)(null, bb = {
```

#### 1401. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15593` → after: `L15593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15593) · [Before (L15593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15593)

```diff
-           }), (0, Ud.k)(Od, Wd)
+           }), (0, Kb.m)(wb, eb)
```

#### 1402. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15608` → after: `L15608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15608) · [Before (L15608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15608)

```diff
-             this.objectid = (0, Ud.k)(this, Xd, void 0), this.transform = ((0, Ud.k)(this, Kd), (0, Ud.k)(this, hd, void 0)), (0, Ud.k)(this, vd), this.objectid = dd, this.transform = Od
+             this.objectid = (0, Kb.m)(this, Vb, void 0), this.transform = ((0, Kb.m)(this, gb), (0, Kb.m)(this, lb, void 0)), (0, Kb.m)(this, Lb), this.objectid = bb, this.transform = wb
```

#### 1403. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15618` → after: `L15618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15618) · [Before (L15618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15618)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1404. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15631` → after: `L15631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15631) · [Before (L15631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15631)

```diff
-           }, Xd, Kd), (0, Ud.h)(null, null, Wd, {
+           }, Vb, gb), (0, Kb.i)(null, null, eb, {
```

#### 1405. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15644` → after: `L15644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15644) · [Before (L15644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15644)

```diff
-           }, hd, vd), (0, Ud.h)(null, dd = {
+           }, lb, Lb), (0, Kb.i)(null, bb = {
```

#### 1406. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15655` → after: `L15655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15655) · [Before (L15655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15655)

```diff
-           }), (0, Ud.k)(Od, Rd)
+           }), (0, Kb.m)(wb, pb)
```

#### 1407. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15668` → after: `L15668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15668) · [Before (L15668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15668)

```diff
-             this.id = (0, Ud.k)(this, Rd, void 0), this.base = ((0, Ud.k)(this, Xd), []), this.id = dd
+             this.id = (0, Kb.m)(this, pb, void 0), this.base = ((0, Kb.m)(this, Vb), []), this.id = bb
```

#### 1408. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15675` → after: `L15675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15675) · [Before (L15675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15675)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1409. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15688` → after: `L15688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15688) · [Before (L15688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15688)

```diff
-           }, Rd, Xd), (0, Ud.h)(null, dd = {
+           }, pb, Vb), (0, Kb.i)(null, bb = {
```

#### 1410. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15699` → after: `L15699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15699) · [Before (L15699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15699)

```diff
-           }), (0, Ud.k)(Od, Fd)
+           }), (0, Kb.m)(wb, Hb)
```

#### 1411. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15714` → after: `L15714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15714) · [Before (L15714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15714)

```diff
-             this.name = (0, Ud.k)(this, Xd, void 0), this.displaycolor = ((0, Ud.k)(this, Kd), (0, Ud.k)(this, hd, void 0)), (0, Ud.k)(this, vd), this.name = dd, this.displaycolor = Od
+             this.name = (0, Kb.m)(this, Vb, void 0), this.displaycolor = ((0, Kb.m)(this, gb), (0, Kb.m)(this, lb, void 0)), (0, Kb.m)(this, Lb), this.name = bb, this.displaycolor = wb
```

#### 1412. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15723` → after: `L15723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15723) · [Before (L15723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15723)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1413. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15736` → after: `L15736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15736) · [Before (L15736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15736)

```diff
-           }, Xd, Kd), (0, Ud.h)(null, null, Wd, {
+           }, Vb, gb), (0, Kb.i)(null, null, eb, {
```

#### 1414. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15749` → after: `L15749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15749) · [Before (L15749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15749)

```diff
-           }, hd, vd), (0, Ud.h)(null, dd = {
+           }, lb, Lb), (0, Kb.i)(null, bb = {
```

#### 1415. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15760` → after: `L15760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15760) · [Before (L15760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15760)

```diff
-           }), (0, Ud.k)(Od, Rd)
+           }), (0, Kb.m)(wb, pb)
```

#### 1416. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15776` → after: `L15776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15776) · [Before (L15776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15776)

```diff
-           (0, Ud.h)(null, dd = {
+           (0, Kb.i)(null, bb = {
```

#### 1417. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15787` → after: `L15787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15787) · [Before (L15787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15787)

```diff
-           }), (0, Ud.k)(Od, Wd)
+           }), (0, Kb.m)(wb, eb)
```

#### 1418. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15804` → after: `L15804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15804) · [Before (L15804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15804)

```diff
-             this.objectid = (0, Ud.k)(this, Kd, void 0), this.transform = ((0, Ud.k)(this, hd), (0, Ud.k)(this, vd, void 0)), this.partnumber = ((0, Ud.k)(this, Qd), (0, Ud.k)(this, td, void 0)), this.metadatagroup = (0, Ud.k)(this, od), this.objectid = dd, this.transform = Od, t … [truncated]
+             this.objectid = (0, Kb.m)(this, gb, void 0), this.transform = ((0, Kb.m)(this, lb), (0, Kb.m)(this, Lb, void 0)), this.partnumber = ((0, Kb.m)(this, Ib), (0, Kb.m)(this, Ob, void 0)), this.metadatagroup = (0, Kb.m)(this, Ub), this.objectid = bb, this.transform = wb, t … [truncated]
```

#### 1419. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15816` → after: `L15816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15816) · [Before (L15816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15816)

```diff
-           })], (0, Ud.h)(null, null, md, {
+           })], (0, Kb.i)(null, null, Mb, {
```

#### 1420. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15829` → after: `L15829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15829) · [Before (L15829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15829)

```diff
-           }, Kd, hd), (0, Ud.h)(null, null, Wd, {
+           }, gb, lb), (0, Kb.i)(null, null, eb, {
```

#### 1421. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15842` → after: `L15842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15842) · [Before (L15842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15842)

```diff
-           }, vd, Qd), (0, Ud.h)(null, null, Fd, {
+           }, Lb, Ib), (0, Kb.i)(null, null, Hb, {
```

#### 1422. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15855` → after: `L15855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15855) · [Before (L15855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15855)

```diff
-           }, td, od), (0, Ud.h)(null, dd = {
+           }, Ob, Ub), (0, Kb.i)(null, bb = {
```

#### 1423. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15866` → after: `L15866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15866) · [Before (L15866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15866)

```diff
-           }), (0, Ud.k)(Od, Xd)
+           }), (0, Kb.m)(wb, Vb)
```

#### 1424. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15959` → after: `L15959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15959) · [Before (L15959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15959)

```diff
-           return `#${md}${Wd}${Fd}${Math.round(Math.min(255,Math.max(0,255*dd.a))).toString(16).padStart(2,"0").toUpperCase()}`
+           return `#${Mb}${eb}${Hb}${Math.round(Math.min(255,Math.max(0,255*bb.a))).toString(16).padStart(2,"0").toUpperCase()}`
```

#### 1425. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L15961` → after: `L15961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R15961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L15961) · [Before (L15961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L15961)

```diff
-         return `#${md}${Wd}${Fd}`
+         return `#${Mb}${eb}${Hb}`
```

#### 1426. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16012` → after: `L16012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16012) · [Before (L16012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16012)

```diff
-         const dd = `${NK}${qK}`;
+         const bb = `${Ug}${tg}`;
```

#### 1427. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16014` → after: `L16014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16014) · [Before (L16014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16014)

```diff
-           const Od = `/${dd}`;
+           const wb = `/${bb}`;
```

#### 1428. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16051` → after: `L16051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16051) · [Before (L16051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16051)

```diff
-         Fd(vd, yK, hd.contentTypes), Fd(vd, `${oK}${HK}`, hd.relationships), Fd(vd, `${NK}${qK}`, hd.model), vd.end()
+         Hb(Lb, Eg, lb.contentTypes), Hb(Lb, `${Og}${Cg}`, lb.relationships), Hb(Lb, `${Ug}${tg}`, lb.model), Lb.end()
```

#### 1429. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16103` → after: `L16103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16103) · [Before (L16103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16103)

```diff
-         md = md.filter((dd => dd instanceof oW.d || dd instanceof Nd.e));
+         Mb = Mb.filter((bb => bb instanceof Ie.e || bb instanceof tb.d));
```

#### 1430. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16110` → after: `L16110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16110) · [Before (L16110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16110)

```diff
-           if (dd instanceof Nd.e) {
+           if (bb instanceof tb.d) {
```

#### 1431. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16114` → after: `L16114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16114) · [Before (L16114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16114)

```diff
-           const Od = dd.name || `mesh${hd}`,
+           const wb = bb.name || `mesh${lb}`,
```

#### 1432. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16117` → after: `L16117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16117) · [Before (L16117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16117)

```diff
-             Qd = dd.ZE;
+             Ib = bb.oR;
```

#### 1433. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16124` → after: `L16124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16124) · [Before (L16124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16124)

```diff
-               const dd = td ? `${Od}` : `${Od}_${md}`,
+               const bb = Ob ? `${wb}` : `${wb}_${Mb}`,
```

#### 1434. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16131` → after: `L16131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16131) · [Before (L16131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16131)

```diff
-           const dd = this._groupBy(Kd, (dd => dd.ZRd));
+           const bb = this._groupBy(gb, (bb => bb.opb));
```

#### 1435. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16136` → after: `L16136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16136) · [Before (L16136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16136)

```diff
-                   Fd = Od.ZE;
+                   Hb = wb.oR;
```

#### 1436. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16153` → after: `L16153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16153) · [Before (L16153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16153)

```diff
-         const md = dd.jRd();
+         const Mb = bb.ipb();
```

#### 1437. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16190` → after: `L16190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16190) · [Before (L16190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16190)

```diff
-         const md = dd.multiplyToRef(MK._R_BJS_TO_3MF, Pd.d.Zero()).m;
+         const Mb = bb.multiplyToRef(Tg._R_BJS_TO_3MF, Nb.b.Zero()).m;
```

#### 1438. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L16197` → after: `L16197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R16197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/263.js#L16197) · [Before (L16197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/263.js#L16197)

```diff
-     }, MK._PositionKind = "position", MK._R_BJS_TO_3MF = Pd.d.RotationX(Math.PI / 2).multiply(Pd.d.Scaling(1, -1, 1))
+     }, Tg._PositionKind = "position", Tg._R_BJS_TO_3MF = Nb.b.RotationX(Math.PI / 2).multiply(Nb.b.Scaling(1, -1, 1))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (142 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L4)

```diff
-   38651: (dd, Od, md) => {
+   38313: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L8)

```diff
-     var Wd = md(38660);
+     var eb = Mb(38318);
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L17)

```diff
-     Fd.Instances = [], Fd.OnEnginesDisposedObservable = new Wd.c, Fd._LastCreatedScene = null, Fd.UseFallbackTexture = !0, Fd.FallbackTexture = ""
+     Hb.Instances = [], Hb.OnEnginesDisposedObservable = new eb.b, Hb._LastCreatedScene = null, Hb.UseFallbackTexture = !0, Hb.FallbackTexture = ""
```

#### 4. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L19)

```diff
-   38649: (dd, Od, md) => {
+   38308: (bb, wb, Mb) => {
```

#### 5. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L21)

```diff
-       b: () => Wd
+       c: () => eb
```

#### 6. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L37)

```diff
-   38665: (dd, Od, md) => {
+   38329: (bb, wb, Mb) => {
```

#### 7. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L43-L44` → after: `L41-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L41-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L41-L44) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L43-L44)

```diff
-       f: () => Rd,
-       j: () => Xd
+       g: () => lb,
+       i: () => eb,
+       k: () => pb,
+       l: () => Vb
```

#### 8. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L54-L55` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L54-L55) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L54-L55)

```diff
-       const Fd = dd.RRd(),
-         Rd = Od.RRd(),
+       const Hb = bb.ppb(),
+         pb = wb.ppb(),
```

#### 9. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L93)

```diff
-       Rd(dd, Od, md.RRd(), Wd), Fd(md)
+       pb(bb, wb, Mb.ppb(), eb), Hb(Mb)
```

#### 10. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L98)

```diff
-       const Wd = dd.RRd();
+       const eb = bb.ppb();
```

#### 11. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L103` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L103) · [Before (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L103)

```diff
-       const md = vd(dd, Od.RRd());
+       const Mb = Lb(bb, wb.ppb());
```

#### 12. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L108)

```diff
-       const md = dd.RRd(),
+       const Mb = bb.ppb(),
```

#### 13. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L166)

```diff
-   38636: (dd, Od, md) => {
+   38285: (bb, wb, Mb) => {
```

#### 14. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L168)

```diff
-       d: () => Hd,
+       b: () => Eb,
```

#### 15. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L170-L172` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L170) · [Before (L170-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L170-L172)

```diff
-       f: () => Yd,
-       h: () => bd,
-       i: () => td,
+       g: () => hb,
```

#### 16. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L174` → after: `L172-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L172-L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L174)

```diff
-       k: () => Nd
+       m: () => Ob,
+       o: () => Ub,
+       q: () => tb
```

#### 17. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L176-L182` → after: `L176-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L176-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L176-L182) · [Before (L176-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L176-L182)

```diff
-     var Wd = md(38644),
-       Fd = md(38647),
-       Rd = md(38649),
-       Xd = md(38651),
-       Kd = md(38663),
-       hd = md(38665),
-       vd = md(38669);
+     var eb = Mb(38294),
+       Hb = Mb(38299),
+       pb = Mb(38308),
+       Vb = Mb(38313),
+       gb = Mb(38322),
+       lb = Mb(38329),
+       Lb = Mb(38333);
```

#### 18. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L208)

```diff
-       RRd() {
+       ppb() {
```

#### 19. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L214)

```diff
-       KOd(dd, Od) {
+       twb(bb, wb) {
```

#### 20. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L218)

```diff
-         return this.KOd(dd, Od)
+         return this.twb(bb, wb)
```

#### 21. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L220-L221` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L220-L221) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L220-L221)

```diff
-       Bdd(dd) {
-         return this.KOd(dd, dd)
+       Jbb(bb) {
+         return this.twb(bb, bb)
```

#### 22. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L244)

```diff
-       YRd(dd) {
+       zpb(bb) {
```

#### 23. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L311)

```diff
-         let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
+         let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.e;
```

#### 24. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L314)

```diff
-       Qhd(dd, Od) {
+       Flb(bb, wb) {
```

#### 25. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L377)

```diff
-         return (arguments.length > 2 ? arguments[2] : void 0).KOd((0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od))
+         return (arguments.length > 2 ? arguments[2] : void 0).twb((0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb))
```

#### 26. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L390` → after: `L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L390) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L390)

```diff
-         return md.KOd(dd, Od), md
+         return Mb.twb(bb, wb), Mb
```

#### 27. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L478)

```diff
-         return md.KOd((dd.x + Od.x) / 2, (dd.y + Od.y) / 2)
+         return Mb.twb((bb.x + wb.x) / 2, (bb.y + wb.y) / 2)
```

#### 28. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L519` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L519) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L519)

```diff
-         return "Cq"
+         return "YC"
```

#### 29. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L525)

```diff
-       RRd() {
+       ppb() {
```

#### 30. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L551) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L551)

```diff
-       YRd(dd) {
+       zpb(bb) {
```

#### 31. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L622)

```diff
-           Rd = yd.Cq[0];
+           pb = Fb.YC[0];
```

#### 32. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L625)

```diff
-         if (Math.abs(Xd) < 1e-10) md.Bdd(1 / 0);
+         if (Math.abs(Vb) < 1e-10) Mb.Jbb(1 / 0);
```

#### 33. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L637` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L637) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L637)

```diff
-         let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
+         let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.e;
```

#### 34. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L640)

```diff
-       Qhd(dd, Od, md) {
+       Flb(bb, wb, Mb) {
```

#### 35. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L714` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L714) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L714)

```diff
-         const Od = yd.Cq[0].Bx(this);
+         const wb = Fb.YC[0].eZ(this);
```

#### 36. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L721)

```diff
-         return this.subtractToRef(Od, yd.Cq[0]), yd.Cq[0].rotateByQuaternionToRef(dd, yd.Cq[0]), Od.addToRef(yd.Cq[0], md), md
+         return this.subtractToRef(wb, Fb.YC[0]), Fb.YC[0].rotateByQuaternionToRef(bb, Fb.YC[0]), wb.addToRef(Fb.YC[0], Mb), Mb
```

#### 37. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L740` → after: `L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L740) · [Before (L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L740)

```diff
-         return this.KOd(dd._x, dd._y, dd._z)
+         return this.twb(bb._x, bb._y, bb._z)
```

#### 38. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L742)

```diff
-       KOd(dd, Od, md) {
+       twb(bb, wb, Mb) {
```

#### 39. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L746` → after: `L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L746) · [Before (L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L746)

```diff
-         return this.KOd(dd, Od, md)
+         return this.twb(bb, wb, Mb)
```

#### 40. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L748` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L748) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L748)

```diff
-       Bdd(dd) {
+       Jbb(bb) {
```

#### 41. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L756-L757` → after: `L756-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L756-L757) · [Before (L756-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L756-L757)

```diff
-         const Wd = dd.normalizeToRef(yd.Cq[1]),
-           Fd = Od.normalizeToRef(yd.Cq[2]);
+         const eb = bb.normalizeToRef(Fb.YC[1]),
+           Hb = wb.normalizeToRef(Fb.YC[2]);
```

#### 42. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L761-L762` → after: `L761-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L761-L762) · [Before (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L761-L762)

```diff
-           hd = yd.Cq[3];
-         return od.CrossToRef(Wd, Fd, hd), od.Dot(hd, md) > 0 ? isNaN(Xd) ? 0 : Xd : isNaN(Xd) ? -Math.PI : -Math.acos(Rd)
+           lb = Fb.YC[3];
+         return Ub.CrossToRef(eb, Hb, lb), Ub.Dot(lb, Mb) > 0 ? isNaN(Vb) ? 0 : Vb : isNaN(Vb) ? -Math.PI : -Math.acos(pb)
```

#### 43. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L765-L772` → after: `L765-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L765-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L765-L772) · [Before (L765-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L765-L772)

```diff
-         yd.Cq[0].Bx(dd);
-         const Wd = yd.Cq[0];
-         yd.Cq[1].Bx(Od);
-         const Fd = yd.Cq[1];
-         yd.Cq[2].Bx(md);
-         const Rd = yd.Cq[2],
-           Xd = yd.Cq[3],
-           hd = yd.Cq[4];
+         Fb.YC[0].eZ(bb);
+         const eb = Fb.YC[0];
+         Fb.YC[1].eZ(wb);
+         const Hb = Fb.YC[1];
+         Fb.YC[2].eZ(Mb);
+         const pb = Fb.YC[2],
+           Vb = Fb.YC[3],
+           lb = Fb.YC[4];
```

#### 44. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L778` → after: `L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L778) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L778)

```diff
-         const Wd = bd.Cq[0];
+         const eb = Bb.YC[0];
```

#### 45. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L787-L789` → after: `L787-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L787-L789) · [Before (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L787-L789)

```diff
-         const Rd = yd.Cq[0],
-           Xd = yd.Cq[1];
-         Rd.Bx(dd);
+         const pb = Fb.YC[0],
+           Vb = Fb.YC[1];
+         pb.eZ(bb);
```

#### 46. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L791)

```diff
-         Rd.normalizeFromLength(hd), Xd.Bx(Od);
+         pb.normalizeFromLength(lb), Vb.eZ(wb);
```

#### 47. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L796)

```diff
-         if (Qd < 1 - Wd.b) {
+         if (Ib < 1 - eb.e) {
```

#### 48. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L801)

```diff
-         return Rd.scaleInPlace(td), Xd.scaleInPlace(Nd), Fd.Bx(Rd).addInPlace(Xd), Fd.scaleInPlace((0, Kd.Lerp)(hd, vd, md)), Fd
+         return pb.scaleInPlace(Ob), Vb.scaleInPlace(tb), Hb.eZ(pb).addInPlace(Vb), Hb.scaleInPlace((0, gb.Lerp)(lb, Lb, Mb)), Hb
```

#### 49. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L820` → after: `L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L820) · [Before (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L820)

```diff
-         return Wd.KOd(dd, Od, md), Wd
+         return eb.twb(bb, wb, Mb), eb
```

#### 50. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L884` → after: `L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L884) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L884)

```diff
-         return (arguments.length > 2 ? arguments[2] : void 0).KOd((0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od))
+         return (arguments.length > 2 ? arguments[2] : void 0).twb((0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb))
```

#### 51. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L930` → after: `L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L930) · [Before (L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L930)

```diff
-         return Xd = Xd > md._z ? md._z : Xd, Xd = Xd < Od._z ? Od._z : Xd, Wd.KOd(Fd, Rd, Xd), Wd
+         return Vb = Vb > Mb._z ? Mb._z : Vb, Vb = Vb < wb._z ? wb._z : Vb, eb.twb(Hb, pb, Vb), eb
```

#### 52. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L976) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L976)

```diff
-         return md.KOd(Wd, Fd, Rd), md
+         return Mb.twb(eb, Hb, pb), Mb
```

#### 53. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1006-L1007` → after: `L1006-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1006-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1006-L1007) · [Before (L1006-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1006-L1007)

```diff
-         const Wd = bd.Cq[0];
-         return Wd.Bx(Od).scaleInPlace(2 * od.Dot(dd, Od)), md.Bx(dd).YRd(Wd)
+         const eb = Bb.YC[0];
+         return eb.eZ(wb).scaleInPlace(2 * Ub.Dot(bb, wb)), Mb.eZ(bb).zpb(eb)
```

#### 54. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1022-L1023` → after: `L1022-L1023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1022-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1022-L1023) · [Before (L1022-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1022-L1023)

```diff
-         const td = yd.Cq[0];
-         return td.x = dd / Wd * 2 - 1, td.y = -(Od / Fd * 2 - 1), Xd.e.LastCreatedEngine?.isNDCHalfZRange ? td.z = md : td.z = 2 * md - 1, od.TransformCoordinatesToRef(td, Qd, vd), vd
+         const Ob = Fb.YC[0];
+         return Ob.x = bb / eb * 2 - 1, Ob.y = -(wb / Hb * 2 - 1), Vb.e.LastCreatedEngine?.isNDCHalfZRange ? Ob.z = Mb : Ob.z = 2 * Mb - 1, Ub.TransformCoordinatesToRef(Ob, Ib, Lb), Lb
```

#### 55. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1027` → after: `L1027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1027) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1027)

```diff
-         return md.Bx(dd), md.minimizeInPlace(Od), md
+         return Mb.eZ(bb), Mb.minimizeInPlace(wb), Mb
```

#### 56. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1031` → after: `L1031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1031) · [Before (L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1031)

```diff
-         return md.Bx(dd), md.maximizeInPlace(Od), md
+         return Mb.eZ(bb), Mb.maximizeInPlace(wb), Mb
```

#### 57. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1043-L1047` → after: `L1043-L1047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1043-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1043-L1047) · [Before (L1043-L1047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1043-L1047)

```diff
-         const Xd = yd.Cq[0],
-           hd = yd.Cq[1],
-           vd = yd.Cq[2],
-           Qd = yd.Cq[3],
-           td = yd.Cq[4];
+         const Vb = Fb.YC[0],
+           lb = Fb.YC[1],
+           Lb = Fb.YC[2],
+           Ib = Fb.YC[3],
+           Ob = Fb.YC[4];
```

#### 58. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1052` → after: `L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1052) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1052)

```diff
-         if (Nd < Wd.b || qd < Wd.b || Hd < Wd.b) return Rd.Bx(Od), od.Distance(dd, Od);
+         if (tb < eb.e || Cb < eb.e || Eb < eb.e) return pb.eZ(wb), Ub.Distance(bb, wb);
```

#### 59. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1055` → after: `L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1055) · [Before (L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1055)

```diff
-         if (bd < Wd.b) return Rd.Bx(Od), od.Distance(dd, Od);
+         if (Bb < eb.e) return pb.eZ(wb), Ub.Distance(bb, wb);
```

#### 60. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1058` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1058) · [Before (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1058)

```diff
-         if (Td < Wd.b) return Rd.Bx(Od), 0;
+         if (sb < eb.e) return pb.eZ(wb), 0;
```

#### 61. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1061-L1069` → after: `L1061-L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1061-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1061-L1069) · [Before (L1061-L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1061-L1069)

```diff
-           Yd = yd.Cq[5],
-           gd = yd.Cq[6];
-         Yd.Bx(Qd).scaleInPlace(-Td * pd), gd.Bx(dd).addInPlace(Yd);
-         const wd = yd.Cq[4],
-           Ed = yd.Cq[5],
-           Jd = yd.Cq[7],
-           Ud = yd.Cq[8];
-         wd.Bx(Xd).scaleInPlace(1 / Nd), Ud.Bx(hd).scaleInPlace(1 / qd), wd.addInPlace(Ud).scaleInPlace(-1), Ed.Bx(Xd).scaleInPlace(-1 / Nd), Ud.Bx(vd).scaleInPlace(1 / Hd), Ed.addInPlace(Ud).scaleInPlace(-1), Jd.Bx(vd).scaleInPlace(-1 / Hd), Ud.Bx(hd).scaleInPlace(-1 / qd), Jd.ad … [truncated]
-         const xd = yd.Cq[9];
+           hb = Fb.YC[5],
+           zb = Fb.YC[6];
+         hb.eZ(Ib).scaleInPlace(-sb * mb), zb.eZ(bb).addInPlace(hb);
+         const Xb = Fb.YC[4],
+           xb = Fb.YC[5],
+           jb = Fb.YC[7],
+           Kb = Fb.YC[8];
+         Xb.eZ(Vb).scaleInPlace(1 / tb), Kb.eZ(lb).scaleInPlace(1 / Cb), Xb.addInPlace(Kb).scaleInPlace(-1), xb.eZ(Vb).scaleInPlace(-1 / tb), Kb.eZ(Lb).scaleInPlace(1 / Eb), xb.addInPlace(Kb).scaleInPlace(-1), jb.eZ(Lb).scaleInPlace(-1 / Eb), Kb.eZ(lb).scaleInPlace(-1 / Cb), jb.ad … [truncated]
+         const rb = Fb.YC[9];
```

#### 62. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1071` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1071) · [Before (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1071)

```diff
-         xd.Bx(gd).YRd(Od), od.CrossToRef(wd, xd, Ud), Bd = od.Dot(Ud, Qd);
+         rb.eZ(zb).zpb(wb), Ub.CrossToRef(Xb, rb, Kb), Rb = Ub.Dot(Kb, Ib);
```

#### 63. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1073` → after: `L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1073) · [Before (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1073)

```diff
-         xd.Bx(gd).YRd(md), od.CrossToRef(Ed, xd, Ud), Bd = od.Dot(Ud, Qd);
+         rb.eZ(zb).zpb(Mb), Ub.CrossToRef(xb, rb, Kb), Rb = Ub.Dot(Kb, Ib);
```

#### 64. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1075` → after: `L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1075) · [Before (L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1075)

```diff
-         xd.Bx(gd).YRd(Fd), od.CrossToRef(Jd, xd, Ud), Bd = od.Dot(Ud, Qd);
+         rb.eZ(zb).zpb(Hb), Ub.CrossToRef(jb, rb, Kb), Rb = Ub.Dot(Kb, Ib);
```

#### 65. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1077` → after: `L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1077) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1077)

```diff
-           Vd = yd.Cq[10];
+           Zb = Fb.YC[10];
```

#### 66. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1079-L1081` → after: `L1079-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1079-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1079-L1081) · [Before (L1079-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1079-L1081)

```diff
-         Sd > 0 && sd < 0 ? (Vd.Bx(Xd), Ad = Od, rd = md) : sd > 0 && ud < 0 ? (Vd.Bx(vd), Ad = md, rd = Fd) : (Vd.Bx(hd).scaleInPlace(-1), Ad = Fd, rd = Od);
-         const Gd = yd.Cq[9],
-           nd = yd.Cq[4];
+         Db > 0 && cb < 0 ? (Zb.eZ(Vb), fb = wb, Ab = Mb) : cb > 0 && Yb < 0 ? (Zb.eZ(Lb), fb = Mb, Ab = Hb) : (Zb.eZ(lb).scaleInPlace(-1), fb = Hb, Ab = wb);
+         const Wb = Fb.YC[9],
+           Jb = Fb.YC[4];
```

#### 67. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1083-L1084` → after: `L1083-L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1083-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1083-L1084) · [Before (L1083-L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1083-L1084)

```diff
-         if (!(od.Dot(nd, Qd) < 0)) return Rd.Bx(gd), Math.abs(Td * pd);
-         const Ld = yd.Cq[5];
+         if (!(Ub.Dot(Jb, Ib) < 0)) return pb.eZ(zb), Math.abs(sb * mb);
+         const Sb = Fb.YC[5];
```

#### 68. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1086-L1087` → after: `L1086-L1087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1086-L1087) · [Before (L1086-L1087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1086-L1087)

```diff
-         const Pd = yd.Cq[9];
-         Pd.Bx(Ad).YRd(gd);
+         const Nb = Fb.YC[9];
+         Nb.eZ(fb).zpb(zb);
```

#### 69. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1089` → after: `L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1089) · [Before (L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1089)

```diff
-         if (zd < Wd.b) return Rd.Bx(Ad), od.Distance(dd, Ad);
+         if (vb < eb.e) return pb.eZ(fb), Ub.Distance(bb, fb);
```

#### 70. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1092-L1095` → after: `L1092-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1092-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1092-L1095) · [Before (L1092-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1092-L1095)

```diff
-           jd = yd.Cq[7];
-         jd.Bx(gd).addInPlace(Ld.scaleInPlace(zd * cd)), Ud.Bx(jd).YRd(Ad), Td = Vd.length(), Vd.normalizeFromLength(Td);
-         let Dd = od.Dot(Ud, Vd) / Math.max(Td, Wd.b);
-         return Dd = (0, Kd.Clamp)(Dd, 0, 1), jd.Bx(Ad).addInPlace(Vd.scaleInPlace(Dd * Td)), Rd.Bx(jd), od.Distance(dd, jd)
+           Gb = Fb.YC[7];
+         Gb.eZ(zb).addInPlace(Sb.scaleInPlace(vb * Qb)), Kb.eZ(Gb).zpb(fb), sb = Zb.length(), Zb.normalizeFromLength(sb);
+         let qb = Ub.Dot(Kb, Zb) / Math.max(sb, eb.e);
+         return qb = (0, gb.Clamp)(qb, 0, 1), Gb.eZ(fb).addInPlace(Zb.scaleInPlace(qb * sb)), pb.eZ(Gb), Ub.Distance(bb, Gb)
```

#### 71. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1101` → after: `L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1101) · [Before (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1101)

```diff
-         return md.KOd((dd._x + Od._x) / 2, (dd._y + Od._y) / 2, (dd._z + Od._z) / 2)
+         return Mb.twb((bb._x + wb._x) / 2, (bb._y + wb._y) / 2, (bb._z + wb._z) / 2)
```

#### 72. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1155` → after: `L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1155) · [Before (L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1155)

```diff
-       RRd() {
+       ppb() {
```

#### 73. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1177` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1177) · [Before (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1177)

```diff
-       YRd(dd) {
+       zpb(bb) {
```

#### 74. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1217` → after: `L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1217) · [Before (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1217)

```diff
-         let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
+         let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.e;
```

#### 75. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1220` → after: `L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1220) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1220)

```diff
-       Qhd(dd, Od, md, Wd) {
+       Flb(bb, wb, Mb, eb) {
```

#### 76. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1296` → after: `L1296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1296) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1296)

```diff
-       KOd(dd, Od, md, Wd) {
+       twb(bb, wb, Mb, eb) {
```

#### 77. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1300` → after: `L1300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1300) · [Before (L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1300)

```diff
-         return this.KOd(dd, Od, md, Wd)
+         return this.twb(bb, wb, Mb, eb)
```

#### 78. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1302` → after: `L1302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1302) · [Before (L1302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1302)

```diff
-       Bdd(dd) {
+       Jbb(bb) {
```

#### 79. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1357` → after: `L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1357) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1357)

```diff
-         return md.Bx(dd), md.minimizeInPlace(Od), md
+         return Mb.eZ(bb), Mb.minimizeInPlace(wb), Mb
```

#### 80. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1361` → after: `L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1361) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1361)

```diff
-         return md.Bx(dd), md.maximizeInPlace(Od), md
+         return Mb.eZ(bb), Mb.maximizeInPlace(wb), Mb
```

#### 81. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1458` → after: `L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1458) · [Before (L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1458)

```diff
-       RRd() {
+       ppb() {
```

#### 82. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1473` → after: `L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1473) · [Before (L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1473)

```diff
-         let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
+         let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.e;
```

#### 83. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1477` → after: `L1477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1477) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1477)

```diff
-         let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
+         let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.e;
```

#### 84. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1486` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1486) · [Before (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1486)

```diff
-       KOd(dd, Od, md, Wd) {
+       twb(bb, wb, Mb, eb) {
```

#### 85. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1490` → after: `L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1490) · [Before (L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1490)

```diff
-         return this.KOd(dd, Od, md, Wd)
+         return this.twb(bb, wb, Mb, eb)
```

#### 86. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1492-L1493` → after: `L1492-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1492-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1492-L1493) · [Before (L1492-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1492-L1493)

```diff
-       Bdd(dd) {
-         return this.KOd(dd, dd, dd, dd)
+       Jbb(bb) {
+         return this.twb(bb, bb, bb, bb)
```

#### 87. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1519` → after: `L1519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1519) · [Before (L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1519)

```diff
-       YRd(dd) {
+       zpb(bb) {
```

#### 88. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1543` → after: `L1543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1543) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1543)

```diff
-         return Od.KOd(md, Wd, Fd, Rd), Od
+         return wb.twb(Mb, eb, Hb, pb), wb
```

#### 89. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1581` → after: `L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1581) · [Before (L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1581)

```diff
-       Qhd(dd, Od, md, Wd) {
+       Flb(bb, wb, Mb, eb) {
```

#### 90. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1597` → after: `L1597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1597) · [Before (L1597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1597)

```diff
-         return dd.KOd(-this._x, -this._y, -this._z, this._w), dd
+         return bb.twb(-this._x, -this._y, -this._z, this._w), bb
```

#### 91. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1633` → after: `L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1633) · [Before (L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1633)

```diff
-         return 0 === Od || 1 === Od ? dd.KOd(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Od, dd)
+         return 0 === wb || 1 === wb ? bb.twb(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / wb, bb)
```

#### 92. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1754` → after: `L1754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1754) · [Before (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1754)

```diff
-         return Fd.KOd(dd, Od, md, Wd), Fd
+         return Hb.twb(bb, wb, Mb, eb), Hb
```

#### 93. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1771` → after: `L1771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1771) · [Before (L1771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1771)

```diff
-         let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wd.b;
+         let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eb.e;
```

#### 94. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1773` → after: `L1773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1773) · [Before (L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1773)

```diff
-         return Rd < Fd ? Math.abs(dd.x) > Math.abs(dd.z) ? md.set(-dd.y, dd.x, 0, 0) : md.set(0, -dd.z, dd.y, 0) : (od.CrossToRef(dd, Od, bd.Cq[0]), md.set(bd.Cq[0].x, bd.Cq[0].y, bd.Cq[0].z, Rd)), md.normalize()
+         return pb < Hb ? Math.abs(bb.x) > Math.abs(bb.z) ? Mb.set(-bb.y, bb.x, 0, 0) : Mb.set(0, -bb.z, bb.y, 0) : (Ub.CrossToRef(bb, wb, Bb.YC[0]), Mb.set(Bb.YC[0].x, Bb.YC[0].y, Bb.YC[0].z, pb)), Mb.normalize()
```

#### 95. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1807` → after: `L1807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1807) · [Before (L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1807)

```diff
-         return dd = dd.normalizeToRef(yd.Cq[0]), Od = Od.normalizeToRef(yd.Cq[1]), md = md.normalizeToRef(yd.Cq[2]), Hd.FromXYZAxesToRef(dd, Od, md, Fd), qd.FromRotationMatrixToRef(Fd, Wd), Wd
+         return bb = bb.normalizeToRef(Fb.YC[0]), wb = wb.normalizeToRef(Fb.YC[1]), Mb = Mb.normalizeToRef(Fb.YC[2]), Eb.FromXYZAxesToRef(bb, wb, Mb, Hb), Cb.FromRotationMatrixToRef(Hb, eb), eb
```

#### 96. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1832` → after: `L1832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1832) · [Before (L1832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1832)

```diff
-         if (Xd < 0 && (Kd = !0, Xd = -Xd), Xd > .999999) Rd = 1 - md, Fd = Kd ? -md : md;
+         if (Vb < 0 && (gb = !0, Vb = -Vb), Vb > .999999) pb = 1 - Mb, Hb = gb ? -Mb : Mb;
```

#### 97. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1836` → after: `L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1836) · [Before (L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1836)

```diff
-           Rd = Math.sin((1 - md) * dd) * Od, Fd = Kd ? -Math.sin(md * dd) * Od : Math.sin(md * dd) * Od
+           pb = Math.sin((1 - Mb) * bb) * wb, Hb = gb ? -Math.sin(Mb * bb) * wb : Math.sin(Mb * bb) * wb
```

#### 98. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1873` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1873) · [Before (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1873)

```diff
-         return Wd.KOd((0, Kd.Clamp)(dd.x, Od.x, md.x), (0, Kd.Clamp)(dd.y, Od.y, md.y), (0, Kd.Clamp)(dd.z, Od.z, md.z), (0, Kd.Clamp)(dd.w, Od.w, md.w))
+         return eb.twb((0, gb.Clamp)(bb.x, wb.x, Mb.x), (0, gb.Clamp)(bb.y, wb.y, Mb.y), (0, gb.Clamp)(bb.z, wb.z, Mb.z), (0, gb.Clamp)(bb.w, wb.w, Mb.w))
```

#### 99. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1883` → after: `L1883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1883) · [Before (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1883)

```diff
-         return (arguments.length > 2 ? arguments[2] : void 0).KOd((0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od))
+         return (arguments.length > 2 ? arguments[2] : void 0).twb((0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb))
```

#### 100. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1905` → after: `L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1905) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1905)

```diff
-         return md.KOd((dd.x + Od.x) / 2, (dd.y + Od.y) / 2, (dd.z + Od.z) / 2, (dd.w + Od.w) / 2)
+         return Mb.twb((bb.x + wb.x) / 2, (bb.y + wb.y) / 2, (bb.z + wb.z) / 2, (bb.w + wb.w) / 2)
```

#### 101. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1911` → after: `L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1911) · [Before (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1911)

```diff
-         return Rd.b.MatrixUse64Bits
+         return pb.c.MatrixUse64Bits
```

#### 102. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1917` → after: `L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1917) · [Before (L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1917)

```diff
-         this.updateFlag = hd.e._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
+         this.updateFlag = lb.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
```

#### 103. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1926` → after: `L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1926) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1926)

```diff
-         this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Rd.b.MatrixTrackPrecisionChange && Rd.b.MatrixTrackedMatrices.push(this), this._m = new Rd.b.MatrixCurrentType(16), this.markAsUpdated()
+         this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, pb.c.MatrixTrackPrecisionChange && pb.c.MatrixTrackedMatrices.push(this), this._m = new pb.c.MatrixCurrentType(16), this.markAsUpdated()
```

#### 104. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1977)

```diff
-       RRd() {
+       ppb() {
```

#### 105. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1984` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1984) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1984)

```diff
-       KOd() {
+       twb() {
```

#### 106. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L1993` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L1993) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L1993)

```diff
-       Bdd(dd) {
+       Jbb(bb) {
```

#### 107. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2044` → after: `L2044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2044) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2044)

```diff
-       YRd(dd) {
+       zpb(bb) {
```

#### 108. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2064` → after: `L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2064) · [Before (L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2064)

```diff
-         return !0 === this._isIdentity ? (Hd.IdentityToRef(dd), dd) : ((0, hd.c)(this, dd.RRd()) ? dd.markAsUpdated() : dd.Bx(this), dd)
+         return !0 === this._isIdentity ? (Eb.IdentityToRef(bb), bb) : ((0, lb.e)(this, bb.ppb()) ? bb.markAsUpdated() : bb.eZ(this), bb)
```

#### 109. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2098` → after: `L2098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2098) · [Before (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2098)

```diff
-         return (0, hd.b)(this, dd, Od), this
+         return (0, lb.c)(this, bb, wb), this
```

#### 110. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2125` → after: `L2125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2125) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2125)

```diff
-         return this._isIdentity ? (Od.Bx(dd), Od) : dd._isIdentity ? (Od.Bx(this), Od) : (this.multiplyToArray(dd, Od._m, 0), Od.markAsUpdated(), Od)
+         return this._isIdentity ? (wb.eZ(bb), wb) : bb._isIdentity ? (wb.eZ(this), wb) : (this.multiplyToArray(bb, wb._m, 0), wb.markAsUpdated(), wb)
```

#### 111. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2128` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2128) · [Before (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2128)

```diff
-         return (0, hd.f)(this, dd, Od, md), this
+         return (0, lb.k)(this, bb, wb, Mb), this
```

#### 112. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2198` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2198) · [Before (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2198)

```diff
-       Qhd() {
+       Flb() {
```

#### 113. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2224` → after: `L2224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2224) · [Before (L2224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2224)

```diff
-         return dd.Bx(this), dd
+         return bb.eZ(this), bb
```

#### 114. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2235` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2235) · [Before (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2235)

```diff
-         return dd.rotationQuaternion = dd.rotationQuaternion || new qd, this.decompose(dd.Tt, dd.rotationQuaternion, dd.position)
+         return bb.rotationQuaternion = bb.rotationQuaternion || new Cb, this.decompose(bb.CO, bb.rotationQuaternion, bb.position)
```

#### 115. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2239` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2239) · [Before (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2239)

```diff
-         if (this._isIdentity) return md && md.Bdd(0), dd && dd.Bdd(1), Od && Od.KOd(0, 0, 0, 1), !0;
+         if (this._isIdentity) return Mb && Mb.Jbb(0), bb && bb.Jbb(1), wb && wb.twb(0, 0, 0, 1), !0;
```

#### 116. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2241-L2244` → after: `L2241-L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2241-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2241-L2244) · [Before (L2241-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2241-L2244)

```diff
-         if (md && md.KOd(Rd[12], Rd[13], Rd[14]), (dd = dd || yd.Cq[0]).x = Math.sqrt(Rd[0] * Rd[0] + Rd[1] * Rd[1] + Rd[2] * Rd[2]), dd.y = Math.sqrt(Rd[4] * Rd[4] + Rd[5] * Rd[5] + Rd[6] * Rd[6]), dd.z = Math.sqrt(Rd[8] * Rd[8] + Rd[9] * Rd[9] + Rd[10] * Rd[10]), Wd) {
-           const Od = (Fd ? Wd.absoluteScaling.x : Wd.Tt.x) < 0 ? -1 : 1,
-             md = (Fd ? Wd.absoluteScaling.y : Wd.Tt.y) < 0 ? -1 : 1,
-             Rd = (Fd ? Wd.absoluteScaling.z : Wd.Tt.z) < 0 ? -1 : 1;
+         if (Mb && Mb.twb(pb[12], pb[13], pb[14]), (bb = bb || Fb.YC[0]).x = Math.sqrt(pb[0] * pb[0] + pb[1] * pb[1] + pb[2] * pb[2]), bb.y = Math.sqrt(pb[4] * pb[4] + pb[5] * pb[5] + pb[6] * pb[6]), bb.z = Math.sqrt(pb[8] * pb[8] + pb[9] * pb[9] + pb[10] * pb[10]), eb) {
+           const wb = (Hb ? eb.absoluteScaling.x : eb.CO.x) < 0 ? -1 : 1,
+             Mb = (Hb ? eb.absoluteScaling.y : eb.CO.y) < 0 ? -1 : 1,
+             pb = (Hb ? eb.absoluteScaling.z : eb.CO.z) < 0 ? -1 : 1;
```

#### 117. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2247` → after: `L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2247) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2247)

```diff
-         if (0 === dd._x || 0 === dd._y || 0 === dd._z) return Od && Od.KOd(0, 0, 0, 1), !1;
+         if (0 === bb._x || 0 === bb._y || 0 === bb._z) return wb && wb.twb(0, 0, 0, 1), !1;
```

#### 118. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2311` → after: `L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2311) · [Before (L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2311)

```diff
-         const Od = yd.Cq[0];
+         const wb = Fb.YC[0];
```

#### 119. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2431` → after: `L2431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2431) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2431)

```diff
-         dd = dd.normalizeToRef(yd.Cq[0]);
+         bb = bb.normalizeToRef(Fb.YC[0]);
```

#### 120. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2439` → after: `L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2439) · [Before (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2439)

```diff
-         if (Rd < -1 + Wd.b) Xd[0] = -1, Xd[1] = 0, Xd[2] = 0, Xd[3] = 0, Xd[4] = 0, Xd[5] = Fd ? 1 : -1, Xd[6] = 0, Xd[7] = 0, Xd[8] = 0, Xd[9] = 0, Xd[10] = Fd ? -1 : 1, Xd[11] = 0;
+         if (pb < -1 + eb.e) Vb[0] = -1, Vb[1] = 0, Vb[2] = 0, Vb[3] = 0, Vb[4] = 0, Vb[5] = Hb ? 1 : -1, Vb[6] = 0, Vb[7] = 0, Vb[8] = 0, Vb[9] = 0, Vb[10] = Hb ? -1 : 1, Vb[11] = 0;
```

#### 121. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2484` → after: `L2484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2484) · [Before (L2484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2484)

```diff
-         const Fd = yd.Cq[0],
+         const Hb = Fb.YC[0],
```

#### 122. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2486` → after: `L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2486) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2486)

```diff
-           Xd = yd.Cq[1];
+           Vb = Fb.YC[1];
```

#### 123. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2488` → after: `L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2488) · [Before (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2488)

```diff
-         const Kd = yd.Cq[2],
+         const gb = Fb.YC[2],
```

#### 124. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2490` → after: `L2490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2490) · [Before (L2490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2490)

```diff
-           vd = yd.Cq[3];
+           Lb = Fb.YC[3];
```

#### 125. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2492` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2492) · [Before (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2492)

```diff
-         const Qd = yd.Cq[4];
+         const Ib = Fb.YC[4];
```

#### 126. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2496` → after: `L2496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2496) · [Before (L2496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2496)

```diff
-         const Nd = yd.Cq[5];
+         const tb = Fb.YC[5];
```

#### 127. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2504-L2506` → after: `L2504-L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2504-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2504-L2506) · [Before (L2504-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2504-L2506)

```diff
-         const Fd = yd.Cq[0],
-           Rd = yd.Cq[1],
-           Xd = yd.Cq[2];
+         const Hb = Fb.YC[0],
+           pb = Fb.YC[1],
+           Vb = Fb.YC[2];
```

#### 128. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2520-L2522` → after: `L2520-L2522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2520-L2522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2520-L2522) · [Before (L2520-L2522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2520-L2522)

```diff
-         const Fd = yd.Cq[0],
-           Rd = yd.Cq[1],
-           Xd = yd.Cq[2];
+         const Hb = Fb.YC[0],
+           pb = Fb.YC[1],
+           Vb = Fb.YC[2];
```

#### 129. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2536-L2538` → after: `L2536-L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2536-L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2536-L2538) · [Before (L2536-L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2536-L2538)

```diff
-         const Wd = yd.Cq[0];
-         Wd.Bx(dd), Wd.scaleInPlace(-1);
-         const Fd = yd.Cq[1];
+         const eb = Fb.YC[0];
+         eb.eZ(bb), eb.scaleInPlace(-1);
+         const Hb = Fb.YC[1];
```

#### 130. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2546` → after: `L2546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2546) · [Before (L2546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2546)

```diff
-         const Wd = yd.Cq[2];
+         const eb = Fb.YC[2];
```

#### 131. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2614-L2615` → after: `L2614-L2615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2614-L2615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2614-L2615) · [Before (L2614-L2615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2614-L2615)

```diff
-           od = Rd ? td / Od : td,
-           Nd = Rd ? td : td * Od,
+           Ub = pb ? Ob / wb : Ob,
+           tb = pb ? Ob : Ob * wb,
```

#### 132. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2617` → after: `L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2617) · [Before (L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2617)

```diff
-           yd = hd && 0 === vd ? 2 * Qd : 0 !== Qd ? -2 * Qd * vd / (Qd - vd) : -2 * vd,
+           Fb = lb && 0 === Lb ? 2 * Ib : 0 !== Ib ? -2 * Ib * Lb / (Ib - Lb) : -2 * Lb,
```

#### 133. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2626-L2627` → after: `L2626-L2627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2626-L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2626-L2627) · [Before (L2626-L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2626-L2627)

```diff
-           vd = Rd ? hd / Od : hd,
-           Qd = Rd ? hd : hd * Od,
+           Lb = pb ? lb / wb : lb,
+           Ib = pb ? lb : lb * wb,
```

#### 134. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2645-L2646` → after: `L2645-L2646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2645-L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2645-L2646) · [Before (L2645-L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2645-L2646)

```diff
-           od = Rd ? td / Od : td,
-           Nd = Rd ? td : td * Od,
+           Ub = pb ? Ob / wb : Ob,
+           tb = pb ? Ob : Ob * wb,
```

#### 135. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2648` → after: `L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2648) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2648)

```diff
-           yd = hd && 0 === vd ? 2 * Qd : 0 !== Qd ? -2 * Qd * vd / (Qd - vd) : -2 * vd,
+           Fb = lb && 0 === Lb ? 2 * Ib : 0 !== Ib ? -2 * Ib * Lb / (Ib - Lb) : -2 * Lb,
```

#### 136. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2657-L2658` → after: `L2657-L2658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2657-L2658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2657-L2658) · [Before (L2657-L2658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2657-L2658)

```diff
-           vd = Rd ? hd / Od : hd,
-           Qd = Rd ? hd : hd * Od,
+           Lb = pb ? lb / wb : lb,
+           Ib = pb ? lb : lb * wb,
```

#### 137. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2674` → after: `L2674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2674) · [Before (L2674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2674)

```diff
-         return Rd.b.MatrixUse64Bits ? md : new Float32Array(md)
+         return pb.c.MatrixUse64Bits ? Mb : new Float32Array(Mb)
```

#### 138. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2679` → after: `L2679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2679) · [Before (L2679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2679)

```diff
-         return Rd.b.MatrixUse64Bits ? md : new Float32Array(md)
+         return pb.c.MatrixUse64Bits ? Mb : new Float32Array(Mb)
```

#### 139. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2738` → after: `L2738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2738) · [Before (L2738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2738)

```diff
-     yd.Cq = (0, Fd.f)(11, od.Zero), yd.Matrix = (0, Fd.f)(2, Hd.Identity), yd.Quaternion = (0, Fd.f)(3, qd.Zero);
+     Fb.YC = (0, Hb.f)(11, Ub.Zero), Fb.Matrix = (0, Hb.f)(2, Eb.Identity), Fb.Quaternion = (0, Hb.f)(3, Cb.Zero);
```

#### 140. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2740` → after: `L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2740) · [Before (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2740)

```diff
-     bd.Vector2 = (0, Fd.f)(3, td.Zero), bd.Cq = (0, Fd.f)(13, od.Zero), bd.Vector4 = (0, Fd.f)(3, Nd.Zero), bd.Quaternion = (0, Fd.f)(3, qd.Zero), bd.Matrix = (0, Fd.f)(8, Hd.Identity);
+     Bb.Vector2 = (0, Hb.f)(3, Ob.Zero), Bb.YC = (0, Hb.f)(13, Ub.Zero), Bb.Vector4 = (0, Hb.f)(3, tb.Zero), Bb.Quaternion = (0, Hb.f)(3, Cb.Zero), Bb.Matrix = (0, Hb.f)(8, Eb.Identity);
```

#### 141. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2783` → after: `L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2783) · [Before (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2783)

```diff
-   38660: (dd, Od, md) => {
+   38318: (bb, wb, Mb) => {
```

#### 142. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L2785` → after: `L2785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/264.js#L2785) · [Before (L2785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/264.js#L2785)

```diff
-       c: () => Xd
+       b: () => Vb
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L4)

```diff
-   38741: (dd, Od, md) => {
+   38406: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L6)

```diff
-       d: () => td,
+       e: () => Ob,
```

#### 3. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L8-L9)

```diff
-       g: () => Hd,
-       j: () => Nd
+       h: () => Eb,
+       k: () => tb
```

#### 4. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L11-L14` → after: `L11-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L11-L14) · [Before (L11-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L11-L14)

```diff
-     var Wd = md(38647),
-       Fd = md(38644),
-       Rd = md(38663),
-       Xd = md(38669);
+     var eb = Mb(38299),
+       Hb = Mb(38294),
+       pb = Mb(38322),
+       Vb = Mb(38333);
```

#### 5. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L17)

```diff
-       return Math.pow(dd, Fd.f)
+       return Math.pow(bb, Hb.h)
```

#### 6. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L21)

```diff
-       return dd <= .04045 ? .0773993808 * dd : Math.pow(.947867299 * (dd + .055), 2.4)
+       return bb <= .04045 ? .0773993808 * bb : Math.pow(.947867299 * (bb + .055), 2.4)
```

#### 7. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L25` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L25) · [Before (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L25)

```diff
-       return Math.pow(dd, Fd.c)
+       return Math.pow(bb, Hb.g)
```

#### 8. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L29)

```diff
-       return dd <= .0031308 ? 12.92 * dd : 1.055 * Math.pow(dd, .41666) - .055
+       return bb <= .0031308 ? 12.92 * bb : 1.055 * Math.pow(bb, .41666) - .055
```

#### 9. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L60` → after: `L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L60) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L60)

```diff
-       RRd() {
+       ppb() {
```

#### 10. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L115)

```diff
-         return this.Qhd(dd, Od, md)
+         return this.Flb(bb, wb, Mb)
```

#### 11. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L117` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L117) · [Before (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L117)

```diff
-       Qhd(dd, Od, md) {
+       Flb(bb, wb, Mb) {
```

#### 12. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L121)

```diff
-         let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd.b;
+         let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb.e;
```

#### 13. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L169)

```diff
-       YRd(dd) {
+       zpb(bb) {
```

#### 14. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L184)

```diff
-       KOd(dd, Od, md) {
+       twb(bb, wb, Mb) {
```

#### 15. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L188` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L188) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L188)

```diff
-         return this.KOd(dd, Od, md)
+         return this.twb(bb, wb, Mb)
```

#### 16. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L190)

```diff
-       Bdd(dd) {
+       Jbb(bb) {
```

#### 17. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L336` → after: `L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L336) · [Before (L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L336)

```diff
-       RRd() {
+       ppb() {
```

#### 18. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L368)

```diff
-       YRd(dd) {
+       zpb(bb) {
```

#### 19. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L450)

```diff
-         let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd.b;
+         let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb.e;
```

#### 20. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L453)

```diff
-       Qhd(dd, Od, md, Wd) {
+       Flb(bb, wb, Mb, eb) {
```

#### 21. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L467)

```diff
-         return (new od).Bx(this)
+         return (new Ub).eZ(this)
```

#### 22. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L472` → after: `L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L472) · [Before (L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L472)

```diff
-       KOd(dd, Od, md, Wd) {
+       twb(bb, wb, Mb, eb) {
```

#### 23. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L476)

```diff
-         return this.KOd(dd, Od, md, Wd)
+         return this.twb(bb, wb, Mb, eb)
```

#### 24. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L478)

```diff
-       Bdd(dd) {
+       Jbb(bb) {
```

#### 25. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L569)

```diff
-     Nd.Color3 = (0, Wd.e)(3, td.Black), Nd.Color4 = (0, Wd.e)(3, (() => new od(0, 0, 0, 0)));
+     tb.Color3 = (0, eb.d)(3, Ob.Black), tb.Color4 = (0, eb.d)(3, (() => new Ub(0, 0, 0, 0)));
```

#### 26. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L590)

```diff
-   38644: (dd, Od, md) => {
+   38294: (bb, wb, Mb) => {
```

#### 27. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L592-L594` → after: `L592-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L592-L594) · [Before (L592-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L592-L594)

```diff
-       b: () => Rd,
-       c: () => Wd,
-       f: () => Fd
+       e: () => pb,
+       g: () => eb,
+       h: () => Hb
```

#### 28. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L601` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L601) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L601)

```diff
-   38663: (dd, Od, md) => {
+   38322: (bb, wb, Mb) => {
```

#### 29. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L617)

```diff
-       return dd === Od ? dd : Math.random() * (Od - dd) + dd
+       return bb === wb ? bb : Math.random() * (wb - bb) + bb
```

#### 30. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L702)

```diff
-       return Wd = Math.abs(Od - dd) <= md ? Od : dd + Math.sign(Od - dd) * md, Wd
+       return eb = Math.abs(wb - bb) <= Mb ? wb : bb + Math.sign(wb - bb) * Mb, eb
```

#### 31. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L708` → after: `L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L708) · [Before (L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L708)

```diff
-       return Fd = -md < Wd && Wd < md ? Od : wd(dd, Od = dd + Wd, md), Fd
+       return Hb = -Mb < eb && eb < Mb ? wb : Xb(bb, wb = bb + eb, Mb), Hb
```

#### 32. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L721)

```diff
-       return 0 === md ? Od : xd(Od, md)
+       return 0 === Mb ? wb : rb(wb, Mb)
```

#### 33. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L750)

```diff
-   38647: (dd, Od, md) => {
+   38299: (bb, wb, Mb) => {
```

#### 34. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L761` → after: `L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L761) · [Before (L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L761)

```diff
-       e: () => Wd,
+       d: () => eb,
```

#### 35. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L763)

```diff
-       i: () => Xd
+       h: () => Vb
```

#### 36. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/265.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/265.js#L788)

```diff
-   38669: (dd, Od, md) => {
+   38333: (bb, wb, Mb) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L4)

```diff
-   38651: (dd, Od, md) => {
+   38313: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L8)

```diff
-     var Wd = md(38660);
+     var eb = Mb(38318);
```

#### 3. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L17-L23` → after: `L17-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L17-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L17-L23) · [Before (L17-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L17-L23)

```diff
-     Fd.Instances = [], Fd.OnEnginesDisposedObservable = new Wd.c, Fd._LastCreatedScene = null, Fd.UseFallbackTexture = !0, Fd.FallbackTexture = ""
-   },
-   40260: (dd, Od, md) => {
-     md.d(Od, {
-       d: () => Rd
-     });
-     var Wd = md(40262);
+     Hb.Instances = [], Hb.OnEnginesDisposedObservable = new eb.b, Hb._LastCreatedScene = null, Hb.UseFallbackTexture = !0, Hb.FallbackTexture = ""
+   },
+   39966: (bb, wb, Mb) => {
+     Mb.d(wb, {
+       e: () => pb
+     });
+     var eb = Mb(39971);
```

#### 4. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L56)

```diff
-             Wd.c.Warn(hd.message)
+             eb.b.Warn(lb.message)
```

#### 5. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L62)

```diff
-   39461: (dd, Od, md) => {
+   39148: (bb, wb, Mb) => {
```

#### 6. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L66` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L66) · [Before (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L66)

```diff
-         return ("x" === dd ? Od : 3 & Od | 8).toString(16)
+         return ("x" === bb ? wb : 3 & wb | 8).toString(16)
```

#### 7. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L96)

```diff
-         const Od = dd => dd < 10 ? "0" + dd : "" + dd,
+         const wb = bb => bb < 10 ? "0" + bb : "" + bb,
```

#### 8. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L111` → after: `L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L111) · [Before (L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L111)

```diff
-         const hd = `<div style='color:${Xd.color}'>${Rd}</div><br>`;
+         const lb = `<div style='color:${Vb.color}'>${pb}</div><br>`;
```

#### 9. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L144-L146` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L144-L146) · [Before (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L144-L146)

```diff
-   38660: (dd, Od, md) => {
-     md.d(Od, {
-       c: () => Xd
+   38318: (bb, wb, Mb) => {
+     Mb.d(wb, {
+       b: () => Vb
```

#### 10. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L280)

```diff
-   64761: (dd, Od, md) => {
+   64405: (bb, wb, Mb) => {
```

#### 11. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L282-L290` → after: `L282-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L282-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/266.js#L282-L290) · [Before (L282-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/266.js#L282-L290)

```diff
-       AsyncLoop: () => Wd.d,
-       RegisterTools: () => Wd.e,
-       Tools: () => Wd.g,
-       className: () => Wd.j
-     });
-     var Wd = md(42029);
-     (0, Wd.e)()
-   },
-   38669: (dd, Od, md) => {
+       AsyncLoop: () => eb.b,
+       RegisterTools: () => eb.d,
+       Tools: () => eb.e,
+       className: () => eb.h
+     });
+     var eb = Mb(41771);
+     (0, eb.d)()
+   },
+   38333: (bb, wb, Mb) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/267.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/267.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8)

#### 1. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L4)

```diff
-   38685: (dd, Od, md) => {
+   38362: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L6)

```diff
-       e: () => Kd,
+       d: () => gb,
```

#### 3. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L8)

```diff
-       h: () => Fd
+       j: () => Hb
```

#### 4. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L51` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L51) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L51)

```diff
-             const md = Wd && Xd > 1 ? Od / Xd : Od;
+             const Mb = eb && Vb > 1 ? wb / Vb : wb;
```

#### 5. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L69)

```diff
-       return Number.isNaN(dd) ? md : Math.min(Od, Math.max(-Od, dd))
+       return Number.isNaN(bb) ? Mb : Math.min(wb, Math.max(-wb, bb))
```

#### 6. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L72)

```diff
-   38682: (dd, Od, md) => {
+   38356: (bb, wb, Mb) => {
```

#### 7. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L77-L83` → after: `L77-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L77-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L77-L83) · [Before (L77-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L77-L83)

```diff
-     var Wd = md(38673),
-       Fd = md(405),
-       Rd = md(2057),
-       Xd = md(38685);
- 
-     function Kd(dd) {
-       if ("gm" in dd) return Ud.createAnimationScript(dd);
+     var eb = Mb(38343),
+       Hb = Mb(382),
+       pb = Mb(2107),
+       Vb = Mb(38362);
+ 
+     function gb(bb) {
+       if ("BM" in bb) return Kb.createAnimationScript(bb);
```

#### 8. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L88-L89` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L88-L89) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L88-L89)

```diff
-       const Rd = dd.gm <= 0 ? 1 : Od + md * Math.max(0, Fd) / dd.gm;
-       return dd.wm === Wd.f.LoopOnLastFrame ? Rd % 1 : dd.wm === Wd.f.NoLoop && Rd >= 1 ? null : Math.min(1, Rd)
+       const pb = bb.BM <= 0 ? 1 : wb + Mb * Math.max(0, Hb) / bb.BM;
+       return bb.sM === eb.j.LoopOnLastFrame ? pb % 1 : bb.sM === eb.j.NoLoop && pb >= 1 ? null : Math.min(1, pb)
```

#### 9. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L94)

```diff
-           gm: Od,
+           BM: wb,
```

#### 10. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L96` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L96) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L96)

```diff
-           am: Wd
+           mM: eb
```

#### 11. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L99-L101` → after: `L99-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L99-L101) · [Before (L99-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L99-L101)

```diff
-           gm: Math.round(Od),
-           wm: this.createLoopMode(null !== md && void 0 !== md && md),
-           am: this.createNodeSkeletonAnimationScript(null !== Wd && void 0 !== Wd ? Wd : null)
+           BM: Math.round(wb),
+           sM: this.createLoopMode(null !== Mb && void 0 !== Mb && Mb),
+           mM: this.createNodeSkeletonAnimationScript(null !== eb && void 0 !== eb ? eb : null)
```

#### 12. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L107` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L107) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L107)

```diff
-             return Wd.f.NoLoop;
+             return eb.j.NoLoop;
```

#### 13. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L109` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L109) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L109)

```diff
-             return Wd.f.LoopOnLastFrame;
+             return eb.j.LoopOnLastFrame;
```

#### 14. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L111-L113` → after: `L111-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L111-L113) · [Before (L111-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L111-L113)

```diff
-             return Wd.f.HoldOnLastFrame
-         }
-         throw new Error(`Invalid loop mode schema: ${dd}`)
+             return eb.j.HoldOnLastFrame
+         }
+         throw new Error(`Invalid loop mode schema: ${bb}`)
```

#### 15. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L148-L150` → after: `L148-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L148-L150) · [Before (L148-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L148-L150)

```diff
-             Od = null !== (Xd = Fd[vd - 1]) && void 0 !== Xd ? Xd : dd,
-             Wd = null !== (Kd = Fd[vd + 1]) && void 0 !== Kd ? Kd : dd,
-             Qd = null !== (hd = Fd[vd + 2]) && void 0 !== hd ? hd : Wd;
+             wb = null !== (Vb = Hb[Lb - 1]) && void 0 !== Vb ? Vb : bb,
+             eb = null !== (gb = Hb[Lb + 1]) && void 0 !== gb ? gb : bb,
+             Ib = null !== (lb = Hb[Lb + 2]) && void 0 !== lb ? lb : eb;
```

#### 16. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L161)

```diff
-         if ("object" === typeof Od && "point" in Od) Rd = null !== (Xd = Od.Um) && void 0 !== Xd ? Xd : null, Wd = Od.point, Fd = Od.point;
+         if ("object" === typeof wb && "point" in wb) pb = null !== (Vb = wb.XM) && void 0 !== Vb ? Vb : null, eb = wb.point, Hb = wb.point;
```

#### 17. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L164)

```diff
-           Rd = null !== (Kd = Od.Um) && void 0 !== Kd ? Kd : null, Wd = Od.pre, Fd = Od.post
+           pb = null !== (gb = wb.XM) && void 0 !== gb ? gb : null, eb = wb.pre, Hb = wb.post
```

#### 18. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L168)

```diff
-           Um: this.createLerpMode(Rd),
+           XM: this.createLerpMode(pb),
```

#### 19. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L174)

```diff
-         return null === dd ? Wd.e.Linear : vd.LERP_MODE_SCHEMA_MAPPING[dd]
+         return null === bb ? eb.i.Linear : Lb.LERP_MODE_SCHEMA_MAPPING[bb]
```

#### 20. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L178-L179` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L178-L179) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L178-L179)

```diff
-       linear: Wd.e.Linear,
-       "catmull-rom-spline": Wd.e.CatmullRomSpline
+       linear: eb.i.Linear,
+       "catmull-rom-spline": eb.i.CatmullRomSpline
```

#### 21. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L192-L194` → after: `L192-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L192-L194) · [Before (L192-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L192-L194)

```diff
-           gm: Math.round(1e3 * dd),
-           wm: this.createLoopMode(null !== Od && void 0 !== Od && Od),
-           am: this.createNodeSkeletonAnimationScript(null !== md && void 0 !== md ? md : null)
+           BM: Math.round(1e3 * bb),
+           sM: this.createLoopMode(null !== wb && void 0 !== wb && wb),
+           mM: this.createNodeSkeletonAnimationScript(null !== Mb && void 0 !== Mb ? Mb : null)
```

#### 22. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L200)

```diff
-             return Wd.f.NoLoop;
+             return eb.j.NoLoop;
```

#### 23. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L202` → after: `L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L202) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L202)

```diff
-             return Wd.f.LoopOnLastFrame;
+             return eb.j.LoopOnLastFrame;
```

#### 24. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L204-L206` → after: `L204-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L204-L206) · [Before (L204-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L204-L206)

```diff
-             return Wd.f.HoldOnLastFrame
-         }
-         throw new Error(`Invalid Blockbench loop mode schema: ${dd}`)
+             return eb.j.HoldOnLastFrame
+         }
+         throw new Error(`Invalid Blockbench loop mode schema: ${bb}`)
```

#### 25. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L224-L226` → after: `L224-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L224-L226) · [Before (L224-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L224-L226)

```diff
-           rotation: this.createAnimationTimeline(null !== Od && void 0 !== Od ? Od : null, pd, Nd, !0),
-           position: this.createAnimationTimeline(null !== md && void 0 !== md ? md : null, gd, Hd, !1),
-           scale: this.createAnimationTimeline(null !== Wd && void 0 !== Wd ? Wd : null, yd, Hd, !1)
+           rotation: this.createAnimationTimeline(null !== wb && void 0 !== wb ? wb : null, mb, tb, !0),
+           position: this.createAnimationTimeline(null !== Mb && void 0 !== Mb ? Mb : null, zb, Eb, !1),
+           scale: this.createAnimationTimeline(null !== eb && void 0 !== eb ? eb : null, Fb, Eb, !1)
```

#### 26. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L257-L259` → after: `L257-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L257-L259) · [Before (L257-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L257-L259)

```diff
-             Od = null !== (Xd = Fd[vd - 1]) && void 0 !== Xd ? Xd : dd,
-             Wd = null !== (Kd = Fd[vd + 1]) && void 0 !== Kd ? Kd : dd,
-             Qd = null !== (hd = Fd[vd + 2]) && void 0 !== hd ? hd : Wd;
+             wb = null !== (Vb = Hb[Lb - 1]) && void 0 !== Vb ? Vb : bb,
+             eb = null !== (gb = Hb[Lb + 1]) && void 0 !== gb ? gb : bb,
+             Ib = null !== (lb = Hb[Lb + 2]) && void 0 !== lb ? lb : eb;
```

#### 27. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L271)

```diff
-           Rd = null !== (Xd = Od.lerp_mode) && void 0 !== Xd ? Xd : null, Fd = md(Od.post), Wd = void 0 !== Od.pre ? md(Od.pre) : Fd
+           pb = null !== (Vb = wb.lerp_mode) && void 0 !== Vb ? Vb : null, Hb = Mb(wb.post), eb = void 0 !== wb.pre ? Mb(wb.pre) : Hb
```

#### 28. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L278)

```diff
-           Um: this.createLerpMode(Rd),
+           XM: this.createLerpMode(pb),
```

#### 29. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L284)

```diff
-         return null === dd ? Wd.e.Linear : Qd.LERP_MODE_SCHEMA_MAPPING[dd]
+         return null === bb ? eb.i.Linear : Ib.LERP_MODE_SCHEMA_MAPPING[bb]
```

#### 30. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L303-L304` → after: `L303-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L303-L304) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L303-L304)

```diff
-         xm: vd,
-         Bm: td
+         xM: Lb,
+         jM: Ob
```

#### 31. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L310-L312` → after: `L310-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L310-L312) · [Before (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L310-L312)

```diff
-         sm: Fd.b.computeShortestRotation(dd, md) / Rd,
-         um: Fd.b.computeShortestRotation(Od, Wd) / Xd,
-         delta: Fd.b.computeShortestRotation(Od, md)
+         rM: Hb.e.computeShortestRotation(bb, Mb) / pb,
+         RM: Hb.e.computeShortestRotation(wb, eb) / Vb,
+         delta: Hb.e.computeShortestRotation(wb, Mb)
```

#### 32. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L322-L323` → after: `L322-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L322-L323) · [Before (L322-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L322-L323)

```diff
-         sm: (Fd[od] - dd[od]) / hd,
-         um: (Xd[od] - md[od]) / Qd,
+         rM: (Hb[Ub] - bb[Ub]) / lb,
+         RM: (Vb[Ub] - Mb[Ub]) / Ib,
```

#### 33. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L327-L328` → after: `L327-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L327-L328) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L327-L328)

```diff
-         xm: vd,
-         Bm: td
+         xM: Lb,
+         jM: Ob
```

#### 34. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L341-L346` → after: `L341-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L341-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L341-L346) · [Before (L341-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L341-L346)

```diff
-       return Number.isFinite(dd) ? Math.min(Xd.h, Math.max(-Xd.h, dd)) : dd
-     }
- 
-     function pd(dd) {
-       const [Od, md, Wd] = dd, Xd = -(0, Rd.n)(Od), Kd = -(0, Rd.n)(md), hd = (0, Rd.n)(Wd), vd = Fd.b.quaternionFromEulerZYX(Xd, Kd, hd);
-       return Fd.b.eulerYXZFromQuaternion(vd)
+       return Number.isFinite(bb) ? Math.min(Vb.j, Math.max(-Vb.j, bb)) : bb
+     }
+ 
+     function mb(bb) {
+       const [wb, Mb, eb] = bb, Vb = -(0, pb.o)(wb), gb = -(0, pb.o)(Mb), lb = (0, pb.o)(eb), Lb = Hb.e.quaternionFromEulerZYX(Vb, gb, lb);
+       return Hb.e.eulerYXZFromQuaternion(Lb)
```

#### 35. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L349-L350` → after: `L349-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L349-L350) · [Before (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L349-L350)

```diff
-       linear: Wd.e.Linear,
-       catmullrom: Wd.e.CatmullRomSpline
+       linear: eb.i.Linear,
+       catmullrom: eb.i.CatmullRomSpline
```

#### 36. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L360-L364` → after: `L360-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L360-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L360-L364) · [Before (L360-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L360-L364)

```diff
-       return [Od >= 0 ? Math.PI - Od : -Math.PI - Od, Ed(md + Math.PI), Ed(Wd + Math.PI)]
-     }
- 
-     function Ed(dd) {
-       return Fd.b.mod(dd + Math.PI, 2 * Math.PI) - Math.PI
+       return [wb >= 0 ? Math.PI - wb : -Math.PI - wb, xb(Mb + Math.PI), xb(eb + Math.PI)]
+     }
+ 
+     function xb(bb) {
+       return Hb.e.mod(bb + Math.PI, 2 * Math.PI) - Math.PI
```

#### 37. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L368)

```diff
-       return Math.abs(Fd.b.computeShortestRotation(dd[0], Od[0])) + Math.abs(Fd.b.computeShortestRotation(dd[1], Od[1])) + Math.abs(Fd.b.computeShortestRotation(dd[2], Od[2]))
+       return Math.abs(Hb.e.computeShortestRotation(bb[0], wb[0])) + Math.abs(Hb.e.computeShortestRotation(bb[1], wb[1])) + Math.abs(Hb.e.computeShortestRotation(bb[2], wb[2]))
```

#### 38. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L372` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L372) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L372)

```diff
-   38673: (dd, Od, md) => {
+   38343: (bb, wb, Mb) => {
```

#### 39. `bundles/bloxd.io/chunks/js/267.js` (Changed code · before: `L377` → after: `L376-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-0c73fcbb719b3ad375b5d81b4310e653ee8e3d9930ef0cb305068859be2767a8) · [After (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/267.js#L376-L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/267.js#L377)

```diff
-       f: () => Fd
+       i: () => eb,
+       j: () => Hb
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/268.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/268.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658)

#### 1. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/268.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/268.js#L4)

```diff
-   38736: (dd, Od, md) => {
+   38401: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/268.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/268.js#L6-L7)

```diff
-       Color3: () => Wd.d,
-       b: () => Wd.f
+       Color3: () => eb.e,
+       c: () => eb.f
```

#### 3. `bundles/bloxd.io/chunks/js/268.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-749f77532e590af67527f635bae55df191be06ac91aab58669d25cf0279b2658) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/268.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/268.js#L9-L10)

```diff
-     var Wd = md(38741);
-     (0, Wd.g)()
+     var eb = Mb(38406);
+     (0, eb.h)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/269.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/269.js` (26 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b)

#### 1. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L4)

```diff
-   64786: (dd, Od, md) => {
+   64428: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L9-L10)

```diff
-     var Wd = md(41785),
-       Fd = md(38752);
+     var eb = Mb(41518),
+       Hb = Mb(38419);
```

#### 3. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L14-L15` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L14-L15) · [Before (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L14-L15)

```diff
-           vertex: `\n\t\t\t${(0,Fd.f)(dd,"position","vec3")}\n\t\t\t${(0,Fd.f)(dd,"normal","vec3")}\n\t\t\t${(0,Fd.nb)(dd,"worldViewProjection","mat4")}\n\t\t\t${(0,Fd.nb)(dd,"world","mat4")}\n\t\t\t${(0,Fd.qb)(dd,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Fd.ub)(dd,`\n\t\t\t\t${ … [truncated]
-           fragment: `\n\t\t\t${(0,Fd.qb)(dd,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Fd.L)(dd,`\n\t\t\t\t\n\t\t\t\t${(0,Fd.z)(dd,"vec3","normalColor",`abs(${(0,Fd.O)(dd,"vNormal")})`)}\n\t\t\t\t${(0,Fd.G)(dd)} = ${(0,Fd.l)(dd,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+           vertex: `\n\t\t\t${(0,Hb.d)(bb,"position","vec3")}\n\t\t\t${(0,Hb.d)(bb,"normal","vec3")}\n\t\t\t${(0,Hb.pb)(bb,"worldViewProjection","mat4")}\n\t\t\t${(0,Hb.pb)(bb,"world","mat4")}\n\t\t\t${(0,Hb.vb)(bb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Hb.yb)(bb,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,Hb.vb)(bb,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,Hb.N)(bb,`\n\t\t\t\t\n\t\t\t\t${(0,Hb.u)(bb,"vec3","normalColor",`abs(${(0,Hb.R)(bb,"vNormal")})`)}\n\t\t\t\t${(0,Hb.H)(bb)} = ${(0,Hb.j)(bb,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
```

#### 4. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L20-L21` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L20-L21) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L20-L21)

```diff
-           vertex: `\n\t\t\t${(0,Fd.f)(dd,"position","vec3")}\n\t\t\t${(0,Fd.nb)(dd,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Fd.ub)(dd,`\n\t\t\t\t${(0,Fd.h)(dd)} = ${(0,Fd.ob)(dd,"worldViewProjection")} * ${(0,Fd.l)(dd,"vec4",(0,Fd.wb)(dd,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
-           fragment: `\n\t\t\t${(0,Fd.L)(dd,`\n\t\t\t\t${(0,Fd.G)(dd)} = ${(0,Fd.l)(dd,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
+           vertex: `\n\t\t\t${(0,Hb.d)(bb,"position","vec3")}\n\t\t\t${(0,Hb.pb)(bb,"worldViewProjection","mat4")}\n\n\t\t\t${(0,Hb.yb)(bb,`\n\t\t\t\t${(0,Hb.f)(bb)} = ${(0,Hb.sb)(bb,"worldViewProjection")} * ${(0,Hb.j)(bb,"vec4",(0,Hb.zb)(bb,"position"),"1.0")};\n\t\t\t`)}\n\t\t` … [truncated]
+           fragment: `\n\t\t\t${(0,Hb.N)(bb,`\n\t\t\t\t${(0,Hb.H)(bb)} = ${(0,Hb.j)(bb,"vec4","1.0","1.0","1.0","1.0")};\n\t\t\t`)}\n\t\t`
```

#### 5. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L26-L27` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L26-L27) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L26-L27)

```diff
-           vertex: `\n\t\t\t${(0,Fd.f)(dd,"position","vec3")}\n\t\t\t${(0,Fd.nb)(dd,"worldViewProjection","mat4")}\n\t\t\t${(0,Fd.nb)(dd,"world","mat4")}\n\t\t\t${(0,Fd.nb)(dd,"cameraPosition","vec3")}\n\t\t\t${(0,Fd.qb)(dd,"vDepth","float","mediump")}\n\n\t\t\t${(0,Fd.ub)(dd,`\n\ … [truncated]
-           fragment: `\n\t\t\t${(0,Fd.qb)(dd,"vDepth","float","mediump")}\n\t\t\t${(0,Fd.nb)(dd,"maxDepth","float")}\n\t\t\t${(0,Fd.nb)(dd,"minDepth","float")}\n\n\t\t\t${(0,Fd.L)(dd,`\n\t\t\t\t\n\t\t\t\t${(0,Fd.z)(dd,"float","normalizedDepth",`clamp((${(0,Fd.O)(dd,"vDepth")} - ${ … [truncated]
+           vertex: `\n\t\t\t${(0,Hb.d)(bb,"position","vec3")}\n\t\t\t${(0,Hb.pb)(bb,"worldViewProjection","mat4")}\n\t\t\t${(0,Hb.pb)(bb,"world","mat4")}\n\t\t\t${(0,Hb.pb)(bb,"cameraPosition","vec3")}\n\t\t\t${(0,Hb.vb)(bb,"vDepth","float","mediump")}\n\n\t\t\t${(0,Hb.yb)(bb,`\n\ … [truncated]
+           fragment: `\n\t\t\t${(0,Hb.vb)(bb,"vDepth","float","mediump")}\n\t\t\t${(0,Hb.pb)(bb,"maxDepth","float")}\n\t\t\t${(0,Hb.pb)(bb,"minDepth","float")}\n\n\t\t\t${(0,Hb.N)(bb,`\n\t\t\t\t\n\t\t\t\t${(0,Hb.u)(bb,"float","normalizedDepth",`clamp((${(0,Hb.R)(bb,"vDepth")} - ${ … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L37)

```diff
-       Xd[`${dd}VertexShader`] = md, Xd[`${dd}FragmentShader`] = Fd
+       Vb[`${bb}VertexShader`] = Mb, Vb[`${bb}FragmentShader`] = Hb
```

#### 7. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L40` → after: `L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L40) · [Before (L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L40)

```diff
-   38752: (dd, Od, md) => {
+   38419: (bb, wb, Mb) => {
```

#### 8. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L42-L48` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L42-L45) · [Before (L42-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L42-L48)

```diff
-       $: () => Ed,
-       A: () => Jd,
-       Ab: () => Bd,
-       C: () => Vd,
-       F: () => Rd,
-       G: () => Gd,
-       K: () => rd,
+       B: () => Zb,
+       D: () => pb,
+       Db: () => Rb,
+       H: () => Wb,
```

#### 9. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L50-L51` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L47) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L50-L51)

```diff
-       O: () => Sd,
-       Q: () => ud,
+       N: () => hb,
```

#### 10. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L53-L54` → after: `L49-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L49-L51) · [Before (L53-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L53-L54)

```diff
-       S: () => Fd,
-       W: () => Ad,
+       U: () => Yb,
+       X: () => Nb,
+       Y: () => Hb,
```

#### 11. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L62-L65` → after: `L62-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L62-L65) · [Before (L62-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L62-L65)

```diff
-       fb: () => zd,
-       g: () => Ud,
-       h: () => Td,
-       jb: () => gd,
+       gb: () => ab,
+       ib: () => vb,
+       j: () => lb,
+       kb: () => zb,
```

#### 12. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L67)

```diff
-       mb: () => vd,
+       m: () => Sb,
```

#### 13. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L72-L73` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L70-L72) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L72-L73)

```diff
-       qb: () => yd,
-       s: () => od,
+       pb: () => Bb,
+       r: () => tb,
+       sb: () => cb,
```

#### 14. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L75-L78` → after: `L74-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L74-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L74-L78) · [Before (L75-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L75-L78)

```diff
-       ub: () => pd,
-       v: () => td,
-       wb: () => xd,
-       z: () => Qd
+       u: () => Ib,
+       vb: () => Fb,
+       y: () => jb,
+       yb: () => mb,
+       zb: () => rb
```

#### 15. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L90)

```diff
-       return Fd(dd) ? md : Od
+       return Hb(bb) ? Mb : wb
```

#### 16. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L106` → after: `L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L106) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L106)

```diff
-       if (!md) throw new Error(`No WGSL name for shader type "${Od}"`);
+       if (!Mb) throw new Error(`No WGSL name for shader type "${wb}"`);
```

#### 17. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L112)

```diff
-       return `${Kd(dd,Od)}(${Wd.join(", ")})`
+       return `${gb(bb,wb)}(${eb.join(", ")})`
```

#### 18. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L120-L128` → after: `L120-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L120-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L120-L128) · [Before (L120-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L120-L128)

```diff
-       return Fd(dd) ? `var ${md}: ${Kd(dd,Od)} = ${Wd};` : `${qd(dd,Rd)}${Od} ${md} = ${Wd};`
-     }
- 
-     function td(dd, Od, md) {
-       return Fd(dd) ? `var ${md}: ${Kd(dd,Od)};` : `${Od} ${md};`
-     }
- 
-     function od(dd, Od, md, Wd) {
-       return Fd(dd) ? `const ${md}: ${Kd(dd,Od)} = ${Wd};` : `const ${Od} ${md} = ${Wd};`
+       return Hb(bb) ? `var ${Mb}: ${gb(bb,wb)} = ${eb};` : `${Cb(bb,pb)}${wb} ${Mb} = ${eb};`
+     }
+ 
+     function Ob(bb, wb, Mb) {
+       return Hb(bb) ? `var ${Mb}: ${gb(bb,wb)};` : `${wb} ${Mb};`
+     }
+ 
+     function Ub(bb, wb, Mb, eb) {
+       return Hb(bb) ? `const ${Mb}: ${gb(bb,wb)} = ${eb};` : `const ${wb} ${Mb} = ${eb};`
```

#### 19. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L133-L151` → after: `L133-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L133-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L133-L151) · [Before (L133-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L133-L151)

```diff
-         return `fn ${md}(${Wd.map((Od=>`${Od.name}: ${Kd(dd,Od.type)}`)).join(", ")}) -> ${Kd(dd,Od)} {${Rd}}`
-       }
-       return `${Od} ${md}(${Wd.map((dd=>`${dd.type} ${dd.name}`)).join(", ")}) {${Rd}}`
-     }
- 
-     function qd(dd, Od) {
-       return !Od || Fd(dd) ? "" : `${Od} `
-     }
- 
-     function Hd(dd, Od, md, Wd) {
-       return Fd(dd) ? `attribute ${Od}: ${Kd(dd,md)};` : `attribute ${qd(dd,Wd)}${md} ${Od};`
-     }
- 
-     function yd(dd, Od, md, Wd) {
-       return Fd(dd) ? `varying ${Od}: ${Kd(dd,md)};` : `varying ${qd(dd,Wd)}${md} ${Od};`
-     }
- ... (3 more removed lines; see GitHub link above)
+         return `fn ${Mb}(${eb.map((wb=>`${wb.name}: ${gb(bb,wb.type)}`)).join(", ")}) -> ${gb(bb,wb)} {${pb}}`
+       }
+       return `${wb} ${Mb}(${eb.map((bb=>`${bb.type} ${bb.name}`)).join(", ")}) {${pb}}`
+     }
+ 
+     function Cb(bb, wb) {
+       return !wb || Hb(bb) ? "" : `${wb} `
+     }
+ 
+     function Eb(bb, wb, Mb, eb) {
+       return Hb(bb) ? `attribute ${wb}: ${gb(bb,Mb)};` : `attribute ${Cb(bb,eb)}${Mb} ${wb};`
+     }
+ 
+     function Fb(bb, wb, Mb, eb) {
+       return Hb(bb) ? `varying ${wb}: ${gb(bb,Mb)};` : `varying ${Cb(bb,eb)}${Mb} ${wb};`
+     }
+ ... (3 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L159-L163` → after: `L159-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L159-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L159-L163) · [Before (L159-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L159-L163)

```diff
-       return Fd(dd) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${Od}}` : `void main() {${Od}}`
-     }
- 
-     function Yd(dd, Od) {
-       return Fd(dd) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${Od}}` : `void main() {${Od}}`
+       return Hb(bb) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${wb}}` : `void main() {${wb}}`
+     }
+ 
+     function hb(bb, wb) {
+       return Hb(bb) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${wb}}` : `void main() {${wb}}`
```

#### 21. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L168-L174` → after: `L168-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L168-L174) · [Before (L168-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L168-L174)

```diff
-         return [`var ${Od}Sampler: sampler;`, `var ${Od}: ${"2dArray"===md?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
-       }
-       return `uniform highp ${"2dArray"===md?"sampler2DArray":"sampler2D"} ${Od};`
-     }
- 
-     function wd(dd, Od, md) {
-       return Fd(dd) ? `textureSample(${Od}, ${Od}Sampler, ${md})` : `texture2D(${Od}, ${md})`
+         return [`var ${wb}Sampler: sampler;`, `var ${wb}: ${"2dArray"===Mb?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+       }
+       return `uniform highp ${"2dArray"===Mb?"sampler2DArray":"sampler2D"} ${wb};`
+     }
+ 
+     function Xb(bb, wb, Mb) {
+       return Hb(bb) ? `textureSample(${wb}, ${wb}Sampler, ${Mb})` : `texture2D(${wb}, ${Mb})`
```

#### 22. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L179)

```diff
-         return `${Rd?"textureSampleLevel":"textureSample"}(${Od}, ${Od}Sampler, ${md}, ${vd(dd,`round(${Wd})`)}${Rd?`, ${Rd}`:""})`
+         return `${pb?"textureSampleLevel":"textureSample"}(${wb}, ${wb}Sampler, ${Mb}, ${Lb(bb,`round(${eb})`)}${pb?`, ${pb}`:""})`
```

#### 23. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L182)

```diff
-       return Rd ? `textureLod(${Od}, ${Xd}, ${Rd})` : `texture(${Od}, ${Xd})`
+       return pb ? `textureLod(${wb}, ${Vb}, ${pb})` : `texture(${wb}, ${Vb})`
```

#### 24. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L198-L214` → after: `L198-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L198-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L198-L214) · [Before (L198-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L198-L214)

```diff
-       return Fd(dd) ? `vertexInputs.${Od}` : Od
-     }
- 
-     function Bd(dd, Od) {
-       return Fd(dd) ? `vertexOutputs.${Od}` : Od
-     }
- 
-     function Sd(dd, Od) {
-       return Fd(dd) ? `fragmentInputs.${Od}` : Od
-     }
- 
-     function sd(dd, Od) {
-       return Fd(dd) ? `uniforms.${Od}` : Od
-     }
- 
-     function ud(dd, Od, md) {
- ... (1 more removed lines; see GitHub link above)
+       return Hb(bb) ? `vertexInputs.${wb}` : wb
+     }
+ 
+     function Rb(bb, wb) {
+       return Hb(bb) ? `vertexOutputs.${wb}` : wb
+     }
+ 
+     function Db(bb, wb) {
+       return Hb(bb) ? `fragmentInputs.${wb}` : wb
+     }
+ 
+     function cb(bb, wb) {
+       return Hb(bb) ? `uniforms.${wb}` : wb
+     }
+ 
+     function Yb(bb, wb, Mb) {
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L234-L262` → after: `L234-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L234-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L234-L262) · [Before (L234-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L234-L262)

```diff
-       return Fd(dd) ? `dpdx(${Od})` : `dFdx(${Od})`
-     }
- 
-     function Ld(dd, Od) {
-       return Fd(dd) ? `dpdy(${Od})` : `dFdy(${Od})`
-     }
- 
-     function Pd(dd, Od) {
-       return Fd(dd) ? `inverseSqrt(${Od})` : `inversesqrt(${Od})`
-     }
- 
-     function zd(dd, Od, md, Wd) {
-       return Fd(dd) ? `select(${Wd}, ${md}, ${Od})` : `((${Od}) ? (${md}) : (${Wd}))`
-     }
- 
-     function cd(dd, Od, md) {
- ... (13 more removed lines; see GitHub link above)
+       return Hb(bb) ? `dpdx(${wb})` : `dFdx(${wb})`
+     }
+ 
+     function Sb(bb, wb) {
+       return Hb(bb) ? `dpdy(${wb})` : `dFdy(${wb})`
+     }
+ 
+     function Nb(bb, wb) {
+       return Hb(bb) ? `inverseSqrt(${wb})` : `inversesqrt(${wb})`
+     }
+ 
+     function vb(bb, wb, Mb, eb) {
+       return Hb(bb) ? `select(${eb}, ${Mb}, ${wb})` : `((${wb}) ? (${Mb}) : (${eb}))`
+     }
+ 
+     function Qb(bb, wb, Mb) {
+ ... (13 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/269.js` (Changed code · before: `L265` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15bR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-5ed2d05b74f1b93f906cd50769eb83b9db93e11ec995920cae9065596f51f15b) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/269.js#L265) · [Before (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/269.js#L265)

```diff
-   41785: (dd, Od, md) => {
+   41518: (bb, wb, Mb) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/270.js` (yteou.5361c997 → welxxc.ffac0572)

- **File**: `bundles/bloxd.io/chunks/js/270.js` (70 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3)

#### 1. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L4)

```diff
-   43004: (dd, Od, md) => {
+   42733: (bb, wb, Mb) => {
```

#### 2. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L8-L12` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L8-L12) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L8-L12)

```diff
-     var Wd = md(38993),
-       Fd = md(38982),
-       Rd = md(2402),
-       Xd = md(1890),
-       Kd = md(42959);
+     var eb = Mb(38675),
+       Hb = Mb(38657),
+       pb = Mb(2451),
+       Vb = Mb(1965),
+       gb = Mb(42654);
```

#### 3. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L16)

```diff
-         gt: Od
+         FO: wb
```

#### 4. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L24)

```diff
-         yt: () => !dd.wt,
+         UO: () => !bb.BO,
```

#### 5. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L33)

```diff
-             Od.uE && md()
+             wb.uR && Mb()
```

#### 6. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L41)

```diff
-     var vd = md(35422);
+     var Lb = Mb(35213);
```

#### 7. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L53-L56` → after: `L53-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L53-L56) · [Before (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L53-L56)

```diff
-           const qd = (0, Rd.c)();
-           if (qd.gt.NH) return "screenshot" !== dd || null !== td ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void Od()) : void(0, Kd.h)(hd(qd), vd, Qd).finally(Od);
-           const Hd = qd.gt.engine,
-             yd = qd.gt.zV(),
+           const Cb = (0, pb.h)();
+           if (Cb.FO.oC) return "screenshot" !== bb || null !== Ob ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void wb()) : void(0, gb.f)(lb(Cb), Lb, Ib).finally(wb);
+           const Eb = Cb.FO.engine,
+             Fb = Cb.FO.RJ(),
```

#### 8. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L59)

```diff
-           Promise.all([Promise.all([md.e(290), md.e(291), md.e(266)]).then((() => md(64761))), Promise.all([md.e(265), md.e(264), md.e(290), md.e(291), md.e(288), md.e(292), md.e(295), md.e(630), md.e(272)]).then((() => md(64768))), Promise.all([md.e(265), md.e(264), md.e(290), m … [truncated]
+           Promise.all([Promise.all([Mb.e(290), Mb.e(291), Mb.e(266)]).then((() => Mb(64405))), Promise.all([Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(292), Mb.e(295), Mb.e(630), Mb.e(272)]).then((() => Mb(64409))), Promise.all([Mb.e(265), Mb.e(264), Mb.e(290), M … [truncated]
```

#### 9. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L67)

```diff
-               Cq: Qd
+               YC: Ib
```

#### 10. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L76)

```diff
-               gd && (gd = !1, (0, Wd.h)(yd.meshes, !1)), null === (dd = wd) || void 0 === dd || dd(), wd = null, Yd.forEach((dd => {
+               zb && (zb = !1, (0, eb.g)(Fb.meshes, !1)), null === (bb = Xb) || void 0 === bb || bb(), Xb = null, hb.forEach((bb => {
```

#### 11. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L86)

```diff
-                   Fd = md.iG().boundingBox.center,
+                   Hb = Mb.XN().boundingBox.center,
```

#### 12. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L114)

```diff
-                 const Rd = Wd.iG().boundingBox.center,
+                 const pb = eb.XN().boundingBox.center,
```

#### 13. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L120)

```diff
-               Od += .1 * Wd, md = Math.max(0, md - .1 * Wd), console.log(`Depth range: min=${md.toFixed(2)}, max=${Od.toFixed(2)}, range=${Wd.toFixed(2)}`), Wd < 1 && (Od = md + 10);
+               wb += .1 * eb, Mb = Math.max(0, Mb - .1 * eb), console.log(`Depth range: min=${Mb.toFixed(2)}, max=${wb.toFixed(2)}, range=${eb.toFixed(2)}`), eb < 1 && (wb = Mb + 10);
```

#### 14. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L130-L132` → after: `L130-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L130-L132) · [Before (L130-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L130-L132)

```diff
-             if ((0, Wd.h)(yd.meshes, !0), gd = !0, "glb" === dd && (wd = (0, Fd.b)(yd.meshes)), "screenshot" === dd) {
-               let dd = `bloxd-screenshot-${bd}x${Td}-${Date.now()}.png`;
-               od ? dd = `bloxd-screenshot-normals-${bd}x${Td}-${Date.now()}.png` : Nd && (dd = `bloxd-screenshot-depth-${bd}x${Td}-${Date.now()}.png`), Kd(Hd, yd.activeCamera, {
+             if ((0, eb.g)(Fb.meshes, !0), zb = !0, "glb" === bb && (Xb = (0, Hb.b)(Fb.meshes)), "screenshot" === bb) {
+               let bb = `bloxd-screenshot-${Bb}x${sb}-${Date.now()}.png`;
+               Ub ? bb = `bloxd-screenshot-normals-${Bb}x${sb}-${Date.now()}.png` : tb && (bb = `bloxd-screenshot-depth-${Bb}x${sb}-${Date.now()}.png`), gb(Eb, Fb.activeCamera, {
```

#### 15. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L147` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L147) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L147)

```diff
-               let dd = "MH";
+               let bb = "JE";
```

#### 16. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L152` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L152) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L152)

```diff
-                   } = await Promise.all([md.e(265), md.e(264), md.e(290), md.e(291), md.e(288), md.e(298), md.e(297), md.e(273)]).then((() => md(42179))), {
+                   } = await Promise.all([Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(298), Mb.e(297), Mb.e(273)]).then((() => Mb(41933))), {
```

#### 17. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L154` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L154) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L154)

```diff
-                   } = await Promise.all([md.e(265), md.e(268)]).then((() => md(38736))), Wd = [], Fd = [];
+                   } = await Promise.all([Mb.e(265), Mb.e(268)]).then((() => Mb(38401))), eb = [], Hb = [];
```

#### 18. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L157)

```diff
-                         md = dd.iG().boundingBox.center,
+                         Mb = bb.XN().boundingBox.center,
```

#### 19. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L171` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L171) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L171)

```diff
-                       const Xd = new dd(`vertexColorMat_${Wd}`, yd);
+                       const Vb = new bb(`vertexColorMat_${eb}`, Fb);
```

#### 20. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L181` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L181) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L181)

```diff
-                       const Kd = new dd(`whiteMat_${Wd}`, yd);
+                       const gb = new bb(`whiteMat_${eb}`, Fb);
```

#### 21. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L190)

```diff
-                       const Od = dd.iG().boundingBox.center,
+                       const wb = bb.XN().boundingBox.center,
```

#### 22. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L198)

```diff
-                         hd = Wd.iG().boundingBox.center,
+                         lb = eb.XN().boundingBox.center,
```

#### 23. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L203)

```diff
-                           Kd = new dd(`depthMat_${Xd}`, yd);
+                           gb = new bb(`depthMat_${Vb}`, Fb);
```

#### 24. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L208)

```diff
-                 })().then((() => Promise.all([md.e(265), md.e(264), md.e(290), md.e(291), md.e(288), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(300), md.e(312), md.e(630), md.e(279), md.e(299), md.e(263)]).then((() => md(64791))))).then((Od => Od.GLTF2Export.GLBA … [truncated]
+                 })().then((() => Promise.all([Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(300), Mb.e(312), Mb.e(630), Mb.e(279), Mb.e(299), Mb.e(263)]).then((() => Mb(64430))))).then((wb => wb.GLTF2Export.GLBA … [truncated]
```

#### 25. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L213)

```diff
-               }), 100) : Promise.all([md.e(265), md.e(264), md.e(290), md.e(291), md.e(288), md.e(298), md.e(292), md.e(297), md.e(295), md.e(287), md.e(300), md.e(312), md.e(630), md.e(279), md.e(299), md.e(263)]).then((() => md(64791))).then((md => {
+               }), 100) : Promise.all([Mb.e(265), Mb.e(264), Mb.e(290), Mb.e(291), Mb.e(288), Mb.e(298), Mb.e(292), Mb.e(297), Mb.e(295), Mb.e(287), Mb.e(300), Mb.e(312), Mb.e(630), Mb.e(279), Mb.e(299), Mb.e(263)]).then((() => Mb(64430))).then((Mb => {
```

#### 26. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L241-L242` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L241-L242) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L241-L242)

```diff
-         } = await Promise.all([md.e(265), md.e(268)]).then((() => md(38736)));
-         (0, Rd.c)().gt.zV().ambientColor = Od.FromArray([dd, dd, dd])
+         } = await Promise.all([Mb.e(265), Mb.e(268)]).then((() => Mb(38401)));
+         (0, pb.h)().FO.RJ().ambientColor = wb.FromArray([bb, bb, bb])
```

#### 27. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L246-L247` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L246-L247) · [Before (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L246-L247)

```diff
-           return (0, Kd.d)(hd(dd), Od, md, Wd)
-         }((0, Rd.c)(), dd, Od, md)
+           return (0, gb.e)(lb(bb), wb, Mb, eb)
+         }((0, pb.h)(), bb, wb, Mb)
```

#### 28. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L250)

```diff
-         return (0, Kd.j)(hd((0, Rd.c)()))
+         return (0, gb.i)(lb((0, pb.h)()))
```

#### 29. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L254)

```diff
-   42959: (dd, Od, md) => {
+   42654: (bb, wb, Mb) => {
```

#### 30. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L256-L258` → after: `L256-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L256-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L256-L258) · [Before (L256-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L256-L258)

```diff
-       d: () => Kd,
-       h: () => vd,
-       j: () => hd
+       e: () => gb,
+       f: () => Lb,
+       i: () => lb
```

#### 31. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L260` → after: `L260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L260) · [Before (L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L260)

```diff
-     var Wd = md(1906);
+     var eb = Mb(1980);
```

#### 32. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L272)

```diff
-       return dd.yt() ? Xd ? Promise.reject(new Error("A screenshot is already being taken")) : (Xd = !0, new Promise(((Wd, Qd) => {
+       return bb.UO() ? Vb ? Promise.reject(new Error("A screenshot is already being taken")) : (Vb = !0, new Promise(((eb, Ib) => {
```

#### 33. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L326)

```diff
-       return dd.yt() ? new Promise(((Od, md) => {
+       return bb.UO() ? new Promise(((wb, Mb) => {
```

#### 34. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L339)

```diff
-         (0, Wd.e)(Fd.blob, `bloxd-screenshot-${Fd.width}x${Fd.height}-${Date.now()}.png`)
+         (0, eb.d)(Hb.blob, `bloxd-screenshot-${Hb.width}x${Hb.height}-${Date.now()}.png`)
```

#### 35. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L345)

```diff
-   38993: (dd, Od, md) => {
+   38675: (bb, wb, Mb) => {
```

#### 36. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L348` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L348) · [Before (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L348)

```diff
-       h: () => Kd,
+       g: () => gb,
```

#### 37. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L351-L352` → after: `L351-L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L351-L352) · [Before (L351-L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L351-L352)

```diff
-     var Wd = md(38987),
-       Fd = md(39002);
+     var eb = Mb(38668),
+       Hb = Mb(38678);
```

#### 38. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L357-L358` → after: `L357-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L357-L358) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L357-L358)

```diff
-       md._noaFaceGroups = null !== Od && void 0 !== Od ? Od : null, md._noaFaceEpoch = -1, md._noaFaceMask = -1, md._noaFaceCount = -1, md._noaFaceMaterial = null;
-       const Wd = dd.ZE;
+       Mb._noaFaceGroups = null !== wb && void 0 !== wb ? wb : null, Mb._noaFaceEpoch = -1, Mb._noaFaceMask = -1, Mb._noaFaceCount = -1, Mb._noaFaceMaterial = null;
+       const eb = bb.oR;
```

#### 39. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L375)

```diff
-       for (let Xd = 0; Xd < Wd.d; Xd++) {
+       for (let Vb = 0; Vb < eb.c; Vb++) {
```

#### 40. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L384)

```diff
-         this.Qt = dd, this.engine = Od, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+         this.gO = bb, this.engine = wb, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
```

#### 41. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L394)

```diff
-           Qd = Xd ? (0, Fd.e)(md, vd.getRenderWidth(), vd.getRenderHeight()) : 0;
+           Ib = Vb ? (0, Hb.c)(Mb, Lb.getRenderWidth(), Lb.getRenderHeight()) : 0;
```

#### 42. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L399)

```diff
-         } = this, Nd = this.Qt / 2, qd = Nd * Math.sqrt(3), Hd = dd.data, yd = dd.length;
+         } = this, tb = this.gO / 2, Cb = tb * Math.sqrt(3), Eb = bb.data, Fb = bb.length;
```

#### 43. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L406)

```diff
-             const md = dd.ZE,
+             const Mb = bb.oR,
```

#### 44. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L409)

```diff
-             if (Xd && Rd && (0, Wd.r)(dd.material)) {
+             if (Vb && pb && (0, eb.o)(bb.material)) {
```

#### 45. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L418)

```diff
-               vd = (0, Fd.l)(Od, Wd, Rd, Xd, (0, Fd.h)(Hd, Qd))
+               Lb = (0, Hb.l)(wb, eb, pb, Vb, (0, Hb.g)(Eb, Ib))
```

#### 46. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L423)

```diff
-                 Fd = Od[Wd.d]; - 1 !== vd && (Fd = hd(Od, vd, od), md = od[0]), dd._noaFaceCount = Fd, Rd.indexStart = 6 * md, Rd.indexCount = 6 * Fd, Rd.setBoundingInfo(dd.iG())
+                 Hb = wb[eb.c]; - 1 !== Lb && (Hb = lb(wb, Lb, Ub), Mb = Ub[0]), bb._noaFaceCount = Hb, pb.indexStart = 6 * Mb, pb.indexCount = 6 * Hb, pb.setBoundingInfo(bb.XN())
```

#### 47. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L432)

```diff
-   38982: (dd, Od, md) => {
+   38657: (bb, wb, Mb) => {
```

#### 48. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L435` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L435) · [Before (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L435)

```diff
-       f: () => Kd
+       d: () => gb
```

#### 49. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L447` → after: `L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L447) · [Before (L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L447)

```diff
-       (null !== (Od = null === (md = dd.getBuffer()) || void 0 === md ? void 0 : md.Mt) && void 0 !== Od ? Od : 0) > 0 && (Wd.add(dd), 0 === Fd ? Xd(dd, null) : Rd.add(dd))
+       (null !== (wb = null === (Mb = bb.getBuffer()) || void 0 === Mb ? void 0 : Mb.qO) && void 0 !== wb ? wb : 0) > 0 && (eb.add(bb), 0 === Hb ? Vb(bb, null) : pb.add(bb))
```

#### 50. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L456` → after: `L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L456) · [Before (L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L456)

```diff
-             for (const Fd of Object.values(null !== (md = null === dd || void 0 === dd ? void 0 : dd.getVertexBuffers()) && void 0 !== md ? md : {})) {
+             for (const Hb of Object.values(null !== (Mb = null === bb || void 0 === bb ? void 0 : bb.getVertexBuffers()) && void 0 !== Mb ? Mb : {})) {
```

#### 51. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L475)

```diff
-       if (!Od || !(Od.Mt > 0)) return;
+       if (!wb || !(wb.qO > 0)) return;
```

#### 52. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L477` → after: `L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L477) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L477)

```diff
-         Wd = new Uint8Array(Od.Mt);
+         eb = new Uint8Array(wb.qO);
```

#### 53. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L481)

```diff
-   38987: (dd, Od, md) => {
+   38668: (bb, wb, Mb) => {
```

#### 54. `bundles/bloxd.io/chunks/js/270.js` (Changed code · before: `L486-L489` → after: `L487-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc...build/bloxd.io/welxxc.ffac0572#diff-d68f446d813800c689b219f055f38aa2d272bda212fdf1f0c0dd8d42d1ca53b3) · [After (L487-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/welxxc.ffac0572/bundles/bloxd.io/chunks/js/270.js#L487-L489) · [Before (L486-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/9b16a7ad019388c2c794cf33cb1dc7573cb05ecc/bundles/bloxd.io/chunks/js/270.js#L486-L489)

```diff
-       k: () => Wd,
-       n: () => Kd,
-       p: () => Fd,
-       r: () => vd
+       l: () => gb,
+       m: () => Hb,
+       o: () => Lb
```
