# Changed — Bundle Modifications Report (Part 139 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `139 / 142` (**409** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 138](part-138.md) · [Part 140 →](part-140.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1175 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 750. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7260-L7261` → after: `L7260-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7260-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7260-L7261) · [Before (L7260-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7260-L7261)

```diff
-                     null !== op.pitHeightPerturbNoiseParams && (ep = new Op.j(op.pitHeightPerturbNoiseParams, `${pp}heightPitPerturb${Ip}`));
-                     const jp = new Op.j(op.pitMidpointNoiseParams, `${pp}edgesPitPerturb${Ip}`),
+                     null !== zT.pitHeightPerturbNoiseParams && (bT = new WT.g(zT.pitHeightPerturbNoiseParams, `${TT}heightPitPerturb${MT}`));
+                     const OT = new WT.g(zT.pitMidpointNoiseParams, `${TT}edgesPitPerturb${MT}`),
```

#### 751. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7268` → after: `L7268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7268) · [Before (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7268)

```diff
-                     null !== op.ceilingParams && (Rp = Sp++, qp = new xp.i(op.ceilingParams.minThickness, op.ceilingParams.maxThickness), Dp[Rp] = op.ceilingParams.blockIds), void 0 !== op.priority && (Ap[kp] = op.priority, null !== mp && (Ap[mp] = op.priority), null !== Rp && (A … [truncated]
+                     null !== zT.ceilingParams && (JT = gT++, xT = new nT.l(zT.ceilingParams.minThickness, zT.ceilingParams.maxThickness), jT[JT] = zT.ceilingParams.blockIds), void 0 !== zT.priority && (lT[eT] = zT.priority, null !== YT && (lT[YT] = zT.priority), null !== JT && (l … [truncated]
```

#### 752. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7331)

```diff
-                     Ap = new Op.j(Dp.ravineXZPerturbNoiseParams, `${pp}DistRavPerturb${Sp}`);
+                     lT = new WT.g(jT.ravineXZPerturbNoiseParams, `${TT}DistRavPerturb${gT}`);
```

#### 753. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7334-L7335` → after: `L7334-L7335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7334-L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7334-L7335) · [Before (L7334-L7335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7334-L7335)

```diff
-                   const Wp = new Op.j(Dp.ravineYPerturbNoiseParams, `${pp}yRavinePerturb${Sp}`),
-                     yp = `${pp}RavineGen${Sp}`,
+                   const pT = new WT.g(jT.ravineYPerturbNoiseParams, `${TT}yRavinePerturb${gT}`),
+                     BT = `${TT}RavineGen${gT}`,
```

#### 754. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7338-L7343` → after: `L7338-L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7338-L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7338-L7343) · [Before (L7338-L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7338-L7343)

```diff
-                   console.assert(wp.chunkSearchRadius <= Dp.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${wp.chunkSearchRadius} ${Dp.numChunksBetweenRavines/2}`);
-                   const vp = new xp.i(Dp.ravineMinWidth, Dp.ravineMaxWidth),
-                     tp = new xp.i(Dp.ravineMinLength, Dp.ravineMaxLength),
-                     Hp = new xp.i(Dp.ravineMinFloorY, Dp.ravineMaxFloorY, !0),
-                     dp = new xp.i(Dp.ravineMinHeight, Dp.ravineMaxHeight),
-                     ep = new xp.l(-1, 1);
+                   console.assert(cT.chunkSearchRadius <= jT.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${cT.chunkSearchRadius} ${jT.numChunksBetweenRavines/2}`);
+                   const vT = new nT.l(jT.ravineMinWidth, jT.ravineMaxWidth),
+                     fT = new nT.l(jT.ravineMinLength, jT.ravineMaxLength),
+                     qT = new nT.l(jT.ravineMinFloorY, jT.ravineMaxFloorY, !0),
+                     iT = new nT.l(jT.ravineMinHeight, jT.ravineMaxHeight),
+                     bT = new nT.n(-1, 1);
```

#### 755. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7385` → after: `L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7385) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7385)

```diff
-                     Ap = new Op.j(Dp.sphereXZPerturbNoiseParams, `${pp}DistSpherePerturb${Sp}`);
+                     lT = new WT.g(jT.sphereXZPerturbNoiseParams, `${TT}DistSpherePerturb${gT}`);
```

#### 756. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7388` → after: `L7388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7388) · [Before (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7388)

```diff
-                   const Wp = `${pp}SphereGen${Sp}`,
+                   const pT = `${TT}SphereGen${gT}`,
```

#### 757. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7391-L7393` → after: `L7391-L7393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7391-L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7391-L7393) · [Before (L7391-L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7391-L7393)

```diff
-                   console.assert(Up.chunkSearchRadius <= Dp.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${Up.chunkSearchRadius} ${Dp.numChunksBetweenSpheres/2}`);
-                   const wp = new xp.i(Dp.sphereMinRadius, Dp.sphereMaxRadius, !0),
-                     vp = new xp.i(Dp.sphereMinCentreY, Dp.sphereMaxCentreY);
+                   console.assert(ZT.chunkSearchRadius <= jT.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${ZT.chunkSearchRadius} ${jT.numChunksBetweenSpheres/2}`);
+                   const cT = new nT.l(jT.sphereMinRadius, jT.sphereMaxRadius, !0),
+                     vT = new nT.l(jT.sphereMinCentreY, jT.sphereMaxCentreY);
```

#### 758. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7427-L7428` → after: `L7427-L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7427-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7427-L7428) · [Before (L7427-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7427-L7428)

```diff
-             if (!(0, op.G)(cp)) return cp;
-             const Op = [(0, op.v)(pp), (0, op.v)(ip)],
+             if (!(0, zT.E)(mT)) return mT;
+             const WT = [(0, zT.y)(TT), (0, zT.y)(UT)],
```

#### 759. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7446` → after: `L7446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7446) · [Before (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7446)

```diff
-                   Yp = new xp.h(`pit${Sp}|${Lp}|${op}${this.seed}`),
+                   kT = new nT.k(`pit${gT}|${HT}|${zT}${this.seed}`),
```

#### 760. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7456` → after: `L7456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7456) · [Before (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7456)

```diff
-                   Hp = null !== (cp = null === (Op = Ip.pitCeilingThicknessDistribution) || void 0 === Op ? void 0 : Op.sample(Yp)) && void 0 !== cp ? cp : 0;
+                   qT = null !== (mT = null === (WT = MT.pitCeilingThicknessDistribution) || void 0 === WT ? void 0 : WT.sample(kT)) && void 0 !== mT ? mT : 0;
```

#### 761. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7489` → after: `L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7489) · [Before (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7489)

```diff
-                   Lp = new xp.h(`rav${Ip}|${Sp}|${cp}${this.seed}`),
+                   HT = new nT.k(`rav${MT}|${gT}|${mT}${this.seed}`),
```

#### 762. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7495` → after: `L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7495) · [Before (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7495)

```diff
-                 (0, Op.E)(Wp);
+                 (0, WT.K)(pT);
```

#### 763. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7526` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7526) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7526)

```diff
-                   Sp = new xp.h(`sph${op}|${Ip}|${cp}${this.seed}`),
+                   gT = new nT.k(`sph${zT}|${MT}|${mT}${this.seed}`),
```

#### 764. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7546` → after: `L7546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7546) · [Before (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7546)

```diff
-       39905: (pp, ip, cp) => {
+       39801: (TT, UT, mT) => {
```

#### 765. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7548)

```diff
-           d: () => wp
+           b: () => cT
```

#### 766. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7550-L7552` → after: `L7550-L7552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7550-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7550-L7552) · [Before (L7550-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7550-L7552)

```diff
-         var Op = cp(39903),
-           op = cp(39890),
-           Ip = cp(1664),
+         var WT = mT(39799),
+           zT = mT(39793),
+           MT = mT(1764),
```

#### 767. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7554-L7555` → after: `L7554-L7555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7554-L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7554-L7555) · [Before (L7554-L7555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7554-L7555)

```diff
-           xp = cp(640),
-           Lp = cp(2937),
+           nT = mT(653),
+           HT = mT(2963),
```

#### 768. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7557-L7560` → after: `L7557-L7560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7557-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7557-L7560) · [Before (L7557-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7557-L7560)

```diff
-           Dp = cp(37951),
-           Ap = cp(39910),
-           Pp = cp(39317),
-           Wp = cp(39919);
+           jT = mT(37857),
+           lT = mT(39809),
+           LT = mT(39275),
+           pT = mT(39812);
```

#### 769. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7566` → after: `L7566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7566) · [Before (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7566)

```diff
-             if (!(0, xp.G)(pp)) throw new Error(`Duplicate chunk at ${op.chunkX}, ${op.chunkY}, ${op.chunkZ}`);
+             if (!(0, nT.E)(TT)) throw new Error(`Duplicate chunk at ${zT.chunkX}, ${zT.chunkY}, ${zT.chunkZ}`);
```

#### 770. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7569` → after: `L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7569) · [Before (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7569)

```diff
-           return new Ap.b(pp, {
+           return new lT.d(TT, {
```

#### 771. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7584` → after: `L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7584) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7584)

```diff
-             rle: (0, Wp.b)("EAABgQEHHAGBARcAAR8HAAEf1wcAAYEBBxwBgQEXAAGBAQIcASIDHAEiAYEBFwABHwcAAR+1BwADgQEHHAOBARMAA4EBBxwDgQETAAGIAQKBAQEcAiICHAIiA4EBEwABiAECgQEHAAOBARMAA4EBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAMdBwABHAIdFQABHQcAAh3KBQANgQEHHAiBAQQAAYgBAR0BiAEKgQEHHAiBAQQA … [truncated]
+             rle: (0, pT.d)("EAABgQEHHAGBARcAAR8HAAEf1wcAAYEBBxwBgQEXAAGBAQIcASIDHAEiAYEBFwABHwcAAR+1BwADgQEHHAOBARMAA4EBBxwDgQETAAGIAQKBAQEcAiICHAIiA4EBEwABiAECgQEHAAOBARMAA4EBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAMdBwABHAIdFQABHQcAAh3KBQANgQEHHAiBAQQAAYgBAR0BiAEKgQEHHAiBAQQA … [truncated]
```

#### 772. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7589` → after: `L7589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7589) · [Before (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7589)

```diff
-             rle: (0, Wp.b)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB … [truncated]
+             rle: (0, pT.d)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB … [truncated]
```

#### 773. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7594` → after: `L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7594) · [Before (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7594)

```diff
-             rle: (0, Wp.b)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwAB … [truncated]
+             rle: (0, pT.d)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwAB … [truncated]
```

#### 774. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7599` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7599) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7599)

```diff
-             rle: (0, Wp.b)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI … [truncated]
+             rle: (0, pT.d)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI … [truncated]
```

#### 775. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7609` → after: `L7609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7609) · [Before (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7609)

```diff
-             rle: (0, Wp.b)("IATgBwAHBAwCBwQGAgcADAQHAAYECwABlgG0BwADBBICAwQIAgMAEgQDAAKBAQYCDAABlgELAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAIEHgICABYECAIXAAGWAQWBAQMcGAAFgQEDHBgA … [truncated]
+             rle: (0, pT.d)("IATgBwAHBAwCBwQGAgcADAQHAAYECwABlgG0BwADBBICAwQIAgMAEgQDAAKBAQYCDAABlgELAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAIEHgICABYECAIXAAGWAQWBAQMcGAAFgQEDHBgA … [truncated]
```

#### 776. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7614` → after: `L7614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7614) · [Before (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7614)

```diff
-             rle: (0, Wp.b)("IATgBwAJAgkECAIPBAkACAQEAAGeAQYAAZYBugcADAIEBA0CAwQIAgQEBAANBAMAAxwBHQGIAQOBARsAAYgBA4EBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAHgICBAgCFgQCAAMcBYEBDQABlgEKAAMcBYEBGwABHwOBAQEfHAAD … [truncated]
+             rle: (0, pT.d)("IATgBwAJAgkECAIPBAkACAQEAAGeAQYAAZYBugcADAIEBA0CAwQIAgQEBAANBAMAAxwBHQGIAQOBARsAAYgBA4EBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAHgICBAgCFgQCAAMcBYEBDQABlgEKAAMcBYEBGwABHwOBAQEfHAAD … [truncated]
```

#### 777. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7619` → after: `L7619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7619) · [Before (L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7619)

```diff
-             rle: (0, Wp.b)("AQQfAgEAAQQeAgIAAR0EHBUABBwDAAMcFwADHAQAAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx0AAYgBBIEBHAABzRcBgQEBzRccAASBAQGIARwAAc0XAYEBAc0XHAAFgQGZAgABBB8CAQABBB4CAgABHQQcFQAEHAMAAxwXAAMcBAAB7w8fAAHvDx8A … [truncated]
+             rle: (0, pT.d)("AQQfAgEAAQQeAgIAAR0EHBUABBwDAAMcFwADHAQAAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx0AAYgBBIEBHAABzRcBgQEBzRccAASBAQGIARwAAc0XAYEBAc0XHAAFgQGZAgABBB8CAQABBB4CAgABHQQcFQAEHAMAAxwXAAMcBAAB7w8fAAHvDx8A … [truncated]
```

#### 778. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7624` → after: `L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7624) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7624)

```diff
-             rle: (0, Wp.b)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGB … [truncated]
+             rle: (0, pT.d)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGB … [truncated]
```

#### 779. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7629` → after: `L7629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7629) · [Before (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7629)

```diff
-             this.Qy = ip, this.chunkToFixedPointPrefabs = void 0;
+             this.cB = UT, this.chunkToFixedPointPrefabs = void 0;
```

#### 780. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7633` → after: `L7633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7633) · [Before (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7633)

```diff
-                 DO: op,
+                 om: zT,
```

#### 781. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7640` → after: `L7640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7640) · [Before (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7640)

```diff
-               if (void 0 === pp) throw new Error(`Fixed-point prefab "${op}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
+               if (void 0 === TT) throw new Error(`Fixed-point prefab "${zT}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
```

#### 782. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7691` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7691) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7691)

```diff
-               nearestFixedPrefabInfoForChunk: op.q.create(this.Qy, [pp, ip], Op.h.NumFields, xp)
+               nearestFixedPrefabInfoForChunk: zT.r.create(this.cB, [TT, UT], WT.m.NumFields, nT)
```

#### 783. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7696` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7696) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7696)

```diff
-             const Ip = op.getOrGenerate(pp, ip, Op.h.DistanceToNearestFixedPrefab);
+             const MT = zT.getOrGenerate(TT, UT, WT.m.DistanceToNearestFixedPrefab);
```

#### 784. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7700)

```diff
-             const xp = op.getOrGenerate(pp, ip, Op.h.HeightOfNearestFixedPrefab);
+             const nT = zT.getOrGenerate(TT, UT, WT.m.HeightOfNearestFixedPrefab);
```

#### 785. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7705` → after: `L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7705) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7705)

```diff
-             return cp.getOrGenerate(pp, ip, Op.h.DistanceToNearestFixedPrefab) <= tp
+             return mT.getOrGenerate(TT, UT, WT.m.DistanceToNearestFixedPrefab) <= fT
```

#### 786. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7709` → after: `L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7709) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7709)

```diff
-             return 0 === cp.getOrGenerate(pp, ip, Op.h.DistanceToNearestFixedPrefab)
+             return 0 === mT.getOrGenerate(TT, UT, WT.m.DistanceToNearestFixedPrefab)
```

#### 787. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7727` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7727) · [Before (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7727)

```diff
-             return `${pp}|${ip}`
+             return `${TT}|${UT}`
```

#### 788. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7732` → after: `L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7732) · [Before (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7732)

```diff
-             if (!(0, xp.G)(cp)) return cp;
+             if (!(0, nT.E)(mT)) return mT;
```

#### 789. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7740` → after: `L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7740) · [Before (L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7740)

```diff
-                     Lp = pp.getRLEChunk((0, xp.Q)(Ip), (0, xp.Q)(ip), (0, xp.Q)(cp));
+                     HT = TT.getRLEChunk((0, nT.H)(MT), (0, nT.H)(UT), (0, nT.H)(mT));
```

#### 790. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7779` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7779) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7779)

```diff
-             cp.set(pp, ip, Op.h.DistanceToNearestFixedPrefab, op), cp.set(pp, ip, Op.h.HeightOfNearestFixedPrefab, Ip)
+             mT.set(TT, UT, WT.m.DistanceToNearestFixedPrefab, zT), mT.set(TT, UT, WT.m.HeightOfNearestFixedPrefab, MT)
```

#### 791. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7784` → after: `L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7784) · [Before (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7784)

```diff
-       39881: (pp, ip, cp) => {
+       39788: (TT, UT, mT) => {
```

#### 792. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7787-L7788` → after: `L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7788) · [Before (L7787-L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7787-L7788)

```diff
-           e: () => Lp,
-           h: () => xp
+           e: () => nT
```

#### 793. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7790-L7793` → after: `L7790-L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793) · [Before (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793)

```diff
-         var Op = cp(39890),
-           op = cp(39903),
-           Ip = cp(39894),
-           Sp = cp(39905);
+         var WT = mT(39793),
+           zT = mT(39799),
+           MT = mT(39796),
+           gT = mT(39801);
```

#### 794. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7796` → after: `L7796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7796) · [Before (L7796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7796)

```diff
-           return new Op.j([{
+           return new WT.g([{
```

#### 795. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7802` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7802) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7802)

```diff
-           }], `${pp}GlobalHeightmapOffset`)
+           }], `${TT}GlobalHeightmapOffset`)
```

#### 796. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7838` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7838) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7838)

```diff
-             null !== Wp && (Yp = Wp, Dp = Ip.u, Ap = Wp - Ip.i, Pp = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(pp, ip, op, Sp, cp, Yp, Dp, Ap, Pp)
+             null !== pT && (kT = pT, jT = MT.k, lT = pT - MT.d, LT = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(TT, UT, zT, gT, mT, kT, jT, lT, LT)
```

#### 797. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7851-L7852` → after: `L7851-L7852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7851-L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7851-L7852) · [Before (L7851-L7852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7851-L7852)

```diff
-               Wp = Ip.u,
-               yp = Ip.o,
+               pT = MT.k,
+               BT = MT.h,
```

#### 798. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7862` → after: `L7862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7862) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7862)

```diff
-                 ip < 1 && (Wp = Yp + Math.floor((Lp - Yp) * ip), Pp >= Wp && (Wp = Ip.u, Up = Ip.l))
+                 UT < 1 && (pT = kT + Math.floor((HT - kT) * UT), LT >= pT && (pT = MT.k, ZT = MT.g))
```

#### 799. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7870` → after: `L7870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7870) · [Before (L7870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7870)

```diff
-               yp = Pp - Ip.i
+               BT = LT - MT.d
```

#### 800. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7880-L7881` → after: `L7880-L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7880-L7881) · [Before (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7880-L7881)

```diff
-             const Pp = Sp.d.smoothHeightmapForFixedPointPrefab(Math.round(pp + cp / 4), Math.round(ip + Op / 4), Lp, this.nearestFixedPrefabInfoForChunk);
-             null !== Pp && Yp > (Lp = Pp) && (Yp = Ip.u, Ap = 0), xp.set(pp, ip, op.f.GroundHeight, Lp), xp.set(pp, ip, op.f.WaterHeight, Yp), xp.set(pp, ip, op.f.CavesAllowedBelowY, Dp), xp.set(pp, ip, op.f.IsLake, Ap), this.shouldCurtailCave(pp, ip, null !== Pp) && xp.set(pp, i … [truncated]
+             const LT = gT.b.smoothHeightmapForFixedPointPrefab(Math.round(TT + mT / 4), Math.round(UT + WT / 4), HT, this.nearestFixedPrefabInfoForChunk);
+             null !== LT && kT > (HT = LT) && (kT = MT.k, lT = 0), nT.set(TT, UT, zT.i.GroundHeight, HT), nT.set(TT, UT, zT.i.WaterHeight, kT), nT.set(TT, UT, zT.i.CavesAllowedBelowY, jT), nT.set(TT, UT, zT.i.IsLake, lT), this.shouldCurtailCave(TT, UT, null !== LT) && nT.set(TT, U … [truncated]
```

#### 801. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7893` → after: `L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7893) · [Before (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7893)

```diff
-       39927: (pp, ip, cp) => {
+       39823: (TT, UT, mT) => {
```

#### 802. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7897-L7898` → after: `L7897-L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898) · [Before (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898)

```diff
-         var Op = cp(39890),
-           op = cp(39936),
+         var WT = mT(39793),
+           zT = mT(39826),
```

#### 803. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7900-L7902` → after: `L7900-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902) · [Before (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902)

```diff
-           Sp = cp(4346),
-           xp = cp(39975);
-         const Lp = new xp.b("point cells", 500, 6e4);
+           gT = mT(4333),
+           nT = mT(39867);
+         const HT = new nT.e("point cells", 500, 6e4);
```

#### 804. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7919` → after: `L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919) · [Before (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919)

```diff
-             if (this.gridSize < cp) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${cp} (chunkSize=${pp}, halfBox=${ip}). Points near chunk edges would be missed.`)
+             if (this.gridSize < mT) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${mT} (chunkSize=${TT}, halfBox=${UT}). Points near chunk edges would be missed.`)
```

#### 805. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7926` → after: `L7926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7926) · [Before (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7926)

```diff
-             return !!Op.has((0, xp.f)(pp, ip))
+             return !!WT.has((0, nT.g)(TT, UT))
```

#### 806. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7935` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935)

```diff
-               const cp = (0, Op.H)(Lp, pp, ip);
+               const mT = (0, WT.M)(HT, TT, UT);
```

#### 807. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7964` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964) · [Before (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964)

```diff
-               const pp = (0, Op.H)(Yp, ip, cp);
+               const TT = (0, WT.M)(kT, UT, mT);
```

#### 808. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7976` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976) · [Before (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976)

```diff
-               const Ap = (0, Op.H)(Dp, ip, cp) - Sp;
+               const lT = (0, WT.M)(jT, UT, mT) - gT;
```

#### 809. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009)

```diff
-               const Ip = new Sp.h(`${pp}${ip}${this.seed}jitter`);
+               const MT = new gT.k(`${TT}${UT}${this.seed}jitter`);
```

#### 810. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8020` → after: `L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020) · [Before (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020)

```diff
-               const xp = new Sp.h(`${pp}${ip}${this.seed}pts`),
+               const nT = new gT.k(`${TT}${UT}${this.seed}pts`),
```

#### 811. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8048` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8048) · [Before (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8048)

```diff
-               for (const pp of op) Lp.add((0, xp.f)(pp[0], pp[1]))
+               for (const TT of zT) HT.add((0, nT.g)(TT[0], TT[1]))
```

#### 812. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8052` → after: `L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052)

```diff
-               points: this.useKthClosestPoint ? op : null
+               points: this.useKthClosestPoint ? zT : null
```

#### 813. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8057` → after: `L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057)

```diff
-       39993: (pp, ip, cp) => {
+       39883: (TT, UT, mT) => {
```

#### 814. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8061-L8070` → after: `L8061-L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070) · [Before (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070)

```diff
-         var Op = cp(39890),
-           op = cp(39927),
-           Ip = cp(39903),
-           Sp = cp(39894),
-           xp = cp(37951),
-           Lp = cp(39989),
-           Yp = cp(616),
-           Dp = cp(640),
-           Ap = cp(39317),
-           Pp = cp(4346);
+         var WT = mT(39793),
+           zT = mT(39823),
+           MT = mT(39799),
+           gT = mT(39796),
+           nT = mT(37857),
+           HT = mT(39879),
+           kT = mT(632),
+           jT = mT(653),
+           lT = mT(39275),
+           LT = mT(4333);
```

#### 815. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8085` → after: `L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085) · [Before (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085)

```diff
-             return null !== (ip = Up[this.suffixMapping[pp]]) && void 0 !== ip ? ip : []
+             return null !== (UT = ZT[this.suffixMapping[TT]]) && void 0 !== UT ? UT : []
```

#### 816. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8104` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104)

```diff
-               ip[cp] = (null !== (Sp = ip[cp]) && void 0 !== Sp ? Sp : 0) + 1, ip[cp] >= vp && Op.splice(Op.indexOf(cp), 1)
+               UT[mT] = (null !== (gT = UT[mT]) && void 0 !== gT ? gT : 0) + 1, UT[mT] >= vT && WT.splice(WT.indexOf(mT), 1)
```

#### 817. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171)

```diff
-             return `r${pp}|m${Number(ip)}`
+             return `r${TT}|m${Number(UT)}`
```

#### 818. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8205` → after: `L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205) · [Before (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205)

```diff
-             const [, Wp, yp] = null !== (op = ep.exec(Ap)) && void 0 !== op ? op : [];
+             const [, pT, BT] = null !== (zT = bT.exec(lT)) && void 0 !== zT ? zT : [];
```

#### 819. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8208` → after: `L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208)

```diff
-               Pp = null !== (Up = null === (wp = Ip[`${Dp}|meta|${[dp.split("").filter(((pp,ip)=>Wp.split("").some((pp=>{const cp=dp.indexOf(pp);return((Op?3-cp:cp)+Sp)%4===ip})))).join(""),yp].filter(Boolean).join("|")}`]) || void 0 === wp ? void 0 : wp.id) && void 0 !== Up ? Up … [truncated]
+               LT = null !== (ZT = null === (cT = MT[`${jT}|meta|${[iT.split("").filter(((TT,UT)=>pT.split("").some((TT=>{const mT=iT.indexOf(TT);return((WT?3-mT:mT)+gT)%4===UT})))).join(""),BT].filter(Boolean).join("|")}`]) || void 0 === cT ? void 0 : cT.id) && void 0 !== ZT ? ZT … [truncated]
```

#### 820. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8213` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213)

```diff
-               let ip = Ap.replace(`rot${Yp}`, `rot${pp}`);
+               let UT = lT.replace(`rot${kT}`, `rot${TT}`);
```

#### 821. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8218` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218)

```diff
-                 ip = `${op[1]}|${pp.join("")}`
+                 UT = `${zT[1]}|${TT.join("")}`
```

#### 822. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8220-L8221` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221)

```diff
-               const Sp = `${Dp}|${ip}`;
-               if (Pp = null !== (vp = null === (tp = Ip[Sp]) || void 0 === tp ? void 0 : tp.id) && void 0 !== vp ? vp : null, null === Pp) {
+               const gT = `${jT}|${UT}`;
+               if (LT = null !== (vT = null === (fT = MT[gT]) || void 0 === fT ? void 0 : fT.id) && void 0 !== vT ? vT : null, null === LT) {
```

#### 823. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8229` → after: `L8229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8229) · [Before (L8229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8229)

```diff
-         var mp = cp(2937),
+         var YT = mT(2963),
```

#### 824. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231)

```diff
-           qp = cp(39905);
+           xT = mT(39801);
```

#### 825. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8237` → after: `L8237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8237) · [Before (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8237)

```diff
-             if (Lp === Sp.r) continue;
+             if (HT === gT.j) continue;
```

#### 826. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8259` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259)

```diff
-         const Xp = new Pp.f([{
+         const aT = new LT.i([{
```

#### 827. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8272` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272)

```diff
-           lp = new Pp.f([{
+           yT = new LT.i([{
```

#### 828. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8282` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282)

```diff
-         const Bp = new Pp.f(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const QT = new LT.i(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 829. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8291` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291)

