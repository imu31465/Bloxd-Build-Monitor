# Changed — Bundle Modifications Report (Part 023 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `23 / 99` (**293** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 022](part-022.md) · [Part 024 →](part-024.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/230.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/230.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341)

#### 2. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L7-L8` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/230.js#L619) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/230.js#L7-L8)

```diff
-       g: () => pM,
-       j: () => RM
+       g: () => EU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L10-L67` → after: `L621-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L621-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/230.js#L621-L627) · [Before (L10-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/230.js#L10-L67)

```diff
-     var OM = iM(35120);
-     const SM = {
-         fileBytes: 4194304,
-         vertices: 65535,
-         indices: 196608,
-         accessorElements: 196608,
-         primitives: 64,
-         nodes: 128,
-         meshes: 64,
-         materials: 8,
-         images: 8,
-         imageSide: 1024
-       },
-       jM = {
-         items: 1024,
-         perFile: 1024,
- ... (42 more removed lines; see GitHub link above)
+     zU(61);
+     var cU = zU(1106),
+       yU = zU.n(cU),
+       QU = zU(5057),
+       AU = zU(320),
+       FU = zU(1193),
+       oU = zU(1305);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L70` → after: `L630-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L630-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/230.js#L630-L663) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/230.js#L70)

```diff
-       return MM.toLocaleString("en-US")
+       let {
+         value: XU,
+         onChange: zU,
+         showAll: cU,
+         disabled: DU = !1
+       } = UU;
+       const {
+         t: EU
+       } = (0, FU.I)();
+       return (0, oU.jsxs)("div", {
+         className: yU()("BloxdForm GamemodeForm", {
+           BasicOptions: !cU
+         }),
+         children: [(0, oU.jsx)("div", {
+           className: "SectionTitle",
+           children: EU("classic:defaultGamemode")
+ ... (18 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L82-L395` → after: `L667-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L667-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/230.js#L667-L702) · [Before (L82-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/230.js#L82-L395)

```diff
-       return Number.isInteger(MM) && MM >= 0
-     }
- 
-     function UM(MM, rM) {
-       return void 0 !== MM && (!Array.isArray(MM) || MM.length > rM)
-     }
- 
-     function GM(MM, rM) {
-       return "object" === typeof MM && null !== MM && Object.keys(MM).length > rM
-     }
- 
-     function CM(MM) {
-       var rM;
-       return `${MM.normalized?"normalized ":""}${null!==(rM=OM.e[MM.componentType])&&void 0!==rM?rM:MM.componentType} ${MM.type}`
-     }
- 
- ... (298 more removed lines; see GitHub link above)
+       let {
+         mapTypes: XU,
+         value: zU,
+         onChange: cU,
+         showAll: DU,
+         disabled: EU = !1,
+         children: YU
+       } = UU;
+       const {
+         t: NU
+       } = (0, FU.I)();
+       return (0, oU.jsxs)("div", {
+         className: yU()("BloxdForm MapTypeForm", {
+           BasicOptions: !DU
+         }),
+         children: [(0, oU.jsx)("div", {
+ ... (20 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/230.js` (Changed code · before: `L398-L556` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6399641beb4e7a5eb4b0556a595dd64b44900e4801d860bb255801d221982341) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/230.js#L705) · [Before (L398-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/230.js#L398-L556)

```diff
-   35120: (MM, rM, iM) => {
-     iM.d(rM, {
-       B: () => aM,
-       E: () => QM,
-       c: () => HM,
-       e: () => mM,
-       h: () => JM,
-       l: () => jM,
-       p: () => SM,
-       s: () => hM,
-       v: () => zM,
-       x: () => LM
-     });
-     var OM = iM(35126);
-     class SM extends Error {
-       constructor(MM) {
- ... (143 more removed lines; see GitHub link above)
+   37039: () => {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/231.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/231.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5)

#### 1. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L4` → after: `L4-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L4-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/231.js#L4-L114) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/231.js#L4)

```diff
-   35131: (MM, rM, iM) => {
+   37046: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => EU,
+       f: () => NU
+     });
+     var cU = zU(61),
+       yU = zU(1410),
+       QU = zU(1193),
+       AU = zU(1384),
+       FU = zU(3869),
+       oU = zU(5454),
+       DU = zU(1305);
+ 
+     function EU(UU) {
+       let {
+         loading: XU,
+ ... (95 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L6-L15` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/231.js#L116) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/231.js#L6-L15)

```diff
-       animatedBlockTextures: () => nM,
-       armourAtlasUrl: () => aM,
-       averageColors: () => QM,
-       blockAtlasUrls: () => jM,
-       blockAtlasWidth: () => OM,
-       buildHash: () => LM,
-       builtTextureIndexFingerprint: () => zM,
-       imagesPerAtlas: () => SM,
-       outputHash: () => mM,
-       rotatedBlockTextures: () => PM
+       runClientGameMessage: () => CU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/231.js` (Changed code · before: `L17-L10902` → after: `L118-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3fe0f475eeb53eb74a72dee8a067e1e54742dd4995ccb658cb7caca318a58cb5) · [After (L118-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/231.js#L118-L542) · [Before (L17-L10902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/231.js#L17-L10902)

```diff
-     const OM = 8,
-       SM = [256, 256, 256, 256, 256, 256, 114],
-       jM = [iM(35139), iM(35143), iM(35152), iM(35161), iM(35169), iM(35175), iM(35180)],
-       aM = iM(35182),
-       PM = {
-         "alloy_kiln_top[rot[1": iM(35186),
-         "alloy_kiln_top[rot[2": iM(35190),
-         "alloy_kiln_top[rot[3": iM(35195),
-         "alloy_kiln_top[rot[4": iM(35198),
-         "auto_bench_top[rot[1": iM(35207),
-         "auto_bench_top[rot[2": iM(35211),
-         "auto_bench_top[rot[3": iM(35217),
-         "auto_bench_top[rot[4": iM(35221),
-         "belt_tunnel_exit_top[rot[1": iM(35226),
-         "belt_tunnel_exit_top[rot[2": iM(35233),
-         "belt_tunnel_exit_top[rot[3": iM(35235),
- ... (10870 more removed lines; see GitHub link above)
+     var cU = zU(4122),
+       yU = zU(4139),
+       QU = zU(1360),
+       AU = zU(37046),
+       FU = zU(5490),
+       oU = zU(1106),
+       DU = zU.n(oU),
+       EU = zU(61),
+       YU = zU(1410),
+       NU = zU(1494),
+       IU = zU(344),
+       pU = zU(1193),
+       aU = zU(1390),
+       tU = zU(1305);
+ 
+     function gU(UU) {
+ ... (409 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/232.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/232.js` (65 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff)

#### 1. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L2)

```diff
- export const ids = [232];
+ export const ids = [59, 232];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L4-L9` → after: `L4-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L4-L20) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L4-L9)

```diff
-   41906: (MM, rM, iM) => {
-     function OM(MM, rM, iM) {
-       if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(MM, rM).getContext("2d", iM);
-       const OM = document.createElement("canvas");
-       return OM.width = MM, OM.height = rM, OM.getContext("2d", iM)
-     }
+   39382: (UU, XU, zU) => {
+     var cU = {
+       "./combat_1.png": 39386,
+       "./dungeon_crumbling_crypt.png": 39390,
+       "./dungeon_frozen_hollow.png": 39393,
+       "./dungeon_wildwood_grove.png": 39400,
+       "./dungeons.png": 39402,
+       "./farming_1.png": 39407,
+       "./fishing_1.png": 39415,
+       "./hub.png": 39421,
+       "./island.png": 39429,
+       "./mining_1.png": 39434,
+       "./mining_1_bridge.png": 39436,
+       "./mining_1_gallery.png": 39441,
+       "./mining_1_hollow.png": 39445,
+       "./mining_1_village.png": 39447
+ ... (1 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L11-L12` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L22-L24) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L11-L12)

```diff
-     function SM(MM, rM) {
-       return MM.getContext("2d", rM)
+     function yU(UU) {
+       var XU = QU(UU);
+       return zU(XU)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L28-L32` → after: `L27-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L27-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L27-L32) · [Before (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L28-L32)

```diff
-     function PM(MM, rM, iM) {
-       const PM = MM + OM,
-         nM = rM + jM,
-         QM = iM + OM;
-       return PM < 0 || PM >= SM || QM < 0 || QM >= SM || nM < 0 || nM >= aM ? -1 : (PM * SM + QM) * aM + nM
+     function QU(UU) {
+       if (!zU.o(cU, UU)) {
+         var XU = new Error("Cannot find module '" + UU + "'");
+         throw XU.code = "MODULE_NOT_FOUND", XU
+       }
+       return cU[UU]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L35` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L38) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L35)

```diff
-   41862: (MM, rM, iM) => {
+   39453: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L39-L44` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L41) · [Before (L39-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L39-L44)

```diff
-       e: () => SM,
-       i: () => jM,
-       j: () => zM,
-       n: () => QM,
-       p: () => nM,
-       s: () => PM
+       g: () => QU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L46-L51` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L43) · [Before (L46-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L46-L51)

```diff
-     iM(3860);
-     iM(41871);
- 
-     function OM(MM) {}
- 
-     function SM(MM) {}
+     const cU = new WeakMap;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L53-L61` → after: `L45-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L45-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L45-L47) · [Before (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L53-L61)

```diff
-     function jM(MM) {}
- 
-     function aM(MM) {}
- 
-     function PM(MM) {}
- 
-     function nM(MM, rM, iM) {}
- 
-     function QM(MM) {}
+     function yU(UU, XU) {
+       return cU.set(UU, XU), UU
+     }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L63` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L49-L52) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L63)

```diff
-     function zM(MM) {}
+     function QU(UU) {
+       var XU;
+       return null !== (XU = cU.get(UU)) && void 0 !== XU ? XU : null
+     }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L65` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L54) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L65)

```diff
-   41858: (MM, rM, iM) => {
+   39324: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L67-L82` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L56) · [Before (L67-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L67-L82)

```diff
-       e: () => EM,
-       h: () => hM,
-       i: () => BM,
-       l: () => gM,
-       p: () => pM,
-       t: () => WM,
-       x: () => lM,
-       B: () => dM,
-       D: () => yM,
-       F: () => tM,
-       H: () => AM,
-       I: () => CM,
-       L: () => oM,
-       O: () => FM,
-       P: () => sM,
-       S: () => kM
+       b: () => cU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L88-L89` → after: `L59-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L59-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L59-L66) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L88-L89)

```diff
-       constructor(MM, rM) {
-         this.memory = MM, this.access = rM, this.cursor = 0, this.dropped = 0, this.buffer = null, this.ptr = 0, this.vL = 0, this.u32 = new jM.j(0), this.f32 = new jM.f(0), this.u8 = new jM.b(0), this.dataView = new jM.g(new ArrayBuffer(0)), this.refresh()
+       constructor(UU, XU, zU) {
+         this.UY = UU, this.beforeOpen = XU, this.afterClose = zU, this.open = !1, this.kp = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
+           this.isEnabled() && !this.kp && (this.open = !0, this.beforeOpen(this), this.emit())
+         }, this.close = () => {
+           this.closePanel(!1)
+         }, this.dismiss = () => {
+           this.closePanel(!0)
+         }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L91-L92` → after: `L68-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L68-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L68-L69) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L91-L92)

```diff
-       refresh() {
-         this.ptr = this.access.ptr(), this.vL = this.access.vL(), this.buffer = (0, jM.H)(this.memory()), this.u32 = new jM.j(this.buffer, this.ptr, this.vL >>> 2), this.f32 = new jM.f(this.buffer, this.ptr, this.vL >>> 2), this.u8 = new jM.b(this.buffer, this.ptr, this.vL), this … [truncated]
+       isOpen() {
+         return this.open
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L94-L95` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L71-L72) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L94-L95)

```diff
-       ensureViews() {
-         (0, jM.H)(this.memory()) !== this.buffer && this.refresh()
+       showOrRefresh() {
+         this.open ? this.emit() : this.show()
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L97-L98` → after: `L74-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L74-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L74-L75) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L97-L98)

```diff
-       get view() {
-         return this.ensureViews(), this.dataView
+       closePanel(UU) {
+         this.open = !1, this.onClosed(), this.emit(), this.afterClose(UU)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L100-L101` → after: `L77-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L77-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L77-L85) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L100-L101)

```diff
-       room(MM) {
-         return !!this.fits(MM) || (this.dropped++, !1)
+       onClosed() {}
+       dispose() {
+         this.open = !1, this.emit(), this.kp = !0
+       }
+       isEnabled() {
+         return !0
+       }
+       emit() {
+         this.kp || (this.snapshot = this.buildSnapshot(), this.UY(this.snapshot))
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L190-L235` → after: `L88-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L88-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L88-L96) · [Before (L190-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L190-L235)

```diff
-     class QM {
-       constructor(MM, rM) {
-         this.input = void 0, this.net = void 0, this.worker = void 0, this.cmd = void 0, this.input = new aM(rM, {
-           ptr: () => MM.Om(),
-           vL: () => MM.FjM(),
-           reserve: rM => MM.iaM(rM)
-         }), this.net = new aM(rM, {
-           ptr: () => MM.cjM(),
-           vL: () => MM.VjM(),
-           reserve: rM => MM.OaM(rM)
-         }), this.worker = new aM(rM, {
-           ptr: () => MM.baM(),
-           vL: () => MM.eaM(),
-           reserve: rM => MM.SaM(rM)
-         }), this.cmd = new aM(rM, {
-           ptr: () => MM.kjM(),
- ... (30 more removed lines; see GitHub link above)
+   },
+   39455: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       SkyblockEntityFacing: () => FU,
+       needsSkyblockEntityFacing: () => AU
+     });
+     var cU = zU(638),
+       yU = zU(4608),
+       QU = zU(39462);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L238-L244` → after: `L99-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L99-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L99-L115) · [Before (L238-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L238-L244)

```diff
-       MM.forEachWorkerOut(((iM, SM, jM) => {
-         if ((0, OM.de)(iM)) try {
-           var aM;
-           null === (aM = rM.worldgen) || void 0 === aM || aM.take(iM, jM)
-         } catch (nM) {
-           MM.crash(CM, nM)
-         } else try {
+       if (UU.metaInfo === cU.b || "Iron Guardian" === UU.type || "Gold Guardian" === UU.type) return !0;
+       if ("Pig" === UU.type) return "sitting" === UU.pose;
+       if ("Person" !== UU.meshKind || void 0 === UU.meshOpts) return !1;
+       let zU = null === XU || void 0 === XU ? void 0 : XU.get(UU.meshOpts);
+       if (void 0 === zU) {
+         var QU, AU;
+         const cU = (0, yU.i)(UU);
+         zU = !1, "pig_napoleon" === (null === cU || void 0 === cU || null === (QU = cU.opts.textures) || void 0 === QU ? void 0 : QU.head) ? zU = !0 : "npc_pig_head" === (null === cU || void 0 === cU || null === (AU = cU.opts.textures) || void 0 === AU ? void 0 : AU.head) && (zU  … [truncated]
+       }
+       return "sitting" === zU ? "sitting" === UU.pose : zU
+     }(0, QU.i)("skyblock", ((UU, XU) => {
+       XU.setFacingTolerance(AU(UU) ? 0 : null)
+     }));
+     class FU {
+       constructor(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+ ... (1 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L246-L248` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L117-L118) · [Before (L246-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L246-L248)

```diff
-           null === (PM = rM.mesh) || void 0 === PM || PM.take(iM, SM, jM)
-         } catch (nM) {
-           MM.crash(WM, nM)
+           const zU = this.api.getEntityInfo(UU);
+           zU && (AU(zU, this.meshFacingCache) && (this.api.setFacingTolerance(UU, 0), this.nextFacing.add(UU)), null === (XU = this.alsoVisit) || void 0 === XU || XU.call(this, UU, zU))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L250` → after: `L120-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L120-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L120-L132) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L250)

```diff
-       }))
+       }
+       LY() {
+         const {
+           api: UU
+         } = this, XU = this.nextFacing;
+         UU.forEachEntity(this.visit);
+         for (const zU of this.facing) XU.has(zU) || UU.setFacingTolerance(zU, null);
+         this.facing.clear(), this.nextFacing = this.facing, this.facing = XU
+       }
+       dispose() {
+         for (const UU of this.facing) this.api.setFacingTolerance(UU, null);
+         this.facing.clear(), this.meshFacingCache.clear()
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L252` → after: `L134-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L134-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L134-L140) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L252)

```diff
-     const DM = 1048576;
+   },
+   39303: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       default: () => wF
+     });
+     const cU = "island";
+     var yU = zU(39311);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L254-L260` → after: `L142-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L142-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L142-L221) · [Before (L254-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L254-L260)

```diff
-     function kM(MM, rM) {
-       let iM = !1;
-       const OM = () => {
-         iM = !1, rM()
-       };
-       return () => {
-         !iM && MM.cursor >= DM && (iM = !0, queueMicrotask(OM))
+     function QU(UU, XU, zU) {
+       const QU = "local" === XU,
+         FU = UU.background,
+         oU = XU => FU ? (0, yU.e)(XU[0] - UU.mapOrigin[0], XU[2] - UU.mapOrigin[2], FU.bounds) : [50, 50],
+         DU = (UU.insideDungeon ? [] : UU.landmarks).map((UU => {
+           var XU, cU;
+           return {
+             id: UU.id,
+             name: zU(UU.visited && UU.nameKey ? null !== (XU = UU.mapLabelKey) && void 0 !== XU ? XU : UU.nameKey : "skyblockGame:mapUnknown"),
+             icon: UU.visited && null !== (cU = UU.icon) && void 0 !== cU ? cU : "unknown",
+             visited: UU.visited,
+             current: !1,
+             position: oU(UU.position),
+             travelKind: "landmark",
+             travelId: UU.id
+           }
+ ... (64 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L266-L289` → after: `L226-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L226-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L226-L236) · [Before (L266-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L266-L289)

```diff
-       return RM.has(MM.site) ? MM.error instanceof WebAssembly.RuntimeError || (0, SM.i)(MM.error) : !ZM.has(MM.site) && MM.error instanceof Error
-     }
-     const fM = "events",
-       YM = [],
-       NM = "debugLog",
-       AM = "terrainTextures",
-       xM = "sunShadowTextures",
-       vM = new TextDecoder;
- 
-     function FM(MM, rM) {
-       const {
-         site: iM,
-         error: SM,
-         header: jM
-       } = MM, aM = jM ? (0, OM.Yd)(jM.lastError) : "noFrame", PM = `CORE-${iM===JM?aM:iM}`, nM = null === SM || void 0 === SM ? "" : ` ${(0,zM.k)(SM)}`, QM = {
-         site: iM,
- ... (8 more removed lines; see GitHub link above)
+       const XU = new Set;
+       return UU.flatMap((zU => zU.connections.flatMap((cU => {
+         const yU = UU.find((UU => UU.id === cU)),
+           QU = [zU.id, cU].sort().join("|");
+         return !yU || XU.has(QU) ? [] : (XU.add(QU), [{
+           id: `${zU.id}-${cU}`,
+           start: zU.position,
+           end: yU.position,
+           explored: zU.visited && yU.visited
+         }])
+       }))))
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L291` → after: `L238-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L238-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L238-L241) · [Before (L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L291)

```diff
-     class BM {
+     var FU = zU(39324);
+     class oU extends FU.b {}
+     const DU = "skyblockMapView";
+     class EU extends oU {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L293-L398` → after: `L243-L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L243-L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L243-L278) · [Before (L293-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L293-L398)

```diff
-         this.core = MM, this.memory = rM, this.handlers = iM, this.rings = void 0, this.lastHeader = null, this.lastFrameKind = "none", this.stopped = !1, this.netKept = 0, this.keptFrames = 0, this.headerBuffer = null, this.header = new Uint32Array(0), this.loadCountsBuffer = nu … [truncated]
-           ptr: 0,
-           len: 0,
-           net: YM,
-           netOffsets: this.netOffsets,
-           kind: "none"
-         }, this.unsentEnvPrefs = null, this.unsentLookPrefs = null, this.envEvents = [], this.graceEvents = [], this.unsentOptions = [], this.optionsDropped = 0, this.drawsHeld = !1, this.gameHost = null, this.atSendsStop = !1, this.rings = new QM(MM, rM)
-       }
-       get netKeptFrames() {
-         return this.keptFrames
-       }
-       get netWrittenSinceFrame() {
-         return this.rings.net.cursor - this.netKept
-       }
-       hasPendingCommands() {
-         return this.rings.cmd.cursor > 0
- ... (90 more removed lines; see GitHub link above)
+         let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
+           yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
+           QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
+         super(UU, cU, yU), this.requestTravel = XU, this.translate = zU, this.now = QU, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
+           presentation: null,
+           enabled: !1,
+           open: !1,
+           tab: "local",
+           map: null,
+           pending: !1,
+           feedback: ""
+         }, this.showLocal = () => {
+           this.selectTab("local"), this.show()
+         }, this.selectTab = UU => {
+           this.tab = UU, this.feedbackKey = "", this.emit()
+         }, this.travel = (UU, XU) => {
+ ... (20 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L403-L422` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L282-L283) · [Before (L403-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L403-L422)

```diff
-       handEnvEvents() {
-         for (const jM of this.graceEvents) {
-           if (this.stopped) return !1;
-           try {
-             var MM, rM;
-             null === (MM = (rM = this.handlers).onReconnectGrace) || void 0 === MM || MM.call(rM, jM)
-           } catch (SM) {
-             return this.crashOn(bM, SM), !1
-           }
-         }
-         for (const jM of this.envEvents) {
-           if (this.stopped) return !1;
-           try {
-             var iM, OM;
-             null === (iM = (OM = this.handlers).onEnvEvent) || void 0 === iM || iM.call(OM, jM)
-           } catch (SM) {
- ... (4 more removed lines; see GitHub link above)
+       getEntities() {
+         return this.entities
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L424-L425` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L285-L286) · [Before (L424-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L424-L425)

```diff
-       setEventWalker(MM) {
-         this.eventWalker = MM
+       setTranslator(UU) {
+         this.translate = UU, this.emit()
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L427-L455` → after: `L288-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L288-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L288-L304) · [Before (L427-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L427-L455)

```diff
-       writePendingInput() {
-         if (this.stopped) return !1;
-         const {
-           input: MM
-         } = this.rings;
-         try {
-           const rM = this.unsentUiPrefs;
-           rM && MM.writeRecord(OM.tb.UiPrefs, 0, rM.nametagCutDistance, 0, (0, OM.se)(rM)) && (this.unsentUiPrefs = null);
-           const iM = this.unsentEnvPrefs;
-           iM && MM.writeRecord(OM.tb.EnvPrefs, (0, OM.ae)(iM), iM.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
-           const SM = this.unsentLookPrefs;
-           SM && MM.writeRecord(OM.tb.Sensitivity, 0, SM.mouse, SM.touch, (0, LM.l)(SM.fovPercent)) && (this.unsentLookPrefs = null);
-           let jM = 0;
-           for (const {
-               aux: OM,
-               payload: aM
- ... (13 more removed lines; see GitHub link above)
+       PY(UU) {
+         var XU;
+         if (!this.kp)
+           if ("entities" !== UU.kind)
+             if ("open" !== UU.kind) {
+               var zU, cU;
+               if ("snapshot" === UU.kind)(null === (zU = UU.snapshot) || void 0 === zU ? void 0 : zU.zoneId) !== (null === (cU = this.map) || void 0 === cU ? void 0 : cU.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = UU.snapshot, !this.map && this.open && thi … [truncated]
+               else if ("travelQueued" === UU.kind) {
+                 var yU;
+                 UU.requestId === (null === (yU = this.pending) || void 0 === yU ? void 0 : yU.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
+               } else if (UU.requestId === (null === (XU = this.pending) || void 0 === XU ? void 0 : XU.requestId)) {
+                 var QU;
+                 this.pending = null, this.feedbackKey = null !== (QU = UU.errorKey) && void 0 !== QU ? QU : "", null === UU.errorKey && this.close()
+               }
+               this.emit()
+             } else this.show();
+ ... (1 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L457-L458` → after: `L306-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L306-L307) · [Before (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L457-L458)

```diff
-       setHoldDraws(MM) {
-         this.drawsHeld = MM
+       LY() {
+         this.pending && this.now() >= this.pending.expiresAt && (this.pending = null, this.feedbackKey = "skyblockGame:mapTravelTimeout", this.emit())
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L460-L463` → after: `L309-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L309-L310) · [Before (L460-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L460-L463)

```diff
-       setUiPrefs(MM) {
-         this.unsentUiPrefs = {
-           ...MM
-         }
+       dispose() {
+         this.map = null, this.pending = null, super.dispose()
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L465-L468` → after: `L312-L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L312-L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L312-L313) · [Before (L465-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L465-L468)

```diff
-       setEnvPrefs(MM) {
-         this.unsentEnvPrefs = {
-           ...MM
-         }
+       isEnabled() {
+         return null !== this.map
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L470-L472` → after: `L315-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L315-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L315-L323) · [Before (L470-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L470-L472)

```diff
-       setLookPrefs(MM) {
-         this.unsentLookPrefs = {
-           ...MM
+       buildSnapshot() {
+         return {
+           presentation: this.map ? QU(this.map, this.tab, this.translate) : null,
+           enabled: this.isEnabled(),
+           open: this.open,
+           tab: this.tab,
+           map: this.map,
+           pending: null !== this.pending,
+           feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L475-L534` → after: `L326-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L326-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L326-L343) · [Before (L475-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L475-L534)

```diff
-       queueOptions(MM, rM) {
-         return !this.isStopped && (rM.byteLength > OM.$b.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
-           aux: MM,
-           payload: rM
-         }), !0))
-       }
-       setChunkCap(MM) {
-         return this.callCore("setChunkCap", null, (rM => rM.zaM(MM)))
-       }
-       shedMemory(MM) {
-         const rM = this.callCore("shedMemory", null, (rM => rM.yaM(MM)));
-         return 0 === rM ? null : rM
-       }
-       addDistanceInUse() {
-         const MM = this.callCore("addDistanceInUse", null, (MM => MM.gjM()));
-         return 0 === MM ? null : MM
- ... (44 more removed lines; see GitHub link above)
+     }
+     var YU = zU(344);
+     const NU = 67.5 * Math.PI / 180;
+ 
+     function IU(UU, XU) {
+       const zU = Math.abs(UU);
+       if (zU > NU || XU.trackHalfWidth <= 0) return null;
+       const cU = XU.trackHalfWidth,
+         yU = XU.screenHalfWidth / (XU.tanHalfFovX * Math.max(.5, Math.cos(XU.pitch))),
+         QU = Math.min(Math.atan(.6 * cU / yU), .75 * NU),
+         AU = yU * Math.tan(QU);
+       let FU;
+       if (zU <= QU) FU = yU * Math.tan(zU);
+       else {
+         const UU = NU - QU,
+           XU = Math.max(0, yU * UU / (Math.cos(QU) ** 2 * (cU - AU)) - 1),
+ ... (2 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L536-L540` → after: `L345-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L345-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L345-L349) · [Before (L536-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L536-L540)

```diff
-       setShaderPack(MM, rM, iM, OM, SM, jM) {
-         return this.callCore("setShaderPack", !1, (aM => {
-           var PM, nM;
-           return null !== (PM = null === (nM = aM.dOM) || void 0 === nM ? void 0 : nM.call(aM, MM, rM, iM, OM, SM, jM)) && void 0 !== PM && PM
-         }))
+       return 50 + Math.sign(UU) * FU * 50 / cU
+     }
+     class pU {
+       constructor(UU, XU) {
+         this.map = UU, this.visited = XU, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = XU ? "landmarks" : "unknownLandmarks"
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L542-L543` → after: `L351-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L351-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L351-L353) · [Before (L542-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L542-L543)

```diff
-       sunShadowWantedTextures() {
-         return this.callCore(xM, null, (MM => {
+       getPoints() {
+         const UU = this.map.getSnapshot().map;
+         return !UU || UU.insideDungeon ? [] : UU.landmarks.filter((UU => UU.visited === this.visited)).map((UU => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L545` → after: `L355-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L355-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L355-L361) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L545)

```diff
-           return null !== (rM = null === (iM = MM.laM) || void 0 === iM ? void 0 : iM.call(MM)) && void 0 !== rM ? rM : null
+           return {
+             id: `landmark:${UU.id}`,
+             position: UU.position,
+             icon: null !== (XU = UU.icon) && void 0 !== XU ? XU : "unknown",
+             nameKey: null !== (zU = UU.nameKey) && void 0 !== zU ? zU : "skyblockGame:compassUnknown",
+             kind: this.visited ? "landmark" : "unknown"
+           }
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L548-L552` → after: `L364-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L364-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L364-L367) · [Before (L548-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L548-L552)

```diff
-       setSunShadowTexture(MM, rM, iM, OM, SM) {
-         this.callCore(xM, void 0, (jM => {
-           var aM;
-           null === (aM = jM.haM) || void 0 === aM || aM.call(jM, MM, rM, iM, OM, SM)
-         }))
+     }
+     class aU {
+       constructor(UU, XU, zU, cU) {
+         this.map = UU, this.kind = XU, this.position = zU, this.alive = cU, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = XU, this.range = "enemy" === XU ? 48 : 64, this.limit = 12
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L554-L558` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L369-L370) · [Before (L554-L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L554-L558)

```diff
-       takeSunShadowWarnings() {
-         return this.callCore(xM, [], (MM => {
-           var rM, iM;
-           return null !== (rM = null === (iM = MM.UaM) || void 0 === iM ? void 0 : iM.call(MM)) && void 0 !== rM ? rM : []
-         }))
+       wG(UU) {
+         if ("enemy" !== this.kind || this.alive(UU.FX)) return this.position(UU.FX)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L560-L561` → after: `L372-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L372-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L372-L376) · [Before (L560-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L560-L561)

```diff
-       sunShadowsHeld() {
-         return this.callCore(xM, null, (MM => {
+       getPoints() {
+         const UU = [];
+         for (const cU of this.map.getEntities()) {
+           if (cU.kind !== this.kind || "enemy" === this.kind && !this.alive(cU.compassEntityId)) continue;
+           const yU = this.position(cU.compassEntityId);
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L563-L677` → after: `L378-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L378-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L378-L386) · [Before (L563-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L563-L677)

```diff
-           return null !== (rM = null === (iM = MM.EaM) || void 0 === iM ? void 0 : iM.call(MM)) && void 0 !== rM ? rM : null
-         }))
-       }
-       callCore(MM, rM, iM) {
-         if (this.stopped) return rM;
-         try {
-           return iM(this.core)
-         } catch (OM) {
-           return this.crash(MM, OM), rM
-         }
-       }
-       readEvents(MM) {
-         this.netOffsets.length = 0;
-         const rM = this.headerView(),
-           iM = rM[OM.ob.EventsPtr],
-           SM = rM[OM.ob.EventsLen];
- ... (99 more removed lines; see GitHub link above)
+           if (yU) UU.push({
+             id: `${this.kind}:${cU.compassEntityId}`,
+             FX: cU.compassEntityId,
+             kind: this.kind,
+             icon: null !== (XU = cU.icon) && void 0 !== XU ? XU : cU.npcSkin ? `npc_${cU.npcSkin}` : this.kind,
+             displayName: cU.displayName,
+             position: yU,
+             nameKey: null !== (zU = cU.nameKey) && void 0 !== zU ? zU : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
+           })
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L681-L703` → after: `L390-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L390-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L390-L393) · [Before (L681-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L681-L703)

```diff
-       takeSends(MM) {
-         this.atSendsStop = !0;
-         try {
-           MM()
-         } catch (rM) {
-           this.crashOn(uM, rM)
-         } finally {
-           this.atSendsStop = !1
-         }
-         return !this.stopped
-       }
-       forEachNetOut(MM) {
-         this.forEachOut(UM, "net-out", OM.ob.NetOutPtr, OM.ob.NetOutLen, OM.Ub, 0, ((rM, iM, SM, jM) => {
-           const aM = (0, OM.ie)(iM);
-           aM === OM.Wb.Frame ? MM((0, OM.he)(iM), SM) : this.crash(UM, `net-out record at ${jM} is kind ${aM}, not a frame`)
-         }))
- ... (7 more removed lines; see GitHub link above)
+     }
+     class tU {
+       constructor(UU) {
+         this.map = UU, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L705-L756` → after: `L395-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L395-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L395-L406) · [Before (L705-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L705-L756)

```diff
-       initOf(MM, rM) {
-         const iM = this.memory().buffer;
-         if (MM.byteLength !== OM.pb) return this.crash(GM, `worker-out Init record at ${rM} is ${MM.byteLength} bytes, not a view`), null;
-         const SM = new DataView(MM.buffer, MM.byteOffset, OM.pb),
-           jM = SM.getUint32(0, !0),
-           aM = SM.getUint32(4, !0);
-         return jM + aM > iM.byteLength ? (this.crash(GM, `worker-out Init record at ${rM} names ${aM} bytes at ${jM} outside ${iM.byteLength} bytes of memory`), null) : new Uint8Array(iM, jM, aM)
-       }
-       forEachOut(MM, rM, iM, SM, jM, aM, PM) {
-         if (!this.headerReadable()) return;
-         const nM = this.headerView(),
-           QM = nM[iM],
-           zM = nM[SM];
-         if (0 === zM) return;
-         const LM = this.memory().buffer;
-         if (QM % 4 !== 0 || QM + zM > LM.byteLength) return void this.crash(MM, `${rM} of ${zM} bytes at ${QM} outside ${LM.byteLength} bytes of memory`);
- ... (36 more removed lines; see GitHub link above)
+       getPoints() {
+         const UU = this.map.getSnapshot().map;
+         return !UU || UU.insideDungeon ? [] : UU.portals.map((UU => {
+           var XU;
+           return {
+             id: "portal:" + UU.id,
+             kind: "portal",
+             position: UU.position,
+             nameKey: null !== (XU = UU.nameKey) && void 0 !== XU ? XU : "skyblockGame:compassUnvisitedZone",
+             icon: UU.visited ? "dungeons" === UU.destination ? "portal_orange" : "portal" : "unknown",
+             colour: UU.colour
+           }
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L759-L760` → after: `L409-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L409-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L409-L412) · [Before (L759-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L759-L760)

```diff
-       headerWord(MM) {
-         return this.headerReadable() ? this.headerView()[MM] : 0
+     }
+     class gU {
+       constructor(UU) {
+         this.target = UU, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L762-L763` → after: `L414-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L414-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L414-L422) · [Before (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L762-L763)

```diff
-       headerReadable() {
-         return !this.stopped && (null !== this.lastHeader || this.atSendsStop)
+       getPoints() {
+         const UU = this.target();
+         return UU ? [{
+           id: "quest",
+           kind: "quest",
+           icon: "quest",
+           position: UU.position,
+           nameKey: UU.nameKey
+         }] : []
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L765-L767` → after: `L424-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L424-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L424-L434) · [Before (L765-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L765-L767)

```diff
-       readLoadCounts(MM) {
-         const rM = this.loadCountWords();
-         return null !== rM && (MM.chunksReceived = rM[OM.Jb.ChunksReceived], MM.chunksCancelled = this.headerView()[OM.ob.ChunksCancelled], MM.chunksStored = rM[OM.Jb.ChunksStored], MM.jobsSent = rM[OM.Jb.JobsSent], MM.jobsDone = rM[OM.Jb.JobsDone], MM.jobsInFlight = rM[OM.Jb.Job … [truncated]
+     }
+ 
+     function kU(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.position;
+       const yU = cU[0] - XU[0],
+         QU = cU[2] - XU[2];
+       return {
+         ...UU,
+         position: cU,
+         offset: YU.d.computeShortestRotation(zU, (0, YU.Cb)([yU, 0, QU])),
+         distance: Math.hypot(yU, cU[1] - XU[1], QU)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L769-L772` → after: `L436-L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L436-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L436-L455) · [Before (L769-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L769-L772)

```diff
-       readViewQueuedPrograms() {
-         var MM, rM;
-         const iM = null !== (MM = null === (rM = this.loadCountWords()) || void 0 === rM ? void 0 : rM[OM.Jb.ViewQueuedPrograms]) && void 0 !== MM ? MM : 0;
-         return 0 === iM ? null : iM - 1
+     }
+     let GU;
+ 
+     function BU(UU, XU) {
+       var zU;
+       return (null === (zU = GU) || void 0 === zU ? void 0 : zU.locale) !== XU && (GU = {
+         locale: XU,
+         near: new Intl.NumberFormat(XU, {
+           minimumFractionDigits: 1,
+           maximumFractionDigits: 1
+         }),
+         far: new Intl.NumberFormat(XU, {
+           minimumFractionDigits: 0,
+           maximumFractionDigits: 0
+         })
+       }), (UU < 10 ? GU.near : GU.far).format(UU)
+ ... (4 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L774-L776` → after: `L457-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L457-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L457-L460) · [Before (L774-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L774-L776)

```diff
-       readFirstViewWait(MM, rM) {
-         const iM = this.loadCountWords();
-         return null === iM ? null : [iM[OM.Jb.FirstViewLinkMs], iM[OM.Jb.FirstViewTerrainMs], iM[OM.Jb.FirstViewHeldMs], iM[OM.Jb.FirstViewOtherMs], iM[OM.Jb.FirstViewGaps], iM[OM.Jb.FirstViewGapMs], MM, rM]
+       register(UU) {
+         return this.providers.set(UU.id, UU), this.refreshAt = 0, () => {
+           this.providers.get(UU.id) === UU && (this.providers.delete(UU.id), this.refreshAt = 0)
+         }
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L778-L783` → after: `L462-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L462-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L462-L496) · [Before (L778-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L778-L783)

```diff
-       loadCountWords() {
-         if (this.stopped || null === this.lastHeader) return null;
-         const MM = this.core.Xd();
-         if (0 === MM) return null;
-         const rM = this.memory().buffer;
-         return rM !== this.loadCountsBuffer && (this.loadCountsBuffer = rM, this.loadCounts = new Uint32Array(rM, MM, OM.Db)), this.loadCounts
+       frame(UU, XU, zU) {
+         if (zU >= this.refreshAt) {
+           this.refreshAt = zU + 200, this.candidates = [];
+           for (const XU of this.providers.values()) {
+             if (!XU.enabled) continue;
+             const zU = XU.getPoints().map((XU => {
+               const zU = XU.position;
+               return {
+                 point: XU,
+                 distance: Math.hypot(zU[0] - UU[0], zU[1] - UU[1], zU[2] - UU[2])
+               }
+             })).filter((UU => UU.distance <= XU.range)).sort(((UU, XU) => UU.distance - XU.distance)).slice(0, XU.limit);
+             for (const {
+                 point: UU
+               }
+               of zU) this.candidates.push({
+ ... (19 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L785-L787` → after: `L498-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L498-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L498-L499) · [Before (L785-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L785-L787)

```diff
-       headerView() {
-         const MM = this.memory().buffer;
-         return MM !== this.headerBuffer && (this.headerBuffer = MM, this.header = new Uint32Array(MM, this.core.RH(), OM.lb)), this.header
+       dispose() {
+         this.providers.clear(), this.candidates = []
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L790-L797` → after: `L502-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L502-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L502-L535) · [Before (L790-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L790-L797)

```diff
-   },
-   41876: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM,
-       f: () => jM
-     });
-     var OM = iM(5069);
-     let SM = null;
+     var RU = zU(37334),
+       PU = zU(61);
+     const WU = [{
+         dailyRewardCoins: 1e3,
+         dailyRewardItems: []
+       }, {
+         dailyRewardCoins: 3e3,
+         dailyRewardItems: []
+       }, {
+         dailyRewardCoins: 4e3,
+         dailyRewardItems: []
+       }, {
+         dailyRewardCoins: 5500,
+         dailyRewardItems: []
+       }, {
+         dailyRewardCoins: 7e3,
+ ... (18 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L800-L807` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L538) · [Before (L800-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L800-L807)

```diff
-       SM = {
-         scanned: !1
-       };
-       try {
-         return MM()
-       } finally {
-         SM = null
-       }
+       return UU >= dU ? 1 : UU + 1
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L810-L814` → after: `L554-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L554-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L554-L565) · [Before (L810-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L810-L814)

```diff
-     function aM() {
-       const MM = SM;
-       if (null === MM) return (0, OM.i)();
-       const rM = (0, OM.i)(!MM.scanned);
-       return MM.scanned = !0, rM
+     function qU(UU) {
+       let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+       const zU = Math.max(0, Math.floor(UU)),
+         cU = Math.floor(zU % 1e3 / 100),
+         yU = Math.floor(zU / 1e3),
+         QU = yU % 60,
+         AU = Math.floor(yU / 60),
+         FU = AU % 60,
+         oU = Math.floor(AU / 60),
+         DU = UU => UU < 10 ? `0${UU}` : String(UU),
+         EU = XU ? `.${cU}` : "";
+       return oU > 0 ? `${oU}:${DU(FU)}:${DU(QU)}${EU}` : `${FU}:${DU(QU)}${EU}`
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L816-L824` → after: `L567-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L567-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L567-L634) · [Before (L816-L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L816-L824)

```diff
-   },
-   41922: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => OM
-     });
-     const OM = {
-       webgpu: "rust_webgpu",
-       webgl: "rust_webgl2",
-       webgl1: "rust_webgl1"
+     const OU = "devquests",
+       SU = "none",
+       rU = {
+         hub: {
+           farming_1: {
+             min: [4, 16, 90],
+             max: [4, 18, 91],
+             unlockedBlock: "Yellow Portal"
+           },
+           mining_1: {
+             min: [95, 16, 2],
+             max: [97, 18, 2],
+             unlockedBlock: "Cyan Portal"
+           },
+           combat_1: {
+             min: [207, 36, 49],
+ ... (52 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L826-L829` → after: `L636-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L636-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L636-L645) · [Before (L826-L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L826-L829)

```diff
-   },
-   41939: (MM, rM, iM) => {
-     function OM() {
-       return iM(41947)
+     var sU = zU(1258);
+     var nU = zU(37067);
+     var mU = zU(37325),
+       lU = zU(31),
+       xU = zU(9449);
+     const JU = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
+       jU = 1e3;
+ 
+     function KU(UU) {
+       return Math.max(0, UU)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L832-L833` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L648-L649) · [Before (L832-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L832-L833)

```diff
-     function SM() {
-       return iM(41954)
+     function bU(UU) {
+       return 1 + .01 * KU(UU)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L837` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L653) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L837)

```diff
-       return ["pl", "ru", "tr", "uk", "vi"].includes(MM)
+       return 1 + .005 * KU(UU)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L857-L859` → after: `L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L657) · [Before (L857-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L857-L859)

```diff
-       if (MM instanceof WebAssembly.RuntimeError) return !0;
-       const rM = MM instanceof Error ? MM.stack : void 0;
-       return "string" === typeof rM && jM.test(rM)
+       return 1 + .005 * KU(UU)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L862-L869` → after: `L660-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L660-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L660-L661) · [Before (L862-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L862-L869)

```diff
-     function PM(MM, rM, iM) {
-       var SM;
-       const aM = MM instanceof Error ? MM.name : "thrown",
-         PM = (MM instanceof Error && null !== (SM = MM.stack) && void 0 !== SM ? SM : "").split("\n").filter((MM => jM.test(MM))).slice(0, 8).map((MM => MM.trim())),
-         nM = null === rM ? "wasm memory unknown" : `wasm memory ${Math.round(rM/2**20)} MB`,
-         QM = null === iM.panic ? "" : `, panic: ${(0,OM.i)(iM.panic)}`,
-         zM = `${aM}: ${MM instanceof Error?MM.message:String(MM)}`;
-       return `${(0,OM.o)(iM.kind,iM.refusedBytes)} ${zM} (${nM})${QM}${PM.length>0?` | ${PM.join(" < ")}`:""}`
+     function UX(UU) {
+       return .01 * KU(UU)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L874-L882` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L665) · [Before (L874-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L874-L882)

```diff
-       var rM;
-       let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ArrayBuffer.prototype;
-       if (!(MM instanceof Error) || !nM.test(MM.message)) return {};
-       if (!("detached" in iM)) return {
-         arrayBufferDetached: "absent"
-       };
-       return {
-         arrayBufferDetached: (0, SM.V)(null === (rM = (0, SM.M)(iM, "detached")) || void 0 === rM ? void 0 : rM.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
-       }
+       return 150 / (150 + KU(UU))
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L887-L897` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L669) · [Before (L887-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L887-L897)

```diff
-       let rM = "[object Object]";
-       try {
-         rM = String(MM)
-       } catch {}
-       if ("[object Object]" !== rM) return rM;
-       try {
-         var iM, OM;
-         return null !== (iM = null === (OM = JSON.stringify(MM)) || void 0 === OM ? void 0 : OM.slice(0, zM)) && void 0 !== iM ? iM : rM
-       } catch {
-         return rM
-       }
+       return 1 + .002 * KU(UU)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L916-L917` → after: `L672-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L672-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L672-L673) · [Before (L916-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L916-L917)

```diff
-     function SM(MM, rM) {
-       return jM(MM, rM) ? `trap=alloc_failed ${rM} bytes` : `trap=${MM}`
+     function cX(UU) {
+       return Math.round(10 * UU) / 10
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L921` → after: `L677-L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L677-L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L677-L702) · [Before (L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L921)

```diff
-       return "unreachable" === MM && rM > 0
+       switch (UU) {
+         case "foraging":
+           return {
+             translationKey: "skyblockGame:foragingBenefit", percent: cX(100 * (TU(XU) - 1))
+           };
+         case "combat":
+           return {
+             translationKey: "skyblockGame:combatBenefit", percent: cX(100 * (bU(XU) - 1))
+           };
+         case "mining":
+           return {
+             translationKey: "skyblockGame:miningBenefit", percent: cX(100 * (hU(XU) - 1))
+           };
+         case "farming":
+           return {
+             translationKey: "skyblockGame:farmingBenefit", percent: cX(100 * UX(XU))
+ ... (10 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L924-L938` → after: `L705-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L705-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L705-L720) · [Before (L924-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L924-L938)

```diff
-     function aM(MM, rM, iM) {
-       const OM = function(MM) {
-         return MM instanceof WebAssembly.RuntimeError ? /unreachable/i.test(MM.message) ? "unreachable" : /out of bounds/i.test(MM.message) ? "out_of_bounds" : "runtime_error" : (MM instanceof RangeError || MM instanceof Error && "InternalError" === MM.name) && /call stack|recurs … [truncated]
-       }(MM);
-       if ("unreachable" !== OM) return {
-         kind: OM,
-         panic: null,
-         refusedBytes: 0
-       };
-       const SM = rM(),
-         jM = iM();
-       return {
-         kind: OM,
-         panic: jM > 0 ? null : SM,
-         refusedBytes: jM
+     function QX(UU) {
+       return "farming" === UU ? 200 : 100
+     }
+ 
+     function AX(UU, XU) {
+       if (!Number.isSafeInteger(UU) || UU < 0) throw new Error("Skill XP must be a non-negative safe integer");
+       const zU = QX(XU),
+         cU = UU => function(UU, XU) {
+           return QX(UU) * XU * (XU + 1) / 2
+         }(XU, UU);
+       let yU = Math.min(jU, Math.floor((Math.sqrt(8 * UU / zU + 1) - 1) / 2));
+       return yU < jU && cU(yU + 1) <= UU ? yU++ : cU(yU) > UU && yU--, {
+         totalXp: UU,
+         level: yU,
+         xpIntoLevel: UU - cU(yU),
+         xpForNextLevel: yU === jU ? null : zU * (yU + 1)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L941` → after: `L723-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L723-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L723-L728) · [Before (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L941)

```diff
-     const PM = 300;
+     const FX = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);
+ 
+     function oX(UU) {
+       return FX.has(UU)
+     }
+     const DX = new Set(YU.sb);
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/232.js` (Changed code · before: `L944` → after: `L731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deffR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e1b265feee1eb19651982593b30246e7f79848318574001083e8372d8587deff) · [After (L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/232.js#L731) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/232.js#L944)

```diff
-       return MM.replace(/\s*\n\s*/g, " / ").slice(0, PM)
+       return DX.has(UU)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/233.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/233.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925)

#### 1. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/233.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/233.js#L4-L8)

```diff
-   37437: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM,
-       i: () => SM,
-       k: () => jM
+   37074: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       default: () => WU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L10-L13` → after: `L8-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L8-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/233.js#L8-L29) · [Before (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/233.js#L10-L13)

```diff
-     var OM = iM(1899);
-     class SM extends Error {
-       constructor(MM) {
-         super("The game server didn't answer in time"), this.leg = MM, this.name = "SeatRequestTimedOut"
+     var cU = zU(1106),
+       yU = zU.n(cU),
+       QU = zU(1577),
+       AU = zU(1103),
+       FU = zU(825),
+       oU = zU(1193),
+       DU = zU(1494),
+       EU = zU(1568),
+       YU = zU(3952),
+       NU = zU(1390),
+       IU = zU(3869),
+       pU = zU(2833),
+       aU = zU(1305);
+     const tU = 2;
+ 
+     function gU(UU) {
+ ... (6 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L16-L18` → after: `L32-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L32-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/233.js#L32-L109) · [Before (L16-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/233.js#L16-L18)

```diff
-     const jM = new class {
-       constructor() {
-         this.count = 0, this.answers = 0, this.waiting = new Set
+ 
+     function kU(UU) {
+       let {
+         game: XU,
+         disabled: zU,
+         showPlaceholder: cU
+       } = UU;
+       return null !== XU ? (0, aU.jsx)(IU.g, {
+         source: gU(XU),
+         gameWidth: "100%",
+         useLongRatio: !0,
+         disabled: zU,
+         entrySource: "customGamePlace"
+       }) : cU ? (0, aU.jsx)(IU.c, {
+         gameWidth: "100%",
+         useLongRatio: !0
+ ... (62 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L20-L249` → after: `L111-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L111-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/233.js#L111-L155) · [Before (L20-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/233.js#L20-L249)

```diff
-       get answered() {
-         return this.answers
-       }
-       answer() {
-         this.answers++
-       }
-       add() {
-         this.count++;
-         for (const MM of this.waiting) MM()
-       }
-       remove() {
-         this.count--
-       }
-       whenSlow(MM) {
-         return this.count > 0 || MM.aborted ? Promise.resolve(!MM.aborted) : new Promise((rM => {
-           const iM = () => {
- ... (214 more removed lines; see GitHub link above)
+       return (0, aU.jsxs)("div", {
+         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
+         children: [(0, aU.jsxs)("div", {
+           className: "CustomGamePlaceUpper",
+           children: [(0, aU.jsxs)("div", {
+             className: "CustomGamePlaceMain",
+             children: [(0, aU.jsxs)("div", {
+               className: "CustomGamePlaceRow",
+               children: [zU(0), zU(2)]
+             }), zU(1)]
+           }), zU(4)]
+         }), (0, aU.jsxs)("div", {
+           className: "CustomGamePlaceRow",
+           children: [zU(3), zU(5)]
+         })]
+       })
+ ... (29 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L253-L385` → after: `L159-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L159-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/233.js#L159-L171) · [Before (L253-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/233.js#L253-L385)

```diff
-       return bM ??= {
-         os: (0, SM.getOperatingSystem)(),
-         deviceMemory: navigator.deviceMemory,
-         ...(0, aM.f)()
-       }, {
-         ...bM,
-         x32: null !== (MM = (0, QM.h)()) && void 0 !== MM ? MM : void 0
-       }
-     }
- 
-     function uM() {
-       return eM(gM(), (0, PM.e)(), (0, nM.C)("wasm").length > 0)
-     }
- 
-     function RM() {
-       return tM ??= (0, LM.t)(eM(gM(), null, !1).chunkCap), tM
- ... (117 more removed lines; see GitHub link above)
+       const {
+         t: XU
+       } = (0, oU.I)(), zU = (0, QU.C)(), cU = (0, PU.h)(), NU = (0, YU.c)({
+         refresh: !0
+       }), IU = zU.customGamePlace;
+       if (!(0, AU.k)(IU)) return (0, aU.jsx)(EU.NavigatePreserveSearch, {
+         to: "/"
+       });
+       const pU = FU.d[IU],
+         tU = AU.c[IU],
+         gU = null !== (UU = null === NU || void 0 === NU ? void 0 : NU[IU]) && void 0 !== UU ? UU : null,
+         kU = [];
+       for (let yU = 0; yU < tU.length; yU++) {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L387-L446` → after: `L173-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L173-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/233.js#L173-L182) · [Before (L387-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/233.js#L387-L446)

```diff
-         return bM(this.memory.memoryBytes(), MM, null !== (iM = this.ceilingBytes) && void 0 !== iM ? iM : rM)
-       }
-       reserveAtJoin(MM) {
-         let {
-           targetBytes: rM,
-           leastBytes: iM
-         } = MM;
-         const OM = this.memory.memoryBytes(),
-           SM = OM + iM,
-           jM = Math.max(rM + (this.ballastOn() ? zM : 0), SM),
-           aM = this.call((() => this.memory.reserveUpFront(jM) ? "target" : jM > SM && this.memory.reserveUpFront(SM) ? "least" : "none"), "none");
-         if (this.stopped) return !1;
-         if ("target" !== aM) {
-           const MM = "least" === aM ? `took ${SM} bytes instead` : "frames grow it in steps";
-           console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${jM} bytes was refused at ${OM} bytes; ${MM}`)
-         }
- ... (44 more removed lines; see GitHub link above)
+         const UU = ZU[yU];
+         if (!UU) continue;
+         const zU = tU[yU];
+         kU.push({
+           id: zU.id,
+           category: zU.category,
+           title: XU(zU.displayTranslationKey),
+           tintColour: zU.tintColour,
+           layout: RU[UU],
+           games: null !== (WU = null === gU || void 0 === gU ? void 0 : gU[zU.id]) && void 0 !== WU ? WU : null
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L449-L480` → after: `L185-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L185-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/233.js#L185-L190) · [Before (L449-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/233.js#L449-L480)

```diff
-       workerGone(MM) {
-         const rM = this.workers.get(MM);
-         rM && (rM.gone = !0)
-       }
-       details() {
-         var MM, rM;
-         const iM = this.memory.memoryBytes(),
-           SM = {
-             wasmMemoryNow: `${(0,OM.l)(iM)} MiB`,
-             wasmMemoryMiB: String(Math.floor(iM / OM.e))
-           };
-         null !== this.joinReserveTaken && (SM.wasmMemoryJoinReserve = this.joinReserveTaken), this.sheds > 0 && (SM.wasmMemoryShed = `${this.sheds}, chunk cap ${this.shedCap}`);
-         const jM = this.main;
-         if (jM) {
-           SM.wasmMemoryMain = gM(jM);
-           const MM = Math.max(0, jM.peakLiveBytes - this.ballastPeakBytes),
- ... (16 more removed lines; see GitHub link above)
+       return (0, aU.jsxs)("div", {
+         className: "CustomGamePlaceContainer AnimFadeIn",
+         children: [(0, aU.jsx)("div", {
+           className: "BackgroundImage",
+           style: {
+             backgroundImage: `url(/textures/games/${IU}/${pU.largePicture}.png)`
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/233.js` (Changed code · before: `L482-L556` → after: `L192-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b2a9cb4c4b382cf3c10a5baaac7dc8bef2a677a3ae9530b82644e44446d49925) · [After (L192-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/233.js#L192-L213) · [Before (L482-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/233.js#L482-L556)

```diff
-           of this.workers.values()) aM += OM.reservesRefused, PM += OM.allocationsRefused;
-         return {
-           wasmMainMiB: Number((0, OM.l)(this.memory.memoryBytes())),
-           wasmWorkersMiB: Number((0, OM.l)(this.workersMemoryBytes())),
-           peakStoredChunks: this.peakStoredChunks,
-           refusedReserves: aM,
-           refusedAllocations: PM,
-           sheds: this.sheds,
-           ...null === (jM = this.footprint) || void 0 === jM ? void 0 : jM.snapshot()
-         }
-       }
-       workersMemoryBytes() {
-         let MM = 0;
-         for (const {
-             stats: rM,
-             gone: iM
- ... (59 more removed lines; see GitHub link above)
+         }), (0, aU.jsx)("h1", {
+           className: "VisuallyHidden",
+           children: XU(pU.title)
+         }), (0, aU.jsx)("div", {
+           className: "CustomGamePlaceHeaderContainer",
+           children: (0, aU.jsx)(DU.e, {
+             onClick: () => (0, EU.navigatePreserveSearch)("/"),
+             children: XU("homePage:backToGames")
+           })
+         }), !cU && (0, aU.jsx)(BU, {
+           categories: kU
+         }), cU && (0, aU.jsx)("div", {
+           className: yU()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
+           children: kU.map((UU => (0, aU.jsx)(GU, {
+             category: UU.category,
+             title: UU.title,
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/234.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/234.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89)

#### 1. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L4` → after: `L4-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L4-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/234.js#L4-L183) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/234.js#L4)

```diff
-   37271: (MM, rM, iM) => {
+   37083: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => EU,
+       i: () => FU,
+       l: () => DU,
+       o: () => oU,
+       q: () => GU
+     });
+     var cU = zU(654),
+       yU = zU(1817),
+       QU = zU(5326);
+     class AU {
+       constructor(UU, XU) {
+         this.width = UU, this.xY = XU, this.data = void 0, this.next = 0, this.size = 0, this.data = new Float64Array(UU * XU)
+       }
+       push(UU) {
+ ... (164 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L6-L10` → after: `L185-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L185-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/234.js#L185-L189) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/234.js#L6-L10)

```diff
-       ITEM_FILES_WITHOUT_SPRITE: () => PM,
-       ITEM_SPRITES: () => jM,
-       ITEM_SPRITES_WITHOUT_FILE: () => aM,
-       ITEM_SPRITE_RUNS: () => SM,
-       MAX_SPRITE_ITEM_ID: () => OM
+       LOOK_DEBUG_HEADER: () => EU,
+       endLookDebugTake: () => gU,
+       noteLookDroppedCopy: () => kU,
+       saveLookCapture: () => GU,
+       startLookDebug: () => tU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/234.js` (Changed code · before: `L12-L16` → after: `L191-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a00f46f3cc2f2e6cab9baa7299b481b935b95ccfa96a8e98ed426f602c0eaa89) · [After (L191-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/234.js#L191-L360) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/234.js#L12-L16)

```diff
-     const OM = 10095,
-       SM = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       jM = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       aM = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       PM = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+     var cU = zU(5326),
+       yU = zU(3099),
+       QU = zU(1974);
+     const AU = new Map(Object.entries(cU.f).map((UU => {
+       let [XU, zU] = UU;
+       return [zU, XU]
+     })));
+ 
+     function FU(UU) {
+       return (0, QU.D)(UU).toFixed(1)
+     }
+ 
+     function oU(UU, XU) {
+       return `camera set by ${AU.get(UU[XU+1])}: heading ${`${FU(UU[XU+2])} -> ${FU(UU[XU+4])}`} deg, pitch ${`${FU(UU[XU+3])} -> ${FU(UU[XU+5])}`} deg, at ${UU[XU].toFixed(1)} ms`
+     }
+     var DU = zU(37083);
+ ... (154 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/235.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/235.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248)

#### 1. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L2)

```diff
- export const ids = [235];
+ export const ids = [235, 598];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L4)

```diff
-   37280: (MM, rM, iM) => {
+   43979: (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L6)

```diff
-       CreateCustomLobby: () => RM
+       CharacterCustomisationUI: () => QX
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L8-L12)

```diff
-     iM(37287);
-     var OM = iM(5003),
-       SM = iM(44),
-       jM = iM(1763),
-       aM = iM(1116),
+     var cU = zU(61),
+       yU = zU(2818),
+       QU = zU(1129),
+       AU = zU(1106),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L14-L34` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L13-L18) · [Before (L14-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L14-L34)

```diff
-       nM = iM(3530),
-       QM = iM(1144),
-       zM = iM(1202),
-       LM = iM(4961),
-       mM = iM(1520),
-       HM = iM(37291),
-       hM = iM(1188),
-       JM = iM(1382),
-       dM = iM(1591),
-       yM = iM(19),
-       lM = iM(1522),
-       EM = iM(625),
-       UM = iM(5343),
-       GM = iM(821),
-       CM = iM(1242),
-       eM = iM(1229),
- ... (5 more removed lines; see GitHub link above)
+       oU = zU(1258),
+       DU = zU(1193),
+       EU = zU(2334),
+       YU = zU(1613),
+       NU = zU(2772);
+     const IU = oU.v.filter((UU => !YU.i.includes(UU)));
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L36-L81` → after: `L20-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L20-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L20-L22) · [Before (L36-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L36-L81)

```diff
-     function RM(MM) {
-       var rM, iM, aM, RM;
-       let {
-         gameNameWithVariation: pM,
-         close: WM,
-         initialDefaultGamemode: sM
-       } = MM;
-       const {
-         t: DM
-       } = (0, hM.A)(), kM = (0, dM.useNavigatePreserveSearch)(), [ZM, oM] = (0, SM.useState)("Enter"), [fM, YM] = (0, SM.useState)(""), NM = SM.useRef(null), AM = null === (rM = GM.e[pM]) || void 0 === rM ? void 0 : rM.showWorldsInsteadOfCustomLobbies, xM = AM ? 1 : null === (iM  … [truncated]
-       sM || (sM = "classic_creative" === pM || "classic_creativeFlat" === pM ? "creative" : "classic" === pM ? "peaceful" : "survival");
-       const BM = {
-         baseOptions: {
-           gameNameWithVariation: AM ? "classic" : pM,
-           name: "",
-           visibility: "unlisted"
- ... (30 more removed lines; see GitHub link above)
+     function pU(UU, XU) {
+       return IU.includes(UU) && "string" === typeof XU && (0, NU.h)(UU, XU)
+     }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L83-L90` → after: `L24-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L24-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L24-L28) · [Before (L83-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L83-L90)

```diff
-       function TM(MM, rM) {
-         IM({
-           ...XM,
-           baseOptions: {
-             ...XM.baseOptions,
-             [MM]: rM
-           }
-         })
+     function aU(UU) {
+       const XU = {};
+       for (const zU of IU) {
+         const cU = UU[zU];
+         void 0 !== cU && pU(zU, cU) && (XU[zU] = cU)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L93-L101` → after: `L33-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L33-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L33-L35) · [Before (L93-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L93-L101)

```diff
-       function VM(MM, rM) {
-         IM({
-           ...XM,
-           listedOptions: {
-             ...XM.listedOptions,
-             [MM]: rM
-           }
-         })
-       }
+     function tU(UU) {
+       return 0 === Object.keys(UU).length
+     }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L103-L110` → after: `L37-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L37-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L37-L55) · [Before (L103-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L103-L110)

```diff
-       function cM(MM, rM) {
-         IM({
-           ...XM,
-           worldOptions: {
-             ...XM.worldOptions,
-             [MM]: rM
-           }
-         })
+     function gU(UU, XU) {
+       return Object.entries(UU).every((UU => {
+         let [zU, cU] = UU;
+         return XU[zU] === cU
+       }))
+     }
+     var kU = zU(2338),
+       GU = zU(3443),
+       BU = zU(2047),
+       ZU = zU(1494),
+       RU = zU(2381),
+       PU = zU(27),
+       WU = zU(2923),
+       dU = zU(1545),
+       LU = zU(1131),
+       eU = zU(1936);
+ ... (3 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L112-L138` → after: `L57-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L57-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L57-L67) · [Before (L112-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L112-L138)

```diff
- 
-       function Mr(MM) {
-         IM({
-           ...XM,
-           mapOptions: {
-             ...XM.mapOptions,
-             ...MM
-           }
-         })
-       }(0, SM.useEffect)((() => {
-         LM.b.getNewStarterName().then((MM => {
-           IM((rM => "" !== rM.baseOptions.name ? rM : {
-             ...rM,
-             baseOptions: {
-               ...rM.baseOptions,
-               name: MM
- ... (11 more removed lines; see GitHub link above)
+       moveTo(UU) {
+         null !== UU && UU !== this.accountId && (null !== this.accountId && this.slots.size > 0 && (console.warn("saved_outfits_dropped_on_account_switch", this.slots.size), this.slots.clear()), null !== this.accountId && this.before.clear(), this.accountId = UU)
+       }
+       isFor(UU) {
+         return null === this.accountId || this.accountId === UU
+       }
+       overlay(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
+         return UU.map(((UU, zU) => {
+           var cU, yU;
+           return null !== (cU = null !== (yU = this.slots.get(zU)) && void 0 !== yU ? yU : XU.get(zU)) && void 0 !== cU ? cU : UU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L140-L175` → after: `L69-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L69-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L69-L105) · [Before (L140-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L140-L175)

```diff
-       }), [XM.mapOptions.mapType, KM]);
-       const rr = {
-           tpRequests: {
-             isEnabled: () => !XM.worldOptions.disableTpRequests,
-             kR: MM => {
-               cM("disableTpRequests", !MM)
-             }
-           },
-           spawnProtection: {
-             isEnabled: () => XM.worldOptions.spawnProtection,
-             kR: MM => {
-               cM("spawnProtection", MM)
-             }
-           },
-           spawnReset: {
-             isEnabled: () => XM.worldOptions.enableSpawnReset,
- ... (20 more removed lines; see GitHub link above)
+       }
+     }
+     class wU extends WU.e {
+       constructor() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new CU;
+         super("saved outfits", (async XU => {
+           const zU = UU.isFor(XU.whamm),
+             cU = new Map(UU.slots),
+             yU = await dU.c.getSavedOutfits(XU);
+           return zU ? UU.overlay(yU, cU) : yU
+         })), this.unsaved = UU, this.started = !1, this.sending = !1
+       }
+       ensureLoaded() {
+         if (this.started) {
+           if (!this.getState().failed) return
+         } else this.started = !0, this.watchAccount();
+ ... (21 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L177-L181` → after: `L107-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L107-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L107-L129) · [Before (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L177-L181)

```diff
-           },
-           dayNight: {
-             isEnabled: () => XM.worldOptions.enableDayNight,
-             kR: MM => {
-               cM("enableDayNight", MM)
+             const {
+               accountId: XU,
+               data: yU
+             } = this.getState();
+             let QU = yU;
+             XU === UU.whamm && null !== QU || (QU = this.unsaved.overlay(await dU.c.getSavedOutfits(UU)), this.refresh()), await dU.c.setSavedOutfits(UU, QU), this.unsaved.isFor(UU.whamm) && QU.forEach(((UU, XU) => {
+               const cU = this.unsaved.slots.get(XU);
+               void 0 === cU || cU === zU.get(XU) ? this.unsaved.before.delete(XU) : this.unsaved.before.set(XU, UU)
+             }))
+           } catch (XU) {
+             if (console.error("Failed to save outfits", XU), this.getState().accountId === cU && [...this.unsaved.slots].every((UU => {
+                 let [XU, cU] = UU;
+                 return zU.get(XU) === cU
+               }))) {
+               const XU = [...zU.values()].every(tU);
+               eU.f.showMessage({
+ ... (7 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L184-L197` → after: `L132-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L132-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L132-L193) · [Before (L184-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L184-L197)

```diff
-         },
-         ir = "Enter" !== ZM,
-         Or = (0, uM.jsx)(UM.d, {
-           className: "NameInput",
-           label: "general:name",
-           disabled: "Enter" !== ZM,
-           children: (0, uM.jsx)(jM.b, {
-             domRef: NM,
-             onValueChange: (MM, rM) => {
-               const iM = (0, eM.vb)(MM);
-               TM("name", iM), NM.current.value = iM
-             },
-             maxLength: eM.Q,
-             defaultValue: XM.baseOptions.name
+           for (const [UU, XU] of zU) this.unsaved.slots.get(UU) === XU && this.unsaved.slots.delete(UU)
+         }
+         this.sending = !1, UU && this.refresh()
+       }
+     }
+     const qU = new wU;
+     var OU = zU(344),
+       SU = zU(43986),
+       rU = zU(1605),
+       uU = zU(2443),
+       fU = zU(3329),
+       iU = zU(3438),
+       HU = zU(2401),
+       MU = zU(1390);
+     zU(34900), zU(3452);
+     Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI, Math.PI;
+ ... (46 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L225-L334` → after: `L196-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L196-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L196-L222) · [Before (L225-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L225-L334)

```diff
-           className: "CreateCustomLobbyTitleContainer",
-           children: (0, uM.jsx)("div", {
-             className: "CreateCustomLobbyTitle",
-             children: DM(AM ? "homePage:createWorld" : "homePage:createCustomLobby")
-           })
-         }), (0, uM.jsx)(gM.d, {
-           locked: ir,
-           children: (0, uM.jsxs)("div", {
-             className: "CreateCustomLobbyFields",
-             children: [!vM && Or, vM && (0, uM.jsxs)("div", {
-               className: "BloxdForm",
-               children: [(0, uM.jsx)("div", {
-                 className: "SectionTitle",
-                 children: DM("customLobby:generalOptions")
-               }), (0, uM.jsxs)("div", {
-                 className: "SectionBody",
- ... (94 more removed lines; see GitHub link above)
+           className: "CharacterPresetsGrid SavedOutfitsGrid",
+           children: YU.map(((UU, cU) => {
+             const QU = tU(UU);
+             return (0, xU.jsxs)("div", {
+               className: FU()("SavedOutfitSlot", {
+                 SavedOutfitSlotFilled: !QU
+               }),
+               children: [(0, xU.jsxs)("div", {
+                 ...(0, ZU.W)(),
+                 role: QU ? "button" : "link",
+                 "data-pad-focusable": !0,
+                 className: FU()("CharacterPresetCard SavedOutfitCard", {
+                   SavedOutfitCardEmpty: QU,
+                   CharacterPresetCardActive: !QU && gU(UU, XU)
+                 }),
+                 onClick: () => {
+ ... (11 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L336-L343` → after: `L224-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L224-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L224-L228) · [Before (L336-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L336-L343)

```diff
-                   })
-                 }), (0, uM.jsx)(UM.d, {
-                   label: "general:emojis",
-                   circleInfoText: "customLobby:lobbyEmojisDescription",
-                   disabled: "Enter" !== ZM,
-                   children: (0, uM.jsx)(jM.b, {
-                     onValueChange: (MM, rM) => {
-                       VM("emojis", MM)
+                   }), (0, xU.jsx)(ZU.O, {
+                     padSecondaryLabelKey: "homePage:saveOutfit",
+                     stopPropagation: !0,
+                     onClick: () => {
+                       gU(XU, UU) || (qU.save(cU, XU), yU(cU, UU))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L345-L428` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L230-L231) · [Before (L345-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L345-L428)

```diff
-                     maxLength: 6,
-                     defaultValue: XM.listedOptions.emojis
-                   })
-                 })]
-               })]
-             }), vM && AM && (0, uM.jsxs)("div", {
-               className: "BloxdForm",
-               children: [(0, uM.jsx)("div", {
-                 className: "SectionTitle",
-                 children: DM("customLobby:advancedOptions")
-               }), (0, uM.jsxs)("div", {
-                 className: "SectionBody",
-                 children: [(0, uM.jsx)(UM.d, {
-                   label: "classic:worldGenSeed",
-                   disabled: "Enter" !== ZM,
-                   children: (0, uM.jsx)(jM.b, {
- ... (68 more removed lines; see GitHub link above)
+                     children: oU("general:save")
+                   })]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L431-L473` → after: `L246-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L246-L247) · [Before (L431-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L431-L473)

```diff
-             }), AM && (0, uM.jsx)(bM.b, {
-               callbacks: rr,
-               disabled: "Enter" !== ZM,
-               advancedMode: vM
-             })]
-           })
-         }), (0, uM.jsxs)("div", {
-           className: "CreateCustomLobbyFooter",
-           children: [(0, uM.jsx)(mM.p, {
-             className: "CreateCustomLobbyButton",
-             padDefaultFocus: !0,
-             loading: "Enter" !== ZM,
-             onClick: () => {
-               !async function() {
-                 if ("Enter" === ZM) {
-                   oM("Loading"), YM("");
- ... (27 more removed lines; see GitHub link above)
+             }, cU)
+           }))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L477-L486` → after: `L251-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L251-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L251-L257) · [Before (L477-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L477-L486)

```diff
-   },
-   37303: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => nM
-     });
-     var OM = iM(1116),
-       SM = iM.n(OM),
-       jM = iM(44),
-       aM = iM(4950),
-       PM = iM(1303);
+     var jU = zU(37090),
+       KU = zU(2756),
+       bU = zU(2763);
+ 
+     function TU(UU, XU, zU) {
+       return null !== UU && !(0, KU.i)(bU.d, XU, zU, UU.collected, UU.ownedPacks)
+     }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L493-L501` → after: `L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L264) · [Before (L493-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L493-L501)

```diff
-       const OM = (0, jM.useRef)(null),
-         nM = (0, aM.e)(OM, "y");
-       return (0, PM.jsx)("div", {
-         ref: OM,
-         className: SM()("CreateCustomLobbyBody", {
-           CreateCustomLobbyBodyMoreAbove: nM.before,
-           CreateCustomLobbyBodyMoreBelow: nM.after
-         }),
-         "data-pad-ignore": rM || void 0,
+       return XU ? (0, xU.jsx)(UX, {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L503` → after: `L266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L266) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L503)

```diff
-       })
+       }) : zU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L521-L525` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L272) · [Before (L521-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L521-L525)

```diff
-         loading: rM,
-         schematics: iM,
-         onSchematicPicked: OM,
-         selectedSchematicIdList: SM = [],
-         disableAutoExport: nM
+         children: zU
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L529-L552` → after: `L276-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L276-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L276-L283) · [Before (L529-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L529-L552)

```diff
-       } = (0, jM.A)();
-       return (0, QM.jsxs)("div", {
-         className: "SchematicList",
-         children: [rM && (0, QM.jsx)(aM.d, {}), !rM && 0 === iM.length && (0, QM.jsx)("div", {
-           className: "NoSchematicsText",
-           children: zM("worldBuilder:noSavedSchematic")
-         }), !rM && iM.map((MM => (0, QM.jsx)(PM.h, {
-           source: {
-             type: "schematic",
-             schematic: MM
-           },
-           gameWidth: "25%",
-           useLongRatio: !0,
-           onClick: () => {
-             OM(MM)
-           },
- ... (8 more removed lines; see GitHub link above)
+       } = (0, DU.I)(), {
+         userContext: yU
+       } = (0, QU.d)(), AU = null !== (XU = yU.dailyDrop) && void 0 !== XU && XU.hidden ? cU("dailyDrop:lockedFromHidden") : cU("dailyDrop:lockedFrom");
+       return (0, xU.jsx)(nU.d, {
+         tooltipInner: (0, xU.jsx)(xU.Fragment, {
+           children: AU
+         }),
+         children: zU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L556-L595` → after: `L287-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L287-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L287-L288) · [Before (L556-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L556-L595)

```diff
-     function LM(MM) {
-       let {
-         ownedSchematics: rM,
-         currentWorldSchematicId: iM,
-         onClose: SM
-       } = MM;
-       const {
-         t: aM
-       } = (0, jM.A)(), [PM, LM] = (0, OM.useState)(null);
-       return (0, QM.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === PM && (0, QM.jsxs)(QM.Fragment, {
-           children: [(0, QM.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: aM("worldBuilder:schematicList")
-           }), (0, QM.jsx)("h2", {
- ... (24 more removed lines; see GitHub link above)
+     function XX(UU, XU, zU) {
+       return (0, EU.i)(UU, XU).purchasable && !(0, uU.B)(UU, XU, zU)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L598-L613` → after: `L291-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L291-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L291-L295) · [Before (L598-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L598-L613)

```diff
-     function mM(MM) {
-       let {
-         ownedSchematics: rM,
-         currentWorldSchematicId: iM,
-         onClose: OM
-       } = MM;
-       SM.NotificationProvider.showCustomPopup({
-         body: MM => (0, QM.jsx)(LM, {
-           ownedSchematics: rM,
-           currentWorldSchematicId: iM,
-           onClose: MM
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: OM,
-         unlockPointerKey: "schematicListPopup"
-       })
+     function zX(UU, XU) {
+       return Object.entries(UU).some((UU => {
+         let [zU, cU] = UU;
+         return XX(zU, cU, XU)
+       }))
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L631-L634` → after: `L301-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L301-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L301-L304) · [Before (L631-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L631-L634)

```diff
-         value: rM,
-         onChange: iM,
-         showAll: OM,
-         disabled: QM = !1
+         pack: zU,
+         ownedPacks: cU,
+         showStoreLink: yU = !1,
+         children: QU
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L638` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L308) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L638)

```diff
-       } = (0, PM.A)();
+       } = (0, DU.I)(), oU = rU.c[zU], EU = oU.purchasable && !cU.includes(zU) && rU.q.includes(zU), YU = fU.p[zU];
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L640-L641` → after: `L310-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L310-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L310-L311) · [Before (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L640-L641)

```diff
-         className: SM()("BloxdForm GamemodeForm", {
-           BasicOptions: !OM
+         className: FU()("CosmeticPackGroup", {
+           CosmeticPackGroupLocked: EU
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L643-L653` → after: `L313-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L313-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L313-L318) · [Before (L643-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L643-L653)

```diff
-         children: [(0, nM.jsx)("div", {
-           className: "SectionTitle",
-           children: zM("classic:defaultGamemode")
-         }), (0, nM.jsx)("div", {
-           className: "SectionBody",
-           children: jM.C.map((MM => OM || (0, jM.x)(MM) ? (0, nM.jsx)("button", {
-             type: "button",
-             className: SM()("WorldGamemode", {
-               Selected: rM === MM
-             }),
-             disabled: QM,
+         children: [YU && (0, xU.jsx)(YU, {}), (0, xU.jsxs)("div", {
+           className: "CosmeticPackGroupLabel",
+           children: [(0, xU.jsx)("span", {
+             className: "CosmeticPackGroupLabelName",
+             children: null !== (XU = oU.displayName) && void 0 !== XU ? XU : zU
+           }), (EU || yU) && (0, xU.jsxs)(ZU.y, {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L655-L658` → after: `L320-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L320-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L320-L323) · [Before (L655-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L655-L658)

```diff
-               iM(MM)
-             },
-             style: {
-               "--background-image": `url(${aM.s[MM]})`
+               EU ? (0, fU.l)(zU) : (0, RU.l)({
+                 mode: "self",
+                 source: "characterCustomisation"
+               })
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L660-L662` → after: `L325-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L325-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L325-L329) · [Before (L660-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L660-L662)

```diff
-             children: aM.p[MM]
-           }, MM) : null))
-         })]
+             children: [(0, xU.jsx)(MU.d, {
+               name: "store"
+             }), " ", AU("general:viewInShop")]
+           })]
+         }), EU && "bee" === zU && (0, xU.jsx)(fU.e, {}), QU]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L668-L673` → after: `L335-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L335-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L335-L340) · [Before (L668-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L668-L673)

```diff
-         mapTypes: rM,
-         value: iM,
-         onChange: OM,
-         showAll: QM,
-         disabled: zM = !1,
-         children: LM
+         equippedEmoteIds: XU,
+         ownedPacks: zU,
+         canBuy: cU,
+         onUpdateLoadout: yU,
+         onEmoteSelected: QU,
+         onEquipPreviewSkin: AU
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L677` → after: `L344-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L344-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L344-L356) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L677)

```diff
-       } = (0, PM.A)();
+       } = (0, DU.I)(), NU = new Set(XU), IU = new Map, pU = Object.keys(EU.d.emote).sort(((UU, XU) => {
+         var zU, cU, yU, QU;
+         return (null !== (zU = null === (cU = (0, EU.g)("emote", UU)) || void 0 === cU ? void 0 : cU.clientIdx) && void 0 !== zU ? zU : 0) - (null !== (yU = null === (QU = (0, EU.g)("emote", XU)) || void 0 === QU ? void 0 : QU.clientIdx) && void 0 !== yU ? yU : 0)
+       })).filter((UU => {
+         const XU = (0, EU.i)("emote", UU),
+           yU = (0, uU.B)("emote", UU, zU);
+         return !(XU.purchasable && !yU && !cU) && (XU.clientSelectable || yU)
+       }));
+       for (const FU of pU) {
+         const UU = (0, EU.g)("emote", FU).cosmeticPack;
+         IU.has(UU) || IU.set(UU, []), IU.get(UU).push(FU)
+       }
+       const aU = Array.from(IU.keys());
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L679-L692` → after: `L358-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L358-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L358-L624) · [Before (L679-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L679-L692)

```diff
-         className: SM()("BloxdForm MapTypeForm", {
-           BasicOptions: !QM
-         }),
-         children: [(0, nM.jsx)("div", {
-           className: "SectionTitle",
-           children: mM("customLobby:mapType")
-         }), (0, nM.jsx)("div", {
-           className: "SectionBody",
-           children: rM.map((MM => QM || (0, jM.y)(MM) ? (0, nM.jsx)("button", {
-             type: "button",
-             className: SM()("MapType", {
-               Selected: iM === MM
-             }),
-             disabled: zM,
+         className: "CharCustomisPartSelectorWrapper",
+         children: [!1, (0, xU.jsxs)("div", {
+           className: "EmoteLoadoutSummary",
+           children: [(0, xU.jsx)("span", {
+             className: "EmoteLoadoutSummaryText SmallTextBold",
+             children: YU("emotes:equippedCount", {
+               count: XU.length,
+               max: oU.k
+             })
+           }), (0, xU.jsx)("span", {
+             className: "EmoteLoadoutSummaryHint SmallTextLight",
+             children: YU("emotes:loadoutHint")
+           })]
+         }), aU.map((UU => {
+           const cU = IU.get(UU);
+           return (0, xU.jsx)(cX, {
+ ... (251 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L694` → after: `L626-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L626-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L626-L724) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L694)

```diff
-               OM(MM)
+               (0, RU.l)({
+                 mode: "self",
+                 source: "characterCustomisation",
+                 openItem: "superRank"
+               })
+             },
+             children: AU("general:getItNow")
+           })]
+         }), (0, xU.jsxs)("div", {
+           className: "CharCustomisationBodyInner",
+           children: ["characters" === XU && (0, xU.jsxs)("div", {
+             className: "CharCustomisPartSelectorWrapper",
+             children: [!1, (0, xU.jsx)(JU, {
+               wornOutfit: aU(nU.current),
+               onApply: UU => {
+                 FX(UU, {
+ ... (83 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L696-L697` → after: `L726-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L726-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L726-L852) · [Before (L696-L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L696-L697)

```diff
-             style: {
-               "--background-image": `url(${aM.j[MM]})`
+             onEmoteSelected: VU,
+             onEquipPreviewSkin: () => {
+               ! function(UU, XU) {
+                 for (const zU of oU.v)(0, YU.f)(zU) && UU(zU, "skin" === zU ? "skin_preview" : `${zU}_none`, !1);
+                 XU()
+               }(QX, tU)
+             }
+           }), "characters" !== XU && "emote" !== XU && (0, xU.jsxs)("div", {
+             className: "CharCustomisPartSelectorWrapper",
+             children: [!1, kX.map((UU => {
+               const XU = aX.get(UU);
+               return (0, xU.jsx)(cX, {
+                 pack: UU,
+                 ownedPacks: oX,
+                 children: XU.map((XU => {
+                   var cU;
+ ... (111 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L699-L701` → after: `L854-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L854-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L854-L866) · [Before (L699-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L699-L701)

```diff
-             children: aM.i[MM]
-           }, MM) : null))
-         }), LM]
+             children: [(0, xU.jsx)(MU.d, {
+               name: "rotate-left"
+             }), AU("general:undo")]
+           }), (0, xU.jsx)(SU.CharacterPreview, {
+             ref: lU,
+             forcedCosmetics: WU,
+             GA: fU.id,
+             emotePlaySeq: fU.seq,
+             onReady: () => {
+               for (const UU of oU.v) QX(UU, nU.current[UU], !1)
+             }
+           })]
+         })]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L703` → after: `L868-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L868-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L868-L1026) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L703)

```diff
-     }
+     }))
+   },
+   43986: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       CharacterPreview: () => YU
+     });
+     var cU = zU(61),
+       yU = zU(3021),
+       QU = zU(1258),
+       AU = zU(2772),
+       FU = zU(34900),
+       oU = zU(3990),
+       DU = zU(1305);
+     const EU = .6 * Math.PI,
+       YU = (0, cU.memo)((0, cU.forwardRef)((function(UU, XU) {
+         let {
+ ... (143 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/235.js` (Changed code · before: `L705` → after: `L1028-L1075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248R1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1e244eeb95cee2747e7b1b5f261825e2ebec5a0c628439b29f693ea812c37248) · [After (L1028-L1075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/235.js#L1028-L1075) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/235.js#L705)

```diff
-   37287: () => {}
+   37090: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
+     });
+     var cU = zU(2005),
+       yU = zU(1545);
+     const QU = new class {
+       constructor() {
+         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
+       }
+       save(UU, XU) {
+         UU !== this.userContext && this.sendHeld(), this.userContext = UU;
+         for (const [cU, yU] of XU) this.pending.set(cU, yU);
+         if (null !== this.timer) return;
+         const zU = this.lastSentAt + 1100 - Date.now();
+         zU <= 0 ? this.send(UU) : (this.timer = setTimeout((() => {
+ ... (32 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/236.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/236.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/236.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/236.js#L4)

```diff
-   37291: (MM, rM, iM) => {
+   39900: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/236.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/236.js#L7)

```diff
-       g: () => mM
+       h: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L9-L15` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/236.js#L9-L14) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/236.js#L9-L15)

```diff
-     var OM = iM(44),
-       SM = iM(1429),
-       jM = iM(1188),
-       aM = iM(1396),
-       PM = iM(3875),
-       nM = iM(5335),
-       QM = iM(1303);
+     var cU = zU(31);
+     let yU = !1;
+ 
+     function QU() {
+       return yU
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L18-L50` → after: `L17-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L17-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/236.js#L17-L103) · [Before (L18-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/236.js#L18-L50)

```diff
-       let {
-         loading: rM,
-         schematics: iM,
-         onSchematicPicked: OM,
-         selectedSchematicIdList: SM = [],
-         disableAutoExport: nM
-       } = MM;
-       const {
-         t: zM
-       } = (0, jM.A)();
-       return (0, QM.jsxs)("div", {
-         className: "SchematicList",
-         children: [rM && (0, QM.jsx)(aM.d, {}), !rM && 0 === iM.length && (0, QM.jsx)("div", {
-           className: "NoSchematicsText",
-           children: zM("worldBuilder:noSavedSchematic")
-         }), !rM && iM.map((MM => (0, QM.jsx)(PM.h, {
- ... (17 more removed lines; see GitHub link above)
+       yU !== UU && (yU = UU, cU.k.UY("replayViewer|videoExportChanged"))
+     }
+   },
+   37181: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => NU,
+       h: () => EU,
+       i: () => IU,
+       l: () => YU
+     });
+     var cU = zU(344),
+       yU = zU(698),
+       QU = zU(708),
+       AU = zU(42);
+     const FU = {
+         idStorageKey: "playSessionId",
+ ... (71 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L54-L93` → after: `L107-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L107-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/236.js#L107-L141) · [Before (L54-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/236.js#L54-L93)

```diff
-     function LM(MM) {
-       let {
-         ownedSchematics: rM,
-         currentWorldSchematicId: iM,
-         onClose: SM
-       } = MM;
-       const {
-         t: aM
-       } = (0, jM.A)(), [PM, LM] = (0, OM.useState)(null);
-       return (0, QM.jsxs)("div", {
-         className: "SchematicListWindow",
-         children: [null === PM && (0, QM.jsxs)(QM.Fragment, {
-           children: [(0, QM.jsx)("h1", {
-             className: "SchematicPopupTitle",
-             children: aM("worldBuilder:schematicList")
-           }), (0, QM.jsx)("h2", {
- ... (24 more removed lines; see GitHub link above)
+     function oU() {
+       return "undefined" === typeof location ? null : function(UU) {
+         const XU = new URLSearchParams(UU).get("renderDistanceMax");
+         if (null === XU || !/^\d{1,2}$/.test(XU)) return null;
+         const zU = Number(XU);
+         return zU >= 1 && zU <= 64 ? zU : null
+       }(location.search)
+     }
+ 
+     function DU(UU, XU) {
+       return null === XU ? UU : {
+         horizontal: Math.min(UU.horizontal, XU),
+         vertical: UU.vertical
+       }
+     }
+ 
+ ... (19 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L97-L111` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/236.js#L145-L147) · [Before (L97-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/236.js#L97-L111)

```diff
-       let {
-         ownedSchematics: rM,
-         currentWorldSchematicId: iM,
-         onClose: OM
-       } = MM;
-       SM.NotificationProvider.showCustomPopup({
-         body: MM => (0, QM.jsx)(LM, {
-           ownedSchematics: rM,
-           currentWorldSchematicId: iM,
-           onClose: MM
-         }),
-         middleScreenPopupClassName: "SchematicPopup",
-         onClose: OM,
-         unlockPointerKey: "schematicListPopup"
-       })
+       var XU;
+       const zU = (null === (XU = cU) || void 0 === XU ? void 0 : XU.conn) === UU ? cU.reason : null;
+       return cU = null, zU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L114-L116` → after: `L150-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L150-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/236.js#L150-L153) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/236.js#L114-L116)

```diff
-   44386: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       runClientGameMessage: () => uM
+   42091: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => QU,
+       d: () => yU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L118-L131` → after: `L155-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/236.js#L155-L158) · [Before (L118-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/236.js#L118-L131)

```diff
-     var OM = iM(4118),
-       SM = iM(4129),
-       jM = iM(1373),
-       aM = iM(37291),
-       PM = iM(5364),
-       nM = iM(1116),
-       QM = iM.n(nM),
-       zM = iM(44),
-       LM = iM(1429),
-       mM = iM(1520),
-       HM = iM(332),
-       hM = iM(1188),
-       JM = iM(1398),
-       dM = iM(1303);
+     let cU = {
+       fire: () => {},
+       close: () => {}
+     };
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L134-L194` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/236.js#L161) · [Before (L134-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/236.js#L134-L194)

```diff
-       let {
-         onFilePicked: rM
-       } = MM;
-       const {
-         t: iM
-       } = (0, hM.A)(), [OM, SM] = (0, zM.useState)(null), {
-         getRootProps: jM,
-         getInputProps: aM,
-         isDragActive: nM
-       } = (0, PM.e)({
-         onDrop: MM => {
-           MM.length > 0 && SM(MM[0])
-         },
-         useFsAccessApi: !1
-       }), LM = OM && OM.size > 1024 * HM.bd;
-       return (0, dM.jsxs)("div", {
- ... (45 more removed lines; see GitHub link above)
+       cU = UU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/236.js` (Changed code · before: `L197-L542` → after: `L164-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cbR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-90e4e98b6843912e5c3015a7f716bed12ee5817055046817f20a838c37c705cb) · [After (L164-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/236.js#L164-L165) · [Before (L197-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/236.js#L197-L542)

```diff
-     function lM(MM) {
-       let {
-         ownedSchematics: rM,
-         onClose: iM,
-         onChosenPreset: OM,
-         onChosenFile: SM
-       } = MM;
-       const {
-         t: jM
-       } = (0, hM.A)();
-       return (0, dM.jsxs)(dM.Fragment, {
-         children: [(0, dM.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: jM("worldBuilder:loadSchematic")
-         }), (0, dM.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
- ... (330 more removed lines; see GitHub link above)
+     function QU() {
+       return cU
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/237.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/237.js` (84 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab)

#### 1. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L3) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L2)

```diff
- export const ids = [58, 237];
+ export const ids = [237];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L4-L20` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L5-L7) · [Before (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L4-L20)

```diff
-   39586: (MM, rM, iM) => {
-     var OM = {
-       "./combat_1.png": 39588,
-       "./dungeon_crumbling_crypt.png": 39596,
-       "./dungeon_frozen_hollow.png": 39605,
-       "./dungeon_wildwood_grove.png": 39614,
-       "./dungeons.png": 39621,
-       "./farming_1.png": 39628,
-       "./fishing_1.png": 39634,
-       "./hub.png": 39639,
-       "./island.png": 39645,
-       "./mining_1.png": 39648,
-       "./mining_1_bridge.png": 39653,
-       "./mining_1_gallery.png": 39658,
-       "./mining_1_hollow.png": 39660,
-       "./mining_1_village.png": 39666
- ... (1 more removed lines; see GitHub link above)
+   40462: (UU, XU, zU) => {
+     UU.exports = yU;
+     var cU = zU(352);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L22-L24` → after: `L9-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L9-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L9-L51) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L22-L24)

```diff
-     function SM(MM) {
-       var rM = jM(MM);
-       return iM(rM)
+     function yU(UU, XU) {
+       if (!(this instanceof yU)) return new yU(UU, XU);
+       var zU = cU.create();
+       cU.add(zU, UU, XU), this.base = cU.min(cU.create(), UU, zU), this.vec = cU.clone(XU), this.max = cU.max(cU.create(), UU, zU), this.mag = cU.length(this.vec)
+     }
+     var QU = yU.prototype;
+     QU.width = function() {
+       return this.vec[0]
+     }, QU.height = function() {
+       return this.vec[1]
+     }, QU.depth = function() {
+       return this.vec[2]
+     }, QU.x0 = function() {
+       return this.base[0]
+     }, QU.y0 = function() {
+       return this.base[1]
+ ... (27 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L26-L32` → after: `L53-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L53-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L53-L71) · [Before (L26-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L26-L32)

```diff
- 
-     function jM(MM) {
-       if (!iM.o(OM, MM)) {
-         var rM = new Error("Cannot find module '" + MM + "'");
-         throw rM.code = "MODULE_NOT_FOUND", rM
-       }
-       return OM[MM]
+   },
+   40453: UU => {
+     UU.exports = function(UU, XU, zU, cU, yU, QU) {
+       var AU = +XU[0],
+         FU = +XU[1],
+         oU = +XU[2],
+         DU = +zU[0],
+         EU = +zU[1],
+         YU = +zU[2],
+         NU = Math.sqrt(DU * DU + EU * EU + YU * YU);
+       if (0 === NU) throw new Error("Can't raycast along a zero vector");
+       return function(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
+         for (var EU = 0, YU = Math.floor, NU = 0 | YU(XU), IU = 0 | YU(zU), pU = 0 | YU(cU), aU = yU > 0 ? 1 : -1, tU = QU > 0 ? 1 : -1, gU = AU > 0 ? 1 : -1, kU = Math.abs(1 / yU), GU = Math.abs(1 / QU), BU = Math.abs(1 / AU), ZU = kU < 1 / 0 ? kU * (aU > 0 ? NU + 1 - XU : XU -  … [truncated]
+           var dU = UU(NU, IU, pU);
+           if (dU) return oU && (oU[0] = XU + EU * yU, oU[1] = zU + EU * QU, oU[2] = cU + EU * AU), DU && (DU[0] = DU[1] = DU[2] = 0, 0 === WU && (DU[0] = -aU), 1 === WU && (DU[1] = -tU), 2 === WU && (DU[2] = -gU)), dU;
+           ZU < RU ? ZU < PU ? (NU += aU, EU = ZU, ZU += kU, WU = 0) : (pU += gU, EU = PU, PU += BU, WU = 2) : RU < PU ? (IU += tU, EU = RU, RU += GU, WU = 1) : (pU += gU, EU = PU, PU += BU, WU = 2)
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L38` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L74) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L38)

```diff
-   39673: (MM, rM, iM) => {
+   39930: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L41` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L77) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L41)

```diff
-       g: () => jM
+       f: () => QU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L43` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L79-L80) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L43)

```diff
-     const OM = new WeakMap;
+     var cU = zU(4460);
+     let yU = null;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L45-L46` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L82-L83) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L45-L46)

```diff
-     function SM(MM, rM) {
-       return OM.set(MM, rM), MM
+     function QU(UU) {
+       return null !== yU && UU === yU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L49-L51` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L86-L87) · [Before (L49-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L49-L51)

```diff
-     function jM(MM) {
-       var rM;
-       return null !== (rM = OM.get(MM)) && void 0 !== rM ? rM : null
+     function AU() {
+       this.HJ = !1, this.stopPropagation = !1, this.MJ = !1, this.disabled = !1
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L59-L106` → after: `L90-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L90-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L90-L107) · [Before (L59-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L59-L106)

```diff
-       constructor(MM, rM, iM) {
-         this.Tz = MM, this.beforeOpen = rM, this.afterClose = iM, this.open = !1, this.dh = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
-           this.isEnabled() && !this.dh && (this.open = !0, this.beforeOpen(this), this.emit())
-         }, this.close = () => {
-           this.closePanel(!1)
-         }, this.dismiss = () => {
-           this.closePanel(!0)
-         }
-       }
-       isOpen() {
-         return this.open
-       }
-       showOrRefresh() {
-         this.open ? this.emit() : this.show()
-       }
-       closePanel(MM) {
- ... (32 more removed lines; see GitHub link above)
+       constructor(UU, XU) {
+         this.version = "0.7.0";
+         var zU = Object.assign({}, new AU, XU || {});
+         this.element = UU || document, this.HJ = !!zU.HJ, this.stopPropagation = !!zU.stopPropagation, this.MJ = !!zU.MJ, this.disabled = !!zU.disabled, this.filterEvents = (UU, XU) => !0, this.ignoreEvent = UU => !1, this.down = new cU.EventEmitter, this.up = new cU.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           UzU: 0,
+           XzU: 0,
+           zzU: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+           currID: null
+         }, "loading" !== document.readyState ? DU(this) : document.addEventListener("DOMContentLoaded", (UU => {
+           DU(this)
+         }), {
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L108-L118` → after: `L109-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L109-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L109-L128) · [Before (L108-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L108-L118)

```diff
-       return "sitting" === iM ? "sitting" === MM.pose : iM
-     }(0, jM.g)("skyblock", ((MM, rM) => {
-       rM.setFacingTolerance(aM(MM) ? 0 : null)
-     }));
-     class PM {
-       constructor(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-         this.api = MM, this.alsoVisit = rM, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = MM => {
-           var rM;
-           const iM = this.api.getEntityInfo(MM);
-           iM && (aM(iM, this.meshFacingCache) && (this.api.setFacingTolerance(MM, 0), this.nextFacing.add(MM)), null === (rM = this.alsoVisit) || void 0 === rM || rM.call(this, MM, iM))
+       bind(UU) {
+         for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
+         zU.forEach((XU => {
+           var zU = this._keyBindmap[XU] || [];
+           zU.includes(UU) || (zU.push(UU), this._keyBindmap[XU] = zU)
+         })), this.state[UU] = !!this.state[UU], this.pressCount[UU] = this.pressCount[UU] || 0, this.releaseCount[UU] = this.releaseCount[UU] || 0
+       }
+       unbind(UU) {
+         for (var XU in this._keyBindmap) {
+           var zU = this._keyBindmap[XU],
+             cU = zU.indexOf(UU);
+           cU > -1 && zU.splice(cU, 1)
+         }
+       }
+       getBindings() {
+         var UU = {};
+ ... (4 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L122-L131` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L133) · [Before (L122-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L122-L131)

```diff
-         const {
-           api: MM
-         } = this, rM = this.nextFacing;
-         MM.forEachEntity(this.visit);
-         for (const iM of this.facing) rM.has(iM) || MM.setFacingTolerance(iM, null);
-         this.facing.clear(), this.nextFacing = this.facing, this.facing = rM
-       }
-       dispose() {
-         for (const MM of this.facing) this.api.setFacingTolerance(MM, null);
-         this.facing.clear(), this.meshFacingCache.clear()
+         oU(this.vJ), oU(this.pressCount), oU(this.releaseCount)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L142-L222` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L137-L138) · [Before (L142-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L142-L222)

```diff
-     function jM(MM, rM, iM) {
-       const jM = "local" === rM,
-         PM = MM.background,
-         nM = rM => PM ? (0, SM.c)(rM[0] - MM.mapOrigin[0], rM[2] - MM.mapOrigin[2], PM.bounds) : [50, 50],
-         QM = (MM.insideDungeon ? [] : MM.landmarks).map((MM => {
-           var rM, OM;
-           return {
-             id: MM.id,
-             name: iM(MM.visited && MM.nameKey ? null !== (rM = MM.mapLabelKey) && void 0 !== rM ? rM : MM.nameKey : "skyblockGame:mapUnknown"),
-             icon: MM.visited && null !== (OM = MM.icon) && void 0 !== OM ? OM : "unknown",
-             visited: MM.visited,
-             current: !1,
-             position: nM(MM.position),
-             travelKind: "landmark",
-             travelId: MM.id
-           }
- ... (65 more removed lines; see GitHub link above)
+     function oU(UU) {
+       for (var XU in UU) UU[XU] = 0
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L226-L325` → after: `L142-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L142-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L142-L148) · [Before (L226-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L226-L325)

```diff
-       const rM = new Set;
-       return MM.flatMap((iM => iM.connections.flatMap((OM => {
-         const SM = MM.find((MM => MM.id === OM)),
-           jM = [iM.id, OM].sort().join("|");
-         return !SM || rM.has(jM) ? [] : (rM.add(jM), [{
-           id: `${iM.id}-${OM}`,
-           start: iM.position,
-           end: SM.position,
-           explored: iM.visited && SM.visited
-         }])
-       }))))
-     }
-     var PM = iM(39536);
-     class nM extends PM.e {}
-     const QM = "skyblockMapView";
-     class zM extends nM {
- ... (84 more removed lines; see GitHub link above)
+       window.addEventListener("keydown", tU.bind(null, UU, !0), !1), window.addEventListener("keyup", tU.bind(null, UU, !1), !1);
+       var XU = {
+         passive: !0
+       };
+       UU.element.addEventListener("touchstart", IU.bind(void 0, UU), {
+         passive: !1
+       }), UU.element.addEventListener("touchend", aU.bind(void 0, UU), XU), UU.element.addEventListener("mousedown", gU.bind(null, UU, !0), XU), window.document.addEventListener("mouseup", gU.bind(null, UU, !1), XU), UU.element.addEventListener("touchmove", kU.bind(null, UU), XU) … [truncated]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L327-L328` → after: `L150-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L150-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L150-L152) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L327-L328)

```diff
-     var LM = iM(332);
-     const mM = 67.5 * Math.PI / 180;
+     var EU = 0,
+       YU = 0,
+       NU = null;
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L331-L363` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L155) · [Before (L331-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L331-L363)

```diff
-       const iM = Math.abs(MM);
-       if (iM > mM || rM.trackHalfWidth <= 0) return null;
-       const OM = rM.trackHalfWidth,
-         SM = rM.screenHalfWidth / (rM.tanHalfFovX * Math.max(.5, Math.cos(rM.pitch))),
-         jM = Math.min(Math.atan(.6 * OM / SM), .75 * mM),
-         aM = SM * Math.tan(jM);
-       let PM;
-       if (iM <= jM) PM = SM * Math.tan(iM);
-       else {
-         const MM = mM - jM,
-           rM = Math.max(0, SM * MM / (Math.cos(jM) ** 2 * (OM - aM)) - 1),
-           nM = (iM - jM) / MM;
-         PM = aM + (OM - aM) * (1 + rM) * nM / (1 + rM * nM)
-       }
-       return 50 + Math.sign(MM) * PM * 50 / OM
-     }
- ... (17 more removed lines; see GitHub link above)
+       XU.preventDefault(), pU(XU)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L365-L388` → after: `L157-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L157-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L157-L166) · [Before (L365-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L365-L388)

```diff
-     class JM {
-       constructor(MM, rM, iM, OM) {
-         this.map = MM, this.kind = rM, this.position = iM, this.alive = OM, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = rM, this.range = "enemy" === rM ? 48 : 64, this.limit = 12
-       }
-       XE(MM) {
-         if ("enemy" !== this.kind || this.alive(MM.QS)) return this.position(MM.QS)
-       }
-       getPoints() {
-         const MM = [];
-         for (const OM of this.map.getEntities()) {
-           if (OM.kind !== this.kind || "enemy" === this.kind && !this.alive(OM.compassEntityId)) continue;
-           const SM = this.position(OM.compassEntityId);
-           var rM, iM;
-           if (SM) MM.push({
-             id: `${this.kind}:${OM.compassEntityId}`,
-             QS: OM.compassEntityId,
- ... (8 more removed lines; see GitHub link above)
+ 
+     function pU(UU) {
+       let XU = !1;
+       for (let zU = 0; zU < UU.touches.length; ++zU)
+         if (UU.touches[zU].identifier === NU) {
+           XU = !0;
+           break
+         } if (!XU) {
+         const XU = UU.changedTouches[0];
+         EU = XU.clientX, YU = XU.clientY, NU = XU.identifier
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L391-L408` → after: `L169-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L169-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L169-L171) · [Before (L391-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L391-L408)

```diff
-     class dM {
-       constructor(MM) {
-         this.map = MM, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
-       }
-       getPoints() {
-         const MM = this.map.getSnapshot().map;
-         return !MM || MM.insideDungeon ? [] : MM.portals.map((MM => {
-           var rM;
-           return {
-             id: "portal:" + MM.id,
-             kind: "portal",
-             position: MM.position,
-             nameKey: null !== (rM = MM.nameKey) && void 0 !== rM ? rM : "skyblockGame:compassUnvisitedZone",
-             icon: MM.visited ? "dungeons" === MM.destination ? "portal_orange" : "portal" : "unknown",
-             colour: MM.colour
-           }
- ... (2 more removed lines; see GitHub link above)
+ 
+     function aU(UU, XU) {
+       for (var zU = XU.changedTouches, cU = 0; cU < zU.length; ++cU) zU[cU].identifier === NU && (NU = null)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L410-L422` → after: `L173-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L173-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L173-L178) · [Before (L410-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L410-L422)

```diff
-     class yM {
-       constructor(MM) {
-         this.target = MM, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
-       }
-       getPoints() {
-         const MM = this.target();
-         return MM ? [{
-           id: "quest",
-           kind: "quest",
-           icon: "quest",
-           position: MM.position,
-           nameKey: MM.nameKey
-         }] : []
+ 
+     function tU(UU, XU, zU) {
+       if (!UU.ignoreEvent(zU)) try {
+         WU(UU, zU), XU && zU.isTrusted && !zU.repeat && UU._keyStates[zU.code] && dU(UU, zU.code)
+       } finally {
+         LU(zU.code, XU, UU, zU)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L427-L434` → after: `L183-L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L183-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L183-L196) · [Before (L427-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L427-L434)

```diff
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM.position;
-       const SM = OM[0] - rM[0],
-         jM = OM[2] - rM[2];
-       return {
-         ...MM,
-         position: OM,
-         offset: LM.d.computeShortestRotation(iM, (0, LM.wb)([SM, 0, jM])),
-         distance: Math.hypot(SM, OM[1] - rM[1], jM)
+       if (!UU.ignoreEvent(zU)) try {
+         WU(UU, zU)
+       } finally {
+         ! function(UU, XU, zU) {
+           if ("pointerId" in zU)
+             if (XU) {
+               if (null !== UU._touches.currID) return;
+               UU._touches.currID = zU.pointerId
+             } else {
+               if (UU._touches.currID !== zU.pointerId) return;
+               UU._touches.currID = null
+             } var cU = "button" in zU ? zU.button + 1 : 1;
+           LU("Mouse" + cU, XU, UU, zU)
+         }(UU, XU, zU)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L440-L451` → after: `L201-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L201-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L201-L215) · [Before (L440-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L440-L451)

```diff
-       var iM;
-       return (null === (iM = EM) || void 0 === iM ? void 0 : iM.locale) !== rM && (EM = {
-         locale: rM,
-         near: new Intl.NumberFormat(rM, {
-           minimumFractionDigits: 1,
-           maximumFractionDigits: 1
-         }),
-         far: new Intl.NumberFormat(rM, {
-           minimumFractionDigits: 0,
-           maximumFractionDigits: 0
-         })
-       }), (MM < 10 ? EM.near : EM.far).format(MM)
+       var zU = XU.movementX || XU.mozMovementX || 0,
+         cU = XU.movementY || XU.mozMovementY || 0;
+       if (XU.touches && 0 === (zU | cU)) {
+         var yU = function(UU) {
+           pU(UU);
+           for (let XU = 0; XU < UU.changedTouches.length; ++XU)
+             if (UU.changedTouches[XU].identifier == NU) {
+               const zU = UU.changedTouches[XU],
+                 cU = [zU.clientX - EU, zU.clientY - YU];
+               return EU = zU.clientX, YU = zU.clientY, cU
+             } return console.error(`Did not find touch id ${NU}`), [0, 0]
+         }(XU);
+         zU = yU[0], cU = yU[1]
+       }
+       UU.vJ.dx += zU, UU.vJ.dy += cU
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L453-L499` → after: `L217-L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L217-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L217-L229) · [Before (L453-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L453-L499)

```diff
-     class GM {
-       constructor() {
-         this.providers = new Map, this.candidates = [], this.refreshAt = 0
-       }
-       register(MM) {
-         return this.providers.set(MM.id, MM), this.refreshAt = 0, () => {
-           this.providers.get(MM.id) === MM && (this.providers.delete(MM.id), this.refreshAt = 0)
-         }
-       }
-       frame(MM, rM, iM) {
-         if (iM >= this.refreshAt) {
-           this.refreshAt = iM + 200, this.candidates = [];
-           for (const rM of this.providers.values()) {
-             if (!rM.enabled) continue;
-             const iM = rM.getPoints().map((rM => {
-               const iM = rM.position;
- ... (31 more removed lines; see GitHub link above)
+ 
+     function GU(UU, XU) {
+       WU(UU, XU);
+       var zU = 1;
+       switch (XU.deltaMode) {
+         case 0:
+           zU = 1;
+           break;
+         case 1:
+           zU = 12;
+           break;
+         case 2:
+           zU = UU.element.clientHeight || window.innerHeight
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L537-L538` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L234-L235) · [Before (L537-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L537-L538)

```diff
-     function tM(MM) {
-       return MM >= wM ? 1 : MM + 1
+     function BU(UU, XU) {
+       if (!UU.MJ) return XU.preventDefault(), !1
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L540-L552` → after: `L237-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L237-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L237-L246) · [Before (L540-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L540-L552)

```diff
-     const gM = "skyblockQuests",
-       uM = Object.freeze({
-         easy: "skyblockGame:difficultyEasy",
-         medium: "skyblockGame:difficultyMedium",
-         hard: "skyblockGame:difficultyHard",
-         insane: "skyblockGame:difficultyInsane"
-       }),
-       RM = Object.freeze({
-         easy: "#77b326",
-         medium: "#eac03d",
-         hard: "#df7622",
-         insane: "#e74d4d"
-       });
+     var ZU = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L554-L565` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L248-L249) · [Before (L554-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L554-L565)

```diff
-     function pM(MM) {
-       let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-       const iM = Math.max(0, Math.floor(MM)),
-         OM = Math.floor(iM % 1e3 / 100),
-         SM = Math.floor(iM / 1e3),
-         jM = SM % 60,
-         aM = Math.floor(SM / 60),
-         PM = aM % 60,
-         nM = Math.floor(aM / 60),
-         QM = MM => MM < 10 ? `0${MM}` : String(MM),
-         zM = rM ? `.${OM}` : "";
-       return nM > 0 ? `${nM}:${QM(PM)}:${QM(jM)}${zM}` : `${PM}:${QM(jM)}${zM}`
+     function RU(UU, XU) {
+       return !!UU[ZU[XU]] || ("AltRight" === XU || "ControlLeft" === XU) && "function" === typeof UU.getModifierState && !0 === UU.getModifierState("AltGraph")
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L633-L634` → after: `L253-L263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L253-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L253-L263) · [Before (L633-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L633-L634)

```diff
-       const iM = Math.floor(5 * MM / (2 * rM + 1));
-       return Math.min(4, Math.max(0, iM))
+       for (var zU in UU._modifiersHeldThroughBlur = {}, ZU) UU._keyStates[zU] && (UU._modifiersHeldThroughBlur[zU] = !0);
+       XU && XU.isTrusted && function() {
+         try {
+           return window.self !== window.top
+         } catch (UU) {
+           return !0
+         }
+       }() && (clearTimeout(UU._blurRelease), UU._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var XU in UU._modifiersHeldThroughBlur = {}, UU._keyStates) UU._keyStates[XU] && !/^Mouse\d/.test(XU) && dU(UU, XU)
+       }), 0))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L644-L645` → after: `L266-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L266-L269) · [Before (L644-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L644-L645)

```diff
-     function qM(MM) {
-       return Math.max(0, MM)
+     function WU(UU, XU) {
+       var zU = UU._modifiersHeldThroughBlur;
+       if (zU && XU.isTrusted && document.hasFocus())
+         for (var cU in zU) delete zU[cU], UU._keyStates[cU] && cU !== XU.code && (RU(XU, cU) || dU(UU, cU))
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L648-L649` → after: `L272-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L272-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L272-L284) · [Before (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L648-L649)

```diff
-     function TM(MM) {
-       return 1 + .01 * qM(MM)
+     function dU(UU, XU) {
+       const zU = {
+           code: XU,
+           preventDefault: () => {},
+           stopPropagation: () => {}
+         },
+         cU = yU;
+       yU = zU;
+       try {
+         LU(XU, !1, UU, zU)
+       } finally {
+         yU = cU
+       }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L652-L653` → after: `L287-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L287-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L287-L303) · [Before (L652-L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L652-L653)

```diff
-     function VM(MM) {
-       return 1 + .005 * qM(MM)
+     function LU(UU, XU, zU, cU) {
+       var yU = zU._keyBindmap[UU];
+       yU && (eU(zU._keyStates[UU], XU) && (zU._keyStates[UU] = XU, yU.forEach((UU => {
+         (!zU.filterEvents || zU.filterEvents(cU, UU)) && function(UU, XU, zU, cU) {
+           var yU = XU ? zU.pressCount : zU.releaseCount;
+           yU[UU] = (yU[UU] || 0) + 1;
+           var QU = zU._bindPressCount[UU] || 0;
+           (QU += XU ? 1 : -1) < 0 && (QU = 0);
+           zU._bindPressCount[UU] = QU;
+           var AU = zU.state[UU];
+           if (eU(AU, QU)) {
+             zU.state[UU] = QU > 0;
+             var FU = XU ? zU.down : zU.up;
+             zU.disabled || FU.emit(UU, cU)
+           }
+         }(UU, XU, zU, cU)
+ ... (1 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L656-L657` → after: `L306-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L306-L307) · [Before (L656-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L656-L657)

```diff
-     function cM(MM) {
-       return 1 + .005 * qM(MM)
+     function eU(UU, XU) {
+       return UU ? !XU : XU
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L659` → after: `L309-L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L309-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L309-L310) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L659)

```diff
- 
+   },
+   37250: (UU, XU) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L661` → after: `L312-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L312-L318) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L661)

```diff
-       return .01 * qM(MM)
+       if (UU && "object" === typeof UU) {
+         var XU = UU.which || UU.keyCode || UU.charCode;
+         XU && (UU = XU)
+       }
+       if ("number" === typeof UU) return AU[UU];
+       var zU, QU = String(UU);
+       return (zU = cU[QU.toLowerCase()]) ? zU : (zU = yU[QU.toLowerCase()]) || (1 === QU.length ? QU.charCodeAt(0) : void 0)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L663-L665` → after: `L320-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L320-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L320-L481) · [Before (L663-L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L663-L665)

```diff
- 
-     function rr(MM) {
-       return 150 / (150 + qM(MM))
+     zU.isEventKey = function(UU, XU) {
+       if (UU && "object" === typeof UU) {
+         var zU = UU.which || UU.keyCode || UU.charCode;
+         if (null === zU || void 0 === zU) return !1;
+         if ("string" === typeof XU) {
+           var QU;
+           if (QU = cU[XU.toLowerCase()]) return QU === zU;
+           if (QU = yU[XU.toLowerCase()]) return QU === zU
+         } else if ("number" === typeof XU) return XU === zU;
+         return !1
+       }
+     };
+     var cU = (XU = UU.exports = zU).code = XU.codes = {
+         backspace: 8,
+         tab: 9,
+         enter: 13,
+ ... (146 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L668-L669` → after: `L484-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L484-L486) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L668-L669)

```diff
-     function ir(MM) {
-       return 1 + .002 * qM(MM)
+     function yU() {
+       let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
+       this.nowObject = performance || Date, this.pollTime = UU, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L673` → after: `L492-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L492-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L492-L496) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L673)

```diff
-       return Math.round(10 * MM) / 10
+       for (var XU = UU._data, zU = 1e3 / UU.bq, cU = XU.nowObject.now() + AU, yU = 0; XU.nowObject.now() >= XU.lastTickStarted + zU && XU.nowObject.now() < cU && ++yU <= QU;) UU.aG(zU), XU.lastTickStarted += zU;
+       var FU = 5 * (zU + 5),
+         oU = XU.nowObject.now();
+       if (oU - XU.lastTickStarted > FU)
+         for (; oU >= XU.lastTickStarted + zU;) XU.lastTickStarted += zU
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L675-L700` → after: `L498-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L498-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L498-L520) · [Before (L675-L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L675-L700)

```diff
- 
-     function Sr(MM, rM) {
-       switch (MM) {
-         case "foraging":
-           return {
-             translationKey: "skyblockGame:foragingBenefit", percent: Or(100 * (VM(rM) - 1))
-           };
-         case "combat":
-           return {
-             translationKey: "skyblockGame:combatBenefit", percent: Or(100 * (TM(rM) - 1))
-           };
-         case "mining":
-           return {
-             translationKey: "skyblockGame:miningBenefit", percent: Or(100 * (cM(rM) - 1))
-           };
-         case "farming":
- ... (10 more removed lines; see GitHub link above)
+   },
+   37429: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
+     });
+     var cU = zU(61);
+     const yU = cU.useLayoutEffect;
+     const QU = function(UU) {
+       var XU = (0, cU.useRef)(UU);
+       return yU((function() {
+         XU.current = UU
+       })), XU
+     };
+     var AU = function(UU) {
+       var XU = QU(UU);
+       (0, cU.useEffect)((function() {
+ ... (7 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L702-L721` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L522) · [Before (L702-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L702-L721)

```diff
-       }
-     }
- 
-     function jr(MM) {
-       return "farming" === MM ? 200 : 100
-     }
- 
-     function ar(MM, rM) {
-       if (!Number.isSafeInteger(MM) || MM < 0) throw new Error("Skill XP must be a non-negative safe integer");
-       const iM = jr(rM),
-         OM = MM => function(MM, rM) {
-           return jr(MM) * rM * (rM + 1) / 2
-         }(rM, MM);
-       let SM = Math.min(KM, Math.floor((Math.sqrt(8 * MM / iM + 1) - 1) / 2));
-       return SM < KM && OM(SM + 1) <= MM ? SM++ : OM(SM) > MM && SM--, {
-         totalXp: MM,
- ... (4 more removed lines; see GitHub link above)
+       }), [])
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L723-L726` → after: `L524-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L524-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L524-L647) · [Before (L723-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L723-L726)

```diff
-     const Pr = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);
- 
-     function nr(MM) {
-       return Pr.has(MM)
+   },
+   37301: UU => {
+     var XU, zU = "undefined" !== typeof window ? window.navigator.userAgent : "",
+       cU = /OS X/.test(zU),
+       yU = /Opera/.test(zU),
+       QU = !/like Gecko/.test(zU) && !yU,
+       AU = UU.exports = {
+         0: cU ? "<menu>" : "<UNK>",
+         1: "<mouse 1>",
+         2: "<mouse 2>",
+         3: "<break>",
+         4: "<mouse 3>",
+         5: "<mouse 4>",
+         6: "<mouse 5>",
+         8: "<backspace>",
+         9: "<tab>",
+ ... (108 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L728-L731` → after: `L649-L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L649-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L649-L660) · [Before (L728-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L728-L731)

```diff
-     const Qr = new Set(LM.lb);
- 
-     function zr(MM) {
-       return Qr.has(MM)
+     zU.d(XU, {
+       d: () => cU
+     })
+   },
+   39812: (UU, XU, zU) => {
+     function cU(UU, XU, zU, cU) {
+       zU && Object.defineProperty(UU, XU, {
+         enumerable: zU.enumerable,
+         configurable: zU.configurable,
+         writable: zU.writable,
+         value: zU.initializer ? zU.initializer.call(cU) : void 0
+       })
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L733-L870` → after: `L662-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L662-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L662-L706) · [Before (L733-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L733-L870)

```diff
-     new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato  … [truncated]
-     const Lr = {
-         "Maple Log": 10,
-         "Pine Log": 10,
-         "Plum Log": 10,
-         "Cedar Log": 10,
-         "Aspen Log": 10,
-         "Jungle Log": 10,
-         "Palm Log": 10,
-         "Pear Log": 10,
-         "Cherry Log": 10,
-         "Spectral Log": 10,
-         "Mango Log": 10
-       },
-       mr = {
-         Stone: 2,
- ... (122 more removed lines; see GitHub link above)
+     zU.d(XU, {
+       c: () => cU
+     })
+   },
+   39486: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => QU
+     });
+     var cU = zU(39493);
+     const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
+       ...UU
+     } : null : UU.clone(XU) : null;
+     class QU {
+       static DeepCopy(UU, XU, zU, QU) {
+         let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const FU = function(UU) {
+ ... (29 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L872-L877` → after: `L708-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L708-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L708-L723) · [Before (L872-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L872-L877)

```diff
- 
-     function Er(MM, rM, iM) {
-       if (!iM) return MM(rM);
-       const OM = {};
-       for (const [SM, jM] of Object.entries(iM)) OM[SM] = "string" === typeof jM ? jM : MM(jM.translationKey);
-       return MM(rM, OM)
+   },
+   39519: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => yU,
+       d: () => QU,
+       e: () => AU,
+       g: () => FU
+     });
+     var cU = zU(37923);
+     class yU {
+       constructor(UU, XU, zU) {
+         this.gradient = UU, this.color1 = XU, this.color2 = zU
+       }
+       getColorToRef(UU) {
+         this.color2 ? cU.e.LerpToRef(this.color1, this.color2, Math.random(), UU) : UU.YL(this.color1)
+       }
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L881` → after: `L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L727) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L881)

```diff
-         this.now = MM, this.getJournal = rM, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.sQ = !1, this.onShown = () => {}
+         this.gradient = UU, this.color = XU
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L883-L890` → after: `L729-L732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L729-L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L729-L732) · [Before (L883-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L883-L890)

```diff
-       enqueue(MM) {
-         const rM = Gr(MM);
-         if (rM) this.pending.push(MM);
-         else {
-           const rM = this.pending.findIndex(Gr);
-           this.pending.splice(-1 === rM ? this.pending.length : rM, 0, MM)
-         }
-         return (null === this.current || null !== this.followUp && !rM) && (this.advance(), !0)
+     }
+     class AU {
+       constructor(UU, XU, zU) {
+         this.gradient = UU, this.factor1 = XU, this.factor2 = zU
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L892-L893` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L734-L735) · [Before (L892-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L892-L893)

```diff
-       setHeld(MM) {
-         return this.sQ = MM, !MM && null === this.current && this.pending.length > 0 && (this.advance(), !0)
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L895-L902` → after: `L737-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L737-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L737-L746) · [Before (L895-L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L895-L902)

```diff
-       bL() {
-         const MM = this.getJournal(),
-           rM = this.followUp;
-         if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === rM ? this.findFollowUp(this.current) : null), !0;
-         if ("explore" === (null === rM || void 0 === rM ? void 0 : rM.kind) && MM && MM.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
-         if ("step" === (null === rM || void 0 === rM ? void 0 : rM.kind)) {
-           const MM = this.findFollowUp(this.current);
-           if ("step" !== (null === MM || void 0 === MM ? void 0 : MM.kind) || MM.questId !== rM.questId || MM.step.id !== rM.step.id) return this.showFollowUp(MM, this.expiresAt), !0
+     }
+     class FU {
+       static GetCurrentGradient(UU, XU, zU) {
+         if (XU[0].gradient > UU) return void zU(XU[0], XU[0], 1);
+         for (let yU = 0; yU < XU.length - 1; yU++) {
+           const cU = XU[yU],
+             QU = XU[yU + 1];
+           if (UU >= cU.gradient && UU <= QU.gradient) {
+             return void zU(cU, QU, (UU - cU.gradient) / (QU.gradient - cU.gradient))
+           }
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L904` → after: `L748-L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L748-L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L748-L749) · [Before (L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L904)

```diff
-         return !1
+         const cU = XU.length - 1;
+         zU(XU[cU], XU[cU], 1)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L906-L907` → after: `L751-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L751-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L751-L807) · [Before (L906-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L906-L907)

```diff
-       clear() {
-         this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
+     }
+   },
+   39493: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => cU
+     });
+     class cU {
+       static _CheckLimit(UU, XU) {
+         let zU = cU._LogLimitOutputs[UU];
+         return zU ? zU.current++ : (zU = {
+           limit: XU,
+           current: 1
+         }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
+       }
+       static _GenerateLimitMessage(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+ ... (41 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L909-L936` → after: `L809-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L809-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L809-L851) · [Before (L909-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L909-L936)

```diff
-       getView(MM, rM, iM) {
-         var OM, SM, jM, aM;
-         if (null === this.current) return null;
-         if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, MM, iM);
-         if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, MM);
-         if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, MM, rM);
-         const {
-           questCompletionKind: PM,
-           questCompletionNameKey: nM
-         } = this.current, QM = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, zM = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, LM = "step" === (null === (OM = this.followUp) || void 0 === OM … [truncated]
-         let HM;
-         return HM = mM ? MM("skyblockGame:questExploreTitle") : null !== LM ? "quest" === PM ? MM("skyblockGame:questNextQuestTitle", {
-           quest: MM(LM.questNameKey)
-         }) : MM("skyblockGame:questNextStepTitle") : MM("started" === PM ? "skyblockGame:questStartedTitle" : "quest" === PM ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
-           token: this.token,
-           kind: null === this.followUp ? PM : "step",
- ... (12 more removed lines; see GitHub link above)
+     }
+     cU.NoneLogLevel = 0, cU.MessageLogLevel = 1, cU.WarningLogLevel = 2, cU.ErrorLogLevel = 4, cU.AllLogLevel = 7, cU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", cU._LogCache = "", cU._LogLimitOutputs = {}, cU._Levels =  … [truncated]
+       color: "white",
+       logFunc: console.log,
+       name: "Log"
+     }, {
+       color: "orange",
+       logFunc: console.warn,
+       name: "Warn"
+     }, {}, {
+       color: "red",
+       logFunc: console.error,
+       name: "Error"
+     }], cU.errorsCount = 0, cU.Log = cU._LogEnabled.bind(cU, cU.MessageLogLevel), cU.Warn = cU._LogEnabled.bind(cU, cU.WarningLogLevel), cU.Error = cU._LogEnabled.bind(cU, cU.ErrorLogLevel)
+   },
+   39525: (UU, XU, zU) => {
+ ... (27 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L938-L963` → after: `L853-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L853-L854) · [Before (L938-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L938-L963)

```diff
-       getSkillLevelView(MM, rM, iM) {
-         let {
-           skill: OM,
-           beforeLevel: SM,
-           level: jM
-         } = MM;
-         const aM = Sr(OM, SM),
-           PM = Sr(OM, jM);
-         return {
-           token: this.token,
-           kind: "skillLevel",
-           phase: "completion",
-           title: rM(`skyblockGame:${OM}`),
-           name: rM("skyblockGame:skillLevelUp", {
-             to: jM.toLocaleString(iM)
-           }),
- ... (10 more removed lines; see GitHub link above)
+       applyToShader(UU) {
+         UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2), UU.setVector3("minEmitBox", this.minEmitBox), UU.setVector3("maxEmitBox", this.maxEmitBox)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L965-L981` → after: `L856-L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L856-L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L856-L857) · [Before (L965-L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L965-L981)

```diff
-       getLandmarkView(MM, rM) {
-         let {
-           landmarkNameKey: iM
-         } = MM;
-         return {
-           token: this.token,
-           kind: "landmark",
-           phase: "completion",
-           title: rM("skyblockGame:landmarkDiscovered"),
-           name: rM(iM),
-           description: null,
-           reward: null,
-           iconItem: null,
-           accent: null,
-           durationMs: this.expiresAt - this.shownAt,
-           waypointNameKey: null
- ... (1 more removed lines; see GitHub link above)
+       buildUniformLayout(UU) {
+         UU.addUniform("direction1", 3), UU.addUniform("direction2", 3), UU.addUniform("minEmitBox", 3), UU.addUniform("maxEmitBox", 3)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L983-L1007` → after: `L859-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L859-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L859-L860) · [Before (L983-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L983-L1007)

```diff
-       getNpcNoteView(MM, rM, iM) {
-         let {
-           titleKey: OM,
-           textKey: SM,
-           params: jM = {},
-           nameKeys: aM = {},
-           iconItem: PM = null
-         } = MM;
-         const nM = {
-           ...jM
-         };
-         for (const [QM, zM] of Object.entries(aM)) nM[QM] = rM(zM);
-         return {
-           token: this.token,
-           kind: "npcNote",
-           phase: "completion",
- ... (9 more removed lines; see GitHub link above)
+       getEffectDefines() {
+         return "#define BOXEMITTER"
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1009-L1046` → after: `L862-L863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L862-L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L862-L863) · [Before (L1009-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1009-L1046)

```diff
-       durationMs() {
-         var MM;
-         if (null !== this.followUp) return 5600;
-         switch (null === (MM = this.current) || void 0 === MM ? void 0 : MM.questCompletionKind) {
-           case "quest":
-             return 4800;
-           case "started":
-             return 4e3;
-           case "skillLevel":
-             return 3e3;
-           case "landmark":
-             return 3500;
-           case "npcNote":
-             return 8e3;
-           default:
-             return 2400
- ... (22 more removed lines; see GitHub link above)
+       getClassName() {
+         return "BoxParticleEmitter"
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1048-L1049` → after: `L865-L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L865-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L865-L867) · [Before (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1048-L1049)

```diff
-       hasPendingQuestPopup() {
-         return this.pending.some((MM => !Gr(MM)))
+       serialize() {
+         const UU = {};
+         return UU.type = this.getClassName(), UU.direction1 = this.direction1.cyU(), UU.direction2 = this.direction2.cyU(), UU.minEmitBox = this.minEmitBox.cyU(), UU.maxEmitBox = this.maxEmitBox.cyU(), UU
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1051-L1053` → after: `L869-L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L869-L870) · [Before (L1051-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1051-L1053)

```diff
-       advance() {
-         var MM;
-         this.current = this.sQ ? null : null !== (MM = this.pending.shift()) && void 0 !== MM ? MM : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCo … [truncated]
+       parse(UU) {
+         cU.q.FromArrayToRef(UU.direction1, 0, this.direction1), cU.q.FromArrayToRef(UU.direction2, 0, this.direction2), cU.q.FromArrayToRef(UU.minEmitBox, 0, this.minEmitBox), cU.q.FromArrayToRef(UU.maxEmitBox, 0, this.maxEmitBox)
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1056-L1068` → after: `L873-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L873-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L873-L881) · [Before (L1056-L1068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1056-L1068)

```diff
- 
-     function Gr(MM) {
-       return Cr(MM.questCompletionKind)
-     }
- 
-     function Cr(MM) {
-       return "skillLevel" === MM || "landmark" === MM || "npcNote" === MM
-     }
-     var er = iM(39543),
-       br = iM(39548),
-       wr = iM(39509),
-       tr = iM(39571);
-     const gr = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
+   },
+   39484: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => FU,
+       f: () => AU
+     });
+     var cU = zU(37819),
+       yU = zU(37855),
+       QU = zU(39486);
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1071-L1216` → after: `L884-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L884-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L884-L888) · [Before (L1071-L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1071-L1216)

```diff
-         this.compassSpacing = 1, this.compassSize = {
-           trackHalfWidth: 0,
-           screenHalfWidth: 0
-         }, this.compass = null, this.terrain = null, this.searchAreaPath = {
-           seed: "",
-           d: ""
-         }, this.searchAreas = {
-           minimap: null,
-           map: null
-         }, this.player = null, this.waypoint = null, this.markerIcon = null, this.waypointMarkerSize = {
-           width: 0,
-           height: 0
-         }, this.waypointInset = {
-           x: 8,
-           top: 8,
-           bottom: 8
- ... (130 more removed lines; see GitHub link above)
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.radius = UU, this.height = XU, this.radiusRange = zU, this.directionRandomizer = yU, this._tempVector = cU.q.Zero()
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1218-L1219` → after: `L890-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L890-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L890-L894) · [Before (L1218-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1218-L1219)

```diff
-       mountSearchArea(MM, rM) {
-         this.searchAreas[MM] = this.dh ? null : rM, this.render(this.frame)
+       startDirectionFunction(UU, XU, zU, QU, AU) {
+         zU.position.subtractToRef(UU.getTranslation(), this._tempVector), this._tempVector.normalize(), cU.q.TransformNormalToRef(this._tempVector, AU, this._tempVector);
+         const FU = (0, yU.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
+         let oU = Math.atan2(this._tempVector.x, this._tempVector.z);
+         oU += (0, yU.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = FU, this._tempVector.x = Math.sin(oU), this._tempVector.z = Math.cos(oU), this._tempVector.normalize(), QU ? XU.YL(this._tempVector) : cU.q.TransformNormalFromFloatsToRef … [truncated]
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1221-L1289` → after: `L896-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L896-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L896-L903) · [Before (L1221-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1221-L1289)

```diff
-       render(MM) {
-         if (this.dh) return;
-         if (this.frame = MM, this.compass && (Rr(this.compass.root, !MM), MM)) {
-           const rM = this.compassSize.trackHalfWidth / 50;
-           MM.compass.cardinals.forEach(((MM, iM) => {
-             const OM = this.cardinals[iM];
-             OM.textContent !== MM.name && (OM.textContent = MM.name), Rr(OM, MM.hidden), OM.style.translate = MM.left * rM + "px"
-           }));
-           const iM = new Set;
-           MM.compass.markers.forEach(((OM, SM) => {
-             var jM;
-             iM.add(OM.id);
-             let aM = this.markers.get(OM.id);
-             aM || (aM = document.createElement("span"), aM.className = "SkyblockCompassMarker", this.markers.set(OM.id, aM), this.compass.track.appendChild(aM)), aM.dataset.icon !== OM.icon && (aM.dataset.icon = OM.icon, aM.replaceChildren((0, br.d)(OM.icon))), aM.style.color = n … [truncated]
-           }));
-           for (const [MM, OM] of this.markers) iM.has(MM) || (OM.remove(), this.markers.delete(MM));
- ... (53 more removed lines; see GitHub link above)
+       startPositionFunction(UU, XU, zU, QU) {
+         const AU = (0, yU.RandomRange)(-this.height / 2, this.height / 2),
+           FU = (0, yU.RandomRange)(0, 2 * Math.PI),
+           oU = (0, yU.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
+           DU = Math.sqrt(oU) * this.radius,
+           EU = DU * Math.cos(FU),
+           YU = DU * Math.sin(FU);
+         QU ? XU.sUU(EU, AU, YU) : cU.q.TransformCoordinatesFromFloatsToRef(EU, AU, YU, UU, XU)
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1291-L1296` → after: `L905-L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L905-L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L905-L907) · [Before (L1291-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1291-L1296)

```diff
-       dispose() {
-         var MM, rM;
-         this.mountWaypointOrigin(null), this.render(null), null === (MM = this.stopLayout) || void 0 === MM || MM.call(this), this.stopLayout = null, null === (rM = this.stopWaypoint) || void 0 === rM || rM.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = … [truncated]
-           minimap: null,
-           map: null
-         }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.dh = !0
+       clone() {
+         const UU = new AU(this.radius, this.directionRandomizer);
+         return QU.c.DeepCopy(this, UU), UU
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1298-L1312` → after: `L909-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L909-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L909-L910) · [Before (L1298-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1298-L1312)

```diff
-     }
- 
-     function Rr(MM, rM) {
-       MM.hidden !== rM && (MM.hidden = rM)
-     }
-     const pr = .55,
-       Wr = .6;
-     var sr = iM(39532);
-     const Dr = {
-       talk: "quest_talk",
-       search: "quest_search"
-     };
-     class kr {
-       constructor(MM, rM, iM, OM) {
-         this.map = MM, this.quests = rM, this.compass = iM, this.display = new ur, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.dh = !1, this.snapshot = null, this.texts = new Map, this.translate = OM
+       applyToShader(UU) {
+         UU.setFloat("radius", this.radius), UU.setFloat("height", this.height), UU.setFloat("radiusRange", this.radiusRange), UU.setFloat("directionRandomizer", this.directionRandomizer)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1314-L1315` → after: `L912-L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L912-L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L912-L913) · [Before (L1314-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1314-L1315)

```diff
-       setTranslator(MM, rM) {
-         this.translate = MM, this.locale = rM, this.metresFormat = new Intl.NumberFormat(rM), this.texts.clear()
+       buildUniformLayout(UU) {
+         UU.addUniform("radius", 1), UU.addUniform("height", 1), UU.addUniform("radiusRange", 1), UU.addUniform("directionRandomizer", 1)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1317-L1322` → after: `L915-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L915-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L915-L916) · [Before (L1317-L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1317-L1322)

```diff
-       translateCached(MM, rM) {
-         const iM = void 0 === rM ? MM : `${MM} ${rM}`;
-         let OM = this.texts.get(iM);
-         return void 0 === OM && (this.texts.size >= 500 && this.texts.clear(), OM = this.translate(MM, void 0 === rM ? void 0 : {
-           distance: rM
-         }), this.texts.set(iM, OM)), OM
+       getEffectDefines() {
+         return "#define CYLINDEREMITTER"
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1324-L1325` → after: `L918-L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L918-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L918-L919) · [Before (L1324-L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1324-L1325)

```diff
-       getSnapshot() {
-         return this.snapshot
+       getClassName() {
+         return "CylinderParticleEmitter"
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1327-L1454` → after: `L921-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L921-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L921-L923) · [Before (L1327-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1327-L1454)

```diff
-       afterRender(MM, rM, iM) {
-         if (this.dh) return;
-         if (!MM) return this.snapshot = null, void this.display.render(null);
-         const OM = this.map.getSnapshot().map,
-           jM = iM.cameraHeading,
-           aM = {
-             ...this.display.compassSize,
-             tanHalfFovX: iM.tanHalfFovX,
-             pitch: iM.cameraPitch
-           },
-           PM = [];
-         if (OM)
-           for (const SM of this.compass.frame(MM, jM, rM)) {
-             const MM = HM(SM.offset, aM);
-             null !== MM && PM.push({
-               ...SM,
- ... (112 more removed lines; see GitHub link above)
+       serialize() {
+         const UU = {};
+         return UU.type = this.getClassName(), UU.radius = this.radius, UU.height = this.height, UU.radiusRange = this.radiusRange, UU.directionRandomizer = this.directionRandomizer, UU
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1456-L1457` → after: `L925-L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L925-L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L925-L926) · [Before (L1456-L1457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1456-L1457)

```diff
-       dispose() {
-         this.dh = !0, this.snapshot = null, this.display.dispose()
+       parse(UU) {
+         this.radius = UU.radius, this.height = UU.height, this.radiusRange = UU.radiusRange, this.directionRandomizer = UU.directionRandomizer
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1462-L1579` → after: `L930-L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L930-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L930-L936) · [Before (L1462-L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1462-L1579)

```diff
-       constructor(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
-           iM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : MM => MM,
-           OM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
-           SM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MM => MM;
-         super(MM, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = rM, this.translate = iM, this.locale = OM, this.itemName = SM, this.progress = null, this.selected = … [truncated]
-           enabled: !1,
-           open: !1,
-           skills: [],
-           detail: null,
-           overallLevel: null,
-           hud: null
-         }, this.select = MM => {
-           this.selected = MM, this.emit()
-         }
-       }
- ... (102 more removed lines; see GitHub link above)
+       constructor() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new cU.q(0, 1, 0),
+           QU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new cU.q(0, 1, 0);
+         super(UU, XU, zU), this.direction1 = yU, this.direction2 = QU
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1581-L1582` → after: `L938-L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L938-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L938-L942) · [Before (L1581-L1582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1581-L1582)

```diff
-       rejectBlock(MM) {
-         this.pending.delete(MM.join(",")) && this.emit()
+       startDirectionFunction(UU, XU, zU, QU) {
+         const AU = (0, yU.RandomRange)(this.direction1.x, this.direction2.x),
+           FU = (0, yU.RandomRange)(this.direction1.y, this.direction2.y),
+           oU = (0, yU.RandomRange)(this.direction1.z, this.direction2.z);
+         QU ? XU.sUU(AU, FU, oU) : cU.q.TransformNormalFromFloatsToRef(AU, FU, oU, UU, XU)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1584-L1588` → after: `L944-L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L944-L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L944-L946) · [Before (L1584-L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1584-L1588)

```diff
-       bL() {
-         if (this.dh) return;
-         let MM = !1;
-         for (const [rM, iM] of this.pending) iM.expires <= this.now() && (this.pending.delete(rM), MM = !0);
-         this.recent && this.recent.expires <= this.now() && (this.recent = null, MM = !0), MM && this.emit()
+       clone() {
+         const UU = new FU(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
+         return QU.c.DeepCopy(this, UU), UU
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1590-L1591` → after: `L948-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L948-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L948-L949) · [Before (L1590-L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1590-L1591)

```diff
-       dispose() {
-         this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
+       applyToShader(UU) {
+         UU.setFloat("radius", this.radius), UU.setFloat("height", this.height), UU.setFloat("radiusRange", this.radiusRange), UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1593-L1603` → after: `L951-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L951-L952) · [Before (L1593-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1593-L1603)

```diff
-       recordGain(MM, rM) {
-         var iM, OM;
-         let SM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const jM = (null === (iM = this.recent) || void 0 === iM ? void 0 : iM.skill) === MM && this.recent.expires > this.now() ? this.recent.confirmed : 0,
-           aM = (null === (OM = this.recent) || void 0 === OM ? void 0 : OM.skill) === MM && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
-         this.recent = {
-           skill: MM,
-           confirmed: jM + rM,
-           expires: this.now() + 3e3,
-           levelUpToken: null !== SM && void 0 !== SM ? SM : aM
-         }
+       buildUniformLayout(UU) {
+         UU.addUniform("radius", 1), UU.addUniform("height", 1), UU.addUniform("radiusRange", 1), UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1605-L1608` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L954-L955) · [Before (L1605-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1605-L1608)

```diff
-       pendingXp(MM) {
-         let rM = 0;
-         for (const iM of this.pending.values()) iM.skill === MM && (rM += iM.amount);
-         return rM
+       getEffectDefines() {
+         return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1610-L1613` → after: `L957-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L957-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L957-L958) · [Before (L1610-L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1610-L1613)

```diff
-       predictedProgress(MM) {
-         const rM = this.progress[MM],
-           iM = this.pendingXp(MM);
-         return iM ? ar(rM.totalXp + iM, MM) : rM
+       getClassName() {
+         return "CylinderDirectedParticleEmitter"
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1615-L1616` → after: `L960-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L960-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L960-L962) · [Before (L1615-L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1615-L1616)

```diff
-       isEnabled() {
-         return null !== this.progress
+       serialize() {
+         const UU = super.serialize();
+         return UU.direction1 = this.direction1.cyU(), UU.direction2 = this.direction2.cyU(), UU
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1618-L1658` → after: `L964-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L964-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L964-L965) · [Before (L1618-L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1618-L1658)

```diff
-       buildSnapshot() {
-         var MM, rM, iM;
-         const OM = this.progress ? IM.map((MM => {
-             const rM = this.predictedProgress(MM);
-             return {
-               ...this.text(MM),
-               icon: dr[MM],
-               benefit: this.benefit(MM, rM.level),
-               sources: this.sources(MM),
-               id: MM,
-               selected: MM === this.selected,
-               level: this.translate("skyblockGame:level", {
-                 level: this.number(rM.level)
-               }),
-               xp: null === rM.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
-                 current: this.number(rM.xpIntoLevel),
- ... (25 more removed lines; see GitHub link above)
+       parse(UU) {
+         super.parse(UU), cU.q.FromArrayToRef(UU.direction1, 0, this.direction1), cU.q.FromArrayToRef(UU.direction2, 0, this.direction2)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1661-L1830` → after: `L968-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L968-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L968-L998) · [Before (L1661-L1830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1661-L1830)

```diff
-     const fr = Math.max(1600, 600, 950) + 400,
-       Yr = {
-         "--quest-step-flash": "1600ms",
-         "--quest-step-pop": "600ms",
-         "--quest-step-unlock": "500ms",
-         "--quest-step-unlock-delay": "450ms"
-       },
-       Nr = "skyblockQuestsView",
-       Ar = "skyblockQuestNotificationView";
-     class xr extends nM {
-       constructor(MM, rM, iM) {
-         let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
-           SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
-           jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
-           aM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
-         super(MM, OM, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = rM, this.translate = iM, this.now = SM, this.locale = jM, this.publishNotification = aM, this.notifications = void 0, this.notificationSnapshot = null, this.au … [truncated]
- ... (154 more removed lines; see GitHub link above)
+   },
+   39617: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => YU
+     });
+     const cU = .5 * (Math.sqrt(3) - 1),
+       yU = (3 - Math.sqrt(3)) / 6,
+       QU = 1 / 3,
+       AU = 1 / 6,
+       FU = (Math.sqrt(5) - 1) / 4,
+       oU = (5 - Math.sqrt(5)) / 20,
+       DU = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
+       EU = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
+     const YU = class {
+       constructor() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
+ ... (15 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1832-L1976` → after: `L1000-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1000-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L1000-L1006) · [Before (L1832-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1832-L1976)

```diff
-           }));
-         return {
-           id: MM.id,
-           name: Er(aM, MM.nameKey, MM.nameParams),
-           description: Er(aM, MM.descriptionKey, MM.descriptionParams),
-           progress: rM ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
-             current: MM.progress.toLocaleString(this.locale),
-             target: MM.target.toLocaleString(this.locale)
-           }),
-           completed: rM,
-           tracked: SM,
-           selected: MM.id === this.selected,
-           canTrack: !rM && !SM && !jM,
-           trackLabel: this.translate(SM ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : jM ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
-           canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== MM.id,
-           subquests: PM,
- ... (129 more removed lines; see GitHub link above)
+           }();
+           XU = QU(" "), zU = QU(" "), cU = QU(" "), XU -= QU(UU), XU < 0 && (XU += 1);
+           zU -= QU(UU), zU < 0 && (zU += 1);
+           cU -= QU(UU), cU < 0 && (cU += 1);
+           return function() {
+             const UU = 2091639 * XU + 2.3283064365386963e-10 * yU;
+             return XU = zU, zU = cU, cU = UU - (yU = 0 | UU)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L1978-L2046` → after: `L1008-L1088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1008-L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L1008-L1088) · [Before (L1978-L2046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L1978-L2046)

```diff
-         }));
-         return {
-           dungeonName: this.translate(MM.nameKey),
-           pages: rM,
-           page: rM[this.pageIndex],
-           canPrevious: this.pageIndex > 0,
-           canNext: this.pageIndex < rM.length - 1
-         }
-       }
-       lockedHint(MM, rM) {
-         var iM, OM, SM;
-         if (0 === rM && "number" === typeof MM.combatLevelLock) {
-           const rM = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
-             level: MM.combatLevelLock
-           });
-           return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
- ... (53 more removed lines; see GitHub link above)
+         }(UU);
+         this.p = function(UU) {
+           const XU = new Uint8Array(256);
+           for (let zU = 0; zU < 256; zU++) XU[zU] = zU;
+           for (let zU = 0; zU < 255; zU++) {
+             const cU = zU + ~~(UU() * (256 - zU)),
+               yU = XU[zU];
+             XU[zU] = XU[cU], XU[cU] = yU
+           }
+           return XU
+         }(XU), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
+         for (let zU = 0; zU < 512; zU++) this.perm[zU] = this.p[255 & zU], this.permMod12[zU] = this.perm[zU] % 12
+       }
+       noise2D(UU, XU) {
+         const zU = this.permMod12,
+           QU = this.perm;
+ ... (65 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2048-L2063` → after: `L1090-L1094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1090-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L1090-L1094) · [Before (L2048-L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L2048-L2063)

```diff
-       }
-       isEnabled() {
-         return null !== this.authoritative
-       }
-       buildSnapshot() {
-         var MM, rM, iM;
-         const OM = null !== (MM = null === (rM = this.authoritative) || void 0 === rM ? void 0 : rM.dungeons) && void 0 !== MM ? MM : [];
-         var SM, jM;
-         OM.some((MM => MM.id === this.selected)) || (this.selected = null !== (SM = null === (jM = OM[0]) || void 0 === jM ? void 0 : jM.id) && void 0 !== SM ? SM : null);
-         const aM = OM.map((MM => this.entry(MM)));
-         return {
-           enabled: this.isEnabled(),
-           open: this.open,
-           dungeons: aM,
-           detail: null !== (iM = aM.find((MM => MM.selected))) && void 0 !== iM ? iM : null,
-           picker: null === this.pickerDungeonId ? null : this.picker()
+         let vU = .6 - LU * LU - eU * eU - CU * CU;
+         if (vU < 0) oU = 0;
+         else {
+           const UU = 3 * cU[fU + BU + yU[iU + ZU + yU[HU + RU]]];
+           vU *= vU, oU = vU * vU * (DU[UU] * LU + DU[UU + 1] * eU + DU[UU + 2] * CU)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2065-L2281` → after: `L1096-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1096-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L1096-L1100) · [Before (L2065-L2281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L2065-L2281)

```diff
-       }
-     }
-     const Xr = ["mining", "farming", "foraging", "fishing", "combat"],
-       Ir = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
-       Kr = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];
- 
-     function qr() {
-       for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
-       return rM.map(((MM, rM) => ({
-         amount: MM,
-         coins: Ir[rM],
-         xp: Kr[rM]
-       })))
-     }
-     const Tr = qr(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
-       Vr = qr(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
- ... (201 more removed lines; see GitHub link above)
+         let VU = .6 - wU * wU - qU * qU - OU * OU;
+         if (VU < 0) EU = 0;
+         else {
+           const UU = 3 * cU[fU + PU + yU[iU + WU + yU[HU + dU]]];
+           VU *= VU, EU = VU * VU * (DU[UU] * wU + DU[UU + 1] * qU + DU[UU + 2] * OU)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2283-L2321` → after: `L1102-L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1102-L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L1102-L1164) · [Before (L2283-L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L2283-L2321)

```diff
-       }
-       setTranslator(MM, rM, iM) {
-         this.translate = MM, this.locale = rM, this.itemName = iM, this.emit()
-       }
-       GL(MM) {
-         if (!this.dh)
-           if ("collOpen" !== MM.kind) {
-             (MM.collFull || null === this.counts) && (this.counts = new Map);
-             for (const [rM, iM] of MM.collCounts) this.counts.set(rM, iM);
-             this.emit()
-           } else this.show()
-       }
-       dispose() {
-         this.counts = null, super.dispose()
-       }
-       isEnabled() {
- ... (23 more removed lines; see GitHub link above)
+         let sU = .6 - SU * SU - rU * rU - uU * uU;
+         if (sU < 0) YU = 0;
+         else {
+           const UU = 3 * cU[fU + 1 + yU[iU + 1 + yU[HU + 1]]];
+           sU *= sU, YU = sU * sU * (DU[UU] * SU + DU[UU + 1] * rU + DU[UU + 2] * uU)
+         }
+         return 32 * (FU + oU + EU + YU)
+       }
+       noise4D(UU, XU, zU, cU) {
+         const yU = this.perm;
+         let QU, AU, DU, YU, NU;
+         const IU = (UU + XU + zU + cU) * FU,
+           pU = Math.floor(UU + IU),
+           aU = Math.floor(XU + IU),
+           tU = Math.floor(zU + IU),
+           gU = Math.floor(cU + IU),
+ ... (47 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2323-L2336` → after: `L1166-L1170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1166-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L1166-L1170) · [Before (L2323-L2336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L2323-L2336)

```diff
-       }
-       categoryView(MM) {
-         const rM = this.inCategory(MM),
-           iM = rM.reduce(((MM, rM) => MM + this.tierOf(rM)), 0),
-           OM = rM.reduce(((MM, rM) => MM + rM.tiers.length), 0);
-         return {
-           id: MM,
-           label: this.translate(`skyblockGame:${MM}`),
-           icon: dr[MM],
-           tiers: this.translate("skyblockGame:collectionProgress", {
-             current: this.number(iM),
-             target: this.number(OM)
-           }),
-           selected: MM === this.category
+         let oX = .6 - vU * vU - VU * VU - sU * sU - nU * nU;
+         if (oX < 0) AU = 0;
+         else {
+           const UU = yU[cX + eU + yU[yX + CU + yU[QX + wU + yU[AX + qU]]]] % 32 * 4;
+           oX *= oX, AU = oX * oX * (EU[UU] * vU + EU[UU + 1] * VU + EU[UU + 2] * sU + EU[UU + 3] * nU)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2338-L2360` → after: `L1172-L1176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1172-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L1172-L1176) · [Before (L2338-L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L2338-L2360)

```diff
-       }
-       collectionView(MM) {
-         var rM, iM;
-         const OM = null !== (rM = this.counts.get(MM.id)) && void 0 !== rM ? rM : 0,
-           SM = Qi(MM, OM),
-           jM = null !== (iM = MM.tiers[SM]) && void 0 !== iM ? iM : null,
-           aM = 0 === SM ? 0 : MM.tiers[SM - 1].amount;
-         return {
-           id: MM.id,
-           name: this.itemName(MM.item),
-           icon: MM.item,
-           selected: MM.id === this.selected,
-           locked: 0 === OM,
-           count: this.translate("skyblockGame:collectionCount", {
-             count: this.number(OM)
-           }),
- ... (7 more removed lines; see GitHub link above)
+         let DX = .6 - mU * mU - lU * lU - xU * xU - JU * JU;
+         if (DX < 0) DU = 0;
+         else {
+           const UU = yU[cX + OU + yU[yX + SU + yU[QX + rU + yU[AX + uU]]]] % 32 * 4;
+           DX *= DX, DU = DX * DX * (EU[UU] * mU + EU[UU + 1] * lU + EU[UU + 2] * xU + EU[UU + 3] * JU)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2362-L2473` → after: `L1178-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1178-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L1178-L1182) · [Before (L2362-L2473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L2362-L2473)

```diff
-       }
-       reward(MM, rM, iM) {
-         return this.translate("skyblockGame:collectionReward", {
-           coins: this.number(rM),
-           xp: this.number(iM),
-           skill: this.translate(`skyblockGame:${MM.category}`)
-         })
-       }
-       tierLabel(MM) {
-         return this.translate("skyblockGame:collectionTier", {
-           tier: Li(MM)
-         })
-       }
-       tierOf(MM) {
-         var rM;
-         return Qi(MM, null !== (rM = this.counts.get(MM.id)) && void 0 !== rM ? rM : 0)
- ... (96 more removed lines; see GitHub link above)
+         let EX = .6 - jU * jU - KU * KU - bU * bU - TU * TU;
+         if (EX < 0) YU = 0;
+         else {
+           const UU = yU[cX + fU + yU[yX + iU + yU[QX + HU + yU[AX + MU]]]] % 32 * 4;
+           EX *= EX, YU = EX * EX * (EU[UU] * jU + EU[UU + 1] * KU + EU[UU + 2] * bU + EU[UU + 3] * TU)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/237.js` (Changed code · before: `L2475-L2568` → after: `L1184-L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474abR1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-570b8c0ed3adc77a35600672aadc0cd788d2acb04fe2c542c6a02c6bbc5474ab) · [After (L1184-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/237.js#L1184-L1188) · [Before (L2475-L2568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/237.js#L2475-L2568)

```diff
-         for (; rM.itemsLanded < rM.view.items.length && 2e3 + 160 * rM.itemsLanded + 630 <= iM;) this.onItemLanded(rM.itemsLanded), rM.itemsLanded++;
-         iM >= rM.view.durationMs && (this.finish(), this.startNext(MM))
-       }
-       dispose() {
-         null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.sQ = [], this.Tz(null)
-       }
-       startNext(MM) {
-         if (0 === this.queue.length || this.isBusy()) return;
-         const rM = this.queue.shift();
-         this.token++;
-         const iM = {
-           token: this.token,
-           day: rM.dailyRewardDay,
-           coins: rM.dailyRewardCoins,
-           items: rM.dailyRewardItems,
-           durationMs: 5e3,
- ... (78 more removed lines; see GitHub link above)
+         let YX = .6 - hU * hU - UX * UX - XX * XX - zX * zX;
+         if (YX < 0) NU = 0;
+         else {
+           const UU = yU[cX + 1 + yU[yX + 1 + yU[QX + 1 + yU[AX + 1]]]] % 32 * 4;
+           YX *= YX, NU = YX * YX * (EU[UU] * hU + EU[UU + 1] * UX + EU[UU + 2] * XX + EU[UU + 3] * zX)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/238.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/238.js` (29 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L4)

```diff
-   37308: (MM, rM, iM) => {
+   42174: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L6)

```diff
-       default: () => bM
+       LobbyManageView: () => RX
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L8` → after: `L8-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L8-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L8-L30) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L8)

```diff
-     var OM = iM(1116),
+     var cU = zU(61),
+       yU = zU(1521),
+       QU = zU(37740),
+       AU = zU(2627),
+       FU = zU(2635),
+       oU = zU(2616),
+       DU = zU(37279);
+ 
+     function EU() {
+       const [UU, XU] = (0, cU.useState)(new Map);
+       return {
+         get: XU => UU.get(XU),
+         hold: (0, cU.useCallback)(((UU, zU, cU) => {
+           XU((XU => new Map(XU).set(UU, zU))), cU.then((() => {
+             XU((XU => {
+               const zU = new Map(XU);
+ ... (7 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L10-L26` → after: `L32-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L32-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L32-L72) · [Before (L10-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L10-L26)

```diff
-       jM = iM(1608),
-       aM = iM(1108),
-       PM = iM(821),
-       nM = iM(1188),
-       QM = iM(1520),
-       zM = iM(1591),
-       LM = iM(3957),
-       mM = iM(1398),
-       HM = iM(3875),
-       hM = iM(2813),
-       JM = iM(1303);
-     const dM = 2;
- 
-     function yM(MM) {
-       return "firstPartyGame" === MM.type ? {
-         type: "game",
- ... (1 more removed lines; see GitHub link above)
+       IU = zU(1193),
+       pU = zU(1390),
+       aU = zU(1384),
+       tU = zU(2884),
+       gU = zU(5581),
+       kU = zU(3837);
+     var GU = zU(2047),
+       BU = zU(1494);
+ 
+     function ZU(UU, XU, zU) {
+       const cU = UU.filter((UU => UU.name !== XU)),
+         yU = cU.filter((UU => "none" === UU.role)).sort(((UU, XU) => XU.at - UU.at)),
+         QU = cU.filter((UU => "none" !== UU.role)).sort(((UU, XU) => zU.indexOf(UU.role) - zU.indexOf(XU.role) || XU.at - UU.at));
+       return [...UU.some((UU => UU.name === XU)) && null !== XU ? [XU] : [], ...[...yU, ...QU].map((UU => UU.name))]
+     }
+ 
+ ... (25 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L28-L29` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L74) · [Before (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L28-L29)

```diff
-         type: "preview",
-         preview: MM.preview
+         section: "gone"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L35-L37` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L110) · [Before (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L35-L37)

```diff
-         game: rM,
-         disabled: iM,
-         showPlaceholder: OM
+         status: XU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L39-L48` → after: `L112-L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L112-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L112-L119) · [Before (L39-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L39-L48)

```diff
-       return null !== rM ? (0, JM.jsx)(HM.h, {
-         source: yM(rM),
-         gameWidth: "100%",
-         useLongRatio: !0,
-         disabled: iM,
-         entrySource: "customGamePlace"
-       }) : OM ? (0, JM.jsx)(HM.e, {
-         gameWidth: "100%",
-         useLongRatio: !0
-       }) : null
+       return (0, uU.jsx)("span", {
+         className: NU()("LobbyManageStatus", {
+           LobbyManageStatusRefused: !XU.ok
+         }),
+         children: (0, uU.jsx)(SU.d, {
+           text: XU.text
+         })
+       })
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L54-L59` → after: `L124-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L124-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L124-L129) · [Before (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L54-L59)

```diff
-         category: iM,
-         title: OM,
-         tintColour: SM,
-         layout: jM,
-         games: aM,
-         landscape: PM = !1
+         names: XU,
+         cap: zU,
+         filterFrom: yU,
+         moreLabel: QU,
+         reveal: AU = null,
+         renderRow: FU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L62-L64` → after: `L132-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L132-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L132-L271) · [Before (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L62-L64)

```diff
-         followsLeader: nM
-       } = (0, hM.c)(), QM = null !== (rM = null === aM || void 0 === aM ? void 0 : aM.slice(0, jM.gameCount)) && void 0 !== rM ? rM : [], LM = {
-         "--custom-game-place-tint": SM
+         t: oU
+       } = (0, IU.I)(), [DU, EU] = (0, cU.useState)(!1), [YU, NU] = (0, cU.useState)(""), aU = DU || null !== AU && XU.indexOf(AU) >= zU, gU = (aU || XU.length <= zU) && null !== yU && XU.length > yU, kU = YU.trim().toLowerCase();
+       let GU = aU ? XU : XU.slice(0, zU);
+       return gU && "" !== kU && (GU = GU.filter((UU => UU.toLowerCase().includes(kU)))), (0, uU.jsxs)(uU.Fragment, {
+         children: [gU && (0, uU.jsx)(rU.e, {
+           className: "LobbyManageFilter",
+           placeholderText: oU("lobbyManage:findName"),
+           ariaLabel: oU("lobbyManage:findName"),
+           onValueChange: UU => {
+             NU(UU)
+           }
+         }), GU.length > 0 && (0, uU.jsx)("div", {
+           className: "PlayerRows",
+           children: GU.map(((UU, XU) => FU(UU, GU.length - XU)))
+         }), !aU && XU.length > zU && (0, uU.jsx)("div", {
+           className: "LobbyManageMore",
+ ... (124 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L67-L73` → after: `L491-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L491-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L491-L512) · [Before (L67-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L67-L73)

```diff
-         className: "CustomGamePlacePanel AnimFadeIn",
-         style: LM,
-         children: [(0, JM.jsx)("h2", {
-           className: "CustomGamePlacePanelHeading",
-           children: (0, JM.jsxs)(zM.LinkPreserveSearch, {
-             to: `/custom-games/${encodeURIComponent(iM)}`,
-             className: "CustomGamePlacePanelTitle SmallTextBold",
+         ref: NU,
+         className: "LobbyManagePage",
+         children: [ZU.here.length > 0 && (0, uU.jsxs)("div", {
+           className: "LobbyManageBox",
+           children: [(0, uU.jsxs)("div", {
+             className: "LobbyManageBoxHeading",
+             children: [(0, uU.jsx)(tU.b, {
+               label: DU("lobbyManage:here"),
+               meta: aU.here.length
+             }), LU >= 2 && !WU && (0, uU.jsxs)(BU.K, {
+               className: "LobbyManageTitleAction SmallTextLight",
+               padDestructive: !0,
+               disabled: AU.isPending("kickAll"),
+               onClick: () => {
+                 dU(!0)
+               },
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L75-L77` → after: `L514-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L514-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L514-L537) · [Before (L75-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L75-L77)

```diff
-               children: OM
-             }), (0, JM.jsx)(mM.b, {
-               name: "arrow-up"
+               className: "LobbyManageConfirmText",
+               children: DU("lobbyManage:kickAllConfirm", {
+                 count: LU
+               })
+             }), (0, uU.jsxs)("div", {
+               className: "LobbyManageButtons",
+               children: [(0, uU.jsx)(BU.G, {
+                 className: "LobbyManageIconButton SmallTextLight",
+                 analyticsClick: {
+                   id: "lobby_manage.kick_all"
+                 },
+                 onClick: () => {
+                   dU(!1), AU.send({
+                     type: "kickAll"
+                   }, "kickAll")
+                 },
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L80-L83` → after: `L735-L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L735-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L735-L976) · [Before (L80-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L80-L83)

```diff
-         }), (0, JM.jsx)("div", {
-           className: "CustomGamePlacePanelGames",
-           style: {
-             gridTemplateColumns: `repeat(${PM?jM.columnCount:dM}, ${PM?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
+         })
+       };
+       return (0, uU.jsxs)("div", {
+         className: "LobbyManageBox LobbyManageListing",
+         children: [(0, uU.jsx)(tU.b, {
+           label: cU("lobbyManage:inWorldsList")
+         }), (0, uU.jsxs)("div", {
+           className: "LobbyManageRuleRow",
+           children: [(0, uU.jsx)("div", {
+             className: "SliderText",
+             children: cU("lobbyManage:description")
+           }), (0, uU.jsx)(HU, {
+             value: zU.description,
+             ariaLabel: cU("lobbyManage:description"),
+             wide: !0,
+             onSave: UU => QU("description", UU)
+ ... (226 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L85-L87` → after: `L978-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L978-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L978-L1011) · [Before (L85-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L85-L87)

```diff
-           children: Array.from({
-             length: jM.gameCount
-           }, ((MM, rM) => {
+           statusOf: UU => zU.statusOf(`whitelist:${UU.toLowerCase()}`)
+         }), "public" === (null === oU || void 0 === oU ? void 0 : oU.visibility) && null !== gU.listing && (0, uU.jsx)(XX, {
+           manage: zU,
+           listing: gU.listing
+         })]
+       })
+     }
+ 
+     function AX(UU) {
+       var XU;
+       let {
+         manage: zU,
+         lobbyName: cU
+       } = UU;
+       const {
+         t: QU
+ ... (18 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L89-L94` → after: `L1013-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1013-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1013-L1052) · [Before (L89-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L89-L94)

```diff
-             return (0, JM.jsx)(lM, {
-               game: null !== (iM = QM[rM]) && void 0 !== iM ? iM : null,
-               disabled: nM,
-               showPlaceholder: !aM
-             }, rM)
-           }))
+             return null !== (XU = FU.get(UU.toLowerCase())) && void 0 !== XU ? XU : (0, jU.m)(oU, UU)
+           },
+           aG: (UU, XU) => {
+             (0, yU.reportAnalyticsClick)(XU ? {
+               id: "lobby_manage.whitelist_add",
+               value: "LY"
+             } : {
+               id: "lobby_manage.whitelist_remove"
+             });
+             const cU = UU.toLowerCase();
+             FU.hold(cU, XU, zU.send(XU ? {
+               type: "whitelistAdd",
+               names: [UU]
+             } : {
+               type: "whitelistRemove",
+               name: UU
+ ... (24 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L101` → after: `L1170-L1172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1170-L1172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1170-L1172) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L101)

```diff
-         categories: rM
+         names: XU,
+         pending: zU,
+         onAction: yU
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L104-L105` → after: `L1228-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1228-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1228-L1304) · [Before (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L104-L105)

```diff
-       function iM(MM) {
-         const iM = rM[MM];
+     function IX(UU, XU) {
+       return NX.map((zU => {
+         let {
+           group: cU,
+           title: yU
+         } = zU;
+         const QU = UU.filter((UU => UU.group === cU && void 0 === UU.parent)).map((zU => {
+           const cU = !0 === XU(zU) ? UU.filter((UU => UU.parent === zU.key)) : [];
+           return {
+             rule: zU,
+             children: cU
+           }
+         }));
+         return {
+           group: cU,
+           title: yU,
+ ... (61 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L107-L124` → after: `L1306-L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1306-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1306-L1404) · [Before (L107-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L107-L124)

```diff
-           ...iM,
-           landscape: !0
-         }, iM.id)
-       }
-       return (0, JM.jsxs)("div", {
-         className: "CustomGamePlaceMosaic CustomGamePlaceMosaicLandscape AnimFadeIn",
-         children: [(0, JM.jsxs)("div", {
-           className: "CustomGamePlaceUpper",
-           children: [(0, JM.jsxs)("div", {
-             className: "CustomGamePlaceMain",
-             children: [(0, JM.jsxs)("div", {
-               className: "CustomGamePlaceRow",
-               children: [iM(0), iM(2)]
-             }), iM(1)]
-           }), iM(4)]
-         }), (0, JM.jsxs)("div", {
- ... (2 more removed lines; see GitHub link above)
+           rule: UU,
+           value: DU(UU),
+           status: XU.statusOf(zU),
+           pending: XU.isPending(zU),
+           hiddenNames: AU,
+           zW: kU,
+           onAction: BU
+         }, UU.key)
+       };
+       return (0, uU.jsx)("div", {
+         className: "LobbyManagePage LobbyManageRules",
+         children: YU.map((UU => {
+           let {
+             group: XU,
+             title: zU,
+             items: yU
+ ... (83 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L128-L132` → after: `L1408-L1433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1408-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1408-L1433) · [Before (L128-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L128-L132)

```diff
-     const GM = ["section1", "section2", "section3", "section4", "section5", "section6"],
-       CM = {
-         section1: {
-           gameCount: 4,
-           columnCount: 2
+ 
+     function BX(UU) {
+       var XU;
+       const {
+         t: zU
+       } = (0, IU.I)(), {
+         pages: QU,
+         landing: AU
+       } = UU, oU = (0, cU.useRef)(null), DU = (0, cU.useRef)(null), EU = (0, cU.useRef)(null), YU = (0, cU.useRef)(new Map), [pU, aU] = (0, cU.useState)(null), GU = (0, cU.useRef)(pU), BU = (0, cU.useRef)(0), [ZU, RU] = (0, cU.useState)(QU[0]), PU = null !== pU && void 0 !== pU ? … [truncated]
+         const XU = pX(IX(UU.manage.state.rules, (UU => UU.value)));
+         return Math.max(1, Math.ceil(XU.length / gX))
+       })), eU = dU.flatMap((UU => "rules" === UU ? Array(LU).fill(UU) : [UU])), CU = function(UU, XU) {
+         const [zU, yU] = (0, cU.useState)(UU), QU = zU >= XU;
+         return QU && zU !== 1 / 0 && yU(1 / 0), (0, cU.useLayoutEffect)((() => {
+           if (QU) return;
+           let UU = !0;
+ ... (10 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L134-L136` → after: `L1435-L1437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1435-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1435-L1437) · [Before (L134-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L134-L136)

```diff
-         section2: {
-           gameCount: 6,
-           columnCount: 6
+         iU = () => {
+           var UU, XU;
+           oU.current.style.scrollPaddingTop = `${null!==(UU=null===(XU=EU.current)||void 0===XU?void 0:XU.offsetHeight)&&void 0!==UU?UU:0}px`
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L138-L140` → after: `L1439-L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1439-L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1439-L1450) · [Before (L138-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L138-L140)

```diff
-         section3: {
-           gameCount: 8,
-           columnCount: 4
+         HU = UU => {
+           const XU = oU.current,
+             zU = YU.current.get(UU);
+           if (void 0 === zU) return;
+           const cU = document.activeElement,
+             yU = rU.current,
+             QU = null === yU ? null : zU.querySelector(`[data-lobby-manage-row="${CSS.escape(yU.name)}"]`);
+           iU(), cU instanceof HTMLElement && null !== QU && void 0 !== QU && QU.contains(cU) ? cU.scrollIntoView({
+             block: "center"
+           }) : null === zU.previousElementSibling ? XU.scrollTop = 0 : zU.scrollIntoView({
+             block: "start"
+           }), BU.current = XU.scrollTop
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L142-L144` → after: `L1452-L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1452-L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1452-L1456) · [Before (L142-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L142-L144)

```diff
-         section4: {
-           gameCount: 6,
-           columnCount: 3
+         MU = UU => {
+           (0, yU.reportAnalyticsClick)({
+             id: "lobby_manage.page",
+             value: UU
+           }), fU(UU), HU(UU)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L146-L148` → after: `L1458-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1458-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1458-L1467) · [Before (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L146-L148)

```diff
-         section5: {
-           gameCount: 3,
-           columnCount: 1
+         vU = () => {
+           var UU, XU;
+           const zU = oU.current,
+             cU = zU.getBoundingClientRect().top + (null !== (UU = null === (XU = EU.current) || void 0 === XU ? void 0 : XU.offsetHeight) && void 0 !== UU ? UU : 0),
+             yU = QU.map((UU => {
+               var XU, zU;
+               return (null !== (XU = null === (zU = YU.current.get(UU)) || void 0 === zU ? void 0 : zU.getBoundingClientRect().top) && void 0 !== XU ? XU : 1 / 0) - cU
+             })),
+             AU = !OU && zU.scrollTop + zU.clientHeight >= zU.scrollHeight - 1;
+           RU(QU[(0, FU.g)(yU, AU)])
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L150-L152` → after: `L1469-L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1469-L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1469-L1490) · [Before (L150-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L150-L152)

```diff
-         section6: {
-           gameCount: 8,
-           columnCount: 4
+         VU = () => {
+           null !== GU.current && (fU(null), vU())
+         };
+       (0, cU.useLayoutEffect)((() => {
+         null !== AU && QU.includes(AU.page) && MU(AU.page)
+       }), [null === AU || void 0 === AU ? void 0 : AU.seq]), (0, cU.useLayoutEffect)((() => {
+         null === GU.current || QU.includes(GU.current) || VU()
+       }));
+       const {
+         onFocused: sU
+       } = UU, nU = (0, cU.useCallback)((UU => {
+         null !== GU.current && HU(GU.current), sU(UU)
+       }), [sU]);
+       (0, cU.useLayoutEffect)((() => {
+         const UU = GU.current;
+         null !== UU && (!OU || QU.indexOf(eU[CU - 1]) < QU.indexOf(UU)) && HU(UU)
+ ... (6 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L155` → after: `L1760-L1811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1760-L1811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1760-L1811) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L155)

```diff
-     var eM = iM(1130);
+       return (0, EU.jsxs)("div", {
+         className: "PlayerNameField",
+         onKeyDown: UU => {
+           UU.target === NU.current && "Escape" !== UU.key && UU.stopPropagation()
+         },
+         children: [(0, EU.jsxs)("div", {
+           className: QU()("AddFriendBodyOverlay", `AddFriendBodyOverlay${aU}`),
+           children: ["Loading" === aU && (0, EU.jsx)(oU.b, {}), "Success" === aU && (0, EU.jsx)(DU.d, {
+             name: "check"
+           }), "Error" === aU && gU]
+         }), (0, EU.jsxs)("div", {
+           className: "PlayerSearch",
+           children: [(0, EU.jsx)(AU.e, {
+             className: "PlayerSearchInput",
+             domRef: NU,
+             maxLength: 32,
+ ... (36 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L157-L158` → after: `L1813-L1817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1813-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1813-L1817) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L157-L158)

```diff
-     function bM() {
-       var MM;
+     function YU(UU) {
+       let {
+         visibility: XU,
+         onPick: zU
+       } = UU;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L161-L182` → after: `L1820-L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1820-L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1820-L1911) · [Before (L161-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L161-L182)

```diff
-       } = (0, nM.A)(), iM = (0, jM.D)(), OM = (0, eM.i)(), mM = (0, LM.c)({
-         refresh: !0
-       }), HM = iM.customGamePlace;
-       if (!(0, aM.j)(HM)) return (0, JM.jsx)(zM.NavigatePreserveSearch, {
-         to: "/"
-       });
-       const hM = PM.e[HM],
-         dM = aM.d[HM],
-         yM = null !== (MM = null === mM || void 0 === mM ? void 0 : mM[HM]) && void 0 !== MM ? MM : null,
-         lM = [];
-       for (let SM = 0; SM < dM.length; SM++) {
-         var bM;
-         const MM = GM[SM];
-         if (!MM) continue;
-         const iM = dM[SM];
-         lM.push({
- ... (6 more removed lines; see GitHub link above)
+       } = (0, AU.I)(), YU = (0, cU.useRef)([]);
+       return (0, oU.jsx)("div", {
+         className: "WorldSocialTiles",
+         role: "group",
+         "aria-label": yU("worldSocial:whoCanJoin"),
+         children: EU.map(((UU, cU) => {
+           const AU = UU === XU;
+           return (0, oU.jsxs)("button", {
+             ref: UU => {
+               YU.current[cU] = UU
+             },
+             type: "button",
+             className: QU()("WorldSocialTile", {
+               WorldSocialTileSelected: AU
+             }),
+             "aria-pressed": AU,
+ ... (76 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L184` → after: `L1913-L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1913-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1913-L1951) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L184)

```diff
-       }
+       })
+     }
+   },
+   37443: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => pU
+     });
+     var cU = zU(61),
+       yU = zU(1193),
+       QU = zU(1936),
+       AU = zU(97),
+       FU = zU(27),
+       oU = zU(1521),
+       DU = zU(2903),
+       EU = zU(34767),
+       YU = zU(1494),
+ ... (23 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L186-L190` → after: `L1953-L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1953-L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1953-L1964) · [Before (L186-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L186-L190)

```diff
-         className: "CustomGamePlaceContainer AnimFadeIn",
-         children: [(0, JM.jsx)("div", {
-           className: "BackgroundImage",
-           style: {
-             backgroundImage: `url(/textures/games/${HM}/${hM.largePicture}.png)`
+         className: "WorldSocialLinkRow",
+         children: [!tU && (0, IU.jsx)("span", {
+           className: "WorldSocialCodeLabel",
+           children: pU("worldSocial:worldCode")
+         }), (0, IU.jsx)("input", {
+           ref: BU,
+           className: "WorldSocialLink",
+           readOnly: !0,
+           value: null !== ZU && void 0 !== ZU ? ZU : "",
+           "aria-label": pU(tU ? "worldSocial:worldLink" : "worldSocial:worldCode"),
+           onFocus: UU => {
+             UU.currentTarget.select()
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/238.js` (Changed code · before: `L192-L211` → after: `L1966-L1988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94R1966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3b7a10ac08745df4a7cfb0bc44ce15577100992b9be297b582389f4399187d94) · [After (L1966-L1988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/238.js#L1966-L1988) · [Before (L192-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/238.js#L192-L211)

```diff
-         }), (0, JM.jsx)("h1", {
-           className: "VisuallyHidden",
-           children: rM(hM.title)
-         }), (0, JM.jsx)("div", {
-           className: "CustomGamePlaceHeaderContainer",
-           children: (0, JM.jsx)(QM.c, {
-             onClick: () => (0, zM.navigatePreserveSearch)("/"),
-             children: rM("homePage:backToGames")
-           })
-         }), !OM && (0, JM.jsx)(UM, {
-           categories: lM
-         }), OM && (0, JM.jsx)("div", {
-           className: SM()("CustomGamePlaceMosaic", "CustomGamePlaceMosaicPortrait"),
-           children: lM.map((MM => (0, JM.jsx)(EM, {
-             category: MM.category,
-             title: MM.title,
- ... (4 more removed lines; see GitHub link above)
+         }), (0, IU.jsxs)(YU.f, {
+           className: "WorldSocialCopy",
+           disabled: null === ZU,
+           onClick: () => {
+             null !== ZU && (0, DU.e)(ZU, {
+               useShareSheet: RU,
+               onOutcome: UU => {
+                 if ((0, oU.reportAnalyticsClick)({
+                     id: "world_social.copy_link",
+                     value: "copied" !== UU || tU ? UU : "code"
+                   }), "copied" === UU) GU();
+                 else if ("failed" === UU) {
+                   var XU;
+                   null === (XU = BU.current) || void 0 === XU || XU.focus(), QU.f.showMessage({
+                     translationKey: "partyBar:copyFailed"
+                   })
+ ... (7 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/239.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/239.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034)

#### 1. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L2)

```diff
- export const ids = [239, 601];
+ export const ids = [239];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L4-L6` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L9) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L4-L6)

```diff
-   43954: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       CharacterCustomisationUI: () => jr
+   37604: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => WU,
+       d: () => RU,
+       h: () => PU,
+       k: () => pU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L8-L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L8-L11)

```diff
-     var OM = iM(44),
-       SM = iM(2798),
-       jM = iM(1142),
-       aM = iM(1116),
+     var cU = zU(1106),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L13-L22` → after: `L13-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L13-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L13-L21) · [Before (L13-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L13-L22)

```diff
-       nM = iM(1242),
-       QM = iM(1188),
-       zM = iM(2362),
-       LM = iM(1645),
-       mM = iM(2762);
-     const HM = nM.u.filter((MM => !LM.i.includes(MM)));
- 
-     function hM(MM, rM) {
-       return HM.includes(MM) && "string" === typeof rM && (0, mM.f)(MM, rM)
-     }
+       QU = zU(61),
+       AU = zU(73),
+       FU = zU(1427),
+       oU = zU(1494),
+       DU = zU(1420),
+       EU = zU(1294),
+       YU = zU(1193),
+       NU = zU(37612),
+       IU = zU(1305);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L25-L34` → after: `L24-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L24-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L24-L27) · [Before (L25-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L25-L34)

```diff
-       const rM = {};
-       for (const iM of HM) {
-         const OM = MM[iM];
-         void 0 !== OM && hM(iM, OM) && (rM[iM] = OM)
-       }
-       return rM
-     }
- 
-     function dM(MM) {
-       return 0 === Object.keys(MM).length
+       const [XU, zU] = (0, QU.useState)((() => (0, NU.l)(UU)));
+       return (0, QU.useEffect)((() => (zU((0, NU.l)(UU)), (0, NU.L)((() => {
+         zU((0, NU.l)(UU))
+       })))), [UU]), XU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L38-L69` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L31) · [Before (L38-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L38-L69)

```diff
-       return Object.entries(MM).every((MM => {
-         let [iM, OM] = MM;
-         return rM[iM] === OM
-       }))
-     }
-     var lM = iM(2367),
-       EM = iM(3479),
-       UM = iM(2084),
-       GM = iM(1520),
-       CM = iM(2397),
-       eM = iM(19),
-       bM = iM(2919),
-       wM = iM(1573),
-       tM = iM(1144),
-       gM = iM(1963);
-     class uM {
- ... (16 more removed lines; see GitHub link above)
+       "function" === typeof UU ? UU(XU) : UU && (UU.current = XU)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L158-L161` → after: `L36-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L36-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L36-L38) · [Before (L158-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L158-L161)

```diff
-         wornOutfit: rM,
-         onApply: iM,
-         onOverwrite: SM,
-         onDelete: aM
+         tutorial: XU,
+         step: zU,
+         enabled: cU = !0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L163-L249` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L40-L41) · [Before (L163-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L163-L249)

```diff
-       const {
-         t: nM
-       } = (0, QM.A)(), {
-         accountId: zM,
-         data: LM
-       } = (0, bM.g)(pM, !1), {
-         userContext: mM
-       } = (0, jM.b)();
-       async function HM(MM, rM) {
-         const iM = await BM.NotificationProvider.showPromptPopup({
-             title: "homePage:deleteOutfitConfirm",
-             confirmText: "general:delete",
-             cancelText: "general:cancel",
-             destructive: !0
-           }).getResult(),
-           {
- ... (71 more removed lines; see GitHub link above)
+       const yU = pU(XU);
+       return cU && yU === zU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L255-L256` → after: `L44-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L44-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L44-L47) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L255-L256)

```diff
-     function VM(MM, rM, iM) {
-       return null !== MM && !(0, qM.i)(TM.c, rM, iM, MM.collected, MM.ownedPacks)
+     function gU(UU, XU) {
+       const zU = (0, NU.p)(UU),
+         cU = zU.indexOf(XU);
+       return !zU.slice(cU + 1).some((XU => (0, NU.z)(UU, XU)))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L259` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L50) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L259)

```diff
-     function cM(MM) {
+     function kU(UU, XU, zU, cU) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L261-L262` → after: `L52-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L52-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L52-L55) · [Before (L261-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L261-L262)

```diff
-         locked: rM,
-         children: iM
+         tutorial: yU,
+         step: QU,
+         waitForClick: AU = !1,
+         onPrevious: FU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L264-L266` → after: `L57-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L57-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L57-L65) · [Before (L264-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L264-L266)

```diff
-       return rM ? (0, XM.jsx)(Mr, {
-         children: iM
-       }) : iM
+       const oU = XU && (0, NU.w)(yU, QU),
+         DU = XU && !gU(yU, QU),
+         YU = AU ? cU : zU;
+       let IU = null;
+       oU ? IU = () => {
+         null === FU || void 0 === FU || FU(), (0, NU.t)(yU, QU)
+       } : DU && (IU = () => {
+         (0, NU.j)(yU)
+       }), (0, EU.t)("popup", null !== YU && void 0 !== YU ? YU : zU, IU, XU && null !== YU, null, oU ? void 0 : "controller:menusSkipTutorial")
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L272` → after: `L70-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L70-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L70-L74) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L272)

```diff
-         children: iM
+         tutorial: XU,
+         step: zU,
+         text: cU,
+         waitForClick: yU = !1,
+         onPrevious: QU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L276-L280` → after: `L78-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L78-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L78-L81) · [Before (L276-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L276-L280)

```diff
-       } = (0, QM.A)(), {
-         userContext: SM
-       } = (0, jM.b)(), aM = null !== (rM = SM.dailyDrop) && void 0 !== rM && rM.hidden ? OM("dailyDrop:lockedFromHidden") : OM("dailyDrop:lockedFrom");
-       return (0, XM.jsx)(vM.i, {
-         tooltipInner: (0, XM.jsx)(XM.Fragment, {
+       } = (0, YU.I)(), FU = gU(XU, zU);
+       return (0, IU.jsxs)(IU.Fragment, {
+         children: [(0, IU.jsx)("div", {
+           className: "TutorialStepText",
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L282-L283` → after: `L83-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L83-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L83-L105) · [Before (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L282-L283)

```diff
-         }),
-         children: iM
+         }), (0, IU.jsxs)("div", {
+           className: "TutorialStepButtons",
+           children: [(0, NU.w)(XU, zU) && (0, IU.jsx)(oU.j, {
+             className: "TutorialStepButton",
+             onClick: () => {
+               null === QU || void 0 === QU || QU(), (0, NU.t)(XU, zU)
+             },
+             children: AU("tutorial:back")
+           }), !yU && (0, IU.jsx)(oU.f, {
+             className: "TutorialStepButton",
+             onClick: () => {
+               (0, NU.d)(zU)
+             },
+             padDefaultFocus: !0,
+             children: AU(FU ? "tutorial:done" : "tutorial:next")
+           }), !FU && (0, IU.jsx)(oU.j, {
+ ... (7 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L286-L296` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L108) · [Before (L286-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L286-L296)

```diff
- 
-     function rr(MM, rM, iM) {
-       return (0, zM.n)(MM, rM).purchasable && !(0, kM.z)(MM, rM, iM)
-     }
- 
-     function ir(MM, rM) {
-       return Object.entries(MM).some((MM => {
-         let [iM, OM] = MM;
-         return rr(iM, OM, rM)
-       }))
-     }
+     const BU = 6;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L301-L304` → after: `L112-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L112-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L112-L113) · [Before (L301-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L301-L304)

```diff
-         pack: iM,
-         ownedPacks: OM,
-         showStoreLink: SM = !1,
-         children: jM
+         rect: XU,
+         margin: zU
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L306-L329` → after: `L115-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L115-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L115-L152) · [Before (L306-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L306-L329)

```diff
-       const {
-         t: aM
-       } = (0, QM.A)(), nM = DM.d[iM], zM = nM.purchasable && !OM.includes(iM) && DM.w.includes(iM), LM = ZM.k[iM];
-       return (0, XM.jsxs)("div", {
-         className: PM()("CosmeticPackGroup", {
-           CosmeticPackGroupLocked: zM
-         }),
-         children: [LM && (0, XM.jsx)(LM, {}), (0, XM.jsxs)("div", {
-           className: "CosmeticPackGroupLabel",
-           children: [(0, XM.jsx)("span", {
-             className: "CosmeticPackGroupLabelName",
-             children: null !== (rM = nM.displayName) && void 0 !== rM ? rM : iM
-           }), (zM || SM) && (0, XM.jsxs)(GM.C, {
-             onClick: () => {
-               zM ? (0, ZM.g)(iM) : (0, CM.n)({
-                 mode: "self",
- ... (8 more removed lines; see GitHub link above)
+       const cU = Math.max(0, XU.top - zU),
+         yU = XU.bottom + zU,
+         QU = Math.max(0, XU.left - zU),
+         AU = XU.right + zU;
+       return (0, IU.jsxs)(IU.Fragment, {
+         children: [(0, IU.jsx)("div", {
+           className: "TutorialSpotlightBackdrop",
+           style: {
+             top: 0,
+             left: 0,
+             right: 0,
+             height: cU
+           }
+         }), (0, IU.jsx)("div", {
+           className: "TutorialSpotlightBackdrop",
+           style: {
+ ... (22 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L335-L340` → after: `L158-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L158-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L158-L164) · [Before (L335-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L335-L340)

```diff
-         equippedEmoteIds: rM,
-         ownedPacks: iM,
-         canBuy: OM,
-         onUpdateLoadout: SM,
-         onEmoteSelected: jM,
-         onEquipPreviewSkin: aM
+         target: XU,
+         placement: zU,
+         boxRef: cU,
+         className: oU,
+         spotlight: EU = !0,
+         spotlightMargin: YU = BU,
+         children: NU
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L343-L365` → after: `L167-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L167-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L167-L228) · [Before (L343-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L343-L365)

```diff
-         t: LM
-       } = (0, QM.A)(), mM = new Set(rM), HM = new Map, hM = Object.keys(zM.e.emote).sort(((MM, rM) => {
-         var iM, OM, SM, jM;
-         return (null !== (iM = null === (OM = (0, zM.m)("emote", MM)) || void 0 === OM ? void 0 : OM.clientIdx) && void 0 !== iM ? iM : 0) - (null !== (SM = null === (jM = (0, zM.m)("emote", rM)) || void 0 === jM ? void 0 : jM.clientIdx) && void 0 !== SM ? SM : 0)
-       })).filter((MM => {
-         const rM = (0, zM.n)("emote", MM),
-           SM = (0, kM.z)("emote", MM, iM);
-         return !(rM.purchasable && !SM && !OM) && (rM.clientSelectable || SM)
-       }));
-       for (const PM of hM) {
-         const MM = (0, zM.m)("emote", PM).cosmeticPack;
-         HM.has(MM) || HM.set(MM, []), HM.get(MM).push(PM)
-       }
-       const JM = Array.from(HM.keys());
-       return (0, XM.jsxs)("div", {
-         className: "CharCustomisPartSelectorWrapper",
- ... (7 more removed lines; see GitHub link above)
+         getArrowProps: pU,
+         getTooltipProps: aU,
+         setTooltipRef: tU,
+         setTriggerRef: gU,
+         update: kU
+       } = (0, FU.e)({
+         placement: zU,
+         trigger: null,
+         visible: !0,
+         interactive: !0,
+         closeOnOutsideClick: !1,
+         offset: [0, YU]
+       });
+       (0, QU.useLayoutEffect)((() => {
+         gU(XU)
+       }), [XU, gU]);
+ ... (46 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L371-L441` → after: `L231-L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L231-L232) · [Before (L371-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L371-L441)

```diff
-         }), JM.map((MM => {
-           const OM = HM.get(MM);
-           return (0, XM.jsx)(Or, {
-             pack: MM,
-             ownedPacks: iM,
-             children: (0, XM.jsx)("div", {
-               className: "CosmeticPackGroupItems",
-               children: OM.map((MM => {
-                 var OM;
-                 const aM = rM.indexOf(MM),
-                   QM = -1 !== aM,
-                   zM = rM.length >= nM.o,
-                   HM = rr("emote", MM, iM),
-                   hM = HM || !QM && zM,
-                   JM = (0, lM.e)(MM);
-                 return (0, XM.jsxs)("div", {
- ... (55 more removed lines; see GitHub link above)
+         })]
+       }), (0, DU.e)())
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L443` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L234) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L443)

```diff
-     const jr = (0, OM.memo)((function(MM) {
+     const PU = (0, QU.forwardRef)((function(UU, XU) {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L445` → after: `L236-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L236-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L236-L238) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L445)

```diff
-         selectedTab: rM
+         placement: zU = "right",
+         children: cU,
+         ...yU
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L447-L468` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L240) · [Before (L447-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L447-L468)

```diff
-       const iM = "characters" === rM ? "skin" : rM,
-         {
-           t: aM
-         } = (0, QM.A)(),
-         {
-           userContext: HM,
-           isUserContextUpdating: hM
-         } = (0, jM.b)(),
-         dM = (0, SM.b)(),
-         {
-           gameState: lM
-         } = (0, eM.m)(["gameState"]),
-         [bM, wM] = (0, OM.useState)({}),
-         [tM, gM] = (0, OM.useState)({}),
-         [uM, RM] = (0, OM.useState)(null),
-         {
- ... (6 more removed lines; see GitHub link above)
+       const AU = tU(yU),
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L472-L478` → after: `L261-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L261-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L261-L292) · [Before (L472-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L472-L478)

```diff
-       function Mr() {
-         null !== qM.current && (clearTimeout(qM.current), qM.current = null);
-         const MM = TM.current;
-         null !== MM && (TM.current = null, (0, KM.d)(HM, [
-           ["emote", MM]
-         ]))
-       }
+     function WU(UU) {
+       const XU = tU(UU),
+         zU = (0, QU.useRef)(null);
+       return kU(UU, XU, zU, null), XU ? (0, AU.createPortal)((0, IU.jsx)("div", {
+         className: "TutorialCentreBackdrop",
+         children: (0, IU.jsx)("div", {
+           ref: zU,
+           className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
+           children: (0, IU.jsx)(GU, {
+             ...UU
+           })
+         })
+       }), (0, DU.e)()) : null
+     }
+   },
+   37334: (UU, XU, zU) => {
+ ... (16 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L480-L497` → after: `L294-L300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L294-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L294-L300) · [Before (L480-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L480-L497)

```diff
-       function jr(MM, rM, iM) {
-         var OM, SM, jM;
-         vM.current = {
-           ...vM.current,
-           [MM]: rM
-         }, dM(), iM && ((0, KM.d)(HM, [
-           [MM, rM]
-         ]), RM(null));
-         const aM = (0, zM.m)(MM, rM);
-         if (null !== aM && void 0 !== aM && aM.colourGroup && null !== (OM = DM.d[aM.cosmeticPack].colourGroups) && void 0 !== OM && null !== (SM = OM[aM.colourGroup]) && void 0 !== SM && SM.showSwatchSelector) {
-           const iM = (0, zM.i)(rM);
-           iM && gM((rM => ({
-             ...rM,
-             [`${aM.cosmeticPack}_${MM}_${aM.colourGroup}`]: parseInt(iM[1])
-           })))
-         }
- ... (2 more removed lines; see GitHub link above)
+     function FU() {
+       return [...AU.values()].sort(((UU, XU) => {
+         var zU, cU;
+         return (null !== (zU = UU.order) && void 0 !== zU ? zU : 0) - (null !== (cU = XU.order) && void 0 !== cU ? cU : 0)
+       }))
+     }
+     let oU = null;
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L499-L505` → after: `L302-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L302-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L302-L312) · [Before (L499-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L499-L505)

```diff
-       function ar(MM) {
-         wM((rM => {
-           const iM = {
-             ...rM
-           };
-           return delete iM[MM], iM
-         }))
+     function DU(UU) {
+       oU = UU
+     }
+     let EU = !1;
+ 
+     function YU(UU) {
+       EU = !0;
+       try {
+         UU.onClick()
+       } finally {
+         EU = !1
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L508-L563` → after: `L317-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L317-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L317-L350) · [Before (L508-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L508-L563)

```diff
-       function Pr(MM, rM) {
-         let {
-           undoable: iM
-         } = rM;
-         Object.keys(bM).length > 0 && wM({});
-         const OM = Object.entries(MM).filter((MM => {
-           let [rM, iM] = MM;
-           return vM.current[rM] !== iM && !rr(rM, iM, nr) && !VM(Qr, rM, iM)
-         }));
-         iM ? OM.length > 0 && RM({
-           kind: "worn",
-           outfit: JM(vM.current)
-         }) : RM(null);
-         for (const [SM, jM] of OM) jr(SM, jM, !1);
-         OM.length > 0 && (0, KM.d)(HM, OM)
-       }(0, UM.c)("cosmeticsUpdated", (MM => {
- ... (40 more removed lines; see GitHub link above)
+     function NU() {
+       return EU
+     }
+ 
+     function IU() {
+       return FU().filter((UU => UU.panel && !UU.disabled))
+     }
+ 
+     function pU(UU) {
+       const XU = IU(),
+         zU = XU.findIndex((UU => UU.id === oU));
+       return !(zU < 0 || XU.length < 2) && (YU(XU[(zU + UU + XU.length) % XU.length]), !0)
+     }
+ 
+     function aU() {
+       return null !== oU && IU().length > 1
+ ... (18 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L565-L607` → after: `L352-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L352-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L352-L383) · [Before (L565-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L565-L607)

```diff
-       const hr = function(MM, rM) {
-           const iM = new Set,
-             OM = new Set;
-           for (const [SM, jM] of Object.entries(zM.e[MM])) {
-             if (void 0 === jM.colourGroup) continue;
-             const aM = `${jM.cosmeticPack}_${jM.colourGroup}`;
-             (rr(MM, SM, rM) ? OM : iM).add(aM)
-           }
-           return new Set([...iM].filter((MM => OM.has(MM))))
-         }(iM, nr),
-         Jr = new Map;
-       for (const [OM, SM] of mr) {
-         const MM = [],
-           rM = new Map;
-         for (const OM of SM) {
-           var dr, yr;
- ... (27 more removed lines; see GitHub link above)
+     }
+   },
+   37325: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => FU,
+       h: () => kU,
+       j: () => tU,
+       l: () => gU,
+       n: () => NU,
+       o: () => DU,
+       r: () => aU,
+       t: () => IU,
+       u: () => EU
+     });
+     var cU = zU(27),
+       yU = zU(31),
+ ... (16 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L609-L615` → after: `L385-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L385-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L385-L394) · [Before (L609-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L609-L615)

```diff
-       const lr = Array.from(mr.keys()),
-         Er = new Map;
-       for (const [OM, SM] of Object.entries(LM.d)) {
-         const MM = DM.d[SM.cosmeticPack],
-           rM = !ir(SM.cosmetics, nr),
-           iM = DM.s.some((MM => (0, DM.h)(MM) === OM));
-         (MM.clientSelectable || iM || rM) && ((!MM.purchasable || rM || zr) && (Er.has(SM.cosmeticPack) || Er.set(SM.cosmeticPack, []), Er.get(SM.cosmeticPack).push([OM, SM])))
+     }
+     let YU = null;
+ 
+     function NU() {
+       return YU
+     }
+ 
+     function IU(UU) {
+       return YU = UU, () => {
+         YU === UU && (YU = null)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L617-L866` → after: `L396-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L396-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L396-L403) · [Before (L617-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L617-L866)

```diff
-       const Ur = Array.from(Er.keys());
-       return (0, XM.jsxs)("div", {
-         className: "CharCustomisationBody",
-         children: [("cape" === iM || "nameColour" === iM) && !HM.playerHasRank("super") && (0, XM.jsxs)("div", {
-           className: "CharCustomisationBodyHeader",
-           children: [(0, XM.jsx)(YM.b, {
-             name: "bolt"
-           }), aM("homePage:unlockWithSuperRank"), zr && (0, XM.jsx)(GM.p, {
-             onClick: () => {
-               (0, CM.n)({
-                 mode: "self",
-                 source: "characterCustomisation",
-                 openItem: "superRank"
-               })
-             },
-             children: aM("general:getItNow")
- ... (234 more removed lines; see GitHub link above)
+     }
+     let pU = !1;
+ 
+     function aU() {
+       const UU = cU.e.get("openInGameMenuName");
+       "clientGame" !== UU && (pU = "inventory" === UU), (0, AU.r)() || (0, AU.l)(), (0, QU.u)(QU.c), cU.e.set({
+         openInGameMenuName: "clientGame",
+         openEverythingMenuName: null
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L868-L1026` → after: `L405-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L405-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L405-L423) · [Before (L868-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L868-L1026)

```diff
-     }))
-   },
-   43956: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       CharacterPreview: () => LM
-     });
-     var OM = iM(44),
-       SM = iM(3047),
-       jM = iM(1242),
-       aM = iM(2762),
-       PM = iM(35051),
-       nM = iM(3997),
-       QM = iM(1303);
-     const zM = .6 * Math.PI,
-       LM = (0, OM.memo)((0, OM.forwardRef)((function(MM, rM) {
-         let {
- ... (143 more removed lines; see GitHub link above)
+     }
+ 
+     function tU() {
+       GU(!1)
+     }
+ 
+     function gU() {
+       GU(pU)
+     }
+ 
+     function kU() {
+       pU && GU(!1)
+     }
+ 
+     function GU(UU) {
+       "clientGame" === cU.e.get("openInGameMenuName") && cU.e.set({
+ ... (3 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L1028` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L425) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L1028)

```diff
-   37322: (MM, rM, iM) => {
+   37612: (UU, XU, zU) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L1030` → after: `L427-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L427-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L427-L440) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L1030)

```diff
-       d: () => aM
+       D: () => uU,
+       G: () => fU,
+       I: () => iU,
+       J: () => rU,
+       L: () => HU,
+       b: () => oU,
+       d: () => CU,
+       h: () => FU,
+       j: () => SU,
+       l: () => LU,
+       p: () => RU,
+       t: () => OU,
+       w: () => qU,
+       z: () => dU
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L1032-L1062` → after: `L442-L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L442-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L442-L485) · [Before (L1032-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L1032-L1062)

```diff
-     var OM = iM(2039),
-       SM = iM(1573);
-     const jM = new class {
-       constructor() {
-         this.pending = new Map, this.userContext = null, this.timer = null, this.lastSentAt = -1 / 0, this.watchingVisibility = !1
-       }
-       save(MM, rM) {
-         MM !== this.userContext && this.sendHeld(), this.userContext = MM;
-         for (const [OM, SM] of rM) this.pending.set(OM, SM);
-         if (null !== this.timer) return;
-         const iM = this.lastSentAt + 1100 - Date.now();
-         iM <= 0 ? this.send(MM) : (this.timer = setTimeout((() => {
-           this.sendHeld()
-         }), iM), this.watchingVisibility || (this.watchingVisibility = !0, document.addEventListener("visibilitychange", (() => {
-           "hidden" === document.visibilityState && this.sendHeld()
-         }))))
- ... (15 more removed lines; see GitHub link above)
+     var cU = zU(42);
+     const yU = {
+         codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
+         worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
+       },
+       QU = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
+       AU = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
+       FU = QU.filter((UU => "docsButton" !== UU)),
+       oU = AU.filter((UU => "aiHelperButton" !== UU)),
+       DU = "codeEditorTutorials",
+       EU = {
+         codeBlockIntro: "codeBlockIntroShown",
+         worldCodeIntro: "worldCodeIntroShown"
+       },
+       YU = {
+         welcome: "welcomeComplete",
+ ... (28 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L1064` → after: `L487-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L487-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L487-L509) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L1064)

```diff
-     };
+       return NU
+     }
+ 
+     function ZU(UU) {
+       const XU = BU();
+       XU[UU] || (NU = {
+         ...XU,
+         [UU]: !0
+       }, cU.k.setItem(DU, NU))
+     }
+ 
+     function RU(UU) {
+       return "docsOverview" === UU ? QU : "aiHelperOverview" === UU ? AU : IU ? yU[IU] : []
+     }
+ 
+     function PU(UU) {
+ ... (7 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/239.js` (Changed code · before: `L1067-L1073` → after: `L512-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dccaf687306ae2854e086f9227075910a742c5cbcf70ca5c6903f05bfa007034) · [After (L512-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/239.js#L512-L585) · [Before (L1067-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/239.js#L1067-L1073)

```diff
-       for (const [iM, OM] of rM) MM.setPlayerCosmetics(iM, OM);
-       if (null === OM.gameBridge.latest("connectedGame").websocketUrl) jM.save(MM, rM);
-       else
-         for (const [iM, SM] of rM) OM.gameBridge.send("updateMyCosmetic", {
-           Ii: iM,
-           Ki: SM
-         })
+       if (! function(UU) {
+           return tU ? tU.name === UU : "welcome" === UU
+         }(UU) || !PU(XU) || WU(UU).has(XU)) return !1;
+       if (tU) return !0;
+       const zU = EU[XU];
+       return zU ? !BU()[zU] || aU.has(XU) : !BU()[YU[UU]]
+     }
+ 
+     function LU(UU) {
+       var XU;
+       return null !== (XU = RU(UU).find((XU => dU(UU, XU)))) && void 0 !== XU ? XU : null
+     }
+ 
+     function eU(UU) {
+       var XU;
+       ZU(YU[UU]), (null === (XU = tU) || void 0 === XU ? void 0 : XU.name) === UU && (tU = null)
+ ... (58 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/240.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/240.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L4-L28` → after: `L4-L165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L4-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L4-L165) · [Before (L4-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L4-L28)

```diff
-   37353: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => tM,
-       e: () => gM,
-       h: () => EM
-     });
-     var OM = iM(255),
-       SM = iM(83);
-     const jM = new(iM(37356).b)(new URL(iM.p + iM.u(3), iM.b), {
-       name: "blockIconWorker",
-       type: "module"
-     });
-     var aM = iM(1899),
-       PM = iM(2260);
-     const nM = 1e4,
-       QM = 3e4;
- ... (9 more removed lines; see GitHub link above)
+   37368: UU => {
+     UU.exports = {
+       aliceblue: [240, 248, 255],
+       antiquewhite: [250, 235, 215],
+       aqua: [0, 255, 255],
+       aquamarine: [127, 255, 212],
+       azure: [240, 255, 255],
+       beige: [245, 245, 220],
+       bisque: [255, 228, 196],
+       black: [0, 0, 0],
+       blanchedalmond: [255, 235, 205],
+       blue: [0, 0, 255],
+       blueviolet: [138, 43, 226],
+       brown: [165, 42, 42],
+       burlywood: [222, 184, 135],
+       cadetblue: [95, 158, 160],
+ ... (146 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L30-L39` → after: `L167-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L167-L168) · [Before (L30-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L30-L39)

```diff
-     function EM(MM) {
-       const rM = new Promise(((rM, iM) => {
-         const OM = new Image;
-         OM.crossOrigin = "anonymous", OM.fetchPriority = "high", OM.onload = () => {
-           rM(OM)
-         }, OM.onerror = () => {
-           iM(new Error(`A block icon's texture did not load: ${MM.slice(0,100)}`))
-         }, OM.src = MM
-       }));
-       return (0, PM.d)(rM)
+     function DU(UU, XU, zU) {
+       return Math.min(Math.max(XU, UU), zU)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L43-L46` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L172-L173) · [Before (L43-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L43-L46)

```diff
-       var rM, iM;
-       HM || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${MM}`), HM = !0, null === (rM = zM) || void 0 === rM || rM.terminate(), zM = null, LM = null, yM.clear(), lM.clear();
-       for (const OM of JM.values()) OM(null);
-       JM.clear(), null === (iM = dM) || void 0 === iM || iM()
+       var XU = Math.round(UU).toString(16).toUpperCase();
+       return XU.length < 2 ? "0" + XU : XU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L48-L58` → after: `L175-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L175-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L175-L197) · [Before (L48-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L48-L58)

```diff
- 
-     function GM() {
-       return mM ??= async function() {
-         if ("undefined" === typeof Worker || "undefined" === typeof OffscreenCanvas || "undefined" === typeof createImageBitmap) return;
-         if ("page" === OM.e.ios_icon_worker_v1 && (0, SM.isWebKit)()) return;
-         try {
-           zM = await async function() {
-             return await jM.ready(), jM.start()
-           }()
-         } catch (PM) {
-           return void UM(`did not start (${String(PM)})`)
+     oU.get = function(UU) {
+       var XU, zU;
+       switch (UU.substring(0, 3).toLowerCase()) {
+         case "hsl":
+           XU = oU.get.hsl(UU), zU = "hsl";
+           break;
+         case "hwb":
+           XU = oU.get.hwb(UU), zU = "hwb";
+           break;
+         default:
+           XU = oU.get.rgb(UU), zU = "rgb"
+       }
+       return XU ? {
+         model: zU,
+         value: XU
+       } : null
+ ... (7 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L60-L94` → after: `L199-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L199-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L199-L249) · [Before (L60-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L60-L94)

```diff
-         let MM = () => {};
-         const rM = new Promise((rM => {
-           MM = rM
-         }));
-         zM.onmessage = rM => {
-           let {
-             data: iM
-           } = rM;
-           if ("started" === iM.type) LM = zM, MM();
-           else if ("failed" === iM.type) UM(`failed a draw (${iM.message})`);
-           else {
-             var OM, SM;
-             null === (OM = JM.get(iM.id)) || void 0 === OM || OM(iM.url), JM.delete(iM.id), null === (SM = dM) || void 0 === SM || SM()
-           }
-         }, zM.onerror = rM => {
-           rM.preventDefault(), UM(`stopped (${rM.message||"its script did not load or run"})`), MM()
- ... (19 more removed lines; see GitHub link above)
+         yU && (AU[3] = parseInt(yU, 16) / 255)
+       } else if (XU = UU.match(/^#([a-f0-9]{3,4})$/i)) {
+         for (yU = (XU = XU[1])[3], zU = 0; zU < 3; zU++) AU[zU] = parseInt(XU[zU] + XU[zU], 16);
+         yU && (AU[3] = parseInt(yU + yU, 16) / 255)
+       } else if (XU = UU.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)) {
+         for (zU = 0; zU < 3; zU++) AU[zU] = parseInt(XU[zU + 1], 0);
+         XU[4] && (XU[5] ? AU[3] = .01 * parseFloat(XU[4]) : AU[3] = parseFloat(XU[4]))
+       } else {
+         if (!(XU = UU.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/))) return (XU = UU.match(/^(\w+)$/)) ? "transparent" === XU[1] ? [0, 0, 0, 0] : QU.call(cU, XU[1]) ? ((AU = cU[XU[1]])[3] = 1, AU) :  … [truncated]
+         for (zU = 0; zU < 3; zU++) AU[zU] = Math.round(2.55 * parseFloat(XU[zU + 1]));
+         XU[4] && (XU[5] ? AU[3] = .01 * parseFloat(XU[4]) : AU[3] = parseFloat(XU[4]))
+       }
+       for (zU = 0; zU < 3; zU++) AU[zU] = DU(AU[zU], 0, 255);
+       return AU[3] = DU(AU[3], 0, 1), AU
+     }, oU.get.hsl = function(UU) {
+       if (!UU) return null;
+ ... (35 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L98-L113` → after: `L261-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L261-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L261-L291) · [Before (L98-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L98-L113)

```diff
-       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
-       MM.postMessage(rM, iM)
-     }
- 
-     function bM(MM, rM, iM, OM) {
-       let SM = rM.get(iM);
-       return void 0 === SM && (SM = OM().then((async rM => {
-         let {
-           image: iM,
-           request: OM
-         } = rM;
-         try {
-           const rM = await createImageBitmap(iM);
-           eM(MM, OM(rM), [rM])
-         } catch (SM) {
-           UM(`could not take an image (${String(SM)})`)
+       if (!(this instanceof oU)) return new oU(UU, XU);
+       if (XU && XU in QU && (XU = null), XU && !(XU in yU)) throw new Error("Unknown model: " + XU);
+       let zU, DU;
+       if (null == UU) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
+       else if (UU instanceof oU) this.model = UU.model, this.color = [...UU.color], this.valpha = UU.valpha;
+       else if ("string" === typeof UU) {
+         const XU = cU.get(UU);
+         if (null === XU) throw new Error("Unable to parse color from string: " + UU);
+         this.model = XU.model, DU = yU[this.model].channels, this.color = XU.value.slice(0, DU), this.valpha = "number" === typeof XU.value[DU] ? XU.value[DU] : 1
+       } else if (UU.length > 0) {
+         this.model = XU || "rgb", DU = yU[this.model].channels;
+         const zU = Array.prototype.slice.call(UU, 0, DU);
+         this.color = NU(zU, DU), this.valpha = "number" === typeof UU[DU] ? UU[DU] : 1
+       } else if ("number" === typeof UU) this.model = "rgb", this.color = [UU >> 16 & 255, UU >> 8 & 255, 255 & UU], this.valpha = 1;
+       else {
+         this.valpha = 1;
+ ... (15 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L115-L117` → after: `L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L293) · [Before (L115-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L115-L117)

```diff
-       })), SM.catch((() => {
-         rM.get(iM) === SM && rM.delete(iM)
-       })), rM.set(iM, SM)), SM
+       this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L119-L146` → after: `L295-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L295-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L295-L475) · [Before (L119-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L119-L146)

```diff
-     async function wM(MM, rM) {
-       GM();
-       const iM = LM;
-       if (null === iM) return null;
-       if (await MM(iM), LM !== iM) return null;
-       const OM = ++hM;
-       return new Promise((MM => {
-         JM.set(OM, MM), eM(iM, rM(OM)), CM()
-       }))
-     }
- 
-     function tM(MM, rM, iM) {
-       return wM((rM => Promise.all([MM.top, MM.left, MM.right].map((MM => function(MM, rM) {
-         return bM(MM, yM, rM, (async () => ({
-           image: await EM(rM),
-           request: MM => ({
- ... (12 more removed lines; see GitHub link above)
+     oU.prototype = {
+       toString() {
+         return this.string()
+       },
+       toJSON() {
+         return this[this.model]()
+       },
+       string(UU) {
+         let XU = this.model in cU.to ? this : this.rgb();
+         XU = XU.round("number" === typeof UU ? UU : 1);
+         const zU = 1 === XU.valpha ? XU.color : [...XU.color, this.valpha];
+         return cU.to[XU.model](zU)
+       },
+       percentString(UU) {
+         const XU = this.rgb().round("number" === typeof UU ? UU : 1),
+           zU = 1 === XU.valpha ? XU.color : [...XU.color, this.valpha];
+ ... (165 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L149-L172` → after: `L478-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L478-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L478-L483) · [Before (L149-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L149-L172)

```diff
-     function gM(MM, rM, iM, OM) {
-       return wM((iM => function(MM, rM, iM) {
-         return bM(MM, lM, rM, (async () => {
-           const {
-             texture: MM,
-             ...OM
-           } = await iM();
-           return {
-             image: await EM(MM),
-             request: MM => ({
-               type: "model",
-               name: rM,
-               bitmap: MM,
-               geometry: OM
-             })
-           }
- ... (8 more removed lines; see GitHub link above)
+     function DU(UU) {
+       return function(XU) {
+         return function(UU, XU) {
+           return Number(UU.toFixed(XU))
+         }(XU, UU)
+       }
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L194-L197` → after: `L486-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L486-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L486-L493) · [Before (L194-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L194-L197)

```diff
-     function aM(MM, rM) {
-       const iM = rM > 0 ? rM + 1 : 0,
-         aM = MM * SM - rM / OM.across;
-       return Math.max(0, Math.min(aM, (MM - 2 * iM) / jM.height))
+     function EU(UU, XU, zU) {
+       UU = Array.isArray(UU) ? UU : [UU];
+       for (const cU of UU)(FU[cU] || (FU[cU] = []))[XU] = zU;
+       return UU = UU[0],
+         function(cU) {
+           let yU;
+           return void 0 !== cU ? (zU && (cU = zU(cU)), yU = this[UU](), yU.color[XU] = cU, yU) : (yU = this[UU]().color[XU], zU && (yU = zU(yU)), yU)
+         }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/240.js` (Changed code · before: `L206-L246` → after: `L496-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-5aeaea7664c5d170bcfda3660745f12056ea81f46f6cc08198e6d9485ca7e0a0) · [After (L496-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/240.js#L496-L498) · [Before (L206-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/240.js#L206-L246)

```diff
-     function QM(MM, rM, iM, OM) {
-       const {
-         vertices: SM,
-         uvs: PM,
-         indices: nM,
-         shades: QM
-       } = MM, zM = function(MM, rM) {
-         const iM = aM(MM, rM),
-           OM = jM.width * iM,
-           SM = jM.height * iM;
-         return {
-           left: (MM - OM) / 2,
-           top: (MM - SM) / 2,
-           width: OM,
-           height: SM
-         }
- ... (25 more removed lines; see GitHub link above)
+     function YU(UU) {
+       return function(XU) {
+         return Math.max(0, Math.min(UU, XU))
```
