# Changed — Bundle Modifications Report (Part 035 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `35 / 142` (**444** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 034](part-034.md) · [Part 036 →](part-036.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/214.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/214.js` (145 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352)

#### 50. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L361-L363` → after: `L361-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L361-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L361-L363) · [Before (L361-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L361-L363)

```diff
-             ...null !== (lp = this.lastHeader) && void 0 !== lp ? lp : (0, Op.ve)(new Uint32Array(Op.lb)),
-             status: Op.P.Fatal,
-             lastError: Op.M.CoreBusy,
+             ...null !== (yT = this.lastHeader) && void 0 !== yT ? yT : (0, WT.Je)(new Uint32Array(WT.vb)),
+             status: WT.V.Fatal,
+             lastError: WT.S.CoreBusy,
```

#### 51. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L365)

```diff
-           } : null === Ep ? null : (0, Op.ve)(Ep);
+           } : null === tT ? null : (0, WT.Je)(tT);
```

#### 52. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L368-L370` → after: `L368-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L368-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L368-L370) · [Before (L368-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L368-L370)

```diff
-         const Qp = null !== Xp && wp !== Op.P.Fatal,
-           Jp = Qp && null !== Ep ? Ep[Op.nb.NetInKept] : 0,
-           Bp = Qp && Jp <= Dp && Jp % 4 === 0 ? Jp : null;
+         const XT = null !== aT && cT !== WT.V.Fatal,
+           IT = XT && null !== tT ? tT[WT.yb.NetInKept] : 0,
+           QT = XT && IT <= jT && IT % 4 === 0 ? IT : null;
```

#### 53. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L372-L374` → after: `L372-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L372-L374) · [Before (L372-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L372-L374)

```diff
-         null !== Xp && null !== Bp && wp === Op.P.Errors && (null === (Np = (Tp = this.handlers).onErrors) || void 0 === Np || Np.call(Tp, Xp));
-         const fp = null === Bp ? bp : this.readEvents(Dp);
-         if (xp.consume(Dp - (null !== Bp && void 0 !== Bp ? Bp : 0)), this.netKept = null !== Bp && void 0 !== Bp ? Bp : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== jp) return this.crash(yp, void 0 === ep || ep instanceof op.b ? jp.error : ep), !1;
+         null !== aT && null !== QT && cT === WT.V.Errors && (null === (sT = (FT = this.handlers).onErrors) || void 0 === sT || sT.call(FT, aT));
+         const PT = null === QT ? VT : this.readEvents(jT);
+         if (nT.consume(jT - (null !== QT && void 0 !== QT ? QT : 0)), this.netKept = null !== QT && void 0 !== QT ? QT : 0, this.keptFrames = this.netKept > 0 ? this.keptFrames + 1 : 0, null !== OT) return this.crash(BT, void 0 === bT || bT instanceof zT.c ? OT.error : bT), !1;
```

#### 54. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L377-L379` → after: `L377-L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L377-L379) · [Before (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L377-L379)

```diff
-         const hp = this.headerView()[Op.nb.FrameDraw];
-         if (this.lastFrameKind = (0, Pp.f)(Ap, hp), wp === Op.P.Fatal) return this.crash(Up, null), !1;
-         if (null === Bp) return this.crash(tp, `the core kept ${Jp} of ${Dp} net-in bytes`), !1;
+         const uT = this.headerView()[WT.yb.FrameDraw];
+         if (this.lastFrameKind = (0, LT.f)(lT, uT), cT === WT.V.Fatal) return this.crash(ZT, null), !1;
+         if (null === QT) return this.crash(fT, `the core kept ${IT} of ${jT} net-in bytes`), !1;
```

#### 55. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L384)

```diff
-           pp.ptr = ip[Op.nb.EventsPtr], pp.len = ip[Op.nb.EventsLen], pp.net = fp, pp.kind = this.lastFrameKind;
+           TT.ptr = UT[WT.yb.EventsPtr], TT.len = UT[WT.yb.EventsLen], TT.net = PT, TT.kind = this.lastFrameKind;
```

#### 56. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L434)

```diff
-           ip && pp.writeRecord(Op.wb.UiPrefs, 0, ip.nametagCutDistance, 0, (0, Op.we)(ip)) && (this.unsentUiPrefs = null);
+           UT && TT.writeRecord(WT.Gb.UiPrefs, 0, UT.nametagCutDistance, 0, (0, WT.Le)(UT)) && (this.unsentUiPrefs = null);
```

#### 57. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L436)

```diff
-           cp && pp.writeRecord(Op.wb.EnvPrefs, (0, Op.ce)(cp), cp.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
+           mT && TT.writeRecord(WT.Gb.EnvPrefs, (0, WT.qe)(mT), mT.fogChunks, 0, 0) && (this.unsentEnvPrefs = null);
```

#### 58. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L438)

```diff
-           op && pp.writeRecord(Op.wb.Sensitivity, 0, op.mouse, op.touch, (0, Ap.n)(op.fovPercent)) && (this.unsentLookPrefs = null);
+           zT && TT.writeRecord(WT.Gb.Sensitivity, 0, zT.mouse, zT.touch, (0, lT.k)(zT.fovPercent)) && (this.unsentLookPrefs = null);
```

#### 59. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L476)

```diff
-         return !this.isStopped && (ip.byteLength > Op.cc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
+         return !this.isStopped && (UT.byteLength > WT.gc.PayloadMaxBytes ? (this.optionsDropped++, !1) : (this.unsentOptions.push({
```

#### 60. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L482)

```diff
-         return this.callCore("setChunkCap", null, (ip => ip.hSp(pp)))
+         return this.callCore("setChunkCap", null, (UT => UT.qgT(TT)))
```

#### 61. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L485` → after: `L485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L485) · [Before (L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L485)

```diff
-         const ip = this.callCore("shedMemory", null, (ip => ip.ZSp(pp)));
+         const UT = this.callCore("shedMemory", null, (UT => UT.xgT(TT)));
```

#### 62. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L489` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L489) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L489)

```diff
-         const pp = this.callCore("addDistanceInUse", null, (pp => pp.oSp()));
+         const TT = this.callCore("addDistanceInUse", null, (TT => TT.QMT()));
```

#### 63. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L493` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L493) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L493)

```diff
-         return this.callCore("setChunkAddDistance", !1, (cp => cp.bSp(pp, ip)))
+         return this.callCore("setChunkAddDistance", !1, (mT => mT.fgT(TT, UT)))
```

#### 64. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L496)

```diff
-         return this.callCore("setGameHost", !1, (ip => (ip.vSp(pp), this.gameHost = pp, !0)))
+         return this.callCore("setGameHost", !1, (UT => (UT.hMT(TT), this.gameHost = TT, !0)))
```

#### 65. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L499)

```diff
-         return this.callCore("setAntiCheatProbes", !1, (ip => ip.TSp(pp)))
+         return this.callCore("setAntiCheatProbes", !1, (UT => UT.cgT(TT)))
```

#### 66. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L503` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L503) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L503)

```diff
-           ip.NSp(pp)
+           UT.ZgT(TT)
```

#### 67. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L508)

```diff
-           ip.nSp(pp)
+           UT.bgT(TT)
```

#### 68. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L513` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L513) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L513)

```diff
-           cp.nw(pp, ip)
+           mT.dc(TT, UT)
```

#### 69. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L517)

```diff
-         return this.callCore(hp, [], (ip => ip.Fw(pp)))
+         return this.callCore(uT, [], (UT => UT.wc(TT)))
```

#### 70. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L520)

```diff
-         return this.callCore("setTextureLayers", !1, (ip => ip.rSp(pp)))
+         return this.callCore("setTextureLayers", !1, (UT => UT.JgT(TT)))
```

#### 71. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L528)

```diff
-         return this.callCore("setBlockColours", !1, (pp => pp.ROp(ip, cp, Op)))
+         return this.callCore("setBlockColours", !1, (TT => TT.nWT(UT, mT, WT)))
```

#### 72. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L531` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L531) · [Before (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L531)

```diff
-         return this.callCore(ap, [], (pp => pp.pxp()))
+         return this.callCore(CT, [], (TT => TT.ygT()))
```

#### 73. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L534` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L534) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L534)

```diff
-         return this.callCore(ap, !1, (op => op.GSp(pp, cp, ip, Op)))
+         return this.callCore(CT, !1, (zT => zT.YgT(TT, mT, UT, WT)))
```

#### 74. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L539` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L539) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L539)

```diff
-           return null !== (xp = null === (Lp = Sp.fOp) || void 0 === Lp ? void 0 : Lp.call(Sp, pp, ip, cp, Op, op, Ip)) && void 0 !== xp && xp
+           return null !== (nT = null === (HT = gT.qWT) || void 0 === HT ? void 0 : HT.call(gT, TT, UT, mT, WT, zT, MT)) && void 0 !== nT && nT
```

#### 75. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L545` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L545) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L545)

```diff
-           return null !== (ip = null === (cp = pp.zSp) || void 0 === cp ? void 0 : cp.call(pp)) && void 0 !== ip ? ip : null
+           return null !== (UT = null === (mT = TT.dgT) || void 0 === mT ? void 0 : mT.call(TT)) && void 0 !== UT ? UT : null
```

#### 76. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L551` → after: `L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L551) · [Before (L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L551)

```diff
-           null === (Sp = Ip.gSp) || void 0 === Sp || Sp.call(Ip, pp, ip, cp, Op, op)
+           null === (gT = MT.egT) || void 0 === gT || gT.call(MT, TT, UT, mT, WT, zT)
```

#### 77. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L557` → after: `L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L557) · [Before (L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L557)

```diff
-           return null !== (ip = null === (cp = pp.KSp) || void 0 === cp ? void 0 : cp.call(pp)) && void 0 !== ip ? ip : []
+           return null !== (UT = null === (mT = TT.tgT) || void 0 === mT ? void 0 : mT.call(TT)) && void 0 !== UT ? UT : []
```

#### 78. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L563` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L563) · [Before (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L563)

```diff
-           return null !== (ip = null === (cp = pp.sSp) || void 0 === cp ? void 0 : cp.call(pp)) && void 0 !== ip ? ip : null
+           return null !== (UT = null === (mT = TT.wgT) || void 0 === mT ? void 0 : mT.call(TT)) && void 0 !== UT ? UT : null
```

#### 79. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L577-L578` → after: `L577-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L577-L578) · [Before (L577-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L577-L578)

```diff
-           cp = ip[Op.nb.EventsPtr],
-           op = ip[Op.nb.EventsLen];
+           mT = UT[WT.yb.EventsPtr],
+           zT = UT[WT.yb.EventsLen];
```

#### 80. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L582` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L582) · [Before (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L582)

```diff
-         if (cp % 4 !== 0 || cp + op > Sp.byteLength) return this.crash(fp, `events of ${op} bytes at ${cp} outside ${Sp.byteLength} bytes of memory`), bp;
+         if (mT % 4 !== 0 || mT + zT > gT.byteLength) return this.crash(PT, `events of ${zT} bytes at ${mT} outside ${gT.byteLength} bytes of memory`), VT;
```

#### 81. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L588` → after: `L588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L588) · [Before (L588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L588)

```diff
-           const pp = Dp + Op.$,
+           const TT = jT + WT.gb,
```

#### 82. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L591` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L591) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L591)

```diff
-           if (ip < 0 || Lp > op - pp) return this.crash(fp, `event record at ${Dp} overruns its ${op} bytes`), bp;
+           if (UT < 0 || HT > zT - TT) return this.crash(PT, `event record at ${jT} overruns its ${zT} bytes`), VT;
```

#### 83. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L594-L597` → after: `L594-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L594-L597) · [Before (L594-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L594-L597)

```diff
-           if (Mp === Op.bb.RawMessage) {
-             const pp = Lp >= Op.Jc.BYTES ? 65535 & Cp(1) : -1,
-               ip = pp === Op.Jc.STRING_TYPE,
-               cp = Lp === (ip ? Op.Jc.STRING_TYPE_BYTES : Op.Jc.BYTES) ? Yp(Cp(2), Cp(3)) : null,
+           if (dT === WT.hb.RawMessage) {
+             const TT = HT >= WT.Nc.BYTES ? 65535 & wT(1) : -1,
+               UT = TT === WT.Nc.STRING_TYPE,
+               mT = HT === (UT ? WT.Nc.STRING_TYPE_BYTES : WT.Nc.BYTES) ? kT(wT(2), wT(3)) : null,
```

#### 84. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L599` → after: `L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L599) · [Before (L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L599)

```diff
-             if (!cp || ip && !op) return this.crash(fp, `RawMessage at ${Dp} of ${Lp} bytes names bytes outside net-in`), bp;
+             if (!mT || UT && !zT) return this.crash(PT, `RawMessage at ${jT} of ${HT} bytes names bytes outside net-in`), VT;
```

#### 85. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L603)

```diff
-               VD: pp,
+               Xj: TT,
```

#### 86. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L608` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L608) · [Before (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L608)

```diff
-           } else if (Mp === Op.bb.CoreErrors) {
+           } else if (dT === WT.hb.CoreErrors) {
```

#### 87. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L611` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L611) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L611)

```diff
-             if (pp < 0 || pp > Op.J.PAIRS_MAX || Lp !== 4 * (Op.J.FIXED_WORDS + Op.J.PAIR_WORDS * pp)) return this.crash(fp, `CoreErrors at ${Dp} of ${Lp} bytes`), bp;
+             if (TT < 0 || TT > WT.Q.PAIRS_MAX || HT !== 4 * (WT.Q.FIXED_WORDS + WT.Q.PAIR_WORDS * TT)) return this.crash(PT, `CoreErrors at ${jT} of ${HT} bytes`), VT;
```

#### 88. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L618)

```diff
-           } else if (Mp === Op.bb.RenderReload) {
+           } else if (dT === WT.hb.RenderReload) {
```

#### 89. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L620) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L620)

```diff
-             if (Lp !== Op.Yc.BYTES) return this.crash(fp, `RenderReload at ${Dp} of ${Lp} bytes`), bp;
+             if (HT !== WT._c.BYTES) return this.crash(PT, `RenderReload at ${jT} of ${HT} bytes`), VT;
```

#### 90. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L622)

```diff
-           } else if (Mp === Op.bb.JoinPreloadEnded) {
+           } else if (dT === WT.hb.JoinPreloadEnded) {
```

#### 91. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L624` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L624) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L624)

```diff
-             if (Lp !== Op.Db.BYTES) return this.crash(fp, `JoinPreloadEnded at ${Dp} of ${Lp} bytes`), bp;
+             if (HT !== WT.Jb.BYTES) return this.crash(PT, `JoinPreloadEnded at ${jT} of ${HT} bytes`), VT;
```

#### 92. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L626-L630` → after: `L626-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L626-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L626-L630) · [Before (L626-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L626-L630)

