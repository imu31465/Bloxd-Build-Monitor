# Changed — Bundle Modifications Report (Part 148 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `148 / 153` (**408** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 147](part-147.md) · [Part 149 →](part-149.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1187 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 754. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7250-L7252` → after: `L7250-L7252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7250-L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7250-L7252) · [Before (L7250-L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7250-L7252)

```diff
-                       zB = new YB.h(DB.pitXZPerturbNoiseParams, `${BB}DistPitPerturb${QB}`),
-                       pB = `${BB}PitGen${QB}`,
-                       qB = new JB.b("cavePit", DB.numChunksBetweenPits, !0, !1, pB, 100, OB),
+                       ke = new ye.i(be.pitXZPerturbNoiseParams, `${ee}DistPitPerturb${Me}`),
+                       fe = `${ee}PitGen${Me}`,
+                       Te = new Je.e("cavePit", be.numChunksBetweenPits, !0, !1, fe, 100, ie),
```

#### 755. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7254-L7258` → after: `L7254-L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7254-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7254-L7258) · [Before (L7254-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7254-L7258)

```diff
-                     console.assert(ZB.chunkSearchRadius <= DB.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${ZB.chunkSearchRadius} ${DB.numChunksBetweenPits/2}`);
-                     const NB = new jB.f(DB.pitMinWidth, DB.pitMaxWidth),
-                       RB = new jB.f(DB.pitMinFloorY, DB.pitMaxFloorY),
-                       WB = new jB.f(DB.pitMinHeight, DB.pitMaxHeight),
-                       AB = new YB.h(DB.pitFloorYPerturbNoiseParams, `${BB}yPitPerturb${QB}`);
+                     console.assert(pe.chunkSearchRadius <= be.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${pe.chunkSearchRadius} ${be.numChunksBetweenPits/2}`);
+                     const Xe = new Ue.k(be.pitMinWidth, be.pitMaxWidth),
+                       ze = new Ue.k(be.pitMinFloorY, be.pitMaxFloorY),
+                       Be = new Ue.k(be.pitMinHeight, be.pitMaxHeight),
+                       Ee = new ye.i(be.pitFloorYPerturbNoiseParams, `${ee}yPitPerturb${Me}`);
```

#### 756. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7260-L7261` → after: `L7260-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7260-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7260-L7261) · [Before (L7260-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7260-L7261)

```diff
-                     null !== DB.pitHeightPerturbNoiseParams && (VB = new YB.h(DB.pitHeightPerturbNoiseParams, `${BB}heightPitPerturb${QB}`));
-                     const SB = new YB.h(DB.pitMidpointNoiseParams, `${BB}edgesPitPerturb${QB}`),
+                     null !== be.pitHeightPerturbNoiseParams && (ge = new ye.i(be.pitHeightPerturbNoiseParams, `${ee}heightPitPerturb${Me}`));
+                     const Oe = new ye.i(be.pitMidpointNoiseParams, `${ee}edgesPitPerturb${Me}`),
```

#### 757. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7268` → after: `L7268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7268) · [Before (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7268)

```diff
-                     null !== DB.ceilingParams && (fB = oB++, kB = new jB.f(DB.ceilingParams.minThickness, DB.ceilingParams.maxThickness), MB[fB] = DB.ceilingParams.blockIds), void 0 !== DB.priority && (PB[nB] = DB.priority, null !== UB && (PB[UB] = DB.priority), null !== fB && (P … [truncated]
+                     null !== be.ceilingParams && (te = Ke++, Ze = new Ue.k(be.ceilingParams.minThickness, be.ceilingParams.maxThickness), oe[te] = be.ceilingParams.blockIds), void 0 !== be.priority && (Re[de] = be.priority, null !== We && (Re[We] = be.priority), null !== te && (R … [truncated]
```

#### 758. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7331)

```diff
-                     PB = new YB.h(MB.ravineXZPerturbNoiseParams, `${BB}DistRavPerturb${oB}`);
+                     Re = new ye.i(oe.ravineXZPerturbNoiseParams, `${ee}DistRavPerturb${Ke}`);
```

#### 759. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7334-L7336` → after: `L7334-L7336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7334-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7334-L7336) · [Before (L7334-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7334-L7336)

```diff
-                   const lB = new YB.h(MB.ravineYPerturbNoiseParams, `${BB}yRavinePerturb${oB}`),
-                     pB = `${BB}RavineGen${oB}`,
-                     qB = new JB.b("caveRav", MB.numChunksBetweenRavines, !0, !1, pB, 100, OB),
+                   const qe = new ye.i(oe.ravineYPerturbNoiseParams, `${ee}yRavinePerturb${Ke}`),
+                     fe = `${ee}RavineGen${Ke}`,
+                     Te = new Je.e("caveRav", oe.numChunksBetweenRavines, !0, !1, fe, 100, ie),
```

#### 760. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7338-L7343` → after: `L7338-L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7338-L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7338-L7343) · [Before (L7338-L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7338-L7343)

```diff
-                   console.assert(ZB.chunkSearchRadius <= MB.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${ZB.chunkSearchRadius} ${MB.numChunksBetweenRavines/2}`);
-                   const NB = new jB.f(MB.ravineMinWidth, MB.ravineMaxWidth),
-                     RB = new jB.f(MB.ravineMinLength, MB.ravineMaxLength),
-                     WB = new jB.f(MB.ravineMinFloorY, MB.ravineMaxFloorY, !0),
-                     AB = new jB.f(MB.ravineMinHeight, MB.ravineMaxHeight),
-                     VB = new jB.j(-1, 1);
+                   console.assert(pe.chunkSearchRadius <= oe.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${pe.chunkSearchRadius} ${oe.numChunksBetweenRavines/2}`);
+                   const Xe = new Ue.k(oe.ravineMinWidth, oe.ravineMaxWidth),
+                     ze = new Ue.k(oe.ravineMinLength, oe.ravineMaxLength),
+                     Be = new Ue.k(oe.ravineMinFloorY, oe.ravineMaxFloorY, !0),
+                     Ee = new Ue.k(oe.ravineMinHeight, oe.ravineMaxHeight),
+                     ge = new Ue.l(-1, 1);
```

#### 761. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7385` → after: `L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7385) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7385)

```diff
-                     PB = new YB.h(MB.sphereXZPerturbNoiseParams, `${BB}DistSpherePerturb${oB}`);
+                     Re = new ye.i(oe.sphereXZPerturbNoiseParams, `${ee}DistSpherePerturb${Ke}`);
```

#### 762. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7388-L7389` → after: `L7388-L7389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7388-L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7388-L7389) · [Before (L7388-L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7388-L7389)

```diff
-                   const lB = `${BB}SphereGen${oB}`,
-                     pB = new JB.b("caveSph", MB.numChunksBetweenSpheres, !0, !1, lB, 100, OB),
+                   const qe = `${ee}SphereGen${Ke}`,
+                     fe = new Je.e("caveSph", oe.numChunksBetweenSpheres, !0, !1, qe, 100, ie),
```

#### 763. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7391-L7393` → after: `L7391-L7393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7391-L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7391-L7393) · [Before (L7391-L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7391-L7393)

```diff
-                   console.assert(qB.chunkSearchRadius <= MB.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${qB.chunkSearchRadius} ${MB.numChunksBetweenSpheres/2}`);
-                   const ZB = new jB.f(MB.sphereMinRadius, MB.sphereMaxRadius, !0),
-                     NB = new jB.f(MB.sphereMinCentreY, MB.sphereMaxCentreY);
+                   console.assert(Te.chunkSearchRadius <= oe.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${Te.chunkSearchRadius} ${oe.numChunksBetweenSpheres/2}`);
+                   const pe = new Ue.k(oe.sphereMinRadius, oe.sphereMaxRadius, !0),
+                     Xe = new Ue.k(oe.sphereMinCentreY, oe.sphereMaxCentreY);
```

#### 764. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7427-L7428` → after: `L7427-L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7427-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7427-L7428) · [Before (L7427-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7427-L7428)

```diff
-             if (!(0, DB.Q)(GB)) return GB;
-             const YB = [(0, DB.C)(BB), (0, DB.C)(OB)],
+             if (!(0, be.P)(He)) return He;
+             const ye = [(0, be.B)(ee), (0, be.B)(ie)],
```

#### 765. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7446` → after: `L7446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7446) · [Before (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7446)

```diff
-                   JB = new jB.d(`pit${oB}|${yB}|${DB}${this.seed}`),
+                   Je = new Ue.i(`pit${Ke}|${Fe}|${be}${this.seed}`),
```

#### 766. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7456` → after: `L7456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7456) · [Before (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7456)

```diff
-                   WB = null !== (GB = null === (YB = QB.pitCeilingThicknessDistribution) || void 0 === YB ? void 0 : YB.sample(JB)) && void 0 !== GB ? GB : 0;
+                   Be = null !== (He = null === (ye = Me.pitCeilingThicknessDistribution) || void 0 === ye ? void 0 : ye.sample(Je)) && void 0 !== He ? He : 0;
```

#### 767. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7489` → after: `L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7489) · [Before (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7489)

```diff
-                   yB = new jB.d(`rav${QB}|${oB}|${GB}${this.seed}`),
+                   Fe = new Ue.i(`rav${Me}|${Ke}|${He}${this.seed}`),
```

#### 768. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7495` → after: `L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7495) · [Before (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7495)

```diff
-                 (0, YB.E)(lB);
+                 (0, ye.B)(qe);
```

#### 769. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7526` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7526) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7526)

```diff
-                   oB = new jB.d(`sph${DB}|${QB}|${GB}${this.seed}`),
+                   Ke = new Ue.i(`sph${be}|${Me}|${He}${this.seed}`),
```

#### 770. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7546` → after: `L7546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7546) · [Before (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7546)

```diff
-       40719: (BB, OB, GB) => {
+       40794: (ee, ie, He) => {
```

#### 771. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7550-L7552` → after: `L7550-L7552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7550-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7550-L7552) · [Before (L7550-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7550-L7552)

```diff
-         var YB = GB(40717),
-           DB = GB(40706),
-           QB = GB(1710),
+         var ye = He(40792),
+           be = He(40783),
+           Me = He(1633),
```

#### 772. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7554-L7555` → after: `L7554-L7555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7554-L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7554-L7555) · [Before (L7554-L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7554-L7555)

```diff
-           jB = GB(641),
-           yB = GB(3166),
+           Ue = He(610),
+           Fe = He(3066),
```

#### 773. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7557-L7560` → after: `L7557-L7560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7557-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7557-L7560) · [Before (L7557-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7557-L7560)

```diff
-           MB = GB(38383),
-           PB = GB(40728),
-           zB = GB(39845),
-           lB = GB(40731);
+           oe = He(38543),
+           Re = He(40800),
+           ke = He(39952),
+           qe = He(40805);
```

#### 774. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7563` → after: `L7563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7563) · [Before (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7563)

```diff
-           const YB = new zB.c;
+           const ye = new ke.b;
```

#### 775. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7566` → after: `L7566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7566) · [Before (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7566)

```diff
-             if (!(0, jB.Q)(BB)) throw new Error(`Duplicate chunk at ${DB.chunkX}, ${DB.chunkY}, ${DB.chunkZ}`);
+             if (!(0, Ue.P)(ee)) throw new Error(`Duplicate chunk at ${be.chunkX}, ${be.chunkY}, ${be.chunkZ}`);
```

#### 776. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7569` → after: `L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7569) · [Before (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7569)

```diff
-           return new PB.e(BB, {
+           return new Re.b(ee, {
```

#### 777. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7584` → after: `L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7584) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7584)

```diff
-             rle: (0, lB.e)("EAABgQEHHAGBARcAAR8HAAEf1wcAAYEBBxwBgQEXAAGBAQIcASIDHAEiAYEBFwABHwcAAR+1BwADgQEHHAOBARMAA4EBBxwDgQETAAGIAQKBAQEcAiICHAIiA4EBEwABiAECgQEHAAOBARMAA4EBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAMdBwABHAIdFQABHQcAAh3KBQANgQEHHAiBAQQAAYgBAR0BiAEKgQEHHAiBAQQA … [truncated]
+             rle: (0, qe.b)("EAABgQEHHAGBARcAAR8HAAEf1wcAAYEBBxwBgQEXAAGBAQIcASIDHAEiAYEBFwABHwcAAR+1BwADgQEHHAOBARMAA4EBBxwDgQETAAGIAQKBAQEcAiICHAIiA4EBEwABiAECgQEHAAOBARMAA4EBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAMdBwABHAIdFQABHQcAAh3KBQANgQEHHAiBAQQAAYgBAR0BiAEKgQEHHAiBAQQA … [truncated]
```

#### 778. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7589` → after: `L7589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7589) · [Before (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7589)

```diff
-             rle: (0, lB.e)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB … [truncated]
+             rle: (0, qe.b)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB … [truncated]
```

#### 779. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7594` → after: `L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7594) · [Before (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7594)

```diff
-             rle: (0, lB.e)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwAB … [truncated]
+             rle: (0, qe.b)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwAB … [truncated]
```

#### 780. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7599` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7599) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7599)

```diff
-             rle: (0, lB.e)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI … [truncated]
+             rle: (0, qe.b)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI … [truncated]
```

#### 781. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7609` → after: `L7609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7609) · [Before (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7609)

```diff
-             rle: (0, lB.e)("IATgBwAHBAwCBwQGAgcADAQHAAYECwABlgG0BwADBBICAwQIAgMAEgQDAAKBAQYCDAABlgELAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAIEHgICABYECAIXAAGWAQWBAQMcGAAFgQEDHBgA … [truncated]
+             rle: (0, qe.b)("IATgBwAHBAwCBwQGAgcADAQHAAYECwABlgG0BwADBBICAwQIAgMAEgQDAAKBAQYCDAABlgELAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAIEHgICABYECAIXAAGWAQWBAQMcGAAFgQEDHBgA … [truncated]
```

#### 782. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7614` → after: `L7614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7614) · [Before (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7614)

```diff
-             rle: (0, lB.e)("IATgBwAJAgkECAIPBAkACAQEAAGeAQYAAZYBugcADAIEBA0CAwQIAgQEBAANBAMAAxwBHQGIAQOBARsAAYgBA4EBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAHgICBAgCFgQCAAMcBYEBDQABlgEKAAMcBYEBGwABHwOBAQEfHAAD … [truncated]
+             rle: (0, qe.b)("IATgBwAJAgkECAIPBAkACAQEAAGeAQYAAZYBugcADAIEBA0CAwQIAgQEBAANBAMAAxwBHQGIAQOBARsAAYgBA4EBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAHgICBAgCFgQCAAMcBYEBDQABlgEKAAMcBYEBGwABHwOBAQEfHAAD … [truncated]
```

#### 783. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7619` → after: `L7619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7619) · [Before (L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7619)

```diff
-             rle: (0, lB.e)("AQQfAgEAAQQeAgIAAR0EHBUABBwDAAMcFwADHAQAAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx0AAYgBBIEBHAABzRcBgQEBzRccAASBAQGIARwAAc0XAYEBAc0XHAAFgQGZAgABBB8CAQABBB4CAgABHQQcFQAEHAMAAxwXAAMcBAAB7w8fAAHvDx8A … [truncated]
+             rle: (0, qe.b)("AQQfAgEAAQQeAgIAAR0EHBUABBwDAAMcFwADHAQAAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx0AAYgBBIEBHAABzRcBgQEBzRccAASBAQGIARwAAc0XAYEBAc0XHAAFgQGZAgABBB8CAQABBB4CAgABHQQcFQAEHAMAAxwXAAMcBAAB7w8fAAHvDx8A … [truncated]
```

#### 784. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7624` → after: `L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7624) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7624)

```diff
-             rle: (0, lB.e)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGB … [truncated]
+             rle: (0, qe.b)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGB … [truncated]
```

#### 785. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7629` → after: `L7629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7629) · [Before (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7629)

```diff
-             this.pP = OB, this.chunkToFixedPointPrefabs = void 0;
+             this.BR = ie, this.chunkToFixedPointPrefabs = void 0;
```

#### 786. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7633` → after: `L7633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7633) · [Before (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7633)

```diff
-                 iD: DB,
+                 Ib: be,
```

#### 787. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7640` → after: `L7640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7640) · [Before (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7640)

```diff
-               if (void 0 === BB) throw new Error(`Fixed-point prefab "${DB}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
+               if (void 0 === ee) throw new Error(`Fixed-point prefab "${be}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
```

#### 788. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7691` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7691) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7691)

```diff
-               nearestFixedPrefabInfoForChunk: DB.l.create(this.pP, [BB, OB], YB.d.NumFields, jB)
+               nearestFixedPrefabInfoForChunk: be.s.create(this.BR, [ee, ie], ye.i.NumFields, Ue)
```

#### 789. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7696` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7696) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7696)

```diff
-             const QB = DB.getOrGenerate(BB, OB, YB.d.DistanceToNearestFixedPrefab);
+             const Me = be.getOrGenerate(ee, ie, ye.i.DistanceToNearestFixedPrefab);
```

#### 790. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7700)

```diff
-             const jB = DB.getOrGenerate(BB, OB, YB.d.HeightOfNearestFixedPrefab);
+             const Ue = be.getOrGenerate(ee, ie, ye.i.HeightOfNearestFixedPrefab);
```

#### 791. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7705` → after: `L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7705) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7705)

```diff
-             return GB.getOrGenerate(BB, OB, YB.d.DistanceToNearestFixedPrefab) <= RB
+             return He.getOrGenerate(ee, ie, ye.i.DistanceToNearestFixedPrefab) <= ze
```

#### 792. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7709` → after: `L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7709) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7709)

```diff
-             return 0 === GB.getOrGenerate(BB, OB, YB.d.DistanceToNearestFixedPrefab)
+             return 0 === He.getOrGenerate(ee, ie, ye.i.DistanceToNearestFixedPrefab)
```

#### 793. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7727` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7727) · [Before (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7727)

```diff
-             return `${BB}|${OB}`
+             return `${ee}|${ie}`
```

#### 794. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7732` → after: `L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7732) · [Before (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7732)

```diff
-             if (!(0, jB.Q)(GB)) return GB;
+             if (!(0, Ue.P)(He)) return He;
```

#### 795. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7736-L7740` → after: `L7736-L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7736-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7736-L7740) · [Before (L7736-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7736-L7740)

```diff
-             for (let QB = 0; QB < YB.x; QB += jB.E)
-               for (let OB = 0; OB < YB.y; OB += jB.E)
-                 for (let GB = 0; GB < YB.z; GB += jB.E) {
-                   const oB = JB()(new Uint16Array(jB.E * jB.E * jB.E), [jB.E, jB.E, jB.E]),
-                     yB = BB.getRLEChunk((0, jB.V)(QB), (0, jB.V)(OB), (0, jB.V)(GB));
+             for (let Me = 0; Me < ye.x; Me += Ue.D)
+               for (let ie = 0; ie < ye.y; ie += Ue.D)
+                 for (let He = 0; He < ye.z; He += Ue.D) {
+                   const Ke = Je()(new Uint16Array(Ue.D * Ue.D * Ue.D), [Ue.D, Ue.D, Ue.D]),
+                     Fe = ee.getRLEChunk((0, Ue.W)(Me), (0, Ue.W)(ie), (0, Ue.W)(He));
```

#### 796. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7742-L7744` → after: `L7742-L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7742-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7742-L7744) · [Before (L7742-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7742-L7744)

```diff
-                   const PB = Math.min(jB.E, YB.x - QB),
-                     zB = Math.min(jB.E, YB.y - OB),
-                     lB = Math.min(jB.E, YB.z - GB);
+                   const Re = Math.min(Ue.D, ye.x - Me),
+                     ke = Math.min(Ue.D, ye.y - ie),
+                     qe = Math.min(Ue.D, ye.z - He);
```

#### 797. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7779` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7779) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7779)

```diff
-             GB.set(BB, OB, YB.d.DistanceToNearestFixedPrefab, DB), GB.set(BB, OB, YB.d.HeightOfNearestFixedPrefab, QB)
+             He.set(ee, ie, ye.i.DistanceToNearestFixedPrefab, be), He.set(ee, ie, ye.i.HeightOfNearestFixedPrefab, Me)
```

#### 798. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7784` → after: `L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7784) · [Before (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7784)

```diff
-       40700: (BB, OB, GB) => {
+       40777: (ee, ie, He) => {
```

#### 799. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7790-L7793` → after: `L7790-L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793) · [Before (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793)

```diff
-         var YB = GB(40706),
-           DB = GB(40717),
-           QB = GB(40711),
-           oB = GB(40719);
+         var ye = He(40783),
+           be = He(40792),
+           Me = He(40789),
+           Ke = He(40794);
```

#### 800. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7796` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7796) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7796)

```diff
-           return new YB.h([{
+           return new ye.i([{
```

#### 801. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7802` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7802) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7802)

```diff
-           }], `${BB}GlobalHeightmapOffset`)
+           }], `${ee}GlobalHeightmapOffset`)
```

#### 802. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7838` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7838) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7838)

```diff
-             null !== lB && (JB = lB, MB = QB.p, PB = lB - QB.f, zB = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(BB, OB, DB, oB, GB, JB, MB, PB, zB)
+             null !== qe && (Je = qe, oe = Me.q, Re = qe - Me.e, ke = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(ee, ie, be, Ke, He, Je, oe, Re, ke)
```

#### 803. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7851-L7852` → after: `L7851-L7852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7851-L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7851-L7852) · [Before (L7851-L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7851-L7852)

```diff
-               lB = QB.p,
-               pB = QB.l,
+               qe = Me.q,
+               fe = Me.m,
```

#### 804. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7862` → after: `L7862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7862) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7862)

```diff
-                 OB < 1 && (lB = JB + Math.floor((yB - JB) * OB), zB >= lB && (lB = QB.p, qB = QB.i))
+                 ie < 1 && (qe = Je + Math.floor((Fe - Je) * ie), ke >= qe && (qe = Me.q, Te = Me.i))
```

#### 805. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7870` → after: `L7870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7870) · [Before (L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7870)

```diff
-               pB = zB - QB.f
+               fe = ke - Me.e
```

#### 806. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7881` → after: `L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7881) · [Before (L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7881)

```diff
-             null !== zB && JB > (yB = zB) && (JB = QB.p, PB = 0), jB.set(BB, OB, DB.c.GroundHeight, yB), jB.set(BB, OB, DB.c.WaterHeight, JB), jB.set(BB, OB, DB.c.CavesAllowedBelowY, MB), jB.set(BB, OB, DB.c.IsLake, PB), this.shouldCurtailCave(BB, OB, null !== zB) && jB.set(BB, O … [truncated]
+             null !== ke && Je > (Fe = ke) && (Je = Me.q, Re = 0), Ue.set(ee, ie, be.f.GroundHeight, Fe), Ue.set(ee, ie, be.f.WaterHeight, Je), Ue.set(ee, ie, be.f.CavesAllowedBelowY, oe), Ue.set(ee, ie, be.f.IsLake, Re), this.shouldCurtailCave(ee, ie, null !== ke) && Ue.set(ee, i … [truncated]
```

#### 807. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7893` → after: `L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7893) · [Before (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7893)

```diff
-       40744: (BB, OB, GB) => {
+       40816: (ee, ie, He) => {
```

#### 808. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7895` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7895) · [Before (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7895)

```diff
-           b: () => JB
+           e: () => Je
```

#### 809. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7897-L7898` → after: `L7897-L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898) · [Before (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898)

```diff
-         var YB = GB(40706),
-           DB = GB(40753),
+         var ye = He(40783),
+           be = He(40821),
```

#### 810. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7900-L7902` → after: `L7900-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902) · [Before (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902)

```diff
-           oB = GB(4656),
-           jB = GB(40783);
-         const yB = new jB.b("point cells", 500, 6e4);
+           Ke = He(4605),
+           Ue = He(40856);
+         const Fe = new Ue.e("point cells", 500, 6e4);
```

#### 811. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7919` → after: `L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919) · [Before (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919)

```diff
-             if (this.gridSize < GB) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${GB} (chunkSize=${BB}, halfBox=${OB}). Points near chunk edges would be missed.`)
+             if (this.gridSize < He) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${He} (chunkSize=${ee}, halfBox=${ie}). Points near chunk edges would be missed.`)
```

#### 812. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7926` → after: `L7926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7926) · [Before (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7926)

```diff
-             return !!YB.has((0, jB.e)(BB, OB))
+             return !!ye.has((0, Ue.g)(ee, ie))
```

#### 813. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7935` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935)

```diff
-               const GB = (0, YB.H)(yB, BB, OB);
+               const He = (0, ye.C)(Fe, ee, ie);
```

#### 814. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7964` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964) · [Before (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964)

```diff
-               const BB = (0, YB.H)(JB, OB, GB);
+               const ee = (0, ye.C)(Je, ie, He);
```

#### 815. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7976` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976) · [Before (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976)

```diff
-               const PB = (0, YB.H)(MB, OB, GB) - oB;
+               const Re = (0, ye.C)(oe, ie, He) - Ke;
```

#### 816. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009)

```diff
-               const QB = new oB.d(`${BB}${OB}${this.seed}jitter`);
+               const Me = new Ke.i(`${ee}${ie}${this.seed}jitter`);
```

#### 817. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8020` → after: `L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020) · [Before (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020)

```diff
-               const jB = new oB.d(`${BB}${OB}${this.seed}pts`),
+               const Ue = new Ke.i(`${ee}${ie}${this.seed}pts`),
```

#### 818. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8048` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8048) · [Before (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8048)

```diff
-               for (const BB of DB) yB.add((0, jB.e)(BB[0], BB[1]))
+               for (const ee of be) Fe.add((0, Ue.g)(ee[0], ee[1]))
```

#### 819. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8052` → after: `L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052)

```diff
-               points: this.useKthClosestPoint ? DB : null
+               points: this.useKthClosestPoint ? be : null
```

#### 820. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8057` → after: `L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057)

```diff
-       40798: (BB, OB, GB) => {
+       40885: (ee, ie, He) => {
```

#### 821. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8061-L8070` → after: `L8061-L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070) · [Before (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070)

```diff
-         var YB = GB(40706),
-           DB = GB(40744),
-           QB = GB(40717),
-           oB = GB(40711),
-           jB = GB(38383),
-           yB = GB(40793),
-           JB = GB(624),
-           MB = GB(641),
-           PB = GB(39845),
-           zB = GB(4656);
+         var ye = He(40783),
+           be = He(40816),
+           Me = He(40792),
+           Ke = He(40789),
+           Ue = He(38543),
+           Fe = He(40878),
+           Je = He(600),
+           oe = He(610),
+           Re = He(39952),
+           ke = He(4605);
```

#### 822. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8085` → after: `L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085) · [Before (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085)

```diff
-             return null !== (OB = qB[this.suffixMapping[BB]]) && void 0 !== OB ? OB : []
+             return null !== (ie = Te[this.suffixMapping[ee]]) && void 0 !== ie ? ie : []
```

#### 823. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8104` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104)

```diff
-               OB[GB] = (null !== (oB = OB[GB]) && void 0 !== oB ? oB : 0) + 1, OB[GB] >= NB && YB.splice(YB.indexOf(GB), 1)
+               ie[He] = (null !== (Ke = ie[He]) && void 0 !== Ke ? Ke : 0) + 1, ie[He] >= Xe && ye.splice(ye.indexOf(He), 1)
```

#### 824. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171)

```diff
-             return `r${BB}|m${Number(OB)}`
+             return `r${ee}|m${Number(ie)}`
```

#### 825. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8205` → after: `L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205) · [Before (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205)

```diff
-             const [, lB, pB] = null !== (DB = VB.exec(PB)) && void 0 !== DB ? DB : [];
+             const [, qe, fe] = null !== (be = ge.exec(Re)) && void 0 !== be ? be : [];
```

#### 826. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8208` → after: `L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208)

```diff
-               zB = null !== (qB = null === (ZB = QB[`${MB}|meta|${[AB.split("").filter(((BB,OB)=>lB.split("").some((BB=>{const GB=AB.indexOf(BB);return((YB?3-GB:GB)+oB)%4===OB})))).join(""),pB].filter(Boolean).join("|")}`]) || void 0 === ZB ? void 0 : ZB.id) && void 0 !== qB ? qB … [truncated]
+               ke = null !== (Te = null === (pe = Me[`${oe}|meta|${[Ee.split("").filter(((ee,ie)=>qe.split("").some((ee=>{const He=Ee.indexOf(ee);return((ye?3-He:He)+Ke)%4===ie})))).join(""),fe].filter(Boolean).join("|")}`]) || void 0 === pe ? void 0 : pe.id) && void 0 !== Te ? Te … [truncated]
```

#### 827. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8213` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213)

```diff
-               let OB = PB.replace(`rot${JB}`, `rot${BB}`);
+               let ie = Re.replace(`rot${Je}`, `rot${ee}`);
```

#### 828. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8218` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218)

```diff
-                 OB = `${DB[1]}|${BB.join("")}`
+                 ie = `${be[1]}|${ee.join("")}`
```

#### 829. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8220-L8221` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221)

```diff
-               const oB = `${MB}|${OB}`;
-               if (zB = null !== (NB = null === (RB = QB[oB]) || void 0 === RB ? void 0 : RB.id) && void 0 !== NB ? NB : null, null === zB) {
+               const Ke = `${oe}|${ie}`;
+               if (ke = null !== (Xe = null === (ze = Me[Ke]) || void 0 === ze ? void 0 : ze.id) && void 0 !== Xe ? Xe : null, null === ke) {
```

#### 830. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8229` → after: `L8229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8229) · [Before (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8229)

```diff
-         var UB = GB(3166),
+         var We = He(3066),
```

#### 831. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231)

```diff
-           kB = GB(40719);
+           Ze = He(40794);
```

#### 832. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8236-L8238` → after: `L8236-L8238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8236-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8236-L8238) · [Before (L8236-L8238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8236-L8238)

```diff
-             const yB = GB.getOrGenerate(BB, OB, jB, QB.b.FloorY);
-             if (yB === oB.o) continue;
-             uB(DB, yB, GB.getOrGenerate(BB, OB, jB, QB.b.CeilingY))
+             const Fe = He.getOrGenerate(ee, ie, Ue, Me.d.FloorY);
+             if (Fe === Ke.p) continue;
+             Pe(be, Fe, He.getOrGenerate(ee, ie, Ue, Me.d.CeilingY))
```

#### 833. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8259` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259)

```diff
-         const mB = new zB.c([{
+         const Ae = new ke.f([{
```

#### 834. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8272` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272)

```diff
-           IB = new zB.c([{
+           Ye = new ke.f([{
```

#### 835. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8282` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282)

```diff
-         const LB = new zB.c(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const ce = new ke.f(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 836. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8291` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291)

