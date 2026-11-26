# Changed — Bundle Modifications Report (Part 009 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `9 / 99` (**400** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 008](part-008.md) · [Part 010 →](part-010.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (3969 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 1531. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L11970` → after: `L12153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12153) · [Before (L11970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L11970)

```diff
-       const [OM, SM, jM] = rM, aM = Math.floor(OM / ZM.y), nM = Math.floor(SM / ZM.y), QM = Math.floor(jM / ZM.y), zM = (0, ZH.d)(aM, nM, QM), LM = MM.get(zM);
+       const [cU, yU, QU] = XU, AU = Math.floor(cU / fU.D), oU = Math.floor(yU / fU.D), DU = Math.floor(QU / fU.D), EU = (0, rI.b)(AU, oU, DU), YU = UU.get(EU);
```

#### 1532. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L11972-L11975` → after: `L12155-L12158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12155-L12158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12155-L12158) · [Before (L11972-L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L11972-L11975)

```diff
-       const mM = PM.d.mod(OM, ZM.y),
-         HM = PM.d.mod(SM, ZM.y),
-         hM = PM.d.mod(jM, ZM.y);
-       (0, ZH.g)(LM.Xm).set(mM, HM, hM, iM)
+       const NU = FU.d.mod(cU, fU.D),
+         IU = FU.d.mod(yU, fU.D),
+         pU = FU.d.mod(QU, fU.D);
+       (0, rI.d)(YU.lN).set(NU, IU, pU, zU)
```

#### 1533. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L11979` → after: `L12162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12162) · [Before (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L11979)

```diff
-       const [OM, SM, jM] = rM, aM = Math.floor(OM / ZM.y), nM = Math.floor(SM / ZM.y), QM = Math.floor(jM / ZM.y), zM = MM.get((0, ZH.d)(aM, nM, QM));
+       const [cU, yU, QU] = XU, AU = Math.floor(cU / fU.D), oU = Math.floor(yU / fU.D), DU = Math.floor(QU / fU.D), EU = UU.get((0, rI.b)(AU, oU, DU));
```

#### 1534. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L11981` → after: `L12164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12164) · [Before (L11981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L11981)

```diff
-       const LM = [PM.d.mod(OM, ZM.y), PM.d.mod(SM, ZM.y), PM.d.mod(jM, ZM.y)],
+       const YU = [FU.d.mod(cU, fU.D), FU.d.mod(yU, fU.D), FU.d.mod(QU, fU.D)],
```

#### 1535. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L11993-L11998` → after: `L12176-L12181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12176-L12181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12176-L12181) · [Before (L11993-L11998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L11993-L11998)

```diff
-       for (const SM of rM.hU.iZ(rM.hU.names.position)) iM.add(SM.HZ);
-       for (const SM of rM.hU.iZ("itemState")) iM.add(SM.HZ);
-       for (const SM of iM) Fm(rM, SM) || (rM.hU.deleteEntity(SM), (0, oH.d)(String(SM)));
-       rM.rY[rM.eD] && (rM.rY[rM.eD] = {});
-       const OM = rM.hU.VrM(rM.eD);
-       OM && (OM.planeEId = null), dM.i.Tz(`otherEntitySettingsClientifiedEId|${rM.eD}|canSee`, !1), rM.hU.KrM(rM.eD).isAlive = !1
+       for (const yU of XU.xG.uH(XU.xG.names.position)) zU.add(yU.iH);
+       for (const yU of XU.xG.uH("itemState")) zU.add(yU.iH);
+       for (const yU of zU) sN(XU, yU) || (XU.xG.deleteEntity(yU), (0, uI.d)(String(yU)));
+       XU.YM[XU.pM] && (XU.YM[XU.pM] = {});
+       const cU = XU.xG.MzU(XU.pM);
+       cU && (cU.planeEId = null), tU.k.UY(`otherEntitySettingsClientifiedEId|${XU.pM}|canSee`, !1), XU.xG.fzU(XU.pM).isAlive = !1
```

#### 1536. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12002` → after: `L12185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12185) · [Before (L12002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12002)

```diff
-       MM.uL.miM(), MM.uL.YrM.empty(), MM.uL.HiM = !0;
+       UU.qY.hzU(), UU.qY.LzU.empty(), UU.qY.UcU = !0;
```

#### 1537. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12010-L12012` → after: `L12193-L12195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12193-L12195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12193-L12195) · [Before (L12010-L12012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12010-L12012)

```diff
-       MM.uL.hiM(rM * ZM.y, iM * ZM.y, OM * ZM.y);
-       const aM = `${rM}|${iM}|${OM}|${MM.CMM}`,
-         PM = new Uint16Array(ZM.y * ZM.y * ZM.y);
+       UU.qY.XcU(XU * fU.D, zU * fU.D, cU * fU.D);
+       const AU = `${XU}|${zU}|${cU}|${UU.DXU}`,
+         FU = new Uint16Array(fU.D * fU.D * fU.D);
```

#### 1538. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12014-L12015` → after: `L12197-L12198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12197-L12198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12197-L12198) · [Before (L12014-L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12014-L12015)

```diff
-       const nM = (0, ZH.g)(PM);
-       MM.uL.hG(aM, nM, null), MM.bloxd.chunkAdded(rM, iM, OM, nM, NH(jM))
+       const oU = (0, rI.d)(FU);
+       UU.qY.eZ(AU, oU, null), UU.bloxd.chunkAdded(XU, zU, cU, oU, HI(QU))
```

#### 1539. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12020-L12023` → after: `L12203-L12206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12203-L12206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12203-L12206) · [Before (L12020-L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12020-L12023)

```diff
-       for (const iM of Object.keys(MM.uL.yJ.hash)) {
-         const OM = MM.uL.yJ.hash[Number(iM)];
-         rM.set((0, ZH.d)(OM.i, OM.j, OM.k), {
-           Xm: new Uint16Array(OM.Xm.data),
+       for (const zU of Object.keys(UU.qY.Ga.hash)) {
+         const cU = UU.qY.Ga.hash[Number(zU)];
+         XU.set((0, rI.b)(cU.i, cU.j, cU.k), {
+           lN: new Uint16Array(cU.lN.data),
```

#### 1540. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12029-L12030` → after: `L12212-L12213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12212-L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12212-L12213) · [Before (L12029-L12030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12029-L12030)

```diff
-     var TH = iM(34822),
-       VH = iM(37872);
+     var jI = zU(37211),
+       KI = zU(37674);
```

#### 1541. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12033` → after: `L12216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12216) · [Before (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12033)

```diff
-         this.client = MM, this.Cm = rM, this.isRecording = !1, this.isClipping = !1, this.clippingWanted = !1, this.sessionAllowsClipping = !1, this.maxClipTicks = Nm.f * hM.f.clientTicksPerSecond, this.windowStartChunks = new Map, this.state = {
+         this.client = UU, this.WN = XU, this.isRecording = !1, this.isClipping = !1, this.clippingWanted = !1, this.sessionAllowsClipping = !1, this.maxClipTicks = MN.h * pU.f.clientTicksPerSecond, this.windowStartChunks = new Map, this.state = {
```

#### 1542. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12035` → after: `L12218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12218) · [Before (L12035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12035)

```diff
-             formatVersion: Ym.c,
+             formatVersion: HN.g,
```

#### 1543. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12037-L12038` → after: `L12220-L12221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12220-L12221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12220-L12221) · [Before (L12037-L12038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12037-L12038)

```diff
-             zk: hM.f.clientTicksPerSecond,
-             keyframeIntervalTicks: Ym.b,
+             bq: pU.f.clientTicksPerSecond,
+             keyframeIntervalTicks: HN.c,
```

#### 1544. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12043` → after: `L12226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12226) · [Before (L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12043)

```diff
-             lobbyType: fm.d.STANDARD,
+             lobbyType: iN.c.STANDARD,
```

#### 1545. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12061` → after: `L12244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12244) · [Before (L12061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12061)

```diff
-         }, this.pendingStructuralEvents = [], this.pendingEphemeralEvents = [], this.effectTracker = new dH.c;
+         }, this.pendingStructuralEvents = [], this.pendingEphemeralEvents = [], this.effectTracker = new pI.b;
```

#### 1546. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12065-L12066` → after: `L12248-L12249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12248-L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12248-L12249) · [Before (L12065-L12066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12065-L12066)

```diff
-         this.Cm.on("bL", iM);
-         const OM = dM.i.subscribe("EffectUpdate", (MM => {
+         this.WN.on("LY", zU);
+         const cU = tU.k.subscribe("EffectUpdate", (UU => {
```

#### 1547. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12069` → after: `L12252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12252) · [Before (L12069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12069)

```diff
-               Pi: Am(MM.Pi)
+               iX: vN(UU.iX)
```

#### 1548. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12072-L12073` → after: `L12255-L12256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12255-L12256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12255-L12256) · [Before (L12072-L12073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12072-L12073)

```diff
-           SM = dM.i.subscribe("RemoveEffect", (MM => {
-             this.isCapturing() && this.effectTracker.handleRemove(Am(MM.Pi), MM.name)
+           yU = tU.k.subscribe("RemoveEffect", (UU => {
+             this.isCapturing() && this.effectTracker.handleRemove(vN(UU.iX), UU.name)
```

#### 1549. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12076` → after: `L12259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12259) · [Before (L12076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12076)

```diff
-           this.Cm.off("bL", iM), dM.i.unsubscribe(OM), dM.i.unsubscribe(SM)
+           this.WN.off("LY", zU), tU.k.unsubscribe(cU), tU.k.unsubscribe(yU)
```

#### 1550. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12078` → after: `L12261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12261) · [Before (L12078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12078)

```diff
-         const jM = ka.d.get("clientEscMenuOptions");
+         const QU = rA.e.get("clientEscMenuOptions");
```

#### 1551. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12101` → after: `L12284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12284) · [Before (L12101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12101)

```diff
-         return this.state.ticks.length / this.state.meta.zk
+         return this.state.ticks.length / this.state.meta.bq
```

#### 1552. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12107` → after: `L12290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12290) · [Before (L12107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12107)

```diff
-         this.maxClipTicks = PM.d.clamp(MM, Nm.k, Nm.g) * hM.f.clientTicksPerSecond, this.isClipping && this.maybeEvictClipWindow(), dM.i.Tz("gameRecorder|clipSettingsChanged")
+         this.maxClipTicks = FU.d.clamp(UU, MN.m, MN.i) * pU.f.clientTicksPerSecond, this.isClipping && this.maybeEvictClipWindow(), tU.k.UY("gameRecorder|clipSettingsChanged")
```

#### 1553. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12110` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12293) · [Before (L12110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12110)

```diff
-         this.gameAllowsReplays() ? this.isClipping ? 0 !== this.state.ticks.length ? (this.saveCapture(), this.beginCaptureSession(), (0, VH.d)(VH.c.clipSaved)) : (0, VH.d)(VH.c.clipEmpty) : (0, VH.d)(VH.c.clippingNotOn) : this.showReplaysDisabledMessage()
+         this.gameAllowsReplays() ? this.isClipping ? 0 !== this.state.ticks.length ? (this.saveCapture(), this.beginCaptureSession(), (0, KI.i)(KI.e.clipSaved)) : (0, KI.i)(KI.e.clipEmpty) : (0, KI.i)(KI.e.clippingNotOn) : this.showReplaysDisabledMessage()
```

#### 1554. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12113` → after: `L12296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12296) · [Before (L12113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12113)

```diff
-         this.isClipping && (this.isClipping = !1, this.clearCaptureBuffers(), dM.i.Tz("gameRecorder|setClipping", !1))
+         this.isClipping && (this.isClipping = !1, this.clearCaptureBuffers(), tU.k.UY("gameRecorder|setClipping", !1))
```

#### 1555. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12135` → after: `L12318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12318) · [Before (L12135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12135)

```diff
-             oi: rM,
+             nX: XU,
```

#### 1556. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12137` → after: `L12320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12320) · [Before (L12137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12137)

```diff
-             Yi: OM
+             mX: cU
```

#### 1557. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12145` → after: `L12328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12328) · [Before (L12145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12145)

```diff
-             pS: MM,
+             Ly: UU,
```

#### 1558. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12148` → after: `L12331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12331) · [Before (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12148)

```diff
-             DS: MH(OM)
+             wy: TN(cU)
```

#### 1559. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12156-L12157` → after: `L12339-L12340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12339-L12340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12339-L12340) · [Before (L12156-L12157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12156-L12157)

```diff
-             QS: Am(MM),
-             zS: rM,
+             FX: vN(UU),
+             oX: XU,
```

#### 1560. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12159-L12160` → after: `L12342-L12343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12342-L12343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12342-L12343) · [Before (L12159-L12160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12159-L12160)

```diff
-             LS: OM,
-             mS: SM
+             DX: cU,
+             EX: yU
```

#### 1561. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12168` → after: `L12351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12351) · [Before (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12168)

```diff
-             xj: Am(MM),
+             fQ: vN(UU),
```

#### 1562. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12175` → after: `L12358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12358) · [Before (L12175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12175)

```diff
-           const SM = NH(this.Cm.bloxd.blockDataOwner.getSharedBlockArr(MM, rM, iM));
+           const yU = HI(this.WN.bloxd.blockDataOwner.getSharedBlockArr(UU, XU, zU));
```

#### 1563. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12189` → after: `L12372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12372) · [Before (L12189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12189)

```diff
-           const jM = null === (OM = this.Cm.uL.yJ.lJ(MM, rM, iM)) || void 0 === OM || null === (SM = OM.Xm) || void 0 === SM ? void 0 : SM.data,
+           const QU = null === (cU = this.WN.qY.Ga.Ba(UU, XU, zU)) || void 0 === cU || null === (yU = cU.lN) || void 0 === yU ? void 0 : yU.data,
```

#### 1564. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12191` → after: `L12374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12374) · [Before (L12191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12191)

```diff
-             PM = NH(this.Cm.bloxd.blockDataOwner.getSharedBlockArr(MM, rM, iM));
+             FU = HI(this.WN.bloxd.blockDataOwner.getSharedBlockArr(UU, XU, zU));
```

#### 1565. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12205-L12206` → after: `L12388-L12389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12388-L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12388-L12389) · [Before (L12205-L12206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12205-L12206)

```diff
-           const aM = YH(null !== (jM = this.Cm.bloxd.blockDataOwner.getSharedDataForBlock(MM, rM, iM)) && void 0 !== jM ? jM : null),
-             PM = this.Cm.bloxd.getMetaInfo(OM).rootId !== this.Cm.bloxd.getMetaInfo(SM).rootId ? null : YH(aM);
+           const AU = iI(null !== (QU = this.WN.bloxd.blockDataOwner.getSharedDataForBlock(UU, XU, zU)) && void 0 !== QU ? QU : null),
+             FU = this.WN.bloxd.getMetaInfo(cU).rootId !== this.WN.bloxd.getMetaInfo(yU).rootId ? null : iI(AU);
```

#### 1566. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12208` → after: `L12391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12391) · [Before (L12208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12208)

```diff
-             type: "cW",
+             type: "Jw",
```

#### 1567. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12231` → after: `L12414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12414) · [Before (L12231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12231)

```diff
-         return null === OM || void 0 === OM ? null : YH(null !== (SM = this.Cm.bloxd.blockDataOwner.getSharedDataForBlock(MM, rM, iM, OM)) && void 0 !== SM ? SM : null)
+         return null === cU || void 0 === cU ? null : iI(null !== (yU = this.WN.bloxd.blockDataOwner.getSharedDataForBlock(UU, XU, zU, cU)) && void 0 !== yU ? yU : null)
```

#### 1568. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12237-L12239` → after: `L12420-L12422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12420-L12422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12420-L12422) · [Before (L12237-L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12237-L12239)

```diff
-             Pi: Am(MM),
-             Mr: rM,
-             rr: iM
+             iX: vN(UU),
+             gU: XU,
+             kU: zU
```

#### 1569. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12278` → after: `L12461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12461) · [Before (L12278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12278)

```diff
-             camera: sH(this.Cm),
+             camera: qI(this.WN),
```

#### 1570. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12295` → after: `L12478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12478) · [Before (L12295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12295)

```diff
-         return !0 === this.Cm.aU.canRecordReplays
+         return !0 === this.WN.mG.canRecordReplays
```

#### 1571. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12298` → after: `L12481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12481) · [Before (L12298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12298)

```diff
-         (0, VH.d)(VH.c.disallowed)
+         (0, KI.i)(KI.e.disallowed)
```

#### 1572. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12304` → after: `L12487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12487) · [Before (L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12304)

```diff
-         this.isRecording = !1, this.clearCaptureBuffers(), dM.i.Tz("gameRecorder|setRecording", !1), (0, VH.d)(VH.c.recordingTurnedOff)
+         this.isRecording = !1, this.clearCaptureBuffers(), tU.k.UY("gameRecorder|setRecording", !1), (0, KI.i)(KI.e.recordingTurnedOff)
```

#### 1573. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12310` → after: `L12493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12493) · [Before (L12310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12310)

```diff
-         return this.clippingWanted && this.sessionAllowsClipping && this.gameAllowsReplays() && !this.isRecording && !this.isClipping && !this.client.isReplayMode() && !(0, TH.b)() && !!this.client.getConnectionInfo()
+         return this.clippingWanted && this.sessionAllowsClipping && this.gameAllowsReplays() && !this.isRecording && !this.isClipping && !this.client.isReplayMode() && !(0, jI.e)() && !!this.client.getConnectionInfo()
```

#### 1574. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12330` → after: `L12513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12513) · [Before (L12330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12330)

```diff
-         (0, kH.i)({
+         (0, SI.h)({
```

#### 1575. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12338-L12339` → after: `L12521-L12522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12521-L12522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12521-L12522) · [Before (L12338-L12339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12338-L12339)

```diff
-           OM = null !== (MM = null === iM || void 0 === iM ? void 0 : iM.gameNameWithVariation) && void 0 !== MM ? MM : "",
-           SM = null !== (rM = null === iM || void 0 === iM ? void 0 : iM.lobbyName) && void 0 !== rM ? rM : "";
+           cU = null !== (UU = null === zU || void 0 === zU ? void 0 : zU.gameNameWithVariation) && void 0 !== UU ? UU : "",
+           yU = null !== (XU = null === zU || void 0 === zU ? void 0 : zU.lobbyName) && void 0 !== XU ? XU : "";
```

#### 1576. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12341` → after: `L12524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12524) · [Before (L12341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12341)

```diff
-           formatVersion: Ym.c,
+           formatVersion: HN.g,
```

#### 1577. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12343-L12344` → after: `L12526-L12527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12526-L12527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12526-L12527) · [Before (L12343-L12344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12343-L12344)

```diff
-           zk: hM.f.clientTicksPerSecond,
-           keyframeIntervalTicks: Ym.b,
+           bq: pU.f.clientTicksPerSecond,
+           keyframeIntervalTicks: HN.c,
```

#### 1578. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12347-L12352` → after: `L12530-L12535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12530-L12535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12530-L12535) · [Before (L12347-L12352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12347-L12352)

```diff
-           gameName: OM ? (0, PM.Mb)(OM) : "",
-           variation: OM ? (0, PM.Jb)(OM) : void 0,
-           lobbyType: (0, Cr.w)(SM),
-           localPlayerEntityId: Am(this.Cm.eD),
-           serverPlayerEntityId: Am(this.Cm.IMM)
-         }, this.windowStartChunks = qH(this.Cm)
+           gameName: cU ? (0, FU.Tb)(cU) : "",
+           variation: cU ? (0, FU.Nb)(cU) : void 0,
+           lobbyType: (0, PX.s)(yU),
+           localPlayerEntityId: vN(this.WN.pM),
+           serverPlayerEntityId: vN(this.WN.SXU)
+         }, this.windowStartChunks = JI(this.WN)
```

