# Changed — Bundle Modifications Report (Part 011 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `11 / 99` (**388** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 010](part-010.md) · [Part 012 →](part-012.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/107.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/107.js` (3969 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0)

#### 2351. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21301` → after: `L21624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21624) · [Before (L21301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21301)

```diff
-           QM = new PO(MM, SM, nM, rM), zM = new zi(MM, SM), LM = new DM(MM, zM), mM = new wi(MM, SM, QM.nextCell), HM = new QO(MM), hM.push((0, aM.C)((0, jM.createElement)(Ci, {
+           DU = new Qc(UU, yU, oU, XU), EU = new Ez(UU, yU), YU = new rU(UU, EU), NU = new Wz(UU, yU, DU.nextCell), IU = new Fc(UU), pU.push((0, AU.u)((0, QU.createElement)(Zz, {
```

#### 2352. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21322-L21323` → after: `L21645-L21646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21645-L21646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21645-L21646) · [Before (L21322-L21323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21322-L21323)

```diff
-         bL: () => {
-           HM.bL(), QM.bL(), zM.bL(), LM.bL()
+         LY: () => {
+           IU.LY(), DU.LY(), EU.LY(), YU.LY()
```

#### 2353. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21344-L21345` → after: `L21667-L21668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21667-L21668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21667-L21668) · [Before (L21344-L21345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21344-L21345)

```diff
-             QM.GL(MM), zM.GL(MM)
-           } else "plotsJournal" === MM ? LM.GL(rM) : "plotsJournalOpen" === MM ? LM.openFromServer(rM) : "plotsPreviewEnd" === MM ? zM.endFromServer() : "plotsGuide" === MM ? PM.receiveGuide(rM) : "plotsGuideDone" === MM && PM.receiveGuideDone()
+             DU.PY(UU), EU.PY(UU)
+           } else "plotsJournal" === UU ? YU.PY(XU) : "plotsJournalOpen" === UU ? YU.openFromServer(XU) : "plotsPreviewEnd" === UU ? EU.endFromServer() : "plotsGuide" === UU ? FU.receiveGuide(XU) : "plotsGuideDone" === UU && FU.receiveGuideDone()
```

#### 2354. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21350` → after: `L21673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21673) · [Before (L21350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21350)

```diff
-   40655: (MM, rM, iM) => {
+   40416: (UU, XU, zU) => {
```

#### 2355. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21366` → after: `L21689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21689) · [Before (L21366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21366)

```diff
-   40659: (MM, rM, iM) => {
+   40422: (UU, XU, zU) => {
```

#### 2356. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21370` → after: `L21693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21693) · [Before (L21370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21370)

```diff
-     var OM = iM(181);
+     var cU = zU(212);
```

#### 2357. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21383-L21385` → after: `L21706-L21708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21706-L21708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21706-L21708) · [Before (L21383-L21385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21383-L21385)

```diff
-     var aM = iM(44),
-       PM = iM(37542),
-       nM = iM(1116),
+     var AU = zU(61),
+       FU = zU(37325),
+       oU = zU(1106),
```

#### 2358. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21387-L21395` → after: `L21710-L21718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21710) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21710-L21718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21710-L21718) · [Before (L21387-L21395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21387-L21395)

```diff
-       zM = iM(19),
-       LM = iM(1464),
-       mM = iM(30),
-       HM = iM(1188),
-       hM = iM(37454),
-       JM = iM(1516),
-       dM = iM(22),
-       yM = iM(39532),
-       lM = iM(39526);
+       EU = zU(27),
+       YU = zU(1444),
+       NU = zU(42),
+       IU = zU(1193),
+       pU = zU(37222),
+       aU = zU(1492),
+       tU = zU(31),
+       gU = zU(39315),
+       kU = zU(39311);
```

#### 2359. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21405` → after: `L21728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21728) · [Before (L21405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21405)

```diff
-       return (0, lM.c)(rM, iM, {
+       return (0, kU.e)(XU, zU, {
```

#### 2360. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21421-L21422` → after: `L21744-L21745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21744-L21745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21744-L21745) · [Before (L21421-L21422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21421-L21422)

```diff
-         const aM = Math.max(0, rM.awaySpeed) * ((null !== (OM = this.averageRoundTrip) && void 0 !== OM ? OM : 300) / 1e3);
-         return rM.distance + aM > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = MM, this.ownRing = !0, this.faded = !1, 500 + (null !== (SM = this.averageRoundTrip) && void 0 !== SM ? SM : 0))
+         const AU = Math.max(0, XU.awaySpeed) * ((null !== (cU = this.averageRoundTrip) && void 0 !== cU ? cU : 300) / 1e3);
+         return XU.distance + AU > 3.5 ? 0 : (this.state = "predicted", this.predictedAt = UU, this.ownRing = !0, this.faded = !1, 500 + (null !== (yU = this.averageRoundTrip) && void 0 !== yU ? yU : 0))
```

#### 2361. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21445` → after: `L21768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21768) · [Before (L21445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21445)

```diff
-         return !("predicted" !== this.state || MM - this.predictedAt < 1200 + (null !== (rM = this.averageRoundTrip) && void 0 !== rM ? rM : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(MM, MM - this.predictedAt), !this.faded)
+         return !("predicted" !== this.state || UU - this.predictedAt < 1200 + (null !== (XU = this.averageRoundTrip) && void 0 !== XU ? XU : 0)) && (this.state = "idle", this.timedOutPressAt = this.predictedAt, this.learnRoundTrip(UU, UU - this.predictedAt), !this.faded)
```

#### 2362. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21457` → after: `L21780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21780) · [Before (L21457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21457)

```diff
-         }), null !== (MM = this.averageRoundTrip) && void 0 !== MM ? MM : 0);
+         }), null !== (UU = this.averageRoundTrip) && void 0 !== UU ? UU : 0);
```

#### 2363. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21468` → after: `L21791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21791) · [Before (L21468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21468)

```diff
-         this.averageRoundTrip = null === this.averageRoundTrip ? iM : this.averageRoundTrip + .3 * (iM - this.averageRoundTrip), this.recentRoundTrips.push({
+         this.averageRoundTrip = null === this.averageRoundTrip ? zU : this.averageRoundTrip + .3 * (zU - this.averageRoundTrip), this.recentRoundTrips.push({
```

#### 2364. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21498` → after: `L21821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21821) · [Before (L21498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21498)

```diff
-           this.stopRing(), this.ring = MM, this.ringFill = null !== (rM = null === MM || void 0 === MM ? void 0 : MM.querySelector(".SecretSantaRingFill")) && void 0 !== rM ? rM : null;
+           this.stopRing(), this.ring = UU, this.ringFill = null !== (XU = null === UU || void 0 === UU ? void 0 : UU.querySelector(".SecretSantaRingFill")) && void 0 !== XU ? XU : null;
```

#### 2365. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21510` → after: `L21833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21833) · [Before (L21510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21510)

```diff
-         this.Tz({
+         this.UY({
```

#### 2366. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21522` → after: `L21845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21845) · [Before (L21522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21522)

```diff
-         this.Tz({
+         this.UY({
```

#### 2367. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21534` → after: `L21857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21857) · [Before (L21534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21534)

```diff
-         this.Tz({
+         this.UY({
```

#### 2368. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21552` → after: `L21875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21875) · [Before (L21552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21552)

```diff
-         const iM = this.wrap.GL(performance.now(), MM, rM);
+         const zU = this.wrap.PY(performance.now(), UU, XU);
```

#### 2369. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21568` → after: `L21891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21891) · [Before (L21568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21568)

```diff
-         })) && void 0 !== rM ? rM : null
+         })) && void 0 !== XU ? XU : null
```

#### 2370. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21579-L21581` → after: `L21902-L21904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21902-L21904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21902-L21904) · [Before (L21579-L21581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21579-L21581)

```diff
-         }(MM) / Math.PI), LM = `${nM.toFixed(1)}% ${QM.toFixed(1)}% ${zM}`;
-         LM !== this.drawnArrow && (this.drawnArrow = LM, this.arrow.style.left = `${nM.toFixed(1)}%`, this.arrow.style.top = `${QM.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${zM}deg)`);
-         const mM = "hunting" === (null === OM || void 0 === OM ? void 0 : OM.santaHintState) ? OM : null,
+         }(UU) / Math.PI), YU = `${oU.toFixed(1)}% ${DU.toFixed(1)}% ${EU}`;
+         YU !== this.drawnArrow && (this.drawnArrow = YU, this.arrow.style.left = `${oU.toFixed(1)}%`, this.arrow.style.top = `${DU.toFixed(1)}%`, this.arrow.style.transform = `translate(-50%, -50%) rotate(${EU}deg)`);
+         const NU = "hunting" === (null === cU || void 0 === cU ? void 0 : cU.santaHintState) ? cU : null,
```

#### 2371. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21603` → after: `L21926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21926) · [Before (L21603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21603)

```diff
-         this.view = MM, document.body.classList.toggle(bM, MM.shown), MM.shown && (this.clearFinishEnd(), document.body.classList.add(wM)), dM.i.Tz(eM, MM, !0)
+         this.view = UU, document.body.classList.toggle(WU, UU.shown), UU.shown && (this.clearFinishEnd(), document.body.classList.add(dU)), tU.k.UY(PU, UU, !0)
```

#### 2372. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21607` → after: `L21930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R21930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L21930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L21930) · [Before (L21607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21607)

```diff
-           this.endTimer = null, this.wrap.stop(), this.Tz({
+           this.endTimer = null, this.wrap.stop(), this.UY({
```

#### 2373. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21682` → after: `L22005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22005) · [Before (L21682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21682)

```diff
-     var pM = iM(1303);
+     var qU = zU(1305);
```

#### 2374. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21690` → after: `L22013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22013) · [Before (L21690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21690)

```diff
-         } = (0, zM.m)(["isTouchScreen"]), OM = (0, LM.y)(), {
+         } = (0, EU.q)(["isTouchScreen"]), cU = (0, YU.F)(), {
```

#### 2375. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21692` → after: `L22015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22015) · [Before (L21692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21692)

```diff
-         } = (0, HM.A)(), jM = (0, JM.e)(eM, rM.getView()).shown, PM = (0, hM.i)(), [nM] = (0, aM.useState)((() => {
+         } = (0, IU.I)(), QU = (0, aU.j)(PU, XU.getView()).shown, FU = (0, pU.i)(), [oU] = (0, AU.useState)((() => {
```

#### 2376. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21694` → after: `L22017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22017) · [Before (L21694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21694)

```diff
-           return null !== (MM = mM.g.getItem(WM)) && void 0 !== MM ? MM : 0
+           return null !== (UU = NU.k.getItem(OU)) && void 0 !== UU ? UU : 0
```

#### 2377. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21705-L21706` → after: `L22028-L22029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22028-L22029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22028-L22029) · [Before (L21705-L21706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21705-L21706)

```diff
-           !GM || PM || UM.current || (UM.current = !0, mM.g.setItem(WM, nM + 1))
-         }), [GM, PM, nM]), (0, hM.k)(GM ? "secretSanta" : null, PM, (() => {
+           !ZU || FU || BU.current || (BU.current = !0, NU.k.setItem(OU, oU + 1))
+         }), [ZU, FU, oU]), (0, pU.m)(ZU ? "secretSanta" : null, FU, (() => {
```

#### 2378. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21712` → after: `L22035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22035) · [Before (L21712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21712)

```diff
-           children: [(0, pM.jsx)(hM.f, {}), (0, pM.jsx)(hM.b, {
+           children: [(0, qU.jsx)(pU.h, {}), (0, qU.jsx)(pU.c, {
```

#### 2379. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21715` → after: `L22038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22038) · [Before (L21715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21715)

```diff
-           }), (0, pM.jsx)(hM.b, {
+           }), (0, qU.jsx)(pU.c, {
```

#### 2380. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21718` → after: `L22041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22041) · [Before (L21718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21718)

```diff
-           }), OM && (0, pM.jsx)(hM.b, {
+           }), cU && (0, qU.jsx)(pU.c, {
```

#### 2381. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21724-L21727` → after: `L22047-L22050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22047-L22050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22047-L22050) · [Before (L21724-L21727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21724-L21727)

```diff
-     var DM = iM(37538),
-       kM = iM(3815),
-       ZM = iM(37629),
-       oM = iM(40515);
+     var rU = zU(37318),
+       uU = zU(3796),
+       fU = zU(37418),
+       iU = zU(40278);
```

#### 2382. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21766` → after: `L22089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22089) · [Before (L21766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21766)

```diff
-       } = (0, HM.A)(), OM = (0, oM.j)(rM);
+       } = (0, IU.I)(), cU = (0, iU.i)(XU);
```

#### 2383. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21783` → after: `L22106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22106) · [Before (L21783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21783)

```diff
-     var AM = iM(39571);
+     var VU = zU(39367);
```

#### 2384. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21794` → after: `L22117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22117) · [Before (L21794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21794)

```diff
-       } = (0, HM.A)(), zM = null !== (rM = null === aM || void 0 === aM ? void 0 : aM.santaHintState) && void 0 !== rM ? rM : "none", LM = "hunting" === zM && aM ? aM.santaHintDistrict : -1, mM = null !== (iM = null === jM || void 0 === jM ? void 0 : jM.santaMarketDistricts) && v … [truncated]
+       } = (0, IU.I)(), EU = null !== (XU = null === AU || void 0 === AU ? void 0 : AU.santaHintState) && void 0 !== XU ? XU : "none", YU = "hunting" === EU && AU ? AU.santaHintDistrict : -1, NU = null !== (zU = null === QU || void 0 === QU ? void 0 : QU.santaMarketDistricts) && v … [truncated]
```

#### 2385. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21797` → after: `L22120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22120) · [Before (L21797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21797)

```diff
-         className: QM()("SecretSantaMinimap", `State-${zM}`),
+         className: DU()("SecretSantaMinimap", `State-${EU}`),
```

#### 2386. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21801` → after: `L22124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22124) · [Before (L21801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21801)

```diff
-             className: QM()("SecretSantaDistrict", `District-${MM}`, {
+             className: DU()("SecretSantaDistrict", `District-${UU}`, {
```

#### 2387. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21809` → after: `L22132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22132) · [Before (L21809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21809)

```diff
-               children: nM(`secretSantaHud:district_${MM}`)
+               children: oU(`secretSantaHud:district_${UU}`)
```

#### 2388. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21883-L21884` → after: `L22206-L22207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22206-L22207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22206-L22207) · [Before (L21883-L21884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21883-L21884)

```diff
-       } = iM, nM = (0, aM.useMemo)((() => (0, AM.f)({
-         ...(0, AM.d)(`${PM}:${OM}:${SM}`),
+       } = zU, oU = (0, AU.useMemo)((() => (0, VU.i)({
+         ...(0, VU.e)(`${FU}:${cU}:${yU}`),
```

#### 2389. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21893-L21896` → after: `L22216-L22219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22216-L22219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22216-L22219) · [Before (L21893-L21896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21893-L21896)

```diff
-           left: `${QM}%`,
-           top: `${zM}%`,
-           width: `${LM}%`,
-           height: `${LM}%`
+           left: `${DU}%`,
+           top: `${EU}%`,
+           width: `${YU}%`,
+           height: `${YU}%`
```

#### 2390. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21917` → after: `L22240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22240) · [Before (L21917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21917)

```diff
-       const iM = (0, JM.e)(eM, rM.getView());
+       const zU = (0, aU.j)(PU, XU.getView());
```

#### 2391. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21935` → after: `L22258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22258) · [Before (L21935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21935)

```diff
-           }), (0, pM.jsx)(DM.i, {
+           }), (0, qU.jsx)(rU.e, {
```

#### 2392. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21970-L21971` → after: `L22293-L22294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22293-L22294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22293-L22294) · [Before (L21970-L21971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21970-L21971)

```diff
-         const OM = (0, kM.i)(rM.left, rM.right, iM);
-         KM(MM, "--ss-map-top", iM + 6), KM(MM, "--ss-map-bottom", null === OM ? null : (0, kM.e)(MM) - OM + 6)
+         const cU = (0, uU.j)(XU.left, XU.right, zU);
+         jU(UU, "--ss-map-top", zU + 6), jU(UU, "--ss-map-bottom", null === cU ? null : (0, uU.g)(UU) - cU + 6)
```

#### 2393. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21984` → after: `L22307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22307) · [Before (L21984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21984)

```diff
-       const OM = null === iM ? "" : `${Math.ceil(iM)}px`;
+       const cU = null === zU ? "" : `${Math.ceil(zU)}px`;
```

#### 2394. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21989` → after: `L22312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22312) · [Before (L21989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21989)

```diff
-       const rM = document.querySelector(`.${ZM.g}`),
+       const XU = document.querySelector(`.${fU.h}`),
```

#### 2395. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L21991` → after: `L22314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22314) · [Before (L21991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L21991)

```diff
-       for (const jM of [document.querySelector(`.${ZM.e}`), rM]) jM && iM.observe(jM);
+       for (const QU of [document.querySelector(`.${fU.f}`), XU]) QU && zU.observe(QU);
```

#### 2396. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22004-L22005` → after: `L22327-L22328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22327-L22328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22327-L22328) · [Before (L22004-L22005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22004-L22005)

```diff
-       const MM = `.${ZM.g}`,
-         rM = document.querySelectorAll(`.${ZM.e}, ${MM} .TopRightIcon:not(.TopRightTray *), ${MM} .CondensedSocialBarInner`);
+       const UU = `.${fU.h}`,
+         XU = document.querySelectorAll(`.${fU.f}, ${UU} .TopRightIcon:not(.TopRightTray *), ${UU} .CondensedSocialBarInner`);
```

#### 2397. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22015` → after: `L22338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22338) · [Before (L22015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22015)

```diff
-       } = (0, HM.A)(), [SM, jM] = (0, aM.useState)(null);
+       } = (0, IU.I)(), [yU, QU] = (0, AU.useState)(null);
```

#### 2398. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22028` → after: `L22351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22351) · [Before (L22028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22028)

```diff
-                   SM.left < iM.right + ZM.c && SM.right > iM.left - ZM.c && SM.top + OM < iM.bottom + 4 && SM.bottom + OM > iM.top && (MM = Math.max(MM, Math.ceil(iM.bottom + 4 - SM.top)))
+                   yU.left < zU.right + fU.d && yU.right > zU.left - fU.d && yU.top + cU < zU.bottom + 4 && yU.bottom + cU > zU.top && (UU = Math.max(UU, Math.ceil(zU.bottom + 4 - yU.top)))
```

#### 2399. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22033` → after: `L22356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22356) · [Before (L22033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22033)

```diff
-             OM > 0 && (MM.style.top = `${MM.getBoundingClientRect().top+OM}px`)
+             cU > 0 && (UU.style.top = `${UU.getBoundingClientRect().top+cU}px`)
```

#### 2400. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22083` → after: `L22406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22406) · [Before (L22083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22083)

```diff
-       const iM = (0, oM.j)(rM);
+       const zU = (0, iU.i)(XU);
```

#### 2401. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22093` → after: `L22416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22416) · [Before (L22093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22093)

```diff
-         }), (0, oM.d)(iM)]
+         }), (0, iU.e)(zU)]
```

#### 2402. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22102` → after: `L22425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22425) · [Before (L22102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22102)

```diff
-         } = (0, HM.A)(), OM = Math.min(2, Math.max(0, rM.santaStatusHunters)), SM = rM.santaStatusScarf, jM = rM.santaStatusKnown ? (0, pM.jsxs)("span", {
+         } = (0, IU.I)(), cU = Math.min(2, Math.max(0, XU.santaStatusHunters)), yU = XU.santaStatusScarf, QU = XU.santaStatusKnown ? (0, qU.jsxs)("span", {
```

#### 2403. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22138` → after: `L22461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22461) · [Before (L22138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22138)

```diff
-         } = (0, HM.A)(), jM = null !== (rM = null === OM || void 0 === OM ? void 0 : OM.santaHintState) && void 0 !== rM ? rM : "none";
+         } = (0, IU.I)(), QU = null !== (XU = null === cU || void 0 === cU ? void 0 : cU.santaHintState) && void 0 !== XU ? XU : "none";
```

#### 2404. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22147` → after: `L22470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22470) · [Before (L22147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22147)

```diff
-           else if (null !== OM.santaHintScarf) PM = `scarf-${OM.santaHintScarf}`, aM = Or(SM("secretSantaHud:lookingFor", {
+           else if (null !== cU.santaHintScarf) FU = `scarf-${cU.santaHintScarf}`, AU = cX(yU("secretSantaHud:lookingFor", {
```

#### 2405. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22154` → after: `L22477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22477) · [Before (L22154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22154)

```diff
-           PM = `district-${null!==MM&&void 0!==MM?MM:"?"}`, aM = Or(SM("secretSantaHud:findIn", {
+           FU = `district-${null!==UU&&void 0!==UU?UU:"?"}`, AU = cX(yU("secretSantaHud:findIn", {
```

#### 2406. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22157` → after: `L22480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22480) · [Before (L22157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22157)

```diff
-             className: QM()("SecretSantaDistrictName", void 0 !== MM && `District-${MM}`),
+             className: DU()("SecretSantaDistrictName", void 0 !== UU && `District-${UU}`),
```

#### 2407. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22161` → after: `L22484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22484) · [Before (L22161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22161)

```diff
-             }), void 0 !== MM ? SM(`secretSantaHud:district_${MM}`) : "?"]
+             }), void 0 !== UU ? yU(`secretSantaHud:district_${UU}`) : "?"]
```

#### 2408. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22165` → after: `L22488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22488) · [Before (L22165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22165)

```diff
-           className: QM()("SecretSantaTarget", `State-${jM}`),
+           className: DU()("SecretSantaTarget", `State-${QU}`),
```

#### 2409. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22176` → after: `L22499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22499) · [Before (L22176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22176)

```diff
-       } = (0, HM.A)();
+       } = (0, IU.I)();
```

#### 2410. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22178` → after: `L22501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22501) · [Before (L22178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22178)

```diff
-         className: QM()("SecretSantaScarf", `Scarf-${rM}`),
+         className: DU()("SecretSantaScarf", `Scarf-${XU}`),
```

#### 2411. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22181` → after: `L22504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22504) · [Before (L22181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22181)

```diff
-         }), iM(`secretSantaHud:scarfName_${rM}`)]
+         }), zU(`secretSantaHud:scarfName_${XU}`)]
```

#### 2412. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22191` → after: `L22514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22514) · [Before (L22191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22191)

