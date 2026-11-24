# Changed — Bundle Modifications Report (Part 135 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `135 / 137` (**427** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 134](part-134.md) · [Part 136 →](part-136.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1165 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 1009. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10649-L10650` → after: `L10649-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650) · [Before (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650)

```diff
-                 if (GB.hasScatteredLakes && this.isBesideLake(yB, kB, zB) && (this.random.reseed(`${yB}|${kB}|${this.seed}oasisShore`), this.random.next() < .85 && (aB.push(tB, LB, SB), MB = this.biomeSelector.baseBiome.floraGenerator)), !uB.d.isInCave(yB, LB, kB, QB) && !qB.d.is … [truncated]
-                   for (let zB = LB + 1; zB <= LB + GB.maxFloraHeight; zB += this.ZJ) rB.startY = zB, MB.addBiomeFloraToColumn(rB, BB, jB, yB, zB, kB, LB)
+                 if (UB.hasScatteredLakes && this.isBesideLake(qB, yB, ZB) && (this.random.reseed(`${qB}|${yB}|${this.seed}oasisShore`), this.random.next() < .85 && (nB.push(CB, WB, QB), sB = this.biomeSelector.baseBiome.floraGenerator)), !kB.b.isInCave(qB, WB, yB, TB) && !YB.b.is … [truncated]
+                   for (let ZB = WB + 1; ZB <= WB + UB.maxFloraHeight; ZB += this.YN) zB.startY = ZB, sB.addBiomeFloraToColumn(zB, BB, IB, qB, ZB, yB, WB)
```

#### 1010. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663)

```diff
-             return zB.getOrGenerate(BB + 1, jB, dB.e.WaterHeight) !== IB.p && zB.getOrGenerate(BB - 1, jB, dB.e.WaterHeight) !== IB.p && zB.getOrGenerate(BB, jB + 1, dB.e.WaterHeight) !== IB.p && zB.getOrGenerate(BB, jB - 1, dB.e.WaterHeight) !== IB.p
+             return ZB.getOrGenerate(BB + 1, IB, oB.f.WaterHeight) !== GB.n && ZB.getOrGenerate(BB - 1, IB, oB.f.WaterHeight) !== GB.n && ZB.getOrGenerate(BB, IB + 1, oB.f.WaterHeight) !== GB.n && ZB.getOrGenerate(BB, IB - 1, oB.f.WaterHeight) !== GB.n
```

#### 1011. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10669` → after: `L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669) · [Before (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669)

```diff
-             return zB.getOrGenerate(BB, jB, dB.e.WaterHeight) !== IB.p && 1 === zB.getOrGenerate(BB, jB, dB.e.IsLake)
+             return ZB.getOrGenerate(BB, IB, oB.f.WaterHeight) !== GB.n && 1 === ZB.getOrGenerate(BB, IB, oB.f.IsLake)
```

#### 1012. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10672` → after: `L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672)

```diff
-         var Kj = zB(39754);
+         var bI = ZB(39733);
```

#### 1013. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-             if (this.ZJ = BB, this.hashChunkContents = pB, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.YN = BB, this.hashChunkContents = hB, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 1014. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10679` → after: `L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679) · [Before (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679)

```diff
-               Cj = new mj.c("chunk columns", BB, 4e4)
+               xI = new gI.b("chunk columns", BB, 4e4)
```

#### 1015. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10681-L10682` → after: `L10681-L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682) · [Before (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682)

```diff
-             this.chunkColumnInfos = Cj.partition(), this.caveGenerator = new uB.d(nB, BB, jB, null !== (rB = null === UB || void 0 === UB ? void 0 : UB.uQ.aQ) && void 0 !== rB ? rB : "Lava");
-             const LB = new Ej(jB, nB, BB, null !== (sB = null === UB || void 0 === UB ? void 0 : UB.DQ) && void 0 !== sB ? sB : [...Mj, ...null !== (JB = null === aB || void 0 === aB ? void 0 : aB.TQ) && void 0 !== JB ? JB : []]),
+             this.chunkColumnInfos = xI.partition(), this.caveGenerator = new kB.b(JB, BB, IB, null !== (zB = null === cB || void 0 === cB ? void 0 : cB.JT.GT) && void 0 !== zB ? zB : "Lava");
+             const WB = new wI(IB, JB, BB, null !== (FB = null === cB || void 0 === cB ? void 0 : cB.YT) && void 0 !== FB ? FB : [...sI, ...null !== (NB = null === nB || void 0 === nB ? void 0 : nB.RT) && void 0 !== NB ? NB : []]),
```

#### 1016. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10684` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684)

```diff
-                 ZJ: BB,
+                 YN: BB,
```

#### 1017. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10692-L10695` → after: `L10692-L10695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695) · [Before (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695)

```diff
-               tB = null !== (mB = null === UB || void 0 === UB ? void 0 : UB.EQ) && void 0 !== mB ? mB : null,
-               SB = null !== (yB = null === aB || void 0 === aB ? void 0 : aB.buildBiomes) && void 0 !== yB ? yB : null,
-               MB = null !== tB ? (0, ij.e)(tB, gB) : null !== SB ? this.buildTerrainBiomes(SB, gB) : (0, ij.g)(gB);
-             this.biomeSelector = new ij.c(this, LB, nB, BB, jB, MB), this.treeGenerator = new sj(this, this.biomeSelector, BB, nB, jB), this.fixedPointPrefabTracker = new qB.d(NB, BB), this.prefabGenerator = new nj({
+               CB = null !== (gB = null === cB || void 0 === cB ? void 0 : cB.dT) && void 0 !== gB ? gB : null,
+               QB = null !== (qB = null === nB || void 0 === nB ? void 0 : nB.buildBiomes) && void 0 !== qB ? qB : null,
+               sB = null !== CB ? (0, OI.d)(CB, dB) : null !== QB ? this.buildTerrainBiomes(QB, dB) : (0, OI.f)(dB);
+             this.biomeSelector = new OI.c(this, WB, JB, BB, IB, sB), this.treeGenerator = new FI(this, this.biomeSelector, BB, JB, IB), this.fixedPointPrefabTracker = new YB.b(vB, BB), this.prefabGenerator = new JI({
```

#### 1018. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10697` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697)

```diff
-               ZJ: BB,
+               YN: BB,
```

#### 1019. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10701` → after: `L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701) · [Before (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701)

```diff
-                 [dB.k.SURFACE]: {
+                 [oB.n.SURFACE]: {
```

#### 1020. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10703` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703)

```diff
-                     [dB.j.MEDIUM]: {
+                     [oB.l.MEDIUM]: {
```

#### 1021. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10706` → after: `L10706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706) · [Before (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706)

```diff
-                     [dB.j.HIGH]: {
+                     [oB.l.HIGH]: {
```

#### 1022. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10709` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709)

```diff
-                     [dB.j.VERY_HIGH]: {
+                     [oB.l.VERY_HIGH]: {
```

