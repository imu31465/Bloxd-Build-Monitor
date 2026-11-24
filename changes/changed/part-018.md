# Changed — Bundle Modifications Report (Part 018 / 069)

- **Updated at**: `2026-11-25T01:02 JST`
- **Part**: `18 / 69` (**335** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/258.js` (w4ddu.56408518 → sn3sfj.2522680a · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/258.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44)

#### 32. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L514-L515` → after: `L712-L719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L712-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L712-L719) · [Before (L514-L515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L514-L515)

```diff
-         get wheelYMoveScene() {
-           return this._wheelYAction !== pC.MoveScene ? null : this._wheelYActionCoordinate
+         case 7:
+         case 11:
+         case 12:
+         case 13:
+         case 14:
+         case 15: {
+           const pp = "number" !== typeof ip ? new Uint32Array(ip) : new Uint32Array(cp ? ip / 4 : ip);
+           return Op && pp.set(new Uint32Array(Op)), pp
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L517-L518` → after: `L721-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L721-L723) · [Before (L517-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L517-L518)

```diff
-         set wheelZMoveScene(CC) {
-           null === CC && this._wheelZAction !== pC.MoveScene || (this._wheelZAction = pC.MoveScene, this._wheelZActionCoordinate = CC)
+         case 1: {
+           const pp = "number" !== typeof ip ? new Float32Array(ip) : new Float32Array(cp ? ip / 4 : ip);
+           return Op && pp.set(new Float32Array(Op)), pp
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L520-L521` → after: `L725-L751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L725-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L725-L751) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L520-L521)

```diff
-         get wheelZMoveScene() {
-           return this._wheelZAction !== pC.MoveScene ? null : this._wheelZActionCoordinate
+       }
+       const op = new Uint8Array(ip);
+       return Op && op.set(new Uint8Array(Op)), op
+     }
+   },
+   40096: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Yp,
+       h: () => Dp,
+       k: () => Lp,
+       o: () => op
+     });
+     const Op = {};
+ 
+     function op(pp) {
+       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !Op[pp]) return Op[pp] = !0, `${pp} needs to be imported before as it contains a side-effect required by your code.`
+ ... (11 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L523-L529` → after: `L753-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L753-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L753-L914) · [Before (L523-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L523-L529)

```diff
-         checkInputs() {
-           if (0 === this._wheelDeltaX && 0 === this._wheelDeltaY && 0 == this._wheelDeltaZ) return;
-           this._moveRelative.Q_(0), this._rotateRelative.Q_(0), this._moveScene.Q_(0), this._updateCamera(), this.camera.Km().useRightHandedSystem && (this._moveRelative.z *= -1);
-           const CC = bC.b.Zero();
-           this.camera.getViewMatrix().invertToRef(CC);
-           const zC = bC.r.Zero();
-           bC.r.TransformNormalToRef(this._moveRelative, CC, zC), this.camera.cameraRotation.x += this._rotateRelative.x / 200, this.camera.cameraRotation.y += this._rotateRelative.y / 200, this.camera.cameraDirection.addInPlace(zC), this.camera.cameraDirection.addInPlace(this._mo … [truncated]
+       };
+       return Op.__isSideEffectStub = !0, Op
+     }
+ 
+     function Yp(pp) {
+       return !!pp && !pp.__isSideEffectStub
+     }
+ 
+     function Dp(pp, ip) {
+       return {
+         get() {},
+         set(pp) {
+           Object.defineProperty(this, ip, {
+             value: pp,
+             writable: !0,
+             configurable: !0,
+ ... (146 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L531-L532` → after: `L916-L949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L916-L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L916-L949) · [Before (L531-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L531-L532)

```diff
-         _updateCamera() {
-           this._updateCameraProperty(this._wheelDeltaX, this._wheelXAction, this._wheelXActionCoordinate), this._updateCameraProperty(this._wheelDeltaY, this._wheelYAction, this._wheelYActionCoordinate), this._updateCameraProperty(this._wheelDeltaZ, this._wheelZAction, this._whee … [truncated]
+         let Pp = !1;
+         if (pp instanceof ArrayBuffer || ArrayBuffer.isView(pp))
+           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
+             let ip;
+             ip = pp instanceof ArrayBuffer ? pp : (0, yp.i)(pp), Ip = URL.createObjectURL(new Blob([ip], {
+               type: xp
+             })), Pp = !0
+           } else Ip = `data:${xp};base64,` + (0, Lp.i)(pp);
+         else pp instanceof Blob ? (Ip = URL.createObjectURL(pp), Pp = !0) : (Ip = Hp.CleanUrl(pp), Ip = Hp.PreprocessUrl(Ip));
+         const Wp = ip => {
+           if (cp) {
+             const Op = Ip || pp.toString();
+             cp(`Error while trying to load image: ${0===Op.indexOf("http")||Op.length<=128?Op:Op.slice(0,128)+"..."}`, ip)
+           }
+         };
+         if (Ap?._features.forceBitmapOverHTMLImageElement) return mp(Ip, (Op => {
+ ... (18 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L534-L546` → after: `L951-L961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L951-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L951-L961) · [Before (L534-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L534-L546)

```diff
-         _updateCameraProperty(CC, zC, ZC) {
-           if (0 === CC) return;
-           if (null === zC || null === ZC) return;
-           let QC = null;
-           switch (zC) {
-             case pC.MoveRelative:
-               QC = this._moveRelative;
-               break;
-             case pC.RotateRelative:
-               QC = this._rotateRelative;
-               break;
-             case pC.MoveScene:
-               QC = this._moveScene
+         dp(Ip, Up);
+         const wp = [],
+           vp = () => {
+             for (const pp of wp) pp.target.removeEventListener(pp.name, pp.handler);
+             wp.length = 0
+           };
+         wp.push({
+           target: Up,
+           name: "load",
+           handler: () => {
+             vp(), ip(Up), Pp && Up.src && URL.revokeObjectURL(Up.src)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L548-L556` → after: `L963-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L963-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L963-L967) · [Before (L548-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L548-L556)

```diff
-           switch (ZC) {
-             case 0:
-               QC.set(CC, 0, 0);
-               break;
-             case 1:
-               QC.set(0, CC, 0);
-               break;
-             case 2:
-               QC.set(0, 0, CC)
+         }), wp.push({
+           target: Up,
+           name: "error",
+           handler: pp => {
+             vp(), Wp(pp), Pp && Up.src && URL.revokeObjectURL(Up.src)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L558-L666` → after: `L969-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L969-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L969-L992) · [Before (L558-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L558-L666)

```diff
-         }
-       }, (() => {
-         const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(MC[Symbol.metadata] ?? null) : void 0;
-         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], nC = [(0, wC.M)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], (0, QC.j)(CC, null, zC, {
-           kind: "setter",
-           name: "wheelXMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: CC => "wheelXMoveRelative" in CC,
-             set: (CC, zC) => {
-               CC.wheelXMoveRelative = zC
-             }
-           },
-           metadata: bC
-         }, null, gC), (0, QC.j)(CC, null, ZC, {
- ... (93 more removed lines; see GitHub link above)
+         }), wp.push({
+           target: document,
+           name: "securitypolicyviolation",
+           handler: pp => {
+             if (pp.blockedURI !== Up.src || "Yy" === pp.disposition) return;
+             vp();
+             const ip = new Error(`CSP violation of policy ${pp.effectiveDirective} ${pp.blockedURI}. Current policy is ${pp.originalPolicy}`);
+             Yp.e.UseFallbackTexture = !1, Wp(ip), Pp && Up.src && URL.revokeObjectURL(Up.src), Up.src = ""
+           }
+         }), (() => {
+           for (const pp of wp) pp.target.addEventListener(pp.name, pp.handler)
+         })();
+         const tp = "blob:" === Ip.substring(0, 5),
+           jp = "data:" === Ip.substring(0, 5),
+           kp = () => {
+             tp || jp || !Op.e.IsCustomRequestAvailable ? Up.src = Ip : mp(Ip, ((pp, ip, cp) => {
+ ... (8 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L668-L713` → after: `L994-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L994-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L994-L1011) · [Before (L668-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L668-L713)

```diff
-           metadata: bC
-         }, null, gC), bC && Object.defineProperty(CC, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: bC
-         })
-       })(), CC
-     })();
-     fC.e.FreeCameraMouseWheelInput = PC;
-     let GC = (() => {
-       var CC;
-       let zC, ZC, nC = [],
-         fC = [],
-         oC = [],
-         FC = [];
- ... (30 more removed lines; see GitHub link above)
+           Rp = () => {
+             op && op.loadImage(Ip, Up)
+           };
+         if (!tp && !jp && op && op.enableTexturesOffline) op.open(Rp, kp);
+         else {
+           if (-1 !== Ip.indexOf("file:")) {
+             const pp = decodeURIComponent(Ip.substring(5).toLowerCase());
+             if (Sp.FilesToLoad[pp] && "undefined" !== typeof URL) {
+               try {
+                 let ip;
+                 try {
+                   ip = URL.createObjectURL(Sp.FilesToLoad[pp])
+                 } catch (qp) {
+                   ip = URL.createObjectURL(Sp.FilesToLoad[pp])
+                 }
+                 Up.src = ip, Pp = !0
+ ... (2 more added lines; see GitHub link above)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L715-L724` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L1013) · [Before (L715-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L715-L724)

```diff
-             }), this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._pointerInput, NC.b.POINTERDOWN | NC.b.POINTERUP | NC.b.POINTERMOVE), this._onLostFocus) {
-             const CC = this.camera.mg().getInputElement();
-             CC && CC.addEventListener("blur", this._onLostFocus)
-           }
-         }
-         detachControl() {
-           if (this._pointerInput) {
-             if (this._observer && (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const CC = this.camera.mg().getInputElement();
-               CC && CC.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+               return Up
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L729-L746` → after: `L1018-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1018-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L1018-L1056) · [Before (L729-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L729-L746)

```diff
-         checkInputs() {
-           if (null === this._offsetX || null === this._offsetY) return;
-           if (0 === this._offsetX && 0 === this._offsetY) return;
-           const CC = this.camera,
-             zC = CC.movement.input,
-             ZC = zC.getEntry("touch", "rotate"),
-             QC = zC.getEntry("touch", "translate"),
-             wC = CC._calculateHandednessMultiplier(),
-             nC = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
-           if (ZC) {
-             const zC = ZC.sensitivity ?? 1 / this.touchAngularSensibility;
-             CC.cameraRotation.y = this._offsetX * wC * zC, nC && (CC.cameraRotation.x = -this._offsetY * wC * zC)
-           }
-           if (!nC && QC) {
-             const zC = CC._computeLocalCameraSpeed(),
-               ZC = QC.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
- ... (2 more removed lines; see GitHub link above)
+         return Up
+       },
+       kp = (pp, ip, cp, Op, op) => {
+         const Sp = new FileReader,
+           xp = {
+             onCompleteObservable: new Ip.d,
+             abort: () => Sp.abort()
+           };
+         return Sp.onloadend = () => xp.onCompleteObservable.notifyObservers(xp), op && (Sp.onerror = () => {
+           op(new tp(`Unable to read ${pp.name}`, pp))
+         }), Sp.onload = pp => {
+           ip(pp.target.result)
+         }, cp && (Sp.onprogress = cp), Op ? Sp.readAsArrayBuffer(pp) : Sp.readAsText(pp), xp
+       },
+       mp = (pp, ip, cp, Op, op, Lp, Yp) => {
+         if (pp.name) return kp(pp, ip, cp, op, Lp ? pp => {
+ ... (23 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L749-L750` → after: `L1062-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1062-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L1062-L1168) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L749-L750)

```diff
-         getClassName() {
-           return "FreeCameraTouchInput"
+         return Rp(Dp, ((pp, cp) => {
+           ip(pp, cp?.responseURL, cp?.getResponseHeader("content-type"))
+         }), cp, Op, op, Lp ? pp => {
+           Lp(pp.request, new wp(pp.message, pp.request))
+         } : void 0, Yp)
+       },
+       Rp = (pp, ip, cp, Sp, xp, Lp, Dp) => {
+         null !== Sp && (Sp ?? (Sp = Yp.e.LastCreatedScene?.offlineProvider)), pp = Hp.CleanUrl(pp), pp = Hp.PreprocessUrl(pp);
+         const Ap = Hp.BaseUrl + pp;
+         let Wp = !1;
+         const yp = {
+             onCompleteObservable: new Ip.d,
+             abort: () => Wp = !0
+           },
+           Up = () => {
+             let pp, Ip = new Op.e,
+ ... (91 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L752-L753` → after: `L1170-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1170-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L1170-L1181) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L752-L753)

```diff
-         getSimpleName() {
-           return "touch"
+       },
+       Mp = () => "undefined" !== typeof location && "file:" === location.protocol,
+       Cp = pp => Up.test(pp),
+       Ep = pp => {
+         const ip = Up.exec(pp);
+         if (null === ip || 0 === ip.length) return {
+           match: !1,
+           type: ""
+         };
+         return {
+           match: !0,
+           type: ip[0].replace("data:", "").replace(";base64,", "")
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L755-L831` → after: `L1183-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1183-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L1183-L1334) · [Before (L755-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L755-L831)

```diff
-       }, (() => {
-         const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
-           kind: "field",
-           name: "touchAngularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: CC => "touchAngularSensibility" in CC,
-             get: CC => CC.touchAngularSensibility,
-             set: (CC, zC) => {
-               CC.touchAngularSensibility = zC
-             }
-           },
-           metadata: bC
-         }, nC, fC), (0, QC.j)(null, null, ZC, {
- ... (61 more removed lines; see GitHub link above)
+       };
+ 
+     function Xp(pp) {
+       return (0, Lp.c)(pp.split(",")[1])
+     }
+     const lp = pp => (0, Lp.e)(pp.split(",")[1]);
+     let Qp;
+     const Jp = (pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) => {
+       Qp = {
+         DecodeBase64UrlToBinary: pp,
+         DecodeBase64UrlToString: ip,
+         DefaultRetryStrategy: cp.DefaultRetryStrategy,
+         BaseUrl: cp.BaseUrl,
+         CorsBehavior: cp.CorsBehavior,
+         PreprocessUrl: cp.PreprocessUrl,
+         IsBase64DataUrl: Op,
+ ... (136 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L833-L968` → after: `L1336-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1336-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L1336-L1391) · [Before (L833-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L833-L968)

```diff
-         return CC = class extends FC {
-           get angularSensibility() {
-             const CC = this.inputs.attached.mouse;
-             return CC ? CC.angularSensibility : 0
-           }
-           set angularSensibility(CC) {
-             const zC = this.inputs.attached.mouse;
-             zC && (zC.angularSensibility = CC)
-           }
-           get keysUp() {
-             const CC = this.inputs.attached.keyboard;
-             return CC ? CC.keysUp : []
-           }
-           set keysUp(CC) {
-             const zC = this.inputs.attached.keyboard;
-             zC && (zC.keysUp = CC)
- ... (120 more removed lines; see GitHub link above)
+           for (const ip of pp) ip()
+         }), 1), Op.push(pp)
+       }
+     }
+ 
+     function Ip(pp, ip, cp) {
+       try {
+         if (pp()) return ip(), !0
+       } catch (Op) {
+         return cp?.(Op), !0
+       }
+       return !1
+     }
+     const Sp = function(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+ ... (40 more added lines; see GitHub link above)
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L970-L1028` → after: `L1393-L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1393-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L1393-L1415) · [Before (L970-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L970-L1028)

```diff
-         }, (() => {
-           const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(FC[Symbol.metadata] ?? null) : void 0;
-           zC = [(0, wC.J)()], ZC = [(0, wC.J)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
-             kind: "field",
-             name: "ellipsoid",
-             static: !1,
-             private: !1,
-             access: {
-               has: CC => "ellipsoid" in CC,
-               get: CC => CC.ellipsoid,
-               set: (CC, zC) => {
-                 CC.ellipsoid = zC
-               }
-             },
-             metadata: bC
-           }, WC, NC), (0, QC.j)(null, null, ZC, {
- ... (43 more removed lines; see GitHub link above)
+         };
+         for (const op of Op.CustomRequestModifiers) {
+           if (Op._ShouldSkipRequestModifications(pp)) break;
+           const ip = op(cp, pp);
+           "string" === typeof ip && (pp = ip)
+         }
+         return {
+           url: pp,
+           headers: ip
+         }
+       }
+       static async FetchAsync(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const cp = ip.method ?? "GET";
+         if ("undefined" !== typeof fetch) {
+           const {
+ ... (7 more added lines; see GitHub link above)
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/258.js` (Changed code · before: `L1030-L1033` → after: `L1417-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-622165a49df515081ad456b3702491925cb2b1abc7d8e8402ef732fc4163cb44) · [After (L1417-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/258.js#L1417-L1508) · [Before (L1030-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/258.js#L1030-L1033)

```diff
-         })(), CC
-       })(),
-       hC = !1;
-     hC || (hC = !0, (0, vC.d)("BABYLON.FreeCamera", eC))
+         }
+         return await new Promise(((op, Ip) => {
+           const Sp = new Op;
+           Sp.responseType = "arraybuffer", Sp.addEventListener("readystatechange", (() => {
+             if (4 === Sp.readyState)
+               if (Sp.status >= 200 && Sp.status < 300) {
+                 const pp = "undefined" !== typeof Headers ? new Headers : void 0,
+                   ip = Sp.getResponseHeader("Content-Type");
+                 ip && pp && pp.set("Content-Type", ip), "undefined" !== typeof Response ? op(new Response(Sp.response, {
+                   status: Sp.status,
+                   statusText: Sp.statusText,
+                   headers: pp
+                 })) : op({
+                   ok: !0,
+                   status: Sp.status,
+                   statusText: Sp.statusText,
+ ... (76 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/259.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/259.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd)

#### 1. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L4)

```diff
-   40084: (CC, zC, ZC) => {
+   40306: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L6)

```diff
-       c: () => NC
+       d: () => Ip
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L8-L476` → after: `L8-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L8-L22) · [Before (L8-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L8-L476)

```diff
-     var QC = ZC(39811),
-       wC = ZC(39818),
-       bC = ZC(36963),
-       nC = ZC(37142),
-       fC = ZC(40046),
-       oC = ZC(39950),
-       qC = ZC(37002),
-       FC = ZC(40022),
-       WC = ZC(39842);
-     let NC = (() => {
-       var CC, zC;
-       let ZC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC = fC.d,
-         vC = [],
-         eC = [],
-         hC = [],
-         KC = [],
- ... (453 more removed lines; see GitHub link above)
+     var Op = cp(38905),
+       op = cp(37368);
+     class Ip {
+       static Instantiate(pp) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[pp]) return this.RegisteredExternalClasses[pp];
+         const ip = (0, op.d)(pp);
+         if (ip) return ip;
+         Op.e.Warn(pp + " not found, you may have missed an import.");
+         const cp = pp.split(".");
+         let Ip = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let Op = 0, op = cp.length; Op < op; Op++) Ip = Ip[cp[Op]];
+         return "function" !== typeof Ip ? null : Ip
+       }
+     }
+     Ip.RegisteredExternalClasses = {}
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L478` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L24) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L478)

```diff
-   40046: (CC, zC, ZC) => {
+   40122: (pp, ip, cp) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L480` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L26) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L480)

```diff
-       d: () => WC
+       e: () => op
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L482-L488` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L28) · [Before (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L482-L488)

```diff
-     var QC = ZC(39811),
-       wC = ZC(36963),
-       bC = ZC(39818),
-       nC = ZC(36987),
-       fC = ZC(36985),
-       oC = ZC(39694),
-       qC = ZC(39842);
+     var Op = cp(40071);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L490-L491` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L30-L31) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L490-L491)

```diff
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new nC.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       static get Now() {
+         return (0, Op.j)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L494-L668` → after: `L34-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L34-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L34-L243) · [Before (L494-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L494-L668)

```diff
-     let WC = (() => {
-       var CC;
-       let zC, ZC, WC, NC, MC, gC = [],
-         SC = [],
-         pC = [],
-         PC = [],
-         GC = [],
-         RC = [],
-         AC = [],
-         xC = [],
-         JC = [],
-         IC = [];
-       return CC = class {
-         static AddNodeConstructor(CC, zC) {
-           this._NodeConstructors[CC] = zC
-         }
- ... (159 more removed lines; see GitHub link above)
+   },
+   40143: (pp, ip, cp) => {
+     function Op(pp) {
+       let ip = 1;
+       do {
+         ip *= 2
+       } while (ip < pp);
+       return ip === pp
+     }
+ 
+     function op(pp, ip, cp) {
+       return pp * (1 - cp) + ip * cp
+     }
+ 
+     function Ip(pp) {
+       const ip = Sp(pp),
+ ... (194 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L670-L676` → after: `L245-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L245-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L245-L269) · [Before (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L670-L676)

```diff
-         IK(CC) {
-           if (this._nodeDataStorage._isEnabled === CC) return;
-           const zC = this._hasEffectiveEnabledStateObservers(),
-             ZC = zC ? this.isEnabled() : null;
-           if (this._nodeDataStorage._isEnabled = CC, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(CC), zC) {
-             const CC = this.isEnabled();
-             CC !== ZC && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(CC)
+         return pp
+       }
+       static GetBabylonScriptURL(pp, ip) {
+         if (!pp) return "";
+         if (pp.startsWith(Op._DefaultCdnUrl))
+           if (Op.ScriptBaseUrl) {
+             const ip = Op.ScriptBaseUrl.endsWith("/") ? Op.ScriptBaseUrl.slice(0, -1) : Op.ScriptBaseUrl;
+             pp = pp.replace(Op._DefaultCdnUrl, ip)
+           } else if (Op._CdnVersion) {
+           const ip = `${Op._DefaultCdnUrl}/v${Op._CdnVersion}`;
+           pp.startsWith(ip) || (pp = pp.replace(Op._DefaultCdnUrl, ip))
+         }
+         return pp = Op.ScriptPreprocessUrl(pp), ip && !Op.IsAbsoluteUrl(pp) && (pp = Op.GetAbsoluteUrl(pp)), pp
+       }
+       static LoadBabylonScript(pp, ip, cp, op) {
+         pp = Op.GetBabylonScriptURL(pp), Op.LoadScript(pp, ip, cp)
+ ... (9 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L678-L688` → after: `L271-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L271-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L271-L275) · [Before (L678-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L678-L688)

```diff
-         }
-         isDescendantOf(CC) {
-           return !!this.parent && (this.parent === CC || this.parent.isDescendantOf(CC))
-         }
-         _getDescendants(CC) {
-           let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             ZC = arguments.length > 2 ? arguments[2] : void 0;
-           if (this._children)
-             for (let QC = 0; QC < this._children.length; QC++) {
-               const wC = this._children[QC];
-               ZC && !ZC(wC) || CC.push(wC), zC || wC._getDescendants(CC, !1, ZC)
+           Op.LoadFile(pp, (pp => {
+             try {
+               Function(pp).apply(null), ip && ip()
+             } catch (Op) {
+               cp && cp("LoadScript Error", Op)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L691-L716` → after: `L281-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L281-L288) · [Before (L691-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L691-L716)

```diff
-         getDescendants(CC, zC) {
-           const ZC = [];
-           return this._getDescendants(ZC, CC, zC), ZC
-         }
-         getChildMeshes(CC, zC) {
-           const ZC = [];
-           return this._getDescendants(ZC, CC, (CC => (!zC || zC(CC)) && void 0 !== CC.cullingStrategy)), ZC
-         }
-         getChildren(CC) {
-           let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           return this.getDescendants(zC, CC)
-         }
-         _setReady(CC) {
-           CC !== this._nodeDataStorage._isReady && (CC ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
-         }
-         getAnimationByName(CC) {
- ... (10 more removed lines; see GitHub link above)
+       }
+       static _LoadScriptWeb(pp, ip, cp, Op) {
+         let op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if ("function" === typeof importScripts) {
+           try {
+             importScripts(pp), ip && ip()
+           } catch (Lp) {
+             cp?.(`Unable to load script '${pp}' in worker`, Lp)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L719-L725` → after: `L349-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L349-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L349-L356) · [Before (L719-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L719-L725)

```diff
-         deleteAnimationRange(CC) {
-           let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           for (let ZC = 0, QC = this.animations.length; ZC < QC; ZC++) this.animations[ZC] && this.animations[ZC].deleteRange(CC, zC);
-           this._ranges[CC] = null
-         }
-         getAnimationRange(CC) {
-           return this._ranges[CC] || null
+       }
+       static UnregisterTopRootEvents(pp, ip) {
+         for (let Op = 0; Op < ip.length; Op++) {
+           const op = ip[Op];
+           pp.removeEventListener(op.name, op.handler);
+           try {
+             pp.parent && pp.parent.removeEventListener(op.name, op.handler)
+           } catch (cp) {}
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L727-L734` → after: `L358-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L358-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L358-L393) · [Before (L727-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L727-L734)

```diff
-         clone(zC, ZC, QC) {
-           const wC = qC.d.Clone((() => new CC(zC, this.Km())), this);
-           if (ZC && (wC.parent = ZC), !QC) {
-             const CC = this.getDescendants(!0);
-             for (let ZC = 0; ZC < CC.length; ZC++) {
-               const QC = CC[ZC];
-               QC.clone(zC + "." + QC.name, wC)
-             }
+       }
+       static async DumpFramebuffer(pp, ip, cp, Op) {
+         throw (0, Yp.o)("DumpTools")
+       }
+       static DumpData(pp, ip, cp, Op) {
+         throw (0, Yp.o)("DumpTools")
+       }
+       static async DumpDataAsync(pp, ip, cp) {
+         throw (0, Yp.o)("DumpTools")
+       }
+       static _IsOffScreenCanvas(pp) {
+         return void 0 !== pp.convertToBlob
+       }
+       static ToBlob(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           op = arguments.length > 3 ? arguments[3] : void 0;
+ ... (20 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L736` → after: `L395-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L395-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L395-L403) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L736)

```diff
-           return wC
+           Op.Download(pp, ip)
+         } else if (pp && "undefined" !== typeof URL) {
+           const ip = URL.createObjectURL(pp),
+             cp = window.open("");
+           if (!cp) return;
+           const Op = cp.document.createElement("img");
+           Op.onload = function() {
+             URL.revokeObjectURL(ip)
+           }, Op.src = ip, cp.document.body.appendChild(Op)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L738-L754` → after: `L405-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L405-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L405-L423) · [Before (L738-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L738-L754)

```diff
-         getAnimationRanges() {
-           const CC = [];
-           let zC;
-           for (zC in this._ranges) CC.push(this._ranges[zC]);
-           return CC
-         }
-         beginAnimation(CC, zC, ZC, QC) {
-           const wC = this.getAnimationRange(CC);
-           return wC ? this._scene.beginAnimation(this, wC.from, wC.to, zC, ZC, QC) : null
-         }
-         serializeAnimationRanges() {
-           const CC = [];
-           for (const zC in this._ranges) {
-             const ZC = this._ranges[zC];
-             if (!ZC) continue;
-             const QC = {};
- ... (1 more removed lines; see GitHub link above)
+       }
+       static EncodeScreenshotCanvasData(pp, ip) {
+         let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           op = arguments.length > 3 ? arguments[3] : void 0,
+           Ip = arguments.length > 4 ? arguments[4] : void 0;
+         if ("string" !== typeof op && ip) {
+           if (ip) {
+             if (Op._IsOffScreenCanvas(pp)) return void pp.convertToBlob({
+               type: cp,
+               quality: Ip
+             }).then((pp => {
+               const cp = new FileReader;
+               cp.readAsDataURL(pp), cp.onloadend = () => {
+                 const pp = cp.result;
+                 ip(pp)
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L756-L765` → after: `L425-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L425-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L425-L511) · [Before (L756-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L756-L765)

```diff
-           return CC
-         }
-         computeWorldMatrix(CC) {
-           return this._worldMatrix || (this._worldMatrix = wC.b.Identity()), this._worldMatrix
-         }
-         dispose(CC) {
-           let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           if (this._nodeDataStorage._isDisposed = !0, !CC) {
-             const ZC = this.getDescendants(!0);
-             for (const QC of ZC) QC.dispose(CC, zC)
+         } else this.ToBlob(pp, (function(pp) {
+           pp && Op.DownloadBlob(pp, op), ip && ip("")
+         }), cp, Ip)
+       }
+       static Download(pp, ip) {
+         if ("undefined" === typeof URL) return;
+         const cp = window.URL.createObjectURL(pp),
+           Op = document.createElement("a");
+         document.body.appendChild(Op), Op.style.display = "none", Op.href = cp, Op.download = ip, Op.addEventListener("click", (() => {
+           Op.parentElement && Op.parentElement.removeChild(Op)
+         })), Op.click(), window.URL.revokeObjectURL(cp)
+       }
+       static BackCompatCameraNoPreventDefault(pp) {
+         return "boolean" === typeof pp[0] ? pp[0] : "boolean" === typeof pp[1] && pp[1]
+       }
+       static CreateScreenshot(pp, ip, cp, Op) {
+ ... (71 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L767-L776` → after: `L513-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L513-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L513-L517) · [Before (L767-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L767-L776)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Tm.notifyObservers(this), this.Tm.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
-           for (const ZC of this._behaviors) ZC.detach();
-           this._behaviors.length = 0, this.metadata = null
-         }
-         static ParseAnimationRanges(CC, zC, ZC) {
-           if (zC.np)
-             for (let QC = 0; QC < zC.np.length; QC++) {
-               const ZC = zC.np[QC];
-               CC.createAnimationRange(ZC.name, ZC.from, ZC.to)
-             }
+       }
+       static _EndMarkNative(pp) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
+           const ip = Op._NativePerformanceCounterHandles.get(pp);
+           ip ? (_native.endPerformanceCounter(ip), Op._NativePerformanceCounterHandles.delete(pp)) : Op.Warn(`Performance counter with name ${pp} was not started.`)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L778-L797` → after: `L519-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L519-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L519-L529) · [Before (L778-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L778-L797)

```diff
-         getHierarchyBoundingVectors() {
-           let CC, zC, ZC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-             QC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           this.Km().incrementRenderId(), this.computeWorldMatrix(!0);
-           const bC = this;
-           if (bC.WE && bC.Zx) {
-             const ZC = bC.WE();
-             CC = ZC.boundingBox.minimumWorld.clone(), zC = ZC.boundingBox.maximumWorld.clone()
-           } else CC = new wC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), zC = new wC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-           if (ZC) {
-             const ZC = this.getDescendants(!1);
-             for (const bC of ZC) {
-               const ZC = bC;
-               if (ZC.computeWorldMatrix(!0), QC && !QC(ZC)) continue;
-               if (!ZC.WE || 0 === ZC.getTotalVertices()) continue;
-               const nC = ZC.WE().boundingBox,
- ... (4 more removed lines; see GitHub link above)
+       }
+       static get Now() {
+         return Lp.e.Now
+       }
+       static GetClassName(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           cp = null;
+         if (!ip && pp.getClassName) cp = pp.getClassName();
+         else {
+           if (pp instanceof Object) {
+             cp = (ip ? pp : Object.getPrototypeOf(pp)).constructor.__bjsclassName__
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L799-L801` → after: `L531-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L531-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L531-L548) · [Before (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L799-L801)

```diff
-           return {
-             min: CC,
-             max: zC
+           cp || (cp = typeof pp)
+         }
+         return cp
+       }
+       static First(pp, ip) {
+         for (const cp of pp)
+           if (ip(cp)) return cp;
+         return null
+       }
+       static getFullClassName(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           cp = null,
+           Op = null;
+         if (!ip && pp.getClassName) cp = pp.getClassName();
+         else {
+           if (pp instanceof Object) {
+ ... (2 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L804-L867` → after: `L552-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L552-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L552-L602) · [Before (L804-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L804-L867)

```diff
-       }, (() => {
-         const wC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zC = [(0, bC.M)()], ZC = [(0, bC.M)()], WC = [(0, bC.M)()], NC = [(0, bC.M)()], MC = [(0, bC.M)()], (0, QC.j)(null, null, zC, {
-           kind: "field",
-           name: "name",
-           static: !1,
-           private: !1,
-           access: {
-             has: CC => "name" in CC,
-             get: CC => CC.name,
-             set: (CC, zC) => {
-               CC.name = zC
-             }
-           },
-           metadata: wC
-         }, gC, SC), (0, QC.j)(null, null, ZC, {
- ... (48 more removed lines; see GitHub link above)
+         return cp ? (null != Op ? Op + "." : "") + cp : null
+       }
+       static async DelayAsync(pp) {
+         await new Promise((ip => {
+           setTimeout((() => {
+             ip()
+           }), pp)
+         }))
+       }
+       static IsSafari() {
+         return !!(0, Ip.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
+       }
+     }
+ 
+     function tp(pp, ip) {
+       return cp => {
+ ... (35 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/259.js` (Changed code · before: `L869-L880` → after: `L604-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacdR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-4d0a0c02dce64cd67e0ec22fa13c7526aff4f4b114496d607e494799ffd4cacd) · [After (L604-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/259.js#L604-L613) · [Before (L869-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/259.js#L869-L880)

```diff
-           },
-           metadata: wC
-         }, JC, IC), wC && Object.defineProperty(CC, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: wC
-         })
-       })(), CC._AnimationRangeFactory = (CC, zC, ZC) => {
-         throw (0, oC.i)("AnimationRange")
-       }, CC._NodeConstructors = {}, CC
-     })()
+             Op.executeNext()
+           }), Ip)
+         }), Op)
+       }
+     }
+     let dp = !1;
+ 
+     function ep() {
+       dp || (dp = !0, vp.Mix = wp.i, vp.IsExponentOfTwo = wp.h, Ap.e.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/260.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/260.js` (144 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L4` → after: `L4-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L4-L10) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L4)

```diff
-   40925: (CC, zC, ZC) => {
+   40605: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => Op
+     });
+     let Op = !1
+   },
+   40195: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L8-L17` → after: `L14-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L14-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L14-L20) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L8-L17)

```diff
-     var QC = ZC(39811),
-       wC = ZC(39818),
-       bC = ZC(36987),
-       nC = ZC(36963),
-       fC = ZC(36991),
-       oC = ZC(40046),
-       qC = ZC(40224),
-       FC = ZC(39993),
-       WC = ZC(39730),
-       NC = ZC(36968);
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37349),
+       Sp = cp(37320),
+       xp = cp(37345),
+       Lp = cp(38124),
+       Yp = cp(40225);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L19-L41` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L22-L23) · [Before (L19-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L19-L41)

```diff
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
-       }
-       get name() {
-         return "AutoRotation"
-       }
-       set zoomStopsAnimation(CC) {
-         this._zoomStopsAnimation = CC
-       }
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
-       }
-       set idleRotationSpeed(CC) {
-         this._idleRotationSpeed = CC
-       }
-       get idleRotationSpeed() {
- ... (7 more removed lines; see GitHub link above)
+       get wrapU() {
+         return this._wrapU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L43-L44` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L25-L26) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L43-L44)

```diff
-       set idleRotationSpinupTime(CC) {
-         this._idleRotationSpinupTime = CC
+       set wrapU(pp) {
+         this._wrapU = pp
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L46-L47` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L28-L29) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L46-L47)

```diff
-       get idleRotationSpinupTime() {
-         return this._idleRotationSpinupTime
+       get wrapV() {
+         return this._wrapV
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L49-L50` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L31-L32) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L49-L50)

```diff
-       get rotationInProgress() {
-         return Math.abs(this._cameraRotationSpeed) > 0
+       set wrapV(pp) {
+         this._wrapV = pp
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L52-L53` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L34-L35) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L52-L53)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       get coordinatesMode() {
+         return 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L55-L69` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L37-L38) · [Before (L55-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L55-L69)

```diff
-       init() {}
-       attach(CC) {
-         this._attachedCamera = CC;
-         const zC = this._attachedCamera.Km();
-         this._onPrePointerObservableObserver = zC.onPrePointerObservable.add((CC => {
-           CC.type !== FC.b.POINTERDOWN ? CC.type === FC.b.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onAfterCheckInputsObserver = CC.onAfterCheckInputsObservable.add((() => {
-           if (this._reachTargetAlpha()) return;
-           const CC = WC.b.Now;
-           let zC = 0;
-           null != this._lastFrameTime && (zC = CC - this._lastFrameTime), this._lastFrameTime = CC, this._applyUserInteraction();
-           const ZC = CC - this._lastInteractionTime - this._idleRotationWaitTime,
-             QC = Math.max(Math.min(ZC / this._idleRotationSpinupTime, 1), 0);
-           this._cameraRotationSpeed = this._idleRotationSpeed * QC, this._attachedCamera && (this._attachedCamera.alpha -= this._cameraRotationSpeed * (zC / 1e3))
-         }))
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L71-L74` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L40-L41) · [Before (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L71-L74)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const CC = this._attachedCamera.Km();
-         this._onPrePointerObservableObserver && CC.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._attachedCamera = null, this._lastFrameTime = null
+       set isCube(pp) {
+         this._texture && (this._texture.isCube = pp)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L76-L77` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L43-L44) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L76-L77)

```diff
-       resetLastInteractionTime(CC) {
-         this._lastInteractionTime = CC ?? WC.b.Now
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L79-L80` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L46-L47) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L79-L80)

```diff
-       _reachTargetAlpha() {
-         return !(!this._attachedCamera || null === this.targetAlpha) && Math.abs(this._attachedCamera.alpha - this.targetAlpha) < NC.e
+       set is3D(pp) {
+         this._texture && (this._texture.is3D = pp)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L82-L83` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L49-L50) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L82-L83)

```diff
-       _userIsZooming() {
-         return !!this._attachedCamera && 0 !== this._attachedCamera.inertialRadiusOffset
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L85-L185` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L52-L53) · [Before (L85-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L85-L185)

```diff
-       _shouldAnimationStopForInteraction() {
-         if (!this._attachedCamera) return !1;
-         let CC = !1;
-         return this._lastFrameRadius === this._attachedCamera.radius && 0 !== this._attachedCamera.inertialRadiusOffset && (CC = !0), this._lastFrameRadius = this._attachedCamera.radius, this._zoomStopsAnimation ? CC : this._userIsZooming()
-       }
-       _applyUserInteraction() {
-         this._userIsMoving() && !this._shouldAnimationStopForInteraction() && (this._lastInteractionTime = WC.b.Now)
-       }
-       _userIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
-       }
-     }
-     ZC(40930);
-     class gC {
-       constructor() {
-         this._easingMode = gC.EASINGMODE_EASEIN
- ... (85 more removed lines; see GitHub link above)
+       set is2DArray(pp) {
+         this._texture && (this._texture.is2DArray = pp)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L187-L188` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L55-L56) · [Before (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L187-L188)

```diff
-       get name() {
-         return "Framing"
+       getClassName() {
+         return "ThinTexture"
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L190-L191` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L58-L59) · [Before (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L190-L191)

```diff
-       set mode(CC) {
-         this._mode = CC
+       static _IsRenderTargetWrapper(pp) {
+         return void 0 !== pp?.shareDepth
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L193-L265` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L61-L62) · [Before (L193-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L193-L265)

```diff
-       get mode() {
-         return this._mode
-       }
-       set radiusScale(CC) {
-         this._radiusScale = CC
-       }
-       get radiusScale() {
-         return this._radiusScale
-       }
-       set positionScale(CC) {
-         this._positionScale = CC
-       }
-       get positionScale() {
-         return this._positionScale
-       }
-       set defaultElevation(CC) {
- ... (57 more removed lines; see GitHub link above)
+       constructor(pp) {
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = Yp.c.Zero(), this._cachedBaseSize = Yp.c.Zero(), this._initialSamplingMode = 2, this._texture = Dp. … [truncated]
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L267-L272` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L64-L65) · [Before (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L267-L272)

```diff
-       zoomOnMeshHierarchy(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         CC.computeWorldMatrix(!0);
-         const QC = CC.getHierarchyBoundingVectors(!0);
-         this.zoomOnBoundingInfo(QC.min, QC.max, zC, ZC)
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L274-L283` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L67-L69) · [Before (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L274-L283)

```diff
-       zoomOnMeshesHierarchy(CC) {
-         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const QC = new nC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           wC = new nC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-         for (let bC = 0; bC < CC.length; bC++) {
-           const zC = CC[bC].getHierarchyBoundingVectors(!0);
-           nC.r.CheckExtends(zC.min, QC, wC), nC.r.CheckExtends(zC.max, QC, wC)
-         }
-         this.zoomOnBoundingInfo(QC, wC, zC, ZC)
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L285-L308` → after: `L71-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L71-L74) · [Before (L285-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L285-L308)

```diff
-       zoomOnBoundingInfo(CC, zC) {
-         let ZC, QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         if (!this._attachedCamera) return !1;
-         const bC = CC.y,
-           fC = bC + (zC.y - bC) * this._positionScale,
-           oC = zC.subtract(CC).scale(.5);
-         if (!isFinite(fC)) return !1;
-         if (QC) ZC = new nC.r(0, fC, 0);
-         else {
-           const zC = CC.add(oC);
-           ZC = new nC.r(zC.x, fC, zC.z)
-         }
-         this._vectorTransition || (this._vectorTransition = SC.b.CreateAnimation("target", SC.b.ANIMATIONTYPE_VECTOR3, 60, PC.EasingFunction)), this._betaIsAnimating = !0;
-         let qC = SC.b.TransitionTo("target", ZC, this._attachedCamera, this._attachedCamera.Km(), 60, this._vectorTransition, this._framingTime);
-         qC && this._animatables.push(qC);
- ... (8 more removed lines; see GitHub link above)
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L310-L312` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L76) · [Before (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L310-L312)

```diff
-         return this._radiusTransition || (this._radiusTransition = SC.b.CreateAnimation("radius", SC.b.ANIMATIONTYPE_FLOAT, 60, PC.EasingFunction)), qC = SC.b.TransitionTo("radius", FC, this._attachedCamera, this._attachedCamera.Km(), 60, this._radiusTransition, this._framingTime … [truncated]
-           this.stopAllAnimations(), wC && wC(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
-         })), qC && this._animatables.push(qC), !0
+         return this._cachedSize
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L314-L318` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L78-L79) · [Before (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L314-L318)

```diff
-       _calculateLowerRadiusFromModelBoundingSphere(CC, zC) {
-         const ZC = this._attachedCamera;
-         if (!ZC) return 0;
-         let QC = ZC._calculateLowerRadiusFromModelBoundingSphere(CC, zC, this._radiusScale);
-         return ZC.lowerRadiusLimit && this._mode === PC.IgnoreBoundsSizeMode && (QC = QC < ZC.lowerRadiusLimit ? ZC.lowerRadiusLimit : QC), ZC.upperRadiusLimit && (QC = QC > ZC.upperRadiusLimit ? ZC.upperRadiusLimit : QC), QC
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L320-L331` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L81-L82) · [Before (L320-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L320-L331)

```diff
-       _maintainCameraAboveGround() {
-         if (this._elevationReturnTime < 0) return;
-         const CC = WC.b.Now - this._lastInteractionTime,
-           zC = .5 * Math.PI - this._defaultElevation,
-           ZC = .5 * Math.PI;
-         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > ZC && CC >= this._elevationReturnWaitTime) {
-           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = SC.b.CreateAnimation("beta", SC.b.ANIMATIONTYPE_FLOAT, 60, PC.EasingFunction));
-           const CC = SC.b.TransitionTo("beta", zC, this._attachedCamera, this._attachedCamera.Km(), 60, this._betaTransition, this._elevationReturnTime, (() => {
-             this._clearAnimationLocks(), this.stopAllAnimations()
-           }));
-           CC && this._animatables.push(CC)
-         }
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L333-L334` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L84-L86) · [Before (L333-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L333-L334)

```diff
-       _clearAnimationLocks() {
-         this._betaIsAnimating = !1
+       updateSamplingMode(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(pp, this._texture, this._texture.generateMipMaps && ip)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L336-L337` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L88-L89) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L336-L337)

```diff
-       _applyUserInteraction() {
-         this.isUserIsMoving && (this._lastInteractionTime = WC.b.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L339-L343` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L91-L92) · [Before (L339-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L339-L343)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
-       }
-       get isUserIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L346-L753` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L95-L96) · [Before (L346-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L346-L753)

```diff
-     PC.EasingFunction = new class extends gC {
-       constructor() {
-         let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
-         super(), this.exponent = CC
-       }
-       easeInCore(CC) {
-         return this.exponent <= 0 ? CC : (Math.exp(this.exponent * CC) - 1) / (Math.exp(this.exponent) - 1)
-       }
-     }, PC.EasingMode = gC.EASINGMODE_EASEINOUT, PC.IgnoreBoundsSizeMode = 0, PC.FitFrustumSidesMode = 1;
-     var GC = ZC(40042),
-       RC = ZC(40035),
-       AC = ZC(40069),
-       xC = ZC(39913);
-     let JC = (() => {
-         var CC;
-         let zC, ZC = [],
- ... (392 more removed lines; see GitHub link above)
+     var Ap, Pp = cp(40233),
+       Wp = cp(40096);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L756` → after: `L99-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L99-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L99-L110) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L756)

```diff
-       let zC, ZC, bC, fC, oC, qC, FC, WC, NC, MC, gC, SC = [],
+       let ip, cp, Yp, Ap, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Jp, Bp = Dp,
+         Np = [],
+         Tp = [],
+         fp = [],
+         bp = [],
+         hp = [],
+         ap = [],
+         np = [],
+         Fp = [],
+         gp = [],
+         Gp = [],
+         rp = [],
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L777-L784` → after: `L131-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L131-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L131-L298) · [Before (L777-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L777-L784)

```diff
-       return CC = class {
-         constructor() {
-           this.camera = (0, QC.n)(this, SC), this.keysUp = (0, QC.n)(this, pC, [38]), this.keysDown = ((0, QC.n)(this, PC), (0, QC.n)(this, GC, [40])), this.keysLeft = ((0, QC.n)(this, RC), (0, QC.n)(this, AC, [37])), this.keysRight = ((0, QC.n)(this, JC), (0, QC.n)(this, IC, [39 … [truncated]
-             ctrl: !1,
-             alt: !1
-           }, this._keyboardConditions = {
-             modifiers: this._keyboardModifiers
-           }, this._rotateDirection = new nC.n, this._panDirection = new nC.n
+       return pp = class extends Bp {
+         set hasAlpha(pp) {
+           this._hasAlpha = pp
+         }
+         get hasAlpha() {
+           return this._hasAlpha
+         }
+         set getAlphaFromRGB(pp) {
+           this._getAlphaFromRGB !== pp && (this._getAlphaFromRGB = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
+         }
+         get getAlphaFromRGB() {
+           return this._getAlphaFromRGB
+         }
+         set coordinatesIndex(pp) {
+           this._coordinatesIndex !== pp && (this._coordinatesIndex = pp, this._scene && this._scene.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))))
+         }
+ ... (152 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L786-L787` → after: `L300-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L300-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L300-L302) · [Before (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L786-L787)

```diff
-         get useAltToZoom() {
-           return this._useAltToZoom
+         _markAllSubMeshesAsTexturesDirty() {
+           const pp = this.Gl();
+           pp && pp.markAllMaterialsAsDirty(1)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L789-L790` → after: `L304-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L304-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L304-L325) · [Before (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L789-L790)

```diff
-         set useAltToZoom(CC) {
-           this._useAltToZoom = CC, this._applyUseAltToZoomToInputMap()
+         readPixels() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+             ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+             cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+             Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+             op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+             Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
+             Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
+             xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Number.MAX_VALUE,
+             Lp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Number.MAX_VALUE;
+           if (!this._texture) return null;
+           const Yp = this._getEngine();
+           if (!Yp) return null;
+           const Dp = this.getSize();
+           let Ap = Dp.width,
+             Pp = Dp.height;
+ ... (6 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L792-L806` → after: `L327-L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L327-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L327-L344) · [Before (L792-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L792-L806)

```diff
-         _applyUseAltToZoomToInputMap() {
-           if (!this.camera?.movement) return;
-           const CC = this.camera.movement.input,
-             zC = CC.getEntry("keyboard", "zoom", {
-               modifiers: {
-                 alt: !0
-               }
-             });
-           !this._useAltToZoom && zC ? CC.inputMap.splice(CC.inputMap.indexOf(zC), 1) : this._useAltToZoom && !zC && CC.addEntry({
-             source: "keyboard",
-             modifiers: {
-               alt: !0
-             },
-             interaction: "zoom"
-           })
+         _readPixelsSync() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+             ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+             cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+             Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+             op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+           if (!this._texture) return null;
+           const Ip = this.getSize();
+           let Sp = Ip.width,
+             xp = Ip.height;
+           const Lp = this._getEngine();
+           if (!Lp) return null;
+           0 != ip && (Sp /= Math.pow(2, ip), xp /= Math.pow(2, ip), Sp = Math.round(Sp), xp = Math.round(xp));
+           try {
+             return this._texture.isCube ? Lp._readTexturePixelsSync(this._texture, Sp, xp, pp, ip, cp, Op, op) : Lp._readTexturePixelsSync(this._texture, Sp, xp, -1, ip, cp, Op, op)
+           } catch (Yp) {
+ ... (2 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L808-L822` → after: `L346-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L346-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L346-L350) · [Before (L808-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L808-L822)

```diff
-         attachControl(CC) {
-           CC = xC.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Km(), this._engine = this._scene.mg(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zC => {
-             const ZC = zC.event;
-             if (!ZC.metaKey)
-               if (zC.type === vC.c.KEYDOWN) {
-                 if (this._ctrlPressed = ZC.ctrlKey, this._altPressed = ZC.altKey, -1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysReset.i … [truncated]
-                   -1 === this._keys.indexOf(ZC.keyCode) && this._keys.push(ZC.keyCode), ZC.preventDefault && (CC || ZC.preventDefault())
-                 }
-               } else if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysReset.indexOf(ZC.keyCode) || -1 !== this.keysZoomIn.indexOf(ZC.k … [truncated]
-               const zC = this._keys.indexOf(ZC.keyCode);
-               zC >= 0 && this._keys.splice(zC, 1), ZC.preventDefault && (CC || ZC.preventDefault())
-             }
-           })))
+         get _lodTextureHigh() {
+           return this._texture ? this._texture._lodTextureHigh : null
+         }
+         get _lodTextureMid() {
+           return this._texture ? this._texture._lodTextureMid : null
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L824-L825` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L352-L353) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L824-L825)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         get _lodTextureLow() {
+           return this._texture ? this._texture._lodTextureLow : null
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L827-L845` → after: `L355-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L355-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L355-L361) · [Before (L827-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L827-L845)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const CC = this.camera,
-               zC = CC.movement.input;
-             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
-             const ZC = this._rotateDirection.set(0, 0),
-               QC = this._panDirection.set(0, 0);
-             let wC = 0,
-               bC = 0;
-             for (let nC = 0; nC < this._keys.length; nC++) {
-               const fC = this._keys[nC];
-               if (this._keyboardConditions.key = fC, -1 === this.keysReset.indexOf(fC)) {
-                 const CC = zC.resolveInteraction("keyboard", this._keyboardConditions);
-                 if (CC)
-                   if ("pan" === CC.interaction) bC = Math.max(bC, CC.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(fC) ? QC.x -= 1 : -1 !== this.keysRight.indexOf(fC) ? QC.x += 1 : -1 !== this.keysUp.indexOf(fC) ? QC.y += 1 : -1 !== this.keysDown.index … [truncated]
-                   else if ("zoom" === CC.interaction) {
- ... (3 more removed lines; see GitHub link above)
+         dispose() {
+           if (this._scene) {
+             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
+             const pp = this._scene.textures.indexOf(this);
+             if (pp >= 0 && this._scene.textures.splice(pp, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
+               const pp = this._parentContainer.textures.indexOf(this);
+               pp > -1 && this._parentContainer.textures.splice(pp, 1), this._parentContainer = null
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L850-L851` → after: `L366-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L366-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L366-L384) · [Before (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L850-L851)

```diff
-         getClassName() {
-           return "ArcRotateCameraKeyboardMoveInput"
+         serialize() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (!this.name && !pp) return null;
+           const ip = Pp.c.Serialize(this);
+           return Pp.c.AppendSerializedAnimations(this, ip), ip
+         }
+         static WhenAllReady(pp, ip) {
+           let cp = pp.length;
+           if (0 !== cp)
+             for (let Op = 0; Op < pp.length; Op++) {
+               const op = pp[Op];
+               if (op.isReady()) 0 === --cp && ip();
+               else {
+                 const pp = op.onLoadObservable;
+                 pp ? pp.addOnce((() => {
+                   0 === --cp && ip()
+ ... (3 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L853-L854` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L386-L387) · [Before (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L853-L854)

```diff
-         getSimpleName() {
-           return "keyboard"
+         static _IsScene(pp) {
+           return "Scene" === pp.getClassName()
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L857-L858` → after: `L390-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L390-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L390-L481) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L857-L858)

```diff
-         const nC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], (0, QC.j)(CC, null, gC, {
+         const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bp[Symbol.metadata] ?? null) : void 0;
+         ip = [(0, op.K)()], cp = [(0, op.K)()], Yp = [(0, op.K)()], Ap = [(0, op.K)()], Wp = [(0, op.K)("hasAlpha")], yp = [(0, op.K)("getAlphaFromRGB")], Up = [(0, op.K)()], wp = [(0, op.K)("coordinatesIndex")], vp = [(0, op.K)()], tp = [(0, op.K)("coordinatesMode")], Hp = [(0,  … [truncated]
+           kind: "getter",
+           name: "wrapU",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "wrapU" in pp,
+             get: pp => pp.wrapU
+           },
+           metadata: Ip
+         }, null, Np), (0, Op.j)(pp, null, dp, {
+           kind: "getter",
+           name: "wrapV",
+           static: !1,
+           private: !1,
+ ... (76 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L860` → after: `L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L483) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L860)

```diff
-           name: "useAltToZoom",
+           name: "irradianceTexture",
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L864-L865` → after: `L487-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L487-L488) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L864-L865)

```diff
-             has: CC => "useAltToZoom" in CC,
-             get: CC => CC.useAltToZoom
+             has: pp => "irradianceTexture" in pp,
+             get: pp => pp.irradianceTexture
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L870` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L493) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L870)

```diff
-           name: "keysUp",
+           name: "uniqueId",
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L874-L875` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L497-L498) · [Before (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L874-L875)

```diff
-             has: CC => "keysUp" in CC,
-             get: CC => CC.keysUp,
+             has: pp => "uniqueId" in pp,
+             get: pp => pp.uniqueId,
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L877` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L500) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L877)

```diff
-               CC.keysUp = zC
+               pp.uniqueId = ip
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L883` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L506) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L883)

```diff
-           name: "keysDown",
+           name: "name",
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L887-L888` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L510-L511) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L887-L888)

```diff
-             has: CC => "keysDown" in CC,
-             get: CC => CC.keysDown,
+             has: pp => "name" in pp,
+             get: pp => pp.name,
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L890` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L513) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L890)

```diff
-               CC.keysDown = zC
+               pp.name = ip
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L896` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L519) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L896)

```diff
-           name: "keysLeft",
+           name: "displayName",
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L900-L901` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L523-L524) · [Before (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L900-L901)

```diff
-             has: CC => "keysLeft" in CC,
-             get: CC => CC.keysLeft,
+             has: pp => "displayName" in pp,
+             get: pp => pp.displayName,
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L903` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L526) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L903)

```diff
-               CC.keysLeft = zC
+               pp.displayName = ip
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L909` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L532) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L909)

```diff
-           name: "keysRight",
+           name: "metadata",
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L913-L914` → after: `L536-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L536-L537) · [Before (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L913-L914)

```diff
-             has: CC => "keysRight" in CC,
-             get: CC => CC.keysRight,
+             has: pp => "metadata" in pp,
+             get: pp => pp.metadata,
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L916` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L539) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L916)

```diff
-               CC.keysRight = zC
+               pp.metadata = ip
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L922` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L545) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L922)

```diff
-           name: "keysReset",
+           name: "_hasAlpha",
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L926-L927` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L549-L550) · [Before (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L926-L927)

```diff
-             has: CC => "keysReset" in CC,
-             get: CC => CC.keysReset,
+             has: pp => "_hasAlpha" in pp,
+             get: pp => pp._hasAlpha,
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L929` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L552) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L929)

```diff
-               CC.keysReset = zC
+               pp._hasAlpha = ip
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L935` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L558) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L935)

```diff
-           name: "keysZoomIn",
+           name: "_getAlphaFromRGB",
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L939-L940` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L562-L563) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L939-L940)

```diff
-             has: CC => "keysZoomIn" in CC,
-             get: CC => CC.keysZoomIn,
+             has: pp => "_getAlphaFromRGB" in pp,
+             get: pp => pp._getAlphaFromRGB,
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L942` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L565) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L942)

```diff
-               CC.keysZoomIn = zC
+               pp._getAlphaFromRGB = ip
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L948` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L571) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L948)

```diff
-           name: "keysZoomOut",
+           name: "level",
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L952-L953` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L575-L576) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L952-L953)

```diff
-             has: CC => "keysZoomOut" in CC,
-             get: CC => CC.keysZoomOut,
+             has: pp => "level" in pp,
+             get: pp => pp.level,
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L955` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L578) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L955)

```diff
-               CC.keysZoomOut = zC
+               pp.level = ip
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L961` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L584) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L961)

```diff
-           name: "panningSensibility",
+           name: "_coordinatesIndex",
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L965-L966` → after: `L588-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L588-L589) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L965-L966)

```diff
-             has: CC => "panningSensibility" in CC,
-             get: CC => CC.panningSensibility,
+             has: pp => "_coordinatesIndex" in pp,
+             get: pp => pp._coordinatesIndex,
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L968` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L591) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L968)

```diff
-               CC.panningSensibility = zC
+               pp._coordinatesIndex = ip
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L974` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L597) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L974)

```diff
-           name: "zoomingSensibility",
+           name: "optimizeUVAllocation",
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L978-L979` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L601-L602) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L978-L979)

```diff
-             has: CC => "zoomingSensibility" in CC,
-             get: CC => CC.zoomingSensibility,
+             has: pp => "optimizeUVAllocation" in pp,
+             get: pp => pp.optimizeUVAllocation,
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L981` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L604) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L981)

```diff
-               CC.zoomingSensibility = zC
+               pp.optimizeUVAllocation = ip
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L987` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L610) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L987)

```diff
-           name: "angularSpeed",
+           name: "_coordinatesMode",
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L991-L992` → after: `L614-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L614-L615) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L991-L992)

```diff
-             has: CC => "angularSpeed" in CC,
-             get: CC => CC.angularSpeed,
+             has: pp => "_coordinatesMode" in pp,
+             get: pp => pp._coordinatesMode,
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L994` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L617) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L994)

```diff
-               CC.angularSpeed = zC
+               pp._coordinatesMode = ip
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L998-L1044` → after: `L621-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L621-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L621-L630) · [Before (L998-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L998-L1044)

```diff
-         }, cC, uC), nC && Object.defineProperty(CC, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: nC
-         })
-       })(), CC
-     })();
-     AC.e.ArcRotateCameraKeyboardMoveInput = eC;
-     var hC = ZC(37596),
-       KC = ZC(40010);
-     let YC = (() => {
-       var CC;
-       let zC, ZC, bC, oC = [],
-         qC = [],
-         WC = [],
- ... (31 more removed lines; see GitHub link above)
+         }, oi, Ii), (0, Op.j)(null, null, ep, {
+           kind: "field",
+           name: "wrapR",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "wrapR" in pp,
+             get: pp => pp.wrapR,
+             set: (pp, ip) => {
+               pp.wrapR = ip
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1046-L1102` → after: `L632-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L632-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L632-L647) · [Before (L1046-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1046-L1102)

```diff
-             QC && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(QC)) : this.camera.movement.zoomAccumulatedPixels += QC), ZC.preventDefault && (CC || ZC.preventDefault())
-           }, this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._wheel, FC.b.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.Q_(0)
-         }
-         detachControl() {
-           this._observer && (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
-         }
-         checkInputs() {
-           if (!this.zoomToMouseLocation) return;
-           const CC = this.camera;
-           if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(CC.inertialAlphaOffset) + Math.abs(CC.inertialBetaOffset) + Math.abs(CC.inertialRadiusOffset)) {
-             this._updateHitPlane(), CC.target.addInPlace(this._inertialPanning), CC.radius -= this._zoomToMouseRadiusOffset;
-             const zC = CC.movement.getFrameIndependentDecay(CC.inertia);
-             this._inertialPanning.scaleInPlace(zC), this._zoomToMouseRadiusOffset *= zC, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < NC.e && (this._zoomToMouseRadiusOffset = 0)
-           }
-         }
-         getClassName() {
- ... (41 more removed lines; see GitHub link above)
+           },
+           metadata: Ip
+         }, Si, xi), (0, Op.j)(null, null, jp, {
+           kind: "field",
+           name: "anisotropicFilteringLevel",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "anisotropicFilteringLevel" in pp,
+             get: pp => pp.anisotropicFilteringLevel,
+             set: (pp, ip) => {
+               pp.anisotropicFilteringLevel = ip
+             }
+           },
+           metadata: Ip
+         }, Li, Yi), (0, Op.j)(null, null, Mp, {
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1104` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L649) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1104)

```diff
-           name: "wheelPrecision",
+           name: "invertZ",
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1108-L1109` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L653-L654) · [Before (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1108-L1109)

```diff
-             has: CC => "wheelPrecision" in CC,
-             get: CC => CC.wheelPrecision,
+             has: pp => "invertZ" in pp,
+             get: pp => pp.invertZ,
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1111` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L656) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1111)

```diff
-               CC.wheelPrecision = zC
+               pp.invertZ = ip
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1117` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L662) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1117)

```diff
-           name: "zoomToMouseLocation",
+           name: "lodLevelInAlpha",
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1121-L1122` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L666-L667) · [Before (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1121-L1122)

```diff
-             has: CC => "zoomToMouseLocation" in CC,
-             get: CC => CC.zoomToMouseLocation,
+             has: pp => "lodLevelInAlpha" in pp,
+             get: pp => pp.lodLevelInAlpha,
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1124` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L669) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1124)

```diff
-               CC.zoomToMouseLocation = zC
+               pp.lodLevelInAlpha = ip
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1130` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L675) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1130)

```diff
-           name: "wheelDeltaPercentage",
+           name: "isRenderTarget",
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1134-L1135` → after: `L679-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L679-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L679-L680) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1134-L1135)

```diff
-             has: CC => "wheelDeltaPercentage" in CC,
-             get: CC => CC.wheelDeltaPercentage,
+             has: pp => "isRenderTarget" in pp,
+             get: pp => pp.isRenderTarget,
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1137` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L682) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1137)

```diff
-               CC.wheelDeltaPercentage = zC
+               pp.isRenderTarget = ip
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1147` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L692) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1147)

```diff
-       })(), CC
+       })(), pp.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, pp
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1149-L1222` → after: `L694-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L694-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L694-L711) · [Before (L1149-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1149-L1222)

```diff
-     AC.e.ArcRotateCameraMouseWheelInput = YC;
-     var dC, mC, HC = ZC(39694);
-     class EC extends AC.i {
-       constructor(CC) {
-         super(CC)
-       }
-       addMouseWheel() {
-         return this.add(new YC), this
-       }
-       addPointers() {
-         return this.add(new iC), this
-       }
-       addKeyboard() {
-         return this.add(new eC), this
-       }
-     }(dC = EC.prototype).addVRDeviceOrientation ?? (dC.addVRDeviceOrientation = (0, HC.f)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (mC = EC.prototype).addGamepad ?? (mC.addGamepad = (0, HC.f)("ArcRotateCameraInputsManager", "addGamepad"));
- ... (58 more removed lines; see GitHub link above)
+     (Ap = yp.prototype).forceSphericalPolynomialsRecompute ?? (Ap.forceSphericalPolynomialsRecompute = (0, Wp.k)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(yp.prototype, "sphericalPolynomial") || Object.defineProperty(yp.prototype, "sph … [truncated]
+   },
+   40654: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => ep,
+       d: () => Hp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37349),
+       Sp = cp(37320),
+       xp = cp(40195),
+       Lp = cp(37368),
+       Yp = cp(40096),
+       Dp = cp(40107),
+       Ap = cp(40306),
+ ... (2 more added lines; see GitHub link above)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1225` → after: `L714-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L714-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L714-L737) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1225)

```diff
-       return isNaN(CC) ? zC : CC
+       let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const Op = ip.width,
+         op = ip.height;
+       if (pp instanceof Float32Array) {
+         let ip = pp.byteLength / pp.BYTES_PER_ELEMENT;
+         const cp = new Uint8Array(ip);
+         for (; --ip >= 0;) {
+           let Op = pp[ip];
+           Op < 0 ? Op = 0 : Op > 1 && (Op = 1), cp[ip] = 255 * Op
+         }
+         pp = cp
+       }
+       const Ip = document.createElement("canvas");
+       Ip.width = Op, Ip.height = op;
+       const Sp = Ip.getContext("2d");
+       if (!Sp) return null;
+ ... (8 more added lines; see GitHub link above)
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1229-L1250` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L760) · [Before (L1229-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1229-L1250)

```diff
-         let zC, ZC, oC, FC, WC, gC, SC, AC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, lC, XC, cC, sC, TC, aC, tC, DC, jC, yC = RC.h,
-           LC = [],
-           UC = [],
-           BC = [],
-           OC = [],
-           kC = [],
-           VC = [],
-           Cz = [],
-           zz = [],
-           Zz = [],
-           Qz = [],
-           wz = [],
-           bz = [],
-           nz = [],
-           fz = [],
-           oz = [],
- ... (6 more removed lines; see GitHub link above)
+         let ip, cp, yp, Hp, dp, ep, jp, kp, mp, Rp, qp, Mp, Cp, Ep = xp.d,
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1254-L1570` → after: `L764-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L764-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L764-L789) · [Before (L1254-L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1254-L1570)

```diff
-           Gz = [],
-           Rz = [],
-           Az = [],
-           xz = [],
-           Jz = [],
-           Iz = [],
-           iz = [],
-           vz = [],
-           ez = [],
-           hz = [],
-           Kz = [],
-           Yz = [],
-           dz = [],
-           mz = [],
-           Hz = [],
-           Ez = [],
- ... (301 more removed lines; see GitHub link above)
+           Jp = [],
+           Bp = [],
+           Np = [],
+           Tp = [],
+           fp = [],
+           bp = [],
+           hp = [],
+           ap = [],
+           np = [],
+           Fp = [],
+           gp = [],
+           Gp = [],
+           rp = [],
+           Zp = [],
+           zp = [],
+           sp = [],
+ ... (10 more added lines; see GitHub link above)
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1572-L1573` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L791-L792) · [Before (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1572-L1573)

```diff
-           _isSynchronizedViewMatrix() {
-             return !!super._isSynchronizedViewMatrix() && (this._cache.wV.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
+           get noMipmap() {
+             return this._noMipmap
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1575-L1581` → after: `L794-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L794-L795) · [Before (L1575-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1575-L1581)

```diff
-           attachControl(CC, zC) {
-             let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-               QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
-             const wC = arguments;
-             zC = xC.g.BackCompatCameraNoPreventDefault(wC), this._useCtrlForPanning = ZC, this._panningMouseButton = QC, "boolean" === typeof wC[0] && (wC.length > 1 && (this._useCtrlForPanning = wC[1]), wC.length > 2 && (this._panningMouseButton = wC[2])), this.inputs.attachElem … [truncated]
-               this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0
-             }
+           get mimeType() {
+             return this._mimeType
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1583-L1584` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L797-L798) · [Before (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1583-L1584)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this._reset && this._reset()
+           set isBlocking(pp) {
+             this._isBlocking = pp
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1586-L1589` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L800-L801) · [Before (L1586-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1586-L1589)

```diff
-           _applyRotationAndZoomDelta(CC, zC, ZC) {
-             const QC = this.invertRotation ? -1 : 1;
-             let wC = CC * this._calculateHandednessMultiplier();
-             this.beta < 0 && (wC *= -1), this.alpha += wC * QC, this.beta += zC * QC, this.radius -= ZC
+           get isBlocking() {
+             return this._isBlocking
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1591-L1608` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L803-L804) · [Before (L1591-L1608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1591-L1608)

```diff
-           _applyPanDelta(CC, zC) {
-             const ZC = nC.j.Eg[0].L_(CC, zC, zC);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ZC.multiplyInPlace(this.panningAxis), nC.r.TransformNormalToRef(ZC, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
-               const CC = this.upVector,
-                 zC = nC.r.CrossToRef(this._transformedDirection, CC, this._transformedDirection);
-               nC.r.CrossToRef(CC, zC, this._transformedDirection)
-             } else this.panningAxis.y || (this._transformedDirection.y = 0);
-             if (!this._targetHost)
-               if (null !== this.panningDistanceLimit) {
-                 this._transformedDirection.addInPlace(this.wV);
-                 nC.r.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.wV.Av(this._transformedDirection)
-               } else {
-                 if (this.parent) {
-                   const CC = nC.j.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(CC), CC.transposeToRef(CC), nC.r.TransformCoordinatesToRef(this._transformedDirection, CC, this._transformedDirection)
-                 }
- ... (2 more removed lines; see GitHub link above)
+           get invertY() {
+             return this._invertY
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1610-L1647` → after: `L806-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L806-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L806-L842) · [Before (L1610-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1610-L1647)

```diff
-           _checkInputs() {
-             if (this._collisionTriggered) return;
-             this.inputs.checkInputs();
-             let CC = !1;
-             this.movement.computeCurrentFrameDeltas();
-             const zC = this.movement.rotationDeltaCurrentFrame,
-               ZC = this.movement.zoomDeltaCurrentFrame,
-               QC = this.movement.panDeltaCurrentFrame;
-             if (0 === zC.x && 0 === zC.y && 0 === ZC && 0 === QC.x && 0 === QC.y || (CC = !0, 0 === zC.x && 0 === zC.y && 0 === ZC || this._applyRotationAndZoomDelta(zC.x, zC.y, ZC), 0 === QC.x && 0 === QC.y || this._applyPanDelta(QC.x, QC.y)), 0 === this._inertialAlphaOffset &&  … [truncated]
-               this._applyPanDelta(this.inertialPanningX, this.inertialPanningY), this.inertialPanningX *= this.panningInertia, this.inertialPanningY *= this.panningInertia;
-               const zC = this._panningEpsilon;
-               Math.abs(this.inertialPanningX) < zC && (this.inertialPanningX = 0), Math.abs(this.inertialPanningY) < zC && (this.inertialPanningY = 0), CC = !0
-             }
-             if (CC) this.stopInterpolation();
-             else if (this._isInterpolating) {
-               let CC = !1;
- ... (22 more removed lines; see GitHub link above)
+           constructor(ip, cp, op, Sp) {
+             let xp, Lp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pp.TRILINEAR_SAMPLINGMODE,
+               Yp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               Ap = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               Pp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               Wp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               yp = arguments.length > 9 ? arguments[9] : void 0,
+               Up = arguments.length > 10 ? arguments[10] : void 0,
+               wp = arguments.length > 11 ? arguments[11] : void 0,
+               tp = arguments.length > 12 ? arguments[12] : void 0,
+               Hp = arguments.length > 13 ? arguments[13] : void 0;
+             super(cp), this.url = ((0, Op.l)(this, Xp), (0, Op.l)(this, lp, null)), this.uOffset = ((0, Op.l)(this, Qp), (0, Op.l)(this, Jp, 0)), this.vOffset = ((0, Op.l)(this, Bp), (0, Op.l)(this, Np, 0)), this.uScale = ((0, Op.l)(this, Tp), (0, Op.l)(this, fp, 1)), this.vScale … [truncated]
+             let dp = !1,
+               ep = null,
+               jp = !0;
+             "object" === typeof op && null !== op ? (xp = op.noMipmap ?? !1, Sp = op.invertY ?? !vp.c, Lp = op.samplingMode ?? pp.TRILINEAR_SAMPLINGMODE, Yp = op.onLoad ?? null, Ap = op.onError ?? null, Pp = op.buffer ?? null, Wp = op.deleteBuffer ?? !1, yp = op.format, Up = op.m … [truncated]
+ ... (21 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1649-L1674` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L844) · [Before (L1649-L1674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1649-L1674)

```diff
-               this._isInterpolating = CC
-             }
-             this._checkLimits(), super._checkInputs()
-           }
-           _checkLimits() {
-             null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === thi … [truncated]
-           }
-           rebuildAnglesAndRadius() {
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || nC.r.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
-             const CC = this.alpha;
-             var zC, ZC;
-             this.alpha = function(CC) {
-               let zC = Math.PI / 2;
-               return 0 === CC.x && 0 === CC.z || (zC = Math.acos(CC.x / Math.sqrt(Math.pow(CC.x, 2) + Math.pow(CC.z, 2)))), CC.z < 0 && (zC = 2 * Math.PI - zC), zC
-             }(this._computationVector), this.beta = (zC = this._computationVector.y, ZC = this.radius, Math.acos(zC / ZC));
-             const QC = Math.round((CC - this.alpha) / (2 * Math.PI));
- ... (10 more removed lines; see GitHub link above)
+             else if (kp && kp.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = Rp, this._delayedOnError = qp;
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1676-L1722` → after: `L846-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L846-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L846-L851) · [Before (L1676-L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1676-L1722)

```diff
-               const zC = CC,
-                 QC = this._getTargetPosition();
-               if (QC && !ZC && QC.equals(zC)) return;
-               this._targetHost = null, this.wV = zC, this._targetBoundingCenter = null, this.onMeshTargetChangedObservable.notifyObservers(null)
-             }
-             QC || this.rebuildAnglesAndRadius()
-           }
-           _getViewMatrix() {
-             const CC = Math.cos(this.alpha),
-               zC = Math.sin(this.alpha),
-               ZC = Math.cos(this.beta);
-             let QC = Math.sin(this.beta);
-             0 === QC && (QC = 1e-4), 0 === this.radius && (this.radius = 1e-4);
-             const wC = this._getTargetPosition();
-             if (this._computationVector.L_(this.radius * CC * QC, this.radius * ZC, this.radius * zC * QC), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || nC.r.TransformCoordinatesToRef(this._computationVector, this._yToUpMatrix, this._computationVe … [truncated]
-               const CC = this.Km().collisionCoordinator;
- ... (31 more removed lines; see GitHub link above)
+               try {
+                 this._texture = mp.createTexture(this.url, xp, this._invertY, kp, Lp, Rp, qp, this._buffer, void 0, this._format, this._forcedExtension, Up, wp, tp, dp)
+               } catch (Mp) {
+                 throw qp("error loading", Mp), Mp
+               }
+               Wp && (this._buffer = null)
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1726-L1737` → after: `L854-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L854-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L854-L888) · [Before (L1726-L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1726-L1737)

```diff
-           createRigCamera(zC, ZC) {
-             let QC = 0;
-             switch (this.cameraRigMode) {
-               case GC.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case GC.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case GC.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case GC.d.RIG_MODE_VR:
-                 QC = this._cameraRigParams.stereoHalfAngle * (0 === ZC ? 1 : -1);
-                 break;
-               case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
-                 QC = this._cameraRigParams.stereoHalfAngle * (0 === ZC ? -1 : 1)
+           updateURL(pp) {
+             let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               cp = arguments.length > 2 ? arguments[2] : void 0,
+               Op = arguments.length > 3 ? arguments[3] : void 0;
+             this.url && (this.releaseInternalTexture(), this.Gl().markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = pp), this.url = pp, this._buffer = ip, this._forcedExtension = Op, this.delayLoadState = 4;
+             const op = this._delayedOnLoad;
+             this._delayedOnLoad = () => {
+               op ? op() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), cp && cp()
+             }, this.delayLoad()
+           }
+           delayLoad() {
+             if (4 !== this.delayLoadState) return;
+             const pp = this.Gl();
+             if (!pp) return;
+             let ip = this.url;
+             !ip && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (ip = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(ip, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+ ... (19 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1739-L1751` → after: `L890-L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L890-L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L890-L894) · [Before (L1739-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1739-L1751)

```diff
-             const wC = new CC(zC, this.alpha + QC, this.beta, this.radius, this.wV, this.Km());
-             return wC._cameraRigParams = {}, wC.isRigCamera = !0, wC.rigParent = this, wC.upVector = this.upVector, wC.mode = this.mode, wC.orthoLeft = this.orthoLeft, wC.orthoRight = this.orthoRight, wC.orthoBottom = this.orthoBottom, wC.orthoTop = this.orthoTop, wC
-           }
-           _updateRigCameras() {
-             const CC = this._rigCameras[0],
-               zC = this._rigCameras[1];
-             switch (CC.beta = zC.beta = this.beta, this.cameraRigMode) {
-               case GC.d.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
-               case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
-               case GC.d.RIG_MODE_STEREOSCOPIC_OVERUNDER:
-               case GC.d.RIG_MODE_STEREOSCOPIC_INTERLACED:
-               case GC.d.RIG_MODE_VR:
-                 CC.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle, zC.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle;
+             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = Sp.b.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = Sp.b.Zero());
+             const cp = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
+             switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMo … [truncated]
+               case pp.PLANAR_MODE:
+                 Sp.b.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1753-L1754` → after: `L896-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L896-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L896-L903) · [Before (L1753-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1753-L1754)

```diff
-               case GC.d.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
-                 CC.alpha = this.alpha + this._cameraRigParams.stereoHalfAngle, zC.alpha = this.alpha - this._cameraRigParams.stereoHalfAngle
+               case pp.PROJECTION_MODE: {
+                 Sp.b.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
+                 const pp = ip.getProjectionMatrix();
+                 this._cachedReflectionProjectionMatrixId = pp.updateFlag, pp.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
+                 break
+               }
+               default:
+                 Sp.b.IdentityToRef(this._cachedReflectionTextureMatrix)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1756` → after: `L905-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L905-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L905-L935) · [Before (L1756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1756)

```diff
-             super._updateRigCameras()
+             return cp && ip.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(this))), this._cachedReflectionTextureMatrix
+           }
+           clone() {
+             const ip = {
+               noMipmap: this._noMipmap,
+               invertY: this._invertY,
+               samplingMode: this.samplingMode,
+               onLoad: void 0,
+               onError: void 0,
+               buffer: this._texture ? this._texture._buffer : void 0,
+               deleteBuffer: this._deleteBuffer,
+               format: this.textureFormat,
+               mimeType: this.mimeType,
+               loaderOptions: this._loaderOptions,
+               creationFlags: this._creationFlags,
+               useSRGBBuffer: this._useSRGBBuffer
+ ... (15 more added lines; see GitHub link above)
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1758-L1767` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L937-L938) · [Before (L1758-L1767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1758-L1767)

```diff
-           _calculateLowerRadiusFromModelBoundingSphere(CC, zC) {
-             let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
-             const QC = nC.r.Distance(CC, zC),
-               wC = this.Km().mg().getAspectRatio(this),
-               bC = Math.tan(this.fov / 2),
-               fC = bC * wC,
-               oC = .5 * QC * ZC,
-               qC = oC * Math.sqrt(1 + 1 / (fC * fC)),
-               FC = oC * Math.sqrt(1 + 1 / (bC * bC));
-             return Math.max(qC, FC)
+           getClassName() {
+             return "Texture"
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1770` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L941) · [Before (L1770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1770)

```diff
-             this.inputs.clear(), super.dispose()
+             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1772-L1773` → after: `L943-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L943-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L943-L1044) · [Before (L1772-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1772-L1773)

```diff
-           getClassName() {
-             return "ArcRotateCamera"
+           static Parse(ip, cp, Op) {
+             if (ip.customType) {
+               const pp = Ap.d.Instantiate(ip.customType).Parse(ip, cp, Op);
+               return ip.samplingMode && pp.updateSamplingMode && pp._samplingMode && pp._samplingMode !== ip.samplingMode && pp.updateSamplingMode(ip.samplingMode), pp
+             }
+             if (ip.isCube && !ip.isRenderTarget) return pp._CubeTextureParser(ip, cp, Op);
+             const op = void 0 !== ip.internalTextureUniqueId;
+             if (!ip.name && !ip.isRenderTarget && !op) return null;
+             let Ip;
+             if (op) {
+               const pp = cp.gy().getLoadedTexturesCache();
+               for (const cp of pp)
+                 if (cp.uniqueId === ip.internalTextureUniqueId) {
+                   Ip = cp;
+                   break
+                 }
+ ... (86 more added lines; see GitHub link above)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1777-L1817` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1048) · [Before (L1777-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1777-L1817)

```diff
-           zC = [(0, wC.M)()], ZC = [(0, wC.M)()], oC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.J)("target")], gC = [(0, wC.w)("targetHost")], SC = [(0, wC.M)()], AC = [(0, wC.M)()], JC = [(0, wC.M)()], IC = [(0, wC.M)()], iC = [(0, wC.M)()], vC = [(0, wC.M)()], eC = [(0,  … [truncated]
-             kind: "getter",
-             name: "inertialAlphaOffset",
-             static: !1,
-             private: !1,
-             access: {
-               has: CC => "inertialAlphaOffset" in CC,
-               get: CC => CC.inertialAlphaOffset
-             },
-             metadata: bC
-           }, null, LC), (0, QC.j)(CC, null, AC, {
-             kind: "getter",
-             name: "inertialBetaOffset",
-             static: !1,
-             private: !1,
-             access: {
- ... (25 more removed lines; see GitHub link above)
+           ip = [(0, op.K)()], cp = [(0, op.K)()], yp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)()], kp = [(0, op.K)()], mp = [(0, op.K)()], Rp = [(0, op.K)()], qp = [(0, op.K)()], Mp = [(0, op.K)()], Cp = [(0, op.K)()], (0, Op.j)( … [truncated]
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1819` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1050) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1819)

```diff
-             name: "zoomToMouseLocation",
+             name: "isBlocking",
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1823-L1824` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1054-L1055) · [Before (L1823-L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1823-L1824)

```diff
-               has: CC => "zoomToMouseLocation" in CC,
-               get: CC => CC.zoomToMouseLocation
+               has: pp => "isBlocking" in pp,
+               get: pp => pp.isBlocking
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1829-L1972` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1060) · [Before (L1829-L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1829-L1972)

```diff
-             name: "alpha",
-             static: !1,
-             private: !1,
-             access: {
-               has: CC => "alpha" in CC,
-               get: CC => CC.alpha,
-               set: (CC, zC) => {
-                 CC.alpha = zC
-               }
-             },
-             metadata: bC
-           }, UC, BC), (0, QC.j)(null, null, ZC, {
-             kind: "field",
-             name: "beta",
-             static: !1,
-             private: !1,
- ... (128 more removed lines; see GitHub link above)
+             name: "url",
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1976-L1977` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1064-L1065) · [Before (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1976-L1977)

```diff
-               has: CC => "upperRadiusLimit" in CC,
-               get: CC => CC.upperRadiusLimit,
+               has: pp => "url" in pp,
+               get: pp => pp.url,
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1979` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1067) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1979)

```diff
-                 CC.upperRadiusLimit = zC
+                 pp.url = ip
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1985` → after: `L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1073) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1985)

```diff
-             name: "lowerTargetYLimit",
+             name: "uOffset",
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1989-L1990` → after: `L1077-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1077-L1078) · [Before (L1989-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1989-L1990)

```diff
-               has: CC => "lowerTargetYLimit" in CC,
-               get: CC => CC.lowerTargetYLimit,
+               has: pp => "uOffset" in pp,
+               get: pp => pp.uOffset,
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1992` → after: `L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1080) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1992)

```diff
-                 CC.lowerTargetYLimit = zC
+                 pp.uOffset = ip
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L1998` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1086) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L1998)

```diff
-             name: "inertialPanningX",
+             name: "vOffset",
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2002-L2003` → after: `L1090-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1090-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1090-L1091) · [Before (L2002-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2002-L2003)

```diff
-               has: CC => "inertialPanningX" in CC,
-               get: CC => CC.inertialPanningX,
+               has: pp => "vOffset" in pp,
+               get: pp => pp.vOffset,
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2005` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1093) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2005)

```diff
-                 CC.inertialPanningX = zC
+                 pp.vOffset = ip
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2011` → after: `L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1099) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2011)

```diff
-             name: "inertialPanningY",
+             name: "uScale",
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2015-L2016` → after: `L1103-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1103-L1104) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2015-L2016)

```diff
-               has: CC => "inertialPanningY" in CC,
-               get: CC => CC.inertialPanningY,
+               has: pp => "uScale" in pp,
+               get: pp => pp.uScale,
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2018` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1106) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2018)

```diff
-                 CC.inertialPanningY = zC
+                 pp.uScale = ip
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2024` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1112) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2024)

```diff
-             name: "pinchToPanMaxDistance",
+             name: "vScale",
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2028-L2029` → after: `L1116-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1116-L1117) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2028-L2029)

```diff
-               has: CC => "pinchToPanMaxDistance" in CC,
-               get: CC => CC.pinchToPanMaxDistance,
+               has: pp => "vScale" in pp,
+               get: pp => pp.vScale,
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2031` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1119) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2031)

```diff
-                 CC.pinchToPanMaxDistance = zC
+                 pp.vScale = ip
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2037` → after: `L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1125) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2037)

```diff
-             name: "panningDistanceLimit",
+             name: "uAng",
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2041-L2042` → after: `L1129-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1129-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1129-L1130) · [Before (L2041-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2041-L2042)

```diff
-               has: CC => "panningDistanceLimit" in CC,
-               get: CC => CC.panningDistanceLimit,
+               has: pp => "uAng" in pp,
+               get: pp => pp.uAng,
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2044` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1132) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2044)

```diff
-                 CC.panningDistanceLimit = zC
+                 pp.uAng = ip
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2050` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1138) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2050)

```diff
-             name: "panningOriginTarget",
+             name: "vAng",
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2054-L2055` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1142-L1143) · [Before (L2054-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2054-L2055)

```diff
-               has: CC => "panningOriginTarget" in CC,
-               get: CC => CC.panningOriginTarget,
+               has: pp => "vAng" in pp,
+               get: pp => pp.vAng,
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2057` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1145) · [Before (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2057)

```diff
-                 CC.panningOriginTarget = zC
+                 pp.vAng = ip
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2063` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1151) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2063)

```diff
-             name: "zoomOnFactor",
+             name: "wAng",
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2067-L2068` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1155-L1156) · [Before (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2067-L2068)

```diff
-               has: CC => "zoomOnFactor" in CC,
-               get: CC => CC.zoomOnFactor,
+               has: pp => "wAng" in pp,
+               get: pp => pp.wAng,
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2070` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1158) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2070)

```diff
-                 CC.zoomOnFactor = zC
+                 pp.wAng = ip
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2076` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1164) · [Before (L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2076)

```diff
-             name: "targetScreenOffset",
+             name: "uRotationCenter",
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2080-L2081` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1168-L1169) · [Before (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2080-L2081)

```diff
-               has: CC => "targetScreenOffset" in CC,
-               get: CC => CC.targetScreenOffset,
+               has: pp => "uRotationCenter" in pp,
+               get: pp => pp.uRotationCenter,
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2083` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1171) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2083)

```diff
-                 CC.targetScreenOffset = zC
+                 pp.uRotationCenter = ip
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2089` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1177) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2089)

```diff
-             name: "allowUpsideDown",
+             name: "vRotationCenter",
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2093-L2094` → after: `L1181-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1181-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1181-L1182) · [Before (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2093-L2094)

```diff
-               has: CC => "allowUpsideDown" in CC,
-               get: CC => CC.allowUpsideDown,
+               has: pp => "vRotationCenter" in pp,
+               get: pp => pp.vRotationCenter,
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2096` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1184) · [Before (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2096)

```diff
-                 CC.allowUpsideDown = zC
+                 pp.vRotationCenter = ip
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2102` → after: `L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1190) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2102)

```diff
-             name: "useInputToRestoreState",
+             name: "wRotationCenter",
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2106-L2107` → after: `L1194-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1194-L1195) · [Before (L2106-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2106-L2107)

```diff
-               has: CC => "useInputToRestoreState" in CC,
-               get: CC => CC.useInputToRestoreState,
+               has: pp => "wRotationCenter" in pp,
+               get: pp => pp.wRotationCenter,
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2109` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1197) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2109)

```diff
-                 CC.useInputToRestoreState = zC
+                 pp.wRotationCenter = ip
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2115` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1203) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2115)

```diff
-             name: "restoreStateInterpolationFactor",
+             name: "homogeneousRotationInUVTransform",
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2119-L2120` → after: `L1207-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1207-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1207-L1208) · [Before (L2119-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2119-L2120)

```diff
-               has: CC => "restoreStateInterpolationFactor" in CC,
-               get: CC => CC.restoreStateInterpolationFactor,
+               has: pp => "homogeneousRotationInUVTransform" in pp,
+               get: pp => pp.homogeneousRotationInUVTransform,
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2122` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1210) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2122)

```diff
-                 CC.restoreStateInterpolationFactor = zC
+                 pp.homogeneousRotationInUVTransform = ip
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2132` → after: `L1220-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1220-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1220-L1226) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2132)

```diff
-         })(), CC
+         })(), pp.SerializeBuffers = !0, pp.ForceSerializeBuffers = !1, pp.OnTextureLoadErrorObservable = new Ip.d, pp._SerializeInternalTextureUniqueId = !1, pp._CubeTextureParser = (pp, ip, cp) => {
+           throw (0, Yp.o)("CubeTexture")
+         }, pp._CreateMirror = (pp, ip, cp, Op) => {
+           throw (0, Yp.o)("MirrorTexture")
+         }, pp._CreateRenderTargetTexture = (pp, ip, cp, Op, op) => {
+           throw (0, Yp.o)("RenderTargetTexture")
+         }, pp.NEAREST_SAMPLINGMODE = 1, pp.NEAREST_NEAREST_MIPLINEAR = 8, pp.BILINEAR_SAMPLINGMODE = 2, pp.LINEAR_LINEAR_MIPNEAREST = 11, pp.TRILINEAR_SAMPLINGMODE = 3, pp.LINEAR_LINEAR_MIPLINEAR = 3, pp.NEAREST_NEAREST_MIPNEAREST = 4, pp.NEAREST_LINEAR_MIPNEAREST = 5, pp.NEAREST … [truncated]
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2135-L2142` → after: `L1229-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1229-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1229-L1232) · [Before (L2135-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2135-L2142)

```diff
-     TC || (TC = !0, oC.d.AddNodeConstructor("ArcRotateCamera", ((CC, zC) => () => new sC(CC, 0, 0, 1, nC.r.Zero(), zC))), (0, lC.d)("BABYLON.ArcRotateCamera", sC))
-   },
-   40076: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       e: () => QC.b
-     });
-     var QC = ZC(40078);
-     (0, QC.e)()
+ 
+     function ep() {
+       dp || (dp = !0, (0, Lp.g)("BABYLON.Texture", Hp), tp.c._TextureParser = Hp.Parse)
+     }
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2144` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1234) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2144)

```diff
-   40078: (CC, zC, ZC) => {
+   40225: (pp, ip, cp) => {
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2146-L2147` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1236) · [Before (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2146-L2147)

```diff
-       b: () => FC,
-       e: () => NC
+       c: () => Op
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/260.js` (Changed code · before: `L2149-L2235` → after: `L1238-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dcR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f1511e856dc3a0e5fa993d43f7da13e173583cd836f204972c8c591a25bf0dc) · [After (L1238-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/260.js#L1238-L1289) · [Before (L2149-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/260.js#L2149-L2235)

```diff
-     var QC = ZC(39811),
-       wC = ZC(39818),
-       bC = ZC(36963),
-       nC = ZC(37142),
-       fC = ZC(40084),
-       oC = ZC(40046),
-       qC = ZC(37002);
-     let FC = (() => {
-         var CC;
-         let zC, ZC, oC = fC.c,
-           qC = [],
-           FC = [],
-           WC = [],
-           NC = [];
-         return CC = class extends oC {
-           constructor(CC, zC, ZC, wC) {
- ... (71 more removed lines; see GitHub link above)
+     class Op {
+       constructor(pp, ip) {
+         this.width = pp, this.height = ip
+       }
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
+       }
+       getClassName() {
+         return "Size"
+       }
+       getHashCode() {
+         let pp = 0 | this.width;
+         return pp = 397 * pp ^ this.height, pp
+       }
+       rM(pp) {
+         this.width = pp.width, this.height = pp.height
+ ... (36 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/261.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/261.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa)

#### 1. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L4)

```diff
-   40216: (CC, zC, ZC) => {
+   40435: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L6-L298` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L6-L7) · [Before (L6-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L6-L298)

```diff
-       c: () => wC
-     });
-     var QC = ZC(39826);
- 
-     function wC(CC) {
-       return class extends CC {
-         constructor() {
-           super(...arguments);
-           const CC = new.target;
-           if (!CC[Symbol.metadata]) {
-             const zC = Object.getPrototypeOf(CC)?.[Symbol.metadata];
-             CC[Symbol.metadata] = zC ? Object.create(zC) : {}
-           }
-           const zC = (0, QC.e)(CC[Symbol.metadata]);
-           zC._imageProcessingConfiguration || (zC._imageProcessingConfiguration = {
-             type: 9,
- ... (277 more removed lines; see GitHub link above)
+       e: () => Sp,
+       f: () => xp
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L302-L325` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L15) · [Before (L302-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L302-L325)

```diff
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const zC in CC) Object.prototype.hasOwnProperty.call(CC, zC) && this._setDefaultValue(zC)
-       }
-       get isDirty() {
-         return this._isDirty
-       }
-       markAsProcessed() {
-         this._isDirty = !1, this._areAttributesDirty = !1, this._areTexturesDirty = !1, this._areFresnelDirty = !1, this._areLightsDirty = !1, this._areLightsDisposed = !1, this._areMiscDirty = !1, this._arePrePassDirty = !1, this._areImageProcessingDirty = !1
-       }
-       markAsUnprocessed() {
-         this._isDirty = !0
-       }
-       markAllAsDirty() {
-         this._areTexturesDirty = !0, this._areAttributesDirty = !0, this._areLightsDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._isDirty = !0
-       }
-       markAsImageProcessingDirty() {
- ... (8 more removed lines; see GitHub link above)
+         this.attachedToElement = !1, this.attached = {}, this.camera = pp, this.checkInputs = () => {}
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L327-L328` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L17-L19) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L327-L328)

```diff
-       markAsTexturesDirty() {
-         this._areTexturesDirty = !0, this._isDirty = !0
+       add(pp) {
+         const ip = pp.getSimpleName();
+         this.attached[ip] ? Op.e.Warn("camera input of type " + ip + " already exists on camera") : (this.attached[ip] = pp, pp.camera = this.camera, pp.checkInputs && (this.checkInputs = this._addCheckInputs(pp.checkInputs.bind(pp))), this.attachedToElement && pp.attachControl(t … [truncated]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L330-L349` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L21-L24) · [Before (L330-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L330-L349)

```diff
-       markAsFresnelDirty() {
-         this._areFresnelDirty = !0, this._isDirty = !0
-       }
-       markAsMiscDirty() {
-         this._areMiscDirty = !0, this._isDirty = !0
-       }
-       markAsPrePassDirty() {
-         this._arePrePassDirty = !0, this._isDirty = !0
-       }
-       rebuild() {
-         this._keys.length = 0;
-         for (const CC of Object.keys(this)) "_" !== CC[0] && this._keys.push(CC);
-         if (this._externalProperties)
-           for (const CC in this._externalProperties) - 1 === this._keys.indexOf(CC) && this._keys.push(CC)
-       }
-       isEqual(CC) {
- ... (4 more removed lines; see GitHub link above)
+       remove(pp) {
+         for (const ip in this.attached) {
+           const cp = this.attached[ip];
+           if (cp === pp) return cp.detachControl(), cp.camera = null, delete this.attached[ip], void this.rebuildInputCheck()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L363-L374` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L27-L30) · [Before (L363-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L363-L374)

```diff
-       _setDefaultValue(CC) {
-         const zC = this._externalProperties?.[CC]?.type ?? typeof this[CC],
-           ZC = this._externalProperties?.[CC]?.default;
-         switch (zC) {
-           case "number":
-             this[CC] = ZC ?? 0;
-             break;
-           case "string":
-             this[CC] = ZC ?? "";
-             break;
-           default:
-             this[CC] = ZC ?? !1
+       removeByType(pp) {
+         for (const ip in this.attached) {
+           const cp = this.attached[ip];
+           cp.getClassName() === pp && (cp.detachControl(), cp.camera = null, delete this.attached[ip], this.rebuildInputCheck())
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L377-L389` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L33-L36) · [Before (L377-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L377-L389)

```diff
-       toString() {
-         let CC = "";
-         for (let zC = 0; zC < this._keys.length; zC++) {
-           const ZC = this._keys[zC],
-             QC = this[ZC];
-           switch (typeof QC) {
-             case "number":
-             case "string":
-               CC += "#define " + ZC + " " + QC + "\n";
-               break;
-             default:
-               QC && (CC += "#define " + ZC + "\n")
-           }
+       _addCheckInputs(pp) {
+         const ip = this.checkInputs;
+         return () => {
+           ip(), pp()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L434-L435` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L39-L40) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L434-L435)

```diff
-       static GetConfiguration(CC) {
-         return fC._Configurations[CC]
+       attachInput(pp) {
+         this.attachedToElement && pp.attachControl(this.noPreventDefault)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L437-L443` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L42-L46) · [Before (L437-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L437-L443)

```diff
-       static _PrepareConfiguration(CC, zC, ZC) {
-         const QC = fC._Configurations[CC];
-         QC._attachments = zC, QC._colorAttachments = ZC, QC._mrtCount = zC.length;
-         let wC = "#define PREPASS\n";
-         for (const bC of fC.GeometryTextureDescriptions) {
-           const CC = QC.defines[bC.defineIndex];
-           void 0 !== CC && (wC += `#define ${bC.define}\n#define ${bC.defineIndex} ${CC}\n`)
+       attachElement() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           pp = !Ip.d.ForceAttachControlToAlwaysPreventDefault && pp, this.attachedToElement = !0, this.noPreventDefault = pp;
+           for (const ip in this.attached) this.attached[ip].attachControl(pp)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L474-L495` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L49-L52) · [Before (L474-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L474-L495)

```diff
-       static AddUniformsAndSamplers(CC, zC) {
-         CC.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
-       }
-       static MarkAsDirty(CC, zC) {
-         for (const ZC of zC)
-           if (ZC.Zx)
-             for (const zC of ZC.Zx) zC._removeDrawWrapper(CC)
-       }
-       static PrepareDefines(CC, zC, ZC) {
-         if (!ZC._arePrePassDirty) return;
-         const QC = fC._Configurations[CC];
-         if (!QC) return;
-         ZC.PREPASS = !0;
-         let wC = 0;
-         for (let bC = 0; bC < fC.GeometryTextureDescriptions.length; bC++) {
-           const CC = fC.GeometryTextureDescriptions[bC],
- ... (6 more removed lines; see GitHub link above)
+       detachElement() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const ip in this.attached) this.attached[ip].detachControl(), pp && (this.attached[ip].camera = null);
+         this.attachedToElement = !1
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L497-L522` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L54-L58) · [Before (L497-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L497-L522)

```diff
-       static Bind(CC, zC, ZC, QC, wC) {
-         const oC = fC._Configurations[CC];
-         if (!oC) return;
-         const qC = ZC.Km(),
-           FC = qC.mg();
-         if (oC.reverseCulling && FC.setStateCullFaceType(qC._mirroredCameraPosition ? wC.cullBackFaces : !wC.cullBackFaces), void 0 !== oC.defines.PREPASS_OBJECT_ID_INDEX) {
-           const CC = oC.objectIdIsRedFormat ? 255 : 16777215;
-           let QC = ZC.uniqueId;
-           if (oC.objectIdProvider) QC = bC(ZC, oC.objectIdProvider, CC);
-           else if (QC > CC) throw new Error(`Invalid geometry object ID ${QC} for mesh "${ZC.name}". Object IDs must be integers between 0 and 0x${CC.toString(16).toUpperCase()}.`);
-           zC.setFloat("objectId", QC)
-         }
-         if (void 0 !== oC.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
-           const CC = oC.meshBlendTagProvider ? nC(ZC, oC.meshBlendTagProvider) : ZC.meshBlendingTag;
-           zC.setInt("meshBlendTag", CC)
-         }
- ... (10 more removed lines; see GitHub link above)
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const pp in this.attached) {
+           const ip = this.attached[pp];
+           ip.checkInputs && (this.checkInputs = this._addCheckInputs(ip.checkInputs.bind(ip)))
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L525-L642` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L61-L62) · [Before (L525-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L525-L642)

```diff
-     }
-     fC.GeometryTextureDescriptions = [{
-       type: 0,
-       name: "IrradianceLegacy",
-       clearType: 0,
-       define: "PREPASS_IRRADIANCE_LEGACY",
-       defineIndex: "PREPASS_IRRADIANCE_LEGACY_INDEX"
-     }, {
-       type: 1,
-       name: "WorldPosition",
-       clearType: 0,
-       define: "PREPASS_POSITION",
-       defineIndex: "PREPASS_POSITION_INDEX"
-     }, {
-       type: 2,
-       name: "Velocity",
- ... (102 more removed lines; see GitHub link above)
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L644-L649` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L64) · [Before (L644-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L644-L649)

```diff
-       _addPlugin(CC) {
-         for (let QC = 0; QC < this._plugins.length; ++QC)
-           if (this._plugins[QC].name === CC.name) return !1;
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !CC.isCompatible(this._material.shaderLanguage)) throw `The plugin "${CC.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
-         const zC = CC.getClassName();
-         oC._MaterialPluginClassToMainDefine[zC] || (oC._MaterialPluginClassToMainDefine[zC] = "MATERIALPLUGIN_" + ++oC._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (CC, zC) => this._handlePluginEvent(CC, zC), this._plugins.push(CC), this._plugins.sort(((C … [truncated]
+       serialize(pp) {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L651-L756` → after: `L66-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L66-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L66-L82) · [Before (L651-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L651-L756)

```diff
-         ZC[oC._MaterialPluginClassToMainDefine[zC]] = {
-           type: "boolean",
-           default: !0
-         };
-         for (const QC of this._plugins) QC.collectDefines(ZC), this._collectPointNames("vertex", QC.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", QC.getCustomCode("fragment", this._material.shaderLanguage));
-         return this._defineNamesFromPlugins = ZC, !0
-       }
-       _activatePlugin(CC) {
-         -1 === this._activePlugins.indexOf(CC) && (this._activePlugins.push(CC), this._activePlugins.sort(((CC, zC) => CC.priority - zC.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callback … [truncated]
-       }
-       getPlugin(CC) {
-         for (let zC = 0; zC < this._plugins.length; ++zC)
-           if (this._plugins[zC].name === CC) return this._plugins[zC];
-         return null
-       }
-       _handlePluginEventIsReadyForSubMesh(CC) {
- ... (90 more removed lines; see GitHub link above)
+         for (const cp in this.attached) {
+           const pp = this.attached[cp],
+             Op = op.c.Serialize(pp);
+           ip[pp.getClassName()] = Op
+         }
+         pp.inputsmgr = ip
+       }
+       parse(pp) {
+         const ip = pp.inputsmgr;
+         if (ip) {
+           this.clear();
+           for (const pp in ip) {
+             const cp = Sp[pp];
+             if (cp) {
+               const Op = ip[pp],
+                 Ip = op.c.Parse((() => new cp), Op, null);
+ ... (1 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L760-L792` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L85-L90) · [Before (L760-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L760-L792)

```diff
-         }
-       }
-       _collectPointNames(CC, zC) {
-         if (zC)
-           for (const ZC in zC) this._codeInjectionPoints[CC] || (this._codeInjectionPoints[CC] = {}), this._codeInjectionPoints[CC][ZC] = !0
-       }
-       _injectCustomCode(CC, zC) {
-         return (ZC, QC) => {
-           zC && (QC = zC(ZC, QC)), this._uboDeclaration && (QC = QC.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (QC = QC.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const wC = this._codeInjectionPoints?.[ZC];
-           if (!wC) return QC;
-           let oC = null;
-           for (let zC in wC) {
-             let wC = "";
-             for (const QC of this._activePlugins) {
-               const fC = this._material.shaderLanguage;
- ... (17 more removed lines; see GitHub link above)
+         } else
+           for (const cp in this.attached) {
+             const ip = Sp[this.attached[cp].getClassName()];
+             if (ip) {
+               const Op = op.c.Parse((() => new ip), pp, null);
+               this.remove(this.attached[cp]), this.add(Op)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L821-L830` → after: `L95-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L95-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L95-L115) · [Before (L821-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L821-L830)

```diff
-     oC._MaterialPluginClassToMainDefine = {}, oC._MaterialPluginCounter = 0;
- 
-     function qC(CC, zC) {
-       return CC.replace(/\$(\d+)/g, ((CC, ZC) => {
-         const QC = Number(ZC);
-         return QC < zC.length ? zC[QC] : ""
-       }))
-     }
-     var FC = ZC(39842),
-       WC = ZC(37002);
+   },
+   41347: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => Hp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(40107),
+       Sp = cp(37320),
+       xp = cp(40195),
+       Lp = cp(40654),
+       Yp = cp(37368),
+       Dp = cp(37349),
+       Ap = cp(40233),
+       Pp = cp(40033),
+       Wp = cp(38905),
+ ... (5 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L833` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L118-L126) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L833)

```diff
-         let zC, ZC, bC, nC, fC = [],
+         let ip, cp, Yp, Hp, dp, ep, jp, kp, mp, Rp = xp.d,
+           qp = [],
+           Mp = [],
+           Cp = [],
+           Ep = [],
+           Xp = [],
+           lp = [],
+           Qp = [],
+           Jp = [],
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L841-L877` → after: `L134-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L134-L139) · [Before (L841-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L841-L877)

```diff
-         return CC = class {
-           isCompatible(CC) {
-             return 0 === CC
-           }
-           _enable(CC) {
-             CC && this._pluginManager._activatePlugin(this)
-           }
-           constructor(CC, zC, ZC, wC) {
-             let bC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-               nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-               FC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-             this.name = (0, QC.n)(this, fC, void 0), this.priority = ((0, QC.n)(this, qC), (0, QC.n)(this, WC, 500)), this.resolveIncludes = ((0, QC.n)(this, NC), (0, QC.n)(this, MC, !1)), this.registerForExtraEvents = ((0, QC.n)(this, gC), (0, QC.n)(this, SC, !1)), this.doNotSer … [truncated]
-               CC.pluginManager = void 0
-             }))), this._pluginDefineNames = wC, this._pluginManager = CC.pluginManager, bC && this._pluginManager._addPlugin(this), nC && this._enable(!0), this.markAllDefinesAsDirty = CC._dirtyCallbacks[127]
-           }
-           getClassName() {
- ... (21 more removed lines; see GitHub link above)
+         return pp = class extends Rp {
+           set boundingBoxSize(pp) {
+             if (this._boundingBoxSize && this._boundingBoxSize.equals(pp)) return;
+             this._boundingBoxSize = pp;
+             const ip = this.Gl();
+             ip && ip.markAllMaterialsAsDirty(1)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L879-L882` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L141-L142) · [Before (L879-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L879-L882)

```diff
-           prepareDefinesBeforeAttributes(CC, zC, ZC) {}
-           prepareDefines(CC, zC, ZC) {}
-           hasTexture(CC) {
-             return !1
+           get boundingBoxSize() {
+             return this._boundingBoxSize
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L884-L885` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L144-L145) · [Before (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L884-L885)

```diff
-           hasRenderTargetTextures() {
-             return !1
+           set rotationY(pp) {
+             this._rotationY = pp, this.setReflectionTextureMatrix(Sp.b.RotationY(this._rotationY))
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L887-L891` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L147-L148) · [Before (L887-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L887-L891)

```diff
-           fillRenderTargetTextures(CC) {}
-           getActiveTextures(CC) {}
-           getAnimatables(CC) {}
-           addFallbacks(CC, zC, ZC) {
-             return ZC
+           get rotationY() {
+             return this._rotationY
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L893-L897` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L150-L151) · [Before (L893-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L893-L897)

```diff
-           getSamplers(CC) {}
-           getAttributes(CC, zC, ZC) {}
-           getUniformBuffersNames(CC) {}
-           getUniforms() {
-             return {}
+           get noMipmap() {
+             return this._noMipmap
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L899-L900` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L153-L154) · [Before (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L899-L900)

```diff
-           copyTo(CC) {
-             FC.d.Clone((() => CC), this)
+           get forcedExtension() {
+             return this._forcedExtension
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L902-L903` → after: `L156-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L156-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L156-L243) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L902-L903)

```diff
-           serialize() {
-             return FC.d.Serialize(this)
+           constructor(pp, ip) {
+             let cp, op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               Ip = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               xp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               Yp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               Ap = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               Hp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
+               dp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               ep = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
+               jp = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+               kp = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
+               mp = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
+               Rp = arguments.length > 13 ? arguments[13] : void 0,
+               np = arguments.length > 14 ? arguments[14] : void 0;
+             super(ip), this._delayedOnLoad = (0, Op.l)(this, qp), this.onLoadObservable = new Dp.d, this.url = (0, Op.l)(this, Mp, void 0), this.boundingBoxPosition = ((0, Op.l)(this, Cp), (0, Op.l)(this, Ep, Sp.o.Zero())), this._boundingBoxSize = (0, Op.l)(this, Xp), this._rotat … [truncated]
+               let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+ ... (72 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L905-L906` → after: `L245-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L245-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L245-L311) · [Before (L905-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L905-L906)

```diff
-           parse(CC, zC, ZC) {
-             FC.d.Parse((() => this), CC, zC, ZC)
+           getClassName() {
+             return "CubeTexture"
+           }
+           updateURL(pp) {
+             let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+               xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               Lp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
+             this.name && !this.name.startsWith("data:") || (this.name = pp), this.url = pp, ip && (this._forcedExtension = ip);
+             const Yp = pp.lastIndexOf("."),
+               Dp = ip || (Yp > -1 ? pp.substring(Yp).toLowerCase() : ""),
+               Ap = 0 === Dp.indexOf(".dds"),
+ ... (51 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L909-L910` → after: `L314-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L314-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L314-L376) · [Before (L909-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L909-L910)

```diff
-           const oC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], nC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
+           const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rp[Symbol.metadata] ?? null) : void 0;
+           ip = [(0, op.K)()], cp = [(0, op.H)()], Yp = [(0, op.H)()], Hp = [(0, op.K)("rotationY")], dp = [(0, op.K)("files")], ep = [(0, op.K)("forcedExtension")], jp = [(0, op.K)("extensions")], kp = [(0, op.s)("textureMatrix")], mp = [(0, op.s)("textureMatrixRefraction")], (0, … [truncated]
+             kind: "getter",
+             name: "boundingBoxSize",
+             static: !1,
+             private: !1,
+             access: {
+               has: pp => "boundingBoxSize" in pp,
+               get: pp => pp.boundingBoxSize
+             },
+             metadata: Ip
+           }, null, qp), (0, Op.j)(pp, null, Hp, {
+             kind: "setter",
+             name: "rotationY",
+             static: !1,
+             private: !1,
+ ... (47 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L912` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L378) · [Before (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L912)

```diff
-             name: "name",
+             name: "_forcedExtension",
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L916-L917` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L382-L383) · [Before (L916-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L916-L917)

```diff
-               has: CC => "name" in CC,
-               get: CC => CC.name,
+               has: pp => "_forcedExtension" in pp,
+               get: pp => pp._forcedExtension,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L919` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L385) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L919)

```diff
-                 CC.name = zC
+                 pp._forcedExtension = ip
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L925` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L391) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L925)

```diff
-             name: "priority",
+             name: "_extensions",
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L929-L930` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L395-L396) · [Before (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L929-L930)

```diff
-               has: CC => "priority" in CC,
-               get: CC => CC.priority,
+               has: pp => "_extensions" in pp,
+               get: pp => pp._extensions,
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L932` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L398) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L932)

```diff
-                 CC.priority = zC
+                 pp._extensions = ip
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L938` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L404) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L938)

```diff
-             name: "resolveIncludes",
+             name: "_textureMatrix",
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L942-L943` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L408-L409) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L942-L943)

```diff
-               has: CC => "resolveIncludes" in CC,
-               get: CC => CC.resolveIncludes,
+               has: pp => "_textureMatrix" in pp,
+               get: pp => pp._textureMatrix,
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L945` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L411) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L945)

```diff
-                 CC.resolveIncludes = zC
+                 pp._textureMatrix = ip
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L951` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L417) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L951)

```diff
-             name: "registerForExtraEvents",
+             name: "_textureMatrixRefraction",
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L955-L956` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L421-L422) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L955-L956)

```diff
-               has: CC => "registerForExtraEvents" in CC,
-               get: CC => CC.registerForExtraEvents,
+               has: pp => "_textureMatrixRefraction" in pp,
+               get: pp => pp._textureMatrixRefraction,
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L958` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L424) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L958)

```diff
-                 CC.registerForExtraEvents = zC
+                 pp._textureMatrixRefraction = ip
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L972-L973` → after: `L438-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L438-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L438-L464) · [Before (L972-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L972-L973)

```diff
-     function gC() {
-       MC || (MC = !0, (0, WC.d)("BABYLON.MaterialPluginBase", NC))
+     function ep(pp, ip, cp) {
+       let Op = "";
+       for (const op of pp) Op += op;
+       return new Hp(Op, ip, null, cp, pp)
+     }
+ 
+     function jp(pp, ip) {
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+         Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const op = ip.useDelayedTextureLoading;
+       ip.useDelayedTextureLoading = !1;
+       const Ip = new Hp(pp, ip, null, !1, null, null, null, void 0, !0, cp, Op);
+       return ip.useDelayedTextureLoading = op, Ip
+     }
+ 
+     function kp(pp, ip, cp) {
+ ... (11 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L976` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L468) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L976)

```diff
-   40097: (CC, zC, ZC) => {
+   41393: (pp, ip, cp) => {
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L978` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L470) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L978)

```diff
-       c: () => QC
+       e: () => Yp
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L980-L982` → after: `L472-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L472-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L472-L511) · [Before (L980-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L980-L982)

```diff
-     class QC {
-       constructor() {
-         this.previousWorldMatrices = {}, this.previousBones = {}
+     var Op = cp(38905),
+       op = cp(40654),
+       Ip = cp(40143),
+       Sp = cp(40050),
+       xp = cp(40033);
+     let Lp = !1;
+     class Yp extends op.d {
+       constructor(pp, ip, cp) {
+         let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           Yp = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
+           Dp = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
+           Ap = arguments.length > 6 ? arguments[6] : void 0;
+         const Pp = !cp || cp._isScene;
+         super(null, Pp ? cp : cp?.pw, Pp ? !Op : cp, Ap, Yp, void 0, void 0, void 0, void 0, Dp), Lp || (Lp = !0, Sp.ThinEngine.prototype.createDynamicTexture = function(pp, ip, cp, Op) {
+           const op = new xp.b(this, 4);
+           return op.baseWidth = pp, op.baseHeight = ip, cp && (pp = this.needPOTTextures ? (0, Ip.e)(pp, this._caps.maxTextureSize) : pp, ip = this.needPOTTextures ? (0, Ip.e)(ip, this._caps.maxTextureSize) : ip), op.width = pp, op.height = ip, op.isReady = !1, op.generateMipMaps … [truncated]
+ ... (24 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L984-L985` → after: `L513-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L513-L514) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L984-L985)

```diff
-       static AddUniforms(CC) {
-         CC.push("previousWorld", "previousViewProjection", "mPreviousBones")
+       getClassName() {
+         return "DynamicTexture"
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L987-L993` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L516-L517) · [Before (L987-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L987-L993)

```diff
-       static AddSamplers(CC) {}
-       bindForSubMesh(CC, zC, ZC, QC, wC) {
-         if (zC.prePassRenderer && zC.prePassRenderer.enabled && zC.prePassRenderer.currentRTisSceneRT && (-1 !== zC.prePassRenderer.getIndex(2) || -1 !== zC.prePassRenderer.getIndex(11))) {
-           this.previousWorldMatrices[ZC.uniqueId] || (this.previousWorldMatrices[ZC.uniqueId] = QC.clone()), this.previousViewProjection || (this.previousViewProjection = zC.getTransformMatrix().clone(), this.currentViewProjection = zC.getTransformMatrix().clone());
-           const wC = zC.mg();
-           this.currentViewProjection.updateFlag !== zC.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = wC.frameId, this.previousViewProjection.Av(this.currentViewProjection), this.currentViewProjection.Av(zC.getTransformMatrix())) : this._lastUpdateFrameId !== wC.fra … [truncated]
-         }
+       get canRescale() {
+         return !0
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L995-L1001` → after: `L519-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L519-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L519-L547) · [Before (L995-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L995-L1001)

```diff
-     }
-   },
-   40211: (CC, zC, ZC) => {
-     function QC(CC) {
-       return class extends CC {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
+       _recreate(pp) {
+         this._canvas.width = pp.width, this._canvas.height = pp.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(pp.width, pp.height, this._generateMipMaps, this.samplingMode)
+       }
+       scale(pp) {
+         const ip = this.getSize();
+         ip.width *= pp, ip.height *= pp, this._recreate(ip)
+       }
+       scaleTo(pp, ip) {
+         const cp = this.getSize();
+         cp.width = pp, cp.height = ip, this._recreate(cp)
+       }
+       getContext() {
+         return this._context
+       }
+       clear(pp) {
+         const ip = this.getSize();
+ ... (13 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1016` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L579) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L1016)

```diff
-   40095: (CC, zC, ZC) => {
+   41367: (pp, ip, cp) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1018-L1019` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L581) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L1018-L1019)

```diff
-       b: () => XC,
-       d: () => EC
+       c: () => op
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1021-L1054` → after: `L583-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L583-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L583-L586) · [Before (L1021-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L1021-L1054)

```diff
-     var QC = ZC(39811),
-       wC = ZC(39818),
-       bC = ZC(39925),
-       nC = ZC(39910),
-       fC = ZC(37142),
-       oC = ZC(39959),
-       qC = ZC(40097),
-       FC = ZC(40100),
-       WC = ZC(39932),
-       NC = ZC(40110),
-       MC = ZC(40102),
-       gC = ZC(40167),
-       SC = ZC(40162),
-       pC = ZC(40175),
-       PC = ZC(40180),
-       GC = ZC(40157),
- ... (18 more removed lines; see GitHub link above)
+     var Op = cp(40654);
+     class op extends Op.d {
+       get depth() {
+         return this._depth
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L1056-L2686` → after: `L588-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L588-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L588-L604) · [Before (L1056-L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L1056-L2686)

```diff
-     }
-     class HC extends((0, eC.c)(gC.e)) {}
-     let EC = (() => {
-         var CC, zC, FC, MC, iC, vC, eC, hC, KC, dC, EC, lC, XC, cC, uC, rC, sC, TC, aC, tC, DC, jC, yC, LC, UC, BC, OC, kC, VC, Cz, zz, Zz, Qz;
-         let wz, bz, nz, fz, oz, qz, Fz, Wz, Nz, Mz, gz, Sz, pz, Pz, Gz, Rz, Az, xz, Jz, Iz, iz, vz, ez, hz, Kz, Yz, dz, mz, Hz, Ez, lz, Xz, cz, uz, rz, sz, Tz, az, tz, Dz, jz, yz, Lz, Uz, Bz, Oz, kz, Vz, CZ, zZ, ZZ, QZ, wZ, bZ, nZ, fZ, oZ, qZ, FZ, WZ, NZ, MZ, gZ, SZ, pZ, PZ, GZ,  … [truncated]
-           eZ = [],
-           hZ = [],
-           KZ = [],
-           YZ = [],
-           dZ = [],
-           mZ = [],
-           HZ = [],
-           EZ = [],
-           lZ = [],
-           XZ = [],
-           cZ = [],
- ... (1615 more removed lines; see GitHub link above)
+       constructor(pp, ip, cp, op, Ip, Sp) {
+         let xp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
+           Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+           Yp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Op.d.TRILINEAR_SAMPLINGMODE,
+           Dp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
+           Ap = arguments.length > 10 ? arguments[10] : void 0,
+           Pp = arguments.length > 11 ? arguments[11] : void 0;
+         super(null, Sp, !xp, Lp), this.format = Ip, this._texture = Sp.gy().createRawTexture2DArray(pp, ip, cp, op, Ip, xp, Lp, Yp, null, Dp, Ap ?? 0, Pp), this._depth = op, this.is2DArray = !0
+       }
+       update(pp) {
+         this.updateMipLevel(pp, 0)
+       }
+       updateMipLevel(pp, ip) {
+         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, pp, this._texture.format, this._texture.invertY, null, this._texture.type, ip)
+       }
+       static CreateRGBATexture(pp, ip, cp, Op, Ip) {
+ ... (1 more added lines; see GitHub link above)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L2690-L2691` → after: `L610-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L610-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L610-L613) · [Before (L2690-L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L2690-L2691)

```diff
-       e: () => QC
-     })
+       c: () => Op.b
+     });
+     var Op = cp(40538);
+     (0, Op.e)()
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L2693` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L615) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L2693)

```diff
-   40198: (CC, zC, ZC) => {
+   40289: (pp, ip, cp) => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L2695` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L617) · [Before (L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L2695)

```diff
-       c: () => QC
+       c: () => Op.f
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/261.js` (Changed code · before: `L2697-L2730` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02faR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-07e61f4f83880e1a6383d59689113037d7747d681a402966a9dd763c00ee02fa) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/261.js#L619-L620) · [Before (L2697-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/261.js#L2697-L2730)

```diff
-     class QC {
-       constructor(CC, zC) {
-         this._webGL = {
-           load: CC,
-           loaded: !1,
-           loadPromise: null
-         }, this._webGPU = {
-           load: zC,
-           loaded: !1,
-           loadPromise: null
-         }
-       }
-       getLoadCallback(CC) {
-         const zC = 1 === CC ? this._webGPU : this._webGL;
-         return zC.loaded ? void 0 : async () => {
-           await this._loadAsync(zC)
- ... (18 more removed lines; see GitHub link above)
+     var Op = cp(40296);
+     (0, Op.c)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/262.js` (w4ddu.56408518 → sn3sfj.2522680a)

- **File**: `bundles/preprod.bloxd.io/chunks/js/262.js` (113 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L4-L14` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L4) · [Before (L4-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L4-L14)

```diff
-   40123: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       d: () => QC
-     });
-     class QC {
-       constructor(CC, zC, ZC) {
-         this.bu = CC, this.bv = zC, this.distance = ZC, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
-   },
-   40136: (CC, zC, ZC) => {
+   40405: (pp, ip, cp) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L18-L405` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L8-L14) · [Before (L18-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L18-L405)

```diff
-     var QC = ZC(36971),
-       wC = ZC(36963),
-       bC = ZC(36968);
-     class nC {
-       constructor(CC, zC, ZC) {
-         this.vectors = (0, QC.d)(8, wC.r.Zero), this.center = wC.r.Zero(), this.centerWorld = wC.r.Zero(), this.extendSize = wC.r.Zero(), this.extendSizeWorld = wC.r.Zero(), this.directions = (0, QC.d)(3, wC.r.Zero), this.vectorsWorld = (0, QC.d)(8, wC.r.Zero), this.minimumWorld  … [truncated]
-       }
-       reConstruct(CC, zC, ZC) {
-         const QC = CC.x,
-           bC = CC.y,
-           nC = CC.z,
-           fC = zC.x,
-           oC = zC.y,
-           qC = zC.z,
-           FC = this.vectors;
-         this.minimum.L_(QC, bC, nC), this.maximum.L_(fC, oC, qC), FC[0].L_(QC, bC, nC), FC[1].L_(fC, oC, qC), FC[2].L_(fC, bC, nC), FC[3].L_(QC, oC, nC), FC[4].L_(QC, bC, qC), FC[5].L_(fC, oC, nC), FC[6].L_(QC, oC, qC), FC[7].L_(fC, bC, qC), zC.addToRef(CC, this.center).scaleInPl … [truncated]
- ... (372 more removed lines; see GitHub link above)
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(40409),
+       xp = cp(40435),
+       Lp = cp(40380),
+       Yp = cp(40304);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L408-L664` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L17) · [Before (L408-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L408-L664)

```diff
-       let zC, ZC, bC, nC, fC, oC, qC, FC, WC, NC, gC, SC, pC = [];
-       return CC = class {
-         constructor() {
-           this._func = (0, QC.n)(this, pC), this.reset()
-         }
-         reset() {
-           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
-         }
-         get func() {
-           return this._func
-         }
-         set func(CC) {
-           this._func = CC
-         }
-         get backFunc() {
-           return this._backFunc
- ... (241 more removed lines; see GitHub link above)
+       let ip, cp, Sp, xp, Dp, Ap, Pp, Wp, yp, Up, wp, vp = [],
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L687-L995` → after: `L40-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L40-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L40-L55) · [Before (L687-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L687-L995)

```diff
-         get useVertexPulling() {
-           return this._useVertexPulling
-         }
-         set useVertexPulling(zC) {
-           this._useVertexPulling !== zC && (this._useVertexPulling = zC, this.YzC(CC.MiscDirtyFlag))
-         }
-         get _supportGlowLayer() {
-           return !1
-         }
-         set _glowModeEnabled(CC) {}
-         get shaderLanguage() {
-           return this._shaderLanguage
-         }
-         get canRenderToMRT() {
-           return !1
-         }
- ... (293 more removed lines; see GitHub link above)
+         constructor() {
+           this.keysUp = (0, Op.l)(this, vp, [38]), this.keysUpward = ((0, Op.l)(this, tp), (0, Op.l)(this, Hp, [33])), this.keysDown = ((0, Op.l)(this, dp), (0, Op.l)(this, ep, [40])), this.keysDownward = ((0, Op.l)(this, jp), (0, Op.l)(this, kp, [34])), this.keysLeft = ((0, Op.l … [truncated]
+         }
+         attachControl(pp) {
+           pp = Yp.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Gl(), this._engine = this._scene.gy(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+             this._keys.length = 0
+           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ip => {
+             const cp = ip.event;
+             if (!cp.metaKey)
+               if (ip.type === Lp.d.KEYDOWN) {
+                 if (-1 !== this.keysUp.indexOf(cp.keyCode) || -1 !== this.keysDown.indexOf(cp.keyCode) || -1 !== this.keysLeft.indexOf(cp.keyCode) || -1 !== this.keysRight.indexOf(cp.keyCode) || -1 !== this.keysUpward.indexOf(cp.keyCode) || -1 !== this.keysDownward.indexOf(cp.key … [truncated]
+                   -1 === this._keys.indexOf(cp.keyCode) && this._keys.push(cp.keyCode), pp || cp.preventDefault()
+                 }
+               } else if (-1 !== this.keysUp.indexOf(cp.keyCode) || -1 !== this.keysDown.indexOf(cp.keyCode) || -1 !== this.keysLeft.indexOf(cp.keyCode) || -1 !== this.keysRight.indexOf(cp.keyCode) || -1 !== this.keysUpward.indexOf(cp.keyCode) || -1 !== this.keysDownward.indexOf(c … [truncated]
+               const ip = this._keys.indexOf(cp.keyCode);
+               ip >= 0 && this._keys.splice(ip, 1), pp || cp.preventDefault()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L997-L1003` → after: `L57-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L57-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L57-L75) · [Before (L997-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L997-L1003)

```diff
-         }
-         getBindedMeshes() {
-           if (this.meshMap) {
-             const CC = [];
-             for (const zC in this.meshMap) {
-               const ZC = this.meshMap[zC];
-               ZC && CC.push(ZC)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         }
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const pp = this.camera,
+               ip = pp.movement.input,
+               cp = ip.getEntry("keyboard", "translate"),
+               Op = ip.getEntry("keyboard", "rotate"),
+               op = Op?.sensitivity ?? 1,
+               Sp = pp._localDirection.i5(0, 0, 0);
+             for (let Ip = 0; Ip < this._keys.length; Ip++) {
+               const ip = this._keys[Ip]; - 1 !== this.keysLeft.indexOf(ip) ? Sp.x -= 1 : -1 !== this.keysUp.indexOf(ip) ? Sp.z += 1 : -1 !== this.keysRight.indexOf(ip) ? Sp.x += 1 : -1 !== this.keysDown.indexOf(ip) ? Sp.z -= 1 : -1 !== this.keysUpward.indexOf(ip) ? Sp.y += 1 : -1 … [truncated]
+             }
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1150-L1152` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L79-L80) · [Before (L1150-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1150-L1152)

```diff
-         _serializePlugins(CC) {
-           if (CC.plugins = {}, this.pluginManager)
-             for (const zC of this.pluginManager._plugins) zC.doNotSerialize || (CC.plugins[zC.getClassName()] = zC.serialize())
+         getClassName() {
+           return "FreeCameraKeyboardMoveInput"
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1154-L1155` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L82-L83) · [Before (L1154-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1154-L1155)

```diff
-         static ParseAlphaMode(CC, zC) {
-           void 0 !== CC._alphaMode ? zC._alphaMode = Array.isArray(CC._alphaMode) ? [...CC._alphaMode] : [CC._alphaMode] : void 0 !== CC.alphaMode ? zC._alphaMode = Array.isArray(CC.alphaMode) ? [...CC.alphaMode] : [CC.alphaMode] : zC._alphaMode = [2]
+         _onLostFocus() {
+           this._keys.length = 0
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1157-L1162` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L85-L86) · [Before (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1157-L1162)

```diff
-         static Parse(zC, ZC, QC) {
-           if (zC.customType) {
-             if ("BABYLON.PBRMaterial" === zC.customType && zC.overloadedAlbedo && (zC.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return FC.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
-           } else zC.customType = "BABYLON.StandardMaterial";
-           const wC = bC.g.Instantiate(zC.customType).Parse(zC, ZC, QC);
-           return wC._loadedUniqueId = zC.uniqueId, CC.ParseAlphaMode(zC, wC), wC
+         getSimpleName() {
+           return "keyboard"
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1164-L1174` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L88-L90) · [Before (L1164-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1164-L1174)

```diff
-         static _ParsePlugins(CC, zC, ZC, QC) {
-           if (CC.plugins)
-             for (const wC in CC.plugins) {
-               const nC = CC.plugins[wC];
-               let fC = zC.pluginManager?.getPlugin(nC.name);
-               if (!fC) {
-                 const CC = bC.g.Instantiate("BABYLON." + wC);
-                 CC && (fC = new CC(zC))
-               }
-               fC?.parse(nC, ZC, QC)
-             }
+         _getLocalRotation() {
+           const pp = this.camera._calculateHandednessMultiplier();
+           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * pp
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1178-L1218` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L94) · [Before (L1178-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1178-L1218)

```diff
-         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], PC = [(0, wC.M)()], GC = [(0, wC.M)()], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)("alpha")], IC = [(0, wC.M)("backFaceCulling")], iC = [(0, wC.M)("textureRepetitionMode")], vC = [(0, wC.M)("textureR … [truncated]
-           kind: "getter",
-           name: "pointsCloud",
-           static: !1,
-           private: !1,
-           access: {
-             has: CC => "pointsCloud" in CC,
-             get: CC => CC.pointsCloud
-           },
-           metadata: bC
-         }, null, jC), (0, QC.j)(CC, null, TC, {
-           kind: "getter",
-           name: "fillMode",
-           static: !1,
-           private: !1,
-           access: {
- ... (25 more removed lines; see GitHub link above)
+         ip = [(0, op.K)()], cp = [(0, op.K)()], Sp = [(0, op.K)()], xp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], wp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1220` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L96) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1220)

```diff
-           name: "id",
+           name: "keysUp",
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1224-L1225` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L100-L101) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1224-L1225)

```diff
-             has: CC => "id" in CC,
-             get: CC => CC.id,
+             has: pp => "keysUp" in pp,
+             get: pp => pp.keysUp,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1227` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L103) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1227)

```diff
-               CC.id = zC
+               pp.keysUp = ip
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1233` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L109) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1233)

```diff
-           name: "uniqueId",
+           name: "keysUpward",
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1237-L1238` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L113-L114) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1237-L1238)

```diff
-             has: CC => "uniqueId" in CC,
-             get: CC => CC.uniqueId,
+             has: pp => "keysUpward" in pp,
+             get: pp => pp.keysUpward,
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1240` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L116) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1240)

```diff
-               CC.uniqueId = zC
+               pp.keysUpward = ip
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1246` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L122) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1246)

```diff
-           name: "name",
+           name: "keysDown",
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1250-L1251` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L126-L127) · [Before (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1250-L1251)

```diff
-             has: CC => "name" in CC,
-             get: CC => CC.name,
+             has: pp => "keysDown" in pp,
+             get: pp => pp.keysDown,
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1253` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L129) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1253)

```diff
-               CC.name = zC
+               pp.keysDown = ip
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1259` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L135) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1259)

```diff
-           name: "metadata",
+           name: "keysDownward",
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1263-L1264` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L139-L140) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1263-L1264)

```diff
-             has: CC => "metadata" in CC,
-             get: CC => CC.metadata,
+             has: pp => "keysDownward" in pp,
+             get: pp => pp.keysDownward,
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1266` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L142) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1266)

```diff
-               CC.metadata = zC
+               pp.keysDownward = ip
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1272` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L148) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1272)

```diff
-           name: "checkReadyOnEveryCall",
+           name: "keysLeft",
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1276-L1277` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L152-L153) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1276-L1277)

```diff
-             has: CC => "checkReadyOnEveryCall" in CC,
-             get: CC => CC.checkReadyOnEveryCall,
+             has: pp => "keysLeft" in pp,
+             get: pp => pp.keysLeft,
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1279` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L155) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1279)

```diff
-               CC.checkReadyOnEveryCall = zC
+               pp.keysLeft = ip
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1285` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L161) · [Before (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1285)

```diff
-           name: "checkReadyOnlyOnce",
+           name: "keysRight",
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1289-L1290` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L165-L166) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1289-L1290)

```diff
-             has: CC => "checkReadyOnlyOnce" in CC,
-             get: CC => CC.checkReadyOnlyOnce,
+             has: pp => "keysRight" in pp,
+             get: pp => pp.keysRight,
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1292` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L168) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1292)

```diff
-               CC.checkReadyOnlyOnce = zC
+               pp.keysRight = ip
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1298` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L174) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1298)

```diff
-           name: "state",
+           name: "rotationSpeed",
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1302-L1303` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L178-L179) · [Before (L1302-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1302-L1303)

```diff
-             has: CC => "state" in CC,
-             get: CC => CC.state,
+             has: pp => "rotationSpeed" in pp,
+             get: pp => pp.rotationSpeed,
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1305` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L181) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1305)

```diff
-               CC.state = zC
+               pp.rotationSpeed = ip
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1311` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L187) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1311)

```diff
-           name: "_alpha",
+           name: "keysRotateLeft",
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1315-L1316` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L191-L192) · [Before (L1315-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1315-L1316)

```diff
-             has: CC => "_alpha" in CC,
-             get: CC => CC._alpha,
+             has: pp => "keysRotateLeft" in pp,
+             get: pp => pp.keysRotateLeft,
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1318` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L194) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1318)

```diff
-               CC._alpha = zC
+               pp.keysRotateLeft = ip
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1324` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L200) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1324)

```diff
-           name: "_backFaceCulling",
+           name: "keysRotateRight",
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1328-L1329` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L204-L205) · [Before (L1328-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1328-L1329)

```diff
-             has: CC => "_backFaceCulling" in CC,
-             get: CC => CC._backFaceCulling,
+             has: pp => "keysRotateRight" in pp,
+             get: pp => pp.keysRotateRight,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1331` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L207) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1331)

```diff
-               CC._backFaceCulling = zC
+               pp.keysRotateRight = ip
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1337` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L213) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1337)

```diff
-           name: "_textureRepetitionMode",
+           name: "keysRotateUp",
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1341-L1342` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L217-L218) · [Before (L1341-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1341-L1342)

```diff
-             has: CC => "_textureRepetitionMode" in CC,
-             get: CC => CC._textureRepetitionMode,
+             has: pp => "keysRotateUp" in pp,
+             get: pp => pp.keysRotateUp,
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1344` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L220) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1344)

```diff
-               CC._textureRepetitionMode = zC
+               pp.keysRotateUp = ip
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1350` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L226) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1350)

```diff
-           name: "textureRepetitionHexTilingParams",
+           name: "keysRotateDown",
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1354-L1355` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L230-L231) · [Before (L1354-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1354-L1355)

```diff
-             has: CC => "textureRepetitionHexTilingParams" in CC,
-             get: CC => CC.textureRepetitionHexTilingParams,
+             has: pp => "keysRotateDown" in pp,
+             get: pp => pp.keysRotateDown,
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1357` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L233) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1357)

```diff
-               CC.textureRepetitionHexTilingParams = zC
+               pp.keysRotateDown = ip
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1361` → after: `L237-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L237-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L237-L333) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1361)

```diff
-         }, Mz, gz), (0, QC.j)(null, null, eC, {
+         }, fp, bp), Ip && Object.defineProperty(pp, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: Ip
+         })
+       })(), pp
+     })();
+     xp.e.FreeCameraKeyboardMoveInput = Dp;
+     var Ap = cp(37349),
+       Pp = cp(40372);
+     let Wp = (() => {
+       var pp;
+       let ip, cp, Ip = [],
+         Sp = [],
+         xp = [],
+ ... (81 more added lines; see GitHub link above)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1363` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L335) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1363)

```diff
-           name: "_cullBackFaces",
+           name: "buttons",
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1367-L1368` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L339-L340) · [Before (L1367-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1367-L1368)

```diff
-             has: CC => "_cullBackFaces" in CC,
-             get: CC => CC._cullBackFaces,
+             has: pp => "buttons" in pp,
+             get: pp => pp.buttons,
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1370` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L342) · [Before (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1370)

```diff
-               CC._cullBackFaces = zC
+               pp.buttons = ip
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1376` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L348) · [Before (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1376)

```diff
-           name: "sideOrientation",
+           name: "angularSensibility",
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1380-L1381` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L352-L353) · [Before (L1380-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1380-L1381)

```diff
-             has: CC => "sideOrientation" in CC,
-             get: CC => CC.sideOrientation,
+             has: pp => "angularSensibility" in pp,
+             get: pp => pp.angularSensibility,
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1383` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L355) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1383)

```diff
-               CC.sideOrientation = zC
+               pp.angularSensibility = ip
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1387` → after: `L359-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L359-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L359-L407) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1387)

```diff
-         }, Pz, Gz), (0, QC.j)(null, null, KC, {
+         }, xp, Lp), Yp && Object.defineProperty(pp, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: Yp
+         })
+       })(), pp
+     })();
+     xp.e.FreeCameraMouseInput = Wp;
+     var yp = cp(40388);
+     let Up = (() => {
+       var pp;
+       let ip, cp, Ip, Sp = [],
+         xp = [],
+         Lp = [],
+         Dp = [],
+ ... (33 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1389` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L409) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1389)

