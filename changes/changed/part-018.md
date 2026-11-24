# Changed — Bundle Modifications Report (Part 018 / 065)

- **Updated at**: `2026-11-25T01:10 JST`
- **Part**: `18 / 65` (**333** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 017](part-017.md) · [Part 019 →](part-019.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/261.js` (tz47m9.2cb7e113 → sn3sfj.2522680a · continued)

- **File**: `bundles/bloxd.io/chunks/js/261.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9)

#### 47. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L987-L992` → after: `L530-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L530-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L530-L551) · [Before (L987-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L987-L992)

```diff
-       static AddSamplers(DD) {}
-       bindForSubMesh(DD, zD, wD, pD, sD) {
-         if (zD.prePassRenderer && zD.prePassRenderer.enabled && zD.prePassRenderer.currentRTisSceneRT && (-1 !== zD.prePassRenderer.getIndex(2) || -1 !== zD.prePassRenderer.getIndex(11))) {
-           this.previousWorldMatrices[wD.uniqueId] || (this.previousWorldMatrices[wD.uniqueId] = pD.clone()), this.previousViewProjection || (this.previousViewProjection = zD.getTransformMatrix().clone(), this.currentViewProjection = zD.getTransformMatrix().clone());
-           const sD = zD.iI();
-           this.currentViewProjection.updateFlag !== zD.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = sD.frameId, this.previousViewProjection.pC(this.currentViewProjection), this.currentViewProjection.pC(zD.getTransformMatrix())) : this._lastUpdateFrameId !== sD.fra … [truncated]
+       getContext() {
+         return this._context
+       }
+       clear(pp) {
+         const ip = this.getSize();
+         pp && (this._context.fillStyle = pp), this._context.clearRect(0, 0, ip.width, ip.height)
+       }
+       update(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === pp || pp, ip, this._format || void 0, void 0, cp)
+       }
+       drawText(pp, ip, cp, Op, op, Ip, Sp) {
+         let xp = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
+         const Lp = this.getSize();
+         if (Ip && (this._context.fillStyle = Ip, this._context.fillRect(0, 0, Lp.width, Lp.height)), this._context.font = Op, null === ip || void 0 === ip) {
+ ... (6 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L997-L1002` → after: `L579-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L579-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L579-L604) · [Before (L997-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L997-L1002)

```diff
-   40318: (DD, zD, wD) => {
-     function pD(DD) {
-       return class extends DD {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
-         }
+   41367: (pp, ip, cp) => {
+     cp.d(ip, {
+       c: () => op
+     });
+     var Op = cp(40654);
+     class op extends Op.d {
+       get depth() {
+         return this._depth
+       }
+       constructor(pp, ip, cp, op, Ip, Sp) {
+         let xp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
+           Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+           Yp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Op.d.TRILINEAR_SAMPLINGMODE,
+           Dp = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
+           Ap = arguments.length > 10 ? arguments[10] : void 0,
+           Pp = arguments.length > 11 ? arguments[11] : void 0;
+ ... (10 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1009` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L608) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L1009)

```diff
-   40192: (DD, zD, wD) => {
+   41359: (pp, ip, cp) => {
```

#### 50. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1011` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L610) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L1011)

```diff
-       StandardMaterial: () => pD.e
+       c: () => Op.b
```

#### 51. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1013-L1014` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L612-L613) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L1013-L1014)

```diff
-     var pD = wD(40199);
-     (0, pD.d)()
+     var Op = cp(40538);
+     (0, Op.e)()
```

#### 52. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1016` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L615) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L1016)

```diff
-   40199: (DD, zD, wD) => {
+   40289: (pp, ip, cp) => {
```

#### 53. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L1018-L2695` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L617) · [Before (L1018-L2695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L1018-L2695)

```diff
-       d: () => lD,
-       e: () => SD
-     });
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(40043),
-       rD = wD(40022),
-       LD = wD(37273),
-       cD = wD(40066),
-       gD = wD(40208),
-       RD = wD(40211),
-       AD = wD(40046),
-       UD = wD(40220),
-       fD = wD(40217),
-       ID = wD(40270),
-       BD = wD(40266),
- ... (1662 more removed lines; see GitHub link above)
+       c: () => Op.f
```

#### 54. `bundles/bloxd.io/chunks/js/261.js` (Changed code · before: `L2697-L2730` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-701aecaa205282a5219a7b80a710c525dc41535680624cceeee508bbb1159da9) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/261.js#L619-L620) · [Before (L2697-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/261.js#L2697-L2730)

```diff
-     class pD {
-       constructor(DD, zD) {
-         this._webGL = {
-           load: DD,
-           loaded: !1,
-           loadPromise: null
-         }, this._webGPU = {
-           load: zD,
-           loaded: !1,
-           loadPromise: null
-         }
-       }
-       getLoadCallback(DD) {
-         const zD = 1 === DD ? this._webGPU : this._webGL;
-         return zD.loaded ? void 0 : async () => {
-           await this._loadAsync(zD)
- ... (18 more removed lines; see GitHub link above)
+     var Op = cp(40296);
+     (0, Op.c)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/262.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/262.js` (126 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e)

#### 1. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L4-L144` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L4) · [Before (L4-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L4-L144)

```diff
-   40231: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => pD
-     });
-     class pD {
-       constructor(DD, zD, wD) {
-         this.bu = DD, this.bv = zD, this.distance = wD, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
-   },
-   40239: (DD, zD, wD) => {
-     wD.d(zD, {
-       b: () => rD
-     });
-     var pD = wD(37094),
-       sD = wD(37079),
- ... (125 more removed lines; see GitHub link above)
+   40405: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L148-L405` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L8-L14) · [Before (L148-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L148-L405)

```diff
-     var pD = wD(37094),
-       sD = wD(37079),
-       KD = wD(40239);
-     class rD {
-       constructor(DD, zD, wD) {
-         this.center = sD.s.Zero(), this.centerWorld = sD.s.Zero(), this.minimum = sD.s.Zero(), this.maximum = sD.s.Zero(), this.reConstruct(DD, zD, wD)
-       }
-       reConstruct(DD, zD, wD) {
-         this.minimum.pC(DD), this.maximum.pC(zD);
-         const pD = sD.s.Distance(DD, zD);
-         zD.addToRef(DD, this.center).scaleInPlace(.5), this.radius = .5 * pD, this._update(wD || sD.e.IdentityReadOnly)
-       }
-       scale(DD) {
-         const zD = rD._TmpVector3,
-           wD = this.maximum.subtractToRef(this.minimum, zD[0]),
-           pD = wD.length();
- ... (242 more removed lines; see GitHub link above)
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(40409),
+       xp = cp(40435),
+       Lp = cp(40380),
+       Yp = cp(40304);
```

#### 3. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L408-L664` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L17) · [Before (L408-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L408-L664)

```diff
-       let zD, wD, KD, rD, LD, cD, gD, RD, AD, UD, ID, BD, GD = [];
-       return DD = class {
-         constructor() {
-           this._func = (0, pD.m)(this, GD), this.reset()
-         }
-         reset() {
-           this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = 519, this.opStencilFail = 7680, this.opDepthFail = 7680, this.opStencilDepthPass = 7681, this.backFunc = 519, this.backOpStencilFail = 7680, this.backOpDepthFail = 7680, this.backOpSt … [truncated]
-         }
-         get func() {
-           return this._func
-         }
-         set func(DD) {
-           this._func = DD
-         }
-         get backFunc() {
-           return this._backFunc
- ... (241 more removed lines; see GitHub link above)
+       let ip, cp, Sp, xp, Dp, Ap, Pp, Wp, yp, Up, wp, vp = [],
```

#### 4. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L687-L995` → after: `L40-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L40-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L40-L55) · [Before (L687-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L687-L995)

```diff
-         get useVertexPulling() {
-           return this._useVertexPulling
-         }
-         set useVertexPulling(zD) {
-           this._useVertexPulling !== zD && (this._useVertexPulling = zD, this.vzD(DD.MiscDirtyFlag))
-         }
-         get _supportGlowLayer() {
-           return !1
-         }
-         set _glowModeEnabled(DD) {}
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

#### 5. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L997-L1003` → after: `L57-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L57-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L57-L75) · [Before (L997-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L997-L1003)

```diff
-         }
-         getBindedMeshes() {
-           if (this.meshMap) {
-             const DD = [];
-             for (const zD in this.meshMap) {
-               const wD = this.meshMap[zD];
-               wD && DD.push(wD)
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

#### 6. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1129-L1152` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L79-L80) · [Before (L1129-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1129-L1152)

```diff
-         _disposeMeshResources(DD) {
-           if (!DD) return;
-           const zD = DD.geometry,
-             wD = DD._internalAbstractMeshDataInfo._materialForRenderPass;
-           if (this._storeEffectOnSubMeshes) {
-             if (DD.QE && wD)
-               for (const pD of DD.QE) {
-                 const DD = pD._drawWrappers;
-                 for (let sD = 0; sD < DD.length; sD++) {
-                   const KD = DD[sD]?.effect;
-                   if (!KD) continue;
-                   wD[sD] === this && (zD?._releaseVertexArrayObject(KD), pD._removeDrawWrapper(sD, !0, !0))
-                 }
-               }
-           } else zD?._releaseVertexArrayObject(this._drawWrapper.effect);
-           DD.material !== this || DD.nsD || (DD.material = null)
- ... (8 more removed lines; see GitHub link above)
+         getClassName() {
+           return "FreeCameraKeyboardMoveInput"
```

#### 7. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1154-L1155` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L82-L83) · [Before (L1154-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1154-L1155)

```diff
-         static ParseAlphaMode(DD, zD) {
-           void 0 !== DD._alphaMode ? zD._alphaMode = Array.isArray(DD._alphaMode) ? [...DD._alphaMode] : [DD._alphaMode] : void 0 !== DD.alphaMode ? zD._alphaMode = Array.isArray(DD.alphaMode) ? [...DD.alphaMode] : [DD.alphaMode] : zD._alphaMode = [2]
+         _onLostFocus() {
+           this._keys.length = 0
```

#### 8. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1157-L1162` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L85-L86) · [Before (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1157-L1162)

```diff
-         static Parse(zD, wD, pD) {
-           if (zD.customType) {
-             if ("BABYLON.PBRMaterial" === zD.customType && zD.overloadedAlbedo && (zD.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return RD.d.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
-           } else zD.customType = "BABYLON.StandardMaterial";
-           const sD = KD.h.Instantiate(zD.customType).Parse(zD, wD, pD);
-           return sD._loadedUniqueId = zD.uniqueId, DD.ParseAlphaMode(zD, sD), sD
+         getSimpleName() {
+           return "keyboard"
```

#### 9. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1164-L1174` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L88-L90) · [Before (L1164-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1164-L1174)

```diff
-         static _ParsePlugins(DD, zD, wD, pD) {
-           if (DD.plugins)
-             for (const sD in DD.plugins) {
-               const rD = DD.plugins[sD];
-               let LD = zD.pluginManager?.getPlugin(rD.name);
-               if (!LD) {
-                 const DD = KD.h.Instantiate("BABYLON." + sD);
-                 DD && (LD = new DD(zD))
-               }
-               LD?.parse(rD, wD, pD)
-             }
+         _getLocalRotation() {
+           const pp = this.camera._calculateHandednessMultiplier();
+           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * pp
```

#### 10. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1178-L1218` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L94) · [Before (L1178-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1178-L1218)

```diff
-         zD = [(0, sD.C)()], wD = [(0, sD.C)()], hD = [(0, sD.C)()], nD = [(0, sD.C)()], MD = [(0, sD.C)()], OD = [(0, sD.C)()], JD = [(0, sD.C)()], ED = [(0, sD.C)("alpha")], QD = [(0, sD.C)("backFaceCulling")], XD = [(0, sD.C)("textureRepetitionMode")], VD = [(0, sD.C)("textureR … [truncated]
-           kind: "getter",
-           name: "pointsCloud",
-           static: !1,
-           private: !1,
-           access: {
-             has: DD => "pointsCloud" in DD,
-             get: DD => DD.pointsCloud
-           },
-           metadata: KD
-         }, null, aD), (0, pD.i)(DD, null, kD, {
-           kind: "getter",
-           name: "fillMode",
-           static: !1,
-           private: !1,
-           access: {
- ... (25 more removed lines; see GitHub link above)
+         ip = [(0, op.K)()], cp = [(0, op.K)()], Sp = [(0, op.K)()], xp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], wp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
```

#### 11. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1220` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L96) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1220)

```diff
-           name: "id",
+           name: "keysUp",
```

#### 12. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1224-L1225` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L100-L101) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1224-L1225)

```diff
-             has: DD => "id" in DD,
-             get: DD => DD.id,
+             has: pp => "keysUp" in pp,
+             get: pp => pp.keysUp,
```

#### 13. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1227` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L103) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1227)

```diff
-               DD.id = zD
+               pp.keysUp = ip
```

#### 14. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1231` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L107) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1231)

```diff
-         }, uD, vD), (0, pD.i)(null, null, wD, {
+         }, vp, tp), (0, Op.j)(null, null, cp, {
```

#### 15. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1233` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L109) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1233)

```diff
-           name: "uniqueId",
+           name: "keysUpward",
```

#### 16. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1237-L1238` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L113-L114) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1237-L1238)

```diff
-             has: DD => "uniqueId" in DD,
-             get: DD => DD.uniqueId,
+             has: pp => "keysUpward" in pp,
+             get: pp => pp.keysUpward,
```

#### 17. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1240` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L116) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1240)

```diff
-               DD.uniqueId = zD
+               pp.keysUpward = ip
```

#### 18. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1244` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L120) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1244)

```diff
-         }, tD, FD), (0, pD.i)(null, null, hD, {
+         }, Hp, dp), (0, Op.j)(null, null, Sp, {
```

#### 19. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1246` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L122) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1246)

```diff
-           name: "name",
+           name: "keysDown",
```

#### 20. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1250-L1251` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L126-L127) · [Before (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1250-L1251)

```diff
-             has: DD => "name" in DD,
-             get: DD => DD.name,
+             has: pp => "keysDown" in pp,
+             get: pp => pp.keysDown,
```

#### 21. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1253` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L129) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1253)

```diff
-               DD.name = zD
+               pp.keysDown = ip
```

#### 22. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1257` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L133) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1257)

```diff
-         }, YD, HD), (0, pD.i)(null, null, nD, {
+         }, ep, jp), (0, Op.j)(null, null, xp, {
```

#### 23. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1259` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L135) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1259)

```diff
-           name: "metadata",
+           name: "keysDownward",
```

#### 24. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1263-L1264` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L139-L140) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1263-L1264)

```diff
-             has: DD => "metadata" in DD,
-             get: DD => DD.metadata,
+             has: pp => "keysDownward" in pp,
+             get: pp => pp.keysDownward,
```

#### 25. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1266` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L142) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1266)

```diff
-               DD.metadata = zD
+               pp.keysDownward = ip
```

#### 26. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1270` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L146) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1270)

```diff
-         }, qD, Dz), (0, pD.i)(null, null, MD, {
+         }, kp, mp), (0, Op.j)(null, null, Dp, {
```

#### 27. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1272` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L148) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1272)

```diff
-           name: "checkReadyOnEveryCall",
+           name: "keysLeft",
```

#### 28. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1276-L1277` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L152-L153) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1276-L1277)

```diff
-             has: DD => "checkReadyOnEveryCall" in DD,
-             get: DD => DD.checkReadyOnEveryCall,
+             has: pp => "keysLeft" in pp,
+             get: pp => pp.keysLeft,
```

#### 29. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1279` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L155) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1279)

```diff
-               DD.checkReadyOnEveryCall = zD
+               pp.keysLeft = ip
```

#### 30. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1283` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L159) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1283)

```diff
-         }, zz, wz), (0, pD.i)(null, null, OD, {
+         }, Rp, qp), (0, Op.j)(null, null, Ap, {
```

#### 31. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1285` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L161) · [Before (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1285)

```diff
-           name: "checkReadyOnlyOnce",
+           name: "keysRight",
```

#### 32. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1289-L1290` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L165-L166) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1289-L1290)

```diff
-             has: DD => "checkReadyOnlyOnce" in DD,
-             get: DD => DD.checkReadyOnlyOnce,
+             has: pp => "keysRight" in pp,
+             get: pp => pp.keysRight,
```

#### 33. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1292` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L168) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1292)

```diff
-               DD.checkReadyOnlyOnce = zD
+               pp.keysRight = ip
```

#### 34. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1296` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L172) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1296)

```diff
-         }, pz, sz), (0, pD.i)(null, null, JD, {
+         }, Mp, Cp), (0, Op.j)(null, null, Pp, {
```

#### 35. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1298` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L174) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1298)

```diff
-           name: "state",
+           name: "rotationSpeed",
```

#### 36. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1302-L1303` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L178-L179) · [Before (L1302-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1302-L1303)

```diff
-             has: DD => "state" in DD,
-             get: DD => DD.state,
+             has: pp => "rotationSpeed" in pp,
+             get: pp => pp.rotationSpeed,
```

#### 37. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1305` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L181) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1305)

```diff
-               DD.state = zD
+               pp.rotationSpeed = ip
```

#### 38. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1309` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L185) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1309)

```diff
-         }, Kz, rz), (0, pD.i)(null, null, ED, {
+         }, Ep, Xp), (0, Op.j)(null, null, Wp, {
```

#### 39. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1311` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L187) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1311)

```diff
-           name: "_alpha",
+           name: "keysRotateLeft",
```

#### 40. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1315-L1316` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L191-L192) · [Before (L1315-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1315-L1316)

```diff
-             has: DD => "_alpha" in DD,
-             get: DD => DD._alpha,
+             has: pp => "keysRotateLeft" in pp,
+             get: pp => pp.keysRotateLeft,
```

#### 41. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1318` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L194) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1318)

```diff
-               DD._alpha = zD
+               pp.keysRotateLeft = ip
```

#### 42. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1322` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L198) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1322)

```diff
-         }, Lz, cz), (0, pD.i)(null, null, QD, {
+         }, lp, Qp), (0, Op.j)(null, null, yp, {
```

#### 43. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1324` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L200) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1324)

```diff
-           name: "_backFaceCulling",
+           name: "keysRotateRight",
```

#### 44. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1328-L1329` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L204-L205) · [Before (L1328-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1328-L1329)

```diff
-             has: DD => "_backFaceCulling" in DD,
-             get: DD => DD._backFaceCulling,
+             has: pp => "keysRotateRight" in pp,
+             get: pp => pp.keysRotateRight,
```

#### 45. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1331` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L207) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1331)

```diff
-               DD._backFaceCulling = zD
+               pp.keysRotateRight = ip
```

#### 46. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1335` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L211) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1335)

```diff
-         }, gz, Rz), (0, pD.i)(null, null, XD, {
+         }, Jp, Bp), (0, Op.j)(null, null, Up, {
```

#### 47. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1337` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L213) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1337)

```diff
-           name: "_textureRepetitionMode",
+           name: "keysRotateUp",
```

#### 48. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1341-L1342` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L217-L218) · [Before (L1341-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1341-L1342)

```diff
-             has: DD => "_textureRepetitionMode" in DD,
-             get: DD => DD._textureRepetitionMode,
+             has: pp => "keysRotateUp" in pp,
+             get: pp => pp.keysRotateUp,
```

#### 49. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1344` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L220) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1344)

```diff
-               DD._textureRepetitionMode = zD
+               pp.keysRotateUp = ip
```

#### 50. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1348` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L224) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1348)

```diff
-         }, Az, Uz), (0, pD.i)(null, null, VD, {
+         }, Np, Tp), (0, Op.j)(null, null, wp, {
```

#### 51. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1350` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L226) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1350)

```diff
-           name: "textureRepetitionHexTilingParams",
+           name: "keysRotateDown",
```

#### 52. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1354-L1355` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L230-L231) · [Before (L1354-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1354-L1355)

```diff
-             has: DD => "textureRepetitionHexTilingParams" in DD,
-             get: DD => DD.textureRepetitionHexTilingParams,
+             has: pp => "keysRotateDown" in pp,
+             get: pp => pp.keysRotateDown,
```

#### 53. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1357` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L233) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1357)

```diff
-               DD.textureRepetitionHexTilingParams = zD
+               pp.keysRotateDown = ip
```

#### 54. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1361` → after: `L237-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L237-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L237-L333) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1361)

```diff
-         }, fz, Iz), (0, pD.i)(null, null, PD, {
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

#### 55. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1363` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L335) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1363)

```diff
-           name: "_cullBackFaces",
+           name: "buttons",
```

#### 56. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1367-L1368` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L339-L340) · [Before (L1367-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1367-L1368)

```diff
-             has: DD => "_cullBackFaces" in DD,
-             get: DD => DD._cullBackFaces,
+             has: pp => "buttons" in pp,
+             get: pp => pp.buttons,
```

#### 57. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1370` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L342) · [Before (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1370)

```diff
-               DD._cullBackFaces = zD
+               pp.buttons = ip
```

#### 58. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1374` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L346) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1374)

```diff
-         }, Bz, Gz), (0, pD.i)(null, null, CD, {
+         }, Ip, Sp), (0, Op.j)(null, null, cp, {
```

#### 59. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1376` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L348) · [Before (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1376)

```diff
-           name: "sideOrientation",
+           name: "angularSensibility",
```

#### 60. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1380-L1381` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L352-L353) · [Before (L1380-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1380-L1381)

```diff
-             has: DD => "sideOrientation" in DD,
-             get: DD => DD.sideOrientation,
+             has: pp => "angularSensibility" in pp,
+             get: pp => pp.angularSensibility,
```

#### 61. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1383` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L355) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1383)

```diff
-               DD.sideOrientation = zD
+               pp.angularSensibility = ip
```

#### 62. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1387` → after: `L359-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L359-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L359-L407) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1387)

```diff
-         }, hz, nz), (0, pD.i)(null, null, xD, {
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

#### 63. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1389` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L409) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1389)

```diff
-           name: "_alphaMode",
+           name: "wheelPrecisionX",
```

#### 64. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1393-L1394` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L413-L414) · [Before (L1393-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1393-L1394)

```diff
-             has: DD => "_alphaMode" in DD,
-             get: DD => DD._alphaMode,
+             has: pp => "wheelPrecisionX" in pp,
+             get: pp => pp.wheelPrecisionX,
```

#### 65. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1396` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L416) · [Before (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1396)

```diff
-               DD._alphaMode = zD
+               pp.wheelPrecisionX = ip
```

#### 66. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1400` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L420) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1400)

```diff
-         }, Mz, Oz), (0, pD.i)(null, null, TD, {
+         }, Sp, xp), (0, Op.j)(null, null, cp, {
```

#### 67. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1402` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L422) · [Before (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1402)

```diff
-           name: "_needDepthPrePass",
+           name: "wheelPrecisionY",
```

#### 68. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1406-L1407` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L426-L427) · [Before (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1406-L1407)

```diff
-             has: DD => "_needDepthPrePass" in DD,
-             get: DD => DD._needDepthPrePass,
+             has: pp => "wheelPrecisionY" in pp,
+             get: pp => pp.wheelPrecisionY,
```

#### 69. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1409` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L429) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1409)

```diff
-               DD._needDepthPrePass = zD
+               pp.wheelPrecisionY = ip
```

#### 70. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1413` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L433) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1413)

```diff
-         }, Jz, Ez), (0, pD.i)(null, null, bD, {
+         }, Lp, Dp), (0, Op.j)(null, null, Ip, {
```

#### 71. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1415` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L435) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1415)

```diff
-           name: "disableDepthWrite",
+           name: "wheelPrecisionZ",
```

#### 72. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1419-L1420` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L439-L440) · [Before (L1419-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1419-L1420)

```diff
-             has: DD => "disableDepthWrite" in DD,
-             get: DD => DD.disableDepthWrite,
+             has: pp => "wheelPrecisionZ" in pp,
+             get: pp => pp.wheelPrecisionZ,
```

#### 73. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1422` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L442) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1422)

```diff
-               DD.disableDepthWrite = zD
+               pp.wheelPrecisionZ = ip
```

#### 74. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1426-L1428` → after: `L446-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L446-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L446-L563) · [Before (L1426-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1426-L1428)

```diff
-         }, Qz, Xz), (0, pD.i)(null, null, jD, {
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

#### 75. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1432-L1433` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L567) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1432-L1433)

```diff
-             has: DD => "disableColorWrite" in DD,
-             get: DD => DD.disableColorWrite,
+             has: pp => "wheelXMoveRelative" in pp,
```

#### 76. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1435` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L569) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1435)

```diff
-               DD.disableColorWrite = zD
+               pp.wheelXMoveRelative = ip
```

#### 77. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1439-L1441` → after: `L573-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L573-L575) · [Before (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1439-L1441)

```diff
-         }, Vz, Pz), (0, pD.i)(null, null, dD, {
-           kind: "field",
-           name: "forceDepthWrite",
+         }, null, yp), (0, Op.j)(pp, null, cp, {
+           kind: "setter",
+           name: "wheelYMoveRelative",
```

#### 78. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1445-L1446` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L579) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1445-L1446)

```diff
-             has: DD => "forceDepthWrite" in DD,
-             get: DD => DD.forceDepthWrite,
+             has: pp => "wheelYMoveRelative" in pp,
```

#### 79. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1448` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L581) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1448)

```diff
-               DD.forceDepthWrite = zD
+               pp.wheelYMoveRelative = ip
```

#### 80. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1452-L1454` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L585-L587) · [Before (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1452-L1454)

```diff
-         }, Cz, xz), (0, pD.i)(null, null, SD, {
-           kind: "field",
-           name: "depthFunction",
+         }, null, yp), (0, Op.j)(pp, null, Sp, {
+           kind: "setter",
+           name: "wheelZMoveRelative",
```

#### 81. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1458-L1459` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L591) · [Before (L1458-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1458-L1459)

```diff
-             has: DD => "depthFunction" in DD,
-             get: DD => DD.depthFunction,
+             has: pp => "wheelZMoveRelative" in pp,
```

#### 82. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1461` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L593) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1461)

```diff
-               DD.depthFunction = zD
+               pp.wheelZMoveRelative = ip
```

#### 83. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1465-L1467` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L597-L599) · [Before (L1465-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1465-L1467)

```diff
-         }, Tz, bz), (0, pD.i)(null, null, iD, {
-           kind: "field",
-           name: "separateCullingPass",
+         }, null, yp), (0, Op.j)(pp, null, xp, {
+           kind: "setter",
+           name: "wheelXRotateRelative",
```

#### 84. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1471-L1472` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L603) · [Before (L1471-L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1471-L1472)

```diff
-             has: DD => "separateCullingPass" in DD,
-             get: DD => DD.separateCullingPass,
+             has: pp => "wheelXRotateRelative" in pp,
```

#### 85. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1474` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L605) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1474)

```diff
-               DD.separateCullingPass = zD
+               pp.wheelXRotateRelative = ip
```

#### 86. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1478-L1480` → after: `L609-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L609-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L609-L611) · [Before (L1478-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1478-L1480)

```diff
-         }, jz, dz), (0, pD.i)(null, null, lD, {
-           kind: "field",
-           name: "_fogEnabled",
+         }, null, yp), (0, Op.j)(pp, null, Lp, {
+           kind: "setter",
+           name: "wheelYRotateRelative",
```

#### 87. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1484-L1485` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L615) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1484-L1485)

```diff
-             has: DD => "_fogEnabled" in DD,
-             get: DD => DD._fogEnabled,
+             has: pp => "wheelYRotateRelative" in pp,
```

#### 88. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1487` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L617) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1487)

```diff
-               DD._fogEnabled = zD
+               pp.wheelYRotateRelative = ip
```

#### 89. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1491-L1493` → after: `L621-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L621-L623) · [Before (L1491-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1491-L1493)

```diff
-         }, Sz, iz), (0, pD.i)(null, null, WD, {
-           kind: "field",
-           name: "pointSize",
+         }, null, yp), (0, Op.j)(pp, null, Yp, {
+           kind: "setter",
+           name: "wheelZRotateRelative",
```

#### 90. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1497-L1498` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L627) · [Before (L1497-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1497-L1498)

```diff
-             has: DD => "pointSize" in DD,
-             get: DD => DD.pointSize,
+             has: pp => "wheelZRotateRelative" in pp,
```

#### 91. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1500` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L629) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1500)

```diff
-               DD.pointSize = zD
+               pp.wheelZRotateRelative = ip
```

#### 92. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1504-L1506` → after: `L633-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L633-L635) · [Before (L1504-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1504-L1506)

```diff
-         }, lz, Wz), (0, pD.i)(null, null, ND, {
-           kind: "field",
-           name: "zOffset",
+         }, null, yp), (0, Op.j)(pp, null, Dp, {
+           kind: "setter",
+           name: "wheelXMoveScene",
```

#### 93. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1510-L1511` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L639) · [Before (L1510-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1510-L1511)

```diff
-             has: DD => "zOffset" in DD,
-             get: DD => DD.zOffset,
+             has: pp => "wheelXMoveScene" in pp,
```

#### 94. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1513` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L641) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1513)

```diff
-               DD.zOffset = zD
+               pp.wheelXMoveScene = ip
```

#### 95. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1517-L1519` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L645-L647) · [Before (L1517-L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1517-L1519)

```diff
-         }, Nz, Zz), (0, pD.i)(null, null, ZD, {
-           kind: "field",
-           name: "zOffsetUnits",
+         }, null, yp), (0, Op.j)(pp, null, Ap, {
+           kind: "setter",
+           name: "wheelYMoveScene",
```

#### 96. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1523-L1524` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L651) · [Before (L1523-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1523-L1524)

```diff
-             has: DD => "zOffsetUnits" in DD,
-             get: DD => DD.zOffsetUnits,
+             has: pp => "wheelYMoveScene" in pp,
```

#### 97. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1526` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L653) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1526)

```diff
-               DD.zOffsetUnits = zD
+               pp.wheelYMoveScene = ip
```

#### 98. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1530-L1532` → after: `L657-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L657-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L657-L659) · [Before (L1530-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1530-L1532)

```diff
-         }, yz, kz), (0, pD.i)(null, null, eD, {
-           kind: "field",
-           name: "_isVertexOutputInvariant",
+         }, null, yp), (0, Op.j)(pp, null, Pp, {
+           kind: "setter",
+           name: "wheelZMoveScene",
```

#### 99. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1536-L1537` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L663) · [Before (L1536-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1536-L1537)

```diff
-             has: DD => "_isVertexOutputInvariant" in DD,
-             get: DD => DD._isVertexOutputInvariant,
+             has: pp => "wheelZMoveScene" in pp,
```

#### 100. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1539` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L665) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1539)

```diff
-               DD._isVertexOutputInvariant = zD
+               pp.wheelZMoveScene = ip
```

#### 101. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1543` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L669) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1543)

```diff
-         }, mz, ez), KD && Object.defineProperty(DD, Symbol.metadata, {
+         }, null, yp), Ip && Object.defineProperty(pp, Symbol.metadata, {
```

#### 102. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1549-L1555` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L675) · [Before (L1549-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1549-L1555)

```diff
-       })(), DD.TriangleFillMode = 0, DD.WireFrameFillMode = 1, DD.PointFillMode = 2, DD.PointListDrawMode = 3, DD.LineListDrawMode = 4, DD.LineLoopDrawMode = 5, DD.LineStripDrawMode = 6, DD.TriangleStripDrawMode = 7, DD.TriangleFanDrawMode = 8, DD.ClockWiseSideOrientation = 0, DD … [truncated]
-         DD._FresnelDirtyCallBack(zD), DD._MiscDirtyCallBack(zD)
-       }, DD._TextureAndMiscDirtyCallBack = zD => {
-         DD._TextureDirtyCallBack(zD), DD._MiscDirtyCallBack(zD)
-       }, DD._DirtyCallbackArray = [], DD._RunDirtyCallBacks = zD => {
-         for (const wD of DD._DirtyCallbackArray) wD(zD)
-       }, DD
+       })(), pp
```

#### 103. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1557-L1871` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L677-L678) · [Before (L1557-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1557-L1871)

```diff
-     Object.getOwnPropertyDescriptor(nD.prototype, "pluginManager") || Object.defineProperty(nD.prototype, "pluginManager", (0, hD.g)("Material", "pluginManager"))
-   },
-   40266: (DD, zD, wD) => {
-     wD.d(zD, {
-       d: () => sD
-     });
-     var pD = wD(39826);
-     class sD {
-       static get DiffuseTextureEnabled() {
-         return this._DiffuseTextureEnabled
-       }
-       static set DiffuseTextureEnabled(DD) {
-         this._DiffuseTextureEnabled !== DD && (this._DiffuseTextureEnabled = DD, pD.c.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseWeightTextureEnabled() {
-         return this._BaseWeightTextureEnabled
- ... (299 more removed lines; see GitHub link above)
+     xp.e.FreeCameraMouseWheelInput = vp;
+     let tp = (() => {
```

#### 104. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L1873-L2092` → after: `L680-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L680-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L680-L713) · [Before (L1873-L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L1873-L2092)

```diff
-       if (zD && DD && (DD.computeBonesUsingShaders && zD._bonesComputationForcedToCPU && (DD.computeBonesUsingShaders = !1), DD.useBones && DD.computeBonesUsingShaders && DD.skeleton)) {
-         const sD = DD.skeleton;
-         if (sD.isUsingTextureForMatrices && zD.getUniformIndex("boneTextureInfo") > -1) {
-           const wD = sD.getTransformMatrixTexture(DD);
-           zD.setTexture("boneSampler", wD), zD.setFloat2("boneTextureInfo", sD._textureWidth, sD._textureHeight)
-         } else {
-           const KD = sD.getTransformMatrices(DD);
-           KD && (zD.setMatrices("mBones", KD), wD && DD.Ul().prePassRenderer && DD.Ul().prePassRenderer.getIndex(2) && (wD.previousBones[DD.uniqueId] || (wD.previousBones[DD.uniqueId] = KD.slice()), zD.setMatrices("mPreviousBones", wD.previousBones[DD.uniqueId]), pD = KD, wD.prev … [truncated]
-         }
-       }
-     }
- 
-     function QD(DD, zD, wD, pD, sD) {
-       let KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-       DD._bindLight(zD, wD, pD, sD, KD)
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

#### 105. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2094` → after: `L715-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L715-L717) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2094)

```diff
-             }
+             }), this._observer = this.camera.Gl()._inputManager._addCameraPointerObserver(this._pointerInput, Pp.d.POINTERDOWN | Pp.d.POINTERUP | Pp.d.POINTERMOVE), this._onLostFocus) {
+             const pp = this.camera.gy().getInputElement();
+             pp && pp.addEventListener("blur", this._onLostFocus)
```

#### 106. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2296-L2325` → after: `L720-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L720-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L720-L726) · [Before (L2296-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2296-L2325)

```diff
-       }
-       return wD
-     }
- 
-     function KD(DD, zD) {
-       zD.forEach(((zD, wD) => {
-         const pD = `vp_${wD}_info`;
-         DD.setFloat4(pD, zD.offset, zD.stride, zD.type, zD.normalized ? 1 : 0)
-       }))
-     }
-   },
-   40246: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => LD,
-       g: () => cD
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

