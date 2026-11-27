# Changed — Bundle Modifications Report (Part 054 / 126)

- **Updated at**: `2026-11-28T08:15 JST`
- **Part**: `54 / 126` (**283** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 053](part-053.md) · [Part 055 →](part-055.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/298.js` (4udp6d.2845de07 → fl4vv.bd3c59ce · continued)

- **File**: `bundles/bloxd.io/chunks/js/298.js` (50 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89)

#### 45. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L153` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L594) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L153)

```diff
-           name: "shadowMaxZ",
+           name: "backOpStencilDepthPass",
```

#### 46. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L157-L158` → after: `L598-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L598-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L598-L619) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L157-L158)

```diff
-             has: RR => "shadowMaxZ" in RR,
-             get: RR => RR.shadowMaxZ
+             has: rr => "backOpStencilDepthPass" in rr,
+             get: rr => rr.backOpStencilDepthPass
+           },
+           metadata: Nr
+         }, null, hr), (0, Zr.k)(rr, null, Ur, {
+           kind: "getter",
+           name: "mask",
+           static: !1,
+           private: !1,
+           access: {
+             has: rr => "mask" in rr,
+             get: rr => rr.mask
+           },
+           metadata: Nr
+         }, null, hr), (0, Zr.k)(rr, null, tr, {
+           kind: "getter",
+ ... (6 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L168-L283` → after: `L629-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L629-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L629-L688) · [Before (L168-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L168-L283)

```diff
-     })()
-   },
-   53579: (RR, JR, GR) => {
-     GR.d(JR, {
-       b: () => tR
-     });
-     var yR = GR(42011);
-     class tR extends yR.f {
-       constructor(RR, JR, GR, tR, uR) {
-         let ZR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           qR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           iR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
-           fR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
-           VR = arguments.length > 9 ? arguments[9] : void 0,
-           KR = arguments.length > 10 ? arguments[10] : void 0,
-           wR = arguments.length > 11 ? arguments[11] : void 0,
- ... (100 more removed lines; see GitHub link above)
+     })();
+     var tr = Qr(42167),
+       hr = Qr(41796),
+       zr = Qr(41769);
+     let Yr = (() => {
+       var rr;
+       let Sr, Qr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr, Or, Lr, lr, Xr, Pr, Hr, qr, Rr, gr, Cr, Mr, Gr, kr, Ar, Vr, ir, wr, cr, Fr = [],
+         or = [],
+         br = [],
+         Jr = [],
+         Dr = [],
+         dr = [],
+         sr = [],
+         ur = [],
+         rS = [],
+         SS = [],
+ ... (44 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L285-L332` → after: `L690-L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L690-L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L690-L691) · [Before (L285-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L285-L332)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(RR) {
-         const JR = this.material;
-         if (JR === RR) return;
-         const GR = JR && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(RR), GR && JR?.dispose()
-       }
-       _setInternalMaterial(RR) {
-         this._setMaterial(RR), this.material && (this.material.fillMode = fR.d.LineListDrawMode, this.material.disableLighting = !0)
-       }
- ... (32 more removed lines; see GitHub link above)
+         set useVertexPulling(Sr) {
+           this._useVertexPulling !== Sr && (this._useVertexPulling = Sr, this.BQr(rr.MiscDirtyFlag))
```

#### 49. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L334-L340` → after: `L693-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L693-L694) · [Before (L334-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L334-L340)

```diff
-         return new wR(RR, this.jH(), JR, this, GR)
-       }
-       createInstance(RR) {
-         const JR = new rR(RR, this);
-         if (this.Im) {
-           JR.Im = {};
-           for (const RR in this.Im) JR.Im[RR] = this.Im[RR]
+         get _supportGlowLayer() {
+           return !1
```

#### 50. `bundles/bloxd.io/chunks/js/298.js` (Changed code · before: `L342-L365` → after: `L696-L2648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-b0212652d46ea5e56e0283bcc5d5e736f4f602a47c5e52aae21e1ef0ae7f0c89) · [After (L696-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/298.js#L696-L2648) · [Before (L342-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/298.js#L342-L365)

```diff
-         return JR
-       }
-       serialize(RR) {
-         super.serialize(RR), RR.color = this.color.QtR(), RR.alpha = this.alpha
-       }
-       static Parse(RR, JR) {
-         const GR = new wR(RR.name, JR);
-         return GR.color = uR.d.FromArray(RR.color), GR.alpha = RR.alpha, GR
-       }
-     }
-     wR.ForceGLSL = !1;
-     class rR extends iR.d {
-       constructor(RR, JR) {
-         super(RR, JR), this.intersectionThreshold = JR.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+         set _glowModeEnabled(rr) {}
+         get shaderLanguage() {
+           return this._shaderLanguage
+         }
+         get canRenderToMRT() {
+           return !1
+         }
+         set alpha(Sr) {
+           if (this._alpha === Sr) return;
+           const Qr = this._alpha;
+           this._alpha = Sr, 1 !== Qr && 1 !== Sr || this.BQr(rr.MiscDirtyFlag + rr.PrePassDirtyFlag)
+         }
+         get alpha() {
+           return this._alpha
+         }
+         set backFaceCulling(Sr) {
+ ... (1937 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/299.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/299.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8)

#### 1. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L4)

```diff
-   42005: (RR, JR, GR) => {
+   54125: (rr, Sr, Qr) => {
```

#### 2. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L6-L11)

```diff
-       c: () => MR,
-       g: () => CR,
-       h: () => WR,
-       k: () => AR,
-       o: () => UR,
-       q: () => nR
+       d: () => Zr
```

#### 3. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L13-L45` → after: `L8-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L8-L26) · [Before (L13-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L13-L45)

```diff
-     var yR = GR(41542),
-       tR = GR(41612),
-       uR = GR(38204),
-       ZR = GR(41663),
-       qR = GR(42011),
-       iR = GR(41873),
-       fR = GR(41568),
-       VR = GR(41869),
-       KR = GR(38224),
-       wR = GR(41855),
-       rR = GR(41852),
-       eR = GR(41897),
-       aR = GR(38253);
-     const LR = {
-       effect: null,
-       subMesh: null
- ... (17 more removed lines; see GitHub link above)
+     class Zr {}
+     Zr.AUTOSAMPLERSUFFIX = "Sampler", Zr.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Zr.ALPHA_DISABLE = 0, Zr.ALPHA_ADD = 1, Zr.ALPHA_COMBINE = 2, Zr.ALPHA_SUBTRACT = 3, Zr.ALPHA_MULTIPLY = 4, Zr.ALPHA_MAXIMIZED = 5, Zr.ALPHA_ONEONE = 6, Zr.ALPHA_PREMULTIPLIED = 7, Zr.ALPH … [truncated]
+   },
+   54104: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => fr
+     });
+     var Zr = Qr(41872),
+       Wr = Qr(41875),
+       ar = Qr(38560),
+       jr = Qr(42094),
+       Ir = Qr(42069);
+     let fr = (() => {
+       var rr;
+       let Sr, Qr, fr, Er, pr = jr.c,
+         xr = [];
+ ... (3 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L48-L58` → after: `L231-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L231-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L231-L284) · [Before (L48-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L48-L58)

```diff
-       get shaderPath() {
-         return this._shaderPath
-       }
-       set shaderPath(RR) {
-         this._shaderPath = RR
-       }
-       get options() {
-         return this._options
-       }
-       get isMultiview() {
-         return this._multiview
+     }
+   },
+   54151: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       b: () => Zr.c
+     });
+     var Zr = Qr(42284);
+     (0, Zr.f)()
+   },
+   54112: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => Zr.b
+     });
+     var Zr = Qr(42297);
+     (0, Zr.c)()
+   },
+ ... (38 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L61-L67` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L287) · [Before (L61-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L61-L67)

```diff
-         return "ShaderMaterial"
-       }
-       needAlphaBlending() {
-         return this.alpha < 1 || this._options.needAlphaBlending
-       }
-       needAlphaTesting() {
-         return this._options.needAlphaTesting
+         return "LinesMesh"
```

#### 6. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L69-L70` → after: `L289-L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L289-L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L289-L290) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L69-L70)

```diff
-       _checkUniform(RR) {
-         -1 === this._options.uniforms.indexOf(RR) && this._options.uniforms.push(RR)
+       get material() {
+         return this._internalAbstractMeshDataInfo._material
```

#### 7. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L72-L73` → after: `L292-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L292-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L292-L296) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L72-L73)

```diff
-       setTexture(RR, JR) {
-         return -1 === this._options.samplers.indexOf(RR) && this._options.samplers.push(RR), this._textures[RR] = JR, this
+       set material(rr) {
+         const Sr = this.material;
+         if (Sr === rr) return;
+         const Qr = Sr && this._ownsMaterial;
+         this._ownsMaterial = !1, this._setInternalMaterial(rr), Qr && Sr?.dispose()
```

#### 8. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L75-L76` → after: `L298-L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L298-L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L298-L299) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L75-L76)

```diff
-       setInternalTexture(RR, JR) {
-         return -1 === this._options.samplers.indexOf(RR) && this._options.samplers.push(RR), this._internalTextures[RR] = JR, this
+       _setInternalMaterial(rr) {
+         this._setMaterial(rr), this.material && (this.material.fillMode = Er.d.LineListDrawMode, this.material.disableLighting = !0)
```

#### 9. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L78-L127` → after: `L301-L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L301-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L301-L302) · [Before (L78-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L78-L127)

```diff
-       removeTexture(RR) {
-         delete this._textures[RR]
-       }
-       setTextureArray(RR, JR) {
-         return -1 === this._options.samplers.indexOf(RR) && this._options.samplers.push(RR), this._checkUniform(RR), this._textureArrays[RR] = JR, this
-       }
-       setExternalTexture(RR, JR) {
-         return -1 === this._options.externalTextures.indexOf(RR) && this._options.externalTextures.push(RR), this._externalTextures[RR] = JR, this
-       }
-       setFloat(RR, JR) {
-         return this._checkUniform(RR), this._floats[RR] = JR, this
-       }
-       setInt(RR, JR) {
-         return this._checkUniform(RR), this._ints[RR] = JR, this
-       }
-       setUInt(RR, JR) {
- ... (34 more removed lines; see GitHub link above)
+       get checkCollisions() {
+         return !1
```

#### 10. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L129-L133` → after: `L304-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L304-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L304-L314) · [Before (L129-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L129-L133)

```diff
-       setMatrices(RR, JR) {
-         this._checkUniform(RR);
-         const GR = new Float32Array(16 * JR.length);
-         for (let yR = 0; yR < JR.length; yR++) {
-           JR[yR].copyToArray(GR, 16 * yR)
+       set checkCollisions(rr) {}
+       _bind(rr, Sr) {
+         if (!this._geometry) return this;
+         const Qr = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
+         if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Sr, Qr) : this._geometry._bind(Sr, Qr, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMate … [truncated]
+           const {
+             r: rr,
+             g: Sr,
+             b: Qr
+           } = this.color;
+           this._color4.set(rr, Sr, Qr, this.alpha), this.material.setColor4("color", this._color4)
```

#### 11. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L135-L147` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L316) · [Before (L135-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L135-L147)

```diff
-         return this._matrixArrays[RR] = GR, this
-       }
-       setMatrix3x3(RR, JR) {
-         return this._checkUniform(RR), this._matrices3x3[RR] = JR, this
-       }
-       setMatrix2x2(RR, JR) {
-         return this._checkUniform(RR), this._matrices2x2[RR] = JR, this
-       }
-       setArray2(RR, JR) {
-         return this._checkUniform(RR), this._vectors2Arrays[RR] = JR, this
-       }
-       setArray3(RR, JR) {
-         return this._checkUniform(RR), this._vectors3Arrays[RR] = JR, this
+         return this
```

#### 12. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L149-L150` → after: `L318-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L318-L321) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L149-L150)

```diff
-       setArray4(RR, JR) {
-         return this._checkUniform(RR), this._vectors4Arrays[RR] = JR, this
+       _draw(rr, Sr, Qr) {
+         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
+         const Zr = this.eC().MU();
+         return this._unIndexed ? Zr.drawArraysType(Er.d.LineListDrawMode, rr.verticesStart, rr.verticesCount, Qr) : Zr.drawElementsType(Er.d.LineListDrawMode, rr.indexStart, rr.indexCount, Qr), this
```

#### 13. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L152-L243` → after: `L323-L325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L323-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L323-L325) · [Before (L152-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L152-L243)

```diff
-       setUniformBuffer(RR, JR) {
-         return -1 === this._options.uniformBuffers.indexOf(RR) && this._options.uniformBuffers.push(RR), this._uniformBuffers[RR] = JR, this
-       }
-       setTextureSampler(RR, JR) {
-         return -1 === this._options.samplerObjects.indexOf(RR) && this._options.samplerObjects.push(RR), this._textureSamplers[RR] = JR, this
-       }
-       setStorageBuffer(RR, JR) {
-         return -1 === this._options.storageBuffers.indexOf(RR) && this._options.storageBuffers.push(RR), this._storageBuffers[RR] = JR, this
-       }
-       setDefine(RR, JR) {
-         const GR = RR.trimEnd() + " ",
-           yR = this.options.defines.findIndex((JR => JR === RR || JR.startsWith(GR)));
-         return yR >= 0 && this.options.defines.splice(yR, 1), ("boolean" !== typeof JR || JR) && this.options.defines.push(GR + JR), this
-       }
-       isReadyForSubMesh(RR, JR, GR) {
-         return this.isReady(RR, GR, JR)
- ... (76 more removed lines; see GitHub link above)
+       dispose(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Sr) && this.material?.dispose(!1, !1, !0), super.dispose(rr)
```

#### 14. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L245-L331` → after: `L327-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L327-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L327-L332) · [Before (L245-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L245-L331)

```diff
-       bindOnlyWorldMatrix(RR, JR) {
-         const GR = JR ?? this.getEffect();
-         if (!GR) return;
-         const yR = this._options.uniforms; - 1 !== yR.indexOf("world") && GR.setMatrix("world", RR);
-         const tR = this.jH(); - 1 !== yR.indexOf("worldView") && (RR.multiplyToRef(tR.getViewMatrix(), this._cachedWorldViewMatrix), GR.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== yR.indexOf("worldViewProjection") && (RR.multiplyToRef(tR.getTransformMatrix(), thi … [truncated]
-       }
-       bindForSubMesh(RR, JR, GR) {
-         this.bind(RR, JR, GR._drawWrapperOverride?.effect, GR)
-       }
-       bind(RR, JR, GR, yR) {
-         const tR = yR && this._storeEffectOnSubMeshes,
-           uR = GR ?? (tR ? yR.effect : this.getEffect());
-         if (!uR) return;
-         const ZR = this.jH();
-         this._activeEffect = uR, this.bindOnlyWorldMatrix(RR, GR);
-         const qR = this._options.uniformBuffers;
- ... (71 more removed lines; see GitHub link above)
+       clone(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           Qr = arguments.length > 2 ? arguments[2] : void 0;
+         if (Sr && void 0 === Sr._addToSceneRootNodes) {
+           const Qr = Sr;
+           return Qr.source = this, new mr(rr, this.eC(), Qr.parent, Qr.source, Qr.doNotCloneChildren)
```

#### 15. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L333` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L334) · [Before (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L333)

```diff
-         return RR
+         return new mr(rr, this.eC(), Sr, this, Qr)
```

#### 16. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L335-L345` → after: `L336-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L336-L340) · [Before (L335-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L335-L345)

```diff
-       hasTexture(RR) {
-         if (super.hasTexture(RR)) return !0;
-         for (const GR in this._textures)
-           if (this._textures[GR] === RR) return !0;
-         const JR = RR.getInternalTexture();
-         for (const GR in this._internalTextures)
-           if (this._internalTextures[GR] === JR) return !0;
-         for (const GR in this._textureArrays) {
-           const JR = this._textureArrays[GR];
-           for (let GR = 0; GR < JR.length; GR++)
-             if (JR[GR] === RR) return !0
+       createInstance(rr) {
+         const Sr = new Nr(rr, this);
+         if (this.pG) {
+           Sr.pG = {};
+           for (const rr in this.pG) Sr.pG[rr] = this.pG[rr]
```

#### 17. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L391-L401` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L344-L345) · [Before (L391-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L391-L401)

```diff
-       dispose(RR, JR, GR) {
-         if (JR) {
-           let RR;
-           for (RR in this._textures) this._textures[RR].dispose();
-           for (RR in this._internalTextures) this._internalTextures[RR].dispose();
-           for (RR in this._textureArrays) {
-             const JR = this._textureArrays[RR];
-             for (let RR = 0; RR < JR.length; RR++) JR[RR].dispose()
-           }
-         }
-         this._textures = {}, this._internalTextures = {}, super.dispose(RR, JR, GR)
+       serialize(rr) {
+         super.serialize(rr), rr.color = this.color.OWr(), rr.alpha = this.alpha
```

#### 18. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L403-L447` → after: `L347-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L347-L349) · [Before (L403-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L403-L447)

```diff
-       serialize() {
-         const RR = yR.c.Serialize(this);
-         let JR;
-         for (JR in RR.customType = "BABYLON.ShaderMaterial", RR.uniqueId = this.uniqueId, RR.options = this._options, RR.shaderPath = this._shaderPath, RR.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, RR.stencil = this.stencil.serialize(), RR.textures = {}, this._texture … [truncated]
-         for (JR in RR.textureArrays = {}, this._textureArrays) {
-           RR.textureArrays[JR] = [];
-           const GR = this._textureArrays[JR];
-           for (let yR = 0; yR < GR.length; yR++) RR.textureArrays[JR].push(GR[yR].serialize())
-         }
-         for (JR in RR.ints = {}, this._ints) RR.ints[JR] = this._ints[JR];
-         for (JR in RR.uints = {}, this._uints) RR.uints[JR] = this._uints[JR];
-         for (JR in RR.floats = {}, this._floats) RR.floats[JR] = this._floats[JR];
-         for (JR in RR.floatsArrays = {}, this._floatsArrays) RR.floatsArrays[JR] = this._floatsArrays[JR];
-         for (JR in RR.colors3 = {}, this._colors3) {
-           const GR = this._colors3[JR];
-           RR.colors3[JR] = [GR.r, GR.g, GR.b]
- ... (29 more removed lines; see GitHub link above)
+       static Parse(rr, Sr) {
+         const Qr = new mr(rr.name, Sr);
+         return Qr.color = ar.e.FromArray(rr.color), Qr.alpha = rr.alpha, Qr
```

#### 19. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L450-L471` → after: `L352-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L352-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L352-L355) · [Before (L450-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L450-L471)

```diff
- 
-     function UR(RR, JR, GR) {
-       const tR = yR.c.Parse((() => new nR(RR.name, JR, RR.shaderPath, RR.options, RR.storeEffectOnSubMeshes)), RR, JR, GR);
-       let ZR;
-       for (ZR in RR.stencil && tR.stencil.parse(RR.stencil, JR, GR), RR.textures) tR.setTexture(ZR, qR.f.Parse(RR.textures[ZR], JR, GR));
-       for (ZR in RR.textureArrays) {
-         const yR = RR.textureArrays[ZR],
-           uR = [];
-         for (let RR = 0; RR < yR.length; RR++) uR.push(qR.f.Parse(yR[RR], JR, GR));
-         tR.setTextureArray(ZR, uR)
-       }
-       for (ZR in RR.ints) tR.setInt(ZR, RR.ints[ZR]);
-       for (ZR in RR.uints) tR.setUInt(ZR, RR.uints[ZR]);
-       for (ZR in RR.floats) tR.setFloat(ZR, RR.floats[ZR]);
-       for (ZR in RR.floatsArrays) tR.setFloats(ZR, RR.floatsArrays[ZR]);
-       for (ZR in RR.colors3) {
- ... (6 more removed lines; see GitHub link above)
+     mr.ForceGLSL = !1;
+     class Nr extends fr.e {
+       constructor(rr, Sr) {
+         super(rr, Sr), this.intersectionThreshold = Sr.intersectionThreshold
```

#### 20. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L473-L521` → after: `L357-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L357-L358) · [Before (L473-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L473-L521)

```diff
-       for (ZR in RR.colors3Arrays) {
-         const JR = RR.colors3Arrays[ZR].reduce(((RR, JR, GR) => (GR % 3 === 0 ? RR.push([JR]) : RR[RR.length - 1].push(JR), RR)), []).map((RR => ({
-           r: RR[0],
-           g: RR[1],
-           b: RR[2]
-         })));
-         tR.setColor3Array(ZR, JR)
-       }
-       for (ZR in RR.colors4) {
-         const JR = RR.colors4[ZR];
-         tR.setColor4(ZR, {
-           r: JR[0],
-           g: JR[1],
-           b: JR[2],
-           a: JR[3]
-         })
- ... (33 more removed lines; see GitHub link above)
+       getClassName() {
+         return "InstancedLinesMesh"
```

#### 21. `bundles/bloxd.io/chunks/js/299.js` (Changed code · before: `L568-L569` → after: `L364-L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-303a93c84060ace13cd882d4e0a29b1e2bd8a511f222b179bc76f58ef9fbd0a8) · [After (L364-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/299.js#L364-L365) · [Before (L568-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/299.js#L568-L569)

```diff
-       XR || (XR = !0, nR.Parse = UR, nR.ParseFromFileAsync = WR, nR.ParseFromSnippetAsync = AR, nR.CreateFromSnippetAsync = CR, (0, aR.f)("BABYLON.ShaderMaterial", nR))
-     }
+       Ur || (Ur = !0, Ir.c._LinesMeshParser = (rr, Sr) => mr.Parse(rr, Sr))
+     }(Zr = mr.prototype).enableEdgesRendering ?? (Zr.enableEdgesRendering = (0, xr.h)("LinesMesh", "enableEdgesRendering")), (Wr = Nr.prototype).enableEdgesRendering ?? (Wr.enableEdgesRendering = (0, xr.h)("InstancedLinesMesh", "enableEdgesRendering"))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/300.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/300.js` (74 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008)

#### 1. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L4-L6` → after: `L4-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L4-L11) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L4-L6)

```diff
-   42020: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       default: () => OG
+   42308: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       c: () => Br,
+       d: () => Kr,
+       h: () => nr,
+       j: () => er,
+       k: () => Yr,
+       o: () => zr
```

#### 2. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L8-L38` → after: `L13-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L13-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L13-L25) · [Before (L8-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L8-L38)

```diff
-     var yR = GR(66),
-       tR = GR(1163),
-       uR = GR.n(tR);
-     const ZR = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
-       qR = 3e3;
- 
-     function iR(RR) {
-       return RR.down && RR.inPlay && !RR.bound
-     }
- 
-     function fR(RR, JR) {
-       let GR = 0,
-         yR = RR.length;
-       for (; GR < yR;) {
-         const tR = GR + yR >> 1;
-         RR[tR].atMs <= JR ? GR = tR + 1 : yR = tR
- ... (15 more removed lines; see GitHub link above)
+     var Zr = Qr(41889),
+       Wr = Qr(41941),
+       ar = Qr(38560),
+       jr = Qr(41995),
+       Ir = Qr(42310),
+       fr = Qr(42192),
+       Er = Qr(41906),
+       pr = Qr(42184),
+       xr = Qr(38587),
+       mr = Qr(42174),
+       Nr = Qr(42167),
+       Ur = Qr(42206),
+       tr = Qr(38609);
```

#### 3. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L40-L71` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L27-L28) · [Before (L40-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L40-L71)

```diff
-       Mouse1: "Left click",
-       Mouse2: "Middle click",
-       Mouse3: "Right click",
-       Mouse4: "Back button",
-       Mouse5: "Forward button",
-       Space: "Space",
-       Escape: "Esc",
-       ShiftLeft: "Shift",
-       ShiftRight: "Right Shift",
-       ControlLeft: "Ctrl",
-       ControlRight: "Right Ctrl",
-       AltLeft: "Alt",
-       AltRight: "Right Alt",
-       MetaLeft: "Meta",
-       MetaRight: "Right Meta",
-       ArrowUp: "\u2191",
- ... (16 more removed lines; see GitHub link above)
+       effect: null,
+       subMesh: null
```

#### 4. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L73-L369` → after: `L30-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L30-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L30-L44) · [Before (L73-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L73-L369)

```diff
- 
-     function rR(RR) {
-       var JR;
-       const GR = wR[RR];
-       if (void 0 !== GR) return GR;
-       const yR = null !== (JR = /^(?:Key|Digit)(.)$/.exec(RR)) && void 0 !== JR ? JR : /^Numpad(.+)$/.exec(RR);
-       return null !== yR ? RR.startsWith("Numpad") ? `Num ${yR[1]}` : yR[1] : RR
-     }
-     const eR = 250,
-       aR = 60;
-     var LR = GR(1378);
-     const nR = 6;
- 
-     function UR(RR) {
-       const JR = Math.max(0, Math.floor(RR / 1e3)),
-         GR = Math.floor(JR / 3600),
- ... (281 more removed lines; see GitHub link above)
+     class zr extends pr.b {
+       constructor(rr, Sr, Qr) {
+         let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
+         super(rr, Sr, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this. … [truncated]
+           needAlphaBlending: !1,
+           needAlphaTesting: !1,
+           attributes: ["position", "normal", "uv"],
+           uniforms: ["worldViewProjection"],
+           uniformBuffers: [],
+           samplers: [],
+           externalTextures: [],
+           samplerObjects: [],
+           storageBuffers: [],
+           defines: [],
+           useClipPlane: !1,
```

#### 5. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L371-L380` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L46) · [Before (L371-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L371-L380)

```diff
-         })
-       }
-       return GR
-     }
-     class oR {
-       constructor(RR) {
-         this.WL = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.WL = HR(RR), this.positionStarts = [];
-         let JR = 0;
-         for (const GR of this.WL) this.positionStarts.push(JR), JR += GR.endMs - GR.startMs;
-         this.durationMs = JR
+         }
```

#### 6. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L382-L384` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L48-L49) · [Before (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L382-L384)

```diff
-       get startMs() {
-         var RR, JR;
-         return null !== (RR = null === (JR = this.WL[0]) || void 0 === JR ? void 0 : JR.startMs) && void 0 !== RR ? RR : 0
+       get shaderPath() {
+         return this._shaderPath
```

#### 7. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L386-L388` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L51-L52) · [Before (L386-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L386-L388)

```diff
-       get endMs() {
-         var RR, JR;
-         return null !== (RR = null === (JR = this.WL.at(-1)) || void 0 === JR ? void 0 : JR.endMs) && void 0 !== RR ? RR : 0
+       set shaderPath(rr) {
+         this._shaderPath = rr
```

#### 8. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L390-L395` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L54-L55) · [Before (L390-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L390-L395)

```diff
-       toPosition(RR) {
-         for (let JR = 0; JR < this.WL.length; JR++) {
-           const GR = this.WL[JR];
-           if (RR < GR.endMs) return this.positionStarts[JR] + Math.max(0, RR - GR.startMs)
-         }
-         return this.durationMs
+       get options() {
+         return this._options
```

#### 9. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L397-L401` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L57-L58) · [Before (L397-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L397-L401)

```diff
-       toTime(RR) {
-         const JR = Math.max(0, Math.min(this.durationMs, RR));
-         for (let GR = this.WL.length - 1; GR >= 0; GR--)
-           if (JR >= this.positionStarts[GR]) return this.WL[GR].startMs + (JR - this.positionStarts[GR]);
-         return this.startMs
+       get isMultiview() {
+         return this._multiview
```

#### 10. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L403-L404` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L60-L61) · [Before (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L403-L404)

```diff
-       contains(RR) {
-         return this.WL.some((JR => RR >= JR.startMs && RR < JR.endMs))
+       getClassName() {
+         return "ShaderMaterial"
```

#### 11. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L406-L432` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L63-L64) · [Before (L406-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L406-L432)

```diff
-       nextPlayableTime(RR) {
-         for (const JR of this.WL) {
-           if (RR < JR.startMs) return JR.startMs;
-           if (RR < JR.endMs) return RR
-         }
-         return null
-       }
-     }
- 
-     function cR(RR) {
-       return [...RR].sort(((RR, JR) => RR.startMs - JR.startMs))
-     }
- 
-     function PR(RR, JR) {
-       let GR = 1 / 0,
-         yR = -1 / 0;
- ... (11 more removed lines; see GitHub link above)
+       needAlphaBlending() {
+         return this.alpha < 1 || this._options.needAlphaBlending
```

#### 12. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L434-L437` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L66-L67) · [Before (L434-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L434-L437)

```diff
-     }
-     class IR {
-       constructor(RR, JR) {
-         this.wallNowMs = JR, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = RR, this.anchorWallMs = JR()
+       needAlphaTesting() {
+         return this._options.needAlphaTesting
```

#### 13. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L439-L440` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L69-L70) · [Before (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L439-L440)

```diff
-       get playing() {
-         return this.playingState
+       _checkUniform(rr) {
+         -1 === this._options.uniforms.indexOf(rr) && this._options.uniforms.push(rr)
```

#### 14. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L442-L443` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L72-L73) · [Before (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L442-L443)

```diff
-       get speed() {
-         return this.speedState
+       setTexture(rr, Sr) {
+         return -1 === this._options.samplers.indexOf(rr) && this._options.samplers.push(rr), this._textures[rr] = Sr, this
```

#### 15. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L445-L446` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L75-L76) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L445-L446)

```diff
-       timeMs() {
-         return this.timeAtWall(this.wallNowMs())
+       setInternalTexture(rr, Sr) {
+         return -1 === this._options.samplers.indexOf(rr) && this._options.samplers.push(rr), this._internalTextures[rr] = Sr, this
```

#### 16. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L448-L449` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L78-L79) · [Before (L448-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L448-L449)

```diff
-       timeAtWall(RR) {
-         return this.playingState ? this.anchorTimeMs + (RR - this.anchorWallMs) * this.speedState : this.anchorTimeMs
+       removeTexture(rr) {
+         delete this._textures[rr]
```

#### 17. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L451-L452` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L81-L82) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L451-L452)

```diff
-       play() {
-         this.reanchor(), this.playingState = !0
+       setTextureArray(rr, Sr) {
+         return -1 === this._options.samplers.indexOf(rr) && this._options.samplers.push(rr), this._checkUniform(rr), this._textureArrays[rr] = Sr, this
```

#### 18. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L454-L455` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L84-L85) · [Before (L454-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L454-L455)

```diff
-       pause() {
-         this.reanchor(), this.playingState = !1
+       setExternalTexture(rr, Sr) {
+         return -1 === this._options.externalTextures.indexOf(rr) && this._options.externalTextures.push(rr), this._externalTextures[rr] = Sr, this
```

#### 19. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L457-L458` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L87-L88) · [Before (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L457-L458)

```diff
-       seek(RR) {
-         this.anchorTimeMs = RR, this.anchorWallMs = this.wallNowMs()
+       setFloat(rr, Sr) {
+         return this._checkUniform(rr), this._floats[rr] = Sr, this
```

#### 20. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L460-L461` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L90-L91) · [Before (L460-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L460-L461)

```diff
-       setSpeed(RR) {
-         this.reanchor(), this.speedState = RR
+       setInt(rr, Sr) {
+         return this._checkUniform(rr), this._ints[rr] = Sr, this
```

#### 21. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L463-L465` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L93-L94) · [Before (L463-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L463-L465)

```diff
-       reanchor() {
-         const RR = this.wallNowMs();
-         this.anchorTimeMs = this.timeAtWall(RR), this.anchorWallMs = RR
+       setUInt(rr, Sr) {
+         return this._checkUniform(rr), this._uints[rr] = Sr, this
```

#### 22. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L467-L480` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L96-L97) · [Before (L467-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L467-L480)

```diff
-     }
-     const mR = "bloxd-clock";
-     class zR {
-       constructor(RR) {
-         this.samples = void 0, this.samples = [];
-         for (const GR of RR) {
-           var JR;
-           const RR = GR.data;
-           GR.type === DR.c.Custom && (null === RR || void 0 === RR ? void 0 : RR.tag) === mR && "number" === typeof(null === (JR = RR.payload) || void 0 === JR ? void 0 : JR.epochMs) && this.samples.push({
-             domMs: GR.timestamp,
-             offsetMs: RR.payload.epochMs - GR.timestamp
-           })
-         }
-         this.samples.sort(((RR, JR) => RR.domMs - JR.domMs))
+       setFloats(rr, Sr) {
+         return this._checkUniform(rr), this._floatsArrays[rr] = Sr, this
```

#### 23. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L482-L483` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L99-L100) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L482-L483)

```diff
-       toEpoch(RR) {
-         return RR + this.offsetAtDom(RR)
+       setColor3(rr, Sr) {
+         return this._checkUniform(rr), this._colors3[rr] = Sr, this
```

#### 24. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L485-L486` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L102-L103) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L485-L486)

```diff
-       toDom(RR) {
-         return RR - this.offsetAtDom(RR)
+       setColor3Array(rr, Sr) {
+         return this._checkUniform(rr), this._colors3Arrays[rr] = Sr.reduce(((rr, Sr) => (rr.push(Sr.r, Sr.g, Sr.b), rr)), []), this
```

#### 25. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L488-L496` → after: `L105-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L105-L106) · [Before (L488-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L488-L496)

```diff
-       offsetAtDom(RR) {
-         var JR, GR;
-         let yR = 0,
-           tR = this.samples.length - 1;
-         for (; yR < tR;) {
-           const JR = Math.ceil((yR + tR) / 2);
-           this.samples[JR].domMs <= RR ? yR = JR : tR = JR - 1
-         }
-         return null !== (JR = null === (GR = this.samples[yR]) || void 0 === GR ? void 0 : GR.offsetMs) && void 0 !== JR ? JR : 0
+       setColor4(rr, Sr) {
+         return this._checkUniform(rr), this._colors4[rr] = Sr, this
```

#### 26. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L498-L560` → after: `L108-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L108-L109) · [Before (L498-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L498-L560)

```diff
-     }
-     const SR = new Set([DR.g.MouseMove, DR.g.MouseInteraction, DR.g.Scroll, DR.g.Input, DR.g.TouchMove, DR.g.Drag]),
-       jR = "bloxd-active",
-       dR = "player_death",
-       ER = "error",
-       YR = {
-         $exception: "error",
-         [ER]: "error",
-         death: "death",
-         [dR]: "death"
-       };
- 
-     function kR(RR, JR, GR) {
-       return function(RR, JR) {
-         const GR = [];
-         for (const yR of RR) {
- ... (47 more removed lines; see GitHub link above)
+       setColor4Array(rr, Sr) {
+         return this._checkUniform(rr), this._colors4Arrays[rr] = Sr.reduce(((rr, Sr) => (rr.push(Sr.r, Sr.g, Sr.b, Sr.a), rr)), []), this
```

#### 27. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L562-L569` → after: `L111-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L111-L112) · [Before (L562-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L562-L569)

```diff
-       return GR
-     }
-     const TR = 3e6;
-     class sR {
-       constructor(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
-           yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TR;
-         this.fetchUrls = RR, this.onUrls = JR, this.wallNowMs = GR, this.refreshableAfterMs = yR, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = GR()
+       setVector2(rr, Sr) {
+         return this._checkUniform(rr), this._vectors2[rr] = Sr, this
```

#### 28. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L571-L572` → after: `L114-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L114-L115) · [Before (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L571-L572)

```diff
-       get refreshing() {
-         return this.inFlight
+       setVector3(rr, Sr) {
+         return this._checkUniform(rr), this._vectors3[rr] = Sr, this
```

#### 29. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L574-L580` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L117-L118) · [Before (L574-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L574-L580)

```diff
-       request() {
-         if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
-         if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
-         const RR = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
-         RR > 0 ? this.timer = setTimeout((() => {
-           this.timer = null, this.request()
-         }), RR) : this.start(this.fetchUrls)
+       setVector4(rr, Sr) {
+         return this._checkUniform(rr), this._vectors4[rr] = Sr, this
```

#### 30. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L582-L583` → after: `L120-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L120-L121) · [Before (L582-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L582-L583)

```diff
-       destroy() {
-         this.destroyed = !0, null !== this.timer && clearTimeout(this.timer)
+       setQuaternion(rr, Sr) {
+         return this._checkUniform(rr), this._quaternions[rr] = Sr, this
```

#### 31. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L585-L596` → after: `L123-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L123-L124) · [Before (L585-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L585-L596)

```diff
-       start(RR) {
-         this.inFlight = !0;
-         const JR = this.wallNowMs();
-         this.lastRefreshWallMs = JR;
-         let GR = !1;
-         RR().then((RR => {
-           this.destroyed || (this.urlsFetchedAtWallMs = JR, this.onUrls(RR))
-         })).catch((RR => {
-           console.error("Failed to refresh the replay's URLs.", RR), GR = !0
-         })).finally((() => {
-           this.inFlight = !1, GR && this.request()
-         }))
+       setQuaternionArray(rr, Sr) {
+         return this._checkUniform(rr), this._quaternionsArrays[rr] = Sr.reduce(((rr, Sr) => (Sr.toArray(rr, rr.length), rr)), []), this
```

#### 32. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L598-L603` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L126-L127) · [Before (L598-L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L598-L603)

```diff
-     }
-     class hR {
-       constructor(RR, JR) {
-         let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
-           yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TR;
-         this.source = RR, this.description = JR, this.wallNowMs = GR, this.refreshableAfterMs = yR, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
+       setMatrix(rr, Sr) {
+         return this._checkUniform(rr), this._matrices[rr] = Sr, this
```

#### 33. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L605-L611` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L129-L135) · [Before (L605-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L605-L611)

```diff
-       reset(RR) {
-         this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
-         const JR = this.wallNowMs();
-         for (const GR of RR) this.entries.set(GR.sequence, {
-           urls: GR,
-           fetchedAtWallMs: JR
-         })
+       setMatrices(rr, Sr) {
+         this._checkUniform(rr);
+         const Qr = new Float32Array(16 * Sr.length);
+         for (let Zr = 0; Zr < Sr.length; Zr++) {
+           Sr[Zr].copyToArray(Qr, 16 * Zr)
+         }
+         return this._matrixArrays[rr] = Qr, this
```

#### 34. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L613-L615` → after: `L137-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L137-L138) · [Before (L613-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L613-L615)

```diff
-       get(RR) {
-         const JR = this.getFresh(RR);
-         return null !== JR ? JR : null === this.source || this.unavailable.has(RR) || this.failedFetches > 0 ? "failed" : "pending"
+       setMatrix3x3(rr, Sr) {
+         return this._checkUniform(rr), this._matrices3x3[rr] = Sr, this
```

#### 35. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L617-L618` → after: `L140-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L140-L141) · [Before (L617-L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L617-L618)

```diff
-       needs(RR) {
-         return null === this.getFresh(RR) && !this.unavailable.has(RR)
+       setMatrix2x2(rr, Sr) {
+         return this._checkUniform(rr), this._matrices2x2[rr] = Sr, this
```

#### 36. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L620-L623` → after: `L143-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L143-L144) · [Before (L620-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L620-L623)

```diff
-       request(RR) {
-         if (null === this.source || this.inFlight || this.failedFetches >= 3 || this.wallNowMs() < this.retryAtWallMs) return;
-         const JR = RR.filter((RR => this.needs(RR)));
-         JR.length > 0 && this.fetch(this.source, JR.slice(0, this.source.maxSequences))
+       setArray2(rr, Sr) {
+         return this._checkUniform(rr), this._vectors2Arrays[rr] = Sr, this
```

#### 37. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L625-L626` → after: `L146-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L146-L147) · [Before (L625-L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L625-L626)

```diff
-       destroy() {
-         this.destroyed = !0
+       setArray3(rr, Sr) {
+         return this._checkUniform(rr), this._vectors3Arrays[rr] = Sr, this
```

#### 38. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L628-L630` → after: `L149-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L149-L150) · [Before (L628-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L628-L630)

```diff
-       getFresh(RR) {
-         const JR = this.entries.get(RR);
-         return void 0 === JR ? null : null === this.source || this.wallNowMs() - JR.fetchedAtWallMs < this.refreshableAfterMs ? JR.urls : null
+       setArray4(rr, Sr) {
+         return this._checkUniform(rr), this._vectors4Arrays[rr] = Sr, this
```

#### 39. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L632-L648` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L152-L153) · [Before (L632-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L632-L648)

```diff
-       fetch(RR, JR) {
-         this.inFlight = !0;
-         const GR = this.wallNowMs();
-         RR.load(JR).then((RR => {
-           if (this.destroyed) return;
-           this.failedFetches = 0;
-           const yR = new Set;
-           for (const JR of RR) this.entries.set(JR.sequence, {
-             urls: JR,
-             fetchedAtWallMs: GR
-           }), yR.add(JR.sequence);
-           for (const GR of JR) yR.has(GR) || (console.warn(`Replay sequence ${GR} has no ${this.description}.`), this.unavailable.add(GR))
-         })).catch((RR => {
-           console.error(`Failed to fetch the replay's ${this.description}.`, RR), this.failedFetches++, this.retryAtWallMs = this.wallNowMs() + 6e4
-         })).finally((() => {
-           this.inFlight = !1
- ... (1 more removed lines; see GitHub link above)
+       setUniformBuffer(rr, Sr) {
+         return -1 === this._options.uniformBuffers.indexOf(rr) && this._options.uniformBuffers.push(rr), this._uniformBuffers[rr] = Sr, this
```

#### 40. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L650-L661` → after: `L155-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L155-L156) · [Before (L650-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L650-L661)

```diff
-     }
-     class RJ {
-       constructor(RR, JR, GR, yR) {
-         let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-           uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
-           ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : TR;
-         this.load = JR, this.onLoaded = GR, this.onFailed = yR, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = JJ([]), this.hidden = [], this.destroyed = !1, this.chunks = [...RR].sort(((RR, JR) => RR.startMs - JR.startMs)).map((RR => ({
-           chunk: RR,
-           status: "idle",
-           attempts: 0,
-           telemetry: null
-         }))), this.urls = new hR(tR, "telemetry URLs", uR, ZR), this.urls.reset(yJ(RR))
+       setTextureSampler(rr, Sr) {
+         return -1 === this._options.samplerObjects.indexOf(rr) && this._options.samplerObjects.push(rr), this._textureSamplers[rr] = Sr, this
```

#### 41. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L663-L664` → after: `L158-L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L158-L159) · [Before (L663-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L663-L664)

```diff
-       get telemetry() {
-         return this.merged
+       setStorageBuffer(rr, Sr) {
+         return -1 === this._options.storageBuffers.indexOf(rr) && this._options.storageBuffers.push(rr), this._storageBuffers[rr] = Sr, this
```

#### 42. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L666-L667` → after: `L161-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L161-L164) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L666-L667)

```diff
-       get hiddenRanges() {
-         return this.hidden
+       setDefine(rr, Sr) {
+         const Qr = rr.trimEnd() + " ",
+           Zr = this.options.defines.findIndex((Sr => Sr === rr || Sr.startsWith(Qr)));
+         return Zr >= 0 && this.options.defines.splice(Zr, 1), ("boolean" !== typeof Sr || Sr) && this.options.defines.push(Qr + Sr), this
```

#### 43. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L669-L670` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L166-L167) · [Before (L669-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L669-L670)

```diff
-       get loadedCount() {
-         return this.chunks.filter((RR => "loaded" === RR.status)).length
+       isReadyForSubMesh(rr, Sr, Qr) {
+         return this.isReady(rr, Qr, Sr)
```

#### 44. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L672-L689` → after: `L169-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L169-L173) · [Before (L672-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L672-L689)

```diff
-       update(RR, JR, GR) {
-         if (null === this.load || this.destroyed) return;
-         const yR = JR.toPosition(RR),
-           tR = JR.toTime(yR - 1e4),
-           uR = JR.toTime(yR + 6e4 * Math.max(1, GR)),
-           ZR = JR.toTime(yR + 12e4 * Math.max(1, GR)),
-           qR = this.chunks.filter((RR => "idle" === RR.status && RR.chunk.endMs >= tR && RR.chunk.startMs <= ZR)).sort(((JR, GR) => tJ(RR, JR.chunk) - tJ(RR, GR.chunk)));
-         this.urls.request(qR.flatMap((RR => {
-           var JR;
-           let {
-             chunk: GR
-           } = RR;
-           return null !== (JR = GR.sequence) && void 0 !== JR ? JR : []
-         })));
-         for (const iR of qR) {
-           if (this.loading >= 3) return;
- ... (2 more removed lines; see GitHub link above)
+       isReady(rr, Sr, Qr) {
+         const Zr = Qr && this._storeEffectOnSubMeshes;
+         if (this.isFrozen) {
+           const rr = Zr ? Qr._drawWrapper : this._drawWrapper;
+           if (rr.effect && rr._wasPreviouslyReady && rr._wasPreviouslyUsingInstances === Sr) return !0
```

#### 45. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L691-L696` → after: `L175-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L175-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L175-L187) · [Before (L691-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L691-L696)

```diff
-       }
-       replaceUrls(RR) {
-         this.urls.reset(yJ(RR));
-         for (const JR of this.chunks) {
-           const GR = RR.find((RR => RR.startMs === JR.chunk.startMs && RR.endMs === JR.chunk.endMs));
-           void 0 !== GR && (JR.chunk = GR, "failed" === JR.status && (JR.status = "idle"))
+         const ar = this.eC(),
+           Ir = ar.MU(),
+           Er = [],
+           pr = [];
+         let xr = null,
+           tr = this._shaderPath,
+           zr = this._options.uniforms,
+           Yr = this._options.uniformBuffers,
+           nr = this._options.samplers;
+         Ir.getCaps().multiview && ar.activeCamera && ar.activeCamera.outputRenderTarget && ar.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Er.push("#define MULTIVIEW"), -1 !== zr.indexOf("viewProjection") && -1 === zr.indexOf("viewProjectionR") &&  … [truncated]
+         for (let Wr = 0; Wr < this._options.defines.length; Wr++) {
+           const rr = 0 === this._options.defines[Wr].indexOf("#define") ? this._options.defines[Wr] : `#define ${this._options.defines[Wr]}`;
+           Er.push(rr)
```

#### 46. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L698-L730` → after: `L189-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L189-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L189-L207) · [Before (L698-L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L698-L730)

```diff
-       }
-       destroy() {
-         this.destroyed = !0, this.urls.destroy()
-       }
-       getUrl(RR) {
-         var JR;
-         if (void 0 === RR.sequence) return null !== (JR = RR.url) && void 0 !== JR ? JR : null;
-         const GR = this.urls.get(RR.sequence);
-         return "string" === typeof GR ? null : GR.url
-       }
-       startLoad(RR, JR, GR) {
-         RR.status = "loading", RR.attempts++, this.loading++, GR(JR).then((JR => {
-           this.destroyed || (RR.status = "loaded", RR.telemetry = JR, this.merge(), this.onLoaded())
-         })).catch((JR => {
-           this.destroyed || (console.error(`Failed to load replay telemetry for ${RR.chunk.startMs}-${RR.chunk.endMs}.`, JR), RR.status = RR.attempts < 2 ? "idle" : "failed", this.onFailed())
-         })).finally((() => {
- ... (17 more removed lines; see GitHub link above)
+         for (let Wr = 0; Wr < this._options.attributes.length; Wr++) pr.push(this._options.attributes[Wr]);
+         if (rr && rr.isVerticesDataPresent(jr.j.ColorKind) && (-1 === pr.indexOf(jr.j.ColorKind) && pr.push(jr.j.ColorKind), Er.push("#define VERTEXCOLOR")), Sr && (Er.push("#define INSTANCES"), (0, Nr.ob)(pr, this._materialHelperNeedsPreviousMatrices), rr?.hasThinInstances && (E … [truncated]
+           pr.push(jr.j.MatricesIndicesKind), pr.push(jr.j.MatricesWeightsKind), rr.numBoneInfluencers > 4 && (pr.push(jr.j.MatricesIndicesExtraKind), pr.push(jr.j.MatricesWeightsExtraKind));
+           const Sr = rr.skeleton;
+           Er.push("#define NUM_BONE_INFLUENCERS " + rr.numBoneInfluencers), xr = new fr.e, xr.addCPUSkinningFallback(0, rr), Sr.isUsingTextureForMatrices ? (Er.push("#define BONETEXTURE"), -1 === zr.indexOf("boneTextureInfo") && zr.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
+         } else Er.push("#define NUM_BONE_INFLUENCERS 0");
+         let er = 0;
+         const Kr = rr ? rr.morphTargetManager : null;
+         if (Kr) {
+           const Sr = -1 !== Er.indexOf("#define UV1"),
+             Qr = -1 !== Er.indexOf("#define UV2"),
+             Zr = -1 !== Er.indexOf("#define TANGENT"),
+             Wr = -1 !== Er.indexOf("#define NORMAL"),
+             ar = -1 !== Er.indexOf("#define VERTEXCOLOR");
+           er = (0, Nr.M)(Kr, Er, pr, rr, !0, Wr, Zr, Sr, Qr, ar), Kr.isUsingTextureForTargets && (-1 === zr.indexOf("morphTargetTextureIndices") && zr.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
+         } else Er.push("#define NUM_MORPH_INFLUENCERS 0");
+ ... (3 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L732-L856` → after: `L209-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L209-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L209-L269) · [Before (L732-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L732-L856)

```diff
-         const GR = RR.map((RR => function(RR, JR) {
-           const GR = RR.actions.at(-1);
-           if (void 0 === GR || 0 === GR.bits) return RR;
-           return {
-             ...RR,
-             actions: [...RR.actions, {
-               atMs: JR,
-               bits: 0
-             }]
-           }
-         }(JJ(RR.telemetry), RR.endMs)));
-         this.merged = JJ(GR), this.hidden = GR.flatMap(((JR, GR) => function(RR, JR) {
-           const GR = [];
-           let yR = null;
-           for (const {
-               atMs: tR,
- ... (109 more removed lines; see GitHub link above)
+         for (const Wr in this._textures)
+           if (!this._textures[Wr].isReady()) return !1;
+         for (const Wr in this._internalTextures)
+           if (!this._internalTextures[Wr].isReady) return !1;
+         rr && this.needAlphaTestingForMesh(rr) && Er.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, mr.c)(zr), (0, mr.h)(this, ar, Er)), ar.fogEnabled && rr?.applyFog && ar.fogMode !== Wr.f.FOGMODE_NONE && (Er.push("#define FOG"), -1 === zr.indexOf("view") & … [truncated]
+         const yr = Qr ? Qr.getRenderingMesh() : rr;
+         if (yr && this.useVertexPulling) {
+           const rr = yr.geometry;
+           rr && (this._vertexPullingMetadata = (0, Ur.f)(rr), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((rr, Sr) => {
+             zr.push(`vp_${Sr}_info`)
+           }))), Er.push("#define USE_VERTEX_PULLING");
+           const Sr = yr.geometry?.getIndexBuffer();
+           Sr && !yr.isUnIndexed && (Er.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Sr.is32Bits && Er.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
+         }
+         this.customShaderNameResolve && (zr = zr.slice(), Yr = Yr.slice(), nr = nr.slice(), tr = this.customShaderNameResolve(this.name, zr, Yr, nr, Er, pr));
+         const Br = Zr ? Qr._getDrawWrapper(void 0, !0) : this._drawWrapper,
+ ... (45 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L859-L905` → after: `L272-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L272-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L272-L286) · [Before (L859-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L859-L905)

```diff
-           return HR(tR).filter((RR => RR.endMs - RR.startMs >= yR))
-         }(this.activityTimes, JR, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(RR) {
-           const {
-             timeline: JR
-           } = RR;
-           return [...FR(RR.domEvents, RR.domClock), ...RR.telemetry.events.filter((RR => {
-             let {
-               event: JR
-             } = RR;
-             return "contextLost" === JR
-           })).map((RR => {
-             let {
-               atMs: JR
-             } = RR;
-             return {
-               kind: "graphicsCrash",
- ... (31 more removed lines; see GitHub link above)
+         const Er = Sr && Wr ? this._mustRebind(jr, ar, Zr, Sr.visibility) : jr.getCachedMaterial() !== this;
+         if (ar && Er) {
+           let rr;
+           for (rr in fr || -1 === this._options.uniforms.indexOf("view") || ar.setMatrix("view", jr.getViewMatrix()), fr || -1 === this._options.uniforms.indexOf("projection") || ar.setMatrix("projection", jr.getProjectionMatrix()), fr || -1 === this._options.uniforms.indexOf("vi … [truncated]
+           for (rr in this._internalTextures) ar._bindTexture(rr, this._internalTextures[rr]);
+           for (rr in this._textureArrays) ar.setTextureArray(rr, this._textureArrays[rr]);
+           for (rr in this._ints) ar.setInt(rr, this._ints[rr]);
+           for (rr in this._uints) ar.setUInt(rr, this._uints[rr]);
+           for (rr in this._floats) ar.setFloat(rr, this._floats[rr]);
+           for (rr in this._floatsArrays) ar.setArray(rr, this._floatsArrays[rr]);
+           for (rr in this._colors3) ar.setColor3(rr, this._colors3[rr]);
+           for (rr in this._colors3Arrays) ar.setArray3(rr, this._colors3Arrays[rr]);
+           for (rr in this._colors4) {
+             const Sr = this._colors4[rr];
+             ar.setFloat4(rr, Sr.r, Sr.g, Sr.b, Sr.a)
```

#### 49. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L907-L919` → after: `L288-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L288-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L288-L303) · [Before (L907-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L907-L919)

```diff
-         }
-       }
-       settle(RR) {
-         const JR = RR.iframe.contentDocument;
-         if (null === JR || void 0 === JR || !JR.documentElement.classList.contains("rrweb-paused")) return;
-         const GR = RR.getMetaData().startTime + RR.getCurrentTime();
-         ! function(RR, JR, GR, yR) {
-           for (const tR of RR) {
-             const RR = tR.effect,
-               uR = GR.get(JR.getId(RR.target)),
-               ZR = void 0 === uR ? 1 / 0 : yR - uR,
-               qR = Math.min(Math.max(ZR, Number(tR.currentTime)), Number(RR.getComputedTiming().endTime));
-             Number.isFinite(qR) && (tR.currentTime = qR)
+           for (rr in this._colors4Arrays) ar.setArray4(rr, this._colors4Arrays[rr]);
+           for (rr in this._vectors2) ar.setVector2(rr, this._vectors2[rr]);
+           for (rr in this._vectors3) ar.setVector3(rr, this._vectors3[rr]);
+           for (rr in this._vectors4) ar.setVector4(rr, this._vectors4[rr]);
+           for (rr in this._quaternions) ar.setQuaternion(rr, this._quaternions[rr]);
+           for (rr in this._matrices) ar.setMatrix(rr, this._matrices[rr]);
+           for (rr in this._matrixArrays) ar.setMatrices(rr, this._matrixArrays[rr]);
+           for (rr in this._matrices3x3) ar.setMatrix3x3(rr, this._matrices3x3[rr]);
+           for (rr in this._matrices2x2) ar.setMatrix2x2(rr, this._matrices2x2[rr]);
+           for (rr in this._vectors2Arrays) ar.setArray2(rr, this._vectors2Arrays[rr]);
+           for (rr in this._vectors3Arrays) ar.setArray3(rr, this._vectors3Arrays[rr]);
+           for (rr in this._vectors4Arrays) ar.setArray4(rr, this._vectors4Arrays[rr]);
+           for (rr in this._quaternionsArrays) ar.setArray4(rr, this._quaternionsArrays[rr]);
+           for (rr in this._uniformBuffers) {
+             const Sr = this._uniformBuffers[rr].getBuffer();
+             Sr && ar.bindUniformBuffer(Sr, rr)
```

#### 50. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L921-L933` → after: `L305-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L305-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L305-L314) · [Before (L921-L933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L921-L933)

```diff
-         }(JR.getAnimations(), RR.getMirror(), this.addedAt, GR)
-       }
-       record(RR) {
-         if (RR.type === DR.c.FullSnapshot) this.addedAt.clear();
-         else if (RR.type === DR.c.IncrementalSnapshot && RR.data.source === DR.g.Mutation) {
-           for (const {
-               id: JR
-             }
-             of RR.data.removes) this.addedAt.delete(JR);
-           for (const {
-               node: JR
-             }
-             of RR.data.adds) this.addedAt.set(JR.id, RR.timestamp)
+           const Qr = jr.MU(),
+             Ir = Qr.setExternalTexture;
+           if (Ir)
+             for (rr in this._externalTextures) Ir.call(Qr, rr, this._externalTextures[rr]);
+           const Er = Qr.setTextureSampler;
+           if (Er)
+             for (rr in this._textureSamplers) Er.call(Qr, rr, this._textureSamplers[rr]);
+           const pr = Qr.setStorageBuffer;
+           if (pr)
+             for (rr in this._storageBuffers) pr.call(Qr, rr, this._storageBuffers[rr])
```

#### 51. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L935-L1035` → after: `L316-L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L316-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L316-L321) · [Before (L935-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L935-L1035)

```diff
-       }
-     }
-     const iJ = new Set(["src", "href", "xlink:href", "poster", "data", "background", "lowsrc", "dynsrc", "manifest", "icon", "action", "formaction", "ping", "codebase", "archive", "longdesc", "rr_src", "rr_dataurl"]),
-       fJ = new Set(["srcset", "imagesrcset"]),
-       VJ = new Set(["to", "from", "by", "values"]),
-       KJ = new Set(["srcdoc", "http-equiv", "attributionsrc"]),
-       wJ = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^"')\s]*))\s*\)|@import\s*(?:"([^"]*)"|'([^']*)')|"\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^"]*)"|'\s*((?:[a-z][a-z\d+.-]*:|\/\/)[^']*)'/gi,
-       rJ = /url\(|@import|image-set|\\|["']\s*(?:[a-z][a-z\d+.-]*:|\/\/)/i,
-       eJ = /\\(?:([\da-f]{1,6})\s?|(.))/gis,
-       aJ = /url\(|@import(?!\s*"")|\/\\|\\[/\\]/i,
-       LJ = /^(?:[a-z][a-z\d+.-]*:|\/\/|\\\\)/i,
-       nJ = /^data:image\/(?!svg)/i,
-       UJ = "about:invalid";
- 
-     function WJ(RR, JR) {
-       let {
- ... (85 more removed lines; see GitHub link above)
+         if (ar && Sr && (Er || !this.isFrozen)) {
+           (0, Nr.t)(Sr, ar), Sr.morphTargetManager && Sr.morphTargetManager.isUsingTextureForTargets && Sr.morphTargetManager._bind(ar);
+           const rr = Sr.bakedVertexAnimationManager;
+           if (rr && rr.isEnabled) {
+             const rr = Wr ? Zr._drawWrapper : this._drawWrapper;
+             Sr.bakedVertexAnimationManager?.bind(ar, !!rr._wasPreviouslyUsingInstances)
```

#### 52. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1075-L1089` → after: `L324-L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L324-L331) · [Before (L1075-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1075-L1089)

```diff
-         of GR) "number" === typeof uR && JR.has(uR) && yR.add(tR);
-       return yR
-     }
-     const bJ = {
-         coarse: {
-           pointer: "coarse",
-           "any-pointer": "coarse",
-           hover: "none",
-           "any-hover": "none"
-         },
-         fine: {
-           pointer: "fine",
-           "any-pointer": "fine",
-           hover: "hover",
-           "any-hover": "hover"
+         this._afterBind(Sr, ar, Zr)
+       }
+       getActiveTextures() {
+         const rr = super.getActiveTextures();
+         for (const Sr in this._textures) rr.push(this._textures[Sr]);
+         for (const Sr in this._textureArrays) {
+           const Qr = this._textureArrays[Sr];
+           for (let Sr = 0; Sr < Qr.length; Sr++) rr.push(Qr[Sr])
```

#### 53. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1091-L1150` → after: `L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R333) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L333) · [Before (L1091-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1091-L1150)

```diff
-       },
-       vJ = {
-         pointer: ["none", "coarse", "fine"],
-         "any-pointer": ["none", "coarse", "fine"],
-         hover: ["none", "hover"],
-         "any-hover": ["none", "hover"]
-       },
-       OJ = "(min-width: 0px)",
-       xJ = "(not (min-width: 0px))",
-       NJ = /@media\b[^{;]*/gi,
-       DJ = /\(\s*((?:any-)?(?:pointer|hover))\s*(?::\s*([a-z]+)\s*)?\)/gi,
-       HJ = new Set(["_cssText", "rule", "replace", "replaceSync"]);
- 
-     function oJ(RR, JR) {
-       return RR.replace(NJ, (RR => RR.replace(DJ, ((RR, GR, yR) => {
-         const tR = GR.toLowerCase(),
- ... (44 more removed lines; see GitHub link above)
+         return rr
```

#### 54. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1152-L1162` → after: `L335-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L335-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L335-L345) · [Before (L1152-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1152-L1162)

```diff
-       if (null === RR || "object" !== typeof RR) return RR;
-       const tR = function(RR, JR) {
-         const GR = RR.attributes,
-           yR = cJ(RR),
-           tR = null !== yR && void 0 === (null === GR || void 0 === GR ? void 0 : GR._cssText) ? JR.sheets.get(yR) : void 0;
-         return void 0 === tR ? RR : {
-           ...RR,
-           attributes: {
-             ...GR,
-             _cssText: tR
-           }
+       hasTexture(rr) {
+         if (super.hasTexture(rr)) return !0;
+         for (const Qr in this._textures)
+           if (this._textures[Qr] === rr) return !0;
+         const Sr = rr.getInternalTexture();
+         for (const Qr in this._internalTextures)
+           if (this._internalTextures[Qr] === Sr) return !0;
+         for (const Qr in this._textureArrays) {
+           const Sr = this._textureArrays[Qr];
+           for (let Qr = 0; Qr < Sr.length; Qr++)
+             if (Sr[Qr] === rr) return !0
```

#### 55. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1164-L1170` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L347) · [Before (L1164-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1164-L1170)

```diff
-       }(RR, GR);
-       let uR = null;
-       for (const [qR, iR] of Object.entries(tR)) {
-         const RR = IJ(iR, qR, GR);
-         RR !== iR && (uR ??= {
-           ...tR
-         }, uR[qR] = RR)
+         return !1
```

#### 56. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1172-L1181` → after: `L349-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L349-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L349-L359) · [Before (L1172-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1172-L1181)

```diff
-       const {
-         id: ZR
-       } = tR;
-       if (null !== GR.pointer && "number" === typeof ZR && GR.styleTextIds.has(ZR))
-         for (const qR of ["textContent", "value"]) {
-           const RR = tR[qR],
-             JR = "string" === typeof RR ? oJ(RR, GR.pointer) : RR;
-           JR !== RR && (uR ??= {
-             ...tR
-           }, uR[qR] = JR)
+       clone(rr) {
+         const Sr = Zr.e.Clone((() => new zr(rr, this.eC(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
+         Sr.name = rr, Sr.id = rr, "object" === typeof Sr._shaderPath && (Sr._shaderPath = {
+           ...Sr._shaderPath
+         }), this._options = {
+           ...this._options
+         };
+         const Qr = Object.keys(this._options);
+         for (const Zr of Qr) {
+           const rr = this._options[Zr];
+           Array.isArray(rr) && (this._options[Zr] = rr.slice(0))
```

#### 57. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1183-L1336` → after: `L361-L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L361-L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L361-L389) · [Before (L1183-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1183-L1336)

```diff
-       return null !== (yR = uR) && void 0 !== yR ? yR : tR
-     }
-     const mJ = "brv-styles",
-       zJ = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".b … [truncated]
-       SJ = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv- … [truncated]
-     class jJ {
-       static create(RR, JR, GR, yR, tR, uR, ZR, qR) {
-         if (!JR.some((RR => RR.type === DR.c.FullSnapshot))) return null;
-         const iR = function(RR, JR) {
-           const GR = {
-             sheets: PJ(RR),
-             styleTextIds: gJ(RR),
-             pointer: JR
-           };
-           return RR.map((RR => {
-             if (RR.type !== DR.c.FullSnapshot && RR.type !== DR.c.IncrementalSnapshot) return RR;
- ... (138 more removed lines; see GitHub link above)
+         this.stencil.copyTo(Sr.stencil);
+         for (const Zr in this._textures) Sr.setTexture(Zr, this._textures[Zr]);
+         for (const Zr in this._internalTextures) Sr.setInternalTexture(Zr, this._internalTextures[Zr]);
+         for (const Zr in this._textureArrays) Sr.setTextureArray(Zr, this._textureArrays[Zr]);
+         for (const Zr in this._externalTextures) Sr.setExternalTexture(Zr, this._externalTextures[Zr]);
+         for (const Zr in this._ints) Sr.setInt(Zr, this._ints[Zr]);
+         for (const Zr in this._uints) Sr.setUInt(Zr, this._uints[Zr]);
+         for (const Zr in this._floats) Sr.setFloat(Zr, this._floats[Zr]);
+         for (const Zr in this._floatsArrays) Sr.setFloats(Zr, this._floatsArrays[Zr]);
+         for (const Zr in this._colors3) Sr.setColor3(Zr, this._colors3[Zr]);
+         for (const Zr in this._colors3Arrays) Sr._colors3Arrays[Zr] = this._colors3Arrays[Zr];
+         for (const Zr in this._colors4) Sr.setColor4(Zr, this._colors4[Zr]);
+         for (const Zr in this._colors4Arrays) Sr._colors4Arrays[Zr] = this._colors4Arrays[Zr];
+         for (const Zr in this._vectors2) Sr.setVector2(Zr, this._vectors2[Zr]);
+         for (const Zr in this._vectors3) Sr.setVector3(Zr, this._vectors3[Zr]);
+         for (const Zr in this._vectors4) Sr.setVector4(Zr, this._vectors4[Zr]);
+ ... (13 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1338-L1352` → after: `L391-L398`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L391-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L391-L398) · [Before (L1338-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1338-L1352)

```diff
-     }
-     async function kJ(RR, JR, GR) {
-       const yR = [];
-       let tR = RR.length,
-         uR = 0;
-       return await Promise.all(Array.from({
-         length: Math.min(3, RR.length)
-       }, (() => (async () => {
-         for (; uR < tR;) {
-           const qR = uR++;
-           try {
-             yR[qR] = await JR(RR[qR], GR)
-           } catch (ZR) {
-             if (GR.aborted) throw ZR;
-             console.warn(`Replay video part ${qR} failed to load; playing the parts before it.`, ZR), tR = Math.min(tR, qR)
+       dispose(rr, Sr, Qr) {
+         if (Sr) {
+           let rr;
+           for (rr in this._textures) this._textures[rr].dispose();
+           for (rr in this._internalTextures) this._internalTextures[rr].dispose();
+           for (rr in this._textureArrays) {
+             const Sr = this._textureArrays[rr];
+             for (let rr = 0; rr < Sr.length; rr++) Sr[rr].dispose()
```

#### 59. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1355-L1490` → after: `L401-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L401-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L401-L410) · [Before (L1355-L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1355-L1490)

```diff
-       })()))), yR.slice(0, tR)
-     }
- 
-     function QJ(RR) {
-       const JR = [];
-       let GR = 0;
-       for (const VR of RR) JR.push(GR), GR += VR.byteLength;
-       let yR = 0;
-       const tR = GR => {
-           for (; JR[yR] > GR;) yR--;
-           for (; yR + 1 < JR.length && JR[yR + 1] <= GR;) yR++;
-           return RR[yR][GR - JR[yR]]
-         },
-         uR = RR => tR(RR) * 2 ** 24 + 65536 * tR(RR + 1) + 256 * tR(RR + 2) + tR(RR + 3);
-       let ZR = 0,
-         qR = !1,
- ... (120 more removed lines; see GitHub link above)
+         this._textures = {}, this._internalTextures = {}, super.dispose(rr, Sr, Qr)
+       }
+       serialize() {
+         const rr = Zr.e.Serialize(this);
+         let Sr;
+         for (Sr in rr.customType = "BABYLON.ShaderMaterial", rr.uniqueId = this.uniqueId, rr.options = this._options, rr.shaderPath = this._shaderPath, rr.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, rr.stencil = this.stencil.serialize(), rr.textures = {}, this._texture … [truncated]
+         for (Sr in rr.textureArrays = {}, this._textureArrays) {
+           rr.textureArrays[Sr] = [];
+           const Qr = this._textureArrays[Sr];
+           for (let Zr = 0; Zr < Qr.length; Zr++) rr.textureArrays[Sr].push(Qr[Zr].serialize())
```

#### 60. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1492-L1520` → after: `L412-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L412-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L412-L418) · [Before (L1492-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1492-L1520)

```diff
-       }
-       failedAt(RR) {
-         const JR = RG(this.segments, RR);
-         return null !== JR && this.failed.has(JR.sequence)
-       }
-       replaceSegments(RR, JR) {
-         for (const GR of this.slots.values()) this.release(GR);
-         this.slots.clear(), this.failed.clear(), this.segments = hJ(RR), this.segmentUrls.reset(this.segments), this.still = JR
-       }
-       update(RR) {
-         var JR, GR;
-         this.segmentUrls.update(this.segments, RR, this.clock.speed);
-         const yR = RG(this.segments, RR),
-           tR = function(RR, JR) {
-             const GR = RR.find((RR => RR.startMs > JR));
-             return void 0 === GR ? null : GR.startMs - JR <= ("parts" in GR ? 15e3 : 8e3) ? GR : null
- ... (13 more removed lines; see GitHub link above)
+         for (Sr in rr.ints = {}, this._ints) rr.ints[Sr] = this._ints[Sr];
+         for (Sr in rr.uints = {}, this._uints) rr.uints[Sr] = this._uints[Sr];
+         for (Sr in rr.floats = {}, this._floats) rr.floats[Sr] = this._floats[Sr];
+         for (Sr in rr.floatsArrays = {}, this._floatsArrays) rr.floatsArrays[Sr] = this._floatsArrays[Sr];
+         for (Sr in rr.colors3 = {}, this._colors3) {
+           const Qr = this._colors3[Sr];
+           rr.colors3[Sr] = [Qr.r, Qr.g, Qr.b]
```

#### 61. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1522-L1536` → after: `L420-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L420-L423) · [Before (L1522-L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1522-L1536)

```diff
-       }
-       getSyncStats() {
-         const {
-           frames: RR,
-           sumAbsDriftMs: JR,
-           maxAbsDriftMs: GR,
-           withinOneFrame: yR,
-           seeks: tR
-         } = this.stats;
-         return {
-           frames: RR,
-           meanAbsDriftMs: 0 === RR ? 0 : JR / RR,
-           maxAbsDriftMs: GR,
-           withinOneFrame: 0 === RR ? 1 : yR / RR,
-           seeks: tR
+         for (Sr in rr.colors3Arrays = {}, this._colors3Arrays) rr.colors3Arrays[Sr] = this._colors3Arrays[Sr];
+         for (Sr in rr.colors4 = {}, this._colors4) {
+           const Qr = this._colors4[Sr];
+           rr.colors4[Sr] = [Qr.r, Qr.g, Qr.b, Qr.a]
```

#### 62. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1538-L1545` → after: `L425-L428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L425-L428) · [Before (L1538-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1538-L1545)

```diff
-       }
-       resetSyncStats() {
-         this.stats = {
-           frames: 0,
-           sumAbsDriftMs: 0,
-           maxAbsDriftMs: 0,
-           withinOneFrame: 0,
-           seeks: 0
+         for (Sr in rr.colors4Arrays = {}, this._colors4Arrays) rr.colors4Arrays[Sr] = this._colors4Arrays[Sr];
+         for (Sr in rr.vectors2 = {}, this._vectors2) {
+           const Qr = this._vectors2[Sr];
+           rr.vectors2[Sr] = [Qr.x, Qr.y]
```

#### 63. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1547-L1745` → after: `L430-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L430-L432) · [Before (L1547-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1547-L1745)

```diff
-       }
-       noteClockJump() {
-         this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null
-       }
-       destroy() {
-         for (const RR of this.slots.values()) this.release(RR);
-         this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
-       }
-       sync(RR, JR) {
-         const {
-           video: GR
-         } = RR;
-         if (GR.seeking) return;
-         const {
-           playing: yR,
-           speed: tR
- ... (183 more removed lines; see GitHub link above)
+         for (Sr in rr.vectors3 = {}, this._vectors3) {
+           const Qr = this._vectors3[Sr];
+           rr.vectors3[Sr] = [Qr.x, Qr.y, Qr.z]
```

#### 64. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1747-L1758` → after: `L434-L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L434-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L434-L436) · [Before (L1747-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1747-L1758)

```diff
-       }
-       getState() {
-         const RR = this.clock.timeMs();
-         return {
-           positionMs: this.timeline.toPosition(RR),
-           durationMs: this.timeline.durationMs,
-           playing: this.clock.playing,
-           speed: this.clock.speed,
-           skipInactive: this.skipInactive,
-           ended: this.ended,
-           notice: this.getNotice(RR),
-           telemetryChunksLoaded: this.annotations.telemetryChunksLoaded
+         for (Sr in rr.vectors4 = {}, this._vectors4) {
+           const Qr = this._vectors4[Sr];
+           rr.vectors4[Sr] = [Qr.x, Qr.y, Qr.z, Qr.w]
```

#### 65. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1761-L1815` → after: `L449-L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L449-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L449-L471) · [Before (L1761-L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1761-L1815)

```diff
-       getPositionMs() {
-         return this.timeline.toPosition(this.clock.timeMs())
-       }
-       getSyncStats() {
-         return this.videoLayer.getSyncStats()
-       }
-       resetSyncStats() {
-         this.videoLayer.resetSyncStats()
-       }
-       play() {
-         this.ended && this.seekToTime(this.timeline.startMs), this.clock.play(), this.syncDom(), this.emit()
-       }
-       pause() {
-         this.clock.pause(), this.syncDom(), this.emit()
-       }
-       togglePlay() {
- ... (39 more removed lines; see GitHub link above)
+     }
+ 
+     function Yr(rr, Sr, Qr) {
+       const Wr = Zr.e.Parse((() => new zr(rr.name, Sr, rr.shaderPath, rr.options, rr.storeEffectOnSubMeshes)), rr, Sr, Qr);
+       let jr;
+       for (jr in rr.stencil && Wr.stencil.parse(rr.stencil, Sr, Qr), rr.textures) Wr.setTexture(jr, Ir.f.Parse(rr.textures[jr], Sr, Qr));
+       for (jr in rr.textureArrays) {
+         const Zr = rr.textureArrays[jr],
+           ar = [];
+         for (let rr = 0; rr < Zr.length; rr++) ar.push(Ir.f.Parse(Zr[rr], Sr, Qr));
+         Wr.setTextureArray(jr, ar)
+       }
+       for (jr in rr.ints) Wr.setInt(jr, rr.ints[jr]);
+       for (jr in rr.uints) Wr.setUInt(jr, rr.uints[jr]);
+       for (jr in rr.floats) Wr.setFloat(jr, rr.floats[jr]);
+       for (jr in rr.floatsArrays) Wr.setFloats(jr, rr.floatsArrays[jr]);
+ ... (7 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1817-L1818` → after: `L473-L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L473-L488) · [Before (L1817-L1818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1817-L1818)

```diff
-       seekToTime(RR) {
-         this.ended = !1, this.clock.seek(Math.max(this.timeline.startMs, Math.min(this.timeline.endMs, RR))), this.videoLayer.noteClockJump(), this.syncDom(), this.emit()
+       for (jr in rr.colors3Arrays) {
+         const Sr = rr.colors3Arrays[jr].reduce(((rr, Sr, Qr) => (Qr % 3 === 0 ? rr.push([Sr]) : rr[rr.length - 1].push(Sr), rr)), []).map((rr => ({
+           r: rr[0],
+           g: rr[1],
+           b: rr[2]
+         })));
+         Wr.setColor3Array(jr, Sr)
+       }
+       for (jr in rr.colors4) {
+         const Sr = rr.colors4[jr];
+         Wr.setColor4(jr, {
+           r: Sr[0],
+           g: Sr[1],
+           b: Sr[2],
+           a: Sr[3]
+         })
```

#### 67. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1820-L1822` → after: `L490-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L490-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L490-L497) · [Before (L1820-L1822)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1820-L1822)

```diff
-       syncDom() {
-         var RR;
-         null === (RR = this.domLayer) || void 0 === RR || RR.sync(this.clock.timeMs(), this.clock.playing)
+       for (jr in rr.colors4Arrays) {
+         const Sr = rr.colors4Arrays[jr].reduce(((rr, Sr, Qr) => (Qr % 4 === 0 ? rr.push([Sr]) : rr[rr.length - 1].push(Sr), rr)), []).map((rr => ({
+           r: rr[0],
+           g: rr[1],
+           b: rr[2],
+           a: rr[3]
+         })));
+         Wr.setColor4Array(jr, Sr)
```

#### 68. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1824-L1825` → after: `L499-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L499-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L499-L504) · [Before (L1824-L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1824-L1825)

```diff
-       emit() {
-         this.emitState(this.getState())
+       for (jr in rr.vectors2) {
+         const Sr = rr.vectors2[jr];
+         Wr.setVector2(jr, {
+           x: Sr[0],
+           y: Sr[1]
+         })
```

#### 69. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1827-L1829` → after: `L506-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L506-L512) · [Before (L1827-L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1827-L1829)

```diff
-       emitState(RR) {
-         this.lastState = RR;
-         for (const JR of this.listeners) JR(RR)
+       for (jr in rr.vectors3) {
+         const Sr = rr.vectors3[jr];
+         Wr.setVector3(jr, {
+           x: Sr[0],
+           y: Sr[1],
+           z: Sr[2]
+         })
```

#### 70. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L1831-L2013` → after: `L514-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L514-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L514-L520) · [Before (L1831-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L1831-L2013)

```diff
-     }
-     const iG = 2500,
-       fG = 5;
- 
-     function VG(RR) {
-       let {
-         label: JR,
-         Qq: GR,
-         wide: yR = !1
-       } = RR;
-       return (0, LR.jsx)("span", {
-         className: `brv-key${GR?" brv-key-held":""}${yR?" brv-key-wide":""}`,
-         children: JR
-       })
-     }
-     const KG = [{
- ... (167 more removed lines; see GitHub link above)
+       for (jr in rr.vectors4) {
+         const Sr = rr.vectors4[jr];
+         Wr.setVector4(jr, {
+           x: Sr[0],
+           y: Sr[1],
+           z: Sr[2],
+           w: Sr[3]
```

#### 71. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L2015-L2036` → after: `L522-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L522-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L522-L533) · [Before (L2015-L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L2015-L2036)

```diff
-       })
-     }
-     const LG = {
-       play: "M7 4v16l13-8z",
-       pause: "M6 4h4v16H6zm8 0h4v16h-4z",
-       fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
-     };
- 
-     function nG(RR) {
-       let {
-         label: JR,
-         onClick: GR,
-         children: yR
-       } = RR;
-       return (0, LR.jsx)("button", {
-         type: "button",
- ... (6 more removed lines; see GitHub link above)
+       }
+       for (jr in rr.quaternions) Wr.setQuaternion(jr, ar.h.FromArray(rr.quaternions[jr]));
+       for (jr in rr.matrices) Wr.setMatrix(jr, ar.d.FromArray(rr.matrices[jr]));
+       const fr = Wr;
+       for (jr in rr.matrixArray) fr._matrixArrays[jr] = new Float32Array(rr.matrixArray[jr]);
+       for (jr in rr.matrices3x3) Wr.setMatrix3x3(jr, rr.matrices3x3[jr]);
+       for (jr in rr.matrices2x2) Wr.setMatrix2x2(jr, rr.matrices2x2[jr]);
+       for (jr in rr.vectors2Arrays) Wr.setArray2(jr, rr.vectors2Arrays[jr]);
+       for (jr in rr.vectors3Arrays) Wr.setArray3(jr, rr.vectors3Arrays[jr]);
+       for (jr in rr.vectors4Arrays) Wr.setArray4(jr, rr.vectors4Arrays[jr]);
+       for (jr in rr.quaternionsArrays) Wr.setArray4(jr, rr.quaternionsArrays[jr]);
+       return Wr
```

#### 72. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L2038-L2042` → after: `L535-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L535-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L535-L545) · [Before (L2038-L2042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L2038-L2042)

```diff
- 
-     function UG(RR) {
-       if (!document.fullscreenEnabled) return;
-       (document.fullscreenElement === RR ? document.exitFullscreen() : RR.requestFullscreen()).catch((RR => {
-         console.warn("Couldn't toggle fullscreen.", RR)
+     async function nr(rr, Sr, Qr) {
+       let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
+       return await new Promise(((Wr, ar) => {
+         const jr = new Er.b;
+         jr.addEventListener("readystatechange", (() => {
+           if (4 == jr.readyState)
+             if (200 == jr.status) {
+               const Sr = Yr(JSON.parse(jr.responseText), Qr || xr.b.LastCreatedScene, Zr);
+               rr && (Sr.name = rr), Wr(Sr)
+             } else ar("Unable to load the ShaderMaterial")
+         })), jr.open("GET", Sr), jr.send()
```

#### 73. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L2045-L2494` → after: `L548-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L548-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L548-L561) · [Before (L2045-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L2045-L2494)

```diff
- 
-     function WG(RR) {
-       let {
-         data: JR,
-         className: GR,
-         autoPlay: tR = !1,
-         options: uR,
-         labels: ZR = eG,
-         onController: qR
-       } = RR;
-       const iR = (0, yR.useRef)(null),
-         fR = (0, yR.useRef)(null),
-         VR = (0, yR.useRef)(uR);
-       VR.current = uR;
-       const KR = (0, yR.useRef)(tR);
-       KR.current = tR;
- ... (434 more removed lines; see GitHub link above)
+     async function er(rr, Sr) {
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
+       const Zr = this?.SnippetUrl ?? zr.SnippetUrl;
+       return await new Promise(((Wr, ar) => {
+         const jr = new Er.b;
+         jr.addEventListener("readystatechange", (() => {
+           if (4 == jr.readyState)
+             if (200 == jr.status) {
+               const Zr = JSON.parse(JSON.parse(jr.responseText).jsonPayload),
+                 ar = Yr(JSON.parse(Zr.shaderMaterial), Sr || xr.b.LastCreatedScene, Qr);
+               ar.snippetId = rr, Wr(ar)
+             } else ar("Unable to load the snippet " + rr)
+         })), jr.open("GET", Zr + "/" + rr.replace(/#/g, "/")), jr.send()
+       }))
```

#### 74. `bundles/bloxd.io/chunks/js/300.js` (Changed code · before: `L2497-L2638` → after: `L567-L568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-0975527c8c47d9ecfd551a8595a846cc45eb5382c17dabf5e8c880ff5e5e0008) · [After (L567-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/300.js#L567-L568) · [Before (L2497-L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/300.js#L2497-L2638)

```diff
-     function xG(RR) {
-       var JR, GR;
-       let {
-         gameAnalyticsId: tR,
-         userContext: ZR
-       } = RR;
-       const {
-         t: qR
-       } = (0, BR.A)(), iR = function(RR, JR) {
-         const {
-           t: GR
-         } = (0, BR.A)(), [tR, uR] = (0, yR.useState)({
-           status: "loading"
-         });
-         return (0, yR.useEffect)((() => {
-           let yR = !1;
- ... (126 more removed lines; see GitHub link above)
+     function Br() {
+       yr || (yr = !0, zr.Parse = Yr, zr.ParseFromFileAsync = nr, zr.ParseFromSnippetAsync = er, zr.CreateFromSnippetAsync = Kr, (0, tr.e)("BABYLON.ShaderMaterial", zr))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (135 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 1. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5-L9` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L4-L6) · [Before (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L5-L9)

```diff
-   42028: (RR, JR, GR) => {
-     GR.d(JR, {
-       c: () => bZ,
-       g: () => vZ,
-       k: () => ii
+   42321: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       default: () => PQ
```

#### 2. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L11-L39` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L8-L12) · [Before (L11-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L11-L39)

```diff
-     var yR, tR = Object.defineProperty,
-       uR = (RR, JR, GR) => ((RR, JR, GR) => JR in RR ? tR(RR, JR, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: GR
-       }) : RR[JR] = GR)(RR, "symbol" !== typeof JR ? JR + "" : JR, GR),
-       ZR = Object.defineProperty,
-       qR = (RR, JR, GR) => ((RR, JR, GR) => JR in RR ? ZR(RR, JR, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: GR
-       }) : RR[JR] = GR)(RR, "symbol" !== typeof JR ? JR + "" : JR, GR),
-       iR = (RR => (RR[RR.Document = 0] = "Document", RR[RR.DocumentType = 1] = "DocumentType", RR[RR.Element = 2] = "Element", RR[RR.Text = 3] = "Text", RR[RR.CDATA = 4] = "CDATA", RR[RR.Comment = 5] = "Comment", RR))(iR || {});
-     const fR = {
- ... (13 more removed lines; see GitHub link above)
+     var Zr = Qr(72),
+       Wr = Qr(1155),
+       ar = Qr.n(Wr);
+     const jr = ["forward", "backward", "left", "right", "jump", "sprint", "crouch", "primary", "secondary", "middle"],
+       Ir = 3e3;
```

#### 3. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L42-L66` → after: `L15-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L15-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L15-L23) · [Before (L42-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L42-L66)

```diff
-       if (KR[RR]) return KR[RR];
-       const JR = globalThis[RR],
-         GR = JR.prototype,
-         yR = RR in fR ? fR[RR] : void 0,
-         tR = Boolean(yR && yR.every((RR => {
-           var JR, yR;
-           return Boolean(null == (yR = null == (JR = Object.getOwnPropertyDescriptor(GR, RR)) ? void 0 : JR.get) ? void 0 : yR.toString().includes("[native code]"))
-         }))),
-         uR = RR in VR ? VR[RR] : void 0,
-         ZR = Boolean(uR && uR.every((RR => {
-           var JR;
-           return "function" === typeof GR[RR] && (null == (JR = GR[RR]) ? void 0 : JR.toString().includes("[native code]"))
-         })));
-       if (tR && ZR && !globalThis.Zone) return KR[RR] = JR.prototype, JR.prototype;
-       try {
-         const yR = document.createElement("iframe");
- ... (9 more removed lines; see GitHub link above)
+       return rr.down && rr.inPlay && !rr.bound
+     }
+ 
+     function Er(rr, Sr) {
+       let Qr = 0,
+         Zr = rr.length;
+       for (; Qr < Zr;) {
+         const Wr = Qr + Zr >> 1;
+         rr[Wr].atMs <= Sr ? Qr = Wr + 1 : Zr = Wr
```

#### 4. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L71-L77` → after: `L28-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L28-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L28-L33) · [Before (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L71-L77)

```diff
-     function aR(RR, JR, GR) {
-       var yR, tR;
-       const uR = null == (yR = eR[RR]) ? void 0 : yR[GR];
-       if (uR) return uR.call(JR);
-       const ZR = rR(RR),
-         qR = null == (tR = Object.getOwnPropertyDescriptor(ZR, GR)) ? void 0 : tR.get;
-       return qR ? ((eR[RR] || (eR[RR] = {}))[GR] = qR, qR.call(JR)) : JR[GR]
+     function pr(rr) {
+       let {
+         code: Sr,
+         unbound: Qr
+       } = rr;
+       return `${Sr}:${Qr}`
```

#### 5. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L81-L85` → after: `L36-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L36-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L36-L37) · [Before (L81-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L81-L85)

```diff
-     function nR(RR, JR, GR) {
-       const yR = `${RR}.${String(GR)}`;
-       if (LR[yR]) return LR[yR].bind(JR);
-       const tR = rR(RR)[GR];
-       return "function" !== typeof tR ? JR[GR] : (LR[yR] = tR, tR.bind(JR))
+     function xr(rr, Sr) {
+       return Sr[1] - rr[1] || (rr[0] < Sr[0] ? -1 : 1)
```

#### 6. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L90-L158` → after: `L40-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L40-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L40-L71) · [Before (L90-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L90-L158)

```diff
-       ownerDocument: function(RR) {
-         return aR("Node", RR, "ownerDocument")
-       },
-       childNodes: function(RR) {
-         return aR("Node", RR, "childNodes")
-       },
-       parentNode: function(RR) {
-         return aR("Node", RR, "parentNode")
-       },
-       parentElement: function(RR) {
-         return aR("Node", RR, "parentElement")
-       },
-       textContent: function(RR) {
-         return aR("Node", RR, "textContent")
-       },
-       firstChild: function(RR) {
- ... (53 more removed lines; see GitHub link above)
+       Mouse1: "Left click",
+       Mouse2: "Middle click",
+       Mouse3: "Right click",
+       Mouse4: "Back button",
+       Mouse5: "Forward button",
+       Space: "Space",
+       Escape: "Esc",
+       ShiftLeft: "Shift",
+       ShiftRight: "Right Shift",
+       ControlLeft: "Ctrl",
+       ControlRight: "Right Ctrl",
+       AltLeft: "Alt",
+       AltRight: "Right Alt",
+       MetaLeft: "Meta",
+       MetaRight: "Right Meta",
+       ArrowUp: "\u2191",
+ ... (16 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L162` → after: `L75-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L75-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L75-L79) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L162)

```diff
-       return RR.nodeType === RR.ELEMENT_NODE
+       var Sr;
+       const Qr = mr[rr];
+       if (void 0 !== Qr) return Qr;
+       const Zr = null !== (Sr = /^(?:Key|Digit)(.)$/.exec(rr)) && void 0 !== Sr ? Sr : /^Numpad(.+)$/.exec(rr);
+       return null !== Zr ? rr.startsWith("Numpad") ? `Num ${Zr[1]}` : Zr[1] : rr
```

#### 8. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L166-L167` → after: `L87-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L87-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L87-L106) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L166-L167)

```diff
-       const JR = RR && "host" in RR && "mode" in RR && WR.host(RR) || null;
-       return Boolean(JR && "shadowRoot" in JR && WR.shadowRoot(JR) === RR)
+       const Sr = Math.max(0, Math.floor(rr / 1e3)),
+         Qr = Math.floor(Sr / 3600),
+         Zr = Math.floor(Sr % 3600 / 60),
+         Wr = String(Sr % 60).padStart(2, "0");
+       return Qr > 0 ? `${Qr}:${String(Zr).padStart(2,"0")}:${Wr}` : `${Zr}:${Wr}`
+     }
+ 
+     function nr(rr, Sr) {
+       return getComputedStyle(rr).getPropertyValue(Sr).trim()
+     }
+ 
+     function er(rr, Sr) {
+       switch (rr.kind) {
+         case "note":
+           return rr.label;
+         case "hidden":
+ ... (4 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L171` → after: `L110-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L110-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L110-L127) · [Before (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L171)

```diff
-       return "[object ShadowRoot]" === Object.prototype.toString.call(RR)
+       let {
+         draw: Sr,
+         className: Qr
+       } = rr;
+       const Wr = (0, Zr.useRef)(null);
+       return (0, Zr.useEffect)((() => {
+         const rr = Wr.current,
+           Qr = rr.getContext("2d");
+         if (null === Sr || null === Qr) return;
+         const {
+           clientWidth: Zr,
+           clientHeight: ar
+         } = rr, jr = window.devicePixelRatio;
+         rr.width = Math.round(Zr * jr), rr.height = Math.round(ar * jr), Qr.setTransform(jr, 0, 0, jr, 0, 0), Sr(Qr, Zr, ar, rr)
+       }), [Sr]), (0, hr.jsx)("canvas", {
+         ref: Wr,
+ ... (2 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L175-L184` → after: `L131-L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L131-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L131-L349) · [Before (L175-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L175-L184)

```diff
-       try {
-         const GR = RR.rules || RR.cssRules;
-         if (!GR) return null;
-         let yR = RR.href;
-         !yR && RR.ownerNode && (yR = RR.ownerNode.baseURI);
-         const tR = Array.from(GR, (RR => BR(RR, yR))).join("");
-         return (JR = tR).includes(" background-clip: text;") && !JR.includes(" -webkit-background-clip: text;") && (JR = JR.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), JR
-       } catch (GR) {
-         return null
-       }
+       let {
+         controller: Sr,
+         frames: Qr,
+         input: Wr,
+         markers: ar,
+         inactiveRanges: jr,
+         videoGaps: Er,
+         labels: pr
+       } = rr;
+       const {
+         timeline: mr
+       } = Sr, yr = (0, Zr.useRef)(null), [Br, Tr] = (0, Zr.useState)(0), [vr, Or] = (0, Zr.useState)(null), Lr = (0, Zr.useRef)(null), lr = Math.max(1, mr.durationMs);
+       ! function(rr, Sr, Qr) {
+         (0, Zr.useEffect)((() => {
+           let Zr = 0,
+             Wr = NaN;
+ ... (203 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L188-L213` → after: `L364-L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L364-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L364-L371) · [Before (L188-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L188-L213)

```diff
-     function BR(RR, JR) {
-       if (function(RR) {
-           return "styleSheet" in RR
-         }(RR)) {
-         let JR;
-         try {
-           JR = MR(RR.styleSheet) || function(RR) {
-             const {
-               cssText: JR
-             } = RR;
-             if (JR.split('"').length < 3) return JR;
-             const GR = ["@import", `url(${JSON.stringify(RR.href)})`];
-             return "" === RR.layerName ? GR.push("layer") : RR.layerName && GR.push(`layer(${RR.layerName})`), RR.supportsText && GR.push(`supports(${RR.supportsText})`), RR.media.length && GR.push(RR.media.mediaText), GR.join(" ") + ";"
-           }(RR)
-         } catch (GR) {
-           JR = RR.cssText
- ... (10 more removed lines; see GitHub link above)
+     function gr(rr) {
+       const Sr = rr.filter((rr => rr.endMs > rr.startMs)).sort(((rr, Sr) => rr.startMs - Sr.startMs)),
+         Qr = [];
+       for (const Zr of Sr) {
+         const rr = Qr.at(-1);
+         void 0 !== rr && Zr.startMs <= rr.endMs ? rr.endMs = Math.max(rr.endMs, Zr.endMs) : Qr.push({
+           ...Zr
+         })
```

#### 12. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L217-L229` → after: `L376-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L376-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L376-L380) · [Before (L217-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L217-L229)

```diff
-       constructor() {
-         qR(this, "idNodeMap", new Map), qR(this, "nodeMetaMap", new WeakMap)
-       }
-       getId(RR) {
-         var JR;
-         if (!RR) return -1;
-         return (null == (JR = this.getMeta(RR)) ? void 0 : JR.id) ?? -1
-       }
-       JtR(RR) {
-         return this.idNodeMap.get(RR) || null
-       }
-       getIds() {
-         return Array.from(this.idNodeMap.keys())
+       constructor(rr) {
+         this.yh = void 0, this.durationMs = void 0, this.positionStarts = void 0, this.yh = gr(rr), this.positionStarts = [];
+         let Sr = 0;
+         for (const Qr of this.yh) this.positionStarts.push(Sr), Sr += Qr.endMs - Qr.startMs;
+         this.durationMs = Sr
```

#### 13. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L231-L232` → after: `L382-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L382-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L382-L384) · [Before (L231-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L231-L232)

```diff
-       getMeta(RR) {
-         return this.nodeMetaMap.get(RR) || null
+       get startMs() {
+         var rr, Sr;
+         return null !== (rr = null === (Sr = this.yh[0]) || void 0 === Sr ? void 0 : Sr.startMs) && void 0 !== rr ? rr : 0
```

#### 14. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L234-L236` → after: `L386-L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L386-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L386-L388) · [Before (L234-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L234-L236)

```diff
-       removeNodeFromMap(RR) {
-         const JR = this.getId(RR);
-         this.idNodeMap.delete(JR), RR.childNodes && RR.childNodes.forEach((RR => this.removeNodeFromMap(RR)))
+       get endMs() {
+         var rr, Sr;
+         return null !== (rr = null === (Sr = this.yh.at(-1)) || void 0 === Sr ? void 0 : Sr.endMs) && void 0 !== rr ? rr : 0
```

#### 15. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L238-L239` → after: `L390-L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L390-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L390-L395) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L238-L239)

```diff
-       has(RR) {
-         return this.idNodeMap.has(RR)
+       toPosition(rr) {
+         for (let Sr = 0; Sr < this.yh.length; Sr++) {
+           const Qr = this.yh[Sr];
+           if (rr < Qr.endMs) return this.positionStarts[Sr] + Math.max(0, rr - Qr.startMs)
+         }
+         return this.durationMs
```

#### 16. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L241-L242` → after: `L397-L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L397-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L397-L401) · [Before (L241-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L241-L242)

```diff
-       hasNode(RR) {
-         return this.nodeMetaMap.has(RR)
+       toTime(rr) {
+         const Sr = Math.max(0, Math.min(this.durationMs, rr));
+         for (let Qr = this.yh.length - 1; Qr >= 0; Qr--)
+           if (Sr >= this.positionStarts[Qr]) return this.yh[Qr].startMs + (Sr - this.positionStarts[Qr]);
+         return this.startMs
```

#### 17. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L244-L246` → after: `L403-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L403-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L403-L404) · [Before (L244-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L244-L246)

```diff
-       add(RR, JR) {
-         const GR = JR.id;
-         this.idNodeMap.set(GR, RR), this.nodeMetaMap.set(RR, JR)
+       contains(rr) {
+         return this.yh.some((Sr => rr >= Sr.startMs && rr < Sr.endMs))
```

#### 18. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L248-L252` → after: `L406-L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L406-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L406-L409) · [Before (L248-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L248-L252)

```diff
-       replace(RR, JR) {
-         const GR = this.JtR(RR);
-         if (GR) {
-           const RR = this.nodeMetaMap.get(GR);
-           RR && this.nodeMetaMap.set(JR, RR)
+       nextPlayableTime(rr) {
+         for (const Sr of this.yh) {
+           if (rr < Sr.startMs) return Sr.startMs;
+           if (rr < Sr.endMs) return rr
```

#### 19. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L254-L257` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L411) · [Before (L254-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L254-L257)

```diff
-         this.idNodeMap.set(RR, JR)
-       }
-       reset() {
-         this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
+         return null
```

#### 20. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L266-L285` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L416) · [Before (L266-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L266-L285)

```diff
-       let {
-         element: JR,
-         maskInputOptions: GR,
-         tagName: yR,
-         type: tR,
-         value: uR,
-         maskInputFn: ZR
-       } = RR, qR = uR || "";
-       const iR = tR && bR(tR);
-       return (GR[yR.toLowerCase()] || iR && GR[iR]) && (qR = ZR ? ZR(qR, JR) : "*".repeat(qR.length)), qR
-     }
- 
-     function bR(RR) {
-       return RR.toLowerCase()
-     }
-     const vR = "__rrweb_original__";
- ... (4 more removed lines; see GitHub link above)
+       return [...rr].sort(((rr, Sr) => rr.startMs - Sr.startMs))
```

#### 21. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L289-L293` → after: `L420-L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L420-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L420-L432) · [Before (L289-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L289-L293)

```diff
-       let GR;
-       try {
-         GR = new URL(RR, JR ?? window.location.href)
-       } catch (tR) {
-         return null
+       let Qr = 1 / 0,
+         Zr = -1 / 0;
+       const Wr = rr => {
+         Qr = Math.min(Qr, rr), Zr = Math.max(Zr, rr)
+       };
+       for (const ar of [...rr.videoSegments, ...rr.telemetryChunks]) Wr(ar.startMs), Wr(ar.endMs);
+       for (const ar of rr.domEvents) Wr(Sr.toEpoch(ar.timestamp));
+       return Qr < Zr ? {
+         startMs: Qr,
+         endMs: Zr
+       } : {
+         startMs: 0,
+         endMs: 0
```

#### 22. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L298-L318` → after: `L435-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L435-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L435-L466) · [Before (L298-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L298-L318)

```diff
-     const NR = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
-       DR = /^(?:[a-z+]+:)?\/\//i,
-       HR = /^www\..*/i,
-       oR = /^(data:)([^,]*),(.*)/i;
- 
-     function cR(RR, JR) {
-       return (RR || "").replace(NR, ((RR, GR, yR, tR, uR, ZR) => {
-         const qR = yR || uR || ZR,
-           iR = GR || tR || "";
-         if (!qR) return RR;
-         if (DR.test(qR) || HR.test(qR)) return `url(${iR}${qR}${iR})`;
-         if (oR.test(qR)) return `url(${iR}${qR}${iR})`;
-         if ("/" === qR[0]) return `url(${iR}${function(RR){let JR="";return JR=RR.indexOf("//")>-1?RR.split("/").slice(0,3).join("/"):RR.split("/")[0],JR=JR.split("?")[0],JR}(JR)+qR}${iR})`;
-         const fR = qR.split("#")[0],
-           VR = qR.substring(fR.length),
-           KR = JR.split("#")[0].split("/"),
- ... (5 more removed lines; see GitHub link above)
+     class kr {
+       constructor(rr, Sr) {
+         this.wallNowMs = Sr, this.anchorTimeMs = void 0, this.anchorWallMs = void 0, this.playingState = !1, this.speedState = 1, this.anchorTimeMs = rr, this.anchorWallMs = Sr()
+       }
+       get playing() {
+         return this.playingState
+       }
+       get speed() {
+         return this.speedState
+       }
+       timeMs() {
+         return this.timeAtWall(this.wallNowMs())
+       }
+       timeAtWall(rr) {
+         return this.playingState ? this.anchorTimeMs + (rr - this.anchorWallMs) * this.speedState : this.anchorTimeMs
+       }
+ ... (16 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L320-L325` → after: `L468-L497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L468-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L468-L497) · [Before (L320-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L320-L325)

```diff
-     const PR = "(?:/\\*[^*]*\\*/)|[\\s;]",
-       IR = new RegExp(`${PR}|\\b(0)px?`, "g"),
-       mR = new RegExp(PR, "g");
- 
-     function zR(RR) {
-       return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? RR.replace(mR, "") : RR.replace(IR, "$1")
+     const Ar = "bloxd-clock";
+     class Vr {
+       constructor(rr) {
+         this.samples = void 0, this.samples = [];
+         for (const Qr of rr) {
+           var Sr;
+           const rr = Qr.data;
+           Qr.type === Rr.e.Custom && (null === rr || void 0 === rr ? void 0 : rr.tag) === Ar && "number" === typeof(null === (Sr = rr.payload) || void 0 === Sr ? void 0 : Sr.epochMs) && this.samples.push({
+             domMs: Qr.timestamp,
+             offsetMs: rr.payload.epochMs - Qr.timestamp
+           })
+         }
+         this.samples.sort(((rr, Sr) => rr.domMs - Sr.domMs))
+       }
+       toEpoch(rr) {
+         return rr + this.offsetAtDom(rr)
+ ... (14 more added lines; see GitHub link above)
```

#### 24. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L328` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L510) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L328)

```diff
-     function SR(RR, JR) {
+     function br(rr, Sr, Qr) {
```

#### 25. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L330-L374` → after: `L512-L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L512-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L512-L532) · [Before (L330-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L330-L374)

```diff
-         let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-         const yR = Array.from(JR.childNodes),
-           tR = [];
-         let uR = 0;
-         if (yR.length > 1 && RR && "string" === typeof RR) {
-           let JR = zR(RR, GR);
-           const ZR = JR.length / RR.length;
-           for (let qR = 1; qR < yR.length; qR++)
-             if (yR[qR].textContent && "string" === typeof yR[qR].textContent) {
-               const iR = zR(yR[qR].textContent, GR),
-                 fR = 100;
-               let VR = 3;
-               for (; VR < iR.length && (iR[VR].match(/[a-zA-Z0-9]/) || -1 !== iR.indexOf(iR.substring(0, VR), 1)); VR++);
-               for (; VR < iR.length; VR++) {
-                 let KR = iR.substring(0, VR),
-                   wR = JR.split(KR),
- ... (29 more removed lines; see GitHub link above)
+         const Qr = [];
+         for (const Zr of rr) {
+           let rr = Zr.startMs;
+           for (const Wr of Sr) Wr.endMs <= rr || Wr.startMs >= Zr.endMs || (Wr.startMs > rr && Qr.push({
+             startMs: rr,
+             endMs: Wr.startMs
+           }), rr = Math.max(rr, Wr.endMs));
+           rr < Zr.endMs && Qr.push({
+             startMs: rr,
+             endMs: Zr.endMs
+           })
+         }
+         return Qr
+       }(function(rr) {
+         const Sr = [];
+         for (const Qr of rr) {
+ ... (5 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L376-L377` → after: `L534-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L534-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L534-L535) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L376-L377)

```diff
-         return tR.push(RR), tR
-       }(RR, JR).join("/* rr_split */")
+         return Sr
+       }(rr), gr([...Sr, ...Qr])).filter((rr => rr.endMs - rr.startMs >= 1e3))
```

#### 27. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L382-L383` → after: `L538-L540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L538-L540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L538-L540) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L382-L383)

```diff
-     function ER() {
-       return jR++
+     function Jr(rr) {
+       var Sr, Qr, Zr;
+       return rr.type === Rr.e.IncrementalSnapshot ? ir.has(null !== (Qr = null === (Zr = rr.data) || void 0 === Zr ? void 0 : Zr.source) && void 0 !== Qr ? Qr : -1) : rr.type === Rr.e.Custom && (null === (Sr = rr.data) || void 0 === Sr ? void 0 : Sr.tag) === wr
```

#### 28. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L391` → after: `L544-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L544-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L544-L562) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L391)

```diff
-       return JR && "" !== JR.trim() ? RJ(RR, JR) : JR
+       const Qr = [];
+       for (const jr of rr)
+         if (jr.type === Rr.e.Custom) {
+           var Zr;
+           const rr = null === (Zr = jr.data) || void 0 === Zr ? void 0 : Zr.tag,
+             Wr = void 0 === rr ? void 0 : or[rr];
+           void 0 !== Wr && Qr.push({
+             kind: Wr,
+             atMs: Sr.toEpoch(jr.timestamp)
+           })
+         } else if (jr.type === Rr.e.Plugin) {
+         var Wr, ar;
+         const rr = jr.data;
+         "rrweb/console@1" !== (null === rr || void 0 === rr ? void 0 : rr.plugin) || "error" !== (null === (Wr = rr.payload) || void 0 === Wr ? void 0 : Wr.level) && "assert" !== (null === (ar = rr.payload) || void 0 === ar ? void 0 : ar.level) || Qr.push({
+           kind: "error",
+           atMs: Sr.toEpoch(jr.timestamp)
+ ... (3 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L393-L395` → after: `L564-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L564-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L564-L597) · [Before (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L393-L395)

```diff
- 
-     function hR(RR) {
-       return Boolean("svg" === RR.tagName || RR.ownerSVGElement)
+     const dr = 3e6;
+     class sr {
+       constructor(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
+           Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dr;
+         this.fetchUrls = rr, this.onUrls = Sr, this.wallNowMs = Qr, this.refreshableAfterMs = Zr, this.lastRefreshWallMs = -1 / 0, this.urlsFetchedAtWallMs = void 0, this.inFlight = !1, this.timer = null, this.destroyed = !1, this.urlsFetchedAtWallMs = Qr()
+       }
+       get refreshing() {
+         return this.inFlight
+       }
+       request() {
+         if (null === this.fetchUrls || this.destroyed || null !== this.timer || this.inFlight) return;
+         if (this.wallNowMs() - this.urlsFetchedAtWallMs < this.refreshableAfterMs) return;
+         const rr = this.lastRefreshWallMs + 6e4 - this.wallNowMs();
+         rr > 0 ? this.timer = setTimeout((() => {
+           this.timer = null, this.request()
+ ... (18 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L397-L403` → after: `L599-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L599-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L599-L649) · [Before (L397-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L397-L403)

```diff
- 
-     function RJ(RR, JR) {
-       let GR = TR.get(RR);
-       if (GR || (GR = RR.createElement("a"), TR.set(RR, GR)), JR) {
-         if (JR.startsWith("blob:") || JR.startsWith("data:")) return JR
-       } else JR = "";
-       return GR.setAttribute("href", JR), GR.href
+     class ur {
+       constructor(rr, Sr) {
+         let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now,
+           Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : dr;
+         this.source = rr, this.description = Sr, this.wallNowMs = Qr, this.refreshableAfterMs = Zr, this.entries = new Map, this.unavailable = new Set, this.inFlight = !1, this.failedFetches = 0, this.retryAtWallMs = -1 / 0, this.destroyed = !1
+       }
+       reset(rr) {
+         this.entries.clear(), this.unavailable.clear(), this.failedFetches = 0, this.retryAtWallMs = -1 / 0;
+         const Sr = this.wallNowMs();
+         for (const Qr of rr) this.entries.set(Qr.sequence, {
+           urls: Qr,
+           fetchedAtWallMs: Sr
+         })
+       }
+       get(rr) {
+         const Sr = this.getFresh(rr);
+ ... (35 more added lines; see GitHub link above)
```

#### 31. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L405-L414` → after: `L651-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L651-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L651-L696) · [Before (L405-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L405-L414)

```diff
- 
-     function JJ(RR, JR, GR, yR) {
-       return yR ? "src" === GR || "href" === GR && ("use" !== JR || "#" !== yR[0]) || "xlink:href" === GR && "#" !== yR[0] || "background" === GR && ["table", "td", "th"].includes(JR) ? sR(RR, yR) : "srcset" === GR ? function(RR, JR) {
-         if ("" === JR.trim()) return JR;
-         let GR = 0;
- 
-         function yR(RR) {
-           let yR;
-           const tR = RR.exec(JR.substring(GR));
-           return tR ? (yR = tR[0], GR += yR.length, yR) : ""
+     class rS {
+       constructor(rr, Sr, Qr, Zr) {
+         let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+           ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
+           jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : dr;
+         this.load = Sr, this.onLoaded = Qr, this.onFailed = Zr, this.chunks = void 0, this.urls = void 0, this.loading = 0, this.merged = SS([]), this.hidden = [], this.destroyed = !1, this.chunks = [...rr].sort(((rr, Sr) => rr.startMs - Sr.startMs)).map((rr => ({
+           chunk: rr,
+           status: "idle",
+           attempts: 0,
+           telemetry: null
+         }))), this.urls = new ur(Wr, "telemetry URLs", ar, jr), this.urls.reset(ZS(rr))
+       }
+       get telemetry() {
+         return this.merged
+       }
+       get hiddenRanges() {
+ ... (30 more added lines; see GitHub link above)
```

#### 32. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L417-L439` → after: `L719-L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L719-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L719-L724) · [Before (L417-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L417-L439)

```diff
-         for (; yR(FR), !(GR >= JR.length);) {
-           let uR = yR(QR);
-           if ("," === uR.slice(-1)) uR = sR(RR, uR.substring(0, uR.length - 1)), tR.push(uR);
-           else {
-             let yR = "";
-             uR = sR(RR, uR);
-             let ZR = !1;
-             for (;;) {
-               const RR = JR.charAt(GR);
-               if ("" === RR) {
-                 tR.push((uR + yR).trim());
-                 break
-               }
-               if (ZR) ")" === RR && (ZR = !1);
-               else {
-                 if ("," === RR) {
- ... (7 more removed lines; see GitHub link above)
+         let Sr = !1;
+         for (const Zr of this.chunks) {
+           const Qr = rr.at(-1);
+           if (null === Zr.telemetry) {
+             Sr = !1;
+             continue
```

#### 33. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L442-L443` → after: `L732-L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L732-L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L732-L759) · [Before (L442-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L442-L443)

```diff
-         return tR.join(", ")
-       }(RR, yR) : "style" === GR ? cR(yR, RJ(RR)) : "object" === JR && "data" === GR ? sR(RR, yR) : yR : yR
+         const Qr = rr.map((rr => function(rr, Sr) {
+           const Qr = rr.actions.at(-1);
+           if (void 0 === Qr || 0 === Qr.bits) return rr;
+           return {
+             ...rr,
+             actions: [...rr.actions, {
+               atMs: Sr,
+               bits: 0
+             }]
+           }
+         }(SS(rr.telemetry), rr.endMs)));
+         this.merged = SS(Qr), this.hidden = Qr.flatMap(((Sr, Qr) => function(rr, Sr) {
+           const Qr = [];
+           let Zr = null;
+           for (const {
+               atMs: Wr,
+ ... (12 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L446-L447` → after: `L762-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L762-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L762-L770) · [Before (L446-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L446-L447)

```diff
-     function GJ(RR, JR, GR) {
-       return ["video", "audio"].includes(RR) && "autoplay" === bR(JR)
+     function SS(rr) {
+       return {
+         inputRecorded: rr.some((rr => rr.keys.length > 0)),
+         frames: rr.flatMap((rr => rr.frames)),
+         states: rr.flatMap((rr => rr.states)),
+         events: rr.flatMap((rr => rr.events)),
+         actions: rr.flatMap((rr => rr.actions)),
+         keys: rr.flatMap((rr => rr.keys))
+       }
```

#### 35. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L450-L455` → after: `L773-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR773) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L773-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L773-L782) · [Before (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L450-L455)

```diff
-     function yJ(RR, JR, GR) {
-       if (!RR) return !1;
-       if (RR.nodeType !== RR.ELEMENT_NODE) return !!GR && yJ(WR.parentNode(RR), JR, GR);
-       for (let yR = RR.classList.length; yR--;) {
-         const GR = RR.classList[yR];
-         if (JR.test(GR)) return !0
+     function QS(rr, Sr) {
+       const {
+         actions: Qr
+       } = rr;
+       return !rr.inputRecorded || Qr.length > 0 && Qr[0].atMs <= Sr.startMs + 1 ? rr : {
+         ...rr,
+         actions: [{
+           atMs: Sr.startMs,
+           bits: 0
+         }, ...Qr]
```

#### 36. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L460-L479` → after: `L786-L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L786-L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L786-L796) · [Before (L460-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L460-L479)

```diff
-     function tJ(RR, JR, GR, yR) {
-       let tR;
-       if (AR(RR)) {
-         if (tR = RR, !WR.childNodes(tR).length) return !1
-       } else {
-         if (null === WR.parentElement(RR)) return !1;
-         tR = WR.parentElement(RR)
-       }
-       try {
-         if ("string" === typeof JR) {
-           if (yR) {
-             if (tR.closest(`.${JR}`)) return !0
-           } else if (tR.classList.contains(JR)) return !0
-         } else if (yJ(tR, JR, yR)) return !0;
-         if (GR)
-           if (yR) {
- ... (4 more removed lines; see GitHub link above)
+     function ZS(rr) {
+       return rr.flatMap((rr => {
+         let {
+           sequence: Sr,
+           url: Qr
+         } = rr;
+         return void 0 === Sr || void 0 === Qr ? [] : [{
+           sequence: Sr,
+           url: Qr
+         }]
+       }))
```

#### 37. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L483-L643` → after: `L800-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L800-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L800-L856) · [Before (L483-L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L483-L643)

```diff
-       const {
-         doc: GR,
-         mirror: yR,
-         blockClass: tR,
-         blockSelector: uR,
-         needsMask: ZR,
-         inlineStylesheet: qR,
-         maskInputOptions: fR = {},
-         maskTextFn: VR,
-         maskInputFn: KR,
-         dataURLOptions: wR = {},
-         inlineImages: rR,
-         recordCanvas: eR,
-         keepIframeSrcFn: aR,
-         newlyAddedElement: LR = !1,
-         cssCaptured: nR = !1
- ... (145 more removed lines; see GitHub link above)
+       return rr < Sr.startMs ? Sr.startMs - rr : rr > Sr.endMs ? 2 * (rr - Sr.endMs) : 0
+     }
+     class aS {
+       constructor(rr, Sr, Qr, Zr) {
+         this.data = rr, this.domClock = Sr, this.timeline = Qr, this.options = Zr, this.telemetry = void 0, this.activityTimes = void 0, this.markerList = [], this.inactiveRangeList = [], this.videoGapRanges = [], this.activityTimes = function(rr, Sr) {
+           return rr.filter(Jr).map((rr => Sr.toEpoch(rr.timestamp)))
+         }(rr.domEvents, Sr), this.telemetry = new rS(rr.telemetryChunks, Zr.loadTelemetryChunk, (() => {
+           this.rebuild()
+         }), Zr.onTelemetryFailed, Zr.telemetryUrls), this.rebuild()
+       }
+       get markers() {
+         return this.markerList
+       }
+       get inactiveRanges() {
+         return this.inactiveRangeList
+       }
+ ... (41 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L645-L671` → after: `L858-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L858-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L858-L872) · [Before (L645-L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L645-L671)

```diff
-           }(RR, {
-             doc: GR,
-             blockClass: tR,
-             blockSelector: uR,
-             inlineStylesheet: qR,
-             maskInputOptions: fR,
-             maskInputFn: KR,
-             dataURLOptions: wR,
-             inlineImages: rR,
-             recordCanvas: eR,
-             keepIframeSrcFn: aR,
-             newlyAddedElement: LR,
-             rootId: UR
-           });
-         case RR.TEXT_NODE:
-           return function(RR, JR) {
- ... (11 more removed lines; see GitHub link above)
+           }
+           return gr(Wr).filter((rr => rr.endMs - rr.startMs >= Zr))
+         }(this.activityTimes, Sr, this.timeline, this.options.inactivityThresholdMs), this.markerList = function(rr) {
+           const {
+             timeline: Sr
+           } = rr;
+           return [...Dr(rr.domEvents, rr.domClock), ...rr.telemetry.events.filter((rr => {
+             let {
+               event: Sr
+             } = rr;
+             return "contextLost" === Sr
+           })).map((rr => {
+             let {
+               atMs: Sr
+             } = rr;
```

#### 39. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L673-L693` → after: `L874-L889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L874-L889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L874-L889) · [Before (L673-L693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L673-L693)

```diff
-               type: iR.Text,
-               textContent: fR || "",
-               rootId: tR
-             }
-           }(RR, {
-             doc: GR,
-             needsMask: ZR,
-             maskTextFn: VR,
-             rootId: UR,
-             cssCaptured: nR
-           });
-         case RR.CDATA_SECTION_NODE:
-           return {
-             type: iR.CDATA, textContent: "", rootId: UR
-           };
-         case RR.COMMENT_NODE:
- ... (5 more removed lines; see GitHub link above)
+               kind: "graphicsCrash",
+               atMs: Sr
+             }
+           })), ...rr.hidden.map((rr => ({
+             kind: "hidden",
+             atMs: rr.startMs,
+             endMs: rr.endMs
+           }))), ...rr.extraMarkers].filter((rr => rr.atMs >= Sr.startMs && rr.atMs <= Sr.endMs && (Sr.contains(rr.atMs) || Sr.contains(rr.atMs - 1)))).sort(((rr, Sr) => rr.atMs - Sr.atMs))
+         }({
+           domEvents: this.data.domEvents,
+           domClock: this.domClock,
+           telemetry: rr,
+           extraMarkers: this.data.markers,
+           hidden: Sr,
+           timeline: this.timeline
+         })
```

#### 40. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L698` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L894) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L698)

```diff
-       return void 0 === RR || null === RR ? "" : RR.toLowerCase()
+       return Sr => rr >= Sr.startMs && rr < Sr.endMs
```

#### 41. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L700-L714` → after: `L896-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L896-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L896-L935) · [Before (L700-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L700-L714)

```diff
- 
-     function qJ(RR) {
-       return !0 === RR || "all" === RR ? {
-         script: !0,
-         comment: !0,
-         headFavicon: !0,
-         headWhitespace: !0,
-         headMetaSocial: !0,
-         headMetaRobots: !0,
-         headMetaHttpEquiv: !0,
-         headMetaVerification: !0,
-         headMetaAuthorship: "all" === RR,
-         headMetaDescKeywords: "all" === RR,
-         headTitleMutations: "all" === RR
-       } : RR || {}
+     class IS {
+       constructor() {
+         this.addedAt = new Map, this.settleQueued = !1, this.plugin = {
+           handler: (rr, Sr, Qr) => {
+             let {
+               replayer: Zr
+             } = Qr;
+             this.record(rr), Sr && !this.settleQueued && (this.settleQueued = !0, queueMicrotask((() => {
+               this.settleQueued = !1, this.settle(Zr)
+             })))
+           }
+         }
+       }
+       settle(rr) {
+         const Sr = rr.iframe.contentDocument;
+         if (null === Sr || void 0 === Sr || !Sr.documentElement.classList.contains("rrweb-paused")) return;
+ ... (24 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L744-L768` → after: `L951-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L951-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L951-L955) · [Before (L744-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L744-L768)

```diff
-         needsMask: OR
-       } = JR, {
-         preserveWhiteSpace: NR = !0
-       } = JR;
-       if (!OR) {
-         OR = tJ(RR, ZR, qR, void 0 === OR)
-       }
-       const DR = uJ(RR, {
-         doc: GR,
-         mirror: yR,
-         blockClass: tR,
-         blockSelector: uR,
-         needsMask: OR,
-         inlineStylesheet: VR,
-         maskInputOptions: KR,
-         maskTextFn: wR,
- ... (9 more removed lines; see GitHub link above)
+         hosts: Qr
+       } = Sr, Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+       const Wr = rr.trim();
+       if (/[\\\u0000-\u001f]/.test(Wr)) return !1;
+       if (!hS.test(Wr)) return !0;
```

#### 43. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L770-L783` → after: `L957-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L957-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L957-L959) · [Before (L770-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L770-L783)

```diff
-       HR = yR.hasNode(RR) ? yR.getId(RR) : function(RR, JR) {
-         if (JR.comment && RR.type === iR.Comment) return !0;
-         if (RR.type === iR.Element) {
-           if (JR.script && ("script" === RR.tagName || "link" === RR.tagName && ("preload" === RR.attributes.rel && "script" === RR.attributes.as || "modulepreload" === RR.attributes.rel) || "link" === RR.tagName && "prefetch" === RR.attributes.rel && "string" === typeof RR.attri … [truncated]
-           if (JR.headFavicon && ("link" === RR.tagName && "shortcut icon" === RR.attributes.rel || "meta" === RR.tagName && (ZJ(RR.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ZJ(RR.attributes.name) || "icon" === ZJ(RR.attributes.rel) || " … [truncated]
-           if ("meta" === RR.tagName) {
-             if (JR.headMetaDescKeywords && ZJ(RR.attributes.name).match(/^description|keywords$/)) return !0;
-             if (JR.headMetaSocial && (ZJ(RR.attributes.property).match(/^(og|twitter|fb):/) || ZJ(RR.attributes.name).match(/^(og|twitter):/) || "pinterest" === ZJ(RR.attributes.name))) return !0;
-             if (JR.headMetaRobots && ("robots" === ZJ(RR.attributes.name) || "googlebot" === ZJ(RR.attributes.name) || "bingbot" === ZJ(RR.attributes.name))) return !0;
-             if (JR.headMetaHttpEquiv && void 0 !== RR.attributes["http-equiv"]) return !0;
-             if (JR.headMetaAuthorship && ("author" === ZJ(RR.attributes.name) || "generator" === ZJ(RR.attributes.name) || "framework" === ZJ(RR.attributes.name) || "publisher" === ZJ(RR.attributes.name) || "progid" === ZJ(RR.attributes.name) || ZJ(RR.attributes.property).match(/ … [truncated]
-             if (JR.headMetaVerification && ("google-site-verification" === ZJ(RR.attributes.name) || "yandex-verification" === ZJ(RR.attributes.name) || "csrf-token" === ZJ(RR.attributes.name) || "p:domain_verify" === ZJ(RR.attributes.name) || "verify-v1" === ZJ(RR.attributes.nam … [truncated]
-           }
-         }
+       try {
+         ar = new URL(Wr.startsWith("//") ? `https:${Wr}` : Wr)
+       } catch {
```

#### 44. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L840-L934` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L962) · [Before (L840-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L840-L934)

```diff
-       const PR = WR.parentNode(RR);
-       return PR && CR(PR) && XR(PR) && (oR.isShadow = !0), oR.type === iR.Element && "iframe" === oR.tagName && function(RR, JR, GR) {
-         const yR = RR.contentWindow;
-         if (!yR) return;
-         let tR, uR = !1;
-         try {
-           tR = yR.document.readyState
-         } catch (qR) {
-           return
-         }
-         if ("complete" !== tR) {
-           const yR = setTimeout((() => {
-             uR || (JR(), uR = !0)
-           }), GR);
-           return void RR.addEventListener("load", (() => {
-             clearTimeout(yR), uR = !0, JR()
- ... (79 more removed lines; see GitHub link above)
+       return "data:" === ar.protocol ? Zr ? "text/css" !== Wr.slice(5).split(/[,;]/)[0].trim().toLowerCase() : zS.test(Wr) : "blob:" === ar.protocol || ("http:" === ar.protocol || "https:" === ar.protocol) && Qr.some((rr => ar.hostname === rr || ar.hostname.endsWith(`.${rr}`)))
```

#### 45. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L960-L961` → after: `L965-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L965-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L965-L971) · [Before (L960-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L960-L961)

```diff
-     function wJ(RR) {
-       return RR && RR.__esModule && Object.prototype.hasOwnProperty.call(RR, "default") ? RR.default : RR
+     function eS(rr, Sr) {
+       return rr.replace(mS, (function(rr) {
+         for (var Qr = arguments.length, Zr = new Array(Qr > 1 ? Qr - 1 : 0), Wr = 1; Wr < Qr; Wr++) Zr[Wr - 1] = arguments[Wr];
+         if (nS(Zr.slice(0, 7).find((rr => "string" === typeof rr)), Sr, !0)) return rr;
+         const ar = rr.slice(0, 4).toLowerCase();
+         return "url(" === ar ? `url("${YS}")` : "@imp" === ar ? `@import "${YS}"` : `"${YS}"`
+       }))
```

#### 46. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L965-L983` → after: `L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L975) · [Before (L965-L983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L965-L983)

```diff
-       if (RR.__esModule) return RR;
-       var JR = RR.default;
-       if ("function" == typeof JR) {
-         var GR = function RR() {
-           return this instanceof RR ? Reflect.construct(JR, arguments, this.constructor) : JR.apply(this, arguments)
-         };
-         GR.prototype = JR.prototype
-       } else GR = {};
-       return Object.defineProperty(GR, "__esModule", {
-         value: !0
-       }), Object.keys(RR).forEach((function(JR) {
-         var yR = Object.getOwnPropertyDescriptor(RR, JR);
-         Object.defineProperty(GR, JR, yR.get ? yR : {
-           enumerable: !0,
-           get: function() {
-             return RR[JR]
- ... (3 more removed lines; see GitHub link above)
+       return tS.test(rr.replace(mS, '""'))
```

#### 47. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L989-L1023` → after: `L978-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L978-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L978-L991) · [Before (L989-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L989-L1023)

```diff
-     function LJ() {
-       if (eJ) return aJ.exports;
-       eJ = 1;
-       var RR = String,
-         JR = function() {
-           return {
-             isColorSupported: !1,
-             reset: RR,
-             bold: RR,
-             dim: RR,
-             italic: RR,
-             underline: RR,
-             inverse: RR,
-             hidden: RR,
-             strikethrough: RR,
-             black: RR,
- ... (19 more removed lines; see GitHub link above)
+     function yS(rr) {
+       let Sr = "between";
+       for (let Qr = 0; Qr < rr.length; Qr++) {
+         const Zr = rr[Qr];
+         if ("/" === Zr && "*" === rr[Qr + 1]) {
+           if (Qr = rr.indexOf("*/", Qr + 2), -1 === Qr) return "open";
+           Qr++, Sr = "between"
+         } else if ('"' === Zr || "'" === Zr) {
+           for (Qr++; Qr < rr.length && rr[Qr] !== Zr && !/[\n\r\f]/.test(rr[Qr]); Qr++) "\\" === rr[Qr] && Qr++;
+           if (Qr >= rr.length) return "open";
+           Sr = "token"
+         } else "\\" === Zr ? (Qr++, Sr = "token") : ";" === Zr || "{" === Zr || "}" === Zr ? Sr = "between" : /\s/.test(Zr) || (Sr = "token")
+       }
+       return Sr
```

#### 48. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1033-L1076` → after: `L994-L1001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L994-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L994-L1001) · [Before (L1033-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1033-L1076)

```diff
-     function AJ() {
-       if (WJ) return UJ;
-       WJ = 1;
-       let RR = LJ(),
-         JR = nJ;
-       class GR extends Error {
-         constructor(RR, JR, yR, tR, uR, ZR) {
-           super(RR), this.name = "CssSyntaxError", this.reason = RR, uR && (this.file = uR), tR && (this.source = tR), ZR && (this.plugin = ZR), "undefined" !== typeof JR && "undefined" !== typeof yR && ("number" === typeof JR ? (this.line = JR, this.column = yR) : (this.line = J … [truncated]
-         }
-         setMessage() {
-           this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
-         }
-         showSourceCode(GR) {
-           if (!this.source) return "";
-           let yR = this.source;
-           null == GR && (GR = RR.isColorSupported), JR && GR && (yR = JR(yR));
- ... (28 more removed lines; see GitHub link above)
+     function BS(rr, Sr) {
+       const Qr = eS(rr, Sr);
+       if (KS(Qr) || "open" === yS(Qr)) return "";
+       if (!Qr.includes("\\")) return Qr;
+       const Zr = function(rr) {
+         return rr.replace(US, ((rr, Sr, Qr) => void 0 !== Sr ? String.fromCodePoint(Math.min(parseInt(Sr, 16), 1114111)) : null !== Qr && void 0 !== Qr ? Qr : ""))
+       }(Qr);
+       return eS(Zr, Sr) !== Zr || KS(Zr) ? "" : Qr
```

#### 49. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1080-L1081` → after: `L1004-L1006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1004-L1006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1004-L1006) · [Before (L1080-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1080-L1081)

```diff
-     function MG() {
-       return CJ || (CJ = 1, XG.isClean = Symbol("isClean"), XG.my = Symbol("my")), XG
+     function TS(rr, Sr) {
+       const Qr = NS.test(rr) ? BS(rr, Sr) : rr;
+       return Qr.split("/* rr_split */").every((rr => "between" === yS(rr))) ? Qr : ""
```

#### 50. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1084-L1152` → after: `L1009-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1009-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1009-L1020) · [Before (L1084-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1084-L1152)

```diff
-     function BG() {
-       if (MJ) return XJ;
-       MJ = 1;
-       const RR = {
-         after: "\n",
-         beforeClose: "\n",
-         beforeComment: "\n",
-         beforeDecl: "\n",
-         beforeOpen: " ",
-         beforeRule: "\n",
-         colon: ": ",
-         commentLeft: " ",
-         commentRight: " ",
-         emptyBody: "",
-         indent: "    ",
-         semicolon: !1
- ... (53 more removed lines; see GitHub link above)
+     function vS(rr, Sr, Qr) {
+       if ("string" === typeof Sr) {
+         const Zr = rr.toLowerCase();
+         if (xS.has(Zr)) return null;
+         if (ES.has(Zr)) return function(rr, Sr) {
+           return rr.split(",").every((rr => {
+             const Qr = rr.trim().split(/\s+/)[0];
+             return void 0 === Qr || "" === Qr || nS(Qr, Sr)
+           }))
+         }(Sr, Qr) ? Sr : null;
+         if (pS.has(Zr)) {
+           return Sr.split(";").every((rr => nS(rr, Qr))) ? vS("", Sr, Qr) : null
```

#### 51. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1154-L1170` → after: `L1022-L1035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1022-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1022-L1035) · [Before (L1154-L1170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1154-L1170)

```diff
-         raw(JR, GR, yR) {
-           let tR;
-           if (yR || (yR = GR), GR && (tR = JR.raws[GR], "undefined" !== typeof tR)) return tR;
-           let uR = JR.parent;
-           if ("before" === yR) {
-             if (!uR || "root" === uR.type && uR.first === JR) return "";
-             if (uR && "document" === uR.type) return ""
-           }
-           if (!uR) return RR[yR];
-           let ZR = JR.root();
-           if (ZR.rawCache || (ZR.rawCache = {}), "undefined" !== typeof ZR.rawCache[yR]) return ZR.rawCache[yR];
-           if ("before" === yR || "after" === yR) return this.beforeAfter(JR, yR);
-           {
-             let RR = "raw" + ((qR = yR)[0].toUpperCase() + qR.slice(1));
-             this[RR] ? tR = this[RR](ZR, JR) : ZR.walk((RR => {
-               if (tR = RR.raws[GR], "undefined" !== typeof tR) return !1
- ... (1 more removed lines; see GitHub link above)
+         return fS.has(Zr) ? nS(Sr, Qr) ? Sr : null : "_csstext" === Zr ? TS(Sr, Qr) : NS.test(Sr) ? BS(Sr, Qr) : Sr
+       }
+       if (Array.isArray(Sr)) return Sr.map((rr => vS("", rr, Qr)));
+       if (null !== Sr && "object" === typeof Sr) {
+         const Zr = "style" === rr.toLowerCase(),
+           Wr = {};
+         for (const [rr, jr] of Object.entries(Sr)) Wr[rr] = vS(Zr ? "" : rr, jr, Qr);
+         const {
+           id: ar
+         } = Wr;
+         if ("number" === typeof ar && Qr.styleTextIds.has(ar))
+           for (const rr of ["textContent", "value"]) {
+             const Sr = Wr[rr];
+             "string" === typeof Sr && (Wr[rr] = TS(Sr, Qr))
```

#### 52. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1172-L1248` → after: `L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1037) · [Before (L1172-L1248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1172-L1248)

```diff
-           var qR;
-           return "undefined" === typeof tR && (tR = RR[yR]), ZR.rawCache[yR] = tR, tR
-         }
-         rawBeforeClose(RR) {
-           let JR;
-           return RR.walk((RR => {
-             if (RR.nodes && RR.nodes.length > 0 && "undefined" !== typeof RR.raws.after) return JR = RR.raws.after, JR.includes("\n") && (JR = JR.replace(/[^\n]+$/, "")), !1
-           })), JR && (JR = JR.replace(/\S/g, "")), JR
-         }
-         rawBeforeComment(RR, JR) {
-           let GR;
-           return RR.walkComments((RR => {
-             if ("undefined" !== typeof RR.raws.before) return GR = RR.raws.before, GR.includes("\n") && (GR = GR.replace(/[^\n]+$/, "")), !1
-           })), "undefined" === typeof GR ? GR = this.raw(JR, null, "beforeDecl") : GR && (GR = GR.replace(/\S/g, "")), GR
-         }
-         rawBeforeDecl(RR, JR) {
- ... (61 more removed lines; see GitHub link above)
+         return Wr
```

#### 53. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1250` → after: `L1039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1039) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1250)

```diff
-       return XJ = JR, JR.default = JR, XJ
+       return Sr
```

#### 54. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1253-L1259` → after: `L1042-L1053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1042-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1042-L1053) · [Before (L1253-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1253-L1259)

```diff
-     function lG() {
-       if (lJ) return BJ;
-       lJ = 1;
-       let RR = BG();
- 
-       function JR(JR, GR) {
-         new RR(GR).stringify(JR)
+     function OS(rr, Sr) {
+       const Qr = (rr, Zr) => {
+         if (null === rr || "object" !== typeof rr) return;
+         const Wr = rr;
+         if (Sr(Wr, Zr), Array.isArray(Wr.childNodes))
+           for (const Sr of Wr.childNodes) Qr(Sr, Wr.id)
+       };
+       for (const Zr of rr) {
+         const rr = Zr.data;
+         if (Zr.type === Rr.e.FullSnapshot) Qr(null === rr || void 0 === rr ? void 0 : rr.node, null);
+         else if (Zr.type === Rr.e.IncrementalSnapshot && Array.isArray(null === rr || void 0 === rr ? void 0 : rr.adds))
+           for (const Sr of rr.adds) Qr(null === Sr || void 0 === Sr ? void 0 : Sr.node, null === Sr || void 0 === Sr ? void 0 : Sr.parentId)
```

#### 55. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1264-L1477` → after: `L1057-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1057-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1057-L1073) · [Before (L1264-L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1264-L1477)

```diff
-     function pG() {
-       if (gJ) return pJ;
-       gJ = 1;
-       let {
-         isClean: RR,
-         my: JR
-       } = MG(), GR = AJ(), yR = BG(), tR = lG();
- 
-       function uR(RR, JR) {
-         let GR = new RR.constructor;
-         for (let yR in RR) {
-           if (!Object.prototype.hasOwnProperty.call(RR, yR)) continue;
-           if ("proxyCache" === yR) continue;
-           let tR = RR[yR],
-             ZR = typeof tR;
-           "parent" === yR && "object" === ZR ? JR && (GR[yR] = JR) : "source" === yR ? GR[yR] = tR : Array.isArray(tR) ? GR[yR] = tR.map((RR => uR(RR, GR))) : ("object" === ZR && null !== tR && (tR = uR(tR)), GR[yR] = tR)
- ... (198 more removed lines; see GitHub link above)
+     function LS(rr) {
+       const Sr = new Set,
+         Qr = [];
+       OS(rr, ((rr, Zr) => {
+         let {
+           id: Wr,
+           tagName: ar
+         } = rr;
+         "number" === typeof Wr && ("string" === typeof ar && "style" === ar.toLowerCase() && Sr.add(Wr), Qr.push({
+           id: Wr,
+           parentId: Zr
+         }))
+       }));
+       const Zr = new Set;
+       for (const {
+           id: Wr,
+ ... (1 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1479-L1480` → after: `L1075-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1075-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1075-L1089) · [Before (L1479-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1479-L1480)

```diff
-         get proxyOf() {
-           return this
+         of Qr) "number" === typeof ar && Sr.has(ar) && Zr.add(Wr);
+       return Zr
+     }
+     const lS = {
+         coarse: {
+           pointer: "coarse",
+           "any-pointer": "coarse",
+           hover: "none",
+           "any-hover": "none"
+         },
+         fine: {
+           pointer: "fine",
+           "any-pointer": "fine",
+           hover: "hover",
+           "any-hover": "hover"
```

#### 57. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1482-L1483` → after: `L1091-L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1091-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1091-L1111) · [Before (L1482-L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1482-L1483)

```diff
-       }
-       return pJ = ZR, ZR.default = ZR, pJ
+       },
+       XS = {
+         pointer: ["none", "coarse", "fine"],
+         "any-pointer": ["none", "coarse", "fine"],
+         hover: ["none", "hover"],
+         "any-hover": ["none", "hover"]
+       },
+       PS = "(min-width: 0px)",
+       HS = "(not (min-width: 0px))",
+       qS = /@media\b[^{;]*/gi,
+       RS = /\(\s*((?:any-)?(?:pointer|hover))\s*(?::\s*([a-z]+)\s*)?\)/gi,
+       gS = new Set(["_cssText", "rule", "replace", "replaceSync"]);
+ 
+     function CS(rr, Sr) {
+       return rr.replace(qS, (rr => rr.replace(RS, ((rr, Qr, Zr) => {
+         const Wr = Qr.toLowerCase(),
+ ... (5 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1486-L1501` → after: `L1114-L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1114-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1114-L1118) · [Before (L1486-L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1486-L1501)

```diff
-     function gG() {
-       if (vJ) return bJ;
-       vJ = 1;
-       let RR = pG();
-       class JR extends RR {
-         constructor(RR) {
-           RR && "undefined" !== typeof RR.value && "string" !== typeof RR.value && (RR = {
-             ...RR,
-             value: String(RR.value)
-           }), super(RR), this.type = "decl"
-         }
-         get variable() {
-           return this.prop.startsWith("--") || "$" === this.prop[0]
-         }
-       }
-       return bJ = JR, JR.default = JR, bJ
+     function MS(rr) {
+       const Sr = rr.attributes,
+         Qr = null === Sr || void 0 === Sr ? void 0 : Sr.rel,
+         Zr = null === Sr || void 0 === Sr ? void 0 : Sr.href;
+       return "link" === rr.tagName && "string" === typeof Qr && Qr.toLowerCase().split(/\s+/).includes("stylesheet") && "string" === typeof Zr ? Zr : null
```

#### 59. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1504-L1520` → after: `L1121-L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1121-L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1121-L1135) · [Before (L1504-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1504-L1520)

```diff
-     function bG() {
-       if (xJ) return OJ;
-       xJ = 1;
-       return OJ = {
-         nanoid: function() {
-           let RR = "",
-             JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
-           for (; JR--;) RR += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
-           return RR
-         },
-         customAlphabet: function(RR) {
-           let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
-           return function() {
-             let GR = "",
-               yR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JR;
-             for (; yR--;) GR += RR[Math.random() * RR.length | 0];
- ... (1 more removed lines; see GitHub link above)
+     function GS(rr) {
+       const Sr = new Map;
+       OS(rr, (rr => {
+         const Qr = MS(rr);
+         null !== Qr && Sr.set(rr.id, Qr)
+       }));
+       const Qr = new Map;
+       for (const Wr of rr) {
+         const rr = Wr.data;
+         if (Wr.type === Rr.e.IncrementalSnapshot && (null === rr || void 0 === rr ? void 0 : rr.source) === Rr.h.Mutation)
+           for (const Wr of null !== (Zr = rr.attributes) && void 0 !== Zr ? Zr : []) {
+             var Zr;
+             const rr = Wr.attributes._cssText,
+               ar = Sr.get(Wr.id);
+             "string" !== typeof rr || void 0 === ar || Qr.has(ar) || Qr.set(ar, rr)
```

#### 60. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1522-L1523` → after: `L1137-L1138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1137-L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1137-L1138) · [Before (L1522-L1523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1522-L1523)

```diff
-         }
-       }, OJ
+       }
+       return Qr
```

#### 61. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1526-L1603` → after: `L1141-L1150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1141-L1150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1141-L1150) · [Before (L1526-L1603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1526-L1603)

```diff
-     function vG() {
-       if (DJ) return NJ;
-       DJ = 1;
-       let {
-         SourceMapConsumer: RR,
-         SourceMapGenerator: JR
-       } = nJ, {
-         existsSync: GR,
-         readFileSync: yR
-       } = nJ, {
-         dirname: tR,
-         join: uR
-       } = nJ;
-       class ZR {
-         constructor(RR, JR) {
-           if (!1 === JR.map) return;
- ... (62 more removed lines; see GitHub link above)
+     function kS(rr, Sr, Qr) {
+       var Zr;
+       if ("string" === typeof rr) return null !== Qr.pointer && gS.has(Sr) ? CS(rr, Qr.pointer) : rr;
+       if (Array.isArray(rr)) {
+         let Sr = !1;
+         const Zr = rr.map((rr => {
+           const Zr = kS(rr, "", Qr);
+           return Sr ||= Zr !== rr, Zr
+         }));
+         return Sr ? Zr : rr
```

#### 62. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1605-L1729` → after: `L1152-L1161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1152-L1161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1152-L1161) · [Before (L1605-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1605-L1729)

```diff
-       return NJ = ZR, ZR.default = ZR, NJ
-     }
- 
-     function OG() {
-       if (oJ) return HJ;
-       oJ = 1;
-       let {
-         SourceMapConsumer: RR,
-         SourceMapGenerator: JR
-       } = nJ, {
-         fileURLToPath: GR,
-         pathToFileURL: yR
-       } = nJ, {
-         isAbsolute: tR,
-         resolve: uR
-       } = nJ, {
- ... (109 more removed lines; see GitHub link above)
+       if (null === rr || "object" !== typeof rr) return rr;
+       const Wr = function(rr, Sr) {
+         const Qr = rr.attributes,
+           Zr = MS(rr),
+           Wr = null !== Zr && void 0 === (null === Qr || void 0 === Qr ? void 0 : Qr._cssText) ? Sr.sheets.get(Zr) : void 0;
+         return void 0 === Wr ? rr : {
+           ...rr,
+           attributes: {
+             ...Qr,
+             _cssText: Wr
```

#### 63. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1745-L1816` → after: `L1172-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1172-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1172-L1181) · [Before (L1745-L1816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1745-L1816)

```diff
-       return HJ = rR, rR.default = rR, qR && qR.registerInput && qR.registerInput(rR), HJ
-     }
- 
-     function xG() {
-       if (PJ) return cJ;
-       PJ = 1;
-       let {
-         SourceMapConsumer: RR,
-         SourceMapGenerator: JR
-       } = nJ, {
-         dirname: GR,
-         relative: yR,
-         resolve: tR,
-         sep: uR
-       } = nJ, {
-         pathToFileURL: ZR
- ... (56 more removed lines; see GitHub link above)
+       const {
+         id: jr
+       } = Wr;
+       if (null !== Qr.pointer && "number" === typeof jr && Qr.styleTextIds.has(jr))
+         for (const Ir of ["textContent", "value"]) {
+           const rr = Wr[Ir],
+             Sr = "string" === typeof rr ? CS(rr, Qr.pointer) : rr;
+           Sr !== rr && (ar ??= {
+             ...Wr
+           }, ar[Ir] = Sr)
```

#### 64. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1818-L1842` → after: `L1183-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1183-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1183-L1202) · [Before (L1818-L1842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1818-L1842)

```diff
-         generateString() {
-           this.css = "", this.map = new JR({
-             file: this.outputFile(),
-             ignoreInvalidMapping: !0
-           });
-           let RR, GR, yR = 1,
-             tR = 1,
-             uR = "<no source>",
-             ZR = {
-               generated: {
-                 column: 0,
-                 line: 0
-               },
-               original: {
-                 column: 0,
-                 line: 0
- ... (9 more removed lines; see GitHub link above)
+       return null !== (Zr = ar) && void 0 !== Zr ? Zr : Wr
+     }
+     const AS = "brv-styles",
+       VS = [".brv-video-layer { position: absolute !important; margin: 0 !important; padding: 0 !important; border: 0 !important; }", ".brv-video-layer { overflow: hidden !important; pointer-events: none !important; background: none !important; transform: none !important; }", ".b … [truncated]
+       iS = `\n.brv-player {\n\t--brv-bg: #22283b;\n\t--brv-panel: #2b3249;\n\t--brv-text: #f2f2f2;\n\t--brv-muted: #a4a4a4;\n\t--brv-accent: #ffb914;\n\t--brv-track: #3c4b68;\n\t--brv-fps: #1dd06d;\n\t--brv-low-fps: #e34f4f;\n\t--brv-inactive: rgba(164, 164, 164, 0.18);\n\t--brv- … [truncated]
+     class wS {
+       static create(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
+         if (!Sr.some((rr => rr.type === Rr.e.FullSnapshot))) return null;
+         const fr = function(rr, Sr) {
+           const Qr = {
+             sheets: GS(rr),
+             styleTextIds: LS(rr),
+             pointer: Sr
+           };
+           return rr.map((rr => {
+             if (rr.type !== Rr.e.FullSnapshot && rr.type !== Rr.e.IncrementalSnapshot) return rr;
+ ... (4 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1845-L1896` → after: `L1205-L1272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1205-L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1205-L1272) · [Before (L1845-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1845-L1896)

```diff
-         }
-         isAnnotation() {
-           return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((RR => RR.annotation)))
-         }
-         isInline() {
-           if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
-           let RR = this.mapOpts.annotation;
-           return ("undefined" === typeof RR || !0 === RR) && (!this.previous().length || this.previous().some((RR => RR.inline)))
-         }
-         isMap() {
-           return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
-         }
-         isSourcesContent() {
-           return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((RR => RR.withContent()))
-         }
-         outputFile() {
- ... (36 more removed lines; see GitHub link above)
+         }(function(rr, Sr) {
+           const Qr = {
+             hosts: Sr,
+             styleTextIds: LS(rr)
+           };
+           return rr.map((rr => rr.type === Rr.e.Meta ? rr : {
+             ...rr,
+             data: vS("data", rr.data, Qr)
+           }))
+         }(Sr, ar), Qr);
+         return new wS(rr, fr, Zr, Wr, jr, Ir)
+       }
+       constructor(rr, Sr, Qr, Zr, Wr, ar) {
+         var jr, Ir, fr, Er;
+         this.domClock = Qr, this.canvasSelectors = Zr, this.videoLayer = Wr, this.replayer = void 0, this.pausedAnimations = new IS, this.firstDomMs = void 0, this.lastDomMs = void 0, this.lastCanvasRectMs = -1 / 0, this.lastDomCheckMs = -1 / 0, this.firstDomMs = null !== (jr = n … [truncated]
+           root: rr,
+ ... (52 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1898-L1925` → after: `L1274-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1274-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1274-L1277) · [Before (L1898-L1925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1898-L1925)

```diff
-           }));
-           else if (this.css) {
-             let RR = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
-             this.map.setSourceContent(RR, this.css)
-           }
-         }
-         sourcePath(RR) {
-           return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(RR.source.input.from) : this.toUrl(this.path(RR.source.input.from))
-         }
-         toBase64(RR) {
-           return Buffer ? Buffer.from(RR).toString("base64") : window.btoa(unescape(encodeURIComponent(RR)))
-         }
-         toFileUrl(RR) {
-           let JR = this.memoizedFileURLs.get(RR);
-           if (JR) return JR;
-           if (ZR) {
- ... (12 more removed lines; see GitHub link above)
+             return null
+           }(rr, this.canvasSelectors),
+           Qr = this.videoLayer.element;
+         null !== Sr ? (Qr.previousSibling !== Sr && Sr.after(Qr), Qr.style.display = "", Qr.style.left = `${Sr.offsetLeft}px`, Qr.style.top = `${Sr.offsetTop}px`, Qr.style.width = `${Sr.offsetWidth}px`, Qr.style.height = `${Sr.offsetHeight}px`) : Qr.style.display = "none"
```

#### 67. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1928-L1936` → after: `L1280-L1304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1280-L1304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1280-L1304) · [Before (L1928-L1936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1928-L1936)

```diff
- 
-     function NG() {
-       if (mJ) return IJ;
-       mJ = 1;
-       let RR = pG();
-       class JR extends RR {
-         constructor(RR) {
-           super(RR), this.type = "comment"
-         }
+     const cS = {
+       width: 1280,
+       height: 720
+     };
+     class FS {
+       constructor(rr, Sr) {
+         this.root = rr, this.onViewportChanged = Sr, this.element = void 0, this.viewport = null, this.resizeObserver = void 0, this.element = document.createElement("div"), this.element.className = "brv-stage", rr.appendChild(this.element), this.resizeObserver = new ResizeObserv … [truncated]
+           this.fit()
+         })), this.resizeObserver.observe(rr)
+       }
+       setViewport(rr) {
+         var Sr;
+         null === rr || rr.width <= 0 || rr.height <= 0 || rr.width === (null === (Sr = this.viewport) || void 0 === Sr ? void 0 : Sr.width) && rr.height === this.viewport.height || (this.viewport = rr, this.element.style.width = `${rr.width}px`, this.element.style.height = `${rr. … [truncated]
+       }
+       destroy() {
+         this.resizeObserver.disconnect(), this.element.remove()
+ ... (9 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1940-L1953` → after: `L1307-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1307-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1307-L1311) · [Before (L1940-L1953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1940-L1953)

```diff
- 
-     function DG() {
-       if (SJ) return zJ;
-       SJ = 1;
-       let RR, JR, GR, yR, {
-           isClean: tR,
-           my: uR
-         } = MG(),
-         ZR = gG(),
-         qR = NG(),
-         iR = pG();
- 
-       function fR(RR) {
-         return RR.map((RR => (RR.nodes && (RR.nodes = fR(RR.nodes)), delete RR.source, RR)))
+     class oS {
+       constructor(rr) {
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
+           Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dr;
+         this.urls = void 0, this.urls = new ur(rr, "video URLs", Sr, Qr)
```

#### 69. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1955-L2119` → after: `L1313-L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1313-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1313-L1336) · [Before (L1955-L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L1955-L2119)

```diff
- 
-       function VR(RR) {
-         if (RR[tR] = !1, RR.proxyOf.nodes)
-           for (let JR of RR.proxyOf.nodes) VR(JR)
-       }
-       class KR extends iR {
-         append() {
-           for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
-           for (let yR of JR) {
-             let RR = this.normalize(yR, this.last);
-             for (let JR of RR) this.proxyOf.nodes.push(JR)
-           }
-           return this.markDirty(), this
-         }
-         cleanRaws(RR) {
-           if (super.cleanRaws(RR), this.nodes)
- ... (149 more removed lines; see GitHub link above)
+       reset(rr) {
+         this.urls.reset(rr.flatMap((rr => {
+           var Sr;
+           return null !== (Sr = function(rr) {
+             return "url" in rr ? null === rr.url ? null : {
+               sequence: rr.sequence,
+               url: rr.url
+             } : void 0 === rr.partUrls ? null : {
+               sequence: rr.sequence,
+               partUrls: rr.partUrls
+             }
+           }(rr)) && void 0 !== Sr ? Sr : []
+         })))
+       }
+       get(rr) {
+         return this.urls.get(rr)
+ ... (8 more added lines; see GitHub link above)
```

#### 70. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2135-L2149` → after: `L1339-L1353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1339-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1339-L1353) · [Before (L2135-L2149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2135-L2149)

```diff
- 
-     function HG() {
-       if (dJ) return jJ;
-       dJ = 1;
-       let RR, JR, GR = DG();
-       class yR extends GR {
-         constructor(RR) {
-           super({
-             type: "document",
-             ...RR
-           }), this.nodes || (this.nodes = [])
-         }
-         toResult() {
-           let GR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-           return new RR(new JR, this, GR).stringify()
+     async function bS(rr, Sr, Qr) {
+       const Zr = [];
+       let Wr = rr.length,
+         ar = 0;
+       return await Promise.all(Array.from({
+         length: Math.min(3, rr.length)
+       }, (() => (async () => {
+         for (; ar < Wr;) {
+           const Ir = ar++;
+           try {
+             Zr[Ir] = await Sr(rr[Ir], Qr)
+           } catch (jr) {
+             if (Qr.aborted) throw jr;
+             console.warn(`Replay video part ${Ir} failed to load; playing the parts before it.`, jr), Wr = Math.min(Wr, Ir)
+           }
```

#### 71. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2151-L2156` → after: `L1355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1355) · [Before (L2151-L2156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2151-L2156)

```diff
-       }
-       return yR.registerLazyResult = JR => {
-         RR = JR
-       }, yR.registerProcessor = RR => {
-         JR = RR
-       }, jJ = yR, yR.default = yR, jJ
+       })()))), Zr.slice(0, Wr)
```

#### 72. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2159-L2164` → after: `L1358-L1423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1358-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1358-L1423) · [Before (L2159-L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2159-L2164)

```diff
-     function oG() {
-       if (YJ) return EJ;
-       YJ = 1;
-       let RR = {};
-       return EJ = function(JR) {
-         RR[JR] || (RR[JR] = !0, "undefined" !== typeof console && console.warn && console.warn(JR))
+     function JS(rr) {
+       const Sr = [];
+       let Qr = 0;
+       for (const pr of rr) Sr.push(Qr), Qr += pr.byteLength;
+       let Zr = 0;
+       const Wr = Qr => {
+           for (; Sr[Zr] > Qr;) Zr--;
+           for (; Zr + 1 < Sr.length && Sr[Zr + 1] <= Qr;) Zr++;
+           return rr[Zr][Qr - Sr[Zr]]
+         },
+         ar = rr => Wr(rr) * 2 ** 24 + 65536 * Wr(rr + 1) + 256 * Wr(rr + 2) + Wr(rr + 3);
+       let jr = 0,
+         Ir = !1,
+         fr = !1,
+         Er = 0;
+       for (; jr + 8 <= Qr;) {
+ ... (50 more added lines; see GitHub link above)
```

#### 73. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2168-L2188` → after: `L1427-L1428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1427-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1427-L1428) · [Before (L2168-L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2168-L2188)

```diff
-     function cG() {
-       if (QJ) return kJ;
-       QJ = 1;
-       class RR {
-         constructor(RR) {
-           let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-           if (this.type = "warning", this.text = RR, JR.node && JR.node.source) {
-             let RR = JR.node.rangeBy(JR);
-             this.line = RR.start.line, this.column = RR.start.column, this.endLine = RR.end.line, this.endColumn = RR.end.column
-           }
-           for (let GR in JR) this[GR] = JR[GR]
-         }
-         toString() {
-           return this.node ? this.node.error(this.text, {
-             index: this.index,
-             plugin: this.plugin,
- ... (5 more removed lines; see GitHub link above)
+     function sS(rr, Sr) {
+       return `${rr}/${Sr}`
```

#### 74. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2191-L2215` → after: `L1431-L1441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1431-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1431-L1441) · [Before (L2191-L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2191-L2215)

```diff
-     function PG() {
-       if (TJ) return FJ;
-       TJ = 1;
-       let RR = cG();
-       class JR {
-         constructor(RR, JR, GR) {
-           this.processor = RR, this.messages = [], this.root = JR, this.opts = GR, this.css = void 0, this.map = void 0
-         }
-         toString() {
-           return this.css
-         }
-         warn(JR) {
-           let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-           GR.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (GR.plugin = this.lastPlugin.postcssPlugin);
-           let yR = new RR(JR, GR);
-           return this.messages.push(yR), yR
- ... (9 more removed lines; see GitHub link above)
+     function uS(rr) {
+       const Sr = function(rr) {
+         return rr.map(((Sr, Qr) => {
+           const Zr = rr[Qr + 1];
+           return void 0 === Zr ? Sr.endMs : Math.min(Sr.endMs, Zr.startMs)
+         }))
+       }(rr);
+       return rr.map(((rr, Qr) => ({
+         ...rr,
+         endMs: Sr[Qr]
+       }))).filter((rr => rr.endMs > rr.startMs))
```

#### 75. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2218-L2230` → after: `L1444-L1453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1444-L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1444-L1453) · [Before (L2218-L2230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2218-L2230)

```diff
-     function IG() {
-       if (JG) return RG;
-       JG = 1;
-       let RR = DG();
-       class JR extends RR {
-         constructor(RR) {
-           super(RR), this.type = "atrule"
-         }
-         append() {
-           return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
-         }
-         prepend() {
-           return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
+     function rQ(rr, Sr) {
+       let Qr = 0,
+         Zr = rr.length - 1;
+       for (; Qr <= Zr;) {
+         const Wr = Qr + Zr >> 1,
+           ar = rr[Wr];
+         if (Sr < ar.startMs) Zr = Wr - 1;
+         else {
+           if (!(Sr >= ar.endMs)) return ar;
+           Qr = Wr + 1
```

#### 76. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2233` → after: `L1456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1456) · [Before (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2233)

```diff
-       return RG = JR, JR.default = JR, RR.registerAtRule(JR), RG
+       return null
```

#### 77. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2236-L2265` → after: `L1459-L1460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1459-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1459-L1460) · [Before (L2236-L2265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2236-L2265)

```diff
-     function mG() {
-       if (yG) return GG;
-       yG = 1;
-       let RR, JR, GR = DG();
-       class yR extends GR {
-         constructor(RR) {
-           super(RR), this.type = "root", this.nodes || (this.nodes = [])
-         }
-         normalize(RR, JR, GR) {
-           let yR = super.normalize(RR);
-           if (JR)
-             if ("prepend" === GR) this.nodes.length > 1 ? JR.raws.before = this.nodes[1].raws.before : delete JR.raws.before;
-             else if (this.first !== JR)
-             for (let tR of yR) tR.raws.before = JR.raws.before;
-           return yR
-         }
- ... (14 more removed lines; see GitHub link above)
+     function SQ(rr, Sr) {
+       return (Sr - rr.startMs) / 1e3
```

#### 78. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2268-L2286` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1463-L1464) · [Before (L2268-L2286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2268-L2286)

```diff
-     function zG() {
-       if (uG) return tG;
-       uG = 1;
-       let RR = {
-         comma: JR => RR.split(JR, [","], !0),
-         space: JR => RR.split(JR, [" ", "\n", "\t"]),
-         split(RR, JR, GR) {
-           let yR = [],
-             tR = "",
-             uR = !1,
-             ZR = 0,
-             qR = !1,
-             iR = "",
-             fR = !1;
-           for (let VR of RR) fR ? fR = !1 : "\\" === VR ? fR = !0 : qR ? VR === iR && (qR = !1) : '"' === VR || "'" === VR ? (qR = !0, iR = VR) : "(" === VR ? ZR += 1 : ")" === VR ? ZR > 0 && (ZR -= 1) : 0 === ZR && JR.includes(VR) && (uR = !0), uR ? ("" !== tR && yR.push(tR.trim … [truncated]
-           return (GR || "" !== tR) && yR.push(tR.trim()), yR
- ... (3 more removed lines; see GitHub link above)
+     function QQ(rr) {
+       return Math.max(.4, .1 * rr)
```

#### 79. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2289-L2296` → after: `L1467-L1490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1467-L1490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1467-L1490) · [Before (L2289-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2289-L2296)

```diff
-     function SG() {
-       if (qG) return ZG;
-       qG = 1;
-       let RR = DG(),
-         JR = zG();
-       class GR extends RR {
-         constructor(RR) {
-           super(RR), this.type = "rule", this.nodes || (this.nodes = [])
+     function ZQ(rr) {
+       return Math.max(.0625, Math.min(16, rr))
+     }
+     class WQ {
+       constructor(rr, Sr, Qr, Zr, Wr, ar, jr) {
+         this.still = Sr, this.clock = Qr, this.frameDurationS = Zr, this.wallNowMs = Wr, this.onLoadFailed = jr, this.element = void 0, this.slots = new Map, this.shown = null, this.seekLatencyS = .15, this.lastSeekWallMs = -1 / 0, this.lastPresented = null, this.stats = {
+           frames: 0,
+           sumAbsDriftMs: 0,
+           maxAbsDriftMs: 0,
+           withinOneFrame: 0,
+           seeks: 0
+         }, this.failed = new Set, this.segments = void 0, this.segmentUrls = void 0, this.blobs = new dS, this.stillImage = void 0, this.stillShown = !1, this.failedStillUrl = null, this.segments = uS(rr), this.segmentUrls = new oS(ar), this.segmentUrls.reset(this.segments), this … [truncated]
+           console.warn("Replay still failed to load."), this.failedStillUrl = this.stillImage.getAttribute("src"), this.stillImage.removeAttribute("src"), this.onLoadFailed()
+         })), this.element.appendChild(this.stillImage)
+       }
+       get visible() {
+ ... (8 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2298-L2299` → after: `L1492-L1520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1492-L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1492-L1520) · [Before (L2298-L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2298-L2299)

```diff
-         get selectors() {
-           return JR.comma(this.selector)
+       }
+       failedAt(rr) {
+         const Sr = rQ(this.segments, rr);
+         return null !== Sr && this.failed.has(Sr.sequence)
+       }
+       replaceSegments(rr, Sr) {
+         for (const Qr of this.slots.values()) this.release(Qr);
+         this.slots.clear(), this.failed.clear(), this.segments = uS(rr), this.segmentUrls.reset(this.segments), this.still = Sr
+       }
+       update(rr) {
+         var Sr, Qr;
+         this.segmentUrls.update(this.segments, rr, this.clock.speed);
+         const Zr = rQ(this.segments, rr),
+           Wr = function(rr, Sr) {
+             const Qr = rr.find((rr => rr.startMs > Sr));
+             return void 0 === Qr ? null : Qr.startMs - Sr <= ("parts" in Qr ? 15e3 : 8e3) ? Qr : null
+ ... (13 more added lines; see GitHub link above)
```

#### 81. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2301-L2304` → after: `L1522-L1536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1522-L1536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1522-L1536) · [Before (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2301-L2304)

```diff
-         set selectors(RR) {
-           let JR = this.selector ? this.selector.match(/,\s*/) : null,
-             GR = JR ? JR[0] : "," + this.raw("between", "beforeOpen");
-           this.selector = RR.join(GR)
+       }
+       getSyncStats() {
+         const {
+           frames: rr,
+           sumAbsDriftMs: Sr,
+           maxAbsDriftMs: Qr,
+           withinOneFrame: Zr,
+           seeks: Wr
+         } = this.stats;
+         return {
+           frames: rr,
+           meanAbsDriftMs: 0 === rr ? 0 : Sr / rr,
+           maxAbsDriftMs: Qr,
+           withinOneFrame: 0 === rr ? 1 : Zr / rr,
+           seeks: Wr
```

#### 82. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2307-L2596` → after: `L1539-L1545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1539-L1545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1539-L1545) · [Before (L2307-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2307-L2596)

```diff
-       return ZG = GR, GR.default = GR, RR.registerRule(GR), ZG
-     }
- 
-     function jG() {
-       if (fG) return iG;
-       fG = 1;
-       let RR = gG(),
-         JR = function() {
-           if (hJ) return sJ;
-           hJ = 1;
-           const RR = "'".charCodeAt(0),
-             JR = '"'.charCodeAt(0),
-             GR = "\\".charCodeAt(0),
-             yR = "/".charCodeAt(0),
-             tR = "\n".charCodeAt(0),
-             uR = " ".charCodeAt(0),
- ... (274 more removed lines; see GitHub link above)
+       resetSyncStats() {
+         this.stats = {
+           frames: 0,
+           sumAbsDriftMs: 0,
+           maxAbsDriftMs: 0,
+           withinOneFrame: 0,
+           seeks: 0
```

#### 83. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2598-L2599` → after: `L1547-L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1547-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1547-L1586) · [Before (L2598-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2598-L2599)

```diff
-         vW(RR) {
-           let JR = this.input.fromOffset(RR);
+       }
+       noteClockJump() {
+         this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null
+       }
+       destroy() {
+         for (const rr of this.slots.values()) this.release(rr);
+         this.slots.clear(), this.segmentUrls.destroy(), this.element.remove()
+       }
+       sync(rr, Sr) {
+         const {
+           video: Qr
+         } = rr;
+         if (Qr.seeking) return;
+         const {
+           playing: Zr,
+           speed: Wr
+ ... (24 more added lines; see GitHub link above)
```

#### 84. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2601-L2681` → after: `L1588-L1589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1588-L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1588-L1589) · [Before (L2601-L2681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2601-L2681)

```diff
-             column: JR.col,
-             line: JR.line,
-             offset: RR
-           }
-         }
-         init(RR, JR) {
-           this.current.push(RR), RR.source = {
-             input: this.input,
-             start: this.vW(JR)
-           }, RR.raws.before = this.spaces, this.spaces = "", "comment" !== RR.type && (this.semicolon = !1)
-         }
-         other(RR) {
-           let JR = !1,
-             GR = null,
-             yR = !1,
-             tR = null,
- ... (65 more removed lines; see GitHub link above)
+             kind: "rate",
+             playbackRate: ZQ(Math.max(.5 * Wr, Math.min(1.5 * Wr, Ir)))
```

#### 85. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2683-L2741` → after: `L1591-L1639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1591-L1639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1591-L1639) · [Before (L2683-L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2683-L2741)

```diff
-           RR[JR] = VR
-         }
-         rule(RR) {
-           RR.pop();
-           let JR = new uR;
-           this.init(JR, RR[0][2]), JR.raws.between = this.spacesAndCommentsFromEnd(RR), this.raw(JR, "selector", RR), this.current = JR
-         }
-         spacesAndCommentsFromEnd(RR) {
-           let JR, GR = "";
-           for (; RR.length && (JR = RR[RR.length - 1][0], "space" === JR || "comment" === JR);) GR = RR.pop()[1] + GR;
-           return GR
-         }
-         spacesAndCommentsFromStart(RR) {
-           let JR, GR = "";
-           for (; RR.length && (JR = RR[0][0], "space" === JR || "comment" === JR);) GR += RR.shift()[1];
-           return GR
- ... (43 more removed lines; see GitHub link above)
+         }({
+           targetS: Sr,
+           currentS: Qr.currentTime,
+           playing: ar,
+           speed: Wr,
+           frameDurationS: this.frameDurationS
+         });
+         if ("seek" === jr.kind) {
+           const Sr = this.seekLatencyS * Wr,
+             Ir = Zr ? ar ? Math.min(Sr, QQ(Wr) / 2) : Sr : 0;
+           rr.seekStartedWallMs = this.wallNowMs(), this.stats.seeks++, ar && (this.lastSeekWallMs = this.wallNowMs(), this.lastPresented = null), Qr.currentTime = Math.max(0, jr.mediaTimeS + Ir)
+         } else "rate" === jr.kind && Math.abs(Qr.playbackRate - jr.playbackRate) > .001 && (Qr.playbackRate = jr.playbackRate);
+         ar && Qr.paused && Qr.currentTime < Qr.duration ? (Qr.playbackRate = ZQ(Wr), Qr.play().catch((rr => {
+           console.warn("Replay video refused to play.", rr)
+         }))) : ar || Qr.paused || Qr.pause()
+       }
+ ... (33 more added lines; see GitHub link above)
```

#### 86. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2743-L2760` → after: `L1641-L1687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1641-L1687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1641-L1687) · [Before (L2743-L2760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2743-L2760)

```diff
-     }
- 
-     function dG() {
-       if (KG) return VG;
-       KG = 1;
-       let RR = DG(),
-         JR = jG(),
-         GR = OG();
- 
-       function yR(RR, yR) {
-         let tR = new GR(RR, yR),
-           uR = new JR(tR);
-         try {
-           uR.parse()
-         } catch (ZR) {
-           throw ZR
- ... (2 more removed lines; see GitHub link above)
+       playBlob(rr, Sr) {
+         rr.objectUrl = URL.createObjectURL(Sr), rr.video.src = rr.objectUrl
+       }
+       markFailed(rr) {
+         this.failed.add(rr.sequence), this.onLoadFailed()
+       }
+       showStill(rr) {
+         const Sr = null !== rr && rr.url !== this.failedStillUrl ? rr : null;
+         null !== Sr && this.stillImage.getAttribute("src") !== Sr.url && (this.stillImage.src = Sr.url);
+         const Qr = null !== Sr && this.stillImage.complete && this.stillImage.naturalWidth > 0;
+         Qr !== this.stillShown && (this.stillImage.classList.toggle("brv-still-shown", Qr), this.stillShown = Qr)
+       }
+       show(rr) {
+         var Sr;
+         this.shown !== rr && (null === (Sr = this.shown) || void 0 === Sr || Sr.video.classList.remove("brv-video-shown"), null === rr || void 0 === rr || rr.video.classList.add("brv-video-shown"), this.shown = rr)
+       }
+ ... (31 more added lines; see GitHub link above)
```

#### 87. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2764-L2801` → after: `L1690-L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1690-L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1690-L1705) · [Before (L2764-L2801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2764-L2801)

```diff
- 
-     function EG() {
-       if (rG) return wG;
-       rG = 1;
-       let {
-         isClean: RR,
-         my: JR
-       } = MG(), GR = xG(), yR = lG(), tR = DG(), uR = HG(), ZR = (oG(), PG()), qR = dG(), iR = mG();
-       const fR = {
-           atrule: "AtRule",
-           comment: "Comment",
-           decl: "Declaration",
-           document: "Document",
-           root: "Root",
-           rule: "Rule"
-         },
- ... (22 more removed lines; see GitHub link above)
+     const aQ = 1 / 30,
+       jQ = ["#noa-canvas", "#noa-container"];
+     class IQ {
+       constructor(rr, Sr) {
+         var Qr, Zr, Wr, ar, jr, Ir, fr, Er;
+         let pr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
+         this.timeline = void 0, this.chapters = void 0, this.lowFps = void 0, this.stage = void 0, this.clock = void 0, this.annotations = void 0, this.videoLayer = void 0, this.domLayer = void 0, this.listeners = new Set, this.skipInactive = !0, this.ended = !1, this.frame = 0,  … [truncated]
+           this.frame = requestAnimationFrame(this.lx);
+           const rr = performance.now();
+           this.applySkips();
+           const Sr = this.clock.timeMs();
+           this.annotations.update(Sr, this.clock.speed), this.videoLayer.update(Sr), null === this.domLayer ? this.stage.setViewport(this.videoLayer.getVideoSizeAt(Sr)) : this.domLayer.update(Sr, this.clock.playing, rr);
+           const Qr = this.getState();
+           (null === this.lastState || function(rr, Sr) {
+             return Object.keys(rr).some((Qr => "positionMs" === Qr ? Math.floor(rr.positionMs / 1e3) !== Math.floor(Sr.positionMs / 1e3) : rr[Qr] !== Sr[Qr]))
+           }(Qr, this.lastState)) && this.emitState(Qr)
```

#### 88. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2803-L2805` → after: `L1707-L1726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1707-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1707-L1726) · [Before (L2803-L2805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2803-L2805)

```diff
- 
-       function wR(RR) {
-         return "object" === typeof RR && "function" === typeof RR.then
+         const xr = () => performance.now();
+         this.lowFps = null !== (Qr = pr.lowFps) && void 0 !== Qr ? Qr : 25;
+         const mr = new Vr(Sr.domEvents);
+         this.timeline = new Cr(Sr.windows.length > 0 ? Sr.windows : [Gr(Sr, mr)]), this.chapters = [...Sr.chapters].sort(((rr, Sr) => rr.startMs - Sr.startMs)), this.annotations = new aS(Sr, mr, this.timeline, {
+           inactivityThresholdMs: null !== (Zr = pr.inactivityThresholdMs) && void 0 !== Zr ? Zr : 1e4,
+           loadTelemetryChunk: null !== (Wr = pr.loadTelemetryChunk) && void 0 !== Wr ? Wr : null,
+           telemetryUrls: null !== (ar = pr.telemetryUrls) && void 0 !== ar ? ar : null,
+           onTelemetryFailed: () => {
+             this.urlRefresher.request()
+           }
+         }), this.urlRefresher = new sr(null !== (jr = pr.refreshUrls) && void 0 !== jr ? jr : null, (rr => {
+           this.videoLayer.replaceSegments(Mr(rr.videoSegments), rr.still), this.videoLayer.noteClockJump(), this.annotations.replaceTelemetryUrls(rr.telemetryChunks)
+         })), this.clock = new kr(this.timeline.startMs, xr), this.stage = new FS(rr, (() => {
+           var rr;
+           null === (rr = this.domLayer) || void 0 === rr || rr.invalidateCanvasRect()
+         })), this.videoLayer = new WQ(Mr(Sr.videoSegments), Sr.still, this.clock, aQ, xr, null !== (Ir = pr.segmentUrls) && void 0 !== Ir ? Ir : null, (() => {
+ ... (4 more added lines; see GitHub link above)
```

#### 89. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2807-L2811` → after: `L1728-L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1728-L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1728-L1729) · [Before (L2807-L2811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2807-L2811)

```diff
- 
-       function rR(RR) {
-         let JR = !1,
-           GR = fR[RR.type];
-         return "decl" === RR.type ? JR = RR.prop.toLowerCase() : "atrule" === RR.type && (JR = RR.name.toLowerCase()), JR && RR.append ? [GR, GR + "-" + JR, 0, GR + "Exit", GR + "Exit-" + JR] : JR ? [GR, GR + "-" + JR, GR + "Exit", GR + "Exit-" + JR] : RR.append ? [GR, 0, GR + "E … [truncated]
+       get markers() {
+         return this.annotations.markers
```

#### 90. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2813-L2823` → after: `L1731-L1732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1731-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1731-L1732) · [Before (L2813-L2823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2813-L2823)

```diff
- 
-       function eR(RR) {
-         let JR;
-         return JR = "document" === RR.type ? ["Document", 0, "DocumentExit"] : "root" === RR.type ? ["Root", 0, "RootExit"] : rR(RR), {
-           eventIndex: 0,
-           events: JR,
-           iterator: 0,
-           node: RR,
-           visitorIndex: 0,
-           visitors: []
-         }
+       get inactiveRanges() {
+         return this.annotations.inactiveRanges
```

#### 91. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2825-L3060` → after: `L1734-L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1734-L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1734-L1735) · [Before (L2825-L3060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L2825-L3060)

```diff
- 
-       function aR(JR) {
-         return JR[RR] = !1, JR.nodes && JR.nodes.forEach((RR => aR(RR))), JR
-       }
-       let LR = {};
-       class nR {
-         constructor(RR, GR, yR) {
-           let uR;
-           if (this.stringified = !1, this.processed = !1, "object" !== typeof GR || null === GR || "root" !== GR.type && "document" !== GR.type)
-             if (GR instanceof nR || GR instanceof ZR) uR = aR(GR.root), GR.map && ("undefined" === typeof yR.map && (yR.map = {}), yR.map.inline || (yR.map.inline = !1), yR.map.prev = GR.map);
-             else {
-               let RR = qR;
-               yR.syntax && (RR = yR.syntax.parse), yR.parser && (RR = yR.parser), RR.parse && (RR = RR.parse);
-               try {
-                 uR = RR(GR, yR)
-               } catch (iR) {
- ... (220 more removed lines; see GitHub link above)
+       get videoGaps() {
+         return this.annotations.videoGaps
```

#### 92. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3062-L3169` → after: `L1737-L1745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1737-L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1737-L1745) · [Before (L3062-L3169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3062-L3169)

```diff
-       return nR.registerPostcss = RR => {
-         LR = RR
-       }, wG = nR, nR.default = nR, iR.registerLazyResult(nR), uR.registerLazyResult(nR), wG
-     }
- 
-     function YG() {
-       if (nG) return LG;
-       nG = 1;
-       let RR = function() {
-           if (aG) return eG;
-           aG = 1;
-           let RR = xG(),
-             JR = lG(),
-             GR = (oG(), dG());
-           const yR = PG();
-           class tR {
- ... (92 more removed lines; see GitHub link above)
+       get frames() {
+         return this.annotations.frames
+       }
+       get input() {
+         return this.annotations.input
+       }
+       subscribe(rr) {
+         return this.listeners.add(rr), rr(this.getState()), () => {
+           this.listeners.delete(rr)
```

#### 93. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3171-L3172` → after: `L1747-L1758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1747-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1747-L1758) · [Before (L3171-L3172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3171-L3172)

```diff
-         use(RR) {
-           return this.plugins = this.plugins.concat(this.normalize([RR])), this
+       }
+       getState() {
+         const rr = this.clock.timeMs();
+         return {
+           positionMs: this.timeline.toPosition(rr),
+           durationMs: this.timeline.durationMs,
+           playing: this.clock.playing,
+           speed: this.clock.speed,
+           skipInactive: this.skipInactive,
+           ended: this.ended,
+           notice: this.getNotice(rr),
+           telemetryChunksLoaded: this.annotations.telemetryChunksLoaded
```

#### 94. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3175-L3246` → after: `L1761-L1762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1761-L1762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1761-L1762) · [Before (L3175-L3246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3175-L3246)

```diff
-       return LG = tR, tR.default = tR, yR.registerProcessor(tR), GR.registerProcessor(tR), LG
-     }
-     const kG = wJ(function() {
-       if (CG) return AG;
-       CG = 1;
-       let RR = AJ(),
-         JR = gG(),
-         GR = EG(),
-         yR = DG(),
-         tR = YG(),
-         uR = lG(),
-         ZR = function() {
-           if (WG) return UG;
-           WG = 1;
-           let RR = gG(),
-             JR = vG(),
- ... (56 more removed lines; see GitHub link above)
+       getPositionMs() {
+         return this.timeline.toPosition(this.clock.timeMs())
```

#### 95. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3248-L3327` → after: `L1764-L1765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1764-L1765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1764-L1765) · [Before (L3248-L3327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3248-L3327)

```diff
-       return UR.plugin = function(RR, JR) {
-         let GR, yR = !1;
- 
-         function uR() {
-           console && console.warn && !yR && (yR = !0, console.warn(RR + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
-             NODE_ENV: "production",
-             PUBLIC_URL: "",
-             WDS_SOCKET_HOST: void 0,
-             WDS_SOCKET_PATH: void 0,
-             WDS_SOCKET_PORT: void 0,
-             FAST_REFRESH: !0,
-             REACT_APP_DEV_URLS: "false"
-           }.LANG && {
-             NODE_ENV: "production",
-             PUBLIC_URL: "",
-             WDS_SOCKET_HOST: void 0,
- ... (64 more removed lines; see GitHub link above)
+       getSyncStats() {
+         return this.videoLayer.getSyncStats()
```

#### 96. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3329-L3334` → after: `L1767-L1829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1767-L1829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1767-L1829) · [Before (L3329-L3334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3329-L3334)

```diff
-       return null == JR || JR.stylesWithHoverClass.set(RR, yR), yR
-     }
- 
-     function TG() {
-       return {
-         stylesWithHoverClass: new Map
+       resetSyncStats() {
+         this.videoLayer.resetSyncStats()
+       }
+       play() {
+         this.ended && this.seekToTime(this.timeline.startMs), this.clock.play(), this.syncDom(), this.emit()
+       }
+       pause() {
+         this.clock.pause(), this.syncDom(), this.emit()
+       }
+       togglePlay() {
+         this.clock.playing ? this.pause() : this.play()
+       }
+       seekToPosition(rr) {
+         this.seekToTime(this.timeline.toTime(rr))
+       }
+       seekBy(rr) {
+ ... (47 more added lines; see GitHub link above)
```

#### 97. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3337-L3338` → after: `L1832-L1833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1832-L1833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1832-L1833) · [Before (L3337-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3337-L3338)

```diff
-     const sG = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
-       hG = new WeakSet;
+     const fQ = 2500,
+       EQ = 5;
```

#### 98. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3341-L3348` → after: `L1836-L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1836) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1836-L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1836-L1844) · [Before (L3341-L3348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3341-L3348)

```diff
-       if (RR.UNSAFE_allowUnprotectedRebuild) return;
-       const JR = RR.doc.defaultView;
-       if (JR && (!hG.has(RR.doc) || ! function(RR) {
-           if (!RR || "IFRAME" !== RR.tagName) return !1;
-           if (!("sandbox" in RR)) return !1;
-           const JR = Array.from(RR.sandbox);
-           return 1 === JR.length && "allow-same-origin" === JR[0]
-         }(JR.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
+       let {
+         label: Sr,
+         wI: Qr,
+         wide: Zr = !1
+       } = rr;
+       return (0, hr.jsx)("span", {
+         className: `brv-key${Qr?" brv-key-held":""}${Zr?" brv-key-wide":""}`,
+         children: Sr
+       })
```

#### 99. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3351-L3363` → after: `L1857-L1862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1857-L1862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1857-L1862) · [Before (L3351-L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3351-L3363)

```diff
-     function Jy(RR, JR, GR, yR) {
-       const {
-         doc: tR,
-         hackCss: uR,
-         cache: ZR
-       } = yR;
-       RR.childNodes.length ? function(RR, JR, GR, yR) {
-         const tR = [];
-         for (const VR of RR.childNodes) VR.type === iR.Text && tR.push(VR);
-         const uR = JR.split("/* rr_split */");
-         for (; uR.length > 1 && uR.length > tR.length;) uR.splice(-2, 2, uR.slice(-2).join(""));
-         let ZR = "";
-         GR && (ZR = FG(uR.join(""), yR));
+     function mQ(rr) {
+       const [Sr, Qr] = (0, Zr.useState)({
+         bits: 0,
+         presses: []
+       });
+       return (0, Zr.useEffect)((() => {
```

#### 100. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3365-L3384` → after: `L1864-L1907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1864-L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1864-L1907) · [Before (L3365-L3384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3365-L3384)

```diff
-           fR = -1;
-         for (let iR = 0; iR < tR.length && iR !== uR.length; iR++) {
-           const RR = tR[iR];
-           let JR = uR[iR];
-           const yR = iR < uR.length - 1 ? uR[iR + 1] : null;
-           if (GR && yR) {
-             let RR = qR,
-               GR = yR.length;
-             GR = Math.min(GR, 30);
-             let tR = !1;
-             for (; GR > 2; GR--) {
-               const JR = yR.substring(0, GR),
-                 uR = ZR.substring(qR).indexOf(JR);
-               if (tR = -1 !== uR, tR) {
-                 RR += uR;
-                 break
- ... (4 more removed lines; see GitHub link above)
+           Zr = "";
+         const Wr = () => {
+           Sr = requestAnimationFrame(Wr);
+           const ar = rr.timeline.toTime(rr.getPositionMs()),
+             {
+               actions: jr,
+               keys: Ir
+             } = rr.input,
+             mr = function(rr, Sr) {
+               const Qr = Er(rr, Sr);
+               return Qr < 0 ? 0 : rr[Qr].bits
+             }(jr, ar),
+             Nr = function(rr, Sr, Qr, Zr) {
+               const Wr = Math.floor(Sr / Qr) * Qr,
+                 ar = new Map;
+               for (let jr = Er(rr, Wr + Qr); jr >= 0 && rr[jr].atMs >= Wr; jr--) {
+ ... (28 more added lines; see GitHub link above)
```

#### 101. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3386` → after: `L1909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1909) · [Before (L3386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3386)

```diff
-       }(RR, GR, uR, ZR) : (uR && (GR = FG(GR, ZR)), JR.appendChild(tR.createTextNode(GR)))
+       }), [rr]), Sr
```

#### 102. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3389-L3394` → after: `L1912-L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1912-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1912-L1915) · [Before (L3389-L3394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3389-L3394)

```diff
-     function Gy(RR, JR) {
-       var GR;
-       const {
-         doc: yR,
-         hackCss: tR,
-         cache: uR
+     function NQ(rr) {
+       let {
+         controller: Sr,
+         labels: Qr
```

#### 103. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3530-L3559` → after: `L1918-L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1918-L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1918-L1984) · [Before (L3530-L3559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3530-L3559)

```diff
-         doc: GR,
-         onVisit: yR,
-         hackCss: tR = !0,
-         afterAppend: uR,
-         cache: ZR,
-         mirror: qR = new lR
-       } = JR, fR = yy(RR, {
-         doc: GR,
-         mirror: qR,
-         skipChild: !1,
-         hackCss: tR,
-         afterAppend: uR,
-         cache: ZR
-       });
-       return function(RR, JR) {
-         for (const yR of RR.getIds()) RR.has(yR) && (GR = RR.JtR(yR), JR(GR));
- ... (14 more removed lines; see GitHub link above)
+         bits: Zr,
+         presses: Wr
+       } = mQ(Sr), ar = rr => function(rr, Sr) {
+         return 0 !== (rr & 1 << jr.indexOf(Sr))
+       }(Zr, rr);
+       return (0, hr.jsxs)("div", {
+         className: "brv-input",
+         "aria-hidden": !0,
+         children: [(0, hr.jsx)("div", {
+           className: "brv-input-slot",
+           children: Wr.map((rr => {
+             const Sr = Nr(rr.code);
+             return (0, hr.jsx)("span", {
+               className: rr.unbound ? "brv-input-press brv-input-press-unbound" : "brv-input-press",
+               children: rr.unbound ? Qr.unboundKey(Sr) : Sr
+             }, pr(rr))
+ ... (51 more added lines; see GitHub link above)
```

#### 104. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3561-L3618` → after: `L1986-L2002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1986-L2002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L1986-L2002) · [Before (L3561-L3618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3561-L3618)

```diff
-     var uy = Object.defineProperty,
-       Zy = (RR, JR, GR) => ((RR, JR, GR) => JR in RR ? uy(RR, JR, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: GR
-       }) : RR[JR] = GR)(RR, "symbol" !== typeof JR ? JR + "" : JR, GR),
-       qy = Object.defineProperty,
-       iy = (RR, JR, GR) => ((RR, JR, GR) => JR in RR ? qy(RR, JR, {
-         enumerable: !0,
-         configurable: !0,
-         writable: !0,
-         value: GR
-       }) : RR[JR] = GR)(RR, "symbol" !== typeof JR ? JR + "" : JR, GR);
-     Date.now().toString();
-     let fy = class {
- ... (42 more removed lines; see GitHub link above)
+     const UQ = {
+       play: "Play (space)",
+       pause: "Pause (space)",
+       speed: "Playback speed",
+       skipInactive: "Skip idle",
+       fullscreen: "Fullscreen (F)",
+       tabHidden: "They switched to another tab.",
+       videoFailed: "The video couldn't load.",
+       nothingToShow: "Nothing was recorded here.",
+       videoGap: "The game's video wasn't recorded here.",
+       error: "Error",
+       graphicsCrash: "The game's graphics crashed",
+       death: "Died",
+       fps: rr => `${rr} FPS`,
+       keys: "Keys",
+       unboundKey: rr => `${rr} does nothing here`,
+ ... (1 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3622-L3642` → after: `L2006-L2013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2006-L2013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2006-L2013) · [Before (L3622-L3642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3622-L3642)

```diff
-       return RR && RR.__esModule && Object.prototype.hasOwnProperty.call(RR, "default") ? RR.default : RR
-     }
- 
-     function Ky(RR) {
-       if (RR.__esModule) return RR;
-       var JR = RR.default;
-       if ("function" == typeof JR) {
-         var GR = function RR() {
-           return this instanceof RR ? Reflect.construct(JR, arguments, this.constructor) : JR.apply(this, arguments)
-         };
-         GR.prototype = JR.prototype
-       } else GR = {};
-       return Object.defineProperty(GR, "__esModule", {
-         value: !0
-       }), Object.keys(RR).forEach((function(JR) {
-         var yR = Object.getOwnPropertyDescriptor(RR, JR);
- ... (5 more removed lines; see GitHub link above)
+       let {
+         path: Sr
+       } = rr;
+       return (0, hr.jsx)("svg", {
+         viewBox: "0 0 24 24",
+         "aria-hidden": !0,
+         children: (0, hr.jsx)("path", {
+           d: Sr
```

#### 106. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3644` → after: `L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2015) · [Before (L3644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3644)

```diff
-       })), GR
+       })
```

#### 107. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3646-L3647` → after: `L2017-L2020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2017-L2020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2017-L2020) · [Before (L3646-L3647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3646-L3647)

```diff
-     var wy, ry = {
-       exports: {}
+     const hQ = {
+       play: "M7 4v16l13-8z",
+       pause: "M6 4h4v16H6zm8 0h4v16h-4z",
+       fullscreen: "M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z"
```

#### 108. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3650-L3737` → after: `L2023-L2036`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2023-L2036)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2023-L2036) · [Before (L3650-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3650-L3737)

```diff
-     function ey() {
-       if (wy) return ry.exports;
-       wy = 1;
-       var RR = String,
-         JR = function() {
-           return {
-             isColorSupported: !1,
-             reset: RR,
-             bold: RR,
-             dim: RR,
-             italic: RR,
-             underline: RR,
-             inverse: RR,
-             hidden: RR,
-             strikethrough: RR,
-             black: RR,
- ... (72 more removed lines; see GitHub link above)
+     function zQ(rr) {
+       let {
+         label: Sr,
+         onClick: Qr,
+         children: Zr
+       } = rr;
+       return (0, hr.jsx)("button", {
+         type: "button",
+         className: "brv-button",
+         title: Sr,
+         "aria-label": Sr,
+         onClick: Qr,
+         children: Zr
+       })
```

#### 109. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3741-L3742` → after: `L2039-L2043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2039-L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2039-L2043) · [Before (L3741-L3742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3741-L3742)

```diff
-     function Xt() {
-       return Wy || (Wy = 1, Ct.isClean = Symbol("isClean"), Ct.my = Symbol("my")), Ct
+     function YQ(rr) {
+       if (!document.fullscreenEnabled) return;
+       (document.fullscreenElement === rr ? document.exitFullscreen() : rr.requestFullscreen()).catch((rr => {
+         console.warn("Couldn't toggle fullscreen.", rr)
+       }))
```

#### 110. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3745-L3760` → after: `L2046-L2064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2046-L2064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2046-L2064) · [Before (L3745-L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3745-L3760)

```diff
-     function Mt() {
-       if (Cy) return Ay;
-       Cy = 1;
-       const RR = {
-         after: "\n",
-         beforeClose: "\n",
-         beforeComment: "\n",
-         beforeDecl: "\n",
-         beforeOpen: " ",
-         beforeRule: "\n",
-         colon: ": ",
-         commentLeft: " ",
-         commentRight: " ",
-         emptyBody: "",
-         indent: "    ",
-         semicolon: !1
+     function nQ(rr) {
+       let {
+         data: Sr,
+         className: Qr,
+         autoPlay: Wr = !1,
+         options: ar,
+         labels: jr = UQ,
+         onController: Ir
+       } = rr;
+       const fr = (0, Zr.useRef)(null),
+         Er = (0, Zr.useRef)(null),
+         pr = (0, Zr.useRef)(ar);
+       pr.current = ar;
+       const xr = (0, Zr.useRef)(Wr);
+       xr.current = Wr;
+       const mr = (0, Zr.useRef)(Ir);
+ ... (3 more added lines; see GitHub link above)
```

#### 111. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3762-L3832` → after: `L2066-L2077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2066-L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2066-L2077) · [Before (L3762-L3832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3762-L3832)

```diff
-       class JR {
-         constructor(RR) {
-           this.builder = RR
-         }
-         atrule(RR, JR) {
-           let GR = "@" + RR.name,
-             yR = RR.params ? this.rawValue(RR, "params") : "";
-           if ("undefined" !== typeof RR.raws.afterName ? GR += RR.raws.afterName : yR && (GR += " "), RR.nodes) this.block(RR, GR + yR);
-           else {
-             let tR = (RR.raws.between || "") + (JR ? ";" : "");
-             this.builder(GR + yR + tR, RR)
-           }
-         }
-         beforeAfter(RR, JR) {
-           let GR;
-           GR = "decl" === RR.type ? this.raw(RR, null, "beforeDecl") : "comment" === RR.type ? this.raw(RR, null, "beforeComment") : "before" === JR ? this.raw(RR, null, "beforeRule") : this.raw(RR, null, "beforeClose");
- ... (55 more removed lines; see GitHub link above)
+       (0, Zr.useEffect)((() => {
+         var rr;
+         ! function(rr) {
+           if (null !== rr.getElementById(AS)) return;
+           const Sr = rr.createElement("style");
+           Sr.id = AS, Sr.textContent = iS, rr.head.appendChild(Sr)
+         }(document);
+         const Qr = new IQ(fr.current, Sr, pr.current),
+           Zr = Qr.subscribe(zr);
+         return Ur(Qr), null === (rr = mr.current) || void 0 === rr || rr.call(mr, Qr), xr.current && Qr.play(), Er.current.focus({
+           preventScroll: !0
+         }), () => {
```

#### 112. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3834-L3885` → after: `L2079-L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2079-L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2079-L2152) · [Before (L3834-L3885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3834-L3885)

```diff
-           return "undefined" === typeof tR && (tR = RR[yR]), ZR.rawCache[yR] = tR, tR
-         }
-         rawBeforeClose(RR) {
-           let JR;
-           return RR.walk((RR => {
-             if (RR.nodes && RR.nodes.length > 0 && "undefined" !== typeof RR.raws.after) return JR = RR.raws.after, JR.includes("\n") && (JR = JR.replace(/[^\n]+$/, "")), !1
-           })), JR && (JR = JR.replace(/\S/g, "")), JR
-         }
-         rawBeforeComment(RR, JR) {
-           let GR;
-           return RR.walkComments((RR => {
-             if ("undefined" !== typeof RR.raws.before) return GR = RR.raws.before, GR.includes("\n") && (GR = GR.replace(/[^\n]+$/, "")), !1
-           })), "undefined" === typeof GR ? GR = this.raw(JR, null, "beforeDecl") : GR && (GR = GR.replace(/\S/g, "")), GR
-         }
-         rawBeforeDecl(RR, JR) {
-           let GR;
- ... (36 more removed lines; see GitHub link above)
+           Zr(), Qr.destroy(), null === (rr = mr.current) || void 0 === rr || rr.call(mr, null)
+         }
+       }), [Sr]);
+       const Br = null !== Nr && Nr.input.inputRecorded,
+         Tr = null === Nr || null === tr ? void 0 : Nr.chapters.findLast((rr => Nr.timeline.toPosition(rr.startMs) <= tr.positionMs));
+       return (0, hr.jsxs)("div", {
+         ref: Er,
+         className: void 0 === Qr ? "brv-player" : `brv-player ${Qr}`,
+         tabIndex: 0,
+         onKeyDown: rr => {
+           if (rr.target instanceof HTMLSelectElement) return;
+           if (" " === rr.key && rr.target !== rr.currentTarget && rr.target instanceof HTMLButtonElement) return;
+           const Sr = function(rr) {
+             let {
+               key: Sr,
+               shiftKey: Qr,
+ ... (58 more added lines; see GitHub link above)
```

#### 113. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3887-L3922` → after: `L2154-L2278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2154-L2278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2154-L2278) · [Before (L3887-L3922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3887-L3922)

```diff
-           })), JR
-         }
-         rawSemicolon(RR) {
-           let JR;
-           return RR.walk((RR => {
-             if (RR.nodes && RR.nodes.length && "decl" === RR.last.type && (JR = RR.raws.semicolon, "undefined" !== typeof JR)) return !1
-           })), JR
-         }
-         rawValue(RR, JR) {
-           let GR = RR[JR],
-             yR = RR.raws[JR];
-           return yR && yR.value === GR ? yR.raw : GR
-         }
-         root(RR) {
-           this.body(RR), RR.raws.after && this.builder(RR.raws.after)
-         }
- ... (20 more removed lines; see GitHub link above)
+           }(rr);
+           null !== Sr && null !== Nr && null !== tr && (rr.preventDefault(), function(rr, Sr, Qr, Zr) {
+             switch (Sr.type) {
+               case "togglePlay":
+                 rr.togglePlay();
+                 break;
+               case "seekBy":
+                 rr.seekBy(Sr.deltaMs);
+                 break;
+               case "stepFrame":
+                 rr.stepFrame(Sr.direction);
+                 break;
+               case "setSpeed":
+                 rr.setSpeed(Sr.speed);
+                 break;
+               case "chapter":
+ ... (109 more added lines; see GitHub link above)
```

#### 114. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3925-L3927` → after: `L2283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2283) · [Before (L3925-L3927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3925-L3927)

```diff
-     function lt() {
-       if (ly) return By;
-       ly = 1;
+     function yQ(rr) {
```

#### 115. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3929-L4093` → after: `L2285-L2317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2285-L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2285-L2317) · [Before (L3929-L4093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L3929-L4093)

```diff
-         isClean: RR,
-         my: JR
-       } = Xt(), GR = Uy(), yR = Mt(), tR = Bt();
- 
-       function uR(RR, JR) {
-         let GR = new RR.constructor;
-         for (let yR in RR) {
-           if (!Object.prototype.hasOwnProperty.call(RR, yR)) continue;
-           if ("proxyCache" === yR) continue;
-           let tR = RR[yR],
-             ZR = typeof tR;
-           "parent" === yR && "object" === ZR ? JR && (GR[yR] = JR) : "source" === yR ? GR[yR] = tR : Array.isArray(tR) ? GR[yR] = tR.map((RR => uR(RR, GR))) : ("object" === ZR && null !== tR && (tR = uR(tR)), GR[yR] = tR)
-         }
-         return GR
-       }
-       class ZR {
- ... (149 more removed lines; see GitHub link above)
+         gameAnalyticsId: Sr,
+         recordingId: Qr,
+         userContext: Wr,
+         autoPlay: ar
+       } = rr;
+       const {
+         t: jr
+       } = (0, Tr.E)(), [Ir, fr] = (0, Zr.useState)({
+         status: "loading"
+       }), [Er, pr] = (0, Zr.useState)(0), xr = (0, Zr.useMemo)((() => function(rr) {
+         return {
+           play: rr("studio:replayPlay"),
+           pause: rr("studio:replayPause"),
+           speed: rr("studio:replaySpeed"),
+           skipInactive: rr("studio:replaySkipIdle"),
+           fullscreen: rr("studio:replayFullscreen"),
+ ... (17 more added lines; see GitHub link above)
```

#### 116. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4095-L4098` → after: `L2319-L2329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2319-L2329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2319-L2329) · [Before (L4095-L4098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4095-L4098)

```diff
-         root() {
-           let RR = this;
-           for (; RR.parent && "document" !== RR.parent.type;) RR = RR.parent;
-           return RR
+       }(jr)), [jr]), mr = (0, Zr.useMemo)((() => ({
+         resourceHosts: KQ,
+         loadTelemetryChunk: Xr.y,
+         refreshUrls: async () => (0, Xr.r)(await eQ.c.getReplay(Wr, Sr, Qr)),
+         segmentUrls: {
+           load: async rr => (await eQ.c.getReplaySegmentUrls(Wr, Sr, Qr, rr, [])).videoSegments,
+           maxSequences: Hr.e
+         },
+         telemetryUrls: {
+           load: async rr => (await eQ.c.getReplaySegmentUrls(Wr, Sr, Qr, [], rr)).telemetrySegments,
+           maxSequences: Hr.j
```

#### 117. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4100-L4118` → after: `L2331-L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2331-L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2331-L2356) · [Before (L4100-L4118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4100-L4118)

```diff
-         toJSON(RR, JR) {
-           let GR = {},
-             yR = null == JR;
-           JR = JR || new Map;
-           let tR = 0;
-           for (let uR in this) {
-             if (!Object.prototype.hasOwnProperty.call(this, uR)) continue;
-             if ("parent" === uR || "proxyCache" === uR) continue;
-             let RR = this[uR];
-             if (Array.isArray(RR)) GR[uR] = RR.map((RR => "object" === typeof RR && RR.toJSON ? RR.toJSON(null, JR) : RR));
-             else if ("object" === typeof RR && RR.toJSON) GR[uR] = RR.toJSON(null, JR);
-             else if ("source" === uR) {
-               let yR = JR.get(RR.input);
-               null == yR && (yR = tR, JR.set(RR.input, tR), tR++), GR[uR] = {
-                 end: RR.end,
-                 inputId: yR,
- ... (3 more removed lines; see GitHub link above)
+       })), [Sr, Qr]);
+       return (0, Zr.useEffect)((() => {
+         let rr = !1;
+         return fr({
+           status: "loading"
+         }), (0, Xr.B)({
+           getReplay: () => eQ.c.getReplay(Wr, Sr, Qr),
+           loadDomEvents: Xr.x,
+           onPreparing: () => {
+             fr({
+               status: "preparing"
+             })
+           },
+           wait: rr => new Promise((Sr => {
+             setTimeout(Sr, rr)
+           })),
+ ... (10 more added lines; see GitHub link above)
```

#### 118. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4120-L4162` → after: `L2358-L2386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2358-L2386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2358-L2386) · [Before (L4120-L4162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4120-L4162)

```diff
-           return yR && (GR.inputs = [...JR.keys()].map((RR => RR.toJSON()))), GR
-         }
-         toProxy() {
-           return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
-         }
-         toString() {
-           let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tR;
-           RR.stringify && (RR = RR.stringify);
-           let JR = "";
-           return RR(this, (RR => {
-             JR += RR
-           })), JR
-         }
-         warn(RR, JR, GR) {
-           let yR = {
-             node: this
- ... (27 more removed lines; see GitHub link above)
+         })).catch((Sr => {
+           console.error("Failed to load studio replay", Sr), rr || fr({
+             status: "error",
+             message: (0, Xr.m)(Sr, jr("studio:replayLoadFailed"))
+           })
+         })), () => {
+           rr = !0
+         }
+       }), [Sr, Qr, Er]), "loading" === Ir.status ? (0, hr.jsx)("div", {
+         className: "StudioReplaysMessage",
+         children: (0, hr.jsx)(Or.c, {})
+       }) : "preparing" === Ir.status ? (0, hr.jsxs)("div", {
+         className: "StudioReplaysMessage",
+         children: [(0, hr.jsx)(Or.c, {}), jr("studio:replayPreparing")]
+       }) : "error" === Ir.status ? (0, hr.jsxs)("div", {
+         className: "StudioReplaysMessage",
+ ... (13 more added lines; see GitHub link above)
```

#### 119. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4165-L4184` → after: `L2389-L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2389-L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2389-L2407) · [Before (L4165-L4184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4165-L4184)

```diff
-     function gt() {
-       if (vy) return by;
-       vy = 1;
-       return by = {
-         nanoid: function() {
-           let RR = "",
-             JR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
-           for (; JR--;) RR += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
-           return RR
-         },
-         customAlphabet: function(RR) {
-           let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
-           return function() {
-             let GR = "",
-               yR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : JR;
-             for (; yR--;) GR += RR[Math.random() * RR.length | 0];
- ... (4 more removed lines; see GitHub link above)
+     function BQ(rr) {
+       let {
+         onPlay: Sr
+       } = rr;
+       const {
+         t: Qr
+       } = (0, Tr.E)();
+       return (0, hr.jsx)("button", {
+         type: "button",
+         className: "StudioReplayPlaceholder",
+         "aria-label": Qr("general:play"),
+         onClick: Sr,
+         children: (0, hr.jsx)("span", {
+           className: "StudioReplayPlaceholderPlay",
+           children: (0, hr.jsx)(lr.c, {
+             name: "play"
+ ... (3 more added lines; see GitHub link above)
```

#### 120. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4187-L4189` → after: `L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2436) · [Before (L4187-L4189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4187-L4189)

```diff
-     function bt() {
-       if (xy) return Oy;
-       xy = 1;
+     function XQ(rr) {
```

#### 121. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4191-L4198` → after: `L2438-L2440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2438-L2440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2438-L2440) · [Before (L4191-L4198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4191-L4198)

```diff
-         SourceMapConsumer: RR,
-         SourceMapGenerator: JR
-       } = ay, {
-         existsSync: GR,
-         readFileSync: yR
-       } = ay, {
-         dirname: tR,
-         join: uR
+         item: Sr,
+         selected: Qr,
+         onSelect: Zr
```

#### 122. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4200-L4266` → after: `L2442-L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2442-L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2442-L2466) · [Before (L4200-L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4200-L4266)

```diff
-       class ZR {
-         constructor(RR, JR) {
-           if (!1 === JR.map) return;
-           this.loadAnnotation(RR), this.inline = this.startWith(this.annotation, "data:");
-           let GR = JR.map ? JR.map.prev : void 0,
-             yR = this.loadMap(JR.from, GR);
-           !this.mapFile && JR.from && (this.mapFile = JR.from), this.mapFile && (this.root = tR(this.mapFile)), yR && (this.text = yR)
-         }
-         consumer() {
-           return this.consumerCache || (this.consumerCache = new RR(this.text)), this.consumerCache
-         }
-         decodeInline(RR) {
-           if (/^data:application\/json;charset=utf-?8,/.test(RR) || /^data:application\/json,/.test(RR)) return decodeURIComponent(RR.substr(RegExp.lastMatch.length));
-           if (/^data:application\/json;charset=utf-?8;base64,/.test(RR) || /^data:application\/json;base64,/.test(RR)) return JR = RR.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(JR, "base64").toString() : window.atob(JR);
-           var JR;
-           let GR = RR.match(/data:application\/json;([^,]+),/)[1];
- ... (51 more removed lines; see GitHub link above)
+       const {
+         t: Wr
+       } = (0, Tr.E)(), jr = (0, Xr.o)(Sr);
+       return (0, hr.jsxs)("button", {
+         type: "button",
+         className: ar()("StudioReplayListItem", {
+           StudioReplayListItemSelected: Qr
+         }),
+         onClick: Zr,
+         children: [(0, hr.jsxs)("div", {
+           className: "StudioReplayListItemTop",
+           children: [(0, hr.jsx)("span", {
+             children: (0, Xr.i)(Sr.startedAtMs)
+           }), (0, hr.jsx)("span", {
+             className: "StudioReplayListItemDuration",
+             children: Yr(Sr.inGameDurationMs)
+ ... (9 more added lines; see GitHub link above)
```

#### 123. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4269-L4271` → after: `L2469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2469) · [Before (L4269-L4271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4269-L4271)

```diff
-     function vt() {
-       if (Dy) return Ny;
-       Dy = 1;
+     function PQ(rr) {
```

#### 124. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4273-L4406` → after: `L2471-L2494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2471-L2494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2471-L2494) · [Before (L4273-L4406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4273-L4406)

```diff
-         SourceMapConsumer: RR,
-         SourceMapGenerator: JR
-       } = ay, {
-         fileURLToPath: GR,
-         pathToFileURL: yR
-       } = ay, {
-         isAbsolute: tR,
-         resolve: uR
-       } = ay, {
-         nanoid: ZR
-       } = gt(), qR = ay, iR = Uy(), fR = bt(), VR = Symbol("fromOffsetCache"), KR = Boolean(RR && JR), wR = Boolean(uR && tR);
-       class rR {
-         constructor(RR) {
-           let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
-           if (null === RR || "undefined" === typeof RR || "object" === typeof RR && !RR.toString) throw new Error(`PostCSS received ${RR} instead of CSS string`);
-           if (this.css = RR.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, JR.from && (!wR || /^\w+:\/\//.test(JR.from) || tR(JR.from) ? this.file = JR.from : this.file = uR(JR.from)), wR &&  … [truncated]
- ... (118 more removed lines; see GitHub link above)
+         gameAnalyticsId: Sr,
+         userContext: Qr,
+         availability: Zr
+       } = rr;
+       const {
+         t: Wr
+       } = (0, Tr.E)();
+       return "on" === Zr ? (0, hr.jsx)(HQ, {
+         gameAnalyticsId: Sr,
+         userContext: Qr
+       }) : "failed" === Zr ? (0, hr.jsxs)("div", {
+         className: "StudioReplaysTab StudioReplaysMessage",
+         children: [(0, hr.jsx)(lr.c, {
+           name: "face-dizzy"
+         }), Wr("studio:replaysStartFailed"), (0, hr.jsx)(Lr.U, {
+           onClick: () => {
+ ... (8 more added lines; see GitHub link above)
```

#### 125. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4409-L4411` → after: `L2497-L2498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2497-L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2497-L2498) · [Before (L4409-L4411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4409-L4411)

```diff
-     function Ot() {
-       if (oy) return Hy;
-       oy = 1;
+     function HQ(rr) {
+       var Sr, Qr;
```

#### 126. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4413-L4461` → after: `L2500-L2518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2500-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2500-L2518) · [Before (L4413-L4461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4413-L4461)

```diff
-         SourceMapConsumer: RR,
-         SourceMapGenerator: JR
-       } = ay, {
-         dirname: GR,
-         relative: yR,
-         resolve: tR,
-         sep: uR
-       } = ay, {
-         pathToFileURL: ZR
-       } = ay, qR = vt(), iR = Boolean(RR && JR), fR = Boolean(GR && tR && yR && uR);
-       return Hy = class {
-         constructor(RR, JR, GR, yR) {
-           this.stringify = RR, this.mapOpts = GR.map || {}, this.root = JR, this.opts = GR, this.css = yR, this.originalCSS = yR, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = ne … [truncated]
-         }
-         addAnnotation() {
-           let RR;
- ... (33 more removed lines; see GitHub link above)
+         gameAnalyticsId: Wr,
+         userContext: jr
+       } = rr;
+       const {
+         t: Ir
+       } = (0, Tr.E)(), fr = function(rr, Sr) {
+         const {
+           t: Qr
+         } = (0, Tr.E)(), [Wr, ar] = (0, Zr.useState)({
+           status: "loading"
+         });
+         return (0, Zr.useEffect)((() => {
+           let Zr = !1;
+           return ar({
+             status: "loading"
+           }), eQ.c.listReplays(Sr, rr).then((rr => {
+ ... (3 more added lines; see GitHub link above)
```

#### 127. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4463-L4576` → after: `L2520-L2526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2520-L2526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2520-L2526) · [Before (L4463-L4576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4463-L4576)

```diff
-           } else this.map = new JR({
-             file: this.outputFile(),
-             ignoreInvalidMapping: !0
-           }), this.map.addMapping({
-             generated: {
-               column: 0,
-               line: 1
-             },
-             original: {
-               column: 0,
-               line: 1
-             },
-             source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
-           });
-           return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map]
-         }
- ... (98 more removed lines; see GitHub link above)
+           })).catch((rr => {
+             console.error("Failed to list studio replays", rr), Zr || ar({
+               status: "error",
+               message: (0, Xr.m)(rr, Qr("studio:replaysLoadFailed"))
+             })
+           })), () => {
+             Zr = !0
```

#### 128. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4578-L4615` → after: `L2528-L2529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2528-L2529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2528-L2529) · [Before (L4578-L4615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4578-L4615)

```diff
-           throw new Error("`map.absolute` option is not available in this PostCSS build")
-         }
-         toUrl(RR) {
-           let JR = this.memoizedURLs.get(RR);
-           if (JR) return JR;
-           "\\" === uR && (RR = RR.replace(/\\/g, "/"));
-           let GR = encodeURI(RR).replace(/[#?]/g, encodeURIComponent);
-           return this.memoizedURLs.set(RR, GR), GR
-         }
-       }
-     }
- 
-     function xt() {
-       if (Py) return cy;
-       Py = 1;
-       let RR = lt();
- ... (22 more removed lines; see GitHub link above)
+         }), [rr]), Wr
+       }(Wr, jr), [Er, pr] = (0, vr.m)(), xr = (0, Xr.I)(Er.get(vQ)), mr = (0, Xr.F)(Er.get(OQ)), Nr = Er.get(TQ), Ur = "loaded" === fr.status ? (0, Xr.d)(fr.value.recordings, xr, mr) : [], tr = "loaded" === fr.status ? (0, Xr.O)(fr.value.recordings, Ur, Nr) : [], zr = null !== (S … [truncated]
```

#### 129. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4618-L4792` → after: `L2532-L2535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2532-L2535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2532-L2535) · [Before (L4618-L4792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L4618-L4792)

```diff
-         if (RR[tR] = !1, RR.proxyOf.nodes)
-           for (let JR of RR.proxyOf.nodes) VR(JR)
-       }
-       class KR extends iR {
-         append() {
-           for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
-           for (let yR of JR) {
-             let RR = this.normalize(yR, this.last);
-             for (let JR of RR) this.proxyOf.nodes.push(JR)
-           }
-           return this.markDirty(), this
-         }
-         cleanRaws(RR) {
-           if (super.cleanRaws(RR), this.nodes)
-             for (let JR of this.nodes) JR.cleanRaws(RR)
-         }
- ... (159 more removed lines; see GitHub link above)
+         rr === Yr && rr === zr || (Hr.current = null, Br.current = !0, Kr(!0), nr(rr), pr((Sr => {
+           (0, vr.g)(Sr, TQ, rr)
+         }), {
+           push: !0
```

#### 130. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5470-L5484` → after: `L2540-L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2540-L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2540-L2543) · [Before (L5470-L5484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L5470-L5484)

```diff
-         let JR = !1,
-           GR = fR[RR.type];
-         return "decl" === RR.type ? JR = RR.prop.toLowerCase() : "atrule" === RR.type && (JR = RR.name.toLowerCase()), JR && RR.append ? [GR, GR + "-" + JR, 0, GR + "Exit", GR + "Exit-" + JR] : JR ? [GR, GR + "-" + JR, GR + "Exit", GR + "Exit-" + JR] : RR.append ? [GR, 0, GR + "E … [truncated]
-       }
- 
-       function eR(RR) {
-         let JR;
-         return JR = "document" === RR.type ? ["Document", 0, "DocumentExit"] : "root" === RR.type ? ["Root", 0, "RootExit"] : rR(RR), {
-           eventIndex: 0,
-           events: JR,
-           iterator: 0,
-           node: RR,
-           visitorIndex: 0,
-           visitors: []
-         }
+         let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         zr !== Yr && (Hr.current = zr), pr((Qr => {
+           (0, vr.g)(Qr, TQ, zr), (0, vr.g)(Qr, vQ, (0, Xr.h)(rr)), Sr && (0, vr.g)(Qr, OQ, null)
+         }))
```

#### 131. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5486-L10355` → after: `L2545-L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2545) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2545-L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2545-L2581) · [Before (L5486-L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L5486-L10355)

```diff
- 
-       function aR(JR) {
-         return JR[RR] = !1, JR.nodes && JR.nodes.forEach((RR => aR(RR))), JR
-       }
-       let LR = {};
-       class nR {
-         constructor(RR, GR, yR) {
-           let uR;
-           if (this.stringified = !1, this.processed = !1, "object" !== typeof GR || null === GR || "root" !== GR.type && "document" !== GR.type)
-             if (GR instanceof nR || GR instanceof ZR) uR = aR(GR.root), GR.map && ("undefined" === typeof yR.map && (yR.map = {}), yR.map.inline || (yR.map.inline = !1), yR.map.prev = GR.map);
-             else {
-               let RR = qR;
-               yR.syntax && (RR = yR.syntax.parse), yR.parser && (RR = yR.parser), RR.parse && (RR = RR.parse);
-               try {
-                 uR = RR(GR, yR)
-               } catch (iR) {
- ... (4854 more removed lines; see GitHub link above)
+       if ((0, Zr.useEffect)((() => {
+           null !== Nr && Nr !== Hr.current && nr(Nr)
+         }), [Nr]), (0, Zr.useEffect)((() => {
+           Br.current && null !== yr.current && (Br.current = !1, yr.current.scrollIntoView({
+             block: "nearest",
+             behavior: "smooth"
+           }))
+         }), [Yr, fr.status]), "loading" === fr.status) return (0, hr.jsx)("div", {
+         className: "StudioReplaysTab StudioReplaysMessage",
+         children: (0, hr.jsx)(Or.c, {})
+       });
+       if ("error" === fr.status) return (0, hr.jsxs)("div", {
+         className: "StudioReplaysTab StudioReplaysMessage",
+         children: [(0, hr.jsx)(lr.c, {
+           name: "face-dizzy"
+         }), fr.message]
+ ... (21 more added lines; see GitHub link above)
```

#### 132. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L10357-L10373` → after: `L2583-L2593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2583-L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2583-L2593) · [Before (L10357-L10373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L10357-L10373)

```diff
-             skipping: {
-               on: {
-                 BACK_TO_NORMAL: {
-                   target: "normal",
-                   actions: ["restoreSpeed"]
-                 },
-                 SET_SPEED: {
-                   target: "normal",
-                   actions: ["setSpeed"]
-                 }
-               }
-             }
-           }
-         }, {
-           actions: {
-             setSpeed: (RR, JR) => {
- ... (1 more removed lines; see GitHub link above)
+             children: [Ir("studio:replaysFilterEndedAt", {
+               minutes: (0, Pr.y)(mr.minute, mr.orLonger ? mr.minute : 1 / 0)
+             }), (0, hr.jsx)(lr.c, {
+               name: "xmark"
+             })]
+           }), Mr.map((rr => (0, hr.jsx)(Lr.U, {
+             active: xr.includes(rr),
+             onClick: () => {
+               ! function(rr) {
+                 Rr(xr.includes(rr) ? xr.filter((Sr => Sr !== rr)) : [...xr, rr])
+               }(rr)
```

#### 133. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L10375-L10677` → after: `L2595-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2595-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2595-L2599) · [Before (L10375-L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L10375-L10677)

```diff
-             recordSpeed: Pq({
-               normalSpeed: RR => RR.timer.speed
-             }),
-             restoreSpeed: RR => {
-               RR.timer.setSpeed(RR.normalSpeed)
-             }
-           }
-         })), this.speedService.start(), this.speedService.subscribe((RR => {
-           this.emitter.emit(HZ.StateChange, {
-             speed: RR
-           })
-         })), this.mediaManager = new Ji({
-           warn: this.warn.bind(this),
-           service: this.service,
-           speedService: this.speedService,
-           emitter: this.emitter,
- ... (287 more removed lines; see GitHub link above)
+             children: Ir(LQ[rr])
+           }, rr))), Cr > 0 && (0, hr.jsx)("span", {
+             className: "StudioReplaysQuota",
+             children: Ir("studio:replaysQuota", {
+               count: Cr
```

#### 134. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L10679-L10715` → after: `L2601-L2610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2601-L2610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2601-L2610) · [Before (L10679-L10715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L10679-L10715)

```diff
-           } else {
-             const yR = await Promise.all(RR.args.map(Tq(this.imageMap, null, GR)));
-             !1 === GR.isUnchanged && this.canvasEventMap.set(JR, {
-               ...RR,
-               args: yR
-             })
-           }
-         }
-       }
-       applyIncremental(RR, JR) {
-         var GR, yR, tR;
-         const {
-           data: uR
-         } = RR;
-         switch (uR.source) {
-           case vZ.Mutation:
- ... (21 more removed lines; see GitHub link above)
+           })]
+         }), (0, hr.jsxs)("div", {
+           className: "StudioReplaysBody",
+           children: [(0, hr.jsxs)("div", {
+             className: "StudioReplaysList",
+             children: [0 === Ur.length && (0, hr.jsxs)("div", {
+               className: "StudioReplaysListEmpty",
+               children: [Ir("studio:replaysNoMatch"), (0, hr.jsx)(Lr.U, {
+                 onClick: () => {
+                   Rr([], !0)
```

#### 135. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L10717-L11240` → after: `L2612-L2638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2612-L2638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/301.js#L2612-L2638) · [Before (L10717-L11240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/301.js#L10717-L11240)

```diff
-                 delay: GR.timeOffset + RR.timestamp - this.service.state.context.baselineTime
-               };
-               this.timer.addAction(yR)
-             })), this.timer.addAction({
-               doAction() {},
-               delay: RR.delay - (null == (GR = uR.positions[0]) ? void 0 : GR.timeOffset)
-             });
-             break;
-           case vZ.MouseInteraction: {
-             if (-1 === uR.id) break;
-             const RR = new Event(bR(OZ[uR.type])),
-               GR = this.mirror.JtR(uR.id);
-             if (!GR) return this.debugNodeNotFound(uR, uR.id);
-             this.emitter.emit(HZ.MouseInteraction, {
-               type: uR.type,
-               target: GR
- ... (508 more removed lines; see GitHub link above)
+                 children: Ir("studio:replaysClearFilters")
+               })]
+             }), tr.map((rr => (0, hr.jsx)(XQ, {
+               item: rr,
+               selected: rr.recordingId === zr,
+               onSelect: () => {
+                 qr(rr.recordingId)
+               }
+             }, rr.recordingId)))]
+           }), null !== zr && (0, hr.jsxs)("div", {
+             ref: yr,
+             className: ar()("StudioReplayViewer", {
+               StudioReplayViewerWaiting: Gr
+             }),
+             children: [!Gr && (0, hr.jsx)(yQ, {
+               gameAnalyticsId: Wr,
+ ... (11 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/302.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/302.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a)

#### 1. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/302.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/302.js#L1)

```diff
- /*! For license information please see 4udp6d.302.19432233.chunk.js.LICENSE.txt */
+ /*! For license information please see fl4vv.302.fac44cb6.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L5-L24` → after: `L5-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L5-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/302.js#L5-L9) · [Before (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/302.js#L5-L24)

```diff
-   42036: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       FirebaseError: () => yR.b,
-       SDK_VERSION: () => yR.c,
-       _DEFAULT_ENTRY_NAME: () => yR.g,
-       qtR: () => yR.j,
-       _addOrOverwriteComponent: () => yR.m,
-       _apps: () => yR.p,
-       _clearComponents: () => yR.q,
-       _components: () => yR.s,
-       _getProvider: () => yR.t,
-       _registerComponent: () => yR.w,
-       _removeServiceInstance: () => yR.z,
-       deleteApp: () => yR.B,
-       getApp: () => yR.G,
-       getApps: () => yR.E,
- ... (4 more removed lines; see GitHub link above)
+   42327: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       e: () => Lj,
+       h: () => lj,
+       l: () => If
```

#### 3. `bundles/bloxd.io/chunks/js/302.js` (Changed code · before: `L26-L27` → after: `L11-L11248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5aR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-e116d97003168c22082306a53048759cc1cd2422e59326251660a1da2f9c0f5a) · [After (L11-L11248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/302.js#L11-L11248) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/302.js#L26-L27)

```diff
-     var yR = GR(42038);
-     (0, yR.M)("firebase", "9.23.0", "app")
+     var Zr, Wr = Object.defineProperty,
+       ar = (rr, Sr, Qr) => ((rr, Sr, Qr) => Sr in rr ? Wr(rr, Sr, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: Qr
+       }) : rr[Sr] = Qr)(rr, "symbol" !== typeof Sr ? Sr + "" : Sr, Qr),
+       jr = Object.defineProperty,
+       Ir = (rr, Sr, Qr) => ((rr, Sr, Qr) => Sr in rr ? jr(rr, Sr, {
+         enumerable: !0,
+         configurable: !0,
+         writable: !0,
+         value: Qr
+       }) : rr[Sr] = Qr)(rr, "symbol" !== typeof Sr ? Sr + "" : Sr, Qr),
+       fr = (rr => (rr[rr.Document = 0] = "Document", rr[rr.DocumentType = 1] = "DocumentType", rr[rr.Element = 2] = "Element", rr[rr.Text = 3] = "Text", rr[rr.CDATA = 4] = "CDATA", rr[rr.Comment = 5] = "Comment", rr))(fr || {});
+     const Er = {
+ ... (11222 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/303.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/303.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a)

#### 1. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/303.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/303.js#L1)

```diff
- /*! For license information please see 4udp6d.303.48fb0f83.chunk.js.LICENSE.txt */
+ /*! For license information please see fl4vv.303.0debe071.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L5-L30` → after: `L5-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L5-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/303.js#L5-L24) · [Before (L5-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/303.js#L5-L30)

```diff
-   42046: (RR, JR, GR) => {
-     GR.d(JR, {
-       $: () => vR,
-       B: () => wR,
-       C: () => mR,
-       F: () => eR,
-       I: () => LR,
-       J: () => lR,
-       M: () => UR,
-       Q: () => WR,
-       T: () => aR,
-       X: () => nR,
-       c: () => rR,
-       db: () => bR,
-       e: () => MR,
-       eb: () => AR,
- ... (10 more removed lines; see GitHub link above)
+   42348: (rr, Sr, Qr) => {
+     Qr.r(Sr), Qr.d(Sr, {
+       FirebaseError: () => Zr.e,
+       SDK_VERSION: () => Zr.f,
+       _DEFAULT_ENTRY_NAME: () => Zr.i,
+       CZr: () => Zr.l,
+       _addOrOverwriteComponent: () => Zr.p,
+       _apps: () => Zr.t,
+       _clearComponents: () => Zr.u,
+       _components: () => Zr.x,
+       _getProvider: () => Zr.A,
+       _registerComponent: () => Zr.E,
+       _removeServiceInstance: () => Zr.F,
+       deleteApp: () => Zr.I,
+       getApp: () => Zr.O,
+       getApps: () => Zr.K,
+ ... (4 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/303.js` (Changed code · before: `L32-L1233` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284aR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ccca1be76c5fbf721f5c351f39cf63c643686f8476441f5d65a3f6687dab284a) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/303.js#L26-L27) · [Before (L32-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/303.js#L32-L1233)

```diff
-     const yR = function(RR) {
-         const JR = [];
-         let GR = 0;
-         for (let yR = 0; yR < RR.length; yR++) {
-           let tR = RR.charCodeAt(yR);
-           tR < 128 ? JR[GR++] = tR : tR < 2048 ? (JR[GR++] = tR >> 6 | 192, JR[GR++] = 63 & tR | 128) : 55296 === (64512 & tR) && yR + 1 < RR.length && 56320 === (64512 & RR.charCodeAt(yR + 1)) ? (tR = 65536 + ((1023 & tR) << 10) + (1023 & RR.charCodeAt(++yR)), JR[GR++] = tR >> 1 … [truncated]
-         }
-         return JR
-       },
-       tR = {
-         byteToCharMap_: null,
-         charToByteMap_: null,
-         byteToCharMapWebSafe_: null,
-         charToByteMapWebSafe_: null,
-         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
-         get ENCODED_VALS() {
- ... (1186 more removed lines; see GitHub link above)
+     var Zr = Qr(42350);
+     (0, Zr.X)("firebase", "9.23.0", "app")
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/304.js` (4udp6d.2845de07 → fl4vv.bd3c59ce)

- **File**: `bundles/bloxd.io/chunks/js/304.js` (60 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc)

#### 1. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L1)

```diff
- /*! For license information please see 4udp6d.304.c497c3c2.chunk.js.LICENSE.txt */
+ /*! For license information please see fl4vv.304.ade88096.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L5-L18` → after: `L5-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L5-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L5-L30) · [Before (L5-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L5-L18)

```diff
-   42054: (RR, JR, GR) => {
-     GR.r(JR), GR.d(JR, {
-       getAnalytics: () => YJ,
-       getGoogleAnalyticsClientId: () => TJ,
-       initializeAnalytics: () => kJ,
-       isSupported: () => QJ,
-       logEvent: () => GG,
-       setAnalyticsCollectionEnabled: () => RG,
-       setConsent: () => yG,
-       setCurrentScreen: () => FJ,
-       setDefaultEventParameters: () => JG,
-       setUserId: () => sJ,
-       setUserProperties: () => hJ,
-       settings: () => dJ
+   42366: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       $: () => Yr,
+       B: () => Hr,
+       D: () => Or,
+       G: () => Pr,
+       H: () => xr,
+       K: () => pr,
+       O: () => mr,
+       R: () => Ar,
+       V: () => Ur,
+       W: () => hr,
+       _: () => vr,
+       cb: () => nr,
+       d: () => Nr,
+       eb: () => tr,
+ ... (10 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L20-L23` → after: `L32-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L32-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L32-L438) · [Before (L20-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L20-L23)

```diff
-     var yR = GR(42038),
-       tR = GR(42051),
-       uR = GR(42046),
-       ZR = GR(42044);
+     const Zr = function(rr) {
+         const Sr = [];
+         let Qr = 0;
+         for (let Zr = 0; Zr < rr.length; Zr++) {
+           let Wr = rr.charCodeAt(Zr);
+           Wr < 128 ? Sr[Qr++] = Wr : Wr < 2048 ? (Sr[Qr++] = Wr >> 6 | 192, Sr[Qr++] = 63 & Wr | 128) : 55296 === (64512 & Wr) && Zr + 1 < rr.length && 56320 === (64512 & rr.charCodeAt(Zr + 1)) ? (Wr = 65536 + ((1023 & Wr) << 10) + (1023 & rr.charCodeAt(++Zr)), Sr[Qr++] = Wr >> 1 … [truncated]
+         }
+         return Sr
+       },
+       Wr = {
+         byteToCharMap_: null,
+         charToByteMap_: null,
+         byteToCharMapWebSafe_: null,
+         charToByteMapWebSafe_: null,
+         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
+         get ENCODED_VALS() {
+ ... (391 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L124-L129` → after: `L539-L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L539-L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L539-L583) · [Before (L124-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L124-L129)

```diff
-     const MR = "@firebase/installations",
-       BR = "0.6.4",
-       lR = 1e4,
-       pR = `w:${BR}`,
-       gR = "FIS_v2",
-       bR = 36e5,
+     class yr {
+       constructor(rr) {
+         this.container = rr
+       }
+       getPlatformInfoString() {
+         return this.container.getProviders().map((rr => {
+           if (function(rr) {
+               const Sr = rr.getComponent();
+               return "VERSION" === (null === Sr || void 0 === Sr ? void 0 : Sr.type)
+             }(rr)) {
+             const Sr = rr.getImmediate();
+             return `${Sr.library}/${Sr.version}`
+           }
+           return null
+         })).filter((rr => rr)).join(" ")
+       }
+ ... (29 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L131-L136` → after: `L585-L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L585-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L585-L610) · [Before (L131-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L131-L136)

```diff
-         "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
-         "not-registered": "Firebase Installation is not registered.",
-         "installation-not-found": "Firebase Installation not found.",
-         "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
-         "app-offline": "Could not process request. Application offline.",
-         "delete-pending-registration": "Can't delete installation while there is a pending registration request."
+         [Br]: "fire-core",
+         [Or]: "fire-core-compat",
+         [lr]: "fire-analytics",
+         [Lr]: "fire-analytics-compat",
+         [Pr]: "fire-app-check",
+         [Xr]: "fire-app-check-compat",
+         [Hr]: "fire-auth",
+         [qr]: "fire-auth-compat",
+         [Rr]: "fire-rtdb",
+         [gr]: "fire-rtdb-compat",
+         [Cr]: "fire-fn",
+         [Mr]: "fire-fn-compat",
+         [Gr]: "fire-iid",
+         [kr]: "fire-iid-compat",
+         [Ar]: "fire-fcm",
+         [Vr]: "fire-fcm-compat",
+ ... (10 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L138` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L612-L613) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L138)

```diff
-       OR = new uR.e("installations", "Installations", vR);
+       rS = new Map,
+       SS = new Map;
```

#### 7. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L140-L141` → after: `L615-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L615-L620) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L140-L141)

```diff
-     function xR(RR) {
-       return RR instanceof uR.f && RR.code.includes("request-failed")
+     function QS(rr, Sr) {
+       try {
+         rr.container.gM(Sr)
+       } catch (Qr) {
+         vr.debug(`Component ${Sr.name} failed to register with FirebaseApp ${rr.name}`, Qr)
+       }
```

#### 8. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L144-L148` → after: `L623-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L623-L624) · [Before (L144-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L144-L148)

```diff
-     function NR(RR) {
-       let {
-         projectId: JR
-       } = RR;
-       return `https://firebaseinstallations.googleapis.com/v1/projects/${JR}/installations`
+     function ZS(rr, Sr) {
+       rr.container.addOrOverwriteComponent(Sr)
```

#### 9. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L152-L167` → after: `L628-L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L628-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L628-L632) · [Before (L152-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L152-L167)

```diff
-       return {
-         token: RR.token,
-         requestStatus: 2,
-         expiresIn: (JR = RR.expiresIn, Number(JR.replace("s", "000"))),
-         creationTime: Date.now()
-       };
-       var JR
-     }
-     async function HR(RR, JR) {
-       const GR = (await JR.json()).error;
-       return OR.create("request-failed", {
-         requestName: RR,
-         serverCode: GR.code,
-         serverMessage: GR.message,
-         serverStatus: GR.status
-       })
+       const Sr = rr.name;
+       if (SS.has(Sr)) return vr.debug(`There were multiple attempts to register component ${Sr}.`), !1;
+       SS.set(Sr, rr);
+       for (const Qr of rS.values()) QS(Qr, rr);
+       return !0
```

#### 10. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L170-L178` → after: `L635-L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L635-L639) · [Before (L170-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L170-L178)

```diff
-     function oR(RR) {
-       let {
-         apiKey: JR
-       } = RR;
-       return new Headers({
-         "Content-Type": "application/json",
-         Accept: "application/json",
-         "x-goog-api-key": JR
-       })
+     function aS(rr, Sr) {
+       const Qr = rr.container.getProvider("heartbeat").getImmediate({
+         optional: !0
+       });
+       return Qr && Qr.triggerHeartbeat(), rr.container.getProvider(Sr)
```

#### 11. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L182-L188` → after: `L643-L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L643-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L643-L644) · [Before (L182-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L182-L188)

```diff
-       let {
-         refreshToken: GR
-       } = JR;
-       const yR = oR(RR);
-       return yR.append("Authorization", function(RR) {
-         return `${gR} ${RR}`
-       }(GR)), yR
+       let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : sr;
+       aS(rr, Sr).clearInstance(Qr)
```

#### 12. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L190-L192` → after: `L646-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L646-L648) · [Before (L190-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L190-L192)

```diff
-     async function PR(RR) {
-       const JR = await RR();
-       return JR.status >= 500 && JR.status < 600 ? RR() : JR
+ 
+     function IS() {
+       SS.clear()
```

#### 13. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L196-L198` → after: `L701-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L701-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L701-L727) · [Before (L196-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L196-L198)

```diff
-       return new Promise((JR => {
-         setTimeout(JR, RR)
-       }))
+       let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
+         Qr = rr;
+       if ("object" !== typeof Sr) {
+         Sr = {
+           name: Sr
+         }
+       }
+       const Wr = Object.assign({
+           name: sr,
+           automaticDataCollectionEnabled: !1
+         }, Sr),
+         jr = Wr.name;
+       if ("string" !== typeof jr || !jr) throw ES.create("bad-app-name", {
+         appName: String(jr)
+       });
+       if (Qr || (Qr = (0, ar.H)()), !Qr) throw ES.create("no-options");
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L203-L214` → after: `L731-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L731-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L731-L737) · [Before (L203-L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L203-L214)

```diff
-       try {
-         const RR = new Uint8Array(17);
-         (self.crypto || self.msCrypto).getRandomValues(RR), RR[0] = 112 + RR[0] % 16;
-         const JR = function(RR) {
-           const JR = (GR = RR, btoa(String.fromCharCode(...GR)).replace(/\+/g, "-").replace(/\//g, "_"));
-           var GR;
-           return JR.substr(0, 22)
-         }(RR);
-         return mR.test(JR) ? JR : ""
-       } catch (RR) {
-         return ""
-       }
+       let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sr;
+       const Sr = rS.get(rr);
+       if (!Sr && rr === sr && (0, ar.H)()) return mS();
+       if (!Sr) throw ES.create("no-app", {
+         appName: rr
+       });
+       return Sr
```

#### 15. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L217-L218` → after: `L740-L741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L740-L741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L740-L741) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L217-L218)

```diff
-     function SR(RR) {
-       return `${RR.appName}!${RR.appId}`
+     function US() {
+       return Array.from(rS.values())
```

#### 16. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L220-L232` → after: `L743-L745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L743-L745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L743-L745) · [Before (L220-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L220-L232)

```diff
-     const jR = new Map;
- 
-     function dR(RR, JR) {
-       const GR = SR(RR);
-       ER(GR, JR),
-         function(RR, JR) {
-           const GR = kR();
-           GR && GR.postMessage({
-             key: RR,
-             fid: JR
-           });
-           QR()
-         }(GR, JR)
+     async function tS(rr) {
+       const Sr = rr.name;
+       rS.has(Sr) && (rS.delete(Sr), await Promise.all(rr.container.getProviders().map((rr => rr.delete()))), rr.isDeleted = !0)
```

#### 17. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L235-L238` → after: `L748-L761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L748-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L748-L761) · [Before (L235-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L235-L238)

```diff
-     function ER(RR, JR) {
-       const GR = jR.get(RR);
-       if (GR)
-         for (const yR of GR) yR(JR)
+     function hS(rr, Sr, Qr) {
+       var Wr;
+       let ar = null !== (Wr = ur[rr]) && void 0 !== Wr ? Wr : rr;
+       Qr && (ar += `-${Qr}`);
+       const jr = ar.match(/\s|\//),
+         Ir = Sr.match(/\s|\//);
+       if (jr || Ir) {
+         const rr = [`Unable to register library "${ar}" with version "${Sr}":`];
+         return jr && rr.push(`library name "${ar}" contains illegal characters (whitespace or "/")`), jr && Ir && rr.push("and"), Ir && rr.push(`version name "${Sr}" contains illegal characters (whitespace or "/")`), void vr.warn(rr.join(" "))
+       }
+       WS(new Zr.f(`${ar}-version`, (() => ({
+         library: ar,
+         version: Sr
+       })), "VERSION"))
```

#### 18. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L242-L245` → after: `L764-L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L764-L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L764-L766) · [Before (L242-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L242-L245)

```diff
-     function kR() {
-       return !YR && "BroadcastChannel" in self && (YR = new BroadcastChannel("[Firebase] FID Change"), YR.onmessage = RR => {
-         ER(RR.data.key, RR.data.fid)
-       }), YR
+     function zS(rr, Sr) {
+       if (null !== rr && "function" !== typeof rr) throw ES.create("invalid-log-argument");
+       (0, Wr.l)(rr, Sr)
```

#### 19. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L248-L249` → after: `L769-L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L769-L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L769-L770) · [Before (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L248-L249)

```diff
-     function QR() {
-       0 === jR.size && YR && (YR.close(), YR = null)
+     function YS(rr) {
+       (0, Wr.h)(rr)
```

#### 20. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L251` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L772) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L251)

```diff
-     const FR = "firebase-installations-store";
+     const nS = "firebase-heartbeat-store";
```

#### 21. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L265-L267` → after: `L786-L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L786-L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L786-L788) · [Before (L265-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L265-L267)

```diff
-           yR(nR(ZR.result), RR.oldVersion, RR.newVersion, nR(ZR.transaction))
-         })), GR && ZR.addEventListener("blocked", (() => GR())), qR.then((RR => {
-           uR && RR.addEventListener("close", (() => uR())), tR && RR.addEventListener("versionchange", (() => tR()))
+           Zr(hr(jr.result), rr.oldVersion, rr.newVersion, hr(jr.transaction), rr)
+         })), Qr && jr.addEventListener("blocked", (rr => Qr(rr.oldVersion, rr.newVersion, rr))), Ir.then((rr => {
+           ar && rr.addEventListener("close", (() => ar())), Wr && rr.addEventListener("versionchange", (rr => Wr(rr.oldVersion, rr.newVersion, rr)))
```

#### 22. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L269` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L790) · [Before (L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L269)

```diff
-       }("firebase-installations-database", 1, {
+       }("firebase-heartbeat-database", 1, {
```

#### 23. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L273` → after: `L794-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L794-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L794-L798) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L273)

```diff
-       })), TR
+       }).catch((rr => {
+         throw ES.create("idb-open", {
+           originalErrorMessage: rr.message
+         })
+       }))), eS
```

#### 24. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L276-L285` → after: `L801-L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L801-L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L801-L813) · [Before (L276-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L276-L285)

```diff
-       const GR = SR(RR),
-         yR = (await sR()).transaction(FR, "readwrite"),
-         tR = yR.objectStore(FR),
-         uR = await tR.get(GR);
-       return await tR.put(JR, GR), await yR.done, uR && uR.fid === JR.fid || dR(RR, JR.fid), JR
-     }
-     async function RJ(RR) {
-       const JR = SR(RR),
-         GR = (await sR()).transaction(FR, "readwrite");
-       await GR.objectStore(FR).delete(JR), await GR.done
+       try {
+         const Qr = (await KS()).transaction(nS, "readwrite"),
+           Zr = Qr.objectStore(nS);
+         await Zr.put(Sr, BS(rr)), await Qr.done
+       } catch (Qr) {
+         if (Qr instanceof ar.k) vr.warn(Qr.message);
+         else {
+           const rr = ES.create("idb-set", {
+             originalErrorMessage: null === Qr || void 0 === Qr ? void 0 : Qr.message
+           });
+           vr.warn(rr.message)
+         }
+       }
```

#### 25. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L287-L293` → after: `L815-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L815-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L815-L817) · [Before (L287-L293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L287-L293)

```diff
-     async function JJ(RR, JR) {
-       const GR = SR(RR),
-         yR = (await sR()).transaction(FR, "readwrite"),
-         tR = yR.objectStore(FR),
-         uR = await tR.get(GR),
-         ZR = JR(uR);
-       return void 0 === ZR ? await tR.delete(GR) : await tR.put(ZR, GR), await yR.done, !ZR || uR && uR.fid === ZR.fid || dR(RR, ZR.fid), ZR
+ 
+     function BS(rr) {
+       return `${rr.name}!${rr.options.appId}`
```

#### 26. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L295-L310` → after: `L819-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L819-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L819-L851) · [Before (L295-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L295-L310)

```diff
-     async function GJ(RR) {
-       let JR;
-       const GR = await JJ(RR.appConfig, (GR => {
-         const yR = function(RR) {
-             const JR = RR || {
-               fid: zR(),
-               registrationStatus: 0
-             };
-             return uJ(JR)
-           }(GR),
-           tR = function(RR, JR) {
-             if (0 === JR.registrationStatus) {
-               if (!navigator.onLine) {
-                 return {
-                   installationEntry: JR,
-                   registrationPromise: Promise.reject(OR.create("app-offline"))
+     class TS {
+       constructor(rr) {
+         this.container = rr, this._heartbeatsCache = null;
+         const Sr = this.container.getProvider("app").getImmediate();
+         this.vt = new OS(Sr), this._heartbeatsCachePromise = this.vt.read().then((rr => (this._heartbeatsCache = rr, rr)))
+       }
+       async triggerHeartbeat() {
+         const rr = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
+           Sr = vS();
+         if (null === this._heartbeatsCache && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== Sr && !this._heartbeatsCache.heartbeats.some((rr => rr.date === Sr))) return this._heartbeatsCache.heartbeats.push({
+           date: Sr,
+           agent: rr
+         }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((rr => {
+           const Sr = new Date(rr.date).valueOf();
+           return Date.now() - Sr <= 2592e6
+         })), this.vt.overwrite(this._heartbeatsCache)
+ ... (17 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L313-L370` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L860) · [Before (L313-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L313-L370)

```diff
-               const GR = {
-                   fid: JR.fid,
-                   registrationStatus: 1,
-                   registrationTime: Date.now()
-                 },
-                 yR = async function(RR, JR) {
-                   try {
-                     const GR = await async function(RR, JR) {
-                       let {
-                         appConfig: GR,
-                         heartbeatServiceProvider: yR
-                       } = RR, {
-                         fid: tR
-                       } = JR;
-                       const uR = NR(GR),
-                         ZR = oR(GR),
- ... (42 more removed lines; see GitHub link above)
+               Zr = Zr.slice(1)
```

#### 28. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L372-L376` → after: `L862-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L862-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L862-L864) · [Before (L372-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L372-L376)

```diff
-             return 1 === JR.registrationStatus ? {
-               installationEntry: JR,
-               registrationPromise: yJ(RR)
-             } : {
-               installationEntry: JR
+             return {
+               heartbeatsToSend: Qr,
+               unsentEntries: Zr
```

#### 29. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L378-L385` → after: `L866-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L866-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L866-L871) · [Before (L378-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L378-L385)

```diff
-           }(RR, yR);
-         return JR = tR.registrationPromise, tR.installationEntry
-       }));
-       return "" === GR.fid ? {
-         installationEntry: await JR
-       } : {
-         installationEntry: GR,
-         registrationPromise: JR
+           }(this._heartbeatsCache.heartbeats),
+           Zr = (0, ar.v)(JSON.stringify({
+             version: 2,
+             heartbeats: Sr
+           }));
+         return this._heartbeatsCache.lastSentHeartbeatDate = rr, Qr.length > 0 ? (this._heartbeatsCache.heartbeats = Qr, await this.vt.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this.vt.overwrite(this._heartbeatsCache)), Zr
```

#### 30. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L408-L413` → after: `L875-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L875-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L875-L876) · [Before (L408-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L408-L413)

```diff
-     function uJ(RR) {
-       return 1 === (JR = RR).registrationStatus && JR.registrationTime + lR < Date.now() ? {
-         fid: RR.fid,
-         registrationStatus: 0
-       } : RR;
-       var JR
+     function vS() {
+       return (new Date).toISOString().substring(0, 10)
```

#### 31. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L415-L432` → after: `L878-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L878-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L878-L880) · [Before (L415-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L415-L432)

```diff
-     async function ZJ(RR, JR) {
-       let {
-         appConfig: GR,
-         heartbeatServiceProvider: yR
-       } = RR;
-       const tR = function(RR, JR) {
-           let {
-             fid: GR
-           } = JR;
-           return `${NR(RR)}/${GR}/authTokens:generate`
-         }(GR, JR),
-         uR = cR(GR, JR),
-         ZR = yR.getImmediate({
-           optional: !0
-         });
-       if (ZR) {
- ... (2 more removed lines; see GitHub link above)
+     class OS {
+       constructor(rr) {
+         this.app = rr, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
```

#### 32. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L434-L447` → after: `L882-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L882-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L882-L883) · [Before (L434-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L434-L447)

```diff
-       const qR = {
-           installation: {
-             sdkVersion: pR,
-             appId: GR.appId
-           }
-         },
-         iR = {
-           method: "POST",
-           headers: uR,
-           body: JSON.stringify(qR)
-         },
-         fR = await PR((() => fetch(tR, iR)));
-       if (fR.ok) {
-         return DR(await fR.json())
+       async runIndexedDBEnvironmentCheck() {
+         return !!(0, ar.cb)() && (0, ar.lb)().then((() => !0)).catch((() => !1))
```

#### 33. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L449-L479` → after: `L885-L887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L885-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L885-L887) · [Before (L449-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L449-L479)

```diff
-       throw await HR("Generate Auth Token", fR)
-     }
-     async function qJ(RR) {
-       let JR, GR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const yR = await JJ(RR.appConfig, (yR => {
-         if (!fJ(yR)) throw OR.create("not-registered");
-         const tR = yR.authToken;
-         if (!GR && function(RR) {
-             return 2 === RR.requestStatus && ! function(RR) {
-               const JR = Date.now();
-               return JR < RR.creationTime || RR.creationTime + RR.expiresIn < JR + bR
-             }(RR)
-           }(tR)) return yR;
-         if (1 === tR.requestStatus) return JR = async function(RR, JR) {
-           let GR = await iJ(RR.appConfig);
-           for (; 1 === GR.authToken.requestStatus;) await IR(100), GR = await iJ(RR.appConfig);
- ... (15 more removed lines; see GitHub link above)
+       async read() {
+         if (await this._canUseIndexedDBPromise) {
+           return await async function(rr) {
```

#### 34. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L481-L485` → after: `L889-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L889-L890) · [Before (L481-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L481-L485)

```diff
-               const GR = await ZJ(RR, JR),
-                 yR = Object.assign(Object.assign({}, JR), {
-                   authToken: GR
-                 });
-               return await hR(RR.appConfig, yR), GR
+               const Sr = await KS();
+               return await Sr.transaction(nS).objectStore(nS).get(BS(rr))
```

#### 35. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L487-L491` → after: `L892-L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L892-L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L892-L895) · [Before (L487-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L487-L491)

```diff
-               if (!xR(GR) || 401 !== GR.customData.serverCode && 404 !== GR.customData.serverCode) {
-                 const GR = Object.assign(Object.assign({}, JR), {
-                   authToken: {
-                     requestStatus: 0
-                   }
+               if (Sr instanceof ar.k) vr.warn(Sr.message);
+               else {
+                 const rr = ES.create("idb-get", {
+                   originalErrorMessage: null === Sr || void 0 === Sr ? void 0 : Sr.message
```

#### 36. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L493-L495` → after: `L897-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L897-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L897-L898) · [Before (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L493-L495)

```diff
-                 await hR(RR.appConfig, GR)
-               } else await RJ(RR.appConfig);
-               throw GR
+                 vr.warn(rr.message)
+               }
```

#### 37. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L497-L509` → after: `L900-L901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L900-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L900-L901) · [Before (L497-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L497-L509)

```diff
-           }(RR, GR), GR
-         }
-       }));
-       return JR ? await JR : yR.authToken
-     }
- 
-     function iJ(RR) {
-       return JJ(RR, (RR => {
-         if (!fJ(RR)) throw OR.create("not-registered");
-         const JR = RR.authToken;
-         return 1 === (GR = JR).requestStatus && GR.requestTime + lR < Date.now() ? Object.assign(Object.assign({}, RR), {
-           authToken: {
-             requestStatus: 0
+           }(this.app) || {
+             heartbeats: []
```

#### 38. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L563-L571` → after: `L905-L925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L905-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L905-L925) · [Before (L563-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L563-L571)

```diff
-           getId: () => async function(RR) {
-             const JR = RR,
-               {
-                 installationEntry: GR,
-                 registrationPromise: yR
-               } = await GJ(JR);
-             return yR ? yR.catch(console.error) : qJ(JR).catch(console.error), GR.fid
-           }(GR),
-           getToken: RR => VJ(GR, RR)
+           heartbeats: []
+         }
+       }
+       async overwrite(rr) {
+         var Sr;
+         if (await this._canUseIndexedDBPromise) {
+           const Qr = await this.read();
+           return yS(this.app, {
+             lastSentHeartbeatDate: null !== (Sr = rr.lastSentHeartbeatDate) && void 0 !== Sr ? Sr : Qr.lastSentHeartbeatDate,
+             heartbeats: rr.heartbeats
+           })
+         }
+       }
+       async add(rr) {
+         var Sr;
+         if (await this._canUseIndexedDBPromise) {
+ ... (5 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L605-L617` → after: `L931-L934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L931-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L931-L934) · [Before (L605-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L605-L617)

```diff
-       return Promise.all(RR.map((RR => RR.catch((RR => RR)))))
-     }
- 
-     function XJ(RR, JR) {
-       const GR = function(RR, JR) {
-           let GR;
-           return window.trustedTypes && (GR = window.trustedTypes.createPolicy(RR, JR)), GR
-         }("firebase-js-sdk-policy", {
-           createScriptURL: AJ
-         }),
-         yR = document.createElement("script"),
-         tR = `${LJ}?l=${RR}&id=${JR}`;
-       yR.src = GR ? null === GR || void 0 === GR ? void 0 : GR.createScriptURL(tR) : tR, yR.async = !0, document.head.appendChild(yR)
+       return (0, ar.v)(JSON.stringify({
+         version: 2,
+         heartbeats: rr
+       })).length
```

#### 40. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L619-L675` → after: `L936-L947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L936-L947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L936-L947) · [Before (L619-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L619-L675)

```diff
- 
-     function MJ(RR, JR, GR, yR) {
-       return async function(tR) {
-         try {
-           for (var uR = arguments.length, ZR = new Array(uR > 1 ? uR - 1 : 0), qR = 1; qR < uR; qR++) ZR[qR - 1] = arguments[qR];
-           if ("event" === tR) {
-             const [yR, tR] = ZR;
-             await async function(RR, JR, GR, yR, tR) {
-               try {
-                 let uR = [];
-                 if (tR && tR.send_to) {
-                   let RR = tR.send_to;
-                   Array.isArray(RR) || (RR = [RR]);
-                   const yR = await CJ(GR);
-                   for (const GR of RR) {
-                     const RR = yR.find((RR => RR.measurementId === GR)),
- ... (41 more removed lines; see GitHub link above)
+     var lS;
+     lS = "", WS(new Zr.f("platform-logger", (rr => new yr(rr)), "PRIVATE")), WS(new Zr.f("heartbeat", (rr => new TS(rr)), "PRIVATE")), hS(Br, Tr, lS), hS(Br, Tr, "esm2017"), hS("fire-js", "")
+   },
+   42359: (rr, Sr, Qr) => {
+     Qr.d(Sr, {
+       d: () => Ir,
+       f: () => Wr
+     });
+     var Zr = Qr(42366);
+     class Wr {
+       constructor(rr, Sr, Qr) {
+         this.name = rr, this.instanceFactory = Sr, this.type = Qr, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
```

#### 41. `bundles/bloxd.io/chunks/js/304.js` (Changed code · before: `L677-L682` → after: `L949-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedcR949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c...build/bloxd.io/fl4vv.bd3c59ce#diff-ebe4583ac03a40be38982c3673e44b871b0a7725e523dbe4384a3dac1b46bedc) · [After (L949-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/fl4vv.bd3c59ce/bundles/bloxd.io/chunks/js/304.js#L949-L950) · [Before (L677-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/71429b88c4f0c5c47d78a964dec0f8ebdf4ffb6c/bundles/bloxd.io/chunks/js/304.js#L677-L682)

```diff
-     }
-     const BJ = new class {
-       constructor() {
-         let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
-           JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
-         this.throttleMetadata = RR, this.intervalMillis = JR
+       setInstantiationMode(rr) {
+         return this.instantiationMode = rr, this
```
