# Changed — Bundle Modifications Report (Part 127 / 141)

- **Updated at**: `2026-11-25T05:21 JST`
- **Part**: `127 / 141` (**445** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 126](part-126.md) · [Part 128 →](part-128.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9 · continued)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1955 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 1058. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10962-L10965` → after: `L10962-L10965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10962-L10965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10962-L10965) · [Before (L10962-L10965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10962-L10965)

```diff
-               for (let MT = UT; MT < UT + this.cB; MT++)
-                 for (let gT = mT; gT < mT + this.cB; gT++)
-                   for (let nT = zT; nT < zT + this.cB; nT++) {
-                     const HT = xT.b.getBlockFromFixedPointPrefab(MT, gT, nT, WT);
+               for (let dB = jB; dB < jB + this.ZJ; dB++)
+                 for (let IB = zB; IB < zB + this.ZJ; IB++)
+                   for (let NB = nB; NB < nB + this.ZJ; NB++) {
+                     const uB = qB.d.getBlockFromFixedPointPrefab(dB, IB, NB, QB);
```

#### 1059. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L10986` → after: `L10986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R10986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L10986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L10986) · [Before (L10986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L10986)

```diff
-               zT >= 0 && zT < this.cB && TT.set(mT[WT], zT, mT[WT + 2], mT[WT + 3])
+               nB >= 0 && nB < this.ZJ && BB.set(zB[QB], nB, zB[QB + 2], zB[QB + 3])
```

#### 1060. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11000` → after: `L11000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11000) · [Before (L11000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11000)

```diff
-             this.cB = TT, this.biomeSelector = UT, this.seed = mT, this.random = new LT.k(""), this.lilyPadId = void 0, this.lilyPadId = WT["Lily Pad"].id
+             this.ZJ = BB, this.biomeSelector = jB, this.seed = zB, this.random = new rB.i(""), this.lilyPadId = void 0, this.lilyPadId = QB["Lily Pad"].id
```

#### 1061. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11010-L11011` → after: `L11010-L11011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11010-L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11010-L11011) · [Before (L11010-L11011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11010-L11011)

```diff
-             for (let cT = TT; cT < TT + this.cB; cT++)
-               for (let vT = UT; vT < UT + this.cB; vT++) {
+             for (let yB = BB; yB < BB + this.ZJ; yB++)
+               for (let kB = jB; kB < jB + this.ZJ; kB++) {
```

#### 1062. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11013-L11014` → after: `L11013-L11014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11013-L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11013-L11014) · [Before (L11013-L11014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11013-L11014)

```diff
-                   qT = mT.getOrGenerate(cT, vT, MT.i.GroundHeight),
-                   iT = mT.getOrGenerate(cT, vT, MT.i.WaterHeight);
+                   LB = zB.getOrGenerate(yB, kB, dB.e.GroundHeight),
+                   gB = zB.getOrGenerate(yB, kB, dB.e.WaterHeight);
```

#### 1063. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11018-L11019` → after: `L11018-L11019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11018-L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11018-L11019) · [Before (L11018-L11019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11018-L11019)

```diff
-                 if (iT !== gT.k) {
-                   ZT = !0, qT < iT && kT.push(bT, OT, qT + 1, iT, fT.topwaterBlockType), fT.hasScatteredLakes && 1 === mT.getOrGenerate(cT, vT, MT.i.IsLake) && (this.random.reseed(`${cT}|${vT}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(cT, vT, mT) && lT … [truncated]
+                 if (gB !== IB.p) {
+                   mB = !0, LB < gB && UB.push(tB, SB, LB + 1, gB, GB.topwaterBlockType), GB.hasScatteredLakes && 1 === zB.getOrGenerate(yB, kB, dB.e.IsLake) && (this.random.reseed(`${yB}|${kB}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(yB, kB, zB) && pB … [truncated]
```

#### 1064. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11023-L11024` → after: `L11023-L11024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11023-L11024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11023-L11024) · [Before (L11023-L11024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11023-L11024)

```diff
-                 if (fT.hasScatteredLakes && this.isBesideLake(cT, vT, mT) && (this.random.reseed(`${cT}|${vT}|${this.seed}oasisShore`), this.random.next() < .85 && (jT.push(bT, qT, OT), eT = this.biomeSelector.baseBiome.floraGenerator)), !HT.b.isInCave(cT, qT, vT, WT) && !xT.b.is … [truncated]
-                   for (let mT = qT + 1; mT <= qT + fT.maxFloraHeight; mT += this.cB) LT.startY = mT, eT.addBiomeFloraToColumn(LT, TT, UT, cT, mT, vT, qT)
+                 if (GB.hasScatteredLakes && this.isBesideLake(yB, kB, zB) && (this.random.reseed(`${yB}|${kB}|${this.seed}oasisShore`), this.random.next() < .85 && (aB.push(tB, LB, SB), MB = this.biomeSelector.baseBiome.floraGenerator)), !uB.d.isInCave(yB, LB, kB, QB) && !qB.d.is … [truncated]
+                   for (let zB = LB + 1; zB <= LB + GB.maxFloraHeight; zB += this.ZJ) rB.startY = zB, MB.addBiomeFloraToColumn(rB, BB, jB, yB, zB, kB, LB)
```

#### 1065. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11037` → after: `L11037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11037) · [Before (L11037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11037)

```diff
-             return mT.getOrGenerate(TT + 1, UT, MT.i.WaterHeight) !== gT.k && mT.getOrGenerate(TT - 1, UT, MT.i.WaterHeight) !== gT.k && mT.getOrGenerate(TT, UT + 1, MT.i.WaterHeight) !== gT.k && mT.getOrGenerate(TT, UT - 1, MT.i.WaterHeight) !== gT.k
+             return zB.getOrGenerate(BB + 1, jB, dB.e.WaterHeight) !== IB.p && zB.getOrGenerate(BB - 1, jB, dB.e.WaterHeight) !== IB.p && zB.getOrGenerate(BB, jB + 1, dB.e.WaterHeight) !== IB.p && zB.getOrGenerate(BB, jB - 1, dB.e.WaterHeight) !== IB.p
```

#### 1066. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11043` → after: `L11043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11043) · [Before (L11043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11043)

```diff
-             return mT.getOrGenerate(TT, UT, MT.i.WaterHeight) !== gT.k && 1 === mT.getOrGenerate(TT, UT, MT.i.IsLake)
+             return zB.getOrGenerate(BB, jB, dB.e.WaterHeight) !== IB.p && 1 === zB.getOrGenerate(BB, jB, dB.e.IsLake)
```

#### 1067. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11046` → after: `L11046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11046) · [Before (L11046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11046)

```diff
-         var NU = mT(39788);
+         var Kj = zB(39754);
```

#### 1068. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11051` → after: `L11051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11051) · [Before (L11051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11051)

```diff
-             if (this.cB = TT, this.hashChunkContents = lT, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.ZJ = BB, this.hashChunkContents = pB, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 1069. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11053` → after: `L11053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11053) · [Before (L11053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11053)

```diff
-               EU = new ZU.e("chunk columns", TT, 4e4)
+               Cj = new mj.c("chunk columns", BB, 4e4)
```

#### 1070. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11055-L11056` → after: `L11055-L11056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11055-L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11055-L11056) · [Before (L11055-L11056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11055-L11056)

```diff
-             this.chunkColumnInfos = EU.partition(), this.caveGenerator = new HT.b(zT, TT, UT, null !== (LT = null === kT || void 0 === kT ? void 0 : kT.MW.nW) && void 0 !== LT ? LT : "Lava");
-             const qT = new YU(UT, zT, TT, null !== (pT = null === kT || void 0 === kT ? void 0 : kT.dW) && void 0 !== pT ? pT : [...eU, ...null !== (BT = null === jT || void 0 === jT ? void 0 : jT.sW) && void 0 !== BT ? BT : []]),
+             this.chunkColumnInfos = Cj.partition(), this.caveGenerator = new uB.d(nB, BB, jB, null !== (rB = null === UB || void 0 === UB ? void 0 : UB.uQ.aQ) && void 0 !== rB ? rB : "Lava");
+             const LB = new Ej(jB, nB, BB, null !== (sB = null === UB || void 0 === UB ? void 0 : UB.DQ) && void 0 !== sB ? sB : [...Mj, ...null !== (JB = null === aB || void 0 === aB ? void 0 : aB.TQ) && void 0 !== JB ? JB : []]),
```

#### 1071. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11058` → after: `L11058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11058) · [Before (L11058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11058)

```diff
-                 cB: TT,
+                 ZJ: BB,
```

#### 1072. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11066-L11069` → after: `L11066-L11069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11066-L11069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11066-L11069) · [Before (L11066-L11069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11066-L11069)

```diff
-               bT = null !== (ZT = null === kT || void 0 === kT ? void 0 : kT.bW) && void 0 !== ZT ? ZT : null,
-               OT = null !== (cT = null === jT || void 0 === jT ? void 0 : jT.buildBiomes) && void 0 !== cT ? cT : null,
-               eT = null !== bT ? (0, JU.h)(bT, iT) : null !== OT ? this.buildTerrainBiomes(OT, iT) : (0, JU.k)(iT);
-             this.biomeSelector = new JU.e(this, qT, zT, TT, UT, eT), this.treeGenerator = new pU(this, this.biomeSelector, TT, zT, UT), this.fixedPointPrefabTracker = new xT.b(nT, TT), this.prefabGenerator = new zU({
+               tB = null !== (mB = null === UB || void 0 === UB ? void 0 : UB.EQ) && void 0 !== mB ? mB : null,
+               SB = null !== (yB = null === aB || void 0 === aB ? void 0 : aB.buildBiomes) && void 0 !== yB ? yB : null,
+               MB = null !== tB ? (0, ij.e)(tB, gB) : null !== SB ? this.buildTerrainBiomes(SB, gB) : (0, ij.g)(gB);
+             this.biomeSelector = new ij.c(this, LB, nB, BB, jB, MB), this.treeGenerator = new sj(this, this.biomeSelector, BB, nB, jB), this.fixedPointPrefabTracker = new qB.d(NB, BB), this.prefabGenerator = new nj({
```

#### 1073. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11071` → after: `L11071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11071) · [Before (L11071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11071)

```diff
-               cB: TT,
+               ZJ: BB,
```

#### 1074. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11075` → after: `L11075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11075) · [Before (L11075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11075)

```diff
-                 [MT.r.SURFACE]: {
+                 [dB.k.SURFACE]: {
```

#### 1075. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11077` → after: `L11077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11077) · [Before (L11077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11077)

```diff
-                     [MT.p.MEDIUM]: {
+                     [dB.j.MEDIUM]: {
```

#### 1076. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11080` → after: `L11080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11080) · [Before (L11080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11080)

```diff
-                     [MT.p.HIGH]: {
+                     [dB.j.HIGH]: {
```

#### 1077. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11083` → after: `L11083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11083) · [Before (L11083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11083)

```diff
-                     [MT.p.VERY_HIGH]: {
+                     [dB.j.VERY_HIGH]: {
```

#### 1078. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11088` → after: `L11088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11088) · [Before (L11088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11088)

```diff
-                 [MT.r.UNDERGROUND]: {
+                 [dB.k.UNDERGROUND]: {
```

#### 1079. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11090` → after: `L11090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11090) · [Before (L11090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11090)

```diff
-                     [MT.p.MEDIUM]: {
+                     [dB.j.MEDIUM]: {
```

#### 1080. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11093-L11094` → after: `L11093-L11094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11093-L11094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11093-L11094) · [Before (L11093-L11094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11093-L11094)

```diff
-                     [MT.p.HIGH]: null,
-                     [MT.p.VERY_HIGH]: null
+                     [dB.j.HIGH]: null,
+                     [dB.j.VERY_HIGH]: null
```

#### 1081. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11099` → after: `L11099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11099) · [Before (L11099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11099)

```diff
-             }), this.noWaterHeightmapGenerator = new NU.d((0, NU.e)(zT)), this.heightmapPerturb = new WT.g([{
+             }), this.noWaterHeightmapGenerator = new Kj.g((0, Kj.j)(nB)), this.heightmapPerturb = new QB.j([{
```

#### 1082. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11108` → after: `L11108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11108) · [Before (L11108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11108)

```diff
-             }], `${zT}HeightmapPerturb`);
+             }], `${nB}HeightmapPerturb`);
```

#### 1083. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11114` → after: `L11114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11114) · [Before (L11114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11114)

```diff
-             this.waterBodyGenerator = new iU(this.biomeSelector, this.noWaterHeightmapGenerator, zT, TT, YT, this.needOutsideWaterDist, gT, null === (vT = null === kT || void 0 === kT ? void 0 : kT.zW) || void 0 === vT || vT), this.caveDecorationGenerator = new CU(UT, TT, zT, nul … [truncated]
+             this.waterBodyGenerator = new gj(this.biomeSelector, this.noWaterHeightmapGenerator, nB, BB, EB, this.needOutsideWaterDist, IB, null === (kB = null === UB || void 0 === UB ? void 0 : UB.NQ) || void 0 === kB || kB), this.caveDecorationGenerator = new Wj(jB, BB, nB, nul … [truncated]
```

#### 1084. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11133` → after: `L11133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11133) · [Before (L11133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11133)

```diff
-             const mT = this.cB,
+             const zB = this.ZJ,
```

#### 1085. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11151` → after: `L11151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11151) · [Before (L11151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11151)

```diff
-               if ((null !== (zT = WT.get(MT.key)) && void 0 !== zT ? zT : MT) !== MT) throw new Error(`A world-gen terrain built two biomes keyed "${MT.key}"`);
+               if ((null !== (nB = QB.get(dB.key)) && void 0 !== nB ? nB : dB) !== dB) throw new Error(`A world-gen terrain built two biomes keyed "${dB.key}"`);
```

#### 1086. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11161-L11162` → after: `L11161-L11162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11161-L11162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11161-L11162) · [Before (L11161-L11162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11161-L11162)

```diff
-               const TT = `${Math.floor(HT.x/this.cB)}|${Math.floor(HT.z/this.cB)}`,
-                 UT = null !== (gT = MT.get(TT)) && void 0 !== gT ? gT : [];
+               const BB = `${Math.floor(uB.x/this.ZJ)}|${Math.floor(uB.z/this.ZJ)}`,
+                 jB = null !== (IB = dB.get(BB)) && void 0 !== IB ? IB : [];
```

#### 1087. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11167-L11168` → after: `L11167-L11168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11167-L11168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11167-L11168) · [Before (L11167-L11168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11167-L11168)

```diff
-               const TT = Math.floor(HT[0].x / this.cB) * this.cB,
-                 UT = Math.floor(HT[0].z / this.cB) * this.cB,
+               const BB = Math.floor(uB[0].x / this.ZJ) * this.ZJ,
+                 jB = Math.floor(uB[0].z / this.ZJ) * this.ZJ,
```

#### 1088. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11189` → after: `L11189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11189) · [Before (L11189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11189)

```diff
-                   om: kT.prefab.name
+                   BQ: UB.prefab.name
```

#### 1089. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11222` → after: `L11222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11222) · [Before (L11222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11222)

```diff
-               jT = WT.getOrGenerate(TT + Math.floor(this.cB / 2), UT + Math.floor(this.cB / 2))[0].biome.oreGenerator.getOreBlocksForChunk(TT, UT),
+               aB = QB.getOrGenerate(BB + Math.floor(this.ZJ / 2), jB + Math.floor(this.ZJ / 2))[0].biome.oreGenerator.getOreBlocksForChunk(BB, jB),
```

#### 1090. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11240` → after: `L11240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11240) · [Before (L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11240)

```diff
-             return WT.v.create(this.cB, [TT, UT], this.biomeSelector)
+             return QB.q.create(this.ZJ, [BB, jB], this.biomeSelector)
```

#### 1091. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11243-L11244` → after: `L11243-L11244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11243-L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11243-L11244) · [Before (L11243-L11244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11243-L11244)

```diff
-             const gT = new NU.c(mT, zT, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-             return WT.r.create(this.cB, [TT, UT], MT.i.NumFields, gT)
+             const IB = new Kj.d(zB, nB, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+             return QB.o.create(this.ZJ, [BB, jB], dB.e.NumFields, IB)
```

#### 1092. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11248` → after: `L11248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11248) · [Before (L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11248)

```diff
-       39793: (TT, UT, mT) => {
+       39761: (BB, jB, zB) => {
```

#### 1093. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11253` → after: `L11252-L11254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11252-L11254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11252-L11254) · [Before (L11253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11253)

```diff
-           k: () => YT,
+           j: () => MB,
+           m: () => EB,
+           n: () => DB,
```

#### 1094. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11255-L11258` → after: `L11256-L11261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11256-L11261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11256-L11261) · [Before (L11255-L11258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11255-L11258)

```diff
-           r: () => QT,
-           v: () => tT,
-           w: () => iT,
-           z: () => qT,
+           q: () => HB,
+           t: () => gB,
+           u: () => LB,
+           x: () => SB,
+           A: () => mB,
+           B: () => tB,
```

#### 1095. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11260-L11263` → after: `L11263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11263) · [Before (L11260-L11263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11260-L11263)

```diff
-           G: () => ZT,
-           K: () => bT,
-           M: () => fT,
-           P: () => vT
+           H: () => kB
```

#### 1096. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11265` → after: `L11265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11265) · [Before (L11265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11265)

```diff
-         var WT = mT(2963),
+         var QB = zB(2944),
```

#### 1097. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11278` → after: `L11278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11278) · [Before (L11278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11278)

```diff
-             const UT = "function" == typeof TT ? TT : function(TT) {
+             const jB = "function" == typeof BB ? BB : function(BB) {
```

#### 1098. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11487` → after: `L11487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11487) · [Before (L11487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11487)

```diff
-         var BT = mT(39796);
+         var JB = zB(39763);
```

#### 1099. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11516` → after: `L11516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11516) · [Before (L11516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11516)

```diff
-             sg: fT(TT, MT, gT),
+             bI: GB(BB, dB, IB),
```

#### 1100. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11547` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11547) · [Before (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11547)

```diff
-             for (let mT = 0; mT < TT.length; mT++) this._simplexes.push(new pT(`${UT}${mT}`))
+             for (let zB = 0; zB < BB.length; zB++) this._simplexes.push(new sB(`${jB}${zB}`))
```

#### 1101. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11572` → after: `L11572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11572) · [Before (L11572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11572)

```diff
-             for (let zT = 0; zT < TT.length; zT++) this._simplexes.push(new pT(`${mT}${zT}`));
+             for (let nB = 0; nB < BB.length; nB++) this._simplexes.push(new sB(`${zB}${nB}`));
```

#### 1102. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11580` → after: `L11580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11580) · [Before (L11580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11580)

```diff
-               if (mT - this.remainingAmplitudes[WT] > this.threshold.high || mT + this.remainingAmplitudes[WT] < this.threshold.low) return BT.b;
+               if (zB - this.remainingAmplitudes[QB] > this.threshold.high || zB + this.remainingAmplitudes[QB] < this.threshold.low) return JB.c;
```

#### 1103. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11708` → after: `L11708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11708) · [Before (L11708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11708)

```diff
-             if (void 0 === WT) throw new Error(`Number not found for x=${TT}, z=${UT}, thirdIndex=${mT}`);
+             if (void 0 === QB) throw new Error(`Number not found for x=${BB}, z=${jB}, thirdIndex=${zB}`);
```

#### 1104. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11757` → after: `L11757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11757) · [Before (L11757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11757)

```diff
-             if (void 0 === zT) throw new Error(`Number not found for x=${TT}, z=${UT}, thirdIndex=${mT}, fourthIndex=${WT}`);
+             if (void 0 === nB) throw new Error(`Number not found for x=${BB}, z=${jB}, thirdIndex=${zB}, fourthIndex=${QB}`);
```

#### 1105. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11787` → after: `L11787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11787) · [Before (L11787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11787)

```diff
-       39796: (TT, UT, mT) => {
+       39763: (BB, jB, zB) => {
```

#### 1106. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11789` → after: `L11789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11789) · [Before (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11789)

```diff
-           b: () => HT,
+           c: () => uB,
```

#### 1107. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11791-L11792` → after: `L11791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11791) · [Before (L11791-L11792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11791-L11792)

```diff
-           g: () => kT,
-           h: () => MT,
+           f: () => UB,
```

#### 1108. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11794-L11795` → after: `L11793-L11795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11793-L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11793-L11795) · [Before (L11794-L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11794-L11795)

```diff
-           k: () => zT,
-           l: () => WT
+           l: () => NB,
+           p: () => nB,
+           r: () => QB
```

#### 1109. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11808` → after: `L11808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11808) · [Before (L11808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11808)

```diff
-       39799: (TT, UT, mT) => {
+       39767: (BB, jB, zB) => {
```

#### 1110. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11811-L11815` → after: `L11812-L11815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11812-L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11812-L11815) · [Before (L11811-L11815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11811-L11815)

```diff
-           i: () => WT,
-           m: () => HT,
-           p: () => nT,
-           r: () => gT,
-           u: () => MT
+           g: () => uB,
+           j: () => NB,
+           k: () => IB,
+           n: () => dB
```

#### 1111. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11834` → after: `L11834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11834) · [Before (L11834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11834)

```diff
-       4333: (TT, UT, mT) => {
+       4347: (BB, jB, zB) => {
```

#### 1112. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11838` → after: `L11839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11839) · [Before (L11838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11838)

```diff
-           k: () => WT,
+           j: () => NB,
```

#### 1113. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11840-L11841` → after: `L11841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11841) · [Before (L11840-L11841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11840-L11841)

```diff
-           n: () => gT,
-           r: () => zT
+           p: () => nB
```

#### 1114. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11867` → after: `L11867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11867) · [Before (L11867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11867)

```diff
-             if (this.distribution = void 0, TT.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(TT)}`);
+             if (this.distribution = void 0, BB.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(BB)}`);
```

#### 1115. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11872` → after: `L11872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11872) · [Before (L11872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11872)

```diff
-               if (UT.has(WT)) throw new Error(`Values must be unique: ${JSON.stringify(TT)}`);
+               if (jB.has(QB)) throw new Error(`Values must be unique: ${JSON.stringify(BB)}`);
```

#### 1116. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11875` → after: `L11875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11875) · [Before (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11875)

```diff
-               if (MT <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(TT)}`);
+               if (dB <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(BB)}`);
```

#### 1117. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11900` → after: `L11900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11900) · [Before (L11900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11900)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, TT > UT) throw new Error(`Min must be less than or equal to Max, but Min=${TT} and Max=${UT}`);
+             if (this.offset = void 0, this.multiplier = void 0, BB > jB) throw new Error(`Min must be less than or equal to Max, but Min=${BB} and Max=${jB}`);
```

#### 1118. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11910` → after: `L11910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11910) · [Before (L11910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11910)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new gT(TT, UT, mT), !Number.isInteger(TT) || !Number.isInteger(UT)) throw new Error(`Min and Max must be integers, but Min=${TT} and Max=${UT}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new IB(BB, jB, zB), !Number.isInteger(BB) || !Number.isInteger(jB)) throw new Error(`Min and Max must be integers, but Min=${BB} and Max=${jB}`)
```

#### 1119. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11926` → after: `L11926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11926) · [Before (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11926)

```diff
-       653: (TT, UT, mT) => {
+       658: (BB, jB, zB) => {
```

#### 1120. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11928` → after: `L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11928) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11928)

```diff
-           A: () => pT,
+           B: () => sB,
```

#### 1121. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11930-L11934` → after: `L11930-L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11930-L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11930-L11935) · [Before (L11930-L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11930-L11934)

```diff
-           E: () => HT,
-           H: () => lT,
-           b: () => nT,
-           i: () => gT,
-           l: () => zT,
+           I: () => uB,
+           P: () => pB,
+           d: () => NB,
+           j: () => IB,
+           k: () => nB,
+           s: () => dB,
```

#### 1122. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11936-L11937` → after: `L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11937) · [Before (L11936-L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11936-L11937)

```diff
-           y: () => LT,
-           z: () => kT
+           y: () => UB
```

#### 1123. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11939` → after: `L11939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11939) · [Before (L11939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11939)

```diff
-         var WT = mT(662);
+         var QB = zB(667);
```

#### 1124. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11969` → after: `L11969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11969) · [Before (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11969)

```diff
-         WT.d, Number(atob("NQ==")), Number(atob("MTM="));
+         QB.b, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 1125. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11977` → after: `L11977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11977) · [Before (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11977)

```diff
-       662: (TT, UT, mT) => {
+       667: (BB, jB, zB) => {
```

#### 1126. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11979` → after: `L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11979) · [Before (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11979)

```diff
-           d: () => WT
+           b: () => QB
```

#### 1127. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L11983-L11984` → after: `L11983-L11984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R11983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L11983-L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L11983-L11984) · [Before (L11983-L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L11983-L11984)

```diff
-       36402: (TT, UT, mT) => {
-         TT.exports = mT.p + "static/media/bloxd_wasm_bg.e3fc1f9db38ebfa3cee2.wasm"
+       36389: (BB, jB, zB) => {
+         BB.exports = zB.p + "static/media/bloxd_wasm_bg.d2cec8caa5b8b2a6c029.wasm"
```

#### 1128. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12066` → after: `L12066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12066) · [Before (L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12066)

```diff
-       mT = UT < 0 ? this.length + UT : UT;
+       zB = jB < 0 ? this.length + jB : jB;
```

#### 1129. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12081` → after: `L12081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12081) · [Before (L12081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12081)

```diff
-     Kj: () => kT,
+     Ka: () => UB,
```

#### 1130. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12083` → after: `L12083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12083) · [Before (L12083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12083)

```diff
-     Sj: () => lT,
+     Ca: () => pB,
```

#### 1131. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12085-L12094` → after: `L12085-L12094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12085-L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12085-L12094) · [Before (L12085-L12094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12085-L12094)

```diff
-     Gj: () => pT,
-     Nj: () => BT,
-     Ej: () => ZT,
-     hj: () => cT,
-     Dj: () => vT,
-     oj: () => fT,
-     Aj: () => qT,
-     Rj: () => iT,
-     Tl: () => bT,
-     Ul: () => OT,
+     ca: () => sB,
+     ba: () => JB,
+     va: () => mB,
+     Ra: () => yB,
+     Oa: () => kB,
+     Bp: () => GB,
+     jp: () => LB,
+     zp: () => gB,
+     Qp: () => tB,
+     np: () => SB,
```

#### 1132. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12097-L12111` → after: `L12097-L12111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12097-L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12097-L12111) · [Before (L12097-L12111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12097-L12111)

```diff
-     ml: () => eT,
-     Wl: () => YT,
-     zl: () => JT,
-     Ml: () => xT,
-     gl: () => dT,
-     nl: () => wT,
-     Hl: () => tT,
-     kl: () => aT,
-     jl: () => yT,
-     ll: () => XT,
-     Ll: () => IT,
-     pl: () => QT,
-     Bl: () => sT,
-     Zl: () => FT,
-     cl: () => PT
+     dp: () => MB,
+     Ip: () => EB,
+     Np: () => iB,
+     Up: () => qB,
+     ap: () => fB,
+     rp: () => oB,
+     sp: () => HB,
+     Jp: () => DB,
+     mp: () => FB,
+     yp: () => YB,
+     kp: () => VB,
+     Gp: () => hB,
+     Lp: () => XB,
+     tp: () => ZB,
+     Sp: () => AB
```

#### 1133. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12125` → after: `L12125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12125) · [Before (L12125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12125)

```diff
-       JU.CyMd(TT, 0)
+       ij.MGu3(BB, 0)
```

#### 1134. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12128` → after: `L12128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12128) · [Before (L12128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12128)

```diff
-       const TT = JU.EO4r(this.__wbg_ptr);
+       const BB = ij.gUfA(this.__wbg_ptr);
```

#### 1135. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12133` → after: `L12133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12133) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12133)

```diff
-       return JU.DgFQ(this.__wbg_ptr) >>> 0
+       return ij.GXU7(this.__wbg_ptr) >>> 0
```

#### 1136. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12136` → after: `L12136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12136) · [Before (L12136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12136)

```diff
-       const TT = JU.vkMh();
+       const BB = ij.Pmf0();
```

#### 1137. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12140` → after: `L12140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12140) · [Before (L12140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12140)

```diff
-       return JU.jgFR(this.__wbg_ptr) >>> 0
+       return ij.JjCJ(this.__wbg_ptr) >>> 0
```

#### 1138. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12143` → after: `L12143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12143) · [Before (L12143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12143)

```diff
-       const UT = JU.cK3P(this.__wbg_ptr, TT);
+       const jB = ij.hNJm(this.__wbg_ptr, BB);
```

#### 1139. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12148` → after: `L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12148) · [Before (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12148)

```diff
-       const UT = JU.GuqM(this.__wbg_ptr, TT);
+       const jB = ij.vHUl(this.__wbg_ptr, BB);
```

#### 1140. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12183` → after: `L12183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12183) · [Before (L12183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12183)

```diff
-       JU.WVeG(TT, 0)
+       ij.G0WK(BB, 0)
```

#### 1141. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12186` → after: `L12186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12186) · [Before (L12186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12186)

```diff
-       const mT = JU.RRhJ(this.__wbg_ptr, TT, UT);
+       const zB = ij.gCGi(this.__wbg_ptr, BB, jB);
```

#### 1142. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12191` → after: `L12191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12191) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12191)

```diff
-       const UT = JU.Gi6z(this.__wbg_ptr, TT);
+       const jB = ij.Xchm(this.__wbg_ptr, BB);
```

#### 1143. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12196` → after: `L12196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12196) · [Before (L12196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12196)

```diff
-       JU.LIZu(this.__wbg_ptr)
+       ij.fldI(this.__wbg_ptr)
```

#### 1144. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12199` → after: `L12199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12199) · [Before (L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12199)

```diff
-       return JU.uvYL() >>> 0
+       return ij.B3jG() >>> 0
```

#### 1145. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12202` → after: `L12202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12202) · [Before (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12202)

```diff
-       return JU.vXN6(this.__wbg_ptr) >>> 0
+       return ij.Ingp(this.__wbg_ptr) >>> 0
```

#### 1146. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12205` → after: `L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12205) · [Before (L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12205)

```diff
-       const TT = JU.jbLp(this.__wbg_ptr);
+       const BB = ij.jka9(this.__wbg_ptr);
```

#### 1147. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12209` → after: `L12209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12209) · [Before (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12209)

```diff
-       return JU.P1Ix(this.__wbg_ptr) >>> 0
+       return ij.xd5U(this.__wbg_ptr) >>> 0
```

#### 1148. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12212` → after: `L12212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12212) · [Before (L12212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12212)

```diff
-       return JU.OHHh(this.__wbg_ptr) >>> 0
+       return ij.xYru(this.__wbg_ptr) >>> 0
```

#### 1149. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12215` → after: `L12215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12215) · [Before (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12215)

```diff
-       return JU.Gr23() >>> 0
+       return ij.pqTa() >>> 0
```

#### 1150. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12218` → after: `L12218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12218) · [Before (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12218)

```diff
-       const TT = JU.ammi();
+       const BB = ij.a8xV();
```

#### 1151. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12222` → after: `L12222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12222) · [Before (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12222)

```diff
-       return JU.bsjl(this.__wbg_ptr) >>> 0
+       return ij.YpAY(this.__wbg_ptr) >>> 0
```

#### 1152. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12225` → after: `L12225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12225) · [Before (L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12225)

```diff
-       return JU.ekTb(this.__wbg_ptr) >>> 0
+       return ij.b0N6(this.__wbg_ptr) >>> 0
```

#### 1153. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12228` → after: `L12228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12228) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12228)

```diff
-       return JU.ytWt(this.__wbg_ptr) >>> 0
+       return ij.EZvZ(this.__wbg_ptr) >>> 0
```

#### 1154. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12231` → after: `L12231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12231) · [Before (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12231)

```diff
-       return JU.TZCo(this.__wbg_ptr, TT) >>> 0
+       return ij.JuTL(this.__wbg_ptr, BB) >>> 0
```

#### 1155. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12234` → after: `L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12234) · [Before (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12234)

```diff
-       const mT = JU.TUzr(this.__wbg_ptr, TT, UT);
+       const zB = ij.qFsn(this.__wbg_ptr, BB, jB);
```

#### 1156. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12238` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12238) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12238)

```diff
-       const mT = BU(TT, JU.yNf7),
+       const zB = Jj(BB, ij.XQV9),
```

#### 1157. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12240` → after: `L12240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12240) · [Before (L12240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12240)

```diff
-       JU.Ew8X(this.__wbg_ptr, mT, WT, UT)
+       ij.DVGE(this.__wbg_ptr, zB, QB, jB)
```

#### 1158. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12245` → after: `L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12245) · [Before (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12245)

```diff
-         const mT = JU.tAJ4(this.__wbg_ptr);
+         const zB = ij.qVoY(this.__wbg_ptr);
```

#### 1159. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12248` → after: `L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12248) · [Before (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12248)

```diff
-         JU.nGE7(TT, UT, 1)
+         ij.aFMC(BB, jB, 1)
```

#### 1160. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12260` → after: `L12260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12260) · [Before (L12260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12260)

```diff
-       JU.xwh1(TT, 0)
+       ij.aCC0(BB, 0)
```

#### 1161. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12264` → after: `L12264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12264) · [Before (L12264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12264)

```diff
-       const mT = JU.xSaf(this.__wbg_ptr, TT, UT.__wbg_ptr);
+       const zB = ij.fhVG(this.__wbg_ptr, BB, jB.__wbg_ptr);
```

#### 1162. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12269` → after: `L12269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12269) · [Before (L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12269)

```diff
-       const TT = JU.RwB0(this.__wbg_ptr);
+       const BB = ij.jW2D(this.__wbg_ptr);
```

#### 1163. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12274` → after: `L12274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12274) · [Before (L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12274)

```diff
-       const lT = JU.YJFi(this.__wbg_ptr, TT.__wbg_ptr, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT);
+       const pB = ij.rNri(this.__wbg_ptr, BB.__wbg_ptr, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB);
```

#### 1164. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12279` → after: `L12279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12279) · [Before (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12279)

```diff
-       const TT = JU.CFCs(this.__wbg_ptr);
+       const BB = ij.Kkqs(this.__wbg_ptr);
```

#### 1165. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12281` → after: `L12281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12281) · [Before (L12281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12281)

```diff
-       return JU.nGE7(TT[0], 8 * TT[1], 8), UT
+       return ij.aFMC(BB[0], 8 * BB[1], 8), jB
```

#### 1166. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12284` → after: `L12284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12284) · [Before (L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12284)

```diff
-       return JU.mPom(this.__wbg_ptr) >>> 0
+       return ij.sGQV(this.__wbg_ptr) >>> 0
```

#### 1167. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12287` → after: `L12287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12287) · [Before (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12287)

```diff
-       return JU.eIPi(this.__wbg_ptr) >>> 0
+       return ij.UxHJ(this.__wbg_ptr) >>> 0
```

#### 1168. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12290` → after: `L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12290) · [Before (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12290)

```diff
-       return JU.N62Q(this.__wbg_ptr) >>> 0
+       return ij.rW6x(this.__wbg_ptr) >>> 0
```

#### 1169. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12293` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12293) · [Before (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12293)

```diff
-       const HT = JU.KIOy(TT, UT, mT, WT, zT, MT, gT, nT);
+       const uB = ij.nV5R(BB, jB, zB, QB, nB, dB, IB, NB);
```

#### 1170. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12299` → after: `L12299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12299) · [Before (L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12299)

```diff
-       const UT = JU.AlG3(this.__wbg_ptr, TT.__wbg_ptr);
+       const jB = ij.mGhd(this.__wbg_ptr, BB.__wbg_ptr);
```

#### 1171. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12304` → after: `L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12304) · [Before (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12304)

```diff
-       const UT = JU.uTX9(this.__wbg_ptr, TT);
+       const jB = ij.smOW(this.__wbg_ptr, BB);
```

#### 1172. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12308` → after: `L12308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12308) · [Before (L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12308)

```diff
-       return JU.efu7(this.__wbg_ptr) >>> 0
+       return ij.ESIg(this.__wbg_ptr) >>> 0
```

#### 1173. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12312` → after: `L12312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12312) · [Before (L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12312)

```diff
-       const mT = JU.tuGh(this.__wbg_ptr, TT.__wbg_ptr, UT.__wbg_ptr);
+       const zB = ij.OscU(this.__wbg_ptr, BB.__wbg_ptr, jB.__wbg_ptr);
```

#### 1174. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12317` → after: `L12317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12317) · [Before (L12317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12317)

```diff
-       const UT = JU.dI7k(this.__wbg_ptr, TT);
+       const jB = ij.jV9E(this.__wbg_ptr, BB);
```

#### 1175. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12322` → after: `L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12322) · [Before (L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12322)

```diff
-       const mT = JU.mkdu(this.__wbg_ptr, TT, UT.__wbg_ptr);
+       const zB = ij.qXUp(this.__wbg_ptr, BB, jB.__wbg_ptr);
```

#### 1176. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12326` → after: `L12326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12326) · [Before (L12326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12326)

```diff
-       const UT = cU(TT, JU.yNf7),
+       const jB = yj(BB, ij.XQV9),
```

#### 1177. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12328` → after: `L12328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12328) · [Before (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12328)

```diff
-         WT = JU.IoKX(this.__wbg_ptr, UT, mT);
+         QB = ij.fSS8(this.__wbg_ptr, jB, zB);
```

#### 1178. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12332` → after: `L12332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12332) · [Before (L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12332)

```diff
-       const gT = JU.iY7B(this.__wbg_ptr, TT, UT, mT, WT, zT, MT);
+       const IB = ij.RL6m(this.__wbg_ptr, BB, jB, zB, QB, nB, dB);
```

#### 1179. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12336` → after: `L12336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12336) · [Before (L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12336)

```diff
-       const zT = BU(TT, JU.yNf7),
+       const nB = Jj(BB, ij.XQV9),
```

#### 1180. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12338` → after: `L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12338) · [Before (L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12338)

```diff
-         gT = cU(UT, JU.yNf7),
+         IB = yj(jB, ij.XQV9),
```

#### 1181. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12340` → after: `L12340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12340) · [Before (L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12340)

```diff
-         HT = cU(mT, JU.yNf7),
+         uB = yj(zB, ij.XQV9),
```

#### 1182. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12342` → after: `L12342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12342) · [Before (L12342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12342)

```diff
-         jT = cU(WT, JU.yNf7),
+         aB = yj(QB, ij.XQV9),
```

#### 1183. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12344` → after: `L12344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12344) · [Before (L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12344)

```diff
-         LT = JU.Eef0(this.__wbg_ptr, zT, MT, gT, nT, HT, kT, jT, lT);
+         rB = ij.SEof(this.__wbg_ptr, nB, dB, IB, NB, uB, UB, aB, pB);
```

#### 1184. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12349` → after: `L12349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12349) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12349)

```diff
-       const mT = JU.zuMl(this.__wbg_ptr, TT, UT.__wbg_ptr);
+       const zB = ij.mD9A(this.__wbg_ptr, BB, jB.__wbg_ptr);
```

#### 1185. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12353` → after: `L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12353) · [Before (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12353)

```diff
-       const WT = JU.czLv(this.__wbg_ptr, TT, UT, mT);
+       const QB = ij.OyFv(this.__wbg_ptr, BB, jB, zB);
```

#### 1186. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12358` → after: `L12358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12358) · [Before (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12358)

```diff
-       return JU.EsGA(this.__wbg_ptr, TT.__wbg_ptr, UT, mT, WT, zT, MT, gT, nT, HT, kT)
+       return ij.yhYF(this.__wbg_ptr, BB.__wbg_ptr, jB, zB, QB, nB, dB, IB, NB, uB, UB)
```

#### 1187. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12373` → after: `L12373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12373) · [Before (L12373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12373)

```diff
-       JU.PZki(TT, 0)
+       ij.hNIH(BB, 0)
```

#### 1188. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12376` → after: `L12376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12376) · [Before (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12376)

```diff
-       const UT = JU.NnBs(this.__wbg_ptr, TT);
+       const jB = ij.jx5m(this.__wbg_ptr, BB);
```

#### 1189. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12381` → after: `L12381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12381) · [Before (L12381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12381)

```diff
-       return JU.Dvl4(this.__wbg_ptr, TT, UT, mT)
+       return ij.WQzN(this.__wbg_ptr, BB, jB, zB)
```

#### 1190. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12384` → after: `L12384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12384) · [Before (L12384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12384)

```diff
-       return JU.ku1b(this.__wbg_ptr, TT, UT, mT) >>> 0
+       return ij.dna9(this.__wbg_ptr, BB, jB, zB) >>> 0
```

#### 1191. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12387` → after: `L12387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12387) · [Before (L12387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12387)

```diff
-       return 0 !== JU.JgzX(this.__wbg_ptr, TT, UT, mT, WT)
+       return 0 !== ij.mnJ1(this.__wbg_ptr, BB, jB, zB, QB)
```

#### 1192. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12390` → after: `L12390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12390) · [Before (L12390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12390)

```diff
-       JU.ztiw(this.__wbg_ptr)
+       ij.RUNZ(this.__wbg_ptr)
```

#### 1193. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12393` → after: `L12393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12393) · [Before (L12393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12393)

```diff
-       const UT = JU.OtgA(this.__wbg_ptr, TT);
+       const jB = ij.NrhS(this.__wbg_ptr, BB);
```

#### 1194. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12396` → after: `L12396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12396) · [Before (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12396)

```diff
-       return JU.nGE7(UT[0], 1 * UT[1], 1), mT
+       return ij.aFMC(jB[0], 1 * jB[1], 1), zB
```

#### 1195. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12399` → after: `L12399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12399) · [Before (L12399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12399)

```diff
-       return JU.oXbG(this.__wbg_ptr, TT, UT) >>> 0
+       return ij.wyrT(this.__wbg_ptr, BB, jB) >>> 0
```

#### 1196. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12402` → after: `L12402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12402) · [Before (L12402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12402)

```diff
-       JU.CtFb(this.__wbg_ptr)
+       ij.elCq(this.__wbg_ptr)
```

#### 1197. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12405` → after: `L12405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12405) · [Before (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12405)

```diff
-       JU.KKMx(this.__wbg_ptr, TT, UT, mT)
+       ij.qpMc(this.__wbg_ptr, BB, jB, zB)
```

#### 1198. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12408` → after: `L12408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12408) · [Before (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12408)

```diff
-       const UT = JU.wPYV(this.__wbg_ptr, TT);
+       const jB = ij.EEer(this.__wbg_ptr, BB);
```

#### 1199. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12412` → after: `L12412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12412) · [Before (L12412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12412)

```diff
-       return JU.czaz(this.__wbg_ptr) >>> 0
+       return ij.LAVv(this.__wbg_ptr) >>> 0
```

#### 1200. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12415` → after: `L12415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12415) · [Before (L12415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12415)

```diff
-       return JU.VZFZ(this.__wbg_ptr) >>> 0
+       return ij.qShZ(this.__wbg_ptr) >>> 0
```

#### 1201. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12418` → after: `L12418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12418) · [Before (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12418)

```diff
-       JU.GQrM(this.__wbg_ptr, TT, UT, mT)
+       ij.WGUi(this.__wbg_ptr, BB, jB, zB)
```

#### 1202. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12421` → after: `L12421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12421) · [Before (L12421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12421)

```diff
-       JU.jCYa(this.__wbg_ptr, TT, UT, mT)
+       ij.HzJm(this.__wbg_ptr, BB, jB, zB)
```

#### 1203. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12424` → after: `L12424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12424) · [Before (L12424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12424)

```diff
-       return JU.yEEA(this.__wbg_ptr) >>> 0
+       return ij.SZw3(this.__wbg_ptr) >>> 0
```

#### 1204. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12427` → after: `L12427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12427) · [Before (L12427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12427)

```diff
-       return JU.uCOX(this.__wbg_ptr) >>> 0
+       return ij.iZdJ(this.__wbg_ptr) >>> 0
```

#### 1205. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12430` → after: `L12430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12430) · [Before (L12430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12430)

```diff
-       const TT = JU.ThwY();
+       const BB = ij.Q42X();
```

#### 1206. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12434` → after: `L12434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12434) · [Before (L12434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12434)

```diff
-       const TT = JU.TFuv();
+       const BB = ij.FZW5();
```

#### 1207. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12438` → after: `L12438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12438) · [Before (L12438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12438)

```diff
-       return JU.TI3e(this.__wbg_ptr) >>> 0
+       return ij.SIww(this.__wbg_ptr) >>> 0
```

#### 1208. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12441` → after: `L12441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12441) · [Before (L12441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12441)

```diff
-       return JU.SteV(this.__wbg_ptr) >>> 0
+       return ij.fXvJ(this.__wbg_ptr) >>> 0
```

#### 1209. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12444` → after: `L12444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12444) · [Before (L12444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12444)

```diff
-       const zT = JU.luWa(this.__wbg_ptr, TT, UT, mT, WT);
+       const nB = ij.a2J9(this.__wbg_ptr, BB, jB, zB, QB);
```

#### 1210. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12448` → after: `L12448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12448) · [Before (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12448)

```diff
-       return JU.oT8M(this.__wbg_ptr) >>> 0
+       return ij.DPLv(this.__wbg_ptr) >>> 0
```

#### 1211. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12451` → after: `L12451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12451) · [Before (L12451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12451)

```diff
-       return JU.V5Bk(this.__wbg_ptr) >>> 0
+       return ij.BaMM(this.__wbg_ptr) >>> 0
```

#### 1212. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12454` → after: `L12454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12454) · [Before (L12454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12454)

```diff
-       JU.BfBW(this.__wbg_ptr, TT, UT, mT, WT)
+       ij.d7pc(this.__wbg_ptr, BB, jB, zB, QB)
```

#### 1213. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12457` → after: `L12457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12457) · [Before (L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12457)

```diff
-       JU.qZdw(this.__wbg_ptr, TT)
+       ij.K2BN(this.__wbg_ptr, BB)
```

#### 1214. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12460` → after: `L12460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12460) · [Before (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12460)

```diff
-       const MT = ZU(UT, JU.yNf7),
+       const dB = mj(jB, ij.XQV9),
```

#### 1215. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12462` → after: `L12462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12462) · [Before (L12462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12462)

```diff
-         nT = BU(mT, JU.yNf7),
+         NB = Jj(zB, ij.XQV9),
```

#### 1216. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12464` → after: `L12464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12464) · [Before (L12464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12464)

```diff
-         kT = cU(WT, JU.yNf7),
+         UB = yj(QB, ij.XQV9),
```

#### 1217. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12466` → after: `L12466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12466) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12466)

```diff
-         lT = JU.j0gV(this.__wbg_ptr, TT, MT, gT, nT, HT, kT, jT, zT);
+         pB = ij.ffrb(this.__wbg_ptr, BB, dB, IB, NB, uB, UB, aB, nB);
```

#### 1218. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12470` → after: `L12470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12470) · [Before (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12470)

```diff
-       const zT = ZU(TT, JU.yNf7),
+       const nB = mj(BB, ij.XQV9),
```

#### 1219. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12472` → after: `L12472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12472) · [Before (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12472)

```diff
-         gT = BU(UT, JU.yNf7),
+         IB = Jj(jB, ij.XQV9),
```

#### 1220. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12474` → after: `L12474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12474) · [Before (L12474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12474)

```diff
-         HT = cU(mT, JU.yNf7),
+         uB = yj(zB, ij.XQV9),
```

#### 1221. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12476` → after: `L12476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12476) · [Before (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12476)

```diff
-         jT = ZU(WT, JU.yNf7),
+         aB = mj(QB, ij.XQV9),
```

#### 1222. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12478` → after: `L12478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12478) · [Before (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12478)

```diff
-         LT = JU.wP5B(this.__wbg_ptr, zT, MT, gT, nT, HT, kT, jT, lT);
+         rB = ij.rD42(this.__wbg_ptr, nB, dB, IB, NB, uB, UB, aB, pB);
```

#### 1223. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12482` → after: `L12482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12482) · [Before (L12482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12482)

```diff
-       const UT = ZU(TT, JU.yNf7),
+       const jB = mj(BB, ij.XQV9),
```

#### 1224. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12484` → after: `L12484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12484) · [Before (L12484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12484)

```diff
-         WT = JU.KLtm(this.__wbg_ptr, UT, mT);
+         QB = ij.XLYJ(this.__wbg_ptr, jB, zB);
```

#### 1225. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12488` → after: `L12488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12488) · [Before (L12488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12488)

```diff
-       return JU.CObo(this.__wbg_ptr) >>> 0
+       return ij.Vc9l(this.__wbg_ptr) >>> 0
```

#### 1226. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12491` → after: `L12491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12491) · [Before (L12491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12491)

```diff
-       const UT = JU.FLSb(this.__wbg_ptr, TT);
+       const jB = ij.nkrB(this.__wbg_ptr, BB);
```

#### 1227. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12496` → after: `L12496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12496) · [Before (L12496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12496)

```diff
-       return JU.Lm6X(this.__wbg_ptr) >>> 0
+       return ij.SB3a(this.__wbg_ptr) >>> 0
```

#### 1228. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12499` → after: `L12499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12499) · [Before (L12499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12499)

```diff
-       const TT = JU.sVlV(this.__wbg_ptr);
+       const BB = ij.xCMj(this.__wbg_ptr);
```

#### 1229. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12501` → after: `L12501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12501) · [Before (L12501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12501)

```diff
-       return JU.nGE7(TT[0], 8 * TT[1], 8), UT
+       return ij.aFMC(BB[0], 8 * BB[1], 8), jB
```

#### 1230. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12504` → after: `L12504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12504) · [Before (L12504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12504)

```diff
-       return JU.xkOZ(this.__wbg_ptr) >>> 0
+       return ij.mbim(this.__wbg_ptr) >>> 0
```

#### 1231. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12507` → after: `L12507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12507) · [Before (L12507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12507)

```diff
-       const TT = JU.xe5w(this.__wbg_ptr);
+       const BB = ij.wkaY(this.__wbg_ptr);
```

#### 1232. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12509` → after: `L12509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12509) · [Before (L12509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12509)

```diff
-       return JU.nGE7(TT[0], 4 * TT[1], 4), WT
+       return ij.aFMC(BB[0], 4 * BB[1], 4), QB
```

#### 1233. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12520` → after: `L12520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12520) · [Before (L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12520)

```diff
-       JU.WQO9(TT, 0)
+       ij.tkBC(BB, 0)
```

#### 1234. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12523` → after: `L12523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12523) · [Before (L12523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12523)

```diff
-       const UT = BU(TT, JU.yNf7),
+       const jB = Jj(BB, ij.XQV9),
```

#### 1235. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12525` → after: `L12525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12525) · [Before (L12525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12525)

```diff
-         WT = JU.K8Ld(this.__wbg_ptr, UT, mT);
+         QB = ij.JEan(this.__wbg_ptr, jB, zB);
```

#### 1236. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12529` → after: `L12529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12529) · [Before (L12529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12529)

```diff
-       return JU.tQrP(this.__wbg_ptr) >>> 0
+       return ij.kfbY(this.__wbg_ptr) >>> 0
```

#### 1237. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12532` → after: `L12532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12532) · [Before (L12532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12532)

```diff
-       return JU.TBBw(this.__wbg_ptr) >>> 0
+       return ij.jWjd(this.__wbg_ptr) >>> 0
```

#### 1238. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12535` → after: `L12535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12535) · [Before (L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12535)

```diff
-       const TT = JU.T7ZT();
+       const BB = ij.fk7q();
```

#### 1239. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12540` → after: `L12540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12540) · [Before (L12540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12540)

```diff
-       const mT = JU.TKZu(this.__wbg_ptr, TT.__wbg_ptr, UT);
+       const zB = ij.vixF(this.__wbg_ptr, BB.__wbg_ptr, jB);
```

#### 1240. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12545` → after: `L12545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12545) · [Before (L12545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12545)

```diff
-       const UT = BU(TT, JU.yNf7),
+       const jB = Jj(BB, ij.XQV9),
```

#### 1241. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12547` → after: `L12547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12547) · [Before (L12547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12547)

```diff
-       JU.XOcs(this.__wbg_ptr, UT, mT)
+       ij.khgu(this.__wbg_ptr, jB, zB)
```

#### 1242. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12550` → after: `L12550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12550) · [Before (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12550)

```diff
-       const UT = BU(TT, JU.yNf7),
+       const jB = Jj(BB, ij.XQV9),
```

#### 1243. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12552` → after: `L12552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12552) · [Before (L12552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12552)

```diff
-       JU.GTFB(this.__wbg_ptr, UT, mT)
+       ij.g9CB(this.__wbg_ptr, jB, zB)
```

#### 1244. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12563` → after: `L12563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12563) · [Before (L12563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12563)

```diff
-       JU.UHln(TT, 0)
+       ij.gVFP(BB, 0)
```

#### 1245. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12566` → after: `L12566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12566) · [Before (L12566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12566)

```diff
-       const mT = ZU(TT, JU.yNf7),
+       const zB = mj(BB, ij.XQV9),
```

#### 1246. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12568` → after: `L12568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12568) · [Before (L12568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12568)

```diff
-       return JU.tHGV(this.__wbg_ptr, mT, WT, UT) >>> 0
+       return ij.dYFo(this.__wbg_ptr, zB, QB, jB) >>> 0
```

#### 1247. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12572` → after: `L12572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12572) · [Before (L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12572)

```diff
-       const WT = ZU(mT, JU.yNf7),
+       const QB = mj(zB, ij.XQV9),
```

#### 1248. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12574` → after: `L12574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12574) · [Before (L12574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12574)

```diff
-         MT = JU.srce(this.__wbg_ptr, TT.__wbg_ptr, UT, WT, zT);
+         dB = ij.waAJ(this.__wbg_ptr, BB.__wbg_ptr, jB, QB, nB);
```

#### 1249. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12579` → after: `L12579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12579) · [Before (L12579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12579)

```diff
-       return JU.sxsz(this.__wbg_ptr, TT) >>> 0
+       return ij.upWI(this.__wbg_ptr, BB) >>> 0
```

#### 1250. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12582` → after: `L12582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12582) · [Before (L12582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12582)

```diff
-       const TT = JU.bgKY();
+       const BB = ij.xEHD();
```

#### 1251. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12587` → after: `L12587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12587) · [Before (L12587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12587)

```diff
-       const mT = JU.zWoV(this.__wbg_ptr, TT.__wbg_ptr, UT);
+       const zB = ij.vlgf(this.__wbg_ptr, BB.__wbg_ptr, jB);
```

#### 1252. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12592` → after: `L12592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12592) · [Before (L12592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12592)

```diff
-       const UT = ZU(TT, JU.yNf7),
+       const jB = mj(BB, ij.XQV9),
```

#### 1253. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12594` → after: `L12594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12594) · [Before (L12594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12594)

```diff
-       JU.xoHY(this.__wbg_ptr, UT, mT)
+       ij.C8Y1(this.__wbg_ptr, jB, zB)
```

#### 1254. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12597` → after: `L12597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12597) · [Before (L12597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12597)

```diff
-       return JU.FLK4(this.__wbg_ptr) >>> 0
+       return ij.AzkB(this.__wbg_ptr) >>> 0
```

#### 1255. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12600` → after: `L12600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12600) · [Before (L12600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12600)

```diff
-       return JU.OMdR(this.__wbg_ptr) >>> 0
+       return ij.R9re(this.__wbg_ptr) >>> 0
```

#### 1256. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12611` → after: `L12611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12611) · [Before (L12611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12611)

```diff
-       JU.R3rb(TT, 0)
+       ij.gTdB(BB, 0)
```

#### 1257. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12614` → after: `L12614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12614) · [Before (L12614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12614)

```diff
-       const UT = JU.KuKA(this.__wbg_ptr, TT);
+       const jB = ij.g7xn(this.__wbg_ptr, BB);
```

#### 1258. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12619` → after: `L12619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12619) · [Before (L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12619)

```diff
-       var zT = LU(WT) ? 0 : vU(WT, JU.yNf7, JU.USpa),
+       var nB = rj(QB) ? 0 : kj(QB, ij.XQV9, ij.SrN4),
```

#### 1259. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12621` → after: `L12621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12621) · [Before (L12621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12621)

```diff
-       const gT = JU.ckSz(this.__wbg_ptr, TT, LU(UT) ? Number.MAX_SAFE_INTEGER : UT | 0, mT, zT, MT);
+       const IB = ij.e4OJ(this.__wbg_ptr, BB, rj(jB) ? Number.MAX_SAFE_INTEGER : jB | 0, zB, nB, dB);
```

#### 1260. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12626` → after: `L12626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12626) · [Before (L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12626)

```diff
-       const UT = vU(TT, JU.yNf7, JU.USpa),
+       const jB = kj(BB, ij.XQV9, ij.SrN4),
```

#### 1261. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12628` → after: `L12628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12628) · [Before (L12628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12628)

```diff
-       JU.JvAw(this.__wbg_ptr, UT, mT)
+       ij.yLaP(this.__wbg_ptr, jB, zB)
```

#### 1262. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12631` → after: `L12631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12631) · [Before (L12631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12631)

```diff
-       return JU.EoH8(this.__wbg_ptr)
+       return ij.yIjE(this.__wbg_ptr)
```

#### 1263. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12634` → after: `L12634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12634) · [Before (L12634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12634)

```diff
-       return JU.iArR(this.__wbg_ptr, TT) >>> 0
+       return ij.SAgf(this.__wbg_ptr, BB) >>> 0
```

#### 1264. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12637` → after: `L12637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12637) · [Before (L12637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12637)

```diff
-       return JU.g3zy(this.__wbg_ptr) >>> 0
+       return ij.Zr5B(this.__wbg_ptr) >>> 0
```

#### 1265. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12640` → after: `L12640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12640) · [Before (L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12640)

```diff
-       return JU.kDRR(this.__wbg_ptr) >>> 0
+       return ij.RHux(this.__wbg_ptr) >>> 0
```

#### 1266. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12643` → after: `L12643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12643) · [Before (L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12643)

```diff
-       const mT = JU.KQln(this.__wbg_ptr, TT, UT);
+       const zB = ij.rZ6L(this.__wbg_ptr, BB, jB);
```

#### 1267. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12647` → after: `L12647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12647) · [Before (L12647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12647)

```diff
-       return JU.z27c(this.__wbg_ptr) >>> 0
+       return ij.oOEU(this.__wbg_ptr) >>> 0
```

#### 1268. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12650` → after: `L12650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12650) · [Before (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12650)

```diff
-       return JU.e7P8(this.__wbg_ptr) >>> 0
+       return ij.Z3NE(this.__wbg_ptr) >>> 0
```

#### 1269. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12653` → after: `L12653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12653) · [Before (L12653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12653)

```diff
-       return JU.df4T(this.__wbg_ptr) >>> 0
+       return ij.apvv(this.__wbg_ptr) >>> 0
```

#### 1270. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12656` → after: `L12656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12656) · [Before (L12656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12656)

```diff
-       const WT = BU(TT, JU.yNf7),
+       const QB = Jj(BB, ij.XQV9),
```

#### 1271. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12658` → after: `L12658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12658) · [Before (L12658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12658)

```diff
-         MT = BU(UT, JU.yNf7),
+         dB = Jj(jB, ij.XQV9),
```

#### 1272. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12660` → after: `L12660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12660) · [Before (L12660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12660)

```diff
-         nT = JU.bzC0(this.__wbg_ptr, WT, zT, MT, gT, mT);
+         NB = ij.U3ei(this.__wbg_ptr, QB, nB, dB, IB, zB);
```

#### 1273. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12664` → after: `L12664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12664) · [Before (L12664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12664)

```diff
-       return JU.aZyz(this.__wbg_ptr) >>> 0
+       return ij.gjYo(this.__wbg_ptr) >>> 0
```

#### 1274. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12667` → after: `L12667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12667) · [Before (L12667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12667)

```diff
-       const MT = JU.Ncmp(this.__wbg_ptr, TT, UT, mT, WT, zT);
+       const dB = ij.ct6R(this.__wbg_ptr, BB, jB, zB, QB, nB);
```

#### 1275. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12672` → after: `L12672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12672) · [Before (L12672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12672)

```diff
-       const iT = pU(TT, JU.yNf7),
+       const gB = sj(BB, ij.XQV9),
```

#### 1276. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12674` → after: `L12674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12674) · [Before (L12674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12674)

```diff
-         OT = cU(UT, JU.yNf7),
+         SB = yj(jB, ij.XQV9),
```

#### 1277. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12676` → after: `L12676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12676) · [Before (L12676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12676)

```diff
-         YT = BU(mT, JU.yNf7),
+         EB = Jj(zB, ij.XQV9),
```

#### 1278. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12678` → after: `L12678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12678) · [Before (L12678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12678)

```diff
-         xT = ZU(WT, JU.yNf7),
+         qB = mj(QB, ij.XQV9),
```

#### 1279. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12680` → after: `L12680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12680) · [Before (L12680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12680)

```diff
-         wT = ZU(zT, JU.yNf7),
+         oB = mj(nB, ij.XQV9),
```

#### 1280. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12682` → after: `L12682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12682) · [Before (L12682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12682)

```diff
-         aT = BU(MT, JU.yNf7),
+         DB = Jj(dB, ij.XQV9),
```

#### 1281. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12684` → after: `L12684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12684) · [Before (L12684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12684)

```diff
-         XT = BU(gT, JU.yNf7),
+         YB = Jj(IB, ij.XQV9),
```

#### 1282. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12686` → after: `L12686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12686) · [Before (L12686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12686)

```diff
-         QT = cU(nT, JU.yNf7),
+         hB = yj(NB, ij.XQV9),
```

#### 1283. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12688` → after: `L12688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12688) · [Before (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12688)

```diff
-         FT = cU(HT, JU.yNf7),
+         ZB = yj(uB, ij.XQV9),
```

#### 1284. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12690` → after: `L12690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12690) · [Before (L12690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12690)

```diff
-         VT = ZU(kT, JU.yNf7),
+         TB = mj(UB, ij.XQV9),
```

#### 1285. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12692` → after: `L12692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12692) · [Before (L12692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12692)

```diff
-       var CT = LU(jT) ? 0 : pU(jT, JU.yNf7),
+       var WB = rj(aB) ? 0 : sj(aB, ij.XQV9),
```

#### 1286. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12694` → after: `L12694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12694) · [Before (L12694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12694)

```diff
-       const KT = BU(lT, JU.yNf7),
+       const lB = Jj(pB, ij.XQV9),
```

#### 1287. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12696` → after: `L12696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12696) · [Before (L12696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12696)

```diff
-         GT = ZU(LT, JU.yNf7),
+         xB = mj(rB, ij.XQV9),
```

#### 1288. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12698` → after: `L12698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12698) · [Before (L12698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12698)

```diff
-       var hT = LU(pT) ? 0 : ZU(pT, JU.yNf7),
+       var cB = rj(sB) ? 0 : mj(sB, ij.XQV9),
```

#### 1289. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12700` → after: `L12700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12700) · [Before (L12700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12700)

```diff
-       const oT = cU(BT, JU.yNf7),
+       const vB = yj(JB, ij.XQV9),
```

#### 1290. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12702` → after: `L12702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12702) · [Before (L12702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12702)

```diff
-         RT = JU.uepC(iT, bT, OT, eT, YT, JT, xT, dT, wT, tT, aT, yT, XT, IT, QT, sT, FT, PT, VT, uT, CT, rT, KT, ST, GT, ET, hT, DT, oT, AT, ZT, cT, vT, fT, qT);
+         OB = ij.v6MF(gB, tB, SB, MB, EB, iB, qB, fB, oB, HB, DB, FB, YB, VB, hB, XB, ZB, AB, TB, PB, WB, eB, lB, wB, xB, CB, cB, bB, vB, RB, mB, yB, kB, GB, LB);
```

#### 1291. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12707` → after: `L12707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12707) · [Before (L12707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12707)

```diff
-       const mT = BU(TT, JU.yNf7),
+       const zB = Jj(BB, ij.XQV9),
```

#### 1292. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12709` → after: `L12709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12709) · [Before (L12709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12709)

```diff
-         zT = JU.oBoj(this.__wbg_ptr, mT, WT, UT);
+         nB = ij.MrcU(this.__wbg_ptr, zB, QB, jB);
```

#### 1293. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12712` → after: `L12712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12712) · [Before (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12712)

```diff
-       return JU.nGE7(zT[0], 1 * zT[1], 1), MT
+       return ij.aFMC(nB[0], 1 * nB[1], 1), dB
```

#### 1294. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12715` → after: `L12715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12715) · [Before (L12715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12715)

```diff
-       JU.dI3H(this.__wbg_ptr, LU(TT) ? 16777215 : TT)
+       ij.xGOo(this.__wbg_ptr, rj(BB) ? 16777215 : BB)
```

#### 1295. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12718` → after: `L12718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12718) · [Before (L12718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12718)

```diff
-       return JU.a0T0(this.__wbg_ptr, TT) >>> 0
+       return ij.H3Mp(this.__wbg_ptr, BB) >>> 0
```

#### 1296. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12721` → after: `L12721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12721) · [Before (L12721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12721)

```diff
-       return JU.gP3f(this.__wbg_ptr) >>> 0
+       return ij.ayPX(this.__wbg_ptr) >>> 0
```

#### 1297. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12724` → after: `L12724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12724) · [Before (L12724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12724)

```diff
-       const TT = JU.qyiN(this.__wbg_ptr);
+       const BB = ij.ETTO(this.__wbg_ptr);
```

#### 1298. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12729` → after: `L12729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12729) · [Before (L12729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12729)

```diff
-       return JU.xHHR(this.__wbg_ptr) >>> 0
+       return ij.wIic(this.__wbg_ptr) >>> 0
```

#### 1299. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12732` → after: `L12732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12732) · [Before (L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12732)

```diff
-       return JU.GIK3(this.__wbg_ptr) >>> 0
+       return ij.miQl(this.__wbg_ptr) >>> 0
```

#### 1300. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12743` → after: `L12743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12743) · [Before (L12743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12743)

```diff
-       JU.YOco(TT, 0)
+       ij.m8oZ(BB, 0)
```

#### 1301. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12746` → after: `L12746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12746) · [Before (L12746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12746)

```diff
-       var zT = LU(WT) ? 0 : vU(WT, JU.yNf7, JU.USpa),
+       var nB = rj(QB) ? 0 : kj(QB, ij.XQV9, ij.SrN4),
```

#### 1302. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12748` → after: `L12748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12748) · [Before (L12748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12748)

```diff
-       const gT = JU.dlLa(this.__wbg_ptr, TT, LU(UT) ? Number.MAX_SAFE_INTEGER : UT | 0, mT, zT, MT);
+       const IB = ij.BOSH(this.__wbg_ptr, BB, rj(jB) ? Number.MAX_SAFE_INTEGER : jB | 0, zB, nB, dB);
```

#### 1303. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12753` → after: `L12753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12753) · [Before (L12753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12753)

```diff
-       const UT = vU(TT, JU.yNf7, JU.USpa),
+       const jB = kj(BB, ij.XQV9, ij.SrN4),
```

#### 1304. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12755` → after: `L12755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12755) · [Before (L12755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12755)

```diff
-       JU.TIP3(this.__wbg_ptr, UT, mT)
+       ij.p4Ia(this.__wbg_ptr, jB, zB)
```

#### 1305. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12758` → after: `L12758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12758) · [Before (L12758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12758)

```diff
-       return JU.PWvW(this.__wbg_ptr) >>> 0
+       return ij.nWOD(this.__wbg_ptr) >>> 0
```

#### 1306. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12761` → after: `L12761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12761) · [Before (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12761)

```diff
-       return JU.YnRi(this.__wbg_ptr) >>> 0
+       return ij.yKh3(this.__wbg_ptr) >>> 0
```

#### 1307. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12764` → after: `L12764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12764) · [Before (L12764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12764)

```diff
-       const UT = JU.V0oG(this.__wbg_ptr, TT);
+       const jB = ij.xAFD(this.__wbg_ptr, BB);
```

#### 1308. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12769` → after: `L12769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12769) · [Before (L12769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12769)

```diff
-       const gT = pU(TT, JU.yNf7),
+       const IB = sj(BB, ij.XQV9),
```

#### 1309. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12771` → after: `L12771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12771) · [Before (L12771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12771)

```diff
-         HT = cU(UT, JU.yNf7),
+         uB = yj(jB, ij.XQV9),
```

#### 1310. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12773` → after: `L12773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12773) · [Before (L12773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12773)

```diff
-         jT = BU(mT, JU.yNf7),
+         aB = Jj(zB, ij.XQV9),
```

#### 1311. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12775` → after: `L12775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12775) · [Before (L12775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12775)

```diff
-         LT = ZU(WT, JU.yNf7),
+         rB = mj(QB, ij.XQV9),
```

#### 1312. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12777` → after: `L12777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12777) · [Before (L12777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12777)

```diff
-         BT = JU.Hr1c(gT, nT, HT, kT, jT, lT, LT, pT, zT, MT);
+         JB = ij.tl9S(IB, NB, uB, UB, aB, pB, rB, sB, nB, dB);
```

#### 1313. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12782` → after: `L12782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12782) · [Before (L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12782)

```diff
-       return JU.DDiq(this.__wbg_ptr) >>> 0
+       return ij.wlrA(this.__wbg_ptr) >>> 0
```

#### 1314. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12785` → after: `L12785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12785) · [Before (L12785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12785)

```diff
-       const TT = JU.bvxr(this.__wbg_ptr);
+       const BB = ij.qjds(this.__wbg_ptr);
```

#### 1315. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12790` → after: `L12790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12790) · [Before (L12790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12790)

```diff
-       return JU.WRXh(this.__wbg_ptr) >>> 0
+       return ij.PKO2(this.__wbg_ptr) >>> 0
```

#### 1316. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12795` → after: `L12795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12795) · [Before (L12795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12795)

```diff
-     const TT = JU.jhlR();
+     const BB = ij.xqga();
```

#### 1317. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12797` → after: `L12797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12797) · [Before (L12797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12797)

```diff
-     return JU.nGE7(TT[0], 4 * TT[1], 4), UT
+     return ij.aFMC(BB[0], 4 * BB[1], 4), jB
```

#### 1318. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12803` → after: `L12803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12803) · [Before (L12803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12803)

```diff
-       const zT = pU(TT, JU.yNf7),
+       const nB = sj(BB, ij.XQV9),
```

#### 1319. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12805` → after: `L12805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12805) · [Before (L12805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12805)

```diff
-         gT = vU(UT, JU.yNf7, JU.USpa),
+         IB = kj(jB, ij.XQV9, ij.SrN4),
```

#### 1320. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12807` → after: `L12807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12807) · [Before (L12807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12807)

```diff
-         HT = JU.epXB(zT, MT, gT, nT);
+         uB = ij.vWBC(nB, dB, IB, NB);
```

#### 1321. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12810` → after: `L12810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12810) · [Before (L12810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12810)

```diff
-       JU.nGE7(mT, WT, 1)
+       ij.aFMC(zB, QB, 1)
```

#### 1322. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12815` → after: `L12815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12815) · [Before (L12815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12815)

```diff
-     const TT = JU.oTtq();
+     const BB = ij.aqk4();
```

#### 1323. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12817` → after: `L12817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12817) · [Before (L12817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12817)

```diff
-     return JU.nGE7(TT[0], 4 * TT[1], 4), UT
+     return ij.aFMC(BB[0], 4 * BB[1], 4), jB
```

#### 1324. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12821` → after: `L12821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12821) · [Before (L12821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12821)

```diff
-     return 0 !== JU.GC4a(TT)
+     return 0 !== ij.hzQ6(BB)
```

#### 1325. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12825` → after: `L12825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12825) · [Before (L12825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12825)

```diff
-     const mT = vU(TT, JU.yNf7, JU.USpa),
+     const zB = kj(BB, ij.XQV9, ij.SrN4),
```

#### 1326. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12827` → after: `L12827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12827) · [Before (L12827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12827)

```diff
-       zT = JU.Pegu(mT, WT, UT);
+       nB = ij.omlE(zB, QB, jB);
```

#### 1327. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12832` → after: `L12832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12832) · [Before (L12832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12832)

```diff
-     JU.OJ3D()
+     ij.xpsB()
```

#### 1328. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12836` → after: `L12836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12836) · [Before (L12836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12836)

```diff
-     return JU.OLZa() >>> 0
+     return ij.GcDc() >>> 0
```

#### 1329. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12840` → after: `L12840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12840) · [Before (L12840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12840)

```diff
-     return 0 !== JU.rVpp(TT)
+     return 0 !== ij.bU5J(BB)
```

#### 1330. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12844` → after: `L12844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12844) · [Before (L12844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12844)

```diff
-     return 0 !== JU.toUd(TT)
+     return 0 !== ij.ZgAf(BB)
```

#### 1331. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12848` → after: `L12848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12848) · [Before (L12848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12848)

```diff
-     JU.HJiM(TT)
+     ij.cUvp(BB)
```

#### 1332. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12852` → after: `L12852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12852) · [Before (L12852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12852)

```diff
-     return JU.mZGZ() >>> 0
+     return ij.mYPX() >>> 0
```

#### 1333. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12856` → after: `L12856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12856) · [Before (L12856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12856)

```diff
-     return JU.n593() >>> 0
+     return ij.gAzc() >>> 0
```

#### 1334. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12860` → after: `L12860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12860) · [Before (L12860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12860)

```diff
-     return 0 !== JU.KCUA()
+     return 0 !== ij.afHz()
```

#### 1335. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12864` → after: `L12864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12864) · [Before (L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12864)

```diff
-     const TT = JU.Q4ec();
+     const BB = ij.lLM2();
```

#### 1336. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12866` → after: `L12866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12866) · [Before (L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12866)

```diff
-     return JU.nGE7(TT[0], 4 * TT[1], 4), UT
+     return ij.aFMC(BB[0], 4 * BB[1], 4), jB
```

#### 1337. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12870` → after: `L12870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12870) · [Before (L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12870)

```diff
-     const TT = JU.B2Mi();
+     const BB = ij.unBf();
```

#### 1338. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12872` → after: `L12872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12872) · [Before (L12872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12872)

```diff
-     return JU.nGE7(TT[0], 4 * TT[1], 4), UT
+     return ij.aFMC(BB[0], 4 * BB[1], 4), jB
```

#### 1339. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12876` → after: `L12876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12876) · [Before (L12876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12876)

```diff
-     const TT = JU.kqXI();
+     const BB = ij.FlBA();
```

#### 1340. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12878` → after: `L12878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12878) · [Before (L12878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12878)

```diff
-     return JU.nGE7(TT[0], 4 * TT[1], 4), UT
+     return ij.aFMC(BB[0], 4 * BB[1], 4), jB
```

#### 1341. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12882` → after: `L12882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12882) · [Before (L12882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12882)

```diff
-     return JU.aQA0() >>> 0
+     return ij.Elru() >>> 0
```

#### 1342. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12886` → after: `L12886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12886) · [Before (L12886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12886)

```diff
-     JU.tI0G()
+     ij.OTV6()
```

#### 1343. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12892` → after: `L12892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12892) · [Before (L12892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12892)

```diff
-       const mT = JU.UMhC();
+       const zB = ij.Bjzu();
```

#### 1344. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12895` → after: `L12895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12895) · [Before (L12895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12895)

```diff
-       JU.nGE7(TT, UT, 1)
+       ij.aFMC(BB, jB, 1)
```

#### 1345. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12900` → after: `L12900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12900) · [Before (L12900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12900)

```diff
-     JU.AcfZ(hT(TT))
+     ij.LfXS(cB(BB))
```

#### 1346. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12906` → after: `L12906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12906) · [Before (L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12906)

```diff
-       BYOW: {
+       G73z: {
```

#### 1347. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12908` → after: `L12908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12908) · [Before (L12908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12908)

```diff
-         g0n2: function(TT, UT) {
+         OIBL: function(BB, jB) {
```

#### 1348. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12911` → after: `L12911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12911) · [Before (L12911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12911)

```diff
-         RyJM: function(TT, UT) {
+         MQey: function(BB, jB) {
```

#### 1349. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12914` → after: `L12914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12914) · [Before (L12914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12914)

```diff
-         psFw: function(TT) {
+         wNPt: function(BB) {
```

#### 1350. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12917` → after: `L12917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12917) · [Before (L12917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12917)

```diff
-         w9hc: function(TT, UT) {
+         I5Ev: function(BB, jB) {
```

#### 1351. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12920` → after: `L12920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12920) · [Before (L12920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12920)

```diff
-         FN8h: function() {
+         ZEDf: function() {
```

#### 1352. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12923` → after: `L12923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12923) · [Before (L12923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12923)

```diff
-         VdTu: function(TT) {
+         dxrH: function(BB) {
```

#### 1353. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12933` → after: `L12933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12933) · [Before (L12933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12933)

```diff
-     } : new FinalizationRegistry((TT => JU.CyMd(TT, 1))),
+     } : new FinalizationRegistry((BB => ij.MGu3(BB, 1))),
```

#### 1354. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12937` → after: `L12937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12937) · [Before (L12937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12937)

```diff
-     } : new FinalizationRegistry((TT => JU.WVeG(TT, 1))),
+     } : new FinalizationRegistry((BB => ij.G0WK(BB, 1))),
```

#### 1355. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12941` → after: `L12941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12941) · [Before (L12941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12941)

```diff
-     } : new FinalizationRegistry((TT => JU.xwh1(TT, 1))),
+     } : new FinalizationRegistry((BB => ij.aCC0(BB, 1))),
```

#### 1356. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12945` → after: `L12945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12945) · [Before (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12945)

```diff
-     } : new FinalizationRegistry((TT => JU.PZki(TT, 1))),
+     } : new FinalizationRegistry((BB => ij.hNIH(BB, 1))),
```

#### 1357. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12949` → after: `L12949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12949) · [Before (L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12949)

```diff
-     } : new FinalizationRegistry((TT => JU.WQO9(TT, 1))),
+     } : new FinalizationRegistry((BB => ij.tkBC(BB, 1))),
```

#### 1358. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12953` → after: `L12953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12953) · [Before (L12953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12953)

```diff
-     } : new FinalizationRegistry((TT => JU.UHln(TT, 1))),
+     } : new FinalizationRegistry((BB => ij.gVFP(BB, 1))),
```

#### 1359. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12957` → after: `L12957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12957) · [Before (L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12957)

```diff
-     } : new FinalizationRegistry((TT => JU.R3rb(TT, 1))),
+     } : new FinalizationRegistry((BB => ij.gTdB(BB, 1))),
```

#### 1360. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12961` → after: `L12961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12961) · [Before (L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12961)

```diff
-     } : new FinalizationRegistry((TT => JU.YOco(TT, 1)));
+     } : new FinalizationRegistry((BB => ij.m8oZ(BB, 1)));
```

#### 1361. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L12970` → after: `L12970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R12970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L12970) · [Before (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L12970)

```diff
-     if (!(TT instanceof UT)) throw new Error(`expected instance of ${UT.name}`)
+     if (!(BB instanceof jB)) throw new Error(`expected instance of ${jB.name}`)
```

#### 1362. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13090` → after: `L13090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13090) · [Before (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13090)

```diff
-     return YU = TT, JU = TT.exports, eU = UT, TU = null, mU = null, zU = null, MU = null, nU = null, JU.HGGZ(), JU
+     return Ej = BB, ij = BB.exports, Mj = jB, Bj = null, zj = null, nj = null, dj = null, Nj = null, ij.TjtS(), ij
```

#### 1363. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13114` → after: `L13114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13114) · [Before (L13114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13114)

```diff
-         if (!TT.ok) throw new Error(`failed to fetch Wasm: ${TT.status} ${TT.statusText} fetching '${TT.url}'`);
+         if (!BB.ok) throw new Error(`failed to fetch Wasm: ${BB.status} ${BB.statusText} fetching '${BB.url}'`);
```

#### 1364. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13174` → after: `L13174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13174) · [Before (L13174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13174)

```diff
-     return null === QU ? "not failed" : `${QU}: ${(TT=sU)instanceof Error?`${TT.name}: ${TT.message}`:String(TT)}`;
+     return null === hj ? "not failed" : `${hj}: ${(BB=Xj)instanceof Error?`${BB.name}: ${BB.message}`:String(BB)}`;
```

#### 1365. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13179` → after: `L13179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13179) · [Before (L13179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13179)

```diff
-     if (!GU()) throw new Error(`Bloxd wasm is not ready (${NU()}): check isBloxdWasmReady() first`);
+     if (!xj()) throw new Error(`Bloxd wasm is not ready (${Kj()}): check isBloxdWasmReady() first`);
```

#### 1366. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13212` → after: `L13212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13212) · [Before (L13212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13212)

```diff
-       pl: zT
+       Gp: nB
```

#### 1367. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13233` → after: `L13233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13233) · [Before (L13233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13233)

```diff
-     IU = "failed", QU = UT, sU = TT, console.error(`Bloxd wasm failed (${UT}):`, TT);
+     Vj = "failed", hj = jB, Xj = BB, console.error(`Bloxd wasm failed (${jB}):`, BB);
```

#### 1368. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13248` → after: `L13248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13248) · [Before (L13248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13248)

```diff
-     url: () => new mT.U(mT(36402)),
+     url: () => new zB.U(zB(36389)),
```

#### 1369. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13252` → after: `L13252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13252) · [Before (L13252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13252)

```diff
-   var mm = mT(2963),
+   var zz = zB(2944),
```

#### 1370. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13254` → after: `L13254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13254) · [Before (L13254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13254)

```diff
-     zm = (mT(39879), mT(653));
+     nz = (zB(39865), zB(658));
```

#### 1371. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13261` → after: `L13261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13261) · [Before (L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13261)

```diff
-       } = mT(39883), pT = function(TT, UT, mT) {
+       } = zB(39871), sB = function(BB, jB, zB) {
```

#### 1372. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13263` → after: `L13263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13263) · [Before (L13263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13263)

```diff
-         for (const nT of TT.sW) lm(nT, mT);
+         for (const NB of BB.TQ) pz(NB, zB);
```

#### 1373. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13266` → after: `L13266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13266) · [Before (L13266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13266)

```diff
-           sW: TT.sW,
+           TQ: BB.TQ,
```

#### 1374. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13272` → after: `L13272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13272) · [Before (L13272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13272)

```diff
-           throw new Error(`Custom world-gen terrain "${WT.name}" is not in this generator's catalogue (${TT.length>0?TT.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${QB.name}" is not in this generator's catalogue (${BB.length>0?BB.join(", "):"empty"})`)
```

#### 1375. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13277` → after: `L13277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13277) · [Before (L13277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13277)

```diff
-               if (null !== TT.QW) throw new Error(`Custom world-gen terrain "${TT.name}" takes no options`);
+               if (null !== BB.AQ) throw new Error(`Custom world-gen terrain "${BB.name}" takes no options`);
```

#### 1376. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13281-L13282` → after: `L13281-L13282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13281-L13282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13281-L13282) · [Before (L13281-L13282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13281-L13282)

```diff
-             if (null !== TT.QW) try {
-               mT = JSON.parse(TT.QW)
+             if (null !== BB.AQ) try {
+               zB = JSON.parse(BB.AQ)
```

#### 1377. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13284` → after: `L13284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13284) · [Before (L13284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13284)

```diff
-               throw new Error(`Custom world-gen terrain "${TT.name}" has invalid optionsJson: ${String(WT)}`, {
+               throw new Error(`Custom world-gen terrain "${BB.name}" has invalid optionsJson: ${String(QB)}`, {
```

#### 1378. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13291` → after: `L13291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13291) · [Before (L13291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13291)

```diff
-           sW: TT.sW,
+           TQ: BB.TQ,
```

#### 1379. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13294` → after: `L13294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13294) · [Before (L13294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13294)

```diff
-       }(null !== (jT = null === nT || void 0 === nT ? void 0 : nT.yW) && void 0 !== jT ? jT : null, HT, UT);
+       }(null !== (aB = null === NB || void 0 === NB ? void 0 : NB.hQ) && void 0 !== aB ? aB : null, uB, jB);
```

#### 1380. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13296` → after: `L13296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13296) · [Before (L13296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13296)

```diff
-       const BT = null !== (lT = null === nT || void 0 === nT ? void 0 : nT.layers) && void 0 !== lT ? lT : [];
+       const JB = null !== (pB = null === NB || void 0 === NB ? void 0 : NB.layers) && void 0 !== pB ? pB : [];
```

#### 1381. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13299` → after: `L13299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13299) · [Before (L13299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13299)

```diff
-         const mT = [...TT].sort(((TT, UT) => TT.UW - UT.UW));
+         const zB = [...BB].sort(((BB, jB) => BB.nQ - jB.nQ));
```

#### 1382. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13301` → after: `L13301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13301) · [Before (L13301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13301)

```diff
-           if (mT[WT].UW < mT[WT - 1].mW) throw new Error(`Custom world-gen layers overlap: [${mT[WT-1].UW}, ${mT[WT-1].mW}) and [${mT[WT].UW}, ${mT[WT].mW})`)
+           if (zB[QB].nQ < zB[QB - 1].dQ) throw new Error(`Custom world-gen layers overlap: [${zB[QB-1].nQ}, ${zB[QB-1].dQ}) and [${zB[QB].nQ}, ${zB[QB].dQ})`)
```

#### 1383. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13313` → after: `L13313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13313) · [Before (L13313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13313)

```diff
-         if (mT >= zT.UW && mT < zT.mW) return MT.getChunk(TT, UT, mT - zT.WW, WT);
+         if (zB >= nB.nQ && zB < nB.dQ) return dB.getChunk(BB, jB, zB - nB.IQ, QB);
```

#### 1384. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13331-L13332` → after: `L13331-L13332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13331-L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13331-L13332) · [Before (L13331-L13332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13331-L13332)

```diff
-     if (TT.UW >= TT.mW) throw new Error(`Custom world-gen layer has minY (${TT.UW}) >= maxY (${TT.mW})`);
-     if (TT.UW % zm.z !== 0 || TT.mW % zm.z !== 0 || TT.WW % zm.z !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${zm.z}); got minY=${TT.UW}, maxY=${TT.mW}, groundY=${TT.WW}`);
+     if (BB.nQ >= BB.dQ) throw new Error(`Custom world-gen layer has minY (${BB.nQ}) >= maxY (${BB.dQ})`);
+     if (BB.nQ % nz.y !== 0 || BB.dQ % nz.y !== 0 || BB.IQ % nz.y !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${nz.y}); got minY=${BB.nQ}, maxY=${BB.dQ}, groundY=${BB.IQ}`);
```

#### 1385. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13334-L13337` → after: `L13334-L13337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13334-L13337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13334-L13337) · [Before (L13334-L13337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13334-L13337)

```diff
-         if (void 0 === (0, zm.C)(TT.nW, UT)) throw new Error(`Custom world-gen caves lavaPitBlock "${TT.nW}" not found in blockMetadata`);
-         if (TT.HW)
-           for (const mT of TT.HW) nm(mT, UT)
-       }(TT.MW, UT), 0 === TT.bW.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, nz.C)(BB.aQ, jB)) throw new Error(`Custom world-gen caves lavaPitBlock "${BB.aQ}" not found in blockMetadata`);
+         if (BB.pQ)
+           for (const zB of BB.pQ) Nz(zB, jB)
+       }(BB.uQ, jB), 0 === BB.EQ.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1386. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13339` → after: `L13339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13339) · [Before (L13339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13339)

```diff
-     for (const WT of TT.bW) jm(WT, UT), mT += WT.frequency;
+     for (const QB of BB.EQ) az(QB, jB), zB += QB.frequency;
```

#### 1387. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13341` → after: `L13341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13341) · [Before (L13341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13341)

```diff
-     for (const WT of TT.dW) lm(WT, UT)
+     for (const QB of BB.DQ) pz(QB, jB)
```

#### 1388. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13347-L13349` → after: `L13347-L13349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13347-L13349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13347-L13349) · [Before (L13347-L13349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13347-L13349)

```diff
-       jW: WT,
-       lW: zT,
-       LW: MT
+       sQ: QB,
+       JQ: nB,
+       mQ: dB
```

#### 1389. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13351-L13352` → after: `L13351-L13352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13351-L13352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13351-L13352) · [Before (L13351-L13352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13351-L13352)

```diff
-     if (void 0 === (0, zm.C)(mT, UT)) throw new Error(`Custom world-gen cave decoration blockName "${mT}" not found in blockMetadata`);
-     if (!WT && !zT && !MT) throw new Error(`Custom world-gen cave decoration "${mT}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, nz.C)(zB, jB)) throw new Error(`Custom world-gen cave decoration blockName "${zB}" not found in blockMetadata`);
+     if (!QB && !nB && !dB) throw new Error(`Custom world-gen cave decoration "${zB}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1390. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13355-L13356` → after: `L13355-L13356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13355-L13356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13355-L13356) · [Before (L13355-L13356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13355-L13356)

```diff
-     if (MT && Hm(mT, "meta|rot1|top", UT), km(TT.pW, mT, "pW"), km(TT.BW, mT, "BW"), !Number.isInteger(TT.ZW) || TT.ZW < 0) throw new Error(`Custom world-gen cave decoration "${mT}" minPlacements must be a non-negative integer, got ${TT.ZW}`);
-     if (!(0, zm.E)(TT.cW) && (km(TT.cW.fW, mT, "depthRamp.deepClusterChance"), TT.cW.qW <= TT.cW.iW)) throw new Error(`Custom world-gen cave decoration "${mT}" deepY must be strictly smaller than shallowY, but ${TT.cW.qW} <= ${TT.cW.iW} `)
+     if (dB && uz(zB, "meta|rot1|top", jB), Uz(BB.yQ, zB, "yQ"), Uz(BB.kQ, zB, "kQ"), !Number.isInteger(BB.GQ) || BB.GQ < 0) throw new Error(`Custom world-gen cave decoration "${zB}" minPlacements must be a non-negative integer, got ${BB.GQ}`);
+     if (!(0, nz.I)(BB.LQ) && (Uz(BB.LQ.tQ, zB, "depthRamp.deepClusterChance"), BB.LQ.SQ <= BB.LQ.MQ)) throw new Error(`Custom world-gen cave decoration "${zB}" deepY must be strictly smaller than shallowY, but ${BB.LQ.SQ} <= ${BB.LQ.MQ} `)
```

#### 1391. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13360-L13361` → after: `L13360-L13361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13360-L13361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13360-L13361) · [Before (L13360-L13361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13360-L13361)

```diff
-     const WT = `${TT}|${UT}`;
-     if (void 0 === (0, zm.C)(WT, mT)) throw new Error(`Custom world-gen cave decoration "${TT}" is missing directional variant "${WT}" required for wall/ceiling anchoring`)
+     const QB = `${BB}|${jB}`;
+     if (void 0 === (0, nz.C)(QB, zB)) throw new Error(`Custom world-gen cave decoration "${BB}" is missing directional variant "${QB}" required for wall/ceiling anchoring`)
```

#### 1392. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13365` → after: `L13365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13365) · [Before (L13365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13365)

```diff
-     if (TT < 0 || TT > 1) throw new Error(`Custom world-gen cave decoration "${UT}" ${mT} must be in [0, 1], got ${TT}`)
+     if (BB < 0 || BB > 1) throw new Error(`Custom world-gen cave decoration "${jB}" ${zB} must be in [0, 1], got ${BB}`)
```

#### 1393. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13369-L13375` → after: `L13369-L13375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13369-L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13369-L13375) · [Before (L13369-L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13369-L13375)

```diff
-     if (TT.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${TT.frequency}`);
-     if (void 0 === (0, zm.C)(TT.eW, UT)) throw new Error(`Custom world-gen biome topsoilBlock "${TT.eW}" not found in blockMetadata`);
-     if (void 0 === (0, zm.C)(TT.YW, UT)) throw new Error(`Custom world-gen biome lowsoilBlock "${TT.YW}" not found in blockMetadata`);
-     if (0 === TT.JW.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const mT of TT.JW) {
-       if (mT.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${mT.frequency}`);
-       if (void 0 === (0, zm.C)(mT.blockName, UT)) throw new Error(`Custom world-gen biome stoneType blockName "${mT.blockName}" not found in blockMetadata`)
+     if (BB.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${BB.frequency}`);
+     if (void 0 === (0, nz.C)(BB.qQ, jB)) throw new Error(`Custom world-gen biome topsoilBlock "${BB.qQ}" not found in blockMetadata`);
+     if (void 0 === (0, nz.C)(BB.fQ, jB)) throw new Error(`Custom world-gen biome lowsoilBlock "${BB.fQ}" not found in blockMetadata`);
+     if (0 === BB.oQ.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const zB of BB.oQ) {
+       if (zB.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${zB.frequency}`);
+       if (void 0 === (0, nz.C)(zB.blockName, jB)) throw new Error(`Custom world-gen biome stoneType blockName "${zB.blockName}" not found in blockMetadata`)
```

#### 1394. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13380-L13384` → after: `L13380-L13384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13380-L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13380-L13384) · [Before (L13380-L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13380-L13384)

```diff
-     if (void 0 === (0, zm.C)(TT.blockName, UT)) throw new Error(`Custom world-gen ore blockName "${TT.blockName}" not found in blockMetadata`);
-     if (TT.radius < 0) throw new Error(`Custom world-gen ore "${TT.blockName}" radius must be >= 0, got ${TT.radius}`);
-     if (TT.tW <= 0) throw new Error(`Custom world-gen ore "${TT.blockName}" minDistBetweenDeposits must be > 0, got ${TT.tW}`);
-     if (TT.UW > TT.mW) throw new Error(`Custom world-gen ore "${TT.blockName}" minY (${TT.UW}) must be <= maxY (${TT.mW})`);
-     if (TT.aW < 0 || TT.aW > 1) throw new Error(`Custom world-gen ore "${TT.blockName}" spawnChance must be in [0, 1], got ${TT.aW}`)
+     if (void 0 === (0, nz.C)(BB.blockName, jB)) throw new Error(`Custom world-gen ore blockName "${BB.blockName}" not found in blockMetadata`);
+     if (BB.radius < 0) throw new Error(`Custom world-gen ore "${BB.blockName}" radius must be >= 0, got ${BB.radius}`);
+     if (BB.YQ <= 0) throw new Error(`Custom world-gen ore "${BB.blockName}" minDistBetweenDeposits must be > 0, got ${BB.YQ}`);
+     if (BB.nQ > BB.dQ) throw new Error(`Custom world-gen ore "${BB.blockName}" minY (${BB.nQ}) must be <= maxY (${BB.dQ})`);
+     if (BB.VQ < 0 || BB.VQ > 1) throw new Error(`Custom world-gen ore "${BB.blockName}" spawnChance must be in [0, 1], got ${BB.VQ}`)
```

#### 1395. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13386` → after: `L13386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13386) · [Before (L13386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13386)

```diff
-   mT(39823);
+   zB(39796);
```

#### 1396. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13391-L13394` → after: `L13391-L13394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13391-L13394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13391-L13394) · [Before (L13391-L13394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13391-L13394)

```diff
-       tW: 10,
-       UW: -98,
-       mW: -78,
-       aW: .4
+       YQ: 10,
+       nQ: -98,
+       dQ: -78,
+       VQ: .4
```

#### 1397. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13399-L13402` → after: `L13399-L13402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13399-L13402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13399-L13402) · [Before (L13399-L13402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13399-L13402)

```diff
-       tW: 6,
-       UW: -40,
-       mW: 20,
-       aW: .6
+       YQ: 6,
+       nQ: -40,
+       dQ: 20,
+       VQ: .6
```

#### 1398. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13406-L13409` → after: `L13406-L13409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13406-L13409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13406-L13409) · [Before (L13406-L13409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13406-L13409)

```diff
-       tW: 10,
-       UW: -75,
-       mW: -55,
-       aW: .4
+       YQ: 10,
+       nQ: -75,
+       dQ: -55,
+       VQ: .4
```

#### 1399. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13413` → after: `L13413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13413) · [Before (L13413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13413)

```diff
-       QW: null
+       AQ: null
```

#### 1400. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13416` → after: `L13416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13416) · [Before (L13416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13416)

```diff
-     [Lm]: () => mT(39785).c
+     [rz]: () => zB(39750).c
```

#### 1401. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13418` → after: `L13418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13418) · [Before (L13418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13418)

```diff
-   var fm = mT(9337);
+   var kz = zB(9271);
```

#### 1402. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13451` → after: `L13451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13451) · [Before (L13451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13451)

```diff
-       this.rootName = TT, this.rootId = UT, this.metaStr = mT, this.rot = WT, this.open = zT, this.halfblockPlacement = MT, this.ZM = gT, this.treeBase = nT, this.treeCanopy = HT, this.books = kT, this.freshlyGrown = jT, this.roots = lT, this.lava = LT, this.top = pT, this.grassR … [truncated]
+       this.rootName = BB, this.rootId = jB, this.metaStr = zB, this.rot = QB, this.open = nB, this.halfblockPlacement = dB, this.fd = IB, this.treeBase = NB, this.treeCanopy = uB, this.books = UB, this.freshlyGrown = aB, this.roots = pB, this.lava = rB, this.top = sB, this.grassR … [truncated]
```

#### 1403. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13458` → after: `L13458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13458) · [Before (L13458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13458)

```diff
-       const zT = null !== WT && void 0 !== WT ? WT : TT;
+       const nB = null !== QB && void 0 !== QB ? QB : BB;
```

#### 1404. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13479` → after: `L13479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13479) · [Before (L13479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13479)

```diff
-           qT = null !== (MT = em.find((TT => UT.endsWith(`|${TT}`)))) && void 0 !== MT ? MT : null,
+           LB = null !== (dB = Sz.find((BB => jB.endsWith(`|${BB}`)))) && void 0 !== dB ? dB : null,
```

#### 1405. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13552` → after: `L13552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13552) · [Before (L13552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13552)

```diff
-     return "" === WT ? 1 === UT ? TT : `${TT}|meta|rot${UT}` : `${TT}|meta|rot${UT}|${WT}`
+     return "" === QB ? 1 === jB ? BB : `${BB}|meta|rot${jB}` : `${BB}|meta|rot${jB}|${QB}`
```

#### 1406. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13565` → after: `L13565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13565) · [Before (L13565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13565)

```diff
-     return (0, fm.f)(TT.map((TT => {
+     return (0, kz.h)(BB.map((BB => {
```

#### 1407. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13650-L13651` → after: `L13650-L13651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13650-L13651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13650-L13651) · [Before (L13650-L13651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13650-L13651)

```diff
-     const nT = null !== (mT = null !== (WT = TT.blockModel) && void 0 !== WT ? WT : UT.blockModel) && void 0 !== mT ? mT : "";
-     "noticeboard_standing_leg" === nT ? gT = LW : nT.startsWith("noticeboard_standing") ? gT = jW : nT.startsWith("noticeboard_wall") ? gT = lW : TT.meta.rootName.endsWith(" Directional Arrow") ? gT = mW : TT.meta.rootName.endsWith(" Ladder") ? gT = kW : TT.meta.rootName.endsWith … [truncated]
+     const NB = null !== (zB = null !== (QB = BB.blockModel) && void 0 !== QB ? QB : jB.blockModel) && void 0 !== zB ? zB : "";
+     "noticeboard_standing_leg" === NB ? IB = pQ : NB.startsWith("noticeboard_standing") ? IB = UQ : NB.startsWith("noticeboard_wall") ? IB = aQ : BB.meta.rootName.endsWith(" Directional Arrow") ? IB = jQ : BB.meta.rootName.endsWith(" Ladder") ? IB = uQ : BB.meta.rootName.endsWith … [truncated]
```

#### 1408. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13653` → after: `L13653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13653) · [Before (L13653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13653)

```diff
-     return null === (zT = gT) || void 0 === zT ? void 0 : zT[((null !== (MT = TT.meta.rot) && void 0 !== MT ? MT : 1) - 1 + HT) % 4]
+     return null === (nB = IB) || void 0 === nB ? void 0 : nB[((null !== (dB = BB.meta.rot) && void 0 !== dB ? dB : 1) - 1 + uB) % 4]
```

#### 1409. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13692-L13693` → after: `L13692-L13693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13692-L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13692-L13693) · [Before (L13692-L13693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13692-L13693)

```diff
-     const mT = [eW(UT), UT & bW ? OW : ""].filter(Boolean);
-     return mT.length ? `${TT}|meta|${mT.join("|")}` : TT
+     const zB = [SQ(jB), jB & gQ ? tQ : ""].filter(Boolean);
+     return zB.length ? `${BB}|meta|${zB.join("|")}` : BB
```

#### 1410. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13697` → after: `L13697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13697) · [Before (L13697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13697)

```diff
-     return iW.map((UT => (0, fm.f)(function(TT, UT) {
+     return LQ.map((jB => (0, kz.h)(function(BB, jB) {
```

#### 1411. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13730` → after: `L13730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13730) · [Before (L13730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13730)

```diff
-     const WT = `${TT}|${UT}|${mT}`;
+     const QB = `${BB}|${jB}|${zB}`;
```

#### 1412. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13748` → after: `L13748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13748) · [Before (L13748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13748)

```diff
-     return 1 !== UT || mT ? `${TT}|meta|rot${UT}|${mT?"open":"closed"}` : TT
+     return 1 !== jB || zB ? `${BB}|meta|rot${jB}|${zB?"open":"closed"}` : BB
```

#### 1413. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13754` → after: `L13754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13754) · [Before (L13754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13754)

```diff
-     return `${TT}|meta|rot${UT}|${mT}`
+     return `${BB}|meta|rot${jB}|${zB}`
```

#### 1414. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13757` → after: `L13757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13757) · [Before (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13757)

```diff
-     PW = (FW.map((TT => `${TT} Boomerang`)), ["Cursemetal", "Kingly Amethite", "Kingly Diamond"]),
+     ZQ = (XQ.map((BB => `${BB} Boomerang`)), ["Cursemetal", "Kingly Amethite", "Kingly Diamond"]),
```

#### 1415. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13759-L13760` → after: `L13759-L13760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13759-L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13759-L13760) · [Before (L13759-L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13759-L13760)

```diff
-   mT(375);
-   var uW = mT(632);
+   zB(386);
+   var TQ = zB(628);
```

#### 1416. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13785-L13786` → after: `L13785-L13786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13785-L13786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13785-L13786) · [Before (L13785-L13786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13785-L13786)

```diff
-   hW.map((TT => `${TT} Torch`));
-   const DW = ["Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", ...FW.map((TT => `${TT} Spade`))],
+   CQ.map((BB => `${BB} Torch`));
+   const cQ = ["Wood Spade", "Stone Spade", "Iron Spade", "Gold Spade", "Diamond Spade", ...XQ.map((BB => `${BB} Spade`))],
```

#### 1417. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13792` → after: `L13792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13792) · [Before (L13792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13792)

```diff
-   RW.LOG, RW.PLANK, RW.LEAF, RW.STONE, RW.STEM_FRUIT, new uW.e({
+   RQ.LOG, RQ.PLANK, RQ.LEAF, RQ.STONE, RQ.STEM_FRUIT, new TQ.c({
```

#### 1418. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13801` → after: `L13801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13801) · [Before (L13801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13801)

```diff
-     return `${TT} Spawn Orb`
+     return `${BB} Spawn Orb`
```

#### 1419. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13805` → after: `L13805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13805) · [Before (L13805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13805)

```diff
-     return `${TT} Spawner Block`
+     return `${BB} Spawner Block`
```

#### 1420. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13809` → after: `L13809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13809) · [Before (L13809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13809)

```diff
-     return `Caught Mob ${TT.replaceAll(" ","_")} ${GW(UT)}`
+     return `Caught Mob ${BB.replaceAll(" ","_")} ${wQ(jB)}`
```

#### 1421. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13823` → after: `L13823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13823) · [Before (L13823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13823)

```diff
-     return Wz[TT] ? Wz[TT] : `${TT} Painting`
+     return zn[BB] ? zn[BB] : `${BB} Painting`
```

#### 1422. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13839` → after: `L13839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13839) · [Before (L13839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13839)

```diff
-       return TT > 0 && TT < UT ? TT : (TT % UT + UT) % UT
+       return BB > 0 && BB < jB ? BB : (BB % jB + jB) % jB
```

#### 1423. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13851` → after: `L13851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13851) · [Before (L13851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13851)

```diff
-       WT.min = TT, WT.max = "excludeMax" === mT ? UT : UT + 1;
+       QB.min = BB, QB.max = "excludeMax" === zB ? jB : jB + 1;
```

#### 1424. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L13993` → after: `L13993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R13993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L13993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L13993) · [Before (L13993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L13993)

```diff
-     return null !== (mT = null === TT || void 0 === TT || null === (WT = TT.attributes) || void 0 === WT || null === (zT = WT.customAttributes) || void 0 === zT || null === (MT = zT.enchantments) || void 0 === MT ? void 0 : MT[UT]) && void 0 !== mT ? mT : null
+     return null !== (zB = null === BB || void 0 === BB || null === (QB = BB.attributes) || void 0 === QB || null === (nB = QB.customAttributes) || void 0 === nB || null === (dB = nB.enchantments) || void 0 === dB ? void 0 : dB[jB]) && void 0 !== zB ? zB : null
```

#### 1425. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14120` → after: `L14120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14120) · [Before (L14120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14120)

```diff
-     if (0 === UT.size) throw new Error(`No visible variations for mob type: ${TT}.`);
+     if (0 === jB.size) throw new Error(`No visible variations for mob type: ${BB}.`);
```

#### 1426. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14132` → after: `L14132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14132) · [Before (L14132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14132)

```diff
-         [`${TT}_stage${nT+1}`]: Object.assign({
+         [`${BB}_stage${NB+1}`]: Object.assign({
```

#### 1427. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14136` → after: `L14136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14136) · [Before (L14136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14136)

```diff
-         }, null !== (gT = null === WT || void 0 === WT ? void 0 : WT[nT + 1]) && void 0 !== gT ? gT : {})
+         }, null !== (IB = null === QB || void 0 === QB ? void 0 : QB[NB + 1]) && void 0 !== IB ? IB : {})
```

#### 1428. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14156` → after: `L14156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14156) · [Before (L14156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14156)

```diff
-             colour: `$t(colour:${EW(nT)})`
+             colour: `$t(colour:${KQ(NB)})`
```

#### 1429. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14162` → after: `L14162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14162) · [Before (L14162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14162)

```diff
-             colour: `$t(colour:${EW(nT)})`
+             colour: `$t(colour:${KQ(NB)})`
```

#### 1430. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14168` → after: `L14168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14168) · [Before (L14168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14168)

```diff
-         rootMetaDesc: `${HT}|meta|rot1|bot`,
+         rootMetaDesc: `${uB}|meta|rot1|bot`,
```

#### 1431. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14175` → after: `L14175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14175) · [Before (L14175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14175)

```diff
-       bot: (0, fm.f)([
+       bot: (0, kz.h)([
```

#### 1432. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14181` → after: `L14181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14181) · [Before (L14181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14181)

```diff
-       top: (0, fm.f)([
+       top: (0, kz.h)([
```

#### 1433. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14187` → after: `L14187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14187) · [Before (L14187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14187)

```diff
-       side1: (0, fm.f)([
+       side1: (0, kz.h)([
```

#### 1434. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14193` → after: `L14193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14193) · [Before (L14193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14193)

```diff
-       side2: (0, fm.f)([
+       side2: (0, kz.h)([
```

#### 1435. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14199` → after: `L14199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14199) · [Before (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14199)

```diff
-       side3: (0, fm.f)([
+       side3: (0, kz.h)([
```

#### 1436. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14205` → after: `L14205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14205) · [Before (L14205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14205)

```diff
-       side4: (0, fm.f)([
+       side4: (0, kz.h)([
```

#### 1437. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14212` → after: `L14212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14212) · [Before (L14212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14212)

```diff
-     Yz = [(0, fm.f)([
+     Mn = [(0, kz.h)([
```

#### 1438. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14217` → after: `L14217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14217) · [Before (L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14217)

```diff
-     ]), (0, fm.f)([
+     ]), (0, kz.h)([
```

#### 1439. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14222` → after: `L14222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14222) · [Before (L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14222)

```diff
-     ]), (0, fm.f)([
+     ]), (0, kz.h)([
```

#### 1440. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14227` → after: `L14227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14227) · [Before (L14227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14227)

```diff
-     ]), (0, fm.f)([
+     ]), (0, kz.h)([
```

#### 1441. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14233` → after: `L14233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14233) · [Before (L14233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14233)

```diff
-   const Jz = (0, fm.f)([
+   const En = (0, kz.h)([
```

#### 1442. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14252` → after: `L14252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14252) · [Before (L14252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14252)

```diff
-         oZ: ez.bot
+         Sy: Sn.bot
```

#### 1443. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14254` → after: `L14254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14254) · [Before (L14254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14254)

```diff
-       [`${TT}|meta|rot1|top`]: {
+       [`${BB}|meta|rot1|top`]: {
```

#### 1444. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14256` → after: `L14256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14256) · [Before (L14256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14256)

```diff
-         oZ: ez.top
+         Sy: Sn.top
```

#### 1445. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14258` → after: `L14258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14258) · [Before (L14258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14258)

```diff
-       [`${TT}|meta|rot1|side`]: {
+       [`${BB}|meta|rot1|side`]: {
```

#### 1446. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14260` → after: `L14260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14260) · [Before (L14260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14260)

```diff
-         oZ: ez.side1
+         Sy: Sn.side1
```

#### 1447. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14262` → after: `L14262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14262) · [Before (L14262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14262)

```diff
-       [`${TT}|meta|rot2|side`]: {
+       [`${BB}|meta|rot2|side`]: {
```

#### 1448. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14264` → after: `L14264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14264) · [Before (L14264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14264)

```diff
-         oZ: ez.side2
+         Sy: Sn.side2
```

#### 1449. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14266` → after: `L14266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14266) · [Before (L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14266)

```diff
-       [`${TT}|meta|rot3|side`]: {
+       [`${BB}|meta|rot3|side`]: {
```

#### 1450. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14268` → after: `L14268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14268) · [Before (L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14268)

```diff
-         oZ: ez.side3
+         Sy: Sn.side3
```

#### 1451. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14270` → after: `L14270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14270) · [Before (L14270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14270)

```diff
-       [`${TT}|meta|rot4|side`]: {
+       [`${BB}|meta|rot4|side`]: {
```

#### 1452. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14272` → after: `L14272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14272) · [Before (L14272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14272)

```diff
-         oZ: ez.side4
+         Sy: Sn.side4
```

#### 1453. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14288-L14290` → after: `L14288-L14290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14288-L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14288-L14290) · [Before (L14288-L14290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14288-L14290)

```diff
-           rootMetaDesc: `${TT}|meta|rot1|bot`,
-           oZ: MT
-         } : WT[`${TT}|meta|rot${UT}|${zT}`] = {
+           rootMetaDesc: `${BB}|meta|rot1|bot`,
+           Sy: dB
+         } : QB[`${BB}|meta|rot${jB}|${nB}`] = {
```

#### 1454. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14292` → after: `L14292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14292) · [Before (L14292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14292)

```diff
-           oZ: MT
+           Sy: dB
```

#### 1455. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14306` → after: `L14306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14306) · [Before (L14306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14306)

```diff
-     return hW.map((mT => tz(`${mT} ${TT} Stairs`, UT(mT))))
+     return CQ.map((zB => Dn(`${zB} ${BB} Stairs`, jB(zB))))
```

#### 1456. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14310` → after: `L14310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14310) · [Before (L14310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14310)

```diff
-     const mT = `_${TT} Top`,
+     const zB = `_${BB} Top`,
```

#### 1457. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14316` → after: `L14316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14316) · [Before (L14316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14316)

```diff
-         oZ: xW[MT],
+         Sy: iQ[dB],
```

#### 1458. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14322` → after: `L14322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14322) · [Before (L14322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14322)

```diff
-       oZ: dW[zT],
+       Sy: qQ[nB],
```

#### 1459. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14337` → after: `L14337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14337) · [Before (L14337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14337)

```diff
-         blockModel: `_${TT} Hanging`
+         blockModel: `_${BB} Hanging`
```

#### 1460. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14339` → after: `L14339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14339) · [Before (L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14339)

```diff
-       zT = `_${TT} Flag`,
+       nB = `_${BB} Flag`,
```

#### 1461. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14343-L14344` → after: `L14343-L14344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14343-L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14343-L14344) · [Before (L14343-L14344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14343-L14344)

```diff
-         rootMetaDesc: `${zT}|meta|rot1|top`,
-         blockModel: `${zT} Hanging`
+         rootMetaDesc: `${nB}|meta|rot1|top`,
+         blockModel: `${nB} Hanging`
```

#### 1462. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14356` → after: `L14356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14356) · [Before (L14356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14356)

```diff
-       [`${TT}|meta|rot2|bot`]: {
+       [`${BB}|meta|rot2|bot`]: {
```

#### 1463. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14359` → after: `L14359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14359) · [Before (L14359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14359)

```diff
-       [`${TT}|meta|rot3|bot`]: {
+       [`${BB}|meta|rot3|bot`]: {
```

#### 1464. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14362` → after: `L14362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14362) · [Before (L14362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14362)

```diff
-       [`${TT}|meta|rot4|bot`]: {
+       [`${BB}|meta|rot4|bot`]: {
```

#### 1465. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14366` → after: `L14366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14366) · [Before (L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14366)

```diff
-       [`${zT}|meta|rot2|top`]: {
+       [`${nB}|meta|rot2|top`]: {
```

#### 1466. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14369` → after: `L14369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14369) · [Before (L14369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14369)

```diff
-       [`${zT}|meta|rot3|top`]: {
+       [`${nB}|meta|rot3|top`]: {
```

#### 1467. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14372` → after: `L14372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14372) · [Before (L14372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14372)

```diff
-       [`${zT}|meta|rot4|top`]: {
+       [`${nB}|meta|rot4|top`]: {
```

#### 1468. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14375` → after: `L14375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14375) · [Before (L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14375)

```diff
-       [`${zT}|meta|rot1|side`]: {
+       [`${nB}|meta|rot1|side`]: {
```

#### 1469. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14378` → after: `L14378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14378) · [Before (L14378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14378)

```diff
-       [`${zT}|meta|rot2|side`]: {
+       [`${nB}|meta|rot2|side`]: {
```

#### 1470. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14381` → after: `L14381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14381) · [Before (L14381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14381)

```diff
-       [`${zT}|meta|rot3|side`]: {
+       [`${nB}|meta|rot3|side`]: {
```

#### 1471. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14384` → after: `L14384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14384) · [Before (L14384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14384)

```diff
-       [`${zT}|meta|rot4|side`]: {
+       [`${nB}|meta|rot4|side`]: {
```

#### 1472. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14387` → after: `L14387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14387) · [Before (L14387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14387)

```diff
-       [`${zT}|meta|rot1|bot`]: {
+       [`${nB}|meta|rot1|bot`]: {
```

#### 1473. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14390` → after: `L14390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14390) · [Before (L14390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14390)

```diff
-       [`${zT}|meta|rot2|bot`]: {
+       [`${nB}|meta|rot2|bot`]: {
```

#### 1474. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14393` → after: `L14393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14393) · [Before (L14393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14393)

```diff
-       [`${zT}|meta|rot3|bot`]: {
+       [`${nB}|meta|rot3|bot`]: {
```

#### 1475. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14396` → after: `L14396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14396) · [Before (L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14396)

```diff
-       [`${zT}|meta|rot4|bot`]: {
+       [`${nB}|meta|rot4|bot`]: {
```

#### 1476. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14399` → after: `L14399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14399) · [Before (L14399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14399)

```diff
-       [`${TT}|meta|rot1|top`]: {
+       [`${BB}|meta|rot1|top`]: {
```

#### 1477. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14402` → after: `L14402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14402) · [Before (L14402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14402)

```diff
-       [`${TT}|meta|rot2|top`]: {
+       [`${BB}|meta|rot2|top`]: {
```

#### 1478. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14405` → after: `L14405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14405) · [Before (L14405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14405)

```diff
-       [`${TT}|meta|rot3|top`]: {
+       [`${BB}|meta|rot3|top`]: {
```

#### 1479. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14408` → after: `L14408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14408) · [Before (L14408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14408)

```diff
-       [`${TT}|meta|rot4|top`]: {
+       [`${BB}|meta|rot4|top`]: {
```

#### 1480. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14411` → after: `L14411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14411) · [Before (L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14411)

```diff
-       [`${TT}|meta|rot1|side`]: {
+       [`${BB}|meta|rot1|side`]: {
```

#### 1481. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14414` → after: `L14414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14414) · [Before (L14414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14414)

```diff
-       [`${TT}|meta|rot2|side`]: {
+       [`${BB}|meta|rot2|side`]: {
```

#### 1482. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14417` → after: `L14417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14417) · [Before (L14417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14417)

```diff
-       [`${TT}|meta|rot3|side`]: {
+       [`${BB}|meta|rot3|side`]: {
```

#### 1483. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14420` → after: `L14420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14420) · [Before (L14420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14420)

```diff
-       [`${TT}|meta|rot4|side`]: {
+       [`${BB}|meta|rot4|side`]: {
```

#### 1484. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14429` → after: `L14429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14429) · [Before (L14429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14429)

```diff
-     return `${mT}_${WT}`
+     return `${zB}_${QB}`
```

#### 1485. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14437` → after: `L14437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14437) · [Before (L14437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14437)

```diff
-     return sz(UT) === sz(mT) ? `${TT}_straight_${sz(UT)}` : `${TT}_elbow_${Qz(UT,mT)}`
+     return Zn(jB) === Zn(zB) ? `${BB}_straight_${Zn(jB)}` : `${BB}_elbow_${Xn(jB,zB)}`
```

#### 1486. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14441-L14443` → after: `L14441-L14443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14441-L14443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14441-L14443) · [Before (L14441-L14443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14441-L14443)

```diff
-     const MT = `meta|${WT}|none`;
-     if (zT.rootMetaDesc.split("|").slice(1).join("|") !== MT) throw new Error(`${TT} root hub pipe .rootMetaDesc must be |${MT}, got "${zT.rootMetaDesc}"`);
-     if (void 0 !== zT.blockModel) throw new Error(`${TT} root hub pipe data must NOT set blockModel - the builder fills it per-variant`);
+     const dB = `meta|${QB}|none`;
+     if (nB.rootMetaDesc.split("|").slice(1).join("|") !== dB) throw new Error(`${BB} root hub pipe .rootMetaDesc must be |${dB}, got "${nB.rootMetaDesc}"`);
+     if (void 0 !== nB.blockModel) throw new Error(`${BB} root hub pipe data must NOT set blockModel - the builder fills it per-variant`);
```

#### 1487. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14454` → after: `L14454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14454) · [Before (L14454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14454)

```diff
-           blockModel: `${UT}_${WT}_${mT}`
+           blockModel: `${jB}_${QB}_${zB}`
```

#### 1488. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14457` → after: `L14457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14457) · [Before (L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14457)

```diff
-     for (const HT of Iz) HT !== mT && (nT[`${TT}|meta|${WT}|${HT}`] = gT(`${UT}_${WT}_${HT}`));
+     for (const uB of hn) uB !== zB && (NB[`${BB}|meta|${QB}|${uB}`] = IB(`${jB}_${QB}_${uB}`));
```

#### 1489. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14462` → after: `L14462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14462) · [Before (L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14462)

```diff
-     console.assert("meta|conn|none" === mT.rootMetaDesc.split("|").slice(1).join("|"), `${TT} root pipe .rootMetaDesc must be |meta|conn|none`), console.assert(void 0 === mT.blockModel, `${TT} root pipe data must NOT set blockModel - the builder fills it per-variant`);
+     console.assert("meta|conn|none" === zB.rootMetaDesc.split("|").slice(1).join("|"), `${BB} root pipe .rootMetaDesc must be |meta|conn|none`), console.assert(void 0 === zB.blockModel, `${BB} root pipe data must NOT set blockModel - the builder fills it per-variant`);
```

#### 1490. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14473` → after: `L14473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14473) · [Before (L14473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14473)

```diff
-           blockModel: `${UT}_isolated`
+           blockModel: `${jB}_isolated`
```

#### 1491. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14476` → after: `L14476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14476) · [Before (L14476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14476)

```diff
-     for (const MT of Iz) zT[`${TT}|meta|conn|${MT}`] = WT(`${UT}_end_${MT}`);
+     for (const dB of hn) nB[`${BB}|meta|conn|${dB}`] = QB(`${jB}_end_${dB}`);
```

#### 1492. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14480` → after: `L14480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14480) · [Before (L14480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14480)

```diff
-         zT[`${TT}|meta|conn|${Qz(gT,nT)}`] = WT(Fz(UT, gT, nT))
+         nB[`${BB}|meta|conn|${Xn(IB,NB)}`] = QB(An(jB, IB, NB))
```

#### 1493. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14486` → after: `L14486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14486) · [Before (L14486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14486)

```diff
-     console.assert("meta|rot1" === UT.rootMetaDesc.split("|").slice(1).join("|"), `${TT} root block .rootMetaDesc must be |meta|rot1`);
+     console.assert("meta|rot1" === jB.rootMetaDesc.split("|").slice(1).join("|"), `${BB} root block .rootMetaDesc must be |meta|rot1`);
```

#### 1494. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14492` → after: `L14492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14492) · [Before (L14492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14492)

```diff
-       [`${TT}|meta|rot2`]: {
+       [`${BB}|meta|rot2`]: {
```

#### 1495. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14495` → after: `L14495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14495) · [Before (L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14495)

```diff
-       [`${TT}|meta|rot3`]: {
+       [`${BB}|meta|rot3`]: {
```

#### 1496. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14498` → after: `L14498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14498) · [Before (L14498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14498)

```diff
-       [`${TT}|meta|rot4`]: {
+       [`${BB}|meta|rot4`]: {
```

#### 1497. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14532` → after: `L14532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14532) · [Before (L14532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14532)

```diff
-       [`${TT}|meta|rot2`]: {
+       [`${BB}|meta|rot2`]: {
```

#### 1498. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14536` → after: `L14536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14536) · [Before (L14536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14536)

```diff
-       [`${TT}|meta|rot3`]: {
+       [`${BB}|meta|rot3`]: {
```

#### 1499. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14540` → after: `L14540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14540) · [Before (L14540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14540)

```diff
-       [`${TT}|meta|rot4`]: {
+       [`${BB}|meta|rot4`]: {
```

#### 1500. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14553` → after: `L14553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14553) · [Before (L14553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14553)

```diff
-           translationKey: `item:${NW(TT)}MobSpawnerBlock`
+           translationKey: `item:${xQ(BB)}MobSpawnerBlock`
```

#### 1501. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14556` → after: `L14556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14556) · [Before (L14556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14556)

```diff
-           translationKey: `item:${NW(TT)}MobSpawnerBlockDescription`
+           translationKey: `item:${xQ(BB)}MobSpawnerBlockDescription`
```

#### 1502. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L14558` → after: `L14558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R14558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L14558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/procGenWorker.js#L14558) · [Before (L14558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/procGenWorker.js#L14558)

```diff
-         itemTexture: `${EW(TT)}_spawner_block_icon`,
+         itemTexture: `${KQ(BB)}_spawner_block_icon`,
```