```diff
-           name: "_alphaMode",
+           name: "wheelPrecisionX",
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1393-L1394` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L413-L414) · [Before (L1393-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1393-L1394)

```diff
-             has: CC => "_alphaMode" in CC,
-             get: CC => CC._alphaMode,
+             has: pp => "wheelPrecisionX" in pp,
+             get: pp => pp.wheelPrecisionX,
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1396` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L416) · [Before (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1396)

```diff
-               CC._alphaMode = zC
+               pp.wheelPrecisionX = ip
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1402` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L422) · [Before (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1402)

```diff
-           name: "_needDepthPrePass",
+           name: "wheelPrecisionY",
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1406-L1407` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L426-L427) · [Before (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1406-L1407)

```diff
-             has: CC => "_needDepthPrePass" in CC,
-             get: CC => CC._needDepthPrePass,
+             has: pp => "wheelPrecisionY" in pp,
+             get: pp => pp.wheelPrecisionY,
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1409` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L429) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1409)

```diff
-               CC._needDepthPrePass = zC
+               pp.wheelPrecisionY = ip
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1415` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L435) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1415)

```diff
-           name: "disableDepthWrite",
+           name: "wheelPrecisionZ",
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1419-L1420` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L439-L440) · [Before (L1419-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1419-L1420)

```diff
-             has: CC => "disableDepthWrite" in CC,
-             get: CC => CC.disableDepthWrite,
+             has: pp => "wheelPrecisionZ" in pp,
+             get: pp => pp.wheelPrecisionZ,
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1422` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L442) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1422)