```diff
-             const OB = `${LB.sample(BB)} ${this.mobType}`;
+             const ie = `${ce.sample(ee)} ${this.mobType}`;
```

#### 837. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8307` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307)

```diff
-               const BB = new zB.f(YB.minItems, YB.maxItems + 1),
+               const ee = new ke.k(ye.minItems, ye.maxItems + 1),
```

#### 838. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8311-L8312` → after: `L8311-L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312) · [Before (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312)

```diff
-                 const BB = OB.amount ? new zB.f(OB.amount.min, OB.amount.max + 1) : null,
-                   YB = null !== (GB = OB.itemAttributesDistribution) && void 0 !== GB ? GB : null;
+                 const ee = ie.amount ? new ke.k(ie.amount.min, ie.amount.max + 1) : null,
+                   ye = null !== (He = ie.itemAttributesDistribution) && void 0 !== He ? He : null;
```

#### 839. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8322` → after: `L8322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322)

```diff
-               const QB = new zB.c(DB);
+               const Me = new ke.f(be);
```

#### 840. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8328` → after: `L8328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328) · [Before (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328)

```diff
-             this.itemCategoryDistributions = OB, this.shouldEnchantDistribution = new zB.b(BB.enchantmentProbability), this.enchantmentTier = BB.enchantmentTier
+             this.itemCategoryDistributions = ie, this.shouldEnchantDistribution = new ke.e(ee.enchantmentProbability), this.enchantmentTier = ee.enchantmentTier
```

#### 841. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8331` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331) · [Before (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331)

```diff
-             const OB = Array(MB.p).fill(null);
+             const ie = Array(oe.n).fill(null);
```

#### 842. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8339-L8341` → after: `L8339-L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341) · [Before (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341)