```diff
-     var Sr = iM(4577);
+     var yX = zU(4608);
```

#### 2413. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22248` → after: `L22571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22571) · [Before (L22248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22248)

```diff
-         blendMode: Sr.d.Standard
+         blendMode: yX.f.Standard
```

#### 2414. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22277` → after: `L22600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22600) · [Before (L22277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22277)

```diff
-         blendMode: Sr.d.Standard
+         blendMode: yX.f.Standard
```

#### 2415. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22298` → after: `L22621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22621) · [Before (L22298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22298)

```diff
-         blendMode: Sr.d.Add
+         blendMode: yX.f.Add
```

#### 2416. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22323` → after: `L22646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22646) · [Before (L22323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22323)

```diff
-         blendMode: Sr.d.Add
+         blendMode: yX.f.Add
```

#### 2417. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22326` → after: `L22649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22649) · [Before (L22326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22326)

```diff
-     var dr = iM(83);
+     var tX = zU(97);
```

#### 2418. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22356` → after: `L22679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22679) · [Before (L22356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22356)

```diff
-       return 1 === rM ? MM : {
+       return 1 === XU ? UU : {
```

#### 2419. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22392` → after: `L22715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22715) · [Before (L22392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22392)

```diff
-           const [SM, jM] = null !== (OM = rM[iM]) && void 0 !== OM ? OM : [0, MM.rate];
+           const [yU, QU] = null !== (cU = XU[zU]) && void 0 !== cU ? cU : [0, UU.rate];
```

#### 2420. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22496` → after: `L22819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22819) · [Before (L22496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22496)

```diff
-         const aM = OM.f.HL,
+         const AU = cU.f.aY,
```

#### 2421. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22511` → after: `L22834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22834) · [Before (L22511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22511)

```diff
-     var gr = iM(40215);
+     var eX = zU(39988);
```

#### 2422. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22521` → after: `L22844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22844) · [Before (L22521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22521)

```diff
-         vL: 900,
+         xY: 900,
```

#### 2423. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22525` → after: `L22848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22848) · [Before (L22525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22525)

```diff
-         vL: 360,
+         xY: 360,
```

#### 2424. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22530` → after: `L22853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22853) · [Before (L22530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22530)

```diff
-         this.api = MM, this.tier = (0, dr.isMobile)() ? Zr : kr, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
+         this.api = UU, this.tier = (0, tX.isMobile)() ? fX : uX, this.system = null, this.at = [0, 0, 0], this.last = [0, 0, 0], this.budget = 0, this.lastMs = 0, this.roofed = !1, this.nextRoofCheckMs = 0
```

#### 2425. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22543` → after: `L22866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22866) · [Before (L22543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22543)

```diff
-         }), jM = Math.floor(this.tier.vL / 2)), jM > 0 && (this.system.moveTo(SM, ur), this.system.emit(jM))
+         }), QU = Math.floor(this.tier.xY / 2)), QU > 0 && (this.system.moveTo(yU, CX), this.system.emit(QU))
```

#### 2426. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22562-L22566` → after: `L22885-L22889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22885-L22889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22885-L22889) · [Before (L22562-L22566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22562-L22566)

```diff
-           vL: this.tier.vL,
-           minLifeTime: Rr[0] / gr.e,
-           maxLifeTime: Rr[1] / gr.e,
-           minEmitPower: 1.1 * gr.e * .8,
-           maxEmitPower: 1.1 * gr.e * 1.2,
+           xY: this.tier.xY,
+           minLifeTime: wX[0] / eX.d,
+           maxLifeTime: wX[1] / eX.d,
+           minEmitPower: 1.1 * eX.d * .8,
+           maxEmitPower: 1.1 * eX.d * 1.2,
```

#### 2427. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22586` → after: `L22909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22909) · [Before (L22586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22586)

```diff
-           blendMode: Sr.d.Standard
+           blendMode: yX.f.Standard
```

#### 2428. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22590` → after: `L22913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22913) · [Before (L22590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22590)

```diff
-     var fr = iM(37501);
+     var HX = zU(37281);
```

#### 2429. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22612` → after: `L22935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22935) · [Before (L22612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22612)

```diff
-         (null === (rM = this.fade) || void 0 === rM || !rM.isConnected) && MM - this.fadeLookedAt >= 250 && (this.fadeLookedAt = MM, this.fade = document.querySelector(`[${fr.b}]`));
+         (null === (XU = this.fade) || void 0 === XU || !XU.isConnected) && UU - this.fadeLookedAt >= 250 && (this.fadeLookedAt = UU, this.fade = document.querySelector(`[${HX.e}]`));
```

#### 2430. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22615` → after: `L22938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22938) · [Before (L22615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22615)

```diff
-         const aM = null !== (OM = null === (SM = jM.backgroundColor.match(/\d+/g)) || void 0 === SM ? void 0 : SM.slice(0, 3).map(Number)) && void 0 !== OM ? OM : [];
+         const AU = null !== (cU = null === (yU = QU.backgroundColor.match(/\d+/g)) || void 0 === yU ? void 0 : yU.slice(0, 3).map(Number)) && void 0 !== cU ? cU : [];
```

#### 2431. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22629` → after: `L22952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22952) · [Before (L22629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22629)

```diff
-         } = (0, HM.A)();
+         } = (0, IU.I)();
```

#### 2432. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22651` → after: `L22974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R22974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L22974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L22974) · [Before (L22651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22651)

```diff
-       xr = OM.f.jy * OM.f.playerEyeToHeightRatio;
+       sX = cU.f.cg * cU.f.playerEyeToHeightRatio;
```

#### 2433. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22695` → after: `L23018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23018) · [Before (L22695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22695)

```diff
-             const PM = jM > 0 ? (OM * rM[0] + SM * rM[2]) / jM : 0;
+             const FU = QU > 0 ? (cU * XU[0] + yU * XU[2]) / QU : 0;
```

#### 2434. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22726` → after: `L23049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23049) · [Before (L22726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22726)

```diff
-           HM = MM, document.body.classList.add(Ar), JM = new wr(MM, SM), dM = new or(MM), yM = new tr(MM), hM = (0, PM.C)((0, aM.createElement)(aM.Fragment, null, (0, aM.createElement)(BM, {
+           IU = UU, document.body.classList.add(VX), aU = new dX(UU, yU), tU = new iX(UU), gU = new LX(UU), pU = (0, FU.u)((0, AU.createElement)(AU.Fragment, null, (0, AU.createElement)(lU, {
```

#### 2435. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22746` → after: `L23069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23069) · [Before (L22746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22746)

```diff
-           const zM = null !== (iM = HM) && void 0 !== iM && iM.readDrawnPosition(SM, QM) ? QM : null;
+           const EU = null !== (zU = IU) && void 0 !== zU && zU.readDrawnPosition(yU, DU) ? DU : null;
```

#### 2436. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22774` → after: `L23097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23097) · [Before (L22774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22774)

```diff
-             null === (QM = yM) || void 0 === QM || QM.GL(rM), nM.receiveFlyover(rM.santaFlyoverWaitMs)
+             null === (DU = gU) || void 0 === DU || DU.PY(XU), oU.receiveFlyover(XU.santaFlyoverWaitMs)
```

#### 2437. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22780` → after: `L23103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23103) · [Before (L22780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22780)

```diff
-   40666: (MM, rM, iM) => {
+   40427: (UU, XU, zU) => {
```

#### 2438. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22798` → after: `L23121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23121) · [Before (L22798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22798)

```diff
-   40668: (MM, rM, iM) => {
+   40435: (UU, XU, zU) => {
```

#### 2439. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22802` → after: `L23125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23125) · [Before (L22802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22802)

```diff
-     var OM = iM(35040);
+     var cU = zU(34891);
```

#### 2440. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22806-L22808` → after: `L23129-L23131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23129-L23131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23129-L23131) · [Before (L22806-L22808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22806-L22808)

```diff
-       if ("parenthetical-seconds" === rM) return ` (${MM}s)`;
-       const OM = `${Math.floor(MM/60)}:${(MM%60).toString().padStart(2,"0")}`;
-       return iM ? `${iM}${OM}` : OM
+       if ("parenthetical-seconds" === XU) return ` (${UU}s)`;
+       const cU = `${Math.floor(UU/60)}:${(UU%60).toString().padStart(2,"0")}`;
+       return zU ? `${zU}${cU}` : cU
```

#### 2441. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22816` → after: `L23139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23139) · [Before (L22816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22816)

```diff
-       PM.content = [...null !== (aM = SM.baseNametag.content) && void 0 !== aM ? aM : [], {
+       FU.content = [...null !== (AU = yU.baseNametag.content) && void 0 !== AU ? AU : [], {
```

#### 2442. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22821` → after: `L23144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23144) · [Before (L22821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22821)

```diff
-         str: `: ${(0,OM.e)(jM)}`
+         str: `: ${(0,cU.e)(QU)}`
```

#### 2443. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22836` → after: `L23159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23159) · [Before (L22836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22836)

```diff
-         bL: MM => {
+         LY: UU => {
```

#### 2444. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22851` → after: `L23174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23174) · [Before (L22851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22851)

```diff
-             if ("content" === SM.location) LM.content = [...null !== (iM = SM.baseNametag.content) && void 0 !== iM ? iM : [], zM];
+             if ("content" === yU.location) YU.content = [...null !== (zU = yU.baseNametag.content) && void 0 !== zU ? zU : [], EU];
```

#### 2445. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22902` → after: `L23225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23225) · [Before (L22902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22902)

```diff
-   9337: (MM, rM, iM) => {
+   9291: (UU, XU, zU) => {
```

#### 2446. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22904-L22905` → after: `L23227-L23228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23227-L23228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23227-L23228) · [Before (L22904-L22905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22904-L22905)

```diff
-       e: () => jM,
-       h: () => SM
+       b: () => QU,
+       f: () => yU
```

#### 2447. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22907` → after: `L23230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23230) · [Before (L22907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22907)

```diff
-     var OM = iM(22);
+     var cU = zU(31);
```

#### 2448. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22913` → after: `L23236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23236) · [Before (L22913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22913)

```diff
-           "Air" === PM && OM.i.Tz(SM)
+           "Air" === FU && cU.k.UY(yU)
```

#### 2449. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22918` → after: `L23241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23241) · [Before (L22918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22918)

```diff
-   39012: (MM, rM, iM) => {
+   38782: (UU, XU, zU) => {
```

#### 2450. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22922-L22925` → after: `L23245-L23248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23245-L23248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23245-L23248) · [Before (L22922-L22925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22922-L22925)

```diff
-     var OM = iM(332),
-       SM = iM(37858),
-       jM = iM(4854);
-     const aM = ["Leaf Bed", "_Leaf Bed Head", ...OM.Ec.flatMap((MM => [`${MM} Bed`, `_${MM} Bed Head`, `${MM} Strongbed`, `_${MM} Strongbed Head`]))];
+     var cU = zU(344),
+       yU = zU(37662),
+       QU = zU(4909);
+     const AU = ["Leaf Bed", "_Leaf Bed Head", ...cU.Oc.flatMap((UU => [`${UU} Bed`, `_${UU} Bed Head`, `${UU} Strongbed`, `_${UU} Strongbed Head`]))];
```

#### 2451. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22936` → after: `L23259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23259) · [Before (L22936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22936)

```diff
-           if ((0, SM.e)(MM.getMetaInfo(PM).rootName) && !MM.isEntityInteractable(nM) && (0, jM.g)(null === (QM = MM.TrM(rM)) || void 0 === QM ? void 0 : QM.typeObj.type)) return "preventAction"
+           if ((0, yU.b)(UU.getMetaInfo(FU).rootName) && !UU.isEntityInteractable(oU) && (0, QU.d)(null === (DU = UU.HzU(XU)) || void 0 === DU ? void 0 : DU.typeObj.type)) return "preventAction"
```

#### 2452. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22941` → after: `L23264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23264) · [Before (L22941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22941)

```diff
-   40215: (MM, rM, iM) => {
+   39988: (UU, XU, zU) => {
```

#### 2453. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22943-L22944` → after: `L23266-L23267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23266-L23267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23266-L23267) · [Before (L22943-L22944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22943-L22944)

```diff
-       e: () => OM,
-       i: () => jM
+       d: () => cU,
+       f: () => QU
```

#### 2454. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22952` → after: `L23275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23275) · [Before (L22952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22952)

```diff
-         this.style = MM, this.vL = rM, this.half = iM, this.particles = null, this.lastFrame = -1
+         this.style = UU, this.xY = XU, this.half = zU, this.particles = null, this.lastFrame = -1
```

#### 2455. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22962-L22963` → after: `L23285-L23286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23285-L23286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23285-L23286) · [Before (L22962-L22963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22962-L22963)

```diff
-             texture: MM.soft ? SM : "square_particle",
-             vL: rM,
+             texture: UU.soft ? yU : "square_particle",
+             xY: XU,
```

#### 2456. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22985` → after: `L23308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23308) · [Before (L22985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22985)

```diff
-         }(this.style, this.vL), {
+         }(this.style, this.xY), {
```

#### 2457. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22996` → after: `L23319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23319) · [Before (L22996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22996)

```diff
-   40192: (MM, rM, iM) => {
+   39962: (UU, XU, zU) => {
```

#### 2458. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L22998` → after: `L23321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23321) · [Before (L22998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L22998)

```diff
-       c: () => jM
+       e: () => QU
```

#### 2459. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23000-L23001` → after: `L23323-L23324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23323-L23324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23323-L23324) · [Before (L23000-L23001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23000-L23001)

```diff
-     var OM = iM(38034),
-       SM = iM(38839);
+     var cU = zU(37814),
+       yU = zU(38610);
```

#### 2460. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23006-L23008` → after: `L23329-L23331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23329-L23331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23329-L23331) · [Before (L23006-L23008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23006-L23008)

```diff
-       const jM = null !== (iM = rM.gravity) && void 0 !== iM ? iM : [0, 0, 0];
-       MM.gravity = new OM.sh(jM[0], jM[1], jM[2]);
-       for (const OM of rM.colorGradients) MM.addColorGradient(OM.timeFraction, (0, SM.i)(OM.minColor), OM.maxColor ? (0, SM.i)(OM.maxColor) : void 0)
+       const QU = null !== (zU = XU.gravity) && void 0 !== zU ? zU : [0, 0, 0];
+       UU.gravity = new cU.Sp(QU[0], QU[1], QU[2]);
+       for (const cU of XU.colorGradients) UU.addColorGradient(cU.timeFraction, (0, yU.k)(cU.minColor), cU.maxColor ? (0, yU.k)(cU.maxColor) : void 0)
```

#### 2461. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23011` → after: `L23334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23334) · [Before (L23011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23011)

```diff
-   39872: (MM, rM, iM) => {
+   39646: (UU, XU, zU) => {
```

#### 2462. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23017` → after: `L23340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23340) · [Before (L23017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23017)

```diff
-           bL: 0
+           LY: 0
```

#### 2463. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23019-L23020` → after: `L23342-L23343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23342-L23343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23342-L23343) · [Before (L23019-L23020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23019-L23020)

```diff
-         PU: function(MM, rM) {},
-         vW: null,
+         lG: function(UU, XU) {},
+         Cw: null,
```

#### 2464. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23022-L23023` → after: `L23345-L23346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23345-L23346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23345-L23346) · [Before (L23022-L23023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23022-L23023)

```diff
-           if (iM[0] && 100 !== iM[0].bL++) return;
-           const OM = MM.hU.XE(MM.eD);
+           if (zU[0] && 100 !== zU[0].LY++) return;
+           const cU = UU.xG.wG(UU.pM);
```

#### 2465. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23025` → after: `L23348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23348) · [Before (L23025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23025)

```diff
-             const rM = MM.hU.XE(SM.HZ);
+             const XU = UU.xG.wG(yU.iH);
```

#### 2466. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23028` → after: `L23351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23351) · [Before (L23028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23028)

```diff
-             iM > 500 && MM.hU.deleteEntity(SM.HZ), SM.bL = 0
+             zU > 500 && UU.xG.deleteEntity(yU.iH), yU.LY = 0
```

#### 2467. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23044` → after: `L23367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23367) · [Before (L23044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23044)

```diff
-   39832: (MM, rM, iM) => {
+   39604: (UU, XU, zU) => {
```

#### 2468. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23049` → after: `L23372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23372) · [Before (L23049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23049)

```diff
-     var OM = iM(3063);
+     var cU = zU(3043);
```

#### 2469. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23059` → after: `L23382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23382) · [Before (L23059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23059)

```diff
-         PU: function(MM, rM) {
+         lG: function(UU, XU) {
```

#### 2470. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23062-L23064` → after: `L23385-L23387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23385-L23387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23385-L23387) · [Before (L23062-L23064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23062-L23064)

```diff
-         vW: null,
-         dU: function(rM, iM) {
-           const jM = (0, OM.f)().CL.Dk,
+         Cw: null,
+         JG: function(XU, zU) {
+           const QU = (0, cU.e)().WY.DH,
```

#### 2471. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23068-L23069` → after: `L23391-L23392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23391-L23392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23391-L23392) · [Before (L23068-L23069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23068-L23069)

```diff
-             const rM = MM.hU.GrM(OM.HZ);
-             null === rM.Zk ? rM.mesh.rotation.set(rM.mesh.rotation.x, OM.heading, rM.mesh.rotation.z) : jM.getCulledForEntity(rM.Zk, OM.HZ) || jM.setRotationEuler(rM.Zk, 0, OM.heading, 0)
+             const XU = UU.xG.DzU(cU.iH);
+             null === XU.YH ? XU.mesh.rotation.set(XU.mesh.rotation.x, cU.heading, XU.mesh.rotation.z) : QU.getCulledForEntity(XU.YH, cU.iH) || QU.setRotationEuler(XU.YH, 0, cU.heading, 0)
```

#### 2472. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23077-L23078` → after: `L23400-L23401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23400-L23401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23400-L23401) · [Before (L23077-L23078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23077-L23078)

```diff
-       const SM = MM.hU.getState(rM, "autoRotate");
-       SM && (null === (OM = MM.hU.GrM(rM)) || void 0 === OM ? void 0 : OM.Zk) === iM && MM.CL.Dk.setRotationEuler(iM, 0, SM.heading, 0)
+       const yU = UU.xG.getState(XU, "autoRotate");
+       yU && (null === (cU = UU.xG.DzU(XU)) || void 0 === cU ? void 0 : cU.YH) === zU && UU.WY.DH.setRotationEuler(zU, 0, yU.heading, 0)
```

#### 2473. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23081` → after: `L23404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23404) · [Before (L23081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23081)

```diff
-   39878: (MM, rM, iM) => {
+   39652: (UU, XU, zU) => {
```

#### 2474. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23085` → after: `L23408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23408) · [Before (L23085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23085)

```diff
-     var OM = iM(347),
+     var cU = zU(352),
```

#### 2475. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23087` → after: `L23410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23410) · [Before (L23087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23087)

```diff
-       jM = iM(38318);
+       QU = zU(38090);
```

#### 2476. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23099-L23101` → after: `L23422-L23424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23422-L23424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23422-L23424) · [Before (L23099-L23101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23099-L23101)

```diff
-         PU: function(MM, rM) {},
-         vW: function(MM) {},
-         dU: function(rM, iM) {
+         lG: function(UU, XU) {},
+         Cw: function(UU) {},
+         JG: function(XU, zU) {
```

#### 2477. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23105` → after: `L23428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23428) · [Before (L23105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23105)

```diff
-               OM.onEnd(), MM.hU.deleteEntity(OM.HZ);
+               cU.onEnd(), UU.xG.deleteEntity(cU.iH);
```

#### 2478. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23109` → after: `L23432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23432) · [Before (L23109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23109)

```diff
-             const iM = MM.hU.XE(OM.HZ);
+             const zU = UU.xG.wG(cU.iH);
```

#### 2479. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23111-L23112` → after: `L23434-L23435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23434-L23435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23434-L23435) · [Before (L23111-L23112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23111-L23112)

```diff
-             MM.hU.setPosition(OM.HZ, iM);
-             const aM = MM.hU.GrM(OM.HZ);
+             UU.xG.setPosition(cU.iH, zU);
+             const AU = UU.xG.DzU(cU.iH);
```

#### 2480. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23115` → after: `L23438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23438) · [Before (L23115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23115)

```diff
-                 [iM, SM, PM] = MM.hU.oq(OM.HZ),
+                 [zU, yU, FU] = UU.xG.F_(cU.iH),
```

#### 2481. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23117` → after: `L23440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23440) · [Before (L23117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23117)

```diff
-               (0, jM.m)(rM, iM + nM - rM.position.x, SM + QM - rM.position.y, PM + zM - rM.position.z), OM._updatedLookAt = !0
+               (0, QU.o)(XU, zU + oU - XU.position.x, yU + DU - XU.position.y, FU + EU - XU.position.z), cU._updatedLookAt = !0
```

#### 2482. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23124` → after: `L23447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23447) · [Before (L23124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23124)

```diff
-   39885: (MM, rM, iM) => {
+   39661: (UU, XU, zU) => {
```

#### 2483. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23128` → after: `L23451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23451) · [Before (L23128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23128)

```diff
-     var OM, SM, jM, aM, PM, nM, QM, zM, LM, mM = iM(347),
+     var cU, yU, QU, AU, FU, oU, DU, EU, YU, NU = zU(352),
```

#### 2484. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23130-L23133` → after: `L23453-L23456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23453-L23456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23453-L23456) · [Before (L23130-L23133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23130-L23133)

```diff
-       hM = iM(38843),
-       JM = iM(39888),
-       dM = iM(38726),
-       yM = iM(1229);
+       pU = zU(38614),
+       aU = zU(39670),
+       tU = zU(38494),
+       gU = zU(1236);
```

#### 2485. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23146-L23148` → after: `L23469-L23471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23469-L23471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23469-L23471) · [Before (L23146-L23148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23146-L23148)

```diff
-         vW: function(MM, rM) {},
-         dU: function(rM, iM) {
-           for (const OM of iM) OM.HZ === MM.eD && (OM.targetRotationOffset[0] = OM.frontFacing ? Math.PI : 0, OM.targetRotationOffset[1] = 0, OM.targetRotationOffset[2] = OM.frontFacing ? Math.PI : 0, OM.shakeTime > 0 && (OM.targetRotationOffset[0] += .2 * OM.shakePower * Math.co … [truncated]
+         Cw: function(UU, XU) {},
+         JG: function(XU, zU) {
+           for (const cU of zU) cU.iH === UU.pM && (cU.targetRotationOffset[0] = cU.frontFacing ? Math.PI : 0, cU.targetRotationOffset[1] = 0, cU.targetRotationOffset[2] = cU.frontFacing ? Math.PI : 0, cU.shakeTime > 0 && (cU.targetRotationOffset[0] += .2 * cU.shakePower * Math.co … [truncated]
```

