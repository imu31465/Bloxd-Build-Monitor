# Changed — Bundle Modifications Report (Part 095 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `95 / 99` (**407** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 094](part-094.md) · [Part 096 →](part-096.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (1188 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed)

#### 1024. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10645` → after: `L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10645) · [Before (L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10645)

```diff
-                   JM = !0, EM < UM && QM.push(GM, CM, EM + 1, UM, lM.topwaterBlockType), lM.hasScatteredLakes && 1 === iM.getOrGenerate(dM, yM, jM.f.IsLake) && (this.random.reseed(`${dM}|${yM}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(dM, yM, iM) && LM … [truncated]
+                   aU = !0, GU < BU && DU.push(ZU, RU, GU + 1, BU, kU.topwaterBlockType), kU.hasScatteredLakes && 1 === zU.getOrGenerate(tU, gU, QU.c.IsLake) && (this.random.reseed(`${tU}|${gU}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(tU, gU, zU) && YU … [truncated]
```

#### 1025. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10649-L10650` → after: `L10649-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650) · [Before (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650)

```diff
-                 if (lM.hasScatteredLakes && this.isBesideLake(dM, yM, iM) && (this.random.reseed(`${dM}|${yM}|${this.seed}oasisShore`), this.random.next() < .85 && (zM.push(GM, EM, CM), eM = this.biomeSelector.baseBiome.floraGenerator)), !nM.c.isInCave(dM, EM, yM, OM) && !tM.e.is … [truncated]
-                   for (let iM = EM + 1; iM <= EM + lM.maxFloraHeight; iM += this.HL) mM.startY = iM, eM.addBiomeFloraToColumn(mM, MM, rM, dM, iM, yM, EM)
+                 if (kU.hasScatteredLakes && this.isBesideLake(tU, gU, zU) && (this.random.reseed(`${tU}|${gU}|${this.seed}oasisShore`), this.random.next() < .85 && (EU.push(ZU, GU, RU), PU = this.biomeSelector.baseBiome.floraGenerator)), !oU.e.isInCave(tU, GU, gU, cU) && !LU.b.is … [truncated]
+                   for (let zU = GU + 1; zU <= GU + kU.maxFloraHeight; zU += this.aY) NU.startY = zU, PU.addBiomeFloraToColumn(NU, UU, XU, tU, zU, gU, GU)
```

#### 1026. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10663)

```diff
-             return iM.getOrGenerate(MM + 1, rM, jM.f.WaterHeight) !== aM.s && iM.getOrGenerate(MM - 1, rM, jM.f.WaterHeight) !== aM.s && iM.getOrGenerate(MM, rM + 1, jM.f.WaterHeight) !== aM.s && iM.getOrGenerate(MM, rM - 1, jM.f.WaterHeight) !== aM.s
+             return zU.getOrGenerate(UU + 1, XU, QU.c.WaterHeight) !== AU.s && zU.getOrGenerate(UU - 1, XU, QU.c.WaterHeight) !== AU.s && zU.getOrGenerate(UU, XU + 1, QU.c.WaterHeight) !== AU.s && zU.getOrGenerate(UU, XU - 1, QU.c.WaterHeight) !== AU.s
```

#### 1027. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10669` → after: `L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10669) · [Before (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10669)

```diff
-             return iM.getOrGenerate(MM, rM, jM.f.WaterHeight) !== aM.s && 1 === iM.getOrGenerate(MM, rM, jM.f.IsLake)
+             return zU.getOrGenerate(UU, XU, QU.c.WaterHeight) !== AU.s && 1 === zU.getOrGenerate(UU, XU, QU.c.IsLake)
```

#### 1028. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10672` → after: `L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10672) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10672)

```diff
-         var Xr = iM(40790);
+         var xX = zU(40793);
```

#### 1029. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10677) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-             if (this.HL = MM, this.hashChunkContents = LM, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.aY = UU, this.hashChunkContents = YU, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 1030. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10679` → after: `L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10679) · [Before (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10679)

```diff
-               Ir = new Jr.c("chunk columns", MM, 4e4)
+               JX = new aX.b("chunk columns", UU, 4e4)
```

#### 1031. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10681-L10682` → after: `L10681-L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682) · [Before (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682)

```diff
-             this.chunkColumnInfos = Ir.partition(), this.caveGenerator = new nM.c(SM, MM, rM, null !== (mM = null === QM || void 0 === QM ? void 0 : QM.cS.rj) && void 0 !== mM ? mM : "Lava");
-             const EM = new br(rM, SM, MM, null !== (HM = null === QM || void 0 === QM ? void 0 : QM.Gj) && void 0 !== HM ? HM : [...er, ...null !== (hM = null === zM || void 0 === zM ? void 0 : zM.Rj) && void 0 !== hM ? hM : []]),
+             this.chunkColumnInfos = JX.partition(), this.caveGenerator = new oU.e(yU, UU, XU, null !== (NU = null === DU || void 0 === DU ? void 0 : DU.jy.Ty) && void 0 !== NU ? NU : "Lava");
+             const GU = new WX(XU, yU, UU, null !== (IU = null === DU || void 0 === DU ? void 0 : DU.GQ) && void 0 !== IU ? IU : [...PX, ...null !== (pU = null === EU || void 0 === EU ? void 0 : EU.CQ) && void 0 !== pU ? pU : []]),
```

#### 1032. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10684` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10684) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10684)

```diff
-                 HL: MM,
+                 aY: UU,
```

#### 1033. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10692-L10695` → after: `L10692-L10695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695) · [Before (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695)

```diff
-               GM = null !== (JM = null === QM || void 0 === QM ? void 0 : QM.Jj) && void 0 !== JM ? JM : null,
-               CM = null !== (dM = null === zM || void 0 === zM ? void 0 : zM.buildBiomes) && void 0 !== dM ? dM : null,
-               eM = null !== GM ? (0, wr.c)(GM, UM) : null !== CM ? this.buildTerrainBiomes(CM, UM) : (0, wr.g)(UM);
-             this.biomeSelector = new wr.b(this, EM, SM, MM, rM, eM), this.treeGenerator = new Hr(this, this.biomeSelector, MM, SM, rM), this.fixedPointPrefabTracker = new tM.e(PM, MM), this.prefabGenerator = new Sr({
+               ZU = null !== (aU = null === DU || void 0 === DU ? void 0 : DU.IQ) && void 0 !== aU ? aU : null,
+               RU = null !== (tU = null === EU || void 0 === EU ? void 0 : EU.buildBiomes) && void 0 !== tU ? tU : null,
+               PU = null !== ZU ? (0, dX.h)(ZU, BU) : null !== RU ? this.buildTerrainBiomes(RU, BU) : (0, dX.i)(BU);
+             this.biomeSelector = new dX.d(this, GU, yU, UU, XU, PU), this.treeGenerator = new IX(this, this.biomeSelector, UU, yU, XU), this.fixedPointPrefabTracker = new LU.b(FU, UU), this.prefabGenerator = new yX({
```

#### 1034. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10697` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10697) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10697)

```diff
-               HL: MM,
+               aY: UU,
```

#### 1035. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10701` → after: `L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10701) · [Before (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10701)

```diff
-                 [jM.o.SURFACE]: {
+                 [QU.l.SURFACE]: {
```

#### 1036. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10703` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10703) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10703)

```diff
-                     [jM.l.MEDIUM]: {
+                     [QU.h.MEDIUM]: {
```

#### 1037. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10706` → after: `L10706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10706) · [Before (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10706)

```diff
-                     [jM.l.HIGH]: {
+                     [QU.h.HIGH]: {
```

#### 1038. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10709` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10709) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10709)

```diff
-                     [jM.l.VERY_HIGH]: {
+                     [QU.h.VERY_HIGH]: {
```

#### 1039. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10714) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-                 [jM.o.UNDERGROUND]: {
+                 [QU.l.UNDERGROUND]: {
```

#### 1040. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10716` → after: `L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10716) · [Before (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10716)

```diff
-                     [jM.l.MEDIUM]: {
+                     [QU.h.MEDIUM]: {
```

#### 1041. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10719-L10720` → after: `L10719-L10720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720) · [Before (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720)

```diff
-                     [jM.l.HIGH]: null,
-                     [jM.l.VERY_HIGH]: null
+                     [QU.h.HIGH]: null,
+                     [QU.h.VERY_HIGH]: null
```

#### 1042. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10725` → after: `L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10725) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10725)

```diff
-             }), this.noWaterHeightmapGenerator = new Xr.e((0, Xr.g)(SM)), this.heightmapPerturb = new OM.i([{
+             }), this.noWaterHeightmapGenerator = new xX.e((0, xX.f)(yU)), this.heightmapPerturb = new cU.k([{
```

#### 1043. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10734` → after: `L10734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10734) · [Before (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10734)

```diff
-             }], `${SM}HeightmapPerturb`);
+             }], `${yU}HeightmapPerturb`);
```

#### 1044. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10740` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10740) · [Before (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10740)

```diff
-             this.waterBodyGenerator = new Ur(this.biomeSelector, this.noWaterHeightmapGenerator, SM, MM, bM, this.needOutsideWaterDist, aM, null === (yM = null === QM || void 0 === QM ? void 0 : QM.VS) || void 0 === yM || yM), this.caveDecorationGenerator = new Ar(rM, MM, SM, nul … [truncated]
+             this.waterBodyGenerator = new BX(this.biomeSelector, this.noWaterHeightmapGenerator, yU, UU, WU, this.needOutsideWaterDist, AU, null === (gU = null === DU || void 0 === DU ? void 0 : DU.Jy) || void 0 === gU || gU), this.caveDecorationGenerator = new VX(XU, UU, yU, nul … [truncated]
```

#### 1045. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10759` → after: `L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10759) · [Before (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10759)

```diff
-             const iM = this.HL,
+             const zU = this.aY,
```

#### 1046. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10777)

```diff
-               if ((null !== (SM = OM.get(jM.key)) && void 0 !== SM ? SM : jM) !== jM) throw new Error(`A world-gen terrain built two biomes keyed "${jM.key}"`);
+               if ((null !== (yU = cU.get(QU.key)) && void 0 !== yU ? yU : QU) !== QU) throw new Error(`A world-gen terrain built two biomes keyed "${QU.key}"`);
```

#### 1047. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10787-L10788` → after: `L10787-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788) · [Before (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788)

```diff
-               const MM = `${Math.floor(nM.x/this.HL)}|${Math.floor(nM.z/this.HL)}`,
-                 rM = null !== (aM = jM.get(MM)) && void 0 !== aM ? aM : [];
+               const UU = `${Math.floor(oU.x/this.aY)}|${Math.floor(oU.z/this.aY)}`,
+                 XU = null !== (AU = QU.get(UU)) && void 0 !== AU ? AU : [];
```

#### 1048. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10793-L10794` → after: `L10793-L10794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794) · [Before (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794)

```diff
-               const MM = Math.floor(nM[0].x / this.HL) * this.HL,
-                 rM = Math.floor(nM[0].z / this.HL) * this.HL,
+               const UU = Math.floor(oU[0].x / this.aY) * this.aY,
+                 XU = Math.floor(oU[0].z / this.aY) * this.aY,
```

#### 1049. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10815)

```diff
-                   xS: QM.prefab.name
+                   My: DU.prefab.name
```

#### 1050. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10848) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-               zM = OM.getOrGenerate(MM + Math.floor(this.HL / 2), rM + Math.floor(this.HL / 2))[0].biome.oreGenerator.getOreBlocksForChunk(MM, rM),
+               EU = cU.getOrGenerate(UU + Math.floor(this.aY / 2), XU + Math.floor(this.aY / 2))[0].biome.oreGenerator.getOreBlocksForChunk(UU, XU),
```

#### 1051. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10866` → after: `L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10866) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10866)

```diff
-             return OM.p.create(this.HL, [MM, rM], this.biomeSelector)
+             return cU.x.create(this.aY, [UU, XU], this.biomeSelector)
```

#### 1052. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10869-L10870` → after: `L10869-L10870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870) · [Before (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870)

```diff
-             const aM = new Xr.b(iM, SM, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-             return OM.m.create(this.HL, [MM, rM], jM.f.NumFields, aM)
+             const AU = new xX.c(zU, yU, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+             return cU.u.create(this.aY, [UU, XU], QU.c.NumFields, AU)
```

#### 1053. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10874)

```diff
-       40793: (MM, rM, iM) => {
+       40801: (UU, XU, zU) => {
```

#### 1054. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10878-L10880` → after: `L10878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10878) · [Before (L10878-L10880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10878-L10880)

```diff
-           i: () => eM,
-           j: () => bM,
-           l: () => pM,
+           k: () => PU,
```

#### 1055. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10882-L10884` → after: `L10880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10880) · [Before (L10882-L10884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10882-L10884)

```diff
-           p: () => RM,
-           r: () => UM,
-           t: () => EM,
+           q: () => qU,
```

#### 1056. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10886` → after: `L10882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10882) · [Before (L10886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10886)

```diff
-           y: () => JM,
+           x: () => wU,
```

#### 1057. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10888-L10889` → after: `L10884-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10884-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10884-L10889) · [Before (L10888-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10888-L10889)

```diff
-           D: () => lM,
-           G: () => yM
+           C: () => GU,
+           F: () => RU,
+           H: () => aU,
+           J: () => ZU,
+           K: () => kU,
+           N: () => gU
```

#### 1058. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10891` → after: `L10891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10891) · [Before (L10891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10891)

```diff
-         var OM = iM(3160),
+         var cU = zU(3134),
```

#### 1059. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10904` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10904) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L10904)

```diff
-             const rM = "function" == typeof MM ? MM : function(MM) {
+             const XU = "function" == typeof UU ? UU : function(UU) {
```

#### 1060. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11113` → after: `L11113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11113) · [Before (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11113)

```diff
-         var hM = iM(40798);
+         var pU = zU(40804);
```

#### 1061. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11142` → after: `L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11142) · [Before (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11142)

```diff
-             RQ: lM(MM, jM, aM),
+             OD: kU(UU, QU, AU),
```

#### 1062. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11173` → after: `L11173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11173) · [Before (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11173)

```diff
-             for (let iM = 0; iM < MM.length; iM++) this._simplexes.push(new HM(`${rM}${iM}`))
+             for (let zU = 0; zU < UU.length; zU++) this._simplexes.push(new IU(`${XU}${zU}`))
```

#### 1063. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11198` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11198) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11198)

```diff
-             for (let SM = 0; SM < MM.length; SM++) this._simplexes.push(new HM(`${iM}${SM}`));
+             for (let yU = 0; yU < UU.length; yU++) this._simplexes.push(new IU(`${zU}${yU}`));
```

#### 1064. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11334` → after: `L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11334) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11334)

```diff
-             if (void 0 === OM) throw new Error(`Number not found for x=${MM}, z=${rM}, thirdIndex=${iM}`);
+             if (void 0 === cU) throw new Error(`Number not found for x=${UU}, z=${XU}, thirdIndex=${zU}`);
```

#### 1065. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11383)

```diff
-             if (void 0 === SM) throw new Error(`Number not found for x=${MM}, z=${rM}, thirdIndex=${iM}, fourthIndex=${OM}`);
+             if (void 0 === yU) throw new Error(`Number not found for x=${UU}, z=${XU}, thirdIndex=${zU}, fourthIndex=${cU}`);
```

#### 1066. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413` → after: `L11413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11413) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11413)

```diff
-       40798: (MM, rM, iM) => {
+       40804: (UU, XU, zU) => {
```

#### 1067. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11416-L11417` → after: `L11416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11416) · [Before (L11416-L11417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11416-L11417)

```diff
-           f: () => aM,
-           i: () => QM,
+           h: () => AU,
```

#### 1068. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11421` → after: `L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11421) · [Before (L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11421)

```diff
-           v: () => OM
+           t: () => cU
```

#### 1069. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11434) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       40804: (MM, rM, iM) => {
+       40812: (UU, XU, zU) => {
```

#### 1070. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11437-L11438` → after: `L11437-L11439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11437-L11439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11437-L11439) · [Before (L11437-L11438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11437-L11438)

```diff
-           f: () => OM,
-           j: () => nM,
+           c: () => cU,
+           d: () => oU,
+           h: () => FU,
```

#### 1071. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11440-L11441` → after: `L11441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11441) · [Before (L11440-L11441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11440-L11441)

```diff
-           o: () => aM,
-           r: () => jM
+           n: () => QU
```

#### 1072. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11460` → after: `L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11460) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11460)

```diff
-       4586: (MM, rM, iM) => {
+       4619: (UU, XU, zU) => {
```

#### 1073. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11465-L11467` → after: `L11464-L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11464-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11464-L11467) · [Before (L11465-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11465-L11467)

```diff
-           j: () => PM,
-           k: () => aM,
-           n: () => SM
+           l: () => cU,
+           p: () => FU,
+           t: () => AU,
+           u: () => yU
```

#### 1074. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11493` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11493) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11493)

```diff
-             if (this.distribution = void 0, MM.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(MM)}`);
+             if (this.distribution = void 0, UU.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(UU)}`);
```

#### 1075. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11498` → after: `L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11498) · [Before (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11498)

```diff
-               if (rM.has(OM)) throw new Error(`Values must be unique: ${JSON.stringify(MM)}`);
+               if (XU.has(cU)) throw new Error(`Values must be unique: ${JSON.stringify(UU)}`);
```

#### 1076. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11501` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11501) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11501)

```diff
-               if (jM <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(MM)}`);
+               if (QU <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(UU)}`);
```

#### 1077. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11526) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, MM > rM) throw new Error(`Min must be less than or equal to Max, but Min=${MM} and Max=${rM}`);
+             if (this.offset = void 0, this.multiplier = void 0, UU > XU) throw new Error(`Min must be less than or equal to Max, but Min=${UU} and Max=${XU}`);
```

#### 1078. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11536)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new aM(MM, rM, iM), !Number.isInteger(MM) || !Number.isInteger(rM)) throw new Error(`Min and Max must be integers, but Min=${MM} and Max=${rM}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new AU(UU, XU, zU), !Number.isInteger(UU) || !Number.isInteger(XU)) throw new Error(`Min and Max must be integers, but Min=${UU} and Max=${XU}`)
```

#### 1079. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11552` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11552)

