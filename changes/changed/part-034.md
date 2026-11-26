# Changed — Bundle Modifications Report (Part 034 / 099)

- **Updated at**: `2026-11-26T22:08 JST`
- **Part**: `34 / 99` (**316** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 033](part-033.md) · [Part 035 →](part-035.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/617.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/617.js` (37 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56)

#### 8. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L104-L160` → after: `L161-L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L161-L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L161-L216) · [Before (L104-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L104-L160)

```diff
-       }))
-     }
-     async function UM(MM, rM) {
-       let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : mM;
-       const OM = MM.ph();
-       MM.format = 5, MM.type = 0, MM.generateMipMaps = !0, MM._cachedAnisotropicFilteringLevel = null, OM.updateTextureSamplingMode(3, MM), await CM(MM, rM, !0, iM), MM.isReady = !0
-     }
-     async function GM(MM, rM, iM) {
-       let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mM,
-         SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
-       const jM = MM.ph(),
-         aM = new PM.c(jM, 5),
-         QM = new nM.c(jM, aM);
-       MM._irradianceTexture = QM, QM._dominantDirection = SM, aM.isCube = !0, aM.format = 5, aM.type = 0, aM.generateMipMaps = !0, aM._cachedAnisotropicFilteringLevel = null, aM.generateMipMaps = !0, aM.width = iM, aM.height = iM, jM.updateTextureSamplingMode(3, aM), await CM(aM, … [truncated]
-     }
-     async function CM(MM, rM, SM) {
- ... (41 more removed lines; see GitHub link above)
+         this._currentApplyByPostProcessSetting = this._scene.imageProcessingConfiguration.applyByPostProcess, this._disableImageProcessing && (this._scene.imageProcessingConfiguration._applyByPostProcess = this._disableImageProcessing)
+       }
+       initRender(UU, XU) {
+         const zU = this.activeCamera ?? this._scene.activeCamera;
+         this._currentSceneCamera = this._scene.activeCamera, this._useUBO && (this._currentSceneUBO = this._scene.getSceneUniformBuffer(), this._currentSceneUBO.unbindEffect(), this._scene.setSceneUniformBuffer(this._getSceneUBO())), this.onInitRenderingObservable.notifyObservers … [truncated]
+       }
+       finishRender() {
+         const UU = this._scene;
+         this._useUBO && this._scene.setSceneUniformBuffer(this._currentSceneUBO), this._disableImageProcessing && (UU.imageProcessingConfiguration._applyByPostProcess = this._currentApplyByPostProcessSetting), UU._activeCamera = this._currentSceneCamera, this._currentSceneCamera  … [truncated]
+       }
+       render() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const zU = this._engine.currentRenderPassId;
+         this._engine.currentRenderPassId = this._renderPassIds[UU], this.onBeforeRenderObservable.notifyObservers(UU);
+         if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this.onFastPathRenderObservable.notifyObservers(UU);
+ ... (40 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L164-L186` → after: `L231-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L231-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L231-L269) · [Before (L164-L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L164-L186)

```diff
-       const CM = [];
-       for (let iM = 0; iM < rM.length; iM++)
-         for (let OM = 0; OM < 6; OM++) {
-           const SM = rM[iM][OM],
-             jM = (0, LM.i)(SM),
-             PM = new Blob([jM], {
-               type: aM
-             }),
-             nM = URL.createObjectURL(PM);
-           let QM;
-           if (HM._features.forceBitmapOverHTMLImageElement) QM = HM.createImageBitmap(PM, {
-             premultiplyAlpha: "none",
-             colorSpaceConversion: "none"
-           }).then((async rM => await EM(rM, HM, hM, dM, nM, OM, iM, JM, lM, yM, MM)));
-           else {
-             const rM = new Image;
- ... (7 more removed lines; see GitHub link above)
+       _prepareRenderingManager() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
+           XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
+         const zU = this._scene;
+         let cU, yU, QU = null;
+         const AU = this.renderList ? this.renderList : zU.frameGraph ? zU.meshes : zU.getActiveMeshes().data,
+           FU = this.renderList || zU.frameGraph ? AU.length : zU.getActiveMeshes().length;
+         if (this.getCustomRenderList && (QU = this.getCustomRenderList(UU, AU, FU)), QU) cU = QU.length, yU = this.forceLayerMaskCheck;
+         else {
+           if (this._defaultRenderListPrepared && !XU && !this._engine.isWebGPU) return AU;
+           this._defaultRenderListPrepared = !0, QU = AU, cU = FU, yU = !this.renderList || this.forceLayerMaskCheck
+         }
+         const oU = zU.activeCamera,
+           DU = this.cameraForLOD ?? oU,
+           EU = zU.getBoundingBoxRenderer?.();
+         if (zU._activeMeshesFrozen && this._isFrozen) {
+ ... (23 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L188` → after: `L271-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L271-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L271-L287) · [Before (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L188)

```diff
-             }))
+               let QU, AU;
+               if (DU) {
+                 const UU = cU._internalAbstractMeshDataInfo._currentLOD.get(DU);
+                 UU && UU[1] === XU ? QU = UU[0] : (QU = zU.customLODSelector ? zU.customLODSelector(cU, DU) : cU.getLOD(DU), UU ? (UU[0] = QU, UU[1] = XU) : cU._internalAbstractMeshDataInfo._currentLOD.set(DU, [QU, XU]))
+               } else QU = cU;
+               if (!QU) continue;
+               if (QU !== cU && 0 !== QU.billboardMode && QU.computeWorldMatrix(), QU._preActivateForIntermediateRendering(UU), AU = !(!yU || !oU) && 0 === (cU.layerMask & oU.layerMask), cU.isEnabled() && cU.isVisible && cU.uB && !AU) {
+                 if (this._activeMeshes.push(cU), QU._internalAbstractMeshDataInfo._wasActiveLastFrame = !0, QU !== cU && QU._activate(UU, !0), this.enableBoundingBoxRendering && EU && EU._preActiveMesh(cU), cU._activate(UU, !0) && cU.uB.length) {
+                   cU.UH ? cU._internalAbstractMeshDataInfo._actAsRegularMesh && (QU = cU) : QU._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !1, QU._internalAbstractMeshDataInfo._isActiveIntermediate = !0, zU._prepareSkeleton(QU);
+                   for (let UU = 0; UU < QU.uB.length; UU++) {
+                     const XU = QU.uB[UU];
+                     this.enableBoundingBoxRendering && EU && EU._evaluateSubMesh(cU, XU), this._renderingManager.dispatch(XU, QU)
+                   }
+                 }
+                 cU._postActivate()
+               }
+ ... (1 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L192-L204` → after: `L290-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L290-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L290-L303) · [Before (L192-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L192-L204)

```diff
-       if (await Promise.all(CM), rM.length < zM) {
-         let iM;
-         const OM = Math.pow(2, zM - 1 - rM.length),
-           SM = OM * OM * 4;
-         switch (MM.type) {
-           case 0:
-             iM = new Uint8Array(SM);
-             break;
-           case 2:
-             iM = new Uint16Array(SM);
-             break;
-           case 1:
-             iM = new Float32Array(SM)
+         if (this.enableBoundingBoxRendering && EU && XU)
+           for (let YU = 0; YU < EU.renderList.length; YU++) {
+             const UU = EU.renderList.data[YU];
+             this._activeBoundingBoxes.push(UU)
+           }
+         if (this._scene.particlesEnabled && this.renderParticles) {
+           this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
+           const UU = this.particleSystemList || zU.nB;
+           for (let XU = 0; XU < UU.length; XU++) {
+             const zU = UU[XU],
+               cU = zU.emitter;
+             zU.isStarted() && cU && (!cU.position || cU.isEnabled()) && this._renderingManager.dispatchParticles(zU)
+           }
+           this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L206-L207` → after: `L305-L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L305-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L305-L337) · [Before (L206-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L206-L207)

```diff
-         for (let jM = rM.length; jM < zM; jM++)
-           for (let rM = 0; rM < 6; rM++) HM._uploadArrayBufferViewToTexture(yM?.texture || MM, iM, rM, jM)
+         return QU
+       }
+       get renderingManager() {
+         return this._renderingManager
+       }
+       setRenderingOrder(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
+           zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
+         this._renderingManager.setRenderingOrder(UU, XU, zU, cU)
+       }
+       setRenderingAutoClearDepthStencil(UU, XU) {
+         let zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
+           cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
+         this._renderingManager.setRenderingAutoClearDepthStencil(UU, XU, zU, cU), this._renderingManager._useSceneAutoClearSetup = !1
+       }
+ ... (17 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L209-L211` → after: `L339-L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L339-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L339-L340) · [Before (L209-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L209-L211)

```diff
-       if (yM) {
-         const rM = MM._irradianceTexture;
-         MM._irradianceTexture = null, HM._releaseTexture(MM), yM._swapAndDie(MM), MM._irradianceTexture = rM
+       freeRenderingGroups() {
+         this._renderingManager && this._renderingManager.freeRenderingGroups()
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L215-L220` → after: `L343-L742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L343-L742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L343-L742) · [Before (L215-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L215-L220)

```diff
- 
-     function eM(MM, rM) {
-       const iM = (rM = JM(rM)).irradiance;
-       if (!iM) return;
-       const OM = new aM.c;
-       SM.q.FromArrayToRef(iM.x, 0, OM.x), SM.q.FromArrayToRef(iM.y, 0, OM.y), SM.q.FromArrayToRef(iM.z, 0, OM.z), SM.q.FromArrayToRef(iM.xx, 0, OM.xx), SM.q.FromArrayToRef(iM.yy, 0, OM.yy), SM.q.FromArrayToRef(iM.zz, 0, OM.zz), SM.q.FromArrayToRef(iM.yz, 0, OM.yz), SM.q.FromArray … [truncated]
+     aU.REFRESHRATE_RENDER_ONCE = 0, aU.REFRESHRATE_RENDER_ONEVERYFRAME = 1, aU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
+     var tU = zU(40989);
+     class gU extends QU.e {
+       get renderListPredicate() {
+         return this._objectRenderer.renderListPredicate
+       }
+       set renderListPredicate(UU) {
+         this._objectRenderer.renderListPredicate = UU
+       }
+       get renderList() {
+         return this._objectRenderer.renderList
+       }
+       set renderList(UU) {
+         this._objectRenderer.renderList = UU
+       }
+       get particleSystemList() {
+ ... (384 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L222` → after: `L744-L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L744-L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L744-L760) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L222)

```diff
-     var bM = iM(44485);
+     gU.REFRESHRATE_RENDER_ONCE = aU.REFRESHRATE_RENDER_ONCE, gU.REFRESHRATE_RENDER_ONEVERYFRAME = aU.REFRESHRATE_RENDER_ONEVERYFRAME, gU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = aU.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
+     Object.getOwnPropertyDescriptor(gU.prototype, "noPrePassRenderer") || Object.defineProperty(gU.prototype, "noPrePassRenderer", (0, tU.i)("RenderTargetTexture", "noPrePassRenderer"))
+   },
+   44501: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => DU,
+       g: () => EU
+     });
+     var cU = zU(41237),
+       yU = zU(38845),
+       QU = zU(37846),
+       AU = zU(40954),
+       FU = zU(41395);
+     const oU = {
+       positions: [1, 1, -1, 1, -1, -1, 1, -1],
+       indices: [0, 1, 2, 0, 2, 3]
+ ... (1 more added lines; see GitHub link above)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L224-L239` → after: `L762-L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L762-L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L762-L772) · [Before (L224-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L224-L239)

```diff
-       constructor() {
-         this.supportCascades = !1
-       }
-       loadCubeData(MM, rM, iM, OM, SM) {
-         if (Array.isArray(MM)) return;
-         const jM = hM(MM);
-         if (jM) {
-           rM.width = jM.width, rM.height = jM.width;
-           try {
-             (0, bM.d)(), eM(rM, jM), lM(rM, MM, jM).then((() => {
-               rM.isReady = !0, rM.onLoadedObservable.notifyObservers(rM), rM.onLoadedObservable.clear(), OM && OM()
-             }), (MM => {
-               SM?.("Can not upload environment levels", MM)
-             }))
-           } catch (aM) {
-             SM?.("Can not upload environment file", aM)
+       constructor(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oU;
+         this._fullscreenViewport = new yU.d(0, 0, 1, 1);
+         const zU = XU.positions ?? oU.positions,
+           QU = XU.indices ?? oU.indices;
+         this.engine = UU, this._vertexBuffers = {
+           [cU.h.PositionKind]: new cU.h(UU, zU, cU.h.PositionKind, !1, !1, 2)
+         }, this._indexBuffer = UU.createIndexBuffer(QU), this._indexBufferLength = QU.length, this._onContextRestoredObserver = UU.wp.add((() => {
+           this._indexBuffer = UU.createIndexBuffer(QU);
+           for (const UU in this._vertexBuffers) {
+             this._vertexBuffers[UU]._rebuild()
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L241` → after: `L774-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L774-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L774-L786) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L241)

```diff
-         } else SM && SM("Can not parse the environment file", null)
+         }))
+       }
+       setViewport() {
+         let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._fullscreenViewport;
+         this.engine.setViewport(UU)
+       }
+       bindBuffers(UU) {
+         this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, UU)
+       }
+       applyEffectWrapper(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
+           zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
+         this.engine.setState(!0), this.engine.depthCullingState.depthTest = XU, this.engine.stencilState.stencilTest = zU, this.engine.enableEffect(UU.drawWrapper), this.bindBuffers(UU.effect), UU.onApplyObservable.notifyObservers({})
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L243-L244` → after: `L788-L809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L788-L809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L788-L809) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L243-L244)

```diff
-       loadData() {
-         throw ".env not supported in 2d."
+       saveStates() {
+         this._savedStateDepthTest = this.engine.depthCullingState.depthTest, this._savedStateStencilTest = this.engine.stencilState.stencilTest
+       }
+       restoreStates() {
+         this.engine.depthCullingState.depthTest = this._savedStateDepthTest, this.engine.stencilState.stencilTest = this._savedStateStencilTest
+       }
+       draw() {
+         this.engine.drawElementsType(0, 0, this._indexBufferLength)
+       }
+       _isRenderTargetTexture(UU) {
+         return void 0 !== UU.renderTarget
+       }
+       render(UU) {
+         let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
+         if (!UU.effect.isReady()) return;
+         this.saveStates(), this.setViewport();
+ ... (6 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L248-L250` → after: `L936-L944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R936) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L936-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L936-L944) · [Before (L248-L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L248-L250)

```diff
-   44485: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
+   44529: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       Dispose: () => kU,
+       DumpData: () => gU,
+       DumpDataAsync: () => tU,
+       DumpFramebuffer: () => aU,
+       DumpTools: () => GU,
+       EncodeImageAsync: () => pU,
+       RegisterDumpTools: () => ZU
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L252-L253` → after: `L946-L1076`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L946-L1076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L946-L1076) · [Before (L252-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L252-L253)

```diff
-     var OM = iM(44412),
-       SM = iM(41091);
+     var cU = zU(41113),
+       yU = zU(44501),
+       QU = zU(41205),
+       AU = zU(37855),
+       FU = zU(37841),
+       oU = zU(39493),
+       DU = zU(41171),
+       EU = zU(41121);
+     let YU = null;
+     async function NU() {
+       return YU || (YU = async function() {
+         const UU = FU.b.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
+         UU instanceof OffscreenCanvas && oU.b.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
+         const {
+           ThinEngine: XU
+         } = await Promise.resolve().then((() => zU(40948)));
+ ... (115 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L257-L274` → after: `L1080-L1082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1080-L1082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1080-L1082) · [Before (L257-L274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L257-L274)

```diff
-       jM || (jM = !0, SM.c.prototype._sphericalPolynomialTargetSize = 0, SM.c.prototype.forceSphericalPolynomialsRecompute = function() {
-         this._texture && (this._texture._sphericalPolynomial = null, this._texture._sphericalPolynomialPromise = null, this._texture._sphericalPolynomialComputed = !1)
-       }, Object.defineProperty(SM.c.prototype, "sphericalPolynomial", {
-         get: function() {
-           if (this._texture) {
-             if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) return this._texture._sphericalPolynomial;
-             if (this._texture.isReady) return this._texture._sphericalPolynomialPromise || (this._texture._sphericalPolynomialPromise = OM.e.ConvertCubeMapTextureToSphericalPolynomial(this), null === this._texture._sphericalPolynomialPromise ? this._texture._sphericalPolynomialCo … [truncated]
-               this._texture._sphericalPolynomial = MM, this._texture._sphericalPolynomialComputed = !0
-             }))), null
-           }
-           return null
-         },
-         set: function(MM) {
-           this._texture && (this._texture._sphericalPolynomial = MM)
-         },
-         enumerable: !0,
- ... (2 more removed lines; see GitHub link above)
+       if (BU) return;
+       BU = !0;
+       QU.j.DumpData = gU, QU.j.DumpDataAsync = tU, QU.j.DumpFramebuffer = aU
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L277` → after: `L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1085) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L277)

```diff
-   44412: (MM, rM, iM) => {
+   44509: (UU, XU, zU) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L279` → after: `L1087-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1087) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1087-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1087-L1089) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L279)

```diff
-       e: () => QM
+       c: () => IU,
+       f: () => pU,
+       h: () => aU
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L281-L288` → after: `L1091-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1091-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1091-L1100) · [Before (L281-L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L281-L288)

```diff
-     var OM = iM(38040),
-       SM = iM(38074),
-       jM = iM(41086),
-       aM = iM(38044),
-       PM = iM(38173);
-     class nM {
-       constructor(MM, rM, iM, OM) {
-         this.name = MM, this.worldAxisForNormal = rM, this.worldAxisForFileX = iM, this.worldAxisForFileY = OM
+     var cU = zU(41557),
+       yU = zU(44516),
+       QU = zU(41113),
+       AU = zU(44492),
+       FU = zU(41134),
+       oU = zU(44524),
+       DU = zU(41121);
+     class EU extends AU.c {
+       getClassName() {
+         return "PassPostProcess"
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L290-L334` → after: `L1102-L1117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1102-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1102-L1117) · [Before (L290-L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L290-L334)

```diff
-     }
-     class QM {
-       static _NearestPow2Floor(MM) {
-         return MM <= 1 ? 1 : 1 << Math.floor(Math.log2(MM))
-       }
-       static ConvertCubeMapTextureToSphericalPolynomial(MM) {
-         if (!MM.isCube) return null;
-         MM.Hk()?.ph().flushFramebuffer();
-         const rM = MM.getSize().width,
-           iM = MM._sphericalPolynomialTargetSize,
-           OM = iM > 0 ? this._NearestPow2Floor(iM) : 0,
-           SM = !MM.noMipmap && !0 === MM._texture?.generateMipMaps,
-           jM = OM > 0 && OM < rM && SM,
-           aM = jM ? Math.max(0, Math.round(Math.log2(rM / OM))) : 0,
-           PM = jM ? Math.max(1, Math.floor(rM / Math.pow(2, aM))) : rM,
-           nM = MM.readPixels(0, aM, void 0, !1),
- ... (29 more removed lines; see GitHub link above)
+       constructor(UU, XU) {
+         let zU = arguments.length > 4 ? arguments[4] : void 0;
+         const cU = {
+           size: "number" === typeof XU ? XU : void 0,
+           camera: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
+           samplingMode: arguments.length > 3 ? arguments[3] : void 0,
+           engine: zU,
+           reusable: arguments.length > 5 ? arguments[5] : void 0,
+           textureType: arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
+           blockCompilation: arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
+           ...XU
+         };
+         super(UU, oU.f.FragmentUrl, {
+           effectWrapper: "number" !== typeof XU && XU.effectWrapper ? void 0 : new oU.f(UU, zU, cU),
+           ...cU
+         })
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L336-L337` → after: `L1119-L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1119-L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1119-L1120) · [Before (L336-L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L336-L337)

```diff
-       static _AreaElement(MM, rM) {
-         return Math.atan2(MM * rM, Math.sqrt(MM * MM + rM * rM + 1))
+       static _Parse(UU, XU, zU, cU) {
+         return FU.b.Parse((() => new EU(UU.name, UU.options, XU, UU.renderTargetSamplingMode, UU._engine, UU.reusable)), UU, zU, cU)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L339-L356` → after: `L1122-L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1122-L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1122-L1329) · [Before (L339-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L339-L356)

```diff
-       static _DownsampleFace(MM, rM, iM, OM) {
-         const SM = MM instanceof Float32Array ? MM : Float32Array.from(MM),
-           jM = iM * iM * OM,
-           aM = new Float32Array(jM),
-           PM = rM / iM,
-           nM = 1 / (PM * PM);
-         for (let zM = 0; zM < iM; zM++) {
-           const MM = Math.floor(zM * PM),
-             jM = Math.floor((zM + 1) * PM);
-           for (let QM = 0; QM < iM; QM++) {
-             const LM = Math.floor(QM * PM),
-               mM = Math.floor((QM + 1) * PM),
-               HM = (zM * iM + QM) * OM;
-             for (let iM = 0; iM < OM; iM++) {
-               let PM = 0;
-               for (let aM = MM; aM < jM; aM++)
- ... (2 more removed lines; see GitHub link above)
+     }(() => {
+       var UU;
+       let XU, zU = AU.c,
+         cU = [];
+       UU = class extends zU {
+         get face() {
+           return this._effectWrapper.face
+         }
+         set face(UU) {
+           this._effectWrapper.face = UU
+         }
+         getClassName() {
+           return "PassCubePostProcess"
+         }
+         constructor(UU, XU) {
+           let zU = arguments.length > 4 ? arguments[4] : void 0;
+ ... (192 more added lines; see GitHub link above)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L359-L363` → after: `L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1335) · [Before (L359-L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L359-L363)

```diff
-         }
-         if (MM instanceof Float32Array) return aM;
-         const QM = new(0, MM.constructor)(jM);
-         for (let zM = 0; zM < jM; zM++) QM[zM] = aM[zM] + .5 | 0;
-         return QM
+         }(UU, tU, gU, FU, oU, EU)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L365-L377` → after: `L1337-L1344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1337-L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1337-L1344) · [Before (L365-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L365-L377)

```diff
-       static ConvertCubeMapToSphericalPolynomial(MM) {
-         let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
-         const iM = rM > 0 ? this._NearestPow2Floor(rM) : 0;
-         if (iM > 0 && MM.size > iM) {
-           const rM = 5 === MM.format ? 4 : 3,
-             OM = ["right", "left", "up", "down", "front", "back"],
-             SM = {};
-           for (const jM of OM) SM[jM] = this._DownsampleFace(MM[jM], MM.size, iM, rM);
-           MM = {
-             ...MM,
-             ...SM,
-             size: iM
-           }
+       let kU = await UU.readPixels(FU, oU);
+       if (!kU) throw new Error(`Failed to read pixels from texture ${UU.name}.`);
+       if (kU instanceof Float32Array) {
+         const UU = new Uint8Array(kU.length);
+         let XU = kU.length;
+         for (; XU--;) {
+           const zU = kU[XU];
+           UU[XU] = Math.round(255 * (0, YU.Clamp)(zU))
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L379-L409` → after: `L1346-L1358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1346-L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1346-L1358) · [Before (L379-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L379-L409)

```diff
-         const OM = new jM.b;
-         let nM = 0;
-         const QM = 2 / MM.size,
-           zM = QM,
-           LM = .5 * QM,
-           mM = LM - 1;
-         for (let jM = 0; jM < 6; jM++) {
-           const rM = this._FileFaces[jM],
-             iM = MM[rM.name];
-           let HM = mM;
-           const hM = 5 === MM.format ? 4 : 3;
-           for (let jM = 0; jM < MM.size; jM++) {
-             let JM = mM;
-             for (let zM = 0; zM < MM.size; zM++) {
-               const mM = rM.worldAxisForFileX.scale(JM).add(rM.worldAxisForFileY.scale(HM)).add(rM.worldAxisForNormal);
-               mM.normalize();
- ... (15 more removed lines; see GitHub link above)
+         kU = UU
+       }
+       const GU = tU * gU,
+         BU = 4 * GU;
+       if (kU.length !== BU) {
+         const UU = 0 === GU ? 0 : kU.length / GU;
+         if (1 === UU || 2 === UU || 3 === UU) {
+           const XU = new Uint8Array(BU);
+           for (let zU = 0, cU = 0, yU = 0; zU < GU; zU++, yU += 4) {
+             const zU = kU[cU++];
+             if (1 === UU) {
+               XU[yU] = zU, XU[yU + 1] = zU, XU[yU + 2] = zU, XU[yU + 3] = 255;
+               continue
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L411` → after: `L1360-L1361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1360-L1361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1360-L1361) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L411)

```diff
-             HM += zM
+             const QU = kU[cU++];
+             2 !== UU ? (XU[yU] = zU, XU[yU + 1] = QU, XU[yU + 2] = kU[cU++], XU[yU + 3] = 255) : (XU[yU] = zU, XU[yU + 1] = QU, XU[yU + 2] = 0, XU[yU + 3] = 255)
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L420` → after: `L1395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1395) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L420)

```diff
-   44452: (MM, rM, iM) => {
+   44492: (UU, XU, zU) => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L422` → after: `L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1397) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L422)

```diff
-       e: () => jM
+       c: () => pU
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L424-L453` → after: `L1399-L1468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1399-L1468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1399-L1468) · [Before (L424-L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L424-L453)

```diff
-     var OM = iM(44439),
-       SM = iM(44458);
-     class jM {
-       static ExpandRGBDTexture(MM) {
-         const rM = MM._texture;
-         if (!rM || !MM.isRGBD) return;
-         const SM = rM.ph(),
-           jM = SM.getCaps(),
-           aM = rM.isReady;
-         let PM = !1;
-         jM.textureHalfFloatRender && jM.textureHalfFloatLinearFiltering ? (PM = !0, rM.type = 2) : jM.textureFloatRender && jM.textureFloatLinearFiltering && (PM = !0, rM.type = 1), PM && (rM.isReady = !1, rM._isRGBD = !1, rM.invertY = !1);
-         const nM = async () => {
-           const jM = SM.isWebGPU,
-             aM = jM ? 1 : 0;
-           rM.isReady = !1, jM ? await iM.e(651).then((() => iM(64026))) : await iM.e(633).then((() => iM(64034)));
-           const PM = new OM.b("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, SM, !1, void 0, rM.type, void 0, null, !1, void 0, aM);
- ... (14 more removed lines; see GitHub link above)
+     var cU = zU(41113),
+       yU = zU(41210),
+       QU = zU(37846),
+       AU = zU(37819),
+       FU = zU(40954),
+       oU = zU(41121),
+       DU = zU(41134),
+       EU = zU(37863),
+       YU = zU(41003),
+       NU = zU(41036),
+       IU = zU(44501);
+     let pU = (() => {
+         var UU;
+         let XU, FU, YU, pU, aU, gU, kU, GU, BU, ZU, RU, PU, WU, dU, LU, eU, CU = [],
+           wU = [],
+           qU = [],
+ ... (54 more added lines; see GitHub link above)
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L455` → after: `L1470-L1974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1470-L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1470-L1974) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L455)

```diff
-           }))
+           }
+           get shaderLanguage() {
+             return this._shaderLanguage
+           }
+           getEffectName() {
+             return this._fragmentUrl
+           }
+           set onActivate(UU) {
+             this._onActivateObserver && this.onActivateObservable.remove(this._onActivateObserver), UU && (this._onActivateObserver = this.onActivateObservable.add(UU))
+           }
+           set onSizeChanged(UU) {
+             this._onSizeChangedObserver && this.onSizeChangedObservable.remove(this._onSizeChangedObserver), this._onSizeChangedObserver = this.onSizeChangedObservable.add(UU)
+           }
+           set onApply(UU) {
+             this._onApplyObserver && this.onApplyObservable.remove(this._onApplyObserver), this._onApplyObserver = this.onApplyObservable.add(UU)
+           }
+ ... (489 more added lines; see GitHub link above)
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L457` → after: `L1976-L1982`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1976-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1976-L1982) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L457)

```diff
-         PM && (aM ? nM() : MM.onLoadObservable.addOnce(nM))
+         zU.engine || (zU.engine = yU.b.LastCreatedEngine), super(zU)
+       }
+     }
+     QU.FragmentUrl = "pass";
+     class AU extends cU.g {
+       _gatherImports(UU, XU) {
+         UU ? (this._webGPUReady = !0, XU.push(Promise.all([zU.e(678).then((() => zU(64123)))]))) : XU.push(Promise.all([zU.e(679).then((() => zU(64128)))])), super._gatherImports(UU, XU)
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/617.js` (Changed code · before: `L459-L461` → after: `L1984-L2017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56R1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f49c19d2e9fbe846d33f73c218927124a4db2abce3fc9f5ec676e6816ce5fa56) · [After (L1984-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/617.js#L1984-L2017) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/617.js#L459-L461)

```diff
-       static async EncodeTextureToRGBD(MM, rM) {
-         let OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
-         return rM.ph().isWebGPU ? await iM.e(652).then((() => iM(64042))) : await iM.e(634).then((() => iM(64039))), await (0, SM.d)("rgbdEncode", MM, rM, OM, 1, 5)
+       constructor(UU) {
+         super({
+           ...arguments.length > 2 ? arguments[2] : void 0,
+           name: UU,
+           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || yU.b.LastCreatedEngine,
+           useShaderStore: !0,
+           useAsPostProcess: !0,
+           fragmentShader: AU.FragmentUrl,
+           defines: "#define POSITIVEX"
+         }), this._face = 0
+       }
+       get face() {
+         return this._face
+       }
+       set face(UU) {
+         if (!(UU < 0 || UU > 5)) switch (this._face = UU, this._face) {
+ ... (18 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/618.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/618.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67)

#### 1. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/618.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/618.js#L4)

```diff
-   44416: (MM, rM, iM) => {
+   44535: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/618.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/618.js#L6)

```diff
-       _IESTextureLoader: () => PM
+       _HDRTextureLoader: () => EU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L8-L17` → after: `L8-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L8-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/618.js#L8-L73) · [Before (L8-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/618.js#L8-L17)

```diff
-     var OM = iM(38074);
- 
-     function SM(MM) {
-       return MM.split(" ").filter((MM => "" !== MM)).map((MM => parseFloat(MM)))
-     }
- 
-     function jM(MM, rM, iM) {
-       for (; iM.length !== rM;) {
-         const rM = SM(MM.lines[MM.index++]);
-         iM.push(...rM)
+     var cU = zU(37819);
+     class yU {
+       static ConvertPanoramaToCubemap(UU, XU, zU, cU) {
+         let yU, QU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
+           AU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
+         if (!UU) throw "ConvertPanoramaToCubemap: input cannot be null";
+         if (UU.length != XU * zU * 3) {
+           if (UU.length != XU * zU * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
+           yU = 4
+         } else yU = 3;
+         return {
+           front: this.CreateCubemapTexture(cU, this.FACE_FRONT, UU, XU, zU, QU, AU, yU),
+           back: this.CreateCubemapTexture(cU, this.FACE_BACK, UU, XU, zU, QU, AU, yU),
+           left: this.CreateCubemapTexture(cU, this.FACE_LEFT, UU, XU, zU, QU, AU, yU),
+           right: this.CreateCubemapTexture(cU, this.FACE_RIGHT, UU, XU, zU, QU, AU, yU),
+           up: this.CreateCubemapTexture(cU, this.FACE_UP, UU, XU, zU, QU, AU, yU),
+ ... (50 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L21-L26` → after: `L77-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L77-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/618.js#L77-L93) · [Before (L21-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/618.js#L21-L26)

```diff
-     function aM(MM, rM, iM) {
-       let SM = 0,
-         jM = 0,
-         aM = 0,
-         PM = 0,
-         nM = 0,
+     function QU(UU, XU, zU, cU, yU, QU) {
+       yU > 0 ? (yU = function(UU, XU) {
+         return XU > 1023 ? UU * Math.pow(2, 1023) * Math.pow(2, XU - 1023) : XU < -1074 ? UU * Math.pow(2, -1074) * Math.pow(2, XU + 1074) : UU * Math.pow(2, XU)
+       }(1, yU - 136), UU[QU + 0] = XU * yU, UU[QU + 1] = zU * yU, UU[QU + 2] = cU * yU) : (UU[QU + 0] = 0, UU[QU + 1] = 0, UU[QU + 2] = 0)
+     }
+ 
+     function AU(UU, XU) {
+       let zU, cU = "";
+       for (let yU = XU; yU < UU.length - XU && (zU = String.fromCharCode(UU[yU]), "\n" != zU); yU++) cU += zU;
+       return cU
+     }
+ 
+     function FU(UU) {
+       let XU = AU(UU, 0);
+       if ("#" != XU[0] || "?" != XU[1]) throw "Bad HDR Format.";
+       let zU = !1,
+ ... (1 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L28-L44` → after: `L95-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L95-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/618.js#L95-L109) · [Before (L28-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/618.js#L28-L44)

```diff
-       for (let OM = 0; OM < MM.numberOfHorizontalAngles - 1; OM++)
-         if (iM < MM.horizontalAngles[OM + 1] || OM === MM.numberOfHorizontalAngles - 2) {
-           jM = OM, aM = MM.horizontalAngles[OM], PM = MM.horizontalAngles[OM + 1];
-           break
-         } for (let OM = 0; OM < MM.numberOfVerticalAngles - 1; OM++)
-         if (rM < MM.verticalAngles[OM + 1] || OM === MM.numberOfVerticalAngles - 2) {
-           SM = OM, nM = MM.verticalAngles[OM], QM = MM.verticalAngles[OM + 1];
-           break
-         } const zM = PM - aM,
-         LM = QM - nM;
-       if (0 === LM) return 0;
-       const mM = 0 === zM ? 0 : (iM - aM) / zM,
-         HM = (rM - nM) / LM,
-         hM = 0 === zM ? jM : jM + 1,
-         JM = (0, OM.Lerp)(MM.candelaValues[jM][SM], MM.candelaValues[hM][SM], mM),
-         dM = (0, OM.Lerp)(MM.candelaValues[jM][SM + 1], MM.candelaValues[hM][SM + 1], mM);
- ... (1 more removed lines; see GitHub link above)
+       do {
+         yU += XU.length + 1, XU = AU(UU, yU), "FORMAT=32-bit_rle_rgbe" == XU ? cU = !0 : 0 == XU.length && (zU = !0)
+       } while (!zU);
+       if (!cU) throw "HDR Bad header format, unsupported FORMAT";
+       yU += XU.length + 1, XU = AU(UU, yU);
+       const QU = /^-Y (.*) \+X (.*)$/g.exec(XU);
+       if (!QU || QU.length < 3) throw "HDR Bad header format, no size";
+       const FU = parseInt(QU[2]),
+         oU = parseInt(QU[1]);
+       if (FU < 8 || FU > 32767) throw "HDR Bad header format, unsupported size";
+       return yU += XU.length + 1, {
+         height: oU,
+         width: FU,
+         dataPosition: yU
+       }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L51` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/618.js#L158) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/618.js#L51)

```diff
-         throw ".ies not supported in Cube."
+         throw ".hdr not supported in Cube."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/618.js` (Changed code · before: `L54-L98` → after: `L161-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-33786f7b44f3671d70c06b95dcf2c42a482e31068e1547734c9bbea23ca3fc67) · [After (L161-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/618.js#L161-L169) · [Before (L54-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/618.js#L54-L98)

```diff
-         const OM = function(MM) {
-           const rM = {
-               lines: new TextDecoder("utf-8").decode(MM).split("\n"),
-               index: 0
-             },
-             iM = {
-               version: rM.lines[0],
-               candelaValues: [],
-               horizontalAngles: [],
-               verticalAngles: [],
-               numberOfHorizontalAngles: 0,
-               numberOfVerticalAngles: 0
-             };
-           for (rM.index = 1; rM.lines.length > 0 && !rM.lines[rM.index].includes("TILT=");) rM.index++;
-           rM.lines[rM.index].includes("INCLUDE"), rM.index++;
-           const OM = SM(rM.lines[rM.index++]);
- ... (29 more removed lines; see GitHub link above)
+         const cU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength),
+           yU = FU(cU),
+           QU = oU(cU, yU),
+           AU = yU.width * yU.height,
+           DU = new Float32Array(4 * AU);
+         for (let FU = 0; FU < AU; FU += 1) DU[4 * FU] = QU[3 * FU], DU[4 * FU + 1] = QU[3 * FU + 1], DU[4 * FU + 2] = QU[3 * FU + 2], DU[4 * FU + 3] = 1;
+         zU(yU.width, yU.height, XU.generateMipMaps, !1, (() => {
+           const UU = XU.qp();
+           XU.type = 1, XU.format = 5, XU._gammaSpace = !1, UU._uploadDataToTextureDirectly(XU, DU)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/619.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/619.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L4)

```diff
-   44426: (MM, rM, iM) => {
+   44539: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L6)

```diff
-       _BasisTextureLoader: () => lM
+       _KTXTextureLoader: () => pU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L8-L11` → after: `L8-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L8-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L8-L51) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L8-L11)

```diff
-     var OM, SM = iM(41205),
-       jM = iM(39711),
-       aM = iM(41560),
-       PM = iM(40939);
+     var cU = zU(39493);
+     class yU {
+       constructor(UU, XU) {
+         if (this.data = UU, this.isInvalid = !1, !yU.IsValid(UU)) return this.isInvalid = !0, void cU.b.Error("texture missing KTX identifier");
+         const zU = Uint32Array.BYTES_PER_ELEMENT,
+           QU = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * zU),
+           AU = 67305985 === QU.getUint32(0, !0);
+         return this.glType = QU.getUint32(1 * zU, AU), this.glTypeSize = QU.getUint32(2 * zU, AU), this.glFormat = QU.getUint32(3 * zU, AU), this.glInternalFormat = QU.getUint32(4 * zU, AU), this.glBaseInternalFormat = QU.getUint32(5 * zU, AU), this.pixelWidth = QU.getUint32(6 *  … [truncated]
+       }
+       uploadLevels(UU, XU) {
+         switch (this.loadType) {
+           case yU.COMPRESSED_2D:
+             this._upload2DCompressedLevels(UU, XU);
+           case yU.TEX_2D:
+           case yU.COMPRESSED_3D:
+           case yU.TEX_3D:
+ ... (28 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L13-L23` → after: `L53-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L53-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L53-L56) · [Before (L13-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L13-L23)

```diff
-     function nM() {
-       const MM = 0,
-         rM = 1,
-         iM = 2,
-         OM = 3,
-         SM = 6,
-         jM = 8,
-         aM = 9,
-         PM = 10,
-         nM = 14;
-       let QM = null;
+     function EU(UU, XU) {
+       const zU = XU?.jsDecoderModule || KTX2DECODER;
+       UU && (UU.wasmBaseUrl && (zU.Transcoder.WasmBaseUrl = UU.wasmBaseUrl), UU.wasmUASTCToASTC && (zU.LiteTranscoder_UASTC_ASTC.WasmModuleURL = UU.wasmUASTCToASTC), UU.wasmUASTCToBC7 && (zU.LiteTranscoder_UASTC_BC7.WasmModuleURL = UU.wasmUASTCToBC7), UU.wasmUASTCToRGBA_UNORM &&  … [truncated]
+     }
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L25-L43` → after: `L58-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L58-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L58-L80) · [Before (L25-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L25-L43)

```diff
-       function zM(MM, rM, iM, OM, SM) {
-         const jM = MM.getImageTranscodedSizeInBytes(rM, iM, OM);
-         let aM = new Uint8Array(jM);
-         if (!MM.transcodeImage(aM, rM, iM, OM, 1, 0)) return null;
-         if (SM) {
-           aM = function(MM, rM, iM, OM) {
-             const SM = new Uint16Array(4),
-               jM = new Uint16Array(iM * OM),
-               aM = iM / 4,
-               PM = OM / 4;
-             for (let nM = 0; nM < PM; nM++)
-               for (let OM = 0; OM < aM; OM++) {
-                 const PM = rM + 8 * (nM * aM + OM);
-                 SM[0] = MM[PM] | MM[PM + 1] << 8, SM[1] = MM[PM + 2] | MM[PM + 3] << 8, SM[2] = (2 * (31 & SM[0]) + 1 * (31 & SM[1])) / 3 | (2 * (2016 & SM[0]) + 1 * (2016 & SM[1])) / 3 & 2016 | (2 * (63488 & SM[0]) + 1 * (63488 & SM[1])) / 3 & 63488, SM[3] = (2 * (31 & SM[1]) +  … [truncated]
-                 for (let rM = 0; rM < 4; rM++) {
-                   const aM = MM[PM + 4 + rM];
- ... (3 more removed lines; see GitHub link above)
+     function YU(UU) {
+       let XU;
+       "undefined" === typeof UU && "undefined" !== typeof KTX2DECODER && (UU = KTX2DECODER), onmessage = zU => {
+         if (zU.data) switch (zU.data.action) {
+           case "init": {
+             const cU = zU.data.urls;
+             cU && (cU.jsDecoderModule && "undefined" === typeof UU && (importScripts(cU.jsDecoderModule), UU = KTX2DECODER), EU(cU)), zU.data.wasmBinaries && EU(void 0, {
+               ...zU.data.wasmBinaries,
+               jsDecoderModule: UU
+             }), XU = new UU.KTX2Decoder, postMessage({
+               action: "init"
+             });
+             break
+           }
+           case "setDefaultDecoderOptions":
+             UU.KTX2Decoder.DefaultDecoderOptions = zU.data.options;
+ ... (7 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L45-L65` → after: `L82-L194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L82-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L82-L194) · [Before (L45-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L45-L65)

```diff
-             return jM
-           }(aM, 0, MM.getImageWidth(rM, iM) + 3 & -4, MM.getImageHeight(rM, iM) + 3 & -4)
-         }
-         return aM
-       }
-       onmessage = LM => {
-         if ("init" === LM.data.action) {
-           if (LM.data.url) try {
-             importScripts(LM.data.url)
-           } catch (mM) {
-             postMessage({
-               action: "error",
-               error: mM
-             })
-           }
-           QM || (QM = BASIS({
- ... (5 more removed lines; see GitHub link above)
+               postMessage({
+                 action: "decoded",
+                 success: !0,
+                 decodedData: UU
+               }, XU)
+             })).catch((UU => {
+               postMessage({
+                 action: "decoded",
+                 success: !1,
+                 TE: UU
+               })
+             }))
+         }
+       }
+     }! function(UU) {
+       UU[UU.ETC1S = 0] = "ETC1S", UU[UU.UASTC4x4 = 1] = "UASTC4x4", UU[UU.RGBA32 = 2] = "RGBA32"
+ ... (97 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L67-L117` → after: `L196-L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L196-L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L196-L356) · [Before (L67-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L67-L117)

```diff
-         } else if ("transcode" === LM.data.action) {
-           const QM = LM.data.config,
-             mM = LM.data.imageData,
-             HM = new BASIS.BasisFile(mM),
-             hM = function(MM) {
-               const rM = MM.getHasAlpha(),
-                 iM = MM.getNumImages(),
-                 OM = [];
-               for (let SM = 0; SM < iM; SM++) {
-                 const rM = {
-                     levels: []
-                   },
-                   iM = MM.getNumLevels(SM);
-                 for (let OM = 0; OM < iM; OM++) {
-                   const iM = {
-                     width: MM.getImageWidth(SM, OM),
- ... (35 more removed lines; see GitHub link above)
+         }
+         if (NU._DecoderModulePromise) {
+           const cU = await NU._DecoderModulePromise;
+           return NU.DefaultDecoderOptions.isDirty && (NU._KTX2DecoderModule.KTX2Decoder.DefaultDecoderOptions = NU.DefaultDecoderOptions._getKTX2DecoderOptions()), await new Promise(((yU, QU) => {
+             cU.decode(UU, zU, XU).then((UU => {
+               yU(UU)
+             })).catch((UU => {
+               QU({
+                 message: UU
+               })
+             }))
+           }))
+         }
+         throw new Error("KTX2 decoder module is not available")
+       }
+       _createTexture(UU, XU, zU) {
+ ... (145 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L120-L237` → after: `L359-L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L359-L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L359-L360) · [Before (L120-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L120-L237)

```diff
-           HM.close(), HM.delete(), dM && (JM = -1), yM ? postMessage({
-             action: "transcode",
-             success: yM,
-             id: LM.data.id,
-             fileInfo: hM,
-             format: JM
-           }, lM) : postMessage({
-             action: "transcode",
-             success: yM,
-             id: LM.data.id
-           })
-         }
-       }
-     }! function(MM) {
-       MM[MM.cTFETC1 = 0] = "cTFETC1", MM[MM.cTFETC2 = 1] = "cTFETC2", MM[MM.cTFBC1 = 2] = "cTFBC1", MM[MM.cTFBC3 = 3] = "cTFBC3", MM[MM.cTFBC4 = 4] = "cTFBC4", MM[MM.cTFBC5 = 5] = "cTFBC5", MM[MM.cTFBC7 = 6] = "cTFBC7", MM[MM.cTFPVRTC1_4_RGB = 8] = "cTFPVRTC1_4_RGB", MM[MM.cTFPVR … [truncated]
-     }(OM || (OM = {}));
- ... (102 more removed lines; see GitHub link above)
+         }), this._ktx2DecoderOptions = UU, UU
+       }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L243` → after: `L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L366) · [Before (L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L243)

```diff
-       loadCubeData(MM, rM, iM, OM, jM) {
+       loadCubeData(UU, XU, zU, cU) {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L245-L260` → after: `L368-L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L368-L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L368-L424) · [Before (L245-L260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L245-L260)

```diff
-         const aM = rM.ph().getCaps(),
-           PM = {
-             supportedCompressionFormats: {
-               etc1: !!aM.etc1,
-               s3tc: !!aM.s3tc,
-               pvrtc: !!aM.pvrtc,
-               etc2: !!aM.etc2,
-               astc: !!aM.astc,
-               bc7: !!aM.bptc
-             }
-           };
-         hM(MM, PM).then((MM => {
-           const iM = MM.fileInfo.images[0].levels.length > 1 && rM.generateMipMaps;
-           dM(rM, MM), rM.ph()._setCubeMapTextureParams(rM, iM), rM.isReady = !0, rM.onLoadedObservable.notifyObservers(rM), rM.onLoadedObservable.clear(), OM && OM()
-         })).catch((MM => {
-           SM.e.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"), rM.isReady = !0, jM && jM(MM)
+         XU._invertVScale = !XU.invertY;
+         const QU = XU.qp(),
+           AU = new yU(UU, 6),
+           FU = IU(AU.glInternalFormat);
+         null !== FU ? (XU.format = FU, XU._useSRGBBuffer = QU._getUseSRGBBuffer(!0, !XU.generateMipMaps), XU._gammaSpace = !0) : XU.format = AU.glInternalFormat;
+         const oU = AU.numberOfMipmapLevels > 1 && XU.generateMipMaps;
+         QU._unpackFlipY(!0), AU.uploadLevels(XU, XU.generateMipMaps), XU.width = AU.pixelWidth, XU.height = AU.pixelHeight, QU._setCubeMapTextureParams(XU, oU, AU.numberOfMipmapLevels - 1), XU.isReady = !0, XU.onLoadedObservable.notifyObservers(XU), XU.onLoadedObservable.clear(), … [truncated]
+       }
+       loadData(UU, XU, zU, QU) {
+         if (yU.IsValid(UU)) {
+           XU._invertVScale = !XU.invertY;
+           const cU = new yU(UU, 1),
+             QU = IU(cU.glInternalFormat);
+           null !== QU ? (XU.format = QU, XU._useSRGBBuffer = XU.qp()._getUseSRGBBuffer(!0, !XU.generateMipMaps), XU._gammaSpace = !0) : XU.format = cU.glInternalFormat, zU(cU.pixelWidth, cU.pixelHeight, XU.generateMipMaps, !0, (() => {
+             cU.uploadLevels(XU, XU.generateMipMaps)
+           }), cU.isInvalid)
+ ... (41 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/619.js` (Changed code · before: `L263-L279` → after: `L427-L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89cR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-794d5c79c7fd89bdcc10e7d2f82f259681c411acd803b7b3d9573fadda58b89c) · [After (L427-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/619.js#L427-L451) · [Before (L263-L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/619.js#L263-L279)

```diff
-       loadData(MM, rM, iM) {
-         const OM = rM.ph().getCaps(),
-           jM = {
-             supportedCompressionFormats: {
-               etc1: !!OM.etc1,
-               s3tc: !!OM.s3tc,
-               pvrtc: !!OM.pvrtc,
-               etc2: !!OM.etc2,
-               astc: !!OM.astc,
-               bc7: !!OM.bptc
-             }
-           };
-         hM(MM, jM).then((MM => {
-           const OM = MM.fileInfo.images[0].levels[0],
-             SM = MM.fileInfo.images[0].levels.length > 1 && rM.generateMipMaps;
-           iM(OM.width, OM.height, SM, -1 !== MM.format, (() => {
- ... (1 more removed lines; see GitHub link above)
+     }
+     class yU extends cU {
+       constructor(UU, XU) {
+         let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yU.DefaultOptions;
+         super([]), this._maxWorkers = UU, this._createWorkerAsync = XU, this._options = zU
+       }
+       push(UU) {
+         if (!this._executeOnIdleWorker(UU))
+           if (this._workerInfos.length < this._maxWorkers) {
+             const XU = {
+               workerPromise: this._createWorkerAsync(),
+               idle: !1
+             };
+             this._workerInfos.push(XU), this._execute(XU, UU)
+           } else this._pendingActions.push(UU)
+       }
+ ... (9 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/620.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/620.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac)

#### 1. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L4-L936` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L4) · [Before (L4-L936)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L4-L936)

```diff
-   44465: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => yM
-     });
-     var OM = iM(38068),
-       SM = iM(38040),
-       jM = iM(41560),
-       aM = iM(41258),
-       PM = iM(41034),
-       nM = iM(39711),
-       QM = iM(41240),
-       zM = iM(41269),
-       LM = iM(38048),
-       mM = iM(41003),
-       HM = iM(41213),
-       hM = iM(41309);
- ... (917 more removed lines; see GitHub link above)
+   44550: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L938-L944` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L6) · [Before (L938-L944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L938-L944)

```diff
-       Dispose: () => lM,
-       DumpData: () => yM,
-       DumpDataAsync: () => dM,
-       DumpFramebuffer: () => JM,
-       DumpTools: () => EM,
-       EncodeImageAsync: () => hM,
-       RegisterDumpTools: () => GM
+       _TGATextureLoader: () => FU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L946-L1057` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L8) · [Before (L946-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L946-L1057)

```diff
-     var OM = iM(41099),
-       SM = iM(44445),
-       jM = iM(41205),
-       aM = iM(38074),
-       PM = iM(38064),
-       nM = iM(39711),
-       QM = iM(41160),
-       zM = iM(41105);
-     let LM = null;
-     async function mM() {
-       return LM || (LM = async function() {
-         const MM = PM.c.LastCreatedEngine?.createCanvas(100, 100) ?? new OffscreenCanvas(100, 100);
-         MM instanceof OffscreenCanvas && nM.e.Warn("DumpData: OffscreenCanvas will be used for dumping data. This may result in lossy alpha values.");
-         const {
-           ThinEngine: rM
-         } = await Promise.resolve().then((() => iM(40949)));
- ... (96 more removed lines; see GitHub link above)
+     var cU = zU(39493);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1059-L1100` → after: `L10-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L10-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L10-L23) · [Before (L1059-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L1059-L1100)

```diff
-     function yM(MM, rM, iM, OM) {
-       let SM = arguments.length > 5 ? arguments[5] : void 0;
-       void 0 !== SM || OM || (SM = ""), dM(MM, rM, iM, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "image/png", SM, arguments.length > 6 && void 0 !== arguments[6] && arguments[6], arguments.length > 7 && void 0 !== arguments[7] && arguments[7], arguments.len … [truncated]
-         OM && OM(MM)
-       }))
-     }
- 
-     function lM() {
-       LM && (LM?.then((MM => {
-         MM.canvas instanceof HTMLCanvasElement && MM.canvas.remove(), MM.dumpEngine && (MM.dumpEngine.engine.dispose(), MM.dumpEngine.renderer.dispose(), MM.dumpEngine.wrapper.dispose())
-       })), LM = null)
-     }
-     const EM = {
-       DumpData: yM,
-       DumpDataAsync: dM,
-       DumpFramebuffer: JM,
- ... (26 more removed lines; see GitHub link above)
+     function yU(UU) {
+       let XU = 0;
+       return {
+         id_length: UU[XU++],
+         colormap_type: UU[XU++],
+         image_type: UU[XU++],
+         colormap_index: UU[XU++] | UU[XU++] << 8,
+         colormap_length: UU[XU++] | UU[XU++] << 8,
+         colormap_size: UU[XU++],
+         origin: [UU[XU++] | UU[XU++] << 8, UU[XU++] | UU[XU++] << 8],
+         width: UU[XU++] | UU[XU++] << 8,
+         height: UU[XU++] | UU[XU++] << 8,
+         pixel_size: UU[XU++],
+         flags: UU[17]
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1204-L1366` → after: `L26-L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L26-L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L26-L85) · [Before (L1204-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L1204-L1366)

```diff
-     async function hM(MM, rM, jM) {
-       let PM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
-         nM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
-         QM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
-         zM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
-       await async function(MM) {
-         if (MM.isReady()) return;
-         if (MM.loadingError) throw new Error(MM.errorObject?.message || `Texture ${MM.name} errored while loading.`);
-         const rM = MM.onLoadObservable;
-         if (rM) return await new Promise((MM => rM.addOnce((() => MM()))));
-         const iM = MM._texture?.onLoadedObservable;
-         if (iM) return await new Promise((MM => iM.addOnce((() => MM()))));
-         throw new Error(`Cannot determine readiness of texture ${MM.name}.`)
-       }(MM);
-       const mM = MM.getInternalTexture(),
-         HM = MM.is3D || !!mM?.is3D,
- ... (147 more removed lines; see GitHub link above)
+ 
+     function QU(UU, XU) {
+       if (XU.length < 19) return void cU.b.Error("Unable to load TGA file - Not enough data to contain header");
+       let zU = 18;
+       const QU = yU(XU);
+       if (QU.id_length + zU > XU.length) return void cU.b.Error("Unable to load TGA file - Not enough data");
+       zU += QU.id_length;
+       let FU, oU = !1,
+         DU = !1,
+         EU = !1;
+       switch (QU.image_type) {
+         case 9:
+           oU = !0;
+         case 1:
+           DU = !0;
+           break;
+ ... (44 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1369-L1387` → after: `L88-L99`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L88-L99)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L88-L99) · [Before (L1369-L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L1369-L1387)

```diff
-       CreateResizedCopy: function(MM, rM, iM) {
-         let jM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
-         const aM = MM.Hk(),
-           PM = aM.ph(),
-           nM = new SM.c("resized" + MM.name, {
-             width: rM,
-             height: iM
-           }, aM, !MM.noMipmap, !0, MM._texture.type, !1, MM.samplingMode, !1);
-         nM.wrapU = MM.wrapU, nM.wrapV = MM.wrapV, nM.uOffset = MM.uOffset, nM.vOffset = MM.vOffset, nM.uScale = MM.uScale, nM.vScale = MM.vScale, nM.uAng = MM.uAng, nM.vAng = MM.vAng, nM.wAng = MM.wAng, nM.coordinatesIndex = MM.coordinatesIndex, nM.level = MM.level, nM.anisotropi … [truncated]
-         const QM = new zM("pass", 1, null, jM ? OM.h.BILINEAR_SAMPLINGMODE : OM.h.NEAREST_SAMPLINGMODE, PM, !1, 0);
-         return QM.externalTextureSamplerBinding = !0, QM.onEffectCreatedObservable.addOnce((rM => {
-           rM.executeWhenCompiled((() => {
-             QM.onApply = function(rM) {
-               rM.setTexture("textureSampler", MM)
-             };
-             const rM = nM.renderTarget;
- ... (3 more removed lines; see GitHub link above)
+       GetTGAHeader: yU,
+       UploadContent: QU,
+       _getImageData8bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
+         const DU = zU,
+           EU = XU,
+           YU = UU.width,
+           NU = UU.height;
+         let IU, pU, aU, tU = 0;
+         const gU = new Uint8Array(YU * NU * 4);
+         for (aU = cU; aU !== QU; aU += yU)
+           for (pU = AU; pU !== oU; pU += FU, tU++) IU = DU[tU], gU[4 * (pU + YU * aU) + 3] = 255, gU[4 * (pU + YU * aU) + 2] = EU[3 * IU + 0], gU[4 * (pU + YU * aU) + 1] = EU[3 * IU + 1], gU[4 * (pU + YU * aU) + 0] = EU[3 * IU + 2];
+         return gU
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1389-L1607` → after: `L101-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L101-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L101-L113) · [Before (L1389-L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L1389-L1607)

```diff
-       ApplyPostProcess: HM,
-       ToHalfFloat: mM.g,
-       FromHalfFloat: mM.c,
-       GetTextureDataAsync: hM
-     }
-   },
-   44439: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => hM
-     });
-     var OM = iM(41099),
-       SM = iM(41213),
-       jM = iM(38068),
-       aM = iM(38040),
-       PM = iM(40957),
-       nM = iM(41105),
- ... (203 more removed lines; see GitHub link above)
+       _getImageData16bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
+         const DU = zU,
+           EU = UU.width,
+           YU = UU.height;
+         let NU, IU, pU, aU = 0;
+         const tU = new Uint8Array(EU * YU * 4);
+         for (pU = cU; pU !== QU; pU += yU)
+           for (IU = AU; IU !== oU; IU += FU, aU += 2) {
+             NU = DU[aU + 0] + (DU[aU + 1] << 8);
+             const UU = 255 * ((31744 & NU) >> 10) / 31 | 0,
+               XU = 255 * ((992 & NU) >> 5) / 31 | 0,
+               zU = 255 * (31 & NU) / 31 | 0;
+             tU[4 * (IU + EU * pU) + 0] = UU, tU[4 * (IU + EU * pU) + 1] = XU, tU[4 * (IU + EU * pU) + 2] = zU, tU[4 * (IU + EU * pU) + 3] = 32768 & NU ? 0 : 255
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1609-L1982` → after: `L115-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L115-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L115-L155) · [Before (L1609-L1982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L1609-L1982)

```diff
-           resize(MM, rM) {
-             let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
-               OM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
-               SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
-             this._textures.length > 0 && this._textures.reset(), this.width = MM, this.height = rM;
-             let jM = null;
-             if (iM)
-               for (let nM = 0; nM < iM._postProcesses.length; nM++)
-                 if (null !== iM._postProcesses[nM]) {
-                   jM = iM._postProcesses[nM];
-                   break
-                 } const aM = {
-                 width: this.width,
-                 height: this.height
-               },
-               PM = {
- ... (358 more removed lines; see GitHub link above)
+         return tU
+       },
+       _getImageData24bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
+         const DU = zU,
+           EU = UU.width,
+           YU = UU.height;
+         let NU, IU, pU = 0;
+         const aU = new Uint8Array(EU * YU * 4);
+         for (IU = cU; IU !== QU; IU += yU)
+           for (NU = AU; NU !== oU; NU += FU, pU += 3) aU[4 * (NU + EU * IU) + 3] = 255, aU[4 * (NU + EU * IU) + 2] = DU[pU + 0], aU[4 * (NU + EU * IU) + 1] = DU[pU + 1], aU[4 * (NU + EU * IU) + 0] = DU[pU + 2];
+         return aU
+       },
+       _getImageData32bits: function(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
+         const DU = zU,
+           EU = UU.width,
+           YU = UU.height;
+ ... (25 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1984-L1993` → after: `L157-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L157-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L157-L160) · [Before (L1984-L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L1984-L1993)

```diff
-       constructor(MM) {
-         super({
-           ...arguments.length > 2 ? arguments[2] : void 0,
-           name: MM,
-           engine: (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || SM.c.LastCreatedEngine,
-           useShaderStore: !0,
-           useAsPostProcess: !0,
-           fragmentShader: aM.FragmentUrl,
-           defines: "#define POSITIVEX"
-         }), this._face = 0
+     };
+     class FU {
+       constructor() {
+         this.supportCascades = !1
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1995-L1996` → after: `L162-L163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L162-L163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L162-L163) · [Before (L1995-L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L1995-L1996)

```diff
-       get face() {
-         return this._face
+       loadCubeData() {
+         throw ".env not supported in Cube."
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/620.js` (Changed code · before: `L1998-L2017` → after: `L165-L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aacR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-a847808512ca45e8e2fa16b3e56d84f1bc5f028f5fde00cd6457fdf1fa979aac) · [After (L165-L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/620.js#L165-L170) · [Before (L1998-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/620.js#L1998-L2017)

```diff
-       set face(MM) {
-         if (!(MM < 0 || MM > 5)) switch (this._face = MM, this._face) {
-           case 0:
-             this.updateEffect("#define POSITIVEX");
-             break;
-           case 1:
-             this.updateEffect("#define NEGATIVEX");
-             break;
-           case 2:
-             this.updateEffect("#define POSITIVEY");
-             break;
-           case 3:
-             this.updateEffect("#define NEGATIVEY");
-             break;
-           case 4:
-             this.updateEffect("#define POSITIVEZ");
- ... (4 more removed lines; see GitHub link above)
+       loadData(UU, XU, zU) {
+         const cU = new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength),
+           AU = yU(cU);
+         zU(AU.width, AU.height, XU.generateMipMaps, !1, (() => {
+           QU(XU, cU)
+         }))
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/621.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/621.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b)

#### 1. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/621.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/621.js#L4)

```diff
-   44487: (MM, rM, iM) => {
+   44555: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/621.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/621.js#L6)

```diff
-       _HDRTextureLoader: () => zM
+       ReadExrDataAsync: () => YX,
+       _ExrTextureLoader: () => EX
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L8-L35` → after: `L9-L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L9-L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/621.js#L9-L418) · [Before (L8-L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/621.js#L8-L35)

```diff
-     var OM = iM(38040);
-     class SM {
-       static ConvertPanoramaToCubemap(MM, rM, iM, OM) {
-         let SM, jM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
-           aM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
-         if (!MM) throw "ConvertPanoramaToCubemap: input cannot be null";
-         if (MM.length != rM * iM * 3) {
-           if (MM.length != rM * iM * 4) throw "ConvertPanoramaToCubemap: input size is wrong";
-           SM = 4
-         } else SM = 3;
-         return {
-           front: this.CreateCubemapTexture(OM, this.FACE_FRONT, MM, rM, iM, jM, aM, SM),
-           back: this.CreateCubemapTexture(OM, this.FACE_BACK, MM, rM, iM, jM, aM, SM),
-           left: this.CreateCubemapTexture(OM, this.FACE_LEFT, MM, rM, iM, jM, aM, SM),
-           right: this.CreateCubemapTexture(OM, this.FACE_RIGHT, MM, rM, iM, jM, aM, SM),
-           up: this.CreateCubemapTexture(OM, this.FACE_UP, MM, rM, iM, jM, aM, SM),
- ... (12 more removed lines; see GitHub link above)
+     var cU = zU(39493),
+       yU = zU(37855),
+       QU = zU(41179);
+     const AU = 4,
+       FU = 4,
+       oU = 1,
+       DU = 2,
+       EU = 8,
+       YU = 65536,
+       NU = YU >> 3,
+       IU = 14,
+       pU = 65537,
+       aU = 1 << IU,
+       tU = aU - 1,
+       gU = 59,
+       kU = 63,
+ ... (394 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L37-L50` → after: `L420-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L420-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/621.js#L420-L511) · [Before (L37-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/621.js#L37-L50)

```diff
-           HM = rM[1].subtract(rM[0]).scale(LM / MM),
-           hM = rM[3].subtract(rM[2]).scale(LM / MM),
-           JM = 1 / MM;
-         let dM = 0;
-         for (let yM = 0; yM < MM; yM++)
-           for (let jM = 0; jM < zM; jM++) {
-             let jM = rM[0],
-               nM = rM[2];
-             for (let rM = 0; rM < MM; rM++)
-               for (let LM = 0; LM < zM; LM++) {
-                 const zM = nM.subtract(jM).scale(dM).add(jM);
-                 zM.normalize();
-                 const LM = this.CalcProjectionSpherical(zM, iM, OM, SM, PM, aM);
-                 QM[yM * MM * 3 + 3 * rM + 0] += LM.r * mM, QM[yM * MM * 3 + 3 * rM + 1] += LM.g * mM, QM[yM * MM * 3 + 3 * rM + 2] += LM.b * mM, jM = jM.add(HM), nM = nM.add(hM)
+           NU = QU * DU,
+           IU = cU * YU,
+           pU = cU * DU;
+         let aU, tU, gU, kU;
+         for (; EU <= AU; EU += NU) {
+           let yU = EU;
+           const QU = EU + cU * (zU - DU);
+           for (; yU <= QU; yU += pU) {
+             const zU = yU + IU,
+               cU = yU + oU,
+               QU = cU + IU;
+             if (FU) {
+               let AU = bU(UU[yU + XU], UU[cU + XU]);
+               aU = AU.a, gU = AU.b, AU = bU(UU[zU + XU], UU[QU + XU]), tU = AU.a, kU = AU.b, AU = bU(aU, tU), UU[yU + XU] = AU.a, UU[zU + XU] = AU.b, AU = bU(gU, kU), UU[cU + XU] = AU.a, UU[QU + XU] = AU.b
+             } else {
+               let AU = TU(UU[yU + XU], UU[cU + XU]);
+ ... (76 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L52-L152` → after: `L513-L720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L513-L720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/621.js#L513-L720) · [Before (L52-L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/621.js#L52-L152)

```diff
-             dM += JM * LM
-           }
-         return QM
-       }
-       static CalcProjectionSpherical(MM, rM, iM, OM, SM, jM) {
-         let aM = Math.atan2(MM.z, MM.x);
-         const PM = Math.acos(MM.y);
-         for (; aM < -Math.PI;) aM += 2 * Math.PI;
-         for (; aM > Math.PI;) aM -= 2 * Math.PI;
-         let nM = aM / Math.PI;
-         const QM = PM / Math.PI;
-         nM = .5 * nM + .5;
-         let zM = Math.round(nM * iM);
-         zM < 0 ? zM = 0 : zM >= iM && (zM = iM - 1);
-         let LM = Math.round(QM * OM);
-         LM < 0 ? LM = 0 : LM >= OM && (LM = OM - 1);
- ... (85 more removed lines; see GitHub link above)
+               break;
+             case 2:
+               FU[0] = QU, FU[1] = FU[0] + UU.width, FU[2] = FU[1] + UU.width, QU = FU[2] + UU.width;
+               for (let cU = 0; cU < UU.width; ++cU) {
+                 XU += zU[FU[0]++] << 24 | zU[FU[1]++] << 16 | zU[FU[2]++] << 8, yU[AU] = XU, AU++
+               }
+           }
+         }
+       return new DataView(yU.buffer)
+     }
+ 
+     function yX(UU) {
+       const XU = UU.viewer,
+         zU = {
+           value: UU.offset.value
+         },
+ ... (192 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L157-L158` → after: `L725-L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L725-L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/621.js#L725-L726) · [Before (L157-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/621.js#L157-L158)

```diff
-       loadCubeData() {
-         throw ".hdr not supported in Cube."
+       loadCubeData(UU, XU, zU, cU, yU) {
+         throw ".exr not supported in Cube."
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/621.js` (Changed code · before: `L161-L169` → after: `L729-L743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2bR729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d89f49c4426dc1d01f4c580072b276424038808c02fb84cfad9ea915c55b6e2b) · [After (L729-L743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/621.js#L729-L743) · [Before (L161-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/621.js#L161-L169)

```diff
-         const OM = new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength),
-           SM = PM(OM),
-           jM = nM(OM, SM),
-           aM = SM.width * SM.height,
-           QM = new Float32Array(4 * aM);
-         for (let PM = 0; PM < aM; PM += 1) QM[4 * PM] = jM[3 * PM], QM[4 * PM + 1] = jM[3 * PM + 1], QM[4 * PM + 2] = jM[3 * PM + 2], QM[4 * PM + 3] = 1;
-         iM(SM.width, SM.height, rM.generateMipMaps, !1, (() => {
-           const MM = rM.ph();
-           rM.type = 1, rM.format = 5, rM._gammaSpace = !1, MM._uploadDataToTextureDirectly(rM, QM)
+         const yU = new DataView(UU.buffer),
+           QU = {
+             value: 0
+           },
+           AU = iU(yU, QU);
+         oX(AU, yU, QU, FX.DefaultOutputType).then((UU => {
+           DX(UU, AU, yU, QU);
+           const cU = AU.dataWindow.xMax - AU.dataWindow.xMin + 1,
+             FU = AU.dataWindow.yMax - AU.dataWindow.yMin + 1;
+           zU(cU, FU, XU.generateMipMaps, !1, (() => {
+             const zU = XU.qp();
+             XU.format = AU.format, XU.type = UU.textureType, XU.invertY = !1, XU._gammaSpace = !AU.linearSpace, UU.byteArray && zU._uploadDataToTextureDirectly(XU, UU.byteArray, 0, 0, void 0, !0)
+           }))
+         })).catch((UU => {
+           cU.b.Error("Failed to load EXR texture: ", UU)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/622.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/622.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L4-L6` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/622.js#L4-L6) · [Before (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/622.js#L4-L6)

```diff
-   44496: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       _KTXTextureLoader: () => hM
+   44704: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L8-L391` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/622.js#L8-L14) · [Before (L8-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/622.js#L8-L391)

```diff
-     var OM = iM(39711);
-     class SM {
-       constructor(MM, rM) {
-         if (this.data = MM, this.isInvalid = !1, !SM.IsValid(MM)) return this.isInvalid = !0, void OM.e.Error("texture missing KTX identifier");
-         const iM = Uint32Array.BYTES_PER_ELEMENT,
-           jM = new DataView(this.data.buffer, this.data.byteOffset + 12, 13 * iM),
-           aM = 67305985 === jM.getUint32(0, !0);
-         return this.glType = jM.getUint32(1 * iM, aM), this.glTypeSize = jM.getUint32(2 * iM, aM), this.glFormat = jM.getUint32(3 * iM, aM), this.glInternalFormat = jM.getUint32(4 * iM, aM), this.glBaseInternalFormat = jM.getUint32(5 * iM, aM), this.pixelWidth = jM.getUint32(6 *  … [truncated]
-       }
-       uploadLevels(MM, rM) {
-         switch (this.loadType) {
-           case SM.COMPRESSED_2D:
-             this._upload2DCompressedLevels(MM, rM);
-           case SM.TEX_2D:
-           case SM.COMPRESSED_3D:
-           case SM.TEX_3D:
- ... (368 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "bumpVertex",
+       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L394` → after: `L17-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L17-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/622.js#L17-L30) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/622.js#L394)

```diff
-   44499: (MM, rM, iM) => {
+   44631: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "bumpVertexDeclaration",
+       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44577: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L398-L426` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/622.js#L34-L41) · [Before (L398-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/622.js#L398-L426)

```diff
-     class OM {
-       constructor(MM) {
-         this._pendingActions = new Array, this._workerInfos = MM.map((MM => ({
-           workerPromise: Promise.resolve(MM),
-           idle: !0
-         })))
-       }
-       dispose() {
-         for (const MM of this._workerInfos) MM.workerPromise.then((MM => {
-           MM.terminate()
-         }));
-         this._workerInfos.length = 0, this._pendingActions.length = 0
-       }
-       push(MM) {
-         this._executeOnIdleWorker(MM) || this._pendingActions.push(MM)
-       }
- ... (13 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     zU(44571), zU(44575);
+     const yU = "defaultUboDeclaration",
+       QU = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/622.js` (Changed code · before: `L428-L457` → after: `L43-L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-05d97eb12c63c1cf26ecdab637c57729f2e934747862cbea95bbda62601fb7b4) · [After (L43-L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/622.js#L43-L104) · [Before (L428-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/622.js#L428-L457)

```diff
-     class SM extends OM {
-       constructor(MM, rM) {
-         let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SM.DefaultOptions;
-         super([]), this._maxWorkers = MM, this._createWorkerAsync = rM, this._options = iM
-       }
-       push(MM) {
-         if (!this._executeOnIdleWorker(MM))
-           if (this._workerInfos.length < this._maxWorkers) {
-             const rM = {
-               workerPromise: this._createWorkerAsync(),
-               idle: !1
-             };
-             this._workerInfos.push(rM), this._execute(rM, MM)
-           } else this._pendingActions.push(MM)
-       }
-       _execute(MM, rM) {
- ... (14 more removed lines; see GitHub link above)
+   },
+   44557: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       defaultVertexShader: () => jU
+     });
+     var cU = zU(40961),
+       yU = zU(44566);
+     const QU = "defaultVertexDeclaration",
+       AU = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
+     cU.b.IncludesShadersStore[QU] || (cU.b.IncludesShadersStore[QU] = AU);
+     const FU = {
+       name: QU,
+       shader: AU
+     };
+     var oU = zU(44571),
+       DU = zU(44575),
+ ... (46 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/623.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/623.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27)

#### 1. `bundles/preprod.bloxd.io/chunks/js/623.js` (Changed code · before: `L4-L171` → after: `L4-L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-f1bf3551a628ef9935278863ca1b69614195191a0e0976a7c3fd87602a73ba27) · [After (L4-L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/623.js#L4-L404) · [Before (L4-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/623.js#L4-L171)

```diff
-   44504: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       _TGATextureLoader: () => PM
-     });
-     var OM = iM(39711);
- 
-     function SM(MM) {
-       let rM = 0;
-       return {
-         id_length: MM[rM++],
-         colormap_type: MM[rM++],
-         image_type: MM[rM++],
-         colormap_index: MM[rM++] | MM[rM++] << 8,
-         colormap_length: MM[rM++] | MM[rM++] << 8,
-         colormap_size: MM[rM++],
-         origin: [MM[rM++] | MM[rM++] << 8, MM[rM++] | MM[rM++] << 8],
- ... (152 more removed lines; see GitHub link above)
+   44692: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "bakedVertexAnimation",
+       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44606: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+ ... (385 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/624.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/624.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/624.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/624.js#L4-L7)

```diff
-   44511: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       ReadExrDataAsync: () => Lr,
-       _ExrTextureLoader: () => zr
+   44745: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/624.js` (Changed code · before: `L9-L771` → after: `L8-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3bd5c22d7f60c02d230f721d301b447446874398bd95d4ee293074bc9a04308e) · [After (L8-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/624.js#L8-L183) · [Before (L9-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/624.js#L9-L771)

```diff
-     var OM = iM(39711),
-       SM = iM(38074),
-       jM = iM(41176);
-     const aM = 4,
-       PM = 4,
-       nM = 1,
-       QM = 2,
-       zM = 8,
-       LM = 65536,
-       mM = LM >> 3,
-       HM = 14,
-       hM = 65537,
-       JM = 1 << HM,
-       dM = JM - 1,
-       yM = 59,
-       lM = 63,
- ... (747 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "decalFragmentDeclaration",
+       QU = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44850: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "depthPrePass",
+       QU = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
+ ... (160 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/625.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/625.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320)

#### 1. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L4` → after: `L4-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L4-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/625.js#L4-L31) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/625.js#L4)

```diff
-   44673: (MM, rM, iM) => {
+   44845: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "bumpFragment",
+       QU = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44824: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+ ... (12 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L8-L11` → after: `L35-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L35-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/625.js#L35-L64) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/625.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "bumpVertex",
-       jM = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpFragmentMainFunctions",
+       QU = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44841: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "clipPlaneFragment",
+       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+ ... (14 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L17` → after: `L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/625.js#L70) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/625.js#L17)

```diff
-   44595: (MM, rM, iM) => {
+   44588: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L21-L24` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/625.js#L74-L77) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/625.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "bumpVertexDeclaration",
-       jM = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L30` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/625.js#L83) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/625.js#L30)

```diff
-   44542: (MM, rM, iM) => {
+   44754: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L34-L38` → after: `L87-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L87-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/625.js#L87-L90) · [Before (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/625.js#L34-L38)

```diff
-     var OM = iM(40964);
-     iM(44525), iM(44534);
-     const SM = "defaultUboDeclaration",
-       jM = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "objectIdFunctions",
+       QU = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L44-L46` → after: `L96-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/625.js#L96-L98) · [Before (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/625.js#L44-L46)

```diff
-   44514: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       defaultVertexShader: () => KM
+   64437: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L48-L52` → after: `L100-L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/625.js#L100-L103) · [Before (L48-L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/625.js#L48-L52)

```diff
-     var OM = iM(40964),
-       SM = iM(44520);
-     const jM = "defaultVertexDeclaration",
-       aM = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nuniform mat4 view;\n#ifdef DIFFUSE\nuniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform mat4 ambientMatrix;uniform vec2 vAmbientInfos;\n#endif\n#ifdef O … [truncated]
-     OM.e.IncludesShadersStore[jM] || (OM.e.IncludesShadersStore[jM] = aM);
+     var cU = zU(40961);
+     const yU = "openpbrDielectricReflectance",
+       QU = "struct ReflectanceParams\n{float F0;float F90;vec3 coloredF0;vec3 coloredF90;};\n#define pbr_inline\nReflectanceParams dielectricReflectance(\nin float insideIOR,in float outsideIOR,in vec3 specularColor,in float specularWeight\n)\n{ReflectanceParams outParams;float d … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L56-L91` → after: `L107-L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L107-L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/625.js#L107-L261) · [Before (L56-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/625.js#L56-L91)

```diff
-     };
-     var nM = iM(44525),
-       QM = iM(44534),
-       zM = iM(44542),
-       LM = iM(44546),
-       mM = iM(44548),
-       HM = iM(44557),
-       hM = iM(44563),
-       JM = iM(44567),
-       dM = iM(44576),
-       yM = iM(44579),
-       lM = iM(44588),
-       EM = iM(44595),
-       UM = iM(44600),
-       GM = iM(44605),
-       CM = iM(44610),
- ... (20 more removed lines; see GitHub link above)
+     }
+   },
+   64442: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "openpbrGeometryInfo",
+       QU = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64448: (UU, XU, zU) => {
+ ... (139 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/625.js` (Changed code · before: `L96-L101` → after: `L266-L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-03e70b3edaf0c0d9ffd740f6aecc30e8f99a1aa22d1aba95f05b4915e6c51320) · [After (L266-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/625.js#L266-L287) · [Before (L96-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/625.js#L96-L101)

```diff
-     var FM = iM(44707);
-     const BM = "defaultVertexShader",
-       XM = "#define CUSTOM_VERTEX_EXTENSION\n#include<__decl__defaultVertex>\n#define CUSTOM_VERTEX_BEGIN\nattribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef TANGENT\nattribute vec4 tangent;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#include<uv … [truncated]
-     OM.e.ShadersStore[BM] || (OM.e.ShadersStore[BM] = XM);
-     const IM = [SM.b, PM, nM.d, QM.e, zM.c, LM.e, mM.c, HM.b, hM.b, JM.e, dM.e, yM.e, lM.d, EM.d, UM.d, GM.e, CM.b, eM.e, bM.d, wM.b, tM.b, gM.e, uM.d, RM.c, pM.d, WM.d, sM.d, DM.e, kM.b, ZM.d, oM.e, fM.d, YM.c, NM.d, vM, FM.d];
-     for (const qM of IM) OM.e.IncludesShadersStore[qM.name] || (OM.e.IncludesShadersStore[qM.name] = qM.shader);
+     var DU = zU(44822),
+       EU = zU(44791),
+       YU = zU(44824),
+       NU = zU(44588),
+       IU = zU(64221),
+       pU = zU(64429),
+       aU = zU(44571),
+       tU = zU(64197),
+       gU = zU(64437),
+       kU = zU(64266),
+       GU = zU(44798),
+       BU = zU(64442),
+       ZU = zU(64448),
+       RU = zU(44841),
+       PU = zU(44845),
+       WU = zU(64459),
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/626.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/626.js` (52 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L4)

```diff
-   44658: (MM, rM, iM) => {
+   44692: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L8)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L11` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L11) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L11)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L17)

```diff
-   44563: (MM, rM, iM) => {
+   44606: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L21` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L21) · [Before (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L21)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L24` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L24) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L24)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L30)

```diff
-   44557: (MM, rM, iM) => {
+   44597: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L32)

```diff
-       b: () => aM
+       c: () => AU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L34` → after: `L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L34) · [Before (L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L34)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L37` → after: `L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR37) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L37) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L37)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L43)

```diff
-   44649: (MM, rM, iM) => {
+   44688: (UU, XU, zU) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L45)

```diff
-       d: () => aM
+       c: () => AU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L47` → after: `L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L47) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L47)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L50)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L56)

```diff
-   44681: (MM, rM, iM) => {
+   44704: (UU, XU, zU) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L60-L63)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertex",
-       jM = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpVertex",
+       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L69)

```diff
-   44600: (MM, rM, iM) => {
+   44713: (UU, XU, zU) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L73-L102` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L73-L76) · [Before (L73-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L73-L102)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertexDeclaration",
-       jM = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44520: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "decalVertexDeclaration",
-       jM = "#ifdef DECAL\nuniform vec4 vDecalInfos;uniform mat4 decalMatrix;\n#endif\n";
- ... (14 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "clipPlaneVertex",
+       QU = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L108` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L82) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L108)

```diff
-   44605: (MM, rM, iM) => {
+   44634: (UU, XU, zU) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L110` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L84) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L110)

```diff
-       e: () => aM
+       c: () => AU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L112-L115` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L86-L89) · [Before (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L112-L115)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertexDeclaration",
-       jM = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertexDeclaration",
+       QU = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L121` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L95) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L121)

```diff
-   44548: (MM, rM, iM) => {
+   64201: (UU, XU, zU) => {
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L125-L128` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L99-L102) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L125-L128)

```diff
-     var OM = iM(40964);
-     const SM = "helperFunctions",
-       jM = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "harmonicsFunctions",
+       QU = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L134` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L108) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L134)

```diff
-   44567: (MM, rM, iM) => {
+   44609: (UU, XU, zU) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L136` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L110) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L136)

```diff
-       e: () => aM
+       c: () => AU
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L138` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L112) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L138)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L141` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L115) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L141)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L147` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L121) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L147)

```diff
-   44647: (MM, rM, iM) => {
+   44684: (UU, XU, zU) => {
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L151` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L125) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L151)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L154-L232` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L128) · [Before (L154-L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L154-L232)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44610: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "lightVxFragmentDeclaration",
-       jM = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
- ... (63 more removed lines; see GitHub link above)
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L238` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L134) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L238)

```diff
-   44642: (MM, rM, iM) => {
+   44679: (UU, XU, zU) => {
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L240` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L136) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L240)

```diff
-       d: () => aM
+       c: () => AU
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L242` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L138) · [Before (L242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L242)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L245` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L141) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L245)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L251` → after: `L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L147) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L251)

```diff
-   44631: (MM, rM, iM) => {
+   44663: (UU, XU, zU) => {
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L253` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L149) · [Before (L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L253)

```diff
-       b: () => aM
+       c: () => AU
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L255` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L151) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L255)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L258` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L154) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L258)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L264` → after: `L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L160) · [Before (L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L264)

```diff
-   44636: (MM, rM, iM) => {
+   44673: (UU, XU, zU) => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L268` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L164) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L268)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L271` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L167) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L271)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L277` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L173) · [Before (L277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L277)

```diff
-   44625: (MM, rM, iM) => {
+   44661: (UU, XU, zU) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L281` → after: `L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L177) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L281)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L284` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L180) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L284)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L290` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L186) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L290)

```diff
-   44660: (MM, rM, iM) => {
+   44571: (UU, XU, zU) => {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L292-L344` → after: `L188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L188) · [Before (L292-L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L292-L344)

```diff
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "prePassVertex",
-       jM = "#ifdef PREPASS_DEPTH\nvViewPos=(view*worldPos).rgb;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nvNormViewDepth=((view*worldPos).z-cameraInfo.x)/(cameraInfo.y-cameraInfo.x);\n#endif\n#ifdef PREPASS_LOCAL_POSITION\nvPosition=positionUpdated.xyz;\n#endif\n#if (defined … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44576: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
- ... (37 more removed lines; see GitHub link above)
+       c: () => AU
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L346` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L190) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L346)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L349-L362` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L193) · [Before (L349-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L349-L362)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44694: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "shadowsVertex",
-       jM = "#ifdef SHADOWS\n#if defined(SHADOWCSM{X})\nvPositionFromCamera{X}=view*worldPos;for (int i=0; i<SHADOWCSMNUM_CASCADES{X}; i++) {vPositionFromLight{X}[i]=lightMatrix{X}[i]*worldPos;\n#ifdef USE_REVERSE_DEPTHBUFFER\nvDepthMetric{X}[i]=(-vPositionFromLight{X}[i].z+light{ … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L368-L370` → after: `L199-L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L199-L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L199-L201) · [Before (L368-L370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L368-L370)

```diff
-   44546: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
+   64525: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       geometryVertexShader: () => CU
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L372-L375` → after: `L203-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L203-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L203-L211) · [Before (L372-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L372-L375)

```diff
-     var OM = iM(40964);
-     const SM = "uvAttributeDeclaration",
-       jM = "#ifdef UV{X}\nattribute vec2 uv{X};\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961),
+       yU = zU(44597),
+       QU = zU(44606),
+       AU = zU(44661),
+       FU = zU(44663),
+       oU = zU(44609);
+     const DU = "geometryVertexDeclaration",
+       EU = "uniform mat4 viewProjection;uniform mat4 view;";
+     cU.b.IncludesShadersStore[DU] || (cU.b.IncludesShadersStore[DU] = EU);
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L379-L388` → after: `L215-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L215-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L215-L219) · [Before (L379-L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L379-L388)

```diff
-     }
-   },
-   44664: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "uvVariableDeclaration",
-       jM = "#if !defined(UV{X}) && defined(MAINUV{X})\nvec2 uv{X}=vec2(0.,0.);\n#endif\n#ifdef MAINUV{X}\nvMainUV{X}=uv{X};\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     };
+     var NU = zU(44571);
+     const IU = "geometryUboDeclaration",
+       pU = "#include<sceneUboDeclaration>\n";
+     cU.b.IncludesShadersStore[IU] || (cU.b.IncludesShadersStore[IU] = pU);
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/626.js` (Changed code · before: `L392-L401` → after: `L223-L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224cR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-1b4d6f86423290d957e9e6246f46da917b516d5fbb4bf30bb6d7b5a6aff9224c) · [After (L223-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/626.js#L223-L237) · [Before (L392-L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/626.js#L392-L401)

```diff
-     }
-   },
-   44698: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "vertexColorMixing",
-       jM = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvColor=vec4(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvColor*=colorUpdated;\n#else\nvColor.rgb*=colorUpdated.rgb;\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvColor*=instanceColor;\n#endif\n#e … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     };
+     var tU = zU(44634),
+       gU = zU(64201),
+       kU = zU(44673),
+       GU = zU(44679),
+       BU = zU(44684),
+       ZU = zU(44688),
+       RU = zU(44692),
+       PU = zU(44713),
+       WU = zU(44704);
+     const dU = "geometryVertexShader",
+       LU = "precision highp float;\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<__decl__geom … [truncated]
+     cU.b.ShadersStore[dU] || (cU.b.ShadersStore[dU] = LU);
+     const eU = [yU.c, QU.b, AU.d, FU.c, oU.c, YU, NU.c, aU, tU.c, gU.c, kU.e, GU.c, BU.c, ZU.c, RU.d, PU.d, WU.e];
+     for (const wU of eU) cU.b.IncludesShadersStore[wU.name] || (cU.b.IncludesShadersStore[wU.name] = wU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/627.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/627.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953)

#### 1. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L4-L17` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/627.js#L4) · [Before (L4-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/627.js#L4-L17)

```diff
-   44723: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "decalFragmentDeclaration",
-       jM = "#ifdef DECAL\nuniform vec4 vDecalInfos;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44844: (MM, rM, iM) => {
+   44577: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L21-L89` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/627.js#L8-L12) · [Before (L21-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/627.js#L21-L89)

```diff
-     var OM = iM(40964);
-     const SM = "depthPrePass",
-       jM = "#ifdef DEPTHPREPASS\ngl_FragColor=vec4(0.,0.,0.,1.0);return;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44741: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "lightFragmentDeclaration",
-       jM = "#ifdef LIGHT{X}\nuniform vec4 vLightData{X};uniform vec4 vLightDiffuse{X};\n#ifdef SPECULARTERM\nuniform vec4 vLightSpecular{X};\n#else\nvec4 vLightSpecular{X}=vec4(0.);\n#endif\n#ifdef SHADOW{X}\n#ifdef SHADOWCSM{X}\nuniform mat4 lightMatrix{X}[SHADOWCSMNUM_CASCADES{ … [truncated]
- ... (53 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     zU(44571), zU(44575);
+     const yU = "defaultUboDeclaration",
+       QU = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L95-L123` → after: `L18-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L18-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/627.js#L18-L20) · [Before (L95-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/627.js#L95-L123)

```diff
-   44738: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "oitDeclaration",
-       jM = "#ifdef ORDER_INDEPENDENT_TRANSPARENCY\n#extension GL_EXT_draw_buffers : require\nlayout(location=0) out vec2 depth; \nlayout(location=1) out vec4 frontColor;layout(location=2) out vec4 backColor;\n#define MAX_DEPTH 99999.0\nhighp vec4 gl_FragColor;uniform sampler2D oi … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44876: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
- ... (13 more removed lines; see GitHub link above)
+   44739: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       defaultPixelShader: () => hU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L125-L128` → after: `L22-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/627.js#L22-L26) · [Before (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/627.js#L125-L128)

```diff
-     var OM = iM(40964);
-     const SM = "reflectionFunction",
-       jM = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961),
+       yU = zU(44745);
+     const QU = "defaultFragmentDeclaration",
+       AU = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
+     cU.b.IncludesShadersStore[QU] || (cU.b.IncludesShadersStore[QU] = AU);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L132-L141` → after: `L30-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L30-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/627.js#L30-L45) · [Before (L132-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/627.js#L132-L141)

```diff
-     }
-   },
-   44765: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "samplerFragmentDeclaration",
-       jM = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     };
+     var oU = zU(44571),
+       DU = zU(44575),
+       EU = zU(44577),
+       YU = zU(44754),
+       NU = zU(44759),
+       IU = zU(44764),
+       pU = zU(44620),
+       aU = zU(44588),
+       tU = zU(44767),
+       gU = zU(44774),
+       kU = zU(44776),
+       GU = zU(44779);
+     const BU = "lightsFragmentFunctions",
+       ZU = "struct lightingInfo\n{vec3 diffuse;\n#ifdef SPECULARTERM\nvec3 specular;\n#endif\n#ifdef NDOTL\nfloat ndl;\n#endif\n};lightingInfo computeLighting(vec3 viewDirectionW,vec3 vNormal,vec4 lightData,vec3 diffuseColor,vec3 specularColor,float range,float glossiness) {light … [truncated]
+     cU.b.IncludesShadersStore[BU] || (cU.b.IncludesShadersStore[BU] = ZU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L145-L154` → after: `L49-L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L49-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/627.js#L49-L54) · [Before (L145-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/627.js#L145-L154)

```diff
-     }
-   },
-   44525: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "sceneUboDeclaration",
-       jM = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     };
+     var PU = zU(44782),
+       WU = zU(44791);
+     const dU = "fresnelFunction",
+       LU = "#ifdef FRESNEL\nfloat computeFresnelTerm(vec3 viewDirection,vec3 worldNormal,float bias,float power)\n{float fresnelTerm=pow(bias+abs(dot(viewDirection,worldNormal)),power);return clamp(fresnelTerm,0.,1.);}\n#endif\n";
+     cU.b.IncludesShadersStore[dU] || (cU.b.IncludesShadersStore[dU] = LU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L158-L167` → after: `L58-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L58-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/627.js#L58-L73) · [Before (L158-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/627.js#L158-L167)

```diff
-     }
-   },
-   44763: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "shadowsFragmentFunctions",
-       jM = "#ifdef SHADOWS\n#if defined(WEBGL2) || defined(WEBGPU) || defined(NATIVE)\n#define TEXTUREFUNC(s,c,l) texture2DLodEXT(s,c,l)\n#else\n#define TEXTUREFUNC(s,c,b) texture2D(s,c,b)\n#endif\n#ifndef SHADOWFLOAT\nfloat unpack(vec4 color)\n{const vec4 bit_shift=vec4(1.0/(255 … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     };
+     var CU = zU(44798),
+       wU = zU(44803),
+       qU = zU(44810),
+       OU = zU(44818),
+       SU = zU(44822),
+       rU = zU(44824),
+       uU = zU(44833),
+       fU = zU(44671),
+       iU = zU(44838),
+       HU = zU(44841),
+       MU = zU(44845),
+       vU = zU(44848);
+     const VU = "defaultFragmentAlpha",
+       sU = "#ifdef OPACITY\nvec4 opacityMap=TEXRD(opacitySampler,vOpacityUV+uvOffset);\n#ifdef OPACITYRGB\nopacityMap.rgb=opacityMap.rgb*vec3(0.3,0.59,0.11);alpha*=(opacityMap.x+opacityMap.y+opacityMap.z)* vOpacityInfos.y;\n#else\nalpha*=opacityMap.a*vOpacityInfos.y;\n#endif\n#en … [truncated]
+     cU.b.IncludesShadersStore[VU] || (cU.b.IncludesShadersStore[VU] = sU);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/627.js` (Changed code · before: `L171-L180` → after: `L77-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3f5c892d39c564bfb540f82b3802a6d55f32f97cea2f5cd3319fc9c835326953) · [After (L77-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/627.js#L77-L87) · [Before (L171-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/627.js#L171-L180)

```diff
-     }
-   },
-   44788: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "textureRepetitionFunctions",
-       jM = "#if TEXTURE_REPETITION_MODE>0\nvec4 _texRepHash4(vec2 p) {return fract(sin(vec4(\n1.0+dot(p,vec2(37.0,17.0)),\n2.0+dot(p,vec2(11.0,47.0)),\n3.0+dot(p,vec2(41.0,29.0)),\n4.0+dot(p,vec2(23.0,31.0))\n))*103.0);}\n#endif\n#if TEXTURE_REPETITION_MODE==1\nvec4 _texRepSample … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     };
+     var mU = zU(44850),
+       lU = zU(44856),
+       xU = zU(44860),
+       JU = zU(44866),
+       jU = zU(44875);
+     const KU = "defaultPixelShader",
+       bU = "#define CUSTOM_FRAGMENT_EXTENSION\n#include<__decl__defaultFragment>\n#if defined(BUMP) || !defined(NORMAL)\n#extension GL_OES_standard_derivatives : enable\n#endif\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<oitDeclaration>\n#define CUSTOM_FRAGMENT_BEGIN … [truncated]
+     cU.b.ShadersStore[KU] || (cU.b.ShadersStore[KU] = bU);
+     const TU = [yU.e, FU, oU.c, DU.c, EU.d, YU.c, NU.d, IU.e, pU.e, aU.d, tU.c, gU.c, kU.d, GU.e, RU, PU.e, WU.e, eU, CU.c, wU.b, qU.c, OU.d, SU.d, rU.b, uU.c, fU.e, iU.b, HU.c, MU.c, vU.b, nU, mU.c, lU.e, xU.b, JU.e, jU.e];
+     for (const UX of TU) cU.b.IncludesShadersStore[UX.name] || (cU.b.IncludesShadersStore[UX.name] = UX.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/628.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/628.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670)

#### 1. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L4)

```diff
-   44830: (MM, rM, iM) => {
+   44841: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L6-L46` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L6) · [Before (L6-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L6-L46)

```diff
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "bumpFragment",
-       jM = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44802: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
- ... (25 more removed lines; see GitHub link above)
+       c: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L48` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L8) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L48)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L51` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L11) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L51)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L57` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L17) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L57)

```diff
-   44809: (MM, rM, iM) => {
+   44833: (UU, XU, zU) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L61` → after: `L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L21) · [Before (L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L61)

```diff
-     var OM = iM(40964);
+     var cU = zU(40961);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L64-L77` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L24) · [Before (L64-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L64-L77)

```diff
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44548: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "helperFunctions",
-       jM = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L83-L109` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L30) · [Before (L83-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L83-L109)

```diff
-   44731: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "objectIdFunctions",
-       jM = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   64392: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
- ... (11 more removed lines; see GitHub link above)
+   44866: (UU, XU, zU) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L113-L116` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L34-L37) · [Before (L113-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L113-L116)

```diff
-     var OM = iM(40964);
-     const SM = "openpbrGeometryInfo",
-       jM = "struct geometryInfoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;};struct geometryInfoAnisoOutParams\n{float NdotV;float NdotVUnclamped;vec3 environmentBrdf;float horizonOcclusion;float anisotropy;vec3 anisotropicTangent;vec3 … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragment",
+       QU = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L122` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L43) · [Before (L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L122)

```diff
-   64404: (MM, rM, iM) => {
+   44838: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L126-L142` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L47-L50) · [Before (L126-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L126-L142)

```diff
-     var OM = iM(40964);
-     const SM = "openpbrIblFunctions",
-       jM = "#ifdef REFLECTION\nvec3 sampleIrradiance(\nin vec3 surfaceNormal\n#if defined(NORMAL) && defined(USESPHERICALINVERTEX)\n,in vec3 vEnvironmentIrradianceSH\n#endif\n#if (defined(USESPHERICALFROMREFLECTIONMAP) && (!defined(NORMAL) || !defined(USESPHERICALINVERTEX))) || ( … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   64415: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "openpbrSubsurfaceLayerData",
-       jM = "float subsurface_weight=vSubsurfaceWeight;vec3 subsurface_color=vSubsurfaceColor.rgb;float subsurface_radius=vSubsurfaceRadius;vec3 subsurface_radius_scale=vSubsurfaceRadiusScale;float subsurface_scatter_anisotropy=clamp(vSubsurfaceScatterAnisotropy,-0.9999,0.9999);\n … [truncated]
- ... (1 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "fogFragmentDeclaration",
+       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L148` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L56) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L148)

```diff
-   64411: (MM, rM, iM) => {
+   44588: (UU, XU, zU) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L152-L155` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L60-L63) · [Before (L152-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L152-L155)

```diff
-     var OM = iM(40964);
-     const SM = "openpbrTransmissionLayerData",
-       jM = "float transmission_weight=vTransmissionWeight;vec3 transmission_color=vTransmissionColor.rgb;float transmission_depth=vTransmissionDepth;vec3 transmission_scatter=vTransmissionScatter.rgb;float transmission_scatter_anisotropy=clamp(vTransmissionScatterAnisotropy,-0.99 … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L161` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L69) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L161)

```diff
-   64185: (MM, rM, iM) => {
+   44803: (UU, XU, zU) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L165-L181` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L73-L76) · [Before (L165-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L165-L181)

```diff
-     var OM = iM(40964);
-     const SM = "pbrBRDFFunctions",
-       jM = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   64213: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "pbrFragmentReflectionDeclaration",
-       jM = "#ifdef REFLECTION\n#ifdef REFLECTIONMAP_3D\n#define sampleReflection(s,c) textureCube(s,c)\nuniform samplerCube reflectionSampler;\n#ifdef LODBASEDMICROSFURACE\n#define sampleReflectionLod(s,c,l) textureCubeLodEXT(s,c,l)\n#else\nuniform samplerCube reflectionSamplerLo … [truncated]
- ... (1 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "imageProcessingDeclaration",
+       QU = "#ifdef EXPOSURE\nuniform float exposureLinear;\n#endif\n#ifdef CONTRAST\nuniform float contrast;\n#endif\n#ifdef WHITEBALANCE\nuniform mat3 whiteBalanceMatrix;\n#endif\n#if defined(VIGNETTE) || defined(DITHER)\nuniform vec2 vInverseScreenSize;\n#endif\n#ifdef VIGNETTE … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L187` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L82) · [Before (L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L187)

```diff
-   64249: (MM, rM, iM) => {
+   44810: (UU, XU, zU) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L191-L194` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L86-L89) · [Before (L191-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L191-L194)

```diff
-     var OM = iM(40964);
-     const SM = "pbrIBLFunctions",
-       jM = "#if defined(REFLECTION) || defined(SS_REFRACTION)\nfloat getLodFromAlphaG(float cubeMapDimensionPixels,float microsurfaceAverageSlope) {float microsurfaceAverageSlopeTexels=cubeMapDimensionPixels*microsurfaceAverageSlope;float lod=log2(microsurfaceAverageSlopeTexels); … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "imageProcessingFunctions",
+       QU = "#if defined(COLORGRADING) && !defined(COLORGRADING3D)\n/** \n* Polyfill for SAMPLE_TEXTURE_3D,which is unsupported in WebGL.\n* sampler3dSetting.x=textureOffset (0.5/textureSize).\n* sampler3dSetting.y=textureSize.\n*/\n#define inline\nvec3 sampleTexture3D(sampler2D c … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L200` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L95) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L200)

```diff
-   44767: (MM, rM, iM) => {
+   44671: (UU, XU, zU) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L202` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L97) · [Before (L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L202)

```diff
-       d: () => aM
+       e: () => AU
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L204-L207` → after: `L99-L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L99-L102) · [Before (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L204-L207)

```diff
-     var OM = iM(40964);
-     const SM = "reflectionFunction",
-       jM = "vec3 computeFixedEquirectangularCoords(vec4 worldPos,vec3 worldNormal,vec3 direction)\n{float lon=atan(direction.z,direction.x);float lat=acos(direction.y);vec2 sphereCoords=vec2(lon,lat)*RECIPROCAL_PI2*2.0;float s=sphereCoords.x*0.5+0.5;float t=sphereCoords.y;return  … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthDeclaration",
+       QU = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L213` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L108) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L213)

```diff
-   44765: (MM, rM, iM) => {
+   44860: (UU, XU, zU) => {
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L215` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L110) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L215)

```diff
-       c: () => aM
+       b: () => AU
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L217-L220` → after: `L112-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L112-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L112-L115) · [Before (L217-L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L217-L220)

```diff
-     var OM = iM(40964);
-     const SM = "samplerFragmentDeclaration",
-       jM = "#ifdef _DEFINENAME_\n#if _DEFINENAME_DIRECTUV==1\n#define v_VARYINGNAME_UV vMainUV1\n#elif _DEFINENAME_DIRECTUV==2\n#define v_VARYINGNAME_UV vMainUV2\n#elif _DEFINENAME_DIRECTUV==3\n#define v_VARYINGNAME_UV vMainUV3\n#elif _DEFINENAME_DIRECTUV==4\n#define v_VARYINGNAM … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthFragment",
+       QU = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L226` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L121) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L226)

```diff
-   64388: (MM, rM, iM) => {
+   44754: (UU, XU, zU) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L228` → after: `L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L123) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L228)

```diff
-       e: () => aM
+       c: () => AU
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L230-L233` → after: `L125-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L125-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L125-L128) · [Before (L230-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L230-L233)

```diff
-     var OM = iM(40964);
-     const SM = "sceneFragmentDeclaration",
-       jM = "uniform mat4 viewProjection;\n#ifdef MULTIVIEW\nuniform mat4 viewProjectionR;\n#endif\nuniform mat4 view;uniform mat4 projection;uniform vec4 vEyePosition;uniform mat4 inverseProjection;\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "objectIdFunctions",
+       QU = "highp vec4 encodeObjectId(highp float objectId) {\n#ifdef PREPASS_OBJECT_ID_R8\nreturn vec4(objectId/255.0,0.0,0.0,1.0);\n#else\nhighp float id=floor(objectId);highp vec3 encodedId=vec3(\nfloor(mod(id,16777216.0)/65536.0),\nfloor(mod(id,65536.0)/256.0),\nmod(id,256.0) … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L239` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L134) · [Before (L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L239)

```diff
-   44525: (MM, rM, iM) => {
+   44759: (UU, XU, zU) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/628.js` (Changed code · before: `L243-L287` → after: `L138-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-750c4b3828e0dded3ed0c71db2bc562d3a9661863f309bb88bf90786703fb670) · [After (L138-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/628.js#L138-L142) · [Before (L243-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/628.js#L243-L287)

```diff
-     var OM = iM(40964);
-     const SM = "sceneUboDeclaration",
-       jM = "layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif \nmat4 view;mat4 projection;vec4 vEyePosition;mat4 inverseProjection;};\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   64478: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       geometryPixelShader: () => RM
-     });
-     var OM = iM(40964),
-       SM = iM(44731),
-       jM = iM(44809);
- ... (29 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     zU(44754);
+     const yU = "prePassDeclaration",
+       QU = "#ifdef PREPASS\n#extension GL_EXT_draw_buffers : require\n#ifdef PREPASS_MESH_BLEND_TAG\n#if {X}>0\n#if PREPASS_MESH_BLEND_TAG_INDEX==0\nlayout(location=0) out highp uvec4 meshBlendTagOutput;\n#else\nlayout(location=0) out highp vec4 glFragData0;\n#endif\n#endif\n#if  … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/629.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/629.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca)

#### 1. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L4)

```diff
-   44658: (MM, rM, iM) => {
+   44841: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L6)

```diff
-       d: () => aM
+       c: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "bakedVertexAnimation",
-       jM = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneFragment",
+       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L17)

```diff
-   44563: (MM, rM, iM) => {
+   44833: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L19)

```diff
-       b: () => aM
+       c: () => AU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "bakedVertexAnimationDeclaration",
-       jM = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneFragmentDeclaration",
+       QU = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L30)

```diff
-   44557: (MM, rM, iM) => {
+   44866: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L32)

```diff
-       b: () => aM
+       e: () => AU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "bonesDeclaration",
-       jM = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragment",
+       QU = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L43)

```diff
-   44649: (MM, rM, iM) => {
+   44838: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L45)

```diff
-       d: () => aM
+       b: () => AU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "bonesVertex",
-       jM = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragmentDeclaration",
+       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L56)

```diff
-   44673: (MM, rM, iM) => {
+   44588: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L60-L63)

```diff
-     var OM = iM(40964);
-     const SM = "bumpVertex",
-       jM = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L69)

```diff
-   44681: (MM, rM, iM) => {
+   44671: (UU, XU, zU) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L73-L76)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertex",
-       jM = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthDeclaration",
+       QU = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L82)

```diff
-   44600: (MM, rM, iM) => {
+   44860: (UU, XU, zU) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L84` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L84) · [Before (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L84)

```diff
-       d: () => aM
+       b: () => AU
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L86-L89)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertexDeclaration",
-       jM = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthFragment",
+       QU = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L95-L97` → after: `L95-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L95-L97) · [Before (L95-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L95-L97)

```diff
-   64193: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
+   64003: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       skyPixelShader: () => gU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L99-L102` → after: `L99-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR99) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L99-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L99-L109) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L99-L102)

```diff
-     var OM = iM(40964);
-     const SM = "harmonicsFunctions",
-       jM = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961),
+       yU = zU(44833),
+       QU = zU(44671),
+       AU = zU(44838),
+       FU = zU(44588),
+       oU = zU(44841),
+       DU = zU(44860),
+       EU = zU(44866);
+     const YU = "imageProcessingCompatibility",
+       NU = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
+     cU.b.IncludesShadersStore[YU] || (cU.b.IncludesShadersStore[YU] = NU);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/629.js` (Changed code · before: `L104-L237` → after: `L111-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733caR111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dabc828b792d3a33a53593e80784f7447820aec4a3dc8b2c1a5d0c78713733ca) · [After (L111-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/629.js#L111-L118) · [Before (L104-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/629.js#L104-L237)

```diff
-       name: SM,
-       shader: jM
-     }
-   },
-   44567: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "instancesDeclaration",
-       jM = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
- ... (118 more removed lines; see GitHub link above)
+         name: YU,
+         shader: NU
+       },
+       pU = "skyPixelShader",
+       aU = "precision highp float;varying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;uniform vec3 cameraOffset;uniform vec3 up;uniform float luminance;uniform float turbidity;uniform floa … [truncated]
+     cU.b.ShadersStore[pU] || (cU.b.ShadersStore[pU] = aU);
+     const tU = [yU.c, QU.e, AU.b, FU.d, oU.c, DU.b, EU.e, IU];
+     for (const kU of tU) cU.b.IncludesShadersStore[kU.name] || (cU.b.IncludesShadersStore[kU.name] = kU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/630.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/630.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/630.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/630.js#L4)

```diff
-   44542: (MM, rM, iM) => {
+   44588: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/630.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/630.js#L6)

```diff
-       c: () => aM
+       d: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L8-L12` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/630.js#L8-L11) · [Before (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/630.js#L8-L12)

```diff
-     var OM = iM(40964);
-     iM(44525), iM(44534);
-     const SM = "defaultUboDeclaration",
-       jM = "layout(std140,column_major) uniform;uniform Material\n{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;v … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L18` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/630.js#L17) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/630.js#L18)

```diff
-   44714: (MM, rM, iM) => {
+   64057: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L20` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/630.js#L19) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/630.js#L20)

```diff
-       defaultPixelShader: () => cM
+       rgbdDecodePixelShader: () => oU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/630.js` (Changed code · before: `L22-L87` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1cR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d693e3cba12089116e612e4fd03f6e2f89fa20a9a08a6323d916198decaf9b1c) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/630.js#L21-L27) · [Before (L22-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/630.js#L22-L87)

```diff
-     var OM = iM(40964),
-       SM = iM(44723);
-     const jM = "defaultFragmentDeclaration",
-       aM = "uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;uniform vec4 vSpecularColor;uniform vec3 vEmissiveColor;uniform vec3 vAmbientColor;uniform float visibility;\n#ifdef DIFFUSE\nuniform vec2 vDiffuseInfos;\n#endif\n#ifdef AMBIENT\nuniform vec2 vAmbientInfos;\n#endif\ … [truncated]
-     OM.e.IncludesShadersStore[jM] || (OM.e.IncludesShadersStore[jM] = aM);
-     const PM = {
-       name: jM,
-       shader: aM
-     };
-     var nM = iM(44525),
-       QM = iM(44534),
-       zM = iM(44542),
-       LM = iM(44731),
-       mM = iM(44733),
-       HM = iM(44738),
-       hM = iM(44579),
- ... (50 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(44588);
+     const QU = "rgbdDecodePixelShader",
+       AU = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
+     cU.b.ShadersStore[QU] || (cU.b.ShadersStore[QU] = AU);
+     const FU = [yU.d];
+     for (const DU of FU) cU.b.IncludesShadersStore[DU.name] || (cU.b.IncludesShadersStore[DU.name] = DU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/631.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/631.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94)

#### 1. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/631.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/631.js#L4)

```diff
-   44821: (MM, rM, iM) => {
+   44588: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/631.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/631.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragment",
-       jM = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L17-L19` → after: `L17-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/631.js#L17-L19) · [Before (L17-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/631.js#L17-L19)

```diff
-   44809: (MM, rM, iM) => {
-     iM.d(rM, {
-       c: () => aM
+   64069: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       rgbdEncodePixelShader: () => oU
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/631.js` (Changed code · before: `L21-L142` → after: `L21-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-55742e3914d209deaf42e4a81bd203a1e8a3c585ea13de55f81175cf6b37fa94) · [After (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/631.js#L21-L27) · [Before (L21-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/631.js#L21-L142)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragmentDeclaration",
-       jM = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44868: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "fogFragment",
-       jM = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
- ... (106 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(44588);
+     const QU = "rgbdEncodePixelShader",
+       AU = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
+     cU.b.ShadersStore[QU] || (cU.b.ShadersStore[QU] = AU);
+     const FU = [yU.d];
+     for (const DU of FU) cU.b.IncludesShadersStore[DU.name] || (cU.b.IncludesShadersStore[DU.name] = DU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/632.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/632.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L4)

```diff
-   44821: (MM, rM, iM) => {
+   44692: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragment",
-       jM = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bakedVertexAnimation",
+       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L17)

```diff
-   44809: (MM, rM, iM) => {
+   44606: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L19)

```diff
-       c: () => aM
+       b: () => AU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneFragmentDeclaration",
-       jM = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bakedVertexAnimationDeclaration",
+       QU = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L30)

```diff
-   44868: (MM, rM, iM) => {
+   44597: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L32)

```diff
-       b: () => aM
+       c: () => AU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "fogFragment",
-       jM = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bonesDeclaration",
+       QU = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L43)

```diff
-   44813: (MM, rM, iM) => {
+   44688: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "fogFragmentDeclaration",
-       jM = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bonesVertex",
+       QU = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L56)

```diff
-   44548: (MM, rM, iM) => {
+   44713: (UU, XU, zU) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L58)

```diff
-       c: () => aM
+       d: () => AU
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L60-L63)

```diff
-     var OM = iM(40964);
-     const SM = "helperFunctions",
-       jM = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertex",
+       QU = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L69)

```diff
-   44633: (MM, rM, iM) => {
+   44634: (UU, XU, zU) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L71)

```diff
-       b: () => aM
+       c: () => AU
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L73-L76)

```diff
-     var OM = iM(40964);
-     const SM = "logDepthDeclaration",
-       jM = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertexDeclaration",
+       QU = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L82)

```diff
-   44862: (MM, rM, iM) => {
+   44721: (UU, XU, zU) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L86-L89` → after: `L86-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L86-L89) · [Before (L86-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L86-L89)

```diff
-     var OM = iM(40964);
-     const SM = "logDepthFragment",
-       jM = "#ifdef LOGARITHMICDEPTH\ngl_FragDepthEXT=log2(vFragmentDepth)*logarithmicDepthConstant*0.5;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogVertex",
+       QU = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L95` → after: `L95-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L95-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L95-L147) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L95)

```diff
-   63963: (MM, rM, iM) => {
+   44642: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "fogVertexDeclaration",
+       QU = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44609: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+ ... (37 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L97` → after: `L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L149) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L97)

```diff
-       skyPixelShader: () => yM
+       colorVertexShader: () => kU
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/632.js` (Changed code · before: `L99-L118` → after: `L151-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-662a0ea5c3c07e0110d88dcb85e7660adbcbce11e6ebce8d2751c7533ddfc7c1) · [After (L151-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/632.js#L151-L167) · [Before (L99-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/632.js#L99-L118)

```diff
-     var OM = iM(40964),
-       SM = iM(44809),
-       jM = iM(44633),
-       aM = iM(44813),
-       PM = iM(44548),
-       nM = iM(44821),
-       QM = iM(44862),
-       zM = iM(44868);
-     const LM = "imageProcessingCompatibility",
-       mM = "#ifdef IMAGEPROCESSINGPOSTPROCESS\ngl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(2.2));\n#endif\n";
-     OM.e.IncludesShadersStore[LM] || (OM.e.IncludesShadersStore[LM] = mM);
-     const HM = {
-         name: LM,
-         shader: mM
-       },
-       hM = "skyPixelShader",
- ... (4 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(44597),
+       QU = zU(44606),
+       AU = zU(44634),
+       FU = zU(44642),
+       oU = zU(44609),
+       DU = zU(44684),
+       EU = zU(44688),
+       YU = zU(44692),
+       NU = zU(44713),
+       IU = zU(44721),
+       pU = zU(44728);
+     const aU = "colorVertexShader",
+       tU = "attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform mat4 view;\n#endif\n#include<i … [truncated]
+     cU.b.ShadersStore[aU] || (cU.b.ShadersStore[aU] = tU);
+     const gU = [yU.c, QU.b, AU.c, FU.c, oU.c, DU.c, EU.c, YU.d, NU.d, IU.d, pU.e];
+ ... (1 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/633.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/633.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f)

#### 1. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/633.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/633.js#L4)

```diff
-   44548: (MM, rM, iM) => {
+   44609: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/633.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/633.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "helperFunctions",
-       jM = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "instancesDeclaration",
+       QU = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L17` → after: `L17-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L17-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/633.js#L17-L30) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/633.js#L17)

```diff
-   64034: (MM, rM, iM) => {
+   44684: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "instancesVertex",
+       QU = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64563: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L19` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/633.js#L32) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/633.js#L19)

```diff
-       rgbdDecodePixelShader: () => nM
+       greasedLineVertexShader: () => DU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/633.js` (Changed code · before: `L21-L27` → after: `L34-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282fR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-abea642aa976f6185d49ef363e7d009b62634c940bc47f561854e10ad1c3282f) · [After (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/633.js#L34-L41) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/633.js#L21-L27)

```diff
-     var OM = iM(40964),
-       SM = iM(44548);
-     const jM = "rgbdDecodePixelShader",
-       aM = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=vec4(fromRGBD(texture2D(textureSampler,vUV)),1.0);}";
-     OM.e.ShadersStore[jM] || (OM.e.ShadersStore[jM] = aM);
-     const PM = [SM.c];
-     for (const QM of PM) OM.e.IncludesShadersStore[QM.name] || (OM.e.IncludesShadersStore[QM.name] = QM.shader);
+     var cU = zU(40961),
+       yU = zU(44609),
+       QU = zU(44684);
+     const AU = "greasedLineVertexShader",
+       FU = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
+     cU.b.ShadersStore[AU] || (cU.b.ShadersStore[AU] = FU);
+     const oU = [yU.c, QU.c];
+     for (const EU of oU) cU.b.IncludesShadersStore[EU.name] || (cU.b.IncludesShadersStore[EU.name] = EU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/634.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/634.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05)

#### 1. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/634.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/634.js#L4)

```diff
-   44548: (MM, rM, iM) => {
+   44704: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/634.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/634.js#L6)

```diff
-       c: () => aM
+       e: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/634.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/634.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "helperFunctions",
-       jM = "const float PI=3.1415926535897932384626433832795;const float TWO_PI=6.283185307179586;const float HALF_PI=1.5707963267948966;const float RECIPROCAL_PI=0.3183098861837907;const float RECIPROCAL_PI2=0.15915494309189535;const float RECIPROCAL_PI4=0.07957747154594767;cons … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpVertex",
+       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L17` → after: `L17-L70`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L17-L70)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/634.js#L17-L70) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/634.js#L17)

```diff
-   64039: (MM, rM, iM) => {
+   44631: (UU, XU, zU) => {
+     zU.d(XU, {
+       b: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "bumpVertexDeclaration",
+       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   64201: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+ ... (38 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L19` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/634.js#L72) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/634.js#L19)

```diff
-       rgbdEncodePixelShader: () => nM
+       pbrVertexShader: () => JU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/634.js` (Changed code · before: `L21-L27` → after: `L74-L122`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-9f230b03f82712f2ba9e81e7f4cff8ca79f80e29d903eb7a136a1fe403090c05) · [After (L74-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/634.js#L74-L122) · [Before (L21-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/634.js#L21-L27)

```diff
-     var OM = iM(40964),
-       SM = iM(44548);
-     const jM = "rgbdEncodePixelShader",
-       aM = "varying vec2 vUV;uniform sampler2D textureSampler;\n#include<helperFunctions>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) \n{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}";
-     OM.e.ShadersStore[jM] || (OM.e.ShadersStore[jM] = aM);
-     const PM = [SM.c];
-     for (const QM of PM) OM.e.IncludesShadersStore[QM.name] || (OM.e.IncludesShadersStore[QM.name] = QM.shader);
+     var cU = zU(40961),
+       yU = zU(44566);
+     const QU = "pbrVertexDeclaration",
+       AU = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
+     cU.b.IncludesShadersStore[QU] || (cU.b.IncludesShadersStore[QU] = AU);
+     const FU = {
+       name: QU,
+       shader: AU
+     };
+     var oU = zU(44571),
+       DU = zU(44575),
+       EU = zU(64189),
+       YU = zU(44582),
+       NU = zU(44620),
+       IU = zU(44588),
+       pU = zU(64197),
+ ... (33 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/635.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/635.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L4)

```diff
-   44658: (MM, rM, iM) => {
+   44713: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "bakedVertexAnimation",
-       jM = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\n#define BVASNAME bakedVertexAnimationSettingsInstanced\n#else\n#define BVASNAME bakedVertexAnimationSettings\n#endif\nfloat VATStartFrame=BVASNAME.x;float VATEndFrame=BVASNAME.y;float VATOffsetFrame=BVASNAME. … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertex",
+       QU = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L17)

```diff
-   44563: (MM, rM, iM) => {
+   44634: (UU, XU, zU) => {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L19)

```diff
-       b: () => aM
+       c: () => AU
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "bakedVertexAnimationDeclaration",
-       jM = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform float bakedVertexAnimationTime;\n#if !defined(WEBGL2) && !defined(WEBGPU)\nuniform vec2 bakedVertexAnimationTextureSizeInverted;\n#endif\nuniform vec4 bakedVertexAnimationSettings;uniform sampler2D bakedVertexAnimationTex … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertexDeclaration",
+       QU = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L30)

```diff
-   44557: (MM, rM, iM) => {
+   44721: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L32)

```diff
-       b: () => aM
+       d: () => AU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "bonesDeclaration",
-       jM = "#if NUM_BONE_INFLUENCERS>0\nattribute vec4 matricesIndices;attribute vec4 matricesWeights;\n#if NUM_BONE_INFLUENCERS>4\nattribute vec4 matricesIndicesExtra;attribute vec4 matricesWeightsExtra;\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nunifor … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogVertex",
+       QU = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L43)

```diff
-   44649: (MM, rM, iM) => {
+   44642: (UU, XU, zU) => {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L45)

```diff
-       d: () => aM
+       c: () => AU
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "bonesVertex",
-       jM = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nmat4 influence;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,matricesIndices[0])*matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence+=readMatrixFromRawSampler(boneSampler … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogVertexDeclaration",
+       QU = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L56` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L56) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L56)

```diff
-   44681: (MM, rM, iM) => {
+   44671: (UU, XU, zU) => {
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L60-L63` → after: `L60-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L60-L63) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L60-L63)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertex",
-       jM = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthDeclaration",
+       QU = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L69)

```diff
-   44600: (MM, rM, iM) => {
+   44732: (UU, XU, zU) => {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L73-L76` → after: `L73-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L73-L76) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L73-L76)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertexDeclaration",
-       jM = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "logDepthVertex",
+       QU = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L82-L84` → after: `L82-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L82-L84) · [Before (L82-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L82-L84)

```diff
-   44687: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
+   63990: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       particlesVertexShader: () => IU
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/635.js` (Changed code · before: `L86-L167` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43aR86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-d2fa32617022f1b68275666970d419997d671b0b51b87ae45ca5b6e4dc35c43a) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/635.js#L86-L97) · [Before (L86-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/635.js#L86-L167)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertex",
-       jM = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44605: (MM, rM, iM) => {
-     iM.d(rM, {
-       e: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "fogVertexDeclaration",
-       jM = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
- ... (66 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(44634),
+       QU = zU(44642),
+       AU = zU(44671),
+       FU = zU(44713),
+       oU = zU(44721),
+       DU = zU(44732);
+     const EU = "particlesVertexShader",
+       YU = "attribute vec3 position;attribute vec4 color;attribute float angle;attribute vec2 size;\n#ifdef ANIMATESHEET\nattribute float cellIndex;\n#endif\n#ifndef BILLBOARD\nattribute vec3 direction;\n#endif\n#ifdef BILLBOARDSTRETCHED\nattribute vec3 direction;\n#endif\n#ifdef … [truncated]
+     cU.b.ShadersStore[EU] || (cU.b.ShadersStore[EU] = YU);
+     const NU = [yU.c, QU.c, AU.e, FU.d, oU.d, DU.d];
+     for (const pU of NU) cU.b.IncludesShadersStore[pU.name] || (cU.b.IncludesShadersStore[pU.name] = pU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/636.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/636.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78)

#### 1. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/636.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/636.js#L4)

```diff
-   44567: (MM, rM, iM) => {
+   44713: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/636.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/636.js#L6)

```diff
-       e: () => aM
+       d: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/636.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/636.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "instancesDeclaration",
-       jM = "#ifdef INSTANCES\nattribute vec4 world0;attribute vec4 world1;attribute vec4 world2;attribute vec4 world3;\n#ifdef INSTANCESCOLOR\nattribute vec4 instanceColor;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform mat4 world;\n#endif\n#if defined(VELOC … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertex",
+       QU = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/636.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/636.js#L17)

```diff
-   44647: (MM, rM, iM) => {
+   44634: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/636.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/636.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "instancesVertex",
-       jM = "#ifdef INSTANCES\nmat4 finalWorld=mat4(world0,world1,world2,world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nmat4 finalPreviousWorld=mat4(previousWorld0,previousWorld1,\npreviousWorld2,previo … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneVertexDeclaration",
+       QU = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L30` → after: `L30-L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L30-L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/636.js#L30-L82) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/636.js#L30)

```diff
-   64511: (MM, rM, iM) => {
+   44721: (UU, XU, zU) => {
+     zU.d(XU, {
+       d: () => AU
+     });
+     var cU = zU(40961);
+     const yU = "fogVertex",
+       QU = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
+     const AU = {
+       name: yU,
+       shader: QU
+     }
+   },
+   44642: (UU, XU, zU) => {
+     zU.d(XU, {
+       c: () => AU
+ ... (37 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L32` → after: `L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R84) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/636.js#L84) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/636.js#L32)

```diff
-       greasedLineVertexShader: () => QM
+       skyVertexShader: () => IU
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/636.js` (Changed code · before: `L34-L41` → after: `L86-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-13df5fabbc3aac0d7b35b398c0264a18d32d83e8788bba9dc1ea46715682fa78) · [After (L86-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/636.js#L86-L97) · [Before (L34-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/636.js#L34-L41)

```diff
-     var OM = iM(40964),
-       SM = iM(44567),
-       jM = iM(44647);
-     const aM = "greasedLineVertexShader",
-       PM = "precision highp float;\n#include<instancesDeclaration>\nattribute float grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute vec3 grl_offsets;\n#endif\nattribute float grl_colorPointers;attribute vec3 position;uniform mat4 viewProjection;uniform mat4 projection;var … [truncated]
-     OM.e.ShadersStore[aM] || (OM.e.ShadersStore[aM] = PM);
-     const nM = [SM.e, jM.c];
-     for (const zM of nM) OM.e.IncludesShadersStore[zM.name] || (OM.e.IncludesShadersStore[zM.name] = zM.shader);
+     var cU = zU(40961),
+       yU = zU(44671),
+       QU = zU(44634),
+       AU = zU(44642),
+       FU = zU(44713),
+       oU = zU(44732),
+       DU = zU(44721);
+     const EU = "skyVertexShader",
+       YU = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
+     cU.b.ShadersStore[EU] || (cU.b.ShadersStore[EU] = YU);
+     const NU = [yU.e, QU.c, AU.c, FU.d, oU.d, DU.d];
+     for (const pU of NU) cU.b.IncludesShadersStore[pU.name] || (cU.b.IncludesShadersStore[pU.name] = pU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/637.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/637.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8)

#### 1. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L4)

```diff
-   44673: (MM, rM, iM) => {
+   44845: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L6)

```diff
-       d: () => aM
+       c: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "bumpVertex",
-       jM = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvec3 tbnNormal=normalize(normalUpdated);vec3 tbnTangent=normalize(tangentUpdated.xyz);vec3 tbnBitangent=cross(tbnNormal,tbnTangent)*tang … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpFragment",
+       QU = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L17)

```diff
-   44595: (MM, rM, iM) => {
+   44824: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L19)

```diff
-       d: () => aM
+       b: () => AU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L21-L24` → after: `L21-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L21-L25) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "bumpVertexDeclaration",
-       jM = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     zU(44791);
+     const yU = "bumpFragmentFunctions",
+       QU = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L30` → after: `L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L31) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L30)

```diff
-   64193: (MM, rM, iM) => {
+   44822: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L32` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L33) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L32)

```diff
-       b: () => aM
+       d: () => AU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L34-L37` → after: `L35-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L35-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L35-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "harmonicsFunctions",
-       jM = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nvec3 computeEnvironmentIrradiance(vec3 normal) {return vSphericalL00\n+ vSphericalL1_1*(normal.y)\n+ vSphericalL10*(normal.z)\n+ vSphericalL11*(normal.x)\n+ vSphericalL2_2*(normal.y*normal.x)\n+ vSpheri … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpFragmentMainFunctions",
+       QU = "#ifndef TEXRD_DEFINED\n#define TEXRD(s,uv) texture2D(s,uv)\n#define TEXRD_DEFINED\n#endif\n#if defined(BUMP) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC) || defined(DETAIL)\n#if defined(TANGENT) && defined(NORMAL) \nvarying mat3 vTBN;\n#endif\n#ifdef OBJECTSPACE … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L43)

```diff
-   64185: (MM, rM, iM) => {
+   44779: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L45)

```diff
-       b: () => aM
+       e: () => AU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "pbrBRDFFunctions",
-       jM = "#define FRESNEL_MAXIMUM_ON_ROUGH 0.25\n#define BRDF_DIFFUSE_MODEL_EON 0\n#define BRDF_DIFFUSE_MODEL_BURLEY 1\n#define BRDF_DIFFUSE_MODEL_LAMBERT 2\n#define BRDF_DIFFUSE_MODEL_LEGACY 3\n#define DIELECTRIC_SPECULAR_MODEL_GLTF 0\n#define DIELECTRIC_SPECULAR_MODEL_OPENPBR … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clusteredLightingFunctions",
+       QU = "struct ClusteredLight {vec4 vLightData;vec4 vLightDiffuse;vec4 vLightSpecular;vec4 vLightDirection;vec4 vLightFalloff;};\n#define inline\nClusteredLight getClusteredLight(sampler2D lightDataTexture,int index) {return ClusteredLight(\ntexelFetch(lightDataTexture,ivec2( … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L56)

```diff
-   64176: (MM, rM, iM) => {
+   44848: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L58` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L59) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L58)

```diff
-       c: () => aM
+       b: () => AU
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L60-L64` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L61-L64) · [Before (L60-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L60-L64)

```diff
-     var OM = iM(40964);
-     iM(44525), iM(44534);
-     const SM = "pbrUboDeclaration",
-       jM = "layout(std140,column_major) uniform;uniform Material {vec2 vAlbedoInfos;vec2 vBaseWeightInfos;vec2 vBaseDiffuseRoughnessInfos;vec4 vAmbientInfos;vec2 vOpacityInfos;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec3 vReflectivityInfos;vec2 vMicroSurfaceSamplerInfos;vec3 vBum … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "decalFragment",
+       QU = "#ifdef DECAL\n#ifdef GAMMADECAL\ndecalColor.rgb=toLinearSpace(decalColor.rgb);\n#endif\n#ifdef DECAL_SMOOTHALPHA\ndecalColor.a*=decalColor.a;\n#endif\nsurfaceAlbedo.rgb=mix(surfaceAlbedo.rgb,decalColor.rgb,decalColor.a);\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L70-L72` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L70-L72) · [Before (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L70-L72)

```diff
-   64169: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       pbrVertexShader: () => IM
+   44856: (UU, XU, zU) => {
+     zU.d(XU, {
+       e: () => AU
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/637.js` (Changed code · before: `L74-L122` → after: `L74-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-3d53e1f929e373ed68084b133de5561501bb0cc250eebda03f17b27e8a62fdc8) · [After (L74-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/637.js#L74-L77) · [Before (L74-L122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/637.js#L74-L122)

```diff
-     var OM = iM(40964),
-       SM = iM(44520);
-     const jM = "pbrVertexDeclaration",
-       aM = "uniform mat4 view;uniform mat4 viewProjection;uniform vec4 vEyePosition;\n#ifdef MULTIVIEW\nmat4 viewProjectionR;\n#endif\n#ifdef ALBEDO\nuniform mat4 albedoMatrix;uniform vec2 vAlbedoInfos;\n#endif\n#ifdef BASE_WEIGHT\nuniform mat4 baseWeightMatrix;uniform vec2 vBase … [truncated]
-     OM.e.IncludesShadersStore[jM] || (OM.e.IncludesShadersStore[jM] = aM);
-     const PM = {
-       name: jM,
-       shader: aM
-     };
-     var nM = iM(44525),
-       QM = iM(44534),
-       zM = iM(64176),
-       LM = iM(44546),
-       mM = iM(44579),
-       HM = iM(44548),
-       hM = iM(64185),
- ... (33 more removed lines; see GitHub link above)
+     var cU = zU(40961);
+     const yU = "lightFragment",
+       QU = "#ifdef LIGHT{X}\n#if defined(SHADOWONLY) || defined(LIGHTMAP) && defined(LIGHTMAPEXCLUDED{X}) && defined(LIGHTMAPNOSPECULAR{X})\n#else\nvec4 diffuse{X}=light{X}.vLightDiffuse;\n#define CUSTOM_LIGHT{X}_COLOR \n#if defined(PBR) && defined(CLUSTLIGHT{X}) && defined(CLUST … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/638.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/638.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L4)

```diff
-   44681: (MM, rM, iM) => {
+   44841: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L6)

```diff
-       e: () => aM
+       c: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertex",
-       jM = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneFragment",
+       QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistan … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L17)

```diff
-   44600: (MM, rM, iM) => {
+   44833: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L19)

```diff
-       d: () => aM
+       c: () => AU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertexDeclaration",
-       jM = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "clipPlaneFragmentDeclaration",
+       QU = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClip … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L30)

```diff
-   44687: (MM, rM, iM) => {
+   44866: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L32)

```diff
-       d: () => aM
+       e: () => AU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L34-L37` → after: `L34-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L34-L37) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertex",
-       jM = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragment",
+       QU = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L43` → after: `L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L43) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L43)

```diff
-   44605: (MM, rM, iM) => {
+   44838: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L45)

```diff
-       e: () => aM
+       b: () => AU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L47-L50` → after: `L47-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R47) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L47-L50) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertexDeclaration",
-       jM = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "fogFragmentDeclaration",
+       QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogIn … [truncated]
+     cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L56-L58` → after: `L56-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L56-L58) · [Before (L56-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L56-L58)

```diff
-   44633: (MM, rM, iM) => {
-     iM.d(rM, {
-       b: () => aM
+   45242: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       colorPixelShader: () => YU
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/638.js` (Changed code · before: `L60-L97` → after: `L60-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0R60) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-e0a035155568ddf8ce715629e414882810737fae69a3ff520a8bf48322c780c0) · [After (L60-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/638.js#L60-L69) · [Before (L60-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/638.js#L60-L97)

```diff
-     var OM = iM(40964);
-     const SM = "logDepthDeclaration",
-       jM = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
-     const aM = {
-       name: SM,
-       shader: jM
-     }
-   },
-   44707: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
-     });
-     var OM = iM(40964);
-     const SM = "logDepthVertex",
-       jM = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
- ... (22 more removed lines; see GitHub link above)
+     var cU = zU(40961),
+       yU = zU(44833),
+       QU = zU(44838),
+       AU = zU(44841),
+       FU = zU(44866);
+     const oU = "colorPixelShader",
+       DU = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoi … [truncated]
+     cU.b.ShadersStore[oU] || (cU.b.ShadersStore[oU] = DU);
+     const EU = [yU.c, QU.b, AU.c, FU.e];
+     for (const NU of EU) cU.b.IncludesShadersStore[NU.name] || (cU.b.IncludesShadersStore[NU.name] = NU.shader);
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/639.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/639.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9)

#### 1. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L4)

```diff
-   44681: (MM, rM, iM) => {
+   45043: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L6)

```diff
-       e: () => aM
+       d: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertex",
-       jM = "#ifdef CLIPPLANE\nfClipDistance=dot(worldPos,vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nfClipDistance2=dot(worldPos,vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nfClipDistance3=dot(worldPos,vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nfClipDistance4=dot(worldPos,vClipPlane4);\ … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpVertex",
+       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNorma … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L17)

```diff
-   44600: (MM, rM, iM) => {
+   44945: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L19)

```diff
-       d: () => aM
+       e: () => AU
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L21-L24` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L21-L24) · [Before (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L21-L24)

```diff
-     var OM = iM(40964);
-     const SM = "clipPlaneVertexDeclaration",
-       jM = "#ifdef CLIPPLANE\nuniform vec4 vClipPlane;varying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nuniform vec4 vClipPlane2;varying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nuniform vec4 vClipPlane3;varying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nuni … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "bumpVertexDeclaration",
+       QU = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L30)

```diff
-   44687: (MM, rM, iM) => {
+   44898: (UU, XU, zU) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L32)

```diff
-       d: () => aM
+       b: () => AU
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L34-L37` → after: `L34-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L34-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L34-L38) · [Before (L34-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L34-L37)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertex",
-       jM = "#ifdef FOG\nvFogDistance=(view*worldPos).xyz;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     zU(44887), zU(44891);
+     const yU = "defaultUboDeclaration",
+       QU = "uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f; … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L43` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L44) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L43)

```diff
-   44605: (MM, rM, iM) => {
+   44910: (UU, XU, zU) => {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L45` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L46) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L45)

```diff
-       e: () => aM
+       c: () => AU
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L47-L50` → after: `L48-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L48-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L48-L51) · [Before (L47-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L47-L50)

```diff
-     var OM = iM(40964);
-     const SM = "fogVertexDeclaration",
-       jM = "#ifdef FOG\nvarying vec3 vFogDistance;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "helperFunctions",
+       QU = "const PI: f32=3.1415926535897932384626433832795;const TWO_PI: f32=6.283185307179586;const HALF_PI: f32=1.5707963267948966;const RECIPROCAL_PI: f32=0.3183098861837907;const RECIPROCAL_PI2: f32=0.15915494309189535;const RECIPROCAL_PI4: f32=0.07957747154594767;const HALF … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L56` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L57) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L56)

```diff
-   44633: (MM, rM, iM) => {
+   44887: (UU, XU, zU) => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L60-L63` → after: `L61-L64`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R61) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L61-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L61-L64) · [Before (L60-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L60-L63)

```diff
-     var OM = iM(40964);
-     const SM = "logDepthDeclaration",
-       jM = "#ifdef LOGARITHMICDEPTH\nuniform float logarithmicDepthConstant;varying float vFragmentDepth;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "sceneUboDeclaration",
+       QU = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L69-L71` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L70-L72) · [Before (L69-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L69-L71)

```diff
-   44707: (MM, rM, iM) => {
-     iM.d(rM, {
-       d: () => aM
+   44881: (UU, XU, zU) => {
+     zU.r(XU), zU.d(XU, {
+       defaultVertexShaderWGSL: () => lU
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L73-L76` → after: `L74-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L74-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L74-L91) · [Before (L73-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L73-L76)

```diff
-     var OM = iM(40964);
-     const SM = "logDepthVertex",
-       jM = "#ifdef LOGARITHMICDEPTH\nvFragmentDepth=1.0+gl_Position.w;gl_Position.z=log2(max(0.000001,vFragmentDepth))*logarithmicDepthConstant;\n#endif\n";
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961),
+       yU = zU(44887),
+       QU = zU(44891),
+       AU = zU(44898),
+       FU = zU(44904),
+       oU = zU(44910),
+       DU = zU(44917),
+       EU = zU(44919),
+       YU = zU(44921),
+       NU = zU(44926),
+       IU = zU(44935),
+       pU = zU(44939),
+       aU = zU(44945),
+       tU = zU(44954),
+       gU = zU(44962);
+     const kU = "lightVxFragmentDeclaration",
+ ... (2 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/639.js` (Changed code · before: `L80-L97` → after: `L95-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-dc6c41adecab4ac1c07b11c18b3490c60b702f2cad48208622fc38b30ae435c9) · [After (L95-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/639.js#L95-L120) · [Before (L80-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/639.js#L80-L97)

```diff
-     }
-   },
-   63957: (MM, rM, iM) => {
-     iM.r(rM), iM.d(rM, {
-       skyVertexShader: () => HM
-     });
-     var OM = iM(40964),
-       SM = iM(44633),
-       jM = iM(44600),
-       aM = iM(44605),
-       PM = iM(44681),
-       nM = iM(44707),
-       QM = iM(44687);
-     const zM = "skyVertexShader",
-       LM = "precision highp float;attribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;uniform mat4 view;uniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvary … [truncated]
-     OM.e.ShadersStore[zM] || (OM.e.ShadersStore[zM] = LM);
- ... (2 more removed lines; see GitHub link above)
+     };
+     var ZU = zU(44966),
+       RU = zU(44975),
+       PU = zU(44977),
+       WU = zU(44983),
+       dU = zU(44992),
+       LU = zU(44997),
+       eU = zU(45004),
+       CU = zU(45006),
+       wU = zU(45010),
+       qU = zU(45019),
+       OU = zU(45027),
+       SU = zU(45032),
+       rU = zU(45036),
+       uU = zU(45041),
+       fU = zU(45043),
+ ... (10 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/640.js` (fo1voe.f743fbcf → fecih8.fbb4bdb3)

- **File**: `bundles/preprod.bloxd.io/chunks/js/640.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L4)

```diff
-   44830: (MM, rM, iM) => {
+   44921: (UU, XU, zU) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L6)

```diff
-       e: () => aM
+       d: () => AU
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L8-L11)

```diff
-     var OM = iM(40964);
-     const SM = "bumpFragment",
-       jM = "vec2 uvOffset=vec2(0.0,0.0);\n#if defined(BUMP) || defined(PARALLAX) || defined(DETAIL)\n#ifdef NORMALXYSCALE\nfloat normalScale=1.0;\n#elif defined(BUMP)\nfloat normalScale=vBumpInfos.y;\n#else\nfloat normalScale=1.0;\n#endif\n#if defined(TANGENT) && defined(NORMAL)\ … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "instancesDeclaration",
+       QU = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform wor … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L17)

```diff
-   44802: (MM, rM, iM) => {
+   45010: (UU, XU, zU) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L21-L25` → after: `L21-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L21-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L21-L24) · [Before (L21-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L21-L25)

```diff
-     var OM = iM(40964);
-     iM(44765);
-     const SM = "bumpFragmentFunctions",
-       jM = "#if defined(BUMP)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_SAMPLERNAME_,bump)\n#endif\n#if defined(DETAIL)\n#include<samplerFragmentDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_SAMPLERNAME_,detail)\n#endif\n#if defined(BUMP … [truncated]
-     OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
+     var cU = zU(40961);
+     const yU = "instancesVertex",
+       QU = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=m … [truncated]
+     cU.b.IncludesShadersStoreWGSL[yU] || (cU.b.IncludesShadersStoreWGSL[yU] = QU);
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L31` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L30) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L31)

```diff
-   44796: (MM, rM, iM) => {
+   44891: (UU, XU, zU) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/640.js` (Changed code · before: `L33` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2eR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/0e31f855d2381a764c255056f39ee81b78285147...build/preprod.bloxd.io/fecih8.fbb4bdb3#diff-80917ba3a8f7b7cf8909d37d2b9710304c0683713138b21373087e3315b59e2e) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/fecih8.fbb4bdb3/bundles/preprod.bloxd.io/chunks/js/640.js#L32) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/0e31f855d2381a764c255056f39ee81b78285147/bundles/preprod.bloxd.io/chunks/js/640.js#L33)

```diff
-       b: () => aM
+       c: () => AU
```