#### 1579. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12355` → after: `L12538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12538) · [Before (L12355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12355)

```diff
-         this.isClipping || this.isRecording || (this.isClipping = !0, this.beginCaptureSession(), dM.i.Tz("gameRecorder|setClipping", !0))
+         this.isClipping || this.isRecording || (this.isClipping = !0, this.beginCaptureSession(), tU.k.UY("gameRecorder|setClipping", !0))
```

#### 1580. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12364` → after: `L12547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12547) · [Before (L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12364)

```diff
-         for (const OM of iM) OM.effects && (OM.effects = (0, dH.v)(OM.effects, rM));
+         for (const cU of zU) cU.effects && (cU.effects = (0, pI.q)(cU.effects, XU));
```

#### 1581. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12367` → after: `L12550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12550) · [Before (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12367)

```diff
-           effects: (0, dH.v)(this.lastFullData.effects, rM)
+           effects: (0, pI.q)(this.lastFullData.effects, XU)
```

#### 1582. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12371` → after: `L12554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12554) · [Before (L12371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12371)

```diff
-         this.isRecording || ((0, TH.b)() || this.client.isReplayMode() ? (0, VH.d)(VH.c.closeViewerFirst) : this.gameAllowsReplays() ? (this.stopClippingBuffer(), this.isRecording = !0, this.beginCaptureSession(), (0, VH.d)(VH.c.recordingStarted), dM.i.Tz("gameRecorder|setRecordi … [truncated]
+         this.isRecording || ((0, jI.e)() || this.client.isReplayMode() ? (0, KI.i)(KI.e.closeViewerFirst) : this.gameAllowsReplays() ? (this.stopClippingBuffer(), this.isRecording = !0, this.beginCaptureSession(), (0, KI.i)(KI.e.recordingStarted), tU.k.UY("gameRecorder|setRecordi … [truncated]
```

#### 1583. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12374` → after: `L12557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12557) · [Before (L12374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12374)

```diff
-         this.isRecording && (this.gameAllowsReplays() ? (this.recordTick(), this.isRecording = !1, this.effectTracker.clear(), this.saveCapture(), this.clearCaptureBuffers(), (0, VH.d)(VH.c.recordingStopped), dM.i.Tz("gameRecorder|setRecording", !1), !1 !== (null === MM || void 0 … [truncated]
+         this.isRecording && (this.gameAllowsReplays() ? (this.recordTick(), this.isRecording = !1, this.effectTracker.clear(), this.saveCapture(), this.clearCaptureBuffers(), (0, KI.i)(KI.e.recordingStopped), tU.k.UY("gameRecorder|setRecording", !1), !1 !== (null === UU || void 0 … [truncated]
```

#### 1584. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12377` → after: `L12560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12560) · [Before (L12377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12377)

```diff
-         return HH(Ym.C)
+         return YI(HN.y)
```

#### 1585. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12382` → after: `L12565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12565) · [Before (L12382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12382)

```diff
-         const iM = EH(rM, this.lastFullData.uiElements, Ym.C);
+         const zU = gI(XU, this.lastFullData.uiElements, HN.y);
```

#### 1586. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12386` → after: `L12569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12569) · [Before (L12386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12386)

```diff
-         const rM = HH(Ym.v);
+         const XU = YI(HN.t);
```

#### 1587. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12388-L12389` → after: `L12571-L12572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12571-L12572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12571-L12572) · [Before (L12388-L12389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12388-L12389)

```diff
-         const iM = EH(rM, this.lastFullData.environment, Ym.v);
-         return (0, PM.xc)(iM) || (this.lastFullData.environment = CH(this.lastFullData.environment, iM)), iM
+         const zU = gI(XU, this.lastFullData.environment, HN.t);
+         return (0, FU.Fc)(zU) || (this.lastFullData.environment = BI(this.lastFullData.environment, zU)), zU
```

#### 1588. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12396` → after: `L12579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12579) · [Before (L12396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12396)

```diff
-           for (let OM = 0; OM < ZM.q; OM++) iM.push(nH(MM, rM, OM));
+           for (let cU = 0; cU < fU.o; cU++) zU.push(AI(UU, XU, cU));
```

#### 1589. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12401` → after: `L12584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12584) · [Before (L12401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12401)

```diff
-         }(this.Cm);
+         }(this.WN);
```

#### 1590. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12405` → after: `L12588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12588) · [Before (L12405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12405)

```diff
-         return this.lastFullData.hotbar = LH(this.lastFullData.hotbar, iM), zH(iM) ? iM : void 0
+         return this.lastFullData.hotbar = DI(this.lastFullData.hotbar, zU), oI(zU) ? zU : void 0
```

#### 1591. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12408` → after: `L12591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12591) · [Before (L12408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12408)

```diff
-         const rM = HH(Ym.t);
+         const XU = YI(HN.q);
```

#### 1592. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12410-L12411` → after: `L12593-L12594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12593-L12594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12593-L12594) · [Before (L12410-L12411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12410-L12411)

```diff
-         const iM = EH(rM, this.lastFullData.playerHud, Ym.t);
-         return this.lastFullData.playerHud = eH(this.lastFullData.playerHud, iM), (0, PM.xc)(iM) ? void 0 : iM
+         const zU = gI(XU, this.lastFullData.playerHud, HN.q);
+         return this.lastFullData.playerHud = ZI(this.lastFullData.playerHud, zU), (0, FU.Fc)(zU) ? void 0 : zU
```

#### 1593. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12414-L12415` → after: `L12597-L12598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12597-L12598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12597-L12598) · [Before (L12414-L12415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12414-L12415)

```diff
-         const rM = this.effectTracker.sample(this.state.ticks.length, this.state.meta.zk);
-         return MM ? (this.lastFullData.effects = rM, rM) : (0, dH.n)(rM, this.lastFullData.effects) ? void 0 : (this.lastFullData.effects = rM, rM)
+         const XU = this.effectTracker.sample(this.state.ticks.length, this.state.meta.bq);
+         return UU ? (this.lastFullData.effects = XU, XU) : (0, pI.l)(XU, this.lastFullData.effects) ? void 0 : (this.lastFullData.effects = XU, XU)
```

#### 1594. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12418` → after: `L12601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12601) · [Before (L12418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12418)

```diff
-         return this.sampleRecordedStates((() => this.client.iterateEntityIds()), (MM => SH(this.client, this.Cm, MM)), this.lastFullData.entities, Ym.h, MM, {
+         return this.sampleRecordedStates((() => this.client.iterateEntityIds()), (UU => zI(this.client, this.WN, UU)), this.lastFullData.entities, HN.l, UU, {
```

#### 1595. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12434` → after: `L12617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12617) · [Before (L12434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12434)

```diff
-             const rM = null !== (nM = iM[MM]) && void 0 !== nM ? nM : null,
+             const XU = null !== (oU = zU[UU]) && void 0 !== oU ? oU : null,
```

#### 1596. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12446` → after: `L12629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12629) · [Before (L12446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12446)

```diff
-         if (!OM) throw new Error(`Colyseus item not found for entity ${MM}`);
+         if (!cU) throw new Error(`Colyseus item not found for entity ${UU}`);
```

#### 1597. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12448` → after: `L12631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12631) · [Before (L12448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12448)

```diff
-           itemName: null !== (rM = null === (iM = AL.k[OM.id]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : null,
+           itemName: null !== (XU = null === (zU = vY.n[cU.id]) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : null,
```

#### 1598. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12456-L12457` → after: `L12639-L12640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12639-L12640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12639-L12640) · [Before (L12456-L12457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12456-L12457)

```diff
-     var Mh = iM(37922),
-       rh = iM(39455);
+     var TI = zU(37723),
+       hI = zU(39235);
```

#### 1599. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12460` → after: `L12643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12643) · [Before (L12460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12460)

```diff
-       hH(Ym.v, MM)
+       NI(HN.t, UU)
```

#### 1600. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12464` → after: `L12647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12647) · [Before (L12464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12464)

```diff
-       hH(Ym.C, MM)
+       NI(HN.y, UU)
```

#### 1601. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12466-L12468` → after: `L12649-L12651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12649-L12651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12649-L12651) · [Before (L12466-L12468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12466-L12468)

```diff
-     var Sh = iM(613),
-       jh = iM(40007),
-       ah = iM(39678);
+     var zp = zU(633),
+       cp = zU(39803),
+       yp = zU(39462);
```

#### 1602. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12476` → after: `L12659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12659) · [Before (L12476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12476)

```diff
-         aM && (0, PM.xc)(jM) || (aM ? Lh(MM, rM, SM, aM, jM) : zh(MM, rM, SM, jM))
+         AU && (0, FU.Fc)(QU) || (AU ? Dp(UU, XU, yU, AU, QU) : op(UU, XU, yU, QU))
```

#### 1603. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12487-L12490` → after: `L12670-L12673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12670-L12673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12670-L12673) · [Before (L12487-L12490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12487-L12490)

```diff
-         aM = (0, jh.f)()[jM];
-       if (!aM) return void console.warn(`Replay: unknown entity type ${OM.type}`);
-       MM.iK(iM, SM, new aM((0, IM.b)(), iM, OM.type));
-       const PM = rM.hU.getState(iM, "meshRotation");
+         AU = (0, cp.e)()[QU];
+       if (!AU) return void console.warn(`Replay: unknown entity type ${cU.type}`);
+       UU.bK(zU, yU, new AU((0, JU.b)(), zU, cU.type));
+       const FU = XU.xG.getState(zU, "meshRotation");
```

#### 1604. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12501` → after: `L12684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12684) · [Before (L12501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12501)

```diff
-         aM = rM.hU.getState(iM, "meshRotation");
+         AU = XU.xG.getState(zU, "meshRotation");
```

#### 1605. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12505` → after: `L12688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12688) · [Before (L12505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12505)

```diff
-         null === (OM = (0, ah.c)(MM)) || void 0 === OM || OM(iM, {
+         null === (cU = (0, yp.e)(UU)) || void 0 === cU || cU(zU, {
```

#### 1606. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12511` → after: `L12694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12694) · [Before (L12511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12511)

```diff
-       const nM = rM.hU.grM(iM);
+       const oU = XU.xG.azU(zU);
```

#### 1607. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12513-L12514` → after: `L12696-L12697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12696-L12697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12696-L12697) · [Before (L12513-L12514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12513-L12514)

```diff
-         MM.hU.BMM(rM, "smoothToServerPos") || MM.hU.eZ(rM, "smoothToServerPos");
-         const OM = MM.hU.getState(rM, "smoothToServerPos");
+         UU.xG.qXU(XU, "smoothToServerPos") || UU.xG.sH(XU, "smoothToServerPos");
+         const cU = UU.xG.getState(XU, "smoothToServerPos");
```

#### 1608. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12519-L12520` → after: `L12702-L12703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12702-L12703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12702-L12703) · [Before (L12519-L12520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12519-L12520)

```diff
-         const OM = (0, fM.e)(rM);
-         dM.i.Tz(`entityScale|${OM}`, iM);
+         const cU = (0, HU.c)(XU);
+         tU.k.UY(`entityScale|${cU}`, zU);
```

#### 1609. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12526-L12527` → after: `L12709-L12710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12709-L12710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12709-L12710) · [Before (L12526-L12527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12526-L12527)

```diff
-         } = (0, VL.g)(iM, SM);
-         MM.hU.niM(OM, jM, aM, jM)
+         } = (0, bY.i)(zU, yU);
+         UU.xG.jzU(cU, QU, AU, QU)
```

#### 1610. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12529` → after: `L12712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12712) · [Before (L12529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12529)

```diff
-         const OM = MM.hU.getState(rM, "meshRotation");
+         const cU = UU.xG.getState(XU, "meshRotation");
```

#### 1611. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12532-L12534` → after: `L12715-L12717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12715-L12717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12715-L12717) · [Before (L12532-L12534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12532-L12534)

```diff
-           const rM = MM.hU.getState(SM, "meshRotation"),
-             OM = MM.hU.ziM(SM);
-           rM && OM.LiM && (rM.baseRenderRotation[1] = iM)
+           const XU = UU.xG.getState(yU, "meshRotation"),
+             cU = UU.xG.bzU(yU);
+           XU && cU.TzU && (XU.baseRenderRotation[1] = zU)
```

#### 1612. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12537` → after: `L12720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12720) · [Before (L12537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12537)

```diff
-         for (const iM of Sh.b) {
+         for (const zU of zp.d) {
```

#### 1613. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12539` → after: `L12722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12722) · [Before (L12539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12539)

```diff
-           OM ? (0, pM.x)(MM, iM, OM.itemName, OM.enchantmentTier) : (0, pM.x)(MM, iM, null, null)
+           cU ? (0, qU.z)(UU, zU, cU.itemName, cU.enchantmentTier) : (0, qU.z)(UU, zU, null, null)
```

#### 1614. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12541` → after: `L12724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12724) · [Before (L12541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12541)

```diff
-       }(iM, OM.armour), "rY" in SM && function(MM, rM, iM) {
+       }(zU, cU.armour), "YM" in yU && function(UU, XU, zU) {
```

#### 1615. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12543-L12544` → after: `L12726-L12727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12726-L12727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12726-L12727) · [Before (L12543-L12544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12543-L12544)

```diff
-         const OM = MM.rY[MM.eD][rM];
-         for (const SM of Ym.y)
+         const cU = UU.YM[UU.pM][XU];
+         for (const yU of HN.x)
```

#### 1616. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12550` → after: `L12733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12733) · [Before (L12550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12550)

```diff
-       }(rM, iM, OM.rY), ("ridingVehicleEId" in SM || "followingEId" in SM || "followingOffset" in SM || "shouldMatchFollowingEntityRotation" in SM) && (jM.followingEId ? Jh(rM, iM, jM) : Jh(rM, iM, {
+       }(XU, zU, cU.YM), ("ridingVehicleEId" in yU || "followingEId" in yU || "followingOffset" in yU || "shouldMatchFollowingEntityRotation" in yU) && (QU.followingEId ? Ip(XU, zU, QU) : Ip(XU, zU, {
```

#### 1617. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12559` → after: `L12742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12742) · [Before (L12559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12559)

```diff
-         for (const [MM, rM] of Object.entries(null !== (QM = SM.playerCustomisations) && void 0 !== QM ? QM : {})) {
+         for (const [UU, XU] of Object.entries(null !== (DU = yU.playerCustomisations) && void 0 !== DU ? DU : {})) {
```

#### 1618. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12561-L12564` → after: `L12744-L12747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12744-L12747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12744-L12747) · [Before (L12561-L12564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12561-L12564)

```diff
-           (0, pM.z)({
-             Xi: iM,
-             Ii: MM,
-             Ki: rM
+           (0, qU.B)({
+             AU: zU,
+             FU: UU,
+             oU: XU
```

#### 1619. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12567` → after: `L12750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12750) · [Before (L12567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12567)

```diff
-         dM.i.Tz("replayPlayerCosmeticsApplied")
+         tU.k.UY("replayPlayerCosmeticsApplied")
```

#### 1620. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12591` → after: `L12774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12774) · [Before (L12591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12591)

```diff
-         ridingVehicleEId: null !== (rM = MM.ridingVehicleEId) && void 0 !== rM ? rM : null,
+         ridingVehicleEId: null !== (XU = UU.ridingVehicleEId) && void 0 !== XU ? XU : null,
```

#### 1621. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12598` → after: `L12781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12781) · [Before (L12598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12598)

```diff
-       for (const OM of ["variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "leaderboardTop", "meshKind", "meshOpts"])(0, ZM.J)(MM[OM]) || (iM[OM] = MM[OM]);
+       for (const cU of ["variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "leaderboardTop", "meshKind", "meshOpts"])(0, fU.P)(UU[cU]) || (zU[cU] = UU[cU]);
```

#### 1622. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12604` → after: `L12787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12787) · [Before (L12604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12604)

```diff
-         jM = MM.hU.getState(rM, "meshRotation");
+         QU = UU.xG.getState(XU, "meshRotation");
```

#### 1623. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12607-L12609` → after: `L12790-L12792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12790-L12792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12790-L12792) · [Before (L12607-L12609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12607-L12609)

```diff
-         const rM = MM.hU.getState(aM, "meshRotation"),
-           iM = MM.hU.ziM(aM);
-         rM && iM.LiM && (rM.serverSetRotation[SM] = OM)
+         const XU = UU.xG.getState(AU, "meshRotation"),
+           zU = UU.xG.bzU(AU);
+         XU && zU.TzU && (XU.serverSetRotation[yU] = cU)
```

#### 1624. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12616-L12619` → after: `L12799-L12802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12799-L12802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12799-L12802) · [Before (L12616-L12619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12616-L12619)

```diff
-         if (MM.hU.BMM(rM, "smoothToServerPos") || MM.hU.eZ(rM, "smoothToServerPos"), MM.hU.BMM(rM, MM.hU.names.mG)) {
-           const iM = MM.hU.jK(rM).position,
-             OM = MM.hU.getState(rM, "smoothToServerPos");
-           (0, XP.setServerPosition)(OM, iM[0], iM[1], iM[2]), MM.hU.bZ(rM, MM.hU.names.mG)
+         if (UU.xG.qXU(XU, "smoothToServerPos") || UU.xG.sH(XU, "smoothToServerPos"), UU.xG.qXU(XU, UU.xG.names.RZ)) {
+           const zU = UU.xG.hK(XU).position,
+             cU = UU.xG.getState(XU, "smoothToServerPos");
+           (0, lF.setServerPosition)(cU, zU[0], zU[1], zU[2]), UU.xG.nH(XU, UU.xG.names.RZ)
```

#### 1625. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12625-L12626` → after: `L12808-L12809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12808-L12809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12808-L12809) · [Before (L12625-L12626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12625-L12626)

```diff
-       MM.hU.bZ(rM, "smoothToServerPos"), MM.hU.bZ(rM, MM.hU.names.mG), MM.hU.eZ(rM, MM.hU.names.mG, {
-         zh: (0, fM.e)(iM.followingEId),
+       UU.xG.nH(XU, "smoothToServerPos"), UU.xG.nH(XU, UU.xG.names.RZ), UU.xG.sH(XU, UU.xG.names.RZ, {
+         Ep: (0, HU.c)(zU.followingEId),
```

#### 1626. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12628-L12631` → after: `L12811-L12814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12811) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12811-L12814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12811-L12814) · [Before (L12628-L12631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12628-L12631)

```diff
-         LiM: jM,
-         JiM: !0,
-         diM: (MM, rM) => {
-           lM().copy(MM, SM), iM.ridingVehicleEId === iM.followingEId && lM().Md(MM, MM, lM().ZERO, (0, IM.b)().getEntityHeading(iM.followingEId, rM))
+         TzU: QU,
+         ccU: !0,
+         ycU: (UU, XU) => {
+           kU().copy(UU, yU), zU.ridingVehicleEId === zU.followingEId && kU().ta(UU, UU, kU().ZERO, (0, JU.b)().getEntityHeading(zU.followingEId, XU))
```

#### 1627. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12635-L12636` → after: `L12818-L12819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12818-L12819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12818-L12819) · [Before (L12635-L12636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12635-L12636)