```diff
-             const ip = `${Bp.sample(pp)} ${this.mobType}`;
+             const UT = `${QT.sample(TT)} ${this.mobType}`;
```

#### 830. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8307` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307)

```diff
-               const pp = new Pp.i(Op.minItems, Op.maxItems + 1),
+               const TT = new LT.l(WT.minItems, WT.maxItems + 1),
```

#### 831. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8311-L8312` → after: `L8311-L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312) · [Before (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312)

```diff
-                 const pp = ip.amount ? new Pp.i(ip.amount.min, ip.amount.max + 1) : null,
-                   Op = null !== (cp = ip.itemAttributesDistribution) && void 0 !== cp ? cp : null;
+                 const TT = UT.amount ? new LT.l(UT.amount.min, UT.amount.max + 1) : null,
+                   WT = null !== (mT = UT.itemAttributesDistribution) && void 0 !== mT ? mT : null;
```

#### 832. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8322` → after: `L8322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322)

```diff
-               const Ip = new Pp.f(op);
+               const MT = new LT.i(zT);
```

#### 833. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8328` → after: `L8328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328) · [Before (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328)

```diff
-             this.itemCategoryDistributions = ip, this.shouldEnchantDistribution = new Pp.d(pp.enchantmentProbability), this.enchantmentTier = pp.enchantmentTier
+             this.itemCategoryDistributions = UT, this.shouldEnchantDistribution = new LT.e(TT.enchantmentProbability), this.enchantmentTier = TT.enchantmentTier
```

#### 834. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8331` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331) · [Before (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331)

```diff
-             const ip = Array(Dp.j).fill(null);
+             const UT = Array(jT.l).fill(null);
```

#### 835. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8339-L8341` → after: `L8339-L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341) · [Before (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341)

```diff
-                   Pp = null !== (Op = null === (op = Dp.amountDistribution) || void 0 === op ? void 0 : op.sample(pp)) && void 0 !== Op ? Op : null,
-                   Wp = null !== (Ip = null === (Sp = Dp.attributesDistribution) || void 0 === Sp ? void 0 : Sp.sample(pp)) && void 0 !== Ip ? Ip : {},
-                   yp = null !== (xp = this.getEnchantmentAttributesForItem(pp, Ap)) && void 0 !== xp ? xp : {};
+                   LT = null !== (WT = null === (zT = jT.amountDistribution) || void 0 === zT ? void 0 : zT.sample(TT)) && void 0 !== WT ? WT : null,
+                   pT = null !== (MT = null === (gT = jT.attributesDistribution) || void 0 === gT ? void 0 : gT.sample(TT)) && void 0 !== MT ? MT : {},
+                   BT = null !== (nT = this.getEnchantmentAttributesForItem(TT, lT)) && void 0 !== nT ? nT : {};
```

#### 836. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8348` → after: `L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348) · [Before (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348)

```diff
-                       ...null !== (Lp = Wp.customAttributes) && void 0 !== Lp ? Lp : {},
+                       ...null !== (HT = pT.customAttributes) && void 0 !== HT ? HT : {},
```

#### 837. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8355)

```diff
-             return (0, Pp.n)(ip, pp), ip
+             return (0, LT.r)(UT, TT), UT
```

#### 838. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8642` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8642) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8642)

```diff
-             name: `${pp} Pickaxe`,
+             name: `${TT} Pickaxe`,
```

#### 839. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8646)

```diff
-             name: `${pp} Axe`,
+             name: `${TT} Axe`,
```

#### 840. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8650` → after: `L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8650) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8650)

```diff
-             name: `${pp} Spade`,
+             name: `${TT} Spade`,
```

#### 841. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8654` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8654) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8654)

```diff
-             name: `${pp} Hoe`,
+             name: `${TT} Hoe`,
```

#### 842. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8661` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661)