#### 1023. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-                 [dB.k.UNDERGROUND]: {
+                 [oB.n.UNDERGROUND]: {
```

#### 1024. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10716` → after: `L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10716) · [Before (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10716)

```diff
-                     [dB.j.MEDIUM]: {
+                     [oB.l.MEDIUM]: {
```

#### 1025. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10719-L10720` → after: `L10719-L10720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720) · [Before (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720)

```diff
-                     [dB.j.HIGH]: null,
-                     [dB.j.VERY_HIGH]: null
+                     [oB.l.HIGH]: null,
+                     [oB.l.VERY_HIGH]: null
```

#### 1026. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10725` → after: `L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725)

```diff
-             }), this.noWaterHeightmapGenerator = new Kj.g((0, Kj.j)(nB)), this.heightmapPerturb = new QB.j([{
+             }), this.noWaterHeightmapGenerator = new bI.h((0, bI.j)(JB)), this.heightmapPerturb = new TB.g([{
```

#### 1027. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10734` → after: `L10734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734) · [Before (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734)

```diff
-             }], `${nB}HeightmapPerturb`);
+             }], `${JB}HeightmapPerturb`);
```

#### 1028. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10740` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740) · [Before (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740)

```diff
-             this.waterBodyGenerator = new gj(this.biomeSelector, this.noWaterHeightmapGenerator, nB, BB, EB, this.needOutsideWaterDist, IB, null === (kB = null === UB || void 0 === UB ? void 0 : UB.NQ) || void 0 === kB || kB), this.caveDecorationGenerator = new Wj(jB, BB, nB, nul … [truncated]
+             this.waterBodyGenerator = new dI(this.biomeSelector, this.noWaterHeightmapGenerator, JB, BB, wB, this.needOutsideWaterDist, GB, null === (yB = null === cB || void 0 === cB ? void 0 : cB.TT) || void 0 === yB || yB), this.caveDecorationGenerator = new uI(IB, BB, JB, nul … [truncated]
```

#### 1029. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10759` → after: `L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759) · [Before (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759)

```diff
-             const zB = this.ZJ,
+             const ZB = this.YN,
```

#### 1030. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777)

```diff
-               if ((null !== (nB = QB.get(dB.key)) && void 0 !== nB ? nB : dB) !== dB) throw new Error(`A world-gen terrain built two biomes keyed "${dB.key}"`);
+               if ((null !== (JB = TB.get(oB.key)) && void 0 !== JB ? JB : oB) !== oB) throw new Error(`A world-gen terrain built two biomes keyed "${oB.key}"`);
```

#### 1031. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10787-L10788` → after: `L10787-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788) · [Before (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788)

```diff
-               const BB = `${Math.floor(uB.x/this.ZJ)}|${Math.floor(uB.z/this.ZJ)}`,
-                 jB = null !== (IB = dB.get(BB)) && void 0 !== IB ? IB : [];
+               const BB = `${Math.floor(kB.x/this.YN)}|${Math.floor(kB.z/this.YN)}`,
+                 IB = null !== (GB = oB.get(BB)) && void 0 !== GB ? GB : [];
```

#### 1032. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10793-L10794` → after: `L10793-L10794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794) · [Before (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794)

```diff
-               const BB = Math.floor(uB[0].x / this.ZJ) * this.ZJ,
-                 jB = Math.floor(uB[0].z / this.ZJ) * this.ZJ,
+               const BB = Math.floor(kB[0].x / this.YN) * this.YN,
+                 IB = Math.floor(kB[0].z / this.YN) * this.YN,
```

#### 1033. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815)

```diff
-                   BQ: UB.prefab.name
+                   DZ: cB.prefab.name
```

#### 1034. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-               aB = QB.getOrGenerate(BB + Math.floor(this.ZJ / 2), jB + Math.floor(this.ZJ / 2))[0].biome.oreGenerator.getOreBlocksForChunk(BB, jB),
+               nB = TB.getOrGenerate(BB + Math.floor(this.YN / 2), IB + Math.floor(this.YN / 2))[0].biome.oreGenerator.getOreBlocksForChunk(BB, IB),
```

#### 1035. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10866` → after: `L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866)

```diff
-             return QB.q.create(this.ZJ, [BB, jB], this.biomeSelector)
+             return TB.p.create(this.YN, [BB, IB], this.biomeSelector)
```

#### 1036. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10870` → after: `L10870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10870) · [Before (L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10870)

```diff
-             return QB.o.create(this.ZJ, [BB, jB], dB.e.NumFields, IB)
+             return TB.o.create(this.YN, [BB, IB], oB.f.NumFields, GB)
```

#### 1037. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874)

```diff
-       39761: (BB, jB, zB) => {
+       39735: (BB, IB, ZB) => {
```

#### 1038. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10876` → after: `L10876-L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10876-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876-L10877) · [Before (L10876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876)

```diff
-           d: () => TB,
+           b: () => LB,
+           e: () => OB,
```

#### 1039. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10878-L10880` → after: `L10879-L10880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10879-L10880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10879-L10880) · [Before (L10878-L10880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10878-L10880)

```diff
-           j: () => MB,
-           m: () => EB,
-           n: () => DB,
+           i: () => wB,
+           k: () => HB,
```

#### 1040. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10882-L10887` → after: `L10882-L10885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10882-L10885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10882-L10885) · [Before (L10882-L10887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10882-L10887)

```diff
-           q: () => HB,
-           t: () => gB,
-           u: () => LB,
-           x: () => SB,
-           A: () => mB,
-           B: () => tB,
+           p: () => aB,
+           s: () => dB,
+           w: () => WB,
+           z: () => QB,
```

#### 1041. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10889` → after: `L10887-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10887-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10887-L10889) · [Before (L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10889)

```diff
-           H: () => kB
+           G: () => CB,
+           I: () => UB,
+           L: () => yB
```

#### 1042. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10891` → after: `L10891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891) · [Before (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10891)

```diff
-         var QB = zB(2944),
+         var TB = ZB(3e3),
```

#### 1043. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11113` → after: `L11113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113) · [Before (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113)

```diff
-         var JB = zB(39763);
+         var NB = ZB(39743);
```

#### 1044. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11142` → after: `L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142) · [Before (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142)

```diff
-             bI: GB(BB, dB, IB),
+             uG: UB(BB, oB, GB),
```

#### 1045. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11173` → after: `L11173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173) · [Before (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173)

```diff
-             for (let zB = 0; zB < BB.length; zB++) this._simplexes.push(new sB(`${jB}${zB}`))
+             for (let ZB = 0; ZB < BB.length; ZB++) this._simplexes.push(new FB(`${IB}${ZB}`))
```

#### 1046. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11198` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198)

```diff
-             for (let nB = 0; nB < BB.length; nB++) this._simplexes.push(new sB(`${zB}${nB}`));
+             for (let JB = 0; JB < BB.length; JB++) this._simplexes.push(new FB(`${ZB}${JB}`));
```

#### 1047. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11206` → after: `L11206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11206) · [Before (L11206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11206)

```diff
-               if (zB - this.remainingAmplitudes[QB] > this.threshold.high || zB + this.remainingAmplitudes[QB] < this.threshold.low) return JB.c;
+               if (ZB - this.remainingAmplitudes[TB] > this.threshold.high || ZB + this.remainingAmplitudes[TB] < this.threshold.low) return NB.d;
```

#### 1048. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11334` → after: `L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334)

```diff
-             if (void 0 === QB) throw new Error(`Number not found for x=${BB}, z=${jB}, thirdIndex=${zB}`);
+             if (void 0 === TB) throw new Error(`Number not found for x=${BB}, z=${IB}, thirdIndex=${ZB}`);
```

#### 1049. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383)

```diff
-             if (void 0 === nB) throw new Error(`Number not found for x=${BB}, z=${jB}, thirdIndex=${zB}, fourthIndex=${QB}`);
+             if (void 0 === JB) throw new Error(`Number not found for x=${BB}, z=${IB}, thirdIndex=${ZB}, fourthIndex=${TB}`);
```

#### 1050. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413` → after: `L11413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413)

```diff
-       39763: (BB, jB, zB) => {
+       39743: (BB, IB, ZB) => {
```

#### 1051. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11419-L11420` → after: `L11420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11420) · [Before (L11419-L11420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11419-L11420)

```diff
-           l: () => NB,
-           p: () => nB,
+           n: () => JB,
```

#### 1052. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       39767: (BB, jB, zB) => {
+       39748: (BB, IB, ZB) => {
```

#### 1053. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11437-L11438` → after: `L11437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11437) · [Before (L11437-L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11437-L11438)

```diff
-           e: () => QB,
-           g: () => uB,
+           f: () => TB,
```

#### 1054. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11440-L11441` → after: `L11439-L11441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11439-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11439-L11441) · [Before (L11440-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11440-L11441)

```diff
-           k: () => IB,
-           n: () => dB
+           l: () => vB,
+           n: () => GB,
+           q: () => oB
```

#### 1055. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11460` → after: `L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460)

```diff
-       4347: (BB, jB, zB) => {
+       4428: (BB, IB, ZB) => {
```

#### 1056. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11467` → after: `L11466-L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11466-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11466-L11467) · [Before (L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11467)

```diff
-           p: () => nB
+           o: () => GB,
+           s: () => JB
```

#### 1057. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, BB > jB) throw new Error(`Min must be less than or equal to Max, but Min=${BB} and Max=${jB}`);
+             if (this.offset = void 0, this.multiplier = void 0, BB > IB) throw new Error(`Min must be less than or equal to Max, but Min=${BB} and Max=${IB}`);
```

#### 1058. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new IB(BB, jB, zB), !Number.isInteger(BB) || !Number.isInteger(jB)) throw new Error(`Min and Max must be integers, but Min=${BB} and Max=${jB}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new GB(BB, IB, ZB), !Number.isInteger(BB) || !Number.isInteger(IB)) throw new Error(`Min and Max must be integers, but Min=${BB} and Max=${IB}`)
```

#### 1059. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11552` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552)

```diff
-       658: (BB, jB, zB) => {
+       665: (BB, IB, ZB) => {
```

#### 1060. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11556-L11557` → after: `L11555-L11558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11555-L11558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11555-L11558) · [Before (L11556-L11557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11556-L11557)

```diff
-           I: () => uB,
-           P: () => pB,
+           F: () => FB,
+           G: () => NB,
+           L: () => kB,
+           T: () => hB,
```

#### 1061. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11565` → after: `L11565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565)

```diff
-         var QB = zB(667);
+         var TB = ZB(671);
```

#### 1062. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11603` → after: `L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603) · [Before (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603)

```diff
-       667: (BB, jB, zB) => {
+       671: (BB, IB, ZB) => {
```

#### 1063. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11609` → after: `L11609-L11613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11609-L11613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609-L11613) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609)

```diff
-       242: BB => {
+       226: (BB, IB, ZB) => {
+         var TB = {
+           "./localConfigValues.ts.clientRelease": 229
+         };
+ 
```

#### 1064. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11611-L11612` → after: `L11615-L11624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11615-L11624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11615-L11624) · [Before (L11611-L11612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11611-L11612)

```diff
-           var jB = new Error("Cannot find module '" + BB + "'");
-           throw jB.code = "MODULE_NOT_FOUND", jB
+           var IB = oB(BB);
+           return ZB(IB)
+         }
+ 
+         function oB(BB) {
+           if (!ZB.o(TB, BB)) {
+             var IB = new Error("Cannot find module '" + BB + "'");
+             throw IB.code = "MODULE_NOT_FOUND", IB
+           }
+           return TB[BB]
```

#### 1065. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11614` → after: `L11626-L11631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11626-L11631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11626-L11631) · [Before (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11614)

```diff
-         jB.keys = () => [], jB.resolve = jB, jB.id = 242, BB.exports = jB
+         JB.keys = function() {
+           return Object.keys(TB)
+         }, JB.resolve = oB, BB.exports = JB, JB.id = 226
+       },
+       229: (BB, IB, ZB) => {
+         BB.exports = ZB.p + "static/media/localConfigValues.ts.3f6ee800434514cb12b7.clientRelease"
```

#### 1066. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11637-L11642` → after: `L11654-L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11654-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11654-L11659) · [Before (L11637-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11637-L11642)

```diff
-   }, zB.f = {}, zB.e = BB => Promise.all(Object.keys(zB.f).reduce(((jB, QB) => (zB.f[QB](BB, jB), jB)), [])), zB.u = BB => "static/js/7zvlu." + (70 === BB ? "worldgenTables" : BB) + "." + {
-     70: "6215f7b5",
-     73: "f6efa6e2",
-     74: "09ae43b3",
-     75: "78f14b51",
-     76: "06f268a0"
+   }, ZB.f = {}, ZB.e = BB => Promise.all(Object.keys(ZB.f).reduce(((IB, TB) => (ZB.f[TB](BB, IB), IB)), [])), ZB.u = BB => "static/js/c6gaap." + (70 === BB ? "worldgenTables" : BB) + "." + {
+     70: "7db9aff8",
+     73: "88de4410",
+     74: "e5341fc9",
+     75: "11a2d261",
+     76: "a53e3038"
```

#### 1067. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11717` → after: `L11734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11734) · [Before (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11717)

```diff
-       zB = jB < 0 ? this.length + jB : jB;
+       ZB = IB < 0 ? this.length + IB : IB;
```

#### 1068. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11732-L11734` → after: `L11749-L11751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11749-L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11749-L11751) · [Before (L11732-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11732-L11734)

```diff
-     Vy: () => AB,
-     hy: () => TB,
-     np: () => PB,
+     wq: () => XB,
+     Oq: () => LB,
+     hh: () => eB,
```

#### 1069. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11737-L11747` → after: `L11754-L11764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11754-L11764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11754-L11764) · [Before (L11737-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11737-L11747)

```diff
-     dp: () => WB,
-     Ip: () => eB,
-     Np: () => lB,
-     Up: () => wB,
-     ap: () => xB,
-     rp: () => KB,
-     sp: () => CB,
-     Jp: () => cB,
-     Gp: () => bB,
-     tp: () => vB,
-     Sp: () => RB
+     zh: () => uB,
+     Fh: () => fB,
+     Nh: () => lB,
+     gh: () => AB,
+     qh: () => tB,
+     yh: () => bB,
+     Uh: () => xB,
+     Wh: () => EB,
+     sh: () => DB,
+     Yh: () => KB,
+     ih: () => VB
```

#### 1070. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11754` → after: `L11771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11771) · [Before (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11754)

```diff
-   var UB = zB(2944),
+   var cB = ZB(3e3),
```

#### 1071. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11789` → after: `L11806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11806) · [Before (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11789)

```diff
-     return null === mB ? "not failed" : `${mB}: ${(BB=yB)instanceof Error?`${BB.name}: ${BB.message}`:String(BB)}`;
+     return null === gB ? "not failed" : `${gB}: ${(BB=qB)instanceof Error?`${BB.name}: ${BB.message}`:String(BB)}`;
```

#### 1072. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11794` → after: `L11811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11811) · [Before (L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11794)

```diff
-     if (!iB()) throw new Error(`Bloxd wasm is not ready (${qB()}): check isBloxdWasmReady() first`);
+     if (!OB()) throw new Error(`Bloxd wasm is not ready (${YB()}): check isBloxdWasmReady() first`);
```

#### 1073. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11832` → after: `L11849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11849) · [Before (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11832)

```diff
-       Gp: nB
+       sh: JB
```

#### 1074. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11853` → after: `L11870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11870) · [Before (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11853)

```diff
-     JB = "failed", mB = jB, yB = BB, console.error(`Bloxd wasm failed (${jB}):`, BB);
+     NB = "failed", gB = IB, qB = BB, console.error(`Bloxd wasm failed (${IB}):`, BB);
```

#### 1075. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11872-L11873` → after: `L11889-L11890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11889-L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11889-L11890) · [Before (L11872-L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11872-L11873)

```diff
-       reserveUpFront: jB => BB().Up(jB),
-       reserveAhead: jB => BB().Np(jB),
+       reserveUpFront: IB => BB().gh(IB),
+       reserveAhead: IB => BB().Nh(IB),
```

#### 1076. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11875` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11892) · [Before (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11875)

```diff
-         BB().ap(jB)
+         BB().qh(IB)
```

#### 1077. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11877` → after: `L11894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11894) · [Before (L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11877)

```diff
-       lowWater: () => XB[BB().Ip()] ?? "none",
+       lowWater: () => rB[BB().Fh()] ?? "none",
```

#### 1078. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11900-L11902` → after: `L11917-L11919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11917-L11919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11917-L11919) · [Before (L11900-L11902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11900-L11902)

```diff
-       }(BB().rp()),
-       takeBallast: () => BB().sp(),
-       takePressure: () => BB().Jp()
+       }(BB().yh()),
+       takeBallast: () => BB().Uh(),
+       takePressure: () => BB().Wh()
```

#### 1079. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11912` → after: `L11929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11929) · [Before (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11912)

```diff
-       kj.yu8E(BB, 0)
+       yI.z3SC(BB, 0)
```

#### 1080. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11915` → after: `L11932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11932) · [Before (L11915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11915)

```diff
-       const jB = Uj(BB, kj.cZKH, kj.vAdm),
+       const IB = cI(BB, yI.V6c3, yI.WG58),
```

#### 1081. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11917` → after: `L11934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11934) · [Before (L11917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11917)

```diff
-       kj.gAZP(this.__wbg_ptr, jB, zB)
+       yI.OI3u(this.__wbg_ptr, IB, ZB)
```

#### 1082. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11920` → after: `L11937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11937) · [Before (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11920)

```diff
-       return kj.VskC(this.__wbg_ptr) >>> 0
+       return yI.gNZ7(this.__wbg_ptr) >>> 0
```

#### 1083. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11923` → after: `L11940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11940) · [Before (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11923)

```diff
-       const BB = kj.eCg4();
+       const BB = yI.wMP4();
```

#### 1084. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11927` → after: `L11944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944) · [Before (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11927)

```diff
-       return kj.Lj1u(this.__wbg_ptr) >>> 0
+       return yI.FNCf(this.__wbg_ptr) >>> 0
```

#### 1085. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11930` → after: `L11947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11947) · [Before (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11930)

```diff
-       return kj.zUoh(this.__wbg_ptr) >>> 0
+       return yI.hBFX(this.__wbg_ptr) >>> 0
```

#### 1086. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11933` → after: `L11950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11950) · [Before (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11933)

```diff
-       return kj.w68f(this.__wbg_ptr) >>> 0
+       return yI.PLo0(this.__wbg_ptr) >>> 0
```

#### 1087. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11944` → after: `L11961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11961) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944)

```diff
-       kj.o9s1(BB, 0)
+       yI.xr70(BB, 0)
```

#### 1088. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11947` → after: `L11964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964) · [Before (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11947)

```diff
-       return kj.bbix(this.__wbg_ptr, BB) >>> 0
+       return yI.kgjm(this.__wbg_ptr, BB) >>> 0
```

#### 1089. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11950` → after: `L11967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11967) · [Before (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11950)

```diff
-       return kj.w8co(this.__wbg_ptr, BB) >>> 0
+       return yI.Bb1K(this.__wbg_ptr, BB) >>> 0
```

#### 1090. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11953` → after: `L11970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11970) · [Before (L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11953)

```diff
-       const jB = kj.fQV6(void 0 === (zB = BB) || null === zB ? Number.MAX_SAFE_INTEGER : BB >>> 0);
+       const IB = yI.nTsX(void 0 === (ZB = BB) || null === ZB ? Number.MAX_SAFE_INTEGER : BB >>> 0);
```

#### 1091. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11958` → after: `L11975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11975) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11958)

```diff
-       return kj.PWVN(this.__wbg_ptr) >>> 0
+       return yI.DtfV(this.__wbg_ptr) >>> 0
```

#### 1092. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11961` → after: `L11978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11978) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11961)

```diff
-       return kj.RNTp(this.__wbg_ptr) >>> 0
+       return yI.p7qr(this.__wbg_ptr) >>> 0
```

#### 1093. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11964` → after: `L11981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11981) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964)

```diff
-       return kj.zhaO(this.__wbg_ptr, BB) >>> 0
+       return yI.KMgA(this.__wbg_ptr, BB) >>> 0
```

#### 1094. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11969` → after: `L11986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11986) · [Before (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11969)

```diff
-     const zB = Uj(BB, kj.cZKH, kj.vAdm),
+     const ZB = cI(BB, yI.V6c3, yI.WG58),
```

#### 1095. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11971` → after: `L11988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988) · [Before (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11971)

```diff
-       nB = kj.QXgt(zB, QB, jB);
+       JB = yI.umFq(ZB, TB, IB);
```

#### 1096. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11976` → after: `L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11993) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11976)

```diff
-     kj.XauC()
+     yI.UYZi()
```

#### 1097. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11980` → after: `L11997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11997) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11980)

```diff
-     return kj.NmUN() >>> 0
+     return yI.b05x() >>> 0
```

#### 1098. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11984` → after: `L12001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12001) · [Before (L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11984)

```diff
-     return 0 !== kj.AkIf(BB)
+     return 0 !== yI.ua2M(BB)
```

#### 1099. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11988` → after: `L12005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12005) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11988)

```diff
-     return 0 !== kj.gbku(BB)
+     return 0 !== yI.Lffr(BB)
```

#### 1100. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11992` → after: `L12009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12009) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11992)

```diff
-     kj.AgvF(BB)
+     yI.WhJq(BB)
```

#### 1101. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11996` → after: `L12013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12013) · [Before (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11996)

```diff
-     return kj.oiEt() >>> 0
+     return yI.BSgQ() >>> 0
```

#### 1102. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12000` → after: `L12017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12017) · [Before (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12000)

```diff
-     return kj.sTGY() >>> 0
+     return yI.fSAW() >>> 0
```

#### 1103. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12004` → after: `L12021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12021) · [Before (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12004)

```diff
-     return 0 !== kj.LofI()
+     return 0 !== yI.B4aP()
```

#### 1104. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12008` → after: `L12025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12025) · [Before (L12008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12008)

```diff
-     return kj.IdQe() >>> 0
+     return yI.Njl3() >>> 0
```

#### 1105. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12014` → after: `L12031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12031) · [Before (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12014)

```diff
-       const zB = kj.XHJU();
+       const ZB = yI.aqPz();
```

#### 1106. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12017` → after: `L12034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12034) · [Before (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12017)

```diff
-       kj.NPZ1(BB, jB, 1)
+       yI.hbr7(BB, IB, 1)
```

#### 1107. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12022` → after: `L12039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12039) · [Before (L12022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12022)

```diff
-     kj.OEkB(zj(BB))
+     yI.JlIn(ZI(BB))
```

#### 1108. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12028` → after: `L12045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12045) · [Before (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12028)

```diff
-       gYQX: {
+       DSeT: {
```

#### 1109. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12030` → after: `L12047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12047) · [Before (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12030)

```diff
-         y9z7: function(BB, jB) {
+         nod0: function(BB, IB) {
```

#### 1110. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12033` → after: `L12050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12050) · [Before (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12033)

```diff
-         YldF: function(BB, jB) {
+         Awie: function(BB, IB) {
```

#### 1111. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12036` → after: `L12053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12053) · [Before (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12036)

```diff
-         mpaE: function(BB) {
+         IfKd: function(BB) {
```

#### 1112. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12039` → after: `L12056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12056) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12039)

```diff
-         v7zM: function(BB, jB) {
+         tNXS: function(BB, IB) {
```

#### 1113. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12042` → after: `L12059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12059) · [Before (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12042)

```diff
-         vhbm: function(BB) {
+         YvVE: function(BB) {
```

#### 1114. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12052` → after: `L12069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12069) · [Before (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12052)

```diff
-     } : new FinalizationRegistry((BB => kj.yu8E(BB, 1))),
+     } : new FinalizationRegistry((BB => yI.z3SC(BB, 1))),
```

#### 1115. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12056` → after: `L12073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12073) · [Before (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12056)

```diff
-     } : new FinalizationRegistry((BB => kj.o9s1(BB, 1)));
+     } : new FinalizationRegistry((BB => yI.xr70(BB, 1)));
```

#### 1116. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12133` → after: `L12150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12150) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12133)

```diff
-     return yj = BB, kj = BB.exports, mj = jB, nj = null, kj.EF23(), kj
+     return qI = BB, yI = BB.exports, gI = IB, JI = null, yI.D4Jq(), yI
```

#### 1117. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12187-L12188` → after: `L12204-L12205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12204-L12205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12204-L12205) · [Before (L12187-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12187-L12188)

```diff
-       if (!iB()) throw new Error(`Bloxd wasm is not ready (${qB()}): check isBloxdWasmReady() first`);
-       if (gB !== BB) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${jB}`)
+       if (!OB()) throw new Error(`Bloxd wasm is not ready (${YB()}): check isBloxdWasmReady() first`);
+       if (dB !== BB) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${IB}`)
```

#### 1118. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12191` → after: `L12208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12208) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12191)

```diff
-   var Mj = zB(658);
+   var sI = ZB(665);
```

#### 1119. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12198` → after: `L12215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12215) · [Before (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12198)

```diff
-       } = zB(39871), sB = function(BB, jB, zB) {
+       } = ZB(39852), FB = function(BB, IB, ZB) {
```

#### 1120. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12200` → after: `L12217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12217) · [Before (L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12200)

```diff
-         for (const NB of BB.TQ) Dj(NB, zB);
+         for (const vB of BB.RT) HI(vB, ZB);
```

#### 1121. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12203` → after: `L12220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12220) · [Before (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12203)

```diff
-           TQ: BB.TQ,
+           RT: BB.RT,
```

#### 1122. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12209` → after: `L12226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12226) · [Before (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12209)

```diff
-           throw new Error(`Custom world-gen terrain "${QB.name}" is not in this generator's catalogue (${BB.length>0?BB.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${TB.name}" is not in this generator's catalogue (${BB.length>0?BB.join(", "):"empty"})`)
```

#### 1123. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12214` → after: `L12231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12231) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12214)

```diff
-               if (null !== BB.AQ) throw new Error(`Custom world-gen terrain "${BB.name}" takes no options`);
+               if (null !== BB.PT) throw new Error(`Custom world-gen terrain "${BB.name}" takes no options`);
```

#### 1124. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12218-L12219` → after: `L12235-L12236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12235-L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12235-L12236) · [Before (L12218-L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12218-L12219)

```diff
-             if (null !== BB.AQ) try {
-               zB = JSON.parse(BB.AQ)
+             if (null !== BB.PT) try {
+               ZB = JSON.parse(BB.PT)
```

#### 1125. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12221` → after: `L12238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12238) · [Before (L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12221)

```diff
-               throw new Error(`Custom world-gen terrain "${BB.name}" has invalid optionsJson: ${String(QB)}`, {
+               throw new Error(`Custom world-gen terrain "${BB.name}" has invalid optionsJson: ${String(TB)}`, {
```

#### 1126. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12228` → after: `L12245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12245) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12228)

```diff
-           TQ: BB.TQ,
+           RT: BB.RT,
```

#### 1127. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12231` → after: `L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12248) · [Before (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12231)

```diff
-       }(null !== (aB = null === NB || void 0 === NB ? void 0 : NB.hQ) && void 0 !== aB ? aB : null, uB, jB);
+       }(null !== (nB = null === vB || void 0 === vB ? void 0 : vB.HT) && void 0 !== nB ? nB : null, kB, IB);
```

#### 1128. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12233` → after: `L12250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12250) · [Before (L12233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12233)

```diff
-       const JB = null !== (pB = null === NB || void 0 === NB ? void 0 : NB.layers) && void 0 !== pB ? pB : [];
+       const NB = null !== (hB = null === vB || void 0 === vB ? void 0 : vB.layers) && void 0 !== hB ? hB : [];
```

#### 1129. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12236` → after: `L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12253) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12236)

```diff
-         const zB = [...BB].sort(((BB, jB) => BB.nQ - jB.nQ));
+         const ZB = [...BB].sort(((BB, IB) => BB.BT - IB.BT));
```

#### 1130. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12238` → after: `L12255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12255) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12238)

```diff
-           if (zB[QB].nQ < zB[QB - 1].dQ) throw new Error(`Custom world-gen layers overlap: [${zB[QB-1].nQ}, ${zB[QB-1].dQ}) and [${zB[QB].nQ}, ${zB[QB].dQ})`)
+           if (ZB[TB].BT < ZB[TB - 1].IT) throw new Error(`Custom world-gen layers overlap: [${ZB[TB-1].BT}, ${ZB[TB-1].IT}) and [${ZB[TB].BT}, ${ZB[TB].IT})`)
```

#### 1131. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12250` → after: `L12267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12267) · [Before (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12250)

```diff
-         if (zB >= nB.nQ && zB < nB.dQ) return dB.getChunk(BB, jB, zB - nB.IQ, QB);
+         if (ZB >= JB.BT && ZB < JB.IT) return oB.getChunk(BB, IB, ZB - JB.ZT, TB);
```

#### 1132. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12268-L12269` → after: `L12285-L12286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12285-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12285-L12286) · [Before (L12268-L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12268-L12269)

```diff
-     if (BB.nQ >= BB.dQ) throw new Error(`Custom world-gen layer has minY (${BB.nQ}) >= maxY (${BB.dQ})`);
-     if (BB.nQ % Mj.y !== 0 || BB.dQ % Mj.y !== 0 || BB.IQ % Mj.y !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${Mj.y}); got minY=${BB.nQ}, maxY=${BB.dQ}, groundY=${BB.IQ}`);
+     if (BB.BT >= BB.IT) throw new Error(`Custom world-gen layer has minY (${BB.BT}) >= maxY (${BB.IT})`);
+     if (BB.BT % sI.C !== 0 || BB.IT % sI.C !== 0 || BB.ZT % sI.C !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${sI.C}); got minY=${BB.BT}, maxY=${BB.IT}, groundY=${BB.ZT}`);
```

#### 1133. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12271-L12274` → after: `L12288-L12291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12288-L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12288-L12291) · [Before (L12271-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12271-L12274)

```diff
-         if (void 0 === (0, Mj.C)(BB.aQ, jB)) throw new Error(`Custom world-gen caves lavaPitBlock "${BB.aQ}" not found in blockMetadata`);
-         if (BB.pQ)
-           for (const zB of BB.pQ) qj(zB, jB)
-       }(BB.uQ, jB), 0 === BB.EQ.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, sI.G)(BB.GT, IB)) throw new Error(`Custom world-gen caves lavaPitBlock "${BB.GT}" not found in blockMetadata`);
+         if (BB.vT)
+           for (const ZB of BB.vT) YI(ZB, IB)
+       }(BB.JT, IB), 0 === BB.dT.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1134. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12276` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12293) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12276)

