# Changed — Bundle Modifications Report (Part 013 / 047)

- **Updated at**: `2026-11-22T23:29 JST`
- **Part**: `13 / 47` (**334** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 012](part-012.md) · [Part 014 →](part-014.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/253.js` (bqoxjr.2558012f → 3lwmg.ecbaa066 · continued)

- **File**: `bundles/bloxd.io/chunks/js/253.js` (53 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db)

#### 46. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L987-L992` → after: `L522-L551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L522-L551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/253.js#L522-L551) · [Before (L987-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/253.js#L987-L992)

```diff
-       static AddSamplers(QQ) {}
-       bindForSubMesh(QQ, FQ, wQ, LQ, qQ) {
-         if (FQ.prePassRenderer && FQ.prePassRenderer.enabled && FQ.prePassRenderer.currentRTisSceneRT && (-1 !== FQ.prePassRenderer.getIndex(2) || -1 !== FQ.prePassRenderer.getIndex(11))) {
-           this.previousWorldMatrices[wQ.uniqueId] || (this.previousWorldMatrices[wQ.uniqueId] = LQ.clone()), this.previousViewProjection || (this.previousViewProjection = FQ.getTransformMatrix().clone(), this.currentViewProjection = FQ.getTransformMatrix().clone());
-           const qQ = FQ.Wx();
-           this.currentViewProjection.updateFlag !== FQ.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = qQ.frameId, this.previousViewProjection.Qs(this.currentViewProjection), this.currentViewProjection.Qs(FQ.getTransformMatrix())) : this._lastUpdateFrameId !== qQ.fra … [truncated]
+       scale(kk) {
+         const ek = this.getSize();
+         ek.width *= kk, ek.height *= kk, this._recreate(ek)
+       }
+       scaleTo(kk, ek) {
+         const ik = this.getSize();
+         ik.width = kk, ik.height = ek, this._recreate(ik)
+       }
+       getContext() {
+         return this._context
+       }
+       clear(kk) {
+         const ek = this.getSize();
+         kk && (this._context.fillStyle = kk), this._context.clearRect(0, 0, ek.width, ek.height)
+       }
+       update(kk) {
+ ... (14 more added lines; see GitHub link above)
```

#### 47. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L997-L1002` → after: `L579-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L579-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/253.js#L579-L604) · [Before (L997-L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/253.js#L997-L1002)

```diff
-   39809: (QQ, FQ, wQ) => {
-     function LQ(QQ) {
-       return class extends QQ {
-         constructor() {
-           super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, th … [truncated]
-         }
+   40727: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => fk
+     });
+     var Dk = ik(40053);
+     class fk extends Dk.f {
+       get depth() {
+         return this._depth
+       }
+       constructor(kk, ek, ik, fk, Sk, bk) {
+         let rk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
+           Pk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+           mk = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : Dk.f.TRILINEAR_SAMPLINGMODE,
+           Mk = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
+           Kk = arguments.length > 10 ? arguments[10] : void 0,
+           xk = arguments.length > 11 ? arguments[11] : void 0;
+ ... (10 more added lines; see GitHub link above)
```

#### 48. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1009` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/253.js#L608) · [Before (L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/253.js#L1009)

```diff
-   39692: (QQ, FQ, wQ) => {
+   40724: (kk, ek, ik) => {
```

#### 49. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1011` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/253.js#L610) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/253.js#L1011)

```diff
-       StandardMaterial: () => LQ.d
+       c: () => Dk.e
```

#### 50. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1013-L1014` → after: `L612-L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L612-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/253.js#L612-L613) · [Before (L1013-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/253.js#L1013-L1014)

```diff
-     var LQ = wQ(39696);
-     (0, LQ.b)()
+     var Dk = ik(39956);
+     (0, Dk.i)()
```

#### 51. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1016` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/253.js#L615) · [Before (L1016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/253.js#L1016)

```diff
-   39696: (QQ, FQ, wQ) => {
+   39651: (kk, ek, ik) => {
```

#### 52. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1018-L1019` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/253.js#L617) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/253.js#L1018-L1019)

```diff
-       b: () => zQ,
-       d: () => TQ
+       d: () => Dk.f
```

#### 53. `bundles/bloxd.io/chunks/js/253.js` (Changed code · before: `L1021-L2730` → after: `L619-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184dbR619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-fd2b2a6b21d07de638b150c2eab2a332f47d6d45624b6054900a94d155f184db) · [After (L619-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/253.js#L619-L620) · [Before (L1021-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/253.js#L1021-L2730)

```diff
-     var LQ = wQ(39402),
-       qQ = wQ(39409),
-       oQ = wQ(39518),
-       DQ = wQ(39496),
-       kQ = wQ(36873),
-       vQ = wQ(39561),
-       mQ = wQ(39704),
-       uQ = wQ(39708),
-       HQ = wQ(39527),
-       bQ = wQ(39717),
-       YQ = wQ(39711),
-       xQ = wQ(39768),
-       AQ = wQ(39760),
-       tQ = wQ(39770),
-       eQ = wQ(39778),
-       MQ = wQ(39754),
- ... (1694 more removed lines; see GitHub link above)
+     var Dk = ik(39653);
+     (0, Dk.b)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/254.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/254.js` (126 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6)

#### 1. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L4-L391` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L4) · [Before (L4-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L4-L391)

```diff
-   39729: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => LQ
-     });
-     class LQ {
-       constructor(QQ, FQ, wQ) {
-         this.bu = QQ, this.bv = FQ, this.distance = wQ, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
-     }
-   },
-   39736: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => DQ
-     });
-     var LQ = wQ(36709),
-       qQ = wQ(36696),
- ... (372 more removed lines; see GitHub link above)
+   39774: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L395-L632` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L8-L14) · [Before (L395-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L395-L632)

```diff
-     var LQ = wQ(39402),
-       qQ = wQ(39409),
-       oQ = wQ(39505),
-       DQ = wQ(36722),
-       kQ = wQ(36720),
-       vQ = wQ(39725),
-       mQ = wQ(39550),
-       uQ = wQ(38203),
-       HQ = wQ(37324),
-       bQ = wQ(39748),
-       YQ = wQ(39426);
-     let xQ = (() => {
-       var QQ;
-       let FQ, wQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, xQ, AQ, tQ = [];
-       return QQ = class {
-         constructor() {
- ... (222 more removed lines; see GitHub link above)
+     var Dk = ik(39566),
+       fk = ik(39570),
+       Sk = ik(36698),
+       bk = ik(39778),
+       rk = ik(39804),
+       Pk = ik(39751),
+       mk = ik(39662);
```

#### 3. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L635-L664` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L17) · [Before (L635-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L635-L664)

```diff
-       let FQ, wQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ, WQ, RQ, OQ, sQ, rQ, IQ, UQ, NQ, TQ, KQ, zQ, lQ, jQ, aQ, XQ, fQ, VQ, hQ, JQ, EQ = [],
-         nQ = [],
-         gQ = [],
-         PQ = [],
-         ZQ = [],
-         yQ = [],
-         BQ = [],
-         dQ = [],
-         QF = [],
-         FF = [],
-         wF = [],
-         LF = [],
-         qF = [],
-         oF = [],
-         DF = [],
-         kF = [],
- ... (14 more removed lines; see GitHub link above)
+       let ek, ik, bk, rk, Mk, Kk, xk, nk, Uk, Hk, wk, lk = [],
```

#### 4. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L687-L995` → after: `L40-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L40-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L40-L55) · [Before (L687-L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L687-L995)

```diff
-         get useVertexPulling() {
-           return this._useVertexPulling
-         }
-         set useVertexPulling(FQ) {
-           this._useVertexPulling !== FQ && (this._useVertexPulling = FQ, this.dFQ(QQ.MiscDirtyFlag))
-         }
-         get _supportGlowLayer() {
-           return !1
-         }
-         set _glowModeEnabled(QQ) {}
-         get shaderLanguage() {
-           return this._shaderLanguage
-         }
-         get canRenderToMRT() {
-           return !1
-         }
- ... (293 more removed lines; see GitHub link above)
+         constructor() {
+           this.keysUp = (0, Dk.e)(this, lk, [38]), this.keysUpward = ((0, Dk.e)(this, pk), (0, Dk.e)(this, yk, [33])), this.keysDown = ((0, Dk.e)(this, Yk), (0, Dk.e)(this, Lk, [40])), this.keysDownward = ((0, Dk.e)(this, Ck), (0, Dk.e)(this, Ak, [34])), this.keysLeft = ((0, Dk.e … [truncated]
+         }
+         attachControl(kk) {
+           kk = mk.i.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.XF(), this._engine = this._scene.JU(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+             this._keys.length = 0
+           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((ek => {
+             const ik = ek.event;
+             if (!ik.metaKey)
+               if (ek.type === Pk.b.KEYDOWN) {
+                 if (-1 !== this.keysUp.indexOf(ik.keyCode) || -1 !== this.keysDown.indexOf(ik.keyCode) || -1 !== this.keysLeft.indexOf(ik.keyCode) || -1 !== this.keysRight.indexOf(ik.keyCode) || -1 !== this.keysUpward.indexOf(ik.keyCode) || -1 !== this.keysDownward.indexOf(ik.key … [truncated]
+                   -1 === this._keys.indexOf(ik.keyCode) && this._keys.push(ik.keyCode), kk || ik.preventDefault()
+                 }
+               } else if (-1 !== this.keysUp.indexOf(ik.keyCode) || -1 !== this.keysDown.indexOf(ik.keyCode) || -1 !== this.keysLeft.indexOf(ik.keyCode) || -1 !== this.keysRight.indexOf(ik.keyCode) || -1 !== this.keysUpward.indexOf(ik.keyCode) || -1 !== this.keysDownward.indexOf(i … [truncated]
+               const ek = this._keys.indexOf(ik.keyCode);
+               ek >= 0 && this._keys.splice(ek, 1), kk || ik.preventDefault()
```

#### 5. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L997-L1003` → after: `L57-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L57-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L57-L75) · [Before (L997-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L997-L1003)

```diff
-         }
-         getBindedMeshes() {
-           if (this.meshMap) {
-             const QQ = [];
-             for (const FQ in this.meshMap) {
-               const wQ = this.meshMap[FQ];
-               wQ && QQ.push(wQ)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
+         }
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const kk = this.camera,
+               ek = kk.movement.input,
+               ik = ek.getEntry("keyboard", "translate"),
+               Dk = ek.getEntry("keyboard", "rotate"),
+               fk = Dk?.sensitivity ?? 1,
+               bk = kk._localDirection.Z6(0, 0, 0);
+             for (let Sk = 0; Sk < this._keys.length; Sk++) {
+               const ek = this._keys[Sk]; - 1 !== this.keysLeft.indexOf(ek) ? bk.x -= 1 : -1 !== this.keysUp.indexOf(ek) ? bk.z += 1 : -1 !== this.keysRight.indexOf(ek) ? bk.x += 1 : -1 !== this.keysDown.indexOf(ek) ? bk.z -= 1 : -1 !== this.keysUpward.indexOf(ek) ? bk.y += 1 : -1 … [truncated]
+             }
+ ... (3 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1129-L1152` → after: `L79-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L79-L80) · [Before (L1129-L1152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1129-L1152)

```diff
-         _disposeMeshResources(QQ) {
-           if (!QQ) return;
-           const FQ = QQ.geometry,
-             wQ = QQ._internalAbstractMeshDataInfo._materialForRenderPass;
-           if (this._storeEffectOnSubMeshes) {
-             if (QQ.lC && wQ)
-               for (const LQ of QQ.lC) {
-                 const QQ = LQ._drawWrappers;
-                 for (let qQ = 0; qQ < QQ.length; qQ++) {
-                   const oQ = QQ[qQ]?.effect;
-                   if (!oQ) continue;
-                   wQ[qQ] === this && (FQ?._releaseVertexArrayObject(oQ), LQ._removeDrawWrapper(qQ, !0, !0))
-                 }
-               }
-           } else FQ?._releaseVertexArrayObject(this._drawWrapper.effect);
-           QQ.material !== this || QQ.cqQ || (QQ.material = null)
- ... (8 more removed lines; see GitHub link above)
+         getClassName() {
+           return "FreeCameraKeyboardMoveInput"
```

#### 7. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1154-L1155` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L82-L83) · [Before (L1154-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1154-L1155)

```diff
-         static ParseAlphaMode(QQ, FQ) {
-           void 0 !== QQ._alphaMode ? FQ._alphaMode = Array.isArray(QQ._alphaMode) ? [...QQ._alphaMode] : [QQ._alphaMode] : void 0 !== QQ.alphaMode ? FQ._alphaMode = Array.isArray(QQ.alphaMode) ? [...QQ.alphaMode] : [QQ.alphaMode] : FQ._alphaMode = [2]
+         _onLostFocus() {
+           this._keys.length = 0
```

#### 8. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1157-L1162` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L85-L86) · [Before (L1157-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1157-L1162)

```diff
-         static Parse(FQ, wQ, LQ) {
-           if (FQ.customType) {
-             if ("BABYLON.PBRMaterial" === FQ.customType && FQ.overloadedAlbedo && (FQ.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return uQ.c.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
-           } else FQ.customType = "BABYLON.StandardMaterial";
-           const qQ = oQ.g.Instantiate(FQ.customType).Parse(FQ, wQ, LQ);
-           return qQ._loadedUniqueId = FQ.uniqueId, QQ.ParseAlphaMode(FQ, qQ), qQ
+         getSimpleName() {
+           return "keyboard"
```

#### 9. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1164-L1174` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L88-L90) · [Before (L1164-L1174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1164-L1174)

```diff
-         static _ParsePlugins(QQ, FQ, wQ, LQ) {
-           if (QQ.plugins)
-             for (const qQ in QQ.plugins) {
-               const DQ = QQ.plugins[qQ];
-               let kQ = FQ.pluginManager?.getPlugin(DQ.name);
-               if (!kQ) {
-                 const QQ = oQ.g.Instantiate("BABYLON." + qQ);
-                 QQ && (kQ = new QQ(FQ))
-               }
-               kQ?.parse(DQ, wQ, LQ)
-             }
+         _getLocalRotation() {
+           const kk = this.camera._calculateHandednessMultiplier();
+           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * kk
```

#### 10. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1178-L1218` → after: `L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L94) · [Before (L1178-L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1178-L1218)

```diff
-         FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], eQ = [(0, qQ.I)()], MQ = [(0, qQ.I)()], GQ = [(0, qQ.I)()], pQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], CQ = [(0, qQ.I)("alpha")], SQ = [(0, qQ.I)("backFaceCulling")], iQ = [(0, qQ.I)("textureRepetitionMode")], WQ = [(0, qQ.I)("textureR … [truncated]
-           kind: "getter",
-           name: "pointsCloud",
-           static: !1,
-           private: !1,
-           access: {
-             has: QQ => "pointsCloud" in QQ,
-             get: QQ => QQ.pointsCloud
-           },
-           metadata: oQ
-         }, null, EQ), (0, LQ.i)(QQ, null, fQ, {
-           kind: "getter",
-           name: "fillMode",
-           static: !1,
-           private: !1,
-           access: {
- ... (25 more removed lines; see GitHub link above)
+         ek = [(0, fk.I)()], ik = [(0, fk.I)()], bk = [(0, fk.I)()], rk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.I)()], xk = [(0, fk.I)()], nk = [(0, fk.I)()], Uk = [(0, fk.I)()], Hk = [(0, fk.I)()], wk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
```

#### 11. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1220` → after: `L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L96) · [Before (L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1220)

```diff
-           name: "id",
+           name: "keysUp",
```

#### 12. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1224-L1225` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L100-L101) · [Before (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1224-L1225)

```diff
-             has: QQ => "id" in QQ,
-             get: QQ => QQ.id,
+             has: kk => "keysUp" in kk,
+             get: kk => kk.keysUp,
```

#### 13. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1227` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L103) · [Before (L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1227)

```diff
-               QQ.id = FQ
+               kk.keysUp = ek
```

#### 14. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1231` → after: `L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L107) · [Before (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1231)

```diff
-         }, nQ, gQ), (0, LQ.i)(null, null, wQ, {
+         }, lk, pk), (0, Dk.d)(null, null, ik, {
```

#### 15. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1233` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L109) · [Before (L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1233)

```diff
-           name: "uniqueId",
+           name: "keysUpward",
```

#### 16. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1237-L1238` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L113-L114) · [Before (L1237-L1238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1237-L1238)

```diff
-             has: QQ => "uniqueId" in QQ,
-             get: QQ => QQ.uniqueId,
+             has: kk => "keysUpward" in kk,
+             get: kk => kk.keysUpward,
```

#### 17. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1240` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L116) · [Before (L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1240)

```diff
-               QQ.uniqueId = FQ
+               kk.keysUpward = ek
```

#### 18. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1244` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L120) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1244)

```diff
-         }, PQ, ZQ), (0, LQ.i)(null, null, eQ, {
+         }, yk, Yk), (0, Dk.d)(null, null, bk, {
```

#### 19. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1246` → after: `L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L122) · [Before (L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1246)

```diff
-           name: "name",
+           name: "keysDown",
```

#### 20. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1250-L1251` → after: `L126-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L126-L127) · [Before (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1250-L1251)

```diff
-             has: QQ => "name" in QQ,
-             get: QQ => QQ.name,
+             has: kk => "keysDown" in kk,
+             get: kk => kk.keysDown,
```

#### 21. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1253` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L129) · [Before (L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1253)

```diff
-               QQ.name = FQ
+               kk.keysDown = ek
```

#### 22. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1257` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L133) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1257)

```diff
-         }, yQ, BQ), (0, LQ.i)(null, null, MQ, {
+         }, Lk, Ck), (0, Dk.d)(null, null, rk, {
```

#### 23. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1259` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L135) · [Before (L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1259)

```diff
-           name: "metadata",
+           name: "keysDownward",
```

#### 24. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1263-L1264` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L139-L140) · [Before (L1263-L1264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1263-L1264)

```diff
-             has: QQ => "metadata" in QQ,
-             get: QQ => QQ.metadata,
+             has: kk => "keysDownward" in kk,
+             get: kk => kk.keysDownward,
```

#### 25. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1266` → after: `L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L142) · [Before (L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1266)

```diff
-               QQ.metadata = FQ
+               kk.keysDownward = ek
```

#### 26. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1270` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L146) · [Before (L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1270)

```diff
-         }, dQ, QF), (0, LQ.i)(null, null, GQ, {
+         }, Ak, jk), (0, Dk.d)(null, null, Mk, {
```

#### 27. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1272` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L148) · [Before (L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1272)

```diff
-           name: "checkReadyOnEveryCall",
+           name: "keysLeft",
```

#### 28. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1276-L1277` → after: `L152-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L152-L153) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1276-L1277)

```diff
-             has: QQ => "checkReadyOnEveryCall" in QQ,
-             get: QQ => QQ.checkReadyOnEveryCall,
+             has: kk => "keysLeft" in kk,
+             get: kk => kk.keysLeft,
```

#### 29. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1279` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L155) · [Before (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1279)

```diff
-               QQ.checkReadyOnEveryCall = FQ
+               kk.keysLeft = ek
```

#### 30. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1283` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L159) · [Before (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1283)

```diff
-         }, FF, wF), (0, LQ.i)(null, null, pQ, {
+         }, sk, dk), (0, Dk.d)(null, null, Kk, {
```

#### 31. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1285` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L161) · [Before (L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1285)

```diff
-           name: "checkReadyOnlyOnce",
+           name: "keysRight",
```

#### 32. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1289-L1290` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L165-L166) · [Before (L1289-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1289-L1290)

```diff
-             has: QQ => "checkReadyOnlyOnce" in QQ,
-             get: QQ => QQ.checkReadyOnlyOnce,
+             has: kk => "keysRight" in kk,
+             get: kk => kk.keysRight,
```

#### 33. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1292` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L168) · [Before (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1292)

```diff
-               QQ.checkReadyOnlyOnce = FQ
+               kk.keysRight = ek
```

#### 34. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1296` → after: `L172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L172) · [Before (L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1296)

```diff
-         }, LF, qF), (0, LQ.i)(null, null, cQ, {
+         }, Vk, Fk), (0, Dk.d)(null, null, xk, {
```

#### 35. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1298` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L174) · [Before (L1298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1298)

```diff
-           name: "state",
+           name: "rotationSpeed",
```

#### 36. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1302-L1303` → after: `L178-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L178-L179) · [Before (L1302-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1302-L1303)

```diff
-             has: QQ => "state" in QQ,
-             get: QQ => QQ.state,
+             has: kk => "rotationSpeed" in kk,
+             get: kk => kk.rotationSpeed,
```

#### 37. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1305` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L181) · [Before (L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1305)

```diff
-               QQ.state = FQ
+               kk.rotationSpeed = ek
```

#### 38. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1309` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L185) · [Before (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1309)

```diff
-         }, oF, DF), (0, LQ.i)(null, null, CQ, {
+         }, uk, qk), (0, Dk.d)(null, null, nk, {
```

#### 39. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1311` → after: `L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L187) · [Before (L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1311)

```diff
-           name: "_alpha",
+           name: "keysRotateLeft",
```

#### 40. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1315-L1316` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L191-L192) · [Before (L1315-L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1315-L1316)

```diff
-             has: QQ => "_alpha" in QQ,
-             get: QQ => QQ._alpha,
+             has: kk => "keysRotateLeft" in kk,
+             get: kk => kk.keysRotateLeft,
```

#### 41. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1318` → after: `L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L194) · [Before (L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1318)

```diff
-               QQ._alpha = FQ
+               kk.keysRotateLeft = ek
```

#### 42. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1322` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L198) · [Before (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1322)

```diff
-         }, kF, vF), (0, LQ.i)(null, null, SQ, {
+         }, Ik, zk), (0, Dk.d)(null, null, Uk, {
```

#### 43. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1324` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L200) · [Before (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1324)

```diff
-           name: "_backFaceCulling",
+           name: "keysRotateRight",
```

#### 44. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1328-L1329` → after: `L204-L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L204-L205) · [Before (L1328-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1328-L1329)

```diff
-             has: QQ => "_backFaceCulling" in QQ,
-             get: QQ => QQ._backFaceCulling,
+             has: kk => "keysRotateRight" in kk,
+             get: kk => kk.keysRotateRight,
```

#### 45. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1331` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L207) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1331)

```diff
-               QQ._backFaceCulling = FQ
+               kk.keysRotateRight = ek
```

#### 46. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1335` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L211) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1335)

```diff
-         }, mF, uF), (0, LQ.i)(null, null, iQ, {
+         }, Qk, vk), (0, Dk.d)(null, null, Hk, {
```

#### 47. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1337` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L213) · [Before (L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1337)

```diff
-           name: "_textureRepetitionMode",
+           name: "keysRotateUp",
```

#### 48. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1341-L1342` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L217-L218) · [Before (L1341-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1341-L1342)

```diff
-             has: QQ => "_textureRepetitionMode" in QQ,
-             get: QQ => QQ._textureRepetitionMode,
+             has: kk => "keysRotateUp" in kk,
+             get: kk => kk.keysRotateUp,
```

#### 49. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1344` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L220) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1344)

```diff
-               QQ._textureRepetitionMode = FQ
+               kk.keysRotateUp = ek
```

#### 50. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1348` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L224) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1348)

```diff
-         }, HF, bF), (0, LQ.i)(null, null, WQ, {
+         }, Ek, hk), (0, Dk.d)(null, null, wk, {
```

#### 51. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1350` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L226) · [Before (L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1350)

```diff
-           name: "textureRepetitionHexTilingParams",
+           name: "keysRotateDown",
```

#### 52. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1354-L1355` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L230-L231) · [Before (L1354-L1355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1354-L1355)

```diff
-             has: QQ => "textureRepetitionHexTilingParams" in QQ,
-             get: QQ => QQ.textureRepetitionHexTilingParams,
+             has: kk => "keysRotateDown" in kk,
+             get: kk => kk.keysRotateDown,
```

#### 53. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1357` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L233) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1357)

```diff
-               QQ.textureRepetitionHexTilingParams = FQ
+               kk.keysRotateDown = ek
```

#### 54. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1361` → after: `L237-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L237-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L237-L333) · [Before (L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1361)

```diff
-         }, YF, xF), (0, LQ.i)(null, null, RQ, {
+         }, ak, Wk), Sk && Object.defineProperty(kk, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: Sk
+         })
+       })(), kk
+     })();
+     rk.e.FreeCameraKeyboardMoveInput = Mk;
+     var Kk = ik(36726),
+       xk = ik(39742);
+     let nk = (() => {
+       var kk;
+       let ek, ik, Sk = [],
+         bk = [],
+         rk = [],
+ ... (81 more added lines; see GitHub link above)
```

#### 55. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1363` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L335) · [Before (L1363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1363)

```diff
-           name: "_cullBackFaces",
+           name: "buttons",
```

#### 56. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1367-L1368` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L339-L340) · [Before (L1367-L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1367-L1368)

```diff
-             has: QQ => "_cullBackFaces" in QQ,
-             get: QQ => QQ._cullBackFaces,
+             has: kk => "buttons" in kk,
+             get: kk => kk.buttons,
```

#### 57. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1370` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L342) · [Before (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1370)

```diff
-               QQ._cullBackFaces = FQ
+               kk.buttons = ek
```

#### 58. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1374` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L346) · [Before (L1374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1374)

```diff
-         }, AF, tF), (0, LQ.i)(null, null, OQ, {
+         }, Sk, bk), (0, Dk.d)(null, null, ik, {
```

#### 59. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1376` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L348) · [Before (L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1376)

```diff
-           name: "sideOrientation",
+           name: "angularSensibility",
```

#### 60. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1380-L1381` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L352-L353) · [Before (L1380-L1381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1380-L1381)

```diff
-             has: QQ => "sideOrientation" in QQ,
-             get: QQ => QQ.sideOrientation,
+             has: kk => "angularSensibility" in kk,
+             get: kk => kk.angularSensibility,
```

#### 61. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1383` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L355) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1383)

```diff
-               QQ.sideOrientation = FQ
+               kk.angularSensibility = ek
```

#### 62. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1387` → after: `L359-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L359-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L359-L407) · [Before (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1387)

```diff
-         }, eF, MF), (0, LQ.i)(null, null, sQ, {
+         }, rk, Pk), mk && Object.defineProperty(kk, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: mk
+         })
+       })(), kk
+     })();
+     rk.e.FreeCameraMouseInput = nk;
+     var Uk = ik(39758);
+     let Hk = (() => {
+       var kk;
+       let ek, ik, Sk, bk = [],
+         rk = [],
+         Pk = [],
+         Mk = [],
+ ... (33 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1389` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L409) · [Before (L1389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1389)

```diff
-           name: "_alphaMode",
+           name: "wheelPrecisionX",
```

#### 64. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1393-L1394` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L413-L414) · [Before (L1393-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1393-L1394)

```diff
-             has: QQ => "_alphaMode" in QQ,
-             get: QQ => QQ._alphaMode,
+             has: kk => "wheelPrecisionX" in kk,
+             get: kk => kk.wheelPrecisionX,
```

#### 65. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1396` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L416) · [Before (L1396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1396)

```diff
-               QQ._alphaMode = FQ
+               kk.wheelPrecisionX = ek
```

#### 66. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1400` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L420) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1400)

```diff
-         }, GF, pF), (0, LQ.i)(null, null, rQ, {
+         }, bk, rk), (0, Dk.d)(null, null, ik, {
```

#### 67. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1402` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L422) · [Before (L1402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1402)

```diff
-           name: "_needDepthPrePass",
+           name: "wheelPrecisionY",
```

#### 68. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1406-L1407` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L426-L427) · [Before (L1406-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1406-L1407)

```diff
-             has: QQ => "_needDepthPrePass" in QQ,
-             get: QQ => QQ._needDepthPrePass,
+             has: kk => "wheelPrecisionY" in kk,
+             get: kk => kk.wheelPrecisionY,
```

#### 69. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1409` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L429) · [Before (L1409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1409)

```diff
-               QQ._needDepthPrePass = FQ
+               kk.wheelPrecisionY = ek
```

#### 70. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1413` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L433) · [Before (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1413)

```diff
-         }, cF, CF), (0, LQ.i)(null, null, IQ, {
+         }, Pk, Mk), (0, Dk.d)(null, null, Sk, {
```

#### 71. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1415` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L435) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1415)

```diff
-           name: "disableDepthWrite",
+           name: "wheelPrecisionZ",
```

#### 72. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1419-L1420` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L439-L440) · [Before (L1419-L1420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1419-L1420)

```diff
-             has: QQ => "disableDepthWrite" in QQ,
-             get: QQ => QQ.disableDepthWrite,
+             has: kk => "wheelPrecisionZ" in kk,
+             get: kk => kk.wheelPrecisionZ,
```

#### 73. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1422` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L442) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1422)

```diff
-               QQ.disableDepthWrite = FQ
+               kk.wheelPrecisionZ = ek
```

#### 74. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1426-L1428` → after: `L446-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L446-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L446-L563) · [Before (L1426-L1428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1426-L1428)

```diff
-         }, SF, iF), (0, LQ.i)(null, null, UQ, {
-           kind: "field",
-           name: "disableColorWrite",
+         }, nk, Hk), mk && Object.defineProperty(kk, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: mk
+         })
+       })(), kk
+     })();
+     var wk;
+     ! function(kk) {
+       kk[kk.MoveRelative = 0] = "MoveRelative", kk[kk.RotateRelative = 1] = "RotateRelative", kk[kk.MoveScene = 2] = "MoveScene"
+     }(wk || (wk = {}));
+     let lk = (() => {
+       var kk;
+       let ek, ik, bk, rk, Pk, mk, Mk, Kk, xk, nk = Hk,
+         Uk = [];
+ ... (102 more added lines; see GitHub link above)
```

#### 75. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1432-L1433` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L567) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1432-L1433)

```diff
-             has: QQ => "disableColorWrite" in QQ,
-             get: QQ => QQ.disableColorWrite,
+             has: kk => "wheelXMoveRelative" in kk,
```

#### 76. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1435` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L569) · [Before (L1435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1435)

```diff
-               QQ.disableColorWrite = FQ
+               kk.wheelXMoveRelative = ek
```

#### 77. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1439-L1441` → after: `L573-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L573-L575) · [Before (L1439-L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1439-L1441)

```diff
-         }, WF, RF), (0, LQ.i)(null, null, NQ, {
-           kind: "field",
-           name: "forceDepthWrite",
+         }, null, Uk), (0, Dk.d)(kk, null, ik, {
+           kind: "setter",
+           name: "wheelYMoveRelative",
```

#### 78. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1445-L1446` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L579) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1445-L1446)

```diff
-             has: QQ => "forceDepthWrite" in QQ,
-             get: QQ => QQ.forceDepthWrite,
+             has: kk => "wheelYMoveRelative" in kk,
```

#### 79. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1448` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L581) · [Before (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1448)

```diff
-               QQ.forceDepthWrite = FQ
+               kk.wheelYMoveRelative = ek
```

#### 80. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1452-L1454` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L585-L587) · [Before (L1452-L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1452-L1454)

```diff
-         }, OF, sF), (0, LQ.i)(null, null, TQ, {
-           kind: "field",
-           name: "depthFunction",
+         }, null, Uk), (0, Dk.d)(kk, null, bk, {
+           kind: "setter",
+           name: "wheelZMoveRelative",
```

#### 81. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1458-L1459` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L591) · [Before (L1458-L1459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1458-L1459)

```diff
-             has: QQ => "depthFunction" in QQ,
-             get: QQ => QQ.depthFunction,
+             has: kk => "wheelZMoveRelative" in kk,
```

#### 82. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1461` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L593) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1461)

```diff
-               QQ.depthFunction = FQ
+               kk.wheelZMoveRelative = ek
```

#### 83. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1465-L1467` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L597-L599) · [Before (L1465-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1465-L1467)

```diff
-         }, rF, IF), (0, LQ.i)(null, null, KQ, {
-           kind: "field",
-           name: "separateCullingPass",
+         }, null, Uk), (0, Dk.d)(kk, null, rk, {
+           kind: "setter",
+           name: "wheelXRotateRelative",
```

#### 84. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1471-L1472` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L603) · [Before (L1471-L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1471-L1472)

```diff
-             has: QQ => "separateCullingPass" in QQ,
-             get: QQ => QQ.separateCullingPass,
+             has: kk => "wheelXRotateRelative" in kk,
```

#### 85. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1474` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L605) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1474)

```diff
-               QQ.separateCullingPass = FQ
+               kk.wheelXRotateRelative = ek
```

#### 86. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1478-L1480` → after: `L609-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L609-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L609-L611) · [Before (L1478-L1480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1478-L1480)

```diff
-         }, UF, NF), (0, LQ.i)(null, null, zQ, {
-           kind: "field",
-           name: "_fogEnabled",
+         }, null, Uk), (0, Dk.d)(kk, null, Pk, {
+           kind: "setter",
+           name: "wheelYRotateRelative",
```

#### 87. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1484-L1485` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L615) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1484-L1485)

```diff
-             has: QQ => "_fogEnabled" in QQ,
-             get: QQ => QQ._fogEnabled,
+             has: kk => "wheelYRotateRelative" in kk,
```

#### 88. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1487` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L617) · [Before (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1487)

```diff
-               QQ._fogEnabled = FQ
+               kk.wheelYRotateRelative = ek
```

#### 89. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1491-L1493` → after: `L621-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L621-L623) · [Before (L1491-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1491-L1493)

```diff
-         }, TF, KF), (0, LQ.i)(null, null, lQ, {
-           kind: "field",
-           name: "pointSize",
+         }, null, Uk), (0, Dk.d)(kk, null, mk, {
+           kind: "setter",
+           name: "wheelZRotateRelative",
```

#### 90. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1497-L1498` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L627) · [Before (L1497-L1498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1497-L1498)

```diff
-             has: QQ => "pointSize" in QQ,
-             get: QQ => QQ.pointSize,
+             has: kk => "wheelZRotateRelative" in kk,
```

#### 91. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1500` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L629) · [Before (L1500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1500)

```diff
-               QQ.pointSize = FQ
+               kk.wheelZRotateRelative = ek
```

#### 92. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1504-L1506` → after: `L633-L635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L633-L635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L633-L635) · [Before (L1504-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1504-L1506)

```diff
-         }, zF, lF), (0, LQ.i)(null, null, jQ, {
-           kind: "field",
-           name: "zOffset",
+         }, null, Uk), (0, Dk.d)(kk, null, Mk, {
+           kind: "setter",
+           name: "wheelXMoveScene",
```

#### 93. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1510-L1511` → after: `L639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L639) · [Before (L1510-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1510-L1511)

```diff
-             has: QQ => "zOffset" in QQ,
-             get: QQ => QQ.zOffset,
+             has: kk => "wheelXMoveScene" in kk,
```

#### 94. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1513` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L641) · [Before (L1513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1513)

```diff
-               QQ.zOffset = FQ
+               kk.wheelXMoveScene = ek
```

#### 95. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1517-L1519` → after: `L645-L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L645-L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L645-L647) · [Before (L1517-L1519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1517-L1519)

```diff
-         }, jF, aF), (0, LQ.i)(null, null, aQ, {
-           kind: "field",
-           name: "zOffsetUnits",
+         }, null, Uk), (0, Dk.d)(kk, null, Kk, {
+           kind: "setter",
+           name: "wheelYMoveScene",
```

#### 96. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1523-L1524` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L651) · [Before (L1523-L1524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1523-L1524)

```diff
-             has: QQ => "zOffsetUnits" in QQ,
-             get: QQ => QQ.zOffsetUnits,
+             has: kk => "wheelYMoveScene" in kk,
```

#### 97. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1526` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L653) · [Before (L1526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1526)

```diff
-               QQ.zOffsetUnits = FQ
+               kk.wheelYMoveScene = ek
```

#### 98. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1530-L1532` → after: `L657-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L657-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L657-L659) · [Before (L1530-L1532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1530-L1532)

```diff
-         }, XF, fF), (0, LQ.i)(null, null, hQ, {
-           kind: "field",
-           name: "_isVertexOutputInvariant",
+         }, null, Uk), (0, Dk.d)(kk, null, xk, {
+           kind: "setter",
+           name: "wheelZMoveScene",
```

#### 99. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1536-L1537` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L663) · [Before (L1536-L1537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1536-L1537)

```diff
-             has: QQ => "_isVertexOutputInvariant" in QQ,
-             get: QQ => QQ._isVertexOutputInvariant,
+             has: kk => "wheelZMoveScene" in kk,
```

#### 100. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1539` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L665) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1539)

```diff
-               QQ._isVertexOutputInvariant = FQ
+               kk.wheelZMoveScene = ek
```

#### 101. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1543` → after: `L669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L669) · [Before (L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1543)

```diff
-         }, VF, hF), oQ && Object.defineProperty(QQ, Symbol.metadata, {
+         }, null, Uk), Sk && Object.defineProperty(kk, Symbol.metadata, {
```

#### 102. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1549-L1555` → after: `L675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L675) · [Before (L1549-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1549-L1555)

```diff
-       })(), QQ.TriangleFillMode = 0, QQ.WireFrameFillMode = 1, QQ.PointFillMode = 2, QQ.PointListDrawMode = 3, QQ.LineListDrawMode = 4, QQ.LineLoopDrawMode = 5, QQ.LineStripDrawMode = 6, QQ.TriangleStripDrawMode = 7, QQ.TriangleFanDrawMode = 8, QQ.ClockWiseSideOrientation = 0, QQ … [truncated]
-         QQ._FresnelDirtyCallBack(FQ), QQ._MiscDirtyCallBack(FQ)
-       }, QQ._TextureAndMiscDirtyCallBack = FQ => {
-         QQ._TextureDirtyCallBack(FQ), QQ._MiscDirtyCallBack(FQ)
-       }, QQ._DirtyCallbackArray = [], QQ._RunDirtyCallBacks = FQ => {
-         for (const wQ of QQ._DirtyCallbackArray) wQ(FQ)
-       }, QQ
+       })(), kk
```

#### 103. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1557-L1871` → after: `L677-L678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L677-L678) · [Before (L1557-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1557-L1871)

```diff
-     Object.getOwnPropertyDescriptor(MQ.prototype, "pluginManager") || Object.defineProperty(MQ.prototype, "pluginManager", (0, eQ.e)("Material", "pluginManager"))
-   },
-   39760: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => qQ
-     });
-     var LQ = wQ(39295);
-     class qQ {
-       static get DiffuseTextureEnabled() {
-         return this._DiffuseTextureEnabled
-       }
-       static set DiffuseTextureEnabled(QQ) {
-         this._DiffuseTextureEnabled !== QQ && (this._DiffuseTextureEnabled = QQ, LQ.e.MarkAllMaterialsAsDirty(1))
-       }
-       static get BaseWeightTextureEnabled() {
-         return this._BaseWeightTextureEnabled
- ... (299 more removed lines; see GitHub link above)
+     rk.e.FreeCameraMouseWheelInput = lk;
+     let pk = (() => {
```

#### 104. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L1873-L2092` → after: `L680-L713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L680-L713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L680-L713) · [Before (L1873-L2092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L1873-L2092)

```diff
-       if (FQ && QQ && (QQ.computeBonesUsingShaders && FQ._bonesComputationForcedToCPU && (QQ.computeBonesUsingShaders = !1), QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton)) {
-         const qQ = QQ.skeleton;
-         if (qQ.isUsingTextureForMatrices && FQ.getUniformIndex("boneTextureInfo") > -1) {
-           const wQ = qQ.getTransformMatrixTexture(QQ);
-           FQ.setTexture("boneSampler", wQ), FQ.setFloat2("boneTextureInfo", qQ._textureWidth, qQ._textureHeight)
-         } else {
-           const oQ = qQ.getTransformMatrices(QQ);
-           oQ && (FQ.setMatrices("mBones", oQ), wQ && QQ.iN().prePassRenderer && QQ.iN().prePassRenderer.getIndex(2) && (wQ.previousBones[QQ.uniqueId] || (wQ.previousBones[QQ.uniqueId] = oQ.slice()), FQ.setMatrices("mPreviousBones", wQ.previousBones[QQ.uniqueId]), LQ = oQ, wQ.prev … [truncated]
-         }
-       }
-     }
- 
-     function SQ(QQ, FQ, wQ, LQ, qQ) {
-       let oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-       QQ._bindLight(FQ, wQ, LQ, qQ, oQ)
-     }
- ... (204 more removed lines; see GitHub link above)
+       let ek, ik, bk = [],
+         rk = [],
+         Pk = [],
+         Mk = [];
+       return kk = class {
+         constructor() {
+           let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           this.allowMouse = kk, this.touchAngularSensibility = (0, Dk.e)(this, bk, 2e5), this.touchMoveSensibility = ((0, Dk.e)(this, rk), (0, Dk.e)(this, Pk, 250)), this.singleFingerRotate = ((0, Dk.e)(this, Mk), !1), this._offsetX = null, this._offsetY = null, this._pointerPres … [truncated]
+         }
+         attachControl(kk) {
+           kk = mk.i.BackCompatCameraNoPreventDefault(arguments);
+           let ek = null;
+           if (void 0 === this._pointerInput && (this._onLostFocus = () => {
+               this._offsetX = null, this._offsetY = null
+             }, this._pointerInput = ik => {
+               const Dk = ik.event,
+ ... (18 more added lines; see GitHub link above)
```

#### 105. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2094` → after: `L715-L717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L715-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L715-L717) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2094)

```diff
-             }
+             }), this._observer = this.camera.XF()._inputManager._addCameraPointerObserver(this._pointerInput, xk.c.POINTERDOWN | xk.c.POINTERUP | xk.c.POINTERMOVE), this._onLostFocus) {
+             const kk = this.camera.JU().getInputElement();
+             kk && kk.addEventListener("blur", this._onLostFocus)
```

#### 106. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2296-L2325` → after: `L720-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L720-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L720-L726) · [Before (L2296-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2296-L2325)

```diff
-       }
-       return wQ
-     }
- 
-     function oQ(QQ, FQ) {
-       FQ.forEach(((FQ, wQ) => {
-         const LQ = `vp_${wQ}_info`;
-         QQ.setFloat4(LQ, FQ.offset, FQ.stride, FQ.type, FQ.normalized ? 1 : 0)
-       }))
-     }
-   },
-   39741: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       c: () => kQ,
-       e: () => vQ
-     });
- ... (14 more removed lines; see GitHub link above)
+         detachControl() {
+           if (this._pointerInput) {
+             if (this._observer && (this.camera.XF()._inputManager._removeCameraPointerObserver(this._observer), this._observer = null), this._onLostFocus) {
+               const kk = this.camera.JU().getInputElement();
+               kk && kk.removeEventListener("blur", this._onLostFocus), this._onLostFocus = null
+             }
+             this._pointerPressed.length = 0, this._offsetX = null, this._offsetY = null
```

#### 107. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2328-L2333` → after: `L729-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L729-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L729-L746) · [Before (L2328-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2328-L2333)

```diff
-         static extractMinAndMax(QQ, FQ, wQ, LQ, qQ, oQ) {
-           for (let DQ = FQ, kQ = FQ * LQ; DQ < FQ + wQ; DQ++, kQ += LQ) {
-             const FQ = QQ[kQ],
-               wQ = QQ[kQ + 1],
-               LQ = QQ[kQ + 2];
-             qQ.minimizeInPlaceFromFloats(FQ, wQ, LQ), oQ.maximizeInPlaceFromFloats(FQ, wQ, LQ)
+         checkInputs() {
+           if (null === this._offsetX || null === this._offsetY) return;
+           if (0 === this._offsetX && 0 === this._offsetY) return;
+           const kk = this.camera,
+             ek = kk.movement.input,
+             ik = ek.getEntry("touch", "rotate"),
+             Dk = ek.getEntry("touch", "translate"),
+             fk = kk._calculateHandednessMultiplier(),
+             bk = this.singleFingerRotate && 1 === this._pointerPressed.length || !this.singleFingerRotate && this._pointerPressed.length > 1;
+           if (ik) {
+             const ek = ik.sensitivity ?? 1 / this.touchAngularSensibility;
+             kk.cameraRotation.y = this._offsetX * fk * ek, bk && (kk.cameraRotation.x = -this._offsetY * fk * ek)
+           }
+           if (!bk && Dk) {
+             const ek = kk._computeLocalCameraSpeed(),
+               ik = Dk.sensitivity ?? (0 !== this.touchMoveSensibility ? 1 / this.touchMoveSensibility : 0),
+ ... (2 more added lines; see GitHub link above)
```

#### 108. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2338-L2345` → after: `L757-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L757-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L757-L760) · [Before (L2338-L2345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2338-L2345)

```diff
-         FQ = [oQ.i.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
-         }))], wQ = [oQ.i.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], (0, LQ.i)(QQ, null, FQ, {
-           kind: "method",
-           name: "extractMinAndMaxIndexed",
-           static: !0,
+         ek = [(0, fk.I)()], ik = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
+           kind: "field",
+           name: "touchAngularSensibility",
+           static: !1,
```

#### 109. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2348-L2349` → after: `L763-L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L763-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L763-L767) · [Before (L2348-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2348-L2349)

```diff
-             has: QQ => "extractMinAndMaxIndexed" in QQ,
-             get: QQ => QQ.extractMinAndMaxIndexed
+             has: kk => "touchAngularSensibility" in kk,
+             get: kk => kk.touchAngularSensibility,
+             set: (kk, ek) => {
+               kk.touchAngularSensibility = ek
+             }
```

#### 110. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2352-L2355` → after: `L770-L773`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L770-L773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L770-L773) · [Before (L2352-L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2352-L2355)

```diff
-         }, null, qQ), (0, LQ.i)(QQ, null, wQ, {
-           kind: "method",
-           name: "extractMinAndMax",
-           static: !0,
+         }, bk, rk), (0, Dk.d)(null, null, ik, {
+           kind: "field",
+           name: "touchMoveSensibility",
+           static: !1,
```

#### 111. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2358-L2359` → after: `L776-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L776-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L776-L780) · [Before (L2358-L2359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2358-L2359)

```diff
-             has: QQ => "extractMinAndMax" in QQ,
-             get: QQ => QQ.extractMinAndMax
+             has: kk => "touchMoveSensibility" in kk,
+             get: kk => kk.touchMoveSensibility,
+             set: (kk, ek) => {
+               kk.touchMoveSensibility = ek
+             }
```

#### 112. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2362` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L783) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2362)

```diff
-         }, null, qQ), DQ && Object.defineProperty(QQ, Symbol.metadata, {
+         }, Pk, Mk), Sk && Object.defineProperty(kk, Symbol.metadata, {
```

#### 113. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2367` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L788) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2367)

```diff
-         }), (0, LQ.l)(QQ, qQ)
+         })
```

#### 114. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2370-L2427` → after: `L791-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L791-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L791-L795) · [Before (L2370-L2427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2370-L2427)

```diff
- 
-     function kQ(QQ, FQ, wQ, LQ) {
-       let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const kQ = new qQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         vQ = new qQ.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return DQ.extractMinAndMaxIndexed(QQ, FQ, wQ, LQ, kQ, vQ), oQ && (kQ.x -= kQ.x * oQ.x + oQ.y, kQ.y -= kQ.y * oQ.x + oQ.y, kQ.z -= kQ.z * oQ.x + oQ.y, vQ.x += vQ.x * oQ.x + oQ.y, vQ.y += vQ.y * oQ.x + oQ.y, vQ.z += vQ.z * oQ.x + oQ.y), {
-         minimum: kQ,
-         maximum: vQ
-       }
-     }
- 
-     function vQ(QQ, FQ, wQ) {
-       let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         oQ = arguments.length > 4 ? arguments[4] : void 0;
-       const kQ = new qQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         vQ = new qQ.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
- ... (42 more removed lines; see GitHub link above)
+     rk.e.FreeCameraTouchInput = pk;
+     var yk, Yk, Lk, Ck = ik(39447);
+     class Ak extends rk.i {
+       constructor(kk) {
+         super(kk), this._mouseInput = null, this._mouseWheelInput = null
```

#### 115. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2429-L2430` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L797-L798) · [Before (L2429-L2430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2429-L2430)

```diff
-       _setMainDrawWrapperOverride(QQ) {
-         this._mainDrawWrapperOverride = QQ
+       addKeyboard() {
+         return this.add(new Mk), this
```

#### 116. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2432-L2477` → after: `L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L800) · [Before (L2432-L2477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2432-L2477)

```diff
-       setEffect(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           wQ = arguments.length > 2 ? arguments[2] : void 0,
-           LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const qQ = this._drawWrapper;
-         qQ.setEffect(QQ, FQ, LQ), void 0 !== wQ && (qQ.materialContext = wQ), QQ || (qQ.defines = null, qQ.materialContext = void 0)
-       }
-       resetDrawCache(QQ) {
-         let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this._drawWrappers) {
-           if (void 0 !== QQ) return void this._removeDrawWrapper(QQ, !0, FQ);
-           for (const QQ of this._drawWrappers) QQ?.dispose(FQ)
-         }
-         this._drawWrappers = []
-       }
-       static AddToMesh(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
- ... (30 more removed lines; see GitHub link above)
+       addMouse() {
```

#### 117. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2479-L2503` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L802) · [Before (L2479-L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2479-L2503)

```diff
-         const FQ = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
-         if (!FQ) return QQ && this._mesh.iN()._hasDefaultMaterial ? this._mesh.iN().defaultMaterial : null;
-         if (this._isMultiMaterial(FQ)) {
-           const QQ = FQ.getSubMaterial(this.materialIndex);
-           return this._currentMaterial !== QQ && (this._currentMaterial = QQ, this.resetDrawCache()), QQ
-         }
-         return FQ
-       }
-       _isMultiMaterial(QQ) {
-         return void 0 !== QQ.getSubMaterial
-       }
-       refreshBoundingInfo() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
-         if (QQ || (QQ = this._renderingMesh.getVerticesData(qQ.h.PositionKind)), !QQ) return this._boundingInfo = this._mesh.sK(), this;
-         const FQ = this._renderingMesh.OLQ();
- ... (9 more removed lines; see GitHub link above)
+         return this._mouseInput || (this._mouseInput = new nk(kk), this.add(this._mouseInput)), this
```

#### 118. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2505-L2506` → after: `L804-L805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L804-L805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L804-L805) · [Before (L2505-L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2505-L2506)

```diff
-       _checkCollision(QQ) {
-         return this.sK()._checkCollision(QQ)
+       removeMouse() {
+         return this._mouseInput && this.remove(this._mouseInput), this
```

#### 119. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2508-L2510` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L807-L808) · [Before (L2508-L2510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2508-L2510)

```diff
-       updateBoundingInfo(QQ) {
-         let FQ = this.sK();
-         return FQ || (this.refreshBoundingInfo(), FQ = this.sK()), FQ && FQ.update(QQ), this
+       addMouseWheel() {
+         return this._mouseWheelInput || (this._mouseWheelInput = new lk, this.add(this._mouseWheelInput)), this
```

#### 120. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2512-L2514` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L810-L811) · [Before (L2512-L2514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2512-L2514)

```diff
-       isInFrustum(QQ) {
-         const FQ = this.sK();
-         return !!FQ && FQ.isInFrustum(QQ, this._mesh.cullingStrategy)
+       removeMouseWheel() {
+         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
```

#### 121. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2516-L2518` → after: `L813-L814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L813-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L813-L814) · [Before (L2516-L2518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2516-L2518)

```diff
-       isCompletelyInFrustum(QQ) {
-         const FQ = this.sK();
-         return !!FQ && FQ.isCompletelyInFrustum(QQ)
+       addTouch() {
+         return this.add(new pk), this
```

#### 122. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2520-L2521` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L816-L817) · [Before (L2520-L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2520-L2521)

```diff
-       render(QQ) {
-         return this._renderingMesh.render(this, QQ, this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : void 0), this
+       clear() {
+         super.clear(), this._mouseInput = null
```

#### 123. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2523-L2586` → after: `L819-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L819-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L819-L836) · [Before (L2523-L2586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2523-L2586)

```diff
-       _getLinesIndexBuffer(QQ, FQ) {
-         if (!this._linesIndexBuffer) {
-           const wQ = 6 * Math.floor(this.indexCount / 3),
-             LQ = this.verticesStart + this.verticesCount > 65535 ? new Uint32Array(wQ) : new Uint16Array(wQ);
-           let qQ = 0;
-           if (0 === QQ.length)
-             for (let QQ = this.indexStart; QQ < this.indexStart + this.indexCount; QQ += 3) LQ[qQ++] = QQ, LQ[qQ++] = QQ + 1, LQ[qQ++] = QQ + 1, LQ[qQ++] = QQ + 2, LQ[qQ++] = QQ + 2, LQ[qQ++] = QQ;
-           else
-             for (let FQ = this.indexStart; FQ < this.indexStart + this.indexCount; FQ += 3) LQ[qQ++] = QQ[FQ], LQ[qQ++] = QQ[FQ + 1], LQ[qQ++] = QQ[FQ + 1], LQ[qQ++] = QQ[FQ + 2], LQ[qQ++] = QQ[FQ + 2], LQ[qQ++] = QQ[FQ];
-           this._linesIndexBuffer = FQ.createIndexBuffer(LQ), this._linesIndexCount = LQ.length
-         }
-         return this._linesIndexBuffer
-       }
-       canIntersects(QQ) {
-         const FQ = this.sK();
-         return !!FQ && QQ.intersectsBox(FQ.boundingBox)
- ... (48 more removed lines; see GitHub link above)
+     }(yk = Ak.prototype).addDeviceOrientation ?? (yk.addDeviceOrientation = (0, Ck.i)("FreeCameraInputsManager", "addDeviceOrientation")), (Yk = Ak.prototype).addVirtualJoystick ?? (Yk.addVirtualJoystick = (0, Ck.i)("FreeCameraInputsManager", "addVirtualJoystick")), (Lk = Ak.prot … [truncated]
+     var jk = ik(39467),
+       sk = ik(36734);
+     let dk = (() => {
+         var kk;
+         let ek, ik, rk, Pk, Mk = bk.e,
+           Kk = [],
+           xk = [],
+           nk = [],
+           Uk = [],
+           Hk = [],
+           wk = [],
+           lk = [],
+           pk = [];
+         return kk = class extends Mk {
+           get angularSensibility() {
+ ... (2 more added lines; see GitHub link above)
```

#### 124. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2588-L2596` → after: `L838-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L838-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L838-L840) · [Before (L2588-L2596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2588-L2596)

```diff
-           const bQ = FQ[LQ],
-             YQ = FQ[uQ],
-             xQ = FQ[HQ];
-           if (!bQ || !YQ || !xQ) continue;
-           if (DQ && !DQ(bQ, YQ, xQ, QQ, LQ, uQ, HQ)) continue;
-           const AQ = QQ.intersectsTriangle(bQ, YQ, xQ);
-           if (AQ) {
-             if (AQ.distance < 0) continue;
-             if ((oQ || !kQ || AQ.distance < kQ.distance) && (kQ = AQ, kQ.faceId = vQ, oQ)) break
+           set angularSensibility(kk) {
+             const ek = this.inputs.attached.mouse;
+             ek && (ek.angularSensibility = kk)
```

#### 125. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2598-L2611` → after: `L842-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L842-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L842-L844) · [Before (L2598-L2611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2598-L2611)

```diff
-         }
-         return kQ
-       }
-       _intersectUnIndexedTriangles(QQ, FQ, wQ, LQ, qQ) {
-         let oQ = null;
-         for (let DQ = this.verticesStart; DQ < this.verticesStart + this.verticesCount; DQ += 3) {
-           const wQ = FQ[DQ],
-             kQ = FQ[DQ + 1],
-             vQ = FQ[DQ + 2];
-           if (qQ && !qQ(wQ, kQ, vQ, QQ, -1, -1, -1)) continue;
-           const mQ = QQ.intersectsTriangle(wQ, kQ, vQ);
-           if (mQ) {
-             if (mQ.distance < 0) continue;
-             if ((LQ || !oQ || mQ.distance < oQ.distance) && (oQ = mQ, oQ.faceId = DQ / 3, LQ)) break
+           get keysUp() {
+             const kk = this.inputs.attached.keyboard;
+             return kk ? kk.keysUp : []
```

#### 126. `bundles/bloxd.io/chunks/js/254.js` (Changed code · before: `L2613-L2648` → after: `L846-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-32f19d726daafa1bb725b398de75a3129e09e63dcf5a547cdafe2fee4f7b56b6) · [After (L846-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/254.js#L846-L1033) · [Before (L2613-L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/254.js#L2613-L2648)

```diff
-         }
-         return oQ
-       }
-       _rebuild() {
-         this._linesIndexBuffer && (this._linesIndexBuffer = null)
-       }
-       clone(QQ, FQ) {
-         const wQ = new uQ(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, QQ, FQ, !1);
-         if (!this.IsGlobal) {
-           const QQ = this.sK();
-           if (!QQ) return wQ;
-           wQ._boundingInfo = new DQ.d(QQ.minimum, QQ.maximum)
-         }
-         return wQ
-       }
-       dispose() {
- ... (20 more removed lines; see GitHub link above)
+           set keysUp(kk) {
+             const ek = this.inputs.attached.keyboard;
+             ek && (ek.keysUp = kk)
+           }
+           get keysUpward() {
+             const kk = this.inputs.attached.keyboard;
+             return kk ? kk.keysUpward : []
+           }
+           set keysUpward(kk) {
+             const ek = this.inputs.attached.keyboard;
+             ek && (ek.keysUpward = kk)
+           }
+           get keysDown() {
+             const kk = this.inputs.attached.keyboard;
+             return kk ? kk.keysDown : []
+           }
+ ... (172 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/255.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/255.js` (48 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c)

#### 1. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L4)

```diff
-   41005: (QQ, FQ, wQ) => {
+   39822: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L8-L19` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L8-L16) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L8-L19)

```diff
-     class LQ {}
-     LQ.AUTOSAMPLERSUFFIX = "Sampler", LQ.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", LQ.ALPHA_DISABLE = 0, LQ.ALPHA_ADD = 1, LQ.ALPHA_COMBINE = 2, LQ.ALPHA_SUBTRACT = 3, LQ.ALPHA_MULTIPLY = 4, LQ.ALPHA_MAXIMIZED = 5, LQ.ALPHA_ONEONE = 6, LQ.ALPHA_PREMULTIPLIED = 7, LQ.ALPH … [truncated]
-   },
-   40986: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       b: () => vQ
-     });
-     var LQ = wQ(39402),
-       qQ = wQ(39409),
-       oQ = wQ(36696),
-       DQ = wQ(39690),
-       kQ = wQ(39655);
+     var Dk = ik(39566),
+       fk = ik(39570),
+       Sk = ik(36698),
+       bk = ik(36874),
+       rk = ik(39787),
+       Pk = ik(39696),
+       mk = ik(36734),
+       Mk = ik(39769),
+       Kk = ik(39585);
```

#### 3. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L21-L22` → after: `L18-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L18-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L18-L39) · [Before (L21-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L21-L22)

```diff
-       var QQ;
-       let FQ, wQ, vQ, mQ, uQ = DQ.c,
+       var kk, ek;
+       let ik, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk = rk.b,
+         sk = [],
+         dk = [],
+         Vk = [],
+         Fk = [],
+         uk = [],
+         qk = [],
+         Ik = [],
+         zk = [],
+         Qk = [],
+         vk = [],
+         Ek = [],
+         hk = [],
+         ak = [],
+         Wk = [],
+ ... (6 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L25-L29` → after: `L42-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L42-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L42-L43) · [Before (L25-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L25-L29)

```diff
-         constructor() {
-           super(...arguments), this._position = (0, LQ.l)(this, HQ), this._needProjectionMatrixCompute = !0, this._viewMatrix = oQ.c.Identity(), this._projectionMatrix = oQ.c.Identity()
-         }
-         _setPosition(QQ) {
-           this._position = QQ
+         get range() {
+           return this._range
```

#### 5. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L31-L32` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L45-L46) · [Before (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L31-L32)

```diff
-         get position() {
-           return this._position
+         set range(kk) {
+           this._range = kk, this._inverseSquaredRange = 1 / (this.range * this.range)
```

#### 6. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L34-L35` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L48-L49) · [Before (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L34-L35)

```diff
-         set position(QQ) {
-           this._setPosition(QQ)
+         get intensityMode() {
+           return this._intensityMode
```

#### 7. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L37-L38` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L51-L52) · [Before (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L37-L38)

```diff
-         _setDirection(QQ) {
-           this._direction = QQ
+         set intensityMode(kk) {
+           this._intensityMode = kk, this._computePhotometricScale()
```

#### 8. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L40-L41` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L54-L55) · [Before (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L40-L41)

```diff
-         get direction() {
-           return this._direction
+         get radius() {
+           return this._radius
```

#### 9. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L43-L44` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L57-L58) · [Before (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L43-L44)

```diff
-         set direction(QQ) {
-           this._setDirection(QQ)
+         set radius(kk) {
+           this._radius = kk, this._computePhotometricScale()
```

#### 10. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L46-L47` → after: `L60-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L60-L61) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L46-L47)

```diff
-         get shadowMinZ() {
-           return this._shadowMinZ
+         get renderPriority() {
+           return (0, Dk.b)(this, ek, "f")
```

#### 11. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L49-L50` → after: `L63-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L63-L64) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L49-L50)

```diff
-         set shadowMinZ(QQ) {
-           this._shadowMinZ = QQ, this.forceProjectionMatrixCompute()
+         set renderPriority(kk) {
+           (0, Dk.c)(this, ek, kk, "f")
```

#### 12. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L52-L53` → after: `L66-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L66-L67) · [Before (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L52-L53)

```diff
-         get shadowMaxZ() {
-           return this._shadowMaxZ
+         get shadowEnabled() {
+           return this._shadowEnabled
```

#### 13. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L55-L56` → after: `L69-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L69-L70) · [Before (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L55-L56)

```diff
-         set shadowMaxZ(QQ) {
-           this._shadowMaxZ = QQ, this.forceProjectionMatrixCompute()
+         set shadowEnabled(kk) {
+           this._shadowEnabled !== kk && (this._shadowEnabled = kk, this._markMeshesAsLightDirty())
```

#### 14. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L58-L59` → after: `L72-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L72-L73) · [Before (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L58-L59)

```diff
-         computeTransformedInformation() {
-           return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = oQ.p.Zero()), oQ.p.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDire … [truncated]
+         get includedOnlyMeshes() {
+           return this._includedOnlyMeshes
```

#### 15. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L61-L62` → after: `L75-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L75-L76) · [Before (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L61-L62)

```diff
-         getDepthScale() {
-           return 50
+         set includedOnlyMeshes(kk) {
+           this._includedOnlyMeshes = kk, this._hookArrayForIncludedOnly(kk)
```

#### 16. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L64-L65` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L78-L79) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L64-L65)

```diff
-         getShadowDirection(QQ) {
-           return this.transformedDirection ? this.transformedDirection : this.direction
+         get excludedMeshes() {
+           return this._excludedMeshes
```

#### 17. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L67-L77` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L81-L82) · [Before (L67-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L67-L77)

```diff
-         getAbsolutePosition() {
-           return this.transformedPosition ? this.transformedPosition : this.position
-         }
-         setDirectionToTarget(QQ) {
-           return this.direction = oQ.p.Normalize(QQ.subtract(this.position)), this.direction
-         }
-         getRotation() {
-           this.direction.normalize();
-           const QQ = oQ.p.Cross(this.direction, kQ.b.Y),
-             FQ = oQ.p.Cross(QQ, this.direction);
-           return oQ.p.RotationFromAxis(QQ, FQ, this.direction)
+         set excludedMeshes(kk) {
+           this._excludedMeshes = kk, this._hookArrayForExcluded(kk)
```

#### 18. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L79-L80` → after: `L84-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L84-L85) · [Before (L79-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L79-L80)

```diff
-         needCube() {
-           return !1
+         get excludeWithLayerMask() {
+           return this._excludeWithLayerMask
```

#### 19. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L82-L83` → after: `L87-L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L87-L88) · [Before (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L82-L83)

```diff
-         needProjectionMatrixCompute() {
-           return this._needProjectionMatrixCompute
+         set excludeWithLayerMask(kk) {
+           this._excludeWithLayerMask = kk, this._resyncMeshes()
```

#### 20. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L85-L86` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L90-L91) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L85-L86)

```diff
-         forceProjectionMatrixCompute() {
-           this._needProjectionMatrixCompute = !0
+         get includeOnlyWithLayerMask() {
+           return this._includeOnlyWithLayerMask
```

#### 21. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L88-L92` → after: `L93-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L93-L94) · [Before (L88-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L88-L92)

```diff
-         _initCache() {
-           super._initCache(), this._cache.position = oQ.p.Zero()
-         }
-         _isSynchronized() {
-           return !!this._cache.position.equals(this.position)
+         set includeOnlyWithLayerMask(kk) {
+           this._includeOnlyWithLayerMask = kk, this._resyncMeshes()
```

#### 22. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L94-L95` → after: `L96-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L96-L97) · [Before (L94-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L94-L95)

```diff
-         computeWorldMatrix(QQ) {
-           return !QQ && this.isSynchronized() ? (this._currentRenderId = this.iN().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.Qs(this.position), this._worldMatrix || (this._worldMatrix = oQ.c.Identity()), oQ.c.TranslationToRef(this.position.x,  … [truncated]
+         get lightmapMode() {
+           return this._lightmapMode
```

#### 23. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L97-L98` → after: `L99-L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L99-L100) · [Before (L97-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L97-L98)

```diff
-         getDepthMinZ(QQ) {
-           return void 0 !== this.shadowMinZ ? this.shadowMinZ : QQ?.minZ || 0
+         set lightmapMode(kk) {
+           this._lightmapMode !== kk && (this._lightmapMode = kk, this._markMeshesAsLightDirty())
```

#### 24. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L100-L101` → after: `L102-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L102-L103) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L100-L101)

```diff
-         getDepthMaxZ(QQ) {
-           return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : QQ?.maxZ || 1e4
+         getViewMatrix(kk) {
+           return null
```

#### 25. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L103-L104` → after: `L105-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L105-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L105-L136) · [Before (L103-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L103-L104)

```diff
-         setShadowProjectionMatrix(QQ, FQ, wQ) {
-           return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(FQ, wQ, QQ) : this._setDefaultShadowProjectionMatrix(QQ, FQ, wQ), this
+         getProjectionMatrix(kk, ek) {
+           return null
+         }
+         constructor(ik, fk, Sk) {
+           super(ik, fk, !1), this.diffuse = ((0, Dk.e)(this, sk), (0, Dk.e)(this, dk, new bk.e(1, 1, 1))), this.specular = ((0, Dk.e)(this, Vk), (0, Dk.e)(this, Fk, new bk.e(1, 1, 1))), this.falloffType = ((0, Dk.e)(this, uk), (0, Dk.e)(this, qk, kk.FALLOFF_DEFAULT)), this.intens … [truncated]
+         }
+         transferTexturesToEffect(kk, ek) {
+           return this
+         }
+         _bindLight(kk, ek, ik, Dk) {
+           let fk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
+           const Sk = kk.toString();
+           let rk = !1;
+           if (this._uniformBuffer.bindToEffect(ik, "Light" + Sk), this._renderId !== ek.getRenderId() || this._lastUseSpecular !== Dk || !this._uniformBuffer.useUbo) {
+             this._renderId = ek.getRenderId(), this._lastUseSpecular = Dk;
+             const kk = this.getScaledIntensity();
+ ... (16 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L107` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L139) · [Before (L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L107)

```diff
-           super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
+           super._syncParentEnabledState(), this.RL() || this._resyncMeshes()
```

#### 27. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L109-L114` → after: `L141-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L141-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L141-L142) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L109-L114)

```diff
-         getViewMatrix(QQ) {
-           const FQ = oQ.k.Ox[0];
-           let wQ = this.position;
-           this.computeTransformedInformation() && (wQ = this.transformedPosition), oQ.p.NormalizeToRef(this.getShadowDirection(QQ), FQ), 1 === Math.abs(oQ.p.Dot(FQ, oQ.p.Up())) && (FQ.z = 1e-13);
-           const LQ = oQ.k.Ox[1];
-           return wQ.addToRef(FQ, LQ), oQ.c.LookAtLHToRef(wQ, LQ, oQ.p.Up(), this._viewMatrix), this._viewMatrix
+         bV(kk) {
+           super.bV(kk), this._resyncMeshes()
```

#### 28. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L116-L117` → after: `L144-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L144-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L144-L146) · [Before (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L116-L117)

```diff
-         getProjectionMatrix(QQ, FQ) {
-           return this.setShadowProjectionMatrix(this._projectionMatrix, QQ ?? this._viewMatrix, FQ ?? []), this._projectionMatrix
+         getShadowGenerator() {
+           let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+           return null === this._shadowGenerators ? null : this._shadowGenerators.get(kk) ?? null
```

#### 29. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L119` → after: `L148-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L148-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L148-L307) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L119)

```diff
-       }, (() => {
+         getShadowGenerators() {
+           return this._shadowGenerators
+         }
+         getAbsolutePosition() {
+           return Sk.o.Zero()
+         }
+         canAffectMesh(kk) {
+           return !kk || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(kk)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(kk)) && ((0 === this.includeOnlyWithLayerMask | … [truncated]
+         }
+         dispose(kk) {
+           let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this._shadowGenerators) {
+             const kk = this._shadowGenerators.values();
+             for (let ek = kk.next(); !0 !== ek.done; ek = kk.next()) {
+               ek.value.dispose()
+             }
+ ... (144 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L121` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L309) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L121)

```diff
-         FQ = [(0, qQ.F)()], wQ = [(0, qQ.F)()], vQ = [(0, qQ.I)()], mQ = [(0, qQ.I)()], (0, LQ.i)(QQ, null, FQ, {
+         ik = [(0, fk.k)()], xk = [(0, fk.k)()], nk = [(0, fk.I)()], Uk = [(0, fk.I)()], Hk = [(0, fk.I)()], wk = [(0, fk.I)()], lk = [(0, fk.I)()], pk = [(0, fk.I)()], yk = [(0, fk.e)("_reorderLightsInScene")], Yk = [(0, fk.I)("shadowEnabled")], Lk = [(0, fk.I)("excludeWithLayerM … [truncated]
```

#### 31. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L123` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L311) · [Before (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L123)

```diff
-           name: "position",
+           name: "range",
```

#### 32. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L127-L128` → after: `L315-L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L315-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L315-L316) · [Before (L127-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L127-L128)

```diff
-             has: QQ => "position" in QQ,
-             get: QQ => QQ.position
+             has: kk => "range" in kk,
+             get: kk => kk.range
```

#### 33. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L131` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L319) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L131)

```diff
-         }, null, HQ), (0, LQ.i)(QQ, null, wQ, {
+         }, null, sk), (0, Dk.d)(kk, null, wk, {
```

#### 34. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L133` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L321) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L133)

```diff
-           name: "direction",
+           name: "intensityMode",
```

#### 35. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L137-L138` → after: `L325-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR325) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L325-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L325-L326) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L137-L138)

```diff
-             has: QQ => "direction" in QQ,
-             get: QQ => QQ.direction
+             has: kk => "intensityMode" in kk,
+             get: kk => kk.intensityMode
```

#### 36. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L141` → after: `L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L329) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L141)

```diff
-         }, null, HQ), (0, LQ.i)(QQ, null, vQ, {
+         }, null, sk), (0, Dk.d)(kk, null, lk, {
```

#### 37. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L143` → after: `L331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L331) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L143)

```diff
-           name: "shadowMinZ",
+           name: "radius",
```

#### 38. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L147-L148` → after: `L335-L336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L335-L336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L335-L336) · [Before (L147-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L147-L148)

```diff
-             has: QQ => "shadowMinZ" in QQ,
-             get: QQ => QQ.shadowMinZ
+             has: kk => "radius" in kk,
+             get: kk => kk.radius
```

#### 39. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L151-L153` → after: `L339-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L339-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L339-L406) · [Before (L151-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L151-L153)

```diff
-         }, null, HQ), (0, LQ.i)(QQ, null, mQ, {
-           kind: "getter",
-           name: "shadowMaxZ",
+         }, null, sk), (0, Dk.d)(kk, null, yk, {
+           kind: "accessor",
+           name: "renderPriority",
+           static: !1,
+           private: !1,
+           access: {
+             has: kk => "renderPriority" in kk,
+             get: kk => kk.renderPriority,
+             set: (kk, ek) => {
+               kk.renderPriority = ek
+             }
+           },
+           metadata: ek
+         }, hk, ak), (0, Dk.d)(null, null, ik, {
+           kind: "field",
+           name: "diffuse",
+ ... (52 more added lines; see GitHub link above)
```

#### 40. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L157-L158` → after: `L410-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L410-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L410-L414) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L157-L158)

```diff
-             has: QQ => "shadowMaxZ" in QQ,
-             get: QQ => QQ.shadowMaxZ
+             has: kk => "_renderPriority" in kk,
+             get: kk => kk._renderPriority,
+             set: (kk, ek) => {
+               kk._renderPriority = ek
+             }
```

#### 41. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L161` → after: `L417-L469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L417-L469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L417-L469) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L161)

```diff
-         }, null, HQ), oQ && Object.defineProperty(QQ, Symbol.metadata, {
+         }, vk, Ek), (0, Dk.d)(null, null, Yk, {
+           kind: "field",
+           name: "_shadowEnabled",
+           static: !1,
+           private: !1,
+           access: {
+             has: kk => "_shadowEnabled" in kk,
+             get: kk => kk._shadowEnabled,
+             set: (kk, ek) => {
+               kk._shadowEnabled = ek
+             }
+           },
+           metadata: ek
+         }, Wk, tk), (0, Dk.d)(null, null, Lk, {
+           kind: "field",
+           name: "_excludeWithLayerMask",
+ ... (37 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L167` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L475) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L167)

```diff
-       })(), QQ
+       })(), kk.FALLOFF_DEFAULT = Mk.d.FALLOFF_DEFAULT, kk.FALLOFF_PHYSICAL = Mk.d.FALLOFF_PHYSICAL, kk.FALLOFF_GLTF = Mk.d.FALLOFF_GLTF, kk.FALLOFF_STANDARD = Mk.d.FALLOFF_STANDARD, kk.LIGHTMAP_DEFAULT = Mk.d.LIGHTMAP_DEFAULT, kk.LIGHTMAP_SPECULAR = Mk.d.LIGHTMAP_SPECULAR, kk.LIG … [truncated]
```

#### 43. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L170` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L478) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L170)

```diff
-   40998: (QQ, FQ, wQ) => {
+   39787: (kk, ek, ik) => {
```

#### 44. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L172` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L480) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L172)

```diff
-       c: () => qQ
+       b: () => Kk
```

#### 45. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L174-L229` → after: `L482-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L482-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L482-L491) · [Before (L174-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L174-L229)

```diff
-     var LQ = wQ(39897);
-     class qQ extends LQ.e {
-       constructor(QQ, FQ, wQ, qQ, oQ) {
-         let DQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           kQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           vQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
-           mQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
-           uQ = arguments.length > 9 ? arguments[9] : void 0,
-           HQ = arguments.length > 10 ? arguments[10] : void 0,
-           bQ = arguments.length > 11 ? arguments[11] : void 0,
-           YQ = arguments.length > 12 ? arguments[12] : void 0;
-         super(null, oQ, !DQ, kQ, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, uQ), this.format = qQ, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== mQ || (vQ = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== mQ || (vQ = … [truncated]
-       }
-       update(QQ) {
-         this.updateMipLevel(QQ, 0)
-       }
- ... (40 more removed lines; see GitHub link above)
+     var Dk = ik(39566),
+       fk = ik(36698),
+       Sk = ik(39570),
+       bk = ik(36726),
+       rk = ik(36722),
+       Pk = ik(39447),
+       mk = ik(39585);
+     class Mk {
+       constructor() {
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new bk.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
```

#### 46. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L232-L283` → after: `L494-L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L494-L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L494-L508) · [Before (L232-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L232-L283)

```diff
-   },
-   41039: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => LQ.c
-     });
-     var LQ = wQ(39855);
-     (0, LQ.d)()
-   },
-   40988: (QQ, FQ, wQ) => {
-     wQ.d(FQ, {
-       e: () => LQ.b
-     });
-     var LQ = wQ(39881);
-     (0, LQ.f)()
-   },
-   39881: (QQ, FQ, wQ) => {
- ... (36 more removed lines; see GitHub link above)
+     let Kk = (() => {
+       var kk;
+       let ek, ik, Kk, xk, nk, Uk = [],
+         Hk = [],
+         wk = [],
+         lk = [],
+         pk = [],
+         yk = [],
+         Yk = [],
+         Lk = [],
+         Ck = [],
+         Ak = [];
+       return kk = class {
+         static AddNodeConstructor(kk, ek) {
+           this._NodeConstructors[kk] = ek
```

#### 47. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L285-L340` → after: `L510-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L510-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L510-L512) · [Before (L285-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L285-L340)

```diff
-       }
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(QQ) {
-         const FQ = this.material;
-         if (FQ === QQ) return;
-         const wQ = FQ && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(QQ), wQ && FQ?.dispose()
-       }
-       _setInternalMaterial(QQ) {
-         this._setMaterial(QQ), this.material && (this.material.fillMode = mQ.d.LineListDrawMode, this.material.disableLighting = !0)
-       }
- ... (40 more removed lines; see GitHub link above)
+         static Construct(kk, ek, ik, Dk) {
+           const fk = this._NodeConstructors[kk];
+           return fk ? fk(ek, ik, Dk) : null
```

#### 48. `bundles/bloxd.io/chunks/js/255.js` (Changed code · before: `L342-L365` → after: `L514-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4cR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-59526f3021b981a26be8d13060171598d327284a01cd0318979be0ab344caf4c) · [After (L514-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/255.js#L514-L880) · [Before (L342-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/255.js#L342-L365)

```diff
-         return FQ
-       }
-       serialize(QQ) {
-         super.serialize(QQ), QQ.color = this.color.RLQ(), QQ.alpha = this.alpha
-       }
-       static Parse(QQ, FQ) {
-         const wQ = new bQ(QQ.name, FQ);
-         return wQ.color = oQ.b.FromArray(QQ.color), wQ.alpha = QQ.alpha, wQ
-       }
-     }
-     bQ.ForceGLSL = !1;
-     class YQ extends vQ.c {
-       constructor(QQ, FQ) {
-         super(QQ, FQ), this.intersectionThreshold = FQ.intersectionThreshold
-       }
-       getClassName() {
- ... (8 more removed lines; see GitHub link above)
+         set accessibilityTag(kk) {
+           this._accessibilityTag = kk, this.onAccessibilityTagChangedObservable.notifyObservers(kk)
+         }
+         get accessibilityTag() {
+           return this._accessibilityTag
+         }
+         get doNotSerialize() {
+           return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
+         }
+         set doNotSerialize(kk) {
+           this._nodeDataStorage._doNotSerialize = kk
+         }
+         RL() {
+           return this._nodeDataStorage._isDisposed
+         }
+         set parent(kk) {
+ ... (351 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/256.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/256.js` (69 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f)

#### 1. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L4)

```diff
-   39892: (QQ, FQ, wQ) => {
+   40673: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L6-L11` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L6) · [Before (L6-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L6-L11)

```diff
-       d: () => SQ,
-       h: () => cQ,
-       k: () => GQ,
-       o: () => pQ,
-       p: () => MQ,
-       q: () => eQ
+       c: () => tk
```

#### 3. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L13-L23` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L8-L12) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L13-L23)

```diff
-     var LQ = wQ(39426),
-       qQ = wQ(39496),
-       oQ = wQ(36696),
-       DQ = wQ(39561),
-       kQ = wQ(39897),
-       vQ = wQ(39770),
-       mQ = wQ(39455),
-       uQ = wQ(39768),
-       HQ = wQ(36720),
-       bQ = wQ(39754),
-       YQ = wQ(39752),
+     var Dk = ik(39566),
+       fk = ik(39570),
+       Sk = ik(36726),
+       bk = ik(36698),
+       rk = ik(36729),
```

#### 4. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L25-L45` → after: `L14-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L14-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L14-L117) · [Before (L25-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L25-L45)

```diff
-       AQ = wQ(36741);
-     const tQ = {
-       effect: null,
-       subMesh: null
-     };
-     class eQ extends uQ.e {
-       constructor(QQ, FQ, wQ) {
-         let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
-         super(QQ, FQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this. … [truncated]
-           needAlphaBlending: !1,
-           needAlphaTesting: !1,
-           attributes: ["position", "normal", "uv"],
-           uniforms: ["worldViewProjection"],
-           uniformBuffers: [],
-           samplers: [],
-           externalTextures: [],
- ... (5 more removed lines; see GitHub link above)
+       mk = ik(39997),
+       Mk = ik(39742),
+       Kk = ik(39470),
+       xk = ik(36703);
+     class nk {
+       constructor() {
+         this._zoomStopsAnimation = !1, this._idleRotationSpeed = .05, this._idleRotationWaitTime = 2e3, this._idleRotationSpinupTime = 2e3, this.targetAlpha = null, this._attachedCamera = null, this._isPointerDown = !1, this._lastFrameTime = null, this._lastInteractionTime = -1 / … [truncated]
+       }
+       get name() {
+         return "AutoRotation"
+       }
+       set zoomStopsAnimation(kk) {
+         this._zoomStopsAnimation = kk
+       }
+       get zoomStopsAnimation() {
+         return this._zoomStopsAnimation
+ ... (88 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L48-L49` → after: `L128-L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L128-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L128-L129) · [Before (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L48-L49)

```diff
-       get shaderPath() {
-         return this._shaderPath
+       get name() {
+         return "Bouncing"
```

#### 6. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L51-L52` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L131-L132) · [Before (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L51-L52)

```diff
-       set shaderPath(QQ) {
-         this._shaderPath = QQ
+       get autoTransitionRange() {
+         return this._autoTransitionRange
```

#### 7. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L54-L55` → after: `L134-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L134-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L134-L143) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L54-L55)

```diff
-       get options() {
-         return this._options
+       set autoTransitionRange(kk) {
+         if (this._autoTransitionRange === kk) return;
+         this._autoTransitionRange = kk;
+         const ek = this._attachedCamera;
+         ek && (kk ? this._onMeshTargetChangedObserver = ek.onMeshTargetChangedObservable.add((kk => {
+           if (kk && (kk.computeWorldMatrix(!0), kk.hq)) {
+             const ek = kk.hq().diagonalLength;
+             this.lowerRadiusTransitionRange = .05 * ek, this.upperRadiusTransitionRange = .05 * ek
+           }
+         })) : this._onMeshTargetChangedObserver && ek.onMeshTargetChangedObservable.remove(this._onMeshTargetChangedObserver))
```

#### 8. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L57-L58` → after: `L145-L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L145-L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L145-L146) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L57-L58)

```diff
-       get isMultiview() {
-         return this._multiview
+       get attachedNode() {
+         return this._attachedCamera
```

#### 9. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L60-L61` → after: `L148-L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L148-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L148-L152) · [Before (L60-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L60-L61)

```diff
-       getClassName() {
-         return "ShaderMaterial"
+       init() {}
+       attach(kk) {
+         this._attachedCamera = kk, this._onAfterCheckInputsObserver = kk.onAfterCheckInputsObservable.add((() => {
+           this._attachedCamera && (this._isRadiusAtLimit(this._attachedCamera.lowerRadiusLimit) && this._applyBoundRadiusAnimation(this.lowerRadiusTransitionRange), this._isRadiusAtLimit(this._attachedCamera.upperRadiusLimit) && this._applyBoundRadiusAnimation(this.upperRadiusTra … [truncated]
+         }))
```

#### 10. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L63-L64` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L154-L155) · [Before (L63-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L63-L64)

```diff
-       needAlphaBlending() {
-         return this.alpha < 1 || this._options.needAlphaBlending
+       detach() {
+         this._attachedCamera && (this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserver && this._attachedCamera.onMeshTargetChangedObservable.remove(this._onMeshTargetChange … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L66-L67` → after: `L157-L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L157-L158) · [Before (L66-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L66-L67)

```diff
-       needAlphaTesting() {
-         return this._options.needAlphaTesting
+       _isRadiusAtLimit(kk) {
+         return !!this._attachedCamera && (this._attachedCamera.radius === kk && !this._radiusIsAnimating)
```

#### 12. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L69-L70` → after: `L160-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L160-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L160-L164) · [Before (L69-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L69-L70)

```diff
-       _checkUniform(QQ) {
-         -1 === this._options.uniforms.indexOf(QQ) && this._options.uniforms.push(QQ)
+       _applyBoundRadiusAnimation(kk) {
+         if (!this._attachedCamera) return;
+         this._radiusBounceTransition || (wk.EasingFunction.setEasingMode(wk.EasingMode), this._radiusBounceTransition = Hk.b.CreateAnimation("radius", Hk.b.ANIMATIONTYPE_FLOAT, 60, wk.EasingFunction)), this._cachedWheelPrecision = this._attachedCamera.wheelPrecision, this._attach … [truncated]
+         const ek = Hk.b.TransitionTo("radius", this._attachedCamera.radius + kk, this._attachedCamera, this._attachedCamera.XF(), 60, this._radiusBounceTransition, this.transitionDuration, (() => this._clearAnimationLocks()));
+         ek && this._animatables.push(ek)
```

#### 13. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L72-L73` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L166-L167) · [Before (L72-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L72-L73)

```diff
-       setTexture(QQ, FQ) {
-         return -1 === this._options.samplers.indexOf(QQ) && this._options.samplers.push(QQ), this._textures[QQ] = FQ, this
+       _clearAnimationLocks() {
+         this._radiusIsAnimating = !1, this._attachedCamera && (this._attachedCamera.wheelPrecision = this._cachedWheelPrecision)
```

#### 14. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L75-L76` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L169-L170) · [Before (L75-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L75-L76)

```diff
-       setInternalTexture(QQ, FQ) {
-         return -1 === this._options.samplers.indexOf(QQ) && this._options.samplers.push(QQ), this._internalTextures[QQ] = FQ, this
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0].onAnimationEnd = null, this._animatables[0].stop(), this._animatables.shift()
```

#### 15. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L78-L79` → after: `L172-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L172-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L172-L176) · [Before (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L78-L79)

```diff
-       removeTexture(QQ) {
-         delete this._textures[QQ]
+     }
+     wk.EasingFunction = new class extends Uk {
+       constructor() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+         super(), this.amplitude = kk
```

#### 16. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L81-L82` → after: `L178-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L178-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L178-L180) · [Before (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L81-L82)

```diff
-       setTextureArray(QQ, FQ) {
-         return -1 === this._options.samplers.indexOf(QQ) && this._options.samplers.push(QQ), this._checkUniform(QQ), this._textureArrays[QQ] = FQ, this
+       easeInCore(kk) {
+         const ek = Math.max(0, this.amplitude);
+         return Math.pow(kk, 3) - kk * ek * Math.sin(3.141592653589793 * kk)
```

#### 17. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L84-L85` → after: `L182-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L182-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L182-L185) · [Before (L84-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L84-L85)

```diff
-       setExternalTexture(QQ, FQ) {
-         return -1 === this._options.externalTextures.indexOf(QQ) && this._options.externalTextures.push(QQ), this._externalTextures[QQ] = FQ, this
+     }(.3), wk.EasingMode = Uk.EASINGMODE_EASEOUT;
+     class lk {
+       constructor() {
+         this.onTargetFramingAnimationEndObservable = new Sk.c, this._mode = lk.FitFrustumSidesMode, this._radiusScale = 1, this._positionScale = .5, this._defaultElevation = .3, this._elevationReturnTime = 1500, this._elevationReturnWaitTime = 1e3, this._zoomStopsAnimation = !1,  … [truncated]
```

#### 18. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L87-L88` → after: `L187-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L187-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L187-L188) · [Before (L87-L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L87-L88)

```diff
-       setFloat(QQ, FQ) {
-         return this._checkUniform(QQ), this._floats[QQ] = FQ, this
+       get name() {
+         return "Framing"
```

#### 19. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L90-L91` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L190-L191) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L90-L91)

```diff
-       setInt(QQ, FQ) {
-         return this._checkUniform(QQ), this._ints[QQ] = FQ, this
+       set mode(kk) {
+         this._mode = kk
```

#### 20. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L93-L94` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L193-L194) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L93-L94)

```diff
-       setUInt(QQ, FQ) {
-         return this._checkUniform(QQ), this._uints[QQ] = FQ, this
+       get mode() {
+         return this._mode
```

#### 21. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L96-L97` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L196-L197) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L96-L97)

```diff
-       setFloats(QQ, FQ) {
-         return this._checkUniform(QQ), this._floatsArrays[QQ] = FQ, this
+       set radiusScale(kk) {
+         this._radiusScale = kk
```

#### 22. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L99-L100` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L199-L200) · [Before (L99-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L99-L100)

```diff
-       setColor3(QQ, FQ) {
-         return this._checkUniform(QQ), this._colors3[QQ] = FQ, this
+       get radiusScale() {
+         return this._radiusScale
```

#### 23. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L102-L103` → after: `L202-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L202-L203) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L102-L103)

```diff
-       setColor3Array(QQ, FQ) {
-         return this._checkUniform(QQ), this._colors3Arrays[QQ] = FQ.reduce(((QQ, FQ) => (QQ.push(FQ.r, FQ.g, FQ.b), QQ)), []), this
+       set positionScale(kk) {
+         this._positionScale = kk
```

#### 24. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L105-L106` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L205-L206) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L105-L106)

```diff
-       setColor4(QQ, FQ) {
-         return this._checkUniform(QQ), this._colors4[QQ] = FQ, this
+       get positionScale() {
+         return this._positionScale
```

#### 25. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L108-L109` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L208-L209) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L108-L109)

```diff
-       setColor4Array(QQ, FQ) {
-         return this._checkUniform(QQ), this._colors4Arrays[QQ] = FQ.reduce(((QQ, FQ) => (QQ.push(FQ.r, FQ.g, FQ.b, FQ.a), QQ)), []), this
+       set defaultElevation(kk) {
+         this._defaultElevation = kk
```

#### 26. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L111-L112` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L211-L212) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L111-L112)

```diff
-       setVector2(QQ, FQ) {
-         return this._checkUniform(QQ), this._vectors2[QQ] = FQ, this
+       get defaultElevation() {
+         return this._defaultElevation
```

#### 27. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L114-L115` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L214-L215) · [Before (L114-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L114-L115)

```diff
-       setVector3(QQ, FQ) {
-         return this._checkUniform(QQ), this._vectors3[QQ] = FQ, this
+       set elevationReturnTime(kk) {
+         this._elevationReturnTime = kk
```

#### 28. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L117-L118` → after: `L217-L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L217-L218) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L117-L118)

```diff
-       setVector4(QQ, FQ) {
-         return this._checkUniform(QQ), this._vectors4[QQ] = FQ, this
+       get elevationReturnTime() {
+         return this._elevationReturnTime
```

#### 29. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L120-L121` → after: `L220-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L220-L221) · [Before (L120-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L120-L121)

```diff
-       setQuaternion(QQ, FQ) {
-         return this._checkUniform(QQ), this._quaternions[QQ] = FQ, this
+       set elevationReturnWaitTime(kk) {
+         this._elevationReturnWaitTime = kk
```

#### 30. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L123-L124` → after: `L223-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L223-L224) · [Before (L123-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L123-L124)

```diff
-       setQuaternionArray(QQ, FQ) {
-         return this._checkUniform(QQ), this._quaternionsArrays[QQ] = FQ.reduce(((QQ, FQ) => (FQ.toArray(QQ, QQ.length), QQ)), []), this
+       get elevationReturnWaitTime() {
+         return this._elevationReturnWaitTime
```

#### 31. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L126-L127` → after: `L226-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L226-L227) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L126-L127)

```diff
-       setMatrix(QQ, FQ) {
-         return this._checkUniform(QQ), this._matrices[QQ] = FQ, this
+       set zoomStopsAnimation(kk) {
+         this._zoomStopsAnimation = kk
```

#### 32. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L129-L135` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L229-L230) · [Before (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L129-L135)

```diff
-       setMatrices(QQ, FQ) {
-         this._checkUniform(QQ);
-         const wQ = new Float32Array(16 * FQ.length);
-         for (let LQ = 0; LQ < FQ.length; LQ++) {
-           FQ[LQ].copyToArray(wQ, 16 * LQ)
-         }
-         return this._matrixArrays[QQ] = wQ, this
+       get zoomStopsAnimation() {
+         return this._zoomStopsAnimation
```

#### 33. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L137-L138` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L232-L233) · [Before (L137-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L137-L138)

```diff
-       setMatrix3x3(QQ, FQ) {
-         return this._checkUniform(QQ), this._matrices3x3[QQ] = FQ, this
+       set framingTime(kk) {
+         this._framingTime = kk
```

#### 34. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L140-L141` → after: `L235-L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L235-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L235-L236) · [Before (L140-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L140-L141)

```diff
-       setMatrix2x2(QQ, FQ) {
-         return this._checkUniform(QQ), this._matrices2x2[QQ] = FQ, this
+       get framingTime() {
+         return this._framingTime
```

#### 35. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L143-L144` → after: `L238-L239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L238-L239) · [Before (L143-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L143-L144)

```diff
-       setArray2(QQ, FQ) {
-         return this._checkUniform(QQ), this._vectors2Arrays[QQ] = FQ, this
+       get attachedNode() {
+         return this._attachedCamera
```

#### 36. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L146-L147` → after: `L241-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L241-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L241-L253) · [Before (L146-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L146-L147)

```diff
-       setArray3(QQ, FQ) {
-         return this._checkUniform(QQ), this._vectors3Arrays[QQ] = FQ, this
+       init() {}
+       attach(kk) {
+         this._attachedCamera = kk;
+         const ek = this._attachedCamera.XF();
+         lk.EasingFunction.setEasingMode(lk.EasingMode), this._onPrePointerObservableObserver = ek.onPrePointerObservable.add((kk => {
+           kk.type !== Mk.c.POINTERDOWN ? kk.type === Mk.c.POINTERUP && (this._isPointerDown = !1) : this._isPointerDown = !0
+         })), this._onMeshTargetChangedObserver = kk.onMeshTargetChangedObservable.add((kk => {
+           kk && kk.hq && this.zoomOnMesh(kk, void 0, (() => {
+             this.onTargetFramingAnimationEndObservable.notifyObservers()
+           }))
+         })), this._onAfterCheckInputsObserver = kk.onAfterCheckInputsObservable.add((() => {
+           this._applyUserInteraction(), this._maintainCameraAboveGround()
+         }))
```

#### 37. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L149-L150` → after: `L255-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L255-L258) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L149-L150)

```diff
-       setArray4(QQ, FQ) {
-         return this._checkUniform(QQ), this._vectors4Arrays[QQ] = FQ, this
+       detach() {
+         if (!this._attachedCamera) return;
+         const kk = this._attachedCamera.XF();
+         this._onPrePointerObservableObserver && kk.onPrePointerObservable.remove(this._onPrePointerObservableObserver), this._onAfterCheckInputsObserver && this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver), this._onMeshTargetChangedObserve … [truncated]
```

#### 38. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L152-L153` → after: `L260-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L260-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L260-L265) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L152-L153)

```diff
-       setUniformBuffer(QQ, FQ) {
-         return -1 === this._options.uniformBuffers.indexOf(QQ) && this._options.uniformBuffers.push(QQ), this._uniformBuffers[QQ] = FQ, this
+       zoomOnMesh(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         kk.computeWorldMatrix(!0);
+         const Dk = kk.hq().boundingBox;
+         this.zoomOnBoundingInfo(Dk.minimumWorld, Dk.maximumWorld, ek, ik)
```

#### 39. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L155-L156` → after: `L267-L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L267-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L267-L272) · [Before (L155-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L155-L156)

```diff
-       setTextureSampler(QQ, FQ) {
-         return -1 === this._options.samplerObjects.indexOf(QQ) && this._options.samplerObjects.push(QQ), this._textureSamplers[QQ] = FQ, this
+       zoomOnMeshHierarchy(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         kk.computeWorldMatrix(!0);
+         const Dk = kk.getHierarchyBoundingVectors(!0);
+         this.zoomOnBoundingInfo(Dk.min, Dk.max, ek, ik)
```

#### 40. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L158-L159` → after: `L274-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L274-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L274-L283) · [Before (L158-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L158-L159)

```diff
-       setStorageBuffer(QQ, FQ) {
-         return -1 === this._options.storageBuffers.indexOf(QQ) && this._options.storageBuffers.push(QQ), this._storageBuffers[QQ] = FQ, this
+       zoomOnMeshesHierarchy(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+         const Dk = new bk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+           fk = new bk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+         for (let Sk = 0; Sk < kk.length; Sk++) {
+           const ek = kk[Sk].getHierarchyBoundingVectors(!0);
+           bk.o.CheckExtends(ek.min, Dk, fk), bk.o.CheckExtends(ek.max, Dk, fk)
+         }
+         this.zoomOnBoundingInfo(Dk, fk, ek, ik)
```

#### 41. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L161-L164` → after: `L285-L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L285-L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L285-L312) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L161-L164)

```diff
-       setDefine(QQ, FQ) {
-         const wQ = QQ.trimEnd() + " ",
-           LQ = this.options.defines.findIndex((FQ => FQ === QQ || FQ.startsWith(wQ)));
-         return LQ >= 0 && this.options.defines.splice(LQ, 1), ("boolean" !== typeof FQ || FQ) && this.options.defines.push(wQ + FQ), this
+       zoomOnBoundingInfo(kk, ek) {
+         let ik, Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+           fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         if (!this._attachedCamera) return !1;
+         const Sk = kk.y,
+           rk = Sk + (ek.y - Sk) * this._positionScale,
+           Pk = ek.subtract(kk).scale(.5);
+         if (!isFinite(rk)) return !1;
+         if (Dk) ik = new bk.o(0, rk, 0);
+         else {
+           const ek = kk.add(Pk);
+           ik = new bk.o(ek.x, rk, ek.z)
+         }
+         this._vectorTransition || (this._vectorTransition = Hk.b.CreateAnimation("target", Hk.b.ANIMATIONTYPE_VECTOR3, 60, lk.EasingFunction)), this._betaIsAnimating = !0;
+         let mk = Hk.b.TransitionTo("target", ik, this._attachedCamera, this._attachedCamera.XF(), 60, this._vectorTransition, this._framingTime);
+         mk && this._animatables.push(mk);
+ ... (12 more added lines; see GitHub link above)
```

#### 42. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L166-L167` → after: `L314-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L314-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L314-L318) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L166-L167)

```diff
-       isReadyForSubMesh(QQ, FQ, wQ) {
-         return this.isReady(QQ, wQ, FQ)
+       _calculateLowerRadiusFromModelBoundingSphere(kk, ek) {
+         const ik = this._attachedCamera;
+         if (!ik) return 0;
+         let Dk = ik._calculateLowerRadiusFromModelBoundingSphere(kk, ek, this._radiusScale);
+         return ik.lowerRadiusLimit && this._mode === lk.IgnoreBoundsSizeMode && (Dk = Dk < ik.lowerRadiusLimit ? ik.lowerRadiusLimit : Dk), ik.upperRadiusLimit && (Dk = Dk > ik.upperRadiusLimit ? ik.upperRadiusLimit : Dk), Dk
```

#### 43. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L169-L173` → after: `L320-L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L320-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L320-L330) · [Before (L169-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L169-L173)

```diff
-       isReady(QQ, FQ, wQ) {
-         const LQ = wQ && this._storeEffectOnSubMeshes;
-         if (this.isFrozen) {
-           const QQ = LQ ? wQ._drawWrapper : this._drawWrapper;
-           if (QQ.effect && QQ._wasPreviouslyReady && QQ._wasPreviouslyUsingInstances === FQ) return !0
+       _maintainCameraAboveGround() {
+         if (this._elevationReturnTime < 0) return;
+         const kk = Kk.d.Now - this._lastInteractionTime,
+           ek = .5 * Math.PI - this._defaultElevation,
+           ik = .5 * Math.PI;
+         if (this._attachedCamera && !this._betaIsAnimating && this._attachedCamera.beta > ik && kk >= this._elevationReturnWaitTime) {
+           this._betaIsAnimating = !0, this.stopAllAnimations(), this._betaTransition || (this._betaTransition = Hk.b.CreateAnimation("beta", Hk.b.ANIMATIONTYPE_FLOAT, 60, lk.EasingFunction));
+           const kk = Hk.b.TransitionTo("beta", ek, this._attachedCamera, this._attachedCamera.XF(), 60, this._betaTransition, this._elevationReturnTime, (() => {
+             this._clearAnimationLocks(), this.stopAllAnimations()
+           }));
+           kk && this._animatables.push(kk)
```

#### 44. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L175-L176` → after: `L332-L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L332-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L332-L504) · [Before (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L175-L176)

```diff
-         const oQ = this.iN(),
-           kQ = oQ.Wx(),
+       }
+       _clearAnimationLocks() {
+         this._betaIsAnimating = !1
+       }
+       _applyUserInteraction() {
+         this.isUserIsMoving && (this._lastInteractionTime = Kk.d.Now, this.stopAllAnimations(), this._clearAnimationLocks())
+       }
+       stopAllAnimations() {
+         for (this._attachedCamera && (this._attachedCamera.animations = []); this._animatables.length;) this._animatables[0] && (this._animatables[0].onAnimationEnd = null, this._animatables[0].stop()), this._animatables.shift()
+       }
+       get isUserIsMoving() {
+         return !!this._attachedCamera && (0 !== this._attachedCamera.inertialAlphaOffset || 0 !== this._attachedCamera.inertialBetaOffset || 0 !== this._attachedCamera.inertialRadiusOffset || 0 !== this._attachedCamera.inertialPanningX || 0 !== this._attachedCamera.inertialPannin … [truncated]
+       }
+     }
+     lk.EasingFunction = new class extends Uk {
+       constructor() {
+ ... (157 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L179-L187` → after: `L507-L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L507-L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L507-L784) · [Before (L179-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L179-L187)

```diff
-         let HQ = null,
-           AQ = this._shaderPath,
-           eQ = this._options.uniforms,
-           MQ = this._options.uniformBuffers,
-           GQ = this._options.samplers;
-         kQ.getCaps().multiview && oQ.activeCamera && oQ.activeCamera.outputRenderTarget && oQ.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, mQ.push("#define MULTIVIEW"), -1 !== eQ.indexOf("viewProjection") && -1 === eQ.indexOf("viewProjectionR") &&  … [truncated]
-         for (let qQ = 0; qQ < this._options.defines.length; qQ++) {
-           const QQ = 0 === this._options.defines[qQ].indexOf("#define") ? this._options.defines[qQ] : `#define ${this._options.defines[qQ]}`;
-           mQ.push(QQ)
+         return kk = class extends bk {
+           constructor() {
+             super(...arguments), this.pinchZoom = (0, Dk.e)(this, rk, !0), this.multiTouchPanning = ((0, Dk.e)(this, Pk), (0, Dk.e)(this, mk, !0)), this.multiTouchPanAndZoom = ((0, Dk.e)(this, Mk), (0, Dk.e)(this, Kk, !0)), this._isPinching = ((0, Dk.e)(this, xk), !1), this._twoF … [truncated]
+           }
+           _computePinchZoom(kk, ek) {}
+           _computeMultiTouchPanning(kk, ek) {}
+           onMultiTouch(kk, ek, ik, Dk, fk, Sk) {
+             0 === ik && null === fk || 0 === Dk && null === Sk || (this.multiTouchPanAndZoom ? (this._computePinchZoom(ik, Dk), this._computeMultiTouchPanning(fk, Sk)) : this.multiTouchPanning && this.pinchZoom ? (this._twoFingerActivityCount++, this._isPinching || this._shouldSt … [truncated]
+           }
+           onButtonUp(kk) {
+             this._twoFingerActivityCount = 0, this._isPinching = !1
+           }
+           onLostFocus() {
+             this._twoFingerActivityCount = 0, this._isPinching = !1
+           }
+         }, (() => {
+ ... (262 more added lines; see GitHub link above)
```

#### 46. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L189-L207` → after: `L786-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L786-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L786-L787) · [Before (L189-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L189-L207)

```diff
-         for (let qQ = 0; qQ < this._options.attributes.length; qQ++) uQ.push(this._options.attributes[qQ]);
-         if (QQ && QQ.isVerticesDataPresent(DQ.h.ColorKind) && (-1 === uQ.indexOf(DQ.h.ColorKind) && uQ.push(DQ.h.ColorKind), mQ.push("#define VERTEXCOLOR")), FQ && (mQ.push("#define INSTANCES"), (0, YQ.qb)(uQ, this._materialHelperNeedsPreviousMatrices), QQ?.hasThinInstances && (m … [truncated]
-           uQ.push(DQ.h.MatricesIndicesKind), uQ.push(DQ.h.MatricesWeightsKind), QQ.numBoneInfluencers > 4 && (uQ.push(DQ.h.MatricesIndicesExtraKind), uQ.push(DQ.h.MatricesWeightsExtraKind));
-           const FQ = QQ.skeleton;
-           mQ.push("#define NUM_BONE_INFLUENCERS " + QQ.numBoneInfluencers), HQ = new vQ.d, HQ.addCPUSkinningFallback(0, QQ), FQ.isUsingTextureForMatrices ? (mQ.push("#define BONETEXTURE"), -1 === eQ.indexOf("boneTextureInfo") && eQ.push("boneTextureInfo"), -1 === this._options.sa … [truncated]
-         } else mQ.push("#define NUM_BONE_INFLUENCERS 0");
-         let pQ = 0;
-         const cQ = QQ ? QQ.morphTargetManager : null;
-         if (cQ) {
-           const FQ = -1 !== mQ.indexOf("#define UV1"),
-             wQ = -1 !== mQ.indexOf("#define UV2"),
-             LQ = -1 !== mQ.indexOf("#define TANGENT"),
-             qQ = -1 !== mQ.indexOf("#define NORMAL"),
-             oQ = -1 !== mQ.indexOf("#define VERTEXCOLOR");
-           pQ = (0, YQ.K)(cQ, mQ, uQ, QQ, !0, qQ, LQ, FQ, wQ, oQ), cQ.isUsingTextureForTargets && (-1 === eQ.indexOf("morphTargetTextureIndices") && eQ.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTar … [truncated]
-         } else mQ.push("#define NUM_MORPH_INFLUENCERS 0");
- ... (3 more removed lines; see GitHub link above)
+         get useAltToZoom() {
+           return this._useAltToZoom
```

#### 47. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L209-L221` → after: `L789-L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L789-L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L789-L790) · [Before (L209-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L209-L221)

```diff
-         for (const qQ in this._textures)
-           if (!this._textures[qQ].isReady()) return !1;
-         for (const qQ in this._internalTextures)
-           if (!this._internalTextures[qQ].isReady) return !1;
-         QQ && this.needAlphaTestingForMesh(QQ) && mQ.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, bQ.d)(eQ), (0, bQ.o)(this, oQ, mQ)), oQ.fogEnabled && QQ?.applyFog && oQ.fogMode !== qQ.e.FOGMODE_NONE && (mQ.push("#define FOG"), -1 === eQ.indexOf("view") & … [truncated]
-         const CQ = wQ ? wQ.getRenderingMesh() : QQ;
-         if (CQ && this.useVertexPulling) {
-           const QQ = CQ.geometry;
-           QQ && (this._vertexPullingMetadata = (0, xQ.i)(QQ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((QQ, FQ) => {
-             eQ.push(`vp_${FQ}_info`)
-           }))), mQ.push("#define USE_VERTEX_PULLING");
-           const FQ = CQ.geometry?.getIndexBuffer();
-           FQ && !CQ.isUnIndexed && (mQ.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), FQ.is32Bits && mQ.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
+         set useAltToZoom(kk) {
+           this._useAltToZoom = kk, this._applyUseAltToZoomToInputMap()
```

#### 48. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L223-L269` → after: `L792-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L792-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L792-L820) · [Before (L223-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L223-L269)

```diff
-         this.customShaderNameResolve && (eQ = eQ.slice(), MQ = MQ.slice(), GQ = GQ.slice(), AQ = this.customShaderNameResolve(this.name, eQ, MQ, GQ, mQ, uQ));
-         const SQ = LQ ? wQ._getDrawWrapper(void 0, !0) : this._drawWrapper,
-           iQ = SQ?.effect ?? null,
-           WQ = SQ?.defines ?? null,
-           RQ = mQ.join("\n");
-         let OQ = iQ;
-         return WQ !== RQ && (OQ = kQ.createEffect(AQ, {
-           attributes: uQ,
-           uniformsNames: eQ,
-           uniformBuffersNames: MQ,
-           samplers: GQ,
-           defines: RQ,
-           fallbacks: HQ,
-           onCompiled: this.onCompiled,
-           onError: this.onError,
-           indexParameters: {
- ... (31 more removed lines; see GitHub link above)
+         _applyUseAltToZoomToInputMap() {
+           if (!this.camera?.movement) return;
+           const kk = this.camera.movement.input,
+             ek = kk.getEntry("keyboard", "zoom", {
+               modifiers: {
+                 alt: !0
+               }
+             });
+           !this._useAltToZoom && ek ? kk.inputMap.splice(kk.inputMap.indexOf(ek), 1) : this._useAltToZoom && !ek && kk.addEntry({
+             source: "keyboard",
+             modifiers: {
+               alt: !0
+             },
+             interaction: "zoom"
+           })
+         }
+ ... (13 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L271-L314` → after: `L822-L825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR822) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L822-L825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L822-L825) · [Before (L271-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L271-L314)

```diff
-           }
-         const mQ = FQ && qQ ? this._mustRebind(DQ, oQ, LQ, FQ.visibility) : DQ.getCachedMaterial() !== this;
-         if (oQ && mQ) {
-           let QQ;
-           for (QQ in vQ || -1 === this._options.uniforms.indexOf("view") || oQ.setMatrix("view", DQ.getViewMatrix()), vQ || -1 === this._options.uniforms.indexOf("projection") || oQ.setMatrix("projection", DQ.getProjectionMatrix()), vQ || -1 === this._options.uniforms.indexOf("vi … [truncated]
-           for (QQ in this._internalTextures) oQ._bindTexture(QQ, this._internalTextures[QQ]);
-           for (QQ in this._textureArrays) oQ.setTextureArray(QQ, this._textureArrays[QQ]);
-           for (QQ in this._ints) oQ.setInt(QQ, this._ints[QQ]);
-           for (QQ in this._uints) oQ.setUInt(QQ, this._uints[QQ]);
-           for (QQ in this._floats) oQ.setFloat(QQ, this._floats[QQ]);
-           for (QQ in this._floatsArrays) oQ.setArray(QQ, this._floatsArrays[QQ]);
-           for (QQ in this._colors3) oQ.setColor3(QQ, this._colors3[QQ]);
-           for (QQ in this._colors3Arrays) oQ.setArray3(QQ, this._colors3Arrays[QQ]);
-           for (QQ in this._colors4) {
-             const FQ = this._colors4[QQ];
-             oQ.setFloat4(QQ, FQ.r, FQ.g, FQ.b, FQ.a)
- ... (28 more removed lines; see GitHub link above)
+           })))
+         }
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
```

#### 50. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L316-L321` → after: `L827-L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L827-L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L827-L847) · [Before (L316-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L316-L321)

```diff
-         if (oQ && FQ && (mQ || !this.isFrozen)) {
-           (0, YQ.s)(FQ, oQ), FQ.morphTargetManager && FQ.morphTargetManager.isUsingTextureForTargets && FQ.morphTargetManager._bind(oQ);
-           const QQ = FQ.bakedVertexAnimationManager;
-           if (QQ && QQ.isEnabled) {
-             const QQ = qQ ? LQ._drawWrapper : this._drawWrapper;
-             FQ.bakedVertexAnimationManager?.bind(oQ, !!QQ._wasPreviouslyUsingInstances)
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const kk = this.camera,
+               ek = kk.movement.input;
+             this._keyboardModifiers.ctrl = this._ctrlPressed, this._keyboardModifiers.alt = this._altPressed;
+             const ik = this._rotateDirection.set(0, 0),
+               Dk = this._panDirection.set(0, 0);
+             let fk = 0,
+               Sk = 0;
+             for (let bk = 0; bk < this._keys.length; bk++) {
+               const rk = this._keys[bk];
+               if (this._keyboardConditions.key = rk, -1 === this.keysReset.indexOf(rk)) {
+                 const kk = ek.resolveInteraction("keyboard", this._keyboardConditions);
+                 if (kk)
+                   if ("pan" === kk.interaction) Sk = Math.max(Sk, kk.sensitivity ?? 1 / this.panningSensibility), -1 !== this.keysLeft.indexOf(rk) ? Dk.x -= 1 : -1 !== this.keysRight.indexOf(rk) ? Dk.x += 1 : -1 !== this.keysUp.indexOf(rk) ? Dk.y += 1 : -1 !== this.keysDown.index … [truncated]
+                   else if ("zoom" === kk.interaction) {
+ ... (5 more added lines; see GitHub link above)
```

#### 51. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L324-L331` → after: `L850-L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L850-L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L850-L851) · [Before (L324-L331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L324-L331)

```diff
-         this._afterBind(FQ, oQ, LQ)
-       }
-       getActiveTextures() {
-         const QQ = super.getActiveTextures();
-         for (const FQ in this._textures) QQ.push(this._textures[FQ]);
-         for (const FQ in this._textureArrays) {
-           const wQ = this._textureArrays[FQ];
-           for (let FQ = 0; FQ < wQ.length; FQ++) QQ.push(wQ[FQ])
+         getClassName() {
+           return "ArcRotateCameraKeyboardMoveInput"
```

#### 52. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L333-L345` → after: `L853-L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L853-L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L853-L854) · [Before (L333-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L333-L345)

```diff
-         return QQ
-       }
-       hasTexture(QQ) {
-         if (super.hasTexture(QQ)) return !0;
-         for (const wQ in this._textures)
-           if (this._textures[wQ] === QQ) return !0;
-         const FQ = QQ.getInternalTexture();
-         for (const wQ in this._internalTextures)
-           if (this._internalTextures[wQ] === FQ) return !0;
-         for (const wQ in this._textureArrays) {
-           const FQ = this._textureArrays[wQ];
-           for (let wQ = 0; wQ < FQ.length; wQ++)
-             if (FQ[wQ] === QQ) return !0
+         getSimpleName() {
+           return "keyboard"
```

#### 53. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L347-L359` → after: `L856-L1019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L856-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L856-L1019) · [Before (L347-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L347-L359)

```diff
-         return !1
-       }
-       clone(QQ) {
-         const FQ = LQ.c.Clone((() => new eQ(QQ, this.iN(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
-         FQ.name = QQ, FQ.id = QQ, "object" === typeof FQ._shaderPath && (FQ._shaderPath = {
-           ...FQ._shaderPath
-         }), this._options = {
-           ...this._options
-         };
-         const wQ = Object.keys(this._options);
-         for (const LQ of wQ) {
-           const QQ = this._options[LQ];
-           Array.isArray(QQ) && (this._options[LQ] = QQ.slice(0))
+       }, (() => {
+         const bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], rk = [(0, fk.I)()], Pk = [(0, fk.I)()], mk = [(0, fk.I)()], Mk = [(0, fk.I)()], Kk = [(0, fk.I)()], xk = [(0, fk.I)()], nk = [(0, fk.I)()], Uk = [(0, fk.I)()], (0, Dk.d)(kk, null, Uk, {
+           kind: "getter",
+           name: "useAltToZoom",
+           static: !1,
+           private: !1,
+           access: {
+             has: kk => "useAltToZoom" in kk,
+             get: kk => kk.useAltToZoom
+           },
+           metadata: bk
+         }, null, Hk), (0, Dk.d)(null, null, ek, {
+           kind: "field",
+           name: "keysUp",
+           static: !1,
+ ... (148 more added lines; see GitHub link above)
```

#### 54. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L361-L392` → after: `L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1021) · [Before (L361-L392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L361-L392)

```diff
-         this.stencil.copyTo(FQ.stencil);
-         for (const LQ in this._textures) FQ.setTexture(LQ, this._textures[LQ]);
-         for (const LQ in this._internalTextures) FQ.setInternalTexture(LQ, this._internalTextures[LQ]);
-         for (const LQ in this._textureArrays) FQ.setTextureArray(LQ, this._textureArrays[LQ]);
-         for (const LQ in this._externalTextures) FQ.setExternalTexture(LQ, this._externalTextures[LQ]);
-         for (const LQ in this._ints) FQ.setInt(LQ, this._ints[LQ]);
-         for (const LQ in this._uints) FQ.setUInt(LQ, this._uints[LQ]);
-         for (const LQ in this._floats) FQ.setFloat(LQ, this._floats[LQ]);
-         for (const LQ in this._floatsArrays) FQ.setFloats(LQ, this._floatsArrays[LQ]);
-         for (const LQ in this._colors3) FQ.setColor3(LQ, this._colors3[LQ]);
-         for (const LQ in this._colors3Arrays) FQ._colors3Arrays[LQ] = this._colors3Arrays[LQ];
-         for (const LQ in this._colors4) FQ.setColor4(LQ, this._colors4[LQ]);
-         for (const LQ in this._colors4Arrays) FQ._colors4Arrays[LQ] = this._colors4Arrays[LQ];
-         for (const LQ in this._vectors2) FQ.setVector2(LQ, this._vectors2[LQ]);
-         for (const LQ in this._vectors3) FQ.setVector3(LQ, this._vectors3[LQ]);
-         for (const LQ in this._vectors4) FQ.setVector4(LQ, this._vectors4[LQ]);
- ... (16 more removed lines; see GitHub link above)
+         _computeDeltaFromMouseWheelLegacyEvent(kk, ek) {
```

#### 55. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L394-L398` → after: `L1023-L1058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1023-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1023-L1058) · [Before (L394-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L394-L398)

```diff
-           for (QQ in this._textures) this._textures[QQ].dispose();
-           for (QQ in this._internalTextures) this._internalTextures[QQ].dispose();
-           for (QQ in this._textureArrays) {
-             const FQ = this._textureArrays[QQ];
-             for (let QQ = 0; QQ < FQ.length; QQ++) FQ[QQ].dispose()
+           const Dk = .01 * kk * this.wheelDeltaPercentage * ek;
+           return ik = kk > 0 ? Dk / (1 + this.wheelDeltaPercentage) : Dk * (1 + this.wheelDeltaPercentage), ik
+         }
+         attachControl(kk) {
+           kk = Lk.i.BackCompatCameraNoPreventDefault(arguments), this._wheel = ek => {
+             if (ek.type !== Mk.c.POINTERWHEEL) return;
+             const ik = ek.event;
+             let Dk;
+             const fk = ik.deltaMode === Fk.c.DOM_DELTA_LINE ? 40 : 1,
+               Sk = -ik.deltaY * fk;
+             if (this.customComputeDeltaFromMouseWheel) Dk = this.customComputeDeltaFromMouseWheel(Sk, this, ik);
+             else if (this.wheelDeltaPercentage) {
+               if (Dk = this._computeDeltaFromMouseWheelLegacyEvent(Sk, this.camera.radius), Dk > 0) {
+                 const kk = this.zoomToMouseLocation ? this._zoomToMouseRadiusOffset : this.camera.inertialRadiusOffset;
+                 let ek = this.camera.radius,
+                   ik = kk + Dk;
+ ... (20 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L401-L410` → after: `L1061-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1061-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1061-L1062) · [Before (L401-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L401-L410)

```diff
-         this._textures = {}, this._internalTextures = {}, super.dispose(QQ, FQ, wQ)
-       }
-       serialize() {
-         const QQ = LQ.c.Serialize(this);
-         let FQ;
-         for (FQ in QQ.customType = "BABYLON.ShaderMaterial", QQ.uniqueId = this.uniqueId, QQ.options = this._options, QQ.shaderPath = this._shaderPath, QQ.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, QQ.stencil = this.stencil.serialize(), QQ.textures = {}, this._texture … [truncated]
-         for (FQ in QQ.textureArrays = {}, this._textureArrays) {
-           QQ.textureArrays[FQ] = [];
-           const wQ = this._textureArrays[FQ];
-           for (let LQ = 0; LQ < wQ.length; LQ++) QQ.textureArrays[FQ].push(wQ[LQ].serialize())
+         getClassName() {
+           return "ArcRotateCameraMouseWheelInput"
```

#### 57. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L412-L418` → after: `L1064-L1065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1064-L1065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1064-L1065) · [Before (L412-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L412-L418)

```diff
-         for (FQ in QQ.ints = {}, this._ints) QQ.ints[FQ] = this._ints[FQ];
-         for (FQ in QQ.uints = {}, this._uints) QQ.uints[FQ] = this._uints[FQ];
-         for (FQ in QQ.floats = {}, this._floats) QQ.floats[FQ] = this._floats[FQ];
-         for (FQ in QQ.floatsArrays = {}, this._floatsArrays) QQ.floatsArrays[FQ] = this._floatsArrays[FQ];
-         for (FQ in QQ.colors3 = {}, this._colors3) {
-           const wQ = this._colors3[FQ];
-           QQ.colors3[FQ] = [wQ.r, wQ.g, wQ.b]
+         getSimpleName() {
+           return "mousewheel"
```

#### 58. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L420-L423` → after: `L1067-L1070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1067-L1070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1067-L1070) · [Before (L420-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L420-L423)

```diff
-         for (FQ in QQ.colors3Arrays = {}, this._colors3Arrays) QQ.colors3Arrays[FQ] = this._colors3Arrays[FQ];
-         for (FQ in QQ.colors4 = {}, this._colors4) {
-           const wQ = this._colors4[FQ];
-           QQ.colors4[FQ] = [wQ.r, wQ.g, wQ.b, wQ.a]
+         _updateHitPlane() {
+           const kk = this.camera,
+             ek = kk.target.subtract(kk.position);
+           this._hitPlane = Vk.c.FromPositionAndNormal(kk.target, ek)
```

#### 59. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L425-L428` → after: `L1072-L1078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1072-L1078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1072-L1078) · [Before (L425-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L425-L428)

```diff
-         for (FQ in QQ.colors4Arrays = {}, this._colors4Arrays) QQ.colors4Arrays[FQ] = this._colors4Arrays[FQ];
-         for (FQ in QQ.vectors2 = {}, this._vectors2) {
-           const wQ = this._vectors2[FQ];
-           QQ.vectors2[FQ] = [wQ.x, wQ.y]
+         _getPosition() {
+           const kk = this.camera,
+             ek = kk.XF(),
+             ik = ek.createPickingRay(ek.pointerX, ek.pointerY, bk.b.Identity(), kk, !1);
+           0 === kk.targetScreenOffset.x && 0 === kk.targetScreenOffset.y || (this._viewOffset.set(kk.targetScreenOffset.x, kk.targetScreenOffset.y, 0), kk.getViewMatrix().invertToRef(kk._cameraTransformMatrix), this._globalOffset = bk.o.TransformNormal(this._viewOffset, kk._camer … [truncated]
+           let Dk = 0;
+           return this._hitPlane && (Dk = ik.intersectsPlane(this._hitPlane) ?? 0), ik.origin.addInPlace(ik.direction.scaleInPlace(Dk))
```

#### 60. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L430-L432` → after: `L1080-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1080-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1080-L1095) · [Before (L430-L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L430-L432)

```diff
-         for (FQ in QQ.vectors3 = {}, this._vectors3) {
-           const wQ = this._vectors3[FQ];
-           QQ.vectors3[FQ] = [wQ.x, wQ.y, wQ.z]
+         _zoomToMouse(kk) {
+           const ek = this.camera,
+             ik = 1 - ek.inertia,
+             Dk = ek.movement.getFrameIndependentInputScale(ek.inertia);
+           if (ek.lowerRadiusLimit) {
+             const fk = ek.lowerRadiusLimit ?? 0;
+             ek.radius - (this._zoomToMouseRadiusOffset + kk * Dk) / ik < fk && (kk = ((ek.radius - fk) * ik - this._zoomToMouseRadiusOffset) / Dk)
+           }
+           if (ek.upperRadiusLimit) {
+             const fk = ek.upperRadiusLimit ?? 0;
+             ek.radius - (this._zoomToMouseRadiusOffset + kk * Dk) / ik > fk && (kk = ((ek.radius - fk) * ik - this._zoomToMouseRadiusOffset) / Dk)
+           }
+           const fk = kk / ik / ek.radius,
+             Sk = this._getPosition(),
+             rk = bk.j.eH[6];
+           Sk.subtractToRef(ek.target, rk), rk.scaleInPlace(fk), rk.scaleInPlace(ik), rk.scaleInPlace(Dk), this._inertialPanning.addInPlace(rk), this._zoomToMouseRadiusOffset += kk * Dk
```

#### 61. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L434-L436` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1097-L1098) · [Before (L434-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L434-L436)

```diff
-         for (FQ in QQ.vectors4 = {}, this._vectors4) {
-           const wQ = this._vectors4[FQ];
-           QQ.vectors4[FQ] = [wQ.x, wQ.y, wQ.z, wQ.w]
+         _zeroIfClose(kk) {
+           Math.abs(kk.x) < xk.d && (kk.x = 0), Math.abs(kk.y) < xk.d && (kk.y = 0), Math.abs(kk.z) < xk.d && (kk.z = 0)
```

#### 62. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L438-L470` → after: `L1100-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1100-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1100-L1145) · [Before (L438-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L438-L470)

```diff
-         for (FQ in QQ.quaternions = {}, this._quaternions) QQ.quaternions[FQ] = this._quaternions[FQ].RLQ();
-         for (FQ in QQ.matrices = {}, this._matrices) QQ.matrices[FQ] = this._matrices[FQ].RLQ();
-         for (FQ in QQ.matrixArray = {}, this._matrixArrays) QQ.matrixArray[FQ] = this._matrixArrays[FQ];
-         for (FQ in QQ.matrices3x3 = {}, this._matrices3x3) QQ.matrices3x3[FQ] = this._matrices3x3[FQ];
-         for (FQ in QQ.matrices2x2 = {}, this._matrices2x2) QQ.matrices2x2[FQ] = this._matrices2x2[FQ];
-         for (FQ in QQ.vectors2Arrays = {}, this._vectors2Arrays) QQ.vectors2Arrays[FQ] = this._vectors2Arrays[FQ];
-         for (FQ in QQ.vectors3Arrays = {}, this._vectors3Arrays) QQ.vectors3Arrays[FQ] = this._vectors3Arrays[FQ];
-         for (FQ in QQ.vectors4Arrays = {}, this._vectors4Arrays) QQ.vectors4Arrays[FQ] = this._vectors4Arrays[FQ];
-         for (FQ in QQ.quaternionsArrays = {}, this._quaternionsArrays) QQ.quaternionsArrays[FQ] = this._quaternionsArrays[FQ];
-         return QQ
-       }
-     }
- 
-     function MQ(QQ, FQ, wQ) {
-       const qQ = LQ.c.Parse((() => new eQ(QQ.name, FQ, QQ.shaderPath, QQ.options, QQ.storeEffectOnSubMeshes)), QQ, FQ, wQ);
-       let DQ;
- ... (17 more removed lines; see GitHub link above)
+       }, (() => {
+         const bk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
+           kind: "field",
+           name: "wheelPrecision",
+           static: !1,
+           private: !1,
+           access: {
+             has: kk => "wheelPrecision" in kk,
+             get: kk => kk.wheelPrecision,
+             set: (kk, ek) => {
+               kk.wheelPrecision = ek
+             }
+           },
+           metadata: bk
+         }, Pk, mk), (0, Dk.d)(null, null, ik, {
+ ... (30 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L473-L488` → after: `L1155-L1156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1155-L1156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1155-L1156) · [Before (L473-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L473-L488)

```diff
-       for (DQ in QQ.colors3Arrays) {
-         const FQ = QQ.colors3Arrays[DQ].reduce(((QQ, FQ, wQ) => (wQ % 3 === 0 ? QQ.push([FQ]) : QQ[QQ.length - 1].push(FQ), QQ)), []).map((QQ => ({
-           r: QQ[0],
-           g: QQ[1],
-           b: QQ[2]
-         })));
-         qQ.setColor3Array(DQ, FQ)
-       }
-       for (DQ in QQ.colors4) {
-         const FQ = QQ.colors4[DQ];
-         qQ.setColor4(DQ, {
-           r: FQ[0],
-           g: FQ[1],
-           b: FQ[2],
-           a: FQ[3]
-         })
+       addMouseWheel() {
+         return this.add(new uk), this
```

#### 64. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L490-L504` → after: `L1158-L1159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1158-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1158-L1159) · [Before (L490-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L490-L504)

```diff
-       for (DQ in QQ.colors4Arrays) {
-         const FQ = QQ.colors4Arrays[DQ].reduce(((QQ, FQ, wQ) => (wQ % 4 === 0 ? QQ.push([FQ]) : QQ[QQ.length - 1].push(FQ), QQ)), []).map((QQ => ({
-           r: QQ[0],
-           g: QQ[1],
-           b: QQ[2],
-           a: QQ[3]
-         })));
-         qQ.setColor4Array(DQ, FQ)
-       }
-       for (DQ in QQ.vectors2) {
-         const FQ = QQ.vectors2[DQ];
-         qQ.setVector2(DQ, {
-           x: FQ[0],
-           y: FQ[1]
-         })
+       addPointers() {
+         return this.add(new jk), this
```

#### 65. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L506-L512` → after: `L1161-L1162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1161-L1162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1161-L1162) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L506-L512)

```diff
-       for (DQ in QQ.vectors3) {
-         const FQ = QQ.vectors3[DQ];
-         qQ.setVector3(DQ, {
-           x: FQ[0],
-           y: FQ[1],
-           z: FQ[2]
-         })
+       addKeyboard() {
+         return this.add(new dk), this
```

#### 66. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L514-L521` → after: `L1164-L1220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1164-L1220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1164-L1220) · [Before (L514-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L514-L521)

```diff
-       for (DQ in QQ.vectors4) {
-         const FQ = QQ.vectors4[DQ];
-         qQ.setVector4(DQ, {
-           x: FQ[0],
-           y: FQ[1],
-           z: FQ[2],
-           w: FQ[3]
-         })
+     }(qk = Qk.prototype).addVRDeviceOrientation ?? (qk.addVRDeviceOrientation = (0, zk.i)("ArcRotateCameraInputsManager", "addVRDeviceOrientation")), (Ik = Qk.prototype).addGamepad ?? (Ik.addGamepad = (0, zk.i)("ArcRotateCameraInputsManager", "addGamepad"));
+     var vk = ik(36734),
+       Ek = ik(39792),
+       hk = ik(39800);
+     class ak extends Ek.e {
+       constructor(kk, ek, ik) {
+         super(kk, ek, ik), this.input = new hk.b({
+           pan: (kk, ek) => {
+             this.panAccumulatedPixels.x += kk, this.panAccumulatedPixels.y += ek
+           },
+           rotate: (kk, ek) => {
+             this.rotationAccumulatedPixels.x += kk, this.rotationAccumulatedPixels.y += ek
+           },
+           zoom: kk => {
+             this.zoomAccumulatedPixels += kk
+           }
+ ... (41 more added lines; see GitHub link above)
```

#### 67. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L548-L561` → after: `L1223-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1223-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1223-L1225) · [Before (L548-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L548-L561)

```diff
-     async function pQ(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
-       const LQ = this?.SnippetUrl ?? eQ.SnippetUrl;
-       return await new Promise(((qQ, oQ) => {
-         const DQ = new mQ.e;
-         DQ.addEventListener("readystatechange", (() => {
-           if (4 == DQ.readyState)
-             if (200 == DQ.status) {
-               const LQ = JSON.parse(JSON.parse(DQ.responseText).jsonPayload),
-                 oQ = MQ(JSON.parse(LQ.shaderMaterial), FQ || HQ.d.LastCreatedScene, wQ);
-               oQ.snippetId = QQ, qQ(oQ)
-             } else oQ("Unable to load the snippet " + QQ)
-         })), DQ.open("GET", LQ + "/" + QQ.replace(/#/g, "/")), DQ.send()
-       }))
+ 
+     function Wk(kk, ek) {
+       return isNaN(kk) ? ek : kk
```

#### 68. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L563-L565` → after: `L1227-L2232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR1227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L1227-L2232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L1227-L2232) · [Before (L563-L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L563-L565)

```diff
-     eQ.SnippetUrl = "https://snippet.babylonjs.com";
-     const cQ = pQ;
-     let CQ = !1;
+     let tk = (() => {
+         var kk;
+         let ek, ik, Pk, Mk, Kk, Uk, Hk, Yk, Ck, Ak, jk, sk, dk, Vk, Fk, uk, qk, Ik, zk, vk, Ek, hk, tk, Xk, Bk, ck, Tk, Zk, Ok = yk.e,
+           gk = [],
+           Gk = [],
+           Nk = [],
+           Rk = [],
+           Jk = [],
+           ke = [],
+           ee = [],
+           ie = [],
+           De = [],
+           fe = [],
+           Se = [],
+           be = [],
+           re = [],
+ ... (990 more added lines; see GitHub link above)
```

#### 69. `bundles/bloxd.io/chunks/js/256.js` (Changed code · before: `L568` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18fR2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-29cb64b304de05426b0cca22f23dd8ff055aab607ede49ebf45e359ee6fca18f) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/256.js#L2235) · [Before (L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/256.js#L568)

```diff
-       CQ || (CQ = !0, eQ.Parse = MQ, eQ.ParseFromFileAsync = GQ, eQ.ParseFromSnippetAsync = pQ, eQ.CreateFromSnippetAsync = cQ, (0, AQ.e)("BABYLON.ShaderMaterial", eQ))
+       Kk || (Kk = !0, Pk.b.AddNodeConstructor("Light_Type_3", ((kk, ek) => () => new Mk(kk, Sk.o.Zero(), ek))), (0, mk.h)("BABYLON.HemisphericLight", Mk))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/257.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/257.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558)

#### 1. `bundles/bloxd.io/chunks/js/257.js` (Changed code · before: `L5-L27` → after: `L4-L2730`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-cf29d4855fa00450885d5394c376db51e201b4a42cc41bd32f6581a3c6da5558) · [After (L4-L2730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/257.js#L4-L2730) · [Before (L5-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/257.js#L5-L27)

```diff
-   39927: (QQ, FQ, wQ) => {
-     wQ.r(FQ), wQ.d(FQ, {
-       FirebaseError: () => LQ.e,
-       SDK_VERSION: () => LQ.g,
-       _DEFAULT_ENTRY_NAME: () => LQ.h,
-       HLQ: () => LQ.k,
-       _addOrOverwriteComponent: () => LQ.l,
-       _apps: () => LQ.n,
-       _clearComponents: () => LQ.p,
-       _components: () => LQ.q,
-       _getProvider: () => LQ.t,
-       _registerComponent: () => LQ.x,
-       _removeServiceInstance: () => LQ.z,
-       deleteApp: () => LQ.C,
-       getApp: () => LQ.J,
-       getApps: () => LQ.G,
- ... (7 more removed lines; see GitHub link above)
+   39993: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => fk
+     });
+     var Dk = ik(39574);
+ 
+     function fk(kk) {
+       return class extends kk {
+         constructor() {
+           super(...arguments);
+           const kk = new.target;
+           if (!kk[Symbol.metadata]) {
+             const ek = Object.getPrototypeOf(kk)?.[Symbol.metadata];
+             kk[Symbol.metadata] = ek ? Object.create(ek) : {}
+           }
+           const ek = (0, Dk.c)(kk[Symbol.metadata]);
+ ... (2711 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/258.js` (bqoxjr.2558012f → 3lwmg.ecbaa066)

- **File**: `bundles/bloxd.io/chunks/js/258.js` (84 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d)

#### 1. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L5)

```diff
-   39949: (QQ, FQ, wQ) => {
+   39879: (kk, ek, ik) => {
```

#### 2. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L7-L30` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L6) · [Before (L7-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L7-L30)

```diff
-       $: () => GQ,
-       C: () => RQ,
-       G: () => IQ,
-       J: () => HQ,
-       K: () => uQ,
-       M: () => bQ,
-       P: () => XQ,
-       Q: () => xQ,
-       U: () => tQ,
-       W: () => WQ,
-       X: () => MQ,
-       bb: () => AQ,
-       e: () => YQ,
-       eb: () => eQ,
-       gb: () => rQ,
-       h: () => SQ,
- ... (8 more removed lines; see GitHub link above)
+       c: () => Dk
```

#### 3. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L32-L37` → after: `L8-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L8-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L8-L65) · [Before (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L32-L37)

```diff
-     const LQ = function(QQ) {
-         const FQ = [];
-         let wQ = 0;
-         for (let LQ = 0; LQ < QQ.length; LQ++) {
-           let qQ = QQ.charCodeAt(LQ);
-           qQ < 128 ? FQ[wQ++] = qQ : qQ < 2048 ? (FQ[wQ++] = qQ >> 6 | 192, FQ[wQ++] = 63 & qQ | 128) : 55296 === (64512 & qQ) && LQ + 1 < QQ.length && 56320 === (64512 & QQ.charCodeAt(LQ + 1)) ? (qQ = 65536 + ((1023 & qQ) << 10) + (1023 & QQ.charCodeAt(++LQ)), FQ[wQ++] = qQ >> 1 … [truncated]
+     class Dk {
+       constructor(kk, ek, ik) {
+         this.bu = kk, this.bv = ek, this.distance = ik, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
+       }
+     }
+   },
+   39894: (kk, ek, ik) => {
+     ik.d(ek, {
+       e: () => bk
+     });
+     var Dk = ik(36707),
+       fk = ik(36698),
+       Sk = ik(36703);
+     class bk {
+       constructor(kk, ek, ik) {
+         this.vectors = (0, Dk.c)(8, fk.o.Zero), this.center = fk.o.Zero(), this.centerWorld = fk.o.Zero(), this.extendSize = fk.o.Zero(), this.extendSizeWorld = fk.o.Zero(), this.directions = (0, Dk.c)(3, fk.o.Zero), this.vectorsWorld = (0, Dk.c)(8, fk.o.Zero), this.minimumWorld  … [truncated]
+ ... (42 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L39` → after: `L67-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L67-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L67-L213) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L39)

```diff
-         return FQ
+         fk.o.FromArrayToRef(kk.m, 0, Dk[0]), fk.o.FromArrayToRef(kk.m, 4, Dk[1]), fk.o.FromArrayToRef(kk.m, 8, Dk[2]), this._worldMatrix = kk
+       }
+       isInFrustum(kk) {
+         return bk.IsInFrustum(this.vectorsWorld, kk)
+       }
+       isCompletelyInFrustum(kk) {
+         return bk.IsCompletelyInFrustum(this.vectorsWorld, kk)
+       }
+       intersectsPoint(kk) {
+         const ek = this.minimumWorld,
+           ik = this.maximumWorld,
+           Dk = ek.x,
+           fk = ek.y,
+           bk = ek.z,
+           rk = ik.x,
+           Pk = ik.y,
+ ... (131 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L42-L69` → after: `L216-L807`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L216-L807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L216-L807) · [Before (L42-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L42-L69)

```diff
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
-         encodeByteArray(QQ, FQ) {
-           if (!Array.isArray(QQ)) throw Error("encodeByteArray takes an array as a parameter");
-           this.init_();
-           const wQ = FQ ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
- ... (12 more removed lines; see GitHub link above)
+         min: 0,
+         max: 0
+       },
+       mk = (kk, ek, ik) => {
+         const Dk = fk.o.Dot(ek.centerWorld, kk),
+           Sk = Math.abs(fk.o.Dot(ek.directions[0], kk)) * ek.extendSize.x + Math.abs(fk.o.Dot(ek.directions[1], kk)) * ek.extendSize.y + Math.abs(fk.o.Dot(ek.directions[2], kk)) * ek.extendSize.z;
+         ik.min = Dk - Sk, ik.max = Dk + Sk
+       },
+       Mk = (kk, ek, ik) => (mk(kk, ek, rk), mk(kk, ik, Pk), !(rk.min > Pk.max || Pk.min > rk.max));
+     class Kk {
+       constructor(kk, ek, ik) {
+         this._isLocked = !1, this.boundingBox = new Sk.e(kk, ek, ik), this.HDk = new bk(kk, ek, ik)
+       }
+       reConstruct(kk, ek, ik) {
+         this.boundingBox.reConstruct(kk, ek, ik), this.HDk.reConstruct(kk, ek, ik)
+       }
+ ... (576 more added lines; see GitHub link above)
```

#### 6. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L71-L77` → after: `L809-L999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L809-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L809-L999) · [Before (L71-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L71-L77)

```diff
-           return LQ.join("")
-         },
-         encodeString(QQ, FQ) {
-           return this.HAS_NATIVE_SUPPORT && !FQ ? btoa(QQ) : this.encodeByteArray(LQ(QQ), FQ)
-         },
-         decodeString(QQ, FQ) {
-           return this.HAS_NATIVE_SUPPORT && !FQ ? atob(QQ) : function(QQ) {
+           return this._scene.forcePointsCloud
+         }
+         set pointsCloud(ek) {
+           this.fillMode = ek ? kk.PointFillMode : kk.TriangleFillMode
+         }
+         get fillMode() {
+           return this._fillMode
+         }
+         set fillMode(ek) {
+           this._fillMode !== ek && (this._fillMode = ek, this.pek(kk.MiscDirtyFlag))
+         }
+         get useLogarithmicDepth() {
+           return this._useLogarithmicDepth
+         }
+         set useLogarithmicDepth(kk) {
+           const ek = this.XF().JU().getCaps().fragmentDepthSupported;
+ ... (175 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L79-L94` → after: `L1001-L1003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1001-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1001-L1003) · [Before (L79-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L79-L94)

```diff
-             let wQ = 0,
-               LQ = 0;
-             for (; wQ < QQ.length;) {
-               const qQ = QQ[wQ++];
-               if (qQ < 128) FQ[LQ++] = String.fromCharCode(qQ);
-               else if (qQ > 191 && qQ < 224) {
-                 const oQ = QQ[wQ++];
-                 FQ[LQ++] = String.fromCharCode((31 & qQ) << 6 | 63 & oQ)
-               } else if (qQ > 239 && qQ < 365) {
-                 const oQ = ((7 & qQ) << 18 | (63 & QQ[wQ++]) << 12 | (63 & QQ[wQ++]) << 6 | 63 & QQ[wQ++]) - 65536;
-                 FQ[LQ++] = String.fromCharCode(55296 + (oQ >> 10)), FQ[LQ++] = String.fromCharCode(56320 + (1023 & oQ))
-               } else {
-                 const oQ = QQ[wQ++],
-                   DQ = QQ[wQ++];
-                 FQ[LQ++] = String.fromCharCode((15 & qQ) << 12 | (63 & oQ) << 6 | 63 & DQ)
-               }
+             for (const ek in this.meshMap) {
+               const ik = this.meshMap[ek];
+               ik && kk.push(ik)
```

#### 8. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L96-L116` → after: `L1005-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1005-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1005-L1026) · [Before (L96-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L96-L116)

```diff
-             return FQ.join("")
-           }(this.decodeStringToByteArray(QQ, FQ))
-         },
-         decodeStringToByteArray(QQ, FQ) {
-           this.init_();
-           const wQ = FQ ? this.charToByteMapWebSafe_ : this.charToByteMap_,
-             LQ = [];
-           for (let qQ = 0; qQ < QQ.length;) {
-             const FQ = wQ[QQ.charAt(qQ++)],
-               DQ = qQ < QQ.length ? wQ[QQ.charAt(qQ)] : 0;
-             ++qQ;
-             const kQ = qQ < QQ.length ? wQ[QQ.charAt(qQ)] : 64;
-             ++qQ;
-             const vQ = qQ < QQ.length ? wQ[QQ.charAt(qQ)] : 64;
-             if (++qQ, null == FQ || null == DQ || null == kQ || null == vQ) throw new oQ;
-             const mQ = FQ << 2 | DQ >> 4;
- ... (5 more removed lines; see GitHub link above)
+             return kk
+           }
+           return this._scene.meshes.filter((kk => kk.material === this))
+         }
+         forceCompilation(kk, ek, ik, Dk) {
+           const fk = {
+               clipPlane: !1,
+               useInstances: !1,
+               ...ik
+             },
+             Sk = this.XF(),
+             bk = this.allowShaderHotSwapping;
+           this.allowShaderHotSwapping = !1;
+           const rk = () => {
+             if (!this._scene || !this._scene.JU()) return;
+             const ik = Sk.clipPlane;
+ ... (6 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L118` → after: `L1028-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1028-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1028-L1106) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L118)

```diff
-             }
+               ik && (this.allowShaderHotSwapping = bk, Sk && Dk && Dk(Sk), ek && ek(this))
+             } else this.isReady() ? (this.allowShaderHotSwapping = bk, ek && ek(this)) : setTimeout(rk, 16);
+             fk.clipPlane && (Sk.clipPlane = ik)
+           };
+           rk()
+         }
+         async forceCompilationAsync(kk, ek) {
+           return await new Promise(((ik, Dk) => {
+             this.forceCompilation(kk, (() => {
+               ik()
+             }), ek, (kk => {
+               Dk(kk)
+             }))
+           }))
+         }
+         pek(ek) {
+ ... (63 more added lines; see GitHub link above)
```

#### 10. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L120-L125` → after: `L1108-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1108-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1108-L1116) · [Before (L120-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L120-L125)

```diff
-           return LQ
-         },
-         init_() {
-           if (!this.byteToCharMap_) {
-             this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
-             for (let QQ = 0; QQ < this.ENCODED_VALS.length; QQ++) this.byteToCharMap_[QQ] = this.ENCODED_VALS.charAt(QQ), this.charToByteMap_[this.byteToCharMap_[QQ]] = QQ, this.byteToCharMapWebSafe_[QQ] = this.ENCODED_VALS_WEBSAFE.charAt(QQ), this.charToByteMapWebSafe_[this.byte … [truncated]
+         }
+         setPrePassRenderer(kk) {
+           return !1
+         }
+         dispose(kk, ek, ik) {
+           const Dk = this.XF();
+           if (Dk.stopAnimation(this), Dk.freeProcessedMaterials(), Dk.removeMaterial(this), this._eventInfo.forceDisposeTextures = ek, this._callbackPluginEventGeneric(2, this._eventInfo), this._parentContainer) {
+             const kk = this._parentContainer.materials.indexOf(this);
+             kk > -1 && this._parentContainer.materials.splice(kk, 1), this._parentContainer = null
```

#### 11. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L128-L144` → after: `L1129-L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1129-L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1129-L1144) · [Before (L128-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L128-L144)

```diff
-       };
-     class oQ extends Error {
-       constructor() {
-         super(...arguments), this.name = "DecodeBase64StringError"
-       }
-     }
-     const DQ = function(QQ) {
-         return function(QQ) {
-           const FQ = LQ(QQ);
-           return qQ.encodeByteArray(FQ, !0)
-         }(QQ).replace(/\./g, "")
-       },
-       kQ = function(QQ) {
-         try {
-           return qQ.decodeString(QQ, !0)
-         } catch (FQ) {
- ... (1 more removed lines; see GitHub link above)
+         _disposeMeshResources(kk) {
+           if (!kk) return;
+           const ek = kk.geometry,
+             ik = kk._internalAbstractMeshDataInfo._materialForRenderPass;
+           if (this._storeEffectOnSubMeshes) {
+             if (kk.TY && ik)
+               for (const Dk of kk.TY) {
+                 const kk = Dk._drawWrappers;
+                 for (let fk = 0; fk < kk.length; fk++) {
+                   const Sk = kk[fk]?.effect;
+                   if (!Sk) continue;
+                   ik[fk] === this && (ek?._releaseVertexArrayObject(Sk), Dk._removeDrawWrapper(fk, !0, !0))
+                 }
+               }
+           } else ek?._releaseVertexArrayObject(this._drawWrapper.effect);
+           kk.material !== this || kk.aDk || (kk.material = null)
```

#### 12. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L146-L164` → after: `L1146-L1173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1146-L1173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1146-L1173) · [Before (L146-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L146-L164)

```diff
-         return null
-       };
-     const vQ = () => function() {
-         if ("undefined" !== typeof self) return self;
-         if ("undefined" !== typeof window) return window;
-         if ("undefined" !== typeof wQ.g) return wQ.g;
-         throw new Error("Unable to locate global object.")
-       }().__FIREBASE_DEFAULTS__,
-       mQ = () => {
-         try {
-           return vQ() || (() => {
-             if ("undefined" === typeof process) return
-           })() || (() => {
-             if ("undefined" === typeof document) return;
-             let QQ;
-             try {
- ... (3 more removed lines; see GitHub link above)
+         serialize() {
+           const kk = nk.b.Serialize(this);
+           return kk.stencil = this.stencil.serialize(), kk.uniqueId = this.uniqueId, this._serializePlugins(kk), kk
+         }
+         _serializePlugins(kk) {
+           if (kk.plugins = {}, this.pluginManager)
+             for (const ek of this.pluginManager._plugins) ek.doNotSerialize || (kk.plugins[ek.getClassName()] = ek.serialize())
+         }
+         static ParseAlphaMode(kk, ek) {
+           void 0 !== kk._alphaMode ? ek._alphaMode = Array.isArray(kk._alphaMode) ? [...kk._alphaMode] : [kk._alphaMode] : void 0 !== kk.alphaMode ? ek._alphaMode = Array.isArray(kk.alphaMode) ? [...kk.alphaMode] : [kk.alphaMode] : ek._alphaMode = [2]
+         }
+         static Parse(ek, ik, Dk) {
+           if (ek.customType) {
+             if ("BABYLON.PBRMaterial" === ek.customType && ek.overloadedAlbedo && (ek.customType = "BABYLON.LegacyPBRMaterial", !BABYLON.LegacyPBRMaterial)) return Mk.b.Error("Your scene is trying to load a legacy version of the PBRMaterial, please, include it from the materials  … [truncated]
+           } else ek.customType = "BABYLON.StandardMaterial";
+           const fk = Sk.i.Instantiate(ek.customType).Parse(ek, ik, Dk);
+ ... (12 more added lines; see GitHub link above)
```

#### 13. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L172-L184` → after: `L1176-L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1176-L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1176-L1563) · [Before (L172-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L172-L184)

```diff
-       },
-       uQ = QQ => {
-         var FQ, wQ;
-         return null === (wQ = null === (FQ = mQ()) || void 0 === FQ ? void 0 : FQ.emulatorHosts) || void 0 === wQ ? void 0 : wQ[QQ]
-       },
-       HQ = () => {
-         var QQ;
-         return null === (QQ = mQ()) || void 0 === QQ ? void 0 : QQ.config
-       },
-       bQ = QQ => {
-         var FQ;
-         return null === (FQ = mQ()) || void 0 === FQ ? void 0 : FQ[`_${QQ}`]
-       };
+       }, (() => {
+         const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         ek = [(0, fk.I)()], ik = [(0, fk.I)()], lk = [(0, fk.I)()], pk = [(0, fk.I)()], yk = [(0, fk.I)()], Yk = [(0, fk.I)()], Lk = [(0, fk.I)()], Ck = [(0, fk.I)("alpha")], Ak = [(0, fk.I)("backFaceCulling")], jk = [(0, fk.I)("textureRepetitionMode")], sk = [(0, fk.I)("textureR … [truncated]
+           kind: "getter",
+           name: "pointsCloud",
+           static: !1,
+           private: !1,
+           access: {
+             has: kk => "pointsCloud" in kk,
+             get: kk => kk.pointsCloud
+           },
+           metadata: Sk
+         }, null, Zk), (0, Dk.d)(kk, null, Xk, {
+           kind: "getter",
+           name: "fillMode",
+           static: !1,
+ ... (372 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L186-L189` → after: `L1565-L1566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1565-L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1565-L1566) · [Before (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L186-L189)

```diff
-       constructor() {
-         this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((QQ, FQ) => {
-           this.resolve = QQ, this.reject = FQ
-         }))
+       static get DiffuseTextureEnabled() {
+         return this._DiffuseTextureEnabled
```

#### 15. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L191-L194` → after: `L1568-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1568-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1568-L1713) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L191-L194)

```diff
-       wrapCallback(QQ) {
-         return (FQ, wQ) => {
-           FQ ? this.reject(FQ) : this.resolve(wQ), "function" === typeof QQ && (this.promise.catch((() => {})), 1 === QQ.length ? QQ(FQ) : QQ(FQ, wQ))
-         }
+       static set DiffuseTextureEnabled(kk) {
+         this._DiffuseTextureEnabled !== kk && (this._DiffuseTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
+       }
+       static get BaseWeightTextureEnabled() {
+         return this._BaseWeightTextureEnabled
+       }
+       static set BaseWeightTextureEnabled(kk) {
+         this._BaseWeightTextureEnabled !== kk && (this._BaseWeightTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
+       }
+       static get BaseDiffuseRoughnessTextureEnabled() {
+         return this._BaseDiffuseRoughnessTextureEnabled
+       }
+       static set BaseDiffuseRoughnessTextureEnabled(kk) {
+         this._BaseDiffuseRoughnessTextureEnabled !== kk && (this._BaseDiffuseRoughnessTextureEnabled = kk, Dk.c.MarkAllMaterialsAsDirty(1))
+       }
+       static get DetailTextureEnabled() {
+ ... (130 more added lines; see GitHub link above)
```

#### 16. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L198-L199` → after: `L1786-L1800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1786-L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1786-L1800) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L198-L199)

```diff
-     function xQ() {
-       return "undefined" !== typeof navigator && "string" === typeof navigator.userAgent ? navigator.userAgent : ""
+     function nk(kk, ek, ik) {
+       let Sk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+       const bk = ik.NUM_MORPH_INFLUENCERS;
+       if (bk > 0 && fk.e.LastCreatedEngine) {
+         const rk = fk.e.LastCreatedEngine.getCaps().maxVertexAttribs,
+           Pk = ek.morphTargetManager;
+         if (Pk?.isUsingTextureForTargets) return;
+         const mk = Pk && Pk.supportsPositions && Sk,
+           Mk = Pk && Pk.supportsNormals && ik.NORMAL,
+           Kk = Pk && Pk.supportsTangents && ik.TANGENT,
+           xk = Pk && Pk.supportsUVs && ik.UV1,
+           nk = Pk && Pk.supportsUV2s && ik.UV2,
+           Uk = Pk && Pk.supportsColors && ik.VERTEXCOLOR;
+         for (let ik = 0; ik < bk; ik++) mk && kk.push("position" + ik), Mk && kk.push("normal" + ik), Kk && kk.push("tangent" + ik), xk && kk.push("uv_" + ik), nk && kk.push("uv2_" + ik), Uk && kk.push("color" + ik), kk.length > rk && Dk.b.Error("Cannot add more vertex attributes … [truncated]
+       }
```

#### 17. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L202-L203` → after: `L1803-L1805`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1803-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1803-L1805) · [Before (L202-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L202-L203)

```diff
-     function AQ() {
-       return "undefined" !== typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xQ())
+     function Uk(kk) {
+       let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+       kk.push("world0"), kk.push("world1"), kk.push("world2"), kk.push("world3"), ek && (kk.push("previousWorld0"), kk.push("previousWorld1"), kk.push("previousWorld2"), kk.push("previousWorld3"))
```

#### 18. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L206-L208` → after: `L1808-L1810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1808-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1808-L1810) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L206-L208)

```diff
-     function tQ() {
-       const QQ = "object" === typeof chrome ? chrome.runtime : "object" === typeof browser ? browser.runtime : void 0;
-       return "object" === typeof QQ && void 0 !== QQ.id
+     function Hk(kk, ek) {
+       const ik = kk.morphTargetManager;
+       kk && ik && ek.setFloatArray("morphTargetInfluences", ik.influences)
```

#### 19. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L211-L212` → after: `L1813-L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1813-L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1813-L1814) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L211-L212)

```diff
-     function eQ() {
-       return "object" === typeof navigator && "ReactNative" === navigator.product
+     function wk(kk, ek) {
+       ek.bindToEffect(kk, "Scene")
```

#### 20. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L215-L217` → after: `L1817-L1845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1817-L1845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1817-L1845) · [Before (L215-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L215-L217)

```diff
-     function MQ() {
-       const QQ = xQ();
-       return QQ.indexOf("MSIE ") >= 0 || QQ.indexOf("Trident/") >= 0
+     function lk(kk, ek, ik, Dk) {
+       let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Pk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         mk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         Mk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
+         Kk = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
+         xk = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
+       if (kk.texturesEnabled && fk && rk.e.ReflectionTextureEnabled) {
+         if (ik.N7("reflectionMatrix", fk.getReflectionTextureMatrix()), ik.updateFloat2("vReflectionInfos", fk.level * kk.iblIntensity, xk), Pk && fk.boundingBoxSize) {
+           const kk = fk;
+           ik.updateVector3("vReflectionPosition", kk.boundingBoxPosition), ik.updateVector3("vReflectionSize", kk.boundingBoxSize)
+         }
+         if (Sk) {
+           const kk = fk.getSize().width;
+ ... (13 more added lines; see GitHub link above)
```

#### 21. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L220-L224` → after: `L1848-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1848-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1848-L1854) · [Before (L220-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L220-L224)

```diff
-     function GQ() {
-       try {
-         return "object" === typeof indexedDB
-       } catch (QQ) {
-         return !1
+     function pk(kk, ek, ik) {
+       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+       if (Dk && rk.e.ReflectionTextureEnabled) {
+         ek.LODBASEDMICROSFURACE ? ik.setTexture("reflectionSampler", Dk) : (ik.setTexture("reflectionSampler", Dk._lodTextureMid || Dk), ik.setTexture("reflectionSamplerLow", Dk._lodTextureLow || Dk), ik.setTexture("reflectionSamplerHigh", Dk._lodTextureHigh || Dk)), ek.USEIRRADI … [truncated]
+         const Sk = kk.iblCdfGenerator;
+         fk && Sk && ik.setTexture("icdfSampler", Sk.getIcdfTexture())
```

#### 22. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L228-L245` → after: `L1858-L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1858-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1858-L1859) · [Before (L228-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L228-L245)

```diff
-     function pQ() {
-       return new Promise(((QQ, FQ) => {
-         try {
-           let wQ = !0;
-           const LQ = "validate-browser-context-for-indexeddb-analytics-module",
-             qQ = self.indexedDB.open(LQ);
-           qQ.onsuccess = () => {
-             qQ.result.close(), wQ || self.indexedDB.deleteDatabase(LQ), QQ(!0)
-           }, qQ.onupgradeneeded = () => {
-             wQ = !1
-           }, qQ.onerror = () => {
-             var QQ;
-             FQ((null === (QQ = qQ.error) || void 0 === QQ ? void 0 : QQ.message) || "")
-           }
-         } catch (wQ) {
-           FQ(wQ)
- ... (2 more removed lines; see GitHub link above)
+     function yk(kk, ek, ik) {
+       ek._needUVs = !0, ek[ik] = !0, kk.optimizeUVAllocation && kk.getTextureMatrix().isIdentityAs3x2() ? (ek[ik + "DIRECTUV"] = kk.coordinatesIndex + 1, ek["MAINUV" + (kk.coordinatesIndex + 1)] = !0) : ek[ik + "DIRECTUV"] = 0
```

#### 23. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L248-L272` → after: `L1862-L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1862-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1862-L1864) · [Before (L248-L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L248-L272)

```diff
-     function cQ() {
-       return !("undefined" === typeof navigator || !navigator.cookieEnabled)
-     }
-     class CQ extends Error {
-       constructor(QQ, FQ, wQ) {
-         super(FQ), this.code = QQ, this.customData = wQ, this.name = "FirebaseError", Object.setPrototypeOf(this, CQ.prototype), Error.captureStackTrace && Error.captureStackTrace(this, SQ.prototype.create)
-       }
-     }
-     class SQ {
-       constructor(QQ, FQ, wQ) {
-         this.service = QQ, this.serviceName = FQ, this.errors = wQ
-       }
-       create(QQ) {
-         const FQ = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
-           wQ = `${this.service}/${QQ}`,
-           LQ = this.errors[QQ],
- ... (9 more removed lines; see GitHub link above)
+     function Yk(kk, ek, ik) {
+       const Dk = kk.getTextureMatrix();
+       ek.N7(ik + "Matrix", Dk)
```

#### 24. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L276-L279` → after: `L1867-L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1867-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1867-L1868) · [Before (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L276-L279)

```diff
-     function WQ(QQ) {
-       for (const FQ in QQ)
-         if (Object.prototype.hasOwnProperty.call(QQ, FQ)) return !1;
-       return !0
+     function Lk(kk, ek, ik) {
+       ik.BAKED_VERTEX_ANIMATION_TEXTURE && ik.INSTANCES && kk.push("bakedVertexAnimationSettingsInstanced")
```

#### 25. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L282-L296` → after: `L1871-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1871-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1871-L1882) · [Before (L282-L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L282-L296)

```diff
-     function RQ(QQ, FQ) {
-       if (QQ === FQ) return !0;
-       const wQ = Object.keys(QQ),
-         LQ = Object.keys(FQ);
-       for (const qQ of wQ) {
-         if (!LQ.includes(qQ)) return !1;
-         const wQ = QQ[qQ],
-           oQ = FQ[qQ];
-         if (OQ(wQ) && OQ(oQ)) {
-           if (!RQ(wQ, oQ)) return !1
-         } else if (wQ !== oQ) return !1
-       }
-       for (const qQ of LQ)
-         if (!wQ.includes(qQ)) return !1;
-       return !0
+     function Ck(kk, ek, ik) {
+       var Dk;
+       if (ek && kk && (kk.computeBonesUsingShaders && ek._bonesComputationForcedToCPU && (kk.computeBonesUsingShaders = !1), kk.useBones && kk.computeBonesUsingShaders && kk.skeleton)) {
+         const fk = kk.skeleton;
+         if (fk.isUsingTextureForMatrices && ek.getUniformIndex("boneTextureInfo") > -1) {
+           const ik = fk.getTransformMatrixTexture(kk);
+           ek.setTexture("boneSampler", ik), ek.setFloat2("boneTextureInfo", fk._textureWidth, fk._textureHeight)
+         } else {
+           const Sk = fk.getTransformMatrices(kk);
+           Sk && (ek.setMatrices("mBones", Sk), ik && kk.XF().prePassRenderer && kk.XF().prePassRenderer.getIndex(2) && (ik.previousBones[kk.uniqueId] || (ik.previousBones[kk.uniqueId] = Sk.slice()), ek.setMatrices("mPreviousBones", ik.previousBones[kk.uniqueId]), Dk = Sk, ik.prev … [truncated]
+         }
+       }
```

#### 26. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L299-L300` → after: `L1885-L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1885-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1885-L1887) · [Before (L299-L300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L299-L300)

```diff
-     function OQ(QQ) {
-       return null !== QQ && "object" === typeof QQ
+     function Ak(kk, ek, ik, Dk, fk) {
+       let Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+       kk._bindLight(ek, ik, Dk, fk, Sk)
```

#### 27. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L303-L308` → after: `L1892-L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1892-L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1892-L1897) · [Before (L303-L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L303-L308)

```diff
-     function sQ(QQ) {
-       const FQ = [];
-       for (const [wQ, LQ] of Object.entries(QQ)) Array.isArray(LQ) ? LQ.forEach((QQ => {
-         FQ.push(encodeURIComponent(wQ) + "=" + encodeURIComponent(QQ))
-       })) : FQ.push(encodeURIComponent(wQ) + "=" + encodeURIComponent(LQ));
-       return FQ.length ? "&" + FQ.join("&") : ""
+     function dk(kk, ek, ik, Dk) {
+       let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
+       const Sk = Math.min(ek.lightSources.length, fk);
+       for (let bk = 0; bk < Sk; bk++) {
+         Ak(ek.lightSources[bk], bk, kk, ik, "boolean" === typeof Dk ? Dk : Dk.SPECULARTERM, ek.receiveShadows)
+       }
```

#### 28. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L311-L318` → after: `L1900-L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1900-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1900-L1901) · [Before (L311-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L311-L318)

```diff
-     function rQ(QQ) {
-       const FQ = {};
-       return QQ.replace(/^\?/, "").split("&").forEach((QQ => {
-         if (QQ) {
-           const [wQ, LQ] = QQ.split("=");
-           FQ[decodeURIComponent(wQ)] = decodeURIComponent(LQ)
-         }
-       })), FQ
+     function Vk(kk, ek, ik, Dk) {
+       ik.NUM_BONE_INFLUENCERS > 0 && (Dk.addCPUSkinningFallback(0, ek), kk.push("matricesIndices"), kk.push("matricesWeights"), ik.NUM_BONE_INFLUENCERS > 4 && (kk.push("matricesIndicesExtra"), kk.push("matricesWeightsExtra")))
```

#### 29. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L321-L325` → after: `L1904-L1905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1904-L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1904-L1905) · [Before (L321-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L321-L325)

```diff
-     function IQ(QQ) {
-       const FQ = QQ.indexOf("?");
-       if (!FQ) return "";
-       const wQ = QQ.indexOf("#", FQ);
-       return QQ.substring(FQ, wQ > 0 ? wQ : void 0)
+     function Fk(kk, ek) {
+       (ek.INSTANCES || ek.THIN_INSTANCES) && Uk(kk, !!ek.PREPASS_VELOCITY), ek.INSTANCESCOLOR && kk.push("instanceColor")
```

#### 30. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L329-L330` → after: `L1909-L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1909-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1909-L1913) · [Before (L329-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L329-L330)

```diff
-       const wQ = new NQ(QQ, FQ);
-       return wQ.subscribe.bind(wQ)
+       let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
+         Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+         fk = 0;
+       for (let Sk = 0; Sk < ik && kk["LIGHT" + Sk]; Sk++) Sk > 0 && (fk = Dk + Sk, ek.addFallback(fk, "LIGHT" + Sk)), kk.SHADOWS || (kk["SHADOW" + Sk] && ek.addFallback(Dk, "SHADOW" + Sk), kk["SHADOWPCF" + Sk] && ek.addFallback(Dk, "SHADOWPCF" + Sk), kk["SHADOWPCSS" + Sk] && ek.a … [truncated]
+       return fk
```

#### 31. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L332-L394` → after: `L1915-L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1915-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1915-L1927) · [Before (L332-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L332-L394)

```diff
-     class NQ {
-       constructor(QQ, FQ) {
-         this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = FQ, this.task.then((() => {
-           QQ(this)
-         })).catch((QQ => {
-           this.error(QQ)
-         }))
-       }
-       next(QQ) {
-         this.forEachObserver((FQ => {
-           FQ.next(QQ)
-         }))
-       }
-       error(QQ) {
-         this.forEachObserver((FQ => {
-           FQ.error(QQ)
- ... (47 more removed lines; see GitHub link above)
+ 
+     function qk(kk, ek, ik, Dk, fk, Sk, bk) {
+       let rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         mk = arguments.length > 9 ? arguments[9] : void 0,
+         Mk = arguments.length > 10 ? arguments[10] : void 0;
+       if (bk._areMiscDirty) {
+         bk.LOGARITHMICDEPTH = ik, bk.POINTSIZE = Dk, bk.FOG = fk && function(kk, ek) {
+           return ek.fogEnabled && kk.applyFog && 0 !== ek.fogMode
+         }(kk, ek), bk.NONUNIFORMSCALING = kk.nonUniformScaling, bk.ALPHATEST = Sk, bk.DECAL_AFTER_DETAIL = rk, bk.USE_VERTEX_PULLING = Pk, bk.RIGHT_HANDED = ek.useRightHandedSystem;
+         const Kk = Pk ? mk?.geometry?.getIndexBuffer() : null,
+           xk = !!mk && mk.isUnIndexed;
+         bk.VERTEX_PULLING_USE_INDEX_BUFFER = !!Kk && !xk, bk.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!Kk || xk) && Kk.is32Bits, bk.VERTEXOUTPUT_INVARIANT = !!Mk
```

#### 32. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L398-L402` → after: `L1931-L1939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1931-L1939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1931-L1939) · [Before (L398-L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L398-L402)

```diff
-     function TQ() {}
-     const KQ = 1e3,
-       zQ = 2,
-       lQ = 144e5,
-       jQ = .5;
+     function Ik(kk, ek, ik) {
+       let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
+       if (!kk.lightsEnabled || Dk) return !0;
+       const fk = ek.lightSources,
+         Sk = Math.min(fk.length, ik);
+       for (let bk = 0; bk < Sk; bk++)
+         if (!fk[bk].areLightTexturesReady()) return !1;
+       return !0
+     }
```

#### 33. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L404-L408` → after: `L1941-L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1941-L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1941-L1973) · [Before (L404-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L404-L408)

```diff
-     function aQ(QQ) {
-       let FQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zQ;
-       const wQ = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : KQ) * Math.pow(FQ, QQ),
-         LQ = Math.round(jQ * wQ * (Math.random() - .5) * 2);
-       return Math.min(lQ, wQ + LQ)
+     function zk(kk, ek, ik, fk) {
+       let Sk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
+         bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (!ik._areLightsDirty) return ik._needNormals;
+       const rk = Sk;
+       Sk = function(kk, ek) {
+         const ik = kk.JU().getCaps().maxUniformBuffersPerShaderStage;
+         if (null == ik) return ek;
+         const Dk = Math.max(ik - jk, 1);
+         return Math.min(ek, Dk)
+       }(kk, Sk);
+       let Pk = 0;
+       const mk = {
+         needNormals: ik._needNormals,
+         needRebuild: !1,
+         lightmapMode: !1,
+ ... (17 more added lines; see GitHub link above)
```

#### 34. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L411-L412` → after: `L1976-L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L1976-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L1976-L2014) · [Before (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L411-L412)

```diff
-     function XQ(QQ) {
-       return QQ && QQ._delegate ? QQ._delegate : QQ
+     function Qk(kk, ek, ik) {
+       let Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
+         Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       if (ek && rk.e.ReflectionTextureEnabled) {
+         if (!ek.isReadyOrNotBlocking()) return !1;
+         ik._needNormals = !0, ik.REFLECTION = !0, ik.GAMMAREFLECTION = ek.gammaSpace, ik.RGBDREFLECTION = ek.isRGBD, ik.LODINREFLECTIONALPHA = ek.lodLevelInAlpha, ik.LINEARSPECULARREFLECTION = ek.linearSpecularLOD, ik.USEIRRADIANCEMAP = !1, ik.LODBASEDMICROSFURACE = kk.JU().getCa … [truncated]
+         const bk = kk.JU();
+         switch (Dk && fk > 0 ? (ik.NUM_SAMPLES = "" + fk, bk._features.needTypeSuffixInShaderConstants && (ik.NUM_SAMPLES = ik.NUM_SAMPLES + "u"), ik.REALTIME_FILTERING = !0, kk.iblCdfGenerator && (ik.IBL_CDF_FILTERING = !0)) : ik.REALTIME_FILTERING = !1, ik.INVERTCUBICMAP = 6 == … [truncated]
+           case 0:
+             ik.REFLECTIONMAP_EXPLICIT = !0;
+             break;
+           case 2:
+             ik.REFLECTIONMAP_PLANAR = !0;
+             break;
+           case 4:
+ ... (23 more added lines; see GitHub link above)
```

#### 35. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L458-L468` → after: `L2017-L2033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2017-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2017-L2033) · [Before (L458-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L458-L468)

```diff
-     function xQ(QQ) {
-       return QQ !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (kQ || (kQ = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(QQ) ? function() {
-         for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
-         return QQ.apply(eQ(this), wQ), tQ(vQ.get(this))
-       } : function() {
-         for (var FQ = arguments.length, wQ = new Array(FQ), LQ = 0; LQ < FQ; LQ++) wQ[LQ] = arguments[LQ];
-         return tQ(QQ.apply(eQ(this), wQ))
-       } : function(FQ) {
-         for (var wQ = arguments.length, LQ = new Array(wQ > 1 ? wQ - 1 : 0), qQ = 1; qQ < wQ; qQ++) LQ[qQ - 1] = arguments[qQ];
-         const oQ = QQ.call(eQ(this), FQ, ...LQ);
-         return uQ.set(oQ, FQ.sort ? FQ.sort() : [FQ]), tQ(oQ)
+     function vk(kk, ek, ik, Dk, fk, bk, rk) {
+       switch (rk.needNormals = !0, void 0 === fk["LIGHT" + Dk] && (rk.needRebuild = !0), fk["LIGHT" + Dk] = !0, fk["SPOTLIGHT" + Dk] = !1, fk["HEMILIGHT" + Dk] = !1, fk["POINTLIGHT" + Dk] = !1, fk["DIRLIGHT" + Dk] = !1, fk["AREALIGHT" + Dk] = !1, fk["CLUSTLIGHT" + Dk] = !1, ik.pr … [truncated]
+         case Sk.d.FALLOFF_GLTF:
+           fk["LIGHT_FALLOFF_GLTF" + Dk] = !0;
+           break;
+         case Sk.d.FALLOFF_PHYSICAL:
+           fk["LIGHT_FALLOFF_PHYSICAL" + Dk] = !0;
+           break;
+         case Sk.d.FALLOFF_STANDARD:
+           fk["LIGHT_FALLOFF_STANDARD" + Dk] = !0
+       }
+       if (bk && !ik.specular.equalsFloats(0, 0, 0) && (rk.specularEnabled = !0), fk["SHADOW" + Dk] = !1, fk["SHADOWCSM" + Dk] = !1, fk["SHADOWCSMDEBUG" + Dk] = !1, fk["SHADOWCSMNUM_CASCADES" + Dk] = !1, fk["SHADOWCSMUSESHADOWMAXZ" + Dk] = !1, fk["SHADOWCSMNOBLEND" + Dk] = !1, fk[ … [truncated]
+         const ek = ik.getShadowGenerator(kk.activeCamera) ?? ik.getShadowGenerator();
+         if (ek) {
+           const kk = ek.getShadowMap();
+           kk && kk.renderList && kk.renderList.length > 0 && (rk.shadowEnabled = !0, ek.prepareDefines(fk, Dk))
+ ... (1 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L472-L489` → after: `L2038-L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2038-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2038-L2052) · [Before (L472-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L472-L489)

```diff
-     function AQ(QQ) {
-       return "function" === typeof QQ ? xQ(QQ) : (QQ instanceof IDBTransaction && function(QQ) {
-         if (mQ.has(QQ)) return;
-         const FQ = new Promise(((FQ, wQ) => {
-           const LQ = () => {
-               QQ.removeEventListener("complete", qQ), QQ.removeEventListener("error", oQ), QQ.removeEventListener("abort", oQ)
-             },
-             qQ = () => {
-               FQ(), LQ()
-             },
-             oQ = () => {
-               wQ(QQ.error || new DOMException("AbortError", "AbortError")), LQ()
-             };
-           QQ.addEventListener("complete", qQ), QQ.addEventListener("error", oQ), QQ.addEventListener("abort", oQ)
-         }));
-         mQ.set(QQ, FQ)
- ... (2 more removed lines; see GitHub link above)
+     function Ek(kk, ek, ik, Dk, fk) {
+       let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         rk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         Pk = function(kk, ek) {
+           let ik = !1;
+           if (kk.activeCamera) {
+             const Dk = ek.CAMERA_ORTHOGRAPHIC ? 1 : 0,
+               fk = ek.CAMERA_PERSPECTIVE ? 1 : 0,
+               Sk = 1 === kk.activeCamera.mode ? 1 : 0,
+               bk = 0 === kk.activeCamera.mode ? 1 : 0;
+             (Dk ^ Sk || fk ^ bk) && (ek.CAMERA_ORTHOGRAPHIC = 1 === Sk, ek.CAMERA_PERSPECTIVE = 1 === bk, ik = !0)
+           }
+           return ik
+         }(kk, Dk);
+       !1 !== Sk && (Pk = (0, bk.k)(ik, kk, Dk)), Dk.DEPTHPREPASS !== !ek.getColorWrite() && (Dk.DEPTHPREPASS = !Dk.DEPTHPREPASS, Pk = !0), Dk.INSTANCES !== fk && (Dk.INSTANCES = fk, Pk = !0), Dk.THIN_INSTANCES !== rk && (Dk.THIN_INSTANCES = rk, Pk = !0), Pk && Dk.markAsUnprocesse … [truncated]
```

#### 37. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L492-L512` → after: `L2059-L2103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2059-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2059-L2103) · [Before (L492-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L492-L512)

```diff
-     function tQ(QQ) {
-       if (QQ instanceof IDBRequest) return function(QQ) {
-         const FQ = new Promise(((FQ, wQ) => {
-           const LQ = () => {
-               QQ.removeEventListener("success", qQ), QQ.removeEventListener("error", oQ)
-             },
-             qQ = () => {
-               FQ(tQ(QQ.result)), LQ()
-             },
-             oQ = () => {
-               wQ(QQ.error), LQ()
-             };
-           QQ.addEventListener("success", qQ), QQ.addEventListener("error", oQ)
-         }));
-         return FQ.then((FQ => {
-           FQ instanceof IDBCursor && vQ.set(FQ, QQ)
- ... (5 more removed lines; see GitHub link above)
+     function Xk(kk, ek, ik, fk) {
+       let Sk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         bk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+         rk = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
+       if (!ek._areAttributesDirty && ek._needNormals === ek._normals && ek._needUVs === ek._uvs) return !1;
+       ek._normals = ek._needNormals, ek._uvs = ek._needUVs, ek.NORMAL = ek._needNormals && kk.isVerticesDataPresent("normal"), ek._needNormals && kk.isVerticesDataPresent("tangent") && (ek.TANGENT = !0);
+       for (let Dk = 1; Dk <= 6; ++Dk) ek["UV" + Dk] = !!ek._needUVs && kk.isVerticesDataPresent(`uv${1===Dk?"":Dk}`);
+       if (ik) {
+         const ik = kk.useVertexColors && kk.isVerticesDataPresent("color");
+         ek.VERTEXCOLOR = ik, ek.VERTEXALPHA = kk.hasVertexAlpha && ik && bk
+       }
+       return kk.isVerticesDataPresent("instanceColor") && (kk.hDk || kk.hasThinInstances) && (ek.INSTANCESCOLOR = !0), fk && function(kk, ek) {
+         if (kk.useBones && kk.computeBonesUsingShaders && kk.skeleton) {
+           ek.NUM_BONE_INFLUENCERS = kk.numBoneInfluencers;
+           const ik = void 0 !== ek.BONETEXTURE;
+           if (kk.skeleton.isUsingTextureForMatrices && ik) ek.BONETEXTURE = !0;
+ ... (29 more added lines; see GitHub link above)
```

#### 38. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L520-L553` → after: `L2107-L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2107-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2107-L2109) · [Before (L520-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L520-L553)

```diff
-       if (!(QQ instanceof IDBDatabase) || FQ in QQ || "string" !== typeof FQ) return;
-       if (pQ.get(FQ)) return pQ.get(FQ);
-       const wQ = FQ.replace(/FromIndex$/, ""),
-         LQ = FQ !== wQ,
-         qQ = GQ.includes(wQ);
-       if (!(wQ in (LQ ? IDBIndex : IDBObjectStore).prototype) || !qQ && !MQ.includes(wQ)) return;
-       const oQ = async function(QQ) {
-         const FQ = this.transaction(QQ, qQ ? "readwrite" : "readonly");
-         let oQ = FQ.store;
-         for (var DQ = arguments.length, kQ = new Array(DQ > 1 ? DQ - 1 : 0), vQ = 1; vQ < DQ; vQ++) kQ[vQ - 1] = arguments[vQ];
-         return LQ && (oQ = oQ.index(kQ.shift())), (await Promise.all([oQ[wQ](...kQ), qQ && FQ.done]))[0]
-       };
-       return pQ.set(FQ, oQ), oQ
-     }
-     YQ = (QQ => ({
-       ...QQ,
- ... (18 more removed lines; see GitHub link above)
+       if (kk.activeCamera) {
+         const ik = ek.MULTIVIEW;
+         ek.MULTIVIEW = null !== kk.activeCamera.outputRenderTarget && kk.activeCamera.outputRenderTarget.getViewCount() > 1, ek.MULTIVIEW != ik && ek.markAsUnprocessed()
```

#### 39. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L615-L620` → after: `L2113-L2116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2113-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2113-L2116) · [Before (L615-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L615-L620)

```diff
-     function wF(QQ, FQ) {
-       try {
-         QQ.container.pT(FQ)
-       } catch (wQ) {
-         WQ.debug(`Component ${FQ.name} failed to register with FirebaseApp ${QQ.name}`, wQ)
-       }
+     function ck(kk, ek, ik) {
+       const Dk = ek.ORDER_INDEPENDENT_TRANSPARENCY,
+         fk = ek.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
+       ek.ORDER_INDEPENDENT_TRANSPARENCY = kk.useOrderIndependentTransparency && ik, ek.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !kk.JU().getCaps().textureFloatLinearFiltering, Dk === ek.ORDER_INDEPENDENT_TRANSPARENCY && fk === ek.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || ek.markAsU … [truncated]
```

#### 40. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L623-L624` → after: `L2119-L2180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2119-L2180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2119-L2180) · [Before (L623-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L623-L624)

```diff
-     function LF(QQ, FQ) {
-       QQ.container.addOrOverwriteComponent(FQ)
+     function Tk(kk, ek, ik) {
+       const Dk = ek.PREPASS;
+       if (!ek._arePrePassDirty) return;
+       const fk = [{
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

#### 41. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L627-L632` → after: `L2183-L2190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2183-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2183-L2190) · [Before (L627-L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L627-L632)

```diff
-     function qF(QQ) {
-       const FQ = QQ.name;
-       if (FF.has(FQ)) return WQ.debug(`There were multiple attempts to register component ${FQ}.`), !1;
-       FF.set(FQ, QQ);
-       for (const wQ of QF.values()) wF(wQ, QQ);
-       return !0
+     function Zk(kk, ek, ik, Dk) {
+       let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+         Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
+         bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+         rk = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+         mk = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
+       fk && fk.push("Light" + kk), Sk || (ek.push("vLightData" + kk, "vLightDiffuse" + kk, "vLightSpecular" + kk, "vLightDirection" + kk, "vLightWidth" + kk, "vLightHeight" + kk, "vLightFalloff" + kk, "vLightGround" + kk, "vSliceData" + kk, "vSliceRanges" + kk, "lightMatrix" + kk … [truncated]
```

#### 42. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L635-L639` → after: `L2193-L2196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2193-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2193-L2196) · [Before (L635-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L635-L639)

```diff
-     function oF(QQ, FQ) {
-       const wQ = QQ.container.getProvider("heartbeat").getImmediate({
-         optional: !0
-       });
-       return wQ && wQ.triggerHeartbeat(), QQ.container.getProvider(FQ)
+     function Ok(kk, ek, ik) {
+       const Dk = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
+       ik && Dk.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
+       ek.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
```

#### 43. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L642-L644` → after: `L2199-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2199-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2199-L2207) · [Before (L642-L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L642-L644)

```diff
-     function DF(QQ, FQ) {
-       let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BQ;
-       oF(QQ, FQ).clearInstance(wQ)
+     function gk(kk, ek, ik) {
+       let Dk, fk, Sk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
+         bk = null;
+       if (kk.uniformsNames) {
+         const rk = kk;
+         Dk = rk.uniformsNames, fk = rk.uniformBuffersNames, ek = rk.samplers, ik = rk.defines, Sk = rk.maxSimultaneousLights || 0, bk = rk.shaderLanguage ?? null
+       } else Dk = kk, ek || (ek = []);
+       for (let rk = 0; rk < Sk && ik["LIGHT" + rk]; rk++) Zk(rk, Dk, ek, ik["PROJECTEDLIGHTTEXTURE" + rk], fk, !1, ik["IESLIGHTTEXTURE" + rk], ik["CLUSTLIGHT" + rk], ik["RECTAREALIGHTEMISSIONTEXTURE" + rk], 1 === bk);
+       ik.NUM_MORPH_INFLUENCERS && (Dk.push("morphTargetInfluences"), Dk.push("morphTargetCount")), ik.BAKED_VERTEX_ANIMATION_TEXTURE && (Dk.push("bakedVertexAnimationSettings"), Dk.push("bakedVertexAnimationTextureSizeInverted"), Dk.push("bakedVertexAnimationTime"), ek.push("bake … [truncated]
```

#### 44. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L647-L648` → after: `L2210-L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2210-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2210-L2216) · [Before (L647-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L647-L648)

```diff
-     function kF() {
-       FF.clear()
+     function Gk(kk) {
+       let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+         ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
+         Dk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+         fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+         Sk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
+       kk.addUniform("vReflectionInfos", 2), kk.addUniform("reflectionMatrix", 16), ek && kk.addUniform("vReflectionMicrosurfaceInfos", 3), ik && (kk.addUniform("vReflectionPosition", 3), kk.addUniform("vReflectionSize", 3)), Dk && (kk.addUniform("vReflectionFilteringInfo", 2), kk … [truncated]
```

#### 45. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L650-L666` → after: `L2218-L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2218-L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2218-L2228) · [Before (L650-L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L650-L666)

```diff
-     const vF = {
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
-       mF = new oQ.h("app", "Firebase", vF);
-     class uF {
-       constructor(QQ, FQ, wQ) {
- ... (1 more removed lines; see GitHub link above)
+   },
+   39937: (kk, ek, ik) => {
+     ik.d(ek, {
+       c: () => Sk
+     });
+     var Dk = ik(36698),
+       fk = ik(39861);
+     class Sk extends fk.e {
+       constructor(kk, ek) {
+         let ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
+         super(kk, ek, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new Dk.b, this._storeEffectOnSubMeshes = ik
```

#### 46. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L668-L669` → after: `L2230-L2231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2230-L2231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2230-L2231) · [Before (L668-L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L668-L669)

```diff
-       get automaticDataCollectionEnabled() {
-         return this.checkDestroyed(), this._automaticDataCollectionEnabled
+       getEffect() {
+         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
```

#### 47. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L671-L672` → after: `L2233-L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2233-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2233-L2234) · [Before (L671-L672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L671-L672)

```diff
-       set automaticDataCollectionEnabled(QQ) {
-         this.checkDestroyed(), this._automaticDataCollectionEnabled = QQ
+       isReady(kk, ek) {
+         return !!kk && (!this._storeEffectOnSubMeshes || (!kk.TY || 0 === kk.TY.length || this.isReadyForSubMesh(kk, kk.TY[0], ek)))
```

#### 48. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L674-L675` → after: `L2236-L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2236-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2236-L2238) · [Before (L674-L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L674-L675)

```diff
-       get name() {
-         return this.checkDestroyed(), this._name
+       _isReadyForSubMesh(kk) {
+         const ek = kk.materialDefines;
+         return !(this.checkReadyOnEveryCall || !kk.effect || !ek || ek._renderId !== this.XF().getRenderId())
```

#### 49. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L677-L678` → after: `L2240-L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2240-L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2240-L2241) · [Before (L677-L678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L677-L678)

```diff
-       get options() {
-         return this.checkDestroyed(), this._options
+       bindOnlyWorldMatrix(kk) {
+         this._activeEffect.setMatrix("world", kk)
```

#### 50. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L680-L681` → after: `L2243-L2244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2243-L2244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2243-L2244) · [Before (L680-L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L680-L681)

```diff
-       get config() {
-         return this.checkDestroyed(), this._config
+       bindOnlyNormalMatrix(kk) {
+         this._activeEffect.setMatrix("normalMatrix", kk)
```

#### 51. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L683-L684` → after: `L2246-L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2246-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2246-L2247) · [Before (L683-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L683-L684)

```diff
-       get container() {
-         return this._container
+       bind(kk, ek) {
+         ek && this.bindForSubMesh(kk, ek, ek.TY[0])
```

#### 52. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L686-L687` → after: `L2249-L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2249-L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2249-L2252) · [Before (L686-L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L686-L687)

```diff
-       get isDeleted() {
-         return this._isDeleted
+       _afterBind(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           ik = arguments.length > 2 ? arguments[2] : void 0;
+         super._afterBind(kk, ek, ik), this.XF()._cachedEffect = ek, ik ? ik._drawWrapper._forceRebindOnNextCall = !1 : this._drawWrapper._forceRebindOnNextCall = !1
```

#### 53. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L689-L690` → after: `L2254-L2256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2254-L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2254-L2256) · [Before (L689-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L689-L690)

```diff
-       set isDeleted(QQ) {
-         this._isDeleted = QQ
+       _mustRebind(kk, ek, ik) {
+         let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
+         return ik._drawWrapper._forceRebindOnNextCall || kk.isCachedMaterialInvalid(this, ek, Dk)
```

#### 54. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L692-L695` → after: `L2258-L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2258-L2259) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L692-L695)

```diff
-       checkDestroyed() {
-         if (this.isDeleted) throw mF.create("app-deleted", {
-           appName: this._name
-         })
+       dispose(kk, ek, ik) {
+         this._activeEffect = void 0, super.dispose(kk, ek, ik)
```

#### 55. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L698` → after: `L2262-L2268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2262-L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2262-L2268) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L698)

```diff
-     const HF = "9.23.0";
+   },
+   39964: (kk, ek, ik) => {
+     ik.d(ek, {
+       b: () => Sk,
+       f: () => fk
+     });
+     const Dk = new WeakMap;
```

#### 56. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L701-L717` → after: `L2271-L2273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2271-L2273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2271-L2273) · [Before (L701-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L701-L717)

```diff
-       let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
-         wQ = QQ;
-       if ("object" !== typeof FQ) {
-         FQ = {
-           name: FQ
-         }
-       }
-       const qQ = Object.assign({
-           name: BQ,
-           automaticDataCollectionEnabled: !1
-         }, FQ),
-         DQ = qQ.name;
-       if ("string" !== typeof DQ || !DQ) throw mF.create("bad-app-name", {
-         appName: String(DQ)
-       });
-       if (wQ || (wQ = (0, oQ.J)()), !wQ) throw mF.create("no-options");
- ... (1 more removed lines; see GitHub link above)
+       const ek = kk.getVertexBuffers();
+       if (!ek) return null;
+       let ik = Dk.get(kk);
```

#### 57. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L719-L722` → after: `L2275-L2295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2275-L2295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2275-L2295) · [Before (L719-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L719-L722)

```diff
-         if ((0, oQ.C)(wQ, kQ.options) && (0, oQ.C)(qQ, kQ.config)) return kQ;
-         throw mF.create("duplicate-app", {
-           appName: DQ
-         })
+         let kk = !1;
+         for (const Dk in ek)
+           if (!ik.has(Dk)) {
+             kk = !0;
+             break
+           } if (!kk) return ik
+       } else ik = new Map, Dk.set(kk, ik);
+       for (const Dk in ek) {
+         const kk = ek[Dk];
+         if (kk) {
+           const ek = kk.byteOffset,
+             fk = kk.byteStride,
+             Sk = kk.type,
+             bk = kk.normalized;
+           ik.set(Dk, {
+             offset: ek,
+ ... (5 more added lines; see GitHub link above)
```

#### 58. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L765-L876` → after: `L2301-L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2301-L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2301-L2304) · [Before (L765-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L765-L876)

```diff
-       if (null !== QQ && "function" !== typeof QQ) throw mF.create("invalid-log-argument");
-       (0, qQ.k)(QQ, FQ)
-     }
- 
-     function MF(QQ) {
-       (0, qQ.g)(QQ)
-     }
-     const GF = "firebase-heartbeat-store";
-     let pF = null;
- 
-     function cF() {
-       return pF || (pF = function(QQ, FQ) {
-         let {
-           blocked: wQ,
-           upgrade: LQ,
-           blocking: qQ,
- ... (96 more removed lines; see GitHub link above)
+       ek.forEach(((ek, ik) => {
+         const Dk = `vp_${ik}_info`;
+         kk.setFloat4(Dk, ek.offset, ek.stride, ek.type, ek.normalized ? 1 : 0)
+       }))
```

#### 59. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L878-L901` → after: `L2306-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2306-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2306-L2325) · [Before (L878-L901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L878-L901)

```diff
-     class RF {
-       constructor(QQ) {
-         this.app = QQ, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
-       }
-       async runIndexedDBEnvironmentCheck() {
-         return !!(0, oQ.$)() && (0, oQ.mb)().then((() => !0)).catch((() => !1))
-       }
-       async read() {
-         if (await this._canUseIndexedDBPromise) {
-           return await async function(QQ) {
-             try {
-               const FQ = await cF();
-               return await FQ.transaction(GF).objectStore(GF).get(SF(QQ))
-             } catch (FQ) {
-               if (FQ instanceof oQ.k) WQ.warn(FQ.message);
-               else {
- ... (8 more removed lines; see GitHub link above)
+   },
+   39901: (kk, ek, ik) => {
+     ik.d(ek, {
+       d: () => rk,
+       f: () => Pk
+     });
+     var Dk = ik(39566),
+       fk = ik(36698),
+       Sk = ik(39570);
+     let bk = (() => {
+       var kk;
+       let ek, ik, fk = [];
+       return kk = class {
+         static extractMinAndMaxIndexed(kk, ek, ik, Dk, fk, Sk) {
+           for (let bk = ik; bk < ik + Dk; bk++) {
+             const ik = 3 * ek[bk],
+ ... (4 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L904-L925` → after: `L2328-L2334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2328-L2334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2328-L2334) · [Before (L904-L925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L904-L925)

```diff
-         return {
-           heartbeats: []
-         }
-       }
-       async overwrite(QQ) {
-         var FQ;
-         if (await this._canUseIndexedDBPromise) {
-           const wQ = await this.read();
-           return CF(this.app, {
-             lastSentHeartbeatDate: null !== (FQ = QQ.lastSentHeartbeatDate) && void 0 !== FQ ? FQ : wQ.lastSentHeartbeatDate,
-             heartbeats: QQ.heartbeats
-           })
-         }
-       }
-       async add(QQ) {
-         var FQ;
- ... (6 more removed lines; see GitHub link above)
+         static extractMinAndMax(kk, ek, ik, Dk, fk, Sk) {
+           for (let bk = ek, rk = ek * Dk; bk < ek + ik; bk++, rk += Dk) {
+             const ek = kk[rk],
+               ik = kk[rk + 1],
+               Dk = kk[rk + 2];
+             fk.minimizeInPlaceFromFloats(ek, ik, Dk), Sk.maximizeInPlaceFromFloats(ek, ik, Dk)
+           }
```

#### 61. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L930-L934` → after: `L2381-L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2381-L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2381-L2389) · [Before (L930-L934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L930-L934)

```diff
-     function OF(QQ) {
-       return (0, oQ.t)(JSON.stringify({
-         version: 2,
-         heartbeats: QQ
-       })).length
+     function Pk(kk, ek, ik) {
+       let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
+         Sk = arguments.length > 4 ? arguments[4] : void 0;
+       const rk = new fk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
+         Pk = new fk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
+       return Sk || (Sk = 3), bk.extractMinAndMax(kk, ek, ik, Sk, rk, Pk), Dk && (rk.x -= rk.x * Dk.x + Dk.y, rk.y -= rk.y * Dk.x + Dk.y, rk.z -= rk.z * Dk.x + Dk.y, Pk.x += Pk.x * Dk.x + Dk.y, Pk.y += Pk.y * Dk.x + Dk.y, Pk.z += Pk.z * Dk.x + Dk.y), {
+         minimum: rk,
+         maximum: Pk
+       }
```

#### 62. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L939` → after: `L2392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2392) · [Before (L939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L939)

```diff
-   39942: (QQ, FQ, wQ) => {
+   39870: (kk, ek, ik) => {
```

#### 63. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L944` → after: `L2396-L2401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2396-L2401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2396-L2401) · [Before (L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L944)

```diff
-     var LQ = wQ(39949);
+     var Dk, fk = ik(39708),
+       Sk = ik(39879),
+       bk = ik(39887),
+       rk = ik(39901),
+       Pk = ik(39906),
+       mk = ik(39447);
```

#### 64. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L946-L950` → after: `L2403-L2445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2403-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2403-L2445) · [Before (L946-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L946-L950)

```diff
-       constructor(QQ, FQ, wQ) {
-         this.name = QQ, this.instanceFactory = FQ, this.type = wQ, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
-       }
-       setInstantiationMode(QQ) {
-         return this.instantiationMode = QQ, this
+       get materialDefines() {
+         const kk = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
+         return "string" === typeof kk ? null : kk
+       }
+       set materialDefines(kk) {
+         (this._mainDrawWrapperOverride ?? this._getDrawWrapper(void 0, !0)).defines = kk
+       }
+       _getDrawWrapper(kk) {
+         let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         kk = kk ?? this._engine.currentRenderPassId;
+         let ik = this._drawWrappers[kk];
+         return !ik && ek && (this._drawWrappers[kk] = ik = new Pk.e(this._mesh.XF().JU())), ik
+       }
+       _removeDrawWrapper(kk) {
+         let ek = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._drawWrappers[kk]?.dispose(ek), this._drawWrappers[kk] = void 0
+ ... (27 more added lines; see GitHub link above)
```

#### 65. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L952-L953` → after: `L2447-L2448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2447-L2448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2447-L2448) · [Before (L952-L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L952-L953)

```diff
-       setMultipleInstances(QQ) {
-         return this.multipleInstances = QQ, this
+       static AddToMesh(kk, ek, ik, Dk, fk, Sk, bk) {
+         return new Mk(kk, ek, ik, Dk, fk, Sk, bk, !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7])
```

#### 66. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L955-L956` → after: `L2450-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2450-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2450-L2453) · [Before (L955-L956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L955-L956)

```diff
-       setServiceProps(QQ) {
-         return this.serviceProps = QQ, this
+       constructor(kk, ek, ik, Dk, fk, Sk, bk) {
+         let rk = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
+           Pk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
+         this.materialIndex = kk, this.verticesStart = ek, this.verticesCount = ik, this.indexStart = Dk, this.indexCount = fk, this._mainDrawWrapperOverride = null, this._linesIndexCount = 0, this._linesIndexBuffer = null, this._lastColliderWorldVertices = null, this._lastCollide … [truncated]
```

#### 67. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L958-L959` → after: `L2455-L2456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2455-L2456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2455-L2456) · [Before (L958-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L958-L959)

```diff
-       setInstanceCreatedCallback(QQ) {
-         return this.onInstanceCreated = QQ, this
+       get IsGlobal() {
+         return 0 === this.verticesStart && this.verticesCount === this._mesh.getTotalVertices() && 0 === this.indexStart && this.indexCount === this._mesh.getTotalIndices()
```

#### 68. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L961-L1020` → after: `L2458-L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2458-L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2458-L2459) · [Before (L961-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L961-L1020)

```diff
-     }
-     const oQ = "[DEFAULT]";
-     class DQ {
-       constructor(QQ, FQ) {
-         this.name = QQ, this.container = FQ, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
-       }
-       get(QQ) {
-         const FQ = this.normalizeInstanceIdentifier(QQ);
-         if (!this.instancesDeferred.has(FQ)) {
-           const QQ = new LQ.e;
-           if (this.instancesDeferred.set(FQ, QQ), this.isInitialized(FQ) || this.shouldAutoInitialize()) try {
-             const wQ = this.getOrInitializeService({
-               instanceIdentifier: FQ
-             });
-             wQ && QQ.resolve(wQ)
-           } catch (wQ) {}
- ... (44 more removed lines; see GitHub link above)
+       hq() {
+         return this.IsGlobal || this._mesh.hasThinInstances ? this._mesh.hq() : this._boundingInfo
```

#### 69. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1022-L1024` → after: `L2461-L2462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2461-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2461-L2462) · [Before (L1022-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1022-L1024)

```diff
-       clearInstance() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oQ;
-         this.instancesDeferred.delete(QQ), this.instancesOptions.delete(QQ), this.instances.delete(QQ)
+       setBoundingInfo(kk) {
+         return this._boundingInfo = kk, this
```

#### 70. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1026-L1028` → after: `L2464-L2465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2464-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2464-L2465) · [Before (L1026-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1026-L1028)

```diff
-       async delete() {
-         const QQ = Array.from(this.instances.values());
-         await Promise.all([...QQ.filter((QQ => "INTERNAL" in QQ)).map((QQ => QQ.INTERNAL.delete())), ...QQ.filter((QQ => "_delete" in QQ)).map((QQ => QQ._delete()))])
+       getMesh() {
+         return this._mesh
```

#### 71. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1030-L1031` → after: `L2467-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2467-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2467-L2468) · [Before (L1030-L1031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1030-L1031)

```diff
-       isComponentSet() {
-         return null != this.component
+       getRenderingMesh() {
+         return this._renderingMesh
```

#### 72. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1033-L1035` → after: `L2470-L2471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2470-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2470-L2471) · [Before (L1033-L1035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1033-L1035)

```diff
-       isInitialized() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oQ;
-         return this.instances.has(QQ)
+       getReplacementMesh() {
+         return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
```

#### 73. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1037-L1039` → after: `L2473-L2475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2473-L2475) · [Before (L1037-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1037-L1039)

```diff
-       getOptions() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : oQ;
-         return this.instancesOptions.get(QQ) || {}
+       getEffectiveMesh() {
+         const kk = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
+         return kk || this._renderingMesh
```

#### 74. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1041-L1053` → after: `L2477-L2483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2477-L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2477-L2483) · [Before (L1041-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1041-L1053)

```diff
-       initialize() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
-         const {
-           options: FQ = {}
-         } = QQ, wQ = this.normalizeInstanceIdentifier(QQ.instanceIdentifier);
-         if (this.isInitialized(wQ)) throw Error(`${this.name}(${wQ}) has already been initialized`);
-         if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
-         const LQ = this.getOrInitializeService({
-           instanceIdentifier: wQ,
-           options: FQ
-         });
-         for (const [qQ, oQ] of this.instancesDeferred.entries()) {
-           wQ === this.normalizeInstanceIdentifier(qQ) && oQ.resolve(LQ)
+       fH() {
+         let kk = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         const ek = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
+         if (!ek) return kk && this._mesh.XF()._hasDefaultMaterial ? this._mesh.XF().defaultMaterial : null;
+         if (this._isMultiMaterial(ek)) {
+           const kk = ek.getSubMaterial(this.materialIndex);
+           return this._currentMaterial !== kk && (this._currentMaterial = kk, this.resetDrawCache()), kk
```

#### 75. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1057-L1169` → after: `L2487-L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2487-L2488) · [Before (L1057-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1057-L1169)

```diff
-       Bl(QQ, FQ) {
-         var wQ;
-         const LQ = this.normalizeInstanceIdentifier(FQ),
-           qQ = null !== (wQ = this.onInitCallbacks.get(LQ)) && void 0 !== wQ ? wQ : new Set;
-         qQ.add(QQ), this.onInitCallbacks.set(LQ, qQ);
-         const oQ = this.instances.get(LQ);
-         return oQ && QQ(oQ, LQ), () => {
-           qQ.delete(QQ)
-         }
-       }
-       invokeOnInitCallbacks(QQ, FQ) {
-         const wQ = this.onInitCallbacks.get(FQ);
-         if (wQ)
-           for (const qQ of wQ) try {
-             qQ(QQ, FQ)
-           } catch (LQ) {}
- ... (97 more removed lines; see GitHub link above)
+       _isMultiMaterial(kk) {
+         return void 0 !== kk.getSubMaterial
```

#### 76. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1171-L1176` → after: `L2490-L2554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2490-L2554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2490-L2554) · [Before (L1171-L1176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1171-L1176)

```diff
-       set logHandler(QQ) {
-         if ("function" !== typeof QQ) throw new TypeError("Value assigned to `logHandler` must be a function");
-         this._logHandler = QQ
-       }
-       get userLogHandler() {
-         return this._userLogHandler
+       refreshBoundingInfo() {
+         let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
+         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
+         if (kk || (kk = this._renderingMesh.getVerticesData(fk.e.PositionKind)), !kk) return this._boundingInfo = this._mesh.hq(), this;
+         const ek = this._renderingMesh.oik();
+         let ik;
+         if (0 === this.indexStart && this.indexCount === ek.length) {
+           const kk = this._renderingMesh.hq();
+           ik = {
+             minimum: kk.minimum.clone(),
+             maximum: kk.maximum.clone()
+           }
+         } else ik = (0, rk.d)(kk, ek, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
+         return this._boundingInfo ? this._boundingInfo.reConstruct(ik.minimum, ik.maximum) : this._boundingInfo = new bk.b(ik.minimum, ik.maximum), this
+       }
+       _checkCollision(kk) {
+ ... (49 more added lines; see GitHub link above)
```

#### 77. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1178-L1179` → after: `L2556-L2564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2556-L2564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2556-L2564) · [Before (L1178-L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1178-L1179)

```diff
-       set userLogHandler(QQ) {
-         this._userLogHandler = QQ
+       _intersectLines(kk, ek, ik, Dk, fk) {
+         let bk = null;
+         for (let rk = this.indexStart; rk < this.indexStart + this.indexCount; rk += 2) {
+           const Pk = ek[ik[rk]],
+             mk = ek[ik[rk + 1]],
+             Mk = kk.intersectionSegment(Pk, mk, Dk);
+           if (!(Mk < 0) && ((fk || !bk || Mk < bk.distance) && (bk = new Sk.c(null, null, Mk), bk.faceId = rk / 2, fk))) break
+         }
+         return bk
```

#### 78. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1181-L1183` → after: `L2566-L2574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2566-L2574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2566-L2574) · [Before (L1181-L1183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1181-L1183)

```diff
-       debug() {
-         for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
-         this._userLogHandler && this._userLogHandler(this, qQ.DEBUG, ...FQ), this._logHandler(this, qQ.DEBUG, ...FQ)
+       _intersectUnIndexedLines(kk, ek, ik, Dk, fk) {
+         let bk = null;
+         for (let rk = this.verticesStart; rk < this.verticesStart + this.verticesCount; rk += 2) {
+           const ik = ek[rk],
+             Pk = ek[rk + 1],
+             mk = kk.intersectionSegment(ik, Pk, Dk);
+           if (!(mk < 0) && ((fk || !bk || mk < bk.distance) && (bk = new Sk.c(null, null, mk), bk.faceId = rk / 2, fk))) break
+         }
+         return bk
```

#### 79. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1185-L1187` → after: `L2576-L2599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2576-L2599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2576-L2599) · [Before (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1185-L1187)

```diff
-       log() {
-         for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
-         this._userLogHandler && this._userLogHandler(this, qQ.VERBOSE, ...FQ), this._logHandler(this, qQ.VERBOSE, ...FQ)
+       _intersectTriangles(kk, ek, ik, Dk, fk, Sk, bk) {
+         let rk = null,
+           Pk = -1;
+         for (let mk = this.indexStart; mk < this.indexStart + this.indexCount - (3 - Dk); mk += Dk) {
+           Pk++;
+           const Dk = ik[mk],
+             Mk = ik[mk + 1],
+             Kk = ik[mk + 2];
+           if (fk && 4294967295 === Kk) {
+             mk += 2;
+             continue
+           }
+           const xk = ek[Dk],
+             nk = ek[Mk],
+             Uk = ek[Kk];
+           if (!xk || !nk || !Uk) continue;
+ ... (8 more added lines; see GitHub link above)
```

#### 80. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1189-L1191` → after: `L2601-L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2601-L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2601-L2614) · [Before (L1189-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1189-L1191)

```diff
-       info() {
-         for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
-         this._userLogHandler && this._userLogHandler(this, qQ.INFO, ...FQ), this._logHandler(this, qQ.INFO, ...FQ)
+       _intersectUnIndexedTriangles(kk, ek, ik, Dk, fk) {
+         let Sk = null;
+         for (let bk = this.verticesStart; bk < this.verticesStart + this.verticesCount; bk += 3) {
+           const ik = ek[bk],
+             rk = ek[bk + 1],
+             Pk = ek[bk + 2];
+           if (fk && !fk(ik, rk, Pk, kk, -1, -1, -1)) continue;
+           const mk = kk.intersectsTriangle(ik, rk, Pk);
+           if (mk) {
+             if (mk.distance < 0) continue;
+             if ((Dk || !Sk || mk.distance < Sk.distance) && (Sk = mk, Sk.faceId = bk / 3, Dk)) break
+           }
+         }
+         return Sk
```

#### 81. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1193-L1195` → after: `L2616-L2617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2616-L2617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2616-L2617) · [Before (L1193-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1193-L1195)

```diff
-       warn() {
-         for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
-         this._userLogHandler && this._userLogHandler(this, qQ.WARN, ...FQ), this._logHandler(this, qQ.WARN, ...FQ)
+       _rebuild() {
+         this._linesIndexBuffer && (this._linesIndexBuffer = null)
```

#### 82. `bundles/bloxd.io/chunks/js/258.js` (Changed code · before: `L1197-L1199` → after: `L2619-L2626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828dR2619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901...build/bloxd.io/3lwmg.ecbaa066#diff-a60cf9a03b0642a70d829f2c3e84e2f6a9e3a728e2737bfeb8f2e04299b4828d) · [After (L2619-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/3lwmg.ecbaa066/bundles/bloxd.io/chunks/js/258.js#L2619-L2626) · [Before (L1197-L1199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/f5215d4a4fb37ac4ea9c04f1f4dcca3405a0d901/bundles/bloxd.io/chunks/js/258.js#L1197-L1199)

```diff
-       error() {
-         for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
-         this._userLogHandler && this._userLogHandler(this, qQ.ERROR, ...FQ), this._logHandler(this, qQ.ERROR, ...FQ)
+       clone(kk, ek) {
+         const ik = new Mk(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, kk, ek, !1);
+         if (!this.IsGlobal) {
+           const kk = this.hq();
+           if (!kk) return ik;
+           ik._boundingInfo = new bk.b(kk.minimum, kk.maximum)
+         }
+         return ik
```
