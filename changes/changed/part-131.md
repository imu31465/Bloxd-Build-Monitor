# Changed — Bundle Modifications Report (Part 131 / 141)

- **Updated at**: `2026-11-25T09:40 JST`
- **Part**: `131 / 141` (**418** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 130](part-130.md) · [Part 132 →](part-132.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/wasmClientGame.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/wasmClientGame.js` (965 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b)

#### 528. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4914` → after: `L4914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4914) · [Before (L4914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4914)

```diff
-         return 0 !== ((null !== (IB = this.props.blockFlags[BB]) && void 0 !== IB ? IB : 0) & NB.r.PlaceOver)
+         return 0 !== ((null !== (et = this.props.blockFlags[tt]) && void 0 !== et ? et : 0) & ft.D.PlaceOver)
```

#### 529. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4918` → after: `L4918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4918) · [Before (L4918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4918)

```diff
-         return null !== (IB = this.props.blockAttachedTops[BB]) && void 0 !== IB ? IB : 0
+         return null !== (et = this.props.blockAttachedTops[tt]) && void 0 !== et ? et : 0
```

#### 530. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4935-L4937` → after: `L4935-L4937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4935-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4935-L4937) · [Before (L4935-L4937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4935-L4937)

```diff
-               for (let BB = 0; BB + NB.Sd.BYTES <= oB; BB += NB.Sd.BYTES) vB.push(Object.freeze({
-                 item: IB.nameOfId(NB.Sd.item(GB, BB)),
-                 amt: NB.Sd.amount(GB, BB)
+               for (let tt = 0; tt + ft.ge.BYTES <= Dt; tt += ft.ge.BYTES) dt.push(Object.freeze({
+                 item: et.nameOfId(ft.ge.item(mt, tt)),
+                 amt: ft.ge.amount(mt, tt)
```

#### 531. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4957-L4963` → after: `L4957-L4963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4957-L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4957-L4963) · [Before (L4957-L4963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4957-L4963)

```diff
-     var UJ = ZB(40801),
-       WJ = ZB(36979),
-       dJ = ZB(36966),
-       CJ = ZB(36969),
-       QJ = ZB(36529),
-       sJ = ZB(40729),
-       wJ = ZB(42581);
+     var Mq = Vt(40952),
+       bq = Vt(37194),
+       Jq = Vt(37176),
+       Cq = Vt(37182),
+       uq = Vt(36745),
+       Kq = Vt(40880),
+       hq = Vt(42829);
```

#### 532. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4971` → after: `L4971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4971) · [Before (L4971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4971)

```diff
-       return IB.byteLength < zB.Mc ? IB : IB.subarray(0, zB.Mc - 1)
+       return et.byteLength < lt.Uc ? et : et.subarray(0, lt.Uc - 1)
```

#### 533. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4979` → after: `L4979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4979) · [Before (L4979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4979)

```diff
-         this.keyframesVersion = OJ, this.reloadFrom = null !== (BB = null === (IB = this.view()) || void 0 === IB ? void 0 : IB.version) && void 0 !== BB ? BB : OJ
+         this.keyframesVersion = vq, this.reloadFrom = null !== (tt = null === (et = this.view()) || void 0 === et ? void 0 : et.version) && void 0 !== tt ? tt : vq
```

#### 534. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L4982` → after: `L4982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR4982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4982) · [Before (L4982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L4982)

```diff
-         const IB = 1 === this.deps.core.VJB(BB);
+         const et = 1 === this.deps.core.DDt(tt);
```

#### 535. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5003` → after: `L5003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5003) · [Before (L5003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5003)

```diff
-         this.deps.replay.setCameraMode(wJ.d.indexOf(BB))
+         this.deps.replay.setCameraMode(hq.b.indexOf(tt))
```

#### 536. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5007` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5007) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5007)

```diff
-         const IB = NB.p.replayViewPtr(this.deps.apiView(), 0);
+         const et = ft.x.replayViewPtr(this.deps.apiView(), 0);
```

#### 537. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5009-L5010` → after: `L5009-L5010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5009-L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5009-L5010) · [Before (L5009-L5010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5009-L5010)

```diff
-         const ZB = new DataView(this.deps.buffer(), IB, NB.Ld.BYTES),
-           TB = NB.Ld.version(ZB, 0),
+         const Vt = new DataView(this.deps.buffer(), et, ft.Zd.BYTES),
+           Ot = ft.Zd.version(Vt, 0),
```

#### 538. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5013` → after: `L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5013) · [Before (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5013)

```diff
-         const oB = NB.Ld.markIn(ZB, 0),
+         const Dt = ft.Zd.markIn(Vt, 0),
```

#### 539. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5016-L5021` → after: `L5016-L5021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5016-L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5016-L5021) · [Before (L5016-L5021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5016-L5021)

```diff
-             state: NB.Ld.state(ZB, 0),
-             cameraMode: null !== (BB = wJ.d[NB.Ld.cameraMode(ZB, 0)]) && void 0 !== BB ? BB : "recording",
-             Iz: NB.Ld.Iz(ZB, 0),
-             totalTicks: NB.Ld.totalTicks(ZB, 0),
-             speed: NB.Ld.speed(ZB, 0),
-             mark: oB === NB.Id ? null : {
+             state: ft.Zd.state(Vt, 0),
+             cameraMode: null !== (tt = hq.b[ft.Zd.cameraMode(Vt, 0)]) && void 0 !== tt ? tt : "recording",
+             BQ: ft.Zd.BQ(Vt, 0),
+             totalTicks: ft.Zd.totalTicks(Vt, 0),
+             speed: ft.Zd.speed(Vt, 0),
+             mark: Dt === ft.Vd ? null : {
```

#### 540. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5023` → after: `L5023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5023) · [Before (L5023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5023)

```diff
-               outTick: NB.Ld.markOut(ZB, 0)
+               outTick: ft.Zd.markOut(Vt, 0)
```

#### 541. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5025` → after: `L5025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5025) · [Before (L5025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5025)

```diff
-             editVersion: NB.Ld.editVersion(ZB, 0)
+             editVersion: ft.Zd.editVersion(Vt, 0)
```

#### 542. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5033` → after: `L5033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5033) · [Before (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5033)

```diff
-         const IB = this.reloadFrom === OJ && BB.state !== zB.sd.Cropping && BB.state !== zB.sd.None,
+         const et = this.reloadFrom === vq && tt.state !== lt.wd.Cropping && tt.state !== lt.wd.None,
```

#### 543. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5038` → after: `L5038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5038) · [Before (L5038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5038)

```diff
-         } = this.deps, JB = TB.SJB(), oB = TB.Rq(), GB = [];
+         } = this.deps, qt = Ot.mDt(), Dt = Ot.ky(), mt = [];
```

#### 544. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5040` → after: `L5040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5040) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5040) · [Before (L5040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5040)

```diff
-           const BB = new DataView(this.deps.buffer(), oB, JB * zB.wc);
+           const tt = new DataView(this.deps.buffer(), Dt, qt * lt.Fc);
```

#### 545. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5042` → after: `L5042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5042) · [Before (L5042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5042)

```diff
-             const ZB = IB * zB.wc,
+             const Vt = et * lt.Fc,
```

#### 546. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5045-L5048` → after: `L5045-L5048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5045-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5045-L5048) · [Before (L5045-L5048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5045-L5048)

```diff
-               Iz: BB.getUint32(ZB + zB.Jc, !0),
-               position: [TB(zB.Fc), TB(zB.Fc + 8), TB(zB.Fc + 16)],
-               direction: [TB(zB.yc), TB(zB.yc + 8), TB(zB.yc + 16)],
-               easing: [TB(zB.Bc), TB(zB.Bc + 8), TB(zB.Bc + 16), TB(zB.Bc + 24)]
+               BQ: tt.getUint32(Vt + lt.Qc, !0),
+               position: [Ot(lt.Mc), Ot(lt.Mc + 8), Ot(lt.Mc + 16)],
+               direction: [Ot(lt.Gc), Ot(lt.Gc + 8), Ot(lt.Gc + 16)],
+               easing: [Ot(lt.Ic), Ot(lt.Ic + 8), Ot(lt.Ic + 16), Ot(lt.Ic + 24)]
```

#### 547. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5056` → after: `L5056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5056) · [Before (L5056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5056)

```diff
-           IB = [NB.p.eye(BB, 0, 0), NB.p.eye(BB, 0, 1), NB.p.eye(BB, 0, 2)];
+           et = [ft.x.eye(tt, 0, 0), ft.x.eye(tt, 0, 1), ft.x.eye(tt, 0, 2)];
```

#### 548. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5060` → after: `L5060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5060) · [Before (L5060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5060)

```diff
-         }(NB.p.heading(BB, 0), NB.p.pitch(BB, 0)))
+         }(ft.x.heading(tt, 0), ft.x.pitch(tt, 0)))
```

#### 549. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5063` → after: `L5063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5063) · [Before (L5063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5063)

```diff
-         return this.deps.replay.setKeyframe(BB.Iz, Float64Array.from([...BB.position, ...BB.direction, ...BB.easing]))
+         return this.deps.replay.setKeyframe(tt.BQ, Float64Array.from([...tt.position, ...tt.direction, ...tt.easing]))
```

#### 550. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5073` → after: `L5073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5073) · [Before (L5073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5073)

```diff
-         return this.deps.replay.setMark(null !== (IB = null === BB || void 0 === BB ? void 0 : BB.inTick) && void 0 !== IB ? IB : -1, null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.outTick) && void 0 !== ZB ? ZB : -1)
+         return this.deps.replay.setMark(null !== (et = null === tt || void 0 === tt ? void 0 : tt.inTick) && void 0 !== et ? et : -1, null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.outTick) && void 0 !== Vt ? Vt : -1)
```

#### 551. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5090` → after: `L5090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5090) · [Before (L5090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5090)

```diff
-         return null !== ZB && (0, NB.yf)(ZB, 0, BB, null === IB ? YJ : iJ.encode(IB))
+         return null !== Vt && (0, ft.Hf)(Vt, 0, tt, null === et ? Wq : Sq.encode(et))
```

#### 552. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5095` → after: `L5095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5095) · [Before (L5095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5095)

```diff
-         return null !== JB && (0, NB.vf)(JB, 0, IB, ZB, oB, iJ.encode(BB))
+         return null !== qt && (0, ft.Ef)(qt, 0, et, Vt, Dt, Sq.encode(tt))
```

#### 553. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5099` → after: `L5099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5099) · [Before (L5099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5099)

```diff
-         return null !== JB && (0, NB.Bf)(JB, 0, BB, IB, Math.max(0, ZB), iJ.encode(TB))
+         return null !== qt && (0, ft.If)(qt, 0, tt, et, Math.max(0, Vt), Sq.encode(Ot))
```

#### 554. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5107` → after: `L5107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5107) · [Before (L5107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5107)

```diff
-                 return BB + bZ.qb + (null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.byteLength) && void 0 !== ZB ? ZB : 0)
+                 return tt + pV.sb + (null !== (Vt = null === et || void 0 === et ? void 0 : et.byteLength) && void 0 !== Vt ? Vt : 0)
```

#### 555. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5114` → after: `L5114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5114) · [Before (L5114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5114)

```diff
-               TB.setUint16(JB, null !== (oB = null === GB || void 0 === GB ? void 0 : GB.byteLength) && void 0 !== oB ? oB : zB.Mc, !0), JB += bZ.qb, null !== GB && (ZB.set(GB, JB), JB += GB.byteLength)
+               Ot.setUint16(qt, null !== (Dt = null === mt || void 0 === mt ? void 0 : mt.byteLength) && void 0 !== Dt ? Dt : lt.Uc, !0), qt += pV.sb, null !== mt && (Vt.set(mt, qt), qt += mt.byteLength)
```

#### 556. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5118` → after: `L5118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5118) · [Before (L5118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5118)

```diff
-         return null !== oB && (0, NB.xf)(oB, 0, null !== (TB = BB.id) && void 0 !== TB ? TB : NB.Rc, null !== (JB = IB.id) && void 0 !== JB ? JB : NB.Rc, GB)
+         return null !== Dt && (0, ft.Gf)(Dt, 0, null !== (Ot = tt.id) && void 0 !== Ot ? Ot : ft.hd, null !== (qt = et.id) && void 0 !== qt ? qt : ft.hd, mt)
```

#### 557. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5129` → after: `L5129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5129) · [Before (L5129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5129)

```diff
-         this.deps.core.BoB()
+         this.deps.core.dDt()
```

#### 558. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5147` → after: `L5147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5147) · [Before (L5147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5147)

```diff
-         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (IB = BB.now) && void 0 !== IB ? IB : () => performance.now()
+         }, this.recordingSince = null, this.clipTickPending = !1, this.now = void 0, this.now = null !== (et = tt.now) && void 0 !== et ? et : () => performance.now()
```

#### 559. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5158` → after: `L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5158) · [Before (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5158)

```diff
-         this.live && (this.viewerShown(!0 === (null === (IB = (ZB = this.deps).viewerOpen) || void 0 === IB ? void 0 : IB.call(ZB))), this.deps.client.recorderSession(BB, (0, wJ.g)()))
+         this.live && (this.viewerShown(!0 === (null === (et = (Vt = this.deps).viewerOpen) || void 0 === et ? void 0 : et.call(Vt))), this.deps.client.recorderSession(tt, (0, hq.c)()))
```

#### 560. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5165` → after: `L5165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5165) · [Before (L5165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5165)

```diff
-         this.live && (this.state.recording || !0 !== (null === (BB = (IB = this.deps).viewerOpen) || void 0 === BB ? void 0 : BB.call(IB))) ? this.deps.client.recorderControl(zB.ad.ToggleRecording) : this.deps.notify(CJ.b.closeViewerFirst)
+         this.live && (this.state.recording || !0 !== (null === (tt = (et = this.deps).viewerOpen) || void 0 === tt ? void 0 : tt.call(et))) ? this.deps.client.recorderControl(lt.fd.ToggleRecording) : this.deps.notify(Cq.d.closeViewerFirst)
```

#### 561. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5168` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5168) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5168)

```diff
-         this.live ? this.deps.client.recorderControl(zB.ad.SaveClip) : this.deps.notify(CJ.b.clippingNotOn)
+         this.live ? this.deps.client.recorderControl(lt.fd.SaveClip) : this.deps.notify(Cq.d.clippingNotOn)
```

#### 562. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5171` → after: `L5171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5171) · [Before (L5171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5171)

```diff
-         this.live && this.deps.client.recorderControl(BB ? zB.ad.ViewerOpened : zB.ad.ViewerClosed)
+         this.live && this.deps.client.recorderControl(tt ? lt.fd.ViewerOpened : lt.fd.ViewerClosed)
```

#### 563. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5206` → after: `L5206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5206) · [Before (L5206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5206)

```diff
-         } = this.deps, JB = CJ.b;
+         } = this.deps, qt = Cq.d;
```

#### 564. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5208` → after: `L5208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5208) · [Before (L5208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5208)

```diff
-           case zB.Yc.RecordingStarted:
+           case lt.ed.RecordingStarted:
```

#### 565. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5215-L5216` → after: `L5215-L5216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5215-L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5215-L5216) · [Before (L5215-L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5215-L5216)

```diff
-           case zB.Yc.RecordingStopped:
-             this.stopRecording(), TB(JB.recordingStopped), this.saveState(zB.ld.Recording, "saving");
+           case lt.ed.RecordingStopped:
+             this.stopRecording(), Ot(qt.recordingStopped), this.saveState(lt.nd.Recording, "saving");
```

#### 566. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5218)

```diff
-           case zB.Yc.RecordingDiscarded:
+           case lt.ed.RecordingDiscarded:
```

#### 567. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5221` → after: `L5221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5221) · [Before (L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5221)

```diff
-           case zB.Yc.RecordingTurnedOff:
+           case lt.ed.RecordingTurnedOff:
```

#### 568. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5224` → after: `L5224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5224) · [Before (L5224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5224)

```diff
-           case zB.Yc.LimitReached:
+           case lt.ed.LimitReached:
```

#### 569. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5227-L5228` → after: `L5227-L5228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5227-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5227-L5228) · [Before (L5227-L5228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5227-L5228)

```diff
-           case zB.Yc.ClipSaved:
-             this.saveState(zB.ld.Clip, "saving");
+           case lt.ed.ClipSaved:
+             this.saveState(lt.nd.Clip, "saving");
```

#### 570. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5230` → after: `L5230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5230) · [Before (L5230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5230)

```diff
-           case zB.Yc.ClipEmpty:
+           case lt.ed.ClipEmpty:
```

#### 571. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5233` → after: `L5233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5233) · [Before (L5233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5233)

```diff
-           case zB.Yc.ClippingNotOn:
+           case lt.ed.ClippingNotOn:
```

#### 572. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5236` → after: `L5236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5236) · [Before (L5236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5236)

```diff
-           case zB.Yc.Disallowed:
+           case lt.ed.Disallowed:
```

#### 573. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5239` → after: `L5239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5239) · [Before (L5239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5239)

```diff
-           case zB.Yc.ClippingOn:
+           case lt.ed.ClippingOn:
```

#### 574. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5246` → after: `L5246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5246) · [Before (L5246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5246)

```diff
-           case zB.Yc.ClippingOff:
+           case lt.ed.ClippingOff:
```

#### 575. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5253` → after: `L5253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5253) · [Before (L5253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5253)

```diff
-           case zB.Yc.ClipSettingsChanged:
+           case lt.ed.ClipSettingsChanged:
```

#### 576. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5259` → after: `L5259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5259) · [Before (L5259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5259)

```diff
-           case zB.Yc.SaveBusy:
+           case lt.ed.SaveBusy:
```

#### 577. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5262` → after: `L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5262) · [Before (L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5262)

```diff
-           case zB.Yc.CloseViewerFirst:
+           case lt.ed.CloseViewerFirst:
```

#### 578. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5267` → after: `L5267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5267) · [Before (L5267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5267)

```diff
-         this.deps.download(IB), this.saveState(BB, "done"), this.deps.notify(BB === zB.ld.Clip ? CJ.b.clipSaved : CJ.b.recordingSaved)
+         this.deps.download(et), this.saveState(tt, "done"), this.deps.notify(tt === lt.nd.Clip ? Cq.d.clipSaved : Cq.d.recordingSaved)
```

#### 579. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5270` → after: `L5270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5270) · [Before (L5270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5270)

```diff
-         this.saveState(BB, "failed"), this.deps.notify(BB === zB.ld.Clip ? CJ.b.clipFailed : CJ.b.recordingFailed)
+         this.saveState(tt, "failed"), this.deps.notify(tt === lt.nd.Clip ? Cq.d.clipFailed : Cq.d.recordingFailed)
```

#### 580. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5292` → after: `L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5292) · [Before (L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5292)

```diff
-         if (IB + bZ.qb > ZB) return null;
+         if (et + pV.sb > Vt) return null;
```

#### 581. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5294` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5294) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5294)

```diff
-         if (IB += bZ.qb, TB !== zB.Mc) {
+         if (et += pV.sb, Ot !== lt.Uc) {
```

#### 582. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5299` → after: `L5299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5299) · [Before (L5299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5299)

```diff
-       return IB === ZB ? JB : null
+       return et === Vt ? qt : null
```

#### 583. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5316` → after: `L5316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5316) · [Before (L5316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5316)

```diff
-               case zB.od.Cleared:
+               case lt.rd.Cleared:
```

#### 584. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5318` → after: `L5318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5318) · [Before (L5318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5318)

```diff
-               case zB.od.Text:
+               case lt.rd.Text:
```

#### 585. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5320` → after: `L5320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5320) · [Before (L5320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5320)

```diff
-               case zB.od.Int:
+               case lt.rd.Int:
```

#### 586. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5322` → after: `L5322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5322) · [Before (L5322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5322)

```diff
-               case zB.od.Double:
+               case lt.rd.Double:
```

#### 587. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5337` → after: `L5337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5337) · [Before (L5337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5337)

```diff
-               case zB.rd.FlyingText: {
+               case lt.ud.FlyingText: {
```

#### 588. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5341-L5342` → after: `L5341-L5342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5341-L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5341-L5342) · [Before (L5341-L5342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5341-L5342)

```diff
-                   Ro: ZB,
-                   Po: TB,
+                   rD: Vt,
+                   oD: Ot,
```

#### 589. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5347` → after: `L5347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5347) · [Before (L5347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5347)

```diff
-               case zB.rd.PlayerKilled: {
+               case lt.ud.PlayerKilled: {
```

#### 590. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5357` → after: `L5357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5357) · [Before (L5357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5357)

```diff
-               case zB.rd.Killfeed: {
+               case lt.ud.Killfeed: {
```

#### 591. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5399` → after: `L5399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5399) · [Before (L5399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5399)

```diff
-       return (BB, IB, oB, GB) => !(BB < zB.X.ReplayFailed || BB > zB.X.RecorderEvent) && (ZB = IB, TB = !0, (0, NB.me)(BB, IB, oB, GB, JB) && TB)
+       return (tt, et, Dt, mt) => !(tt < lt.db.ReplayFailed || tt > lt.db.RecorderEvent) && (Vt = et, Ot = !0, (0, ft.xe)(tt, et, Dt, mt, qt) && Ot)
```

#### 592. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5415` → after: `L5415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5415) · [Before (L5415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5415)

```diff
-               if (JB + zB.U > ZB.byteLength) throw new Error(`the recorder module's events end mid-head at ${JB}`);
+               if (qt + lt.bb > Vt.byteLength) throw new Error(`the recorder module's events end mid-head at ${qt}`);
```

#### 593. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5419-L5421` → after: `L5419-L5421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5419-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5419-L5421) · [Before (L5419-L5421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5419-L5421)

```diff
-                 vB = JB + zB.U;
-               if (vB + GB > ZB.byteLength || !IB(oB, TB, vB, GB)) throw new Error(`the recorder module wrote a malformed event ${oB} (${GB} bytes) at ${JB}`);
-               JB = vB + (0, zB.xe)(GB)
+                 dt = qt + lt.bb;
+               if (dt + mt > Vt.byteLength || !et(Dt, Ot, dt, mt)) throw new Error(`the recorder module wrote a malformed event ${Dt} (${mt} bytes) at ${qt}`);
+               qt = dt + (0, lt.Fe)(mt)
```

#### 594. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5439` → after: `L5439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5439) · [Before (L5439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5439)

```diff
-         const ZB = null !== (IB = this.parts.get(BB.save)) && void 0 !== IB ? IB : [];
+         const Vt = null !== (et = this.parts.get(tt.save)) && void 0 !== et ? et : [];
```

#### 595. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5463` → after: `L5463`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5463) · [Before (L5463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5463)

```diff
-       return ZB.e(61).then((() => ZB(60677)))
+       return Vt.e(61).then((() => Vt(60845)))
```

#### 596. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5488` → after: `L5488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5488) · [Before (L5488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5488)

```diff
-             IB === zB.ld.Edited ? null === (TB = this.viewer) || void 0 === TB || TB.saveDone(ZB) : this.recorder.fileReady(IB, ZB)
+             et === lt.nd.Edited ? null === (Ot = this.viewer) || void 0 === Ot || Ot.saveDone(Vt) : this.recorder.fileReady(et, Vt)
```

#### 597. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5520` → after: `L5520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5520) · [Before (L5520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5520)

```diff
-               case zB.Yc.FileDiscarded:
+               case lt.ed.FileDiscarded:
```

#### 598. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5523` → after: `L5523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5523) · [Before (L5523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5523)

```diff
-               case zB.Yc.SaveFailed:
+               case lt.ed.SaveFailed:
```

#### 599. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5526` → after: `L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5526) · [Before (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5526)

```diff
-               case zB.Yc.SaveBusy:
+               case lt.ed.SaveBusy:
```

#### 600. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5549` → after: `L5549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5549) · [Before (L5549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5549)

```diff
-         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (BB = this.deps.loadViewer) && void 0 !== BB ? BB : XJ)().catch((BB => {
+         return this.viewer ? Promise.resolve(this.viewer) : (this.viewerChunk ??= (null !== (tt = this.deps.loadViewer) && void 0 !== tt ? tt : zq)().catch((tt => {
```

#### 601. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5567` → after: `L5567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5567) · [Before (L5567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5567)

```diff
-           BB > 0 && this.recorder.Iz()
+           tt > 0 && this.recorder.BQ()
```

#### 602. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5579` → after: `L5579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5579) · [Before (L5579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5579)

```diff
-         BB === zB.ld.Edited ? null === (IB = this.viewer) || void 0 === IB || IB.saveFailed(!1) : this.recorder.failed(BB)
+         tt === lt.nd.Edited ? null === (et = this.viewer) || void 0 === et || et.saveFailed(!1) : this.recorder.failed(tt)
```

#### 603. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5582-L5585` → after: `L5582-L5585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5582-L5585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5582-L5585) · [Before (L5582-L5585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5582-L5585)

```diff
-     var eJ = ZB(40675),
-       uJ = ZB(40692),
-       fJ = ZB(4978),
-       lJ = ZB(40946);
+     var rq = Vt(40804),
+       Uq = Vt(40824),
+       Aq = Vt(4971),
+       iq = Vt(41106);
```

#### 604. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5592` → after: `L5592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5592) · [Before (L5592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5592)

```diff
-         const ZB = (0, mB.v)(0, performance.now()),
+         const Vt = (0, Gt.r)(0, performance.now()),
```

#### 605. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5594-L5595` → after: `L5594-L5595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5594-L5595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5594-L5595) · [Before (L5594-L5595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5594-L5595)

```diff
-         (0, lJ.h)((() => {
-           (0, mB.A)(zB.vb.MouseDown, 0, 0, 0, ZB), (0, mB.A)(zB.vb.MouseMove, 0, BB * TB, IB * TB, 0), (0, mB.A)(zB.vb.MouseUp, 0, 0, 0, ZB)
+         (0, iq.e)((() => {
+           (0, Gt.w)(lt.Fb.MouseDown, 0, 0, 0, Vt), (0, Gt.w)(lt.Fb.MouseMove, 0, tt * Ot, et * Ot, 0), (0, Gt.w)(lt.Fb.MouseUp, 0, 0, 0, Vt)
```

#### 606. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5600` → after: `L5600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5600) · [Before (L5600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5600)

```diff
-         this.analogue[0] = null !== (IB = null === BB || void 0 === BB ? void 0 : BB.x) && void 0 !== IB ? IB : 0, this.analogue[1] = null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.y) && void 0 !== ZB ? ZB : 0, this.send()
+         this.analogue[0] = null !== (et = null === tt || void 0 === tt ? void 0 : tt.x) && void 0 !== et ? et : 0, this.analogue[1] = null !== (Vt = null === tt || void 0 === tt ? void 0 : tt.y) && void 0 !== Vt ? Vt : 0, this.send()
```

#### 607. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5603-L5604` → after: `L5603-L5604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5603-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5603-L5604) · [Before (L5603-L5604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5603-L5604)

```diff
-         const ZB = "freeCamUp" === BB ? NB.Mb.Up : NB.Mb.Down;
-         this.keys = IB ? this.keys | ZB : this.keys & ~ZB, this.send()
+         const Vt = "freeCamUp" === tt ? ft.Wb.Up : ft.Wb.Down;
+         this.keys = et ? this.keys | Vt : this.keys & ~Vt, this.send()
```

#### 608. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5611` → after: `L5611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5611) · [Before (L5611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5611)

```diff
-         this.unsent = null !== BB && !(0, NB.Ae)(BB, 0, this.analogue, this.keys)
+         this.unsent = null !== tt && !(0, ft.Pe)(tt, 0, this.analogue, this.keys)
```

#### 609. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5614-L5620` → after: `L5614-L5620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5614-L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5614-L5620) · [Before (L5614-L5620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5614-L5620)

```diff
-     var tJ = ZB(3726),
-       bJ = ZB(760),
-       xJ = ZB(282),
-       EJ = ZB(105),
-       DJ = ZB(34103),
-       KJ = ZB(747),
-       VJ = ZB(36609);
+     var Bq = Vt(3630),
+       pq = Vt(809),
+       xq = Vt(318),
+       Tq = Vt(106),
+       gq = Vt(34308),
+       sq = Vt(797),
+       nq = Vt(36844);
```

#### 610. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5623-L5624` → after: `L5623-L5624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5623-L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5623-L5624) · [Before (L5623-L5624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5623-L5624)

```diff
-       const BB = TB.d.get("clientEscMenuOptions"),
-         IB = (0, bJ.k)(BB);
+       const tt = Ot.b.get("clientEscMenuOptions"),
+         et = (0, pq.p)(tt);
```

#### 611. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5626` → after: `L5626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5626) · [Before (L5626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5626)

```diff
-         mouse: (0, EJ.isMobile)() ? IB : BB.mouseSensitivity,
+         mouse: (0, Tq.isMobile)() ? et : tt.mouseSensitivity,
```

#### 612. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5633-L5634` → after: `L5633-L5634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5633-L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5633-L5634) · [Before (L5633-L5634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5633-L5634)

```diff
-       const BB = TB.d.get("clientEscMenuOptions"),
-         IB = TB.d.get("isTouchScreen") ? (0, bJ.k)(BB) : BB.mouseSensitivity,
+       const tt = Ot.b.get("clientEscMenuOptions"),
+         et = Ot.b.get("isTouchScreen") ? (0, pq.p)(tt) : tt.mouseSensitivity,
```

#### 613. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5636` → after: `L5636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5636) · [Before (L5636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5636)

```diff
-       return ZB > 0 ? IB / ZB : 1
+       return Vt > 0 ? et / Vt : 1
```

#### 614. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5641` → after: `L5641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5641) · [Before (L5641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5641)

```diff
-         BB.setSoundPrefs(TB.d.get("soundVolume"), TB.d.get("soundOnFromAd"))
+         tt.setSoundPrefs(Ot.b.get("soundVolume"), Ot.b.get("soundOnFromAd"))
```

#### 615. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5650` → after: `L5650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5650) · [Before (L5650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5650)

```diff
-         } = TB.d.get("clientEscMenuOptions"), vB = {
+         } = Ot.b.get("clientEscMenuOptions"), dt = {
```

#### 616. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5655` → after: `L5655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5655) · [Before (L5655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5655)

```diff
-           cellLight: (0, tJ.k)("cellLight") ? (0, tJ.k)("cellLightUnlit") ? "all" : "lit" : "off"
+           cellLight: (0, Bq.l)("cellLight") ? (0, Bq.l)("cellLightUnlit") ? "all" : "lit" : "off"
```

#### 617. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5657` → after: `L5657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5657) · [Before (L5657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5657)

```diff
-         ZB && (0, zB.he)(ZB) === (0, zB.he)(vB) && ZB.fogChunks === oB || (ZB = vB, BB.setEnvPrefs(ZB))
+         Vt && (0, lt.ue)(Vt) === (0, lt.ue)(dt) && Vt.fogChunks === Dt || (Vt = dt, tt.setEnvPrefs(Vt))
```

#### 618. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5662` → after: `L5662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5662) · [Before (L5662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5662)

```diff
-           const BB = TB.d.get("clientEscMenuOptions");
+           const tt = Ot.b.get("clientEscMenuOptions");
```

#### 619. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5664` → after: `L5664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5664) · [Before (L5664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5664)

```diff
-             nametagsHidden: TB.d.get("areNametagsHidden"),
+             nametagsHidden: Ot.b.get("areNametagsHidden"),
```

#### 620. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5668` → after: `L5668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5668) · [Before (L5668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5668)

```diff
-             ezTowering: BB.ezTowering ? (0, xJ.g)() : null,
+             ezTowering: tt.ezTowering ? (0, xq.e)() : null,
```

#### 621. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5674` → after: `L5674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5674) · [Before (L5674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5674)

```diff
-             nametagCutDistance: (0, DJ.d)()
+             nametagCutDistance: (0, gq.c)()
```

#### 622. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5677` → after: `L5677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5677) · [Before (L5677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5677)

```diff
-         (0, YB.he)(oB, IB) || (oB = IB, BB.setUiPrefs(IB))
+         (0, Wt.te)(Dt, et) || (Dt = et, tt.setUiPrefs(et))
```

#### 623. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5682` → after: `L5682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5682) · [Before (L5682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5682)

```diff
-         (0, YB.he)(kB, IB) || (kB = IB, BB.setLookPrefs(IB))
+         (0, Wt.te)(jt, et) || (jt = et, tt.setLookPrefs(et))
```

#### 624. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5685` → after: `L5685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5685) · [Before (L5685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5685)

```diff
-       const nB = [(0, GB.p)("appManagerUpdated|soundVolume", IB), (0, GB.p)("appManagerUpdated|soundOnFromAd", IB), (0, GB.p)("appManagerUpdated|clientEscMenuOptions", (() => {
+       const Xt = [(0, mt.n)("appManagerUpdated|soundVolume", et), (0, mt.n)("appManagerUpdated|soundOnFromAd", et), (0, mt.n)("appManagerUpdated|clientEscMenuOptions", (() => {
```

#### 625. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5687` → after: `L5687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5687) · [Before (L5687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5687)

```diff
-       })), (0, GB.p)(VJ.d, vB), (0, GB.p)("appManagerUpdated|enabledDebugFeatures", JB), (0, GB.p)("appManagerUpdated|areNametagsHidden", vB), (0, GB.p)("appManagerUpdated|showDistantNametags", vB)];
+       })), (0, mt.n)(nq.d, dt), (0, mt.n)("appManagerUpdated|enabledDebugFeatures", qt), (0, mt.n)("appManagerUpdated|areNametagsHidden", dt), (0, mt.n)("appManagerUpdated|showDistantNametags", dt)];
```

#### 626. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5692-L5697` → after: `L5692-L5697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5692-L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5692-L5697) · [Before (L5692-L5697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5692-L5697)

```diff
-     var Zo = ZB(40919),
-       To = ZB(40928);
-     var Jo = (0, To.d)("lend"),
-       oo = (0, To.d)("starting"),
-       Go = (0, To.d)("generation"),
-       vo = (0, To.d)("end");
+     var OD = Vt(41083),
+       qD = Vt(41089);
+     var DD = (0, qD.b)("lend"),
+       mD = (0, qD.b)("starting"),
+       dD = (0, qD.b)("generation"),
+       jD = (0, qD.b)("end");
```

#### 627. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5714` → after: `L5714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5714) · [Before (L5714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5714)

```diff
-         return null !== (0, Zo.b)(this, Jo)[Jo] || (0, Zo.b)(this, oo)[oo]
+         return null !== (0, OD.e)(this, DD)[DD] || (0, OD.e)(this, mD)[mD]
```

#### 628. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5718-L5719` → after: `L5718-L5719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5718-L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5718-L5719) · [Before (L5718-L5719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5718-L5719)

```diff
-         const IB = (0, Zo.b)(this, Go)[Go];
-         (0, Zo.b)(this, oo)[oo] = !0;
+         const et = (0, OD.e)(this, dD)[dD];
+         (0, OD.e)(this, mD)[mD] = !0;
```

#### 629. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5723` → after: `L5723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5723) · [Before (L5723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5723)

```diff
-           (0, Zo.b)(this, oo)[oo] = !1
+           (0, OD.e)(this, mD)[mD] = !1
```

#### 630. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5725` → after: `L5725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5725) · [Before (L5725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5725)

```diff
-         if (IB !== (0, Zo.b)(this, Go)[Go]) return "refused";
+         if (et !== (0, OD.e)(this, dD)[dD]) return "refused";
```

#### 631. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5734-L5735` → after: `L5734-L5735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5734-L5735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5734-L5735) · [Before (L5734-L5735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5734-L5735)

```diff
-           0 !== vB ? (new Uint8Array(IB.buffer, vB, GB.length).set(GB), BB.IoB(ZB.headLen, TB, JB) && (oB = "sealing")) : oB = "tooLarge"
-         }), !0), "sealing" !== oB ? (ZB.end(), oB) : ((0, Zo.b)(this, Jo)[Jo] = ZB, "sealing")
+           0 !== dt ? (new Uint8Array(et.buffer, dt, mt.length).set(mt), tt.jDt(Vt.headLen, Ot, qt) && (Dt = "sealing")) : Dt = "tooLarge"
+         }), !0), "sealing" !== Dt ? (Vt.end(), Dt) : ((0, OD.e)(this, DD)[DD] = Vt, "sealing")
```

#### 632. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5738` → after: `L5738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5738) · [Before (L5738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5738)

```diff
-         const BB = (0, Zo.b)(this, Jo)[Jo];
+         const tt = (0, OD.e)(this, DD)[DD];
```

#### 633. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5743-L5745` → after: `L5743-L5745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5743-L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5743-L5745) · [Before (L5743-L5745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5743-L5745)

```diff
-             IB = BB.ZoB(), IB > 0 && (ZB = BB.ToB())
-           }))) return (0, Zo.b)(this, vo)[vo](BB, "stopped");
-         if (IB < 0) return (0, Zo.b)(this, vo)[vo](BB, "read");
+             et = tt.HDt(), et > 0 && (Vt = tt.XDt())
+           }))) return (0, OD.e)(this, jD)[jD](tt, "stopped");
+         if (et < 0) return (0, OD.e)(this, jD)[jD](tt, "read");
```

#### 634. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5755` → after: `L5755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5755) · [Before (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5755)

```diff
-           BB.JoB()
+           tt.QDt()
```

#### 635. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5757` → after: `L5757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5757) · [Before (L5757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5757)

```diff
-         const GB = (0, Zo.b)(this, vo)[vo](BB, oB ? "givenUp" : "stopped");
+         const mt = (0, OD.e)(this, jD)[jD](tt, Dt ? "givenUp" : "stopped");
```

#### 636. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5761-L5762` → after: `L5761-L5762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5761-L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5761-L5762) · [Before (L5761-L5762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5761-L5762)

```diff
-         (0, Zo.b)(this, Go)[Go]++;
-         const BB = (0, Zo.b)(this, Jo)[Jo];
+         (0, OD.e)(this, dD)[dD]++;
+         const tt = (0, OD.e)(this, DD)[DD];
```

#### 637. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5764-L5765` → after: `L5764-L5765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5764-L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5764-L5765) · [Before (L5764-L5765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5764-L5765)

```diff
-           BB.JoB()
-         })), (0, Zo.b)(this, vo)[vo](BB, "stopped"))
+           tt.QDt()
+         })), (0, OD.e)(this, jD)[jD](tt, "stopped"))
```

#### 638. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5770` → after: `L5770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5770) · [Before (L5770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5770)

```diff
-       return (0, Zo.b)(this, Jo)[Jo] = null, BB.end(), IB
+       return (0, OD.e)(this, DD)[DD] = null, tt.end(), et
```

#### 639. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5791` → after: `L5791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5791) · [Before (L5791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5791)

```diff
-         if (BB.busy() || !ho(BB.memoryBytes(), BB.clipSeconds())) return "XF";
+         if (tt.busy() || !lD(tt.memoryBytes(), tt.clipSeconds())) return "hE";
```

#### 640. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5799` → after: `L5799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5799) · [Before (L5799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5799)

```diff
-         if (!ZB) return BB.trapped() ? "trapped" : BB.WN() ? "WN" : "failed";
+         if (!Vt) return tt.trapped() ? "trapped" : tt.df() ? "df" : "failed";
```

#### 641. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5806-L5846` → after: `L5806-L5846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5806-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5806-L5846) · [Before (L5806-L5846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5806-L5846)

```diff
-       go = new Set([zB.ad.ToggleRecording, zB.ad.SaveClip]);
-     var qo = (0, To.d)("bindings"),
-       yo = (0, To.d)("module"),
-       Uo = (0, To.d)("memory"),
-       Wo = (0, To.d)("trapped"),
-       Co = (0, To.d)("WN"),
-       Qo = (0, To.d)("recycleDue"),
-       so = (0, To.d)("loading"),
-       wo = (0, To.d)("generation"),
-       Oo = (0, To.d)("viewDrawn"),
-       Yo = (0, To.d)("clip"),
-       io = (0, To.d)("session"),
-       po = (0, To.d)("control"),
-       ao = (0, To.d)("deferred"),
-       Ho = (0, To.d)("coreU8"),
-       Mo = (0, To.d)("coreU32"),
- ... (25 more removed lines; see GitHub link above)
+       yD = new Set([lt.fd.ToggleRecording, lt.fd.SaveClip]);
+     var ND = (0, qD.b)("bindings"),
+       aD = (0, qD.b)("module"),
+       MD = (0, qD.b)("memory"),
+       bD = (0, qD.b)("trapped"),
+       JD = (0, qD.b)("df"),
+       CD = (0, qD.b)("recycleDue"),
+       uD = (0, qD.b)("loading"),
+       KD = (0, qD.b)("generation"),
+       hD = (0, qD.b)("viewDrawn"),
+       vD = (0, qD.b)("clip"),
+       WD = (0, qD.b)("session"),
+       SD = (0, qD.b)("control"),
+       cD = (0, qD.b)("deferred"),
+       RD = (0, qD.b)("coreU8"),
+       ID = (0, qD.b)("coreU32"),
+ ... (25 more added lines; see GitHub link above)
```

#### 642. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5946-L5947` → after: `L5946-L5947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5946-L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5946-L5947) · [Before (L5946-L5947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5946-L5947)

```diff
-         }), (0, Zo.b)(this, Po)[Po] = new ko({
-           ensureLoaded: () => (0, Zo.b)(this, eo)[eo](),
+         }), (0, OD.e)(this, ZD)[ZD] = new HD({
+           ensureLoaded: () => (0, OD.e)(this, oD)[oD](),
```

#### 643. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5949-L5950` → after: `L5949-L5950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5949-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5949-L5950) · [Before (L5949-L5950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5949-L5950)

```diff
-             IB && (0, Zo.b)(this, ro)[ro]("an edited save's stage");
-             const ZB = (0, Zo.b)(this, TG)[TG](((IB, ZB) => (BB(IB, ZB), !0)));
+             et && (0, OD.e)(this, FD)[FD]("an edited save's stage");
+             const Vt = (0, OD.e)(this, Vm)[Vm](((et, Vt) => (tt(et, Vt), !0)));
```

#### 644. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5958` → after: `L5958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5958) · [Before (L5958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5958)

```diff
-         return null !== (0, Zo.b)(this, yo)[yo]
+         return null !== (0, OD.e)(this, aD)[aD]
```

#### 645. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5961` → after: `L5961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5961) · [Before (L5961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5961)

```diff
-         return (0, Zo.b)(this, Wo)[Wo]
+         return (0, OD.e)(this, bD)[bD]
```

#### 646. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5964` → after: `L5964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5964) · [Before (L5964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5964)

```diff
-         return null !== (0, Zo.b)(this, so)[so]
+         return null !== (0, OD.e)(this, uD)[uD]
```

#### 647. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5967` → after: `L5967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5967) · [Before (L5967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5967)

```diff
-         (0, Zo.b)(this, Co)[Co] || (0, Zo.b)(this, Wo)[Wo] || (0, Zo.b)(this, yo)[yo] || (0, Zo.b)(this, so)[so] || this.deps.prefetch()
+         (0, OD.e)(this, JD)[JD] || (0, OD.e)(this, bD)[bD] || (0, OD.e)(this, aD)[aD] || (0, OD.e)(this, uD)[uD] || this.deps.prefetch()
```

#### 648. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5970` → after: `L5970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5970) · [Before (L5970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5970)

```diff
-         (0, Zo.b)(this, Oo)[Oo] = !0, (0, Zo.b)(this, mo)[mo]() && (0, Zo.b)(this, Lo)[Lo]()
+         (0, OD.e)(this, hD)[hD] = !0, (0, OD.e)(this, kD)[kD]() && (0, OD.e)(this, zD)[zD]()
```

#### 649. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5973` → after: `L5973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5973) · [Before (L5973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5973)

```diff
-         (0, Zo.b)(this, Yo)[Yo] = {
+         (0, OD.e)(this, vD)[vD] = {
```

#### 650. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5976` → after: `L5976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5976) · [Before (L5976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5976)

```diff
-         }, (0, Zo.b)(this, Do)[Do](zB.Wc.Prefs, no(BB, IB)), BB && (0, Zo.b)(this, Oo)[Oo] && (0, Zo.b)(this, Lo)[Lo]()
+         }, (0, OD.e)(this, xD)[xD](lt.ad.Prefs, QD(tt, et)), tt && (0, OD.e)(this, hD)[hD] && (0, OD.e)(this, zD)[zD]()
```

#### 651. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5982-L5983` → after: `L5982-L5983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5982-L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5982-L5983) · [Before (L5982-L5983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5982-L5983)

```diff
-         if (go.has(BB)) return (0, Zo.b)(this, yo)[yo] ? void(0, Zo.b)(this, Do)[Do](zB.Wc.Control, IB) : ((0, Zo.b)(this, po)[po] = IB, void(0, Zo.b)(this, Lo)[Lo]());
-         (0, Zo.b)(this, Co)[Co] || this.deps.coreCommand(zB.Wc.Control, IB)
+         if (yD.has(tt)) return (0, OD.e)(this, aD)[aD] ? void(0, OD.e)(this, xD)[xD](lt.ad.Control, et) : ((0, OD.e)(this, SD)[SD] = et, void(0, OD.e)(this, zD)[zD]());
+         (0, OD.e)(this, JD)[JD] || this.deps.coreCommand(lt.ad.Control, et)
```

#### 652. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5986` → after: `L5986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5986) · [Before (L5986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5986)

```diff
-         (0, Zo.b)(this, io)[io] = BB, (0, Zo.b)(this, Ro)[Ro](BB)
+         (0, OD.e)(this, WD)[WD] = tt, (0, OD.e)(this, LD)[LD](tt)
```

#### 653. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5989` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5989) · [Before (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5989)

```diff
-         (0, Zo.b)(this, Do)[Do](zB.Wc.FilePartDone, function(BB, IB) {
+         (0, OD.e)(this, xD)[xD](lt.ad.FilePartDone, function(tt, et) {
```

#### 654. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5996` → after: `L5996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5996) · [Before (L5996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5996)

```diff
-         return (0, Zo.b)(this, Do)[Do](zB.Wc.FileDone, function(BB) {
+         return (0, OD.e)(this, xD)[xD](lt.ad.FileDone, function(tt) {
```

#### 655. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L5999` → after: `L5999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR5999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5999) · [Before (L5999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L5999)

```diff
-         }(BB)), (0, Zo.b)(this, fo)[fo]()
+         }(tt)), (0, OD.e)(this, UD)[UD]()
```

#### 656. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6002` → after: `L6002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6002) · [Before (L6002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6002)

```diff
-         return (0, Zo.b)(this, ro)[ro]("saveEdited"), (0, Zo.b)(this, Po)[Po].start(BB)
+         return (0, OD.e)(this, FD)[FD]("saveEdited"), (0, OD.e)(this, ZD)[ZD].start(tt)
```

#### 657. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6005-L6011` → after: `L6005-L6011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6005-L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6005-L6011) · [Before (L6005-L6011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6005-L6011)

```diff
-         if (!(0, Zo.b)(this, yo)[yo]) return;
-         "read" === (0, Zo.b)(this, Po)[Po].beforeRecorderStep() && (0, Zo.b)(this, fo)[fo]();
-         const BB = (0, Zo.b)(this, Qo)[Qo];
-         (0, Zo.b)(this, Qo)[Qo] = null;
-         const IB = (0, Zo.b)(this, yo)[yo],
-           ZB = (0, Zo.b)(this, Uo)[Uo];
-         if (!IB || !ZB) return void(null === BB || void 0 === BB || BB.resolve((0, Zo.b)(this, Wo)[Wo] ? "trapped" : "XF"));
+         if (!(0, OD.e)(this, aD)[aD]) return;
+         "read" === (0, OD.e)(this, ZD)[ZD].beforeRecorderStep() && (0, OD.e)(this, UD)[UD]();
+         const tt = (0, OD.e)(this, CD)[CD];
+         (0, OD.e)(this, CD)[CD] = null;
+         const et = (0, OD.e)(this, aD)[aD],
+           Vt = (0, OD.e)(this, MD)[MD];
+         if (!et || !Vt) return void(null === tt || void 0 === tt || tt.resolve((0, OD.e)(this, bD)[bD] ? "trapped" : "hE"));
```

#### 658. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6014` → after: `L6014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6014) · [Before (L6014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6014)

```diff
-         } = this.deps, JB = TB.voB(2);
+         } = this.deps, qt = Ot.fDt(2);
```

#### 659. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6019-L6020` → after: `L6019-L6020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6019-L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6019-L6020) · [Before (L6019-L6020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6019-L6020)

```diff
-           const BB = (0, Zo.b)(this, BG)[BG]();
-           cB = null !== (hB = BB[JB >>> 2]) && void 0 !== hB ? hB : 0, nB = null !== (zB = BB[1 + (JB >>> 2)]) && void 0 !== zB ? zB : 0
+           const tt = (0, OD.e)(this, nD)[nD]();
+           Ht = null !== (Qt = tt[qt >>> 2]) && void 0 !== Qt ? Qt : 0, Xt = null !== (lt = tt[1 + (qt >>> 2)]) && void 0 !== lt ? lt : 0
```

#### 660. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6025` → after: `L6025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6025) · [Before (L6025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6025)

```diff
-             0 !== BB && (0, Zo.b)(this, IG)[IG](ZB).set((0, Zo.b)(this, So)[So]().subarray(cB, cB + nB), BB)
+             0 !== tt && (0, OD.e)(this, tm)[tm](Vt).set((0, OD.e)(this, sD)[sD]().subarray(Ht, Ht + Xt), tt)
```

#### 661. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6027` → after: `L6027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6027) · [Before (L6027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6027)

```diff
-           oB = IB.step(), GB = IB.koB(), vB = IB.coB(), kB = IB.noB()
+           Dt = et.step(), mt = et.wDt(), dt = et.yDt(), jt = et.NDt()
```

#### 662. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6029` → after: `L6029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6029) · [Before (L6029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6029)

```diff
-           if (!(0, Zo.b)(this, oG)[oG](FB)) throw null === BB || void 0 === BB || BB.resolve("XF"), FB;
+           if (!(0, OD.e)(this, qm)[qm](Et)) throw null === tt || void 0 === tt || tt.resolve("hE"), Et;
```

#### 663. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6033-L6034` → after: `L6033-L6034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6033-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6033-L6034) · [Before (L6033-L6034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6033-L6034)

```diff
-           const BB = TB.hoB(2, oB);
-           0 !== BB && (0, Zo.b)(this, So)[So]().set((0, Zo.b)(this, IG)[IG](ZB).subarray(GB, GB + oB), BB)
+           const tt = Ot.aDt(2, Dt);
+           0 !== tt && (0, OD.e)(this, sD)[sD]().set((0, OD.e)(this, tm)[tm](Vt).subarray(mt, mt + Dt), tt)
```

#### 664. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6037` → after: `L6037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6037) · [Before (L6037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6037)

```diff
-           (0, Zo.b)(this, ao)[ao] = [];
+           (0, OD.e)(this, cD)[cD] = [];
```

#### 665. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6041` → after: `L6041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6041) · [Before (L6041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6041)

```diff
-             throw null === BB || void 0 === BB || BB.resolve("XF"), FB
+             throw null === tt || void 0 === tt || tt.resolve("hE"), Et
```

#### 666. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6043-L6045` → after: `L6043-L6045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6043-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6043-L6045) · [Before (L6043-L6045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6043-L6045)

```diff
-             const BB = (0, Zo.b)(this, ao)[ao];
-             (0, Zo.b)(this, ao)[ao] = null;
-             for (const [IB, ZB] of BB)(0, Zo.b)(this, Do)[Do](IB, ZB)
+             const tt = (0, OD.e)(this, cD)[cD];
+             (0, OD.e)(this, cD)[cD] = null;
+             for (const [et, Vt] of tt)(0, OD.e)(this, xD)[xD](et, Vt)
```

#### 667. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6048-L6049` → after: `L6048-L6049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6048-L6049) · [Before (L6048-L6049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6048-L6049)

```diff
-         if (!(0, Zo.b)(this, mo)[mo]() && !(0, Zo.b)(this, Xo)[Xo]()) return (0, Zo.b)(this, Ko)[Ko](), void(null === BB || void 0 === BB || BB.resolve("XF"));
-         null === BB || void 0 === BB || BB.resolve((0, Zo.b)(this, Eo)[Eo]())
+         if (!(0, OD.e)(this, kD)[kD]() && !(0, OD.e)(this, GD)[GD]()) return (0, OD.e)(this, TD)[TD](), void(null === tt || void 0 === tt || tt.resolve("hE"));
+         null === tt || void 0 === tt || tt.resolve((0, OD.e)(this, pD)[pD]())
```

#### 668. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6052` → after: `L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6052) · [Before (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6052)

```diff
-         (0, Zo.b)(this, Co)[Co] = !0, (0, Zo.b)(this, Ko)[Ko]()
+         (0, OD.e)(this, JD)[JD] = !0, (0, OD.e)(this, TD)[TD]()
```

#### 669. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6057` → after: `L6057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6057) · [Before (L6057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6057)

```diff
-       (0, Zo.b)(this, Do)[Do](zB.Wc.Session, function(BB) {
+       (0, OD.e)(this, xD)[xD](lt.ad.Session, function(tt) {
```

#### 670. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6079` → after: `L6079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6079) · [Before (L6079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6079)

```diff
-       return null !== (BB = null === (IB = (0, Zo.b)(this, Yo)[Yo]) || void 0 === IB ? void 0 : IB.on) && void 0 !== BB && BB
+       return null !== (tt = null === (et = (0, OD.e)(this, vD)[vD]) || void 0 === et ? void 0 : et.on) && void 0 !== tt && tt
```

#### 671. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6083` → after: `L6083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6083) · [Before (L6083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6083)

```diff
-       const BB = (0, Zo.b)(this, yo)[yo];
+       const tt = (0, OD.e)(this, aD)[aD];
```

#### 672. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6088` → after: `L6088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6088) · [Before (L6088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6088)

```diff
-         if (!(0, Zo.b)(this, oG)[oG](ZB)) throw ZB
+         if (!(0, OD.e)(this, qm)[qm](Vt)) throw Vt
```

#### 673. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6090` → after: `L6090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6090) · [Before (L6090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6090)

```diff
-       return IB || (0, Zo.b)(this, Po)[Po].active
+       return et || (0, OD.e)(this, ZD)[ZD].active
```

#### 674. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6093` → after: `L6093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6093) · [Before (L6093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6093)

```diff
-       !(0, Zo.b)(this, Co)[Co] && this.deps.allowed() ? await (0, Zo.b)(this, eo)[eo]() : (0, Zo.b)(this, po)[po] = null
+       !(0, OD.e)(this, JD)[JD] && this.deps.allowed() ? await (0, OD.e)(this, oD)[oD]() : (0, OD.e)(this, SD)[SD] = null
```

#### 675. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6097` → after: `L6097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6097) · [Before (L6097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6097)

```diff
-       return (0, Zo.b)(this, Wo)[Wo] || (0, Zo.b)(this, Co)[Co] ? Promise.resolve(!1) : (0, Zo.b)(this, yo)[yo] ? Promise.resolve(!0) : ((0, Zo.b)(this, so)[so] ??= (0, Zo.b)(this, uo)[uo](), (0, Zo.b)(this, so)[so])
+       return (0, OD.e)(this, bD)[bD] || (0, OD.e)(this, JD)[JD] ? Promise.resolve(!1) : (0, OD.e)(this, aD)[aD] ? Promise.resolve(!0) : ((0, OD.e)(this, uD)[uD] ??= (0, OD.e)(this, rD)[rD](), (0, OD.e)(this, uD)[uD])
```

#### 676. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6102` → after: `L6102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6102) · [Before (L6102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6102)

```diff
-         return BB = await (0, Zo.b)(this, to)[to](), BB
+         return tt = await (0, OD.e)(this, iD)[iD](), tt
```

#### 677. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6104` → after: `L6104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6104) · [Before (L6104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6104)

```diff
-         BB || ((0, Zo.b)(this, po)[po] = null), (0, Zo.b)(this, so)[so] = null
+         tt || ((0, OD.e)(this, SD)[SD] = null), (0, OD.e)(this, uD)[uD] = null
```

#### 678. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6109-L6110` → after: `L6109-L6110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6109-L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6109-L6110) · [Before (L6109-L6110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6109-L6110)

```diff
-       if (!(0, Zo.b)(this, yo)[yo]) return Promise.resolve((0, Zo.b)(this, Wo)[Wo] ? "trapped" : "XF");
-       if (!(0, Zo.b)(this, Qo)[Qo]) {
+       if (!(0, OD.e)(this, aD)[aD]) return Promise.resolve((0, OD.e)(this, bD)[bD] ? "trapped" : "hE");
+       if (!(0, OD.e)(this, CD)[CD]) {
```

#### 679. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6115` → after: `L6115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6115) · [Before (L6115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6115)

```diff
-         (0, Zo.b)(this, Qo)[Qo] = {
+         (0, OD.e)(this, CD)[CD] = {
```

#### 680. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6120` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6120) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6120)

```diff
-       return (0, Zo.b)(this, Qo)[Qo].promise
+       return (0, OD.e)(this, CD)[CD].promise
```

#### 681. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6124-L6125` → after: `L6124-L6125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6124-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6124-L6125) · [Before (L6124-L6125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6124-L6125)

```diff
-       const IB = (0, Zo.b)(this, Qo)[Qo];
-       (0, Zo.b)(this, Qo)[Qo] = null, null === IB || void 0 === IB || IB.resolve(BB)
+       const et = (0, OD.e)(this, CD)[CD];
+       (0, OD.e)(this, CD)[CD] = null, null === et || void 0 === et || et.resolve(tt)
```

#### 682. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6128` → after: `L6128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6128) · [Before (L6128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6128)

```diff
-       let BB = (0, Zo.b)(this, qo)[qo];
+       let tt = (0, OD.e)(this, ND)[ND];
```

#### 683. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6130` → after: `L6130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6130) · [Before (L6130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6130)

```diff
-         const IB = (0, Zo.b)(this, wo)[wo];
+         const et = (0, OD.e)(this, KD)[KD];
```

#### 684. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6134` → after: `L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6134) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6134)

```diff
-           return IB === (0, Zo.b)(this, wo)[wo] && await (0, Zo.b)(this, ZG)[ZG](ZB), !1
+           return et === (0, OD.e)(this, KD)[KD] && await (0, OD.e)(this, em)[em](Vt), !1
```

#### 685. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6136` → after: `L6136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6136) · [Before (L6136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6136)

```diff
-         if (IB !== (0, Zo.b)(this, wo)[wo]) return this.deps.unload(), !1;
+         if (et !== (0, OD.e)(this, KD)[KD]) return this.deps.unload(), !1;
```

#### 686. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6138` → after: `L6138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6138) · [Before (L6138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6138)

```diff
-           JB = (0, Zo.b)(this, JG)[JG]((() => TB.zoB()));
+           qt = (0, OD.e)(this, Om)[Om]((() => Ot.MDt()));
```

#### 687. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6140-L6142` → after: `L6140-L6142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6140-L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6140-L6142) · [Before (L6140-L6142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6140-L6142)

```diff
-         const oB = this.deps.core.FoB();
-         if (JB !== oB) return await (0, Zo.b)(this, ZG)[ZG](new Error(`recorder port version ${JB}, the core's ${oB}`)), !1;
-         (0, Zo.b)(this, qo)[qo] = BB
+         const Dt = this.deps.core.bDt();
+         if (qt !== Dt) return await (0, OD.e)(this, em)[em](new Error(`recorder port version ${qt}, the core's ${Dt}`)), !1;
+         (0, OD.e)(this, ND)[ND] = tt
```

#### 688. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6146-L6149` → after: `L6146-L6149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6146-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6146-L6149) · [Before (L6146-L6149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6146-L6149)

```diff
-         if (!(0, Zo.b)(this, JG)[JG]((() => ((0, Zo.b)(this, yo)[yo] = new IB.NoB, (0, Zo.b)(this, Uo)[Uo] = IB.ooB(), !0)))) return !1;
-         (0, Zo.b)(this, xo)[xo]();
-         const BB = (0, Zo.b)(this, po)[po];
-         return (0, Zo.b)(this, po)[po] = null, BB && (0, Zo.b)(this, Do)[Do](zB.Wc.Control, BB), (0, Zo.b)(this, bo)[bo]()
+         if (!(0, OD.e)(this, Om)[Om]((() => ((0, OD.e)(this, aD)[aD] = new et.JDt, (0, OD.e)(this, MD)[MD] = et.lDt(), !0)))) return !1;
+         (0, OD.e)(this, BD)[BD]();
+         const tt = (0, OD.e)(this, SD)[SD];
+         return (0, OD.e)(this, SD)[SD] = null, tt && (0, OD.e)(this, xD)[xD](lt.ad.Control, tt), (0, OD.e)(this, YD)[YD]()
```

#### 689. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6151` → after: `L6151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6151) · [Before (L6151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6151)

```diff
-         return (0, Zo.b)(this, Ko)[Ko](), await (0, Zo.b)(this, ZG)[ZG](ZB), !1
+         return (0, OD.e)(this, TD)[TD](), await (0, OD.e)(this, em)[em](Vt), !1
```

#### 690. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6156` → after: `L6156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6156) · [Before (L6156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6156)

```diff
-       return this.deps.core.goB(0), 1 === this.deps.core.goB(1) || ((0, Zo.b)(this, Ko)[Ko](), this.deps.failed(No), !1)
+       return this.deps.core.CDt(0), 1 === this.deps.core.CDt(1) || ((0, OD.e)(this, TD)[TD](), this.deps.failed(wD), !1)
```

#### 691. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6160` → after: `L6160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6160) · [Before (L6160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6160)

```diff
-       (0, Zo.b)(this, Yo)[Yo] && (0, Zo.b)(this, Do)[Do](zB.Wc.Prefs, no((0, Zo.b)(this, Yo)[Yo].on, (0, Zo.b)(this, Yo)[Yo].seconds)), (0, Zo.b)(this, io)[io] && (0, Zo.b)(this, Ro)[Ro]((0, Zo.b)(this, io)[io])
+       (0, OD.e)(this, vD)[vD] && (0, OD.e)(this, xD)[xD](lt.ad.Prefs, QD((0, OD.e)(this, vD)[vD].on, (0, OD.e)(this, vD)[vD].seconds)), (0, OD.e)(this, WD)[WD] && (0, OD.e)(this, LD)[LD]((0, OD.e)(this, WD)[WD])
```

#### 692. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6168` → after: `L6168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6168) · [Before (L6168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6168)

```diff
-           return null !== (BB = null === (IB = (0, Zo.b)(this, Yo)[Yo]) || void 0 === IB ? void 0 : IB.seconds) && void 0 !== BB ? BB : 0
+           return null !== (tt = null === (et = (0, OD.e)(this, vD)[vD]) || void 0 === et ? void 0 : et.seconds) && void 0 !== tt ? tt : 0
```

#### 693. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6170-L6173` → after: `L6170-L6173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6170-L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6170-L6173) · [Before (L6170-L6173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6170-L6173)

```diff
-         trapped: () => (0, Zo.b)(this, Wo)[Wo],
-         busy: () => (0, Zo.b)(this, Xo)[Xo](),
-         loadInFlight: () => (0, Zo.b)(this, so)[so],
-         WN: () => (0, Zo.b)(this, Co)[Co],
+         trapped: () => (0, OD.e)(this, bD)[bD],
+         busy: () => (0, OD.e)(this, GD)[GD](),
+         loadInFlight: () => (0, OD.e)(this, uD)[uD],
+         df: () => (0, OD.e)(this, JD)[JD],
```

#### 694. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6175` → after: `L6175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6175) · [Before (L6175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6175)

```diff
-           (0, Zo.b)(this, Ko)[Ko]()
+           (0, OD.e)(this, TD)[TD]()
```

#### 695. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6177` → after: `L6177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6177) · [Before (L6177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6177)

```diff
-         load: () => (0, Zo.b)(this, eo)[eo]()
+         load: () => (0, OD.e)(this, oD)[oD]()
```

#### 696. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6182-L6183` → after: `L6182-L6183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6182-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6182-L6183) · [Before (L6182-L6183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6182-L6183)

```diff
-       (0, Zo.b)(this, ao)[ao] ? (0, Zo.b)(this, ao)[ao].push([BB, IB]): (0, Zo.b)(this, TG)[TG](((ZB, TB) => {
-         const JB = ZB.GoB(IB.length);
+       (0, OD.e)(this, cD)[cD] ? (0, OD.e)(this, cD)[cD].push([tt, et]): (0, OD.e)(this, Vm)[Vm](((Vt, Ot) => {
+         const qt = Vt.EDt(et.length);
```

#### 697. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6189` → after: `L6189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6189) · [Before (L6189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6189)

```diff
-       (0, Zo.b)(this, wo)[wo]++, (0, Zo.b)(this, Ao)[Ao]("XF"), (0, Zo.b)(this, Po)[Po].stop(), this.deps.core.goB(0), (0, Zo.b)(this, Vo)[Vo](), (0, Zo.b)(this, Wo)[Wo] || ((0, Zo.b)(this, qo)[qo] = null, this.deps.unload())
+       (0, OD.e)(this, KD)[KD]++, (0, OD.e)(this, AD)[AD]("hE"), (0, OD.e)(this, ZD)[ZD].stop(), this.deps.core.CDt(0), (0, OD.e)(this, gD)[gD](), (0, OD.e)(this, bD)[bD] || ((0, OD.e)(this, ND)[ND] = null, this.deps.unload())
```

#### 698. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6193` → after: `L6193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6193) · [Before (L6193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6193)

```diff
-       (0, Zo.b)(this, TG)[TG]((BB => {
+       (0, OD.e)(this, Vm)[Vm]((tt => {
```

#### 699. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6195` → after: `L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6195) · [Before (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6195)

```diff
-       })), (0, Zo.b)(this, yo)[yo] = null, (0, Zo.b)(this, Uo)[Uo] = null, (0, Zo.b)(this, jo)[jo] = null
+       })), (0, OD.e)(this, aD)[aD] = null, (0, OD.e)(this, MD)[MD] = null, (0, OD.e)(this, PD)[PD] = null
```

#### 700. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6201` → after: `L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6201) · [Before (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6201)

```diff
-       return (null === (BB = (0, Zo.b)(this, Ho)[Ho]) || void 0 === BB ? void 0 : BB.buffer) !== IB && ((0, Zo.b)(this, Ho)[Ho] = new Uint8Array(IB)), (0, Zo.b)(this, Ho)[Ho]
+       return (null === (tt = (0, OD.e)(this, RD)[RD]) || void 0 === tt ? void 0 : tt.buffer) !== et && ((0, OD.e)(this, RD)[RD] = new Uint8Array(et)), (0, OD.e)(this, RD)[RD]
```

#### 701. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6207` → after: `L6207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6207) · [Before (L6207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6207)

```diff
-       return (null === (BB = (0, Zo.b)(this, Mo)[Mo]) || void 0 === BB ? void 0 : BB.buffer) !== IB && ((0, Zo.b)(this, Mo)[Mo] = new Uint32Array(IB, 0, IB.byteLength >>> 2)), (0, Zo.b)(this, Mo)[Mo]
+       return (null === (tt = (0, OD.e)(this, ID)[ID]) || void 0 === tt ? void 0 : tt.buffer) !== et && ((0, OD.e)(this, ID)[ID] = new Uint32Array(et, 0, et.byteLength >>> 2)), (0, OD.e)(this, ID)[ID]
```

#### 702. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6213` → after: `L6213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6213) · [Before (L6213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6213)

```diff
-       return (null === (IB = (0, Zo.b)(this, jo)[jo]) || void 0 === IB ? void 0 : IB.buffer) !== ZB && ((0, Zo.b)(this, jo)[jo] = new Uint8Array(ZB)), (0, Zo.b)(this, jo)[jo]
+       return (null === (et = (0, OD.e)(this, PD)[PD]) || void 0 === et ? void 0 : et.buffer) !== Vt && ((0, OD.e)(this, PD)[PD] = new Uint8Array(Vt)), (0, OD.e)(this, PD)[PD]
```

#### 703. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6222-L6224` → after: `L6222-L6224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6222-L6224) · [Before (L6222-L6224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6222-L6224)

```diff
-       const IB = (0, Zo.b)(this, yo)[yo],
-         ZB = (0, Zo.b)(this, Uo)[Uo];
-       if (IB && ZB) return (0, Zo.b)(this, JG)[JG]((() => BB(IB, ZB)))
+       const et = (0, OD.e)(this, aD)[aD],
+         Vt = (0, OD.e)(this, MD)[MD];
+       if (et && Vt) return (0, OD.e)(this, Om)[Om]((() => tt(et, Vt)))
```

#### 704. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6228` → after: `L6228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6228) · [Before (L6228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6228)

```diff
-       if (!(0, Zo.b)(this, Wo)[Wo]) try {
+       if (!(0, OD.e)(this, bD)[bD]) try {
```

#### 705. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6231` → after: `L6231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6231) · [Before (L6231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6231)

```diff
-         if (!(0, Zo.b)(this, oG)[oG](IB)) throw IB;
+         if (!(0, OD.e)(this, qm)[qm](et)) throw et;
```

#### 706. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6237` → after: `L6237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6237) · [Before (L6237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6237)

```diff
-       return BB instanceof WebAssembly.RuntimeError && ((0, Zo.b)(this, Wo)[Wo] = !0, (0, Zo.b)(this, yo)[yo] = null, (0, Zo.b)(this, Uo)[Uo] = null, (0, Zo.b)(this, jo)[jo] = null, (0, Zo.b)(this, qo)[qo] = null, (0, Zo.b)(this, po)[po] = null, (0, Zo.b)(this, Ao)[Ao]("trapped") … [truncated]
+       return tt instanceof WebAssembly.RuntimeError && ((0, OD.e)(this, bD)[bD] = !0, (0, OD.e)(this, aD)[aD] = null, (0, OD.e)(this, MD)[MD] = null, (0, OD.e)(this, PD)[PD] = null, (0, OD.e)(this, ND)[ND] = null, (0, OD.e)(this, SD)[SD] = null, (0, OD.e)(this, AD)[AD]("trapped") … [truncated]
```

#### 707. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6239` → after: `L6239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6239) · [Before (L6239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6239)

```diff
-     var HG = ZB(38685);
+     var Rm = Vt(38869);
```

#### 708. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6241` → after: `L6241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6241) · [Before (L6241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6241)

```diff
-       ["skyblock", () => ZB.e(52).then((() => ZB(38681)))]
+       ["skyblock", () => Vt.e(52).then((() => Vt(38860)))]
```

#### 709. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6248` → after: `L6248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6248) · [Before (L6248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6248)

```diff
-         if (!IB) throw new Error(`${BB}'s replay hook module registered no hook`);
+         if (!et) throw new Error(`${tt}'s replay hook module registered no hook`);
```

#### 710. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6328-L6346` → after: `L6328-L6346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6328-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6328-L6346) · [Before (L6328-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6328-L6346)

```diff
-     var RG = (0, To.d)("bindings"),
-       rG = (0, To.d)("module"),
-       mG = (0, To.d)("memory"),
-       XG = (0, To.d)("trapped"),
-       LG = (0, To.d)("generation"),
-       eG = (0, To.d)("loading"),
-       uG = (0, To.d)("lend"),
-       fG = (0, To.d)("givenUp"),
-       lG = (0, To.d)("afterSave"),
-       AG = (0, To.d)("opens"),
-       tG = (0, To.d)("saveAskedAt"),
-       bG = (0, To.d)("unload"),
-       xG = (0, To.d)("dropModule"),
-       EG = (0, To.d)("loadFailed"),
-       DG = (0, To.d)("saveReadsBody"),
-       KG = (0, To.d)("command"),
- ... (3 more removed lines; see GitHub link above)
+     var Lm = (0, qD.b)("bindings"),
+       Fm = (0, qD.b)("module"),
+       km = (0, qD.b)("memory"),
+       Gm = (0, qD.b)("trapped"),
+       zm = (0, qD.b)("generation"),
+       om = (0, qD.b)("loading"),
+       rm = (0, qD.b)("lend"),
+       Um = (0, qD.b)("givenUp"),
+       Am = (0, qD.b)("afterSave"),
+       im = (0, qD.b)("opens"),
+       Ym = (0, qD.b)("saveAskedAt"),
+       Bm = (0, qD.b)("unload"),
+       pm = (0, qD.b)("dropModule"),
+       xm = (0, qD.b)("loadFailed"),
+       Tm = (0, qD.b)("saveReadsBody"),
+       gm = (0, qD.b)("command"),
+ ... (3 more added lines; see GitHub link above)
```

#### 711. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6402` → after: `L6402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6402) · [Before (L6402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6402)

```diff
-         return null !== (0, Zo.b)(this, rG)[rG] && null === (0, Zo.b)(this, lG)[lG]
+         return null !== (0, OD.e)(this, Fm)[Fm] && null === (0, OD.e)(this, Am)[Am]
```

#### 712. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6405-L6406` → after: `L6405-L6406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6405-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6405-L6406) · [Before (L6405-L6406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6405-L6406)

```diff
-         if ((0, Zo.b)(this, XG)[XG]) return zB.jd.ModuleTrap;
-         let ZB = (0, Zo.b)(this, RG)[RG];
+         if ((0, OD.e)(this, Gm)[Gm]) return lt.md.ModuleTrap;
+         let Vt = (0, OD.e)(this, Lm)[Lm];
```

#### 713. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6408-L6409` → after: `L6408-L6409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6408-L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6408-L6409) · [Before (L6408-L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6408-L6409)

```diff
-           const BB = (0, Zo.b)(this, LG)[LG];
-           (0, Zo.b)(this, eG)[eG]++;
+           const tt = (0, OD.e)(this, zm)[zm];
+           (0, OD.e)(this, om)[om]++;
```

#### 714. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6413` → after: `L6413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6413) · [Before (L6413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6413)

```diff
-             return (0, Zo.b)(this, eG)[eG]--, BB !== (0, Zo.b)(this, LG)[LG] ? "stopped" : (0, Zo.b)(this, EG)[EG](JB, IB)
+             return (0, OD.e)(this, om)[om]--, tt !== (0, OD.e)(this, zm)[zm] ? "stopped" : (0, OD.e)(this, xm)[xm](qt, et)
```

#### 715. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6415-L6422` → after: `L6415-L6422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6415-L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6415-L6422) · [Before (L6415-L6422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6415-L6422)

```diff
-           if ((0, Zo.b)(this, eG)[eG]--, BB !== (0, Zo.b)(this, LG)[LG]) return (0, Zo.b)(this, RG)[RG] || 0 !== (0, Zo.b)(this, eG)[eG] || (0, Zo.b)(this, XG)[XG] || this.deps.unload(), "stopped";
-           if ((0, Zo.b)(this, XG)[XG]) return zB.jd.ModuleTrap;
-           const TB = ZB.zoB(),
-             oB = this.deps.core.FoB();
-           if (TB !== oB) return (0, Zo.b)(this, EG)[EG](new Error(`replay port version ${TB}, the core's ${oB}`), IB);
-           (0, Zo.b)(this, RG)[RG] = ZB
-         }
-         if (!(0, Zo.b)(this, rG)[rG]) {
+           if ((0, OD.e)(this, om)[om]--, tt !== (0, OD.e)(this, zm)[zm]) return (0, OD.e)(this, Lm)[Lm] || 0 !== (0, OD.e)(this, om)[om] || (0, OD.e)(this, Gm)[Gm] || this.deps.unload(), "stopped";
+           if ((0, OD.e)(this, Gm)[Gm]) return lt.md.ModuleTrap;
+           const Ot = Vt.MDt(),
+             Dt = this.deps.core.bDt();
+           if (Ot !== Dt) return (0, OD.e)(this, xm)[xm](new Error(`replay port version ${Ot}, the core's ${Dt}`), et);
+           (0, OD.e)(this, Lm)[Lm] = Vt
+         }
+         if (!(0, OD.e)(this, Fm)[Fm]) {
```

#### 716. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6424-L6426` → after: `L6424-L6426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6424-L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6424-L6426) · [Before (L6424-L6426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6424-L6426)

```diff
-           if (!(0, Zo.b)(this, SG)[SG]((() => {
-               (0, Zo.b)(this, rG)[rG] = new BB.qoB, (0, Zo.b)(this, mG)[mG] = BB.yoB()
-             }))) return zB.jd.ModuleTrap
+           if (!(0, OD.e)(this, nm)[nm]((() => {
+               (0, OD.e)(this, Fm)[Fm] = new tt.uDt, (0, OD.e)(this, km)[km] = tt.KDt()
+             }))) return lt.md.ModuleTrap
```

#### 717. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6429-L6430` → after: `L6429-L6430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6429-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6429-L6430) · [Before (L6429-L6430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6429-L6430)

```diff
-         return (0, Zo.b)(this, VG)[VG](((IB, ZB) => {
-           null !== (0, Zo.b)(this, lG)[lG] && IB.step(0, 0);
+         return (0, OD.e)(this, sm)[sm](((et, Vt) => {
+           null !== (0, OD.e)(this, Am)[Am] && et.step(0, 0);
```

#### 718. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6432-L6433` → after: `L6432-L6433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6432-L6433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6432-L6433) · [Before (L6432-L6433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6432-L6433)

```diff
-           0 !== JB && (new Uint8Array(ZB.buffer, JB, BB.length).set(BB), IB.open(), (0, Zo.b)(this, fG)[fG] = (0, Zo.b)(this, uG)[uG], (0, Zo.b)(this, lG)[lG] = null, (0, Zo.b)(this, AG)[AG]++, TB = !0)
-         })) ? TB ? "opening" : zB.jd.TooLarge : zB.jd.ModuleTrap
+           0 !== qt && (new Uint8Array(Vt.buffer, qt, tt.length).set(tt), et.open(), (0, OD.e)(this, Um)[Um] = (0, OD.e)(this, rm)[rm], (0, OD.e)(this, Am)[Am] = null, (0, OD.e)(this, im)[im]++, Ot = !0)
+         })) ? Ot ? "opening" : lt.md.TooLarge : lt.md.ModuleTrap
```

#### 719. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6436-L6438` → after: `L6436-L6438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6436-L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6436-L6438) · [Before (L6436-L6438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6436-L6438)

```diff
-         const IB = (0, Zo.b)(this, rG)[rG],
-           ZB = (0, Zo.b)(this, mG)[mG];
-         if (!IB || !ZB || null !== (0, Zo.b)(this, lG)[lG]) return;
+         const et = (0, OD.e)(this, Fm)[Fm],
+           Vt = (0, OD.e)(this, km)[km];
+         if (!et || !Vt || null !== (0, OD.e)(this, Am)[Am]) return;
```

#### 720. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6441` → after: `L6441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6441) · [Before (L6441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6441)

```diff
-         } = this.deps, JB = TB.UoB(BB);
+         } = this.deps, qt = Ot.hDt(tt);
```

#### 721. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6446` → after: `L6446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6446) · [Before (L6446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6446)

```diff
-           GB = IB.step(oB, JB - oB), vB = IB.koB()
+           mt = et.step(Dt, qt - Dt), dt = et.wDt()
```

#### 722. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6448` → after: `L6448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6448) · [Before (L6448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6448)

```diff
-           return void(0, Zo.b)(this, Bv)[Bv](cB)
+           return void(0, OD.e)(this, td)[td](Ht)
```

#### 723. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6450` → after: `L6450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6450) · [Before (L6450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6450)

```diff
-         const kB = TB.hoB(1, GB);
+         const jt = Ot.aDt(1, mt);
```

#### 724. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6452` → after: `L6452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6452) · [Before (L6452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6452)

```diff
-           const BB = (0, Zo.b)(this, VG)[VG]((BB => {
+           const tt = (0, OD.e)(this, sm)[sm]((tt => {
```

#### 725. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6456` → after: `L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6456) · [Before (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6456)

```diff
-           return (0, Zo.b)(this, DG)[DG] ? (0, Zo.b)(this, lG)[lG] = "drop" : (0, Zo.b)(this, xG)[xG](), void TB.WoB(zB.jd.Port)
+           return (0, OD.e)(this, Tm)[Tm] ? (0, OD.e)(this, Am)[Am] = "drop" : (0, OD.e)(this, pm)[pm](), void Ot.vDt(lt.md.Port)
```

#### 726. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6461` → after: `L6461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6461) · [Before (L6461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6461)

```diff
-         (0, Zo.b)(this, KG)[KG]((BB => {
+         (0, OD.e)(this, gm)[gm]((tt => {
```

#### 727. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6466` → after: `L6466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6466) · [Before (L6466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6466)

```diff
-         (0, Zo.b)(this, KG)[KG]((BB => {
+         (0, OD.e)(this, gm)[gm]((tt => {
```

#### 728. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6472` → after: `L6472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6472) · [Before (L6472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6472)

```diff
-         (0, Zo.b)(this, KG)[KG]((ZB => {
+         (0, OD.e)(this, gm)[gm]((Vt => {
```

#### 729. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6477-L6478` → after: `L6477-L6478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6477-L6478) · [Before (L6477-L6478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6477-L6478)

```diff
-         return (0, Zo.b)(this, KG)[KG]((ZB => {
-           ZB.doB(BB, IB)
+         return (0, OD.e)(this, gm)[gm]((Vt => {
+           Vt.WDt(tt, et)
```

#### 730. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6482-L6483` → after: `L6482-L6483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6482-L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6482-L6483) · [Before (L6482-L6483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6482-L6483)

```diff
-         return (0, Zo.b)(this, KG)[KG]((ZB => {
-           ZB.CoB(BB[0], BB[1], BB[2], IB[0], IB[1], IB[2])
+         return (0, OD.e)(this, gm)[gm]((Vt => {
+           Vt.SDt(tt[0], tt[1], tt[2], et[0], et[1], et[2])
```

#### 731. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6487-L6488` → after: `L6487-L6488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6487-L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6487-L6488) · [Before (L6487-L6488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6487-L6488)

```diff
-         return (0, Zo.b)(this, KG)[KG]((ZB => {
-           ZB.QoB(BB, IB)
+         return (0, OD.e)(this, gm)[gm]((Vt => {
+           Vt.cDt(tt, et)
```

#### 732. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6492-L6493` → after: `L6492-L6493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6492-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6492-L6493) · [Before (L6492-L6493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6492-L6493)

```diff
-         return (0, Zo.b)(this, KG)[KG]((ZB => {
-           ZB.soB(BB, IB)
+         return (0, OD.e)(this, gm)[gm]((Vt => {
+           Vt.RDt(tt, et)
```

#### 733. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6497-L6498` → after: `L6497-L6498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6497-L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6497-L6498) · [Before (L6497-L6498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6497-L6498)

```diff
-         return (0, Zo.b)(this, KG)[KG]((ZB => {
-           ZB.woB(BB, IB)
+         return (0, OD.e)(this, gm)[gm]((Vt => {
+           Vt.IDt(tt, et)
```

#### 734. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6502` → after: `L6502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6502) · [Before (L6502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6502)

```diff
-         return null === (0, Zo.b)(this, uG)[uG] && (0, Zo.b)(this, KG)[KG]((ZB => {
+         return null === (0, OD.e)(this, rm)[rm] && (0, OD.e)(this, gm)[gm]((Vt => {
```

#### 735. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6507-L6508` → after: `L6507-L6508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6507-L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6507-L6508) · [Before (L6507-L6508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6507-L6508)

```diff
-         const BB = (0, Zo.b)(this, tG)[tG];
-         if ((0, Zo.b)(this, tG)[tG] = null, null !== BB && BB !== (0, Zo.b)(this, AG)[AG]) return null;
+         const tt = (0, OD.e)(this, Ym)[Ym];
+         if ((0, OD.e)(this, Ym)[Ym] = null, null !== tt && tt !== (0, OD.e)(this, im)[im]) return null;
```

#### 736. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6511-L6512` → after: `L6511-L6512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6511-L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6511-L6512) · [Before (L6511-L6512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6511-L6512)

```diff
-         if ((0, Zo.b)(this, VG)[VG](((BB, TB) => {
-             IB = BB.save(), 0 !== IB && (ZB = new Uint8Array(TB.buffer, BB.OoB(), BB.YoB()).slice())
+         if ((0, OD.e)(this, sm)[sm](((tt, Ot) => {
+             et = tt.save(), 0 !== et && (Vt = new Uint8Array(Ot.buffer, tt.PDt(), tt.ZDt()).slice())
```

#### 737. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6517` → after: `L6517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6517) · [Before (L6517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6517)

```diff
-           givenUp: () => (0, Zo.b)(this, fG)[fG] === TB,
+           givenUp: () => (0, OD.e)(this, Um)[Um] === Ot,
```

#### 738. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6519` → after: `L6519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6519) · [Before (L6519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6519)

```diff
-             if ((0, Zo.b)(this, uG)[uG] !== TB || !(0, Zo.b)(this, DG)[DG]) return null;
+             if ((0, OD.e)(this, rm)[rm] !== Ot || !(0, OD.e)(this, Tm)[Tm]) return null;
```

#### 739. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6521-L6523` → after: `L6521-L6523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6521-L6523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6521-L6523) · [Before (L6521-L6523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6521-L6523)

```diff
-             return (0, Zo.b)(this, VG)[VG](((TB, JB) => {
-               const oB = TB.ioB();
-               0 !== oB && BB >= 0 && IB >= 0 && BB + IB <= oB && (ZB = new Uint8Array(JB.buffer, TB.poB() + BB, IB))
+             return (0, OD.e)(this, sm)[sm](((Ot, qt) => {
+               const Dt = Ot.LDt();
+               0 !== Dt && tt >= 0 && et >= 0 && tt + et <= Dt && (Vt = new Uint8Array(qt.buffer, Ot.FDt() + tt, et))
```

#### 740. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6527-L6529` → after: `L6527-L6529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6527-L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6527-L6529) · [Before (L6527-L6529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6527-L6529)

```diff
-             if ((0, Zo.b)(this, uG)[uG] !== TB) return;
-             (0, Zo.b)(this, uG)[uG] = null, (0, Zo.b)(this, fG)[fG] = null, (0, Zo.b)(this, VG)[VG]((BB => {
-               BB.aoB()
+             if ((0, OD.e)(this, rm)[rm] !== Ot) return;
+             (0, OD.e)(this, rm)[rm] = null, (0, OD.e)(this, Um)[Um] = null, (0, OD.e)(this, sm)[sm]((tt => {
+               tt.GDt()
```

#### 741. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6531-L6532` → after: `L6531-L6532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6531-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6531-L6532) · [Before (L6531-L6532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6531-L6532)

```diff
-             const BB = (0, Zo.b)(this, lG)[lG];
-             (0, Zo.b)(this, lG)[lG] = null, "unload" === BB ? (0, Zo.b)(this, bG)[bG]() : "drop" === BB && (0, Zo.b)(this, xG)[xG]()
+             const tt = (0, OD.e)(this, Am)[Am];
+             (0, OD.e)(this, Am)[Am] = null, "unload" === tt ? (0, OD.e)(this, Bm)[Bm]() : "drop" === tt && (0, OD.e)(this, pm)[pm]()
```

#### 742. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6535` → after: `L6535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6535) · [Before (L6535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6535)

```diff
-         return (0, Zo.b)(this, uG)[uG] = TB, TB
+         return (0, OD.e)(this, rm)[rm] = Ot, Ot
```

#### 743. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6538` → after: `L6538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6538) · [Before (L6538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6538)

```diff
-         (0, Zo.b)(this, tG)[tG] = (0, Zo.b)(this, AG)[AG]
+         (0, OD.e)(this, Ym)[Ym] = (0, OD.e)(this, im)[im]
```

#### 744. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6541-L6542` → after: `L6541-L6542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6541-L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6541-L6542) · [Before (L6541-L6542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6541-L6542)

```diff
-         (0, Zo.b)(this, KG)[KG]((IB => {
-           IB.HoB(BB)
+         (0, OD.e)(this, gm)[gm]((et => {
+           et.zDt(tt)
```

#### 745. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6546-L6547` → after: `L6546-L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6546-L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6546-L6547) · [Before (L6546-L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6546-L6547)

```diff
-         (0, Zo.b)(this, KG)[KG]((IB => {
-           IB.MoB(BB)
+         (0, OD.e)(this, gm)[gm]((et => {
+           et.oDt(tt)
```

#### 746. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6551` → after: `L6551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6551) · [Before (L6551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6551)

```diff
-         (0, Zo.b)(this, KG)[KG]((BB => {
+         (0, OD.e)(this, gm)[gm]((tt => {
```

#### 747. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6556` → after: `L6556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6556) · [Before (L6556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6556)

```diff
-         (0, Zo.b)(this, LG)[LG]++, (0, Zo.b)(this, DG)[DG] && ((0, Zo.b)(this, VG)[VG]((BB => {
+         (0, OD.e)(this, zm)[zm]++, (0, OD.e)(this, Tm)[Tm] && ((0, OD.e)(this, sm)[sm]((tt => {
```

#### 748. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6558` → after: `L6558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6558) · [Before (L6558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6558)

```diff
-         })), (0, Zo.b)(this, rG)[rG]) ? (0, Zo.b)(this, lG)[lG] = "unload" : (0, Zo.b)(this, bG)[bG]()
+         })), (0, OD.e)(this, Fm)[Fm]) ? (0, OD.e)(this, Am)[Am] = "unload" : (0, OD.e)(this, Bm)[Bm]()
```

#### 749. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6563` → after: `L6563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6563) · [Before (L6563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6563)

```diff
-       (0, Zo.b)(this, xG)[xG](), (0, Zo.b)(this, XG)[XG] || ((0, Zo.b)(this, RG)[RG] = null, this.deps.unload())
+       (0, OD.e)(this, pm)[pm](), (0, OD.e)(this, Gm)[Gm] || ((0, OD.e)(this, Lm)[Lm] = null, this.deps.unload())
```

#### 750. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6567` → after: `L6567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6567) · [Before (L6567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6567)

```diff
-       (0, Zo.b)(this, VG)[VG]((BB => {
+       (0, OD.e)(this, sm)[sm]((tt => {
```

#### 751. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6569` → after: `L6569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6569) · [Before (L6569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6569)

```diff
-       })), (0, Zo.b)(this, rG)[rG] = null, (0, Zo.b)(this, mG)[mG] = null
+       })), (0, OD.e)(this, Fm)[Fm] = null, (0, OD.e)(this, km)[km] = null
```

#### 752. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6574` → after: `L6574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6574) · [Before (L6574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6574)

```diff
-       }) ? "reloading" : zB.jd.ModuleLoad
+       }) ? "reloading" : lt.md.ModuleLoad
```

#### 753. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6578` → after: `L6578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6578) · [Before (L6578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6578)

```diff
-       return null !== (0, Zo.b)(this, uG)[uG] && (0, Zo.b)(this, fG)[fG] !== (0, Zo.b)(this, uG)[uG]
+       return null !== (0, OD.e)(this, rm)[rm] && (0, OD.e)(this, Um)[Um] !== (0, OD.e)(this, rm)[rm]
```

#### 754. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6582` → after: `L6582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6582) · [Before (L6582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6582)

```diff
-       return null === (0, Zo.b)(this, lG)[lG] && (0, Zo.b)(this, VG)[VG](BB)
+       return null === (0, OD.e)(this, Am)[Am] && (0, OD.e)(this, sm)[sm](tt)
```

#### 755. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6586-L6588` → after: `L6586-L6588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6586-L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6586-L6588) · [Before (L6586-L6588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6586-L6588)

```diff
-       const IB = (0, Zo.b)(this, rG)[rG],
-         ZB = (0, Zo.b)(this, mG)[mG];
-       return !(!IB || !ZB) && (0, Zo.b)(this, SG)[SG]((() => {
+       const et = (0, OD.e)(this, Fm)[Fm],
+         Vt = (0, OD.e)(this, km)[km];
+       return !(!et || !Vt) && (0, OD.e)(this, nm)[nm]((() => {
```

#### 756. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6594` → after: `L6594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6594) · [Before (L6594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6594)

```diff
-       if ((0, Zo.b)(this, XG)[XG]) return !1;
+       if ((0, OD.e)(this, Gm)[Gm]) return !1;
```

#### 757. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6598` → after: `L6598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6598) · [Before (L6598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6598)

```diff
-         return (0, Zo.b)(this, Bv)[Bv](IB), !1
+         return (0, OD.e)(this, td)[td](et), !1
```

#### 758. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6604` → after: `L6604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6604) · [Before (L6604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6604)

```diff
-       (0, Zo.b)(this, XG)[XG] = !0, (0, Zo.b)(this, rG)[rG] = null, (0, Zo.b)(this, mG)[mG] = null, (0, Zo.b)(this, RG)[RG] = null, this.deps.crash(this.deps.markTrapped(BB)), this.deps.core.WoB(zB.jd.ModuleTrap)
+       (0, OD.e)(this, Gm)[Gm] = !0, (0, OD.e)(this, Fm)[Fm] = null, (0, OD.e)(this, km)[km] = null, (0, OD.e)(this, Lm)[Lm] = null, this.deps.crash(this.deps.markTrapped(tt)), this.deps.core.vDt(lt.md.ModuleTrap)
```

#### 759. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6606-L6607` → after: `L6606-L6607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6606-L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6606-L6607) · [Before (L6606-L6607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6606-L6607)

```diff
-     var nv = ZB(6643),
-       hv = ZB(41049);
+     var Xd = Vt(6671),
+       Qd = Vt(41219);
```

#### 760. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6618` → after: `L6618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6618) · [Before (L6618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6618)

```diff
-         case zB.rd.FlyingText: {
+         case lt.ud.FlyingText: {
```

#### 761. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6623` → after: `L6623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6623) · [Before (L6623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6623)

```diff
-             return void console.warn(`${zv} a replay's flying text isn't JSON`, cB)
+             return void console.warn(`${ld} a replay's flying text isn't JSON`, Ht)
```

#### 762. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6625` → after: `L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6625) · [Before (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6625)

```diff
-           GB.l.Gq("forceFlyingMiddleMessage", {
+           mt.j.sw("forceFlyingMiddleMessage", {
```

#### 763. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6627` → after: `L6627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6627) · [Before (L6627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6627)

```diff
-             Po: BB.Po,
+             oD: tt.oD,
```

#### 764. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6629` → after: `L6629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6629) · [Before (L6629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6629)

```diff
-             Ro: BB.Ro
+             rD: tt.rD
```

#### 765. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6633-L6634` → after: `L6633-L6634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6633-L6634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6633-L6634) · [Before (L6633-L6634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6633-L6634)

```diff
-         case zB.rd.PlayerKilled:
-           (0, hv.c)({
+         case lt.ud.PlayerKilled:
+           (0, Qd.e)({
```

#### 766. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6637` → after: `L6637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6637) · [Before (L6637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6637)

```diff
-               deadEId: null !== (IB = Nv(BB.dead)) && void 0 !== IB ? IB : "",
+               deadEId: null !== (et = fd(tt.dead)) && void 0 !== et ? et : "",
```

#### 767. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6639` → after: `L6639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6639) · [Before (L6639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6639)

```diff
-               withItem: null !== (ZB = BB.withItem) && void 0 !== ZB ? ZB : "",
+               withItem: null !== (Vt = tt.withItem) && void 0 !== Vt ? Vt : "",
```

#### 768. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6644-L6645` → after: `L6644-L6645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6644-L6645) · [Before (L6644-L6645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6644-L6645)

```diff
-         case zB.rd.Killfeed:
-           (0, hv.c)({
+         case lt.ud.Killfeed:
+           (0, Qd.e)({
```

#### 769. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6650-L6651` → after: `L6650-L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6650-L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6650-L6651) · [Before (L6650-L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6650-L6651)

```diff
-                 name: null !== (TB = BB.killerName) && void 0 !== TB ? TB : void 0,
-                 colour: null !== (JB = BB.killerColour) && void 0 !== JB ? JB : void 0
+                 name: null !== (Ot = tt.killerName) && void 0 !== Ot ? Ot : void 0,
+                 colour: null !== (qt = tt.killerColour) && void 0 !== qt ? qt : void 0
```

#### 770. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6655-L6656` → after: `L6655-L6656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6655-L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6655-L6656) · [Before (L6655-L6656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6655-L6656)

```diff
-                 name: null !== (oB = BB.victimName) && void 0 !== oB ? oB : void 0,
-                 colour: null !== (vB = BB.victimColour) && void 0 !== vB ? vB : void 0
+                 name: null !== (Dt = tt.victimName) && void 0 !== Dt ? Dt : void 0,
+                 colour: null !== (dt = tt.victimColour) && void 0 !== dt ? dt : void 0
```

#### 771. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6658` → after: `L6658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6658) · [Before (L6658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6658)

```diff
-               withItem: null !== (kB = BB.withItem) && void 0 !== kB ? kB : ""
+               withItem: null !== (jt = tt.withItem) && void 0 !== jt ? jt : ""
```

#### 772. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6668` → after: `L6668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6668) · [Before (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6668)

```diff
-       return Number.isInteger(IB) && IB > HJ && IB <= 2147483647 ? IB : null
+       return Number.isInteger(et) && et > Iq && et <= 2147483647 ? et : null
```

#### 773. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6680` → after: `L6680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6680) · [Before (L6680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6680)

```diff
-       const IB = (0, uJ.l)(bZ.nc.PlayerKilled, (IB => {
+       const et = (0, Uq.j)(pV.gc.PlayerKilled, (et => {
```

#### 774. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6682` → after: `L6682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6682) · [Before (L6682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6682)

```diff
-           const JB = (0, eJ.f)(IB);
+           const qt = (0, rq.k)(et);
```

#### 775. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6690` → after: `L6690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6690) · [Before (L6690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6690)

```diff
-           BB.recordPlayerKilled(null !== (ZB = yv(oB)) && void 0 !== ZB ? ZB : HJ, null !== (TB = yv(GB)) && void 0 !== TB ? TB : HJ, "number" === typeof kB ? kB : 0, "string" === typeof vB ? vB : "")
+           tt.recordPlayerKilled(null !== (Vt = Nd(Dt)) && void 0 !== Vt ? Vt : Iq, null !== (Ot = Nd(mt)) && void 0 !== Ot ? Ot : Iq, "number" === typeof jt ? jt : 0, "string" === typeof dt ? dt : "")
```

#### 776. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6692-L6693` → after: `L6692-L6693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6692-L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6692-L6693) · [Before (L6692-L6693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6692-L6693)

```diff
-         ZB = (0, uJ.l)(bZ.nc.CustomKillfeed, (IB => {
-           const ZB = (0, eJ.f)(IB);
+         Vt = (0, Uq.j)(pV.gc.CustomKillfeed, (et => {
+           const Vt = (0, rq.k)(et);
```

#### 777. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6700` → after: `L6700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6700) · [Before (L6700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6700)

```diff
-           BB.recordKillfeed(Uv(TB), Uv(JB), "string" === typeof oB ? oB : null)
+           tt.recordKillfeed(Md(Ot), Md(qt), "string" === typeof Dt ? Dt : null)
```

#### 778. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6709` → after: `L6709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6709) · [Before (L6709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6709)

```diff
-       return void 0 === BB || null === BB ? null : null !== (IB = JSON.stringify(BB)) && void 0 !== IB ? IB : null
+       return void 0 === tt || null === tt ? null : null !== (et = JSON.stringify(tt)) && void 0 !== et ? et : null
```

#### 779. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6718` → after: `L6718`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6718) · [Before (L6718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6718)

```diff
-         } = TB.d.get("clientEscMenuOptions"), oB = `${ZB}:${JB}`;
+         } = Ot.b.get("clientEscMenuOptions"), Dt = `${Vt}:${qt}`;
```

#### 780. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6721` → after: `L6721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6721) · [Before (L6721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6721)

```diff
-       return ZB(), (0, GB.p)("appManagerUpdated|clientEscMenuOptions", ZB)
+       return Vt(), (0, mt.n)("appManagerUpdated|clientEscMenuOptions", Vt)
```

#### 781. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6728` → after: `L6728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6728) · [Before (L6728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6728)

```diff
-         return BB.isStopped ? ZB : IB(...arguments)
+         return tt.isStopped ? Vt : et(...arguments)
```

#### 782. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6732` → after: `L6732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6732) · [Before (L6732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6732)

```diff
-       open: () => Promise.reject(new Error(CJ.b.coreStopped.text)),
+       open: () => Promise.reject(new Error(Cq.d.coreStopped.text)),
```

#### 783. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6740` → after: `L6740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6740) · [Before (L6740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6740)

```diff
-       return ZB.e(65).then((() => ZB(61495)))
+       return Vt.e(65).then((() => Vt(61703)))
```

#### 784. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6744` → after: `L6744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6744) · [Before (L6744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6744)

```diff
-       (0, CJ.d)({
+       (0, Cq.f)({
```

#### 785. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6756` → after: `L6756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6756) · [Before (L6756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6756)

```diff
-         } = BB, oB = () => BB.memory().buffer, GB = () => IB.isStopped ? null : IB.rings.cmd, vB = wv(IB, ((BB, IB) => JB.hoB(BB, IB)), 0), kB = () => JB.FoB();
+         } = tt, Dt = () => tt.memory().buffer, mt = () => et.isStopped ? null : et.rings.cmd, dt = hd(et, ((tt, et) => qt.aDt(tt, et)), 0), jt = () => qt.bDt();
```

#### 786. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6760-L6764` → after: `L6760-L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6760-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6760-L6764) · [Before (L6760-L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6760-L6764)

```diff
-             UoB: wv(IB, (BB => JB.UoB(BB)), -1),
-             hoB: vB,
-             FoB: kB,
-             WoB: wv(IB, (BB => {
-               JB.WoB(BB)
+             hDt: hd(et, (tt => qt.hDt(tt)), -1),
+             aDt: dt,
+             bDt: jt,
+             vDt: hd(et, (tt => {
+               qt.vDt(tt)
```

#### 787. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6768` → after: `L6768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6768) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6768) · [Before (L6768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6768)

```diff
-           load: async () => (cB = await ZB.e(66).then((() => ZB(61507))), cB.loadReplayModule()),
+           load: async () => (Ht = await Vt.e(66).then((() => Vt(61715))), Ht.loadReplayModule()),
```

#### 788. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6782-L6785` → after: `L6782-L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6782-L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6782-L6785) · [Before (L6782-L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6782-L6785)

```diff
-             goB: wv(IB, (BB => JB.goB(BB)), 0),
-             voB: wv(IB, (BB => JB.voB(BB)), 0),
-             hoB: vB,
-             FoB: kB
+             CDt: hd(et, (tt => qt.CDt(tt)), 0),
+             fDt: hd(et, (tt => qt.fDt(tt)), 0),
+             aDt: dt,
+             bDt: jt
```

#### 789. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6795` → after: `L6795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6795) · [Before (L6795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6795)

```diff
-               console.warn(`${qv} the recorder module didn't prefetch, so a save loads it:`, BB)
+               console.warn(`${yd} the recorder module didn't prefetch, so a save loads it:`, tt)
```

#### 790. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6805` → after: `L6805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6805) · [Before (L6805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6805)

```diff
-             return null !== (BB = null === (IB = nB) || void 0 === IB ? void 0 : IB.recorderMemoryBytes()) && void 0 !== BB ? BB : 0
+             return null !== (tt = null === (et = Xt) || void 0 === et ? void 0 : et.recorderMemoryBytes()) && void 0 !== tt ? tt : 0
```

#### 791. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6822-L6824` → after: `L6822-L6824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6822-L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6822-L6824) · [Before (L6822-L6824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6822-L6824)

```diff
-             VJB: wv(IB, (BB => JB.VJB(BB)), 0),
-             BoB: wv(IB, (() => {
-               JB.BoB()
+             DDt: hd(et, (tt => qt.DDt(tt)), 0),
+             dDt: hd(et, (() => {
+               qt.dDt()
```

#### 792. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6826-L6827` → after: `L6826-L6827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6826-L6827) · [Before (L6826-L6827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6826-L6827)

```diff
-             Rq: wv(IB, (() => JB.Rq()), 0),
-             SJB: wv(IB, (() => JB.SJB()), 0)
+             ky: hd(et, (() => qt.ky()), 0),
+             mDt: hd(et, (() => qt.mDt()), 0)
```

#### 793. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6840` → after: `L6840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6840) · [Before (L6840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6840)

```diff
-             console.warn(`${qv} the recorded game's replay hooks:`, BB)
+             console.warn(`${yd} the recorded game's replay hooks:`, tt)
```

#### 794. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6849` → after: `L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6849) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6849)

```diff
-           notify: CJ.d,
+           notify: Cq.f,
```

#### 795. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6852` → after: `L6852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6852) · [Before (L6852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6852)

```diff
-             null === (BB = (0, sJ.f)()) || void 0 === BB || BB.recorderChanged()
+             null === (tt = (0, Kq.g)()) || void 0 === tt || tt.recorderChanged()
```

#### 796. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6856` → after: `L6856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6856) · [Before (L6856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6856)

```diff
-             null === (BB = (0, sJ.f)()) || void 0 === BB || BB.viewerChanged()
+             null === (tt = (0, Kq.g)()) || void 0 === tt || tt.viewerChanged()
```

#### 797. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6861` → after: `L6861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6861) · [Before (L6861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6861)

```diff
-               const JB = bZ.pb[IB.key];
+               const qt = pV.ob[et.key];
```

#### 798. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6863-L6864` → after: `L6863-L6864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6863-L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6863-L6864) · [Before (L6863-L6864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6863-L6864)

```diff
-               let oB = null !== (ZB = IB.value) && void 0 !== ZB ? ZB : JSON.parse(JSON.stringify(null !== (TB = nv.b[JB]) && void 0 !== TB ? TB : null));
-               if (null !== IB.value && IB.key < bZ.Vb.Environment && "string" === typeof oB) try {
+               let Dt = null !== (Vt = et.value) && void 0 !== Vt ? Vt : JSON.parse(JSON.stringify(null !== (Ot = Xd.e[qt]) && void 0 !== Ot ? Ot : null));
+               if (null !== et.value && et.key < pV.Ob.Environment && "string" === typeof Dt) try {
```

#### 799. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6867` → after: `L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6867) · [Before (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6867)

```diff
-                 return void console.warn(`${zv} a replay's ${JB} isn't JSON`, GB)
+                 return void console.warn(`${ld} a replay's ${qt} isn't JSON`, mt)
```

#### 800. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6876` → after: `L6876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6876) · [Before (L6876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6876)

```diff
-             this.entityHooks.opened((0, YB.Vb)(IB)), BB.replayShaderPack(IB)
+             this.entityHooks.opened((0, Wt.bc)(et)), tt.replayShaderPack(et)
```

#### 801. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6880` → after: `L6880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6880) · [Before (L6880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6880)

```diff
-             return null !== (BB = null === (ZB = IB.lastHeader) || void 0 === ZB ? void 0 : ZB.renderPending) && void 0 !== BB ? BB : 0
+             return null !== (tt = null === (Vt = et.lastHeader) || void 0 === Vt ? void 0 : Vt.renderPending) && void 0 !== tt ? tt : 0
```

#### 802. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6882` → after: `L6882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6882) · [Before (L6882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6882)

```diff
-           viewerOpen: QJ.d,
+           viewerOpen: uq.e,
```

#### 803. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6884` → after: `L6884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6884) · [Before (L6884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6884)

```diff
-             (0, WJ.j)(BB)
+             (0, bq.f)(tt)
```

#### 804. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6887` → after: `L6887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6887) · [Before (L6887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6887)

```diff
-         this.runtime = zB, TB.replay = zB.sink, (0, sJ.p)(zB);
+         this.runtime = lt, Ot.replay = lt.sink, (0, Kq.q)(lt);
```

#### 805. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6897` → after: `L6897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6897) · [Before (L6897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6897)

```diff
-           const ZB = bZ.pb,
+           const Vt = pV.ob,
```

#### 806. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6918` → after: `L6918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6918) · [Before (L6918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6918)

```diff
-         })), (0, TT.y)(((BB, IB) => {
+         })), (0, qO.t)(((tt, et) => {
```

#### 807. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6931` → after: `L6931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6931) · [Before (L6931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6931)

```diff
-         }, Wv(zB.recorder), (0, fJ.e)((BB => {
+         }, bd(lt.recorder), (0, Aq.i)((tt => {
```

#### 808. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6937` → after: `L6937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6937) · [Before (L6937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6937)

```diff
-           ZB && (null === (TB = (0, sJ.f)()) || void 0 === TB || TB.keyDown(IB))
+           Vt && (null === (Ot = (0, Kq.g)()) || void 0 === Ot || Ot.keyDown(et))
```

#### 809. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6941` → after: `L6941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6941) · [Before (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6941)

```diff
-           return !0 === (null === BB || void 0 === BB ? void 0 : BB.isOpen) ? BB : null
+           return !0 === (null === tt || void 0 === tt ? void 0 : tt.isOpen) ? tt : null
```

#### 810. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6943` → after: `L6943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6943) · [Before (L6943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6943)

```diff
-         (0, dJ.g)({
+         (0, Jq.e)({
```

#### 811. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6947` → after: `L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6947) · [Before (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6947)

```diff
-             return null !== (BB = null === (IB = NB()) || void 0 === IB ? void 0 : IB.id) && void 0 !== BB ? BB : null
+             return null !== (tt = null === (et = ft()) || void 0 === et ? void 0 : et.id) && void 0 !== tt ? tt : null
```

#### 812. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6951` → after: `L6951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6951) · [Before (L6951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6951)

```diff
-             return null !== (BB = null === (IB = NB()) || void 0 === IB ? void 0 : IB.saveRefusal) && void 0 !== BB ? BB : null
+             return null !== (tt = null === (et = ft()) || void 0 === et ? void 0 : et.saveRefusal) && void 0 !== tt ? tt : null
```

#### 813. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6955` → after: `L6955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6955) · [Before (L6955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6955)

```diff
-             return null !== (BB = null === (IB = NB()) || void 0 === IB ? void 0 : IB.save()) && void 0 !== BB ? BB : Promise.resolve(null)
+             return null !== (tt = null === (et = ft()) || void 0 === et ? void 0 : et.save()) && void 0 !== tt ? tt : Promise.resolve(null)
```

#### 814. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6959` → after: `L6959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6959) · [Before (L6959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6959)

```diff
-             return null !== (BB = null === (IB = zB.currentViewer) || void 0 === IB ? void 0 : IB.fileHandle) && void 0 !== BB ? BB : null
+             return null !== (tt = null === (et = lt.currentViewer) || void 0 === et ? void 0 : et.fileHandle) && void 0 !== tt ? tt : null
```

#### 815. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6969` → after: `L6969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6969) · [Before (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6969)

```diff
-           if (BB.phase === zB.G.Activated) {
+           if (tt.phase === lt.H.Activated) {
```

#### 816. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6973` → after: `L6973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6973) · [Before (L6973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6973)

```diff
-               lobbyType: (0, iB.o)(IB.lobbyName),
+               lobbyType: (0, St.u)(et.lobbyName),
```

#### 817. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6977` → after: `L6977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6977) · [Before (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6977)

```diff
-           } else BB.phase !== zB.G.Left && BB.phase !== zB.G.Closed || BB.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
+           } else tt.phase !== lt.H.Left && tt.phase !== lt.H.Closed || tt.conn !== this.activeConn || (this.activeConn = 0, this.runtime.recorder.closed())
```

#### 818. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6983` → after: `L6983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6983) · [Before (L6983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6983)

```diff
-           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, sJ.k)() === this.runtime && (0, sJ.p)(null), (0, sJ.h)() === this.freecam && (0, sJ.o)(null), (0, dJ.g)(Ov), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
+           this.runtime.end(), this.entityHooks.ended(), this.replay.stop(), this.recorder.dispose(), (0, Kq.l)() === this.runtime && (0, Kq.q)(null), (0, Kq.h)() === this.freecam && (0, Kq.o)(null), (0, Jq.e)(vd), null !== this.bench && window.wasmReplayBench === this.bench && (w … [truncated]
```

#### 819. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6990-L6991` → after: `L6990-L6991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6990-L6991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6990-L6991) · [Before (L6990-L6991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6990-L6991)

```diff
-         if (ZB.isStopped) throw new Error(CJ.b.coreStopped.text);
-         if (BB.byteLength > 67108864) throw new Error(CJ.b.cantOpen.text);
+         if (Vt.isStopped) throw new Error(Cq.d.coreStopped.text);
+         if (tt.byteLength > 67108864) throw new Error(Cq.d.cantOpen.text);
```

#### 820. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6996` → after: `L6996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6996) · [Before (L6996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6996)

```diff
-             return IB.inPlayback || (0, TT.H)().leaveGame(null), IB
+             return et.inPlayback || (0, qO.C)().leaveGame(null), et
```

#### 821. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L6999` → after: `L6999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR6999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6999) · [Before (L6999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L6999)

```diff
-           throw console.warn(`${qv} the replay viewer didn't load`, JB), new Error(CJ.b.viewerLoadFailed.text)
+           throw console.warn(`${yd} the replay viewer didn't load`, qt), new Error(Cq.d.viewerLoadFailed.text)
```

#### 822. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7001` → after: `L7001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7001) · [Before (L7001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7001)

```diff
-         if (ZB.isStopped) throw new Error(CJ.b.coreStopped.text);
+         if (Vt.isStopped) throw new Error(Cq.d.coreStopped.text);
```

#### 823. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7005` → after: `L7005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7005) · [Before (L7005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7005)

```diff
-     var av = ZB(2029);
+     var Rd = Vt(2043);
```

#### 824. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7013` → after: `L7013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7013) · [Before (L7013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7013)

```diff
-           aux: BB.reset ? zB.dc.ResetFirst : 0,
+           aux: tt.reset ? lt.nc.ResetFirst : 0,
```

#### 825. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7017` → after: `L7017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7017) · [Before (L7017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7017)

```diff
-       BB.queueOptions(ZB, TB) && (IB.reset && av.c.reset(), av.c.apply(IB.changes))
+       tt.queueOptions(Vt, Ot) && (et.reset && Rd.b.reset(), Rd.b.apply(et.changes))
```

#### 826. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7090-L7094` → after: `L7090-L7094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7090-L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7090-L7094) · [Before (L7090-L7094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7090-L7094)

```diff
-     var Xv = ZB(42585),
-       Lv = ZB(42588),
-       ev = ZB(40971),
-       uv = ZB(41023),
-       fv = ZB(3043);
+     var zd = Vt(42838),
+       od = Vt(42845),
+       rd = Vt(41141),
+       Ud = Vt(41180),
+       Ad = Vt(2965);
```

#### 827. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7098` → after: `L7098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7098) · [Before (L7098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7098)

```diff
-         this.host = BB, this.sets = new Map, this.table = [], this.generation = 0, this.WN = !1
+         this.host = tt, this.sets = new Map, this.table = [], this.generation = 0, this.df = !1
```

#### 828. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7102` → after: `L7102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7102) · [Before (L7102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7102)

```diff
-           if (BB.byteLength !== zB.xd) return null;
+           if (tt.byteLength !== lt.Bd) return null;
```

#### 829. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7109` → after: `L7109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7109) · [Before (L7109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7109)

```diff
-         IB && !this.WN && (IB.release !== zB.zd && this.release(IB.release), IB.want !== zB.zd && this.want(IB.want))
+         et && !this.df && (et.release !== lt.Cd && this.release(et.release), et.want !== lt.Cd && this.want(et.want))
```

#### 830. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7112` → after: `L7112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7112) · [Before (L7112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7112)

```diff
-         if (!this.WN) {
+         if (!this.df) {
```

#### 831. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7118-L7119` → after: `L7118-L7119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7118-L7119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7118-L7119) · [Before (L7118-L7119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7118-L7119)

```diff
-         if (this.WN) return;
-         this.WN = !0, this.generation++, this.table = [];
+         if (this.df) return;
+         this.df = !0, this.generation++, this.table = [];
```

#### 832. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7125` → after: `L7125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7125) · [Before (L7125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7125)

```diff
-             this.host.dTB(BB)
+             this.host.WOt(tt)
```

#### 833. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7142` → after: `L7142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7142) · [Before (L7142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7142)

```diff
-         if (!ZB || 1 !== ZB.urls.length && ZB.urls.length !== bZ.gc.CubeFaces) return this.host.sendReady(xv(BB)), void this.host.onLoadFailed(BB, "", new Error(`no image set ${BB}`));
+         if (!Vt || 1 !== Vt.urls.length && Vt.urls.length !== pV.ec.CubeFaces) return this.host.sendReady(Td(tt)), void this.host.onLoadFailed(tt, "", new Error(`no image set ${tt}`));
```

#### 834. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7160` → after: `L7160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7160) · [Before (L7160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7160)

```diff
-           if (!kB || !ZB.wanted) return this.WN ? void this.releaseAfterDispose(vB.map(tv)) : (this.releaseAll(vB.map(tv)), void(kB && this.sets.delete(BB)));
+           if (!jt || !Vt.wanted) return this.df ? void this.releaseAfterDispose(dt.map(pd)) : (this.releaseAll(dt.map(pd)), void(jt && this.sets.delete(tt)));
```

#### 835. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7167` → after: `L7167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7167) · [Before (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7167)

```diff
-         const [JB] = TB, oB = [JB.width, JB.height], GB = TB.every((BB => BB.width === oB[0] && BB.height === oB[1])), vB = IB.urls.length === bZ.gc.CubeFaces;
+         const [qt] = Ot, Dt = [qt.width, qt.height], mt = Ot.every((tt => tt.width === Dt[0] && tt.height === Dt[1])), dt = et.urls.length === pV.ec.CubeFaces;
```

#### 836. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7170-L7171` → after: `L7170-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7170-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7170-L7171) · [Before (L7170-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7170-L7171)

```diff
-           const ZB = TB.map((BB => `${BB.width}x${BB.height}`));
-           return void this.host.onLoadFailed(BB, IB.urls[0], new Error(`set ${BB}'s images can't make its texture: ${ZB.join(", ")}`))
+           const Vt = Ot.map((tt => `${tt.width}x${tt.height}`));
+           return void this.host.onLoadFailed(tt, et.urls[0], new Error(`set ${tt}'s images can't make its texture: ${Vt.join(", ")}`))
```

#### 837. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7187` → after: `L7187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7187) · [Before (L7187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7187)

```diff
-         for (const IB of BB) this.host.dTB(IB)
+         for (const et of tt) this.host.WOt(et)
```

#### 838. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7191` → after: `L7191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7191) · [Before (L7191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7191)

```diff
-           this.host.dTB(IB)
+           this.host.WOt(et)
```

#### 839. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7201` → after: `L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7201) · [Before (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7201)

```diff
-       const TB = new Uint8Array(bZ.gc.SkyImagesReadyBytes),
+       const Ot = new Uint8Array(pV.ec.SkyImagesReadyBytes),
```

#### 840. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7203` → after: `L7203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7203) · [Before (L7203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7203)

```diff
-       return JB.setUint16(0, BB, !0), JB.setUint16(2, IB.length, !0), JB.setUint16(4, ZB[0], !0), JB.setUint16(6, ZB[1], !0), IB.slice(0, bZ.gc.CubeFaces).forEach(((BB, IB) => {
+       return qt.setUint16(0, tt, !0), qt.setUint16(2, et.length, !0), qt.setUint16(4, Vt[0], !0), qt.setUint16(6, Vt[1], !0), et.slice(0, pV.ec.CubeFaces).forEach(((tt, et) => {
```

#### 841. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7209` → after: `L7209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7209) · [Before (L7209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7209)

```diff
-       const IB = new Uint8Array(bZ.gc.SkyImagesReadyBytes),
+       const et = new Uint8Array(pV.ec.SkyImagesReadyBytes),
```

#### 842. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7211` → after: `L7211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7211) · [Before (L7211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7211)

```diff
-       return ZB.setUint16(0, BB, !0), ZB.setUint16(2, bZ.gc.Failed, !0), IB
+       return Vt.setUint16(0, tt, !0), Vt.setUint16(2, pV.ec.Failed, !0), et
```

#### 843. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7217` → after: `L7217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7217) · [Before (L7217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7217)

```diff
-         ZB = await (0, fv.K)(BB)
+         Vt = await (0, Ad.I)(tt)
```

#### 844. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7219` → after: `L7219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7219) · [Before (L7219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7219)

```diff
-         throw new ev.c("fetch", BB, {
+         throw new rd.b("fetch", tt, {
```

#### 845. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7252` → after: `L7252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7252) · [Before (L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7252)

```diff
-         throw new ev.c("decode", BB, {
+         throw new rd.b("decode", tt, {
```

#### 846. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7257` → after: `L7257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7257) · [Before (L7257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7257)

```diff
-         id: (0, ev.o)(JB),
+         id: (0, rd.n)(qt),
```

#### 847. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7262-L7266` → after: `L7262-L7266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7262-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7262-L7266) · [Before (L7262-L7266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7262-L7266)

```diff
-     var Kv = ZB(2236),
-       Vv = ZB(34011),
-       Sv = ZB(39288);
-     const Bk = Kv.h.length,
-       Ik = new Set([...Kv.h, "earth"]);
+     var nd = Vt(2219),
+       tj = Vt(34207),
+       ej = Vt(39428);
+     const Vj = nd.f.length,
+       Oj = new Set([...nd.f, "earth"]);
```

#### 848. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7275` → after: `L7275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7275) · [Before (L7275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7275)

```diff
-               kind: bZ.gc.KindCustom,
+               kind: pV.ec.KindCustom,
```

#### 849. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7281` → after: `L7281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7281) · [Before (L7281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7281)

```diff
-               urls: (0, Sv.d)(JB),
+               urls: (0, ej.f)(qt),
```

#### 850. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7286` → after: `L7286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7286) · [Before (L7286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7286)

```diff
-             kind: bZ.gc.KindEarth,
+             kind: pV.ec.KindEarth,
```

#### 851. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7291` → after: `L7291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7291) · [Before (L7291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7291)

```diff
-       Kv.h.forEach(((IB, ZB) => {
+       nd.f.forEach(((et, Vt) => {
```

#### 852. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7293` → after: `L7293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7293) · [Before (L7293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7293)

```diff
-         TB(ZB, null !== (JB = Tk(BB[IB])) && void 0 !== JB ? JB : Vv.h[IB])
+         Ot(Vt, null !== (qt = Dj(tt[et])) && void 0 !== qt ? qt : tj.q[et])
```

#### 853. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7304` → after: `L7304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7304) · [Before (L7304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7304)

```diff
-         IB.length > 255 ? vB.push(`Ignoring texture pack skybox ${FB}, whose name is over 255 bytes`) : GB.length === bZ.gc.MaxAdded ? vB.push(`Ignoring texture pack skybox ${FB}, past the ${bZ.gc.MaxAdded} skies a pack can add`) : (GB.push(IB), TB(bZ.gc.AddedId, BB))
+         et.length > 255 ? dt.push(`Ignoring texture pack skybox ${Et}, whose name is over 255 bytes`) : mt.length === pV.ec.MaxAdded ? dt.push(`Ignoring texture pack skybox ${Et}, past the ${pV.ec.MaxAdded} skies a pack can add`) : (mt.push(et), Ot(pV.ec.AddedId, tt))
```

#### 854. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7308` → after: `L7308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7308) · [Before (L7308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7308)

```diff
-         urls: Vv.c.map((BB => Vv.d + BB)),
+         urls: tj.i.map((tt => tj.k + tt)),
```

#### 855. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7311` → after: `L7311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7311) · [Before (L7311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7311)

```diff
-         urls: [Vv.f],
+         urls: [tj.o],
```

#### 856. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7314` → after: `L7314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7314) · [Before (L7314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7314)

```diff
-         urls: [Vv.b],
+         urls: [tj.e],
```

#### 857. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7317` → after: `L7317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7317) · [Before (L7317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7317)

```diff
-       const cB = bZ.gc.SkyTableHeaderBytes + ZB.length * bZ.gc.SkyTableEntryBytes,
+       const Ht = pV.ec.SkyTableHeaderBytes + Vt.length * pV.ec.SkyTableEntryBytes,
```

#### 858. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7321` → after: `L7321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7321) · [Before (L7321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7321)

```diff
-         const ZB = bZ.gc.SkyTableHeaderBytes + IB * bZ.gc.SkyTableEntryBytes;
+         const Vt = pV.ec.SkyTableHeaderBytes + et * pV.ec.SkyTableEntryBytes;
```

#### 859. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7341` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7341) · [Before (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7341)

```diff
-             "number" === typeof kB && Number.isFinite(kB) && (IB.setFloat32(ZB + bZ.w.CameraOffsetAt + 4 * oB, kB, !0), JB |= vB)
+             "number" === typeof jt && Number.isFinite(jt) && (et.setFloat32(Vt + pV.q.CameraOffsetAt + 4 * Dt, jt, !0), qt |= dt)
```

#### 860. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7347` → after: `L7347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7347) · [Before (L7347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7347)

```diff
-           IB.setUint32(ZB + bZ.w.PresentAt, JB, !0), IB.setUint8(ZB + bZ.w.FlagsAt, oB)
+           et.setUint32(Vt + pV.q.PresentAt, qt, !0), et.setUint8(Vt + pV.q.FlagsAt, Dt)
```

#### 861. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7366` → after: `L7366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7366) · [Before (L7366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7366)

```diff
-       })) ? BB : null
+       })) ? tt : null
```

#### 862. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7369-L7376` → after: `L7369-L7376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7369-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7369-L7376) · [Before (L7369-L7376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7369-L7376)

```diff
-         ["inclination", bZ.w.Inclination],
-         ["turbidity", bZ.w.Turbidity],
-         ["luminance", bZ.w.Luminance],
-         ["rayleigh", bZ.w.Rayleigh],
-         ["mieCoefficient", bZ.w.MieCoefficient],
-         ["mieDirectionalG", bZ.w.MieDirectionalG],
-         ["distance", bZ.w.Distance],
-         ["azimuth", bZ.w.Azimuth]
+         ["inclination", pV.q.Inclination],
+         ["turbidity", pV.q.Turbidity],
+         ["luminance", pV.q.Luminance],
+         ["rayleigh", pV.q.Rayleigh],
+         ["mieCoefficient", pV.q.MieCoefficient],
+         ["mieDirectionalG", pV.q.MieDirectionalG],
+         ["distance", pV.q.Distance],
+         ["azimuth", pV.q.Azimuth]
```

#### 863. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7379-L7381` → after: `L7379-L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7379-L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7379-L7381) · [Before (L7379-L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7379-L7381)

```diff
-         ["sunPosition", bZ.w.SunPosition, bZ.w.SunPositionAt],
-         ["up", bZ.w.Up, bZ.w.UpAt],
-         ["vertexTint", bZ.w.VertexTint, bZ.w.VertexTintAt]
+         ["sunPosition", pV.q.SunPosition, pV.q.SunPositionAt],
+         ["up", pV.q.Up, pV.q.UpAt],
+         ["vertexTint", pV.q.VertexTint, pV.q.VertexTintAt]
```

#### 864. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7384-L7386` → after: `L7384-L7386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7384-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7384-L7386) · [Before (L7384-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7384-L7386)

```diff
-         ["xCameraOffset", bZ.w.CameraOffsetX],
-         ["yCameraOffset", bZ.w.CameraOffsetY],
-         ["zCameraOffset", bZ.w.CameraOffsetZ]
+         ["xCameraOffset", pV.q.CameraOffsetX],
+         ["yCameraOffset", pV.q.CameraOffsetY],
+         ["zCameraOffset", pV.q.CameraOffsetZ]
```

#### 865. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7389-L7391` → after: `L7389-L7391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7389-L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7389-L7391) · [Before (L7389-L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7389-L7391)

```diff
-         ["useSunPosition", bZ.w.UseSunPosition],
-         ["dithering", bZ.w.Dithering],
-         ["infiniteDistance", bZ.w.InfiniteDistance]
+         ["useSunPosition", pV.q.UseSunPosition],
+         ["dithering", pV.q.Dithering],
+         ["infiniteDistance", pV.q.InfiniteDistance]
```

#### 866. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7421` → after: `L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7421) · [Before (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7421)

```diff
-                       return "string" !== typeof BB ? null : null !== (IB = null === (ZB = zk.exec(BB)) || void 0 === ZB || null === (TB = ZB.groups) || void 0 === TB ? void 0 : TB.base64) && void 0 !== IB ? IB : null
+                       return "string" !== typeof tt ? null : null !== (et = null === (Vt = Ej.exec(tt)) || void 0 === Vt || null === (Ot = Vt.groups) || void 0 === Ot ? void 0 : Ot.base64) && void 0 !== et ? et : null
```

#### 867. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7425` → after: `L7425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7425) · [Before (L7425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7425)

```diff
-                 }(TB) || (ZB(`Ignoring texture pack skybox ${IB}, whose faces are not all data URLs`, null), !1)
+                 }(Ot) || (Vt(`Ignoring texture pack skybox ${et}, whose faces are not all data URLs`, null), !1)
```

#### 868. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7438` → after: `L7438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7438) · [Before (L7438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7438)

```diff
-         this.host = BB, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.WN = !1, this.wait = null !== (IB = BB.wait) && void 0 !== IB ? IB : (BB, IB) => {
+         this.host = tt, this.loader = void 0, this.wait = void 0, this.queue = [], this.written = null, this.stopFollowing = () => {}, this.df = !1, this.wait = null !== (et = tt.wait) && void 0 !== et ? et : (tt, et) => {
```

#### 869. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7441-L7442` → after: `L7441-L7442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7441-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7441-L7442) · [Before (L7441-L7442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7441-L7442)

```diff
-           loadImage: null !== (ZB = BB.loadImage) && void 0 !== ZB ? ZB : Dv,
-           dTB: null !== (TB = BB.dTB) && void 0 !== TB ? TB : ev.s,
+           loadImage: null !== (Vt = tt.loadImage) && void 0 !== Vt ? Vt : sd,
+           WOt: null !== (Ot = tt.WOt) && void 0 !== Ot ? Ot : rd.p,
```

#### 870. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7445` → after: `L7445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7445) · [Before (L7445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7445)

```diff
-               kind: bZ.gc.SkyImagesReady,
+               kind: pV.ec.SkyImagesReady,
```

#### 871. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7450` → after: `L7450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7450) · [Before (L7450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7450)

```diff
-             BB.warn(`sky image set ${IB} (${ZB}) didn't load: the last sky stays`, TB)
+             tt.warn(`sky image set ${et} (${Vt}) didn't load: the last sky stays`, Ot)
```

#### 872. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7459` → after: `L7459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7459) · [Before (L7459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7459)

```diff
-           this.write(null !== BB && void 0 !== BB ? BB : {})
+           this.write(null !== tt && void 0 !== tt ? tt : {})
```

#### 873. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7472` → after: `L7472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7472) · [Before (L7472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7472)

```diff
-         this.WN = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
+         this.df = !0, this.stopFollowing(), this.queue = [], this.loader.dispose()
```

#### 874. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7475` → after: `L7475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7475) · [Before (L7475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7475)

```diff
-         if (this.WN) return;
+         if (this.df) return;
```

#### 875. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7483-L7484` → after: `L7483-L7484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7483-L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7483-L7484) · [Before (L7483-L7484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7483-L7484)

```diff
-           this.written = IB, this.loader.reset(IB.sets), this.queue = this.queue.filter((BB => BB.kind !== bZ.gc.SkyImagesReady)), this.queue.push({
-             kind: bZ.gc.SkyTable,
+           this.written = et, this.loader.reset(et.sets), this.queue = this.queue.filter((tt => tt.kind !== pV.ec.SkyImagesReady)), this.queue.push({
+             kind: pV.ec.SkyTable,
```

#### 876. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7491-L7498` → after: `L7491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7491) · [Before (L7491-L7498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7491-L7498)

```diff
-     var Fk = ZB(2945),
-       Nk = ZB(3159),
-       gk = ZB(294),
-       qk = ZB(190),
-       yk = ZB(2953),
-       Uk = ZB(2961),
-       Wk = ZB(267),
-       dk = ZB(273),
+     var fj = Vt(2878),
```

#### 877. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7500-L7504` → after: `L7493-L7504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7493-L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7493-L7504) · [Before (L7500-L7504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7500-L7504)

```diff
-       Qk = ZB(3090),
-       sk = ZB(3099),
-       wk = ZB(121),
-       Ok = ZB(331),
-       Yk = ZB(40860);
+       yj = Vt(329),
+       Nj = Vt(209),
+       aj = Vt(2883),
+       Mj = Vt(2888),
+       bj = Vt(304),
+       Jj = Vt(312),
+       Cj = Vt(2981),
+       uj = Vt(2997),
+       Kj = Vt(3008),
+       hj = Vt(129),
+       vj = Vt(366),
+       Wj = Vt(41022);
```

#### 878. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7507-L7508` → after: `L7507-L7508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7507-L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7507-L7508) · [Before (L7507-L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7507-L7508)

```diff
-         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, uJ.l)(UT.E, (BB => {
-           this.onReply((0, eJ.e)(UT.E, BB), performance.now())
+         this.id = null, this.sentMs = null, this.roundTripMs = null, this.stopReplies = void 0, this.stopReplies = (0, Uq.j)(MO.J, (tt => {
+           this.onReply((0, rq.h)(MO.J, tt), performance.now())
```

#### 879. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7512` → after: `L7512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7512) · [Before (L7512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7512)

```diff
-         null === this.id ? this.id = BB : BB !== this.id && (this.id = BB, this.sentMs = document.hidden ? null : IB)
+         null === this.id ? this.id = tt : tt !== this.id && (this.id = tt, this.sentMs = document.hidden ? null : et)
```

#### 880. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7581` → after: `L7581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7581) · [Before (L7581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7581)

```diff
-           JB = (ZB >>> bZ._.LagsShift) - (this.word >>> bZ._.LagsShift) & bZ._.CountMask,
+           qt = (Vt >>> pV.bb.LagsShift) - (this.word >>> pV.bb.LagsShift) & pV.bb.CountMask,
```

#### 881. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7584` → after: `L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7584) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7584)

```diff
-         this.word = ZB, this.lagUs = TB, this.primed = !0, GB && IB && JB > 0 && 0 !== (ZB & bZ._.Defaulted) && this.lags.add(oB, JB)
+         this.word = Vt, this.lagUs = Ot, this.primed = !0, mt && et && qt > 0 && 0 !== (Vt & pV.bb.Defaulted) && this.lags.add(Dt, qt)
```

#### 882. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7593` → after: `L7593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7593) · [Before (L7593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7593)

```diff
-     var jk = ZB(313);
+     var Zj = Vt(348);
```

#### 883. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7600` → after: `L7600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7600) · [Before (L7600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7600)

```diff
-         this.rafs = 0, this.sv = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = Pk(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, jk.d)(), this.onBlur = () => {
+         this.rafs = 0, this.Pd = 0, this.heldAtRaf = -1, this.heldRunStartMs = 0, this.startMs = performance.now(), this.startClockOffsetMs = Lj(), this.focused = document.hasFocus(), this.blurred = !1, this.resumed = !1, this.embedded = (0, Zj.f)(), this.onBlur = () => {
```

#### 884. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7612` → after: `L7612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7612) · [Before (L7612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7612)

```diff
-         (0 === this.sv || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.sv++, this.heldAtRaf = this.rafs
+         (0 === this.Pd || this.heldAtRaf < this.rafs - 1) && (this.heldRunStartMs = 1 === this.rafs ? this.startMs : performance.now()), this.Pd++, this.heldAtRaf = this.rafs
```

#### 885. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7618` → after: `L7618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7618) · [Before (L7618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7618)

```diff
-           return BB.sv > 0 && (IB += " pace:held"), BB.heldRunMs > 1e4 && (IB += " pace:stalled"), BB.blurred && (IB += " blur"), BB.resumed && (IB += " resumed"), BB.embedded && (IB += " embedded"), BB.clockGainMs > 2e3 && (IB += " clockjump"), IB
+           return tt.Pd > 0 && (et += " pace:held"), tt.heldRunMs > 1e4 && (et += " pace:stalled"), tt.blurred && (et += " blur"), tt.resumed && (et += " resumed"), tt.embedded && (et += " embedded"), tt.clockGainMs > 2e3 && (et += " clockjump"), et
```

#### 886. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7622-L7623` → after: `L7622-L7623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7622-L7623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7622-L7623) · [Before (L7622-L7623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7622-L7623)

```diff
-           sv: this.sv,
-           heldRunMs: this.sv > 0 && this.heldAtRaf === IB ? performance.now() - this.heldRunStartMs : 0,
+           Pd: this.Pd,
+           heldRunMs: this.Pd > 0 && this.heldAtRaf === et ? performance.now() - this.heldRunStartMs : 0,
```

#### 887. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7630` → after: `L7630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7630) · [Before (L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7630)

```diff
-         this.rafs = 0, this.sv = 0, this.heldAtRaf = -1, this.startMs = BB, this.startClockOffsetMs = Pk(), this.blurred = !this.focused, this.resumed = !1
+         this.rafs = 0, this.Pd = 0, this.heldAtRaf = -1, this.startMs = tt, this.startClockOffsetMs = Lj(), this.blurred = !this.focused, this.resumed = !1
```

#### 888. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7636-L7641` → after: `L7636-L7641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7636-L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7636-L7641) · [Before (L7636-L7641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7636-L7641)

```diff
-     var rk = ZB(34118),
-       mk = ZB(3071),
-       Xk = ZB(40906),
-       Lk = ZB(34110),
-       ek = ZB(2970),
-       uk = ZB(3080);
+     var kj = Vt(34323),
+       Gj = Vt(2984),
+       zj = Vt(41075),
+       oj = Vt(34317),
+       rj = Vt(2894),
+       Uj = Vt(2987);
```

#### 889. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7669` → after: `L7669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7669) · [Before (L7669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7669)

```diff
-         this.shell = BB, this.tracker = new Uk.b, this.gpu = new pk, this.pacing = new Mk, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
+         this.shell = tt, this.tracker = new Mj.e, this.gpu = new cj, this.pacing = new Pj, this.timers = [], this.inGameAtLastFlush = !1, this.hasFlushedSinceConnect = !1, this.sendsDropped = 0, this.pendingLightFailures = 0, this.unsentPage = null, this.game = null, this.fpsSpan … [truncated]
```

#### 890. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7673` → after: `L7673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7673) · [Before (L7673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7673)

```diff
-         }, (0, rk.e)(BB.backend, BB.canvas, BB.adapterVendor), this.tracker.start((() => !BB.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, ek.d)("wasm", (() => {
+         }, (0, kj.b)(tt.backend, tt.canvas, tt.adapterVendor), this.tracker.start((() => !tt.inGame()), this.gpu, "wasm"), document.addEventListener("visibilitychange", this.onVisibility), window.addEventListener("beforeunload", this.onBeforeUnload), (0, rj.b)("wasm", (() => {
```

#### 891. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7677-L7678` → after: `L7677-L7678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7677-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7677-L7678) · [Before (L7677-L7678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7677-L7678)

```diff
-           } = (0, Xk.c)();
-           return `${BB.backend}, quality steps aim at up to ${uk.e.target.maxFps} fps, pixel n ${IB}, msaa ${ZB}`
+           } = (0, zj.g)();
+           return `${tt.backend}, quality steps aim at up to ${Uj.e.target.maxFps} fps, pixel n ${et}, msaa ${Vt}`
```

#### 892. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7699` → after: `L7699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7699) · [Before (L7699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7699)

```diff
-         const GB = BB.headerWord(bZ.J.TickUs) / 1e3 + (0, TT.I)();
+         const mt = tt.headerWord(pV.J.TickUs) / 1e3 + (0, qO.E)();
```

#### 893. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7701` → after: `L7701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7701) · [Before (L7701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7701)

```diff
-         (oB.dU(GB), null === (JB = this.frameDebug) || void 0 === JB || JB.wasmFrame(BB, IB, ZB, TB, oB.isSampling(), GB), null !== this.game) && (null === (vB = this.frameDebug) || void 0 === vB || vB.inGame());
+         (Dt.bM(mt), null === (qt = this.frameDebug) || void 0 === qt || qt.wasmFrame(tt, et, Vt, Ot, Dt.isSampling(), mt), null !== this.game) && (null === (dt = this.frameDebug) || void 0 === dt || dt.inGame());
```

#### 894. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7743` → after: `L7743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7743) · [Before (L7743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7743)

```diff
-         if (!(IB < sk.d)) {
+         if (!(et < Kj.b)) {
```

#### 895. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7762` → after: `L7762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7762) · [Before (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7762)

```diff
-           cB = kB ? GB : (0, yk.e)(GB),
+           Ht = jt ? mt : (0, aj.e)(mt),
```

#### 896. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7766` → after: `L7766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7766) · [Before (L7766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7766)

```diff
-           FB = (0, Qk.u)((0, Qk.r)(hB), this.unsentPage),
+           Et = (0, uj.u)((0, uj.q)(Qt), this.unsentPage),
```

#### 897. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7773` → after: `L7773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7773) · [Before (L7773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7773)

```diff
-               qB = (0, Ck.l)({
+               yt = (0, Cj.j)({
```

#### 898. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7778` → after: `L7778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7778) · [Before (L7778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7778)

```diff
-             for (const yB of (0, Nk.d)()) {
+             for (const Nt of (0, wj.e)()) {
```

#### 899. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7782-L7783` → after: `L7782-L7783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7782) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7782-L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7782-L7783) · [Before (L7782-L7783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7782-L7783)

```diff
-               else if ((0, Qk.j)(UB)) WB = kB[UB];
-               else if ((0, Ck.n)(UB)) WB = qB[UB];
+               else if ((0, uj.g)(Mt)) bt = jt[Mt];
+               else if ((0, Cj.m)(Mt)) bt = yt[Mt];
```

#### 900. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7788` → after: `L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7788) · [Before (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7788)

```diff
-                 case "wk":
+                 case "Lj":
```

#### 901. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7791-L7792` → after: `L7791-L7792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7791-L7792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7791-L7792) · [Before (L7791-L7792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7791-L7792)

```diff
-                 case "Hk":
-                   WB = (0, mk.G)((0, Xk.c)().n);
+                 case "oj":
+                   bt = (0, Gj.y)((0, zj.g)().n);
```

#### 902. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7794` → after: `L7794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7794) · [Before (L7794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7794)

```diff
-                 case "Mk":
+                 case "rj":
```

#### 903. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7797` → after: `L7797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7797) · [Before (L7797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7797)

```diff
-                 case "jk":
+                 case "Uj":
```

#### 904. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7800` → after: `L7800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800) · [Before (L7800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7800)

```diff
-                 case "Pk":
+                 case "Aj":
```

#### 905. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7803` → after: `L7803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7803) · [Before (L7803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7803)

```diff
-                 case "Rk":
+                 case "ij":
```

#### 906. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7806` → after: `L7806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7806) · [Before (L7806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7806)

```diff
-                 case "rk":
+                 case "Yj":
```

#### 907. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7809` → after: `L7809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7809) · [Before (L7809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7809)

```diff
-                 case "mk":
+                 case "Bj":
```

#### 908. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7812` → after: `L7812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7812) · [Before (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7812)

```diff
-                 case "Xk":
+                 case "pj":
```

#### 909. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7815` → after: `L7815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7815) · [Before (L7815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7815)

```diff
-                 case "Lk":
+                 case "xj":
```

#### 910. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7818` → after: `L7818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7818) · [Before (L7818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7818)

```diff
-                 case "uk":
+                 case "Tj":
```

#### 911. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7821` → after: `L7821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7821) · [Before (L7821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7821)

```diff
-                 case "fk":
+                 case "gj":
```

#### 912. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7824` → after: `L7824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7824) · [Before (L7824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7824)

```diff
-                 case "lk":
+                 case "sj":
```

#### 913. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7827` → after: `L7827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7827) · [Before (L7827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7827)

```diff
-                 case "xk":
+                 case "VH":
```

#### 914. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7830` → after: `L7830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7830) · [Before (L7830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7830)

```diff
-                 case "Ek":
+                 case "OH":
```

#### 915. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7833` → after: `L7833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7833) · [Before (L7833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7833)

```diff
-                 case "Ak":
+                 case "nj":
```

#### 916. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7836` → after: `L7836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7836) · [Before (L7836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7836)

```diff
-                 case "tk":
+                 case "tH":
```

#### 917. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7839` → after: `L7839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7839) · [Before (L7839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7839)

```diff
-                 case "bk":
+                 case "eH":
```

#### 918. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7842` → after: `L7842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7842) · [Before (L7842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7842)

```diff
-                 case "Dk":
+                 case "qH":
```

#### 919. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7845` → after: `L7845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7845) · [Before (L7845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7845)

```diff
-                 case "Kk":
+                 case "DH":
```

#### 920. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7848` → after: `L7848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7848) · [Before (L7848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7848)

```diff
-                 case "Vk":
+                 case "mH":
```

#### 921. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7851` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7851) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7851)

```diff
-                 case "Sk":
+                 case "dH":
```

#### 922. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7854-L7855` → after: `L7854-L7855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7854-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7854-L7855) · [Before (L7854-L7855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7854-L7855)

```diff
-                 case "hc":
-                   WB = (0, Fk.f)(GB);
+                 case "MH":
+                   bt = (0, fj.j)(mt);
```

#### 923. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7857` → after: `L7857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7857) · [Before (L7857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7857)

```diff
-                 case "ak":
+                 case "zj":
```

#### 924. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7860-L7874` → after: `L7860-L7874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7860-L7874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7860-L7874) · [Before (L7860-L7874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7860-L7874)

```diff
-                 case "Bc":
-                 case "Ic":
-                 case "Zc":
-                 case "Tc":
-                 case "Jc":
-                 case "oc":
-                 case "Gc":
-                 case "vc":
-                 case "kc":
-                 case "cc":
-                 case "nc":
-                 case "zc":
-                 case "Fc":
-                 case "Nc":
-                 case "gc":
+                 case "jH":
+                 case "HH":
+                 case "XH":
+                 case "QH":
+                 case "lH":
+                 case "EH":
+                 case "fH":
+                 case "wH":
+                 case "yH":
+                 case "NH":
+                 case "aH":
+                 case "bH":
+                 case "JH":
+                 case "CH":
+                 case "uH":
```

#### 925. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7877` → after: `L7877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7877) · [Before (L7877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7877)

```diff
-                 case "Mc":
+                 case "GH":
```

#### 926. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7880` → after: `L7880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7880) · [Before (L7880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7880)

```diff
-                 case "jc":
+                 case "zH":
```

#### 927. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7883-L7884` → after: `L7883-L7884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7883-L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7883-L7884) · [Before (L7883-L7884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7883-L7884)

```diff
-                 case "Pc":
-                   WB = Yk.b[BB.backend];
+                 case "oH":
+                   bt = Wj.c[tt.backend];
```

#### 928. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7886-L7887` → after: `L7886-L7887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7886-L7887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7886-L7887) · [Before (L7886-L7887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7886-L7887)

```diff
-                 case "Rc":
-                   WB = (0, wk.e)();
+                 case "rH":
+                   bt = (0, hj.d)();
```

#### 929. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7889` → after: `L7889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7889) · [Before (L7889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7889)

```diff
-                 case "mc":
+                 case "UH":
```

#### 930. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7892` → after: `L7892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7892) · [Before (L7892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7892)

```diff
-                 case "Xc":
+                 case "AH":
```

#### 931. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7895-L7896` → after: `L7895-L7896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7895-L7896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7895-L7896) · [Before (L7895-L7896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7895-L7896)

```diff
-                 case "Lc":
-                   WB = null !== (cB = TB.d.get("gameEntrySource")) && void 0 !== cB ? cB : qk.f;
+                 case "iH":
+                   bt = null !== (Ht = Ot.b.get("gameEntrySource")) && void 0 !== Ht ? Ht : Nj.e;
```

#### 932. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7898-L7899` → after: `L7898-L7899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7898-L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7898-L7899) · [Before (L7898-L7899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7898-L7899)

```diff
-                 case "ec":
-                   WB = null !== (nB = IB.frameLimiter) && void 0 !== nB ? nB : qk.f;
+                 case "YH":
+                   bt = null !== (Xt = et.frameLimiter) && void 0 !== Xt ? Xt : Nj.e;
```

#### 933. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7901` → after: `L7901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7901) · [Before (L7901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7901)

```diff
-                 case "uc":
+                 case "BH":
```

#### 934. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7904-L7905` → after: `L7904-L7905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7904-L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7904-L7905) · [Before (L7904-L7905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7904-L7905)

```diff
-                 case "fc":
-                   WB = null !== (hB = (0, dk.b)()) && void 0 !== hB ? hB : qk.f;
+                 case "pH":
+                   bt = null !== (Qt = (0, Jj.b)()) && void 0 !== Qt ? Qt : Nj.e;
```

#### 935. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7907-L7908` → after: `L7907-L7908`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7907-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7907-L7908) · [Before (L7907-L7908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7907-L7908)

```diff
-                 case "lc":
-                   WB = (0, Wk.c)(gB.width, gB.height);
+                 case "xH":
+                   bt = (0, bj.e)(wt.width, wt.height);
```

#### 936. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7910` → after: `L7910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7910) · [Before (L7910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7910)

```diff
-                 case "Ac":
+                 case "TH":
```

#### 937. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7913-L7914` → after: `L7913-L7914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7913-L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7913-L7914) · [Before (L7913-L7914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7913-L7914)

```diff
-                 case "xc":
-                   WB = null !== (zB = BB.fallbackReason) && void 0 !== zB ? zB : qk.f;
+                 case "nH":
+                   bt = null !== (lt = tt.fallbackReason) && void 0 !== lt ? lt : Nj.e;
```

#### 938. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7916` → after: `L7916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7916) · [Before (L7916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7916)

```diff
-                 case "Kc":
+                 case "VX":
```

#### 939. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7919` → after: `L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7919) · [Before (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7919)

```diff
-                 case "Vc":
+                 case "OX":
```

#### 940. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7922` → after: `L7922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7922) · [Before (L7922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7922)

```diff
-                 case "bc":
+                 case "sH":
```

#### 941. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7925` → after: `L7925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7925) · [Before (L7925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7925)

```diff
-                 case "Sc":
+                 case "qX":
```

#### 942. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7928` → after: `L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7928) · [Before (L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7928)

```diff
-                 case "Bn": {
+                 case "DX": {
```

#### 943. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7933-L7934` → after: `L7933-L7934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7933-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7933-L7934) · [Before (L7933-L7934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7933-L7934)

```diff
-                 case "Zn":
-                   WB = Ok.G;
+                 case "mX":
+                   bt = vj.A;
```

#### 944. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7936-L7937` → after: `L7936-L7937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7936-L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7936-L7937) · [Before (L7936-L7937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7936-L7937)

```diff
-                 case "nn":
-                   WB = (0, Qk.l)();
+                 case "EX":
+                   bt = (0, uj.i)();
```

#### 945. `bundles/bloxd.io/chunks/js/wasmClientGame.js` (Changed code · before: `L7939-L7941` → after: `L7939-L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825bR7939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-68e515a898a762ad2bf13296f24d3d7567e259db89e163f377dc545c3499825b) · [After (L7939-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7939-L7941) · [Before (L7939-L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/wasmClientGame.js#L7939-L7941)

```diff
-                 case "tc": {
-                   const IB = BB.Xg();
-                   WB = null === IB ? qk.f : String(IB);
+                 case "gH": {
+                   const et = tt.Rw();
+                   bt = null === et ? Nj.e : String(et);
```