#### 107. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2328-L2333` → after: `L729-L740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L729-L740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L729-L740) · [Before (L2328-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2328-L2333)

```diff
-         static extractMinAndMax(DD, zD, wD, pD, sD, KD) {
-           for (let rD = zD, LD = zD * pD; rD < zD + wD; rD++, LD += pD) {
-             const zD = DD[LD],
-               wD = DD[LD + 1],
-               pD = DD[LD + 2];
-             sD.minimizeInPlaceFromFloats(zD, wD, pD), KD.maximizeInPlaceFromFloats(zD, wD, pD)
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
```

#### 108. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2338-L2345` → after: `L757-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L757-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L757-L760) · [Before (L2338-L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2338-L2345)

```diff
-         zD = [KD.i.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
-         }))], wD = [KD.i.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], (0, pD.i)(DD, null, zD, {
-           kind: "method",
-           name: "extractMinAndMaxIndexed",
-           static: !0,
+         ip = [(0, op.K)()], cp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
+           kind: "field",
+           name: "touchAngularSensibility",
+           static: !1,
```

#### 109. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2348-L2349` → after: `L763-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L763-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L763-L767) · [Before (L2348-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2348-L2349)

```diff
-             has: DD => "extractMinAndMaxIndexed" in DD,
-             get: DD => DD.extractMinAndMaxIndexed
+             has: pp => "touchAngularSensibility" in pp,
+             get: pp => pp.touchAngularSensibility,
+             set: (pp, ip) => {
+               pp.touchAngularSensibility = ip
+             }
```

#### 110. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2352-L2355` → after: `L770-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L770-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L770-L773) · [Before (L2352-L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2352-L2355)

```diff
-         }, null, sD), (0, pD.i)(DD, null, wD, {
-           kind: "method",
-           name: "extractMinAndMax",
-           static: !0,
+         }, Sp, xp), (0, Op.j)(null, null, cp, {
+           kind: "field",
+           name: "touchMoveSensibility",
+           static: !1,
```

#### 111. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2358-L2359` → after: `L776-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L776-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L776-L780) · [Before (L2358-L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2358-L2359)

```diff
-             has: DD => "extractMinAndMax" in DD,
-             get: DD => DD.extractMinAndMax
+             has: pp => "touchMoveSensibility" in pp,
+             get: pp => pp.touchMoveSensibility,
+             set: (pp, ip) => {
+               pp.touchMoveSensibility = ip
+             }
```

#### 112. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2362` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L783) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2362)

```diff
-         }, null, sD), rD && Object.defineProperty(DD, Symbol.metadata, {
+         }, Lp, Dp), Ip && Object.defineProperty(pp, Symbol.metadata, {
```

#### 113. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2367` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L788) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2367)

```diff
-         }), (0, pD.m)(DD, sD)
+         })
```

#### 114. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2370-L2427` → after: `L791-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L791-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L791-L795) · [Before (L2370-L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2370-L2427)

```diff
- 
-     function LD(DD, zD, wD, pD) {
-       let KD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const LD = new sD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         cD = new sD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return rD.extractMinAndMaxIndexed(DD, zD, wD, pD, LD, cD), KD && (LD.x -= LD.x * KD.x + KD.y, LD.y -= LD.y * KD.x + KD.y, LD.z -= LD.z * KD.x + KD.y, cD.x += cD.x * KD.x + KD.y, cD.y += cD.y * KD.x + KD.y, cD.z += cD.z * KD.x + KD.y), {
-         minimum: LD,
-         maximum: cD
-       }
-     }
- 
-     function cD(DD, zD, wD) {
-       let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         KD = arguments.length > 4 ? arguments[4] : void 0;
-       const LD = new sD.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         cD = new sD.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
- ... (42 more removed lines; see GitHub link above)
+     xp.e.FreeCameraTouchInput = tp;
+     var Hp, dp, ep, jp = cp(40096);
+     class kp extends xp.f {
+       constructor(pp) {
+         super(pp), this._mouseInput = null, this._mouseWheelInput = null
```

#### 115. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2429-L2430` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L797-L798) · [Before (L2429-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2429-L2430)

```diff
-       _setMainDrawWrapperOverride(DD) {
-         this._mainDrawWrapperOverride = DD
+       addKeyboard() {
+         return this.add(new Dp), this
```

#### 116. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2432-L2477` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L800) · [Before (L2432-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2432-L2477)

```diff
-       setEffect(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           wD = arguments.length > 2 ? arguments[2] : void 0,
-           pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const sD = this._drawWrapper;
-         sD.setEffect(DD, zD, pD), void 0 !== wD && (sD.materialContext = wD), DD || (sD.defines = null, sD.materialContext = void 0)
-       }
-       resetDrawCache(DD) {
-         let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._drawWrappers) {
-           if (void 0 !== DD) return void this._removeDrawWrapper(DD, !0, zD);
-           for (const DD of this._drawWrappers) DD?.dispose(zD)
-         }
-         this._drawWrappers = []
-       }
-       static AddToMesh(DD, zD, wD, pD, sD, KD, rD) {
- ... (30 more removed lines; see GitHub link above)
+       addMouse() {
```

#### 117. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2479-L2503` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L802) · [Before (L2479-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2479-L2503)

```diff
-         const zD = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
-         if (!zD) return DD && this._mesh.Ul()._hasDefaultMaterial ? this._mesh.Ul().defaultMaterial : null;
-         if (this._isMultiMaterial(zD)) {
-           const DD = zD.getSubMaterial(this.materialIndex);
-           return this._currentMaterial !== DD && (this._currentMaterial = DD, this.resetDrawCache()), DD
-         }
-         return zD
-       }
-       _isMultiMaterial(DD) {
-         return void 0 !== DD.getSubMaterial
-       }
-       refreshBoundingInfo() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
-         if (DD || (DD = this._renderingMesh.getVerticesData(sD.k.PositionKind)), !DD) return this._boundingInfo = this._mesh.FW(), this;
-         const zD = this._renderingMesh.XpD();
- ... (9 more removed lines; see GitHub link above)
+         return this._mouseInput || (this._mouseInput = new Wp(pp), this.add(this._mouseInput)), this
```

#### 118. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2505-L2506` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L804-L805) · [Before (L2505-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2505-L2506)

```diff
-       _checkCollision(DD) {
-         return this.FW()._checkCollision(DD)
+       removeMouse() {
+         return this._mouseInput && this.remove(this._mouseInput), this
```

#### 119. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2508-L2510` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L807-L808) · [Before (L2508-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2508-L2510)

```diff
-       updateBoundingInfo(DD) {
-         let zD = this.FW();
-         return zD || (this.refreshBoundingInfo(), zD = this.FW()), zD && zD.update(DD), this
+       addMouseWheel() {
+         return this._mouseWheelInput || (this._mouseWheelInput = new vp, this.add(this._mouseWheelInput)), this
```

#### 120. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2512-L2514` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L810-L811) · [Before (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2512-L2514)

```diff
-       isInFrustum(DD) {
-         const zD = this.FW();
-         return !!zD && zD.isInFrustum(DD, this._mesh.cullingStrategy)
+       removeMouseWheel() {
+         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
```

#### 121. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2516-L2518` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L813-L814) · [Before (L2516-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2516-L2518)

```diff
-       isCompletelyInFrustum(DD) {
-         const zD = this.FW();
-         return !!zD && zD.isCompletelyInFrustum(DD)
+       addTouch() {
+         return this.add(new tp), this
```

#### 122. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2520-L2521` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L816-L817) · [Before (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2520-L2521)

```diff
-       render(DD) {
-         return this._renderingMesh.render(this, DD, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
+       clear() {
+         super.clear(), this._mouseInput = null
```

#### 123. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2523-L2586` → after: `L819-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L819-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L819-L836) · [Before (L2523-L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2523-L2586)

```diff
-       _getLinesIndexBuffer(DD, zD) {
-         if (!this._linesIndexBuffer) {
-           const wD = 6 * Math.floor(this.indexCount / 3),
-             pD = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(wD) : new Uint16Array(wD);
-           let sD = 0;
-           if (0 === DD.length)
-             for (let DD = this.indexStart; DD < this.indexStart + this.indexCount; DD += 3) pD[sD++] = DD, pD[sD++] = DD + 1, pD[sD++] = DD + 1, pD[sD++] = DD + 2, pD[sD++] = DD + 2, pD[sD++] = DD;
-           else
-             for (let zD = this.indexStart; zD < this.indexStart + this.indexCount; zD += 3) pD[sD++] = DD[zD], pD[sD++] = DD[zD + 1], pD[sD++] = DD[zD + 1], pD[sD++] = DD[zD + 2], pD[sD++] = DD[zD + 2], pD[sD++] = DD[zD];
-           this._linesIndexBuffer = zD.createIndexBuffer(pD), this._linesIndexCount = pD.length
-         }
-         return this._linesIndexBuffer
-       }
-       canIntersects(DD) {
-         const zD = this.FW();
-         return !!zD && DD.intersectsBox(zD.boundingBox)
- ... (48 more removed lines; see GitHub link above)
+     }(Hp = kp.prototype).addDeviceOrientation ?? (Hp.addDeviceOrientation = (0, jp.k)("FreeCameraInputsManager", "addDeviceOrientation")), (dp = kp.prototype).addVirtualJoystick ?? (dp.addVirtualJoystick = (0, jp.k)("FreeCameraInputsManager", "addVirtualJoystick")), (ep = kp.prot … [truncated]
+     var mp = cp(40113),
+       Rp = cp(37368);
+     let qp = (() => {
+         var pp;
+         let ip, cp, xp, Lp, Dp = Sp.f,
+           Ap = [],
+           Pp = [],
+           Wp = [],
+           yp = [],
+           Up = [],
+           wp = [],
+           vp = [],
+           tp = [];
+         return pp = class extends Dp {
+           get angularSensibility() {
+ ... (2 more added lines; see GitHub link above)
```

#### 124. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2588-L2596` → after: `L838-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L838-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L838-L840) · [Before (L2588-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2588-L2596)

```diff
-           const UD = zD[pD],
-             fD = zD[RD],
-             ID = zD[AD];
-           if (!UD || !fD || !ID) continue;
-           if (rD && !rD(UD, fD, ID, DD, pD, RD, AD)) continue;
-           const BD = DD.intersectsTriangle(UD, fD, ID);
-           if (BD) {
-             if (BD.distance < 0) continue;
-             if ((KD || !LD || BD.distance < LD.distance) && (LD = BD, LD.faceId = cD, KD)) break
+           set angularSensibility(pp) {
+             const ip = this.inputs.attached.mouse;
+             ip && (ip.angularSensibility = pp)
```

#### 125. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2598-L2611` → after: `L842-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L842-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L842-L844) · [Before (L2598-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2598-L2611)

```diff
-         }
-         return LD
-       }
-       _intersectUnIndexedTriangles(DD, zD, wD, pD, sD) {
-         let KD = null;
-         for (let rD = this.verticesStart; rD < this.verticesStart + this.verticesCount; rD += 3) {
-           const wD = zD[rD],
-             LD = zD[rD + 1],
-             cD = zD[rD + 2];
-           if (sD && !sD(wD, LD, cD, DD, -1, -1, -1)) continue;
-           const gD = DD.intersectsTriangle(wD, LD, cD);
-           if (gD) {
-             if (gD.distance < 0) continue;
-             if ((pD || !KD || gD.distance < KD.distance) && (KD = gD, KD.faceId = rD / 3, pD)) break
+           get keysUp() {
+             const pp = this.inputs.attached.keyboard;
+             return pp ? pp.keysUp : []
```