```diff
-               CC.disableDepthWrite = zC
+               pp.wheelPrecisionZ = ip
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1426-L1428` → after: `L446-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L446-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L446-L563) · [Before (L1426-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1426-L1428)

```diff
-         }, Iz, iz), (0, QC.j)(null, null, mC, {
-           kind: "field",
-           name: "disableColorWrite",
+         }, Wp, Up), Yp && Object.defineProperty(pp, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: Yp
+         })
+       })(), pp
+     })();
+     var wp;
+     ! function(pp) {
+       pp[pp.MoveRelative = 0] = "MoveRelative", pp[pp.RotateRelative = 1] = "RotateRelative", pp[pp.MoveScene = 2] = "MoveScene"
+     }(wp || (wp = {}));
+     let vp = (() => {
+       var pp;
+       let ip, cp, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp = Up,
+         yp = [];
+ ... (102 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1432-L1433` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L567) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1432-L1433)

```diff
-             has: CC => "disableColorWrite" in CC,
-             get: CC => CC.disableColorWrite,
+             has: pp => "wheelXMoveRelative" in pp,
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1435` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L569) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1435)

```diff
-               CC.disableColorWrite = zC
+               pp.wheelXMoveRelative = ip
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1439-L1441` → after: `L573-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L573-L575) · [Before (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1439-L1441)

```diff
-         }, vz, ez), (0, QC.j)(null, null, HC, {
-           kind: "field",
-           name: "forceDepthWrite",
+         }, null, yp), (0, Op.j)(pp, null, cp, {
+           kind: "setter",
+           name: "wheelYMoveRelative",
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1445-L1446` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L579) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1445-L1446)

```diff
-             has: CC => "forceDepthWrite" in CC,
-             get: CC => CC.forceDepthWrite,
+             has: pp => "wheelYMoveRelative" in pp,
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1448` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L581) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1448)