```diff
-     for (const QB of BB.EQ) Hj(QB, jB), zB += QB.frequency;
+     for (const TB of BB.dT) aI(TB, IB), ZB += TB.frequency;
```

#### 1135. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12278` → after: `L12295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12295) · [Before (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12278)

```diff
-     for (const QB of BB.DQ) Dj(QB, jB)
+     for (const TB of BB.YT) HI(TB, IB)
```

#### 1136. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12284-L12286` → after: `L12301-L12303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12301-L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12301-L12303) · [Before (L12284-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12284-L12286)

```diff
-       sQ: QB,
-       JQ: nB,
-       mQ: dB
+       cT: TB,
+       nT: JB,
+       hT: oB
```

#### 1137. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12288-L12289` → after: `L12305-L12306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12305-L12306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12305-L12306) · [Before (L12288-L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12288-L12289)

```diff
-     if (void 0 === (0, Mj.C)(zB, jB)) throw new Error(`Custom world-gen cave decoration blockName "${zB}" not found in blockMetadata`);
-     if (!QB && !nB && !dB) throw new Error(`Custom world-gen cave decoration "${zB}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, sI.G)(ZB, IB)) throw new Error(`Custom world-gen cave decoration blockName "${ZB}" not found in blockMetadata`);
+     if (!TB && !JB && !oB) throw new Error(`Custom world-gen cave decoration "${ZB}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1138. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12292-L12293` → after: `L12309-L12310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12309-L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12309-L12310) · [Before (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12292-L12293)

```diff
-     if (dB && fj(zB, "meta|rot1|top", jB), oj(BB.yQ, zB, "yQ"), oj(BB.kQ, zB, "kQ"), !Number.isInteger(BB.GQ) || BB.GQ < 0) throw new Error(`Custom world-gen cave decoration "${zB}" minPlacements must be a non-negative integer, got ${BB.GQ}`);
-     if (!(0, Mj.I)(BB.LQ) && (oj(BB.LQ.tQ, zB, "depthRamp.deepClusterChance"), BB.LQ.SQ <= BB.LQ.MQ)) throw new Error(`Custom world-gen cave decoration "${zB}" deepY must be strictly smaller than shallowY, but ${BB.LQ.SQ} <= ${BB.LQ.MQ} `)
+     if (oB && iI(ZB, "meta|rot1|top", IB), pI(BB.zT, ZB, "zT"), pI(BB.FT, ZB, "FT"), !Number.isInteger(BB.NT) || BB.NT < 0) throw new Error(`Custom world-gen cave decoration "${ZB}" minPlacements must be a non-negative integer, got ${BB.NT}`);
+     if (!(0, sI.L)(BB.gT) && (pI(BB.gT.yT, ZB, "depthRamp.deepClusterChance"), BB.gT.UT <= BB.gT.WT)) throw new Error(`Custom world-gen cave decoration "${ZB}" deepY must be strictly smaller than shallowY, but ${BB.gT.UT} <= ${BB.gT.WT} `)
```

#### 1139. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12297-L12298` → after: `L12314-L12315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12314-L12315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12314-L12315) · [Before (L12297-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12297-L12298)

```diff
-     const QB = `${BB}|${jB}`;
-     if (void 0 === (0, Mj.C)(QB, zB)) throw new Error(`Custom world-gen cave decoration "${BB}" is missing directional variant "${QB}" required for wall/ceiling anchoring`)
+     const TB = `${BB}|${IB}`;
+     if (void 0 === (0, sI.G)(TB, ZB)) throw new Error(`Custom world-gen cave decoration "${BB}" is missing directional variant "${TB}" required for wall/ceiling anchoring`)
```

#### 1140. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12302` → after: `L12319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12319) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12302)

```diff
-     if (BB < 0 || BB > 1) throw new Error(`Custom world-gen cave decoration "${jB}" ${zB} must be in [0, 1], got ${BB}`)
+     if (BB < 0 || BB > 1) throw new Error(`Custom world-gen cave decoration "${IB}" ${ZB} must be in [0, 1], got ${BB}`)
```

#### 1141. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12307-L12312` → after: `L12324-L12329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12324-L12329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12324-L12329) · [Before (L12307-L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12307-L12312)

```diff
-     if (void 0 === (0, Mj.C)(BB.qQ, jB)) throw new Error(`Custom world-gen biome topsoilBlock "${BB.qQ}" not found in blockMetadata`);
-     if (void 0 === (0, Mj.C)(BB.fQ, jB)) throw new Error(`Custom world-gen biome lowsoilBlock "${BB.fQ}" not found in blockMetadata`);
-     if (0 === BB.oQ.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const zB of BB.oQ) {
-       if (zB.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${zB.frequency}`);
-       if (void 0 === (0, Mj.C)(zB.blockName, jB)) throw new Error(`Custom world-gen biome stoneType blockName "${zB.blockName}" not found in blockMetadata`)
+     if (void 0 === (0, sI.G)(BB.QT, IB)) throw new Error(`Custom world-gen biome topsoilBlock "${BB.QT}" not found in blockMetadata`);
+     if (void 0 === (0, sI.G)(BB.sT, IB)) throw new Error(`Custom world-gen biome lowsoilBlock "${BB.sT}" not found in blockMetadata`);
+     if (0 === BB.wT.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const ZB of BB.wT) {
+       if (ZB.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${ZB.frequency}`);
+       if (void 0 === (0, sI.G)(ZB.blockName, IB)) throw new Error(`Custom world-gen biome stoneType blockName "${ZB.blockName}" not found in blockMetadata`)
```

#### 1142. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12317` → after: `L12334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12334) · [Before (L12317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12317)

```diff
-     if (void 0 === (0, Mj.C)(BB.blockName, jB)) throw new Error(`Custom world-gen ore blockName "${BB.blockName}" not found in blockMetadata`);
+     if (void 0 === (0, sI.G)(BB.blockName, IB)) throw new Error(`Custom world-gen ore blockName "${BB.blockName}" not found in blockMetadata`);
```

#### 1143. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12319-L12321` → after: `L12336-L12338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12336-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12336-L12338) · [Before (L12319-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12319-L12321)

```diff
-     if (BB.YQ <= 0) throw new Error(`Custom world-gen ore "${BB.blockName}" minDistBetweenDeposits must be > 0, got ${BB.YQ}`);
-     if (BB.nQ > BB.dQ) throw new Error(`Custom world-gen ore "${BB.blockName}" minY (${BB.nQ}) must be <= maxY (${BB.dQ})`);
-     if (BB.VQ < 0 || BB.VQ > 1) throw new Error(`Custom world-gen ore "${BB.blockName}" spawnChance must be in [0, 1], got ${BB.VQ}`)
+     if (BB.pT <= 0) throw new Error(`Custom world-gen ore "${BB.blockName}" minDistBetweenDeposits must be > 0, got ${BB.pT}`);
+     if (BB.BT > BB.IT) throw new Error(`Custom world-gen ore "${BB.blockName}" minY (${BB.BT}) must be <= maxY (${BB.IT})`);
+     if (BB.aT < 0 || BB.aT > 1) throw new Error(`Custom world-gen ore "${BB.blockName}" spawnChance must be in [0, 1], got ${BB.aT}`)
```

#### 1144. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12327-L12330` → after: `L12344-L12347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12344-L12347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12344-L12347) · [Before (L12327-L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12327-L12330)

```diff
-       YQ: 10,
-       nQ: -98,
-       dQ: -78,
-       VQ: .4
+       pT: 10,
+       BT: -98,
+       IT: -78,
+       aT: .4
```

#### 1145. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12335-L12338` → after: `L12352-L12355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12352-L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12352-L12355) · [Before (L12335-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12335-L12338)

```diff
-       YQ: 6,
-       nQ: -40,
-       dQ: 20,
-       VQ: .6
+       pT: 6,
+       BT: -40,
+       IT: 20,
+       aT: .6
```

#### 1146. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12342-L12345` → after: `L12359-L12362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12359-L12362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12359-L12362) · [Before (L12342-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12342-L12345)

```diff
-       YQ: 10,
-       nQ: -75,
-       dQ: -55,
-       VQ: .4
+       pT: 10,
+       BT: -75,
+       IT: -55,
+       aT: .4
```

#### 1147. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12349` → after: `L12366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12366) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12349)

```diff
-       AQ: null
+       PT: null
```

#### 1148. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12352` → after: `L12369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12369) · [Before (L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12352)

```diff
-     [Fj]: () => zB(39750).c
+     [MI]: () => ZB(39731).b
```

#### 1149. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12377` → after: `L12394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12394) · [Before (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12377)

```diff
-       if (!Kj.includes(jB)) throw new Error(`Invalid port offset "${BB}". Must be one of: ${Kj.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!bI.includes(IB)) throw new Error(`Invalid port offset "${BB}". Must be one of: ${bI.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1150. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12455` → after: `L12472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12472) · [Before (L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12455)

```diff
-     const jB = lj() ? vj : Rj;
+     const IB = lI() ? KI : VI;
```

#### 1151. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12896` → after: `L12913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12913) · [Before (L12896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12896)

```diff
-     const BB = Promise.all([zB.e(73), zB.e(76), zB.e(75), zB.e(74), zB.e(70)]).then((() => zB(39856))).then((BB => {
+     const BB = Promise.all([ZB.e(73), ZB.e(76), ZB.e(75), ZB.e(74), ZB.e(70)]).then((() => ZB(39842))).then((BB => {
```

#### 1152. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12939` → after: `L12956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12956) · [Before (L12939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12939)

```diff
-               reason: `its memory stats trapped (${String(jB)})`
+               reason: `its memory stats trapped (${String(IB)})`
```

#### 1153. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12945` → after: `L12962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12962) · [Before (L12945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12945)

```diff
-               const zB = uB.Xy();
+               const ZB = kB.Yq();
```

#### 1154. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12948` → after: `L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12965) · [Before (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12948)

```diff
-                 return String.fromCharCode(...new Uint8Array(HB().buffer, BB.Zy(), 32))
+                 return String.fromCharCode(...new Uint8Array(aB().buffer, BB.iq(), 32))
```

#### 1155. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12961` → after: `L12978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12978) · [Before (L12961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12961)

```diff
-               IB = yB.ZJ, pB = new Uint16Array(IB * IB * IB),
+               GB = qB.YN, hB = new Uint16Array(GB * GB * GB),
```

#### 1156. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12970` → after: `L12987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12987) · [Before (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12970)

```diff
-                           reason: `the memory ceiling was not set (${String(QB)})`
+                           reason: `the memory ceiling was not set (${String(TB)})`
```

#### 1157. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12974` → after: `L12991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12991) · [Before (L12974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12974)

```diff
-                         uB = new(Sj().Vy)
+                         kB = new(QI().wq)
```

#### 1158. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12978` → after: `L12995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12995) · [Before (L12978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12978)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(QB)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(TB)})`
```

#### 1159. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12988` → after: `L13005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13005) · [Before (L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12988)

```diff
-                           reason: `the block and item tables did not load (${String(jB)})`
+                           reason: `the block and item tables did not load (${String(IB)})`
```

#### 1160. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12993` → after: `L13010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13010) · [Before (L12993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12993)

```diff
-                       reason: `wasm did not start (${fB()})`
+                       reason: `wasm did not start (${iB()})`
```

#### 1161. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12997` → after: `L13014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13014) · [Before (L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12997)

```diff
-                     reason: `chunk size ${IB} is not the encoder's 32`
+                     reason: `chunk size ${GB} is not the encoder's 32`
```

#### 1162. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13008` → after: `L13025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13025) · [Before (L13008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13008)

```diff
-                 UB = new Ej(IB, NB.blockMetadata, NB.itemMetadata, BB.Rz, !1, BB.Oz, BB.jQ, QB, mB)
+                 cB = new wI(GB, vB.blockMetadata, vB.itemMetadata, BB.xZ, !1, BB.EZ, BB.KZ, TB, gB)
```

#### 1163. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13033` → after: `L13050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13050) · [Before (L13033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13033)

```diff
-                     const zB = BB.Ay(),
+                     const ZB = BB.pq(),
```

#### 1164. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13035` → after: `L13052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13052) · [Before (L13035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13035)

```diff
-                       nB = jB.byteLength >= QB ? jB : new ArrayBuffer(QB),
+                       JB = IB.byteLength >= TB ? IB : new ArrayBuffer(TB),
```

#### 1165. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13038` → after: `L13055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13055) · [Before (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13038)

```diff
-                     return IB.set(new Uint8Array(dB, BB.Zy(), Pj)), IB.set(new Uint8Array(dB, BB.Ty(), zB), Pj), {
+                     return GB.set(new Uint8Array(oB, BB.iq(), eI)), GB.set(new Uint8Array(oB, BB.aq(), ZB), eI), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   36480: (BB, jB, zB) => {
+   36430: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L41)

```diff
-           if (jB > 0 && zB.searchParams.set("cache-bust", `${Date.now()}-${jB}`), await this.fetchWhole(zB, BB)) return this.scriptUrl = zB, !0;
+           if (IB > 0 && ZB.searchParams.set("cache-bust", `${Date.now()}-${IB}`), await this.fetchWhole(ZB, BB)) return this.scriptUrl = ZB, !0;
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L83)

```diff
-   51188: (BB, jB, zB) => {
+   51106: (BB, IB, ZB) => {
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L90)

```diff
-     const QB = new(zB(36480).d)(new URL(zB.p + zB.u(71), zB.b), {
+     const TB = new(ZB(36430).d)(new URL(ZB.p + ZB.u(71), ZB.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/main.js` (1075 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see 7zvlu.main.7df130a9.js.LICENSE.txt */
+ /*! For license information please see c6gaap.main.4d6587ec.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L3)

```diff
-     var BB = [, , , , , , , , , , , , (BB, jB, zB) => {
+     var BB = [, , , , , , , , , , , (BB, IB, ZB) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L5-L11` → after: `L5-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5-L14) · [Before (L5-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5-L11)

```diff
-             D: () => sB,
-             H: () => pB,
-             L: () => FB,
-             P: () => fB,
-             T: () => WB,
-             X: () => SB,
-             _: () => rB,
+             B: () => MB,
+             E: () => iB,
+             I: () => uB,
+             M: () => QB,
+             O: () => zB,
+             S: () => CB,
+             V: () => jB,
+             Y: () => nB,
+             Z: () => rB,
+             ab: () => WB,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L15-L17` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L18) · [Before (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L15-L17)

```diff
-             eb: () => YB,
-             g: () => kB,
-             gb: () => aB,
+             fb: () => cB,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L19-L20` → after: `L20-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L20-L21) · [Before (L19-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L19-L20)

```diff
-             ib: () => XB,
-             kb: () => LB,
+             j: () => gB,
+             jb: () => aB,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L23-L27` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L25-L26) · [Before (L23-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L23-L27)

```diff
-             nb: () => gB,
-             ob: () => UB,
-             pb: () => HB,
-             qb: () => QB,
-             r: () => GB,
+             p: () => UB,
+             t: () => fB,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L141)

```diff
-         }, , , , , , , (BB, jB, zB) => {
+         }, , , , (BB, IB, ZB) => {
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L143)

```diff
-             e: () => IB
+             d: () => GB
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L145)

```diff
-           var QB = zB(28);
+           var TB = ZB(20);
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L167)

```diff
-             (QB.c.set({
+             (TB.d.set({
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L174)

```diff
-         }, , , , , , , , , (BB, jB, zB) => {
+         }, , , , , (BB, IB, ZB) => {
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L176-L180` → after: `L176-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L176-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L176-L180) · [Before (L176-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L176-L180)

```diff
-             c: () => yj,
-             e: () => Lj,
-             h: () => Gj,
-             i: () => kj,
-             m: () => gj
+             d: () => qI,
+             f: () => WI,
+             j: () => UI,
+             m: () => yI,
+             o: () => dI
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L182-L186` → after: `L182-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L182-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L182-L184) · [Before (L182-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L182-L186)

```diff
-           var QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, EB, iB, qB, fB, oB, HB, DB, FB, YB, VB, hB, XB, ZB, AB = zB(31),
-             TB = zB(363),
-             PB = zB(376),
-             WB = zB(41),
-             eB = zB(55),
+           var TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB, jB, PB, RB, rB, mB, XB = ZB(24),
+             LB = ZB(342),
+             eB = ZB(360),
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L189-L194` → after: `L189-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L189-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L189-L194) · [Before (L189-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L189-L194)

```diff
-             xB = zB(62),
-             KB = zB(83),
-             CB = zB(106),
-             cB = zB(273),
-             bB = zB(340),
-             vB = zB(348),
+             tB = ZB(63),
+             bB = ZB(82),
+             xB = ZB(105),
+             EB = ZB(259),
+             DB = ZB(328),
+             KB = ZB(331),
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L196-L202` → after: `L196-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L196-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L196-L202) · [Before (L196-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L196-L202)

```diff
-             OB = zB(128),
-             Bj = zB(687),
-             jj = zB(690),
-             zj = zB(313),
-             Qj = zB(750),
-             nj = zB(752),
-             dj = zB(761);
+             SB = ZB(129),
+             BI = ZB(682),
+             II = ZB(684),
+             ZI = ZB(302),
+             TI = ZB(736),
+             JI = ZB(740),
+             oI = ZB(747);
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L206)

```diff
-             return Bj.f ? "webgl_holdback" : !0 === WB.j.getItem(OB.L) ? "old_intel_driver" : Bj.h && !0 === WB.j.getItem(OB.I) ? "intel_gen9" : jj.E && (0, Bj.d)(WB.j.getItem(OB.G)) ? "gpu_class_webgl" : jj.E && !0 === WB.j.getItem(OB.Q) ? "gpu_wasm_arm" : !jj.E && (0, Bj.l)(nav … [truncated]
+             return BI.c ? "webgl_holdback" : !0 === uB.m.getItem(SB.H) ? "old_intel_driver" : BI.f && !0 === uB.m.getItem(SB.G) ? "intel_gen9" : II.B && (0, BI.b)(uB.m.getItem(SB.E)) ? "gpu_class_webgl" : II.B && !0 === uB.m.getItem(SB.L) ? "gpu_wasm_arm" : !II.B && (0, BI.j)(nav … [truncated]
```

#### 17. `bundles/bloxd.io/main.js` (Changed code · before: `L210` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L210) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L210)

```diff
-             return Bj.r && null === Nj()
+             return BI.o && null === vI()
```

#### 18. `bundles/bloxd.io/main.js` (Changed code · before: `L213-L214` → after: `L213-L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L213-L214) · [Before (L213-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L213-L214)

```diff
-           const aj = Bj.r && null === Uj;
-           let pj = null === WB.j.getItem(TB.Wb);
+           const nI = BI.o && null === cI;
+           let hI = null === uB.m.getItem(LB.wc);
```

#### 19. `bundles/bloxd.io/main.js` (Changed code · before: `L227-L228` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L227-L228) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L227-L228)

```diff
-             soundVolume: (0, eB.c)(),
-             musicVolume: null !== (QB = WB.j.getItem("musicVol")) && void 0 !== QB ? QB : .5,
+             soundVolume: (0, fB.b)(),
+             musicVolume: null !== (TB = uB.m.getItem("musicVol")) && void 0 !== TB ? TB : .5,
```

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L242` → after: `L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L242) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L242)

```diff
-               const BB = WB.j.getItem("showDistantNametags");
+               const BB = uB.m.getItem("showDistantNametags");
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L256-L257` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L256-L257) · [Before (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L256-L257)

```diff
-             showDebugOverlay: null !== (nB = WB.j.getItem("showDebugOverlay")) && void 0 !== nB && nB,
-             enabledDebugFeatures: null !== (dB = WB.j.getItem("enabledDebugFeatures")) && void 0 !== dB ? dB : {},
+             showDebugOverlay: null !== (JB = uB.m.getItem("showDebugOverlay")) && void 0 !== JB && JB,
+             enabledDebugFeatures: null !== (oB = uB.m.getItem("enabledDebugFeatures")) && void 0 !== oB ? oB : {},
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L265-L268` → after: `L265-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L265-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L265-L268) · [Before (L265-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L265-L268)

```diff
-               useProfanityFilter: null === (IB = WB.j.getItem("UseProfanityFilter")) || void 0 === IB || IB,
-               showChat: null === (NB = WB.j.getItem("showChat")) || void 0 === NB || NB,
-               showNewItemIndicator: null === (uB = WB.j.getItem("showNewItemIndicator")) || void 0 === uB || uB,
-               showFriendOnlineToasts: null === (UB = WB.j.getItem("showFriendOnlineToasts")) || void 0 === UB || UB,
+               useProfanityFilter: null === (GB = uB.m.getItem("UseProfanityFilter")) || void 0 === GB || GB,
+               showChat: null === (vB = uB.m.getItem("showChat")) || void 0 === vB || vB,
+               showNewItemIndicator: null === (kB = uB.m.getItem("showNewItemIndicator")) || void 0 === kB || kB,
+               showFriendOnlineToasts: null === (cB = uB.m.getItem("showFriendOnlineToasts")) || void 0 === cB || cB,
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L271-L272` → after: `L271-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L271-L272) · [Before (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L271-L272)

```diff
-                 const jB = WB.j.getItem("friendRequestNotifications");
-                 return null !== (BB = Qj.c.find((BB => BB === jB))) && void 0 !== BB ? BB : "toastAndTray"
+                 const IB = uB.m.getItem("friendRequestNotifications");
+                 return null !== (BB = TI.b.find((BB => BB === IB))) && void 0 !== BB ? BB : "toastAndTray"
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L274-L292` → after: `L274-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L274-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L274-L292) · [Before (L274-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L274-L292)

```diff
-               touchscreenSensitivity: null !== (aB = WB.j.getItem("touchscreenSensitivity")) && void 0 !== aB ? aB : 150,
-               mouseSensitivity: null !== (pB = WB.j.getItem("mouseSensitivity")) && void 0 !== pB ? pB : 15,
-               showCoordinates: null !== (rB = WB.j.getItem("showCoordinates")) && void 0 !== rB && rB,
-               showChunkCoordinates: null !== (sB = WB.j.getItem("showChunkCoordinates")) && void 0 !== sB && sB,
-               showFPS: null !== (JB = WB.j.getItem("showFPS")) && void 0 !== JB && JB,
-               disableBunnyHopping: null !== (mB = WB.j.getItem("disableBunnyHopping")) && void 0 !== mB && mB,
-               disableTexAtlas: null !== (yB = WB.j.getItem("disableTexAtlas")) && void 0 !== yB && yB,
-               disableFullscreen: null !== (kB = WB.j.getItem("disableFullscreen")) && void 0 !== kB && kB,
-               ezBridging: null === (GB = WB.j.getItem("ezBridging")) || void 0 === GB || GB,
-               ezTowering: null === (LB = WB.j.getItem("ezTowering")) || void 0 === LB || LB,
-               crouchIsToggle: null !== (gB = WB.j.getItem("crouchIsToggle")) && void 0 !== gB && gB,
-               vibration: null === (tB = WB.j.getItem("vibration")) || void 0 === tB || tB,
-               hideUiIsToggle: null !== (SB = WB.j.getItem("hideUiIsToggle")) && void 0 !== SB && SB,
-               enableLighting: null !== (MB = WB.j.getItem("enableLighting")) && void 0 !== MB && MB,
-               showFog: null !== (EB = WB.j.getItem("showFog")) && void 0 !== EB && EB,
-               fogChunkDistance: null !== (iB = WB.j.getItem("fogChunkDistance")) && void 0 !== iB ? iB : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (nB = uB.m.getItem("touchscreenSensitivity")) && void 0 !== nB ? nB : 150,
+               mouseSensitivity: null !== (hB = uB.m.getItem("mouseSensitivity")) && void 0 !== hB ? hB : 15,
+               showCoordinates: null !== (zB = uB.m.getItem("showCoordinates")) && void 0 !== zB && zB,
+               showChunkCoordinates: null !== (FB = uB.m.getItem("showChunkCoordinates")) && void 0 !== FB && FB,
+               showFPS: null !== (NB = uB.m.getItem("showFPS")) && void 0 !== NB && NB,
+               disableBunnyHopping: null !== (gB = uB.m.getItem("disableBunnyHopping")) && void 0 !== gB && gB,
+               disableTexAtlas: null !== (qB = uB.m.getItem("disableTexAtlas")) && void 0 !== qB && qB,
+               disableFullscreen: null !== (yB = uB.m.getItem("disableFullscreen")) && void 0 !== yB && yB,
+               ezBridging: null === (UB = uB.m.getItem("ezBridging")) || void 0 === UB || UB,
+               ezTowering: null === (WB = uB.m.getItem("ezTowering")) || void 0 === WB || WB,
+               crouchIsToggle: null !== (dB = uB.m.getItem("crouchIsToggle")) && void 0 !== dB && dB,
+               vibration: null === (CB = uB.m.getItem("vibration")) || void 0 === CB || CB,
+               hideUiIsToggle: null !== (QB = uB.m.getItem("hideUiIsToggle")) && void 0 !== QB && QB,
+               enableLighting: null !== (sB = uB.m.getItem("enableLighting")) && void 0 !== sB && sB,
+               showFog: null !== (wB = uB.m.getItem("showFog")) && void 0 !== wB && wB,
+               fogChunkDistance: null !== (OB = uB.m.getItem("fogChunkDistance")) && void 0 !== OB ? OB : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L296-L304` → after: `L296-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L296-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L296-L304) · [Before (L296-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L296-L304)

```diff
-               useWebGpu: null !== (HB = WB.j.getItem(TB.Wb)) && void 0 !== HB ? HB : aj,
-               pixelScale: null !== (DB = WB.j.getItem("pixelScale")) && void 0 !== DB ? DB : (0, CB.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (FB = WB.j.getItem("pixelSmoothing")) || void 0 === FB || FB,
-               showChunkBorders: null !== (YB = WB.j.getItem("showChunkBorders")) && void 0 !== YB && YB,
-               showWeaponRaycasts: null !== (VB = WB.j.getItem("showWeaponRaycasts")) && void 0 !== VB && VB,
-               chunkFadeIn: null === (hB = WB.j.getItem("chunkFadeIn")) || void 0 === hB || hB,
-               enableClipping: null !== (XB = WB.j.getItem("enableClipping")) && void 0 !== XB && XB,
-               clipDurationSeconds: null !== (ZB = WB.j.getItem("clipDurationSeconds")) && void 0 !== ZB ? ZB : nj.i,
-               ...(0, dj.f)()
+               useWebGpu: null !== (aB = uB.m.getItem(LB.wc)) && void 0 !== aB ? aB : nI,
+               pixelScale: null !== (HB = uB.m.getItem("pixelScale")) && void 0 !== HB ? HB : (0, xB.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (MB = uB.m.getItem("pixelSmoothing")) || void 0 === MB || MB,
+               showChunkBorders: null !== (jB = uB.m.getItem("showChunkBorders")) && void 0 !== jB && jB,
+               showWeaponRaycasts: null !== (PB = uB.m.getItem("showWeaponRaycasts")) && void 0 !== PB && PB,
+               chunkFadeIn: null === (RB = uB.m.getItem("chunkFadeIn")) || void 0 === RB || RB,
+               enableClipping: null !== (rB = uB.m.getItem("enableClipping")) && void 0 !== rB && rB,
+               clipDurationSeconds: null !== (mB = uB.m.getItem("clipDurationSeconds")) && void 0 !== mB ? mB : JI.g,
+               ...(0, oI.e)()
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L311)

```diff
-             const zB = null !== (jB = WB.j.getItem(bB.e)) && void 0 !== jB ? jB : (0, cB.g)();
+             const ZB = null !== (IB = uB.m.getItem(DB.d)) && void 0 !== IB ? IB : (0, EB.j)();
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L321)

```diff
-             return null !== WB.j.getItem(bB.e)
+             return null !== uB.m.getItem(DB.d)
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L327)

```diff
-               for (const jB in BB) AB.n.Ly(`appManagerUpdated|${jB}`, BB[jB])
+               for (const IB in BB) XB.l.Gq(`appManagerUpdated|${IB}`, BB[IB])
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L335` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L335) · [Before (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L335)

```diff
-               for (const dB in BB)(0, PB.se)(rj[dB], BB[dB]) || (jB[dB] = BB[dB], zB = !0);
+               for (const oB in BB)(0, eB.he)(zI[oB], BB[oB]) || (IB[oB] = BB[oB], ZB = !0);
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L342)

```diff
-                 WB.j.setItem("UseProfanityFilter", BB.useProfanityFilter), WB.j.setItem("showChat", BB.showChat), WB.j.setItem("showNewItemIndicator", BB.showNewItemIndicator), WB.j.setItem("showFriendOnlineToasts", BB.showFriendOnlineToasts), WB.j.setItem("friendRequestNotificat … [truncated]
+                 uB.m.setItem("UseProfanityFilter", BB.useProfanityFilter), uB.m.setItem("showChat", BB.showChat), uB.m.setItem("showNewItemIndicator", BB.showNewItemIndicator), uB.m.setItem("showFriendOnlineToasts", BB.showFriendOnlineToasts), uB.m.setItem("friendRequestNotificat … [truncated]
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L344)

```diff
-               void 0 !== jB.soundVolume && WB.j.setItem("soundVol", jB.soundVolume), void 0 !== jB.musicVolume && WB.j.setItem("musicVol", jB.musicVolume), void 0 !== jB.showDistantNametags && WB.j.setItem("showDistantNametags", jB.showDistantNametags), void 0 !== jB.showDebugOve … [truncated]
+               void 0 !== IB.soundVolume && uB.m.setItem("soundVol", IB.soundVolume), void 0 !== IB.musicVolume && uB.m.setItem("musicVol", IB.musicVolume), void 0 !== IB.showDistantNametags && uB.m.setItem("showDistantNametags", IB.showDistantNametags), void 0 !== IB.showDebugOve … [truncated]
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L355-L356` → after: `L355-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L355-L356) · [Before (L355-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L355-L356)

```diff
-               const jB = Jj() ? null : (0, cB.d)(BB);
-               return null !== jB && void 0 !== jB ? jB : rj.clientEscMenuOptions.antiAliasing
+               const IB = NI() ? null : (0, EB.b)(BB);
+               return null !== IB && void 0 !== IB ? IB : zI.clientEscMenuOptions.antiAliasing
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L359-L360` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L359-L360) · [Before (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L359-L360)

```diff
-               (0, cB.e)(BB);
-               const jB = Jj() ? rj.clientEscMenuOptions.antiAliasing : (0, cB.g)();
+               (0, EB.f)(BB);
+               const IB = NI() ? zI.clientEscMenuOptions.antiAliasing : (0, EB.j)();
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L377` → after: `L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L377) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L377)

```diff
-               let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, vB.p)(),
+               let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, KB.n)(),
```

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L380-L381` → after: `L380-L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L380-L381) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L380-L381)

```diff
-               const QB = (0, vB.z)(BB, jB, zB);
-               return (0, vB.D)() && !0 === WB.j.getItem(TB.Wb) && WB.j.removeItem(TB.Wb), QB
+               const TB = (0, KB.x)(BB, IB, ZB);
+               return (0, KB.D)() && !0 === uB.m.getItem(LB.wc) && uB.m.removeItem(LB.wc), TB
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L392` → after: `L392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L392) · [Before (L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L392)

```diff
-               return (0, vB.J)() || !0 === WB.j.getItem(OB.L)
+               return (0, KB.K)() || !0 === uB.m.getItem(SB.H)
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L398)

```diff
-               return pj ? Uj : null
+               return hI ? cI : null
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L401)

```diff
-               !0 === WB.j.getItem(OB.L) && (0, CB.hasUsableWebGpuAdapter)()
+               !0 === uB.m.getItem(SB.H) && (0, xB.hasUsableWebGpuAdapter)()
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L445)

```diff
-         }, , , (BB, jB, zB) => {
+         }, , , , (BB, IB, ZB) => {
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L447-L448` → after: `L447-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L447-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L447-L449) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L447-L448)

```diff
-             e: () => NB,
-             h: () => dB,
+             d: () => vB,
+             f: () => oB,
+             j: () => nB,
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L450-L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L451) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L450-L451)

```diff
-             n: () => UB,
-             q: () => pB
+             p: () => hB
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L453)

```diff
-           var QB = zB(36),
+           var TB = ZB(29),
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L463` → after: `L463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L463) · [Before (L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L463)

```diff
-               super(...arguments), this.Lk = !1, this.Hk = [], this.Dk = {}
+               super(...arguments), this.Iy = !1, this.Gy = [], this.vy = {}
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L467)

```diff
-               this.Lk || !zB ? this.emit(BB, jB) : this.Hk.push({
+               this.Iy || !ZB ? this.emit(BB, IB) : this.Gy.push({
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L474-L475` → after: `L474-L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L474-L475) · [Before (L474-L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L474-L475)

```diff
-               const QB = this.Fk(BB, jB);
-               return this.on(BB, QB), this.Dk[BB] = (null !== (zB = this.Dk[BB]) && void 0 !== zB ? zB : 0) + 1, {
+               const TB = this.Fy(BB, IB);
+               return this.on(BB, TB), this.vy[BB] = (null !== (ZB = this.vy[BB]) && void 0 !== ZB ? ZB : 0) + 1, {
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L484)

```diff
-               const zB = this.Fk(BB, jB);
+               const ZB = this.Fy(BB, IB);
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L493-L494` → after: `L493-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L493-L494) · [Before (L493-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L493-L494)

```diff
-                 zB = this.Dk[jB];
-               zB > 1 ? this.Dk[jB] = zB - 1 : 1 === zB && delete this.Dk[jB]
+                 ZB = this.vy[IB];
+               ZB > 1 ? this.vy[IB] = ZB - 1 : 1 === ZB && delete this.vy[IB]
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L506)

```diff
-               this.Lk = BB, BB && (this.Hk.forEach((BB => {
+               this.Iy = BB, BB && (this.Gy.forEach((BB => {
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L511-L512` → after: `L511-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L511-L512) · [Before (L511-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L511-L512)

```diff
-                 this.Ly(jB, zB)
-               })), this.Hk = [])
+                 this.Gq(IB, ZB)
+               })), this.Gy = [])
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L515` → after: `L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L515) · [Before (L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L515)

```diff
-               this.Hk = []
+               this.Gy = []
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L521)

```diff
-             UB.Vk(!0)
+             cB.Wy(!0)
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L537)

```diff
-             this.kJ = BB, this.context = jB, this.once = zB || !1
+             this.vN = BB, this.context = IB, this.once = ZB || !1
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L543-L544` → after: `L543-L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L543-L544) · [Before (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L543-L544)

```diff
-               uB = zB ? zB + jB : jB;
-             return BB._events[uB] ? BB._events[uB].kJ ? BB._events[uB] = [BB._events[uB], NB] : BB._events[uB].push(NB) : (BB._events[uB] = NB, BB._eventsCount++), BB
+               kB = ZB ? ZB + IB : IB;
+             return BB._events[kB] ? BB._events[kB].vN ? BB._events[kB] = [BB._events[kB], vB] : BB._events[kB].push(vB) : (BB._events[kB] = vB, BB._eventsCount++), BB
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L548` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L548) · [Before (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L548)

```diff
-             0 === --BB._eventsCount ? BB._events = new QB : delete BB._events[jB]
+             0 === --BB._eventsCount ? BB._events = new TB : delete BB._events[IB]
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L563-L564` → after: `L563-L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L563-L564) · [Before (L563-L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L563-L564)

```diff
-             if (QB.kJ) return [QB.kJ];
-             for (var nB = 0, dB = QB.length, IB = new Array(dB); nB < dB; nB++) IB[nB] = QB[nB].kJ;
+             if (TB.vN) return [TB.vN];
+             for (var JB = 0, oB = TB.length, GB = new Array(oB); JB < oB; JB++) GB[JB] = TB[JB].vN;
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L569` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L569) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L569)

```diff
-             return QB ? QB.kJ ? 1 : QB.length : 0
+             return TB ? TB.vN ? 1 : TB.length : 0
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L575-L576` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L575-L576) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L575-L576)

```diff
-             if (aB.kJ) {
-               switch (aB.once && this.removeListener(BB, aB.kJ, void 0, !0), pB) {
+             if (nB.vN) {
+               switch (nB.once && this.removeListener(BB, nB.vN, void 0, !0), hB) {
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L578)

```diff
-                   return aB.kJ.call(aB.context), !0;
+                   return nB.vN.call(nB.context), !0;
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L580` → after: `L580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L580) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L580)

```diff
-                   return aB.kJ.call(aB.context, jB), !0;
+                   return nB.vN.call(nB.context, IB), !0;
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L582)

```diff
-                   return aB.kJ.call(aB.context, jB, QB), !0;
+                   return nB.vN.call(nB.context, IB, TB), !0;
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L584)

```diff
-                   return aB.kJ.call(aB.context, jB, QB, nB), !0;
+                   return nB.vN.call(nB.context, IB, TB, JB), !0;
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L586)

```diff
-                   return aB.kJ.call(aB.context, jB, QB, nB, dB), !0;
+                   return nB.vN.call(nB.context, IB, TB, JB, oB), !0;
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L588)

```diff
-                   return aB.kJ.call(aB.context, jB, QB, nB, dB, IB), !0
+                   return nB.vN.call(nB.context, IB, TB, JB, oB, GB), !0
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L591)

```diff
-               aB.kJ.apply(aB.context, uB)
+               nB.vN.apply(nB.context, kB)
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L594)

```diff
-               for (UB = 0; UB < sB; UB++) switch (aB[UB].once && this.removeListener(BB, aB[UB].kJ, void 0, !0), pB) {
+               for (cB = 0; cB < FB; cB++) switch (nB[cB].once && this.removeListener(BB, nB[cB].vN, void 0, !0), hB) {
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L596` → after: `L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L596) · [Before (L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L596)

```diff
-                   aB[UB].kJ.call(aB[UB].context);
+                   nB[cB].vN.call(nB[cB].context);
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L599` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L599) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L599)

```diff
-                   aB[UB].kJ.call(aB[UB].context, jB);
+                   nB[cB].vN.call(nB[cB].context, IB);
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L602)

```diff
-                   aB[UB].kJ.call(aB[UB].context, jB, QB);
+                   nB[cB].vN.call(nB[cB].context, IB, TB);
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L605` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L605) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L605)

```diff
-                   aB[UB].kJ.call(aB[UB].context, jB, QB, nB);
+                   nB[cB].vN.call(nB[cB].context, IB, TB, JB);
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L610)

```diff
-                   aB[UB].kJ.apply(aB[UB].context, uB)
+                   nB[cB].vN.apply(nB[cB].context, kB)
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L623)

```diff
-             if (NB.kJ) NB.kJ !== jB || nB && !NB.once || QB && NB.context !== QB || IB(this, dB);
+             if (vB.vN) vB.vN !== IB || JB && !vB.once || TB && vB.context !== TB || GB(this, oB);
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L625-L626` → after: `L625-L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L625-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L625-L626) · [Before (L625-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L625-L626)

```diff
-               for (var uB = 0, UB = [], aB = NB.length; uB < aB; uB++)(NB[uB].kJ !== jB || nB && !NB[uB].once || QB && NB[uB].context !== QB) && UB.push(NB[uB]);
-               UB.length ? this._events[dB] = 1 === UB.length ? UB[0] : UB : IB(this, dB)
+               for (var kB = 0, cB = [], nB = vB.length; kB < nB; kB++)(vB[kB].vN !== IB || JB && !vB[kB].once || TB && vB[kB].context !== TB) && cB.push(vB[kB]);
+               cB.length ? this._events[oB] = 1 === cB.length ? cB[0] : cB : GB(this, oB)
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L629` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L629) · [Before (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L629)

```diff
-           }, NB.prototype.Wk = function(BB) {
+           }, vB.prototype.jy = function(BB) {
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L633)

```diff
-         }, , , , , (BB, jB, zB) => {
+         }, , , , , , , (BB, IB, ZB) => {
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L635-L638` → after: `L635-L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L635-L638) · [Before (L635-L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L635-L638)

```diff
-             d: () => aB,
-             g: () => sB,
-             j: () => pB,
-             k: () => rB,
+             e: () => nB,
+             i: () => FB,
+             m: () => hB,
+             n: () => zB,
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L640)

```diff
-             q: () => UB
+             p: () => cB
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L642)

```diff
-           var QB = zB(48),
+           var TB = ZB(45),
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L644)

```diff
-             dB = zB(53),
+             oB = ZB(49),
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L679` → after: `L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L679) · [Before (L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L679)

```diff
-                 return console.error("Caught error", zB, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (jB = this._cachedVals[BB]) && void 0 !== jB ? jB : null
+                 return console.error("Caught error", ZB, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (IB = this._cachedVals[BB]) && void 0 !== IB ? IB : null
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L713` → after: `L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L713) · [Before (L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L713)

```diff
-                 return console.error("Caught error", zB, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", ZB, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L744` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L744) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L744)

```diff
-                 return console.error("Caught error", zB, "when attempting to read from sessionStorage."), null !== (jB = this._cachedVals[BB]) && void 0 !== jB ? jB : null
+                 return console.error("Caught error", ZB, "when attempting to read from sessionStorage."), null !== (IB = this._cachedVals[BB]) && void 0 !== IB ? IB : null
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L771)

```diff
-                 return null !== (QB = this._cachedVals[BB]) && void 0 !== QB ? QB : null
+                 return null !== (TB = this._cachedVals[BB]) && void 0 !== TB ? TB : null
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L793` → after: `L793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L793) · [Before (L793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L793)

```diff
-                   for (let QB, nB, dB = 0, IB = 0; nB = BB.charAt(IB++); ~nB && (QB = dB % 4 ? 64 * QB + nB : nB, dB++ % 4) ? jB += String.fromCharCode(255 & QB >> (-2 * dB & 6)) : 0) nB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(nB);
+                   for (let TB, JB, oB = 0, GB = 0; JB = BB.charAt(GB++); ~JB && (TB = oB % 4 ? 64 * TB + JB : JB, oB++ % 4) ? IB += String.fromCharCode(255 & TB >> (-2 * oB & 6)) : 0) JB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(JB);
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L800` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L800) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L800)

```diff
-               return IB ? nB = IB : (nB = mB.FZAkcO(nB), BB[dB] = nB), nB
+               return GB ? JB = GB : (JB = gB.FZAkcO(JB), BB[oB] = JB), JB
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L842` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L842) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L842)

```diff
-         }, , , , , , , (BB, jB, zB) => {
+         }, , , , , , , , , (BB, IB, ZB) => {
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L1396` → after: `L1396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1396) · [Before (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1396)

```diff
-                       return BB ? jB : DB(jB)
+                       return BB ? IB : HB(IB)
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L1672` → after: `L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1672) · [Before (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1672)

```diff
-                   BB instanceof ArrayBuffer ? (QB = BB, nB += zj) : (QB = BB.buffer, "[object Int8Array]" === zB ? nB += nj : "[object Uint8Array]" === zB ? nB += dj : "[object Uint8ClampedArray]" === zB ? nB += Ij : "[object Int16Array]" === zB ? nB += Nj : "[object Uint16Array] … [truncated]
+                   BB instanceof ArrayBuffer ? (TB = BB, JB += ZI) : (TB = BB.buffer, "[object Int8Array]" === ZB ? JB += JI : "[object Uint8Array]" === ZB ? JB += oI : "[object Uint8ClampedArray]" === ZB ? JB += GI : "[object Int16Array]" === ZB ? JB += vI : "[object Uint16Array] … [truncated]
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L1696` → after: `L1696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1696) · [Before (L1696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1696)

```diff
-                   case zj:
+                   case ZI:
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L1698` → after: `L1698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1698) · [Before (L1698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1698)

```diff
-                   case Qj:
+                   case TI:
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L1702` → after: `L1702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1702) · [Before (L1702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1702)

```diff
-                   case nj:
+                   case JI:
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L1704` → after: `L1704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1704) · [Before (L1704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1704)

```diff
-                   case dj:
+                   case oI:
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L1706` → after: `L1706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1706) · [Before (L1706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1706)

```diff
-                   case Ij:
+                   case GI:
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L1708` → after: `L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1708) · [Before (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1708)

```diff
-                   case Nj:
+                   case vI:
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L1710` → after: `L1710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1710) · [Before (L1710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1710)

```diff
-                   case Uj:
+                   case cI:
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L1712` → after: `L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1712) · [Before (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1712)

```diff
-                   case uj:
+                   case kI:
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L1714` → after: `L1714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1714) · [Before (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1714)

```diff
-                   case aj:
+                   case nI:
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L1716` → after: `L1716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1716) · [Before (L1716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1716)

```diff
-                   case pj:
+                   case hI:
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L1718` → after: `L1718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1718) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1718)

```diff
-                   case rj:
+                   case zI:
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L1756` → after: `L1756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1756) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1756)

```diff
-                 return zB.Rk = Lj, nB
+                 return ZB.Py = WI, JB
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1778` → after: `L1778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1778) · [Before (L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1778)

```diff
-                         QB && (QB = nB.Rk.deserialize(QB)), jB(QB)
+                         TB && (TB = JB.Py.deserialize(TB)), IB(TB)
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1798` → after: `L1798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1798) · [Before (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1798)

```diff
-                             if (UB && (UB = nB.Rk.deserialize(UB)), void 0 !== (UB = BB(UB, uB.key, NB + 1))) return void jB(UB)
+                             if (cB && (cB = JB.Py.deserialize(cB)), void 0 !== (cB = BB(cB, kB.key, vB + 1))) return void IB(cB)
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1818` → after: `L1818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L1818) · [Before (L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L1818)

```diff
-                     uB.Rk.serialize(jB, (function(jB, UB) {
+                     kB.Py.serialize(IB, (function(IB, cB) {
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L2029` → after: `L2029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2029) · [Before (L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2029)

```diff
-                 return zB.keyPrefix = Zj(BB, jB._defaultConfig), Tj() ? (jB._dbInfo = zB, zB.Rk = Lj, UB.resolve()) : UB.reject()
+                 return ZB.keyPrefix = mI(BB, IB._defaultConfig), LI() ? (IB._dbInfo = ZB, ZB.Py = WI, cB.resolve()) : cB.reject()
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L2049` → after: `L2049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2049) · [Before (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2049)

```diff
-                   return QB && (QB = jB.Rk.deserialize(QB)), QB
+                   return TB && (TB = IB.Py.deserialize(TB)), TB
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L2061` → after: `L2061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2061) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2061)

```diff
-                         if (UB && (UB = jB.Rk.deserialize(UB)), void 0 !== (UB = BB(UB, uB.substring(nB), IB++))) return UB
+                         if (cB && (cB = IB.Py.deserialize(cB)), void 0 !== (cB = BB(cB, kB.substring(JB), GB++))) return cB
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2119)

```diff
-                     IB.Rk.serialize(jB, (function(jB, QB) {
+                     GB.Py.serialize(IB, (function(IB, TB) {
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L2339` → after: `L2339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2339) · [Before (L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2339)

```diff
-         }, , , , , (BB, jB, zB) => {
+         }, , , , (BB, IB, ZB) => {
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L2408` → after: `L2408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2408) · [Before (L2408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2408)

```diff
-         }, , (BB, jB, zB) => {
+         }, , , , , , , , (BB, IB, ZB) => {
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L2410` → after: `L2410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2410) · [Before (L2410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2410)

```diff
-             c: () => nB
+             b: () => JB
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L2412` → after: `L2412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2412) · [Before (L2412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2412)

```diff
-           var QB = zB(41);
+           var TB = ZB(36);
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L2416` → after: `L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2416) · [Before (L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2416)

```diff
-             return null !== (BB = QB.j.getItem("soundVol")) && void 0 !== BB ? BB : .5
+             return null !== (BB = TB.m.getItem("soundVol")) && void 0 !== BB ? BB : .5
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L2419-L2421` → after: `L2421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2421) · [Before (L2419-L2421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2419-L2421)

```diff
-           BB.exports = zB(71)
-         }, , , , , , , , , (BB, jB, zB) => {
-           var QB = zB(75),
+           var TB = ZB(79),
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L2532-L2533` → after: `L2532-L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2532-L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2532-L2533) · [Before (L2532-L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2532-L2533)

```diff
-                   case nB:
-                   case dB:
+                   case JB:
+                   case oB:
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L2708` → after: `L2708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2708) · [Before (L2708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2708)

```diff
-         }, , , , BB => {
+         }, , , , , , , , , BB => {
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L2741` → after: `L2741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2741) · [Before (L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2741)

```diff
-         }, , , , , , , , (BB, jB, zB) => {
+         }, , , (BB, IB, ZB) => {
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L2748-L2752` → after: `L2748-L2752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2748-L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2748-L2752) · [Before (L2748-L2752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2748-L2752)

```diff
-           }(), BB.exports = zB(88)
-         }, , , , , (BB, jB, zB) => {
-           var QB = zB(62),
-             nB = zB(75),
-             dB = zB(90);
+           }(), BB.exports = ZB(85)
+         }, , , (BB, IB, ZB) => {
+           var TB = ZB(63),
+             JB = ZB(79),
+             oB = ZB(94);
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L2839` → after: `L2839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2839) · [Before (L2839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2839)

```diff
-             }(jB) && (null === zB ? BB.removeAttribute(jB) : BB.setAttribute(jB, "" + zB)) : nB.mustUseProperty ? BB[nB.propertyName] = null === zB ? 3 !== nB.type && "" : zB : (jB = nB.attributeName, QB = nB.attributeNamespace, null === zB ? BB.removeAttribute(jB) : (zB = 3 ===  … [truncated]
+             }(IB) && (null === ZB ? BB.removeAttribute(IB) : BB.setAttribute(IB, "" + ZB)) : JB.mustUseProperty ? BB[JB.propertyName] = null === ZB ? 3 !== JB.type && "" : ZB : (IB = JB.attributeName, TB = JB.attributeNamespace, null === ZB ? BB.removeAttribute(IB) : (ZB = 3 ===  … [truncated]
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L2978` → after: `L2978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2978) · [Before (L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2978)

```diff
-               case EB:
+               case wB:
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L2980` → after: `L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2980) · [Before (L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2980)

```diff
-               case MB:
+               case sB:
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2982` → after: `L2982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2982) · [Before (L2982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2982)

```diff
-               case qB:
+               case YB:
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2984` → after: `L2984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2984) · [Before (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2984)

```diff
-               case iB:
+               case OB:
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2986` → after: `L2986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2986) · [Before (L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2986)

```diff
-               case DB:
+               case HB:
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2988` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2988) · [Before (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2988)

```diff
-               case FB:
+               case MB:
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2992` → after: `L2992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2992) · [Before (L2992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2992)

```diff
-               case oB:
+               case pB:
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2994` → after: `L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2994) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2994)

```diff
-               case fB:
+               case iB:
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2996` → after: `L2996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2996) · [Before (L2996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2996)

```diff
-               case HB:
+               case aB:
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2999` → after: `L2999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L2999) · [Before (L2999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L2999)

```diff
-               case YB:
+               case jB:
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L3001` → after: `L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L3001) · [Before (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L3001)

```diff
-               case hB:
+               case RB:
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L3003` → after: `L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L3003) · [Before (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L3003)

```diff
-               case VB:
+               case PB:
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L3087` → after: `L3087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L3087) · [Before (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L3087)

```diff
-               checked: null != zB ? zB : BB._wrapperState.initialChecked
+               checked: null != ZB ? ZB : BB._wrapperState.initialChecked
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L3453` → after: `L3453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L3453) · [Before (L3453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L3453)

```diff
-             return 3 === jB.tag ? zB : null
+             return 3 === IB.tag ? ZB : null
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L3861` → after: `L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L3861) · [Before (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L3861)

```diff
-             return uQ = nB.slice(BB, 1 < jB ? 1 - jB : void 0)
+             return kT = JB.slice(BB, 1 < IB ? 1 - IB : void 0)
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L3880` → after: `L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L3880) · [Before (L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L3880)

```diff
-               return this.isDefaultPrevented = (null != nB.defaultPrevented ? nB.defaultPrevented : !1 === nB.returnValue) ? pQ : rQ, this.isPropagationStopped = rQ, this
+               return this.isDefaultPrevented = (null != JB.defaultPrevented ? JB.defaultPrevented : !1 === JB.returnValue) ? hT : zT, this.isPropagationStopped = zT, this
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L4282` → after: `L4282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4282) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4282)

```diff
-             var QB = zB.window === zB ? zB.document : 9 === zB.nodeType ? zB : zB.ownerDocument;
+             var TB = ZB.window === ZB ? ZB.document : 9 === ZB.nodeType ? ZB : ZB.ownerDocument;
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L4470-L4472` → after: `L4470-L4472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4470-L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4470-L4472) · [Before (L4470-L4472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4470-L4472)

```diff
-                     case Yz:
-                     case Vz:
-                     case hz:
+                     case jZ:
+                     case PZ:
+                     case RZ:
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L4475` → after: `L4475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4475) · [Before (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4475)

```diff
-                     case Xz:
+                     case rZ:
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L4515-L4516` → after: `L4515-L4516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4515-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4515-L4516) · [Before (L4515-L4516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4515-L4516)

```diff
-                 if (uB = "mouseout" === BB || "pointerout" === BB, (!(NB = "mouseover" === BB || "pointerover" === BB) || 0 !== (16 & jB) || !(UB = zB.relatedTarget || zB.fromElement) || !md(UB) && !UB[sd]) && (uB || NB) && (NB = nB.window === nB ? nB : (NB = nB.ownerDocument) ?  … [truncated]
-                   if (aB = SQ, mB = "onMouseLeave", rB = "onMouseEnter", JB = "mouse", "pointerout" !== BB && "pointerover" !== BB || (aB = ZQ, mB = "onPointerLeave", rB = "onPointerEnter", JB = "pointer"), pB = null == uB ? NB : kd(uB), sB = null == UB ? NB : kd(UB), (NB = new a … [truncated]
+                 if (kB = "mouseout" === BB || "pointerout" === BB, (!(vB = "mouseover" === BB || "pointerover" === BB) || 0 !== (16 & IB) || !(cB = ZB.relatedTarget || ZB.fromElement) || !ho(cB) && !cB[co]) && (kB || vB) && (vB = JB.window === JB ? JB : (vB = JB.ownerDocument) ?  … [truncated]
+                   if (nB = QT, gB = "onMouseLeave", zB = "onMouseEnter", NB = "mouse", "pointerout" !== BB && "pointerover" !== BB || (nB = mT, gB = "onPointerLeave", zB = "onPointerEnter", NB = "pointer"), hB = null == kB ? vB : Fo(kB), FB = null == cB ? vB : Fo(cB), (vB = new n … [truncated]
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L4580` → after: `L4580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4580) · [Before (L4580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4580)

```diff
-                 }), GB ? LB.data = GB : null !== (GB = vQ(zB)) && (LB.data = GB))), (GB = xQ ? function(BB, jB) {
+                 }), UB ? WB.data = UB : null !== (UB = KT(ZB)) && (WB.data = UB))), (UB = tT ? function(BB, IB) {
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L4818` → after: `L4818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4818) · [Before (L4818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4818)

```diff
-             Od = void 0 !== ld ? ld : function() {},
+             Ko = void 0 !== eo ? eo : function() {},
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L4823` → after: `L4823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4823) · [Before (L4823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4823)

```diff
-             nI = 1e4 > QI ? wd : function() {
+             ZG = 1e4 > IG ? uo : function() {
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L4829` → after: `L4829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4829) · [Before (L4829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4829)

```diff
-               case Kd:
+               case Ao:
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L4831` → after: `L4831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4831) · [Before (L4831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4831)

```diff
-               case Cd:
+               case to:
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L4833` → after: `L4833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4833) · [Before (L4833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4833)

```diff
-               case cd:
+               case bo:
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L4835` → after: `L4835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4835) · [Before (L4835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4835)

```diff
-               case bd:
+               case xo:
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L4837` → after: `L4837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4837) · [Before (L4837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4837)

```diff
-               case vd:
+               case Eo:
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L4990` → after: `L4990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L4990) · [Before (L4990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L4990)

```diff
-               null === zB ? jB.next = jB : (jB.next = zB.next, zB.next = jB), BB.pending = jB
+               null === ZB ? IB.next = IB : (IB.next = ZB.next, ZB.next = IB), BB.pending = IB
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L5010` → after: `L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5010) · [Before (L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5010)

```diff
-                   null === dB ? nB = dB = IB : dB = dB.next = IB, zB = zB.next
+                   null === oB ? JB = oB = GB : oB = oB.next = GB, ZB = ZB.next
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L5012` → after: `L5012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5012) · [Before (L5012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5012)

```diff
-                 null === dB ? nB = dB = jB : dB = dB.next = jB
+                 null === oB ? JB = oB = IB : oB = oB.next = IB
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L5022` → after: `L5022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5022) · [Before (L5022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5022)

```diff
-             null === (BB = zB.lastBaseUpdate) ? zB.firstBaseUpdate = jB : BB.next = jB, zB.lastBaseUpdate = jB
+             null === (BB = ZB.lastBaseUpdate) ? ZB.firstBaseUpdate = IB : BB.next = IB, ZB.lastBaseUpdate = IB
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L5035` → after: `L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5035) · [Before (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5035)

```diff
-               UB.next = null, null === NB ? IB = aB : NB.next = aB, NB = UB;
+               cB.next = null, null === vB ? GB = nB : vB.next = nB, vB = cB;
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L5039` → after: `L5039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5039) · [Before (L5039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5039)

```diff
-                 rB !== NB && (null === rB ? pB.firstBaseUpdate = aB : rB.next = aB, pB.lastBaseUpdate = UB)
+                 zB !== vB && (null === zB ? hB.firstBaseUpdate = nB : zB.next = nB, hB.lastBaseUpdate = cB)
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L5108` → after: `L5108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5108) · [Before (L5108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5108)

```diff
-             zB = null === (zB = zB(QB, jB = BB.memoizedState)) || void 0 === zB ? jB : nB({}, jB, zB), BB.memoizedState = zB, 0 === BB.lanes && (BB.updateQueue.baseState = zB)
+             ZB = null === (ZB = ZB(TB, IB = BB.memoizedState)) || void 0 === ZB ? IB : JB({}, IB, ZB), BB.memoizedState = ZB, 0 === BB.lanes && (BB.updateQueue.baseState = ZB)
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L5145` → after: `L5145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5145) · [Before (L5145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5145)

```diff
-             return "object" === typeof dB && null !== dB ? dB = tI(dB) : (nB = Dd(jB) ? od : qd.current, dB = (QB = null !== (QB = jB.contextTypes) && void 0 !== QB) ? Hd(BB, nB) : id), jB = new jB(zB, dB), BB.memoizedState = null !== jB.state && void 0 !== jB.state ? jB.state :  … [truncated]
+             return "object" === typeof oB && null !== oB ? oB = WG(oB) : (JB = io(IB) ? Oo : so.current, oB = (TB = null !== (TB = IB.contextTypes) && void 0 !== TB) ? Yo(BB, JB) : Qo), IB = new IB(ZB, oB), BB.memoizedState = null !== IB.state && void 0 !== IB.state ? IB.state :  … [truncated]
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L5156` → after: `L5156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5156) · [Before (L5156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5156)

```diff
-             "object" === typeof dB && null !== dB ? nB.context = tI(dB) : (dB = Dd(jB) ? od : qd.current, nB.context = Hd(BB, dB)), oI(BB, zB, nB, QB), nB.state = BB.memoizedState, "function" === typeof(dB = jB.getDerivedStateFromProps) && (FI(BB, jB, dB, zB), nB.state = BB.memoi … [truncated]
+             "object" === typeof oB && null !== oB ? JB.context = WG(oB) : (oB = io(IB) ? Oo : so.current, JB.context = Yo(BB, oB)), YG(BB, ZB, JB, TB), JB.state = BB.memoizedState, "function" === typeof(oB = IB.getDerivedStateFromProps) && (aG(BB, IB, oB, ZB), JB.state = BB.memoi … [truncated]
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L5208` → after: `L5208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5208) · [Before (L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5208)

```diff
-               return jB.index = QB, BB ? null !== (QB = jB.alternate) ? (QB = QB.index) < zB ? (jB.flags = 2, zB) : QB : (jB.flags = 2, zB) : zB
+               return IB.index = TB, BB ? null !== (TB = IB.alternate) ? (TB = TB.index) < ZB ? (IB.flags = 2, ZB) : TB : (IB.flags = 2, ZB) : ZB
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L5235` → after: `L5235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5235) · [Before (L5235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5235)

```diff
-                   case SB:
+                   case QB:
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L5237` → after: `L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5237) · [Before (L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5237)

```diff
-                   case MB:
+                   case sB:
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L5251` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5251) · [Before (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5251)

```diff
-                   case SB:
+                   case QB:
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L5253` → after: `L5253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5253) · [Before (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5253)

```diff
-                   case MB:
+                   case sB:
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L5266-L5269` → after: `L5266-L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5266-L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5266-L5269) · [Before (L5266-L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5266-L5269)

```diff
-                   case SB:
-                     return BB = BB.get(null === QB.key ? zB : QB.key) || null, QB.type === EB ? pB(jB, BB, QB.props.children, nB, QB.key) : UB(jB, BB, QB, nB);
-                   case MB:
-                     return aB(jB, BB = BB.get(null === QB.key ? zB : QB.key) || null, QB, nB)
+                   case QB:
+                     return BB = BB.get(null === TB.key ? ZB : TB.key) || null, TB.type === wB ? hB(IB, BB, TB.props.children, JB, TB.key) : cB(IB, BB, TB, JB);
+                   case sB:
+                     return nB(IB, BB = BB.get(null === TB.key ? ZB : TB.key) || null, TB, JB)
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L5285` → after: `L5285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5285) · [Before (L5285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5285)

```diff
-                 BB && pB && null === kB.alternate && jB(nB, pB), IB = dB(kB, IB, mB), null === aB ? UB = kB : aB.sibling = kB, aB = kB, pB = yB
+                 BB && hB && null === yB.alternate && IB(JB, hB), GB = oB(yB, GB, gB), null === nB ? cB = yB : nB.sibling = yB, nB = yB, hB = qB
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L5289` → after: `L5289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5289) · [Before (L5289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5289)

```diff
-                 for (; mB < NB.length; mB++) null !== (pB = rB(nB, NB[mB], uB)) && (IB = dB(pB, IB, mB), null === aB ? UB = pB : aB.sibling = pB, aB = pB);
+                 for (; gB < vB.length; gB++) null !== (hB = zB(JB, vB[gB], kB)) && (GB = oB(hB, GB, gB), null === nB ? cB = hB : nB.sibling = hB, nB = hB);
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L5292` → after: `L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5292) · [Before (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5292)

```diff
-               for (pB = QB(nB, pB); mB < NB.length; mB++) null !== (yB = JB(pB, nB, mB, NB[mB], uB)) && (BB && null !== yB.alternate && pB.delete(null === yB.key ? mB : yB.key), IB = dB(yB, IB, mB), null === aB ? UB = yB : aB.sibling = yB, aB = yB);
+               for (hB = TB(JB, hB); gB < vB.length; gB++) null !== (qB = NB(hB, JB, gB, vB[gB], kB)) && (BB && null !== qB.alternate && hB.delete(null === qB.key ? gB : qB.key), GB = oB(qB, GB, gB), null === nB ? cB = qB : nB.sibling = qB, nB = qB);
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L5309` → after: `L5309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5309) · [Before (L5309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5309)

```diff
-                 BB && mB && null === LB.alternate && jB(nB, mB), NB = dB(LB, NB, yB), null === pB ? aB = LB : pB.sibling = LB, pB = LB, mB = kB
+                 BB && gB && null === WB.alternate && IB(JB, gB), vB = oB(WB, vB, qB), null === hB ? nB = WB : hB.sibling = WB, hB = WB, gB = yB
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L5313` → after: `L5313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5313) · [Before (L5313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5313)

```diff
-                 for (; !GB.done; yB++, GB = uB.next()) null !== (GB = rB(nB, GB.value, UB)) && (NB = dB(GB, NB, yB), null === pB ? aB = GB : pB.sibling = GB, pB = GB);
+                 for (; !UB.done; qB++, UB = kB.next()) null !== (UB = zB(JB, UB.value, cB)) && (vB = oB(UB, vB, qB), null === hB ? nB = UB : hB.sibling = UB, hB = UB);
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L5316` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5316) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5316)

```diff
-               for (mB = QB(nB, mB); !GB.done; yB++, GB = uB.next()) null !== (GB = JB(mB, nB, yB, GB.value, UB)) && (BB && null !== GB.alternate && mB.delete(null === GB.key ? yB : GB.key), NB = dB(GB, NB, yB), null === pB ? aB = GB : pB.sibling = GB, pB = GB);
+               for (gB = TB(JB, gB); !UB.done; qB++, UB = kB.next()) null !== (UB = NB(gB, JB, qB, UB.value, cB)) && (BB && null !== UB.alternate && gB.delete(null === UB.key ? qB : UB.key), vB = oB(UB, vB, qB), null === hB ? nB = UB : hB.sibling = UB, hB = UB);
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L5326` → after: `L5326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5326) · [Before (L5326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5326)

```diff
-                 case SB:
+                 case QB:
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5347)

```diff
-                 case MB:
+                 case sB:
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L5536` → after: `L5536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5536) · [Before (L5536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5536)

```diff
-             if (mN = dB, yN = jB, jB.memoizedState = null, jB.updateQueue = null, jB.lanes = 0, sN.current = null === BB || null === BB.memoizedState ? vN : RN, BB = zB(QB, nB), gN) {
+             if (Fv = oB, Nv = IB, IB.memoizedState = null, IB.updateQueue = null, IB.lanes = 0, hv.current = null === BB || null === BB.memoizedState ? Ev : Dv, BB = ZB(TB, JB), Uv) {
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L5622` → after: `L5622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5622) · [Before (L5622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5622)

```diff
-               null === uB ? dB = QB : uB.next = NB, kn(QB, jB.memoizedState) || (ju = !0), jB.memoizedState = QB, jB.baseState = dB, jB.baseQueue = uB, zB.lastRenderedState = QB
+               null === kB ? oB = TB : kB.next = vB, yJ(TB, IB.memoizedState) || (Sv = !0), IB.memoizedState = TB, IB.baseState = oB, IB.baseQueue = kB, ZB.lastRenderedState = TB
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L5650` → after: `L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5650) · [Before (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5650)

```diff
-             if (null !== nB ? BB = nB === QB : (BB = BB.mutableReadLanes, (BB = (mN & BB) === BB) && (jB._workInProgressVersionPrimary = QB, pN.push(jB))), BB) return zB(jB._source);
+             if (null !== JB ? BB = JB === TB : (BB = BB.mutableReadLanes, (BB = (Fv & BB) === BB) && (IB._workInProgressVersionPrimary = TB, cv.push(IB))), BB) return ZB(IB._source);
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L5827` → after: `L5827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L5827) · [Before (L5827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L5827)

```diff
-             if (null === IB ? dB.next = dB : (dB.next = IB.next, IB.next = dB), jB.pending = dB, IB = BB.alternate, BB === yN || null !== IB && IB === yN) gN = LN = !0;
+             if (null === GB ? oB.next = oB : (oB.next = GB.next, GB.next = oB), IB.pending = oB, GB = BB.alternate, BB === Nv || null !== GB && GB === Nv) Uv = yv = !0;
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L6029` → after: `L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6029) · [Before (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6029)

```diff
-             return IB = BB.child, 0 === (nB & dB) && (nB = IB.memoizedProps, (zB = null !== (zB = zB.compare) ? zB : Ln)(nB, QB) && BB.ref === jB.ref) ? Eu(BB, jB, dB) : (jB.flags |= 1, (BB = ma(IB, QB)).ref = jB.ref, BB.return = jB, jB.child = BB)
+             return GB = BB.child, 0 === (JB & oB) && (JB = GB.memoizedProps, (ZB = null !== (ZB = ZB.compare) ? ZB : WJ)(JB, TB) && BB.ref === IB.ref) ? sk(BB, IB, oB) : (IB.flags |= 1, (BB = gn(GB, TB)).ref = IB.ref, BB.return = IB, IB.child = BB)
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L6049` → after: `L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6049) · [Before (L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6049)

```diff
-                 if (0 === (1073741824 & zB)) return BB = null !== dB ? dB.baseLanes | zB : zB, jB.lanes = jB.childLanes = 1073741824, jB.memoizedState = {
+                 if (0 === (1073741824 & ZB)) return BB = null !== oB ? oB.baseLanes | ZB : ZB, IB.lanes = IB.childLanes = 1073741824, IB.memoizedState = {
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L6066` → after: `L6066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6066) · [Before (L6066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6066)

```diff
-             var dB = Dd(zB) ? od : qd.current;
+             var oB = io(ZB) ? Oo : so.current;
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L6082` → after: `L6082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6082) · [Before (L6082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6082)

```diff
-               "object" === typeof UB && null !== UB ? UB = tI(UB) : UB = Hd(jB, UB = Dd(zB) ? od : qd.current);
+               "object" === typeof cB && null !== cB ? cB = WG(cB) : cB = Yo(IB, cB = io(ZB) ? Oo : so.current);
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L6089` → after: `L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6089) · [Before (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6089)

```diff
-               IB = jB.stateNode, EI(BB, jB), NB = jB.memoizedProps, UB = jB.type === jB.elementType ? NB : rI(jB.type, NB), IB.props = UB, pB = jB.pendingProps, rB = IB.context, "object" === typeof(uB = zB.contextType) && null !== uB ? uB = tI(uB) : uB = Hd(jB, uB = Dd(zB) ? od : … [truncated]
+               GB = IB.stateNode, QG(BB, IB), vB = IB.memoizedProps, cB = IB.type === IB.elementType ? vB : nG(IB.type, vB), GB.props = cB, hB = IB.pendingProps, zB = GB.context, "object" === typeof(kB = ZB.contextType) && null !== kB ? kB = WG(kB) : kB = Yo(IB, kB = io(ZB) ? Oo : … [truncated]
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L6172` → after: `L6172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6172) · [Before (L6172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6172)

```diff
-               pm: null,
+               Ig: null,
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L6178` → after: `L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6178) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6178)

```diff
-             } : (IB.isBackwards = jB, IB.pm = null, IB.renderingStartTime = 0, IB.last = QB, IB.tail = zB, IB.tailMode = nB, IB.lastEffect = dB)
+             } : (GB.isBackwards = IB, GB.Ig = null, GB.renderingStartTime = 0, GB.last = TB, GB.tail = ZB, GB.tailMode = JB, GB.lastEffect = oB)
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L6336` → after: `L6336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6336) · [Before (L6336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6336)

```diff
-                     switch (UB = 9 === dB.nodeType ? dB : dB.ownerDocument, BB === sj && (BB = mj(zB)), BB === sj ? "script" === zB ? ((BB = UB.createElement("div")).innerHTML = "<script><\/script>", BB = BB.removeChild(BB.firstChild)) : "string" === typeof QB.is ? BB = UB.create … [truncated]
+                     switch (cB = 9 === oB.nodeType ? oB : oB.ownerDocument, BB === FI && (BB = gI(ZB)), BB === FI ? "script" === ZB ? ((BB = cB.createElement("div")).innerHTML = "<script><\/script>", BB = BB.removeChild(BB.firstChild)) : "string" === typeof TB.is ? BB = cB.create … [truncated]
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L6413` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6413) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6413)

```diff
-                   zB = cI(CI.current), cI(xI.current), UN(jB) ? (QB = jB.stateNode, zB = jB.memoizedProps, QB[pd] = jB, QB.nodeValue !== zB && (jB.flags |= 4)) : ((QB = (9 === zB.nodeType ? zB : zB.ownerDocument).createTextNode(QB))[pd] = jB, jB.stateNode = QB)
+                   ZB = bG(tG.current), bG(lG.current), vv(IB) ? (TB = IB.stateNode, ZB = IB.memoizedProps, TB[vo] = IB, TB.nodeValue !== ZB && (IB.flags |= 4)) : ((TB = (9 === ZB.nodeType ? ZB : ZB.ownerDocument).createTextNode(TB))[vo] = IB, IB.stateNode = TB)
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L6424` → after: `L6424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6424) · [Before (L6424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6424)

```diff
-                 if (NB = 0 !== (64 & jB.flags), null === (UB = QB.pm))
+                 if (vB = 0 !== (64 & IB.flags), null === (cB = TB.Ig))
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L6445` → after: `L6445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6445) · [Before (L6445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6445)

```diff
-                   QB.isBackwards ? (UB.sibling = jB.child, jB.child = UB) : (null !== (zB = QB.last) ? zB.sibling = UB : jB.child = UB, QB.last = UB)
+                   TB.isBackwards ? (cB.sibling = IB.child, IB.child = cB) : (null !== (ZB = TB.last) ? ZB.sibling = cB : IB.child = cB, TB.last = cB)
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L6447` → after: `L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6447) · [Before (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6447)

```diff
-                 return null !== QB.tail ? (zB = QB.tail, QB.pm = zB, QB.tail = zB.sibling, QB.lastEffect = jB.lastEffect, QB.renderingStartTime = nI(), zB.sibling = null, jB = BN.current, Ed(BN, NB ? 1 & jB | 2 : 1 & jB), zB) : null;
+                 return null !== TB.tail ? (ZB = TB.tail, TB.Ig = ZB, TB.tail = ZB.sibling, TB.lastEffect = IB.lastEffect, TB.renderingStartTime = ZG(), ZB.sibling = null, IB = VG.current, Co(VG, vB ? 1 & IB | 2 : 1 & IB), ZB) : null;
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L6628` → after: `L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6628) · [Before (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6628)

```diff
-                   jB = (BB = jB.stateNode).getSnapshotBeforeUpdate(jB.elementType === jB.type ? zB : rI(jB.type, zB), QB), BB.__reactInternalSnapshotBeforeUpdate = jB
+                   IB = (BB = IB.stateNode).getSnapshotBeforeUpdate(IB.elementType === IB.type ? ZB : nG(IB.type, ZB), TB), BB.__reactInternalSnapshotBeforeUpdate = IB
```

#### 186. `bundles/bloxd.io/main.js` (Changed code · before: `L6786` → after: `L6786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6786) · [Before (L6786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6786)

```diff
-             16 & zB.flags && (gj(jB, ""), zB.flags &= -17);BB: jB: for (zB = BB;;) {
+             16 & ZB.flags && (dI(IB, ""), ZB.flags &= -17);BB: IB: for (ZB = BB;;) {
```

#### 187. `bundles/bloxd.io/main.js` (Changed code · before: `L6988` → after: `L6988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L6988) · [Before (L6988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L6988)

```diff
-             return 0 !== (48 & Ou) ? nI() : -1 !== oU ? oU : oU = nI()
+             return 0 !== (48 & Vk) ? ZG() : -1 !== ic ? ic : ic = ZG()
```

#### 188. `bundles/bloxd.io/main.js` (Changed code · before: `L7045` → after: `L7045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7045) · [Before (L7045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7045)

```diff
-             if (QB = lz(BB, BB === BU ? zU : 0), jB = Wz, 0 === QB) null !== zB && (zB !== Rd && Wd(zB), BB.callbackNode = null, BB.callbackPriority = 0);
+             if (TB = lZ(BB, BB === Sk ? Ic : 0), IB = uZ, 0 === TB) null !== ZB && (ZB !== Do && Xo(ZB), BB.callbackNode = null, BB.callbackPriority = 0);
```

#### 189. `bundles/bloxd.io/main.js` (Changed code · before: `L7085` → after: `L7085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7085) · [Before (L7085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7085)

```diff
-             var zB = lz(BB, BB === BU ? zU : 0);
+             var ZB = lZ(BB, BB === Sk ? Ic : 0);
```

#### 190. `bundles/bloxd.io/main.js` (Changed code · before: `L7318` → after: `L7318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7318) · [Before (L7318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7318)

```diff
-             return vu.current = bN, null === BB ? bN : BB
+             return Dk.current = xv, null === BB ? xv : BB
```

#### 191. `bundles/bloxd.io/main.js` (Changed code · before: `L7358` → after: `L7358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7358) · [Before (L7358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7358)

```diff
-                 null !== BB && 0 === (2048 & BB.flags) && (null === BB.firstEffect && (BB.firstEffect = jB.firstEffect), null !== jB.lastEffect && (null !== BB.lastEffect && (BB.lastEffect.nextEffect = jB.firstEffect), BB.lastEffect = jB.lastEffect), 1 < jB.flags && (null !== BB. … [truncated]
+                 null !== BB && 0 === (2048 & BB.flags) && (null === BB.firstEffect && (BB.firstEffect = IB.firstEffect), null !== IB.lastEffect && (null !== BB.lastEffect && (BB.lastEffect.nextEffect = IB.firstEffect), BB.lastEffect = IB.lastEffect), 1 < IB.flags && (null !== BB. … [truncated]
```

#### 192. `bundles/bloxd.io/main.js` (Changed code · before: `L7392` → after: `L7392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7392) · [Before (L7392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7392)

```diff
-             if (null !== iU && 0 === (24 & QB) && iU.has(BB) && iU.delete(BB), BB === BU && (jU = BU = null, zU = 0), 1 < zB.flags ? null !== zB.lastEffect ? (zB.lastEffect.nextEffect = zB, QB = zB.firstEffect) : QB = zB : QB = zB.firstEffect, null !== QB) {
+             if (null !== wc && 0 === (24 & TB) && wc.has(BB) && wc.delete(BB), BB === Sk && (Bc = Sk = null, Ic = 0), 1 < ZB.flags ? null !== ZB.lastEffect ? (ZB.lastEffect.nextEffect = ZB, TB = ZB.firstEffect) : TB = ZB : TB = ZB.firstEffect, null !== TB) {
```

#### 193. `bundles/bloxd.io/main.js` (Changed code · before: `L7413` → after: `L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7413) · [Before (L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7413)

```diff
-                   jB: for (;;) {
+                   IB: for (;;) {
```

#### 194. `bundles/bloxd.io/main.js` (Changed code · before: `L7485` → after: `L7485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7485) · [Before (L7485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7485)

```diff
-                 null !== NB && En(LB) && (gB = NB.start, void 0 === (tB = NB.end) && (tB = gB), "selectionStart" in LB ? (LB.selectionStart = gB, LB.selectionEnd = Math.min(tB, LB.value.length)) : (tB = (gB = LB.ownerDocument || document) && gB.defaultView || window).getSelection … [truncated]
+                 null !== vB && wJ(WB) && (dB = vB.start, void 0 === (CB = vB.end) && (CB = dB), "selectionStart" in WB ? (WB.selectionStart = dB, WB.selectionEnd = Math.min(CB, WB.value.length)) : (CB = (dB = WB.ownerDocument || document) && dB.defaultView || window).getSelection … [truncated]
```

#### 195. `bundles/bloxd.io/main.js` (Changed code · before: `L7651` → after: `L7651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7651) · [Before (L7651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7651)

```diff
-               case EB:
+               case wB:
```

#### 196. `bundles/bloxd.io/main.js` (Changed code · before: `L7653` → after: `L7653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7653) · [Before (L7653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7653)

```diff
-               case ZB:
+               case mB:
```

#### 197. `bundles/bloxd.io/main.js` (Changed code · before: `L7656` → after: `L7656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7656) · [Before (L7656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7656)

```diff
-               case iB:
+               case OB:
```

#### 198. `bundles/bloxd.io/main.js` (Changed code · before: `L7659` → after: `L7659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7659) · [Before (L7659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7659)

```diff
-               case qB:
+               case YB:
```

#### 199. `bundles/bloxd.io/main.js` (Changed code · before: `L7661` → after: `L7661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7661) · [Before (L7661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7661)

```diff
-               case DB:
+               case HB:
```

#### 200. `bundles/bloxd.io/main.js` (Changed code · before: `L7663` → after: `L7663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7663) · [Before (L7663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7663)

```diff
-               case FB:
+               case MB:
```

#### 201. `bundles/bloxd.io/main.js` (Changed code · before: `L7665` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7665) · [Before (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7665)

```diff
-               case AB:
+               case XB:
```

#### 202. `bundles/bloxd.io/main.js` (Changed code · before: `L7667` → after: `L7667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7667) · [Before (L7667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7667)

```diff
-               case TB:
+               case LB:
```

#### 203. `bundles/bloxd.io/main.js` (Changed code · before: `L7671` → after: `L7671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7671) · [Before (L7671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7671)

```diff
-                   case fB:
+                   case iB:
```

#### 204. `bundles/bloxd.io/main.js` (Changed code · before: `L7674` → after: `L7674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7674) · [Before (L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7674)

```diff
-                   case oB:
+                   case pB:
```

#### 205. `bundles/bloxd.io/main.js` (Changed code · before: `L7677` → after: `L7677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7677) · [Before (L7677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7677)

```diff
-                   case HB:
+                   case aB:
```

#### 206. `bundles/bloxd.io/main.js` (Changed code · before: `L7680` → after: `L7680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7680) · [Before (L7680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7680)

```diff
-                   case YB:
+                   case jB:
```

#### 207. `bundles/bloxd.io/main.js` (Changed code · before: `L7683` → after: `L7683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7683) · [Before (L7683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7683)

```diff
-                   case VB:
+                   case PB:
```

#### 208. `bundles/bloxd.io/main.js` (Changed code · before: `L7686` → after: `L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7686) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7686)

```diff
-                   case hB:
+                   case RB:
```

#### 209. `bundles/bloxd.io/main.js` (Changed code · before: `L7724` → after: `L7724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7724) · [Before (L7724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7724)

```diff
-               jB: {
+               IB: {
```

#### 210. `bundles/bloxd.io/main.js` (Changed code · before: `L7751` → after: `L7751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7751) · [Before (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7751)

```diff
-             return null === jB.context ? jB.context = zB : jB.pendingContext = zB, (jB = iI(dB, NB)).payload = {
+             return null === IB.context ? IB.context = ZB : IB.pendingContext = ZB, (IB = sG(oB, vB)).payload = {
```

#### 211. `bundles/bloxd.io/main.js` (Changed code · before: `L7763` → after: `L7763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7763) · [Before (L7763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7763)

```diff
-               BB.retryLane = 0 !== zB && zB < jB ? zB : jB
+               BB.retryLane = 0 !== ZB && ZB < IB ? ZB : IB
```

#### 212. `bundles/bloxd.io/main.js` (Changed code · before: `L7865` → after: `L7865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7865) · [Before (L7865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7865)

```diff
-                       if (null !== (nB = jB.memoizedState) && (nB.pm = null, nB.tail = null, nB.lastEffect = null), Ed(BN, BN.current), QB) break;
+                       if (null !== (JB = IB.memoizedState) && (JB.Ig = null, JB.tail = null, JB.lastEffect = null), Co(VG, VG.current), TB) break;
```

#### 213. `bundles/bloxd.io/main.js` (Changed code · before: `L7916` → after: `L7916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7916) · [Before (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7916)

```diff
-                 return QB = jB.type, nB = jB.pendingProps, uu(BB, jB, QB, nB = jB.elementType === QB ? nB : rI(QB, nB), zB);
+                 return TB = IB.type, JB = IB.pendingProps, vk(BB, IB, TB, JB = IB.elementType === TB ? JB : nG(TB, JB), ZB);
```

#### 214. `bundles/bloxd.io/main.js` (Changed code · before: `L7918` → after: `L7918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7918) · [Before (L7918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7918)

```diff
-                 return QB = jB.type, nB = jB.pendingProps, Uu(BB, jB, QB, nB = jB.elementType === QB ? nB : rI(QB, nB), zB);
+                 return TB = IB.type, JB = IB.pendingProps, kk(BB, IB, TB, JB = IB.elementType === TB ? JB : nG(TB, JB), ZB);
```

#### 215. `bundles/bloxd.io/main.js` (Changed code · before: `L7940` → after: `L7940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7940) · [Before (L7940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7940)

```diff
-                 return QB = jB.type, nB = jB.pendingProps, Qu(BB, jB, QB, nB = jB.elementType === QB ? nB : rI(QB, nB), zB);
+                 return TB = IB.type, JB = IB.pendingProps, Ik(BB, IB, TB, JB = IB.elementType === TB ? JB : nG(TB, JB), ZB);
```

#### 216. `bundles/bloxd.io/main.js` (Changed code · before: `L7998` → after: `L7998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L7998) · [Before (L7998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L7998)

```diff
-                 return QB = jB.type, nB = jB.pendingProps, nB = jB.elementType === QB ? nB : rI(QB, nB), null !== BB && (BB.alternate = null, jB.alternate = null, jB.flags |= 2), jB.tag = 1, Dd(QB) ? (BB = !0, hd(jB)) : BB = !1, gI(jB, zB), hI(jB, QB, nB), ZI(jB, QB, nB, zB), au( … [truncated]
+                 return TB = IB.type, JB = IB.pendingProps, JB = IB.elementType === TB ? JB : nG(TB, JB), null !== BB && (BB.alternate = null, IB.alternate = null, IB.flags |= 2), IB.tag = 1, io(TB) ? (BB = !0, Mo(IB)) : BB = !1, UG(IB, ZB), jG(IB, TB, JB), RG(IB, TB, JB, ZB), ck( … [truncated]
```

#### 217. `bundles/bloxd.io/main.js` (Changed code · before: `L8155-L8157` → after: `L8155-L8157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8155-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8155-L8157) · [Before (L8155-L8157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8155-L8157)

```diff
-         }, , (BB, jB, zB) => {
-           BB.exports = zB(99)
-         }, , , , , , , , , (BB, jB) => {
+         }, , , , , , , , , (BB, IB, ZB) => {
+           BB.exports = ZB(102)
+         }, , , , , , , , (BB, IB) => {
```

#### 218. `bundles/bloxd.io/main.js` (Changed code · before: `L8271` → after: `L8271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8271) · [Before (L8271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8271)

```diff
-             return 0 !== zB ? zB : BB.id - jB.id
+             return 0 !== ZB ? ZB : BB.id - IB.id
```

#### 219. `bundles/bloxd.io/main.js` (Changed code · before: `L8311` → after: `L8311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8311) · [Before (L8311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8311)

```diff
-                   zB = jB.unstable_now(), "function" === typeof NB ? HB.callback = NB : HB === MB(qB) && EB(qB), hB(zB)
+                   ZB = IB.unstable_now(), "function" === typeof vB ? aB.callback = vB : aB === sB(YB) && wB(YB), RB(ZB)
```

#### 220. `bundles/bloxd.io/main.js` (Changed code · before: `L8371` → after: `L8371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8371) · [Before (L8371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8371)

```diff
-             switch ("object" === typeof IB && null !== IB ? IB = "number" === typeof(IB = IB.delay) && 0 < IB ? NB + IB : NB : IB = NB, BB) {
+             switch ("object" === typeof GB && null !== GB ? GB = "number" === typeof(GB = GB.delay) && 0 < GB ? vB + GB : vB : GB = vB, BB) {
```

#### 221. `bundles/bloxd.io/main.js` (Changed code · before: `L8407` → after: `L8407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8407) · [Before (L8407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8407)

```diff
-         }, , , , , , , (BB, jB, zB) => {
+         }, , , (BB, IB, ZB) => {
```

#### 222. `bundles/bloxd.io/main.js` (Changed code · before: `L8447-L8449` → after: `L8447-L8449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8447-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8447-L8449) · [Before (L8447-L8449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8447-L8449)

```diff
-           var QB = zB(194),
-             nB = zB(214),
-             dB = zB(112),
+           var TB = ZB(190),
+             JB = ZB(201),
+             oB = ZB(110),
```

#### 223. `bundles/bloxd.io/main.js` (Changed code · before: `L8452-L8459` → after: `L8453-L8459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8453-L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8453-L8459) · [Before (L8452-L8459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8452-L8459)

```diff
-             uB = zB(125),
-             UB = zB(128),
-             aB = zB(41),
-             pB = zB(145),
-             rB = zB(181),
-             sB = zB(184),
-             JB = zB(140);
-           pB.subsiteUsed && !pB.subsiteUsedData[pB.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${pB.subsiteUsed} but it is not enabled`);
+             cB = ZB(129),
+             nB = ZB(36),
+             hB = ZB(140),
+             zB = ZB(175),
+             FB = ZB(179),
+             NB = ZB(138);
+           hB.subsiteUsed && !hB.subsiteUsedData[hB.subsiteUsed].enabled && console.error(`Selected subsiteUsed ${hB.subsiteUsed} but it is not enabled`);
```

#### 224. `bundles/bloxd.io/main.js` (Changed code · before: `L8467` → after: `L8467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8467) · [Before (L8467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8467)

```diff
-             return [`Browser: ${GB()}`, `Version: ${LB()}`, `Platform: ${navigator.platform}`, `Platform Type: ${qB()}`, `Input Type: ${(0,uB.c)()}`].join(BB)
+             return [`Browser: ${UB()}`, `Version: ${WB()}`, `Platform: ${navigator.platform}`, `Platform Type: ${YB()}`, `Input Type: ${(0,kB.e)()}`].join(BB)
```

#### 225. `bundles/bloxd.io/main.js` (Changed code · before: `L8495` → after: `L8495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8495) · [Before (L8495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8495)

```diff
-             return yB().getPlatformType() || ("touchOnly" === (0, uB.c)() ? "tablet" : "desktop")
+             return qB().getPlatformType() || ("touchOnly" === (0, kB.e)() ? "tablet" : "desktop")
```

#### 226. `bundles/bloxd.io/main.js` (Changed code · before: `L8514` → after: `L8514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8514) · [Before (L8514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8514)

```diff
-             return "macos" === BB && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== BB || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, uB.c)() ? QB.z.includes(BB) ? BB : "other" : "android"
+             return "macos" === BB && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== BB || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, kB.e)() ? TB.C.includes(BB) ? BB : "other" : "android"
```

#### 227. `bundles/bloxd.io/main.js` (Changed code · before: `L8527` → after: `L8527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8527) · [Before (L8527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8527)

```diff
-             return QB.H.includes(BB) ? BB : "other"
+             return TB.Q.includes(BB) ? BB : "other"
```

#### 228. `bundles/bloxd.io/main.js` (Changed code · before: `L8532` → after: `L8532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8532) · [Before (L8532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8532)

```diff
-             return !XB() && ("mobile" === BB || "tablet" === BB || "touchOnly" === (0, uB.c)() || NB.currentUrl.hasSearchParam("mobile"))
+             return !rB() && ("mobile" === BB || "tablet" === BB || "touchOnly" === (0, kB.e)() || vB.currentUrl.hasSearchParam("mobile"))
```

#### 229. `bundles/bloxd.io/main.js` (Changed code · before: `L8544` → after: `L8544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8544) · [Before (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8544)

```diff
-             return (0, QB.p)(pB.siteUsed)
+             return (0, TB.y)(hB.siteUsed)
```

#### 230. `bundles/bloxd.io/main.js` (Changed code · before: `L8548` → after: `L8548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8548) · [Before (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8548)

```diff
-             return DB() || "mouseOnly" !== (0, uB.c)() || navigator.maxTouchPoints > 0
+             return HB() || "mouseOnly" !== (0, kB.e)() || navigator.maxTouchPoints > 0
```

#### 231. `bundles/bloxd.io/main.js` (Changed code · before: `L8563-L8564` → after: `L8563-L8564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8563-L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8563-L8564) · [Before (L8563-L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8563-L8564)

```diff
-               useRecaptcha: !nB.e.recaptchaDisabled && !(0, pB.isDiscordClient)(),
-               useTurnstile: !nB.e.turnstileDisabled && !(0, pB.isDiscordClient)() && "mobileIos" !== pB.siteUsed && !rB.c,
+               useRecaptcha: !JB.f.recaptchaDisabled && !(0, hB.isDiscordClient)(),
+               useTurnstile: !JB.f.turnstileDisabled && !(0, hB.isDiscordClient)() && "mobileIos" !== hB.siteUsed && !zB.b,
```

#### 232. `bundles/bloxd.io/main.js` (Changed code · before: `L8616-L8617` → after: `L8616-L8617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8616-L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8616-L8617) · [Before (L8616-L8617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8616-L8617)

```diff
-               const BB = (0, JB.m)();
-               return void 0 === BB ? "not_probed" : (0, sB.c)(BB)
+               const BB = (0, NB.n)();
+               return void 0 === BB ? "not_probed" : (0, FB.e)(BB)
```

#### 233. `bundles/bloxd.io/main.js` (Changed code · before: `L8619` → after: `L8619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8619) · [Before (L8619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8619)

```diff
-             return RB ??= (0, sB.c)((0, JB.t)()), RB
+             return VB ??= (0, FB.e)((0, NB.q)()), VB
```

#### 234. `bundles/bloxd.io/main.js` (Changed code · before: `L8648` → after: `L8648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8648) · [Before (L8648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8648)

```diff
-             const QB = null !== (BB = null !== (jB = eB) && void 0 !== jB ? jB : null === (zB = (0, JB.t)()) || void 0 === zB ? void 0 : zB.vendor) && void 0 !== BB ? BB : null;
+             const TB = null !== (BB = null !== (IB = fB) && void 0 !== IB ? IB : null === (ZB = (0, NB.q)()) || void 0 === ZB ? void 0 : ZB.vendor) && void 0 !== BB ? BB : null;
```

#### 235. `bundles/bloxd.io/main.js` (Changed code · before: `L8655` → after: `L8655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8655) · [Before (L8655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8655)

```diff
-               const QB = null !== (BB = null !== (jB = eB) && void 0 !== jB ? jB : null === (zB = (0, JB.m)()) || void 0 === zB ? void 0 : zB.vendor) && void 0 !== BB ? BB : null;
+               const TB = null !== (BB = null !== (IB = fB) && void 0 !== IB ? IB : null === (ZB = (0, NB.n)()) || void 0 === ZB ? void 0 : ZB.vendor) && void 0 !== BB ? BB : null;
```

#### 236. `bundles/bloxd.io/main.js` (Changed code · before: `L8686` → after: `L8686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8686) · [Before (L8686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8686)

```diff
-               const jB = await (0, UB.B)(BB);
+               const IB = await (0, cB.z)(BB);
```

#### 237. `bundles/bloxd.io/main.js` (Changed code · before: `L8691` → after: `L8691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8691) · [Before (L8691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8691)

```diff
-               return aB.j.setItem(UB.L, (0, UB.g)(zB)), aB.j.setItem(UB.I, (0, UB.p)(zB)), "usable"
+               return nB.m.setItem(cB.H, (0, cB.f)(ZB)), nB.m.setItem(cB.G, (0, cB.o)(ZB)), "usable"
```

#### 238. `bundles/bloxd.io/main.js` (Changed code · before: `L8705` → after: `L8705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8705) · [Before (L8705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8705)

```diff
-                     for (let QB, nB, dB = 0, IB = 0; nB = BB.charAt(IB++); ~nB && (QB = dB % 4 ? 64 * QB + nB : nB, dB++ % 4) ? jB += String.fromCharCode(255 & QB >> (-2 * dB & 6)) : 0) nB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(nB);
+                     for (let TB, JB, oB = 0, GB = 0; JB = BB.charAt(GB++); ~JB && (TB = oB % 4 ? 64 * TB + JB : JB, oB++ % 4) ? IB += String.fromCharCode(255 & TB >> (-2 * oB & 6)) : 0) JB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(JB);
```

#### 239. `bundles/bloxd.io/main.js` (Changed code · before: `L8712` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8712) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8712)

```diff
-                 return IB ? nB = IB : (nB = rj.kGdYVv(nB), BB[dB] = nB), nB
+                 return GB ? JB = GB : (JB = zI.kGdYVv(JB), BB[oB] = JB), JB
```

#### 240. `bundles/bloxd.io/main.js` (Changed code · before: `L8733` → after: `L8733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8733) · [Before (L8733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8733)

```diff
-                 BB = null !== (jB = BB) && void 0 !== jB ? jB : "";
+                 BB = null !== (IB = BB) && void 0 !== IB ? IB : "";
```

#### 241. `bundles/bloxd.io/main.js` (Changed code · before: `L8737` → after: `L8737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8737) · [Before (L8737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8737)

```diff
-                   zB += (null !== (QB = BB[nB]) && void 0 !== QB ? QB : nB.toString()).charCodeAt(0).toString(32)
+                   ZB += (null !== (TB = BB[JB]) && void 0 !== TB ? TB : JB.toString()).charCodeAt(0).toString(32)
```

#### 242. `bundles/bloxd.io/main.js` (Changed code · before: `L8741` → after: `L8741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8741) · [Before (L8741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8741)

```diff
-               mj = zB(250).shouldUseUkPrivacyPolicy;
+               gI = ZB(233).shouldUseUkPrivacyPolicy;
```

#### 243. `bundles/bloxd.io/main.js` (Changed code · before: `L8744` → after: `L8744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L8744) · [Before (L8744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L8744)

```diff
-         }, , , , , , function(BB) {
+         }, , , , , function(BB) {
```

#### 244. `bundles/bloxd.io/main.js` (Changed code · before: `L9026` → after: `L9026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L9026) · [Before (L9026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L9026)

```diff
-               var QB, nB = (QB = zB(91)) && QB.__esModule ? QB : {
+               var TB, JB = (TB = ZB(91)) && TB.__esModule ? TB : {
```

#### 245. `bundles/bloxd.io/main.js` (Changed code · before: `L9144` → after: `L9144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L9144) · [Before (L9144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L9144)

```diff
-                 }, jB.wJ = function() {
+                 }, IB.PN = function() {
```

#### 246. `bundles/bloxd.io/main.js` (Changed code · before: `L9147` → after: `L9147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L9147) · [Before (L9147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L9147)

```diff
-                   return BB ? String(this.wJ().name).toLowerCase() || "" : this.wJ().name || ""
+                   return BB ? String(this.PN().name).toLowerCase() || "" : this.PN().name || ""
```

#### 247. `bundles/bloxd.io/main.js` (Changed code · before: `L9227` → after: `L9227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L9227) · [Before (L9227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L9227)

```diff
-               var QB, nB = (QB = zB(17)) && QB.__esModule ? QB : {
+               var TB, JB = (TB = ZB(17)) && TB.__esModule ? TB : {
```

#### 248. `bundles/bloxd.io/main.js` (Changed code · before: `L9627` → after: `L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L9627) · [Before (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L9627)

```diff
-               var QB, nB = (QB = zB(17)) && QB.__esModule ? QB : {
+               var TB, JB = (TB = ZB(17)) && TB.__esModule ? TB : {
```

#### 249. `bundles/bloxd.io/main.js` (Changed code · before: `L9768` → after: `L9768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L9768) · [Before (L9768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L9768)

```diff
-               var QB, nB = (QB = zB(17)) && QB.__esModule ? QB : {
+               var TB, JB = (TB = ZB(17)) && TB.__esModule ? TB : {
```

#### 250. `bundles/bloxd.io/main.js` (Changed code · before: `L9968` → after: `L9968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L9968) · [Before (L9968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L9968)

```diff
-               var QB, nB = (QB = zB(17)) && QB.__esModule ? QB : {
+               var TB, JB = (TB = ZB(17)) && TB.__esModule ? TB : {
```

#### 251. `bundles/bloxd.io/main.js` (Changed code · before: `L10039` → after: `L10039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10039) · [Before (L10039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10039)

```diff
-         }, , , , , , , , , (BB, jB, zB) => {
+         }, , , , , , , , (BB, IB, ZB) => {
```

#### 252. `bundles/bloxd.io/main.js` (Changed code · before: `L10078` → after: `L10078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10078) · [Before (L10078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10078)

```diff
-                 NB = nB.pathname + (IB ? `?${IB}` : "") + nB.hash;
+                 vB = JB.pathname + (GB ? `?${GB}` : "") + JB.hash;
```

#### 253. `bundles/bloxd.io/main.js` (Changed code · before: `L10095` → after: `L10095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10095) · [Before (L10095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10095)

```diff
-                     for (let QB, nB, dB = 0, IB = 0; nB = BB.charAt(IB++); ~nB && (QB = dB % 4 ? 64 * QB + nB : nB, dB++ % 4) ? jB += String.fromCharCode(255 & QB >> (-2 * dB & 6)) : 0) nB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(nB);
+                     for (let TB, JB, oB = 0, GB = 0; JB = BB.charAt(GB++); ~JB && (TB = oB % 4 ? 64 * TB + JB : JB, oB++ % 4) ? IB += String.fromCharCode(255 & TB >> (-2 * oB & 6)) : 0) JB = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(JB);
```

#### 254. `bundles/bloxd.io/main.js` (Changed code · before: `L10102` → after: `L10102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10102) · [Before (L10102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10102)

```diff
-                 return NB ? nB = NB : (nB = dB.TgIWQA(nB), BB[IB] = nB), nB
+                 return vB ? JB = vB : (JB = oB.TgIWQA(JB), BB[GB] = JB), JB
```

#### 255. `bundles/bloxd.io/main.js` (Changed code · before: `L10141` → after: `L10141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10141) · [Before (L10141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10141)

```diff
-         }, , , , (BB, jB, zB) => {
+         }, , , (BB, IB, ZB) => {
```

#### 256. `bundles/bloxd.io/main.js` (Changed code · before: `L10143` → after: `L10143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10143) · [Before (L10143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10143)

```diff
-             c: () => mB
+             e: () => gB
```

#### 257. `bundles/bloxd.io/main.js` (Changed code · before: `L10173` → after: `L10173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10173) · [Before (L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10173)

```diff
-         }, , , (BB, jB, zB) => {
+         }, , , , , , , , (BB, IB, ZB) => {
```

#### 258. `bundles/bloxd.io/main.js` (Changed code · before: `L10178` → after: `L10178-L10179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10178-L10179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10178-L10179) · [Before (L10178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10178)

```diff
-             I: () => sB,
+             H: () => hB,
+             K: () => yB,
```

#### 259. `bundles/bloxd.io/main.js` (Changed code · before: `L10180-L10189` → after: `L10181-L10189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10181-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10181-L10189) · [Before (L10180-L10189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10180-L10189)

```diff
-             P: () => kB,
-             Q: () => mB,
-             d: () => GB,
-             g: () => IB,
-             i: () => UB,
-             m: () => aB,
-             p: () => NB,
-             s: () => uB,
-             v: () => rB,
-             x: () => dB.l
+             b: () => UB,
+             f: () => GB,
+             j: () => cB,
+             n: () => nB,
+             o: () => vB,
+             q: () => kB,
+             u: () => zB,
+             w: () => oB.l,
+             z: () => oB.o
```

#### 260. `bundles/bloxd.io/main.js` (Changed code · before: `L10191` → after: `L10191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10191) · [Before (L10191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10191)

```diff
-           var QB = zB(112),
+           var TB = ZB(110),
```

#### 261. `bundles/bloxd.io/main.js` (Changed code · before: `L10209` → after: `L10209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10209) · [Before (L10209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10209)

```diff
-             let QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (jB = null === (zB = globalThis.navigator) || void 0 === zB ? void 0 : zB.userAgent) && void 0 !== jB ? jB : "";
+             let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (IB = null === (ZB = globalThis.navigator) || void 0 === ZB ? void 0 : ZB.userAgent) && void 0 !== IB ? IB : "";
```

#### 262. `bundles/bloxd.io/main.js` (Changed code · before: `L10215` → after: `L10215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10215) · [Before (L10215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10215)

```diff
-             let QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (jB = null === (zB = globalThis.navigator) || void 0 === zB ? void 0 : zB.userAgent) && void 0 !== jB ? jB : "";
+             let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (IB = null === (ZB = globalThis.navigator) || void 0 === ZB ? void 0 : ZB.userAgent) && void 0 !== IB ? IB : "";
```

#### 263. `bundles/bloxd.io/main.js` (Changed code · before: `L10221` → after: `L10221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10221) · [Before (L10221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10221)

```diff
-             let QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (jB = null === (zB = globalThis.navigator) || void 0 === zB ? void 0 : zB.userAgent) && void 0 !== jB ? jB : "";
+             let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (IB = null === (ZB = globalThis.navigator) || void 0 === ZB ? void 0 : ZB.userAgent) && void 0 !== IB ? IB : "";
```

#### 264. `bundles/bloxd.io/main.js` (Changed code · before: `L10232` → after: `L10232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10232) · [Before (L10232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10232)

```diff
-         }, , , , (BB, jB, zB) => {
+         }, , , (BB, IB, ZB) => {
```

#### 265. `bundles/bloxd.io/main.js` (Changed code · before: `L10238` → after: `L10238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10238) · [Before (L10238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10238)

```diff
-             m: () => nB
+             o: () => JB
```

#### 266. `bundles/bloxd.io/main.js` (Changed code · before: `L10240` → after: `L10240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/main.js#L10240) · [Before (L10240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/main.js#L10240)

```diff
-           var QB = zB(140);
+           var TB = ZB(138);
```