```diff
-     var dh = iM(38097),
-       yh = iM(40028);
+     var pp = zU(37870),
+       ap = zU(39824);
```

#### 1628. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12648` → after: `L12831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12831) · [Before (L12648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12648)

```diff
-         case "cW": {
+         case "Jw": {
```

#### 1629. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12650` → after: `L12833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12833) · [Before (L12650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12650)

```diff
-           (0, IM.b)().setBlockNoMulti(MM, iM, OM, rM.toBlockId, !0), Ch(rM.pos, rM.toBlockData);
+           (0, JU.b)().setBlockNoMulti(UU, zU, cU, XU.toBlockId, !0), Bp(XU.pos, XU.toBlockData);
```

#### 1630. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12660` → after: `L12843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12843) · [Before (L12660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12660)

```diff
-           MM.uL.yiM(rM.chunkX * ZM.y, rM.chunkY * ZM.y, rM.chunkZ * ZM.y), MM.bloxd.removingChunk(rM.chunkX, rM.chunkY, rM.chunkZ, !1)
+           UU.qY.QcU(XU.chunkX * fU.D, XU.chunkY * fU.D, XU.chunkZ * fU.D), UU.bloxd.removingChunk(XU.chunkX, XU.chunkY, XU.chunkZ, !1)
```

#### 1631. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12666` → after: `L12849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12849) · [Before (L12666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12666)

```diff
-         case "cW": {
+         case "Jw": {
```

#### 1632. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12668` → after: `L12851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12851) · [Before (L12668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12668)

```diff
-           (0, IM.b)().setBlockNoMulti(MM, iM, OM, rM.fromBlockId, !0), Ch(rM.pos, rM.fromBlockData);
+           (0, JU.b)().setBlockNoMulti(UU, zU, cU, XU.fromBlockId, !0), Bp(XU.pos, XU.fromBlockData);
```

#### 1633. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12675` → after: `L12858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12858) · [Before (L12675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12675)

```diff
-           MM.uL.yiM(rM.chunkX * ZM.y, rM.chunkY * ZM.y, rM.chunkZ * ZM.y), MM.bloxd.removingChunk(rM.chunkX, rM.chunkY, rM.chunkZ, !1);
+           UU.qY.QcU(XU.chunkX * fU.D, XU.chunkY * fU.D, XU.chunkZ * fU.D), UU.bloxd.removingChunk(XU.chunkX, XU.chunkY, XU.chunkZ, !1);
```

#### 1634. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12684` → after: `L12867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12867) · [Before (L12684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12684)

```diff
-       jM.blockDataOwner.setBlockData(iM, OM, SM, null === rM ? void 0 : YH(rM)), jM.blockAdded(iM, OM, SM, jM.sE(iM, OM, SM))
+       QU.blockDataOwner.setBlockData(zU, cU, yU, null === XU ? void 0 : iI(XU)), QU.blockAdded(zU, cU, yU, QU.pG(zU, cU, yU))
```

#### 1635. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12692-L12696` → after: `L12875-L12879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12875-L12879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12875-L12879) · [Before (L12692-L12696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12692-L12696)

```diff
-             ZS: MM,
-             oS: OM,
-             kS: SM
-           } = null !== (iM = rM.DS) && void 0 !== iM ? iM : {};
-           yn.e.play((0, bm.f)(rM.pS), rM.volume, SM, MM, OM).rate(rM.rate);
+             Oy: UU,
+             Sy: cU,
+             qy: yU
+           } = null !== (zU = XU.wy) && void 0 !== zU ? zU : {};
+           ao.e.play((0, PN.f)(XU.Ly), XU.volume, yU, UU, cU).rate(XU.rate);
```

#### 1636. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12700-L12704` → after: `L12883-L12887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12883-L12887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12883-L12887) · [Before (L12700-L12704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12700-L12704)

```diff
-           const iM = (0, fM.e)(rM.QS),
-             OM = MM.hU.getState(iM, "animator");
-           if (rM.zS === dh.e.Custom) return void(0, yh.b)((0, YM.b)(MM).animations, iM, rM.animationScript, rM.LS, rM.mS);
-           if (null === rM.animationScript) return null === OM || void 0 === OM || OM.stopAnimation(rM.zS), void(iM === MM.eD && rM.zS === dh.e.Emote && (0, IM.b)().client.cameraController.endTemporaryThirdPerson());
-           null === OM || void 0 === OM || OM.startAnimation(rM.animationScript, rM.zS, rM.LS, rM.mS);
+           const zU = (0, HU.c)(XU.FX),
+             cU = UU.xG.getState(zU, "animator");
+           if (XU.oX === pp.f.Custom) return void(0, ap.e)((0, MU.b)(UU).animations, zU, XU.animationScript, XU.DX, XU.EX);
+           if (null === XU.animationScript) return null === cU || void 0 === cU || cU.stopAnimation(XU.oX), void(zU === UU.pM && XU.oX === pp.f.Emote && (0, JU.b)().client.cameraController.endTemporaryThirdPerson());
+           null === cU || void 0 === cU || cU.startAnimation(XU.animationScript, XU.oX, XU.DX, XU.EX);
```

#### 1637. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12708` → after: `L12891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12891) · [Before (L12708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12708)

```diff
-           dM.i.Tz(`bulletShot|${rM.xj}`, {
+           tU.k.UY(`bulletShot|${XU.fQ}`, {
```

#### 1638. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12713-L12716` → after: `L12896-L12899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12896-L12899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12896-L12899) · [Before (L12713-L12716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12713-L12716)

```diff
-           dM.i.Tz("lifeformHealthChanged", {
-             eId: rM.Pi,
-             Mr: rM.Mr,
-             rr: rM.rr
+           tU.k.UY("lifeformHealthChanged", {
+             eId: XU.iX,
+             gU: XU.gU,
+             kU: XU.kU
```

#### 1639. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12720` → after: `L12903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12903) · [Before (L12720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12720)

```diff
-           (0, WM.j)(MM, rM.opts);
+           (0, OU.k)(UU, XU.opts);
```

#### 1640. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12723` → after: `L12906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12906) · [Before (L12723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12723)

```diff
-           dM.i.Tz("forceFlyingMiddleMessage", {
+           tU.k.UY("forceFlyingMiddleMessage", {
```

#### 1641. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12725` → after: `L12908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12908) · [Before (L12725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12725)

```diff
-             oi: rM.oi,
+             nX: XU.nX,
```

#### 1642. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12727` → after: `L12910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12910) · [Before (L12727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12727)

```diff
-             Yi: rM.Yi
+             mX: XU.mX
```

#### 1643. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12731-L12733` → after: `L12914-L12916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12914-L12916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12914-L12916) · [Before (L12731-L12733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12731-L12733)

```diff
-           dM.i.Tz("playerKilled", {
-             deadEId: (0, fM.e)(rM.deadEId),
-             killerEId: (0, fM.e)(rM.killerEId),
+           tU.k.UY("playerKilled", {
+             deadEId: (0, HU.c)(XU.deadEId),
+             killerEId: (0, HU.c)(XU.killerEId),
```

#### 1644. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12739-L12741` → after: `L12922-L12924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12922-L12924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12922-L12924) · [Before (L12739-L12741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12739-L12741)

```diff
-           dM.i.Tz("customKillfeed", {
-             killer: uH(rM.killer, fM.e),
-             victim: uH(rM.victim, fM.e),
+           tU.k.UY("customKillfeed", {
+             killer: LI(XU.killer, HU.c),
+             victim: LI(XU.victim, HU.c),
```

#### 1645. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12759` → after: `L12942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12942) · [Before (L12759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12759)

```diff
-         const iM = (0, vS.b)(MM, rM);
+         const zU = (0, sy.c)(UU, XU);
```

#### 1646. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12761` → after: `L12944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12944) · [Before (L12761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12761)

```diff
-       }((0, zz.o)(OM.iL, SM.iL, iM), (0, zz.o)(OM.aiM, SM.aiM, iM))
+       }((0, DE.r)(cU.QY, yU.QY, zU), (0, DE.r)(cU.JzU, yU.JzU, zU))
```

#### 1647. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12766-L12767` → after: `L12949-L12950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12949-L12950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12949-L12950) · [Before (L12766-L12767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12766-L12767)

```diff
-       const iM = [...MM].sort(((MM, rM) => MM.bL - rM.bL));
-       if (rM <= iM[0].bL) return {
+       const zU = [...UU].sort(((UU, XU) => UU.LY - XU.LY));
+       if (XU <= zU[0].LY) return {
```

#### 1648. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12772` → after: `L12955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12955) · [Before (L12772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12772)

```diff
-       if (rM >= OM.bL) return {
+       if (XU >= cU.LY) return {
```

#### 1649. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12779-L12782` → after: `L12962-L12965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12962-L12965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12962-L12965) · [Before (L12779-L12782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12779-L12782)

```diff
-         if (rM >= MM.bL && rM <= OM.bL) {
-           const iM = OM.bL - MM.bL,
-             SM = 0 === iM ? 0 : (rM - MM.bL) / iM,
-             jM = (0, Mh.k)(SM, MM.easing);
+         if (XU >= UU.LY && XU <= cU.LY) {
+           const zU = cU.LY - UU.LY,
+             yU = 0 === zU ? 0 : (XU - UU.LY) / zU,
+             QU = (0, TI.j)(yU, UU.easing);
```

#### 1650. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12803-L12804` → after: `L12986-L12987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12986-L12987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12986-L12987) · [Before (L12803-L12804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12803-L12804)

```diff
-       const iM = MM.filter((MM => MM.bL !== rM.bL));
-       return iM.push(rM), iM.sort(((MM, rM) => MM.bL - rM.bL)), iM
+       const zU = UU.filter((UU => UU.LY !== XU.LY));
+       return zU.push(XU), zU.sort(((UU, XU) => UU.LY - XU.LY)), zU
```

#### 1651. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12812` → after: `L12995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R12995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L12995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L12995) · [Before (L12812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12812)

```diff
-         jM && (0, PM.xc)(SM) || (jM ? Zh(MM, OM, jM, SM) : kh(MM, OM, SM))
+         QU && (0, FU.Fc)(yU) || (QU ? rp(UU, cU, QU, yU) : Sp(UU, cU, yU))
```

#### 1652. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12827-L12828` → after: `L13010-L13011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13010-L13011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13010-L13011) · [Before (L12827-L12828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12827-L12828)

```diff
-       const iM = null === MM || void 0 === MM || null === (rM = AL.k[MM]) || void 0 === rM ? void 0 : rM.id;
-       return void 0 !== iM ? iM : (sh.has(MM) || (sh.add(MM), console.warn(`Replay: no item named ${MM}, so it is left out`)), null)
+       const zU = null === UU || void 0 === UU || null === (XU = vY.n[UU]) || void 0 === XU ? void 0 : XU.id;
+       return void 0 !== zU ? zU : (qp.has(UU) || (qp.add(UU), console.warn(`Replay: no item named ${UU}, so it is left out`)), null)
```

#### 1653. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12833` → after: `L13016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13016) · [Before (L12833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12833)

```diff
-       null !== OM && ((0, rn.k)(MM, rM, iM.position, OM, {
+       null !== cU && ((0, Uo.h)(UU, XU, zU.position, cU, {
```

#### 1654. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12842` → after: `L13025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13025) · [Before (L12842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12842)

```diff
-       MM.hU.BMM(rM, "itemState") ? oh(MM, rM, SM, OM) : kh(MM, rM, SM)
+       UU.xG.qXU(XU, "itemState") ? fp(UU, XU, yU, cU) : Sp(UU, XU, yU)
```

#### 1655. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12846-L12848` → after: `L13029-L13031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13029-L13031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13029-L13031) · [Before (L12846-L12848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12846-L12848)

```diff
-       if (!MM.hU.BMM(rM, "itemState")) return;
-       if (gH(OM, "position") && MM.hU.BMM(rM, "smoothToServerPos")) {
-         const OM = MM.hU.getState(rM, "smoothToServerPos");
+       if (!UU.xG.qXU(XU, "itemState")) return;
+       if (dI(cU, "position") && UU.xG.qXU(XU, "smoothToServerPos")) {
+         const cU = UU.xG.getState(XU, "smoothToServerPos");
```

#### 1656. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12851` → after: `L13034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13034) · [Before (L12851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12851)

```diff
-       const SM = MM.hU.getState(rM, "itemState"),
+       const yU = UU.xG.getState(XU, "itemState"),
```

#### 1657. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12857` → after: `L13040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13040) · [Before (L12857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12857)

```diff
-       MM.hU.BMM(rM, "itemState") && MM.hU.deleteEntity(rM)
+       UU.xG.qXU(XU, "itemState") && UU.xG.deleteEntity(XU)
```

#### 1658. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12861-L12862` → after: `L13044-L13045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13044) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13044-L13045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13044-L13045) · [Before (L12861-L12862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12861-L12862)

```diff
-       return MM.filter((MM => MM.bL >= rM && MM.bL <= iM)).map((MM => ({
-         bL: MM.bL - rM,
+       return UU.filter((UU => UU.LY >= XU && UU.LY <= zU)).map((UU => ({
+         LY: UU.LY - XU,
```

#### 1659. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12868-L12871` → after: `L13051-L13054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13051-L13054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13051-L13054) · [Before (L12868-L12871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12868-L12871)

```diff
-     var Nh = iM(37876),
-       Ah = iM(37935),
-       xh = iM(40331),
-       vh = iM(40338);
+     var Mp = zU(37677),
+       vp = zU(37732),
+       Vp = zU(40110),
+       sp = zU(40119);
```

#### 1660. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12878-L12879` → after: `L13061-L13062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13061-L13062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13061-L13062) · [Before (L12878-L12879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12878-L12879)

```diff
-         zk: SM.meta.zk,
-         playbackMarkInTick: null !== (rM = null === (iM = OM.getPlaybackMark()) || void 0 === iM ? void 0 : iM.inTick) && void 0 !== rM ? rM : null,
+         bq: yU.meta.bq,
+         playbackMarkInTick: null !== (XU = null === (zU = cU.getPlaybackMark()) || void 0 === zU ? void 0 : zU.inTick) && void 0 !== XU ? XU : null,
```

#### 1661. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12896` → after: `L13079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13079) · [Before (L12896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12896)

```diff
-           const rM = dM.i.subscribe("replayViewer|uiRefresh", MM);
+           const XU = tU.k.subscribe("replayViewer|uiRefresh", UU);
```

#### 1662. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12898` → after: `L13081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13081) · [Before (L12898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12898)

```diff
-             dM.i.unsubscribe(rM)
+             tU.k.unsubscribe(XU)
```

#### 1663. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12901` → after: `L13084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13084) · [Before (L12901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12901)

```diff
-         canvas: () => (0, IM.f)().container.canvas,
+         canvas: () => (0, JU.e)().container.canvas,
```

#### 1664. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12903` → after: `L13086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13086) · [Before (L12903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12903)

```diff
-           dM.i.Tz("replayViewer|requested", "close")
+           tU.k.UY("replayViewer|requested", "close")
```

#### 1665. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12906` → after: `L13089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13089) · [Before (L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12906)

```diff
-           dM.i.Tz("replayViewer|requested", "open"), dM.i.Tz("replayViewer|uiRefresh")
+           tU.k.UY("replayViewer|requested", "open"), tU.k.UY("replayViewer|uiRefresh")
```

#### 1666. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12916` → after: `L13099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13099) · [Before (L12916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12916)

```diff
-         this.client = MM, this.Cm = rM, this.recording = null, this.fileHandle = null, this.fileName = null, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, this.cameraMode = "recording", this.lastFullData = {
+         this.client = UU, this.WN = XU, this.recording = null, this.fileHandle = null, this.fileName = null, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, this.cameraMode = "recording", this.lastFullData = {
```

#### 1667. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12926` → after: `L13109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13109) · [Before (L12926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12926)

```diff
-             this.kE()
+             this.aG()
```

#### 1668. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12931-L12932` → after: `L13114-L13115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13114-L13115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13114-L13115) · [Before (L12931-L12932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12931-L12932)

```diff
-         this.Cm.on("bL", iM), this.Cm.on("afterInputs", OM), (0, oM.onGameResetOnce)((() => {
-           this.Cm.off("bL", iM), this.Cm.off("afterInputs", OM)
+         this.WN.on("LY", zU), this.WN.on("afterInputs", cU), (0, iU.onGameResetOnce)((() => {
+           this.WN.off("LY", zU), this.WN.off("afterInputs", cU)
```

#### 1669. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12943` → after: `L13126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13126) · [Before (L12943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12943)

```diff
-         return null !== (MM = null === (rM = this.recording) || void 0 === rM ? void 0 : rM.ticks.length) && void 0 !== MM ? MM : 0
+         return null !== (UU = null === (XU = this.recording) || void 0 === XU ? void 0 : XU.ticks.length) && void 0 !== UU ? UU : 0
```

#### 1670. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12952` → after: `L13135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13135) · [Before (L12952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12952)

```diff
-         this.playbackSpeed = MM, dM.i.Tz("replayViewer|uiRefresh")
+         this.playbackSpeed = UU, tU.k.UY("replayViewer|uiRefresh")
```

#### 1671. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12973` → after: `L13156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13156) · [Before (L12973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12973)

```diff
-         this.fileHandle = iM, this.fileName = null !== (MM = null !== (rM = null === iM || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : OM) && void 0 !== MM ? MM : this.fileName, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, dM.i.Tz("replayViewer|uiRefresh")
+         this.fileHandle = zU, this.fileName = null !== (UU = null !== (XU = null === zU || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : cU) && void 0 !== UU ? UU : this.fileName, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, tU.k.UY("replayViewer|uiRefresh")
```

#### 1672. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L12977` → after: `L13160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13160) · [Before (L12977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L12977)

```diff
-         return null !== (MM = null === (rM = this.recording) || void 0 === rM ? void 0 : rM.editState.playbackMark) && void 0 !== MM ? MM : null
+         return null !== (UU = null === (XU = this.recording) || void 0 === XU ? void 0 : XU.editState.playbackMark) && void 0 !== UU ? UU : null
```

#### 1673. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13002` → after: `L13185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13185) · [Before (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13002)

```diff
-           dM.i.Tz("replayViewer|uiRefresh")
+           tU.k.UY("replayViewer|uiRefresh")
```

#### 1674. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13009` → after: `L13192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13192) · [Before (L13009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13009)

```diff
-         this.recording && MM !== this.cameraMode && ("freecam" === MM ? this.client.freeCameraController.kR(!0) : this.client.freeCameraController.isEnabled() && this.client.freeCameraController.kR(!1), this.cameraMode = MM, this.resolveAndApplyCamera(this.getLastAppliedTickIndex … [truncated]
+         this.recording && UU !== this.cameraMode && ("freecam" === UU ? this.client.freeCameraController.YC(!0) : this.client.freeCameraController.isEnabled() && this.client.freeCameraController.YC(!1), this.cameraMode = UU, this.resolveAndApplyCamera(this.getLastAppliedTickIndex … [truncated]
```

#### 1675. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13017` → after: `L13200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13200) · [Before (L13017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13017)

```diff
-           } = sH(this.Cm);
+           } = qI(this.WN);
```

#### 1676. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13019` → after: `L13202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13202) · [Before (L13019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13019)

```diff
-           bL: MM,
+           LY: UU,
```

#### 1677. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13022` → after: `L13205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13205) · [Before (L13022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13022)