```diff
-               chunks: Cp(Op.Db.CHUNKS),
-               bytes: Cp(Op.Db.BYTES_HELD),
-               asked: Cp(Op.Db.ASKED),
-               replaced: Cp(Op.Db.REPLACED),
-               dropped: Cp(Op.Db.DROPPED)
+               chunks: wT(WT.Jb.CHUNKS),
+               bytes: wT(WT.Jb.BYTES_HELD),
+               asked: wT(WT.Jb.ASKED),
+               replaced: wT(WT.Jb.REPLACED),
+               dropped: wT(WT.Jb.DROPPED)
```

#### 93. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L632` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L632) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L632)

```diff
-           } else if (Mp === Op.bb.Images) {
+           } else if (dT === WT.hb.Images) {
```

#### 94. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L635` → after: `L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L635) · [Before (L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L635)

```diff
-           } else if (Mp === Op.bb.ModelRequests)
+           } else if (dT === WT.hb.ModelRequests)
```

#### 95. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L639` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L639) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L639)

```diff
-             } else if (Mp === Op.bb.ModelTaken) {
+             } else if (dT === WT.hb.ModelTaken) {
```

#### 96. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L641` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L641) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L641)

```diff
-               if (Lp < 4) return this.crash(fp, `ModelTaken at ${Dp} of ${Lp} bytes`), bp;
+               if (HT < 4) return this.crash(PT, `ModelTaken at ${jT} of ${HT} bytes`), VT;
```

#### 97. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L645)

```diff
-             } else if (Mp === Op.bb.TerrainTexturesWanted) {
+             } else if (dT === WT.hb.TerrainTexturesWanted) {
```

#### 98. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L647)

```diff
-             if (0 !== Lp) return this.crash(fp, `TerrainTexturesWanted at ${Dp} of ${Lp} bytes`), bp;
+             if (0 !== HT) return this.crash(PT, `TerrainTexturesWanted at ${jT} of ${HT} bytes`), VT;
```

#### 99. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L649` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L649) · [Before (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L649)

```diff
-           } else if (Mp === Op.bb.KeepAliveDue) {
+           } else if (dT === WT.hb.KeepAliveDue) {
```

#### 100. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L651)

```diff
-             if (Lp > Op.Fb) return this.crash(fp, `KeepAliveDue at ${Dp} of ${Lp} bytes`), bp;
+             if (HT > WT.Lb) return this.crash(PT, `KeepAliveDue at ${jT} of ${HT} bytes`), VT;
```

#### 101. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L653-L654` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L653-L654) · [Before (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L653-L654)

```diff
-           } else if (Mp === Op.bb.ConnectionState) {
-             if (Lp !== Op.w) return this.crash(fp, `ConnectionState at ${Dp} of ${Lp} bytes`), bp;
+           } else if (dT === WT.hb.ConnectionState) {
+             if (HT !== WT.z) return this.crash(PT, `ConnectionState at ${jT} of ${HT} bytes`), VT;
```

#### 102. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L661-L662` → after: `L661-L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L661-L662) · [Before (L661-L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L661-L662)

```diff
-           } else if (Mp === Op.bb.EnvLighting || Mp === Op.bb.SkyImages) {
-             if (Lp !== (Mp === Op.bb.EnvLighting ? Op.Y : Op.qd)) return this.crash(fp, `event ${Mp} at ${Dp} of ${Lp} bytes`), bp;
+           } else if (dT === WT.hb.EnvLighting || dT === WT.hb.SkyImages) {
+             if (HT !== (dT === WT.hb.EnvLighting ? WT.cb : WT.Ad)) return this.crash(PT, `event ${dT} at ${jT} of ${HT} bytes`), VT;
```

#### 103. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L667-L668` → after: `L667-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L667-L668) · [Before (L667-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L667-L668)

```diff
-           } else if (Mp === Op.bb.ReconnectGrace) {
-             if (Lp !== Op.sc) return this.crash(fp, `ReconnectGrace at ${Dp} of ${Lp} bytes`), bp;
+           } else if (dT === WT.hb.ReconnectGrace) {
+             if (HT !== WT.wc) return this.crash(PT, `ReconnectGrace at ${jT} of ${HT} bytes`), VT;
```

#### 104. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L673-L674` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L673-L674) · [Before (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L673-L674)

```diff
-               sessionBased: 0 !== (pp & Op.Mc.SessionBased),
-               replayOffer: 0 !== (pp & Op.Mc.ReplayOffer)
+               sessionBased: 0 !== (TT & WT.Rc.SessionBased),
+               replayOffer: 0 !== (TT & WT.Rc.ReplayOffer)
```

#### 105. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L677)

```diff
-           Dp = pp + (0, Op.ue)(Lp)
+           jT = TT + (0, WT.Ge)(HT)
```

#### 106. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L693-L695` → after: `L693-L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L693-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L693-L695) · [Before (L693-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L693-L695)

```diff
-         this.forEachOut(dp, "net-out", Op.nb.NetOutPtr, Op.nb.NetOutLen, Op.Zb, 0, ((ip, cp, op, Ip) => {
-           const Sp = (0, Op.ie)(cp);
-           Sp === Op._b.Frame ? pp((0, Op.he)(cp), op) : this.crash(dp, `net-out record at ${Ip} is kind ${Sp}, not a frame`)
+         this.forEachOut(iT, "net-out", WT.yb.NetOutPtr, WT.yb.NetOutLen, WT.ac, 0, ((UT, mT, zT, MT) => {
+           const gT = (0, WT.Ae)(mT);
+           gT === WT.bc.Frame ? TT((0, WT.xe)(mT), zT) : this.crash(iT, `net-out record at ${MT} is kind ${gT}, not a frame`)
```

#### 107. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L699` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L699) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L699)

```diff
-         this.forEachOut(ep, "worker-out", Op.nb.WorkerOutPtr, Op.nb.WorkerOutLen, Op.Gd, 4, ((ip, cp, op, Ip) => {
+         this.forEachOut(bT, "worker-out", WT.yb.WorkerOutPtr, WT.yb.WorkerOutLen, WT.Vd, 4, ((UT, mT, zT, MT) => {
```

#### 108. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L701)

```diff
-             xp = Sp === Op.Wd.Init ? this.initOf(op, Ip) : op;
+             nT = gT === WT.le.Init ? this.initOf(zT, MT) : zT;
```

#### 109. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L707-L708` → after: `L707-L708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L707-L708) · [Before (L707-L708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L707-L708)

```diff
-         if (pp.byteLength !== Op.qb) return this.crash(ep, `worker-out Init record at ${ip} is ${pp.byteLength} bytes, not a view`), null;
-         const op = new DataView(pp.buffer, pp.byteOffset, Op.qb),
+         if (TT.byteLength !== WT.Ab) return this.crash(bT, `worker-out Init record at ${UT} is ${TT.byteLength} bytes, not a view`), null;
+         const zT = new DataView(TT.buffer, TT.byteOffset, WT.Ab),
```

#### 110. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L711` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L711) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L711)

```diff
-         return Ip + Sp > cp.byteLength ? (this.crash(ep, `worker-out Init record at ${ip} names ${Sp} bytes at ${Ip} outside ${cp.byteLength} bytes of memory`), null) : new Uint8Array(cp, Ip, Sp)
+         return MT + gT > mT.byteLength ? (this.crash(bT, `worker-out Init record at ${UT} names ${gT} bytes at ${MT} outside ${mT.byteLength} bytes of memory`), null) : new Uint8Array(mT, MT, gT)
```

#### 111. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L720` → after: `L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L720) · [Before (L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L720)

```diff
-         if (Yp % 4 !== 0 || Yp + Dp > Ap.byteLength) return void this.crash(pp, `${ip} of ${Dp} bytes at ${Yp} outside ${Ap.byteLength} bytes of memory`);
+         if (kT % 4 !== 0 || kT + jT > lT.byteLength) return void this.crash(TT, `${UT} of ${jT} bytes at ${kT} outside ${lT.byteLength} bytes of memory`);
```

#### 112. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L726` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L726)

```diff
-           if (op < 0 || op > Dp - cp) return void this.crash(pp, `${ip} record at ${Wp} overruns its ${Dp} bytes`);
+           if (zT < 0 || zT > jT - mT) return void this.crash(TT, `${UT} record at ${pT} overruns its ${jT} bytes`);
```

#### 113. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L728)

```diff
-           Wp = cp + (0, Op.ue)(op)
+           pT = mT + (0, WT.Ge)(zT)
```

#### 114. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L734-L735` → after: `L734-L735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L734-L735) · [Before (L734-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L734-L735)

```diff
-           cp = ip[Op.nb.EventsPtr],
-           op = ip[Op.nb.EventsLen];
+           mT = UT[WT.yb.EventsPtr],
+           zT = UT[WT.yb.EventsLen];
```

#### 115. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L738` → after: `L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L738) · [Before (L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L738)

```diff
-         if (cp % 4 !== 0 || cp + op > Ip.byteLength) return void this.crash(fp, `events of ${op} bytes at ${cp} outside ${Ip.byteLength} bytes of memory`);
+         if (mT % 4 !== 0 || mT + zT > MT.byteLength) return void this.crash(PT, `events of ${zT} bytes at ${mT} outside ${MT.byteLength} bytes of memory`);
```

#### 116. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L742` → after: `L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L742) · [Before (L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L742)

```diff
-           const ip = xp + Op.$,
+           const UT = nT + WT.gb,
```

#### 117. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L745-L746` → after: `L745-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L745-L746) · [Before (L745-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L745-L746)

```diff
-           if (cp < 0 || Ip > op - ip) return void this.crash(fp, `event record at ${xp} overruns its ${op} bytes`);
-           pp(65535 & cp, Sp, ip, Ip), xp = ip + (0, Op.ue)(Ip)
+           if (mT < 0 || MT > zT - UT) return void this.crash(PT, `event record at ${nT} overruns its ${zT} bytes`);
+           TT(65535 & mT, gT, UT, MT), nT = UT + (0, WT.Ge)(MT)
```

#### 118. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L750)

```diff
-         ip instanceof op.b ? this.crash(fp, ip.message) : this.crash(pp, ip)
+         UT instanceof zT.c ? this.crash(PT, UT.message) : this.crash(TT, UT)
```

#### 119. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L767)

```diff
-         return null !== ip && (pp.chunksReceived = ip[Op.Mb.ChunksReceived], pp.chunksCancelled = this.headerView()[Op.nb.ChunksCancelled], pp.chunksStored = ip[Op.Mb.ChunksStored], pp.jobsSent = ip[Op.Mb.JobsSent], pp.jobsDone = ip[Op.Mb.JobsDone], pp.jobsInFlight = ip[Op.Mb.Job … [truncated]
+         return null !== UT && (TT.chunksReceived = UT[WT.Tb.ChunksReceived], TT.chunksCancelled = this.headerView()[WT.yb.ChunksCancelled], TT.chunksStored = UT[WT.Tb.ChunksStored], TT.jobsSent = UT[WT.Tb.JobsSent], TT.jobsDone = UT[WT.Tb.JobsDone], TT.jobsInFlight = UT[WT.Tb.Job … [truncated]
```

#### 120. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L771)

```diff
-         const cp = null !== (pp = null === (ip = this.loadCountWords()) || void 0 === ip ? void 0 : ip[Op.Mb.ViewQueuedPrograms]) && void 0 !== pp ? pp : 0;
+         const mT = null !== (TT = null === (UT = this.loadCountWords()) || void 0 === UT ? void 0 : UT[WT.Tb.ViewQueuedPrograms]) && void 0 !== TT ? TT : 0;
```

#### 121. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L776` → after: `L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L776) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L776)

```diff
-         return null === cp ? null : [cp[Op.Mb.FirstViewLinkMs], cp[Op.Mb.FirstViewTerrainMs], cp[Op.Mb.FirstViewHeldMs], cp[Op.Mb.FirstViewOtherMs], cp[Op.Mb.FirstViewGaps], cp[Op.Mb.FirstViewGapMs], pp, ip]
+         return null === mT ? null : [mT[WT.Tb.FirstViewLinkMs], mT[WT.Tb.FirstViewTerrainMs], mT[WT.Tb.FirstViewHeldMs], mT[WT.Tb.FirstViewOtherMs], mT[WT.Tb.FirstViewGaps], mT[WT.Tb.FirstViewGapMs], TT, UT]
```

#### 122. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L780` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L780) · [Before (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L780)

```diff
-         const pp = this.core.aw();
+         const TT = this.core.xc();
```

#### 123. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L783)

```diff
-         return ip !== this.loadCountsBuffer && (this.loadCountsBuffer = ip, this.loadCounts = new Uint32Array(ip, pp, Op.Hb)), this.loadCounts
+         return UT !== this.loadCountsBuffer && (this.loadCountsBuffer = UT, this.loadCounts = new Uint32Array(UT, TT, WT.Mb)), this.loadCounts
```

#### 124. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L787)

```diff
-         return pp !== this.headerBuffer && (this.headerBuffer = pp, this.header = new Uint32Array(pp, this.core.RW(), Op.lb)), this.header
+         return TT !== this.headerBuffer && (this.headerBuffer = TT, this.header = new Uint32Array(TT, this.core.Hp(), WT.vb)), this.header
```

#### 125. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L791)

```diff
-   40984: (pp, ip, cp) => {
+   40919: (TT, UT, mT) => {
```

#### 126. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L793-L794` → after: `L793-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L793-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L793-L794) · [Before (L793-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L793-L794)

```diff
-       b: () => Sp,
-       e: () => Ip
+       c: () => gT,
+       f: () => MT
```

#### 127. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L796)

```diff
-     var Op = cp(4791);
+     var WT = mT(4780);
```

#### 128. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L817)

```diff
-   41025: (pp, ip, cp) => {
+   40975: (TT, UT, mT) => {
```

#### 129. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L819` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L819) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L819)

```diff
-       b: () => Op
+       e: () => WT
```

#### 130. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L827)

```diff
-   41046: (pp, ip, cp) => {
+   40991: (TT, UT, mT) => {
```

#### 131. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L829` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L829) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L829)

```diff
-       return cp(41049)
+       return mT(40999)
```

#### 132. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L833)

```diff
-       return cp(41055)
+       return mT(41007)
```

#### 133. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L841-L842` → after: `L841-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L841-L842) · [Before (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L841-L842)

```diff
-       f: () => Op,
-       j: () => op
+       h: () => WT,
+       i: () => zT
```

#### 134. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L845)

```diff
-   36484: (pp, ip, cp) => {
+   36358: (TT, UT, mT) => {
```

#### 135. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L850` → after: `L849-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L849-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L849-L850) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L850)

```diff
-       h: () => Ap
+       i: () => gT,
+       k: () => lT
```

#### 136. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L852-L853` → after: `L852-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L852-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L852-L853) · [Before (L852-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L852-L853)

```diff
-     var Op = cp(36472),
-       op = cp(10);
+     var WT = mT(36349),
+       zT = mT(11);
```

#### 137. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L865-L869` → after: `L865-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L865-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L865-L869) · [Before (L865-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L865-L869)

