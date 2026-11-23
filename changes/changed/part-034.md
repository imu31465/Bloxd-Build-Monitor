# Changed — Bundle Modifications Report (Part 034 / 104)

- **Updated at**: `2026-11-24T00:51 JST`
- **Part**: `34 / 104` (**362** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 033](part-033.md) · [Part 035 →](part-035.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (3lwmg.ecbaa066 → w4ddu.56408518 · continued)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 38. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L548-L556` → after: `L963-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L963-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L963-L967) · [Before (L548-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L548-L556)

```diff
-           switch (ik) {
-             case 0:
-               Dk.set(kk, 0, 0);
-               break;
-             case 1:
-               Dk.set(0, kk, 0);
-               break;
-             case 2:
-               Dk.set(0, 0, kk)
+         }), pC.push({
+           target: SC,
+           name: "error",
+           handler: CC => {
+             PC(), MC(CC), NC && SC.src && URL.revokeObjectURL(SC.src)
```

#### 39. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L558-L666` → after: `L969-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L969-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L969-L992) · [Before (L558-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L558-L666)

```diff
-         }
-       }, (() => {
-         const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(nk[Symbol.metadata] ?? null) : void 0;
-         ek = [(0, fk.I)()], ik = [(0, fk.I)()], bk = [(0, fk.I)()], rk = [(0, fk.I)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.I)()], xk = [(0, fk.I)()], (0, Dk.d)(kk, null, ek, {
-           kind: "setter",
-           name: "wheelXMoveRelative",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "wheelXMoveRelative" in kk,
-             set: (kk, ek) => {
-               kk.wheelXMoveRelative = ek
-             }
-           },
-           metadata: Sk
-         }, null, Uk), (0, Dk.d)(kk, null, ik, {
- ... (93 more removed lines; see GitHub link above)
+         }), pC.push({
+           target: document,
+           name: "securitypolicyviolation",
+           handler: CC => {
+             if (CC.blockedURI !== SC.src || "Cg" === CC.disposition) return;
+             PC();
+             const zC = new Error(`CSP violation of policy ${CC.effectiveDirective} ${CC.blockedURI}. Current policy is ${CC.originalPolicy}`);
+             qC.c.UseFallbackTexture = !1, MC(zC), NC && SC.src && URL.revokeObjectURL(SC.src), SC.src = ""
+           }
+         }), (() => {
+           for (const CC of pC) CC.target.addEventListener(CC.name, CC.handler)
+         })();
+         const GC = "blob:" === bC.substring(0, 5),
+           JC = "data:" === bC.substring(0, 5),
+           IC = () => {
+             GC || JC || !QC.d.IsCustomRequestAvailable ? SC.src = bC : iC(bC, ((CC, zC, ZC) => {
+ ... (8 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L668-L713` → after: `L994-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L994-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L994-L1011) · [Before (L668-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L668-L713)

```diff
-           metadata: Sk
-         }, null, Uk), Sk && Object.defineProperty(kk, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: Sk
-         })
-       })(), kk
-     })();
-     rk.e.FreeCameraMouseWheelInput = lk;
-     let pk = (() => {
-       var kk;
-       let ek, ik, bk = [],
-         rk = [],
-         Pk = [],
-         Mk = [];
- ... (30 more removed lines; see GitHub link above)
+           vC = () => {
+             wC && wC.loadImage(bC, SC)
+           };
+         if (!GC && !JC && wC && wC.enableTexturesOffline) wC.open(vC, IC);
+         else {
+           if (-1 !== bC.indexOf("file:")) {
+             const CC = decodeURIComponent(bC.substring(5).toLowerCase());
+             if (nC.FilesToLoad[CC] && "undefined" !== typeof URL) {
+               try {
+                 let zC;
+                 try {
+                   zC = URL.createObjectURL(nC.FilesToLoad[CC])
+                 } catch (eC) {
+                   zC = URL.createObjectURL(nC.FilesToLoad[CC])
+                 }
+                 SC.src = zC, NC = !0
+ ... (2 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L715-L724` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L1013) · [Before (L715-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L715-L724)

```diff
-             }), this._observer = this.camera.XF()._inputManager._addCameraPointerObserver(this._pointerInput, xk.c.POINTERDOWN | xk.c.POINTERUP | xk.c.POINTERMOVE), this._onLostFocus) {
-             const kk = this.camera.JU().getInputElement();
-             kk && kk.addEventListener("blur", this._onLostFocus)
-           }
-         }
-         detachControl() {
-           if (this._pointerInput) {
-             if (this._observer && (this.camera.XF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
-               const kk = this.camera.JU().getInputElement();
-               kk && kk.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+               return SC
```

#### 42. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L729-L746` → after: `L1018-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1018-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L1018-L1056) · [Before (L729-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L729-L746)

```diff
-         checkInputs() {
-           if (null === this._offsetX || null === this._offsetY) return;
-           if (0 === this._offsetX && 0 === this._offsetY) return;
-           const kk = this.camera,
-             ek = kk.movement.input,
-             ik = ek.getEntry("touch", "rotate"),
-             Dk = ek.getEntry("touch", "translate"),
-             fk = kk._calculateHandednessMultiplier(),
-             bk = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
-           if (ik) {
-             const ek = ik.sensitivity ?? 1 / this.touchAngularSensibility;
-             kk.cameraRotation.y = this._offsetX * fk * ek, bk && (kk.cameraRotation.x = -this._offsetY * fk * ek)
-           }
-           if (!bk && Dk) {
-             const ek = kk._computeLocalCameraSpeed(),
-               ik = Dk.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
- ... (2 more removed lines; see GitHub link above)
+         return SC
+       },
+       IC = (CC, zC, ZC, QC, wC) => {
+         const nC = new FileReader,
+           fC = {
+             onCompleteObservable: new bC.d,
+             abort: () => nC.abort()
+           };
+         return nC.onloadend = () => fC.onCompleteObservable.notifyObservers(fC), wC && (nC.onerror = () => {
+           wC(new GC(`Unable to read ${CC.name}`, CC))
+         }), nC.onload = CC => {
+           zC(CC.target.result)
+         }, ZC && (nC.onprogress = ZC), QC ? nC.readAsArrayBuffer(CC) : nC.readAsText(CC), fC
+       },
+       iC = (CC, zC, ZC, QC, wC, oC, qC) => {
+         if (CC.name) return IC(CC, zC, ZC, wC, oC ? CC => {
+ ... (23 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L749-L750` → after: `L1062-L1168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1062-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L1062-L1168) · [Before (L749-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L749-L750)

```diff
-         getClassName() {
-           return "FreeCameraTouchInput"
+         return vC(FC, ((CC, ZC) => {
+           zC(CC, ZC?.responseURL, ZC?.getResponseHeader("content-type"))
+         }), ZC, QC, wC, oC ? CC => {
+           oC(CC.request, new pC(CC.message, CC.request))
+         } : void 0, qC)
+       },
+       vC = (CC, zC, ZC, nC, fC, oC, FC) => {
+         null !== nC && (nC ?? (nC = qC.c.LastCreatedScene?.offlineProvider)), CC = RC.CleanUrl(CC), CC = RC.PreprocessUrl(CC);
+         const WC = RC.BaseUrl + CC;
+         let MC = !1;
+         const gC = {
+             onCompleteObservable: new bC.d,
+             abort: () => MC = !0
+           },
+           SC = () => {
+             let CC, bC = new QC.d,
+ ... (91 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L752-L753` → after: `L1170-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1170-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L1170-L1181) · [Before (L752-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L752-L753)

```diff
-         getSimpleName() {
-           return "touch"
+       },
+       hC = () => "undefined" !== typeof location && "file:" === location.protocol,
+       KC = CC => SC.test(CC),
+       YC = CC => {
+         const zC = SC.exec(CC);
+         if (null === zC || 0 === zC.length) return {
+           match: !1,
+           type: ""
+         };
+         return {
+           match: !0,
+           type: zC[0].replace("data:", "").replace(";base64,", "")
```

#### 45. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L755-L831` → after: `L1183-L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1183-L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L1183-L1334) · [Before (L755-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L755-L831)

```diff
-       }, (() => {
-         const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ek = [(0, fk.I)()], ik = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
-           kind: "field",
-           name: "touchAngularSensibility",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "touchAngularSensibility" in kk,
-             get: kk => kk.touchAngularSensibility,
-             set: (kk, ek) => {
-               kk.touchAngularSensibility = ek
-             }
-           },
-           metadata: Sk
-         }, bk, rk), (0, Dk.d)(null, null, ik, {
- ... (61 more removed lines; see GitHub link above)
+       };
+ 
+     function dC(CC) {
+       return (0, oC.d)(CC.split(",")[1])
+     }
+     const mC = CC => (0, oC.f)(CC.split(",")[1]);
+     let HC;
+     const EC = (CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) => {
+       HC = {
+         DecodeBase64UrlToBinary: CC,
+         DecodeBase64UrlToString: zC,
+         DefaultRetryStrategy: ZC.DefaultRetryStrategy,
+         BaseUrl: ZC.BaseUrl,
+         CorsBehavior: ZC.CorsBehavior,
+         PreprocessUrl: ZC.PreprocessUrl,
+         IsBase64DataUrl: QC,
+ ... (136 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L833-L968` → after: `L1336-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1336-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L1336-L1391) · [Before (L833-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L833-L968)

```diff
-         return kk = class extends Mk {
-           get angularSensibility() {
-             const kk = this.inputs.attached.mouse;
-             return kk ? kk.angularSensibility : 0
-           }
-           set angularSensibility(kk) {
-             const ek = this.inputs.attached.mouse;
-             ek && (ek.angularSensibility = kk)
-           }
-           get keysUp() {
-             const kk = this.inputs.attached.keyboard;
-             return kk ? kk.keysUp : []
-           }
-           set keysUp(kk) {
-             const ek = this.inputs.attached.keyboard;
-             ek && (ek.keysUp = kk)
- ... (120 more removed lines; see GitHub link above)
+           for (const zC of CC) zC()
+         }), 1), QC.push(CC)
+       }
+     }
+ 
+     function bC(CC, zC, ZC) {
+       try {
+         if (CC()) return zC(), !0
+       } catch (QC) {
+         return ZC?.(QC), !0
+       }
+       return !1
+     }
+     const nC = function(CC, zC, ZC) {
+       let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+ ... (40 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L970-L1028` → after: `L1393-L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1393-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L1393-L1415) · [Before (L970-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L970-L1028)

```diff
-         }, (() => {
-           const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mk[Symbol.metadata] ?? null) : void 0;
-           ek = [(0, fk.F)()], ik = [(0, fk.F)()], rk = [(0, fk.I)()], Pk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
-             kind: "field",
-             name: "ellipsoid",
-             static: !1,
-             private: !1,
-             access: {
-               has: kk => "ellipsoid" in kk,
-               get: kk => kk.ellipsoid,
-               set: (kk, ek) => {
-                 kk.ellipsoid = ek
-               }
-             },
-             metadata: Sk
-           }, Kk, xk), (0, Dk.d)(null, null, ik, {
- ... (43 more removed lines; see GitHub link above)
+         };
+         for (const wC of QC.CustomRequestModifiers) {
+           if (QC._ShouldSkipRequestModifications(CC)) break;
+           const zC = wC(ZC, CC);
+           "string" === typeof zC && (CC = zC)
+         }
+         return {
+           url: CC,
+           headers: zC
+         }
+       }
+       static async FetchAsync(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const ZC = zC.method ?? "GET";
+         if ("undefined" !== typeof fetch) {
+           const {
+ ... (7 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1030-L1033` → after: `L1417-L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L1417-L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/254.js#L1417-L1508) · [Before (L1030-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/254.js#L1030-L1033)

```diff
-         })(), kk
-       })(),
-       Vk = !1;
-     Vk || (Vk = !0, (0, sk.h)("BABYLON.FreeCamera", dk))
+         }
+         return await new Promise(((wC, bC) => {
+           const nC = new QC;
+           nC.responseType = "arraybuffer", nC.addEventListener("readystatechange", (() => {
+             if (4 === nC.readyState)
+               if (nC.status >= 200 && nC.status < 300) {
+                 const CC = "undefined" !== typeof Headers ? new Headers : void 0,
+                   zC = nC.getResponseHeader("Content-Type");
+                 zC && CC && CC.set("Content-Type", zC), "undefined" !== typeof Response ? wC(new Response(nC.response, {
+                   status: nC.status,
+                   statusText: nC.statusText,
+                   headers: CC
+                 })) : wC({
+                   ok: !0,
+                   status: nC.status,
+                   statusText: nC.statusText,
+ ... (76 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 1. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L4)

```diff
-   39822: (kk, ek, ik) => {
+   39921: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L8-L476` → after: `L8-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L8-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L8-L22) · [Before (L8-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L8-L476)

```diff
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(36698),
-       bk = ik(36874),
-       rk = ik(39787),
-       Pk = ik(39696),
-       mk = ik(36734),
-       Mk = ik(39769),
-       Kk = ik(39585);
-     let xk = (() => {
-       var kk, ek;
-       let ik, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk = rk.b,
-         sk = [],
-         dk = [],
-         Vk = [],
-         Fk = [],
- ... (453 more removed lines; see GitHub link above)
+     var QC = ZC(38507),
+       wC = ZC(37002);
+     class bC {
+       static Instantiate(CC) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[CC]) return this.RegisteredExternalClasses[CC];
+         const zC = (0, wC.c)(CC);
+         if (zC) return zC;
+         QC.c.Warn(CC + " not found, you may have missed an import.");
+         const ZC = CC.split(".");
+         let bC = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let QC = 0, wC = ZC.length; QC < wC; QC++) bC = bC[ZC[QC]];
+         return "function" !== typeof bC ? null : bC
+       }
+     }
+     bC.RegisteredExternalClasses = {}
```

#### 3. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L478` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L24) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L478)

```diff
-   39787: (kk, ek, ik) => {
+   39730: (CC, zC, ZC) => {
```

#### 4. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L482-L488` → after: `L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L28) · [Before (L482-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L482-L488)

```diff
-     var Dk = ik(39566),
-       fk = ik(36698),
-       Sk = ik(39570),
-       bk = ik(36726),
-       rk = ik(36722),
-       Pk = ik(39447),
-       mk = ik(39585);
+     var QC = ZC(39680);
```

#### 5. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L490-L491` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L30-L31) · [Before (L490-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L490-L491)

```diff
-       constructor() {
-         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new bk.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       static get Now() {
+         return (0, QC.k)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
```

#### 6. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L494-L668` → after: `L34-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L34-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L34-L243) · [Before (L494-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L494-L668)

```diff
-     let Kk = (() => {
-       var kk;
-       let ek, ik, Kk, xk, nk, Uk = [],
-         Hk = [],
-         wk = [],
-         lk = [],
-         pk = [],
-         yk = [],
-         Yk = [],
-         Lk = [],
-         Ck = [],
-         Ak = [];
-       return kk = class {
-         static AddNodeConstructor(kk, ek) {
-           this._NodeConstructors[kk] = ek
-         }
- ... (159 more removed lines; see GitHub link above)
+   },
+   39747: (CC, zC, ZC) => {
+     function QC(CC) {
+       let zC = 1;
+       do {
+         zC *= 2
+       } while (zC < CC);
+       return zC === CC
+     }
+ 
+     function wC(CC, zC, ZC) {
+       return CC * (1 - ZC) + zC * ZC
+     }
+ 
+     function bC(CC) {
+       const zC = nC(CC),
+ ... (194 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L670-L676` → after: `L245-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L245-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L245-L269) · [Before (L670-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L670-L676)

```diff
-         bV(kk) {
-           if (this._nodeDataStorage._isEnabled === kk) return;
-           const ek = this._hasEffectiveEnabledStateObservers(),
-             ik = ek ? this.isEnabled() : null;
-           if (this._nodeDataStorage._isEnabled = kk, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(kk), ek) {
-             const kk = this.isEnabled();
-             kk !== ik && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(kk)
+         return CC
+       }
+       static GetBabylonScriptURL(CC, zC) {
+         if (!CC) return "";
+         if (CC.startsWith(QC._DefaultCdnUrl))
+           if (QC.ScriptBaseUrl) {
+             const zC = QC.ScriptBaseUrl.endsWith("/") ? QC.ScriptBaseUrl.slice(0, -1) : QC.ScriptBaseUrl;
+             CC = CC.replace(QC._DefaultCdnUrl, zC)
+           } else if (QC._CdnVersion) {
+           const zC = `${QC._DefaultCdnUrl}/v${QC._CdnVersion}`;
+           CC.startsWith(zC) || (CC = CC.replace(QC._DefaultCdnUrl, zC))
+         }
+         return CC = QC.ScriptPreprocessUrl(CC), zC && !QC.IsAbsoluteUrl(CC) && (CC = QC.GetAbsoluteUrl(CC)), CC
+       }
+       static LoadBabylonScript(CC, zC, ZC, wC) {
+         CC = QC.GetBabylonScriptURL(CC), QC.LoadScript(CC, zC, ZC)
+ ... (9 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L678-L688` → after: `L271-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L271-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L271-L275) · [Before (L678-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L678-L688)

```diff
-         }
-         isDescendantOf(kk) {
-           return !!this.parent && (this.parent === kk || this.parent.isDescendantOf(kk))
-         }
-         _getDescendants(kk) {
-           let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-             ik = arguments.length > 2 ? arguments[2] : void 0;
-           if (this._children)
-             for (let Dk = 0; Dk < this._children.length; Dk++) {
-               const fk = this._children[Dk];
-               ik && !ik(fk) || kk.push(fk), ek || fk._getDescendants(kk, !1, ik)
+           QC.LoadFile(CC, (CC => {
+             try {
+               Function(CC).apply(null), zC && zC()
+             } catch (QC) {
+               ZC && ZC("LoadScript Error", QC)
```

#### 9. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L691-L716` → after: `L281-L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L281-L288) · [Before (L691-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L691-L716)

```diff
-         getDescendants(kk, ek) {
-           const ik = [];
-           return this._getDescendants(ik, kk, ek), ik
-         }
-         getChildMeshes(kk, ek) {
-           const ik = [];
-           return this._getDescendants(ik, kk, (kk => (!ek || ek(kk)) && void 0 !== kk.cullingStrategy)), ik
-         }
-         getChildren(kk) {
-           let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           return this.getDescendants(ek, kk)
-         }
-         _setReady(kk) {
-           kk !== this._nodeDataStorage._isReady && (kk ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
-         }
-         getAnimationByName(kk) {
- ... (10 more removed lines; see GitHub link above)
+       }
+       static _LoadScriptWeb(CC, zC, ZC, QC) {
+         let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         if ("function" === typeof importScripts) {
+           try {
+             importScripts(CC), zC && zC()
+           } catch (oC) {
+             ZC?.(`Unable to load script '${CC}' in worker`, oC)
```

#### 10. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L719-L725` → after: `L349-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L349-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L349-L356) · [Before (L719-L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L719-L725)

```diff
-         deleteAnimationRange(kk) {
-           let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-           for (let ik = 0, Dk = this.animations.length; ik < Dk; ik++) this.animations[ik] && this.animations[ik].deleteRange(kk, ek);
-           this._ranges[kk] = null
-         }
-         getAnimationRange(kk) {
-           return this._ranges[kk] || null
+       }
+       static UnregisterTopRootEvents(CC, zC) {
+         for (let QC = 0; QC < zC.length; QC++) {
+           const wC = zC[QC];
+           CC.removeEventListener(wC.name, wC.handler);
+           try {
+             CC.parent && CC.parent.removeEventListener(wC.name, wC.handler)
+           } catch (ZC) {}
```

#### 11. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L727-L734` → after: `L358-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L358-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L358-L393) · [Before (L727-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L727-L734)

```diff
-         clone(ek, ik, Dk) {
-           const fk = mk.b.Clone((() => new kk(ek, this.XF())), this);
-           if (ik && (fk.parent = ik), !Dk) {
-             const kk = this.getDescendants(!0);
-             for (let ik = 0; ik < kk.length; ik++) {
-               const Dk = kk[ik];
-               Dk.clone(ek + "." + Dk.name, fk)
-             }
+       }
+       static async DumpFramebuffer(CC, zC, ZC, QC) {
+         throw (0, qC.i)("DumpTools")
+       }
+       static DumpData(CC, zC, ZC, QC) {
+         throw (0, qC.i)("DumpTools")
+       }
+       static async DumpDataAsync(CC, zC, ZC) {
+         throw (0, qC.i)("DumpTools")
+       }
+       static _IsOffScreenCanvas(CC) {
+         return void 0 !== CC.convertToBlob
+       }
+       static ToBlob(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           wC = arguments.length > 3 ? arguments[3] : void 0;
+ ... (20 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L736-L742` → after: `L395-L403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L395-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L395-L403) · [Before (L736-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L736-L742)

```diff
-           return fk
-         }
-         getAnimationRanges() {
-           const kk = [];
-           let ek;
-           for (ek in this._ranges) kk.push(this._ranges[ek]);
-           return kk
+           QC.Download(CC, zC)
+         } else if (CC && "undefined" !== typeof URL) {
+           const zC = URL.createObjectURL(CC),
+             ZC = window.open("");
+           if (!ZC) return;
+           const QC = ZC.document.createElement("img");
+           QC.onload = function() {
+             URL.revokeObjectURL(zC)
+           }, QC.src = zC, ZC.document.body.appendChild(QC)
```

#### 13. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L744-L754` → after: `L405-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L405-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L405-L423) · [Before (L744-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L744-L754)

```diff
-         beginAnimation(kk, ek, ik, Dk) {
-           const fk = this.getAnimationRange(kk);
-           return fk ? this._scene.beginAnimation(this, fk.from, fk.to, ek, ik, Dk) : null
-         }
-         serializeAnimationRanges() {
-           const kk = [];
-           for (const ek in this._ranges) {
-             const ik = this._ranges[ek];
-             if (!ik) continue;
-             const Dk = {};
-             Dk.name = ek, Dk.from = ik.from, Dk.to = ik.to, kk.push(Dk)
+       }
+       static EncodeScreenshotCanvasData(CC, zC) {
+         let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
+           wC = arguments.length > 3 ? arguments[3] : void 0,
+           bC = arguments.length > 4 ? arguments[4] : void 0;
+         if ("string" !== typeof wC && zC) {
+           if (zC) {
+             if (QC._IsOffScreenCanvas(CC)) return void CC.convertToBlob({
+               type: ZC,
+               quality: bC
+             }).then((CC => {
+               const ZC = new FileReader;
+               ZC.readAsDataURL(CC), ZC.onloadend = () => {
+                 const CC = ZC.result;
+                 zC(CC)
+               }
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L756-L765` → after: `L425-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L425-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L425-L511) · [Before (L756-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L756-L765)

```diff
-           return kk
-         }
-         computeWorldMatrix(kk) {
-           return this._worldMatrix || (this._worldMatrix = fk.b.Identity()), this._worldMatrix
-         }
-         dispose(kk) {
-           let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           if (this._nodeDataStorage._isDisposed = !0, !kk) {
-             const ik = this.getDescendants(!0);
-             for (const Dk of ik) Dk.dispose(kk, ek)
+         } else this.ToBlob(CC, (function(CC) {
+           CC && QC.DownloadBlob(CC, wC), zC && zC("")
+         }), ZC, bC)
+       }
+       static Download(CC, zC) {
+         if ("undefined" === typeof URL) return;
+         const ZC = window.URL.createObjectURL(CC),
+           QC = document.createElement("a");
+         document.body.appendChild(QC), QC.style.display = "none", QC.href = ZC, QC.download = zC, QC.addEventListener("click", (() => {
+           QC.parentElement && QC.parentElement.removeChild(QC)
+         })), QC.click(), window.URL.revokeObjectURL(ZC)
+       }
+       static BackCompatCameraNoPreventDefault(CC) {
+         return "boolean" === typeof CC[0] ? CC[0] : "boolean" === typeof CC[1] && CC[1]
+       }
+       static CreateScreenshot(CC, zC, ZC, QC) {
+ ... (71 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L767-L776` → after: `L513-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L513-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L513-L517) · [Before (L767-L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L767-L776)

```diff
-           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.ZF.notifyObservers(this), this.ZF.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
-           for (const ik of this._behaviors) ik.detach();
-           this._behaviors.length = 0, this.metadata = null
-         }
-         static ParseAnimationRanges(kk, ek, ik) {
-           if (ek.lw)
-             for (let Dk = 0; Dk < ek.lw.length; Dk++) {
-               const ik = ek.lw[Dk];
-               kk.createAnimationRange(ik.name, ik.from, ik.to)
-             }
+       }
+       static _EndMarkNative(CC) {
+         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
+           const zC = QC._NativePerformanceCounterHandles.get(CC);
+           zC ? (_native.endPerformanceCounter(zC), QC._NativePerformanceCounterHandles.delete(CC)) : QC.Warn(`Performance counter with name ${CC} was not started.`)
```

#### 16. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L778-L797` → after: `L519-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L519-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L519-L529) · [Before (L778-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L778-L797)

```diff
-         getHierarchyBoundingVectors() {
-           let kk, ek, ik = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-             Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-           this.XF().incrementRenderId(), this.computeWorldMatrix(!0);
-           const Sk = this;
-           if (Sk.hq && Sk.TY) {
-             const ik = Sk.hq();
-             kk = ik.boundingBox.minimumWorld.clone(), ek = ik.boundingBox.maximumWorld.clone()
-           } else kk = new fk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), ek = new fk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-           if (ik) {
-             const ik = this.getDescendants(!1);
-             for (const Sk of ik) {
-               const ik = Sk;
-               if (ik.computeWorldMatrix(!0), Dk && !Dk(ik)) continue;
-               if (!ik.hq || 0 === ik.getTotalVertices()) continue;
-               const bk = ik.hq().boundingBox,
- ... (4 more removed lines; see GitHub link above)
+       }
+       static get Now() {
+         return oC.b.Now
+       }
+       static GetClassName(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           ZC = null;
+         if (!zC && CC.getClassName) ZC = CC.getClassName();
+         else {
+           if (CC instanceof Object) {
+             ZC = (zC ? CC : Object.getPrototypeOf(CC)).constructor.__bjsclassName__
```

#### 17. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L799-L801` → after: `L531-L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L531-L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L531-L548) · [Before (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L799-L801)

```diff
-           return {
-             min: kk,
-             max: ek
+           ZC || (ZC = typeof CC)
+         }
+         return ZC
+       }
+       static First(CC, zC) {
+         for (const ZC of CC)
+           if (zC(ZC)) return ZC;
+         return null
+       }
+       static getFullClassName(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           ZC = null,
+           QC = null;
+         if (!zC && CC.getClassName) ZC = CC.getClassName();
+         else {
+           if (CC instanceof Object) {
+ ... (2 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L804-L867` → after: `L552-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L552-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L552-L602) · [Before (L804-L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L804-L867)

```diff
-       }, (() => {
-         const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ek = [(0, Sk.I)()], ik = [(0, Sk.I)()], Kk = [(0, Sk.I)()], xk = [(0, Sk.I)()], nk = [(0, Sk.I)()], (0, Dk.d)(null, null, ek, {
-           kind: "field",
-           name: "name",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "name" in kk,
-             get: kk => kk.name,
-             set: (kk, ek) => {
-               kk.name = ek
-             }
-           },
-           metadata: fk
-         }, Uk, Hk), (0, Dk.d)(null, null, ik, {
- ... (48 more removed lines; see GitHub link above)
+         return ZC ? (null != QC ? QC + "." : "") + ZC : null
+       }
+       static async DelayAsync(CC) {
+         await new Promise((zC => {
+           setTimeout((() => {
+             zC()
+           }), CC)
+         }))
+       }
+       static IsSafari() {
+         return !!(0, bC.h)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
+       }
+     }
+ 
+     function GC(CC, zC) {
+       return ZC => {
+ ... (35 more added lines; see GitHub link above)
```

#### 19. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L869-L880` → after: `L604-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L604-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/255.js#L604-L613) · [Before (L869-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/255.js#L869-L880)

```diff
-           },
-           metadata: fk
-         }, Ck, Ak), fk && Object.defineProperty(kk, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: fk
-         })
-       })(), kk._AnimationRangeFactory = (kk, ek, ik) => {
-         throw (0, Pk.k)("AnimationRange")
-       }, kk._NodeConstructors = {}, kk
-     })()
+             QC.executeNext()
+           }), bC)
+         }), QC)
+       }
+     }
+     let AC = !1;
+ 
+     function xC() {
+       AC || (AC = !0, PC.Mix = pC.i, PC.IsExponentOfTwo = pC.h, WC.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (170 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 1. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L4)

```diff
-   40673: (kk, ek, ik) => {
+   40256: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L6)

```diff
-       c: () => tk
+       d: () => QC
```

#### 3. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L8-L182` → after: `L8-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L8-L20) · [Before (L8-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L8-L182)

```diff
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(36726),
-       bk = ik(36698),
-       rk = ik(36729),
-       Pk = ik(39787),
-       mk = ik(39997),
-       Mk = ik(39742),
-       Kk = ik(39470),
-       xk = ik(36703);
-     class nk {
-       constructor() {
-         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
-       }
-       get name() {
-         return "AutoRotation"
- ... (159 more removed lines; see GitHub link above)
+     let QC = !1
+   },
+   39803: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       b: () => gC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36987),
+       nC = ZC(36963),
+       fC = ZC(36985),
+       oC = ZC(37731),
+       qC = ZC(39833);
```

#### 4. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L184-L206` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L22-L23) · [Before (L184-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L184-L206)

```diff
-       constructor() {
-         this.onTargetFramingAnimationEndObservable = new Sk.c, this._mode = lk.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
-       }
-       get name() {
-         return "Framing"
-       }
-       set mode(kk) {
-         this._mode = kk
-       }
-       get mode() {
-         return this._mode
-       }
-       set radiusScale(kk) {
-         this._radiusScale = kk
-       }
-       get radiusScale() {
- ... (7 more removed lines; see GitHub link above)
+       get wrapU() {
+         return this._wrapU
```

#### 5. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L208-L209` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L25-L26) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L208-L209)

```diff
-       set defaultElevation(kk) {
-         this._defaultElevation = kk
+       set wrapU(CC) {
+         this._wrapU = CC
```

#### 6. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L211-L212` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L28-L29) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L211-L212)

```diff
-       get defaultElevation() {
-         return this._defaultElevation
+       get wrapV() {
+         return this._wrapV
```

#### 7. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L214-L215` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L31-L32) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L214-L215)

```diff
-       set elevationReturnTime(kk) {
-         this._elevationReturnTime = kk
+       set wrapV(CC) {
+         this._wrapV = CC
```

#### 8. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L217-L218` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L34-L35) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L217-L218)

```diff
-       get elevationReturnTime() {
-         return this._elevationReturnTime
+       get coordinatesMode() {
+         return 0
```

#### 9. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L220-L221` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L37-L38) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L220-L221)

```diff
-       set elevationReturnWaitTime(kk) {
-         this._elevationReturnWaitTime = kk
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 10. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L223-L224` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L40-L41) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L223-L224)

```diff
-       get elevationReturnWaitTime() {
-         return this._elevationReturnWaitTime
+       set isCube(CC) {
+         this._texture && (this._texture.isCube = CC)
```

#### 11. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L226-L227` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L43-L44) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L226-L227)

```diff
-       set zoomStopsAnimation(kk) {
-         this._zoomStopsAnimation = kk
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 12. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L229-L230` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L46-L47) · [Before (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L229-L230)

```diff
-       get zoomStopsAnimation() {
-         return this._zoomStopsAnimation
+       set is3D(CC) {
+         this._texture && (this._texture.is3D = CC)
```

#### 13. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L232-L233` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L49-L50) · [Before (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L232-L233)

```diff
-       set framingTime(kk) {
-         this._framingTime = kk
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
```

#### 14. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L235-L236` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L52-L53) · [Before (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L235-L236)

```diff
-       get framingTime() {
-         return this._framingTime
+       set is2DArray(CC) {
+         this._texture && (this._texture.is2DArray = CC)
```

#### 15. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L238-L239` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L55-L56) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L238-L239)

```diff
-       get attachedNode() {
-         return this._attachedCamera
+       getClassName() {
+         return "ThinTexture"
```

#### 16. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L241-L253` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L58-L59) · [Before (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L241-L253)

```diff
-       init() {}
-       attach(kk) {
-         this._attachedCamera = kk;
-         const ek = this._attachedCamera.XF();
-         lk.EasingFunction.setEasingMode(lk.EasingMode), this._onPrePointerObservableObserver = ek.onPrePointerObservable.add((kk => {
-           kk.type !== Mk.c.POINTERDOWN ? kk.type === Mk.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
-         })), this._onMeshTargetChangedObserver = kk.onMeshTargetChangedObservable.add((kk => {
-           kk && kk.hq && this.zoomOnMesh(kk, void 0, (() => {
-             this.onTargetFramingAnimationEndObservable.notifyObservers()
-           }))
-         })), this._onAfterCheckInputsObserver = kk.onAfterCheckInputsObservable.add((() => {
-           this._applyUserInteraction(), this._maintainCameraAboveGround()
-         }))
+       static _IsRenderTargetWrapper(CC) {
+         return void 0 !== CC?.shareDepth
```

#### 17. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L255-L265` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L61-L62) · [Before (L255-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L255-L265)

```diff
-       detach() {
-         if (!this._attachedCamera) return;
-         const kk = this._attachedCamera.XF();
-         this._onPrePointerObservableObserver && kk.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
-       }
-       zoomOnMesh(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         kk.computeWorldMatrix(!0);
-         const Dk = kk.hq().boundingBox;
-         this.zoomOnBoundingInfo(Dk.minimumWorld, Dk.maximumWorld, ek, ik)
+       constructor(CC) {
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = qC.d.Zero(), this._cachedBaseSize = qC.d.Zero(), this._initialSamplingMode = 2, this._texture = FC. … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L267-L272` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L64-L65) · [Before (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L267-L272)

```diff
-       zoomOnMeshHierarchy(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         kk.computeWorldMatrix(!0);
-         const Dk = kk.getHierarchyBoundingVectors(!0);
-         this.zoomOnBoundingInfo(Dk.min, Dk.max, ek, ik)
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
```

#### 19. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L274-L283` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L67-L69) · [Before (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L274-L283)

```diff
-       zoomOnMeshesHierarchy(kk) {
-         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
-         const Dk = new bk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           fk = new bk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-         for (let Sk = 0; Sk < kk.length; Sk++) {
-           const ek = kk[Sk].getHierarchyBoundingVectors(!0);
-           bk.o.CheckExtends(ek.min, Dk, fk), bk.o.CheckExtends(ek.max, Dk, fk)
-         }
-         this.zoomOnBoundingInfo(Dk, fk, ek, ik)
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
```

#### 20. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L285-L308` → after: `L71-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L71-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L71-L74) · [Before (L285-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L285-L308)

```diff
-       zoomOnBoundingInfo(kk, ek) {
-         let ik, Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
-         if (!this._attachedCamera) return !1;
-         const Sk = kk.y,
-           rk = Sk + (ek.y - Sk) * this._positionScale,
-           Pk = ek.subtract(kk).scale(.5);
-         if (!isFinite(rk)) return !1;
-         if (Dk) ik = new bk.o(0, rk, 0);
-         else {
-           const ek = kk.add(Pk);
-           ik = new bk.o(ek.x, rk, ek.z)
-         }
-         this._vectorTransition || (this._vectorTransition = Hk.b.CreateAnimation("target", Hk.b.ANIMATIONTYPE_VECTOR3, 60, lk.EasingFunction)), this._betaIsAnimating = !0;
-         let mk = Hk.b.TransitionTo("target", ik, this._attachedCamera, this._attachedCamera.XF(), 60, this._vectorTransition, this._framingTime);
-         mk && this._animatables.push(mk);
- ... (8 more removed lines; see GitHub link above)
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
```

#### 21. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L310-L312` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L76) · [Before (L310-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L310-L312)

```diff
-         return this._radiusTransition || (this._radiusTransition = Hk.b.CreateAnimation("radius", Hk.b.ANIMATIONTYPE_FLOAT, 60, lk.EasingFunction)), mk = Hk.b.TransitionTo("radius", Mk, this._attachedCamera, this._attachedCamera.XF(), 60, this._radiusTransition, this._framingTime … [truncated]
-           this.stopAllAnimations(), fk && fk(), this._attachedCamera && this._attachedCamera.useInputToRestoreState && this._attachedCamera.storeState()
-         })), mk && this._animatables.push(mk), !0
+         return this._cachedSize
```

#### 22. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L314-L318` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L78-L79) · [Before (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L314-L318)

```diff
-       _calculateLowerRadiusFromModelBoundingSphere(kk, ek) {
-         const ik = this._attachedCamera;
-         if (!ik) return 0;
-         let Dk = ik._calculateLowerRadiusFromModelBoundingSphere(kk, ek, this._radiusScale);
-         return ik.lowerRadiusLimit && this._mode === lk.IgnoreBoundsSizeMode && (Dk = Dk < ik.lowerRadiusLimit ? ik.lowerRadiusLimit : Dk), ik.upperRadiusLimit && (Dk = Dk > ik.upperRadiusLimit ? ik.upperRadiusLimit : Dk), Dk
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
```

#### 23. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L320-L334` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L81-L82) · [Before (L320-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L320-L334)

```diff
-       _maintainCameraAboveGround() {
-         if (this._elevationReturnTime < 0) return;
-         const kk = Kk.d.Now - this._lastInteractionTime,
-           ek = .5 * Math.PI - this._defaultElevation,
-           ik = .5 * Math.PI;
-         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > ik && kk >= this._elevationReturnWaitTime) {
-           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Hk.b.CreateAnimation("beta", Hk.b.ANIMATIONTYPE_FLOAT, 60, lk.EasingFunction));
-           const kk = Hk.b.TransitionTo("beta", ek, this._attachedCamera, this._attachedCamera.XF(), 60, this._betaTransition, this._elevationReturnTime, (() => {
-             this._clearAnimationLocks(), this.stopAllAnimations()
-           }));
-           kk && this._animatables.push(kk)
-         }
-       }
-       _clearAnimationLocks() {
-         this._betaIsAnimating = !1
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
```

#### 24. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L336-L337` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L84-L86) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L336-L337)

```diff
-       _applyUserInteraction() {
-         this.isUserIsMoving && (this._lastInteractionTime = Kk.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       updateSamplingMode(CC) {
+         let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(CC, this._texture, this._texture.generateMipMaps && zC)
```

#### 25. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L339-L340` → after: `L88-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L88-L89) · [Before (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L339-L340)

```diff
-       stopAllAnimations() {
-         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
```

#### 26. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L342-L343` → after: `L91-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L91-L92) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L342-L343)

```diff
-       get isUserIsMoving() {
-         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
```

#### 27. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L346-L753` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L95-L96) · [Before (L346-L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L346-L753)

```diff
-     lk.EasingFunction = new class extends Uk {
-       constructor() {
-         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
-         super(), this.exponent = kk
-       }
-       easeInCore(kk) {
-         return this.exponent <= 0 ? kk : (Math.exp(this.exponent * kk) - 1) / (Math.exp(this.exponent) - 1)
-       }
-     }, lk.EasingMode = Uk.EASINGMODE_EASEINOUT, lk.IgnoreBoundsSizeMode = 0, lk.FitFrustumSidesMode = 1;
-     var pk = ik(39782),
-       yk = ik(39778),
-       Yk = ik(39804),
-       Lk = ik(39662);
-     let Ck = (() => {
-         var kk;
-         let ek, ik = [],
- ... (392 more removed lines; see GitHub link above)
+     var WC, NC = ZC(39842),
+       MC = ZC(39694);
```

#### 28. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L756` → after: `L99-L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L99-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L99-L110) · [Before (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L756)

```diff
-       let ek, ik, Sk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk = [],
+       let zC, ZC, qC, WC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC, dC, mC, HC, EC, lC = FC,
+         XC = [],
+         cC = [],
+         uC = [],
+         rC = [],
+         sC = [],
+         TC = [],
+         aC = [],
+         tC = [],
+         DC = [],
+         jC = [],
+         yC = [],
```

#### 29. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L777-L784` → after: `L131-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L131-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L131-L133) · [Before (L777-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L777-L784)

```diff
-       return kk = class {
-         constructor() {
-           this.camera = (0, Dk.e)(this, Hk), this.keysUp = (0, Dk.e)(this, wk, [38]), this.keysDown = ((0, Dk.e)(this, lk), (0, Dk.e)(this, pk, [40])), this.keysLeft = ((0, Dk.e)(this, yk), (0, Dk.e)(this, Yk, [37])), this.keysRight = ((0, Dk.e)(this, Ck), (0, Dk.e)(this, Ak, [39 … [truncated]
-             ctrl: !1,
-             alt: !1
-           }, this._keyboardConditions = {
-             modifiers: this._keyboardModifiers
-           }, this._rotateDirection = new bk.l, this._panDirection = new bk.l
+       return CC = class extends lC {
+         set hasAlpha(CC) {
+           this._hasAlpha = CC
```

#### 30. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L786-L787` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L135-L136) · [Before (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L786-L787)

```diff
-         get useAltToZoom() {
-           return this._useAltToZoom
+         get hasAlpha() {
+           return this._hasAlpha
```

#### 31. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L789-L790` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L138-L139) · [Before (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L789-L790)

```diff
-         set useAltToZoom(kk) {
-           this._useAltToZoom = kk, this._applyUseAltToZoomToInputMap()
+         set getAlphaFromRGB(CC) {
+           this._getAlphaFromRGB !== CC && (this._getAlphaFromRGB = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
```

#### 32. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L792-L806` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L141-L142) · [Before (L792-L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L792-L806)

```diff
-         _applyUseAltToZoomToInputMap() {
-           if (!this.camera?.movement) return;
-           const kk = this.camera.movement.input,
-             ek = kk.getEntry("keyboard", "zoom", {
-               modifiers: {
-                 alt: !0
-               }
-             });
-           !this._useAltToZoom && ek ? kk.inputMap.splice(kk.inputMap.indexOf(ek), 1) : this._useAltToZoom && !ek && kk.addEntry({
-             source: "keyboard",
-             modifiers: {
-               alt: !0
-             },
-             interaction: "zoom"
-           })
+         get getAlphaFromRGB() {
+           return this._getAlphaFromRGB
```

#### 33. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L808-L822` → after: `L144-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L144-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L144-L239) · [Before (L808-L822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L808-L822)

```diff
-         attachControl(kk) {
-           kk = Lk.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XF(), this._engine = this._scene.JU(), this._applyUseAltToZoomToInputMap(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
-             this._keys.length = 0
-           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ek => {
-             const ik = ek.event;
-             if (!ik.metaKey)
-               if (ek.type === sk.b.KEYDOWN) {
-                 if (this._ctrlPressed = ik.ctrlKey, this._altPressed = ik.altKey, -1 !== this.keysUp.indexOf(ik.keyCode) || -1 !== this.keysDown.indexOf(ik.keyCode) || -1 !== this.keysLeft.indexOf(ik.keyCode) || -1 !== this.keysRight.indexOf(ik.keyCode) || -1 !== this.keysReset.i … [truncated]
-                   -1 === this._keys.indexOf(ik.keyCode) && this._keys.push(ik.keyCode), ik.preventDefault && (kk || ik.preventDefault())
-                 }
-               } else if (-1 !== this.keysUp.indexOf(ik.keyCode) || -1 !== this.keysDown.indexOf(ik.keyCode) || -1 !== this.keysLeft.indexOf(ik.keyCode) || -1 !== this.keysRight.indexOf(ik.keyCode) || -1 !== this.keysReset.indexOf(ik.keyCode) || -1 !== this.keysZoomIn.indexOf(ik.k … [truncated]
-               const ek = this._keys.indexOf(ik.keyCode);
-               ek >= 0 && this._keys.splice(ek, 1), ik.preventDefault && (kk || ik.preventDefault())
-             }
-           })))
+         set coordinatesIndex(CC) {
+           this._coordinatesIndex !== CC && (this._coordinatesIndex = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
+         }
+         get coordinatesIndex() {
+           return this._coordinatesIndex
+         }
+         set coordinatesMode(CC) {
+           this._coordinatesMode !== CC && (this._coordinatesMode = CC, this._scene && this._scene.markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this))))
+         }
+         get coordinatesMode() {
+           return this._coordinatesMode
+         }
+         get wrapU() {
+           return this._wrapU
+         }
+         set wrapU(CC) {
+ ... (80 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L824-L825` → after: `L241-L242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L241-L242) · [Before (L824-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L824-L825)

```diff
-         detachControl() {
-           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         set onDispose(CC) {
+           this._onDisposeObserver && this.Tm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Tm.add(CC)
```

#### 35. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L827-L845` → after: `L244-L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L244-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L244-L361) · [Before (L827-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L827-L845)

```diff
-         checkInputs() {
-           if (this._onKeyboardObserver) {
-             const kk = this.camera,
-               ek = kk.movement.input;
-             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
-             const ik = this._rotateDirection.set(0, 0),
-               Dk = this._panDirection.set(0, 0);
-             let fk = 0,
-               Sk = 0;
-             for (let bk = 0; bk < this._keys.length; bk++) {
-               const rk = this._keys[bk];
-               if (this._keyboardConditions.key = rk, -1 === this.keysReset.indexOf(rk)) {
-                 const kk = ek.resolveInteraction("keyboard", this._keyboardConditions);
-                 if (kk)
-                   if ("pan" === kk.interaction) Sk = Math.max(Sk, kk.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(rk) ? Dk.x -= 1 : -1 !== this.keysRight.indexOf(rk) ? Dk.x += 1 : -1 !== this.keysUp.indexOf(rk) ? Dk.y += 1 : -1 !== this.keysDown.index … [truncated]
-                   else if ("zoom" === kk.interaction) {
- ... (3 more removed lines; see GitHub link above)
+         get isBlocking() {
+           return !0
+         }
+         get loadingError() {
+           return this._loadingError
+         }
+         get errorObject() {
+           return this._errorObject
+         }
+         constructor(zC) {
+           let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           super(null), this.uniqueId = ((0, QC.n)(this, XC), (0, QC.n)(this, cC, void 0)), this.name = ((0, QC.n)(this, uC), (0, QC.n)(this, rC, void 0)), this.displayName = ((0, QC.n)(this, sC), (0, QC.n)(this, TC, void 0)), this.metadata = ((0, QC.n)(this, aC), (0, QC.n)(this,  … [truncated]
+         }
+         Km() {
+           return this._scene
+         }
+ ... (102 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L850-L851` → after: `L366-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L366-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L366-L384) · [Before (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L850-L851)

```diff
-         getClassName() {
-           return "ArcRotateCameraKeyboardMoveInput"
+         serialize() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (!this.name && !CC) return null;
+           const zC = NC.d.Serialize(this);
+           return NC.d.AppendSerializedAnimations(this, zC), zC
+         }
+         static WhenAllReady(CC, zC) {
+           let ZC = CC.length;
+           if (0 !== ZC)
+             for (let QC = 0; QC < CC.length; QC++) {
+               const wC = CC[QC];
+               if (wC.isReady()) 0 === --ZC && zC();
+               else {
+                 const CC = wC.onLoadObservable;
+                 CC ? CC.addOnce((() => {
+                   0 === --ZC && zC()
+ ... (3 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L853-L854` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L386-L387) · [Before (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L853-L854)

```diff
-         getSimpleName() {
-           return "keyboard"
+         static _IsScene(CC) {
+           return "Scene" === CC.getClassName()
```

#### 38. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L857-L858` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L390-L391) · [Before (L857-L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L857-L858)

```diff
-         const bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], rk = [(0, fk.I)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.I)()], xk = [(0, fk.I)()], nk = [(0, fk.I)()], Uk = [(0, fk.I)()], (0, Dk.d)(kk, null, Uk, {
+         const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(lC[Symbol.metadata] ?? null) : void 0;
+         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], qC = [(0, wC.M)()], WC = [(0, wC.M)()], MC = [(0, wC.M)("hasAlpha")], gC = [(0, wC.M)("getAlphaFromRGB")], SC = [(0, wC.M)()], pC = [(0, wC.M)("coordinatesIndex")], PC = [(0, wC.M)()], GC = [(0, wC.M)("coordinatesMode")], RC = [(0,  … [truncated]
```

#### 39. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L860` → after: `L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L393) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L860)

```diff
-           name: "useAltToZoom",
+           name: "wrapU",
```

#### 40. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L864-L865` → after: `L397-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L397-L398) · [Before (L864-L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L864-L865)

```diff
-             has: kk => "useAltToZoom" in kk,
-             get: kk => kk.useAltToZoom
+             has: CC => "wrapU" in CC,
+             get: CC => CC.wrapU
```

#### 41. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L868` → after: `L401-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L401-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L401-L491) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L868)

```diff
-         }, null, Hk), (0, Dk.d)(null, null, ek, {
+         }, null, XC), (0, QC.j)(CC, null, AC, {
+           kind: "getter",
+           name: "wrapV",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "wrapV" in CC,
+             get: CC => CC.wrapV
+           },
+           metadata: bC
+         }, null, XC), (0, QC.j)(CC, null, IC, {
+           kind: "getter",
+           name: "isCube",
+           static: !1,
+           private: !1,
+           access: {
+ ... (75 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L870` → after: `L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L493) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L870)

```diff
-           name: "keysUp",
+           name: "uniqueId",
```

#### 43. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L874-L875` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L497-L498) · [Before (L874-L875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L874-L875)

```diff
-             has: kk => "keysUp" in kk,
-             get: kk => kk.keysUp,
+             has: CC => "uniqueId" in CC,
+             get: CC => CC.uniqueId,
```

#### 44. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L877` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L500) · [Before (L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L877)

```diff
-               kk.keysUp = ek
+               CC.uniqueId = zC
```

#### 45. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L881` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L504) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L881)

```diff
-         }, wk, lk), (0, Dk.d)(null, null, ik, {
+         }, cC, uC), (0, QC.j)(null, null, ZC, {
```

#### 46. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L883` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L506) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L883)

```diff
-           name: "keysDown",
+           name: "name",
```

#### 47. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L887-L888` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L510-L511) · [Before (L887-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L887-L888)

```diff
-             has: kk => "keysDown" in kk,
-             get: kk => kk.keysDown,
+             has: CC => "name" in CC,
+             get: CC => CC.name,
```

#### 48. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L890` → after: `L513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L513) · [Before (L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L890)

```diff
-               kk.keysDown = ek
+               CC.name = zC
```

#### 49. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L894` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L517) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L894)

```diff
-         }, pk, yk), (0, Dk.d)(null, null, Sk, {
+         }, rC, sC), (0, QC.j)(null, null, qC, {
```

#### 50. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L896` → after: `L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L519) · [Before (L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L896)

```diff
-           name: "keysLeft",
+           name: "displayName",
```

#### 51. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L900-L901` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L523-L524) · [Before (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L900-L901)

```diff
-             has: kk => "keysLeft" in kk,
-             get: kk => kk.keysLeft,
+             has: CC => "displayName" in CC,
+             get: CC => CC.displayName,
```

#### 52. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L903` → after: `L526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L526) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L903)

```diff
-               kk.keysLeft = ek
+               CC.displayName = zC
```

#### 53. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L907` → after: `L530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L530) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L907)

```diff
-         }, Yk, Ck), (0, Dk.d)(null, null, rk, {
+         }, TC, aC), (0, QC.j)(null, null, WC, {
```

#### 54. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L909` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L532) · [Before (L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L909)

```diff
-           name: "keysRight",
+           name: "metadata",
```

#### 55. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L913-L914` → after: `L536-L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L536-L537) · [Before (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L913-L914)

```diff
-             has: kk => "keysRight" in kk,
-             get: kk => kk.keysRight,
+             has: CC => "metadata" in CC,
+             get: CC => CC.metadata,
```

#### 56. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L916` → after: `L539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L539) · [Before (L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L916)

```diff
-               kk.keysRight = ek
+               CC.metadata = zC
```

#### 57. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L920` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L543) · [Before (L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L920)

```diff
-         }, Ak, jk), (0, Dk.d)(null, null, Pk, {
+         }, tC, DC), (0, QC.j)(null, null, MC, {
```

#### 58. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L922` → after: `L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L545) · [Before (L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L922)

```diff
-           name: "keysReset",
+           name: "_hasAlpha",
```

#### 59. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L926-L927` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L549-L550) · [Before (L926-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L926-L927)

```diff
-             has: kk => "keysReset" in kk,
-             get: kk => kk.keysReset,
+             has: CC => "_hasAlpha" in CC,
+             get: CC => CC._hasAlpha,
```

#### 60. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L929` → after: `L552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L552) · [Before (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L929)

```diff
-               kk.keysReset = ek
+               CC._hasAlpha = zC
```

#### 61. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L933` → after: `L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L556) · [Before (L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L933)

```diff
-         }, dk, Vk), (0, Dk.d)(null, null, mk, {
+         }, jC, yC), (0, QC.j)(null, null, gC, {
```

#### 62. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L935` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L558) · [Before (L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L935)

```diff
-           name: "keysZoomIn",
+           name: "_getAlphaFromRGB",
```

#### 63. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L939-L940` → after: `L562-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L562-L563) · [Before (L939-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L939-L940)

```diff
-             has: kk => "keysZoomIn" in kk,
-             get: kk => kk.keysZoomIn,
+             has: CC => "_getAlphaFromRGB" in CC,
+             get: CC => CC._getAlphaFromRGB,
```

#### 64. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L942` → after: `L565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L565) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L942)

```diff
-               kk.keysZoomIn = ek
+               CC._getAlphaFromRGB = zC
```

#### 65. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L946` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L569) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L946)

```diff
-         }, Fk, uk), (0, Dk.d)(null, null, Mk, {
+         }, LC, UC), (0, QC.j)(null, null, SC, {
```

#### 66. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L948` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L571) · [Before (L948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L948)

```diff
-           name: "keysZoomOut",
+           name: "level",
```

#### 67. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L952-L953` → after: `L575-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L575-L576) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L952-L953)

```diff
-             has: kk => "keysZoomOut" in kk,
-             get: kk => kk.keysZoomOut,
+             has: CC => "level" in CC,
+             get: CC => CC.level,
```

#### 68. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L955` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L578) · [Before (L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L955)

```diff
-               kk.keysZoomOut = ek
+               CC.level = zC
```

#### 69. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L959` → after: `L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L582) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L959)

```diff
-         }, qk, Ik), (0, Dk.d)(null, null, Kk, {
+         }, BC, OC), (0, QC.j)(null, null, pC, {
```

#### 70. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L961` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L584) · [Before (L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L961)

```diff
-           name: "panningSensibility",
+           name: "_coordinatesIndex",
```

#### 71. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L965-L966` → after: `L588-L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L588-L589) · [Before (L965-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L965-L966)

```diff
-             has: kk => "panningSensibility" in kk,
-             get: kk => kk.panningSensibility,
+             has: CC => "_coordinatesIndex" in CC,
+             get: CC => CC._coordinatesIndex,
```

#### 72. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L968` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L591) · [Before (L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L968)

```diff
-               kk.panningSensibility = ek
+               CC._coordinatesIndex = zC
```

#### 73. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L972` → after: `L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L595) · [Before (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L972)

```diff
-         }, zk, Qk), (0, Dk.d)(null, null, xk, {
+         }, kC, VC), (0, QC.j)(null, null, PC, {
```

#### 74. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L974` → after: `L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L597) · [Before (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L974)

```diff
-           name: "zoomingSensibility",
+           name: "optimizeUVAllocation",
```

#### 75. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L978-L979` → after: `L601-L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L601-L602) · [Before (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L978-L979)

```diff
-             has: kk => "zoomingSensibility" in kk,
-             get: kk => kk.zoomingSensibility,
+             has: CC => "optimizeUVAllocation" in CC,
+             get: CC => CC.optimizeUVAllocation,
```

#### 76. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L981` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L604) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L981)

```diff
-               kk.zoomingSensibility = ek
+               CC.optimizeUVAllocation = zC
```

#### 77. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L985` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L608) · [Before (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L985)

```diff
-         }, vk, Ek), (0, Dk.d)(null, null, nk, {
+         }, Cz, zz), (0, QC.j)(null, null, GC, {
```

#### 78. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L987` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L610) · [Before (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L987)

```diff
-           name: "angularSpeed",
+           name: "_coordinatesMode",
```

#### 79. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L991-L992` → after: `L614-L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L614-L615) · [Before (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L991-L992)

```diff
-             has: kk => "angularSpeed" in kk,
-             get: kk => kk.angularSpeed,
+             has: CC => "_coordinatesMode" in CC,
+             get: CC => CC._coordinatesMode,
```

#### 80. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L994` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L617) · [Before (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L994)

```diff
-               kk.angularSpeed = ek
+               CC._coordinatesMode = zC
```

#### 81. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L998-L1044` → after: `L621-L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L621-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L621-L630) · [Before (L998-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L998-L1044)

```diff
-         }, hk, ak), bk && Object.defineProperty(kk, Symbol.metadata, {
-           enumerable: !0,
-           configurable: !0,
-           writable: !0,
-           value: bk
-         })
-       })(), kk
-     })();
-     Yk.e.ArcRotateCameraKeyboardMoveInput = dk;
-     var Vk = ik(37372),
-       Fk = ik(39758);
-     let uk = (() => {
-       var kk;
-       let ek, ik, Sk, Pk = [],
-         mk = [],
-         Kk = [],
- ... (31 more removed lines; see GitHub link above)
+         }, Zz, Qz), (0, QC.j)(null, null, xC, {
+           kind: "field",
+           name: "wrapR",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "wrapR" in CC,
+             get: CC => CC.wrapR,
+             set: (CC, zC) => {
+               CC.wrapR = zC
```

#### 82. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1046-L1102` → after: `L632-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L632-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L632-L634) · [Before (L1046-L1102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1046-L1102)

```diff
-             Dk && (this.zoomToMouseLocation ? (this._hitPlane || this._updateHitPlane(), this._zoomToMouse(Dk)) : this.camera.movement.zoomAccumulatedPixels += Dk), ik.preventDefault && (kk || ik.preventDefault())
-           }, this._observer = this.camera.XF()._inputManager._addCameraPointerObserver(this._wheel, Mk.c.POINTERWHEEL), this.zoomToMouseLocation && this._inertialPanning.A_(0)
-         }
-         detachControl() {
-           this._observer && (this.camera.XF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null, this._wheel = null)
-         }
-         checkInputs() {
-           if (!this.zoomToMouseLocation) return;
-           const kk = this.camera;
-           if (Math.abs(this._zoomToMouseRadiusOffset) + this._inertialPanning.lengthSquared() + Math.abs(kk.inertialAlphaOffset) + Math.abs(kk.inertialBetaOffset) + Math.abs(kk.inertialRadiusOffset)) {
-             this._updateHitPlane(), kk.target.addInPlace(this._inertialPanning), kk.radius -= this._zoomToMouseRadiusOffset;
-             const ek = kk.movement.getFrameIndependentDecay(kk.inertia);
-             this._inertialPanning.scaleInPlace(ek), this._zoomToMouseRadiusOffset *= ek, this._zeroIfClose(this._inertialPanning), Math.abs(this._zoomToMouseRadiusOffset) < xk.d && (this._zoomToMouseRadiusOffset = 0)
-           }
-         }
-         getClassName() {
- ... (41 more removed lines; see GitHub link above)
+           },
+           metadata: bC
+         }, wz, bz), (0, QC.j)(null, null, JC, {
```

#### 83. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1104` → after: `L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L636) · [Before (L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1104)

```diff
-           name: "wheelPrecision",
+           name: "anisotropicFilteringLevel",
```

#### 84. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1108-L1109` → after: `L640-L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L640-L641) · [Before (L1108-L1109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1108-L1109)

```diff
-             has: kk => "wheelPrecision" in kk,
-             get: kk => kk.wheelPrecision,
+             has: CC => "anisotropicFilteringLevel" in CC,
+             get: CC => CC.anisotropicFilteringLevel,
```

#### 85. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1111` → after: `L643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L643) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1111)

```diff
-               kk.wheelPrecision = ek
+               CC.anisotropicFilteringLevel = zC
```

#### 86. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1115` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L647) · [Before (L1115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1115)

```diff
-         }, Pk, mk), (0, Dk.d)(null, null, ik, {
+         }, nz, fz), (0, QC.j)(null, null, hC, {
```

#### 87. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1117` → after: `L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L649) · [Before (L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1117)

```diff
-           name: "zoomToMouseLocation",
+           name: "invertZ",
```

#### 88. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1121-L1122` → after: `L653-L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L653-L654) · [Before (L1121-L1122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1121-L1122)

```diff
-             has: kk => "zoomToMouseLocation" in kk,
-             get: kk => kk.zoomToMouseLocation,
+             has: CC => "invertZ" in CC,
+             get: CC => CC.invertZ,
```

#### 89. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1124` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L656) · [Before (L1124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1124)

```diff
-               kk.zoomToMouseLocation = ek
+               CC.invertZ = zC
```

#### 90. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1128` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L660) · [Before (L1128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1128)

```diff
-         }, Kk, nk), (0, Dk.d)(null, null, Sk, {
+         }, oz, qz), (0, QC.j)(null, null, KC, {
```

#### 91. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1130` → after: `L662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L662) · [Before (L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1130)

```diff
-           name: "wheelDeltaPercentage",
+           name: "lodLevelInAlpha",
```

#### 92. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1134-L1135` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L666-L667) · [Before (L1134-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1134-L1135)

```diff
-             has: kk => "wheelDeltaPercentage" in kk,
-             get: kk => kk.wheelDeltaPercentage,
+             has: CC => "lodLevelInAlpha" in CC,
+             get: CC => CC.lodLevelInAlpha,
```

#### 93. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1137` → after: `L669-L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L669-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L669-L682) · [Before (L1137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1137)

```diff
-               kk.wheelDeltaPercentage = ek
+               CC.lodLevelInAlpha = zC
+             }
+           },
+           metadata: bC
+         }, Fz, Wz), (0, QC.j)(null, null, EC, {
+           kind: "field",
+           name: "isRenderTarget",
+           static: !1,
+           private: !1,
+           access: {
+             has: CC => "isRenderTarget" in CC,
+             get: CC => CC.isRenderTarget,
+             set: (CC, zC) => {
+               CC.isRenderTarget = zC
```

#### 94. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1147` → after: `L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L692) · [Before (L1147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1147)

```diff
-       })(), kk
+       })(), CC.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, CC
```

#### 95. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1149-L1222` → after: `L694-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L694-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L694-L711) · [Before (L1149-L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1149-L1222)

```diff
-     Yk.e.ArcRotateCameraMouseWheelInput = uk;
-     var qk, Ik, zk = ik(39447);
-     class Qk extends Yk.i {
-       constructor(kk) {
-         super(kk)
-       }
-       addMouseWheel() {
-         return this.add(new uk), this
-       }
-       addPointers() {
-         return this.add(new jk), this
-       }
-       addKeyboard() {
-         return this.add(new dk), this
-       }
-     }(qk = Qk.prototype).addVRDeviceOrientation ?? (qk.addVRDeviceOrientation = (0, zk.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Ik = Qk.prototype).addGamepad ?? (Ik.addGamepad = (0, zk.i)("ArcRotateCameraInputsManager", "addGamepad"));
- ... (58 more removed lines; see GitHub link above)
+     (WC = gC.prototype).forceSphericalPolynomialsRecompute ?? (WC.forceSphericalPolynomialsRecompute = (0, MC.f)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(gC.prototype, "sphericalPolynomial") || Object.defineProperty(gC.prototype, "sph … [truncated]
+   },
+   40303: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       d: () => xC,
+       h: () => RC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36987),
+       nC = ZC(36963),
+       fC = ZC(39803),
+       oC = ZC(37002),
+       qC = ZC(39694),
+       FC = ZC(39712),
+       WC = ZC(39921),
+ ... (2 more added lines; see GitHub link above)
```

#### 96. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1225` → after: `L714-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L714-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L714-L737) · [Before (L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1225)

```diff
-       return isNaN(kk) ? ek : kk
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const QC = zC.width,
+         wC = zC.height;
+       if (CC instanceof Float32Array) {
+         let zC = CC.byteLength / CC.BYTES_PER_ELEMENT;
+         const ZC = new Uint8Array(zC);
+         for (; --zC >= 0;) {
+           let QC = CC[zC];
+           QC < 0 ? QC = 0 : QC > 1 && (QC = 1), ZC[zC] = 255 * QC
+         }
+         CC = ZC
+       }
+       const bC = document.createElement("canvas");
+       bC.width = QC, bC.height = wC;
+       const nC = bC.getContext("2d");
+       if (!nC) return null;
+ ... (8 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1229-L1237` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L760) · [Before (L1229-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1229-L1237)

```diff
-         let ek, ik, Pk, Mk, Kk, Uk, Hk, Yk, Ck, Ak, jk, sk, dk, Vk, Fk, uk, qk, Ik, zk, vk, Ek, hk, tk, Xk, Bk, ck, Tk, Zk, Ok = yk.e,
-           gk = [],
-           Gk = [],
-           Nk = [],
-           Rk = [],
-           Jk = [],
-           ke = [],
-           ee = [],
-           ie = [],
+         let zC, ZC, gC, RC, AC, xC, JC, IC, iC, vC, eC, hC, KC, YC = fC.b,
```

#### 98. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1256-L1433` → after: `L779-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L779-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L779-L789) · [Before (L1256-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1256-L1433)

```diff
-           Le = [],
-           Ce = [],
-           Ae = [],
-           je = [],
-           se = [],
-           de = [],
-           Ve = [],
-           Fe = [],
-           ue = [],
-           qe = [],
-           Ie = [],
-           ze = [],
-           Qe = [],
-           ve = [],
-           Ee = [],
-           he = [],
- ... (162 more removed lines; see GitHub link above)
+           BC = [],
+           OC = [],
+           kC = [],
+           VC = [],
+           Cz = [],
+           zz = [],
+           Zz = [];
+         return CC = class extends YC {
+           static _CreateVideoTexture(zC, ZC, QC) {
+             arguments.length > 5 && void 0 !== arguments[5] || CC.TRILINEAR_SAMPLINGMODE;
+             throw (0, qC.i)("VideoTexture")
```

#### 99. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1435-L1437` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L791-L792) · [Before (L1435-L1437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1435-L1437)

```diff
-           get zoomToMouseLocation() {
-             const kk = this.inputs.attached.mousewheel;
-             return !!kk && kk.zoomToMouseLocation
+           get noMipmap() {
+             return this._noMipmap
```

#### 100. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1439-L1441` → after: `L794-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L794-L795) · [Before (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1439-L1441)

```diff
-           set zoomToMouseLocation(kk) {
-             const ek = this.inputs.attached.mousewheel;
-             ek && (ek.zoomToMouseLocation = kk)
+           get mimeType() {
+             return this._mimeType
```

#### 101. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1443-L1445` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L797-L798) · [Before (L1443-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1443-L1445)

```diff
-           get wheelDeltaPercentage() {
-             const kk = this.inputs.attached.mousewheel;
-             return kk ? kk.wheelDeltaPercentage : 0
+           set isBlocking(CC) {
+             this._isBlocking = CC
```

#### 102. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1447-L1449` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L800-L801) · [Before (L1447-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1447-L1449)

```diff
-           set wheelDeltaPercentage(kk) {
-             const ek = this.inputs.attached.mousewheel;
-             ek && (ek.wheelDeltaPercentage = kk)
+           get isBlocking() {
+             return this._isBlocking
```

#### 103. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1451-L1452` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L803-L804) · [Before (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1451-L1452)

```diff
-           get _useCtrlForPanning() {
-             return this._useCtrlForPanningInternal
+           get invertY() {
+             return this._invertY
```

#### 104. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1454-L1465` → after: `L806-L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L806-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L806-L827) · [Before (L1454-L1465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1454-L1465)

```diff
-           set _useCtrlForPanning(kk) {
-             this._useCtrlForPanningInternal = kk;
-             const ek = this.movement.input,
-               ik = ek.getEntry("keyboard", "pan", {
-                 modifiers: {
-                   ctrl: !0
-                 }
-               });
-             !kk && ik ? ek.inputMap.splice(ek.inputMap.indexOf(ik), 1) : kk && !ik && ek.addEntry({
-               source: "keyboard",
-               modifiers: {
-                 ctrl: !0
+           constructor(zC, ZC, wC, nC) {
+             let fC, oC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : CC.TRILINEAR_SAMPLINGMODE,
+               qC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               WC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               NC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               MC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               gC = arguments.length > 9 ? arguments[9] : void 0,
+               SC = arguments.length > 10 ? arguments[10] : void 0,
+               pC = arguments.length > 11 ? arguments[11] : void 0,
+               GC = arguments.length > 12 ? arguments[12] : void 0,
+               RC = arguments.length > 13 ? arguments[13] : void 0;
+             super(ZC), this.url = ((0, QC.n)(this, dC), (0, QC.n)(this, mC, null)), this.uOffset = ((0, QC.n)(this, HC), (0, QC.n)(this, EC, 0)), this.vOffset = ((0, QC.n)(this, lC), (0, QC.n)(this, XC, 0)), this.uScale = ((0, QC.n)(this, cC), (0, QC.n)(this, uC, 1)), this.vScale … [truncated]
+             let AC = !1,
+               xC = null,
+               JC = !0;
+             "object" === typeof wC && null !== wC ? (fC = wC.noMipmap ?? !1, nC = wC.invertY ?? !PC.d, oC = wC.samplingMode ?? CC.TRILINEAR_SAMPLINGMODE, qC = wC.onLoad ?? null, WC = wC.onError ?? null, NC = wC.buffer ?? null, MC = wC.deleteBuffer ?? !1, gC = wC.format, SC = wC.m … [truncated]
+ ... (6 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1467-L1471` → after: `L829-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L829-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L829-L842) · [Before (L1467-L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1467-L1471)

```diff
-               interaction: "pan"
-             });
-             const Dk = ek.getEntry("pointer", "pan", {
-               modifiers: {
-                 ctrl: !0
+               eC = (zC, ZC) => {
+                 this._loadingError = !0, this._errorObject = {
+                   message: zC,
+                   exception: ZC
+                 }, WC && WC(zC, ZC), CC.OnTextureLoadErrorObservable.notifyObservers(this)
+               };
+             if (!this.url && !xC) return this._delayedOnLoad = vC, void(this._delayedOnError = eC);
+             if (this._texture = xC ?? this._getFromCache(this.url, fC, oC, this._invertY, AC, this.isCube), this._texture)
+               if (this._texture.isReady) FC.d.SetImmediate((() => vC()));
+               else {
+                 const CC = this._texture.onLoadedObservable.add(vC);
+                 this._texture.onErrorObservable.add((zC => {
+                   eC(zC.message, zC.exception), this._texture?.onLoadedObservable.remove(CC)
+                 }))
```

#### 106. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1473-L1549` → after: `L844-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L844-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L844-L851) · [Before (L1473-L1549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1473-L1549)

```diff
-             });
-             !kk && Dk ? ek.inputMap.splice(ek.inputMap.indexOf(Dk), 1) : kk && !Dk && ek.addEntry({
-               source: "pointer",
-               button: 0,
-               modifiers: {
-                 ctrl: !0
-               },
-               interaction: "pan"
-             })
-           }
-           get _panningMouseButton() {
-             return this._panningMouseButtonInternal
-           }
-           set _panningMouseButton(kk) {
-             this._panningMouseButtonInternal = kk;
-             const ek = this.movement.input.getEntry("pointer", "pan", {
- ... (61 more removed lines; see GitHub link above)
+             else if (IC && IC.useDelayedTextureLoading) this.delayLoadState = 4, this._delayedOnLoad = vC, this._delayedOnError = eC;
+             else {
+               try {
+                 this._texture = iC.createTexture(this.url, fC, this._invertY, IC, oC, vC, eC, this._buffer, void 0, this._format, this._forcedExtension, SC, pC, GC, AC)
+               } catch (hC) {
+                 throw eC("error loading", hC), hC
+               }
+               MC && (this._buffer = null)
```

#### 107. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1563-L1580` → after: `L854-L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L854-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L854-L903) · [Before (L1563-L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1563-L1580)

```diff
-           interpolateTo() {
-             let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.alpha,
-               ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.beta,
-               ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.radius,
-               Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.target,
-               fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.targetScreenOffset,
-               Sk = arguments.length > 5 ? arguments[5] : void 0;
-             this.inertialAlphaOffset = 0, this.inertialBetaOffset = 0, this.inertialRadiusOffset = 0, this.inertialPanningX = 0, this.inertialPanningY = 0, null != Sk ? this._currentInterpolationFactor = Sk : 0 !== this.restoreStateInterpolationFactor ? this._currentInterpolation … [truncated]
-           }
-           _isSynchronizedViewMatrix() {
-             return !!super._isSynchronizedViewMatrix() && (this._cache.xR.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius && this._cache.targetScreenOffset.equals(this.targetScreenOffset … [truncated]
-           }
-           attachControl(kk, ek) {
-             let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
-               Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2;
-             const fk = arguments;
- ... (2 more removed lines; see GitHub link above)
+           updateURL(CC) {
+             let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               ZC = arguments.length > 2 ? arguments[2] : void 0,
+               QC = arguments.length > 3 ? arguments[3] : void 0;
+             this.url && (this.releaseInternalTexture(), this.Km().markAllMaterialsAsDirty(1, (CC => CC.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = CC), this.url = CC, this._buffer = zC, this._forcedExtension = QC, this.delayLoadState = 4;
+             const wC = this._delayedOnLoad;
+             this._delayedOnLoad = () => {
+               wC ? wC() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), ZC && ZC()
+             }, this.delayLoad()
+           }
+           delayLoad() {
+             if (4 !== this.delayLoadState) return;
+             const CC = this.Km();
+             if (!CC) return;
+             let zC = this.url;
+             !zC && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (zC = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(zC, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+ ... (34 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1583-L1584` → after: `L937-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L937-L938) · [Before (L1583-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1583-L1584)

```diff
-           detachControl() {
-             this.inputs.detachElement(), this._reset && this._reset()
+           getClassName() {
+             return "Texture"
```

#### 109. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1586-L1589` → after: `L940-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L940-L941) · [Before (L1586-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1586-L1589)

```diff
-           _applyRotationAndZoomDelta(kk, ek, ik) {
-             const Dk = this.invertRotation ? -1 : 1;
-             let fk = kk * this._calculateHandednessMultiplier();
-             this.beta < 0 && (fk *= -1), this.alpha += fk * Dk, this.beta += ek * Dk, this.radius -= ik
+           dispose() {
+             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
```

#### 110. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1591-L1605` → after: `L943-L957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L943-L957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L943-L957) · [Before (L1591-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1591-L1605)

```diff
-           _applyPanDelta(kk, ek) {
-             const ik = bk.j.eH[0].Z6(kk, ek, ek);
-             if (this._viewMatrix.invertToRef(this._cameraTransformMatrix), ik.multiplyInPlace(this.panningAxis), bk.o.TransformNormalToRef(ik, this._cameraTransformMatrix, this._transformedDirection), this.mapPanning) {
-               const kk = this.upVector,
-                 ek = bk.o.CrossToRef(this._transformedDirection, kk, this._transformedDirection);
-               bk.o.CrossToRef(kk, ek, this._transformedDirection)
-             } else this.panningAxis.y || (this._transformedDirection.y = 0);
-             if (!this._targetHost)
-               if (null !== this.panningDistanceLimit) {
-                 this._transformedDirection.addInPlace(this.xR);
-                 bk.o.DistanceSquared(this._transformedDirection, this.panningOriginTarget) <= this.panningDistanceLimit * this.panningDistanceLimit && this.xR.Fs(this._transformedDirection)
-               } else {
-                 if (this.parent) {
-                   const kk = bk.j.Matrix[0];
-                   this.parent.getWorldMatrix().getRotationMatrixToRef(kk), kk.transposeToRef(kk), bk.o.TransformCoordinatesToRef(this._transformedDirection, kk, this._transformedDirection)
+           static Parse(zC, ZC, QC) {
+             if (zC.customType) {
+               const CC = WC.d.Instantiate(zC.customType).Parse(zC, ZC, QC);
+               return zC.samplingMode && CC.updateSamplingMode && CC._samplingMode && CC._samplingMode !== zC.samplingMode && CC.updateSamplingMode(zC.samplingMode), CC
+             }
+             if (zC.isCube && !zC.isRenderTarget) return CC._CubeTextureParser(zC, ZC, QC);
+             const wC = void 0 !== zC.internalTextureUniqueId;
+             if (!zC.name && !zC.isRenderTarget && !wC) return null;
+             let bC;
+             if (wC) {
+               const CC = ZC.mg().getLoadedTexturesCache();
+               for (const ZC of CC)
+                 if (ZC.uniqueId === zC.internalTextureUniqueId) {
+                   bC = ZC;
+                   break
```

#### 111. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1623-L1631` → after: `L960-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L960-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L960-L963) · [Before (L1623-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1623-L1631)

```diff
-             if (kk) this.stopInterpolation();
-             else if (this._isInterpolating) {
-               let kk = !1;
-               const ek = this._scene.JU().getDeltaTime() / 1e3,
-                 ik = 1 - Math.pow(2, -ek / this._currentInterpolationFactor),
-                 Dk = Wk(this._goalRadius, this.radius);
-               if (!isNaN(this._goalTarget.x) || !isNaN(this._goalTarget.y) || !isNaN(this._goalTarget.z)) {
-                 const ek = bk.j.eH[0].set(Wk(this._goalTarget.x, this.xR.x), Wk(this._goalTarget.y, this.xR.y), Wk(this._goalTarget.z, this.xR.z));
-                 bk.o.LerpToRef(this.target, ek, ik, this.xR), 10 * bk.o.Distance(this.target, ek) / Dk < xk.d ? (this._goalTarget.set(NaN, NaN, NaN), this.target.Fs(ek), this.setTarget(this.target, !1, !0, !0)) : kk = !0
+             const nC = CC => {
+               if (CC && CC._texture && (CC._texture._cachedWrapU = null, CC._texture._cachedWrapV = null, CC._texture._cachedWrapR = null), zC.samplingMode) {
+                 const ZC = zC.samplingMode;
+                 CC && CC.samplingMode !== ZC && CC.updateSamplingMode(ZC)
```

#### 112. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1633-L1643` → after: `L965-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L965-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L965-L977) · [Before (L1633-L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1633-L1643)

```diff
-               if (!isNaN(this._goalAlpha) || !isNaN(this._goalBeta)) {
-                 const ek = bk.c.RotationAlphaBetaGammaToRef(Wk(this._goalAlpha, this.alpha), Wk(this._goalBeta, this.beta), 0, bk.j.Quaternion[0]),
-                   Dk = bk.c.RotationAlphaBetaGammaToRef(this.alpha, this.beta, 0, bk.j.Quaternion[1]),
-                   fk = bk.c.SlerpToRef(Dk, ek, ik, bk.j.Quaternion[2]);
-                 fk.normalize();
-                 const Sk = fk.toAlphaBetaGammaToRef(bk.j.eH[0]);
-                 if (this.alpha = Sk.x, this.beta = Sk.y, fk.isApprox(ek, xk.d / 5)) {
-                   this._goalAlpha = NaN, this._goalBeta = NaN;
-                   const kk = ek.toAlphaBetaGammaToRef(bk.j.eH[0]);
-                   this.alpha = kk.x, this.beta = kk.y
-                 } else kk = !0
+               if (CC && zC.animations)
+                 for (let ZC = 0; ZC < zC.animations.length; ZC++) {
+                   const QC = zC.animations[ZC],
+                     wC = (0, oC.c)("BABYLON.Animation");
+                   wC && CC.animations.push(wC.Parse(QC))
+                 }
+               CC && CC._texture && (wC && !bC && CC._texture._setUniqueId(zC.internalTextureUniqueId), CC._texture.label = zC.internalTextureLabel)
+             };
+             return GC.d.Parse((() => {
+               let wC = !0;
+               if (zC.noMipmap && (wC = !1), zC.mirrorPlane) {
+                 const QC = CC._CreateMirror(zC.name, zC.renderTargetSize, ZC, wC);
+                 return QC._waitingRenderList = zC.renderList, QC.mirrorPlane = NC.d.FromArray(zC.mirrorPlane), nC(QC), QC
```

#### 113. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1645-L1647` → after: `L979-L988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L979-L988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L979-L988) · [Before (L1645-L1647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1645-L1647)

```diff
-               if (isNaN(this._goalRadius) || (this.radius += (Dk - this.radius) * ik, Math.abs(Dk / this.radius - 1) < xk.d ? (this._goalRadius = NaN, this.radius = Dk) : kk = !0), !isNaN(this._goalTargetScreenOffset.x) || !isNaN(this._goalTargetScreenOffset.y)) {
-                 const ek = bk.j.Vector2[0].set(Wk(this._goalTargetScreenOffset.x, this.targetScreenOffset.x), Wk(this._goalTargetScreenOffset.y, this.targetScreenOffset.y));
-                 bk.l.LerpToRef(this.targetScreenOffset, ek, ik, this.targetScreenOffset), bk.l.Distance(this.targetScreenOffset, ek) < xk.d ? (this._goalTargetScreenOffset.set(NaN, NaN), this.targetScreenOffset.Fs(ek)) : kk = !0
+               if (zC.isRenderTarget && !zC.base64String) {
+                 let QC = null;
+                 if (zC.isCube) {
+                   if (ZC.reflectionProbes)
+                     for (let CC = 0; CC < ZC.reflectionProbes.length; CC++) {
+                       const QC = ZC.reflectionProbes[CC];
+                       if (QC.name === zC.name) return QC.cubeTexture
+                     }
+                 } else QC = CC._CreateRenderTargetTexture(zC.name, zC.renderTargetSize, ZC, wC, zC._creationFlags ?? 0), QC._waitingRenderList = zC.renderList;
+                 return nC(QC), QC
```

#### 114. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1649-L1773` → after: `L990-L1044`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L990-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L990-L1044) · [Before (L1649-L1773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1649-L1773)

```diff
-               this._isInterpolating = kk
-             }
-             this._checkLimits(), super._checkInputs()
-           }
-           _checkLimits() {
-             null === this.lowerBetaLimit || void 0 === this.lowerBetaLimit ? this.allowUpsideDown && this.beta > Math.PI && (this.beta = this.beta - 2 * Math.PI) : this.beta < this.lowerBetaLimit && (this.beta = this.lowerBetaLimit), null === this.upperBetaLimit || void 0 === thi … [truncated]
-           }
-           rebuildAnglesAndRadius() {
-             this._position.subtractToRef(this._getTargetPosition(), this._computationVector), 0 === this._upVector.x && 1 === this._upVector.y && 0 === this._upVector.z || bk.o.TransformCoordinatesToRef(this._computationVector, this._upToYMatrix, this._computationVector), this.ra … [truncated]
-             const kk = this.alpha;
-             var ek, ik;
-             this.alpha = function(kk) {
-               let ek = Math.PI / 2;
-               return 0 === kk.x && 0 === kk.z || (ek = Math.acos(kk.x / Math.sqrt(Math.pow(kk.x, 2) + Math.pow(kk.z, 2)))), kk.z < 0 && (ek = 2 * Math.PI - ek), ek
-             }(this._computationVector), this.beta = (ek = this._computationVector.y, ik = this.radius, Math.acos(ek / ik));
-             const Dk = Math.round((kk - this.alpha) / (2 * Math.PI));
- ... (109 more removed lines; see GitHub link above)
+               if (zC.isVideo) {
+                 const bC = CC._CreateVideoTexture(QC + (zC.url || zC.name), QC + (zC.src || zC.url), ZC, wC, zC.invertY, zC.samplingMode, zC.settings || {});
+                 return nC(bC), bC
+               } {
+                 let fC;
+                 if ("string" === typeof zC.base64String && zC.base64String && !bC) {
+                   const QC = {
+                       buffer: zC.base64String,
+                       noMipmap: !wC,
+                       invertY: zC.invertY,
+                       samplingMode: zC.samplingMode,
+                       useSRGBBuffer: zC._useSRGBBuffer ?? !1,
+                       creationFlags: zC._creationFlags ?? 0,
+                       onLoad: () => {
+                         nC(fC)
+                       }
+ ... (39 more added lines; see GitHub link above)
```

#### 115. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1777-L1817` → after: `L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1048) · [Before (L1777-L1817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1777-L1817)

```diff
-           ek = [(0, fk.I)()], ik = [(0, fk.I)()], Pk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.F)("target")], Uk = [(0, fk.u)("targetHost")], Hk = [(0, fk.I)()], Yk = [(0, fk.I)()], Ck = [(0, fk.I)()], Ak = [(0, fk.I)()], jk = [(0, fk.I)()], sk = [(0, fk.I)()], dk = [(0,  … [truncated]
-             kind: "getter",
-             name: "inertialAlphaOffset",
-             static: !1,
-             private: !1,
-             access: {
-               has: kk => "inertialAlphaOffset" in kk,
-               get: kk => kk.inertialAlphaOffset
-             },
-             metadata: Sk
-           }, null, gk), (0, Dk.d)(kk, null, Yk, {
-             kind: "getter",
-             name: "inertialBetaOffset",
-             static: !1,
-             private: !1,
-             access: {
- ... (25 more removed lines; see GitHub link above)
+           zC = [(0, wC.M)()], ZC = [(0, wC.M)()], gC = [(0, wC.M)()], RC = [(0, wC.M)()], AC = [(0, wC.M)()], xC = [(0, wC.M)()], JC = [(0, wC.M)()], IC = [(0, wC.M)()], iC = [(0, wC.M)()], vC = [(0, wC.M)()], eC = [(0, wC.M)()], hC = [(0, wC.M)()], KC = [(0, wC.M)()], (0, QC.j)( … [truncated]
```

#### 116. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1819-L1959` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1050) · [Before (L1819-L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1819-L1959)

```diff
-             name: "zoomToMouseLocation",
-             static: !1,
-             private: !1,
-             access: {
-               has: kk => "zoomToMouseLocation" in kk,
-               get: kk => kk.zoomToMouseLocation
-             },
-             metadata: Sk
-           }, null, gk), (0, Dk.d)(null, null, ek, {
-             kind: "field",
-             name: "alpha",
-             static: !1,
-             private: !1,
-             access: {
-               has: kk => "alpha" in kk,
-               get: kk => kk.alpha,
- ... (125 more removed lines; see GitHub link above)
+             name: "isBlocking",
```

#### 117. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1963-L1967` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1054-L1055) · [Before (L1963-L1967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1963-L1967)

```diff
-               has: kk => "lowerRadiusLimit" in kk,
-               get: kk => kk.lowerRadiusLimit,
-               set: (kk, ek) => {
-                 kk.lowerRadiusLimit = ek
-               }
+               has: CC => "isBlocking" in CC,
+               get: CC => CC.isBlocking
```

#### 118. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1970` → after: `L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1058) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1970)

```diff
-           }, we, le), (0, Dk.d)(null, null, Fk, {
+           }, null, dC), (0, QC.j)(null, null, zC, {
```

#### 119. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1972` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1060) · [Before (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1972)

```diff
-             name: "upperRadiusLimit",
+             name: "url",
```

#### 120. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1976-L1977` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1064-L1065) · [Before (L1976-L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1976-L1977)

```diff
-               has: kk => "upperRadiusLimit" in kk,
-               get: kk => kk.upperRadiusLimit,
+               has: CC => "url" in CC,
+               get: CC => CC.url,
```

#### 121. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1979` → after: `L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1067) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1979)

```diff
-                 kk.upperRadiusLimit = ek
+                 CC.url = zC
```

#### 122. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1983` → after: `L1071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1071) · [Before (L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1983)

```diff
-           }, pe, ye), (0, Dk.d)(null, null, uk, {
+           }, mC, HC), (0, QC.j)(null, null, ZC, {
```

#### 123. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1985` → after: `L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1073) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1985)

```diff
-             name: "lowerTargetYLimit",
+             name: "uOffset",
```

#### 124. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1989-L1990` → after: `L1077-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1077-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1077-L1078) · [Before (L1989-L1990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1989-L1990)

```diff
-               has: kk => "lowerTargetYLimit" in kk,
-               get: kk => kk.lowerTargetYLimit,
+               has: CC => "uOffset" in CC,
+               get: CC => CC.uOffset,
```

#### 125. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1992` → after: `L1080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1080) · [Before (L1992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1992)

```diff
-                 kk.lowerTargetYLimit = ek
+                 CC.uOffset = zC
```

#### 126. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1996` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1084) · [Before (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1996)

```diff
-           }, Ye, Le), (0, Dk.d)(null, null, qk, {
+           }, EC, lC), (0, QC.j)(null, null, gC, {
```

#### 127. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L1998` → after: `L1086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1086) · [Before (L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L1998)

```diff
-             name: "inertialPanningX",
+             name: "vOffset",
```

#### 128. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2002-L2003` → after: `L1090-L1091`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1090-L1091)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1090-L1091) · [Before (L2002-L2003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2002-L2003)

```diff
-               has: kk => "inertialPanningX" in kk,
-               get: kk => kk.inertialPanningX,
+               has: CC => "vOffset" in CC,
+               get: CC => CC.vOffset,
```

#### 129. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2005` → after: `L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1093) · [Before (L2005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2005)

```diff
-                 kk.inertialPanningX = ek
+                 CC.vOffset = zC
```

#### 130. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2009` → after: `L1097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1097) · [Before (L2009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2009)

```diff
-           }, Ce, Ae), (0, Dk.d)(null, null, Ik, {
+           }, XC, cC), (0, QC.j)(null, null, RC, {
```

#### 131. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2011` → after: `L1099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1099) · [Before (L2011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2011)

```diff
-             name: "inertialPanningY",
+             name: "uScale",
```

#### 132. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2015-L2016` → after: `L1103-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1103-L1104) · [Before (L2015-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2015-L2016)

```diff
-               has: kk => "inertialPanningY" in kk,
-               get: kk => kk.inertialPanningY,
+               has: CC => "uScale" in CC,
+               get: CC => CC.uScale,
```

#### 133. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2018` → after: `L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1106) · [Before (L2018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2018)

```diff
-                 kk.inertialPanningY = ek
+                 CC.uScale = zC
```

#### 134. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2022` → after: `L1110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1110) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2022)

```diff
-           }, je, se), (0, Dk.d)(null, null, zk, {
+           }, uC, rC), (0, QC.j)(null, null, AC, {
```

#### 135. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2024` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1112) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2024)

```diff
-             name: "pinchToPanMaxDistance",
+             name: "vScale",
```

#### 136. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2028-L2029` → after: `L1116-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1116-L1117) · [Before (L2028-L2029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2028-L2029)

```diff
-               has: kk => "pinchToPanMaxDistance" in kk,
-               get: kk => kk.pinchToPanMaxDistance,
+               has: CC => "vScale" in CC,
+               get: CC => CC.vScale,
```

#### 137. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2031` → after: `L1119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1119) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2031)

```diff
-                 kk.pinchToPanMaxDistance = ek
+                 CC.vScale = zC
```

#### 138. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2035` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1123) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2035)

```diff
-           }, de, Ve), (0, Dk.d)(null, null, vk, {
+           }, sC, TC), (0, QC.j)(null, null, xC, {
```

#### 139. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2037` → after: `L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1125) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2037)

```diff
-             name: "panningDistanceLimit",
+             name: "uAng",
```

#### 140. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2041-L2042` → after: `L1129-L1130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1129-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1129-L1130) · [Before (L2041-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2041-L2042)

```diff
-               has: kk => "panningDistanceLimit" in kk,
-               get: kk => kk.panningDistanceLimit,
+               has: CC => "uAng" in CC,
+               get: CC => CC.uAng,
```

#### 141. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2044` → after: `L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1132) · [Before (L2044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2044)

```diff
-                 kk.panningDistanceLimit = ek
+                 CC.uAng = zC
```

#### 142. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2048` → after: `L1136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1136) · [Before (L2048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2048)

```diff
-           }, Fe, ue), (0, Dk.d)(null, null, Ek, {
+           }, aC, tC), (0, QC.j)(null, null, JC, {
```

#### 143. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2050` → after: `L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1138) · [Before (L2050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2050)

```diff
-             name: "panningOriginTarget",
+             name: "vAng",
```

#### 144. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2054-L2055` → after: `L1142-L1143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1142-L1143) · [Before (L2054-L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2054-L2055)

```diff
-               has: kk => "panningOriginTarget" in kk,
-               get: kk => kk.panningOriginTarget,
+               has: CC => "vAng" in CC,
+               get: CC => CC.vAng,
```

#### 145. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2057` → after: `L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1145) · [Before (L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2057)

```diff
-                 kk.panningOriginTarget = ek
+                 CC.vAng = zC
```

#### 146. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2061` → after: `L1149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1149) · [Before (L2061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2061)

```diff
-           }, qe, Ie), (0, Dk.d)(null, null, Xk, {
+           }, DC, jC), (0, QC.j)(null, null, IC, {
```

#### 147. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2063` → after: `L1151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1151) · [Before (L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2063)

```diff
-             name: "zoomOnFactor",
+             name: "wAng",
```

#### 148. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2067-L2068` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1155-L1156) · [Before (L2067-L2068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2067-L2068)

```diff
-               has: kk => "zoomOnFactor" in kk,
-               get: kk => kk.zoomOnFactor,
+               has: CC => "wAng" in CC,
+               get: CC => CC.wAng,
```

#### 149. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2070` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1158) · [Before (L2070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2070)

```diff
-                 kk.zoomOnFactor = ek
+                 CC.wAng = zC
```

#### 150. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2074` → after: `L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1162) · [Before (L2074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2074)

```diff
-           }, ze, Qe), (0, Dk.d)(null, null, Bk, {
+           }, yC, LC), (0, QC.j)(null, null, iC, {
```

#### 151. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2076` → after: `L1164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1164) · [Before (L2076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2076)

```diff
-             name: "targetScreenOffset",
+             name: "uRotationCenter",
```

#### 152. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2080-L2081` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1168-L1169) · [Before (L2080-L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2080-L2081)

```diff
-               has: kk => "targetScreenOffset" in kk,
-               get: kk => kk.targetScreenOffset,
+               has: CC => "uRotationCenter" in CC,
+               get: CC => CC.uRotationCenter,
```

#### 153. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2083` → after: `L1171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1171) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2083)

```diff
-                 kk.targetScreenOffset = ek
+                 CC.uRotationCenter = zC
```

#### 154. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2087` → after: `L1175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1175) · [Before (L2087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2087)

```diff
-           }, ve, Ee), (0, Dk.d)(null, null, ck, {
+           }, UC, BC), (0, QC.j)(null, null, vC, {
```

#### 155. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2089` → after: `L1177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1177) · [Before (L2089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2089)

```diff
-             name: "allowUpsideDown",
+             name: "vRotationCenter",
```

#### 156. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2093-L2094` → after: `L1181-L1182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1181-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1181-L1182) · [Before (L2093-L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2093-L2094)

```diff
-               has: kk => "allowUpsideDown" in kk,
-               get: kk => kk.allowUpsideDown,
+               has: CC => "vRotationCenter" in CC,
+               get: CC => CC.vRotationCenter,
```

#### 157. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2096` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1184) · [Before (L2096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2096)

```diff
-                 kk.allowUpsideDown = ek
+                 CC.vRotationCenter = zC
```

#### 158. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2100` → after: `L1188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1188) · [Before (L2100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2100)

```diff
-           }, he, ae), (0, Dk.d)(null, null, Tk, {
+           }, OC, kC), (0, QC.j)(null, null, eC, {
```

#### 159. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2102` → after: `L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1190) · [Before (L2102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2102)

```diff
-             name: "useInputToRestoreState",
+             name: "wRotationCenter",
```

#### 160. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2106-L2107` → after: `L1194-L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1194-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1194-L1195) · [Before (L2106-L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2106-L2107)

```diff
-               has: kk => "useInputToRestoreState" in kk,
-               get: kk => kk.useInputToRestoreState,
+               has: CC => "wRotationCenter" in CC,
+               get: CC => CC.wRotationCenter,
```

#### 161. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2109` → after: `L1197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1197) · [Before (L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2109)

```diff
-                 kk.useInputToRestoreState = ek
+                 CC.wRotationCenter = zC
```

#### 162. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2113` → after: `L1201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1201) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2113)

```diff
-           }, We, te), (0, Dk.d)(null, null, Zk, {
+           }, VC, Cz), (0, QC.j)(null, null, hC, {
```

#### 163. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2115` → after: `L1203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1203) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2115)

```diff
-             name: "restoreStateInterpolationFactor",
+             name: "homogeneousRotationInUVTransform",
```

#### 164. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2119-L2120` → after: `L1207-L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1207-L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1207-L1208) · [Before (L2119-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2119-L2120)

```diff
-               has: kk => "restoreStateInterpolationFactor" in kk,
-               get: kk => kk.restoreStateInterpolationFactor,
+               has: CC => "homogeneousRotationInUVTransform" in CC,
+               get: CC => CC.homogeneousRotationInUVTransform,
```

#### 165. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2122` → after: `L1210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1210) · [Before (L2122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2122)

```diff
-                 kk.restoreStateInterpolationFactor = ek
+                 CC.homogeneousRotationInUVTransform = zC
```

#### 166. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2132` → after: `L1220-L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1220-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1220-L1226) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2132)

```diff
-         })(), kk
+         })(), CC.SerializeBuffers = !0, CC.ForceSerializeBuffers = !1, CC.OnTextureLoadErrorObservable = new bC.d, CC._SerializeInternalTextureUniqueId = !1, CC._CubeTextureParser = (CC, zC, ZC) => {
+           throw (0, qC.i)("CubeTexture")
+         }, CC._CreateMirror = (CC, zC, ZC, QC) => {
+           throw (0, qC.i)("MirrorTexture")
+         }, CC._CreateRenderTargetTexture = (CC, zC, ZC, QC, wC) => {
+           throw (0, qC.i)("RenderTargetTexture")
+         }, CC.NEAREST_SAMPLINGMODE = 1, CC.NEAREST_NEAREST_MIPLINEAR = 8, CC.BILINEAR_SAMPLINGMODE = 2, CC.LINEAR_LINEAR_MIPNEAREST = 11, CC.TRILINEAR_SAMPLINGMODE = 3, CC.LINEAR_LINEAR_MIPLINEAR = 3, CC.NEAREST_NEAREST_MIPNEAREST = 4, CC.NEAREST_LINEAR_MIPNEAREST = 5, CC.NEAREST … [truncated]
```

#### 167. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2135-L2142` → after: `L1229-L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1229-L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1229-L1232) · [Before (L2135-L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2135-L2142)

```diff
-     Xk || (Xk = !0, Pk.b.AddNodeConstructor("ArcRotateCamera", ((kk, ek) => () => new tk(kk, 0, 0, 1, bk.o.Zero(), ek))), (0, vk.h)("BABYLON.ArcRotateCamera", tk))
-   },
-   39813: (kk, ek, ik) => {
-     ik.d(ek, {
-       c: () => Dk.b
-     });
-     var Dk = ik(39818);
-     (0, Dk.c)()
+ 
+     function xC() {
+       AC || (AC = !0, (0, oC.d)("BABYLON.Texture", RC), GC.d._TextureParser = RC.Parse)
+     }
```

#### 168. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2144` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1234) · [Before (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2144)

```diff
-   39818: (kk, ek, ik) => {
+   39833: (CC, zC, ZC) => {
```

#### 169. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2146-L2147` → after: `L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1236) · [Before (L2146-L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2146-L2147)

```diff
-       b: () => Mk,
-       c: () => xk
+       d: () => QC
```

#### 170. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L2149-L2235` → after: `L1238-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1238-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/256.js#L1238-L1289) · [Before (L2149-L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/256.js#L2149-L2235)

```diff
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(36698),
-       bk = ik(36874),
-       rk = ik(39822),
-       Pk = ik(39787),
-       mk = ik(36734);
-     let Mk = (() => {
-         var kk;
-         let ek, ik, Pk = rk.d,
-           mk = [],
-           Mk = [],
-           Kk = [],
-           xk = [];
-         return kk = class extends Pk {
-           constructor(kk, ek, ik, fk) {
- ... (71 more removed lines; see GitHub link above)
+     class QC {
+       constructor(CC, zC) {
+         this.width = CC, this.height = zC
+       }
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
+       }
+       getClassName() {
+         return "Size"
+       }
+       getHashCode() {
+         let CC = 0 | this.width;
+         return CC = 397 * CC ^ this.height, CC
+       }
+       Av(CC) {
+         this.width = CC.width, this.height = CC.height
+ ... (36 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (55 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L4)

```diff
-   39993: (kk, ek, ik) => {
+   40069: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L6-L298` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L6-L7) · [Before (L6-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L6-L298)

```diff
-       d: () => fk
-     });
-     var Dk = ik(39574);
- 
-     function fk(kk) {
-       return class extends kk {
-         constructor() {
-           super(...arguments);
-           const kk = new.target;
-           if (!kk[Symbol.metadata]) {
-             const ek = Object.getPrototypeOf(kk)?.[Symbol.metadata];
-             kk[Symbol.metadata] = ek ? Object.create(ek) : {}
-           }
-           const ek = (0, Dk.c)(kk[Symbol.metadata]);
-           ek._imageProcessingConfiguration || (ek._imageProcessingConfiguration = {
-             type: 9,
- ... (277 more removed lines; see GitHub link above)
+       e: () => nC,
+       i: () => fC
```

#### 3. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L302-L325` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L15) · [Before (L302-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L302-L325)

```diff
-         if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, … [truncated]
-           for (const ek in kk) Object.prototype.hasOwnProperty.call(kk, ek) && this._setDefaultValue(ek)
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
+         this.attachedToElement = !1, this.attached = {}, this.camera = CC, this.checkInputs = () => {}
```

#### 4. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L327-L328` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L17-L19) · [Before (L327-L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L327-L328)

```diff
-       markAsTexturesDirty() {
-         this._areTexturesDirty = !0, this._isDirty = !0
+       add(CC) {
+         const zC = CC.getSimpleName();
+         this.attached[zC] ? QC.c.Warn("camera input of type " + zC + " already exists on camera") : (this.attached[zC] = CC, CC.camera = this.camera, CC.checkInputs && (this.checkInputs = this._addCheckInputs(CC.checkInputs.bind(CC))), this.attachedToElement && CC.attachControl(t … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L330-L349` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L21-L24) · [Before (L330-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L330-L349)

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
-         for (const kk of Object.keys(this)) "_" !== kk[0] && this._keys.push(kk);
-         if (this._externalProperties)
-           for (const kk in this._externalProperties) - 1 === this._keys.indexOf(kk) && this._keys.push(kk)
-       }
-       isEqual(kk) {
- ... (4 more removed lines; see GitHub link above)
+       remove(CC) {
+         for (const zC in this.attached) {
+           const ZC = this.attached[zC];
+           if (ZC === CC) return ZC.detachControl(), ZC.camera = null, delete this.attached[zC], void this.rebuildInputCheck()
```

#### 6. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L363-L374` → after: `L27-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L27-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L27-L30) · [Before (L363-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L363-L374)

```diff
-       _setDefaultValue(kk) {
-         const ek = this._externalProperties?.[kk]?.type ?? typeof this[kk],
-           ik = this._externalProperties?.[kk]?.default;
-         switch (ek) {
-           case "number":
-             this[kk] = ik ?? 0;
-             break;
-           case "string":
-             this[kk] = ik ?? "";
-             break;
-           default:
-             this[kk] = ik ?? !1
+       removeByType(CC) {
+         for (const zC in this.attached) {
+           const ZC = this.attached[zC];
+           ZC.getClassName() === CC && (ZC.detachControl(), ZC.camera = null, delete this.attached[zC], this.rebuildInputCheck())
```

#### 7. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L377-L389` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L33-L36) · [Before (L377-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L377-L389)

```diff
-       toString() {
-         let kk = "";
-         for (let ek = 0; ek < this._keys.length; ek++) {
-           const ik = this._keys[ek],
-             Dk = this[ik];
-           switch (typeof Dk) {
-             case "number":
-             case "string":
-               kk += "#define " + ik + " " + Dk + "\n";
-               break;
-             default:
-               Dk && (kk += "#define " + ik + "\n")
-           }
+       _addCheckInputs(CC) {
+         const zC = this.checkInputs;
+         return () => {
+           zC(), CC()
```

#### 8. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L434-L435` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L39-L40) · [Before (L434-L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L434-L435)

```diff
-       static GetConfiguration(kk) {
-         return rk._Configurations[kk]
+       attachInput(CC) {
+         this.attachedToElement && CC.attachControl(this.noPreventDefault)
```

#### 9. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L437-L443` → after: `L42-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L42-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L42-L46) · [Before (L437-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L437-L443)

```diff
-       static _PrepareConfiguration(kk, ek, ik) {
-         const Dk = rk._Configurations[kk];
-         Dk._attachments = ek, Dk._colorAttachments = ik, Dk._mrtCount = ek.length;
-         let fk = "#define PREPASS\n";
-         for (const Sk of rk.GeometryTextureDescriptions) {
-           const kk = Dk.defines[Sk.defineIndex];
-           void 0 !== kk && (fk += `#define ${Sk.define}\n#define ${Sk.defineIndex} ${kk}\n`)
+       attachElement() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           CC = !bC.d.ForceAttachControlToAlwaysPreventDefault && CC, this.attachedToElement = !0, this.noPreventDefault = CC;
+           for (const zC in this.attached) this.attached[zC].attachControl(CC)
```

#### 10. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L474-L495` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L49-L52) · [Before (L474-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L474-L495)

```diff
-       static AddUniformsAndSamplers(kk, ek) {
-         kk.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
-       }
-       static MarkAsDirty(kk, ek) {
-         for (const ik of ek)
-           if (ik.TY)
-             for (const ek of ik.TY) ek._removeDrawWrapper(kk)
-       }
-       static PrepareDefines(kk, ek, ik) {
-         if (!ik._arePrePassDirty) return;
-         const Dk = rk._Configurations[kk];
-         if (!Dk) return;
-         ik.PREPASS = !0;
-         let fk = 0;
-         for (let Sk = 0; Sk < rk.GeometryTextureDescriptions.length; Sk++) {
-           const kk = rk.GeometryTextureDescriptions[Sk],
- ... (6 more removed lines; see GitHub link above)
+       detachElement() {
+         let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const zC in this.attached) this.attached[zC].detachControl(), CC && (this.attached[zC].camera = null);
+         this.attachedToElement = !1
```

#### 11. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L497-L522` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L54-L58) · [Before (L497-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L497-L522)

```diff
-       static Bind(kk, ek, ik, Dk, fk) {
-         const Pk = rk._Configurations[kk];
-         if (!Pk) return;
-         const mk = ik.XF(),
-           Mk = mk.JU();
-         if (Pk.reverseCulling && Mk.setStateCullFaceType(mk._mirroredCameraPosition ? fk.cullBackFaces : !fk.cullBackFaces), void 0 !== Pk.defines.PREPASS_OBJECT_ID_INDEX) {
-           const kk = Pk.objectIdIsRedFormat ? 255 : 16777215;
-           let Dk = ik.uniqueId;
-           if (Pk.objectIdProvider) Dk = Sk(ik, Pk.objectIdProvider, kk);
-           else if (Dk > kk) throw new Error(`Invalid geometry object ID ${Dk} for mesh "${ik.name}". Object IDs must be integers between 0 and 0x${kk.toString(16).toUpperCase()}.`);
-           ek.setFloat("objectId", Dk)
-         }
-         if (void 0 !== Pk.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
-           const kk = Pk.meshBlendTagProvider ? bk(ik, Pk.meshBlendTagProvider) : ik.meshBlendingTag;
-           ek.setInt("meshBlendTag", kk)
-         }
- ... (10 more removed lines; see GitHub link above)
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const CC in this.attached) {
+           const zC = this.attached[CC];
+           zC.checkInputs && (this.checkInputs = this._addCheckInputs(zC.checkInputs.bind(zC)))
```

#### 12. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L525-L642` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L61-L62) · [Before (L525-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L525-L642)

```diff
-     }
-     rk.GeometryTextureDescriptions = [{
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

#### 13. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L644-L649` → after: `L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L64) · [Before (L644-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L644-L649)

```diff
-       _addPlugin(kk) {
-         for (let Dk = 0; Dk < this._plugins.length; ++Dk)
-           if (this._plugins[Dk].name === kk.name) return !1;
-         if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !kk.isCompatible(this._material.shaderLanguage)) throw `The plugin "${kk.name}" can't be added to the material "${this._material.name}" because the pl … [truncated]
-         const ek = kk.getClassName();
-         Pk._MaterialPluginClassToMainDefine[ek] || (Pk._MaterialPluginClassToMainDefine[ek] = "MATERIALPLUGIN_" + ++Pk._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (kk, ek) => this._handlePluginEvent(kk, ek), this._plugins.push(kk), this._plugins.sort(((k … [truncated]
+       serialize(CC) {
```

#### 14. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L651-L756` → after: `L66-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L66-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L66-L82) · [Before (L651-L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L651-L756)

```diff
-         ik[Pk._MaterialPluginClassToMainDefine[ek]] = {
-           type: "boolean",
-           default: !0
-         };
-         for (const Dk of this._plugins) Dk.collectDefines(ik), this._collectPointNames("vertex", Dk.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Dk.getCustomCode("fragment", this._material.shaderLanguage));
-         return this._defineNamesFromPlugins = ik, !0
-       }
-       _activatePlugin(kk) {
-         -1 === this._activePlugins.indexOf(kk) && (this._activePlugins.push(kk), this._activePlugins.sort(((kk, ek) => kk.priority - ek.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callback … [truncated]
-       }
-       getPlugin(kk) {
-         for (let ek = 0; ek < this._plugins.length; ++ek)
-           if (this._plugins[ek].name === kk) return this._plugins[ek];
-         return null
-       }
-       _handlePluginEventIsReadyForSubMesh(kk) {
- ... (90 more removed lines; see GitHub link above)
+         for (const ZC in this.attached) {
+           const CC = this.attached[ZC],
+             QC = wC.d.Serialize(CC);
+           zC[CC.getClassName()] = QC
+         }
+         CC.inputsmgr = zC
+       }
+       parse(CC) {
+         const zC = CC.inputsmgr;
+         if (zC) {
+           this.clear();
+           for (const CC in zC) {
+             const ZC = nC[CC];
+             if (ZC) {
+               const QC = zC[CC],
+                 bC = wC.d.Parse((() => new ZC), QC, null);
+ ... (1 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L760-L792` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L85-L90) · [Before (L760-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L760-L792)

```diff
-         }
-       }
-       _collectPointNames(kk, ek) {
-         if (ek)
-           for (const ik in ek) this._codeInjectionPoints[kk] || (this._codeInjectionPoints[kk] = {}), this._codeInjectionPoints[kk][ik] = !0
-       }
-       _injectCustomCode(kk, ek) {
-         return (ik, Dk) => {
-           ek && (Dk = ek(ik, Dk)), this._uboDeclaration && (Dk = Dk.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Dk = Dk.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const fk = this._codeInjectionPoints?.[ik];
-           if (!fk) return Dk;
-           let Pk = null;
-           for (let ek in fk) {
-             let fk = "";
-             for (const Dk of this._activePlugins) {
-               const rk = this._material.shaderLanguage;
- ... (17 more removed lines; see GitHub link above)
+         } else
+           for (const ZC in this.attached) {
+             const zC = nC[this.attached[ZC].getClassName()];
+             if (zC) {
+               const QC = wC.d.Parse((() => new zC), CC, null);
+               this.remove(this.attached[ZC]), this.add(QC)
```

#### 16. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L821-L830` → after: `L95-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L95-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L95-L115) · [Before (L821-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L821-L830)

```diff
-     Pk._MaterialPluginClassToMainDefine = {}, Pk._MaterialPluginCounter = 0;
- 
-     function mk(kk, ek) {
-       return kk.replace(/\$(\d+)/g, ((kk, ik) => {
-         const Dk = Number(ik);
-         return Dk < ek.length ? ek[Dk] : ""
-       }))
-     }
-     var Mk = ik(39585),
-       Kk = ik(36734);
+   },
+   40963: (CC, zC, ZC) => {
+     ZC.d(zC, {
+       c: () => RC
+     });
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(39712),
+       nC = ZC(36963),
+       fC = ZC(39803),
+       oC = ZC(40303),
+       qC = ZC(37002),
+       FC = ZC(36987),
+       WC = ZC(39842),
+       NC = ZC(39650),
+       MC = ZC(38507),
+ ... (5 more added lines; see GitHub link above)
```

#### 17. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L833` → after: `L118-L126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L118-L126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L118-L126) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L833)

```diff
-         let ek, ik, Sk, bk, rk = [],
+         let zC, ZC, qC, RC, AC, xC, JC, IC, iC, vC = fC.b,
+           eC = [],
+           hC = [],
+           KC = [],
+           YC = [],
+           dC = [],
+           mC = [],
+           HC = [],
+           EC = [],
```

#### 18. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L841-L877` → after: `L134-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L134-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L134-L139) · [Before (L841-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L841-L877)

```diff
-         return kk = class {
-           isCompatible(kk) {
-             return 0 === kk
-           }
-           _enable(kk) {
-             kk && this._pluginManager._activatePlugin(this)
-           }
-           constructor(kk, ek, ik, fk) {
-             let Sk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
-               bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-               Mk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
-             this.name = (0, Dk.e)(this, rk, void 0), this.priority = ((0, Dk.e)(this, mk), (0, Dk.e)(this, Kk, 500)), this.resolveIncludes = ((0, Dk.e)(this, xk), (0, Dk.e)(this, nk, !1)), this.registerForExtraEvents = ((0, Dk.e)(this, Uk), (0, Dk.e)(this, Hk, !1)), this.doNotSer … [truncated]
-               kk.pluginManager = void 0
-             }))), this._pluginDefineNames = fk, this._pluginManager = kk.pluginManager, Sk && this._pluginManager._addPlugin(this), bk && this._enable(!0), this.markAllDefinesAsDirty = kk._dirtyCallbacks[127]
-           }
-           getClassName() {
- ... (21 more removed lines; see GitHub link above)
+         return CC = class extends vC {
+           set boundingBoxSize(CC) {
+             if (this._boundingBoxSize && this._boundingBoxSize.equals(CC)) return;
+             this._boundingBoxSize = CC;
+             const zC = this.Km();
+             zC && zC.markAllMaterialsAsDirty(1)
```

#### 19. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L879-L882` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L141-L142) · [Before (L879-L882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L879-L882)

```diff
-           prepareDefinesBeforeAttributes(kk, ek, ik) {}
-           prepareDefines(kk, ek, ik) {}
-           hasTexture(kk) {
-             return !1
+           get boundingBoxSize() {
+             return this._boundingBoxSize
```

#### 20. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L884-L885` → after: `L144-L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L144-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L144-L145) · [Before (L884-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L884-L885)

```diff
-           hasRenderTargetTextures() {
-             return !1
+           set rotationY(CC) {
+             this._rotationY = CC, this.setReflectionTextureMatrix(nC.b.RotationY(this._rotationY))
```

#### 21. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L887-L891` → after: `L147-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L147-L148) · [Before (L887-L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L887-L891)

```diff
-           fillRenderTargetTextures(kk) {}
-           getActiveTextures(kk) {}
-           getAnimatables(kk) {}
-           addFallbacks(kk, ek, ik) {
-             return ik
+           get rotationY() {
+             return this._rotationY
```

#### 22. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L893-L897` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L150-L151) · [Before (L893-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L893-L897)

```diff
-           getSamplers(kk) {}
-           getAttributes(kk, ek, ik) {}
-           getUniformBuffersNames(kk) {}
-           getUniforms() {
-             return {}
+           get noMipmap() {
+             return this._noMipmap
```

#### 23. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L899-L900` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L153-L154) · [Before (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L899-L900)

```diff
-           copyTo(kk) {
-             Mk.b.Clone((() => kk), this)
+           get forcedExtension() {
+             return this._forcedExtension
```

#### 24. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L902-L903` → after: `L156-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L156-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L156-L243) · [Before (L902-L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L902-L903)

```diff
-           serialize() {
-             return Mk.b.Serialize(this)
+           constructor(CC, zC) {
+             let ZC, wC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               bC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               fC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               qC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               WC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               RC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
+               AC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               xC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
+               JC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+               IC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
+               iC = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
+               vC = arguments.length > 13 ? arguments[13] : void 0,
+               aC = arguments.length > 14 ? arguments[14] : void 0;
+             super(zC), this._delayedOnLoad = (0, QC.n)(this, eC), this.onLoadObservable = new FC.d, this.url = (0, QC.n)(this, hC, void 0), this.boundingBoxPosition = ((0, QC.n)(this, KC), (0, QC.n)(this, YC, nC.r.Zero())), this._boundingBoxSize = (0, QC.n)(this, dC), this._rotat … [truncated]
+               let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
+ ... (72 more added lines; see GitHub link above)
```

#### 25. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L905-L906` → after: `L245-L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L245-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L245-L311) · [Before (L905-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L905-L906)

```diff
-           parse(kk, ek, ik) {
-             Mk.b.Parse((() => this), kk, ek, ik)
+           getClassName() {
+             return "CubeTexture"
+           }
+           updateURL(CC) {
+             let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+               fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               oC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
+             this.name && !this.name.startsWith("data:") || (this.name = CC), this.url = CC, zC && (this._forcedExtension = zC);
+             const qC = CC.lastIndexOf("."),
+               FC = zC || (qC > -1 ? CC.substring(qC).toLowerCase() : ""),
+               WC = 0 === FC.indexOf(".dds"),
+ ... (51 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L909-L910` → after: `L314-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L314-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L314-L376) · [Before (L909-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L909-L910)

```diff
-           const Pk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-           ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], bk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
+           const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(vC[Symbol.metadata] ?? null) : void 0;
+           zC = [(0, wC.M)()], ZC = [(0, wC.J)()], qC = [(0, wC.J)()], RC = [(0, wC.M)("rotationY")], AC = [(0, wC.M)("files")], xC = [(0, wC.M)("forcedExtension")], JC = [(0, wC.M)("extensions")], IC = [(0, wC.v)("textureMatrix")], iC = [(0, wC.v)("textureMatrixRefraction")], (0, … [truncated]
+             kind: "getter",
+             name: "boundingBoxSize",
+             static: !1,
+             private: !1,
+             access: {
+               has: CC => "boundingBoxSize" in CC,
+               get: CC => CC.boundingBoxSize
+             },
+             metadata: bC
+           }, null, eC), (0, QC.j)(CC, null, RC, {
+             kind: "setter",
+             name: "rotationY",
+             static: !1,
+             private: !1,
+ ... (47 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L912` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L378) · [Before (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L912)

```diff
-             name: "name",
+             name: "_forcedExtension",
```

#### 28. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L916-L917` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L382-L383) · [Before (L916-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L916-L917)

```diff
-               has: kk => "name" in kk,
-               get: kk => kk.name,
+               has: CC => "_forcedExtension" in CC,
+               get: CC => CC._forcedExtension,
```

#### 29. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L919` → after: `L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L385) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L919)

```diff
-                 kk.name = ek
+                 CC._forcedExtension = zC
```

#### 30. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L923` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L389) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L923)

```diff
-           }, rk, mk), (0, Dk.d)(null, null, ik, {
+           }, EC, lC), (0, QC.j)(null, null, JC, {
```

#### 31. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L925` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L391) · [Before (L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L925)

```diff
-             name: "priority",
+             name: "_extensions",
```

#### 32. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L929-L930` → after: `L395-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L395-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L395-L396) · [Before (L929-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L929-L930)

```diff
-               has: kk => "priority" in kk,
-               get: kk => kk.priority,
+               has: CC => "_extensions" in CC,
+               get: CC => CC._extensions,
```

#### 33. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L932` → after: `L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R398) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L398) · [Before (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L932)

```diff
-                 kk.priority = ek
+                 CC._extensions = zC
```

#### 34. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L936` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L402) · [Before (L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L936)

```diff
-           }, Kk, xk), (0, Dk.d)(null, null, Sk, {
+           }, XC, cC), (0, QC.j)(null, null, IC, {
```

#### 35. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L938` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L404) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L938)

```diff
-             name: "resolveIncludes",
+             name: "_textureMatrix",
```

#### 36. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L942-L943` → after: `L408-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L408-L409) · [Before (L942-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L942-L943)

```diff
-               has: kk => "resolveIncludes" in kk,
-               get: kk => kk.resolveIncludes,
+               has: CC => "_textureMatrix" in CC,
+               get: CC => CC._textureMatrix,
```

#### 37. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L945` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L411) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L945)

```diff
-                 kk.resolveIncludes = ek
+                 CC._textureMatrix = zC
```

#### 38. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L949` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L415) · [Before (L949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L949)

```diff
-           }, nk, Uk), (0, Dk.d)(null, null, bk, {
+           }, uC, rC), (0, QC.j)(null, null, iC, {
```

#### 39. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L951` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L417) · [Before (L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L951)

```diff
-             name: "registerForExtraEvents",
+             name: "_textureMatrixRefraction",
```

#### 40. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L955-L956` → after: `L421-L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L421-L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L421-L422) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L955-L956)

```diff
-               has: kk => "registerForExtraEvents" in kk,
-               get: kk => kk.registerForExtraEvents,
+               has: CC => "_textureMatrixRefraction" in CC,
+               get: CC => CC._textureMatrixRefraction,
```

#### 41. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L958` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L424) · [Before (L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L958)

```diff
-                 kk.registerForExtraEvents = ek
+                 CC._textureMatrixRefraction = zC
```

#### 42. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L972-L973` → after: `L438-L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L438-L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L438-L464) · [Before (L972-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L972-L973)

```diff
-     function Uk() {
-       nk || (nk = !0, (0, Kk.h)("BABYLON.MaterialPluginBase", xk))
+     function xC(CC, zC, ZC) {
+       let QC = "";
+       for (const wC of CC) QC += wC;
+       return new RC(QC, zC, null, ZC, CC)
+     }
+ 
+     function JC(CC, zC) {
+       let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+         QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const wC = zC.useDelayedTextureLoading;
+       zC.useDelayedTextureLoading = !1;
+       const bC = new RC(CC, zC, null, !1, null, null, null, void 0, !0, ZC, QC);
+       return zC.useDelayedTextureLoading = wC, bC
+     }
+ 
+     function IC(CC, zC, ZC) {
+ ... (11 more added lines; see GitHub link above)
```

#### 43. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L976` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L468) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L976)

```diff
-   39842: (kk, ek, ik) => {
+   40994: (CC, zC, ZC) => {
```

#### 44. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L978` → after: `L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L470) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L978)

```diff
-       c: () => Dk
+       d: () => qC
```

#### 45. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L980-L982` → after: `L472-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L472-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L472-L511) · [Before (L980-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L980-L982)

```diff
-     class Dk {
-       constructor() {
-         this.previousWorldMatrices = {}, this.previousBones = {}
+     var QC = ZC(38507),
+       wC = ZC(40303),
+       bC = ZC(39747),
+       nC = ZC(39663),
+       fC = ZC(39650);
+     let oC = !1;
+     class qC extends wC.h {
+       constructor(CC, zC, ZC) {
+         let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+           qC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
+           FC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5,
+           WC = arguments.length > 6 ? arguments[6] : void 0;
+         const NC = !ZC || ZC._isScene;
+         super(null, NC ? ZC : ZC?.sS, NC ? !QC : ZC, WC, qC, void 0, void 0, void 0, void 0, FC), oC || (oC = !0, nC.ThinEngine.prototype.createDynamicTexture = function(CC, zC, ZC, QC) {
+           const wC = new fC.c(this, 4);
+           return wC.baseWidth = CC, wC.baseHeight = zC, ZC && (CC = this.needPOTTextures ? (0, bC.e)(CC, this._caps.maxTextureSize) : CC, zC = this.needPOTTextures ? (0, bC.e)(zC, this._caps.maxTextureSize) : zC), wC.width = CC, wC.height = zC, wC.isReady = !1, wC.generateMipMaps … [truncated]
+ ... (24 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L984-L985` → after: `L513-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L513-L514) · [Before (L984-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L984-L985)

```diff
-       static AddUniforms(kk) {
-         kk.push("previousWorld", "previousViewProjection", "mPreviousBones")
+       getClassName() {
+         return "DynamicTexture"
```

#### 47. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L987-L993` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L516-L517) · [Before (L987-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L987-L993)

```diff
-       static AddSamplers(kk) {}
-       bindForSubMesh(kk, ek, ik, Dk, fk) {
-         if (ek.prePassRenderer && ek.prePassRenderer.enabled && ek.prePassRenderer.currentRTisSceneRT && (-1 !== ek.prePassRenderer.getIndex(2) || -1 !== ek.prePassRenderer.getIndex(11))) {
-           this.previousWorldMatrices[ik.uniqueId] || (this.previousWorldMatrices[ik.uniqueId] = Dk.clone()), this.previousViewProjection || (this.previousViewProjection = ek.getTransformMatrix().clone(), this.currentViewProjection = ek.getTransformMatrix().clone());
-           const fk = ek.JU();
-           this.currentViewProjection.updateFlag !== ek.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = fk.frameId, this.previousViewProjection.Fs(this.currentViewProjection), this.currentViewProjection.Fs(ek.getTransformMatrix())) : this._lastUpdateFrameId !== fk.fra … [truncated]
-         }
+       get canRescale() {
+         return !0
```

#### 48. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L995-L1001` → after: `L519-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L519-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L519-L547) · [Before (L995-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L995-L1001)

```diff
-     }
-   },
-   39984: (kk, ek, ik) => {
-     function Dk(kk) {
-       return class extends kk {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
+       _recreate(CC) {
+         this._canvas.width = CC.width, this._canvas.height = CC.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(CC.width, CC.height, this._generateMipMaps, this.samplingMode)
+       }
+       scale(CC) {
+         const zC = this.getSize();
+         zC.width *= CC, zC.height *= CC, this._recreate(zC)
+       }
+       scaleTo(CC, zC) {
+         const ZC = this.getSize();
+         ZC.width = CC, ZC.height = zC, this._recreate(ZC)
+       }
+       getContext() {
+         return this._context
+       }
+       clear(CC) {
+         const zC = this.getSize();
+ ... (13 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1009` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L579) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L1009)

```diff
-   39829: (kk, ek, ik) => {
+   40977: (CC, zC, ZC) => {
```

#### 50. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1011` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L581) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L1011)

```diff
-       StandardMaterial: () => Dk.f
+       d: () => wC
```

#### 51. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L1013-L2686` → after: `L583-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L583-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L583-L586) · [Before (L1013-L2686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L1013-L2686)

```diff
-     var Dk = ik(39833);
-     (0, Dk.d)()
-   },
-   39833: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => Ek,
-       f: () => Qk
-     });
-     var Dk = ik(39566),
-       fk = ik(39570),
-       Sk = ik(39672),
-       bk = ik(39653),
-       rk = ik(36874),
-       Pk = ik(39708),
-       mk = ik(39842),
-       Mk = ik(39849),
- ... (1658 more removed lines; see GitHub link above)
+     var QC = ZC(40303);
+     class wC extends QC.h {
+       get depth() {
+         return this._depth
```

#### 52. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L2688-L2707` → after: `L588-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L588-L595) · [Before (L2688-L2707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L2688-L2707)

```diff
-     }
-     ik.d(ek, {
-       d: () => Dk
-     })
-   },
-   39966: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => Dk
-     });
-     class Dk {
-       constructor(kk, ek) {
-         this._webGL = {
-           load: kk,
-           loaded: !1,
-           loadPromise: null
-         }, this._webGPU = {
- ... (4 more removed lines; see GitHub link above)
+       constructor(CC, zC, ZC, wC, bC, nC) {
+         let fC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
+           oC = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+           qC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : QC.h.TRILINEAR_SAMPLINGMODE,
+           FC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
+           WC = arguments.length > 10 ? arguments[10] : void 0,
+           NC = arguments.length > 11 ? arguments[11] : void 0;
+         super(null, nC, !fC, oC), this.format = bC, this._texture = nC.mg().createRawTexture2DArray(CC, zC, ZC, wC, bC, fC, oC, qC, null, FC, WC ?? 0, NC), this._depth = wC, this.is2DArray = !0
```

#### 53. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L2709-L2713` → after: `L597-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L597-L598) · [Before (L2709-L2713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L2709-L2713)

```diff
-       getLoadCallback(kk) {
-         const ek = 1 === kk ? this._webGPU : this._webGL;
-         return ek.loaded ? void 0 : async () => {
-           await this._loadAsync(ek)
-         }
+       update(CC) {
+         this.updateMipLevel(CC, 0)
```

#### 54. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L2715-L2725` → after: `L600-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L600-L601) · [Before (L2715-L2725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L2715-L2725)

```diff
-       async _loadAsync(kk) {
-         if (kk.loaded) return;
-         let ek = kk.loadPromise;
-         const ik = null === ek;
-         ik && (ek = Promise.all(kk.load()), kk.loadPromise = ek);
-         let Dk = !1;
-         try {
-           await ek, Dk = !0
-         } finally {
-           ik && this._completeLoad(kk, Dk)
-         }
+       updateMipLevel(CC, zC) {
+         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, CC, this._texture.format, this._texture.invertY, null, this._texture.type, zC)
```

#### 55. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L2727-L2728` → after: `L603-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/257.js#L603-L604) · [Before (L2727-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/257.js#L2727-L2728)

```diff
-       _completeLoad(kk, ek) {
-         kk.loaded = ek, kk.loadPromise = null
+       static CreateRGBATexture(CC, zC, ZC, QC, bC) {
+         return new wC(CC, zC, ZC, QC, 5, bC, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (3lwmg.ecbaa066 → w4ddu.56408518)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (127 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L4)

```diff
-   39879: (kk, ek, ik) => {
+   40031: (CC, zC, ZC) => {
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L6)

```diff
-       c: () => Dk
+       d: () => eC
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L8-L405` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L8-L14) · [Before (L8-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L8-L405)

```diff
-     class Dk {
-       constructor(kk, ek, ik) {
-         this.bu = kk, this.bv = ek, this.distance = ik, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
-   },
-   39894: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => bk
-     });
-     var Dk = ik(36707),
-       fk = ik(36698),
-       Sk = ik(36703);
-     class bk {
-       constructor(kk, ek, ik) {
-         this.vectors = (0, Dk.c)(8, fk.o.Zero), this.center = fk.o.Zero(), this.centerWorld = fk.o.Zero(), this.extendSize = fk.o.Zero(), this.extendSizeWorld = fk.o.Zero(), this.directions = (0, Dk.c)(3, fk.o.Zero), this.vectorsWorld = (0, Dk.c)(8, fk.o.Zero), this.minimumWorld  … [truncated]
- ... (382 more removed lines; see GitHub link above)
+     var QC = ZC(39811),
+       wC = ZC(39818),
+       bC = ZC(36963),
+       nC = ZC(40035),
+       fC = ZC(40069),
+       oC = ZC(40001),
+       qC = ZC(39913);
```

#### 4. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L408-L664` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L17) · [Before (L408-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L408-L664)

```diff
-       let ek, ik, Sk, bk, rk, Pk, mk, Mk, Kk, xk, Uk, Hk, wk = [];
-       return kk = class {
-         constructor() {
-           this._func = (0, Dk.e)(this, wk), this.reset()
-         }
-         reset() {
-           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
-         }
-         get func() {
-           return this._func
-         }
-         set func(kk) {
-           this._func = kk
-         }
-         get backFunc() {
-           return this._backFunc
- ... (241 more removed lines; see GitHub link above)
+       let zC, ZC, nC, fC, FC, WC, NC, MC, gC, SC, pC, PC = [],
```

#### 5. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L687-L995` → after: `L40-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L40-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L40-L55) · [Before (L687-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L687-L995)

```diff
-         get useVertexPulling() {
-           return this._useVertexPulling
-         }
-         set useVertexPulling(ek) {
-           this._useVertexPulling !== ek && (this._useVertexPulling = ek, this.pek(kk.MiscDirtyFlag))
-         }
-         get _supportGlowLayer() {
-           return !1
-         }
-         set _glowModeEnabled(kk) {}
-         get shaderLanguage() {
-           return this._shaderLanguage
-         }
-         get canRenderToMRT() {
-           return !1
-         }
- ... (293 more removed lines; see GitHub link above)
+         constructor() {
+           this.keysUp = (0, QC.n)(this, PC, [38]), this.keysUpward = ((0, QC.n)(this, GC), (0, QC.n)(this, RC, [33])), this.keysDown = ((0, QC.n)(this, AC), (0, QC.n)(this, xC, [40])), this.keysDownward = ((0, QC.n)(this, JC), (0, QC.n)(this, IC, [34])), this.keysLeft = ((0, QC.n … [truncated]
+         }
+         attachControl(CC) {
+           CC = qC.g.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.Km(), this._engine = this._scene.mg(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+             this._keys.length = 0
+           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((zC => {
+             const ZC = zC.event;
+             if (!ZC.metaKey)
+               if (zC.type === oC.c.KEYDOWN) {
+                 if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysUpward.indexOf(ZC.keyCode) || -1 !== this.keysDownward.indexOf(ZC.key … [truncated]
+                   -1 === this._keys.indexOf(ZC.keyCode) && this._keys.push(ZC.keyCode), CC || ZC.preventDefault()
+                 }
+               } else if (-1 !== this.keysUp.indexOf(ZC.keyCode) || -1 !== this.keysDown.indexOf(ZC.keyCode) || -1 !== this.keysLeft.indexOf(ZC.keyCode) || -1 !== this.keysRight.indexOf(ZC.keyCode) || -1 !== this.keysUpward.indexOf(ZC.keyCode) || -1 !== this.keysDownward.indexOf(Z … [truncated]
+               const zC = this._keys.indexOf(ZC.keyCode);
+               zC >= 0 && this._keys.splice(zC, 1), CC || ZC.preventDefault()
```

#### 6. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L997-L1003` → after: `L57-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L57-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L57-L75) · [Before (L997-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L997-L1003)

```diff
-         }
-         getBindedMeshes() {
-           if (this.meshMap) {
-             const kk = [];
-             for (const ek in this.meshMap) {
-               const ik = this.meshMap[ek];
-               ik && kk.push(ik)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         }
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const CC = this.camera,
+               zC = CC.movement.input,
+               ZC = zC.getEntry("keyboard", "translate"),
+               QC = zC.getEntry("keyboard", "rotate"),
+               wC = QC?.sensitivity ?? 1,
+               nC = CC._localDirection.L_(0, 0, 0);
+             for (let bC = 0; bC < this._keys.length; bC++) {
+               const zC = this._keys[bC]; - 1 !== this.keysLeft.indexOf(zC) ? nC.x -= 1 : -1 !== this.keysUp.indexOf(zC) ? nC.z += 1 : -1 !== this.keysRight.indexOf(zC) ? nC.x += 1 : -1 !== this.keysDown.indexOf(zC) ? nC.z -= 1 : -1 !== this.keysUpward.indexOf(zC) ? nC.y += 1 : -1 … [truncated]
+             }
+ ... (3 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1129-L1152` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L79-L80) · [Before (L1129-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1129-L1152)

```diff
-         _disposeMeshResources(kk) {
-           if (!kk) return;
-           const ek = kk.geometry,
-             ik = kk._internalAbstractMeshDataInfo._materialForRenderPass;
-           if (this._storeEffectOnSubMeshes) {
-             if (kk.TY && ik)
-               for (const Dk of kk.TY) {
-                 const kk = Dk._drawWrappers;
-                 for (let fk = 0; fk < kk.length; fk++) {
-                   const Sk = kk[fk]?.effect;
-                   if (!Sk) continue;
-                   ik[fk] === this && (ek?._releaseVertexArrayObject(Sk), Dk._removeDrawWrapper(fk, !0, !0))
-                 }
-               }
-           } else ek?._releaseVertexArrayObject(this._drawWrapper.effect);
-           kk.material !== this || kk.aDk || (kk.material = null)
- ... (8 more removed lines; see GitHub link above)
+         getClassName() {
+           return "FreeCameraKeyboardMoveInput"
```

#### 8. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1154-L1155` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L82-L83) · [Before (L1154-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1154-L1155)

```diff
-         static ParseAlphaMode(kk, ek) {
-           void 0 !== kk._alphaMode ? ek._alphaMode = Array.isArray(kk._alphaMode) ? [...kk._alphaMode] : [kk._alphaMode] : void 0 !== kk.alphaMode ? ek._alphaMode = Array.isArray(kk.alphaMode) ? [...kk.alphaMode] : [kk.alphaMode] : ek._alphaMode = [2]
+         _onLostFocus() {
+           this._keys.length = 0
```

#### 9. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1157-L1162` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L85-L86) · [Before (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1157-L1162)

```diff
-         static Parse(ek, ik, Dk) {
-           if (ek.customType) {
-             if ("BABYLON.PBRMaterial" === ek.customType && ek.overloadedAlbedo && (ek.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Mk.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
-           } else ek.customType = "BABYLON.StandardMaterial";
-           const fk = Sk.i.Instantiate(ek.customType).Parse(ek, ik, Dk);
-           return fk._loadedUniqueId = ek.uniqueId, kk.ParseAlphaMode(ek, fk), fk
+         getSimpleName() {
+           return "keyboard"
```

#### 10. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1164-L1174` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L88-L90) · [Before (L1164-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1164-L1174)

```diff
-         static _ParsePlugins(kk, ek, ik, Dk) {
-           if (kk.plugins)
-             for (const fk in kk.plugins) {
-               const bk = kk.plugins[fk];
-               let rk = ek.pluginManager?.getPlugin(bk.name);
-               if (!rk) {
-                 const kk = Sk.i.Instantiate("BABYLON." + fk);
-                 kk && (rk = new kk(ek))
-               }
-               rk?.parse(bk, ik, Dk)
-             }
+         _getLocalRotation() {
+           const CC = this.camera._calculateHandednessMultiplier();
+           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * CC
```

#### 11. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1178-L1218` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L94) · [Before (L1178-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1178-L1218)

```diff
-         ek = [(0, fk.I)()], ik = [(0, fk.I)()], lk = [(0, fk.I)()], pk = [(0, fk.I)()], yk = [(0, fk.I)()], Yk = [(0, fk.I)()], Lk = [(0, fk.I)()], Ck = [(0, fk.I)("alpha")], Ak = [(0, fk.I)("backFaceCulling")], jk = [(0, fk.I)("textureRepetitionMode")], sk = [(0, fk.I)("textureR … [truncated]
-           kind: "getter",
-           name: "pointsCloud",
-           static: !1,
-           private: !1,
-           access: {
-             has: kk => "pointsCloud" in kk,
-             get: kk => kk.pointsCloud
-           },
-           metadata: Sk
-         }, null, Zk), (0, Dk.d)(kk, null, Xk, {
-           kind: "getter",
-           name: "fillMode",
-           static: !1,
-           private: !1,
-           access: {
- ... (25 more removed lines; see GitHub link above)
+         zC = [(0, wC.M)()], ZC = [(0, wC.M)()], nC = [(0, wC.M)()], fC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], pC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
```

#### 12. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1220` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L96) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1220)

```diff
-           name: "id",
+           name: "keysUp",
```

#### 13. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1224-L1225` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L100-L101) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1224-L1225)

```diff
-             has: kk => "id" in kk,
-             get: kk => kk.id,
+             has: CC => "keysUp" in CC,
+             get: CC => CC.keysUp,
```

#### 14. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1227` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L103) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1227)

```diff
-               kk.id = ek
+               CC.keysUp = zC
```

#### 15. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1231` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L107) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1231)

```diff
-         }, Ok, gk), (0, Dk.d)(null, null, ik, {
+         }, PC, GC), (0, QC.j)(null, null, ZC, {
```

#### 16. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1233` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L109) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1233)

```diff
-           name: "uniqueId",
+           name: "keysUpward",
```

#### 17. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1237-L1238` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L113-L114) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1237-L1238)

```diff
-             has: kk => "uniqueId" in kk,
-             get: kk => kk.uniqueId,
+             has: CC => "keysUpward" in CC,
+             get: CC => CC.keysUpward,
```

#### 18. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1240` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L116) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1240)

```diff
-               kk.uniqueId = ek
+               CC.keysUpward = zC
```

#### 19. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1244` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L120) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1244)

```diff
-         }, Gk, Nk), (0, Dk.d)(null, null, lk, {
+         }, RC, AC), (0, QC.j)(null, null, nC, {
```

#### 20. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1246` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L122) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1246)

```diff
-           name: "name",
+           name: "keysDown",
```

#### 21. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1250-L1251` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L126-L127) · [Before (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1250-L1251)

```diff
-             has: kk => "name" in kk,
-             get: kk => kk.name,
+             has: CC => "keysDown" in CC,
+             get: CC => CC.keysDown,
```

#### 22. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1253` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L129) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1253)

```diff
-               kk.name = ek
+               CC.keysDown = zC
```

#### 23. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1257` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L133) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1257)

```diff
-         }, Rk, Jk), (0, Dk.d)(null, null, pk, {
+         }, xC, JC), (0, QC.j)(null, null, fC, {
```

#### 24. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1259` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L135) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1259)

```diff
-           name: "metadata",
+           name: "keysDownward",
```

#### 25. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1263-L1264` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L139-L140) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1263-L1264)

```diff
-             has: kk => "metadata" in kk,
-             get: kk => kk.metadata,
+             has: CC => "keysDownward" in CC,
+             get: CC => CC.keysDownward,
```

#### 26. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1266` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L142) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1266)

```diff
-               kk.metadata = ek
+               CC.keysDownward = zC
```

#### 27. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1270` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L146) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1270)

```diff
-         }, ke, ee), (0, Dk.d)(null, null, yk, {
+         }, IC, iC), (0, QC.j)(null, null, FC, {
```

#### 28. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1272` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L148) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1272)

```diff
-           name: "checkReadyOnEveryCall",
+           name: "keysLeft",
```

#### 29. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1276-L1277` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L152-L153) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1276-L1277)

```diff
-             has: kk => "checkReadyOnEveryCall" in kk,
-             get: kk => kk.checkReadyOnEveryCall,
+             has: CC => "keysLeft" in CC,
+             get: CC => CC.keysLeft,
```

#### 30. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1279` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L155) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1279)

```diff
-               kk.checkReadyOnEveryCall = ek
+               CC.keysLeft = zC
```

#### 31. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1283` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L159) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1283)

```diff
-         }, ie, De), (0, Dk.d)(null, null, Yk, {
+         }, vC, eC), (0, QC.j)(null, null, WC, {
```

#### 32. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1285` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L161) · [Before (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1285)

```diff
-           name: "checkReadyOnlyOnce",
+           name: "keysRight",
```

#### 33. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1289-L1290` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L165-L166) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1289-L1290)

```diff
-             has: kk => "checkReadyOnlyOnce" in kk,
-             get: kk => kk.checkReadyOnlyOnce,
+             has: CC => "keysRight" in CC,
+             get: CC => CC.keysRight,
```

#### 34. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1292` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L168) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1292)

```diff
-               kk.checkReadyOnlyOnce = ek
+               CC.keysRight = zC
```

#### 35. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1296` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L172) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1296)

```diff
-         }, fe, Se), (0, Dk.d)(null, null, Lk, {
+         }, hC, KC), (0, QC.j)(null, null, NC, {
```

#### 36. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1298` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L174) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1298)

```diff
-           name: "state",
+           name: "rotationSpeed",
```

#### 37. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1302-L1303` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L178-L179) · [Before (L1302-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1302-L1303)

```diff
-             has: kk => "state" in kk,
-             get: kk => kk.state,
+             has: CC => "rotationSpeed" in CC,
+             get: CC => CC.rotationSpeed,
```

#### 38. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1305` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L181) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1305)

```diff
-               kk.state = ek
+               CC.rotationSpeed = zC
```

#### 39. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1309` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L185) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1309)

```diff
-         }, be, re), (0, Dk.d)(null, null, Ck, {
+         }, YC, dC), (0, QC.j)(null, null, MC, {
```

#### 40. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1311` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L187) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1311)

```diff
-           name: "_alpha",
+           name: "keysRotateLeft",
```

#### 41. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1315-L1316` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L191-L192) · [Before (L1315-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1315-L1316)

```diff
-             has: kk => "_alpha" in kk,
-             get: kk => kk._alpha,
+             has: CC => "keysRotateLeft" in CC,
+             get: CC => CC.keysRotateLeft,
```

#### 42. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1318` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L194) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1318)

```diff
-               kk._alpha = ek
+               CC.keysRotateLeft = zC
```

#### 43. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1322` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L198) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1322)

```diff
-         }, Pe, me), (0, Dk.d)(null, null, Ak, {
+         }, mC, HC), (0, QC.j)(null, null, gC, {
```

#### 44. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1324` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L200) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1324)

```diff
-           name: "_backFaceCulling",
+           name: "keysRotateRight",
```

#### 45. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1328-L1329` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L204-L205) · [Before (L1328-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1328-L1329)

```diff
-             has: kk => "_backFaceCulling" in kk,
-             get: kk => kk._backFaceCulling,
+             has: CC => "keysRotateRight" in CC,
+             get: CC => CC.keysRotateRight,
```

#### 46. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1331` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L207) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1331)

```diff
-               kk._backFaceCulling = ek
+               CC.keysRotateRight = zC
```

#### 47. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1335` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L211) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1335)

```diff
-         }, Me, Ke), (0, Dk.d)(null, null, jk, {
+         }, EC, lC), (0, QC.j)(null, null, SC, {
```

#### 48. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1337` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L213) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1337)

```diff
-           name: "_textureRepetitionMode",
+           name: "keysRotateUp",
```

#### 49. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1341-L1342` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L217-L218) · [Before (L1341-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1341-L1342)

```diff
-             has: kk => "_textureRepetitionMode" in kk,
-             get: kk => kk._textureRepetitionMode,
+             has: CC => "keysRotateUp" in CC,
+             get: CC => CC.keysRotateUp,
```

#### 50. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1344` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L220) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1344)

```diff
-               kk._textureRepetitionMode = ek
+               CC.keysRotateUp = zC
```

#### 51. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1348` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L224) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1348)

```diff
-         }, xe, ne), (0, Dk.d)(null, null, sk, {
+         }, XC, cC), (0, QC.j)(null, null, pC, {
```

#### 52. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1350` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L226) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1350)

```diff
-           name: "textureRepetitionHexTilingParams",
+           name: "keysRotateDown",
```

#### 53. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1354-L1355` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L230-L231) · [Before (L1354-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1354-L1355)

```diff
-             has: kk => "textureRepetitionHexTilingParams" in kk,
-             get: kk => kk.textureRepetitionHexTilingParams,
+             has: CC => "keysRotateDown" in CC,
+             get: CC => CC.keysRotateDown,
```

#### 54. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1357` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L233) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1357)

```diff
-               kk.textureRepetitionHexTilingParams = ek
+               CC.keysRotateDown = zC
```

#### 55. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1361` → after: `L237-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L237-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L237-L333) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1361)

```diff
-         }, Ue, He), (0, Dk.d)(null, null, dk, {
+         }, uC, rC), bC && Object.defineProperty(CC, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: bC
+         })
+       })(), CC
+     })();
+     fC.e.FreeCameraKeyboardMoveInput = FC;
+     var WC = ZC(36987),
+       NC = ZC(39993);
+     let MC = (() => {
+       var CC;
+       let zC, ZC, bC = [],
+         nC = [],
+         fC = [],
+ ... (81 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1363` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L335) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1363)

```diff
-           name: "_cullBackFaces",
+           name: "buttons",
```

#### 57. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1367-L1368` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L339-L340) · [Before (L1367-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1367-L1368)

```diff
-             has: kk => "_cullBackFaces" in kk,
-             get: kk => kk._cullBackFaces,
+             has: CC => "buttons" in CC,
+             get: CC => CC.buttons,
```

#### 58. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1370` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L342) · [Before (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1370)

```diff
-               kk._cullBackFaces = ek
+               CC.buttons = zC
```

#### 59. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1374` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L346) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1374)

```diff
-         }, we, le), (0, Dk.d)(null, null, Vk, {
+         }, bC, nC), (0, QC.j)(null, null, ZC, {
```

#### 60. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1376` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L348) · [Before (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1376)

```diff
-           name: "sideOrientation",
+           name: "angularSensibility",
```

#### 61. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1380-L1381` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L352-L353) · [Before (L1380-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1380-L1381)

```diff
-             has: kk => "sideOrientation" in kk,
-             get: kk => kk.sideOrientation,
+             has: CC => "angularSensibility" in CC,
+             get: CC => CC.angularSensibility,
```

#### 62. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1383` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L355) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1383)

```diff
-               kk.sideOrientation = ek
+               CC.angularSensibility = zC
```

#### 63. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1387` → after: `L359-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L359-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L359-L407) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1387)

```diff
-         }, pe, ye), (0, Dk.d)(null, null, Fk, {
+         }, fC, oC), qC && Object.defineProperty(CC, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: qC
+         })
+       })(), CC
+     })();
+     fC.e.FreeCameraMouseInput = MC;
+     var gC = ZC(40010);
+     let SC = (() => {
+       var CC;
+       let zC, ZC, bC, nC = [],
+         fC = [],
+         oC = [],
+         FC = [],
+ ... (33 more added lines; see GitHub link above)
```

#### 64. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1389` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L409) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1389)

```diff
-           name: "_alphaMode",
+           name: "wheelPrecisionX",
```

#### 65. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1393-L1394` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L413-L414) · [Before (L1393-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1393-L1394)

```diff
-             has: kk => "_alphaMode" in kk,
-             get: kk => kk._alphaMode,
+             has: CC => "wheelPrecisionX" in CC,
+             get: CC => CC.wheelPrecisionX,
```

#### 66. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1396` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L416) · [Before (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1396)

```diff
-               kk._alphaMode = ek
+               CC.wheelPrecisionX = zC
```

#### 67. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1400` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L420) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1400)

```diff
-         }, Ye, Le), (0, Dk.d)(null, null, uk, {
+         }, nC, fC), (0, QC.j)(null, null, ZC, {
```

#### 68. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1402` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L422) · [Before (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1402)

```diff
-           name: "_needDepthPrePass",
+           name: "wheelPrecisionY",
```

#### 69. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1406-L1407` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L426-L427) · [Before (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1406-L1407)

```diff
-             has: kk => "_needDepthPrePass" in kk,
-             get: kk => kk._needDepthPrePass,
+             has: CC => "wheelPrecisionY" in CC,
+             get: CC => CC.wheelPrecisionY,
```

#### 70. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1409` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L429) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1409)

```diff
-               kk._needDepthPrePass = ek
+               CC.wheelPrecisionY = zC
```

#### 71. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1413` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L433) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1413)

```diff
-         }, Ce, Ae), (0, Dk.d)(null, null, qk, {
+         }, oC, FC), (0, QC.j)(null, null, bC, {
```

#### 72. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1415` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L435) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1415)

```diff
-           name: "disableDepthWrite",
+           name: "wheelPrecisionZ",
```

#### 73. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1419-L1420` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L439-L440) · [Before (L1419-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1419-L1420)

```diff
-             has: kk => "disableDepthWrite" in kk,
-             get: kk => kk.disableDepthWrite,
+             has: CC => "wheelPrecisionZ" in CC,
+             get: CC => CC.wheelPrecisionZ,
```

#### 74. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1422` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L442) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1422)

```diff
-               kk.disableDepthWrite = ek
+               CC.wheelPrecisionZ = zC
```

#### 75. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1426-L1428` → after: `L446-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L446-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L446-L563) · [Before (L1426-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1426-L1428)

```diff
-         }, je, se), (0, Dk.d)(null, null, Ik, {
-           kind: "field",
-           name: "disableColorWrite",
+         }, MC, SC), qC && Object.defineProperty(CC, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: qC
+         })
+       })(), CC
+     })();
+     var pC;
+     ! function(CC) {
+       CC[CC.MoveRelative = 0] = "MoveRelative", CC[CC.RotateRelative = 1] = "RotateRelative", CC[CC.MoveScene = 2] = "MoveScene"
+     }(pC || (pC = {}));
+     let PC = (() => {
+       var CC;
+       let zC, ZC, nC, fC, oC, qC, FC, WC, NC, MC = SC,
+         gC = [];
+ ... (102 more added lines; see GitHub link above)
```

#### 76. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1432-L1433` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L567) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1432-L1433)

```diff
-             has: kk => "disableColorWrite" in kk,
-             get: kk => kk.disableColorWrite,
+             has: CC => "wheelXMoveRelative" in CC,
```

#### 77. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1435` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L569) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1435)

```diff
-               kk.disableColorWrite = ek
+               CC.wheelXMoveRelative = zC
```

#### 78. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1439-L1441` → after: `L573-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L573-L575) · [Before (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1439-L1441)

```diff
-         }, de, Ve), (0, Dk.d)(null, null, zk, {
-           kind: "field",
-           name: "forceDepthWrite",
+         }, null, gC), (0, QC.j)(CC, null, ZC, {
+           kind: "setter",
+           name: "wheelYMoveRelative",
```

#### 79. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1445-L1446` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L579) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1445-L1446)

```diff
-             has: kk => "forceDepthWrite" in kk,
-             get: kk => kk.forceDepthWrite,
+             has: CC => "wheelYMoveRelative" in CC,
```

#### 80. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1448` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L581) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1448)

```diff
-               kk.forceDepthWrite = ek
+               CC.wheelYMoveRelative = zC
```

#### 81. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1452-L1454` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L585-L587) · [Before (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1452-L1454)

```diff
-         }, Fe, ue), (0, Dk.d)(null, null, Qk, {
-           kind: "field",
-           name: "depthFunction",
+         }, null, gC), (0, QC.j)(CC, null, nC, {
+           kind: "setter",
+           name: "wheelZMoveRelative",
```

#### 82. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1458-L1459` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L591) · [Before (L1458-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1458-L1459)

```diff
-             has: kk => "depthFunction" in kk,
-             get: kk => kk.depthFunction,
+             has: CC => "wheelZMoveRelative" in CC,
```

#### 83. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1461` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L593) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1461)

```diff
-               kk.depthFunction = ek
+               CC.wheelZMoveRelative = zC
```

#### 84. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1465-L1467` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L597-L599) · [Before (L1465-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1465-L1467)

```diff
-         }, qe, Ie), (0, Dk.d)(null, null, vk, {
-           kind: "field",
-           name: "separateCullingPass",
+         }, null, gC), (0, QC.j)(CC, null, fC, {
+           kind: "setter",
+           name: "wheelXRotateRelative",
```

#### 85. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1471-L1472` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L603) · [Before (L1471-L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1471-L1472)

```diff
-             has: kk => "separateCullingPass" in kk,
-             get: kk => kk.separateCullingPass,
+             has: CC => "wheelXRotateRelative" in CC,
```

#### 86. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1474` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L605) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1474)

```diff
-               kk.separateCullingPass = ek
+               CC.wheelXRotateRelative = zC
```

#### 87. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1478-L1480` → after: `L609-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L609-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L609-L611) · [Before (L1478-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1478-L1480)

```diff
-         }, ze, Qe), (0, Dk.d)(null, null, Ek, {
-           kind: "field",
-           name: "_fogEnabled",
+         }, null, gC), (0, QC.j)(CC, null, oC, {
+           kind: "setter",
+           name: "wheelYRotateRelative",
```

#### 88. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1484-L1485` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L615) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1484-L1485)

```diff
-             has: kk => "_fogEnabled" in kk,
-             get: kk => kk._fogEnabled,
+             has: CC => "wheelYRotateRelative" in CC,
```

#### 89. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1487` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L617) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1487)

```diff
-               kk._fogEnabled = ek
+               CC.wheelYRotateRelative = zC
```

#### 90. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1491-L1493` → after: `L621-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L621-L623) · [Before (L1491-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1491-L1493)

```diff
-         }, ve, Ee), (0, Dk.d)(null, null, hk, {
-           kind: "field",
-           name: "pointSize",
+         }, null, gC), (0, QC.j)(CC, null, qC, {
+           kind: "setter",
+           name: "wheelZRotateRelative",
```

#### 91. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1497-L1498` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L627) · [Before (L1497-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1497-L1498)

```diff
-             has: kk => "pointSize" in kk,
-             get: kk => kk.pointSize,
+             has: CC => "wheelZRotateRelative" in CC,
```

#### 92. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1500` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L629) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1500)

```diff
-               kk.pointSize = ek
+               CC.wheelZRotateRelative = zC
```

#### 93. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1504-L1506` → after: `L633-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L633-L635) · [Before (L1504-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1504-L1506)

```diff
-         }, he, ae), (0, Dk.d)(null, null, ak, {
-           kind: "field",
-           name: "zOffset",
+         }, null, gC), (0, QC.j)(CC, null, FC, {
+           kind: "setter",
+           name: "wheelXMoveScene",
```

#### 94. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1510-L1511` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L639) · [Before (L1510-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1510-L1511)

```diff
-             has: kk => "zOffset" in kk,
-             get: kk => kk.zOffset,
+             has: CC => "wheelXMoveScene" in CC,
```

#### 95. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1513` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L641) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1513)

```diff
-               kk.zOffset = ek
+               CC.wheelXMoveScene = zC
```

#### 96. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1517-L1519` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L645-L647) · [Before (L1517-L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1517-L1519)

```diff
-         }, We, te), (0, Dk.d)(null, null, Wk, {
-           kind: "field",
-           name: "zOffsetUnits",
+         }, null, gC), (0, QC.j)(CC, null, WC, {
+           kind: "setter",
+           name: "wheelYMoveScene",
```

#### 97. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1523-L1524` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L651) · [Before (L1523-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1523-L1524)

```diff
-             has: kk => "zOffsetUnits" in kk,
-             get: kk => kk.zOffsetUnits,
+             has: CC => "wheelYMoveScene" in CC,
```

#### 98. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1526` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L653) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1526)

```diff
-               kk.zOffsetUnits = ek
+               CC.wheelYMoveScene = zC
```

#### 99. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1530-L1532` → after: `L657-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L657-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L657-L659) · [Before (L1530-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1530-L1532)

```diff
-         }, Xe, Be), (0, Dk.d)(null, null, ck, {
-           kind: "field",
-           name: "_isVertexOutputInvariant",
+         }, null, gC), (0, QC.j)(CC, null, NC, {
+           kind: "setter",
+           name: "wheelZMoveScene",
```

#### 100. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1536-L1537` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L663) · [Before (L1536-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1536-L1537)

```diff
-             has: kk => "_isVertexOutputInvariant" in kk,
-             get: kk => kk._isVertexOutputInvariant,
+             has: CC => "wheelZMoveScene" in CC,
```

#### 101. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1539` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L665) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1539)

```diff
-               kk._isVertexOutputInvariant = ek
+               CC.wheelZMoveScene = zC
```

#### 102. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1543` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L669) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1543)

```diff
-         }, ce, Te), Sk && Object.defineProperty(kk, Symbol.metadata, {
+         }, null, gC), bC && Object.defineProperty(CC, Symbol.metadata, {
```

#### 103. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1549-L1555` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L675) · [Before (L1549-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1549-L1555)

```diff
-       })(), kk.TriangleFillMode = 0, kk.WireFrameFillMode = 1, kk.PointFillMode = 2, kk.PointListDrawMode = 3, kk.LineListDrawMode = 4, kk.LineLoopDrawMode = 5, kk.LineStripDrawMode = 6, kk.TriangleStripDrawMode = 7, kk.TriangleFanDrawMode = 8, kk.ClockWiseSideOrientation = 0, kk … [truncated]
-         kk._FresnelDirtyCallBack(ek), kk._MiscDirtyCallBack(ek)
-       }, kk._TextureAndMiscDirtyCallBack = ek => {
-         kk._TextureDirtyCallBack(ek), kk._MiscDirtyCallBack(ek)
-       }, kk._DirtyCallbackArray = [], kk._RunDirtyCallBacks = ek => {
-         for (const ik of kk._DirtyCallbackArray) ik(ek)
-       }, kk
+       })(), CC
```

#### 104. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1557-L1871` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L677-L678) · [Before (L1557-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1557-L1871)

```diff
-     Object.getOwnPropertyDescriptor(pk.prototype, "pluginManager") || Object.defineProperty(pk.prototype, "pluginManager", (0, lk.h)("Material", "pluginManager"))
-   },
-   39928: (kk, ek, ik) => {
-     ik.d(ek, {
-       e: () => fk
-     });
-     var Dk = ik(39467);
-     class fk {
-       static get DiffuseTextureEnabled() {
-         return this._DiffuseTextureEnabled
-       }
-       static set DiffuseTextureEnabled(kk) {
-         this._DiffuseTextureEnabled !== kk && (this._DiffuseTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseWeightTextureEnabled() {
-         return this._BaseWeightTextureEnabled
- ... (299 more removed lines; see GitHub link above)
+     fC.e.FreeCameraMouseWheelInput = PC;
+     let GC = (() => {
```

#### 105. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1873-L2092` → after: `L680-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L680-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L680-L713) · [Before (L1873-L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L1873-L2092)

```diff
-       if (ek && kk && (kk.computeBonesUsingShaders && ek._bonesComputationForcedToCPU && (kk.computeBonesUsingShaders = !1), kk.useBones && kk.computeBonesUsingShaders && kk.skeleton)) {
-         const fk = kk.skeleton;
-         if (fk.isUsingTextureForMatrices && ek.getUniformIndex("boneTextureInfo") > -1) {
-           const ik = fk.getTransformMatrixTexture(kk);
-           ek.setTexture("boneSampler", ik), ek.setFloat2("boneTextureInfo", fk._textureWidth, fk._textureHeight)
-         } else {
-           const Sk = fk.getTransformMatrices(kk);
-           Sk && (ek.setMatrices("mBones", Sk), ik && kk.XF().prePassRenderer && kk.XF().prePassRenderer.getIndex(2) && (ik.previousBones[kk.uniqueId] || (ik.previousBones[kk.uniqueId] = Sk.slice()), ek.setMatrices("mPreviousBones", ik.previousBones[kk.uniqueId]), Dk = Sk, ik.prev … [truncated]
-         }
-       }
-     }
- 
-     function Ak(kk, ek, ik, Dk, fk) {
-       let Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-       kk._bindLight(ek, ik, Dk, fk, Sk)
-     }
- ... (204 more removed lines; see GitHub link above)
+       let zC, ZC, nC = [],
+         fC = [],
+         oC = [],
+         FC = [];
+       return CC = class {
+         constructor() {
+           let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           this.allowMouse = CC, this.touchAngularSensibility = (0, QC.n)(this, nC, 2e5), this.touchMoveSensibility = ((0, QC.n)(this, fC), (0, QC.n)(this, oC, 250)), this.singleFingerRotate = ((0, QC.n)(this, FC), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
+         }
+         attachControl(CC) {
+           CC = qC.g.BackCompatCameraNoPreventDefault(arguments);
+           let zC = null;
+           if (void 0 === this._pointerInput && (this._onLostFocus = () => {
+               this._offsetX = null, this._offsetY = null
+             }, this._pointerInput = ZC => {
+               const QC = ZC.event,
+ ... (18 more added lines; see GitHub link above)
```

#### 106. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2094` → after: `L715-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L715-L717) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2094)

```diff
-             }
+             }), this._observer = this.camera.Km()._inputManager._addCameraPointerObserver(this._pointerInput, NC.b.POINTERDOWN | NC.b.POINTERUP | NC.b.POINTERMOVE), this._onLostFocus) {
+             const CC = this.camera.mg().getInputElement();
+             CC && CC.addEventListener("blur", this._onLostFocus)
```

#### 107. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L2296-L2325` → after: `L720-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/1ddacc4f3827558ee9acb28b4b2ba5477962441f...build/bloxd.io/w4ddu.56408518#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L720-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/w4ddu.56408518/bundles/bloxd.io/chunks/js/258.js#L720-L726) · [Before (L2296-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/1ddacc4f3827558ee9acb28b4b2ba5477962441f/bundles/bloxd.io/chunks/js/258.js#L2296-L2325)

```diff
-       }
-       return ik
-     }
- 
-     function Sk(kk, ek) {
-       ek.forEach(((ek, ik) => {
-         const Dk = `vp_${ik}_info`;
-         kk.setFloat4(Dk, ek.offset, ek.stride, ek.type, ek.normalized ? 1 : 0)
-       }))
-     }
-   },
-   39901: (kk, ek, ik) => {
-     ik.d(ek, {
-       d: () => rk,
-       f: () => Pk
-     });
- ... (14 more removed lines; see GitHub link above)
+         detachControl() {
+           if (this._pointerInput) {
+             if (this._observer && (this.camera.Km()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
+               const CC = this.camera.mg().getInputElement();
+               CC && CC.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+             }
+             this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
```