```diff
-               CC.forceDepthWrite = zC
+               pp.wheelYMoveRelative = ip
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1452-L1454` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L585-L587) · [Before (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1452-L1454)

```diff
-         }, hz, Kz), (0, QC.j)(null, null, EC, {
-           kind: "field",
-           name: "depthFunction",
+         }, null, yp), (0, Op.j)(pp, null, Sp, {
+           kind: "setter",
+           name: "wheelZMoveRelative",
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1458-L1459` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L591) · [Before (L1458-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1458-L1459)

```diff
-             has: CC => "depthFunction" in CC,
-             get: CC => CC.depthFunction,
+             has: pp => "wheelZMoveRelative" in pp,
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1461` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L593) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1461)

```diff
-               CC.depthFunction = zC
+               pp.wheelZMoveRelative = ip
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1465-L1467` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L597-L599) · [Before (L1465-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1465-L1467)

```diff
-         }, Yz, dz), (0, QC.j)(null, null, lC, {
-           kind: "field",
-           name: "separateCullingPass",
+         }, null, yp), (0, Op.j)(pp, null, xp, {
+           kind: "setter",
+           name: "wheelXRotateRelative",
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1471-L1472` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L603) · [Before (L1471-L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1471-L1472)

```diff
-             has: CC => "separateCullingPass" in CC,
-             get: CC => CC.separateCullingPass,
+             has: pp => "wheelXRotateRelative" in pp,
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1474` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L605) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1474)