```diff
-       625: (MM, rM, iM) => {
+       646: (UU, XU, zU) => {
```

#### 1080. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11556-L11563` → after: `L11557-L11563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11557-L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11557-L11563) · [Before (L11556-L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11556-L11563)

```diff
-           J: () => nM,
-           R: () => LM,
-           e: () => PM,
-           l: () => aM,
-           p: () => SM,
-           u: () => jM,
-           x: () => mM,
-           y: () => QM
+           H: () => IU,
+           L: () => pU,
+           P: () => oU,
+           W: () => YU,
+           b: () => FU,
+           i: () => AU,
+           k: () => yU
```

#### 1081. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11565` → after: `L11565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11565) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11565)

```diff
-         var OM = iM(632);
+         var cU = zU(654);
```

#### 1082. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11595` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11595) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11595)

```diff
-         OM.c, Number(atob("NQ==")), Number(atob("MTM="));
+         cU.d, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 1083. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11603` → after: `L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11603) · [Before (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11603)

```diff
-       632: (MM, rM, iM) => {
+       654: (UU, XU, zU) => {
```

#### 1084. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11605` → after: `L11605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11605) · [Before (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11605)

```diff
-           c: () => OM
+           d: () => cU
```

#### 1085. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11609` → after: `L11609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11609) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11609)

```diff
-       203: MM => {
+       236: UU => {
```

#### 1086. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11614` → after: `L11614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11614) · [Before (L11614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11614)

```diff
-         rM.keys = () => [], rM.resolve = rM, rM.id = 203, MM.exports = rM
+         XU.keys = () => [], XU.resolve = XU, XU.id = 236, UU.exports = XU
```

#### 1087. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11637-L11642` → after: `L11637-L11642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11637-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11637-L11642) · [Before (L11637-L11642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11637-L11642)

```diff
-   }, iM.f = {}, iM.e = MM => Promise.all(Object.keys(iM.f).reduce(((rM, OM) => (iM.f[OM](MM, rM), rM)), [])), iM.u = MM => "static/js/fo1voe." + (81 === MM ? "worldgenTables" : MM) + "." + {
-     81: "5e0cac4d",
-     84: "bf318c88",
-     85: "a453181b",
-     86: "017adafc",
-     87: "8ca63803"
+   }, zU.f = {}, zU.e = UU => Promise.all(Object.keys(zU.f).reduce(((XU, cU) => (zU.f[cU](UU, XU), XU)), [])), zU.u = UU => "static/js/fecih8." + (81 === UU ? "worldgenTables" : UU) + "." + {
+     81: "1344c171",
+     84: "479738f3",
+     85: "9afd6c0c",
+     86: "c7104e41",
+     87: "99f5a936"
```

#### 1088. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11717` → after: `L11717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11717) · [Before (L11717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11717)

```diff
-       iM = rM < 0 ? this.length + rM : rM;
+       zU = XU < 0 ? this.length + XU : XU;
```

#### 1089. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11732-L11734` → after: `L11732-L11734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11732-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11732-L11734) · [Before (L11732-L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11732-L11734)

```diff
-     Yd: () => fM,
-     Nd: () => YM,
-     PQ: () => NM,
+     ft: () => MU,
+     Ht: () => vU,
+     FD: () => VU,
```

#### 1090. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11737-L11747` → after: `L11737-L11747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11737-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11737-L11747) · [Before (L11737-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11737-L11747)

```diff
-     HQ: () => AM,
-     XQ: () => xM,
-     SL: () => vM,
-     RL: () => FM,
-     pL: () => BM,
-     WL: () => XM,
-     sL: () => IM,
-     DL: () => KM,
-     fL: () => qM,
-     NL: () => TM,
-     AL: () => VM
+     HD: () => sU,
+     BE: () => nU,
+     HE: () => mU,
+     OY: () => lU,
+     SY: () => xU,
+     rY: () => JU,
+     uY: () => jU,
+     fY: () => KU,
+     vY: () => bU,
+     sY: () => TU,
+     mY: () => hU
```

#### 1091. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11754` → after: `L11754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11754) · [Before (L11754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11754)

```diff
-   var QM = iM(3160),
+   var DU = zU(3134),
```

#### 1092. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11789` → after: `L11790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11790) · [Before (L11789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11789)

```diff
-     return null === JM ? "not failed" : `${JM}: ${(MM=dM)instanceof Error?`${MM.name}: ${MM.message}`:String(MM)}`;
+     return null === aU ? "not failed" : `${aU}: ${(UU=tU)instanceof Error?`${UU.name}: ${UU.message}`:String(UU)}`;
```

#### 1093. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11794` → after: `L11795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11795) · [Before (L11794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11794)

```diff
-     if (!wM()) throw new Error(`Bloxd wasm is not ready (${tM()}): check isBloxdWasmReady() first`);
+     if (!LU()) throw new Error(`Bloxd wasm is not ready (${eU()}): check isBloxdWasmReady() first`);
```

#### 1094. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11832` → after: `L11833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11833) · [Before (L11832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11832)

```diff
-       fL: SM
+       vY: yU
```

#### 1095. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11853` → after: `L11854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11854) · [Before (L11853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11853)

```diff
-     hM = "failed", JM = rM, dM = MM, console.error(`Bloxd wasm failed (${rM}):`, MM);
+     pU = "failed", aU = XU, tU = UU, gU = !1, console.error(`Bloxd wasm failed (${XU}):`, UU);
```

#### 1096. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11872-L11873` → after: `L11873-L11874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11873-L11874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11873-L11874) · [Before (L11872-L11873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11872-L11873)

```diff
-       reserveUpFront: rM => MM().RL(rM),
-       reserveAhead: rM => MM().SL(rM),
+       reserveUpFront: XU => UU().OY(XU),
+       reserveAhead: XU => UU().HE(XU),
```

#### 1097. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11875` → after: `L11876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11876) · [Before (L11875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11875)

```diff
-         MM().pL(rM)
+         UU().SY(XU)
```

#### 1098. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11877` → after: `L11878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11878) · [Before (L11877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11877)

```diff
-       lowWater: () => ZM[MM().XQ()] ?? "none",
+       lowWater: () => iU[UU().BE()] ?? "none",
```

#### 1099. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11900-L11902` → after: `L11901-L11903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11901-L11903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11901-L11903) · [Before (L11900-L11902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11900-L11902)

```diff
-       }(MM().WL()),
-       takeBallast: () => MM().sL(),
-       takePressure: () => MM().DL()
+       }(UU().rY()),
+       takeBallast: () => UU().uY(),
+       takePressure: () => UU().fY()
```

#### 1100. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11912` → after: `L11913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11913) · [Before (L11912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11912)

```diff
-       yr.xf8I(MM, 0)
+       kX.XqHW(UU, 0)
```

#### 1101. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11915` → after: `L11916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11916) · [Before (L11915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11915)

```diff
-       const rM = Qr(MM, yr.fUOL, yr.TnPD),
+       const XU = EX(UU, kX.akhw, kX.dVER),
```

#### 1102. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11917` → after: `L11918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11918) · [Before (L11917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11917)

```diff
-       yr.twcE(this.__wbg_ptr, rM, iM)
+       kX.ekXA(this.__wbg_ptr, XU, zU)
```

#### 1103. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11920` → after: `L11921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11921) · [Before (L11920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11920)

```diff
-       return yr.Dp3L(this.__wbg_ptr) >>> 0
+       return kX.P8rC(this.__wbg_ptr) >>> 0
```

#### 1104. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11923` → after: `L11924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11924) · [Before (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11923)

```diff
-       const MM = yr.Werc();
+       const UU = kX.HtvS();
```

#### 1105. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11927` → after: `L11928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11928) · [Before (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11927)

```diff
-       return yr.lUgX(this.__wbg_ptr) >>> 0
+       return kX.wB30(this.__wbg_ptr) >>> 0
```

#### 1106. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11930` → after: `L11931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11931) · [Before (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11930)

```diff
-       return yr.ZQVh(this.__wbg_ptr) >>> 0
+       return kX.Mn6c(this.__wbg_ptr) >>> 0
```

#### 1107. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11933` → after: `L11934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11934) · [Before (L11933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11933)

```diff
-       return yr.sade(this.__wbg_ptr) >>> 0
+       return kX.V1kr(this.__wbg_ptr) >>> 0
```

#### 1108. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11944` → after: `L11945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11945) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11944)

```diff
-       yr.kfqu(MM, 0)
+       kX.Nfgx(UU, 0)
```

#### 1109. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11947` → after: `L11948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11948) · [Before (L11947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11947)

```diff
-       return yr.Uwrf(this.__wbg_ptr, MM) >>> 0
+       return kX.E1LJ(this.__wbg_ptr, UU) >>> 0
```

#### 1110. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11950` → after: `L11951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11951) · [Before (L11950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11950)

```diff
-       return yr.kyK4(this.__wbg_ptr, MM) >>> 0
+       return kX.qR4A(this.__wbg_ptr, UU) >>> 0
```

#### 1111. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11953` → after: `L11954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11954) · [Before (L11953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11953)

```diff
-       const rM = yr.bb80(void 0 === (iM = MM) || null === iM ? Number.MAX_SAFE_INTEGER : MM >>> 0);
+       const XU = kX.uWKF(void 0 === (zU = UU) || null === zU ? Number.MAX_SAFE_INTEGER : UU >>> 0);
```

#### 1112. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11958` → after: `L11959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11959) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11958)

```diff
-       return yr.HqeW(this.__wbg_ptr) >>> 0
+       return kX.OlfR(this.__wbg_ptr) >>> 0
```

#### 1113. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11961` → after: `L11962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11962) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11961)

```diff
-       return yr.NMl8(this.__wbg_ptr) >>> 0
+       return kX.MTcm(this.__wbg_ptr) >>> 0
```

#### 1114. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11964` → after: `L11965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11965) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11964)

```diff
-       return yr.aS1Z(this.__wbg_ptr, MM) >>> 0
+       return kX.JP2Z(this.__wbg_ptr, UU) >>> 0
```

#### 1115. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11969` → after: `L11970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11970) · [Before (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11969)

```diff
-     const iM = Qr(MM, yr.fUOL, yr.TnPD),
+     const zU = EX(UU, kX.akhw, kX.dVER),
```

#### 1116. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11971` → after: `L11972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11972) · [Before (L11971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11971)

```diff
-       SM = yr.smxk(iM, OM, rM);
+       yU = kX.BYKM(zU, cU, XU);
```

#### 1117. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11976` → after: `L11977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11977) · [Before (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11976)

```diff
-     yr.ihFU()
+     kX.fsNR()
```

#### 1118. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11980` → after: `L11981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11981) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11980)

```diff
-     return yr.phES() >>> 0
+     return kX.Asro() >>> 0
```

#### 1119. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11984` → after: `L11985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11985) · [Before (L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11984)

```diff
-     return 0 !== yr.raMV(MM)
+     return 0 !== kX.C0eT(UU)
```

#### 1120. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11988` → after: `L11989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11989) · [Before (L11988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11988)

```diff
-     return 0 !== yr.ZsRo(MM)
+     return 0 !== kX.nwsP(UU)
```

#### 1121. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11992` → after: `L11993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11993) · [Before (L11992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11992)

```diff
-     yr.fGp8(MM)
+     kX.bNQP(UU)
```

#### 1122. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11996` → after: `L11997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR11997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L11997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11997) · [Before (L11996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L11996)

```diff
-     return yr.OySK() >>> 0
+     return kX.i960() >>> 0
```

#### 1123. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12000` → after: `L12001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12001) · [Before (L12000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12000)

```diff
-     return yr.GO7m() >>> 0
+     return kX.p7WZ() >>> 0
```

#### 1124. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12004` → after: `L12005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12005) · [Before (L12004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12004)

```diff
-     return 0 !== yr.F9DQ()
+     return 0 !== kX.mWKL()
```

#### 1125. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12008` → after: `L12009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12009) · [Before (L12008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12008)

```diff
-     return yr.mqQL() >>> 0
+     return kX.AN7Y() >>> 0
```

#### 1126. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12014` → after: `L12015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12015) · [Before (L12014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12014)

```diff
-       const iM = yr.gb0Z();
+       const zU = kX.AcxI();
```

#### 1127. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12017` → after: `L12018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12018) · [Before (L12017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12017)

```diff
-       yr.tdab(MM, rM, 1)
+       kX.yVTn(UU, XU, 1)
```

#### 1128. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12022` → after: `L12023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12023) · [Before (L12022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12022)

```diff
-     yr.DyMY(ir(MM))
+     kX.dRXF(cX(UU))
```

#### 1129. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12028` → after: `L12029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12029) · [Before (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12028)

```diff
-       ubqt: {
+       Fqvn: {
```

#### 1130. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12030` → after: `L12031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12031) · [Before (L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12030)

```diff
-         JqhQ: function(MM, rM) {
+         eWAM: function(UU, XU) {
```

#### 1131. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12033` → after: `L12034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12034) · [Before (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12033)

```diff
-         jSOa: function(MM, rM) {
+         GCsP: function(UU, XU) {
```

#### 1132. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12036` → after: `L12037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12037) · [Before (L12036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12036)

```diff
-         h6KF: function(MM) {
+         lpCP: function(UU) {
```

#### 1133. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12039` → after: `L12040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12040) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12039)

```diff
-         MQbf: function(MM, rM) {
+         XLCD: function(UU, XU) {
```

#### 1134. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12042` → after: `L12043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12043) · [Before (L12042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12042)

```diff
-         b3Rm: function(MM) {
+         dDwL: function(UU) {
```

#### 1135. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12052` → after: `L12053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12053) · [Before (L12052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12052)

```diff
-     } : new FinalizationRegistry((MM => yr.xf8I(MM, 1))),
+     } : new FinalizationRegistry((UU => kX.XqHW(UU, 1))),
```

#### 1136. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12056` → after: `L12057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12057) · [Before (L12056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12056)

```diff
-     } : new FinalizationRegistry((MM => yr.kfqu(MM, 1)));
+     } : new FinalizationRegistry((UU => kX.Nfgx(UU, 1)));
```

#### 1137. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12133` → after: `L12134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12134) · [Before (L12133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12133)

```diff
-     return dr = MM, yr = MM.exports, Jr = rM, Sr = null, yr.yfGf(), yr
+     return gX = UU, kX = UU.exports, tX = XU, QX = null, kX.GAdg(), kX
```

#### 1138. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12157` → after: `L12158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12158) · [Before (L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12157)

```diff
-         if (!MM.ok) throw new Error(`failed to fetch Wasm: ${MM.status} ${MM.statusText} fetching '${MM.url}'`);
+         if (!UU.ok) throw new Error(`failed to fetch Wasm: ${UU.status} ${UU.statusText} fetching '${UU.url}'`);
```

#### 1139. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12187-L12188` → after: `L12188-L12189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12188-L12189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12188-L12189) · [Before (L12187-L12188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12187-L12188)

```diff
-       if (!wM()) throw new Error(`Bloxd wasm is not ready (${tM()}): check isBloxdWasmReady() first`);
-       if (UM !== MM) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${rM}`)
+       if (!LU()) throw new Error(`Bloxd wasm is not ready (${eU()}): check isBloxdWasmReady() first`);
+       if (ZU !== UU) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${XU}`)
```

#### 1140. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12191` → after: `L12192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12192) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12191)

```diff
-   var er = iM(625);
+   var WX = zU(646);
```

#### 1141. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12198` → after: `L12199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12199) · [Before (L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12198)

```diff
-       } = iM(40899), HM = function(MM, rM, iM) {
+       } = zU(40900), IU = function(UU, XU, zU) {
```

#### 1142. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12200` → after: `L12201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12201) · [Before (L12200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12200)

```diff
-         for (const PM of MM.Rj) pr(PM, iM);
+         for (const FU of UU.CQ) OX(FU, zU);
```

#### 1143. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12203` → after: `L12204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12204) · [Before (L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12203)

```diff
-           Rj: MM.Rj,
+           CQ: UU.CQ,
```

#### 1144. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12209` → after: `L12210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12210) · [Before (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12209)

```diff
-           throw new Error(`Custom world-gen terrain "${OM.name}" is not in this generator's catalogue (${MM.length>0?MM.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${cU.name}" is not in this generator's catalogue (${UU.length>0?UU.join(", "):"empty"})`)
```

#### 1145. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12214` → after: `L12215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12215) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12214)

```diff
-               if (null !== MM.uj) throw new Error(`Custom world-gen terrain "${MM.name}" takes no options`);
+               if (null !== UU.eQ) throw new Error(`Custom world-gen terrain "${UU.name}" takes no options`);
```

#### 1146. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12218-L12219` → after: `L12219-L12220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12219-L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12219-L12220) · [Before (L12218-L12219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12218-L12219)

```diff
-             if (null !== MM.uj) try {
-               iM = JSON.parse(MM.uj)
+             if (null !== UU.eQ) try {
+               zU = JSON.parse(UU.eQ)
```

#### 1147. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12221` → after: `L12222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12222) · [Before (L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12221)

```diff
-               throw new Error(`Custom world-gen terrain "${MM.name}" has invalid optionsJson: ${String(OM)}`, {
+               throw new Error(`Custom world-gen terrain "${UU.name}" has invalid optionsJson: ${String(cU)}`, {
```

#### 1148. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12228` → after: `L12229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12229) · [Before (L12228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12228)

```diff
-           Rj: MM.Rj,
+           CQ: UU.CQ,
```

#### 1149. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12231` → after: `L12232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12232) · [Before (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12231)

```diff
-       }(null !== (zM = null === PM || void 0 === PM ? void 0 : PM.wj) && void 0 !== zM ? zM : null, nM, rM);
+       }(null !== (EU = null === FU || void 0 === FU ? void 0 : FU.WQ) && void 0 !== EU ? EU : null, oU, XU);
```

#### 1150. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12233` → after: `L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12234) · [Before (L12233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12233)

```diff
-       const hM = null !== (LM = null === PM || void 0 === PM ? void 0 : PM.layers) && void 0 !== LM ? LM : [];
+       const pU = null !== (YU = null === FU || void 0 === FU ? void 0 : FU.layers) && void 0 !== YU ? YU : [];
```

#### 1151. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12236` → after: `L12237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12237) · [Before (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12236)

```diff
-         const iM = [...MM].sort(((MM, rM) => MM.XS - rM.XS));
+         const zU = [...UU].sort(((UU, XU) => UU.my - XU.my));
```

#### 1152. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12238` → after: `L12239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12239) · [Before (L12238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12238)

```diff
-           if (iM[OM].XS < iM[OM - 1].KS) throw new Error(`Custom world-gen layers overlap: [${iM[OM-1].XS}, ${iM[OM-1].KS}) and [${iM[OM].XS}, ${iM[OM].KS})`)
+           if (zU[cU].my < zU[cU - 1].ly) throw new Error(`Custom world-gen layers overlap: [${zU[cU-1].my}, ${zU[cU-1].ly}) and [${zU[cU].my}, ${zU[cU].ly})`)
```

#### 1153. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12250` → after: `L12251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12251) · [Before (L12250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12250)

```diff
-         if (iM >= SM.XS && iM < SM.KS) return jM.getChunk(MM, rM, iM - SM.qS, OM);
+         if (zU >= yU.my && zU < yU.ly) return QU.getChunk(UU, XU, zU - yU.xy, cU);
```

#### 1154. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12268-L12269` → after: `L12269-L12270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12269-L12270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12269-L12270) · [Before (L12268-L12269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12268-L12269)

```diff
-     if (MM.XS >= MM.KS) throw new Error(`Custom world-gen layer has minY (${MM.XS}) >= maxY (${MM.KS})`);
-     if (MM.XS % er.y !== 0 || MM.KS % er.y !== 0 || MM.qS % er.y !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${er.y}); got minY=${MM.XS}, maxY=${MM.KS}, groundY=${MM.qS}`);
+     if (UU.my >= UU.ly) throw new Error(`Custom world-gen layer has minY (${UU.my}) >= maxY (${UU.ly})`);
+     if (UU.my % WX.D !== 0 || UU.ly % WX.D !== 0 || UU.xy % WX.D !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${WX.D}); got minY=${UU.my}, maxY=${UU.ly}, groundY=${UU.xy}`);
```

#### 1155. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12271-L12274` → after: `L12272-L12275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12272-L12275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12272-L12275) · [Before (L12271-L12274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12271-L12274)

```diff
-         if (void 0 === (0, er.D)(MM.rj, rM)) throw new Error(`Custom world-gen caves lavaPitBlock "${MM.rj}" not found in blockMetadata`);
-         if (MM.ij)
-           for (const iM of MM.ij) tr(iM, rM)
-       }(MM.cS, rM), 0 === MM.Jj.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, WX.L)(UU.Ty, XU)) throw new Error(`Custom world-gen caves lavaPitBlock "${UU.Ty}" not found in blockMetadata`);
+         if (UU.hy)
+           for (const zU of UU.hy) eX(zU, XU)
+       }(UU.jy, XU), 0 === UU.IQ.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1156. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12276` → after: `L12277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12277) · [Before (L12276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12276)

```diff
-     for (const OM of MM.Jj) Rr(OM, rM), iM += OM.frequency;
+     for (const cU of UU.IQ) qX(cU, XU), zU += cU.frequency;
```

#### 1157. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12278` → after: `L12279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12279) · [Before (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12278)

```diff
-     for (const OM of MM.Gj) pr(OM, rM)
+     for (const cU of UU.GQ) OX(cU, XU)
```

#### 1158. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12284-L12286` → after: `L12285-L12287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12285-L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12285-L12287) · [Before (L12284-L12286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12284-L12286)

```diff
-       Sj: OM,
-       jj: SM,
-       aj: jM
+       zQ: cU,
+       cQ: yU,
+       yQ: QU
```

#### 1159. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12288-L12289` → after: `L12289-L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12289-L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12289-L12290) · [Before (L12288-L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12288-L12289)

```diff
-     if (void 0 === (0, er.D)(iM, rM)) throw new Error(`Custom world-gen cave decoration blockName "${iM}" not found in blockMetadata`);
-     if (!OM && !SM && !jM) throw new Error(`Custom world-gen cave decoration "${iM}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, WX.L)(zU, XU)) throw new Error(`Custom world-gen cave decoration blockName "${zU}" not found in blockMetadata`);
+     if (!cU && !yU && !QU) throw new Error(`Custom world-gen cave decoration "${zU}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1160. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12292-L12293` → after: `L12293-L12294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12293-L12294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12293-L12294) · [Before (L12292-L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12292-L12293)

```diff
-     if (jM && gr(iM, "meta|rot1|top", rM), ur(MM.Pj, iM, "Pj"), ur(MM.nj, iM, "nj"), !Number.isInteger(MM.Qj) || MM.Qj < 0) throw new Error(`Custom world-gen cave decoration "${iM}" minPlacements must be a non-negative integer, got ${MM.Qj}`);
-     if (!(0, er.J)(MM.zj) && (ur(MM.zj.mj, iM, "depthRamp.deepClusterChance"), MM.zj.Hj <= MM.zj.hj)) throw new Error(`Custom world-gen cave decoration "${iM}" deepY must be strictly smaller than shallowY, but ${MM.zj.Hj} <= ${MM.zj.hj} `)
+     if (QU && CX(zU, "meta|rot1|top", XU), wX(UU.QQ, zU, "QQ"), wX(UU.AQ, zU, "AQ"), !Number.isInteger(UU.FQ) || UU.FQ < 0) throw new Error(`Custom world-gen cave decoration "${zU}" minPlacements must be a non-negative integer, got ${UU.FQ}`);
+     if (!(0, WX.P)(UU.oQ) && (wX(UU.oQ.EQ, zU, "depthRamp.deepClusterChance"), UU.oQ.YQ <= UU.oQ.NQ)) throw new Error(`Custom world-gen cave decoration "${zU}" deepY must be strictly smaller than shallowY, but ${UU.oQ.YQ} <= ${UU.oQ.NQ} `)
```

#### 1161. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12297-L12298` → after: `L12298-L12299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12298-L12299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12298-L12299) · [Before (L12297-L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12297-L12298)

```diff
-     const OM = `${MM}|${rM}`;
-     if (void 0 === (0, er.D)(OM, iM)) throw new Error(`Custom world-gen cave decoration "${MM}" is missing directional variant "${OM}" required for wall/ceiling anchoring`)
+     const cU = `${UU}|${XU}`;
+     if (void 0 === (0, WX.L)(cU, zU)) throw new Error(`Custom world-gen cave decoration "${UU}" is missing directional variant "${cU}" required for wall/ceiling anchoring`)
```

#### 1162. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12302` → after: `L12303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12303) · [Before (L12302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12302)

```diff
-     if (MM < 0 || MM > 1) throw new Error(`Custom world-gen cave decoration "${rM}" ${iM} must be in [0, 1], got ${MM}`)
+     if (UU < 0 || UU > 1) throw new Error(`Custom world-gen cave decoration "${XU}" ${zU} must be in [0, 1], got ${UU}`)
```

#### 1163. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12306-L12312` → after: `L12307-L12313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12307-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12307-L12313) · [Before (L12306-L12312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12306-L12312)

```diff
-     if (MM.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${MM.frequency}`);
-     if (void 0 === (0, er.D)(MM.yj, rM)) throw new Error(`Custom world-gen biome topsoilBlock "${MM.yj}" not found in blockMetadata`);
-     if (void 0 === (0, er.D)(MM.lj, rM)) throw new Error(`Custom world-gen biome lowsoilBlock "${MM.lj}" not found in blockMetadata`);
-     if (0 === MM.Ej.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const iM of MM.Ej) {
-       if (iM.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${iM.frequency}`);
-       if (void 0 === (0, er.D)(iM.blockName, rM)) throw new Error(`Custom world-gen biome stoneType blockName "${iM.blockName}" not found in blockMetadata`)
+     if (UU.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${UU.frequency}`);
+     if (void 0 === (0, WX.L)(UU.aQ, XU)) throw new Error(`Custom world-gen biome topsoilBlock "${UU.aQ}" not found in blockMetadata`);
+     if (void 0 === (0, WX.L)(UU.tQ, XU)) throw new Error(`Custom world-gen biome lowsoilBlock "${UU.tQ}" not found in blockMetadata`);
+     if (0 === UU.gQ.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const zU of UU.gQ) {
+       if (zU.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${zU.frequency}`);
+       if (void 0 === (0, WX.L)(zU.blockName, XU)) throw new Error(`Custom world-gen biome stoneType blockName "${zU.blockName}" not found in blockMetadata`)
```

#### 1164. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12317-L12321` → after: `L12318-L12322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12318-L12322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12318-L12322) · [Before (L12317-L12321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12317-L12321)

```diff
-     if (void 0 === (0, er.D)(MM.blockName, rM)) throw new Error(`Custom world-gen ore blockName "${MM.blockName}" not found in blockMetadata`);
-     if (MM.radius < 0) throw new Error(`Custom world-gen ore "${MM.blockName}" radius must be >= 0, got ${MM.radius}`);
-     if (MM.ej <= 0) throw new Error(`Custom world-gen ore "${MM.blockName}" minDistBetweenDeposits must be > 0, got ${MM.ej}`);
-     if (MM.XS > MM.KS) throw new Error(`Custom world-gen ore "${MM.blockName}" minY (${MM.XS}) must be <= maxY (${MM.KS})`);
-     if (MM.bj < 0 || MM.bj > 1) throw new Error(`Custom world-gen ore "${MM.blockName}" spawnChance must be in [0, 1], got ${MM.bj}`)
+     if (void 0 === (0, WX.L)(UU.blockName, XU)) throw new Error(`Custom world-gen ore blockName "${UU.blockName}" not found in blockMetadata`);
+     if (UU.radius < 0) throw new Error(`Custom world-gen ore "${UU.blockName}" radius must be >= 0, got ${UU.radius}`);
+     if (UU.ZQ <= 0) throw new Error(`Custom world-gen ore "${UU.blockName}" minDistBetweenDeposits must be > 0, got ${UU.ZQ}`);
+     if (UU.my > UU.ly) throw new Error(`Custom world-gen ore "${UU.blockName}" minY (${UU.my}) must be <= maxY (${UU.ly})`);
+     if (UU.RQ < 0 || UU.RQ > 1) throw new Error(`Custom world-gen ore "${UU.blockName}" spawnChance must be in [0, 1], got ${UU.RQ}`)
```

#### 1165. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12327-L12330` → after: `L12328-L12331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12328-L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12328-L12331) · [Before (L12327-L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12327-L12330)

```diff
-       ej: 10,
-       XS: -98,
-       KS: -78,
-       bj: .4
+       ZQ: 10,
+       my: -98,
+       ly: -78,
+       RQ: .4
```

#### 1166. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12335-L12338` → after: `L12336-L12339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12336-L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12336-L12339) · [Before (L12335-L12338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12335-L12338)

```diff
-       ej: 6,
-       XS: -40,
-       KS: 20,
-       bj: .6
+       ZQ: 6,
+       my: -40,
+       ly: 20,
+       RQ: .6
```

#### 1167. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12342-L12345` → after: `L12343-L12346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12343-L12346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12343-L12346) · [Before (L12342-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12342-L12345)

```diff
-       ej: 10,
-       XS: -75,
-       KS: -55,
-       bj: .4
+       ZQ: 10,
+       my: -75,
+       ly: -55,
+       RQ: .4
```

#### 1168. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12349` → after: `L12350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12350) · [Before (L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12349)

```diff
-       uj: null
+       eQ: null
```

#### 1169. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12352` → after: `L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12353) · [Before (L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12352)

```diff
-     [Wr]: () => iM(40787).d
+     [SX]: () => zU(40791).e
```

#### 1170. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12376` → after: `L12377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12377) · [Before (L12376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12376)

```diff
-       if (!Br.includes(rM)) throw new Error(`Invalid port offset "${MM}". Must be one of: ${Br.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!xX.includes(XU)) throw new Error(`Invalid port offset "${UU}". Must be one of: ${xX.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1171. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12454` → after: `L12455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12455) · [Before (L12454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12454)

```diff
-     const rM = xr() ? qr : Tr;
+     const XU = nX() ? bX : TX;
```

#### 1172. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12858` → after: `L12864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12864) · [Before (L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12858)

```diff
-     if (Oi.has(MM)) throw new Error(`Duplicate leave code: ${MM}`);
+     if (yz.has(UU)) throw new Error(`Duplicate leave code: ${UU}`);
```

#### 1173. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12881` → after: `L12887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12887) · [Before (L12881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12881)

```diff
-     return MM === rM ? jM + OM * OM <= MM * MM : MM > rM ? Math.abs(OM) <= rM && jM + OM * OM <= MM * MM : jM <= MM * MM && jM + OM * OM <= rM * rM
+     return UU === XU ? QU + cU * cU <= UU * UU : UU > XU ? Math.abs(cU) <= XU && QU + cU * cU <= UU * UU : QU <= UU * UU && QU + cU * cU <= XU * XU
```

#### 1174. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12899` → after: `L12905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12905) · [Before (L12899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12899)

```diff
-     const MM = Promise.all([iM.e(84), iM.e(87), iM.e(85), iM.e(86), iM.e(81)]).then((() => iM(40889))).then((MM => {
+     const UU = Promise.all([zU.e(84), zU.e(87), zU.e(85), zU.e(86), zU.e(81)]).then((() => zU(40887))).then((UU => {
```

#### 1175. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12942` → after: `L12948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12948) · [Before (L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12942)

```diff
-               reason: `its memory stats trapped (${String(rM)})`
+               reason: `its memory stats trapped (${String(XU)})`
```

#### 1176. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12948` → after: `L12954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12954) · [Before (L12948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12948)

```diff
-               const iM = nM.Ad();
+               const zU = oU.Mt();
```

#### 1177. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12951` → after: `L12957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12957) · [Before (L12951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12951)

```diff
-                 return String.fromCharCode(...new Uint8Array(RM().buffer, MM.xd(), 32))
+                 return String.fromCharCode(...new Uint8Array(qU().buffer, UU.vt(), 32))
```

#### 1178. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12964` → after: `L12970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12970) · [Before (L12964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12964)

```diff
-               aM = dM.HL, LM = new Uint16Array(aM * aM * aM),
+               AU = tU.aY, YU = new Uint16Array(AU * AU * AU),
```

#### 1179. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12973` → after: `L12979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12979) · [Before (L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12973)

```diff
-                           reason: `the memory ceiling was not set (${String(OM)})`
+                           reason: `the memory ceiling was not set (${String(cU)})`
```

#### 1180. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12977` → after: `L12983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12983) · [Before (L12977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12977)

```diff
-                         nM = new(Cr().Yd)
+                         oU = new(PX().ft)
```

#### 1181. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12981` → after: `L12987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12987) · [Before (L12981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12981)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(OM)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(cU)})`
```

#### 1182. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12991` → after: `L12997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR12997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L12997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12997) · [Before (L12991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12991)

```diff
-                           reason: `${Qi} (${String(rM)})`
+                           reason: `${Ez} (${String(XU)})`
```

#### 1183. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12996` → after: `L13002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13002) · [Before (L12996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L12996)

```diff
-                       reason: `wasm did not start (${gM()})`
+                       reason: `wasm did not start (${CU()})`
```

#### 1184. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13000` → after: `L13006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13006) · [Before (L13000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13000)

```diff
-                     reason: `chunk size ${aM} is not the encoder's 32`
+                     reason: `chunk size ${AU} is not the encoder's 32`
```

#### 1185. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13011` → after: `L13017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13017) · [Before (L13011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13011)

```diff
-                 QM = new br(aM, PM.blockMetadata, PM.itemMetadata, MM.YS, !1, MM.NS, MM.vS, OM, JM)
+                 DU = new dX(AU, FU.blockMetadata, FU.itemMetadata, UU.iy, !1, UU.Hy, UU.vy, cU, aU)
```

#### 1186. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13036` → after: `L13042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13042) · [Before (L13036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13036)

```diff
-                     const iM = MM.vd(),
+                     const zU = UU.Vt(),
```

#### 1187. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13038` → after: `L13044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13044) · [Before (L13038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13038)

```diff
-                       SM = rM.byteLength >= OM ? rM : new ArrayBuffer(OM),
+                       yU = XU.byteLength >= cU ? XU : new ArrayBuffer(cU),
```

#### 1188. `bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13041` → after: `L13047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bedR13047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-100414e7a3b95bdc7433dc849cec26df49ed7e0f61d79442130eb734c7e25bed) · [After (L13047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13047) · [Before (L13041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorker.js#L13041)

```diff
-                     return aM.set(new Uint8Array(jM, MM.xd(), Nr)), aM.set(new Uint8Array(jM, MM.Fd(), iM), Nr), {
+                     return AU.set(new Uint8Array(QU, UU.vt(), VX)), AU.set(new Uint8Array(QU, UU.nt(), zU), VX), {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   37356: (MM, rM, iM) => {
+   37112: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L44)

```diff
-           if (rM > 0 && iM.searchParams.set("cache-bust", `${Date.now()}-${rM}`), await this.fetchWhole(iM, MM)) return this.scriptUrl = iM, !0;
+           if (XU > 0 && zU.searchParams.set("cache-bust", `${Date.now()}-${XU}`), await this.fetchWhole(zU, UU)) return this.scriptUrl = zU, !0;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L86)

```diff
-   53795: (MM, rM, iM) => {
+   53801: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L94` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-df576023a671a3016d0c142e9de2d13fb49ae72e22837444ac178f1df1dac0d0) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L94) · [Before (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/worldgenWorkerLoader.js#L94)

```diff
-     const OM = new(iM(37356).b)(new URL(iM.p + iM.u(82), iM.b), {
+     const cU = new(zU(37112).b)(new URL(zU.p + zU.u(82), zU.b), {
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/main.css` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/main.css` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a)

#### 1. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L1557-L1558` → after: `L1536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR1536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L1536) · [Before (L1557-L1558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L1557-L1558)

```diff
- .GenericVideoWrapper .GenericVideo.AditudeVideo,
- .GenericVideoWrapper .GenericVideo.NitroVideo {
+ .GenericVideoWrapper .GenericVideo.AditudeVideo {
```

#### 2. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L2970-L2971` → after: `L2943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L2943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L2943) · [Before (L2970-L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L2970-L2971)

```diff
- .LoadableButton.ReportButton,
- .LoadableButton.StopRecordingButton {
+ .LoadableButton.ReportButton {
```

#### 3. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L2976-L2978` → after: `L2948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L2948) · [Before (L2976-L2978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L2976-L2978)

```diff
- 
-   .LoadableButton.ReportButton:hover,
-   .LoadableButton.StopRecordingButton:hover {
+   .LoadableButton.ReportButton:hover {
```

#### 4. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L2983-L2984` → after: `L2953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR2953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L2953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L2953) · [Before (L2983-L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L2983-L2984)

```diff
- .LoadableButton.ReportButton.pad-focused,
- .LoadableButton.StopRecordingButton.pad-focused {
+ .LoadableButton.ReportButton.pad-focused {
```

#### 5. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L2989-L2991` → after: `L2958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR2958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L2958) · [Before (L2989-L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L2989-L2991)

```diff
- 
-   .LoadableButton.ReportButton:active,
-   .LoadableButton.StopRecordingButton:active {
+   .LoadableButton.ReportButton:active {
```

#### 6. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9538` → after: `L9479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR9479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L9479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L9479) · [Before (L9538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L9538)

```diff
- .AdBannerContainer.AdBannerContainerHoldsFrame .AdBannerSlot>.AdBanner.AdBannerExtraContrast.AdBannerAwaitingAd:not(.NitroBanner) {
+ .AdBannerContainer.AdBannerContainerHoldsFrame .AdBannerSlot>.AdBanner.AdBannerExtraContrast.AdBannerAwaitingAd {
```

#### 7. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9658` → after: `L9583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR9583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L9583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L9583) · [Before (L9658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L9658)

```diff
- .AdBannerContainer .AdBanner.AdBannerAwaitingAd:not(.NitroBanner) {
+ .AdBannerContainer .AdBanner.AdBannerAwaitingAd {
```

#### 8. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L9665` → after: `L9590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR9590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L9590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L9590) · [Before (L9665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L9665)

```diff
- .AdBannerContainer .AdBanner.AdBannerAwaitingAd:not(.NitroBanner) .AdBannerRemoveAds {
+ .AdBannerContainer .AdBanner.AdBannerAwaitingAd .AdBannerRemoveAds {
```

#### 9. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11503` → after: `L11446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L11446) · [Before (L11503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L11503)

```diff
-   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-100 -100 200 200%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28124,131,251%29%27 st … [truncated]
+   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-71 -71 142 142%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28124,131,251%29%27 stop … [truncated]
```

#### 10. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11529` → after: `L11472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L11472) · [Before (L11529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L11529)

```diff
-   width: 200%;
+   width: 142%;
```

#### 11. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11676` → after: `L11619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L11619) · [Before (L11676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L11676)

```diff
-   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-100 -100 200 200%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28143,150,252%29%27 st … [truncated]
+   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-71 -71 142 142%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28143,150,252%29%27 stop … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L11682` → after: `L11625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR11625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L11625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L11625) · [Before (L11682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L11682)

```diff
-   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-100 -100 200 200%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28255,185,20%29%27 sto … [truncated]
+   --rays: url("data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-71 -71 142 142%27><defs><radialGradient id=%27l%27 gradientUnits=%27userSpaceOnUse%27 cx=%270%27 cy=%270%27 r=%27100%27><stop offset=%27.15%27 stop-color=%27rgb%28255,185,20%29%27 stop- … [truncated]
```

#### 13. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12755` → after: `L12716-L12732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12716-L12732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L12716-L12732) · [Before (L12755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L12755)

```diff
-   text-align: center
+   text-align: center;
+   width: 100%
+ }
+ 
+ @media(orientation:portrait) {
+   .LoadingOverlay .LoadingOverlayRight .LoadingOverlayRightBody .MainLoadingState {
+     font-size: min(3rem, 7.5cqi)
+   }
+ }
+ 
+ .LoadingOverlay .LoadingOverlayRight .LoadingOverlayRightBody .MainLoadingState .MainLoadingStateText {
+   -webkit-box-orient: vertical;
+   -webkit-line-clamp: var(--title-lines);
+   display: -webkit-box;
+   margin: calc(max(.2em, 6px)*-1);
+   overflow: hidden;
+ ... (1 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/main.css` (Changed code · before: `L12761` → after: `L12743-L12749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2aR12743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e7c398d0dbc142132d03a1497dd33acfba0ac56d7d8be588e2cfbff578249b2a) · [After (L12743-L12749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.css#L12743-L12749) · [Before (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.css#L12761)

```diff
-   text-align: center
+   height: calc(var(--tip-lines)*1.25em);
+   line-height: 1.25;
+   margin: -.15em;
+   overflow: hidden;
+   padding: .15em;
+   text-align: center;
+   width: 100%
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/main.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/main.js` (1765 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78)

#### 1. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1)

```diff
- /*! For license information please see fo1voe.main.f743fbcf.js.LICENSE.txt */
+ /*! For license information please see fecih8.main.fbb4bdb3.js.LICENSE.txt */
```

#### 2. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3)

```diff
-     var MM = [, , , , , , , , , , (MM, rM, iM) => {
+     var UU = [, , , , , , , , , , , , , (UU, XU, zU) => {
```

#### 3. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L7-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L7-L8)

```diff
-             F: () => WM,
-             H: () => gM,
+             G: () => OU,
```

#### 4. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L11-L13` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L9-L14) · [Before (L11-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L11-L13)

```diff
-             Q: () => mM,
-             R: () => GM,
-             V: () => sM,
+             P: () => RU,
+             T: () => NU,
+             U: () => ZU,
+             W: () => SU,
+             X: () => EU,
+             Y: () => fU,
```

#### 5. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L15-L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L16) · [Before (L15-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L15-L16)

```diff
-             _: () => ZM,
-             b: () => hM,
+             ab: () => BU,
```

#### 6. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L18-L19` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L18-L20) · [Before (L18-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L18-L19)

```diff
-             f: () => dM,
-             fb: () => UM,
+             db: () => wU,
+             e: () => pU,
+             eb: () => cU,
```

#### 7. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L21-L25` → after: `L22-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L22-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L21-L25)

```diff
-             j: () => JM,
-             jb: () => QM,
-             mb: () => RM,
-             n: () => PM,
-             nb: () => OM,
+             i: () => gU,
+             l: () => aU,
+             p: () => FU,
```

#### 8. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L28` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L27-L28) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L28)

```diff
-             v: () => xM,
+             w: () => sU,
+             x: () => yU,
```

#### 9. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L141)

```diff
-         }, , , (MM, rM, iM) => {
+         }, , , , , , , , , (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L143)

```diff
-             d: () => PM
+             c: () => FU
```

#### 11. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L145-L146` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L145-L146) · [Before (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L145-L146)

```diff
-           var OM = iM(19),
-             SM = iM(775);
+           var cU = zU(27),
+             yU = zU(790);
```

#### 12. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L168)

```diff
-             (OM.d.set({
+             (cU.e.set({
```

#### 13. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L171-L172` → after: `L171-L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L171-L172) · [Before (L171-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L171-L172)

```diff
-           })), "VConsole" in window && (0, SM.d)()
-         }, , , , , , (MM, rM, iM) => {
+           })), "VConsole" in window && (0, yU.e)()
+         }, , , , , (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L174)

```diff
-             d: () => dr,
+             e: () => tX,
```

#### 15. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L176-L178` → after: `L176-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L176-L178) · [Before (L176-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L176-L178)

```diff
-             i: () => lr,
-             j: () => yr,
-             m: () => Ur
+             k: () => kX,
+             n: () => gX,
+             q: () => BX
```

#### 16. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L180-L185` → after: `L180-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L180-L185) · [Before (L180-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L180-L185)

```diff
-           var OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM, ZM, oM, fM = iM(22),
-             YM = iM(313),
-             NM = iM(332),
-             AM = iM(30),
-             xM = iM(41),
-             vM = iM(25),
+           var cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU, OU, SU, rU, uU, fU, iU, HU = zU(31),
+             MU = zU(320),
+             vU = zU(344),
+             VU = zU(42),
+             sU = zU(55),
+             nU = zU(40),
```

#### 17. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L187-L200` → after: `L187-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L187-L200) · [Before (L187-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L187-L200)

```diff
-             BM = iM(44),
-             XM = iM(65),
-             IM = iM(83),
-             KM = iM(229),
-             qM = iM(299),
-             TM = iM(308),
-             VM = iM(637),
-             cM = iM(106),
-             Mr = iM(650),
-             rr = iM(656),
-             ir = iM(275),
-             Or = iM(730),
-             Sr = iM(738),
-             jr = iM(746);
+             lU = zU(61),
+             xU = zU(73),
+             JU = zU(97),
+             jU = zU(266),
+             KU = zU(314),
+             bU = zU(316),
+             TU = zU(661),
+             hU = zU(123),
+             UX = zU(678),
+             XX = zU(687),
+             zX = zU(298),
+             cX = zU(755),
+             yX = zU(760),
+             QX = zU(762);
```

#### 18. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L204)

```diff
-             return Mr.i ? "webgl_holdback" : !0 === AM.g.getItem(cM.N) ? "old_intel_driver" : Mr.k && !0 === AM.g.getItem(cM.J) ? "intel_gen9" : rr.H && (0, Mr.e)(AM.g.getItem(cM.H)) ? "gpu_class_webgl" : rr.H && !0 === AM.g.getItem(cM.R) ? "gpu_wasm_arm" : !rr.H && (0, Mr.o)(nav … [truncated]
+             return UX.h ? "webgl_holdback" : !0 === VU.k.getItem(hU.B) ? "old_intel_driver" : UX.j && !0 === VU.k.getItem(hU.A) ? "intel_gen9" : XX.H && (0, UX.e)(VU.k.getItem(hU.x)) ? "gpu_class_webgl" : XX.H && !0 === VU.k.getItem(hU.I) ? "gpu_wasm_arm" : !XX.H && (0, UX.k)(nav … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L208` → after: `L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L208) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L208)

```diff
-             return Mr.w && null === Pr()
+             return UX.o && null === FX()
```

#### 20. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L211-L212)

```diff
-           const zr = Mr.w && null === Qr;
-           let Lr = null === AM.g.getItem(YM.fc);
+           const EX = UX.o && null === DX;
+           let YX = null === VU.k.getItem(MU.vc);
```

#### 21. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L225-L226` → after: `L225-L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L225-L226) · [Before (L225-L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L225-L226)

```diff
-             soundVolume: (0, xM.b)(),
-             musicVolume: null !== (OM = AM.g.getItem("musicVol")) && void 0 !== OM ? OM : .5,
+             soundVolume: (0, sU.e)(),
+             musicVolume: null !== (cU = VU.k.getItem("musicVol")) && void 0 !== cU ? cU : .5,
```

#### 22. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L240-L241` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L241-L242) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L240-L241)

```diff
-               const MM = AM.g.getItem("showDistantNametags");
-               return "boolean" === typeof MM ? MM : null
+               const UU = VU.k.getItem("showDistantNametags");
+               return "boolean" === typeof UU ? UU : null
```

#### 23. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L255-L256` → after: `L257-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L257-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L257-L258) · [Before (L255-L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L255-L256)

```diff
-             showDebugOverlay: null !== (SM = AM.g.getItem("showDebugOverlay")) && void 0 !== SM && SM,
-             enabledDebugFeatures: null !== (jM = AM.g.getItem("enabledDebugFeatures")) && void 0 !== jM ? jM : {},
+             showDebugOverlay: null !== (yU = VU.k.getItem("showDebugOverlay")) && void 0 !== yU && yU,
+             enabledDebugFeatures: null !== (QU = VU.k.getItem("enabledDebugFeatures")) && void 0 !== QU ? QU : {},
```

#### 24. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L265-L268` → after: `L267-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L267-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L267-L270) · [Before (L265-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L265-L268)

```diff
-               useProfanityFilter: null === (aM = AM.g.getItem("UseProfanityFilter")) || void 0 === aM || aM,
-               showChat: null === (PM = AM.g.getItem("showChat")) || void 0 === PM || PM,
-               showNewItemIndicator: null === (nM = AM.g.getItem("showNewItemIndicator")) || void 0 === nM || nM,
-               showFriendOnlineToasts: null === (QM = AM.g.getItem("showFriendOnlineToasts")) || void 0 === QM || QM,
+               useProfanityFilter: null === (AU = VU.k.getItem("UseProfanityFilter")) || void 0 === AU || AU,
+               showChat: null === (FU = VU.k.getItem("showChat")) || void 0 === FU || FU,
+               showNewItemIndicator: null === (oU = VU.k.getItem("showNewItemIndicator")) || void 0 === oU || oU,
+               showFriendOnlineToasts: null === (DU = VU.k.getItem("showFriendOnlineToasts")) || void 0 === DU || DU,
```

#### 25. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L271-L272` → after: `L273-L274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L273-L274) · [Before (L271-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L271-L272)

```diff
-                 const rM = AM.g.getItem("friendRequestNotifications");
-                 return null !== (MM = Or.c.find((MM => MM === rM))) && void 0 !== MM ? MM : "toastAndTray"
+                 const XU = VU.k.getItem("friendRequestNotifications");
+                 return null !== (UU = cX.e.find((UU => UU === XU))) && void 0 !== UU ? UU : "toastAndTray"
```

#### 26. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L274-L292` → after: `L276-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L276-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L276-L294) · [Before (L274-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L274-L292)

```diff
-               touchscreenSensitivity: null !== (zM = AM.g.getItem("touchscreenSensitivity")) && void 0 !== zM ? zM : 150,
-               mouseSensitivity: null !== (LM = AM.g.getItem("mouseSensitivity")) && void 0 !== LM ? LM : 15,
-               showCoordinates: null !== (mM = AM.g.getItem("showCoordinates")) && void 0 !== mM && mM,
-               showChunkCoordinates: null !== (HM = AM.g.getItem("showChunkCoordinates")) && void 0 !== HM && HM,
-               showFPS: null !== (hM = AM.g.getItem("showFPS")) && void 0 !== hM && hM,
-               disableBunnyHopping: null !== (JM = AM.g.getItem("disableBunnyHopping")) && void 0 !== JM && JM,
-               disableTexAtlas: null !== (dM = AM.g.getItem("disableTexAtlas")) && void 0 !== dM && dM,
-               disableFullscreen: null !== (yM = AM.g.getItem("disableFullscreen")) && void 0 !== yM && yM,
-               ezBridging: null === (lM = AM.g.getItem("ezBridging")) || void 0 === lM || lM,
-               ezTowering: null === (EM = AM.g.getItem("ezTowering")) || void 0 === EM || EM,
-               crouchIsToggle: null !== (UM = AM.g.getItem("crouchIsToggle")) && void 0 !== UM && UM,
-               vibration: null === (GM = AM.g.getItem("vibration")) || void 0 === GM || GM,
-               hideUiIsToggle: null !== (CM = AM.g.getItem("hideUiIsToggle")) && void 0 !== CM && CM,
-               enableLighting: null !== (eM = AM.g.getItem("enableLighting")) && void 0 !== eM && eM,
-               showFog: null !== (bM = AM.g.getItem("showFog")) && void 0 !== bM && bM,
-               fogChunkDistance: null !== (wM = AM.g.getItem("fogChunkDistance")) && void 0 !== wM ? wM : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (EU = VU.k.getItem("touchscreenSensitivity")) && void 0 !== EU ? EU : 150,
+               mouseSensitivity: null !== (YU = VU.k.getItem("mouseSensitivity")) && void 0 !== YU ? YU : 15,
+               showCoordinates: null !== (NU = VU.k.getItem("showCoordinates")) && void 0 !== NU && NU,
+               showChunkCoordinates: null !== (IU = VU.k.getItem("showChunkCoordinates")) && void 0 !== IU && IU,
+               showFPS: null !== (pU = VU.k.getItem("showFPS")) && void 0 !== pU && pU,
+               disableBunnyHopping: null !== (aU = VU.k.getItem("disableBunnyHopping")) && void 0 !== aU && aU,
+               disableTexAtlas: null !== (tU = VU.k.getItem("disableTexAtlas")) && void 0 !== tU && tU,
+               disableFullscreen: null !== (gU = VU.k.getItem("disableFullscreen")) && void 0 !== gU && gU,
+               ezBridging: null === (kU = VU.k.getItem("ezBridging")) || void 0 === kU || kU,
+               ezTowering: null === (GU = VU.k.getItem("ezTowering")) || void 0 === GU || GU,
+               crouchIsToggle: null !== (BU = VU.k.getItem("crouchIsToggle")) && void 0 !== BU && BU,
+               vibration: null === (ZU = VU.k.getItem("vibration")) || void 0 === ZU || ZU,
+               hideUiIsToggle: null !== (RU = VU.k.getItem("hideUiIsToggle")) && void 0 !== RU && RU,
+               enableLighting: null !== (PU = VU.k.getItem("enableLighting")) && void 0 !== PU && PU,
+               showFog: null !== (WU = VU.k.getItem("showFog")) && void 0 !== WU && WU,
+               fogChunkDistance: null !== (dU = VU.k.getItem("fogChunkDistance")) && void 0 !== dU ? dU : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L296-L304` → after: `L298-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L298-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L298-L306) · [Before (L296-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L296-L304)

```diff
-               useWebGpu: null !== (RM = AM.g.getItem(YM.fc)) && void 0 !== RM ? RM : zr,
-               pixelScale: null !== (pM = AM.g.getItem("pixelScale")) && void 0 !== pM ? pM : (0, IM.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (WM = AM.g.getItem("pixelSmoothing")) || void 0 === WM || WM,
-               showChunkBorders: null !== (sM = AM.g.getItem("showChunkBorders")) && void 0 !== sM && sM,
-               showWeaponRaycasts: null !== (DM = AM.g.getItem("showWeaponRaycasts")) && void 0 !== DM && DM,
-               chunkFadeIn: null === (kM = AM.g.getItem("chunkFadeIn")) || void 0 === kM || kM,
-               enableClipping: null !== (ZM = AM.g.getItem("enableClipping")) && void 0 !== ZM && ZM,
-               clipDurationSeconds: null !== (oM = AM.g.getItem("clipDurationSeconds")) && void 0 !== oM ? oM : Sr.f,
-               ...(0, jr.f)()
+               useWebGpu: null !== (wU = VU.k.getItem(MU.vc)) && void 0 !== wU ? wU : EX,
+               pixelScale: null !== (qU = VU.k.getItem("pixelScale")) && void 0 !== qU ? qU : (0, JU.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (OU = VU.k.getItem("pixelSmoothing")) || void 0 === OU || OU,
+               showChunkBorders: null !== (SU = VU.k.getItem("showChunkBorders")) && void 0 !== SU && SU,
+               showWeaponRaycasts: null !== (rU = VU.k.getItem("showWeaponRaycasts")) && void 0 !== rU && rU,
+               chunkFadeIn: null === (uU = VU.k.getItem("chunkFadeIn")) || void 0 === uU || uU,
+               enableClipping: null !== (fU = VU.k.getItem("enableClipping")) && void 0 !== fU && fU,
+               clipDurationSeconds: null !== (iU = VU.k.getItem("clipDurationSeconds")) && void 0 !== iU ? iU : yX.h,
+               ...(0, QX.h)()
```

#### 28. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L311` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L313) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L311)

```diff
-             const iM = null !== (rM = AM.g.getItem(qM.d)) && void 0 !== rM ? rM : (0, KM.i)();
+             const zU = null !== (XU = VU.k.getItem(KU.e)) && void 0 !== XU ? XU : (0, jU.g)();
```

#### 29. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L321` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L323) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L321)

```diff
-             return null !== AM.g.getItem(qM.d)
+             return null !== VU.k.getItem(KU.e)
```

#### 30. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L327` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L329) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L327)

```diff
-               for (const rM in MM) fM.i.Tz(`appManagerUpdated|${rM}`, MM[rM])
+               for (const XU in UU) HU.k.UY(`appManagerUpdated|${XU}`, UU[XU])
```

#### 31. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L339-L340` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L341) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L339-L340)

```diff
-               const rM = mr.clientEscMenuOptions.showFPS,
-                 iM = {};
+               const XU = {};
```

#### 32. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L342` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L343) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L342)

```diff
-               for (const aM in MM)(0, NM.Td)(mr[aM], MM[aM]) || (iM[aM] = MM[aM], OM = !0);
+               for (const QU in UU)(0, vU.oe)(NX[QU], UU[QU]) || (XU[QU] = UU[QU], zU = !0);
```

#### 33. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L349` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L350) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L349)

```diff
-                 AM.g.setItem("UseProfanityFilter", MM.useProfanityFilter), AM.g.setItem("showChat", MM.showChat), AM.g.setItem("showNewItemIndicator", MM.showNewItemIndicator), AM.g.setItem("showFriendOnlineToasts", MM.showFriendOnlineToasts), AM.g.setItem("friendRequestNotificat … [truncated]
+                 VU.k.setItem("UseProfanityFilter", UU.useProfanityFilter), VU.k.setItem("showChat", UU.showChat), VU.k.setItem("showNewItemIndicator", UU.showNewItemIndicator), VU.k.setItem("showFriendOnlineToasts", UU.showFriendOnlineToasts), VU.k.setItem("friendRequestNotificat … [truncated]
```

#### 34. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L351` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L352) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L351)

```diff
-               void 0 !== iM.soundVolume && AM.g.setItem("soundVol", iM.soundVolume), void 0 !== iM.musicVolume && AM.g.setItem("musicVol", iM.musicVolume), void 0 !== iM.showDistantNametags && AM.g.setItem("showDistantNametags", iM.showDistantNametags), void 0 !== iM.showDebugOve … [truncated]
+               void 0 !== XU.soundVolume && VU.k.setItem("soundVol", XU.soundVolume), void 0 !== XU.musicVolume && VU.k.setItem("musicVol", XU.musicVolume), void 0 !== XU.showDistantNametags && VU.k.setItem("showDistantNametags", XU.showDistantNametags), void 0 !== XU.showDebugOve … [truncated]
```

#### 35. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L361-L377` → after: `L362-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L362-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L362-L366) · [Before (L361-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L361-L377)

```diff
-             setSessionReplayRecording() {
-               var MM;
-               if (mr.sessionReplayRecording) return;
-               const rM = mr.clientEscMenuOptions,
-                 iM = null === (MM = AM.g.getItem("showFPS")) || void 0 === MM || MM;
-               this.applyingDefaults = !0;
-               try {
-                 this.set({
-                   sessionReplayRecording: !0,
-                   clientEscMenuOptions: {
-                     ...rM,
-                     showFPS: iM
-                   }
-                 })
-               } finally {
-                 this.applyingDefaults = !1
- ... (1 more removed lines; see GitHub link above)
+             openAccountSettings() {
+               this.set({
+                 openEverythingMenuName: MU.s.SETTINGS,
+                 openSettingsCategory: "account"
+               })
```

#### 36. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L380-L381` → after: `L369-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L369-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L369-L370) · [Before (L380-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L380-L381)

```diff
-               const rM = hr() ? null : (0, KM.e)(MM);
-               return null !== rM && void 0 !== rM ? rM : mr.clientEscMenuOptions.antiAliasing
+               const XU = pX() ? null : (0, jU.d)(UU);
+               return null !== XU && void 0 !== XU ? XU : NX.clientEscMenuOptions.antiAliasing
```

#### 37. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L384-L385` → after: `L373-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L373-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L373-L374) · [Before (L384-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L384-L385)

```diff
-               (0, KM.f)(MM);
-               const rM = hr() ? mr.clientEscMenuOptions.antiAliasing : (0, KM.i)();
+               (0, jU.e)(UU);
+               const XU = pX() ? NX.clientEscMenuOptions.antiAliasing : (0, jU.g)();
```

#### 38. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L409` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L398) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L409)

```diff
-               let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, TM.l)(),
+               let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, bU.n)(),
```

#### 39. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L412-L413` → after: `L401-L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L401-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L401-L402) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L412-L413)

```diff
-               const OM = (0, TM.s)(MM, rM, iM);
-               return (0, TM.y)() && !0 === AM.g.getItem(YM.fc) && AM.g.removeItem(YM.fc), OM
+               const cU = (0, bU.x)(UU, XU, zU);
+               return (0, bU.D)() && !0 === VU.k.getItem(MU.vc) && VU.k.removeItem(MU.vc), cU
```

#### 40. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L416` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L405) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L416)

```diff
-               (0, VM.d)(MM) && (0, TM.y)() && Lr && mr.clientEscMenuOptions.useWebGpu && (Qr = Pr(), this.setEscMenuOptionsUnstored({
+               (0, TU.e)(UU) && (0, bU.D)() && YX && NX.clientEscMenuOptions.useWebGpu && (DX = FX(), this.setEscMenuOptionsUnstored({
```

#### 41. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L424` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L413) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L424)

```diff
-               return (0, TM.D)() || !0 === AM.g.getItem(cM.N)
+               return (0, bU.M)() || !0 === VU.k.getItem(hU.B)
```

#### 42. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L427` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L416) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L427)

```diff
-               return (0, TM.y)()
+               return (0, bU.D)()
```

#### 43. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L430` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L419) · [Before (L430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L430)

```diff
-               return Lr ? Qr : null
+               return YX ? DX : null
```

#### 44. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L433` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L422) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L433)

```diff
-               !0 === AM.g.getItem(cM.N) && (0, IM.hasUsableWebGpuAdapter)()
+               !0 === VU.k.getItem(hU.B) && (0, JU.hasUsableWebGpuAdapter)()
```

#### 45. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L477` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L466) · [Before (L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L477)

```diff
-         }, , , (MM, rM, iM) => {
+         }, , , , (UU, XU, zU) => {
```

#### 46. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L481-L483` → after: `L469-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L469-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L469-L472) · [Before (L481-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L481-L483)

```diff
-             e: () => zM,
-             i: () => QM,
-             j: () => LM
+             f: () => QU,
+             g: () => EU,
+             k: () => DU,
+             n: () => YU
```

#### 47. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L485` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L474) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L485)

```diff
-           var OM = iM(25),
+           var cU = zU(40),
```

#### 48. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L495` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L484) · [Before (L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L495)

```diff
-               super(...arguments), this.Uy = !1, this.Gy = [], this.Wy = {}
+               super(...arguments), this.zk = !1, this.Fk = [], this.Dk = {}
```

#### 49. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L499` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L488) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L499)

```diff
-               this.Uy || !iM ? this.emit(MM, rM) : this.Gy.push({
+               this.zk || !zU ? this.emit(UU, XU) : this.Fk.push({
```

#### 50. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L506-L507` → after: `L495-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L495-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L495-L496) · [Before (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L506-L507)

```diff
-               const OM = this.Ay(MM, rM);
-               return this.on(MM, OM), this.Wy[MM] = (null !== (iM = this.Wy[MM]) && void 0 !== iM ? iM : 0) + 1, {
+               const cU = this.Yk(UU, XU);
+               return this.on(UU, cU), this.Dk[UU] = (null !== (zU = this.Dk[UU]) && void 0 !== zU ? zU : 0) + 1, {
```

#### 51. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L516` → after: `L505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L505) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L516)

```diff
-               const iM = this.Ay(MM, rM);
+               const zU = this.Yk(UU, XU);
```

#### 52. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L525-L526` → after: `L514-L515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L514-L515) · [Before (L525-L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L525-L526)

```diff
-                 iM = this.Wy[rM];
-               iM > 1 ? this.Wy[rM] = iM - 1 : 1 === iM && delete this.Wy[rM]
+                 zU = this.Dk[XU];
+               zU > 1 ? this.Dk[XU] = zU - 1 : 1 === zU && delete this.Dk[XU]
```

#### 53. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L533` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L522) · [Before (L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L533)

```diff
-                   console.error(`Error in PubSub listener for event ${MM}:`, OM)
+                   console.error(`Error in PubSub listener for event ${UU}:`, cU)
```

#### 54. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L538` → after: `L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L527) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L538)

```diff
-               this.Uy = MM, MM && (this.Gy.forEach((MM => {
+               this.zk = UU, UU && (this.Fk.forEach((UU => {
```

#### 55. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L543-L544` → after: `L532-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L532-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L532-L533) · [Before (L543-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L543-L544)

```diff
-                 this.Tz(rM, iM)
-               })), this.Gy = [])
+                 this.UY(XU, zU)
+               })), this.Fk = [])
```

#### 56. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L547` → after: `L536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L536) · [Before (L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L547)

```diff
-               this.Gy = []
+               this.Fk = []
```

#### 57. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L553` → after: `L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L542) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L553)

```diff
-             QM.Fy(!0)
+             DU.Zk(!0)
```

#### 58. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L562` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L551) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L562)

```diff
-         }, , , MM => {
+         }, , , , , , , , , UU => {
```

#### 59. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L569` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L558) · [Before (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L569)

```diff
-             this.jL = MM, this.context = rM, this.once = iM || !1
+             this.FY = UU, this.context = XU, this.once = zU || !1
```

#### 60. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L575-L576` → after: `L564-L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L564-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L564-L565) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L575-L576)

```diff
-               nM = iM ? iM + rM : rM;
-             return MM._events[nM] ? MM._events[nM].jL ? MM._events[nM] = [MM._events[nM], PM] : MM._events[nM].push(PM) : (MM._events[nM] = PM, MM._eventsCount++), MM
+               oU = zU ? zU + XU : XU;
+             return UU._events[oU] ? UU._events[oU].FY ? UU._events[oU] = [UU._events[oU], FU] : UU._events[oU].push(FU) : (UU._events[oU] = FU, UU._eventsCount++), UU
```

#### 61. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L580` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L569) · [Before (L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L580)

```diff
-             0 === --MM._eventsCount ? MM._events = new OM : delete MM._events[rM]
+             0 === --UU._eventsCount ? UU._events = new cU : delete UU._events[XU]
```

#### 62. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L592` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L581) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L592)

```diff
-             var rM = iM ? iM + MM : MM,
+             var XU = zU ? zU + UU : UU,
```

#### 63. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L595-L596` → after: `L584-L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L584-L585) · [Before (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L595-L596)

```diff
-             if (OM.jL) return [OM.jL];
-             for (var SM = 0, jM = OM.length, aM = new Array(jM); SM < jM; SM++) aM[SM] = OM[SM].jL;
+             if (cU.FY) return [cU.FY];
+             for (var yU = 0, QU = cU.length, AU = new Array(QU); yU < QU; yU++) AU[yU] = cU[yU].FY;
```

#### 64. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L599` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L588) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L599)

```diff
-             var rM = iM ? iM + MM : MM,
+             var XU = zU ? zU + UU : UU,
```

#### 65. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L601` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L590) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L601)

```diff
-             return OM ? OM.jL ? 1 : OM.length : 0
+             return cU ? cU.FY ? 1 : cU.length : 0
```

#### 66. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L603` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L592) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L603)

```diff
-             var PM = iM ? iM + MM : MM;
+             var FU = zU ? zU + UU : UU;
```

#### 67. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L607-L608` → after: `L596-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L596-L597) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L607-L608)

```diff
-             if (zM.jL) {
-               switch (zM.once && this.removeListener(MM, zM.jL, void 0, !0), LM) {
+             if (EU.FY) {
+               switch (EU.once && this.removeListener(UU, EU.FY, void 0, !0), YU) {
```

#### 68. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L610` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L599) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L610)

```diff
-                   return zM.jL.call(zM.context), !0;
+                   return EU.FY.call(EU.context), !0;
```

#### 69. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L612` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L601) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L612)

```diff
-                   return zM.jL.call(zM.context, rM), !0;
+                   return EU.FY.call(EU.context, XU), !0;
```

#### 70. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L614` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L603) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L614)

```diff
-                   return zM.jL.call(zM.context, rM, OM), !0;
+                   return EU.FY.call(EU.context, XU, cU), !0;
```

#### 71. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L616` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L605) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L616)

```diff
-                   return zM.jL.call(zM.context, rM, OM, SM), !0;
+                   return EU.FY.call(EU.context, XU, cU, yU), !0;
```

#### 72. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L618` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L607) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L618)

```diff
-                   return zM.jL.call(zM.context, rM, OM, SM, jM), !0;
+                   return EU.FY.call(EU.context, XU, cU, yU, QU), !0;
```

#### 73. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L620` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L609) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L620)

```diff
-                   return zM.jL.call(zM.context, rM, OM, SM, jM, aM), !0
+                   return EU.FY.call(EU.context, XU, cU, yU, QU, AU), !0
```

#### 74. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L623` → after: `L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L612) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L623)

```diff
-               zM.jL.apply(zM.context, nM)
+               EU.FY.apply(EU.context, oU)
```

#### 75. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L626` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L615) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L626)

```diff
-               for (QM = 0; QM < HM; QM++) switch (zM[QM].once && this.removeListener(MM, zM[QM].jL, void 0, !0), LM) {
+               for (DU = 0; DU < IU; DU++) switch (EU[DU].once && this.removeListener(UU, EU[DU].FY, void 0, !0), YU) {
```

#### 76. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L628` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L617) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L628)

```diff
-                   zM[QM].jL.call(zM[QM].context);
+                   EU[DU].FY.call(EU[DU].context);
```

#### 77. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L631` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L620) · [Before (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L631)

```diff
-                   zM[QM].jL.call(zM[QM].context, rM);
+                   EU[DU].FY.call(EU[DU].context, XU);
```

#### 78. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L634` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L623) · [Before (L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L634)

```diff
-                   zM[QM].jL.call(zM[QM].context, rM, OM);
+                   EU[DU].FY.call(EU[DU].context, XU, cU);
```

#### 79. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L637` → after: `L626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L626) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L637)

```diff
-                   zM[QM].jL.call(zM[QM].context, rM, OM, SM);
+                   EU[DU].FY.call(EU[DU].context, XU, cU, yU);
```

#### 80. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L642` → after: `L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L631) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L642)

```diff
-                   zM[QM].jL.apply(zM[QM].context, nM)
+                   EU[DU].FY.apply(EU[DU].context, oU)
```

#### 81. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L651` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L640) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L651)

```diff
-             var jM = iM ? iM + MM : MM;
+             var QU = zU ? zU + UU : UU;
```

#### 82. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L655` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L644) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L655)

```diff
-             if (PM.jL) PM.jL !== rM || SM && !PM.once || OM && PM.context !== OM || aM(this, jM);
+             if (FU.FY) FU.FY !== XU || yU && !FU.once || cU && FU.context !== cU || AU(this, QU);
```

#### 83. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L657-L658` → after: `L646-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L646-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L646-L647) · [Before (L657-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L657-L658)

```diff
-               for (var nM = 0, QM = [], zM = PM.length; nM < zM; nM++)(PM[nM].jL !== rM || SM && !PM[nM].once || OM && PM[nM].context !== OM) && QM.push(PM[nM]);
-               QM.length ? this._events[jM] = 1 === QM.length ? QM[0] : QM : aM(this, jM)
+               for (var oU = 0, DU = [], EU = FU.length; oU < EU; oU++)(FU[oU].FY !== XU || yU && !FU[oU].once || cU && FU[oU].context !== cU) && DU.push(FU[oU]);
+               DU.length ? this._events[QU] = 1 === DU.length ? DU[0] : DU : AU(this, QU)
```

#### 84. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L661` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L650) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L661)

```diff
-           }, PM.prototype.aE = function(MM) {
+           }, FU.prototype.Wk = function(UU) {
```

#### 85. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L663` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L652) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L663)

```diff
-             return MM ? (rM = iM ? iM + MM : MM, this._events[rM] && aM(this, rM)) : (this._events = new OM, this._eventsCount = 0), this
+             return UU ? (XU = zU ? zU + UU : UU, this._events[XU] && AU(this, XU)) : (this._events = new cU, this._eventsCount = 0), this
```

#### 86. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L665` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L654) · [Before (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L665)

```diff
-         }, , , , , (MM, rM, iM) => {
+         }, , (UU, XU, zU) => {
```

#### 87. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L667-L668` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L656) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L667-L668)

```diff
-             e: () => LM,
-             f: () => hM,
+             c: () => YU,
```

#### 88. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L671-L672` → after: `L659-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L659-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L659-L661) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L671-L672)

```diff
-             l: () => JM,
-             n: () => zM
+             n: () => IU,
+             o: () => aU,
+             r: () => EU
```

#### 89. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L674` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L663) · [Before (L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L674)

```diff
-           var OM = iM(36),
+           var cU = zU(47),
```

#### 90. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L676` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L665) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L676)

```diff
-             jM = iM(38),
+             QU = zU(51),
```

#### 91. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L680` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L669) · [Before (L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L680)

```diff
-               return `bloxd-${MM}`
+               return `bloxd-${UU}`
```

#### 92. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L706` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L695) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L706)

```diff
-                   ...iM ? QM : nM,
+                   ...zU ? DU : oU,
```

#### 93. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L718` → after: `L707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L707) · [Before (L718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L718)

```diff
-                 return console.error("Caught error", iM, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (rM = this._cachedVals[MM]) && void 0 !== rM ? rM : null
+                 return console.error("Caught error", zU, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (XU = this._cachedVals[UU]) && void 0 !== XU ? XU : null
```

#### 94. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L727` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L716) · [Before (L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L727)

```diff
-                 aM().remove(MM, rM ? QM : nM)
+                 AU().remove(UU, XU ? DU : oU)
```

#### 95. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L755` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L744) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L755)

```diff
-                 return console.error("Caught error", iM, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", zU, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 96. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L786` → after: `L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L775) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L786)

```diff
-                 return console.error("Caught error", iM, "when attempting to read from sessionStorage."), null !== (rM = this._cachedVals[MM]) && void 0 !== rM ? rM : null
+                 return console.error("Caught error", zU, "when attempting to read from sessionStorage."), null !== (XU = this._cachedVals[UU]) && void 0 !== XU ? XU : null
```

#### 97. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L813` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L802) · [Before (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L813)

```diff
-                 return null !== (OM = this._cachedVals[MM]) && void 0 !== OM ? OM : null
+                 return null !== (cU = this._cachedVals[UU]) && void 0 !== cU ? cU : null
```

#### 98. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L835` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L824) · [Before (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L835)

```diff
-                   for (let OM, SM, jM = 0, aM = 0; SM = MM.charAt(aM++); ~SM && (OM = jM % 4 ? 64 * OM + SM : SM, jM++ % 4) ? rM += String.fromCharCode(255 & OM >> (-2 * jM & 6)) : 0) SM = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(SM);
+                   for (let cU, yU, QU = 0, AU = 0; yU = UU.charAt(AU++); ~yU && (cU = QU % 4 ? 64 * cU + yU : yU, QU++ % 4) ? XU += String.fromCharCode(255 & cU >> (-2 * QU & 6)) : 0) yU = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(yU);
```

#### 99. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L842` → after: `L831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L831) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L842)

```diff
-               return aM ? SM = aM : (SM = dM.FZAkcO(SM), MM[jM] = SM), SM
+               return AU ? yU = AU : (yU = tU.FZAkcO(yU), UU[QU] = yU), yU
```

#### 100. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L884` → after: `L873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L873) · [Before (L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L884)

```diff
-         }, , , , , , (MM, rM, iM) => {
+         }, , , , , (UU, XU, zU) => {
```

#### 101. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1016` → after: `L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1005) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1016)

```diff
-                 return MM instanceof this ? MM : jM.resolve(new this(SM), MM)
+                 return UU instanceof this ? UU : QU.resolve(new this(yU), UU)
```

#### 102. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1065` → after: `L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1054) · [Before (L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1065)

```diff
-                 return this.state !== nM ? LM(iM, this.state === PM ? MM : rM, this.outcome) : this.queue.push(new zM(iM, MM, rM)), iM
+                 return this.state !== oU ? YU(zU, this.state === FU ? UU : XU, this.outcome) : this.queue.push(new EU(zU, UU, XU)), zU
```

#### 103. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1438` → after: `L1427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1427) · [Before (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1438)

```diff
-                       return MM ? rM : pM(rM)
+                       return UU ? XU : qU(XU)
```

#### 104. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1714` → after: `L1703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1703) · [Before (L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1714)

```diff
-                   MM instanceof ArrayBuffer ? (OM = MM, SM += ir) : (OM = MM.buffer, "[object Int8Array]" === iM ? SM += Sr : "[object Uint8Array]" === iM ? SM += jr : "[object Uint8ClampedArray]" === iM ? SM += ar : "[object Int16Array]" === iM ? SM += Pr : "[object Uint16Array] … [truncated]
+                   UU instanceof ArrayBuffer ? (cU = UU, yU += zX) : (cU = UU.buffer, "[object Int8Array]" === zU ? yU += yX : "[object Uint8Array]" === zU ? yU += QX : "[object Uint8ClampedArray]" === zU ? yU += AX : "[object Int16Array]" === zU ? yU += FX : "[object Uint16Array] … [truncated]
```

#### 105. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1738` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1727) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1738)

```diff
-                   case ir:
+                   case zX:
```

#### 106. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1740` → after: `L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1729) · [Before (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1740)

```diff
-                   case Or:
+                   case cX:
```

#### 107. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1744` → after: `L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1733) · [Before (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1744)

```diff
-                   case Sr:
+                   case yX:
```

#### 108. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1746` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1735) · [Before (L1746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1746)

```diff
-                   case jr:
+                   case QX:
```

#### 109. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1748` → after: `L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1737) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1748)

```diff
-                   case ar:
+                   case AX:
```

#### 110. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1750` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1739) · [Before (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1750)

```diff
-                   case Pr:
+                   case FX:
```

#### 111. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1752` → after: `L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1741) · [Before (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1752)

```diff
-                   case Qr:
+                   case DX:
```

#### 112. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1754` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1743) · [Before (L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1754)

```diff
-                   case nr:
+                   case oX:
```

#### 113. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1756` → after: `L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1745) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1756)

```diff
-                   case zr:
+                   case EX:
```

#### 114. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1758` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1747) · [Before (L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1758)

```diff
-                   case Lr:
+                   case YX:
```

#### 115. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1760` → after: `L1749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1749) · [Before (L1760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1760)

```diff
-                   case mr:
+                   case NX:
```

#### 116. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1798` → after: `L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1787) · [Before (L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1798)

```diff
-                 return iM.QE = Er, SM
+                 return zU.Lk = GX, yU
```

#### 117. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1820` → after: `L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1809) · [Before (L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1820)

```diff
-                         OM && (OM = SM.QE.deserialize(OM)), rM(OM)
+                         cU && (cU = yU.Lk.deserialize(cU)), XU(cU)
```

#### 118. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1840` → after: `L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1829) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1840)

```diff
-                             if (QM && (QM = SM.QE.deserialize(QM)), void 0 !== (QM = MM(QM, nM.key, PM + 1))) return void rM(QM)
+                             if (DU && (DU = yU.Lk.deserialize(DU)), void 0 !== (DU = UU(DU, oU.key, FU + 1))) return void XU(DU)
```

#### 119. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L1860` → after: `L1849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R1849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L1849) · [Before (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L1860)

```diff
-                     nM.QE.serialize(rM, (function(rM, QM) {
+                     oU.Lk.serialize(XU, (function(XU, DU) {
```

#### 120. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2071` → after: `L2060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2060) · [Before (L2071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2071)

```diff
-                 return iM.keyPrefix = or(MM, rM._defaultConfig), Yr() ? (rM._dbInfo = iM, iM.QE = Er, QM.resolve()) : QM.reject()
+                 return zU.keyPrefix = iX(UU, XU._defaultConfig), MX() ? (XU._dbInfo = zU, zU.Lk = GX, DU.resolve()) : DU.reject()
```

#### 121. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2091` → after: `L2080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2080) · [Before (L2091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2091)

```diff
-                   return OM && (OM = rM.QE.deserialize(OM)), OM
+                   return cU && (cU = XU.Lk.deserialize(cU)), cU
```

#### 122. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2103` → after: `L2092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2092) · [Before (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2103)

```diff
-                         if (QM && (QM = rM.QE.deserialize(QM)), void 0 !== (QM = MM(QM, nM.substring(SM), aM++))) return QM
+                         if (DU && (DU = XU.Lk.deserialize(DU)), void 0 !== (DU = UU(DU, oU.substring(yU), AU++))) return DU
```

#### 123. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2161` → after: `L2150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2150) · [Before (L2161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2161)

```diff
-                     aM.QE.serialize(rM, (function(rM, OM) {
+                     AU.Lk.serialize(XU, (function(XU, cU) {
```

#### 124. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2381` → after: `L2370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2370) · [Before (L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2381)

```diff
-         }, , (MM, rM, iM) => {
+         }, , , , (UU, XU, zU) => {
```

#### 125. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2450` → after: `L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2439) · [Before (L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2450)

```diff
-         }, , , (MM, rM, iM) => {
+         }, , , , (UU, XU, zU) => {
```

#### 126. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2452` → after: `L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2441) · [Before (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2452)

```diff
-             b: () => SM
+             e: () => yU
```

#### 127. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2454` → after: `L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2443) · [Before (L2454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2454)

```diff
-           var OM = iM(30);
+           var cU = zU(42);
```

#### 128. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2458` → after: `L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2447) · [Before (L2458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2458)

```diff
-             return null !== (MM = OM.g.getItem("soundVol")) && void 0 !== MM ? MM : .5
+             return null !== (UU = cU.k.getItem("soundVol")) && void 0 !== UU ? UU : .5
```

#### 129. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2461-L2463` → after: `L2452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2452) · [Before (L2461-L2463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2461-L2463)

```diff
-           MM.exports = iM(52)
-         }, , , , , , , , (MM, rM, iM) => {
-           var OM = iM(58),
+           var cU = zU(68),
```

#### 130. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2574-L2575` → after: `L2563-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2563-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2563-L2564) · [Before (L2574-L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2574-L2575)

```diff
-                   case SM:
-                   case jM:
+                   case yU:
+                   case QU:
```

#### 131. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2596` → after: `L2585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2585) · [Before (L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2596)

```diff
-                   return null === MM || "object" !== typeof MM ? null : "function" === typeof(MM = mM && MM[mM] || MM["@@iterator"]) ? MM : null
+                   return null === UU || "object" !== typeof UU ? null : "function" === typeof(UU = NU && UU[NU] || UU["@@iterator"]) ? UU : null
```

#### 132. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2750` → after: `L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2739) · [Before (L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2750)

```diff
-         }, , , , , , MM => {
+         }, , , , UU => {
```

#### 133. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2783` → after: `L2772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2772) · [Before (L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2783)

```diff
-         }, , , , , , , (MM, rM, iM) => {
+         }, , , , , (UU, XU, zU) => {
```

#### 134. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2790-L2794` → after: `L2779-L2783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2779-L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2779-L2783) · [Before (L2790-L2794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2790-L2794)

```diff
-           }(), MM.exports = iM(67)
-         }, , (MM, rM, iM) => {
-           var OM = iM(44),
-             SM = iM(58),
-             jM = iM(69);
+           }(), UU.exports = zU(82)
+         }, , , , , , , , , (UU, XU, zU) => {
+           var cU = zU(61),
+             yU = zU(68),
+             QU = zU(85);
```

#### 135. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2881` → after: `L2870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2870) · [Before (L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2881)

```diff
-             }(rM) && (null === iM ? MM.removeAttribute(rM) : MM.setAttribute(rM, "" + iM)) : SM.mustUseProperty ? MM[SM.propertyName] = null === iM ? 3 !== SM.type && "" : iM : (rM = SM.attributeName, OM = SM.attributeNamespace, null === iM ? MM.removeAttribute(rM) : (iM = 3 ===  … [truncated]
+             }(XU) && (null === zU ? UU.removeAttribute(XU) : UU.setAttribute(XU, "" + zU)) : yU.mustUseProperty ? UU[yU.propertyName] = null === zU ? 3 !== yU.type && "" : zU : (XU = yU.attributeName, cU = yU.attributeNamespace, null === zU ? UU.removeAttribute(XU) : (zU = 3 ===  … [truncated]
```

#### 136. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L2922` → after: `L2911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L2911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L2911) · [Before (L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L2922)

```diff
-             return null === MM || "object" !== typeof MM ? null : "function" === typeof(MM = xM && MM[xM] || MM["@@iterator"]) ? MM : null
+             return null === UU || "object" !== typeof UU ? null : "function" === typeof(UU = sU && UU[sU] || UU["@@iterator"]) ? UU : null
```

#### 137. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3020` → after: `L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3009) · [Before (L3020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3020)

```diff
-               case bM:
+               case WU:
```

#### 138. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3022` → after: `L3011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3011) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3022)

```diff
-               case eM:
+               case PU:
```

#### 139. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3024` → after: `L3013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3013) · [Before (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3024)

```diff
-               case tM:
+               case LU:
```

#### 140. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3026` → after: `L3015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3015) · [Before (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3026)

```diff
-               case wM:
+               case dU:
```

#### 141. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3028` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3017) · [Before (L3028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3028)

```diff
-               case pM:
+               case qU:
```

#### 142. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3030` → after: `L3019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3019) · [Before (L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3030)

```diff
-               case WM:
+               case OU:
```

#### 143. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3034` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3023) · [Before (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3034)

```diff
-               case uM:
+               case CU:
```

#### 144. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3036` → after: `L3025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3025) · [Before (L3036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3036)

```diff
-               case gM:
+               case eU:
```

#### 145. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3038` → after: `L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3027) · [Before (L3038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3038)

```diff
-               case RM:
+               case wU:
```

#### 146. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3041` → after: `L3030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3030) · [Before (L3041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3041)

```diff
-               case sM:
+               case SU:
```

#### 147. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3043` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3032) · [Before (L3043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3043)

```diff
-               case kM:
+               case uU:
```

#### 148. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3045` → after: `L3034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3034) · [Before (L3045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3045)

```diff
-               case DM:
+               case rU:
```

#### 149. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3129` → after: `L3118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3118) · [Before (L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3129)

```diff
-               checked: null != iM ? iM : MM._wrapperState.initialChecked
+               checked: null != zU ? zU : UU._wrapperState.initialChecked
```

#### 150. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3429` → after: `L3418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3418) · [Before (L3429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3429)

```diff
-             MM: switch (rM) {
+             UU: switch (XU) {
```

#### 151. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3495` → after: `L3484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3484) · [Before (L3495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3495)

```diff
-             return 3 === rM.tag ? iM : null
+             return 3 === XU.tag ? zU : null
```

#### 152. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3567` → after: `L3556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3556) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3567)

```diff
-                 return iM.stateNode.current === iM ? MM : rM
+                 return zU.stateNode.current === zU ? UU : XU
```

#### 153. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3779` → after: `L3768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3768) · [Before (L3779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3779)

```diff
-             return 0 !== (MM = -1073741825 & MM.pendingLanes) ? MM : 1073741824 & MM ? 1073741824 : 0
+             return 0 !== (UU = -1073741825 & UU.pendingLanes) ? UU : 1073741824 & UU ? 1073741824 : 0
```

#### 154. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3903` → after: `L3892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3892) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3903)

```diff
-             return zO = SM.slice(MM, 1 < rM ? 1 - rM : void 0)
+             return oc = yU.slice(UU, 1 < XU ? 1 - XU : void 0)
```

#### 155. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3908` → after: `L3897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3897) · [Before (L3908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3908)

```diff
-             return "charCode" in MM ? 0 === (MM = MM.charCode) && 13 === rM && (MM = 13) : MM = rM, 10 === MM && (MM = 13), 32 <= MM || 13 === MM ? MM : 0
+             return "charCode" in UU ? 0 === (UU = UU.charCode) && 13 === XU && (UU = 13) : UU = XU, 10 === UU && (UU = 13), 32 <= UU || 13 === UU ? UU : 0
```

#### 156. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L3922` → after: `L3911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L3911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L3911) · [Before (L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L3922)

```diff
-               return this.isDefaultPrevented = (null != SM.defaultPrevented ? SM.defaultPrevented : !1 === SM.returnValue) ? HO : hO, this.isPropagationStopped = hO, this
+               return this.isDefaultPrevented = (null != yU.defaultPrevented ? yU.defaultPrevented : !1 === yU.returnValue) ? Yc : Nc, this.isPropagationStopped = Nc, this
```

#### 157. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4282` → after: `L4271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4271) · [Before (L4282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4282)

```diff
-               MM: {
+               UU: {
```

#### 158. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4324` → after: `L4313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4313) · [Before (L4324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4324)

```diff
-             var OM = iM.window === iM ? iM.document : 9 === iM.nodeType ? iM : iM.ownerDocument;
+             var cU = zU.window === zU ? zU.document : 9 === zU.nodeType ? zU : zU.ownerDocument;
```

#### 159. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4362` → after: `L4351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4351) · [Before (L4362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4362)

```diff
-               MM: {
+               UU: {
```

#### 160. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4428` → after: `L4417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4417) · [Before (L4428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4428)

```diff
-             if (0 === (1 & rM) && 0 === (2 & rM) && null !== OM) MM: for (;;) {
+             if (0 === (1 & XU) && 0 === (2 & XU) && null !== cU) UU: for (;;) {
```

#### 161. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4462` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4451) · [Before (L4462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4462)

```diff
-               MM: {
+               UU: {
```

#### 162. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4512-L4514` → after: `L4501-L4503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4501-L4503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4501-L4503) · [Before (L4512-L4514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4512-L4514)

```diff
-                     case ki:
-                     case Zi:
-                     case oi:
+                     case Sz:
+                     case rz:
+                     case uz:
```

#### 163. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4517` → after: `L4506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4506) · [Before (L4517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4517)

```diff
-                     case fi:
+                     case fz:
```

#### 164. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4557-L4558` → after: `L4546-L4547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4546-L4547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4546-L4547) · [Before (L4557-L4558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4557-L4558)

```diff
-                 if (nM = "mouseout" === MM || "pointerout" === MM, (!(PM = "mouseover" === MM || "pointerover" === MM) || 0 !== (16 & rM) || !(QM = iM.relatedTarget || iM.fromElement) || !Hj(QM) && !QM[Lj]) && (nM || PM) && (PM = SM.window === SM ? SM : (PM = SM.ownerDocument) ?  … [truncated]
-                   if (zM = bO, JM = "onMouseLeave", mM = "onMouseEnter", hM = "mouse", "pointerout" !== MM && "pointerover" !== MM || (zM = YO, JM = "onPointerLeave", mM = "onPointerEnter", hM = "pointer"), LM = null == nM ? PM : Jj(nM), HM = null == QM ? PM : Jj(QM), (PM = new z … [truncated]
+                 if (oU = "mouseout" === UU || "pointerout" === UU, (!(FU = "mouseover" === UU || "pointerover" === UU) || 0 !== (16 & XU) || !(DU = zU.relatedTarget || zU.fromElement) || !YQ(DU) && !DU[DQ]) && (oU || FU) && (FU = yU.window === yU ? yU : (FU = yU.ownerDocument) ?  … [truncated]
+                   if (EU = Rc, aU = "onMouseLeave", NU = "onMouseEnter", pU = "mouse", "pointerout" !== UU && "pointerover" !== UU || (EU = ic, aU = "onPointerLeave", NU = "onPointerEnter", pU = "pointer"), YU = null == oU ? FU : IQ(oU), IU = null == DU ? FU : IQ(DU), (FU = new E … [truncated]
```

#### 165. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4604` → after: `L4593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4593) · [Before (L4604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4604)

```diff
-                 if (BO) MM: {
+                 if (nc) UU: {
```

#### 166. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4622` → after: `L4611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4611) · [Before (L4622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4622)

```diff
-                 }), lM ? EM.data = lM : null !== (lM = cO(iM)) && (EM.data = lM))), (lM = IO ? function(MM, rM) {
+                 }), kU ? GU.data = kU : null !== (kU = bc(zU)) && (GU.data = kU))), (kU = lc ? function(UU, XU) {
```

#### 167. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4860` → after: `L4849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4849) · [Before (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4860)

```diff
-             Tj = void 0 !== Aj ? Aj : function() {},
+             jQ = void 0 !== MQ ? MQ : function() {},
```

#### 168. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4865` → after: `L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4854) · [Before (L4865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4865)

```diff
-             ia = 1e4 > ra ? xj : function() {
+             UA = 1e4 > hQ ? vQ : function() {
```

#### 169. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4871` → after: `L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4860) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4871)

```diff
-               case Fj:
+               case sQ:
```

#### 170. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4873` → after: `L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4862) · [Before (L4873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4873)

```diff
-               case Bj:
+               case nQ:
```

#### 171. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4875` → after: `L4864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4864) · [Before (L4875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4875)

```diff
-               case Xj:
+               case mQ:
```

#### 172. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4877` → after: `L4866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4866) · [Before (L4877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4877)

```diff
-               case Ij:
+               case lQ:
```

#### 173. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L4879` → after: `L4868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R4868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L4868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L4868) · [Before (L4879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L4879)

```diff
-               case Kj:
+               case xQ:
```

#### 174. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5032` → after: `L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5021) · [Before (L5032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5032)

```diff
-               null === iM ? rM.next = rM : (rM.next = iM.next, iM.next = rM), MM.pending = rM
+               null === zU ? XU.next = XU : (XU.next = zU.next, zU.next = XU), UU.pending = XU
```

#### 175. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5052` → after: `L5041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5041) · [Before (L5052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5052)

```diff
-                   null === jM ? SM = jM = aM : jM = jM.next = aM, iM = iM.next
+                   null === QU ? yU = QU = AU : QU = QU.next = AU, zU = zU.next
```

#### 176. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5054` → after: `L5043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5043) · [Before (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5054)

```diff
-                 null === jM ? SM = jM = rM : jM = jM.next = rM
+                 null === QU ? yU = QU = XU : QU = QU.next = XU
```

#### 177. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5064` → after: `L5053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5053) · [Before (L5064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5064)

```diff
-             null === (MM = iM.lastBaseUpdate) ? iM.firstBaseUpdate = rM : MM.next = rM, iM.lastBaseUpdate = rM
+             null === (UU = zU.lastBaseUpdate) ? zU.firstBaseUpdate = XU : UU.next = XU, zU.lastBaseUpdate = XU
```

#### 178. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5077` → after: `L5066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5066) · [Before (L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5077)

```diff
-               QM.next = null, null === PM ? aM = zM : PM.next = zM, PM = QM;
+               DU.next = null, null === FU ? AU = EU : FU.next = EU, FU = DU;
```

#### 179. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5081` → after: `L5070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5070) · [Before (L5081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5081)

```diff
-                 mM !== PM && (null === mM ? LM.firstBaseUpdate = zM : mM.next = zM, LM.lastBaseUpdate = QM)
+                 NU !== FU && (null === NU ? YU.firstBaseUpdate = EU : NU.next = EU, YU.lastBaseUpdate = DU)
```

#### 180. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5097` → after: `L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5086) · [Before (L5097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5097)

```diff
-                   MM: {
+                   UU: {
```

#### 181. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5150` → after: `L5139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5139) · [Before (L5150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5150)

```diff
-             iM = null === (iM = iM(OM, rM = MM.memoizedState)) || void 0 === iM ? rM : SM({}, rM, iM), MM.memoizedState = iM, 0 === MM.lanes && (MM.updateQueue.baseState = iM)
+             zU = null === (zU = zU(cU, XU = UU.memoizedState)) || void 0 === zU ? XU : yU({}, XU, zU), UU.memoizedState = zU, 0 === UU.lanes && (UU.updateQueue.baseState = zU)
```

#### 182. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5187` → after: `L5176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5176) · [Before (L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5187)

```diff
-             return "object" === typeof jM && null !== jM ? jM = Ea(jM) : (SM = uj(rM) ? tj : bj.current, jM = (OM = null !== (OM = rM.contextTypes) && void 0 !== OM) ? gj(MM, SM) : ej), rM = new rM(iM, jM), MM.memoizedState = null !== rM.state && void 0 !== rM.state ? rM.state :  … [truncated]
+             return "object" === typeof QU && null !== QU ? QU = gA(QU) : (yU = LQ(XU) ? WQ : RQ.current, QU = (cU = null !== (cU = XU.contextTypes) && void 0 !== cU) ? dQ(UU, yU) : ZQ), XU = new XU(zU, QU), UU.memoizedState = null !== XU.state && void 0 !== XU.state ? XU.state :  … [truncated]
```

#### 183. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5198` → after: `L5187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5187) · [Before (L5198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5198)

```diff
-             "object" === typeof jM && null !== jM ? SM.context = Ea(jM) : (jM = uj(rM) ? tj : bj.current, SM.context = gj(MM, jM)), ta(MM, iM, SM, OM), SM.state = MM.memoizedState, "function" === typeof(jM = rM.getDerivedStateFromProps) && (Ra(MM, rM, jM, iM), SM.state = MM.memoi … [truncated]
+             "object" === typeof QU && null !== QU ? yU.context = gA(QU) : (QU = LQ(XU) ? WQ : RQ.current, yU.context = dQ(UU, QU)), WA(UU, zU, yU, cU), yU.state = UU.memoizedState, "function" === typeof(QU = XU.getDerivedStateFromProps) && (eA(UU, XU, QU, zU), yU.state = UU.memoi … [truncated]
```

#### 184. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5250` → after: `L5239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5239) · [Before (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5250)

```diff
-               return rM.index = OM, MM ? null !== (OM = rM.alternate) ? (OM = OM.index) < iM ? (rM.flags = 2, iM) : OM : (rM.flags = 2, iM) : iM
+               return XU.index = cU, UU ? null !== (cU = XU.alternate) ? (cU = cU.index) < zU ? (XU.flags = 2, zU) : cU : (XU.flags = 2, zU) : zU
```

#### 185. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5277` → after: `L5266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5266) · [Before (L5277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5277)

```diff
-                   case CM:
+                   case RU:
```

#### 186. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5279` → after: `L5268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5268) · [Before (L5279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5279)

```diff
-                   case eM:
+                   case PU:
```

#### 187. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5293` → after: `L5282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5282) · [Before (L5293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5293)

```diff
-                   case CM:
+                   case RU:
```

#### 188. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5295` → after: `L5284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5284) · [Before (L5295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5295)

```diff
-                   case eM:
+                   case PU:
```

#### 189. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5308-L5311` → after: `L5297-L5300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5297-L5300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5297-L5300) · [Before (L5308-L5311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5308-L5311)

```diff
-                   case CM:
-                     return MM = MM.get(null === OM.key ? iM : OM.key) || null, OM.type === bM ? LM(rM, MM, OM.props.children, SM, OM.key) : QM(rM, MM, OM, SM);
-                   case eM:
-                     return zM(rM, MM = MM.get(null === OM.key ? iM : OM.key) || null, OM, SM)
+                   case RU:
+                     return UU = UU.get(null === cU.key ? zU : cU.key) || null, cU.type === WU ? YU(XU, UU, cU.props.children, yU, cU.key) : DU(XU, UU, cU, yU);
+                   case PU:
+                     return EU(XU, UU = UU.get(null === cU.key ? zU : cU.key) || null, cU, yU)
```

#### 190. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5327` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5316) · [Before (L5327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5327)

```diff
-                 MM && LM && null === yM.alternate && rM(SM, LM), aM = jM(yM, aM, JM), null === zM ? QM = yM : zM.sibling = yM, zM = yM, LM = dM
+                 UU && YU && null === gU.alternate && XU(yU, YU), AU = QU(gU, AU, aU), null === EU ? DU = gU : EU.sibling = gU, EU = gU, YU = tU
```

#### 191. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5331` → after: `L5320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5320) · [Before (L5331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5331)

```diff
-                 for (; JM < PM.length; JM++) null !== (LM = mM(SM, PM[JM], nM)) && (aM = jM(LM, aM, JM), null === zM ? QM = LM : zM.sibling = LM, zM = LM);
+                 for (; aU < FU.length; aU++) null !== (YU = NU(yU, FU[aU], oU)) && (AU = QU(YU, AU, aU), null === EU ? DU = YU : EU.sibling = YU, EU = YU);
```

#### 192. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5334` → after: `L5323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5323) · [Before (L5334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5334)

```diff
-               for (LM = OM(SM, LM); JM < PM.length; JM++) null !== (dM = hM(LM, SM, JM, PM[JM], nM)) && (MM && null !== dM.alternate && LM.delete(null === dM.key ? JM : dM.key), aM = jM(dM, aM, JM), null === zM ? QM = dM : zM.sibling = dM, zM = dM);
+               for (YU = cU(yU, YU); aU < FU.length; aU++) null !== (tU = pU(YU, yU, aU, FU[aU], oU)) && (UU && null !== tU.alternate && YU.delete(null === tU.key ? aU : tU.key), AU = QU(tU, AU, aU), null === EU ? DU = tU : EU.sibling = tU, EU = tU);
```

#### 193. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5351` → after: `L5340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5340) · [Before (L5351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5351)

```diff
-                 MM && JM && null === EM.alternate && rM(SM, JM), PM = jM(EM, PM, dM), null === LM ? zM = EM : LM.sibling = EM, LM = EM, JM = yM
+                 UU && aU && null === GU.alternate && XU(yU, aU), FU = QU(GU, FU, tU), null === YU ? EU = GU : YU.sibling = GU, YU = GU, aU = gU
```

#### 194. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5355` → after: `L5344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5344) · [Before (L5355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5355)

```diff
-                 for (; !lM.done; dM++, lM = nM.next()) null !== (lM = mM(SM, lM.value, QM)) && (PM = jM(lM, PM, dM), null === LM ? zM = lM : LM.sibling = lM, LM = lM);
+                 for (; !kU.done; tU++, kU = oU.next()) null !== (kU = NU(yU, kU.value, DU)) && (FU = QU(kU, FU, tU), null === YU ? EU = kU : YU.sibling = kU, YU = kU);
```

#### 195. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5358` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5347) · [Before (L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5358)

```diff
-               for (JM = OM(SM, JM); !lM.done; dM++, lM = nM.next()) null !== (lM = hM(JM, SM, dM, lM.value, QM)) && (MM && null !== lM.alternate && JM.delete(null === lM.key ? dM : lM.key), PM = jM(lM, PM, dM), null === LM ? zM = lM : LM.sibling = lM, LM = lM);
+               for (aU = cU(yU, aU); !kU.done; tU++, kU = oU.next()) null !== (kU = pU(aU, yU, tU, kU.value, DU)) && (UU && null !== kU.alternate && aU.delete(null === kU.key ? tU : kU.key), FU = QU(kU, FU, tU), null === YU ? EU = kU : YU.sibling = kU, YU = kU);
```

#### 196. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5368-L5369` → after: `L5357-L5358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5357-L5358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5357-L5358) · [Before (L5368-L5369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5368-L5369)

```diff
-                 case CM:
-                   MM: {
+                 case RU:
+                   UU: {
```

#### 197. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5389-L5390` → after: `L5378-L5379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5378-L5379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5378-L5379) · [Before (L5389-L5390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5389-L5390)

```diff
-                 case eM:
-                   MM: {
+                 case PU:
+                   UU: {
```

#### 198. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5528` → after: `L5517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5517) · [Before (L5528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5528)

```diff
-               MM: {
+               UU: {
```

#### 199. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5578` → after: `L5567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5567) · [Before (L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5578)

```diff
-             if (HP = jM, hP = rM, rM.memoizedState = null, rM.updateQueue = null, rM.lanes = 0, LP.current = null === MM || null === MM.memoizedState ? KP : qP, MM = iM(OM, SM), lP) {
+             if (YF = QU, NF = XU, XU.memoizedState = null, XU.updateQueue = null, XU.lanes = 0, DF.current = null === UU || null === UU.memoizedState ? xF : JF, UU = zU(cU, yU), tF) {
```

#### 200. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5597` → after: `L5586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5586) · [Before (L5597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5597)

```diff
-             return null === dP ? hP.memoizedState = dP = MM : dP = dP.next = MM, dP
+             return null === pF ? NF.memoizedState = pF = UU : pF = pF.next = UU, pF
```

#### 201. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5615` → after: `L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5604) · [Before (L5615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5615)

```diff
-               }, null === dP ? hP.memoizedState = dP = MM : dP = dP.next = MM
+               }, null === pF ? NF.memoizedState = pF = UU : pF = pF.next = UU
```

#### 202. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5664` → after: `L5653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5653) · [Before (L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5664)

```diff
-               null === nM ? jM = OM : nM.next = PM, ES(OM, rM.memoizedState) || (cP = !0), rM.memoizedState = OM, rM.baseState = jM, rM.baseQueue = nM, iM.lastRenderedState = OM
+               null === oU ? QU = cU : oU.next = FU, gy(cU, XU.memoizedState) || (bF = !0), XU.memoizedState = cU, XU.baseState = QU, XU.baseQueue = oU, zU.lastRenderedState = cU
```

#### 203. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5692` → after: `L5681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5681) · [Before (L5692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5692)

```diff
-             if (null !== SM ? MM = SM === OM : (MM = MM.mutableReadLanes, (MM = (HP & MM) === MM) && (rM._workInProgressVersionPrimary = OM, QP.push(rM))), MM) return iM(rM._source);
+             if (null !== yU ? UU = yU === cU : (UU = UU.mutableReadLanes, (UU = (YF & UU) === UU) && (XU._workInProgressVersionPrimary = cU, FF.push(XU))), UU) return zU(XU._source);
```

#### 204. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5774` → after: `L5763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5763) · [Before (L5774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5774)

```diff
-             }, hP.updateQueue = rM, rM.lastEffect = MM.next = MM) : null === (iM = rM.lastEffect) ? rM.lastEffect = MM.next = MM : (OM = iM.next, iM.next = MM, MM.next = OM, rM.lastEffect = MM), MM
+             }, NF.updateQueue = XU, XU.lastEffect = UU.next = UU) : null === (zU = XU.lastEffect) ? XU.lastEffect = UU.next = UU : (cU = zU.next, zU.next = UU, UU.next = cU, XU.lastEffect = UU), UU
```

#### 205. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L5869` → after: `L5858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R5858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L5858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L5858) · [Before (L5869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L5869)

```diff
-             if (null === aM ? jM.next = jM : (jM.next = aM.next, aM.next = jM), rM.pending = jM, aM = MM.alternate, MM === hP || null !== aM && aM === hP) lP = yP = !0;
+             if (null === AU ? QU.next = QU : (QU.next = AU.next, AU.next = QU), XU.pending = QU, AU = UU.alternate, UU === NF || null !== AU && AU === NF) tF = aF = !0;
```

#### 206. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6071` → after: `L6060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6060) · [Before (L6071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6071)

```diff
-             return aM = MM.child, 0 === (SM & jM) && (SM = aM.memoizedProps, (iM = null !== (iM = iM.compare) ? iM : GS)(SM, OM) && MM.ref === rM.ref) ? bn(MM, rM, jM) : (rM.flags |= 1, (MM = dz(aM, OM)).ref = rM.ref, MM.return = rM, rM.child = MM)
+             return AU = UU.child, 0 === (yU & QU) && (yU = AU.memoizedProps, (zU = null !== (zU = zU.compare) ? zU : Gy)(yU, cU) && UU.ref === XU.ref) ? Bo(UU, XU, QU) : (XU.flags |= 1, (UU = IE(AU, cU)).ref = XU.ref, UU.return = XU, XU.child = UU)
```

#### 207. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6091` → after: `L6080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6080) · [Before (L6091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6091)

```diff
-                 if (0 === (1073741824 & iM)) return MM = null !== jM ? jM.baseLanes | iM : iM, rM.lanes = rM.childLanes = 1073741824, rM.memoizedState = {
+                 if (0 === (1073741824 & zU)) return UU = null !== QU ? QU.baseLanes | zU : zU, XU.lanes = XU.childLanes = 1073741824, XU.memoizedState = {
```

#### 208. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6108` → after: `L6097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6097) · [Before (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6108)

```diff
-             var jM = uj(iM) ? tj : bj.current;
+             var QU = LQ(zU) ? WQ : RQ.current;
```

#### 209. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6124` → after: `L6113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6113) · [Before (L6124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6124)

```diff
-               "object" === typeof QM && null !== QM ? QM = Ea(QM) : QM = gj(rM, QM = uj(iM) ? tj : bj.current);
+               "object" === typeof DU && null !== DU ? DU = gA(DU) : DU = dQ(XU, DU = LQ(zU) ? WQ : RQ.current);
```

#### 210. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6131` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6120) · [Before (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6131)

```diff
-               aM = rM.stateNode, Ca(MM, rM), PM = rM.memoizedProps, QM = rM.type === rM.elementType ? PM : za(rM.type, PM), aM.props = QM, LM = rM.pendingProps, mM = aM.context, "object" === typeof(nM = iM.contextType) && null !== nM ? nM = Ea(nM) : nM = gj(rM, nM = uj(iM) ? tj : … [truncated]
+               AU = XU.stateNode, BA(UU, XU), FU = XU.memoizedProps, DU = XU.type === XU.elementType ? FU : oA(XU.type, FU), AU.props = DU, YU = XU.pendingProps, NU = AU.context, "object" === typeof(oU = zU.contextType) && null !== oU ? oU = gA(oU) : oU = dQ(XU, oU = LQ(zU) ? WQ : … [truncated]
```

#### 211. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6214` → after: `L6203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6203) · [Before (L6214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6214)

```diff
-               CL: null,
+               WY: null,
```

#### 212. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6220` → after: `L6209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6209) · [Before (L6220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6220)

```diff
-             } : (aM.isBackwards = rM, aM.CL = null, aM.renderingStartTime = 0, aM.last = OM, aM.tail = iM, aM.tailMode = SM, aM.lastEffect = jM)
+             } : (AU.isBackwards = XU, AU.WY = null, AU.renderingStartTime = 0, AU.last = cU, AU.tail = zU, AU.tailMode = yU, AU.lastEffect = QU)
```

#### 213. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6229` → after: `L6218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6218) · [Before (L6229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6229)

```diff
-               if (null !== MM && 0 !== (64 & MM.flags)) MM: for (MM = rM.child; null !== MM;) {
+               if (null !== UU && 0 !== (64 & UU.flags)) UU: for (UU = XU.child; null !== UU;) {
```

#### 214. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6378` → after: `L6367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6367) · [Before (L6378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6378)

```diff
-                     switch (QM = 9 === jM.nodeType ? jM : jM.ownerDocument, MM === Hr && (MM = Jr(iM)), MM === Hr ? "script" === iM ? ((MM = QM.createElement("div")).innerHTML = "<script><\/script>", MM = MM.removeChild(MM.firstChild)) : "string" === typeof OM.is ? MM = QM.create … [truncated]
+                     switch (DU = 9 === QU.nodeType ? QU : QU.ownerDocument, UU === IX && (UU = aX(zU)), UU === IX ? "script" === zU ? ((UU = DU.createElement("div")).innerHTML = "<script><\/script>", UU = UU.removeChild(UU.firstChild)) : "string" === typeof cU.is ? UU = DU.create … [truncated]
```

#### 215. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6455` → after: `L6444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6444) · [Before (L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6455)

```diff
-                   iM = Xa(Ba.current), Xa(va.current), PP(rM) ? (OM = rM.stateNode, iM = rM.memoizedProps, OM[Qj] = rM, OM.nodeValue !== iM && (rM.flags |= 4)) : ((OM = (9 === iM.nodeType ? iM : iM.ownerDocument).createTextNode(OM))[Qj] = rM, rM.stateNode = OM)
+                   zU = mA(nA.current), mA(VA.current), QF(XU) ? (cU = XU.stateNode, zU = XU.memoizedProps, cU[FQ] = XU, cU.nodeValue !== zU && (XU.flags |= 4)) : ((cU = (9 === zU.nodeType ? zU : zU.ownerDocument).createTextNode(cU))[FQ] = XU, XU.stateNode = cU)
```

#### 216. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6466` → after: `L6455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6455) · [Before (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6466)

```diff
-                 if (PM = 0 !== (64 & rM.flags), null === (QM = OM.CL))
+                 if (FU = 0 !== (64 & XU.flags), null === (DU = cU.WY))
```

#### 217. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6487` → after: `L6476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6476) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6487)

```diff
-                   OM.isBackwards ? (QM.sibling = rM.child, rM.child = QM) : (null !== (iM = OM.last) ? iM.sibling = QM : rM.child = QM, OM.last = QM)
+                   cU.isBackwards ? (DU.sibling = XU.child, XU.child = DU) : (null !== (zU = cU.last) ? zU.sibling = DU : XU.child = DU, cU.last = DU)
```

#### 218. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6489` → after: `L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6478) · [Before (L6489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6489)

```diff
-                 return null !== OM.tail ? (iM = OM.tail, OM.CL = iM, OM.tail = iM.sibling, OM.lastEffect = rM.lastEffect, OM.renderingStartTime = ia(), iM.sibling = null, rM = Va.current, Cj(Va, PM ? 1 & rM | 2 : 1 & rM), iM) : null;
+                 return null !== cU.tail ? (zU = cU.tail, cU.WY = zU, cU.tail = zU.sibling, cU.lastEffect = XU.lastEffect, cU.renderingStartTime = UA(), zU.sibling = null, XU = KA.current, BQ(KA, FU ? 1 & XU | 2 : 1 & XU), zU) : null;
```

#### 219. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6639` → after: `L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6628) · [Before (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6639)

```diff
-                 componentStack: null !== MM ? MM : ""
+                 componentStack: null !== UU ? UU : ""
```

#### 220. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6670` → after: `L6659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6659) · [Before (L6670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6670)

```diff
-                   rM = (MM = rM.stateNode).getSnapshotBeforeUpdate(rM.elementType === rM.type ? iM : za(rM.type, iM), OM), MM.__reactInternalSnapshotBeforeUpdate = rM
+                   XU = (UU = XU.stateNode).getSnapshotBeforeUpdate(XU.elementType === XU.type ? zU : oA(XU.type, zU), cU), UU.__reactInternalSnapshotBeforeUpdate = XU
```

#### 221. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6809` → after: `L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6798) · [Before (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6809)

```diff
-             MM: {
+             UU: {
```

#### 222. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6828` → after: `L6817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6817) · [Before (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6828)

```diff
-             16 & iM.flags && (Ur(rM, ""), iM.flags &= -17);MM: rM: for (iM = MM;;) {
+             16 & zU.flags && (BX(XU, ""), zU.flags &= -17);UU: XU: for (zU = UU;;) {
```

#### 223. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6869` → after: `L6858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6858) · [Before (L6869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6869)

```diff
-                 MM: for (;;) {
+                 UU: for (;;) {
```

#### 224. `bundles/preprod.bloxd.io/main.js` (Changed code · before: `L6885` → after: `L6874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78R6874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-76e2bba4cbff0be229815d4936a5293e6eb0f0464069baeff32505b5caf3dd78) · [After (L6874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/main.js#L6874) · [Before (L6885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/main.js#L6885)

```diff
-                 MM: for (var PM = MM, nM = SM, QM = nM;;)
+                 UU: for (var FU = UU, oU = yU, DU = oU;;)
```
