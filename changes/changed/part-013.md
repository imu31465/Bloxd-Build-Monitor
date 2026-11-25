# Changed — Bundle Modifications Report (Part 013 / 056)

- **Updated at**: `2026-11-26T01:26 JST`
- **Part**: `13 / 56` (**282** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 012](part-012.md) · [Part 014 →](part-014.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/269.js` (8104he.3820eae0 → fo1voe.f743fbcf · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/269.js` (30 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70)

#### 25. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L766-L818` → after: `L289-L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L289-L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/269.js#L289-L292) · [Before (L766-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/269.js#L766-L818)

```diff
-       _injectCustomCode(QQ, WQ) {
-         return (XQ, wQ) => {
-           WQ && (wQ = WQ(XQ, wQ)), this._uboDeclaration && (wQ = wQ.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (wQ = wQ.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && ( … [truncated]
-           const qQ = this._codeInjectionPoints?.[XQ];
-           if (!qQ) return wQ;
-           let FQ = null;
-           for (let WQ in qQ) {
-             let qQ = "";
-             for (const wQ of this._activePlugins) {
-               const sQ = this._material.shaderLanguage;
-               let PQ = wQ.getCustomCode(XQ, sQ)?.[WQ];
-               PQ && (wQ.resolveIncludes && (null === FQ && (FQ = {
-                 defines: [],
-                 indexParameters: QQ.indexParameters,
-                 isFragment: !1,
-                 shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
- ... (37 more removed lines; see GitHub link above)
+       _computeLength(MM) {
+         let rM = 0;
+         for (let iM = 1; iM < MM.length; iM++) rM += MM[iM].subtract(MM[iM - 1]).length();
+         return rM
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L976` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/269.js#L296) · [Before (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/269.js#L976)

```diff
-   40535: (QQ, WQ, XQ) => {
+   39705: (MM, rM, iM) => {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L978` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/269.js#L298) · [Before (L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/269.js#L978)

```diff
-       e: () => wQ
+       b: () => jM
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L981-L1703` → after: `L305-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L305-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/269.js#L305-L333) · [Before (L981-L1703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/269.js#L981-L1703)

```diff
-       constructor() {
-         this.previousWorldMatrices = {}, this.previousBones = {}
-       }
-       static AddUniforms(QQ) {
-         QQ.push("previousWorld", "previousViewProjection", "mPreviousBones")
-       }
-       static AddSamplers(QQ) {}
-       bindForSubMesh(QQ, WQ, XQ, wQ, qQ) {
-         if (WQ.prePassRenderer && WQ.prePassRenderer.enabled && WQ.prePassRenderer.currentRTisSceneRT && (-1 !== WQ.prePassRenderer.getIndex(2) || -1 !== WQ.prePassRenderer.getIndex(11))) {
-           this.previousWorldMatrices[XQ.uniqueId] || (this.previousWorldMatrices[XQ.uniqueId] = wQ.clone()), this.previousViewProjection || (this.previousViewProjection = WQ.getTransformMatrix().clone(), this.currentViewProjection = WQ.getTransformMatrix().clone());
-           const qQ = WQ.Uj();
-           this.currentViewProjection.updateFlag !== WQ.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = qQ.frameId, this.previousViewProjection.WH(this.currentViewProjection), this.currentViewProjection.WH(WQ.getTransformMatrix())) : this._lastUpdateFrameId !== qQ.fra … [truncated]
-         }
-       }
-     }
-   },
- ... (707 more removed lines; see GitHub link above)
+       static DeepCopy(MM, rM, iM, jM) {
+         let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const PM = function(MM) {
+           const rM = [];
+           do {
+             const iM = Object.getOwnPropertyNames(MM);
+             for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
+           } while (MM = Object.getPrototypeOf(MM));
+           return rM
+         }(MM);
+         for (const QM of PM) {
+           if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
+           if (QM.endsWith("Observable")) continue;
+           if (iM && -1 !== iM.indexOf(QM)) continue;
+           const PM = MM[QM],
+             zM = typeof PM;
+ ... (13 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L2693` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/269.js#L339) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/269.js#L2693)

```diff
-   40623: (QQ, WQ, XQ) => {
+   39711: (MM, rM, iM) => {
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/269.js` (Changed code · before: `L2698-L2728` → after: `L344-L393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-7ed2f02fa1db10a6babd9f250e90a26c890fd9b6768258b964a60fb4c0a6de70) · [After (L344-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/269.js#L344-L393) · [Before (L2698-L2728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/269.js#L2698-L2728)

```diff
-       constructor(QQ, WQ) {
-         this._webGL = {
-           load: QQ,
-           loaded: !1,
-           loadPromise: null
-         }, this._webGPU = {
-           load: WQ,
-           loaded: !1,
-           loadPromise: null
-         }
-       }
-       getLoadCallback(QQ) {
-         const WQ = 1 === QQ ? this._webGPU : this._webGL;
-         return WQ.loaded ? void 0 : async () => {
-           await this._loadAsync(WQ)
-         }
- ... (15 more removed lines; see GitHub link above)
+       static _CheckLimit(MM, rM) {
+         let iM = OM._LogLimitOutputs[MM];
+         return iM ? iM.current++ : (iM = {
+           limit: rM,
+           current: 1
+         }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
+       }
+       static _GenerateLimitMessage(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const iM = OM._LogLimitOutputs[MM];
+         if (!iM || !OM.MessageLimitReached) return;
+         const SM = this._Levels[rM];
+         iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
+       }
+       static _AddLogEntry(MM) {
+         OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
+ ... (34 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/270.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/270.js` (81 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L4-L11` → after: `L4-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L4-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L4-L21) · [Before (L4-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L4-L11)

```diff
-   40557: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       c: () => wQ
-     });
-     class wQ {
-       constructor(QQ, WQ, XQ) {
-         this.bu = QQ, this.bv = WQ, this.distance = XQ, this.faceId = 0, this.subMeshId = 0, this._internalSubMeshId = 0
-       }
+   39858: (MM, rM, iM) => {
+     var OM = {
+       "./cape_cow_cream.png": 28492,
+       "./cape_cow_normal.png": 28499,
+       "./cape_creator_level1.png": 28508,
+       "./cape_creator_level2.png": 28515,
+       "./cape_creator_level3.png": 28523,
+       "./cape_none.png": 28531,
+       "./cape_pig.png": 28533,
+       "./cape_sheep.png": 28538,
+       "./cape_super.png": 28544,
+       "./cape_super_inverted.png": 28553,
+       "./cape_youtuber.png": 28560
+     };
+ 
+     function SM(MM) {
+ ... (2 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L13-L139` → after: `L23-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L23-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L23-L27) · [Before (L13-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L13-L139)

```diff
-   },
-   40564: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => zQ
-     });
-     var wQ = XQ(37379),
-       qQ = XQ(37370),
-       TQ = XQ(37374);
-     class zQ {
-       constructor(QQ, WQ, XQ) {
-         this.vectors = (0, wQ.c)(8, qQ.s.Zero), this.center = qQ.s.Zero(), this.centerWorld = qQ.s.Zero(), this.extendSize = qQ.s.Zero(), this.extendSizeWorld = qQ.s.Zero(), this.directions = (0, wQ.c)(3, qQ.s.Zero), this.vectorsWorld = (0, wQ.c)(8, qQ.s.Zero), this.minimumWorld  … [truncated]
-       }
-       reConstruct(QQ, WQ, XQ) {
-         const wQ = QQ.x,
-           TQ = QQ.y,
-           zQ = QQ.z,
- ... (111 more removed lines; see GitHub link above)
+ 
+     function jM(MM) {
+       if (!iM.o(OM, MM)) {
+         var rM = new Error("Cannot find module '" + MM + "'");
+         throw rM.code = "MODULE_NOT_FOUND", rM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L142` → after: `L31-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L31-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L31-L33) · [Before (L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L142)

```diff
-     zQ._TmpVector3 = (0, wQ.c)(3, qQ.s.Zero)
+     SM.keys = function() {
+       return Object.keys(OM)
+     }, SM.resolve = jM, MM.exports = SM, SM.id = 39858
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L144-L208` → after: `L35-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L35-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L35-L37) · [Before (L144-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L144-L208)

```diff
-   40561: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => JQ
-     });
-     var wQ = XQ(37379),
-       qQ = XQ(37370),
-       TQ = XQ(40564);
-     class zQ {
-       constructor(QQ, WQ, XQ) {
-         this.center = qQ.s.Zero(), this.centerWorld = qQ.s.Zero(), this.minimum = qQ.s.Zero(), this.maximum = qQ.s.Zero(), this.reConstruct(QQ, WQ, XQ)
-       }
-       reConstruct(QQ, WQ, XQ) {
-         this.minimum.WH(QQ), this.maximum.WH(WQ);
-         const wQ = qQ.s.Distance(QQ, WQ);
-         WQ.addToRef(QQ, this.center).scaleInPlace(.5), this.radius = .5 * wQ, this._update(XQ || qQ.e.IdentityReadOnly)
-       }
- ... (49 more removed lines; see GitHub link above)
+   40219: (MM, rM, iM) => {
+     function OM(MM) {
+       return void 0 === MM ? void 0 : [MM[0], MM[1], MM[2]]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L210-L291` → after: `L39-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L39-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L39-L59) · [Before (L210-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L210-L291)

```diff
-     zQ._TmpVector3 = (0, wQ.c)(3, qQ.s.Zero);
-     const sQ = {
-         min: 0,
-         max: 0
-       },
-       FQ = {
-         min: 0,
-         max: 0
-       },
-       PQ = (QQ, WQ, XQ) => {
-         const wQ = qQ.s.Dot(WQ.centerWorld, QQ),
-           TQ = Math.abs(qQ.s.Dot(WQ.directions[0], QQ)) * WQ.extendSize.x + Math.abs(qQ.s.Dot(WQ.directions[1], QQ)) * WQ.extendSize.y + Math.abs(qQ.s.Dot(WQ.directions[2], QQ)) * WQ.extendSize.z;
-         XQ.min = wQ - TQ, XQ.max = wQ + TQ
-       },
-       gQ = (QQ, WQ, XQ) => (PQ(QQ, WQ, sQ), PQ(QQ, XQ, FQ), !(sQ.min > FQ.max || FQ.min > sQ.max));
-     class JQ {
- ... (66 more removed lines; see GitHub link above)
+ 
+     function SM(MM) {
+       const rM = MM.particles;
+       return {
+         opts: {
+           texture: rM.texture,
+           vL: rM.vL,
+           minLifeTime: rM.minLifeTime,
+           maxLifeTime: rM.maxLifeTime,
+           minSize: rM.minSize,
+           maxSize: rM.maxSize,
+           minEmitPower: rM.minEmitPower,
+           maxEmitPower: rM.maxEmitPower,
+           emitRate: rM.emitRate,
+           gravity: OM(rM.gravity),
+           dir1: OM(rM.dir1),
+ ... (5 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L294` → after: `L62-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L62-L64) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L294)

```diff
-     JQ._TmpVector3 = (0, wQ.c)(2, qQ.s.Zero)
+     iM.d(rM, {
+       b: () => SM
+     })
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L296` → after: `L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L66) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L296)

```diff
-   40589: (QQ, WQ, XQ) => {
+   40186: (MM, rM, iM) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L300-L301` → after: `L69-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L69-L71) · [Before (L300-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L300-L301)

```diff
-       e: () => sQ,
-       g: () => zQ
+       h: () => QM,
+       k: () => nM,
+       m: () => aM
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L303-L304` → after: `L73-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L73-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L73-L78) · [Before (L303-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L303-L304)

```diff
-     var wQ = XQ(40414),
-       qQ = XQ(37370);
+     var OM = iM(187);
+     const SM = JSON.parse('{"aura_snowfall":{"offset":[0,2.6,0],"ownInFirstPerson":true,"particles":{"blendMode":1,"capacity":64,"colorGradients":[{"minColor":[255,255,255,0.9],"timeFraction":0},{"minColor":[255,255,255,0],"timeFraction":1}],"depth":3,"dir1":[-0.2,-1,-0.2],"dir2" … [truncated]
+       jM = "PetRoot";
+     let aM = JSON.parse('{"pet_reindeer":{"bobAmplitude":0.08,"bobHz":0.8,"clips":{"fly":"animation.cosmetic.pet_reindeer_fly","land":"animation.cosmetic.pet_reindeer_fly","perch":"animation.cosmetic.pet_reindeer_sit","takeOff":"animation.cosmetic.pet_reindeer_fly"},"followOffset … [truncated]
+       PM = SM;
+     new Map, new Map;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L307-L333` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L81-L82) · [Before (L307-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L307-L333)

```diff
-       -1 === QQ.indexOf("vClipPlane") && QQ.push("vClipPlane"), -1 === QQ.indexOf("vClipPlane2") && QQ.push("vClipPlane2"), -1 === QQ.indexOf("vClipPlane3") && QQ.push("vClipPlane3"), -1 === QQ.indexOf("vClipPlane4") && QQ.push("vClipPlane4"), -1 === QQ.indexOf("vClipPlane5") &&  … [truncated]
-     }
- 
-     function zQ(QQ, WQ, XQ) {
-       const wQ = !!(QQ.clipPlane ?? WQ.clipPlane),
-         qQ = !!(QQ.clipPlane2 ?? WQ.clipPlane2),
-         TQ = !!(QQ.clipPlane3 ?? WQ.clipPlane3),
-         zQ = !!(QQ.clipPlane4 ?? WQ.clipPlane4),
-         sQ = !!(QQ.clipPlane5 ?? WQ.clipPlane5),
-         FQ = !!(QQ.clipPlane6 ?? WQ.clipPlane6);
-       wQ && XQ.push("#define CLIPPLANE"), qQ && XQ.push("#define CLIPPLANE2"), TQ && XQ.push("#define CLIPPLANE3"), zQ && XQ.push("#define CLIPPLANE4"), sQ && XQ.push("#define CLIPPLANE5"), FQ && XQ.push("#define CLIPPLANE6")
-     }
- 
-     function sQ(QQ, WQ, XQ) {
-       let wQ = !1;
-       const qQ = !!(QQ.clipPlane ?? WQ.clipPlane),
- ... (11 more removed lines; see GitHub link above)
+       var rM;
+       return null !== (rM = (0, OM.d)(aM, MM)) && void 0 !== rM ? rM : null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L336-L340` → after: `L85-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L85-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L85-L87) · [Before (L336-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L336-L340)

```diff
-     function PQ(QQ, WQ, XQ) {
-       if (XQ) {
-         const TQ = wQ.e.sE()?.floatingOriginOffset || qQ.s.ZeroReadOnly;
-         QQ.setFloat4(WQ, XQ.normal.x, XQ.normal.y, XQ.normal.z, XQ.d + qQ.s.Dot(XQ.normal, TQ))
-       }
+     function QM(MM) {
+       var rM;
+       return null !== (rM = (0, OM.d)(PM, MM)) && void 0 !== rM ? rM : null
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L343` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L90) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L343)

```diff
-   40602: (QQ, WQ, XQ) => {
+   40222: (MM, rM, iM) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L345` → after: `L92-L94`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R92) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L92-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L92-L94) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L345)

```diff
-       e: () => wQ
+       c: () => OM,
+       g: () => SM,
+       j: () => jM
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L349-L358` → after: `L98-L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L98-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L98-L137) · [Before (L349-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L349-L358)

```diff
-         this._defines = {}, this._currentRank = 32, this._maxRank = -1, this._mesh = null
-       }
-       unBindMesh() {
-         this._mesh = null
-       }
-       addFallback(QQ, WQ) {
-         this._defines[QQ] || (QQ < this._currentRank && (this._currentRank = QQ), QQ > this._maxRank && (this._maxRank = QQ), this._defines[QQ] = new Array), this._defines[QQ].push(WQ)
-       }
-       addCPUSkinningFallback(QQ, WQ) {
-         this._mesh = WQ, QQ < this._currentRank && (this._currentRank = QQ), QQ > this._maxRank && (this._maxRank = QQ)
+         this.pose = {
+           pos: [0, 0, 0],
+           yaw: 0,
+           mode: "flying",
+           seated: !1,
+           clip: void 0
+         }, this.dd = [0, 0, 0], this.lastFeet = [0, 0, 0], this.target = [0, 0, 0], this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0
+       }
+       step(MM) {
+         var rM;
+         const {
+           feet: iM,
+           heading: OM,
+           tuning: aM
+         } = MM, PM = Math.min(Math.max(MM.dt, 0), .1), {
+           pose: nM,
+ ... (24 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L360-L361` → after: `L139-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L139-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L139-L140) · [Before (L360-L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L360-L361)

```diff
-       get hasMoreFallbacks() {
-         return this._currentRank <= this._maxRank
+       reset() {
+         this.started = !1, this.speed = 0, this.stillS = 0, this.perchLocked = !1, this.sinceTakeOffS = 1 / 0, this.pose.mode = "flying", this.pose.seated = !1
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L363-L387` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L142-L143) · [Before (L363-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L363-L387)

```diff
-       reduce(QQ, WQ) {
-         if (this._mesh && this._mesh.computeBonesUsingShaders && this._mesh.numBoneInfluencers > 0) {
-           this._mesh.computeBonesUsingShaders = !1, QQ = QQ.replace("#define NUM_BONE_INFLUENCERS " + this._mesh.numBoneInfluencers, "#define NUM_BONE_INFLUENCERS 0"), WQ._bonesComputationForcedToCPU = !0;
-           const XQ = this._mesh.sE();
-           for (let QQ = 0; QQ < XQ.meshes.length; QQ++) {
-             const wQ = XQ.meshes[QQ];
-             if (wQ.material) {
-               if (wQ.computeBonesUsingShaders && 0 !== wQ.numBoneInfluencers)
-                 if (wQ.material.getEffect() === WQ) wQ.computeBonesUsingShaders = !1;
-                 else if (wQ.ZD)
-                 for (const QQ of wQ.ZD) {
-                   if (QQ.effect === WQ) {
-                     wQ.computeBonesUsingShaders = !1;
-                     break
-                   }
-                 }
- ... (9 more removed lines; see GitHub link above)
+       HS(MM) {
+         return "perched" === MM ? this.perchLocked ? "perch" : "land" : this.sinceTakeOffS < .4 ? "takeOff" : "fly"
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L391` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L156) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L391)

```diff
-   40551: (QQ, WQ, XQ) => {
+   40192: (MM, rM, iM) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L393` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L158) · [Before (L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L393)

```diff
-       b: () => DQ
+       c: () => jM
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L395-L633` → after: `L160-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L160-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L160-L163) · [Before (L395-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L395-L633)

```diff
-     var wQ = XQ(40260),
-       qQ = XQ(40268),
-       TQ = XQ(40357),
-       zQ = XQ(37399),
-       sQ = XQ(37392),
-       FQ = XQ(40555),
-       PQ = XQ(40400),
-       gQ = XQ(38956),
-       JQ = XQ(38047),
-       rQ = XQ(40578),
-       IQ = XQ(40286);
-     let jQ = (() => {
-       var QQ;
-       let WQ, XQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, jQ, BQ, yQ = [];
-       return QQ = class {
-         constructor() {
- ... (223 more removed lines; see GitHub link above)
+     var OM = iM(38034),
+       SM = iM(38839);
+ 
+     function jM(MM, rM) {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L635-L1714` → after: `L165-L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L165-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L165-L168) · [Before (L635-L1714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L635-L1714)

```diff
-       let WQ, XQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ, SQ, tQ, oQ, eQ, nQ, xQ = [],
-         YQ = [],
-         NQ = [],
-         ZQ = [],
-         OQ = [],
-         KQ = [],
-         mQ = [],
-         MQ = [],
-         QW = [],
-         WW = [],
-         XW = [],
-         wW = [],
-         qW = [],
-         TW = [],
-         zW = [],
-         sW = [],
- ... (1064 more removed lines; see GitHub link above)
+       MM.blendMode = rM.blendMode, MM.minLifeTime = rM.minLifeTime, MM.maxLifeTime = rM.maxLifeTime, MM.minSize = rM.minSize, MM.maxSize = rM.maxSize, MM.minEmitPower = rM.minEmitPower, MM.maxEmitPower = rM.maxEmitPower;
+       const jM = null !== (iM = rM.gravity) && void 0 !== iM ? iM : [0, 0, 0];
+       MM.gravity = new OM.sh(jM[0], jM[1], jM[2]);
+       for (const OM of rM.colorGradients) MM.addColorGradient(OM.timeFraction, (0, SM.i)(OM.minColor), OM.maxColor ? (0, SM.i)(OM.maxColor) : void 0)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1718` → after: `L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L171) · [Before (L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1718)

```diff
-   40584: (QQ, WQ, XQ) => {
+   39774: (MM, rM, iM) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1720-L1733` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L173) · [Before (L1720-L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1720-L1733)

```diff
-       $: () => EQ,
-       A: () => BQ,
-       C: () => yQ,
-       E: () => GQ,
-       G: () => iQ,
-       J: () => UQ,
-       N: () => lQ,
-       R: () => hQ,
-       S: () => IQ,
-       W: () => rQ,
-       X: () => tQ,
-       _: () => uQ,
-       ab: () => RQ,
-       db: () => pQ,
+       c: () => EM,
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1735-L1748` → after: `L175-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L175-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L175-L178) · [Before (L1735-L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1735-L1748)

```diff
-       fb: () => cQ,
-       hb: () => oQ,
-       i: () => bQ,
-       jb: () => eQ,
-       l: () => JQ,
-       mb: () => nQ,
-       nb: () => ZQ,
-       p: () => VQ,
-       r: () => DQ,
-       rb: () => YQ,
-       t: () => aQ,
-       tb: () => NQ,
-       w: () => FQ,
-       xb: () => jQ
+       h: () => GM,
+       k: () => bM,
+       o: () => wM,
+       r: () => lM
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1750-L1754` → after: `L180-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L180-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L180-L197) · [Before (L1750-L1754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1750-L1754)

```diff
-     var wQ = XQ(38956),
-       qQ = XQ(37392),
-       TQ = XQ(40470),
-       zQ = XQ(40589),
-       sQ = XQ(40591);
+     var OM = iM(313),
+       SM = iM(39794),
+       jM = iM(3076),
+       aM = iM(3085),
+       PM = iM(39781),
+       nM = iM(39788),
+       QM = iM(19),
+       zM = iM(94),
+       LM = iM(3230),
+       mM = iM(83),
+       HM = iM(114),
+       hM = iM(30),
+       JM = iM(2562),
+       dM = iM(106);
+     const yM = {
+       no_adapter: "start_no_adapter",
+ ... (2 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1756-L1759` → after: `L199-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L199-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L199-L250) · [Before (L1756-L1759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1756-L1759)

```diff
-     function FQ(QQ, WQ, XQ) {
-       if (!QQ || QQ.LOGARITHMICDEPTH || QQ.indexOf && QQ.indexOf("LOGARITHMICDEPTH") >= 0) {
-         const QQ = XQ.activeCamera;
-         1 === QQ.mode && wQ.b.Error("Logarithmic depth is not compatible with orthographic cameras!", 20), WQ.setFloat("logarithmicDepthConstant", 2 / (Math.log(QQ.maxZ + 1) / Math.LN2))
+     function lM(MM) {
+       var rM;
+       const iM = null !== (rM = zM.currentUrl.getSearchParam(MM)) && void 0 !== rM ? rM : hM.g.getItem(MM);
+       return null === iM || void 0 === iM || "" === iM ? null : "0" !== iM && "false" !== iM && !1 !== iM && 0 !== iM
+     }
+     async function EM(MM, rM) {
+       (0, jM.D)(null);
+       const iM = (0, aM.n)((0, aM.k)(rM.useWebGpu, !0));
+       (0, mM.setWebGpuRequested)("lite" === iM.requested && (0, mM.getWebGpuSupported)());
+       const PM = (0, aM.f)(iM.source);
+       null !== PM && console.info(`Renderer: ${iM.requested} from ${PM}`), null !== iM.fallbackReason && console.warn(`Renderer: ${iM.fallbackReason}`);
+       let zM = iM.fallbackReason;
+       if ("webgl2" !== iM.choice) {
+         const PM = await async function(MM, rM, iM, aM) {
+           const PM = await (0, mM.probeWebGpuAdapter)();
+           if ("usable" !== PM) return (0, mM.setWebGpuFallbackReason)(PM), console.info("No usable WebGPU adapter, rendering with WebGL."), "no usable WebGPU adapter";
+ ... (36 more added lines; see GitHub link above)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1776-L1778` → after: `L254-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L254-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L254-L265) · [Before (L1776-L1778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1776-L1778)

```diff
-     function JQ(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       XQ && QQ.fogEnabled && (!WQ || WQ.applyFog) && 0 !== QQ.fogMode && (XQ.setFloat4("vFogInfos", QQ.fogMode, QQ.fogStart, QQ.fogEnd, QQ.fogDensity), wQ ? (QQ.fogColor.toLinearSpaceToRef(PQ, QQ.Uj().useExactSrgbConversions), XQ.setColor3("vFogColor", PQ)) : XQ.setColor3("vFogCo … [truncated]
+     function UM() {
+       return Promise.all([iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(289), iM.e(302), iM.e(288), iM.e(282), iM.e(283), iM.e(268), iM.e(0)]).then((() => iM(44202)))
+     }
+     async function GM() {
+       return (await UM()).createSceneParticleSystem
+     }
+     async function CM() {
+       Promise.all([iM.e(279), iM.e(612)]).then((() => iM(44294))).then((MM => {
+         MM.installImageBitmapTextureLoader()
+       })).catch((() => {}));
+       const [MM, rM] = await Promise.all([UM(), Promise.all([iM.e(279), iM.e(280), iM.e(277), iM.e(287), iM.e(281), iM.e(286), iM.e(284), iM.e(276), iM.e(289), iM.e(302), iM.e(288), iM.e(282), iM.e(283), iM.e(268), iM.e(0)]).then((() => iM(44304))), Promise.all([iM.e(279), iM.e(2 … [truncated]
+       return (0, PM.h)(rM.SkyMaterial), MM.default
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1781-L1783` → after: `L268-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L268-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L268-L269) · [Before (L1781-L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1781-L1783)

```diff
-     function rQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
-       const JQ = QQ.numMaxInfluencers || QQ.numInfluencers;
-       return JQ <= 0 ? 0 : (WQ.push("#define MORPHTARGETS"), QQ.hasPositions && WQ.push("#define MORPHTARGETTEXTURE_HASPOSITIONS"), QQ.hasNormals && WQ.push("#define MORPHTARGETTEXTURE_HASNORMALS"), QQ.hasTangents && WQ.push("#define MORPHTARGETTEXTURE_HASTANGENTS"), QQ.hasUVs && … [truncated]
+     function eM(MM) {
+       return "lite" === (0, aM.n)((0, aM.k)(MM, !1)).choice && (0, mM.getWebGpuSupported)() && !hM.g.getItem(dM.v)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1786-L1800` → after: `L272-L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L272-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L272-L275) · [Before (L1786-L1800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1786-L1800)

```diff
-     function IQ(QQ, WQ, XQ) {
-       let TQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-       const zQ = XQ.NUM_MORPH_INFLUENCERS;
-       if (zQ > 0 && qQ.d.LastCreatedEngine) {
-         const sQ = qQ.d.LastCreatedEngine.getCaps().maxVertexAttribs,
-           FQ = WQ.morphTargetManager;
-         if (FQ?.isUsingTextureForTargets) return;
-         const PQ = FQ && FQ.supportsPositions && TQ,
-           gQ = FQ && FQ.supportsNormals && XQ.NORMAL,
-           JQ = FQ && FQ.supportsTangents && XQ.TANGENT,
-           rQ = FQ && FQ.supportsUVs && XQ.UV1,
-           IQ = FQ && FQ.supportsUV2s && XQ.UV2,
-           jQ = FQ && FQ.supportsColors && XQ.VERTEXCOLOR;
-         for (let XQ = 0; XQ < zQ; XQ++) PQ && QQ.push("position" + XQ), gQ && QQ.push("normal" + XQ), JQ && QQ.push("tangent" + XQ), rQ && QQ.push("uv_" + XQ), IQ && QQ.push("uv2_" + XQ), jQ && QQ.push("color" + XQ), QQ.length > sQ && wQ.b.Error("Cannot add more vertex attributes … [truncated]
-       }
+     function bM(MM) {
+       eM(MM) || CM().catch((MM => {
+         console.warn("Failed to prefetch noa's Babylon backend.", MM)
+       }))
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1804-L1805` → after: `L279-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L279-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L279-L283) · [Before (L1804-L1805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1804-L1805)

```diff
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       QQ.push("world0"), QQ.push("world1"), QQ.push("world2"), QQ.push("world3"), WQ && (QQ.push("previousWorld0"), QQ.push("previousWorld1"), QQ.push("previousWorld2"), QQ.push("previousWorld3"))
+       (0, JM.f)((() => {
+         eM(MM) ? (0, jM.s)().load().catch((MM => {
+           console.warn("Failed to prefetch the Lite renderer.", MM)
+         })) : bM(MM)
+       }))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1808-L1810` → after: `L295-L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L295-L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L295-L297) · [Before (L1808-L1810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1808-L1810)

```diff
-     function BQ(QQ, WQ) {
-       const XQ = QQ.morphTargetManager;
-       QQ && XQ && WQ.setFloatArray("morphTargetInfluences", XQ.influences)
+     function aM(MM) {
+       var rM;
+       return null !== (rM = MM.parentElement) && void 0 !== rM ? rM : MM
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1814` → after: `L301-L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R301) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L301-L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L301-L304) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1814)

```diff
-       WQ.bindToEffect(QQ, "Scene")
+       if (MM.clientWidth <= 0 || MM.clientHeight <= 0 || SM.c.isHeld()) return null;
+       const iM = (0, jM.o)(),
+         [aM, PM] = rM.size(iM);
+       return (0, jM.t)(aM, PM, iM, OM.d.get("clientEscMenuOptions").pixelScale)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1816-L1843` → after: `L306-L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L306-L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L306-L332) · [Before (L1816-L1843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1816-L1843)

```diff
- 
-     function VQ(QQ, WQ, XQ, wQ) {
-       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         FQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         PQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         gQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9],
-         JQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
-         rQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0;
-       if (QQ.texturesEnabled && qQ && sQ.e.ReflectionTextureEnabled) {
-         if (XQ.N_("reflectionMatrix", qQ.getReflectionTextureMatrix()), XQ.updateFloat2("vReflectionInfos", qQ.level * QQ.iblIntensity, rQ), FQ && qQ.boundingBoxSize) {
-           const QQ = qQ;
-           XQ.updateVector3("vReflectionPosition", QQ.boundingBoxPosition), XQ.updateVector3("vReflectionSize", QQ.boundingBoxSize)
-         }
-         if (TQ) {
- ... (12 more removed lines; see GitHub link above)
+   },
+   42285: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       openCharacterPreview: () => Qr
+     });
+     var OM = iM(39083),
+       SM = iM(3063),
+       jM = iM(605),
+       aM = iM(38111),
+       PM = iM(2367),
+       nM = iM(38097),
+       QM = iM(40931),
+       zM = iM(41190),
+       LM = iM(42190),
+       mM = iM(38034),
+       HM = iM(41358),
+ ... (11 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1845-L1854` → after: `L334-L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L334-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L334-L335) · [Before (L1845-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1845-L1854)

```diff
-       JQ && XQ.updateColor3("vReflectionColor", wQ)
-     }
- 
-     function DQ(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-       if (wQ && sQ.e.ReflectionTextureEnabled) {
-         WQ.LODBASEDMICROSFURACE ? XQ.setTexture("reflectionSampler", wQ) : (XQ.setTexture("reflectionSampler", wQ._lodTextureMid || wQ), XQ.setTexture("reflectionSamplerLow", wQ._lodTextureLow || wQ), XQ.setTexture("reflectionSamplerHigh", wQ._lodTextureHigh || wQ)), WQ.USEIRRADI … [truncated]
-         const TQ = QQ.iblCdfGenerator;
-         qQ && TQ && XQ.setTexture("icdfSampler", TQ.getIcdfTexture())
+       write(MM) {
+         this.pose.pose(MM), (0, GM.q)(this.pose, this.nodes)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1858-L1859` → after: `L339-L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L339-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L339-L341) · [Before (L1858-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1858-L1859)

```diff
-     function pQ(QQ, WQ, XQ) {
-       WQ._needUVs = !0, WQ[XQ] = !0, QQ.optimizeUVAllocation && QQ.getTextureMatrix().isIdentityAs3x2() ? (WQ[XQ + "DIRECTUV"] = QQ.coordinatesIndex + 1, WQ["MAINUV" + (QQ.coordinatesIndex + 1)] = !0) : WQ[XQ + "DIRECTUV"] = 0
+     function eM(MM) {
+       MM.unfreezeWorldMatrix();
+       for (const rM of MM.getChildren()) eM(rM)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1861-L1864` → after: `L343-L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L343-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L343-L358) · [Before (L1861-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1861-L1864)

```diff
- 
-     function GQ(QQ, WQ, XQ) {
-       const wQ = QQ.getTextureMatrix();
-       WQ.N_(XQ + "Matrix", wQ)
+     async function bM(MM, rM, iM, OM) {
+       let {
+         keepTransforms: SM,
+         backFaceCulling: jM
+       } = OM;
+       const aM = await (0, UM.i)(rM, MM),
+         PM = (0, UM.b)(null !== iM && void 0 !== iM ? iM : rM, MM, void 0, jM);
+       (0, UM.k)(aM, PM, {
+         keepTransforms: SM,
+         backFaceCulling: jM,
+         onProcessedMesh: rM => {
+           MM.JOM(rM, !1), rM.isVisible = !1
+         }
+       });
+       for (const nM of aM.rootNodes) eM(nM);
+       return aM
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1867-L1868` → after: `L361-L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L361-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L361-L363) · [Before (L1867-L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1867-L1868)

```diff
-     function UQ(QQ, WQ, XQ) {
-       XQ.BAKED_VERTEX_ANIMATION_TEXTURE && XQ.INSTANCES && QQ.push("bakedVertexAnimationSettingsInstanced")
+     function wM(MM, rM) {
+       MM.isVisible = rM;
+       for (const iM of MM.getChildMeshes()) iM.isVisible = rM
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1870-L1880` → after: `L365-L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L365-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L365-L468) · [Before (L1870-L1880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1870-L1880)

```diff
- 
-     function bQ(QQ, WQ, XQ) {
-       var wQ;
-       if (WQ && QQ && (QQ.computeBonesUsingShaders && WQ._bonesComputationForcedToCPU && (QQ.computeBonesUsingShaders = !1), QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton)) {
-         const qQ = QQ.skeleton;
-         if (qQ.isUsingTextureForMatrices && WQ.getUniformIndex("boneTextureInfo") > -1) {
-           const XQ = qQ.getTransformMatrixTexture(QQ);
-           WQ.setTexture("boneSampler", XQ), WQ.setFloat2("boneTextureInfo", qQ._textureWidth, qQ._textureHeight)
-         } else {
-           const TQ = qQ.getTransformMatrices(QQ);
-           TQ && (WQ.setMatrices("mBones", TQ), XQ && QQ.sE().prePassRenderer && QQ.sE().prePassRenderer.getIndex(2) && (XQ.previousBones[QQ.uniqueId] || (XQ.previousBones[QQ.uniqueId] = TQ.slice()), WQ.setMatrices("mPreviousBones", XQ.previousBones[QQ.uniqueId]), wQ = TQ, XQ.prev … [truncated]
+     class tM {
+       constructor(MM, rM, iM) {
+         this.YJ = MM, this.thinInstMgr = rM, this.Zk = iM, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
+       }
+       loadModel(MM, rM, iM) {
+         const OM = (0, UM.f)(MM, rM);
+         return OM in this.modelCache || (this.modelCache[OM] = (async () => {
+           try {
+             const OM = await bM(this.YJ, MM, rM, {
+                 keepTransforms: void 0 !== iM,
+                 backFaceCulling: !1
+               }),
+               SM = new Map;
+             for (const MM of OM.getNodes()) SM.set(MM.name, MM);
+             const jM = void 0 === iM ? null : (0, GM.m)(iM, (MM => {
+               const rM = SM.get(MM);
+ ... (88 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1885-L1887` → after: `L474-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L474-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L474-L476) · [Before (L1885-L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1885-L1887)

```diff
-     function vQ(QQ, WQ, XQ, wQ, qQ) {
-       let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-       QQ._bindLight(WQ, XQ, wQ, qQ, TQ)
+     function fM(MM) {
+       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+       return new mM.sh(MM[0] * rM, MM[1] * rM, MM[2] * rM)
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1889-L1896` → after: `L478-L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L478-L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L478-L579) · [Before (L1889-L1896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1889-L1896)

```diff
-     const dQ = 4,
-       HQ = new WeakMap;
- 
-     function aQ(QQ, WQ, XQ, wQ) {
-       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4;
-       const TQ = Math.min(WQ.lightSources.length, qQ);
-       for (let zQ = 0; zQ < TQ; zQ++) {
-         vQ(WQ.lightSources[zQ], zQ, QQ, XQ, "boolean" === typeof wQ ? wQ : wQ.SPECULARTERM, WQ.receiveShadows)
+     class YM {
+       constructor(MM, rM) {
+         this.YJ = MM, this.scale = rM, this.petNodes = new Map, this.particleTextures = new Map, this.petName = "pet_none", this.shownPet = null, this.petIsolated = !1, this.auraSeq = 0, this.aura = null, this.auraName = "aura_none", this.auraTuning = null, this.auraDrawn = Promi … [truncated]
+       }
+       async setPet(MM) {
+         var rM;
+         this.petName = MM, null === (rM = this.shownPet) || void 0 === rM || rM.node.kR(!1), this.shownPet = null;
+         const iM = (0, pM.k)(MM);
+         if (!iM) return;
+         let OM;
+         try {
+           OM = await this.petNode(iM.model)
+         } catch {
+           return
+         }
+         this.petName === MM && (OM.node.kR(!0), this.shownPet = OM)
+ ... (86 more added lines; see GitHub link above)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1899-L1901` → after: `L582-L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L582-L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L582-L592) · [Before (L1899-L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1899-L1901)

```diff
- 
-     function lQ(QQ, WQ, XQ, wQ) {
-       XQ.NUM_BONE_INFLUENCERS > 0 && (wQ.addCPUSkinningFallback(0, WQ), QQ.push("matricesIndices"), QQ.push("matricesWeights"), XQ.NUM_BONE_INFLUENCERS > 4 && (QQ.push("matricesIndicesExtra"), QQ.push("matricesWeightsExtra")))
+     var NM = iM(38122),
+       AM = (iM(42220), iM(41564), iM(42227), iM(35055)),
+       xM = iM(42291);
+     let vM, FM, BM, XM, IM, KM, qM, TM, VM, cM, Mr;
+     const rr = document.createElement("canvas");
+     async function ir() {
+       await new Promise((MM => {
+         setTimeout((() => {
+           MM()
+         }), 100)
+       }))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1905` → after: `L598-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L598-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L598-L609) · [Before (L1905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1905)

```diff
-       (WQ.INSTANCES || WQ.THIN_INSTANCES) && jQ(QQ, !!WQ.PREPASS_VELOCITY), WQ.INSTANCESCOLOR && QQ.push("instanceColor")
+       if (!XM) return;
+       const aM = (0, SM.f)();
+       if (aM.OW(!1), OM.b.Player.meshApi.updatePlayerCosmetic(aM.eD, qM, MM, rM, !0), "cape" === MM)
+         if (rM === jM.g) IM.kR(!1);
+         else {
+           IM.kR(!0);
+           IM.material.diffuseTexture = new dM.c(iM(39858)(`./cape_${rM}.png`), IM.Hk(), {
+             invertY: !1,
+             samplingMode: dM.c.NEAREST_NEAREST_MIPLINEAR
+           })
+         }
+       "pet" === MM ? Or.pet = cM.setPet(rM) : "aura" === MM ? Or.aura = cM.setAura(rM) : Or[MM] = VM.update(MM, rM)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1909-L1913` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L613-L614) · [Before (L1909-L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1909-L1913)

```diff
-       let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
-         wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         qQ = 0;
-       for (let TQ = 0; TQ < XQ && QQ["LIGHT" + TQ]; TQ++) TQ > 0 && (qQ = wQ + TQ, WQ.addFallback(qQ, "LIGHT" + TQ)), QQ.SHADOWS || (QQ["SHADOW" + TQ] && WQ.addFallback(wQ, "SHADOW" + TQ), QQ["SHADOWPCF" + TQ] && WQ.addFallback(wQ, "SHADOWPCF" + TQ), QQ["SHADOWPCSS" + TQ] && WQ.a … [truncated]
-       return qQ
+       const [iM, OM] = (0, xM.d)(MM, rM, window.devicePixelRatio);
+       vM.setSize(Math.max(iM, Math.floor(MM)), Math.max(OM, Math.floor(rM)))
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1915-L1927` → after: `L616-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L616-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L616-L673) · [Before (L1915-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1915-L1927)

```diff
- 
-     function cQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
-       let sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         PQ = arguments.length > 9 ? arguments[9] : void 0,
-         gQ = arguments.length > 10 ? arguments[10] : void 0;
-       if (zQ._areMiscDirty) {
-         zQ.LOGARITHMICDEPTH = XQ, zQ.POINTSIZE = wQ, zQ.FOG = qQ && function(QQ, WQ) {
-           return WQ.fogEnabled && QQ.applyFog && 0 !== WQ.fogMode
-         }(QQ, WQ), zQ.NONUNIFORMSCALING = QQ.nonUniformScaling, zQ.ALPHATEST = TQ, zQ.DECAL_AFTER_DETAIL = sQ, zQ.USE_VERTEX_PULLING = FQ, zQ.RIGHT_HANDED = WQ.useRightHandedSystem;
-         const JQ = FQ ? PQ?.geometry?.getIndexBuffer() : null,
-           rQ = !!PQ && PQ.isUnIndexed;
-         zQ.VERTEX_PULLING_USE_INDEX_BUFFER = !!JQ && !rQ, zQ.VERTEX_PULLING_INDEX_BUFFER_32BITS = !(!JQ || rQ) && JQ.is32Bits, zQ.VERTEXOUTPUT_INVARIANT = !!gQ
+     let ar = 0;
+     class Pr {
+       constructor(MM, rM) {
+         this.framing = rM, this.ready = Mr, this.dev = {
+           canvas: () => rr,
+           isolateHead(MM) {
+             const rM = KM.getNodeNames(qM);
+             for (let iM = 0; iM < rM.length; iM++) "HeadMesh" !== rM[iM] && "__root__" !== rM[iM] && "TorsoNode" !== rM[iM] && KM.setNodeEnabled(qM, iM, !1);
+             if (MM) {
+               const MM = KM.getNamedNode(qM, "HeadMesh");
+               KM.setNodeDisableColorWrite(qM, MM, !0, (MM => {
+                 const rM = new JM.StandardMaterial(`${MM.name}_depthOnly`, MM.Hk());
+                 return rM.disableColorWrite = !0, rM
+               }))
+             }
+             KM.setPosition(qM, 0, -12, 0), Sr("pet", "pet_none"), Sr("aura", "aura_none")
+ ... (42 more added lines; see GitHub link above)
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1929-L1966` → after: `L675-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L675-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L675-L676) · [Before (L1929-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1929-L1966)

```diff
-     }
- 
-     function AQ(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-       if (!QQ.lightsEnabled || wQ) return !0;
-       const qQ = WQ.lightSources,
-         TQ = Math.min(qQ.length, XQ);
-       for (let zQ = 0; zQ < TQ; zQ++)
-         if (!qQ[zQ].areLightTexturesReady()) return !1;
-       return !0
-     }
- 
-     function RQ(QQ, WQ, XQ, qQ) {
-       let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 4,
-         zQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       if (!XQ._areLightsDirty) return XQ._needNormals;
- ... (22 more removed lines; see GitHub link above)
+       setOrbit(MM) {
+         nr(MM)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L1968-L2026` → after: `L678-L679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L678-L679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L678-L679) · [Before (L1968-L2026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L1968-L2026)

```diff
-       XQ.SPECULARTERM = PQ.specularEnabled, XQ.SHADOWS = PQ.shadowEnabled;
-       const gQ = Math.max(TQ, XQ.MAXLIGHTCOUNT || 0);
-       for (let wQ = FQ; wQ < gQ; wQ++) void 0 !== XQ["LIGHT" + wQ] && (XQ["LIGHT" + wQ] = !1, XQ["HEMILIGHT" + wQ] = !1, XQ["POINTLIGHT" + wQ] = !1, XQ["DIRLIGHT" + wQ] = !1, XQ["SPOTLIGHT" + wQ] = !1, XQ["AREALIGHT" + wQ] = !1, XQ["CLUSTLIGHT" + wQ] = !1, XQ["SHADOW" + wQ] = !1, … [truncated]
-       XQ.LIGHTCOUNT = FQ, XQ.MAXLIGHTCOUNT = TQ;
-       const JQ = QQ.Uj().getCaps();
-       return void 0 === XQ.SHADOWFLOAT && (PQ.needRebuild = !0), XQ.SHADOWFLOAT = PQ.shadowEnabled && (JQ.textureFloatRender && JQ.textureFloatLinearFiltering || JQ.textureHalfFloatRender && JQ.textureHalfFloatLinearFiltering), XQ.LIGHTMAPEXCLUDED = PQ.lightmapMode, PQ.needRebuil … [truncated]
-     }
- 
-     function EQ(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 8,
-         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
-       if (WQ && sQ.e.ReflectionTextureEnabled) {
-         if (!WQ.isReadyOrNotBlocking()) return !1;
-         XQ._needNormals = !0, XQ.REFLECTION = !0, XQ.GAMMAREFLECTION = WQ.gammaSpace, XQ.RGBDREFLECTION = WQ.isRGBD, XQ.LODINREFLECTIONALPHA = WQ.lodLevelInAlpha, XQ.LINEARSPECULARREFLECTION = WQ.linearSpecularLOD, XQ.USEIRRADIANCEMAP = !1, XQ.LODBASEDMICROSFURACE = QQ.Uj().getCa … [truncated]
-         const zQ = QQ.Uj();
- ... (43 more removed lines; see GitHub link above)
+       resetCamera() {
+         FM.inertialAlphaOffset = 0, FM.inertialBetaOffset = 0, FM.inertialRadiusOffset = 0, nr(AM.d[this.framing])
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2028-L2033` → after: `L681-L685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L681-L685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L681-L685) · [Before (L2028-L2033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2028-L2033)

```diff
-       if (zQ && !XQ.specular.equalsFloats(0, 0, 0) && (sQ.specularEnabled = !0), qQ["SHADOW" + wQ] = !1, qQ["SHADOWCSM" + wQ] = !1, qQ["SHADOWCSMDEBUG" + wQ] = !1, qQ["SHADOWCSMNUM_CASCADES" + wQ] = !1, qQ["SHADOWCSMUSESHADOWMAXZ" + wQ] = !1, qQ["SHADOWCSMNOBLEND" + wQ] = !1, qQ[ … [truncated]
-         const WQ = XQ.getShadowGenerator(QQ.activeCamera) ?? XQ.getShadowGenerator();
-         if (WQ) {
-           const QQ = WQ.getShadowMap();
-           QQ && QQ.renderList && QQ.renderList.length > 0 && (sQ.shadowEnabled = !0, WQ.prepareDefines(qQ, wQ))
-         }
+       resize(MM, rM) {
+         jr(MM, rM)
+       }
+       close() {
+         this.closed || (this.closed = !0, ar--, 0 === ar && vM.stopRenderLoop())
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2038-L2052` → after: `L689-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L689-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L689-L696) · [Before (L2038-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2038-L2052)

```diff
-     function uQ(QQ, WQ, XQ, wQ, qQ) {
-       let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-         sQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         FQ = function(QQ, WQ) {
-           let XQ = !1;
-           if (QQ.activeCamera) {
-             const wQ = WQ.CAMERA_ORTHOGRAPHIC ? 1 : 0,
-               qQ = WQ.CAMERA_PERSPECTIVE ? 1 : 0,
-               TQ = 1 === QQ.activeCamera.mode ? 1 : 0,
-               zQ = 0 === QQ.activeCamera.mode ? 1 : 0;
-             (wQ ^ TQ || qQ ^ zQ) && (WQ.CAMERA_ORTHOGRAPHIC = 1 === TQ, WQ.CAMERA_PERSPECTIVE = 1 === zQ, XQ = !0)
-           }
-           return XQ
-         }(QQ, wQ);
-       !1 !== TQ && (FQ = (0, zQ.e)(XQ, QQ, wQ)), wQ.DEPTHPREPASS !== !WQ.getColorWrite() && (wQ.DEPTHPREPASS = !wQ.DEPTHPREPASS, FQ = !0), wQ.INSTANCES !== qQ && (wQ.INSTANCES = qQ, FQ = !0), wQ.THIN_INSTANCES !== sQ && (wQ.THIN_INSTANCES = sQ, FQ = !0), FQ && wQ.markAsUnprocesse … [truncated]
+     function nr(MM) {
+       let {
+         yaw: rM,
+         pitch: iM,
+         radius: OM,
+         target: SM
+       } = MM;
+       FM.alpha = rM, FM.beta = iM, OM && (FM.radius = OM), SM && FM.target.set(SM[0], SM[1], SM[2])
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2059-L2103` → after: `L699-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L699-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L699-L726) · [Before (L2059-L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2059-L2103)

```diff
-     function tQ(QQ, WQ, XQ, qQ) {
-       let TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-         sQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       if (!WQ._areAttributesDirty && WQ._needNormals === WQ._normals && WQ._needUVs === WQ._uvs) return !1;
-       WQ._normals = WQ._needNormals, WQ._uvs = WQ._needUVs, WQ.NORMAL = WQ._needNormals && QQ.isVerticesDataPresent("normal"), WQ._needNormals && QQ.isVerticesDataPresent("tangent") && (WQ.TANGENT = !0);
-       for (let wQ = 1; wQ <= 6; ++wQ) WQ["UV" + wQ] = !!WQ._needUVs && QQ.isVerticesDataPresent(`uv${1===wQ?"":wQ}`);
-       if (XQ) {
-         const XQ = QQ.useVertexColors && QQ.isVerticesDataPresent("color");
-         WQ.VERTEXCOLOR = XQ, WQ.VERTEXALPHA = QQ.hasVertexAlpha && XQ && zQ
-       }
-       return QQ.isVerticesDataPresent("instanceColor") && (QQ.UqQ || QQ.hasThinInstances) && (WQ.INSTANCESCOLOR = !0), qQ && function(QQ, WQ) {
-         if (QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton) {
-           WQ.NUM_BONE_INFLUENCERS = QQ.numBoneInfluencers;
-           const XQ = void 0 !== WQ.BONETEXTURE;
-           if (QQ.skeleton.isUsingTextureForMatrices && XQ) WQ.BONETEXTURE = !0;
- ... (29 more removed lines; see GitHub link above)
+     function Qr(MM, rM) {
+       return MM.appendChild(rr), vM || function() {
+         vM = new QM.e(rr, !0, {
+           preserveDrawingBuffer: !0
+         });
+         const MM = (0, SM.f)();
+         vM.LOM = MM.CL.engine.LOM, BM = new zM.b(vM), BM.clearColor = new hM.d(0, 0, 0, 0), BM.ambientColor = new hM.Color3(1, 1, 1), FM = new LM.c("Td", 0, 0, 1, mM.sh.Zero(), BM), FM.attachControl(rr, !0), FM.panningSensibility = 0, Mr = (0, OM.u)("Player", BM, !0).then((rM =>  … [truncated]
+           XM = rM.meshApi, IM = rM.capeMesh, KM = MM.CL.Dk;
+           const iM = 8.33;
+           qM = (0, OM.i)("Player", iM, !0, !0), KM.setPosition(qM, 0, -8.33, 0);
+           const SM = KM.getNamedNode(qM, "BodyMesh");
+           KM.attachTransformNode(IM, qM, SM), KM.set(qM, "aOpacity", 1), KM.mY(qM, "aOpacity", 1), VM = new tM(BM, KM, qM), cM = new YM(BM, iM), TM = new yM.AnimatorState, TM.Cm = MM, TM.thinInstMgr = KM, TM.Zk = qM, TM.kiM = KM.lD(qM, 0), TM.modelLifeformType = "Player", TM.node … [truncated]
+           const jM = IM.aY().boundingBox;
+           IM.position.y = ((24 - jM.maximum.y + jM.minimum.y) / 2 - 1 / 32) / iM, IM.position.z = -1 / iM, IM.rotationQuaternion = null;
+           const aM = Math.PI / 18,
+             PM = jM.maximum.y / iM;
+ ... (12 more added lines; see GitHub link above)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2106-L2110` → after: `L739-L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L739-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L739-L750) · [Before (L2106-L2110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2106-L2110)

```diff
-     function oQ(QQ, WQ) {
-       if (QQ.activeCamera) {
-         const XQ = WQ.MULTIVIEW;
-         WQ.MULTIVIEW = null !== QQ.activeCamera.outputRenderTarget && QQ.activeCamera.outputRenderTarget.getViewCount() > 1, WQ.MULTIVIEW != XQ && WQ.markAsUnprocessed()
-       }
+     function nM(MM) {
+       return `\n\t\t\t\t${(0,PM.w)(MM,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, PM.B)(MM, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, PM.B)(MM, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, PM.n)(MM, "mat2", "c", "s", "-s", "c")
+       };\
+       n\ t\ t\ t\ t`)}\n\t\t\t`
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2113-L2116` → after: `L753-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L753-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L753-L757) · [Before (L2113-L2116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2113-L2116)

```diff
-     function eQ(QQ, WQ, XQ) {
-       const wQ = WQ.ORDER_INDEPENDENT_TRANSPARENCY,
-         qQ = WQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS;
-       WQ.ORDER_INDEPENDENT_TRANSPARENCY = QQ.useOrderIndependentTransparency && XQ, WQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !QQ.Uj().getCaps().textureFloatLinearFiltering, wQ === WQ.ORDER_INDEPENDENT_TRANSPARENCY && qQ === WQ.ORDER_INDEPENDENT_TRANSPARENCY_16BITS || WQ.markAsU … [truncated]
+     function QM(MM, rM) {
+       let iM = (0, PM.Db)(MM, "skele" + (rM - 1));
+       for (let SM = rM - 2; SM >= 0; SM--) iM = (0, PM.sb)(MM, `boneIdx == ${SM}`, (0, PM.Db)(MM, `skele${SM}`), iM);
+       const OM = "bone.yz + rotate(bone.x) * pivot - pivot";
+       return `\n\t\t\t\t${(0,PM.B)(MM,"int","boneIdx",(0,PM.wb)(MM,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,PM.B)(MM,"vec3","bone",iM)}\n\t\t\t\t${(0,PM.B)(MM,"vec2","pivot",(0,PM.n)(MM,"vec2","0.0",`${(0,PM.Hb)(MM,"position")}.z`))}\n\t\t\t\t${(0,PM.Y)(MM)?`positi … [truncated]
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2119-L2174` → after: `L760-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L760-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L760-L844) · [Before (L2119-L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2119-L2174)

```diff
-     function nQ(QQ, WQ, XQ) {
-       const wQ = WQ.PREPASS;
-       if (!WQ._arePrePassDirty) return;
-       const qQ = [{
-         type: 1,
-         define: "PREPASS_POSITION",
-         index: "PREPASS_POSITION_INDEX"
-       }, {
-         type: 9,
-         define: "PREPASS_LOCAL_POSITION",
-         index: "PREPASS_LOCAL_POSITION_INDEX"
-       }, {
-         type: 2,
-         define: "PREPASS_VELOCITY",
-         index: "PREPASS_VELOCITY_INDEX"
-       }, {
- ... (40 more removed lines; see GitHub link above)
+     function zM(MM) {
+       return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,PM.n)(MM,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
+     }
+     const LM = {
+         x: 0,
+         y: 0,
+         z: 0,
+         cz(MM, rM) {
+           return this.x = MM[rM], this.y = MM[rM + 1], this.z = MM[rM + 2], this
+         }
+       },
+       mM = {
+         name: "Cape",
+         className: "CapeMaterialPlugin",
+         priority: 200,
+         defines: (MM, rM) => ({
+ ... (69 more added lines; see GitHub link above)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2176-L2178` → after: `L846-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L846-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L846-L868) · [Before (L2176-L2178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2176-L2178)

```diff
-       } else {
-         WQ.PREPASS = !1;
-         for (let QQ = 0; QQ < qQ.length; QQ++) WQ[qQ[QQ].define] = !1
+       };
+     (0, aM.l)(LM)
+   },
+   42227: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       CapeMaterialPlugin: () => UM,
+       HueTintMaterialPlugin: () => GM,
+       LifeformMaterialPlugin: () => CM,
+       OverlayMaterialPlugin: () => eM
+     });
+     var OM = iM(42233),
+       SM = iM(38984);
+     class jM extends((0, OM.i)(SM.d)) {}(0, OM.m)(SM.d, jM);
+     var aM = iM(38275);
+     class PM extends((0, OM.i)(aM.c)) {}(0, OM.m)(aM.c, PM);
+     var nM = iM(38832);
+ ... (7 more added lines; see GitHub link above)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2180-L2181` → after: `L870-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L870-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L870-L897) · [Before (L2180-L2181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2180-L2181)

```diff
-       WQ.PREPASS != wQ && (WQ.markAsUnprocessed(), WQ.markAsImageProcessingDirty())
-     }
+       dispose(MM) {
+         (0, zM.m)(this._material), super.dispose(MM)
+       }
+     }(0, OM.m)(mM.e, HM), (0, mM.f)({
+       disableUnusedSpecularTerm: OM.e,
+       isLightingDisabled: MM => MM instanceof LM.StandardMaterial && MM.disableLighting
+     });
+     var hM = iM(39720);
+     class JM extends((0, OM.i)(hM.d)) {}(0, OM.m)(hM.d, JM);
+     var dM = iM(39852),
+       yM = iM(38178),
+       lM = iM(39126),
+       EM = iM(38287);
+     class UM extends((0, OM.i)(dM.c)) {}(0, OM.m)(dM.c, UM);
+     class GM extends((0, OM.i)(yM.b)) {}(0, OM.m)(yM.b, GM);
+     class CM extends((0, OM.i)(lM.i)) {}(0, OM.m)(lM.i, CM);
+ ... (12 more added lines; see GitHub link above)
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2183-L2190` → after: `L899-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L899-L900) · [Before (L2183-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2183-L2190)

```diff
-     function xQ(QQ, WQ, XQ, wQ) {
-       let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-         sQ = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
-         FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-         PQ = arguments.length > 9 && void 0 !== arguments[9] && arguments[9];
-       qQ && qQ.push("Light" + QQ), TQ || (WQ.push("vLightData" + QQ, "vLightDiffuse" + QQ, "vLightSpecular" + QQ, "vLightDirection" + QQ, "vLightWidth" + QQ, "vLightHeight" + QQ, "vLightFalloff" + QQ, "vLightGround" + QQ, "vSliceData" + QQ, "vSliceRanges" + QQ, "lightMatrix" + QQ … [truncated]
+     function PM(MM) {
+       aM = MM
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2193-L2196` → after: `L903-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L903-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L903-L905) · [Before (L2193-L2196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2193-L2196)

```diff
-     function YQ(QQ, WQ, XQ) {
-       const wQ = ["vReflectionMicrosurfaceInfos", "vReflectionDominantDirection", "reflectionMatrix", "vReflectionInfos", "vReflectionPosition", "vReflectionSize", "vReflectionColor", "vReflectionFilteringInfo"];
-       XQ && wQ.push("vSphericalX", "vSphericalY", "vSphericalZ", "vSphericalXX_ZZ", "vSphericalYY_ZZ", "vSphericalZZ", "vSphericalXY", "vSphericalYZ", "vSphericalZX", "vSphericalL00", "vSphericalL1_1", "vSphericalL10", "vSphericalL11", "vSphericalL2_2", "vSphericalL2_1", "vSpheri … [truncated]
-       WQ.push("reflectionSampler", "reflectionSamplerLow", "reflectionSamplerHigh", "irradianceSampler", "icdfSampler")
+     function nM(MM) {
+       if (!aM) throw new Error("No SkyMaterial: WebGL2's backend installs it");
+       return new aM("sky", MM)
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2200-L2216` → after: `L909-L916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L909-L916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L909-L916) · [Before (L2200-L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2200-L2216)

```diff
-       let wQ, qQ, TQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 4,
-         zQ = null;
-       if (QQ.uniformsNames) {
-         const sQ = QQ;
-         wQ = sQ.uniformsNames, qQ = sQ.uniformBuffersNames, WQ = sQ.samplers, XQ = sQ.defines, TQ = sQ.maxSimultaneousLights || 0, zQ = sQ.shaderLanguage ?? null
-       } else wQ = QQ, WQ || (WQ = []);
-       for (let sQ = 0; sQ < TQ && XQ["LIGHT" + sQ]; sQ++) xQ(sQ, wQ, WQ, XQ["PROJECTEDLIGHTTEXTURE" + sQ], qQ, !1, XQ["IESLIGHTTEXTURE" + sQ], XQ["CLUSTLIGHT" + sQ], XQ["RECTAREALIGHTEMISSIONTEXTURE" + sQ], 1 === zQ);
-       XQ.NUM_MORPH_INFLUENCERS && (wQ.push("morphTargetInfluences"), wQ.push("morphTargetCount")), XQ.BAKED_VERTEX_ANIMATION_TEXTURE && (wQ.push("bakedVertexAnimationSettings"), wQ.push("bakedVertexAnimationTextureSizeInverted"), wQ.push("bakedVertexAnimationTime"), WQ.push("bake … [truncated]
-     }
- 
-     function ZQ(QQ) {
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-         XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-         wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-         qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-         TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
- ... (1 more removed lines; see GitHub link above)
+       if (!(0, OM.f)(MM)) return void MM.material.forceCompilation(MM, rM);
+       const aM = () => {
+         if (MM.xG()) return void jM.delete(MM);
+         const OM = (0, SM.Y)(MM.material);
+         if (![null === OM || void 0 === OM ? void 0 : OM.diffuseTexture, null === OM || void 0 === OM ? void 0 : OM.opacityTexture, null === OM || void 0 === OM ? void 0 : OM.emissiveTexture, null === OM || void 0 === OM ? void 0 : OM.reflectionTexture].every((MM => !MM || iM.pre … [truncated]
+         jM.delete(MM), rM()
+       };
+       aM()
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2219` → after: `L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L919) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2219)

```diff
-   40596: (QQ, WQ, XQ) => {
+   42291: (MM, rM, iM) => {
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2223-L2260` → after: `L923-L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L923-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L923-L929) · [Before (L2223-L2260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2223-L2260)

```diff
-     var wQ = XQ(37370),
-       qQ = XQ(40551);
-     class TQ extends qQ.b {
-       constructor(QQ, WQ) {
-         let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
-         super(QQ, WQ, void 0, arguments.length > 3 && void 0 !== arguments[3] && arguments[3]), this._normalMatrix = new wQ.e, this._storeEffectOnSubMeshes = XQ
-       }
-       getEffect() {
-         return this._storeEffectOnSubMeshes ? this._activeEffect : super.getEffect()
-       }
-       isReady(QQ, WQ) {
-         return !!QQ && (!this._storeEffectOnSubMeshes || (!QQ.ZD || 0 === QQ.ZD.length || this.isReadyForSubMesh(QQ, QQ.ZD[0], WQ)))
-       }
-       _isReadyForSubMesh(QQ) {
-         const WQ = QQ.materialDefines;
-         return !(this.checkReadyOnEveryCall || !QQ.effect || !WQ || WQ._renderId !== this.sE().getRenderId())
- ... (22 more removed lines; see GitHub link above)
+     const OM = 4e5,
+       SM = 2;
+ 
+     function jM(MM, rM, iM) {
+       let [jM, aM] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [MM, rM], PM = Math.min(Number.isFinite(iM) && iM > 0 ? iM : 1, SM);
+       const nM = Math.max(0, jM, MM) * Math.max(0, aM, rM) * PM * PM;
+       return nM > OM && (PM *= Math.sqrt(OM / nM)), [Math.max(1, Math.floor(Math.max(0, MM) * PM)), Math.max(1, Math.floor(Math.max(0, rM) * PM))]
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2263` → after: `L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L932) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2263)

```diff
-   40621: (QQ, WQ, XQ) => {
+   42233: (MM, rM, iM) => {
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2265-L2266` → after: `L934-L936`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L934-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L934-L936) · [Before (L2265-L2266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2265-L2266)

```diff
-       c: () => TQ,
-       d: () => qQ
+       e: () => AM,
+       i: () => lM,
+       m: () => IM
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2268` → after: `L938-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L938-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L938-L959) · [Before (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2268)

```diff
-     const wQ = new WeakMap;
+     var OM = iM(41374),
+       SM = iM(42241),
+       jM = iM(42283),
+       aM = iM(42248),
+       PM = iM(38797),
+       nM = iM(38809),
+       QM = iM(38815),
+       zM = iM(38822),
+       LM = iM(38227),
+       mM = iM(38233),
+       HM = iM(42256),
+       hM = iM(38198),
+       JM = iM(38217),
+       dM = iM(38188);
+ 
+     function yM(MM, rM) {
+ ... (6 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2271-L2282` → after: `L962-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L962-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L962-L977) · [Before (L2271-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2271-L2282)

```diff
-       const WQ = QQ.getVertexBuffers();
-       if (!WQ) return null;
-       let XQ = wQ.get(QQ);
-       if (XQ) {
-         let QQ = !1;
-         for (const wQ in WQ)
-           if (!XQ.has(wQ)) {
-             QQ = !0;
-             break
-           } if (!QQ) return XQ
-       } else XQ = new Map, wQ.set(QQ, XQ);
-       for (const wQ in WQ) {
+       const rM = class extends HM.d {
+           constructor(rM, iM) {
+             const OM = (0, JM.Y)(rM),
+               SM = OM && (0, JM.v)(OM, MM.name);
+             for (var jM = arguments.length, aM = new Array(jM > 2 ? jM - 2 : 0), PM = 2; PM < jM; PM++) aM[PM - 2] = arguments[PM];
+             super(rM, MM.name, MM.priority, SM ? SM.defines : MM.defines(...aM), !1), this.featureState = void 0, this.featureState = iM, this._pluginManager._addPlugin(this), this._enable(!0), (0, JM.x)(this._material, MM, this.featureState, this._pluginDefineNames)
+           }
+           getClassName() {
+             return MM.className
+           }
+           isCompatible(MM) {
+             return MM === dM.b.GLSL || MM === dM.b.WGSL
+           }
+         },
+         iM = (0, hM.i)(MM);
+       for (const [OM, SM] of Object.entries(hM.d)) {
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2285-L2293` → after: `L980-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L980-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L980-L984) · [Before (L2285-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2285-L2293)

```diff
-           const WQ = QQ.byteOffset,
-             qQ = QQ.byteStride,
-             TQ = QQ.type,
-             zQ = QQ.normalized;
-           XQ.set(wQ, {
-             offset: WQ,
-             stride: qQ,
-             type: TQ,
-             normalized: zQ
+           const MM = iM[OM];
+           Object.defineProperty(rM.prototype, SM, {
+             value: yM(jM, MM),
+             writable: !0,
+             configurable: !0
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2300-L2325` → after: `L995-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L995-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L995-L1005) · [Before (L2300-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2300-L2325)

```diff
-     function TQ(QQ, WQ) {
-       WQ.forEach(((WQ, XQ) => {
-         const wQ = `vp_${XQ}_info`;
-         QQ.setFloat4(wQ, WQ.offset, WQ.stride, WQ.type, WQ.normalized ? 1 : 0)
-       }))
-     }
-   },
-   40573: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => sQ,
-       c: () => FQ
-     });
-     var wQ = XQ(40260),
-       qQ = XQ(37370),
-       TQ = XQ(40268);
-     let zQ = (() => {
- ... (10 more removed lines; see GitHub link above)
+     function eM(MM, rM, iM) {
+       return (0, CM.f)(iM, rM.urls, (() => async function(MM, rM, iM) {
+         const {
+           width: OM
+         } = MM[0].getSize(), SM = MM.map(((MM, iM) => {
+           var SM;
+           const jM = Math.round(MM.getSize().height / OM),
+             aM = null === rM || void 0 === rM ? void 0 : rM[iM];
+           return {
+             pixels: aM && aM.byteLength === OM * OM * jM * 4 ? aM : null !== (SM = bM.get(MM.getInternalTexture())) && void 0 !== SM ? SM : MM._readPixelsSync(),
+             layers: jM
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2327-L2333` → after: `L1007-L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1007-L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1007-L1014) · [Before (L2327-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2327-L2333)

```diff
-         }
-         static extractMinAndMax(QQ, WQ, XQ, wQ, qQ, TQ) {
-           for (let zQ = WQ, sQ = WQ * wQ; zQ < WQ + XQ; zQ++, sQ += wQ) {
-             const WQ = QQ[sQ],
-               XQ = QQ[sQ + 1],
-               wQ = QQ[sQ + 2];
-             qQ.minimizeInPlaceFromFloats(WQ, XQ, wQ), TQ.maximizeInPlaceFromFloats(WQ, XQ, wQ)
+         })), jM = iM.ph().getCaps().texture2DArrayMaxLayerCount, PM = (0, CM.c)(SM, OM, jM).map((MM => {
+           let {
+             pixels: rM,
+             layers: SM
+           } = MM;
+           return {
+             atlas: new GM.e(rM, OM, OM, SM, UM.e.TEXTUREFORMAT_RGBA, iM, !0, !1, aM.c.NEAREST_NEAREST_MIPLINEAR),
+             layers: SM
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2335-L2378` → after: `L1016-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1016) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1016-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1016-L1024) · [Before (L2335-L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2335-L2378)

```diff
-         }
-       }, (() => {
-         const zQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
-         WQ = [TQ.g.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 1 ? void 0 : arguments[1])
-         }))], XQ = [TQ.g.filter((function() {
-           return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
-         }))], (0, wQ.k)(QQ, null, WQ, {
-           kind: "method",
-           name: "extractMinAndMaxIndexed",
-           static: !0,
-           private: !1,
-           access: {
-             has: QQ => "extractMinAndMaxIndexed" in QQ,
-             get: QQ => QQ.extractMinAndMaxIndexed
-           },
- ... (28 more removed lines; see GitHub link above)
+         }));
+         return MM.forEach(((MM, rM) => {
+           const OM = MM.getInternalTexture();
+           bM.has(OM) || (! function(MM, rM) {
+             const iM = rM.createRawTexture(new Uint8Array(4), 1, 1, UM.e.TEXTUREFORMAT_RGBA, !1, !1, aM.c.NEAREST_SAMPLINGMODE);
+             MM._hardwareTexture.release(), rM.unbindAllTextures(), iM._swapAndDie(MM, !1)
+           }(OM, iM.ph()), bM.set(OM, SM[rM].pixels))
+         })), PM
+       }(MM, rM.pixels, iM)))
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2380-L2388` → after: `L1026-L1048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1026-L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1026-L1048) · [Before (L2380-L2388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2380-L2388)

```diff
- 
-     function FQ(QQ, WQ, XQ) {
-       let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-         TQ = arguments.length > 4 ? arguments[4] : void 0;
-       const sQ = new qQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-         FQ = new qQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-       return TQ || (TQ = 3), zQ.extractMinAndMax(QQ, WQ, XQ, TQ, sQ, FQ), wQ && (sQ.x -= sQ.x * wQ.x + wQ.y, sQ.y -= sQ.y * wQ.x + wQ.y, sQ.z -= sQ.z * wQ.x + wQ.y, FQ.x += FQ.x * wQ.x + wQ.y, FQ.y += FQ.y * wQ.x + wQ.y, FQ.z += FQ.z * wQ.x + wQ.y), {
-         minimum: sQ,
-         maximum: FQ
+     const bM = new WeakMap;
+     var wM = iM(38829);
+     class tM extends(lM(nM.g)) {
+       constructor(MM, rM) {
+         super(MM, rM), this.loaded = new Set, this.mirrors = void 0, this.mirrors = rM.textures.map((MM => MM.mirror)), this.mirrors.forEach(((MM, rM) => {
+           MM.onLoadObservable.add((MM => {
+             this.setTextureArrayData(MM, rM).catch((MM => {
+               console.error(`Failed to build the texture arrays, at atlas ${rM}`, MM)
+             }))
+           }))
+         })), (0, wM.j)(rM, MM.shaderLanguage)
+       }
+       async setTextureArrayData(MM, rM) {
+         const iM = this.featureState,
+           {
+             width: OM,
+ ... (7 more added lines; see GitHub link above)
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2391-L2462` → after: `L1051-L1062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1051-L1062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1051-L1062) · [Before (L2391-L2462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2391-L2462)

```diff
-   },
-   40555: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => gQ
-     });
-     var wQ, qQ = XQ(40404),
-       TQ = XQ(40557),
-       zQ = XQ(40561),
-       sQ = XQ(40573),
-       FQ = XQ(40578),
-       PQ = XQ(40153);
-     class gQ {
-       get materialDefines() {
-         const QQ = this._mainDrawWrapperOverride ? this._mainDrawWrapperOverride.defines : this._getDrawWrapper()?.defines;
-         return "string" === typeof QQ ? null : QQ
-       }
- ... (56 more removed lines; see GitHub link above)
+     var gM = iM(42269),
+       uM = iM(41410),
+       RM = iM(38034),
+       pM = iM(42278),
+       WM = iM(41508),
+       sM = iM(41400),
+       DM = iM(42212),
+       kM = iM(38457),
+       ZM = iM(42280);
+     class oM extends gM.b {
+       getData() {
+         return null
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2464-L2465` → after: `L1064-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1064-L1066) · [Before (L2464-L2465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2464-L2465)

```diff
-       getMesh() {
-         return this._mesh
+       _rebuild() {}
+       restore() {
+         super._rebuild()
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2467-L2468` → after: `L1068-L1093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1068-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1068-L1093) · [Before (L2467-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2467-L2468)

```diff
-       getRenderingMesh() {
-         return this._renderingMesh
+     }
+     const fM = {
+       Mesh: pM.d,
+       TransformNode: DM.e,
+       Vz: gM.b,
+       VertexBuffer: gM.e,
+       BoundingInfo: uM.d,
+       sh: RM.sh,
+       ArenaBuffer: oM,
+       SubMesh: sM.e,
+       VertexData: WM.d,
+       MirroredGeometry: ZM.d,
+       meshFromArrays: ZM.h,
+       plainMeshFromArrays: ZM.k
+     };
+     (0, kM.g)(fM);
+ ... (10 more added lines; see GitHub link above)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2470-L2471` → after: `L1095-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1095-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1095-L1096) · [Before (L2470-L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2470-L2471)

```diff
-       getReplacementMesh() {
-         return this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null
+       dispose(MM) {
+         (0, YM.m)(this._material), super.dispose(MM)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2473-L2475` → after: `L1098-L1131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1098) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1098-L1131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1098-L1131) · [Before (L2473-L2475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2473-L2475)

```diff
-       getEffectiveMesh() {
-         const QQ = this._mesh._internalAbstractMeshDataInfo._actAsRegularMesh ? this._mesh : null;
-         return QQ || this._renderingMesh
+     }
+ 
+     function AM(MM, rM) {
+       if (!(rM instanceof OM.StandardMaterial) || rM.specularTexture) return;
+       const {
+         r: iM,
+         g: SM,
+         b: jM
+       } = rM.specularColor;
+       0 === iM && 0 === SM && 0 === jM && (MM.SPECULARTERM = !1)
+     }(0, zM.f)({
+       disableUnusedSpecularTerm: AM
+     });
+     var xM = iM(38235),
+       vM = iM(38467);
+     const FM = new RegExp(`^#define ${QM.b}\\s*$`, "m");
+ ... (18 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2477-L2483` → after: `L1133-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1133-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1133-L1140) · [Before (L2477-L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2477-L2483)

```diff
-       lj() {
-         let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
-         const WQ = this._renderingMesh.getMaterialForRenderPass(this._engine.currentRenderPassId) ?? this._renderingMesh.material;
-         if (!WQ) return QQ && this._mesh.sE()._hasDefaultMaterial ? this._mesh.sE().defaultMaterial : null;
-         if (this._isMultiMaterial(WQ)) {
-           const QQ = WQ.getSubMaterial(this.materialIndex);
-           return this._currentMaterial !== QQ && (this._currentMaterial = QQ, this.resetDrawCache()), QQ
+       prewarmDither(MM) {
+         if (this.dh || MM.xG()) return !1;
+         const rM = new sM.e(0, 0, 0, 0, 0, MM, void 0, !1, !1);
+         this.featureState.prewarmingDither = !0;
+         try {
+           this._material.isReadyForSubMesh(MM, rM)
+         } finally {
+           this.featureState.prewarmingDither = !1
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2485` → after: `L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1142) · [Before (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2485)

```diff
-         return WQ
+         return null !== rM.effect
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2487-L2488` → after: `L1144-L1145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1144-L1145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1144-L1145) · [Before (L2487-L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2487-L2488)

```diff
-       _isMultiMaterial(QQ) {
-         return void 0 !== QQ.getSubMaterial
+       dispose(MM) {
+         this.dh = !0, super.dispose(MM)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2490-L2497` → after: `L1147-L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1147-L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1147-L1189) · [Before (L2490-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2490-L2497)

```diff
-       refreshBoundingInfo() {
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
-         if (this._lastColliderWorldVertices = null, this.IsGlobal || !this._renderingMesh || !this._renderingMesh.geometry) return this;
-         if (QQ || (QQ = this._renderingMesh.getVerticesData(qQ.l.PositionKind)), !QQ) return this._boundingInfo = this._mesh.uC(), this;
-         const WQ = this._renderingMesh.lwQ();
-         let XQ;
-         if (0 === this.indexStart && this.indexCount === WQ.length) {
-           const QQ = this._renderingMesh.uC();
+     }
+     const XM = new Map;
+ 
+     function IM(MM, rM) {
+       XM.set(MM, rM)
+     }
+     IM(PM.b, EM), IM(nM.g, tM), IM(QM.g, BM), IM(zM.j, NM), (0, LM.e)({
+       create: (MM, rM) => {
+         const iM = new OM.StandardMaterial(MM.name, rM);
+         return (0, xM.s)(MM, iM), iM.detailMap._pluginDefineNames
+       },
+       write: (MM, rM, iM) => {
+         (0, xM.U)(MM.mirror, rM, iM)
+       },
+       addFeature: (MM, rM, iM) => {
+         const OM = XM.get(rM.feature);
+ ... (27 more added lines; see GitHub link above)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2499-L2626` → after: `L1191-L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1191-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1191-L1331) · [Before (L2499-L2626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2499-L2626)

```diff
-             minimum: QQ.minimum.clone(),
-             maximum: QQ.maximum.clone()
-           }
-         } else XQ = (0, sQ.b)(QQ, WQ, this.indexStart, this.indexCount, this._renderingMesh.geometry.boundingBias);
-         return this._boundingInfo ? this._boundingInfo.reConstruct(XQ.minimum, XQ.maximum) : this._boundingInfo = new zQ.e(XQ.minimum, XQ.maximum), this
-       }
-       _checkCollision(QQ) {
-         return this.uC()._checkCollision(QQ)
-       }
-       updateBoundingInfo(QQ) {
-         let WQ = this.uC();
-         return WQ || (this.refreshBoundingInfo(), WQ = this.uC()), WQ && WQ.update(QQ), this
-       }
-       isInFrustum(QQ) {
-         const WQ = this.uC();
-         return !!WQ && WQ.isInFrustum(QQ, this._mesh.cullingStrategy)
- ... (112 more removed lines; see GitHub link above)
+             noMipmap: SM,
+             invertY: !1,
+             samplingMode: PM,
+             ...zM,
+             mimeType: HM,
+             loaderOptions: void 0,
+             useSRGBBuffer: !1
+           },
+           yM = new aM.c(null, rM, dM);
+         xM.w.set(yM, LM), Object.assign(yM, QM), yM.updateURL(OM, hM);
+         const lM = yM.getInternalTexture();
+         lM && (lM.label = JM), MM.uvSet = yM.coordinatesIndex, MM.matrix.set((0, xM.O)(yM)), (0, mM.F)(MM, yM)
+       },
+       cube: (MM, rM, iM) => {
+         let {
+           rootUrl: OM,
+ ... (125 more added lines; see GitHub link above)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2629-L2632` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1334) · [Before (L2629-L2632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2629-L2632)

```diff
-         let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         this._linesIndexBuffer && (this._mesh.sE().Uj()._releaseBuffer(this._linesIndexBuffer), this._linesIndexBuffer = null);
-         const WQ = this._mesh.ZD.indexOf(this);
-         this._mesh.ZD.splice(WQ, 1), this.resetDrawCache(void 0, QQ)
+         this.release(), super.dispose()
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2634-L2635` → after: `L1336-L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1336-L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1336-L1338) · [Before (L2634-L2635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2634-L2635)

```diff
-       getClassName() {
-         return "SubMesh"
+       releaseUnlessInstanced(MM) {
+         var rM;
+         MM && null !== (rM = this.getVertexBuffer(MM)) && void 0 !== rM && rM.getIsInstanced() || this.release()
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2637-L2646` → after: `L1340-L1404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1340-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1340-L1404) · [Before (L2637-L2646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2637-L2646)

```diff
-       static CreateFromIndices(QQ, WQ, XQ, wQ, qQ) {
-         let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           zQ = Number.MAX_VALUE,
-           sQ = -Number.MAX_VALUE;
-         const FQ = (qQ || wQ).lwQ();
-         for (let PQ = WQ; PQ < WQ + XQ; PQ++) {
-           const QQ = FQ[PQ];
-           QQ < zQ && (zQ = QQ), QQ > sQ && (sQ = QQ)
-         }
-         return new gQ(QQ, zQ, sQ - zQ + 1, WQ, XQ, wQ, qQ, TQ)
+       release() {
+         this.model && ((0, QM.p)(this.model), this.model = null)
+       }
+     }
+ 
+     function LM(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new PM.d(MM, iM);
+       const SM = (0, QM.i)(rM),
+         {
+           positions: jM,
+           normals: LM,
+           uvs: mM,
+           indices: HM,
+           named: hM = {}
+         } = rM,
+         JM = new nM.d;
+ ... (49 more added lines; see GitHub link above)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/270.js` (Changed code · before: `L2648` → after: `L1406-L1444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0R1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-667377fd7f165b1487ed68e36a29bd1fc9ac3b97f0036e96adbe9e1d14176dc0) · [After (L1406-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/270.js#L1406-L1444) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/270.js#L2648)

```diff
-     }(wQ = gQ.prototype).projectToRef ?? (wQ.projectToRef = (0, PQ.h)("SubMesh", "projectToRef"))
+       return nM
+     }
+     iM.d(rM, {
+       c: () => OM,
+       f: () => jM
+     });
+     const SM = new WeakMap;
+ 
+     function jM(MM, rM, iM) {
+       var OM, jM;
+       const aM = null !== (OM = SM.get(MM)) && void 0 !== OM ? OM : new Map;
+       SM.set(MM, aM);
+       const PM = null !== (jM = aM.get(rM[0])) && void 0 !== jM ? jM : [];
+       aM.set(rM[0], PM);
+       const nM = PM.find((MM => MM.urls.length === rM.length && MM.urls.every(((MM, iM) => MM === rM[iM]))));
+       if (nM) return nM.built;
+ ... (23 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/271.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/271.js` (24 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136)

#### 1. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L4-L6` → after: `L4-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L4-L8) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L4-L6)

```diff
-   41834: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       b: () => wQ
+   42188: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       openMobLineupPreview: () => NM,
+       openMobPreview: () => YM,
+       openPetPreview: () => AM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L8-L168` → after: `L10-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L10-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L10-L247) · [Before (L8-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L8-L168)

```diff
-     class wQ {}
-     wQ.AUTOSAMPLERSUFFIX = "Sampler", wQ.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", wQ.ALPHA_DISABLE = 0, wQ.ALPHA_ADD = 1, wQ.ALPHA_COMBINE = 2, wQ.ALPHA_SUBTRACT = 3, wQ.ALPHA_MULTIPLY = 4, wQ.ALPHA_MAXIMIZED = 5, wQ.ALPHA_ONEONE = 6, wQ.ALPHA_PREMULTIPLIED = 7, wQ.ALPH … [truncated]
-   },
-   41824: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       e: () => FQ
-     });
-     var wQ = XQ(40260),
-       qQ = XQ(40268),
-       TQ = XQ(37370),
-       zQ = XQ(40525),
-       sQ = XQ(40496);
-     let FQ = (() => {
-       var QQ;
-       let WQ, XQ, FQ, PQ, gQ = zQ.d,
-         JQ = [];
- ... (145 more removed lines; see GitHub link above)
+     var OM = iM(40931),
+       SM = iM(41190),
+       jM = iM(42190),
+       aM = iM(38167),
+       PM = iM(38034),
+       nM = iM(41358),
+       QM = iM(42212),
+       zM = iM(39471),
+       LM = iM(38122),
+       mM = iM(38097),
+       HM = iM(38025),
+       hM = iM(39363),
+       JM = iM(39354),
+       dM = iM(39083),
+       yM = iM(39139),
+       lM = iM(39109),
+ ... (222 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L170` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L249) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L170)

```diff
-   41832: (QQ, WQ, XQ) => {
+   39852: (MM, rM, iM) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L172` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L251) · [Before (L172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L172)

```diff
-       b: () => qQ
+       c: () => mM
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L174-L230` → after: `L253-L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L253-L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L253-L281) · [Before (L174-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L174-L230)

```diff
-     var wQ = XQ(40724);
-     class qQ extends wQ.g {
-       constructor(QQ, WQ, XQ, qQ, TQ) {
-         let zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-           sQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-           FQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
-           PQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
-           gQ = arguments.length > 9 ? arguments[9] : void 0,
-           JQ = arguments.length > 10 ? arguments[10] : void 0,
-           rQ = arguments.length > 11 ? arguments[11] : void 0,
-           IQ = arguments.length > 12 ? arguments[12] : void 0;
-         super(null, TQ, !zQ, sQ, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, gQ), this.format = qQ, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== PQ || (FQ = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== PQ || (FQ = … [truncated]
-       }
-       update(QQ) {
-         this.updateMipLevel(QQ, 0)
-       }
- ... (41 more removed lines; see GitHub link above)
+     var OM = iM(38181),
+       SM = iM(38278),
+       jM = iM(38310),
+       aM = iM(38198),
+       PM = iM(38188);
+ 
+     function nM(MM) {
+       return `\n\t\t\t\t${(0,PM.w)(MM,"mat2","rotate",[{name:"ang",type:"float"}],`\
+       n\ t\ t\ t\ t\ t$ {
+         (0, PM.B)(MM, "float", "s", "sin(ang)")
+       }\
+       n\ t\ t\ t\ t\ t$ {
+         (0, PM.B)(MM, "float", "c", "cos(ang)")
+       }\
+       n\ t\ t\ t\ t\ treturn $ {
+         (0, PM.n)(MM, "mat2", "c", "s", "-s", "c")
+ ... (13 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L233` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L326) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L233)

```diff
-   41870: (QQ, WQ, XQ) => {
+   39720: (MM, rM, iM) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L235` → after: `L328-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L328-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L328-L329) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L235)

```diff
-       c: () => wQ.c
+       c: () => zM,
+       d: () => LM
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L237-L238` → after: `L331-L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L331-L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L331-L367) · [Before (L237-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L237-L238)

```diff
-     var wQ = XQ(40683);
-     (0, wQ.g)()
+     var OM = iM(38181),
+       SM = iM(38310),
+       jM = iM(38188),
+       aM = iM(38198);
+     const PM = "bloxdTextLodBias",
+       nM = [{
+         name: PM,
+         type: "float"
+       }],
+       QM = "bloxdTextSample",
+       zM = {
+         planes: -.5,
+         boards: -.5
+       },
+       LM = {
+         name: "TextSampler",
+ ... (21 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L240-L242` → after: `L369-L374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L369-L374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L369-L374) · [Before (L240-L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L240-L242)

```diff
-   41827: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       d: () => wQ.e
+   42227: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       CapeMaterialPlugin: () => UM,
+       HueTintMaterialPlugin: () => GM,
+       LifeformMaterialPlugin: () => CM,
+       OverlayMaterialPlugin: () => eM
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L244-L245` → after: `L376-L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L376-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L376-L406) · [Before (L244-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L244-L245)

```diff
-     var wQ = XQ(40705);
-     (0, wQ.f)()
+     var OM = iM(42233),
+       SM = iM(38984);
+     class jM extends((0, OM.i)(SM.d)) {}(0, OM.m)(SM.d, jM);
+     var aM = iM(38275);
+     class PM extends((0, OM.i)(aM.c)) {}(0, OM.m)(aM.c, PM);
+     var nM = iM(38832);
+     class QM extends((0, OM.i)(nM.e)) {}(0, OM.m)(nM.e, QM);
+     var zM = iM(38298),
+       LM = iM(41374),
+       mM = iM(38294);
+     class HM extends((0, OM.i)(mM.e)) {
+       constructor(MM, rM, iM) {
+         super(MM, rM, iM), (0, zM.k)(MM)
+       }
+       dispose(MM) {
+         (0, zM.m)(this._material), super.dispose(MM)
+ ... (15 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L247` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L408) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L247)

```diff
-   40705: (QQ, WQ, XQ) => {
+   42233: (MM, rM, iM) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L250` → after: `L411-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L411-L412) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L250)

```diff
-       f: () => BQ
+       i: () => lM,
+       m: () => IM
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L252-L283` → after: `L414-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L414-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L414-L461) · [Before (L252-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L252-L283)

```diff
-     var wQ, qQ, TQ = XQ(37546),
-       zQ = XQ(40404),
-       sQ = XQ(40651),
-       FQ = XQ(40712),
-       PQ = XQ(40551),
-       gQ = XQ(40717),
-       JQ = XQ(40153);
-     class rQ extends sQ.d {
-       _isShaderMaterial(QQ) {
-         return !!QQ && "ShaderMaterial" === QQ.getClassName()
-       }
-       constructor(QQ) {
-         let WQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
-           wQ = arguments.length > 5 ? arguments[5] : void 0,
-           qQ = arguments.length > 6 ? arguments[6] : void 0,
-           sQ = arguments.length > 7 ? arguments[7] : void 0;
- ... (16 more removed lines; see GitHub link above)
+     var OM = iM(41374),
+       SM = iM(42241),
+       jM = iM(42283),
+       aM = iM(42248),
+       PM = iM(38797),
+       nM = iM(38809),
+       QM = iM(38815),
+       zM = iM(38822),
+       LM = iM(38227),
+       mM = iM(38233),
+       HM = iM(42256),
+       hM = iM(38198),
+       JM = iM(38217),
+       dM = iM(38188);
+ 
+     function yM(MM, rM) {
+ ... (32 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L286-L316` → after: `L464-L512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L464-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L464-L512) · [Before (L286-L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L286-L316)

```diff
-       getClassName() {
-         return "LinesMesh"
-       }
-       get material() {
-         return this._internalAbstractMeshDataInfo._material
-       }
-       set material(QQ) {
-         const WQ = this.material;
-         if (WQ === QQ) return;
-         const XQ = WQ && this._ownsMaterial;
-         this._ownsMaterial = !1, this._setInternalMaterial(QQ), XQ && WQ?.dispose()
-       }
-       _setInternalMaterial(QQ) {
-         this._setMaterial(QQ), this.material && (this.material.fillMode = PQ.b.LineListDrawMode, this.material.disableLighting = !0)
-       }
-       get checkCollisions() {
- ... (15 more removed lines; see GitHub link above)
+       return rM
+     }
+     class EM extends(lM(PM.b)) {}
+     var UM = iM(40931),
+       GM = iM(42260),
+       CM = iM(42265);
+ 
+     function eM(MM, rM, iM) {
+       return (0, CM.f)(iM, rM.urls, (() => async function(MM, rM, iM) {
+         const {
+           width: OM
+         } = MM[0].getSize(), SM = MM.map(((MM, iM) => {
+           var SM;
+           const jM = Math.round(MM.getSize().height / OM),
+             aM = null === rM || void 0 === rM ? void 0 : rM[iM];
+           return {
+ ... (33 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L318-L321` → after: `L514-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L514-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L514-L524) · [Before (L318-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L318-L321)

```diff
-       _draw(QQ, WQ, XQ) {
-         if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
-         const wQ = this.sE().Uj();
-         return this._unIndexed ? wQ.drawArraysType(PQ.b.LineListDrawMode, QQ.verticesStart, QQ.verticesCount, XQ) : wQ.drawElementsType(PQ.b.LineListDrawMode, QQ.indexStart, QQ.indexCount, XQ), this
+       async setTextureArrayData(MM, rM) {
+         const iM = this.featureState,
+           {
+             width: OM,
+             height: SM
+           } = MM.getSize(),
+           jM = this._material.shaderLanguage;
+         if (!iM.useWebGL2) return void(0, wM.e)(this._material, iM, rM, OM, Math.round(SM / OM), jM);
+         if (this.loaded.add(rM), this.loaded.size < this.mirrors.length) return;
+         const aM = await eM(this.mirrors, iM.sources, this._material.Hk());
+         (0, wM.c)(this._material, iM, aM, OM, jM)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L323-L334` → after: `L526-L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L526-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L526-L538) · [Before (L323-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L323-L334)

```diff
-       dispose(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || WQ) && this.material?.dispose(!1, !1, !0), super.dispose(QQ)
-       }
-       clone(QQ) {
-         let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-           XQ = arguments.length > 2 ? arguments[2] : void 0;
-         if (WQ && void 0 === WQ._addToSceneRootNodes) {
-           const XQ = WQ;
-           return XQ.source = this, new rQ(QQ, this.sE(), XQ.parent, XQ.source, XQ.doNotCloneChildren)
-         }
-         return new rQ(QQ, this.sE(), WQ, this, XQ)
+     }
+     var gM = iM(42269),
+       uM = iM(41410),
+       RM = iM(38034),
+       pM = iM(42278),
+       WM = iM(41508),
+       sM = iM(41400),
+       DM = iM(42212),
+       kM = iM(38457),
+       ZM = iM(42280);
+     class oM extends gM.b {
+       getData() {
+         return null
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L336-L342` → after: `L540-L542`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L540-L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L540-L542) · [Before (L336-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L336-L342)

```diff
-       createInstance(QQ) {
-         const WQ = new IQ(QQ, this);
-         if (this.bC) {
-           WQ.bC = {};
-           for (const QQ in this.bC) WQ.bC[QQ] = this.bC[QQ]
-         }
-         return WQ
+       _rebuild() {}
+       restore() {
+         super._rebuild()
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L344-L345` → after: `L544-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L544-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L544-L569) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L344-L345)

```diff
-       serialize(QQ) {
-         super.serialize(QQ), QQ.color = this.color.awQ(), QQ.alpha = this.alpha
+     }
+     const fM = {
+       Mesh: pM.d,
+       TransformNode: DM.e,
+       Vz: gM.b,
+       VertexBuffer: gM.e,
+       BoundingInfo: uM.d,
+       sh: RM.sh,
+       ArenaBuffer: oM,
+       SubMesh: sM.e,
+       VertexData: WM.d,
+       MirroredGeometry: ZM.d,
+       meshFromArrays: ZM.h,
+       plainMeshFromArrays: ZM.k
+     };
+     (0, kM.g)(fM);
+ ... (10 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L347-L349` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L571-L572) · [Before (L347-L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L347-L349)

```diff
-       static Parse(QQ, WQ) {
-         const XQ = new rQ(QQ.name, WQ);
-         return XQ.color = TQ.b.FromArray(QQ.color), XQ.alpha = QQ.alpha, XQ
+       dispose(MM) {
+         (0, YM.m)(this._material), super.dispose(MM)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L352-L353` → after: `L575-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L575-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L575-L590) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L352-L353)

```diff
-     rQ.ForceGLSL = !1;
-     class IQ extends FQ.b {
+ 
+     function AM(MM, rM) {
+       if (!(rM instanceof OM.StandardMaterial) || rM.specularTexture) return;
+       const {
+         r: iM,
+         g: SM,
+         b: jM
+       } = rM.specularColor;
+       0 === iM && 0 === SM && 0 === jM && (MM.SPECULARTERM = !1)
+     }(0, zM.f)({
+       disableUnusedSpecularTerm: AM
+     });
+     var xM = iM(38235),
+       vM = iM(38467);
+     const FM = new RegExp(`^#define ${QM.b}\\s*$`, "m");
+     class BM extends(lM(QM.g)) {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L355` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L592) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L355)

```diff
-         super(QQ, WQ), this.intersectionThreshold = WQ.intersectionThreshold
+         super(MM, rM), this.dh = !1, rM.ditherOnlyWhileFading && (vM.f.add(MM), this.prewarmDitherTwins(MM))
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L357-L358` → after: `L594-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L594-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L594-L621) · [Before (L357-L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L357-L358)

```diff
-       getClassName() {
-         return "InstancedLinesMesh"
+       prewarmDitherTwins(MM) {
+         const rM = new WeakSet;
+         MM.onEffectCreatedObservable.add((iM => {
+           let {
+             effect: OM,
+             subMesh: SM
+           } = iM;
+           if (this.featureState.prewarmingDither || rM.has(OM)) return;
+           rM.add(OM);
+           const jM = null === SM || void 0 === SM ? void 0 : SM.getMesh();
+           jM && !FM.test(OM.defines) && MM.Hk().onAfterRenderObservable.addOnce((() => {
+             this.prewarmDither(jM) || rM.delete(OM)
+           }))
+         }))
+       }
+       prewarmDither(MM) {
+ ... (12 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L361` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L624) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L361)

```diff
-     let jQ = !1;
+     const XM = new Map;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/271.js` (Changed code · before: `L363-L365` → after: `L626-L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-870144d22a4255f964a79f57d993a30f78bad540256778596318707b0b967136) · [After (L626-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/271.js#L626-L905) · [Before (L363-L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/271.js#L363-L365)

```diff
-     function BQ() {
-       jQ || (jQ = !0, sQ.d._LinesMeshParser = (QQ, WQ) => rQ.Parse(QQ, WQ))
-     }(wQ = rQ.prototype).enableEdgesRendering ?? (wQ.enableEdgesRendering = (0, JQ.h)("LinesMesh", "enableEdgesRendering")), (qQ = IQ.prototype).enableEdgesRendering ?? (qQ.enableEdgesRendering = (0, JQ.h)("InstancedLinesMesh", "enableEdgesRendering"))
+     function IM(MM, rM) {
+       XM.set(MM, rM)
+     }
+     IM(PM.b, EM), IM(nM.g, tM), IM(QM.g, BM), IM(zM.j, NM), (0, LM.e)({
+       create: (MM, rM) => {
+         const iM = new OM.StandardMaterial(MM.name, rM);
+         return (0, xM.s)(MM, iM), iM.detailMap._pluginDefineNames
+       },
+       write: (MM, rM, iM) => {
+         (0, xM.U)(MM.mirror, rM, iM)
+       },
+       addFeature: (MM, rM, iM) => {
+         const OM = XM.get(rM.feature);
+         if (!OM) throw new Error(`${rM.feature.name} has no plugin class (registerPluginClass)`);
+         new OM(MM.mirror, rM.state, ...iM)
+       },
+ ... (264 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/272.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/272.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb)

#### 1. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L4` → after: `L4-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L4-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L4-L20) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L4)

```diff
-   40717: (QQ, WQ, XQ) => {
+   42144: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => jM,
+       h: () => aM
+     });
+     var OM = iM(2050);
+     let SM = !1;
+ 
+     function jM() {
+       SM = !0
+     }
+ 
+     function aM() {
+       SM && (SM = !1, (0, OM.c)())
+     }
+   },
+ ... (1 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L7-L11` → after: `L23-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L23-L24) · [Before (L7-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L7-L11)

```diff
-       g: () => UQ,
-       j: () => pQ,
-       n: () => GQ,
-       r: () => DQ,
-       t: () => VQ
+       f: () => jM,
+       j: () => PM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L13-L124` → after: `L26-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L26-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L26-L46) · [Before (L13-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L13-L124)

```diff
-     var wQ = XQ(40286),
-       qQ = XQ(40355),
-       TQ = XQ(37370),
-       zQ = XQ(40404),
-       sQ = XQ(40724),
-       FQ = XQ(40602),
-       PQ = XQ(40314),
-       gQ = XQ(40596),
-       JQ = XQ(37392),
-       rQ = XQ(40589),
-       IQ = XQ(40584),
-       jQ = XQ(40621),
-       BQ = XQ(37418);
-     const yQ = {
-       effect: null,
-       subMesh: null
- ... (96 more removed lines; see GitHub link above)
+     var OM = iM(41669),
+       SM = iM(41677);
+ 
+     function jM(MM) {
+       if (MM.queries.drawCensus() < OM.wb.BYTES) return null;
+       const rM = MM.memoryData(MM.scratch(), OM.wb.BYTES, 4, "the draw census");
+       return null === rM ? null : {
+         terrainOpaque: OM.wb.terrainOpaque(rM, 0),
+         terrainTransparent: OM.wb.terrainTransparent(rM, 0),
+         terrainPack: OM.wb.terrainPack(rM, 0),
+         earthSky: OM.wb.earthSky(rM, 0),
+         skyMeshes: OM.wb.skyMeshes(rM, 0),
+         regular: OM.wb.regular(rM, 0),
+         thin: OM.wb.thin(rM, 0),
+         line: OM.wb.line(rM, 0),
+         text: OM.wb.text(rM, 0),
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L126-L127` → after: `L48-L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L48-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L48-L150) · [Before (L126-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L126-L127)

```diff
-       setMatrix(QQ, WQ) {
-         return this._checkUniform(QQ), this._matrices[QQ] = WQ, this
+     }
+ 
+     function aM(MM) {
+       const {
+         terrainOpaque: rM,
+         terrainTransparent: iM,
+         earthSky: OM,
+         skyMeshes: SM,
+         regular: jM,
+         thin: aM,
+         line: PM,
+         text: nM,
+         particles: QM
+       } = MM;
+       return rM + iM + OM + SM + jM + aM + PM + nM + QM
+     }
+ ... (87 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L129-L133` → after: `L152-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L152-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L152-L175) · [Before (L129-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L129-L133)

```diff
-       setMatrices(QQ, WQ) {
-         this._checkUniform(QQ);
-         const XQ = new Float32Array(16 * WQ.length);
-         for (let wQ = 0; wQ < WQ.length; wQ++) {
-           WQ[wQ].copyToArray(XQ, 16 * wQ)
+     }
+   },
+   42119: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => zM
+     });
+     var OM = iM(5200),
+       SM = iM(5198),
+       jM = iM(41706),
+       aM = iM(41712);
+     const PM = new Set(OM.M),
+       nM = OM.M.map((MM => (new TextEncoder).encode(MM))),
+       QM = new Map;
+ 
+     function zM(MM, rM) {
+       var iM;
+ ... (8 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L135-L159` → after: `L177-L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L177-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L177-L267) · [Before (L135-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L135-L159)

```diff
-         return this._matrixArrays[QQ] = XQ, this
-       }
-       setMatrix3x3(QQ, WQ) {
-         return this._checkUniform(QQ), this._matrices3x3[QQ] = WQ, this
-       }
-       setMatrix2x2(QQ, WQ) {
-         return this._checkUniform(QQ), this._matrices2x2[QQ] = WQ, this
-       }
-       setArray2(QQ, WQ) {
-         return this._checkUniform(QQ), this._vectors2Arrays[QQ] = WQ, this
-       }
-       setArray3(QQ, WQ) {
-         return this._checkUniform(QQ), this._vectors3Arrays[QQ] = WQ, this
-       }
-       setArray4(QQ, WQ) {
-         return this._checkUniform(QQ), this._vectors4Arrays[QQ] = WQ, this
- ... (9 more removed lines; see GitHub link above)
+         return !1
+       }(MM.payload, rM))) && function(MM) {
+         if (null === MM || "object" !== typeof MM || null === MM.settings || "object" !== typeof MM.settings) return;
+         const rM = String(MM.eId),
+           iM = MM.settings;
+         let OM = QM.get(rM);
+         for (const SM in iM) {
+           if (!PM.has(SM)) continue;
+           const MM = iM[SM];
+           null === MM || void 0 === MM ? OM && delete OM[SM] : (OM ??= {}, OM[SM] = MM)
+         }
+         OM && QM.set(rM, OM)
+       }((0, jM.c)(MM.payload))
+     })), (0, aM.c)((() => {
+       QM.clear()
+     }))
+ ... (75 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L161-L164` → after: `L269-L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L269-L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L269-L315) · [Before (L161-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L161-L164)

```diff
-       setDefine(QQ, WQ) {
-         const XQ = QQ.trimEnd() + " ",
-           wQ = this.options.defines.findIndex((WQ => WQ === QQ || WQ.startsWith(XQ)));
-         return wQ >= 0 && this.options.defines.splice(wQ, 1), ("boolean" !== typeof WQ || WQ) && this.options.defines.push(XQ + WQ), this
+     })), (0, nM.c)((() => {
+       QM.clear(), zM = {}, SM.c.clear(), hM({
+         kind: "reset"
+       })
+     })), (0, nM.e)((() => {
+       QM.clear(), hM({
+         kind: "reset"
+       })
+     }))
+   },
+   42126: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => gM,
+       d: () => dM,
+       e: () => WM,
+       i: () => sM
+ ... (31 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L166-L167` → after: `L317-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L317-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L317-L329) · [Before (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L166-L167)

```diff
-       isReadyForSubMesh(QQ, WQ, XQ) {
-         return this.isReady(QQ, XQ, WQ)
+     }
+ 
+     function JM(MM) {
+       let {
+         killer: rM,
+         victim: iM,
+         withItem: OM
+       } = MM;
+       return {
+         killer: UM(rM),
+         victim: UM(iM),
+         withItem: OM,
+         killstreak: 0
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L169-L221` → after: `L331-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L331-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L331-L360) · [Before (L169-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L169-L221)

```diff
-       isReady(QQ, WQ, XQ) {
-         const wQ = XQ && this._storeEffectOnSubMeshes;
-         if (this.isFrozen) {
-           const QQ = wQ ? XQ._drawWrapper : this._drawWrapper;
-           if (QQ.effect && QQ._wasPreviouslyReady && QQ._wasPreviouslyUsingInstances === WQ) return !0
-         }
-         const TQ = this.sE(),
-           sQ = TQ.Uj(),
-           PQ = [],
-           gQ = [];
-         let JQ = null,
-           BQ = this._shaderPath,
-           VQ = this._options.uniforms,
-           DQ = this._options.uniformBuffers,
-           pQ = this._options.samplers;
-         sQ.getCaps().multiview && TQ.activeCamera && TQ.activeCamera.outputRenderTarget && TQ.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, PQ.push("#define MULTIVIEW"), -1 !== VQ.indexOf("viewProjection") && -1 === VQ.indexOf("viewProjectionR") &&  … [truncated]
- ... (37 more removed lines; see GitHub link above)
+     }
+ 
+     function dM(MM) {
+       bM && tM((() => "killed" === MM.kind ? hM(MM.body) : JM(MM.body)))
+     }
+     const yM = "#2727f1",
+       lM = "#912c2c";
+ 
+     function EM(MM, rM) {
+       var iM;
+       return LM.e.has(MM) ? null === (iM = LM.e.getSettings(MM)) || void 0 === iM ? void 0 : iM[rM] : (0, zM.d)(MM, rM)
+     }
+ 
+     function UM(MM) {
+       var rM, iM, aM, PM, zM;
+       let {
+ ... (14 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L251-L252` → after: `L363-L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L363-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L363-L380) · [Before (L251-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L251-L252)

```diff
-       bindForSubMesh(QQ, WQ, XQ) {
-         this.bind(QQ, WQ, XQ._drawWrapperOverride?.effect, XQ)
+       const dM = String(mM),
+         UM = null === (rM = (0, QM.e)()) || void 0 === rM ? void 0 : rM.api,
+         GM = void 0 !== UM && String(UM.localId) === dM,
+         CM = null !== (iM = LM.e.getName(dM)) && void 0 !== iM ? iM : null,
+         eM = null !== (aM = EM(dM, "hideNameSeed")) && void 0 !== aM ? aM : null;
+       let bM = null === CM ? null : (0, OM.e)(CM, !jM.featureFlags.canSeeRealPlayerNames, eM) || null,
+         wM = null;
+       if (null === bM && void 0 !== UM) {
+         const MM = UM.getEntityType(dM);
+         "Player" !== MM && (bM = (0, nM.j)(UM, +dM) || null), wM = SM.j.includes(MM) ? MM : null
+       }
+       return {
+         id: dM,
+         shownName: bM,
+         lifeformType: null === bM && null !== (PM = null !== (zM = wM) && void 0 !== zM ? zM : JM) && void 0 !== PM ? PM : null,
+         colour: hM || EM(dM, "killfeedColour") || (GM ? yM : lM),
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L254-L269` → after: `L382-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L382-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L382-L423) · [Before (L254-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L254-L269)

```diff
-       bind(QQ, WQ, XQ, wQ) {
-         const qQ = wQ && this._storeEffectOnSubMeshes,
-           TQ = XQ ?? (qQ ? wQ.effect : this.getEffect());
-         if (!TQ) return;
-         const zQ = this.sE();
-         this._activeEffect = TQ, this.bindOnlyWorldMatrix(QQ, XQ);
-         const sQ = this._options.uniformBuffers;
-         let FQ = !1;
-         if (TQ && sQ && sQ.length > 0 && zQ.Uj().supportsUniformBuffers)
-           for (let gQ = 0; gQ < sQ.length; ++gQ) {
-             switch (sQ[gQ]) {
-               case "Mesh":
-                 WQ && (WQ.getMeshUniformBuffer().bindToEffect(TQ, "Mesh"), WQ.transferToEffect(QQ));
-                 break;
-               case "Scene":
-                 (0, IQ.C)(TQ, zQ.getSceneUniformBuffer()), zQ.finalizeSceneUbo(), FQ = !0
+     }
+     const GM = 32;
+     let CM = [],
+       eM = null,
+       bM = !1,
+       wM = !1;
+ 
+     function tM(MM) {
+       null === eM ? (CM.length === GM && CM.shift(), CM.push(MM)) : eM(MM())
+     }
+ 
+     function gM() {
+       wM || (wM = !0, (0, HM.h)(aM.hc.PlayerKilled, (MM => {
+         const rM = (0, mM.f)(MM);
+         (0, mM.c)(rM) && tM((() => hM(rM)))
+       })), (0, HM.h)(aM.hc.CustomKillfeed, (MM => {
+ ... (26 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L316-L322` → after: `L427-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L427-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L427-L440) · [Before (L316-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L316-L322)

```diff
-         if (TQ && WQ && (PQ || !this.isFrozen)) {
-           (0, IQ.A)(WQ, TQ), WQ.morphTargetManager && WQ.morphTargetManager.isUsingTextureForTargets && WQ.morphTargetManager._bind(TQ);
-           const QQ = WQ.bakedVertexAnimationManager;
-           if (QQ && QQ.isEnabled) {
-             const QQ = qQ ? wQ._drawWrapper : this._drawWrapper;
-             WQ.bakedVertexAnimationManager?.bind(TQ, !!QQ._wasPreviouslyUsingInstances)
-           }
+       },
+       sM = {
+         localPos() {
+           const MM = (0, QM.e)();
+           if (null === MM) return uM;
+           const rM = MM.api.apiView;
+           for (let iM = 0; iM < 3; iM++) RM[iM] = PM.v.localPos(rM, 0, iM);
+           return RM
+         },
+         targetedBlockPos() {
+           const MM = (0, QM.e)();
+           if (null === MM || PM.v.targetBlockId(MM.api.apiView, 0) === PM.Pc) return null;
+           for (let rM = 0; rM < 3; rM++) pM[rM] = PM.v.targetBlock(MM.api.apiView, 0, rM);
+           return pM
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L326-L354` → after: `L443-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L443-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L443-L456) · [Before (L326-L354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L326-L354)

```diff
-       getActiveTextures() {
-         const QQ = super.getActiveTextures();
-         for (const WQ in this._textures) QQ.push(this._textures[WQ]);
-         for (const WQ in this._textureArrays) {
-           const XQ = this._textureArrays[WQ];
-           for (let WQ = 0; WQ < XQ.length; WQ++) QQ.push(XQ[WQ])
-         }
-         return QQ
-       }
-       hasTexture(QQ) {
-         if (super.hasTexture(QQ)) return !0;
-         for (const XQ in this._textures)
-           if (this._textures[XQ] === QQ) return !0;
-         const WQ = QQ.getInternalTexture();
-         for (const XQ in this._internalTextures)
-           if (this._internalTextures[XQ] === WQ) return !0;
- ... (13 more removed lines; see GitHub link above)
+   },
+   40036: (MM, rM, iM) => {
+     iM.d(rM, {
+       c: () => OM
+     });
+     class OM {
+       constructor() {
+         this.members = new Map
+       }
+       apply(MM) {
+         const rM = {
+           added: [],
+           removed: [],
+           settingChanges: []
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L356-L398` → after: `L458-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L458-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L458-L470) · [Before (L356-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L356-L398)

```diff
-         const XQ = Object.keys(this._options);
-         for (const wQ of XQ) {
-           const QQ = this._options[wQ];
-           Array.isArray(QQ) && (this._options[wQ] = QQ.slice(0))
-         }
-         this.stencil.copyTo(WQ.stencil);
-         for (const wQ in this._textures) WQ.setTexture(wQ, this._textures[wQ]);
-         for (const wQ in this._internalTextures) WQ.setInternalTexture(wQ, this._internalTextures[wQ]);
-         for (const wQ in this._textureArrays) WQ.setTextureArray(wQ, this._textureArrays[wQ]);
-         for (const wQ in this._externalTextures) WQ.setExternalTexture(wQ, this._externalTextures[wQ]);
-         for (const wQ in this._ints) WQ.setInt(wQ, this._ints[wQ]);
-         for (const wQ in this._uints) WQ.setUInt(wQ, this._uints[wQ]);
-         for (const wQ in this._floats) WQ.setFloat(wQ, this._floats[wQ]);
-         for (const wQ in this._floatsArrays) WQ.setFloats(wQ, this._floatsArrays[wQ]);
-         for (const wQ in this._colors3) WQ.setColor3(wQ, this._colors3[wQ]);
-         for (const wQ in this._colors3Arrays) WQ._colors3Arrays[wQ] = this._colors3Arrays[wQ];
- ... (27 more removed lines; see GitHub link above)
+         for (const OM of MM.MM) {
+           let MM = this.members.get(OM.rM);
+           if (MM || (MM = {
+               name: null,
+               settings: {}
+             }, this.members.set(OM.rM, MM), rM.added.push(OM.rM)), null !== OM.iM && (MM.name = OM.iM), null !== OM.OM || OM.SM.length > 0) {
+             const iM = null === OM.OM ? {} : JSON.parse(OM.OM);
+             Object.assign(MM.settings, iM);
+             for (const rM of OM.SM) delete MM.settings[rM], iM[rM] = void 0;
+             rM.settingChanges.push({
+               playerId: OM.rM,
+               settings: iM
+             })
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L401-L436` → after: `L473-L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L473-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L473-L479) · [Before (L401-L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L401-L436)

```diff
-         this._textures = {}, this._internalTextures = {}, super.dispose(QQ, WQ, XQ)
-       }
-       serialize() {
-         const QQ = wQ.b.Serialize(this);
-         let WQ;
-         for (WQ in QQ.customType = "BABYLON.ShaderMaterial", QQ.uniqueId = this.uniqueId, QQ.options = this._options, QQ.shaderPath = this._shaderPath, QQ.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, QQ.stencil = this.stencil.serialize(), QQ.textures = {}, this._texture … [truncated]
-         for (WQ in QQ.textureArrays = {}, this._textureArrays) {
-           QQ.textureArrays[WQ] = [];
-           const XQ = this._textureArrays[WQ];
-           for (let wQ = 0; wQ < XQ.length; wQ++) QQ.textureArrays[WQ].push(XQ[wQ].serialize())
-         }
-         for (WQ in QQ.ints = {}, this._ints) QQ.ints[WQ] = this._ints[WQ];
-         for (WQ in QQ.uints = {}, this._uints) QQ.uints[WQ] = this._uints[WQ];
-         for (WQ in QQ.floats = {}, this._floats) QQ.floats[WQ] = this._floats[WQ];
-         for (WQ in QQ.floatsArrays = {}, this._floatsArrays) QQ.floatsArrays[WQ] = this._floatsArrays[WQ];
-         for (WQ in QQ.colors3 = {}, this._colors3) {
- ... (20 more removed lines; see GitHub link above)
+         for (const OM of MM.jM) {
+           const MM = this.members.get(OM);
+           var iM;
+           if (MM) this.members.delete(OM), rM.removed.push({
+             playerId: OM,
+             name: null !== (iM = MM.name) && void 0 !== iM ? iM : void 0
+           })
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L449-L459` → after: `L483-L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L483-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L483-L484) · [Before (L449-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L449-L459)

```diff
-     }
- 
-     function DQ(QQ, WQ, XQ) {
-       const qQ = wQ.b.Parse((() => new VQ(QQ.name, WQ, QQ.shaderPath, QQ.options, QQ.storeEffectOnSubMeshes)), QQ, WQ, XQ);
-       let zQ;
-       for (zQ in QQ.stencil && qQ.stencil.parse(QQ.stencil, WQ, XQ), QQ.textures) qQ.setTexture(zQ, sQ.g.Parse(QQ.textures[zQ], WQ, XQ));
-       for (zQ in QQ.textureArrays) {
-         const wQ = QQ.textureArrays[zQ],
-           TQ = [];
-         for (let QQ = 0; QQ < wQ.length; QQ++) TQ.push(sQ.g.Parse(wQ[QQ], WQ, XQ));
-         qQ.setTextureArray(zQ, TQ)
+       has(MM) {
+         return this.members.has(MM)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L461-L471` → after: `L486-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L486-L487) · [Before (L461-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L461-L471)

```diff
-       for (zQ in QQ.ints) qQ.setInt(zQ, QQ.ints[zQ]);
-       for (zQ in QQ.uints) qQ.setUInt(zQ, QQ.uints[zQ]);
-       for (zQ in QQ.floats) qQ.setFloat(zQ, QQ.floats[zQ]);
-       for (zQ in QQ.floatsArrays) qQ.setFloats(zQ, QQ.floatsArrays[zQ]);
-       for (zQ in QQ.colors3) {
-         const WQ = QQ.colors3[zQ];
-         qQ.setColor3(zQ, {
-           r: WQ[0],
-           g: WQ[1],
-           b: WQ[2]
-         })
+       ids() {
+         return [...this.members.keys()]
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L473-L479` → after: `L489-L491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L489-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L489-L491) · [Before (L473-L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L473-L479)

```diff
-       for (zQ in QQ.colors3Arrays) {
-         const WQ = QQ.colors3Arrays[zQ].reduce(((QQ, WQ, XQ) => (XQ % 3 === 0 ? QQ.push([WQ]) : QQ[QQ.length - 1].push(WQ), QQ)), []).map((QQ => ({
-           r: QQ[0],
-           g: QQ[1],
-           b: QQ[2]
-         })));
-         qQ.setColor3Array(zQ, WQ)
+       getName(MM) {
+         var rM, iM;
+         return null !== (rM = null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : void 0
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L481-L488` → after: `L493-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L493-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L493-L495) · [Before (L481-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L481-L488)

```diff
-       for (zQ in QQ.colors4) {
-         const WQ = QQ.colors4[zQ];
-         qQ.setColor4(zQ, {
-           r: WQ[0],
-           g: WQ[1],
-           b: WQ[2],
-           a: WQ[3]
-         })
+       getSettings(MM) {
+         var rM;
+         return null === (rM = this.members.get(MM)) || void 0 === rM ? void 0 : rM.settings
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L490-L497` → after: `L497-L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L497-L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L497-L499) · [Before (L490-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L490-L497)

```diff
-       for (zQ in QQ.colors4Arrays) {
-         const WQ = QQ.colors4Arrays[zQ].reduce(((QQ, WQ, XQ) => (XQ % 4 === 0 ? QQ.push([WQ]) : QQ[QQ.length - 1].push(WQ), QQ)), []).map((QQ => ({
-           r: QQ[0],
-           g: QQ[1],
-           b: QQ[2],
-           a: QQ[3]
-         })));
-         qQ.setColor4Array(zQ, WQ)
+       getSetting(MM, rM) {
+         var iM;
+         return null === (iM = this.members.get(MM)) || void 0 === iM ? void 0 : iM.settings[rM]
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/272.js` (Changed code · before: `L499-L521` → after: `L501-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccbR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-efb1002d2447cdbc91fdbe99322ae5f81660ebf3af78fd419eeff76fdd96dccb) · [After (L501-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/272.js#L501-L502) · [Before (L499-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/272.js#L499-L521)

```diff
-       for (zQ in QQ.vectors2) {
-         const WQ = QQ.vectors2[zQ];
-         qQ.setVector2(zQ, {
-           x: WQ[0],
-           y: WQ[1]
-         })
-       }
-       for (zQ in QQ.vectors3) {
-         const WQ = QQ.vectors3[zQ];
-         qQ.setVector3(zQ, {
-           x: WQ[0],
-           y: WQ[1],
-           z: WQ[2]
-         })
-       }
-       for (zQ in QQ.vectors4) {
- ... (7 more removed lines; see GitHub link above)
+       clear() {
+         this.members.clear()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/273.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/273.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L5` → after: `L4-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L4-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/273.js#L4-L167) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/273.js#L5)

```diff
-   40746: (QQ, WQ, XQ) => {
+   40515: (MM, rM, iM) => {
+     iM.d(rM, {
+       d: () => aM,
+       g: () => SM,
+       j: () => jM
+     });
+     var OM = iM(44);
+ 
+     function SM(MM) {
+       return PM(MM, nM)
+     }
+ 
+     function jM(MM) {
+       return PM(MM, QM)
+     }
+ 
+ ... (148 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L7-L24` → after: `L169-L5562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L169-L5562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/273.js#L169-L5562) · [Before (L7-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/273.js#L7-L24)

```diff
-       FirebaseError: () => wQ.d,
-       SDK_VERSION: () => wQ.g,
-       _DEFAULT_ENTRY_NAME: () => wQ.k,
-       rwQ: () => wQ.n,
-       _addOrOverwriteComponent: () => wQ.q,
-       _apps: () => wQ.r,
-       _clearComponents: () => wQ.t,
-       _components: () => wQ.x,
-       _getProvider: () => wQ.B,
-       _registerComponent: () => wQ.E,
-       _removeServiceInstance: () => wQ.G,
-       deleteApp: () => wQ.K,
-       getApp: () => wQ.O,
-       getApps: () => wQ.M,
-       initializeApp: () => wQ.S,
-       onLog: () => wQ.W,
- ... (2 more removed lines; see GitHub link above)
+       default: () => TS
+     });
+     const OM = "ore sell",
+       SM = "lumber ",
+       jM = "farm ",
+       aM = ["market", "demolition", "mining", "woodcutting", "farming"];
+     var PM = iM(44),
+       nM = iM(22),
+       QM = iM(39578),
+       zM = iM(37542);
+     const LM = "greenvilleBackpackView";
+     class mM {
+       constructor(MM) {
+         this.Tz = MM, this.view = null, this.arrivalToken = 0, this.showToken = 0
+       }
+       getView() {
+ ... (5378 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/273.js` (Changed code · before: `L26-L27` → after: `L5564-L5598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4R5564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-5bd5e300098ebc0290aa88d67d85edc4c84849190fe2e142ad179883a48d5ef4) · [After (L5564-L5598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/273.js#L5564-L5598) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/273.js#L26-L27)

```diff
-     var wQ = XQ(40755);
-     (0, wQ._)("firebase", "9.23.0", "app")
+     var OM = iM(9816);
+     const SM = {
+         Water: [63, 118, 228],
+         Lava: [232, 110, 30]
+       },
+       jM = [150, 150, 150],
+       aM = -2147483648;
+     class PM {
+       constructor(MM) {
+         this.averages = MM, this.byId = new Map
+       }
+       get(MM) {
+         var rM, iM, aM, PM, nM;
+         const QM = this.byId.get(MM);
+         if (void 0 !== QM) return QM;
+         const zM = null !== (rM = null === (iM = OM.k[MM]) || void 0 === iM ? void 0 : iM.name) && void 0 !== rM ? rM : "",
+ ... (19 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/274.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/274.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L5-L30` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/274.js#L4-L6) · [Before (L5-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/274.js#L5-L30)

```diff
-   40761: (QQ, WQ, XQ) => {
-     XQ.d(WQ, {
-       $: () => VQ,
-       C: () => JQ,
-       F: () => gQ,
-       I: () => rQ,
-       L: () => SQ,
-       N: () => jQ,
-       R: () => yQ,
-       T: () => HQ,
-       W: () => DQ,
-       Z: () => pQ,
-       _: () => BQ,
-       d: () => IQ,
-       db: () => iQ,
-       eb: () => hQ,
- ... (10 more removed lines; see GitHub link above)
+   40915: (MM, rM, iM) => {
+     iM.r(rM), iM.d(rM, {
+       playDocsSound: () => nM
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L32-L48` → after: `L8-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L8-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/274.js#L8-L36) · [Before (L32-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/274.js#L32-L48)

```diff
-     const wQ = function(QQ) {
-         const WQ = [];
-         let XQ = 0;
-         for (let wQ = 0; wQ < QQ.length; wQ++) {
-           let qQ = QQ.charCodeAt(wQ);
-           qQ < 128 ? WQ[XQ++] = qQ : qQ < 2048 ? (WQ[XQ++] = qQ >> 6 | 192, WQ[XQ++] = 63 & qQ | 128) : 55296 === (64512 & qQ) && wQ + 1 < QQ.length && 56320 === (64512 & QQ.charCodeAt(wQ + 1)) ? (qQ = 65536 + ((1023 & qQ) << 10) + (1023 & QQ.charCodeAt(++wQ)), WQ[XQ++] = qQ >> 1 … [truncated]
-         }
-         return WQ
-       },
-       qQ = {
-         byteToCharMap_: null,
-         charToByteMap_: null,
-         byteToCharMapWebSafe_: null,
-         charToByteMapWebSafe_: null,
-         ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
-         get ENCODED_VALS() {
- ... (1 more removed lines; see GitHub link above)
+     var OM = iM(5265),
+       SM = iM(37705),
+       jM = iM(1202),
+       aM = iM(37713);
+     const PM = new Map;
+ 
+     function nM(MM, rM, iM, nM, QM) {
+       let zM, LM = 0;
+       if (rM) zM = new OM.Howl({
+         src: [`${jM.clientSideServerUrls.staticUrl}/sounds/music/${MM}.mp3`],
+         html5: !0,
+         volume: iM
+       });
+       else {
+         const rM = (0, SM.r)(MM);
+         LM = rM.ms / 1e3, zM = PM.get(MM), zM || (zM = new OM.Howl({
+ ... (13 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L50-L51` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/274.js#L38-L39) · [Before (L50-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/274.js#L50-L51)

```diff
-         get ENCODED_VALS_WEBSAFE() {
-           return this.ENCODED_VALS_BASE + "-_."
+         dM = () => {
+           QM.onPlay(HM())
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L53-L71` → after: `L41-L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L41-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/274.js#L41-L42) · [Before (L53-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/274.js#L53-L71)

```diff
-         HAS_NATIVE_SUPPORT: "function" === typeof atob,
-         encodeByteArray(QQ, WQ) {
-           if (!Array.isArray(QQ)) throw Error("encodeByteArray takes an array as a parameter");
-           this.init_();
-           const XQ = WQ ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
-             wQ = [];
-           for (let qQ = 0; qQ < QQ.length; qQ += 3) {
-             const WQ = QQ[qQ],
-               TQ = qQ + 1 < QQ.length,
-               zQ = TQ ? QQ[qQ + 1] : 0,
-               sQ = qQ + 2 < QQ.length,
-               FQ = sQ ? QQ[qQ + 2] : 0,
-               PQ = WQ >> 2,
-               gQ = (3 & WQ) << 4 | zQ >> 4;
-             let JQ = (15 & zQ) << 2 | FQ >> 6,
-               rQ = 63 & FQ;
- ... (3 more removed lines; see GitHub link above)
+         yM = () => {
+           JM(!1)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L73-L74` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/274.js#L44-L45) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/274.js#L73-L74)

```diff
-         encodeString(QQ, WQ) {
-           return this.HAS_NATIVE_SUPPORT && !WQ ? btoa(QQ) : this.encodeByteArray(wQ(QQ), WQ)
+         lM = (rM, iM) => {
+           console.error(`Could not play docs sound ${MM}`, iM), JM(!0)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L76-L97` → after: `L47-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L47-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/274.js#L47-L52) · [Before (L76-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/274.js#L76-L97)

```diff
-         decodeString(QQ, WQ) {
-           return this.HAS_NATIVE_SUPPORT && !WQ ? atob(QQ) : function(QQ) {
-             const WQ = [];
-             let XQ = 0,
-               wQ = 0;
-             for (; XQ < QQ.length;) {
-               const qQ = QQ[XQ++];
-               if (qQ < 128) WQ[wQ++] = String.fromCharCode(qQ);
-               else if (qQ > 191 && qQ < 224) {
-                 const TQ = QQ[XQ++];
-                 WQ[wQ++] = String.fromCharCode((31 & qQ) << 6 | 63 & TQ)
-               } else if (qQ > 239 && qQ < 365) {
-                 const TQ = ((7 & qQ) << 18 | (63 & QQ[XQ++]) << 12 | (63 & QQ[XQ++]) << 6 | 63 & QQ[XQ++]) - 65536;
-                 WQ[wQ++] = String.fromCharCode(55296 + (TQ >> 10)), WQ[wQ++] = String.fromCharCode(56320 + (1023 & TQ))
-               } else {
-                 const TQ = QQ[XQ++],
- ... (6 more removed lines; see GitHub link above)
+         EM = (iM, OM) => {
+           rM || PM.get(MM) !== zM || (PM.delete(MM), zM.unload()), lM(iM, OM)
+         };
+       return zM.on("play", dM, mM), zM.once("end", yM, mM), zM.once("loaderror", EM), zM.once("playerror", lM, mM), {
+         pause: () => {
+           zM.pause(mM)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L99-L120` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/274.js#L54-L55) · [Before (L99-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/274.js#L99-L120)

```diff
-         decodeStringToByteArray(QQ, WQ) {
-           this.init_();
-           const XQ = WQ ? this.charToByteMapWebSafe_ : this.charToByteMap_,
-             wQ = [];
-           for (let qQ = 0; qQ < QQ.length;) {
-             const WQ = XQ[QQ.charAt(qQ++)],
-               zQ = qQ < QQ.length ? XQ[QQ.charAt(qQ)] : 0;
-             ++qQ;
-             const sQ = qQ < QQ.length ? XQ[QQ.charAt(qQ)] : 64;
-             ++qQ;
-             const FQ = qQ < QQ.length ? XQ[QQ.charAt(qQ)] : 64;
-             if (++qQ, null == WQ || null == zQ || null == sQ || null == FQ) throw new TQ;
-             const PQ = WQ << 2 | zQ >> 4;
-             if (wQ.push(PQ), 64 !== sQ) {
-               const QQ = zQ << 4 & 240 | sQ >> 2;
-               if (wQ.push(QQ), 64 !== FQ) {
- ... (6 more removed lines; see GitHub link above)
+         resume: () => {
+           zM.play(mM)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/274.js` (Changed code · before: `L122-L1230` → after: `L57-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-d66dedf717a02b372c9a59c735ee5492229716727c7e9a1a382bc36bd13c06d0) · [After (L57-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/274.js#L57-L71) · [Before (L122-L1230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/274.js#L122-L1230)

```diff
-         init_() {
-           if (!this.byteToCharMap_) {
-             this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
-             for (let QQ = 0; QQ < this.ENCODED_VALS.length; QQ++) this.byteToCharMap_[QQ] = this.ENCODED_VALS.charAt(QQ), this.charToByteMap_[this.byteToCharMap_[QQ]] = QQ, this.byteToCharMapWebSafe_[QQ] = this.ENCODED_VALS_WEBSAFE.charAt(QQ), this.charToByteMapWebSafe_[this.byte … [truncated]
-           }
-         }
-       };
-     class TQ extends Error {
-       constructor() {
-         super(...arguments), this.name = "DecodeBase64StringError"
-       }
-     }
-     const zQ = function(QQ) {
-         return function(QQ) {
-           const WQ = wQ(QQ);
-           return qQ.encodeByteArray(WQ, !0)
- ... (1093 more removed lines; see GitHub link above)
+         seek: MM => {
+           const rM = HM(),
+             iM = Math.max(MM, 0);
+           zM.seek(rM > 0 ? Math.min(iM, rM) : iM, mM)
+         },
+         XE: () => {
+           const MM = zM.seek(mM);
+           return "number" === typeof MM ? Math.max(0, MM) : 0
+         },
+         getDuration: HM,
+         setVolume: MM => {
+           zM.volume(MM, mM)
+         },
+         stop: () => {
+           hM || (zM.stop(mM), JM(!1))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/275.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/275.js` (32 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896)

#### 1. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L5` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L4) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L5)

```diff
-   40773: (QQ, WQ, XQ) => {
+   40928: (MM, rM, iM) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L7-L18` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L6) · [Before (L7-L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L7-L18)

```diff
-       getAnalytics: () => YW,
-       getGoogleAnalyticsClientId: () => KW,
-       initializeAnalytics: () => NW,
-       isSupported: () => ZW,
-       logEvent: () => XX,
-       setAnalyticsCollectionEnabled: () => QX,
-       setConsent: () => wX,
-       setCurrentScreen: () => OW,
-       setDefaultEventParameters: () => WX,
-       setUserId: () => mW,
-       setUserProperties: () => MW,
-       settings: () => nW
+       default: () => IM
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L20-L129` → after: `L8-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L8-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L8-L33) · [Before (L20-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L20-L129)

```diff
-     var wQ = XQ(40755),
-       qQ = XQ(40770),
-       TQ = XQ(40761),
-       zQ = XQ(40758);
-     let sQ, FQ;
-     const PQ = new WeakMap,
-       gQ = new WeakMap,
-       JQ = new WeakMap,
-       rQ = new WeakMap,
-       IQ = new WeakMap;
-     let jQ = {
-       get(QQ, WQ, XQ) {
-         if (QQ instanceof IDBTransaction) {
-           if ("done" === WQ) return gQ.get(QQ);
-           if ("objectStoreNames" === WQ) return QQ.objectStoreNames || JQ.get(QQ);
-           if ("store" === WQ) return XQ.objectStoreNames[1] ? void 0 : XQ.objectStore(XQ.objectStoreNames[0])
- ... (94 more removed lines; see GitHub link above)
+     iM(6922);
+     var OM = iM(44),
+       SM = iM(40931),
+       jM = iM(41190),
+       aM = iM(41313),
+       PM = iM(41358),
+       nM = iM(41374),
+       QM = iM(38167),
+       zM = iM(38034),
+       LM = iM(41495),
+       mM = iM(41543),
+       HM = (iM(41564), iM(1229)),
+       hM = iM(181),
+       JM = iM(1188),
+       dM = iM(19),
+       yM = iM(3047),
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L131-L136` → after: `L35-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L35-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L35-L36) · [Before (L131-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L131-L136)

```diff
-         "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
-         "not-registered": "Firebase Installation is not registered.",
-         "installation-not-found": "Firebase Installation not found.",
-         "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
-         "app-offline": "Could not process request. Application offline.",
-         "delete-pending-registration": "Can't delete installation while there is a pending registration request."
+         ArrowLeft: -1,
+         ArrowRight: 1
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L138-L142` → after: `L38-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L38-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L38-L66) · [Before (L138-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L138-L142)

```diff
-       cQ = new TQ.h("installations", "Installations", iQ);
- 
-     function AQ(QQ) {
-       return QQ instanceof TQ.k && QQ.code.includes("request-failed")
-     }
+       RM = "ArrowUp",
+       pM = new Set([...Object.keys(uM), RM, "ArrowDown"]),
+       WM = 32,
+       sM = 1,
+       DM = 10,
+       kM = "F4",
+       ZM = "Period",
+       oM = Math.PI / 2 - .001,
+       fM = Math.PI / 6,
+       YM = Math.PI / 6,
+       NM = 1.08,
+       AM = [{
+         name: "X",
+         direction: [1, 0, 0],
+         colour: "#e5534b"
+       }, {
+ ... (13 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L146` → after: `L70-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L70-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L70-L80) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L146)

```diff
-         projectId: WQ
+         heatmap: rM,
+         scale: iM,
+         fullyOpaqueFrom: sM,
+         bounds: fM,
+         fitBounds: YM,
+         schematic: NM,
+         controls: AM,
+         onStepTime: xM,
+         onShowAllTime: vM,
+         onTogglePlaying: FM,
+         getReadout: XM = null
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L148-L156` → after: `L82-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L82-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L82-L130) · [Before (L148-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L148-L156)

```diff
-       return `https://firebaseinstallations.googleapis.com/v1/projects/${WQ}/installations`
-     }
- 
-     function EQ(QQ) {
-       return {
-         token: QQ.token,
-         requestStatus: 2,
-         expiresIn: (WQ = QQ.expiresIn, Number(WQ.replace("s", "000"))),
-         creationTime: Date.now()
+       const {
+         t: IM
+       } = (0, JM.A)(), {
+         clientEscMenuOptions: jr
+       } = (0, dM.m)(["clientEscMenuOptions"]), nr = (0, OM.useRef)(null), Qr = (0, OM.useRef)(null), zr = (0, OM.useRef)(null), Lr = (0, yM.d)(nr), [mr, Hr] = (0, OM.useState)(!1), [hr, Jr] = (0, OM.useState)(!1), [dr, yr] = (0, OM.useState)(!0), lr = (0, OM.useRef)(!1), [Er, Ur] … [truncated]
+       Rr[0] === ur[0] && Rr[1] === ur[1] && Rr[2] === ur[2] || (pr(ur), null !== tr && gr({
+         ...tr,
+         position: ar(tr.position, ar(Rr, Pr(ur, -1)))
+       }));
+       const Wr = (0, OM.useMemo)((() => function(MM) {
+           return [MM.max[0] - MM.min[0] + 1, MM.max[1] - MM.min[1] + 1, MM.max[2] - MM.min[2] + 1]
+         }(fM)), [fM]),
+         sr = (0, OM.useMemo)((() => function(MM, rM) {
+           const iM = [],
+             OM = [];
+           for (const [SM, jM] of Object.entries(MM.frequencies)) {
+ ... (33 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L158-L310` → after: `L132-L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L132-L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L132-L144) · [Before (L158-L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L158-L310)

```diff
-       var WQ
-     }
-     async function CQ(QQ, WQ) {
-       const XQ = (await WQ.json()).error;
-       return cQ.create("request-failed", {
-         requestName: QQ,
-         serverCode: XQ.code,
-         serverMessage: XQ.message,
-         serverStatus: XQ.status
-       })
-     }
- 
-     function uQ(QQ) {
-       let {
-         apiKey: WQ
-       } = QQ;
- ... (137 more removed lines; see GitHub link above)
+       const Nr = (0, OM.useMemo)((() => {
+           if (!Gr) return null;
+           const MM = (MM, iM, OM) => {
+               var SM, jM, aM;
+               return null !== (SM = null === (jM = rM.frequencies[MM + ur[0]]) || void 0 === jM || null === (aM = jM[iM + ur[1]]) || void 0 === aM ? void 0 : aM[OM + ur[2]]) && void 0 !== SM ? SM : 0
+             },
+             OM = function(MM, rM, iM, OM) {
+               let SM = 0,
+                 jM = 1 / 0;
+               for (const LM of [0, 1, 2]) {
+                 if (0 === rM[LM]) {
+                   if (MM[LM] < 0 || MM[LM] > iM[LM]) return null;
+                   continue
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L313-L366` → after: `L167-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L167-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L167-L183) · [Before (L313-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L313-L366)

```diff
-               const XQ = {
-                   fid: WQ.fid,
-                   registrationStatus: 1,
-                   registrationTime: Date.now()
-                 },
-                 wQ = async function(QQ, WQ) {
-                   try {
-                     const XQ = await async function(QQ, WQ) {
-                       let {
-                         appConfig: XQ,
-                         heartbeatServiceProvider: wQ
-                       } = QQ, {
-                         fid: qQ
-                       } = WQ;
-                       const TQ = RQ(XQ),
-                         zQ = uQ(XQ),
- ... (38 more removed lines; see GitHub link above)
+             }(fr.position, Mr(fr), Wr, ((rM, OM, SM) => (0, UM.x)(MM(rM, OM, SM), iM, sM)));
+           return null === OM ? null : {
+             x: OM[0] + ur[0],
+             y: OM[1] + ur[1],
+             z: OM[2] + ur[2],
+             value: MM(OM[0], OM[1], OM[2])
+           }
+         }), [Gr, rM, ur, fr, Wr, iM, sM]),
+         {
+           keyHandlers: Ar
+         } = (0, GM.h)({
+           isEnabled: Gr,
+           claimedKeyCodes: pM,
+           Wm: MM => {
+             gr((rM => function(MM, rM) {
+               const iM = [Math.sin(MM.heading), 0, Math.cos(MM.heading)],
+ ... (1 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L368-L369` → after: `L185-L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L185-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L185-L186) · [Before (L368-L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L368-L369)

```diff
-                 installationEntry: XQ,
-                 registrationPromise: wQ
+                 ...MM,
+                 position: ar(MM.position, OM)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L372-L376` → after: `L247-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L247-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L247-L326) · [Before (L372-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L372-L376)

```diff
-             return 1 === WQ.registrationStatus ? {
-               installationEntry: WQ,
-               registrationPromise: wW(QQ)
-             } : {
-               installationEntry: WQ
+           }(MM, Yr.current.fieldOfView)
+         } catch (iM) {
+           return console.error("Failed to start the 3D heatmap", iM), void Hr(!0)
+         }
+         return zr.current = rM, rM.engine.runRenderLoop((() => {
+           const MM = rM.camera;
+           MM.fov !== rM.targetFieldOfView && (MM.fov += (rM.targetFieldOfView - MM.fov) * (MM.fov > rM.targetFieldOfView ? .3 : .2), Math.abs(rM.targetFieldOfView - MM.fov) < 5e-4 && (MM.fov = rM.targetFieldOfView), rM.needsRender = !0), rM.needsRender && (rM.YJ.render(), rM.need … [truncated]
+         })), () => {
+           zr.current = null, rM.engine.dispose()
+         }
+       }), []), (0, OM.useEffect)((() => {
+         const MM = Qr.current;
+         if (!MM) return;
+         const rM = () => {
+             lr.current = !1, Jr(document.pointerLockElement === MM)
+           },
+ ... (64 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L378-L405` → after: `L328-L447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L328-L447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L328-L447) · [Before (L378-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L378-L405)

```diff
-           }(QQ, wQ);
-         return WQ = qQ.registrationPromise, qQ.installationEntry
-       }));
-       return "" === XQ.fid ? {
-         installationEntry: await WQ
-       } : {
-         installationEntry: XQ,
-         registrationPromise: WQ
-       }
-     }
-     async function wW(QQ) {
-       let WQ = await qW(QQ.appConfig);
-       for (; 1 === WQ.registrationStatus;) await fQ(100), WQ = await qW(QQ.appConfig);
-       if (0 === WQ.registrationStatus) {
-         const {
-           installationEntry: WQ,
- ... (12 more removed lines; see GitHub link above)
+           }
+           TM(MM.schematicBlocks, Float32Array.from(OM), Float32Array.from(SM), SM.length / 4), MM.needsRender = !0
+         }(MM, NM, fM)
+       }), [NM, fM]), (0, OM.useEffect)((() => {
+         const MM = zr.current;
+         null !== MM && null !== MM.chunkGrid && (MM.chunkGrid.isVisible = br, MM.needsRender = !0)
+       }), [br, fM]), (0, OM.useEffect)((() => {
+         const MM = zr.current;
+         null !== MM && function(MM, rM, iM) {
+           const {
+             camera: OM
+           } = MM;
+           OM.position.set(rM.position[0], rM.position[1], rM.position[2]), OM.rotation.set(rM.pitch, rM.heading, 0);
+           const SM = (DM + 1) * hM.f.HL * Math.sqrt(3);
+           OM.maxZ = Math.max(SM, Math.hypot(...ar(rM.position, Pr(Sr({
+             min: [0, 0, 0],
+ ... (104 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L417-L418` → after: `L452-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L452-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L452-L456) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L417-L418)

```diff
-         appConfig: XQ,
-         heartbeatServiceProvider: wQ
+         heading: rM,
+         pitch: iM,
+         onViewFrom: SM,
+         onTurn: jM,
+         onFlip: aM
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L420-L437` → after: `L458-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L458-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L458-L490) · [Before (L420-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L420-L437)

```diff
-       const qQ = function(QQ, WQ) {
-           let {
-             fid: XQ
-           } = WQ;
-           return `${RQ(QQ)}/${XQ}/authTokens:generate`
-         }(XQ, WQ),
-         TQ = LQ(XQ, WQ),
-         zQ = wQ.getImmediate({
-           optional: !0
-         });
-       if (zQ) {
-         const QQ = await zQ.getHeartbeatsHeader();
-         QQ && TQ.append("x-firebase-client", QQ)
-       }
-       const sQ = {
-           installation: {
- ... (2 more removed lines; see GitHub link above)
+       const {
+         t: PM
+       } = (0, JM.A)(), nM = (0, OM.useRef)(null), QM = Mr({
+         heading: rM,
+         pitch: iM
+       }), zM = rr(rM), LM = Qr(QM, zM), mM = xM + vM + 2, HM = AM.flatMap((MM => [1, -1].map((rM => {
+         const iM = Pr(MM.direction, rM);
+         return {
+           ...MM,
+           sign: rM,
+           direction: iM,
+           endX: mM + nr(iM, zM) * xM,
+           endY: mM - nr(iM, LM) * xM,
+           depth: nr(iM, QM)
+         }
+       })))).sort(((MM, rM) => rM.depth - MM.depth));
+ ... (17 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L440-L443` → after: `L493-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L493-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L493-L498) · [Before (L440-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L440-L443)

```diff
-         FQ = {
-           method: "POST",
-           headers: TQ,
-           body: JSON.stringify(sQ)
+         onPointerMove: MM => {
+           const rM = nM.current;
+           if (null === rM || rM.pointerId !== MM.pointerId) return;
+           const iM = MM.clientX - rM.x,
+             OM = MM.clientY - rM.y;
+           rM.x = MM.clientX, rM.y = MM.clientY, rM.travel += Math.abs(iM) + Math.abs(OM), rM.travel >= XM && jM(iM, OM)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L445-L533` → after: `L500-L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L500-L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L500-L555) · [Before (L445-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L445-L533)

```diff
-         PQ = await kQ((() => fetch(qQ, FQ)));
-       if (PQ.ok) {
-         return EQ(await PQ.json())
-       }
-       throw await CQ("Generate Auth Token", PQ)
-     }
-     async function sW(QQ) {
-       let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-       const wQ = await WW(QQ.appConfig, (wQ => {
-         if (!PW(wQ)) throw cQ.create("not-registered");
-         const qQ = wQ.authToken;
-         if (!XQ && function(QQ) {
-             return 2 === QQ.requestStatus && ! function(QQ) {
-               const WQ = Date.now();
-               return WQ < QQ.creationTime || QQ.creationTime + QQ.expiresIn < WQ + hQ
-             }(QQ)
- ... (73 more removed lines; see GitHub link above)
+         onPointerUp: MM => {
+           const rM = nM.current;
+           nM.current = null, null === rM || rM.pointerId !== MM.pointerId || rM.travel >= XM || (null !== rM.side ? SM(rM.side) : rM.isOnMiddle && aM())
+         },
+         onPointerCancel: () => {
+           nM.current = null
+         },
+         children: [HM.map(((MM, rM) => {
+           const iM = MM.sign > 0;
+           return (0, eM.jsxs)("g", {
+             children: [(0, eM.jsx)("line", {
+               x1: mM,
+               y1: mM,
+               x2: MM.endX,
+               y2: MM.endY,
+               stroke: MM.colour,
+ ... (40 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L595-L617` → after: `L560-L582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L560-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L560-L582) · [Before (L595-L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L595-L617)

```diff
-       if (!QQ.startsWith(yW)) {
-         const WQ = pW.create("invalid-gtag-resource", {
-           gtagURL: QQ
-         });
-         return VW.warn(WQ.message), ""
-       }
-       return QQ
-     }
- 
-     function UW(QQ) {
-       return Promise.all(QQ.map((QQ => QQ.catch((QQ => QQ)))))
-     }
- 
-     function bW(QQ, WQ) {
-       const XQ = function(QQ, WQ) {
-           let XQ;
- ... (7 more removed lines; see GitHub link above)
+       var rM, iM, OM;
+       const {
+         chunkGridOrigin: SM,
+         camera: jM
+       } = MM;
+       if (null === SM) return;
+       const aM = [jM.position.x, jM.position.y, jM.position.z],
+         PM = [0, 2].map((MM => Math.floor((aM[MM] + SM[MM]) / hM.f.HL))),
+         nM = MM.chunkGridCentre;
+       if (null !== nM && nM.every(((MM, rM) => MM === PM[rM]))) return;
+       const LM = null === (rM = null === (iM = MM.chunkGrid) || void 0 === iM ? void 0 : iM.isVisible) || void 0 === rM || rM;
+       null === (OM = MM.chunkGrid) || void 0 === OM || OM.dispose();
+       const [HM, JM] = [0, 2].map(((MM, rM) => {
+         const iM = [];
+         for (let OM = PM[rM] - DM; OM <= PM[rM] + DM + 1; OM++) iM.push(OM * hM.f.HL - SM[MM]);
+         return iM
+ ... (7 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L621-L674` → after: `L586-L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L586-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L586-L590) · [Before (L621-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L621-L674)

```diff
-       return async function(qQ) {
-         try {
-           for (var TQ = arguments.length, zQ = new Array(TQ > 1 ? TQ - 1 : 0), sQ = 1; sQ < TQ; sQ++) zQ[sQ - 1] = arguments[sQ];
-           if ("event" === qQ) {
-             const [wQ, qQ] = zQ;
-             await async function(QQ, WQ, XQ, wQ, qQ) {
-               try {
-                 let TQ = [];
-                 if (qQ && qQ.send_to) {
-                   let QQ = qQ.send_to;
-                   Array.isArray(QQ) || (QQ = [QQ]);
-                   const wQ = await UW(XQ);
-                   for (const XQ of QQ) {
-                     const QQ = wQ.find((QQ => QQ.measurementId === XQ)),
-                       qQ = QQ && WQ[QQ.appId];
-                     if (!qQ) {
- ... (38 more removed lines; see GitHub link above)
+       MM.v_("matrix", function(MM, rM) {
+         const iM = new Float32Array(16 * rM);
+         for (let OM = 0; OM < rM; OM++) {
+           const rM = 16 * OM;
+           iM[rM] = 1, iM[rM + 5] = 1, iM[rM + 10] = 1, iM[rM + 12] = MM[3 * OM], iM[rM + 13] = MM[3 * OM + 1], iM[rM + 14] = MM[3 * OM + 2], iM[rM + 15] = 1
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L676` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L592-L593) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L676)

```diff
-       }
+         return iM
+       }(rM, OM), 16, !0), MM.v_("color", iM, 4, !0), MM.isVisible = OM > 0
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L705-L802` → after: `L598-L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L598-L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L598-L609) · [Before (L705-L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L705-L802)

```diff
-         appId: wQ,
-         apiKey: qQ,
-         measurementId: TQ
-       } = QQ.options;
-       if (!wQ) throw pW.create("no-app-id");
-       if (!qQ) {
-         if (TQ) return {
-           measurementId: TQ,
-           appId: wQ
-         };
-         throw pW.create("no-api-key")
-       }
-       const zQ = WQ.getThrottleMetadata(wQ) || {
-           backoffCount: 0,
-           throttleEndTimeMillis: Date.now()
-         },
- ... (82 more removed lines; see GitHub link above)
+         camera: rM,
+         translucent: iM
+       } = MM, OM = [rM.position.x, rM.position.y, rM.position.z], SM = MM.translucentSortedFrom;
+       if (null !== SM && Math.hypot(OM[0] - SM[0], OM[1] - SM[1], OM[2] - SM[2]) < sM) return;
+       MM.translucentSortedFrom = OM;
+       const jM = new Float64Array(iM.count),
+         aM = new Uint32Array(iM.count);
+       for (let QM = 0; QM < iM.count; QM++) {
+         const MM = iM.Sd[3 * QM] - OM[0],
+           rM = iM.Sd[3 * QM + 1] - OM[1],
+           SM = iM.Sd[3 * QM + 2] - OM[2];
+         jM[QM] = MM * MM + rM * rM + SM * SM, aM[QM] = QM
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L818-L819` → after: `L619-L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L619-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L619-L624) · [Before (L818-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L818-L819)

```diff
-     function AW(QQ) {
-       cW = QQ
+     function cM(MM, rM) {
+       const iM = (iM, OM, SM) => new zM.sh(0 === iM ? MM[0] : rM[0], 0 === OM ? MM[1] : rM[1], 0 === SM ? MM[2] : rM[2]),
+         OM = [];
+       for (const SM of [0, 1])
+         for (const MM of [0, 1]) OM.push([iM(0, SM, MM), iM(1, SM, MM)], [iM(SM, 0, MM), iM(SM, 1, MM)], [iM(SM, MM, 0), iM(SM, MM, 1)]);
+       return OM
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L823-L859` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L628) · [Before (L823-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L823-L859)

```diff
-       iW = QQ
-     }
-     async function EW(QQ, WQ, XQ, wQ, qQ, zQ, sQ) {
-       var FQ;
-       const PQ = aW(QQ);
-       PQ.then((WQ => {
-         XQ[WQ.measurementId] = WQ.appId, QQ.options.measurementId && WQ.measurementId !== QQ.options.measurementId && VW.warn(`The measurement ID in the local Firebase config (${QQ.options.measurementId}) does not match the measurement ID fetched from the server (${WQ.measurement … [truncated]
-       })).catch((QQ => VW.error(QQ))), WQ.push(PQ);
-       const gQ = async function() {
-         if (!(0, TQ.Z)()) return VW.warn(pW.create("indexeddb-unavailable", {
-           errorInfo: "IndexedDB is not available in this environment."
-         }).message), !1;
-         try {
-           await (0, TQ.fb)()
-         } catch (QQ) {
-           return VW.warn(pW.create("indexeddb-unavailable", {
- ... (21 more removed lines; see GitHub link above)
+       return [Math.sin(MM.heading) * Math.cos(MM.pitch), -Math.sin(MM.pitch), Math.cos(MM.heading) * Math.cos(MM.pitch)]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L869-L870` → after: `L632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L632) · [Before (L869-L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L869-L870)

```diff
-       if (eW) throw pW.create("already-initialized");
-       QQ.dataLayerName && (tW = QQ.dataLayerName), QQ.gtagName && (oW = QQ.gtagName)
+       return [Math.cos(MM), 0, -Math.sin(MM)]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L874-L908` → after: `L636-L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L636-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L636-L652) · [Before (L874-L908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L874-L908)

```diff
-       ! function() {
-         const QQ = [];
-         if ((0, TQ.R)() && QQ.push("This is a browser extension environment."), (0, TQ.n)() || QQ.push("Cookies are not available."), QQ.length > 0) {
-           const WQ = QQ.map(((QQ, WQ) => `(${WQ+1}) ${QQ}`)).join(" "),
-             XQ = pW.create("invalid-analytics-context", {
-               errorInfo: WQ
-             });
-           VW.warn(XQ.message)
-         }
-       }();
-       const wQ = QQ.options.appId;
-       if (!wQ) throw pW.create("no-app-id");
-       if (!QQ.options.apiKey) {
-         if (!QQ.options.measurementId) throw pW.create("no-api-key");
-         VW.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${QQ.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
-       }
- ... (19 more removed lines; see GitHub link above)
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
+         heading: fM,
+         pitch: YM
+       };
+       const SM = [MM.max[0] - MM.min[0], MM.max[1] - MM.min[1], MM.max[2] - MM.min[2]],
+         jM = Mr(OM),
+         aM = rr(OM.heading),
+         PM = Qr(jM, aM),
+         nM = Math.tan(iM / 2),
+         QM = nM * rM;
+       let zM = 1;
+       for (const LM of [-SM[0] / 2, SM[0] / 2])
+         for (const MM of [-SM[1] / 2, SM[1] / 2])
+           for (const rM of [-SM[2] / 2, SM[2] / 2]) {
+             const iM = [LM, MM, rM],
+               OM = nr(iM, jM);
+ ... (1 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L910-L943` → after: `L654-L657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L654-L657) · [Before (L910-L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L910-L943)

```diff
-         }(uW, LW, kW, tW, oW);
-         SW = QQ, fW = WQ, eW = !0
-       }
-       uW[wQ] = EW(QQ, LW, kW, WQ, fW, tW, XQ);
-       return new CW(QQ)
-     }
- 
-     function YW() {
-       let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.O)();
-       QQ = (0, TQ.L)(QQ);
-       const WQ = (0, wQ.B)(QQ, BW);
-       return WQ.isInitialized() ? WQ.getImmediate() : NW(QQ)
-     }
- 
-     function NW(QQ) {
-       let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
- ... (18 more removed lines; see GitHub link above)
+       return {
+         position: ar([MM.min[0] + SM[0] / 2, MM.min[1] + SM[1] / 2, MM.min[2] + SM[2] / 2], Pr(jM, -zM * NM)),
+         heading: OM.heading,
+         pitch: OM.pitch
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L948-L966` → after: `L662-L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R662) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L662-L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L662-L670) · [Before (L948-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L948-L966)

```diff
-       QQ = (0, TQ.L)(QQ), async function(QQ, WQ, XQ, wQ) {
-         if (wQ && wQ.global) return QQ("set", {
-           screen_name: XQ
-         }), Promise.resolve();
-         QQ("config", await WQ, {
-           update: !0,
-           screen_name: XQ
-         })
-       }(SW, uW[QQ.app.options.appId], WQ, XQ).catch((QQ => VW.error(QQ)))
-     }
-     async function KW(QQ) {
-       return QQ = (0, TQ.L)(QQ), async function(QQ, WQ) {
-         const XQ = await WQ;
-         return new Promise(((WQ, wQ) => {
-           QQ("get", XQ, "client_id", (QQ => {
-             QQ || wQ(pW.create("no-client-id")), WQ(QQ)
- ... (3 more removed lines; see GitHub link above)
+       const OM = jr(MM),
+         SM = jr(iM),
+         jM = ar(MM.position, Pr(rM, -1)),
+         aM = [0, 1, 2].reduce(((MM, rM) => ar(MM, Pr(SM[rM], nr(jM, OM[rM])))), [0, 0, 0]);
+       return {
+         position: ar(rM, aM),
+         heading: iM.heading,
+         pitch: iM.pitch
+       }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L969-L978` → after: `L673-L674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L673-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L673-L674) · [Before (L969-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L969-L978)

```diff
-     function mW(QQ, WQ, XQ) {
-       QQ = (0, TQ.L)(QQ), async function(QQ, WQ, XQ, wQ) {
-         if (wQ && wQ.global) return QQ("set", {
-           user_id: XQ
-         }), Promise.resolve();
-         QQ("config", await WQ, {
-           update: !0,
-           user_id: XQ
-         })
-       }(SW, uW[QQ.app.options.appId], WQ, XQ).catch((QQ => VW.error(QQ)))
+     function Sr(MM) {
+       return Pr(ar(MM.min, MM.max), .5)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L981-L992` → after: `L677-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L677-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L677-L680) · [Before (L981-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L981-L992)

```diff
-     function MW(QQ, WQ, XQ) {
-       QQ = (0, TQ.L)(QQ), async function(QQ, WQ, XQ, wQ) {
-         if (wQ && wQ.global) {
-           const WQ = {};
-           for (const QQ of Object.keys(XQ)) WQ[`user_properties.${QQ}`] = XQ[QQ];
-           return QQ("set", WQ), Promise.resolve()
-         }
-         QQ("config", await WQ, {
-           update: !0,
-           user_properties: XQ
-         })
-       }(SW, uW[QQ.app.options.appId], WQ, XQ).catch((QQ => VW.error(QQ)))
+     function jr(MM) {
+       const rM = Mr(MM),
+         iM = rr(MM.heading);
+       return [rM, iM, Qr(rM, iM)]
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L996-L999` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L684) · [Before (L996-L999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L996-L999)

```diff
-       QQ = (0, TQ.L)(QQ), async function(QQ, WQ) {
-         const XQ = await QQ;
-         window[`ga-disable-${XQ}`] = !WQ
-       }(uW[QQ.app.options.appId], WQ).catch((QQ => VW.error(QQ)))
+       return [MM[0] + rM[0], MM[1] + rM[1], MM[2] + rM[2]]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1002-L1003` → after: `L687-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L687-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L687-L688) · [Before (L1002-L1003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L1002-L1003)

```diff
-     function WX(QQ) {
-       SW ? SW("set", QQ) : RW(QQ)
+     function Pr(MM, rM) {
+       return [MM[0] * rM, MM[1] * rM, MM[2] * rM]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1006-L1015` → after: `L691-L692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L691-L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L691-L692) · [Before (L1006-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L1006-L1015)

```diff
-     function XX(QQ, WQ, XQ, wQ) {
-       QQ = (0, TQ.L)(QQ), async function(QQ, WQ, XQ, wQ, qQ) {
-         if (qQ && qQ.global) QQ("event", XQ, wQ);
-         else {
-           const qQ = await WQ;
-           QQ("event", XQ, Object.assign(Object.assign({}, wQ), {
-             send_to: qQ
-           }))
-         }
-       }(SW, uW[QQ.app.options.appId], WQ, XQ, wQ).catch((QQ => VW.error(QQ)))
+     function nr(MM, rM) {
+       return MM[0] * rM[0] + MM[1] * rM[1] + MM[2] * rM[2]
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/275.js` (Changed code · before: `L1018-L1019` → after: `L695-L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-4d32e92e4df15562c654f3ab6df4115ce5b5fcb4db9261b3285294c3b05ff896) · [After (L695-L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/275.js#L695-L696) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/275.js#L1018-L1019)

```diff
-     function wX(QQ) {
-       SW ? SW("consent", "update", QQ) : AW(QQ)
+     function Qr(MM, rM) {
+       return [MM[1] * rM[2] - MM[2] * rM[1], MM[2] * rM[0] - MM[0] * rM[2], MM[0] * rM[1] - MM[1] * rM[0]]
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/276.js` (8104he.3820eae0 → fo1voe.f743fbcf)

- **File**: `bundles/preprod.bloxd.io/chunks/js/276.js` (223 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651)

#### 1. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L5-L99` → after: `L4-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L4-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L4-L143) · [Before (L5-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L5-L99)

```diff
-     40779: (QQ, WQ, XQ) => {
-         XQ.r(WQ), XQ.d(WQ, {
-           ActionCodeOperation: () => rQ,
-           ActionCodeURL: () => KW,
-           AuthCredential: () => kW,
-           AuthErrorCodes: () => VQ,
-           EmailAuthCredential: () => xW,
-           EmailAuthProvider: () => MW,
-           FacebookAuthProvider: () => wX,
-           FactorId: () => FQ,
-           GithubAuthProvider: () => TX,
-           GoogleAuthProvider: () => qX,
-           OAuthCredential: () => NW,
-           OAuthProvider: () => XX,
-           OperationType: () => JQ,
-           PhoneAuthCredential: () => OW,
- ... (79 more removed lines; see GitHub link above)
+   41323: (MM, rM, iM) => {
+     iM.d(rM, {
+       b: () => dM,
+       d: () => EM
+     });
+     var OM = iM(41099),
+       SM = iM(41105),
+       jM = iM(41213),
+       aM = iM(38068),
+       PM = iM(38040),
+       nM = iM(41328),
+       QM = iM(39711),
+       zM = iM(38085),
+       LM = iM(40990),
+       mM = iM(39078),
+       HM = iM(38740),
+ ... (124 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L102-L145` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L146-L148) · [Before (L102-L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L102-L145)

```diff
-         Object.create;
-         Object.create;
-         "function" === typeof SuppressedError && SuppressedError;
-         var zQ = XQ(40770),
-           sQ = XQ(40758);
-         const FQ = {
-             PHONE: "phone",
-             TOTP: "totp"
-           },
-           PQ = {
-             FACEBOOK: "facebook.com",
-             GITHUB: "github.com",
-             GOOGLE: "google.com",
-             PASSWORD: "password",
-             PHONE: "phone",
-             TWITTER: "twitter.com"
- ... (28 more removed lines; see GitHub link above)
+         applyVerticalCorrection() {
+           const MM = this.absoluteRotation.toEulerAngles();
+           this.projectionPlaneTilt = this._scene.useRightHandedSystem ? -MM.x : MM.x
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L147-L371` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L150-L151) · [Before (L147-L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L147-L371)

```diff
-         const jQ = function() {
-             return {
-               "admin-restricted-operation": "This operation is restricted to administrators only.",
-               "argument-error": "",
-               "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
-               "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
-               "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
-               "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
-               "cordova-not-ready": "Cordova framework is not ready.",
-               "cors-unsupported": "This browser is not supported.",
-               "credential-already-in-use": "This credential is already associated with a different user account.",
-               "custom-token-mismatch": "The custom token corresponds to a different audience.",
-               "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
-               "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
-               "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
-               "email-change-needs-verification": "Multi-factor users must always have a verified email.",
- ... (209 more removed lines; see GitHub link above)
+         get globalPosition() {
+           return this._globalPosition
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L373-L376` → after: `L153-L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L153-L154) · [Before (L373-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L373-L376)

```diff
- 
-         function GQ(QQ) {
-           for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
-           throw dQ(QQ, ...XQ)
+         getActiveMeshes() {
+           return this._activeMeshes
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L378-L381` → after: `L156-L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L156-L157) · [Before (L378-L381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L378-L381)

```diff
- 
-         function UQ(QQ) {
-           for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
-           return dQ(QQ, ...XQ)
+         isActiveMesh(MM) {
+           return -1 !== this._activeMeshes.indexOf(MM)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L383-L390` → after: `L159-L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L159-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L159-L164) · [Before (L383-L390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L383-L390)

```diff
- 
-         function bQ(QQ, WQ, XQ) {
-           const qQ = Object.assign(Object.assign({}, BQ()), {
-             [WQ]: XQ
-           });
-           return new wQ.h("auth", "Firebase", qQ).create(WQ, {
-             appName: QQ.name
-           })
+         isReady() {
+           let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (MM)
+             for (const rM of this._postProcesses)
+               if (rM && !rM.isReady()) return !1;
+           return super.isReady(MM)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L392-L394` → after: `L166-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L166-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L166-L167) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L392-L394)

```diff
- 
-         function vQ(QQ, WQ, XQ) {
-           if (!(WQ instanceof XQ)) throw XQ.name !== WQ.constructor.name && GQ(QQ, "argument-error"), bQ(QQ, "argument-error", `Type of ${WQ.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)
+         _initCache() {
+           super._initCache(), this._cache.position = new PM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new PM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = voi … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L396-L404` → after: `L169-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L169-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L169-L170) · [Before (L396-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L396-L404)

```diff
- 
-         function dQ(QQ) {
-           for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
-           if ("string" !== typeof QQ) {
-             const WQ = XQ[0],
-               wQ = [...XQ.slice(1)];
-             return wQ[0] && (wQ[0].appName = QQ.name), QQ._errorFactory.create(WQ, ...wQ)
-           }
-           return yQ.create(QQ, ...XQ)
+         _updateCache(MM) {
+           MM || super._updateCache(), this._cache.position.jR(this.position), this._cache.upVector.jR(this.upVector)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L406-L411` → after: `L172-L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L172-L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L172-L173) · [Before (L406-L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L406-L411)

```diff
- 
-         function HQ(QQ, WQ) {
-           if (!QQ) {
-             for (var XQ = arguments.length, wQ = new Array(XQ > 2 ? XQ - 2 : 0), qQ = 2; qQ < XQ; qQ++) wQ[qQ - 2] = arguments[qQ];
-             throw dQ(WQ, ...wQ)
-           }
+         _isSynchronized() {
+           return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L413-L416` → after: `L175-L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L175-L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L175-L176) · [Before (L413-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L413-L416)

```diff
- 
-         function aQ(QQ) {
-           const WQ = "INTERNAL ASSERTION FAILED: " + QQ;
-           throw pQ(WQ), new Error(WQ)
+         _isSynchronizedViewMatrix() {
+           return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L418-L420` → after: `L178-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L178-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L178-L183) · [Before (L418-L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L418-L420)

```diff
- 
-         function lQ(QQ, WQ) {
-           QQ || aQ(WQ)
+         _isSynchronizedProjectionMatrix() {
+           const rM = this.ignoreCameraMaxZ ? 0 : this.maxZ;
+           let iM = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === rM;
+           if (!iM) return !1;
+           const OM = this.ph();
+           return this.mode === MM.PERSPECTIVE_CAMERA ? iM = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === OM.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (iM = this._cache.orthoLeft == … [truncated]
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L422-L425` → after: `L185-L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L185-L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L185-L188) · [Before (L422-L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L422-L425)

```diff
- 
-         function hQ() {
-           var QQ;
-           return "undefined" !== typeof self && (null === (QQ = self.location) || void 0 === QQ ? void 0 : QQ.href) || ""
+         attachControl(MM, rM) {}
+         detachControl(MM) {}
+         update() {
+           this._hasMoved = !1, this._checkInputs(), this.cameraRigMode !== MM.RIG_MODE_NONE && this._updateRigCameras(), this.getViewMatrix(), this.getProjectionMatrix()
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L427-L429` → after: `L190-L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L190-L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L190-L191) · [Before (L427-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L427-L429)

```diff
- 
-         function iQ() {
-           return "http:" === cQ() || "https:" === cQ()
+         _checkInputs() {
+           this.onAfterCheckInputsObservable.notifyObservers(this)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L431-L434` → after: `L193-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L193-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L193-L194) · [Before (L431-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L431-L434)

```diff
- 
-         function cQ() {
-           var QQ;
-           return "undefined" !== typeof self && (null === (QQ = self.location) || void 0 === QQ ? void 0 : QQ.protocol) || null
+         get rigCameras() {
+           return this._rigCameras
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L436-L442` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L196-L197) · [Before (L436-L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L436-L442)

```diff
-         class AQ {
-           constructor(QQ, WQ) {
-             this.shortDelay = QQ, this.longDelay = WQ, lQ(WQ > QQ, "Short delay should be less than long delay!"), this.isMobile = (0, wQ._)() || (0, wQ.$)()
-           }
-           get() {
-             return "undefined" !== typeof navigator && navigator && "onLine" in navigator && "boolean" === typeof navigator.onLine && (iQ() || (0, wQ.R)() || "connection" in navigator) && !navigator.onLine ? Math.min(5e3, this.shortDelay) : this.isMobile ? this.longDelay : this.s … [truncated]
-           }
+         get rigPostProcess() {
+           return this._rigPostProcess
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L444-L450` → after: `L199-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L199-L202) · [Before (L444-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L444-L450)

```diff
- 
-         function RQ(QQ, WQ) {
-           lQ(QQ.emulator, "Emulator should always be set here");
-           const {
-             url: XQ
-           } = QQ.emulator;
-           return WQ ? `${XQ}${WQ.startsWith("/")?WQ.slice(1):WQ}` : XQ
+         _getFirstPostProcess() {
+           for (let MM = 0; MM < this._postProcesses.length; MM++)
+             if (null !== this._postProcesses[MM]) return this._postProcesses[MM];
+           return null
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L452-L454` → after: `L204-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L204-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L204-L212) · [Before (L452-L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L452-L454)

```diff
-         class EQ {
-           static initialize(QQ, WQ, XQ) {
-             this.fetchImpl = QQ, WQ && (this.headersImpl = WQ), XQ && (this.responseImpl = XQ)
+         _cascadePostProcessesToRigCams() {
+           const MM = this._getFirstPostProcess();
+           MM && MM.markTextureDirty();
+           for (let rM = 0, iM = this._rigCameras.length; rM < iM; rM++) {
+             const MM = this._rigCameras[rM],
+               iM = MM._rigPostProcess;
+             if (iM) {
+               "pass" === iM.getEffectName() && (MM.isIntermediate = 0 === this._postProcesses.length), MM._postProcesses = this._postProcesses.slice(0).concat(iM), iM.markTextureDirty()
+             } else MM._postProcesses = this._postProcesses.slice(0)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L456-L457` → after: `L214-L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L214-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L214-L250) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L456-L457)

```diff
-           static fetch() {
-             return this.fetchImpl ? this.fetchImpl : "undefined" !== typeof self && "fetch" in self ? self.fetch : void aQ("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
+         }
+         attachPostProcess(MM) {
+           let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           return !MM.isReusable() && this._postProcesses.indexOf(MM) > -1 ? (QM.e.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == rM || rM < 0 ? this._postProcesses.push(MM) : null === this._postProcesses[rM] ? this._postProcesses[rM] = MM : … [truncated]
+         }
+         detachPostProcess(MM) {
+           const rM = this._postProcesses.indexOf(MM); - 1 !== rM && (this._postProcesses[rM] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.FrM(), this._cascadePostProcessesToRigCams()
+         }
+         getWorldMatrix() {
+           return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
+         }
+         _getViewMatrix() {
+           return PM.d.Identity()
+         }
+         getViewMatrix(MM) {
+           return !MM && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.Hk().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams & … [truncated]
+ ... (21 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L459-L460` → after: `L252-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L252-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L252-L268) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L459-L460)

```diff
-           static headers() {
-             return this.headersImpl ? this.headersImpl : "undefined" !== typeof self && "Headers" in self ? self.Headers : void aQ("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
+           return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
+         }
+         getTransformationMatrix() {
+           return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
+         }
+         _computeObliqueDistance(MM) {
+           return (this.radius || (this.target ? PM.q.Distance(this.position, this.target) : this.position.length())) + MM
+         }
+         _updateFrustumPlanes() {
+           this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? HM.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = HM.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
+         }
+         isInFrustum(MM) {
+           let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this._updateFrustumPlanes(), rM && this.rigCameras.length > 0) {
+             let rM = !1;
+             for (const iM of this.rigCameras) iM._updateFrustumPlanes(), rM = rM || MM.isInFrustum(iM._frustumPlanes);
+ ... (1 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L462-L463` → after: `L270-L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L270-L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L270-L298) · [Before (L462-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L462-L463)

```diff
-           static response() {
-             return this.responseImpl ? this.responseImpl : "undefined" !== typeof self && "Response" in self ? self.Response : void aQ("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")
+           return MM.isInFrustum(this._frustumPlanes)
+         }
+         isCompletelyInFrustum(MM) {
+           return this._updateFrustumPlanes(), MM.isCompletelyInFrustum(this._frustumPlanes)
+         }
+         getForwardRay() {
+           throw (0, LM.n)("Ray")
+         }
+         getForwardRayToRef(MM) {
+           throw (0, LM.n)("Ray")
+         }
+         dispose(rM) {
+           let iM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.Hk().stopAnimation(this), this.Hk().removeCamera … [truncated]
+             const MM = this._rigCameras.pop();
+             MM && MM.dispose()
+ ... (13 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L466-L537` → after: `L304-L305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L304-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L304-L305) · [Before (L466-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L466-L537)

```diff
-         const CQ = {
-             CREDENTIAL_MISMATCH: "custom-token-mismatch",
-             MISSING_CUSTOM_TOKEN: "internal-error",
-             INVALID_IDENTIFIER: "invalid-email",
-             MISSING_CONTINUE_URI: "internal-error",
-             INVALID_PASSWORD: "wrong-password",
-             MISSING_PASSWORD: "missing-password",
-             EMAIL_EXISTS: "email-already-in-use",
-             PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
-             INVALID_IDP_RESPONSE: "invalid-credential",
-             INVALID_PENDING_TOKEN: "invalid-credential",
-             FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
-             MISSING_REQ_TYPE: "internal-error",
-             EMAIL_NOT_FOUND: "user-not-found",
-             RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
-             EXPIRED_OOB_CODE: "expired-action-code",
- ... (56 more removed lines; see GitHub link above)
+         get isLeftCamera() {
+           return this._isLeftCamera
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L539-L557` → after: `L307-L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L307-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L307-L326) · [Before (L539-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L539-L557)

```diff
-         async function fQ(QQ, WQ, XQ) {
-           QQ._canInitEmulator = !1;
-           const qQ = Object.assign(Object.assign({}, CQ), WQ);
-           try {
-             const WQ = new oQ(QQ),
-               wQ = await Promise.race([XQ(), WQ.promise]);
-             WQ.clearNetworkTimeout();
-             const TQ = await wQ.json();
-             if ("needConfirmation" in TQ) throw eQ(QQ, "account-exists-with-different-credential", TQ);
-             if (wQ.ok && !("errorMessage" in TQ)) return TQ;
-             {
-               const WQ = wQ.ok ? TQ.errorMessage : TQ.error.message,
-                 [XQ, zQ] = WQ.split(" : ");
-               if ("FEDERATED_USER_ID_ALREADY_LINKED" === XQ) throw eQ(QQ, "credential-already-in-use", TQ);
-               if ("EMAIL_EXISTS" === XQ) throw eQ(QQ, "email-already-in-use", TQ);
-               if ("USER_DISABLED" === XQ) throw eQ(QQ, "user-disabled", TQ);
- ... (3 more removed lines; see GitHub link above)
+         get isRightCamera() {
+           return this._isRightCamera
+         }
+         get leftCamera() {
+           return this._rigCameras.length < 1 ? null : this._rigCameras[0]
+         }
+         get rightCamera() {
+           return this._rigCameras.length < 2 ? null : this._rigCameras[1]
+         }
+         getLeftTarget() {
+           return this._rigCameras.length < 1 ? null : this._rigCameras[0].getTarget()
+         }
+         getRightTarget() {
+           return this._rigCameras.length < 2 ? null : this._rigCameras[1].getTarget()
+         }
+         setCameraRigMode(rM, iM) {
+ ... (4 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L559-L563` → after: `L328-L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L328-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L328-L334) · [Before (L559-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L559-L563)

```diff
-           } catch (TQ) {
-             if (TQ instanceof wQ.k) throw TQ;
-             GQ(QQ, "network-request-failed", {
-               message: String(TQ)
-             })
+             if (this.cameraRigMode = rM, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = iM.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== MM.RI … [truncated]
+               const MM = this.createRigCamera(this.name + "_L", 0);
+               MM && (MM._isLeftCamera = !0);
+               const rM = this.createRigCamera(this.name + "_R", 1);
+               rM && (rM._isRightCamera = !0), MM && rM && (this._rigCameras.push(MM), this._rigCameras.push(rM))
+             }
+             this._setRigMode(iM), this._cascadePostProcessesToRigCams(), this.update()
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L566-L571` → after: `L337-L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L337-L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L337-L339) · [Before (L566-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L566-L571)

```diff
-         async function SQ(QQ, WQ, XQ, wQ) {
-           let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
-           const TQ = await kQ(QQ, WQ, XQ, wQ, qQ);
-           return "mfaPendingCredential" in TQ && GQ(QQ, "multi-factor-auth-required", {
-             _serverResponse: TQ
-           }), TQ
+         _setRigMode(MM) {}
+         _getVRProjectionMatrix() {
+           return PM.d.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.ph().isNDCHalfZRange), this._cameraRigParams.vrW … [truncated]
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L573-L576` → after: `L341-L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L341-L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L341-L342) · [Before (L573-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L573-L576)

```diff
- 
-         function tQ(QQ, WQ, XQ, wQ) {
-           const qQ = `${WQ}${XQ}?${wQ}`;
-           return QQ.config.emulator ? RQ(QQ.config, qQ) : `${QQ.config.apiScheme}://${qQ}`
+         setCameraRigParameter(MM, rM) {
+           this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[MM] = rM, "interaxialDistance" === MM && (this._cameraRigParams.stereoHalfAngle = rM / .0637 * (Math.PI / 180))
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L578-L582` → after: `L344-L977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L344-L977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L344-L977) · [Before (L578-L582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L578-L582)

```diff
-         class oQ {
-           constructor(QQ) {
-             this.auth = QQ, this.timer = null, this.promise = new Promise(((QQ, WQ) => {
-               this.timer = setTimeout((() => WQ(UQ(this.auth, "network-request-failed"))), uQ.get())
-             }))
+         createRigCamera(MM, rM) {
+           return null
+         }
+         _updateRigCameras() {
+           for (let MM = 0; MM < this._rigCameras.length; MM++) this._rigCameras[MM].minZ = this.minZ, this._rigCameras[MM].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[MM].fov = this.fov, this._rigCameras[MM].upVector.jR(this.upVector);
+           this.cameraRigMode === MM.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
+         }
+         _setupInputs() {}
+         serialize() {
+           const MM = JM.b.Serialize(this);
+           return MM.uniqueId = this.uniqueId, MM.type = this.getClassName(), this.parent && this.parent._serializeAsParent(MM), this.inputs && this.inputs.serialize(MM), JM.b.AppendSerializedAnimations(this, MM), MM.Ld = this.serializeAnimationRanges(), MM.isEnabled = this.isEnab … [truncated]
+         }
+         clone(rM) {
+           let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           const OM = JM.b.Clone(MM.GetConstructorFromName(this.getClassName(), rM, this.Hk(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
+           return OM.name = rM, OM.parent = iM, this.onClonedObservable.notifyObservers(OM), OM
+ ... (618 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L584-L585` → after: `L979-L1140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L979-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L979-L1140) · [Before (L584-L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L584-L585)

```diff
-           clearNetworkTimeout() {
-             clearTimeout(this.timer)
+           _updateRigCameras() {
+             const MM = this._rigCameras[0],
+               rM = this._rigCameras[1];
+             switch (this.computeWorldMatrix(), this.cameraRigMode) {
+               case jM.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
+               case jM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
+               case jM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
+               case jM.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
+               case jM.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
+                 const iM = this.cameraRigMode === jM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
+                   OM = this.cameraRigMode === jM.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
+                 this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * iM, MM), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * OM, rM);
+                 break
+               }
+               case jM.b.RIG_MODE_VR:
+                 MM.rotationQuaternion && rM.rotationQuaternion && this.rotationQuaternion ? (MM.rotationQuaternion.jR(this.rotationQuaternion), rM.rotationQuaternion.jR(this.rotationQuaternion)) : (MM.rotation.jR(this.rotation), rM.rotation.jR(this.rotation)), MM.position.jR(this … [truncated]
+ ... (146 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L589-L591` → after: `L1160-L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L1160-L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L1160-L1517) · [Before (L589-L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L589-L591)

```diff
-         function eQ(QQ, WQ, XQ) {
-           const wQ = {
-             appName: QQ.name
+     function jM() {
+       SM || (SM = !0, OM.ThinEngine.prototype.setAlphaMode = function(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+         if (this._alphaMode[iM] === MM) {
+           if (!rM) {
+             const rM = 0 === MM;
+             this.depthCullingState.depthMask !== rM && (this.depthCullingState.depthMask = rM)
+           }
+           return
+         }
+         const OM = 0 === MM;
+         this._alphaState.setAlphaBlend(!OM, iM), this._alphaState.setAlphaMode(MM, iM), rM || (this.depthCullingState.depthMask = OM), this._alphaMode[iM] = MM
+       })
+     }
+   },
+ ... (342 more added lines; see GitHub link above)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L593-L596` → after: `L1519-L1917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R1519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L1519-L1917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L1519-L1917) · [Before (L593-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L593-L596)

```diff
-           XQ.email && (wQ.email = XQ.email), XQ.phoneNumber && (wQ.phoneNumber = XQ.phoneNumber);
-           const qQ = UQ(QQ, WQ, wQ);
-           return qQ.customData._tokenResponse = XQ, qQ
-         }
+         return this._loadFile(rM, (MM => {
+           dM(MM).catch((MM => {
+             JM(void 0, MM)
+           }))
+         }), void 0, iM?.offlineProvider, !0, JM), hM
+       }, SM.ThinEngine.prototype.createRawTexture2DArray = rM(!1), SM.ThinEngine.prototype.createRawTexture3D = rM(!0), SM.ThinEngine.prototype.updateRawTexture2DArray = iM(!1), SM.ThinEngine.prototype.updateRawTexture3D = iM(!0))
+     }();
+     var zM = iM(40981);
+     let LM = !1;
+     LM || (LM = !0, SM.ThinEngine.prototype._readTexturePixelsSync = function(MM, rM, iM) {
+       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
+         SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
+         jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+         aM = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
+         PM = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+         nM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
+ ... (383 more added lines; see GitHub link above)
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L598-L602` → after: `L1919-L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R1919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L1919-L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L1919-L1932) · [Before (L598-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L598-L602)

```diff
-         function nQ(QQ) {
-           if (QQ) try {
-             const WQ = new Date(Number(QQ));
-             if (!isNaN(WQ.getTime())) return WQ.toUTCString()
-           } catch (WQ) {}
+     function hM(MM) {
+       const rM = function(MM) {
+         if (!(0, HM.g)() || !document.body) return null;
+         const rM = document.createElement("span");
+         rM.textContent = "Hg", rM.style.font = MM;
+         const iM = document.createElement("div");
+         iM.style.display = "inline-block", iM.style.width = "1px", iM.style.height = "0px", iM.style.verticalAlign = "bottom";
+         const OM = document.createElement("div");
+         let SM, jM;
+         OM.style.whiteSpace = "nowrap", OM.appendChild(rM), OM.appendChild(iM), document.body.appendChild(OM);
+         try {
+           jM = iM.getBoundingClientRect().top - rM.getBoundingClientRect().top, iM.style.verticalAlign = "baseline", SM = iM.getBoundingClientRect().top - rM.getBoundingClientRect().top
+         } finally {
+           document.body.removeChild(OM)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L605-L607` → after: `L1980-L2191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R1980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L1980-L2191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L1980-L2191) · [Before (L605-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L605-L607)

```diff
-         function xQ(QQ) {
-           let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           return (0, wQ.L)(QQ).getIdToken(WQ)
+     function JM(MM) {
+       return Number.isFinite(MM.ascent) && Number.isFinite(MM.height) && Number.isFinite(MM.descent) && MM.height > 0
+     }
+ 
+     function dM(MM) {
+       if (MM.requestPointerLock) {
+         const rM = MM.requestPointerLock();
+         rM instanceof Promise ? rM.then((() => {
+           MM.focus()
+         })).catch((() => {})) : MM.focus()
+       }
+     }
+     var yM = iM(41048),
+       lM = iM(41003),
+       EM = iM(41056),
+       UM = iM(41061);
+ ... (196 more added lines; see GitHub link above)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L609-L624` → after: `L2193-L2453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2193-L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2193-L2453) · [Before (L609-L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L609-L624)

```diff
-         async function YQ(QQ) {
-           let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-           const XQ = (0, wQ.L)(QQ),
-             qQ = await XQ.getIdToken(WQ),
-             TQ = ZQ(qQ);
-           HQ(TQ && TQ.exp && TQ.auth_time && TQ.iat, XQ.auth, "internal-error");
-           const zQ = "object" === typeof TQ.firebase ? TQ.firebase : void 0,
-             sQ = null === zQ || void 0 === zQ ? void 0 : zQ.sign_in_provider;
-           return {
-             claims: TQ,
-             token: qQ,
-             authTime: nQ(NQ(TQ.auth_time)),
-             issuedAtTime: nQ(NQ(TQ.iat)),
-             expirationTime: nQ(NQ(TQ.exp)),
-             signInProvider: sQ || null,
-             signInSecondFactor: (null === zQ || void 0 === zQ ? void 0 : zQ.sign_in_second_factor) || null
+       }
+       wrapWebGLTexture(MM) {
+         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
+           SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
+           jM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
+         const aM = new LM.d(MM, this._gl),
+           PM = new OM.c(this, 15, !0);
+         return PM._hardwareTexture = aM, PM.baseWidth = SM, PM.baseHeight = jM, PM.width = SM, PM.height = jM, PM.isReady = !0, PM.useMipMaps = rM, this.updateTextureSamplingMode(iM, PM), PM
+       }
+       updateWrappedWebGLTexture(MM, rM) {
+         if (15 !== MM.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
+         for (const OM of this._renderTargetWrapperCache)
+           if (OM.textures?.includes(MM)) {
+             if (OM.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
+             if (OM._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
+ ... (245 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L626` → after: `L2455-L2534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2455-L2534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2455-L2534) · [Before (L626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L626)

```diff
-         }
+         } else {
+           const rM = {};
+           if (rM.generateDepthBuffer = this._generateDepthBuffer, rM.generateMipMaps = this.texture?.generateMipMaps ?? !1, rM.generateStencilBuffer = this._generateStencilBuffer, rM.samplingMode = this.texture?.samplingMode, rM.type = this.texture?.type, rM.format = this.texture … [truncated]
+           else {
+             const iM = {
+               width: this.width,
+               height: this.height,
+               layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
+             };
+             MM = this._engine.createRenderTargetTexture(iM, rM)
+           }
+           MM.texture && (MM.texture.isReady = !0)
+         }
+         return MM
+       }
+       _swapRenderTargetWrapper(MM) {
+ ... (64 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L628-L630` → after: `L2536-L2540`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2536-L2540)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2536-L2540) · [Before (L628-L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L628-L630)

```diff
-         function NQ(QQ) {
-           return 1e3 * Number(QQ)
-         }
+     function jM(MM, rM) {
+       (function(MM) {
+         return SM.delete(MM)
+       })(MM) && OM.e.Warn(`Extension with the name '${MM}' already exists`), SM.set(MM, rM)
+     }
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L632-L639` → after: `L2542-L2606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2542-L2606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2542-L2606) · [Before (L632-L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L632-L639)

```diff
-         function ZQ(QQ) {
-           const [WQ, XQ, qQ] = QQ.split(".");
-           if (void 0 === WQ || void 0 === XQ || void 0 === qQ) return pQ("JWT malformed, contained fewer than 3 sections"), null;
-           try {
-             const QQ = (0, wQ.q)(XQ);
-             return QQ ? JSON.parse(QQ) : (pQ("Failed to decode base64 JWT payload"), null)
-           } catch (TQ) {
-             return pQ("Caught error parsing JWT payload as JSON", null === TQ || void 0 === TQ ? void 0 : TQ.toString()), null
+     function aM(MM, rM) {
+       "image/ktx" !== rM && "image/ktx2" !== rM || (MM = ".ktx"), SM.has(MM) || (MM.endsWith(".ies") && jM(".ies", (async () => await iM.e(618).then((() => iM(44416))).then((MM => new MM._IESTextureLoader)))), MM.endsWith(".dds") && jM(".dds", (async () => await iM.e(616).then((( … [truncated]
+       const OM = SM.get(MM);
+       return OM ? Promise.resolve(OM(rM)) : null
+     }
+   },
+   41538: (MM, rM, iM) => {
+     iM.d(rM, {
+       e: () => aM,
+       i: () => QM
+     });
+     var OM = iM(41397),
+       SM = iM(41124),
+       jM = iM(38085);
+     class aM extends OM.c {
+       get B_() {
+ ... (49 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L642-L652` → after: `L2609-L2903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2609-L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2609-L2903) · [Before (L642-L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L642-L652)

```diff
-         async function OQ(QQ, WQ) {
-           if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2]) return WQ;
-           try {
-             return await WQ
-           } catch (XQ) {
-             throw XQ instanceof wQ.k && function(QQ) {
-               let {
-                 code: WQ
-               } = QQ;
-               return "auth/user-disabled" === WQ || "auth/user-token-expired" === WQ
-             }(XQ) && QQ.auth.currentUser === QQ && await QQ.auth.signOut(), XQ
+         return !0
+       }
+       clone(MM, rM) {
+         const iM = new aM(MM, this.Hk());
+         for (let OM = 0; OM < this.B_.length; OM++) {
+           let SM;
+           const jM = this.B_[OM];
+           SM = rM && jM ? jM.clone(MM + "-" + jM.name) : this.B_[OM], iM.B_.push(SM)
+         }
+         return iM
+       }
+       serialize() {
+         const MM = {};
+         MM.name = this.name, MM.id = this.id, MM.uniqueId = this.uniqueId, SM.d && (MM.tags = SM.d.GetTags(this)), MM.materialsUniqueIds = [], MM.materials = [];
+         for (let rM = 0; rM < this.B_.length; rM++) {
+           const iM = this.B_[rM];
+ ... (279 more added lines; see GitHub link above)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L654-L657` → after: `L2905-L2906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2905-L2906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2905-L2906) · [Before (L654-L657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L654-L657)

```diff
-         }
-         class KQ {
-           constructor(QQ) {
-             this.user = QQ, this.isRunning = !1, this.timerId = null, this.errorBackoff = 3e4
+           set Rm(MM) {
+             this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver && this.onCollideObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver), this._internalAbstractMeshDataInfo._meshCollisionData._onCollideObserver = this.onCol … [truncated]
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L659-L660` → after: `L2908-L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2908-L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2908-L2909) · [Before (L659-L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L659-L660)

```diff
-           _start() {
-             this.isRunning || (this.isRunning = !0, this.schedule())
+           set onCollisionPositionChange(MM) {
+             this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver && this.onCollisionPositionChangeObservable.remove(this._internalAbstractMeshDataInfo._meshCollisionData._onCollisionPositionChangeObserver), this._internalAbstractMeshDataInfo._m … [truncated]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L662-L663` → after: `L2911-L2912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2911-L2912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2911-L2912) · [Before (L662-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L662-L663)

```diff
-           _stop() {
-             this.isRunning && (this.isRunning = !1, null !== this.timerId && clearTimeout(this.timerId))
+           get visibility() {
+             return this._internalAbstractMeshDataInfo._visibility
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L665-L674` → after: `L2914-L2919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2914-L2919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2914-L2919) · [Before (L665-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L665-L674)

```diff
-           getInterval(QQ) {
-             var WQ;
-             if (QQ) {
-               const QQ = this.errorBackoff;
-               return this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4), QQ
-             } {
-               this.errorBackoff = 3e4;
-               const QQ = (null !== (WQ = this.user.stsTokenManager.expirationTime) && void 0 !== WQ ? WQ : 0) - Date.now() - 3e5;
-               return Math.max(0, QQ)
-             }
+           set visibility(MM) {
+             if (this._internalAbstractMeshDataInfo._visibility === MM) return;
+             const rM = this._internalAbstractMeshDataInfo._visibility;
+             this._internalAbstractMeshDataInfo._visibility = MM, (1 === rM && 1 !== MM || 1 !== rM && 1 === MM) && this._markSubMeshesAsDirty((MM => {
+               MM.markAsMiscDirty(), MM.markAsPrePassDirty()
+             }))
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L676-L682` → after: `L2921-L2922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2921-L2922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2921-L2922) · [Before (L676-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L676-L682)

```diff
-           schedule() {
-             let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-             if (!this.isRunning) return;
-             const WQ = this.getInterval(QQ);
-             this.timerId = setTimeout((async () => {
-               await this.iteration()
-             }), WQ)
+           get pointerOverDisableMeshTesting() {
+             return this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L684-L690` → after: `L2924-L2925`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2924-L2925) · [Before (L684-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L684-L690)

```diff
-           async iteration() {
-             try {
-               await this.user.getIdToken(!0)
-             } catch (QQ) {
-               return void("auth/network-request-failed" === (null === QQ || void 0 === QQ ? void 0 : QQ.code) && this.schedule(!0))
-             }
-             this.schedule()
+           set pointerOverDisableMeshTesting(MM) {
+             this._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting = MM
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L692-L695` → after: `L2927-L2928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2927-L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2927-L2928) · [Before (L692-L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L692-L695)

```diff
-         }
-         class mQ {
-           constructor(QQ, WQ) {
-             this.createdAt = QQ, this.lastLoginAt = WQ, this._initializeTime()
+           get renderingGroupId() {
+             return this._internalAbstractMeshDataInfo._renderingGroupId
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L697-L698` → after: `L2930-L2931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2930-L2931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2930-L2931) · [Before (L697-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L697-L698)

```diff
-           _initializeTime() {
-             this.lastSignInTime = nQ(this.lastLoginAt), this.creationTime = nQ(this.createdAt)
+           set renderingGroupId(MM) {
+             this._internalAbstractMeshDataInfo._renderingGroupId = MM
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L700-L701` → after: `L2933-L2934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2933) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2933-L2934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2933-L2934) · [Before (L700-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L700-L701)

```diff
-           _copy(QQ) {
-             this.createdAt = QQ.createdAt, this.lastLoginAt = QQ.lastLoginAt, this._initializeTime()
+           get meshBlendingTag() {
+             return this._internalAbstractMeshDataInfo._meshBlendingTag
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L703-L707` → after: `L2936-L2938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2936-L2938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2936-L2938) · [Before (L703-L707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L703-L707)

```diff
-           toJSON() {
-             return {
-               createdAt: this.createdAt,
-               lastLoginAt: this.lastLoginAt
-             }
+           set meshBlendingTag(MM) {
+             if (!Number.isInteger(MM) || MM < 0 || MM > 255 || 0 !== MM && 0 === (63 & MM)) throw new RangeError("Mesh-blending tag must be 0 or contain a group ID between 1 and 63.");
+             this._internalAbstractMeshDataInfo._meshBlendingTag = MM
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L709-L760` → after: `L2940-L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2940-L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2940-L2941) · [Before (L709-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L709-L760)

```diff
-         }
-         async function MQ(QQ) {
-           var WQ;
-           const XQ = QQ.auth,
-             wQ = await QQ.getIdToken(),
-             qQ = await OQ(QQ, async function(QQ, WQ) {
-               return kQ(QQ, "POST", "/v1/accounts:lookup", WQ)
-             }(XQ, {
-               idToken: wQ
-             }));
-           HQ(null === qQ || void 0 === qQ ? void 0 : qQ.users.length, XQ, "internal-error");
-           const zQ = qQ.users[0];
-           QQ._notifyReloadListener(zQ);
-           const sQ = (null === (WQ = zQ.providerUserInfo) || void 0 === WQ ? void 0 : WQ.length) ? zQ.providerUserInfo.map((QQ => {
-             var {
-               providerId: WQ
- ... (36 more removed lines; see GitHub link above)
+           get material() {
+             return this._internalAbstractMeshDataInfo._material
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L762-L763` → after: `L2943-L2944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2943-L2944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2943-L2944) · [Before (L762-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L762-L763)

```diff
-           get isExpired() {
-             return !this.expirationTime || Date.now() > this.expirationTime - 3e4
+           set material(MM) {
+             this._setMaterial(MM)
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L765-L771` → after: `L2946-L2947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2946-L2947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2946-L2947) · [Before (L765-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L765-L771)

```diff
-           updateFromServerResponse(QQ) {
-             HQ(QQ.idToken, "internal-error"), HQ("undefined" !== typeof QQ.idToken, "internal-error"), HQ("undefined" !== typeof QQ.refreshToken, "internal-error");
-             const WQ = "expiresIn" in QQ && "undefined" !== typeof QQ.expiresIn ? Number(QQ.expiresIn) : function(QQ) {
-               const WQ = ZQ(QQ);
-               return HQ(WQ, "internal-error"), HQ("undefined" !== typeof WQ.exp, "internal-error"), HQ("undefined" !== typeof WQ.iat, "internal-error"), Number(WQ.exp) - Number(WQ.iat)
-             }(QQ.idToken);
-             this.updateTokensAndExpiration(QQ.idToken, QQ.refreshToken, WQ)
+           _setMaterial(MM) {
+             this._internalAbstractMeshDataInfo._material !== MM && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDa … [truncated]
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L773-L775` → after: `L2949-L2950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2949-L2950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2949-L2950) · [Before (L773-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L773-L775)

```diff
-           async getToken(QQ) {
-             let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             return HQ(!this.accessToken || this.refreshToken, QQ, "user-token-expired"), WQ || !this.accessToken || this.isExpired ? this.refreshToken ? (await this.refresh(QQ, this.refreshToken), this.accessToken) : null : this.accessToken
+           getMaterialForRenderPass(MM) {
+             return this._internalAbstractMeshDataInfo._materialForRenderPass?.[MM]
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L777-L778` → after: `L2952-L2955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2952-L2955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2952-L2955) · [Before (L777-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L777-L778)

```diff
-           clearRefreshToken() {
-             this.refreshToken = null
+           setMaterialForRenderPass(MM, rM) {
+             this.resetDrawCache(MM), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
+             const iM = this._internalAbstractMeshDataInfo._materialForRenderPass[MM];
+             iM?.meshMap?.[this.uniqueId] && (iM.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[MM] = rM, rM && rM.meshMap && (rM.meshMap[this.uniqueId] = this)
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L780-L809` → after: `L2957-L2958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2957-L2958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2957-L2958) · [Before (L780-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L780-L809)

```diff
-           async refresh(QQ, WQ) {
-             const {
-               accessToken: XQ,
-               refreshToken: qQ,
-               expiresIn: TQ
-             } = await async function(QQ, WQ) {
-               const XQ = await fQ(QQ, {}, (async () => {
-                 const XQ = (0, wQ.eb)({
-                     grant_type: "refresh_token",
-                     refresh_token: WQ
-                   }).slice(1),
-                   {
-                     tokenApiHost: qQ,
-                     apiKey: TQ
-                   } = QQ.config,
-                   zQ = tQ(QQ, qQ, "/v1/token", `key=${TQ}`),
- ... (14 more removed lines; see GitHub link above)
+           get receiveShadows() {
+             return this._internalAbstractMeshDataInfo._receiveShadows
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L811-L812` → after: `L2960-L2961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2960-L2961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2960-L2961) · [Before (L811-L812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L811-L812)

```diff
-           updateTokensAndExpiration(QQ, WQ, XQ) {
-             this.refreshToken = WQ || null, this.accessToken = QQ || null, this.expirationTime = Date.now() + 1e3 * XQ
+           set receiveShadows(MM) {
+             this._internalAbstractMeshDataInfo._receiveShadows !== MM && (this._internalAbstractMeshDataInfo._receiveShadows = MM, this._markSubMeshesAsLightDirty())
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L814-L833` → after: `L2963-L2964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2963-L2964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2963-L2964) · [Before (L814-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L814-L833)

```diff
-           static fromJSON(QQ, WQ) {
-             const {
-               refreshToken: XQ,
-               accessToken: wQ,
-               expirationTime: qQ
-             } = WQ, TQ = new WW;
-             return XQ && (HQ("string" === typeof XQ, "internal-error", {
-               appName: QQ
-             }), TQ.refreshToken = XQ), wQ && (HQ("string" === typeof wQ, "internal-error", {
-               appName: QQ
-             }), TQ.accessToken = wQ), qQ && (HQ("number" === typeof qQ, "internal-error", {
-               appName: QQ
-             }), TQ.expirationTime = qQ), TQ
-           }
-           toJSON() {
-             return {
- ... (4 more removed lines; see GitHub link above)
+           get hasVertexAlpha() {
+             return this._internalAbstractMeshDataInfo._hasVertexAlpha
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L835-L836` → after: `L2966-L2967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2966-L2967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2966-L2967) · [Before (L835-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L835-L836)

```diff
-           _assign(QQ) {
-             this.accessToken = QQ.accessToken, this.refreshToken = QQ.refreshToken, this.expirationTime = QQ.expirationTime
+           set hasVertexAlpha(MM) {
+             this._internalAbstractMeshDataInfo._hasVertexAlpha !== MM && (this._internalAbstractMeshDataInfo._hasVertexAlpha = MM, this._markSubMeshesAsAttributesDirty(), this._markSubMeshesAsMiscDirty())
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L838-L839` → after: `L2969-L2970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2969-L2970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2969-L2970) · [Before (L838-L839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L838-L839)

```diff
-           _clone() {
-             return Object.assign(new WW, this.toJSON())
+           get useVertexColors() {
+             return this._internalAbstractMeshDataInfo._useVertexColors
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L841-L842` → after: `L2972-L2973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2972-L2973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2972-L2973) · [Before (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L841-L842)

```diff
-           _performRefresh() {
-             return aQ("not implemented")
+           set useVertexColors(MM) {
+             this._internalAbstractMeshDataInfo._useVertexColors !== MM && (this._internalAbstractMeshDataInfo._useVertexColors = MM, this._markSubMeshesAsAttributesDirty())
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L844-L878` → after: `L2975-L2976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2975-L2976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2975-L2976) · [Before (L844-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L844-L878)

```diff
-         }
- 
-         function XW(QQ, WQ) {
-           HQ("string" === typeof QQ || "undefined" === typeof QQ, "internal-error", {
-             appName: WQ
-           })
-         }
-         class wW {
-           constructor(QQ) {
-             var {
-               uid: WQ,
-               auth: XQ,
-               stsTokenManager: wQ
-             } = QQ, qQ = TQ(QQ, ["uid", "auth", "stsTokenManager"]);
-             this.providerId = "firebase", this.proactiveRefresh = new KQ(this), this.reloadUserInfo = null, this.reloadListener = null, this.uid = WQ, this.auth = XQ, this.stsTokenManager = wQ, this.accessToken = wQ.accessToken, this.displayName = qQ.displayName || null, this.ema … [truncated]
-           }
- ... (19 more removed lines; see GitHub link above)
+           get computeBonesUsingShaders() {
+             return this._internalAbstractMeshDataInfo._computeBonesUsingShaders
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L880-L881` → after: `L2978-L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2978-L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2978-L2979) · [Before (L880-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L880-L881)

```diff
-           _onReload(QQ) {
-             HQ(!this.reloadListener, this.auth, "internal-error"), this.reloadListener = QQ, this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), this.reloadUserInfo = null)
+           set computeBonesUsingShaders(MM) {
+             this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== MM && (this._internalAbstractMeshDataInfo._computeBonesUsingShaders = MM, this._markSubMeshesAsAttributesDirty())
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L883-L884` → after: `L2981-L2982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2981-L2982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2981-L2982) · [Before (L883-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L883-L884)

```diff
-           _notifyReloadListener(QQ) {
-             this.reloadListener ? this.reloadListener(QQ) : this.reloadUserInfo = QQ
+           get numBoneInfluencers() {
+             return this._internalAbstractMeshDataInfo._numBoneInfluencers
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L886-L887` → after: `L2984-L2985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2984-L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2984-L2985) · [Before (L886-L887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L886-L887)

```diff
-           _startProactiveRefresh() {
-             this.proactiveRefresh._start()
+           set numBoneInfluencers(MM) {
+             this._internalAbstractMeshDataInfo._numBoneInfluencers !== MM && (this._internalAbstractMeshDataInfo._numBoneInfluencers = MM, this._markSubMeshesAsAttributesDirty())
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L889-L890` → after: `L2987-L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2987-L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2987-L2988) · [Before (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L889-L890)

```diff
-           _stopProactiveRefresh() {
-             this.proactiveRefresh._stop()
+           get applyFog() {
+             return this._internalAbstractMeshDataInfo._applyFog
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L892-L921` → after: `L2990-L2991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2990) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2990-L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2990-L2991) · [Before (L892-L921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L892-L921)

```diff
-           async _updateTokensIfNecessary(QQ) {
-             let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-               XQ = !1;
-             QQ.idToken && QQ.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(QQ), XQ = !0), WQ && await MQ(this), await this.auth._persistUserIfCurrent(this), XQ && this.auth._notifyListenersIfCurrent(this)
-           }
-           async delete() {
-             const QQ = await this.getIdToken();
-             return await OQ(this, async function(QQ, WQ) {
-               return kQ(QQ, "POST", "/v1/accounts:delete", WQ)
-             }(this.auth, {
-               idToken: QQ
-             })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut()
-           }
-           toJSON() {
-             return Object.assign(Object.assign({
-               uid: this.uid,
- ... (14 more removed lines; see GitHub link above)
+           set applyFog(MM) {
+             this._internalAbstractMeshDataInfo._applyFog !== MM && (this._internalAbstractMeshDataInfo._applyFog = MM, this._markSubMeshesAsMiscDirty())
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L923-L960` → after: `L2993-L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2993-L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2993-L2994) · [Before (L923-L960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L923-L960)

```diff
-           get refreshToken() {
-             return this.stsTokenManager.refreshToken || ""
-           }
-           static _fromJSON(QQ, WQ) {
-             var XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
-             const gQ = null !== (XQ = WQ.displayName) && void 0 !== XQ ? XQ : void 0,
-               JQ = null !== (wQ = WQ.email) && void 0 !== wQ ? wQ : void 0,
-               rQ = null !== (qQ = WQ.phoneNumber) && void 0 !== qQ ? qQ : void 0,
-               IQ = null !== (TQ = WQ.photoURL) && void 0 !== TQ ? TQ : void 0,
-               jQ = null !== (zQ = WQ.tenantId) && void 0 !== zQ ? zQ : void 0,
-               BQ = null !== (sQ = WQ._redirectEventId) && void 0 !== sQ ? sQ : void 0,
-               yQ = null !== (FQ = WQ.createdAt) && void 0 !== FQ ? FQ : void 0,
-               VQ = null !== (PQ = WQ.lastLoginAt) && void 0 !== PQ ? PQ : void 0,
-               {
-                 uid: DQ,
-                 emailVerified: pQ,
- ... (22 more removed lines; see GitHub link above)
+           get enableDistantPicking() {
+             return this._internalAbstractMeshDataInfo._enableDistantPicking
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L962-L972` → after: `L2996-L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2996-L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2996-L2997) · [Before (L962-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L962-L972)

```diff
-           static async _fromIdTokenResponse(QQ, WQ) {
-             let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
-             const wQ = new WW;
-             wQ.updateFromServerResponse(WQ);
-             const qQ = new wW({
-               uid: WQ.localId,
-               auth: QQ,
-               stsTokenManager: wQ,
-               isAnonymous: XQ
-             });
-             return await MQ(qQ), qQ
+           set enableDistantPicking(MM) {
+             this._internalAbstractMeshDataInfo._enableDistantPicking = MM
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L974-L984` → after: `L2999-L3000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R2999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L2999-L3000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L2999-L3000) · [Before (L974-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L974-L984)

```diff
-         }
-         const qW = new Map;
- 
-         function TW(QQ) {
-           lQ(QQ instanceof Function, "Expected a class definition");
-           let WQ = qW.get(QQ);
-           return WQ ? (lQ(WQ instanceof QQ, "Instance stored in cache mismatched with class"), WQ) : (WQ = new QQ, qW.set(QQ, WQ), WQ)
-         }
-         class zW {
-           constructor() {
-             this.type = "NONE", this.storage = {}
+           get layerMask() {
+             return this._internalAbstractMeshDataInfo._layerMask
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L986-L987` → after: `L3002-L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3002-L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3002-L3003) · [Before (L986-L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L986-L987)

```diff
-           async _isAvailable() {
-             return !0
+           set layerMask(MM) {
+             MM !== this._internalAbstractMeshDataInfo._layerMask && (this._internalAbstractMeshDataInfo._layerMask = MM, this._resyncLightSources())
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L989-L990` → after: `L3005-L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3005-L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3005-L3006) · [Before (L989-L990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L989-L990)

```diff
-           async _set(QQ, WQ) {
-             this.storage[QQ] = WQ
+           get collisionMask() {
+             return this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L992-L994` → after: `L3008-L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3008-L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3008-L3009) · [Before (L992-L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L992-L994)

```diff
-           async _get(QQ) {
-             const WQ = this.storage[QQ];
-             return void 0 === WQ ? null : WQ
+           set collisionMask(MM) {
+             this._internalAbstractMeshDataInfo._meshCollisionData._collisionMask = isNaN(MM) ? -1 : MM
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L996-L997` → after: `L3011-L3012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3011-L3012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3011-L3012) · [Before (L996-L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L996-L997)

```diff
-           async _remove(QQ) {
-             delete this.storage[QQ]
+           get collisionResponse() {
+             return this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L999-L1080` → after: `L3014-L3015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3014-L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3014-L3015) · [Before (L999-L1080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L999-L1080)

```diff
-           _addListener(QQ, WQ) {}
-           _removeListener(QQ, WQ) {}
-         }
-         zW.type = "NONE";
-         const sW = zW;
- 
-         function FW(QQ, WQ, XQ) {
-           return `firebase:${QQ}:${WQ}:${XQ}`
-         }
-         class PW {
-           constructor(QQ, WQ, XQ) {
-             this.persistence = QQ, this.auth = WQ, this.userKey = XQ;
-             const {
-               config: wQ,
-               name: qQ
-             } = this.auth;
- ... (66 more removed lines; see GitHub link above)
+           set collisionResponse(MM) {
+             this._internalAbstractMeshDataInfo._meshCollisionData._collisionResponse = MM
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1082-L1140` → after: `L3017-L3018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3017-L3018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3017-L3018) · [Before (L1082-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1082-L1140)

```diff
-           return "Other"
-         }
- 
-         function JW() {
-           let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)();
-           return /firefox\//i.test(QQ)
-         }
- 
-         function rW() {
-           const QQ = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)()).toLowerCase();
-           return QQ.includes("safari/") && !QQ.includes("chrome/") && !QQ.includes("crios/") && !QQ.includes("android")
-         }
- 
-         function IW() {
-           let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, wQ.N)();
-           return /crios\//i.test(QQ)
- ... (43 more removed lines; see GitHub link above)
+           get collisionGroup() {
+             return this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1142-L1159` → after: `L3020-L3021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3020-L3021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3020-L3021) · [Before (L1142-L1159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1142-L1159)

```diff
-           const TQ = XQ.length ? XQ.join(",") : "FirebaseCore-web";
-           return `${WQ}/JsCore/${qQ.g}/${TQ}`
-         }
-         async function UW(QQ, WQ) {
-           return kQ(QQ, "GET", "/v2/recaptchaConfig", LQ(QQ, WQ))
-         }
- 
-         function bW(QQ) {
-           return void 0 !== QQ && void 0 !== QQ.getResponse
-         }
- 
-         function vW(QQ) {
-           return void 0 !== QQ && void 0 !== QQ.enterprise
-         }
-         class dW {
-           constructor(QQ) {
- ... (2 more removed lines; see GitHub link above)
+           set collisionGroup(MM) {
+             this._internalAbstractMeshDataInfo._meshCollisionData._collisionGroup = isNaN(MM) ? -1 : MM
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1161-L1182` → after: `L3023-L3024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3023-L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3023-L3024) · [Before (L1161-L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1161-L1182)

```diff
-         }
- 
-         function HW(QQ) {
-           return new Promise(((WQ, XQ) => {
-             const wQ = document.createElement("script");
-             wQ.setAttribute("src", QQ), wQ.onload = WQ, wQ.onerror = QQ => {
-                 const WQ = UQ("internal-error");
-                 WQ.customData = QQ, XQ(WQ)
-               }, wQ.type = "text/javascript", wQ.charset = "UTF-8",
-               function() {
-                 var QQ, WQ;
-                 return null !== (WQ = null === (QQ = document.getElementsByTagName("head")) || void 0 === QQ ? void 0 : QQ[0]) && void 0 !== WQ ? WQ : document
-               }().appendChild(wQ)
-           }))
-         }
- 
- ... (6 more removed lines; see GitHub link above)
+           get surroundingMeshes() {
+             return this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1184-L1233` → after: `L3026-L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3026-L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3026-L3027) · [Before (L1184-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1184-L1233)

```diff
-           async verify() {
-             let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "verify",
-               WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
- 
-             function XQ(WQ, XQ, wQ) {
-               const qQ = window.grecaptcha;
-               vW(qQ) ? qQ.enterprise.ready((() => {
-                 qQ.enterprise.execute(WQ, {
-                   action: QQ
-                 }).then((QQ => {
-                   XQ(QQ)
-                 })).catch((() => {
-                   XQ("NO_RECAPTCHA")
-                 }))
-               })) : wQ(Error("No reCAPTCHA enterprise script loaded."))
-             }
- ... (34 more removed lines; see GitHub link above)
+           set surroundingMeshes(MM) {
+             this._internalAbstractMeshDataInfo._meshCollisionData._surroundingMeshes = MM
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1235-L1272` → after: `L3029-L3030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3029-L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3029-L3030) · [Before (L1235-L1272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1235-L1272)

```diff
-         }
-         async function hW(QQ, WQ, XQ) {
-           let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-           const qQ = new lW(QQ);
-           let TQ;
-           try {
-             TQ = await qQ.verify(XQ)
-           } catch (sQ) {
-             TQ = await qQ.verify(XQ, !0)
-           }
-           const zQ = Object.assign({}, WQ);
-           return wQ ? Object.assign(zQ, {
-             captchaResp: TQ
-           }) : Object.assign(zQ, {
-             captchaResponse: TQ
-           }), Object.assign(zQ, {
- ... (22 more removed lines; see GitHub link above)
+           get lightSources() {
+             return this._lightSources
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1274-L1305` → after: `L3032-L3034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3032-L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3032-L3034) · [Before (L1274-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1274-L1305)

```diff
-           async runMiddleware(QQ) {
-             if (this.auth.currentUser === QQ) return;
-             const WQ = [];
-             try {
-               for (const XQ of this.queue) await XQ(QQ), XQ.onAbort && WQ.push(XQ.onAbort)
-             } catch (XQ) {
-               WQ.reverse();
-               for (const QQ of WQ) try {
-                 QQ()
-               } catch (wQ) {}
-               throw this.auth._errorFactory.create("login-blocked", {
-                 originalMessage: null === XQ || void 0 === XQ ? void 0 : XQ.message
-               })
-             }
-           }
-         }
- ... (16 more removed lines; see GitHub link above)
+           set skeleton(MM) {
+             const rM = this._internalAbstractMeshDataInfo._skeleton;
+             rM && rM.needInitialSkinMatrix && rM._unregisterMeshWithPoseMatrix(this), MM && MM.needInitialSkinMatrix && MM._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = MM, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMa … [truncated]
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1307-L1310` → after: `L3036-L3037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3036-L3037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3036-L3037) · [Before (L1307-L1310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1307-L1310)

```diff
-           async _onStorageEvent() {
-             if (this._deleted) return;
-             const QQ = await this.assertedPersistence.getCurrentUser();
-             return this.currentUser || QQ ? this.currentUser && QQ && this.currentUser.uid === QQ.uid ? (this._currentUser._assign(QQ), void await this.currentUser.getIdToken()) : void await this._updateCurrentUser(QQ, !0) : void 0
+           get skeleton() {
+             return this._internalAbstractMeshDataInfo._skeleton
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1312` → after: `L3039`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3039) · [Before (L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1312)

```diff
-           async initializeCurrentUser(QQ) {
+           constructor(rM) {
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1314-L1331` → after: `L3041-L3053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3041-L3053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3041-L3053) · [Before (L1314-L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1314-L1331)

```diff
-             const XQ = await this.assertedPersistence.getCurrentUser();
-             let wQ = XQ,
-               qQ = !1;
-             if (QQ && this.config.authDomain) {
-               await this.getOrInitRedirectPersistenceManager();
-               const XQ = null === (WQ = this.redirectUser) || void 0 === WQ ? void 0 : WQ._redirectEventId,
-                 TQ = null === wQ || void 0 === wQ ? void 0 : wQ._redirectEventId,
-                 zQ = await this.tryRedirectSignIn(QQ);
-               XQ && XQ !== TQ || !(null === zQ || void 0 === zQ ? void 0 : zQ.user) || (wQ = zQ.user, qQ = !0)
-             }
-             if (!wQ) return this.directlySetCurrentUser(null);
-             if (!wQ._redirectEventId) {
-               if (qQ) try {
-                 await this.beforeStateQueue.runMiddleware(wQ)
-               } catch (TQ) {
-                 wQ = XQ, this._popupRedirectResolver._overrideRedirectResult(this, (() => Promise.reject(TQ)))
- ... (2 more removed lines; see GitHub link above)
+             let OM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+             switch (super(rM, OM, !1), iM = this, this._internalAbstractMeshDataInfo = new pM, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = MM.CULLINGSTRATEGY … [truncated]
+                 lods: null,
+                 actions: null,
+                 Yk: null
+               }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new SM.d, this._onCollisionPositionChange = function(MM, rM) {
+                 let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
+                 rM.subtractToRef(iM._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, iM._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), iM._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() … [truncated]
+               }, OM = this.Hk(), this.layerMask = OM.defaultRenderableLayerMask, OM.JOM(this), this._resyncLightSources(), this._uniformBuffer = new LM.b(this.Hk().ph(), void 0, void 0, rM, !this.Hk().ph().isWebGPU), this._buildUniformLayout(), OM.performancePriority) {
+               case 2:
+                 this.kh = !0;
+               case 1:
+                 this.Wh = !0, this.AJ = !1
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1335-L1342` → after: `L3056-L3057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3056-L3057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3056-L3057) · [Before (L1335-L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1335-L1342)

```diff
-           async tryRedirectSignIn(QQ) {
-             let WQ = null;
-             try {
-               WQ = await this._popupRedirectResolver._completeRedirectFn(this, QQ, !0)
-             } catch (XQ) {
-               await this._setRedirectUser(null)
-             }
-             return WQ
+           _buildUniformLayout() {
+             this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1344-L1350` → after: `L3059-L3061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3059-L3061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3059-L3061) · [Before (L1344-L1350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1344-L1350)

```diff
-           async reloadAndSetCurrentUserOrClear(QQ) {
-             try {
-               await MQ(QQ)
-             } catch (WQ) {
-               if ("auth/network-request-failed" !== (null === WQ || void 0 === WQ ? void 0 : WQ.code)) return this.directlySetCurrentUser(null)
-             }
-             return this.directlySetCurrentUser(QQ)
+           transferToEffect(MM) {
+             const rM = this._uniformBuffer;
+             rM.p_("world", MM), rM.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), rM.update()
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1352-L1357` → after: `L3063-L3064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3063-L3064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3063-L3064) · [Before (L1352-L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1352-L1357)

```diff
-           useDeviceLanguage() {
-             this.languageCode = function() {
-               if ("undefined" === typeof navigator) return null;
-               const QQ = navigator;
-               return QQ.languages && QQ.languages[0] || QQ.language || null
-             }()
+           getMeshUniformBuffer() {
+             return this._uniformBuffer
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1359-L1360` → after: `L3066-L3067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3066-L3067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3066-L3067) · [Before (L1359-L1360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1359-L1360)

```diff
-           async _delete() {
-             this._deleted = !0
+           get _isGaussianSplatting() {
+             return !1
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1362-L1364` → after: `L3069-L3070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3069-L3070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3069-L3070) · [Before (L1362-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1362-L1364)

```diff
-           async updateCurrentUser(QQ) {
-             const WQ = QQ ? (0, wQ.L)(QQ) : null;
-             return WQ && HQ(WQ.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this._updateCurrentUser(WQ && WQ._clone(this))
+           getClassName() {
+             return "AbstractMesh"
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1366-L1370` → after: `L3072-L3076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3072-L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3072-L3076) · [Before (L1366-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1366-L1370)

```diff
-           async _updateCurrentUser(QQ) {
-             let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-             if (!this._deleted) return QQ && HQ(this.tenantId === QQ.tenantId, this, "tenant-id-mismatch"), WQ || await this.beforeStateQueue.runMiddleware(QQ), this.queue((async () => {
-               await this.directlySetCurrentUser(QQ), this.notifyAuthListeners()
-             }))
+           toString(MM) {
+             let rM = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
+             rM += ", # of submeshes: " + (this.iG ? this.iG.length : 0);
+             const iM = this._internalAbstractMeshDataInfo._skeleton;
+             return iM && (rM += ", skeleton: " + iM.name), MM && (rM += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], rM += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.Yk ? "YES" : "NO")), rM
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1372-L1373` → after: `L3078-L3079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3078-L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3078-L3079) · [Before (L1372-L1373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1372-L1373)

```diff
-           async signOut() {
-             return await this.beforeStateQueue.runMiddleware(null), (this.redirectPersistenceManager || this._popupRedirectResolver) && await this._setRedirectUser(null), this._updateCurrentUser(null, !0)
+           _getEffectiveParent() {
+             return this._masterMesh && this.billboardMode !== nM.e.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1375-L1378` → after: `L3081-L3087`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3081-L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3081-L3087) · [Before (L1375-L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1375-L1378)

```diff
-           setPersistence(QQ) {
-             return this.queue((async () => {
-               await this.assertedPersistence.setPersistence(TW(QQ))
-             }))
+           _getActionManagerForTrigger(MM) {
+             let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+             if (this.actionManager && (rM || this.actionManager.isRecursive)) {
+               if (!MM) return this.actionManager;
+               if (this.actionManager.hasSpecificTrigger(MM)) return this.actionManager
+             }
+             return this.parent ? this.parent._getActionManagerForTrigger(MM, !1) : null
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1380-L1387` → after: `L3089-L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3089-L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3089-L3093) · [Before (L1380-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1380-L1387)

```diff
-           async initializeRecaptchaConfig() {
-             const QQ = await UW(this, {
-                 clientType: "CLIENT_TYPE_WEB",
-                 version: "RECAPTCHA_ENTERPRISE"
-               }),
-               WQ = new dW(QQ);
-             if (null == this.tenantId ? this._agentRecaptchaConfig = WQ : this._tenantRecaptchaConfigs[this.tenantId] = WQ, WQ.emailPasswordEnabled) {
-               new lW(this).verify()
+           _releaseRenderPassId(MM) {}
+           _rebuild() {
+             if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.iG) {
+               for (const MM of this.iG) MM._rebuild();
+               this.resetDrawCache()
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1390-L1391` → after: `L3096-L3099`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3096-L3099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3096-L3099) · [Before (L1390-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1390-L1391)

```diff
-           _getRecaptchaConfig() {
-             return null == this.tenantId ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId]
+           _resyncLightSources() {
+             this._lightSources.length = 0;
+             for (const MM of this.Hk().lights) MM.isEnabled() && MM.canAffectMesh(this) && this._lightSources.push(MM);
+             this._markSubMeshesAsLightDirty()
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1393-L1394` → after: `L3101-L3112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3101-L3112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3101-L3112) · [Before (L1393-L1394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1393-L1394)

```diff
-           _getPersistence() {
-             return this.assertedPersistence.persistence.type
+           _resyncLightSource(MM) {
+             const rM = MM.isEnabled() && MM.canAffectMesh(this),
+               iM = this._lightSources.indexOf(MM);
+             let OM = !1;
+             if (-1 === iM) {
+               if (!rM) return;
+               this._lightSources.push(MM)
+             } else {
+               if (rM) return;
+               OM = !0, this._lightSources.splice(iM, 1)
+             }
+             this._markSubMeshesAsLightDirty(OM)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1396-L1397` → after: `L3114-L3115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3114-L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3114-L3115) · [Before (L1396-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1396-L1397)

```diff
-           _updateErrorMap(QQ) {
-             this._errorFactory = new wQ.h("auth", "Firebase", QQ())
+           _unBindEffect() {
+             for (const MM of this.iG) MM.setEffect(null)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1399-L1400` → after: `L3117-L3118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3117-L3118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3117-L3118) · [Before (L1399-L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1399-L1400)

```diff
-           onAuthStateChanged(QQ, WQ, XQ) {
-             return this.registerStateListener(this.authStateSubscription, QQ, WQ, XQ)
+           _removeLightSource(MM, rM) {
+             const iM = this._lightSources.indexOf(MM); - 1 !== iM && (this._lightSources.splice(iM, 1), this._markSubMeshesAsLightDirty(rM))
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1402-L1403` → after: `L3120-L3126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3120-L3126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3120-L3126) · [Before (L1402-L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1402-L1403)

```diff
-           beforeAuthStateChanged(QQ, WQ) {
-             return this.beforeStateQueue.pushCallback(QQ, WQ)
+           _markSubMeshesAsDirty(MM) {
+             if (this.iG)
+               for (const rM of this.iG)
+                 for (let iM = 0; iM < rM._drawWrappers.length; ++iM) {
+                   const OM = rM._drawWrappers[iM];
+                   OM && OM.defines && OM.defines.markAllAsDirty && MM(OM.defines)
+                 }
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1405-L1406` → after: `L3128-L3130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3128-L3130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3128-L3130) · [Before (L1405-L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1405-L1406)

```diff
-           onIdTokenChanged(QQ, WQ, XQ) {
-             return this.registerStateListener(this.idTokenSubscription, QQ, WQ, XQ)
+           _markSubMeshesAsLightDirty() {
+             let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+             this._markSubMeshesAsDirty((rM => rM.markAsLightDirty(MM)))
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1408-L1415` → after: `L3132-L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3132-L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3132-L3133) · [Before (L1408-L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1408-L1415)

```diff
-           toJSON() {
-             var QQ;
-             return {
-               apiKey: this.config.apiKey,
-               authDomain: this.config.authDomain,
-               appName: this.name,
-               currentUser: null === (QQ = this._currentUser) || void 0 === QQ ? void 0 : QQ.toJSON()
-             }
+           _markSubMeshesAsAttributesDirty() {
+             this._markSubMeshesAsDirty((MM => MM.markAsAttributesDirty()))
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1417-L1419` → after: `L3135-L3136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3135-L3136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3135-L3136) · [Before (L1417-L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1417-L1419)

```diff
-           async _setRedirectUser(QQ, WQ) {
-             const XQ = await this.getOrInitRedirectPersistenceManager(WQ);
-             return null === QQ ? XQ.removeCurrentUser() : XQ.setCurrentUser(QQ)
+           _markSubMeshesAsMiscDirty() {
+             this._markSubMeshesAsDirty((MM => MM.markAsMiscDirty()))
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1421-L1426` → after: `L3138-L3139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3138-L3139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3138-L3139) · [Before (L1421-L1426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1421-L1426)

```diff
-           async getOrInitRedirectPersistenceManager(QQ) {
-             if (!this.redirectPersistenceManager) {
-               const WQ = QQ && TW(QQ) || this._popupRedirectResolver;
-               HQ(WQ, this, "argument-error"), this.redirectPersistenceManager = await PW.create(this, [TW(WQ._redirectPersistence)], "redirectUser"), this.redirectUser = await this.redirectPersistenceManager.getCurrentUser()
-             }
-             return this.redirectPersistenceManager
+           FrM(MM) {
+             return this._currentRenderId = Number.MAX_VALUE, super.FrM(MM), this._isDirty = !0, this
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1428-L1430` → after: `L3141-L3144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3141-L3144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3141-L3144) · [Before (L1428-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1428-L1430)

```diff
-           async _redirectUserForId(QQ) {
-             var WQ, XQ;
-             return this._isInitialized && await this.queue((async () => {})), (null === (WQ = this._currentUser) || void 0 === WQ ? void 0 : WQ._redirectEventId) === QQ ? this._currentUser : (null === (XQ = this.redirectUser) || void 0 === XQ ? void 0 : XQ._redirectEventId) === Q … [truncated]
+           resetDrawCache(MM) {
+             let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+             if (this.iG)
+               for (const iM of this.iG) iM.resetDrawCache(MM, rM)
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1432-L1433` → after: `L3146-L3147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3146-L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3146-L3147) · [Before (L1432-L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1432-L1433)

```diff
-           async _persistUserIfCurrent(QQ) {
-             if (QQ === this.currentUser) return this.queue((async () => this.directlySetCurrentUser(QQ)))
+           get isBlocked() {
+             return !1
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1435-L1436` → after: `L3149-L3150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3149-L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3149-L3150) · [Before (L1435-L1436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1435-L1436)

```diff
-           _notifyListenersIfCurrent(QQ) {
-             QQ === this.currentUser && this.notifyAuthListeners()
+           getLOD(MM) {
+             return this
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1438-L1439` → after: `L3152-L3153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3152-L3153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3152-L3153) · [Before (L1438-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1438-L1439)

```diff
-           _key() {
-             return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
+           getTotalVertices() {
+             return 0
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1441-L1442` → after: `L3155-L3156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3155-L3156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3155-L3156) · [Before (L1441-L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1441-L1442)

```diff
-           _startProactiveRefresh() {
-             this.isProactiveRefreshEnabled = !0, this.currentUser && this._currentUser._startProactiveRefresh()
+           getTotalIndices() {
+             return 0
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1444-L1445` → after: `L3158-L3159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3158-L3159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3158-L3159) · [Before (L1444-L1445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1444-L1445)

```diff
-           _stopProactiveRefresh() {
-             this.isProactiveRefreshEnabled = !1, this.currentUser && this._currentUser._stopProactiveRefresh()
+           hOM() {
+             return null
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1447-L1448` → after: `L3161-L3162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3161-L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3161-L3162) · [Before (L1447-L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1447-L1448)

```diff
-           get _currentUser() {
-             return this.currentUser
+           getVerticesData(MM) {
+             return null
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1450-L1455` → after: `L3164-L3165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3164-L3165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3164-L3165) · [Before (L1450-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1450-L1455)

```diff
-           notifyAuthListeners() {
-             var QQ, WQ;
-             if (!this._isInitialized) return;
-             this.idTokenSubscription.next(this.currentUser);
-             const XQ = null !== (WQ = null === (QQ = this.currentUser) || void 0 === QQ ? void 0 : QQ.uid) && void 0 !== WQ ? WQ : null;
-             this.lastNotifiedUid !== XQ && (this.lastNotifiedUid = XQ, this.authStateSubscription.next(this.currentUser))
+           setVerticesData(MM, rM, iM, OM) {
+             return this
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/276.js` (Changed code · before: `L1457-L1461` → after: `L3167-L3168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651R3167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0b7b4b350829947059488c608c0fd2c60ace308c...build/preprod.bloxd.io/fo1voe.f743fbcf#diff-73afcbf58743160579b96c85e58a4922e295e028cbd6c9535c03a7d25767e651) · [After (L3167-L3168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fo1voe.f743fbcf/bundles/preprod.bloxd.io/chunks/js/276.js#L3167-L3168) · [Before (L1457-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0b7b4b350829947059488c608c0fd2c60ace308c/bundles/preprod.bloxd.io/chunks/js/276.js#L1457-L1461)

```diff
-           registerStateListener(QQ, WQ, XQ, wQ) {
-             if (this._deleted) return () => {};
-             const qQ = "function" === typeof WQ ? WQ : WQ.next.bind(WQ),
-               TQ = this._isInitialized ? Promise.resolve() : this._initializationPromise;
-             return HQ(TQ, this, "internal-error"), TQ.then((() => qQ(this.currentUser))), "function" === typeof WQ ? QQ.addObserver(WQ, XQ, wQ) : QQ.addObserver(WQ)
+           updateVerticesData(MM, rM, iM, OM) {
+             return this
```