```diff
-               CC.separateCullingPass = zC
+               pp.wheelXRotateRelative = ip
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1478-L1480` → after: `L609-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L609-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L609-L611) · [Before (L1478-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1478-L1480)

```diff
-         }, mz, Hz), (0, QC.j)(null, null, XC, {
-           kind: "field",
-           name: "_fogEnabled",
+         }, null, yp), (0, Op.j)(pp, null, Lp, {
+           kind: "setter",
+           name: "wheelYRotateRelative",
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1484-L1485` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L615) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1484-L1485)

```diff
-             has: CC => "_fogEnabled" in CC,
-             get: CC => CC._fogEnabled,
+             has: pp => "wheelYRotateRelative" in pp,
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1487` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L617) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1487)

```diff
-               CC._fogEnabled = zC
+               pp.wheelYRotateRelative = ip
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1491-L1493` → after: `L621-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L621-L623) · [Before (L1491-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1491-L1493)

```diff
-         }, Ez, lz), (0, QC.j)(null, null, cC, {
-           kind: "field",
-           name: "pointSize",
+         }, null, yp), (0, Op.j)(pp, null, Yp, {
+           kind: "setter",
+           name: "wheelZRotateRelative",
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1497-L1498` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L627) · [Before (L1497-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1497-L1498)

```diff
-             has: CC => "pointSize" in CC,
-             get: CC => CC.pointSize,
+             has: pp => "wheelZRotateRelative" in pp,
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1500` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L629) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1500)

