# Changed — Bundle Modifications Report (Part 028 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `28 / 99` (**320** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 027](part-027.md) · [Part 029 →](part-029.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/277.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/277.js` (93 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592)

#### 58. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9179-L9185` → after: `L999-L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L999-L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L999-L1011) · [Before (L9179-L9185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9179-L9185)

```diff
-           const rM = this.getActiveMeshCandidates(),
-             iM = rM.length;
-           if (this._activeMeshesFrozen) {
-             if (!this._skipEvaluateActiveMeshesCompletely)
-               for (let MM = 0; MM < iM; MM++) {
-                 const iM = rM.data[MM];
-                 iM._internalAbstractMeshDataInfo._wasActiveLastFrame && iM.computeWorldMatrix()
+           if (-1 !== QU.indexOf("file:")) {
+             const UU = decodeURIComponent(QU.substring(5).toLowerCase());
+             if (AU.FilesToLoad[UU] && "undefined" !== typeof URL) {
+               try {
+                 let XU;
+                 try {
+                   XU = URL.createObjectURL(AU.FilesToLoad[UU])
+                 } catch (LU) {
+                   XU = URL.createObjectURL(AU.FilesToLoad[UU])
+                 }
+                 aU.src = XU, NU = !0
+               } catch (eU) {
+                 aU.src = ""
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9187-L9189` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1013) · [Before (L9187-L9189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9187-L9189)

```diff
-             if (this.particlesEnabled) {
-               const MM = this._activeParticleSystems.length;
-               for (let rM = 0; rM < MM; rM++) this._activeParticleSystems.data[rM].animate()
+               return aU
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9206-L9269` → after: `L1018-L1041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1018) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1018-L1041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1018-L1041) · [Before (L9206-L9269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9206-L9269)

```diff
-         this.frameGraph?.execute()
-       }
-       _renderRenderTarget(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
-           OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
-         if (this._intermediateRendering = !0, MM._shouldRender()) {
-           if (this._renderId++, this.activeCamera = rM, !this.activeCamera) throw new Error("Active camera not set");
-           this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), MM.render(iM, OM)
-         }
-         this._intermediateRendering = !1
-       }
-       render() {
-         let MM = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
-           rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         if (this.xG) return;
-         const iM = this._renderingMeshEvaluationDepth;
- ... (48 more removed lines; see GitHub link above)
+         return aU
+       },
+       PU = (UU, XU, zU, cU, yU) => {
+         const AU = new FileReader,
+           FU = {
+             onCompleteObservable: new QU.e,
+             abort: () => AU.abort()
+           };
+         return AU.onloadend = () => FU.onCompleteObservable.notifyObservers(FU), yU && (AU.onerror = () => {
+           yU(new kU(`Unable to read ${UU.name}`, UU))
+         }), AU.onload = UU => {
+           XU(UU.target.result)
+         }, zU && (AU.onprogress = zU), cU ? AU.readAsArrayBuffer(UU) : AU.readAsText(UU), FU
+       },
+       WU = (UU, XU, zU, cU, yU, oU, DU) => {
+         if (UU.name) return PU(UU, XU, zU, yU, oU ? UU => {
+ ... (8 more added lines; see GitHub link above)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9271-L9273` → after: `L1043-L1181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1043-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1043-L1181) · [Before (L9271-L9273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9271-L9273)

```diff
-         this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
-         for (let iM = 0, OM = this._afterRenderStage; iM < OM.length; iM++) {
-           OM[iM].action()
+         const {
+           match: YU,
+           type: pU
+         } = wU(EU);
+         if (YU) {
+           const UU = {
+             onCompleteObservable: new QU.e,
+             abort: () => () => {}
+           };
+           try {
+             const UU = yU ? qU(EU) : OU(EU);
+             XU(UU, void 0, pU)
+           } catch (FU) {
+             oU ? oU(void 0, FU) : NU.b.Error(FU.message || "Failed to parse the Data URL")
+           }
+           return IU.e.SetImmediate((() => {
+ ... (123 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9275-L9280` → after: `L1183-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1183-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1183-L1231) · [Before (L9275-L9280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9275-L9280)

```diff
-         if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
-           for (let MM = 0; MM < this._toBeDisposed.length; MM++) {
-             const rM = this._toBeDisposed[MM];
-             rM && rM.dispose()
-           }
-           this._toBeDisposed.length = 0
+       };
+ 
+     function qU(UU) {
+       return (0, oU.b)(UU.split(",")[1])
+     }
+     const OU = UU => (0, oU.d)(UU.split(",")[1]);
+     let SU;
+     const rU = (UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) => {
+       SU = {
+         DecodeBase64UrlToBinary: UU,
+         DecodeBase64UrlToString: XU,
+         DefaultRetryStrategy: zU.DefaultRetryStrategy,
+         BaseUrl: zU.BaseUrl,
+         CorsBehavior: zU.CorsBehavior,
+         PreprocessUrl: zU.PreprocessUrl,
+         IsBase64DataUrl: cU,
+ ... (33 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9282-L9288` → after: `L1233-L1337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1233-L1337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1233-L1337) · [Before (L9282-L9288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9282-L9288)

```diff
-         this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
-       }
-       freezeMaterials() {
-         for (let MM = 0; MM < this.materials.length; MM++) this.materials[MM].freeze()
-       }
-       unfreezeMaterials() {
-         for (let MM = 0; MM < this.materials.length; MM++) this.materials[MM].unfreeze()
+       })
+     };
+     let uU = !1;
+ 
+     function fU() {
+       uU || (uU = !0, rU(qU, OU, GU, CU, eU, WU, RU, PU, dU, BU), EU.c.loadFile = WU, EU.c.loadImage = RU, YU.o.loadFile = WU)
+     }
+   },
+   41179: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => FU,
+       f: () => QU,
+       h: () => AU
+     });
+     let cU = null;
+ 
+ ... (89 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9290-L9325` → after: `L1339-L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1339-L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1339-L1345) · [Before (L9290-L9325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9290-L9325)

```diff
-       dispose() {
-         if (this.xG) return;
-         if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStag … [truncated]
-           for (const MM of this._activeAnimatables) MM.onAnimationEndObservable.clear(), MM.onAnimationEnd = null;
-           this.stopAllAnimations()
-         }
-         this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSyste … [truncated]
-         const MM = this._activeRequests.slice();
-         for (const jM of MM) jM.abort();
-         this._activeRequests.length = 0;
-         try {
-           this.Rk.notifyObservers(this)
-         } catch (SM) {
-           Mi.e.Error("An error occurred while calling onDisposeObservable!", SM)
-         }
-         this.detachControl();
- ... (20 more removed lines; see GitHub link above)
+     }
+ 
+     function QU(UU, XU, zU) {
+       try {
+         if (UU()) return XU(), !0
+       } catch (cU) {
+         return zU?.(cU), !0
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9327-L9331` → after: `L1347-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1347-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1347-L1366) · [Before (L9327-L9331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9327-L9331)

```diff
-       _disposeList(MM, rM) {
-         const iM = MM.slice(0);
-         rM = rM ?? (MM => MM.dispose());
-         for (const OM of iM) rM(OM);
-         MM.length = 0
+       return !1
+     }
+     const AU = function(UU, XU, zU) {
+       let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16,
+         yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3e4,
+         AU = arguments.length > 6 ? arguments[6] : void 0;
+       if ((!(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5]) && QU(UU, XU, zU)) return null;
+       const FU = setInterval((() => {
+         QU(UU, XU, zU) ? clearInterval(FU) : (yU -= cU, yU < 0 && (clearInterval(FU), zU?.(new Error("Operation timed out after maximum retries. " + (AU || "")), !0)))
+       }), cU);
+       return () => clearInterval(FU)
+     }
+   },
+   41160: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => cU
+ ... (4 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9333-L9334` → after: `L1368-L1369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1368-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1368-L1369) · [Before (L9333-L9334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9333-L9334)

```diff
-       get xG() {
-         return this._isDisposed
+       static get IsCustomRequestAvailable() {
+         return Object.keys(cU.CustomRequestHeaders).length > 0 || cU.CustomRequestModifiers.length > 0
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9336-L9340` → after: `L1371-L1372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1371-L1372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1371-L1372) · [Before (L9336-L9340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9336-L9340)

```diff
-       clearCachedVertexData() {
-         for (let MM = 0; MM < this.meshes.length; MM++) {
-           const rM = this.meshes[MM].geometry;
-           rM && rM.clearCachedData()
-         }
+       static _CleanUrl(UU) {
+         return UU = (UU = UU.replace("file:http:", "http:")).replace("file:https:", "https:")
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9342-L9345` → after: `L1374-L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1374-L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1374-L1375) · [Before (L9342-L9345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9342-L9345)

```diff
-       cleanCachedTextureBuffer() {
-         for (const MM of this.textures) {
-           MM._buffer && (MM._buffer = null)
-         }
+       static _ShouldSkipRequestModifications(UU) {
+         return cU.SkipRequestModificationForBabylonCDN && (UU.includes("preview.babylonjs.com") || UU.includes("cdn.babylonjs.com"))
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9347-L9364` → after: `L1377-L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1377-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1377-L1387) · [Before (L9347-L9364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9347-L9364)

```diff
-       getWorldExtends(MM) {
-         const rM = new zM.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
-           iM = new zM.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
-         MM = MM || (() => !0);
-         const OM = this.meshes.filter(MM);
-         for (const SM of OM) {
-           if (SM.computeWorldMatrix(!0), !SM.iG || 0 === SM.iG.length || SM.infiniteDistance) continue;
-           const MM = SM.aY(),
-             OM = MM.boundingBox.minimumWorld,
-             jM = MM.boundingBox.maximumWorld;
-           zM.q.CheckExtends(OM, rM, iM), zM.q.CheckExtends(jM, rM, iM)
-         }
-         return rM.x === Number.MAX_VALUE ? {
-           min: zM.q.Zero(),
-           max: zM.q.Zero()
-         } : {
- ... (2 more removed lines; see GitHub link above)
+       static _CollectCustomizations(UU) {
+         const XU = {
+           ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
+         };
+         if (cU._ShouldSkipRequestModifications(UU)) return {
+           url: UU,
+           headers: XU
+         };
+         for (const yU in cU.CustomRequestHeaders) {
+           const UU = cU.CustomRequestHeaders[yU];
+           UU && (XU[yU] = UU)
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9366-L9420` → after: `L1389-L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1389-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1389-L1397) · [Before (L9366-L9420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9366-L9420)

```diff
-       }
-       createPickingRay(MM, rM, iM, OM) {
-         throw (0, GM.n)("Ray")
-       }
-       createPickingRayToRef(MM, rM, iM, OM, SM) {
-         throw (0, GM.n)("Ray")
-       }
-       createPickingRayInCameraSpace(MM, rM, iM) {
-         throw (0, GM.n)("Ray")
-       }
-       createPickingRayInCameraSpaceToRef(MM, rM, iM, OM) {
-         throw (0, GM.n)("Ray")
-       }
-       LH(MM, rM, iM, OM, SM, jM) {
-         const aM = (0, GM.n)("Ray", !0);
-         return aM && Mi.e.Warn(aM), new HM.c
- ... (39 more removed lines; see GitHub link above)
+         const zU = {
+           setRequestHeader: (UU, zU) => {
+             XU[UU] = zU
+           }
+         };
+         for (const yU of cU.CustomRequestModifiers) {
+           if (cU._ShouldSkipRequestModifications(UU)) break;
+           const XU = yU(zU, UU);
+           "string" === typeof XU && (UU = XU)
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9422-L9493` → after: `L1399-L1416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1399-L1416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1399-L1416) · [Before (L9422-L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9422-L9493)

```diff
-         return OM
-       }
-       getMeshesByTags(MM, rM) {
-         return this._getByTags(this.meshes, MM, rM)
-       }
-       getCamerasByTags(MM, rM) {
-         return this._getByTags(this.cameras, MM, rM)
-       }
-       getLightsByTags(MM, rM) {
-         return this._getByTags(this.lights, MM, rM)
-       }
-       getMaterialByTags(MM, rM) {
-         return this._getByTags(this.materials, MM, rM).concat(this._getByTags(this.multiMaterials, MM, rM))
-       }
-       getTransformNodesByTags(MM, rM) {
-         return this._getByTags(this.transformNodes, MM, rM)
- ... (56 more removed lines; see GitHub link above)
+         return {
+           url: UU,
+           headers: XU
+         }
+       }
+       static async FetchAsync(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
+         const zU = XU.method ?? "GET";
+         if ("undefined" !== typeof fetch) {
+           const {
+             url: yU,
+             headers: QU
+           } = cU._CollectCustomizations(cU._CleanUrl(UU), XU.headers ?? {});
+           return await fetch(yU, {
+             method: zU,
+             headers: QU,
+ ... (2 more added lines; see GitHub link above)
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9520-L9524` → after: `L1419-L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1419-L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1419-L1439) · [Before (L9520-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9520-L9524)

```diff
-           this._readFile(MM, (MM => {
-             OM(MM)
-           }), rM, iM, (MM => {
-             SM(MM)
-           }))
+           const AU = new cU;
+           AU.responseType = "arraybuffer", AU.addEventListener("readystatechange", (() => {
+             if (4 === AU.readyState)
+               if (AU.status >= 200 && AU.status < 300) {
+                 const UU = "undefined" !== typeof Headers ? new Headers : void 0,
+                   XU = AU.getResponseHeader("Content-Type");
+                 XU && UU && UU.set("Content-Type", XU), "undefined" !== typeof Response ? yU(new Response(AU.response, {
+                   status: AU.status,
+                   statusText: AU.statusText,
+                   headers: UU
+                 })) : yU({
+                   ok: !0,
+                   status: AU.status,
+                   statusText: AU.statusText,
+                   headers: {
+                     get: UU => AU.getResponseHeader(UU)
+ ... (5 more added lines; see GitHub link above)
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9527-L9543` → after: `L1442-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1442-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1442-L1443) · [Before (L9527-L9543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9527-L9543)

```diff
-       getPerfCollector() {
-         throw (0, GM.n)("performanceViewerSceneExtension")
-       }
-       setActiveCameraByID(MM) {
-         return this.setActiveCameraById(MM)
-       }
-       getMaterialByID(MM) {
-         return this.getMaterialById(MM)
-       }
-       getLastMaterialByID(MM) {
-         return this.getLastMaterialById(MM)
-       }
-       getTextureByUniqueID(MM) {
-         return this.getTextureByUniqueId(MM)
-       }
-       getCameraByID(MM) {
- ... (1 more removed lines; see GitHub link above)
+       get requestURL() {
+         return this._requestURL
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9545-L9546` → after: `L1445-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1445-L1446) · [Before (L9545-L9546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9545-L9546)

```diff
-       getCameraByUniqueID(MM) {
-         return this.getCameraByUniqueId(MM)
+       get onprogress() {
+         return this._xhr.onprogress
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9548-L9549` → after: `L1448-L1449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1448-L1449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1448-L1449) · [Before (L9548-L9549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9548-L9549)

```diff
-       getBoneByID(MM) {
-         return this.getBoneById(MM)
+       set onprogress(UU) {
+         this._xhr.onprogress = UU
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9551-L9552` → after: `L1451-L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1451-L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1451-L1452) · [Before (L9551-L9552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9551-L9552)

```diff
-       getLightByID(MM) {
-         return this.getLightById(MM)
+       get readyState() {
+         return this._xhr.readyState
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9554-L9555` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1454-L1455) · [Before (L9554-L9555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9554-L9555)

```diff
-       getLightByUniqueID(MM) {
-         return this.getLightByUniqueId(MM)
+       get status() {
+         return this._xhr.status
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9557-L9558` → after: `L1457-L1458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1457-L1458) · [Before (L9557-L9558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9557-L9558)

```diff
-       getParticleSystemByID(MM) {
-         return this.getParticleSystemById(MM)
+       get statusText() {
+         return this._xhr.statusText
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9560-L9561` → after: `L1460-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1460-L1461) · [Before (L9560-L9561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9560-L9561)

```diff
-       getGeometryByID(MM) {
-         return this.getGeometryById(MM)
+       get response() {
+         return this._xhr.response
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9563-L9564` → after: `L1463-L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1463-L1464) · [Before (L9563-L9564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9563-L9564)

```diff
-       getMeshByID(MM) {
-         return this.getMeshById(MM)
+       get responseURL() {
+         return this._xhr.responseURL
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9566-L9567` → after: `L1466-L1467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1466-L1467) · [Before (L9566-L9567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9566-L9567)

```diff
-       getMeshByUniqueID(MM) {
-         return this.getMeshByUniqueId(MM)
+       get responseText() {
+         return this._xhr.responseText
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9569-L9570` → after: `L1469-L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1469-L1470) · [Before (L9569-L9570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9569-L9570)

```diff
-       getLastMeshByID(MM) {
-         return this.getLastMeshById(MM)
+       get responseType() {
+         return this._xhr.responseType
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9572-L9573` → after: `L1472-L1473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1472-L1473) · [Before (L9572-L9573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9572-L9573)

```diff
-       getMeshesByID(MM) {
-         return this.getMeshesById(MM)
+       set responseType(UU) {
+         this._xhr.responseType = UU
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9575-L9576` → after: `L1475-L1476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1475-L1476) · [Before (L9575-L9576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9575-L9576)

```diff
-       getTransformNodeByID(MM) {
-         return this.getTransformNodeById(MM)
+       get timeout() {
+         return this._xhr.timeout
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9578-L9579` → after: `L1478-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1478-L1479) · [Before (L9578-L9579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9578-L9579)

```diff
-       getTransformNodeByUniqueID(MM) {
-         return this.getTransformNodeByUniqueId(MM)
+       set timeout(UU) {
+         this._xhr.timeout = UU
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9581-L9582` → after: `L1481-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1481-L1482) · [Before (L9581-L9582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9581-L9582)

```diff
-       getTransformNodesByID(MM) {
-         return this.getTransformNodesById(MM)
+       addEventListener(UU, XU, zU) {
+         this._xhr.addEventListener(UU, XU, zU)
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9584-L9610` → after: `L1484-L1485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1484-L1485) · [Before (L9584-L9610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9584-L9610)

```diff
-       getNodeByID(MM) {
-         return this.getNodeById(MM)
-       }
-       getLastEntryByID(MM) {
-         return this.getLastEntryById(MM)
-       }
-       getLastSkeletonByID(MM) {
-         return this.getLastSkeletonById(MM)
-       }
-     }
-     ji.FOGMODE_NONE = 0, ji.FOGMODE_EXP = 1, ji.FOGMODE_EXP2 = 2, ji.FOGMODE_LINEAR = 3, ji.MinDeltaTime = 1, ji.MaxDeltaTime = 1e3, ji._OriginalDefaultMaterialFactory = ji.DefaultMaterialFactory;
-     let ai = !1;
- 
-     function Pi() {
-       ai || (ai = !0, (0, ri.e)("BABYLON.Scene", ji))
-     }(cM = ji.prototype).sortActiveAnimatables ?? (cM.sortActiveAnimatables = (0, GM.j)("Scene", "sortActiveAnimatables")), (Mr = ji.prototype).beginWeightedAnimation ?? (Mr.beginWeightedAnimation = (0, GM.j)("Scene", "beginWeightedAnimation")), (rr = ji.prototype).beginAnimation … [truncated]
- ... (11 more removed lines; see GitHub link above)
+       removeEventListener(UU, XU, zU) {
+         this._xhr.removeEventListener(UU, XU, zU)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9612-L9613` → after: `L1487-L1488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1487-L1488) · [Before (L9612-L9613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9612-L9613)

```diff
-       static Create() {
-         return Object.create(SM.prototype)
+       abort() {
+         this._xhr.abort()
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9615-L9624` → after: `L1490-L1491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1490-L1491) · [Before (L9615-L9624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9615-L9624)

```diff
-       registerStep(MM, rM, iM) {
-         let OM, SM = 0;
-         for (; SM < this.length; SM++) {
-           if (OM = this[SM].index, MM < OM) break
-         }
-         this.splice(SM, 0, {
-           index: MM,
-           component: rM,
-           action: iM.bind(rM)
-         })
+       send(UU) {
+         this._xhr.send(UU)
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9626-L9627` → after: `L1493-L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1493-L1499) · [Before (L9626-L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9626-L9627)

```diff
-       clear() {
-         this.length = 0
+       open(UU, XU, zU) {
+         const {
+           url: yU,
+           headers: QU
+         } = cU._CollectCustomizations(XU, zU);
+         this._requestURL = cU._CleanUrl(yU), this._xhr.open(UU, this._requestURL, !0);
+         for (const cU in QU) this._xhr.setRequestHeader(cU, QU[cU])
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9629-L9643` → after: `L1501-L1502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1501-L1502) · [Before (L9629-L9643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9629-L9643)

```diff
-     }
-   },
-   41099: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM,
-       f: () => PM,
-       i: () => OM,
-       m: () => SM,
-       p: () => jM
-     });
- 
-     function OM(MM, rM, iM, OM, SM, jM) {
-       function aM(MM) {
-         if (void 0 !== MM && "function" !== typeof MM) throw new TypeError("Function expected");
-         return MM
+       setRequestHeader(UU, XU) {
+         this._xhr.setRequestHeader(UU, XU)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9645-L9661` → after: `L1504-L1505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1504-L1505) · [Before (L9645-L9661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9645-L9661)

```diff
-       for (var PM, nM = OM.kind, QM = "getter" === nM ? "get" : "setter" === nM ? "set" : "value", zM = !rM && MM ? OM.static ? MM : MM.prototype : null, LM = rM || (zM ? Object.getOwnPropertyDescriptor(zM, OM.name) : {}), mM = !1, HM = iM.length - 1; HM >= 0; HM--) {
-         var hM = {};
-         for (var JM in OM) hM[JM] = "access" === JM ? {} : OM[JM];
-         for (var JM in OM.access) hM.access[JM] = OM.access[JM];
-         hM.addInitializer = function(MM) {
-           if (mM) throw new TypeError("Cannot add initializers after decoration has completed");
-           jM.push(aM(MM || null))
-         };
-         var dM = (0, iM[HM])("accessor" === nM ? {
-           get: LM.get,
-           set: LM.set
-         } : LM[QM], hM);
-         if ("accessor" === nM) {
-           if (void 0 === dM) continue;
-           if (null === dM || "object" !== typeof dM) throw new TypeError("Object expected");
-           (PM = aM(dM.get)) && (LM.get = PM), (PM = aM(dM.set)) && (LM.set = PM), (PM = aM(dM.init)) && SM.unshift(PM)
- ... (1 more removed lines; see GitHub link above)
+       getResponseHeader(UU) {
+         return this._xhr.getResponseHeader(UU)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/277.js` (Changed code · before: `L9692` → after: `L1508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592R1508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c78a0f0179be4fcc5ef63c7c859a646faf811d549723cecaae5e9a1bf9059592) · [After (L1508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/277.js#L1508) · [Before (L9692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/277.js#L9692)

```diff
-     "function" === typeof SuppressedError && SuppressedError
+     cU.CustomRequestHeaders = {}, cU.CustomRequestModifiers = new Array, cU.SkipRequestModificationForBabylonCDN = !0
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/278.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/278.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/278.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/278.js#L2)

```diff
- export const ids = [278, 662];
+ export const ids = [278];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L4` → after: `L4-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L4-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/278.js#L4-L24) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/278.js#L4)

```diff
-   40964: (MM, rM, iM) => {
+   41207: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => QU
+     });
+     var cU = zU(39493),
+       yU = zU(37863);
+     class QU {
+       static Instantiate(UU) {
+         if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[UU]) return this.RegisteredExternalClasses[UU];
+         const XU = (0, yU.e)(UU);
+         if (XU) return XU;
+         cU.b.Warn(UU + " not found, you may have missed an import.");
+         const zU = UU.split(".");
+         let QU = "undefined" !== typeof window ? window : "undefined" !== typeof globalThis ? globalThis : this;
+         for (let cU = 0, yU = zU.length; cU < yU; cU++) QU = QU[zU[cU]];
+         return "function" !== typeof QU ? null : QU
+ ... (5 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L9-L19` → after: `L30-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L30-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/278.js#L30-L33) · [Before (L9-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/278.js#L9-L19)

```diff
-       static GetShadersRepository() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersRepository : OM.ShadersRepositoryWGSL
-       }
-       static GetShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.ShadersStore : OM.ShadersStoreWGSL
-       }
-       static GetIncludesShadersStore() {
-         return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? OM.IncludesShadersStore : OM.IncludesShadersStoreWGSL
-       }
-     }
-     OM.ShadersRepository = "src/Shaders/", OM.ShadersStore = {}, OM.IncludesShadersStore = {}, OM.ShadersRepositoryWGSL = "src/ShadersWGSL/", OM.ShadersStoreWGSL = {}, OM.IncludesShadersStoreWGSL = {}
+       static get Now() {
+         return (0, cU.h)() && window.performance && window.performance.now ? window.performance.now() : Date.now()
+       }
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L21-L23` → after: `L35-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L35-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/278.js#L35-L89) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/278.js#L21-L23)

```diff
-   63910: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       postprocessVertexShader: () => aM
+   41036: (UU, XU, zU) => {
+     function cU(UU) {
+       let XU = 1;
+       do {
+         XU *= 2
+       } while (XU < UU);
+       return XU === UU
+     }
+ 
+     function yU(UU, XU, zU) {
+       return UU * (1 - zU) + XU * zU
+     }
+ 
+     function QU(UU) {
+       const XU = AU(UU),
+         zU = FU(UU);
+ ... (39 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/278.js` (Changed code · before: `L25-L31` → after: `L91-L612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098fR91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-c9075e30ced0dcd7dbb0cf786bd47b84f1eceb74a8881c189f69542bf2de098f) · [After (L91-L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/278.js#L91-L612) · [Before (L25-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/278.js#L25-L31)

```diff
-     var OM = iM(40964);
-     const SM = "postprocessVertexShader",
-       jM = "attribute vec2 position;uniform vec2 scale;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd)*scale;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTE … [truncated]
-     OM.e.ShadersStore[SM] || (OM.e.ShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
+     var cU, yU = zU(37846),
+       QU = zU(40971),
+       AU = zU(39493),
+       FU = zU(39486),
+       oU = zU(41010),
+       DU = zU(40989),
+       EU = zU(41160),
+       YU = zU(37841),
+       NU = zU(41152),
+       IU = zU(40999),
+       pU = zU(41207),
+       aU = zU(38649),
+       tU = zU(41036);
+     class gU {
+       static get BaseUrl() {
+         return NU.g.BaseUrl
+ ... (506 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/279.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/279.js` (83 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef)

#### 1. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L4)

```diff
-   41167: (MM, rM, iM) => {
+   41508: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L6-L12` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L6) · [Before (L6-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L6-L12)

```diff
-       c: () => mM,
-       f: () => LM,
-       h: () => nM,
-       i: () => HM,
-       m: () => QM,
-       n: () => PM,
-       r: () => zM
+       c: () => cU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L14-L235` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L8) · [Before (L14-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L14-L235)

```diff
-     var OM = iM(39711),
-       SM = iM(41176);
- 
-     function jM(MM, rM, iM, OM) {
-       switch (rM) {
-         case 5120: {
-           let rM = MM.getInt8(iM);
-           return OM && (rM = Math.max(rM / 127, -1)), rM
-         }
-         case 5121: {
-           let rM = MM.getUint8(iM);
-           return OM && (rM /= 255), rM
-         }
-         case 5122: {
-           let rM = MM.getInt16(iM, !0);
-           return OM && (rM = Math.max(rM / 32767, -1)), rM
- ... (206 more removed lines; see GitHub link above)
+     let cU = !1
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L237` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L10) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L237)

```diff
-   40998: (MM, rM, iM) => {
+   41108: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L239-L243` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L12) · [Before (L239-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L239-L243)

```diff
-       b: () => bM,
-       c: () => CM,
-       h: () => eM,
-       e: () => WM,
-       i: () => sM
+       e: () => pU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L246-L247` → after: `L22-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L22-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L22-L23) · [Before (L246-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L246-L247)

```diff
-       constructor() {
-         this.children = []
+       get wrapU() {
+         return this._wrapU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L249-L250` → after: `L25-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L25-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L25-L26) · [Before (L249-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L249-L250)

```diff
-       isValid(MM) {
-         return !0
+       set wrapU(UU) {
+         this._wrapU = UU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L252-L274` → after: `L28-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L28-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L28-L29) · [Before (L252-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L252-L274)

```diff
-       process(MM, rM, iM) {
-         let OM = "";
-         if (this.line) {
-           let iM = this.line;
-           const SM = rM.processor;
-           if (SM) {
-             SM.lineProcessor && (iM = SM.lineProcessor(iM, rM.isFragment, rM.processingContext));
-             const OM = rM.processor?.attributeKeywordName ?? "attribute",
-               jM = rM.isFragment && rM.processor?.varyingFragmentKeywordName ? rM.processor?.varyingFragmentKeywordName : !rM.isFragment && rM.processor?.varyingVertexKeywordName ? rM.processor?.varyingVertexKeywordName : "varying";
-             if (!rM.isFragment && SM.attributeProcessor && this.line.startsWith(OM)) iM = SM.attributeProcessor(this.line, MM, rM.processingContext);
-             else if (SM.varyingProcessor && (SM.varyingCheck?.(this.line, rM.isFragment) || !SM.varyingCheck && this.line.startsWith(jM))) iM = SM.varyingProcessor(this.line, rM.isFragment, MM, rM.processingContext);
-             else if (SM.uniformProcessor && SM.uniformRegexp && SM.uniformRegexp.test(this.line)) rM.lookForClosingBracketForUniformBuffer || (iM = SM.uniformProcessor(this.line, rM.isFragment, MM, rM.processingContext));
-             else if (SM.uniformBufferProcessor && SM.uniformBufferRegexp && SM.uniformBufferRegexp.test(this.line)) rM.lookForClosingBracketForUniformBuffer || (iM = SM.uniformBufferProcessor(this.line, rM.isFragment, rM.processingContext), rM.lookForClosingBracketForUniformBuffe … [truncated]
-             else if (SM.textureProcessor && SM.textureRegexp && SM.textureRegexp.test(this.line)) iM = SM.textureProcessor(this.line, rM.isFragment, MM, rM.processingContext);
-             else if ((SM.uniformProcessor || SM.uniformBufferProcessor) && this.line.startsWith("uniform") && !rM.lookForClosingBracketForUniformBuffer) {
-               /uniform\s+(?:(?:highp)?|(?:lowp)?)\s*(\S+)\s+(\S+)\s*;/.test(this.line) ? SM.uniformProcessor && (iM = SM.uniformProcessor(this.line, rM.isFragment, MM, rM.processingContext)) : SM.uniformBufferProcessor && (iM = SM.uniformBufferProcessor(this.line, rM.isFragment,  … [truncated]
- ... (7 more removed lines; see GitHub link above)
+       get wrapV() {
+         return this._wrapV
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L276-L279` → after: `L31-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L31-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L31-L32) · [Before (L276-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L276-L279)

```diff
-     }
-     class SM {
-       constructor() {
-         this._lines = []
+       set wrapV(UU) {
+         this._wrapV = UU
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L281-L282` → after: `L34-L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L34-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L34-L35) · [Before (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L281-L282)

```diff
-       get currentLine() {
-         return this._lines[this.lineIndex]
+       get coordinatesMode() {
+         return 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L284-L285` → after: `L37-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L37-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L37-L38) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L284-L285)

```diff
-       get canRead() {
-         return this.lineIndex < this._lines.length - 1
+       get isCube() {
+         return !!this._texture && this._texture.isCube
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L287-L311` → after: `L40-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR40) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L40-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L40-L41) · [Before (L287-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L287-L311)

```diff
-       set lines(MM) {
-         this._lines.length = 0;
-         for (const rM of MM) {
-           if (!rM || "\r" === rM) continue;
-           if ("#" === rM[0]) {
-             this._lines.push(rM);
-             continue
-           }
-           const MM = rM.trim();
-           if (!MM) continue;
-           if (MM.startsWith("//")) {
-             this._lines.push(rM);
-             continue
-           }
-           const iM = MM.indexOf(";");
-           if (-1 === iM) this._lines.push(MM);
- ... (9 more removed lines; see GitHub link above)
+       set isCube(UU) {
+         this._texture && (this._texture.isCube = UU)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L313-L320` → after: `L43-L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L43-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L43-L44) · [Before (L313-L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L313-L320)

```diff
-     }
-     class jM extends OM {
-       process(MM, rM, iM) {
-         for (let OM = 0; OM < this.children.length; OM++) {
-           const SM = this.children[OM];
-           if (SM.isValid(MM)) return SM.process(MM, rM, iM)
-         }
-         return ""
+       get is3D() {
+         return !!this._texture && this._texture.is3D
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L322-L325` → after: `L46-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L46-L47) · [Before (L322-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L322-L325)

```diff
-     }
-     class aM extends OM {
-       isValid(MM) {
-         return this.testExpression.isTrue(MM)
+       set is3D(UU) {
+         this._texture && (this._texture.is3D = UU)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L327-L330` → after: `L49-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L49-L50) · [Before (L327-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L327-L330)

```diff
-     }
-     class PM {
-       isTrue(MM) {
-         return !0
+       get is2DArray() {
+         return !!this._texture && this._texture.is2DArray
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L332-L340` → after: `L52-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L52-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L52-L53) · [Before (L332-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L332-L340)

```diff
-       static postfixToInfix(MM) {
-         const rM = [];
-         for (const iM of MM)
-           if (void 0 === PM._OperatorPriority[iM]) rM.push(iM);
-           else {
-             const MM = rM[rM.length - 1],
-               OM = rM[rM.length - 2];
-             rM.length -= 2, rM.push(`(${OM}${iM}${MM})`)
-           } return rM[rM.length - 1]
+       set is2DArray(UU) {
+         this._texture && (this._texture.is2DArray = UU)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L342-L375` → after: `L55-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR55) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L55-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L55-L56) · [Before (L342-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L342-L375)

```diff
-       static infixToPostfix(MM) {
-         const rM = PM._InfixToPostfixCache.get(MM);
-         if (rM) return rM.accessTime = Date.now(), rM.result;
-         if (!MM.includes("&&") && !MM.includes("||") && !MM.includes(")") && !MM.includes("(")) return [MM];
-         const iM = [];
-         let OM = -1;
-         const SM = () => {
-             zM = zM.trim(), "" !== zM && (iM.push(zM), zM = "")
-           },
-           jM = MM => {
-             OM < PM._Stack.length - 1 && (PM._Stack[++OM] = MM)
-           },
-           aM = () => PM._Stack[OM],
-           nM = () => -1 === OM ? "!!INVALID EXPRESSION!!" : PM._Stack[OM--];
-         let QM = 0,
-           zM = "";
- ... (18 more removed lines; see GitHub link above)
+       getClassName() {
+         return "ThinTexture"
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L377-L379` → after: `L58-L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L58-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L58-L59) · [Before (L377-L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L377-L379)

```diff
-       static ClearCache() {
-         const MM = Array.from(PM._InfixToPostfixCache.entries()).sort(((MM, rM) => MM[1].accessTime - rM[1].accessTime));
-         for (let rM = 0; rM < PM.InfixToPostfixCacheCleanupSize; rM++) PM._InfixToPostfixCache.delete(MM[rM][0])
+       static _IsRenderTargetWrapper(UU) {
+         return void 0 !== UU?.shareDepth
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L390-L391` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L62) · [Before (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L390-L391)

```diff
-         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
-         super(), this.define = MM, this.not = rM
+         this._wrapU = 1, this._wrapV = 1, this.wrapR = 1, this.anisotropicFilteringLevel = 4, this.delayLoadState = 0, this._texture = null, this._engine = null, this._cachedSize = DU.d.Zero(), this._cachedBaseSize = DU.d.Zero(), this._initialSamplingMode = 2, this._texture = EU. … [truncated]
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L393-L395` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L64-L65) · [Before (L393-L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L393-L395)

```diff
-       isTrue(MM) {
-         let rM = void 0 !== MM[this.define];
-         return this.not && (rM = !rM), rM
+       isReady() {
+         return 4 === this.delayLoadState ? (this.delayLoad(), !1) : !!this._texture && this._texture.isReady
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L397-L400` → after: `L67-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L67-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L67-L69) · [Before (L397-L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L397-L400)

```diff
-     }
-     class QM extends PM {
-       isTrue(MM) {
-         return this.leftOperand.isTrue(MM) || this.rightOperand.isTrue(MM)
+       delayLoad() {}
+       getInternalTexture() {
+         return this._texture
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L402-L405` → after: `L71-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L71-L76) · [Before (L402-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L402-L405)

```diff
-     }
-     class zM extends PM {
-       isTrue(MM) {
-         return this.leftOperand.isTrue(MM) && this.rightOperand.isTrue(MM)
+       getSize() {
+         if (this._texture) {
+           if (this._texture.width) return this._cachedSize.width = this._texture.width, this._cachedSize.height = this._texture.height, this._cachedSize;
+           if (this._texture._size) return this._cachedSize.width = this._texture._size, this._cachedSize.height = this._texture._size, this._cachedSize
+         }
+         return this._cachedSize
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L407-L410` → after: `L78-L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L78-L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L78-L79) · [Before (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L407-L410)

```diff
-     }
-     class LM extends PM {
-       constructor(MM, rM, iM) {
-         super(), this.define = MM, this.operand = rM, this.testValue = iM
+       getBaseSize() {
+         return this.isReady() && this._texture ? this._texture._size ? (this._cachedBaseSize.width = this._texture._size, this._cachedBaseSize.height = this._texture._size, this._cachedBaseSize) : (this._cachedBaseSize.width = this._texture.baseWidth, this._cachedBaseSize.height  … [truncated]
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L412-L413` → after: `L81-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR81) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L81-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L81-L82) · [Before (L412-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L412-L413)

```diff
-       toString() {
-         return `${this.define} ${this.operand} ${this.testValue}`
+       get samplingMode() {
+         return this._texture ? this._texture.samplingMode : this._initialSamplingMode
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L415-L439` → after: `L84-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L84-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L84-L86) · [Before (L415-L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L415-L439)

```diff
-       isTrue(MM) {
-         let rM = !1;
-         const iM = parseInt(void 0 != MM[this.define] ? MM[this.define] : this.define),
-           OM = parseInt(void 0 != MM[this.testValue] ? MM[this.testValue] : this.testValue);
-         if (isNaN(iM) || isNaN(OM)) return !1;
-         switch (this.operand) {
-           case ">":
-             rM = iM > OM;
-             break;
-           case "<":
-             rM = iM < OM;
-             break;
-           case "<=":
-             rM = iM <= OM;
-             break;
-           case ">=":
- ... (9 more removed lines; see GitHub link above)
+       updateSamplingMode(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         this._texture && this._engine && this._engine.updateTextureSamplingMode(UU, this._texture, this._texture.generateMipMaps && XU)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L441-L485` → after: `L88-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L88-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L88-L92) · [Before (L441-L485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L441-L485)

```diff
-     }
-     var mM = iM(40990),
-       HM = iM(40981);
-     const hM = /defined\s*?\((.+?)\)/g,
-       JM = /defined\s*?\[(.+?)\]/g,
-       dM = /#include\s?<(.+)>(\((.*)\))*(\[(.*)\])*/g,
-       yM = /__decl__/,
-       lM = /light\{X\}.(\w*)/g,
-       EM = /\{X\}/g,
-       UM = [],
-       GM = /(#ifdef)|(#else)|(#elif)|(#endif)|(#ifndef)|(#if)/;
- 
-     function CM(MM) {
-       MM.processor && MM.processor.initializeShaders && MM.processor.initializeShaders(MM.processingContext)
-     }
- 
- ... (29 more removed lines; see GitHub link above)
+       releaseInternalTexture() {
+         this._texture && (this._texture.dispose(), this._texture = null)
+       }
+       dispose() {
+         this._texture && (this.releaseInternalTexture(), this._engine = null)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L488-L518` → after: `L95-L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L95-L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L95-L133) · [Before (L488-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L488-L518)

```diff
- 
-     function wM(MM) {
-       const rM = /defined\((.+)\)/.exec(MM);
-       if (rM && rM.length) return new nM(rM[1].trim(), "!" === MM[0]);
-       const iM = ["==", "!=", ">=", "<=", "<", ">"];
-       let OM = "",
-         SM = 0;
-       for (OM of iM)
-         if (SM = MM.indexOf(OM), SM > -1) break;
-       if (-1 === SM) return new nM(MM);
-       const jM = MM.substring(0, SM).trim(),
-         aM = MM.substring(SM + OM.length).trim();
-       return new LM(jM, OM, aM)
-     }
- 
-     function tM(MM, rM) {
- ... (15 more removed lines; see GitHub link above)
+     var YU, NU = zU(41134),
+       IU = zU(40989);
+     let pU = (() => {
+       var UU;
+       let XU, zU, DU, YU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU, qU, OU, SU, rU, uU = EU,
+         fU = [],
+         iU = [],
+         HU = [],
+         MU = [],
+         vU = [],
+         VU = [],
+         sU = [],
+         nU = [],
+         mU = [],
+         lU = [],
+         xU = [],
+ ... (23 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L520-L532` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L135-L136) · [Before (L520-L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L520-L532)

```diff
-         let OM = iM[iM.length - 1];
-         return "string" === typeof OM && (OM = OM.replace(JM, "defined($1)")), "string" === typeof OM ? wM(OM) : OM
-       }(SM), iM
-     }
- 
-     function gM(MM, rM, iM, SM) {
-       let jM;
-       for (; uM(MM, iM, SM);) {
-         jM = MM.currentLine;
-         const aM = jM.substring(0, 5).toLowerCase();
-         if ("#else" === aM) {
-           const iM = new OM;
-           return rM.children.push(iM), void uM(MM, iM, SM)
+         get hasAlpha() {
+           return this._hasAlpha
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L534-L536` → after: `L138-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L138-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L138-L139) · [Before (L534-L536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L534-L536)

```diff
-         if ("#elif" === aM) {
-           const MM = tM(jM, 5);
-           rM.children.push(MM), iM = MM
+         set getAlphaFromRGB(UU) {
+           this._getAlphaFromRGB !== UU && (this._getAlphaFromRGB = UU, this._scene && this._scene.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L538-L575` → after: `L141-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L141-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L141-L195) · [Before (L538-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L538-L575)

```diff
-       }
-     }
- 
-     function uM(MM, rM, iM) {
-       for (; MM.canRead;) {
-         MM.lineIndex++;
-         const SM = MM.currentLine;
-         if (SM.indexOf("#") >= 0) {
-           const OM = GM.exec(SM);
-           if (OM && OM.length) {
-             switch (OM[0]) {
-               case "#ifdef": {
-                 const OM = new jM;
-                 rM.children.push(OM);
-                 const aM = tM(SM, 6);
-                 OM.children.push(aM), gM(MM, OM, aM, iM);
- ... (22 more removed lines; see GitHub link above)
+         get getAlphaFromRGB() {
+           return this._getAlphaFromRGB
+         }
+         set coordinatesIndex(UU) {
+           this._coordinatesIndex !== UU && (this._coordinatesIndex = UU, this._scene && this._scene.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))))
+         }
+         get coordinatesIndex() {
+           return this._coordinatesIndex
+         }
+         set coordinatesMode(UU) {
+           this._coordinatesMode !== UU && (this._coordinatesMode = UU, this._scene && this._scene.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))))
+         }
+         get coordinatesMode() {
+           return this._coordinatesMode
+         }
+         get wrapU() {
+ ... (39 more added lines; see GitHub link above)
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L578-L581` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L199-L200) · [Before (L578-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L578-L581)

```diff
-         const aM = new OM;
-         if (aM.line = SM, rM.children.push(aM), "#" === SM[0] && "d" === SM[1]) {
-           const MM = SM.replace(";", "").split(" ");
-           aM.additionalDefineKey = MM[1], 3 === MM.length && (aM.additionalDefineValue = MM[2])
+         get isRGBD() {
+           return null != this._texture && this._texture._isRGBD
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L583-L623` → after: `L202-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L202-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L202-L286) · [Before (L583-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L583-L623)

```diff
-       }
-       return !1
-     }
- 
-     function RM(MM, rM, iM, jM) {
-       const aM = new OM,
-         PM = new SM;
-       return PM.lineIndex = -1, PM.lines = MM.split("\n"), uM(PM, aM, jM), aM.process(rM, iM, jM)
-     }
- 
-     function pM(MM, rM) {
-       const iM = MM.defines,
-         OM = {};
-       for (const SM of iM) {
-         const MM = SM.replace("#define", "").replace(";", "").trim().split(" ");
-         OM[MM[0]] = MM.length > 1 ? MM[1] : ""
- ... (25 more removed lines; see GitHub link above)
+         set isRGBD(UU) {
+           UU !== this.isRGBD && (this._texture && (this._texture._isRGBD = UU), this.nS()?.markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this))))
+         }
+         get noMipmap() {
+           return !1
+         }
+         get lodGenerationOffset() {
+           return this._texture ? this._texture._lodGenerationOffset : 0
+         }
+         set lodGenerationOffset(UU) {
+           this._texture && (this._texture._lodGenerationOffset = UU)
+         }
+         get lodGenerationScale() {
+           return this._texture ? this._texture._lodGenerationScale : 0
+         }
+         set lodGenerationScale(UU) {
+ ... (69 more added lines; see GitHub link above)
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L625-L634` → after: `L288-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L288-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L288-L324) · [Before (L625-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L625-L634)

```diff
-           if (PM[4]) {
-             const MM = PM[5];
-             if (-1 !== MM.indexOf("..")) {
-               const OM = MM.split(".."),
-                 SM = parseInt(OM[0]);
-               let jM = parseInt(OM[1]),
-                 aM = iM.slice(0);
-               iM = "", isNaN(jM) && (jM = rM.indexParameters[OM[1]]);
-               for (let MM = SM; MM < jM; MM++) rM.supportsUniformBuffers || (aM = aM.replace(lM, ((MM, rM) => rM + "{X}"))), iM += aM.replace(EM, MM.toString()) + "\n"
-             } else rM.supportsUniformBuffers || (iM = iM.replace(lM, ((MM, rM) => rM + "{X}"))), iM = iM.replace(EM, MM)
+           return null
+         }
+         _rebuild() {}
+         clone() {
+           return null
+         }
+         get textureType() {
+           return this._texture && void 0 !== this._texture.type ? this._texture.type : 0
+         }
+         get textureFormat() {
+           return this._texture && void 0 !== this._texture.format ? this._texture.format : 5
+         }
+         _markAllSubMeshesAsTexturesDirty() {
+           const UU = this.nS();
+           UU && UU.markAllMaterialsAsDirty(1)
+         }
+ ... (21 more added lines; see GitHub link above)
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L636-L640` → after: `L326-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L326-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L326-L343) · [Before (L636-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L636-L640)

```diff
-           const OM = [];
-           for (const MM of SM) {
-             const rM = MM.split(PM[0]);
-             for (let MM = 0; MM < rM.length - 1; MM++) OM.push(rM[MM]), OM.push(iM);
-             OM.push(rM[rM.length - 1])
+         }
+         _readPixelsSync() {
+           let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+             XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+             zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+             cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
+             yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+           if (!this._texture) return null;
+           const QU = this.getSize();
+           let AU = QU.width,
+             FU = QU.height;
+           const oU = this._getEngine();
+           if (!oU) return null;
+           0 != XU && (AU /= Math.pow(2, XU), FU /= Math.pow(2, XU), AU = Math.round(AU), FU = Math.round(FU));
+           try {
+             return this._texture.isCube ? oU._readTexturePixelsSync(this._texture, AU, FU, UU, XU, zU, cU, yU) : oU._readTexturePixelsSync(this._texture, AU, FU, -1, XU, zU, cU, yU)
+ ... (2 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L644-L690` → after: `L346-L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L346-L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L346-L347) · [Before (L644-L690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L644-L690)

```diff
-       }
-       UM.length = 0;
-       const aM = SM.join("");
-       jM ? WM(aM.toString(), rM, iM) : iM(aM)
-     }
-     const sM = {
-       loadFile: (MM, rM, iM, OM, SM, jM) => {
-         throw (0, mM.n)("FileTools")
-       }
-     }
-   },
-   40981: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => SM,
-       e: () => jM,
-       f: () => PM,
- ... (31 more removed lines; see GitHub link above)
+         get _lodTextureHigh() {
+           return this._texture ? this._texture._lodTextureHigh : null
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L692-L694` → after: `L349-L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L349-L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L349-L350) · [Before (L692-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L692-L694)

```diff
-         case 0: {
-           const MM = new Uint8Array(rM);
-           return OM && MM.set(new Uint8Array(OM)), MM
+         get _lodTextureMid() {
+           return this._texture ? this._texture._lodTextureMid : null
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L696-L698` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L352-L353) · [Before (L696-L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L696-L698)

```diff
-         case 4: {
-           const MM = "number" !== typeof rM ? new Int16Array(rM) : new Int16Array(iM ? rM / 2 : rM);
-           return OM && MM.set(new Int16Array(OM)), MM
+         get _lodTextureLow() {
+           return this._texture ? this._texture._lodTextureLow : null
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L700-L706` → after: `L355-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L355-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L355-L364) · [Before (L700-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L700-L706)

```diff
-         case 5:
-         case 8:
-         case 9:
-         case 10:
-         case 2: {
-           const MM = "number" !== typeof rM ? new Uint16Array(rM) : new Uint16Array(iM ? rM / 2 : rM);
-           return OM && MM.set(new Uint16Array(OM)), MM
+         dispose() {
+           if (this._scene) {
+             this._scene.stopAnimation && this._scene.stopAnimation(this), this._scene.removePendingData(this);
+             const UU = this._scene.textures.indexOf(this);
+             if (UU >= 0 && this._scene.textures.splice(UU, 1), this._scene.onTextureRemovedObservable.notifyObservers(this), this._scene = null, this._parentContainer) {
+               const UU = this._parentContainer.textures.indexOf(this);
+               UU > -1 && this._parentContainer.textures.splice(UU, 1), this._parentContainer = null
+             }
+           }
+           this.bS.notifyObservers(this), this.bS.clear(), this.metadata = null, super.dispose()
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L708-L710` → after: `L366-L370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L366-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L366-L370) · [Before (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L708-L710)

```diff
-         case 6: {
-           const MM = "number" !== typeof rM ? new Int32Array(rM) : new Int32Array(iM ? rM / 4 : rM);
-           return OM && MM.set(new Int32Array(OM)), MM
+         serialize() {
+           let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+           if (!this.name && !UU) return null;
+           const XU = NU.b.Serialize(this);
+           return NU.b.AppendSerializedAnimations(this, XU), XU
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L712-L719` → after: `L372-L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L372-L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L372-L384) · [Before (L712-L719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L712-L719)

```diff
-         case 7:
-         case 11:
-         case 12:
-         case 13:
-         case 14:
-         case 15: {
-           const MM = "number" !== typeof rM ? new Uint32Array(rM) : new Uint32Array(iM ? rM / 4 : rM);
-           return OM && MM.set(new Uint32Array(OM)), MM
+         static WhenAllReady(UU, XU) {
+           let zU = UU.length;
+           if (0 !== zU)
+             for (let cU = 0; cU < UU.length; cU++) {
+               const yU = UU[cU];
+               if (yU.isReady()) 0 === --zU && XU();
+               else {
+                 const UU = yU.onLoadObservable;
+                 UU ? UU.addOnce((() => {
+                   0 === --zU && XU()
+                 })) : 0 === --zU && XU()
+               }
+             } else XU()
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L721-L723` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L386-L387) · [Before (L721-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L721-L723)

```diff
-         case 1: {
-           const MM = "number" !== typeof rM ? new Float32Array(rM) : new Float32Array(iM ? rM / 4 : rM);
-           return OM && MM.set(new Float32Array(OM)), MM
+         static _IsScene(UU) {
+           return "Scene" === UU.getClassName()
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L725-L728` → after: `L389-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L389-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L389-L694) · [Before (L725-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L725-L728)

```diff
-       }
-       const SM = new Uint8Array(rM);
-       return OM && SM.set(new Uint8Array(OM)), SM
-     }
+       }, (() => {
+         const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(uU[Symbol.metadata] ?? null) : void 0;
+         XU = [(0, yU.I)()], zU = [(0, yU.I)()], DU = [(0, yU.I)()], YU = [(0, yU.I)()], IU = [(0, yU.I)("hasAlpha")], pU = [(0, yU.I)("getAlphaFromRGB")], aU = [(0, yU.I)()], tU = [(0, yU.I)("coordinatesIndex")], gU = [(0, yU.I)()], kU = [(0, yU.I)("coordinatesMode")], GU = [(0,  … [truncated]
+           kind: "getter",
+           name: "wrapU",
+           static: !1,
+           private: !1,
+           access: {
+             has: UU => "wrapU" in UU,
+             get: UU => UU.wrapU
+           },
+           metadata: QU
+         }, null, fU), (0, cU.j)(UU, null, BU, {
+           kind: "getter",
+           name: "wrapV",
+           static: !1,
+ ... (290 more added lines; see GitHub link above)
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L730` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L696) · [Before (L730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L730)

```diff
-   40990: (MM, rM, iM) => {
+   41557: (UU, XU, zU) => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L732-L735` → after: `L698-L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L698-L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L698-L699) · [Before (L732-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L732-L735)

```diff
-       c: () => QM,
-       g: () => zM,
-       j: () => nM,
-       n: () => SM
+       d: () => ZU,
+       e: () => GU
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L737-L744` → after: `L701-L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L701-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L701-L711) · [Before (L737-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L737-L744)

```diff
-     const OM = {};
- 
-     function SM(MM) {
-       if (!(arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) || !OM[MM]) return OM[MM] = !0, `${MM} needs to be imported before as it contains a side-effect required by your code.`
-     }
-     const jM = {};
-     let aM = !1,
-       PM = 0;
+     var cU = zU(41113),
+       yU = zU(41121),
+       QU = zU(37846),
+       AU = zU(37819),
+       FU = zU(41108),
+       oU = zU(37863),
+       DU = zU(40989),
+       EU = zU(40999),
+       YU = zU(41207),
+       NU = zU(38505),
+       IU = zU(41171);
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L748-L751` → after: `L715-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L715-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L715-L722) · [Before (L748-L751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L748-L751)

```diff
-       const OM = function() {
-         if ((iM || aM) && 0 === PM) {
-           const iM = `${MM}.${rM}`;
-           jM[iM] || (jM[iM] = !0, console.warn(`[Babylon.js] ${iM}() requires a side-effect import. See: https://doc.babylonjs.com/setup/treeshaking`))
+       const cU = XU.width,
+         yU = XU.height;
+       if (UU instanceof Float32Array) {
+         let XU = UU.byteLength / UU.BYTES_PER_ELEMENT;
+         const zU = new Uint8Array(XU);
+         for (; --XU >= 0;) {
+           let cU = UU[XU];
+           cU < 0 ? cU = 0 : cU > 1 && (cU = 1), zU[XU] = 255 * cU
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L753-L754` → after: `L724-L737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L724-L737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L724-L737) · [Before (L753-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L753-L754)

```diff
-       };
-       return OM.__isSideEffectStub = !0, OM
+         UU = zU
+       }
+       const QU = document.createElement("canvas");
+       QU.width = cU, QU.height = yU;
+       const AU = QU.getContext("2d");
+       if (!AU) return null;
+       const FU = AU.createImageData(cU, yU);
+       if (FU.data.set(UU), AU.putImageData(FU, 0, 0), zU) {
+         const UU = document.createElement("canvas");
+         UU.width = cU, UU.height = yU;
+         const XU = UU.getContext("2d");
+         return XU ? (XU.translate(0, yU), XU.scale(1, -1), XU.drawImage(QU, 0, 0), UU.toDataURL("image/png")) : null
+       }
+       return QU.toDataURL("image/png")
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L758-L823` → after: `L741-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L741-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L741-L746) · [Before (L758-L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L758-L823)

```diff
-       return !!MM && !MM.__isSideEffectStub
-     }
- 
-     function zM(MM, rM) {
-       return {
-         get() {},
-         set(MM) {
-           Object.defineProperty(this, rM, {
-             value: MM,
-             writable: !0,
-             configurable: !0,
-             enumerable: !0
-           })
-         },
-         configurable: !0,
-         enumerable: !0
- ... (50 more removed lines; see GitHub link above)
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const cU = UU.getInternalTexture();
+       if (!cU) return null;
+       const yU = UU._readPixelsSync(XU, zU);
+       return yU ? pU(yU, UU.getSize(), cU.invertY) : null
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L825-L856` → after: `L748-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L748-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L748-L754) · [Before (L825-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L825-L856)

```diff
-   },
-   41145: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => pM,
-       f: () => EM,
-       j: () => tM,
-       k: () => uM,
-       n: () => bM,
-       p: () => CM,
-       s: () => eM,
-       u: () => ZM,
-       w: () => wM,
-       x: () => UM
-     });
-     var OM = iM(41148),
-       SM = iM(40972),
- ... (16 more removed lines; see GitHub link above)
+     async function tU(UU) {
+       let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
+         zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
+       const cU = UU.getInternalTexture();
+       if (!cU) return null;
+       const yU = await UU.readPixels(XU, zU);
+       return yU ? pU(yU, UU.getSize(), cU.invertY) : null
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L858-L888` → after: `L756-L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L756-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L756-L789) · [Before (L858-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L858-L888)

```diff
-     class yM extends PM.i {
-       constructor(MM, rM) {
-         super(MM, PM.e.RequestFileError), this.request = rM, this.name = "RequestFileError", PM.b._setPrototypeOf(this, yM.prototype)
-       }
-     }
-     class lM extends PM.i {
-       constructor(MM, rM) {
-         super(MM, PM.e.ReadFileError), this.file = rM, this.name = "ReadFileError", PM.b._setPrototypeOf(this, lM.prototype)
-       }
-     }
-     const EM = {
-         DefaultRetryStrategy: class {
-           static ExponentialBackoff() {
-             let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3,
-               rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
-             return (iM, OM, SM) => 0 !== OM.status || SM >= MM || -1 !== iM.indexOf("file:") ? -1 : Math.pow(2, SM) * rM
- ... (15 more removed lines; see GitHub link above)
+     var gU = zU(41508),
+       kU = zU(41134);
+     let GU = (() => {
+         var UU;
+         let XU, zU, pU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU, wU = FU.e,
+           qU = [],
+           OU = [],
+           SU = [],
+           rU = [],
+           uU = [],
+           fU = [],
+           iU = [],
+           HU = [],
+           MU = [],
+           vU = [],
+           VU = [],
+ ... (18 more added lines; see GitHub link above)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L890-L906` → after: `L791-L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L791-L792) · [Before (L890-L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L890-L906)

```diff
-       },
-       GM = {
-         getRequiredSize: null
-       },
-       CM = function(MM, rM, iM, SM) {
-         let jM, PM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
-           zM = arguments.length > 5 ? arguments[5] : void 0,
-           LM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QM.c.LastCreatedEngine;
-         if ("undefined" === typeof HTMLImageElement && !LM?._features.forceBitmapOverHTMLImageElement) return iM("LoadImage is only supported in web or BabylonNative environments."), null;
-         if (LM?._features.forceBitmapOverHTMLImageElement && "string" !== typeof MM && "undefined" !== typeof Blob) {
-           let OM;
-           if (MM instanceof Blob) OM = MM;
-           else {
-             const rM = MM instanceof ArrayBuffer ? MM : (0, hM.i)(MM);
-             OM = new Blob([rM], {
-               type: PM
- ... (1 more removed lines; see GitHub link above)
+           get noMipmap() {
+             return this._noMipmap
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L908-L928` → after: `L794-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L794-L795) · [Before (L908-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L908-L928)

```diff
-           return LM.createImageBitmap(OM, {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none",
-             ...zM
-           }).then(rM).catch((rM => {
-             iM && iM("Error while trying to load image: " + MM, rM)
-           })), null
-         }
-         let mM = !1;
-         if (MM instanceof ArrayBuffer || ArrayBuffer.isView(MM))
-           if ("undefined" !== typeof Blob && "undefined" !== typeof URL) {
-             let rM;
-             rM = MM instanceof ArrayBuffer ? MM : (0, hM.i)(MM), jM = URL.createObjectURL(new Blob([rM], {
-               type: PM
-             })), mM = !0
-           } else jM = `data:${PM};base64,` + (0, nM.j)(MM);
- ... (5 more removed lines; see GitHub link above)
+           get mimeType() {
+             return this._mimeType
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L930-L961` → after: `L797-L798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L797-L798) · [Before (L930-L961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L930-L961)

```diff
-         };
-         if (LM?._features.forceBitmapOverHTMLImageElement) return bM(jM, (OM => {
-           LM.createImageBitmap(new Blob([OM], {
-             type: PM
-           }), {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none",
-             ...zM
-           }).then((MM => {
-             rM(MM), mM && URL.revokeObjectURL(jM)
-           })).catch((rM => {
-             iM && iM("Error while trying to load image: " + MM, rM)
-           }))
-         }), void 0, SM || void 0, !0, ((MM, rM) => {
-           HM(rM)
-         })), null;
- ... (16 more removed lines; see GitHub link above)
+           set isBlocking(UU) {
+             this._isBlocking = UU
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L963-L967` → after: `L800-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L800-L801) · [Before (L963-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L963-L967)

```diff
-         }), dM.push({
-           target: JM,
-           name: "error",
-           handler: MM => {
-             yM(), HM(MM), mM && JM.src && URL.revokeObjectURL(JM.src)
+           get isBlocking() {
+             return this._isBlocking
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L969-L976` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L803-L804) · [Before (L969-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L969-L976)

```diff
-         }), dM.push({
-           target: document,
-           name: "securitypolicyviolation",
-           handler: MM => {
-             if (MM.blockedURI !== JM.src || "aL" === MM.disposition) return;
-             yM();
-             const rM = new Error(`CSP violation of policy ${MM.effectiveDirective} ${MM.blockedURI}. Current policy is ${MM.originalPolicy}`);
-             QM.c.UseFallbackTexture = !1, HM(rM), mM && JM.src && URL.revokeObjectURL(JM.src), JM.src = ""
+           get invertY() {
+             return this._invertY
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L978-L1001` → after: `L806-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L806-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L806-L845) · [Before (L978-L1001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L978-L1001)

```diff
-         }), (() => {
-           for (const MM of dM) MM.target.addEventListener(MM.name, MM.handler)
-         })();
-         const lM = "blob:" === jM.substring(0, 5),
-           CM = "data:" === jM.substring(0, 5),
-           eM = () => {
-             lM || CM || !OM.e.IsCustomRequestAvailable ? JM.src = jM : bM(jM, ((MM, rM, iM) => {
-               const OM = new Blob([MM], {
-                   type: !PM && iM ? iM : PM
-                 }),
-                 SM = URL.createObjectURL(OM);
-               mM = !0, JM.src = SM
-             }), void 0, SM || void 0, !0, ((MM, rM) => {
-               HM(rM)
-             }))
-           },
- ... (8 more removed lines; see GitHub link above)
+           constructor(XU, zU, yU, AU) {
+             let FU, oU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : UU.TRILINEAR_SAMPLINGMODE,
+               DU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               YU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
+               NU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               IU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
+               pU = arguments.length > 9 ? arguments[9] : void 0,
+               aU = arguments.length > 10 ? arguments[10] : void 0,
+               tU = arguments.length > 11 ? arguments[11] : void 0,
+               kU = arguments.length > 12 ? arguments[12] : void 0,
+               GU = arguments.length > 13 ? arguments[13] : void 0;
+             super(zU), this.url = ((0, cU.n)(this, qU), (0, cU.n)(this, OU, null)), this.uOffset = ((0, cU.n)(this, SU), (0, cU.n)(this, rU, 0)), this.vOffset = ((0, cU.n)(this, uU), (0, cU.n)(this, fU, 0)), this.uScale = ((0, cU.n)(this, iU), (0, cU.n)(this, HU, 1)), this.vScale … [truncated]
+             let BU = !1,
+               ZU = null,
+               RU = !0;
+             "object" === typeof yU && null !== yU ? (FU = yU.noMipmap ?? !1, AU = yU.invertY ?? !gU.c, oU = yU.samplingMode ?? UU.TRILINEAR_SAMPLINGMODE, DU = yU.onLoad ?? null, YU = yU.onError ?? null, NU = yU.buffer ?? null, IU = yU.deleteBuffer ?? !1, pU = yU.format, aU = yU.m … [truncated]
+ ... (24 more added lines; see GitHub link above)
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1003-L1009` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L847) · [Before (L1003-L1009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1003-L1009)

```diff
-                 let rM;
-                 try {
-                   rM = URL.createObjectURL(aM.FilesToLoad[MM])
-                 } catch (tM) {
-                   rM = URL.createObjectURL(aM.FilesToLoad[MM])
-                 }
-                 JM.src = rM, mM = !0
+                 this._texture = WU.createTexture(this.url, FU, this._invertY, PU, oU, dU, LU, this._buffer, void 0, this._format, this._forcedExtension, aU, tU, kU, BU)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1011` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L849) · [Before (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1011)

```diff
-                 JM.src = ""
+                 throw LU("error loading", eU), eU
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1013` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L851) · [Before (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1013)

```diff
-               return JM
+               IU && (this._buffer = null)
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1016-L1056` → after: `L854-L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L854-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L854-L862) · [Before (L1016-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1016-L1056)

```diff
-           eM()
-         }
-         return JM
-       },
-       eM = (MM, rM, iM, OM, SM) => {
-         const aM = new FileReader,
-           PM = {
-             onCompleteObservable: new jM.d,
-             abort: () => aM.abort()
-           };
-         return aM.onloadend = () => PM.onCompleteObservable.notifyObservers(PM), SM && (aM.onerror = () => {
-           SM(new lM(`Unable to read ${MM.name}`, MM))
-         }), aM.onload = MM => {
-           rM(MM.target.result)
-         }, iM && (aM.onprogress = iM), OM ? aM.readAsArrayBuffer(MM) : aM.readAsText(MM), PM
-       },
- ... (25 more removed lines; see GitHub link above)
+           updateURL(UU) {
+             let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               zU = arguments.length > 2 ? arguments[2] : void 0,
+               cU = arguments.length > 3 ? arguments[3] : void 0;
+             this.url && (this.releaseInternalTexture(), this.nS().markAllMaterialsAsDirty(1, (UU => UU.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = UU), this.url = UU, this._buffer = XU, this._forcedExtension = cU, this.delayLoadState = 4;
+             const yU = this._delayedOnLoad;
+             this._delayedOnLoad = () => {
+               yU ? yU() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), zU && zU()
+             }, this.delayLoad()
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1058-L1086` → after: `L864-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L864-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L864-L920) · [Before (L1058-L1086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1058-L1086)

```diff
-           return HM.c.SetImmediate((() => {
-             MM.onCompleteObservable.notifyObservers(MM)
-           })), MM
-         }
-         return wM(zM, ((MM, iM) => {
-           rM(MM, iM?.responseURL, iM?.getResponseHeader("content-type"))
-         }), iM, OM, SM, nM ? MM => {
-           nM(MM.request, new dM(MM.message, MM.request))
-         } : void 0, QM)
-       },
-       wM = (MM, rM, iM, aM, PM, nM, zM) => {
-         null !== aM && (aM ?? (aM = QM.c.LastCreatedScene?.offlineProvider)), MM = EM.CleanUrl(MM), MM = EM.PreprocessUrl(MM);
-         const LM = EM.BaseUrl + MM;
-         let HM = !1;
-         const hM = {
-             onCompleteObservable: new jM.d,
- ... (13 more removed lines; see GitHub link above)
+           delayLoad() {
+             if (4 !== this.delayLoadState) return;
+             const UU = this.nS();
+             if (!UU) return;
+             let XU = this.url;
+             !XU && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (XU = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(XU, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+           }
+           _prepareRowForTextureGeneration(UU, XU, zU, cU) {
+             UU *= this._cachedUScale, XU *= this._cachedVScale, UU -= this.uRotationCenter * this._cachedUScale, XU -= this.vRotationCenter * this._cachedVScale, zU -= this.wRotationCenter, AU.q.TransformCoordinatesFromFloatsToRef(UU, XU, zU, this._rowGenerationMatrix, cU), cU.x  … [truncated]
+           }
+           getTextureMatrix() {
+             let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
+             if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * UU === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && t … [truncated]
+             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * UU, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
+             const XU = this.nS();
+             if (!XU) return this._cachedTextureMatrix;
+ ... (41 more added lines; see GitHub link above)
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1089-L1118` → after: `L961-L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L961-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L961-L985) · [Before (L1089-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1089-L1118)

```diff
-                 const rM = MM.message || "Unknown error";
-                 nM && jM ? nM(new yM(rM, jM)) : mM.e.Error(rM)
-               },
-               lM = mM => {
-                 if (jM) {
-                   if (jM.open("GET", LM), zM) try {
-                     zM(jM)
-                   } catch (hM) {
-                     return void dM(hM)
-                   }
-                   PM && (jM.responseType = "arraybuffer"), iM && jM.addEventListener("progress", iM), JM && jM.addEventListener("loadend", JM), MM = () => {
-                     if (!HM && jM && jM.readyState === (XMLHttpRequest.DONE || 4)) {
-                       if (MM && jM.removeEventListener("readystatechange", MM), jM.status >= 200 && jM.status < 300 || 0 === jM.status && (!(0, SM.l)() || gM())) {
-                         const MM = PM ? jM.response : jM.responseText;
-                         if (null !== MM) {
-                           try {
- ... (14 more removed lines; see GitHub link above)
+               if (UU && UU._texture && (UU._texture._cachedWrapU = null, UU._texture._cachedWrapV = null, UU._texture._cachedWrapR = null), XU.samplingMode) {
+                 const zU = XU.samplingMode;
+                 UU && UU.samplingMode !== zU && UU.updateSamplingMode(zU)
+               }
+               if (UU && XU.animations)
+                 for (let zU = 0; zU < XU.animations.length; zU++) {
+                   const cU = XU.animations[zU],
+                     yU = (0, oU.e)("BABYLON.Animation");
+                   yU && UU.animations.push(yU.Parse(cU))
+                 }
+               UU && UU._texture && (yU && !QU && UU._texture._setUniqueId(XU.internalTextureUniqueId), UU._texture.label = XU.internalTextureLabel)
+             };
+             return kU.b.Parse((() => {
+               let yU = !0;
+               if (XU.noMipmap && (yU = !1), XU.mirrorPlane) {
+                 const cU = UU._CreateMirror(XU.name, XU.renderTargetSize, zU, yU);
+ ... (9 more added lines; see GitHub link above)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1120` → after: `L987-L1024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L987-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L987-L1024) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1120)

```diff
-                   }, jM.addEventListener("readystatechange", MM), jM.send()
+                 } else cU = UU._CreateRenderTargetTexture(XU.name, XU.renderTargetSize, zU, yU, XU._creationFlags ?? 0), cU._waitingRenderList = XU.renderList;
+                 return AU(cU), cU
+               }
+               if (XU.isVideo) {
+                 const QU = UU._CreateVideoTexture(cU + (XU.url || XU.name), cU + (XU.src || XU.url), zU, yU, XU.invertY, XU.samplingMode, XU.settings || {});
+                 return AU(QU), QU
+               } {
+                 let FU;
+                 if ("string" === typeof XU.base64String && XU.base64String && !QU) {
+                   const cU = {
+                       buffer: XU.base64String,
+                       noMipmap: !yU,
+                       invertY: XU.invertY,
+                       samplingMode: XU.samplingMode,
+                       useSRGBBuffer: XU._useSRGBBuffer ?? !1,
+                       creationFlags: XU._creationFlags ?? 0,
+ ... (22 more added lines; see GitHub link above)
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1122-L1127` → after: `L1026-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1026-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1026-L1055) · [Before (L1122-L1127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1122-L1127)

```diff
-               };
-             lM(0)
-           };
-         if (aM && aM.enableSceneOffline && !MM.startsWith("blob:")) {
-           const OM = MM => {
-               MM && MM.status > 400 ? nM && nM(MM) : JM()
+                 return FU
+               }
+             }), XU, zU)
+           }
+           static CreateFromBase64String(XU, zU, cU, yU, QU) {
+             let AU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU.TRILINEAR_SAMPLINGMODE;
+             return new UU("data:" + zU, cU, yU, QU, AU, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, XU, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0 … [truncated]
+           }
+           static LoadFromDataString(XU, zU, cU) {
+             let yU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               QU = arguments.length > 4 ? arguments[4] : void 0,
+               AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
+               FU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : UU.TRILINEAR_SAMPLINGMODE,
+               oU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               DU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
+               EU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
+ ... (14 more added lines; see GitHub link above)
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1129-L1247` → after: `L1057-L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1057-L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1057-L1228) · [Before (L1129-L1247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1129-L1247)

```diff
-             SM = () => {
-               aM && aM.loadFile(EM.BaseUrl + MM, (MM => {
-                 !HM && rM && rM(MM), hM.onCompleteObservable.notifyObservers(hM)
-               }), iM ? MM => {
-                 !HM && iM && iM(MM)
-               } : void 0, OM, PM)
-             };
-           aM.open(SM, OM)
-         } else JM();
-         return hM
-       },
-       tM = MM => {
-         const {
-           match: rM,
-           type: iM
-         } = RM(MM);
- ... (103 more removed lines; see GitHub link above)
+             metadata: QU
+           }, null, qU), (0, cU.j)(null, null, XU, {
+             kind: "field",
+             name: "url",
+             static: !1,
+             private: !1,
+             access: {
+               has: UU => "url" in UU,
+               get: UU => UU.url,
+               set: (UU, XU) => {
+                 UU.url = XU
+               }
+             },
+             metadata: QU
+           }, OU, SU), (0, cU.j)(null, null, zU, {
+             kind: "field",
+ ... (156 more added lines; see GitHub link above)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1250-L1292` → after: `L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1231) · [Before (L1250-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1250-L1292)

```diff
-       if (OM) return OM;
-       const MM = new ArrayBuffer(4),
-         rM = new Float32Array(MM),
-         iM = new Uint32Array(MM),
-         SM = new Uint32Array(512),
-         jM = new Uint32Array(512);
-       for (let OM = 0; OM < 256; ++OM) {
-         const MM = OM - 127;
-         MM < -24 ? (SM[OM] = 0, SM[256 | OM] = 32768, jM[OM] = 24, jM[256 | OM] = 24) : MM < -14 ? (SM[OM] = 1024 >> -MM - 14, SM[256 | OM] = 1024 >> -MM - 14 | 32768, jM[OM] = -MM - 1, jM[256 | OM] = -MM - 1) : MM <= 15 ? (SM[OM] = MM + 15 << 10, SM[256 | OM] = MM + 15 << 10 | 3 … [truncated]
-       }
-       const aM = new Uint32Array(2048),
-         PM = new Uint32Array(64),
-         nM = new Uint32Array(64);
-       for (let OM = 1; OM < 1024; ++OM) {
-         let MM = OM << 13,
-           rM = 0;
- ... (27 more removed lines; see GitHub link above)
+       BU || (BU = !0, (0, oU.h)("BABYLON.Texture", GU), kU.b._TextureParser = GU.Parse)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1325` → after: `L1234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1234) · [Before (L1325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1325)

```diff
-   41003: (MM, rM, iM) => {
+   41125: (UU, XU, zU) => {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1332-L1455` → after: `L1239-L1240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1239-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1239-L1240) · [Before (L1332-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1332-L1455)

```diff
-       static SetImmediate(MM) {
-         0 === OM.length && setTimeout((() => {
-           const MM = OM;
-           OM = [];
-           for (const rM of MM) rM()
-         }), 1), OM.push(MM)
-       }
-     }
- 
-     function jM(MM, rM, iM) {
-       try {
-         if (MM()) return rM(), !0
-       } catch (OM) {
-         return iM?.(OM), !0
-       }
-       return !1
- ... (108 more removed lines; see GitHub link above)
+       constructor(UU, XU) {
+         this.width = UU, this.height = XU
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1457-L1458` → after: `L1242-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1242-L1243) · [Before (L1457-L1458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1457-L1458)

```diff
-       get statusText() {
-         return this._xhr.statusText
+       toString() {
+         return `{W: ${this.width}, H: ${this.height}}`
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1460-L1461` → after: `L1245-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1245-L1246) · [Before (L1460-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1460-L1461)

```diff
-       get response() {
-         return this._xhr.response
+       getClassName() {
+         return "Size"
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1463-L1464` → after: `L1248-L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1248-L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1248-L1250) · [Before (L1463-L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1463-L1464)

```diff
-       get responseURL() {
-         return this._xhr.responseURL
+       getHashCode() {
+         let UU = 0 | this.width;
+         return UU = 397 * UU ^ this.height, UU
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1466-L1467` → after: `L1252-L1253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1252-L1253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1252-L1253) · [Before (L1466-L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1466-L1467)

```diff
-       get responseText() {
-         return this._xhr.responseText
+       YL(UU) {
+         this.width = UU.width, this.height = UU.height
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1469-L1470` → after: `L1255-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1255-L1256) · [Before (L1469-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1469-L1470)

```diff
-       get responseType() {
-         return this._xhr.responseType
+       sUU(UU, XU) {
+         return this.width = UU, this.height = XU, this
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1472-L1473` → after: `L1258-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1258-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1258-L1259) · [Before (L1472-L1473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1472-L1473)

```diff
-       set responseType(MM) {
-         this._xhr.responseType = MM
+       set(UU, XU) {
+         return this.sUU(UU, XU)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1475-L1476` → after: `L1261-L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1261-L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1261-L1262) · [Before (L1475-L1476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1475-L1476)

```diff
-       get timeout() {
-         return this._xhr.timeout
+       multiplyByFloats(UU, XU) {
+         return new cU(this.width * UU, this.height * XU)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1478-L1479` → after: `L1264-L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1264-L1265) · [Before (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1478-L1479)

```diff
-       set timeout(MM) {
-         this._xhr.timeout = MM
+       clone() {
+         return new cU(this.width, this.height)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1481-L1482` → after: `L1267-L1268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1267-L1268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1267-L1268) · [Before (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1481-L1482)

```diff
-       addEventListener(MM, rM, iM) {
-         this._xhr.addEventListener(MM, rM, iM)
+       equals(UU) {
+         return !!UU && (this.width === UU.width && this.height === UU.height)
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1484-L1485` → after: `L1270-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1270-L1271) · [Before (L1484-L1485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1484-L1485)

```diff
-       removeEventListener(MM, rM, iM) {
-         this._xhr.removeEventListener(MM, rM, iM)
+       get surface() {
+         return this.width * this.height
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1487-L1488` → after: `L1273-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1273-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1273-L1274) · [Before (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1487-L1488)

```diff
-       abort() {
-         this._xhr.abort()
+       static Zero() {
+         return new cU(0, 0)
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1490-L1491` → after: `L1276-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1276-L1277) · [Before (L1490-L1491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1490-L1491)

```diff
-       send(MM) {
-         this._xhr.send(MM)
+       add(UU) {
+         return new cU(this.width + UU.width, this.height + UU.height)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1493-L1499` → after: `L1279-L1280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1279-L1280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1279-L1280) · [Before (L1493-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1493-L1499)

```diff
-       open(MM, rM, iM) {
-         const {
-           url: SM,
-           headers: jM
-         } = OM._CollectCustomizations(rM, iM);
-         this._requestURL = OM._CleanUrl(SM), this._xhr.open(MM, this._requestURL, !0);
-         for (const OM in jM) this._xhr.setRequestHeader(OM, jM[OM])
+       subtract(UU) {
+         return new cU(this.width - UU.width, this.height - UU.height)
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1501-L1502` → after: `L1282-L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1282-L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1282-L1283) · [Before (L1501-L1502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1501-L1502)

```diff
-       setRequestHeader(MM, rM) {
-         this._xhr.setRequestHeader(MM, rM)
+       scale(UU) {
+         return new cU(this.width * UU, this.height * UU)
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/279.js` (Changed code · before: `L1504-L1505` → after: `L1285-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716efR1285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-64a4cbaebd21b4e05de9c65c4705ccda67c98d25501b3d001a9698d3ef3716ef) · [After (L1285-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/279.js#L1285-L1288) · [Before (L1504-L1505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/279.js#L1504-L1505)

```diff
-       getResponseHeader(MM) {
-         return this._xhr.getResponseHeader(MM)
+       static Lerp(UU, XU, zU) {
+         const yU = UU.width + (XU.width - UU.width) * zU,
+           QU = UU.height + (XU.height - UU.height) * zU;
+         return new cU(yU, QU)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/280.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/280.js` (39 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L4)

```diff
-   41210: (MM, rM, iM) => {
+   41323: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L88-L89` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L7) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L88-L89)

```diff
-       e: () => yM,
-       g: () => lM
+       h: () => FU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L91-L103` → after: `L9-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L9-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L9-L12) · [Before (L91-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L91-L103)

```diff
-     var OM, SM = iM(38068),
-       jM = iM(40972),
-       aM = iM(39711),
-       PM = iM(39705),
-       nM = iM(41009),
-       QM = iM(40990),
-       zM = iM(41148),
-       LM = iM(38064),
-       mM = iM(41145),
-       HM = iM(41003),
-       hM = iM(41210),
-       JM = iM(38885),
-       dM = iM(41034);
+     var cU = zU(39493),
+       yU = zU(41134),
+       QU = zU(41309),
+       AU = {};
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L105-L154` → after: `L14-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L14-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L14-L15) · [Before (L105-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L105-L154)

```diff
-       static get BaseUrl() {
-         return mM.f.BaseUrl
-       }
-       static set BaseUrl(MM) {
-         mM.f.BaseUrl = MM
-       }
-       static get CleanUrl() {
-         return mM.f.CleanUrl
-       }
-       static set CleanUrl(MM) {
-         mM.f.CleanUrl = MM
-       }
-       static IsAbsoluteUrl(MM) {
-         return 0 === MM.indexOf("//") || -1 !== MM.indexOf("://") && (-1 !== MM.indexOf(".") && (-1 !== MM.indexOf("/") && (!(MM.indexOf(":") > MM.indexOf("/")) && (MM.indexOf("://") < MM.indexOf(".") || (0 === MM.indexOf("data:") || 0 === MM.indexOf("blob:"))))))
-       }
-       static set ScriptBaseUrl(MM) {
- ... (34 more removed lines; see GitHub link above)
+       constructor(UU) {
+         this.attachedToElement = !1, this.attached = {}, this.camera = UU, this.checkInputs = () => {}
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L156-L157` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L17-L19) · [Before (L156-L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L156-L157)

```diff
-       static set RegisteredExternalClasses(MM) {
-         hM.d.RegisteredExternalClasses = MM
+       add(UU) {
+         const XU = UU.getSimpleName();
+         this.attached[XU] ? cU.b.Warn("camera input of type " + XU + " already exists on camera") : (this.attached[XU] = UU, UU.camera = this.camera, UU.checkInputs && (this.checkInputs = this._addCheckInputs(UU.checkInputs.bind(UU))), this.attachedToElement && UU.attachControl(t … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L159-L215` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L21-L25) · [Before (L159-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L159-L215)

```diff
-       static get fallbackTexture() {
-         return LM.c.FallbackTexture
-       }
-       static set fallbackTexture(MM) {
-         LM.c.FallbackTexture = MM
-       }
-       static FetchToRef(MM, rM, iM, OM, SM, jM) {
-         const aM = 4 * ((Math.abs(MM) * iM % iM | 0) + (Math.abs(rM) * OM % OM | 0) * iM);
-         jM.r = SM[aM] / 255, jM.g = SM[aM + 1] / 255, jM.b = SM[aM + 2] / 255, jM.a = SM[aM + 3] / 255
-       }
-       static Mix(MM, rM, iM) {
-         return 0
-       }
-       static Instantiate(MM) {
-         return hM.d.Instantiate(MM)
-       }
- ... (41 more removed lines; see GitHub link above)
+       remove(UU) {
+         for (const XU in this.attached) {
+           const zU = this.attached[XU];
+           if (zU === UU) return zU.detachControl(), zU.camera = null, delete this.attached[XU], void this.rebuildInputCheck()
+         }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L217-L218` → after: `L27-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L27-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L27-L31) · [Before (L217-L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L217-L218)

```diff
-       static get PreprocessUrl() {
-         return mM.f.PreprocessUrl
+       removeByType(UU) {
+         for (const XU in this.attached) {
+           const zU = this.attached[XU];
+           zU.getClassName() === UU && (zU.detachControl(), zU.camera = null, delete this.attached[XU], this.rebuildInputCheck())
+         }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L220-L221` → after: `L33-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L33-L37) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L220-L221)

```diff
-       static set PreprocessUrl(MM) {
-         mM.f.PreprocessUrl = MM
+       _addCheckInputs(UU) {
+         const XU = this.checkInputs;
+         return () => {
+           XU(), UU()
+         }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L223-L224` → after: `L39-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L39-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L39-L40) · [Before (L223-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L223-L224)

```diff
-       static LoadImage(MM, rM, iM, OM, SM, jM) {
-         return (0, mM.p)(MM, rM, iM, OM, SM, jM)
+       attachInput(UU) {
+         this.attachedToElement && UU.attachControl(this.noPreventDefault)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L226-L227` → after: `L42-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L42-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L42-L47) · [Before (L226-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L226-L227)

```diff
-       static LoadFile(MM, rM, iM, OM, SM, jM) {
-         return (0, mM.n)(MM, rM, iM, OM, SM, jM)
+       attachElement() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         if (!this.attachedToElement) {
+           UU = !QU.d.ForceAttachControlToAlwaysPreventDefault && UU, this.attachedToElement = !0, this.noPreventDefault = UU;
+           for (const XU in this.attached) this.attached[XU].attachControl(UU)
+         }
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L229-L237` → after: `L49-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L49-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L49-L52) · [Before (L229-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L229-L237)

```diff
-       static async LoadFileAsync(MM) {
-         let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         return await new Promise(((iM, OM) => {
-           (0, mM.n)(MM, (MM => {
-             iM(MM)
-           }), void 0, void 0, rM, ((MM, rM) => {
-             OM(rM)
-           }))
-         }))
+       detachElement() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
+         for (const XU in this.attached) this.attached[XU].detachControl(), UU && (this.attached[XU].camera = null);
+         this.attachedToElement = !1
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L239-L255` → after: `L54-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L54-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L54-L58) · [Before (L239-L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L239-L255)

```diff
-       static GetAssetUrl(MM) {
-         if (!MM) return "";
-         if (OM.AssetBaseUrl && MM.startsWith(OM._DefaultAssetsUrl)) {
-           const rM = OM.AssetBaseUrl.endsWith("/") ? OM.AssetBaseUrl.slice(0, -1) : OM.AssetBaseUrl;
-           return MM.replace(OM._DefaultAssetsUrl, rM)
-         }
-         return MM
-       }
-       static GetBabylonScriptURL(MM, rM) {
-         if (!MM) return "";
-         if (MM.startsWith(OM._DefaultCdnUrl))
-           if (OM.ScriptBaseUrl) {
-             const rM = OM.ScriptBaseUrl.endsWith("/") ? OM.ScriptBaseUrl.slice(0, -1) : OM.ScriptBaseUrl;
-             MM = MM.replace(OM._DefaultCdnUrl, rM)
-           } else if (OM._CdnVersion) {
-           const rM = `${OM._DefaultCdnUrl}/v${OM._CdnVersion}`;
- ... (1 more removed lines; see GitHub link above)
+       rebuildInputCheck() {
+         this.checkInputs = () => {};
+         for (const UU in this.attached) {
+           const XU = this.attached[UU];
+           XU.checkInputs && (this.checkInputs = this._addCheckInputs(XU.checkInputs.bind(XU)))
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L259-L260` → after: `L61-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L61-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L61-L62) · [Before (L259-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L259-L260)

```diff
-       static LoadBabylonScript(MM, rM, iM, SM) {
-         MM = OM.GetBabylonScriptURL(MM), OM.LoadScript(MM, rM, iM)
+       clear() {
+         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L262-L269` → after: `L64-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L64-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L64-L83) · [Before (L262-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L262-L269)

```diff
-       static async LoadBabylonScriptAsync(MM) {
-         return MM = OM.GetBabylonScriptURL(MM), await OM.LoadScriptAsync(MM)
-       }
-       static _LoadScriptNative(MM, rM, iM, SM) {
-         if (_native) {
-           if (arguments.length > 4 && void 0 !== arguments[4] && arguments[4]) {
-             const MM = "Loading a script as an ES module is not supported in Babylon Native";
-             return void iM?.(MM, new Error(MM))
+       serialize(UU) {
+         const XU = {};
+         for (const zU in this.attached) {
+           const UU = this.attached[zU],
+             cU = yU.b.Serialize(UU);
+           XU[UU.getClassName()] = cU
+         }
+         UU.inputsmgr = XU
+       }
+       parse(UU) {
+         const XU = UU.inputsmgr;
+         if (XU) {
+           this.clear();
+           for (const UU in XU) {
+             const zU = AU[UU];
+             if (zU) {
+ ... (4 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L271-L275` → after: `L85-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L85-L90) · [Before (L271-L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L271-L275)

```diff
-           OM.LoadFile(MM, (MM => {
-             try {
-               Function(MM).apply(null), rM && rM()
-             } catch (OM) {
-               iM && iM("LoadScript Error", OM)
+         } else
+           for (const zU in this.attached) {
+             const XU = AU[this.attached[zU].getClassName()];
+             if (XU) {
+               const cU = yU.b.Parse((() => new XU), UU, null);
+               this.remove(this.attached[zU]), this.add(cU)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L359-L393` → after: `L94-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L94-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L94-L139) · [Before (L359-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L359-L393)

```diff
-       static async DumpFramebuffer(MM, rM, iM, OM) {
-         throw (0, QM.n)("DumpTools")
-       }
-       static DumpData(MM, rM, iM, OM) {
-         throw (0, QM.n)("DumpTools")
-       }
-       static async DumpDataAsync(MM, rM, iM) {
-         throw (0, QM.n)("DumpTools")
-       }
-       static _IsOffScreenCanvas(MM) {
-         return void 0 !== MM.convertToBlob
-       }
-       static ToBlob(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           SM = arguments.length > 3 ? arguments[3] : void 0;
-         OM._IsOffScreenCanvas(MM) || MM.toBlob || (MM.toBlob = function(MM, rM, iM) {
- ... (19 more removed lines; see GitHub link above)
+     }
+   },
+   42233: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => GU
+     });
+     var cU = zU(41113),
+       yU = zU(41121),
+       QU = zU(40999),
+       AU = zU(37819),
+       FU = zU(41108),
+       oU = zU(41557),
+       DU = zU(37863),
+       EU = zU(37846),
+       YU = zU(41134),
+       NU = zU(40940),
+ ... (30 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L395-L419` → after: `L141-L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L141-L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L141-L238) · [Before (L395-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L395-L419)

```diff
-           OM.Download(MM, rM)
-         } else if (MM && "undefined" !== typeof URL) {
-           const rM = URL.createObjectURL(MM),
-             iM = window.open("");
-           if (!iM) return;
-           const OM = iM.document.createElement("img");
-           OM.onload = function() {
-             URL.revokeObjectURL(rM)
-           }, OM.src = rM, iM.document.body.appendChild(OM)
-         }
-       }
-       static EncodeScreenshotCanvasData(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/png",
-           SM = arguments.length > 3 ? arguments[3] : void 0,
-           jM = arguments.length > 4 ? arguments[4] : void 0;
-         if ("string" !== typeof SM && rM) {
- ... (9 more removed lines; see GitHub link above)
+           get boundingBoxSize() {
+             return this._boundingBoxSize
+           }
+           set rotationY(UU) {
+             this._rotationY = UU, this.setReflectionTextureMatrix(AU.e.RotationY(this._rotationY))
+           }
+           get rotationY() {
+             return this._rotationY
+           }
+           get noMipmap() {
+             return this._noMipmap
+           }
+           get forcedExtension() {
+             return this._forcedExtension
+           }
+           constructor(UU, XU) {
+ ... (82 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L421-L423` → after: `L240-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L240-L243) · [Before (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L421-L423)

```diff
-             }));
-             const SM = MM.toDataURL(iM, jM);
-             rM(SM)
+               return this._internalTexturesCache.push(GU), GU
+             }), this.name = UU, this.url = UU, this._noMipmap = QU, this.hasAlpha = !1, this.isCube = !0, this._textureMatrix = AU.e.Identity(), this.coordinatesMode = oU.e.CUBIC_MODE;
+             let nU = null;
+             null === yU || Array.isArray(yU) ? (this._noMipmap = QU, this._format = GU, this._createPolynomials = RU, zU = yU, this._loaderOptions = dU, this._useSRGBBuffer = sU, this._lodScale = PU, this._lodOffset = WU) : (zU = yU.extensions ?? null, this._noMipmap = yU.noMipma … [truncated]
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L425-L462` → after: `L245-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L245-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L245-L511) · [Before (L425-L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L425-L462)

```diff
-         } else this.ToBlob(MM, (function(MM) {
-           MM && OM.DownloadBlob(MM, SM), rM && rM("")
-         }), iM, jM)
-       }
-       static Download(MM, rM) {
-         if ("undefined" === typeof URL) return;
-         const iM = window.URL.createObjectURL(MM),
-           OM = document.createElement("a");
-         document.body.appendChild(OM), OM.style.display = "none", OM.href = iM, OM.download = rM, OM.addEventListener("click", (() => {
-           OM.parentElement && OM.parentElement.removeChild(OM)
-         })), OM.click(), window.URL.revokeObjectURL(iM)
-       }
-       static BackCompatCameraNoPreventDefault(MM) {
-         return "boolean" === typeof MM[0] ? MM[0] : "boolean" === typeof MM[1] && MM[1]
-       }
-       static CreateScreenshot(MM, rM, iM, OM) {
- ... (22 more removed lines; see GitHub link above)
+           getClassName() {
+             return "CubeTexture"
+           }
+           updateURL(UU) {
+             let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+               zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+               cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
+               yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
+               QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
+               AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
+               FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
+               oU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
+             this.name && !this.name.startsWith("data:") || (this.name = UU), this.url = UU, XU && (this._forcedExtension = XU);
+             const DU = UU.lastIndexOf("."),
+               EU = XU || (DU > -1 ? UU.substring(DU).toLowerCase() : ""),
+               YU = 0 === EU.indexOf(".dds"),
+ ... (251 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L464-L465` → after: `L513-L514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L513-L514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L513-L514) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L464-L465)

```diff
-       static Log(MM) {
-         aM.e.Log(MM)
+       getClassName() {
+         return "DynamicTexture"
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L467-L468` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L516-L517) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L467-L468)

```diff
-       static Warn(MM) {
-         aM.e.Warn(MM)
+       get canRescale() {
+         return !0
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L470-L471` → after: `L519-L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L519-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L519-L520) · [Before (L470-L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L470-L471)

```diff
-       static Error(MM) {
-         aM.e.Error(MM)
+       _recreate(UU) {
+         this._canvas.width = UU.width, this._canvas.height = UU.height, this.releaseInternalTexture(), this._texture = this._getEngine().createDynamicTexture(UU.width, UU.height, this._generateMipMaps, this.samplingMode)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L473-L474` → after: `L522-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L522-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L522-L524) · [Before (L473-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L473-L474)

```diff
-       static get LogCache() {
-         return aM.e.LogCache
+       scale(UU) {
+         const XU = this.getSize();
+         XU.width *= UU, XU.height *= UU, this._recreate(XU)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L476-L477` → after: `L526-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L526-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L526-L528) · [Before (L476-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L476-L477)

```diff
-       static ClearLogCache() {
-         aM.e.ClearLogCache()
+       scaleTo(UU, XU) {
+         const zU = this.getSize();
+         zU.width = UU, zU.height = XU, this._recreate(zU)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L479-L480` → after: `L530-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L530-L531) · [Before (L479-L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L479-L480)

```diff
-       static set LogLevels(MM) {
-         aM.e.LogLevels = MM
+       getContext() {
+         return this._context
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L482-L483` → after: `L533-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L533-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L533-L535) · [Before (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L482-L483)

```diff
-       static set PerformanceLogLevel(MM) {
-         (MM & OM.PerformanceUserMarkLogLevel) !== OM.PerformanceUserMarkLogLevel ? (MM & OM.PerformanceConsoleLogLevel) !== OM.PerformanceConsoleLogLevel ? (OM.StartPerformanceCounter = OM._StartPerformanceCounterDisabled, OM.EndPerformanceCounter = OM._EndPerformanceCounterDisab … [truncated]
+       clear(UU) {
+         const XU = this.getSize();
+         UU && (this._context.fillStyle = UU), this._context.clearRect(0, 0, XU.width, XU.height)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L485-L491` → after: `L537-L547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L537-L547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L537-L547) · [Before (L485-L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L485-L491)

```diff
-       static _StartPerformanceCounterDisabled(MM, rM) {}
-       static _EndPerformanceCounterDisabled(MM, rM) {}
-       static _StartUserMark(MM) {
-         let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         if (!OM._Performance) {
-           if (!(0, jM.l)()) return;
-           OM._Performance = window.performance
+       update(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this._texture && this._getEngine().updateDynamicTexture(this._texture, this._canvas, void 0 === UU || UU, XU, this._format || void 0, void 0, zU)
+       }
+       drawText(UU, XU, zU, cU, yU, QU, AU) {
+         let FU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
+         const oU = this.getSize();
+         if (QU && (this._context.fillStyle = QU, this._context.fillRect(0, 0, oU.width, oU.height)), this._context.font = cU, null === XU || void 0 === XU) {
+           const zU = this._context.measureText(UU);
+           XU = (oU.width - zU.width) / 2
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L493-L504` → after: `L549-L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L549-L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L549-L553) · [Before (L493-L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L493-L504)

```diff
-         rM && OM._Performance.mark && OM._Performance.mark(MM + "-Begin")
-       }
-       static _EndUserMark(MM) {
-         (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && OM._Performance.mark && (OM._Performance.mark(MM + "-End"), OM._Performance.measure(MM, MM + "-Begin", MM + "-End"))
-       }
-       static _StartPerformanceConsole(MM) {
-         let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         rM && (OM._StartUserMark(MM, rM), console.time && console.time(MM))
-       }
-       static _EndPerformanceConsole(MM) {
-         let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
-         rM && (OM._EndUserMark(MM, rM), console.timeEnd(MM))
+         if (null === zU || void 0 === zU) {
+           const UU = parseInt(cU.replace(/\D/g, ""));
+           zU = oU.height / 2 + UU / 3.65
+         }
+         this._context.fillStyle = yU || "", this._context.fillText(UU, XU, zU), FU && this.update(AU)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L506-L512` → after: `L555-L556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L555-L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L555-L556) · [Before (L506-L512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L506-L512)

```diff
-       static _StartMarkNative(MM) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.startPerformanceCounter)
-           if (OM._NativePerformanceCounterHandles.has(MM)) OM.Warn(`Performance counter with name ${MM} is already started.`);
-           else {
-             const rM = _native.startPerformanceCounter(MM);
-             OM._NativePerformanceCounterHandles.set(MM, rM)
-           }
+       dispose() {
+         super.dispose(), this._ownCanvas && this._canvas?.remove?.(), this._canvas = null, this._context = null
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L514-L518` → after: `L558-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L558-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L558-L563) · [Before (L514-L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L514-L518)

```diff
-       static _EndMarkNative(MM) {
-         if ((!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && _native?.endPerformanceCounter) {
-           const rM = OM._NativePerformanceCounterHandles.get(MM);
-           rM ? (_native.endPerformanceCounter(rM), OM._NativePerformanceCounterHandles.delete(MM)) : OM.Warn(`Performance counter with name ${MM} was not started.`)
-         }
+       clone() {
+         const UU = this.nS();
+         if (!UU) return this;
+         const XU = this.getSize(),
+           zU = new DU(this.name, XU, UU, this._generateMipMaps);
+         return zU.hasAlpha = this.hasAlpha, zU.level = this.level, zU.wrapU = this.wrapU, zU.wrapV = this.wrapV, zU
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L520-L521` → after: `L565-L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L565-L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L565-L569) · [Before (L520-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L520-L521)

```diff
-       static get Now() {
-         return nM.b.Now
+       serialize() {
+         const UU = this.nS();
+         UU && !UU.isReady() && cU.b.Warn("The scene must be ready before serializing the dynamic texture");
+         const XU = super.serialize();
+         return DU._IsCanvasElement(this._canvas) && (XU.base64String = this._canvas.toDataURL()), XU.invertY = this._invertY, XU.samplingMode = this.samplingMode, XU
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L523-L533` → after: `L571-L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L571-L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L571-L572) · [Before (L523-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L523-L533)

```diff
-       static GetClassName(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           iM = null;
-         if (!rM && MM.getClassName) iM = MM.getClassName();
-         else {
-           if (MM instanceof Object) {
-             iM = (rM ? MM : Object.getPrototypeOf(MM)).constructor.__bjsclassName__
-           }
-           iM || (iM = typeof MM)
-         }
-         return iM
+       static _IsCanvasElement(UU) {
+         return void 0 !== UU.toDataURL
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L535-L538` → after: `L574-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L574-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L574-L575) · [Before (L535-L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L535-L538)

```diff
-       static First(MM, rM) {
-         for (const iM of MM)
-           if (rM(iM)) return iM;
-         return null
+       _rebuild() {
+         this.update()
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L540-L552` → after: `L577-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L577-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L577-L586) · [Before (L540-L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L540-L552)

```diff
-       static getFullClassName(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
-           iM = null,
-           OM = null;
-         if (!rM && MM.getClassName) iM = MM.getClassName();
-         else {
-           if (MM instanceof Object) {
-             const SM = rM ? MM : Object.getPrototypeOf(MM);
-             iM = SM.constructor.__bjsclassName__, OM = SM.constructor.__bjsmoduleName__
-           }
-           iM || (iM = typeof MM)
-         }
-         return iM ? (null != OM ? OM + "." : "") + iM : null
+     }
+   },
+   42257: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => yU
+     });
+     var cU = zU(41557);
+     class yU extends cU.e {
+       get depth() {
+         return this._depth
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L554-L559` → after: `L588-L595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L588-L595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L588-L595) · [Before (L554-L559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L554-L559)

```diff
-       static async DelayAsync(MM) {
-         await new Promise((rM => {
-           setTimeout((() => {
-             rM()
-           }), MM)
-         }))
+       constructor(UU, XU, zU, yU, QU, AU) {
+         let FU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
+           oU = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+           DU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : cU.e.TRILINEAR_SAMPLINGMODE,
+           EU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
+           YU = arguments.length > 10 ? arguments[10] : void 0,
+           NU = arguments.length > 11 ? arguments[11] : void 0;
+         super(null, AU, !FU, oU), this.format = QU, this._texture = AU.qp().createRawTexture2DArray(UU, XU, zU, yU, QU, FU, oU, DU, null, EU, YU ?? 0, NU), this._depth = yU, this.is2DArray = !0
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L561-L562` → after: `L597-L598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L597-L598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L597-L598) · [Before (L561-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L561-L562)

```diff
-       static IsSafari() {
-         return !!(0, jM.k)() && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
+       update(UU) {
+         this.updateMipLevel(UU, 0)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L564-L568` → after: `L600-L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L600-L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L600-L601) · [Before (L564-L568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L564-L568)

```diff
-     }
- 
-     function lM(MM, rM) {
-       return iM => {
-         iM.__bjsclassName__ = MM, iM.__bjsmoduleName__ = null != rM ? rM : null
+       updateMipLevel(UU, XU) {
+         this._texture && this._getEngine().updateRawTexture2DArray(this._texture, UU, this._texture.format, this._texture.invertY, null, this._texture.type, XU)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L570-L606` → after: `L603-L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L603-L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L603-L604) · [Before (L570-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L570-L606)

```diff
-     }
-     OM = yM, yM.AssetBaseUrl = "", yM.UseCustomRequestHeaders = !1, yM.CustomRequestHeaders = zM.e.CustomRequestHeaders, yM.GetDOMTextContent = jM.c, yM._DefaultCdnUrl = "https://cdn.babylonjs.com", yM._CdnVersion = "9.28.0", yM._DefaultAssetsUrl = "https://assets.babylonjs.com/c … [truncated]
-       const rM = document.createElement("a");
-       return rM.href = MM, rM.href
-     } : "function" === typeof URL && "object" === typeof location ? MM => new URL(MM, location.origin).href : () => {
-       throw new Error("Unable to get absolute URL. Override BABYLON.Tools.GetAbsoluteUrl to a custom implementation for the current context.")
-     }, yM.NoneLogLevel = aM.e.NoneLogLevel, yM.MessageLogLevel = aM.e.MessageLogLevel, yM.WarningLogLevel = aM.e.WarningLogLevel, yM.ErrorLogLevel = aM.e.ErrorLogLevel, yM.AllLogLevel = aM.e.AllLogLevel, yM.IsWindowObjectExist = jM.l, yM.PerformanceNoneLogLevel = 0, yM.Performanc … [truncated]
-     class EM {
-       constructor(MM, rM, iM) {
-         let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.iterations = MM, this.index = OM - 1, this._done = !1, this._fn = rM, this._successCallback = iM
-       }
-       executeNext() {
-         this._done || (this.index + 1 < this.iterations ? (++this.index, this._fn(this)) : this.breakLoop())
-       }
-       breakLoop() {
- ... (21 more removed lines; see GitHub link above)
+       static CreateRGBATexture(UU, XU, zU, cU, QU) {
+         return new yU(UU, XU, zU, cU, 5, QU, !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3, arguments.length > 8 && void 0 !== … [truncated]
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/280.js` (Changed code · before: `L609-L613` → after: `L607-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-bd79462126ff5294473a115ebf634580235ec42f57ca4d48d0accb1f9c68d8e9) · [After (L607-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/280.js#L607-L620) · [Before (L609-L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/280.js#L609-L613)

```diff
-     let UM = !1;
- 
-     function GM() {
-       UM || (UM = !0, yM.Mix = dM.i, yM.IsExponentOfTwo = dM.g, LM.c.FallbackTexture = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC41AP/bAE … [truncated]
-     }
+   },
+   42248: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => cU.e
+     });
+     var cU = zU(41436);
+     (0, cU.i)()
+   },
+   41199: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => cU.d
+     });
+     var cU = zU(41202);
+     (0, cU.b)()
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/281.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/281.js` (128 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L4)

```diff
-   41520: (MM, rM, iM) => {
+   41295: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L6)

```diff
-       c: () => OM
+       b: () => LU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L8-L96` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L8-L14) · [Before (L8-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L8-L96)

```diff
-     let OM = !1
-   },
-   41091: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => hM
-     });
-     var OM = iM(41099),
-       SM = iM(41105),
-       jM = iM(38068),
-       aM = iM(38040),
-       PM = iM(38064),
-       nM = iM(38885),
-       QM = iM(41115);
-     class zM {
-       get wrapU() {
-         return this._wrapU
- ... (73 more removed lines; see GitHub link above)
+     var cU = zU(41113),
+       yU = zU(41121),
+       QU = zU(37819),
+       AU = zU(41301),
+       FU = zU(41323),
+       oU = zU(41278),
+       DU = zU(41205);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L99-L109` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L17) · [Before (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L99-L109)

```diff
-       let rM, iM, QM, LM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM, pM, WM, sM, DM, kM = zM,
-         ZM = [],
-         oM = [],
-         fM = [],
-         YM = [],
-         NM = [],
-         AM = [],
-         xM = [],
-         vM = [],
-         FM = [],
-         BM = [],
+       let XU, zU, AU, FU, EU, YU, NU, IU, pU, aU, tU, gU = [],
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L131-L178` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L39-L41) · [Before (L131-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L131-L178)

```diff
-       return MM = class extends kM {
-         set hasAlpha(MM) {
-           this._hasAlpha = MM
-         }
-         get hasAlpha() {
-           return this._hasAlpha
-         }
-         set getAlphaFromRGB(MM) {
-           this._getAlphaFromRGB !== MM && (this._getAlphaFromRGB = MM, this._scene && this._scene.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this))))
-         }
-         get getAlphaFromRGB() {
-           return this._getAlphaFromRGB
-         }
-         set coordinatesIndex(MM) {
-           this._coordinatesIndex !== MM && (this._coordinatesIndex = MM, this._scene && this._scene.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this))))
-         }
- ... (32 more removed lines; see GitHub link above)
+       return UU = class {
+         constructor() {
+           this.keysUp = (0, cU.n)(this, gU, [38]), this.keysUpward = ((0, cU.n)(this, kU), (0, cU.n)(this, GU, [33])), this.keysDown = ((0, cU.n)(this, BU), (0, cU.n)(this, ZU, [40])), this.keysDownward = ((0, cU.n)(this, RU), (0, cU.n)(this, PU, [34])), this.keysLeft = ((0, cU.n … [truncated]
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L180-L184` → after: `L43-L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L43-L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L43-L57) · [Before (L180-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L180-L184)

```diff
-         get is2DArray() {
-           return !!this._texture && this._texture.is2DArray
-         }
-         set is2DArray(MM) {
-           this._texture && (this._texture.is2DArray = MM)
+         attachControl(UU) {
+           UU = DU.j.BackCompatCameraNoPreventDefault(arguments), this._onCanvasBlurObserver || (this._scene = this.camera.nS(), this._engine = this._scene.qp(), this._onCanvasBlurObserver = this._engine.onCanvasBlurObservable.add((() => {
+             this._keys.length = 0
+           })), this._onKeyboardObserver = this._scene.onKeyboardObservable.add((XU => {
+             const zU = XU.event;
+             if (!zU.metaKey)
+               if (XU.type === oU.c.KEYDOWN) {
+                 if (-1 !== this.keysUp.indexOf(zU.keyCode) || -1 !== this.keysDown.indexOf(zU.keyCode) || -1 !== this.keysLeft.indexOf(zU.keyCode) || -1 !== this.keysRight.indexOf(zU.keyCode) || -1 !== this.keysUpward.indexOf(zU.keyCode) || -1 !== this.keysDownward.indexOf(zU.key … [truncated]
+                   -1 === this._keys.indexOf(zU.keyCode) && this._keys.push(zU.keyCode), UU || zU.preventDefault()
+                 }
+               } else if (-1 !== this.keysUp.indexOf(zU.keyCode) || -1 !== this.keysDown.indexOf(zU.keyCode) || -1 !== this.keysLeft.indexOf(zU.keyCode) || -1 !== this.keysRight.indexOf(zU.keyCode) || -1 !== this.keysUpward.indexOf(zU.keyCode) || -1 !== this.keysDownward.indexOf(z … [truncated]
+               const XU = this._keys.indexOf(zU.keyCode);
+               XU >= 0 && this._keys.splice(XU, 1), UU || zU.preventDefault()
+             }
+           })))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L186-L187` → after: `L59-L60`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L59-L60) · [Before (L186-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L186-L187)

```diff
-         get gammaSpace() {
-           return this._texture ? (null === this._texture._gammaSpace && (this._texture._gammaSpace = this._gammaSpace), this._texture._gammaSpace && !this._texture._useSRGBBuffer) : this._gammaSpace
+         detachControl() {
+           this._scene && (this._onKeyboardObserver && this._scene.onKeyboardObservable.remove(this._onKeyboardObserver), this._onCanvasBlurObserver && this._engine.onCanvasBlurObservable.remove(this._onCanvasBlurObserver), this._onKeyboardObserver = null, this._onCanvasBlurObserv … [truncated]
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L189-L195` → after: `L62-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L62-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L62-L76) · [Before (L189-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L189-L195)

```diff
-         set gammaSpace(MM) {
-           if (this._texture) {
-             if (this._texture._gammaSpace === MM) return;
-             this._texture._gammaSpace = MM
-           } else {
-             if (this._gammaSpace === MM) return;
-             this._gammaSpace = MM
+         checkInputs() {
+           if (this._onKeyboardObserver) {
+             const UU = this.camera,
+               XU = UU.movement.input,
+               zU = XU.getEntry("keyboard", "translate"),
+               cU = XU.getEntry("keyboard", "rotate"),
+               yU = cU?.sensitivity ?? 1,
+               AU = UU._localDirection.sUU(0, 0, 0);
+             for (let QU = 0; QU < this._keys.length; QU++) {
+               const XU = this._keys[QU]; - 1 !== this.keysLeft.indexOf(XU) ? AU.x -= 1 : -1 !== this.keysUp.indexOf(XU) ? AU.z += 1 : -1 !== this.keysRight.indexOf(XU) ? AU.x += 1 : -1 !== this.keysDown.indexOf(XU) ? AU.z -= 1 : -1 !== this.keysUpward.indexOf(XU) ? AU.y += 1 : -1 … [truncated]
+             }
+             if (zU && (0 !== AU.x || 0 !== AU.y || 0 !== AU.z)) {
+               const XU = UU._computeLocalCameraSpeed() * (zU.sensitivity ?? 1);
+               AU.normalize().scaleInPlace(XU), UU.nS().useRightHandedSystem && (AU.z *= -1), UU.getViewMatrix().invertToRef(UU._cameraTransformMatrix), QU.q.TransformNormalToRef(AU, UU._cameraTransformMatrix, UU._transformedDirection), UU.cameraDirection.addInPlace(UU._transforme … [truncated]
+             }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L239-L264` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L80) · [Before (L239-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L239-L264)

```diff
-           return "BaseTexture"
-         }
-         set onDispose(MM) {
-           this._onDisposeObserver && this.Rk.remove(this._onDisposeObserver), this._onDisposeObserver = this.Rk.add(MM)
-         }
-         get isBlocking() {
-           return !0
-         }
-         get loadingError() {
-           return this._loadingError
-         }
-         get errorObject() {
-           return this._errorObject
-         }
-         constructor(rM) {
-           let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
- ... (10 more removed lines; see GitHub link above)
+           return "FreeCameraKeyboardMoveInput"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L266-L267` → after: `L82-L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L82-L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L82-L83) · [Before (L266-L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L266-L267)

```diff
-         getReflectionTextureMatrix() {
-           return aM.d.IdentityReadOnly
+         _onLostFocus() {
+           this._keys.length = 0
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L269-L270` → after: `L85-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L85-L86) · [Before (L269-L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L269-L270)

```diff
-         getRefractionTextureMatrix() {
-           return this.getReflectionTextureMatrix()
+         getSimpleName() {
+           return "keyboard"
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L272-L387` → after: `L88-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L88-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L88-L90) · [Before (L272-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L272-L387)

```diff
-         isReadyOrNotBlocking() {
-           return !this.isBlocking || this.isReady() || this.loadingError
-         }
-         scale(MM) {}
-         get canRescale() {
-           return !1
-         }
-         _getFromCache(MM, rM, iM, OM, SM, jM) {
-           const aM = this._getEngine();
-           if (!aM) return null;
-           const PM = aM._getUseSRGBBuffer(!!SM, rM),
-             nM = aM.getLoadedTexturesCache();
-           for (let QM = 0; QM < nM.length; QM++) {
-             const aM = nM[QM];
-             if ((void 0 === SM || PM === aM._useSRGBBuffer) && (void 0 === OM || OM === aM.invertY) && aM.url === MM && aM.generateMipMaps === !rM && (!iM || iM === aM.samplingMode) && (void 0 === jM || jM === aM.isCube)) return aM.incrementReferences(), aM
-           }
- ... (100 more removed lines; see GitHub link above)
+         _getLocalRotation() {
+           const UU = this.camera._calculateHandednessMultiplier();
+           return this.rotationSpeed * this._engine.getDeltaTime() / 1e3 * UU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L390-L393` → after: `L93-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L93-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L93-L96) · [Before (L390-L393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L390-L393)

```diff
-         const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(kM[Symbol.metadata] ?? null) : void 0;
-         rM = [(0, SM.L)()], iM = [(0, SM.L)()], QM = [(0, SM.L)()], LM = [(0, SM.L)()], HM = [(0, SM.L)("hasAlpha")], hM = [(0, SM.L)("getAlphaFromRGB")], JM = [(0, SM.L)()], dM = [(0, SM.L)("coordinatesIndex")], yM = [(0, SM.L)()], lM = [(0, SM.L)("coordinatesMode")], EM = [(0,  … [truncated]
-           kind: "getter",
-           name: "wrapU",
+         const QU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         XU = [(0, yU.I)()], zU = [(0, yU.I)()], AU = [(0, yU.I)()], FU = [(0, yU.I)()], EU = [(0, yU.I)()], YU = [(0, yU.I)()], NU = [(0, yU.I)()], IU = [(0, yU.I)()], pU = [(0, yU.I)()], aU = [(0, yU.I)()], tU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
+           kind: "field",
+           name: "keysUp",
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L397-L398` → after: `L100-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L100-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L100-L104) · [Before (L397-L398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L397-L398)

```diff
-             has: MM => "wrapU" in MM,
-             get: MM => MM.wrapU
+             has: UU => "keysUp" in UU,
+             get: UU => UU.keysUp,
+             set: (UU, XU) => {
+               UU.keysUp = XU
+             }
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L401-L403` → after: `L107-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L107-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L107-L109) · [Before (L401-L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L401-L403)

```diff
-         }, null, ZM), (0, OM.i)(MM, null, UM, {
-           kind: "getter",
-           name: "wrapV",
+         }, gU, kU), (0, cU.j)(null, null, zU, {
+           kind: "field",
+           name: "keysUpward",
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L407-L408` → after: `L113-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L113-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L113-L117) · [Before (L407-L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L407-L408)

```diff
-             has: MM => "wrapV" in MM,
-             get: MM => MM.wrapV
+             has: UU => "keysUpward" in UU,
+             get: UU => UU.keysUpward,
+             set: (UU, XU) => {
+               UU.keysUpward = XU
+             }
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L411-L413` → after: `L120-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L120-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L120-L122) · [Before (L411-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L411-L413)

```diff
-         }, null, ZM), (0, OM.i)(MM, null, eM, {
-           kind: "getter",
-           name: "isCube",
+         }, GU, BU), (0, cU.j)(null, null, AU, {
+           kind: "field",
+           name: "keysDown",
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L417-L418` → after: `L126-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L126-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L126-L130) · [Before (L417-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L417-L418)

```diff
-             has: MM => "isCube" in MM,
-             get: MM => MM.isCube
+             has: UU => "keysDown" in UU,
+             get: UU => UU.keysDown,
+             set: (UU, XU) => {
+               UU.keysDown = XU
+             }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L421-L423` → after: `L133-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L133-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L133-L135) · [Before (L421-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L421-L423)

```diff
-         }, null, ZM), (0, OM.i)(MM, null, bM, {
-           kind: "getter",
-           name: "is3D",
+         }, ZU, RU), (0, cU.j)(null, null, FU, {
+           kind: "field",
+           name: "keysDownward",
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L427-L428` → after: `L139-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L139-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L139-L143) · [Before (L427-L428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L427-L428)

```diff
-             has: MM => "is3D" in MM,
-             get: MM => MM.is3D
+             has: UU => "keysDownward" in UU,
+             get: UU => UU.keysDownward,
+             set: (UU, XU) => {
+               UU.keysDownward = XU
+             }
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L431-L433` → after: `L146-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L146-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L146-L148) · [Before (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L431-L433)

```diff
-         }, null, ZM), (0, OM.i)(MM, null, wM, {
-           kind: "getter",
-           name: "is2DArray",
+         }, PU, WU), (0, cU.j)(null, null, EU, {
+           kind: "field",
+           name: "keysLeft",
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L437-L438` → after: `L152-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L152-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L152-L156) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L437-L438)

```diff
-             has: MM => "is2DArray" in MM,
-             get: MM => MM.is2DArray
+             has: UU => "keysLeft" in UU,
+             get: UU => UU.keysLeft,
+             set: (UU, XU) => {
+               UU.keysLeft = XU
+             }
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L441-L443` → after: `L159-L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L159-L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L159-L161) · [Before (L441-L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L441-L443)

```diff
-         }, null, ZM), (0, OM.i)(MM, null, tM, {
-           kind: "getter",
-           name: "gammaSpace",
+         }, dU, LU), (0, cU.j)(null, null, YU, {
+           kind: "field",
+           name: "keysRight",
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L447-L448` → after: `L165-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L165-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L165-L169) · [Before (L447-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L447-L448)

```diff
-             has: MM => "gammaSpace" in MM,
-             get: MM => MM.gammaSpace
+             has: UU => "keysRight" in UU,
+             get: UU => UU.keysRight,
+             set: (UU, XU) => {
+               UU.keysRight = XU
+             }
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L451-L453` → after: `L172-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L172-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L172-L174) · [Before (L451-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L451-L453)

```diff
-         }, null, ZM), (0, OM.i)(MM, null, RM, {
-           kind: "getter",
-           name: "lodGenerationOffset",
+         }, eU, CU), (0, cU.j)(null, null, NU, {
+           kind: "field",
+           name: "rotationSpeed",
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L457-L458` → after: `L178-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L178-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L178-L182) · [Before (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L457-L458)

```diff
-             has: MM => "lodGenerationOffset" in MM,
-             get: MM => MM.lodGenerationOffset
+             has: UU => "rotationSpeed" in UU,
+             get: UU => UU.rotationSpeed,
+             set: (UU, XU) => {
+               UU.rotationSpeed = XU
+             }
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L461-L463` → after: `L185-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L185-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L185-L187) · [Before (L461-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L461-L463)

```diff
-         }, null, ZM), (0, OM.i)(MM, null, pM, {
-           kind: "getter",
-           name: "lodGenerationScale",
+         }, wU, qU), (0, cU.j)(null, null, IU, {
+           kind: "field",
+           name: "keysRotateLeft",
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L467-L468` → after: `L191-L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L191-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L191-L195) · [Before (L467-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L467-L468)

```diff
-             has: MM => "lodGenerationScale" in MM,
-             get: MM => MM.lodGenerationScale
+             has: UU => "keysRotateLeft" in UU,
+             get: UU => UU.keysRotateLeft,
+             set: (UU, XU) => {
+               UU.keysRotateLeft = XU
+             }
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L471-L473` → after: `L198-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L198-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L198-L200) · [Before (L471-L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L471-L473)

```diff
-         }, null, ZM), (0, OM.i)(MM, null, WM, {
-           kind: "getter",
-           name: "linearSpecularLOD",
+         }, OU, SU), (0, cU.j)(null, null, pU, {
+           kind: "field",
+           name: "keysRotateRight",
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L477-L478` → after: `L204-L208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L204-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L204-L208) · [Before (L477-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L477-L478)

```diff
-             has: MM => "linearSpecularLOD" in MM,
-             get: MM => MM.linearSpecularLOD
+             has: UU => "keysRotateRight" in UU,
+             get: UU => UU.keysRotateRight,
+             set: (UU, XU) => {
+               UU.keysRotateRight = XU
+             }
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L481-L483` → after: `L211-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L211-L213) · [Before (L481-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L481-L483)

```diff
-         }, null, ZM), (0, OM.i)(MM, null, sM, {
-           kind: "getter",
-           name: "irradianceTexture",
+         }, rU, uU), (0, cU.j)(null, null, aU, {
+           kind: "field",
+           name: "keysRotateUp",
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L487-L488` → after: `L217-L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L217-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L217-L221) · [Before (L487-L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L487-L488)

```diff
-             has: MM => "irradianceTexture" in MM,
-             get: MM => MM.irradianceTexture
+             has: UU => "keysRotateUp" in UU,
+             get: UU => UU.keysRotateUp,
+             set: (UU, XU) => {
+               UU.keysRotateUp = XU
+             }
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L491` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L224) · [Before (L491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L491)

```diff
-         }, null, ZM), (0, OM.i)(null, null, rM, {
+         }, fU, iU), (0, cU.j)(null, null, tU, {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L493` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L226) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L493)

```diff
-           name: "uniqueId",
+           name: "keysRotateDown",
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L497-L498` → after: `L230-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L230-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L230-L231) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L497-L498)

```diff
-             has: MM => "uniqueId" in MM,
-             get: MM => MM.uniqueId,
+             has: UU => "keysRotateDown" in UU,
+             get: UU => UU.keysRotateDown,
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L500` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L233) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L500)

```diff
-               MM.uniqueId = rM
+               UU.keysRotateDown = XU
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L504` → after: `L237-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L237-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L237-L333) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L504)

```diff
-         }, oM, fM), (0, OM.i)(null, null, iM, {
+         }, HU, MU), QU && Object.defineProperty(UU, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: QU
+         })
+       })(), UU
+     })();
+     FU.d.FreeCameraKeyboardMoveInput = EU;
+     var YU = zU(37846),
+       NU = zU(41271);
+     let IU = (() => {
+       var UU;
+       let XU, zU, QU = [],
+         AU = [],
+         FU = [],
+ ... (81 more added lines; see GitHub link above)
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L506` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L335) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L506)

```diff
-           name: "name",
+           name: "buttons",
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L510-L511` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L339-L340) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L510-L511)

```diff
-             has: MM => "name" in MM,
-             get: MM => MM.name,
+             has: UU => "buttons" in UU,
+             get: UU => UU.buttons,
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L513` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L342) · [Before (L513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L513)

```diff
-               MM.name = rM
+               UU.buttons = XU
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L517` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L346) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L517)

```diff
-         }, YM, NM), (0, OM.i)(null, null, QM, {
+         }, QU, AU), (0, cU.j)(null, null, zU, {
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L519` → after: `L348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L348) · [Before (L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L519)

```diff
-           name: "displayName",
+           name: "angularSensibility",
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L523-L524` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L352-L353) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L523-L524)

```diff
-             has: MM => "displayName" in MM,
-             get: MM => MM.displayName,
+             has: UU => "angularSensibility" in UU,
+             get: UU => UU.angularSensibility,
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L526` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L355) · [Before (L526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L526)

```diff
-               MM.displayName = rM
+               UU.angularSensibility = XU
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L530` → after: `L359-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L359-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L359-L407) · [Before (L530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L530)

```diff
-         }, AM, xM), (0, OM.i)(null, null, LM, {
+         }, FU, oU), DU && Object.defineProperty(UU, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: DU
+         })
+       })(), UU
+     })();
+     FU.d.FreeCameraMouseInput = IU;
+     var pU = zU(41283);
+     let aU = (() => {
+       var UU;
+       let XU, zU, QU, AU = [],
+         FU = [],
+         oU = [],
+         EU = [],
+ ... (33 more added lines; see GitHub link above)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L532` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L409) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L532)

```diff
-           name: "metadata",
+           name: "wheelPrecisionX",
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L536-L537` → after: `L413-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L413-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L413-L414) · [Before (L536-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L536-L537)

```diff
-             has: MM => "metadata" in MM,
-             get: MM => MM.metadata,
+             has: UU => "wheelPrecisionX" in UU,
+             get: UU => UU.wheelPrecisionX,
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L539` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L416) · [Before (L539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L539)

```diff
-               MM.metadata = rM
+               UU.wheelPrecisionX = XU
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L543` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L420) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L543)

```diff
-         }, vM, FM), (0, OM.i)(null, null, HM, {
+         }, AU, FU), (0, cU.j)(null, null, zU, {
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L545` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L422) · [Before (L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L545)

```diff
-           name: "_hasAlpha",
+           name: "wheelPrecisionY",
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L549-L550` → after: `L426-L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L426-L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L426-L427) · [Before (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L549-L550)

```diff
-             has: MM => "_hasAlpha" in MM,
-             get: MM => MM._hasAlpha,
+             has: UU => "wheelPrecisionY" in UU,
+             get: UU => UU.wheelPrecisionY,
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L552` → after: `L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L429) · [Before (L552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L552)

```diff
-               MM._hasAlpha = rM
+               UU.wheelPrecisionY = XU
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L556` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L433) · [Before (L556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L556)

```diff
-         }, BM, XM), (0, OM.i)(null, null, hM, {
+         }, oU, EU), (0, cU.j)(null, null, QU, {
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L558` → after: `L435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L435) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L558)

```diff
-           name: "_getAlphaFromRGB",
+           name: "wheelPrecisionZ",
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L562-L563` → after: `L439-L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L439-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L439-L440) · [Before (L562-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L562-L563)

```diff
-             has: MM => "_getAlphaFromRGB" in MM,
-             get: MM => MM._getAlphaFromRGB,
+             has: UU => "wheelPrecisionZ" in UU,
+             get: UU => UU.wheelPrecisionZ,
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L565` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L442) · [Before (L565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L565)

```diff
-               MM._getAlphaFromRGB = rM
+               UU.wheelPrecisionZ = XU
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L569-L571` → after: `L446-L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L446-L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L446-L563) · [Before (L569-L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L569-L571)

```diff
-         }, IM, KM), (0, OM.i)(null, null, JM, {
-           kind: "field",
-           name: "level",
+         }, IU, aU), DU && Object.defineProperty(UU, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: DU
+         })
+       })(), UU
+     })();
+     var tU;
+     ! function(UU) {
+       UU[UU.MoveRelative = 0] = "MoveRelative", UU[UU.RotateRelative = 1] = "RotateRelative", UU[UU.MoveScene = 2] = "MoveScene"
+     }(tU || (tU = {}));
+     let gU = (() => {
+       var UU;
+       let XU, zU, AU, FU, oU, DU, EU, YU, NU, IU = aU,
+         pU = [];
+ ... (102 more added lines; see GitHub link above)
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L575-L576` → after: `L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L567) · [Before (L575-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L575-L576)

```diff
-             has: MM => "level" in MM,
-             get: MM => MM.level,
+             has: UU => "wheelXMoveRelative" in UU,
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L578` → after: `L569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L569) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L578)

```diff
-               MM.level = rM
+               UU.wheelXMoveRelative = XU
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L582-L584` → after: `L573-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L573-L575) · [Before (L582-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L582-L584)

```diff
-         }, qM, TM), (0, OM.i)(null, null, dM, {
-           kind: "field",
-           name: "_coordinatesIndex",
+         }, null, pU), (0, cU.j)(UU, null, zU, {
+           kind: "setter",
+           name: "wheelYMoveRelative",
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L588-L589` → after: `L579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L579) · [Before (L588-L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L588-L589)

```diff
-             has: MM => "_coordinatesIndex" in MM,
-             get: MM => MM._coordinatesIndex,
+             has: UU => "wheelYMoveRelative" in UU,
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L591` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L581) · [Before (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L591)

```diff
-               MM._coordinatesIndex = rM
+               UU.wheelYMoveRelative = XU
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L595-L597` → after: `L585-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L585-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L585-L587) · [Before (L595-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L595-L597)

```diff
-         }, VM, cM), (0, OM.i)(null, null, yM, {
-           kind: "field",
-           name: "optimizeUVAllocation",
+         }, null, pU), (0, cU.j)(UU, null, AU, {
+           kind: "setter",
+           name: "wheelZMoveRelative",
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L601-L602` → after: `L591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L591) · [Before (L601-L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L601-L602)

```diff
-             has: MM => "optimizeUVAllocation" in MM,
-             get: MM => MM.optimizeUVAllocation,
+             has: UU => "wheelZMoveRelative" in UU,
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L604` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L593) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L604)

```diff
-               MM.optimizeUVAllocation = rM
+               UU.wheelZMoveRelative = XU
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L608-L610` → after: `L597-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L597-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L597-L599) · [Before (L608-L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L608-L610)

```diff
-         }, Mr, rr), (0, OM.i)(null, null, lM, {
-           kind: "field",
-           name: "_coordinatesMode",
+         }, null, pU), (0, cU.j)(UU, null, FU, {
+           kind: "setter",
+           name: "wheelXRotateRelative",
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L614-L615` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L603) · [Before (L614-L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L614-L615)

```diff
-             has: MM => "_coordinatesMode" in MM,
-             get: MM => MM._coordinatesMode,
+             has: UU => "wheelXRotateRelative" in UU,
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L617` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L605) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L617)

```diff
-               MM._coordinatesMode = rM
+               UU.wheelXRotateRelative = XU
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L621-L623` → after: `L609-L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L609-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L609-L611) · [Before (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L621-L623)

```diff
-         }, ir, Or), (0, OM.i)(null, null, GM, {
-           kind: "field",
-           name: "wrapR",
+         }, null, pU), (0, cU.j)(UU, null, oU, {
+           kind: "setter",
+           name: "wheelYRotateRelative",
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L627-L628` → after: `L615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R615) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L615) · [Before (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L627-L628)

```diff
-             has: MM => "wrapR" in MM,
-             get: MM => MM.wrapR,
+             has: UU => "wheelYRotateRelative" in UU,
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L630` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L617) · [Before (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L630)

```diff
-               MM.wrapR = rM
+               UU.wheelYRotateRelative = XU
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L634-L636` → after: `L621-L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L621-L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L621-L623) · [Before (L634-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L634-L636)

```diff
-         }, Sr, jr), (0, OM.i)(null, null, CM, {
-           kind: "field",
-           name: "anisotropicFilteringLevel",
+         }, null, pU), (0, cU.j)(UU, null, DU, {
+           kind: "setter",
+           name: "wheelZRotateRelative",
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L640-L641` → after: `L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L627) · [Before (L640-L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L640-L641)

```diff
-             has: MM => "anisotropicFilteringLevel" in MM,
-             get: MM => MM.anisotropicFilteringLevel,
+             has: UU => "wheelZRotateRelative" in UU,
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L643` → after: `L629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L629) · [Before (L643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L643)

```diff
-               MM.anisotropicFilteringLevel = rM
+               UU.wheelZRotateRelative = XU
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L647-L649` → after: `L633-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L633-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L633-L659) · [Before (L647-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L647-L649)

```diff
-         }, ar, Pr), (0, OM.i)(null, null, gM, {
-           kind: "field",
-           name: "invertZ",
+         }, null, pU), (0, cU.j)(UU, null, EU, {
+           kind: "setter",
+           name: "wheelXMoveScene",
+           static: !1,
+           private: !1,
+           access: {
+             has: UU => "wheelXMoveScene" in UU,
+             set: (UU, XU) => {
+               UU.wheelXMoveScene = XU
+             }
+           },
+           metadata: QU
+         }, null, pU), (0, cU.j)(UU, null, YU, {
+           kind: "setter",
+           name: "wheelYMoveScene",
+           static: !1,
+ ... (11 more added lines; see GitHub link above)
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L653-L654` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L663) · [Before (L653-L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L653-L654)

```diff
-             has: MM => "invertZ" in MM,
-             get: MM => MM.invertZ,
+             has: UU => "wheelZMoveScene" in UU,
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L656` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L665) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L656)

```diff
-               MM.invertZ = rM
+               UU.wheelZMoveScene = XU
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L660` → after: `L669-L757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L669-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L669-L757) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L660)

```diff
-         }, nr, Qr), (0, OM.i)(null, null, uM, {
+         }, null, pU), QU && Object.defineProperty(UU, Symbol.metadata, {
+           enumerable: !0,
+           configurable: !0,
+           writable: !0,
+           value: QU
+         })
+       })(), UU
+     })();
+     FU.d.FreeCameraMouseWheelInput = gU;
+     let kU = (() => {
+       var UU;
+       let XU, zU, AU = [],
+         FU = [],
+         oU = [],
+         EU = [];
+       return UU = class {
+ ... (73 more added lines; see GitHub link above)
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L662` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L759) · [Before (L662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L662)

```diff
-           name: "lodLevelInAlpha",
+           name: "touchAngularSensibility",
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L666-L667` → after: `L763-L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L763-L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L763-L764) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L666-L667)

```diff
-             has: MM => "lodLevelInAlpha" in MM,
-             get: MM => MM.lodLevelInAlpha,
+             has: UU => "touchAngularSensibility" in UU,
+             get: UU => UU.touchAngularSensibility,
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L669` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L766) · [Before (L669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L669)

```diff
-               MM.lodLevelInAlpha = rM
+               UU.touchAngularSensibility = XU
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L673` → after: `L770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L770) · [Before (L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L673)

```diff
-         }, zr, Lr), (0, OM.i)(null, null, DM, {
+         }, AU, FU), (0, cU.j)(null, null, zU, {
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L675` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L772) · [Before (L675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L675)

```diff
-           name: "isRenderTarget",
+           name: "touchMoveSensibility",
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L679-L680` → after: `L776-L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L776-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L776-L777) · [Before (L679-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L679-L680)

```diff
-             has: MM => "isRenderTarget" in MM,
-             get: MM => MM.isRenderTarget,
+             has: UU => "touchMoveSensibility" in UU,
+             get: UU => UU.touchMoveSensibility,
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L682` → after: `L779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L779) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L682)

```diff
-               MM.isRenderTarget = rM
+               UU.touchMoveSensibility = XU
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L692` → after: `L789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L789) · [Before (L692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L692)

```diff
-       })(), MM.DEFAULT_ANISOTROPIC_FILTERING_LEVEL = 4, MM
+       })(), UU
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L694-L724` → after: `L791-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L791-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L791-L808) · [Before (L694-L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L694-L724)

```diff
-     (LM = hM.prototype).forceSphericalPolynomialsRecompute ?? (LM.forceSphericalPolynomialsRecompute = (0, HM.j)("BaseTexture", "forceSphericalPolynomialsRecompute")), Object.getOwnPropertyDescriptor(hM.prototype, "sphericalPolynomial") || Object.defineProperty(hM.prototype, "sph … [truncated]
-   },
-   41560: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => GM,
-       h: () => EM
-     });
-     var OM = iM(41099),
-       SM = iM(41105),
-       jM = iM(38068),
-       aM = iM(38040),
-       PM = iM(41091),
-       nM = iM(38085),
-       QM = iM(40990),
-       zM = iM(41003),
-       LM = iM(41210),
- ... (15 more removed lines; see GitHub link above)
+     FU.d.FreeCameraTouchInput = kU;
+     var GU, BU, ZU, RU = zU(40989);
+     class PU extends FU.h {
+       constructor(UU) {
+         super(UU), this._mouseInput = null, this._mouseWheelInput = null
+       }
+       addKeyboard() {
+         return this.add(new EU), this
+       }
+       addMouse() {
+         let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
+         return this._mouseInput || (this._mouseInput = new IU(UU), this.add(this._mouseInput)), this
+       }
+       removeMouse() {
+         return this._mouseInput && this.remove(this._mouseInput), this
+       }
+ ... (2 more added lines; see GitHub link above)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L726-L735` → after: `L810-L811`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L810-L811)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L810-L811) · [Before (L726-L735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L726-L735)

```diff
-       const jM = document.createElement("canvas");
-       jM.width = OM, jM.height = SM;
-       const aM = jM.getContext("2d");
-       if (!aM) return null;
-       const PM = aM.createImageData(OM, SM);
-       if (PM.data.set(MM), aM.putImageData(PM, 0, 0), iM) {
-         const MM = document.createElement("canvas");
-         MM.width = OM, MM.height = SM;
-         const rM = MM.getContext("2d");
-         return rM ? (rM.translate(0, SM), rM.scale(1, -1), rM.drawImage(jM, 0, 0), MM.toDataURL("image/png")) : null
+       removeMouseWheel() {
+         return this._mouseWheelInput && this.remove(this._mouseWheelInput), this
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L737-L757` → after: `L813-L821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L813-L821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L813-L821) · [Before (L737-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L737-L757)

```diff
-       return jM.toDataURL("image/png")
-     }
- 
-     function JM(MM) {
-       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const OM = MM.getInternalTexture();
-       if (!OM) return null;
-       const SM = MM._readPixelsSync(rM, iM);
-       return SM ? hM(SM, MM.getSize(), OM.invertY) : null
-     }
-     async function dM(MM) {
-       let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-       const OM = MM.getInternalTexture();
-       if (!OM) return null;
- ... (5 more removed lines; see GitHub link above)
+       addTouch() {
+         return this.add(new kU), this
+       }
+       clear() {
+         super.clear(), this._mouseInput = null
+       }
+     }(GU = PU.prototype).addDeviceOrientation ?? (GU.addDeviceOrientation = (0, RU.k)("FreeCameraInputsManager", "addDeviceOrientation")), (BU = PU.prototype).addVirtualJoystick ?? (BU.addVirtualJoystick = (0, RU.k)("FreeCameraInputsManager", "addVirtualJoystick")), (ZU = PU.prot … [truncated]
+     var WU = zU(41003),
+       dU = zU(37863);
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L760-L777` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L824) · [Before (L760-L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L760-L777)

```diff
-         let rM, iM, hM, EM, UM, GM, CM, eM, bM, wM, tM, gM, uM, RM = PM.c,
-           pM = [],
-           WM = [],
-           sM = [],
-           DM = [],
-           kM = [],
-           ZM = [],
-           oM = [],
-           fM = [],
-           YM = [],
-           NM = [],
-           AM = [],
-           xM = [],
-           vM = [],
-           FM = [],
-           BM = [],
- ... (2 more removed lines; see GitHub link above)
+         let XU, zU, FU, oU, EU = AU.i,
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L787-L789` → after: `L834-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L834-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L834-L836) · [Before (L787-L789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L787-L789)

```diff
-           static _CreateVideoTexture(rM, iM, OM) {
-             arguments.length > 5 && void 0 !== arguments[5] || MM.TRILINEAR_SAMPLINGMODE;
-             throw (0, QM.n)("VideoTexture")
+           get angularSensibility() {
+             const UU = this.inputs.attached.mouse;
+             return UU ? UU.angularSensibility : 0
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L791-L792` → after: `L838-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L838-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L838-L840) · [Before (L791-L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L791-L792)

```diff
-           get noMipmap() {
-             return this._noMipmap
+           set angularSensibility(UU) {
+             const XU = this.inputs.attached.mouse;
+             XU && (XU.angularSensibility = UU)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L794-L795` → after: `L842-L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L842-L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L842-L844) · [Before (L794-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L794-L795)

```diff
-           get mimeType() {
-             return this._mimeType
+           get keysUp() {
+             const UU = this.inputs.attached.keyboard;
+             return UU ? UU.keysUp : []
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L797-L798` → after: `L846-L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L846-L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L846-L848) · [Before (L797-L798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L797-L798)

```diff
-           set isBlocking(MM) {
-             this._isBlocking = MM
+           set keysUp(UU) {
+             const XU = this.inputs.attached.keyboard;
+             XU && (XU.keysUp = UU)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L800-L801` → after: `L850-L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L850-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L850-L852) · [Before (L800-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L800-L801)

```diff
-           get isBlocking() {
-             return this._isBlocking
+           get keysUpward() {
+             const UU = this.inputs.attached.keyboard;
+             return UU ? UU.keysUpward : []
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L803-L804` → after: `L854-L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L854-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L854-L856) · [Before (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L803-L804)

```diff
-           get invertY() {
-             return this._invertY
+           set keysUpward(UU) {
+             const XU = this.inputs.attached.keyboard;
+             XU && (XU.keysUpward = UU)
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L806-L852` → after: `L858-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L858-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L858-L860) · [Before (L806-L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L806-L852)

```diff
-           constructor(rM, iM, SM, aM) {
-             let PM, nM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : MM.TRILINEAR_SAMPLINGMODE,
-               QM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               LM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
-               mM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               HM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-               hM = arguments.length > 9 ? arguments[9] : void 0,
-               JM = arguments.length > 10 ? arguments[10] : void 0,
-               dM = arguments.length > 11 ? arguments[11] : void 0,
-               lM = arguments.length > 12 ? arguments[12] : void 0,
-               EM = arguments.length > 13 ? arguments[13] : void 0;
-             super(iM), this.url = ((0, OM.m)(this, pM), (0, OM.m)(this, WM, null)), this.uOffset = ((0, OM.m)(this, sM), (0, OM.m)(this, DM, 0)), this.vOffset = ((0, OM.m)(this, kM), (0, OM.m)(this, ZM, 0)), this.uScale = ((0, OM.m)(this, oM), (0, OM.m)(this, fM, 1)), this.vScale … [truncated]
-             let UM = !1,
-               GM = null,
-               CM = !0;
-             "object" === typeof SM && null !== SM ? (PM = SM.noMipmap ?? !1, aM = SM.invertY ?? !yM.c, nM = SM.samplingMode ?? MM.TRILINEAR_SAMPLINGMODE, QM = SM.onLoad ?? null, LM = SM.onError ?? null, mM = SM.buffer ?? null, HM = SM.deleteBuffer ?? !1, hM = SM.format, JM = SM.m … [truncated]
- ... (31 more removed lines; see GitHub link above)
+           get keysDown() {
+             const UU = this.inputs.attached.keyboard;
+             return UU ? UU.keysDown : []
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L854-L862` → after: `L862-L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L862-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L862-L864) · [Before (L854-L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L854-L862)

```diff
-           updateURL(MM) {
-             let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               iM = arguments.length > 2 ? arguments[2] : void 0,
-               OM = arguments.length > 3 ? arguments[3] : void 0;
-             this.url && (this.releaseInternalTexture(), this.Hk().markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this)))), this.name && !this.name.startsWith("data:") || (this.name = MM), this.url = MM, this._buffer = rM, this._forcedExtension = OM, this.delayLoadState = 4;
-             const SM = this._delayedOnLoad;
-             this._delayedOnLoad = () => {
-               SM ? SM() : this.onLoadObservable.hasObservers() && this.onLoadObservable.notifyObservers(this), iM && iM()
-             }, this.delayLoad()
+           set keysDown(UU) {
+             const XU = this.inputs.attached.keyboard;
+             XU && (XU.keysDown = UU)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L864-L869` → after: `L866-L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L866-L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L866-L868) · [Before (L864-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L864-L869)

```diff
-           delayLoad() {
-             if (4 !== this.delayLoadState) return;
-             const MM = this.Hk();
-             if (!MM) return;
-             let rM = this.url;
-             !rM && (this.name.indexOf("://") > 0 || this.name.startsWith("data:")) && (rM = this.name), this.delayLoadState = 1, this._texture = this._getFromCache(rM, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube), this._texture ? this._delay … [truncated]
+           get keysDownward() {
+             const UU = this.inputs.attached.keyboard;
+             return UU ? UU.keysDownward : []
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L871-L872` → after: `L870-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L870-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L870-L872) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L871-L872)

```diff
-           _prepareRowForTextureGeneration(MM, rM, iM, OM) {
-             MM *= this._cachedUScale, rM *= this._cachedVScale, MM -= this.uRotationCenter * this._cachedUScale, rM -= this.vRotationCenter * this._cachedVScale, iM -= this.wRotationCenter, aM.q.TransformCoordinatesFromFloatsToRef(MM, rM, iM, this._rowGenerationMatrix, OM), OM.x  … [truncated]
+           set keysDownward(UU) {
+             const XU = this.inputs.attached.keyboard;
+             XU && (XU.keysDownward = UU)
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L874-L881` → after: `L874-L876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L874-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L874-L876) · [Before (L874-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L874-L881)

```diff
-           getTextureMatrix() {
-             let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
-             if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale * MM === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng && t … [truncated]
-             this._cachedUOffset = this.uOffset, this._cachedVOffset = this.vOffset, this._cachedUScale = this.uScale * MM, this._cachedVScale = this.vScale, this._cachedUAng = this.uAng, this._cachedVAng = this.vAng, this._cachedWAng = this.wAng, this._cachedURotationCenter = thi … [truncated]
-             const rM = this.Hk();
-             if (!rM) return this._cachedTextureMatrix;
-             const iM = this._cachedIdentity3x2;
-             return this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2(), this.optimizeUVAllocation && iM !== this._cachedIdentity3x2 && rM.markAllMaterialsAsDirty(1, (MM => MM.hasTexture(this))), this._cachedTextureMatrix
+           get keysLeft() {
+             const UU = this.inputs.attached.keyboard;
+             return UU ? UU.keysLeft : []
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L883-L905` → after: `L878-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L878-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L878-L880) · [Before (L883-L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L883-L905)

```diff
-           getReflectionTextureMatrix() {
-             const rM = this.Hk();
-             if (!rM) return this._cachedReflectionTextureMatrix;
-             if (this.uOffset === this._cachedReflectionUOffset && this.vOffset === this._cachedReflectionVOffset && this.uScale === this._cachedReflectionUScale && this.vScale === this._cachedReflectionVScale && this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
-               if (this.coordinatesMode !== MM.PROJECTION_MODE) return this._cachedReflectionTextureMatrix;
-               if (this._cachedReflectionProjectionMatrixId === rM.getProjectionMatrix().updateFlag) return this._cachedReflectionTextureMatrix
-             }
-             this._cachedReflectionTextureMatrix || (this._cachedReflectionTextureMatrix = aM.d.Zero()), this._projectionModeMatrix || (this._projectionModeMatrix = aM.d.Zero());
-             const iM = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
-             switch (this._cachedReflectionUOffset = this.uOffset, this._cachedReflectionVOffset = this.vOffset, this._cachedReflectionUScale = this.uScale, this._cachedReflectionVScale = this.vScale, this._cachedReflectionCoordinatesMode = this.coordinatesMode, this.coordinatesMo … [truncated]
-               case MM.PLANAR_MODE:
-                 aM.d.IdentityToRef(this._cachedReflectionTextureMatrix), this._cachedReflectionTextureMatrix[0] = this.uScale, this._cachedReflectionTextureMatrix[5] = this.vScale, this._cachedReflectionTextureMatrix[12] = this.uOffset, this._cachedReflectionTextureMatrix[13] = t … [truncated]
-                 break;
-               case MM.PROJECTION_MODE: {
-                 aM.d.FromValuesToRef(.5, 0, 0, 0, 0, -.5, 0, 0, 0, 0, 0, 0, .5, .5, 1, 1, this._projectionModeMatrix);
-                 const MM = rM.getProjectionMatrix();
- ... (7 more removed lines; see GitHub link above)
+           set keysLeft(UU) {
+             const XU = this.inputs.attached.keyboard;
+             XU && (XU.keysLeft = UU)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L907-L922` → after: `L882-L884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R882) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L882-L884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L882-L884) · [Before (L907-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L907-L922)

```diff
-           clone() {
-             const rM = {
-               noMipmap: this._noMipmap,
-               invertY: this._invertY,
-               samplingMode: this.samplingMode,
-               onLoad: void 0,
-               onError: void 0,
-               buffer: this._texture ? this._texture._buffer : void 0,
-               deleteBuffer: this._deleteBuffer,
-               format: this.textureFormat,
-               mimeType: this.mimeType,
-               loaderOptions: this._loaderOptions,
-               creationFlags: this._creationFlags,
-               useSRGBBuffer: this._useSRGBBuffer
-             };
-             return lM.b.Clone((() => new MM(this._texture ? this._texture.url : null, this.Hk(), rM)), this)
+           get keysRight() {
+             const UU = this.inputs.attached.keyboard;
+             return UU ? UU.keysRight : []
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L924-L935` → after: `L886-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L886-L888) · [Before (L924-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L924-L935)

```diff
-           serialize() {
-             const rM = this.name;
-             MM.SerializeBuffers || this.name.startsWith("data:") && (this.name = ""), this.name.startsWith("data:") && this.url === this.name && (this.url = "");
-             const iM = super.serialize(MM._SerializeInternalTextureUniqueId);
-             if (!iM) return null;
-             if (MM.SerializeBuffers || MM.ForceSerializeBuffers)
-               if ("string" === typeof this._buffer && this._buffer.startsWith("data:")) iM.base64String = this._buffer, iM.name = iM.name.replace("data:", "");
-               else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
-               const MM = this.mimeType || "image/png";
-               iM.base64String = `data:${MM};base64,${(0,HM.j)(this._buffer)}`
-             } else(MM.ForceSerializeBuffers || this.url && this.url.startsWith("blob:") || this._forceSerialize) && (iM.base64String = !this._engine || this._engine._features.supportSyncTextureRead ? JM(this) : dM(this));
-             return iM.invertY = this._invertY, iM.samplingMode = this.samplingMode, iM._creationFlags = this._creationFlags, iM._useSRGBBuffer = this._useSRGBBuffer, MM._SerializeInternalTextureUniqueId && (iM.internalTextureUniqueId = this._texture?.uniqueId), iM.internalTexture … [truncated]
+           set keysRight(UU) {
+             const XU = this.inputs.attached.keyboard;
+             XU && (XU.keysRight = UU)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L937-L938` → after: `L890-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L890-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L890-L892) · [Before (L937-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L937-L938)

```diff
-           getClassName() {
-             return "Texture"
+           get keysRotateLeft() {
+             const UU = this.inputs.attached.keyboard;
+             return UU ? UU.keysRotateLeft : []
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L940-L941` → after: `L894-L896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L894-L896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L894-L896) · [Before (L940-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L940-L941)

```diff
-           dispose() {
-             super.dispose(), this.onLoadObservable.clear(), this._delayedOnLoad = null, this._delayedOnError = null, this._buffer = null
+           set keysRotateLeft(UU) {
+             const XU = this.inputs.attached.keyboard;
+             XU && (XU.keysRotateLeft = UU)
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L943-L950` → after: `L898-L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L898-L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L898-L941) · [Before (L943-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L943-L950)

```diff
-           static Parse(rM, iM, OM) {
-             if (rM.customType) {
-               const MM = LM.d.Instantiate(rM.customType).Parse(rM, iM, OM);
-               return rM.samplingMode && MM.updateSamplingMode && MM._samplingMode && MM._samplingMode !== rM.samplingMode && MM.updateSamplingMode(rM.samplingMode), MM
-             }
-             if (rM.isCube && !rM.isRenderTarget) return MM._CubeTextureParser(rM, iM, OM);
-             const SM = void 0 !== rM.internalTextureUniqueId;
-             if (!rM.name && !rM.isRenderTarget && !SM) return null;
+           get keysRotateRight() {
+             const UU = this.inputs.attached.keyboard;
+             return UU ? UU.keysRotateRight : []
+           }
+           set keysRotateRight(UU) {
+             const XU = this.inputs.attached.keyboard;
+             XU && (XU.keysRotateRight = UU)
+           }
+           get keysRotateUp() {
+             const UU = this.inputs.attached.keyboard;
+             return UU ? UU.keysRotateUp : []
+           }
+           set keysRotateUp(UU) {
+             const XU = this.inputs.attached.keyboard;
+             XU && (XU.keysRotateUp = UU)
+           }
+ ... (28 more added lines; see GitHub link above)
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L952-L1028` → after: `L943-L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L943-L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L943-L959) · [Before (L952-L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L952-L1028)

```diff
-             if (SM) {
-               const MM = iM.ph().getLoadedTexturesCache();
-               for (const iM of MM)
-                 if (iM.uniqueId === rM.internalTextureUniqueId) {
-                   jM = iM;
-                   break
-                 }
-             }
-             const aM = MM => {
-               if (MM && MM._texture && (MM._texture._cachedWrapU = null, MM._texture._cachedWrapV = null, MM._texture._cachedWrapR = null), rM.samplingMode) {
-                 const iM = rM.samplingMode;
-                 MM && MM.samplingMode !== iM && MM.updateSamplingMode(iM)
-               }
-               if (MM && rM.animations)
-                 for (let iM = 0; iM < rM.animations.length; iM++) {
-                   const OM = rM.animations[iM],
- ... (61 more removed lines; see GitHub link above)
+             XU = this.parent ? QU.q.TransformCoordinates(this.position, this.parent.getWorldMatrix()) : this.position, XU.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition), this._oldPosition.addInPlace(this.ellipsoidOffset);
+             const zU = this.nS().collisionCoordinator;
+             this._collider || (this._collider = zU.createCollider()), this._collider._radius = this.ellipsoid, this._collider.collisionMask = this._collisionMask;
+             let cU = UU;
+             this.applyGravity && (cU = UU.add(this.nS().gravity)), zU.getNewPosition(this._oldPosition, cU, this._collider, 3, null, this._onCollisionPositionChange, this.uniqueId)
+           }
+           _checkInputs() {
+             this._localDirection || (this._localDirection = QU.q.Zero(), this._transformedDirection = QU.q.Zero()), this.inputs.checkInputs(), super._checkInputs()
+           }
+           set needMoveForGravity(UU) {
+             this._needMoveForGravity = UU
+           }
+           get needMoveForGravity() {
+             return this._needMoveForGravity
+           }
+           _decideIfNeedsToMove() {
+ ... (1 more added lines; see GitHub link above)
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1030-L1032` → after: `L961-L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L961-L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L961-L962) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1030-L1032)

```diff
-           static CreateFromBase64String(rM, iM, OM, SM, jM) {
-             let aM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : MM.TRILINEAR_SAMPLINGMODE;
-             return new MM("data:" + iM, OM, SM, jM, aM, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, rM, !1, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 5, void 0 … [truncated]
+           _updatePosition() {
+             this.checkCollisions && this.nS().collisionsEnabled ? this._collideWithWorld(this.cameraDirection) : super._updatePosition()
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1034-L1044` → after: `L964-L968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L964-L968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L964-L968) · [Before (L1034-L1044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1034-L1044)

```diff
-           static LoadFromDataString(rM, iM, OM) {
-             let SM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               jM = arguments.length > 4 ? arguments[4] : void 0,
-               aM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
-               PM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : MM.TRILINEAR_SAMPLINGMODE,
-               nM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               QM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
-               zM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 5,
-               LM = arguments.length > 10 ? arguments[10] : void 0,
-               mM = arguments.length > 11 ? arguments[11] : void 0;
-             return "data:" !== rM.substring(0, 5) && (rM = "data:" + rM), new MM(rM, OM, jM, aM, PM, nM, QM, iM, SM, zM, void 0, void 0, LM, mM)
+           dispose() {
+             this.inputs.clear(), super.dispose()
+           }
+           getClassName() {
+             return "FreeCamera"
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1048-L1097` → after: `L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L972) · [Before (L1048-L1097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1048-L1097)

```diff
-           rM = [(0, SM.L)()], iM = [(0, SM.L)()], hM = [(0, SM.L)()], EM = [(0, SM.L)()], UM = [(0, SM.L)()], GM = [(0, SM.L)()], CM = [(0, SM.L)()], eM = [(0, SM.L)()], bM = [(0, SM.L)()], wM = [(0, SM.L)()], tM = [(0, SM.L)()], gM = [(0, SM.L)()], uM = [(0, SM.L)()], (0, OM.i)( … [truncated]
-             kind: "getter",
-             name: "isBlocking",
-             static: !1,
-             private: !1,
-             access: {
-               has: MM => "isBlocking" in MM,
-               get: MM => MM.isBlocking
-             },
-             metadata: jM
-           }, null, pM), (0, OM.i)(null, null, rM, {
-             kind: "field",
-             name: "url",
-             static: !1,
-             private: !1,
-             access: {
- ... (34 more removed lines; see GitHub link above)
+           XU = [(0, yU.F)()], zU = [(0, yU.F)()], FU = [(0, yU.I)()], oU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1099` → after: `L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L974) · [Before (L1099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1099)

```diff
-             name: "uScale",
+             name: "ellipsoid",
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1103-L1104` → after: `L978-L979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L978-L979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L978-L979) · [Before (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1103-L1104)

```diff
-               has: MM => "uScale" in MM,
-               get: MM => MM.uScale,
+               has: UU => "ellipsoid" in UU,
+               get: UU => UU.ellipsoid,
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1106` → after: `L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L981) · [Before (L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1106)

```diff
-                 MM.uScale = rM
+                 UU.ellipsoid = XU
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1110` → after: `L985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L985) · [Before (L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1110)

```diff
-           }, fM, YM), (0, OM.i)(null, null, UM, {
+           }, YU, NU), (0, cU.j)(null, null, zU, {
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1112` → after: `L987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L987) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1112)

```diff
-             name: "vScale",
+             name: "ellipsoidOffset",
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1116-L1117` → after: `L991-L992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L991-L992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L991-L992) · [Before (L1116-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1116-L1117)

```diff
-               has: MM => "vScale" in MM,
-               get: MM => MM.vScale,
+               has: UU => "ellipsoidOffset" in UU,
+               get: UU => UU.ellipsoidOffset,
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1119` → after: `L994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L994) · [Before (L1119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1119)

```diff
-                 MM.vScale = rM
+                 UU.ellipsoidOffset = XU
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1123` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L998) · [Before (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1123)

```diff
-           }, NM, AM), (0, OM.i)(null, null, GM, {
+           }, IU, pU), (0, cU.j)(null, null, FU, {
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1125` → after: `L1000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L1000) · [Before (L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1125)

```diff
-             name: "uAng",
+             name: "checkCollisions",
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1129-L1130` → after: `L1004-L1005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1004-L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L1004-L1005) · [Before (L1129-L1130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1129-L1130)

```diff
-               has: MM => "uAng" in MM,
-               get: MM => MM.uAng,
+               has: UU => "checkCollisions" in UU,
+               get: UU => UU.checkCollisions,
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1132` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L1007) · [Before (L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1132)

```diff
-                 MM.uAng = rM
+                 UU.checkCollisions = XU
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1136` → after: `L1011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L1011) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1136)

```diff
-           }, xM, vM), (0, OM.i)(null, null, CM, {
+           }, aU, tU), (0, cU.j)(null, null, oU, {
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1138` → after: `L1013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L1013) · [Before (L1138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1138)

```diff
-             name: "vAng",
+             name: "applyGravity",
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1142-L1143` → after: `L1017-L1018`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1017-L1018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L1017-L1018) · [Before (L1142-L1143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1142-L1143)

```diff
-               has: MM => "vAng" in MM,
-               get: MM => MM.vAng,
+               has: UU => "applyGravity" in UU,
+               get: UU => UU.applyGravity,
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1145-L1210` → after: `L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L1020) · [Before (L1145-L1210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1145-L1210)

```diff
-                 MM.vAng = rM
-               }
-             },
-             metadata: jM
-           }, FM, BM), (0, OM.i)(null, null, eM, {
-             kind: "field",
-             name: "wAng",
-             static: !1,
-             private: !1,
-             access: {
-               has: MM => "wAng" in MM,
-               get: MM => MM.wAng,
-               set: (MM, rM) => {
-                 MM.wAng = rM
-               }
-             },
- ... (50 more removed lines; see GitHub link above)
+                 UU.applyGravity = XU
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1220-L1226` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L1030) · [Before (L1220-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1220-L1226)

```diff
-         })(), MM.SerializeBuffers = !0, MM.ForceSerializeBuffers = !1, MM.OnTextureLoadErrorObservable = new jM.d, MM._SerializeInternalTextureUniqueId = !1, MM._CubeTextureParser = (MM, rM, iM) => {
-           throw (0, QM.n)("CubeTexture")
-         }, MM._CreateMirror = (MM, rM, iM, OM) => {
-           throw (0, QM.n)("MirrorTexture")
-         }, MM._CreateRenderTargetTexture = (MM, rM, iM, OM, SM) => {
-           throw (0, QM.n)("RenderTargetTexture")
-         }, MM.NEAREST_SAMPLINGMODE = 1, MM.NEAREST_NEAREST_MIPLINEAR = 8, MM.BILINEAR_SAMPLINGMODE = 2, MM.LINEAR_LINEAR_MIPNEAREST = 11, MM.TRILINEAR_SAMPLINGMODE = 3, MM.LINEAR_LINEAR_MIPLINEAR = 3, MM.NEAREST_NEAREST_MIPNEAREST = 4, MM.NEAREST_LINEAR_MIPNEAREST = 5, MM.NEAREST … [truncated]
+         })(), UU
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/281.js` (Changed code · before: `L1229-L1290` → after: `L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0R1033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-cc53c2bb2cfe62bcd36603f2f56b720a58036f972166bbfdd8c00ae89f7ca0d0) · [After (L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/281.js#L1033) · [Before (L1229-L1290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/281.js#L1229-L1290)

```diff
- 
-     function GM() {
-       UM || (UM = !0, (0, nM.e)("BABYLON.Texture", EM), lM.b._TextureParser = EM.Parse)
-     }
-   },
-   41115: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => OM
-     });
-     class OM {
-       constructor(MM, rM) {
-         this.width = MM, this.height = rM
-       }
-       toString() {
-         return `{W: ${this.width}, H: ${this.height}}`
-       }
- ... (46 more removed lines; see GitHub link above)
+     eU || (eU = !0, (0, dU.h)("BABYLON.FreeCamera", LU))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/282.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/282.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70)

#### 1. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L4)

```diff
-   41354: (MM, rM, iM) => {
+   41346: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L6-L7)

```diff
-       c: () => aM,
-       e: () => PM
+       b: () => NU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L9` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L8) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L9)

```diff
-     var OM = iM(39711),
+     var cU = zU(41113),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L11-L24` → after: `L10-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L10-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L10-L43) · [Before (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L11-L24)

```diff
-       jM = iM(41323),
-       aM = {};
-     class PM {
-       constructor(MM) {
-         this.attachedToElement = !1, this.attached = {}, this.camera = MM, this.checkInputs = () => {}
-       }
-       add(MM) {
-         const rM = MM.getSimpleName();
-         this.attached[rM] ? OM.e.Warn("camera input of type " + rM + " already exists on camera") : (this.attached[rM] = MM, MM.camera = this.camera, MM.checkInputs && (this.checkInputs = this._addCheckInputs(MM.checkInputs.bind(MM))), this.attachedToElement && MM.attachControl(t … [truncated]
-       }
-       remove(MM) {
-         for (const rM in this.attached) {
-           const iM = this.attached[rM];
-           if (iM === MM) return iM.detachControl(), iM.camera = null, delete this.attached[rM], void this.rebuildInputCheck()
+       QU = zU(37819),
+       AU = zU(37923),
+       FU = zU(41314),
+       oU = zU(41228),
+       DU = zU(37863),
+       EU = zU(41293),
+       YU = zU(41134);
+     let NU = (() => {
+       var UU, XU;
+       let zU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU = FU.e,
+         dU = [],
+         LU = [],
+         eU = [],
+         CU = [],
+         wU = [],
+         qU = [],
+ ... (18 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L26-L30` → after: `L45-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L45-L46) · [Before (L26-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L26-L30)

```diff
-       }
-       removeByType(MM) {
-         for (const rM in this.attached) {
-           const iM = this.attached[rM];
-           iM.getClassName() === MM && (iM.detachControl(), iM.camera = null, delete this.attached[rM], this.rebuildInputCheck())
+         set range(UU) {
+           this._range = UU, this._inverseSquaredRange = 1 / (this.range * this.range)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L32-L36` → after: `L48-L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L48-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L48-L49) · [Before (L32-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L32-L36)

```diff
-       }
-       _addCheckInputs(MM) {
-         const rM = this.checkInputs;
-         return () => {
-           rM(), MM()
+         get intensityMode() {
+           return this._intensityMode
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L38-L46` → after: `L51-L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R51) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L51-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L51-L52) · [Before (L38-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L38-L46)

```diff
-       }
-       attachInput(MM) {
-         this.attachedToElement && MM.attachControl(this.noPreventDefault)
-       }
-       attachElement() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         if (!this.attachedToElement) {
-           MM = !jM.b.ForceAttachControlToAlwaysPreventDefault && MM, this.attachedToElement = !0, this.noPreventDefault = MM;
-           for (const rM in this.attached) this.attached[rM].attachControl(MM)
+         set intensityMode(UU) {
+           this._intensityMode = UU, this._computePhotometricScale()
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L48-L58` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L54-L55) · [Before (L48-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L48-L58)

```diff
-       }
-       detachElement() {
-         let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-         for (const rM in this.attached) this.attached[rM].detachControl(), MM && (this.attached[rM].camera = null);
-         this.attachedToElement = !1
-       }
-       rebuildInputCheck() {
-         this.checkInputs = () => {};
-         for (const MM in this.attached) {
-           const rM = this.attached[MM];
-           rM.checkInputs && (this.checkInputs = this._addCheckInputs(rM.checkInputs.bind(rM)))
+         get radius() {
+           return this._radius
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L60-L82` → after: `L57-L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L57-L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L57-L162) · [Before (L60-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L60-L82)

```diff
-       }
-       clear() {
-         this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
-       }
-       serialize(MM) {
-         const rM = {};
-         for (const iM in this.attached) {
-           const MM = this.attached[iM],
-             OM = SM.b.Serialize(MM);
-           rM[MM.getClassName()] = OM
-         }
-         MM.inputsmgr = rM
-       }
-       parse(MM) {
-         const rM = MM.inputsmgr;
-         if (rM) {
- ... (7 more removed lines; see GitHub link above)
+         set radius(UU) {
+           this._radius = UU, this._computePhotometricScale()
+         }
+         get renderPriority() {
+           return (0, cU.e)(this, XU, "f")
+         }
+         set renderPriority(UU) {
+           (0, cU.f)(this, XU, UU, "f")
+         }
+         get shadowEnabled() {
+           return this._shadowEnabled
+         }
+         set shadowEnabled(UU) {
+           this._shadowEnabled !== UU && (this._shadowEnabled = UU, this._markMeshesAsLightDirty())
+         }
+         get includedOnlyMeshes() {
+ ... (90 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L85-L90` → after: `L170-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L170-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L170-L211) · [Before (L85-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L85-L90)

```diff
-         } else
-           for (const iM in this.attached) {
-             const rM = aM[this.attached[iM].getClassName()];
-             if (rM) {
-               const OM = SM.b.Parse((() => new rM), MM, null);
-               this.remove(this.attached[iM]), this.add(OM)
+           for (const zU of this.nS().meshes) zU._removeLightSource(this, !0);
+           this._uniformBuffer.dispose(), this.nS().removeLight(this), super.dispose(UU, XU)
+         }
+         getTypeID() {
+           return 0
+         }
+         getScaledIntensity() {
+           return this._photometricScale * this.intensity
+         }
+         clone(XU) {
+           let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           const cU = UU.GetConstructorFromName(this.getTypeID(), XU, this.nS());
+           if (!cU) return null;
+           const yU = YU.b.Clone(cU, this);
+           return XU && (yU.name = XU), zU && (yU.parent = zU), yU.YC(this.isEnabled()), this.onClonedObservable.notifyObservers(yU), yU
+         }
+ ... (26 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L93-L94` → after: `L215-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L215-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L215-L476) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L93-L94)

```diff
-       }
-     }
+           return XU.autoAnimate && zU.beginAnimation(QU, XU.autoAnimateFrom, XU.autoAnimateTo, XU.autoAnimateLoop, XU.autoAnimateSpeed || 1), void 0 !== XU.isEnabled && QU.YC(XU.isEnabled), QU._onParsed(XU, zU, cU), QU
+         }
+         _onParsed(UU, XU) {}
+         _hookArrayForExcluded(UU) {
+           var XU = this;
+           const zU = UU.push;
+           UU.push = function() {
+             for (var cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
+             const AU = zU.apply(UU, yU);
+             if (XU._clusteredContainer) return AU;
+             for (const UU of yU) UU._resyncLightSource(XU);
+             return AU
+           };
+           const cU = UU.splice;
+           UU.splice = (XU, zU) => {
+             const yU = cU.call(UU, XU, zU ?? UU.length);
+ ... (246 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L96` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L478) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L96)

```diff
-   42241: (MM, rM, iM) => {
+   41314: (UU, XU, zU) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L98` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L480) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L98)

```diff
-       d: () => EM
+       e: () => YU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L100-L107` → after: `L482-L483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L482-L483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L482-L483) · [Before (L100-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L100-L107)

```diff
-     var OM = iM(41099),
-       SM = iM(41105),
-       jM = iM(41003),
-       aM = iM(38040),
-       PM = iM(41091),
-       nM = iM(41560),
-       QM = iM(38085),
-       zM = iM(38068),
+     var cU = zU(41113),
+       yU = zU(37819),
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L109-L115` → after: `L485-L493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L485-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L485-L493) · [Before (L109-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L109-L115)

```diff
-       mM = iM(40939),
-       HM = iM(39711),
-       hM = iM(41145),
-       JM = iM(38885),
-       dM = iM(41186);
-     var yM = iM(41005);
-     let lM = !1;
+       AU = zU(37846),
+       FU = zU(37841),
+       oU = zU(40989),
+       DU = zU(41134);
+     class EU {
+       constructor() {
+         this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new AU.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedO … [truncated]
+       }
+     }
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L117-L151` → after: `L495-L533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L495-L533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L495-L533) · [Before (L117-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L117-L151)

```diff
-         var MM;
-         let rM, iM, QM, EM, UM, GM, CM, eM, bM, wM = PM.c,
-           tM = [],
-           gM = [],
-           uM = [],
-           RM = [],
-           pM = [],
-           WM = [],
-           sM = [],
-           DM = [],
-           kM = [],
-           ZM = [],
-           oM = [],
-           fM = [],
-           YM = [],
-           NM = [],
- ... (19 more removed lines; see GitHub link above)
+       var UU;
+       let XU, zU, YU, NU, IU, pU = [],
+         aU = [],
+         tU = [],
+         gU = [],
+         kU = [],
+         GU = [],
+         BU = [],
+         ZU = [],
+         RU = [],
+         PU = [];
+       return UU = class {
+         static AddNodeConstructor(UU, XU) {
+           this._NodeConstructors[UU] = XU
+         }
+         static Construct(UU, XU, zU, cU) {
+ ... (23 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L153-L154` → after: `L535-L562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L535-L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L535-L562) · [Before (L153-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L153-L154)

```diff
-           get forcedExtension() {
-             return this._forcedExtension
+           this._parentNode = UU, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), XU || this._removeFromSceneRootNodes()), this … [truncated]
+         }
+         get parent() {
+           return this._parentNode
+         }
+         get inheritVisibility() {
+           return this._nodeDataStorage._inheritVisibility
+         }
+         set inheritVisibility(UU) {
+           this._nodeDataStorage._inheritVisibility = UU
+         }
+         get isVisible() {
+           return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
+         }
+         set isVisible(UU) {
+           this._nodeDataStorage._isVisible = UU
+ ... (12 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L156-L243` → after: `L564-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L564-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L564-L667) · [Before (L156-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L156-L243)

```diff
-           constructor(MM, rM) {
-             let iM, SM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               jM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               PM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-               QM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               LM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
-               EM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 5,
-               UM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
-               GM = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
-               CM = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
-               eM = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : .8,
-               bM = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 0,
-               wM = arguments.length > 13 ? arguments[13] : void 0,
-               xM = arguments.length > 14 ? arguments[14] : void 0;
-             super(rM), this._delayedOnLoad = (0, OM.m)(this, tM), this.onLoadObservable = new zM.d, this.url = (0, OM.m)(this, gM, void 0), this.boundingBoxPosition = ((0, OM.m)(this, uM), (0, OM.m)(this, RM, aM.q.Zero())), this._boundingBoxSize = (0, OM.m)(this, pM), this._rotat … [truncated]
-               let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
- ... (72 more removed lines; see GitHub link above)
+         }
+         get animationPropertiesOverride() {
+           return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
+         }
+         set animationPropertiesOverride(UU) {
+           this._animationPropertiesOverride = UU
+         }
+         getClassName() {
+           return "Node"
+         }
+         set onDispose(UU) {
+           this._onDisposeObserver && this.bS.remove(this._onDisposeObserver), this._onDisposeObserver = this.bS.add(UU)
+         }
+         get onEnabledStateChangedObservable() {
+           return this._nodeDataStorage._onEnabledStateChangedObservable
+         }
+ ... (88 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L245-L246` → after: `L669-L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L669-L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L669-L676) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L245-L246)

```diff
-           getClassName() {
-             return "CubeTexture"
+         }
+         YC(UU) {
+           if (this._nodeDataStorage._isEnabled === UU) return;
+           const XU = this._hasEffectiveEnabledStateObservers(),
+             zU = XU ? this.isEnabled() : null;
+           if (this._nodeDataStorage._isEnabled = UU, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(UU), XU) {
+             const UU = this.isEnabled();
+             UU !== zU && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(UU)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L248-L266` → after: `L678-L688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L678-L688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L678-L688) · [Before (L248-L266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L248-L266)

```diff
-           updateURL(MM) {
-             let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
-               iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
-               jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
-               aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
-               PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
-               nM = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null;
-             this.name && !this.name.startsWith("data:") || (this.name = MM), this.url = MM, rM && (this._forcedExtension = rM);
-             const QM = MM.lastIndexOf("."),
-               zM = rM || (QM > -1 ? MM.substring(QM).toLowerCase() : ""),
-               LM = 0 === zM.indexOf(".dds"),
-               mM = 0 === zM.indexOf(".env"),
-               HM = 0 === zM.indexOf(".basis");
-             if (mM ? (this.gammaSpace = !1, this._prefiltered = !1, this.anisotropicFilteringLevel = 1) : (this._prefiltered = OM, OM && (this.gammaSpace = !1, this.anisotropicFilteringLevel = 1)), PM) this._files = PM;
- ... (3 more removed lines; see GitHub link above)
+         }
+         isDescendantOf(UU) {
+           return !!this.parent && (this.parent === UU || this.parent.isDescendantOf(UU))
+         }
+         _getDescendants(UU) {
+           let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+             zU = arguments.length > 2 ? arguments[2] : void 0;
+           if (this._children)
+             for (let cU = 0; cU < this._children.length; cU++) {
+               const yU = this._children[cU];
+               zU && !zU(yU) || UU.push(yU), XU || yU._getDescendants(UU, !1, zU)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L268` → after: `L690-L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L690-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L690-L709) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L268)

```diff
-             this._buffer = nM, aM ? (this.delayLoadState = 4, this._delayedOnLoad = iM, this._delayedOnError = SM) : this._loadTexture(iM, SM)
+         }
+         getDescendants(UU, XU) {
+           const zU = [];
+           return this._getDescendants(zU, UU, XU), zU
+         }
+         getChildMeshes(UU, XU) {
+           const zU = [];
+           return this._getDescendants(zU, UU, (UU => (!XU || XU(UU)) && void 0 !== UU.cullingStrategy)), zU
+         }
+         getChildren(UU) {
+           let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           return this.getDescendants(XU, UU)
+         }
+         _setReady(UU) {
+           UU !== this._nodeDataStorage._isReady && (UU ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
+         }
+ ... (4 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L270-L271` → after: `L711-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L711-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L711-L716) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L270-L271)

```diff
-           delayLoad(MM) {
-             4 === this.delayLoadState && (MM && (this._forcedExtension = MM), this.delayLoadState = 1, this._loadTexture(this._delayedOnLoad, this._delayedOnError))
+           return null
+         }
+         createAnimationRange(XU, zU, cU) {
+           if (!this._ranges[XU]) {
+             this._ranges[XU] = UU._AnimationRangeFactory(XU, zU, cU);
+             for (let UU = 0, yU = this.animations.length; UU < yU; UU++) this.animations[UU] && this.animations[UU].createRange(XU, zU, cU)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L273-L274` → after: `L718-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R718) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L718-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L718-L734) · [Before (L273-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L273-L274)

```diff
-           getReflectionTextureMatrix() {
-             return this._textureMatrix
+         }
+         deleteAnimationRange(UU) {
+           let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
+           for (let zU = 0, cU = this.animations.length; zU < cU; zU++) this.animations[zU] && this.animations[zU].deleteRange(UU, XU);
+           this._ranges[UU] = null
+         }
+         getAnimationRange(UU) {
+           return this._ranges[UU] || null
+         }
+         clone(XU, zU, cU) {
+           const yU = DU.b.Clone((() => new UU(XU, this.nS())), this);
+           if (zU && (yU.parent = zU), !cU) {
+             const UU = this.getDescendants(!0);
+             for (let zU = 0; zU < UU.length; zU++) {
+               const cU = UU[zU];
+               cU.clone(XU + "." + cU.name, yU)
+ ... (1 more added lines; see GitHub link above)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L276-L282` → after: `L736-L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L736-L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L736-L754) · [Before (L276-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L276-L282)

```diff
-           setReflectionTextureMatrix(MM) {
-             if (MM.updateFlag === this._textureMatrix.updateFlag) return;
-             if (MM.isIdentity() !== this._textureMatrix.isIdentity() && this.Hk()?.markAllMaterialsAsDirty(1, (MM => -1 !== MM.getActiveTextures().indexOf(this))), this._textureMatrix = MM, !this.Hk()?.useRightHandedSystem) return;
-             const rM = aM.l.sh[0],
-               iM = aM.l.Quaternion[0],
-               OM = aM.l.sh[1];
-             this._textureMatrix.decompose(rM, iM, OM), iM.z *= -1, iM.w *= -1, aM.d.ComposeToRef(rM, iM, OM, this._textureMatrixRefraction)
+           return yU
+         }
+         getAnimationRanges() {
+           const UU = [];
+           let XU;
+           for (XU in this._ranges) UU.push(this._ranges[XU]);
+           return UU
+         }
+         beginAnimation(UU, XU, zU, cU) {
+           const yU = this.getAnimationRange(UU);
+           return yU ? this._scene.beginAnimation(this, yU.from, yU.to, XU, zU, cU) : null
+         }
+         serializeAnimationRanges() {
+           const UU = [];
+           for (const XU in this._ranges) {
+             const zU = this._ranges[XU];
+ ... (3 more added lines; see GitHub link above)
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L284-L285` → after: `L756-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L756-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L756-L765) · [Before (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L284-L285)

```diff
-           getRefractionTextureMatrix() {
-             return this.Hk()?.useRightHandedSystem ? this._textureMatrixRefraction : this._textureMatrix
+           return UU
+         }
+         computeWorldMatrix(UU) {
+           return this._worldMatrix || (this._worldMatrix = yU.e.Identity()), this._worldMatrix
+         }
+         dispose(UU) {
+           let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+           if (this._nodeDataStorage._isDisposed = !0, !UU) {
+             const zU = this.getDescendants(!0);
+             for (const cU of zU) cU.dispose(UU, XU)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L287-L302` → after: `L767-L797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L767-L797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L767-L797) · [Before (L287-L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L287-L302)

```diff
-           _loadTexture() {
-             let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-               rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
-             const iM = this.Hk(),
-               OM = this._texture;
-             this._texture = this._getFromCache(this.url, this._noMipmap, void 0, void 0, this._useSRGBBuffer, this.isCube);
-             const SM = () => {
-                 this.onLoadObservable.notifyObservers(this), OM && (OM.dispose(), this.Hk()?.markAllMaterialsAsDirty(1)), MM && MM()
-               },
-               aM = (MM, iM) => {
-                 this._loadingError = !0, this._errorObject = {
-                   message: MM,
-                   exception: iM
-                 }, rM && rM(MM, iM), nM.h.OnTextureLoadErrorObservable.notifyObservers(this)
-               };
-             this._texture ? this._texture.isReady ? jM.c.SetImmediate((() => SM())) : this._texture.onLoadedObservable.add((() => SM())) : (this._prefiltered ? this._texture = this._getEngine().createPrefilteredCubeTexture(this.url, iM, this._lodScale, this._lodOffset, MM, aM, th … [truncated]
+           this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.bS.notifyObservers(this), this.bS.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
+           for (const zU of this._behaviors) zU.detach();
+           this._behaviors.length = 0, this.metadata = null
+         }
+         static ParseAnimationRanges(UU, XU, zU) {
+           if (XU.Qt)
+             for (let cU = 0; cU < XU.Qt.length; cU++) {
+               const zU = XU.Qt[cU];
+               UU.createAnimationRange(zU.name, zU.from, zU.to)
+             }
+         }
+         getHierarchyBoundingVectors() {
+           let UU, XU, zU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
+             cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+           this.nS().incrementRenderId(), this.computeWorldMatrix(!0);
+           const QU = this;
+ ... (15 more added lines; see GitHub link above)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L304-L311` → after: `L799-L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L799-L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L799-L801) · [Before (L304-L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L304-L311)

```diff
-           clone() {
-             let rM = 0;
-             const iM = this.irradianceTexture,
-               OM = LM.b.Clone((() => {
-                 const iM = new MM(this.url, this.Hk() || this._getEngine(), this._extensions, this._noMipmap, this._files);
-                 return rM = iM.uniqueId, iM
-               }), this);
-             return OM.uniqueId = rM, iM && !this.irradianceTexture && (this.irradianceTexture = iM), OM
+           return {
+             min: UU,
+             max: XU
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/282.js` (Changed code · before: `L313-L620` → after: `L803-L880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70R803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-b4b6b74305a2f323d33e1f961c03572b44593da4a9399ecd47bd61d82fe0ae70) · [After (L803-L880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/282.js#L803-L880) · [Before (L313-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/282.js#L313-L620)

```diff
-         }, (() => {
-           const jM = "function" === typeof Symbol && Symbol.metadata ? Object.create(wM[Symbol.metadata] ?? null) : void 0;
-           rM = [(0, SM.L)()], iM = [(0, SM.J)()], QM = [(0, SM.J)()], EM = [(0, SM.L)("rotationY")], UM = [(0, SM.L)("files")], GM = [(0, SM.L)("forcedExtension")], CM = [(0, SM.L)("extensions")], eM = [(0, SM.u)("textureMatrix")], bM = [(0, SM.u)("textureMatrixRefraction")], (0, … [truncated]
-             kind: "getter",
-             name: "boundingBoxSize",
-             static: !1,
-             private: !1,
-             access: {
-               has: MM => "boundingBoxSize" in MM,
-               get: MM => MM.boundingBoxSize
-             },
-             metadata: jM
-           }, null, tM), (0, OM.i)(MM, null, EM, {
-             kind: "setter",
-             name: "rotationY",
-             static: !1,
- ... (292 more removed lines; see GitHub link above)
+         }
+       }, (() => {
+         const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
+         XU = [(0, QU.I)()], zU = [(0, QU.I)()], YU = [(0, QU.I)()], NU = [(0, QU.I)()], IU = [(0, QU.I)()], (0, cU.j)(null, null, XU, {
+           kind: "field",
+           name: "name",
+           static: !1,
+           private: !1,
+           access: {
+             has: UU => "name" in UU,
+             get: UU => UU.name,
+             set: (UU, XU) => {
+               UU.name = XU
+             }
+           },
+           metadata: yU
+ ... (62 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/283.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/283.js` (119 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-6d8690c15d62519149d5f880406f45f72e9bb4a88e611a34f81e4f52c77f0e7a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/283.js#L4)

```diff
-   41313: (MM, rM, iM) => {
+   42184: (UU, XU, zU) => {
```