#### 126. `bundles/bloxd.io/chunks/js/262.js` (Changed code · before: `L2613-L2648` → after: `L846-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771eR846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-516cc3b8ee8a2db2f71b8f2732e4d1e18ec4b7aa7a0bb883b3742cced0b7771e) · [After (L846-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/262.js#L846-L1033) · [Before (L2613-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/262.js#L2613-L2648)

```diff
-         }
-         return KD
-       }
-       _rebuild() {
-         this._linesIndexBuffer && (this._linesIndexBuffer = null)
-       }
-       clone(DD, zD) {
-         const wD = new RD(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, DD, zD, !1);
-         if (!this.IsGlobal) {
-           const DD = this.FW();
-           if (!DD) return wD;
-           wD._boundingInfo = new rD.b(DD.minimum, DD.maximum)
-         }
-         return wD
-       }
-       dispose() {
- ... (20 more removed lines; see GitHub link above)
+           set keysUp(pp) {
+             const ip = this.inputs.attached.keyboard;
+             ip && (ip.keysUp = pp)
+           }
+           get keysUpward() {
+             const pp = this.inputs.attached.keyboard;
+             return pp ? pp.keysUpward : []
+           }
+           set keysUpward(pp) {
+             const ip = this.inputs.attached.keyboard;
+             ip && (ip.keysUpward = pp)
+           }
+           get keysDown() {
+             const pp = this.inputs.attached.keyboard;
+             return pp ? pp.keysDown : []
+           }
+ ... (172 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/263.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/263.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2)

#### 1. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L4)

```diff
-   41491: (DD, zD, wD) => {
+   40451: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L8-L19` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L8-L16) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L8-L19)

```diff
-     class pD {}
-     pD.AUTOSAMPLERSUFFIX = "Sampler", pD.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", pD.ALPHA_DISABLE = 0, pD.ALPHA_ADD = 1, pD.ALPHA_COMBINE = 2, pD.ALPHA_SUBTRACT = 3, pD.ALPHA_MULTIPLY = 4, pD.ALPHA_MAXIMIZED = 5, pD.ALPHA_ONEONE = 6, pD.ALPHA_PREMULTIPLIED = 7, pD.ALPH … [truncated]
-   },
-   41471: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => cD
-     });
-     var pD = wD(39921),
-       sD = wD(39927),
-       KD = wD(37079),
-       rD = wD(40189),
-       LD = wD(40157);
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37320),
+       Sp = cp(37487),
+       xp = cp(40415),
+       Lp = cp(40332),
+       Yp = cp(37368),
+       Dp = cp(40398),
+       Ap = cp(40233);
```

#### 3. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L21-L22` → after: `L18-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L18-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L18-L39) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L21-L22)

```diff
-       var DD;
-       let zD, wD, cD, gD, RD = rD.c,
+       var pp, ip;
+       let cp, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp = xp.b,
+         Rp = [],
+         qp = [],
+         Mp = [],
+         Cp = [],
+         Ep = [],
+         Xp = [],
+         lp = [],
+         Qp = [],
+         Jp = [],
+         Bp = [],
+         Np = [],
+         Tp = [],
+         fp = [],
+         bp = [],
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L25-L32` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L42-L43) · [Before (L25-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L25-L32)

```diff
-         constructor() {
-           super(...arguments), this._position = (0, pD.m)(this, AD), this._needProjectionMatrixCompute = !0, this._viewMatrix = KD.e.Identity(), this._projectionMatrix = KD.e.Identity()
-         }
-         _setPosition(DD) {
-           this._position = DD
-         }
-         get position() {
-           return this._position
+         get range() {
+           return this._range
```

#### 5. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L34-L35` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L45-L46) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L34-L35)

```diff
-         set position(DD) {
-           this._setPosition(DD)
+         set range(pp) {
+           this._range = pp, this._inverseSquaredRange = 1 / (this.range * this.range)
```

#### 6. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L37-L38` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L48-L49) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L37-L38)

```diff
-         _setDirection(DD) {
-           this._direction = DD
+         get intensityMode() {
+           return this._intensityMode
```

#### 7. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L40-L41` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L51-L52) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L40-L41)

```diff
-         get direction() {
-           return this._direction
+         set intensityMode(pp) {
+           this._intensityMode = pp, this._computePhotometricScale()
```

#### 8. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L43-L44` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L54-L55) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L43-L44)

```diff
-         set direction(DD) {
-           this._setDirection(DD)
+         get radius() {
+           return this._radius
```

#### 9. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L46-L47` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L57-L58) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L46-L47)

```diff
-         get shadowMinZ() {
-           return this._shadowMinZ
+         set radius(pp) {
+           this._radius = pp, this._computePhotometricScale()
```

#### 10. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L49-L50` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L60-L61) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L49-L50)

```diff
-         set shadowMinZ(DD) {
-           this._shadowMinZ = DD, this.forceProjectionMatrixCompute()
+         get renderPriority() {
+           return (0, Op.e)(this, ip, "f")
```

#### 11. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L52-L53` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L63-L64) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L52-L53)

```diff
-         get shadowMaxZ() {
-           return this._shadowMaxZ
+         set renderPriority(pp) {
+           (0, Op.f)(this, ip, pp, "f")
```

#### 12. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L55-L56` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L66-L67) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L55-L56)

```diff
-         set shadowMaxZ(DD) {
-           this._shadowMaxZ = DD, this.forceProjectionMatrixCompute()
+         get shadowEnabled() {
+           return this._shadowEnabled
```

#### 13. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L58-L59` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L69-L70) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L58-L59)

```diff
-         computeTransformedInformation() {
-           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = KD.s.Zero()), KD.s.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+         set shadowEnabled(pp) {
+           this._shadowEnabled !== pp && (this._shadowEnabled = pp, this._markMeshesAsLightDirty())
```

#### 14. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L61-L62` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L72-L73) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L61-L62)

```diff
-         getDepthScale() {
-           return 50
+         get includedOnlyMeshes() {
+           return this._includedOnlyMeshes
```

#### 15. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L64-L65` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L75-L76) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L64-L65)

```diff
-         getShadowDirection(DD) {
-           return this.transformedDirection ? this.transformedDirection : this.direction
+         set includedOnlyMeshes(pp) {
+           this._includedOnlyMeshes = pp, this._hookArrayForIncludedOnly(pp)
```

#### 16. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L67-L77` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L78-L79) · [Before (L67-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L67-L77)

```diff
-         getAbsolutePosition() {
-           return this.transformedPosition ? this.transformedPosition : this.position
-         }
-         setDirectionToTarget(DD) {
-           return this.direction = KD.s.Normalize(DD.subtract(this.position)), this.direction
-         }
-         getRotation() {
-           this.direction.normalize();
-           const DD = KD.s.Cross(this.direction, LD.e.Y),
-             zD = KD.s.Cross(DD, this.direction);
-           return KD.s.RotationFromAxis(DD, zD, this.direction)
+         get excludedMeshes() {
+           return this._excludedMeshes
```

#### 17. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L79-L80` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L81-L82) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L79-L80)

```diff
-         needCube() {
-           return !1
+         set excludedMeshes(pp) {
+           this._excludedMeshes = pp, this._hookArrayForExcluded(pp)
```

#### 18. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L82-L83` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L84-L85) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L82-L83)

```diff
-         needProjectionMatrixCompute() {
-           return this._needProjectionMatrixCompute
+         get excludeWithLayerMask() {
+           return this._excludeWithLayerMask
```

#### 19. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L85-L86` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L87-L88) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L85-L86)

```diff
-         forceProjectionMatrixCompute() {
-           this._needProjectionMatrixCompute = !0
+         set excludeWithLayerMask(pp) {
+           this._excludeWithLayerMask = pp, this._resyncMeshes()
```

#### 20. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L88-L89` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L90-L91) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L88-L89)

```diff
-         _initCache() {
-           super._initCache(), this._cache.position = KD.s.Zero()
+         get includeOnlyWithLayerMask() {
+           return this._includeOnlyWithLayerMask
```

#### 21. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L91-L92` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L93-L94) · [Before (L91-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L91-L92)

```diff
-         _isSynchronized() {
-           return !!this._cache.position.equals(this.position)
+         set includeOnlyWithLayerMask(pp) {
+           this._includeOnlyWithLayerMask = pp, this._resyncMeshes()
```

#### 22. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L94-L95` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L96-L97) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L94-L95)

```diff
-         computeWorldMatrix(DD) {
-           return !DD && this.isSynchronized() ? (this._currentRenderId = this.Ul().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.pC(this.position), this._worldMatrix || (this._worldMatrix = KD.e.Identity()), KD.e.TranslationToRef(this.position.x,  … [truncated]
+         get lightmapMode() {
+           return this._lightmapMode
```

#### 23. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L97-L98` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L99-L100) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L97-L98)

```diff
-         getDepthMinZ(DD) {
-           return void 0 !== this.shadowMinZ ? this.shadowMinZ : DD?.minZ || 0
+         set lightmapMode(pp) {
+           this._lightmapMode !== pp && (this._lightmapMode = pp, this._markMeshesAsLightDirty())
```

#### 24. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L100-L101` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L102-L103) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L100-L101)

```diff
-         getDepthMaxZ(DD) {
-           return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : DD?.maxZ || 1e4
+         getViewMatrix(pp) {
+           return null
```

#### 25. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L103-L104` → after: `L105-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L105-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L105-L136) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L103-L104)

```diff
-         setShadowProjectionMatrix(DD, zD, wD) {
-           return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(zD, wD, DD) : this._setDefaultShadowProjectionMatrix(DD, zD, wD), this
+         getProjectionMatrix(pp, ip) {
+           return null
+         }
+         constructor(cp, op, Ip) {
+           super(cp, op, !1), this.diffuse = ((0, Op.l)(this, Rp), (0, Op.l)(this, qp, new Sp.d(1, 1, 1))), this.specular = ((0, Op.l)(this, Mp), (0, Op.l)(this, Cp, new Sp.d(1, 1, 1))), this.falloffType = ((0, Op.l)(this, Ep), (0, Op.l)(this, Xp, pp.FALLOFF_DEFAULT)), this.intens … [truncated]
+         }
+         transferTexturesToEffect(pp, ip) {
+           return this
+         }
+         _bindLight(pp, ip, cp, Op) {
+           let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
+           const Ip = pp.toString();
+           let xp = !1;
+           if (this._uniformBuffer.bindToEffect(cp, "Light" + Ip), this._renderId !== ip.getRenderId() || this._lastUseSpecular !== Op || !this._uniformBuffer.useUbo) {
+             this._renderId = ip.getRenderId(), this._lastUseSpecular = Op;
+             const pp = this.getScaledIntensity();
+ ... (16 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L107` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L139) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L107)

```diff
-           super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
+           super._syncParentEnabledState(), this.uR() || this._resyncMeshes()
```

#### 27. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L109-L114` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L141-L142) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L109-L114)

```diff
-         getViewMatrix(DD) {
-           const zD = KD.n.WI[0];
-           let wD = this.position;
-           this.computeTransformedInformation() && (wD = this.transformedPosition), KD.s.NormalizeToRef(this.getShadowDirection(DD), zD), 1 === Math.abs(KD.s.Dot(zD, KD.s.Up())) && (zD.z = 1e-13);
-           const pD = KD.n.WI[1];
-           return wD.addToRef(zD, pD), KD.e.LookAtLHToRef(wD, pD, KD.s.Up(), this._viewMatrix), this._viewMatrix
+         eC(pp) {
+           super.eC(pp), this._resyncMeshes()
```

#### 28. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L116-L117` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L144-L146) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L116-L117)

```diff
-         getProjectionMatrix(DD, zD) {
-           return this.setShadowProjectionMatrix(this._projectionMatrix, DD ?? this._viewMatrix, zD ?? []), this._projectionMatrix
+         getShadowGenerator() {
+           let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return null === this._shadowGenerators ? null : this._shadowGenerators.get(pp) ?? null
```

#### 29. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L119` → after: `L148-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L148-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L148-L307) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L119)

```diff
-       }, (() => {
+         getShadowGenerators() {
+           return this._shadowGenerators
+         }
+         getAbsolutePosition() {
+           return Ip.o.Zero()
+         }
+         canAffectMesh(pp) {
+           return !pp || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(pp)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(pp)) && ((0 === this.includeOnlyWithLayerMask | … [truncated]
+         }
+         dispose(pp) {
+           let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this._shadowGenerators) {
+             const pp = this._shadowGenerators.values();
+             for (let ip = pp.next(); !0 !== ip.done; ip = pp.next()) {
+               ip.value.dispose()
+             }
+ ... (144 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L121` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L309) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L121)

```diff
-         zD = [(0, sD.B)()], wD = [(0, sD.B)()], cD = [(0, sD.C)()], gD = [(0, sD.C)()], (0, pD.i)(DD, null, zD, {
+         cp = [(0, op.n)()], Pp = [(0, op.n)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], wp = [(0, op.K)()], vp = [(0, op.K)()], tp = [(0, op.K)()], Hp = [(0, op.e)("_reorderLightsInScene")], dp = [(0, op.K)("shadowEnabled")], ep = [(0, op.K)("excludeWithLayerM … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L123` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L311) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L123)

```diff
-           name: "position",
+           name: "range",
```

#### 32. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L127-L128` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L315-L316) · [Before (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L127-L128)

```diff
-             has: DD => "position" in DD,
-             get: DD => DD.position
+             has: pp => "range" in pp,
+             get: pp => pp.range
```

#### 33. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L131` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L319) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L131)

```diff
-         }, null, AD), (0, pD.i)(DD, null, wD, {
+         }, null, Rp), (0, Op.j)(pp, null, wp, {
```

#### 34. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L133` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L321) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L133)

```diff
-           name: "direction",
+           name: "intensityMode",
```

#### 35. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L137-L138` → after: `L325-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L325-L326) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L137-L138)

```diff
-             has: DD => "direction" in DD,
-             get: DD => DD.direction
+             has: pp => "intensityMode" in pp,
+             get: pp => pp.intensityMode
```

#### 36. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L141` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L329) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L141)

```diff
-         }, null, AD), (0, pD.i)(DD, null, cD, {
+         }, null, Rp), (0, Op.j)(pp, null, vp, {
```

#### 37. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L143` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L331) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L143)

```diff
-           name: "shadowMinZ",
+           name: "radius",
```

#### 38. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L147-L148` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L335-L336) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L147-L148)

```diff
-             has: DD => "shadowMinZ" in DD,
-             get: DD => DD.shadowMinZ
+             has: pp => "radius" in pp,
+             get: pp => pp.radius
```

#### 39. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L151-L153` → after: `L339-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L339-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L339-L458) · [Before (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L151-L153)

```diff
-         }, null, AD), (0, pD.i)(DD, null, gD, {
-           kind: "getter",
-           name: "shadowMaxZ",
+         }, null, Rp), (0, Op.j)(pp, null, Hp, {
+           kind: "accessor",
+           name: "renderPriority",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "renderPriority" in pp,
+             get: pp => pp.renderPriority,
+             set: (pp, ip) => {
+               pp.renderPriority = ip
+             }
+           },
+           metadata: ip
+         }, Tp, fp), (0, Op.j)(null, null, cp, {
+           kind: "field",
+           name: "diffuse",
+ ... (104 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L157-L158` → after: `L462-L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L462-L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L462-L466) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L157-L158)

```diff
-             has: DD => "shadowMaxZ" in DD,
-             get: DD => DD.shadowMaxZ
+             has: pp => "_lightmapMode" in pp,
+             get: pp => pp._lightmapMode,
+             set: (pp, ip) => {
+               pp._lightmapMode = ip
+             }
```

#### 41. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L161` → after: `L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L469) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L161)

```diff
-         }, null, AD), KD && Object.defineProperty(DD, Symbol.metadata, {
+         }, Gp, rp), ip && Object.defineProperty(pp, Symbol.metadata, {
```

#### 42. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L167` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L475) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L167)

```diff
-       })(), DD
+       })(), pp.FALLOFF_DEFAULT = Dp.b.FALLOFF_DEFAULT, pp.FALLOFF_PHYSICAL = Dp.b.FALLOFF_PHYSICAL, pp.FALLOFF_GLTF = Dp.b.FALLOFF_GLTF, pp.FALLOFF_STANDARD = Dp.b.FALLOFF_STANDARD, pp.LIGHTMAP_DEFAULT = Dp.b.LIGHTMAP_DEFAULT, pp.LIGHTMAP_SPECULAR = Dp.b.LIGHTMAP_SPECULAR, pp.LIG … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L170` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L478) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L170)

```diff
-   41485: (DD, zD, wD) => {
+   40415: (pp, ip, cp) => {
```

#### 44. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L172` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L480) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L172)

```diff
-       d: () => sD
+       b: () => Ap
```

#### 45. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L174-L229` → after: `L482-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L482-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L482-L491) · [Before (L174-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L174-L229)

```diff
-     var pD = wD(40400);
-     class sD extends pD.d {
-       constructor(DD, zD, wD, sD, KD) {
-         let rD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           LD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           cD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
-           gD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
-           RD = arguments.length > 9 ? arguments[9] : void 0,
-           AD = arguments.length > 10 ? arguments[10] : void 0,
-           UD = arguments.length > 11 ? arguments[11] : void 0,
-           fD = arguments.length > 12 ? arguments[12] : void 0;
-         super(null, KD, !rD, LD, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, RD), this.format = sD, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== gD || (cD = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== gD || (cD = … [truncated]
-       }
-       update(DD) {
-         this.updateMipLevel(DD, 0)
-       }
- ... (40 more removed lines; see GitHub link above)
+     var Op = cp(40203),
+       op = cp(37320),
+       Ip = cp(40210),
+       Sp = cp(37349),
+       xp = cp(37345),
+       Lp = cp(40096),
+       Yp = cp(40233);
+     class Dp {
+       constructor() {
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Sp.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
```

#### 46. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L232-L283` → after: `L494-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L494-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L494-L508) · [Before (L232-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L232-L283)

```diff
-   },
-   41522: (DD, zD, wD) => {
-     wD.d(zD, {
-       e: () => pD.e
-     });
-     var pD = wD(40368);
-     (0, pD.f)()
-   },
-   41475: (DD, zD, wD) => {
-     wD.d(zD, {
-       c: () => pD.c
-     });
-     var pD = wD(40390);
-     (0, pD.g)()
-   },
-   40390: (DD, zD, wD) => {
- ... (36 more removed lines; see GitHub link above)
+     let Ap = (() => {
+       var pp;
+       let ip, cp, Ap, Pp, Wp, yp = [],
+         Up = [],
+         wp = [],
+         vp = [],
+         tp = [],
+         Hp = [],
+         dp = [],
+         ep = [],
+         jp = [],
+         kp = [];
+       return pp = class {
+         static AddNodeConstructor(pp, ip) {
+           this._NodeConstructors[pp] = ip
```

#### 47. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L285-L340` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L510-L512) · [Before (L285-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L285-L340)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(DD) {
-         const zD = this.material;
-         if (zD === DD) return;
-         const wD = zD && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(DD), wD && zD?.dispose()
-       }
-       _setInternalMaterial(DD) {
-         this._setMaterial(DD), this.material && (this.material.fillMode = gD.b.LineListDrawMode, this.material.disableLighting = !0)
-       }
- ... (40 more removed lines; see GitHub link above)
+         static Construct(pp, ip, cp, Op) {
+           const op = this._NodeConstructors[pp];
+           return op ? op(ip, cp, Op) : null
```

#### 48. `bundles/bloxd.io/chunks/js/263.js` (Changed code · before: `L342-L365` → after: `L514-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-f994cb626bd514ceec29004cdee4f6ab0147180cac98aa3edd6a654b7cf586a2) · [After (L514-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/263.js#L514-L880) · [Before (L342-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/263.js#L342-L365)

```diff
-         return zD
-       }
-       serialize(DD) {
-         super.serialize(DD), DD.color = this.color.QpD(), DD.alpha = this.alpha
-       }
-       static Parse(DD, zD) {
-         const wD = new UD(DD.name, zD);
-         return wD.color = KD.d.FromArray(DD.color), wD.alpha = DD.alpha, wD
-       }
-     }
-     UD.ForceGLSL = !1;
-     class fD extends cD.e {
-       constructor(DD, zD) {
-         super(DD, zD), this.intersectionThreshold = zD.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+         set accessibilityTag(pp) {
+           this._accessibilityTag = pp, this.onAccessibilityTagChangedObservable.notifyObservers(pp)
+         }
+         get accessibilityTag() {
+           return this._accessibilityTag
+         }
+         get doNotSerialize() {
+           return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
+         }
+         set doNotSerialize(pp) {
+           this._nodeDataStorage._doNotSerialize = pp
+         }
+         uR() {
+           return this._nodeDataStorage._isDisposed
+         }
+         set parent(pp) {
+ ... (351 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/264.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/264.js` (68 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6)

#### 1. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L4)

```diff
-   40397: (DD, zD, wD) => {
+   41300: (pp, ip, cp) => {
```

#### 2. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L6-L11)

```diff
-       c: () => QD,
-       f: () => JD,
-       g: () => MD,
-       h: () => OD,
-       k: () => nD,
-       m: () => hD
+       c: () => hp
```

#### 3. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L13-L45` → after: `L8-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L8-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L8-L117) · [Before (L13-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L13-L45)

```diff
-     var pD = wD(39939),
-       sD = wD(40022),
-       KD = wD(37079),
-       rD = wD(40066),
-       LD = wD(40400),
-       cD = wD(40278),
-       gD = wD(39969),
-       RD = wD(40270),
-       AD = wD(37110),
-       UD = wD(40263),
-       fD = wD(40254),
-       ID = wD(40299),
-       BD = wD(37134);
-     const GD = {
-       effect: null,
-       subMesh: null
- ... (17 more removed lines; see GitHub link above)
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(37349),
+       Sp = cp(37320),
+       xp = cp(37356),
+       Lp = cp(40415),
+       Yp = cp(40577),
+       Dp = cp(40372),
+       Ap = cp(40122),
+       Pp = cp(37324);
+     class Wp {
+       constructor() {
+         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+       }
+       get name() {
+         return "AutoRotation"
+ ... (94 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L48-L49` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L128-L129) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L48-L49)

```diff
-       get shaderPath() {
-         return this._shaderPath
+       get name() {
+         return "Bouncing"
```

#### 5. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L51-L52` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L131-L132) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L51-L52)

```diff
-       set shaderPath(DD) {
-         this._shaderPath = DD
+       get autoTransitionRange() {
+         return this._autoTransitionRange
```

#### 6. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L54-L55` → after: `L134-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L134-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L134-L143) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L54-L55)

```diff
-       get options() {
-         return this._options
+       set autoTransitionRange(pp) {
+         if (this._autoTransitionRange === pp) return;
+         this._autoTransitionRange = pp;
+         const ip = this._attachedCamera;
+         ip && (pp ? this._onMeshTargetChangedObserver = ip.onMeshTargetChangedObservable.add((pp => {
+           if (pp && (pp.computeWorldMatrix(!0), pp.bJ)) {
+             const ip = pp.bJ().diagonalLength;
+             this.lowerRadiusTransitionRange = .05 * ip, this.upperRadiusTransitionRange = .05 * ip
+           }
+         })) : this._onMeshTargetChangedObserver && ip.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
```