```diff
-           easing: Mh.j
+           easing: TI.h
```

#### 1678. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13031-L13032` → after: `L13214-L13215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13214-L13215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13214-L13215) · [Before (L13031-L13032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13031-L13032)

```diff
-           const OM = MM.find((MM => MM.bL === rM));
-           return OM ? Rh(MM.filter((MM => MM.bL !== rM)), {
+           const cU = UU.find((UU => UU.LY === XU));
+           return cU ? ep(UU.filter((UU => UU.LY !== XU)), {
```

#### 1679. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13034` → after: `L13217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13217) · [Before (L13034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13034)

```diff
-             bL: iM
+             LY: zU
```

#### 1680. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13041` → after: `L13224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13224) · [Before (L13041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13041)

```diff
-           iM = Math.max(0, Math.min(MM.bL, rM));
+           zU = Math.max(0, Math.min(UU.LY, XU));
```

#### 1681. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13044` → after: `L13227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13227) · [Before (L13044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13044)

```diff
-           bL: iM
+           LY: zU
```

#### 1682. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13049` → after: `L13232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13232) · [Before (L13049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13049)

```diff
-           return MM.filter((MM => MM.bL < rM || MM.bL > iM))
+           return UU.filter((UU => UU.LY < XU || UU.LY > zU))
```

#### 1683. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13055-L13056` → after: `L13238-L13239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13238-L13239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13238-L13239) · [Before (L13055-L13056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13055-L13056)

```diff
-         if (MM && "recording" === this.cameraMode) return this.cameraMode = "freecam", void dM.i.Tz("replayViewer|uiRefresh");
-         MM || "freecam" !== this.cameraMode || (this.cameraMode = "recording", this.resolveAndApplyCamera(this.getLastAppliedTickIndex()), dM.i.Tz("replayViewer|uiRefresh"))
+         if (UU && "recording" === this.cameraMode) return this.cameraMode = "freecam", void tU.k.UY("replayViewer|uiRefresh");
+         UU || "freecam" !== this.cameraMode || (this.cameraMode = "recording", this.resolveAndApplyCamera(this.getLastAppliedTickIndex()), tU.k.UY("replayViewer|uiRefresh"))
```

#### 1684. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13070` → after: `L13253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13253) · [Before (L13070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13070)

```diff
-         }, this.seekToTick(MM - 1), OM = xH(qH(this.Cm)));
+         }, this.seekToTick(UU - 1), cU = vI(JI(this.WN)));
```

#### 1685. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13090` → after: `L13273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13273) · [Before (L13090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13090)

```diff
-                 entities: zM ? nM.entities : UH(nM.entities, aM.entities, Ym.h),
+                 entities: EU ? oU.entities : kI(oU.entities, AU.entities, HN.l),
```

#### 1686. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13093-L13094` → after: `L13276-L13277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13276-L13277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13276-L13277) · [Before (L13093-L13094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13093-L13094)

```diff
-                 uiElements: zM ? nM.uiElements : EH(nM.uiElements, aM.uiElements, Ym.C),
-                 environment: zM ? nM.environment : EH(nM.environment, aM.environment, Ym.v),
+                 uiElements: EU ? oU.uiElements : gI(oU.uiElements, AU.uiElements, HN.y),
+                 environment: EU ? oU.environment : gI(oU.environment, AU.environment, HN.t),
```

#### 1687. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13098` → after: `L13281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13281) · [Before (L13098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13098)

```diff
-             if (zM) nM.hotbar && (LM.hotbar = nM.hotbar), nM.playerHud && (LM.playerHud = nM.playerHud), LM.effects = (0, dH.v)(nM.effects, rM);
+             if (EU) oU.hotbar && (YU.hotbar = oU.hotbar), oU.playerHud && (YU.playerHud = oU.playerHud), YU.effects = (0, pI.q)(oU.effects, XU);
```

#### 1688. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13105-L13106` → after: `L13288-L13289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13288-L13289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13288-L13289) · [Before (L13105-L13106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13105-L13106)

```diff
-                 const MM = EH(nM.playerHud, aM.playerHud, Ym.t);
-                 (0, PM.xc)(MM) || (LM.playerHud = MM)
+                 const UU = gI(oU.playerHud, AU.playerHud, HN.q);
+                 (0, FU.Fc)(UU) || (YU.playerHud = UU)
```

#### 1689. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13108-L13110` → after: `L13291-L13293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13291-L13293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13291-L13293) · [Before (L13108-L13110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13108-L13110)

```diff
-               const MM = (0, dH.v)(nM.effects, rM),
-                 iM = (0, dH.v)(aM.effects, rM);
-               (0, dH.n)(MM, iM) || (LM.effects = MM)
+               const UU = (0, pI.q)(oU.effects, XU),
+                 zU = (0, pI.q)(AU.effects, XU);
+               (0, pI.l)(UU, zU) || (YU.effects = UU)
```

#### 1690. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13136` → after: `L13319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13319) · [Before (L13136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13136)

```diff
-         this.client.gameRecorder.stopCapture(), this.recording && this.cleanupScene(), this.stopPlayback(), this.fileHandle = null !== (iM = null === rM || void 0 === rM ? void 0 : rM.fileHandle) && void 0 !== iM ? iM : null, this.fileName = null !== (OM = null !== (SM = null === … [truncated]
+         this.client.gameRecorder.stopCapture(), this.recording && this.cleanupScene(), this.stopPlayback(), this.fileHandle = null !== (zU = null === XU || void 0 === XU ? void 0 : XU.fileHandle) && void 0 !== zU ? zU : null, this.fileName = null !== (cU = null !== (yU = null === … [truncated]
```

#### 1691. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13139` → after: `L13322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13322) · [Before (L13139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13139)

```diff
-         nM && (nM.style.display = "block"), this.recording = MM, (0, bQ.p)({
+         oU && (oU.style.display = "block"), this.recording = UU, (0, RD.o)({
```

#### 1692. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13151-L13152` → after: `L13334-L13335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13334-L13335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13334-L13335) · [Before (L13151-L13152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13151-L13152)

```diff
-         }, XH(this.client, this.Cm), IH(this.Cm, this.recording), dM.i.Tz("replayViewer|replayLoaded"), this.recording.ticks.length > 0 && (this.applyTickAtIndex(0, "seek"), this.currentTickIndex = 1), this.isPlaying = !1, QM = this.Cm, zM = MM.meta.gameNameWithVariation, LM = () … [truncated]
-           LM() || "Ti" === MM.status || ("failed" !== MM.status ? QM.OW(!1) : dM.i.Tz(jL.e, MM.messageKey))
+         }, mI(this.client, this.WN), lI(this.WN, this.recording), tU.k.UY("replayViewer|replayLoaded"), this.recording.ticks.length > 0 && (this.applyTickAtIndex(0, "seek"), this.currentTickIndex = 1), this.isPlaying = !1, DU = this.WN, EU = UU.meta.gameNameWithVariation, YU = () … [truncated]
+           YU() || "QU" === UU.status || ("failed" !== UU.status ? DU.nC(!1) : tU.k.UY(yY.g, UU.messageKey))
```

#### 1693. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13154-L13155` → after: `L13337-L13338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13337-L13338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13337-L13338) · [Before (L13154-L13155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13154-L13155)

```diff
-           console.error("Shader pack check failed for a replay", MM), LM() || dM.i.Tz(jL.e, "shaderPack:failedToCompile")
-         }))), dM.i.Tz("replayViewer|uiRefresh")
+           console.error("Shader pack check failed for a replay", UU), YU() || tU.k.UY(yY.g, "shaderPack:failedToCompile")
+         }))), tU.k.UY("replayViewer|uiRefresh")
```

#### 1694. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13164` → after: `L13347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13347) · [Before (L13164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13164)

```diff
-         this.isPlaying = !0, dM.i.Tz("replayViewer|uiRefresh")
+         this.isPlaying = !0, tU.k.UY("replayViewer|uiRefresh")
```

#### 1695. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13167` → after: `L13350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13350) · [Before (L13167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13167)

```diff
-         this.isPlaying = !1, this.tickAccumulator = 0, dM.i.Tz("replayViewer|uiRefresh")
+         this.isPlaying = !1, this.tickAccumulator = 0, tU.k.UY("replayViewer|uiRefresh")
```

#### 1696. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13170` → after: `L13353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13353) · [Before (L13170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13170)

```diff
-         this.playbackSpeed = (0, Nh.h)(this.playbackSpeed, MM), dM.i.Tz("replayViewer|uiRefresh")
+         this.playbackSpeed = (0, Mp.h)(this.playbackSpeed, UU), tU.k.UY("replayViewer|uiRefresh")
```

#### 1697. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13174` → after: `L13357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13357) · [Before (L13174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13174)

```diff
-         const rM = Math.round(MM * this.recording.meta.zk);
+         const XU = Math.round(UU * this.recording.meta.bq);
```

#### 1698. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13185` → after: `L13368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13368) · [Before (L13185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13185)

```diff
-         if (this.tickAccumulator = 0, aM === PM) return this.currentTickIndex = aM + 1, void dM.i.Tz("replayViewer|uiRefresh");
+         if (this.tickAccumulator = 0, AU === FU) return this.currentTickIndex = AU + 1, void tU.k.UY("replayViewer|uiRefresh");
```

#### 1699. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13192` → after: `L13375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13375) · [Before (L13192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13192)

```diff
-         dM.i.Tz("replayViewer|uiRefresh")
+         tU.k.UY("replayViewer|uiRefresh")
```

#### 1700. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13200-L13201` → after: `L13383-L13384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13383-L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13383-L13384) · [Before (L13200-L13201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13200-L13201)

```diff
-           MM.OW(!0), HL.failForPage(rM)
-         }(this.Cm, MM)
+           UU.nC(!0), NY.failForPage(XU)
+         }(this.WN, UU)
```

#### 1701. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13210` → after: `L13393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13393) · [Before (L13210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13210)

```diff
-             dM.i.Tz("replayViewer|uiActionRequested", MM);
+             tU.k.UY("replayViewer|uiActionRequested", UU);
```

#### 1702. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13246` → after: `L13429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13429) · [Before (L13246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13246)

```diff
-         }), this.Cm.uL.liM.clear(), this.Cm.uL.EiM.clear(), this.Cm.uL.UiM.length = 0, this.Cm.uL.GiM.clear(), this.Cm.uL.CiM.clear(), this.Cm.uL.eiM.length = 0
+         }), this.WN.qY.AcU.clear(), this.WN.qY.FcU.clear(), this.WN.qY.ocU.length = 0, this.WN.qY.DcU.clear(), this.WN.qY.EcU.clear(), this.WN.qY.YcU.length = 0
```

#### 1703. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13261` → after: `L13444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13444) · [Before (L13261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13261)

```diff
-         (0, rh.f)(this.Cm, null !== (MM = null === (rM = this.recording) || void 0 === rM ? void 0 : rM.meta.localPlayerEntityId) && void 0 !== MM ? MM : null),
+         (0, hI.i)(this.WN, null !== (UU = null === (XU = this.recording) || void 0 === XU ? void 0 : XU.meta.localPlayerEntityId) && void 0 !== UU ? UU : null),
```

#### 1704. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13267` → after: `L13450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13450) · [Before (L13267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13267)

```diff
-         }(this.Cm, Object.keys(this.lastFullData.items)), this.recording = null, this.fileHandle = null, this.fileName = null, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, this.cameraMode = "recording", this.lastFullData = {
+         }(this.WN, Object.keys(this.lastFullData.items)), this.recording = null, this.fileHandle = null, this.fileName = null, this.hasUnsavedChanges = !1, this.suggestSaveAs = !1, this.cameraMode = "recording", this.lastFullData = {
```

#### 1705. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13282-L13283` → after: `L13465-L13466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13465-L13466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13465-L13466) · [Before (L13282-L13283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13282-L13283)

```diff
-         for (this.tickAccumulator += this.playbackSpeed; this.tickAccumulator >= 1 && this.currentTickIndex < rM;) this.tickAccumulator -= 1, this.applyTickAtIndex(this.currentTickIndex, "playback"), this.currentTickIndex++, dM.i.Tz("replayViewer|uiRefresh");
-         this.currentTickIndex >= rM && (this.isPlaying = !1, dM.i.Tz("replayViewer|uiRefresh"))
+         for (this.tickAccumulator += this.playbackSpeed; this.tickAccumulator >= 1 && this.currentTickIndex < XU;) this.tickAccumulator -= 1, this.applyTickAtIndex(this.currentTickIndex, "playback"), this.currentTickIndex++, tU.k.UY("replayViewer|uiRefresh");
+         this.currentTickIndex >= XU && (this.isPlaying = !1, tU.k.UY("replayViewer|uiRefresh"))
```

#### 1706. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13287-L13288` → after: `L13470-L13471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13470-L13471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13470-L13471) · [Before (L13287-L13288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13287-L13288)

```diff
-         XH(this.client, this.Cm), IH(this.Cm, this.recording);
-         for (let iM = 0; iM <= MM; iM++) lh(this.Cm, this.recording.ticks[iM].structuralEvents);
+         mI(this.client, this.WN), lI(this.WN, this.recording);
+         for (let zU = 0; zU <= UU; zU++) tp(this.WN, this.recording.ticks[zU].structuralEvents);
```

#### 1707. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13294-L13295` → after: `L13477-L13478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13477-L13478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13477-L13478) · [Before (L13294-L13295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13294-L13295)

```diff
-         for (let OM = rM; OM > MM; OM--) Eh(this.Cm, this.recording.ticks[OM].structuralEvents);
-         XH(this.client, this.Cm),
+         for (let cU = XU; cU > UU; cU--) gp(this.WN, this.recording.ticks[cU].structuralEvents);
+         mI(this.client, this.WN),
```

#### 1708. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13297-L13298` → after: `L13480-L13481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13480-L13481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13480-L13481) · [Before (L13297-L13298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13297-L13298)

```diff
-             for (const rM of Object.keys(MM.uL.yJ.hash)) {
-               const iM = MM.uL.yJ.hash[Number(rM)];
+             for (const XU of Object.keys(UU.qY.Ga.hash)) {
+               const zU = UU.qY.Ga.hash[Number(XU)];
```

#### 1709. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13303-L13306` → after: `L13486-L13489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13486-L13489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13486-L13489) · [Before (L13303-L13306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13303-L13306)

```diff
-                 const OM = iM.i * ZM.y + rM[0],
-                   SM = iM.j * ZM.y + rM[1],
-                   jM = iM.k * ZM.y + rM[2];
-                 MM.bloxd.blockAdded(OM, SM, jM, MM.bloxd.sE(OM, SM, jM))
+                 const cU = zU.i * fU.D + XU[0],
+                   yU = zU.j * fU.D + XU[1],
+                   QU = zU.k * fU.D + XU[2];
+                 UU.bloxd.blockAdded(cU, yU, QU, UU.bloxd.pG(cU, yU, QU))
```

#### 1710. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13309` → after: `L13492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13492) · [Before (L13309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13309)

```diff
-           }(this.Cm);
+           }(this.WN);
```

#### 1711. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13315` → after: `L13498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13498) · [Before (L13315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13315)

```diff
-         Oh(MM.uiElements), ih(MM.environment), nh(this.client, this.Cm, {}, MM.entities), ph(this.Cm, {}, MM.items), MM.hotbar && mH(this.Cm, MM.hotbar), MM.playerHud && JH(MM.playerHud), (0, dH.g)(this.client, MM.effects, this.lastFullData.effects, null !== (iM = null === (OM =  … [truncated]
+         Xp(UU.uiElements), Up(UU.environment), Ap(this.client, this.WN, {}, UU.entities), Cp(this.WN, {}, UU.items), UU.hotbar && EI(this.WN, UU.hotbar), UU.playerHud && II(UU.playerHud), (0, pI.d)(this.client, UU.effects, this.lastFullData.effects, null !== (zU = null === (cU =  … [truncated]
```

#### 1712. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13319` → after: `L13502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13502) · [Before (L13319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13319)

```diff
-         const OM = null !== (rM = null === (iM = this.recording) || void 0 === iM ? void 0 : iM.meta.localPlayerEntityId) && void 0 !== rM ? rM : null;
+         const cU = null !== (XU = null === (zU = this.recording) || void 0 === zU ? void 0 : zU.meta.localPlayerEntityId) && void 0 !== XU ? XU : null;
```

#### 1713. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13322` → after: `L13505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13505) · [Before (L13322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13322)

```diff
-         SM && this.Cm.hU.setPosition(this.Cm.eD, SM.position)
+         yU && this.WN.xG.setPosition(this.WN.pM, yU.position)
```

#### 1714. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13352` → after: `L13535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13535) · [Before (L13352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13352)

```diff
-               bL: 0,
+               LY: 0,
```

#### 1715. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13355` → after: `L13538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13538) · [Before (L13355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13355)

```diff
-               easing: Mh.j
+               easing: TI.h
```

#### 1716. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13357` → after: `L13540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13540) · [Before (L13357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13357)

```diff
-               bL: 1,
+               LY: 1,
```

#### 1717. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13360` → after: `L13543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13543) · [Before (L13360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13360)

```diff
-               easing: Mh.j
+               easing: TI.h
```

#### 1718. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13371` → after: `L13554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13554) · [Before (L13371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13371)

```diff
-         const OM = null !== (rM = null === (iM = this.recording) || void 0 === iM ? void 0 : iM.meta.localPlayerEntityId) && void 0 !== rM ? rM : null;
+         const cU = null !== (XU = null === (zU = this.recording) || void 0 === zU ? void 0 : zU.meta.localPlayerEntityId) && void 0 !== XU ? XU : null;
```

#### 1719. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13374-L13375` → after: `L13557-L13558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13557-L13558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13557-L13558) · [Before (L13374-L13375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13374-L13375)

```diff
-           const SM = null !== (OM = null === iM || void 0 === iM ? void 0 : iM.recordedLocalPlayerEId) && void 0 !== OM ? OM : null;
-           null !== iM && void 0 !== iM && iM.applyRecordedViewState && SM ? (0, rh.e)(MM, SM, rM) : (0, rh.f)(MM, SM);
+           const yU = null !== (cU = null === zU || void 0 === zU ? void 0 : zU.recordedLocalPlayerEId) && void 0 !== cU ? cU : null;
+           null !== zU && void 0 !== zU && zU.applyRecordedViewState && yU ? (0, hI.e)(UU, yU, XU) : (0, hI.i)(UU, yU);
```

#### 1720. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13380-L13381` → after: `L13563-L13564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13563-L13564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13563-L13564) · [Before (L13380-L13381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13380-L13381)

```diff
-             iL: PM,
-             aiM: nM
+             QY: FU,
+             JzU: oU
```

#### 1721. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13383-L13384` → after: `L13566-L13567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13566-L13567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13566-L13567) · [Before (L13383-L13384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13383-L13384)

```diff
-           Oz.b.applyReplayView(MM, [jM[0], jM[1], jM[2]], PM, nM)
-         }(this.Cm, MM, {
+           zE.e.applyReplayView(UU, [QU[0], QU[1], QU[2]], FU, oU)
+         }(this.WN, UU, {
```

#### 1722. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13387` → after: `L13570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13570) · [Before (L13387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13387)

```diff
-         }) : "freecam" !== this.cameraMode && "keyframe" !== this.cameraMode || (0, rh.f)(this.Cm, OM)
+         }) : "freecam" !== this.cameraMode && "keyframe" !== this.cameraMode || (0, hI.i)(this.WN, cU)
```

