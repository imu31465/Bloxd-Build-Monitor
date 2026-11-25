# Changed — Bundle Modifications Report (Part 011 / 056)

- **Updated at**: `2026-11-25T18:33 JST`
- **Part**: `11 / 56` (**295** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 010](part-010.md) · [Part 012 →](part-012.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/243.js` (sn3sfj.2522680a → 8104he.3820eae0 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/243.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7)

#### 26. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L808-L812` → after: `L267-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L267-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L267-L280) · [Before (L808-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L808-L812)

```diff
-       render() {
-         if (this._updateCamera(), this.utilityLayerScene.activeCamera) {
-           const pp = this.utilityLayerScene.activeCamera.Gl(),
-             ip = this.utilityLayerScene.activeCamera;
-           ip._scene = this.utilityLayerScene, ip.leftCamera && (ip.leftCamera._scene = this.utilityLayerScene), ip.rightCamera && (ip.rightCamera._scene = this.utilityLayerScene), this.utilityLayerScene.render(!1), ip._scene = pp, ip.leftCamera && (ip.leftCamera._scene = pp), ip. … [truncated]
+       createAnimationFrameWithoutPrecomputes(QQ, WQ, XQ) {
+         let wQ, qQ, TQ = null;
+         if ("object" === typeof WQ && "post" in WQ) {
+           var zQ;
+           TQ = null !== (zQ = WQ.lerp_mode) && void 0 !== zQ ? zQ : null, qQ = XQ(WQ.post), wQ = void 0 !== WQ.pre ? XQ(WQ.pre) : qQ
+         } else {
+           const QQ = XQ(WQ);
+           qQ = QQ, wQ = QQ
+         }
+         return {
+           timeFraction: QQ,
+           Zw: this.createLerpMode(TQ),
+           pre: wQ,
+           post: qQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L815-L816` → after: `L283-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L283-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L283-L284) · [Before (L815-L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L815-L816)

```diff
-       dispose() {
-         this.onPointerOutObservable.clear(), this._afterRenderObserver && this.originalScene.onAfterRenderCameraObservable.remove(this._afterRenderObserver), this._sceneDisposeObserver && this.originalScene.Kl.remove(this._sceneDisposeObserver), this._originalPointerObserver && t … [truncated]
+       createLerpMode(QQ) {
+         return null === QQ ? wQ.j.Linear : gQ.LERP_MODE_SCHEMA_MAPPING[QQ]
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L818-L819` → after: `L286-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L286-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L286-L304) · [Before (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L818-L819)

```diff
-       _updateCamera() {
-         this.utilityLayerScene.cameraToUseForPointers = this.getRenderCamera(), this.utilityLayerScene.activeCamera = this.getRenderCamera()
+     }
+ 
+     function JQ(QQ) {
+       return Number.isFinite(QQ.timeFraction) && rQ(QQ.pre) && rQ(QQ.post)
+     }
+ 
+     function rQ(QQ) {
+       return Number.isFinite(QQ[0]) && Number.isFinite(QQ[1]) && Number.isFinite(QQ[2])
+     }
+ 
+     function IQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
+       const FQ = TQ - WQ,
+         PQ = TQ - wQ,
+         gQ = sQ - wQ,
+         JQ = [null, null, null];
+       for (let rQ = 0; rQ < JQ.length; rQ++) JQ[rQ] = jQ(QQ[rQ], XQ[rQ], qQ[rQ], zQ[rQ], FQ, gQ);
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L822-L842` → after: `L307-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L307-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L307-L312) · [Before (L822-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L822-L842)

```diff
-     Qp._DefaultUtilityLayer = null, Qp._DefaultKeepDepthUtilityLayer = null;
-     const Jp = {
-       FindMainCamera: function(pp) {
-         return pp.findMainCamera()
-       },
-       FindMainObjectRenderer: function(pp) {
-         return pp.findMainObjectRenderer()
-       },
-       CreateUtilityLayerRenderer: function(pp) {
-         let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         const cp = pp.pw,
-           Op = new Qp(cp, ip, !0);
-         Op.utilityLayerScene.activeCamera = cp.activeCamera;
-         let op = Jp.FindMainCamera(cp.frameGraph);
-         !op && cp.cameras.length > 0 && (op = cp.cameras[0]), op && (Op.setRenderCamera(op), Op.utilityLayerScene.activeCamera = op);
-         const Ip = cp.onAfterRenderObservable.add((() => {
- ... (5 more removed lines; see GitHub link above)
+ 
+     function jQ(QQ, WQ, XQ, wQ, TQ, zQ) {
+       return {
+         Mw: qQ.b.computeShortestRotation(QQ, XQ) / TQ,
+         Qq: qQ.b.computeShortestRotation(WQ, wQ) / zQ,
+         delta: qQ.b.computeShortestRotation(WQ, XQ)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L844-L845` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L314) · [Before (L844-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L844-L845)

```diff
-     };
-     let Bp = null;
+     }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L847-L862` → after: `L316-L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L316-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L316-L328) · [Before (L847-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L847-L862)

```diff
-     function Np(pp, ip, cp, Op) {
-       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Sp = arguments.length > 6 ? arguments[6] : void 0,
-         xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
-       const {
-         height: Yp,
-         width: Dp
-       } = np(pp, ip, cp);
-       if (!Yp || !Dp) return void Pp.e.Error("Invalid 'size' parameter !");
-       const Ap = ip.Gl();
-       let yp = Ap.activeCamera !== ip;
-       if (Ap.frameGraph) {
-         const pp = Jp.FindMainObjectRenderer(Ap.frameGraph);
-         pp && (yp = pp.camera !== ip)
+     function BQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
+       const FQ = TQ - WQ,
+         PQ = TQ - wQ,
+         gQ = sQ - wQ,
+         JQ = [null, null, null];
+       for (let rQ = 0; rQ < JQ.length; rQ++) JQ[rQ] = {
+         Mw: (qQ[rQ] - QQ[rQ]) / FQ,
+         Qq: (zQ[rQ] - XQ[rQ]) / gQ,
+         delta: qQ[rQ] - XQ[rQ]
+       };
+       return {
+         Ow: PQ,
+         Kw: JQ
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L888-L898` → after: `L331-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L331-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L331-L333) · [Before (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L888-L898)

```diff
-     async function Tp(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         op = arguments.length > 4 ? arguments[4] : void 0,
-         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
-       return await new Promise(((Lp, Yp) => {
-         Np(pp, ip, cp, (pp => {
-           "undefined" !== typeof pp ? Lp(pp) : Yp(new Error("Data is undefined"))
-         }), Op, xp, op, Ip, Sp)
-       }))
+ 
+     function yQ(QQ) {
+       return VQ("number" === typeof QQ ? [QQ, QQ, QQ] : QQ)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L900-L911` → after: `L335-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L335-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L335-L337) · [Before (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L900-L911)

```diff
-     async function fp(pp, ip, cp, Op) {
-       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         Ip = arguments.length > 5 ? arguments[5] : void 0,
-         Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-       return await new Promise((xp => {
-         Np(pp, ip, {
-           width: cp,
-           height: Op
-         }, (() => {
-           xp()
-         }), op, !0, Ip, Sp)
-       }))
+ 
+     function VQ(QQ) {
+       return [DQ(QQ[0]), DQ(QQ[1]), DQ(QQ[2])]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L914-L986` → after: `L340-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L340-L341) · [Before (L914-L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L914-L986)

```diff
-     function bp(pp, ip, Ip, Sp) {
-       let xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
-         Lp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
-         Yp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         Dp = arguments.length > 7 ? arguments[7] : void 0,
-         Wp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         vp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         tp = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
-         Hp = arguments.length > 11 ? arguments[11] : void 0,
-         dp = arguments.length > 12 ? arguments[12] : void 0,
-         ep = arguments.length > 13 ? arguments[13] : void 0,
-         jp = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
-         kp = arguments.length > 15 ? arguments[15] : void 0;
-       const mp = ip.Gl();
-       if (mp.frameGraph) return void ap(mp.frameGraph, ip, Ip, xp, Lp, Yp, Dp, Hp, ep, !Sp).then((pp => {
-         Sp && Sp(pp)
- ... (57 more removed lines; see GitHub link above)
+     function DQ(QQ) {
+       return Number.isFinite(QQ) ? Math.min(zQ.e, Math.max(-zQ.e, QQ)) : QQ
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L988-L1003` → after: `L343-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L343-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L343-L346) · [Before (L988-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L988-L1003)

```diff
-     async function hp(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Sp = arguments.length > 6 ? arguments[6] : void 0,
-         xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         Yp = !(arguments.length > 9 && void 0 !== arguments[9]) || arguments[9],
-         Dp = arguments.length > 10 ? arguments[10] : void 0,
-         Ap = arguments.length > 11 ? arguments[11] : void 0,
-         Pp = arguments.length > 12 ? arguments[12] : void 0;
-       return await new Promise(((Wp, yp) => {
-         bp(pp, ip, cp, (pp => {
-           "undefined" !== typeof pp ? Wp(pp) : yp(new Error("Data is undefined"))
-         }), Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp)
-       }))
+ 
+     function pQ(QQ) {
+       const [WQ, XQ, wQ] = QQ, zQ = -(0, TQ.j)(WQ), sQ = -(0, TQ.j)(XQ), FQ = (0, TQ.j)(wQ), PQ = qQ.b.quaternionFromEulerZYX(zQ, sQ, FQ);
+       return qQ.b.eulerYXZFromQuaternion(PQ)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1005-L1092` → after: `L348-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L348-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L348-L355) · [Before (L1005-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L1005-L1092)

```diff
-     async function ap(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
-         op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
-         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         Sp = arguments.length > 6 ? arguments[6] : void 0,
-         xp = arguments.length > 7 ? arguments[7] : void 0,
-         Lp = arguments.length > 8 ? arguments[8] : void 0,
-         Yp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         Dp = arguments.length > 10 ? arguments[10] : void 0;
-       const Ap = pp.engine,
-         Pp = pp.textureManager,
-         {
-           height: Wp,
-           width: Up,
-           finalWidth: wp,
-           finalHeight: tp
- ... (72 more removed lines; see GitHub link above)
+     gQ.LERP_MODE_SCHEMA_MAPPING = {
+       linear: wQ.j.Linear,
+       catmullrom: wQ.j.CatmullRomSpline
+     };
+     const GQ = 1 / 16;
+ 
+     function UQ(QQ) {
+       return [-QQ[0] * GQ, QQ[1] * GQ, QQ[2] * GQ]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1095-L1109` → after: `L358-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L358-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L358-L364) · [Before (L1095-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L1095-L1109)

```diff
-     function np(pp, ip, cp) {
-       let Op = 0,
-         op = 0,
-         Ip = 0,
-         Sp = 0;
-       if ("object" === typeof cp) {
-         const xp = cp.precision ? Math.abs(cp.precision) : 1;
-         cp.width && cp.height ? (Op = cp.height * xp, op = cp.width * xp) : cp.width && !cp.height ? (op = cp.width * xp, Op = Math.round(op / pp.getAspectRatio(ip))) : cp.height && !cp.width ? (Op = cp.height * xp, op = Math.round(Op * pp.getAspectRatio(ip))) : (op = Math.round( … [truncated]
-       } else isNaN(cp) || (Op = cp, op = cp, Ip = cp, Sp = cp);
-       return op && (op = Math.floor(op)), Op && (Op = Math.floor(Op)), Ip && (Ip = Math.floor(Ip)), Sp && (Sp = Math.floor(Sp)), {
-         height: 0 | Op,
-         width: 0 | op,
-         finalWidth: 0 | Ip,
-         finalHeight: 0 | Sp
-       }
+     function bQ(QQ) {
+       const [WQ, XQ, wQ] = QQ;
+       return [WQ >= 0 ? Math.PI - WQ : -Math.PI - WQ, vQ(XQ + Math.PI), vQ(wQ + Math.PI)]
+     }
+ 
+     function vQ(QQ) {
+       return qQ.b.mod(QQ + Math.PI, 2 * Math.PI) - Math.PI
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1121-L1124` → after: `L367-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L367-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L367-L368) · [Before (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L1121-L1124)

```diff
-     function Gp() {
-       if (gp) return;
-       gp = !0;
-       Wp.i.CreateScreenshot = Np, Wp.i.CreateScreenshotAsync = Tp, Wp.i.CreateScreenshotUsingRenderTarget = bp, Wp.i.CreateScreenshotUsingRenderTargetAsync = hp
+     function dQ(QQ, WQ) {
+       return Math.abs(qQ.b.computeShortestRotation(QQ[0], WQ[0])) + Math.abs(qQ.b.computeShortestRotation(QQ[1], WQ[1])) + Math.abs(qQ.b.computeShortestRotation(QQ[2], WQ[2]))
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/243.js` (Changed code · before: `L1126` → after: `L370-L390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7R370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-d09ca28a15a428bbdbf9a46662e5284886666818a6a02003ff37ec192be2e9f7) · [After (L370-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/243.js#L370-L390) · [Before (L1126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/243.js#L1126)

```diff
-     Gp()
+     const HQ = new PQ
+   },
+   37428: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => zQ,
+       g: () => TQ,
+       j: () => wQ,
+       n: () => qQ
+     });
+     let wQ = function(QQ) {
+         return QQ[QQ.Linear = 0] = "Linear", QQ[QQ.CatmullRomSpline = 1] = "CatmullRomSpline", QQ
+       }({}),
+       qQ = function(QQ) {
+         return QQ[QQ.NoLoop = 0] = "NoLoop", QQ[QQ.LoopOnLastFrame = 1] = "LoopOnLastFrame", QQ[QQ.HoldOnLastFrame = 2] = "HoldOnLastFrame", QQ
+       }({}),
+       TQ = function(QQ) {
+ ... (5 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/244.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/244.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L4` → after: `L4-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L4-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/244.js#L4-L40) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/244.js#L4)

```diff
-   37985: (pp, ip, cp) => {
+   61549: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       DEVTOOLS_SHADERS: () => TQ,
+       registerDevtoolsShader: () => zQ
+     });
+     var wQ = XQ(40126),
+       qQ = XQ(37468);
+     const TQ = {
+       devtoolsNormal: function(QQ) {
+         return {
+           vertex: `\n\t\t\t${(0,qQ.d)(QQ,"position","vec3")}\n\t\t\t${(0,qQ.d)(QQ,"normal","vec3")}\n\t\t\t${(0,qQ.Fb)(QQ,"worldViewProjection","mat4")}\n\t\t\t${(0,qQ.Fb)(QQ,"world","mat4")}\n\t\t\t${(0,qQ.Nb)(QQ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qQ.Ob)(QQ,`\n\t\t\t\t${ … [truncated]
+           fragment: `\n\t\t\t${(0,qQ.Nb)(QQ,"vNormal","vec3","mediump")}\n\n\t\t\t${(0,qQ.Q)(QQ,`\n\t\t\t\t\n\t\t\t\t${(0,qQ.A)(QQ,"vec3","normalColor",`abs(${(0,qQ.T)(QQ,"vNormal")})`)}\n\t\t\t\t${(0,qQ.L)(QQ)} = ${(0,qQ.l)(QQ,"vec4","normalColor","1.0")};\n\t\t\t`)}\n\t\t`
+         }
+       },
+       devtoolsWhite: function(QQ) {
+         return {
+ ... (21 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L6` → after: `L42-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L42-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/244.js#L42-L78) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/244.js#L6)

```diff
-       c: () => op
+       $: () => qQ,
+       A: () => gQ,
+       Ab: () => UQ,
+       C: () => dQ,
+       D: () => AQ,
+       Eb: () => PQ,
+       Fb: () => VQ,
+       H: () => TQ,
+       Jb: () => iQ,
+       L: () => CQ,
+       Nb: () => yQ,
+       O: () => EQ,
+       Ob: () => pQ,
+       Q: () => GQ,
+       Sb: () => aQ,
+       T: () => hQ,
+ ... (21 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L8-L46` → after: `L80-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L80-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/244.js#L80-L262) · [Before (L8-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/244.js#L8-L46)

```diff
-     var Op = cp(37989);
-     class op {
-       static GetPlanes(pp) {
-         const ip = [];
-         for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
-         return op.GetPlanesToRef(pp, ip), ip
-       }
-       static GetNearPlaneToRef(pp, ip) {
-         const cp = pp.m;
-         ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
-       }
-       static GetFarPlaneToRef(pp, ip) {
-         const cp = pp.m;
-         ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
-       }
-       static GetLeftPlaneToRef(pp, ip) {
- ... (23 more removed lines; see GitHub link above)
+     const wQ = {
+       GLSL: 0,
+       WGSL: 1
+     };
+ 
+     function qQ(QQ) {
+       return QQ === wQ.WGSL
+     }
+ 
+     function TQ(QQ, WQ, XQ) {
+       return qQ(QQ) ? XQ : WQ
+     }
+     const zQ = new Map([
+       ["int", "i32"],
+       ["float", "f32"],
+       ["vec2", "vec2f"],
+ ... (167 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L49` → after: `L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/244.js#L265) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/244.js#L49)

```diff
-   37989: (pp, ip, cp) => {
+   40126: (QQ, WQ, XQ) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L51-L190` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/244.js#L267) · [Before (L51-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/244.js#L51-L190)

```diff
-       e: () => op
-     });
-     var Op = cp(37320);
-     class op {
-       constructor(pp, ip, cp, op) {
-         this.normal = new Op.o(pp, ip, cp), this.d = op
-       }
-       BOp() {
-         return [this.normal.x, this.normal.y, this.normal.z, this.d]
-       }
-       clone() {
-         return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
-       }
-       getClassName() {
-         return "Plane"
-       }
- ... (124 more removed lines; see GitHub link above)
+       b: () => wQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/244.js` (Changed code · before: `L193-L257` → after: `L270-L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7cR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-f5157c9755a9a3a16b1de1cfed6fc61101dc390590d47b725d2be5ddaf0e8e7c) · [After (L270-L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/244.js#L270-L280) · [Before (L193-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/244.js#L193-L257)

```diff
-       static _CheckLimit(pp, ip) {
-         let cp = Op._LogLimitOutputs[pp];
-         return cp ? cp.current++ : (cp = {
-           limit: ip,
-           current: 1
-         }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
-       }
-       static _GenerateLimitMessage(pp) {
-         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
-         const cp = Op._LogLimitOutputs[pp];
-         if (!cp || !Op.MessageLimitReached) return;
-         const op = this._Levels[ip];
-         cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
-       }
-       static _AddLogEntry(pp) {
-         Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
- ... (49 more removed lines; see GitHub link above)
+       static GetShadersRepository() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersRepository : wQ.ShadersRepositoryWGSL
+       }
+       static GetShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersStore : wQ.ShadersStoreWGSL
+       }
+       static GetIncludesShadersStore() {
+         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.IncludesShadersStore : wQ.IncludesShadersStoreWGSL
+       }
+     }
+     wQ.ShadersRepository = "src/Shaders/", wQ.ShadersStore = {}, wQ.IncludesShadersStore = {}, wQ.ShadersRepositoryWGSL = "src/ShadersWGSL/", wQ.ShadersStoreWGSL = {}, wQ.IncludesShadersStoreWGSL = {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/245.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/245.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/245.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/245.js#L2)

```diff
- export const ids = [244, 245];
+ export const ids = [245];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L4-L11` → after: `L4-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/245.js#L4-L7) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/245.js#L4-L11)

```diff
-   61380: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       RegisterShaderMaterial: () => Op.e,
-       ShaderMaterial: () => Op.q,
-       ShaderMaterialCreateFromSnippetAsync: () => Op.f,
-       ShaderMaterialParse: () => Op.p,
-       ShaderMaterialParseFromFileAsync: () => Op.j,
-       ShaderMaterialParseFromSnippetAsync: () => Op.m
+   37539: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       Color3: () => wQ.b,
+       d: () => wQ.d
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/245.js` (Changed code · before: `L13-L269` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19adR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-450d163292eddbdaad32f246223d671a6b93a668b9dcde03c07c8a9c54ab19ad) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/245.js#L9-L10) · [Before (L13-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/245.js#L13-L269)

```diff
-     var Op = cp(40647);
-     (0, Op.e)()
-   },
-   37985: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => op
-     });
-     var Op = cp(37989);
-     class op {
-       static GetPlanes(pp) {
-         const ip = [];
-         for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
-         return op.GetPlanesToRef(pp, ip), ip
-       }
-       static GetNearPlaneToRef(pp, ip) {
-         const cp = pp.m;
- ... (241 more removed lines; see GitHub link above)
+     var wQ = XQ(37546);
+     (0, wQ.h)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/246.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/246.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768)

#### 1. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L4)

```diff
-   38033: (pp, ip, cp) => {
+   41280: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L6-L7)

```diff
-       d: () => Ap,
-       f: () => Sp
+       noaDevTools: () => JQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L9-L3406` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L8-L12) · [Before (L9-L3406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L9-L3406)

```diff
-     var Op = cp(9359),
-       op = cp(9338),
-       Ip = cp(337);
-     const Sp = {
-       "Maple Door": {
-         positions: [{
-           block: "Maple Door",
-           x: 0,
-           y: 0,
-           z: 0
-         }, {
-           block: "_Maple Door Top",
-           x: 0,
-           y: 1,
-           z: 0
-         }]
- ... (3382 more removed lines; see GitHub link above)
+     var wQ = XQ(37820),
+       qQ = XQ(37804),
+       TQ = XQ(2997),
+       zQ = XQ(1802),
+       sQ = XQ(41184);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3410-L3499` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L22-L26) · [Before (L3410-L3499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3410-L3499)

```diff
-         [`${pp} Banner`]: {
-           positions: [{
-             block: `${pp} Banner`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${pp} Banner Flag|meta|rot1|bot`,
-             x: 0,
-             y: 1,
-             z: 0
-           }]
-         },
-         [`${pp} Banner|meta|rot2|bot`]: {
-           positions: [{
-             block: `${pp} Banner|meta|rot2|bot`,
- ... (74 more removed lines; see GitHub link above)
+         canvas: XQ.getRenderingCanvas(),
+         maxTextureSize: XQ.getCaps().maxTextureSize,
+         pj: () => !QQ.lD,
+         resize: (QQ, WQ) => {
+           XQ.setSize(QQ, WQ)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3501-L3512` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L28-L29) · [Before (L3501-L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3501-L3512)

```diff
-         [`${pp} Banner|meta|rot4|side`]: {
-           positions: [{
-             block: `${pp} Banner|meta|rot4|side`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${pp} Banner Flag|meta|rot4|side`,
-             x: 0,
-             y: -1,
-             z: 0
-           }]
+         restoreSize: () => {
+           XQ.setSize(wQ.width, wQ.height), WQ.resize()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3514-L3564` → after: `L31-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L31-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L31-L37) · [Before (L3514-L3564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3514-L3564)

```diff
-         [`${pp} Banner|meta|rot1|top`]: {
-           positions: [{
-             block: `${pp} Banner|meta|rot1|top`,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${pp} Banner Flag`,
-             x: 0,
-             y: -1,
-             z: 0
-           }]
-         },
-         [`${pp} Banner|meta|rot2|top`]: {
-           positions: [{
-             block: `${pp} Banner|meta|rot2|top`,
- ... (35 more removed lines; see GitHub link above)
+         onFrameDrawn: XQ => {
+           const wQ = () => {
+             WQ.eD && XQ()
+           };
+           return QQ.on("afterRender", wQ), () => {
+             QQ.off("afterRender", wQ)
+           }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3569-L3665` → after: `L43-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L43-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L43-L72) · [Before (L3569-L3665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3569-L3665)

```diff
-     function Lp(pp) {
-       const ip = (0, Ip.Ob)(pp);
-       return {
-         [ip]: {
-           positions: [{
-             block: ip,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_${ip} Top Left`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
-             block: `_${ip} Top Right`,
- ... (81 more removed lines; see GitHub link above)
+     function gQ(QQ, WQ) {
+       let {
+         width: PQ,
+         height: gQ,
+         colouring: JQ
+       } = WQ;
+       const rQ = "normals" === JQ,
+         IQ = "depth" === JQ;
+       return new Promise((WQ => {
+         try {
+           const jQ = (0, TQ.f)();
+           if (jQ.nj.xj) return "screenshot" !== QQ || null !== JQ ? (console.warn("GLB downloads and coloured screenshots need WebGPU off in Graphics settings"), void WQ()) : void(0, sQ.g)(FQ(jQ), PQ, gQ).finally(WQ);
+           const BQ = jQ.nj.engine,
+             yQ = jQ.nj.sE(),
+             VQ = PQ,
+             DQ = gQ;
+ ... (14 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3667-L3741` → after: `L74-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L74-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L74-L227) · [Before (L3667-L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3667-L3741)

```diff
-     function Yp(pp) {
-       const ip = `_${pp} Back`,
-         cp = `_${pp} Dish`;
-       return {
-         [pp]: {
-           positions: [{
-             block: pp,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: ip,
-             x: 0,
-             y: 0,
-             z: -1
-           }, {
- ... (59 more removed lines; see GitHub link above)
+             function vQ() {
+               var QQ;
+               UQ && (UQ = !1, (0, wQ.e)(yQ.meshes, !1)), null === (QQ = bQ) || void 0 === QQ || QQ(), bQ = null, GQ.forEach((QQ => {
+                 const WQ = pQ.get(QQ);
+                 WQ && (QQ.material = WQ)
+               }))
+             }
+             if (rQ) {
+               const QQ = [],
+                 WQ = [];
+               GQ.forEach((XQ => {
+                 const wQ = XQ.name.toLowerCase(),
+                   qQ = XQ.uC().boundingBox.center,
+                   TQ = yQ.activeCamera.position.subtract(qQ).length();
+                 wQ.includes("sky") || wQ.includes("background") || wQ.includes("environment") || TQ > 1e3 ? WQ.push(XQ) : QQ.push(XQ)
+               })), JQ("devtoolsNormal", jQ);
+ ... (138 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3743` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L229) · [Before (L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3743)

```diff
-       }
+       }))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3745-L3766` → after: `L231-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L231-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L231-L233) · [Before (L3745-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3745-L3766)

```diff
- 
-     function Dp(pp) {
-       const ip = `Small ${pp} Pod`;
-       return {
-         [ip]: {
-           positions: [{
-             block: ip,
-             x: 0,
-             y: 0,
-             z: 0
-           }, {
-             block: `_Small ${pp} Pod Mid`,
-             x: 0,
-             y: 1,
-             z: 0
-           }, {
- ... (6 more removed lines; see GitHub link above)
+     const JQ = new class {
+       constructor() {
+         this.tools = PQ.ALL_DEV_TOOLS
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3768-L3789` → after: `L235-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L235-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L235-L242) · [Before (L3768-L3789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3768-L3789)

```diff
-     }
-     for (const Pp in Sp) {
-       for (const pp of Sp[Pp].positions)
-         if (pp.id = op.e[pp.block].id, Pp === pp.block && (0 !== pp.x || 0 !== pp.y || 0 !== pp.z)) throw new Error(`Multiblock "${Pp}" has main block "${pp.block}" at non-origin position (${pp.x}, ${pp.y}, ${pp.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
-       Sp[op.e[Pp].id] = Sp[Pp]
-     }
-     const Ap = {};
-     for (const Pp in Sp)
-       for (const {
-           block: pp,
-           x: ip,
-           y: cp,
-           z: Op
-         }
-         of Sp[Pp].positions) {
-         const Ip = {
- ... (6 more removed lines; see GitHub link above)
+       downloadScene(QQ, WQ) {
+         return gQ(QQ, WQ)
+       }
+       async setAmbientLightIntensity(QQ) {
+         const {
+           Color3: WQ
+         } = await Promise.all([XQ.e(241), XQ.e(245)]).then((() => XQ(37539)));
+         (0, TQ.f)().nj.sE().ambientColor = WQ.FromArray([QQ, QQ, QQ])
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3792` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L251) · [Before (L3792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3792)

```diff
-   38438: (pp, ip, cp) => {
+   41184: (QQ, WQ, XQ) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3797-L3806` → after: `L256-L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L256-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L256-L259) · [Before (L3797-L3806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3797-L3806)

```diff
-     var Op = cp(9338),
-       op = cp(9392),
-       Ip = cp(9399);
-     const Sp = op.s.map((pp => {
-       let {
-         dx: ip,
-         dz: cp
-       } = pp;
-       return [ip, 0, cp]
-     }));
+     var wQ = XQ(1812);
+     const qQ = 33177600,
+       TQ = 3e4;
+     let zQ = !1;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3808-L3810` → after: `L261-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L261-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L261-L318) · [Before (L3808-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3808-L3810)

```diff
-     function xp(pp) {
-       const ip = Op.e[pp];
-       return !!ip && pp !== Op.c && !ip.model && !ip.tW && !1 !== ip.solid && !ip.Ww
+     function sQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+       const {
+         scale: sQ = 1,
+         type: FQ = "image/png",
+         quality: PQ
+       } = wQ;
+       return QQ.pj() ? zQ ? Promise.reject(new Error("A screenshot is already being taken")) : (zQ = !0, new Promise(((wQ, gQ) => {
+         let JQ, rQ = 2,
+           IQ = null;
+         const jQ = () => {
+           var WQ;
+           zQ = !1, null === (WQ = IQ) || void 0 === WQ || WQ(), clearTimeout(JQ);
+           try {
+             QQ.restoreSize()
+           } catch (XQ) {
+ ... (42 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3812-L3835` → after: `L320-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L320-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L320-L325) · [Before (L3812-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3812-L3835)

```diff
-     class Lp {
-       constructor(pp) {
-         this.model = pp, this.reshapeOffsets = [...Sp, [0, -1, 0]]
-       }
-       handles(pp) {
-         const ip = Op.e[pp];
-         return (null === ip || void 0 === ip ? void 0 : ip.model) === this.model && void 0 !== ip.attachedTop
-       }
-       affects(pp) {
-         return this.handles(pp) || xp(pp) || (0, Ip.F)(Op.e[pp])
-       }
-       shape(pp, ip, cp, Sp, Lp) {
-         let Yp = this.handles(pp(ip, cp + 1, Sp)) ? op.h : 0;
-         return op.s.forEach(((Lp, Dp) => {
-           let {
-             dx: Ap,
- ... (8 more removed lines; see GitHub link above)
+     async function FQ(QQ, WQ, XQ) {
+       try {
+         const qQ = await sQ(QQ, WQ, XQ);
+         (0, wQ.e)(qQ.blob, `bloxd-screenshot-${qQ.width}x${qQ.height}-${Date.now()}.png`)
+       } catch (qQ) {
+         console.error("Error taking screenshot:", qQ)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3839` → after: `L329-L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L329-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L329-L338) · [Before (L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3839)

```diff
-   38218: (pp, ip, cp) => {
+   37820: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       c: () => PQ,
+       e: () => sQ,
+       i: () => zQ
+     });
+     var wQ = XQ(37816),
+       qQ = XQ(37829);
+     let TQ = 0;
+ 
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3841-L3852` → after: `L340-L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L340-L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L340-L351) · [Before (L3841-L3852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3841-L3852)

```diff
-       var cp;
-       ip || (ip = {});
-       const Op = null !== (cp = ip.customAttributes) && void 0 !== cp ? cp : {};
-       var op, Ip, Sp;
-       "Gun" === (null === pp || void 0 === pp ? void 0 : pp.type) && (Op.shotsLeft = null !== (op = null !== (Ip = Op.shotsLeft) && void 0 !== Ip ? Ip : null === (Sp = Op.gunStats) || void 0 === Sp ? void 0 : Sp.clipSize) && void 0 !== op ? op : pp.clipSize);
-       if (Op.enchantmentTier && (Op.enchantmentTier = Op.enchantmentTier.toString()), Op.enchantments)
-         for (const Ap in Op.enchantments) {
-           const pp = Op.enchantments[Ap];
-           if ("number" !== typeof pp) {
-             const ip = parseInt(pp);
-             isNaN(ip) || ip < 0 ? Op.enchantments[Ap] = void 0 : Op.enchantments[Ap] = ip > 1e9 ? 1e9 : ip
-           }
+       const XQ = QQ;
+       XQ._noaFaceGroups = null !== WQ && void 0 !== WQ ? WQ : null, XQ._noaFaceEpoch = -1, XQ._noaFaceMask = -1, XQ._noaFaceCount = -1, XQ._noaFaceMaterial = null;
+       const wQ = QQ.ZD;
+       wQ && 1 === wQ.length && (wQ[0].indexStart = 0, wQ[0].indexCount = QQ.getTotalIndices())
+     }
+ 
+     function sQ(QQ, WQ) {
+       if (WQ) {
+         TQ++;
+         for (const WQ of QQ) {
+           const QQ = WQ._noaFaceGroups;
+           QQ && zQ(WQ, QQ)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3854-L3860` → after: `L353-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L353-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L353-L408) · [Before (L3854-L3860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3854-L3860)

```diff
-       if (Op.enchantmentData)
-         for (const Ap in Op.enchantmentData) {
-           const pp = Op.enchantmentData[Ap];
-           if (!pp) continue;
-           if ("object" !== typeof pp) {
-             Op.enchantmentData[Ap] = void 0;
-             continue
+       } else TQ = Math.max(0, TQ - 1)
+     }
+ 
+     function FQ(QQ, WQ, XQ) {
+       let qQ = -1,
+         TQ = 0;
+       for (let zQ = 0; zQ < wQ.d; zQ++) {
+         const XQ = QQ[zQ],
+           sQ = QQ[zQ + 1];
+         sQ > XQ && WQ & 1 << wQ.b[zQ] && (qQ < 0 && (qQ = XQ), TQ = sQ)
+       }
+       return qQ < 0 ? (XQ[0] = 0, XQ[1] = 0, 0) : (XQ[0] = qQ, XQ[1] = TQ - qQ, TQ - qQ)
+     }
+     class PQ {
+       constructor(QQ, WQ) {
+         this.Ij = QQ, this.engine = WQ, this.epoch = 0, this.eyeX = NaN, this.eyeY = NaN, this.eyeZ = NaN, this.focalPx = NaN, this.culling = !1, this.range = new Int32Array(2)
+ ... (40 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3862-L3866` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L410) · [Before (L3862-L3866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3862-L3866)

```diff
-           const ip = pp.icon,
-             cp = pp.description;
-           var xp, Lp, Yp, Dp;
-           if ("string" !== typeof ip) Op.enchantmentData[Ap].icon = null !== (xp = null === ip || void 0 === ip || null === (Lp = ip.toString) || void 0 === Lp ? void 0 : Lp.call(ip)) && void 0 !== xp ? xp : void 0;
-           if ("string" !== typeof cp) Op.enchantmentData[Ap].description = null !== (Yp = null === cp || void 0 === cp || null === (Dp = cp.toString) || void 0 === Dp ? void 0 : Dp.call(cp)) && void 0 !== Yp ? Yp : void 0
+           WQ && 0 === QQ._noaFaceCount || (BQ[VQ++] = QQ)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3868` → after: `L412-L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L412-L413) · [Before (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3868)

```diff
-       return ip.customAttributes = Op, ip
+         QQ.length = VQ
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3874` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L416) · [Before (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3874)

```diff
-   38430: (pp, ip, cp) => {
+   37804: (QQ, WQ, XQ) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3879-L3880` → after: `L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L419) · [Before (L3879-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3879-L3880)

```diff
-       e: () => Ap,
-       i: () => mp
+       e: () => sQ
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3882-L3886` → after: `L421-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L421-L423) · [Before (L3882-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3882-L3886)

```diff
-     var Op = cp(9338),
-       op = cp(9375),
-       Ip = cp(38438);
-     const Sp = (0, Op.f)("Noticeboard"),
-       xp = (0, Op.f)("Standing Noticeboard|meta|rot4|lrud");
+     const wQ = new WeakSet;
+     let qQ = 0;
+     const TQ = new Set;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3888-L3889` → after: `L425-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L425-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L425-L426) · [Before (L3888-L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3888-L3889)

```diff
-     function Lp(pp) {
-       return Sp <= pp && pp <= xp
+     function zQ(QQ, WQ) {
+       QQ._data = WQ
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3899` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L431) · [Before (L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3899)

```diff
-       return "string" === typeof(null === pp || void 0 === pp || null === (ip = pp.persisted) || void 0 === ip || null === (cp = ip.shared) || void 0 === cp ? void 0 : cp.text)
+       (null !== (WQ = null === (XQ = QQ.getBuffer()) || void 0 === XQ ? void 0 : XQ.yJ) && void 0 !== WQ ? WQ : 0) > 0 && (wQ.add(QQ), 0 === qQ ? zQ(QQ, null) : TQ.add(QQ))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3903-L3909` → after: `L435-L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L435-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L435-L454) · [Before (L3903-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3903-L3909)

```diff
-       return wp(pp) && "" !== pp.persisted.shared.text.trim()
-     }
- 
-     function tp(pp, ip) {
-       let [cp, , Op] = ip;
-       const [Ip, , Sp] = op.x[pp][Wp];
-       return cp * Ip + Op * Sp
+       qQ++;
+       for (const XQ of function(QQ) {
+           const WQ = new Set;
+           for (const qQ of QQ) {
+             const QQ = qQ.geometry;
+             for (const qQ of Object.values(null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.getVertexBuffers()) && void 0 !== XQ ? XQ : {})) {
+               var XQ;
+               const QQ = qQ.getWrapperBuffer();
+               wQ.has(QQ) && WQ.add(QQ)
+             }
+           }
+           return WQ
+         }(QQ)) XQ.getData() || PQ(XQ), TQ.add(XQ);
+       let WQ = !0;
+       return () => {
+         if (WQ && (WQ = !1, qQ--, 0 === qQ)) {
+ ... (4 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3912-L3913` → after: `L457-L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L457-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L457-L462) · [Before (L3912-L3913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3912-L3913)

```diff
-     function Hp(pp, ip, cp) {
-       return cp[1] - ip[1] || tp(pp, ip) - tp(pp, cp)
+     function PQ(QQ) {
+       const WQ = QQ.getBuffer();
+       if (!WQ || !(WQ.yJ > 0)) return;
+       const XQ = QQ._engine,
+         wQ = new Uint8Array(WQ.yJ);
+       XQ.bindArrayBuffer(WQ), XQ._gl.getBufferSubData(XQ._gl.ARRAY_BUFFER, 0, wQ), XQ._resetVertexBufferBinding(), zQ(QQ, wQ)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3916-L3921` → after: `L488-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L488-L489) · [Before (L3916-L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3916-L3921)

```diff
-     function dp(pp, ip, cp, Ip, xp) {
-       var Lp;
-       let Dp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : pp(ip[0], ip[1], ip[2]);
-       if (!(Yp[Dp - Sp] & 1 << cp)) return null;
-       const [Ap, Pp, Wp] = op.x[xp][cp], yp = [ip[0] + Ap, ip[1] + Pp, ip[2] + Wp], Up = pp(yp[0], yp[1], yp[2]), wp = null === (Lp = Op.e[Up]) || void 0 === Lp ? void 0 : Lp.meta;
-       return (null === wp || void 0 === wp ? void 0 : wp.rootId) === Ip && wp.rot === xp && Yp[Up - Sp] & 1 << (1 ^ cp) ? yp : null
+     function PQ(QQ) {
+       return !!QQ && QQ.backFaceCulling && (0 === QQ.transparencyMode || 1 === QQ.transparencyMode)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3924-L3949` → after: `L506-L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L506-L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L506-L507) · [Before (L3924-L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3924-L3949)

```diff
-     function ep(pp, ip, cp, Ip) {
-       const Sp = pp(ip, cp, Ip);
-       if (!Lp(Sp)) return null;
-       const {
-         rootId: xp,
-         rot: Yp
-       } = Op.e[Sp].meta, Ap = (ip, cp) => {
-         let Op = ip,
-           op = 1;
-         for (let Ip = dp(pp, Op, cp, xp, Yp); Ip && op < Dp; Ip = dp(pp, Op, cp, xp, Yp)) Op = Ip, op++;
-         return {
-           end: Op,
-           cells: op
-         }
-       }, wp = Ap(Ap([ip, cp, Ip], Pp).end, yp).end, vp = Ap(wp, Wp).cells, [tp, , Hp] = op.x[Yp][Wp];
-       let ep = 1;
- ... (10 more removed lines; see GitHub link above)
+     function sQ(QQ, WQ, XQ) {
+       return Math.min(Math.abs(QQ[0] * WQ), Math.abs(QQ[5] * XQ)) / 2
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3953-L3966` → after: `L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L511) · [Before (L3953-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3953-L3966)

```diff
-       for (const cp of function(pp) {
-           let {
-             anchor: ip,
-             rot: cp,
-             width: Op,
-             height: Ip
-           } = pp;
-           const [Sp, , xp] = op.x[cp][Wp], Lp = [];
-           for (let op = 0; op < Ip; op++)
-             for (let pp = 0; pp < Op; pp++) Lp.push([ip[0] + Sp * pp, ip[1] - op, ip[2] + xp * pp]);
-           return Lp
-         }(pp))
-         if (wp(ip(cp[0], cp[1], cp[2]))) return cp;
-       return null
+       return qQ + TQ * QQ * QQ / WQ
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3970-L3996` → after: `L515-L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L515-L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L515-L516) · [Before (L3970-L3996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3970-L3996)

```diff
-       const Sp = pp(cp, op, Ip);
-       if (!Lp(Sp)) return null;
-       const {
-         rootId: xp,
-         rot: Yp
-       } = Op.e[Sp].meta, Dp = [
-         [cp, op, Ip]
-       ], Pp = new Set([Dp[0].join()]);
-       let Wp = Dp[0],
-         yp = null;
-       for (let Op = 0; Op < Dp.length; Op++) {
-         const cp = Dp[Op];
-         if (Hp(Yp, cp, Wp) < 0 && (Wp = cp), wp(ip(cp[0], cp[1], cp[2]))) {
-           const ip = ep(pp, cp[0], cp[1], cp[2]);
-           (!yp || Hp(Yp, ip.anchor, yp.anchor) < 0) && (yp = ip)
-         }
- ... (11 more removed lines; see GitHub link above)
+       const zQ = wQ.o;
+       return gQ(QQ[zQ], QQ[zQ + 1], QQ[zQ + 2], QQ[zQ + 3], QQ[zQ + 4], QQ[zQ + 5], WQ, XQ, qQ, TQ)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L3999-L4010` → after: `L519-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L519-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L519-L534) · [Before (L3999-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L3999-L4010)

```diff
-     function mp(pp, ip, cp, Sp, xp) {
-       if (null !== cp && Lp(cp)) {
-         const {
-           rootName: pp,
-           rot: ip
-         } = Op.e[cp].meta;
-         if (op.x[ip].some((pp => {
-             let [ip, cp, Op] = pp;
-             return ip === Sp[0] && cp === Sp[1] && Op === Sp[2]
-           }))) return {
-           root: pp,
-           rot: ip
+     function gQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
+       return (zQ <= QQ - PQ ? 0 : 1) | (zQ >= WQ + PQ ? 0 : 2) | (sQ <= XQ - PQ ? 0 : 4) | (sQ >= wQ + PQ ? 0 : 8) | (FQ <= qQ - PQ ? 0 : 16) | (FQ >= TQ + PQ ? 0 : 32)
+     }
+     const JQ = (() => {
+         const QQ = [];
+         for (let WQ = 0; WQ < wQ.s.length; WQ++) {
+           let XQ = 0;
+           for (let qQ = WQ + 1; qQ <= wQ.s.length; qQ++) {
+             const TQ = 1 << wQ.s[qQ - 1];
+             if (XQ & TQ) break;
+             XQ |= TQ, QQ.push({
+               start: WQ,
+               end: qQ,
+               pX: XQ
+             })
+           }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L4012-L4017` → after: `L536-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L536-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L536-L542) · [Before (L4012-L4017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L4012-L4017)

```diff
-       }
-       const [Yp, Dp] = op.n[xp], Ap = pp(ip[0] - Yp, ip[1], ip[2] - Dp);
-       return {
-         root: (0, Ip.g)(Ap) ? op.A : op.y,
-         rot: xp
-       }
+         return QQ
+       })(),
+       rQ = [];
+ 
+     function IQ(QQ, WQ) {
+       const XQ = wQ.h[WQ];
+       return QQ[XQ + 1] - QQ[XQ]
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/246.js` (Changed code · before: `L4031-L4038` → after: `L545-L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768R545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-394d82c12e7b0e0af967c746cb618a67fb9b9c196c4158efc203329cad7c9768) · [After (L545-L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/246.js#L545-L577) · [Before (L4031-L4038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/246.js#L4031-L4038)

```diff
-     function Sp(pp) {
-       const ip = pp.indexOf("|");
-       return -1 === ip ? {
-         item: pp,
-         clientPredictedThrower: null
-       } : {
-         item: pp.slice(0, ip),
-         clientPredictedThrower: pp.slice(ip + 1)
+     function jQ(QQ, WQ, XQ) {
+       let qQ = 0;
+       for (let zQ = 0; zQ < wQ.l; zQ++) IQ(QQ, zQ) > 0 && (qQ |= 1 << zQ);
+       if (0 === (WQ &= qQ)) return 0;
+       if (WQ === qQ) return XQ[0] = 0, XQ[1] = QQ[wQ.d], 1;
+       let TQ = null,
+         sQ = 1 / 0;
+       for (const PQ of function(QQ) {
+           let WQ = rQ[QQ];
+           if (WQ) return WQ;
+           const XQ = new Map,
+             wQ = (QQ, WQ) => {
+               const wQ = 4 * QQ + WQ.length / 2;
+               XQ.has(wQ) || XQ.set(wQ, {
+                 pX: QQ,
+                 windows: WQ
+ ... (17 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/247.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/247.js` (46 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L2)

```diff
- export const ids = [247];
+ export const ids = [247, 248];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L4)

```diff
-   38281: (pp, ip, cp) => {
+   40519: (QQ, WQ, XQ) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L7-L11` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L7) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L7-L11)

```diff
-       h: () => Op,
-       i: () => xp,
-       l: () => op,
-       o: () => Sp,
-       q: () => Ip
+       f: () => rQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L13-L18` → after: `L9-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L9-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L9-L92) · [Before (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L13-L18)

```diff
-     const Op = 1.001,
-       op = .501,
-       Ip = .025,
-       Sp = .75,
-       xp = .08,
-       Lp = 4;
+     var wQ = XQ(40260),
+       qQ = XQ(40268),
+       TQ = XQ(37370),
+       zQ = XQ(37546),
+       sQ = XQ(40525),
+       FQ = XQ(40491),
+       PQ = XQ(37418);
+     let gQ = (() => {
+         var QQ;
+         let WQ, XQ, FQ = sQ.d,
+           PQ = [],
+           gQ = [],
+           JQ = [],
+           rQ = [];
+         return QQ = class extends FQ {
+           constructor(QQ, WQ, XQ, qQ) {
+ ... (68 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L21-L35` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L95) · [Before (L21-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L21-L35)

```diff
-       const pp = op,
-         ip = Ip,
-         cp = pp - ip / 2,
-         Op = (2 * pp - 2 * ip) / (2 * Lp - 1),
-         Sp = [];
-       for (const op of [-cp, cp])
-         for (const Ip of [-cp, cp])
-           for (let cp = 0; cp < Lp; cp++) {
-             const xp = -pp + ip + Op * (2 * cp + .5);
-             Sp.push([Op, ip, ip, xp, op, Ip]), Sp.push([ip, Op, ip, op, xp, Ip]), Sp.push([ip, ip, Op, op, Ip, xp])
-           }
-       for (const op of [-cp, cp])
-         for (const pp of [-cp, cp])
-           for (const Op of [-cp, cp]) Sp.push([ip, ip, ip, op, pp, Op]);
-       return Sp
+       JQ || (JQ = !0, FQ.e.AddNodeConstructor("Light_Type_3", ((QQ, WQ) => () => new gQ(QQ, TQ.s.Zero(), WQ))), (0, PQ.d)("BABYLON.HemisphericLight", gQ))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L38` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L98) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L38)

```diff
-   38636: (pp, ip, cp) => {
+   38041: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L40-L56` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L100) · [Before (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L40-L56)

```diff
-       B: () => Pp,
-       D: () => Up,
-       G: () => vp,
-       J: () => op,
-       b: () => Dp,
-       e: () => Lp,
-       h: () => Hp,
-       i: () => Yp,
-       k: () => xp,
-       m: () => Sp,
-       o: () => Ip,
-       p: () => kp,
-       s: () => Wp,
-       t: () => jp,
-       x: () => mp,
-       y: () => ep,
- ... (1 more removed lines; see GitHub link above)
+       e: () => qQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L58-L102` → after: `L102-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L102-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L102-L139) · [Before (L58-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L58-L102)

```diff
-     var Op = cp(9427);
- 
-     function op(pp) {
-       return Math.floor(pp).toLocaleString("en-US")
-     }
-     const Ip = 2e3,
-       Sp = .005,
-       xp = .001,
-       Lp = 2,
-       Yp = "Fluid Tank",
-       Dp = "Coolant Mixer",
-       Ap = 144;
- 
-     function Pp(pp) {
-       const ip = pp.split("|")[0];
-       return (0, Op.i)(ip) ? ip === Op.c ? "cryo" : "water" : null
- ... (29 more removed lines; see GitHub link above)
+     var wQ = XQ(38047);
+     class qQ {
+       static GetPlanes(QQ) {
+         const WQ = [];
+         for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
+         return qQ.GetPlanesToRef(QQ, WQ), WQ
+       }
+       static GetNearPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
+       }
+       static GetFarPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
+       }
+       static GetLeftPlaneToRef(QQ, WQ) {
+ ... (22 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L105-L175` → after: `L142-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L142-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L142-L224) · [Before (L105-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L105-L175)

```diff
- 
-     function wp(pp) {
-       return "pipe" === pp || "tank" === pp || "maker" === pp
-     }
- 
-     function vp(pp, ip, cp) {
-       return 0 !== (pp.faces & 1 << cp) && 0 !== (ip.faces & 1 << (1 ^ cp)) && (wp(pp.kind) || wp(ip.kind))
-     }
-     const tp = (pp, ip, cp, Op) => ({
-         input: pp,
-         inputAmount: Op,
-         output: ip,
-         outputAmount: cp
-       }),
-       Hp = {
-         Condenser: {
- ... (55 more removed lines; see GitHub link above)
+   },
+   38047: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => qQ
+     });
+     var wQ = XQ(37370);
+     class qQ {
+       constructor(QQ, WQ, XQ, qQ) {
+         this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
+       }
+       awQ() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
+       }
+       clone() {
+         return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
+       }
+ ... (67 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L177-L179` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L226) · [Before (L177-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L177-L179)

```diff
-     const jp = "baf2Water",
-       kp = "baf2waterclose",
-       mp = "baf2wateropen"
+     qQ._TmpMatrix = wQ.e.Identity()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L181` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L228) · [Before (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L181)

```diff
-   38624: (pp, ip, cp) => {
+   38377: (QQ, WQ, XQ) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L186-L208` → after: `L232-L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L232-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L232-L244) · [Before (L186-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L186-L208)

```diff
-     var Op = cp(9338),
-       op = cp(9375);
-     const Ip = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1],
-       [0, 1, 0],
-       [0, -1, 0]
-     ];
-     var Sp = cp(9392),
-       xp = cp(38438),
-       Lp = cp(9385);
-     const Yp = {
-       1: [0, -1],
-       2: [-1, 0],
- ... (7 more removed lines; see GitHub link above)
+     class wQ {
+       constructor(QQ, WQ, XQ, wQ) {
+         this.x = QQ, this.y = WQ, this.width = XQ, this.height = wQ
+       }
+       toGlobal(QQ, WQ) {
+         return new wQ(this.x * QQ, this.y * WQ, this.width * QQ, this.height * WQ)
+       }
+       toGlobalToRef(QQ, WQ, XQ) {
+         return XQ.x = this.x * QQ, XQ.y = this.y * WQ, XQ.width = this.width * QQ, XQ.height = this.height * WQ, this
+       }
+       clone() {
+         return new wQ(this.x, this.y, this.width, this.height)
+       }
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L210-L212` → after: `L246-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L246-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L246-L287) · [Before (L210-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L210-L212)

```diff
- 
-     function Ap(pp, ip) {
-       return pp[0] === ip[0] && pp[1] === ip[1]
+   },
+   38947: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => TQ
+     });
+     var wQ = XQ(38956);
+     const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
+       ...QQ
+     } : null : QQ.clone(WQ) : null;
+     class TQ {
+       static DeepCopy(QQ, WQ, XQ, TQ) {
+         let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const sQ = function(QQ) {
+           const WQ = [];
+           do {
+             const XQ = Object.getOwnPropertyNames(QQ);
+ ... (26 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L214-L216` → after: `L289-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L289-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L289-L295) · [Before (L214-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L214-L216)

```diff
- 
-     function Pp(pp, ip) {
-       return pp[0] * ip[0] + pp[1] * ip[1] === 0
+   },
+   38191: (QQ, WQ, XQ) => {
+     function wQ() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
+         const WQ = 16 * Math.random() | 0;
+         return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
+       }))
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L218-L227` → after: `L297-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L297-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L297-L356) · [Before (L218-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L218-L227)

```diff
-     const Wp = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1]
-     ];
-     var yp = cp(9422);
- 
-     function Up(pp, ip, cp, Op, op) {
-       return ip < yp.v || ip >= yp.v + yp.w || Math.floor(pp / yp.B) === Math.floor(Op / yp.B) && Math.floor(cp / yp.B) === Math.floor(op / yp.B)
+     XQ.d(WQ, {
+       d: () => wQ
+     })
+   },
+   38956: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => wQ
+     });
+     class wQ {
+       static _CheckLimit(QQ, WQ) {
+         let XQ = wQ._LogLimitOutputs[QQ];
+         return XQ ? XQ.current++ : (XQ = {
+           limit: WQ,
+           current: 1
+         }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
+       }
+ ... (44 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L229-L245` → after: `L358-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L358-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L358-L417) · [Before (L229-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L229-L245)

```diff
-     const wp = "Splitter",
-       vp = "Sorting Gate",
-       tp = new Set(yp.N),
-       Hp = new Set([...yp.N, "Belt Loader", "Fast Loader", vp]),
-       dp = new Set(yp.z),
-       ep = [
-         [1, 0, 0],
-         [-1, 0, 0],
-         [0, 0, 1],
-         [0, 0, -1],
-         [0, 1, 0],
-         [0, -1, 0]
-       ];
- 
-     function jp(pp) {
-       var ip, cp;
- ... (1 more removed lines; see GitHub link above)
+     wQ.NoneLogLevel = 0, wQ.MessageLogLevel = 1, wQ.WarningLogLevel = 2, wQ.ErrorLogLevel = 4, wQ.AllLogLevel = 7, wQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ._Levels =  … [truncated]
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
+     }], wQ.errorsCount = 0, wQ.Log = wQ._LogEnabled.bind(wQ, wQ.MessageLogLevel), wQ.Warn = wQ._LogEnabled.bind(wQ, wQ.WarningLogLevel), wQ.Error = wQ._LogEnabled.bind(wQ, wQ.ErrorLogLevel)
+   },
+   61526: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+ ... (44 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L247-L249` → after: `L419-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L419-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L419-L449) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L247-L249)

```diff
- 
-     function kp(pp) {
-       return jp(pp) === yp.l && (0, yp.U)(Op.e[pp].name)
+     gQ.VertexUrl = "fxaa", gQ.FragmentUrl = "fxaa", gQ.Uniforms = ["texelSize"];
+     class JQ extends TQ.b {
+       getClassName() {
+         return "FxaaPostProcess"
+       }
+       constructor(QQ, WQ) {
+         let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           qQ = arguments.length > 3 ? arguments[3] : void 0,
+           TQ = arguments.length > 4 ? arguments[4] : void 0,
+           zQ = arguments.length > 5 ? arguments[5] : void 0,
+           sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
+         const FQ = {
+           uniforms: gQ.Uniforms,
+           size: "number" === typeof WQ ? WQ : void 0,
+           camera: XQ,
+           samplingMode: qQ || wQ.g.BILINEAR_SAMPLINGMODE,
+ ... (15 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L251-L265` → after: `L451-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L451-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L451-L468) · [Before (L251-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L251-L265)

```diff
-     var mp = cp(9383),
-       Rp = cp(9404);
-     const qp = [
-       [1, 0, 0],
-       [-1, 0, 0],
-       [0, 0, 1],
-       [0, 0, -1]
-     ];
- 
-     function Mp(pp) {
-       var ip, cp;
-       const op = null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.meta;
-       return (null === op || void 0 === op ? void 0 : op.rootName) !== Rp.p ? null : {
-         rot: null !== (cp = op.rot) && void 0 !== cp ? cp : 1,
-         half: (0, Rp.i)(op.rootName, op.metaStr)
+     var rQ = XQ(38956),
+       IQ = XQ(40357),
+       jQ = XQ(42076),
+       BQ = XQ(42062),
+       yQ = XQ(40164);
+     const VQ = 0;
+     class DQ {
+       constructor(QQ, WQ, XQ) {
+         this.name = QQ, this._parentTask = WQ, this._context = XQ, this.disabled = !1
+       }
+       setInitializeFunc(QQ) {
+         this._initFunc = QQ
+       }
+       setExecuteFunc(QQ) {
+         this._executeFunc = QQ
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L268-L270` → after: `L478-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L478-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L478-L494) · [Before (L268-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L268-L270)

```diff
- 
-     function Cp(pp, ip, cp, Op) {
-       return Mp(pp(ip, cp, Op))
+     class pQ extends DQ {
+       static IsObjectListPass(QQ) {
+         return void 0 !== QQ.setObjectList
+       }
+       get objectList() {
+         return this._objectList
+       }
+       setObjectList(QQ) {
+         this._objectList = QQ
+       }
+       constructor(QQ, WQ, XQ, wQ) {
+         super(QQ, WQ, XQ), this._engine = wQ
+       }
+       _isValid() {
+         const QQ = super._isValid();
+         return QQ || (void 0 !== this._objectList ? null : "Object list is not set (call setObjectList to set it)")
+ ... (1 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L272-L279` → after: `L496-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L496-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L496-L550) · [Before (L272-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L272-L279)

```diff
- 
-     function Ep(pp, ip, cp, Op, op) {
-       let {
-         rot: Ip,
-         half: Sp
-       } = op;
-       const [xp, Lp] = (0, Rp.o)(Ip, Sp), Yp = Cp(pp, ip + xp, cp, Op + Lp);
-       return null !== Yp && Yp.rot === Ip && Yp.half === Rp.q[Sp]
+     class GQ extends DQ {
+       static IsRenderPass(QQ) {
+         return void 0 !== QQ.setRenderTarget
+       }
+       get renderTarget() {
+         return this._renderTarget
+       }
+       get renderTargetDepth() {
+         return this._renderTargetDepth
+       }
+       get frameGraphRenderTarget() {
+         return this._frameGraphRenderTarget
+       }
+       constructor(QQ, WQ, XQ, wQ) {
+         super(QQ, WQ, XQ), this._dependencies = new Set, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._engine = wQ
+       }
+ ... (39 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L281-L284` → after: `L552-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L552-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L552-L555) · [Before (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L281-L284)

```diff
-     var Xp = cp(38633);
-     const lp = [new class {
-       constructor() {
-         this.reshapeOffsets = Wp
+     var UQ = XQ(37399);
+     class bQ {
+       get name() {
+         return this._name
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L286-L306` → after: `L557-L631`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L557-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L557-L631) · [Before (L286-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L286-L306)

```diff
-       handles(pp) {
-         var ip;
-         return "Stairs" === (null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.model)
-       }
-       affects(pp) {
-         return this.handles(pp)
-       }
-       shape(pp, ip, cp, op, Ip) {
-         const Sp = this.stairsOf(Ip),
-           xp = this.cornerAt(pp, ip, cp, op, Sp),
-           Yp = Sp.half === Lp.c.top ? "top" : "bot";
-         return (0, Op.f)(`${Op.e[Ip].meta.rootName}|meta|rot${Sp.rot}|${Yp}${null===xp?"":`|${xp}`}`)
-       }
-       stairsOf(pp) {
-         const {
-           rot: ip,
- ... (5 more removed lines; see GitHub link above)
+       set name(QQ) {
+         this._name = QQ
+       }
+       get disabled() {
+         return this._disabled
+       }
+       set disabled(QQ) {
+         this._disabled = QQ
+       }
+       get passes() {
+         return this._passes
+       }
+       get passesDisabled() {
+         return this._passesDisabled
+       }
+       getClassName() {
+ ... (59 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L309-L327` → after: `L634-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R634) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L634-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L634-L640) · [Before (L309-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L309-L327)

```diff
-       stairsAt(pp, ip, cp, Op) {
-         const op = pp(ip, cp, Op);
-         return this.handles(op) ? this.stairsOf(op) : null
-       }
-       cornerAt(pp, ip, cp, Op, op) {
-         let {
-           rot: Ip,
-           half: Sp
-         } = op;
-         const xp = Yp[Ip],
-           Lp = op => {
-             let [xp, Lp] = op;
-             const Yp = this.stairsAt(pp, ip + xp, cp, Op + Lp);
-             return null !== Yp && Yp.rot === Ip && Yp.half === Sp
-           },
-           Wp = this.stairsAt(pp, ip + xp[0], cp, Op + xp[1]);
- ... (3 more removed lines; see GitHub link above)
+       _execute() {
+         const QQ = this._disabled && this._passesDisabled.length > 0 ? this._passesDisabled : this._passes;
+         this.onBeforeTaskExecute.notifyObservers(this), this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const WQ of QQ) WQ._execute()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L329-L332` → after: `L642-L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L642-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L642-L650) · [Before (L329-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L329-L332)

```diff
-         const yp = this.stairsAt(pp, ip - xp[0], cp, Op - xp[1]);
-         if (null !== yp && yp.half === Sp) {
-           const pp = Yp[yp.rot];
-           if (Pp(xp, pp) && !Lp(pp)) return Ap(pp, Dp(xp)) ? "innerLeft" : "innerRight"
+         this.onAfterTaskExecute.notifyObservers(this)
+       }
+       _initializePasses() {
+         this._frameGraph.engine._debugPushGroup?.(`${this.getClassName()} (${this.name})`);
+         try {
+           for (const QQ of this._passes) QQ._initialize();
+           for (const QQ of this._passesDisabled) QQ._initialize()
+         } finally {
+           this._frameGraph.engine._debugPopGroup?.()
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L336-L338` → after: `L653-L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L653-L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L653-L658) · [Before (L336-L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L336-L338)

```diff
-     }, new class {
-       constructor() {
-         this.reshapeOffsets = Ip, this.rootIds = new Set(op.i.map((pp => (0, Op.f)(pp))))
+       _checkSameRenderTarget(QQ, WQ) {
+         if (null === QQ || null === WQ) return QQ === WQ;
+         if (QQ.length !== WQ.length) return !1;
+         for (let XQ = 0; XQ < QQ.length; XQ++)
+           if (QQ[XQ] !== WQ[XQ]) return !1;
+         return !0
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L340-L343` → after: `L660-L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L660-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L660-L663) · [Before (L340-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L340-L343)

```diff
-       handles(pp) {
-         var ip;
-         const cp = null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.meta;
-         return void 0 !== cp && this.rootIds.has(cp.rootId)
+     }
+     class vQ extends bQ {
+       get alphaMode() {
+         return this.postProcess.alphaMode
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L345-L346` → after: `L665-L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L665-L666) · [Before (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L345-L346)

```diff
-       affects(pp) {
-         return this.handles(pp)
+       set alphaMode(QQ) {
+         this.postProcess.alphaMode = QQ
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L348-L349` → after: `L668-L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L668-L669) · [Before (L348-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L348-L349)

```diff
-       placedBy(pp) {
-         return Op.e[pp].meta.rootName === op.p ? null : op.p
+       get drawWrapper() {
+         return this._postProcessDrawWrapper
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L351-L440` → after: `L671-L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L671-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L671-L675) · [Before (L351-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L351-L440)

```diff
-       shape(pp, ip, cp, Ip, Sp) {
-         const {
-           rootId: xp,
-           rootName: Lp,
-           rot: Yp
-         } = Op.e[Sp].meta;
-         let Dp = 0;
-         return op.x[Yp].forEach(((op, Sp) => {
-           var Lp;
-           let [Ap, Pp, Wp] = op;
-           const yp = null === (Lp = Op.e[pp(ip + Ap, cp + Pp, Ip + Wp)]) || void 0 === Lp ? void 0 : Lp.meta;
-           (null === yp || void 0 === yp ? void 0 : yp.rootId) === xp && yp.rot === Yp && (Dp |= 1 << Sp)
-         })), (0, Op.f)((0, op.f)(Lp, Yp, Dp))
-       }
-     }, ...Sp.b.map((pp => new xp.e(pp))), new class {
-       constructor() {
- ... (74 more removed lines; see GitHub link above)
+       constructor(QQ, WQ, XQ) {
+         super(QQ, WQ), this.sourceSamplingMode = 2, this.depthReadOnly = !1, this.stencilReadOnly = !1, this.disableColorWrite = !1, this.drawBackFace = !1, this.depthTest = !0, this.postProcess = XQ, this._postProcessDrawWrapper = this.postProcess.drawWrapper, this.outputTexture … [truncated]
+       }
+       isReady() {
+         return this.postProcess.isReady()
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L442-L446` → after: `L677-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L677-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L677-L701) · [Before (L442-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L442-L446)

```diff
-       reshapedHalf(pp, ip, cp, Op, op) {
-         if (null !== op.half && Ep(pp, ip, cp, Op, op)) return op.half;
-         for (const Ip of ["right", "left"]) {
-           const [Sp, xp] = (0, Rp.o)(op.rot, Ip), Lp = Cp(pp, ip + Sp, cp, Op + xp);
-           if (null !== Lp && Lp.rot === op.rot && Lp.half === Rp.q[Ip]) return Ip
+       getClassName() {
+         return "FrameGraphPostProcessTask"
+       }
+       record() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           WQ = arguments.length > 1 ? arguments[1] : void 0,
+           XQ = arguments.length > 2 ? arguments[2] : void 0;
+         if (void 0 === this.sourceTexture && void 0 === this.targetTexture) throw new Error(`FrameGraphPostProcessTask "${this.name}": sourceTexture or targetTexture is required`);
+         const wQ = void 0 !== this.sourceTexture ? this._frameGraph.textureManager.getTextureCreationOptions(this.sourceTexture) : void 0;
+         if (wQ && (wQ.options.samples = 1), this._frameGraph.textureManager.resolveDanglingHandle(this.outputTexture, this.targetTexture, this.name, wQ), void 0 !== this.depthAttachmentTexture && this._frameGraph.textureManager.resolveDanglingHandle(this.outputDepthAttachmentText … [truncated]
+           const QQ = this._frameGraph.textureManager.getTextureAbsoluteDimensions(wQ);
+           this._sourceWidth = QQ.width, this._sourceHeight = QQ.height
+         }
+         const qQ = this._frameGraph.textureManager.getTextureDescription(this.outputTexture);
+         this._outputWidth = qQ.size.width, this._outputHeight = qQ.size.height;
+         const TQ = this._frameGraph.addRenderPass(this.name);
+ ... (9 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L448` → after: `L703-L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L703-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L703-L706) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L448)

```diff
-         return null
+         return TQ
+       }
+       dispose() {
+         this.postProcess.dispose(), super.dispose()
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L458-L462` → after: `L709-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L709-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L709-L721) · [Before (L458-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L458-L462)

```diff
- 
-     function Jp(pp) {
-       for (const Op of lp) {
-         var ip, cp;
-         if (Op.handles(pp)) return null !== (ip = null === (cp = Op.placedBy) || void 0 === cp ? void 0 : cp.call(Op, pp)) && void 0 !== ip ? ip : null
+     class dQ extends vQ {
+       constructor(QQ, WQ, XQ) {
+         super(QQ, WQ, XQ || new gQ(QQ, WQ.engine))
+       }
+       getClassName() {
+         return "FrameGraphFXAATask"
+       }
+       record() {
+         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
+           WQ = arguments.length > 1 ? arguments[1] : void 0,
+           XQ = arguments.length > 2 ? arguments[2] : void 0;
+         const wQ = super.record(QQ, WQ, XQ);
+         return this.postProcess.texelSize.x = 1 / this._sourceWidth, this.postProcess.texelSize.y = 1 / this._sourceHeight, wQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L466-L487` → after: `L724-L730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L724-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L724-L730) · [Before (L466-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L466-L487)

```diff
-   },
-   38633: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => Rp,
-       e: () => dp,
-       h: () => Hp
-     });
-     var Op = cp(9338),
-       op = cp(9359),
-       Ip = cp(9427),
-       Sp = cp(38636),
-       xp = cp(9422);
-     const Lp = (0, Sp.D)("pipe"),
-       Yp = (0, Sp.D)("tank"),
-       Dp = (0, Sp.D)("port"),
-       Ap = "Reactor Port";
- ... (6 more removed lines; see GitHub link above)
+     var HQ = XQ(42070);
+     class aQ extends vQ {
+       constructor(QQ, WQ, XQ) {
+         super(QQ, WQ, XQ || new HQ.g(QQ, WQ.engine))
+       }
+       getClassName() {
+         return "FrameGraphPassTask"
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L491-L492` → after: `L824-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L824-L825) · [Before (L491-L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L491-L492)

```diff
-         water: Pp(!0, ["Condenser"], ["Centrifuge", "Synthesizer", Sp.b]),
-         cryo: Pp(!1, [Sp.b], [])
+       FindMainCamera: function(QQ) {
+         return QQ.findMainCamera()
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L494-L501` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L827-L828) · [Before (L494-L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L494-L501)

```diff
-       yp = new Set([...Wp.water.roots, ...Wp.cryo.roots]),
-       Up = {
-         nx: [-1, 0, 0],
-         ny: [0, -1, 0],
-         nz: [0, 0, -1],
-         px: [1, 0, 0],
-         py: [0, 1, 0],
-         pz: [0, 0, 1]
+       FindMainObjectRenderer: function(QQ) {
+         return QQ.findMainObjectRenderer()
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L503-L523` → after: `L830-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L830-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L830-L845) · [Before (L503-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L503-L523)

```diff
-       wp = op.g.map((pp => Up[pp])),
-       vp = wp.map((pp => {
-         let [ip, cp, Op] = pp;
-         return Sp.s.findIndex((pp => {
-           let [op, Ip, Sp] = pp;
-           return op === ip && Ip === cp && Sp === Op
-         }))
-       }));
- 
-     function tp(pp) {
-       let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
-       const cp = Op.e[pp],
-         op = null === cp || void 0 === cp ? void 0 : cp.meta.rootName,
-         Pp = Wp[ip];
-       if (!op || !Pp.roots.has(op)) return null;
-       if ((0, Ip.i)(op)) return (0, Sp.B)(cp.name) === ip ? Lp : null;
- ... (5 more removed lines; see GitHub link above)
+       CreateUtilityLayerRenderer: function(QQ) {
+         let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+         const XQ = QQ.cB,
+           wQ = new RQ(XQ, WQ, !0);
+         wQ.utilityLayerScene.activeCamera = XQ.activeCamera;
+         let qQ = EQ.FindMainCamera(XQ.frameGraph);
+         !qQ && XQ.cameras.length > 0 && (qQ = XQ.cameras[0]), qQ && (wQ.setRenderCamera(qQ), wQ.utilityLayerScene.activeCamera = qQ);
+         const TQ = XQ.onAfterRenderObservable.add((() => {
+           wQ.render()
+         }));
+         return wQ.utilityLayerScene.yE.addOnce((() => {
+           XQ.onAfterRenderObservable.remove(TQ)
+         })), wQ
+       }
+     };
+     let CQ = null;
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L526` → after: `L848-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L848-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L848-L852) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L526)

```diff
-       let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
+       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         zQ = arguments.length > 6 ? arguments[6] : void 0,
+         sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L528-L535` → after: `L854-L885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L854-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L854-L885) · [Before (L528-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L528-L535)

```diff
-         makers: xp
-       } = Wp[Ip];
-       return wp.some(((Yp, Dp) => {
-         var Ap, Pp;
-         let [Wp, yp, Up] = Yp;
-         const wp = pp(ip + Wp, cp + yp, op + Up),
-           Hp = tp(wp, Ip);
-         return null !== Hp && xp.has(null !== (Ap = null === (Pp = Op.e[wp]) || void 0 === Pp ? void 0 : Pp.meta.rootName) && void 0 !== Ap ? Ap : "") && !(0, Sp.G)(Lp, Hp, vp[Dp])
+         height: PQ,
+         width: gQ
+       } = oQ(QQ, WQ, XQ);
+       if (!PQ || !gQ) return void rQ.b.Error("Invalid 'size' parameter !");
+       const JQ = WQ.sE();
+       let jQ = JQ.activeCamera !== WQ;
+       if (JQ.frameGraph) {
+         const QQ = EQ.FindMainObjectRenderer(JQ.frameGraph);
+         QQ && (jQ = QQ.camera !== WQ)
+       }
+       jQ ? fQ(QQ, WQ, XQ, (QQ => {
+         if (TQ) {
+           const WQ = new Blob([QQ]);
+           IQ.g.DownloadBlob(WQ), wQ && wQ("")
+         } else wQ && wQ(QQ)
+       }), qQ, 1, QQ.getCreationOptions().antialias, void 0, void 0, void 0, void 0, zQ) : QQ.onEndFrameObservable.addOnce((() => {
+ ... (16 more added lines; see GitHub link above)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L538-L541` → after: `L888-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L888-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L888-L898) · [Before (L538-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L538-L541)

```diff
- 
-     function dp(pp) {
-       const ip = Op.e[pp];
-       return ip ? (0, Sp.B)(ip.name) : null
+     async function LQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         qQ = arguments.length > 4 ? arguments[4] : void 0,
+         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
+       return await new Promise(((FQ, PQ) => {
+         uQ(QQ, WQ, XQ, (QQ => {
+           "undefined" !== typeof QQ ? FQ(QQ) : PQ(new Error("Data is undefined"))
+         }), wQ, sQ, qQ, TQ, zQ)
+       }))
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L543-L556` → after: `L900-L911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L900-L911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L900-L911) · [Before (L543-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L543-L556)

```diff
-     let ep = null;
- 
-     function jp(pp) {
-       if (!ep) {
-         ep = new Map;
-         for (const pp of ["water", "cryo"])
-           for (let ip = 0; ip < 64; ip++)
-             for (const cp of [!1, !0]) ep.set((0, Ip.j)(pp, ip, cp), {
-               tW: pp,
-               mask: ip,
-               full: cp
-             })
-       }
-       return ep.get(pp)
+     async function kQ(QQ, WQ, XQ, wQ) {
+       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         TQ = arguments.length > 5 ? arguments[5] : void 0,
+         zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
+       return await new Promise((sQ => {
+         uQ(QQ, WQ, {
+           width: XQ,
+           height: wQ
+         }, (() => {
+           sQ()
+         }), qQ, !0, TQ, zQ)
+       }))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L562-L572` → after: `L914-L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L914-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L914-L1002) · [Before (L562-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L562-L572)

```diff
-     function mp(pp, ip, cp, op, Ip, Sp) {
-       return wp.some(((xp, Lp) => {
-         var Yp, Dp, Ap;
-         let [Pp, Wp, yp] = xp;
-         if (0 === (Sp >> Lp & 1)) return !1;
-         const Up = null !== (Yp = null === (Dp = Op.e[pp(ip + Pp, cp + Wp, op + yp)]) || void 0 === Dp ? void 0 : Dp.name) && void 0 !== Yp ? Yp : "",
-           wp = jp(Up);
-         return wp ? wp.tW === Ip && wp.full : (null !== (Ap = function(pp) {
-           var ip;
-           return null !== (ip = kp.get(pp)) && void 0 !== ip ? ip : null
-         }(Up)) && void 0 !== Ap ? Ap : 0) > 0
+     function fQ(QQ, WQ, TQ, zQ) {
+       let sQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png",
+         FQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
+         PQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         gQ = arguments.length > 7 ? arguments[7] : void 0,
+         IQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         VQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         DQ = !(arguments.length > 10 && void 0 !== arguments[10]) || arguments[10],
+         pQ = arguments.length > 11 ? arguments[11] : void 0,
+         GQ = arguments.length > 12 ? arguments[12] : void 0,
+         UQ = arguments.length > 13 ? arguments[13] : void 0,
+         bQ = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : 3e4,
+         vQ = arguments.length > 15 ? arguments[15] : void 0;
+       const dQ = WQ.sE();
+       if (dQ.frameGraph) return void tQ(dQ.frameGraph, WQ, TQ, sQ, FQ, PQ, gQ, pQ, UQ, !zQ).then((QQ => {
+         zQ && zQ(QQ)
+ ... (73 more added lines; see GitHub link above)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L575-L580` → after: `L1005-L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1005-L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L1005-L1059) · [Before (L575-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L575-L580)

```diff
-     class Rp {
-       constructor() {
-         this.reshapeOffsets = wp
-       }
-       handles(pp) {
-         return null !== dp(pp)
+     async function tQ(QQ, WQ, XQ) {
+       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "image/png",
+         qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
+         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         zQ = arguments.length > 6 ? arguments[6] : void 0,
+         sQ = arguments.length > 7 ? arguments[7] : void 0,
+         FQ = arguments.length > 8 ? arguments[8] : void 0,
+         PQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         gQ = arguments.length > 10 ? arguments[10] : void 0;
+       const JQ = QQ.engine,
+         rQ = QQ.textureManager,
+         {
+           height: IQ,
+           width: BQ,
+           finalWidth: yQ,
+           finalHeight: DQ
+ ... (39 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L582-L584` → after: `L1061-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1061-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L1061-L1077) · [Before (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L582-L584)

```diff
-       affects(pp) {
-         var ip, cp;
-         return yp.has(null !== (ip = null === (cp = Op.e[pp]) || void 0 === cp ? void 0 : cp.meta.rootName) && void 0 !== ip ? ip : "")
+       if (yQ !== BQ || DQ !== IQ) {
+         const WQ = new aQ("pass", QQ);
+         WQ.sourceTexture = lQ, WQ.targetTexture = QQ.textureManager.createRenderTargetTexture("pass_output", {
+           size: {
+             width: yQ,
+             height: DQ
+           },
+           options: {
+             createMipMaps: !1,
+             types: [0],
+             formats: [5],
+             samples: 1,
+             labels: ["screenshot_final_texture"],
+             useSRGBBuffers: [!1]
+           },
+           sizeIsPercentage: !1
+ ... (1 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L586-L613` → after: `L1079-L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1079-L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L1079-L1108) · [Before (L586-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L586-L613)

```diff
-       placedBy(pp) {
-         var ip;
-         return (null === (ip = Op.e[pp]) || void 0 === ip ? void 0 : ip.meta.rootName) === Ip.c ? Ip.d : null
-       }
-       shape(pp, ip, cp, op, xp, Yp) {
-         var Dp, Ap, Pp;
-         const Wp = null !== (Dp = null === (Ap = Op.e[xp]) || void 0 === Ap ? void 0 : Ap.name) && void 0 !== Dp ? Dp : "",
-           yp = Yp || Wp !== Ip.d ? null !== (Pp = (0, Sp.B)(Wp)) && void 0 !== Pp ? Pp : "water" : function(pp, ip, cp, Op) {
-             return wp.some(((op, Ip) => {
-               let [xp, Yp, Dp] = op;
-               const Ap = tp(pp(ip + xp, cp + Yp, Op + Dp), "cryo");
-               return null !== Ap && "port" !== Ap.kind && (0, Sp.G)(Lp, Ap, vp[Ip])
-             })) ? "cryo" : "water"
-           }(pp, ip, cp, op),
-           Up = function(pp, ip, cp, Op) {
-             let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water",
- ... (12 more removed lines; see GitHub link above)
+       const hQ = EQ.FindMainObjectRenderer(QQ);
+       let iQ = null;
+       hQ && (iQ = hQ.camera, hQ.camera = WQ), JQ.getCaps().parallelShaderCompile = void 0, await QQ.buildAsync();
+       const cQ = gQ ?? (rQ.hasHistoryTextures ? 32 : 1);
+       for (let jQ = 0; jQ < cQ; ++jQ) QQ.execute();
+       QQ.pausedExecution = !0, JQ.getCaps().parallelShaderCompile = HQ;
+       for (let jQ = bQ; jQ < UQ.length; ++jQ) QQ.tasks[jQ].dispose();
+       QQ.tasks.length = bQ, hQ && iQ && (hQ.camera = iQ);
+       const AQ = QQ.textureManager.getTextureFromHandle(lQ);
+       return AQ.incrementReferences(), rQ.resetBackBufferTextures(), await QQ.buildAsync(), QQ.pausedExecution = vQ, new Promise((QQ => {
+         JQ._readTexturePixels(AQ, yQ, DQ, -1, 0, null, !0, !1, 0, 0).then((async WQ => {
+           AQ.dispose(), GQ(yQ, DQ, WQ, PQ ? void 0 : WQ => QQ(WQ), wQ, zQ, !0, void 0, sQ), PQ && QQ(null)
+         }))
+       }))
+     }
+ 
+ ... (14 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L616-L641` → after: `L1111-L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1111-L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L1111-L1119) · [Before (L616-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L616-L641)

```diff
-   },
-   38399: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Op,
-       e: () => Ip
-     });
-     const Op = ["Chest", "Loot Chest", "Moonstone Chest"],
-       op = [{
-         name: "Workbench",
-         exactMatch: !0
-       }, {
-         name: "Furnace",
-         exactMatch: !0
-       }, {
-         name: "Artisan Bench",
-         exactMatch: !0
- ... (10 more removed lines; see GitHub link above)
+     const eQ = {
+       CreateScreenshot: uQ,
+       CreateScreenshotAsync: LQ,
+       CreateScreenshotWithResizeAsync: kQ,
+       CreateScreenshotUsingRenderTarget: fQ,
+       CreateScreenshotUsingRenderTargetAsync: SQ,
+       CreateScreenshotForFrameGraphAsync: tQ
+     };
+     let nQ = !1;
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/247.js` (Changed code · before: `L643-L644` → after: `L1121-L1124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0R1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-6e0b9eb69e94328949cf1f2d1085ec3f624352927ac93d09f61a49bcb62215d0) · [After (L1121-L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/247.js#L1121-L1124) · [Before (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/247.js#L643-L644)

```diff
-     function Ip(pp) {
-       return op.find((ip => ip.exactMatch ? pp === ip.name : pp.includes(ip.name)))
+     function xQ() {
+       if (nQ) return;
+       nQ = !0;
+       IQ.g.CreateScreenshot = uQ, IQ.g.CreateScreenshotAsync = LQ, IQ.g.CreateScreenshotUsingRenderTarget = fQ, IQ.g.CreateScreenshotUsingRenderTargetAsync = SQ
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/248.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/248.js` (38 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016)

#### 1. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4-L1541` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L4) · [Before (L4-L1541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L4-L1541)

```diff
-   39281: (pp, ip, cp) => {
-     function Op(pp) {
-       return !(!pp.lobbyLeaderboardInfo && !pp.lobbyManage)
-     }
-     cp.d(ip, {
-       d: () => Op
-     })
-   },
-   39208: (pp, ip, cp) => {
-     cp.d(ip, {
-       b: () => Ip
-     });
-     var Op = cp(34),
-       op = cp(1982);
- 
-     function Ip(pp) {
- ... (1522 more removed lines; see GitHub link above)
+   38041: (QQ, WQ, XQ) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1543-L1851` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L6) · [Before (L1543-L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L1543-L1851)

```diff
-       e: () => zc,
-       h: () => cO
-     });
-     var Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp, bp, hp, ap, np, Fp, gp, Gp, rp, Zp, zp, sp, Kp, Vp, ii, ci, Oi, oi, Ii, Si, xi, Li, Yi, Di, Ai, Pi, Wi, yi, Ui, wi, vi, ti, Hi, di,  … [truncated]
-       cc = cp(37387),
-       Oc = cp(39164),
-       oc = cp(39169),
-       Ic = cp(9253),
-       Sc = cp(636),
-       xc = cp(629),
-       Lc = cp(36994);
-     let Yc = (Op = (0, Ic.type)("number"), op = (0, Ic.type)("number"), Ip = (0, Ic.type)("number"), Sp = (0, Ic.type)("number"), xp = (0, Ic.type)("number"), Lp = (0, Ic.type)("number"), Yp = (0, Ic.type)("string"), Dp = class extends Ic.Schema {
-         constructor() {
-           super(...arguments), (0, Oc.c)(this, "id", Ap, this), (0, Oc.c)(this, "amount", Pp, this), (0, Oc.c)(this, "x", Wp, this), (0, Oc.c)(this, "y", yp, this), (0, Oc.c)(this, "z", Up, this), (0, Oc.c)(this, "size", wp, this), (0, Oc.c)(this, "attributes", vp, this)
-         }
-       }, Ap = (0, oc.b)(Dp.prototype, "id", [Op], {
- ... (293 more removed lines; see GitHub link above)
+       e: () => qQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1853-L1919` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L8) · [Before (L1853-L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L1853-L1919)

```diff
- 
-     function yc(pp) {
-       return Object.keys(Ic.Metadata.getFields(pp))
-     }
-     const Uc = yc(Wc);
-     for (const OO of Sc.q)
-       if (!Uc.includes(OO)) throw new Error(`Mob Schema is missing a networked property: "${OO}"`);
-     const wc = yc((ni = (0, Ic.type)("string"), Fi = (0, Ic.type)("float32"), gi = (0, Ic.type)("float32"), Gi = (0, Ic.type)("float32"), ri = (0, Ic.type)("float32"), Zi = class extends Ac {
-       constructor() {
-         super(...arguments), (0, Oc.c)(this, "soundName", zi, this), (0, Oc.c)(this, "volume", si, this), (0, Oc.c)(this, "refDistance", Ki, this), (0, Oc.c)(this, "maxHearDist", Vi, this), (0, Oc.c)(this, "rate", pc, this)
-       }
-     }, zi = (0, oc.b)(Zi.prototype, "soundName", [ni], {
-       configurable: !0,
-       enumerable: !0,
-       writable: !0,
-       initializer: function() {
- ... (51 more removed lines; see GitHub link above)
+     var wQ = XQ(38047);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L1921-L2382` → after: `L10-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L10-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L10-L13) · [Before (L1921-L2382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L1921-L2382)

```diff
-       constructor(pp, ip) {
-         this.bloxd = pp, this.eId = ip, this.HP = void 0, this.colyseusEntity = void 0, this.canSeeSub = void 0, this.canAttackSub = void 0, this.interactableSub = void 0, this.overlayColourSub = void 0, this.opacitySub = void 0, this.zIndexSub = void 0, this.multilineTextBoxSub  … [truncated]
-       }
-       initClient(pp) {
-         var ip, cp, Op;
-         this.colyseusEntity = pp, this.meshKind = pp.meshKind, this.meshOpts = pp.meshOpts, this.leaderboardTop = pp.leaderboardTop, this.HP.Yk.add([pp.x, pp.y, pp.z], 1, 1, null, null, !1, !1, this.eId), this.HP.Yk.vJ(this.eId, "smoothToServerPos");
-         const op = "Person" === this.meshKind;
-         this.HP.Yk.vJ(this.eId, "meshRotation", {
-           isServerControlled: !0,
-           ...op ? {
-             defaultRotationsPerSecond: .5
-           } : {},
-           childrenNodeParams: op ? [{
-             nodeName: "HeadMesh",
-             softTolerance: qc.k,
-             hardTolerance: null
- ... (446 more removed lines; see GitHub link above)
+       static GetPlanes(QQ) {
+         const WQ = [];
+         for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
+         return qQ.GetPlanesToRef(QQ, WQ), WQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2384-L2405` → after: `L15-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L15-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L15-L17) · [Before (L2384-L2405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2384-L2405)

```diff
-       handleFollowingEIdChange(pp, ip, cp) {
-         const Op = (0, bc.b)(pp),
-           op = Op === this.HP.NJ;
-         if (this.HP.Yk.HJ(Op, this.HP.Yk.names.Qm), cp) this.HP.Yk.HJ(Op, "smoothToServerPos"), this.HP.Yk.vJ(Op, this.HP.Yk.names.Qm, {
-           vy: (0, bc.b)(cp),
-           offset: Array.from(ip.followingOffset),
-           Mcp: ip.shouldMatchFollowingEntityRotation,
-           Qcp: !0,
-           Jcp: (pp, Op) => {
-             if (Ec().copy(pp, ip.followingOffset), ip.ridingVehicleEId === cp) {
-               const ip = (0, bc.b)(cp),
-                 op = (0, nc.d)().getEntityHeading(ip, Op);
-               Ec().wi(pp, pp, Ec().ZERO, op)
-             }
-           }
-         });
- ... (6 more removed lines; see GitHub link above)
+       static GetNearPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2407-L2413` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L19-L21) · [Before (L2407-L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2407-L2413)

```diff
-       handleRotationChange(pp, ip, cp) {
-         const Op = "xRotation" === ip ? 0 : "yRotation" === ip ? 1 : 2;
-         for (const op of (0, nc.d)().getFollowingEntities(pp)) {
-           const pp = this.HP.Yk.getState(op, "meshRotation"),
-             ip = this.HP.Yk.qcp(op);
-           pp && ip.Mcp && (pp.serverSetRotation[Op] = cp)
-         }
+       static GetFarPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2415-L2433` → after: `L23-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L23-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L23-L25) · [Before (L2415-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2415-L2433)

```diff
-       handleScaleChange(pp, ip) {
-         const cp = (0, bc.b)(pp);
-         if (ic.m.GA(`entityScale|${cp}`, ip), cp === this.HP.NJ) {
-           var Op;
-           (0, nc.d)().removeFromEyeHeightCache(cp);
-           const pp = this.HP.Yk.xip(this.HP.NJ),
-             ip = null !== (Op = null === pp || void 0 === pp ? void 0 : pp.physicsState) && void 0 !== Op ? Op : {
-               type: hc.l.DEFAULT,
-               tier: null
-             };
-           return void(0, nc.d)().updatePositionAndPhysics(this.HP.NJ, ip, !1)
-         }
-         const op = (0, nc.d)().getLifeformType(cp);
-         if (null === op) return;
-         const {
-           physicsBodyWidth: Ip,
- ... (3 more removed lines; see GitHub link above)
+       static GetLeftPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] + XQ[0], WQ.normal.y = XQ[7] + XQ[4], WQ.normal.z = XQ[11] + XQ[8], WQ.d = XQ[15] + XQ[12], WQ.normalize()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2435-L2442` → after: `L27-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L27-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L27-L29) · [Before (L2435-L2442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2435-L2442)

```diff
-       handleBaseRenderHeadingChange(pp, ip) {
-         const cp = this.HP.Yk.getState(pp, "meshRotation");
-         cp && (cp.baseRenderRotation[1] = ip);
-         for (const Op of (0, nc.d)().getFollowingEntities(pp)) {
-           const pp = this.HP.Yk.getState(Op, "meshRotation"),
-             cp = this.HP.Yk.qcp(Op);
-           pp && cp.Mcp && (pp.baseRenderRotation[1] = ip)
-         }
+       static GetRightPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] - XQ[0], WQ.normal.y = XQ[7] - XQ[4], WQ.normal.z = XQ[11] - XQ[8], WQ.d = XQ[15] - XQ[12], WQ.normalize()
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2444-L2449` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L31-L33) · [Before (L2444-L2449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2444-L2449)

```diff
-       handleFollowingOffsetChange(pp, ip) {
-         const cp = this.HP.Yk.qcp((0, bc.b)(pp));
-         if (cp && cp.offset) {
-           const pp = ip ? Array.from(ip) : Ec().ZERO;
-           cp.offset[0] = pp[0], cp.offset[1] = pp[1], cp.offset[2] = pp[2]
-         }
+       static GetTopPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] - XQ[1], WQ.normal.y = XQ[7] - XQ[5], WQ.normal.z = XQ[11] - XQ[9], WQ.d = XQ[15] - XQ[13], WQ.normalize()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2451-L2453` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L35-L37) · [Before (L2451-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2451-L2453)

```diff
-       handleShouldMatchFollowingEntityRotationChange(pp, ip) {
-         const cp = this.HP.Yk.qcp((0, bc.b)(pp));
-         cp && (cp.Mcp = null === ip || void 0 === ip || ip)
+       static GetBottomPlaneToRef(QQ, WQ) {
+         const XQ = QQ.m;
+         WQ.normal.x = XQ[3] + XQ[1], WQ.normal.y = XQ[7] + XQ[5], WQ.normal.z = XQ[11] + XQ[9], WQ.d = XQ[15] + XQ[13], WQ.normalize()
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2455-L2488` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L39-L40) · [Before (L2455-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2455-L2488)

```diff
-       handlePositionChange(pp, ip, cp) {
-         if (this.HP.Yk.hpp(pp, "smoothToServerPos")) {
-           const Op = this.HP.Yk.getState(pp, "smoothToServerPos");
-           (0, rc.setServerPositionAxis)(Op, pO[ip], cp)
-         }
-       }
-       setupItemHandlers() {
-         this.roomStateCallbacks.items.Lk(((pp, ip) => {
-           this.allItems[ip] = pp, (0, ac.h)(this.HP, ip, [pp.x, pp.y, pp.z], pp.id, {
-             amount: pp.amount,
-             attributes: JSON.parse(pp.attributes),
-             Vo: (0, cc.e)(this.HP).cantPickUpItem(ip),
-             size: pp.size,
-             predictedAt: (0, nc.d)().client.itemDropPrediction.onServerItemAdded(ip)
-           });
-           const cp = this.createStateCallbacks(pp);
- ... (18 more removed lines; see GitHub link above)
+       static GetPlanesToRef(QQ, WQ) {
+         qQ.GetNearPlaneToRef(QQ, WQ[0]), qQ.GetFarPlaneToRef(QQ, WQ[1]), qQ.GetLeftPlaneToRef(QQ, WQ[2]), qQ.GetRightPlaneToRef(QQ, WQ[3]), qQ.GetTopPlaneToRef(QQ, WQ[4]), qQ.GetBottomPlaneToRef(QQ, WQ[5])
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2490-L2499` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L42-L45) · [Before (L2490-L2499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2490-L2499)

```diff
-       dispose() {
-         if (!this.Ry) {
-           this.Ry = !0, this.HP.off("beforeInputs", this.onFrame), this.HP.off("LP", this.gH), this.queuedSetups.clear(), this.promotedSetups.clear();
-           for (const pp of this.deferredSetups.values()) ic.m.unsubscribe(pp);
-           this.deferredSetups.clear(), this.HP.Yk.HJ(this.HP.NJ, this.HP.Yk.names.Qm);
-           for (const pp in this.allItems) this.HP.Yk.deleteEntity(pp), delete this.allItems[pp];
-           for (const pp of [...this.detachers.keys()]) this.detach(pp);
-           (0, cc.e)(this.HP).clear();
-           for (const pp of (0, nc.d)().client.iterateEntityIds())(0, nc.d)().client.disposeEntity(pp)
-         }
+       static IsPointInFrustum(QQ, WQ) {
+         for (let XQ = 0; XQ < 6; XQ++)
+           if (WQ[XQ].dotCoordinate(QQ) < 0) return !1;
+         return !0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2696` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L49) · [Before (L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2696)

```diff
-   39201: (pp, ip, cp) => {
+   38047: (QQ, WQ, XQ) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2698-L2699` → after: `L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L51) · [Before (L2698-L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2698-L2699)

```diff
-       d: () => Ip,
-       e: () => Sp
+       b: () => qQ
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2701-L2703` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L53) · [Before (L2701-L2703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2701-L2703)

```diff
-     var Op = cp(640),
-       op = cp(37942);
-     const Ip = 4e4;
+     var wQ = XQ(37370);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2705-L2707` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L55-L56) · [Before (L2705-L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2705-L2707)

```diff
-       constructor() {
-         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now;
-         this.now = pp, this.editedAt = new Map, this.lastChunkX = NaN, this.lastChunkY = NaN, this.lastChunkZ = NaN, this.lastChunkId = ""
+       constructor(QQ, WQ, XQ, qQ) {
+         this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2709-L2720` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L58-L59) · [Before (L2709-L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2709-L2720)

```diff
-       noteEdit(pp, ip, cp) {
-         const Ip = (0, Op.Q)(pp),
-           Sp = (0, Op.Q)(ip),
-           xp = (0, Op.Q)(cp),
-           Lp = this.now();
-         if (Ip !== this.lastChunkX || Sp !== this.lastChunkY || xp !== this.lastChunkZ) {
-           this.lastChunkX = Ip, this.lastChunkY = Sp, this.lastChunkZ = xp, this.lastChunkId = (0, op.c)(Ip, Sp, xp), this.editedAt.delete(this.lastChunkId), this.editedAt.set(this.lastChunkId, Lp);
-           for (const [pp, ip] of this.editedAt) {
-             if (ip >= Lp - 3e5) break;
-             this.editedAt.delete(pp)
-           }
-         } else this.editedAt.set(this.lastChunkId, Lp)
+       awQ() {
+         return [this.normal.x, this.normal.y, this.normal.z, this.d]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2722-L2725` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L61-L62) · [Before (L2722-L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2722-L2725)

```diff
-       chunksEditedSince(pp) {
-         const ip = [];
-         for (const [cp, Op] of this.editedAt) Op >= pp && ip.push(cp);
-         return ip
+       clone() {
+         return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2727-L2757` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L64-L65) · [Before (L2727-L2757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2727-L2757)

```diff
-     }
-   },
-   39252: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Ui,
-       i: () => Fi,
-       l: () => Qi,
-       n: () => gi
-     });
-     var Op = cp(3774),
-       op = cp(8895),
-       Ip = cp(36869),
-       Sp = cp(1466),
-       xp = cp(36942),
-       Lp = cp(39160),
-       Yp = cp(39152),
- ... (15 more removed lines; see GitHub link above)
+       getClassName() {
+         return "Plane"
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2759-L2762` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L67-L69) · [Before (L2759-L2762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2759-L2762)

```diff
-       click() {
-         this.clicks.enqueue(Date.now());
-         const pp = Date.now() - this.storeForMs;
-         for (; this.clicks.size > 0 && this.clicks.peek() < pp;) this.clicks.dequeue()
+       getHashCode() {
+         let QQ = this.normal.getHashCode();
+         return QQ = 397 * QQ ^ this.d, QQ
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2764` → after: `L71-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L71-L72) · [Before (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2764)

```diff
-       getNumClicksInMs(pp) {
+       normalize() {
+         const QQ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2766-L2768` → after: `L74-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L74-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L74-L105) · [Before (L2766-L2768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2766-L2768)

```diff
-         return this.clicks.forEach((cp => {
-           cp > Date.now() - pp && ip++
-         })), ip
+         return 0 !== QQ && (WQ = 1 / QQ), this.normal.x *= WQ, this.normal.y *= WQ, this.normal.z *= WQ, this.d *= WQ, this
+       }
+       transform(QQ) {
+         const WQ = qQ._TmpMatrix;
+         QQ.invertToRef(WQ);
+         const XQ = WQ.m,
+           wQ = this.normal.x,
+           TQ = this.normal.y,
+           zQ = this.normal.z,
+           sQ = this.d,
+           FQ = wQ * XQ[0] + TQ * XQ[1] + zQ * XQ[2] + sQ * XQ[3],
+           PQ = wQ * XQ[4] + TQ * XQ[5] + zQ * XQ[6] + sQ * XQ[7],
+           gQ = wQ * XQ[8] + TQ * XQ[9] + zQ * XQ[10] + sQ * XQ[11],
+           JQ = wQ * XQ[12] + TQ * XQ[13] + zQ * XQ[14] + sQ * XQ[15];
+         return new qQ(FQ, PQ, gQ, JQ)
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2770-L2778` → after: `L107-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L107-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L107-L108) · [Before (L2770-L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2770-L2778)

```diff
-       getMaxClickSeparationInMs(pp) {
-         if (0 === this.clicks.size) return this.storeForMs;
-         let ip = 0,
-           cp = Date.now() - pp;
-         this.clicks.forEach((Op => {
-           Op < Date.now() - pp || (ip = Math.max(ip, Math.abs(Op - cp)), cp = Op)
-         }));
-         const Op = Math.abs(Date.now() - cp);
-         return Math.max(ip, Op)
+       isFrontFacingTo(QQ, WQ) {
+         return wQ.s.Dot(this.normal, QQ) <= WQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2780-L2783` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L110-L111) · [Before (L2780-L2783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2780-L2783)

```diff
-     }
-     class kp {
-       constructor(pp) {
-         this.storeForMs = pp, this.clickDownDurations = new ep.d
+       signedDistanceTo(QQ) {
+         return wQ.s.Dot(QQ, this.normal) + this.d
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2785-L2791` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L113-L114) · [Before (L2785-L2791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2785-L2791)

```diff
-       registerClickDownDuration(pp) {
-         this.clickDownDurations.enqueue({
-           dur: pp,
-           atTime: Date.now()
-         });
-         const ip = Date.now() - this.storeForMs;
-         for (; this.clickDownDurations.size > 0 && this.clickDownDurations.peek().atTime < ip;) this.clickDownDurations.dequeue()
+       static FromArray(QQ) {
+         return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2793-L2799` → after: `L116-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L116-L118) · [Before (L2793-L2799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2793-L2799)

```diff
-       clickDownDurationsCheck(pp) {
-         if (pp > this.storeForMs) return console.error("overDuration is greater than storeForMs"), "0:0";
-         let ip = 0,
-           cp = 0;
-         return this.clickDownDurations.forEach((Op => {
-           Op.atTime > Date.now() - pp && (ip++, cp = Math.max(cp, Op.dur))
-         })), `${ip}:${cp}`
+       static FromPoints(QQ, WQ, XQ) {
+         const wQ = new qQ(0, 0, 0, 0);
+         return wQ.copyFromPoints(QQ, WQ, XQ), wQ
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2801-L2854` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L120-L122) · [Before (L2801-L2854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2801-L2854)

```diff
-     }
-     var mp = cp(36693),
-       Rp = cp(39261),
-       qp = cp(25),
-       Mp = cp(2849),
-       Cp = cp(1349),
-       Ep = cp(2479),
-       Xp = cp(4532),
-       lp = cp(131),
-       Qp = cp(38374),
-       Jp = cp(38601),
-       Bp = cp(640),
-       Np = cp(36691),
-       Tp = cp(10),
-       fp = cp(9338),
-       bp = cp(1234),
- ... (38 more removed lines; see GitHub link above)
+       static FromPositionAndNormal(QQ, WQ) {
+         const XQ = new qQ(0, 0, 0, 0);
+         return this.FromPositionAndNormalToRef(QQ, WQ, XQ)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2856-L2917` → after: `L124-L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L124-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L124-L125) · [Before (L2856-L2917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2856-L2917)

```diff
-     }
-     const xi = 5e3,
-       Li = 1;
-     let Yi, Di = Li,
-       Ai = 0;
-     const Pi = !0;
-     let Wi = Pi;
-     wp.c.subscribe("_ignoreBasicBoards", (pp => {
-       Wi = pp
-     })), (0, Op.onGameReset)((() => {
-       Wi = Pi
-     }));
-     let yi = null;
-     const Ui = () => yi;
-     let wi, vi, ti;
-     var Hi, di, ei, ui, ji, ki, mi, Ri, qi;
- ... (46 more removed lines; see GitHub link above)
+       static FromPositionAndNormalToRef(QQ, WQ, XQ) {
+         return XQ.normal.WH(WQ), XQ.normal.normalize(), XQ.d = -QQ.dot(XQ.normal), XQ
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L2919-L3092` → after: `L127-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L127-L129) · [Before (L2919-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L2919-L3092)

```diff
-       pp.inputs.down.on("crouch", (() => {
-         if (Ii()) return;
-         if (!pp.Tu.canCrouch) return;
-         const ip = pp.Yk.wcp();
-         qp.c.get("clientEscMenuOptions").crouchIsToggle && (ip.crouchToggled = !ip.crouchToggled && !ip.padSneakToggled), ip.padSneakToggled = !1
-       }));
-       const cp = () => {
-         const pp = ip();
-         pp.isGun() && pp.inaccuracyCalculator.jump()
-       };
-       pp.inputs.down.on("jump", (pp => {
-         Ii() || (cp(), wi(pp))
-       }));
-       for (const Op of Hp.i) pp.inputs.down.on(Op, (pp => {
-         var ip, cp;
-         null !== (ip = (0, Mp.d)().client) && void 0 !== ip && null !== (cp = ip.freeCameraController) && void 0 !== cp && cp.handlefreeCamKeyPress(Op, pp, !0) && (pp.preventDefault(), pp.stopPropagation())
- ... (158 more removed lines; see GitHub link above)
+       static SignedDistanceToPlaneFromPositionAndNormal(QQ, WQ, XQ) {
+         const qQ = -(WQ.x * QQ.x + WQ.y * QQ.y + WQ.z * QQ.z);
+         return wQ.s.Dot(XQ, WQ) + qQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L3769-L3772` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L134) · [Before (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L3769-L3772)

```diff
-   39278: (pp, ip, cp) => {
-     function Op(pp) {
-       return Boolean(pp.Tu.useInventory && pp.Tu.useFullInventory && pp.Yk.bip(pp.NJ))
-     }
+   38947: (QQ, WQ, XQ) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L3782-L3846` → after: `L138-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L138-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L138-L141) · [Before (L3782-L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L3782-L3846)

```diff
-     var Op = cp(37385);
- 
-     function op(pp, ip) {
-       return {
-         replayedClipName: pp,
-         replayedClipAgeSeconds: ip
-       }
-     }
- 
-     function Ip(pp, ip, cp, op, Ip) {
-       const Sp = function(pp) {
-           if ("object" !== typeof pp || null === pp) return null;
-           const {
-             replayedClipName: ip,
-             replayedClipAgeSeconds: cp
-           } = pp;
- ... (49 more removed lines; see GitHub link above)
+     var wQ = XQ(38956);
+     const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
+       ...QQ
+     } : null : QQ.clone(WQ) : null;
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L3848-L3861` → after: `L143-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L143-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L143-L171) · [Before (L3848-L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L3848-L3861)

```diff
-       constructor() {
-         this.timer = null, this.tries = new xp(0, 0), this.check = () => {
-           const pp = Date.now(),
-             ip = this.tries.spacedBy(Sp(), pp),
-             cp = ip.nextDueMs();
-           if (pp < cp) this.schedule();
-           else {
-             if (ip.noteTry(pp, cp), this.tries = ip, (0, Yp.t)() && !(0, Lp.b)()) {
-               var op, xp;
-               (0, Op.f)();
-               const pp = (0, Ip.g)();
-               null === (op = pp.Yk.Dcp(pp.NJ)) || void 0 === op || null === (xp = op.qm) || void 0 === xp || xp.repeatAttack()
-             }
-             this.schedule()
+       static DeepCopy(QQ, WQ, XQ, TQ) {
+         let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const sQ = function(QQ) {
+           const WQ = [];
+           do {
+             const XQ = Object.getOwnPropertyNames(QQ);
+             for (const QQ of XQ) - 1 === WQ.indexOf(QQ) && WQ.push(QQ)
+           } while (QQ = Object.getPrototypeOf(QQ));
+           return WQ
+         }(QQ);
+         for (const PQ of sQ) {
+           if ("_" === PQ[0] && (!TQ || -1 === TQ.indexOf(PQ))) continue;
+           if (PQ.endsWith("Observable")) continue;
+           if (XQ && -1 !== XQ.indexOf(PQ)) continue;
+           const sQ = QQ[PQ],
+             gQ = typeof sQ;
+ ... (13 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L3884-L3900` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L177) · [Before (L3884-L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L3884-L3900)

```diff
-   39177: (pp, ip, cp) => {
-     cp.d(ip, {
-       c: () => yp,
-       d: () => Dp,
-       e: () => Wp,
-       f: () => Pp,
-       i: () => Up,
-       k: () => Ap
-     });
-     var Op = cp(39182),
-       op = cp(37465),
-       Ip = cp(3774),
-       Sp = cp(1963),
-       xp = cp(34),
-       Lp = cp(2849);
-     const Yp = new Op.e;
- ... (1 more removed lines; see GitHub link above)
+   38191: (QQ, WQ, XQ) => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L3902-L4148` → after: `L179-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L179-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L179-L182) · [Before (L3902-L4148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L3902-L4148)

```diff
-       return Yp
-     }
- 
-     function Ap() {
-       Yp.clear()
-     }
- 
-     function Pp() {
-       for (const pp of Yp.ids()) {
-         const ip = Yp.getName(pp);
-         void 0 !== ip && Sp.d.delete(ip)
-       }
-       Ap(), xp.m.GA("playerRosterChanged", Yp.ids())
-     }
- 
-     function Wp(pp, ip) {
- ... (231 more removed lines; see GitHub link above)
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
+         const WQ = 16 * Math.random() | 0;
+         return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
+       }))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4154-L4215` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L186) · [Before (L4154-L4215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L4154-L4215)

```diff
-     });
-     var Op = cp(1234),
-       op = cp(1356),
-       Ip = cp(25),
-       Sp = cp(1334),
-       xp = cp(1349),
-       Lp = cp(1538),
-       Yp = cp(36677);
- 
-     function Dp(pp) {
-       let {
-         xI: ip,
-         LI: cp
-       } = pp;
-       const Dp = null !== ip && void 0 !== ip ? ip : (0, xp.d)().gameNameWithVariation;
-       (0, Op.H)(Dp) && ((0, Yp.j)(), (0, Sp.Z)((() => {
- ... (46 more removed lines; see GitHub link above)
+     })
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4217` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L188) · [Before (L4217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L4217)

```diff
-   39182: (pp, ip, cp) => {
+   38956: (QQ, WQ, XQ) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4219` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L190) · [Before (L4219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L4219)

```diff
-       e: () => Op
+       b: () => wQ
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/248.js` (Changed code · before: `L4222-L4292` → after: `L193-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-93d54e0c6618e0f72b74ac95702bd123d684c926d443bd9879c32ff86f91d016) · [After (L193-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/248.js#L193-L257) · [Before (L4222-L4292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/248.js#L4222-L4292)

```diff
-       constructor() {
-         this.members = new Map
-       }
-       apply(pp) {
-         const ip = {
-           added: [],
-           removed: [],
-           settingChanges: []
-         };
-         for (const Op of pp.hp) {
-           let pp = this.members.get(Op.ap);
-           if (pp || (pp = {
-               name: null,
-               settings: {}
-             }, this.members.set(Op.ap, pp), ip.added.push(Op.ap)), null !== Op.np && (pp.name = Op.np), null !== Op.Fp || Op.Gp.length > 0) {
-             const cp = null === Op.Fp ? {} : JSON.parse(Op.Fp);
- ... (55 more removed lines; see GitHub link above)
+       static _CheckLimit(QQ, WQ) {
+         let XQ = wQ._LogLimitOutputs[QQ];
+         return XQ ? XQ.current++ : (XQ = {
+           limit: WQ,
+           current: 1
+         }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
+       }
+       static _GenerateLimitMessage(QQ) {
+         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const XQ = wQ._LogLimitOutputs[QQ];
+         if (!XQ || !wQ.MessageLimitReached) return;
+         const qQ = this._Levels[WQ];
+         XQ.current === XQ.limit && wQ[qQ.name](wQ.MessageLimitReached.replace(/%LIMIT%/g, "" + XQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
+       }
+       static _AddLogEntry(QQ) {
+         wQ._LogCache = QQ + wQ._LogCache, wQ.OnNewCacheEntry && wQ.OnNewCacheEntry(QQ)
+ ... (49 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/249.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/249.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/249.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/249.js#L2)

```diff
- export const ids = [249];
+ export const ids = [248, 249];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L4-L163` → after: `L4-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L4-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/249.js#L4-L84) · [Before (L4-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/249.js#L4-L163)

```diff
-   41309: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Sp,
-       h: () => Dp,
-       k: () => Yp
-     });
-     var Op, op = cp(37356),
-       Ip = cp(37320);
-     ! function(pp) {
-       pp[pp.CW = 0] = "CW", pp[pp.CCW = 1] = "CCW"
-     }(Op || (Op = {}));
-     class Sp {
-       static Interpolate(pp, ip, cp, Op, op) {
-         if (0 === pp) return 0;
-         const Ip = 1 - 3 * Op + 3 * ip,
-           Sp = 3 * Op - 6 * ip,
- ... (144 more removed lines; see GitHub link above)
+   61529: (QQ, WQ, XQ) => {
+     XQ.r(WQ), XQ.d(WQ, {
+       RegisterShaderMaterial: () => wQ.c,
+       ShaderMaterial: () => wQ.t,
+       ShaderMaterialCreateFromSnippetAsync: () => wQ.g,
+       ShaderMaterialParse: () => wQ.r,
+       ShaderMaterialParseFromFileAsync: () => wQ.j,
+       ShaderMaterialParseFromSnippetAsync: () => wQ.n
+     });
+     var wQ = XQ(40717);
+     (0, wQ.c)()
+   },
+   38041: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => qQ
+     });
+ ... (65 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L165-L300` → after: `L86-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L86-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/249.js#L86-L150) · [Before (L165-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/249.js#L165-L300)

```diff
-         for (let cp = pp - 1, Op = 0; Op < pp; cp = Op++) ip += this._points[cp].x * this._points[Op].y - this._points[Op].x * this._points[cp].y;
-         return .5 * ip
-       }
-       getPoints() {
-         return this._points
-       }
-       getPointAtLengthPosition(pp) {
-         if (pp < 0 || pp > 1) return Ip.l.Zero();
-         const ip = pp * this.length();
-         let cp = 0;
-         for (let Op = 0; Op < this._points.length; Op++) {
-           const pp = (Op + 1) % this._points.length,
-             op = this._points[Op],
-             Sp = this._points[pp].subtract(op),
-             xp = Sp.length() + cp;
-           if (ip >= cp && ip <= xp) {
- ... (120 more removed lines; see GitHub link above)
+         return 0 !== QQ && (WQ = 1 / QQ), this.normal.x *= WQ, this.normal.y *= WQ, this.normal.z *= WQ, this.d *= WQ, this
+       }
+       transform(QQ) {
+         const WQ = qQ._TmpMatrix;
+         QQ.invertToRef(WQ);
+         const XQ = WQ.m,
+           wQ = this.normal.x,
+           TQ = this.normal.y,
+           zQ = this.normal.z,
+           sQ = this.d,
+           FQ = wQ * XQ[0] + TQ * XQ[1] + zQ * XQ[2] + sQ * XQ[3],
+           PQ = wQ * XQ[4] + TQ * XQ[5] + zQ * XQ[6] + sQ * XQ[7],
+           gQ = wQ * XQ[8] + TQ * XQ[9] + zQ * XQ[10] + sQ * XQ[11],
+           JQ = wQ * XQ[12] + TQ * XQ[13] + zQ * XQ[14] + sQ * XQ[15];
+         return new qQ(FQ, PQ, gQ, JQ)
+       }
+ ... (49 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L333` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/249.js#L183) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/249.js#L333)

```diff
-             Op.e.Warn(Lp.message)
+             wQ.b.Warn(FQ.message)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L339-L341` → after: `L189-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L189-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/249.js#L189-L202) · [Before (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/249.js#L339-L341)

```diff
-   38905: (pp, ip, cp) => {
-     cp.d(ip, {
-       e: () => Op
+   38191: (QQ, WQ, XQ) => {
+     function wQ() {
+       return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
+         const WQ = 16 * Math.random() | 0;
+         return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
+       }))
+     }
+     XQ.d(WQ, {
+       d: () => wQ
+     })
+   },
+   38956: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => wQ
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L362` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/249.js#L223) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/249.js#L362)

```diff
-         const ip = pp => pp < 10 ? "0" + pp : "" + pp,
+         const WQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/249.js` (Changed code · before: `L377` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559bR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-5c6ca3590b5bef51d9de752ebd24f76dc7ce7c1a6a19d6e616e0bed431a1559b) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/249.js#L238) · [Before (L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/249.js#L377)

```diff
-         const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
+         const FQ = `<div style='color:${zQ.color}'>${TQ}</div><br>`;
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/250.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/250.js` (34 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L4-L16` → after: `L4-L3405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4-L3405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L4-L3405) · [Before (L4-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L4-L16)

```diff
-   39017: (pp, ip, cp) => {
-     var Op = {
-       "./cape_cow_cream.png": 28171,
-       "./cape_cow_normal.png": 28176,
-       "./cape_creator_level1.png": 28184,
-       "./cape_creator_level2.png": 28191,
-       "./cape_creator_level3.png": 28197,
-       "./cape_none.png": 28204,
-       "./cape_pig.png": 28213,
-       "./cape_sheep.png": 28217,
-       "./cape_super.png": 28226,
-       "./cape_super_inverted.png": 28234,
-       "./cape_youtuber.png": 28239
+   38084: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => JQ,
+       g: () => zQ
+     });
+     var wQ = XQ(9608),
+       qQ = XQ(9580),
+       TQ = XQ(402);
+     const zQ = {
+       "Maple Door": {
+         positions: [{
+           block: "Maple Door",
+           x: 0,
+           y: 0,
+           z: 0
+         }, {
+ ... (3386 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L20-L21` → after: `L3409-L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3409-L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3409-L3566) · [Before (L20-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L20-L21)

```diff
-       var ip = Ip(pp);
-       return cp(ip)
+       return {
+         [`${QQ} Banner`]: {
+           positions: [{
+             block: `${QQ} Banner`,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${QQ} Banner Flag|meta|rot1|bot`,
+             x: 0,
+             y: 1,
+             z: 0
+           }]
+         },
+         [`${QQ} Banner|meta|rot2|bot`]: {
+           positions: [{
+ ... (142 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L25-L69` → after: `L3570-L3662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3570-L3662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3570-L3662) · [Before (L25-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L25-L69)

```diff
-       if (!cp.o(Op, pp)) {
-         var ip = new Error("Cannot find module '" + pp + "'");
-         throw ip.code = "MODULE_NOT_FOUND", ip
-       }
-       return Op[pp]
-     }
-     op.keys = function() {
-       return Object.keys(Op)
-     }, op.resolve = Ip, pp.exports = op, op.id = 39017
-   },
-   41400: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       openCharacterPreview: () => rp
-     });
-     var Op = cp(38317),
-       op = cp(2849),
- ... (29 more removed lines; see GitHub link above)
+       const WQ = (0, TQ.Qb)(QQ);
+       return {
+         [WQ]: {
+           positions: [{
+             block: WQ,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_${WQ} Top Left`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_${WQ} Top Right`,
+             x: -1,
+ ... (77 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L75-L76` → after: `L3668-L3743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3668-L3743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3668-L3743) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L75-L76)

```diff
-       pp.unfreezeWorldMatrix();
-       for (const ip of pp.getChildren()) kp(ip)
+       const WQ = `_${QQ} Back`,
+         XQ = `_${QQ} Dish`;
+       return {
+         [QQ]: {
+           positions: [{
+             block: QQ,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: WQ,
+             x: 0,
+             y: 0,
+             z: -1
+           }, {
+             block: XQ,
+ ... (60 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L79-L160` → after: `L3746-L3766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3746-L3766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3746-L3766) · [Before (L79-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L79-L160)

```diff
-     function mp(pp, ip) {
-       pp.isVisible = ip;
-       for (const cp of pp.getChildMeshes()) cp.isVisible = ip
-     }
-     class Rp {
-       constructor(pp, ip, cp) {
-         this.pw = pp, this.thinInstMgr = ip, this.FQ = cp, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
-       }
-       loadModel(pp, ip, cp) {
-         const Op = (0, dp.g)(pp, ip);
-         return Op in this.modelCache || (this.modelCache[Op] = (async () => {
-           try {
-             const Op = await (0, dp.j)(pp, this.pw),
-               op = new Map;
-             for (const pp of Op.getNodes()) op.set(pp.name, pp);
-             const Ip = (0, dp.e)(null !== ip && void 0 !== ip ? ip : pp, this.pw);
- ... (66 more removed lines; see GitHub link above)
+     function gQ(QQ) {
+       const WQ = `Small ${QQ} Pod`;
+       return {
+         [WQ]: {
+           positions: [{
+             block: WQ,
+             x: 0,
+             y: 0,
+             z: 0
+           }, {
+             block: `_Small ${QQ} Pod Mid`,
+             x: 0,
+             y: 1,
+             z: 0
+           }, {
+             block: `_Small ${QQ} Pod Top`,
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L163-L172` → after: `L3769-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3769-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3769-L3772) · [Before (L163-L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L163-L172)

```diff
-     var qp = cp(37403),
-       Mp = (cp(41333), cp(40663), cp(41339), cp(34466));
-     let Cp, Ep, Xp, lp, Qp, Jp, Bp, Np, Tp, fp;
-     const bp = document.createElement("canvas");
-     async function hp() {
-       await new Promise((pp => {
-         setTimeout((() => {
-           pp()
-         }), 100)
-       }))
+     for (const rQ in zQ) {
+       for (const QQ of zQ[rQ].positions)
+         if (QQ.id = qQ.h[QQ.block].id, rQ === QQ.block && (0 !== QQ.x || 0 !== QQ.y || 0 !== QQ.z)) throw new Error(`Multiblock "${rQ}" has main block "${QQ.block}" at non-origin position (${QQ.x}, ${QQ.y}, ${QQ.z}) - if you need to do something like this, you'll need to rethink  … [truncated]
+       zQ[qQ.h[rQ].id] = zQ[rQ]
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L177-L178` → after: `L3808-L3810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3808-L3810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3808-L3810) · [Before (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L177-L178)

```diff
-     function np(pp, ip) {
-       bp.width = pp, bp.height = ip, Cp.resize()
+     function sQ(QQ) {
+       const WQ = wQ.h[QQ];
+       return !!WQ && QQ !== wQ.e && !WQ.model && !WQ.XI && !1 !== WQ.solid && !WQ.Xy
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L182-L205` → after: `L3813-L3814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3813-L3814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3813-L3814) · [Before (L182-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L182-L205)

```diff
-       constructor(pp, ip) {
-         this.framing = ip, this.ready = fp, this.dev = {
-           canvas: () => bp,
-           isolateHead(pp) {
-             const ip = Jp.getNodeNames(Bp);
-             for (let cp = 0; cp < ip.length; cp++) "HeadMesh" !== ip[cp] && "__root__" !== ip[cp] && "TorsoNode" !== ip[cp] && Jp.setNodeEnabled(Bp, cp, !1);
-             if (pp) {
-               const pp = Jp.getNamedNode(Bp, "HeadMesh");
-               Jp.setNodeDisableColorWrite(Bp, pp, !0, (pp => {
-                 const ip = new Up.StandardMaterial(`${pp.name}_depthOnly`, pp.Gl());
-                 return ip.disableColorWrite = !0, ip
-               }))
-             }
-             Jp.setPosition(Bp, 0, -12, 0)
-           }
-         }, this.closed = !1, this.resetCamera();
- ... (8 more removed lines; see GitHub link above)
+       constructor(QQ) {
+         this.model = QQ, this.reshapeOffsets = [...zQ, [0, -1, 0]]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L207-L216` → after: `L3816-L3818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3816-L3818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3816-L3818) · [Before (L207-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L207-L216)

```diff
-       setCosmetic(pp, ip) {
-         ! function(pp, ip) {
-           if (!lp) return;
-           const Sp = (0, op.g)();
-           Sp.ZC(!1), Op.d.Player.meshApi.updatePlayerCosmetic(Sp.NJ, Bp, pp, ip, !0), "cape" === pp && (ip === Ip.c ? Qp.eC(!1) : (Qp.eC(!0), Qp.material.diffuseTexture = new wp.d(cp(39017)(`./cape_${ip}.png`), Qp.Gl(), {
-             invertY: !1,
-             samplingMode: wp.d.NEAREST_NEAREST_MIPLINEAR
-           })));
-           ap[pp] = Tp.update(pp, ip)
-         }(pp, ip)
+       handles(QQ) {
+         const WQ = wQ.h[QQ];
+         return (null === WQ || void 0 === WQ ? void 0 : WQ.model) === this.model && void 0 !== WQ.attachedTop
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L218-L222` → after: `L3820-L3821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3820-L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3820-L3821) · [Before (L218-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L218-L222)

```diff
-       playEmote(pp) {
-         if (!Np) return;
-         if (!pp) return void Np.stopAnimation(Lp.e.Emote);
-         const ip = (0, Sp.d)((0, xp.g)(pp).animation);
-         Np.startAnimation(ip, Lp.e.Emote, 0, xp.c)
+       affects(QQ) {
+         return this.handles(QQ) || sQ(QQ) || (0, TQ.w)(wQ.h[QQ])
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L224-L250` → after: `L3823-L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3823-L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3823-L3835) · [Before (L224-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L224-L250)

```diff
-       async untilDrawn(pp) {
-         if (await hp(), "cape" === pp && Qp) {
-           const pp = Qp.material,
-             ip = null === pp || void 0 === pp ? void 0 : pp.diffuseTexture;
-           ip && !ip.isReady() && (await new Promise((pp => {
-             ip.onLoadObservable.addOnce((() => {
-               pp()
-             }))
-           })), await hp())
-         }
-         ap[pp] && (await ap[pp], await hp()), await Xp.whenReadyAsync(), await new Promise((pp => {
-           Xp.onAfterRenderObservable.addOnce((() => {
-             pp()
-           }))
-         }))
-       }
- ... (11 more removed lines; see GitHub link above)
+       shape(QQ, WQ, XQ, zQ, FQ) {
+         let PQ = this.handles(QQ(WQ, XQ + 1, zQ)) ? qQ.i : 0;
+         return qQ.t.forEach(((FQ, gQ) => {
+           let {
+             dx: JQ,
+             dz: rQ
+           } = FQ;
+           const IQ = QQ(WQ + JQ, XQ, zQ + rQ);
+           (this.handles(IQ) || sQ(IQ) || function(QQ, WQ) {
+             const XQ = wQ.h[QQ];
+             return (0, TQ.w)(XQ) && (0, TQ.r)(XQ.meta.rot) === (0 !== qQ.t[WQ].dx)
+           }(IQ, gQ)) && (PQ |= 1 << gQ)
+         })), (0, wQ.k)((0, qQ.l)(wQ.h[FQ].meta.rootName, PQ))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L253-L263` → after: `L3838-L3839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3838-L3839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3838-L3839) · [Before (L253-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L253-L263)

```diff
- 
-     function Gp(pp) {
-       let {
-         yaw: ip,
-         pitch: cp,
-         radius: Op,
-         target: op
-       } = pp;
-       Ep.alpha = ip, Ep.beta = cp, Op && (Ep.radius = Op), op && Ep.target.set(op[0], op[1], op[2])
-     }
- 
+   },
+   38277: (QQ, WQ, XQ) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L265-L291` → after: `L3841-L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3841-L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3841-L3868) · [Before (L265-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L265-L291)

```diff
-       return pp.appendChild(bp), Cp || function() {
-         Cp = new Yp.d(bp, !0, {
-           preserveDrawingBuffer: !0
-         });
-         const pp = (0, op.g)();
-         Cp.lOp = pp.WU.engine.lOp, Xp = new Dp.c(Cp), Xp.clearColor = new yp.b(0, 0, 0, 0), Xp.ambientColor = new yp.Color3(1, 1, 1), Ep = new Ap.c("Gw", 0, 0, 1, Pp.Zy.Zero(), Xp), Ep.attachControl(bp, !0), Ep.panningSensibility = 0, fp = (0, Op.u)("Player", Xp, !0).then((ip =>  … [truncated]
-           lp = ip.meshApi, Qp = ip.capeMesh, Jp = pp.WU.EQ;
-           const cp = 8.33;
-           Bp = (0, Op.n)("Player", cp, !0, !0), Jp.setPosition(Bp, 0, -8.33, 0);
-           const op = Jp.getNamedNode(Bp, "BodyMesh");
-           Jp.attachTransformNode(Qp, Bp, op), Jp.set(Bp, "aOpacity", 1), Jp.aJ(Bp, "aOpacity", 1), Tp = new Rp(Xp, Jp, Bp), Np = new vp.AnimatorState, Np.HP = pp, Np.thinInstMgr = Jp, Np.FQ = Bp, Np.iOp = Jp.QOp(Bp, 0), Np.modelLifeformType = "Player", Np.nodeNameAliases = (0, qp … [truncated]
-           const Ip = Qp.bJ().boundingBox;
-           Qp.position.y = ((24 - Ip.maximum.y + Ip.minimum.y) / 2 - 1 / 32) / cp, Qp.position.z = -1 / cp, Qp.rotationQuaternion = null;
-           const Sp = Math.PI / 18,
-             xp = Ip.maximum.y / cp;
-           Qp.rotation.x = Sp;
- ... (11 more removed lines; see GitHub link above)
+       var XQ;
+       WQ || (WQ = {});
+       const wQ = null !== (XQ = WQ.customAttributes) && void 0 !== XQ ? XQ : {};
+       var qQ, TQ, zQ;
+       "Gun" === (null === QQ || void 0 === QQ ? void 0 : QQ.type) && (wQ.shotsLeft = null !== (qQ = null !== (TQ = wQ.shotsLeft) && void 0 !== TQ ? TQ : null === (zQ = wQ.gunStats) || void 0 === zQ ? void 0 : zQ.clipSize) && void 0 !== qQ ? qQ : QQ.clipSize);
+       if (wQ.enchantmentTier && (wQ.enchantmentTier = wQ.enchantmentTier.toString()), wQ.enchantments)
+         for (const JQ in wQ.enchantments) {
+           const QQ = wQ.enchantments[JQ];
+           if ("number" !== typeof QQ) {
+             const WQ = parseInt(QQ);
+             isNaN(WQ) || WQ < 0 ? wQ.enchantments[JQ] = void 0 : wQ.enchantments[JQ] = WQ > 1e9 ? 1e9 : WQ
+           }
+         }
+       if (wQ.enchantmentData)
+         for (const JQ in wQ.enchantmentData) {
+           const QQ = wQ.enchantmentData[JQ];
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L294` → after: `L3874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3874) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L294)

```diff
-   39014: (pp, ip, cp) => {
+   38499: (QQ, WQ, XQ) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L296` → after: `L3876-L3880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3876-L3880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3876-L3880) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L296)

```diff
-       b: () => Pp
+       e: () => vQ,
+       h: () => VQ,
+       j: () => FQ,
+       n: () => JQ,
+       q: () => dQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L298-L302` → after: `L3882-L3886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3882-L3886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3882-L3886) · [Before (L298-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L298-L302)

```diff
-     var Op = cp(37413),
-       op = cp(37429),
-       Ip = cp(37662),
-       Sp = cp(37433),
-       xp = cp(37421);
+     var wQ = XQ(9580),
+       qQ = XQ(9616),
+       TQ = XQ(38505);
+     const zQ = (0, wQ.k)("Noticeboard"),
+       sQ = (0, wQ.k)("Standing Noticeboard|meta|rot4|lrud");
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L305-L315` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3889) · [Before (L305-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L305-L315)

```diff
-       return `\n\t\t\t\t${(0,xp.v)(pp,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, xp.A)(pp, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, xp.A)(pp, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, xp.j)(pp, "mat2", "c", "s", "-s", "c")
-       };\
-       n\ t\ t\ t\ t`)}\n\t\t\t`
+       return zQ <= QQ && QQ <= sQ
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L318-L322` → after: `L3897-L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3897-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3897-L3899) · [Before (L318-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L318-L322)

```diff
-     function Yp(pp, ip) {
-       let cp = (0, xp.sb)(pp, "skele" + (ip - 1));
-       for (let op = ip - 2; op >= 0; op--) cp = (0, xp.jb)(pp, `boneIdx == ${op}`, (0, xp.sb)(pp, `skele${op}`), cp);
-       const Op = "bone.yz + rotate(bone.x) * pivot - pivot";
-       return `\n\t\t\t\t${(0,xp.A)(pp,"int","boneIdx",(0,xp.qb)(pp,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,xp.A)(pp,"vec3","bone",cp)}\n\t\t\t\t${(0,xp.A)(pp,"vec2","pivot",(0,xp.j)(pp,"vec2","0.0",`${(0,xp.zb)(pp,"position")}.z`))}\n\t\t\t\t${(0,xp.Y)(pp)?`positi … [truncated]
+     function yQ(QQ) {
+       var WQ, XQ;
+       return "string" === typeof(null === QQ || void 0 === QQ || null === (WQ = QQ.persisted) || void 0 === WQ || null === (XQ = WQ.shared) || void 0 === XQ ? void 0 : XQ.text)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L326` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3903) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L326)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,xp.j)(pp,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       return yQ(QQ) && "" !== QQ.persisted.shared.text.trim()
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L475-L479` → after: `L3907-L3909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3907-L3909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3907-L3909) · [Before (L475-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L475-L479)

```diff
-       return Object.assign((function(pp, cp, Op, op) {
-         return ip(this.featureState, pp, cp, Op, op)
-       }), {
-         Py: pp
-       })
+       let [XQ, , wQ] = WQ;
+       const [TQ, , zQ] = qQ.s[QQ][IQ];
+       return XQ * TQ + wQ * zQ
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L482-L506` → after: `L3912-L3936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3912-L3936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3912-L3936) · [Before (L482-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L482-L506)

```diff
-     function tp(pp) {
-       const ip = class extends Wp.c {
-           constructor(ip, cp) {
-             const Op = (0, Up.$)(ip),
-               op = Op && (0, Up.s)(Op, pp.name);
-             for (var Ip = arguments.length, Sp = new Array(Ip > 2 ? Ip - 2 : 0), xp = 2; xp < Ip; xp++) Sp[xp - 2] = arguments[xp];
-             super(ip, pp.name, pp.priority, op ? op.defines : pp.defines(...Sp), !1), this.featureState = void 0, this.featureState = cp, this._pluginManager._addPlugin(this), this._enable(!0), (0, Up.v)(this._material, pp, this.featureState, this._pluginDefineNames)
-           }
-           getClassName() {
-             return pp.className
-           }
-           isCompatible(pp) {
-             return pp === wp.b.GLSL || pp === wp.b.WGSL
-           }
-         },
-         cp = (0, yp.l)(pp);
- ... (9 more removed lines; see GitHub link above)
+     function pQ(QQ, WQ, XQ) {
+       return XQ[1] - WQ[1] || DQ(QQ, WQ) - DQ(QQ, XQ)
+     }
+ 
+     function GQ(QQ, WQ, XQ, TQ, sQ) {
+       var FQ;
+       let gQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ(WQ[0], WQ[1], WQ[2]);
+       if (!(PQ[gQ - zQ] & 1 << XQ)) return null;
+       const [JQ, rQ, IQ] = qQ.s[sQ][XQ], jQ = [WQ[0] + JQ, WQ[1] + rQ, WQ[2] + IQ], BQ = QQ(jQ[0], jQ[1], jQ[2]), yQ = null === (FQ = wQ.h[BQ]) || void 0 === FQ ? void 0 : FQ.meta;
+       return (null === yQ || void 0 === yQ ? void 0 : yQ.rootId) === TQ && yQ.rot === sQ && PQ[BQ - zQ] & 1 << (1 ^ XQ) ? jQ : null
+     }
+ 
+     function UQ(QQ, WQ, XQ, TQ) {
+       const zQ = QQ(WQ, XQ, TQ);
+       if (!FQ(zQ)) return null;
+       const {
+ ... (9 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L516-L528` → after: `L3952-L3953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3952-L3953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3952-L3953) · [Before (L516-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L516-L528)

```diff
-     function kp(pp, ip, cp) {
-       return (0, jp.h)(cp, ip.urls, (() => async function(pp, ip, cp) {
-         const {
-           width: Op
-         } = pp[0].getSize(), op = pp.map(((pp, cp) => {
-           var op;
-           const Ip = Math.round(pp.getSize().height / Op),
-             Sp = null === ip || void 0 === ip ? void 0 : ip[cp];
-           return {
-             pixels: Sp && Sp.byteLength === Op * Op * Ip * 4 ? Sp : null !== (op = mp.get(pp.getInternalTexture())) && void 0 !== op ? op : pp._readPixelsSync(),
-             layers: Ip
-           }
-         })), Ip = cp.gy().getCaps().texture2DArrayMaxLayerCount, xp = (0, jp.d)(op, Op, Ip).map((pp => {
+     function bQ(QQ, WQ) {
+       for (const XQ of function(QQ) {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L530-L561` → after: `L3955-L3956`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3955-L3956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3955-L3956) · [Before (L530-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L530-L561)

```diff
-             pixels: ip,
-             layers: op
-           } = pp;
-           return {
-             atlas: new ep.c(ip, Op, Op, op, dp.d.TEXTUREFORMAT_RGBA, cp, !0, !1, Sp.d.NEAREST_NEAREST_MIPLINEAR),
-             layers: op
-           }
-         }));
-         return pp.forEach(((pp, ip) => {
-           const Op = pp.getInternalTexture();
-           mp.has(Op) || (! function(pp, ip) {
-             const cp = ip.createRawTexture(new Uint8Array(4), 1, 1, dp.d.TEXTUREFORMAT_RGBA, !1, !1, Sp.d.NEAREST_SAMPLINGMODE);
-             pp._hardwareTexture.release(), ip.unbindAllTextures(), cp._swapAndDie(pp, !1)
-           }(Op, cp.gy()), mp.set(Op, op[ip].pixels))
-         })), xp
-       }(pp, ip.pixels, cp)))
- ... (16 more removed lines; see GitHub link above)
+             anchor: WQ,
+             rot: XQ,
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L564-L618` → after: `L3959-L3966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3959-L3966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3959-L3966) · [Before (L564-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L564-L618)

```diff
-           } = pp.getSize(),
-           Ip = this._material.shaderLanguage;
-         if (!cp.useWebGL2) return void(0, Rp.f)(this._material, cp, ip, Op, Math.round(op / Op), Ip);
-         if (this.loaded.add(ip), this.loaded.size < this.mirrors.length) return;
-         const Sp = await kp(this.mirrors, cp.sources, this._material.Gl());
-         (0, Rp.b)(this._material, cp, Sp, Op, Ip)
-       }
-     }
-     var Mp = cp(41378),
-       Cp = cp(40498),
-       Ep = cp(37313),
-       Xp = cp(41383),
-       lp = cp(40589),
-       Qp = cp(40481),
-       Jp = cp(41325),
-       Bp = cp(37800),
- ... (39 more removed lines; see GitHub link above)
+           } = QQ;
+           const [zQ, , sQ] = qQ.s[XQ][IQ], FQ = [];
+           for (let qQ = 0; qQ < TQ; qQ++)
+             for (let QQ = 0; QQ < wQ; QQ++) FQ.push([WQ[0] + zQ * QQ, WQ[1] - qQ, WQ[2] + sQ * QQ]);
+           return FQ
+         }(QQ))
+         if (yQ(WQ(XQ[0], XQ[1], XQ[2]))) return XQ;
+       return null
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L621-L622` → after: `L3969-L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3969-L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3969-L3971) · [Before (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L621-L622)

```diff
-     function ap(pp, ip) {
-       if (!(ip instanceof Op.StandardMaterial) || ip.specularTexture) return;
+     function vQ(QQ, WQ, XQ, qQ, TQ) {
+       const zQ = QQ(XQ, qQ, TQ);
+       if (!FQ(zQ)) return null;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L624-L661` → after: `L3973-L3988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3973-L3988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3973-L3988) · [Before (L624-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L624-L661)

```diff
-         r: cp,
-         g: op,
-         b: Ip
-       } = ip.specularColor;
-       0 === cp && 0 === op && 0 === Ip && (pp.SPECULARTERM = !1)
-     }(0, Dp.d)({
-       disableUnusedSpecularTerm: ap
-     });
-     var np = cp(37519),
-       Fp = cp(37807);
-     const gp = new RegExp(`^#define ${Yp.b}\\s*$`, "m");
-     class Gp extends(tp(Yp.h)) {
-       constructor(pp, ip) {
-         super(pp, ip), this.Ry = !1, ip.ditherOnlyWhileFading && (Fp.d.add(pp), this.prewarmDitherTwins(pp))
-       }
-       prewarmDitherTwins(pp) {
- ... (22 more removed lines; see GitHub link above)
+         rootId: sQ,
+         rot: PQ
+       } = wQ.h[zQ].meta, gQ = [
+         [XQ, qQ, TQ]
+       ], rQ = new Set([gQ[0].join()]);
+       let IQ = gQ[0],
+         jQ = null;
+       for (let wQ = 0; wQ < gQ.length; wQ++) {
+         const XQ = gQ[wQ];
+         if (pQ(PQ, XQ, IQ) < 0 && (IQ = XQ), yQ(WQ(XQ[0], XQ[1], XQ[2]))) {
+           const WQ = UQ(QQ, XQ[0], XQ[1], XQ[2]);
+           (!jQ || pQ(PQ, WQ.anchor, jQ.anchor) < 0) && (jQ = WQ)
+         }
+         for (let WQ = 0; WQ < 4 && gQ.length < JQ; WQ++) {
+           const wQ = GQ(QQ, XQ, WQ, sQ, PQ);
+           wQ && !rQ.has(wQ.join()) && (rQ.add(wQ.join()), gQ.push(wQ))
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L665-L666` → after: `L3991-L3995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3991-L3995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3991-L3995) · [Before (L665-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L665-L666)

```diff
-       dispose(pp) {
-         this.Ry = !0, super.dispose(pp)
+       return jQ ??= UQ(QQ, IQ[0], IQ[1], IQ[2]), {
+         cells: gQ,
+         topLeft: IQ,
+         rect: jQ,
+         textCell: bQ(jQ, WQ)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L671-L731` → after: `L3999-L4000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR3999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L3999-L4000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L3999-L4000) · [Before (L671-L731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L671-L731)

```diff
-     function Zp(pp, ip) {
-       rp.set(pp, ip)
-     }
-     Zp(xp.d, Hp), Zp(Lp.f, qp), Zp(Yp.h, Gp), Zp(Dp.g, hp), (0, Ap.e)({
-       create: (pp, ip) => {
-         const cp = new Op.StandardMaterial(pp.name, ip);
-         return (0, np.p)(pp, cp), cp.detailMap._pluginDefineNames
-       },
-       write: (pp, ip, cp) => {
-         (0, np.S)(pp.mirror, ip, cp)
-       },
-       addFeature: (pp, ip, cp) => {
-         const Op = rp.get(ip.feature);
-         if (!Op) throw new Error(`${ip.feature.name} has no plugin class (registerPluginClass)`);
-         new Op(pp.mirror, ip.state, ...cp)
-       },
- ... (45 more removed lines; see GitHub link above)
+     function dQ(QQ, WQ, XQ, zQ, sQ) {
+       if (null !== XQ && FQ(XQ)) {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L733-L847` → after: `L4002-L4010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4002-L4010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L4002-L4010) · [Before (L733-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L733-L847)

```diff
-           samplingMode: Yp
-         } = pp.sampler, Dp = Yp === (0, Pp.z)(xp) ? null : () => {
-           (0, np.J)(Ap, Yp)
-         }, Ap = new op.b(Op, ip, null, xp, Ip, Dp, null, (0, Pp.w)(Lp));
-         Ap.coordinatesMode = Sp.d.SKYBOX_MODE, (0, Pp.K)(pp, Ap)
-       },
-       canvas: (pp, ip, cp) => {
-         let {
-           width: Op,
-           height: op,
-           mipmaps: xp,
-           samplingMode: Lp,
-           hasAlpha: Yp = !1,
-           wrap: Dp = Sp.d.CLAMP_ADDRESSMODE
-         } = cp;
-         const Ap = new Ip.e(ip, {
- ... (99 more removed lines; see GitHub link above)
+           rootName: QQ,
+           rot: WQ
+         } = wQ.h[XQ].meta;
+         if (qQ.s[WQ].some((QQ => {
+             let [WQ, XQ, wQ] = QQ;
+             return WQ === zQ[0] && XQ === zQ[1] && wQ === zQ[2]
+           }))) return {
+           root: QQ,
+           rot: WQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L851-L862` → after: `L4013-L4016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4013-L4016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L4013-L4016) · [Before (L851-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L851-L862)

```diff
-       removeVerticesData(pp) {
-         this.releaseUnlessInstanced(pp), super.removeVerticesData(pp)
-       }
-       dispose() {
-         this.release(), super.dispose()
-       }
-       releaseUnlessInstanced(pp) {
-         var ip;
-         pp && null !== (ip = this.getVertexBuffer(pp)) && void 0 !== ip && ip.getIsInstanced() || this.release()
-       }
-       release() {
-         this.model && ((0, Yp.v)(this.model), this.model = null)
+       const [PQ, gQ] = qQ.i[sQ], JQ = QQ(WQ[0] - PQ, WQ[1], WQ[2] - gQ);
+       return {
+         root: (0, TQ.f)(JQ) ? qQ.w : qQ.t,
+         rot: sQ
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L904-L928` → after: `L4020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L4020) · [Before (L904-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L904-L928)

```diff
-   41375: (pp, ip, cp) => {
-     function Op(pp, ip, cp) {
-       const Op = ip * ip * 4,
-         op = pp[0].layers,
-         Ip = op * (pp.length - 1) + pp[pp.length - 1].layers,
-         Sp = new Uint8Array(Ip * Op);
-       pp.forEach(((ip, cp) => {
-         const Ip = cp + 1 < pp.length ? Math.min(ip.layers, op) : ip.layers;
-         Sp.set(new Uint8Array(ip.pixels.buffer, ip.pixels.byteOffset, Ip * Op), cp * op * Op)
-       }));
-       const xp = Math.max(1, Math.min(Ip, cp || Ip));
-       if (xp === Ip) return [{
-         pixels: Sp,
-         layers: Ip
-       }];
-       const Lp = [];
- ... (9 more removed lines; see GitHub link above)
+   38512: (QQ, WQ, XQ) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L930-L931` → after: `L4022-L4025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4022-L4025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L4022-L4025) · [Before (L930-L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L930-L931)

```diff
-       d: () => Op,
-       h: () => Ip
+       c: () => TQ,
+       f: () => zQ,
+       j: () => qQ,
+       m: () => sQ
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L933` → after: `L4027-L4029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4027-L4029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L4027-L4029) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L933)

```diff
-     const op = new WeakMap;
+     var wQ = XQ(407);
+     const qQ = ["Snowball", "Snowball Launcher", "Pebble", "Reinforced Pebble", "Ball", "Reinforced Ball", "Mango", "Moonstone Orb", ...XQ(658).p.map((QQ => `${QQ} Spawn Orb`)), "Fireball", "RPG", "Obby RPG", "Super RPG", "Grenade Launcher", "Iceball", "Bouncy Bomb", "Coconut", " … [truncated]
+       TQ = ["Obby RPG"];
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/250.js` (Changed code · before: `L935-L949` → after: `L4031-L4039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437bR4031) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-0b10e580fbf118a7214b99104d15778e3dea3c1750188120a90d4153ff01437b) · [After (L4031-L4039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/250.js#L4031-L4039) · [Before (L935-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/250.js#L935-L949)

```diff
-     function Ip(pp, ip, cp) {
-       var Op, Ip;
-       const Sp = null !== (Op = op.get(pp)) && void 0 !== Op ? Op : new Map;
-       op.set(pp, Sp);
-       const xp = null !== (Ip = Sp.get(ip[0])) && void 0 !== Ip ? Ip : [];
-       Sp.set(ip[0], xp);
-       const Lp = xp.find((pp => pp.urls.length === ip.length && pp.urls.every(((pp, cp) => pp === ip[cp]))));
-       if (Lp) return Lp.built;
-       const Yp = {
-         urls: [...ip],
-         built: cp()
-       };
-       return xp.push(Yp), Yp.built.catch((() => {
-         xp.splice(xp.indexOf(Yp), 1)
-       })), Yp.built
+     function zQ(QQ) {
+       const WQ = QQ.indexOf("|");
+       return -1 === WQ ? {
+         item: QQ,
+         clientPredictedThrower: null
+       } : {
+         item: QQ.slice(0, WQ),
+         clientPredictedThrower: QQ.slice(WQ + 1)
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/251.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/251.js` (47 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L4-L8` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L4-L11) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L4-L8)

```diff
-   41295: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       openMobLineupPreview: () => hp,
-       openMobPreview: () => bp,
-       openPetPreview: () => ap
+   38344: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => PQ,
+       h: () => wQ,
+       i: () => sQ,
+       m: () => qQ,
+       q: () => zQ,
+       s: () => TQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L10-L37` → after: `L13-L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L13-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L13-L18) · [Before (L10-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L10-L37)

```diff
-     var Op = cp(40024),
-       op = cp(40289),
-       Ip = cp(41300),
-       Sp = cp(37479),
-       xp = cp(37313),
-       Lp = cp(40443),
-       Yp = cp(41325),
-       Dp = cp(38690),
-       Ap = cp(37403),
-       Pp = cp(37385),
-       Wp = cp(37305),
-       yp = cp(38596),
-       Up = cp(38588),
-       wp = cp(38317),
-       vp = cp(38365),
-       tp = cp(38343),
- ... (12 more removed lines; see GitHub link above)
+     const wQ = 1.001,
+       qQ = .501,
+       TQ = .025,
+       zQ = .75,
+       sQ = .08,
+       FQ = 4;
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L40-L56` → after: `L21-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L21-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L21-L35) · [Before (L40-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L40-L56)

```diff
-       if (null !== Mp) return Mp;
-       const pp = document.createElement("canvas");
-       pp.classList.add("MobPreviewCanvas");
-       const ip = new Op.d(pp, !0, {
-         preserveDrawingBuffer: !0
-       });
-       ip.lOp = (0, dp.g)().WU.engine.lOp;
-       const cp = new op.c(ip);
-       cp.clearColor = new Sp.b(0, 0, 0, 0), cp.ambientColor = new Sp.Color3(1, 1, 1);
-       const Yp = new Ip.c("Gw", Math.PI / 2, Math.PI / 2, jp, xp.Zy.Zero(), cp),
-         Dp = new Lp.d("light", new xp.Zy(-.1, 1, -.3), cp);
-       return Dp.diffuse = new Sp.Color3(1, 1, 1), Dp.specular = new Sp.Color3(1, 1, 1), Dp.groundColor = new Sp.Color3(.5, .5, .5), Mp = {
-         engine: ip,
-         pw: cp,
-         canvas: pp,
-         camera: Yp
- ... (1 more removed lines; see GitHub link above)
+       const QQ = qQ,
+         WQ = TQ,
+         XQ = QQ - WQ / 2,
+         wQ = (2 * QQ - 2 * WQ) / (2 * FQ - 1),
+         zQ = [];
+       for (const qQ of [-XQ, XQ])
+         for (const TQ of [-XQ, XQ])
+           for (let XQ = 0; XQ < FQ; XQ++) {
+             const sQ = -QQ + WQ + wQ * (2 * XQ + .5);
+             zQ.push([wQ, WQ, WQ, sQ, qQ, TQ]), zQ.push([WQ, wQ, WQ, qQ, sQ, TQ]), zQ.push([WQ, WQ, wQ, qQ, TQ, sQ])
+           }
+       for (const qQ of [-XQ, XQ])
+         for (const QQ of [-XQ, XQ])
+           for (const wQ of [-XQ, XQ]) zQ.push([WQ, WQ, WQ, qQ, QQ, wQ]);
+       return zQ
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L60-L62` → after: `L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L61) · [Before (L60-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L60-L62)

```diff
-       return Cp[pp] ??= (0, wp.u)(pp, Xp().pw, !0).catch((ip => {
-         throw delete Cp[pp], ip
-       })), Cp[pp]
+       return Math.floor(QQ).toLocaleString("en-US")
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L66-L69` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L72-L73) · [Before (L66-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L66-L69)

```diff
-       let ip = Ep.get(pp);
-       return ip || (ip = Hp.w[pp].loadModel(Xp().pw, !1).then((pp => (pp.eC(!1), pp)), (ip => {
-         throw Ep.delete(pp), ip
-       })), Ep.set(pp, ip)), ip
+       const WQ = QQ.split("|")[0];
+       return (0, wQ.n)(WQ) ? WQ === wQ.d ? "cryo" : "water" : null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L73-L121` → after: `L86-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L86-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L86-L102) · [Before (L73-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L73-L121)

```diff
-       var ip, cp, Op;
-       let {
-         mobType: op,
-         variation: Ip,
-         animation: Sp
-       } = pp, Lp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, jp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const Rp = null !== (ip = null === Lp || void 0 === Lp ? void 0 : Lp.size) && void 0 !== ip ? ip : 1,
-         qp = null !== (cp = null === Lp || void 0 === Lp ? void 0 : Lp.cosmetics) && void 0 !== cp ? cp : [],
-         Mp = null !== (Op = null === Lp || void 0 === Lp ? void 0 : Lp.qm) && void 0 !== Op ? Op : null;
-       let Cp = !1,
-         Ep = null,
-         Jp = null;
-       const {
-         engine: Bp,
-         pw: Np
-       } = Xp(), Tp = Np.onBeforeRenderObservable.add((() => {
- ... (33 more removed lines; see GitHub link above)
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+       const XQ = WQ ? function(QQ, WQ, XQ) {
+         const wQ = IQ.findIndex((wQ => {
+           let [qQ, TQ, zQ] = wQ;
+           return qQ === QQ && TQ === WQ && zQ === XQ
+         }));
+         return wQ < 0 ? 0 : 1 << wQ
+       }(WQ[0], WQ[1], WQ[2]) : 0;
+       return "maker" === QQ ? {
+         kind: QQ,
+         faces: XQ
+       } : "user" === QQ ? {
+         kind: QQ,
+         faces: jQ & ~XQ
+       } : {
+         kind: QQ,
+ ... (1 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L134-L234` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L107) · [Before (L134-L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L134-L234)

```diff
-       let {
-         mobType: ip,
-         variation: cp,
-         metaInfo: Op,
-         tamed: op
-       } = pp, Ip = !1, Sp = null, xp = 0;
-       const Lp = (0, dp.g)(),
-         Yp = Lp.WU.EQ,
-         Dp = pp => {
-           xp += qp * (pp / 1e3) % (2 * Math.PI), Yp.setRotationEulerY(Sp, xp)
-         };
-       return lp(ip).then((pp => {
-         if (Ip) return;
-         Sp = (0, wp.n)(ip, Rp, !0, !0), Yp.setPosition(Sp, 0, -Rp, 0), pp.meshApi.updateVariation(Sp, ip, cp);
-         const xp = {
-           wool: "Sheared" !== Op,
- ... (85 more removed lines; see GitHub link above)
+       return "pipe" === QQ || "tank" === QQ || "maker" === QQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L237-L238` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L110-L111) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L237-L238)

```diff
-     function bp(pp) {
-       return new Tp(pp, Jp)
+     function VQ(QQ, WQ, XQ) {
+       return 0 !== (QQ.faces & 1 << XQ) && 0 !== (WQ.faces & 1 << (1 ^ XQ)) && (yQ(QQ.kind) || yQ(WQ.kind))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L241-L242` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L168-L169) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L241-L242)

```diff
-     function hp(pp) {
-       return new fp(pp)
+     function GQ(QQ, WQ) {
+       return 1e3 * (null !== WQ && void 0 !== WQ ? WQ : 0) / QQ.opMs
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L246` → after: `L173-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L173-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L173-L175) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L246)

```diff
-       return new Tp(pp, Np)
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       const XQ = GQ(pQ["Coolant Mixer"], JQ) * WQ;
+       return QQ <= 0 ? 0 : Math.ceil(QQ / XQ - 1e-9)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L249` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L181) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L249)

```diff
-   39014: (pp, ip, cp) => {
+   38698: (QQ, WQ, XQ) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L251` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L183-L184) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L251)

```diff
-       b: () => Pp
+       c: () => RQ,
+       d: () => EQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L253-L257` → after: `L186-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L186-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L186-L204) · [Before (L253-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L253-L257)

```diff
-     var Op = cp(37413),
-       op = cp(37429),
-       Ip = cp(37662),
-       Sp = cp(37433),
-       xp = cp(37421);
+     var wQ = XQ(9580),
+       qQ = XQ(9616);
+     const TQ = [
+       [1, 0, 0],
+       [-1, 0, 0],
+       [0, 0, 1],
+       [0, 0, -1],
+       [0, 1, 0],
+       [0, -1, 0]
+     ];
+     var zQ = XQ(9637),
+       sQ = XQ(38505),
+       FQ = XQ(9634);
+     const PQ = {
+       1: [0, -1],
+       2: [-1, 0],
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L260-L270` → after: `L207-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L207-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L207-L212) · [Before (L260-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L260-L270)

```diff
-       return `\n\t\t\t\t${(0,xp.v)(pp,"mat2","rotate",[{name:"ang",type:"float"}],`\
-       n\ t\ t\ t\ t\ t$ {
-         (0, xp.A)(pp, "float", "s", "sin(ang)")
-       }\
-       n\ t\ t\ t\ t\ t$ {
-         (0, xp.A)(pp, "float", "c", "cos(ang)")
-       }\
-       n\ t\ t\ t\ t\ treturn $ {
-         (0, xp.j)(pp, "mat2", "c", "s", "-s", "c")
-       };\
-       n\ t\ t\ t\ t`)}\n\t\t\t`
+       let [WQ, XQ] = QQ;
+       return [-XQ, WQ]
+     }
+ 
+     function JQ(QQ, WQ) {
+       return QQ[0] === WQ[0] && QQ[1] === WQ[1]
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L274-L277` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L216) · [Before (L274-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L274-L277)

```diff
-       let cp = (0, xp.sb)(pp, "skele" + (ip - 1));
-       for (let op = ip - 2; op >= 0; op--) cp = (0, xp.jb)(pp, `boneIdx == ${op}`, (0, xp.sb)(pp, `skele${op}`), cp);
-       const Op = "bone.yz + rotate(bone.x) * pivot - pivot";
-       return `\n\t\t\t\t${(0,xp.A)(pp,"int","boneIdx",(0,xp.qb)(pp,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,xp.A)(pp,"vec3","bone",cp)}\n\t\t\t\t${(0,xp.A)(pp,"vec2","pivot",(0,xp.j)(pp,"vec2","0.0",`${(0,xp.zb)(pp,"position")}.z`))}\n\t\t\t\t${(0,xp.Y)(pp)?`positi … [truncated]
+       return QQ[0] * WQ[0] + QQ[1] * WQ[1] === 0
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L281` → after: `L244-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L244-L245) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L281)

```diff
-       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,xp.j)(pp,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+       var WQ, XQ;
+       return null !== (WQ = null === (XQ = wQ.h[QQ]) || void 0 === XQ ? void 0 : XQ.meta.rootName) && void 0 !== WQ ? WQ : ""
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L429-L434` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L248-L249) · [Before (L429-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L429-L434)

```diff
-     function vp(pp, ip) {
-       return Object.assign((function(pp, cp, Op, op) {
-         return ip(this.featureState, pp, cp, Op, op)
-       }), {
-         Py: pp
-       })
+     function vQ(QQ) {
+       return bQ(QQ) === jQ.k && (0, jQ._)(wQ.h[QQ].name)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L438-L462` → after: `L261-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L261-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L261-L265) · [Before (L438-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L438-L462)

```diff
-       const ip = class extends Wp.c {
-           constructor(ip, cp) {
-             const Op = (0, Up.$)(ip),
-               op = Op && (0, Up.s)(Op, pp.name);
-             for (var Ip = arguments.length, Sp = new Array(Ip > 2 ? Ip - 2 : 0), xp = 2; xp < Ip; xp++) Sp[xp - 2] = arguments[xp];
-             super(ip, pp.name, pp.priority, op ? op.defines : pp.defines(...Sp), !1), this.featureState = void 0, this.featureState = cp, this._pluginManager._addPlugin(this), this._enable(!0), (0, Up.v)(this._material, pp, this.featureState, this._pluginDefineNames)
-           }
-           getClassName() {
-             return pp.className
-           }
-           isCompatible(pp) {
-             return pp === wp.b.GLSL || pp === wp.b.WGSL
-           }
-         },
-         cp = (0, yp.l)(pp);
-       for (const [Op, op] of Object.entries(yp.e)) {
- ... (9 more removed lines; see GitHub link above)
+       var WQ, XQ;
+       const qQ = null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.meta;
+       return (null === qQ || void 0 === qQ ? void 0 : qQ.rootName) !== HQ.l ? null : {
+         rot: null !== (XQ = qQ.rot) && void 0 !== XQ ? XQ : 1,
+         half: (0, HQ.g)(qQ.rootName, qQ.metaStr)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L471-L500` → after: `L269-L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L269-L270) · [Before (L471-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L471-L500)

```diff
-     function kp(pp, ip, cp) {
-       return (0, jp.h)(cp, ip.urls, (() => async function(pp, ip, cp) {
-         const {
-           width: Op
-         } = pp[0].getSize(), op = pp.map(((pp, cp) => {
-           var op;
-           const Ip = Math.round(pp.getSize().height / Op),
-             Sp = null === ip || void 0 === ip ? void 0 : ip[cp];
-           return {
-             pixels: Sp && Sp.byteLength === Op * Op * Ip * 4 ? Sp : null !== (op = mp.get(pp.getInternalTexture())) && void 0 !== op ? op : pp._readPixelsSync(),
-             layers: Ip
-           }
-         })), Ip = cp.gy().getCaps().texture2DArrayMaxLayerCount, xp = (0, jp.d)(op, Op, Ip).map((pp => {
-           let {
-             pixels: ip,
-             layers: op
- ... (14 more removed lines; see GitHub link above)
+     function hQ(QQ, WQ, XQ, wQ) {
+       return lQ(QQ(WQ, XQ, wQ))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L502-L525` → after: `L272-L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L272-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L272-L279) · [Before (L502-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L502-L525)

```diff
-     const mp = new WeakMap;
-     var Rp = cp(38069);
-     class qp extends(tp(Lp.f)) {
-       constructor(pp, ip) {
-         super(pp, ip), this.loaded = new Set, this.mirrors = void 0, this.mirrors = ip.textures.map((pp => pp.mirror)), this.mirrors.forEach(((pp, ip) => {
-           pp.onLoadObservable.add((pp => {
-             this.setTextureArrayData(pp, ip).catch((pp => {
-               console.error(`Failed to build the texture arrays, at atlas ${ip}`, pp)
-             }))
-           }))
-         })), (0, Rp.n)(ip, pp.shaderLanguage)
-       }
-       async setTextureArrayData(pp, ip) {
-         const cp = this.featureState,
-           {
-             width: Op,
- ... (8 more removed lines; see GitHub link above)
+ 
+     function iQ(QQ, WQ, XQ, wQ, qQ) {
+       let {
+         rot: TQ,
+         half: zQ
+       } = qQ;
+       const [sQ, FQ] = (0, HQ.k)(TQ, zQ), PQ = hQ(QQ, WQ + sQ, XQ, wQ + FQ);
+       return null !== PQ && PQ.rot === TQ && PQ.half === HQ.p[zQ]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L527-L538` → after: `L281-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L281-L284) · [Before (L527-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L527-L538)

```diff
-     var Mp = cp(41378),
-       Cp = cp(40498),
-       Ep = cp(37313),
-       Xp = cp(41383),
-       lp = cp(40589),
-       Qp = cp(40481),
-       Jp = cp(41325),
-       Bp = cp(37800),
-       Np = cp(41391);
-     class Tp extends Mp.c {
-       getData() {
-         return null
+     var cQ = XQ(38703);
+     const AQ = [new class {
+       constructor() {
+         this.reshapeOffsets = IQ
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L540-L542` → after: `L286-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L286-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L286-L288) · [Before (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L540-L542)

```diff
-       _rebuild() {}
-       restore() {
-         super._rebuild()
+       handles(QQ) {
+         var WQ;
+         return "Stairs" === (null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.model)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L544-L572` → after: `L290-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L290-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L290-L291) · [Before (L544-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L544-L572)

```diff
-     }
-     const fp = {
-       Mesh: Xp.c,
-       TransformNode: Jp.b,
-       my: Mp.c,
-       VertexBuffer: Mp.f,
-       BoundingInfo: Cp.d,
-       Zy: Ep.Zy,
-       ArenaBuffer: Tp,
-       SubMesh: Qp.d,
-       VertexData: lp.d,
-       MirroredGeometry: Np.b,
-       meshFromArrays: Np.e,
-       plainMeshFromArrays: Np.f
-     };
-     (0, Bp.g)(fp);
- ... (13 more removed lines; see GitHub link above)
+       affects(QQ) {
+         return this.handles(QQ)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L574-L607` → after: `L293-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L293-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L293-L297) · [Before (L574-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L574-L607)

```diff
-     }
- 
-     function ap(pp, ip) {
-       if (!(ip instanceof Op.StandardMaterial) || ip.specularTexture) return;
-       const {
-         r: cp,
-         g: op,
-         b: Ip
-       } = ip.specularColor;
-       0 === cp && 0 === op && 0 === Ip && (pp.SPECULARTERM = !1)
-     }(0, Dp.d)({
-       disableUnusedSpecularTerm: ap
-     });
-     var np = cp(37519),
-       Fp = cp(37807);
-     const gp = new RegExp(`^#define ${Yp.b}\\s*$`, "m");
- ... (18 more removed lines; see GitHub link above)
+       shape(QQ, WQ, XQ, qQ, TQ) {
+         const zQ = this.stairsOf(TQ),
+           sQ = this.cornerAt(QQ, WQ, XQ, qQ, zQ),
+           PQ = zQ.half === FQ.b.top ? "top" : "bot";
+         return (0, wQ.k)(`${wQ.h[TQ].meta.rootName}|meta|rot${zQ.rot}|${PQ}${null===sQ?"":`|${sQ}`}`)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L609-L616` → after: `L299-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L299-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L299-L306) · [Before (L609-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L609-L616)

```diff
-       prewarmDither(pp) {
-         if (this.Ry || pp.uR()) return !1;
-         const ip = new Qp.d(0, 0, 0, 0, 0, pp, void 0, !1, !1);
-         this.featureState.prewarmingDither = !0;
-         try {
-           this._material.isReadyForSubMesh(pp, ip)
-         } finally {
-           this.featureState.prewarmingDither = !1
+       stairsOf(QQ) {
+         const {
+           rot: WQ,
+           halfblockPlacement: XQ
+         } = wQ.h[QQ].meta;
+         return {
+           rot: WQ,
+           half: XQ
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L620-L621` → after: `L309-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L309-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L309-L311) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L620-L621)

```diff
-       dispose(pp) {
-         this.Ry = !0, super.dispose(pp)
+       stairsAt(QQ, WQ, XQ, wQ) {
+         const qQ = QQ(WQ, XQ, wQ);
+         return this.handles(qQ) ? this.stairsOf(qQ) : null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L623-L642` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L313) · [Before (L623-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L623-L642)

```diff
-     }
-     const rp = new Map;
- 
-     function Zp(pp, ip) {
-       rp.set(pp, ip)
-     }
-     Zp(xp.d, Hp), Zp(Lp.f, qp), Zp(Yp.h, Gp), Zp(Dp.g, hp), (0, Ap.e)({
-       create: (pp, ip) => {
-         const cp = new Op.StandardMaterial(pp.name, ip);
-         return (0, np.p)(pp, cp), cp.detailMap._pluginDefineNames
-       },
-       write: (pp, ip, cp) => {
-         (0, np.S)(pp.mirror, ip, cp)
-       },
-       addFeature: (pp, ip, cp) => {
-         const Op = rp.get(ip.feature);
- ... (4 more removed lines; see GitHub link above)
+       cornerAt(QQ, WQ, XQ, wQ, qQ) {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L644-L649` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L315-L316) · [Before (L644-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L644-L649)

```diff
-           url: Op,
-           noMipmap: op,
-           invertY: Ip,
-           samplingMode: xp,
-           data: Lp,
-           sets: Yp
+           rot: TQ,
+           half: zQ
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L651-L673` → after: `L318-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L318-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L318-L322) · [Before (L651-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L651-L673)

```diff
-         if (!Lp) {
-           const cp = new Sp.d(Op, ip, op, Ip, xp);
-           return Object.assign(cp, Yp), void(0, Pp.K)(pp, cp)
-         }
-         const Dp = {},
-           Ap = new Promise(((pp, ip) => {
-             Dp.onLoad = pp, Dp.onError = (pp, cp) => {
-               ip(new Error(`${Lp.context}: ${(null===cp||void 0===cp?void 0:cp.message)||pp||"Failed to load texture"}`))
-             }
-           })),
-           {
-             mimeType: Wp,
-             bytes: yp,
-             label: Up
-           } = Lp,
-           wp = {
- ... (7 more removed lines; see GitHub link above)
+         const sQ = PQ[TQ],
+           FQ = qQ => {
+             let [sQ, FQ] = qQ;
+             const PQ = this.stairsAt(QQ, WQ + sQ, XQ, wQ + FQ);
+             return null !== PQ && PQ.rot === TQ && PQ.half === zQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L675-L726` → after: `L324-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L324-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L324-L336) · [Before (L675-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L675-L726)

```diff
-           vp = new Sp.d(null, ip, wp);
-         np.t.set(vp, Ap), Object.assign(vp, Yp), vp.updateURL(Op, yp);
-         const tp = vp.getInternalTexture();
-         tp && (tp.label = Up), pp.uvSet = vp.coordinatesIndex, pp.matrix.set((0, np.L)(vp)), (0, Pp.K)(pp, vp)
-       },
-       cube: (pp, ip, cp) => {
-         let {
-           rootUrl: Op,
-           files: Ip,
-           noMipmap: xp,
-           luminance: Lp
-         } = cp;
-         const {
-           samplingMode: Yp
-         } = pp.sampler, Dp = Yp === (0, Pp.z)(xp) ? null : () => {
-           (0, np.J)(Ap, Yp)
- ... (36 more removed lines; see GitHub link above)
+           IQ = this.stairsAt(QQ, WQ + sQ[0], XQ, wQ + sQ[1]);
+         if (null !== IQ && IQ.half === zQ) {
+           const QQ = PQ[IQ.rot];
+           if (rQ(sQ, QQ) && !FQ([-QQ[0], -QQ[1]])) return JQ(QQ, gQ(sQ)) ? "outerLeft" : "outerRight"
+         }
+         const jQ = this.stairsAt(QQ, WQ - sQ[0], XQ, wQ - sQ[1]);
+         if (null !== jQ && jQ.half === zQ) {
+           const QQ = PQ[jQ.rot];
+           if (rQ(sQ, QQ) && !FQ(QQ)) return JQ(QQ, gQ(sQ)) ? "innerLeft" : "innerRight"
+         }
+         return null
+       }
+     }, new class {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L728-L730` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L338) · [Before (L728-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L728-L730)

```diff
-         super(...arguments), this.model = null, this.onGeometryUpdated = (pp, ip) => {
-           this.releaseUnlessInstanced(ip)
-         }, this.onLinked = null
+         this.reshapeOffsets = TQ, this.rootIds = new Set(qQ.f.map((QQ => (0, wQ.k)(QQ))))
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L732` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L340) · [Before (L732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L732)

```diff
-       link(pp) {
+       handles(QQ) {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L734-L804` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L342-L343) · [Before (L734-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L734-L804)

```diff
-         (0, Yp.m)(pp), this.model = pp, null === (ip = this.onLinked) || void 0 === ip || ip.call(this, pp)
-       }
-       relink() {
-         this.release();
-         const pp = [];
-         for (const op of Object.values(this._vertexBuffers))
-           if (!op.getIsInstanced()) {
-             const {
-               byteOffset: ip,
-               byteStride: cp,
-               type: Op,
-               normalized: Ip
-             } = op;
-             pp.push({
-               kind: op.getKind(),
-               data: op.getData(),
- ... (55 more removed lines; see GitHub link above)
+         const XQ = null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.meta;
+         return void 0 !== XQ && this.rootIds.has(XQ.rootId)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L806-L807` → after: `L345-L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L345-L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L345-L346) · [Before (L806-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L806-L807)

```diff
-       removeVerticesData(pp) {
-         this.releaseUnlessInstanced(pp), super.removeVerticesData(pp)
+       affects(QQ) {
+         return this.handles(QQ)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L809-L810` → after: `L348-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L348-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L348-L367) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L809-L810)

```diff
-       dispose() {
-         this.release(), super.dispose()
+       placedBy(QQ) {
+         return wQ.h[QQ].meta.rootName === qQ.j ? null : qQ.j
+       }
+       shape(QQ, WQ, XQ, TQ, zQ) {
+         const {
+           rootId: sQ,
+           rootName: FQ,
+           rot: PQ
+         } = wQ.h[zQ].meta;
+         let gQ = 0;
+         return qQ.s[PQ].forEach(((qQ, zQ) => {
+           var FQ;
+           let [JQ, rQ, IQ] = qQ;
+           const jQ = null === (FQ = wQ.h[QQ(WQ + JQ, XQ + rQ, TQ + IQ)]) || void 0 === FQ ? void 0 : FQ.meta;
+           (null === jQ || void 0 === jQ ? void 0 : jQ.rootId) === sQ && jQ.rot === PQ && (gQ |= 1 << zQ)
+         })), (0, wQ.k)((0, qQ.d)(FQ, PQ, gQ))
+ ... (4 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L812` → after: `L369-L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L369-L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L369-L417) · [Before (L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L812)

```diff
-       releaseUnlessInstanced(pp) {
+       handles(QQ) {
+         const WQ = bQ(QQ);
+         return DQ.has(WQ) || WQ === jQ.k
+       }
+       affects(QQ) {
+         const WQ = bQ(QQ);
+         return pQ.has(WQ) || GQ.has(WQ) || WQ === yQ || WQ === jQ.k || void 0 !== jQ.c[WQ]
+       }
+       shape(QQ, WQ, XQ, qQ, TQ, zQ) {
+         const {
+           rootName: sQ,
+           rot: FQ
+         } = wQ.h[TQ].meta;
+         return sQ === jQ.k ? zQ ? TQ : function(QQ, WQ, XQ, qQ, TQ) {
+           const [zQ, sQ] = jQ.g[TQ - 1];
+           for (let FQ = 1; FQ <= jQ.K; FQ++) {
+ ... (33 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L814` → after: `L419-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L419-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L419-L440) · [Before (L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L814)

```diff
-         pp && null !== (ip = this.getVertexBuffer(pp)) && void 0 !== ip && ip.getIsInstanced() || this.release()
+         return (null === (WQ = wQ.h[QQ]) || void 0 === WQ ? void 0 : WQ.meta.rootId) === this.rootId
+       }
+       affects(QQ) {
+         return this.handles(QQ)
+       }
+       shape(QQ, WQ, XQ, qQ, TQ, zQ) {
+         const sQ = lQ(TQ);
+         return (0, wQ.k)((FQ = sQ.rot, null !== (PQ = zQ ? this.reshapedHalf(QQ, WQ, XQ, qQ, sQ) : this.placedHalf(QQ, WQ, XQ, qQ, sQ.rot)) ? (0, HQ.e)(HQ.l, FQ, PQ) : 1 === FQ ? HQ.l : `${HQ.l}|meta|rot${FQ}`));
+         var FQ, PQ
+       }
+       placedHalf(QQ, WQ, XQ, wQ, qQ) {
+         const [TQ, zQ] = dQ.e[qQ];
+         for (const [sQ, FQ] of [
+             ["right", 1],
+             ["left", -1]
+           ]) {
+ ... (6 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L816-L817` → after: `L442-L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L442-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L442-L448) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L816-L817)

```diff
-       release() {
-         this.model && ((0, Yp.v)(this.model), this.model = null)
+       reshapedHalf(QQ, WQ, XQ, wQ, qQ) {
+         if (null !== qQ.half && iQ(QQ, WQ, XQ, wQ, qQ)) return qQ.half;
+         for (const TQ of ["right", "left"]) {
+           const [zQ, sQ] = (0, HQ.k)(qQ.rot, TQ), FQ = hQ(QQ, WQ + zQ, XQ, wQ + sQ);
+           if (null !== FQ && FQ.rot === qQ.rot && FQ.half === HQ.p[TQ]) return TQ
+         }
+         return null
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L819` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L450) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L819)

```diff
-     }
+     }, new cQ.b];
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L821-L839` → after: `L452-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L452-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L452-L456) · [Before (L821-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L821-L839)

```diff
-     function Ap(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new xp.c(pp, cp);
-       const op = (0, Yp.j)(ip),
-         {
-           positions: Ip,
-           normals: Ap,
-           uvs: Pp,
-           indices: Wp,
-           named: yp = {}
-         } = ip,
-         Up = new Lp.d;
-       Up.positions = Ip, Up.normals = null !== Ap && void 0 !== Ap ? Ap : null, Up.uvs = null !== Pp && void 0 !== Pp ? Pp : null, Up.indices = Wp;
-       const wp = new Dp(Sp.b.RandomId(), cp, Up, !1, Op);
-       for (const {
-           kind: Sp,
-           components: xp
- ... (3 more removed lines; see GitHub link above)
+     function RQ(QQ, WQ, XQ, wQ, qQ) {
+       let TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       for (const zQ of AQ)
+         if (zQ.handles(qQ)) return zQ.shape(QQ, WQ, XQ, wQ, qQ, TQ);
+       return qQ
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L842-L856` → after: `L459-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L459-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L459-L464) · [Before (L842-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L842-L856)

```diff
-     function Pp(pp, ip, cp) {
-       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       const op = new xp.c(pp, cp),
-         {
-           positions: Ip,
-           normals: Sp,
-           uvs: Yp,
-           indices: Dp
-         } = ip;
-       return Object.assign(new Lp.d, {
-         positions: Ip,
-         normals: Sp,
-         uvs: Yp,
-         indices: Dp
-       }).applyToMesh(op, Op), op
+     function EQ(QQ) {
+       for (const wQ of AQ) {
+         var WQ, XQ;
+         if (wQ.handles(QQ)) return null !== (WQ = null === (XQ = wQ.placedBy) || void 0 === XQ ? void 0 : XQ.call(wQ, QQ)) && void 0 !== WQ ? WQ : null
+       }
+       return null
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L859` → after: `L467-L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L467-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L467-L482) · [Before (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L859)

```diff
-   41375: (pp, ip, cp) => {
+   38703: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       b: () => HQ,
+       c: () => GQ,
+       g: () => pQ
+     });
+     var wQ = XQ(9580),
+       qQ = XQ(9608),
+       TQ = XQ(9664),
+       zQ = XQ(38711),
+       sQ = XQ(9660);
+     const FQ = (0, zQ.E)("pipe"),
+       PQ = (0, zQ.E)("tank"),
+       gQ = (0, zQ.E)("port"),
+       JQ = "Reactor Port";
+ 
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L861-L867` → after: `L484-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L484-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L484-L509) · [Before (L861-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L861-L867)

```diff
-       const Op = ip * ip * 4,
-         op = pp[0].layers,
-         Ip = op * (pp.length - 1) + pp[pp.length - 1].layers,
-         Sp = new Uint8Array(Ip * Op);
-       pp.forEach(((ip, cp) => {
-         const Ip = cp + 1 < pp.length ? Math.min(ip.layers, op) : ip.layers;
-         Sp.set(new Uint8Array(ip.pixels.buffer, ip.pixels.byteOffset, Ip * Op), cp * op * Op)
+       const wQ = new Set([TQ.g, TQ.d, JQ, ...WQ, ...XQ, ...QQ ? [zQ.k] : []]);
+       return {
+         makers: new Set(WQ),
+         roots: wQ
+       }
+     }
+     const IQ = {
+         water: rQ(!0, ["Condenser"], ["Centrifuge", "Synthesizer", zQ.d]),
+         cryo: rQ(!1, [zQ.d], [])
+       },
+       jQ = new Set([...IQ.water.roots, ...IQ.cryo.roots]),
+       BQ = {
+         nx: [-1, 0, 0],
+         ny: [0, -1, 0],
+         nz: [0, 0, -1],
+         px: [1, 0, 0],
+ ... (10 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L869-L880` → after: `L511-L554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L511-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L511-L554) · [Before (L869-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L869-L880)

```diff
-       const xp = Math.max(1, Math.min(Ip, cp || Ip));
-       if (xp === Ip) return [{
-         pixels: Sp,
-         layers: Ip
-       }];
-       const Lp = [];
-       for (let Yp = 0; Yp < Ip; Yp += xp) {
-         const pp = Math.min(Ip, Yp + xp);
-         Lp.push({
-           pixels: Sp.slice(Yp * Op, pp * Op),
-           layers: pp - Yp
-         })
+ 
+     function DQ(QQ) {
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "water";
+       const XQ = wQ.h[QQ],
+         qQ = null === XQ || void 0 === XQ ? void 0 : XQ.meta.rootName,
+         rQ = IQ[WQ];
+       if (!qQ || !rQ.roots.has(qQ)) return null;
+       if ((0, TQ.n)(qQ)) return (0, zQ.D)(XQ.name) === WQ ? FQ : null;
+       if (qQ === zQ.k) return PQ;
+       if (qQ === JQ) return XQ.name.endsWith("|Water") ? gQ : null;
+       const [jQ, BQ] = sQ.g[(XQ.meta.rot || 1) - 1];
+       return (0, zQ.E)(rQ.makers.has(qQ) ? "maker" : "user", [-jQ, 0, -BQ])
+     }
+ 
+     function pQ(QQ, WQ, XQ, qQ) {
+       let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "water";
+ ... (28 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L882` → after: `L556-L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L556-L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L556-L573) · [Before (L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L882)

```diff
-       return Lp
+       return UQ.get(QQ)
+     }
+     const vQ = new Map(Array.from({
+       length: TQ.k + 1
+     }, ((QQ, WQ) => [(0, TQ.q)(WQ), WQ])));
+ 
+     function dQ(QQ, WQ, XQ, qQ, TQ, zQ) {
+       return yQ.some(((sQ, FQ) => {
+         var PQ, gQ, JQ;
+         let [rQ, IQ, jQ] = sQ;
+         if (0 === (zQ >> FQ & 1)) return !1;
+         const BQ = null !== (PQ = null === (gQ = wQ.h[QQ(WQ + rQ, XQ + IQ, qQ + jQ)]) || void 0 === gQ ? void 0 : gQ.name) && void 0 !== PQ ? PQ : "",
+           yQ = bQ(BQ);
+         return yQ ? yQ.XI === TQ && yQ.full : (null !== (JQ = function(QQ) {
+           var WQ;
+           return null !== (WQ = vQ.get(QQ)) && void 0 !== WQ ? WQ : null
+ ... (2 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L888` → after: `L622-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L622-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L622-L641) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L888)

```diff
-     const op = new WeakMap;
+     const wQ = ["Chest", "Loot Chest", "Moonstone Chest"],
+       qQ = [{
+         name: "Workbench",
+         exactMatch: !0
+       }, {
+         name: "Furnace",
+         exactMatch: !0
+       }, {
+         name: "Artisan Bench",
+         exactMatch: !0
+       }, {
+         name: "Potion Table",
+         exactMatch: !0
+       }, {
+         name: "Salvaging Table",
+         exactMatch: !0
+ ... (4 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/251.js` (Changed code · before: `L890-L904` → after: `L643-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900eR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-211f421a1a54dc688790bec4bfc4fdc50c77af69175681ff1d1fc8c3c6cf900e) · [After (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/251.js#L643-L644) · [Before (L890-L904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/251.js#L890-L904)

```diff
-     function Ip(pp, ip, cp) {
-       var Op, Ip;
-       const Sp = null !== (Op = op.get(pp)) && void 0 !== Op ? Op : new Map;
-       op.set(pp, Sp);
-       const xp = null !== (Ip = Sp.get(ip[0])) && void 0 !== Ip ? Ip : [];
-       Sp.set(ip[0], xp);
-       const Lp = xp.find((pp => pp.urls.length === ip.length && pp.urls.every(((pp, cp) => pp === ip[cp]))));
-       if (Lp) return Lp.built;
-       const Yp = {
-         urls: [...ip],
-         built: cp()
-       };
-       return xp.push(Yp), Yp.built.catch((() => {
-         xp.splice(xp.indexOf(Yp), 1)
-       })), Yp.built
+     function TQ(QQ) {
+       return qQ.find((WQ => WQ.exactMatch ? QQ === WQ.name : QQ.includes(WQ.name)))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/252.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/252.js` (42 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L4` → after: `L4-L3844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4-L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4-L3844) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L4)

```diff
-   41251: (pp, ip, cp) => {
+   39373: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return !(!QQ.lobbyLeaderboardInfo && !QQ.lobbyManage)
+     }
+     XQ.d(WQ, {
+       b: () => wQ
+     })
+   },
+   39301: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       d: () => TQ
+     });
+     var wQ = XQ(31),
+       qQ = XQ(2036);
+ 
+     function TQ(QQ) {
+ ... (3825 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L6-L7` → after: `L3846-L3847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3846-L3847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3846-L3847) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L6-L7)

```diff
-       d: () => Ip,
-       f: () => Sp
+       b: () => TQ,
+       e: () => zQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L9` → after: `L3849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3849) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L9)

```diff
-     var Op = cp(1971);
+     var wQ = XQ(38713);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L13` → after: `L3853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3853) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L13)

```diff
-       op = !0
+       return qQ
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L16-L17` → after: `L3856-L3862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3856-L3862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3856-L3862) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L16-L17)

```diff
-     function Sp() {
-       op && (op = !1, (0, Op.b)())
+     function zQ(QQ) {
+       qQ = QQ, QQ ? wQ.h.setMultiplierType("emoteWheel", 0) : wQ.h.removeMultiplier("emoteWheel")
+     }
+   },
+   39370: (QQ, WQ, XQ) => {
+     function wQ(QQ) {
+       return Boolean(QQ.zD.useInventory && QQ.zD.useFullInventory && QQ.rD.LWQ(QQ.RC))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L20` → after: `L3868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3868) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L20)

```diff
-   41248: (pp, ip, cp) => {
+   39267: (QQ, WQ, XQ) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L22-L24` → after: `L3870-L3871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3870-L3871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3870-L3871) · [Before (L22-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L22-L24)

```diff
-       b: () => Sp,
-       c: () => Ip,
-       d: () => xp
+       d: () => TQ,
+       h: () => qQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L26-L27` → after: `L3873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3873) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L26-L27)

```diff
-     var Op = cp(40769),
-       op = cp(40783);
+     var wQ = XQ(37428);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L29-L46` → after: `L3875-L3878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3875-L3878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3875-L3878) · [Before (L29-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L29-L46)

```diff
-     function Ip(pp) {
-       if (pp.queries.drawCensus() < Op.ob.BYTES) return null;
-       const ip = pp.memoryData(pp.scratch(), Op.ob.BYTES, 4, "the draw census");
-       return null === ip ? null : {
-         terrainOpaque: Op.ob.terrainOpaque(ip, 0),
-         terrainTransparent: Op.ob.terrainTransparent(ip, 0),
-         terrainPack: Op.ob.terrainPack(ip, 0),
-         earthSky: Op.ob.earthSky(ip, 0),
-         skyMeshes: Op.ob.skyMeshes(ip, 0),
-         regular: Op.ob.regular(ip, 0),
-         thin: Op.ob.thin(ip, 0),
-         line: Op.ob.line(ip, 0),
-         text: Op.ob.text(ip, 0),
-         particles: Op.ob.particles(ip, 0),
-         terrainParts: Op.ob.terrainParts(ip, 0),
-         terrainCompiling: Op.ob.terrainCompiling(ip, 0),
- ... (2 more removed lines; see GitHub link above)
+     function qQ(QQ, WQ) {
+       return {
+         replayedClipName: QQ,
+         replayedClipAgeSeconds: WQ
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L50-L62` → after: `L3882-L3899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3882-L3899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3882-L3899) · [Before (L50-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L50-L62)

```diff
-     function Sp(pp) {
-       const {
-         terrainOpaque: ip,
-         terrainTransparent: cp,
-         earthSky: Op,
-         skyMeshes: op,
-         regular: Ip,
-         thin: Sp,
-         line: xp,
-         text: Lp,
-         particles: Yp
-       } = pp;
-       return ip + cp + Op + op + Ip + Sp + xp + Lp + Yp
+     function TQ(QQ, WQ, XQ, qQ, TQ) {
+       const zQ = function(QQ) {
+           if ("object" !== typeof QQ || null === QQ) return null;
+           const {
+             replayedClipName: WQ,
+             replayedClipAgeSeconds: XQ
+           } = QQ;
+           return "string" === typeof WQ && "number" === typeof XQ ? {
+             Sw: WQ,
+             tw: XQ
+           } : null
+         }(XQ),
+         sQ = null === zQ ? XQ : null,
+         {
+           Sw: FQ = null,
+           tw: PQ = 0
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L66-L98` → after: `L3911-L3971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3911-L3971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3911-L3971) · [Before (L66-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L66-L98)

```diff
-       const pp = (0, op.k)();
-       return !0 === (null === pp || void 0 === pp ? void 0 : pp.isCoreRunning) ? function(pp) {
-         const ip = Ip(pp);
-         if (null === ip) return [];
-         const {
-           terrainOpaque: cp,
-           terrainTransparent: Op,
-           terrainPack: op,
-           earthSky: xp,
-           skyMeshes: Lp,
-           regular: Yp,
-           thin: Dp,
-           line: Ap,
-           text: Pp,
-           particles: Wp
-         } = ip;
- ... (17 more removed lines; see GitHub link above)
+       var QQ, WQ, XQ, wQ;
+       const zQ = (0, TQ.f)(),
+         sQ = null !== (QQ = null === (WQ = zQ.rD.EWQ(zQ.RC)) || void 0 === WQ ? void 0 : WQ.selectedItem) && void 0 !== QQ ? QQ : null,
+         FQ = sQ ? (0, TQ.d)().getItemStat(zQ.RC, sQ.name, "attackCooldownMs") : null,
+         PQ = (0, qQ.cd)(FQ, null === sQ || void 0 === sQ || null === (XQ = sQ.attributes.customAttributes) || void 0 === XQ || null === (wQ = XQ.enchantments) || void 0 === wQ ? void 0 : wQ["Attack Speed"]);
+       return Math.max(56, Math.ceil((PQ + 30) / 3))
+     }
+     class sQ {
+       constructor(QQ, WQ) {
+         this.tries = void 0, this.dueMs = void 0, this.intervalMs = void 0, this.tries = [QQ], this.dueMs = QQ, this.intervalMs = WQ
+       }
+       spacedBy(QQ, WQ) {
+         if (QQ === this.intervalMs) return this;
+         const XQ = this.tries[this.tries.length - 1],
+           wQ = new sQ(XQ, QQ);
+         return wQ.dueMs = Math.max(XQ, WQ - QQ), wQ
+ ... (45 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L101` → after: `L3975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3975) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L101)

```diff
-   41225: (pp, ip, cp) => {
+   39274: (QQ, WQ, XQ) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L103-L105` → after: `L3977-L3982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3977-L3982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3977-L3982) · [Before (L103-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L103-L105)

```diff
-       b: () => yp,
-       d: () => Pp,
-       h: () => Wp
+       e: () => jQ,
+       f: () => gQ,
+       i: () => IQ,
+       j: () => rQ,
+       l: () => BQ,
+       n: () => JQ
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L107-L112` → after: `L3984-L3989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3984-L3989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3984-L3989) · [Before (L107-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L107-L112)

```diff
-     var Op = cp(1975),
-       op = cp(1313),
-       Ip = cp(40783),
-       Sp = cp(40813),
-       xp = cp(40818),
-       Lp = cp(40837);
+     var wQ = XQ(39279),
+       qQ = XQ(37509),
+       TQ = XQ(3907),
+       zQ = XQ(2010),
+       sQ = XQ(31),
+       FQ = XQ(2997);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L116-L118` → after: `L3992-L3993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3992-L3993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3992-L3993) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L116-L118)

```diff
-     function Ap(pp) {
-       const ip = (0, Ip.k)();
-       return null !== ip && +pp === ip.api.localId
+     function gQ() {
+       return PQ
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L122-L140` → after: `L3997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR3997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L3997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L3997) · [Before (L122-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L122-L140)

```diff
-       Dp || (Dp = !0, (0, Lp.h)(Sp.p, (pp => {
-         var ip, cp;
-         const Op = (0, xp.f)(Sp.p, pp);
-         if (!(0, xp.b)(Op)) return;
-         const op = Op;
-         Ap(op.Np) && Wp(op.Tp, {
-           icon: op.Oc,
-           level: op.Ic,
-           displayName: null !== (ip = op.bp) && void 0 !== ip ? ip : null,
-           durationMs: null !== (cp = op.oc) && void 0 !== cp ? cp : null
-         })
-       })), (0, Lp.h)(Sp.P, (pp => {
-         const ip = (0, xp.f)(Sp.P, pp);
-         if (!(0, xp.b)(ip)) return;
-         const cp = ip;
-         Ap(cp.Np) && Op.e.remove(cp.Tp)
- ... (3 more removed lines; see GitHub link above)
+       PQ.clear()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L143-L150` → after: `L4000-L4003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4000-L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4000-L4003) · [Before (L143-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L143-L150)

```diff
-     function Wp(pp, ip) {
-       Op.e.update(pp, ip), Yp.forEach((ip => {
-         ip(pp)
-       }))
-     }
-     const yp = {
-       localEffectUpdated: {
-         watch: pp => Yp.add(pp)
+     function rQ() {
+       for (const QQ of PQ.ids()) {
+         const WQ = PQ.getName(QQ);
+         void 0 !== WQ && zQ.e.delete(WQ)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L167-L207` → after: `L4009-L4013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4009-L4013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4009-L4013) · [Before (L167-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L167-L207)

```diff
-       var cp;
-       return null === (cp = Yp.get(pp)) || void 0 === cp ? void 0 : cp[ip]
-     }(0, Sp.h)(Op.Zb.NewOtherEntitySettings, (pp => {
-       pp.payloadKind === op.kc.Msgpack && Lp.some((ip => function(pp, ip) {
-         const cp = ip[0];
-         for (let Op = pp.indexOf(cp); - 1 !== Op && Op + ip.length <= pp.length; Op = pp.indexOf(cp, Op + 1)) {
-           let cp = 1;
-           for (; cp < ip.length && pp[Op + cp] === ip[cp];) cp++;
-           if (cp === ip.length) return !0
-         }
-         return !1
-       }(pp.payload, ip))) && function(pp) {
-         if (null === pp || "object" !== typeof pp || null === pp.settings || "object" !== typeof pp.settings) return;
-         const ip = String(pp.eId),
-           cp = pp.settings;
-         let Op = Yp.get(ip);
- ... (25 more removed lines; see GitHub link above)
+       var XQ, wQ;
+       if (PQ.has(QQ)) return PQ.getSetting(QQ, WQ);
+       const qQ = (0, FQ.f)();
+       return null === (XQ = qQ.lC[qQ.RC]) || void 0 === XQ || null === (wQ = XQ[QQ]) || void 0 === wQ ? void 0 : wQ[WQ]
+     }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L210` → after: `L4016-L4034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4016-L4034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4016-L4034) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L210)

```diff
-       return Dp[pp]
+       const {
+         added: WQ,
+         removed: XQ,
+         settingChanges: wQ
+       } = PQ.apply(QQ);
+       for (const {
+           playerId: qQ,
+           name: TQ
+         }
+         of XQ) void 0 === TQ || yQ(qQ) || zQ.e.delete(TQ);
+       for (const {
+           playerId: TQ,
+           settings: zQ
+         }
+         of wQ)
+         if (yQ(TQ)) BQ(TQ, zQ);
+ ... (3 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L215` → after: `L4038-L4042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4038-L4042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4038-L4042) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L215)

```diff
-       return Pp.add(pp)
+       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : PQ.getSettings(QQ);
+       if (WQ) {
+         (0, qQ.i)(QQ);
+         for (const XQ in WQ)(0, qQ.e)(QQ, XQ, WQ[XQ])
+       }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L219-L277` → after: `L4046-L4047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4046-L4047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4046-L4047) · [Before (L219-L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L219-L277)

```diff
-       Pp.callEach(pp, "a roster listener")
-     }(0, Lp.h)(Sp.X, (pp => {
-       const ip = (0, xp.f)(Sp.X, pp);
-       if (void 0 === ip) return;
-       const cp = ip.hp.some((pp => {
-           let {
-             ap: ip,
-             np: cp
-           } = pp;
-           return null !== cp && Yp.has(ip) && Yp.getName(ip) !== cp
-         })),
-         {
-           added: Op,
-           removed: Ip,
-           settingChanges: Lp
-         } = Yp.apply(ip),
- ... (43 more removed lines; see GitHub link above)
+       return QQ === (0, FQ.f)().mQQ || (0, FQ.d)().client.hasEntity(QQ)
+     }(0, TQ.onGameReset)(JQ)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L279` → after: `L4049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4049) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L279)

```diff
-   41240: (pp, ip, cp) => {
+   38371: (QQ, WQ, XQ) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L281-L284` → after: `L4051-L4055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4051-L4055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4051-L4055) · [Before (L281-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L281-L284)

```diff
-       e: () => Mp,
-       h: () => wp,
-       j: () => lp,
-       k: () => Qp
+       d: () => aQ,
+       f: () => bQ,
+       g: () => dQ,
+       k: () => HQ,
+       m: () => lQ
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L286-L296` → after: `L4057-L4078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4057-L4078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4057-L4078) · [Before (L286-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L286-L296)

```diff
-     var Op = cp(1284),
-       op = cp(629),
-       Ip = cp(104),
-       Sp = cp(4911),
-       xp = cp(40769),
-       Lp = cp(40806),
-       Yp = cp(40783),
-       Dp = cp(41233),
-       Ap = cp(41221),
-       Pp = cp(40818),
-       Wp = cp(40837);
+     var wQ = XQ(37367),
+       qQ = XQ(38377),
+       TQ = XQ(416),
+       zQ = XQ.n(TQ),
+       sQ = XQ(3673);
+     const FQ = new wQ.vj,
+       PQ = new wQ.vj,
+       gQ = new wQ.vj,
+       JQ = new wQ.vj,
+       rQ = new wQ.vj,
+       IQ = [0, 0, 0],
+       jQ = {
+         x: 0,
+         y: 0
+       },
+       BQ = new wQ.vj(1, 0, 0),
+ ... (6 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L298-L315` → after: `L4080-L4091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4080-L4091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4080-L4091) · [Before (L298-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L298-L315)

```diff
-     function yp(pp) {
-       let {
-         deadEId: ip,
-         killerEId: cp,
-         killerLifeformType: Op,
-         withItem: op,
-         killstreak: Ip
-       } = pp;
-       return {
-         killer: dp({
-           eId: cp,
-           lifeformType: Op
-         }),
-         victim: dp({
-           eId: ip
-         }),
- ... (2 more removed lines; see GitHub link above)
+     function bQ(QQ, WQ) {
+       var XQ, qQ;
+       const TQ = vQ(QQ, WQ);
+       if (TQ) {
+         const QQ = TQ.x,
+           WQ = TQ.y,
+           XQ = QQ - 50,
+           wQ = WQ - 50;
+         return Math.abs(XQ) <= sQ.b && Math.abs(wQ) <= (0, sQ.k)() ? {
+           x: QQ,
+           y: WQ
+         } : iQ(XQ, wQ)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L319-L329` → after: `L4106-L4127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4106-L4127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4106-L4127) · [Before (L319-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L319-L329)

```diff
-     function Up(pp) {
-       let {
-         killer: ip,
-         victim: cp,
-         withItem: Op
-       } = pp;
-       return {
-         killer: dp(ip),
-         victim: dp(cp),
-         withItem: Op,
-         killstreak: 0
+     function vQ(QQ, WQ) {
+       const XQ = QQ.nj.sE(),
+         qQ = XQ.Uj(),
+         TQ = qQ.getRenderWidth(),
+         zQ = qQ.getRenderHeight();
+       UQ.width = TQ, UQ.height = zQ;
+       const sQ = QQ.nj.KXQ(),
+         gQ = sQ ? GQ.XQQ(sQ.eye[0], sQ.eye[1], sQ.eye[2]) : QQ.nj.camera.globalPosition;
+       FQ.XQQ(gQ.x + 10 * WQ[0], gQ.y + 10 * WQ[1], gQ.z + 10 * WQ[2]);
+       const JQ = sQ ? wQ.Matrix.FromArrayToRef(sQ.viewProjectionMatrix, 0, DQ) : XQ.getTransformMatrix();
+       return wQ.vj.ProjectToRef(FQ, VQ, JQ, UQ, PQ), PQ.z < 0 || PQ.z > 1 ? null : (jQ.x = PQ.x / TQ * 100, jQ.y = PQ.y / zQ * 100, jQ)
+     }
+ 
+     function dQ(QQ, WQ) {
+       return bQ(QQ, hQ(QQ, WQ))
+     }
+ ... (6 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L334` → after: `L4132-L4228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4132-L4228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4132-L4228) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L334)

```diff
-       mp && qp((() => "killed" === pp.kind ? yp(pp.body) : Up(pp.body)))
+       var WQ, XQ;
+       return 1 / (null !== (WQ = null === (XQ = QQ.nj.KXQ()) || void 0 === XQ ? void 0 : XQ.projectionMatrix[0]) && void 0 !== WQ ? WQ : QQ.nj.sE().activeCamera.getProjectionMatrix().m[0])
+     }
+ 
+     function lQ(QQ, WQ, XQ) {
+       const wQ = QQ.nj.KXQ(),
+         qQ = wQ ? wQ.worldMatrix : QQ.nj.sE().activeCamera.getWorldMatrix().m,
+         TQ = QQ.jr;
+       for (let zQ = 0; zQ < 3; zQ++) WQ[zQ] = qQ[12 + zQ] + TQ[zQ], XQ[zQ] = qQ[8 + zQ];
+       zQ().normalize(XQ, XQ)
+     }
+ 
+     function hQ(QQ, WQ) {
+       const XQ = QQ.jr,
+         wQ = QQ.nj.KXQ(),
+         qQ = wQ ? GQ.XQQ(wQ.eye[0], wQ.eye[1], wQ.eye[2]) : QQ.nj.camera.globalPosition;
+ ... (81 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L340-L341` → after: `L4232-L4239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4232-L4239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4232-L4239) · [Before (L340-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L340-L341)

```diff
-       var cp;
-       return Ap.d.has(pp) ? null === (cp = Ap.d.getSettings(pp)) || void 0 === cp ? void 0 : cp[ip] : (0, Dp.c)(pp, ip)
+       "refetchCode" !== QQ ? "Plugin|MobAiPlugin|ShowPetUi" !== QQ ? Promise.all([XQ.e(111), XQ.e(112), XQ.e(107), XQ.e(109), XQ.e(222)]).then((() => XQ(41986))).then((XQ => {
+         let {
+           runClientGameMessage: wQ
+         } = XQ;
+         wQ(QQ, WQ)
+       })).catch((WQ => {
+         console.error(`Game message ${QQ} failed`, WQ)
+       })) : wQ.k.mB("showPetUi", WQ) : wQ.k.mB("refetchCode")
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L347-L350` → after: `L4256-L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4256-L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4256-L4257) · [Before (L347-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L347-L350)

```diff
-         eId: Pp,
-         name: Wp,
-         colour: yp,
-         lifeformType: Up
+         Cq: WQ,
+         uq: XQ
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L352-L374` → after: `L4259-L4277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4259-L4277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4259-L4277) · [Before (L352-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L352-L374)

```diff
-       if (void 0 === Pp || null === Pp || "" === Pp) {
-         const pp = Wp || null;
-         return {
-           id: null,
-           shownName: pp,
-           lifeformType: null === pp && null !== Up && void 0 !== Up ? Up : null,
-           colour: yp || null,
-           local: !1,
-           realName: null
-         }
-       }
-       const wp = String(Pp),
-         dp = null === (ip = (0, Yp.k)()) || void 0 === ip ? void 0 : ip.api,
-         ep = void 0 !== dp && String(dp.localId) === wp,
-         jp = null !== (cp = Ap.d.getName(wp)) && void 0 !== cp ? cp : null,
-         kp = null !== (Sp = Hp(wp, "hideNameSeed")) && void 0 !== Sp ? Sp : null;
- ... (7 more removed lines; see GitHub link above)
+       const gQ = null !== WQ && void 0 !== WQ ? WQ : (0, sQ.e)().gameNameWithVariation;
+       (0, wQ.F)(gQ) && ((0, PQ.n)(), (0, zQ.Z)((() => {
+         console.log("Received matchmaking order from game server to game", WQ), (0, TQ.m)("inGameReplay"), (0, FQ.navigatePreserveSearch)((0, qQ.c)(gQ, null !== XQ && void 0 !== XQ ? XQ : void 0))
+       }), "video_start"))
+     }
+   },
+   39287: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => FQ,
+       i: () => zQ,
+       l: () => sQ,
+       o: () => PQ
+     });
+     var wQ = XQ(31),
+       qQ = XQ(1404);
+     const TQ = new Map;
+ ... (3 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L376-L381` → after: `L4279-L4280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4279-L4280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4279-L4280) · [Before (L376-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L376-L381)

```diff
-         shownName: mp,
-         lifeformType: null === mp && null !== (xp = null !== (Dp = Rp) && void 0 !== Dp ? Dp : Up) && void 0 !== xp ? xp : null,
-         colour: yp || Hp(wp, "killfeedColour") || (ep ? vp : tp),
-         local: ep,
-         realName: jp
-       }
+         clientParameters: WQ
+       }, !0)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L390` → after: `L4284-L4286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4284-L4286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4284-L4286) · [Before (L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L390)

```diff
-       null === kp ? (jp.length === ep && jp.shift(), jp.push(pp)) : kp(pp())
+       wQ.k.mB("removeUiRequest", QQ, !0);
+       const WQ = TQ.get(QQ);
+       WQ && (WQ.tearDownNotification(), TQ.delete(QQ))
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L394-L442` → after: `L4290-L4306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4290-L4306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4290-L4306) · [Before (L394-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L394-L442)

```diff
-       Rp || (Rp = !0, (0, Wp.h)(Sp.Zb.PlayerKilled, (pp => {
-         const ip = (0, Pp.i)(pp);
-         (0, Pp.b)(ip) && qp((() => yp(ip)))
-       })), (0, Wp.h)(Sp.Zb.CustomKillfeed, (pp => {
-         const ip = (0, Pp.i)(pp);
-         (0, Pp.b)(ip) && (0, Pp.b)(ip.killer) && (0, Pp.b)(ip.victim) && qp((() => Up(ip)))
-       })), (0, Wp.d)((() => {
-         jp = []
-       })))
-     }
-     const Cp = Object.freeze([0, 0, 0]),
-       Ep = [0, 0, 0],
-       Xp = [0, 0, 0],
-       lp = {
-         kill: {
-           watch(pp) {
- ... (33 more removed lines; see GitHub link above)
+       wQ.k.mB("clearUiRequests");
+       for (const QQ of TQ.values()) QQ.tearDownNotification();
+       TQ.clear()
+     }
+ 
+     function PQ(QQ, WQ, XQ, wQ) {
+       const zQ = qQ.NotificationProvider.showPromptPopup({
+         title: WQ,
+         confirmText: "general:yes",
+         cancelText: "general:no",
+         destructive: XQ,
+         unlockPointerKey: "uiRequestPopup"
+       });
+       TQ.set(QQ, zQ), zQ.getResult().then((WQ => {
+         TQ.delete(QQ), "notificationTornDown" !== WQ && wQ(WQ)
+       }))
+ ... (1 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L444` → after: `L4308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4308) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L444)

```diff
-   39182: (pp, ip, cp) => {
+   39279: (QQ, WQ, XQ) => {
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L446` → after: `L4310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4310) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L446)

```diff
-       e: () => Op
+       c: () => wQ
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L458-L459` → after: `L4322-L4323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4322-L4323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4322-L4323) · [Before (L458-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L458-L459)

```diff
-         for (const Op of pp.hp) {
-           let pp = this.members.get(Op.ap);
+         for (const wQ of QQ.uQ) {
+           let QQ = this.members.get(wQ.LQ);
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L463-L464` → after: `L4327-L4328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4327-L4328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4327-L4328) · [Before (L463-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L463-L464)

```diff
-             }, this.members.set(Op.ap, pp), ip.added.push(Op.ap)), null !== Op.np && (pp.name = Op.np), null !== Op.Fp || Op.Gp.length > 0) {
-             const cp = null === Op.Fp ? {} : JSON.parse(Op.Fp);
+             }, this.members.set(wQ.LQ, QQ), WQ.added.push(wQ.LQ)), null !== wQ.kQ && (QQ.name = wQ.kQ), null !== wQ.fQ || wQ.SQ.length > 0) {
+             const XQ = null === wQ.fQ ? {} : JSON.parse(wQ.fQ);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L466` → after: `L4330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4330) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L466)

```diff
-             for (const ip of Op.Gp) delete pp.settings[ip], cp[ip] = void 0;
+             for (const WQ of wQ.SQ) delete QQ.settings[WQ], XQ[WQ] = void 0;
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L468` → after: `L4332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4332) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L468)

```diff
-               playerId: Op.ap,
+               playerId: wQ.LQ,
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L473` → after: `L4337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4337) · [Before (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L473)

```diff
-         for (const Op of pp.rp) {
+         for (const wQ of QQ.tQ) {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L478` → after: `L4342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4342) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L478)

```diff
-             name: null !== (cp = pp.name) && void 0 !== cp ? cp : void 0
+             name: null !== (XQ = QQ.name) && void 0 !== XQ ? XQ : void 0
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/252.js` (Changed code · before: `L491` → after: `L4355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3afR4355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-e279ebbec4c202fb0f52c1da46f07b66a4e3d2a987251c8be125b2890121a3af) · [After (L4355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/252.js#L4355) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/252.js#L491)

```diff
-         return null !== (ip = null === (cp = this.members.get(pp)) || void 0 === cp ? void 0 : cp.name) && void 0 !== ip ? ip : void 0
+         return null !== (WQ = null === (XQ = this.members.get(QQ)) || void 0 === XQ ? void 0 : XQ.name) && void 0 !== WQ ? WQ : void 0
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/253.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/253.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/253.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/253.js#L4-L6)

```diff
-   40003: (pp, ip, cp) => {
-     cp.r(ip), cp.d(ip, {
-       playDocsSound: () => xp
+   41305: (QQ, WQ, XQ) => {
+     XQ.d(WQ, {
+       e: () => zQ,
+       i: () => gQ,
+       l: () => PQ
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/253.js` (Changed code · before: `L8-L76` → after: `L10-L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-134638ad847eeae1f3e661b9e09da9fa175ad70d8e491944fab98b9cf04a379c) · [After (L10-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/253.js#L10-L408) · [Before (L8-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/253.js#L8-L76)

```diff
-     var Op = cp(4974),
-       op = cp(36948),
-       Ip = cp(1211);
-     const Sp = new Map;
- 
-     function xp(pp, ip, cp, xp, Lp) {
-       let Yp, Dp = null,
-         Ap = 0,
-         Pp = 0;
-       if (ip) Yp = new Op.Howl({
-         src: [`${Ip.clientSideServerUrls.staticUrl}/sounds/music/${pp}.mp3`],
-         html5: !0,
-         volume: cp
-       });
-       else {
-         var Wp;
- ... (53 more removed lines; see GitHub link above)
+     var wQ, qQ = XQ(37404),
+       TQ = XQ(37370);
+     ! function(QQ) {
+       QQ[QQ.CW = 0] = "CW", QQ[QQ.CCW = 1] = "CCW"
+     }(wQ || (wQ = {}));
+     class zQ {
+       static Interpolate(QQ, WQ, XQ, wQ, qQ) {
+         if (0 === QQ) return 0;
+         const TQ = 1 - 3 * wQ + 3 * WQ,
+           zQ = 3 * wQ - 6 * WQ,
+           sQ = 3 * WQ;
+         let FQ = QQ;
+         for (let PQ = 0; PQ < 5; PQ++) {
+           const WQ = FQ * FQ;
+           FQ -= (TQ * (WQ * FQ) + zQ * WQ + sQ * FQ - QQ) * (1 / (3 * TQ * WQ + 2 * zQ * FQ + sQ)), FQ = Math.min(1, Math.max(0, FQ))
+         }
+ ... (383 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/254.js` (sn3sfj.2522680a → 8104he.3820eae0)

- **File**: `bundles/preprod.bloxd.io/chunks/js/254.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L4` → after: `L4-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L4-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L4-L35) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L4)

```diff
-   40016: (pp, ip, cp) => {
+   39085: (QQ, WQ, XQ) => {
+     var wQ = {
+       "./cape_cow_cream.png": 28325,
+       "./cape_cow_normal.png": 28327,
+       "./cape_creator_level1.png": 28335,
+       "./cape_creator_level2.png": 28337,
+       "./cape_creator_level3.png": 28343,
+       "./cape_none.png": 28352,
+       "./cape_pig.png": 28358,
+       "./cape_sheep.png": 28360,
+       "./cape_super.png": 28368,
+       "./cape_super_inverted.png": 28376,
+       "./cape_youtuber.png": 28380
+     };
+ 
+     function qQ(QQ) {
+ ... (16 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L6` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L37) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L6)

```diff
-       default: () => Zp
+       openCharacterPreview: () => NQ
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L8-L66` → after: `L39-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L39-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L39-L72) · [Before (L8-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L8-L66)

```diff
-     cp(6592);
-     var Op = cp(62),
-       op = cp(40024),
-       Ip = cp(40289),
-       Sp = cp(40405),
-       xp = cp(40443),
-       Lp = cp(40459),
-       Yp = cp(37479),
-       Dp = cp(37313),
-       Ap = cp(40568),
-       Pp = cp(40626),
-       Wp = (cp(40663), cp(1234)),
-       yp = cp(195),
-       Up = cp(1201),
-       wp = cp(25),
-       vp = cp(2835),
- ... (43 more removed lines; see GitHub link above)
+     var wQ = XQ(38385),
+       qQ = XQ(2997),
+       TQ = XQ(646),
+       zQ = XQ(37437),
+       sQ = XQ(2318),
+       FQ = XQ(37428),
+       PQ = XQ(40089),
+       gQ = XQ(40349),
+       JQ = XQ(41298),
+       rQ = XQ(37367),
+       IQ = XQ(40517),
+       jQ = XQ(37539),
+       BQ = XQ(40530),
+       yQ = XQ(41354),
+       VQ = XQ(37358),
+       DQ = XQ(1257),
+ ... (18 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L69-L186` → after: `L75-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L75-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L75-L98) · [Before (L69-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L69-L186)

```diff
-       let {
-         heatmap: ip,
-         scale: cp,
-         fullyOpaqueFrom: Qp,
-         bounds: fp,
-         fitBounds: bp,
-         schematic: hp,
-         controls: ap,
-         onStepTime: np,
-         onShowAllTime: Fp,
-         onTogglePlaying: gp,
-         getReadout: rp = null
-       } = pp;
-       const {
-         t: Zp
-       } = (0, Up.H)(), {
- ... (102 more removed lines; see GitHub link above)
+       QQ.unfreezeWorldMatrix();
+       for (const WQ of QQ.getChildren()) vQ(WQ)
+     }
+ 
+     function dQ(QQ, WQ) {
+       QQ.isVisible = WQ;
+       for (const XQ of QQ.getChildMeshes()) XQ.isVisible = WQ
+     }
+     class HQ {
+       constructor(QQ, WQ, XQ) {
+         this.cB = QQ, this.thinInstMgr = WQ, this.lE = XQ, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+       }
+       loadModel(QQ, WQ, XQ) {
+         const wQ = (0, GQ.e)(QQ, WQ);
+         return wQ in this.modelCache || (this.modelCache[wQ] = (async () => {
+           try {
+ ... (8 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L188-L245` → after: `L100-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L100-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L100-L108) · [Before (L188-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L188-L245)

```diff
-             }(null !== ip && void 0 !== ip ? ip : ai.current.fittedView, pp)))
-           },
-           onZoomChange: mi
-         });
-       (0, Op.useEffect)((() => {
-         const pp = Ai.current;
-         if (!pp) return;
-         let ip;
-         try {
-           ip = function(pp, ip) {
-             const cp = new op.d(pp, !0, {
-                 stencil: !1
-               }, !0),
-               Op = new Ip.c(cp),
-               [Wp, yp, Up] = dp.J;
-             Op.clearColor = new Yp.b(Wp / 255, yp / 255, Up / 255, 1);
- ... (42 more removed lines; see GitHub link above)
+             });
+             for (const QQ of wQ.rootNodes) vQ(QQ);
+             const zQ = void 0 === XQ ? null : (0, UQ.e)(XQ, (QQ => {
+               var WQ, XQ;
+               return null !== (WQ = null === (XQ = qQ.get(QQ)) || void 0 === XQ ? void 0 : XQ.rotationQuaternion) && void 0 !== WQ ? WQ : null
+             }));
+             return {
+               nodesByName: qQ,
+               bones: null === zQ ? null : new bQ(zQ, qQ)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L247-L300` → after: `L110-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L110-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L110-L111) · [Before (L247-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L247-L300)

```diff
-           }(pp, ai.current.fieldOfView)
-         } catch (cp) {
-           return console.error("Failed to start the 3D heatmap", cp), void Ui(!0)
-         }
-         return Pi.current = ip, ip.engine.runRenderLoop((() => {
-           const pp = ip.camera;
-           pp.fov !== ip.targetFieldOfView && (pp.fov += (ip.targetFieldOfView - pp.fov) * (pp.fov > ip.targetFieldOfView ? .3 : .2), Math.abs(ip.targetFieldOfView - pp.fov) < 5e-4 && (pp.fov = ip.targetFieldOfView), ip.needsRender = !0), ip.needsRender && (ip.pw.render(), ip.need … [truncated]
-         })), () => {
-           Pi.current = null, ip.engine.dispose()
-         }
-       }), []), (0, Op.useEffect)((() => {
-         const pp = Ai.current;
-         if (!pp) return;
-         const ip = () => {
-             di.current = !1, vi(document.pointerLockElement === pp)
-           },
- ... (38 more removed lines; see GitHub link above)
+           } catch (qQ) {
+             throw delete this.modelCache[wQ], console.error(`Failed to load preview attachment ${wQ}:`, qQ), qQ
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L302-L326` → after: `L113-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L113-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L113-L127) · [Before (L302-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L302-L326)

```diff
-           Kp(pp.cells, Float32Array.from(op), Float32Array.from(Ip), Ip.length / 4), pp.translucent = {
-             rc: Float32Array.from(Sp),
-             colours: Float32Array.from(xp),
-             count: xp.length / 4
-           }, pp.translucentSortedFrom = null, Vp(pp), pp.needsRender = !0
-         }(pp, Ji, cp, Qp)
-       }), [Ji, cp, Qp]), (0, Op.useEffect)((() => {
-         const pp = Pi.current;
-         null !== pp && function(pp, ip) {
-           pp.chunkGridOrigin = ip, pp.chunkGridCentre = null, sp(pp)
-         }(pp, fp.min)
-       }), [fp]), (0, Op.useEffect)((() => {
-         const pp = Pi.current;
-         null !== pp && function(pp, ip, cp) {
-           const Op = [],
-             op = [];
- ... (9 more removed lines; see GitHub link above)
+         })()), this.modelCache[wQ]
+       }
+       async update(QQ, WQ) {
+         var XQ;
+         const {
+           thinInstMgr: wQ,
+           lE: qQ
+         } = this;
+         this.cosmeticNames[QQ] = WQ;
+         const TQ = this.attachmentsByType[QQ];
+         if (TQ)
+           for (const {
+               mesh: sQ,
+               destNode: FQ,
+               bones: PQ
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L329-L387` → after: `L134-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L134-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L134-L156) · [Before (L329-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L329-L387)

```diff
-           Kp(pp.schematicBlocks, Float32Array.from(Op), Float32Array.from(op), op.length / 4), pp.needsRender = !0
-         }(pp, hp, fp)
-       }), [hp, fp]), (0, Op.useEffect)((() => {
-         const pp = Pi.current;
-         null !== pp && null !== pp.chunkGrid && (pp.chunkGrid.isVisible = Ri, pp.needsRender = !0)
-       }), [Ri, fp]), (0, Op.useEffect)((() => {
-         const pp = Pi.current;
-         null !== pp && function(pp, ip, cp) {
-           const {
-             camera: Op
-           } = pp;
-           Op.position.set(ip.position[0], ip.position[1], ip.position[2]), Op.rotation.set(ip.pitch, ip.heading, 0);
-           const op = (Jp + 1) * yp.g.Qy * Math.sqrt(3);
-           Op.maxZ = Math.max(op, Math.hypot(...Li(ip.position, Yi(Si({
-             min: [0, 0, 0],
-             max: cp
- ... (43 more removed lines; see GitHub link above)
+         this.attachmentsByType[QQ] = [];
+         const zQ = (0, pQ.j)(QQ, WQ);
+         if (null !== zQ && void 0 !== zQ && null !== (XQ = zQ.attachments) && void 0 !== XQ && XQ.length)
+           for (const sQ of zQ.attachments) {
+             let XQ;
+             try {
+               XQ = await this.loadModel(sQ.modelGlb, sQ.texture, sQ.animation)
+             } catch {
+               continue
+             }
+             if (this.cosmeticNames[QQ] !== WQ) return;
+             const TQ = XQ.nodesByName.get(sQ.modelNode);
+             if (!TQ) {
+               console.error(`Preview attachment node ${sQ.modelNode} not found in ${sQ.modelGlb}`);
+               continue
+             }
+ ... (7 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L389-L425` → after: `L158-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L158-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L158-L197) · [Before (L389-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L389-L425)

```diff
-         }), yi && (0, kp.jsx)("div", {
-           className: "StudioHeatmap3DUnavailable SmallTextLight",
-           children: Zp("3D view isn't available in this browser.")
-         }), ji && (0, kp.jsx)("div", {
-           className: "StudioHeatmap3DCrosshair"
-         }), (0, kp.jsx)("div", {
-           className: "StudioHeatmap3DCoordinates SmallTextLight",
-           children: bi.position.map(((pp, ip) => (pp + Ei[ip]).toFixed(2))).join(" ")
-         }), Ri && (0, kp.jsx)(zp, {
-           heading: bi.heading,
-           pitch: bi.pitch,
-           onViewFrom: pp => {
-             const ip = Yi(pp, -1),
-               cp = 0 === ip[1] ? {
-                 heading: Math.atan2(ip[0], ip[2]),
-                 pitch: 0
- ... (21 more removed lines; see GitHub link above)
+       }
+       writePoses(QQ) {
+         for (const WQ of this.shownBones) WQ.write(QQ)
+       }
+     }
+     var aQ = XQ(37451),
+       lQ = (XQ(41326), XQ(40732), XQ(41335), XQ(34548)),
+       hQ = XQ(41409);
+     let iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ;
+     const SQ = document.createElement("canvas");
+     async function tQ() {
+       await new Promise((QQ => {
+         setTimeout((() => {
+           QQ()
+         }), 100)
+       }))
+ ... (24 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L427-L447` → after: `L199-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L199-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L199-L253) · [Before (L427-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L427-L447)

```diff
-         }), null !== ni && (0, kp.jsx)("div", {
-           className: "StudioHeatmapMapReadout SmallTextLight",
-           children: null === rp ? Zp("studio:heatmapBlockReadout", {
-             x: ni.x,
-             y: ni.y,
-             z: ni.z,
-             count: (0, Wp.O)(ni.value)
-           }) : rp(ni.x, ni.y, ni.z, ni.value)
-         }), (0, kp.jsxs)("div", {
-           className: "StudioHeatmapMapControls",
-           children: [ap, (0, kp.jsx)(tp.S, {
-             active: null === Mi,
-             onClick: () => {
-               Ci(null)
-             },
-             children: (0, kp.jsx)(Hp.d, {
- ... (5 more removed lines; see GitHub link above)
+         }, this.closed = !1, this.resetCamera();
+         const XQ = QQ.getBoundingClientRect();
+         eQ(XQ.width, XQ.height), nQ++, iQ.stopRenderLoop(), iQ.runRenderLoop((() => {
+           var QQ, WQ;
+           null === (QQ = LQ) || void 0 === QQ || QQ.render(iQ.getDeltaTime()), null === (WQ = kQ) || void 0 === WQ || WQ.writePoses(performance.now() / 1e3), AQ.render()
+         }))
+       }
+       isReady() {
+         return !!RQ
+       }
+       setCosmetic(QQ, WQ) {
+         ! function(QQ, WQ) {
+           if (!RQ) return;
+           const zQ = (0, qQ.f)();
+           zQ.Bl(!1), wQ.d.Player.meshApi.updatePlayerCosmetic(zQ.RC, uQ, QQ, WQ, !0), "cape" === QQ && (WQ === TQ.f ? EQ.UH(!1) : (EQ.UH(!0), EQ.material.diffuseTexture = new yQ.e(XQ(39085)(`./cape_${WQ}.png`), EQ.sE(), {
+             invertY: !1,
+ ... (39 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L452` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L258) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L452)

```diff
-         heading: ip,
+         yaw: WQ,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L454-L456` → after: `L260-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L260-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L260-L261) · [Before (L454-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L454-L456)

```diff
-         onViewFrom: op,
-         onTurn: Ip,
-         onFlip: Sp
+         radius: wQ,
+         target: qQ
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L458-L556` → after: `L263-L293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L263-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L263-L293) · [Before (L458-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L458-L556)

```diff
-       const {
-         t: xp
-       } = (0, Up.H)(), Lp = (0, Op.useRef)(null), Yp = ci({
-         heading: ip,
-         pitch: cp
-       }), Dp = Oi(ip), Ap = Ai(Yp, Dp), Pp = np + Fp + 2, Wp = ap.flatMap((pp => [1, -1].map((ip => {
-         const cp = Yi(pp.direction, ip);
-         return {
-           ...pp,
-           sign: ip,
-           direction: cp,
-           endX: Pp + Di(cp, Dp) * np,
-           endY: Pp - Di(cp, Ap) * np,
-           depth: Di(cp, Yp)
-         }
-       })))).sort(((pp, ip) => ip.depth - pp.depth));
- ... (83 more removed lines; see GitHub link above)
+       cQ.alpha = WQ, cQ.beta = XQ, wQ && (cQ.radius = wQ), qQ && cQ.target.set(qQ[0], qQ[1], qQ[2])
+     }
+ 
+     function NQ(QQ, WQ) {
+       return QQ.appendChild(SQ), iQ || function() {
+         iQ = new PQ.b(SQ, !0, {
+           preserveDrawingBuffer: !0
+         });
+         const QQ = (0, qQ.f)();
+         iQ.vwQ = QQ.nj.engine.vwQ, AQ = new gQ.c(iQ), AQ.clearColor = new jQ.d(0, 0, 0, 0), AQ.ambientColor = new jQ.Color3(1, 1, 1), cQ = new JQ.d("ky", 0, 0, 1, rQ.vj.Zero(), AQ), cQ.attachControl(SQ, !0), cQ.panningSensibility = 0, fQ = (0, wQ.x)("Player", AQ, !0).then((WQ =>  … [truncated]
+           RQ = WQ.meshApi, EQ = WQ.capeMesh, CQ = QQ.nj.aE;
+           const XQ = 8.33;
+           uQ = (0, wQ.l)("Player", XQ, !0, !0), CQ.setPosition(uQ, 0, -8.33, 0);
+           const qQ = CQ.getNamedNode(uQ, "BodyMesh");
+           CQ.attachTransformNode(EQ, uQ, qQ), CQ.set(uQ, "aOpacity", 1), CQ.fC(uQ, "aOpacity", 1), kQ = new HQ(AQ, CQ, uQ), LQ = new VQ.AnimatorState, LQ.KJ = QQ, LQ.thinInstMgr = CQ, LQ.lE = uQ, LQ.xXQ = CQ.dwQ(uQ, 0), LQ.modelLifeformType = "Player", LQ.nodeNameAliases = (0, aQ … [truncated]
+           const TQ = EQ.uC().boundingBox;
+ ... (15 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L560-L582` → after: `L307-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L307-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L307-L317) · [Before (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L560-L582)

```diff
-       var ip, cp, Op;
-       const {
-         chunkGridOrigin: op,
-         camera: Ip
-       } = pp;
-       if (null === op) return;
-       const Sp = [Ip.position.x, Ip.position.y, Ip.position.z],
-         xp = [0, 2].map((pp => Math.floor((Sp[pp] + op[pp]) / yp.g.Qy))),
-         Lp = pp.chunkGridCentre;
-       if (null !== Lp && Lp.every(((pp, ip) => pp === xp[ip]))) return;
-       const Ap = null === (ip = null === (cp = pp.chunkGrid) || void 0 === cp ? void 0 : cp.isVisible) || void 0 === ip || ip;
-       null === (Op = pp.chunkGrid) || void 0 === Op || Op.dispose();
-       const [Wp, Up] = [0, 2].map(((pp, ip) => {
-         const cp = [];
-         for (let Op = xp[ip] - Jp; Op <= xp[ip] + Jp + 1; Op++) cp.push(Op * yp.g.Qy - op[pp]);
-         return cp
- ... (7 more removed lines; see GitHub link above)
+       return `\n\t\t\t\t${(0,sQ.v)(QQ,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, sQ.A)(QQ, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, sQ.A)(QQ, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, sQ.l)(QQ, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L585-L593` → after: `L320-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L320-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L320-L324) · [Before (L585-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L585-L593)

```diff
-     function Kp(pp, ip, cp, Op) {
-       pp.I9("matrix", function(pp, ip) {
-         const cp = new Float32Array(16 * ip);
-         for (let Op = 0; Op < ip; Op++) {
-           const ip = 16 * Op;
-           cp[ip] = 1, cp[ip + 5] = 1, cp[ip + 10] = 1, cp[ip + 12] = pp[3 * Op], cp[ip + 13] = pp[3 * Op + 1], cp[ip + 14] = pp[3 * Op + 2], cp[ip + 15] = 1
-         }
-         return cp
-       }(ip, Op), 16, !0), pp.I9("color", cp, 4, !0), pp.isVisible = Op > 0
+     function PQ(QQ, WQ) {
+       let XQ = (0, sQ.Jb)(QQ, "skele" + (WQ - 1));
+       for (let qQ = WQ - 2; qQ >= 0; qQ--) XQ = (0, sQ.wb)(QQ, `boneIdx == ${qQ}`, (0, sQ.Jb)(QQ, `skele${qQ}`), XQ);
+       const wQ = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,sQ.A)(QQ,"int","boneIdx",(0,sQ.Eb)(QQ,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,sQ.A)(QQ,"vec3","bone",XQ)}\n\t\t\t\t${(0,sQ.A)(QQ,"vec2","pivot",(0,sQ.l)(QQ,"vec2","0.0",`${(0,sQ.Sb)(QQ,"position")}.z`))}\n\t\t\t\t${(0,sQ.$)(QQ)?`positi … [truncated]
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L597-L616` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L328) · [Before (L597-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L597-L616)

```diff
-       const {
-         camera: ip,
-         translucent: cp
-       } = pp, Op = [ip.position.x, ip.position.y, ip.position.z], op = pp.translucentSortedFrom;
-       if (null !== op && Math.hypot(Op[0] - op[0], Op[1] - op[1], Op[2] - op[2]) < Qp) return;
-       pp.translucentSortedFrom = Op;
-       const Ip = new Float64Array(cp.count),
-         Sp = new Uint32Array(cp.count);
-       for (let Yp = 0; Yp < cp.count; Yp++) {
-         const pp = cp.rc[3 * Yp] - Op[0],
-           ip = cp.rc[3 * Yp + 1] - Op[1],
-           op = cp.rc[3 * Yp + 2] - Op[2];
-         Ip[Yp] = pp * pp + ip * ip + op * op, Sp[Yp] = Yp
-       }
-       Sp.sort(((pp, ip) => Ip[ip] - Ip[pp]));
-       const xp = new Float32Array(3 * cp.count),
- ... (4 more removed lines; see GitHub link above)
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,sQ.l)(QQ,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L619-L624` → after: `L462-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L462-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L462-L465) · [Before (L619-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L619-L624)

```diff
-     function ii(pp, ip) {
-       const cp = (cp, Op, op) => new Dp.Zy(0 === cp ? pp[0] : ip[0], 0 === Op ? pp[1] : ip[1], 0 === op ? pp[2] : ip[2]),
-         Op = [];
-       for (const op of [0, 1])
-         for (const pp of [0, 1]) Op.push([cp(0, op, pp), cp(1, op, pp)], [cp(op, 0, pp), cp(op, 1, pp)], [cp(op, pp, 0), cp(op, pp, 1)]);
-       return Op
+     function TQ(QQ, WQ, XQ) {
+       let [TQ, zQ] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [QQ, WQ], sQ = Math.min(Number.isFinite(XQ) && XQ > 0 ? XQ : 1, qQ);
+       const FQ = Math.max(0, TQ, QQ) * Math.max(0, zQ, WQ) * sQ * sQ;
+       return FQ > wQ && (sQ *= Math.sqrt(wQ / FQ)), [Math.max(1, Math.floor(Math.max(0, QQ) * sQ)), Math.max(1, Math.floor(Math.max(0, WQ) * sQ))]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L627-L628` → after: `L489-L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L489-L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L489-L494) · [Before (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L627-L628)

```diff
-     function ci(pp) {
-       return [Math.sin(pp.heading) * Math.cos(pp.pitch), -Math.sin(pp.pitch), Math.cos(pp.heading) * Math.cos(pp.pitch)]
+     function VQ(QQ, WQ) {
+       return Object.assign((function(QQ, XQ, wQ, qQ) {
+         return WQ(this.featureState, QQ, XQ, wQ, qQ)
+       }), {
+         NI: QQ
+       })
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L632` → after: `L498-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L498-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L498-L524) · [Before (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L632)

```diff
-       return [Math.cos(pp), 0, -Math.sin(pp)]
+       const WQ = class extends IQ.b {
+           constructor(WQ, XQ) {
+             const wQ = (0, BQ._)(WQ),
+               qQ = wQ && (0, BQ.u)(wQ, QQ.name);
+             for (var TQ = arguments.length, zQ = new Array(TQ > 2 ? TQ - 2 : 0), sQ = 2; sQ < TQ; sQ++) zQ[sQ - 2] = arguments[sQ];
+             super(WQ, QQ.name, QQ.priority, qQ ? qQ.defines : QQ.defines(...zQ), !1), this.featureState = void 0, this.featureState = XQ, this._pluginManager._addPlugin(this), this._enable(!0), (0, BQ.y)(this._material, QQ, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return QQ.className
+           }
+           isCompatible(QQ) {
+             return QQ === yQ.b.GLSL || QQ === yQ.b.WGSL
+           }
+         },
+         XQ = (0, jQ.g)(QQ);
+       for (const [wQ, qQ] of Object.entries(jQ.d)) {
+ ... (11 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L636-L652` → after: `L532-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L532-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L532-L550) · [Before (L636-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L636-L652)

```diff
-       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
-         heading: fp,
-         pitch: bp
-       };
-       const op = [pp.max[0] - pp.min[0], pp.max[1] - pp.min[1], pp.max[2] - pp.min[2]],
-         Ip = ci(Op),
-         Sp = Oi(Op.heading),
-         xp = Ai(Ip, Sp),
-         Lp = Math.tan(cp / 2),
-         Yp = Lp * ip;
-       let Dp = 1;
-       for (const Ap of [-op[0] / 2, op[0] / 2])
-         for (const pp of [-op[1] / 2, op[1] / 2])
-           for (const ip of [-op[2] / 2, op[2] / 2]) {
-             const cp = [Ap, pp, ip],
-               Op = Di(cp, Ip);
- ... (1 more removed lines; see GitHub link above)
+       return (0, bQ.f)(XQ, WQ.urls, (() => async function(QQ, WQ, XQ) {
+         const {
+           width: wQ
+         } = QQ[0].getSize(), qQ = QQ.map(((QQ, XQ) => {
+           var qQ;
+           const TQ = Math.round(QQ.getSize().height / wQ),
+             zQ = null === WQ || void 0 === WQ ? void 0 : WQ[XQ];
+           return {
+             pixels: zQ && zQ.byteLength === wQ * wQ * TQ * 4 ? zQ : null !== (qQ = dQ.get(QQ.getInternalTexture())) && void 0 !== qQ ? qQ : QQ._readPixelsSync(),
+             layers: TQ
+           }
+         })), TQ = XQ.Uj().getCaps().texture2DArrayMaxLayerCount, sQ = (0, bQ.b)(qQ, wQ, TQ).map((QQ => {
+           let {
+             pixels: WQ,
+             layers: qQ
+           } = QQ;
+ ... (3 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L654-L657` → after: `L552-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L552-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L552-L584) · [Before (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L654-L657)

```diff
-       return {
-         position: Li([pp.min[0] + op[0] / 2, pp.min[1] + op[1] / 2, pp.min[2] + op[2] / 2], Yi(Ip, -Dp * hp)),
-         heading: Op.heading,
-         pitch: Op.pitch
+         }));
+         return QQ.forEach(((QQ, WQ) => {
+           const wQ = QQ.getInternalTexture();
+           dQ.has(wQ) || (! function(QQ, WQ) {
+             const XQ = WQ.createRawTexture(new Uint8Array(4), 1, 1, GQ.b.TEXTUREFORMAT_RGBA, !1, !1, zQ.e.NEAREST_SAMPLINGMODE);
+             QQ._hardwareTexture.release(), WQ.unbindAllTextures(), XQ._swapAndDie(QQ, !1)
+           }(wQ, XQ.Uj()), dQ.set(wQ, qQ[WQ].pixels))
+         })), sQ
+       }(QQ, WQ.pixels, XQ)))
+     }
+     const dQ = new WeakMap;
+     var HQ = XQ(38125);
+     class aQ extends(DQ(FQ.h)) {
+       constructor(QQ, WQ) {
+         super(QQ, WQ), this.loaded = new Set, this.mirrors = void 0, this.mirrors = WQ.textures.map((QQ => QQ.mirror)), this.mirrors.forEach(((QQ, WQ) => {
+           QQ.onLoadObservable.add((QQ => {
+ ... (17 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/254.js` (Changed code · before: `L660-L669` → after: `L587-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ceR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/c3d5cf92cca53cf19206568ad364dad53686c899...build/preprod.bloxd.io/8104he.3820eae0#diff-92a7d054a4aaa382382f9f6372f5776b00d243d42005f22e204e056dee9685ce) · [After (L587-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/8104he.3820eae0/bundles/preprod.bloxd.io/chunks/js/254.js#L587-L602) · [Before (L660-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/c3d5cf92cca53cf19206568ad364dad53686c899/bundles/preprod.bloxd.io/chunks/js/254.js#L660-L669)

```diff
- 
-     function Ii(pp, ip, cp) {
-       const Op = xi(pp),
-         op = xi(cp),
-         Ip = Li(pp.position, Yi(ip, -1)),
-         Sp = [0, 1, 2].reduce(((pp, ip) => Li(pp, Yi(op[ip], Di(Ip, Op[ip])))), [0, 0, 0]);
-       return {
-         position: Li(ip, Sp),
-         heading: cp.heading,
-         pitch: cp.pitch
+     var lQ = XQ(41373),
+       hQ = XQ(40561),
+       iQ = XQ(37367),
+       cQ = XQ(41379),
+       AQ = XQ(40661),
+       RQ = XQ(40555),
+       EQ = XQ(41320),
+       CQ = XQ(37855),
+       uQ = XQ(41386);
+     class LQ extends lQ.b {
+       getData() {
+         return null
+       }
+       _rebuild() {}
+       restore() {
+         super._rebuild()
```