```diff
-         xp = (pp instanceof Error && null !== (op = pp.stack) && void 0 !== op ? op : "").split("\n").filter((pp => Ip.test(pp))).slice(0, 8).map((pp => pp.trim())),
-         Lp = null === ip ? "wasm memory unknown" : `wasm memory ${Math.round(ip/2**20)} MB`,
-         Yp = null === cp.panic ? "" : `, panic: ${(0,Op.j)(cp.panic)}`,
-         Dp = `${Sp}: ${pp instanceof Error?pp.message:String(pp)}`;
-       return `${(0,Op.q)(cp.kind,cp.refusedBytes)} ${Dp} (${Lp})${Yp}${xp.length>0?` | ${xp.join(" < ")}`:""}`
+         nT = (TT instanceof Error && null !== (zT = TT.stack) && void 0 !== zT ? zT : "").split("\n").filter((TT => MT.test(TT))).slice(0, 8).map((TT => TT.trim())),
+         HT = null === UT ? "wasm memory unknown" : `wasm memory ${Math.round(UT/2**20)} MB`,
+         kT = null === mT.panic ? "" : `, panic: ${(0,WT.k)(mT.panic)}`,
+         jT = `${gT}: ${TT instanceof Error?TT.message:String(TT)}`;
+       return `${(0,WT.p)(mT.kind,mT.refusedBytes)} ${jT} (${HT})${kT}${nT.length>0?` | ${nT.join(" < ")}`:""}`
```

#### 138. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L881)

```diff
-         arrayBufferDetached: (0, op.V)(null === (ip = (0, op.N)(cp, "detached")) || void 0 === ip ? void 0 : ip.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+         arrayBufferDetached: (0, zT.W)(null === (UT = (0, zT.P)(mT, "detached")) || void 0 === UT ? void 0 : UT.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
```

#### 139. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L894)

```diff
-         return null !== (cp = null === (Op = JSON.stringify(pp)) || void 0 === Op ? void 0 : Op.slice(0, Dp)) && void 0 !== cp ? cp : ip
+         return null !== (mT = null === (WT = JSON.stringify(TT)) || void 0 === WT ? void 0 : WT.slice(0, jT)) && void 0 !== mT ? mT : UT
```

#### 140. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L900)

```diff
-   41049: (pp, ip, cp) => {
+   40999: (TT, UT, mT) => {
```

#### 141. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L903)

```diff
-   41055: (pp, ip, cp) => {
+   41007: (TT, UT, mT) => {
```

#### 142. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L906)

```diff
-   36472: (pp, ip, cp) => {
+   36349: (TT, UT, mT) => {
```

#### 143. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L908` → after: `L908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L908) · [Before (L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L908)

```diff
-       e: () => Op,
+       d: () => WT,
```

#### 144. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L910-L912` → after: `L910-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L910-L912) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L910-L912)

```diff
-       j: () => Lp,
-       n: () => Sp,
-       q: () => op
+       k: () => HT,
+       o: () => gT,
+       p: () => zT
```

#### 145. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L917` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/214.js#L917) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/214.js#L917)

```diff
-       return Ip(pp, ip) ? `trap=alloc_failed ${ip} bytes` : `trap=${pp}`
+       return MT(TT, UT) ? `trap=alloc_failed ${UT} bytes` : `trap=${TT}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/215.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/215.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17)

#### 1. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L4)