```diff
-           if (ip < 0 || ip > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${ip}`);
+           if (UT < 0 || UT > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${UT}`);
```

#### 843. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8685` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8685) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8685)

```diff
-             name: `${pp} Sword`,
+             name: `${TT} Sword`,
```

#### 844. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8689` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8689) · [Before (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8689)

```diff
-             name: `${pp} Bow`,
+             name: `${TT} Bow`,
```

#### 845. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8693` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8693) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8693)

```diff
-             name: `${pp} Crossbow`,
+             name: `${TT} Crossbow`,
```

#### 846. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8706` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8706) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8706)

```diff
-           if (pp === bp.STONE) throw new Error(`${pp} armour is not supported`);
+           if (TT === VT.STONE) throw new Error(`${TT} armour is not supported`);
```

#### 847. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8708` → after: `L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8708) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8708)

```diff
-               name: `${pp} Helmet`,
+               name: `${TT} Helmet`,
```

#### 848. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8712` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8712) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8712)

```diff
-               name: `${pp} Chestplate`,
+               name: `${TT} Chestplate`,
```

#### 849. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8716` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8716) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8716)

```diff
-               name: `${pp} Gauntlets`,
+               name: `${TT} Gauntlets`,
```

#### 850. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8720` → after: `L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8720) · [Before (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8720)

```diff
-               name: `${pp} Leggings`,
+               name: `${TT} Leggings`,
```

#### 851. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8724` → after: `L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8724) · [Before (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8724)

```diff
-               name: `${pp} Boots`,
+               name: `${TT} Boots`,
```

#### 852. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8732)

```diff
-           [Dp.f.COMMON]: new Tp({
+           [jT.i.COMMON]: new FT({
```

#### 853. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8761` → after: `L8761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8761) · [Before (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8761)

```diff
-           [Dp.f.UNCOMMON]: new Tp({
+           [jT.i.UNCOMMON]: new FT({
```

#### 854. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8790` → after: `L8790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8790) · [Before (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8790)

```diff
-           [Dp.f.RARE]: new Tp({
+           [jT.i.RARE]: new FT({
```

#### 855. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8819` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8819) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8819)

```diff
-           [Dp.f.EPIC]: new Tp({
+           [jT.i.EPIC]: new FT({
```

#### 856. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8856` → after: `L8856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8856) · [Before (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8856)

```diff
-           [Dp.f.LEGENDARY]: new Tp({
+           [jT.i.LEGENDARY]: new FT({
```

#### 857. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8981` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981) · [Before (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981)

```diff
-             const pp = new Pp.h(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
+             const TT = new LT.k(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
```

#### 858. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8996` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996)

```diff
-             this.seed = void 0, this.Qy = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.cB = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 859. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999)

```diff
-               Qy: cp,
+               cB: mT,
```

#### 860. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005)

```diff
-             Si.BLOCK_ID_MAPPINGS || (Si.BLOCK_ID_MAPPINGS = new kp(Op)), Qp || (Qp = new yp(Sp)), this.seed = ip, this.Qy = cp, this.invisibleSolidBlockId = Op["Invisible Solid"].id, this.emptySpawnerBlockId = Op["Empty Spawner Block"].id, this.chestToLootChestBlockId = new Yp.d( … [truncated]
+             zU.BLOCK_ID_MAPPINGS || (zU.BLOCK_ID_MAPPINGS = new eT(WT)), XT || (XT = new BT(gT)), this.seed = UT, this.cB = mT, this.invisibleSolidBlockId = WT["Invisible Solid"].id, this.emptySpawnerBlockId = WT["Empty Spawner Block"].id, this.chestToLootChestBlockId = new kT.e( … [truncated]
```

#### 861. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9012` → after: `L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012)

```diff
-             for (const op of Ip.s) Dp[op] = Op[`${op} Spawner Block`].id;
+             for (const zT of MT.u) jT[zT] = WT[`${zT} Spawner Block`].id;
```

#### 862. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9027` → after: `L9027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027)

```diff
-                   Lp = new op.b(`prefab|${pp}|${Sp}`, xp.minDistanceBetweenPrefabs, !1, !0, ip, Op, cp, null, !0)
+                   HT = new zT.b(`prefab|${TT}|${gT}`, nT.minDistanceBetweenPrefabs, !1, !0, UT, WT, mT, null, !0)
```

#### 863. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9041` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041)

```diff
-             return new Pp.h(`${pp}|${ip}|${this.seed}|prefabGenerator`)
+             return new LT.k(`${TT}|${UT}|${this.seed}|prefabGenerator`)
```

#### 864. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070)

```diff
-               Yp = this.Qy >> 1,
+               kT = this.cB >> 1,
```

#### 865. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9072` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072)

```diff
-               Pp = pp + this.Qy + this.prefabRadius,
+               LT = TT + this.cB + this.prefabRadius,
```

#### 866. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9074` → after: `L9074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074)

```diff
-               yp = ip + this.Qy + this.prefabRadius;
+               BT = UT + this.cB + this.prefabRadius;
```

#### 867. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9082` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082)

```diff
-                 if (wp === Ip.p.SURFACE && tp === Ip.l.VERY_HIGH && !xp.regionMayHaveVeryHighSurfacePrefabs(Dp, Wp, Pp, yp)) continue;
+                 if (cT === MT.r.SURFACE && fT === MT.p.VERY_HIGH && !nT.regionMayHaveVeryHighSurfacePrefabs(jT, pT, LT, BT)) continue;
```

#### 868. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9092` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092) · [Before (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092)

```diff
-                   if (wp === Ip.p.SURFACE && !Yp.canPlaceSurfacePrefab(ip, xp)) continue;
+                   if (cT === MT.r.SURFACE && !kT.canPlaceSurfacePrefab(UT, nT)) continue;
```

#### 869. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9111` → after: `L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111) · [Before (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111)

```diff
-                       console.error(`Invalid prefab rotation: ${Hp}`)
+                       console.error(`Invalid prefab rotation: ${qT}`)
```

#### 870. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9128` → after: `L9128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128)

```diff
-                   if (wp === Ip.p.SURFACE && null !== Yp.maxSurfacePrefabRelief) {
+                   if (cT === MT.r.SURFACE && null !== kT.maxSurfacePrefabRelief) {
```

#### 871. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173)

```diff
-                 const Op = op.getOrGenerate(pp + Dp, ip + cp, Ip.f.GroundHeight);
+                 const WT = zT.getOrGenerate(TT + jT, UT + mT, MT.i.GroundHeight);
```

#### 872. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9194-L9195` → after: `L9194-L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195) · [Before (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195)

```diff
-                 UO: pp,
-                 wO: cp
+                 UW: TT,
+                 mW: mT
```

#### 873. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9208` → after: `L9208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208)

```diff
-                   if (cp.getOrGenerate(Yp, pp, Ip.f.WaterHeight) !== Sp.u) return {
+                   if (mT.getOrGenerate(kT, TT, MT.i.WaterHeight) !== gT.k) return {
```

#### 874. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9212-L9213` → after: `L9212-L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213) · [Before (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213)

```diff
-                   const ip = cp.getOrGenerate(Yp, pp, Ip.f.GroundHeight);
-                   if (Lp.c.isInCave(Yp, ip, pp, Op)) return {
+                   const UT = mT.getOrGenerate(kT, TT, MT.i.GroundHeight);
+                   if (HT.b.isInCave(kT, UT, TT, WT)) return {
```

#### 875. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9217` → after: `L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9217) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9217)

```diff
-                   if (qp.d.isNearFixedPointPrefab(Yp, pp, op)) return {
+                   if (xT.b.isNearFixedPointPrefab(kT, TT, zT)) return {
```

#### 876. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9264-L9265` → after: `L9264-L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265) · [Before (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265)

```diff
-             if (xp === this.emptySpawnerBlockId && (xp = null !== (Lp = Op.spawnerBlockLocationToBlockId.get(pp, ip, cp)) && void 0 !== Lp ? Lp : this.defaultSpawnerBlockId), xp < 0) return xp;
-             if (xp = null !== (Ip = null === (Sp = Op.blockIdMapping) || void 0 === Sp ? void 0 : Sp[xp]) && void 0 !== Ip ? Ip : xp, void 0 !== this.chestToLootChestBlockId.reverseGet(xp)) {
+             if (nT === this.emptySpawnerBlockId && (nT = null !== (HT = WT.spawnerBlockLocationToBlockId.get(TT, UT, mT)) && void 0 !== HT ? HT : this.defaultSpawnerBlockId), nT < 0) return nT;
+             if (nT = null !== (MT = null === (gT = WT.blockIdMapping) || void 0 === gT ? void 0 : gT[nT]) && void 0 !== MT ? MT : nT, void 0 !== this.chestToLootChestBlockId.reverseGet(nT)) {
```

#### 877. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267)

```diff
-               const Ip = null !== (Yp = Op.chestLocationToQuality.get(pp, ip, cp)) && void 0 !== Yp ? Yp : Si.DEFAULT_CHEST_QUALITY,
+               const MT = null !== (kT = WT.chestLocationToQuality.get(TT, UT, mT)) && void 0 !== kT ? kT : zU.DEFAULT_CHEST_QUALITY,
```

#### 878. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9302` → after: `L9302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9302) · [Before (L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9302)

```diff
-                     Wp = pp.schematic.getRLEChunk((0, Dp.Q)(Yp), (0, Dp.Q)(ip), (0, Dp.Q)(Ap));
+                     pT = TT.schematic.getRLEChunk((0, jT.H)(kT), (0, jT.H)(UT), (0, jT.H)(lT));
```

#### 879. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9315` → after: `L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315)

```diff
-                         else if (this.emptySpawnerBlockId === xp) Lp.get(Dp, Wp, yp) || console.error(`Empty spawner block found in prefab ${pp.schematic.name} at (${Dp}, ${Wp}, ${yp}) with no mob type specified. Defaulting to "${Si.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === nT) HT.get(jT, pT, BT) || console.error(`Empty spawner block found in prefab ${TT.schematic.name} at (${jT}, ${pT}, ${BT}) with no mob type specified. Defaulting to "${zU.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 880. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9318` → after: `L9318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318) · [Before (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318)

```diff
-                           void 0 !== ip && (Sp.get(Dp, Wp, yp) || console.error(`Chest found in prefab ${pp.schematic.name} at (${Dp}, ${Wp}, ${yp}) with no quality specified. Defaulting to "${Si.DEFAULT_CHEST_QUALITY}" quality.`), xp = ip)
+                           void 0 !== UT && (gT.get(jT, pT, BT) || console.error(`Chest found in prefab ${TT.schematic.name} at (${jT}, ${pT}, ${BT}) with no quality specified. Defaulting to "${zU.DEFAULT_CHEST_QUALITY}" quality.`), nT = UT)
```

#### 881. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9341` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341)

```diff
-           }(pp, pp.shouldSwapXZ ? cp : ip)
+           }(TT, TT.shouldSwapXZ ? mT : UT)
```

#### 882. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9348` → after: `L9348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348) · [Before (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348)

```diff
-           }(pp, pp.shouldSwapXZ ? ip : cp)
+           }(TT, TT.shouldSwapXZ ? UT : mT)
```

#### 883. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9350` → after: `L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9350) · [Before (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9350)

```diff
-         Si.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, Si.BLOCK_ID_MAPPINGS = void 0, Si.DEFAULT_MOB_TYPE = "Draugr Zombie", Si.DEFAULT_CHEST_QUALITY = Dp.f.COMMON;
+         zU.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, zU.BLOCK_ID_MAPPINGS = void 0, zU.DEFAULT_MOB_TYPE = "Draugr Zombie", zU.DEFAULT_CHEST_QUALITY = jT.i.COMMON;
```

#### 884. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9371` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371)

```diff
-             const cp = new Op.g(2 * pp + 1, [-pp, -pp]);
+             const mT = new WT.e(2 * TT + 1, [-TT, -TT]);
```

#### 885. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9380` → after: `L9380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380) · [Before (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380)

```diff
-             this.Qy = cp, this.seed = Op, this.blockMetadata = Ip, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.cB = mT, this.seed = WT, this.blockMetadata = MT, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 886. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383)

```diff
-                 [Dp.t.Maple]: {
+                 [jT.v.Maple]: {
```

#### 887. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391)

```diff
-                 [Dp.t.Pine]: {
+                 [jT.v.Pine]: {
```

#### 888. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9401` → after: `L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401)

```diff
-                 [Dp.t.Plum]: {
+                 [jT.v.Plum]: {
```

#### 889. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9409` → after: `L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409) · [Before (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409)

```diff
-                 [Dp.t.Cedar]: {
+                 [jT.v.Cedar]: {
```

#### 890. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9417` → after: `L9417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417) · [Before (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417)

```diff
-                 [Dp.t.Aspen]: {
+                 [jT.v.Aspen]: {
```

#### 891. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9427` → after: `L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427) · [Before (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427)

```diff
-                 [Dp.t.Jungle]: {
+                 [jT.v.Jungle]: {
```

#### 892. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9437` → after: `L9437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437) · [Before (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437)

```diff
-                 [Dp.t.Palm]: {
+                 [jT.v.Palm]: {
```

#### 893. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447)

```diff
-                 [Dp.t.AutumnMaple]: {
+                 [jT.v.AutumnMaple]: {
```

#### 894. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455)

```diff
-                 [Dp.t.Pear]: {
+                 [jT.v.Pear]: {
```

#### 895. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9465` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465) · [Before (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465)

```diff
-                 [Dp.t.Cherry]: {
+                 [jT.v.Cherry]: {
```

#### 896. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9475` → after: `L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475)

```diff
-                 [Dp.t.Spectral]: {
+                 [jT.v.Spectral]: {
```

#### 897. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483)

```diff
-                 [Dp.t.Mango]: {
+                 [jT.v.Mango]: {
```

#### 898. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9493` → after: `L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493) · [Before (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493)

```diff
-                 [Dp.t.AutumnAspen]: {
+                 [jT.v.AutumnAspen]: {
```

#### 899. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9503` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503)

```diff
-                 [Dp.t.Dead]: {
+                 [jT.v.Dead]: {
```

#### 900. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9513` → after: `L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513)

```diff
-                 [Dp.t.FallenLog]: {
+                 [jT.v.FallenLog]: {
```

#### 901. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9523-L9524` → after: `L9523-L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524) · [Before (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((pp => Ip[pp].id)), this.maxTreeRadius = pp.maxTreeRadius, this.Qy <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.Qy <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((TT => MT[TT].id)), this.maxTreeRadius = TT.maxTreeRadius, this.cB <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.cB <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 902. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9598` → after: `L9598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598) · [Before (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598)

```diff
-               if (pp.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${pp.radius} for canopy type "${op}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (TT.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${TT.radius} for canopy type "${zT}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 903. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9602` → after: `L9602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602) · [Before (L9602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602)

```diff
-             for (const op of pp.biomeSelector.BO) op.biome.treeMinDist && (xp = Math.min(xp, op.biome.treeMinDist), Lp = Math.max(Lp, op.biome.treeMinDist));
+             for (const zT of TT.biomeSelector.bW) zT.biome.treeMinDist && (nT = Math.min(nT, zT.biome.treeMinDist), HT = Math.max(HT, zT.biome.treeMinDist));
```

#### 904. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9611-L9612` → after: `L9611-L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612) · [Before (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612)

```diff
-             for (let Wp = pp - this.maxTreeRadius; Wp < pp + this.Qy + this.maxTreeRadius; Wp++)
-               for (let pp = ip - this.maxTreeRadius; pp < ip + this.Qy + this.maxTreeRadius; pp++) {
+             for (let pT = TT - this.maxTreeRadius; pT < TT + this.cB + this.maxTreeRadius; pT++)
+               for (let TT = UT - this.maxTreeRadius; TT < UT + this.cB + this.maxTreeRadius; TT++) {
```

#### 905. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9616-L9618` → after: `L9616-L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618) · [Before (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618)

```diff
-                   if (cp.getOrGenerate(Wp, pp, Ip.f.WaterHeight) !== Sp.u) continue;
-                   const Op = cp.getOrGenerate(Wp, pp, Ip.f.GroundHeight);
-                   if (Lp.c.isInCave(Wp, Op, pp, op)) continue;
+                   if (mT.getOrGenerate(pT, TT, MT.i.WaterHeight) !== gT.k) continue;
+                   const WT = mT.getOrGenerate(pT, TT, MT.i.GroundHeight);
+                   if (HT.b.isInCave(pT, WT, TT, zT)) continue;
```

#### 906. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9620-L9621` → after: `L9620-L9621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621) · [Before (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621)

```diff
-                   if (qp.d.isNearFixedPointPrefab(Wp, pp, Yp)) continue;
-                   const yp = new Pp.h(`${Wp}${pp}${this.seed}treeHeight`),
+                   if (xT.b.isNearFixedPointPrefab(pT, TT, kT)) continue;
+                   const BT = new LT.k(`${pT}${TT}${this.seed}treeHeight`),
```

#### 907. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9627` → after: `L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627) · [Before (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627)

```diff
-                   if (Up === Dp.t.FallenLog) {
+                   if (ZT === jT.v.FallenLog) {
```

#### 908. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9630` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630)

```diff
-                       if (cp.getOrGenerate(0 === vp ? Wp + ip : Wp, 0 === vp ? pp : pp + ip, Ip.f.GroundHeight) !== Op) {
+                       if (mT.getOrGenerate(0 === vT ? pT + UT : pT, 0 === vT ? TT : TT + UT, MT.i.GroundHeight) !== WT) {
```

#### 909. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9651-L9652` → after: `L9651-L9652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652) · [Before (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652)

```diff
-               Ip = null !== (cp = op.minHeight) && void 0 !== cp ? cp : this.minTreeHeight,
-               Sp = null !== (Op = op.maxHeight) && void 0 !== Op ? Op : this.maxTreeHeight;
+               MT = null !== (mT = zT.minHeight) && void 0 !== mT ? mT : this.minTreeHeight,
+               gT = null !== (WT = zT.maxHeight) && void 0 !== WT ? WT : this.maxTreeHeight;
```

#### 910. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9667-L9668` → after: `L9667-L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668) · [Before (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668)

```diff
-               const op = new Pp.h(`${Ip.treeX}|${Ip.treeZ}|${Ip.trunkBase}|tree`);
-               if (Ip.treeType === Dp.t.Dead || Ip.treeType === Dp.t.FallenLog) {
+               const zT = new LT.k(`${MT.treeX}|${MT.treeZ}|${MT.trunkBase}|tree`);
+               if (MT.treeType === jT.v.Dead || MT.treeType === jT.v.FallenLog) {
```

#### 911. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9685` → after: `L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685) · [Before (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685)

```diff
-                 op >= ip && op < ip + this.Qy && Ip >= cp && Ip < cp + this.Qy && xp >= Op && xp < Op + this.Qy && pp.set(op - ip, Ip - cp, xp - Op, Sp)
+                 zT >= UT && zT < UT + this.cB && MT >= mT && MT < mT + this.cB && nT >= WT && nT < WT + this.cB && TT.set(zT - UT, MT - mT, nT - WT, gT)
```

#### 912. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9687` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687)

```diff
-             if (op.treeType === Dp.t.FallenLog) {
+             if (zT.treeType === jT.v.FallenLog) {
```

#### 913. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689)

```diff
-               for (let pp = -1; pp < Ap - 1; pp++) Pp(0 === op.vineDir ? xp + pp : xp, Yp, 0 === op.vineDir ? Lp : Lp + pp);
+               for (let TT = -1; TT < lT - 1; TT++) LT(0 === zT.vineDir ? nT + TT : nT, kT, 0 === zT.vineDir ? HT : HT + TT);
```

#### 914. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9714` → after: `L9714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714) · [Before (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714)

```diff
-               Up = Math.min(Wp, cp + this.Qy - 1);
+               ZT = Math.min(pT, mT + this.cB - 1);
```

#### 915. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9717` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717) · [Before (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717)

```diff
-               vp = Math.min(Sp + Ap.radius, ip + this.Qy - 1);
+               vT = Math.min(gT + lT.radius, UT + this.cB - 1);
```

#### 916. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9720` → after: `L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720) · [Before (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720)

```diff
-               Hp = Math.min(xp + Ap.radius, Op + this.Qy - 1);
+               qT = Math.min(nT + lT.radius, WT + this.cB - 1);
```

#### 917. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9795` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795) · [Before (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795)

```diff
-               if (Up !== yi.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${Up}`);
+               if (ZT !== LU.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${ZT}`);
```

#### 918. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9802-L9804` → after: `L9802-L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804) · [Before (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804)

```diff
-             const Sp = ip + this.Qy,
-               xp = cp + this.Qy,
-               Lp = Op + this.Qy,
+             const gT = UT + this.cB,
+               nT = mT + this.cB,
+               HT = WT + this.cB,
```

#### 919. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9830` → after: `L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830) · [Before (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830)

```diff
-             const ip = this.Qy >> 1,
+             const UT = this.cB >> 1,
```

#### 920. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9852` → after: `L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852) · [Before (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852)

```diff
-         var vi = cp(39975);
+         var ZU = mT(39867);
```

#### 921. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9856` → after: `L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856)

```diff
-             this.biomeSelector = pp, this.noWaterHeightmapGenerator = ip, this.hydrology = cp, this.lakeRadiusNoiseModifier = Ip, this.seed = Sp, this.needOutsideWaterDist = Lp, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = TT, this.noWaterHeightmapGenerator = UT, this.hydrology = mT, this.lakeRadiusNoiseModifier = MT, this.seed = gT, this.needOutsideWaterDist = HT, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 922. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9866` → after: `L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866) · [Before (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866)

```diff
-               if ((0, Op.K)(Ap, pp, ip) > Ip) continue;
+               if ((0, WT.P)(lT, TT, UT) > MT) continue;
```

#### 923. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9870` → after: `L9870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870) · [Before (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870)

```diff
-               const op = (0, Op.H)(cp.origin, pp, ip),
+               const zT = (0, WT.M)(mT.origin, TT, UT),
```

#### 924. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9887` → after: `L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887) · [Before (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887)

```diff
-             if (!(0, Dp.G)(ip)) return ip.lake;
+             if (!(0, jT.E)(UT)) return UT.lake;
```

#### 925. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9900` → after: `L9900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900) · [Before (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900)

```diff
-             } = this, Ip = new Pp.h(`${pp[0]}|${pp[1]}${this.seed}oasisLake`), Sp = this.hydrology.getHydrologyWaterGenInfo(pp[0], pp[1]), xp = Math.floor(Sp.distFromWater - Sp.waterRadius - op);
+             } = this, MT = new LT.k(`${TT[0]}|${TT[1]}${this.seed}oasisLake`), gT = this.hydrology.getHydrologyWaterGenInfo(TT[0], TT[1]), nT = Math.floor(gT.distFromWater - gT.waterRadius - zT);
```

#### 926. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9920` → after: `L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920) · [Before (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920)

```diff
-             this.biomeSelector = pp, this.noWaterHeightmapGenerator = ip, this.needOutsideWaterBodyDist = Sp, this.tO = Lp, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = TT, this.noWaterHeightmapGenerator = UT, this.needOutsideWaterBodyDist = gT, this.zW = HT, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 927. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9932` → after: `L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932) · [Before (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, ei || (ei = new vi.b("water cells", xp ? 800 : 60, 6e4)), this.waterBodyInfos = ei.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, qU || (qU = new ZU.e("water cells", nT ? 800 : 60, 6e4)), this.waterBodyInfos = qU.partition();
```

#### 928. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9934` → after: `L9934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9934) · [Before (L9934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9934)

```diff
-             this.cellCenterMaxOffset = this.gridSize / 2 - Yp, this.seed = cp, this.lakeRadiusNoiseModifier = new Op.j([{
+             this.cellCenterMaxOffset = this.gridSize / 2 - kT, this.seed = mT, this.lakeRadiusNoiseModifier = new WT.g([{
```

#### 929. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9940` → after: `L9940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940) · [Before (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940)

```diff
-             }], `${cp}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, Op.z)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new Hi(pp, ip, this, this.lakeRadiusNoiseModifier, cp, op, Sp, xp)
+             }], `${mT}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, WT.D)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new vU(TT, UT, this, this.lakeRadiusNoiseModifier, mT, zT, gT, nT)
```

#### 930. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9944` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944)

```diff
-             if (!this.tO) return ki(this.needOutsideWaterBodyDist);
+             if (!this.zW) return OU(this.needOutsideWaterBodyDist);
```

#### 931. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9948` → after: `L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948) · [Before (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948)

```diff
-             return null === op || ji(Op) <= ji(op) ? Op : op
+             return null === zT || bU(WT) <= bU(zT) ? WT : zT
```

#### 932. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9974` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974) · [Before (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974)

```diff
-                 Yx: pp,
+                 sg: TT,
```

#### 933. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9977` → after: `L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977) · [Before (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977)

```diff
-               } = (0, Op.x)(cp, op.origin, op.downhill.origin);
+               } = (0, WT.z)(mT, zT.origin, zT.downhill.origin);
```

#### 934. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9989` → after: `L9989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989) · [Before (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989)

```diff
-                 Yx: pp,
+                 sg: TT,
```

#### 935. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9992` → after: `L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992) · [Before (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992)

```diff
-               } = (0, Op.x)(cp, Pp.origin, op.origin), yp = Math.floor(pp);
+               } = (0, WT.z)(mT, LT.origin, zT.origin), BT = Math.floor(TT);
```

#### 936. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10013` → after: `L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013) · [Before (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013)

```diff
-                 Sp *= Ip.lakeRadius / this.lakeSettings.maxRadius, Pp = Ip.lakeRadius - Sp, cp = (0, Op.H)(op.origin, pp, ip) - Pp
+                 gT *= MT.lakeRadius / this.lakeSettings.maxRadius, LT = MT.lakeRadius - gT, mT = (0, WT.M)(zT.origin, TT, UT) - LT
```

#### 937. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10027` → after: `L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027) · [Before (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027)

```diff
-                 const cp = (0, Op.H)(op.origin, pp, ip),
+                 const mT = (0, WT.M)(zT.origin, TT, UT),
```

#### 938. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054)

```diff
-             if (!(0, Dp.G)(cp)) return this.lastReadInfo.cellX = pp, this.lastReadInfo.cellZ = ip, this.lastReadInfo.info = cp, cp;
+             if (!(0, jT.E)(mT)) return this.lastReadInfo.cellX = TT, this.lastReadInfo.cellZ = UT, this.lastReadInfo.info = mT, mT;
```

#### 939. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10118` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118)

```diff
-             return -1 !== op ? Op : null
+             return -1 !== zT ? WT : null
```

#### 940. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10123` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123) · [Before (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123)

```diff
-               op = new Pp.h(`${pp}${ip}${this.seed}riverCell`);
+               zT = new LT.k(`${TT}${UT}${this.seed}riverCell`);
```

#### 941. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10163-L10166` → after: `L10163-L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166) · [Before (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166)

```diff
-           FO: 40,
-           UO: -85,
-           wO: -85,
-           gO: .5
+           tW: 40,
+           UW: -85,
+           mW: -85,
+           aW: .5
```

#### 942. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10170-L10173` → after: `L10170-L10173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173) · [Before (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173)

```diff
-           FO: 13,
-           UO: -100,
-           wO: -85,
-           gO: .28
+           tW: 13,
+           UW: -100,
+           mW: -85,
+           aW: .28
```

#### 943. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10177-L10180` → after: `L10177-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180) · [Before (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180)

```diff
-           FO: 10,
-           UO: -100,
-           wO: -75,
-           gO: .4
+           tW: 10,
+           UW: -100,
+           mW: -75,
+           aW: .4
```

#### 944. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10184-L10187` → after: `L10184-L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187) · [Before (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187)

```diff
-           FO: 5,
-           UO: -80,
-           wO: 15,
-           gO: .5
+           tW: 5,
+           UW: -80,
+           mW: 15,
+           aW: .5
```

#### 945. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10191-L10194` → after: `L10191-L10194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194) · [Before (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194)

```diff
-           FO: 4,
-           UO: -60,
-           wO: 40,
-           gO: .5
+           tW: 4,
+           UW: -60,
+           mW: 40,
+           aW: .5
```

#### 946. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10198-L10199` → after: `L10198-L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199) · [Before (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199)

```diff
-             this.seed = ip, this.Qy = cp, this.aO = void 0, this.aO = Op.map((Op => {
-               const Ip = new op.b("ore", Op.FO, !1, !0, `${ip}${Op.blockName}`, 20, cp, null, !0);
+             this.seed = UT, this.cB = mT, this.dW = void 0, this.dW = WT.map((WT => {
+               const MT = new zT.b("ore", WT.tW, !1, !0, `${UT}${WT.blockName}`, 20, mT, null, !0);
```

#### 947. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10201` → after: `L10201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201)

```diff
-                 tx: (0, Dp.C)(Op.blockName, pp),
+                 Gg: (0, jT.C)(WT.blockName, TT),
```

#### 948. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10203-L10206` → after: `L10203-L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206) · [Before (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206)

```diff
-                 FO: Op.FO,
-                 UO: Op.UO,
-                 wO: Op.wO,
-                 gO: Op.gO,
+                 tW: WT.tW,
+                 UW: WT.UW,
+                 mW: WT.mW,
+                 aW: WT.aW,
```

#### 949. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10213-L10216` → after: `L10213-L10216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216) · [Before (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216)

```diff
-               op = new Pp.h(`${pp}${ip}${this.seed}oreExists`);
-             for (const Ip of this.aO) {
-               const Sp = Ip.pointGenerator.getPointsAroundPoint(pp + this.Qy / 2, ip + this.Qy / 2),
-                 xp = pp + this.Qy + Ip.radius,
+               zT = new LT.k(`${TT}${UT}${this.seed}oreExists`);
+             for (const MT of this.dW) {
+               const gT = MT.pointGenerator.getPointsAroundPoint(TT + this.cB / 2, UT + this.cB / 2),
+                 nT = TT + this.cB + MT.radius,
```

#### 950. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10218` → after: `L10218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218)

```diff
-                 Yp = ip + this.Qy + Ip.radius,
+                 kT = UT + this.cB + MT.radius,
```

#### 951. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10222-L10223` → after: `L10222-L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223) · [Before (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223)

```diff
-                 const Sp = new Pp.h(`${Ap[0]}${Ap[1]}${this.seed}ore`),
-                   Wp = Math.floor(Sp.next() * (Ip.wO + 1 - Ip.UO)) + Ip.UO,
+                 const gT = new LT.k(`${lT[0]}${lT[1]}${this.seed}ore`),
+                   pT = Math.floor(gT.next() * (MT.mW + 1 - MT.UW)) + MT.UW,
```

#### 952. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10225` → after: `L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225)

```diff
-                   Up = Math.min(pp + this.Qy - 1, Ap[0] + Ip.radius),
+                   ZT = Math.min(TT + this.cB - 1, lT[0] + MT.radius),
```

#### 953. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10227` → after: `L10227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227)

```diff
-                   vp = Math.min(ip + this.Qy - 1, Ap[1] + Ip.radius);
+                   vT = Math.min(UT + this.cB - 1, lT[1] + MT.radius);
```

#### 954. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230)

```diff
-                     (0, Op.B)(Ap, pp, ip) > Ip.radius || (op.next() >= Ip.gO || cp.push(pp, Wp, ip, Ip.tx))
+                     (0, WT.G)(lT, TT, UT) > MT.radius || (zT.next() >= MT.aW || mT.push(TT, pT, UT, MT.Gg))
```

#### 955. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237)

```diff
-             const Lp = cp + this.Qy,
+             const HT = mT + this.cB,
```

#### 956. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244)

```diff
-               if (Yp < Sp.get(Ap, Pp, Ip.f.GroundHeight) - op) {
+               if (kT < gT.get(lT, LT, MT.i.GroundHeight) - zT) {
```

#### 957. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10251` → after: `L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251)

```diff
-         var qi = cp(39978);
+         var JU = mT(39873);
```

#### 958. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10261-L10262` → after: `L10261-L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262) · [Before (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262)

```diff
-             qO: cp,
-             lO: Op,
+             pW: mT,
+             fW: WT,
```

#### 959. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10272` → after: `L10272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272)

```diff
-           return cp.kO && Op.push({
+           return mT.jW && WT.push({
```

#### 960. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10274-L10275` → after: `L10274-L10275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275) · [Before (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275)

```diff
-             tx: pp[ip].id
-           }), cp.mO && Op.push({
+             Gg: TT[UT].id
+           }), mT.lW && WT.push({
```

#### 961. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10277` → after: `L10277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277) · [Before (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277)

```diff
-             tx: pp[`${ip}|meta|rot2|side`].id
+             Gg: TT[`${UT}|meta|rot2|side`].id
```

#### 962. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10280` → after: `L10280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280) · [Before (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280)

```diff
-             tx: pp[`${ip}|meta|rot4|side`].id
+             Gg: TT[`${UT}|meta|rot4|side`].id
```

#### 963. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10283` → after: `L10283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283) · [Before (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283)

```diff
-             tx: pp[`${ip}|meta|rot1|side`].id
+             Gg: TT[`${UT}|meta|rot1|side`].id
```

#### 964. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10286-L10287` → after: `L10286-L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287) · [Before (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287)

```diff
-             tx: pp[`${ip}|meta|rot3|side`].id
-           }), cp.RO && Op.push({
+             Gg: TT[`${UT}|meta|rot3|side`].id
+           }), mT.LW && WT.push({
```

#### 965. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289)

```diff
-             tx: pp[`${ip}|meta|rot1|top`].id
+             Gg: TT[`${UT}|meta|rot1|top`].id
```

#### 966. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10298-L10300` → after: `L10298-L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300) · [Before (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300)

```diff
-                 kO: !0,
-                 mO: !0,
-                 RO: !0
+                 jW: !0,
+                 lW: !0,
+                 LW: !0
```

#### 967. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10303-L10306` → after: `L10303-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306) · [Before (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306)

```diff
-               MO: .8,
-               CO: 0,
-               qO: .12,
-               lO: .25,
+               BW: .8,
+               ZW: 0,
+               pW: .12,
+               fW: .25,
```

#### 968. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10312-L10314` → after: `L10312-L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314) · [Before (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314)

```diff
-                 kO: !0,
-                 mO: !0,
-                 RO: !1
+                 jW: !0,
+                 lW: !0,
+                 LW: !1
```

#### 969. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10317-L10319` → after: `L10317-L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319) · [Before (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319)

```diff
-               MO: .7,
-               CO: 2,
-               qO: .58
+               BW: .7,
+               ZW: 2,
+               pW: .58
```

#### 970. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10322` → after: `L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322)

```diff
-             const cp = ip.EO;
+             const mT = UT.cW;
```

#### 971. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10326-L10328` → after: `L10326-L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328) · [Before (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328)

```diff
-                 kO: ip.kO,
-                 mO: ip.mO,
-                 RO: ip.RO
+                 jW: UT.jW,
+                 lW: UT.lW,
+                 LW: UT.LW
```

#### 972. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10331-L10336` → after: `L10331-L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336) · [Before (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336)

```diff
-               MO: ip.MO,
-               CO: ip.CO,
-               qO: ip.qO,
-               lO: null === cp || void 0 === cp ? void 0 : cp.lO,
-               shallowClusterY: null === cp || void 0 === cp ? void 0 : cp.QO,
-               deepClusterY: null === cp || void 0 === cp ? void 0 : cp.JO
+               BW: UT.BW,
+               ZW: UT.ZW,
+               pW: UT.pW,
+               fW: null === mT || void 0 === mT ? void 0 : mT.fW,
+               shallowClusterY: null === mT || void 0 === mT ? void 0 : mT.qW,
+               deepClusterY: null === mT || void 0 === mT ? void 0 : mT.iW
```

#### 973. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10355` → after: `L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355) · [Before (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355)

```diff
-             const Op = this.heightmapVals.getOrGenerate(pp, ip, Ip.f.GroundHeight) - this.surfaceMargin,
+             const WT = this.heightmapVals.getOrGenerate(TT, UT, MT.i.GroundHeight) - this.surfaceMargin,
```

#### 974. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10362` → after: `L10362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362)

```diff
-               pp - Ip.floorY + 1 < op || Sp.push(pp === Ip.ceilingY ? Ip : {
+               TT - MT.floorY + 1 < zT || gT.push(TT === MT.ceilingY ? MT : {
```

#### 975. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10372` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372) · [Before (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372)

```diff
-             this.heightmapVals = pp, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new Op.m(new Ti(ip)), this.decoratableCavesCache = new Op.m(new fi(ip, pp, cp, op))
+             this.heightmapVals = TT, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new WT.o(new sU(UT)), this.decoratableCavesCache = new WT.o(new FU(UT, TT, mT, zT))
```

#### 976. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10378` → after: `L10378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378) · [Before (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378)

```diff
-             return this.heightmapVals.getOrGenerate(pp, ip, Ip.f.GroundHeight)
+             return this.heightmapVals.getOrGenerate(TT, UT, MT.i.GroundHeight)
```

#### 977. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10397` → after: `L10397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397) · [Before (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397)

```diff
-             ai(pp + Lp.offset[0], ip + Lp.offset[1], cp + Lp.offset[2], Ip) && (Lp.offset === Mi ? Sp = Lp : xp.push(Lp))
+             VU(TT + HT.offset[0], UT + HT.offset[1], mT + HT.offset[2], MT) && (HT.offset === xU ? gT = HT : nT.push(HT))
```

#### 978. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10399` → after: `L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399) · [Before (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399)

```diff
-           return null !== Sp ? Sp : 0 === xp.length ? null : xp[Math.floor(op * xp.length)]
+           return null !== gT ? gT : 0 === nT.length ? null : nT[Math.floor(zT * nT.length)]
```

#### 979. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10404` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404)

```diff
-             this.Qy = ip, this.seed = cp, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.cB = UT, this.seed = mT, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 980. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10410` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410)

```diff
-               if (!Number.isInteger(op.clusterBoxSize) || op.clusterBoxSize < 2 || op.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${op.seedPrefix}" has invalid clusterBoxSize (${op.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(zT.clusterBoxSize) || zT.clusterBoxSize < 2 || zT.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${zT.seedPrefix}" has invalid clusterBoxSize (${zT.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 981. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10412` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412)

```diff
-               pp > Sp && (Sp = pp), xp += Math.max(op.qO, null !== (Lp = op.lO) && void 0 !== Lp ? Lp : op.qO)
+               TT > gT && (gT = TT), nT += Math.max(zT.pW, null !== (HT = zT.fW) && void 0 !== HT ? HT : zT.pW)
```

#### 982. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10414` → after: `L10414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414) · [Before (L10414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414)

```diff
-             if (xp > 1) throw new Error(`Cave decoration cluster chances sum to ${xp} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             if (nT > 1) throw new Error(`Cave decoration cluster chances sum to ${nT} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
```

#### 983. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10419` → after: `L10419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419) · [Before (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419)

```diff
-               Ip = this.Qy,
+               MT = this.cB,
```

#### 984. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10436` → after: `L10436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436)

```diff
-             for (const xp of Ip) xp.y >= cp && xp.y < Sp && pp.set(xp.x - ip, xp.y - cp, xp.z - Op, xp.tx)
+             for (const nT of MT) nT.y >= mT && nT.y < gT && TT.set(nT.x - UT, nT.y - mT, nT.z - WT, nT.Gg)
```

#### 985. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10441` → after: `L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441)

```diff
-             const Yp = new Pp.h(`${this.seed}|${pp}|${ip}|cluster`),
+             const kT = new LT.k(`${this.seed}|${TT}|${UT}|cluster`),
```

#### 986. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10455` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455)

```diff
-             if (this.scatterClusterCells(pp, Up, ip, vp, Sp, Yp, tp), !(tp.length < vp.CO))
+             if (this.scatterClusterCells(TT, ZT, UT, vT, gT, kT, fT), !(fT.length < vT.ZW))
```

#### 987. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10461` → after: `L10461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461) · [Before (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461)

```diff
-               MO: Lp,
+               BW: HT,
```

#### 988. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10481` → after: `L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481) · [Before (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481)

```diff
-                     tx: tp.tx
+                     Gg: fT.Gg
```

#### 989. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10495` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495)

```diff
-             this.prefabGenerator = Op, this.seed = void 0, this.Qy = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = WT, this.seed = void 0, this.cB = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 990. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10498` → after: `L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498) · [Before (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498)

```diff
-             if (cp + this.Qy <= Sp.x.bedrockLevel) return {
+             if (mT + this.cB <= gT.l.bedrockLevel) return {
```

#### 991. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10505-L10507` → after: `L10505-L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507) · [Before (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507)

```diff
-             if (ep >= cp && dp < cp + this.Qy)
-               for (let Op = ip; Op < ip + this.Qy; Op++)
-                 for (let Lp = op; Lp < op + this.Qy; Lp++) {
+             if (bT >= mT && iT < mT + this.cB)
+               for (let WT = UT; WT < UT + this.cB; WT++)
+                 for (let HT = zT; HT < zT + this.cB; HT++) {
```

#### 992. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10510-L10512` → after: `L10510-L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512) · [Before (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512)

```diff
-                     Ap = xp.get(Op, Lp, Ip.f.GroundHeight);
-                   if (Ap >= cp && Ap < cp + this.Qy) {
-                     const Yp = xp.get(Op, Lp, Ip.f.IsLake) === Sp.l ? Dp.getDryBedBlock(Op, Ap, Lp) : Dp.getTopsoilBlock(Op, Ap, Lp);
+                     lT = nT.get(WT, HT, MT.i.GroundHeight);
+                   if (lT >= mT && lT < mT + this.cB) {
+                     const kT = nT.get(WT, HT, MT.i.IsLake) === gT.g ? jT.getDryBedBlock(WT, lT, HT) : jT.getTopsoilBlock(WT, lT, HT);
```

#### 993. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10516-L10518` → after: `L10516-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518) · [Before (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518)

```diff
-             if (ep + 1 >= cp && dp - 4 < cp + this.Qy)
-               for (let Op = ip; Op < ip + this.Qy; Op++)
-                 for (let Sp = op; Sp < op + this.Qy; Sp++) {
+             if (bT + 1 >= mT && iT - 4 < mT + this.cB)
+               for (let WT = UT; WT < UT + this.cB; WT++)
+                 for (let gT = zT; gT < zT + this.cB; gT++) {
```

#### 994. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10521-L10522` → after: `L10521-L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522) · [Before (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522)

```diff
-                     Dp = xp.get(Op, Sp, Ip.f.GroundHeight),
-                     Ap = Math.min(Dp, cp + this.Qy);
+                     jT = nT.get(WT, gT, MT.i.GroundHeight),
+                     lT = Math.min(jT, mT + this.cB);
```

#### 995. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10530-L10531` → after: `L10530-L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531) · [Before (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531)

```diff
-               for (let cp = Math.max(op - 4, 0); cp < Math.min(op, this.Qy); cp++) pp.set(ip, cp, Ip, this.dirtId);
-               op >= 0 && op < this.Qy && pp.set(ip, op, Ip, this.grassBlockId)
+               for (let mT = Math.max(zT - 4, 0); mT < Math.min(zT, this.cB); mT++) TT.set(UT, mT, MT, this.dirtId);
+               zT >= 0 && zT < this.cB && TT.set(UT, zT, MT, this.grassBlockId)
```

#### 996. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10535-L10536` → after: `L10535-L10536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536) · [Before (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536)

```diff
-               for (let Sp = ip; Sp < ip + this.Qy; Sp++)
-                 for (let Lp = op; Lp < op + this.Qy; Lp++) {
+               for (let gT = UT; gT < UT + this.cB; gT++)
+                 for (let HT = zT; HT < zT + this.cB; HT++) {
```

#### 997. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10538-L10539` → after: `L10538-L10539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539) · [Before (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539)

```diff
-                     Dp = xp.get(Sp, Lp, Ip.f.GroundHeight),
-                     Ap = Math.min(Dp - 4, cp + this.Qy),
+                     jT = nT.get(gT, HT, MT.i.GroundHeight),
+                     lT = Math.min(jT - 4, mT + this.cB),
```

#### 998. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10544` → after: `L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544) · [Before (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544)

```diff
-                     pp.set(Sp - ip, Op - cp, Lp - op, 0 !== Ip ? Ip : Yp)
+                     TT.set(gT - UT, WT - mT, HT - zT, 0 !== MT ? MT : kT)
```

#### 999. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10548-L10550` → after: `L10548-L10550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550) · [Before (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550)

```diff
-             if (ep - 4 >= cp && this.oreGenerator.addOresToChunk(pp, ip, cp, op, 4, xp, yp), ep >= cp && (Lp.c.addCavesToChunk(pp, ip, cp, op, xp, Wp), Fi.addCaveDecorationsToChunk(pp, ip, cp, op, this.Qy, vp)), Sp.x.bedrockLevel >= cp && Sp.x.bedrockLevel < cp + this.Qy)
-               for (let Op = ip; Op < ip + this.Qy; Op++)
-                 for (let Ip = op; Ip < op + this.Qy; Ip++) pp.set(Op - ip, Sp.x.bedrockLevel - cp, Ip - op, this.bedrockId);
+             if (bT - 4 >= mT && this.oreGenerator.addOresToChunk(TT, UT, mT, zT, 4, nT, BT), bT >= mT && (HT.b.addCavesToChunk(TT, UT, mT, zT, nT, pT), CU.addCaveDecorationsToChunk(TT, UT, mT, zT, this.cB, vT)), gT.l.bedrockLevel >= mT && gT.l.bedrockLevel < mT + this.cB)
+               for (let WT = UT; WT < UT + this.cB; WT++)
+                 for (let MT = zT; MT < zT + this.cB; MT++) TT.set(WT - UT, gT.l.bedrockLevel - mT, MT - zT, this.bedrockId);
```

#### 1000. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10553-L10555` → after: `L10553-L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555) · [Before (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555)

```diff
-               for (let Ip = ip; Ip < ip + this.Qy; Ip++)
-                 for (let Sp = cp; Sp < cp + this.Qy; Sp++)
-                   for (let xp = op; xp < op + this.Qy; xp++) {
+               for (let MT = UT; MT < UT + this.cB; MT++)
+                 for (let gT = mT; gT < mT + this.cB; gT++)
+                   for (let nT = zT; nT < zT + this.cB; nT++) {
```

#### 1001. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10566-L10567` → after: `L10566-L10567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567) · [Before (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567)

```diff
-               for (let cp = Math.max(Ip, 0); cp < Math.min(Sp, this.Qy); cp++) pp.set(ip, cp, op, this.waterId);
-               Sp >= 0 && Sp < this.Qy && pp.set(ip, Sp, op, mp[Op + 4])
+               for (let mT = Math.max(MT, 0); mT < Math.min(gT, this.cB); mT++) TT.set(UT, mT, zT, this.waterId);
+               gT >= 0 && gT < this.cB && TT.set(UT, gT, zT, YT[WT + 4])
```

#### 1002. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10570-L10575` → after: `L10570-L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575) · [Before (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575)

```diff
-             if (this.addSurfaceBlocks(pp, cp, tp.lilyPads), jp && ep >= cp && dp < cp + this.Qy)
-               for (let Lp = ip; Lp < ip + this.Qy; Lp++)
-                 for (let Yp = op; Yp < op + this.Qy; Yp++) {
-                   const Dp = xp.get(Lp, Yp, Ip.f.WaterHeight),
-                     Ap = xp.get(Lp, Yp, Ip.f.GroundHeight);
-                   if (Dp !== Sp.u && Ap >= cp && Ap < cp + this.Qy)
+             if (this.addSurfaceBlocks(TT, mT, fT.lilyPads), OT && bT >= mT && iT < mT + this.cB)
+               for (let HT = UT; HT < UT + this.cB; HT++)
+                 for (let kT = zT; kT < zT + this.cB; kT++) {
+                   const jT = nT.get(HT, kT, MT.i.WaterHeight),
+                     lT = nT.get(HT, kT, MT.i.GroundHeight);
+                   if (jT !== gT.k && lT >= mT && lT < mT + this.cB)
```

#### 1003. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10579` → after: `L10579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579) · [Before (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579)

```diff
-                       if ((0, Op.K)(Ip, Lp, Yp) < 100) Rp === Ip[0] && Mp === Ip[1] || (Rp = Ip[0], Mp = Ip[1], Cp = new Pp.h(`${this.seed}${Rp}${Mp}`).next() < .3 ? this.chalkId : this.clayId), pp.set(Lp - ip, Ap - cp, Yp - op, Cp), Ap - 1 >= cp && pp.set(Lp - ip, Ap - 1 - cp, Y … [truncated]
+                       if ((0, WT.P)(MT, HT, kT) < 100) JT === MT[0] && dT === MT[1] || (JT = MT[0], dT = MT[1], wT = new LT.k(`${this.seed}${JT}${dT}`).next() < .3 ? this.chalkId : this.clayId), TT.set(HT - UT, lT - mT, kT - zT, wT), lT - 1 >= mT && TT.set(HT - UT, lT - 1 - mT, k … [truncated]
```

#### 1004. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10588-L10591` → after: `L10588-L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591) · [Before (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591)

```diff
-               for (let Ip = ip; Ip < ip + this.Qy; Ip++)
-                 for (let Sp = cp; Sp < cp + this.Qy; Sp++)
-                   for (let xp = op; xp < op + this.Qy; xp++) {
-                     const Lp = qp.d.getBlockFromFixedPointPrefab(Ip, Sp, xp, Op);
+               for (let MT = UT; MT < UT + this.cB; MT++)
+                 for (let gT = mT; gT < mT + this.cB; gT++)
+                   for (let nT = zT; nT < zT + this.cB; nT++) {
+                     const HT = xT.b.getBlockFromFixedPointPrefab(MT, gT, nT, WT);
```

#### 1005. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10612` → after: `L10612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612) · [Before (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612)

```diff
-               op >= 0 && op < this.Qy && pp.set(cp[Op], op, cp[Op + 2], cp[Op + 3])
+               zT >= 0 && zT < this.cB && TT.set(mT[WT], zT, mT[WT + 2], mT[WT + 3])
```

#### 1006. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10626` → after: `L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626) · [Before (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626)

```diff
-             this.Qy = pp, this.biomeSelector = ip, this.seed = cp, this.random = new Pp.h(""), this.lilyPadId = void 0, this.lilyPadId = Op["Lily Pad"].id
+             this.cB = TT, this.biomeSelector = UT, this.seed = mT, this.random = new LT.k(""), this.lilyPadId = void 0, this.lilyPadId = WT["Lily Pad"].id
```

#### 1007. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10636-L10637` → after: `L10636-L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637) · [Before (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637)

```diff
-             for (let wp = pp; wp < pp + this.Qy; wp++)
-               for (let vp = ip; vp < ip + this.Qy; vp++) {
+             for (let cT = TT; cT < TT + this.cB; cT++)
+               for (let vT = UT; vT < UT + this.cB; vT++) {
```

#### 1008. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10639-L10640` → after: `L10639-L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640) · [Before (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640)

```diff
-                   Hp = cp.getOrGenerate(wp, vp, Ip.f.GroundHeight),
-                   dp = cp.getOrGenerate(wp, vp, Ip.f.WaterHeight);
+                   qT = mT.getOrGenerate(cT, vT, MT.i.GroundHeight),
+                   iT = mT.getOrGenerate(cT, vT, MT.i.WaterHeight);
```

#### 1009. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10644-L10645` → after: `L10644-L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645) · [Before (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645)

```diff
-                 if (dp !== Sp.u) {
-                   Up = !0, Hp < dp && Yp.push(ep, jp, Hp + 1, dp, tp.topwaterBlockType), tp.hasScatteredLakes && 1 === cp.getOrGenerate(wp, vp, Ip.f.IsLake) && (this.random.reseed(`${wp}|${vp}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(wp, vp, cp) && Ap … [truncated]
+                 if (iT !== gT.k) {
+                   ZT = !0, qT < iT && kT.push(bT, OT, qT + 1, iT, fT.topwaterBlockType), fT.hasScatteredLakes && 1 === mT.getOrGenerate(cT, vT, MT.i.IsLake) && (this.random.reseed(`${cT}|${vT}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(cT, vT, mT) && lT … [truncated]
```

#### 1010. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10649-L10650` → after: `L10649-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650) · [Before (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650)

```diff
-                 if (tp.hasScatteredLakes && this.isBesideLake(wp, vp, cp) && (this.random.reseed(`${wp}|${vp}|${this.seed}oasisShore`), this.random.next() < .85 && (Dp.push(ep, Hp, jp), kp = this.biomeSelector.baseBiome.floraGenerator)), !Lp.c.isInCave(wp, Hp, vp, Op) && !qp.d.is … [truncated]
-                   for (let cp = Hp + 1; cp <= Hp + tp.maxFloraHeight; cp += this.Qy) Pp.startY = cp, kp.addBiomeFloraToColumn(Pp, pp, ip, wp, cp, vp, Hp)
+                 if (fT.hasScatteredLakes && this.isBesideLake(cT, vT, mT) && (this.random.reseed(`${cT}|${vT}|${this.seed}oasisShore`), this.random.next() < .85 && (jT.push(bT, qT, OT), eT = this.biomeSelector.baseBiome.floraGenerator)), !HT.b.isInCave(cT, qT, vT, WT) && !xT.b.is … [truncated]
+                   for (let mT = qT + 1; mT <= qT + fT.maxFloraHeight; mT += this.cB) LT.startY = mT, eT.addBiomeFloraToColumn(LT, TT, UT, cT, mT, vT, qT)
```

#### 1011. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663)

```diff
-             return cp.getOrGenerate(pp + 1, ip, Ip.f.WaterHeight) !== Sp.u && cp.getOrGenerate(pp - 1, ip, Ip.f.WaterHeight) !== Sp.u && cp.getOrGenerate(pp, ip + 1, Ip.f.WaterHeight) !== Sp.u && cp.getOrGenerate(pp, ip - 1, Ip.f.WaterHeight) !== Sp.u
+             return mT.getOrGenerate(TT + 1, UT, MT.i.WaterHeight) !== gT.k && mT.getOrGenerate(TT - 1, UT, MT.i.WaterHeight) !== gT.k && mT.getOrGenerate(TT, UT + 1, MT.i.WaterHeight) !== gT.k && mT.getOrGenerate(TT, UT - 1, MT.i.WaterHeight) !== gT.k
```

#### 1012. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10669` → after: `L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669) · [Before (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669)

```diff
-             return cp.getOrGenerate(pp, ip, Ip.f.WaterHeight) !== Sp.u && 1 === cp.getOrGenerate(pp, ip, Ip.f.IsLake)
+             return mT.getOrGenerate(TT, UT, MT.i.WaterHeight) !== gT.k && 1 === mT.getOrGenerate(TT, UT, MT.i.IsLake)
```

#### 1013. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10672` → after: `L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672)

```diff
-         var zi = cp(39881);
+         var NU = mT(39788);
```

#### 1014. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-             if (this.Qy = pp, this.hashChunkContents = Ap, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.cB = TT, this.hashChunkContents = lT, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 1015. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10679` → after: `L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679) · [Before (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679)

```diff
-               si = new vi.b("chunk columns", pp, 4e4)
+               EU = new ZU.e("chunk columns", TT, 4e4)
```

#### 1016. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10681-L10682` → after: `L10681-L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682) · [Before (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682)

```diff
-             this.chunkColumnInfos = si.partition(), this.caveGenerator = new Lp.c(op, pp, ip, null !== (Pp = null === Yp || void 0 === Yp ? void 0 : Yp.HO.eO) && void 0 !== Pp ? Pp : "Lava");
-             const Hp = new Ri(ip, op, pp, null !== (Wp = null === Yp || void 0 === Yp ? void 0 : Yp.aO) && void 0 !== Wp ? Wp : [...mi, ...null !== (yp = null === Dp || void 0 === Dp ? void 0 : Dp.sO) && void 0 !== yp ? yp : []]),
+             this.chunkColumnInfos = EU.partition(), this.caveGenerator = new HT.b(zT, TT, UT, null !== (LT = null === kT || void 0 === kT ? void 0 : kT.MW.nW) && void 0 !== LT ? LT : "Lava");
+             const qT = new YU(UT, zT, TT, null !== (pT = null === kT || void 0 === kT ? void 0 : kT.dW) && void 0 !== pT ? pT : [...eU, ...null !== (BT = null === jT || void 0 === jT ? void 0 : jT.sW) && void 0 !== BT ? BT : []]),
```

#### 1017. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10684` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684)

```diff
-                 Qy: pp,
+                 cB: TT,
```

#### 1018. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10692-L10693` → after: `L10692-L10693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10692-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10693) · [Before (L10692-L10693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10693)

```diff
-               ep = null !== (Up = null === Yp || void 0 === Yp ? void 0 : Yp.BO) && void 0 !== Up ? Up : null,
-               jp = null !== (wp = null === Dp || void 0 === Dp ? void 0 : Dp.buildBiomes) && void 0 !== wp ? wp : null,
+               bT = null !== (ZT = null === kT || void 0 === kT ? void 0 : kT.bW) && void 0 !== ZT ? ZT : null,
+               OT = null !== (cT = null === jT || void 0 === jT ? void 0 : jT.buildBiomes) && void 0 !== cT ? cT : null,
```

#### 1019. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10695` → after: `L10695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10695) · [Before (L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10695)

```diff
-             this.biomeSelector = new qi.e(this, Hp, op, pp, ip, kp), this.treeGenerator = new Ui(this, this.biomeSelector, pp, op, ip), this.fixedPointPrefabTracker = new qp.d(xp, pp), this.prefabGenerator = new Si({
+             this.biomeSelector = new JU.e(this, qT, zT, TT, UT, eT), this.treeGenerator = new pU(this, this.biomeSelector, TT, zT, UT), this.fixedPointPrefabTracker = new xT.b(nT, TT), this.prefabGenerator = new zU({
```

#### 1020. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10697` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697)

```diff
-               Qy: pp,
+               cB: TT,
```

#### 1021. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10701` → after: `L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701) · [Before (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701)

```diff
-                 [Ip.p.SURFACE]: {
+                 [MT.r.SURFACE]: {
```

#### 1022. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10703` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703)

```diff
-                     [Ip.l.MEDIUM]: {
+                     [MT.p.MEDIUM]: {
```

#### 1023. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10706` → after: `L10706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706) · [Before (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706)

```diff
-                     [Ip.l.HIGH]: {
+                     [MT.p.HIGH]: {
```

#### 1024. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10709` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709)

```diff
-                     [Ip.l.VERY_HIGH]: {
+                     [MT.p.VERY_HIGH]: {
```

#### 1025. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-                 [Ip.p.UNDERGROUND]: {
+                 [MT.r.UNDERGROUND]: {
```

#### 1026. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10716` → after: `L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10716) · [Before (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10716)

```diff
-                     [Ip.l.MEDIUM]: {
+                     [MT.p.MEDIUM]: {
```

#### 1027. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10719-L10720` → after: `L10719-L10720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720) · [Before (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720)

```diff
-                     [Ip.l.HIGH]: null,
-                     [Ip.l.VERY_HIGH]: null
+                     [MT.p.HIGH]: null,
+                     [MT.p.VERY_HIGH]: null
```

#### 1028. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10725` → after: `L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725)

```diff
-             }), this.noWaterHeightmapGenerator = new zi.e((0, zi.h)(op)), this.heightmapPerturb = new Op.j([{
+             }), this.noWaterHeightmapGenerator = new NU.d((0, NU.e)(zT)), this.heightmapPerturb = new WT.g([{
```

#### 1029. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10734` → after: `L10734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734) · [Before (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734)

```diff
-             }], `${op}HeightmapPerturb`);
+             }], `${zT}HeightmapPerturb`);
```

#### 1030. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10740` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740) · [Before (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740)

```diff
-             this.waterBodyGenerator = new ui(this.biomeSelector, this.noWaterHeightmapGenerator, op, pp, mp, this.needOutsideWaterDist, Sp, null === (vp = null === Yp || void 0 === Yp ? void 0 : Yp.tO) || void 0 === vp || vp), this.caveDecorationGenerator = new Fi(ip, pp, op, nul … [truncated]
+             this.waterBodyGenerator = new iU(this.biomeSelector, this.noWaterHeightmapGenerator, zT, TT, YT, this.needOutsideWaterDist, gT, null === (vT = null === kT || void 0 === kT ? void 0 : kT.zW) || void 0 === vT || vT), this.caveDecorationGenerator = new CU(UT, TT, zT, nul … [truncated]
```

#### 1031. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10759` → after: `L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759) · [Before (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759)

```diff
-             const cp = this.Qy,
+             const mT = this.cB,
```

#### 1032. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777)

```diff
-               if ((null !== (op = Op.get(Ip.key)) && void 0 !== op ? op : Ip) !== Ip) throw new Error(`A world-gen terrain built two biomes keyed "${Ip.key}"`);
+               if ((null !== (zT = WT.get(MT.key)) && void 0 !== zT ? zT : MT) !== MT) throw new Error(`A world-gen terrain built two biomes keyed "${MT.key}"`);
```

#### 1033. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10787-L10788` → after: `L10787-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788) · [Before (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788)

```diff
-               const pp = `${Math.floor(Lp.x/this.Qy)}|${Math.floor(Lp.z/this.Qy)}`,
-                 ip = null !== (Sp = Ip.get(pp)) && void 0 !== Sp ? Sp : [];
+               const TT = `${Math.floor(HT.x/this.cB)}|${Math.floor(HT.z/this.cB)}`,
+                 UT = null !== (gT = MT.get(TT)) && void 0 !== gT ? gT : [];
```

#### 1034. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10793-L10794` → after: `L10793-L10794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794) · [Before (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794)

```diff
-               const pp = Math.floor(Lp[0].x / this.Qy) * this.Qy,
-                 ip = Math.floor(Lp[0].z / this.Qy) * this.Qy,
+               const TT = Math.floor(HT[0].x / this.cB) * this.cB,
+                 UT = Math.floor(HT[0].z / this.cB) * this.cB,
```

#### 1035. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815)

```diff
-                   DO: Yp.prefab.name
+                   om: kT.prefab.name
```

#### 1036. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-               Dp = Op.getOrGenerate(pp + Math.floor(this.Qy / 2), ip + Math.floor(this.Qy / 2))[0].biome.oreGenerator.getOreBlocksForChunk(pp, ip),
+               jT = WT.getOrGenerate(TT + Math.floor(this.cB / 2), UT + Math.floor(this.cB / 2))[0].biome.oreGenerator.getOreBlocksForChunk(TT, UT),
```

#### 1037. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10866` → after: `L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866)

```diff
-             return Op.t.create(this.Qy, [pp, ip], this.biomeSelector)
+             return WT.v.create(this.cB, [TT, UT], this.biomeSelector)
```

#### 1038. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10869-L10870` → after: `L10869-L10870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870) · [Before (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870)

```diff
-             const Sp = new zi.d(cp, op, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-             return Op.q.create(this.Qy, [pp, ip], Ip.f.NumFields, Sp)
+             const gT = new NU.c(mT, zT, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+             return WT.r.create(this.cB, [TT, UT], MT.i.NumFields, gT)
```

#### 1039. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874)

```diff
-       39890: (pp, ip, cp) => {
+       39793: (TT, UT, mT) => {
```

#### 1040. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10876` → after: `L10876-L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10876-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876-L10877) · [Before (L10876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876)

```diff
-           c: () => bp,
+           d: () => VT,
+           e: () => JT,
```

#### 1041. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10880-L10884` → after: `L10880-L10883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10880-L10883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10880-L10883) · [Before (L10880-L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10880-L10884)

```diff
-           m: () => Xp,
-           q: () => Bp,
-           t: () => Ep,
-           u: () => dp,
-           x: () => Hp,
+           o: () => aT,
+           r: () => QT,
+           v: () => tT,
+           w: () => iT,
```

#### 1042. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10886-L10889` → after: `L10885-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10885-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10885-L10889) · [Before (L10886-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10886-L10889)

```diff
-           B: () => Up,
-           E: () => ep,
-           H: () => tp,
-           K: () => vp
+           D: () => OT,
+           G: () => ZT,
+           K: () => bT,
+           M: () => fT,
+           P: () => vT
```

#### 1043. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10891` → after: `L10891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891) · [Before (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891)

```diff
-         var Op = cp(2937),
+         var WT = mT(2963),
```

#### 1044. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10904` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904)

```diff
-             const ip = "function" == typeof pp ? pp : function(pp) {
+             const UT = "function" == typeof TT ? TT : function(TT) {
```

#### 1045. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11113` → after: `L11113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113) · [Before (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113)

```diff
-         var yp = cp(39894);
+         var BT = mT(39796);
```

#### 1046. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11142` → after: `L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142) · [Before (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142)

```diff
-             Yx: tp(pp, Ip, Sp),
+             sg: fT(TT, MT, gT),
```

#### 1047. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11173` → after: `L11173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173) · [Before (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173)

```diff
-             for (let cp = 0; cp < pp.length; cp++) this._simplexes.push(new Wp(`${ip}${cp}`))
+             for (let mT = 0; mT < TT.length; mT++) this._simplexes.push(new pT(`${UT}${mT}`))
```

#### 1048. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11198` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198)

```diff
-             for (let op = 0; op < pp.length; op++) this._simplexes.push(new Wp(`${cp}${op}`));
+             for (let zT = 0; zT < TT.length; zT++) this._simplexes.push(new pT(`${mT}${zT}`));
```

#### 1049. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11206` → after: `L11206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11206) · [Before (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11206)

```diff
-               if (cp - this.remainingAmplitudes[Op] > this.threshold.high || cp + this.remainingAmplitudes[Op] < this.threshold.low) return yp.e;
+               if (mT - this.remainingAmplitudes[WT] > this.threshold.high || mT + this.remainingAmplitudes[WT] < this.threshold.low) return BT.b;
```

#### 1050. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11334` → after: `L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334)

```diff
-             if (void 0 === Op) throw new Error(`Number not found for x=${pp}, z=${ip}, thirdIndex=${cp}`);
+             if (void 0 === WT) throw new Error(`Number not found for x=${TT}, z=${UT}, thirdIndex=${mT}`);
```

#### 1051. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383)

```diff
-             if (void 0 === op) throw new Error(`Number not found for x=${pp}, z=${ip}, thirdIndex=${cp}, fourthIndex=${Op}`);
+             if (void 0 === zT) throw new Error(`Number not found for x=${TT}, z=${UT}, thirdIndex=${mT}, fourthIndex=${WT}`);
```

#### 1052. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413` → after: `L11413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413)

```diff
-       39894: (pp, ip, cp) => {
+       39796: (TT, UT, mT) => {
```

#### 1053. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11415-L11421` → after: `L11415-L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11415-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11415-L11421) · [Before (L11415-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11415-L11421)

```diff
-           e: () => Lp,
-           i: () => Sp,
-           l: () => Yp,
-           o: () => Ip,
-           r: () => xp,
-           u: () => op,
-           x: () => Op
+           b: () => HT,
+           d: () => gT,
+           g: () => kT,
+           h: () => MT,
+           j: () => nT,
+           k: () => zT,
+           l: () => WT
```

#### 1054. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       39903: (pp, ip, cp) => {
+       39799: (TT, UT, mT) => {
```

#### 1055. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11437-L11439` → after: `L11437-L11438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11437-L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11437-L11438) · [Before (L11437-L11439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11437-L11439)

```diff
-           f: () => Op,
-           h: () => Lp,
-           l: () => xp,
+           i: () => WT,
+           m: () => HT,
```

#### 1056. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11441` → after: `L11440-L11441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11440-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11440-L11441) · [Before (L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11441)

```diff
-           s: () => Ip
+           r: () => gT,
+           u: () => MT
```

#### 1057. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11460` → after: `L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460)

```diff
-       4346: (pp, ip, cp) => {
+       4333: (TT, UT, mT) => {
```

#### 1058. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11462-L11464` → after: `L11462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11462) · [Before (L11462-L11464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11462-L11464)

```diff
-           d: () => Lp,
-           f: () => Ip,
-           h: () => Op,
+           e: () => HT,
```

#### 1059. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11467` → after: `L11466-L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11466-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11466-L11467) · [Before (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11467)

```diff
-           n: () => op
+           n: () => gT,
+           r: () => zT
```

#### 1060. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11493` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493)

```diff
-             if (this.distribution = void 0, pp.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(pp)}`);
+             if (this.distribution = void 0, TT.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(TT)}`);
```

#### 1061. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11498` → after: `L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11498) · [Before (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11498)

```diff
-               if (ip.has(Op)) throw new Error(`Values must be unique: ${JSON.stringify(pp)}`);
+               if (UT.has(WT)) throw new Error(`Values must be unique: ${JSON.stringify(TT)}`);
```

#### 1062. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11501` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11501) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11501)

```diff
-               if (Ip <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(pp)}`);
+               if (MT <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(TT)}`);
```

#### 1063. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, pp > ip) throw new Error(`Min must be less than or equal to Max, but Min=${pp} and Max=${ip}`);
+             if (this.offset = void 0, this.multiplier = void 0, TT > UT) throw new Error(`Min must be less than or equal to Max, but Min=${TT} and Max=${UT}`);
```

#### 1064. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new Sp(pp, ip, cp), !Number.isInteger(pp) || !Number.isInteger(ip)) throw new Error(`Min and Max must be integers, but Min=${pp} and Max=${ip}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new gT(TT, UT, mT), !Number.isInteger(TT) || !Number.isInteger(UT)) throw new Error(`Min and Max must be integers, but Min=${TT} and Max=${UT}`)
```

#### 1065. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11552` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552)

```diff
-       640: (pp, ip, cp) => {
+       653: (TT, UT, mT) => {
```

#### 1066. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11556-L11561` → after: `L11556-L11560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11556-L11560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11556-L11560) · [Before (L11556-L11561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11556-L11561)

```diff
-           G: () => Lp,
-           Q: () => Ap,
-           d: () => xp,
-           f: () => Sp,
-           j: () => op,
-           t: () => Ip,
+           E: () => HT,
+           H: () => lT,
+           b: () => nT,
+           i: () => gT,
+           l: () => zT,
```

#### 1067. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11565` → after: `L11565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565)

```diff
-         var Op = cp(643);
+         var WT = mT(662);
```

#### 1068. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11595` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11595) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11595)

```diff
-         Op.c, Number(atob("NQ==")), Number(atob("MTM="));
+         WT.d, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 1069. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11603` → after: `L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603) · [Before (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603)

```diff
-       643: (pp, ip, cp) => {
+       662: (TT, UT, mT) => {
```

#### 1070. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11605` → after: `L11605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11605) · [Before (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11605)

```diff
-           c: () => Op
+           d: () => WT
```

#### 1071. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11609` → after: `L11609-L11613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11609-L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609-L11613) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609)

```diff
-       222: pp => {
+       237: (TT, UT, mT) => {
+         var WT = {
+           "./localConfigValues.ts.clientRelease": 240
+         };
+ 
```

#### 1072. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11611-L11612` → after: `L11615-L11624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11615-L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11615-L11624) · [Before (L11611-L11612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11611-L11612)

```diff
-           var ip = new Error("Cannot find module '" + pp + "'");
-           throw ip.code = "MODULE_NOT_FOUND", ip
+           var UT = MT(TT);
+           return mT(UT)
+         }
+ 
+         function MT(TT) {
+           if (!mT.o(WT, TT)) {
+             var UT = new Error("Cannot find module '" + TT + "'");
+             throw UT.code = "MODULE_NOT_FOUND", UT
+           }
+           return WT[TT]
```

#### 1073. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11614` → after: `L11626-L11631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11626-L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11626-L11631) · [Before (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11614)

```diff
-         ip.keys = () => [], ip.resolve = ip, ip.id = 222, pp.exports = ip
+         zT.keys = function() {
+           return Object.keys(WT)
+         }, zT.resolve = MT, TT.exports = zT, zT.id = 237
+       },
+       240: (TT, UT, mT) => {
+         TT.exports = mT.p + "static/media/localConfigValues.ts.3f6ee800434514cb12b7.clientRelease"
```

#### 1074. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11637-L11642` → after: `L11654-L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11654-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11654-L11659) · [Before (L11637-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11637-L11642)

```diff
-   }, cp.f = {}, cp.e = pp => Promise.all(Object.keys(cp.f).reduce(((ip, Op) => (cp.f[Op](pp, ip), ip)), [])), cp.u = pp => "static/js/sn3sfj." + (70 === pp ? "worldgenTables" : pp) + "." + {
-     70: "c1382818",
-     73: "86a4c018",
-     74: "aeb128b4",
-     75: "b034e052",
-     76: "b886153e"
+   }, mT.f = {}, mT.e = TT => Promise.all(Object.keys(mT.f).reduce(((UT, WT) => (mT.f[WT](TT, UT), UT)), [])), mT.u = TT => "static/js/yma3ej." + (70 === TT ? "worldgenTables" : TT) + "." + {
+     70: "3086604c",
+     73: "c98bda4a",
+     74: "4ff4dca8",
+     75: "40ee430e",
+     76: "437ce89d"
```

#### 1075. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11717` → after: `L11734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11734) · [Before (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11717)

```diff
-       cp = ip < 0 ? this.length + ip : ip;
+       mT = UT < 0 ? this.length + UT : UT;
```

#### 1076. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11732-L11734` → after: `L11749-L11751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11749-L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11749-L11751) · [Before (L11732-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11732-L11734)

```diff
-     Jw: () => fp,
-     Bw: () => bp,
-     dA: () => hp,
+     fc: () => PT,
+     qc: () => VT,
+     Ul: () => uT,
```

#### 1077. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11737-L11747` → after: `L11754-L11764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11754-L11764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11754-L11764) · [Before (L11737-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11737-L11747)

```diff
-     eA: () => ap,
-     uA: () => np,
-     jA: () => Fp,
-     kA: () => gp,
-     mA: () => Gp,
-     RA: () => rp,
-     qA: () => Zp,
-     MA: () => zp,
-     lA: () => sp,
-     JA: () => Kp,
-     BA: () => Vp
+     ml: () => CT,
+     Wl: () => rT,
+     zl: () => KT,
+     Ml: () => ST,
+     gl: () => GT,
+     nl: () => NT,
+     Hl: () => ET,
+     kl: () => hT,
+     pl: () => DT,
+     Zl: () => oT,
+     cl: () => AT
```

#### 1078. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11754` → after: `L11771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11771) · [Before (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11754)

```diff
-   var Yp = cp(2937),
+   var kT = mT(2963),
```

#### 1079. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11789` → after: `L11806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11806) · [Before (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11789)

```diff
-     return null === Up ? "not failed" : `${Up}: ${(pp=wp)instanceof Error?`${pp.name}: ${pp.message}`:String(pp)}`;
+     return null === ZT ? "not failed" : `${ZT}: ${(TT=cT)instanceof Error?`${TT.name}: ${TT.message}`:String(TT)}`;
```

#### 1080. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11794` → after: `L11811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11811) · [Before (L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11794)

```diff
-     if (!Rp()) throw new Error(`Bloxd wasm is not ready (${qp()}): check isBloxdWasmReady() first`);
+     if (!JT()) throw new Error(`Bloxd wasm is not ready (${xT()}): check isBloxdWasmReady() first`);
```

#### 1081. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11832` → after: `L11849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11849) · [Before (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11832)

```diff
-       lA: op
+       pl: zT
```

#### 1082. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11853` → after: `L11870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11870) · [Before (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11853)

```diff
-     yp = "failed", Up = ip, wp = pp, console.error(`Bloxd wasm failed (${ip}):`, pp);
+     BT = "failed", ZT = UT, cT = TT, console.error(`Bloxd wasm failed (${UT}):`, TT);
```

#### 1083. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11872-L11873` → after: `L11889-L11890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11889-L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11889-L11890) · [Before (L11872-L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11872-L11873)

```diff
-       reserveUpFront: ip => pp().kA(ip),
-       reserveAhead: ip => pp().jA(ip),
+       reserveUpFront: UT => TT().Ml(UT),
+       reserveAhead: UT => TT().zl(UT),
```

#### 1084. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11875` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11892) · [Before (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11875)

```diff
-         pp().mA(ip)
+         TT().gl(UT)
```

#### 1085. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11877` → after: `L11894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11894) · [Before (L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11877)

```diff
-       lowWater: () => Np[pp().uA()] ?? "none",
+       lowWater: () => sT[TT().Wl()] ?? "none",
```

#### 1086. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11900-L11902` → after: `L11917-L11919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11917-L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11917-L11919) · [Before (L11900-L11902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11900-L11902)

```diff
-       }(pp().RA()),
-       takeBallast: () => pp().qA(),
-       takePressure: () => pp().MA()
+       }(TT().nl()),
+       takeBallast: () => TT().Hl(),
+       takePressure: () => TT().kl()
```

#### 1087. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11912` → after: `L11929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11929) · [Before (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11912)

```diff
-       Hi.MOKx(pp, 0)
+       vU.LSoG(TT, 0)
```

#### 1088. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11915` → after: `L11932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11932) · [Before (L11915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11915)

```diff
-       const ip = Ai(pp, Hi.t9Yx, Hi.wkgK),
+       const UT = kU(TT, vU.PVo1, vU.dZ2R),
```

#### 1089. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11917` → after: `L11934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11934) · [Before (L11917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11917)

```diff
-       Hi.OBfH(this.__wbg_ptr, ip, cp)
+       vU.AMYl(this.__wbg_ptr, UT, mT)
```

#### 1090. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11920` → after: `L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11937) · [Before (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11920)

```diff
-       return Hi.YpWd(this.__wbg_ptr) >>> 0
+       return vU.DNgO(this.__wbg_ptr) >>> 0
```

#### 1091. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11923` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11940) · [Before (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11923)

```diff
-       const pp = Hi.g93G();
+       const TT = vU.NZF8();
```

#### 1092. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11927` → after: `L11944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944) · [Before (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11927)

```diff
-       return Hi.MjiF(this.__wbg_ptr) >>> 0
+       return vU.Kk0P(this.__wbg_ptr) >>> 0
```

#### 1093. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11930` → after: `L11947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11947) · [Before (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11930)

```diff
-       return Hi.OS8C(this.__wbg_ptr) >>> 0
+       return vU.zVyn(this.__wbg_ptr) >>> 0
```

#### 1094. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11933` → after: `L11950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11950) · [Before (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11933)

```diff
-       return Hi.MOpJ(this.__wbg_ptr) >>> 0
+       return vU.Qa1f(this.__wbg_ptr) >>> 0
```

#### 1095. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11944` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11961) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944)

```diff
-       Hi.NbEr(pp, 0)
+       vU.q3qL(TT, 0)
```

#### 1096. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11947` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964) · [Before (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11947)

```diff
-       return Hi.kBQ4(this.__wbg_ptr, pp) >>> 0
+       return vU.tfdG(this.__wbg_ptr, TT) >>> 0
```

#### 1097. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11950` → after: `L11967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11967) · [Before (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11950)

```diff
-       return Hi.abw8(this.__wbg_ptr, pp) >>> 0
+       return vU.zRXu(this.__wbg_ptr, TT) >>> 0
```

#### 1098. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11953` → after: `L11970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11970) · [Before (L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11953)

```diff
-       const ip = Hi.o0JL(void 0 === (cp = pp) || null === cp ? Number.MAX_SAFE_INTEGER : pp >>> 0);
+       const UT = vU.DDAe(void 0 === (mT = TT) || null === mT ? Number.MAX_SAFE_INTEGER : TT >>> 0);
```

#### 1099. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11958` → after: `L11975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11975) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11958)

```diff
-       return Hi.PshP(this.__wbg_ptr) >>> 0
+       return vU.c2wA(this.__wbg_ptr) >>> 0
```

#### 1100. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11961` → after: `L11978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11978) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11961)

```diff
-       return Hi.TxAk(this.__wbg_ptr) >>> 0
+       return vU.EpOm(this.__wbg_ptr) >>> 0
```

#### 1101. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11964` → after: `L11981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11981) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964)

```diff
-       return Hi.NpQN(this.__wbg_ptr, pp) >>> 0
+       return vU.oZmO(this.__wbg_ptr, TT) >>> 0
```

#### 1102. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11969` → after: `L11986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11986) · [Before (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11969)

```diff
-     const cp = Ai(pp, Hi.t9Yx, Hi.wkgK),
+     const mT = kU(TT, vU.PVo1, vU.dZ2R),
```

#### 1103. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11971` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988) · [Before (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11971)

```diff
-       op = Hi.TXdo(cp, Op, ip);
+       zT = vU.wwBQ(mT, WT, UT);
```

#### 1104. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11976` → after: `L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11993) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11976)

```diff
-     Hi.qLbv()
+     vU.szFZ()
```

#### 1105. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11980` → after: `L11997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11997) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11980)

```diff
-     return Hi.s1kU() >>> 0
+     return vU.AXuD() >>> 0
```

#### 1106. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11984` → after: `L12001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12001) · [Before (L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11984)

```diff
-     return 0 !== Hi.y20S(pp)
+     return 0 !== vU.FQKe(TT)
```

#### 1107. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11988` → after: `L12005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12005) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988)

```diff
-     return 0 !== Hi.RyYY(pp)
+     return 0 !== vU.kjzn(TT)
```

#### 1108. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11992` → after: `L12009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12009) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11992)

```diff
-     Hi.DlSL(pp)
+     vU.VBkV(TT)
```

#### 1109. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11996` → after: `L12013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12013) · [Before (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11996)

```diff
-     return Hi.tRKe() >>> 0
+     return vU.HrtI() >>> 0
```

#### 1110. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12000` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12017) · [Before (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12000)

```diff
-     return Hi.TUyr() >>> 0
+     return vU.lgOV() >>> 0
```

#### 1111. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12004` → after: `L12021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12021) · [Before (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12004)

```diff
-     return 0 !== Hi.DqaO()
+     return 0 !== vU.cQ7s()
```

#### 1112. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12008` → after: `L12025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12025) · [Before (L12008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12008)

```diff
-     return Hi.YQeW() >>> 0
+     return vU.FuT3() >>> 0
```

#### 1113. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12014` → after: `L12031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12031) · [Before (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12014)

```diff
-       const cp = Hi.VoEw();
+       const mT = vU.gAkY();
```

#### 1114. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12017` → after: `L12034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12034) · [Before (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12017)

```diff
-       Hi.c6ds(pp, ip, 1)
+       vU.mc4Z(TT, UT, 1)
```

#### 1115. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12022` → after: `L12039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12039) · [Before (L12022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12022)

```diff
-     Hi.DIdY(oi(pp))
+     vU.aycz(mU(TT))
```

#### 1116. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12028` → after: `L12045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12045) · [Before (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12028)

```diff
-       M2c8: {
+       rUmV: {
```

#### 1117. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12030` → after: `L12047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12047) · [Before (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12030)

```diff
-         QsIB: function(pp, ip) {
+         Tn39: function(TT, UT) {
```

#### 1118. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12033` → after: `L12050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12050) · [Before (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12033)

```diff
-         EXA0: function(pp, ip) {
+         xfVM: function(TT, UT) {
```

#### 1119. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12036` → after: `L12053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12053) · [Before (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12036)

```diff
-         qfrR: function(pp) {
+         SMaL: function(TT) {
```

#### 1120. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12039` → after: `L12056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12056) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12039)

```diff
-         lFCw: function(pp, ip) {
+         K18L: function(TT, UT) {
```

#### 1121. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12042` → after: `L12059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12059) · [Before (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12042)

```diff
-         VsIf: function(pp) {
+         HRfb: function(TT) {
```

#### 1122. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12052` → after: `L12069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12069) · [Before (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12052)

```diff
-     } : new FinalizationRegistry((pp => Hi.MOKx(pp, 1))),
+     } : new FinalizationRegistry((TT => vU.LSoG(TT, 1))),
```

#### 1123. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12056` → after: `L12073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12073) · [Before (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12056)

```diff
-     } : new FinalizationRegistry((pp => Hi.NbEr(pp, 1)));
+     } : new FinalizationRegistry((TT => vU.q3qL(TT, 1)));
```

#### 1124. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12133` → after: `L12150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12150) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12133)

```diff
-     return ti = pp, Hi = pp.exports, vi = ip, Si = null, Hi.zayO(), Hi
+     return cU = TT, vU = TT.exports, ZU = UT, zU = null, vU.Tlce(), vU
```

#### 1125. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12157` → after: `L12174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12174) · [Before (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12157)

```diff
-         if (!pp.ok) throw new Error(`failed to fetch Wasm: ${pp.status} ${pp.statusText} fetching '${pp.url}'`);
+         if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
```

#### 1126. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12187-L12188` → after: `L12204-L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12204-L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12204-L12205) · [Before (L12187-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12187-L12188)

```diff
-       if (!Rp()) throw new Error(`Bloxd wasm is not ready (${qp()}): check isBloxdWasmReady() first`);
-       if (dp !== pp) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${ip}`)
+       if (!JT()) throw new Error(`Bloxd wasm is not ready (${xT()}): check isBloxdWasmReady() first`);
+       if (iT !== TT) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${UT}`)
```

#### 1127. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12191` → after: `L12208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12208) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12191)

```diff
-   var mi = cp(640);
+   var eU = mT(653);
```

#### 1128. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12198` → after: `L12215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12215) · [Before (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12198)

```diff
-       } = cp(39993), Wp = function(pp, ip, cp) {
+       } = mT(39883), pT = function(TT, UT, mT) {
```

#### 1129. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12200` → after: `L12217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12217) · [Before (L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12200)

```diff
-         for (const xp of pp.sO) li(xp, cp);
+         for (const nT of TT.sW) aU(nT, mT);
```

#### 1130. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12203` → after: `L12220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12220) · [Before (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12203)

```diff
-           sO: pp.sO,
+           sW: TT.sW,
```

#### 1131. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12209` → after: `L12226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12226) · [Before (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12209)

```diff
-           throw new Error(`Custom world-gen terrain "${Op.name}" is not in this generator's catalogue (${pp.length>0?pp.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${WT.name}" is not in this generator's catalogue (${TT.length>0?TT.join(", "):"empty"})`)
```

#### 1132. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12214` → after: `L12231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12231) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12214)

```diff
-               if (null !== pp.zO) throw new Error(`Custom world-gen terrain "${pp.name}" takes no options`);
+               if (null !== TT.QW) throw new Error(`Custom world-gen terrain "${TT.name}" takes no options`);
```

#### 1133. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12218-L12219` → after: `L12235-L12236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12235-L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12235-L12236) · [Before (L12218-L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12218-L12219)

```diff
-             if (null !== pp.zO) try {
-               cp = JSON.parse(pp.zO)
+             if (null !== TT.QW) try {
+               mT = JSON.parse(TT.QW)
```

#### 1134. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12221` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12238) · [Before (L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12221)

```diff
-               throw new Error(`Custom world-gen terrain "${pp.name}" has invalid optionsJson: ${String(Op)}`, {
+               throw new Error(`Custom world-gen terrain "${TT.name}" has invalid optionsJson: ${String(WT)}`, {
```

#### 1135. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12228` → after: `L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12245) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12228)

```diff
-           sO: pp.sO,
+           sW: TT.sW,
```

#### 1136. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12231` → after: `L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12248) · [Before (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12231)

```diff
-       }(null !== (Dp = null === xp || void 0 === xp ? void 0 : xp.GO) && void 0 !== Dp ? Dp : null, Lp, ip);
+       }(null !== (jT = null === nT || void 0 === nT ? void 0 : nT.yW) && void 0 !== jT ? jT : null, HT, UT);
```

#### 1137. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12233` → after: `L12250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12250) · [Before (L12233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12233)

```diff
-       const yp = null !== (Ap = null === xp || void 0 === xp ? void 0 : xp.layers) && void 0 !== Ap ? Ap : [];
+       const BT = null !== (lT = null === nT || void 0 === nT ? void 0 : nT.layers) && void 0 !== lT ? lT : [];
```

#### 1138. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12236` → after: `L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12253) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12236)

```diff
-         const cp = [...pp].sort(((pp, ip) => pp.UO - ip.UO));
+         const mT = [...TT].sort(((TT, UT) => TT.UW - UT.UW));
```

#### 1139. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12238` → after: `L12255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12255) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12238)

```diff
-           if (cp[Op].UO < cp[Op - 1].wO) throw new Error(`Custom world-gen layers overlap: [${cp[Op-1].UO}, ${cp[Op-1].wO}) and [${cp[Op].UO}, ${cp[Op].wO})`)
+           if (mT[WT].UW < mT[WT - 1].mW) throw new Error(`Custom world-gen layers overlap: [${mT[WT-1].UW}, ${mT[WT-1].mW}) and [${mT[WT].UW}, ${mT[WT].mW})`)
```

#### 1140. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12250` → after: `L12267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12267) · [Before (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12250)

```diff
-         if (cp >= op.UO && cp < op.wO) return Ip.getChunk(pp, ip, cp - op.vO, Op);
+         if (mT >= zT.UW && mT < zT.mW) return MT.getChunk(TT, UT, mT - zT.WW, WT);
```

#### 1141. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12268-L12269` → after: `L12285-L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12285-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12285-L12286) · [Before (L12268-L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12268-L12269)

```diff
-     if (pp.UO >= pp.wO) throw new Error(`Custom world-gen layer has minY (${pp.UO}) >= maxY (${pp.wO})`);
-     if (pp.UO % mi.z !== 0 || pp.wO % mi.z !== 0 || pp.vO % mi.z !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${mi.z}); got minY=${pp.UO}, maxY=${pp.wO}, groundY=${pp.vO}`);
+     if (TT.UW >= TT.mW) throw new Error(`Custom world-gen layer has minY (${TT.UW}) >= maxY (${TT.mW})`);
+     if (TT.UW % eU.z !== 0 || TT.mW % eU.z !== 0 || TT.WW % eU.z !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${eU.z}); got minY=${TT.UW}, maxY=${TT.mW}, groundY=${TT.WW}`);
```

#### 1142. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12271-L12274` → after: `L12288-L12291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12288-L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12288-L12291) · [Before (L12271-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12271-L12274)

```diff
-         if (void 0 === (0, mi.C)(pp.eO, ip)) throw new Error(`Custom world-gen caves lavaPitBlock "${pp.eO}" not found in blockMetadata`);
-         if (pp.uO)
-           for (const cp of pp.uO) Mi(cp, ip)
-       }(pp.HO, ip), 0 === pp.BO.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, eU.C)(TT.nW, UT)) throw new Error(`Custom world-gen caves lavaPitBlock "${TT.nW}" not found in blockMetadata`);
+         if (TT.HW)
+           for (const mT of TT.HW) xU(mT, UT)
+       }(TT.MW, UT), 0 === TT.bW.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1143. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12276` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12293) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12276)

```diff
-     for (const Op of pp.BO) Xi(Op, ip), cp += Op.frequency;
+     for (const WT of TT.bW) tU(WT, UT), mT += WT.frequency;
```

#### 1144. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12278` → after: `L12295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12295) · [Before (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12278)

```diff
-     for (const Op of pp.aO) li(Op, ip)
+     for (const WT of TT.dW) aU(WT, UT)
```

#### 1145. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12284-L12286` → after: `L12301-L12303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12301-L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12301-L12303) · [Before (L12284-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12284-L12286)

```diff
-       kO: Op,
-       mO: op,
-       RO: Ip
+       jW: WT,
+       lW: zT,
+       LW: MT
```

#### 1146. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12288-L12289` → after: `L12305-L12306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12305-L12306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12305-L12306) · [Before (L12288-L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12288-L12289)

```diff
-     if (void 0 === (0, mi.C)(cp, ip)) throw new Error(`Custom world-gen cave decoration blockName "${cp}" not found in blockMetadata`);
-     if (!Op && !op && !Ip) throw new Error(`Custom world-gen cave decoration "${cp}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, eU.C)(mT, UT)) throw new Error(`Custom world-gen cave decoration blockName "${mT}" not found in blockMetadata`);
+     if (!WT && !zT && !MT) throw new Error(`Custom world-gen cave decoration "${mT}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1147. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12292-L12293` → after: `L12309-L12310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12309-L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12309-L12310) · [Before (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12292-L12293)

```diff
-     if (Ip && Ci(cp, "meta|rot1|top", ip), Ei(pp.qO, cp, "qO"), Ei(pp.MO, cp, "MO"), !Number.isInteger(pp.CO) || pp.CO < 0) throw new Error(`Custom world-gen cave decoration "${cp}" minPlacements must be a non-negative integer, got ${pp.CO}`);
-     if (!(0, mi.G)(pp.EO) && (Ei(pp.EO.lO, cp, "depthRamp.deepClusterChance"), pp.EO.QO <= pp.EO.JO)) throw new Error(`Custom world-gen cave decoration "${cp}" deepY must be strictly smaller than shallowY, but ${pp.EO.QO} <= ${pp.EO.JO} `)
+     if (MT && dU(mT, "meta|rot1|top", UT), wU(TT.pW, mT, "pW"), wU(TT.BW, mT, "BW"), !Number.isInteger(TT.ZW) || TT.ZW < 0) throw new Error(`Custom world-gen cave decoration "${mT}" minPlacements must be a non-negative integer, got ${TT.ZW}`);
+     if (!(0, eU.E)(TT.cW) && (wU(TT.cW.fW, mT, "depthRamp.deepClusterChance"), TT.cW.qW <= TT.cW.iW)) throw new Error(`Custom world-gen cave decoration "${mT}" deepY must be strictly smaller than shallowY, but ${TT.cW.qW} <= ${TT.cW.iW} `)
```

#### 1148. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12297-L12298` → after: `L12314-L12315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12314-L12315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12314-L12315) · [Before (L12297-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12297-L12298)

```diff
-     const Op = `${pp}|${ip}`;
-     if (void 0 === (0, mi.C)(Op, cp)) throw new Error(`Custom world-gen cave decoration "${pp}" is missing directional variant "${Op}" required for wall/ceiling anchoring`)
+     const WT = `${TT}|${UT}`;
+     if (void 0 === (0, eU.C)(WT, mT)) throw new Error(`Custom world-gen cave decoration "${TT}" is missing directional variant "${WT}" required for wall/ceiling anchoring`)
```

#### 1149. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12302` → after: `L12319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12319) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12302)

```diff
-     if (pp < 0 || pp > 1) throw new Error(`Custom world-gen cave decoration "${ip}" ${cp} must be in [0, 1], got ${pp}`)
+     if (TT < 0 || TT > 1) throw new Error(`Custom world-gen cave decoration "${UT}" ${mT} must be in [0, 1], got ${TT}`)
```

#### 1150. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12306-L12312` → after: `L12323-L12329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12323-L12329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12323-L12329) · [Before (L12306-L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12306-L12312)

```diff
-     if (pp.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${pp.frequency}`);
-     if (void 0 === (0, mi.C)(pp.TO, ip)) throw new Error(`Custom world-gen biome topsoilBlock "${pp.TO}" not found in blockMetadata`);
-     if (void 0 === (0, mi.C)(pp.fO, ip)) throw new Error(`Custom world-gen biome lowsoilBlock "${pp.fO}" not found in blockMetadata`);
-     if (0 === pp.bO.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const cp of pp.bO) {
-       if (cp.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${cp.frequency}`);
-       if (void 0 === (0, mi.C)(cp.blockName, ip)) throw new Error(`Custom world-gen biome stoneType blockName "${cp.blockName}" not found in blockMetadata`)
+     if (TT.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${TT.frequency}`);
+     if (void 0 === (0, eU.C)(TT.eW, UT)) throw new Error(`Custom world-gen biome topsoilBlock "${TT.eW}" not found in blockMetadata`);
+     if (void 0 === (0, eU.C)(TT.YW, UT)) throw new Error(`Custom world-gen biome lowsoilBlock "${TT.YW}" not found in blockMetadata`);
+     if (0 === TT.JW.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const mT of TT.JW) {
+       if (mT.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${mT.frequency}`);
+       if (void 0 === (0, eU.C)(mT.blockName, UT)) throw new Error(`Custom world-gen biome stoneType blockName "${mT.blockName}" not found in blockMetadata`)
```

#### 1151. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12317-L12321` → after: `L12334-L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12334-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12334-L12338) · [Before (L12317-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12317-L12321)

```diff
-     if (void 0 === (0, mi.C)(pp.blockName, ip)) throw new Error(`Custom world-gen ore blockName "${pp.blockName}" not found in blockMetadata`);
-     if (pp.radius < 0) throw new Error(`Custom world-gen ore "${pp.blockName}" radius must be >= 0, got ${pp.radius}`);
-     if (pp.FO <= 0) throw new Error(`Custom world-gen ore "${pp.blockName}" minDistBetweenDeposits must be > 0, got ${pp.FO}`);
-     if (pp.UO > pp.wO) throw new Error(`Custom world-gen ore "${pp.blockName}" minY (${pp.UO}) must be <= maxY (${pp.wO})`);
-     if (pp.gO < 0 || pp.gO > 1) throw new Error(`Custom world-gen ore "${pp.blockName}" spawnChance must be in [0, 1], got ${pp.gO}`)
+     if (void 0 === (0, eU.C)(TT.blockName, UT)) throw new Error(`Custom world-gen ore blockName "${TT.blockName}" not found in blockMetadata`);
+     if (TT.radius < 0) throw new Error(`Custom world-gen ore "${TT.blockName}" radius must be >= 0, got ${TT.radius}`);
+     if (TT.tW <= 0) throw new Error(`Custom world-gen ore "${TT.blockName}" minDistBetweenDeposits must be > 0, got ${TT.tW}`);
+     if (TT.UW > TT.mW) throw new Error(`Custom world-gen ore "${TT.blockName}" minY (${TT.UW}) must be <= maxY (${TT.mW})`);
+     if (TT.aW < 0 || TT.aW > 1) throw new Error(`Custom world-gen ore "${TT.blockName}" spawnChance must be in [0, 1], got ${TT.aW}`)
```

#### 1152. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12327-L12330` → after: `L12344-L12347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12344-L12347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12344-L12347) · [Before (L12327-L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12327-L12330)

```diff
-       FO: 10,
-       UO: -98,
-       wO: -78,
-       gO: .4
+       tW: 10,
+       UW: -98,
+       mW: -78,
+       aW: .4
```

#### 1153. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12335-L12338` → after: `L12352-L12355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12352-L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12352-L12355) · [Before (L12335-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12335-L12338)

```diff
-       FO: 6,
-       UO: -40,
-       wO: 20,
-       gO: .6
+       tW: 6,
+       UW: -40,
+       mW: 20,
+       aW: .6
```

#### 1154. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12342-L12345` → after: `L12359-L12362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12359-L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12359-L12362) · [Before (L12342-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12342-L12345)

```diff
-       FO: 10,
-       UO: -75,
-       wO: -55,
-       gO: .4
+       tW: 10,
+       UW: -75,
+       mW: -55,
+       aW: .4
```

#### 1155. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12349` → after: `L12366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12366) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12349)

```diff
-       zO: null
+       QW: null
```

#### 1156. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12352` → after: `L12369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12369) · [Before (L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12352)

```diff
-     [Qi]: () => cp(39873).e
+     [yU]: () => mT(39785).c
```

#### 1157. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12377` → after: `L12394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12394) · [Before (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12377)

```diff
-       if (!zi.includes(ip)) throw new Error(`Invalid port offset "${pp}". Must be one of: ${zi.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!NU.includes(UT)) throw new Error(`Invalid port offset "${TT}". Must be one of: ${NU.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1158. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12455` → after: `L12472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12472) · [Before (L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12455)

```diff
-     const ip = Gi() ? pc : ic;
+     const UT = KU() ? oU : AU;
```