#### 7. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L57-L58` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L145-L146) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L57-L58)

```diff
-       get isMultiview() {
-         return this._multiview
+       get attachedNode() {
+         return this._attachedCamera
```

#### 8. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L60-L61` → after: `L148-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L148-L152) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L60-L61)

```diff
-       getClassName() {
-         return "ShaderMaterial"
+       init() {}
+       attach(pp) {
+         this._attachedCamera = pp, this._onAfterCheckInputsObserver = pp.onAfterCheckInputsObservable.add((() => {
+           this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTra … [truncated]
+         }))
```

#### 9. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L63-L64` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L154-L155) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L63-L64)

```diff
-       needAlphaBlending() {
-         return this.alpha < 1 || this._options.needAlphaBlending
+       detach() {
+         this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChange … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L66-L67` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L157-L158) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L66-L67)

```diff
-       needAlphaTesting() {
-         return this._options.needAlphaTesting
+       _isRadiusAtLimit(pp) {
+         return !!this._attachedCamera && (this._attachedCamera.radius === pp && !this._radiusIsAnimating)
```

#### 11. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L69-L70` → after: `L160-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L160-L164) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L69-L70)

```diff
-       _checkUniform(DD) {
-         -1 === this._options.uniforms.indexOf(DD) && this._options.uniforms.push(DD)
+       _applyBoundRadiusAnimation(pp) {
+         if (!this._attachedCamera) return;
+         this._radiusBounceTransition || (wp.EasingFunction.setEasingMode(wp.EasingMode), this._radiusBounceTransition = Up.e.CreateAnimation("radius", Up.e.ANIMATIONTYPE_FLOAT, 60, wp.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
+         const ip = Up.e.TransitionTo("radius", this._attachedCamera.radius + pp, this._attachedCamera, this._attachedCamera.Gl(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
+         ip && this._animatables.push(ip)
```

#### 12. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L72-L73` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L166-L167) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L72-L73)

```diff
-       setTexture(DD, zD) {
-         return -1 === this._options.samplers.indexOf(DD) && this._options.samplers.push(DD), this._textures[DD] = zD, this
+       _clearAnimationLocks() {
+         this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
```

#### 13. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L75-L76` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L169-L170) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L75-L76)

```diff
-       setInternalTexture(DD, zD) {
-         return -1 === this._options.samplers.indexOf(DD) && this._options.samplers.push(DD), this._internalTextures[DD] = zD, this
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
```

#### 14. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L78-L79` → after: `L172-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L172-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L172-L176) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L78-L79)

```diff
-       removeTexture(DD) {
-         delete this._textures[DD]
+     }
+     wp.EasingFunction = new class extends yp {
+       constructor() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         super(), this.amplitude = pp
```

#### 15. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L81-L82` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L178-L180) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L81-L82)

```diff
-       setTextureArray(DD, zD) {
-         return -1 === this._options.samplers.indexOf(DD) && this._options.samplers.push(DD), this._checkUniform(DD), this._textureArrays[DD] = zD, this
+       easeInCore(pp) {
+         const ip = Math.max(0, this.amplitude);
+         return Math.pow(pp, 3) - pp * ip * Math.sin(3.141592653589793 * pp)
```

#### 16. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L84-L85` → after: `L182-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L182-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L182-L185) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L84-L85)

```diff
-       setExternalTexture(DD, zD) {
-         return -1 === this._options.externalTextures.indexOf(DD) && this._options.externalTextures.push(DD), this._externalTextures[DD] = zD, this
+     }(.3), wp.EasingMode = yp.EASINGMODE_EASEOUT;
+     class vp {
+       constructor() {
+         this.onTargetFramingAnimationEndObservable = new Ip.d, this._mode = vp.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
```

#### 17. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L87-L88` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L187-L188) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L87-L88)

```diff
-       setFloat(DD, zD) {
-         return this._checkUniform(DD), this._floats[DD] = zD, this
+       get name() {
+         return "Framing"
```

#### 18. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L90-L91` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L190-L191) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L90-L91)

```diff
-       setInt(DD, zD) {
-         return this._checkUniform(DD), this._ints[DD] = zD, this
+       set mode(pp) {
+         this._mode = pp
```

#### 19. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L93-L94` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L193-L194) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L93-L94)

```diff
-       setUInt(DD, zD) {
-         return this._checkUniform(DD), this._uints[DD] = zD, this
+       get mode() {
+         return this._mode
```

#### 20. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L96-L97` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L196-L197) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L96-L97)

```diff
-       setFloats(DD, zD) {
-         return this._checkUniform(DD), this._floatsArrays[DD] = zD, this
+       set radiusScale(pp) {
+         this._radiusScale = pp
```

#### 21. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L99-L100` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L199-L200) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L99-L100)

```diff
-       setColor3(DD, zD) {
-         return this._checkUniform(DD), this._colors3[DD] = zD, this
+       get radiusScale() {
+         return this._radiusScale
```

#### 22. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L102-L103` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L202-L203) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L102-L103)

```diff
-       setColor3Array(DD, zD) {
-         return this._checkUniform(DD), this._colors3Arrays[DD] = zD.reduce(((DD, zD) => (DD.push(zD.r, zD.g, zD.b), DD)), []), this
+       set positionScale(pp) {
+         this._positionScale = pp
```

#### 23. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L105-L106` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L205-L206) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L105-L106)

```diff
-       setColor4(DD, zD) {
-         return this._checkUniform(DD), this._colors4[DD] = zD, this
+       get positionScale() {
+         return this._positionScale
```

#### 24. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L108-L109` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L208-L209) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L108-L109)

```diff
-       setColor4Array(DD, zD) {
-         return this._checkUniform(DD), this._colors4Arrays[DD] = zD.reduce(((DD, zD) => (DD.push(zD.r, zD.g, zD.b, zD.a), DD)), []), this
+       set defaultElevation(pp) {
+         this._defaultElevation = pp
```

#### 25. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L111-L112` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L211-L212) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L111-L112)

```diff
-       setVector2(DD, zD) {
-         return this._checkUniform(DD), this._vectors2[DD] = zD, this
+       get defaultElevation() {
+         return this._defaultElevation
```

#### 26. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L114-L115` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L214-L215) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L114-L115)

```diff
-       setVector3(DD, zD) {
-         return this._checkUniform(DD), this._vectors3[DD] = zD, this
+       set elevationReturnTime(pp) {
+         this._elevationReturnTime = pp
```

#### 27. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L117-L118` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L217-L218) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L117-L118)

```diff
-       setVector4(DD, zD) {
-         return this._checkUniform(DD), this._vectors4[DD] = zD, this
+       get elevationReturnTime() {
+         return this._elevationReturnTime
```

#### 28. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L120-L121` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L220-L221) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L120-L121)

```diff
-       setQuaternion(DD, zD) {
-         return this._checkUniform(DD), this._quaternions[DD] = zD, this
+       set elevationReturnWaitTime(pp) {
+         this._elevationReturnWaitTime = pp
```

#### 29. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L123-L124` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L223-L224) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L123-L124)

```diff
-       setQuaternionArray(DD, zD) {
-         return this._checkUniform(DD), this._quaternionsArrays[DD] = zD.reduce(((DD, zD) => (zD.toArray(DD, DD.length), DD)), []), this
+       get elevationReturnWaitTime() {
+         return this._elevationReturnWaitTime
```

#### 30. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L126-L127` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L226-L227) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L126-L127)

```diff
-       setMatrix(DD, zD) {
-         return this._checkUniform(DD), this._matrices[DD] = zD, this
+       set zoomStopsAnimation(pp) {
+         this._zoomStopsAnimation = pp
```

#### 31. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L129-L135` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L229-L230) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L129-L135)

```diff
-       setMatrices(DD, zD) {
-         this._checkUniform(DD);
-         const wD = new Float32Array(16 * zD.length);
-         for (let pD = 0; pD < zD.length; pD++) {
-           zD[pD].copyToArray(wD, 16 * pD)
-         }
-         return this._matrixArrays[DD] = wD, this
+       get zoomStopsAnimation() {
+         return this._zoomStopsAnimation
```

#### 32. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L137-L138` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L232-L233) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L137-L138)

```diff
-       setMatrix3x3(DD, zD) {
-         return this._checkUniform(DD), this._matrices3x3[DD] = zD, this
+       set framingTime(pp) {
+         this._framingTime = pp
```

#### 33. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L140-L141` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L235-L236) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L140-L141)

```diff
-       setMatrix2x2(DD, zD) {
-         return this._checkUniform(DD), this._matrices2x2[DD] = zD, this
+       get framingTime() {
+         return this._framingTime
```

#### 34. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L143-L144` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L238-L239) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L143-L144)

```diff
-       setArray2(DD, zD) {
-         return this._checkUniform(DD), this._vectors2Arrays[DD] = zD, this
+       get attachedNode() {
+         return this._attachedCamera
```

#### 35. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L146-L147` → after: `L241-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L241-L253) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L146-L147)

```diff
-       setArray3(DD, zD) {
-         return this._checkUniform(DD), this._vectors3Arrays[DD] = zD, this
+       init() {}
+       attach(pp) {
+         this._attachedCamera = pp;
+         const ip = this._attachedCamera.Gl();
+         vp.EasingFunction.setEasingMode(vp.EasingMode), this._onPrePointerObservableObserver = ip.onPrePointerObservable.add((pp => {
+           pp.type !== Dp.d.POINTERDOWN ? pp.type === Dp.d.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+         })), this._onMeshTargetChangedObserver = pp.onMeshTargetChangedObservable.add((pp => {
+           pp && pp.bJ && this.zoomOnMesh(pp, void 0, (() => {
+             this.onTargetFramingAnimationEndObservable.notifyObservers()
+           }))
+         })), this._onAfterCheckInputsObserver = pp.onAfterCheckInputsObservable.add((() => {
+           this._applyUserInteraction(), this._maintainCameraAboveGround()
+         }))
```

#### 36. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L149-L150` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L255-L258) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L149-L150)