```diff
-                   zB = null !== (YB = null === (DB = MB.amountDistribution) || void 0 === DB ? void 0 : DB.sample(BB)) && void 0 !== YB ? YB : null,
-                   lB = null !== (QB = null === (oB = MB.attributesDistribution) || void 0 === oB ? void 0 : oB.sample(BB)) && void 0 !== QB ? QB : {},
-                   pB = null !== (jB = this.getEnchantmentAttributesForItem(BB, PB)) && void 0 !== jB ? jB : {};
+                   ke = null !== (ye = null === (be = oe.amountDistribution) || void 0 === be ? void 0 : be.sample(ee)) && void 0 !== ye ? ye : null,
+                   qe = null !== (Me = null === (Ke = oe.attributesDistribution) || void 0 === Ke ? void 0 : Ke.sample(ee)) && void 0 !== Me ? Me : {},
+                   fe = null !== (Ue = this.getEnchantmentAttributesForItem(ee, Re)) && void 0 !== Ue ? Ue : {};
```

#### 843. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8348` → after: `L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348) · [Before (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348)

```diff
-                       ...null !== (yB = lB.customAttributes) && void 0 !== yB ? yB : {},
+                       ...null !== (Fe = qe.customAttributes) && void 0 !== Fe ? Fe : {},
```

#### 844. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8355)

```diff
-             return (0, zB.l)(OB, BB), OB
+             return (0, ke.o)(ie, ee), ie
```

#### 845. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8642` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8642) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8642)

```diff
-             name: `${BB} Pickaxe`,
+             name: `${ee} Pickaxe`,
```

#### 846. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8646)

```diff
-             name: `${BB} Axe`,
+             name: `${ee} Axe`,
```

#### 847. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8650` → after: `L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8650) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8650)

```diff
-             name: `${BB} Spade`,
+             name: `${ee} Spade`,
```

#### 848. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8654` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8654) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8654)

```diff
-             name: `${BB} Hoe`,
+             name: `${ee} Hoe`,
```

#### 849. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8661` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661)