#### 1723. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13393` → after: `L13576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13576) · [Before (L13393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13393)

```diff
-         }, this.hasUnsavedChanges = !0, "keyframe" === this.cameraMode && this.resolveAndApplyCamera(this.getLastAppliedTickIndex()), dM.i.Tz("replayViewer|uiRefresh"))
+         }, this.hasUnsavedChanges = !0, "keyframe" === this.cameraMode && this.resolveAndApplyCamera(this.getLastAppliedTickIndex()), tU.k.UY("replayViewer|uiRefresh"))
```

#### 1724. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13402` → after: `L13585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13585) · [Before (L13402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13402)

```diff
-         return Math.min(MM, rM + this.tickAccumulator + this.Cm.GMM * this.playbackSpeed)
+         return Math.min(UU, XU + this.tickAccumulator + this.WN.oXU * this.playbackSpeed)
```

#### 1725. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13427-L13429` → after: `L13610-L13612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13610-L13612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13610-L13612) · [Before (L13427-L13429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13427-L13429)

```diff
-               uiElements: EH(OM.uiElements, MM.uiElements, Ym.C),
-               environment: EH(OM.environment, MM.environment, Ym.v),
-               entities: UH(OM.entities, MM.entities, Ym.h),
+               uiElements: gI(cU.uiElements, UU.uiElements, HN.y),
+               environment: gI(cU.environment, UU.environment, HN.t),
+               entities: kI(cU.entities, UU.entities, HN.l),
```

#### 1726. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13433` → after: `L13616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13616) · [Before (L13433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13433)

```diff
-               playerHud: OM.playerHud ? EH(OM.playerHud, MM.playerHud, Ym.t) : void 0,
+               playerHud: cU.playerHud ? gI(cU.playerHud, UU.playerHud, HN.q) : void 0,
```

#### 1727. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13442` → after: `L13625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13625) · [Before (L13442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13442)

```diff
-         this.lastFullData = SM ? wH(OM) : tH(this.lastFullData, OM), (0, PM.xc)(jM.uiElements) || Oh(jM.uiElements), (0, PM.xc)(jM.environment) || ih(jM.environment), nh(this.client, this.Cm, aM, jM.entities), ph(this.Cm, nM, jM.items), zH(jM.hotbar) && this.lastFullData.hotbar & … [truncated]
+         this.lastFullData = yU ? PI(cU) : WI(this.lastFullData, cU), (0, FU.Fc)(QU.uiElements) || Xp(QU.uiElements), (0, FU.Fc)(QU.environment) || Up(QU.environment), Ap(this.client, this.WN, AU, QU.entities), Cp(this.WN, oU, QU.items), oI(QU.hotbar) && this.lastFullData.hotbar & … [truncated]
```

#### 1728. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13444` → after: `L13627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13627) · [Before (L13444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13444)

```diff
-         }(this.Cm, jM.ephemeralEvents), "seek" === rM && this.resolveAndApplyCamera(MM), this.moveLocalPlayer(this.lastFullData)
+         }(this.WN, QU.ephemeralEvents), "seek" === XU && this.resolveAndApplyCamera(UU), this.moveLocalPlayer(this.lastFullData)
```

#### 1729. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13449` → after: `L13632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13632) · [Before (L13449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13449)

```diff
-         this.prM = MM, this.onAcknowledged = rM, this.requestSnapshot = iM, this.onForgotten = OM, this.lastSeq = 0, this.pending = [], this.lastSnapshotRequestAt = Number.NEGATIVE_INFINITY, this.snapshotDue = !1
+         this.kzU = UU, this.onAcknowledged = XU, this.requestSnapshot = zU, this.onForgotten = cU, this.lastSeq = 0, this.pending = [], this.lastSnapshotRequestAt = Number.NEGATIVE_INFINITY, this.snapshotDue = !1
```

#### 1730. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13458` → after: `L13641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13641) · [Before (L13458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13458)

```diff
-         return MM && !MM(this.prM()) && console.warn("A predicted inventory action did not apply to the inventory it was predicted on"), this.record(MM)
+         return UU && !UU(this.kzU()) && console.warn("A predicted inventory action did not apply to the inventory it was predicted on"), this.record(UU)
```

#### 1731. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13485` → after: `L13668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13668) · [Before (L13485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13485)

```diff
-       rMM(MM, rM) {
+       VUU(UU, XU) {
```

#### 1732. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13487-L13488` → after: `L13670-L13671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13670-L13671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13670-L13671) · [Before (L13487-L13488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13487-L13488)

```diff
-         const iM = this.prM(),
-           OM = null !== iM.wr;
+         const zU = this.kzU(),
+           cU = null !== zU.nc;
```

#### 1733. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13495-L13496` → after: `L13678-L13679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13678-L13679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13678-L13679) · [Before (L13495-L13496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13495-L13496)

```diff
-             of this.pending) rM(iM) || console.warn(`Predicted inventory action ${MM} no longer applies after a server snapshot`)
-         })), OM && null === iM.wr
+             of this.pending) XU(zU) || console.warn(`Predicted inventory action ${UU} no longer applies after a server snapshot`)
+         })), cU && null === zU.nc
```

#### 1734. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13499` → after: `L13682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13682) · [Before (L13499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13499)

```diff
-     var Ih = iM(38977);
+     var xp = zU(38752);
```

#### 1735. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13502` → after: `L13685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13685) · [Before (L13502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13502)

```diff
-         this.uL = MM, this.pickups = []
+         this.qY = UU, this.pickups = []
```

#### 1736. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13508` → after: `L13691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13691) · [Before (L13508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13508)

```diff
-           drop: null === rM ? iM : null,
+           drop: null === XU ? zU : null,
```

#### 1737. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13516-L13517` → after: `L13699-L13700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13699-L13700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13699-L13700) · [Before (L13516-L13517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13516-L13517)

```diff
-           if ((null === (jM = aM.drop) || void 0 === jM ? void 0 : jM.NQ) !== MM) continue;
-           const PM = (0, TP.v)(iM, aM.drop.AQ, aM.drop.xQ),
+           if ((null === (QU = AU.drop) || void 0 === QU ? void 0 : QU.nD) !== UU) continue;
+           const FU = (0, KF.t)(zU, AU.drop.mD, AU.drop.lD),
```

#### 1738. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13519` → after: `L13702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13702) · [Before (L13519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13519)

```diff
-           aM.serverEId = nM, aM.drop = null, null !== nM && this.uL.hasItem(nM) && (this.hidden(nM) ? aM.hidden = !0 : OM && !SM(nM) && (this.uL.hide(nM), aM.hidden = !0))
+           AU.serverEId = oU, AU.drop = null, null !== oU && this.qY.hasItem(oU) && (this.hidden(oU) ? AU.hidden = !0 : cU && !yU(oU) && (this.qY.hide(oU), AU.hidden = !0))
```

#### 1739. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13551` → after: `L13734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13734) · [Before (L13551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13551)

```diff
-         this.uL.hasItem(MM) && this.uL.show(MM)
+         this.qY.hasItem(UU) && this.qY.show(UU)
```

#### 1740. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13566` → after: `L13749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13749) · [Before (L13566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13566)

```diff
-         this.uL = MM, this.unmatched = new Map, this.byServerEId = new Map, this.checks = null, this.suspended = !1, this.inResumeListing = !1, this.offlinePickups = void 0, this.offlinePickups = new Kh(MM)
+         this.qY = UU, this.unmatched = new Map, this.byServerEId = new Map, this.checks = null, this.suspended = !1, this.inResumeListing = !1, this.offlinePickups = void 0, this.offlinePickups = new Jp(UU)
```

#### 1741. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13581` → after: `L13764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13764) · [Before (L13581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13581)

```diff
-           const MM = this.uL.XE(OM.serverEId);
+           const UU = this.qY.wG(cU.serverEId);
```

#### 1742. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13583-L13584` → after: `L13766-L13767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13766-L13767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13766-L13767) · [Before (L13583-L13584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13583-L13584)

```diff
-             ZQ: OM.serverEId,
-             YQ: null
+             MD: cU.serverEId,
+             sD: null
```

#### 1743. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13588-L13592` → after: `L13771-L13775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13771-L13775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13771-L13775) · [Before (L13588-L13592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13588-L13592)

```diff
-           ZQ: MM,
-           YQ: {
-             NQ: OM.seq,
-             AQ: OM.itemId,
-             xQ: OM.index
+           MD: UU,
+           sD: {
+             nD: cU.seq,
+             mD: cU.itemId,
+             lD: cU.index
```

#### 1744. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13600` → after: `L13783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13783) · [Before (L13600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13600)

```diff
-         SM && this.remove(SM), this.offlinePickups.note(rM, null !== (OM = null === SM || void 0 === SM ? void 0 : SM.serverEId) && void 0 !== OM ? OM : null, iM)
+         yU && this.remove(yU), this.offlinePickups.note(XU, null !== (cU = null === yU || void 0 === yU ? void 0 : yU.serverEId) && void 0 !== cU ? cU : null, zU)
```

#### 1745. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13603` → after: `L13786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13786) · [Before (L13603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13603)

```diff
-         this.predict(MM, rM, iM, OM, (0, Ih.p)(SM, jM), (0, Ih.n)(jM))
+         this.predict(UU, XU, zU, cU, (0, xp.n)(yU, QU), (0, xp.m)(QU))
```

#### 1746. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13606-L13607` → after: `L13789-L13790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13789-L13790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13789-L13790) · [Before (L13606-L13607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13606-L13607)

```diff
-         const SM = (0, Ih.s)(MM);
-         this.predict(MM, iM, OM, {}, (0, Ih.g)(rM, SM), (0, Ih.d)(SM))
+         const yU = (0, xp.o)(UU);
+         this.predict(UU, zU, cU, {}, (0, xp.h)(XU, yU), (0, xp.g)(yU))
```

#### 1747. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13611` → after: `L13794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13794) · [Before (L13611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13611)

```diff
-         const PM = null !== (aM = this.unmatched.get(MM)) && void 0 !== aM ? aM : [],
+         const FU = null !== (AU = this.unmatched.get(UU)) && void 0 !== AU ? AU : [],
```

#### 1748. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13613` → after: `L13796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13796) · [Before (L13613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13613)

```diff
-             eId: this.uL.spawn(rM, iM, OM, SM, jM),
+             eId: this.qY.spawn(XU, zU, cU, yU, QU),
```

#### 1749. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13616` → after: `L13799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13799) · [Before (L13616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13616)

```diff
-             index: (0, TP.r)(PM.map((MM => MM.itemId)), rM),
+             index: (0, KF.q)(FU.map((UU => UU.itemId)), XU),
```

#### 1750. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13636` → after: `L13819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13819) · [Before (L13636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13636)

```diff
-         return null !== (rM = this.all().find((rM => rM.eId === MM))) && void 0 !== rM ? rM : null
+         return null !== (XU = this.all().find((XU => XU.eId === UU))) && void 0 !== XU ? XU : null
```

#### 1751. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13639` → after: `L13822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13822) · [Before (L13639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13639)

```diff
-         if (MM === TP.y) return void(this.inResumeListing = !1);
+         if (UU === KF.u) return void(this.inResumeListing = !1);
```

#### 1752. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13672` → after: `L13855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13855) · [Before (L13672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13672)

```diff
-         else if (this.uL.hasItem(rM)) return void this.discard(MM);
+         else if (this.qY.hasItem(XU)) return void this.discard(UU);
```

#### 1753. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13677` → after: `L13860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13860) · [Before (L13677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13677)

```diff
-         return rM ? null === this.uL.XE(rM.eId) ? (this.byServerEId.delete(MM), this.discard(rM), null) : (rM.serverItemArrived = !0, rM.serverMovedAt = Date.now(), this.checks ??= setInterval((() => {
+         return XU ? null === this.qY.wG(XU.eId) ? (this.byServerEId.delete(UU), this.discard(XU), null) : (XU.serverItemArrived = !0, XU.serverMovedAt = Date.now(), this.checks ??= setInterval((() => {
```

#### 1754. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13707-L13708` → after: `L13890-L13891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13890-L13891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13890-L13891) · [Before (L13707-L13708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13707-L13708)

```diff
-           const OM = this.uL.XE(iM.eId),
-             SM = this.uL.XE(iM.serverEId),
+           const cU = this.qY.wG(zU.eId),
+             yU = this.qY.wG(zU.serverEId),
```

#### 1755. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13715` → after: `L13898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13898) · [Before (L13715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13715)

```diff
-         this.byServerEId.delete(MM.serverEId), clearTimeout(MM.timeout), null !== this.uL.XE(MM.serverEId) && this.uL.reveal(MM.serverEId, MM.eId), this.uL.remove(MM.eId)
+         this.byServerEId.delete(UU.serverEId), clearTimeout(UU.timeout), null !== this.qY.wG(UU.serverEId) && this.qY.reveal(UU.serverEId, UU.eId), this.qY.remove(UU.eId)
```

#### 1756. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13732` → after: `L13915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13915) · [Before (L13732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13732)

```diff
-         clearTimeout(MM.timeout), this.uL.remove(MM.eId)
+         clearTimeout(UU.timeout), this.qY.remove(UU.eId)
```

#### 1757. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13737` → after: `L13920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13920) · [Before (L13737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13737)

```diff
-         this.Cm = MM
+         this.WN = UU
```

#### 1758. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13740` → after: `L13923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13923) · [Before (L13740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13740)

```diff
-         return (0, rn.k)(this.Cm, null, OM, MM, {
+         return (0, Uo.h)(this.WN, null, cU, UU, {
```

#### 1759. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13743` → after: `L13926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13926) · [Before (L13743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13743)

```diff
-           li: !0,
+           uX: !0,
```

#### 1760. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13748` → after: `L13931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13931) · [Before (L13748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13748)

```diff
-         this.Cm.hU.deleteEntity(MM)
+         this.WN.xG.deleteEntity(UU)
```

#### 1761. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13751` → after: `L13934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13934) · [Before (L13751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13751)

```diff
-         return this.Cm.hU.BMM(MM, "position") ? this.Cm.hU.XE(MM) : null
+         return this.WN.xG.qXU(UU, "position") ? this.WN.xG.wG(UU) : null
```

#### 1762. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13754` → after: `L13937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13937) · [Before (L13754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13754)

```diff
-         return this.Cm.hU.BMM(MM, "itemState")
+         return this.WN.xG.qXU(UU, "itemState")
```

#### 1763. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13757` → after: `L13940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13940) · [Before (L13757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13757)

```diff
-         const iM = this.XE(rM);
+         const zU = this.wG(XU);
```

#### 1764. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13759-L13760` → after: `L13942-L13943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13942-L13943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13942-L13943) · [Before (L13759-L13760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13759-L13760)

```diff
-           this.Cm.hU.setPosition(MM, iM);
-           const rM = this.Cm.hU.getState(MM, "smoothToServerPos"),
+           this.WN.xG.setPosition(UU, zU);
+           const XU = this.WN.xG.getState(UU, "smoothToServerPos"),
```

#### 1765. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13763` → after: `L13946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13946) · [Before (L13763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13763)

```diff
-         }(0, rn.K)(this.Cm, MM, (0, rn.q)(this.Cm, rM), !0)
+         }(0, Uo.x)(this.WN, UU, (0, Uo.m)(this.WN, XU), !0)
```

#### 1766. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13766` → after: `L13949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13949) · [Before (L13766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13766)

```diff
-         this.Cm.hU.BMM(MM, "hidingMeshManager") || (0, rn.K)(this.Cm, MM, null, !0)
+         this.WN.xG.qXU(UU, "hidingMeshManager") || (0, Uo.x)(this.WN, UU, null, !0)
```

#### 1767. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13769` → after: `L13952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13952) · [Before (L13769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13769)

```diff
-         this.Cm.hU.bZ(MM, "hidingMeshManager")
+         this.WN.xG.nH(UU, "hidingMeshManager")
```

#### 1768. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13772-L13778` → after: `L13955-L13961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13955-L13961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13955-L13961) · [Before (L13772-L13778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13772-L13778)

```diff
-     var ch = iM(40342),
-       MJ = iM(7120),
-       rJ = iM(34954),
-       iJ = iM(4820),
-       OJ = iM(1906);
-     (0, ta.C)(ua);
-     const SJ = new Qn.b((() => iM.e(212).then((() => iM(44193))).then((MM => () => new MM.default))));
+     var Tp = zU(40124),
+       hp = zU(7219),
+       Ua = zU(34784),
+       Xa = zU(4865),
+       za = zU(1885);
+     (0, dA.v)(eA);
+     const ca = new Fo.e((() => zU.e(226).then((() => zU(44220))).then((UU => () => new UU.default))));
```

#### 1769. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13780-L13782` → after: `L13963-L13965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13963-L13965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13963-L13965) · [Before (L13780-L13782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13780-L13782)