```diff
-       setArray4(DD, zD) {
-         return this._checkUniform(DD), this._vectors4Arrays[DD] = zD, this
+       detach() {
+         if (!this._attachedCamera) return;
+         const pp = this._attachedCamera.Gl();
+         this._onPrePointerObservableObserver && pp.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L152-L153` → after: `L260-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L260-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L260-L265) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L152-L153)

```diff
-       setUniformBuffer(DD, zD) {
-         return -1 === this._options.uniformBuffers.indexOf(DD) && this._options.uniformBuffers.push(DD), this._uniformBuffers[DD] = zD, this
+       zoomOnMesh(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         pp.computeWorldMatrix(!0);
+         const Op = pp.bJ().boundingBox;
+         this.zoomOnBoundingInfo(Op.minimumWorld, Op.maximumWorld, ip, cp)
```

#### 38. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L155-L156` → after: `L267-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L267-L272) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L155-L156)

```diff
-       setTextureSampler(DD, zD) {
-         return -1 === this._options.samplerObjects.indexOf(DD) && this._options.samplerObjects.push(DD), this._textureSamplers[DD] = zD, this
+       zoomOnMeshHierarchy(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         pp.computeWorldMatrix(!0);
+         const Op = pp.getHierarchyBoundingVectors(!0);
+         this.zoomOnBoundingInfo(Op.min, Op.max, ip, cp)
```

#### 39. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L158-L159` → after: `L274-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L274-L283) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L158-L159)

```diff
-       setStorageBuffer(DD, zD) {
-         return -1 === this._options.storageBuffers.indexOf(DD) && this._options.storageBuffers.push(DD), this._storageBuffers[DD] = zD, this
+       zoomOnMeshesHierarchy(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         const Op = new Sp.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           op = new Sp.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         for (let Ip = 0; Ip < pp.length; Ip++) {
+           const ip = pp[Ip].getHierarchyBoundingVectors(!0);
+           Sp.o.CheckExtends(ip.min, Op, op), Sp.o.CheckExtends(ip.max, Op, op)
+         }
+         this.zoomOnBoundingInfo(Op, op, ip, cp)
```

#### 40. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L161-L164` → after: `L285-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L285-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L285-L312) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L161-L164)

```diff
-       setDefine(DD, zD) {
-         const wD = DD.trimEnd() + " ",
-           pD = this.options.defines.findIndex((zD => zD === DD || zD.startsWith(wD)));
-         return pD >= 0 && this.options.defines.splice(pD, 1), ("boolean" !== typeof zD || zD) && this.options.defines.push(wD + zD), this
+       zoomOnBoundingInfo(pp, ip) {
+         let cp, Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         if (!this._attachedCamera) return !1;
+         const Ip = pp.y,
+           xp = Ip + (ip.y - Ip) * this._positionScale,
+           Lp = ip.subtract(pp).scale(.5);
+         if (!isFinite(xp)) return !1;
+         if (Op) cp = new Sp.o(0, xp, 0);
+         else {
+           const ip = pp.add(Lp);
+           cp = new Sp.o(ip.x, xp, ip.z)
+         }
+         this._vectorTransition || (this._vectorTransition = Up.e.CreateAnimation("target", Up.e.ANIMATIONTYPE_VECTOR3, 60, vp.EasingFunction)), this._betaIsAnimating = !0;
+         let Yp = Up.e.TransitionTo("target", cp, this._attachedCamera, this._attachedCamera.Gl(), 60, this._vectorTransition, this._framingTime);
+         Yp && this._animatables.push(Yp);
+ ... (12 more added lines; see GitHub link above)
```

#### 41. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L166-L167` → after: `L314-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L314-L318) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L166-L167)

```diff
-       isReadyForSubMesh(DD, zD, wD) {
-         return this.isReady(DD, wD, zD)
+       _calculateLowerRadiusFromModelBoundingSphere(pp, ip) {
+         const cp = this._attachedCamera;
+         if (!cp) return 0;
+         let Op = cp._calculateLowerRadiusFromModelBoundingSphere(pp, ip, this._radiusScale);
+         return cp.lowerRadiusLimit && this._mode === vp.IgnoreBoundsSizeMode && (Op = Op < cp.lowerRadiusLimit ? cp.lowerRadiusLimit : Op), cp.upperRadiusLimit && (Op = Op > cp.upperRadiusLimit ? cp.upperRadiusLimit : Op), Op
```

#### 42. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L169-L173` → after: `L320-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L320-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L320-L330) · [Before (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L169-L173)

```diff
-       isReady(DD, zD, wD) {
-         const pD = wD && this._storeEffectOnSubMeshes;
-         if (this.isFrozen) {
-           const DD = pD ? wD._drawWrapper : this._drawWrapper;
-           if (DD.effect && DD._wasPreviouslyReady && DD._wasPreviouslyUsingInstances === zD) return !0
+       _maintainCameraAboveGround() {
+         if (this._elevationReturnTime < 0) return;
+         const pp = Ap.e.Now - this._lastInteractionTime,
+           ip = .5 * Math.PI - this._defaultElevation,
+           cp = .5 * Math.PI;
+         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > cp && pp >= this._elevationReturnWaitTime) {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Up.e.CreateAnimation("beta", Up.e.ANIMATIONTYPE_FLOAT, 60, vp.EasingFunction));
+           const pp = Up.e.TransitionTo("beta", ip, this._attachedCamera, this._attachedCamera.Gl(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+             this._clearAnimationLocks(), this.stopAllAnimations()
+           }));
+           pp && this._animatables.push(pp)
```

#### 43. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L175-L176` → after: `L332-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L332-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L332-L504) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L175-L176)

```diff
-         const KD = this.Ul(),
-           LD = KD.iI(),
+       }
+       _clearAnimationLocks() {
+         this._betaIsAnimating = !1
+       }
+       _applyUserInteraction() {
+         this.isUserIsMoving && (this._lastInteractionTime = Ap.e.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       }
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       }
+       get isUserIsMoving() {
+         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       }
+     }
+     vp.EasingFunction = new class extends yp {
+       constructor() {
+ ... (157 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L179-L187` → after: `L507-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L507-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L507-L784) · [Before (L179-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L179-L187)

```diff
-         let AD = null,
-           BD = this._shaderPath,
-           hD = this._options.uniforms,
-           nD = this._options.uniformBuffers,
-           MD = this._options.samplers;
-         LD.getCaps().multiview && KD.activeCamera && KD.activeCamera.outputRenderTarget && KD.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, gD.push("#define MULTIVIEW"), -1 !== hD.indexOf("viewProjection") && -1 === hD.indexOf("viewProjectionR") &&  … [truncated]
-         for (let sD = 0; sD < this._options.defines.length; sD++) {
-           const DD = 0 === this._options.defines[sD].indexOf("#define") ? this._options.defines[sD] : `#define ${this._options.defines[sD]}`;
-           gD.push(DD)
+         return pp = class extends Sp {
+           constructor() {
+             super(...arguments), this.pinchZoom = (0, Op.l)(this, xp, !0), this.multiTouchPanning = ((0, Op.l)(this, Lp), (0, Op.l)(this, Yp, !0)), this.multiTouchPanAndZoom = ((0, Op.l)(this, Dp), (0, Op.l)(this, Ap, !0)), this._isPinching = ((0, Op.l)(this, Pp), !1), this._twoF … [truncated]
+           }
+           _computePinchZoom(pp, ip) {}
+           _computeMultiTouchPanning(pp, ip) {}
+           onMultiTouch(pp, ip, cp, Op, op, Ip) {
+             0 === cp && null === op || 0 === Op && null === Ip || (this.multiTouchPanAndZoom ? (this._computePinchZoom(cp, Op), this._computeMultiTouchPanning(op, Ip)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldSt … [truncated]
+           }
+           onButtonUp(pp) {
+             this._twoFingerActivityCount = 0, this._isPinching = !1
+           }
+           onLostFocus() {
+             this._twoFingerActivityCount = 0, this._isPinching = !1
+           }
+         }, (() => {
+ ... (262 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L189-L207` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L786-L787) · [Before (L189-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L189-L207)

```diff
-         for (let sD = 0; sD < this._options.attributes.length; sD++) RD.push(this._options.attributes[sD]);
-         if (DD && DD.isVerticesDataPresent(rD.k.ColorKind) && (-1 === RD.indexOf(rD.k.ColorKind) && RD.push(rD.k.ColorKind), gD.push("#define VERTEXCOLOR")), zD && (gD.push("#define INSTANCES"), (0, fD.Eb)(RD, this._materialHelperNeedsPreviousMatrices), DD?.hasThinInstances && (g … [truncated]
-           RD.push(rD.k.MatricesIndicesKind), RD.push(rD.k.MatricesWeightsKind), DD.numBoneInfluencers > 4 && (RD.push(rD.k.MatricesIndicesExtraKind), RD.push(rD.k.MatricesWeightsExtraKind));
-           const zD = DD.skeleton;
-           gD.push("#define NUM_BONE_INFLUENCERS " + DD.numBoneInfluencers), AD = new cD.b, AD.addCPUSkinningFallback(0, DD), zD.isUsingTextureForMatrices ? (gD.push("#define BONETEXTURE"), -1 === hD.indexOf("boneTextureInfo") && hD.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
-         } else gD.push("#define NUM_BONE_INFLUENCERS 0");
-         let OD = 0;
-         const JD = DD ? DD.morphTargetManager : null;
-         if (JD) {
-           const zD = -1 !== gD.indexOf("#define UV1"),
-             wD = -1 !== gD.indexOf("#define UV2"),
-             pD = -1 !== gD.indexOf("#define TANGENT"),
-             sD = -1 !== gD.indexOf("#define NORMAL"),
-             KD = -1 !== gD.indexOf("#define VERTEXCOLOR");
-           OD = (0, fD.O)(JD, gD, RD, DD, !0, sD, pD, zD, wD, KD), JD.isUsingTextureForTargets && (-1 === hD.indexOf("morphTargetTextureIndices") && hD.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
-         } else gD.push("#define NUM_MORPH_INFLUENCERS 0");
- ... (3 more removed lines; see GitHub link above)
+         get useAltToZoom() {
+           return this._useAltToZoom
```

#### 46. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L209-L221` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L789-L790) · [Before (L209-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L209-L221)

```diff
-         for (const sD in this._textures)
-           if (!this._textures[sD].isReady()) return !1;
-         for (const sD in this._internalTextures)
-           if (!this._internalTextures[sD].isReady) return !1;
-         DD && this.needAlphaTestingForMesh(DD) && gD.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, UD.e)(hD), (0, UD.n)(this, KD, gD)), KD.fogEnabled && DD?.applyFog && KD.fogMode !== sD.e.FOGMODE_NONE && (gD.push("#define FOG"), -1 === hD.indexOf("view") & … [truncated]
-         const ED = wD ? wD.getRenderingMesh() : DD;
-         if (ED && this.useVertexPulling) {
-           const DD = ED.geometry;
-           DD && (this._vertexPullingMetadata = (0, ID.e)(DD), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((DD, zD) => {
-             hD.push(`vp_${zD}_info`)
-           }))), gD.push("#define USE_VERTEX_PULLING");
-           const zD = ED.geometry?.getIndexBuffer();
-           zD && !ED.isUnIndexed && (gD.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), zD.is32Bits && gD.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
+         set useAltToZoom(pp) {
+           this._useAltToZoom = pp, this._applyUseAltToZoomToInputMap()
```

#### 47. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L223-L269` → after: `L792-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L792-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L792-L820) · [Before (L223-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L223-L269)

```diff
-         this.customShaderNameResolve && (hD = hD.slice(), nD = nD.slice(), MD = MD.slice(), BD = this.customShaderNameResolve(this.name, hD, nD, MD, gD, RD));
-         const QD = pD ? wD._getDrawWrapper(void 0, !0) : this._drawWrapper,
-           XD = QD?.effect ?? null,
-           VD = QD?.defines ?? null,
-           PD = gD.join("\n");
-         let CD = XD;
-         return VD !== PD && (CD = LD.createEffect(BD, {
-           attributes: RD,
-           uniformsNames: hD,
-           uniformBuffersNames: nD,
-           samplers: MD,
-           defines: PD,
-           fallbacks: AD,
-           onCompiled: this.onCompiled,
-           onError: this.onError,
-           indexParameters: {
- ... (31 more removed lines; see GitHub link above)
+         _applyUseAltToZoomToInputMap() {
+           if (!this.camera?.movement) return;
+           const pp = this.camera.movement.input,
+             ip = pp.getEntry("keyboard", "zoom", {
+               modifiers: {
+                 alt: !0
+               }
+             });
+           !this._useAltToZoom && ip ? pp.inputMap.splice(pp.inputMap.indexOf(ip), 1) : this._useAltToZoom && !ip && pp.addEntry({
+             source: "keyboard",
+             modifiers: {
+               alt: !0
+             },
+             interaction: "zoom"
+           })
+         }
+ ... (13 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L271-L314` → after: `L822-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L822-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L822-L825) · [Before (L271-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L271-L314)

```diff
-           }
-         const gD = zD && sD ? this._mustRebind(rD, KD, pD, zD.visibility) : rD.getCachedMaterial() !== this;
-         if (KD && gD) {
-           let DD;
-           for (DD in cD || -1 === this._options.uniforms.indexOf("view") || KD.setMatrix("view", rD.getViewMatrix()), cD || -1 === this._options.uniforms.indexOf("projection") || KD.setMatrix("projection", rD.getProjectionMatrix()), cD || -1 === this._options.uniforms.indexOf("vi … [truncated]
-           for (DD in this._internalTextures) KD._bindTexture(DD, this._internalTextures[DD]);
-           for (DD in this._textureArrays) KD.setTextureArray(DD, this._textureArrays[DD]);
-           for (DD in this._ints) KD.setInt(DD, this._ints[DD]);
-           for (DD in this._uints) KD.setUInt(DD, this._uints[DD]);
-           for (DD in this._floats) KD.setFloat(DD, this._floats[DD]);
-           for (DD in this._floatsArrays) KD.setArray(DD, this._floatsArrays[DD]);
-           for (DD in this._colors3) KD.setColor3(DD, this._colors3[DD]);
-           for (DD in this._colors3Arrays) KD.setArray3(DD, this._colors3Arrays[DD]);
-           for (DD in this._colors4) {
-             const zD = this._colors4[DD];
-             KD.setFloat4(DD, zD.r, zD.g, zD.b, zD.a)
- ... (28 more removed lines; see GitHub link above)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
```

#### 49. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L316-L321` → after: `L827-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L827-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L827-L847) · [Before (L316-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L316-L321)

```diff
-         if (KD && zD && (gD || !this.isFrozen)) {
-           (0, fD.s)(zD, KD), zD.morphTargetManager && zD.morphTargetManager.isUsingTextureForTargets && zD.morphTargetManager._bind(KD);
-           const DD = zD.bakedVertexAnimationManager;
-           if (DD && DD.isEnabled) {
-             const DD = sD ? pD._drawWrapper : this._drawWrapper;
-             zD.bakedVertexAnimationManager?.bind(KD, !!DD._wasPreviouslyUsingInstances)
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const pp = this.camera,
+               ip = pp.movement.input;
+             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
+             const cp = this._rotateDirection.set(0, 0),
+               Op = this._panDirection.set(0, 0);
+             let op = 0,
+               Ip = 0;
+             for (let Sp = 0; Sp < this._keys.length; Sp++) {
+               const xp = this._keys[Sp];
+               if (this._keyboardConditions.key = xp, -1 === this.keysReset.indexOf(xp)) {
+                 const pp = ip.resolveInteraction("keyboard", this._keyboardConditions);
+                 if (pp)
+                   if ("pan" === pp.interaction) Ip = Math.max(Ip, pp.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(xp) ? Op.x -= 1 : -1 !== this.keysRight.indexOf(xp) ? Op.x += 1 : -1 !== this.keysUp.indexOf(xp) ? Op.y += 1 : -1 !== this.keysDown.index … [truncated]
+                   else if ("zoom" === pp.interaction) {
+ ... (5 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L324-L331` → after: `L850-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L850-L851) · [Before (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L324-L331)

```diff
-         this._afterBind(zD, KD, pD)
-       }
-       getActiveTextures() {
-         const DD = super.getActiveTextures();
-         for (const zD in this._textures) DD.push(this._textures[zD]);
-         for (const zD in this._textureArrays) {
-           const wD = this._textureArrays[zD];
-           for (let zD = 0; zD < wD.length; zD++) DD.push(wD[zD])
+         getClassName() {
+           return "ArcRotateCameraKeyboardMoveInput"
```

#### 51. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L333-L345` → after: `L853-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L853-L854) · [Before (L333-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L333-L345)

```diff
-         return DD
-       }
-       hasTexture(DD) {
-         if (super.hasTexture(DD)) return !0;
-         for (const wD in this._textures)
-           if (this._textures[wD] === DD) return !0;
-         const zD = DD.getInternalTexture();
-         for (const wD in this._internalTextures)
-           if (this._internalTextures[wD] === zD) return !0;
-         for (const wD in this._textureArrays) {
-           const zD = this._textureArrays[wD];
-           for (let wD = 0; wD < zD.length; wD++)
-             if (zD[wD] === DD) return !0
+         getSimpleName() {
+           return "keyboard"
```

#### 52. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L347-L359` → after: `L856-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L856-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L856-L1019) · [Before (L347-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L347-L359)

```diff
-         return !1
-       }
-       clone(DD) {
-         const zD = pD.d.Clone((() => new hD(DD, this.Ul(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
-         zD.name = DD, zD.id = DD, "object" === typeof zD._shaderPath && (zD._shaderPath = {
-           ...zD._shaderPath
-         }), this._options = {
-           ...this._options
-         };
-         const wD = Object.keys(this._options);
-         for (const pD of wD) {
-           const DD = this._options[pD];
-           Array.isArray(DD) && (this._options[pD] = DD.slice(0))
+       }, (() => {
+         const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], xp = [(0, op.K)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], Dp = [(0, op.K)()], Ap = [(0, op.K)()], Pp = [(0, op.K)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], (0, Op.j)(pp, null, yp, {
+           kind: "getter",
+           name: "useAltToZoom",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "useAltToZoom" in pp,
+             get: pp => pp.useAltToZoom
+           },
+           metadata: Sp
+         }, null, Up), (0, Op.j)(null, null, ip, {
+           kind: "field",
+           name: "keysUp",
+           static: !1,
+ ... (148 more added lines; see GitHub link above)
```

#### 53. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L361-L392` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1021) · [Before (L361-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L361-L392)

```diff
-         this.stencil.copyTo(zD.stencil);
-         for (const pD in this._textures) zD.setTexture(pD, this._textures[pD]);
-         for (const pD in this._internalTextures) zD.setInternalTexture(pD, this._internalTextures[pD]);
-         for (const pD in this._textureArrays) zD.setTextureArray(pD, this._textureArrays[pD]);
-         for (const pD in this._externalTextures) zD.setExternalTexture(pD, this._externalTextures[pD]);
-         for (const pD in this._ints) zD.setInt(pD, this._ints[pD]);
-         for (const pD in this._uints) zD.setUInt(pD, this._uints[pD]);
-         for (const pD in this._floats) zD.setFloat(pD, this._floats[pD]);
-         for (const pD in this._floatsArrays) zD.setFloats(pD, this._floatsArrays[pD]);
-         for (const pD in this._colors3) zD.setColor3(pD, this._colors3[pD]);
-         for (const pD in this._colors3Arrays) zD._colors3Arrays[pD] = this._colors3Arrays[pD];
-         for (const pD in this._colors4) zD.setColor4(pD, this._colors4[pD]);
-         for (const pD in this._colors4Arrays) zD._colors4Arrays[pD] = this._colors4Arrays[pD];
-         for (const pD in this._vectors2) zD.setVector2(pD, this._vectors2[pD]);
-         for (const pD in this._vectors3) zD.setVector3(pD, this._vectors3[pD]);
-         for (const pD in this._vectors4) zD.setVector4(pD, this._vectors4[pD]);
- ... (16 more removed lines; see GitHub link above)
+         _computeDeltaFromMouseWheelLegacyEvent(pp, ip) {
```

#### 54. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L394-L398` → after: `L1023-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1023-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1023-L1058) · [Before (L394-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L394-L398)

```diff
-           for (DD in this._textures) this._textures[DD].dispose();
-           for (DD in this._internalTextures) this._internalTextures[DD].dispose();
-           for (DD in this._textureArrays) {
-             const zD = this._textureArrays[DD];
-             for (let DD = 0; DD < zD.length; DD++) zD[DD].dispose()
+           const Op = .01 * pp * this.wheelDeltaPercentage * ip;
+           return cp = pp > 0 ? Op / (1 + this.wheelDeltaPercentage) : Op * (1 + this.wheelDeltaPercentage), cp
+         }
+         attachControl(pp) {
+           pp = ep.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = ip => {
+             if (ip.type !== Dp.d.POINTERWHEEL) return;
+             const cp = ip.event;
+             let Op;
+             const op = cp.deltaMode === Cp.c.DOM_DELTA_LINE ? 40 : 1,
+               Ip = -cp.deltaY * op;
+             if (this.customComputeDeltaFromMouseWheel) Op = this.customComputeDeltaFromMouseWheel(Ip, this, cp);
+             else if (this.wheelDeltaPercentage) {
+               if (Op = this._computeDeltaFromMouseWheelLegacyEvent(Ip, this.camera.radius), Op > 0) {
+                 const pp = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
+                 let ip = this.camera.radius,
+                   cp = pp + Op;
+ ... (20 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L401-L410` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1061-L1062) · [Before (L401-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L401-L410)

```diff
-         this._textures = {}, this._internalTextures = {}, super.dispose(DD, zD, wD)
-       }
-       serialize() {
-         const DD = pD.d.Serialize(this);
-         let zD;
-         for (zD in DD.customType = "BABYLON.ShaderMaterial", DD.uniqueId = this.uniqueId, DD.options = this._options, DD.shaderPath = this._shaderPath, DD.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, DD.stencil = this.stencil.serialize(), DD.textures = {}, this._texture … [truncated]
-         for (zD in DD.textureArrays = {}, this._textureArrays) {
-           DD.textureArrays[zD] = [];
-           const wD = this._textureArrays[zD];
-           for (let pD = 0; pD < wD.length; pD++) DD.textureArrays[zD].push(wD[pD].serialize())
+         getClassName() {
+           return "ArcRotateCameraMouseWheelInput"
```

#### 56. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L412-L418` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1064-L1065) · [Before (L412-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L412-L418)

```diff
-         for (zD in DD.ints = {}, this._ints) DD.ints[zD] = this._ints[zD];
-         for (zD in DD.uints = {}, this._uints) DD.uints[zD] = this._uints[zD];
-         for (zD in DD.floats = {}, this._floats) DD.floats[zD] = this._floats[zD];
-         for (zD in DD.floatsArrays = {}, this._floatsArrays) DD.floatsArrays[zD] = this._floatsArrays[zD];
-         for (zD in DD.colors3 = {}, this._colors3) {
-           const wD = this._colors3[zD];
-           DD.colors3[zD] = [wD.r, wD.g, wD.b]
+         getSimpleName() {
+           return "mousewheel"
```

#### 57. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L420-L423` → after: `L1067-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1067-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1067-L1070) · [Before (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L420-L423)

```diff
-         for (zD in DD.colors3Arrays = {}, this._colors3Arrays) DD.colors3Arrays[zD] = this._colors3Arrays[zD];
-         for (zD in DD.colors4 = {}, this._colors4) {
-           const wD = this._colors4[zD];
-           DD.colors4[zD] = [wD.r, wD.g, wD.b, wD.a]
+         _updateHitPlane() {
+           const pp = this.camera,
+             ip = pp.target.subtract(pp.position);
+           this._hitPlane = Mp.e.FromPositionAndNormal(pp.target, ip)
```

#### 58. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L425-L428` → after: `L1072-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1072-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1072-L1078) · [Before (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L425-L428)

```diff
-         for (zD in DD.colors4Arrays = {}, this._colors4Arrays) DD.colors4Arrays[zD] = this._colors4Arrays[zD];
-         for (zD in DD.vectors2 = {}, this._vectors2) {
-           const wD = this._vectors2[zD];
-           DD.vectors2[zD] = [wD.x, wD.y]
+         _getPosition() {
+           const pp = this.camera,
+             ip = pp.Gl(),
+             cp = ip.createPickingRay(ip.pointerX, ip.pointerY, Sp.b.Identity(), pp, !1);
+           0 === pp.targetScreenOffset.x && 0 === pp.targetScreenOffset.y || (this._viewOffset.set(pp.targetScreenOffset.x, pp.targetScreenOffset.y, 0), pp.getViewMatrix().invertToRef(pp._cameraTransformMatrix), this._globalOffset = Sp.o.TransformNormal(this._viewOffset, pp._camer … [truncated]
+           let Op = 0;
+           return this._hitPlane && (Op = cp.intersectsPlane(this._hitPlane) ?? 0), cp.origin.addInPlace(cp.direction.scaleInPlace(Op))
```

#### 59. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L430-L432` → after: `L1080-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1080-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1080-L1095) · [Before (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L430-L432)

```diff
-         for (zD in DD.vectors3 = {}, this._vectors3) {
-           const wD = this._vectors3[zD];
-           DD.vectors3[zD] = [wD.x, wD.y, wD.z]
+         _zoomToMouse(pp) {
+           const ip = this.camera,
+             cp = 1 - ip.inertia,
+             Op = ip.movement.getFrameIndependentInputScale(ip.inertia);
+           if (ip.lowerRadiusLimit) {
+             const op = ip.lowerRadiusLimit ?? 0;
+             ip.radius - (this._zoomToMouseRadiusOffset + pp * Op) / cp < op && (pp = ((ip.radius - op) * cp - this._zoomToMouseRadiusOffset) / Op)
+           }
+           if (ip.upperRadiusLimit) {
+             const op = ip.upperRadiusLimit ?? 0;
+             ip.radius - (this._zoomToMouseRadiusOffset + pp * Op) / cp > op && (pp = ((ip.radius - op) * cp - this._zoomToMouseRadiusOffset) / Op)
+           }
+           const op = pp / cp / ip.radius,
+             Ip = this._getPosition(),
+             xp = Sp.i.Zy[6];
+           Ip.subtractToRef(ip.target, xp), xp.scaleInPlace(op), xp.scaleInPlace(cp), xp.scaleInPlace(Op), this._inertialPanning.addInPlace(xp), this._zoomToMouseRadiusOffset += pp * Op
```

#### 60. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L434-L436` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1097-L1098) · [Before (L434-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L434-L436)

```diff
-         for (zD in DD.vectors4 = {}, this._vectors4) {
-           const wD = this._vectors4[zD];
-           DD.vectors4[zD] = [wD.x, wD.y, wD.z, wD.w]
+         _zeroIfClose(pp) {
+           Math.abs(pp.x) < Pp.b && (pp.x = 0), Math.abs(pp.y) < Pp.b && (pp.y = 0), Math.abs(pp.z) < Pp.b && (pp.z = 0)
```

#### 61. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L438-L470` → after: `L1100-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1100-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1100-L1145) · [Before (L438-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L438-L470)

```diff
-         for (zD in DD.quaternions = {}, this._quaternions) DD.quaternions[zD] = this._quaternions[zD].QpD();
-         for (zD in DD.matrices = {}, this._matrices) DD.matrices[zD] = this._matrices[zD].QpD();
-         for (zD in DD.matrixArray = {}, this._matrixArrays) DD.matrixArray[zD] = this._matrixArrays[zD];
-         for (zD in DD.matrices3x3 = {}, this._matrices3x3) DD.matrices3x3[zD] = this._matrices3x3[zD];
-         for (zD in DD.matrices2x2 = {}, this._matrices2x2) DD.matrices2x2[zD] = this._matrices2x2[zD];
-         for (zD in DD.vectors2Arrays = {}, this._vectors2Arrays) DD.vectors2Arrays[zD] = this._vectors2Arrays[zD];
-         for (zD in DD.vectors3Arrays = {}, this._vectors3Arrays) DD.vectors3Arrays[zD] = this._vectors3Arrays[zD];
-         for (zD in DD.vectors4Arrays = {}, this._vectors4Arrays) DD.vectors4Arrays[zD] = this._vectors4Arrays[zD];
-         for (zD in DD.quaternionsArrays = {}, this._quaternionsArrays) DD.quaternionsArrays[zD] = this._quaternionsArrays[zD];
-         return DD
-       }
-     }
- 
-     function nD(DD, zD, wD) {
-       const sD = pD.d.Parse((() => new hD(DD.name, zD, DD.shaderPath, DD.options, DD.storeEffectOnSubMeshes)), DD, zD, wD);
-       let rD;
- ... (17 more removed lines; see GitHub link above)
+       }, (() => {
+         const Sp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], (0, Op.j)(null, null, ip, {
+           kind: "field",
+           name: "wheelPrecision",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "wheelPrecision" in pp,
+             get: pp => pp.wheelPrecision,
+             set: (pp, ip) => {
+               pp.wheelPrecision = ip
+             }
+           },
+           metadata: Sp
+         }, Lp, Yp), (0, Op.j)(null, null, cp, {
+ ... (30 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L473-L488` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1155-L1156) · [Before (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L473-L488)

```diff
-       for (rD in DD.colors3Arrays) {
-         const zD = DD.colors3Arrays[rD].reduce(((DD, zD, wD) => (wD % 3 === 0 ? DD.push([zD]) : DD[DD.length - 1].push(zD), DD)), []).map((DD => ({
-           r: DD[0],
-           g: DD[1],
-           b: DD[2]
-         })));
-         sD.setColor3Array(rD, zD)
-       }
-       for (rD in DD.colors4) {
-         const zD = DD.colors4[rD];
-         sD.setColor4(rD, {
-           r: zD[0],
-           g: zD[1],
-           b: zD[2],
-           a: zD[3]
-         })
+       addMouseWheel() {
+         return this.add(new Ep), this
```

#### 63. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L490-L504` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1158-L1159) · [Before (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L490-L504)

```diff
-       for (rD in DD.colors4Arrays) {
-         const zD = DD.colors4Arrays[rD].reduce(((DD, zD, wD) => (wD % 4 === 0 ? DD.push([zD]) : DD[DD.length - 1].push(zD), DD)), []).map((DD => ({
-           r: DD[0],
-           g: DD[1],
-           b: DD[2],
-           a: DD[3]
-         })));
-         sD.setColor4Array(rD, zD)
-       }
-       for (rD in DD.vectors2) {
-         const zD = DD.vectors2[rD];
-         sD.setVector2(rD, {
-           x: zD[0],
-           y: zD[1]
-         })
+       addPointers() {
+         return this.add(new mp), this
```

#### 64. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L506-L512` → after: `L1161-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1161-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1161-L1162) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L506-L512)

```diff
-       for (rD in DD.vectors3) {
-         const zD = DD.vectors3[rD];
-         sD.setVector3(rD, {
-           x: zD[0],
-           y: zD[1],
-           z: zD[2]
-         })
+       addKeyboard() {
+         return this.add(new qp), this
```

#### 65. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L514-L521` → after: `L1164-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1164-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1164-L1220) · [Before (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L514-L521)

```diff
-       for (rD in DD.vectors4) {
-         const zD = DD.vectors4[rD];
-         sD.setVector4(rD, {
-           x: zD[0],
-           y: zD[1],
-           z: zD[2],
-           w: zD[3]
-         })
+     }(Xp = Jp.prototype).addVRDeviceOrientation ?? (Xp.addVRDeviceOrientation = (0, Qp.k)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (lp = Jp.prototype).addGamepad ?? (lp.addGamepad = (0, Qp.k)("ArcRotateCameraInputsManager", "addGamepad"));
+     var Bp = cp(37368),
+       Np = cp(40430),
+       Tp = cp(40432);
+     class fp extends Np.d {
+       constructor(pp, ip, cp) {
+         super(pp, ip, cp), this.input = new Tp.c({
+           pan: (pp, ip) => {
+             this.panAccumulatedPixels.x += pp, this.panAccumulatedPixels.y += ip
+           },
+           rotate: (pp, ip) => {
+             this.rotationAccumulatedPixels.x += pp, this.rotationAccumulatedPixels.y += ip
+           },
+           zoom: pp => {
+             this.zoomAccumulatedPixels += pp
+           }
+ ... (41 more added lines; see GitHub link above)
```

#### 66. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L548-L561` → after: `L1223-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1223-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1223-L1225) · [Before (L548-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L548-L561)

```diff
-     async function OD(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const pD = this?.SnippetUrl ?? hD.SnippetUrl;
-       return await new Promise(((sD, KD) => {
-         const rD = new gD.e;
-         rD.addEventListener("readystatechange", (() => {
-           if (4 == rD.readyState)
-             if (200 == rD.status) {
-               const pD = JSON.parse(JSON.parse(rD.responseText).jsonPayload),
-                 KD = nD(JSON.parse(pD.shaderMaterial), zD || AD.d.LastCreatedScene, wD);
-               KD.snippetId = DD, sD(KD)
-             } else KD("Unable to load the snippet " + DD)
-         })), rD.open("GET", pD + "/" + DD.replace(/#/g, "/")), rD.send()
-       }))
+ 
+     function bp(pp, ip) {
+       return isNaN(pp) ? ip : pp
```

#### 67. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L563-L565` → after: `L1227-L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L1227-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L1227-L2232) · [Before (L563-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L563-L565)

```diff
-     hD.SnippetUrl = "https://snippet.babylonjs.com";
-     const JD = OD;
-     let ED = !1;
+     let hp = (() => {
+         var pp;
+         let ip, cp, Lp, Dp, Ap, yp, Up, dp, jp, kp, mp, Rp, qp, Mp, Cp, Ep, Xp, lp, Qp, Bp, Np, Tp, hp, ap, np, Fp, gp, Gp, rp = Hp.f,
+           Zp = [],
+           zp = [],
+           sp = [],
+           Kp = [],
+           Vp = [],
+           ii = [],
+           ci = [],
+           Oi = [],
+           oi = [],
+           Ii = [],
+           Si = [],
+           xi = [],
+           Li = [],
+ ... (990 more added lines; see GitHub link above)
```

#### 68. `bundles/bloxd.io/chunks/js/264.js` (Changed code · before: `L568` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6R2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-ec8022d3c08d93fa304729ee6ade2d1dd502f0713eb414e0053a62dcc9dba7a6) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/264.js#L2235) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/264.js#L568)

```diff
-       ED || (ED = !0, hD.Parse = nD, hD.ParseFromFileAsync = MD, hD.ParseFromSnippetAsync = OD, hD.CreateFromSnippetAsync = JD, (0, BD.i)("BABYLON.ShaderMaterial", hD))
+       Ap || (Ap = !0, Lp.b.AddNodeConstructor("Light_Type_3", ((pp, ip) => () => new Dp(pp, Ip.o.Zero(), ip))), (0, Yp.g)("BABYLON.HemisphericLight", Dp))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/265.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/265.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89)

#### 1. `bundles/bloxd.io/chunks/js/265.js` (Changed code · before: `L5-L27` → after: `L4-L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-2513b1cc1d9db41c2cc9f242978109d517153cb59e523448e2c9587cf0c7bc89) · [After (L4-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/265.js#L4-L2730) · [Before (L5-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/265.js#L5-L27)

```diff
-   40424: (DD, zD, wD) => {
-     wD.r(zD), wD.d(zD, {
-       FirebaseError: () => pD.d,
-       SDK_VERSION: () => pD.e,
-       _DEFAULT_ENTRY_NAME: () => pD.h,
-       ApD: () => pD.k,
-       _addOrOverwriteComponent: () => pD.m,
-       _apps: () => pD.p,
-       _clearComponents: () => pD.q,
-       _components: () => pD.r,
-       _getProvider: () => pD.v,
-       _registerComponent: () => pD.z,
-       _removeServiceInstance: () => pD.C,
-       deleteApp: () => pD.F,
-       getApp: () => pD.K,
-       getApps: () => pD.I,
- ... (7 more removed lines; see GitHub link above)
+   40562: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => op
+     });
+     var Op = cp(40217);
+ 
+     function op(pp) {
+       return class extends pp {
+         constructor() {
+           super(...arguments);
+           const pp = new.target;
+           if (!pp[Symbol.metadata]) {
+             const ip = Object.getPrototypeOf(pp)?.[Symbol.metadata];
+             pp[Symbol.metadata] = ip ? Object.create(ip) : {}
+           }
+           const ip = (0, Op.c)(pp[Symbol.metadata]);
+ ... (2711 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/266.js` (tz47m9.2cb7e113 → sn3sfj.2522680a)

- **File**: `bundles/bloxd.io/chunks/js/266.js` (84 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e)

#### 1. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L5` → after: `L4-L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L4-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L4-L296) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L5)

```diff
-   40442: (DD, zD, wD) => {
+   40489: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Op
+     });
+     class Op {
+       constructor(pp, ip, cp) {
+         this.bu = pp, this.bv = ip, this.distance = cp, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+       }
+     }
+   },
+   40504: (pp, ip, cp) => {
+     cp.d(ip, {
+       d: () => Sp
+     });
+     var Op = cp(37329),
+       op = cp(37320),
+ ... (277 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L24-L30` → after: `L300-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L300-L301) · [Before (L24-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L24-L30)

```diff
-       j: () => LD,
-       n: () => rD,
-       p: () => ZD,
-       r: () => jD,
-       u: () => PD,
-       y: () => bD,
-       z: () => AD
+       i: () => xp,
+       k: () => Sp
```

#### 3. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L32-L37` → after: `L303-L385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L303-L385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L303-L385) · [Before (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L32-L37)

```diff
-     const pD = function(DD) {
-         const zD = [];
-         let wD = 0;
-         for (let pD = 0; pD < DD.length; pD++) {
-           let sD = DD.charCodeAt(pD);
-           sD < 128 ? zD[wD++] = sD : sD < 2048 ? (zD[wD++] = sD >> 6 | 192, zD[wD++] = 63 & sD | 128) : 55296 === (64512 & sD) && pD + 1 < DD.length && 56320 === (64512 & DD.charCodeAt(pD + 1)) ? (sD = 65536 + ((1023 & sD) << 10) + (1023 & DD.charCodeAt(++pD)), zD[wD++] = sD >> 1 … [truncated]
+     var Op = cp(40352),
+       op = cp(37320);
+ 
+     function Ip(pp) {
+       -1 === pp.indexOf("vClipPlane") && pp.push("vClipPlane"), -1 === pp.indexOf("vClipPlane2") && pp.push("vClipPlane2"), -1 === pp.indexOf("vClipPlane3") && pp.push("vClipPlane3"), -1 === pp.indexOf("vClipPlane4") && pp.push("vClipPlane4"), -1 === pp.indexOf("vClipPlane5") &&  … [truncated]
+     }
+ 
+     function Sp(pp, ip, cp) {
+       const Op = !!(pp.clipPlane ?? ip.clipPlane),
+         op = !!(pp.clipPlane2 ?? ip.clipPlane2),
+         Ip = !!(pp.clipPlane3 ?? ip.clipPlane3),
+         Sp = !!(pp.clipPlane4 ?? ip.clipPlane4),
+         xp = !!(pp.clipPlane5 ?? ip.clipPlane5),
+         Lp = !!(pp.clipPlane6 ?? ip.clipPlane6);
+       Op && cp.push("#define CLIPPLANE"), op && cp.push("#define CLIPPLANE2"), Ip && cp.push("#define CLIPPLANE3"), Sp && cp.push("#define CLIPPLANE4"), xp && cp.push("#define CLIPPLANE5"), Lp && cp.push("#define CLIPPLANE6")
+     }
+ ... (67 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L40-L69` → after: `L388-L960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L388-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L388-L960) · [Before (L40-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L40-L69)

```diff
-       },
-       sD = {
-         byteToCharMap_: null,
-         charToByteMap_: null,
-         byteToCharMapWebSafe_: null,
-         charToByteMapWebSafe_: null,
-         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
-         get ENCODED_VALS() {
-           return this.ENCODED_VALS_BASE + "+/="
-         },
-         get ENCODED_VALS_WEBSAFE() {
-           return this.ENCODED_VALS_BASE + "-_."
-         },
-         HAS_NATIVE_SUPPORT: "function" === typeof atob,
-         encodeByteArray(DD, zD) {
-           if (!Array.isArray(DD)) throw Error("encodeByteArray takes an array as a parameter");
- ... (14 more removed lines; see GitHub link above)
+       }
+     }
+   },
+   40476: (pp, ip, cp) => {
+     cp.d(ip, {
+       b: () => tp
+     });
+     var Op = cp(40203),
+       op = cp(40210),
+       Ip = cp(40304),
+       Sp = cp(37349),
+       xp = cp(37345),
+       Lp = cp(40481),
+       Yp = cp(40332),
+       Dp = cp(38905),
+       Ap = cp(37989),
+ ... (557 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L71-L77` → after: `L962-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L962-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L962-L999) · [Before (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L71-L77)

```diff
-           return pD.join("")
-         },
-         encodeString(DD, zD) {
-           return this.HAS_NATIVE_SUPPORT && !zD ? btoa(DD) : this.encodeByteArray(pD(DD), zD)
-         },
-         decodeString(DD, zD) {
-           return this.HAS_NATIVE_SUPPORT && !zD ? atob(DD) : function(DD) {
+           if (0 !== this.depthFunction) {
+             const pp = this._scene.gy();
+             this._cachedDepthFunctionState = pp.getDepthFunction() || 0, pp.setDepthFunction(this.depthFunction)
+           }
+         }
+         unbind() {
+           if (this._scene.getSceneUniformBuffer().unbindEffect(), this._onUnBindObservable && this._onUnBindObservable.notifyObservers(this), 0 !== this.depthFunction) {
+             this._scene.gy().setDepthFunction(this._cachedDepthFunctionState)
+           }
+           if (this.disableDepthWrite) {
+             this._scene.gy().setDepthWrite(this._cachedDepthWriteState)
+           }
+           if (this.disableColorWrite) {
+             this._scene.gy().setColorWrite(this._cachedColorWriteState)
+           }
+         }
+ ... (22 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L79-L94` → after: `L1001-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1001-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1001-L1003) · [Before (L79-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L79-L94)

```diff
-             let wD = 0,
-               pD = 0;
-             for (; wD < DD.length;) {
-               const sD = DD[wD++];
-               if (sD < 128) zD[pD++] = String.fromCharCode(sD);
-               else if (sD > 191 && sD < 224) {
-                 const KD = DD[wD++];
-                 zD[pD++] = String.fromCharCode((31 & sD) << 6 | 63 & KD)
-               } else if (sD > 239 && sD < 365) {
-                 const KD = ((7 & sD) << 18 | (63 & DD[wD++]) << 12 | (63 & DD[wD++]) << 6 | 63 & DD[wD++]) - 65536;
-                 zD[pD++] = String.fromCharCode(55296 + (KD >> 10)), zD[pD++] = String.fromCharCode(56320 + (1023 & KD))
-               } else {
-                 const KD = DD[wD++],
-                   rD = DD[wD++];
-                 zD[pD++] = String.fromCharCode((15 & sD) << 12 | (63 & KD) << 6 | 63 & rD)
-               }
+             for (const ip in this.meshMap) {
+               const cp = this.meshMap[ip];
+               cp && pp.push(cp)
```

#### 7. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L96-L116` → after: `L1005-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1005-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1005-L1026) · [Before (L96-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L96-L116)

```diff
-             return zD.join("")
-           }(this.decodeStringToByteArray(DD, zD))
-         },
-         decodeStringToByteArray(DD, zD) {
-           this.init_();
-           const wD = zD ? this.charToByteMapWebSafe_ : this.charToByteMap_,
-             pD = [];
-           for (let sD = 0; sD < DD.length;) {
-             const zD = wD[DD.charAt(sD++)],
-               rD = sD < DD.length ? wD[DD.charAt(sD)] : 0;
-             ++sD;
-             const LD = sD < DD.length ? wD[DD.charAt(sD)] : 64;
-             ++sD;
-             const cD = sD < DD.length ? wD[DD.charAt(sD)] : 64;
-             if (++sD, null == zD || null == rD || null == LD || null == cD) throw new KD;
-             const gD = zD << 2 | rD >> 4;
- ... (5 more removed lines; see GitHub link above)
+             return pp
+           }
+           return this._scene.meshes.filter((pp => pp.material === this))
+         }
+         forceCompilation(pp, ip, cp, Op) {
+           const op = {
+               clipPlane: !1,
+               useInstances: !1,
+               ...cp
+             },
+             Ip = this.Gl(),
+             Sp = this.allowShaderHotSwapping;
+           this.allowShaderHotSwapping = !1;
+           const xp = () => {
+             if (!this._scene || !this._scene.gy()) return;
+             const cp = Ip.clipPlane;
+ ... (6 more added lines; see GitHub link above)
```

#### 8. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L118` → after: `L1028-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1028-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1028-L1106) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L118)

```diff
-             }
+               cp && (this.allowShaderHotSwapping = Sp, Ip && Op && Op(Ip), ip && ip(this))
+             } else this.isReady() ? (this.allowShaderHotSwapping = Sp, ip && ip(this)) : setTimeout(xp, 16);
+             op.clipPlane && (Ip.clipPlane = cp)
+           };
+           xp()
+         }
+         async forceCompilationAsync(pp, ip) {
+           return await new Promise(((cp, Op) => {
+             this.forceCompilation(pp, (() => {
+               cp()
+             }), ip, (pp => {
+               Op(pp)
+             }))
+           }))
+         }
+         ocp(ip) {
+ ... (63 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L120-L125` → after: `L1108-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1108-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1108-L1116) · [Before (L120-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L120-L125)

```diff
-           return pD
-         },
-         init_() {
-           if (!this.byteToCharMap_) {
-             this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
-             for (let DD = 0; DD < this.ENCODED_VALS.length; DD++) this.byteToCharMap_[DD] = this.ENCODED_VALS.charAt(DD), this.charToByteMap_[this.byteToCharMap_[DD]] = DD, this.byteToCharMapWebSafe_[DD] = this.ENCODED_VALS_WEBSAFE.charAt(DD), this.charToByteMapWebSafe_[this.byte … [truncated]
+         }
+         setPrePassRenderer(pp) {
+           return !1
+         }
+         dispose(pp, ip, cp) {
+           const Op = this.Gl();
+           if (Op.stopAnimation(this), Op.freeProcessedMaterials(), Op.removeMaterial(this), this._eventInfo.forceDisposeTextures = ip, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
+             const pp = this._parentContainer.materials.indexOf(this);
+             pp > -1 && this._parentContainer.materials.splice(pp, 1), this._parentContainer = null
```

#### 10. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L128-L144` → after: `L1129-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1129-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1129-L1144) · [Before (L128-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L128-L144)

```diff
-       };
-     class KD extends Error {
-       constructor() {
-         super(...arguments), this.name = "DecodeBase64StringError"
-       }
-     }
-     const rD = function(DD) {
-         return function(DD) {
-           const zD = pD(DD);
-           return sD.encodeByteArray(zD, !0)
-         }(DD).replace(/\./g, "")
-       },
-       LD = function(DD) {
-         try {
-           return sD.decodeString(DD, !0)
-         } catch (zD) {
- ... (1 more removed lines; see GitHub link above)
+         _disposeMeshResources(pp) {
+           if (!pp) return;
+           const ip = pp.geometry,
+             cp = pp._internalAbstractMeshDataInfo._materialForRenderPass;
+           if (this._storeEffectOnSubMeshes) {
+             if (pp.Am && cp)
+               for (const Op of pp.Am) {
+                 const pp = Op._drawWrappers;
+                 for (let op = 0; op < pp.length; op++) {
+                   const Ip = pp[op]?.effect;
+                   if (!Ip) continue;
+                   cp[op] === this && (ip?._releaseVertexArrayObject(Ip), Op._removeDrawWrapper(op, !0, !0))
+                 }
+               }
+           } else ip?._releaseVertexArrayObject(this._drawWrapper.effect);
+           pp.material !== this || pp.aop || (pp.material = null)
```

#### 11. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L146-L164` → after: `L1146-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1146-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1146-L1173) · [Before (L146-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L146-L164)

```diff
-         return null
-       };
-     const cD = () => function() {
-         if ("undefined" !== typeof self) return self;
-         if ("undefined" !== typeof window) return window;
-         if ("undefined" !== typeof wD.g) return wD.g;
-         throw new Error("Unable to locate global object.")
-       }().__FIREBASE_DEFAULTS__,
-       gD = () => {
-         try {
-           return cD() || (() => {
-             if ("undefined" === typeof process) return
-           })() || (() => {
-             if ("undefined" === typeof document) return;
-             let DD;
-             try {
- ... (3 more removed lines; see GitHub link above)
+         serialize() {
+           const pp = Wp.c.Serialize(this);
+           return pp.stencil = this.stencil.serialize(), pp.uniqueId = this.uniqueId, this._serializePlugins(pp), pp
+         }
+         _serializePlugins(pp) {
+           if (pp.plugins = {}, this.pluginManager)
+             for (const ip of this.pluginManager._plugins) ip.doNotSerialize || (pp.plugins[ip.getClassName()] = ip.serialize())
+         }
+         static ParseAlphaMode(pp, ip) {
+           void 0 !== pp._alphaMode ? ip._alphaMode = Array.isArray(pp._alphaMode) ? [...pp._alphaMode] : [pp._alphaMode] : void 0 !== pp.alphaMode ? ip._alphaMode = Array.isArray(pp.alphaMode) ? [...pp.alphaMode] : [pp.alphaMode] : ip._alphaMode = [2]
+         }
+         static Parse(ip, cp, Op) {
+           if (ip.customType) {
+             if ("BABYLON.PBRMaterial" === ip.customType && ip.overloadedAlbedo && (ip.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Dp.e.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
+           } else ip.customType = "BABYLON.StandardMaterial";
+           const op = Ip.i.Instantiate(ip.customType).Parse(ip, cp, Op);
+ ... (12 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L172-L184` → after: `L1176-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1176-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1176-L1563) · [Before (L172-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L172-L184)

```diff
-       },
-       RD = DD => {
-         var zD, wD;
-         return null === (wD = null === (zD = gD()) || void 0 === zD ? void 0 : zD.emulatorHosts) || void 0 === wD ? void 0 : wD[DD]
-       },
-       AD = () => {
-         var DD;
-         return null === (DD = gD()) || void 0 === DD ? void 0 : DD.config
-       },
-       UD = DD => {
-         var zD;
-         return null === (zD = gD()) || void 0 === zD ? void 0 : zD[`_${DD}`]
-       };
+       }, (() => {
+         const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         ip = [(0, op.K)()], cp = [(0, op.K)()], vp = [(0, op.K)()], tp = [(0, op.K)()], Hp = [(0, op.K)()], dp = [(0, op.K)()], ep = [(0, op.K)()], jp = [(0, op.K)("alpha")], kp = [(0, op.K)("backFaceCulling")], mp = [(0, op.K)("textureRepetitionMode")], Rp = [(0, op.K)("textureR … [truncated]
+           kind: "getter",
+           name: "pointsCloud",
+           static: !1,
+           private: !1,
+           access: {
+             has: pp => "pointsCloud" in pp,
+             get: pp => pp.pointsCloud
+           },
+           metadata: Ip
+         }, null, Gp), (0, Op.j)(pp, null, ap, {
+           kind: "getter",
+           name: "fillMode",
+           static: !1,
+ ... (372 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L186-L189` → after: `L1565-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1565-L1566) · [Before (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L186-L189)

```diff
-       constructor() {
-         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((DD, zD) => {
-           this.resolve = DD, this.reject = zD
-         }))
+       static get DiffuseTextureEnabled() {
+         return this._DiffuseTextureEnabled
```

#### 14. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L191-L194` → after: `L1568-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1568-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1568-L1713) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L191-L194)

```diff
-       wrapCallback(DD) {
-         return (zD, wD) => {
-           zD ? this.reject(zD) : this.resolve(wD), "function" === typeof DD && (this.promise.catch((() => {})), 1 === DD.length ? DD(zD) : DD(zD, wD))
-         }
+       static set DiffuseTextureEnabled(pp) {
+         this._DiffuseTextureEnabled !== pp && (this._DiffuseTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get BaseWeightTextureEnabled() {
+         return this._BaseWeightTextureEnabled
+       }
+       static set BaseWeightTextureEnabled(pp) {
+         this._BaseWeightTextureEnabled !== pp && (this._BaseWeightTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get BaseDiffuseRoughnessTextureEnabled() {
+         return this._BaseDiffuseRoughnessTextureEnabled
+       }
+       static set BaseDiffuseRoughnessTextureEnabled(pp) {
+         this._BaseDiffuseRoughnessTextureEnabled !== pp && (this._BaseDiffuseRoughnessTextureEnabled = pp, Op.b.MarkAllMaterialsAsDirty(1))
+       }
+       static get DetailTextureEnabled() {
+ ... (130 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L198-L199` → after: `L1786-L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1786-L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1786-L1800) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L198-L199)

```diff
-     function ID() {
-       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
+     function Wp(pp, ip, cp) {
+       let Ip = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const Sp = cp.NUM_MORPH_INFLUENCERS;
+       if (Sp > 0 && op.e.LastCreatedEngine) {
+         const xp = op.e.LastCreatedEngine.getCaps().maxVertexAttribs,
+           Lp = ip.morphTargetManager;
+         if (Lp?.isUsingTextureForTargets) return;
+         const Yp = Lp && Lp.supportsPositions && Ip,
+           Dp = Lp && Lp.supportsNormals && cp.NORMAL,
+           Ap = Lp && Lp.supportsTangents && cp.TANGENT,
+           Pp = Lp && Lp.supportsUVs && cp.UV1,
+           Wp = Lp && Lp.supportsUV2s && cp.UV2,
+           yp = Lp && Lp.supportsColors && cp.VERTEXCOLOR;
+         for (let cp = 0; cp < Sp; cp++) Yp && pp.push("position" + cp), Dp && pp.push("normal" + cp), Ap && pp.push("tangent" + cp), Pp && pp.push("uv_" + cp), Wp && pp.push("uv2_" + cp), yp && pp.push("color" + cp), pp.length > xp && Op.e.Error("Cannot add more vertex attributes … [truncated]
+       }
```

#### 16. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L202-L203` → after: `L1803-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1803-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1803-L1805) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L202-L203)

```diff
-     function BD() {
-       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ID())
+     function yp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       pp.push("world0"), pp.push("world1"), pp.push("world2"), pp.push("world3"), ip && (pp.push("previousWorld0"), pp.push("previousWorld1"), pp.push("previousWorld2"), pp.push("previousWorld3"))
```

#### 17. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L206-L208` → after: `L1808-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1808-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1808-L1810) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L206-L208)

```diff
-     function GD() {
-       const DD = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
-       return "object" === typeof DD && void 0 !== DD.id
+     function Up(pp, ip) {
+       const cp = pp.morphTargetManager;
+       pp && cp && ip.setFloatArray("morphTargetInfluences", cp.influences)
```

#### 18. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L211-L212` → after: `L1813-L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1813-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1813-L1814) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L211-L212)

```diff
-     function hD() {
-       return "object" === typeof navigator && "ReactNative" === navigator.product
+     function wp(pp, ip) {
+       ip.bindToEffect(pp, "Scene")
```

#### 19. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L215-L217` → after: `L1817-L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1817-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1817-L1845) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L215-L217)

```diff
-     function nD() {
-       const DD = ID();
-       return DD.indexOf("MSIE ") >= 0 || DD.indexOf("Trident/") >= 0
+     function vp(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Lp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Yp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         Dp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         Ap = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+         Pp = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
+       if (pp.texturesEnabled && op && xp.c.ReflectionTextureEnabled) {
+         if (cp.I3("reflectionMatrix", op.getReflectionTextureMatrix()), cp.updateFloat2("vReflectionInfos", op.level * pp.iblIntensity, Pp), Lp && op.boundingBoxSize) {
+           const pp = op;
+           cp.updateVector3("vReflectionPosition", pp.boundingBoxPosition), cp.updateVector3("vReflectionSize", pp.boundingBoxSize)
+         }
+         if (Ip) {
+           const pp = op.getSize().width;
+ ... (13 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L220-L224` → after: `L1848-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1848-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1848-L1854) · [Before (L220-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L220-L224)

```diff
-     function MD() {
-       try {
-         return "object" === typeof indexedDB
-       } catch (DD) {
-         return !1
+     function tp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       if (Op && xp.c.ReflectionTextureEnabled) {
+         ip.LODBASEDMICROSFURACE ? cp.setTexture("reflectionSampler", Op) : (cp.setTexture("reflectionSampler", Op._lodTextureMid || Op), cp.setTexture("reflectionSamplerLow", Op._lodTextureLow || Op), cp.setTexture("reflectionSamplerHigh", Op._lodTextureHigh || Op)), ip.USEIRRADI … [truncated]
+         const Ip = pp.iblCdfGenerator;
+         op && Ip && cp.setTexture("icdfSampler", Ip.getIcdfTexture())
```

#### 21. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L228-L245` → after: `L1858-L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1858-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1858-L1859) · [Before (L228-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L228-L245)

```diff
-     function OD() {
-       return new Promise(((DD, zD) => {
-         try {
-           let wD = !0;
-           const pD = "validate-browser-context-for-indexeddb-analytics-module",
-             sD = self.indexedDB.open(pD);
-           sD.onsuccess = () => {
-             sD.result.close(), wD || self.indexedDB.deleteDatabase(pD), DD(!0)
-           }, sD.onupgradeneeded = () => {
-             wD = !1
-           }, sD.onerror = () => {
-             var DD;
-             zD((null === (DD = sD.error) || void 0 === DD ? void 0 : DD.message) || "")
-           }
-         } catch (wD) {
-           zD(wD)
- ... (2 more removed lines; see GitHub link above)
+     function Hp(pp, ip, cp) {
+       ip._needUVs = !0, ip[cp] = !0, pp.optimizeUVAllocation && pp.getTextureMatrix().isIdentityAs3x2() ? (ip[cp + "DIRECTUV"] = pp.coordinatesIndex + 1, ip["MAINUV" + (pp.coordinatesIndex + 1)] = !0) : ip[cp + "DIRECTUV"] = 0
```

#### 22. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L248-L272` → after: `L1862-L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1862-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1862-L1864) · [Before (L248-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L248-L272)

```diff
-     function JD() {
-       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
-     }
-     class ED extends Error {
-       constructor(DD, zD, wD) {
-         super(zD), this.code = DD, this.customData = wD, this.name = "FirebaseError", Object.setPrototypeOf(this, ED.prototype), Error.captureStackTrace && Error.captureStackTrace(this, QD.prototype.create)
-       }
-     }
-     class QD {
-       constructor(DD, zD, wD) {
-         this.service = DD, this.serviceName = zD, this.errors = wD
-       }
-       create(DD) {
-         const zD = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
-           wD = `${this.service}/${DD}`,
-           pD = this.errors[DD],
- ... (9 more removed lines; see GitHub link above)
+     function dp(pp, ip, cp) {
+       const Op = pp.getTextureMatrix();
+       ip.I3(cp + "Matrix", Op)
```

#### 23. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L276-L279` → after: `L1867-L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1867-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1867-L1868) · [Before (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L276-L279)

```diff
-     function VD(DD) {
-       for (const zD in DD)
-         if (Object.prototype.hasOwnProperty.call(DD, zD)) return !1;
-       return !0
+     function ep(pp, ip, cp) {
+       cp.BAKED_VERTEX_ANIMATION_TEXTURE && cp.INSTANCES && pp.push("bakedVertexAnimationSettingsInstanced")
```

#### 24. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L282-L296` → after: `L1871-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1871-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1871-L1882) · [Before (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L282-L296)

```diff
-     function PD(DD, zD) {
-       if (DD === zD) return !0;
-       const wD = Object.keys(DD),
-         pD = Object.keys(zD);
-       for (const sD of wD) {
-         if (!pD.includes(sD)) return !1;
-         const wD = DD[sD],
-           KD = zD[sD];
-         if (CD(wD) && CD(KD)) {
-           if (!PD(wD, KD)) return !1
-         } else if (wD !== KD) return !1
-       }
-       for (const sD of pD)
-         if (!wD.includes(sD)) return !1;
-       return !0
+     function jp(pp, ip, cp) {
+       var Op;
+       if (ip && pp && (pp.computeBonesUsingShaders && ip._bonesComputationForcedToCPU && (pp.computeBonesUsingShaders = !1), pp.useBones && pp.computeBonesUsingShaders && pp.skeleton)) {
+         const op = pp.skeleton;
+         if (op.isUsingTextureForMatrices && ip.getUniformIndex("boneTextureInfo") > -1) {
+           const cp = op.getTransformMatrixTexture(pp);
+           ip.setTexture("boneSampler", cp), ip.setFloat2("boneTextureInfo", op._textureWidth, op._textureHeight)
+         } else {
+           const Ip = op.getTransformMatrices(pp);
+           Ip && (ip.setMatrices("mBones", Ip), cp && pp.Gl().prePassRenderer && pp.Gl().prePassRenderer.getIndex(2) && (cp.previousBones[pp.uniqueId] || (cp.previousBones[pp.uniqueId] = Ip.slice()), ip.setMatrices("mPreviousBones", cp.previousBones[pp.uniqueId]), Op = Ip, cp.prev … [truncated]
+         }
+       }
```

#### 25. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L299-L300` → after: `L1885-L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1885-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1885-L1887) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L299-L300)

```diff
-     function CD(DD) {
-       return null !== DD && "object" === typeof DD
+     function kp(pp, ip, cp, Op, op) {
+       let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+       pp._bindLight(ip, cp, Op, op, Ip)
```

#### 26. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L303-L308` → after: `L1892-L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1892-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1892-L1897) · [Before (L303-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L303-L308)

```diff
-     function xD(DD) {
-       const zD = [];
-       for (const [wD, pD] of Object.entries(DD)) Array.isArray(pD) ? pD.forEach((DD => {
-         zD.push(encodeURIComponent(wD) + "=" + encodeURIComponent(DD))
-       })) : zD.push(encodeURIComponent(wD) + "=" + encodeURIComponent(pD));
-       return zD.length ? "&" + zD.join("&") : ""
+     function qp(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
+       const Ip = Math.min(ip.lightSources.length, op);
+       for (let Sp = 0; Sp < Ip; Sp++) {
+         kp(ip.lightSources[Sp], Sp, pp, cp, "boolean" === typeof Op ? Op : Op.SPECULARTERM, ip.receiveShadows)
+       }
```

#### 27. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L311-L318` → after: `L1900-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1900-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1900-L1901) · [Before (L311-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L311-L318)

```diff
-     function TD(DD) {
-       const zD = {};
-       return DD.replace(/^\?/, "").split("&").forEach((DD => {
-         if (DD) {
-           const [wD, pD] = DD.split("=");
-           zD[decodeURIComponent(wD)] = decodeURIComponent(pD)
-         }
-       })), zD
+     function Mp(pp, ip, cp, Op) {
+       cp.NUM_BONE_INFLUENCERS > 0 && (Op.addCPUSkinningFallback(0, ip), pp.push("matricesIndices"), pp.push("matricesWeights"), cp.NUM_BONE_INFLUENCERS > 4 && (pp.push("matricesIndicesExtra"), pp.push("matricesWeightsExtra")))
```

#### 28. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L321-L325` → after: `L1904-L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1904-L1905) · [Before (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L321-L325)

```diff
-     function bD(DD) {
-       const zD = DD.indexOf("?");
-       if (!zD) return "";
-       const wD = DD.indexOf("#", zD);
-       return DD.substring(zD, wD > 0 ? wD : void 0)
+     function Cp(pp, ip) {
+       (ip.INSTANCES || ip.THIN_INSTANCES) && yp(pp, !!ip.PREPASS_VELOCITY), ip.INSTANCESCOLOR && pp.push("instanceColor")
```

#### 29. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L329-L330` → after: `L1909-L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1909-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1909-L1913) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L329-L330)

```diff
-       const wD = new dD(DD, zD);
-       return wD.subscribe.bind(wD)
+       let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+         Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         op = 0;
+       for (let Ip = 0; Ip < cp && pp["LIGHT" + Ip]; Ip++) Ip > 0 && (op = Op + Ip, ip.addFallback(op, "LIGHT" + Ip)), pp.SHADOWS || (pp["SHADOW" + Ip] && ip.addFallback(Op, "SHADOW" + Ip), pp["SHADOWPCF" + Ip] && ip.addFallback(Op, "SHADOWPCF" + Ip), pp["SHADOWPCSS" + Ip] && ip.a … [truncated]
+       return op
```

#### 30. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L332-L394` → after: `L1915-L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1915-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1915-L1927) · [Before (L332-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L332-L394)

```diff
-     class dD {
-       constructor(DD, zD) {
-         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = zD, this.task.then((() => {
-           DD(this)
-         })).catch((DD => {
-           this.error(DD)
-         }))
-       }
-       next(DD) {
-         this.forEachObserver((zD => {
-           zD.next(DD)
-         }))
-       }
-       error(DD) {
-         this.forEachObserver((zD => {
-           zD.error(DD)
- ... (47 more removed lines; see GitHub link above)
+ 
+     function Xp(pp, ip, cp, Op, op, Ip, Sp) {
+       let xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         Yp = arguments.length > 9 ? arguments[9] : void 0,
+         Dp = arguments.length > 10 ? arguments[10] : void 0;
+       if (Sp._areMiscDirty) {
+         Sp.LOGARITHMICDEPTH = cp, Sp.POINTSIZE = Op, Sp.FOG = op && function(pp, ip) {
+           return ip.fogEnabled && pp.applyFog && 0 !== ip.fogMode
+         }(pp, ip), Sp.NONUNIFORMSCALING = pp.nonUniformScaling, Sp.ALPHATEST = Ip, Sp.DECAL_AFTER_DETAIL = xp, Sp.USE_VERTEX_PULLING = Lp, Sp.RIGHT_HANDED = ip.useRightHandedSystem;
+         const Ap = Lp ? Yp?.geometry?.getIndexBuffer() : null,
+           Pp = !!Yp && Yp.isUnIndexed;
+         Sp.VERTEX_PULLING_USE_INDEX_BUFFER = !!Ap && !Pp, Sp.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Ap || Pp) && Ap.is32Bits, Sp.VERTEXOUTPUT_INVARIANT = !!Dp
```

#### 31. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L398-L402` → after: `L1931-L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1931-L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1931-L1939) · [Before (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L398-L402)

```diff
-     function SD() {}
-     const iD = 1e3,
-       lD = 2,
-       WD = 144e5,
-       ND = .5;
+     function lp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!pp.lightsEnabled || Op) return !0;
+       const op = ip.lightSources,
+         Ip = Math.min(op.length, cp);
+       for (let Sp = 0; Sp < Ip; Sp++)
+         if (!op[Sp].areLightTexturesReady()) return !1;
+       return !0
+     }
```

#### 32. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L404-L408` → after: `L1941-L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1941-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1941-L1973) · [Before (L404-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L404-L408)

```diff
-     function ZD(DD) {
-       let zD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : lD;
-       const wD = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iD) * Math.pow(zD, DD),
-         pD = Math.round(ND * wD * (Math.random() - .5) * 2);
-       return Math.min(WD, wD + pD)
+     function Qp(pp, ip, cp, op) {
+       let Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
+         Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!cp._areLightsDirty) return cp._needNormals;
+       const xp = Ip;
+       Ip = function(pp, ip) {
+         const cp = pp.gy().getCaps().maxUniformBuffersPerShaderStage;
+         if (null == cp) return ip;
+         const Op = Math.max(cp - mp, 1);
+         return Math.min(ip, Op)
+       }(pp, Ip);
+       let Lp = 0;
+       const Yp = {
+         needNormals: cp._needNormals,
+         needRebuild: !1,
+         lightmapMode: !1,
+ ... (17 more added lines; see GitHub link above)
```

#### 33. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L411-L412` → after: `L1976-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L1976-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L1976-L2014) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L411-L412)

```diff
-     function yD(DD) {
-       return DD && DD._delegate ? DD._delegate : DD
+     function Jp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
+         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (ip && xp.c.ReflectionTextureEnabled) {
+         if (!ip.isReadyOrNotBlocking()) return !1;
+         cp._needNormals = !0, cp.REFLECTION = !0, cp.GAMMAREFLECTION = ip.gammaSpace, cp.RGBDREFLECTION = ip.isRGBD, cp.LODINREFLECTIONALPHA = ip.lodLevelInAlpha, cp.LINEARSPECULARREFLECTION = ip.linearSpecularLOD, cp.USEIRRADIANCEMAP = !1, cp.LODBASEDMICROSFURACE = pp.gy().getCa … [truncated]
+         const Sp = pp.gy();
+         switch (Op && op > 0 ? (cp.NUM_SAMPLES = "" + op, Sp._features.needTypeSuffixInShaderConstants && (cp.NUM_SAMPLES = cp.NUM_SAMPLES + "u"), cp.REALTIME_FILTERING = !0, pp.iblCdfGenerator && (cp.IBL_CDF_FILTERING = !0)) : cp.REALTIME_FILTERING = !1, cp.INVERTCUBICMAP = 6 == … [truncated]
+           case 0:
+             cp.REFLECTIONMAP_EXPLICIT = !0;
+             break;
+           case 2:
+             cp.REFLECTIONMAP_PLANAR = !0;
+             break;
+           case 4:
+ ... (23 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L458-L468` → after: `L2017-L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2017-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2017-L2033) · [Before (L458-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L458-L468)

```diff
-     function ID(DD) {
-       return DD !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (LD || (LD = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(DD) ? function() {
-         for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
-         return DD.apply(hD(this), wD), GD(cD.get(this))
-       } : function() {
-         for (var zD = arguments.length, wD = new Array(zD), pD = 0; pD < zD; pD++) wD[pD] = arguments[pD];
-         return GD(DD.apply(hD(this), wD))
-       } : function(zD) {
-         for (var wD = arguments.length, pD = new Array(wD > 1 ? wD - 1 : 0), sD = 1; sD < wD; sD++) pD[sD - 1] = arguments[sD];
-         const KD = DD.call(hD(this), zD, ...pD);
-         return RD.set(KD, zD.sort ? zD.sort() : [zD]), GD(KD)
+     function Bp(pp, ip, cp, Op, op, Sp, xp) {
+       switch (xp.needNormals = !0, void 0 === op["LIGHT" + Op] && (xp.needRebuild = !0), op["LIGHT" + Op] = !0, op["SPOTLIGHT" + Op] = !1, op["HEMILIGHT" + Op] = !1, op["POINTLIGHT" + Op] = !1, op["DIRLIGHT" + Op] = !1, op["AREALIGHT" + Op] = !1, op["CLUSTLIGHT" + Op] = !1, cp.pr … [truncated]
+         case Ip.b.FALLOFF_GLTF:
+           op["LIGHT_FALLOFF_GLTF" + Op] = !0;
+           break;
+         case Ip.b.FALLOFF_PHYSICAL:
+           op["LIGHT_FALLOFF_PHYSICAL" + Op] = !0;
+           break;
+         case Ip.b.FALLOFF_STANDARD:
+           op["LIGHT_FALLOFF_STANDARD" + Op] = !0
+       }
+       if (Sp && !cp.specular.equalsFloats(0, 0, 0) && (xp.specularEnabled = !0), op["SHADOW" + Op] = !1, op["SHADOWCSM" + Op] = !1, op["SHADOWCSMDEBUG" + Op] = !1, op["SHADOWCSMNUM_CASCADES" + Op] = !1, op["SHADOWCSMUSESHADOWMAXZ" + Op] = !1, op["SHADOWCSMNOBLEND" + Op] = !1, op[ … [truncated]
+         const ip = cp.getShadowGenerator(pp.activeCamera) ?? cp.getShadowGenerator();
+         if (ip) {
+           const pp = ip.getShadowMap();
+           pp && pp.renderList && pp.renderList.length > 0 && (xp.shadowEnabled = !0, ip.prepareDefines(op, Op))
+ ... (1 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L472-L489` → after: `L2038-L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2038-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2038-L2052) · [Before (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L472-L489)

```diff
-     function BD(DD) {
-       return "function" === typeof DD ? ID(DD) : (DD instanceof IDBTransaction && function(DD) {
-         if (gD.has(DD)) return;
-         const zD = new Promise(((zD, wD) => {
-           const pD = () => {
-               DD.removeEventListener("complete", sD), DD.removeEventListener("error", KD), DD.removeEventListener("abort", KD)
-             },
-             sD = () => {
-               zD(), pD()
-             },
-             KD = () => {
-               wD(DD.error || new DOMException("AbortError", "AbortError")), pD()
-             };
-           DD.addEventListener("complete", sD), DD.addEventListener("error", KD), DD.addEventListener("abort", KD)
-         }));
-         gD.set(DD, zD)
- ... (2 more removed lines; see GitHub link above)
+     function Np(pp, ip, cp, Op, op) {
+       let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Lp = function(pp, ip) {
+           let cp = !1;
+           if (pp.activeCamera) {
+             const Op = ip.CAMERA_ORTHOGRAPHIC ? 1 : 0,
+               op = ip.CAMERA_PERSPECTIVE ? 1 : 0,
+               Ip = 1 === pp.activeCamera.mode ? 1 : 0,
+               Sp = 0 === pp.activeCamera.mode ? 1 : 0;
+             (Op ^ Ip || op ^ Sp) && (ip.CAMERA_ORTHOGRAPHIC = 1 === Ip, ip.CAMERA_PERSPECTIVE = 1 === Sp, cp = !0)
+           }
+           return cp
+         }(pp, Op);
+       !1 !== Ip && (Lp = (0, Sp.i)(cp, pp, Op)), Op.DEPTHPREPASS !== !ip.getColorWrite() && (Op.DEPTHPREPASS = !Op.DEPTHPREPASS, Lp = !0), Op.INSTANCES !== op && (Op.INSTANCES = op, Lp = !0), Op.THIN_INSTANCES !== xp && (Op.THIN_INSTANCES = xp, Lp = !0), Lp && Op.markAsUnprocesse … [truncated]
```

#### 36. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L492-L512` → after: `L2059-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2059-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2059-L2103) · [Before (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L492-L512)

```diff
-     function GD(DD) {
-       if (DD instanceof IDBRequest) return function(DD) {
-         const zD = new Promise(((zD, wD) => {
-           const pD = () => {
-               DD.removeEventListener("success", sD), DD.removeEventListener("error", KD)
-             },
-             sD = () => {
-               zD(GD(DD.result)), pD()
-             },
-             KD = () => {
-               wD(DD.error), pD()
-             };
-           DD.addEventListener("success", sD), DD.addEventListener("error", KD)
-         }));
-         return zD.then((zD => {
-           zD instanceof IDBCursor && cD.set(zD, DD)
- ... (5 more removed lines; see GitHub link above)
+     function ap(pp, ip, cp, op) {
+       let Ip = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+         xp = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       if (!ip._areAttributesDirty && ip._needNormals === ip._normals && ip._needUVs === ip._uvs) return !1;
+       ip._normals = ip._needNormals, ip._uvs = ip._needUVs, ip.NORMAL = ip._needNormals && pp.isVerticesDataPresent("normal"), ip._needNormals && pp.isVerticesDataPresent("tangent") && (ip.TANGENT = !0);
+       for (let Op = 1; Op <= 6; ++Op) ip["UV" + Op] = !!ip._needUVs && pp.isVerticesDataPresent(`uv${1===Op?"":Op}`);
+       if (cp) {
+         const cp = pp.useVertexColors && pp.isVerticesDataPresent("color");
+         ip.VERTEXCOLOR = cp, ip.VERTEXALPHA = pp.hasVertexAlpha && cp && Sp
+       }
+       return pp.isVerticesDataPresent("instanceColor") && (pp.fop || pp.hasThinInstances) && (ip.INSTANCESCOLOR = !0), op && function(pp, ip) {
+         if (pp.useBones && pp.computeBonesUsingShaders && pp.skeleton) {
+           ip.NUM_BONE_INFLUENCERS = pp.numBoneInfluencers;
+           const cp = void 0 !== ip.BONETEXTURE;
+           if (pp.skeleton.isUsingTextureForMatrices && cp) ip.BONETEXTURE = !0;
+ ... (29 more added lines; see GitHub link above)
```

#### 37. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L520-L553` → after: `L2107-L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2107-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2107-L2109) · [Before (L520-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L520-L553)

```diff
-       if (!(DD instanceof IDBDatabase) || zD in DD || "string" !== typeof zD) return;
-       if (OD.get(zD)) return OD.get(zD);
-       const wD = zD.replace(/FromIndex$/, ""),
-         pD = zD !== wD,
-         sD = MD.includes(wD);
-       if (!(wD in (pD ? IDBIndex : IDBObjectStore).prototype) || !sD && !nD.includes(wD)) return;
-       const KD = async function(DD) {
-         const zD = this.transaction(DD, sD ? "readwrite" : "readonly");
-         let KD = zD.store;
-         for (var rD = arguments.length, LD = new Array(rD > 1 ? rD - 1 : 0), cD = 1; cD < rD; cD++) LD[cD - 1] = arguments[cD];
-         return pD && (KD = KD.index(LD.shift())), (await Promise.all([KD[wD](...LD), sD && zD.done]))[0]
-       };
-       return OD.set(zD, KD), KD
-     }
-     fD = (DD => ({
-       ...DD,
- ... (18 more removed lines; see GitHub link above)
+       if (pp.activeCamera) {
+         const cp = ip.MULTIVIEW;
+         ip.MULTIVIEW = null !== pp.activeCamera.outputRenderTarget && pp.activeCamera.outputRenderTarget.getViewCount() > 1, ip.MULTIVIEW != cp && ip.markAsUnprocessed()
```

#### 38. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L615-L620` → after: `L2113-L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2113-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2113-L2116) · [Before (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L615-L620)

```diff
-     function wz(DD, zD) {
-       try {
-         DD.container.UW(zD)
-       } catch (wD) {
-         VD.debug(`Component ${zD.name} failed to register with FirebaseApp ${DD.name}`, wD)
-       }
+     function Fp(pp, ip, cp) {
+       const Op = ip.ORDER_INDEPENDENT_TRANSPARENCY,
+         op = ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
+       ip.ORDER_INDEPENDENT_TRANSPARENCY = pp.useOrderIndependentTransparency && cp, ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !pp.gy().getCaps().textureFloatLinearFiltering, Op === ip.ORDER_INDEPENDENT_TRANSPARENCY && op === ip.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || ip.markAsU … [truncated]
```

#### 39. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L623-L624` → after: `L2119-L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2119-L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2119-L2180) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L623-L624)

```diff
-     function pz(DD, zD) {
-       DD.container.addOrOverwriteComponent(zD)
+     function gp(pp, ip, cp) {
+       const Op = ip.PREPASS;
+       if (!ip._arePrePassDirty) return;
+       const op = [{
+         type: 1,
+         define: "PREPASS_POSITION",
+         index: "PREPASS_POSITION_INDEX"
+       }, {
+         type: 9,
+         define: "PREPASS_LOCAL_POSITION",
+         index: "PREPASS_LOCAL_POSITION_INDEX"
+       }, {
+         type: 2,
+         define: "PREPASS_VELOCITY",
+         index: "PREPASS_VELOCITY_INDEX"
+       }, {
+ ... (46 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L627-L632` → after: `L2183-L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2183-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2183-L2190) · [Before (L627-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L627-L632)

```diff
-     function sz(DD) {
-       const zD = DD.name;
-       if (zz.has(zD)) return VD.debug(`There were multiple attempts to register component ${zD}.`), !1;
-       zz.set(zD, DD);
-       for (const wD of Dz.values()) wz(wD, DD);
-       return !0
+     function Gp(pp, ip, cp, Op) {
+       let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         xp = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         Yp = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
+       op && op.push("Light" + pp), Ip || (ip.push("vLightData" + pp, "vLightDiffuse" + pp, "vLightSpecular" + pp, "vLightDirection" + pp, "vLightWidth" + pp, "vLightHeight" + pp, "vLightFalloff" + pp, "vLightGround" + pp, "vSliceData" + pp, "vSliceRanges" + pp, "lightMatrix" + pp … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L635-L639` → after: `L2193-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2193-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2193-L2196) · [Before (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L635-L639)

```diff
-     function Kz(DD, zD) {
-       const wD = DD.container.getProvider("heartbeat").getImmediate({
-         optional: !0
-       });
-       return wD && wD.triggerHeartbeat(), DD.container.getProvider(zD)
+     function rp(pp, ip, cp) {
+       const Op = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
+       cp && Op.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
+       ip.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
```

#### 42. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L642-L644` → after: `L2199-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2199-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2199-L2207) · [Before (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L642-L644)

```diff
-     function rz(DD, zD) {
-       let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HD;
-       Kz(DD, zD).clearInstance(wD)
+     function Zp(pp, ip, cp) {
+       let Op, op, Ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
+         Sp = null;
+       if (pp.uniformsNames) {
+         const xp = pp;
+         Op = xp.uniformsNames, op = xp.uniformBuffersNames, ip = xp.samplers, cp = xp.defines, Ip = xp.maxSimultaneousLights || 0, Sp = xp.shaderLanguage ?? null
+       } else Op = pp, ip || (ip = []);
+       for (let xp = 0; xp < Ip && cp["LIGHT" + xp]; xp++) Gp(xp, Op, ip, cp["PROJECTEDLIGHTTEXTURE" + xp], op, !1, cp["IESLIGHTTEXTURE" + xp], cp["CLUSTLIGHT" + xp], cp["RECTAREALIGHTEMISSIONTEXTURE" + xp], 1 === Sp);
+       cp.NUM_MORPH_INFLUENCERS && (Op.push("morphTargetInfluences"), Op.push("morphTargetCount")), cp.BAKED_VERTEX_ANIMATION_TEXTURE && (Op.push("bakedVertexAnimationSettings"), Op.push("bakedVertexAnimationTextureSizeInverted"), Op.push("bakedVertexAnimationTime"), ip.push("bake … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L647-L648` → after: `L2210-L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2210-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2210-L2216) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L647-L648)

```diff
-     function Lz() {
-       zz.clear()
+     function zp(pp) {
+       let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         Op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         Ip = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       pp.addUniform("vReflectionInfos", 2), pp.addUniform("reflectionMatrix", 16), ip && pp.addUniform("vReflectionMicrosurfaceInfos", 3), cp && (pp.addUniform("vReflectionPosition", 3), pp.addUniform("vReflectionSize", 3)), Op && (pp.addUniform("vReflectionFilteringInfo", 2), pp … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L650-L666` → after: `L2218-L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2218-L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2218-L2228) · [Before (L650-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L650-L666)

```diff
-     const cz = {
-         "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
-         "bad-app-name": "Illegal App name: '{$appName}",
-         "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
-         "app-deleted": "Firebase App named '{$appName}' already deleted",
-         "no-options": "Need to provide options, when not being deployed to hosting via source.",
-         "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
-         "invalid-log-argument": "First argument to `onLog` must be null or a function.",
-         "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
-         "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
-       },
-       gz = new KD.c("app", "Firebase", cz);
-     class Rz {
-       constructor(DD, zD, wD) {
- ... (1 more removed lines; see GitHub link above)
+   },
+   40523: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ip
+     });
+     var Op = cp(37320),
+       op = cp(40476);
+     class Ip extends op.b {
+       constructor(pp, ip) {
+         let cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         super(pp, ip, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Op.b, this._storeEffectOnSubMeshes = cp
```

#### 45. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L668-L669` → after: `L2230-L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2230-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2230-L2231) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L668-L669)

```diff
-       get automaticDataCollectionEnabled() {
-         return this.checkDestroyed(), this._automaticDataCollectionEnabled
+       getEffect() {
+         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
```

#### 46. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L671-L672` → after: `L2233-L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2233-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2233-L2234) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L671-L672)

```diff
-       set automaticDataCollectionEnabled(DD) {
-         this.checkDestroyed(), this._automaticDataCollectionEnabled = DD
+       isReady(pp, ip) {
+         return !!pp && (!this._storeEffectOnSubMeshes || (!pp.Am || 0 === pp.Am.length || this.isReadyForSubMesh(pp, pp.Am[0], ip)))
```

#### 47. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L674-L675` → after: `L2236-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2236-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2236-L2238) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L674-L675)

```diff
-       get name() {
-         return this.checkDestroyed(), this._name
+       _isReadyForSubMesh(pp) {
+         const ip = pp.materialDefines;
+         return !(this.checkReadyOnEveryCall || !pp.effect || !ip || ip._renderId !== this.Gl().getRenderId())
```

#### 48. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L677-L678` → after: `L2240-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2240-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2240-L2241) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L677-L678)

```diff
-       get options() {
-         return this.checkDestroyed(), this._options
+       bindOnlyWorldMatrix(pp) {
+         this._activeEffect.setMatrix("world", pp)
```

#### 49. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L680-L681` → after: `L2243-L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2243-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2243-L2244) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L680-L681)

```diff
-       get config() {
-         return this.checkDestroyed(), this._config
+       bindOnlyNormalMatrix(pp) {
+         this._activeEffect.setMatrix("normalMatrix", pp)
```

#### 50. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L683-L684` → after: `L2246-L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2246-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2246-L2247) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L683-L684)

```diff
-       get container() {
-         return this._container
+       bind(pp, ip) {
+         ip && this.bindForSubMesh(pp, ip, ip.Am[0])
```

#### 51. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L686-L687` → after: `L2249-L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2249-L2252) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L686-L687)

```diff
-       get isDeleted() {
-         return this._isDeleted
+       _afterBind(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           cp = arguments.length > 2 ? arguments[2] : void 0;
+         super._afterBind(pp, ip, cp), this.Gl()._cachedEffect = ip, cp ? cp._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
```

#### 52. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L689-L690` → after: `L2254-L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2254-L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2254-L2256) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L689-L690)

```diff
-       set isDeleted(DD) {
-         this._isDeleted = DD
+       _mustRebind(pp, ip, cp) {
+         let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         return cp._drawWrapper._forceRebindOnNextCall || pp.isCachedMaterialInvalid(this, ip, Op)
```

#### 53. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L692-L695` → after: `L2258-L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2258-L2259) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L692-L695)

```diff
-       checkDestroyed() {
-         if (this.isDeleted) throw gz.create("app-deleted", {
-           appName: this._name
-         })
+       dispose(pp, ip, cp) {
+         this._activeEffect = void 0, super.dispose(pp, ip, cp)
```

#### 54. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L698` → after: `L2262-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2262-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2262-L2268) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L698)

```diff
-     const Az = "9.23.0";
+   },
+   40544: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => Ip,
+       i: () => op
+     });
+     const Op = new WeakMap;
```

#### 55. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L701-L717` → after: `L2271-L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2271-L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2271-L2273) · [Before (L701-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L701-L717)

```diff
-       let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         wD = DD;
-       if ("object" !== typeof zD) {
-         zD = {
-           name: zD
-         }
-       }
-       const sD = Object.assign({
-           name: HD,
-           automaticDataCollectionEnabled: !1
-         }, zD),
-         rD = sD.name;
-       if ("string" !== typeof rD || !rD) throw gz.create("bad-app-name", {
-         appName: String(rD)
-       });
-       if (wD || (wD = (0, KD.z)()), !wD) throw gz.create("no-options");
- ... (1 more removed lines; see GitHub link above)
+       const ip = pp.getVertexBuffers();
+       if (!ip) return null;
+       let cp = Op.get(pp);
```

#### 56. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L719-L722` → after: `L2275-L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2275-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2275-L2295) · [Before (L719-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L719-L722)

```diff
-         if ((0, KD.u)(wD, LD.options) && (0, KD.u)(sD, LD.config)) return LD;
-         throw gz.create("duplicate-app", {
-           appName: rD
-         })
+         let pp = !1;
+         for (const Op in ip)
+           if (!cp.has(Op)) {
+             pp = !0;
+             break
+           } if (!pp) return cp
+       } else cp = new Map, Op.set(pp, cp);
+       for (const Op in ip) {
+         const pp = ip[Op];
+         if (pp) {
+           const ip = pp.byteOffset,
+             op = pp.byteStride,
+             Ip = pp.type,
+             Sp = pp.normalized;
+           cp.set(Op, {
+             offset: ip,
+ ... (5 more added lines; see GitHub link above)
```

#### 57. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L765-L876` → after: `L2301-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2301-L2304) · [Before (L765-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L765-L876)

```diff
-       if (null !== DD && "function" !== typeof DD) throw gz.create("invalid-log-argument");
-       (0, sD.m)(DD, zD)
-     }
- 
-     function nz(DD) {
-       (0, sD.k)(DD)
-     }
-     const Mz = "firebase-heartbeat-store";
-     let Oz = null;
- 
-     function Jz() {
-       return Oz || (Oz = function(DD, zD) {
-         let {
-           blocked: wD,
-           upgrade: pD,
-           blocking: sD,
- ... (96 more removed lines; see GitHub link above)
+       ip.forEach(((ip, cp) => {
+         const Op = `vp_${cp}_info`;
+         pp.setFloat4(Op, ip.offset, ip.stride, ip.type, ip.normalized ? 1 : 0)
+       }))
```

#### 58. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L878-L901` → after: `L2306-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2306-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2306-L2325) · [Before (L878-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L878-L901)

```diff
-     class Pz {
-       constructor(DD) {
-         this.app = DD, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
-       }
-       async runIndexedDBEnvironmentCheck() {
-         return !!(0, KD.Q)() && (0, KD.ab)().then((() => !0)).catch((() => !1))
-       }
-       async read() {
-         if (await this._canUseIndexedDBPromise) {
-           return await async function(DD) {
-             try {
-               const zD = await Jz();
-               return await zD.transaction(Mz).objectStore(Mz).get(Qz(DD))
-             } catch (zD) {
-               if (zD instanceof KD.e) VD.warn(zD.message);
-               else {
- ... (8 more removed lines; see GitHub link above)
+   },
+   40506: (pp, ip, cp) => {
+     cp.d(ip, {
+       e: () => xp,
+       f: () => Lp
+     });
+     var Op = cp(40203),
+       op = cp(37320),
+       Ip = cp(40210);
+     let Sp = (() => {
+       var pp;
+       let ip, cp, op = [];
+       return pp = class {
+         static extractMinAndMaxIndexed(pp, ip, cp, Op, op, Ip) {
+           for (let Sp = cp; Sp < cp + Op; Sp++) {
+             const cp = 3 * ip[Sp],
+ ... (4 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L904-L925` → after: `L2328-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2328-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2328-L2334) · [Before (L904-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L904-L925)

```diff
-         return {
-           heartbeats: []
-         }
-       }
-       async overwrite(DD) {
-         var zD;
-         if (await this._canUseIndexedDBPromise) {
-           const wD = await this.read();
-           return Ez(this.app, {
-             lastSentHeartbeatDate: null !== (zD = DD.lastSentHeartbeatDate) && void 0 !== zD ? zD : wD.lastSentHeartbeatDate,
-             heartbeats: DD.heartbeats
-           })
-         }
-       }
-       async add(DD) {
-         var zD;
- ... (6 more removed lines; see GitHub link above)
+         static extractMinAndMax(pp, ip, cp, Op, op, Ip) {
+           for (let Sp = ip, xp = ip * Op; Sp < ip + cp; Sp++, xp += Op) {
+             const ip = pp[xp],
+               cp = pp[xp + 1],
+               Op = pp[xp + 2];
+             op.minimizeInPlaceFromFloats(ip, cp, Op), Ip.maximizeInPlaceFromFloats(ip, cp, Op)
+           }
```

#### 60. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L930-L934` → after: `L2381-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2381-L2389) · [Before (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L930-L934)

```diff
-     function Cz(DD) {
-       return (0, KD.n)(JSON.stringify({
-         version: 2,
-         heartbeats: DD
-       })).length
+     function Lp(pp, ip, cp) {
+       let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         Ip = arguments.length > 4 ? arguments[4] : void 0;
+       const xp = new op.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         Lp = new op.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return Ip || (Ip = 3), Sp.extractMinAndMax(pp, ip, cp, Ip, xp, Lp), Op && (xp.x -= xp.x * Op.x + Op.y, xp.y -= xp.y * Op.x + Op.y, xp.z -= xp.z * Op.x + Op.y, Lp.x += Lp.x * Op.x + Op.y, Lp.y += Lp.y * Op.x + Op.y, Lp.z += Lp.z * Op.x + Op.y), {
+         minimum: xp,
+         maximum: Lp
+       }
```

#### 61. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L939` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2392) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L939)

```diff
-   40435: (DD, zD, wD) => {
+   40481: (pp, ip, cp) => {
```

#### 62. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L941-L942` → after: `L2394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2394) · [Before (L941-L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L941-L942)

```diff
-       b: () => LD,
-       f: () => sD
+       d: () => Dp
```

#### 63. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L944` → after: `L2396-L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2396-L2401) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L944)

```diff
-     var pD = wD(40442);
+     var Op, op = cp(40342),
+       Ip = cp(40489),
+       Sp = cp(40498),
+       xp = cp(40506),
+       Lp = cp(40509),
+       Yp = cp(40096);
```

#### 64. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L946-L950` → after: `L2403-L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2403-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2403-L2445) · [Before (L946-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L946-L950)

```diff
-       constructor(DD, zD, wD) {
-         this.name = DD, this.instanceFactory = zD, this.type = wD, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
-       }
-       setInstantiationMode(DD) {
-         return this.instantiationMode = DD, this
+       get materialDefines() {
+         const pp = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
+         return "string" === typeof pp ? null : pp
+       }
+       set materialDefines(pp) {
+         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = pp
+       }
+       _getDrawWrapper(pp) {
+         let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         pp = pp ?? this._engine.currentRenderPassId;
+         let cp = this._drawWrappers[pp];
+         return !cp && ip && (this._drawWrappers[pp] = cp = new Lp.e(this._mesh.Gl().gy())), cp
+       }
+       _removeDrawWrapper(pp) {
+         let ip = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[pp]?.dispose(ip), this._drawWrappers[pp] = void 0
+ ... (27 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L952-L953` → after: `L2447-L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2447-L2448) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L952-L953)

```diff
-       setMultipleInstances(DD) {
-         return this.multipleInstances = DD, this
+       static AddToMesh(pp, ip, cp, Op, op, Ip, Sp) {
+         return new Dp(pp, ip, cp, Op, op, Ip, Sp, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
```

#### 66. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L955-L956` → after: `L2450-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2450-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2450-L2453) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L955-L956)

```diff
-       setServiceProps(DD) {
-         return this.serviceProps = DD, this
+       constructor(pp, ip, cp, Op, op, Ip, Sp) {
+         let xp = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
+           Lp = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
+         this.materialIndex = pp, this.verticesStart = ip, this.verticesCount = cp, this.indexStart = Op, this.indexCount = op, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
```

#### 67. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L958-L959` → after: `L2455-L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2455-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2455-L2456) · [Before (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L958-L959)

```diff
-       setInstanceCreatedCallback(DD) {
-         return this.onInstanceCreated = DD, this
+       get IsGlobal() {
+         return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
```

#### 68. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L961-L1020` → after: `L2458-L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2458-L2459) · [Before (L961-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L961-L1020)

```diff
-     }
-     const KD = "[DEFAULT]";
-     class rD {
-       constructor(DD, zD) {
-         this.name = DD, this.container = zD, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
-       }
-       get(DD) {
-         const zD = this.normalizeInstanceIdentifier(DD);
-         if (!this.instancesDeferred.has(zD)) {
-           const DD = new pD.b;
-           if (this.instancesDeferred.set(zD, DD), this.isInitialized(zD) || this.shouldAutoInitialize()) try {
-             const wD = this.getOrInitializeService({
-               instanceIdentifier: zD
-             });
-             wD && DD.resolve(wD)
-           } catch (wD) {}
- ... (44 more removed lines; see GitHub link above)
+       bJ() {
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.bJ() : this._boundingInfo
```

#### 69. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1022-L1024` → after: `L2461-L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2461-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2461-L2462) · [Before (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1022-L1024)

```diff
-       clearInstance() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KD;
-         this.instancesDeferred.delete(DD), this.instancesOptions.delete(DD), this.instances.delete(DD)
+       setBoundingInfo(pp) {
+         return this._boundingInfo = pp, this
```

#### 70. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1026-L1028` → after: `L2464-L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2464-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2464-L2465) · [Before (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1026-L1028)

```diff
-       async delete() {
-         const DD = Array.from(this.instances.values());
-         await Promise.all([...DD.filter((DD => "INTERNAL" in DD)).map((DD => DD.INTERNAL.delete())), ...DD.filter((DD => "_delete" in DD)).map((DD => DD._delete()))])
+       getMesh() {
+         return this._mesh
```

#### 71. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1030-L1031` → after: `L2467-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2467-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2467-L2468) · [Before (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1030-L1031)

```diff
-       isComponentSet() {
-         return null != this.component
+       getRenderingMesh() {
+         return this._renderingMesh
```

#### 72. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1033-L1035` → after: `L2470-L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2470-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2470-L2471) · [Before (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1033-L1035)

```diff
-       isInitialized() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KD;
-         return this.instances.has(DD)
+       getReplacementMesh() {
+         return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
```

#### 73. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1037-L1039` → after: `L2473-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2473-L2475) · [Before (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1037-L1039)

```diff
-       getOptions() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : KD;
-         return this.instancesOptions.get(DD) || {}
+       getEffectiveMesh() {
+         const pp = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
+         return pp || this._renderingMesh
```

#### 74. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1041-L1053` → after: `L2477-L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2477-L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2477-L2483) · [Before (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1041-L1053)

```diff
-       initialize() {
-         let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         const {
-           options: zD = {}
-         } = DD, wD = this.normalizeInstanceIdentifier(DD.instanceIdentifier);
-         if (this.isInitialized(wD)) throw Error(`${this.name}(${wD}) has already been initialized`);
-         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
-         const pD = this.getOrInitializeService({
-           instanceIdentifier: wD,
-           options: zD
-         });
-         for (const [sD, KD] of this.instancesDeferred.entries()) {
-           wD === this.normalizeInstanceIdentifier(sD) && KD.resolve(pD)
+       Ky() {
+         let pp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         const ip = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
+         if (!ip) return pp && this._mesh.Gl()._hasDefaultMaterial ? this._mesh.Gl().defaultMaterial : null;
+         if (this._isMultiMaterial(ip)) {
+           const pp = ip.getSubMaterial(this.materialIndex);
+           return this._currentMaterial !== pp && (this._currentMaterial = pp, this.resetDrawCache()), pp
```

#### 75. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1057-L1169` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2487-L2488) · [Before (L1057-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1057-L1169)

```diff
-       RZ(DD, zD) {
-         var wD;
-         const pD = this.normalizeInstanceIdentifier(zD),
-           sD = null !== (wD = this.onInitCallbacks.get(pD)) && void 0 !== wD ? wD : new Set;
-         sD.add(DD), this.onInitCallbacks.set(pD, sD);
-         const KD = this.instances.get(pD);
-         return KD && DD(KD, pD), () => {
-           sD.delete(DD)
-         }
-       }
-       invokeOnInitCallbacks(DD, zD) {
-         const wD = this.onInitCallbacks.get(zD);
-         if (wD)
-           for (const sD of wD) try {
-             sD(DD, zD)
-           } catch (pD) {}
- ... (97 more removed lines; see GitHub link above)
+       _isMultiMaterial(pp) {
+         return void 0 !== pp.getSubMaterial
```

#### 76. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1171-L1176` → after: `L2490-L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2490-L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2490-L2554) · [Before (L1171-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1171-L1176)

```diff
-       set logHandler(DD) {
-         if ("function" !== typeof DD) throw new TypeError("Value assigned to `logHandler` must be a function");
-         this._logHandler = DD
-       }
-       get userLogHandler() {
-         return this._userLogHandler
+       refreshBoundingInfo() {
+         let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
+         if (pp || (pp = this._renderingMesh.getVerticesData(op.j.PositionKind)), !pp) return this._boundingInfo = this._mesh.bJ(), this;
+         const ip = this._renderingMesh.NOp();
+         let cp;
+         if (0 === this.indexStart && this.indexCount === ip.length) {
+           const pp = this._renderingMesh.bJ();
+           cp = {
+             minimum: pp.minimum.clone(),
+             maximum: pp.maximum.clone()
+           }
+         } else cp = (0, xp.e)(pp, ip, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
+         return this._boundingInfo ? this._boundingInfo.reConstruct(cp.minimum, cp.maximum) : this._boundingInfo = new Sp.d(cp.minimum, cp.maximum), this
+       }
+       _checkCollision(pp) {
+ ... (49 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1178-L1179` → after: `L2556-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2556-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2556-L2564) · [Before (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1178-L1179)

```diff
-       set userLogHandler(DD) {
-         this._userLogHandler = DD
+       _intersectLines(pp, ip, cp, Op, op) {
+         let Sp = null;
+         for (let xp = this.indexStart; xp < this.indexStart + this.indexCount; xp += 2) {
+           const Lp = ip[cp[xp]],
+             Yp = ip[cp[xp + 1]],
+             Dp = pp.intersectionSegment(Lp, Yp, Op);
+           if (!(Dp < 0) && ((op || !Sp || Dp < Sp.distance) && (Sp = new Ip.e(null, null, Dp), Sp.faceId = xp / 2, op))) break
+         }
+         return Sp
```

#### 78. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1181-L1183` → after: `L2566-L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2566-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2566-L2574) · [Before (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1181-L1183)

```diff
-       debug() {
-         for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-         this._userLogHandler && this._userLogHandler(this, sD.DEBUG, ...zD), this._logHandler(this, sD.DEBUG, ...zD)
+       _intersectUnIndexedLines(pp, ip, cp, Op, op) {
+         let Sp = null;
+         for (let xp = this.verticesStart; xp < this.verticesStart + this.verticesCount; xp += 2) {
+           const cp = ip[xp],
+             Lp = ip[xp + 1],
+             Yp = pp.intersectionSegment(cp, Lp, Op);
+           if (!(Yp < 0) && ((op || !Sp || Yp < Sp.distance) && (Sp = new Ip.e(null, null, Yp), Sp.faceId = xp / 2, op))) break
+         }
+         return Sp
```

#### 79. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1185-L1187` → after: `L2576-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2576-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2576-L2599) · [Before (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1185-L1187)

```diff
-       log() {
-         for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-         this._userLogHandler && this._userLogHandler(this, sD.VERBOSE, ...zD), this._logHandler(this, sD.VERBOSE, ...zD)
+       _intersectTriangles(pp, ip, cp, Op, op, Ip, Sp) {
+         let xp = null,
+           Lp = -1;
+         for (let Yp = this.indexStart; Yp < this.indexStart + this.indexCount - (3 - Op); Yp += Op) {
+           Lp++;
+           const Op = cp[Yp],
+             Dp = cp[Yp + 1],
+             Ap = cp[Yp + 2];
+           if (op && 4294967295 === Ap) {
+             Yp += 2;
+             continue
+           }
+           const Pp = ip[Op],
+             Wp = ip[Dp],
+             yp = ip[Ap];
+           if (!Pp || !Wp || !yp) continue;
+ ... (8 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1189-L1191` → after: `L2601-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2601-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2601-L2614) · [Before (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1189-L1191)

```diff
-       info() {
-         for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-         this._userLogHandler && this._userLogHandler(this, sD.INFO, ...zD), this._logHandler(this, sD.INFO, ...zD)
+       _intersectUnIndexedTriangles(pp, ip, cp, Op, op) {
+         let Ip = null;
+         for (let Sp = this.verticesStart; Sp < this.verticesStart + this.verticesCount; Sp += 3) {
+           const cp = ip[Sp],
+             xp = ip[Sp + 1],
+             Lp = ip[Sp + 2];
+           if (op && !op(cp, xp, Lp, pp, -1, -1, -1)) continue;
+           const Yp = pp.intersectsTriangle(cp, xp, Lp);
+           if (Yp) {
+             if (Yp.distance < 0) continue;
+             if ((Op || !Ip || Yp.distance < Ip.distance) && (Ip = Yp, Ip.faceId = Sp / 3, Op)) break
+           }
+         }
+         return Ip
```

#### 81. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1193-L1195` → after: `L2616-L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2616-L2617) · [Before (L1193-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1193-L1195)

```diff
-       warn() {
-         for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-         this._userLogHandler && this._userLogHandler(this, sD.WARN, ...zD), this._logHandler(this, sD.WARN, ...zD)
+       _rebuild() {
+         this._linesIndexBuffer && (this._linesIndexBuffer = null)
```

#### 82. `bundles/bloxd.io/chunks/js/266.js` (Changed code · before: `L1197-L1199` → after: `L2619-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08eR2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86...build/bloxd.io/sn3sfj.2522680a#diff-de4a039ca929bd68d41cf04880852d2c4d4e8897212c05d5348d7f63a90bf08e) · [After (L2619-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/sn3sfj.2522680a/bundles/bloxd.io/chunks/js/266.js#L2619-L2626) · [Before (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/d3bc9efbb1bd236678e74e8712f9ff32b6d8fc86/bundles/bloxd.io/chunks/js/266.js#L1197-L1199)

```diff
-       error() {
-         for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
-         this._userLogHandler && this._userLogHandler(this, sD.ERROR, ...zD), this._logHandler(this, sD.ERROR, ...zD)
+       clone(pp, ip) {
+         const cp = new Dp(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, pp, ip, !1);
+         if (!this.IsGlobal) {
+           const pp = this.bJ();
+           if (!pp) return cp;
+           cp._boundingInfo = new Sp.d(pp.minimum, pp.maximum)
+         }
+         return cp
```