```diff
-           if (OB < 0 || OB > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${OB}`);
+           if (ie < 0 || ie > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${ie}`);
```

#### 850. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8685` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8685) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8685)

```diff
-             name: `${BB} Sword`,
+             name: `${ee} Sword`,
```

#### 851. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8689` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8689) · [Before (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8689)

```diff
-             name: `${BB} Bow`,
+             name: `${ee} Bow`,
```

#### 852. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8693` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8693) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8693)

```diff
-             name: `${BB} Crossbow`,
+             name: `${ee} Crossbow`,
```

#### 853. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8706` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8706) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8706)

```diff
-           if (BB === wB.STONE) throw new Error(`${BB} armour is not supported`);
+           if (ee === ve.STONE) throw new Error(`${ee} armour is not supported`);
```

#### 854. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8708` → after: `L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8708) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8708)

```diff
-               name: `${BB} Helmet`,
+               name: `${ee} Helmet`,
```

#### 855. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8712` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8712) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8712)

```diff
-               name: `${BB} Chestplate`,
+               name: `${ee} Chestplate`,
```

#### 856. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8716` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8716) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8716)

```diff
-               name: `${BB} Gauntlets`,
+               name: `${ee} Gauntlets`,
```

#### 857. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8720` → after: `L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8720) · [Before (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8720)

```diff
-               name: `${BB} Leggings`,
+               name: `${ee} Leggings`,
```

#### 858. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8724` → after: `L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8724) · [Before (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8724)

```diff
-               name: `${BB} Boots`,
+               name: `${ee} Boots`,
```

#### 859. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8732)

```diff
-           [MB.m.COMMON]: new rB({
+           [oe.k.COMMON]: new Le({
```

#### 860. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8761` → after: `L8761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8761) · [Before (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8761)

```diff
-           [MB.m.UNCOMMON]: new rB({
+           [oe.k.UNCOMMON]: new Le({
```

#### 861. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8790` → after: `L8790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8790) · [Before (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8790)

```diff
-           [MB.m.RARE]: new rB({
+           [oe.k.RARE]: new Le({
```

#### 862. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8819` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8819) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8819)

```diff
-           [MB.m.EPIC]: new rB({
+           [oe.k.EPIC]: new Le({
```

#### 863. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8856` → after: `L8856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8856) · [Before (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8856)

```diff
-           [MB.m.LEGENDARY]: new rB({
+           [oe.k.LEGENDARY]: new Le({
```

#### 864. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8981` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981) · [Before (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981)

```diff
-             const BB = new zB.d(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
+             const ee = new ke.i(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
```

#### 865. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8986` → after: `L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8986) · [Before (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8986)

```diff
-                   chestStr: (0, MB.G)(OB),
+                   chestStr: (0, oe.E)(ie),
```

#### 866. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8996` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996)

```diff
-             this.seed = void 0, this.pP = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.BR = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 867. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999)

```diff
-               pP: GB,
+               BR: He,
```

#### 868. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005)

```diff
-             DO.BLOCK_ID_MAPPINGS || (DO.BLOCK_ID_MAPPINGS = new nB(YB)), FB || (FB = new pB(oB)), this.seed = OB, this.pP = GB, this.invisibleSolidBlockId = YB["Invisible Solid"].id, this.emptySpawnerBlockId = YB["Empty Spawner Block"].id, this.chestToLootChestBlockId = new JB.c( … [truncated]
+             bi.BLOCK_ID_MAPPINGS || (bi.BLOCK_ID_MAPPINGS = new de(ye)), Ve || (Ve = new fe(Ke)), this.seed = ie, this.BR = He, this.invisibleSolidBlockId = ye["Invisible Solid"].id, this.emptySpawnerBlockId = ye["Empty Spawner Block"].id, this.chestToLootChestBlockId = new Je.e( … [truncated]
```

#### 869. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9012` → after: `L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012)

```diff
-             for (const DB of QB.n) MB[DB] = YB[`${DB} Spawner Block`].id;
+             for (const be of Me.o) oe[be] = ye[`${be} Spawner Block`].id;
```

#### 870. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9027` → after: `L9027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027)

```diff
-                   yB = new DB.b(`prefab|${BB}|${oB}`, jB.minDistanceBetweenPrefabs, !1, !0, OB, YB, GB, null, !0)
+                   Fe = new be.e(`prefab|${ee}|${Ke}`, Ue.minDistanceBetweenPrefabs, !1, !0, ie, ye, He, null, !0)
```

#### 871. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9041` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041)

```diff
-             return new zB.d(`${BB}|${OB}|${this.seed}|prefabGenerator`)
+             return new ke.i(`${ee}|${ie}|${this.seed}|prefabGenerator`)
```

#### 872. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070)

```diff
-               JB = this.pP >> 1,
+               Je = this.BR >> 1,
```

#### 873. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9072` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072)

```diff
-               zB = BB + this.pP + this.prefabRadius,
+               ke = ee + this.BR + this.prefabRadius,
```

#### 874. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9074` → after: `L9074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074)

```diff
-               pB = OB + this.pP + this.prefabRadius;
+               fe = ie + this.BR + this.prefabRadius;
```

#### 875. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9082` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082)

```diff
-                 if (ZB === QB.j.SURFACE && RB === QB.h.VERY_HIGH && !jB.regionMayHaveVeryHighSurfacePrefabs(MB, lB, zB, pB)) continue;
+                 if (pe === Me.l.SURFACE && ze === Me.k.VERY_HIGH && !Ue.regionMayHaveVeryHighSurfacePrefabs(oe, qe, ke, fe)) continue;
```

#### 876. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9092` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092) · [Before (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092)

```diff
-                   if (ZB === QB.j.SURFACE && !JB.canPlaceSurfacePrefab(OB, jB)) continue;
+                   if (pe === Me.l.SURFACE && !Je.canPlaceSurfacePrefab(ie, Ue)) continue;
```

#### 877. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9111` → after: `L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111) · [Before (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111)

```diff
-                       console.error(`Invalid prefab rotation: ${WB}`)
+                       console.error(`Invalid prefab rotation: ${Be}`)
```

#### 878. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9128` → after: `L9128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128)

```diff
-                   if (ZB === QB.j.SURFACE && null !== JB.maxSurfacePrefabRelief) {
+                   if (pe === Me.l.SURFACE && null !== Je.maxSurfacePrefabRelief) {
```

#### 879. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9135)

```diff
-                   const KB = new PB.c;
+                   const De = new Re.b;
```

#### 880. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9143` → after: `L9143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9143) · [Before (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9143)

```diff
-                   const uB = new PB.c;
+                   const Pe = new Re.b;
```

#### 881. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173)

```diff
-                 const YB = DB.getOrGenerate(BB + MB, OB + GB, QB.c.GroundHeight);
+                 const ye = be.getOrGenerate(ee + oe, ie + He, Me.f.GroundHeight);
```

#### 882. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9194-L9195` → after: `L9194-L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195) · [Before (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195)

```diff
-                 XD: BB,
-                 wD: GB
+                 rb: ee,
+                 Qb: He
```

#### 883. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9208` → after: `L9208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208)

```diff
-                   if (GB.getOrGenerate(JB, BB, QB.c.WaterHeight) !== oB.p) return {
+                   if (He.getOrGenerate(Je, ee, Me.f.WaterHeight) !== Ke.q) return {
```

#### 884. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9212-L9213` → after: `L9212-L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213) · [Before (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213)

```diff
-                   const OB = GB.getOrGenerate(JB, BB, QB.c.GroundHeight);
-                   if (yB.d.isInCave(JB, OB, BB, YB)) return {
+                   const ie = He.getOrGenerate(Je, ee, Me.f.GroundHeight);
+                   if (Fe.e.isInCave(Je, ie, ee, ye)) return {
```

#### 885. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9264-L9265` → after: `L9264-L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265) · [Before (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265)

```diff
-             if (jB === this.emptySpawnerBlockId && (jB = null !== (yB = YB.spawnerBlockLocationToBlockId.get(BB, OB, GB)) && void 0 !== yB ? yB : this.defaultSpawnerBlockId), jB < 0) return jB;
-             if (jB = null !== (QB = null === (oB = YB.blockIdMapping) || void 0 === oB ? void 0 : oB[jB]) && void 0 !== QB ? QB : jB, void 0 !== this.chestToLootChestBlockId.reverseGet(jB)) {
+             if (Ue === this.emptySpawnerBlockId && (Ue = null !== (Fe = ye.spawnerBlockLocationToBlockId.get(ee, ie, He)) && void 0 !== Fe ? Fe : this.defaultSpawnerBlockId), Ue < 0) return Ue;
+             if (Ue = null !== (Me = null === (Ke = ye.blockIdMapping) || void 0 === Ke ? void 0 : Ke[Ue]) && void 0 !== Me ? Me : Ue, void 0 !== this.chestToLootChestBlockId.reverseGet(Ue)) {
```

#### 886. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267)

```diff
-               const QB = null !== (JB = YB.chestLocationToQuality.get(BB, OB, GB)) && void 0 !== JB ? JB : DO.DEFAULT_CHEST_QUALITY,
+               const Me = null !== (Je = ye.chestLocationToQuality.get(ee, ie, He)) && void 0 !== Je ? Je : bi.DEFAULT_CHEST_QUALITY,
```

#### 887. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9294` → after: `L9294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9294) · [Before (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9294)

```diff
-             } = BB, QB = fB()(new Int32Array(GB * YB * DB), [GB, YB, DB]), oB = new PB.c;
+             } = ee, Me = te()(new Int32Array(He * ye * be), [He, ye, be]), Ke = new Re.b;
```

#### 888. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9296` → after: `L9296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9296) · [Before (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9296)

```diff
-             const yB = new PB.c;
+             const Fe = new Re.b;
```

#### 889. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9298-L9302` → after: `L9298-L9302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302) · [Before (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302)

```diff
-             for (let JB = 0; JB < GB; JB += MB.E)
-               for (let OB = 0; OB < YB; OB += MB.E)
-                 for (let PB = 0; PB < DB; PB += MB.E) {
-                   const zB = fB()(new Uint16Array(MB.E * MB.E * MB.E), [MB.E, MB.E, MB.E]),
-                     lB = BB.schematic.getRLEChunk((0, MB.V)(JB), (0, MB.V)(OB), (0, MB.V)(PB));
+             for (let Je = 0; Je < He; Je += oe.D)
+               for (let ie = 0; ie < ye; ie += oe.D)
+                 for (let Re = 0; Re < be; Re += oe.D) {
+                   const ke = te()(new Uint16Array(oe.D * oe.D * oe.D), [oe.D, oe.D, oe.D]),
+                     qe = ee.schematic.getRLEChunk((0, oe.W)(Je), (0, oe.W)(ie), (0, oe.W)(Re));
```

#### 890. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9304-L9306` → after: `L9304-L9306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306) · [Before (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306)

```diff
-                   const pB = Math.min(MB.E, GB - JB),
-                     qB = Math.min(MB.E, YB - OB),
-                     ZB = Math.min(MB.E, DB - PB);
+                   const fe = Math.min(oe.D, He - Je),
+                     Te = Math.min(oe.D, ye - ie),
+                     pe = Math.min(oe.D, be - Re);
```

#### 891. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9315` → after: `L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315)

```diff
-                         else if (this.emptySpawnerBlockId === jB) yB.get(MB, lB, pB) || console.error(`Empty spawner block found in prefab ${BB.schematic.name} at (${MB}, ${lB}, ${pB}) with no mob type specified. Defaulting to "${DO.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === Ue) Fe.get(oe, qe, fe) || console.error(`Empty spawner block found in prefab ${ee.schematic.name} at (${oe}, ${qe}, ${fe}) with no mob type specified. Defaulting to "${bi.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 892. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9318` → after: `L9318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318) · [Before (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318)

```diff
-                           void 0 !== OB && (oB.get(MB, lB, pB) || console.error(`Chest found in prefab ${BB.schematic.name} at (${MB}, ${lB}, ${pB}) with no quality specified. Defaulting to "${DO.DEFAULT_CHEST_QUALITY}" quality.`), jB = OB)
+                           void 0 !== ie && (Ke.get(oe, qe, fe) || console.error(`Chest found in prefab ${ee.schematic.name} at (${oe}, ${qe}, ${fe}) with no quality specified. Defaulting to "${bi.DEFAULT_CHEST_QUALITY}" quality.`), Ue = ie)
```

#### 893. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9341` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341)

```diff
-           }(BB, BB.shouldSwapXZ ? GB : OB)
+           }(ee, ee.shouldSwapXZ ? He : ie)
```

#### 894. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9348` → after: `L9348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348) · [Before (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348)

```diff
-           }(BB, BB.shouldSwapXZ ? OB : GB)
+           }(ee, ee.shouldSwapXZ ? ie : He)
```

#### 895. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9350` → after: `L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9350) · [Before (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9350)

```diff
-         DO.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, DO.BLOCK_ID_MAPPINGS = void 0, DO.DEFAULT_MOB_TYPE = "Draugr Zombie", DO.DEFAULT_CHEST_QUALITY = MB.m.COMMON;
+         bi.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, bi.BLOCK_ID_MAPPINGS = void 0, bi.DEFAULT_MOB_TYPE = "Draugr Zombie", bi.DEFAULT_CHEST_QUALITY = oe.k.COMMON;
```

#### 896. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9371` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371)

```diff
-             const GB = new YB.g(2 * BB + 1, [-BB, -BB]);
+             const He = new ye.e(2 * ee + 1, [-ee, -ee]);
```

#### 897. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9380` → after: `L9380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380) · [Before (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380)

```diff
-             this.pP = GB, this.seed = YB, this.blockMetadata = QB, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.BR = He, this.seed = ye, this.blockMetadata = Me, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 898. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383)

```diff
-                 [MB.z.Maple]: {
+                 [oe.A.Maple]: {
```

#### 899. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391)

```diff
-                 [MB.z.Pine]: {
+                 [oe.A.Pine]: {
```

#### 900. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9401` → after: `L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401)

```diff
-                 [MB.z.Plum]: {
+                 [oe.A.Plum]: {
```

#### 901. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9409` → after: `L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409) · [Before (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409)

```diff
-                 [MB.z.Cedar]: {
+                 [oe.A.Cedar]: {
```

#### 902. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9417` → after: `L9417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417) · [Before (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417)

```diff
-                 [MB.z.Aspen]: {
+                 [oe.A.Aspen]: {
```

#### 903. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9427` → after: `L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427) · [Before (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427)

```diff
-                 [MB.z.Jungle]: {
+                 [oe.A.Jungle]: {
```

#### 904. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9437` → after: `L9437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437) · [Before (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437)

```diff
-                 [MB.z.Palm]: {
+                 [oe.A.Palm]: {
```

#### 905. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447)

```diff
-                 [MB.z.AutumnMaple]: {
+                 [oe.A.AutumnMaple]: {
```

#### 906. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455)

```diff
-                 [MB.z.Pear]: {
+                 [oe.A.Pear]: {
```

#### 907. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9465` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465) · [Before (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465)

```diff
-                 [MB.z.Cherry]: {
+                 [oe.A.Cherry]: {
```

#### 908. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9475` → after: `L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475)

```diff
-                 [MB.z.Spectral]: {
+                 [oe.A.Spectral]: {
```

#### 909. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483)

```diff
-                 [MB.z.Mango]: {
+                 [oe.A.Mango]: {
```

#### 910. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9493` → after: `L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493) · [Before (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493)

```diff
-                 [MB.z.AutumnAspen]: {
+                 [oe.A.AutumnAspen]: {
```

#### 911. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9503` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503)

```diff
-                 [MB.z.Dead]: {
+                 [oe.A.Dead]: {
```

#### 912. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9513` → after: `L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513)

```diff
-                 [MB.z.FallenLog]: {
+                 [oe.A.FallenLog]: {
```

#### 913. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9523-L9524` → after: `L9523-L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524) · [Before (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((BB => QB[BB].id)), this.maxTreeRadius = BB.maxTreeRadius, this.pP <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.pP <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((ee => Me[ee].id)), this.maxTreeRadius = ee.maxTreeRadius, this.BR <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.BR <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 914. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9598` → after: `L9598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598) · [Before (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598)

```diff
-               if (BB.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${BB.radius} for canopy type "${DB}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (ee.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${ee.radius} for canopy type "${be}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 915. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9602-L9603` → after: `L9602-L9603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602-L9603) · [Before (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602-L9603)

```diff
-             for (const DB of BB.biomeSelector.oQ) DB.biome.treeMinDist && (jB = Math.min(jB, DB.biome.treeMinDist), yB = Math.max(yB, DB.biome.treeMinDist));
-             this.treePointGen = new DB.b("tree", 6, !0, !1, YB, 300, GB, {
+             for (const be of ee.biomeSelector.zM) be.biome.treeMinDist && (Ue = Math.min(Ue, be.biome.treeMinDist), Fe = Math.max(Fe, be.biome.treeMinDist));
+             this.treePointGen = new be.e("tree", 6, !0, !1, ye, 300, He, {
```

#### 916. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9611-L9612` → after: `L9611-L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612) · [Before (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612)

```diff
-             for (let lB = BB - this.maxTreeRadius; lB < BB + this.pP + this.maxTreeRadius; lB++)
-               for (let BB = OB - this.maxTreeRadius; BB < OB + this.pP + this.maxTreeRadius; BB++) {
+             for (let qe = ee - this.maxTreeRadius; qe < ee + this.BR + this.maxTreeRadius; qe++)
+               for (let ee = ie - this.maxTreeRadius; ee < ie + this.BR + this.maxTreeRadius; ee++) {
```

#### 917. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9616-L9618` → after: `L9616-L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618) · [Before (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618)

```diff
-                   if (GB.getOrGenerate(lB, BB, QB.c.WaterHeight) !== oB.p) continue;
-                   const YB = GB.getOrGenerate(lB, BB, QB.c.GroundHeight);
-                   if (yB.d.isInCave(lB, YB, BB, DB)) continue;
+                   if (He.getOrGenerate(qe, ee, Me.f.WaterHeight) !== Ke.q) continue;
+                   const ye = He.getOrGenerate(qe, ee, Me.f.GroundHeight);
+                   if (Fe.e.isInCave(qe, ye, ee, be)) continue;
```

#### 918. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9621` → after: `L9621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9621) · [Before (L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9621)

```diff
-                   const pB = new zB.d(`${lB}${BB}${this.seed}treeHeight`),
+                   const fe = new ke.i(`${qe}${ee}${this.seed}treeHeight`),
```

#### 919. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9627` → after: `L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627) · [Before (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627)

```diff
-                   if (qB === MB.z.FallenLog) {
+                   if (Te === oe.A.FallenLog) {
```

#### 920. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9630` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630)

```diff
-                       if (GB.getOrGenerate(0 === NB ? lB + OB : lB, 0 === NB ? BB : BB + OB, QB.c.GroundHeight) !== YB) {
+                       if (He.getOrGenerate(0 === Xe ? qe + ie : qe, 0 === Xe ? ee : ee + ie, Me.f.GroundHeight) !== ye) {
```

#### 921. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9651-L9652` → after: `L9651-L9652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652) · [Before (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652)

```diff
-               QB = null !== (GB = DB.minHeight) && void 0 !== GB ? GB : this.minTreeHeight,
-               oB = null !== (YB = DB.maxHeight) && void 0 !== YB ? YB : this.maxTreeHeight;
+               Me = null !== (He = be.minHeight) && void 0 !== He ? He : this.minTreeHeight,
+               Ke = null !== (ye = be.maxHeight) && void 0 !== ye ? ye : this.maxTreeHeight;
```

#### 922. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9667-L9668` → after: `L9667-L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668) · [Before (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668)

```diff
-               const DB = new zB.d(`${QB.treeX}|${QB.treeZ}|${QB.trunkBase}|tree`);
-               if (QB.treeType === MB.z.Dead || QB.treeType === MB.z.FallenLog) {
+               const be = new ke.i(`${Me.treeX}|${Me.treeZ}|${Me.trunkBase}|tree`);
+               if (Me.treeType === oe.A.Dead || Me.treeType === oe.A.FallenLog) {
```

#### 923. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9685` → after: `L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685) · [Before (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685)

```diff
-                 DB >= OB && DB < OB + this.pP && QB >= GB && QB < GB + this.pP && jB >= YB && jB < YB + this.pP && BB.set(DB - OB, QB - GB, jB - YB, oB)
+                 be >= ie && be < ie + this.BR && Me >= He && Me < He + this.BR && Ue >= ye && Ue < ye + this.BR && ee.set(be - ie, Me - He, Ue - ye, Ke)
```

#### 924. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9687` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687)

```diff
-             if (DB.treeType === MB.z.FallenLog) {
+             if (be.treeType === oe.A.FallenLog) {
```

#### 925. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689)

```diff
-               for (let BB = -1; BB < PB - 1; BB++) zB(0 === DB.vineDir ? jB + BB : jB, JB, 0 === DB.vineDir ? yB : yB + BB);
+               for (let ee = -1; ee < Re - 1; ee++) ke(0 === be.vineDir ? Ue + ee : Ue, Je, 0 === be.vineDir ? Fe : Fe + ee);
```

#### 926. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9714` → after: `L9714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714) · [Before (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714)

```diff
-               qB = Math.min(lB, GB + this.pP - 1);
+               Te = Math.min(qe, He + this.BR - 1);
```

#### 927. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9717` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717) · [Before (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717)

```diff
-               NB = Math.min(oB + PB.radius, OB + this.pP - 1);
+               Xe = Math.min(Ke + Re.radius, ie + this.BR - 1);
```

#### 928. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9720` → after: `L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720) · [Before (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720)

```diff
-               WB = Math.min(jB + PB.radius, YB + this.pP - 1);
+               Be = Math.min(Ue + Re.radius, ye + this.BR - 1);
```

#### 929. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9795` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795) · [Before (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795)

```diff
-               if (qB !== zO.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${qB}`);
+               if (Te !== ki.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${Te}`);
```

#### 930. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9802-L9804` → after: `L9802-L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804) · [Before (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804)

```diff
-             const oB = OB + this.pP,
-               jB = GB + this.pP,
-               yB = YB + this.pP,
+             const Ke = ie + this.BR,
+               Ue = He + this.BR,
+               Fe = ye + this.BR,
```

#### 931. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9830` → after: `L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830) · [Before (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830)

```diff
-             const OB = this.pP >> 1,
+             const ie = this.BR >> 1,
```

#### 932. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9852` → after: `L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852) · [Before (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852)

```diff
-         var qO = GB(40783);
+         var Ti = He(40856);
```

#### 933. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9856` → after: `L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856)

```diff
-             this.biomeSelector = BB, this.noWaterHeightmapGenerator = OB, this.hydrology = GB, this.lakeRadiusNoiseModifier = QB, this.seed = oB, this.needOutsideWaterDist = yB, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = ee, this.noWaterHeightmapGenerator = ie, this.hydrology = He, this.lakeRadiusNoiseModifier = Me, this.seed = Ke, this.needOutsideWaterDist = Fe, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 934. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9866` → after: `L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866) · [Before (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866)

```diff
-               if ((0, YB.J)(PB, BB, OB) > QB) continue;
+               if ((0, ye.G)(Re, ee, ie) > Me) continue;
```

#### 935. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9870` → after: `L9870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870) · [Before (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870)

```diff
-               const DB = (0, YB.H)(GB.origin, BB, OB),
+               const be = (0, ye.C)(He.origin, ee, ie),
```

#### 936. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9887` → after: `L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887) · [Before (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887)

```diff
-             if (!(0, MB.Q)(OB)) return OB.lake;
+             if (!(0, oe.P)(ie)) return ie.lake;
```

#### 937. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9900` → after: `L9900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900) · [Before (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900)

```diff
-             } = this, QB = new zB.d(`${BB[0]}|${BB[1]}${this.seed}oasisLake`), oB = this.hydrology.getHydrologyWaterGenInfo(BB[0], BB[1]), jB = Math.floor(oB.distFromWater - oB.waterRadius - DB);
+             } = this, Me = new ke.i(`${ee[0]}|${ee[1]}${this.seed}oasisLake`), Ke = this.hydrology.getHydrologyWaterGenInfo(ee[0], ee[1]), Ue = Math.floor(Ke.distFromWater - Ke.waterRadius - be);
```

#### 938. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9920` → after: `L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920) · [Before (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920)

```diff
-             this.biomeSelector = BB, this.noWaterHeightmapGenerator = OB, this.needOutsideWaterBodyDist = oB, this.cD = yB, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = ee, this.noWaterHeightmapGenerator = ie, this.needOutsideWaterBodyDist = Ke, this.iM = Fe, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 939. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9932` → after: `L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932) · [Before (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, WO || (WO = new qO.b("water cells", jB ? 800 : 60, 6e4)), this.waterBodyInfos = WO.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, Ei || (Ei = new Ti.e("water cells", Ue ? 800 : 60, 6e4)), this.waterBodyInfos = Ei.partition();
```

#### 940. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9934` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9934) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9934)

```diff
-             this.cellCenterMaxOffset = this.gridSize / 2 - JB, this.seed = GB, this.lakeRadiusNoiseModifier = new YB.h([{
+             this.cellCenterMaxOffset = this.gridSize / 2 - Je, this.seed = He, this.lakeRadiusNoiseModifier = new ye.i([{
```

#### 941. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9940` → after: `L9940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940) · [Before (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940)

```diff
-             }], `${GB}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, YB.x)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new NO(BB, OB, this, this.lakeRadiusNoiseModifier, GB, DB, oB, jB)
+             }], `${He}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, ye.z)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new zi(ee, ie, this, this.lakeRadiusNoiseModifier, He, be, Ke, Ue)
```

#### 942. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9944` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944)

```diff
-             if (!this.cD) return SO(this.needOutsideWaterBodyDist);
+             if (!this.iM) return di(this.needOutsideWaterBodyDist);
```

#### 943. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9948` → after: `L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948) · [Before (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948)

```diff
-             return null === DB || VO(YB) <= VO(DB) ? YB : DB
+             return null === be || Oi(ye) <= Oi(be) ? ye : be
```

#### 944. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9974` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974) · [Before (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974)

```diff
-                 IM: BB,
+                 Po: ee,
```

#### 945. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9977` → after: `L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977) · [Before (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977)

```diff
-               } = (0, YB.t)(GB, DB.origin, DB.downhill.origin);
+               } = (0, ye.x)(He, be.origin, be.downhill.origin);
```

#### 946. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9989` → after: `L9989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989) · [Before (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989)

```diff
-                 IM: BB,
+                 Po: ee,
```

#### 947. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9992` → after: `L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992) · [Before (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992)

```diff
-               } = (0, YB.t)(GB, zB.origin, DB.origin), pB = Math.floor(BB);
+               } = (0, ye.x)(He, ke.origin, be.origin), fe = Math.floor(ee);
```

#### 948. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10013` → after: `L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013) · [Before (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013)

```diff
-                 oB *= QB.lakeRadius / this.lakeSettings.maxRadius, zB = QB.lakeRadius - oB, GB = (0, YB.H)(DB.origin, BB, OB) - zB
+                 Ke *= Me.lakeRadius / this.lakeSettings.maxRadius, ke = Me.lakeRadius - Ke, He = (0, ye.C)(be.origin, ee, ie) - ke
```

#### 949. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10027` → after: `L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027) · [Before (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027)

```diff
-                 const GB = (0, YB.H)(DB.origin, BB, OB),
+                 const He = (0, ye.C)(be.origin, ee, ie),
```

#### 950. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054)

```diff
-             if (!(0, MB.Q)(GB)) return this.lastReadInfo.cellX = BB, this.lastReadInfo.cellZ = OB, this.lastReadInfo.info = GB, GB;
+             if (!(0, oe.P)(He)) return this.lastReadInfo.cellX = ee, this.lastReadInfo.cellZ = ie, this.lastReadInfo.info = He, He;
```

#### 951. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10118` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118)

```diff
-             return -1 !== DB ? YB : null
+             return -1 !== be ? ye : null
```

#### 952. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10123` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123) · [Before (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123)

```diff
-               DB = new zB.d(`${BB}${OB}${this.seed}riverCell`);
+               be = new ke.i(`${ee}${ie}${this.seed}riverCell`);
```

#### 953. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10163-L10166` → after: `L10163-L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166) · [Before (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166)

```diff
-           qQ: 40,
-           XD: -85,
-           wD: -85,
-           ZQ: .5
+           ZM: 40,
+           rb: -85,
+           Qb: -85,
+           wM: .5
```

#### 954. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10170-L10173` → after: `L10170-L10173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173) · [Before (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173)

```diff
-           qQ: 13,
-           XD: -100,
-           wD: -85,
-           ZQ: .28
+           ZM: 13,
+           rb: -100,
+           Qb: -85,
+           wM: .28
```

#### 955. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10177-L10180` → after: `L10177-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180) · [Before (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180)

```diff
-           qQ: 10,
-           XD: -100,
-           wD: -75,
-           ZQ: .4
+           ZM: 10,
+           rb: -100,
+           Qb: -75,
+           wM: .4
```

#### 956. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10184-L10187` → after: `L10184-L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187) · [Before (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187)

```diff
-           qQ: 5,
-           XD: -80,
-           wD: 15,
-           ZQ: .5
+           ZM: 5,
+           rb: -80,
+           Qb: 15,
+           wM: .5
```

#### 957. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10191-L10194` → after: `L10191-L10194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194) · [Before (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194)

```diff
-           qQ: 4,
-           XD: -60,
-           wD: 40,
-           ZQ: .5
+           ZM: 4,
+           rb: -60,
+           Qb: 40,
+           wM: .5
```

#### 958. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10198-L10199` → after: `L10198-L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199) · [Before (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199)

```diff
-             this.seed = OB, this.pP = GB, this.lQ = void 0, this.lQ = YB.map((YB => {
-               const QB = new DB.b("ore", YB.qQ, !1, !0, `${OB}${YB.blockName}`, 20, GB, null, !0);
+             this.seed = ie, this.BR = He, this.WM = void 0, this.WM = ye.map((ye => {
+               const Me = new be.e("ore", ye.ZM, !1, !0, `${ie}${ye.blockName}`, 20, He, null, !0);
```

#### 959. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10201` → after: `L10201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201)

```diff
-                 SM: (0, MB.J)(YB.blockName, BB),
+                 po: (0, oe.I)(ye.blockName, ee),
```

#### 960. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10203-L10206` → after: `L10203-L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206) · [Before (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206)

```diff
-                 qQ: YB.qQ,
-                 XD: YB.XD,
-                 wD: YB.wD,
-                 ZQ: YB.ZQ,
+                 ZM: ye.ZM,
+                 rb: ye.rb,
+                 Qb: ye.Qb,
+                 wM: ye.wM,
```

#### 961. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10213-L10216` → after: `L10213-L10216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216) · [Before (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216)

```diff
-               DB = new zB.d(`${BB}${OB}${this.seed}oreExists`);
-             for (const QB of this.lQ) {
-               const oB = QB.pointGenerator.getPointsAroundPoint(BB + this.pP / 2, OB + this.pP / 2),
-                 jB = BB + this.pP + QB.radius,
+               be = new ke.i(`${ee}${ie}${this.seed}oreExists`);
+             for (const Me of this.WM) {
+               const Ke = Me.pointGenerator.getPointsAroundPoint(ee + this.BR / 2, ie + this.BR / 2),
+                 Ue = ee + this.BR + Me.radius,
```

#### 962. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10218` → after: `L10218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218)

```diff
-                 JB = OB + this.pP + QB.radius,
+                 Je = ie + this.BR + Me.radius,
```

#### 963. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10222-L10223` → after: `L10222-L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223) · [Before (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223)

```diff
-                 const oB = new zB.d(`${PB[0]}${PB[1]}${this.seed}ore`),
-                   lB = Math.floor(oB.next() * (QB.wD + 1 - QB.XD)) + QB.XD,
+                 const Ke = new ke.i(`${Re[0]}${Re[1]}${this.seed}ore`),
+                   qe = Math.floor(Ke.next() * (Me.Qb + 1 - Me.rb)) + Me.rb,
```

#### 964. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10225` → after: `L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225)

```diff
-                   qB = Math.min(BB + this.pP - 1, PB[0] + QB.radius),
+                   Te = Math.min(ee + this.BR - 1, Re[0] + Me.radius),
```

#### 965. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10227` → after: `L10227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227)

```diff
-                   NB = Math.min(OB + this.pP - 1, PB[1] + QB.radius);
+                   Xe = Math.min(ie + this.BR - 1, Re[1] + Me.radius);
```

#### 966. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230)

```diff
-                     (0, YB.B)(PB, BB, OB) > QB.radius || (DB.next() >= QB.ZQ || GB.push(BB, lB, OB, QB.SM))
+                     (0, ye.A)(Re, ee, ie) > Me.radius || (be.next() >= Me.wM || He.push(ee, qe, ie, Me.po))
```

#### 967. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237)

```diff
-             const yB = GB + this.pP,
+             const Fe = He + this.BR,
```

#### 968. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244)

```diff
-               if (JB < oB.get(PB, zB, QB.c.GroundHeight) - DB) {
+               if (Je < Ke.get(Re, ke, Me.f.GroundHeight) - be) {
```

#### 969. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10251` → after: `L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251)

```diff
-         var fO = GB(40786);
+         var Zi = He(40864);
```

#### 970. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10261-L10262` → after: `L10261-L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262) · [Before (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262)

```diff
-             xD: GB,
-             YQ: YB,
+             oM: He,
+             TM: ye,
```

#### 971. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10272` → after: `L10272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272)

```diff
-           return GB.CD && YB.push({
+           return He.UM && ye.push({
```

#### 972. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10274-L10275` → after: `L10274-L10275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275) · [Before (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275)

```diff
-             SM: BB[OB].id
-           }), GB.vD && YB.push({
+             po: ee[ie].id
+           }), He.FM && ye.push({
```

#### 973. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10277` → after: `L10277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277) · [Before (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277)

```diff
-             SM: BB[`${OB}|meta|rot2|side`].id
+             po: ee[`${ie}|meta|rot2|side`].id
```

#### 974. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10280` → after: `L10280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280) · [Before (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280)

```diff
-             SM: BB[`${OB}|meta|rot4|side`].id
+             po: ee[`${ie}|meta|rot4|side`].id
```

#### 975. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10283` → after: `L10283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283) · [Before (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283)

```diff
-             SM: BB[`${OB}|meta|rot1|side`].id
+             po: ee[`${ie}|meta|rot1|side`].id
```

#### 976. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10286-L10287` → after: `L10286-L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287) · [Before (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287)

```diff
-             SM: BB[`${OB}|meta|rot3|side`].id
-           }), GB.sD && YB.push({
+             po: ee[`${ie}|meta|rot3|side`].id
+           }), He.JM && ye.push({
```

#### 977. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289)

```diff
-             SM: BB[`${OB}|meta|rot1|top`].id
+             po: ee[`${ie}|meta|rot1|top`].id
```

#### 978. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10298-L10300` → after: `L10298-L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300) · [Before (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300)

```diff
-                 CD: !0,
-                 vD: !0,
-                 sD: !0
+                 UM: !0,
+                 FM: !0,
+                 JM: !0
```

#### 979. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10303-L10306` → after: `L10303-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306) · [Before (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306)

```diff
-               tD: .8,
-               BQ: 0,
-               xD: .12,
-               YQ: .25,
+               RM: .8,
+               kM: 0,
+               oM: .12,
+               TM: .25,
```

#### 980. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10312-L10314` → after: `L10312-L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314) · [Before (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314)

```diff
-                 CD: !0,
-                 vD: !0,
-                 sD: !1
+                 UM: !0,
+                 FM: !0,
+                 JM: !1
```

#### 981. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10317-L10319` → after: `L10317-L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319) · [Before (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319)

```diff
-               tD: .7,
-               BQ: 2,
-               xD: .58
+               RM: .7,
+               kM: 2,
+               oM: .58
```

#### 982. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10322` → after: `L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322)

```diff
-             const GB = OB.OQ;
+             const He = ie.qM;
```

#### 983. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10326-L10328` → after: `L10326-L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328) · [Before (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328)

```diff
-                 CD: OB.CD,
-                 vD: OB.vD,
-                 sD: OB.sD
+                 UM: ie.UM,
+                 FM: ie.FM,
+                 JM: ie.JM
```

#### 984. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10331-L10336` → after: `L10331-L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336) · [Before (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336)

```diff
-               tD: OB.tD,
-               BQ: OB.BQ,
-               xD: OB.xD,
-               YQ: null === GB || void 0 === GB ? void 0 : GB.YQ,
-               shallowClusterY: null === GB || void 0 === GB ? void 0 : GB.DQ,
-               deepClusterY: null === GB || void 0 === GB ? void 0 : GB.QQ
+               RM: ie.RM,
+               kM: ie.kM,
+               oM: ie.oM,
+               TM: null === He || void 0 === He ? void 0 : He.TM,
+               shallowClusterY: null === He || void 0 === He ? void 0 : He.pM,
+               deepClusterY: null === He || void 0 === He ? void 0 : He.XM
```

#### 985. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10355` → after: `L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355) · [Before (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355)

```diff
-             const YB = this.heightmapVals.getOrGenerate(BB, OB, QB.c.GroundHeight) - this.surfaceMargin,
+             const ye = this.heightmapVals.getOrGenerate(ee, ie, Me.f.GroundHeight) - this.surfaceMargin,
```

#### 986. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10362` → after: `L10362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362)

```diff
-               BB - QB.floorY + 1 < DB || oB.push(BB === QB.ceilingY ? QB : {
+               ee - Me.floorY + 1 < be || Ke.push(ee === Me.ceilingY ? Me : {
```

#### 987. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10372` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372) · [Before (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372)

```diff
-             this.heightmapVals = BB, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new YB.k(new gO(OB)), this.decoratableCavesCache = new YB.k(new rO(OB, BB, GB, DB))
+             this.heightmapVals = ee, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new ye.q(new Li(ie)), this.decoratableCavesCache = new ye.q(new Ci(ie, ee, He, be))
```

#### 988. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10378` → after: `L10378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378) · [Before (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378)

```diff
-             return this.heightmapVals.getOrGenerate(BB, OB, QB.c.GroundHeight)
+             return this.heightmapVals.getOrGenerate(ee, ie, Me.f.GroundHeight)
```

#### 989. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10397` → after: `L10397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397) · [Before (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397)

```diff
-             wO(BB + yB.offset[0], OB + yB.offset[1], GB + yB.offset[2], QB) && (yB.offset === kO ? oB = yB : jB.push(yB))
+             ui(ee + Fe.offset[0], ie + Fe.offset[1], He + Fe.offset[2], Me) && (Fe.offset === wi ? Ke = Fe : Ue.push(Fe))
```

#### 990. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10399` → after: `L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399) · [Before (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399)

```diff
-           return null !== oB ? oB : 0 === jB.length ? null : jB[Math.floor(DB * jB.length)]
+           return null !== Ke ? Ke : 0 === Ue.length ? null : Ue[Math.floor(be * Ue.length)]
```

#### 991. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10404` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404)

```diff
-             this.pP = OB, this.seed = GB, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.BR = ie, this.seed = He, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 992. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10410` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410)

```diff
-               if (!Number.isInteger(DB.clusterBoxSize) || DB.clusterBoxSize < 2 || DB.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${DB.seedPrefix}" has invalid clusterBoxSize (${DB.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(be.clusterBoxSize) || be.clusterBoxSize < 2 || be.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${be.seedPrefix}" has invalid clusterBoxSize (${be.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 993. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10412` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412)

```diff
-               BB > oB && (oB = BB), jB += Math.max(DB.xD, null !== (yB = DB.YQ) && void 0 !== yB ? yB : DB.xD)
+               ee > Ke && (Ke = ee), Ue += Math.max(be.oM, null !== (Fe = be.TM) && void 0 !== Fe ? Fe : be.oM)
```

#### 994. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10414-L10415` → after: `L10414-L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414-L10415) · [Before (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414-L10415)

```diff
-             if (jB > 1) throw new Error(`Cave decoration cluster chances sum to ${jB} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-             this.pointsGen = new DB.b("caveDeco", 10, !1, !0, GB, 4, OB, null, !0), this.pointsGen.assertReachableFromChunkCentre(OB, oB), this.configs = QB, this.maxHalfBox = oB
+             if (Ue > 1) throw new Error(`Cave decoration cluster chances sum to ${Ue} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             this.pointsGen = new be.e("caveDeco", 10, !1, !0, He, 4, ie, null, !0), this.pointsGen.assertReachableFromChunkCentre(ie, Ke), this.configs = Me, this.maxHalfBox = Ke
```

#### 995. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10419` → after: `L10419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419) · [Before (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419)

```diff
-               QB = this.pP,
+               Me = this.BR,
```

#### 996. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10436` → after: `L10436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436)

```diff
-             for (const jB of QB) jB.y >= GB && jB.y < oB && BB.set(jB.x - OB, jB.y - GB, jB.z - YB, jB.SM)
+             for (const Ue of Me) Ue.y >= He && Ue.y < Ke && ee.set(Ue.x - ie, Ue.y - He, Ue.z - ye, Ue.po)
```

#### 997. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10441` → after: `L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441)

```diff
-             const JB = new zB.d(`${this.seed}|${BB}|${OB}|cluster`),
+             const Je = new ke.i(`${this.seed}|${ee}|${ie}|cluster`),
```

#### 998. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10455` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455)

```diff
-             if (this.scatterClusterCells(BB, qB, OB, NB, oB, JB, RB), !(RB.length < NB.BQ))
+             if (this.scatterClusterCells(ee, Te, ie, Xe, Ke, Je, ze), !(ze.length < Xe.kM))
```

#### 999. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10461` → after: `L10461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461) · [Before (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461)

```diff
-               tD: yB,
+               RM: Fe,
```

#### 1000. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10481` → after: `L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481) · [Before (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481)

```diff
-                     SM: RB.SM
+                     po: ze.po
```

#### 1001. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10495` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495)

```diff
-             this.prefabGenerator = YB, this.seed = void 0, this.pP = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = ye, this.seed = void 0, this.BR = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 1002. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10498` → after: `L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498) · [Before (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498)

```diff
-             if (GB + this.pP <= oB.t.bedrockLevel) return {
+             if (He + this.BR <= Ke.s.bedrockLevel) return {
```

#### 1003. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10501)

```diff
-             const WB = new PB.c,
+             const Be = new Re.b,
```

#### 1004. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10505-L10507` → after: `L10505-L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507) · [Before (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507)

```diff
-             if (VB >= GB && AB < GB + this.pP)
-               for (let YB = OB; YB < OB + this.pP; YB++)
-                 for (let yB = DB; yB < DB + this.pP; yB++) {
+             if (ge >= He && Ee < He + this.BR)
+               for (let ye = ie; ye < ie + this.BR; ye++)
+                 for (let Fe = be; Fe < be + this.BR; Fe++) {
```

#### 1005. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10510-L10512` → after: `L10510-L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512) · [Before (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512)

```diff
-                     PB = jB.get(YB, yB, QB.c.GroundHeight);
-                   if (PB >= GB && PB < GB + this.pP) {
-                     const JB = jB.get(YB, yB, QB.c.IsLake) === oB.i ? MB.getDryBedBlock(YB, PB, yB) : MB.getTopsoilBlock(YB, PB, yB);
+                     Re = Ue.get(ye, Fe, Me.f.GroundHeight);
+                   if (Re >= He && Re < He + this.BR) {
+                     const Je = Ue.get(ye, Fe, Me.f.IsLake) === Ke.i ? oe.getDryBedBlock(ye, Re, Fe) : oe.getTopsoilBlock(ye, Re, Fe);
```

#### 1006. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10516-L10518` → after: `L10516-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518) · [Before (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518)

```diff
-             if (VB + 1 >= GB && AB - 4 < GB + this.pP)
-               for (let YB = OB; YB < OB + this.pP; YB++)
-                 for (let oB = DB; oB < DB + this.pP; oB++) {
+             if (ge + 1 >= He && Ee - 4 < He + this.BR)
+               for (let ye = ie; ye < ie + this.BR; ye++)
+                 for (let Ke = be; Ke < be + this.BR; Ke++) {
```

#### 1007. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10521-L10522` → after: `L10521-L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522) · [Before (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522)

```diff
-                     MB = jB.get(YB, oB, QB.c.GroundHeight),
-                     PB = Math.min(MB, GB + this.pP);
+                     oe = Ue.get(ye, Ke, Me.f.GroundHeight),
+                     Re = Math.min(oe, He + this.BR);
```

#### 1008. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10530-L10531` → after: `L10530-L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531) · [Before (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531)

```diff
-               for (let GB = Math.max(DB - 4, 0); GB < Math.min(DB, this.pP); GB++) BB.set(OB, GB, QB, this.dirtId);
-               DB >= 0 && DB < this.pP && BB.set(OB, DB, QB, this.grassBlockId)
+               for (let He = Math.max(be - 4, 0); He < Math.min(be, this.BR); He++) ee.set(ie, He, Me, this.dirtId);
+               be >= 0 && be < this.BR && ee.set(ie, be, Me, this.grassBlockId)
```

#### 1009. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10535-L10536` → after: `L10535-L10536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536) · [Before (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536)

```diff
-               for (let oB = OB; oB < OB + this.pP; oB++)
-                 for (let yB = DB; yB < DB + this.pP; yB++) {
+               for (let Ke = ie; Ke < ie + this.BR; Ke++)
+                 for (let Fe = be; Fe < be + this.BR; Fe++) {
```

#### 1010. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10538-L10539` → after: `L10538-L10539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539) · [Before (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539)

```diff
-                     MB = jB.get(oB, yB, QB.c.GroundHeight),
-                     PB = Math.min(MB - 4, GB + this.pP),
+                     oe = Ue.get(Ke, Fe, Me.f.GroundHeight),
+                     Re = Math.min(oe - 4, He + this.BR),
```

#### 1011. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10544` → after: `L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544) · [Before (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544)

```diff
-                     BB.set(oB - OB, YB - GB, yB - DB, 0 !== QB ? QB : JB)
+                     ee.set(Ke - ie, ye - He, Fe - be, 0 !== Me ? Me : Je)
```

#### 1012. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10548-L10550` → after: `L10548-L10550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550) · [Before (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550)

```diff
-             if (VB - 4 >= GB && this.oreGenerator.addOresToChunk(BB, OB, GB, DB, 4, jB, pB), VB >= GB && (yB.d.addCavesToChunk(BB, OB, GB, DB, jB, lB), cO.addCaveDecorationsToChunk(BB, OB, GB, DB, this.pP, NB)), oB.t.bedrockLevel >= GB && oB.t.bedrockLevel < GB + this.pP)
-               for (let YB = OB; YB < OB + this.pP; YB++)
-                 for (let QB = DB; QB < DB + this.pP; QB++) BB.set(YB - OB, oB.t.bedrockLevel - GB, QB - DB, this.bedrockId);
+             if (ge - 4 >= He && this.oreGenerator.addOresToChunk(ee, ie, He, be, 4, Ue, fe), ge >= He && (Fe.e.addCavesToChunk(ee, ie, He, be, Ue, qe), li.addCaveDecorationsToChunk(ee, ie, He, be, this.BR, Xe)), Ke.s.bedrockLevel >= He && Ke.s.bedrockLevel < He + this.BR)
+               for (let ye = ie; ye < ie + this.BR; ye++)
+                 for (let Me = be; Me < be + this.BR; Me++) ee.set(ye - ie, Ke.s.bedrockLevel - He, Me - be, this.bedrockId);
```

#### 1013. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10553-L10555` → after: `L10553-L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555) · [Before (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555)

```diff
-               for (let QB = OB; QB < OB + this.pP; QB++)
-                 for (let oB = GB; oB < GB + this.pP; oB++)
-                   for (let jB = DB; jB < DB + this.pP; jB++) {
+               for (let Me = ie; Me < ie + this.BR; Me++)
+                 for (let Ke = He; Ke < He + this.BR; Ke++)
+                   for (let Ue = be; Ue < be + this.BR; Ue++) {
```

#### 1014. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10566-L10567` → after: `L10566-L10567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567) · [Before (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567)

```diff
-               for (let GB = Math.max(QB, 0); GB < Math.min(oB, this.pP); GB++) BB.set(OB, GB, DB, this.waterId);
-               oB >= 0 && oB < this.pP && BB.set(OB, oB, DB, UB[YB + 4])
+               for (let He = Math.max(Me, 0); He < Math.min(Ke, this.BR); He++) ee.set(ie, He, be, this.waterId);
+               Ke >= 0 && Ke < this.BR && ee.set(ie, Ke, be, We[ye + 4])
```

#### 1015. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10570-L10575` → after: `L10570-L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575) · [Before (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575)

```diff
-             if (this.addSurfaceBlocks(BB, GB, RB.lilyPads), SB && VB >= GB && AB < GB + this.pP)
-               for (let yB = OB; yB < OB + this.pP; yB++)
-                 for (let JB = DB; JB < DB + this.pP; JB++) {
-                   const MB = jB.get(yB, JB, QB.c.WaterHeight),
-                     PB = jB.get(yB, JB, QB.c.GroundHeight);
-                   if (MB !== oB.p && PB >= GB && PB < GB + this.pP)
+             if (this.addSurfaceBlocks(ee, He, ze.lilyPads), Oe && ge >= He && Ee < He + this.BR)
+               for (let Fe = ie; Fe < ie + this.BR; Fe++)
+                 for (let Je = be; Je < be + this.BR; Je++) {
+                   const oe = Ue.get(Fe, Je, Me.f.WaterHeight),
+                     Re = Ue.get(Fe, Je, Me.f.GroundHeight);
+                   if (oe !== Ke.q && Re >= He && Re < He + this.BR)
```

#### 1016. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10579` → after: `L10579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579) · [Before (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579)

```diff
-                       if ((0, YB.J)(QB, yB, JB) < 100) fB === QB[0] && dB === QB[1] || (fB = QB[0], dB = QB[1], KB = new zB.d(`${this.seed}${fB}${dB}`).next() < .3 ? this.chalkId : this.clayId), BB.set(yB - OB, PB - GB, JB - DB, KB), PB - 1 >= GB && BB.set(yB - OB, PB - 1 - GB, J … [truncated]
+                       if ((0, ye.G)(Me, Fe, Je) < 100) te === Me[0] && we === Me[1] || (te = Me[0], we = Me[1], De = new ke.i(`${this.seed}${te}${we}`).next() < .3 ? this.chalkId : this.clayId), ee.set(Fe - ie, Re - He, Je - be, De), Re - 1 >= He && ee.set(Fe - ie, Re - 1 - He, J … [truncated]
```

#### 1017. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10588-L10590` → after: `L10588-L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10588-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10590) · [Before (L10588-L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10590)

```diff
-               for (let QB = OB; QB < OB + this.pP; QB++)
-                 for (let oB = GB; oB < GB + this.pP; oB++)
-                   for (let jB = DB; jB < DB + this.pP; jB++) {
+               for (let Me = ie; Me < ie + this.BR; Me++)
+                 for (let Ke = He; Ke < He + this.BR; Ke++)
+                   for (let Ue = be; Ue < be + this.BR; Ue++) {
```

#### 1018. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10612` → after: `L10612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612) · [Before (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612)

```diff
-               DB >= 0 && DB < this.pP && BB.set(GB[YB], DB, GB[YB + 2], GB[YB + 3])
+               be >= 0 && be < this.BR && ee.set(He[ye], be, He[ye + 2], He[ye + 3])
```

#### 1019. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10626` → after: `L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626) · [Before (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626)

```diff
-             this.pP = BB, this.biomeSelector = OB, this.seed = GB, this.random = new zB.d(""), this.lilyPadId = void 0, this.lilyPadId = YB["Lily Pad"].id
+             this.BR = ee, this.biomeSelector = ie, this.seed = He, this.random = new ke.i(""), this.lilyPadId = void 0, this.lilyPadId = ye["Lily Pad"].id
```

#### 1020. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10636-L10637` → after: `L10636-L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637) · [Before (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637)

```diff
-             for (let ZB = BB; ZB < BB + this.pP; ZB++)
-               for (let NB = OB; NB < OB + this.pP; NB++) {
+             for (let pe = ee; pe < ee + this.BR; pe++)
+               for (let Xe = ie; Xe < ie + this.BR; Xe++) {
```

#### 1021. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10639-L10640` → after: `L10639-L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640) · [Before (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640)

```diff
-                   WB = GB.getOrGenerate(ZB, NB, QB.c.GroundHeight),
-                   AB = GB.getOrGenerate(ZB, NB, QB.c.WaterHeight);
+                   Be = He.getOrGenerate(pe, Xe, Me.f.GroundHeight),
+                   Ee = He.getOrGenerate(pe, Xe, Me.f.WaterHeight);
```

#### 1022. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10644-L10645` → after: `L10644-L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645) · [Before (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645)

```diff
-                 if (AB !== oB.p) {
-                   qB = !0, WB < AB && JB.push(VB, SB, WB + 1, AB, RB.topwaterBlockType), RB.hasScatteredLakes && 1 === GB.getOrGenerate(ZB, NB, QB.c.IsLake) && (this.random.reseed(`${ZB}|${NB}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(ZB, NB, GB) && PB … [truncated]
+                 if (Ee !== Ke.q) {
+                   Te = !0, Be < Ee && Je.push(ge, Oe, Be + 1, Ee, ze.topwaterBlockType), ze.hasScatteredLakes && 1 === He.getOrGenerate(pe, Xe, Me.f.IsLake) && (this.random.reseed(`${pe}|${Xe}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(pe, Xe, He) && Re … [truncated]
```

#### 1023. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10649-L10650` → after: `L10649-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650) · [Before (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650)

```diff
-                 if (RB.hasScatteredLakes && this.isBesideLake(ZB, NB, GB) && (this.random.reseed(`${ZB}|${NB}|${this.seed}oasisShore`), this.random.next() < .85 && (MB.push(VB, WB, SB), nB = this.biomeSelector.baseBiome.floraGenerator)), !yB.d.isInCave(ZB, WB, NB, YB) && !kB.b.is … [truncated]
-                   for (let GB = WB + 1; GB <= WB + RB.maxFloraHeight; GB += this.pP) zB.startY = GB, nB.addBiomeFloraToColumn(zB, BB, OB, ZB, GB, NB, WB)
+                 if (ze.hasScatteredLakes && this.isBesideLake(pe, Xe, He) && (this.random.reseed(`${pe}|${Xe}|${this.seed}oasisShore`), this.random.next() < .85 && (oe.push(ge, Be, Oe), de = this.biomeSelector.baseBiome.floraGenerator)), !Fe.e.isInCave(pe, Be, Xe, ye) && !Ze.b.is … [truncated]
+                   for (let He = Be + 1; He <= Be + ze.maxFloraHeight; He += this.BR) ke.startY = He, de.addBiomeFloraToColumn(ke, ee, ie, pe, He, Xe, Be)
```

#### 1024. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663)

```diff
-             return GB.getOrGenerate(BB + 1, OB, QB.c.WaterHeight) !== oB.p && GB.getOrGenerate(BB - 1, OB, QB.c.WaterHeight) !== oB.p && GB.getOrGenerate(BB, OB + 1, QB.c.WaterHeight) !== oB.p && GB.getOrGenerate(BB, OB - 1, QB.c.WaterHeight) !== oB.p
+             return He.getOrGenerate(ee + 1, ie, Me.f.WaterHeight) !== Ke.q && He.getOrGenerate(ee - 1, ie, Me.f.WaterHeight) !== Ke.q && He.getOrGenerate(ee, ie + 1, Me.f.WaterHeight) !== Ke.q && He.getOrGenerate(ee, ie - 1, Me.f.WaterHeight) !== Ke.q
```

#### 1025. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10669` → after: `L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669) · [Before (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669)

```diff
-             return GB.getOrGenerate(BB, OB, QB.c.WaterHeight) !== oB.p && 1 === GB.getOrGenerate(BB, OB, QB.c.IsLake)
+             return He.getOrGenerate(ee, ie, Me.f.WaterHeight) !== Ke.q && 1 === He.getOrGenerate(ee, ie, Me.f.IsLake)
```

#### 1026. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10672` → after: `L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672)

```diff
-         var bO = GB(40700);
+         var Ii = He(40777);
```

#### 1027. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-             if (this.pP = BB, this.hashChunkContents = PB, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.BR = ee, this.hashChunkContents = Re, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 1028. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10679` → after: `L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679) · [Before (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679)

```diff
-               CO = new qO.b("chunk columns", BB, 4e4)
+               Ni = new Ti.e("chunk columns", ee, 4e4)
```

#### 1029. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10681-L10682` → after: `L10681-L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682) · [Before (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682)

```diff
-             this.chunkColumnInfos = CO.partition(), this.caveGenerator = new yB.d(DB, BB, OB, null !== (zB = null === JB || void 0 === JB ? void 0 : JB.hD.eD) && void 0 !== zB ? zB : "Lava");
-             const WB = new UO(OB, DB, BB, null !== (lB = null === JB || void 0 === JB ? void 0 : JB.lQ) && void 0 !== lB ? lB : [...nO, ...null !== (pB = null === MB || void 0 === MB ? void 0 : MB.VQ) && void 0 !== pB ? pB : []]),
+             this.chunkColumnInfos = Ni.partition(), this.caveGenerator = new Fe.e(be, ee, ie, null !== (ke = null === Je || void 0 === Je ? void 0 : Je.HM.bM) && void 0 !== ke ? ke : "Lava");
+             const Be = new ti(ie, be, ee, null !== (qe = null === Je || void 0 === Je ? void 0 : Je.WM) && void 0 !== qe ? qe : [...Wi, ...null !== (fe = null === oe || void 0 === oe ? void 0 : oe.VM) && void 0 !== fe ? fe : []]),
```

#### 1030. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10684` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684)

```diff
-                 pP: BB,
+                 BR: ee,
```

#### 1031. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10692-L10694` → after: `L10692-L10694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10692-L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10694) · [Before (L10692-L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10694)

```diff
-               VB = null !== (qB = null === JB || void 0 === JB ? void 0 : JB.oQ) && void 0 !== qB ? qB : null,
-               SB = null !== (ZB = null === MB || void 0 === MB ? void 0 : MB.buildBiomes) && void 0 !== ZB ? ZB : null,
-               nB = null !== VB ? (0, fO.i)(VB, AB) : null !== SB ? this.buildTerrainBiomes(SB, AB) : (0, fO.k)(AB);
+               ge = null !== (Te = null === Je || void 0 === Je ? void 0 : Je.zM) && void 0 !== Te ? Te : null,
+               Oe = null !== (pe = null === oe || void 0 === oe ? void 0 : oe.buildBiomes) && void 0 !== pe ? pe : null,
+               de = null !== ge ? (0, Zi.f)(ge, Ee) : null !== Oe ? this.buildTerrainBiomes(Oe, Ee) : (0, Zi.j)(Ee);
```

#### 1032. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10697` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697)

```diff
-               pP: BB,
+               BR: ee,
```

#### 1033. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10701` → after: `L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701) · [Before (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701)

```diff
-                 [QB.j.SURFACE]: {
+                 [Me.l.SURFACE]: {
```

#### 1034. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10703` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703)

```diff
-                     [QB.h.MEDIUM]: {
+                     [Me.k.MEDIUM]: {
```

#### 1035. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10706` → after: `L10706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706) · [Before (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706)

```diff
-                     [QB.h.HIGH]: {
+                     [Me.k.HIGH]: {
```

#### 1036. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10709` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709)

```diff
-                     [QB.h.VERY_HIGH]: {
+                     [Me.k.VERY_HIGH]: {
```

#### 1037. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-                 [QB.j.UNDERGROUND]: {
+                 [Me.l.UNDERGROUND]: {
```

#### 1038. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10716` → after: `L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10716) · [Before (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10716)

```diff
-                     [QB.h.MEDIUM]: {
+                     [Me.k.MEDIUM]: {
```

#### 1039. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10719-L10720` → after: `L10719-L10720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720) · [Before (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720)

```diff
-                     [QB.h.HIGH]: null,
-                     [QB.h.VERY_HIGH]: null
+                     [Me.k.HIGH]: null,
+                     [Me.k.VERY_HIGH]: null
```

#### 1040. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10725` → after: `L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725)

```diff
-             }), this.noWaterHeightmapGenerator = new bO.d((0, bO.e)(DB)), this.heightmapPerturb = new YB.h([{
+             }), this.noWaterHeightmapGenerator = new Ii.c((0, Ii.e)(be)), this.heightmapPerturb = new ye.i([{
```

#### 1041. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10734` → after: `L10734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734) · [Before (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734)

```diff
-             }], `${DB}HeightmapPerturb`);
+             }], `${be}HeightmapPerturb`);
```

#### 1042. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10740` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740) · [Before (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740)

```diff
-             this.waterBodyGenerator = new AO(this.biomeSelector, this.noWaterHeightmapGenerator, DB, BB, UB, this.needOutsideWaterDist, oB, null === (NB = null === JB || void 0 === JB ? void 0 : JB.cD) || void 0 === NB || NB), this.caveDecorationGenerator = new cO(OB, BB, DB, nul … [truncated]
+             this.waterBodyGenerator = new gi(this.biomeSelector, this.noWaterHeightmapGenerator, be, ee, We, this.needOutsideWaterDist, Ke, null === (Xe = null === Je || void 0 === Je ? void 0 : Je.iM) || void 0 === Xe || Xe), this.caveDecorationGenerator = new li(ie, ee, be, nul … [truncated]
```

#### 1043. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10759` → after: `L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759) · [Before (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759)

```diff
-             const GB = this.pP,
+             const He = this.BR,
```

#### 1044. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777)

```diff
-               if ((null !== (DB = YB.get(QB.key)) && void 0 !== DB ? DB : QB) !== QB) throw new Error(`A world-gen terrain built two biomes keyed "${QB.key}"`);
+               if ((null !== (be = ye.get(Me.key)) && void 0 !== be ? be : Me) !== Me) throw new Error(`A world-gen terrain built two biomes keyed "${Me.key}"`);
```

#### 1045. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10787-L10788` → after: `L10787-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788) · [Before (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788)

```diff
-               const BB = `${Math.floor(yB.x/this.pP)}|${Math.floor(yB.z/this.pP)}`,
-                 OB = null !== (oB = QB.get(BB)) && void 0 !== oB ? oB : [];
+               const ee = `${Math.floor(Fe.x/this.BR)}|${Math.floor(Fe.z/this.BR)}`,
+                 ie = null !== (Ke = Me.get(ee)) && void 0 !== Ke ? Ke : [];
```

#### 1046. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10793-L10794` → after: `L10793-L10794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794) · [Before (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794)

```diff
-               const BB = Math.floor(yB[0].x / this.pP) * this.pP,
-                 OB = Math.floor(yB[0].z / this.pP) * this.pP,
+               const ee = Math.floor(Fe[0].x / this.BR) * this.BR,
+                 ie = Math.floor(Fe[0].z / this.BR) * this.BR,
```

#### 1047. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815)

```diff
-                   iD: JB.prefab.name
+                   Ib: Je.prefab.name
```

#### 1048. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-               MB = YB.getOrGenerate(BB + Math.floor(this.pP / 2), OB + Math.floor(this.pP / 2))[0].biome.oreGenerator.getOreBlocksForChunk(BB, OB),
+               oe = ye.getOrGenerate(ee + Math.floor(this.BR / 2), ie + Math.floor(this.BR / 2))[0].biome.oreGenerator.getOreBlocksForChunk(ee, ie),
```

#### 1049. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10866` → after: `L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866)

```diff
-             return YB.o.create(this.pP, [BB, OB], this.biomeSelector)
+             return ye.u.create(this.BR, [ee, ie], this.biomeSelector)
```

#### 1050. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10869-L10870` → after: `L10869-L10870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870) · [Before (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870)

```diff
-             const oB = new bO.c(GB, DB, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-             return YB.l.create(this.pP, [BB, OB], QB.c.NumFields, oB)
+             const Ke = new Ii.b(He, be, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+             return ye.s.create(this.BR, [ee, ie], Me.f.NumFields, Ke)
```

#### 1051. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874)

```diff
-       40706: (BB, OB, GB) => {
+       40783: (ee, ie, He) => {
```

#### 1052. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10877-L10884` → after: `L10878-L10883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10878-L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10878-L10883) · [Before (L10877-L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10877-L10884)

```diff
-           g: () => fB,
-           h: () => nB,
-           j: () => UB,
-           k: () => mB,
-           l: () => LB,
-           o: () => uB,
-           p: () => AB,
-           t: () => WB,
+           i: () => de,
+           m: () => We,
+           q: () => Ae,
+           s: () => ce,
+           u: () => Pe,
+           v: () => Ee,
```

#### 1053. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10887-L10889` → after: `L10888-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10888-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10888-L10889) · [Before (L10887-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10887-L10889)

```diff
-           E: () => VB,
-           H: () => RB,
-           J: () => NB
+           C: () => ze,
+           G: () => Xe
```

#### 1054. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10891` → after: `L10891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891) · [Before (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891)

```diff
-         var YB = GB(3166),
+         var ye = He(3066),
```

#### 1055. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10904` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904)

```diff
-             const OB = "function" == typeof BB ? BB : function(BB) {
+             const ie = "function" == typeof ee ? ee : function(ee) {
```

#### 1056. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11113` → after: `L11113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113) · [Before (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113)

```diff
-         var pB = GB(40711);
+         var fe = He(40789);
```

#### 1057. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11142` → after: `L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142) · [Before (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142)

```diff
-             IM: RB(BB, QB, oB),
+             Po: ze(ee, Me, Ke),
```

#### 1058. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11173` → after: `L11173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173) · [Before (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173)

```diff
-             for (let GB = 0; GB < BB.length; GB++) this._simplexes.push(new lB(`${OB}${GB}`))
+             for (let He = 0; He < ee.length; He++) this._simplexes.push(new qe(`${ie}${He}`))
```

#### 1059. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11198` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198)

```diff
-             for (let DB = 0; DB < BB.length; DB++) this._simplexes.push(new lB(`${GB}${DB}`));
+             for (let be = 0; be < ee.length; be++) this._simplexes.push(new qe(`${He}${be}`));
```

#### 1060. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11206` → after: `L11206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11206) · [Before (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11206)

```diff
-               if (GB - this.remainingAmplitudes[YB] > this.threshold.high || GB + this.remainingAmplitudes[YB] < this.threshold.low) return pB.d;
+               if (He - this.remainingAmplitudes[ye] > this.threshold.high || He + this.remainingAmplitudes[ye] < this.threshold.low) return fe.b;
```

#### 1061. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11334` → after: `L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334)

```diff
-             if (void 0 === YB) throw new Error(`Number not found for x=${BB}, z=${OB}, thirdIndex=${GB}`);
+             if (void 0 === ye) throw new Error(`Number not found for x=${ee}, z=${ie}, thirdIndex=${He}`);
```

#### 1062. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383)

```diff
-             if (void 0 === DB) throw new Error(`Number not found for x=${BB}, z=${OB}, thirdIndex=${GB}, fourthIndex=${YB}`);
+             if (void 0 === be) throw new Error(`Number not found for x=${ee}, z=${ie}, thirdIndex=${He}, fourthIndex=${ye}`);
```

#### 1063. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413` → after: `L11413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413)

```diff
-       40711: (BB, OB, GB) => {
+       40789: (ee, ie, He) => {
```

#### 1064. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11415-L11416` → after: `L11415-L11416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11415-L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11415-L11416) · [Before (L11415-L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11415-L11416)

```diff
-           d: () => yB,
-           f: () => oB,
+           b: () => Fe,
+           e: () => Ke,
```

#### 1065. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11418-L11419` → after: `L11418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11418) · [Before (L11418-L11419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11418-L11419)

```diff
-           l: () => QB,
-           o: () => jB,
+           m: () => Me,
```

#### 1066. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11421` → after: `L11420-L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11420-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11420-L11421) · [Before (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11421)

```diff
-           t: () => YB
+           q: () => be,
+           s: () => ye
```

#### 1067. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       40717: (BB, OB, GB) => {
+       40792: (ee, ie, He) => {
```

#### 1068. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11439-L11441` → after: `L11437-L11441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11437-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11437-L11441) · [Before (L11439-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11439-L11441)

```diff
-           h: () => jB,
-           j: () => oB,
-           n: () => QB
+           f: () => ye,
+           i: () => Fe,
+           k: () => Ue,
+           l: () => Ke,
+           o: () => Me
```

#### 1069. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11460` → after: `L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460)

```diff
-       4656: (BB, OB, GB) => {
+       4605: (ee, ie, He) => {
```

#### 1070. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11462-L11464` → after: `L11462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11462) · [Before (L11462-L11464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11462-L11464)

```diff
-           b: () => yB,
-           c: () => QB,
-           d: () => YB,
+           e: () => Fe,
```

#### 1071. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11466-L11467` → after: `L11464-L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11464-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11464-L11467) · [Before (L11466-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11466-L11467)

```diff
-           j: () => oB,
-           l: () => DB
+           i: () => ye,
+           k: () => Ue,
+           l: () => Ke,
+           o: () => be
```

#### 1072. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11493` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493)

```diff
-             if (this.distribution = void 0, BB.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(BB)}`);
+             if (this.distribution = void 0, ee.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(ee)}`);
```

#### 1073. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11498` → after: `L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11498) · [Before (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11498)

```diff
-               if (OB.has(YB)) throw new Error(`Values must be unique: ${JSON.stringify(BB)}`);
+               if (ie.has(ye)) throw new Error(`Values must be unique: ${JSON.stringify(ee)}`);
```

#### 1074. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11501` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11501) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11501)

```diff
-               if (QB <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(BB)}`);
+               if (Me <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(ee)}`);
```

#### 1075. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, BB > OB) throw new Error(`Min must be less than or equal to Max, but Min=${BB} and Max=${OB}`);
+             if (this.offset = void 0, this.multiplier = void 0, ee > ie) throw new Error(`Min must be less than or equal to Max, but Min=${ee} and Max=${ie}`);
```

#### 1076. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new oB(BB, OB, GB), !Number.isInteger(BB) || !Number.isInteger(OB)) throw new Error(`Min and Max must be integers, but Min=${BB} and Max=${OB}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new Ke(ee, ie, He), !Number.isInteger(ee) || !Number.isInteger(ie)) throw new Error(`Min and Max must be integers, but Min=${ee} and Max=${ie}`)
```

#### 1077. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11552` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552)

```diff
-       641: (BB, OB, GB) => {
+       610: (ee, ie, He) => {
```

#### 1078. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11554` → after: `L11554-L11556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11554-L11556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11554-L11556) · [Before (L11554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11554)

```diff
-           C: () => zB,
+           A: () => Me,
+           B: () => ke,
+           D: () => Je,
```

#### 1079. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11556-L11559` → after: `L11558-L11560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11558-L11560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11558-L11560) · [Before (L11556-L11559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11556-L11559)

```diff
-           G: () => lB,
-           J: () => pB,
-           Q: () => yB,
-           V: () => PB,
+           I: () => fe,
+           P: () => Fe,
+           W: () => Re,
```

#### 1080. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11561-L11563` → after: `L11562-L11563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11562-L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11562-L11563) · [Before (L11561-L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11561-L11563)

```diff
-           m: () => oB,
-           p: () => DB,
-           z: () => QB
+           k: () => Ke,
+           n: () => be
```

#### 1081. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11565` → after: `L11565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565)

```diff
-         var YB = GB(645);
+         var ye = He(618);
```

#### 1082. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11603` → after: `L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603) · [Before (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603)

```diff
-       645: (BB, OB, GB) => {
+       618: (ee, ie, He) => {
```

#### 1083. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11609` → after: `L11609-L11613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11609-L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609-L11613) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609)

```diff
-       217: BB => {
+       213: (ee, ie, He) => {
+         var ye = {
+           "./localConfigValues.ts.clientRelease": 216
+         };
+ 
```

#### 1084. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11611-L11612` → after: `L11615-L11624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11615-L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11615-L11624) · [Before (L11611-L11612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11611-L11612)

```diff
-           var OB = new Error("Cannot find module '" + BB + "'");
-           throw OB.code = "MODULE_NOT_FOUND", OB
+           var ie = Me(ee);
+           return He(ie)
+         }
+ 
+         function Me(ee) {
+           if (!He.o(ye, ee)) {
+             var ie = new Error("Cannot find module '" + ee + "'");
+             throw ie.code = "MODULE_NOT_FOUND", ie
+           }
+           return ye[ee]
```

#### 1085. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11614` → after: `L11626-L11631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11626-L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11626-L11631) · [Before (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11614)

```diff
-         OB.keys = () => [], OB.resolve = OB, OB.id = 217, BB.exports = OB
+         be.keys = function() {
+           return Object.keys(ye)
+         }, be.resolve = Me, ee.exports = be, be.id = 213
+       },
+       216: (ee, ie, He) => {
+         ee.exports = He.p + "static/media/localConfigValues.ts.3f6ee800434514cb12b7.clientRelease"
```

#### 1086. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11637-L11642` → after: `L11654-L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11654-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11654-L11659) · [Before (L11637-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11637-L11642)

```diff
-   }, GB.f = {}, GB.e = BB => Promise.all(Object.keys(GB.f).reduce(((OB, YB) => (GB.f[YB](BB, OB), OB)), [])), GB.u = BB => "static/js/gw4e3a." + (81 === BB ? "worldgenTables" : BB) + "." + {
-     81: "f60b6294",
-     84: "ad00df19",
-     85: "e84c663a",
-     86: "4f798c42",
-     87: "65f10b57"
+   }, He.f = {}, He.e = ee => Promise.all(Object.keys(He.f).reduce(((ie, ye) => (He.f[ye](ee, ie), ie)), [])), He.u = ee => "static/js/u88b9b." + (81 === ee ? "worldgenTables" : ee) + "." + {
+     81: "3b6d1420",
+     84: "2c76b7ba",
+     85: "8f7959a3",
+     86: "0a2cd8eb",
+     87: "f902d452"
```

#### 1087. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11717` → after: `L11734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11734) · [Before (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11717)

```diff
-       GB = OB < 0 ? this.length + OB : OB;
+       He = ie < 0 ? this.length + ie : ie;
```

#### 1088. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11732-L11734` → after: `L11749-L11751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11749-L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11749-L11751) · [Before (L11732-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11732-L11734)

```diff
-     iZ: () => wB,
-     LZ: () => EB,
-     sy: () => cB,
+     Sp: () => ve,
+     np: () => ue,
+     vR: () => me,
```

#### 1089. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11737-L11747` → after: `L11754-L11764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11754-L11764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11754-L11764) · [Before (L11737-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11737-L11747)

```diff
-     VP: () => hB,
-     IP: () => aB,
-     FP: () => eB,
-     iP: () => TB,
-     LP: () => bB,
-     gP: () => CB,
-     rP: () => HB,
-     XP: () => vB,
-     hP: () => sB,
-     eP: () => xB,
-     TP: () => tB
+     uR: () => le,
+     mR: () => Se,
+     lR: () => ne,
+     SR: () => je,
+     nR: () => se,
+     jR: () => Ie,
+     sR: () => he,
+     IR: () => Ne,
+     rR: () => Ge,
+     ik: () => re,
+     Hk: () => Qe
```

#### 1090. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11754` → after: `L11771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11771) · [Before (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11754)

```diff
-   var JB = GB(3166),
+   var Je = He(3066),
```

#### 1091. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11790` → after: `L11807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11807) · [Before (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11790)

```diff
-     return null === qB ? "not failed" : `${qB}: ${(BB=ZB)instanceof Error?`${BB.name}: ${BB.message}`:String(BB)}`;
+     return null === Te ? "not failed" : `${Te}: ${(ee=pe)instanceof Error?`${ee.name}: ${ee.message}`:String(ee)}`;
```

#### 1092. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11795` → after: `L11812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11812) · [Before (L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11795)

```diff
-     if (!kB()) throw new Error(`Bloxd wasm is not ready (${dB()}): check isBloxdWasmReady() first`);
+     if (!Ze()) throw new Error(`Bloxd wasm is not ready (${we()}): check isBloxdWasmReady() first`);
```

#### 1093. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11833` → after: `L11850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11850) · [Before (L11833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11833)

```diff
-       hP: DB
+       rR: be
```

#### 1094. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11854` → after: `L11871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11871) · [Before (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11854)

```diff
-     pB = "failed", qB = OB, ZB = BB, NB = !1, console.error(`Bloxd wasm failed (${OB}):`, BB);
+     fe = "failed", Te = ie, pe = ee, Xe = !1, console.error(`Bloxd wasm failed (${ie}):`, ee);
```

#### 1095. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11873-L11874` → after: `L11890-L11891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11890-L11891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11890-L11891) · [Before (L11873-L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11873-L11874)

```diff
-       reserveUpFront: OB => BB().iP(OB),
-       reserveAhead: OB => BB().FP(OB),
+       reserveUpFront: ie => ee().SR(ie),
+       reserveAhead: ie => ee().lR(ie),
```

#### 1096. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11876` → after: `L11893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11893) · [Before (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11876)

```diff
-         BB().LP(OB)
+         ee().nR(ie)
```

#### 1097. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11878` → after: `L11895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11895) · [Before (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11878)

```diff
-       lowWater: () => rB[BB().IP()] ?? "none",
+       lowWater: () => Le[ee().mR()] ?? "none",
```

#### 1098. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11901-L11903` → after: `L11918-L11920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11918-L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11918-L11920) · [Before (L11901-L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11901-L11903)

```diff
-       }(BB().gP()),
-       takeBallast: () => BB().rP(),
-       takePressure: () => BB().XP()
+       }(ee().jR()),
+       takeBallast: () => ee().sR(),
+       takePressure: () => ee().IR()
```

#### 1099. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11913` → after: `L11930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11930) · [Before (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11913)

```diff
-       RO.Hm7W(BB, 0)
+       Bi.hpNr(ee, 0)
```

#### 1100. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11916` → after: `L11933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11933) · [Before (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11916)

```diff
-       const OB = MO(BB, RO.ulOE, RO.u7yF),
+       const ie = oi(ee, Bi.zFo9, Bi.ZORC),
```

#### 1101. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11918` → after: `L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11935) · [Before (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11918)

```diff
-       RO.t6QE(this.__wbg_ptr, OB, GB)
+       Bi.CROQ(this.__wbg_ptr, ie, He)
```

#### 1102. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11921` → after: `L11938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11938) · [Before (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11921)

```diff
-       return RO.As39(this.__wbg_ptr) >>> 0
+       return Bi.war1(this.__wbg_ptr) >>> 0
```

#### 1103. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11924` → after: `L11941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11941) · [Before (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11924)

```diff
-       const BB = RO.VLqd();
+       const ee = Bi.wFSc();
```

#### 1104. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11928` → after: `L11945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11945) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11928)

```diff
-       return RO.Vx7W(this.__wbg_ptr) >>> 0
+       return Bi.Ky7g(this.__wbg_ptr) >>> 0
```

#### 1105. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11931` → after: `L11948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11948) · [Before (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11931)

```diff
-       return RO.AVp1(this.__wbg_ptr) >>> 0
+       return Bi.p3yP(this.__wbg_ptr) >>> 0
```

#### 1106. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11934` → after: `L11951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11951) · [Before (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11934)

```diff
-       return RO.DAsI(this.__wbg_ptr) >>> 0
+       return Bi.UMts(this.__wbg_ptr) >>> 0
```

#### 1107. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11945` → after: `L11962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11962) · [Before (L11945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11945)

```diff
-       RO.rPgO(BB, 0)
+       Bi.n2P1(ee, 0)
```

#### 1108. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11948` → after: `L11965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11965) · [Before (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11948)

```diff
-       return RO.r5xm(this.__wbg_ptr, BB) >>> 0
+       return Bi.IrWo(this.__wbg_ptr, ee) >>> 0
```

#### 1109. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11951` → after: `L11968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11968) · [Before (L11951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11951)

```diff
-       return RO.kKoL(this.__wbg_ptr, BB) >>> 0
+       return Bi.zDS5(this.__wbg_ptr, ee) >>> 0
```

#### 1110. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11954` → after: `L11971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11971) · [Before (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11954)

```diff
-       const OB = RO.asvT(void 0 === (GB = BB) || null === GB ? Number.MAX_SAFE_INTEGER : BB >>> 0);
+       const ie = Bi.zXW1(void 0 === (He = ee) || null === He ? Number.MAX_SAFE_INTEGER : ee >>> 0);
```

#### 1111. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11959` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11976) · [Before (L11959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11959)

```diff
-       return RO.sxqO(this.__wbg_ptr) >>> 0
+       return Bi.BVTj(this.__wbg_ptr) >>> 0
```

#### 1112. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11962` → after: `L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11979) · [Before (L11962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11962)

```diff
-       return RO.DPUw(this.__wbg_ptr) >>> 0
+       return Bi.ZUN9(this.__wbg_ptr) >>> 0
```

#### 1113. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11965` → after: `L11982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11982) · [Before (L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11965)

```diff
-       return RO.oc71(this.__wbg_ptr, BB) >>> 0
+       return Bi.lpZo(this.__wbg_ptr, ee) >>> 0
```

#### 1114. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11970` → after: `L11987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11987) · [Before (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11970)

```diff
-     const GB = MO(BB, RO.ulOE, RO.u7yF),
+     const He = oi(ee, Bi.zFo9, Bi.ZORC),
```

#### 1115. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11972` → after: `L11989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11989) · [Before (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11972)

```diff
-       DB = RO.ek9w(GB, YB, OB);
+       be = Bi.Q2Yw(He, ye, ie);
```

#### 1116. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11977` → after: `L11994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11994) · [Before (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11977)

```diff
-     RO.QDEn()
+     Bi.wugl()
```

#### 1117. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11981` → after: `L11998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11998) · [Before (L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11981)

```diff
-     return RO.WBG2() >>> 0
+     return Bi.Qtbn() >>> 0
```

#### 1118. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11985` → after: `L12002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12002) · [Before (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11985)

```diff
-     return 0 !== RO.Vd03(BB)
+     return 0 !== Bi.UAJT(ee)
```

#### 1119. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11989` → after: `L12006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12006) · [Before (L11989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11989)

```diff
-     return 0 !== RO.qWVJ(BB)
+     return 0 !== Bi.rc06(ee)
```

#### 1120. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11993` → after: `L12010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12010) · [Before (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11993)

```diff
-     RO.GdpC(BB)
+     Bi.wrCj(ee)
```

#### 1121. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11997` → after: `L12014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12014) · [Before (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11997)

```diff
-     return RO.PX5G() >>> 0
+     return Bi.EE2a() >>> 0
```

#### 1122. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12001` → after: `L12018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12018) · [Before (L12001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12001)

```diff
-     return RO.FBlC() >>> 0
+     return Bi.bYna() >>> 0
```

#### 1123. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12005` → after: `L12022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12022) · [Before (L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12005)

```diff
-     return 0 !== RO.sf5x()
+     return 0 !== Bi.RVCF()
```

#### 1124. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12009` → after: `L12026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12026) · [Before (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12009)

```diff
-     return RO.emUR() >>> 0
+     return Bi.CdLJ() >>> 0
```

#### 1125. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12015` → after: `L12032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12032) · [Before (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12015)

```diff
-       const GB = RO.lvGC();
+       const He = Bi.dgW1();
```

#### 1126. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12018` → after: `L12035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12035) · [Before (L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12018)

```diff
-       RO.UIxU(BB, OB, 1)
+       Bi.lyNZ(ee, ie, 1)
```

#### 1127. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12023` → after: `L12040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12040) · [Before (L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12023)

```diff
-     RO.yaes(YO(BB))
+     Bi.cH2j(yi(ee))
```

#### 1128. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12029` → after: `L12046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12046) · [Before (L12029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12029)

```diff
-       uVhQ: {
+       olSO: {
```

#### 1129. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12031` → after: `L12048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12048) · [Before (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12031)

```diff
-         ZipG: function(BB, OB) {
+         PyV8: function(ee, ie) {
```

#### 1130. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12034` → after: `L12051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12051) · [Before (L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12034)

```diff
-         ZdgJ: function(BB, OB) {
+         HzvA: function(ee, ie) {
```

#### 1131. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12037` → after: `L12054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12054) · [Before (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12037)

```diff
-         HEz7: function(BB) {
+         ckul: function(ee) {
```

#### 1132. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12040` → after: `L12057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12057) · [Before (L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12040)

```diff
-         eX7h: function(BB, OB) {
+         g5Oq: function(ee, ie) {
```

#### 1133. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12043` → after: `L12060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12060) · [Before (L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12043)

```diff
-         gXG0: function(BB) {
+         cPmq: function(ee) {
```

#### 1134. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12053` → after: `L12070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12070) · [Before (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12053)

```diff
-     } : new FinalizationRegistry((BB => RO.Hm7W(BB, 1))),
+     } : new FinalizationRegistry((ee => Bi.hpNr(ee, 1))),
```

#### 1135. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12057` → after: `L12074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12074) · [Before (L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12057)

```diff
-     } : new FinalizationRegistry((BB => RO.rPgO(BB, 1)));
+     } : new FinalizationRegistry((ee => Bi.n2P1(ee, 1)));
```

#### 1136. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12134` → after: `L12151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12151) · [Before (L12134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12134)

```diff
-     return NO = BB, RO = BB.exports, ZO = OB, QO = null, RO.PNzw(), RO
+     return zi = ee, Bi = ee.exports, Xi = ie, Mi = null, Bi.oVAR(), Bi
```

#### 1137. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12158` → after: `L12175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12175) · [Before (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12158)

```diff
-         if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
+         if (!ee.ok) throw new Error(`failed to fetch Wasm: ${ee.status} ${ee.statusText} fetching '${ee.url}'`);
```

#### 1138. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12188-L12189` → after: `L12205-L12206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12205-L12206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12205-L12206) · [Before (L12188-L12189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12188-L12189)

```diff
-       if (!kB()) throw new Error(`Bloxd wasm is not ready (${dB()}): check isBloxdWasmReady() first`);
-       if (VB !== BB) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${OB}`)
+       if (!Ze()) throw new Error(`Bloxd wasm is not ready (${we()}): check isBloxdWasmReady() first`);
+       if (ge !== ee) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${ie}`)
```

#### 1139. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12192` → after: `L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12209) · [Before (L12192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12192)

```diff
-   var UO = GB(641);
+   var ti = He(610);
```

#### 1140. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12199` → after: `L12216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12216) · [Before (L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12199)

```diff
-       } = GB(40798), lB = function(BB, OB, GB) {
+       } = He(40885), qe = function(ee, ie, He) {
```

#### 1141. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12201` → after: `L12218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12218) · [Before (L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12201)

```diff
-         for (const jB of BB.VQ) IO(jB, GB);
+         for (const Ue of ee.VM) Vi(Ue, He);
```

#### 1142. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12204` → after: `L12221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12221) · [Before (L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12204)

```diff
-           VQ: BB.VQ,
+           VM: ee.VM,
```

#### 1143. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12210` → after: `L12227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12227) · [Before (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12210)

```diff
-           throw new Error(`Custom world-gen terrain "${YB.name}" is not in this generator's catalogue (${BB.length>0?BB.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${ye.name}" is not in this generator's catalogue (${ee.length>0?ee.join(", "):"empty"})`)
```

#### 1144. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12215` → after: `L12232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12232) · [Before (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12215)

```diff
-               if (null !== BB.AQ) throw new Error(`Custom world-gen terrain "${BB.name}" takes no options`);
+               if (null !== ee.YM) throw new Error(`Custom world-gen terrain "${ee.name}" takes no options`);
```

#### 1145. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12219-L12220` → after: `L12236-L12237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12236-L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12236-L12237) · [Before (L12219-L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12219-L12220)

```diff
-             if (null !== BB.AQ) try {
-               GB = JSON.parse(BB.AQ)
+             if (null !== ee.YM) try {
+               He = JSON.parse(ee.YM)
```

#### 1146. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12222` → after: `L12239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12239) · [Before (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12222)

```diff
-               throw new Error(`Custom world-gen terrain "${BB.name}" has invalid optionsJson: ${String(YB)}`, {
+               throw new Error(`Custom world-gen terrain "${ee.name}" has invalid optionsJson: ${String(ye)}`, {
```

#### 1147. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12229` → after: `L12246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12246) · [Before (L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12229)

```diff
-           VQ: BB.VQ,
+           VM: ee.VM,
```

#### 1148. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12232` → after: `L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12249) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12232)

```diff
-       }(null !== (MB = null === jB || void 0 === jB ? void 0 : jB.NQ) && void 0 !== MB ? MB : null, yB, OB);
+       }(null !== (oe = null === Ue || void 0 === Ue ? void 0 : Ue.DM) && void 0 !== oe ? oe : null, Fe, ie);
```

#### 1149. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12234` → after: `L12251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12251) · [Before (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12234)

```diff
-       const pB = null !== (PB = null === jB || void 0 === jB ? void 0 : jB.layers) && void 0 !== PB ? PB : [];
+       const fe = null !== (Re = null === Ue || void 0 === Ue ? void 0 : Ue.layers) && void 0 !== Re ? Re : [];
```

#### 1150. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12237` → after: `L12254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12254) · [Before (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12237)

```diff
-         const GB = [...BB].sort(((BB, OB) => BB.XD - OB.XD));
+         const He = [...ee].sort(((ee, ie) => ee.rb - ie.rb));
```

#### 1151. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12239` → after: `L12256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12256) · [Before (L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12239)

```diff
-           if (GB[YB].XD < GB[YB - 1].wD) throw new Error(`Custom world-gen layers overlap: [${GB[YB-1].XD}, ${GB[YB-1].wD}) and [${GB[YB].XD}, ${GB[YB].wD})`)
+           if (He[ye].rb < He[ye - 1].Qb) throw new Error(`Custom world-gen layers overlap: [${He[ye-1].rb}, ${He[ye-1].Qb}) and [${He[ye].rb}, ${He[ye].Qb})`)
```

#### 1152. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12251` → after: `L12268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12268) · [Before (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12251)

```diff
-         if (GB >= DB.XD && GB < DB.wD) return QB.getChunk(BB, OB, GB - DB.ED, YB);
+         if (He >= be.rb && He < be.Qb) return Me.getChunk(ee, ie, He - be.eM, ye);
```

#### 1153. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12269-L12270` → after: `L12286-L12287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12286-L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12286-L12287) · [Before (L12269-L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12269-L12270)

```diff
-     if (BB.XD >= BB.wD) throw new Error(`Custom world-gen layer has minY (${BB.XD}) >= maxY (${BB.wD})`);
-     if (BB.XD % UO.E !== 0 || BB.wD % UO.E !== 0 || BB.ED % UO.E !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${UO.E}); got minY=${BB.XD}, maxY=${BB.wD}, groundY=${BB.ED}`);
+     if (ee.rb >= ee.Qb) throw new Error(`Custom world-gen layer has minY (${ee.rb}) >= maxY (${ee.Qb})`);
+     if (ee.rb % ti.D !== 0 || ee.Qb % ti.D !== 0 || ee.eM % ti.D !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${ti.D}); got minY=${ee.rb}, maxY=${ee.Qb}, groundY=${ee.eM}`);
```

#### 1154. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12272-L12275` → after: `L12289-L12292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12289-L12292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12289-L12292) · [Before (L12272-L12275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12272-L12275)

```diff
-         if (void 0 === (0, UO.J)(BB.eD, OB)) throw new Error(`Custom world-gen caves lavaPitBlock "${BB.eD}" not found in blockMetadata`);
-         if (BB.TD)
-           for (const GB of BB.TD) dO(GB, OB)
-       }(BB.hD, OB), 0 === BB.oQ.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, ti.I)(ee.bM, ie)) throw new Error(`Custom world-gen caves lavaPitBlock "${ee.bM}" not found in blockMetadata`);
+         if (ee.MM)
+           for (const He of ee.MM) Di(He, ie)
+       }(ee.HM, ie), 0 === ee.zM.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1155. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12277` → after: `L12294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12294) · [Before (L12277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12277)

```diff
-     for (const YB of BB.oQ) mO(YB, OB), GB += YB.frequency;
+     for (const ye of ee.zM) Yi(ye, ie), He += ye.frequency;
```

#### 1156. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12279` → after: `L12296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12296) · [Before (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12279)

```diff
-     for (const YB of BB.lQ) IO(YB, OB)
+     for (const ye of ee.WM) Vi(ye, ie)
```

#### 1157. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12285-L12287` → after: `L12302-L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12302-L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12302-L12304) · [Before (L12285-L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12285-L12287)

```diff
-       CD: YB,
-       vD: DB,
-       sD: QB
+       UM: ye,
+       FM: be,
+       JM: Me
```

#### 1158. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12289-L12290` → after: `L12306-L12307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12306-L12307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12306-L12307) · [Before (L12289-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12289-L12290)

```diff
-     if (void 0 === (0, UO.J)(GB, OB)) throw new Error(`Custom world-gen cave decoration blockName "${GB}" not found in blockMetadata`);
-     if (!YB && !DB && !QB) throw new Error(`Custom world-gen cave decoration "${GB}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, ti.I)(He, ie)) throw new Error(`Custom world-gen cave decoration blockName "${He}" not found in blockMetadata`);
+     if (!ye && !be && !Me) throw new Error(`Custom world-gen cave decoration "${He}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1159. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12293-L12294` → after: `L12310-L12311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12310-L12311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12310-L12311) · [Before (L12293-L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12293-L12294)

```diff
-     if (QB && KO(GB, "meta|rot1|top", OB), uO(BB.xD, GB, "xD"), uO(BB.tD, GB, "tD"), !Number.isInteger(BB.BQ) || BB.BQ < 0) throw new Error(`Custom world-gen cave decoration "${GB}" minPlacements must be a non-negative integer, got ${BB.BQ}`);
-     if (!(0, UO.Q)(BB.OQ) && (uO(BB.OQ.YQ, GB, "depthRamp.deepClusterChance"), BB.OQ.DQ <= BB.OQ.QQ)) throw new Error(`Custom world-gen cave decoration "${GB}" deepY must be strictly smaller than shallowY, but ${BB.OQ.DQ} <= ${BB.OQ.QQ} `)
+     if (Me && Pi(He, "meta|rot1|top", ie), Ai(ee.oM, He, "oM"), Ai(ee.RM, He, "RM"), !Number.isInteger(ee.kM) || ee.kM < 0) throw new Error(`Custom world-gen cave decoration "${He}" minPlacements must be a non-negative integer, got ${ee.kM}`);
+     if (!(0, ti.P)(ee.qM) && (Ai(ee.qM.TM, He, "depthRamp.deepClusterChance"), ee.qM.pM <= ee.qM.XM)) throw new Error(`Custom world-gen cave decoration "${He}" deepY must be strictly smaller than shallowY, but ${ee.qM.pM} <= ${ee.qM.XM} `)
```

#### 1160. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12298-L12299` → after: `L12315-L12316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12315-L12316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12315-L12316) · [Before (L12298-L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12298-L12299)

```diff
-     const YB = `${BB}|${OB}`;
-     if (void 0 === (0, UO.J)(YB, GB)) throw new Error(`Custom world-gen cave decoration "${BB}" is missing directional variant "${YB}" required for wall/ceiling anchoring`)
+     const ye = `${ee}|${ie}`;
+     if (void 0 === (0, ti.I)(ye, He)) throw new Error(`Custom world-gen cave decoration "${ee}" is missing directional variant "${ye}" required for wall/ceiling anchoring`)
```

#### 1161. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12303` → after: `L12320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12320) · [Before (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12303)

```diff
-     if (BB < 0 || BB > 1) throw new Error(`Custom world-gen cave decoration "${OB}" ${GB} must be in [0, 1], got ${BB}`)
+     if (ee < 0 || ee > 1) throw new Error(`Custom world-gen cave decoration "${ie}" ${He} must be in [0, 1], got ${ee}`)
```