#### 2486. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23152` → after: `L23475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23475) · [Before (L23152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23152)

```diff
-     const EM = [167, 0, 1, 156, 3, 91, 39, 37, "e", 145, "d", 8, 255, "length", 218, "c", 208, "a", 136, "undefined", 50, 63, 6, "fromCodePoint", 7, 12, "push", 213, null, 2, 244, "b", "h", 185, 49, 96, 9, 56, 76, 72, 8191, 88, 13, 14, 127, 128, "g", 4, 36, 203, 112, 47, "i", 5,  … [truncated]
+     const GU = ["b", 0, 1, "h", 3, "a", 9, "g", 5, 6, 121, 8, 255, "length", 68, 179, "d", 4, "undefined", "c", 63, "fromCodePoint", 7, 12, "push", 2, 122, 224, 91, 8191, 88, 13, 14, 79, 145, 53, 112, 41, 155, 243, !1, 191, "e", 127, 245, 105, 126, "Q", ".", !0];
```

#### 2487. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23155-L23170` → after: `L23478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23478) · [Before (L23155-L23170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23155-L23170)

```diff
-       return MM[EM[13]] = EM[2], typeof OM[MM[EM[1]]] === EM[19] ? OM[MM[EM[1]]] = function(...MM) {
-         for (eM(MM[EM[13]] = EM[2], MM[EM[5]] = '@JjWmPrv<&XVt;?U+(Luwl.F")%[CMRfHE^k568QBS>0yO=xgA1oeT~c97`DpbKhiz!:I{/,s}#dYZ]$q_*N3n42Ga|', MM[-EM[0]] = "" + (MM[EM[1]] || ""), MM[EM[4]] = MM[-EM[0]].length, MM[EM[10]] = [], MM[EM[8]] = EM[1], MM[EM[9]] = EM[1], MM[EM[7]] = -E … [truncated]
-           if (MM[EM[6]] = MM[EM[5]].indexOf(MM[-EM[0]][MM[EM[3]]]), MM[EM[6]] !== -EM[2])
-             if (MM[EM[7]] < EM[1]) MM[EM[7]] = MM[EM[6]];
-             else {
-               eM(MM[EM[7]] += MM[EM[6]] * EM[5], MM[EM[8]] |= MM[EM[7]] << MM[EM[9]], MM[EM[9]] += (MM[EM[7]] & EM[40]) > EM[41] ? EM[42] : EM[43]);
-               do {
-                 eM(MM[EM[10]].push(MM[EM[8]] & EM[12]), MM[EM[8]] >>= EM[11], MM[EM[9]] -= EM[11])
-               } while (MM[EM[9]] > EM[24]);
-               MM[EM[7]] = -EM[2]
-             } return MM[EM[7]] > -EM[2] && MM[EM[10]].push((MM[EM[8]] | MM[EM[7]] << MM[EM[9]]) & EM[12]), GM(MM[EM[10]])
-       }(SM[MM[EM[1]]]) : OM[MM[EM[1]]]
-     }
- 
-     function GM(...MM) {
-       return MM[EM[13]] = EM[2], typeof aM !== EM[19] && aM ? (new aM).decode(new PM(MM[EM[1]])) : typeof nM !== EM[19] && nM ? nM.from(MM[EM[1]]).toString("utf-8") : LM(MM[EM[1]])
+       return UU[GU[13]] = GU[2], typeof AU !== GU[18] && AU ? (new AU).decode(new FU(UU[GU[1]])) : typeof oU !== GU[18] && oU ? oU.from(UU[GU[1]]).toString("utf-8") : YU(UU[GU[1]])
```

#### 2488. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23178-L23179` → after: `L23486-L23487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23486-L23487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23486-L23487) · [Before (L23178-L23179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23178-L23179)

```diff
-     eM(OM = {}, SM = ['}rgrdKC5&?|uYUr8I&mPC~*ey<~{>*%Sio;#"]gBd<^^86cS9zh&J$m`P~7', 'N/JR%NytRlK="[tQL~^ZK=;Jw;[', "U~6mp`0JUt", '`(ZfHkyL3;"(0*n[>0RchcI"l~=KTsV)G>vY"7ux5u;X7+j58F]C,KfvLUBgJ', "<AsrMBv;,;/}0/dQK^*<", "EgOe)7B=!&N.#{;[3gj", 'dz;X09]tmi"gH,TCXJ', "?,fYOI_;~iW$s,E … [truncated]
-       eM(MM[EM[13]] = EM[1], MM[EM[17]] = [function() {
+     RU(cU = {}, yU = ['7PF?2<="sP%S~S8;o,I%&I&Dw8', "US*cy32", "&P1Wz,_9izfSw3<BR:oA", "A:*r[w[uOP([16z", "pUXDXtPRHP>!j{!G4oIqJ", "pP^gs5^g#>uvQ<b|#/cD*+Z,?8", 'a;rWNU@9!9tBZbLZu"]tfF5[)zf&|n{;!cvk4Y@g(,OPR', "=Nr}VFWw$EgQH;:KxD.kBOnMS", 'b9P:PC$Rf`r"eS', "05(E;r:WS,S!dM^<Yc3g6= … [truncated]
+       RU(UU[GU[13]] = GU[1], UU[GU[5]] = [function() {
```

#### 2489. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23187` → after: `L23495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23495) · [Before (L23187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23187)

```diff
-       }], MM[EM[14]] = EM[56], MM[EM[15]] = []);
+       }], UU[-GU[14]] = void 0, UU[GU[15]] = []);
```

#### 2490. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23189` → after: `L23497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23497) · [Before (L23189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23189)

```diff
-         eM(MM[EM[14]] = Object, MM[EM[15]][EM[26]]("".__proto__.constructor.name))
+         RU(UU[-GU[14]] = Object, UU[GU[15]][GU[24]]("".__proto__.constructor.name))
```

#### 2491. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23191-L23194` → after: `L23499-L23502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23499-L23502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23499-L23502) · [Before (L23191-L23194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23191-L23194)

```diff
-       MM: for (MM[EM[16]] = EM[1]; MM[EM[16]] < MM[EM[17]][EM[13]]; MM[EM[16]]++) try {
-         for (MM[EM[14]] = MM[EM[17]][MM[EM[16]]](), MM[EM[18]] = EM[1]; MM[EM[18]] < MM[EM[15]][EM[13]]; MM[EM[18]]++)
-           if (typeof MM[EM[14]][MM[EM[15]][MM[EM[18]]]] === EM[19]) continue MM;
-         return MM[EM[14]]
+       UU: for (UU[GU[16]] = GU[1]; UU[GU[16]] < UU[GU[5]][GU[13]]; UU[GU[16]]++) try {
+         for (UU[-GU[14]] = UU[GU[5]][UU[GU[16]]](), UU[GU[17]] = GU[1]; UU[GU[17]] < UU[GU[15]][GU[13]]; UU[GU[17]]++)
+           if (typeof UU[-GU[14]][UU[GU[15]][UU[GU[17]]]] === GU[18]) continue UU;
+         return UU[-GU[14]]
```

#### 2492. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23196-L23198` → after: `L23504-L23506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23504-L23506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23504-L23506) · [Before (L23196-L23198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23196-L23198)

```diff
-       return MM[EM[14]] || this
-     }() || {}, aM = jM.TextDecoder, PM = jM.Uint8Array, nM = jM.Vz, QM = jM.String || String, zM = jM.Array || Array, LM = function(...MM) {
-       return eM(MM[EM[13]] = EM[1], MM[EM[27]] = new zM(EM[45]), MM[EM[2]] = QM[EM[23]] || QM.fromCharCode, MM[EM[20]] = []),
+       return UU[-GU[14]] || this
+     }() || {}, AU = QU.TextDecoder, FU = QU.Uint8Array, oU = QU.XY, DU = QU.String || String, EU = QU.Array || Array, YU = function(...UU) {
+       return RU(UU[GU[13]] = GU[1], UU[GU[5]] = new EU(128), UU[GU[0]] = DU[GU[21]] || DU.fromCharCode, UU[GU[19]] = []),
```

#### 2493. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23201-L23202` → after: `L23509-L23510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23509-L23510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23509-L23510) · [Before (L23201-L23202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23201-L23202)

```diff
-           for (eM(OM = void 0, SM = rM[EM[13]], MM[EM[20]][EM[13]] = EM[1]), jM = EM[1]; jM < SM;) eM(OM = rM[jM++], OM <= EM[44] ? iM = OM : OM <= 223 ? iM = (31 & OM) << EM[22] | rM[jM++] & EM[21] : OM <= 239 ? iM = (15 & OM) << EM[25] | (rM[jM++] & EM[21]) << EM[22] | rM[jM++] … [truncated]
-           return MM[EM[20]].join("")
+           for (RU(cU = void 0, yU = XU[GU[13]], UU[GU[19]][GU[13]] = GU[1]), QU = GU[1]; QU < yU;) RU(cU = XU[QU++], cU <= GU[43] ? zU = cU : cU <= 223 ? zU = (31 & cU) << GU[9] | XU[QU++] & GU[20] : cU <= 239 ? zU = (15 & cU) << GU[23] | (XU[QU++] & GU[20]) << GU[9] | XU[QU++] & … [truncated]
+           return UU[GU[19]].join("")
```

#### 2494. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23204-L23218` → after: `L23512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23512) · [Before (L23204-L23218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23204-L23218)

```diff
-     }()), UM(111) in CM && function(...MM) {
-       var rM;
-       eM(MM[EM[13]] = EM[1], rM = function(...MM) {
-         eM(MM[EM[13]] = EM[2], this.vL = MM[EM[1]], this.length = EM[1], this.map = {}, this.head = EM[28], this.tail = EM[28])
-       }, rM.prototype.get = function(...MM) {
-         var rM;
-         return eM(MM[EM[13]] = EM[2], rM = this.map[MM[EM[1]]]), rM ? (this.remove(rM), this.insert(rM.key, rM.val), rM.val) : -EM[2]
-       }, rM.prototype.put = function(MM, rM) {
-         this.map[MM] ? (this.remove(this.map[MM]), this.insert(MM, rM)) : this.length === this.vL ? (this.remove(this.head), this.insert(MM, rM)) : (this.insert(MM, rM), this.length++)
-       }, rM.prototype.remove = function(...MM) {
-         eM(MM[EM[13]] = EM[2], MM[EM[2]] = MM[EM[1]].prev, MM[EM[29]] = MM[EM[1]].next), MM[EM[29]] && (MM[EM[29]].prev = MM[EM[2]]), MM[EM[2]] && (MM[EM[2]].next = MM[EM[29]]), this.head === MM[EM[1]] && (this.head = MM[EM[29]]), this.tail === MM[EM[1]] && (this.tail = MM[EM[2]] … [truncated]
-       }, rM.prototype.insert = function(...MM) {
-         eM(MM[EM[13]] = EM[29], MM[EM[29]] = new List(MM[EM[1]], MM[EM[2]]), this.tail ? (this.tail.next = MM[EM[29]], MM[EM[29]].prev = this.tail, this.tail = MM[EM[29]]) : (this.tail = MM[EM[29]], this.head = MM[EM[29]]), this.map[MM[EM[1]]] = MM[EM[29]])
-       }, console.log(rM))
-     }(), (() => {
+     }()), (() => {
```

#### 2495. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23220-L23223` → after: `L23514-L23517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23514-L23517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23514-L23517) · [Before (L23220-L23223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23220-L23223)

```diff
-         return MM[EM[13]] = EM[2], typeof OM[MM[EM[1]]] === EM[19] ? OM[MM[EM[1]]] = function(...MM) {
-           for (eM(MM[EM[13]] = EM[2], MM[EM[35]] = 'MbN0elqOCiY:;6U$gP5QA_w`K]f+RDGs(hopL~8uV%k=^}/r1cX4Bj|*.H[<&a>I,@)Sn!J9EZty?FTx{7mv3zdW#2"', MM[EM[29]] = "" + (MM[EM[1]] || ""), MM[-EM[34]] = MM[EM[29]].length, MM[EM[10]] = [], MM[EM[38]] = EM[1], MM[EM[39]] = EM[1], MM[-EM[ … [truncated]
-             if (MM[EM[36]] = MM[EM[35]].indexOf(MM[EM[29]][MM[EM[11]]]), MM[EM[36]] !== -EM[2])
-               if (MM[-EM[37]] < EM[1]) MM[-EM[37]] = MM[EM[36]];
+         return UU[GU[13]] = GU[2], typeof cU[UU[GU[1]]] === GU[18] ? cU[UU[GU[1]]] = function(...UU) {
+           for (RU(UU[GU[13]] = GU[2], UU[GU[27]] = 'T15NtI}mK*4p%H>9zeUuWx["(~+^:OXYZ#!;REs|a{=DnFV&Bf7.6J_kh/q0v]iC?Sy`2l,Ag$<3Gw)P@8LobdjMQrc', UU[GU[25]] = "" + (UU[GU[1]] || ""), UU[-GU[26]] = UU[GU[25]].length, UU[-GU[33]] = [], UU[GU[8]] = GU[1], UU[GU[9]] = GU[1], UU[GU[7] … [truncated]
+             if (UU[GU[6]] = UU[GU[27]].indexOf(UU[GU[25]][UU[GU[11]]]), UU[GU[6]] !== -GU[2])
+               if (UU[GU[7]] < GU[1]) UU[GU[7]] = UU[GU[6]];
```

#### 2496. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23225` → after: `L23519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23519) · [Before (L23225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23225)

```diff
-                 eM(MM[-EM[37]] += MM[EM[36]] * EM[5], MM[EM[38]] |= MM[-EM[37]] << MM[EM[39]], MM[EM[39]] += (MM[-EM[37]] & EM[40]) > EM[41] ? EM[42] : EM[43]);
+                 RU(UU[GU[7]] += UU[GU[6]] * GU[28], UU[GU[8]] |= UU[GU[7]] << UU[GU[9]], UU[GU[9]] += (UU[GU[7]] & GU[29]) > GU[30] ? GU[31] : GU[32]);
```

#### 2497. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23227-L23230` → after: `L23521-L23524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23521-L23524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23521-L23524) · [Before (L23227-L23230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23227-L23230)

```diff
-                   eM(MM[EM[10]].push(MM[EM[38]] & EM[12]), MM[EM[38]] >>= EM[11], MM[EM[39]] -= EM[11])
-                 } while (MM[EM[39]] > EM[24]);
-                 MM[-EM[37]] = -EM[2]
-               } return MM[-EM[37]] > -EM[2] && MM[EM[10]].push((MM[EM[38]] | MM[-EM[37]] << MM[EM[39]]) & EM[12]), GM(MM[EM[10]])
+                   RU(UU[-GU[33]].push(UU[GU[8]] & GU[12]), UU[GU[8]] >>= GU[11], UU[GU[9]] -= GU[11])
+                 } while (UU[GU[9]] > GU[22]);
+                 UU[GU[7]] = -GU[2]
+               } return UU[GU[7]] > -GU[2] && UU[-GU[33]].push((UU[GU[8]] | UU[GU[7]] << UU[GU[9]]) & GU[12]), BU(UU[-GU[33]])
```

#### 2498. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23233-L23254` → after: `L23527-L23533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23527-L23533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23527-L23533) · [Before (L23233-L23254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23233-L23254)

```diff
-       MM(113) in CM && function(...MM) {
-         var rM;
-         eM(MM[EM[13]] = EM[1], rM = function(MM) {
-           eM(this.vL = MM, this.length = EM[1], this.map = {}, this.head = EM[28], this.tail = EM[28])
-         }, rM.prototype.get = function(...MM) {
-           var rM;
-           return eM(MM[EM[13]] = EM[2], rM = this.map[MM[EM[1]]]), rM ? (this.remove(rM), this.insert(rM.key, rM.val), rM.val) : -EM[2]
-         }, rM.prototype.put = function(...MM) {
-           eM(MM[EM[13]] = EM[29], this.map[MM[EM[1]]] ? (this.remove(this.map[MM[EM[1]]]), this.insert(MM[EM[1]], MM[EM[2]])) : this.length === this.vL ? (this.remove(this.head), this.insert(MM[EM[1]], MM[EM[2]])) : (this.insert(MM[EM[1]], MM[EM[2]]), this.length++))
-         }, rM.prototype.remove = function(...MM) {
-           eM(MM[EM[13]] = EM[2], MM[EM[17]] = MM[EM[1]].prev, MM[EM[29]] = MM[EM[1]].next), MM[EM[29]] && (MM[EM[29]].prev = MM[EM[17]]), MM[EM[17]] && (MM[EM[17]].next = MM[EM[29]]), this.head === MM[EM[1]] && (this.head = MM[EM[29]]), this.tail === MM[EM[1]] && (this.tail = MM[ … [truncated]
-         }, rM.prototype.insert = function(...MM) {
-           eM(MM[EM[13]] = EM[29], MM[EM[17]] = new List(MM[EM[1]], MM[EM[2]]), this.tail ? (this.tail.next = MM[EM[17]], MM[EM[17]].prev = this.tail, this.tail = MM[EM[17]]) : (this.tail = MM[EM[17]], this.head = MM[EM[17]]), this.map[MM[EM[1]]] = MM[EM[17]])
-         }, console.log(rM))
-       }();
-       const rM = Date[MM(114)]() < new Date(MM(EM[59]) + MM(116) + MM(EM[62]) + "0Z")[MM(118) + EM[8]](),
- ... (6 more removed lines; see GitHub link above)
+       const XU = Date[UU(GU[30])]() < new Date(UU(89) + UU(90) + UU(GU[28]))[UU(92) + GU[42]](),
+         zU = UU(93) + UU(94) + UU(95),
+         QU = UU(96) + "I=",
+         AU = UU(97) + "s=",
+         FU = UU(98) + UU(99),
+         oU = UU(100) + UU(101),
+         DU = UU(102) + "Zl",
```

#### 2499. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23261-L23264` → after: `L23540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23540) · [Before (L23261-L23264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23261-L23264)

```diff
-         UM = (...jM) => {
-           jM[EM[13]] = EM[1], MM(129) + "1" in CM && function(...MM) {
-             MM[EM[13]] = EM[1]
-           }();
+         PU = () => {
```

#### 2500. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23267-L23270` → after: `L23543-L23565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23543-L23565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23543-L23565) · [Before (L23267-L23270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23267-L23270)

```diff
-               eM(MM[EM[13]] = EM[1], MM[EM[17]] = function(...MM) {
-                 for (eM(MM[EM[13]] = EM[2], MM[EM[49]] = EM[1], MM[EM[31]] = {}, MM[EM[4]] = EM[1], MM[EM[47]] = EM[1], MM[EM[8]] = EM[1], MM[EM[22]] = MM[EM[1]].length), MM[EM[46]] = EM[1]; MM[EM[46]] < MM[EM[22]]; MM[EM[46]]++) {
-                   for (eM(MM[EM[31]] = {}, MM[EM[4]] = EM[1], MM[EM[47]] = EM[2]), MM[EM[48]] = MM[EM[46]] + EM[2]; MM[EM[48]] < MM[EM[22]]; MM[EM[48]]++) MM[EM[1]][MM[EM[46]]].x !== MM[EM[1]][MM[EM[48]]].x || MM[EM[1]][MM[EM[46]]].y !== MM[EM[1]][MM[EM[48]]].y ? (MM[EM[1]][MM[EM … [truncated]
-                   eM(MM[EM[4]] += MM[EM[47]], MM[EM[49]] = Math.max(MM[EM[49]], MM[EM[4]]))
+               for (RU(UU[GU[13]] = GU[2], UU[-GU[36]] = 'FlPS3Ht*,6hgI&bWv8YQ4?D#x%~_s9$`!=jJR{}]KZ:ci;yq(Nd.+2kBV>z7e"5^arM0TA1mu)wXLfnEOG/[<|p@oUC', UU[GU[34]] = "" + (UU[GU[1]] || ""), UU[GU[35]] = UU[GU[34]].length, UU[GU[17]] = [], UU[-GU[37]] = GU[1], UU[-GU[38]] = GU[1], U … [truncated]
+                 if (UU[GU[6]] = UU[-GU[36]].indexOf(UU[GU[34]][UU[GU[3]]]), UU[GU[6]] !== -GU[2])
+                   if (UU[GU[7]] < GU[1]) UU[GU[7]] = UU[GU[6]];
+                   else {
+                     RU(UU[GU[7]] += UU[GU[6]] * GU[28], UU[-GU[37]] |= UU[GU[7]] << UU[-GU[38]], UU[-GU[38]] += (UU[GU[7]] & GU[29]) > GU[30] ? GU[31] : GU[32]);
+                     do {
+                       RU(UU[GU[17]].push(UU[-GU[37]] & GU[12]), UU[-GU[37]] >>= GU[11], UU[-GU[38]] -= GU[11])
+                     } while (UU[-GU[38]] > GU[22]);
+                     UU[GU[7]] = -GU[2]
+                   } return UU[GU[7]] > -GU[2] && UU[GU[17]].push((UU[-GU[37]] | UU[GU[7]] << UU[-GU[38]]) & GU[12]), BU(UU[GU[17]])
+             }
+ 
+             function QU(...XU) {
+               return XU[GU[13]] = GU[2], typeof cU[XU[GU[1]]] === GU[18] ? cU[XU[GU[1]]] = UU(yU[XU[GU[1]]]) : cU[XU[GU[1]]]
+             }
+ 
+ ... (7 more added lines; see GitHub link above)
```

#### 2501. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23272-L23273` → after: `L23567-L23577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23567-L23577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23567-L23577) · [Before (L23272-L23273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23272-L23273)

```diff
-                 return MM[EM[49]]
-               }, console.log(MM[EM[17]]))
+               }, UU[GU[4]] = function(...UU) {
+                 for (RU(UU[GU[13]] = GU[2], UU[-GU[39]] = [], UU[GU[25]] = UU[GU[1]].length), UU[GU[4]] = GU[1]; UU[GU[4]] < UU[GU[25]]; UU[GU[4]]++)
+                   for (UU[-GU[39]][UU[GU[4]]] = "", UU[GU[17]] = GU[1]; UU[GU[17]] < UU[GU[25]]; UU[GU[17]]++) UU[-GU[39]][UU[GU[4]]] += UU[GU[1]][UU[GU[4]]][GU[2]] === UU[GU[17]] ? GU[47] : GU[48];
+                 return UU[-GU[39]]
+               }, UU[GU[25]] = function(...UU) {
+                 for (RU(UU[GU[13]] = GU[25], UU[GU[5]] = UU[GU[1]].length), UU[GU[0]] = GU[1]; UU[GU[0]] < UU[GU[5]]; UU[GU[0]]++) {
+                   if (UU[GU[1]][UU[GU[0]]][GU[1]] === UU[GU[2]][GU[1]] || UU[GU[1]][UU[GU[0]]][GU[2]] === UU[GU[2]][GU[2]]) return GU[40];
+                   if (Math.abs((UU[GU[1]][UU[GU[0]]][GU[1]] - UU[GU[2]][GU[1]]) / (UU[GU[1]][UU[GU[0]]][GU[2]] - UU[GU[2]][GU[2]])) === GU[2]) return GU[40]
+                 }
+                 return GU[49]
+               }, console.log(UU[-GU[41]]))
```

#### 2502. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23275` → after: `L23579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23579) · [Before (L23275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23275)

```diff
-             MM(130) in CM && aM(), (0, JM[MM(131)])()
+             QU(103) + "I" in ZU && AU(), (0, aU[QU(104)])()
```

#### 2503. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23279-L23281` → after: `L23583-L23585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23583-L23585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23583-L23585) · [Before (L23279-L23281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23279-L23281)

```diff
-                 for (eM(MM[EM[13]] = EM[2], MM[EM[51]] = 'H;+Fu1Pg&iv5loNA_3h)<qwx9`|7(OB=ztS8U0VeQX6:c{kGd4m^?aIMT/ECrWp#}K,@js!>bf~$2Dn."Y]y*%Z[RJL', MM[EM[31]] = "" + (MM[EM[1]] || ""), MM[EM[4]] = MM[EM[31]].length, MM[EM[47]] = [], MM[EM[53]] = EM[1], MM[-EM[50]] = EM[1], MM … [truncated]
-                   if (MM[EM[52]] = MM[EM[51]].indexOf(MM[EM[31]][MM[EM[11]]]), MM[EM[52]] !== -EM[2])
-                     if (MM[-EM[41]] < EM[1]) MM[-EM[41]] = MM[EM[52]];
+                 for (RU(UU[GU[13]] = GU[2], UU[GU[5]] = '6JdmsCWjrFknI.@Lx8P9w),y[EQD#^2c]Ye{Uu7/V;|HiK}aGqp>*hozv1BN<3Ogl$b=4ZR(5&%S?0":tXf!`~+_TAM', UU[-GU[9]] = "" + (UU[GU[1]] || ""), UU[GU[19]] = UU[-GU[9]].length, UU[-GU[45]] = [], UU[GU[42]] = GU[1], UU[-GU[44]] = GU[1], U … [truncated]
+                   if (UU[GU[6]] = UU[GU[5]].indexOf(UU[-GU[9]][UU[GU[3]]]), UU[GU[6]] !== -GU[2])
+                     if (UU[-GU[43]] < GU[1]) UU[-GU[43]] = UU[GU[6]];
```

#### 2504. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23283` → after: `L23587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23587) · [Before (L23283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23283)

```diff
-                       eM(MM[-EM[41]] += MM[EM[52]] * EM[5], MM[EM[53]] |= MM[-EM[41]] << MM[-EM[50]], MM[-EM[50]] += (MM[-EM[41]] & EM[40]) > EM[41] ? EM[42] : EM[43]);
+                       RU(UU[-GU[43]] += UU[GU[6]] * GU[28], UU[GU[42]] |= UU[-GU[43]] << UU[-GU[44]], UU[-GU[44]] += (UU[-GU[43]] & GU[29]) > GU[30] ? GU[31] : GU[32]);
```

#### 2505. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23285-L23292` → after: `L23589-L23592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23589-L23592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23589-L23592) · [Before (L23285-L23292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23285-L23292)

```diff
-                         eM(MM[EM[47]].push(MM[EM[53]] & EM[12]), MM[EM[53]] >>= EM[11], MM[-EM[50]] -= EM[11])
-                       } while (MM[-EM[50]] > EM[24]);
-                       MM[-EM[41]] = -EM[2]
-                     } return MM[-EM[41]] > -EM[2] && MM[EM[47]].push((MM[EM[53]] | MM[-EM[41]] << MM[-EM[50]]) & EM[12]), GM(MM[EM[47]])
-               }
- 
-               function QM(...MM) {
-                 return MM[EM[13]] = EM[2], typeof OM[MM[EM[1]]] === EM[19] ? OM[MM[EM[1]]] = nM(SM[MM[EM[1]]]) : OM[MM[EM[1]]]
+                         RU(UU[-GU[45]].push(UU[GU[42]] & GU[12]), UU[GU[42]] >>= GU[11], UU[-GU[44]] -= GU[11])
+                       } while (UU[-GU[44]] > GU[22]);
+                       UU[-GU[43]] = -GU[2]
+                     } return UU[-GU[43]] > -GU[2] && UU[-GU[45]].push((UU[GU[42]] | UU[-GU[43]] << UU[-GU[44]]) & GU[12]), BU(UU[-GU[45]])
```

#### 2506. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23296-L23320` → after: `L23596-L23597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23596-L23597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23596-L23597) · [Before (L23296-L23320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23296-L23320)

```diff
-                 eM(MM[EM[13]] = EM[1], MM[-EM[25]] = function(...rM) {
-                   return eM(rM[EM[13]] = EM[4], rM[EM[55]] = {}), rM[EM[29]].length !== rM[EM[1]].length + rM[EM[2]].length ? EM[54] : MM[EM[2]](rM[EM[1]], rM[EM[2]], rM[EM[29]], EM[1], EM[1], EM[1], rM[EM[55]])
-                 }, MM[EM[2]] = function(...rM) {
-                   return eM(rM[EM[13]] = EM[24], rM[-EM[38]] = EM[54]), rM[EM[53]] >= rM[EM[29]].length || (rM[EM[22]]["" + rM[EM[4]] + rM[EM[47]] + rM[EM[53]]] !== EM[56] ? rM[EM[22]]["" + rM[EM[4]] + rM[EM[47]] + rM[EM[53]]] : (rM[EM[29]][rM[EM[53]]] === rM[EM[1]][rM[EM[4]]] && … [truncated]
-                 }, console.log(MM[-EM[25]]))
-               }
-               QM(132) + "k" in CM && UM(), (0, dM[QM(133) + "op"])("es" + (rM ? "||" + iM[zM] : ""))
-             }
-           }
-           if (!window[HM][yM]()[LM](lM)) {
-             function bM(...MM) {
-               for (eM(MM[EM[13]] = EM[2], MM[EM[58]] = 'r:^>y)wd~MimO4p5[{UAW#,="GBt(SFC8z!E2g?sqJIQl0]T;h9`v@|o%+fuK$c}jL/ZakDH67XPxVNR_e.3nb*1&Y<', MM[-EM[57]] = "" + (MM[EM[1]] || ""), MM[EM[15]] = MM[-EM[57]].length, MM[EM[10]] = [], MM[EM[53]] = EM[1], MM[-EM[0]] = EM[1], MM … [truncated]
-                 if (MM[EM[36]] = MM[EM[58]].indexOf(MM[-EM[57]][MM[EM[41]]]), MM[EM[36]] !== -EM[2])
-                   if (MM[EM[24]] < EM[1]) MM[EM[24]] = MM[EM[36]];
-                   else {
-                     eM(MM[EM[24]] += MM[EM[36]] * EM[5], MM[EM[53]] |= MM[EM[24]] << MM[-EM[0]], MM[-EM[0]] += (MM[EM[24]] & EM[40]) > EM[41] ? EM[42] : EM[43]);
- ... (9 more removed lines; see GitHub link above)
+                 return UU[GU[13]] = GU[2], typeof cU[UU[GU[1]]] === GU[18] ? cU[UU[GU[1]]] = oU(yU[UU[GU[1]]]) : cU[UU[GU[1]]]
+               }(0, tU[DU(GU[45]) + "op"])("es" + (XU ? "||" + zU[EU] : ""))
```

#### 2507. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23340` → after: `L23600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23600) · [Before (L23340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23340)

```diff
-           window[HM][yM][yM]()[LM](lM) || (0, hM[EM[10]])("fr")
+           window[IU][gU]()[YU](kU) || (0, pU[GU[16]])("en"), window[IU][gU][gU]()[YU](kU) || (0, pU[GU[16]])("fr")
```

#### 2508. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23345-L23348` → after: `L23605-L23608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23605-L23608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23605-L23608) · [Before (L23345-L23348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23345-L23348)

```diff
-             return MM[EM[13]] = EM[2], typeof OM[MM[EM[1]]] === EM[19] ? OM[MM[EM[1]]] = function(...MM) {
-               for (eM(MM[EM[13]] = EM[2], MM[-EM[63]] = 'NogTvi+y{PZ9>2},OA`mfa~^(<B!S67?Wprtl0z]8/jLCxd;"DcJ@YMXeUIqbskQKRu*)5EFG:3V4.H[n1|w%&#$_=h', MM[EM[31]] = "" + (MM[EM[1]] || ""), MM[-EM[61]] = MM[EM[31]].length, MM[EM[49]] = [], MM[EM[53]] = EM[1], MM[EM[22]] = EM[1], MM … [truncated]
-                 if (MM[-EM[62]] = MM[-EM[63]].indexOf(MM[EM[31]][MM[-EM[60]]]), MM[-EM[62]] !== -EM[2])
-                   if (MM[-EM[64]] < EM[1]) MM[-EM[64]] = MM[-EM[62]];
+             return UU[GU[13]] = GU[2], typeof cU[UU[GU[1]]] === GU[18] ? cU[UU[GU[1]]] = function(...UU) {
+               for (RU(UU[GU[13]] = GU[2], UU[GU[2]] = 'gv8pHfu126#"/3^;%Cm`Q:$=oAPj9<Mx7Nry~T4G,OEzadUwYl(cDLVq]!*.t{_W@&0|>JB?)[}5+ShRkIFneiZKXbs', UU[GU[8]] = "" + (UU[GU[1]] || ""), UU[GU[19]] = UU[GU[8]].length, UU[GU[17]] = [], UU[GU[42]] = GU[1], UU[GU[9]] = GU[1], UU[GU[22 … [truncated]
+                 if (UU[GU[6]] = UU[GU[2]].indexOf(UU[GU[8]][UU[GU[26]]]), UU[GU[6]] !== -GU[2])
+                   if (UU[GU[22]] < GU[1]) UU[GU[22]] = UU[GU[6]];
```

#### 2509. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23350` → after: `L23610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23610) · [Before (L23350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23350)

```diff
-                     eM(MM[-EM[64]] += MM[-EM[62]] * EM[5], MM[EM[53]] |= MM[-EM[64]] << MM[EM[22]], MM[EM[22]] += (MM[-EM[64]] & EM[40]) > EM[41] ? EM[42] : EM[43]);
+                     RU(UU[GU[22]] += UU[GU[6]] * GU[28], UU[GU[42]] |= UU[GU[22]] << UU[GU[9]], UU[GU[9]] += (UU[GU[22]] & GU[29]) > GU[30] ? GU[31] : GU[32]);
```

#### 2510. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23352-L23355` → after: `L23612-L23615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23612-L23615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23612-L23615) · [Before (L23352-L23355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23352-L23355)

```diff
-                       eM(MM[EM[49]].push(MM[EM[53]] & EM[12]), MM[EM[53]] >>= EM[11], MM[EM[22]] -= EM[11])
-                     } while (MM[EM[22]] > EM[24]);
-                     MM[-EM[64]] = -EM[2]
-                   } return MM[-EM[64]] > -EM[2] && MM[EM[49]].push((MM[EM[53]] | MM[-EM[64]] << MM[EM[22]]) & EM[12]), GM(MM[EM[49]])
+                       RU(UU[GU[17]].push(UU[GU[42]] & GU[12]), UU[GU[42]] >>= GU[11], UU[GU[9]] -= GU[11])
+                     } while (UU[GU[9]] > GU[22]);
+                     UU[GU[22]] = -GU[2]
+                   } return UU[GU[22]] > -GU[2] && UU[GU[17]].push((UU[GU[42]] | UU[GU[22]] << UU[GU[9]]) & GU[12]), BU(UU[GU[17]])
```

#### 2511. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23357-L23358` → after: `L23617-L23635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23617-L23635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23617-L23635) · [Before (L23357-L23358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23357-L23358)

```diff
-           }(135) in CM && function(...MM) {
-             MM[EM[13]] = EM[1]
+           }(106) + "K" in ZU && function(...UU) {
+             RU(UU[GU[13]] = GU[1], UU[GU[5]] = function(...XU) {
+               return RU(XU[GU[13]] = GU[2], XU[GU[2]] = []), (XU[GU[1]] === GU[2] || XU[GU[1]] >= GU[17]) && UU[GU[2]](XU[GU[2]], [], XU[GU[1]], GU[1]), XU[GU[2]]
+             }, UU[GU[2]] = function(...XU) {
+               for (XU[GU[13]] = GU[17], XU[GU[17]] = XU[GU[4]]; XU[GU[17]] < XU[GU[25]]; XU[GU[17]]++) {
+                 if (XU[GU[2]].length !== XU[GU[17]]) return;
+                 for (XU[GU[0]] = GU[1]; XU[GU[0]] < XU[GU[25]]; XU[GU[0]]++) UU[GU[19]](XU[GU[2]], [XU[GU[17]], XU[GU[0]]]) && (RU(XU[GU[2]].push([XU[GU[17]], XU[GU[0]]]), UU[GU[2]](XU[GU[1]], XU[GU[2]], XU[GU[25]], XU[GU[17]] + GU[2])), XU[GU[2]].length === XU[GU[25]] && XU[GU[1 … [truncated]
+               }
+             }, UU[-GU[30]] = function(...UU) {
+               for (RU(UU[GU[13]] = GU[2], UU[GU[2]] = [], UU[GU[46]] = UU[GU[1]].length), UU[-GU[32]] = GU[1]; UU[-GU[32]] < UU[GU[46]]; UU[-GU[32]]++)
+                 for (UU[GU[2]][UU[-GU[32]]] = "", UU[GU[16]] = GU[1]; UU[GU[16]] < UU[GU[46]]; UU[GU[16]]++) UU[GU[2]][UU[-GU[32]]] += UU[GU[1]][UU[-GU[32]]][GU[2]] === UU[GU[16]] ? GU[47] : GU[48];
+               return UU[GU[2]]
+             }, UU[GU[19]] = function(...UU) {
+               for (RU(UU[GU[13]] = GU[25], UU[GU[25]] = UU[GU[1]].length), UU[GU[0]] = GU[1]; UU[GU[0]] < UU[GU[25]]; UU[GU[0]]++) {
+                 if (UU[GU[1]][UU[GU[0]]][GU[1]] === UU[GU[2]][GU[1]] || UU[GU[1]][UU[GU[0]]][GU[2]] === UU[GU[2]][GU[2]]) return GU[40];
+                 if (Math.abs((UU[GU[1]][UU[GU[0]]][GU[1]] - UU[GU[2]][GU[1]]) / (UU[GU[1]][UU[GU[0]]][GU[2]] - UU[GU[2]][GU[2]])) === GU[2]) return GU[40]
+ ... (3 more added lines; see GitHub link above)
```

#### 2512. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23363` → after: `L23640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23640) · [Before (L23363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23363)

```diff
-   39837: (MM, rM, iM) => {
+   39613: (UU, XU, zU) => {
```

#### 2513. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23369` → after: `L23646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23646) · [Before (L23369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23369)

```diff
-     var OM = iM(347),
+     var cU = zU(352),
```

#### 2514. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23371-L23391` → after: `L23648-L23668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23648-L23668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23648-L23668) · [Before (L23371-L23391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23371-L23391)

```diff
-       jM = iM(39846),
-       aM = iM(39083),
-       PM = iM(22),
-       nM = iM(3063),
-       QM = iM(38025),
-       zM = iM(38594),
-       LM = iM(38735),
-       mM = iM(38726),
-       HM = iM(332),
-       hM = iM(2e3),
-       JM = iM(605),
-       dM = iM(38907),
-       yM = iM(38451),
-       lM = iM(38217),
-       EM = iM(38233),
-       UM = iM(39852),
- ... (5 more removed lines; see GitHub link above)
+       QU = zU(39617),
+       AU = zU(38849),
+       FU = zU(31),
+       oU = zU(3043),
+       DU = zU(37812),
+       EU = zU(38370),
+       YU = zU(38500),
+       NU = zU(38494),
+       IU = zU(344),
+       pU = zU(1974),
+       aU = zU(625),
+       tU = zU(38667),
+       gU = zU(38232),
+       kU = zU(37977),
+       GU = zU(38004),
+       BU = zU(39621),
+ ... (5 more added lines; see GitHub link above)
```

#### 2515. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23431` → after: `L23708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23708) · [Before (L23431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23431)

```diff
-           cape: JM.g,
+           cape: aU.f,
```

#### 2516. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23439` → after: `L23716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23716) · [Before (L23439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23439)

```diff
-         PU: (rM, iM) => {
+         lG: (XU, zU) => {
```

#### 2517. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23448-L23449` → after: `L23725-L23726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23725-L23726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23725-L23726) · [Before (L23448-L23449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23448-L23449)

```diff
-             if (MM.cape = rM, rM === JM.g) return MM.mesh && oM(MM), !1;
-             const iM = (0, nM.f)();
+             if (UU.cape = XU, XU === aU.f) return UU.mesh && iU(UU), !1;
+             const zU = (0, oU.e)();
```

#### 2518. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23451` → after: `L23728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23728) · [Before (L23451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23451)

```diff
-               (0, eM.f)(MM.mesh.material, {
+               (0, PU.d)(UU.mesh.material, {
```

#### 2519. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23455` → after: `L23732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23732) · [Before (L23455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23455)

```diff
-             tM || (tM = aM.b.Player.capeMesh, gM = tM.aY().boundingBox, uM = 1 + gM.maximum.y - gM.minimum.y);
+             LU || (LU = AU.d.Player.capeMesh, eU = LU.gM().boundingBox, CU = 1 + eU.maximum.y - eU.minimum.y);
```

#### 2520. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23458` → after: `L23735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23735) · [Before (L23458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23458)

```diff
-               MM.mesh = tM.clone(`Cape|${MM.HZ}`, null);
+               UU.mesh = LU.clone(`Cape|${UU.iH}`, null);
```

#### 2521. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23460-L23463` → after: `L23737-L23740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23737-L23740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23737-L23740) · [Before (L23460-L23463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23460-L23463)

```diff
-               MM.defaultPosition = new bM.sh(0, (SM - gM.maximum.y + gM.minimum.y) / 2 - 1 / 32, -1).scaleInPlace(.12), MM.mesh.position = MM.defaultPosition.clone();
-               const jM = rM.rY[rM.eD][MM.HZ];
-               MM.mesh.isVisible = !(null !== jM && void 0 !== jM && jM._invisibleEffect) && !(null !== (iM = rM.hU.KrM(MM.HZ)) && void 0 !== iM && iM.drawnHidden);
-               const aM = rM.CL.Dk,
+               UU.defaultPosition = new WU.Sp(0, (yU - eU.maximum.y + eU.minimum.y) / 2 - 1 / 32, -1).scaleInPlace(.12), UU.mesh.position = UU.defaultPosition.clone();
+               const QU = XU.YM[XU.pM][UU.iH];
+               UU.mesh.isVisible = !(null !== QU && void 0 !== QU && QU._invisibleEffect) && !(null !== (zU = XU.xG.fzU(UU.iH)) && void 0 !== zU && zU.drawnHidden);
+               const AU = XU.WY.DH,
```

#### 2522. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23465-L23466` → after: `L23742-L23743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23742-L23743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23742-L23743) · [Before (L23465-L23466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23465-L23466)

```diff
-                   Zk: PM
-                 } = rM.hU.crM(MM.HZ),
+                   YH: FU
+                 } = XU.xG.vzU(UU.iH),
```

#### 2523. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23469` → after: `L23746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23746) · [Before (L23469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23469)

```diff
-                 Zk: PM,
+                 YH: FU,
```

#### 2524. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23479` → after: `L23756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23756) · [Before (L23479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23479)

```diff
-               MM.mesh.material = (0, eM.d)({
+               UU.mesh.material = (0, PU.b)({
```

#### 2525. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23481` → after: `L23758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23758) · [Before (L23481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23481)

```diff
-                 YJ: rM.CL.Hk(),
+                 sa: XU.WY.nS(),
```

#### 2526. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23490` → after: `L23767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23767) · [Before (L23490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23490)

```diff
-                   (0, GM.b)(MM), (0, CM.b)(MM, rM.CL), (0, lM.r)(MM, UM.c, QM, uM, gM.maximum.y), (0, lM.J)(MM), MM.castsSunShadow = !1
+                   (0, ZU.c)(UU), (0, RU.c)(UU, XU.WY), (0, kU.r)(UU, BU.e, DU, CU, eU.maximum.y), (0, kU.H)(UU), UU.castsSunShadow = !1
```

#### 2527. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23493` → after: `L23770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23770) · [Before (L23493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23493)

```diff
-               }).mirror, MM.mesh.sZ("aOpacity", 1), MM.mesh.xZ.aOpacity = null !== (OM = null === jM || void 0 === jM ? void 0 : jM.opacity) && void 0 !== OM ? OM : 1, (0, dM.e)(MM.mesh), MM.bones = QM, MM.paused = !1, (0, LM.getSmoothedPosition)(rM, MM.HZ, MM.lastPos), rM.CL.vJ( … [truncated]
+               }).mirror, UU.mesh.jH("aOpacity", 1), UU.mesh.XM.aOpacity = null !== (cU = null === QU || void 0 === QU ? void 0 : QU.opacity) && void 0 !== cU ? cU : 1, (0, tU.e)(UU.mesh), UU.bones = DU, UU.paused = !1, (0, YU.getSmoothedPosition)(XU, UU.iH, UU.lastPos), XU.WY.xa( … [truncated]
```

#### 2528. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23495` → after: `L23772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23772) · [Before (L23495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23495)

```diff
-           }(iM, MM), iM.invisibleSub = PM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|_invisibleEffect`, (OM => {
+           }(zU, UU), zU.invisibleSub = FU.k.subscribe(`otherEntitySettingsClientifiedEId|${XU}|_invisibleEffect`, (cU => {
```

#### 2529. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23497` → after: `L23774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23774) · [Before (L23497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23497)

```diff
-             iM.mesh && !iM.mesh.xG() && (iM.mesh.isVisible = !OM && !(null !== (SM = MM.hU.KrM(rM)) && void 0 !== SM && SM.drawnHidden))
+             zU.mesh && !zU.mesh.oR() && (zU.mesh.isVisible = !cU && !(null !== (yU = UU.xG.fzU(XU)) && void 0 !== yU && yU.drawnHidden))
```

#### 2530. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23500-L23501` → after: `L23777-L23778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23777-L23778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23777-L23778) · [Before (L23500-L23501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23500-L23501)

```diff
-         vW: (MM, rM) => {
-           PM.i.unsubscribe(rM.playerRankSub), rM.playerRankSub = null, oM(rM), PM.i.unsubscribe(rM.invisibleSub)
+         Cw: (UU, XU) => {
+           FU.k.unsubscribe(XU.playerRankSub), XU.playerRankSub = null, iU(XU), FU.k.unsubscribe(XU.invisibleSub)
```

#### 2531. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23503-L23504` → after: `L23780-L23781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23780-L23781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23780-L23781) · [Before (L23503-L23504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23503-L23504)

```diff
-         dU: (rM, iM) => {
-           const OM = Math.min((null !== rM && void 0 !== rM ? rM : 1 / 0) / 1e3, kM.maxDeltaTime),
+         JG: (XU, zU) => {
+           const cU = Math.min((null !== XU && void 0 !== XU ? XU : 1 / 0) / 1e3, uU.maxDeltaTime),
```

#### 2532. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23506-L23507` → after: `L23783-L23784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23783-L23784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23783-L23784) · [Before (L23506-L23507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23506-L23507)

```diff
-             jM = MM.zW / 1e3,
-             aM = hM.b.lerpWeight(kM.lerpSpeed * OM);
+             QU = UU.lC / 1e3,
+             AU = pU.e.lerpWeight(uU.lerpSpeed * cU);
```

#### 2533. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23509-L23511` → after: `L23786-L23788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23786-L23788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23786-L23788) · [Before (L23509-L23511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23509-L23511)

```diff
-             if (PM.mesh && ((0, QM.pausesOutOfView)(MM, PM.HZ, PM.attachedTo.Zk) ? PM.paused = !0 : (PM.paused && (PM.paused = !1, (0, LM.getSmoothedPosition)(MM, PM.HZ, PM.lastPos)), YM(PM, OM, SM, jM, aM, MM)), MM.CL.DJ)) {
-               const rM = MM.hU.vrM(PM.HZ)._lightLevels;
-               (0, yM.q)(PM.mesh, rM)
+             if (FU.mesh && ((0, DU.pausesOutOfView)(UU, FU.iH, FU.attachedTo.YH) ? FU.paused = !0 : (FU.paused && (FU.paused = !1, (0, YU.getSmoothedPosition)(UU, FU.iH, FU.lastPos)), MU(FU, cU, yU, QU, AU, UU)), UU.WY.ia)) {
+               const XU = UU.xG.qzU(FU.iH)._lightLevels;
+               (0, gU.s)(FU.mesh, XU)
```

#### 2534. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23519` → after: `L23796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23796) · [Before (L23519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23519)

```diff
-       MM.mesh && MM.attachedTo && !MM.mesh.xG() && (0, nM.f)().CL.Dk.detachTransformNodeIfFound(MM.mesh, MM.attachedTo.Zk, MM.attachedTo.nodeIndex), null === (rM = MM.mesh) || void 0 === rM || null === (iM = rM.material) || void 0 === iM || iM.dispose(), null === (OM = MM.mesh) | … [truncated]
+       UU.mesh && UU.attachedTo && !UU.mesh.oR() && (0, oU.e)().WY.DH.detachTransformNodeIfFound(UU.mesh, UU.attachedTo.YH, UU.attachedTo.nodeIndex), null === (XU = UU.mesh) || void 0 === XU || null === (zU = XU.material) || void 0 === zU || zU.dispose(), null === (cU = UU.mesh) | … [truncated]
```

#### 2535. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23526` → after: `L23803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23803) · [Before (L23526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23526)

```diff
-           url: iM(39858)(`./cape_${MM}.png`),
+           url: zU(39624)(`./cape_${UU}.png`),
```

#### 2536. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23529` → after: `L23806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23806) · [Before (L23529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23529)

```diff
-           samplingMode: EM.i.nearestNearestMipLinear
+           samplingMode: GU.f.nearestNearestMipLinear
```

#### 2537. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23531` → after: `L23808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23808) · [Before (L23531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23531)

```diff
-         rM = (0, EM.u)((0, nM.f)().CL.Hk(), OM), (0, EM.R)(rM), RM.set(MM, rM)
+         XU = (0, GU.s)((0, oU.e)().WY.nS(), cU), (0, GU.P)(XU), wU.set(UU, XU)
```

#### 2538. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23540` → after: `L23817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23817) · [Before (L23540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23540)

```diff
-       const QM = MM.HZ;
+       const DU = UU.iH;
```

#### 2539. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23542` → after: `L23819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23819) · [Before (L23542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23542)

```diff
-       const JM = aM.hU.getState(QM, "updateWalkingState"),
+       const aU = AU.xG.getState(DU, "updateWalkingState"),
```

#### 2540. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23545` → after: `L23822`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23822) · [Before (L23545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23545)

```diff
-       const lM = aM.hU.grM(QM);
+       const kU = AU.xG.azU(DU);
```

#### 2541. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23550` → after: `L23827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23827) · [Before (L23550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23550)

```diff
-           const MM = nM[0] * hM.b.friction(kM.friction.exp * rM),
+           const UU = oU[0] * pU.e.friction(uU.friction.exp * XU),
```

#### 2542. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23552` → after: `L23829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23829) · [Before (L23552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23552)

```diff
-           Math.abs(MM) > Math.abs(iM) ? nM[0] = MM : nM[0] = iM, nM[0] += kM.angle.def
+           Math.abs(UU) > Math.abs(zU) ? oU[0] = UU : oU[0] = zU, oU[0] += uU.angle.def
```

#### 2543. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23556-L23558` → after: `L23833-L23835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23833-L23835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23833-L23835) · [Before (L23556-L23558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23556-L23558)

```diff
-           const jM = aM.hU.getState(QM, "meshRotation"),
-             PM = jM.eL ? (0, zM.getRemoteTargetHeading)(aM, jM) : jM.renderRotation[1],
-             mM = (0, HM.Eb)(PM);
+           const QU = AU.xG.getState(DU, "meshRotation"),
+             FU = QU.dY ? (0, EU.getRemoteTargetHeading)(AU, QU) : QU.renderRotation[1],
+             NU = (0, IU.Hb)(FU);
```

#### 2544. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23561` → after: `L23838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23838) · [Before (L23561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23561)

```diff
-             dM = aM.hU.Av(QM);
+             tU = AU.xG.Bx(DU);
```

#### 2545. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23563` → after: `L23840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23840) · [Before (L23563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23563)

```diff
-           if (dM ? yM = dM.dd : (SM().sub(pM, JM, MM.lastPos), SM().scale(pM, pM, iM > 0 ? 1 / iM : 0), yM = pM), OM = SM().dot(yM, mM) * kM.vel.self * rM, nM[0] > kM.angle.softMax && nM.at(-3) > kM.angle.softMax) {
+           if (tU ? gU = tU.Et : (yU().sub(qU, aU, UU.lastPos), yU().scale(qU, qU, zU > 0 ? 1 / zU : 0), gU = qU), cU = yU().dot(gU, NU) * uU.vel.self * XU, oU[0] > uU.angle.softMax && oU.at(-3) > uU.angle.softMax) {
```

#### 2546. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23572` → after: `L23849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23849) · [Before (L23572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23572)

```diff
-         yM = (0, hM.B)(sM / MM.bones.skeleLen, 0, PM)
+         gU = (0, pU.y)(SU / UU.bones.skeleLen, 0, FU)
```

#### 2547. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23575` → after: `L23852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23852) · [Before (L23575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23575)

```diff
-       for (let SM = nM.length - 3; SM > 0; SM -= 3) nM[SM] = (0, hM.B)(nM[SM], nM[SM - 3] - yM, jM);
+       for (let yU = oU.length - 3; yU > 0; yU -= 3) oU[yU] = (0, pU.y)(oU[yU], oU[yU - 3] - gU, QU);
```

#### 2548. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23583` → after: `L23860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23860) · [Before (L23583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23583)

```diff
-       const OM = MM.hU.getState(rM, "cape"),
+       const cU = UU.xG.getState(XU, "cape"),
```

#### 2549. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23589` → after: `L23866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23866) · [Before (L23589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23589)

```diff
-       } = MM.hU.grM(rM), aM = "gliding" === jM || "sleeping" === jM, PM = aM ? 0 : kM.angle.def, nM = aM ? 0 : sM / OM.bones.skeleLen, QM = aM ? 0 : Math.sin(Math.abs(MM.hU.getState(rM, "updateWalkingState").walkingAngle)) * DM;
+       } = UU.xG.azU(XU), AU = "gliding" === QU || "sleeping" === QU, FU = AU ? 0 : uU.angle.def, oU = AU ? 0 : SU / cU.bones.skeleLen, DU = AU ? 0 : Math.sin(Math.abs(UU.xG.getState(XU, "updateWalkingState").walkingAngle)) * rU;
```

#### 2550. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23600` → after: `L23877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23877) · [Before (L23600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23600)

```diff
-   39898: (MM, rM, iM) => {
+   39679: (UU, XU, zU) => {
```

#### 2551. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23604-L23605` → after: `L23881-L23882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23881-L23882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23881-L23882) · [Before (L23604-L23605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23604-L23605)

```diff
-     var OM = iM(38755),
-       SM = iM(4069);
+     var cU = zU(38531),
+       yU = zU(4063);
```

#### 2552. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23614-L23615` → after: `L23891-L23892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23891-L23892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23891-L23892) · [Before (L23614-L23615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23614-L23615)

```diff
-         PU: function(MM, rM) {},
-         vW: null,
+         lG: function(UU, XU) {},
+         Cw: null,
```

#### 2553. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23618-L23620` → after: `L23895-L23897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23895-L23897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23895-L23897) · [Before (L23618-L23620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23618-L23620)

```diff
-             const rM = jM.HZ,
-               iM = MM.hU.Av(rM);
-             iM.preventFallOffEdge && !jM._preventFallOffLastTick && (0, SM.uR)();
+             const XU = QU.iH,
+               zU = UU.xG.Bx(XU);
+             zU.preventFallOffEdge && !QU._preventFallOffLastTick && (0, yU.lL)();
```

#### 2554. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23625` → after: `L23902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23902) · [Before (L23625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23625)

```diff
-             } = MM.hU.grM(rM), QM = (0, OM.e)(aM, PM, nM, jM._preventFallOffLastTick);
+             } = UU.xG.azU(XU), DU = (0, cU.j)(AU, FU, oU, QU._preventFallOffLastTick);
```

#### 2555. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23632` → after: `L23909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23909) · [Before (L23632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23632)

```diff
-   39888: (MM, rM, iM) => {
+   39670: (UU, XU, zU) => {
```

#### 2556. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23637` → after: `L23914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23914) · [Before (L23637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23637)

```diff
-     var OM = iM(39890);
+     var cU = zU(39675);
```

#### 2557. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23647-L23648` → after: `L23924-L23925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23924-L23925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23924-L23925) · [Before (L23647-L23648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23647-L23648)

```diff
-         PU: function(MM, rM) {},
-         vW: function(MM, rM) {},
+         lG: function(UU, XU) {},
+         Cw: function(UU, XU) {},
```

#### 2558. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23652` → after: `L23929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23929) · [Before (L23652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23652)

```diff
-             OM.length && MM.hU.bZ(OM[0].HZ, "doOnFirstTick")
+             cU.length && UU.xG.nH(cU[0].iH, "doOnFirstTick")
```

#### 2559. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23662` → after: `L23939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23939) · [Before (L23662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23662)

```diff
-   39907: (MM, rM, iM) => {
+   39682: (UU, XU, zU) => {
```

#### 2560. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23666-L23677` → after: `L23943-L23987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23943-L23987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23943-L23987) · [Before (L23666-L23677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23666-L23677)

```diff
-     var OM = iM(22),
-       SM = iM(9419),
-       jM = iM(37761),
-       aM = iM(313),
-       PM = iM(38235),
-       nM = iM(39910),
-       QM = iM(39715),
-       zM = iM(39726),
-       LM = iM(39916),
-       mM = iM(38130),
-       HM = iM(19),
-       hM = iM(39922);
+     var cU = zU(31),
+       yU = zU(9395),
+       QU = zU(37532),
+       AU = zU(320),
+       FU = zU(38007),
+       oU = zU(39686),
+       DU = zU(39502),
+       EU = zU(39510),
+       YU = zU(39691),
+       NU = zU(37888),
+       IU = zU(27),
+       pU = zU(39697);
+ 
+     function aU(UU, XU, zU) {
+       const cU = [];
+       let yU = 0;
+ ... (29 more added lines; see GitHub link above)
```

#### 2561. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23686` → after: `L23996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R23996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L23996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L23996) · [Before (L23686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23686)

```diff
-             for (const MM of jM.items)(0, nM.l)(MM.content, MM.sizeCache.x, jM.y, jM.height, OM, MM.sizeCache.width, SM);
+             for (const UU of QU.items)(0, oU.q)(UU.content, UU.sizeCache.x, QU.y, QU.height, cU, UU.sizeCache.width, yU);
```

#### 2562. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23690` → after: `L24000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24000) · [Before (L23690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23690)

```diff
-             MM.items.length > 0 && (0, nM.o)(MM.items.map((MM => MM.content)), 0, MM.y, MM.height, OM, SM)
+             UU.items.length > 0 && (0, oU.u)(UU.items.map((UU => UU.content)), 0, UU.y, UU.height, cU, yU)
```

#### 2563. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23695` → after: `L24005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24005) · [Before (L23695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23695)

```diff
-         MM.hU.GrM(rM.planeEId) || function(rM) {
+         UU.xG.DzU(XU.planeEId) || function(XU) {
```

#### 2564. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23700` → after: `L24010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24010) · [Before (L23700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23700)

```diff
-           } = (0, nM.i)(MM, rM.HZ, `${rM.HZ}MultilineText`);
+           } = (0, oU.m)(UU, XU.iH, `${XU.iH}MultilineText`);
```

#### 2565. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23716` → after: `L24026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24026) · [Before (L23716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23716)

```diff
-         (0, PM.I)(rM.texture, OM.width, OM.height), rM.plane.UL.set(OM.width * nM.f.TEXT_PLANE_RATIO, OM.height * nM.f.TEXT_PLANE_RATIO, 1), EM(rM, OM), rM.sizeCache = OM
+         (0, FU.B)(XU.texture, cU.width, cU.height), XU.plane.RY.set(cU.width * oU.f.TEXT_PLANE_RATIO, cU.height * oU.f.TEXT_PLANE_RATIO, 1), GU(XU, cU), XU.sizeCache = cU
```

#### 2566. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23763` → after: `L24040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24040) · [Before (L23763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23763)

```diff
-         if ((0, zM.c)(MM)) return void(rM.newMessageWhileLost ||= !SM);
+         if ((0, EU.d)(UU)) return void(XU.newMessageWhileLost ||= !yU);
```

#### 2567. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23771-L23772` → after: `L24048-L24049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24048-L24049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24048-L24049) · [Before (L23771-L23772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23771-L23772)

```diff
-           const rM = (0, nM.q)(MM.content, nM.f.DEFAULT_FONT_SIZE),
-             iM = (0, nM.w)(),
+           const XU = (0, oU.v)(UU.content, oU.f.DEFAULT_FONT_SIZE),
+             zU = (0, oU.A)(),
```

#### 2568. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23780-L23781` → after: `L24057-L24058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24057-L24058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24057-L24058) · [Before (L23780-L23781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23780-L23781)

```diff
-             if ((0, nM.s)(jM)) {
-               const MM = (0, nM.r)(jM);
+             if ((0, oU.y)(QU)) {
+               const UU = (0, oU.x)(QU);
```

#### 2569. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23794-L23795` → after: `L24071-L24072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24071-L24072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24071-L24072) · [Before (L23794-L23795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23794-L23795)

```diff
-                 iM = OM[OM.length - 1].items.reduce(((MM, rM) => MM + ((0, nM.s)(rM.content) ? (0, hM.d)((0, nM.r)(rM.content)) : rM.numCharacters)), 0),
-                 SM = (0, hM.g)(MM, iM);
+                 zU = cU[cU.length - 1].items.reduce(((UU, XU) => UU + ((0, oU.y)(XU.content) ? (0, pU.c)((0, oU.x)(XU.content)) : XU.numCharacters)), 0),
+                 yU = (0, pU.d)(UU, zU);
```

#### 2570. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23821` → after: `L24098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24098) · [Before (L23821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23821)

```diff
-               } = (0, nM.g)(jM.items.map((MM => MM.content)), iM);
+               } = (0, oU.i)(QU.items.map((UU => UU.content)), zU);
```

#### 2571. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23833` → after: `L24110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24110) · [Before (L23833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23833)

```diff
-             for (const MM of iM.items)(0, nM.s)(MM.content) ? rM += (0, nM.r)(MM.content).length : rM += 1;
+             for (const UU of zU.items)(0, oU.y)(UU.content) ? XU += (0, oU.x)(UU.content).length : XU += 1;
```

#### 2572. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23836-L23837` → after: `L24113-L24114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24113-L24114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24113-L24114) · [Before (L23836-L23837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23836-L23837)

```diff
-         const QM = (0, PM.k)(rM.texture);
-         QM.clearRect(0, 0, rM.sizeCache.width, rM.sizeCache.height), QM.fillStyle = null !== (OM = rM.processedTextBox.backgroundColor) && void 0 !== OM ? OM : "#22283b", QM.fillRect(0, 0, rM.sizeCache.width, rM.sizeCache.height), rM.drawnCharCount > 0 ? iM(rM, yM(rM.processedTex … [truncated]
+         const DU = (0, FU.g)(XU.texture);
+         DU.clearRect(0, 0, XU.sizeCache.width, XU.sizeCache.height), DU.fillStyle = null !== (cU = XU.processedTextBox.backgroundColor) && void 0 !== cU ? cU : "#22283b", DU.fillRect(0, 0, XU.sizeCache.width, XU.sizeCache.height), XU.drawnCharCount > 0 ? zU(XU, aU(XU.processedTex … [truncated]
```

#### 2573. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23842-L23845` → after: `L24119-L24122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24119-L24122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24119-L24122) · [Before (L23842-L23845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23842-L23845)

```diff
-         const mM = MM.hU.ziM(rM.planeEId);
-         let HM = null !== (OM = rM.yOffset) && void 0 !== OM ? OM : 2.1;
-         const hM = MM.hU.XE(rM.HZ),
-           JM = MM.hU.XE(MM.eD);
+         const NU = UU.xG.bzU(XU.planeEId);
+         let IU = null !== (cU = XU.yOffset) && void 0 !== cU ? cU : 2.1;
+         const pU = UU.xG.wG(XU.iH),
+           aU = UU.xG.wG(UU.pM);
```

#### 2574. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23849` → after: `L24126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24126) · [Before (L23849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23849)

```diff
-           const rM = MM.camera.eT();
+           const XU = UU.camera.R_();
```

#### 2575. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23855` → after: `L24132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24132) · [Before (L23855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23855)

```diff
-           GM = null !== (SM = rM.xOffset) && void 0 !== SM ? SM : .6;
+           ZU = null !== (yU = XU.xOffset) && void 0 !== yU ? yU : .6;
```

#### 2576. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23862-L23864` → after: `L24139-L24141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24139-L24141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24139-L24141) · [Before (L23862-L23864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23862-L23864)

```diff
-         const bM = MM.hU.grM(rM.HZ);
-         HM += null !== (jM = null === bM || void 0 === bM || null === (aM = bM.meshOffset) || void 0 === aM ? void 0 : aM[1]) && void 0 !== jM ? jM : 0, CM += null !== (PM = null === bM || void 0 === bM || null === (QM = bM.meshOffset) || void 0 === QM ? void 0 : QM[0]) && void 0 … [truncated]
-         HM -= iM.height * nM.f.TEXT_PLANE_RATIO / 2, MM.hU.GrM(rM.planeEId) && (mM.offset[1] = HM, mM.offset[0] = CM, mM.offset[2] = eM)
+         const WU = UU.xG.azU(XU.iH);
+         IU += null !== (QU = null === WU || void 0 === WU || null === (AU = WU.meshOffset) || void 0 === AU ? void 0 : AU[1]) && void 0 !== QU ? QU : 0, RU += null !== (FU = null === WU || void 0 === WU || null === (DU = WU.meshOffset) || void 0 === DU ? void 0 : DU[0]) && void 0 … [truncated]
+         IU -= zU.height * oU.f.TEXT_PLANE_RATIO / 2, UU.xG.DzU(XU.planeEId) && (NU.offset[1] = IU, NU.offset[0] = RU, NU.offset[2] = PU)
```

#### 2577. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23868` → after: `L24145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24145) · [Before (L23868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23868)

```diff
-         return MM.hU.GrM(rM.planeEId) ? (rM.missingPlaneLogged = !1, rM.plane) : (rM.missingPlaneLogged || (0, zM.c)(MM) || (rM.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
+         return UU.xG.DzU(XU.planeEId) ? (XU.missingPlaneLogged = !1, XU.plane) : (XU.missingPlaneLogged || (0, EU.d)(UU) || (XU.missingPlaneLogged = !0, console.error("planeEId mesh did not exist")), null)
```

#### 2578. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23872` → after: `L24149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24149) · [Before (L23872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23872)

```diff
-         const iM = MM.hU.getState(rM.HZ, "hidingMeshManager");
+         const zU = UU.xG.getState(XU.iH, "hidingMeshManager");
```

#### 2579. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23875-L23876` → after: `L24152-L24153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24152-L24153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24152-L24153) · [Before (L23875-L23876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23875-L23876)

```diff
-       return (0, zM.e)(MM.CL.Hk(), (() => {
-         for (const iM of MM.hU.iZ(rM)) {
+       return (0, EU.h)(UU.WY.nS(), (() => {
+         for (const zU of UU.xG.uH(XU)) {
```

#### 2580. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23906-L23909` → after: `L24183-L24186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24183-L24186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24183-L24186) · [Before (L23906-L23909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23906-L23909)

```diff
-         PU: function(rM, iM) {
-           iM._visibilityCombinator = new jM.d((rM => {
-             (0, mM.p)(MM, iM.planeEId, rM)
-           })), iM.hideNametagSub = OM.i.subscribe("appManagerUpdated|areNametagsHidden", (MM => {
+         lG: function(XU, zU) {
+           zU._visibilityCombinator = new QU.e((XU => {
+             (0, NU.k)(UU, zU.planeEId, XU)
+           })), zU.hideNametagSub = cU.k.subscribe("appManagerUpdated|areNametagsHidden", (UU => {
```

#### 2581. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23911` → after: `L24188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24188) · [Before (L23911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23911)

```diff
-           })), iM._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !HM.d.get("areNametagsHidden")), GM(iM), iM.textBoxSub = OM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|multilineTextBox`, (MM => {
+           })), zU._visibilityCombinator.setBooleanType("multilineTextBoxEnabled", !IU.e.get("areNametagsHidden")), ZU(zU), zU.textBoxSub = cU.k.subscribe(`otherEntitySettingsClientifiedEId|${XU}|multilineTextBox`, (UU => {
```

#### 2582. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23914` → after: `L24191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24191) · [Before (L23914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23914)

```diff
-           iM.unsubscribeKeyPromptChanges = (0, SM.r)((() => {
+           zU.unsubscribeKeyPromptChanges = (0, yU.s)((() => {
```

#### 2583. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23916-L23917` → after: `L24193-L24194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24193-L24194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24193-L24194) · [Before (L23916-L23917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23916-L23917)

```diff
-             null !== (MM = iM.textBox) && void 0 !== MM && null !== (rM = MM.content) && void 0 !== rM && rM.some(aM.nb) && lM(iM, !0)
-           })), MM.eD in MM.rY && rM in MM.rY[MM.eD] && "multilineTextBox" in MM.rY[MM.eD][rM] && (iM.textBox = MM.rY[MM.eD][rM].multilineTextBox), lM(iM)
+             null !== (UU = zU.textBox) && void 0 !== UU && null !== (XU = UU.content) && void 0 !== XU && XU.some(AU.yb) && kU(zU, !0)
+           })), UU.pM in UU.YM && XU in UU.YM[UU.pM] && "multilineTextBox" in UU.YM[UU.pM][XU] && (zU.textBox = UU.YM[UU.pM][XU].multilineTextBox), kU(zU)
```

#### 2584. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23923` → after: `L24200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24200) · [Before (L23923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23923)

```diff
-             iM && ((0, nM.A)(iM, (0, LM.q)(null === (OM = SM.textBox) || void 0 === OM ? void 0 : OM.visibleThroughWalls, MM.aU.canSeeNametagsThroughWalls)), GM(SM), null !== SM.timeSinceAnimationStart && SM.textBox && (SM.timeSinceAnimationStart += rM, SM.toDrawCharCount = Math. … [truncated]
+             zU && ((0, oU.E)(zU, (0, YU.q)(null === (cU = yU.textBox) || void 0 === cU ? void 0 : cU.visibleThroughWalls, UU.mG.canSeeNametagsThroughWalls)), ZU(yU), null !== yU.timeSinceAnimationStart && yU.textBox && (yU.timeSinceAnimationStart += XU, yU.toDrawCharCount = Math. … [truncated]
```

#### 2585. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23926` → after: `L24203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24203) · [Before (L23926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23926)

```diff
-         dU: function(rM, iM) {
+         JG: function(XU, zU) {
```

#### 2586. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23932-L23934` → after: `L24209-L24211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24209-L24211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24209-L24211) · [Before (L23932-L23934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23932-L23934)

```diff
-               const iM = (0, nM.A)(rM, (0, LM.q)(null === (OM = SM.textBox) || void 0 === OM ? void 0 : OM.visibleThroughWalls, MM.aU.canSeeNametagsThroughWalls)),
-                 jM = (0, LM.t)(MM, SM.HZ, SM.planeEId, iM);
-               (0, LM.h)(MM, SM.planeEId), rM.UL.set(SM.sizeCache.width * nM.f.TEXT_PLANE_RATIO * jM, SM.sizeCache.height * nM.f.TEXT_PLANE_RATIO * jM, 1)
+               const zU = (0, oU.E)(XU, (0, YU.q)(null === (cU = yU.textBox) || void 0 === cU ? void 0 : cU.visibleThroughWalls, UU.mG.canSeeNametagsThroughWalls)),
+                 QU = (0, YU.u)(UU, yU.iH, yU.planeEId, zU);
+               (0, YU.j)(UU, yU.planeEId), XU.RY.set(yU.sizeCache.width * oU.f.TEXT_PLANE_RATIO * QU, yU.sizeCache.height * oU.f.TEXT_PLANE_RATIO * QU, 1)
```

#### 2587. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23938` → after: `L24215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24215) · [Before (L23938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23938)

```diff
-         vW: function(rM, iM) {
+         Cw: function(XU, zU) {
```

#### 2588. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23940` → after: `L24217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24217) · [Before (L23940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23940)

```diff
-           MM.hU.deleteEntity(iM.planeEId), OM.i.unsubscribe(iM.textBoxSub), OM.i.unsubscribe(iM.hideNametagSub), null === (SM = iM.unsubscribeKeyPromptChanges) || void 0 === SM || SM.call(iM)
+           UU.xG.deleteEntity(zU.planeEId), cU.k.unsubscribe(zU.textBoxSub), cU.k.unsubscribe(zU.hideNametagSub), null === (yU = zU.unsubscribeKeyPromptChanges) || void 0 === yU || yU.call(zU)
```

#### 2589. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23945` → after: `L24222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24222) · [Before (L23945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23945)

```diff
-   39930: (MM, rM, iM) => {
+   39704: (UU, XU, zU) => {
```

#### 2590. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23949` → after: `L24226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24226) · [Before (L23949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23949)

```diff
-     var OM = iM(347),
+     var cU = zU(352),
```

#### 2591. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23951-L23977` → after: `L24228-L24254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24228-L24254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24228-L24254) · [Before (L23951-L23977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23951-L23977)

```diff
-       jM = iM(38235),
-       aM = iM(39352),
-       PM = iM(38294),
-       nM = iM(39916),
-       QM = iM(39376),
-       zM = iM(22),
-       LM = iM(9419),
-       mM = iM(313),
-       HM = iM(605),
-       hM = iM(3063),
-       JM = iM(83),
-       dM = iM(37722),
-       yM = iM(39471),
-       lM = iM(37761),
-       EM = iM(37624),
-       UM = iM(39910),
- ... (11 more removed lines; see GitHub link above)
+       QU = zU(38007),
+       AU = zU(39142),
+       FU = zU(38053),
+       oU = zU(39691),
+       DU = zU(39166),
+       EU = zU(31),
+       YU = zU(9395),
+       NU = zU(320),
+       IU = zU(625),
+       pU = zU(3043),
+       aU = zU(97),
+       tU = zU(37487),
+       gU = zU(39250),
+       kU = zU(37532),
+       GU = zU(37414),
+       BU = zU(39686),
+ ... (11 more added lines; see GitHub link above)
```

#### 2592. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L23994` → after: `L24271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24271) · [Before (L23994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L23994)

```diff
-         return Number.isFinite(iM) && iM > 0 ? iM : rM
+         return Number.isFinite(zU) && zU > 0 ? zU : XU
```

#### 2593. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24008` → after: `L24285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24285) · [Before (L24008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24008)

```diff
-         const OM = null !== (iM = MM.applyTo) && void 0 !== iM ? iM : "both";
+         const cU = null !== (zU = UU.applyTo) && void 0 !== zU ? zU : "both";
```

#### 2594. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24014` → after: `L24291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24291) · [Before (L24014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24014)

```diff
-         return "glow" === MM.style ? 3 * rM : Math.ceil(rM / 2) + 1
+         return "glow" === UU.style ? 3 * XU : Math.ceil(XU / 2) + 1
```

#### 2595. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24028` → after: `L24305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24305) · [Before (L24028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24028)

```diff
-         return Math.round(SM().RQ(MM.hU.XE(MM.eD), MM.hU.XE(rM)))
+         return Math.round(yU().OD(UU.xG.wG(UU.pM), UU.xG.wG(XU)))
```

#### 2596. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24032-L24033` → after: `L24309-L24310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24309-L24310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24309-L24310) · [Before (L24032-L24033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24032-L24033)

```diff
-         const rM = xM(MM.HZ),
-           iM = (0, EM.c)(rM, MM._lastUpdateDist, MM._lastUpdateTime);
+         const XU = sU(UU.iH),
+           zU = (0, GU.b)(XU, UU._lastUpdateDist, UU._lastUpdateTime);
```

#### 2597. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24039` → after: `L24316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24316) · [Before (L24039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24039)

```diff
-         return rM !== MM.eD && "Player" === iM.getLifeformType(rM) && (0, GM.f)(iM.getRawEntityName(rM), CM.c.shown)
+         return XU !== UU.pM && "Player" === zU.getLifeformType(XU) && (0, ZU.i)(zU.getRawEntityName(XU), RU.c.shown)
```

#### 2598. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24045-L24047` → after: `L24322-L24324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24322-L24324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24322-L24324) · [Before (L24045-L24047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24045-L24047)

```diff
-         const iM = (0, UM.g)(MM.content, (0, UM.w)()),
-           SM = (0, UM.g)(MM.subtitle, (0, UM.w)()),
-           jM = (0, UM.h)(rM),
+         const zU = (0, BU.i)(UU.content, (0, BU.A)()),
+           yU = (0, BU.i)(UU.subtitle, (0, BU.A)()),
+           QU = (0, BU.l)(XU),
```

#### 2599. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24052` → after: `L24329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24329) · [Before (L24052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24052)

```diff
-             return "never" === (null !== (rM = null === (iM = MM.healthbar) || void 0 === iM ? void 0 : iM.display) && void 0 !== rM ? rM : "onDamage") ? 0 : OM(MM) + NM(MM)
+             return "never" === (null !== (XU = null === (zU = UU.healthbar) || void 0 === zU ? void 0 : zU.display) && void 0 !== XU ? XU : "onDamage") ? 0 : cU(UU) + vU(UU)
```

#### 2600. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24071` → after: `L24348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24348) · [Before (L24071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24071)

```diff
-           QM = (0, jM.k)(nM),
+           DU = (0, QU.g)(oU),
```

#### 2601. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24082` → after: `L24359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24359) · [Before (L24082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24082)

```diff
-               LM = wM.e.getTexture(PM, tM.f.ICON).url,
+               YU = dU.c.getTexture(FU, LU.j.ICON).url,
```

#### 2602. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24097` → after: `L24374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24374) · [Before (L24097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24097)

```diff
-         if ((0, UM.o)(MM.content, dM, JM, PM.height.content, nM, LM), MM.subtitle) {
+         if ((0, BU.u)(UU.content, tU, aU, FU.height.content, oU, YU), UU.subtitle) {
```

#### 2603. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24100` → after: `L24377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24377) · [Before (L24100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24100)

```diff
-           QM.fillStyle = MM.subtitleBackgroundColor, QM.fillRect(HM, JM, mM, PM.height.subtitle), (0, UM.o)(MM.subtitle, rM, JM, PM.height.subtitle, nM, LM)
+           DU.fillStyle = UU.subtitleBackgroundColor, DU.fillRect(IU, aU, NU, FU.height.subtitle), (0, BU.u)(UU.subtitle, XU, aU, FU.height.subtitle, oU, YU)
```

#### 2604. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24117` → after: `L24394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24394) · [Before (L24117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24117)

```diff
-             const jM = [...SM && SM.length > 0 ? SM : rM].sort(((MM, rM) => MM.healthFraction - rM.healthFraction)),
+             const QU = [...yU && yU.length > 0 ? yU : XU].sort(((UU, XU) => UU.healthFraction - XU.healthFraction)),
```

#### 2605. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24119` → after: `L24396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24396) · [Before (L24119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24119)

```diff
-             return (null !== aM && void 0 !== aM ? aM : jM[jM.length - 1]).colour
+             return (null !== AU && void 0 !== AU ? AU : QU[QU.length - 1]).colour
```

#### 2606. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24179` → after: `L24456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24456) · [Before (L24179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24179)

```diff
-         null !== rM.planeEId && (MM.hU.deleteEntity(rM.planeEId), rM.planeEId = null, rM._planeMesh = null, rM._planeTexture = null, rM._lightState = null, rM._scaleX = NaN, rM._scaleY = NaN, rM._offsetY = NaN)
+         null !== XU.planeEId && (UU.xG.deleteEntity(XU.planeEId), XU.planeEId = null, XU._planeMesh = null, XU._planeTexture = null, XU._lightState = null, XU._scaleX = NaN, XU._scaleY = NaN, XU._offsetY = NaN)
```

#### 2607. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24189-L24190` → after: `L24466-L24467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24466-L24467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24466-L24467) · [Before (L24189-L24190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24189-L24190)

```diff
-           } = (0, UM.i)(MM, rM.HZ, `${rM.HZ}NameTag`, 1, 1, !0);
-           rM.planeEId = iM, rM._planeMesh = OM, rM._planeTexture = jM, rM._lightState = aM, MM.hU.ziM(iM).diM = (iM, OM) => {
+           } = (0, BU.m)(UU, XU.iH, `${XU.iH}NameTag`, 1, 1, !0);
+           XU.planeEId = zU, XU._planeMesh = cU, XU._planeTexture = QU, XU._lightState = AU, UU.xG.bzU(zU).ycU = (zU, cU) => {
```

#### 2608. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24193` → after: `L24470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24470) · [Before (L24193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24193)

```diff
-               const QM = null !== (iM = null === (OM = MM.rY[MM.eD][rM.HZ]) || void 0 === OM ? void 0 : OM.meshScaling) && void 0 !== iM ? iM : {},
+               const DU = null !== (zU = null === (cU = UU.YM[UU.pM][XU.iH]) || void 0 === cU ? void 0 : cU.meshScaling) && void 0 !== zU ? zU : {},
```

#### 2609. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24196-L24199` → after: `L24473-L24476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24473-L24476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24473-L24476) · [Before (L24196-L24199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24196-L24199)

```diff
-                 mM = zr(rM.HZ),
-                 HM = (0, hM.b)().Aq(rM.HZ);
-               let JM = (null !== (jM = rM.nameYOffset) && void 0 !== jM ? jM : WM.b) * HM;
-               const dM = MM.hU.grM(rM.HZ);
+                 NU = EX(XU.iH),
+                 IU = (0, pU.b)().o_(XU.iH);
+               let aU = (null !== (QU = XU.nameYOffset) && void 0 !== QU ? QU : OU.e) * IU;
+               const tU = UU.xG.azU(XU.iH);
```

#### 2610. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24201` → after: `L24478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24478) · [Before (L24201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24201)

```diff
-                 const MM = (0, hM.b)().getLifeformType(rM.HZ);
+                 const UU = (0, pU.b)().getLifeformType(XU.iH);
```

#### 2611. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24203` → after: `L24480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24480) · [Before (L24203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24203)

```diff
-                 if (null !== MM) JM += (null !== (lM = null === (EM = (0, yM.d)(MM).poseNameRise) || void 0 === EM ? void 0 : EM[dM.pose]) && void 0 !== lM ? lM : 0) * HM
+                 if (null !== UU) aU += (null !== (kU = null === (GU = (0, gU.b)(UU).poseNameRise) || void 0 === GU ? void 0 : GU[tU.pose]) && void 0 !== kU ? kU : 0) * IU
```

#### 2612. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24205-L24206` → after: `L24482-L24483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24482-L24483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24482-L24483) · [Before (L24205-L24206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24205-L24206)

```diff
-               if (JM += null !== (aM = null === dM || void 0 === dM || null === (PM = dM.meshOffset) || void 0 === PM ? void 0 : PM[1]) && void 0 !== aM ? aM : 0, mM) {
-                 const iM = .23 * (SM().RQ(MM.hU.XE(MM.eD), MM.hU.XE(rM.HZ)) - nM.f) / nM.f;
+               if (aU += null !== (AU = null === tU || void 0 === tU || null === (FU = tU.meshOffset) || void 0 === FU ? void 0 : FU[1]) && void 0 !== AU ? AU : 0, NU) {
+                 const zU = .23 * (yU().OD(UU.xG.wG(UU.pM), UU.xG.wG(XU.iH)) - oU.g) / oU.g;
```

#### 2613. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24215-L24218` → after: `L24492-L24495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24492-L24495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24492-L24495) · [Before (L24215-L24218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24215-L24218)

```diff
-         (0, jM.I)(OM, aM.width, aM.height), cM(rM, UM.f.TEXT_PLANE_RATIO * aM.width, UM.f.TEXT_PLANE_RATIO * aM.height), rM._layoutHeight = UM.f.TEXT_PLANE_RATIO * aM.height;
-         const PM = (0, UM.g)(iM.content, (0, UM.w)()),
-           QM = (0, UM.g)(iM.subtitle, (0, UM.w)()),
-           zM = (0, UM.h)(rM.effects);
+         (0, QU.B)(cU, AU.width, AU.height), hU(XU, BU.f.TEXT_PLANE_RATIO * AU.width, BU.f.TEXT_PLANE_RATIO * AU.height), XU._layoutHeight = BU.f.TEXT_PLANE_RATIO * AU.height;
+         const FU = (0, BU.i)(zU.content, (0, BU.A)()),
+           DU = (0, BU.i)(zU.subtitle, (0, BU.A)()),
+           EU = (0, BU.l)(XU.effects);
```

#### 2614. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24236` → after: `L24513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24513) · [Before (L24236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24236)

```diff
-         const OM = mr(MM.HZ, rM),
+         const cU = NX(UU.iH, XU),
```

#### 2615. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24245` → after: `L24522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24522) · [Before (L24245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24245)

```diff
-         MM._scaleX === rM && MM._scaleY === iM || (MM._scaleX = rM, MM._scaleY = iM, MM._planeMesh.UL.set(rM, iM, 1))
+         UU._scaleX === XU && UU._scaleY === zU || (UU._scaleX = XU, UU._scaleY = zU, UU._planeMesh.RY.set(XU, zU, 1))
```

#### 2616. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24250` → after: `L24527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24527) · [Before (L24250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24250)

```diff
-         return null !== (rM = MM.name) && void 0 !== rM ? rM : (0, hM.b)().getEntityName(MM.HZ, !JM.featureFlags.canSeeRealPlayerNames)
+         return null !== (XU = UU.name) && void 0 !== XU ? XU : (0, pU.b)().getEntityName(UU.iH, !aU.featureFlags.canSeeRealPlayerNames)
```

#### 2617. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24259` → after: `L24536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24536) · [Before (L24259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24259)

```diff
-         if ((0, bM.c)(MM)) return;
+         if ((0, WU.d)(UU)) return;
```

#### 2618. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24264` → after: `L24541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24541) · [Before (L24264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24264)

```diff
-           (rM = rM ? JSON.parse(JSON.stringify(rM)) : {}).content ? rM.content = (0, UM.q)(rM.content, UM.f.DEFAULT_FONT_SIZE) : rM.content = [{
+           (XU = XU ? JSON.parse(JSON.stringify(XU)) : {}).content ? XU.content = (0, BU.v)(XU.content, BU.f.DEFAULT_FONT_SIZE) : XU.content = [{
```

#### 2619. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24267` → after: `L24544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24544) · [Before (L24267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24267)

```diff
-           const aM = (0, hM.b)().getPlayerRanks(MM).map((MM => HM.n[MM])).filter((MM => MM.nameTag && MM.visible));
+           const AU = (0, pU.b)().getPlayerRanks(UU).map((UU => IU.m[UU])).filter((UU => UU.nameTag && UU.visible));
```

#### 2620. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24269` → after: `L24546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24546) · [Before (L24269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24269)

```diff
-           const PM = HM.x[OM];
+           const FU = IU.u[cU];
```

#### 2621. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24271` → after: `L24548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24548) · [Before (L24271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24271)

```diff
-             for (const nM of rM.content)(0, UM.s)(nM) && (nM.style ? (0, mM.Ub)(nM.style) || (nM.style.color = PM) : nM.style = {
+             for (const oU of XU.content)(0, BU.y)(oU) && (oU.style ? (0, NU.fc)(oU.style) || (oU.style.color = FU) : oU.style = {
```

#### 2622. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24274` → after: `L24551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24551) · [Before (L24274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24274)

```diff
-           if (FM(MM) ? (rM.content.push(UM.b), BM.add(MM)) : BM.delete(MM), zr(MM)) {
+           if (mU(UU) ? (XU.content.push(BU.d), lU.add(UU)) : lU.delete(UU), EX(UU)) {
```

#### 2623. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24277` → after: `L24554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24554) · [Before (L24277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24277)

```diff
-               str: ` ${iM}m`,
+               str: ` ${zU}m`,
```

#### 2624. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24283-L24284` → after: `L24560-L24561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24560-L24561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24560-L24561) · [Before (L24283-L24284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24283-L24284)

```diff
-           return rM.subtitle && (rM.subtitle = (0, UM.q)(rM.subtitle, UM.f.DEFAULT_SUBTITLE_FONT_SIZE)), rM.backgroundColor = null !== (SM = rM.backgroundColor) && void 0 !== SM ? SM : "#22283b", rM.subtitleBackgroundColor = null !== (jM = rM.subtitleBackgroundColor) && void 0 != … [truncated]
-         }(rM.HZ, rM.nameTagInfo, iM, rM.nameColour);
+           return XU.subtitle && (XU.subtitle = (0, BU.v)(XU.subtitle, BU.f.DEFAULT_SUBTITLE_FONT_SIZE)), XU.backgroundColor = null !== (yU = XU.backgroundColor) && void 0 !== yU ? yU : "#22283b", XU.subtitleBackgroundColor = null !== (QU = XU.subtitleBackgroundColor) && void 0 != … [truncated]
+         }(XU.iH, XU.nameTagInfo, zU, XU.nameColour);
```

#### 2625. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24287` → after: `L24564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24564) · [Before (L24287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24287)

```diff
-             const iM = (0, jM.k)(MM._planeTexture);
+             const zU = (0, QU.g)(UU._planeTexture);
```

#### 2626. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24290-L24291` → after: `L24567-L24568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24567-L24568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24567-L24568) · [Before (L24290-L24291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24290-L24291)

```diff
-               const SM = null !== (iM = null === (OM = rM.healthbar) || void 0 === OM ? void 0 : OM.display) && void 0 !== iM ? iM : "onDamage";
-               return "never" === SM ? null : "always" === SM ? null !== (jM = MM.fj) && void 0 !== jM ? jM : 1 : MM.healthTimeout ? MM.fj : null;
+               const yU = null !== (zU = null === (cU = XU.healthbar) || void 0 === cU ? void 0 : cU.display) && void 0 !== zU ? zU : "onDamage";
+               return "never" === yU ? null : "always" === yU ? null !== (QU = UU.sU) && void 0 !== QU ? QU : 1 : UU.healthTimeout ? UU.sU : null;
```

#### 2627. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24295-L24297` → after: `L24572-L24574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24572-L24574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24572-L24574) · [Before (L24295-L24297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24295-L24297)

```diff
-       }(0, GM.d)((() => {
-         for (const MM of XM) FM(MM.HZ) !== BM.has(MM.HZ) && Sr(MM)
-       })), (0, bM.e)(MM.CL.Hk(), (() => {
+       }(0, ZU.e)((() => {
+         for (const UU of xU) mU(UU.iH) !== lU.has(UU.iH) && yX(UU)
+       })), (0, WU.h)(UU.WY.nS(), (() => {
```

#### 2628. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24313` → after: `L24590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24590) · [Before (L24313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24313)

```diff
-         return !!(null === (iM = MM.hU.ziM(rM)) || void 0 === iM ? void 0 : iM.zh)
+         return !!(null === (zU = UU.xG.bzU(XU)) || void 0 === zU ? void 0 : zU.Ep)
```

#### 2629. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24321` → after: `L24598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24598) · [Before (L24321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24321)

```diff
-             MM.GJ("Error updating a nametag", rM)
+             UU.Pa("Error updating a nametag", XU)
```

#### 2630. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24333` → after: `L24610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24610) · [Before (L24333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24333)

```diff
-         return null !== (iM = MM.eD !== rM && (null === (OM = MM.rY[MM.eD][rM]) || void 0 === OM ? void 0 : OM.hasPriorityNametag)) && void 0 !== iM && iM
+         return null !== (zU = UU.pM !== XU && (null === (cU = UU.YM[UU.pM][XU]) || void 0 === cU ? void 0 : cU.hasPriorityNametag)) && void 0 !== zU && zU
```

#### 2631. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24344` → after: `L24621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24621) · [Before (L24344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24344)

```diff
-         if (SM === jM && !wM.e.getTexture(jM, tM.f.ICON).notFound) {
+         if (yU === QU && !dU.c.getTexture(QU, LU.j.ICON).notFound) {
```

#### 2632. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24362` → after: `L24639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24639) · [Before (L24362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24362)

```diff
-         zr(rM) && iM > nM.f && (OM = nM.f);
+         EX(XU) && zU > oU.g && (cU = oU.g);
```

#### 2633. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24369` → after: `L24646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24646) · [Before (L24369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24369)

```diff
-         const jM = MM.CL.engine.getRenderWidth();
+         const QU = UU.WY.engine.getRenderWidth();
```

#### 2634. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24376-L24384` → after: `L24653-L24661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24653-L24661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24653-L24661) · [Before (L24376-L24384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24376-L24384)

```diff
-         const OM = MM.hU.grM(rM.HZ),
-           jM = zr(rM.HZ),
-           zM = (0, UM.A)(rM._planeMesh, MM.aU.canSeeNametagsThroughWalls, null === OM || void 0 === OM ? void 0 : OM.crouching, jM),
-           LM = MM.hU.jK(rM.planeEId).bq,
-           mM = MM.camera.oq(),
-           HM = SM().RQ(LM, mM),
-           hM = MM.hU.GrM(rM.planeEId).offset,
-           JM = iM ? (0, nM.t)(MM, rM.HZ, rM.planeEId, zM) : 1;
-         if (jM && zM && HM > nM.f) {
+         const cU = UU.xG.azU(XU.iH),
+           QU = EX(XU.iH),
+           EU = (0, BU.E)(XU._planeMesh, UU.mG.canSeeNametagsThroughWalls, null === cU || void 0 === cU ? void 0 : cU.crouching, QU),
+           YU = UU.xG.hK(XU.planeEId).A_,
+           NU = UU.camera.F_(),
+           IU = yU().OD(YU, NU),
+           pU = UU.xG.DzU(XU.planeEId).offset,
+           aU = zU ? (0, oU.u)(UU, XU.iH, XU.planeEId, EU) : 1;
+         if (QU && EU && IU > oU.g) {
```

#### 2635. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24387` → after: `L24664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24664) · [Before (L24387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24387)

```diff
-           const rM = SM().scale(MM, MM, nM.f),
+           const XU = yU().scale(UU, UU, oU.g),
```

#### 2636. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24391-L24392` → after: `L24668-L24669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24668-L24669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24668-L24669) · [Before (L24391-L24392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24391-L24392)

```diff
-         iM && (0, nM.h)(MM, rM.planeEId);
-         const dM = (0, nM.p)(HM, jM, zM) * JM,
+         zU && (0, oU.j)(UU, XU.planeEId);
+         const tU = (0, oU.m)(IU, QU, EU) * aU,
```

#### 2637. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24394` → after: `L24671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24671) · [Before (L24394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24394)

```diff
-         if (rM._layoutHeight = yM, MM.CL.DJ && rM._planeMesh.isEnabled() && rM._planeMesh.isVisible) {
+         if (XU._layoutHeight = gU, UU.WY.ia && XU._planeMesh.isEnabled() && XU._planeMesh.isVisible) {
```

#### 2638. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24396` → after: `L24673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24673) · [Before (L24396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24396)

```diff
-           const iM = (0, aM.d)(MM, rM.HZ),
+           const zU = (0, AU.d)(UU, XU.iH),
```

#### 2639. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24401` → after: `L24678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24678) · [Before (L24401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24401)

```diff
-             zM = gM.d.lerp(null !== (EM = jM) && void 0 !== EM ? EM : ar, Pr, nM);
+             EU = eU.d.lerp(null !== (GU = QU) && void 0 !== GU ? GU : AX, FX, oU);
```

#### 2640. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24403-L24404` → after: `L24680-L24681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24680-L24681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24680-L24681) · [Before (L24403-L24404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24403-L24404)

```diff
-           const LM = (0, QM.applyHeldLightTint)(MM, rM.HZ, iM, oM);
-           oM[0] = Math.max(LM[0], jM), oM[1] = Math.max(LM[1], jM), oM[2] = Math.max(LM[2], jM), oM[3] = Math.max(LM[3], jM), (0, PM.h)(rM._lightState, oM)
+           const YU = (0, DU.applyHeldLightTint)(UU, XU.iH, zU, iU);
+           iU[0] = Math.max(YU[0], QU), iU[1] = Math.max(YU[1], QU), iU[2] = Math.max(YU[2], QU), iU[3] = Math.max(YU[3], QU), (0, FU.k)(XU._lightState, iU)
```

#### 2641. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24418` → after: `L24695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24695) · [Before (L24418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24418)

```diff
-           fj: null,
+           sU: null,
```

#### 2642. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24450-L24451` → after: `L24727-L24728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24727-L24728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24727-L24728) · [Before (L24450-L24451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24450-L24451)

```diff
-         PU: function(rM, iM) {
-           iM.effects = {}, XM.add(iM), iM._lightId = `nt_${rM}`, iM._visibilityCombinator = new lM.d((rM => {
+         lG: function(XU, zU) {
+           zU.effects = {}, xU.add(zU), zU._lightId = `nt_${XU}`, zU._visibilityCombinator = new kU.e((XU => {
```

#### 2643. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24453-L24455` → after: `L24730-L24732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24730-L24732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24730-L24732) · [Before (L24453-L24455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24453-L24455)

```diff
-             const OM = MM.hU.KrM(iM.HZ);
-             OM ? OM.meshEnabledCombinator.forceUpdate() : (0, RM.p)(MM, iM.planeEId, rM)
-           })), iM.entityMeshScalingSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|meshScaling`, (MM => {
+             const cU = UU.xG.fzU(zU.iH);
+             cU ? cU.meshEnabledCombinator.forceUpdate() : (0, wU.k)(UU, zU.planeEId, XU)
+           })), zU.entityMeshScalingSub = EU.k.subscribe(`otherEntitySettingsClientifiedEId|${XU}|meshScaling`, (UU => {
```

#### 2644. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24457` → after: `L24734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24734) · [Before (L24457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24457)

```diff
-           })), iM.nameTagInfoSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|nameTagInfo`, (MM => {
+           })), zU.nameTagInfoSub = EU.k.subscribe(`otherEntitySettingsClientifiedEId|${XU}|nameTagInfo`, (UU => {
```

#### 2645. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24459` → after: `L24736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24736) · [Before (L24459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24459)

```diff
-           })), iM.priorityNametagSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|hasPriorityNametag`, (MM => {
+           })), zU.priorityNametagSub = EU.k.subscribe(`otherEntitySettingsClientifiedEId|${XU}|hasPriorityNametag`, (UU => {
```

#### 2646. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24461` → after: `L24738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24738) · [Before (L24461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24461)

```diff
-           })), iM.rankUpdateSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|ranks`, (MM => {
+           })), zU.rankUpdateSub = EU.k.subscribe(`otherEntitySettingsClientifiedEId|${XU}|ranks`, (UU => {
```

#### 2647. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24463` → after: `L24740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24740) · [Before (L24463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24463)

```diff
-           })), iM.hideNameSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|hideNameSeed`, (MM => {
+           })), zU.hideNameSub = EU.k.subscribe(`otherEntitySettingsClientifiedEId|${XU}|hideNameSeed`, (UU => {
```

#### 2648. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24465` → after: `L24742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24742) · [Before (L24465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24465)

```diff
-           })), iM.nameChangedSub = zM.i.subscribe(`entityNameChanged|${rM}`, (() => {
+           })), zU.nameChangedSub = EU.k.subscribe(`entityNameChanged|${XU}`, (() => {
```

#### 2649. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24467` → after: `L24744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24744) · [Before (L24467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24467)

```diff
-           })), iM.nameColourSub = zM.i.subscribe(`otherEntitySettingsClientifiedEId|${rM}|nameColour`, (MM => {
+           })), zU.nameColourSub = EU.k.subscribe(`otherEntitySettingsClientifiedEId|${XU}|nameColour`, (UU => {
```

#### 2650. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24469` → after: `L24746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24746) · [Before (L24469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24469)

```diff
-           })), iM.effectInfoSub = zM.i.subscribe("EffectUpdate", (MM => {
+           })), zU.effectInfoSub = EU.k.subscribe("EffectUpdate", (UU => {
```

#### 2651. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24471-L24472` → after: `L24748-L24749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24748-L24749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24748-L24749) · [Before (L24471-L24472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24471-L24472)

```diff
-             (null === (OM = MM.showInNametag) || void 0 === OM || OM) && (0, dM.e)(MM.Pi) === rM && Lr(iM, MM)
-           })), iM.removeEffectSub = zM.i.subscribe("RemoveEffect", (MM => {
+             (null === (cU = UU.showInNametag) || void 0 === cU || cU) && (0, tU.c)(UU.iX) === XU && YX(zU, UU)
+           })), zU.removeEffectSub = EU.k.subscribe("RemoveEffect", (UU => {
```

#### 2652. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24474-L24475` → after: `L24751-L24752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24751-L24752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24751-L24752) · [Before (L24474-L24475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24474-L24475)

```diff
-             (0, dM.e)(MM.Pi) === rM && (clearTimeout(null === (OM = iM.effects[MM.name]) || void 0 === OM ? void 0 : OM.timeout), delete iM.effects[MM.name], Sr(iM))
-           })), iM.leaveGameSub = zM.i.subscribe("leaveGame", (() => {
+             (0, tU.c)(UU.iX) === XU && (clearTimeout(null === (cU = zU.effects[UU.name]) || void 0 === cU ? void 0 : cU.timeout), delete zU.effects[UU.name], yX(zU))
+           })), zU.leaveGameSub = EU.k.subscribe("leaveGame", (() => {
```

#### 2653. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24478` → after: `L24755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24755) · [Before (L24478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24478)

```diff
-           })), iM.lifeformHurtSub = zM.i.subscribe("lifeformHurt", (MM => {
+           })), zU.lifeformHurtSub = EU.k.subscribe("lifeformHurt", (UU => {
```

#### 2654. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24481` → after: `L24758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24758) · [Before (L24481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24481)

```diff
-               fj: SM
+               sU: yU
```

#### 2655. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24483` → after: `L24760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24760) · [Before (L24483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24483)

```diff
-             (0, dM.e)(OM) === rM && (clearTimeout(iM.healthTimeout), iM.healthTimeout = setTimeout((() => {
+             (0, tU.c)(cU) === XU && (clearTimeout(zU.healthTimeout), zU.healthTimeout = setTimeout((() => {
```

#### 2656. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24485-L24486` → after: `L24762-L24763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24762-L24763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24762-L24763) · [Before (L24485-L24486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24485-L24486)

```diff
-             }), 2e3), iM.fj = SM, Sr(iM))
-           })), iM.lifeformHealthChangedSub = zM.i.subscribe("lifeformHealthChanged", (OM => {
+             }), 2e3), zU.sU = yU, yX(zU))
+           })), zU.lifeformHealthChangedSub = EU.k.subscribe("lifeformHealthChanged", (cU => {
```

#### 2657. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24489-L24490` → after: `L24766-L24767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24766-L24767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24766-L24767) · [Before (L24489-L24490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24489-L24490)

```diff
-               Mr: jM,
-               rr: aM
+               gU: QU,
+               kU: AU
```

#### 2658. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24492` → after: `L24769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24769) · [Before (L24492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24492)

```diff
-             if ((0, dM.e)(SM) !== rM || null === aM) return;
+             if ((0, tU.c)(yU) !== XU || null === AU) return;
```

#### 2659. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24495-L24496` → after: `L24772-L24773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24772-L24773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24772-L24773) · [Before (L24495-L24496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24495-L24496)

```diff
-             }), 2e3)), iM.fj = aM, MM.bloxd.client.gameRecorder.recordLifeformHealth(SM, jM, aM), Sr(iM)
-           })), iM.hideNametagSub = zM.i.subscribe("appManagerUpdated|areNametagsHidden", (MM => {
+             }), 2e3)), zU.sU = AU, UU.bloxd.client.gameRecorder.recordLifeformHealth(yU, QU, AU), yX(zU)
+           })), zU.hideNametagSub = EU.k.subscribe("appManagerUpdated|areNametagsHidden", (UU => {
```

#### 2660. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24499` → after: `L24776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24776) · [Before (L24499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24499)

```diff
-           iM.unsubscribeKeyPromptChanges = (0, LM.r)((() => {
+           zU.unsubscribeKeyPromptChanges = (0, YU.s)((() => {
```

#### 2661. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24501-L24502` → after: `L24778-L24779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24778-L24779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24778-L24779) · [Before (L24501-L24502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24501-L24502)

```diff
-             (null !== (MM = iM.nameTagInfo) && void 0 !== MM && null !== (rM = MM.content) && void 0 !== rM && rM.some(mM.nb) || null !== (OM = iM.nameTagInfo) && void 0 !== OM && null !== (SM = OM.subtitle) && void 0 !== SM && SM.some(mM.nb)) && Sr(iM)
-           })), iM._visibilityCombinator.setBooleanType("nametagEnabled", !uM.d.get("areNametagsHidden"));
+             (null !== (UU = zU.nameTagInfo) && void 0 !== UU && null !== (XU = UU.content) && void 0 !== XU && XU.some(NU.yb) || null !== (cU = zU.nameTagInfo) && void 0 !== cU && null !== (yU = cU.subtitle) && void 0 !== yU && yU.some(NU.yb)) && yX(zU)
+           })), zU._visibilityCombinator.setBooleanType("nametagEnabled", !CU.e.get("areNametagsHidden"));
```

#### 2662. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24504` → after: `L24781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24781) · [Before (L24504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24504)

```diff
-           iM.fj = OM.getHealthFrac(rM);
+           zU.sU = cU.getHealthFrac(XU);
```

#### 2663. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24514` → after: `L24791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24791) · [Before (L24514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24514)

```diff
-           MM.eD in MM.rY && rM in MM.rY[MM.eD] && ("nameTagInfo" in MM.rY[MM.eD][rM] && (iM.nameTagInfo = MM.rY[MM.eD][rM].nameTagInfo), "nameColour" in MM.rY[MM.eD][rM] && (iM.nameColour = MM.rY[MM.eD][rM].nameColour)), Sr(iM)
+           UU.pM in UU.YM && XU in UU.YM[UU.pM] && ("nameTagInfo" in UU.YM[UU.pM][XU] && (zU.nameTagInfo = UU.YM[UU.pM][XU].nameTagInfo), "nameColour" in UU.YM[UU.pM][XU] && (zU.nameColour = UU.YM[UU.pM][XU].nameColour)), yX(zU)
```

#### 2664. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24519` → after: `L24796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24796) · [Before (L24519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24519)

```diff
-             const MM = jr(iM.HZ);
+             const UU = QX(zU.iH);
```

#### 2665. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24525` → after: `L24802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24802) · [Before (L24525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24525)

```diff
-             zr(iM.HZ) && vM(iM) && Sr(iM)
+             EX(zU.iH) && nU(zU) && yX(zU)
```

#### 2666. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24528` → after: `L24805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24805) · [Before (L24528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24528)

```diff
-         dU: function(MM, rM) {
+         JG: function(UU, XU) {
```

#### 2667. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24531` → after: `L24808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24808) · [Before (L24531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24531)

```diff
-         vW: function(MM, rM) {
+         Cw: function(UU, XU) {
```

#### 2668. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24533` → after: `L24810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24810) · [Before (L24533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24533)

```diff
-           qM(rM), XM.delete(rM), BM.delete(rM.HZ), zM.i.unsubscribe(rM.entityMeshScalingSub), zM.i.unsubscribe(rM.nameTagInfoSub), zM.i.unsubscribe(rM.priorityNametagSub), zM.i.unsubscribe(rM.rankUpdateSub), zM.i.unsubscribe(rM.hideNameSub), zM.i.unsubscribe(rM.nameChangedSub), z … [truncated]
+           KU(XU), xU.delete(XU), lU.delete(XU.iH), EU.k.unsubscribe(XU.entityMeshScalingSub), EU.k.unsubscribe(XU.nameTagInfoSub), EU.k.unsubscribe(XU.priorityNametagSub), EU.k.unsubscribe(XU.rankUpdateSub), EU.k.unsubscribe(XU.hideNameSub), EU.k.unsubscribe(XU.nameChangedSub), E … [truncated]
```

#### 2669. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24544` → after: `L24821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24821) · [Before (L24544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24544)

```diff
-   39937: (MM, rM, iM) => {
+   39716: (UU, XU, zU) => {
```

#### 2670. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24548-L24551` → after: `L24825-L24828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24825) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24825-L24828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24825-L24828) · [Before (L24548-L24551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24548-L24551)

```diff
-     var OM = iM(38878),
-       SM = iM(38481),
-       jM = iM(38318),
-       aM = iM(347),
+     var cU = zU(38647),
+       yU = zU(38254),
+       QU = zU(38090),
+       AU = zU(352),
```

#### 2671. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24553-L24555` → after: `L24830-L24832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24830-L24832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24830-L24832) · [Before (L24553-L24555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24553-L24555)

```diff
-       nM = iM(38594),
-       QM = iM(38205);
-     const zM = iM(39939).c,
+       oU = zU(38370),
+       DU = zU(37968);
+     const EU = zU(39723).e,
```

#### 2672. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24560-L24561` → after: `L24837-L24838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24837-L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24837-L24838) · [Before (L24560-L24561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24560-L24561)

```diff
-       const rM = MM.CL.Hk(),
-         iM = (0, OM.l)(MM.CL, "phBox", (0, SM.c)({
+       const XU = UU.WY.nS(),
+         zU = (0, cU.m)(UU.WY, "phBox", (0, yU.b)({
```

#### 2673. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24566` → after: `L24843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24843) · [Before (L24566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24566)

```diff
-       iM.material = (0, QM.d)({
+       zU.material = (0, DU.b)({
```

#### 2674. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24568` → after: `L24845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24845) · [Before (L24568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24568)

```diff
-         YJ: rM,
+         sa: XU,
```

#### 2675. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24576` → after: `L24853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24853) · [Before (L24576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24576)

```diff
-       }).mirror, iM.visibility = .5, iM.kR(!1);
+       }).mirror, zU.visibility = .5, zU.YC(!1);
```

#### 2676. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24586` → after: `L24863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24863) · [Before (L24586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24586)

```diff
-         PU: function(rM, OM) {
+         lG: function(XU, cU) {
```

#### 2677. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24588` → after: `L24865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24865) · [Before (L24588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24588)

```diff
-           OM.instance = iM.createInstance(`mesh overlay ${rM}`), MM.CL.vJ(OM.instance, !1, null), OM.lastFlash = Date.now(), null === (SM = MM.hU.KrM(rM)) || void 0 === SM || SM.meshEnabledCombinator.forceUpdate()
+           cU.instance = zU.createInstance(`mesh overlay ${XU}`), UU.WY.xa(cU.instance, !1, null), cU.lastFlash = Date.now(), null === (yU = UU.xG.fzU(XU)) || void 0 === yU || yU.meshEnabledCombinator.forceUpdate()
```

#### 2678. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24590` → after: `L24867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24867) · [Before (L24590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24590)

```diff
-         vW: function(MM, rM) {
+         Cw: function(UU, XU) {
```

#### 2679. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24593` → after: `L24870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24870) · [Before (L24593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24593)

```diff
-         dU: function(rM, iM) {
+         JG: function(XU, zU) {
```

#### 2680. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24596-L24597` → after: `L24873-L24874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24873-L24874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24873-L24874) · [Before (L24596-L24597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24596-L24597)

```diff
-             const rM = (0, nM.getCaughtUpMeshRotation)(MM, aM.HZ).renderRotation,
-               iM = MM.hU.jK(aM.HZ).bq;
+             const XU = (0, oU.getCaughtUpMeshRotation)(UU, AU.iH).renderRotation,
+               zU = UU.xG.hK(AU.iH).A_;
```

#### 2681. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24599` → after: `L24876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24876) · [Before (L24599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24599)

```diff
-             if (PM().set(hM, iM[0], iM[1] + zM.playerHitboxHeights.head / 2, iM[2] + .1), PM().Od(hM, hM, iM, rM[2]), PM().cJ(hM, hM, iM, rM[0]), PM().Md(hM, hM, iM, rM[1]), (0, jM.p)(aM.instance, hM[0], hM[1], hM[2]), aM.instance.rotation.set(rM[0], rM[1], rM[2]), OM > aM.lastFl … [truncated]
+             if (FU().set(pU, zU[0], zU[1] + EU.playerHitboxHeights.head / 2, zU[2] + .1), FU().wa(pU, pU, zU, XU[2]), FU().pa(pU, pU, zU, XU[0]), FU().ta(pU, pU, zU, XU[1]), (0, QU.q)(AU.instance, pU[0], pU[1], pU[2]), AU.instance.rotation.set(XU[0], XU[1], XU[2]), cU > AU.lastFl … [truncated]
```

#### 2682. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24606` → after: `L24883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24883) · [Before (L24606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24606)

```diff
-   39942: (MM, rM, iM) => {
+   39726: (UU, XU, zU) => {
```

#### 2683. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24610-L24611` → after: `L24887-L24888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24887-L24888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24887-L24888) · [Before (L24610-L24611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24610-L24611)

```diff
-     var OM = iM(670),
-       SM = iM(38318);
+     var cU = zU(698),
+       yU = zU(38090);
```

#### 2684. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24622` → after: `L24899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24899) · [Before (L24622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24622)

```diff
-           ai: null,
+           uc: null,
```

#### 2685. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24626` → after: `L24903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24903) · [Before (L24626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24626)

```diff
-         PU: function(MM, rM) {
+         lG: function(UU, XU) {
```

#### 2686. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24629` → after: `L24906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24906) · [Before (L24629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24629)

```diff
-         vW: function(MM, rM) {
+         Cw: function(UU, XU) {
```

#### 2687. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24632` → after: `L24909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24909) · [Before (L24632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24632)

```diff
-         dU: function(rM, iM) {
+         JG: function(XU, zU) {
```

#### 2688. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24638` → after: `L24915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24915) · [Before (L24638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24638)

```diff
-             const rM = null === OM.ai ? 0 : zM(MM, MM.hU.jK(OM.HZ).siM, OM.ai);
+             const XU = null === cU.uc ? 0 : EU(UU, UU.xG.hK(cU.iH).BcU, cU.uc);
```

#### 2689. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24640` → after: `L24917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24917) · [Before (L24640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24640)

```diff
-               for (let iM = 0; iM < jM; iM++) OM.meshes.push(mM(MM, OM.HZ));
+               for (let zU = 0; zU < QU; zU++) cU.meshes.push(NU(UU, cU.iH));
```

#### 2690. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24643` → after: `L24920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24920) · [Before (L24643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24643)

```diff
-               SM && HM(MM, OM, iM, aM[iM], OM.ai, PM[iM]), OM._shown[iM] !== SM && (OM._shown[iM] = SM, OM.meshes[iM].kR(SM))
+               yU && IU(UU, cU, zU, AU[zU], cU.uc, FU[zU]), cU._shown[zU] !== yU && (cU._shown[zU] = yU, cU.meshes[zU].YC(yU))
```

#### 2691. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24656` → after: `L24933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24933) · [Before (L24656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24656)

```diff
-       const OM = MM.Am;
+       const cU = UU.VN;
```

#### 2692. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24661` → after: `L24938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24938) · [Before (L24661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24661)

```diff
-         LM(jM, rM, OM, nM, QM) || MM.uL.qB(nM, iM, QM) || (aM[SM] = nM, PM[SM] = QM, SM++)
+         YU(QU, XU, cU, oU, DU) || UU.qY.mJ(oU, zU, DU) || (AU[yU] = oU, FU[yU] = DU, yU++)
```

#### 2693. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24673-L24674` → after: `L24950-L24951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24950-L24951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24950-L24951) · [Before (L24673-L24674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24673-L24674)

```diff
-       const iM = MM.CL.DiM.createInstance(`floatingMesh_${rM}_${(0,OM.e)()}`);
-       return MM.CL.vJ(iM), iM.kR(!1), iM
+       const zU = UU.WY.ZcU.createInstance(`floatingMesh_${XU}_${(0,cU.d)()}`);
+       return UU.WY.xa(zU), zU.YC(!1), zU
```

#### 2694. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24678` → after: `L24955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24955) · [Before (L24678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24678)

```diff
-       const PM = MM.Am,
+       const FU = UU.VN,
```

#### 2695. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24683` → after: `L24960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24960) · [Before (L24683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24683)

```diff
-       LM[3 * iM] === nM && LM[3 * iM + 1] === QM && LM[3 * iM + 2] === zM || (LM[3 * iM] = nM, LM[3 * iM + 1] = QM, LM[3 * iM + 2] = zM, (0, SM.p)(rM.meshes[iM], nM, QM, zM))
+       YU[3 * zU] === oU && YU[3 * zU + 1] === DU && YU[3 * zU + 2] === EU || (YU[3 * zU] = oU, YU[3 * zU + 1] = DU, YU[3 * zU + 2] = EU, (0, yU.q)(XU.meshes[zU], oU, DU, EU))
```

#### 2696. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24686` → after: `L24963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24963) · [Before (L24686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24686)

```diff
-   39945: (MM, rM, iM) => {
+   39729: (UU, XU, zU) => {
```

#### 2697. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24690-L24692` → after: `L24967-L24969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24967-L24969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24967-L24969) · [Before (L24690-L24692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24690-L24692)

```diff
-     var OM = iM(2067),
-       SM = iM(4069),
-       jM = iM(38576);
+     var cU = zU(2032),
+       yU = zU(4063),
+       QU = zU(38347);
```

#### 2698. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24711` → after: `L24988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24988) · [Before (L24711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24711)

```diff
-         PU: function(rM, iM) {
+         lG: function(XU, zU) {
```

#### 2699. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24714-L24715` → after: `L24991-L24992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24991-L24992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24991-L24992) · [Before (L24714-L24715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24714-L24715)

```diff
-               if (MM.aU.forcedCameraDirectionTransitionMs <= 0 || null === rM) {
-                 if (null === rM) MM.camera.VK = null, MM.camera.Qq = null;
+               if (UU.mG.forcedCameraDirectionTransitionMs <= 0 || null === XU) {
+                 if (null === XU) UU.camera.U1 = null, UU.camera.E1 = null;
```

#### 2700. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24718-L24719` → after: `L24995-L24996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24995-L24996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24995-L24996) · [Before (L24718-L24719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24718-L24719)

```diff
-                     iL: iM,
-                     aiM: OM
+                     QY: zU,
+                     JzU: cU
```

#### 2701. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24721` → after: `L24998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R24998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L24998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L24998) · [Before (L24721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24721)

```diff
-                   MM.camera.VK = OM, MM.camera.Qq = iM
+                   UU.camera.U1 = cU, UU.camera.E1 = zU
```

#### 2702. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24731-L24732` → after: `L25008-L25009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25008-L25009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25008-L25009) · [Before (L24731-L24732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24731-L24732)

```diff
-                 iL: SM,
-                 aiM: aM
+                 QY: yU,
+                 JzU: AU
```

#### 2703. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24739` → after: `L25016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25016) · [Before (L24739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24739)

```diff
-               iM.directionTransitionStart = PM, iM.directionTransitionEnd = PM + MM.aU.forcedCameraDirectionTransitionMs, MM.camera.VK = OM.pitch, MM.camera.Qq = OM.heading
+               zU.directionTransitionStart = FU, zU.directionTransitionEnd = FU + UU.mG.forcedCameraDirectionTransitionMs, UU.camera.U1 = cU.pitch, UU.camera.E1 = cU.heading
```

#### 2704. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24743-L24744` → after: `L25020-L25021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25020-L25021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25020-L25021) · [Before (L24743-L24744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24743-L24744)

```diff
-               if (MM.aU.cameraRollTransitionMs <= 0) return MM.camera.zL = rM, iM.rollTransitionFrom = null, iM.rollTransitionTo = null, iM.rollTransitionStart = null, void(iM.rollTransitionEnd = null);
-               iM.rollTransitionFrom = MM.camera.zL, iM.rollTransitionTo = rM;
+               if (UU.mG.cameraRollTransitionMs <= 0) return UU.camera.NY = XU, zU.rollTransitionFrom = null, zU.rollTransitionTo = null, zU.rollTransitionStart = null, void(zU.rollTransitionEnd = null);
+               zU.rollTransitionFrom = UU.camera.NY, zU.rollTransitionTo = XU;
```

#### 2705. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24746` → after: `L25023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25023) · [Before (L24746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24746)

```diff
-               iM.rollTransitionStart = OM, iM.rollTransitionEnd = OM + MM.aU.cameraRollTransitionMs
+               zU.rollTransitionStart = cU, zU.rollTransitionEnd = cU + UU.mG.cameraRollTransitionMs
```

#### 2706. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24777-L24778` → after: `L25054-L25055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25054-L25055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25054-L25055) · [Before (L24777-L24778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24777-L24778)

```diff
-           }, QM(MM.aU.cameraRotationOffset), zM(MM.aU.cameraPositionOffset), (0, SM.onGameReset)((() => {
-             MM.camera.VK = null, MM.camera.Qq = null, MM.camera.zL = 0, QM(aM), zM(PM), iM.directionTransitionFrom = null, iM.directionTransitionTo = null, iM.directionTransitionStart = null, iM.directionTransitionEnd = null, iM.rollTransitionFrom = null, iM.rollTransitionTo = nu … [truncated]
+           }, DU(UU.mG.cameraRotationOffset), EU(UU.mG.cameraPositionOffset), (0, yU.onGameReset)((() => {
+             UU.camera.U1 = null, UU.camera.E1 = null, UU.camera.NY = 0, DU(AU), EU(FU), zU.directionTransitionFrom = null, zU.directionTransitionTo = null, zU.directionTransitionStart = null, zU.directionTransitionEnd = null, zU.rollTransitionFrom = null, zU.rollTransitionTo = nu … [truncated]
```

#### 2707. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24781` → after: `L25058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25058) · [Before (L24781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24781)

```diff
-         vW: function(MM, rM) {
+         Cw: function(UU, XU) {
```

#### 2708. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24784` → after: `L25061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25061) · [Before (L24784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24784)

```diff
-         dU: function(rM, iM) {
+         JG: function(XU, zU) {
```

#### 2709. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24793` → after: `L25070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25070) · [Before (L24793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24793)

```diff
-             jM >= 1 ? (MM.camera.VK = iM.pitch, MM.camera.Qq = zM(iM.heading), OM.directionTransitionFrom = null, OM.directionTransitionTo = null, OM.directionTransitionStart = null, OM.directionTransitionEnd = null) : (MM.camera.VK = rM.pitch + (iM.pitch - rM.pitch) * aM, MM.cam … [truncated]
+             QU >= 1 ? (UU.camera.U1 = zU.pitch, UU.camera.E1 = EU(zU.heading), cU.directionTransitionFrom = null, cU.directionTransitionTo = null, cU.directionTransitionStart = null, cU.directionTransitionEnd = null) : (UU.camera.U1 = XU.pitch + (zU.pitch - XU.pitch) * AU, UU.cam … [truncated]
```

#### 2710. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24798` → after: `L25075`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25075)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25075) · [Before (L24798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24798)

```diff
-             rM >= 1 ? (MM.camera.zL = OM.rollTransitionTo, OM.rollTransitionFrom = null, OM.rollTransitionTo = null, OM.rollTransitionStart = null, OM.rollTransitionEnd = null) : MM.camera.zL = OM.rollTransitionFrom + (OM.rollTransitionTo - OM.rollTransitionFrom) * iM
+             XU >= 1 ? (UU.camera.NY = cU.rollTransitionTo, cU.rollTransitionFrom = null, cU.rollTransitionTo = null, cU.rollTransitionStart = null, cU.rollTransitionEnd = null) : UU.camera.NY = cU.rollTransitionFrom + (cU.rollTransitionTo - cU.rollTransitionFrom) * zU
```

#### 2711. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24805` → after: `L25082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25082) · [Before (L24805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24805)

```diff
-       return MM < .5 ? 4 * MM * MM * MM : 1 - Math.pow(-2 * MM + 2, 3) / 2
+       return UU < .5 ? 4 * UU * UU * UU : 1 - Math.pow(-2 * UU + 2, 3) / 2
```

#### 2712. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24817` → after: `L25094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25094) · [Before (L24817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24817)

```diff
-       return SM > Math.PI ? SM -= iM : SM < -Math.PI && (SM += iM), MM + SM
+       return yU > Math.PI ? yU -= zU : yU < -Math.PI && (yU += zU), UU + yU
```

#### 2713. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24824` → after: `L25101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25101) · [Before (L24824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24824)

```diff
-       }(MM) ? MM : iM;
+       }(UU) ? UU : zU;
```

#### 2714. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24828` → after: `L25105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25105) · [Before (L24828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24828)

```diff
-   39828: (MM, rM, iM) => {
+   39596: (UU, XU, zU) => {
```

#### 2715. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24834-L24835` → after: `L25111-L25112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25111-L25112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25111-L25112) · [Before (L24834-L24835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24834-L24835)

```diff
-     var OM = iM(38025),
-       SM = iM(39055);
+     var cU = zU(37812),
+       yU = zU(38822);
```

#### 2716. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24838` → after: `L25115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25115) · [Before (L24838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24838)

```diff
-         this.Zk = null, this.kiM = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.HZ = void 0
+         this.YH = null, this.RcU = null, this.heldItemPositionParams = {}, this.maxWalkingAngleOverride = null, this._walkingAngleLastTick = 0, this._posePaused = !1, this.iH = void 0
```

#### 2717. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24847-L24848` → after: `L25124-L25125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25124-L25125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25124-L25125) · [Before (L24847-L24848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24847-L24848)

```diff
-         dU: function(rM, iM) {
-           for (const SM of iM) SM.kiM.ZiM && ((0, OM.pausesOutOfView)(MM, SM.HZ, SM.Zk) ? SM._posePaused = !0 : nM(MM, SM))
+         JG: function(XU, zU) {
+           for (const yU of zU) yU.RcU.PcU && ((0, cU.pausesOutOfView)(UU, yU.iH, yU.YH) ? yU._posePaused = !0 : oU(UU, yU))
```

#### 2718. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24854` → after: `L25131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25131) · [Before (L24854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24854)

```diff
-       const iM = MM.hU.MiM(rM);
+       const zU = UU.xG.VzU(XU);
```

#### 2719. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24860` → after: `L25137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25137) · [Before (L24860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24860)

```diff
-       const iM = rM.HZ;
+       const zU = XU.iH;
```

#### 2720. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24864` → after: `L25141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25141) · [Before (L24864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24864)

```diff
-       } = MM.hU.getState(iM, "updateWalkingState");
+       } = UU.xG.getState(zU, "updateWalkingState");
```

#### 2721. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24867` → after: `L25144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25144) · [Before (L24867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24867)

```diff
-       const jM = MM.hU.getState(iM, "animator");
+       const QU = UU.xG.getState(zU, "animator");
```

#### 2722. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24871` → after: `L25148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25148) · [Before (L24871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24871)

```diff
-   39951: (MM, rM, iM) => {
+   39736: (UU, XU, zU) => {
```

#### 2723. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24875-L24879` → after: `L25152-L25156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25152-L25156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25152-L25156) · [Before (L24875-L24879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24875-L24879)

```diff
-     var OM = iM(37761),
-       SM = iM(22),
-       jM = iM(39147),
-       aM = iM(38130),
-       PM = iM(39092);
+     var cU = zU(37532),
+       yU = zU(31),
+       QU = zU(38914),
+       AU = zU(37888),
+       FU = zU(38858);
```

#### 2724. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24895` → after: `L25172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25172) · [Before (L24895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24895)

```diff
-         PU: function(rM, iM) {
+         lG: function(XU, zU) {
```

#### 2725. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24897-L24899` → after: `L25174-L25176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25174-L25176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25174-L25176) · [Before (L24897-L24899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24897-L24899)

```diff
-           iM.isAlive = (0, PM.c)("_isAlive", null === (QM = MM.rY[MM.eD]) || void 0 === QM || null === (zM = QM[iM.HZ]) || void 0 === zM ? void 0 : zM._isAlive), iM._isAliveSub = SM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM.HZ}|_isAlive`, (MM => {
-             iM.isAlive = (0, PM.c)("_isAlive", MM), (0, jM.updateLocalPlayerHeldItem)()
-           })), iM.addedTime = Date.now(), iM._hasPriorityNametagSub = SM.i.subscribe(`otherEntitySettingsClientifiedEId|${iM.HZ}|hasPriorityNametag`, (MM => {
+           zU.isAlive = (0, FU.d)("_isAlive", null === (DU = UU.YM[UU.pM]) || void 0 === DU || null === (EU = DU[zU.iH]) || void 0 === EU ? void 0 : EU._isAlive), zU._isAliveSub = yU.k.subscribe(`otherEntitySettingsClientifiedEId|${zU.iH}|_isAlive`, (UU => {
+             zU.isAlive = (0, FU.d)("_isAlive", UU), (0, QU.updateLocalPlayerHeldItem)()
+           })), zU.addedTime = Date.now(), zU._hasPriorityNametagSub = yU.k.subscribe(`otherEntitySettingsClientifiedEId|${zU.iH}|hasPriorityNametag`, (UU => {
```

#### 2726. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24903` → after: `L25180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25180) · [Before (L24903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24903)

```diff
-             hU: LM
+             xG: YU
```

#### 2727. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24905` → after: `L25182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25182) · [Before (L24905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24905)

```diff
-           iM.meshEnabledCombinator = new OM.d(((OM, jM) => {
+           zU.meshEnabledCombinator = new cU.e(((cU, QU) => {
```

#### 2728. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24907` → after: `L25184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25184) · [Before (L24907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24907)

```diff
-             (0, aM.p)(MM, rM, OM);
+             (0, AU.k)(UU, XU, cU);
```

#### 2729. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24909` → after: `L25186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25186) · [Before (L24909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24909)

```diff
-               zM = LM.VrM(rM),
+               EU = YU.MzU(XU),
```

#### 2730. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24915` → after: `L25192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25192) · [Before (L24915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24915)

```diff
-               if (null !== (hM = null === (JM = MM.rY[MM.eD][iM.HZ]) || void 0 === JM ? void 0 : JM.hasPriorityNametag) && void 0 !== hM && hM)
+               if (null !== (pU = null === (aU = UU.YM[UU.pM][zU.iH]) || void 0 === aU ? void 0 : aU.hasPriorityNametag) && void 0 !== pU && pU)
```

#### 2731. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24918` → after: `L25195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25195) · [Before (L24918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24918)

```diff
-               (HM || iM.drawnHidden) && (rM = !1), (0, aM.p)(MM, mM, rM)
+               (IU || zU.drawnHidden) && (XU = !1), (0, AU.k)(UU, NU, XU)
```

#### 2732. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24922-L24924` → after: `L25199-L25201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25199-L25201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25199-L25201) · [Before (L24922-L24924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24922-L24924)

```diff
-             dM && (dM.forceSetEnabled = !!QM && null, dM.instance.kR(null !== (yM = dM.forceSetEnabled) && void 0 !== yM ? yM : dM.isEnabled));
-             iM.HZ !== MM.eD && (OM ? LM.BMM(rM, "collideTerrain") || LM.eZ(rM, "collideTerrain") : LM.BMM(rM, "collideTerrain") && LM.bZ(rM, "collideTerrain")), rM === MM.eD && SM.i.Tz("clientPlayerModelVisible", QM)
-           })), LM.getState(rM, LM.names.tL).enabledCombinator = new OM.d
+             tU && (tU.forceSetEnabled = !!DU && null, tU.instance.YC(null !== (gU = tU.forceSetEnabled) && void 0 !== gU ? gU : tU.isEnabled));
+             zU.iH !== UU.pM && (cU ? YU.qXU(XU, "collideTerrain") || YU.sH(XU, "collideTerrain") : YU.qXU(XU, "collideTerrain") && YU.nH(XU, "collideTerrain")), XU === UU.pM && yU.k.UY("clientPlayerModelVisible", DU)
+           })), YU.getState(XU, YU.names.CY).enabledCombinator = new cU.e
```

#### 2733. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24926-L24927` → after: `L25203-L25204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25203-L25204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25203-L25204) · [Before (L24926-L24927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24926-L24927)

```diff
-         vW: function(MM, rM) {
-           SM.i.unsubscribe(rM._isAliveSub), SM.i.unsubscribe(rM._hasPriorityNametagSub)
+         Cw: function(UU, XU) {
+           yU.k.unsubscribe(XU._isAliveSub), yU.k.unsubscribe(XU._hasPriorityNametagSub)
```

#### 2734. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24932` → after: `L25209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25209) · [Before (L24932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24932)

```diff
-   39956: (MM, rM, iM) => {
+   39742: (UU, XU, zU) => {
```

#### 2735. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24936-L24937` → after: `L25213-L25214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25213-L25214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25213-L25214) · [Before (L24936-L24937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24936-L24937)

```diff
-     var OM = iM(38782),
-       SM = iM(39017);
+     var cU = zU(38549),
+       yU = zU(38789);
```

#### 2736. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24950` → after: `L25227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25227) · [Before (L24950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24950)

```diff
-           SM.b.dropExpired(Date.now())
+           yU.c.dropExpired(Date.now())
```

#### 2737. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24952` → after: `L25229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25229) · [Before (L24952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24952)

```diff
-         dU: function(rM, iM) {
+         JG: function(XU, zU) {
```

#### 2738. `bundles/preprod.bloxd.io/chunks/js/107.js` (Changed code · before: `L24955` → after: `L25232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0R25232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c5005d54b70f63ef08d607efc671228eb7f609d3bdbb1434fa2b3a2378178ac0) · [After (L25232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/107.js#L25232) · [Before (L24955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/107.js#L24955)

```diff
-             const rM = MM.hU.GrM(jM.HZ);
+             const XU = UU.xG.DzU(QU.iH);
```