```diff
-     const jJ = new NQ.h((MM => iM(40349)(`./${MM}/${MM}Client`)));
-     for (const zJ of NQ.d) jJ.load(zJ).catch((MM => {
-       (0, ga.b)(`${zJ}'s client code failed to evaluate`, MM)
+     const ya = new HD.f((UU => zU(40132)(`./${UU}/${UU}Client`)));
+     for (const Da of HD.b) ya.load(Da).catch((UU => {
+       (0, LA.b)(`${Da}'s client code failed to evaluate`, UU)
```

#### 1770. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13786` → after: `L13969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13969) · [Before (L13786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13786)

```diff
-         this.Cm = MM, this.meshCreator = rM, this.entities = {}, this.ironChestPasskeyCache = new oQ, this.cameraController = void 0, this.freeCameraController = void 0, this.scriptedCameraController = void 0, this.environmentController = void 0, this.groundArrowPathController =  … [truncated]
+         this.WN = UU, this.meshCreator = XU, this.entities = {}, this.ironChestPasskeyCache = new uD, this.cameraController = void 0, this.freeCameraController = void 0, this.scriptedCameraController = void 0, this.environmentController = void 0, this.groundArrowPathController =  … [truncated]
```

#### 1771. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13788-L13790` → after: `L13971-L13973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13971-L13973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13971-L13973) · [Before (L13788-L13790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13788-L13790)

```diff
-             if (ka.d.get("clientEscMenuOptions").showChunkBorders) {
-               const MM = this.Cm.camera.XE();
-               return (0, ZM.W)(MM)
+             if (rA.e.get("clientEscMenuOptions").showChunkBorders) {
+               const UU = this.WN.camera.wG();
+               return (0, fU.bb)(UU)
```

#### 1772. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13796` → after: `L13979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13979) · [Before (L13796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13796)

```diff
-         }), this.gameRecorder = new cH(this, this.Cm), this.gameReplayer = new Bh(this, this.Cm), this.itemDropPrediction = new Th(new Vh(MM)), (0, oM.onGameResetOnce)((() => {
+         }), this.gameRecorder = new bI(this, this.WN), this.gameReplayer = new mp(this, this.WN), this.itemDropPrediction = new Kp(new bp(UU)), (0, iU.onGameResetOnce)((() => {
```

#### 1773. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13798` → after: `L13981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13981) · [Before (L13798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13798)

```diff
-         })), this.inventoryPrediction = new Xh((() => MM.hU.prM(MM.eD)), (MM => {
+         })), this.inventoryPrediction = new lp((() => UU.xG.kzU(UU.pM)), (UU => {
```

#### 1774. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13801` → after: `L13984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13984) · [Before (L13801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13801)

```diff
-           (0, oM.sendColyMessage)(TP.gj, null)
+           (0, iU.sendColyMessage)(KF.Di, null)
```

#### 1775. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13811-L13812` → after: `L13994-L13995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13994-L13995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13994-L13995) · [Before (L13811-L13812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13811-L13812)

```diff
-         (0, rr.k)(), (0, nn.k)();
-         const rM = Promise.all([SJ.load(), zn.h.load()]);
+         (0, XX.m)(), (0, Ao.e)();
+         const XU = Promise.all([ca.load(), oo.f.load()]);
```

#### 1776. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13814-L13815` → after: `L13997-L13998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R13997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L13997-L13998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L13997-L13998) · [Before (L13814-L13815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13814-L13815)

```diff
-         const iM = (0, Ea.i)(),
-           [OM, SM] = (0, AQ.e)(),
+         const zU = (0, kA.j)(),
+           [cU, yU] = (0, MD.d)(),
```

#### 1777. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13820` → after: `L14003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14003) · [Before (L13820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13820)

```diff
-         (0, xQ.g)(null);
+         (0, vD.l)(null);
```

#### 1778. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13822-L13823` → after: `L14005-L14006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14005-L14006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14005-L14006) · [Before (L13822-L13823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13822-L13823)

```diff
-           PM = ka.d.get("clientEscMenuOptions");
-         ka.d.reprobeOldIntelDriver(), await (0, nn.t)("shader pack");
+           FU = rA.e.get("clientEscMenuOptions");
+         rA.e.reprobeOldIntelDriver(), await (0, Ao.n)("shader pack");
```

#### 1779. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13825-L13826` → after: `L14008-L14009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14008-L14009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14008-L14009) · [Before (L13825-L13826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13825-L13826)

```diff
-           QM = ka.d.isWebGpuDefaultOff(),
-           zM = PM.useWebGpu || (0, rJ.e)(null !== nM, QM);
+           DU = rA.e.isWebGpuDefaultOff(),
+           EU = FU.useWebGpu || (0, Ua.d)(null !== oU, DU);
```

#### 1780. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13828` → after: `L14011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14011) · [Before (L13828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13828)

```diff
-         (0, wa.k)(zM);
+         (0, WA.i)(EU);
```

#### 1781. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13832` → after: `L14015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14015) · [Before (L13832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13832)

```diff
-           await (0, nn.t)("renderer");
+           await (0, Ao.n)("renderer");
```

#### 1782. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13838` → after: `L14021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14021) · [Before (L13838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13838)

```diff
-           } = await (0, wa.c)(OM, {
+           } = await (0, WA.b)(cU, {
```

#### 1783. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13840` → after: `L14023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14023) · [Before (L13840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13840)

```diff
-             webGpuDefaultOffReason: ka.d.webGpuDefaultOffReason(),
+             webGpuDefaultOffReason: rA.e.webGpuDefaultOffReason(),
```

#### 1784. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13844` → after: `L14027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14027) · [Before (L13844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13844)

```diff
-           if ((0, OP.p)("webgpuloss")) {
+           if ((0, zF.q)("webgpuloss")) {
```

#### 1785. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13851` → after: `L14034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14034) · [Before (L13851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13851)

```diff
-             (0, SP.d)((rM => {
+             (0, cF.b)((XU => {
```

#### 1786. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13856-L13860` → after: `L14039-L14043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14039-L14043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14039-L14043) · [Before (L13856-L13860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13856-L13860)

```diff
-           const jM = await iM() ? Qa.z() : null;
-           if (null === jM || !mn.h.provideWasmModule(jM)) {
-             (0, ta.k)();
-             const MM = (0, Ga.h)();
-             return lr.b.errorWithCode("timeout" === MM || "fetch_failed" === MM ? "Bloxd couldn't finish loading. Check your connection and refresh the page." : "Bloxd couldn't start in this browser. Try another browser, or turn off blockers for this site.", Er.n.INITIALISE_NOA,  … [truncated]
+           const QU = await zU() ? oA.y() : null;
+           if (null === QU || !Eo.e.provideWasmModule(QU)) {
+             (0, dA.i)();
+             const UU = (0, BA.f)();
+             return kX.c.errorWithCode("timeout" === UU || "fetch_failed" === UU ? "Bloxd couldn't finish loading. Check your connection and refresh the page." : "Bloxd couldn't start in this browser. Try another browser, or turn off blockers for this site.", GX.m.INITIALISE_NOA,  … [truncated]
```

#### 1787. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13864-L13871` → after: `L14047-L14054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14047-L14054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14047-L14054) · [Before (L13864-L13871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13864-L13871)

```diff
-           const JM = null !== (HM = null === SM || void 0 === SM ? void 0 : SM.yE) && void 0 !== HM ? HM : await (0, wa.e)();
-           await (0, nn.t)("engine");
-           const EM = ka.d.get("clientEscMenuOptions").antiAliasing;
-           if (Fa.b.setRendererMsaa(EM), LM = new ra({
-               mN: MM,
-               yE: JM,
-               MJ: null !== (yM = null === SM || void 0 === SM ? void 0 : SM.MJ) && void 0 !== yM ? yM : null,
-               zk: hM.f.clientTicksPerSecond,
+           const aU = null !== (IU = null === yU || void 0 === yU ? void 0 : yU.Hk) && void 0 !== IU ? IU : await (0, WA.f)();
+           await (0, Ao.n)("engine");
+           const GU = rA.e.get("clientEscMenuOptions").antiAliasing;
+           if (nA.d.setRendererMsaa(GU), YU = new UA({
+               HV: UU,
+               Hk: aU,
+               Ua: null !== (gU = null === yU || void 0 === yU ? void 0 : yU.Ua) && void 0 !== gU ? gU : null,
+               bq: pU.f.clientTicksPerSecond,
```

#### 1788. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13874-L13881` → after: `L14057-L14064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14057-L14064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14057-L14064) · [Before (L13874-L13881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13874-L13881)

```diff
-               mI: !1,
-               MI: !1,
-               HL: hM.f.HL,
-               ny: hM.f.ny,
-               JMM: [0, 5, 0],
-               jy: hM.f.jy,
-               Sy: hM.f.Sy,
-               Py: hM.f.Py,
+               IK: !1,
+               NK: !1,
+               aY: pU.f.aY,
+               Qg: pU.f.Qg,
+               zXU: [0, 5, 0],
+               cg: pU.f.cg,
+               zg: pU.f.zg,
+               yg: pU.f.yg,
```

#### 1789. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13883-L13889` → after: `L14066-L14072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14066-L14072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14066-L14072) · [Before (L13883-L13889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13883-L13889)

```diff
-               rJ: !PM.disableAmbientOcclusion,
-               wiM: [.92, .8, .5],
-               tiM: 1,
-               jU: [aM.horizontal, aM.vertical],
-               EW: (0, xQ.c)(aM),
-               pW: [Ur.d.xz, Ur.d.y],
-               uB: !1,
+               Xa: !FU.disableAmbientOcclusion,
+               IcU: [.92, .8, .5],
+               pcU: 1,
+               nG: [AU.horizontal, AU.vertical],
+               bC: (0, vD.f)(AU),
+               Iw: [BX.e.xz, BX.e.y],
+               HJ: !1,
```

#### 1790. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13891-L13893` → after: `L14074-L14076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14074-L14076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14074-L14076) · [Before (L13891-L13893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13891-L13893)

```diff
-               Ym: hM.f.Ym,
-               biM: EM,
-               sm: (0, Gr.b)((() => LM), (() => IM.j.bloxd)),
+               MN: pU.f.MN,
+               NcU: GU,
+               SN: (0, ZX.e)((() => YU), (() => JU.f.bloxd)),
```

#### 1791. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13906` → after: `L14089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14089) · [Before (L13906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13906)

```diff
-               meshingWorkerCount: (0, BQ.c)(navigator.hardwareConcurrency, (0, DM.isMobile)()),
+               meshingWorkerCount: (0, mD.d)() ? 1 : (0, nD.e)(navigator.hardwareConcurrency, (0, rU.isMobile)()),
```

#### 1792. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13908` → after: `L14091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14091) · [Before (L13908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13908)

```diff
-                 (0, Za.e)("Bloxd stopped drawing the world. Refresh the page to keep playing.")
+                 (0, uA.b)("Bloxd stopped drawing the world. Refresh the page to keep playing.")
```

#### 1793. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13913` → after: `L14096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14096) · [Before (L13913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13913)

```diff
-               giM: (MM, rM) => {
+               acU: (UU, XU) => {
```

#### 1794. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13917` → after: `L14100-L14101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14100-L14101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14100-L14101) · [Before (L13917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13917)

```diff
-               Uh: {
+               fluidMeshColumn: (0, RX.k)(),
+               Zp: {
```

#### 1795. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13922` → after: `L14106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14106) · [Before (L13922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13922)

```diff
-               bMM: {
+               YXU: {
```

#### 1796. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13925` → after: `L14109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14109) · [Before (L13925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13925)

```diff
-               nh: nM && null !== SM ? {
+               Fp: oU && null !== yU ? {
```

#### 1797. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13931-L13932` → after: `L14115-L14116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14115-L14116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14115-L14116) · [Before (L13931-L13932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13931-L13932)

```diff
-               dM.i.subscribe("appManagerUpdated|gameState", (rM => {
-                 "landingPage" === rM ? MM.kU.stopWorkers() : (0, ka.h)(rM) && MM.kU.restartWorkers()
+               tU.k.subscribe("appManagerUpdated|gameState", (XU => {
+                 "landingPage" === XU ? UU.yB.stopWorkers() : (0, rA.h)(XU) && UU.yB.restartWorkers()
```

#### 1798. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13934` → after: `L14118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14118) · [Before (L13934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13934)

```diff
-             }(LM), (0, En.j)("js", (0, dn.c)(LM, za.e()), (() => {
+             }(YU), (0, to.g)("js", (0, po.f)(YU, DA.e()), (() => {
```

#### 1799. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13936` → after: `L14120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14120) · [Before (L13936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13936)

```diff
-             })), (0, nn.h)() && (LM.OW(!0), mM = !0), function(MM) {
+             })), (0, Ao.c)() && (YU.nC(!0), NU = !0), function(UU) {
```

#### 1800. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13938` → after: `L14122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14122) · [Before (L13938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13938)

```diff
-               rM && ((0, fa.l)(), (0, OP.p)("webgpuloss") && (0, OP.b)("loseWebGpuDevice", (() => {
+               XU && ((0, iA.m)(), (0, zF.q)("webgpuloss") && (0, zF.d)("loseWebGpuDevice", (() => {
```

#### 1801. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13945-L13946` → after: `L14129-L14130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14129-L14130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14129-L14130) · [Before (L13945-L13946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13945-L13946)

```diff
-               (0, fa.l)();
-               const rM = new rP(MM._gl.getExtension("WEBGL_lose_context"), MM.PJ, new ca),
+               (0, iA.m)();
+               const XU = new UF(UU._gl.getExtension("WEBGL_lose_context"), UU.Fa, new TA),
```

#### 1802. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13957` → after: `L14141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14141) · [Before (L13957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13957)

```diff
-             }(LM.CL.engine), null !== SM && void 0 !== SM && SM.gpuDevice && LM.nh) {
+             }(YU.WY.engine), null !== yU && void 0 !== yU && yU.gpuDevice && YU.Fp) {
```

#### 1803. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13959` → after: `L14143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14143) · [Before (L13959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13959)

```diff
-             const MM = LM.nh;
+             const UU = YU.Fp;
```

#### 1804. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13965` → after: `L14149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14149) · [Before (L13965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13965)

```diff
-           LM.uL.on("gJ", (() => {
+           YU.qY.on("qa", (() => {
```

#### 1805. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13967` → after: `L14151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14151) · [Before (L13967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13967)

```diff
-               LM.uL.gJ && (0, uQ.g)()
+               YU.qY.qa && (0, LD.j)()
```

#### 1806. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13969` → after: `L14153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14153) · [Before (L13969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13969)

```diff
-           })), gQ.b.markGameEngineConstructed()
+           })), dD.c.markGameEngineConstructed()
```

#### 1807. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13971` → after: `L14155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14155) · [Before (L13971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13971)

```diff
-           return (0, ta.k)(), GM instanceof Error && GM.message.startsWith("WebGL not supported") ? lr.b.errorWithCode("An issue with your browser is preventing the game from loading. It will work after you have fully closed and re-opened your browser.", Er.n.INITIALISE_WEBGL, {
+           return (0, dA.i)(), ZU instanceof Error && ZU.message.startsWith("WebGL not supported") ? kX.c.errorWithCode("An issue with your browser is preventing the game from loading. It will work after you have fully closed and re-opened your browser.", GX.m.INITIALISE_WEBGL, {
```

#### 1808. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13974` → after: `L14158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14158) · [Before (L13974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13974)

```diff
-           }) : lr.b.errorWithCode(GM.toString(), Er.n.INITIALISE_NOA, {
+           }) : kX.c.errorWithCode(ZU.toString(), GX.m.INITIALISE_NOA, {
```

#### 1809. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13979-L13980` → after: `L14163-L14164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14163-L14164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14163-L14164) · [Before (L13979-L13980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13979-L13980)

```diff
-         dM.i.Tz("matchmakeAndPlayStepCompleted", {
-           step: Er.n.INITIALISE_NOA,
+         tU.k.UY("matchmakeAndPlayStepCompleted", {
+           step: GX.m.INITIALISE_NOA,
```

#### 1810. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13982-L13985` → after: `L14166-L14169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14166-L14169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14166-L14169) · [Before (L13982-L13985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13982-L13985)

```diff
-         }), await (0, nn.t)("world gen"), (0, mn.d)(LM), (0, Hn.d)(LM), await (0, nn.t)("particles"), (0, WM.w)(LM), await (0, nn.t)("gameplay"), aJ.setupBloxdForGameplay(LM, MM);
-         IM.j.bloxd, IM.j.Cm = LM, wQ.b.initNoa(LM), (0, iJ.c)(LM), await (0, nn.t)("registration");
-         const EM = (0, NM.j)(LM).catch((MM => {
-             console.error(MM.stack), (0, Zm.CJ)(MM);
+         }), await (0, Ao.n)("world gen"), (0, Eo.c)(YU), (0, Yo.e)(YU), await (0, Ao.n)("particles"), (0, OU.u)(YU), await (0, Ao.n)("gameplay"), Qa.setupBloxdForGameplay(YU, UU);
+         JU.f.bloxd, JU.f.WN = YU, PD.e.initNoa(YU), (0, Xa.c)(YU), await (0, Ao.n)("registration");
+         const GU = (0, vU.h)(YU).catch((UU => {
+             console.error(UU.stack), (0, uN.Wa)(UU);
```

#### 1811. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13987` → after: `L14171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14171) · [Before (L13987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13987)

```diff
-             return JM.e.getId() !== KM.b && (rM += ' - try switching to the "Default 2" texture pack in settings.'), {
+             return aU.c.getId() !== jU.d && (XU += ' - try switching to the "Default 2" texture pack in settings.'), {
```

#### 1812. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L13996` → after: `L14180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14180) · [Before (L13996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L13996)

```diff
-           UM = (0, pM.n)(LM).catch((MM => (console.error(MM.stack), {
+           BU = (0, qU.s)(YU).catch((UU => (console.error(UU.stack), {
```

#### 1813. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14004-L14006` → after: `L14188-L14190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14188-L14190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14188-L14190) · [Before (L14004-L14006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14004-L14006)

```diff
-         return aJ.initialAssetLoadedProm = Promise.all([EM, UM]), mM && (0, nn.u)((() => {
-           LM.OW(!1)
-         })), lr.b.value({
+         return Qa.initialAssetLoadedProm = Promise.all([GU, BU]), NU && (0, Ao.q)((() => {
+           YU.nC(!1)
+         })), kX.c.value({
```

#### 1814. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14015` → after: `L14199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14199) · [Before (L14015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14015)

```diff
-         return IM.j.bloxd = SM, MM.bloxd = IM.j.bloxd, iM.init(SM), dr.b.init(), dM.i.Tz("newBloxdSetup", SM), {
+         return JU.f.bloxd = yU, UU.bloxd = JU.f.bloxd, zU.init(yU), tX.c.init(), tU.k.UY("newBloxdSetup", yU), {
```

#### 1815. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14021` → after: `L14205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14205) · [Before (L14021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14021)

```diff
-         if (OM.aborted) return lr.b.errorWithCode("Left the game while it loaded", Er.n.CONNECT_TO_GAME_SERVER, {
+         if (cU.aborted) return kX.c.errorWithCode("Left the game while it loaded", GX.m.CONNECT_TO_GAME_SERVER, {
```

#### 1816. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14023` → after: `L14207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14207) · [Before (L14023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14023)

```diff
-           Ti: !0
+           QU: !0
```

#### 1817. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14027` → after: `L14211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14211) · [Before (L14027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14027)

```diff
-             (0, km.j)(SM, (0, km.f)(OM))
+             (0, rN.h)(yU, (0, rN.e)(cU))
```

#### 1818. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14033` → after: `L14217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14217) · [Before (L14033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14033)

```diff
-           PM = jJ.load(rM.gameNameWithVariation).then((() => null), (MM => null !== MM && void 0 !== MM ? MM : new Error("the game's code did not load")));
+           FU = ya.load(XU.gameNameWithVariation).then((() => null), (UU => null !== UU && void 0 !== UU ? UU : new Error("the game's code did not load")));
```

#### 1819. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14038` → after: `L14222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14222) · [Before (L14038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14038)

```diff
-         const QM = dM.i.subscribe("leaveGame", (() => {
+         const DU = tU.k.subscribe("leaveGame", (() => {
```

#### 1820. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14044` → after: `L14228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14228) · [Before (L14044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14044)

```diff
-           dM.i.unsubscribe(QM), OM.removeEventListener("abort", jM)
+           tU.k.unsubscribe(DU), cU.removeEventListener("abort", QU)
```

#### 1821. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14049` → after: `L14233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14233) · [Before (L14049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14049)

```diff
-         dM.i.Tz("onStartAssetLoading");
+         tU.k.UY("onStartAssetLoading");
```

#### 1822. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14051` → after: `L14235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14235) · [Before (L14051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14051)

```diff
-         if (!1 === nM.success) return lr.b.errorWithCode(nM.failDetails.reason, Er.n.CONNECT_TO_GAME_SERVER, {
+         if (!1 === oU.success) return kX.c.errorWithCode(oU.failDetails.reason, GX.m.CONNECT_TO_GAME_SERVER, {
```

#### 1823. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14053` → after: `L14237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14237) · [Before (L14053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14053)

```diff
-           Ti: !0 === nM.failDetails.goesToUpdateWaiting || aM(),
+           QU: !0 === oU.failDetails.goesToUpdateWaiting || AU(),
```

#### 1824. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14059-L14060` → after: `L14243-L14244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14243-L14244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14243-L14244) · [Before (L14059-L14060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14059-L14060)

```diff
-         dM.i.Tz("matchmakeAndPlayStepCompleted", {
-           step: Er.n.CONNECT_TO_GAME_SERVER,
+         tU.k.UY("matchmakeAndPlayStepCompleted", {
+           step: GX.m.CONNECT_TO_GAME_SERVER,
```

#### 1825. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14068-L14069` → after: `L14252-L14253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14252-L14253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14252-L14253) · [Before (L14068-L14069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14068-L14069)

```diff
-           mM = rM => (LM.dispose(), zM.aE(), zM.leave(), MM.msgHandler === zM && (MM.msgHandler = null), rM),
-           HM = MM => mM(lr.b.errorWithCode("Left the game while it loaded", MM, {
+           NU = XU => (YU.dispose(), EU.Wk(), EU.leave(), UU.msgHandler === EU && (UU.msgHandler = null), XU),
+           IU = UU => NU(kX.c.errorWithCode("Left the game while it loaded", UU, {
```

#### 1826. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14071` → after: `L14255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14255) · [Before (L14071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14071)

```diff
-             Ti: !0
+             QU: !0
```

#### 1827. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14073-L14075` → after: `L14257-L14259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14257-L14259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14257-L14259) · [Before (L14073-L14075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14073-L14075)

```diff
-         if (aM()) return HM(Er.n.CONNECT_TO_GAME_SERVER);
-         const [hM, yM] = await aJ.initialAssetLoadedProm, lM = JM.e.getGenerationFailure();
-         if (null !== lM) return aM() ? HM(Er.n.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES) : mM(lr.b.errorWithCode(lM.message, Er.n.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES, {
+         if (AU()) return IU(GX.m.CONNECT_TO_GAME_SERVER);
+         const [pU, gU] = await Qa.initialAssetLoadedProm, kU = aU.c.getGenerationFailure();
+         if (null !== kU) return AU() ? IU(GX.m.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES) : NU(kX.c.errorWithCode(kU.message, GX.m.TEXTURE_PACK_GENERATE_ROTATED_TEXTURES, {
```

#### 1828. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14079` → after: `L14263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14263) · [Before (L14079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14079)

```diff
-         if (!1 === hM.success) return lr.b.errorWithCode(hM.failDetails.reason, Er.n.REGISTRATION, {
+         if (!1 === pU.success) return kX.c.errorWithCode(pU.failDetails.reason, GX.m.REGISTRATION, {
```

#### 1829. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14082` → after: `L14266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14266) · [Before (L14082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14082)

```diff
-         if (!1 === yM.success) return lr.b.errorWithCode(yM.failDetails.reason, Er.n.SETUP_LIFEFORMS, {
+         if (!1 === gU.success) return kX.c.errorWithCode(gU.failDetails.reason, GX.m.SETUP_LIFEFORMS, {
```

#### 1830. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14085` → after: `L14269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14269) · [Before (L14085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14085)

```diff
-         if (aM()) return HM(Er.n.REGISTRATION);
+         if (AU()) return IU(GX.m.REGISTRATION);
```

#### 1831. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14087` → after: `L14271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14271) · [Before (L14087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14087)

```diff
-         if (null !== EM) return mM(lr.b.errorWithCode(String(EM), Er.n.REGISTRATION, {
+         if (null !== GU) return NU(kX.c.errorWithCode(String(GU), GX.m.REGISTRATION, {
```

#### 1832. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14091-L14093` → after: `L14275-L14277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14275-L14277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14275-L14277) · [Before (L14091-L14093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14091-L14093)

```diff
-         const UM = MM.Cm,
-           GM = await HL.applyForGame(UM.nh, rM.gameNameWithVariation, (() => aM() || jM()));
-         return Sn.e.beforeServerListeners && await Sn.e.beforeServerListeners(), aM() || "Ti" === GM.status && !jM() ? HM(Er.n.SHADER_PACK) : "failed" === GM.status ? mM(lr.b.errorWithCode(GM.messageKey, Er.n.SHADER_PACK, {
+         const BU = UU.WN,
+           ZU = await NY.applyForGame(BU.Fp, XU.gameNameWithVariation, (() => AU() || QU()));
+         return zo.d.beforeServerListeners && await zo.d.beforeServerListeners(), AU() || "QU" === ZU.status && !QU() ? IU(GX.m.SHADER_PACK) : "failed" === ZU.status ? NU(kX.c.errorWithCode(ZU.messageKey, GX.m.SHADER_PACK, {
```

#### 1833. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14095` → after: `L14279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14279) · [Before (L14095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14095)

```diff
-         })) : jM() ? mM(lr.b.ok()) : zM.xG() ? mM(lr.b.errorWithCode("You have disconnected from the server.", Er.n.CONNECT_TO_GAME_SERVER, {
+         })) : QU() ? NU(kX.c.ok()) : EU.oR() ? NU(kX.c.errorWithCode("You have disconnected from the server.", GX.m.CONNECT_TO_GAME_SERVER, {
```

#### 1834. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14097` → after: `L14281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14281) · [Before (L14097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14097)

```diff
-         })) : (null !== (PM = UM.nh) && void 0 !== PM && PM.isRunning() && (0, ch.e)(rM.userContext, rM.gameNameWithVariation).catch((MM => {
+         })) : (null !== (FU = BU.Fp) && void 0 !== FU && FU.isRunning() && (0, Tp.f)(XU.userContext, XU.gameNameWithVariation).catch((UU => {
```

#### 1835. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14099` → after: `L14283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14283) · [Before (L14099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14099)

```diff
-         })), "ok" === GM.status && void 0 !== GM.couldntRun && (0, ch.d)(GM.couldntRun), MM.handleServerConnectionInitialised(iM, rM.userContext, zM, LM), lr.b.ok())
+         })), "ok" === ZU.status && void 0 !== ZU.couldntRun && (0, Tp.e)(ZU.couldntRun), UU.handleServerConnectionInitialised(zU, XU.userContext, EU, YU), kX.c.ok())
```

#### 1836. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14103` → after: `L14287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14287) · [Before (L14103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14103)

```diff
-         (0, nn.e)();
+         (0, Ao.b)();
```

#### 1837. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14112-L14113` → after: `L14296-L14297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14296-L14297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14296-L14297) · [Before (L14112-L14113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14112-L14113)

```diff
-         } = aJ.setupBloxdForGameplay((0, IM.f)(), MM)));
-         const jM = (0, IM.f)(),
+         } = Qa.setupBloxdForGameplay((0, JU.e)(), UU)));
+         const QU = (0, JU.e)(),
```

#### 1838. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14115` → after: `L14299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14299) · [Before (L14115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14115)

```diff
-         return aM.isError() ? aM.asError().forward() : (jM.OW(!1), SM.gameRecorder.onGameSessionStarted(), (0, hn.i)(jM), (0, FQ.b)(), aJ.hasPlayedFirstGame = !0, lr.b.ok())
+         return AU.isError() ? AU.asError().forward() : (QU.nC(!1), yU.gameRecorder.onGameSessionStarted(), (0, No.h)(QU), (0, sD.e)(), Qa.hasPlayedFirstGame = !0, kX.c.ok())
```

#### 1839. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14118-L14119` → after: `L14302-L14303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14302-L14303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14302-L14303) · [Before (L14118-L14119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14118-L14119)

```diff
-         IM.j.bloxd.client.closeClientGameSession(), (0, oM.resetUtil)();
-         const iM = (0, IM.f)(),
+         JU.f.bloxd.client.closeClientGameSession(), (0, iU.resetUtil)();
+         const zU = (0, JU.e)(),
```

#### 1840. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14125` → after: `L14309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14309) · [Before (L14125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14125)

```diff
-         return jM.isError() ? jM.asError().forward() : (iM.OW(!1), SM.gameRecorder.onGameSessionStarted(), lr.b.ok())
+         return QU.isError() ? QU.asError().forward() : (zU.nC(!1), yU.gameRecorder.onGameSessionStarted(), kX.c.ok())
```

#### 1841. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14128-L14129` → after: `L14312-L14313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14312-L14313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14312-L14313) · [Before (L14128-L14129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14128-L14129)

```diff
-         const SM = new un(this.Cm, MM, rM, new eQ(this.Cm), yn.e);
-         this.clientApi = SM, this.clientConnection = OM, OM.setupServerListeners(this.Cm, iM, SM)
+         const yU = new Lo(this.WN, UU, XU, new ZD(this.WN), ao.e);
+         this.clientApi = yU, this.clientConnection = cU, cU.setupServerListeners(this.WN, zU, yU)
```

#### 1842. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14136-L14139` → after: `L14320-L14323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14320-L14323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14320-L14323) · [Before (L14136-L14139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14136-L14139)

```diff
-           jM = (0, PM.Mb)(OM),
-           aM = (0, PM.Jb)(OM),
-           nM = (0, Cr.w)(SM),
-           QM = (0, Cr.P)(SM),
+           QU = (0, FU.Tb)(cU),
+           AU = (0, FU.Nb)(cU),
+           oU = (0, PX.s)(yU),
+           DU = (0, PX.G)(yU),
```

#### 1843. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14141` → after: `L14325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14325) · [Before (L14141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14141)

```diff
-             localPlayerId: this.Cm.eD
+             localPlayerId: this.WN.pM
```

#### 1844. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14149-L14150` → after: `L14333-L14334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14333-L14334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14333-L14334) · [Before (L14149-L14150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14149-L14150)

```diff
-         const mM = null !== (MM = null === (rM = LM) || void 0 === rM ? void 0 : rM(QM, nM, aM, zM)) && void 0 !== MM ? MM : {};
-         this.clientGame = mM, this.clientPlugins = (0, YQ.c)((0, fQ.createDefaultClientPlugins)(QM, nM, aM, zM), mM.plugins), null === (iM = mM.onCreate) || void 0 === iM || iM.call(mM, this.clientApi);
+         const NU = null !== (UU = null === (XU = YU) || void 0 === XU ? void 0 : XU(DU, oU, AU, EU)) && void 0 !== UU ? UU : {};
+         this.clientGame = NU, this.clientPlugins = (0, iD.e)((0, fD.createDefaultClientPlugins)(DU, oU, AU, EU), NU.plugins), null === (zU = NU.onCreate) || void 0 === zU || zU.call(NU, this.clientApi);
```

#### 1845. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14157` → after: `L14341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14341) · [Before (L14157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14157)

```diff
-         const iM = new Ln.e(MM);
+         const zU = new Do.c(UU);
```

#### 1846. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14165` → after: `L14349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14349) · [Before (L14165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14165)

```diff
-               reason: (0, OJ.e)(jM),
+               reason: (0, za.h)(QU),
```

#### 1847. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14171` → after: `L14355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14355) · [Before (L14171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14171)

```diff
-         return await iM.connectToServer(this.Cm, SM, rM).then((MM => {
+         return await zU.connectToServer(this.WN, yU, XU).then((UU => {
```

#### 1848. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14191` → after: `L14375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14375) · [Before (L14191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14191)

```diff
-         return !!(0, bQ.e)().websocketUrl || !!this.msgHandler
+         return !!(0, RD.b)().websocketUrl || !!this.msgHandler
```

#### 1849. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14207` → after: `L14391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14391) · [Before (L14207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14207)

```diff
-         dM.i.Tz("unwantedLeftGame", {
+         tU.k.UY("unwantedLeftGame", {
```

#### 1850. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14221` → after: `L14405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14405) · [Before (L14221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14221)

```diff
-         (0, om.e)(), this.gameRecorder.suspendCaptureForLeave(), console.log("Leaving game"), (0, ba.c)(), this.closeClientGameSession(), HL.endGame(), dM.i.Tz("leaveGame", {
+         (0, fN.h)(), this.gameRecorder.suspendCaptureForLeave(), console.log("Leaving game"), (0, PA.i)(), this.closeClientGameSession(), NY.endGame(), tU.k.UY("leaveGame", {
```

#### 1851. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14223` → after: `L14407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14407) · [Before (L14223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14223)

```diff
-         }), null === (MM = this.msgHandler) || void 0 === MM || MM.aE(), null === (rM = this.msgHandler) || void 0 === rM || rM.leave(), this.msgHandler = null, delete this.Cm.IMM, (0, oM.resetUtil)(), (0, mn.k)(this.Cm), (0, bQ.p)({
+         }), null === (UU = this.msgHandler) || void 0 === UU || UU.Wk(), null === (XU = this.msgHandler) || void 0 === XU || XU.leave(), this.msgHandler = null, delete this.WN.SXU, (0, iU.resetUtil)(), (0, Eo.h)(this.WN), (0, RD.o)({
```

#### 1852. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14225` → after: `L14409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14409) · [Before (L14225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14225)

```diff
-         }), this.Cm.OW(!0), yn.e.freeSoundsAfterGame(), (0, vQ.M)(), this.clientConnection = null, this.clientApi = null, this.leaveGameReloadsPage() && (0, Dm.reloadBloxd)(iM)
+         }), this.WN.nC(!0), ao.e.freeSoundsAfterGame(), (0, VD.M)(), this.clientConnection = null, this.clientApi = null, this.leaveGameReloadsPage() && (0, SN.reloadBloxd)(zU)
```

#### 1853. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14228` → after: `L14412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14412) · [Before (L14228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14228)

```diff
-         return JM.e.isUsingTemporaryTexturePack() || this.isReplayMode()
+         return aU.c.isUsingTemporaryTexturePack() || this.isReplayMode()
```

#### 1854. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14237` → after: `L14421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14421) · [Before (L14237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14237)

```diff
-         this.clientGame = null, this.clientPlugins = null, (0, fQ.closeClientGame)(rM, iM), (0, DL.n)(), null === (MM = this.clientApi) || void 0 === MM || MM.disposeGameOutput()
+         this.clientGame = null, this.clientPlugins = null, (0, fD.closeClientGame)(XU, zU), (0, SY.m)(), null === (UU = this.clientApi) || void 0 === UU || UU.disposeGameOutput()
```

#### 1855. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14244` → after: `L14428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14428) · [Before (L14244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14244)

```diff
-         null === (MM = this.clientConnection) || void 0 === MM || MM.dispose(), this.clientConnection = null, null === (rM = this.msgHandler) || void 0 === rM || rM.aE(), null === (iM = this.msgHandler) || void 0 === iM || iM.leave(), this.msgHandler = null, this.currentConnectio … [truncated]
+         null === (UU = this.clientConnection) || void 0 === UU || UU.dispose(), this.clientConnection = null, null === (XU = this.msgHandler) || void 0 === XU || XU.Wk(), null === (zU = this.msgHandler) || void 0 === zU || zU.leave(), this.msgHandler = null, this.currentConnectio … [truncated]
```

#### 1856. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14260` → after: `L14444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14444) · [Before (L14260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14260)

```diff
-             console.error(`Error in client game callback ${MM} with args list ${JSON.stringify(iM)}`, PM)
+             console.error(`Error in client game callback ${UU} with args list ${JSON.stringify(zU)}`, FU)
```

#### 1857. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14268` → after: `L14452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14452) · [Before (L14268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14268)

```diff
-               console.error(`Error in client plugin callback ${MM} with args list ${JSON.stringify(iM)}`, PM)
+               console.error(`Error in client plugin callback ${UU} with args list ${JSON.stringify(zU)}`, FU)
```

#### 1858. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14273` → after: `L14457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14457) · [Before (L14273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14273)

```diff
-         this.Cm.GJ = ga.b, this.Cm.CJ = Zm.CJ, console.log("Defined noa.logErrorMessage"), IM.j.Cm && console.log("client csv detection");
+         this.WN.Pa = LA.b, this.WN.Wa = uN.Wa, console.log("Defined noa.logErrorMessage"), JU.f.WN && console.log("client csv detection");
```

#### 1859. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14293` → after: `L14477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14477) · [Before (L14293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14293)

```diff
-             this.Cm.GJ(`Uncaught error in window event listener ${rM}, ${iM}, ${OM}, ${SM}, ${jM}`, jM)
+             this.WN.Pa(`Uncaught error in window event listener ${XU}, ${zU}, ${cU}, ${yU}, ${QU}`, QU)
```

#### 1860. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14296` → after: `L14480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14480) · [Before (L14296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14296)

```diff
-             Fa.b.reset(), window.removeEventListener("error", MM)
+             nA.d.reset(), window.removeEventListener("error", UU)
```

#### 1861. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14303` → after: `L14487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14487) · [Before (L14303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14303)

```diff
-         if (this.entities[MM]) throw new Error(`Entity with id ${MM} already exists`);
+         if (this.entities[UU]) throw new Error(`Entity with id ${UU} already exists`);
```

#### 1862. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14306-L14307` → after: `L14490-L14491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14490-L14491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14490-L14491) · [Before (L14306-L14307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14306-L14307)

```diff
-           zh: iM
-         }, (0, tQ.n)(MM), null === iM || void 0 === iM || iM.initClient(rM)
+           Ep: zU
+         }, (0, WD.m)(UU), null === zU || void 0 === zU || zU.initClient(XU)
```

#### 1863. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14311` → after: `L14495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14495) · [Before (L14311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14311)

```diff
-         null === (OM = this.entities[MM]) || void 0 === OM || null === (SM = OM.zh) || void 0 === SM || null === (jM = SM.onChangeClient) || void 0 === jM || jM.call(SM, rM, iM)
+         null === (cU = this.entities[UU]) || void 0 === cU || null === (yU = cU.Ep) || void 0 === yU || null === (QU = yU.onChangeClient) || void 0 === QU || QU.call(yU, XU, zU)
```

#### 1864. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14320-L14321` → after: `L14504-L14505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14504-L14505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14504-L14505) · [Before (L14320-L14321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14320-L14321)

```diff
-         ((0, YM.b)(this.Cm).disposeEntity(OM), OM !== this.Cm.eD) && (null === (SM = this.Cm.rY[this.Cm.eD]) || void 0 === SM || delete SM[MM], null === (jM = this.Cm.rY[this.Cm.IMM]) || void 0 === jM || delete jM[MM], (0, IM.b)().removeEntityName(MM));
-         null === (rM = this.entities[MM]) || void 0 === rM || null === (iM = rM.zh) || void 0 === iM || iM.disposeClient(), delete this.entities[MM]
+         ((0, MU.b)(this.WN).disposeEntity(cU), cU !== this.WN.pM) && (null === (yU = this.WN.YM[this.WN.pM]) || void 0 === yU || delete yU[UU], null === (QU = this.WN.YM[this.WN.SXU]) || void 0 === QU || delete QU[UU], (0, JU.b)().removeEntityName(UU));
+         null === (XU = this.entities[UU]) || void 0 === XU || null === (zU = XU.Ep) || void 0 === zU || zU.disposeClient(), delete this.entities[UU]
```

#### 1865. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14324-L14325` → after: `L14508-L14509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14508-L14509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14508-L14509) · [Before (L14324-L14325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14324-L14325)

```diff
-         const rM = (0, fM.e)(MM);
-         return String(rM) === String(this.Cm.eD) ? this.Cm.eD : rM
+         const XU = (0, HU.c)(UU);
+         return String(XU) === String(this.WN.pM) ? this.WN.pM : XU
```

#### 1866. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14331` → after: `L14515-L14519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14515-L14519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14515-L14519) · [Before (L14331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14331)

```diff
-         return null !== (rM = null === (iM = this.entities[MM]) || void 0 === iM || null === (OM = iM.colyseusEntity) || void 0 === OM ? void 0 : OM.type) && void 0 !== rM ? rM : null
+         return null !== (XU = null === (zU = this.entities[UU]) || void 0 === zU || null === (cU = zU.colyseusEntity) || void 0 === cU ? void 0 : cU.type) && void 0 !== XU ? XU : null
+       }
+       getRoomSessionId() {
+         var UU, XU, zU;
+         return null !== (UU = null === (XU = this.msgHandler) || void 0 === XU || null === (zU = XU.gcU) || void 0 === zU ? void 0 : zU.sessionId) && void 0 !== UU ? UU : null
```

#### 1867. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14335-L14336` → after: `L14523-L14524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14523-L14524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14523-L14524) · [Before (L14335-L14336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14335-L14336)

```diff
-         const aM = MM === this.Cm.eD ? this.Cm.IMM : MM;
-         return null !== (rM = null === (iM = this.msgHandler) || void 0 === iM || null === (OM = iM.RiM) || void 0 === OM || null === (SM = OM.state) || void 0 === SM || null === (jM = SM.entities) || void 0 === jM ? void 0 : jM.get(aM)) && void 0 !== rM ? rM : null
+         const AU = UU === this.WN.pM ? this.WN.SXU : UU;
+         return null !== (XU = null === (zU = this.msgHandler) || void 0 === zU || null === (cU = zU.gcU) || void 0 === cU || null === (yU = cU.state) || void 0 === yU || null === (QU = yU.entities) || void 0 === QU ? void 0 : QU.get(AU)) && void 0 !== XU ? XU : null
```

#### 1868. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14339` → after: `L14527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14527) · [Before (L14339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14339)

```diff
-         const OM = null === (MM = this.msgHandler) || void 0 === MM || null === (rM = MM.RiM) || void 0 === rM || null === (iM = rM.state) || void 0 === iM ? void 0 : iM.items;
+         const cU = null === (UU = this.msgHandler) || void 0 === UU || null === (XU = UU.gcU) || void 0 === XU || null === (zU = XU.state) || void 0 === zU ? void 0 : zU.items;
```

#### 1869. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14345` → after: `L14533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14533) · [Before (L14345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14345)

```diff
-         return null !== (rM = null === (iM = this.msgHandler) || void 0 === iM || null === (OM = iM.RiM) || void 0 === OM || null === (SM = OM.state) || void 0 === SM || null === (jM = SM.items) || void 0 === jM ? void 0 : jM.get(MM)) && void 0 !== rM ? rM : null
+         return null !== (XU = null === (zU = this.msgHandler) || void 0 === zU || null === (cU = zU.gcU) || void 0 === cU || null === (yU = cU.state) || void 0 === yU || null === (QU = yU.items) || void 0 === QU ? void 0 : QU.get(UU)) && void 0 !== XU ? XU : null
```

#### 1870. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14349` → after: `L14537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14537) · [Before (L14349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14349)

```diff
-         return null !== (rM = null === (iM = this.getColyseusEntity(MM)) || void 0 === iM ? void 0 : iM.scale) && void 0 !== rM ? rM : 1
+         return null !== (XU = null === (zU = this.getColyseusEntity(UU)) || void 0 === zU ? void 0 : zU.scale) && void 0 !== XU ? XU : 1
```

#### 1871. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14353` → after: `L14541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14541) · [Before (L14353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14353)

```diff
-         return null !== (MM = this.currentConnectionInfo) && void 0 !== MM ? MM : null
+         return null !== (UU = this.currentConnectionInfo) && void 0 !== UU ? UU : null
```

#### 1872. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14356-L14357` → after: `L14544-L14545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14544-L14545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14544-L14545) · [Before (L14356-L14357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14356-L14357)

```diff
-         (0, YM.b)(this.Cm).setEffect(this.toReplicatedStateEId(MM), rM, iM), dM.i.Tz("EffectUpdate", {
-           Pi: MM,
+         (0, MU.b)(this.WN).setEffect(this.toReplicatedStateEId(UU), XU, zU), tU.k.UY("EffectUpdate", {
+           iX: UU,
```

#### 1873. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14366` → after: `L14554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14554) · [Before (L14366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14366)

```diff
-         return (0, YM.b)(this.Cm).getEffects(this.toReplicatedStateEId(MM))
+         return (0, MU.b)(this.WN).getEffects(this.toReplicatedStateEId(UU))
```

#### 1874. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14370` → after: `L14558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14558) · [Before (L14370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14370)

```diff
-         return null !== (iM = null === (OM = this.getEffects(MM)[rM]) || void 0 === OM ? void 0 : OM.level) && void 0 !== iM ? iM : 0
+         return null !== (zU = null === (cU = this.getEffects(UU)[XU]) || void 0 === cU ? void 0 : cU.level) && void 0 !== zU ? zU : 0
```

#### 1875. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14373-L14375` → after: `L14561-L14563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14561-L14563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14561-L14563) · [Before (L14373-L14375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14373-L14375)

```diff
-         const iM = (0, YM.b)(this.Cm).removeEffect(this.toReplicatedStateEId(MM), rM);
-         dM.i.Tz("RemoveEffect", {
-           Pi: MM,
+         const zU = (0, MU.b)(this.WN).removeEffect(this.toReplicatedStateEId(UU), XU);
+         tU.k.UY("RemoveEffect", {
+           iX: UU,
```

#### 1876. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14384` → after: `L14572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14572) · [Before (L14384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14384)

```diff
-       const iM = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.variants) && void 0 !== rM ? rM : [],
+       const zU = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.variants) && void 0 !== XU ? XU : [],
```

#### 1877. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14396` → after: `L14584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14584) · [Before (L14396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14396)

```diff
-           (0, Ua.g)(MM, rM)
+           (0, GA.e)(UU, XU)
```

#### 1878. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14404` → after: `L14592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14592) · [Before (L14404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14404)

```diff
-     aJ.hasPlayedFirstGame = !1, aJ.initialAssetLoadedProm = void 0, aJ.initialSetupProm = null, (0, br.k)(yr.l)
+     Qa.hasPlayedFirstGame = !1, Qa.initialAssetLoadedProm = void 0, Qa.initialSetupProm = null, (0, dX.j)(gX.o)
```

#### 1879. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14406` → after: `L14594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14594) · [Before (L14406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14406)

```diff
-   40209: (MM, rM, iM) => {
+   39983: (UU, XU, zU) => {
```

#### 1880. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14411` → after: `L14599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14599) · [Before (L14411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14411)

```diff
-     var OM = iM(332);
+     var cU = zU(344);
```

#### 1881. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14430` → after: `L14618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14618) · [Before (L14430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14430)

```diff
-               color: OM.L.redUiText
+               color: cU.H.redUiText
```

#### 1882. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14436-L14437` → after: `L14624-L14625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14624-L14625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14624-L14625) · [Before (L14436-L14437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14436-L14437)

```diff
-     var jM = iM(4577),
-       aM = iM(1242);
+     var QU = zU(4608),
+       AU = zU(1258);
```

#### 1883. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14447` → after: `L14635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14635) · [Before (L14447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14447)

```diff
-         vL: 1,
+         xY: 1,
```

#### 1884. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14462` → after: `L14650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14650) · [Before (L14462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14462)

```diff
-         blendMode: jM.d.Standard
+         blendMode: QU.f.Standard
```

#### 1885. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14467` → after: `L14655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14655) · [Before (L14467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14467)

```diff
-         vL: 96,
+         xY: 96,
```

#### 1886. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14488` → after: `L14676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14676) · [Before (L14488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14488)

```diff
-         blendMode: jM.d.Standard
+         blendMode: QU.f.Standard
```

#### 1887. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14549` → after: `L14737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14737) · [Before (L14549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14549)

```diff
-           if (MM !== aM.y) return;
+           if (UU !== AU.B) return;
```

#### 1888. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14571-L14572` → after: `L14759-L14760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14759-L14760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14759-L14760) · [Before (L14571-L14572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14571-L14572)

```diff
-     var lM = iM(5259),
-       EM = iM(5248);
+     var kU = zU(5374),
+       GU = zU(5364);
```

#### 1889. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14593-L14594` → after: `L14781-L14782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14781-L14782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14781-L14782) · [Before (L14593-L14594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14593-L14594)

```diff
-           } = (0, EM.i)(jM);
-           PM && (OM = (0, lM.g)(PM, aM.blips))
+           } = (0, GU.g)(QU);
+           FU && (cU = (0, kU.e)(FU, AU.blips))
```

#### 1890. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14599` → after: `L14787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14787) · [Before (L14599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14599)

```diff
-     var GM = iM(40215);
+     var ZU = zU(39988);
```

#### 1891. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14613` → after: `L14801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14801) · [Before (L14613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14613)

```diff
-       const PM = ((null !== (OM = MM.getMetaInfo(iM).rot) && void 0 !== OM ? OM : 1) - 1) * Math.PI / 2,
+       const FU = ((null !== (cU = UU.getMetaInfo(zU).rot) && void 0 !== cU ? cU : 1) - 1) * Math.PI / 2,
```

#### 1892. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14653` → after: `L14841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14841) · [Before (L14653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14653)

```diff
-           blendMode: jM.d.Standard,
+           blendMode: QU.f.Standard,
```

#### 1893. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14670` → after: `L14858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14858) · [Before (L14670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14670)

```diff
-           blendMode: jM.d.Add,
+           blendMode: QU.f.Add,
```

#### 1894. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14683` → after: `L14871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14871) · [Before (L14683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14683)

```diff
-         let SM = this.smokes.find((MM => MM.pos[0] === rM[0] && MM.pos[1] === rM[1] && MM.pos[2] === rM[2] && MM.jP === iM));
+         let yU = this.smokes.find((UU => UU.pos[0] === XU[0] && UU.pos[1] === XU[1] && UU.pos[2] === XU[2] && UU.yF === zU));
```

#### 1895. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14686` → after: `L14874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14874) · [Before (L14686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14686)

```diff
-             jP: iM,
+             yF: zU,
```

#### 1896. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14692` → after: `L14880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14880) · [Before (L14692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14692)

```diff
-           const rM = this.smokes.reduce(((MM, rM) => rM.endMs < MM.endMs ? rM : MM));
+           const XU = this.smokes.reduce(((UU, XU) => XU.endMs < UU.endMs ? XU : UU));
```

#### 1897. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14704` → after: `L14892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14892) · [Before (L14704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14704)

```diff
-           const [OM, SM, jM] = rM.pos, aM = iM < rM.endMs && MM.getBlockId(OM, SM, jM) === rM.jP;
+           const [cU, yU, QU] = XU.pos, AU = zU < XU.endMs && UU.getBlockId(cU, yU, QU) === XU.yF;
```

#### 1898. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14735` → after: `L14923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14923) · [Before (L14735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14735)

```diff
-         for (const iM of null !== (rM = this.puffers) && void 0 !== rM ? rM : []) {
+         for (const zU of null !== (XU = this.puffers) && void 0 !== XU ? XU : []) {
```

#### 1899. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14748` → after: `L14936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14936) · [Before (L14748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14748)

```diff
-           return new GM.i(rM, Math.ceil(4 * OM), uM)
+           return new ZU.f(XU, Math.ceil(4 * cU), CU)
```

#### 1900. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14765` → after: `L14953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14953) · [Before (L14765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14765)

```diff
-           iM === aM.A && rM.start(MM, OM)
+           zU === AU.C && XU.start(UU, cU)
```

#### 1901. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14775-L14778` → after: `L14963-L14966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14963-L14966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14963-L14966) · [Before (L14775-L14778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14775-L14778)

```diff
-     var DM = iM(181),
-       kM = iM(40186),
-       ZM = iM(40219),
-       oM = iM(40222);
+     var rU = zU(212),
+       uU = zU(39954),
+       fU = zU(39994),
+       iU = zU(39999);
```

#### 1902. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14797-L14798` → after: `L14985-L14986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14985-L14986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14985-L14986) · [Before (L14797-L14798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14797-L14798)

```diff
-         this.model.setPose(OM.pos, OM.yaw + Math.PI), this.model.setClip(null !== (rM = OM.clip) && void 0 !== rM ? rM : null);
-         const SM = OM.seated ? iM : null;
+         this.model.setPose(cU.pos, cU.yaw + Math.PI), this.model.setClip(null !== (XU = cU.clip) && void 0 !== XU ? XU : null);
+         const yU = cU.seated ? zU : null;
```

#### 1903. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14800` → after: `L14988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R14988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L14988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L14988) · [Before (L14800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14800)

```diff
-           QS: this.wearer,
+           FX: this.wearer,
```

#### 1904. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14827` → after: `L15015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15015) · [Before (L14827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14827)

```diff
-         const rM = (0, kM.h)(this.name);
+         const XU = (0, uU.g)(this.name);
```

#### 1905. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14834` → after: `L15022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15022) · [Before (L14834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14834)

```diff
-           if ((0, oM.j)(iM, MM.feet, rM.offset, Math.sin(MM.heading), Math.cos(MM.heading)), this.particles) this.particles.moveTo(iM, this.half);
+           if ((0, iU.g)(zU, UU.feet, XU.offset, Math.sin(UU.heading), Math.cos(UU.heading)), this.particles) this.particles.moveTo(zU, this.half);
```

#### 1906. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14836` → after: `L15024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15024) · [Before (L14836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14836)

```diff
-             const MM = (0, ZM.b)(rM);
+             const UU = (0, fU.c)(XU);
```

#### 1907. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14907` → after: `L15095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15095) · [Before (L14907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14907)

```diff
-                 nM = void 0 !== (null === jM || void 0 === jM ? void 0 : jM.aura) && (0, kM.h)(jM.aura) ? jM.aura : null;
+                 oU = void 0 !== (null === QU || void 0 === QU ? void 0 : QU.aura) && (0, uU.g)(QU.aura) ? QU.aura : null;
```

#### 1908. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14915-L14916` → after: `L15103-L15104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15103-L15104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15103-L15104) · [Before (L14915-L14916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14915-L14916)

```diff
-                 petDist: null === PM ? 1 / 0 : QM - (null !== zM && void 0 !== zM && zM.pet ? xM : 0),
-                 auraDist: null === nM ? 1 / 0 : QM - (null !== zM && void 0 !== zM && zM.aura ? xM : 0)
+                 petDist: null === FU ? 1 / 0 : DU - (null !== EU && void 0 !== EU && EU.pet ? sU : 0),
+                 auraDist: null === oU ? 1 / 0 : DU - (null !== EU && void 0 !== EU && EU.aura ? sU : 0)
```

#### 1909. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14929` → after: `L15117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15117) · [Before (L14929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14929)

```diff
-               const iM = null !== (QM = rM.get(SM)) && void 0 !== QM ? QM : {
+               const zU = null !== (DU = XU.get(yU)) && void 0 !== DU ? DU : {
```

#### 1910. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14934-L14935` → after: `L15122-L15123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15122-L15123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15122-L15123) · [Before (L14934-L14935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14934-L14935)

```diff
-                 OM = jM.has(SM) ? aM : null,
-                 dM = PM.has(SM) ? JM : null;
+                 cU = QU.has(yU) ? AU : null,
+                 tU = FU.has(yU) ? aU : null;
```

#### 1911. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14949` → after: `L15137-L15271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15137-L15271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15137-L15271) · [Before (L14949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14949)

```diff
-     var qM = iM(9337);
+     var KU = zU(9291);
+     const bU = "skyblockLoot",
+       TU = "autoPickupClick";
+     var hU = zU(1709);
+ 
+     function UX(UU, XU) {
+       return [{
+         timeFraction: 0,
+         minColor: [255 * UU[0], 255 * UU[1], 255 * UU[2], 1],
+         maxColor: [255 * XU[0], 255 * XU[1], 255 * XU[2], 1]
+       }, {
+         timeFraction: 1,
+         minColor: [0, 0, 0, 1]
+       }]
+     }
+     const XX = [0, 0, 0],
+ ... (119 more added lines; see GitHub link above)
```

#### 1912. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14958` → after: `L15280-L15281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15280-L15281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15280-L15281) · [Before (L14958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14958)

```diff
-         localBlockBroken: (0, qM.e)()
+         localBlockBroken: (0, KU.b)(),
+         magnetLoot: DX()
```

#### 1913. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14963` → after: `L15286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15286) · [Before (L14963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14963)

```diff
-       for (const SM of [MM, ...null !== rM && void 0 !== rM ? rM : []]) try {
+       for (const yU of [UU, ...null !== XU && void 0 !== XU ? XU : []]) try {
```

#### 1914. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14971` → after: `L15294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15294) · [Before (L14971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14971)

```diff
-   40357: (MM, rM, iM) => {
+   40137: (UU, XU, zU) => {
```

#### 1915. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14975` → after: `L15298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15298) · [Before (L14975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14975)

```diff
-     var OM = iM(39012);
+     var cU = zU(38782);
```

#### 1916. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L14995` → after: `L15318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15318) · [Before (L14995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L14995)

```diff
-   40364: (MM, rM, iM) => {
+   40143: (UU, XU, zU) => {
```

#### 1917. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15011` → after: `L15334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15334) · [Before (L15011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15011)

```diff
-   40373: (MM, rM, iM) => {
+   40147: (UU, XU, zU) => {
```

#### 1918. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15018` → after: `L15341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15341) · [Before (L15018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15018)

```diff
-     var aM = iM(39505);
+     var AU = zU(39285);
```

#### 1919. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15021` → after: `L15344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15344) · [Before (L15021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15021)

```diff
-         this.api = MM, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new aM.e(MM, {
+         this.api = UU, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new AU.d(UU, {
```

#### 1920. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15027` → after: `L15350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15350) · [Before (L15027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15027)

```diff
-         if (MM.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${MM.id} with < 2 waypoints`);
+         if (UU.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${UU.id} with < 2 waypoints`);
```

#### 1921. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15029` → after: `L15352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15352) · [Before (L15029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15029)

```diff
-         if (!rM) return void(this.unshown.has(MM.itemName) || (this.unshown.add(MM.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${MM.itemName}"`)));
+         if (!XU) return void(this.unshown.has(UU.itemName) || (this.unshown.add(UU.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${UU.itemName}"`)));
```

#### 1922. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15099` → after: `L15422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15422) · [Before (L15099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15099)

```diff
-         null === (MM = this.pipeVisualizer) || void 0 === MM || MM.kE()
+         null === (UU = this.pipeVisualizer) || void 0 === UU || UU.aG()
```

#### 1923. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15104` → after: `L15427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15427) · [Before (L15104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15104)

```diff
-         const nM = null === (PM = this.api.TrM(MM)) || void 0 === PM ? void 0 : PM.name;
+         const oU = null === (FU = this.api.HzU(UU)) || void 0 === FU ? void 0 : FU.name;
```

#### 1924. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15108` → after: `L15431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15431) · [Before (L15108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15108)

```diff
-     var LM = iM(40376);
+     var YU = zU(40151);
```

#### 1925. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15125-L15126` → after: `L15448-L15449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15448-L15449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15448-L15449) · [Before (L15125-L15126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15125-L15126)

```diff
-         bL: () => {
-           OM.kE()
+         LY: () => {
+           cU.aG()
```

#### 1926. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15133` → after: `L15456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15456) · [Before (L15133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15133)

```diff
-   40376: (MM, rM, iM) => {
+   40151: (UU, XU, zU) => {
```

#### 1927. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15138` → after: `L15461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15461) · [Before (L15138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15138)

```diff
-     var SM = iM(1744);
+     var yU = zU(1709);
```

#### 1928. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15144` → after: `L15467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15467) · [Before (L15144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15144)

```diff
-           rM !== OM || MM || (MM = !0, (0, SM.c)({
+           XU !== cU || UU || (UU = !0, (0, yU.f)({
```

#### 1929. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15151` → after: `L15474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15474) · [Before (L15151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15151)

```diff
-   40383: (MM, rM, iM) => {
+   40155: (UU, XU, zU) => {
```

#### 1930. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L15167` → after: `L15490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R15490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L15490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L15490) · [Before (L15167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L15167)

```diff
-   40388: (MM, rM, iM) => {
+   40158: (UU, XU, zU) => {
```