```diff
-   36689: (pp, ip, cp) => {
+   36565: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L10)

```diff
-     var Op = cp(1819);
+     var WT = mT(1926);
```

#### 3. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L46)

```diff
-         this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new Op.e(45e3, pp), this.slow = new Op.e(8e3, (() => {
+         this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new WT.c(45e3, TT), this.slow = new WT.c(8e3, (() => {
```

#### 4. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L67)

```diff
-   36481: (pp, ip, cp) => {
+   36356: (TT, UT, mT) => {
```

#### 5. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L70` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L70) · [Before (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L70)

```diff
-       c: () => op,
+       d: () => zT,
```

#### 6. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L72)

```diff
-       g: () => Sp
+       f: () => gT
```

#### 7. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L85)

```diff
-   36682: (pp, ip, cp) => {
+   36550: (TT, UT, mT) => {
```

#### 8. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L87)

```diff
-       d: () => Ip,
+       c: () => MT,
```

#### 9. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L89-L90` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L89-L90) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L89-L90)

```diff
-       i: () => xp,
-       k: () => Sp,
+       h: () => nT,
+       j: () => gT,
```

#### 10. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L92-L93` → after: `L92-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L92-L93) · [Before (L92-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L92-L93)

```diff
-       o: () => Dp,
-       r: () => Pp
+       p: () => jT,
+       t: () => LT
```

#### 11. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L95-L96` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L95-L96) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L95-L96)

```diff
-     var Op = cp(195);
-     const op = 32 * cp(36481).c,
+     var WT = mT(208);
+     const zT = 32 * mT(36356).d,
```

#### 12. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L101)

```diff
-         const pp = Pp(Op.g.maxChunkHorizAddDistance + 1, Op.g.maxChunkVertAddDistance + 1);
+         const TT = LT(WT.f.maxChunkHorizAddDistance + 1, WT.f.maxChunkVertAddDistance + 1);
```

#### 13. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L113-L114)

```diff
-       let cp = Op.g.maxChunkHorizAddDistance,
-         op = Op.g.maxChunkVertAddDistance;
+       let mT = WT.f.maxChunkHorizAddDistance,
+         zT = WT.f.maxChunkVertAddDistance;
```

#### 14. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L138)

```diff
-       return pp === ip ? Ip + Op * Op <= pp * pp : pp > ip ? Math.abs(Op) <= ip && Ip + Op * Op <= pp * pp : Ip <= pp * pp && Ip + Op * Op <= ip * ip
+       return TT === UT ? MT + WT * WT <= TT * TT : TT > UT ? Math.abs(WT) <= UT && MT + WT * WT <= TT * TT : MT <= TT * TT && MT + WT * WT <= UT * UT
```

#### 15. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L141)

```diff
-   36679: (pp, ip, cp) => {
+   36546: (TT, UT, mT) => {
```

#### 16. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L143` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L143-L144) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L143)

```diff
-       c: () => dp,
+       d: () => iT,
+       e: () => aT,
```

#### 17. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L145-L147` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L146-L147) · [Before (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L145-L147)

```diff
-       j: () => Ep,
-       m: () => Cp,
-       p: () => Mp
+       k: () => wT,
+       n: () => dT
```

#### 18. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L149-L156` → after: `L149-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L149-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L149-L156) · [Before (L149-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L149-L156)

```diff
-     var Op = cp(195),
-       op = cp(104),
-       Ip = cp(131),
-       Sp = cp(291),
-       xp = cp(4485),
-       Lp = cp(659),
-       Yp = cp(36682),
-       Dp = cp(36686);
+     var WT = mT(208),
+       zT = mT(102),
+       MT = mT(133),
+       gT = mT(305),
+       nT = mT(4506),
+       HT = mT(684),
+       kT = mT(36550),
+       jT = mT(36557);
```

#### 19. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L170)

```diff
-       if ("ios" === ip) switch ((0, Sp.i)(pp)) {
+       if ("ios" === UT) switch ((0, gT.f)(TT)) {
```

#### 20. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L173)

```diff
-             footprintBytes: Hp(Yp.d), basis: "ipad-m", namesLimit: !1
+             footprintBytes: qT(kT.c), basis: "ipad-m", namesLimit: !1
```

#### 21. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L190)

```diff
-         basis: `memory-${cp}`,
+         basis: `memory-${mT}`,
```

#### 22. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L197)

```diff
-         footprintBytes: Hp(Yp.k),
+         footprintBytes: qT(kT.j),
```

#### 23. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L226)

```diff
-         const pp = Math.min(Sp, Hp(Yp.d));
+         const TT = Math.min(gT, qT(kT.c));
```

#### 24. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L232)

```diff
-           return Math.min(Yp.d, Math.max(Yp.i, ip))
+           return Math.min(kT.c, Math.max(kT.h, UT))
```

#### 25. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L234-L235` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L234-L235) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L234-L235)

```diff
-         Ap = Lp && Dp < Yp.d ? Math.min(Dp, Yp.g) : Dp,
-         Pp = (0, Yp.o)(Ap);
+         lT = HT && jT < kT.c ? Math.min(jT, kT.g) : jT,
+         LT = (0, kT.p)(lT);
```

#### 26. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L240-L241` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L240-L241) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L240-L241)

```diff
-         maxHorizDistance: null !== (op = null === Pp || void 0 === Pp ? void 0 : Pp.horizontal) && void 0 !== op ? op : Op.g.maxChunkHorizAddDistance,
-         maxVertDistance: null !== (Ip = null === Pp || void 0 === Pp ? void 0 : Pp.vertical) && void 0 !== Ip ? Ip : Op.g.maxChunkVertAddDistance,
+         maxHorizDistance: null !== (zT = null === LT || void 0 === LT ? void 0 : LT.horizontal) && void 0 !== zT ? zT : WT.f.maxChunkHorizAddDistance,
+         maxVertDistance: null !== (MT = null === LT || void 0 === LT ? void 0 : LT.vertical) && void 0 !== MT ? MT : WT.f.maxChunkVertAddDistance,
```

#### 27. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L253` → after: `L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L253) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L253)

```diff
-         ...(0, Sp.l)()
+         ...(0, gT.i)()
```

#### 28. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L258)

```diff
-       return ep(Rp(), (0, xp.f)(), (0, Lp.J)("wasm").length > 0)
+       return bT(JT(), (0, nT.g)(), (0, HT.B)("wasm").length > 0)
```

#### 29. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L262)

```diff
-       return mp ??= (0, Dp.p)(ep(Rp(), null, !1).chunkCap), mp
+       return YT ??= (0, jT.t)(bT(JT(), null, !1).chunkCap), YT
```

#### 30. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L271)

```diff
-       return (null !== (pp = kp) && void 0 !== pp ? pp : qp()).basis
+       return (null !== (TT = eT) && void 0 !== TT ? TT : xT()).basis
```

#### 31. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L278)

```diff
-   36686: (pp, ip, cp) => {
+   36557: (TT, UT, mT) => {
```

#### 32. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L280-L281` → after: `L280-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L280-L281) · [Before (L280-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L280-L281)

```diff
-       d: () => Rp,
-       j: () => dp,
+       F: () => YT,
+       e: () => JT,
```

#### 33. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L286)

```diff
-       v: () => mp
+       x: () => eT
```

#### 34. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L288-L289` → after: `L288-L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L288-L289) · [Before (L288-L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L288-L289)

```diff
-     var Op = cp(36481),
-       op = cp(36682);
+     var WT = mT(36356),
+       zT = mT(36550);
```

#### 35. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L291-L295` → after: `L291-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L291-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L291-L295) · [Before (L291-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L291-L295)

```diff
-       Sp = 40 * Op.c,
-       xp = 36 * Op.c,
-       Lp = 20 * Op.c,
-       Yp = 2 * Op.c,
-       Dp = 5 * Op.c;
+       gT = 40 * WT.d,
+       nT = 36 * WT.d,
+       HT = 20 * WT.d,
+       kT = 2 * WT.d,
+       jT = 5 * WT.d;
```

#### 36. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L300-L303` → after: `L300-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L300-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L300-L303) · [Before (L300-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L300-L303)

```diff
-     const Pp = 2 * Op.c,
-       Wp = 4 * Op.c,
-       yp = 35 * Op.c + Pp + Wp,
-       Up = 6.5 * Op.c,
+     const LT = 2 * WT.d,
+       pT = 4 * WT.d,
+       BT = 35 * WT.d + LT + pT,
+       ZT = 6.5 * WT.d,
```

#### 37. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L310)

```diff
-     vp(op.d), Op.c, Op.c, Op.c;
+     vT(zT.c), WT.d, WT.d, WT.d;
```

#### 38. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L328)

```diff
-       return pp >= op.d ? tp : Hp
+       return TT >= zT.c ? fT : qT
```

#### 39. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L352)

```diff
-           Yy: ip,
+           Gp: UT,
```

#### 40. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L369)

```diff
-         return kp(this.memory.memoryBytes(), pp, null !== (cp = this.ceilingBytes) && void 0 !== cp ? cp : ip)
+         return eT(this.memory.memoryBytes(), TT, null !== (mT = this.ceilingBytes) && void 0 !== mT ? mT : UT)
```

#### 41. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L378)

```diff
-           Ip = Math.max(ip + (this.ballastOn() ? Dp : 0), op),
+           MT = Math.max(UT + (this.ballastOn() ? jT : 0), zT),
```

#### 42. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L382-L383` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L382-L383) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L382-L383)

```diff
-           const pp = "least" === Sp ? `took ${op} bytes instead` : "frames grow it in steps";
-           console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Ip} bytes was refused at ${Op} bytes; ${pp}`)
+           const TT = "least" === gT ? `took ${zT} bytes instead` : "frames grow it in steps";
+           console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${MT} bytes was refused at ${WT} bytes; ${TT}`)
```

#### 43. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L405)

```diff
-           (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (ip = this.shedding.readDistanceInUse()) && void 0 !== ip ? ip : this.distanceInUse);
+           (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (UT = this.shedding.readDistanceInUse()) && void 0 !== UT ? UT : this.distanceInUse);
```

#### 44. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L413)

```diff
-         this.noteWorker(`Mesh${pp}`, ip)
+         this.noteWorker(`Mesh${TT}`, UT)
```

#### 45. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L416)

```diff
-         this.workerGone(`Mesh${pp}`)
+         this.workerGone(`Mesh${TT}`)
```

#### 46. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L438)

```diff
-           wasmMemoryNow: `${(0,Op.g)(this.memory.memoryBytes())} MiB`
+           wasmMemoryNow: `${(0,WT.f)(this.memory.memoryBytes())} MiB`
```

#### 47. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L446)

```diff
-           cp.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${ip} KiB`
+           mT.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${UT} KiB`
```

#### 48. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L451-L452` → after: `L451-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L451-L452) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L451-L452)

```diff
-           }] of this.workers) cp[`wasmMemory${Op}`] = qp(Sp) + (xp ? " (gone)" : "");
-         const Ip = null !== (pp = null === (ip = this.footprint) || void 0 === ip ? void 0 : ip.describe()) && void 0 !== pp ? pp : null;
+           }] of this.workers) mT[`wasmMemory${WT}`] = xT(gT) + (nT ? " (gone)" : "");
+         const MT = null !== (TT = null === (UT = this.footprint) || void 0 === UT ? void 0 : UT.describe()) && void 0 !== TT ? TT : null;
```

#### 49. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L457-L458` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L457-L458) · [Before (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L457-L458)

```diff
-         let Sp = (null !== (pp = null === (ip = this.main) || void 0 === ip ? void 0 : ip.reservesRefused) && void 0 !== pp ? pp : 0) + this.replacedRefusals.reserves,
-           xp = (null !== (cp = null === (op = this.main) || void 0 === op ? void 0 : op.allocationsRefused) && void 0 !== cp ? cp : 0) + this.replacedRefusals.allocations;
+         let gT = (null !== (TT = null === (UT = this.main) || void 0 === UT ? void 0 : UT.reservesRefused) && void 0 !== TT ? TT : 0) + this.replacedRefusals.reserves,
+           nT = (null !== (mT = null === (zT = this.main) || void 0 === zT ? void 0 : zT.allocationsRefused) && void 0 !== mT ? mT : 0) + this.replacedRefusals.allocations;
```

#### 50. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L464-L465` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L464-L465) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L464-L465)

```diff
-           wasmMainMiB: Number((0, Op.g)(this.memory.memoryBytes())),
-           wasmWorkersMiB: Number((0, Op.g)(this.workersMemoryBytes())),
+           wasmMainMiB: Number((0, WT.f)(this.memory.memoryBytes())),
+           wasmWorkersMiB: Number((0, WT.f)(this.workersMemoryBytes())),
```

#### 51. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L501)

```diff
-         this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${pp}: frames grow on demand from here`)
+         this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${TT}: frames grow on demand from here`)
```

#### 52. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L510` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L510) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L510)

```diff
-         this.stopped || (null !== cp ? (this.sheds++, this.shedCap = cp, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), ip.Yy(pp, this.sheds, this.details())) : Ap(pp) && this.stopSteps("nothing is left to shed"))
+         this.stopped || (null !== mT ? (this.sheds++, this.shedCap = mT, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), UT.Gp(TT, this.sheds, this.details())) : lT(TT) && this.stopSteps("nothing is left to shed"))
```

#### 53. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L523-L524` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/215.js#L523-L524) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/215.js#L523-L524)

```diff
-       const ip = (pp, ip) => `${pp}/${(0,Op.g)(ip)}`;
-       return `memory ${(0,Op.g)(pp.memoryBytes)} live ${(0,Op.g)(pp.liveBytes)} peak ${(0,Op.g)(pp.peakLiveBytes)} unused ${(0,Op.g)(pp.unusedBytes)} ceiling ${(0,Op.g)(pp.ceilingBytes)} MiB; grows upFront ${ip(pp.grows.upFront,pp.grownBytes.upFront)} ahead ${ip(pp.grows.ahead,pp … [truncated]
+       const UT = (TT, UT) => `${TT}/${(0,WT.f)(UT)}`;
+       return `memory ${(0,WT.f)(TT.memoryBytes)} live ${(0,WT.f)(TT.liveBytes)} peak ${(0,WT.f)(TT.peakLiveBytes)} unused ${(0,WT.f)(TT.unusedBytes)} ceiling ${(0,WT.f)(TT.ceilingBytes)} MiB; grows upFront ${UT(TT.grows.upFront,TT.grownBytes.upFront)} ahead ${UT(TT.grows.ahead,TT … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/216.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/216.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc)

#### 1. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/216.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/216.js#L4)

```diff
-   36527: (pp, ip, cp) => {
+   36408: (TT, UT, mT) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/217.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/217.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0)

#### 1. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L4)

```diff
-   36539: (pp, ip, cp) => {
+   36415: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L8)

```diff
-     cp(36543);
+     mT(36419);
```

#### 3. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L10-L12` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L10-L12) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L10-L12)

```diff
-       op = cp(62),
-       Ip = cp(1692),
-       Sp = cp(1049),
+       zT = mT(63),
+       MT = mT(1792),
+       gT = mT(1126),
```

#### 4. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L14-L22` → after: `L14-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L14-L22) · [Before (L14-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L14-L22)

```diff
-       Lp = cp(3224),
-       Yp = cp(1149),
-       Dp = cp(1211),
-       Ap = cp(4677),
-       Pp = cp(1480),
-       Wp = cp(36549),
-       yp = cp(1201),
-       Up = cp(1356),
-       wp = cp(1538),
+       HT = mT(3267),
+       kT = mT(1231),
+       jT = mT(1302),
+       lT = mT(4686),
+       LT = mT(1569),
+       pT = mT(36424),
+       BT = mT(1288),
+       ZT = mT(1437),
+       cT = mT(1633),
```

#### 5. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L24-L34` → after: `L24-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L24-L34) · [Before (L24-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L24-L34)

```diff
-       tp = cp(1482),
-       Hp = cp(640),
-       dp = cp(5052),
-       ep = cp(768),
-       jp = cp(1251),
-       kp = cp(1234),
-       mp = cp(5061),
-       Rp = cp(1060),
-       qp = cp(36557),
-       Mp = cp(36565),
-       Cp = cp(1112);
+       fT = mT(1576),
+       qT = mT(653),
+       iT = mT(5041),
+       bT = mT(825),
+       OT = mT(1336),
+       eT = mT(1321),
+       YT = mT(5048),
+       JT = mT(1135),
+       xT = mT(36432),
+       dT = mT(36435),
+       wT = mT(1188);
```

#### 6. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L45)

```diff
-       } = (0, yp.H)(), Bp = (0, wp.useNavigatePreserveSearch)(), [Np, Tp] = (0, op.useState)("Enter"), [fp, bp] = (0, op.useState)(""), hp = op.useRef(null), ap = null === (ip = ep.c[Xp]) || void 0 === ip ? void 0 : ip.showWorldsInsteadOfCustomLobbies, np = ap ? 1 : null === (cp  … [truncated]
+       } = (0, BT.z)(), QT = (0, cT.useNavigatePreserveSearch)(), [sT, FT] = (0, zT.useState)("Enter"), [PT, VT] = (0, zT.useState)(""), uT = zT.useRef(null), CT = null === (UT = bT.d[aT]) || void 0 === UT ? void 0 : UT.showWorldsInsteadOfCustomLobbies, rT = CT ? 1 : null === (mT  … [truncated]
```

#### 7. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L122-L123` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L122-L123) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L122-L123)

```diff
-         Ap.b.getNewStarterName().then((pp => {
-           Zp((ip => "" !== ip.baseOptions.name ? ip : {
+         lT.d.getNewStarterName().then((TT => {
+           ET((UT => "" !== UT.baseOptions.name ? UT : {
```

#### 8. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L134)

```diff
-         "customSchematic" === rp.mapOptions.mapType && null === zp && (0, Yp.postJsonWithMetricsCookiesAndJsonResponse)(`${Dp.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
+         "customSchematic" === NT.mapOptions.mapType && null === hT && (0, kT.postJsonWithMetricsCookiesAndJsonResponse)(`${jT.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
```

#### 9. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L144)

```diff
-             eC: pp => {
+             Qy: TT => {
```

#### 10. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L150)

```diff
-             eC: pp => {
+             Qy: TT => {
```

#### 11. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L156)

```diff
-             eC: pp => {
+             Qy: TT => {
```

#### 12. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L162)

```diff
-             eC: pp => {
+             Qy: TT => {
```

#### 13. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L168)

```diff
-             eC: pp => {
+             Qy: TT => {
```

#### 14. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L174)

```diff
-             eC: pp => {
+             Qy: TT => {
```

#### 15. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L180` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L180) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L180)

```diff
-             eC: pp => {
+             Qy: TT => {
```

#### 16. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L186)

```diff
-         Ii = (0, Cp.jsx)(dp.i, {
+         WU = (0, wT.jsx)(iT.f, {
```

#### 17. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L190)

```diff
-           children: (0, Cp.jsx)(Ip.c, {
+           children: (0, wT.jsx)(MT.e, {
```

#### 18. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L193)

```diff
-               const cp = (0, kp.rb)(pp);
+               const mT = (0, eT.Ab)(TT);
```

#### 19. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L196)

```diff
-             maxLength: kp.M,
+             maxLength: eT.U,
```

#### 20. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L209)

```diff
-             children: [(0, Cp.jsx)(Rp.d, {
+             children: [(0, wT.jsx)(JT.c, {
```

#### 21. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L214)

```diff
-             children: (0, Cp.jsx)(Pp.o, {
+             children: (0, wT.jsx)(LT.l, {
```

#### 22. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L217)

```diff
-                 (0, vp.k)("worldCreation"), Bp((0, Up.c)(Xp, rp.baseOptions.name))
+                 (0, vT.e)("worldCreation"), QT((0, ZT.d)(aT, NT.baseOptions.name))
```

#### 23. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L241)

```diff
-                 children: [Ii, (0, Cp.jsx)(dp.i, {
+                 children: [WU, (0, wT.jsx)(iT.f, {
```

#### 24. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L246)

```diff
-                     options: Op.o.map((pp => ({
+                     options: WT.r.map((TT => ({
```

#### 25. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L248)

```diff
-                       label: Op.d[pp]
+                       label: WT.e[TT]
```

#### 26. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L257)

```diff
-             }), ap && (0, Cp.jsx)(qp.e, {
+             }), CT && (0, wT.jsx)(xT.c, {
```

#### 27. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L264-L265` → after: `L264-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L264-L265) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L264-L265)

```diff
-             }), (ap || !(0, Hp.G)(np) && np > 0) && (0, Cp.jsx)(qp.i, {
-               mapTypes: ap ? Op.G : Op.m,
+             }), (CT || !(0, qT.E)(rT) && rT > 0) && (0, wT.jsx)(xT.d, {
+               mapTypes: CT ? WT.G : WT.p,
```

#### 28. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L285)

```diff
-                   children: (0, Cp.jsx)(Wp.c, {
+                   children: (0, wT.jsx)(pT.b, {
```

#### 29. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L287` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L287) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L287)

```diff
-                     schematics: null !== zp && void 0 !== zp ? zp : [],
+                     schematics: null !== hT && void 0 !== hT ? hT : [],
```

#### 30. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L312)

```diff
-                 children: [(0, Cp.jsx)(dp.i, {
+                 children: [(0, wT.jsx)(iT.f, {
```

#### 31. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L316)

```diff
-                   children: (0, Cp.jsx)(Ip.c, {
+                   children: (0, wT.jsx)(MT.e, {
```

#### 32. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L323)

```diff
-                 }), (0, Cp.jsx)(dp.i, {
+                 }), (0, wT.jsx)(iT.f, {
```

#### 33. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L337)

```diff
-                 }), (0, Cp.jsx)(dp.i, {
+                 }), (0, wT.jsx)(iT.f, {
```

#### 34. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L341)

```diff
-                   children: (0, Cp.jsx)(Ip.c, {
+                   children: (0, wT.jsx)(MT.e, {
```

#### 35. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L357)

```diff
-                 children: [(0, Cp.jsx)(dp.i, {
+                 children: [(0, wT.jsx)(iT.f, {
```

#### 36. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L360)

```diff
-                   children: (0, Cp.jsx)(Ip.c, {
+                   children: (0, wT.jsx)(MT.e, {
```

#### 37. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L364-L366` → after: `L364-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L364-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L364-L366) · [Before (L364-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L364-L366)

```diff
-                     maxLength: kp.M
-                   })
-                 }), (0, Cp.jsx)(dp.i, {
+                     maxLength: eT.U
+                   })
+                 }), (0, wT.jsx)(iT.f, {
```

#### 38. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L369)

```diff
-                   children: (0, Cp.jsx)(dp.e, {
+                   children: (0, wT.jsx)(iT.c, {
```

#### 39. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L375)

```diff
-                 }), (0, Cp.jsx)(dp.i, {
+                 }), (0, wT.jsx)(iT.f, {
```

#### 40. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L378)

```diff
-                   children: (0, Cp.jsx)(dp.e, {
+                   children: (0, wT.jsx)(iT.c, {
```

#### 41. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L384)

```diff
-                 }), (0, Cp.jsx)(dp.i, {
+                 }), (0, wT.jsx)(iT.f, {
```

#### 42. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L390-L391` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L390-L391) · [Before (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L390-L391)

```diff
-                     max: jp.F,
-                     value: null !== (Sp = rp.worldOptions.voidDeathHeight) && void 0 !== Sp ? Sp : "",
+                     max: OT.E,
+                     value: null !== (gT = NT.worldOptions.voidDeathHeight) && void 0 !== gT ? gT : "",
```

#### 43. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L397)

```diff
-                 }), (0, Cp.jsx)(dp.i, {
+                 }), (0, wT.jsx)(iT.f, {
```

#### 44. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L400)

```diff
-                   children: (0, Cp.jsx)(dp.e, {
+                   children: (0, wT.jsx)(iT.c, {
```

#### 45. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L406)

```diff
-                 }), (0, Cp.jsx)(dp.i, {
+                 }), (0, wT.jsx)(iT.f, {
```

#### 46. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L412-L414` → after: `L412-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L412-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L412-L414) · [Before (L412-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L412-L414)

```diff
-                     min: jp.L,
-                     max: jp.G,
-                     value: null !== (Ep = rp.worldOptions.worldBorder) && void 0 !== Ep ? Ep : "",
+                     min: OT.K,
+                     max: OT.F,
+                     value: null !== (tT = NT.worldOptions.worldBorder) && void 0 !== tT ? tT : "",
```

#### 47. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L420)

```diff
-                 }), (0, Cp.jsx)(dp.i, {
+                 }), (0, wT.jsx)(iT.f, {
```

#### 48. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L423)

```diff
-                   children: (0, Cp.jsx)(dp.e, {
+                   children: (0, wT.jsx)(iT.c, {
```

#### 49. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L431)

```diff
-             }), ap && (0, Cp.jsx)(mp.e, {
+             }), CT && (0, wT.jsx)(YT.c, {
```

#### 50. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L439)

```diff
-           children: [(0, Cp.jsx)(Pp.o, {
+           children: [(0, wT.jsx)(LT.l, {
```

#### 51. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L448)

```diff
-                     await Ap.b.createCustomLobby(rp), Tp("Success")
+                     await lT.d.createCustomLobby(NT), FT("Success")
```

#### 52. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L459)

```diff
-             children: (0, Cp.jsx)(dp.i, {
+             children: (0, wT.jsx)(iT.f, {
```

#### 53. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L465)

```diff
-               children: (0, Cp.jsx)(dp.e, {
+               children: (0, wT.jsx)(iT.c, {
```

#### 54. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L478)

```diff
-   36565: (pp, ip, cp) => {
+   36435: (TT, UT, mT) => {
```

#### 55. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L482)

```diff
-     var Op = cp(1049),
+     var WT = mT(1126),
```

#### 56. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L484-L486` → after: `L484-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L484-L486) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L484-L486)

```diff
-       Ip = cp(62),
-       Sp = cp(4664),
-       xp = cp(1112);
+       MT = mT(63),
+       gT = mT(4677),
+       nT = mT(1188);
```

#### 57. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L494)

```diff
-         Lp = (0, Sp.c)(Op, "y");
+         HT = (0, gT.e)(WT, "y");
```

#### 58. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L506)

```diff
-   36549: (pp, ip, cp) => {
+   36424: (TT, UT, mT) => {
```

#### 59. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L508-L509` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L508-L509) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L508-L509)

```diff
-       c: () => Dp,
-       g: () => Pp
+       b: () => jT,
+       e: () => LT
```

#### 60. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L511-L517` → after: `L511-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L511-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L511-L517) · [Before (L511-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L511-L517)

```diff
-     var Op = cp(62),
-       op = cp(1372),
-       Ip = cp(1201),
-       Sp = cp(1361),
-       xp = cp(3581),
-       Lp = cp(5048),
-       Yp = cp(1112);
+     var WT = mT(63),
+       zT = mT(1457),
+       MT = mT(1288),
+       gT = mT(1446),
+       nT = mT(3568),
+       HT = mT(5038),
+       kT = mT(1188);
```

#### 61. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L529)

```diff
-       } = (0, Ip.H)();
+       } = (0, MT.z)();
```

#### 62. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L535)

```diff
-         }), !ip && cp.map((pp => (0, Yp.jsx)(xp.g, {
+         }), !UT && mT.map((TT => (0, kT.jsx)(nT.f, {
```

#### 63. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L564` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L564) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L564)

```diff
-       } = (0, Ip.H)(), [xp, Ap] = (0, Op.useState)(null);
+       } = (0, MT.z)(), [nT, lT] = (0, WT.useState)(null);
```

#### 64. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L585)

```diff
-         }), null !== xp && (0, Yp.jsx)(Lp.j, {
+         }), null !== nT && (0, kT.jsx)(HT.f, {
```

#### 65. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L616)

```diff
-   36557: (pp, ip, cp) => {
+   36432: (TT, UT, mT) => {
```

#### 66. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L618-L619` → after: `L618-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L618-L619) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L618-L619)

```diff
-       e: () => Yp,
-       i: () => Dp
+       c: () => kT,
+       d: () => jT
```

#### 67. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L621-L622` → after: `L621-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L621-L622) · [Before (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L621-L622)

```diff
-     cp(62);
-     var Op = cp(1049),
+     mT(63);
+     var WT = mT(1126),
```

#### 68. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L625-L627` → after: `L625-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L625-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L625-L627) · [Before (L625-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L625-L627)

```diff
-       Sp = cp(322),
-       xp = cp(1201),
-       Lp = cp(1112);
+       gT = mT(351),
+       nT = mT(1288),
+       HT = mT(1188);
```

#### 69. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L638` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L638) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L638)

```diff
-       } = (0, xp.H)();
+       } = (0, nT.z)();
```

#### 70. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L648` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L648) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L648)

```diff
-           children: Ip.E.map((pp => Op || (0, Ip.u)(pp) ? (0, Lp.jsx)("button", {
+           children: MT.C.map((TT => WT || (0, MT.v)(TT) ? (0, HT.jsx)("button", {
```

#### 71. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L658` → after: `L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L658) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L658)

```diff
-               "--background-image": `url(${Sp.p[pp]})`
+               "--background-image": `url(${gT.p[TT]})`
```

#### 72. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L660)

```diff
-             children: Sp.o[pp]
+             children: gT.m[TT]
```

#### 73. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L677)

```diff
-       } = (0, xp.H)();
+       } = (0, nT.z)();
```

#### 74. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L687` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L687) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L687)

```diff
-           children: ip.map((pp => Yp || (0, Ip.y)(pp) ? (0, Lp.jsx)("button", {
+           children: UT.map((TT => kT || (0, MT.w)(TT) ? (0, HT.jsx)("button", {
```

#### 75. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L697` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L697) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L697)

```diff
-               "--background-image": `url(${Sp.k[pp]})`
+               "--background-image": `url(${gT.h[TT]})`
```

#### 76. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L699` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L699) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L699)

```diff
-             children: Sp.h[pp]
+             children: gT.g[TT]
```

#### 77. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/217.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/217.js#L705)

```diff
-   36543: () => {}
+   36419: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/218.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/218.js` (44 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b)

#### 1. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L4)

```diff
-   36549: (pp, ip, cp) => {
+   36424: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L6-L7)

```diff
-       c: () => Dp,
-       g: () => Pp
+       b: () => jT,
+       e: () => LT
```

#### 3. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L9-L15` → after: `L9-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L9-L15) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L9-L15)

```diff
-     var Op = cp(62),
-       op = cp(1372),
-       Ip = cp(1201),
-       Sp = cp(1361),
-       xp = cp(3581),
-       Lp = cp(5048),
-       Yp = cp(1112);
+     var WT = mT(63),
+       zT = mT(1457),
+       MT = mT(1288),
+       gT = mT(1446),
+       nT = mT(3568),
+       HT = mT(5038),
+       kT = mT(1188);
```

#### 4. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L27)

```diff
-       } = (0, Ip.H)();
+       } = (0, MT.z)();
```

#### 5. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L33)

```diff
-         }), !ip && cp.map((pp => (0, Yp.jsx)(xp.g, {
+         }), !UT && mT.map((TT => (0, kT.jsx)(nT.f, {
```

#### 6. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L62)

```diff
-       } = (0, Ip.H)(), [xp, Ap] = (0, Op.useState)(null);
+       } = (0, MT.z)(), [nT, lT] = (0, WT.useState)(null);
```

#### 7. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L83)

```diff
-         }), null !== xp && (0, Yp.jsx)(Lp.j, {
+         }), null !== nT && (0, kT.jsx)(HT.f, {
```

#### 8. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L114)

```diff
-   41985: (pp, ip, cp) => {
+   41871: (TT, UT, mT) => {
```

#### 9. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L118-L123` → after: `L118-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L118-L123) · [Before (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L118-L123)

```diff
-     var Op = cp(3824),
-       op = cp(3837),
-       Ip = cp(1349),
-       Sp = cp(36549),
-       xp = cp(5076),
-       Lp = cp(1049),
+     var WT = mT(3823),
+       zT = mT(3841),
+       MT = mT(1429),
+       gT = mT(36424),
+       nT = mT(5057),
+       HT = mT(1126),
```

#### 10. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L125-L131` → after: `L125-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L125-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L125-L131) · [Before (L125-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L125-L131)

```diff
-       Dp = cp(62),
-       Ap = cp(1372),
-       Pp = cp(1480),
-       Wp = cp(337),
-       yp = cp(1201),
-       Up = cp(1060),
-       wp = cp(1112);
+       jT = mT(63),
+       lT = mT(1457),
+       LT = mT(1569),
+       pT = mT(366),
+       BT = mT(1288),
+       ZT = mT(1135),
+       cT = mT(1188);
```

#### 11. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L139)

```diff
-       } = (0, yp.H)(), [Op, op] = (0, Dp.useState)(null), {
+       } = (0, BT.z)(), [WT, zT] = (0, jT.useState)(null), {
```

#### 12. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L143)

```diff
-       } = (0, xp.c)({
+       } = (0, nT.b)({
```

#### 13. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L148)

```diff
-       }), Ap = Op && Op.size > 1024 * Wp.Tc;
+       }), lT = WT && WT.size > 1024 * pT.vd;
```

#### 14. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L166)

```diff
-               children: (0, wp.jsx)(Up.d, {
+               children: (0, cT.jsx)(ZT.c, {
```

#### 15. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L176)

```diff
-               children: (0, wp.jsx)(Up.d, {
+               children: (0, cT.jsx)(ZT.c, {
```

#### 16. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L184)

```diff
-         }), (0, wp.jsx)(Pp.o, {
+         }), (0, cT.jsx)(LT.l, {
```

#### 17. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L191)

```diff
-             maxSizeKb: Wp.Tc
+             maxSizeKb: pT.vd
```

#### 18. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L206)

```diff
-       } = (0, yp.H)();
+       } = (0, BT.z)();
```

#### 19. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L216)

```diff
-           children: (0, wp.jsx)(Sp.c, {
+           children: (0, cT.jsx)(gT.b, {
```

#### 20. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L240-L243` → after: `L240-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L240-L243) · [Before (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L240-L243)

```diff
-     var Hp = cp(5048),
-       dp = cp(1692),
-       ep = cp(4462),
-       jp = cp(1234);
+     var qT = mT(5038),
+       iT = mT(1792),
+       bT = mT(4468),
+       OT = mT(1321);
```

#### 21. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L256)

```diff
-       } = (0, yp.H)(), [Yp, Ap] = (0, Dp.useState)("choose"), [Wp, Up] = (0, Dp.useState)(null), [vp, tp] = (0, Dp.useState)(null);
+       } = (0, BT.z)(), [kT, lT] = (0, jT.useState)("choose"), [pT, ZT] = (0, jT.useState)(null), [vT, fT] = (0, jT.useState)(null);
```

#### 22. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L267` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L267) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L267)

```diff
-             children: (0, wp.jsx)(Sp.c, {
+             children: (0, cT.jsx)(gT.b, {
```

#### 23. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L280)

```diff
-             children: [(0, wp.jsx)(Pp.o, {
+             children: [(0, cT.jsx)(LT.l, {
```

#### 24. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L286)

```diff
-             }), (0, wp.jsx)(Pp.f, {
+             }), (0, cT.jsx)(LT.e, {
```

#### 25. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L318)

```diff
-       } = (0, yp.H)(), [xp, Lp] = (0, Dp.useState)(""), [Ap, Wp] = (0, Dp.useState)(""), [Up, vp] = (0, Dp.useState)(null), [tp, Hp] = (0, Dp.useState)(!0), kp = pp => {
+       } = (0, BT.z)(), [nT, HT] = (0, jT.useState)(""), [lT, pT] = (0, jT.useState)(""), [ZT, vT] = (0, jT.useState)(null), [fT, qT] = (0, jT.useState)(!0), eT = TT => {
```

#### 26. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L320-L322` → after: `L320-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L320-L322) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L320-L322)

```diff
-         pp = null !== (cp = pp) && void 0 !== cp ? cp : xp;
-         const op = "new" === ip ? (0, jp.A)(pp) : null,
-           Ip = [...(0, jp.xb)(pp), ...op ? [op] : []];
+         TT = null !== (mT = TT) && void 0 !== mT ? mT : nT;
+         const zT = "new" === UT ? (0, OT.C)(TT) : null,
+           MT = [...(0, OT.Ib)(TT), ...zT ? [zT] : []];
```

#### 27. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L330)

```diff
-         }), (0, wp.jsx)(dp.c, {
+         }), (0, cT.jsx)(iT.e, {
```

#### 28. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L339)

```diff
-           maxLength: jp.qb
+           maxLength: OT.zb
```

#### 29. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L350)

```diff
-         }), (0, wp.jsx)(dp.c, {
+         }), (0, cT.jsx)(iT.e, {
```

#### 30. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L356)

```diff
-           maxLength: jp.ob,
+           maxLength: OT.xb,
```

#### 31. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L362)

```diff
-           children: [(0, wp.jsx)(ep.b, {
+           children: [(0, cT.jsx)(bT.d, {
```

#### 32. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L378)

```diff
-           children: [(0, wp.jsx)(Pp.o, {
+           children: [(0, cT.jsx)(LT.l, {
```

#### 33. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L384)

```diff
-           }), (0, wp.jsx)(Pp.K, {
+           }), (0, cT.jsx)(LT.I, {
```

#### 34. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L392-L394` → after: `L392-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L392-L394) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L392-L394)

```diff
-     var Rp = cp(1211),
-       qp = cp(1765),
-       Mp = cp(1149);
+     var JT = mT(1302),
+       xT = mT(1863),
+       dT = mT(1231);
```

#### 35. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L398` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L398) · [Before (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L398)

```diff
-         const cp = Rp.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, Ip.d)().websocketUrl);
+         const mT = JT.clientSideServerUrls.getHttpUrlFromWebSocketUrl((0, MT.c)().websocketUrl);
```

#### 36. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L406)

```diff
-           } = (0, Ip.d)(), Lp = {
+           } = (0, MT.c)(), HT = {
```

#### 37. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L410)

```diff
-           return await (0, Mp.postJsonWithMetricsCookiesAndJsonResponse)(`${cp}/schematic/${pp}`, op.y[pp].toBuffer({
+           return await (0, dT.postJsonWithMetricsCookiesAndJsonResponse)(`${mT}/schematic/${TT}`, zT.G[TT].toBuffer({
```

#### 38. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L449)

```diff
-               const op = Op.my.from(cp);
+               const zT = WT.HB.from(mT);
```

#### 39. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L452)

```diff
-               }), `${pp}.bloxdschem`)
+               }), `${TT}.bloxdschem`)
```

#### 40. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L496)

```diff
-             const ip = Op.my.from(await pp.arrayBuffer()),
+             const UT = WT.HB.from(await TT.arrayBuffer()),
```

#### 41. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L500-L501` → after: `L500-L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L500-L501) · [Before (L500-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L500-L501)

```diff
-               } = (0, Ip.d)();
-             await (0, Mp.postBinaryWithMetricsCookiesAndCustomResponse)(`${cp}/schematic/upload-schematic`, op.y["upload-schematic"].toBuffer({
+               } = (0, MT.c)();
+             await (0, dT.postBinaryWithMetricsCookiesAndCustomResponse)(`${mT}/schematic/upload-schematic`, zT.G["upload-schematic"].toBuffer({
```

#### 42. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L518-L519` → after: `L518-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L518-L519) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L518-L519)

```diff
-         else if ("Plugin|WorldBuilder|ListSchematics" === pp)(0, Sp.g)({
-           ownedSchematics: Array.isArray(ip) ? ip : ip.schematics,
+         else if ("Plugin|WorldBuilder|ListSchematics" === TT)(0, gT.e)({
+           ownedSchematics: Array.isArray(UT) ? UT : UT.schematics,
```

#### 43. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L527-L528` → after: `L527-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L527-L528) · [Before (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L527-L528)

```diff
-           const pp = null !== (Yp = ip.schematic) && void 0 !== Yp ? Yp : ip;
-           (0, Hp.k)({
+           const TT = null !== (kT = UT.schematic) && void 0 !== kT ? kT : UT;
+           (0, qT.i)({
```

#### 44. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/218.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/218.js#L535)

```diff
-         } else console.error(`Unknown plugin message type ${pp}`)
+         } else console.error(`Unknown plugin message type ${TT}`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (16 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 1. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L4)

```diff
-   36575: (pp, ip, cp) => {
+   36439: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L8)

```diff
-     var Op = cp(1049),
+     var WT = mT(1126),
```

#### 3. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L10-L20` → after: `L10-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L10-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L10-L20) · [Before (L10-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L10-L20)

```diff
-       Ip = cp(1543),
-       Sp = cp(1042),
-       xp = cp(768),
-       Lp = cp(1201),
-       Yp = cp(1480),
-       Dp = cp(1538),
-       Ap = cp(3654),
-       Pp = cp(1060),
-       Wp = cp(3581),
-       yp = cp(2661),
-       Up = cp(1112);
+       MT = mT(1641),
+       gT = mT(1118),
+       nT = mT(825),
+       HT = mT(1288),
+       kT = mT(1569),
+       jT = mT(1633),
+       lT = mT(3663),
+       LT = mT(1135),
+       pT = mT(3568),
+       BT = mT(2704),
+       ZT = mT(1188);
```

#### 4. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L39)

```diff
-       return null !== ip ? (0, Up.jsx)(Wp.g, {
+       return null !== UT ? (0, ZT.jsx)(pT.f, {
```

#### 5. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L45)

```diff
-       }) : Op ? (0, Up.jsx)(Wp.e, {
+       }) : WT ? (0, ZT.jsx)(pT.d, {
```

#### 6. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L63)

```diff
-       } = (0, yp.i)(), Yp = null !== (ip = null === Sp || void 0 === Sp ? void 0 : Sp.slice(0, Ip.gameCount)) && void 0 !== ip ? ip : [], Ap = {
+       } = (0, BT.g)(), kT = null !== (UT = null === gT || void 0 === gT ? void 0 : gT.slice(0, MT.gameCount)) && void 0 !== UT ? UT : [], lT = {
```

#### 7. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L72)

```diff
-             to: `/custom-games/${encodeURIComponent(cp)}`,
+             to: `/custom-games/${encodeURIComponent(mT)}`,
```

#### 8. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L76)

```diff
-             }), (0, Up.jsx)(Pp.d, {
+             }), (0, ZT.jsx)(LT.c, {
```

#### 9. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L83)

```diff
-             gridTemplateColumns: `repeat(${xp?Ip.columnCount:wp}, ${xp?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
+             gridTemplateColumns: `repeat(${nT?MT.columnCount:cT}, ${nT?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
```

#### 10. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L90)

```diff
-               game: null !== (cp = Yp[ip]) && void 0 !== cp ? cp : null,
+               game: null !== (mT = kT[UT]) && void 0 !== mT ? mT : null,
```

#### 11. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L155` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L155) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L155)

```diff
-     var kp = cp(1133);
+     var eT = mT(1213);
```

#### 12. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L161)

```diff
-       } = (0, Lp.H)(), cp = (0, Ip.A)(), Op = (0, kp.h)(), Pp = (0, Ap.b)({
+       } = (0, HT.z)(), mT = (0, MT.y)(), WT = (0, eT.i)(), LT = (0, lT.c)({
```

#### 13. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L164)

```diff
-       if (!(0, Sp.k)(Wp)) return (0, Up.jsx)(Dp.NavigatePreserveSearch, {
+       if (!(0, gT.j)(pT)) return (0, ZT.jsx)(jT.NavigatePreserveSearch, {
```

#### 14. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L167-L169` → after: `L167-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L167-L169) · [Before (L167-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L167-L169)

```diff
-       const yp = xp.c[Wp],
-         wp = Sp.b[Wp],
-         vp = null !== (pp = null === Pp || void 0 === Pp ? void 0 : Pp[Wp]) && void 0 !== pp ? pp : null,
+       const BT = nT.d[pT],
+         cT = gT.c[pT],
+         vT = null !== (TT = null === LT || void 0 === LT ? void 0 : LT[pT]) && void 0 !== TT ? TT : null,
```

#### 15. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L182)

```diff
-           games: null !== (mp = null === vp || void 0 === vp ? void 0 : vp[cp.id]) && void 0 !== mp ? mp : null
+           games: null !== (YT = null === vT || void 0 === vT ? void 0 : vT[mT.id]) && void 0 !== YT ? YT : null
```

#### 16. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/219.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/219.js#L190)

```diff
-             backgroundImage: `url(/textures/games/${Wp}/${yp.largePicture}.png)`
+             backgroundImage: `url(/textures/games/${pT}/${BT.largePicture}.png)`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/220.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/220.js` (104 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc)

#### 1. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L4)

```diff
-   41517: (pp, ip, cp) => {
+   41433: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L8-L11)

```diff
-     var Op = cp(62),
-       op = cp(3107),
-       Ip = cp(1141),
-       Sp = cp(1049),
+     var WT = mT(63),
+       zT = mT(3137),
+       MT = mT(1225),
+       gT = mT(1126),
```

#### 3. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L13-L19` → after: `L13-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L13-L19) · [Before (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L13-L19)

```diff
-       Lp = cp(1251),
-       Yp = cp(620),
-       Dp = cp(1201),
-       Ap = cp(2276),
-       Pp = cp(1579),
-       Wp = cp(2638);
-     const yp = Lp.u.filter((pp => !Pp.f.includes(pp)));
+       HT = mT(1336),
+       kT = mT(641),
+       jT = mT(1288),
+       lT = mT(2348),
+       LT = mT(1688),
+       pT = mT(2685);
+     const BT = HT.t.filter((TT => !LT.f.includes(TT)));
```

#### 4. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L22)

```diff
-       return yp.includes(pp) && "string" === typeof ip && (0, Wp.f)(pp, ip)
+       return BT.includes(TT) && "string" === typeof UT && (0, pT.h)(TT, UT)
```

#### 5. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L44-L48` → after: `L44-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L44-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L44-L48) · [Before (L44-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L44-L48)

```diff
-     var Hp = cp(2281),
-       dp = cp(3190),
-       ep = cp(2004),
-       jp = cp(1480),
-       kp = cp(2314),
+     var qT = mT(2355),
+       iT = mT(3219),
+       bT = mT(2089),
+       OT = mT(1569),
+       eT = mT(2391),
```

#### 6. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L50-L53` → after: `L50-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L50-L53) · [Before (L50-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L50-L53)

```diff
-       Rp = cp(2767),
-       qp = cp(1520),
-       Mp = cp(1149),
-       Cp = cp(1880);
+       JT = mT(2805),
+       xT = mT(1613),
+       dT = mT(1231),
+       wT = mT(1976);
```

#### 7. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L68)

```diff
-           return null !== (Op = null !== (op = this.slots.get(cp)) && void 0 !== op ? op : ip.get(cp)) && void 0 !== Op ? Op : pp
+           return null !== (WT = null !== (zT = this.slots.get(mT)) && void 0 !== zT ? zT : UT.get(mT)) && void 0 !== WT ? WT : TT
```

#### 8. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L72)

```diff
-     class Xp extends Rp.e {
+     class aT extends JT.d {
```

#### 9. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L90-L91` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L90-L91) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L90-L91)

```diff
-         (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(pp)) || this.unsaved.before.set(pp, null !== (cp = null === (Op = this.getState().data) || void 0 === Op ? void 0 : Op[pp]) && void 0 !== cp ? cp : {});
-         this.unsaved.slots.set(pp, ip), this.update((cp => cp.map(((cp, Op) => Op === pp ? ip : cp)))), this.sending || this.sendUnsaved()
+         (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(TT)) || this.unsaved.before.set(TT, null !== (mT = null === (WT = this.getState().data) || void 0 === WT ? void 0 : WT[TT]) && void 0 !== mT ? mT : {});
+         this.unsaved.slots.set(TT, UT), this.update((mT => mT.map(((mT, WT) => WT === TT ? UT : mT)))), this.sending || this.sendUnsaved()
```

#### 10. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L129)

```diff
-                 return null !== (cp = Op.get(ip)) && void 0 !== cp ? cp : pp
+                 return null !== (mT = WT.get(UT)) && void 0 !== mT ? mT : TT
```

#### 11. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L139-L147` → after: `L139-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L139-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L139-L147) · [Before (L139-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L139-L147)

```diff
-     var Qp = cp(337),
-       Jp = cp(41524),
-       Bp = cp(1577),
-       Np = cp(2382),
-       Tp = cp(3098),
-       fp = cp(2210),
-       bp = cp(2671),
-       hp = cp(1060);
-     cp(34462), cp(3195);
+     var XT = mT(366),
+       IT = mT(41439),
+       QT = mT(1685),
+       sT = mT(2446),
+       FT = mT(3130),
+       PT = mT(2286),
+       VT = mT(2713),
+       uT = mT(1135);
+     mT(34311), mT(3226);
```

#### 12. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L149-L153` → after: `L149-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L149-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L149-L153) · [Before (L149-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L149-L153)

```diff
-     var ap = cp(2320),
-       np = cp(1387),
-       Fp = cp(2429),
-       gp = cp(1372),
-       Gp = cp(1112);
+     var CT = mT(2395),
+       rT = mT(1475),
+       KT = mT(2493),
+       ST = mT(1457),
+       GT = mT(1188);
```

#### 13. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L164)

```diff
-       } = (0, Dp.H)(), {
+       } = (0, jT.z)(), {
```

#### 14. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L167)

```diff
-       } = (0, Rp.j)(lp, !1), {
+       } = (0, JT.h)(yT, !1), {
```

#### 15. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L169)

```diff
-       } = (0, Ip.b)();
+       } = (0, MT.d)();
```

#### 16. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L203)

```diff
-                 ...(0, jp.bb)(),
+                 ...(0, OT.R)(),
```

#### 17. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L214)

```diff
-                   children: [(0, Gp.jsx)(hp.d, {
+                   children: [(0, GT.jsx)(uT.c, {
```

#### 18. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L220)

```diff
-                     children: (0, Gp.jsx)(Fp.c, {
+                     children: (0, GT.jsx)(KT.e, {
```

#### 19. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L223)

```diff
-                   }), (0, Gp.jsx)(jp.S, {
+                   }), (0, GT.jsx)(OT.L, {
```

#### 20. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L232)

```diff
-               }), !Ip && (0, Gp.jsx)(jp.K, {
+               }), !MT && (0, GT.jsx)(OT.I, {
```

#### 21. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L238)

```diff
-                 children: (0, Gp.jsx)(hp.d, {
+                 children: (0, GT.jsx)(uT.c, {
```

#### 22. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L247-L249` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L247-L249) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L247-L249)

```diff
-     var Zp = cp(36602),
-       zp = cp(2623),
-       sp = cp(2630);
+     var ET = mT(36465),
+       hT = mT(2676),
+       DT = mT(2682);
```

#### 23. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L252)

```diff
-       return null !== pp && !(0, zp.h)(sp.b, ip, cp, pp.collected, pp.ownedPacks)
+       return null !== TT && !(0, hT.j)(DT.e, UT, mT, TT.collected, TT.ownedPacks)
```

#### 24. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L272)

```diff
-       } = (0, Dp.H)(), {
+       } = (0, jT.z)(), {
```

#### 25. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L274-L275` → after: `L274-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L274-L275) · [Before (L274-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L274-L275)

```diff
-       } = (0, Ip.b)(), Sp = null !== (ip = op.dailyDrop) && void 0 !== ip && ip.hidden ? Op("dailyDrop:lockedFromHidden") : Op("dailyDrop:lockedFrom");
-       return (0, Gp.jsx)(np.f, {
+       } = (0, MT.d)(), gT = null !== (UT = zT.dailyDrop) && void 0 !== UT && UT.hidden ? WT("dailyDrop:lockedFromHidden") : WT("dailyDrop:lockedFrom");
+       return (0, GT.jsx)(rT.e, {
```

#### 26. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L284)

```diff
-       return (0, Ap.o)(pp, ip).purchasable && !(0, Np.w)(pp, ip, cp)
+       return (0, lT.m)(TT, UT).purchasable && !(0, sT.u)(TT, UT, mT)
```

#### 27. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L304)

```diff
-       } = (0, Dp.H)(), Lp = Bp.e[cp], Yp = Lp.purchasable && !Op.includes(cp) && Bp.x.includes(cp), Ap = Tp.i[cp];
+       } = (0, jT.z)(), HT = QT.b[mT], kT = HT.purchasable && !WT.includes(mT) && QT.s.includes(mT), lT = FT.l[mT];
```

#### 28. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L313-L314` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L313-L314) · [Before (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L313-L314)

```diff
-             children: null !== (ip = Lp.displayName) && void 0 !== ip ? ip : cp
-           }), (Yp || op) && (0, Gp.jsxs)(jp.C, {
+             children: null !== (UT = HT.displayName) && void 0 !== UT ? UT : mT
+           }), (kT || zT) && (0, GT.jsxs)(OT.B, {
```

#### 29. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L316)

```diff
-               Yp ? (0, Tp.f)(cp) : (0, kp.r)({
+               kT ? (0, FT.j)(mT) : (0, eT.p)({
```

#### 30. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L321)

```diff
-             children: [(0, Gp.jsx)(hp.d, {
+             children: [(0, GT.jsx)(uT.c, {
```

#### 31. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L325` → after: `L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L325) · [Before (L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L325)

```diff
-         }), Yp && "bee" === cp && (0, Gp.jsx)(Tp.b, {}), Ip]
+         }), kT && "bee" === mT && (0, GT.jsx)(FT.e, {}), MT]
```

#### 32. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L340)

```diff
-       } = (0, Dp.H)(), Pp = new Set(ip), Wp = new Map, yp = Object.keys(Ap.h.emote).sort(((pp, ip) => {
+       } = (0, jT.z)(), LT = new Set(UT), pT = new Map, BT = Object.keys(lT.f.emote).sort(((TT, UT) => {
```

#### 33. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L342)

```diff
-         return (null !== (cp = null === (Op = (0, Ap.m)("emote", pp)) || void 0 === Op ? void 0 : Op.clientIdx) && void 0 !== cp ? cp : 0) - (null !== (op = null === (Ip = (0, Ap.m)("emote", ip)) || void 0 === Ip ? void 0 : Ip.clientIdx) && void 0 !== op ? op : 0)
+         return (null !== (mT = null === (WT = (0, lT.j)("emote", TT)) || void 0 === WT ? void 0 : WT.clientIdx) && void 0 !== mT ? mT : 0) - (null !== (zT = null === (MT = (0, lT.j)("emote", UT)) || void 0 === MT ? void 0 : MT.clientIdx) && void 0 !== zT ? zT : 0)
```

#### 34. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L344-L345` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L344-L345) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L344-L345)

```diff
-         const ip = (0, Ap.o)("emote", pp),
-           op = (0, Np.w)("emote", pp, cp);
+         const UT = (0, lT.m)("emote", TT),
+           zT = (0, sT.u)("emote", TT, mT);
```

#### 35. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L349)

```diff
-         const pp = (0, Ap.m)("emote", xp).cosmeticPack;
+         const TT = (0, lT.j)("emote", nT).cosmeticPack;
```

#### 36. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L361)

```diff
-               max: Lp.n
+               max: HT.j
```

#### 37. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L378)

```diff
-                   Ap = ip.length >= Lp.n,
+                   lT = UT.length >= HT.j,
```

#### 38. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L381` → after: `L381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L381) · [Before (L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L381)

```diff
-                   Up = (0, Hp.g)(pp);
+                   ZT = (0, qT.h)(TT);
```

#### 39. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L394)

```diff
-                         backgroundImage: `url(/textures/charSkins/previews/emote_${pp}_preview.png)`
+                         backgroundImage: `url(/textures/charSkins/previews/emote_${TT}_preview.png)`
```

#### 40. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L399)

```diff
-                       children: null !== (Op = null === Up || void 0 === Up ? void 0 : Up.displayName) && void 0 !== Op ? Op : pp
+                       children: null !== (WT = null === ZT || void 0 === ZT ? void 0 : ZT.displayName) && void 0 !== WT ? WT : TT
```

#### 41. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L406)

```diff
-                     }), Wp && (0, Gp.jsx)(hp.d, {
+                     }), pT && (0, GT.jsx)(uT.c, {
```

#### 42. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L409)

```diff
-                     }), (0, Gp.jsx)(np.f, {
+                     }), (0, GT.jsx)(rT.e, {
```

#### 43. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L422)

```diff
-                             Pp.has(pp) ? op(ip.filter((ip => ip !== pp))) : ip.length >= Lp.n || op([...ip, pp])
+                             LT.has(TT) ? zT(UT.filter((UT => UT !== TT))) : UT.length >= HT.j || zT([...UT, TT])
```

#### 44. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L425` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L425) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L425)

```diff
-                         children: (0, Gp.jsx)(hp.d, {
+                         children: (0, GT.jsx)(uT.c, {
```

#### 45. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L446)

```diff
-         } = (0, Dp.H)(),
+         } = (0, jT.z)(),
```

#### 46. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L450-L451` → after: `L450-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L450-L451) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L450-L451)

```diff
-         } = (0, Ip.b)(),
-         vp = (0, op.c)(),
+         } = (0, MT.d)(),
+         vT = (0, zT.d)(),
```

#### 47. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L454)

```diff
-         } = (0, mp.o)(["gameState"]),
+         } = (0, YT.h)(["gameState"]),
```

#### 48. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L462)

```diff
-         Fp = (0, Op.useRef)(Lp.u.reduce(((pp, ip) => (pp[ip] = (0, Wp.b)(ip), pp)), {})),
+         KT = (0, WT.useRef)(HT.t.reduce(((TT, UT) => (TT[UT] = (0, pT.e)(UT), TT)), {})),
```

#### 49. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L484-L486` → after: `L484-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L484-L486) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L484-L486)

```diff
-         const Sp = (0, Ap.m)(pp, ip);
-         if (null !== Sp && void 0 !== Sp && Sp.colourGroup && null !== (Op = Bp.e[Sp.cosmeticPack].colourGroups) && void 0 !== Op && null !== (op = Op[Sp.colourGroup]) && void 0 !== op && op.showSwatchSelector) {
-           const cp = (0, Ap.j)(ip);
+         const gT = (0, lT.j)(TT, UT);
+         if (null !== gT && void 0 !== gT && gT.colourGroup && null !== (WT = QT.b[gT.cosmeticPack].colourGroups) && void 0 !== WT && null !== (zT = WT[gT.colourGroup]) && void 0 !== zT && zT.showSwatchSelector) {
+           const mT = (0, lT.i)(UT);
```

#### 50. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L489` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L489) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L489)

```diff
-             [`${Sp.cosmeticPack}_${pp}_${Sp.colourGroup}`]: parseInt(cp[1])
+             [`${gT.cosmeticPack}_${TT}_${gT.colourGroup}`]: parseInt(mT[1])
```

#### 51. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L519` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L519) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L519)

```diff
-       }(0, ep.b)("cosmeticsUpdated", (pp => {
+       }(0, bT.e)("cosmeticsUpdated", (TT => {
```

#### 52. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L523-L524` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L523-L524) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L523-L524)

```diff
-             KI: Op,
-             VI: op
+             wM: WT,
+             tM: zT
```

#### 53. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L547-L549` → after: `L547-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L547-L549) · [Before (L547-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L547-L549)

```diff
-         Wi = Object.keys(Ap.h[cp]).filter((pp => {
-           const ip = (0, Ap.o)(cp, pp),
-             Op = (0, Np.w)(cp, pp, Di);
+         lU = Object.keys(lT.f[mT]).filter((TT => {
+           const UT = (0, lT.m)(mT, TT),
+             WT = (0, sT.u)(mT, TT, HU);
```

#### 54. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L553)

```diff
-           return (null !== (Op = null === (op = (0, Ap.m)(cp, pp)) || void 0 === op ? void 0 : op.clientIdx) && void 0 !== Op ? Op : 0) - (null !== (Ip = null === (Sp = (0, Ap.m)(cp, ip)) || void 0 === Sp ? void 0 : Sp.clientIdx) && void 0 !== Ip ? Ip : 0)
+           return (null !== (WT = null === (zT = (0, lT.j)(mT, TT)) || void 0 === zT ? void 0 : zT.clientIdx) && void 0 !== WT ? WT : 0) - (null !== (MT = null === (gT = (0, lT.j)(mT, UT)) || void 0 === gT ? void 0 : gT.clientIdx) && void 0 !== MT ? MT : 0)
```

#### 55. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L558)

```diff
-         const pp = null === (Ui = (0, Ap.m)(cp, Op)) || void 0 === Ui ? void 0 : Ui.cosmeticPack;
+         const TT = null === (pU = (0, lT.j)(mT, WT)) || void 0 === pU ? void 0 : pU.cosmeticPack;
```

#### 56. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L564` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L564) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L564)

```diff
-           for (const [op, Ip] of Object.entries(Ap.h[pp])) {
+           for (const [zT, MT] of Object.entries(lT.f[TT])) {
```

#### 57. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L566-L567` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L566-L567) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L566-L567)

```diff
-             const Sp = `${Ip.cosmeticPack}_${Ip.colourGroup}`;
-             (ci(pp, op, ip) ? Op : cp).add(Sp)
+             const gT = `${MT.cosmeticPack}_${MT.colourGroup}`;
+             (TU(TT, zT, UT) ? WT : mT).add(gT)
```

#### 58. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L577)

```diff
-           const op = null !== (ti = null === (Hi = (0, Ap.m)(cp, Op)) || void 0 === Hi ? void 0 : Hi.colourGroup) && void 0 !== ti ? ti : null;
+           const zT = null !== (cU = null === (vU = (0, lT.j)(mT, WT)) || void 0 === vU ? void 0 : vU.colourGroup) && void 0 !== cU ? cU : null;
```

#### 59. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L583-L584` → after: `L583-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L583-L584) · [Before (L583-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L583-L584)

```diff
-             Sp = pp ? null === (op = Bp.e[Op].colourGroups) || void 0 === op ? void 0 : op[pp] : void 0,
-             xp = !0 === (null === Sp || void 0 === Sp ? void 0 : Sp.showSwatchSelector) && !wi.has(`${Op}_${pp}`);
+             gT = TT ? null === (zT = QT.b[WT].colourGroups) || void 0 === zT ? void 0 : zT[TT] : void 0,
+             nT = !0 === (null === gT || void 0 === gT ? void 0 : gT.showSwatchSelector) && !BU.has(`${WT}_${TT}`);
```

#### 60. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L587` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L587) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L587)

```diff
-             const ip = null !== (Lp = Mp[`${Op}_${cp}_${pp}`]) && void 0 !== Lp ? Lp : (0, Bp.k)(Sp.colours);
+             const UT = null !== (HT = dT[`${WT}_${mT}_${TT}`]) && void 0 !== HT ? HT : (0, QT.i)(gT.colours);
```

#### 61. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L592)

```diff
-                 const cp = (0, Ap.j)(pp);
+                 const mT = (0, lT.i)(TT);
```

#### 62. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L607-L608` → after: `L607-L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L607-L608) · [Before (L607-L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L607-L608)

```diff
-       for (const [Op, op] of Object.entries(Pp.b)) {
-         const pp = Bp.e[op.cosmeticPack],
+       for (const [WT, zT] of Object.entries(LT.e)) {
+         const TT = QT.b[zT.cosmeticPack],
```

#### 63. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L610` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L610) · [Before (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L610)

```diff
-           cp = Bp.p.some((pp => (0, Bp.i)(pp) === Op));
+           mT = QT.n.some((TT => (0, QT.f)(TT) === WT));
```

#### 64. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L618)

```diff
-           children: [(0, Gp.jsx)(hp.d, {
+           children: [(0, GT.jsx)(uT.c, {
```

#### 65. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L620) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L620)

```diff
-           }), Sp("homePage:unlockWithSuperRank"), Pi && (0, Gp.jsx)(jp.o, {
+           }), gT("homePage:unlockWithSuperRank"), jU && (0, GT.jsx)(OT.l, {
```

#### 66. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L622)

```diff
-               (0, kp.r)({
+               (0, eT.p)({
```

#### 67. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L656` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L656) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L656)

```diff
-                 showStoreLink: !Bp.t.includes(pp) && ip.some((pp => {
+                 showStoreLink: !QT.r.includes(TT) && UT.some((TT => {
```

#### 68. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L698)

```diff
-                             backgroundImage: `url(/textures/charSkins/previews/character_${ip}_preview.png)`
+                             backgroundImage: `url(/textures/charSkins/previews/character_${UT}_preview.png)`
```

#### 69. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L700)

```diff
-                         }), Ip && (0, Gp.jsx)(hp.d, {
+                         }), MT && (0, GT.jsx)(uT.c, {
```

#### 70. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L711` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L711) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L711)

```diff
-             equippedEmoteIds: (0, Wp.i)(Fp.current.emote),
+             equippedEmoteIds: (0, pT.l)(KT.current.emote),
```

#### 71. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L715)

```diff
-               const ip = (0, Wp.m)(pp);
+               const UT = (0, pT.n)(TT);
```

#### 72. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L725)

```diff
-                 for (const cp of Lp.u) "cape" !== cp && "nameColour" !== cp && "emote" !== cp && pp(cp, "skin" === cp ? "skin_preview" : `${cp}_none`, !1);
+                 for (const mT of HT.t) "cape" !== mT && "nameColour" !== mT && "emote" !== mT && TT(mT, "skin" === mT ? "skin_preview" : `${mT}_none`, !1);
```

#### 73. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L743-L744` → after: `L743-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L743-L744) · [Before (L743-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L743-L744)

```diff
-                   const Lp = op ? null === (Op = Bp.e[pp].colourGroups) || void 0 === Op ? void 0 : Op[op] : void 0,
-                     Dp = `${pp}_${cp}_${op}`;
+                   const HT = zT ? null === (WT = QT.b[TT].colourGroups) || void 0 === WT ? void 0 : WT[zT] : void 0,
+                     jT = `${TT}_${mT}_${zT}`;
```

#### 74. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L760) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L760)

```diff
-                             CosmeticColorOptionSelected: (null !== (Op = Mp[Dp]) && void 0 !== Op ? Op : (0, Bp.k)(Lp.colours)) === Sp
+                             CosmeticColorOptionSelected: (null !== (WT = dT[jT]) && void 0 !== WT ? WT : (0, QT.i)(HT.colours)) === gT
```

#### 75. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L763)

```diff
-                             backgroundColor: `rgb(${Ip.rbg.join(",")})`
+                             backgroundColor: `rgb(${MT.rbg.join(",")})`
```

#### 76. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L772)

```diff
-                               Ip = Op ? (0, Ap.m)(cp, Op) : null,
+                               MT = WT ? (0, lT.j)(mT, WT) : null,
```

#### 77. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L774-L775` → after: `L774-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L774-L775) · [Before (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L774-L775)

```diff
-                               Lp = xp ? Op : Fp.current[cp],
-                               Yp = xp ? Ip : (0, Ap.m)(cp, Lp);
+                               HT = nT ? WT : KT.current[mT],
+                               kT = nT ? MT : (0, lT.j)(mT, HT);
```

#### 78. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L777-L778` → after: `L777-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L777-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L777-L778) · [Before (L777-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L777-L778)

```diff
-                             if ((null !== (ip = null === Yp || void 0 === Yp ? void 0 : Yp.colourGroup) && void 0 !== ip ? ip : null) !== op) return;
-                             const Pp = (0, Ap.j)(Lp);
+                             if ((null !== (UT = null === kT || void 0 === kT ? void 0 : kT.colourGroup) && void 0 !== UT ? UT : null) !== zT) return;
+                             const LT = (0, lT.i)(HT);
```

#### 79. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L780` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L780) · [Before (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L780)

```diff
-                               const pp = `${cp}_${Pp[0]}_${Sp}`;
+                               const TT = `${mT}_${LT[0]}_${gT}`;
```

#### 80. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L796)

```diff
-                       return Sp || ip || ("cape" !== cp || (0, Qp.yd)(yp.getPlayerRanks(), pp)) && ("nameColour" !== cp || yp.playerHasRank("super")) || (Lp = !1), (0, Gp.jsx)(Vp, {
+                       return gT || UT || ("cape" !== mT || (0, XT.de)(BT.getPlayerRanks(), TT)) && ("nameColour" !== mT || BT.playerHasRank("super")) || (HT = !1), (0, GT.jsx)(AT, {
```

#### 81. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L827)

```diff
-                             children: (0, Gp.jsx)(bp.d, {
+                             children: (0, GT.jsx)(VT.i, {
```

#### 82. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L839-L840` → after: `L839-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L839-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L839-L840) · [Before (L839-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L839-L840)

```diff
-                             style: (0, Ap.m)(cp, pp).previewTex ? {
-                               backgroundImage: `url(/textures/charSkins/previews/${(0,Ap.m)(cp,pp).previewTex}.png)`
+                             style: (0, lT.j)(mT, TT).previewTex ? {
+                               backgroundImage: `url(/textures/charSkins/previews/${(0,lT.j)(mT,TT).previewTex}.png)`
```

#### 83. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L842` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L842) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L842)

```diff
-                               backgroundColor: Yp.r[pp]
+                               backgroundColor: kT.u[TT]
```

#### 84. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L844` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L844) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L844)

```diff
-                           }), Sp && (0, Gp.jsx)(hp.d, {
+                           }), gT && (0, GT.jsx)(uT.c, {
```

#### 85. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L851` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L851) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L851)

```diff
-                   }, null !== op && void 0 !== op ? op : "ungrouped")
+                   }, null !== zT && void 0 !== zT ? zT : "ungrouped")
```

#### 86. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L855)

```diff
-           }), Ep && (0, Gp.jsxs)(jp.f, {
+           }), tT && (0, GT.jsxs)(OT.e, {
```

#### 87. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L862` → after: `L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L862) · [Before (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L862)

```diff
-             children: [(0, Gp.jsx)(hp.d, {
+             children: [(0, GT.jsx)(uT.c, {
```

#### 88. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L868)

```diff
-             IL: Tp.id,
+             tn: FT.id,
```

#### 89. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L871)

```diff
-               for (const pp of Lp.u) xi(pp, Fp.current[pp], !1)
+               for (const TT of HT.t) MU(TT, KT.current[TT], !1)
```

#### 90. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L878)

```diff
-   41524: (pp, ip, cp) => {
+   41439: (TT, UT, mT) => {
```

#### 91. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L882-L888` → after: `L882-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L882-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L882-L888) · [Before (L882-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L882-L888)

```diff
-     var Op = cp(62),
-       op = cp(2835),
-       Ip = cp(1251),
-       Sp = cp(2638),
-       xp = cp(34462),
-       Lp = cp(3731),
-       Yp = cp(1112);
+     var WT = mT(63),
+       zT = mT(2856),
+       MT = mT(1336),
+       gT = mT(2685),
+       nT = mT(34311),
+       HT = mT(3746),
+       kT = mT(1188);
```

#### 92. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L897)

```diff
-           IL: Up,
+           tn: ZT,
```

#### 93. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L905)

```diff
-           } = (0, op.d)(tp),
+           } = (0, zT.b)(fT),
```

#### 94. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L923)

```diff
-               const cp = Promise.all(Ip.u.map((ip => pp.untilDrawn(ip)))).catch((pp => {
+               const mT = Promise.all(MT.t.map((UT => TT.untilDrawn(UT)))).catch((TT => {
```

#### 95. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L943)

```diff
-               for (const Op of Ip.u) {
+               for (const WT of MT.t) {
```

#### 96. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L945` → after: `L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L945) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L945)

```diff
-                 pp(Op, null !== (cp = ip[Op]) && void 0 !== cp ? cp : (0, Sp.b)(Op))
+                 TT(WT, null !== (mT = UT[WT]) && void 0 !== mT ? mT : (0, gT.e)(WT))
```

#### 97. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L971` → after: `L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L971) · [Before (L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L971)

```diff
-             ip = xp.j.openCharacter(tp.current, Wp);
+             UT = nT.g.openCharacter(fT.current, pT);
```

#### 98. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L986)

```diff
-           for (const ip of Ip.u) {
+           for (const UT of MT.t) {
```

#### 99. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L995` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L995) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L995)

```diff
-           mp && ep.current.playEmote(null !== Up && void 0 !== Up ? Up : null)
+           YT && bT.current.playEmote(null !== ZT && void 0 !== ZT ? ZT : null)
```

#### 100. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1002` → after: `L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L1002) · [Before (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L1002)

```diff
-             } = xp.e[Wp];
+             } = nT.c[pT];
```

#### 101. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L1028)

```diff
-   36602: (pp, ip, cp) => {
+   36465: (TT, UT, mT) => {
```

#### 102. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1032-L1033` → after: `L1032-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L1032-L1033) · [Before (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L1032-L1033)

```diff
-     var Op = cp(1956),
-       op = cp(1520);
+     var WT = mT(2046),
+       zT = mT(1613);
```

#### 103. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1056-L1057` → after: `L1056-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1056-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L1056-L1057) · [Before (L1056-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L1056-L1057)

```diff
-             KI: ip,
-             VI: cp
+             wM: UT,
+             tM: mT
```

#### 104. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1071-L1072` → after: `L1071-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/220.js#L1071-L1072) · [Before (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/220.js#L1071-L1072)

```diff
-           KI: cp,
-           VI: op
+           wM: mT,
+           tM: zT
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (18 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 1. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L4)

```diff
-   36622: (pp, ip, cp) => {
+   36478: (TT, UT, mT) => {
```

#### 2. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L6-L8)

```diff
-       d: () => qp,
-       f: () => Mp,
-       h: () => Hp
+       c: () => xT,
+       e: () => dT,
+       i: () => qT
```

#### 3. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L10-L12` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L10-L12) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L10-L12)

```diff
-     var Op = cp(272),
-       op = cp(104);
-     const Ip = new(cp(36630).b)(new URL(cp.p + cp.u(3), cp.b), {
+     var WT = mT(291),
+       zT = mT(102);
+     const MT = new(mT(36480).b)(new URL(mT.p + mT.u(3), mT.b), {
```

#### 4. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L16-L17)

```diff
-     var Sp = cp(1819),
-       xp = cp(2179);
+     var gT = mT(1926),
+       nT = mT(2265);
```

#### 5. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L36)

```diff
-           cp(new Error(`A block icon's texture did not load: ${pp.slice(0,100)}`))
+           mT(new Error(`A block icon's texture did not load: ${TT.slice(0,100)}`))
```

#### 6. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L39)

```diff
-       return (0, xp.g)(ip)
+       return (0, nT.f)(UT)
```

#### 7. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L44)

```diff
-       Wp || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${pp}`), Wp = !0, null === (ip = Dp) || void 0 === ip || ip.terminate(), Dp = null, Ap = null, vp.clear(), tp.clear();
+       pT || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${TT}`), pT = !0, null === (UT = jT) || void 0 === UT || UT.terminate(), jT = null, lT = null, vT.clear(), fT.clear();
```

#### 8. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L52)

```diff
-         if ("page" === Op.d.ios_icon_worker_v1 && (0, op.isWebKit)()) return;
+         if ("page" === WT.b.ios_icon_worker_v1 && (0, zT.isWebKit)()) return;
```

#### 9. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L58)

```diff
-           return void dp(`did not start (${String(xp)})`)
+           return void iT(`did not start (${String(nT)})`)
```

#### 10. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L69)

```diff
-           else if ("failed" === cp.type) dp(`failed a draw (${cp.message})`);
+           else if ("failed" === mT.type) iT(`failed a draw (${mT.message})`);
```

#### 11. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L75)

```diff
-           ip.preventDefault(), dp(`stopped (${ip.message||"its script did not load or run"})`), pp()
+           UT.preventDefault(), iT(`stopped (${UT.message||"its script did not load or run"})`), TT()
```

#### 12. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L77-L78` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L77-L78) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L77-L78)

```diff
-         const cp = `did not start in ${Yp/1e3} s`;
-         await (0, Sp.k)(ip, Yp, cp).catch((() => {
+         const mT = `did not start in ${kT/1e3} s`;
+         await (0, gT.l)(UT, kT, mT).catch((() => {
```

#### 13. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L89-L90` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L89-L90) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L89-L90)

```diff
-         ip = `did not answer in ${Lp/1e3} s`;
-       (0, Sp.k)(pp, Lp, ip).then((() => {
+         UT = `did not answer in ${HT/1e3} s`;
+       (0, gT.l)(TT, HT, UT).then((() => {
```

#### 14. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L113)

```diff
-           dp(`could not take an image (${String(op)})`)
+           iT(`could not take an image (${String(zT)})`)
```

#### 15. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L175)

```diff
-   36618: (pp, ip, cp) => {
+   36476: (TT, UT, mT) => {
```

#### 16. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L177-L181` → after: `L177-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L177-L181) · [Before (L177-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L177-L181)

```diff
-       c: () => Op,
-       d: () => Lp,
-       g: () => Sp,
-       k: () => Pp,
-       m: () => Yp
+       b: () => WT,
+       e: () => HT,
+       f: () => gT,
+       h: () => LT,
+       l: () => kT
```

#### 17. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L287` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L287) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L287)

```diff
-   36630: (pp, ip, cp) => {
+   36480: (TT, UT, mT) => {
```

#### 18. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/221.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/221.js#L324)

```diff
-           if (ip > 0 && cp.searchParams.set("cache-bust", `${Date.now()}-${ip}`), await this.fetchWhole(cp, pp)) return this.scriptUrl = cp, !0;
+           if (UT > 0 && mT.searchParams.set("cache-bust", `${Date.now()}-${UT}`), await this.fetchWhole(mT, TT)) return this.scriptUrl = mT, !0;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (sn3sfj.2522680a → yma3ej.f92ebd70)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (77 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 1. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L1)

```diff
- /*! For license information please see sn3sfj.222.002048ae.chunk.js.LICENSE.txt */
+ /*! For license information please see yma3ej.222.a255cae5.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L5)

```diff
-   39775: (pp, ip, cp) => {
+   39692: (TT, UT, mT) => {
```

#### 3. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L7)

```diff
-     var Op = cp(343);
+     var WT = mT(375);
```

#### 4. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L54)

```diff
-   39773: pp => {
+   39688: TT => {
```

#### 5. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L65)

```diff
-         for (var Dp = 0, Ap = Math.floor, Pp = 0 | Ap(ip), Wp = 0 | Ap(cp), yp = 0 | Ap(Op), Up = op > 0 ? 1 : -1, wp = Ip > 0 ? 1 : -1, vp = Sp > 0 ? 1 : -1, tp = Math.abs(1 / op), Hp = Math.abs(1 / Ip), dp = Math.abs(1 / Sp), ep = tp < 1 / 0 ? tp * (Up > 0 ? Pp + 1 - ip : ip -  … [truncated]
+         for (var jT = 0, lT = Math.floor, LT = 0 | lT(UT), pT = 0 | lT(mT), BT = 0 | lT(WT), ZT = zT > 0 ? 1 : -1, cT = MT > 0 ? 1 : -1, vT = gT > 0 ? 1 : -1, fT = Math.abs(1 / zT), qT = Math.abs(1 / MT), iT = Math.abs(1 / gT), bT = fT < 1 / 0 ? fT * (ZT > 0 ? LT + 1 - UT : UT -  … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L74)

```diff
-   39283: (pp, ip, cp) => {
+   39256: (TT, UT, mT) => {
```

#### 7. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L76-L77` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L76-L77) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L76-L77)

```diff
-       c: () => xp,
-       f: () => Ip
+       d: () => nT,
+       e: () => MT
```

#### 8. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L79)

```diff
-     var Op = cp(4176);
+     var WT = mT(4170);
```

#### 9. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L87)

```diff
-       this.YG = !1, this.stopPropagation = !1, this.WG = !1, this.disabled = !1
+       this.wG = !1, this.stopPropagation = !1, this.aG = !1, this.disabled = !1
```

#### 10. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L93)

```diff
-         this.element = pp || document, this.YG = !!cp.YG, this.stopPropagation = !!cp.stopPropagation, this.WG = !!cp.WG, this.disabled = !!cp.disabled, this.filterEvents = (pp, ip) => !0, this.ignoreEvent = pp => !1, this.down = new Op.EventEmitter, this.up = new Op.EventEmitter … [truncated]
+         this.element = TT || document, this.wG = !!mT.wG, this.stopPropagation = !!mT.stopPropagation, this.aG = !!mT.aG, this.disabled = !!mT.disabled, this.filterEvents = (TT, UT) => !0, this.ignoreEvent = TT => !1, this.down = new WT.EventEmitter, this.up = new WT.EventEmitter … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L96-L98` → after: `L96-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L96-L98) · [Before (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L96-L98)

```diff
-           Aip: 0,
-           Wip: 0,
-           yip: 0
+           jUT: 0,
+           lUT: 0,
+           pUT: 0
```

#### 12. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L211)

```diff
-             } return console.error(`Did not find touch id ${Pp}`), [0, 0]
+             } return console.error(`Did not find touch id ${LT}`), [0, 0]
```

#### 13. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L231)

```diff
-       pp.yG.Aip += (ip.deltaX || 0) * cp, pp.yG.Wip += (ip.deltaY || 0) * cp, pp.yG.yip += (ip.deltaZ || 0) * cp
+       TT.yG.jUT += (UT.deltaX || 0) * mT, TT.yG.lUT += (UT.deltaY || 0) * mT, TT.yG.pUT += (UT.deltaZ || 0) * mT
```

#### 14. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L235)

```diff
-       if (!pp.WG) return ip.preventDefault(), !1
+       if (!TT.aG) return UT.preventDefault(), !1
```

#### 15. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L303)

```diff
-       }))), "button" in Op || (cp.YG && !Op.defaultPrevented && Op.preventDefault(), cp.stopPropagation && Op.stopPropagation()))
+       }))), "button" in WT || (mT.wG && !WT.defaultPrevented && WT.preventDefault(), mT.stopPropagation && WT.stopPropagation()))
```

#### 16. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L307)

```diff
-       return pp ? !ip : ip
+       return TT ? !UT : UT
```

#### 17. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L310)

```diff
-   36730: (pp, ip) => {
+   36617: (TT, UT) => {
```

#### 18. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L318)

```diff
-       return (cp = Op[Ip.toLowerCase()]) ? cp : (cp = op[Ip.toLowerCase()]) || (1 === Ip.length ? Ip.charCodeAt(0) : void 0)
+       return (mT = WT[MT.toLowerCase()]) ? mT : (mT = zT[MT.toLowerCase()]) || (1 === MT.length ? MT.charCodeAt(0) : void 0)
```

#### 19. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L407)

```diff
-   39757: (pp, ip, cp) => {
+   39674: (TT, UT, mT) => {
```

#### 20. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L409)

```diff
-       c: () => Op
+       b: () => WT
```

#### 21. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L415)

```diff
-         this.qB = !1, this.XB = !1, this.Bl = 30, this.YB = 0, this.lB = 100, this.rw = !1, this.fullscreen = !1, this.gH = function(pp) {}, this.JB = function(pp, ip, cp) {}, this.pN = function() {}, this.mH = function() {}, this.nB = function() {}, this.onFullscreenChanged = fu … [truncated]
+         this.zC = !1, this.gC = !1, this.sF = 30, this.Xu = 0, this.nC = 100, this.yc = !1, this.fullscreen = !1, this.hq = function(TT) {}, this.lC = function(TT, UT, mT) {}, this.fC = function() {}, this.Qq = function() {}, this.pC = function() {}, this.onFullscreenChanged = fu … [truncated]
```

#### 22. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L432)

```diff
-                 if (ip.lastFrameStarted = cp, pp.YB > 0) {
+                 if (UT.lastFrameStarted = mT, TT.Xu > 0) {
```

#### 23. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L434)

```diff
-                   var op = 1e3 / pp.YB;
+                   var zT = 1e3 / TT.Xu;
```

#### 24. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L440` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L440) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L440)

```diff
-                 var Sp = 1e3 / pp.Bl,
+                 var gT = 1e3 / TT.sF,
```

#### 25. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L443-L444` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L443-L444) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L443-L444)

```diff
-                 pp.JB(Ip, Lp, Sp), setTimeout(xp, 0, pp, !0)
-               }(pp), ip.intervalCB = () => xp(pp), requestAnimationFrame(ip.frameCB), ip.pollTime > 0 && (ip.intervalID = setInterval(ip.intervalCB, Math.max(ip.pollTime, 1e3 / pp.Bl / 2)))
+                 TT.lC(MT, HT, gT), setTimeout(nT, 0, TT, !0)
+               }(TT), UT.intervalCB = () => nT(TT), requestAnimationFrame(UT.frameCB), UT.pollTime > 0 && (UT.intervalID = setInterval(UT.intervalCB, Math.max(UT.pollTime, 1e3 / TT.sF / 2)))
```

#### 26. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L461)

```diff
-                 cp = ip === document.pointerLockElement, pp.nB(cp)
+                 mT = UT === document.pointerLockElement, TT.pC(mT)
```

#### 27. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L466)

```diff
-               })), Object.defineProperty(pp, "rw", {
+               })), Object.defineProperty(TT, "yc", {
```

#### 28. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L473` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L473) · [Before (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L473)

```diff
-                 pp.qB && op(!0), pp.XB && Ip(!0)
+                 TT.zC && zT(!0), TT.gC && MT(!0)
```

#### 29. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L475)

```diff
-               var Sp = () => pp.mH();
+               var gT = () => TT.Qq();
```

#### 30. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L479)

```diff
-             }(this, pp), this.pN()
+             }(this, TT), this.fC()
```

#### 31. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L492)

```diff
-       for (var ip = pp._data, cp = 1e3 / pp.Bl, Op = ip.nowObject.now() + Sp, op = 0; ip.nowObject.now() >= ip.lastTickStarted + cp && ip.nowObject.now() < Op && ++op <= Ip;) pp.gH(cp), ip.lastTickStarted += cp;
+       for (var UT = TT._data, mT = 1e3 / TT.sF, WT = UT.nowObject.now() + gT, zT = 0; UT.nowObject.now() >= UT.lastTickStarted + mT && UT.nowObject.now() < WT && ++zT <= MT;) TT.hq(mT), UT.lastTickStarted += mT;
```

#### 32. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L499)

```diff
-   36887: (pp, ip, cp) => {
+   36791: (TT, UT, mT) => {
```

#### 33. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L501)

```diff
-       c: () => Sp
+       d: () => gT
```

#### 34. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L503` → after: `L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L503) · [Before (L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L503)

```diff
-     var Op = cp(62);
+     var WT = mT(63);
```

#### 35. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/222.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/222.js#L525)

```diff
-   36772: pp => {
+   36672: TT => {
```