```diff
-               CC.pointSize = zC
+               pp.wheelZRotateRelative = ip
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1504-L1506` → after: `L633-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L633-L635) · [Before (L1504-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1504-L1506)

```diff
-         }, Xz, cz), (0, QC.j)(null, null, uC, {
-           kind: "field",
-           name: "zOffset",
+         }, null, yp), (0, Op.j)(pp, null, Dp, {
+           kind: "setter",
+           name: "wheelXMoveScene",
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1510-L1511` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L639) · [Before (L1510-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1510-L1511)

```diff
-             has: CC => "zOffset" in CC,
-             get: CC => CC.zOffset,
+             has: pp => "wheelXMoveScene" in pp,
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1513` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L641) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1513)

```diff
-               CC.zOffset = zC
+               pp.wheelXMoveScene = ip
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1517-L1519` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L645-L647) · [Before (L1517-L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1517-L1519)

```diff
-         }, uz, rz), (0, QC.j)(null, null, rC, {
-           kind: "field",
-           name: "zOffsetUnits",
+         }, null, yp), (0, Op.j)(pp, null, Ap, {
+           kind: "setter",
+           name: "wheelYMoveScene",
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1523-L1524` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L651) · [Before (L1523-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1523-L1524)

```diff
-             has: CC => "zOffsetUnits" in CC,
-             get: CC => CC.zOffsetUnits,
+             has: pp => "wheelYMoveScene" in pp,
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1526` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L653) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1526)

```diff
-               CC.zOffsetUnits = zC
+               pp.wheelYMoveScene = ip
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1530-L1532` → after: `L657-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L657-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L657-L659) · [Before (L1530-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1530-L1532)

```diff
-         }, sz, Tz), (0, QC.j)(null, null, tC, {
-           kind: "field",
-           name: "_isVertexOutputInvariant",
+         }, null, yp), (0, Op.j)(pp, null, Pp, {
+           kind: "setter",
+           name: "wheelZMoveScene",
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1536-L1537` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L663) · [Before (L1536-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1536-L1537)

```diff
-             has: CC => "_isVertexOutputInvariant" in CC,
-             get: CC => CC._isVertexOutputInvariant,
+             has: pp => "wheelZMoveScene" in pp,
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1539` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L665) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1539)

```diff
-               CC._isVertexOutputInvariant = zC
+               pp.wheelZMoveScene = ip
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1543` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L669) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1543)

```diff
-         }, az, tz), bC && Object.defineProperty(CC, Symbol.metadata, {
+         }, null, yp), Ip && Object.defineProperty(pp, Symbol.metadata, {
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1549-L1555` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L675) · [Before (L1549-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1549-L1555)

```diff
-       })(), CC.TriangleFillMode = 0, CC.WireFrameFillMode = 1, CC.PointFillMode = 2, CC.PointListDrawMode = 3, CC.LineListDrawMode = 4, CC.LineLoopDrawMode = 5, CC.LineStripDrawMode = 6, CC.TriangleStripDrawMode = 7, CC.TriangleFanDrawMode = 8, CC.ClockWiseSideOrientation = 0, CC … [truncated]
-         CC._FresnelDirtyCallBack(zC), CC._MiscDirtyCallBack(zC)
-       }, CC._TextureAndMiscDirtyCallBack = zC => {
-         CC._TextureDirtyCallBack(zC), CC._MiscDirtyCallBack(zC)
-       }, CC._DirtyCallbackArray = [], CC._RunDirtyCallBacks = zC => {
-         for (const ZC of CC._DirtyCallbackArray) ZC(zC)
-       }, CC
+       })(), pp
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1557-L1871` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L677-L678) · [Before (L1557-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1557-L1871)

```diff
-     Object.getOwnPropertyDescriptor(GC.prototype, "pluginManager") || Object.defineProperty(GC.prototype, "pluginManager", (0, PC.d)("Material", "pluginManager"))
-   },
-   40162: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       b: () => wC
-     });
-     var QC = ZC(39721);
-     class wC {
-       static get DiffuseTextureEnabled() {
-         return this._DiffuseTextureEnabled
-       }
-       static set DiffuseTextureEnabled(CC) {
-         this._DiffuseTextureEnabled !== CC && (this._DiffuseTextureEnabled = CC, QC.b.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseWeightTextureEnabled() {
-         return this._BaseWeightTextureEnabled
- ... (299 more removed lines; see GitHub link above)
+     xp.e.FreeCameraMouseWheelInput = vp;
+     let tp = (() => {
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L1873-L2092` → after: `L680-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L680-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L680-L713) · [Before (L1873-L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L1873-L2092)

```diff
-       if (zC && CC && (CC.computeBonesUsingShaders && zC._bonesComputationForcedToCPU && (CC.computeBonesUsingShaders = !1), CC.useBones && CC.computeBonesUsingShaders && CC.skeleton)) {
-         const wC = CC.skeleton;
-         if (wC.isUsingTextureForMatrices && zC.getUniformIndex("boneTextureInfo") > -1) {
-           const ZC = wC.getTransformMatrixTexture(CC);
-           zC.setTexture("boneSampler", ZC), zC.setFloat2("boneTextureInfo", wC._textureWidth, wC._textureHeight)
-         } else {
-           const bC = wC.getTransformMatrices(CC);
-           bC && (zC.setMatrices("mBones", bC), ZC && CC.Km().prePassRenderer && CC.Km().prePassRenderer.getIndex(2) && (ZC.previousBones[CC.uniqueId] || (ZC.previousBones[CC.uniqueId] = bC.slice()), zC.setMatrices("mPreviousBones", ZC.previousBones[CC.uniqueId]), QC = bC, ZC.prev … [truncated]
-         }
-       }
-     }
- 
-     function IC(CC, zC, ZC, QC, wC) {
-       let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-       CC._bindLight(zC, ZC, QC, wC, bC)
-     }
- ... (204 more removed lines; see GitHub link above)
+       let ip, cp, Sp = [],
+         xp = [],
+         Lp = [],
+         Dp = [];
+       return pp = class {
+         constructor() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           this.allowMouse = pp, this.touchAngularSensibility = (0, Op.l)(this, Sp, 2e5), this.touchMoveSensibility = ((0, Op.l)(this, xp), (0, Op.l)(this, Lp, 250)), this.singleFingerRotate = ((0, Op.l)(this, Dp), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
+         }
+         attachControl(pp) {
+           pp = Yp.i.BackCompatCameraNoPreventDefault(arguments);
+           let ip = null;
+           if (void 0 === this._pointerInput && (this._onLostFocus = () => {
+               this._offsetX = null, this._offsetY = null
+             }, this._pointerInput = cp => {
+               const Op = cp.event,
+ ... (18 more added lines; see GitHub link above)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2094` → after: `L715-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L715-L717) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2094)

```diff
-             }
+             }), this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._pointerInput, Pp.d.POINTERDOWN | Pp.d.POINTERUP | Pp.d.POINTERMOVE), this._onLostFocus) {
+             const pp = this.camera.gy().getInputElement();
+             pp && pp.addEventListener("blur", this._onLostFocus)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2296-L2325` → after: `L720-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L720-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L720-L726) · [Before (L2296-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2296-L2325)

```diff
-       }
-       return ZC
-     }
- 
-     function bC(CC, zC) {
-       zC.forEach(((zC, ZC) => {
-         const QC = `vp_${ZC}_info`;
-         CC.setFloat4(QC, zC.offset, zC.stride, zC.type, zC.normalized ? 1 : 0)
-       }))
-     }
-   },
-   40145: (CC, zC, ZC) => {
-     ZC.d(zC, {
-       c: () => fC,
-       d: () => oC
-     });
- ... (14 more removed lines; see GitHub link above)
+         detachControl() {
+           if (this._pointerInput) {
+             if (this._observer && (this.camera.Gl()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
+               const pp = this.camera.gy().getInputElement();
+               pp && pp.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+             }
+             this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2328-L2333` → after: `L729-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L729-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L729-L746) · [Before (L2328-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2328-L2333)

```diff
-         static extractMinAndMax(CC, zC, ZC, QC, wC, bC) {
-           for (let nC = zC, fC = zC * QC; nC < zC + ZC; nC++, fC += QC) {
-             const zC = CC[fC],
-               ZC = CC[fC + 1],
-               QC = CC[fC + 2];
-             wC.minimizeInPlaceFromFloats(zC, ZC, QC), bC.maximizeInPlaceFromFloats(zC, ZC, QC)
+         checkInputs() {
+           if (null === this._offsetX || null === this._offsetY) return;
+           if (0 === this._offsetX && 0 === this._offsetY) return;
+           const pp = this.camera,
+             ip = pp.movement.input,
+             cp = ip.getEntry("touch", "rotate"),
+             Op = ip.getEntry("touch", "translate"),
+             op = pp._calculateHandednessMultiplier(),
+             Sp = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
+           if (cp) {
+             const ip = cp.sensitivity ?? 1 / this.touchAngularSensibility;
+             pp.cameraRotation.y = this._offsetX * op * ip, Sp && (pp.cameraRotation.x = -this._offsetY * op * ip)
+           }
+           if (!Sp && Op) {
+             const ip = pp._computeLocalCameraSpeed(),
+               cp = Op.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
+ ... (2 more added lines; see GitHub link above)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2338-L2345` → after: `L757-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L757-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L757-L760) · [Before (L2338-L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2338-L2345)

```diff
-         zC = [bC.h.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
-         }))], ZC = [bC.h.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], (0, QC.j)(CC, null, zC, {
-           kind: "method",
-           name: "extractMinAndMaxIndexed",
-           static: !0,
+         ip = [(0, op.K)()], cp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
+           kind: "field",
+           name: "touchAngularSensibility",
+           static: !1,
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2348-L2349` → after: `L763-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L763-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L763-L767) · [Before (L2348-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2348-L2349)

```diff
-             has: CC => "extractMinAndMaxIndexed" in CC,
-             get: CC => CC.extractMinAndMaxIndexed
+             has: pp => "touchAngularSensibility" in pp,
+             get: pp => pp.touchAngularSensibility,
+             set: (pp, ip) => {
+               pp.touchAngularSensibility = ip
+             }
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2352-L2355` → after: `L770-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L770-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L770-L773) · [Before (L2352-L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2352-L2355)

```diff
-         }, null, wC), (0, QC.j)(CC, null, ZC, {
-           kind: "method",
-           name: "extractMinAndMax",
-           static: !0,
+         }, Sp, xp), (0, Op.j)(null, null, cp, {
+           kind: "field",
+           name: "touchMoveSensibility",
+           static: !1,
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2358-L2359` → after: `L776-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L776-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L776-L780) · [Before (L2358-L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2358-L2359)

```diff
-             has: CC => "extractMinAndMax" in CC,
-             get: CC => CC.extractMinAndMax
+             has: pp => "touchMoveSensibility" in pp,
+             get: pp => pp.touchMoveSensibility,
+             set: (pp, ip) => {
+               pp.touchMoveSensibility = ip
+             }
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2362` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L783) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2362)

```diff
-         }, null, wC), nC && Object.defineProperty(CC, Symbol.metadata, {
+         }, Lp, Dp), Ip && Object.defineProperty(pp, Symbol.metadata, {
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/262.js` (Changed code · before: `L2367` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638bR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/35c4836e57112fdf898e8406dc194a36d1d6fe3a...build/preprod.bloxd.io/sn3sfj.2522680a#diff-5f53aa18377572898a9102841596d462acf2e329b55e47737a2261db262d638b) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/sn3sfj.2522680a/bundles/preprod.bloxd.io/chunks/js/262.js#L788) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/35c4836e57112fdf898e8406dc194a36d1d6fe3a/bundles/preprod.bloxd.io/chunks/js/262.js#L2367)

```diff
-         }), (0, QC.n)(CC, wC)
+         })
```
